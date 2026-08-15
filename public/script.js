window.onload = function () {
  const open_modal = document.getElementById("entry");
  const modal = document.getElementById("modal");
  open_modal.addEventListener("click", () => {
    modal.setAttribute("visibility", "visible");
  });
};
