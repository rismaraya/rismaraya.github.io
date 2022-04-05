const iconTimeLine = document.querySelectorAll('.fileUndangan');
for (let i = 0; i < iconTimeLine.length; i++) {
  iconTimeLine[i].classList.add('fa', 'fa-file-pdf-o');
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

// tukarWarna
function tukarWarna(isDark) {
  container1 = document.querySelectorAll('.container-a1');
  container2 = document.querySelectorAll('.container-b1');
  if (isDark) {
    for (let i = 0; i < container1.length; i++) {
      container1[i].classList.toggle('.container-a1');
      container1[i].setAttribute('class', 'container-b1');
      container2[i].classList.toggle('.container-b1');
      container2[i].setAttribute('class', 'container-a1');
    }
  }
}
