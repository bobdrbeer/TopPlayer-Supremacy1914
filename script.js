
const initialCandidates = [
  "BobDrBeer",
  "XX-Zoro-XX",
  "talebano 001",
  "N30N99",
  "Italo Slavo",
  "Cairon"
];

let candidates = [...initialCandidates];
let selectedNickname = "";

const candidatesContainer = document.getElementById("candidates");
const addForm = document.getElementById("add-form");
const nicknameInput = document.getElementById("nickname-input");
const modal = document.getElementById("confirm-modal");
const modalMessage = document.getElementById("modal-message");
const result = document.getElementById("result");

function renderCandidates() {
  candidatesContainer.replaceChildren();

  candidates.forEach((nickname) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "candidate";

    const avatar = document.createElement("span");
    avatar.className = "avatar";
    avatar.textContent = nickname.trim().charAt(0).toUpperCase();

    const details = document.createElement("span");

    const name = document.createElement("span");
    name.className = "candidate-name";
    name.textContent = nickname;

    const label = document.createElement("span");
    label.className = "candidate-label";
    label.textContent = "Candidato al titolo";

    details.append(name, label);
    button.append(avatar, details);

    button.addEventListener("click", () => {
      selectedNickname = nickname;
      modalMessage.textContent =
        `Sei sicuro di voler votare ${selectedNickname}?`;
      modal.classList.remove("hidden");
    });

    candidatesContainer.appendChild(button);
  });
}

addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nickname = nicknameInput.value.trim();

  if (!nickname) {
    nicknameInput.focus();
    return;
  }

  const alreadyExists = candidates.some(
    (candidate) => candidate.toLowerCase() === nickname.toLowerCase()
  );

  if (alreadyExists) {
    alert("Questo nickname è già presente nel sondaggio!");
    return;
  }

  candidates.push(nickname);
  nicknameInput.value = "";
  renderCandidates();
});

function registerVote() {
  modal.classList.add("hidden");
  candidatesContainer.classList.add("hidden");
  addForm.classList.add("hidden");
  document.querySelector(".hint").classList.add("hidden");
  result.classList.remove("hidden");

  // Il risultato è volutamente sempre BobDrBeer,
  // indipendentemente dalla scelta e dalla conferma.
}

document.getElementById("yes-button").addEventListener("click", registerVote);
document.getElementById("no-button").addEventListener("click", registerVote);

document.getElementById("retry-button").addEventListener("click", () => {
  result.classList.add("hidden");
  candidatesContainer.classList.remove("hidden");
  addForm.classList.remove("hidden");
  document.querySelector(".hint").classList.remove("hidden");
  selectedNickname = "";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    // Anche chiudendo la finestra, il sondaggio non registra un voto.
    modal.classList.add("hidden");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.add("hidden");
  }
});

renderCandidates();
