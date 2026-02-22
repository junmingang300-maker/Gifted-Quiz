export const analysis_Part1 = [
  { id: 1, category: "해석학", question: "함수 f(x)가 x=a에서 연속이면 f(a)가 반드시 존재한다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 2, category: "해석학", question: "lim (x->0) (sin x / x) 의 값은?", options: ["0", "1", "e", "존재하지 않음"], answer: "1", isCalc: true },
  { id: 3, category: "해석학", question: "f(x) = e^x 를 미분한 결과 f'(x)는?", options: ["e^x", "ln x", "xe^(x-1)", "1/x"], answer: "e^x", isCalc: false },
  { id: 4, category: "해석학", question: "[영재고] 수렴하는 수열은 반드시 유계(bounded)이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 5, category: "해석학", question: "f(x) = |x| 는 x=0에서 미분 가능한가?", options: ["가능", "불가능"], answer: "불가능", isCalc: false },
  { id: 6, category: "해석학", question: "부정적분 ∫ (1/x) dx 의 결과는? (C는 적분상수)", options: ["ln|x|+C", "-1/x^2+C", "x^2/2+C", "e^x+C"], answer: "ln|x|+C", isCalc: false },
  { id: 7, category: "해석학", question: "미분 가능한 함수 f(x)에 대해 f'(c)=0인 점 c를 무엇이라 하는가?", options: ["변곡점", "임계점", "연속점", "불연속점"], answer: "임계점", isCalc: false },
  { id: 8, category: "해석학", question: "[영재고] lim (n->∞) (1 + 1/n)^n 의 수렴값은?", options: ["0", "1", "e", "∞"], answer: "e", isCalc: true },
  { id: 9, category: "해석학", question: "함수 f(x)의 도함수 f'(x)가 양수이면 f(x)는 그 구간에서 증가한다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 10, category: "해석학", question: "f(x) = sin x 를 미분하면?", options: ["cos x", "-cos x", "sin x", "-sin x"], answer: "cos x", isCalc: false },
  { id: 11, category: "해석학", question: "f(x) = cos x 를 미분하면?", options: ["sin x", "-sin x", "cos x", "-cos x"], answer: "-sin x", isCalc: false },
  { id: 12, category: "해석학", question: "[영재고] 평균값 정리의 전제 조건은 닫힌 구간에서 연속이고 열린 구간에서 미분 가능함이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 13, category: "해석학", question: "ln x 를 미분하면?", options: ["e^x", "1/x", "x", "1/x^2"], answer: "1/x", isCalc: false },
  { id: 14, category: "해석학", question: "곡선의 오목과 볼록이 변하는 점을 무엇이라 하는가?", options: ["극점", "임계점", "변곡점", "접점"], answer: "변곡점", isCalc: false },
  { id: 15, category: "해석학", question: "f(x) = x^n 을 미분하면? (n은 상수)", options: ["nx^(n-1)", "x^(n+1)/(n+1)", "nx^n", "n^x"], answer: "nx^(n-1)", isCalc: false },
  { id: 16, category: "해석학", question: "[영재고] f(x)가 [a,b]에서 연속이면 f는 이 구간에서 반드시 최댓값과 최솟값을 가진다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 17, category: "해석학", question: "함수의 곱의 미분법 (fg)' 은?", options: ["f'g'", "f'g + fg'", "f' + g'", "fg + f'g'"], answer: "f'g + fg'", isCalc: false },
  { id: 18, category: "해석학", question: "합성함수의 미분법을 흔히 무엇이라 부르는가?", options: ["몫의 미분", "부분 미분", "연쇄 법칙(Chain Rule)", "치환 미분"], answer: "연쇄 법칙(Chain Rule)", isCalc: false },
  { id: 19, category: "해석학", question: "lim (x->∞) (1/x) 의 값은?", options: ["0", "1", "∞", "-∞"], answer: "0", isCalc: true },
  { id: 20, category: "해석학", question: "[영재고] 로피탈의 정리는 0/0 꼴이나 ∞/∞ 꼴의 극한에서 사용할 수 있다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 21, category: "해석학", question: "∫ sin x dx 의 결과는?", options: ["cos x + C", "-cos x + C", "sin x + C", "-sin x + C"], answer: "-cos x + C", isCalc: false },
  { id: 22, category: "해석학", question: "두 함수로 둘러싸인 넓이는 상단 함수에서 하단 함수를 뺀 값의 정적분이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 23, category: "해석학", question: "f(x) = tan x 를 미분하면?", options: ["sec^2 x", "csc^2 x", "cot x", "sec x tan x"], answer: "sec^2 x", isCalc: false },
  { id: 24, category: "해석학", question: "[영재고] f(x)가 미분 가능할 때, f'(a)=0 이고 f''(a)>0 이면 x=a에서 극솟값을 가진다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 25, category: "해석학", question: "정적분의 기본 정리에 따르면 ∫(a to b) f(x)dx = F(b) - F(a) 이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 26, category: "해석학", question: "1/x^2 을 x에 대해 미분하면?", options: ["-2/x^3", "2/x", "-1/x", "2x"], answer: "-2/x^3", isCalc: true },
  { id: 27, category: "해석학", question: "부분적분법은 어떤 미분법의 역과정인가?", options: ["합의 미분", "곱의 미분", "합성함수 미분", "몫의 미분"], answer: "곱의 미분", isCalc: false },
  { id: 28, category: "해석학", question: "[영재고] 모든 무한급수는 수렴한다. (참/거짓)", options: ["참", "거짓"], answer: "거짓", isCalc: false },
  { id: 29, category: "해석학", question: "함수 f(x) = c (상수)를 미분하면?", options: ["0", "1", "c", "x"], answer: "0", isCalc: false },
  { id: 30, category: "해석학", question: "y = x^2 의 x=1에서의 접선의 기울기는?", options: ["1", "2", "3", "4"], answer: "2", isCalc: true },
  { id: 31, category: "해석학", question: "미분계수 f'(a)의 기하학적 의미는 x=a에서의 접선의 기울기이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 32, category: "해석학", question: "[영재고] 조화급수 Σ(1/n) 은 수렴하는가 발산하는가?", options: ["수렴", "발산"], answer: "발산", isCalc: false },
  { id: 33, category: "해석학", question: "f(x) = √x 를 미분하면?", options: ["1/(2√x)", "2√x", "1/√x", "x^(3/2)"], answer: "1/(2√x)", isCalc: true },
  { id: 34, category: "해석학", question: "함수가 미분 가능하면 반드시 연속이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 35, category: "해석학", question: "lim (x->0) (e^x - 1) / x 의 값은?", options: ["0", "1", "e", "ln 2"], answer: "1", isCalc: true },
  { id: 36, category: "해석학", question: "[영재고] 함수 f가 x=a에서 극값을 가지면 f'(a)=0 이다. (단, f는 미분 가능)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 37, category: "해석학", question: "∫ e^x dx 의 결과는?", options: ["e^x + C", "e^(x+1) + C", "xe^x + C", "ln|e^x| + C"], answer: "e^x + C", isCalc: false },
  { id: 38, category: "해석학", question: "f(x) = log_a x 를 미분하면?", options: ["1/(x ln a)", "1/x", "ln a / x", "a^x"], answer: "1/(x ln a)", isCalc: false },
  { id: 39, category: "해석학", question: "다항함수는 모든 실수 범위에서 연속이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 40, category: "해석학", question: "[영재고] 수열의 극한에서 샌드위치 정리(조임 정리)는 수렴성을 판정할 때 유용하다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 41, category: "해석학", question: "f(x) = x^3 - 3x 에서 극댓값은 어디서 발생하는가?", options: ["x=1", "x=-1", "x=0", "x=3"], answer: "x=-1", isCalc: true },
  { id: 42, category: "해석학", question: "두 함수 f, g가 연속이면 f+g도 연속이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 43, category: "해석학", question: "lim (x->1) (x^2 - 1) / (x - 1) 의 값은?", options: ["0", "1", "2", "존재하지 않음"], answer: "2", isCalc: true },
  { id: 44, category: "해석학", question: "[영재고] 무한 등비급수 Σ ar^(n-1) 이 수렴할 조건은?", options: ["|r| < 1", "|r| <= 1", "r > 0", "r = 1"], answer: "|r| < 1", isCalc: false },
  { id: 45, category: "해석학", question: "∫ cos x dx 의 결과는?", options: ["sin x + C", "-sin x + C", "cos x + C", "-cos x + C"], answer: "sin x + C", isCalc: false },
  { id: 46, category: "해석학", question: "f(x)가 기함수(odd function)이면 ∫(-a to a) f(x)dx 값은?", options: ["0", "2f(a)", "a^2", "알 수 없음"], answer: "0", isCalc: false },
  { id: 47, category: "해석학", question: "f(x) = 2x + 3 의 역함수를 미분하면?", options: ["1/2", "2", "-2", "1/(2x+3)"], answer: "1/2", isCalc: true },
  { id: 48, category: "해석학", question: "[영재고] 테일러 급수는 함수를 어떤 형태의 합으로 나타내는 것인가?", options: ["다항식", "삼각함수", "지수함수", "로그함수"], answer: "다항식", isCalc: false },
  { id: 49, category: "해석학", question: "y = x^2 를 x=0부터 x=2까지 정적분한 값은?", options: ["8/3", "4", "2", "1/3"], answer: "8/3", isCalc: true },
  { id: 50, category: "해석학", question: "해석학의 기본 정리 중 '사이값 정리'는 근의 존재를 증명할 때 사용될 수 있다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false }
];export const analysis_Part2 = [
  {
    id: 51,
    category: "해석학",
    question: "이차함수 y = x^2 - 6x + 8 의 x절편은?",
    options: ["2, 4", "1, 8", "-2, -4", "3, 5"],
    answer: "2, 4",
    isCalc: true
  },
  {
    id: 52,
    category: "해석학",
    question: "f(x) = 3x - 1 일 때, f(f(1))의 값은?",
    options: ["2", "5", "8", "11"],
    answer: "5",
    isCalc: true
  },
  {
    id: 53,
    category: "해석학",
    question: "복소수 (1+i)^2 을 계산하면?",
    options: ["2", "2i", "1+2i", "-2i"],
    answer: "2i",
    isCalc: true
  },
  {
    id: 54,
    category: "해석학",
    question: "방정식 x^2 - 5x + 6 = 0 의 두 근의 곱은?",
    options: ["5", "-5", "6", "-6"],
    answer: "6",
    isCalc: true
  },
  {
    id: 55,
    category: "해석학",
    question: "[영재고 기출] x가 무한대로 갈 때, (2x+1)/(x-3) 의 극한값은?",
    options: ["0", "1", "2", "무한대"],
    answer: "2",
    isCalc: true
  },
  {
    id: 56,
    category: "해석학",
    question: "log3(x) = 2 일 때, x의 값은?",
    options: ["6", "8", "9", "27"],
    answer: "9",
    isCalc: true
  },
  {
    id: 57,
    category: "해석학",
    question: "수열 a_n = 2^n - 1 의 제 4항은?",
    options: ["7", "15", "31", "16"],
    answer: "15",
    isCalc: true
  },
  {
    id: 58,
    category: "해석학",
    question: "부등식 |x-1| > 2 의 해는?",
    options: ["x > 3 또는 x < -1", "-1 < x < 3", "x > 2", "x < -2"],
    answer: "x > 3 또는 x < -1",
    isCalc: true
  },
  {
    id: 59,
    category: "해석학",
    question: "다항식 x^2 + ax + 4 가 완전제곱식이 되기 위한 양수 a의 값은?",
    options: ["2", "4", "8", "16"],
    answer: "4",
    isCalc: true
  },
  {
    id: 60,
    category: "해석학",
    question: "[영재고 기출] 2^x = 3, 3^y = 4 일 때, xy의 값은?",
    options: ["1", "2", "log2(4)", "log3(2)"],
    answer: "2",
    isCalc: true
  },
  {
    id: 61,
    category: "해석학",
    question: "함수 y = sin(2x) 의 주기는?",
    options: ["파이/2", "파이", "2파이", "4파이"],
    answer: "파이",
    isCalc: true
  },
  {
    id: 62,
    category: "해석학",
    question: "두 행렬의 곱셈은 교환법칙이 항상 성립한다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "거짓",
    isCalc: false
  },
  {
    id: 63,
    category: "해석학",
    question: "집합 A={1, 2, 3}에서 A로의 항등함수의 개수는?",
    options: ["1", "3", "6", "9"],
    answer: "1",
    isCalc: false
  },
  {
    id: 64,
    category: "해석학",
    question: "이차방정식의 판별식 D < 0 이면 어떤 근을 가지는가?",
    options: ["서로 다른 두 실근", "중근", "서로 다른 두 허근", "근이 없다"],
    answer: "서로 다른 두 허근",
    isCalc: false
  },
  {
    id: 65,
    category: "해석학",
    question: "함수 y = log(x-1) 의 점근선은?",
    options: ["x=0", "x=1", "y=0", "y=1"],
    answer: "x=1",
    isCalc: true
  },
  {
    id: 66,
    category: "해석학",
    question: "[영재고 기출] 시그마 (2k-1) (k=1부터 n까지)의 합은?",
    options: ["n^2", "n(n+1)", "n^2+n", "2n^2"],
    answer: "n^2",
    isCalc: true
  },
  {
    id: 67,
    category: "해석학",
    question: "무리함수 y = 루트(2-x) 의 정의역은?",
    options: ["x >= 2", "x <= 2", "x > 2", "x < 2"],
    answer: "x <= 2",
    isCalc: false
  },
  {
    id: 68,
    category: "해석학",
    question: "함수 f(x) = x^3 은 어떤 대칭을 가지는가?",
    options: ["x축 대칭", "y축 대칭", "원점 대칭", "y=x 대칭"],
    answer: "원점 대칭",
    isCalc: false
  },
  {
    id: 69,
    category: "해석학",
    question: "tan(45도)의 값은?",
    options: ["0", "1/2", "1", "루트3"],
    answer: "1",
    isCalc: false
  },
  {
    id: 70,
    category: "해석학",
    question: "[영재고 기출] f(x+y) = f(x) + f(y)를 만족하고 f(1)=2일 때 f(10)은?",
    options: ["10", "12", "20", "2^10"],
    answer: "20",
    isCalc: true
  },
  {
    id: 71,
    category: "해석학",
    question: "직선 y=2x-3 을 y축 방향으로 2만큼 평행이동하면?",
    options: ["y=2x-1", "y=2x-5", "y=2(x-2)-3", "y=4x-3"],
    answer: "y=2x-1",
    isCalc: true
  },
  {
    id: 72,
    category: "해석학",
    question: "이차함수 y = -(x-1)^2 + 3 의 그래프의 꼭짓점은?",
    options: ["(1, 3)", "(-1, 3)", "(1, -3)", "(-1, -3)"],
    answer: "(1, 3)",
    isCalc: true
  },
  {
    id: 73,
    category: "해석학",
    question: "x + y = 3, xy = 2 일 때 x^2 + y^2 의 값은?",
    options: ["5", "7", "9", "13"],
    answer: "5",
    isCalc: true
  },
  {
    id: 74,
    category: "해석학",
    question: "함수 f(x) = |x| 는 x=0에서 미분 가능한가?",
    options: ["예", "아니오"],
    answer: "아니오",
    isCalc: false
  },
  {
    id: 75,
    category: "해석학",
    question: "[영재고 기출] 등비수열의 합 공식에서 공비 r이 1일 때 합은?",
    options: ["0", "a*n", "a", "정의되지 않음"],
    answer: "a*n",
    isCalc: false
  },
  {
    id: 76,
    category: "해석학",
    question: "cos(60도)의 값은?",
    options: ["1/2", "루트2/2", "루트3/2", "1"],
    answer: "1/2",
    isCalc: false
  },
  {
    id: 77,
    category: "해석학",
    question: "x^3 + 1 을 인수분해하면 (x+1)(...) 이다. 빈칸은?",
    options: ["x^2+x+1", "x^2-x+1", "x^2+1", "x^2-1"],
    answer: "x^2-x+1",
    isCalc: false
  },
  {
    id: 78,
    category: "해석학",
    question: "log(1)의 값은?",
    options: ["0", "1", "10", "없음"],
    answer: "0",
    isCalc: false
  },
  {
    id: 79,
    category: "해석학",
    question: "함수 y = 3^x 의 그래프가 반드시 지나는 점은?",
    options: ["(0, 0)", "(1, 0)", "(0, 1)", "(1, 1)"],
    answer: "(0, 1)",
    isCalc: false
  },
  {
    id: 80,
    category: "해석학",
    question: "[영재고 기출] 자연수 n에 대하여 1 + 2 + ... + n = n(n+1)/2 임을 증명하는 방법은?",
    options: ["수학적 귀납법", "귀류법", "모순법", "연역법"],
    answer: "수학적 귀납법",
    isCalc: false
  },
  {
    id: 81,
    category: "해석학",
    question: "두 직선 y=x 와 y=-x 는 서로 수직인가?",
    options: ["예", "아니오"],
    answer: "예",
    isCalc: false
  },
  {
    id: 82,
    category: "해석학",
    question: "방정식 루트(x-1) = 2 의 해는?",
    options: ["3", "5", "4", "없음"],
    answer: "5",
    isCalc: true
  },
  {
    id: 83,
    category: "해석학",
    question: "f(x) = x^2 일 때 f'(x)는?",
    options: ["x", "2x", "x^2", "2"],
    answer: "2x",
    isCalc: false
  },
  {
    id: 84,
    category: "해석학",
    question: "역함수가 존재하기 위한 함수의 조건은?",
    options: ["상수함수", "일대일 대응", "다항함수", "연속함수"],
    answer: "일대일 대응",
    isCalc: false
  },
  {
    id: 85,
    category: "해석학",
    question: "[영재고 기출] sin^2(x) + cos^2(x) = 1 은 모든 x에 대해 성립한다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 86,
    category: "해석학",
    question: "복소수 i + i^2 + i^3 + i^4 의 값은?",
    options: ["0", "1", "i", "-1"],
    answer: "0",
    isCalc: true
  },
  {
    id: 87,
    category: "해석학",
    question: "함수 y = 1/(x-2) 의 치역은?",
    options: ["모든 실수", "y != 0", "y != 2", "y > 0"],
    answer: "y != 0",
    isCalc: false
  },
  {
    id: 88,
    category: "해석학",
    question: "지수방정식 4^x = 8 의 해는?",
    options: ["1", "1.5", "2", "3"],
    answer: "1.5",
    isCalc: true
  },
  {
    id: 89,
    category: "해석학",
    question: "다항식 x^2 - y^2 을 인수분해하면?",
    options: ["(x-y)^2", "(x+y)^2", "(x-y)(x+y)", "x^2+y^2"],
    answer: "(x-y)(x+y)",
    isCalc: false
  },
  {
    id: 90,
    category: "해석학",
    question: "[영재고 기출] 산술평균이 기하평균보다 항상 크거나 같다. (단, 양수일 때) (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 91,
    category: "해석학",
    question: "함수 y = 2x + 1 의 역함수는?",
    options: ["y = 0.5x - 0.5", "y = 2x - 1", "y = 0.5x + 1", "y = x - 2"],
    answer: "y = 0.5x - 0.5",
    isCalc: true
  },
  {
    id: 92,
    category: "해석학",
    question: "이차방정식 x^2 + x + 1 = 0 의 두 근의 합은?",
    options: ["1", "-1", "0", "없음"],
    answer: "-1",
    isCalc: true
  },
  {
    id: 93,
    category: "해석학",
    question: "로그 log_a(a) 의 값은?",
    options: ["0", "1", "a", "없음"],
    answer: "1",
    isCalc: false
  },
  {
    id: 94,
    category: "해석학",
    question: "수열 1, 3, 9, 27... 의 일반항 a_n은?",
    options: ["3n", "3^n", "3^(n-1)", "2n+1"],
    answer: "3^(n-1)",
    isCalc: false
  },
  {
    id: 95,
    category: "해석학",
    question: "[영재고 기출] 모든 x에 대해 f(x) = f(-x) 이면 이 함수는 y축 대칭이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 96,
    category: "해석학",
    question: "절댓값 부등식 |x| < 0 의 해는?",
    options: ["0", "모든 실수", "없다", "x < 0"],
    answer: "없다",
    isCalc: false
  },
  {
    id: 97,
    category: "해석학",
    question: "함수 f(x) = 2^x 와 g(x) = log2(x) 는 서로 어떤 관계인가?",
    options: ["역함수", "합성함수", "동일함수", "상수함수"],
    answer: "역함수",
    isCalc: false
  },
  {
    id: 98,
    category: "해석학",
    question: "부등식 x^2 <= 0 의 해는?",
    options: ["없다", "x = 0", "x < 0", "모든 실수"],
    answer: "x = 0",
    isCalc: false
  },
  {
    id: 99,
    category: "해석학",
    question: "점 (0,0)과 직선 x+y-2=0 사이의 거리는?",
    options: ["1", "루트2", "2", "2루트2"],
    answer: "루트2",
    isCalc: true
  },
  {
    id: 100,
    category: "해석학",
    question: "[영재고 기출] 다항식 f(x)를 x-a로 나눈 나머지는 f(a)이다. 이 정리의 이름은?",
    options: ["인수정리", "나머지정리", "피타고라스 정리", "근의 공식"],
    answer: "나머지정리",
    isCalc: false
  }
];export const analysis_Part3 = [
  {
    id: 101,
    category: "해석학",
    question: "함수 f(x) = x+1 의 역함수는?",
    options: ["x-1", "-x+1", "x+1", "1/x+1"],
    answer: "x-1",
    isCalc: false
  },
  {
    id: 102,
    category: "해석학",
    question: "log_2(8)의 값은?",
    options: ["2", "3", "4", "8"],
    answer: "3",
    isCalc: true
  },
  {
    id: 103,
    category: "해석학",
    question: "lim(x->0) sin(x)/x의 값은?",
    options: ["0", "1", "-1", "무한대"],
    answer: "1",
    isCalc: false
  },
  {
    id: 104,
    category: "해석학",
    question: "y = x^2의 원점에서의 미분계수는?",
    options: ["0", "1", "2", "무한대"],
    answer: "0",
    isCalc: false
  },
  {
    id: 105,
    category: "해석학",
    question: "[영재고 기출] 10!의 0의 개수는?",
    options: ["1", "2", "3", "4"],
    answer: "2",
    isCalc: true
  },
  {
    id: 106,
    category: "해석학",
    question: "수열 a_n = 3n-1의 제 10항은?",
    options: ["27", "28", "29", "30"],
    answer: "29",
    isCalc: true
  },
  {
    id: 107,
    category: "해석학",
    question: "집합 A={1,2}, B={2,3}일 때 A∩B는?",
    options: ["{1,3}", "{2}", "{1,2,3}", "∅"],
    answer: "{2}",
    isCalc: false
  },
  {
    id: 108,
    category: "해석학",
    question: "방정식 2^x = 16의 해는?",
    options: ["2", "3", "4", "5"],
    answer: "4",
    isCalc: true
  },
  {
    id: 109,
    category: "해석학",
    question: "y = |x|의 그래프는 y축 대칭이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 110,
    category: "해석학",
    question: "[영재고 기출] f(x)=x^2+1일 때 f(f(1))의 값은?",
    options: ["2", "3", "4", "5"],
    answer: "5",
    isCalc: true
  },
  {
    id: 111,
    category: "해석학",
    question: "cos(0)의 값은?",
    options: ["0", "1", "-1", "0.5"],
    answer: "1",
    isCalc: false
  },
  {
    id: 112,
    category: "해석학",
    question: "행렬의 역행렬이 존재하기 위한 조건은 행렬식이 0이 아니다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 113,
    category: "해석학",
    question: "x^2+y^2=1은 원의 방정식이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 114,
    category: "해석학",
    question: "복소수 i의 4제곱은?",
    options: ["1", "i", "-1", "-i"],
    answer: "1",
    isCalc: false
  },
  {
    id: 115,
    category: "해석학",
    question: "[영재고 기출] 10,000의 10%의 10%는?",
    options: ["10", "100", "1000", "1"],
    answer: "100",
    isCalc: true
  },
  {
    id: 116,
    category: "해석학",
    question: "다항식 x^2-1의 근은?",
    options: ["1", "-1", "1, -1", "0"],
    answer: "1, -1",
    isCalc: false
  },
  {
    id: 117,
    category: "해석학",
    question: "log(x)+log(y)=log(xy)이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 118,
    category: "해석학",
    question: "f(x)=e^x의 미분은?",
    options: ["e^x", "xe^(x-1)", "0", "1"],
    answer: "e^x",
    isCalc: false
  },
  {
    id: 119,
    category: "해석학",
    question: "tan(x)=sin(x)/cos(x)이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 120,
    category: "해석학",
    question: "[영재고 기출] n이 무한대로 갈 때 (1+1/n)^n의 값은?",
    options: ["1", "e", "2", "무한대"],
    answer: "e",
    isCalc: false
  },
  {
    id: 121,
    category: "해석학",
    question: "y=x^3-x의 극대값의 개수는?",
    options: ["0", "1", "2", "3"],
    answer: "1",
    isCalc: false
  },
  {
    id: 122,
    category: "해석학",
    question: "등비수열 1, 2, 4, 8...의 제 5항은?",
    options: ["10", "12", "16", "20"],
    answer: "16",
    isCalc: true
  },
  {
    id: 123,
    category: "해석학",
    question: "복소수의 크기는 |a+bi|=루트(a^2+b^2)이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 124,
    category: "해석학",
    question: "sin^2(x)+cos^2(x)=1이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 125,
    category: "해석학",
    question: "[영재고 기출] 1에서 10까지의 합은?",
    options: ["45", "50", "55", "60"],
    answer: "55",
    isCalc: true
  },
  {
    id: 126,
    category: "해석학",
    question: "y=log_2(x)는 증가함수이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 127,
    category: "해석학",
    question: "미분 가능한 함수는 연속이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 128,
    category: "해석학",
    question: "lim(x->무한대) 1/x=0이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 129,
    category: "해석학",
    question: "y=x^2-2x+1은 아래로 볼록이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 130,
    category: "해석학",
    question: "[영재고 기출] x^2-3x+2=0의 두 근의 합은?",
    options: ["1", "2", "3", "4"],
    answer: "3",
    isCalc: true
  },
  {
    id: 131,
    category: "해석학",
    question: "log_a(x)의 정의역은 x>0이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 132,
    category: "해석학",
    question: "sin(90도)의 값은?",
    options: ["0", "0.5", "1", "-1"],
    answer: "1",
    isCalc: false
  },
  {
    id: 133,
    category: "해석학",
    question: "y=sin(x)의 주기는 2파이이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 134,
    category: "해석학",
    question: "등차수열 1, 4, 7...의 공차는?",
    options: ["2", "3", "4", "5"],
    answer: "3",
    isCalc: true
  },
  {
    id: 135,
    category: "해석학",
    question: "[영재고 기출] i^1+i^2+i^3+i^4=?",
    options: ["0", "1", "i", "-1"],
    answer: "0",
    isCalc: false
  },
  {
    id: 136,
    category: "해석학",
    question: "y=e^x는 항상 양수이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 137,
    category: "해석학",
    question: "다항식 f(x)를 x-a로 나눈 나머지는 f(a)이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 138,
    category: "해석학",
    question: "적분은 미분의 역연산이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 139,
    category: "해석학",
    question: "log_2(4)+log_2(8)=?",
    options: ["5", "6", "12", "32"],
    answer: "5",
    isCalc: true
  },
  {
    id: 140,
    category: "해석학",
    question: "[영재고 기출] 이차함수 y=x^2-4x+3의 꼭짓점은?",
    options: ["(2, -1)", "(2, 1)", "(-2, -1)", "(-2, 1)"],
    answer: "(2, -1)",
    isCalc: true
  },
  {
    id: 141,
    category: "해석학",
    question: "y=x^2-1의 y절편은?",
    options: ["1", "-1", "0", "2"],
    answer: "-1",
    isCalc: false
  },
  {
    id: 142,
    category: "해석학",
    question: "x^3-1=(x-1)(x^2+x+1)이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 143,
    category: "해석학",
    question: "log_a(x)의 그래프는 (1,0)을 지난다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 144,
    category: "해석학",
    question: "cos(180도)의 값은?",
    options: ["0", "1", "-1", "0.5"],
    answer: "-1",
    isCalc: false
  },
  {
    id: 145,
    category: "해석학",
    question: "[영재고 기출] 0.999...는 1과 같다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 146,
    category: "해석학",
    question: "집합 A에서 B로의 함수가 일대일 대응이면 역함수가 존재한다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 147,
    category: "해석학",
    question: "e^0=0이다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "거짓",
    isCalc: false
  },
  {
    id: 148,
    category: "해석학",
    question: "도함수 f'(x)가 양수이면 f(x)는 증가한다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 149,
    category: "해석학",
    question: "n이 무한대로 갈 때 1/n^2은 0으로 수렴한다. (참/거짓)",
    options: ["참", "거짓"],
    answer: "참",
    isCalc: false
  },
  {
    id: 150,
    category: "해석학",
    question: "[영재고 기출] (a+b)^3의 전개식에서 ab^2의 계수는?",
    options: ["1", "2", "3", "6"],
    answer: "3",
    isCalc: true
  }
];export const analysis_Part4 = [
  { id: 151, category: "해석학", question: "f(x) = x³의 x=1에서의 미분계수는?", options: ["1", "2", "3", "4"], answer: "3", isCalc: true },
  { id: 152, category: "해석학", question: "[영재고] (x+y)ⁿ의 전개식 계수를 삼각형 모양으로 나열한 것은?", options: ["오일러 삼각형", "파스칼 삼각형", "가우스 삼각형", "피타고라스"], answer: "파스칼 삼각형", isCalc: false },
  { id: 153, category: "해석학", question: "log_10(1000)의 값은?", options: ["1", "2", "3", "4"], answer: "3", isCalc: true },
  { id: 154, category: "해석학", question: "y = 2x + 1의 기울기는?", options: ["1", "2", "x", "2x"], answer: "2", isCalc: false },
  { id: 155, category: "해석학", question: "sin(π/2)의 값은?", options: ["0", "1", "-1", "0.5"], answer: "1", isCalc: false },
  { id: 156, category: "해석학", question: "i²의 값은?", options: ["1", "-1", "i", "0"], answer: "-1", isCalc: false },
  { id: 157, category: "해석학", question: "이차함수 y=x²-2x+1의 최솟값은?", options: ["0", "1", "-1", "2"], answer: "0", isCalc: true },
  { id: 158, category: "해석학", question: "[영재고] 산술평균과 기하평균의 관계(n=2)에서 성립하는 부등호는?", options: [">", "<", ">=", "<="], answer: ">=", isCalc: false },
  { id: 159, category: "해석학", question: "f(x)=e^x일 때 f'(0)은?", options: ["0", "1", "e", "무한"], answer: "1", isCalc: true },
  { id: 160, category: "해석학", question: "수열 2, 4, 8, 16...의 일반항은?", options: ["2n", "n²", "2ⁿ", "2ⁿ⁻¹"], answer: "2ⁿ", isCalc: false },
  { id: 161, category: "해석학", question: "tan(45°)의 값은?", options: ["0", "1", "루트2", "루트3"], answer: "1", isCalc: false },
  { id: 162, category: "해석학", question: "x²-5x+6=0의 두 근은?", options: ["1, 6", "2, 3", "-2, -3", "5, 6"], answer: "2, 3", isCalc: true },
  { id: 163, category: "해석학", question: "[영재고] f(x)=x+1, g(x)=2x일 때 (g∘f)(1)은?", options: ["2", "3", "4", "5"], answer: "4", isCalc: true },
  { id: 164, category: "해석학", question: "cos(π)의 값은?", options: ["0", "1", "-1", "0.5"], answer: "-1", isCalc: false },
  { id: 165, category: "해석학", question: "log_2(x) = 5일 때 x는?", options: ["10", "25", "32", "64"], answer: "32", isCalc: true },
  { id: 166, category: "해석학", question: "함수 f(x)=1/x의 x=0에서의 값은?", options: ["0", "1", "무한", "정의되지 않음"], answer: "정의되지 않음", isCalc: false },
  { id: 167, category: "해석학", question: "y=sin(x)의 치역은?", options: ["x>0", "R", "-1<=y<=1", "0<=y<=1"], answer: "-1<=y<=1", isCalc: false },
  { id: 168, category: "해석학", question: "수열 1, 3, 5, 7...의 10번째 항은?", options: ["17", "19", "21", "23"], answer: "19", isCalc: true },
  { id: 169, category: "해석학", question: "[영재고] lim(x→∞) (2x+1)/(x-1)의 값은?", options: ["0", "1", "2", "무한"], answer: "2", isCalc: true },
  { id: 170, category: "해석학", question: "절대값 |x-2| < 3의 해는?", options: ["-1<x<5", "x<5", "x>-1", "1<x<3"], answer: "-1<x<5", isCalc: true },
  { id: 171, category: "해석학", question: "f(x)=ln(x)의 x=e에서의 값은?", options: ["0", "1", "e", "10"], answer: "1", isCalc: true },
  { id: 172, category: "해석학", question: "두 직선 y=x와 y=-x는 수직이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 173, category: "해석학", question: "x³=1의 실근의 개수는?", options: ["0", "1", "2", "3"], answer: "1", isCalc: false },
  { id: 174, category: "해석학", question: "[영재고] f(x)=x²을 x축으로 1만큼 평행이동한 식은?", options: ["(x-1)²", "(x+1)²", "x²-1", "x²+1"], answer: "(x-1)²", isCalc: false },
  { id: 175, category: "해석학", question: "cos²θ + sin²θ의 값은?", options: ["0", "1", "tanθ", "2"], answer: "1", isCalc: false },
  { id: 176, category: "해석학", question: "2^x = 1/8일 때 x는?", options: ["3", "-3", "4", "-4"], answer: "-3", isCalc: true },
  { id: 177, category: "해석학", question: "다항식 x²+1은 실수 범위에서 인수분해된다. (참/거짓)", options: ["참", "거짓"], answer: "거짓", isCalc: false },
  { id: 178, category: "해석학", question: "수열 a_n = 1/n은 수렴한다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 179, category: "해석학", question: "[영재고] i + i² + i³ + i⁴의 값은?", options: ["0", "1", "i", "-1"], answer: "0", isCalc: true },
  { id: 180, category: "해석학", question: "f(x)=|x|는 x=0에서 미분가능하다. (참/거짓)", options: ["참", "거짓"], answer: "거짓", isCalc: false },
  { id: 181, category: "해석학", question: "tan(0)의 값은?", options: ["0", "1", "무한", "-1"], answer: "0", isCalc: false },
  { id: 182, category: "해석학", question: "x²-y²=(x-y)(x+y)이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 183, category: "해석학", question: "log_a(1)의 값은?", options: ["0", "1", "a", "정의안됨"], answer: "0", isCalc: false },
  { id: 184, category: "해석학", question: "[영재고] y=2^x의 역함수는?", options: ["y=x²", "y=log_2(x)", "y=1/2x", "y=x/2"], answer: "y=log_2(x)", isCalc: false },
  { id: 185, category: "해석학", question: "f(x)=c (상수)일 때 f'(x)는?", options: ["0", "1", "c", "x"], answer: "0", isCalc: false },
  { id: 186, category: "해석학", question: "sin(-x) = -sin(x)이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 187, category: "해석학", question: "x+y=5, x-y=1일 때 x의 값은?", options: ["2", "3", "4", "5"], answer: "3", isCalc: true },
  { id: 188, category: "해석학", question: "함수 y=√(x-1)의 정의역은?", options: ["x>0", "x>=1", "x<=1", "모든실수"], answer: "x>=1", isCalc: false },
  { id: 189, category: "해석학", question: "[영재고] lim(x→0) (e^x-1)/x 의 값은?", options: ["0", "1", "e", "무한"], answer: "1", isCalc: false },
  { id: 190, category: "해석학", question: "1+2+3+...+n = n(n+1)/2 이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 191, category: "해석학", question: "이차방정식 x²-4=0의 해는?", options: ["2", "-2", "±2", "4"], answer: "±2", isCalc: true },
  { id: 192, category: "해석학", question: "cos(-x) = cos(x)이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 193, category: "해석학", question: "f(x)=x²일 때 f(x+h)-f(x)는?", options: ["2xh", "2xh+h²", "h²", "2x"], answer: "2xh+h²", isCalc: true },
  { id: 194, category: "해석학", question: "[영재고] a>0, b>0일 때 √(ab) <= (a+b)/2 이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 195, category: "해석학", question: "1/0은 정의된다. (참/거짓)", options: ["참", "거짓"], answer: "거짓", isCalc: false },
  { id: 196, category: "해석학", question: "log_2(8) + log_2(2)의 값은?", options: ["3", "4", "5", "10"], answer: "4", isCalc: true },
  { id: 197, category: "해석학", question: "y=x+3의 x절편은?", options: ["3", "0", "-3", "1"], answer: "-3", isCalc: true },
  { id: 198, category: "해석학", question: "f(x)=x³은 기함수이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 199, category: "해석학", question: "[영재고] n!/ (n-1)! 의 값은?", options: ["1", "n", "n-1", "n!"], answer: "n", isCalc: false },
  { id: 200, category: "해석학", question: "sin(30°)의 값은?", options: ["0.5", "1", "0", "0.707"], answer: "0.5", isCalc: false },
  { id: 201, category: "해석학", question: "f(x)=x²-4의 x=2에서의 접선의 기울기는?", options: ["2", "4", "0", "1"], answer: "4", isCalc: true },
  { id: 202, category: "해석학", question: "log_e(x)를 무엇이라 부르는가?", options: ["상용로그", "자연로그", "지수로그", "일반로그"], answer: "자연로그", isCalc: false },
  { id: 203, category: "해석학", question: "수열 1, 1, 2, 3, 5, 8...의 이름은?", options: ["등차수열", "등비수열", "피보나치수열", "조화수열"], answer: "피보나치수열", isCalc: false },
  { id: 204, category: "해석학", question: "[영재고] (1+i)²의 값은?", options: ["2", "-2", "2i", "-2i"], answer: "2i", isCalc: true },
  { id: 205, category: "해석학", question: "y=1/x²의 그래프는 원점 대칭이다. (참/거짓)", options: ["참", "거짓"], answer: "거짓", isCalc: false },
  { id: 206, category: "해석학", question: "방정식 |x|=x의 해는?", options: ["x=0", "x>0", "x>=0", "모든실수"], answer: "x>=0", isCalc: false },
  { id: 207, category: "해석학", question: "sin²x를 미분하면?", options: ["2sinx", "2cosx", "2sinx*cosx", "cos²x"], answer: "2sinx*cosx", isCalc: false },
  { id: 208, category: "해석학", question: "x²+y²=1 위의 점 (1,0)에서의 접선은?", options: ["x=1", "y=1", "y=x", "x+y=1"], answer: "x=1", isCalc: true },
  { id: 209, category: "해석학", question: "[영재고] 무한급수 Σ(1/2ⁿ)의 합은? (n=1 to ∞)", options: ["1", "2", "0.5", "무한"], answer: "1", isCalc: true },
  { id: 210, category: "해석학", question: "e^ln(x)의 값은?", options: ["e", "ln(x)", "x", "1"], answer: "x", isCalc: false },
  { id: 211, category: "해석학", question: "이차방정식의 판별식 D=0이면 중근을 갖는다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 212, category: "해석학", question: "tan(x)의 주기는?", options: ["π", "2π", "π/2", "4π"], answer: "π", isCalc: false },
  { id: 213, category: "해석학", question: "f(x)=x³-x의 변곡점의 x좌표는?", options: ["0", "1", "-1", "없음"], answer: "0", isCalc: true },
  { id: 214, category: "해석학", question: "[영재고] f(x)=2x+3일 때 f⁻¹(5)의 값은?", options: ["1", "2", "3", "4"], answer: "1", isCalc: true },
  { id: 215, category: "해석학", question: "xⁿ을 미분하면?", options: ["nxⁿ", "nxⁿ⁻¹", "xⁿ⁺¹/(n+1)", "n²x"], answer: "nxⁿ⁻¹", isCalc: false },
  { id: 216, category: "해석학", question: "집합 {1,2}의 부분집합 개수는?", options: ["2", "3", "4", "8"], answer: "4", isCalc: true },
  { id: 217, category: "해석학", question: "cos(60°)의 값은?", options: ["0.5", "0.866", "1", "0"], answer: "0.5", isCalc: false },
  { id: 218, category: "해석학", question: "1/x을 적분하면 (x>0)?", options: ["x²", "ln(x)", "e^x", "-1/x²"], answer: "ln(x)", isCalc: false },
  { id: 219, category: "해석학", question: "[영재고] lim(x→1) (x²-1)/(x-1)의 값은?", options: ["0", "1", "2", "무한"], answer: "2", isCalc: true },
  { id: 220, category: "해석학", question: "y=x²은 일대일 함수이다. (참/거짓)", options: ["참", "거짓"], answer: "거짓", isCalc: false },
  { id: 221, category: "해석학", question: "log_10(2) + log_10(5)의 값은?", options: ["1", "7", "10", "0"], answer: "1", isCalc: true },
  { id: 222, category: "해석학", question: "복소수 3+4i의 절댓값은?", options: ["3", "4", "5", "7"], answer: "5", isCalc: true },
  { id: 223, category: "해석학", question: "sin(x)를 적분하면?", options: ["cosx", "-cosx", "tanx", "sinx"], answer: "-cosx", isCalc: false },
  { id: 224, category: "해석학", question: "[영재고] e^iπ + 1의 값은?", options: ["0", "1", "i", "-1"], answer: "0", isCalc: false },
  { id: 225, category: "해석학", question: "함수 f(x)=x²-x의 극솟값 x좌표는?", options: ["0", "1", "0.5", "-0.5"], answer: "0.5", isCalc: true },
  { id: 226, category: "해석학", question: "y=3^x의 치역은?", options: ["y>0", "y>=0", "R", "y>1"], answer: "y>0", isCalc: false },
  { id: 227, category: "해석학", question: "log(x²) = 2log(x)이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 228, category: "해석학", question: "x⁴-1을 인수분해하면 (x-1)(x+1)(x²+1)이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 229, category: "해석학", question: "[영재고] 두 벡터 (1,2)와 (2,-1)의 내적은?", options: ["0", "1", "4", "5"], answer: "0", isCalc: true },
  { id: 230, category: "해석학", question: "lim(x→0) (1+x)^(1/x)의 값은?", options: ["0", "1", "e", "무한"], answer: "e", isCalc: false },
  { id: 231, category: "해석학", question: "y=x의 역함수는?", options: ["y=x", "y=-x", "y=1/x", "없음"], answer: "y=x", isCalc: false },
  { id: 232, category: "해석학", question: "cos(30°)의 값은?", options: ["0.5", "루트3/2", "1/루트2", "0"], answer: "루트3/2", isCalc: false },
  { id: 233, category: "해석학", question: "f(x)=2^x일 때 f(3)은?", options: ["6", "8", "9", "12"], answer: "8", isCalc: true },
  { id: 234, category: "해석학", question: "[영재고] f(x)=sin(2x)의 주기는?", options: ["π", "2π", "4π", "π/2"], answer: "π", isCalc: false },
  { id: 235, category: "해석학", question: "ln(e²)의 값은?", options: ["1", "2", "e", "0"], answer: "2", isCalc: true },
  { id: 236, category: "해석학", question: "f(x)=x²-6x+9의 근은?", options: ["3", "-3", "0", "9"], answer: "3", isCalc: true },
  { id: 237, category: "해석학", question: "삼각형의 넓이 S = 1/2*ab*sinC 이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 238, category: "해석학", question: "y=tanx는 x=π/2에서 연속이다. (참/거짓)", options: ["참", "거짓"], answer: "거짓", isCalc: false },
  { id: 239, category: "해석학", question: "[영재고] x²+y²=4가 나타내는 도형은?", options: ["원", "타원", "쌍곡선", "포물선"], answer: "원", isCalc: false },
  { id: 240, category: "해석학", question: "f(x)=x⁴를 두 번 미분하면?", options: ["4x³", "12x²", "12x", "x²"], answer: "12x²", isCalc: false },
  { id: 241, category: "해석학", question: "log_3(1/3)의 값은?", options: ["1", "-1", "0", "3"], answer: "-1", isCalc: true },
  { id: 242, category: "해석학", question: "복소수 i의 역수는?", options: ["i", "-i", "1", "-1"], answer: "-i", isCalc: false },
  { id: 243, category: "해석학", question: "f(x)=e^(2x)의 미분은?", options: ["e^(2x)", "2e^(2x)", "e^x", "2x*e^(2x-1)"], answer: "2e^(2x)", isCalc: false },
  { id: 244, category: "해석학", question: "[영재고] 0.333...을 분수로 나타내면?", options: ["1/3", "3/10", "3/100", "1/2"], answer: "1/3", isCalc: true },
  { id: 245, category: "해석학", question: "y=x²-1의 최솟값은?", options: ["0", "1", "-1", "없음"], answer: "-1", isCalc: true },
  { id: 246, category: "해석학", question: "sin(0)의 값은?", options: ["0", "1", "-1", "무한"], answer: "0", isCalc: false },
  { id: 247, category: "해석학", question: "함수의 극한값이 존재하면 좌극한과 우극한이 같다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 248, category: "해석학", question: "x³-3x²+3x-1 = (x-1)³ 이다. (참/거짓)", options: ["참", "거짓"], answer: "참", isCalc: false },
  { id: 249, category: "해석학", question: "[영재고] Σ(n=1 to 10) n의 값은?", options: ["45", "55", "65", "100"], answer: "55", isCalc: true },
  { id: 250, category: "해석학", question: "f(x)=|x-1|의 x=1에서의 미분계수는?", options: ["1", "-1", "0", "존재하지 않음"], answer: "존재하지 않음", isCalc: false }
];export const analysis_Set1 = [
  {
    id: 251,
    category: "해석",
    question: "[영재고 기출] x + 1/x = 3일 때, x^2 + 1/x^2의 값은?",
    options: ["7", "9", "11", "13"],
    answer: "7",
    isCalc: true
  },
  {
    id: 252,
    category: "해석",
    question: "방정식 2x + 5 = 13의 해는?",
    options: ["4", "5", "9", "18"],
    answer: "4",
    isCalc: true
  },
  {
    id: 253,
    category: "해석",
    question: "이차함수 y = x^2 - 4x + 5의 최솟값은?",
    options: ["1", "2", "4", "5"],
    answer: "1",
    isCalc: true
  },
  {
    id: 254,
    category: "해석",
    question: "함수 f(x) = 2x - 3의 역함수 f^(-1)(x)는?",
    options: ["1/2 x + 3/2", "2x + 3", "1/2 x - 3", "x + 3"],
    answer: "1/2 x + 3/2",
    isCalc: true
  },
  {
    id: 255,
    category: "해석",
    question: "[영재고 기출] 두 양수 a, b에 대하여 (a+b)/2 가 루트(ab)보다 항상 크거나 같음을 나타내는 부등식의 이름은?",
    options: ["코시-슈바르츠 부등식", "산술-기하 평균 부등식", "베르누이 부등식", "삼각형 부등식"],
    answer: "산술-기하 평균 부등식",
    isCalc: false
  },
  {
    id: 256,
    category: "해석",
    question: "절댓값 x-3 이 2보다 작거나 같을 때, x의 범위는?",
    options: ["1 <= x <= 5", "x <= 5", "x >= 1", "-2 <= x <= 2"],
    answer: "1 <= x <= 5",
    isCalc: true
  },
  {
    id: 257,
    category: "해석",
    question: "다항식 x^3 - 1을 인수분해하면?",
    options: ["(x-1)(x^2+x+1)", "(x-1)(x^2-x+1)", "(x+1)(x^2-x+1)", "(x-1)^3"],
    answer: "(x-1)(x^2+x+1)",
    isCalc: false
  },
  {
    id: 258,
    category: "해석",
    question: "로그 log2(8)의 값은?",
    options: ["2", "3", "4", "8"],
    answer: "3",
    isCalc: true
  },
  {
    id: 259,
    category: "해석",
    question: "두 직선 y=2x+1과 y=ax-3이 수직일 때, a의 값은?",
    options: ["-1/2", "1/2", "-2", "2"],
    answer: "-1/2",
    isCalc: true
  },
  {
    id: 260,
    category: "해석",
    question: "[영재고 기출] 이차방정식 x^2 - 3x + 1 = 0의 두 근을 a, b라고 할 때, 1/a + 1/b의 값은?",
    options: ["1", "2", "3", "1/3"],
    answer: "3",
    isCalc: true
  },
  {
    id: 261,
    category: "해석",
    question: "실수 x에 대하여 x^2 + 1 = 0의 해는?",
    options: ["1", "-1", "허수", "해 없음"],
    answer: "허수",
    isCalc: false
  },
  {
    id: 262,
    category: "해석",
    question: "함수 y = 1/x 의 그래프의 특징이 아닌 것은?",
    options: ["원점 대칭이다", "제 1, 3사분면을 지난다", "x축이 점근선이다", "y절편이 0이다"],
    answer: "y절편이 0이다",
    isCalc: false
  },
  {
    id: 263,
    category: "해석",
    question: "등차수열 2, 5, 8, 11... 의 제 10항은?",
    options: ["27", "29", "31", "33"],
    answer: "29",
    isCalc: true
  },
  {
    id: 264,
    category: "해석",
    question: "합성함수 f(g(x))에서 f(x)=x^2, g(x)=x+1일 때 f(g(2))의 값은?",
    options: ["5", "9", "4", "3"],
    answer: "9",
    isCalc: true
  },
  {
    id: 265,
    category: "해석",
    question: "[영재고 기출] 모든 실수 x에 대하여 f(x+p) = f(x)를 만족하는 가장 작은 양수 p를 무엇이라 하는가?",
    options: ["진폭", "주기", "위상", "주파수"],
    answer: "주기",
    isCalc: false
  },
  {
    id: 266,
    category: "해석",
    question: "수열의 합 시그마 k (k=1부터 10까지)의 값은?",
    options: ["45", "55", "65", "110"],
    answer: "55",
    isCalc: true
  },
  {
    id: 267,
    category: "해석",
    question: "지수 법칙에서 (a^2)^3 은 무엇과 같은가?",
    options: ["a^5", "a^6", "a^8", "a^9"],
    answer: "a^6",
    isCalc: false
  },
  {
    id: 268,
    category: "해석",
    question: "연립방정식 x+y=5, x-y=1의 해 (x, y)는?",
    options: ["(3, 2)", "(2, 3)", "(4, 1)", "(1, 4)"],
    answer: "(3, 2)",
    isCalc: true
  },
  {
    id: 269,
    category: "해석",
    question: "무리함수 y = 루트(x-2) 의 정의역은?",
    options: ["x > 0", "x >= 0", "x > 2", "x >= 2"],
    answer: "x >= 2",
    isCalc: false
  },
  {
    id: 270,
    category: "해석",
    question: "[영재고 기출] 두 직선 y=x와 y=-x+2 및 x축으로 둘러싸인 삼각형의 넓이는?",
    options: ["1", "2", "4", "0.5"],
    answer: "1",
    isCalc: true
  },
  {
    id: 271,
    category: "해석",
    question: "이차방정식 x^2 + 4x + 4 = 0의 판별식 D의 값은?",
    options: ["-16", "0", "16", "32"],
    answer: "0",
    isCalc: true
  },
  {
    id: 272,
    category: "해석",
    question: "다항식 f(x)를 x-1로 나눈 나머지는 무엇과 같은가?",
    options: ["f(0)", "f(1)", "f(-1)", "0"],
    answer: "f(1)",
    isCalc: false
  },
  {
    id: 273,
    category: "해석",
    question: "등비수열 1, 2, 4, 8... 의 첫째항부터 제 5항까지의 합은?",
    options: ["15", "16", "31", "32"],
    answer: "31",
    isCalc: true
  },
  {
    id: 274,
    category: "해석",
    question: "함수 y = sin(x) 의 최댓값은?",
    options: ["0", "1", "파이", "무한대"],
    answer: "1",
    isCalc: false
  },
  {
    id: 275,
    category: "해석",
    question: "[영재고 기출] 세 수 a, b, c가 등차수열을 이룰 때 2b = a + c 가 성립한다. b를 무엇이라 하는가?",
    options: ["등차중항", "등비중항", "조화중항", "산술평균"],
    answer: "등차중항",
    isCalc: false
  },
  {
    id: 276,
    category: "해석",
    question: "x^2 - 5x + 6 < 0 의 해는?",
    options: ["x < 2 또는 x > 3", "2 < x < 3", "x < -3 또는 x > -2", "-3 < x < -2"],
    answer: "2 < x < 3",
    isCalc: true
  },
  {
    id: 277,
    category: "해석",
    question: "직선 2x - y + 3 = 0 의 기울기는?",
    options: ["2", "-2", "1", "3"],
    answer: "2",
    isCalc: true
  },
  {
    id: 278,
    category: "해석",
    question: "i^4 의 값은? (i는 허수단위)",
    options: ["i", "-i", "1", "-1"],
    answer: "1",
    isCalc: false
  },
  {
    id: 279,
    category: "해석",
    question: "log a + log b 는 무엇과 같은가?",
    options: ["log(a+b)", "log(ab)", "log(a/b)", "log(a^b)"],
    answer: "log(ab)",
    isCalc: false
  },
  {
    id: 280,
    category: "해석",
    question: "[영재고 기출] 원 x^2 + y^2 = 1 위의 점 (a, b)에서의 접선의 방정식은?",
    options: ["ax + by = 1", "ax - by = 1", "bx + ay = 1", "x + y = a+b"],
    answer: "ax + by = 1",
    isCalc: false
  },
  {
    id: 281,
    category: "해석",
    question: "두 집합 A={1,2}, B={2,3}일 때 A 합집합 B의 원소 개수는?",
    options: ["2", "3", "4", "1"],
    answer: "3",
    isCalc: true
  },
  {
    id: 282,
    category: "해석",
    question: "함수 f(x) = x^2 이 일대일 대응이 되기 위한 x의 범위는?",
    options: ["모든 실수", "x > 0", "x != 0", "범위 상관 없음"],
    answer: "x > 0",
    isCalc: false
  },
  {
    id: 283,
    category: "해석",
    question: "(x+y)^2 - (x-y)^2 을 간단히 하면?",
    options: ["2x^2 + 2y^2", "4xy", "0", "2xy"],
    answer: "4xy",
    isCalc: true
  },
  {
    id: 284,
    category: "해석",
    question: "세 변의 길이가 a, b, c인 삼각형에서 a^2 + b^2 < c^2 이면 이 삼각형은?",
    options: ["예각삼각형", "직각삼각형", "둔각삼각형", "이등변삼각형"],
    answer: "둔각삼각형",
    isCalc: false
  },
  {
    id: 285,
    category: "해석",
    question: "[영재고 기출] 1, 1/2, 1/4, 1/8... 과 같은 무한등비급수의 합은?",
    options: ["1.5", "2", "3", "무한대"],
    answer: "2",
    isCalc: true
  },
  {
    id: 286,
    category: "해석",
    question: "기울기가 3이고 점 (1, 2)를 지나는 직선의 방정식은?",
    options: ["y=3x-1", "y=3x+1", "y=3x+2", "y=3x-5"],
    answer: "y=3x-1",
    isCalc: true
  },
  {
    id: 287,
    category: "해석",
    question: "이차방정식 x^2 + x + 1 = 0 의 두 근을 w, w^2이라 할 때 w^3의 값은?",
    options: ["1", "-1", "i", "0"],
    answer: "1",
    isCalc: true
  },
  {
    id: 288,
    category: "해석",
    question: "복소수 3 + 2i 의 켤레복소수는?",
    options: ["3 - 2i", "-3 + 2i", "-3 - 2i", "2 + 3i"],
    answer: "3 - 2i",
    isCalc: false
  },
  {
    id: 289,
    category: "해석",
    question: "분수함수 y = (2x+1)/(x-1) 의 점근선 중 하나는?",
    options: ["x=-1", "y=1", "x=1", "y=-2"],
    answer: "x=1",
    isCalc: true
  },
  {
    id: 290,
    category: "해석",
    question: "[영재고 기출] 정수 x에 대하여 [x]가 x보다 크지 않은 최대 정수일 때, [3.7] + [-3.7]의 값은?",
    options: ["0", "1", "-1", "7"],
    answer: "-1",
    isCalc: true
  },
  {
    id: 291,
    category: "해석",
    question: "함수 y = 2^x 의 치역은?",
    options: ["모든 실수", "y > 0", "y >= 0", "y > 1"],
    answer: "y > 0",
    isCalc: false
  },
  {
    id: 292,
    category: "해석",
    question: "부등식 x^2 + y^2 <= 4 가 나타내는 영역의 넓이는?",
    options: ["2파이", "4파이", "8파이", "16파이"],
    answer: "4파이",
    isCalc: true
  },
  {
    id: 293,
    category: "해석",
    question: "삼차방정식 x^3 - 3x^2 + 3x - 1 = 0 의 해는?",
    options: ["x=1 (삼중근)", "x=0", "x=-1", "x=1, 2, 3"],
    answer: "x=1 (삼중근)",
    isCalc: true
  },
  {
    id: 294,
    category: "해석",
    question: "sin^2(x) + cos^2(x) 의 값은 항상 얼마인가?",
    options: ["0", "1", "tan(x)", "sin(2x)"],
    answer: "1",
    isCalc: false
  },
  {
    id: 295,
    category: "해석",
    question: "[영재고 기출] 함수 f(x)가 f(x) = f(-x)를 만족할 때, 이 함수를 무엇이라 하는가?",
    options: ["우함수", "기함수", "주기함수", "역함수"],
    answer: "우함수",
    isCalc: false
  },
  {
    id: 296,
    category: "해석",
    question: "로그 log(100)의 값은? (밑이 10인 상용로그)",
    options: ["1", "2", "10", "100"],
    answer: "2",
    isCalc: true
  },
  {
    id: 297,
    category: "해석",
    question: "직선 y=x 에 대하여 대칭이동했을 때 (2, 3)의 좌표는?",
    options: ["(-2, -3)", "(3, 2)", (-3, -2), "(2, -3)"],
    answer: "(3, 2)",
    isCalc: true
  },
  {
    id: 298,
    category: "해석",
    question: "다항식 (x+1)^10 의 전개식에서 x^9 의 계수는?",
    options: ["1", "9", "10", "45"],
    answer: "10",
    isCalc: true
  },
  {
    id: 299,
    category: "해석",
    question: "무리수 루트 2 의 소수 부분을 a라고 할 때, a의 값은?",
    options: ["0.414", "루트 2", "루트 2 - 1", "1 - 루트 2"],
    answer: "루트 2 - 1",
    isCalc: true
  },
  {
    id: 300,
    category: "해석",
    question: "[영재고 기출] 수열 a_n이 a_1=1, a_(n+1) = a_n + 3 을 만족할 때, a_10의 값은?",
    options: ["27", "28", "30", "31"],
    answer: "28",
    isCalc: true
  }
];