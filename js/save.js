document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const isFromSaved = urlParams.get("saved");
    const save = document.getElementById("save");

    if (isFromSaved) {
      // Hide fab jika dimuat dari indexed db
      save.style.display = 'none';
      // ambil artikel lalu tampilkan
      getSavedTeamById();
    } else {
      var item = getAllTeamsById();
    }
    save.onclick = function () {
      M.toast({html: 'Tim Berhasil Tersimpan Ke halaman Tim Favorit', classes: 'rounded'});
      console.log("Tombol FAB di klik.");
      item.then(function (data) {
        saveForLater(data);
        save.style.display = 'none';
      });
    };
  });