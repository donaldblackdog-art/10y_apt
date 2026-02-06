const drawBtn = document.getElementById("drawBtn");
const countSelect = document.getElementById("count");
const result = document.getElementById("result");
const themeToggle = document.getElementById("themeToggle");

const THEME_KEY = "lotto-theme";

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);
  themeToggle.textContent = isDark ? "화이트 모드" : "다크 모드";
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const initialTheme = saved === "dark" ? "dark" : "light";
  applyTheme(initialTheme);
}

function toggleTheme() {
  const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);
}

function pickNumbers() {
  const pool = Array.from({ length: 45 }, (_, i) => i + 1);

  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  const mainNumbers = pool.slice(0, 6).sort((a, b) => a - b);
  const bonus = pool[6];

  return { mainNumbers, bonus };
}

function ballClass(num) {
  if (num <= 10) return "range-1-10";
  if (num <= 20) return "range-11-20";
  if (num <= 30) return "range-21-30";
  if (num <= 40) return "range-31-40";
  return "range-41-45";
}

function ball(num) {
  return `<span class="ball ${ballClass(num)}">${num}</span>`;
}

function renderTickets() {
  const count = Number(countSelect.value);
  result.innerHTML = "";

  for (let i = 1; i <= count; i += 1) {
    const { mainNumbers, bonus } = pickNumbers();
    const ticket = document.createElement("article");
    ticket.className = "ticket";

    ticket.innerHTML = `
      <h2>${i}번 게임</h2>
      <div class="numbers">
        ${mainNumbers.map(ball).join("")}
        <span class="bonus-label">+ 보너스</span>
        ${ball(bonus)}
      </div>
    `;

    result.append(ticket);
  }
}

drawBtn.addEventListener("click", renderTickets);
themeToggle.addEventListener("click", toggleTheme);

initTheme();
renderTickets();
