// ========= 設定 =========
const TARGET = 80;
const OK_RANGE = 5;   // 80±5 を「良い感じ」とする
const STORAGE_KEY = "shitsumon1_training_v1"; // アプリ用保存キー

// ========= データ（問題） =========
const RAW_TEXT = `【30歳営業・成績低迷・異動打診・家族は応援・本人は営業を続けたい】
営業職として勤務する中、成績低迷により異動の打診を受けた。
営業を続けたい思いがある一方で成績低迷という現実を踏まえ異動も検討すべきか迷い、
今後どのようにすればよいか悩んでいる。
---
【42歳女性・復職6か月・子どもとの時間減少・やりがいはある】
出産を機に退職した職場に復職し6か月が経過した中で、子供との時間が減少している。
やりがいのある仕事を続けたい思いと働き方を見直すべきかという思いの間で葛藤し、
今後どのようにすればよいか悩んでいる。
---
【29歳フリーランス・企業就職迷い・収入は不安定・自由度は高い】
フリーランスとして働いているが、収入の不安定さから企業就職を考え始めた。
自由度の高い働き方を続けるか、安定した収入を得られる企業就職を選ぶかの間で葛藤し、
今後どのようにすればよいか悩んでいる。
---
【55歳男性・役職定年廃止・70歳まで勤務可・体力に不安】
管理職として勤務する中、役職定年が廃止され70歳まで働くことが可能となった。体力面に不安を感じ、
現在の働き方を続けるか負担の少ない働き方を検討すべきかの間で葛藤し、
今後どのようにすればよいか悩んでいる。
---
【24歳新入社員・配属が希望外・辞めたいが親は反対】
新入社員として入社したが、配属先が希望外となり退職を考え始めた。
現職を続けるか退職するかの間で葛藤し、
親の反対もある中で今後どのようにすればよいか悩んでいる。
---
【38歳女性・第二子妊娠・昇進打診・家庭優先か迷い】
第二子を妊娠した矢先に昇進の打診を受けた。
昇進を受けるか、家庭を優先した働き方を選ぶの間で葛藤し、
今後どのようにすればよいか悩んでいる。
---
【33歳男性・転職3回目・内定2社・どちらも魅力的】
3回目の転職活動中で2社から内定を得たが、どちらの会社も魅力を感じている。
いずれを選択すべきかの間で葛藤し、
今後どのように決めればよいか悩んでいる。
---
【41歳男性・管理職昇進打診・転勤の可能性あり・子ども受験期】
受験期の子供を抱える中で、転勤の可能性がある管理職への昇進の打診を受けた。
昇進を受けるか、家庭を優先した働き方を選ぶかの間で葛藤し、
今後どのようにすればよいか悩んでいる。
---
【27歳看護師・夜勤が辛い・収入は高い】
看護師として働いているが、夜勤への辛さを感じ始めた。
収入が高い現在の働き方を続けるか、負担の少ない働き方を検討すべきかの間で葛藤し、
今後どのようにすればよいか悩んでいる。
---
【36歳男性・起業3年目・赤字続き・家族は不安】
起業して3年が経過したが、赤字が続いている。
起業を続けるか安定した収入を得られる働き方に転じるかの間で葛藤し、
家族の不安もある中で今後どのようにすればよいか悩んでいる。
---
【34歳女性・転職1年目・仕事は楽しい・成果が出ない】
転職して1年が経過し、仕事に楽しさを感じる一方で成果が出ていない。
楽しさを優先して現状を続けるか、成果向上に向けて働き方を見直すかの間で葛藤し、
今後どのようにすればよいか悩んでいる。
---
【48歳公務員・民間転職を考え始めた・特に不満はない】
公務員として働いているが、民間転職を考え始めた。
特に不満はない現状を続けるか、新たな可能性を求めて転職に踏み出すかの間で葛藤し、
今後どのようにすればよいか悩んでいる。
---
【35歳男性・管理職昇進・部下育成が低迷・自信喪失・プレイヤーに戻りたい・会社は期待】
管理職に昇進したが部下育成がうまくいかず自信を失ってきた。
プレイヤーに戻りたい思いと、管理職として期待に応えたい思いの間で葛藤し、
今後どのようにすればよいか悩んでいる。
---
【28歳女性・広告会社勤務・結婚を機に地方異動可能性】
広告会社に勤務しやりがいを感じているが、結婚に伴う地方転居の可能性から今の仕事を続けられるか不安を抱き、
今後の働き方について悩んでいる。
---
【21歳女性・大学3年生・就職に有利と思い情報学部に進学・複数インターンシップでIT系就職に迷い・興味は美容業界】
就職に有利と思い情報学部に進学したが、複数のインターンシップを通してIT系への就職に迷いが生じている。
IT業界を目指すべきか、興味のある美容業界に進むべきかの間で葛藤し、
今後どのように進路を選択すればよいか悩んでいる。
---
【40歳男性・現場中堅・事務系異動打診・体力負担増加】
製造現場の中堅として働く中、事務系への異動を打診された。
体力的負担から異動を受け入れる思いと現場で働き続けたい思いの間で揺れ、
今後どのようにすればよいか悩んでいる。
---
`;

function parseItems(raw) {
  return raw
    .split("\n---\n")
    .map(b => b.trim())
    .filter(Boolean)
    .map(block => {
      const lines = block.split("\n").map(l => l.trim()).filter(Boolean);
      const theme = lines[0];
      const answer = lines.slice(1).join("\n");
      if (!theme?.startsWith("【") || !theme?.endsWith("】")) {
        throw new Error(`テーマ行が不正です: ${theme}`);
      }
      if (!answer) {
        throw new Error(`回答が空です: ${theme}`);
      }
      return { theme, answer };
    });
}

const items = parseItems(RAW_TEXT);

// ========= 状態 =========
let index = 0;
let isModelVisible = false;
let isMyAnswerVisible = true;

// ========= DOM =========
const themeEl   = document.getElementById("theme");
const answerEl  = document.getElementById("answer");
const myCardEl  = document.getElementById("myCard");
const myAnswerEl= document.getElementById("myAnswer");
const counterEl = document.getElementById("counter");
const prevBtn   = document.getElementById("prevBtn");
const nextBtn   = document.getElementById("nextBtn");
const metaEl    = document.getElementById("meta");
const clearBtn  = document.getElementById("clearBtn");
const copyBtn   = document.getElementById("copyBtn");
const toggleModelBtn = document.getElementById("toggleModelBtn");

// ========= 保存/復元 =========
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { index: 0, answers: {} };
    const parsed = JSON.parse(raw);
    return {
      index: Number.isInteger(parsed.index) ? parsed.index : 0,
      answers: parsed.answers && typeof parsed.answers === "object" ? parsed.answers : {}
    };
  } catch {
    return { index: 0, answers: {} };
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getSavedAnswer(i) {
  const state = loadState();
  return state.answers[String(i)] ?? "";
}

function setSavedAnswer(i, text) {
  const state = loadState();
  state.answers[String(i)] = text;
  state.index = index;
  saveState(state);
}

// ========= 文字数カウント =========
function countChars(text) {
  return text.length; // 改行も1文字としてカウント
}

function updateCounter() {
  const n = countChars(myAnswerEl.value);
  counterEl.textContent = `${n} 文字（目標 ${TARGET}）`;

  counterEl.classList.remove("ok", "warn");
  const diff = n - TARGET;

  if (Math.abs(diff) <= OK_RANGE) {
    counterEl.classList.add("ok");
  } else if (n > TARGET) {
    counterEl.classList.add("warn");
  }
}

// ========= 描画 =========
function render() {
  const item = items[index];

  themeEl.textContent = item.theme;

  // あなたの回答カード表示/非表示（テーマタップで切替）
  myCardEl.style.display = isMyAnswerVisible ? "block" : "none";
  themeEl.setAttribute("aria-expanded", String(isMyAnswerVisible));

  // 模範表示/非表示（ボタンで切替）
  answerEl.textContent = item.answer;
  answerEl.style.display = isModelVisible ? "block" : "none";

  metaEl.textContent = `${index + 1} / ${items.length}`;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === items.length - 1;

  // 回答復元
  myAnswerEl.value = getSavedAnswer(index);
  updateCounter();
}

// ========= トグル =========
function toggleMyAnswer() {
  isMyAnswerVisible = !isMyAnswerVisible;
  render();
}

function toggleModel() {
  isModelVisible = !isModelVisible;
  render();
}

// ========= ナビ =========
function goPrev() {
  if (index === 0) return;
  index--;
  isModelVisible = false;
  isMyAnswerVisible = true;

  const state = loadState();
  state.index = index;
  saveState(state);

  render();
}

function goNext() {
  if (index === items.length - 1) return;
  index++;
  isModelVisible = false;
  isMyAnswerVisible = true;

  const state = loadState();
  state.index = index;
  saveState(state);

  render();
}

// ========= ツール =========
function clearMyAnswer() {
  myAnswerEl.value = "";
  setSavedAnswer(index, "");
  updateCounter();
}

async function copyMyAnswer() {
  const text = myAnswerEl.value;
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    myAnswerEl.select();
    document.execCommand("copy");
    myAnswerEl.setSelectionRange(myAnswerEl.value.length, myAnswerEl.value.length);
  }
}

// ========= イベント =========
// テーマ：あなたの回答を表示/非表示（誤タップ防止）
themeEl.addEventListener("click", toggleMyAnswer);
themeEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleMyAnswer();
  }
});

// 模範ボタン
toggleModelBtn.addEventListener("click", toggleModel);

// 前/次
prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);

// 入力
myAnswerEl.addEventListener("input", () => {
  setSavedAnswer(index, myAnswerEl.value);
  updateCounter();
});

// クリア/コピー
clearBtn.addEventListener("click", clearMyAnswer);
copyBtn.addEventListener("click", copyMyAnswer);

// PC操作：←/→で移動、T=回答トグル、M=模範トグル
document.addEventListener("keydown", (e) => {
  const active = document.activeElement;
  const isTyping = active === myAnswerEl;

  if (!isTyping && e.key === "ArrowLeft") goPrev();
  if (!isTyping && e.key === "ArrowRight") goNext();
  if (!isTyping && e.key.toLowerCase() === "t") toggleMyAnswer();
  if (!isTyping && e.key.toLowerCase() === "m") toggleModel();
});

// 初期ロード：前回の続きから
(function init() {
  const state = loadState();
  if (Number.isInteger(state.index) && state.index >= 0 && state.index < items.length) {
    index = state.index;
  }
  render();
})();
