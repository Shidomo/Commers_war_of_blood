import { openModal, createEl, closeModal } from "./main.js";

function preLoadModal() {
  if (window.innerWidth >= 425) {
    const { daddyModal } = openModal();
    const btnContinue = createEl("button", "modal__btn", "Продолжить");
    const backgroundImage = createEl("div", "modal__img");
    daddyModal.append(backgroundImage, btnContinue);
    btnContinue.addEventListener("click", closeModal);
  }
}

preLoadModal();
