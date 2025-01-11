// nama table nya (Node nya di firebase)

// Initialize Firebase
var prmTotaldata = document.getElementById("txt_totalData");
var currentdate = Date();
var prmDataUCapan = [];

// lsit dataUcapan
let prmListDataUcapan = [];

//var list data coment
const listComment = document.getElementById("list-comment");

function getCurentDatetime() {
     var date = new Date();
     return date.toISOString().replace("T", " ").substring(0, 19);
}

function showAlert(prmNama, prmIsError = false) {
     const alertType = document.getElementById("alert-version");
     const alert = document.getElementById("alertUcapan");
     const alertNama = document.getElementById("namaTamu-alert");

     if (prmIsError) {
          alertType.classList.remove("alert-success");
          alertType.classList.add("alert-danger");
     } else {
          alertType.classList.add("alert-success");
          alertType.classList.remove("alert-danger");
     }

     alertNama.innerHTML = `<b> Hallo ` + prmNama + `</b>`;
     alert.style.display = "block";

     setTimeout(function () {
          //hide laaert 3 detik
          alert.style.display = "none";
     }, 8000);
}

function generateUUID() {
     let dt = new Date().getTime();
     let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (c) {
               let r = (dt + Math.random() * 16) % 16 | 0;
               dt = Math.floor(dt / 16);
               return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
          }
     );
     return uuid;
}

function sendUcapan() {
     var prmEndPoint =
          "https://script.google.com/macros/s/AKfycbx7Wp-wSIc7sL9nIfEYd7GVQCbDiK4wiZug4yt99FGS-3O6bxOfn18WZU9e-wY70hH3JA/exec";
     const btnSend = document.getElementById("btn-senducapan");
     const prmNama = document.getElementById("inputNama");
     const prmUcapan = document.getElementById("inputUcapan");
     const prmKehadiran = document.getElementById("inputKehadiran");

     if (
          (prmNama.value == null || prmNama.value == "") &&
          (prmUcapan.value == null || prmUcapan.value == "")
     ) {
          console.log(" tidak boleh kirim ");
          showAlert("Maaf silahkan masukan Nama dan Ucapan ..", true);
     } else {
          console.log(" boleh kirim ");

          var uuid = generateUUID();

          btnSend.textContent = "Sending ...";
          btnSend.disabled = true;
          prmDataUCapan = {
               IDUcapan: uuid,
               UserName: prmNama.value,
               Ucapan: prmUcapan.value,
               Kehadiran: prmKehadiran.value,
               TanggalSubmit: getCurentDatetime(),
          };

          fetch(prmEndPoint, {
               method: "POST",
               mode: "no-cors",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(prmDataUCapan), // Kirim data sebagai JSON
          })
               .then((response) => response.json())
               .then((data) => {
                    // console.log("Berhasil:", data);
                    //showAlert(prmNama.value);
                    prmNama.value = "";
                    prmUcapan.value = "";
                    btnSend.textContent = "Kirim Ucapan";
                    btnSend.disabled = false;

                    getDataUcapan();
               })
               .catch((error) => {
                    //console.error("Error:", error);
                    showAlert(error, true);
               });
     }
}

function getDataUcapan() {
     var prmEndPoint =
          "https://script.google.com/macros/s/AKfycbx7Wp-wSIc7sL9nIfEYd7GVQCbDiK4wiZug4yt99FGS-3O6bxOfn18WZU9e-wY70hH3JA/exec";
     prmListDataUcapan = [];

     fetch(prmEndPoint, {
          method: "GET",
     })
          .then((response) => response.json())
          .then((data) => {
               //console.log("Berhasil:", data);
               // Asumsikan `data` adalah array objek
               data.forEach((item) => {
                    prmListDataUcapan.push(item); // Tambahkan setiap item ke array
               });

               //console.log("data ->", prmListDataUcapan);
               DisplayComment(prmListDataUcapan);
          })
          .catch((error) => {
               console.error("Error:", error);
               showAlert(error, true);
          });
}

getDataUcapan();

function DisplayComment(prmListData) {
     listComment.innerHTML = "";

     //  prmTotaldata.textContent = "";
     //  prmTotaldata.textContent =
     //       "Total Data " + prmListData.length + " Komentar ";

     // looping data key
     prmListData.forEach((item) => {
          //${ prmListData[key].key }
          listComment.innerHTML += `<div class="comment-card">
                                    <!-- Kolom kiri: Ikon user -->
                                    <div class="comment-icon">
                                        <img src="https://via.placeholder.com/40" alt="User Icon">
                                    </div>

                                    <!-- Kolom kanan: Konten komentar -->
                                    <div class="comment-content">
                                        <div class="name">${
                                             item.UserName || "Unknown"
                                        } | ${item.Kehadiran}</div>
                                        <div class="datetime">${formatDate(
                                             item.TanggalSubmit
                                        )}</div>
                                        <div class="message">${
                                             item.Ucapan || "No Comment"
                                        }</div>
                                    </div>
                            </div>`;
     });

     //      	"IDUcapan": "50601f59-e340-42af-96ff-3ae46763fd87",
     // 		"UserName": "ujang",
     // 		"Ucapan": "ok",
     // 		"Kehadiran": "ok",
     // 		"TanggalSubmit": "2025-01-11T10:38:18.000Z"
}

function formatDate(dateString) {
     const date = new Date(dateString);
     return date.toLocaleString("id-ID", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false, // Gunakan format 24 jam
     });
}
