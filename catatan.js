// const ambilCatatan = function () {
//   return "Ini catatan andi Sultan Al Ayyubi...";
// };

// module.exports = ambilCatatan;

const fs = require("fs");

const ambilCatatan = function () {
  return "Ini catatan andi ganteng 123";
};

const tambahCatatan = function (judul, isi) {
  const catatan = muatCatatan();
  const catatanGanda = catatan.filter(function (note) {
    return note.title === judul;
  });

  if (catatanGanda.length === 0) {
    catatan;
  }
};
