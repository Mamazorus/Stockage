const lenis = new Lenis({
  autoRaf: true,
});

function toggleMenu() {
  const submenu = document.getElementById("submenu");
  const triangle = document.getElementById("triangle");

  const isVisible = submenu.style.display === "flex";

  submenu.style.display = isVisible ? "none" : "flex";
  triangle.classList.toggle("rotate");
}


function updateDateTime() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = String(now.getFullYear()).slice(2);

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  document.getElementById("date").textContent = `${day}/${month}/${year}`;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
}

updateDateTime(); 
setInterval(updateDateTime, 1000); 

setInterval(() => {
  const blinker = document.getElementById("blinker");
  blinker.style.opacity = blinker.style.opacity === "0" ? "1" : "0";
}, 800); 



const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.addEventListener('click', () => {
  if (downloadBtn.classList.contains('clicked')) return;

  // Vibration (fonctionne sur mobile compatible)
  if (navigator.vibrate) {
    navigator.vibrate(100); // vibre 100ms
  }

  downloadBtn.classList.add('clicked');

  setTimeout(() => {
    downloadBtn.classList.remove('clicked');
  }, 5000);
});

const downloadFilesList = document.querySelector('.download-files-list');
const downloadInner = document.querySelector('.download-inner');

downloadInner.addEventListener('wheel', function(e) {
  // Appliquer le scroll à download-files-list
  downloadFilesList.scrollTop += e.deltaY;

  // Empêcher le scroll de la page dans tous les cas
  e.preventDefault();
  e.stopPropagation();
}, { passive: false }); // ← très important pour que preventDefault fonctionne
