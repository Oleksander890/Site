"use strict";

const checkedDate = "2026-10-27";

const opportunities = [
{
title: "Робототехніка та Arduino",
organization: "Житомирський міський центр науково-технічної творчості учнівської молоді",
category: "science",
icon: "🤖",
description: "Гуртки з основ робототехніки на Arduino, конструювання та технічного моделювання.",
address: "Житомир, вул. Віктора Косенка, 19. Є також інші навчальні корпуси.",
status: "Перевірити наявність місць і розклад у закладі.",
source: "https://mcnttumzt.do.zt.ua/informacziya-nav-korpus/"
},
{
title: "Програмування та комп'ютерна графіка",
organization: "Житомирський міський центр науково-технічної творчості учнівської молоді",
category: "science",
icon: "💻",
description: "На сайті закладу зазначені гуртки програмування та комп'ютерної графіки в корпусі на вул. Бориса Тена, 82а.",
address: "Житомир, вул. Бориса Тена, 82а",
status: "Уточнити, які гуртки працюють цього навчального року.",
source: "https://mcnttumzt.do.zt.ua/informacziya-nav-korpus/"
},
{
title: "Творчі та мистецькі гуртки",
organization: "Житомирський центр творчості дітей і молоді",
category: "art",
icon: "🎨",
description: "Образотворче мистецтво, декоративно-ужиткова творчість та інші напрями.",
address: "Житомир, майдан ім. С. П. Корольова, 10",
status: "Сайт закладу повідомляє про гуртки та безкоштовне навчання; уточни розклад.",
source: "https://ctdim.zt.ua/viddily"
},
{
title: "Інженерія, 3D-друк і прототипування",
organization: "Інноваційний хаб Житомирської політехніки",
category: "science",
icon: "🛠️",
description: "Інженерні моделі, прототипи, 3D-друк та інноваційні проєкти. Доступність конкретних програм для школярів потрібно уточнити.",
address: "Житомир, вул. Чуднівська, 103",
status: "Перевір умови участі та актуальні програми.",
source: "https://inhub.ztu.edu.ua/ua/"
},
{
title: "Учнівські олімпіади",
organization: "Учнівський олімпіадний рух Житомирщини",
category: "olympiad",
icon: "🏆",
description: "Оголошення, нормативні документи та результати предметних олімпіад.",
address: "Місце проведення визначається організаторами кожного етапу.",
status: "Перевіряй оголошення: реєстрація на 2026/2027 рік, зазначена на сайті, завершилася 25 вересня 2026 року.",
source: "https://sites.google.com/view/uchnivskiyolimpruhzhytomyr/"
},
{
title: "Наукові дослідження та МАН",
organization: "Житомирська Мала академія наук",
category: "competition",
icon: "🔬",
description: "Дослідницькі роботи, наукові напрями та конкурс-захист учнівських проєктів.",
address: "Уточнюй місце консультацій і заходів у відповідному оголошенні.",
status: "Перевір строки подання робіт і вимоги поточного конкурсу.",
source: "https://zhytomyr.man.gov.ua/"
},
{
title: "Гуртки обласного центру позашкільної освіти",
organization: "Центр позашкільної освіти для дітей та молоді Житомирської обласної ради",
category: "science",
icon: "🧪",
description: "Науково-технічні, дослідницькі, туристсько-краєзнавчі та інші напрями позашкільної освіти.",
address: "Житомир, вул. Троянівська, 20",
status: "Уточни перелік гуртків, вік учасників та наявність місць.",
source: "https://zhytomyr.man.gov.ua/zaklad/Zaproshuemo_v_gurtki/"
}
];

const cards = document.getElementById("cards");
const search = document.getElementById("search");
const category = document.getElementById("category");
const count = document.getElementById("count");
const empty = document.getElementById("empty");
const filterButtons = document.querySelectorAll(".filter");

function renderCards() {
const query = search.value.trim().toLocaleLowerCase("uk");
const chosen = category.value;

const results = opportunities.filter(item => {
const text = [
item.title, item.organization, item.description, item.address
].join(" ").toLocaleLowerCase("uk");

return text.includes(query) &&
(chosen === "all" || item.category === chosen);
});

cards.replaceChildren();

results.forEach(item => {
const article = document.createElement("article");
article.className = "card";

const icon = document.createElement("div");
icon.className = "card-icon";
icon.textContent = item.icon;

const title = document.createElement("h3");
title.textContent = item.title;

const org = document.createElement("p");
org.textContent = item.organization;

const desc = document.createElement("p");
desc.textContent = item.description;

const address = document.createElement("p");
address.className = "meta";
address.textContent = "📍 " + item.address;

const status = document.createElement("p");
status.className = "status";
status.textContent = item.status;

const date = document.createElement("p");
date.className = "small";
date.textContent = "Джерело перевірено: " + checkedDate;

const link = document.createElement("a");
link.className = "source";
link.href = item.source;
link.target = "_blank";
link.rel = "noopener noreferrer";
link.textContent = "Відкрити джерело ↗";

Natali:
article.append(icon, title, org, desc, address, status, date, link);
cards.append(article);
});

count.textContent = "Знайдено можливостей: " + results.length;
empty.hidden = results.length !== 0;
}

search.addEventListener("input", renderCards);
category.addEventListener("change", () => {
filterButtons.forEach(button => {
button.classList.toggle("active", button.dataset.filter === category.value);
});
renderCards();
});

filterButtons.forEach(button => {
button.addEventListener("click", () => {
category.value = button.dataset.filter;
filterButtons.forEach(b => b.classList.toggle("active", b === button));
renderCards();
});
});

const questions = [
{
text: "Що тобі найбільше цікаво?",
answers: [
["Програмування та створення сайтів", "science"],
["Роботи, електроніка й винаходи", "science"],
["Математика та інтелектуальні змагання", "olympiad"],
["Мистецтво та дизайн", "art"],
["Дослідження та наукові проєкти", "competition"]
]
},
{
text: "Який проєкт ти хотів би зробити?",
answers: [
["Створити застосунок", "science"],
["Зібрати електронний пристрій", "science"],
["Підготуватися до олімпіади", "olympiad"],
["Створити творчу роботу", "art"],
["Провести власне дослідження", "competition"]
]
},
{
text: "Який результат тебе найбільше потішить?",
answers: [
["Працююча технологія", "science"],
["Розв'язана складна задача", "olympiad"],
["Виставка або творча робота", "art"],
["Відкриття, підтверджене дослідженням", "competition"]
]
},
{
text: "Що ти хочеш спробувати найближчим часом?",
answers: [
["Робототехніку або програмування", "science"],
["Предметну олімпіаду", "olympiad"],
["Мистецький гурток", "art"],
["Науковий конкурс", "competition"]
]
}
];

const recommendations = {
science: "Спробуй STEM, програмування, робототехніку та інженерію.",
art: "Досліджуй творчі гуртки, мистецтво й дизайн.",
olympiad: "Перевір календар предметних олімпіад і почни підготовку.",
competition: "Дізнайся про МАН, дослідницькі роботи та наукові конкурси."
};

let questionIndex = 0;
let answers = [];
let finished = false;

const questionBox = document.getElementById("question");
const progress = document.getElementById("progress");
const next = document.getElementById("next");
const result = document.getElementById("quizResult");

function renderQuestion() {
questionBox.replaceChildren();
result.replaceChildren();

progress.textContent = `Запитання ${questionIndex + 1} із ${questions.length}`;

const heading = document.createElement("h3");
heading.textContent = questions[questionIndex].text;
questionBox.append(heading);

questions[questionIndex].answers.forEach(([labelText, value]) => {
const label = document.createElement("label");
label.className = "option";

const radio = document.createElement("input");
radio.type = "radio";
radio.name = "career";
radio.value = value;
radio.checked = answers[questionIndex] === value;

radio.addEventListener("change", () => {
answers[questionIndex] = value;
result.replaceChildren();
});

const text = document.createElement("span");
text.textContent = labelText;

label.append(radio, text);
questionBox.append(label);
});

next.textContent = questionIndex === questions.length - 1
? "Побачити рекомендацію"
: "Наступне запитання";
}

function showResults() {
questionBox.replaceChildren();
progress.textContent = "Тест завершено";

const scores = {};
answers.forEach(value => {
scores[value] = (scores[value] || 0) + 1;
});

const highest = Math.max(...Object.values(scores));
const winners = Object.keys(scores).filter(key => scores[key] === highest);

const intro = document.createElement("p");
intro.textContent = "Рекомендовані напрями для дослідження:";
result.append(intro);

Natali:
winners.forEach(key => {
const title = document.createElement("h3");
title.textContent = ({
science: "STEM і технології",
art: "Творчість",
olympiad: "Олімпіади",
competition: "Наука та конкурси"
})[key];

const description = document.createElement("p");
description.textContent = recommendations[key];

const button = document.createElement("button");
button.className = "button";
button.type = "button";
button.textContent = "Знайти відповідні можливості";

button.addEventListener("click", () => {
category.value = key;
search.value = "";
filterButtons.forEach(b => {
b.classList.toggle("active", b.dataset.filter === key);
});
renderCards();
document.getElementById("catalog").scrollIntoView();
});

result.append(title, description, button);
});

const note = document.createElement("p");
note.className = "small";
note.textContent = "Це підказка для самопізнання, а не професійний психологічний висновок.";
result.append(note);

finished = true;
next.textContent = "Пройти тест ще раз";
}

next.addEventListener("click", () => {
if (finished) {
questionIndex = 0;
answers = [];
finished = false;
renderQuestion();
return;
}

if (!answers[questionIndex]) {
result.textContent = "Обери відповідь, щоб продовжити.";
return;
}

if (questionIndex < questions.length - 1) {
questionIndex++;
renderQuestion();
} else {
showResults();
}
});

const revealElements = document.querySelectorAll(
  ".card, #quiz .panel, #about .panel"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

renderCards();
renderQuestion();