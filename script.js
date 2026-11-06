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
link.textContent = "Детальніше";

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

function createRadarChart(scores) {

    const categories = [
        { key: "science", label: "STEM" },
        { key: "art", label: "Творчість" },
        { key: "olympiad", label: "Олімпіади" },
        { key: "competition", label: "Наука" }
    ];

    const total = answers.length || 1;

    const values = categories.map(item =>
        (scores[item.key] || 0) / total * 100
    );

    const centerX = 200;
    const centerY = 190;
    const radius = 125;

    const angles = [
        -90, 0, 90, 180
    ];

    function getPoint(angle, value) {
        const radians = angle * Math.PI / 180;
        const distance = radius * value / 100;

        return {
            x: centerX + Math.cos(radians) * distance,
            y: centerY + Math.sin(radians) * distance
        };
    }

    function polygonPoints(scale) {
        return angles.map(angle => {
            const p = getPoint(angle, scale);
            return `${p.x},${p.y}`;
        }).join(" ");
    }

    const wrapper = document.createElement("div");
    wrapper.className = "radar-wrapper";

    const heading = document.createElement("h3");
    heading.textContent = "Твоя карта інтересів";

    const svg = document.createElementNS(
        "http://www.w3.org/2000/svg", "svg"
    );

    svg.setAttribute("viewBox", "0 0 400 380");
    svg.classList.add("radar-chart");

    // Сітка з ромбів
    [25, 50, 75, 100].forEach(scale => {
        const grid = document.createElementNS(
            "http://www.w3.org/2000/svg", "polygon"
        );

        grid.setAttribute("points", polygonPoints(scale));
        grid.setAttribute("class", "radar-grid");
        svg.append(grid);
    });

    // Осі
    angles.forEach(angle => {
        const p = getPoint(angle, 100);

        const line = document.createElementNS(
            "http://www.w3.org/2000/svg", "line"
        );

        line.setAttribute("x1", centerX);
        line.setAttribute("y1", centerY);
        line.setAttribute("x2", p.x);
        line.setAttribute("y2", p.y);
        line.setAttribute("class", "radar-axis");

        svg.append(line);
    });

    // Фігура результату
    const points = values.map((value, index) =>
        getPoint(angles[index], value)
    );

    const area = document.createElementNS(
        "http://www.w3.org/2000/svg", "polygon"
    );

    area.setAttribute(
        "points",
        points.map(p => `${p.x},${p.y}`).join(" ")
    );

    area.setAttribute("class", "radar-area");
    svg.append(area);

    // Точки результатів
    points.forEach(p => {
        const circle = document.createElementNS(
            "http://www.w3.org/2000/svg", "circle"
        );

        circle.setAttribute("cx", p.x);
        circle.setAttribute("cy", p.y);
        circle.setAttribute("r", 5);
        circle.setAttribute("class", "radar-point");

        svg.append(circle);
    });

    // Підписи напрямів та відсотків
    const labelPositions = [
        { x: 200, y: 24, anchor: "middle" },
        { x: 355, y: 190, anchor: "start" },
        { x: 200, y: 355, anchor: "middle" },
        { x: 45, y: 190, anchor: "end" }
    ];

    categories.forEach((item, index) => {
        const label = document.createElementNS(
            "http://www.w3.org/2000/svg", "text"
        );

        label.setAttribute("x", labelPositions[index].x);
        label.setAttribute("y", labelPositions[index].y);
        label.setAttribute("text-anchor", labelPositions[index].anchor);
        label.setAttribute("class", "radar-label");
        label.textContent = item.label;

        svg.append(label);

        const percent = document.createElementNS(
            "http://www.w3.org/2000/svg", "text"
        );

        const p = points[index];

        percent.setAttribute("x", p.x);
        percent.setAttribute("y", p.y - 10);
        percent.setAttribute("text-anchor", "middle");
        percent.setAttribute("class", "radar-percent");
        percent.textContent = Math.round(values[index]) + "%";

        svg.append(percent);
    });
const legend = document.createElement("p");
    legend.className = "radar-legend";
    legend.textContent =
        "Розподіл твоїх інтересів за результатами тесту";

    wrapper.append(heading, svg, legend);

    return wrapper;
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

result.append(createRadarChart(scores));

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
// ==========================================
// CITY4YOUTH — ІНТЕРАКТИВНА КАРТА ЖИТОМИРА
// ==========================================

(function () {
    const mapElement = document.getElementById("cityMap");

    // Якщо на сторінці немає карти або Leaflet,
    // цей код не заважатиме іншим функціям сайту.
    if (!mapElement || typeof L === "undefined") {
        return;
    }

    const statusElement = document.getElementById("mapStatus");
    const listElement = document.getElementById("mapPlacesList");
    const searchElement = document.getElementById("mapSearch");
    const filterButtons = document.querySelectorAll(".map-filter");

    // Реальні заклади та адреси Житомира.
    const places = [
        {
            name: "Житомирський міський центр науково-технічної творчості учнівської молоді",
            address: "вул. Віктора Косенка, 19, Житомир",
            category: "stem",
            type: "STEM, робототехніка, Arduino, 3D-моделювання",
            website: "https://mcnttumzt.do.zt.ua/"
        },
        {
            name: "Центр творчості дітей і молоді",
            address: "майдан імені С. П. Корольова, 10, Житомир",
            category: "culture",
            type: "Творчість, гуртки, розвиток талантів",
            website: "https://ctdim.zt.ua/"
        },
        {
            name: "Молодіжний центр Житомирщини Kreativ Space",
            address: "провулок Скорульського, 3, Житомир",
            category: "youth",
            type: "Молодіжні ініціативи та події",
            website: "https://www.facebook.com/kreativ.space.zt"
        },
        {
            name: "Пластовий молодіжний центр",
            address: "вулиця Скорульського, 5, кабінет 114, Житомир",
            category: "youth",
            type: "Лідерство, командна робота, волонтерство",
            website: "https://www.facebook.com/plastyouthcenter/"
        },
        {
            name: "Житомирська політехніка",
            address: "вулиця Чуднівська, 103, Житомир",
            category: "education",
            type: "Технічна освіта, IT, інженерія",
            website: "https://ztu.edu.ua/"
        },
        {
            name: "Житомирський державний університет імені Івана Франка",
            address: "вулиця Велика Бердичівська, 40, Житомир",
            category: "education",
            type: "Університет, наука та освіта",
            website: "https://zu.edu.ua/"
        },
        {
            name: "Поліський національний університет",
            address: "бульвар Старий, 7, Житомир",
            category: "education",
            type: "Освіта, наука, екологія",
            website: "https://polissiauniver.edu.ua/"
        },
        {
            name: "Житомирська обласна бібліотека для дітей та юнацтва",
            address: "вулиця Університетська, 36, Житомир",
            category: "education",
            type: "Читання, навчання та культурні заходи",
            website: "https://www.libertyspace.org.ua/"
        },
        {
            name: "Центральна міська бібліотека імені Василя Земляка",
            address: "вулиця Добровольчих батальйонів, 3, Житомир",
            category: "education",
            type: "Бібліотека, читання та навчання",
            website: "https://littera.zt.ua/"
        },
        {
            name: "Дитячо-юнацька спортивна школа №2",
            address: "вулиця Хлібна, 24, Житомир",
            category: "sport",
            type: "Спортивні секції",
            website: ""
        },
        {
            name: "Житомирський Палац культури",
            address: "вулиця Святослава Ріхтера, 12/5, Житомир",
            category: "culture",
            type: "Культурні заходи та творчі колективи",
            website: ""
        }
    ];

    // Початковий центр карти — місто Житомир.
    const cityMap = L.map("cityMap").setView(
        [50.2547, 28.6587],
        13
    );

    // Підкладка карти Esri World Street Map
L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    {
        attribution:
            "Tiles &copy; Esri — Sources: Esri, HERE, Garmin, USGS, and others",

        maxZoom: 19
    }
).addTo(cityMap);

    const markers = [];

    let activeCategory = "all";

    // Зчитування збережених координат.
    function getSavedCoordinates() {
        try {
            return JSON.parse(
                localStorage.getItem("city4youthMapCoordinates") || "{}"
            );
        } catch (error) {
            return {};
        }
    }

    // Збереження координат.
    function saveCoordinates(data) {
        try {
            localStorage.setItem(
                "city4youthMapCoordinates",
                JSON.stringify(data)
            );
        } catch (error) {
            console.warn("Не вдалося зберегти координати", error);
        }
    }

    // Пошук координат за адресою через OpenStreetMap.
    async function findCoordinates(address) {
        const saved = getSavedCoordinates();

        if (saved[address]) {
            return saved[address];
        }

        const query = encodeURIComponent(address);

        const url =
            "https://nominatim.openstreetmap.org/search" +
            "?format=jsonv2&limit=1&countrycodes=ua&q=" + query;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Помилка пошуку адреси");
            }

            const result = await response.json();

            if (!result.length) {
                return null;
            }

            const coordinates = {
                lat: Number(result[0].lat),
                lng: Number(result[0].lon)
            };

            saved[address] = coordinates;
            saveCoordinates(saved);

            return coordinates;

        } catch (error) {
            console.error("Не вдалося знайти:", address, error);
            return null;
        }
    }

    // Формування посилання для прокладання маршруту.
    function getRouteLink(place) {
        return "https://www.google.com/maps/search/?api=1&query=" +
            encodeURIComponent(place.address);
    }

    // Додавання картки закладу до списку.
    function createPlaceCard(place, index) {
        const card = document.createElement("div");
        card.className = "map-place-card";

        const title = document.createElement("h4");
        title.textContent = place.name;

        const address = document.createElement("p");
        address.textContent = "📍 " + place.address;

        const type = document.createElement("p");
        type.textContent = place.type;

        const route = document.createElement("a");
        route.href = getRouteLink(place);
        route.target = "_blank";
        route.rel = "noopener noreferrer";
        route.textContent = "Прокласти маршрут →";

        card.appendChild(title);
        card.appendChild(address);
        card.appendChild(type);
        card.appendChild(route);

        card.addEventListener("click", function (event) {
            if (event.target.closest("a")) {
                return;
            }

            const marker = markers[index];

            if (marker) {
                cityMap.flyTo(marker.getLatLng(), 16);
                marker.openPopup();
            }
        });

        return card;
    }

    // Оновлення списку відповідно до фільтра та пошуку.
    function renderPlaces() {
        listElement.replaceChildren();

        const searchText = searchElement.value
            .trim()
            .toLowerCase();

        const filtered = places
            .map((place, index) => ({ place, index }))
            .filter(function (item) {
                const place = item.place;

                const matchesCategory =
                    activeCategory === "all" ||
                    place.category === activeCategory;
const matchesSearch =
                    place.name.toLowerCase().includes(searchText) ||
                    place.address.toLowerCase().includes(searchText) ||
                    place.type.toLowerCase().includes(searchText);

                return matchesCategory && matchesSearch;
            });

        if (filtered.length === 0) {
            const empty = document.createElement("p");
            empty.className = "map-empty";
            empty.textContent = "За вашим запитом нічого не знайдено.";
            listElement.appendChild(empty);
            return;
        }

        filtered.forEach(function (item) {
            listElement.appendChild(
                createPlaceCard(item.place, item.index)
            );
        });
    }

    // Створення позначки на карті.
    function addMarker(place, index, coordinates) {
        const marker = L.marker([
            coordinates.lat,
            coordinates.lng
        ]).addTo(cityMap);

        const popup = document.createElement("div");

        const title = document.createElement("strong");
        title.textContent = place.name;

        const address = document.createElement("p");
        address.textContent = place.address;

        const type = document.createElement("p");
        type.textContent = place.type;

        const route = document.createElement("a");
        route.href = getRouteLink(place);
        route.target = "_blank";
        route.rel = "noopener noreferrer";
        route.textContent = "Прокласти маршрут";

        popup.appendChild(title);
        popup.appendChild(address);
        popup.appendChild(type);
        popup.appendChild(route);

        if (place.website) {
            const website = document.createElement("p");
            const link = document.createElement("a");

            link.href = place.website;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "Сайт / сторінка закладу";

            website.appendChild(link);
            popup.appendChild(website);
        }

        marker.bindPopup(popup);

        markers[index] = marker;
    }

    // Завантаження всіх позначок.
    async function loadMapPlaces() {
        let found = 0;

        for (let i = 0; i < places.length; i++) {
            statusElement.textContent =
                "Знаходимо заклади на карті: " +
                (i + 1) + " із " + places.length;

            const coordinates = await findCoordinates(
                places[i].address
            );

            if (coordinates) {
                addMarker(places[i], i, coordinates);
                found++;
            }

            // Не надсилаємо запити частіше ніж раз на секунду.
            if (i < places.length - 1) {
                await new Promise(function (resolve) {
                    setTimeout(resolve, 1100);
                });
            }
        }

        statusElement.textContent =
            "На карті знайдено " + found +
            " із " + places.length + " закладів.";

        renderPlaces();

        // Показати всі знайдені позначки.
        const visibleMarkers = markers.filter(Boolean);

        if (visibleMarkers.length > 0) {
            const group = L.featureGroup(visibleMarkers);
            cityMap.fitBounds(group.getBounds().pad(0.12));
        }
    }

    // Робота пошуку.
    searchElement.addEventListener("input", renderPlaces);

    // Робота кнопок категорій.
    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            activeCategory = button.dataset.category;

            renderPlaces();

            markers.forEach(function (marker, index) {
                if (!marker) return;

                const place = places[index];
const visible =
                    activeCategory === "all" ||
                    place.category === activeCategory;

                if (visible && cityMap.hasLayer(marker)) {
                    marker.setOpacity(1);
                } else if (visible) {
                    marker.addTo(cityMap);
                } else {
                    cityMap.removeLayer(marker);
                }
            });
        });
    });

    // Початковий список та завантаження карти.
    renderPlaces();
    loadMapPlaces();

})();
// ===== BACK TO TOP BUTTON =====

(function () {

    const backToTop = document.getElementById("backToTop");

    if (!backToTop) return;

    // Показуємо кнопку після прокручування
    window.addEventListener("scroll", function () {

        if (window.scrollY > 350) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    // Плавне повернення на початок
    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

})();