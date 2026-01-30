const http = require("http");
const rupiah = require('rupiah-format');
const fs = require('fs');
const host = "127.0.0.1";
const port = 3005;
// requesr adalah data masuk dari luar
// response adalah data keluar dari sistem

const server = http.createServer(function (request, response) {
  const nama = "gilang";
  let uang = 50000;
  let jajan = 150000;
  let sisa = uang - jajan;

  uang = rupiah.convert(uang)
  jajan = rupiah.convert(jajan)
  sisa = rupiah.convert(sisa)

  fs.appendFile('sisauamg.txt', sisa, () =>{
    console.log('data berhasil disimpan')
  });
  

  const hasil = `
  <head>
   <title>${nama}</title>
  <head/>
  <body>
  <h1 style='background: black;color: white;padding: 20px; text-align: center'>node js uang jajan</h1>
  <p>
  Halo nama saya ${nama}, Saya jajan sebanyak 4 ${jajan}, uang saya tadinya ${uang} sekarang menjadi ${sisa}
  </p>
  </body>
  `;
  response.statusCode = 200;
  response.end(hasil);
});

server.listen(port, host, "", function () {
  console.log(`server menyala di ${host}:${port} `);
});
