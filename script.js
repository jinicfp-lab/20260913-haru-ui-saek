const moods = [
  {
    id: "tired",
    name: "지친 날",
    caption: "에너지가 거의 없어요",
    icon: "☾",
    tone: "#f4d9df",
    theme: ["#ffe5eb", "#dbeeea", "#fff2cf"],
    quote: "오늘은 잘 해낸 날보다 잘 버틴 날이어도 괜찮아요.",
    actions: ["물 한 잔 마시기", "조명 낮추기", "어깨와 목 풀기", "해야 할 일 하나만 남기기"],
    music: ["calm acoustic evening", "soft lofi rest", "warm piano playlist"],
    tip: {
      home: "앉은 자리에서 바로 일어나지 않아도 괜찮아요. 주변 소리부터 낮춰보세요.",
      work: "큰 일 말고 가장 작은 시작 버튼만 누르는 걸 목표로 잡아요.",
      outside: "가까운 편의점이나 벤치처럼 잠깐 멈출 수 있는 지점을 찾아요.",
      night: "화면 밝기를 낮추고 내일 해야 할 일을 한 줄만 적어두세요.",
    },
  },
  {
    id: "anxious",
    name: "불안한 날",
    caption: "생각이 너무 빨라요",
    icon: "≈",
    tone: "#d7e8fb",
    theme: ["#dfeeff", "#fbe1e8", "#fff4d9"],
    quote: "모든 걸 지금 해결하지 않아도 괜찮아요.",
    actions: ["숨 천천히 세 번 쉬기", "걱정 하나 적기", "바로 할 행동 하나 고르기", "책상 위 물건 하나 치우기"],
    music: ["ambient piano calm", "slow jazz focus", "minimal relaxing music"],
    tip: {
      home: "걱정을 머릿속에 두지 말고 종이나 메모장으로 옮기는 게 먼저예요.",
      work: "완료가 아니라 착수만 목표로 잡으면 부담이 줄어요.",
      outside: "시선을 멀리 두고 보이는 색 세 가지를 천천히 찾아보세요.",
      night: "해결 목록과 내일 목록을 분리하면 잠들기 쉬워져요.",
    },
  },
  {
    id: "excited",
    name: "설레는 날",
    caption: "뭔가 시작하고 싶어요",
    icon: "✦",
    tone: "#ffe6a8",
    theme: ["#fff0c8", "#ffdfe9", "#d8f0ea"],
    quote: "좋은 예감은 생각보다 자주 맞아요.",
    actions: ["하고 싶은 일 세 가지 적기", "가장 쉬운 것 시작하기", "사진 한 장 남기기", "좋은 소식 공유하기"],
    music: ["city pop walk", "bright indie pop", "sunny synth pop"],
    tip: {
      home: "설렘이 흩어지기 전에 바로 할 수 있는 일 하나를 5분만 시작해요.",
      work: "아이디어를 전부 실행하려 하기보다 제목만 먼저 적어두세요.",
      outside: "좋아하는 길로 조금 돌아가며 기분을 더 오래 데려가요.",
      night: "내일의 나를 위한 기대 포인트를 하나 적어두면 좋아요.",
    },
  },
  {
    id: "calm",
    name: "차분한 날",
    caption: "천천히 정리하고 싶어요",
    icon: "⌒",
    tone: "#d7f0df",
    theme: ["#dff3e4", "#f5e2ef", "#fff1c9"],
    quote: "고요한 날에는 마음이 더 선명하게 들려요.",
    actions: ["차나 물 준비하기", "오늘 할 일 순서 정하기", "읽을 글 한 페이지 열기", "창밖 잠깐 보기"],
    music: ["bossa nova afternoon", "acoustic guitar calm", "soft classical reading"],
    tip: {
      home: "정리하기 좋은 상태예요. 물건 하나보다 생각 하나를 먼저 정리해요.",
      work: "집중이 이어질 수 있게 알림을 잠깐 꺼두세요.",
      outside: "사람 많은 곳보다 시야가 트인 곳에서 잠깐 멈춰보세요.",
      night: "내일 입을 옷이나 첫 할 일을 정해두면 아침이 편해져요.",
    },
  },
  {
    id: "blank",
    name: "멍한 날",
    caption: "머리가 비어 있어요",
    icon: "○",
    tone: "#e5def5",
    theme: ["#ebe3fb", "#dceff1", "#fff0d6"],
    quote: "아무 생각 없는 시간도 마음의 숨이에요.",
    actions: ["휴대폰 뒤집어두기", "손 씻기", "아무 단어 세 개 적기", "가벼운 간식 챙기기"],
    music: ["dream pop slow", "soft chillhop", "gentle ambient waves"],
    tip: {
      home: "멍함을 억지로 깨우기보다 몸을 먼저 움직여보세요.",
      work: "새 일을 시작하기 어렵다면 기존 파일이나 노트만 열어도 충분해요.",
      outside: "목적지까지 가는 동안 발걸음과 호흡만 세어보세요.",
      night: "무언가 더 하려 하기보다 잘 준비를 루틴으로 만들어요.",
    },
  },
  {
    id: "lonely",
    name: "외로운 날",
    caption: "온기가 조금 필요해요",
    icon: "☆",
    tone: "#f8d8c8",
    theme: ["#ffe2d4", "#e7e1fb", "#dff2eb"],
    quote: "혼자인 시간도 당신을 덜 소중하게 만들지는 않아요.",
    actions: ["안부 메시지 하나 보내기", "담요나 따뜻한 옷 챙기기", "나에게 문장 하나 쓰기", "좋아하는 목소리 듣기"],
    music: ["warm vocal night", "soft indie folk", "cozy rnb playlist"],
    tip: {
      home: "연락이 부담스럽다면 보내지 않을 문장을 먼저 써봐도 좋아요.",
      work: "짧은 인사나 감사 메시지처럼 작은 연결부터 만들어보세요.",
      outside: "밝은 가게나 익숙한 장소처럼 덜 고립되는 곳으로 움직여요.",
      night: "잠들기 전에는 마음이 더 크게 들릴 수 있어요. 따뜻한 자극을 가까이 둬요.",
    },
  },
];

const timePlans = {
  5: [1, 2, 2],
  10: [2, 3, 5],
  20: [3, 7, 10],
};

const contextLabels = {
  home: "집",
  work: "일/공부",
  outside: "외출 중",
  night: "잠들기 전",
};

const moodGrid = document.querySelector("#moodGrid");
const contextSelect = document.querySelector("#contextSelect");
const timeSelect = document.querySelector("#timeSelect");
const taskInput = document.querySelector("#taskInput");
const emptyState = document.querySelector("#emptyState");
const resultContent = document.querySelector("#resultContent");
const resultCard = document.querySelector("#resultCard");
const selectedMood = document.querySelector("#selectedMood");
const quoteText = document.querySelector("#quoteText");
const firstActionText = document.querySelector("#firstActionText");
const checklist = document.querySelector("#checklist");
const progressText = document.querySelector("#progressText");
const musicText = document.querySelector("#musicText");
const contextTipText = document.querySelector("#contextTipText");
const youtubeLink = document.querySelector("#youtubeLink");
const spotifyLink = document.querySelector("#spotifyLink");
const shuffleButton = document.querySelector("#shuffleButton");
const saveButton = document.querySelector("#saveButton");
const copyButton = document.querySelector("#copyButton");
const memoInput = document.querySelector("#memoInput");
const savedList = document.querySelector("#savedList");

let currentMood = null;
let currentPlan = null;
let savedMoods = JSON.parse(localStorage.getItem("savedMoods") || "[]");

function renderMoodCards() {
  moodGrid.innerHTML = moods
    .map(
      (mood) => `
        <button class="mood-card" type="button" data-mood="${mood.id}" style="--tone: ${mood.tone}">
          <span class="mood-icon">${mood.icon}</span>
          <span class="mood-name">${mood.name}</span>
          <span class="mood-caption">${mood.caption}</span>
        </button>
      `
    )
    .join("");
}

function pickItems(items, count) {
  return [...items].sort(() => Math.random() - 0.5).slice(0, count);
}

function buildPlan(mood) {
  const minutes = timePlans[timeSelect.value];
  const task = taskInput.value.trim();
  const pickedActions = pickItems(mood.actions, 3);
  const music = mood.music[Math.floor(Math.random() * mood.music.length)];

  return {
    context: contextSelect.value,
    minutes: timeSelect.value,
    music,
    steps: [
      `${minutes[0]}분: ${pickedActions[0]}`,
      `${minutes[1]}분: ${pickedActions[1]}`,
      `${minutes[2]}분: ${task ? `"${task}" 아주 작게 시작하기` : pickedActions[2]}`,
    ],
  };
}

function applyTheme(mood) {
  const [a, b, c] = mood.theme;
  document.documentElement.style.setProperty("--wash-a", a);
  document.documentElement.style.setProperty("--wash-b", b);
  document.documentElement.style.setProperty("--wash-c", c);
  document.documentElement.style.setProperty("--accent", mood.tone);
}

function updateProgress() {
  const checked = checklist.querySelectorAll("input:checked").length;
  progressText.textContent = `${checked}/3 완료`;
}

function updateLinks(query) {
  const encoded = encodeURIComponent(query);
  youtubeLink.href = `https://www.youtube.com/results?search_query=${encoded}`;
  spotifyLink.href = `https://open.spotify.com/search/${encoded}`;
}

function showPlan(mood) {
  currentMood = mood;
  currentPlan = buildPlan(mood);

  selectedMood.textContent = `${mood.name} · ${contextLabels[currentPlan.context]} · ${currentPlan.minutes}분`;
  quoteText.textContent = mood.quote;
  firstActionText.textContent = currentPlan.steps[0].replace(/^\d+분: /, "");
  musicText.textContent = currentPlan.music;
  contextTipText.textContent = mood.tip[currentPlan.context];

  checklist.innerHTML = currentPlan.steps
    .map(
      (step, index) => `
        <label class="check-item">
          <input type="checkbox" data-index="${index}" />
          <span>${step}</span>
        </label>
      `
    )
    .join("");

  updateLinks(currentPlan.music);
  updateProgress();
  emptyState.classList.add("hidden");
  resultContent.classList.remove("hidden");

  document.querySelectorAll(".mood-card").forEach((card) => {
    card.classList.toggle("active", card.dataset.mood === mood.id);
  });

  applyTheme(mood);
  resultCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function getCopyText() {
  if (!currentMood || !currentPlan) return "";

  return [
    `[하루의 색] ${currentMood.name}`,
    currentMood.quote,
    "",
    `상황: ${contextLabels[currentPlan.context]} / ${currentPlan.minutes}분`,
    `음악: ${currentPlan.music}`,
    "루틴:",
    ...currentPlan.steps.map((step) => `- ${step}`),
  ].join("\n");
}

function renderSavedMoods() {
  if (savedMoods.length === 0) {
    savedList.innerHTML = '<p class="saved-empty">아직 저장된 기록이 없어요.</p>';
    return;
  }

  savedList.innerHTML = savedMoods
    .slice()
    .reverse()
    .map(
      (item) => `
        <article class="saved-item">
          <div>
            <strong>${item.mood}</strong>
            <span>${item.date} · ${item.done}/3 완료</span>
          </div>
          <p>${item.memo || item.quote}</p>
        </article>
      `
    )
    .join("");
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1800);
}

moodGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".mood-card");
  if (!card) return;

  const mood = moods.find((item) => item.id === card.dataset.mood);
  showPlan(mood);
});

checklist.addEventListener("change", updateProgress);

[contextSelect, timeSelect].forEach((input) => {
  input.addEventListener("change", () => {
    if (currentMood) showPlan(currentMood);
  });
});

taskInput.addEventListener("change", () => {
  if (currentMood) showPlan(currentMood);
});

shuffleButton.addEventListener("click", () => {
  if (currentMood) showPlan(currentMood);
});

saveButton.addEventListener("click", () => {
  if (!currentMood || !currentPlan) return;

  const done = checklist.querySelectorAll("input:checked").length;
  const date = new Intl.DateTimeFormat("ko-KR", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());

  savedMoods.push({
    mood: currentMood.name,
    quote: currentMood.quote,
    memo: memoInput.value.trim(),
    done,
    date,
  });

  savedMoods = savedMoods.slice(-8);
  localStorage.setItem("savedMoods", JSON.stringify(savedMoods));
  memoInput.value = "";
  renderSavedMoods();
  showToast("오늘 기록을 저장했어요.");
});

copyButton.addEventListener("click", async () => {
  const text = getCopyText();
  if (!text) return;

  if (!navigator.clipboard) {
    showToast("브라우저 주소에서 실행하면 복사할 수 있어요.");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
    showToast("루틴을 복사했어요.");
  } catch {
    showToast("브라우저가 복사를 잠시 막았어요.");
  }
});

renderMoodCards();
renderSavedMoods();
