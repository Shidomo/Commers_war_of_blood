export const createEl = (tag, className, text) => {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
};

function createGuildInfo() {
  const infoSection = createEl("div", "info-section");
  const ul = createEl("ul", "info-section__list");
  const featuresLi = createEl("li", "info-section__item");
  const featuresHeader = createEl("h3", null, "Особенности");
  const featuresList = createEl("p", "info-section__text");
  const feature1 = createEl("span", null, "1. Гибкая система званий.");
  const feature2 = createEl(
    "span",
    null,
    "2. Высокий средний ilvl участников."
  );
  const feature3 = createEl("span", null, "3. Награды за активность.");
  const feature4 = createEl("span", null, "4. Творческое комьюнити.");
  const feature5 = createEl("span", null, "5. Буст согильдейцев на арене.");

  featuresList.append(
    createEl("br"),
    feature1,
    createEl("br"),
    feature2,
    createEl("br"),
    feature3,
    createEl("br"),
    feature4,
    createEl("br"),
    feature5
  );
  featuresLi.append(featuresHeader, featuresList);
  ul.appendChild(featuresLi);

  const eventsLi = createEl("li", "info-section__item");
  const eventsHeader = createEl("h3", null, "Мероприятия");
  const eventsList = createEl("p", "info-section__text");
  const event1 = createEl(
    "span",
    null,
    "1. Ежедневные сражения в открытом мире."
  );
  const event2 = createEl("span", null, "2. Защита Штормграда.");
  const event3 = createEl(
    "span",
    null,
    "3. Обучение навыкам ведения боя Вылазки небольшими отрядами."
  );
  const event4 = createEl(
    "span",
    null,
    "4. Совместные арены и бг Охота за головами."
  );

  eventsList.append(
    createEl("br"),
    event1,
    createEl("br"),
    event2,
    createEl("br"),
    event3,
    createEl("br"),
    event4
  );
  eventsLi.append(eventsHeader, eventsList);
  ul.appendChild(eventsLi);

  infoSection.appendChild(ul);

  return infoSection;
}

function createGuildRequirements() {
  const infoSection = createEl("div", "info-section");
  const ul = createEl("ul", "info-section__list");
  const li = createEl("li", "info-section__item");
  const h3 = createEl("h3", null, "Требования");
  const p = createEl("p", "info-section__text");

  const span1 = createEl(
    "span",
    null,
    "1.Активность на сражениях PvP ветка талантов и экипировка."
  );
  const span2 = createEl("span", null, "2.Ношение гильдейской накидки.");
  const span3 = createEl("span", null, "3.Гильдейское верховое животное.");
  const span4 = createEl("span", null, "4.Дружелюбность к соратникам.");

  p.append(
    createEl("br"),
    span1,
    createEl("br"),
    span2,
    createEl("br"),
    span3,
    createEl("br"),
    span4
  );

  ul.appendChild(li);
  li.append(h3, p);
  infoSection.appendChild(ul);

  const navLink = createEl("div", "nav__link");
  const vkBtn = createEl("a", "btn__link btn__link--black", "Vk");
  vkBtn.setAttribute("href", "https://vk.com/id734981647");
  const discordBtn = createEl("a", "btn__link btn__link--black", "Discord");
  discordBtn.setAttribute("href", "https://discord.gg/RyYrj6x5A4");
  navLink.append(vkBtn, discordBtn);
  infoSection.appendChild(navLink);

  return infoSection;
}

export const openModal = function () {
  const overlay = createEl("div", "overlay");
  const daddyModal = createEl("div", "modal");
  const closeBtn = createEl("div", "closeBtn", "X");
  document.body.append(overlay, daddyModal);
  daddyModal.appendChild(closeBtn);
  overlay.addEventListener("click", closeModal);
  closeBtn.addEventListener("click", closeModal);
  return { overlay, daddyModal, closeBtn };
};

function getModal() {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".closeBtn");
  return { modal, overlay, closeBtn };
}

export function closeModal() {
  const { overlay, modal, closeBtn } = getModal();
  overlay.removeEventListener("click", closeModal);
  closeBtn.removeEventListener("click", closeModal);
  document.body.removeChild(overlay);
  document.body.removeChild(modal);
}

/////////////////////////////////////////
document.getElementById("aboutUsBtn").addEventListener("click", () => {
  const { daddyModal } = openModal();
  const guildInfo = createGuildInfo();
  daddyModal.appendChild(guildInfo);
});

document.getElementById("connectBtn").addEventListener("click", () => {
  const { daddyModal } = openModal();
  const guildRequirements = createGuildRequirements();
  daddyModal.appendChild(guildRequirements);
});
