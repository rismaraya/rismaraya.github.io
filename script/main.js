const alertError = document.querySelector('.alert-e');
alertError.addEventListener('click', function () {
  Swal.fire({
    icon: 'error',
    title: 'Akses Gagal !',
    text: 'Halamn web belum tersedia',
  });
});

const alertError2 = document.querySelectorAll('.alert-e2');
for (let i = 0; i < alertError2.length; i++) {
  alertError2[i].addEventListener('click', function () {
    Swal.fire({
      icon: 'error',
      title: 'Akses Gagal !',
      text: 'File belum tersedia',
    });
  });
}
