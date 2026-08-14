const OPEN_MODAL = document.getElementById("entry_button");
const MODAL = document.getElementById("modal");

OPEN_MODAL.addEventListener("click", () => {
  MODAL.innerHTML = "hidden";
});
