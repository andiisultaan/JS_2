// const fs = require("fs");

// // fs.writeFileSync("catatan.txt", "Nama Saya Andi Sultan Al Ayyubi");

// fs.appendFileSync("catatan.txt", " Saya tinggal di Padang");

// const catatan = require("./catatan.js");
// const pesan = catatan();
// console.log(pesan);

// const validator = require("validator");
// const ambilCatatan = require("./catatan.js");
// const pesan = ambilCatatan();
// console.log(pesan);
// console.log(validator.isURL("https://unp.ac.id"));

// const ambilCatatan = require("./catatan.js");

// const command = process.argv[5];
// console.log(process.argv[2]);

// if (command === "tambah") {
//   console.log("Tambah Catatan");
// } else if (command === "hapus") {
//   console.log("Hapus Catatan");
// }

const yargs = require("yargs");
const catatan = require("./catatan.js");
const { parse } = require("path");
// Kustomisasi versi yargs
yargs.version("10.1.0");

// Membuat perintah (command) 'tambah'
yargs.command({
  command: "tambah",
  describe: "tambah sebuah catatan baru",
  handler: function () {
    console.log("Sebuah catatan baru ditambahkan!");
  },
});

// Perintah hapus
yargs.command({
  command: "hapus",
  describe: "Hapus catatan",
  handler: function () {
    console.log("Catatan berhasil dihapus!");
  },
});

// intruksi no 4

yargs.command({
  command: "tambah",
  describe: "tambah sebuah catatan baru",
  builder: {
    judul: {
      describe: "Judul catatan mang eak!",
      demandOption: true,
      type: "string",
    },
    isi: {
      describe: "Isi catatan",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log("Judul: " + argv.judul);
    // console.log("Isi: " + argv.isi);
    catatan.tambahCatatan(argv.judul, argv.isi);
  },
});

//bagian akhir
// console.log(yargs.argv);
yargs.parse();
