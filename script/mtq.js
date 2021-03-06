// .navbar -sub: overlauy
function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
}
function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

// ----------------------------------------------------------------

// -sub: icon
document.querySelector('a.navbar-brand i').classList.add('fa', 'fa-phone');

const iconOverlay = document.querySelectorAll('#mySidenav i');
iconOverlay[0].classList.add('fa', 'fa-times-circle-o');
for (let i = 1; i < iconOverlay.length; i++) {
  iconOverlay[i].classList.add('fa', 'fa-whatsapp');
}

const WhatsApp = document.querySelectorAll('.icon-wa');
for (let i = 0; i < WhatsApp.length; i++) {
  WhatsApp[i].classList.add('fa', 'fa-whatsapp');
}

const iconNavbar = document.querySelectorAll('a.nav-link');
iconNavbar[0].classList.add('fa', 'fa-home');
iconNavbar[1].classList.add('fa', 'fa-file-pdf-o');
iconNavbar[2].classList.add('fa', 'fa-file-text-o');
iconNavbar[3].classList.add('fa', 'fa-file-text-o');
iconNavbar[4].classList.add('fa', 'fa-map-marker');
iconNavbar[5].classList.add('fa', 'fa-chevron-circle-down');

const fileUndangan = document.querySelectorAll('.file-undangan');
for (let i = 0; i < fileUndangan.length; i++) {
  fileUndangan[i].classList.add('fa', 'fa-file-pdf-o');
}

const iconMap = document.querySelectorAll('.map');
for (let i = 0; i < iconMap.length; i++) {
  iconMap[i].classList.add('fa', 'fa-map-marker');
}

const iconDaftar = document.querySelectorAll('.daftar');
for (let i = 0; i < iconDaftar.length; i++) {
  iconDaftar[i].classList.add('fa', 'fa-file-text-o');
}

const iconFileUndangan = document.querySelectorAll('.fileUndangan');
for (let i = 0; i < iconFileUndangan.length; i++) {
  iconFileUndangan[i].classList.add('fa', 'fa-file-pdf-o');
}

const iconLink = document.querySelectorAll('.link');
for (let i = 0; i < iconLink.length; i++) {
  iconLink[i].classList.add('fa', 'fa-link');
}

// sweetalert
const alertError = document.querySelectorAll('.alert-e');
for (let i = 0; i < alertError.length; i++) {
  alertError[i].addEventListener('click', function () {
    Swal.fire({
      icon: 'error',
      title: 'Akses Gagal !',
      text: 'Link belum tersedia',
    });
  });
}
