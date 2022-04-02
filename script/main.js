const alert = document.querySelector('.errorAlert');
alert.addEventListener('click', function () {
  Swal.fire({
    icon: 'error',
    title: 'Akses Gagal !',
    text: 'Halamn web belum tersedia',
  });
});