import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, get, set, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCNlPVPqg9e631cSJw-ZRtVGrIt35kPxPA",
    databaseURL: "gifted-quiz.firebaseapp.com",
    projectId: "gifted-quiz",
    appId: "1:807944427128:web:e449f1919686e8ea6a7f8d",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

let allData = { "물리": [], "화학": [], "생물": [], "지구과학": [], "정수": [], "해석": [], "기하": [], "조합": [] };
let currentUser = "";
let solvedData = {}; 
let currentQuestions = []; 
let currentIndex = 0;
let authMode = "login"; 

const loadData = async (fileName, subjectName) => {
    try {
        const module = await import(`./${fileName}.js`);
        allData[subjectName] = Object.values(module).flat();
    } catch (e) { console.warn(`${fileName}.js 없음`); }
};

async function initApp() {
    const subjects = [
        ['physics', '물리'], ['chemistry', '화학'], ['biology', '생물'], ['earthScience', '지구과학'],
        ['numberTheory', '정수'], ['analysis', '해석'], ['geometry', '기하'], ['combinatorics', '조합']
    ];
    for (const [f, s] of subjects) await loadData(f, s);
}
initApp();

// 화면 전환 함수 (강제성 강화)
window.showScreen = (id) => {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => {
        s.classList.remove('active');
        s.style.display = 'none'; // CSS 클래스 외에 직접 숨김
    });
    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
        target.style.display = 'block'; // 직접 보여줌
        console.log("화면 전환됨:", id);
    }
};

// 로그인/회원가입 입력창 호출
window.showAuthForm = (mode) => {
    authMode = mode;
    document.getElementById('auth-title').innerText = mode === 'login' ? '로그인' : '회원가입';
    window.showScreen('auth-screen');
};

// 통합 인증 처리
window.handleAuth = async () => {
    const id = document.getElementById('user-id').value.trim();
    const pw = document.getElementById('user-pw').value.trim();
    
    if (!id || !pw) return alert("닉네임과 비밀번호를 모두 입력하세요!");

    const userRef = ref(db, `users/${id}`);
    const snapshot = await get(userRef);

    if (authMode === 'signup') {
        if (snapshot.exists()) {
            alert("이미 존재하는 닉네임입니다.");
        } else {
            await set(userRef, { password: pw, solved: {} });
            alert("회원가입 성공! 이제 로그인해주세요.");
            window.showAuthForm('login');
        }
    } else {
        if (snapshot.exists()) {
            const userData = snapshot.val();
            if (userData.password === pw) {
                currentUser = id;
                solvedData = userData.solved || {};
                document.getElementById('welcome-msg').innerText = `${id}님, 환영합니다!`;
                window.showScreen('main-menu');
            } else {
                alert("비밀번호가 잘못되었습니다.");
            }
        } else {
            alert("가입되지 않은 아이디입니다.");
        }
    }
};

window.logout = () => {
    location.reload(); // 로그아웃 시 깔끔하게 새로고침
};

// --- 퀴즈 및 도감 로직 ---
window.startQuiz = (subject, mode) => {
    let source = allData[subject] || [];
    if (mode === 'review') {
        source = source.filter(q => solvedData[q.category] && solvedData[q.category][q.id] === 1);
        if (source.length === 0) return alert("틀린 문제가 없습니다!");
    }
    if (source.length === 0) return alert("문제가 없습니다! 데이터를 확인하세요.");
    currentQuestions = source.sort(() => Math.random() - 0.5);
    currentIndex = 0;
    window.showScreen('quiz-screen');
    window.renderQuestion();
};

window.renderQuestion = () => {
    const q = currentQuestions[currentIndex];
    const container = document.getElementById('question-display');
    container.innerHTML = `
        <p style="color:gray;">[${q.category}] ${q.id}번</p>
        <div style="font-size:20px; margin:20px 0; font-weight:bold;">${q.question}</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            ${q.options.map(opt => `<button onclick="checkAnswer('${opt}')" style="background:white; color:black; border:1px solid #ddd;">${opt}</button>`).join('')}
        </div>
    `;
};

window.checkAnswer = async (selected) => {
    const q = currentQuestions[currentIndex];
    const isCorrect = (selected === q.answer);
    if (!solvedData[q.category]) solvedData[q.category] = {};
    solvedData[q.category][q.id] = isCorrect ? 3 : 1;
    await update(ref(db, `users/${currentUser}`), { solved: solvedData });
    alert(isCorrect ? "정답!" : "오답! 정답: " + q.answer);
    currentIndex++;
    if (currentIndex < currentQuestions.length) window.renderQuestion();
    else window.showScreen('main-menu');
};

window.renderDogam = (subject) => {
    window.showScreen('dogam-view');
    document.getElementById('dogam-title').innerText = subject + " 도감";
    const container = document.getElementById('grid-10-100');
    container.innerHTML = "";
    for (let i = 1; i <= 300; i++) {
        const cell = document.createElement('div');
        cell.className = 'problem-cell';
        cell.innerText = i;
        const status = (solvedData[subject] && solvedData[subject][i]) || 0;
        if (status === 3) cell.style.background = "#4dff4d";
        else if (status === 1) cell.style.background = "#ff4d4d";
        container.appendChild(cell);
    }
};