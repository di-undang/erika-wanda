/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// data Mempelai Pria
const prmPria_NameFull = "Wanda Pranata";
const prmPria_NameSlug = "Wanda";
const prmPria_NameAyah = "Usman Udin";
const prmPria_NameIbu = "Asmawati";
const prmPria_Urutan = "KeEmpat";

// data Mempelai Wanita
const prmWanita_NameFull = "Erika Nurul Cahyanti";
const prmWanita_NameSlug = "Erika";
const prmWanita_NameAyah = "Yamdi";
const prmWanita_NameIbu = "Dwi Lestari";
const prmWanita_Urutan = "Pertama";

// Data Resepsi
const prmTglResepsi = "Sabtu, 25 januari 2025";
const prmTglJamAkad = "Pukul : 07.00 WIB s/d Selesai";
const prmTglJamResepsi = "Pukul : 09.00 WIB s/d Selesai";
const prmLokasi =
     "Rumah Bapak Yamdi (Desa Krambil Gede RT 03 RW 17, Kelurahan Jimbung, Kecamatan Kalikotes,  Klaten, Jawa Tengah";
const prmAlamatLengkap =
     "Desa Krambil Gede RT 03 RW 17, Kelurahan Jimbung, Kecamatan Kalikotes,  Klaten, Jawa Tengah";

// Display Element
const objCover_NamaSambung = document.getElementById("cover_namasambung");
const objCover_TglResepsi = document.getElementById("cover_tglresepsi");
//************************************************************************************ */

const sections = document.querySelectorAll("section[id]");
const objMainext = document.getElementById("maintext");
const objCover = document.getElementById("cover");
const objMenu = document.getElementById("header");

//variabel counterdown
const objHari = document.getElementById("hari");
const objJam = document.getElementById("jam");
const objMenit = document.getElementById("menit");
const objDetik = document.getElementById("detik");

const objMusik = document.getElementById("myMusic");
const objGaleri = document.getElementById("img_geleri");

const btnCover = document.getElementById("btnCover");
const iconSound = document.getElementById("icon-sound");
const iconScreen = document.getElementById("icon-screen");
var delayInMilliseconds = 100; //1 second

var prmISplayMusic = false;
var prmIsFullscreen = false;

// get nama Undangan in URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const objNamaTamu = document.getElementById("nama_undangan");

// Event Load Awal
window.addEventListener("load", () => {
     // tutup coper sbntar
     // objCover.style.display = "none";
     // objMainext.style.display = "block";
     // objMenu.style.display = "block";

     //Lib aimation on Scroll
     AOS.init();

     cm01SetCoverData();
     counterdown();

     objMainext.style.display = "none";
     objMenu.style.display = "none";
     setNamaTamu();
     ShowImageGaleri();
});

function cm01SetCoverData() {
     // objCover_NamaSambung;
     // objCover_TglResepsi;
     objCover_NamaSambung.innerText =
          prmWanita_NameSlug + " & " + prmPria_NameSlug;

     objCover_TglResepsi.innerText = prmTglResepsi;

     cm03SetDataInfoMempelay();
}

function cm02OpenUdangan() {
     btnCover.textContent = "Open...";
     setTimeout(function () {
          // runing after delay finish
          objCover.style.cssText = `
            animation: slide-top 1.5s ease 1 forwards;
            `;
          setTimeout(function () {
               // runing after delay finish
               objCover.style.display = "none";
          }, 800);

          objMainext.style.display = "block";
          objMenu.style.display = "block";
          playAudio();
     }, delayInMilliseconds);

     // setTimeout(function () {
     //     // runing after delay finish
     //     objCover.style.cssText = `
     //         animation-iteration-count: 1;
     //         animation: slide-top 1.5s ease;
     //         `;

     //     objMainext.style.display = "block";
     //     objMenu.style.display = "block";
     //     playAudio();

     // }, delayInMilliseconds);
}

function cm03SetDataInfoMempelay() {
     const objHome_wanitaName = document.getElementById("home_wanitaName");
     const objHome_priaName = document.getElementById("home_PriaName");

     const objWanitaFullname = document.getElementById("info_wanitaFullName");
     const objWanitaOrtuFull = document.getElementById("info_wanitaOrtu");

     const objPriaFullname = document.getElementById("info_priaFullName");
     const objPriaOrtuFull = document.getElementById("info_priaOrtu");

     // akad Nikah
     const objLokasi_TglAkad = document.getElementById("lokasi_tglAkad");
     const objlokasi_JamAkad = document.getElementById("lokasi_JamAkad");
     const objlokasi_alamat = document.getElementById("lokasi_AlamatAkad");

     // Resepsi
     const objLokasi_TglResepsi = document.getElementById("lokasi_tglResepsi");
     const objlokasi_JamResepsi = document.getElementById("lokasi_JamResepsi");
     const objlokasi_alamatResepsi = document.getElementById(
          "lokasi_AlamatRespsi"
     );

     //alamat lengkap maps lokasi_Alamat
     const objlokasi_Maps = document.getElementById("lokasi_Alamat");

     // ************************* HOME ***************************

     objHome_wanitaName.innerText = prmWanita_NameSlug;
     objHome_priaName.innerText = prmPria_NameSlug;
     // ************************** info *******************************
     // wanita
     objWanitaFullname.innerText = prmWanita_NameFull;
     objWanitaOrtuFull.innerText =
          "Putri Pertama dari" +
          " Bpk." +
          prmWanita_NameAyah +
          " & " +
          " Ibu " +
          prmWanita_NameIbu;

     // Pria
     objPriaFullname.innerText = prmPria_NameFull;
     objPriaOrtuFull.innerText =
          "Putera KeEmpat dari" +
          " Bpk." +
          prmPria_NameAyah +
          " & " +
          " Ibu " +
          prmPria_NameIbu;

     // lokasi
     // Akad Nikah
     objLokasi_TglAkad.innerHTML = prmTglResepsi;
     objlokasi_JamAkad.innerHTML = prmTglJamAkad;
     objlokasi_alamat.innerHTML = prmLokasi;

     // Resepsi
     objLokasi_TglResepsi.innerHTML = prmTglResepsi;
     objlokasi_JamResepsi.innerHTML = prmTglJamResepsi;
     objlokasi_alamatResepsi.innerHTML = prmLokasi;

     //alamat lengkap
     objlokasi_Maps.innerHTML = prmAlamatLengkap;
}

function scrollActive() {
     const scrollY = window.pageYOffset;

     sections.forEach((current) => {
          const sectionHeight = current.offsetHeight,
               sectionTop = current.offsetTop - 50,
               sectionId = current.getAttribute("id");

          if (sectionId != "cover") {
               if (
                    scrollY > sectionTop &&
                    scrollY <= sectionTop + sectionHeight
               ) {
                    document
                         .querySelector(".nav__menu a[href*=" + sectionId + "]")
                         .classList.add("active-link");
               } else {
                    document
                         .querySelector(".nav__menu a[href*=" + sectionId + "]")
                         .classList.remove("active-link");
               }
          }
     });
}
window.addEventListener("scroll", scrollActive);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
     const header = document.getElementById("header");
     // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
     if (this.scrollY >= 80) header.classList.add("scroll-header");
     else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

function counterdown() {
     // *************** Mengatur waktu akhir perhitungan mundur *****************8s
     var countDownDate = new Date("jan 25, 2025 07:00:00").getTime();

     // Memperbarui hitungan mundur setiap 1 detik
     var x = setInterval(function () {
          // Untuk mendapatkan tanggal dan waktu hari ini
          var now = new Date().getTime();

          // Temukan jarak antara sekarang dan tanggal hitung mundur
          var distance = countDownDate - now;

          // Perhitungan waktu untuk hari, jam, menit dan detik
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor(
               (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Keluarkan hasil dalam elemen dengan id = "demo"
          // document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
          //     minutes + "m " + seconds + "s ";

          objHari.innerHTML = days;
          objJam.innerHTML = hours;
          objMenit.innerHTML = minutes;
          objDetik.innerHTML = seconds;

          // Jika hitungan mundur selesai, tulis beberapa teks
          if (distance < 0) {
               clearInterval(x);
               document.getElementById("demo").innerHTML = "EXPIRED";
          }
     }, 1000);
}

function playAudio() {
     objMusik.play();
     prmISplayMusic = true;
}

function pauseAudio() {
     objMusik.pause();
     prmISplayMusic = false;
}

function ShowImageGaleri() {
     let counter = 13; // jumlah gambar nya

     for (var i = 1; i <= counter; i++) {
          // Format nomor gambar menjadi dua digit
          var no = i.toString().padStart(2, "0");

          // Tambahkan elemen gambar ke dalam objGaleri
          objGaleri.innerHTML += `<div class="col-12 col-sm-6 col-lg-3 mt-2 " data-aos="zoom-in">
                                    <a class="example-image-link" href="./assets/img/wanda/prewed_${no}.jpg"
                                        data-lightbox="example-set"
                                        data-title="klik sisi kanan / kiri foto untuk next foto.">
                                        <img class="card img-responsive"  src="./assets/img/wanda/prewed_${no}.jpg" alt=""/>
                                    </a>
                                </div>`;
     }
}

function OnOffMusic() {
     if (prmISplayMusic) {
          pauseAudio();
          iconSound.classList.remove("bx-pasue");
          iconSound.classList.toggle("bx-play");
     } else {
          playAudio();
          iconSound.classList.remove("bx-play");
          iconSound.classList.toggle("bx-pasue");
     }
}

function setNamaTamu() {
     //?nama=(nama user)
     const prmTamuUndangan = urlParams.get("to");
     if (prmTamuUndangan == null) {
          objNamaTamu.textContent = "TAMU UNDANGAN";
     } else {
          objNamaTamu.textContent = prmTamuUndangan;
     }
     console.log(prmTamuUndangan);
}

function setFulllscreenMode() {
     // if (!document.fullscreenElement) {
     //     document.documentElement.requestFullscreen();
     // } else if (document.exitFullscreen) {
     //     document.exitFullscreen();
     // }

     prmIsFullscreen = document.fullscreenElement;

     if (!prmIsFullscreen) {
          document.documentElement.requestFullscreen();
          iconScreen.classList.remove("bx-fullscreen");
          iconScreen.classList.toggle("bx-exit-fullscreen");
     } else {
          document.exitFullscreen();
          iconScreen.classList.toggle("bx-fullscreen");
          iconScreen.classList.remove("bx-exit-fullscreen");
     }
}
function salinRekening(rekeningId) {
     // Dapatkan teks nomor rekening dari elemen dengan ID tersebut
     var rekening = document.getElementById(rekeningId).textContent;

     // Gunakan Clipboard API untuk menyalin teks
     navigator.clipboard
          .writeText(rekening)
          .then(() => {
               alert("Nomor rekening berhasil disalin: " + rekening);
          })
          .catch((err) => {
               alert("Gagal menyalin nomor rekening.");
               console.error("Error:", err);
          });
}
