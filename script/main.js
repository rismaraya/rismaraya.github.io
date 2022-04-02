const alert = document.querySelector('.errorAlert');
alert.addEventListener('click', function () {
  Swal.fire({
    icon: 'error',
    title: 'Akses Gagal !',
    text: 'Halamn web belum tersedia',
  });
});

const alert2 = document.querySelectorAll('.errorAlert2');
for (let i = 0; i < alert2.length; i++) {
  alert2[i].addEventListener('click', function () {
    Swal.fire({
      icon: 'error',
      title: 'Akses Gagal !',
      text: 'File belum tersedia',
    });
  });
}
