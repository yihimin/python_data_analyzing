const questions = [
  {
    id: 1,
    text: '당신은 새로운 사람을 만나면 자신을 소개하는 것을 좋아하나요?',
    yes: 'E',
    no: 'I',
  },
  {
    id: 2,
    text: '당신은 자주 계획을 세우는 편인가요?',
    yes: 'J',
    no: 'P',
  },
  {
    id: 3,
    text: '당신은 논쟁이나 불화를 싫어하나요?',
    yes: 'F',
    no: 'T',
  },
  {
    id: 4,
    text: '당신은 새로운 경험을 추구하나요?',
    yes: 'N',
    no: 'S',
  },
  {
    id: 5,
    text: '당신은 복잡한 문제를 해결하는 것을 좋아하나요?',
    yes: 'T',
    no: 'F',
  },
  {
    id: 6,
    text: '당신은 대부분의 사람들이 당신을 좋아하는 편인가요?',
    yes: 'E',
    no: 'I',
  },
  {
    id: 7,
    text: '어떤 일을 처리할 때, 빠르게 결정하는 것이 중요한가요?',
    yes: 'P',
    no: 'J',
  },
  {
    id: 8,
    text: '당신은 자신이 하는 일에 대해 열정을 느끼나요?',
    yes: 'J',
    no: 'P',
  },
  {
    id: 9,
    text: '당신은 대부분의 상황에서 논리적으로 생각하나요?',
    yes: 'T',
    no: 'F',
  },
  {
    id: 10,
    text: '당신은 쉽게 스트레스를 받나요?',
    yes: 'N',
    no: 'S',
  },
  {
    id: 11,
    text: '당신은 대부분의 시간을 집에서 보내는 것을 좋아하나요?',
    yes: 'I',
    no: 'E',
  },
  {
    id: 12,
    text: '새로운 아이디어나 가능성을 찾아보는 것이 즐겁나요?',
    yes: 'N',
    no: 'S',
  },
];


// 현재 보여지는 질문의 인덱스
let currentQuestionIndex = 0;

// 각 질문에 대한 답변을 저장하는 배열
const answers = [];

// "예" 버튼 클릭 시 실행되는 함수
function onYesButtonClick() {
  // 현재 질문에 대한 답변을 answers 배열에 저장
  answers[currentQuestionIndex] = questions[currentQuestionIndex].yes;

  // 다음 질문으로 이동
  currentQuestionIndex++;

  // 마지막 질문일 경우 결과 페이지로 이동
  if (currentQuestionIndex === questions.length) {
    calculateResult();
    return;
  }

  // 다음 질문으로 이동한 후, 해당 질문을 보여줌
  const nextQuestion = questions[currentQuestionIndex];
  const questionElement = document.getElementById('question');
  const questionNumberElement = document.getElementById('question-number');

  questionElement.textContent = nextQuestion.text;
  questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;
}

// "아니오" 버튼 클릭 시 실행되는 함수
function onNoButtonClick() {
  // 현재 질문에 대한 답변을 answers 배열에 저장
  answers[currentQuestionIndex] = questions[currentQuestionIndex].no;

  // 다음 질문으로 이동
  currentQuestionIndex++;

  // 마지막 질문일 경우 결과 페이지로 이동
  if (currentQuestionIndex === questions.length) {
    calculateResult();
    return;
  }

  // 다음 질문으로 이동한 후, 해당 질문을 보여줌
  const nextQuestion = questions[currentQuestionIndex];
  const questionElement = document.getElementById('question');
  const questionNumberElement = document.getElementById('question-number');

  questionElement.textContent = nextQuestion.text;
  questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;
}

// 페이지 로드 시, 첫 번째 질문을 보여줌
const firstQuestion = questions[0];
const questionElement = document.getElementById('question');
const questionNumberElement = document.getElementById('question-number');

questionElement.textContent = firstQuestion.text;
questionNumberElement.textContent = `질문 ${currentQuestionIndex + 1}`;

// "예" 버튼과 "아니오" 버튼에 이벤트 부여
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

yesButton.addEventListener('click', onYesButtonClick);
noButton.addEventListener('click', onNoButtonClick);

function calculateResult() {
  // MBTI 지표별 응답 개수를 저장할 객체 생성
  const result = {
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  };

  // 각 질문의 응답에 따라 결과 객체에 값을 추가
  for (let i = 0; i < questions.length; i++) {
    const userAnswer = answers[i];
    result[userAnswer]++;
  }

  // MBTI 지표 중에서 더 많이 선택된 알파벳을 찾아서 결과 문자열 생성
  let mbtiResult = '';
  mbtiResult += result.E > result.I ? 'E' : 'I';
  mbtiResult += result.N > result.S ? 'N' : 'S';
  mbtiResult += result.F > result.T ? 'F' : 'T';
  mbtiResult += result.P > result.J ? 'P' : 'J';

  // 결과 값을 로컬 스토리지에 저장하고 result.html로 이동
  localStorage.setItem('mbti_result', mbtiResult);
  location.href = 'result.html';
}
