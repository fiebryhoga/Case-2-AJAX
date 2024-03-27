const toggleButton = document.getElementById("toggleButton");
const cardChat = document.getElementById("cardChat");

toggleButton.addEventListener("click", function () {
  if (cardChat.style.display === "none") {
    cardChat.style.display = "flex";
  } else {
    cardChat.style.display = "none";
  }

  var haha = cardChat.style.display;

  console.log(haha);
});

document.addEventListener("DOMContentLoaded", function () {
  const chatForm = document.getElementById("chatForm");
  const chatMessages = document.getElementById("chatMessages");
  const currentUsernameInput = document.getElementById("currentUsername");
  const currentUsername = currentUsernameInput.value;

  // Mengirim pesan baru ketika formulir di-submit
  chatForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Menghentikan pengiriman formulir secara default

    // Mengambil data pesan dari formulir
    const pesanInput = document.getElementById("messageInput");
    const pesan = pesanInput.value;

    // Kirim data pesan ke server menggunakan AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "chat.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Handle response jika diperlukan
          console.log(xhr.responseText);
          // Reload chat setelah mengirim pesan baru
          loadChat();
        } else {
          // Handle kesalahan jika diperlukan
          console.error("Terjadi kesalahan:", xhr.statusText);
        }
      }
    };
    xhr.send("pesan=" + encodeURIComponent(pesan));

    // Bersihkan input setelah pengiriman
    pesanInput.value = "";
  });

  // Fungsi untuk memuat pesan-pesan dari file chat.txt
  function loadChat() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "chat.txt", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Parsing pesan-pesan dari file chat.txt
          const pesanArray = xhr.responseText.split("\n");

          // Membersihkan chatMessages sebelum menambahkan pesan-pesan baru
          chatMessages.innerHTML = "";

          // Menambahkan setiap pesan ke dalam chatMessages
          pesanArray.forEach(function (pesan) {
            if (pesan.trim() !== "") {
              // Pisahkan username dan pesan
              const pesanParts = pesan.split(": ");
              const pengirim = pesanParts[0].trim();
              const isiPesan = pesanParts[1].trim();

              // Buat elemen untuk menampilkan pesan dan nama pengirim
              const chatContent = document.createElement("div");
              chatContent.classList.add(
                "flex",
                "flex-col",
                "items-start",
                "mb-2"
              );

              // Buat elemen untuk menampilkan foto profil
              const fotoProfil = document.createElement("div");
              fotoProfil.classList.add(
                "h-5",
                "w-5",
                "rounded-full",
                "bg-transparent"
              );
              const fotoProfilImg = document.createElement("img");
              fotoProfilImg.classList.add(
                "object-cover",
                "w-full",
                "rounded-full"
              );
              fotoProfilImg.src = "Assets/Images/Profile_group.png";
              fotoProfilImg.alt = "";

              // Buat elemen untuk menampilkan username di atas pesan
              const pengirimElement = document.createElement("p");
              pengirimElement.textContent = pengirim;
              pengirimElement.classList.add("text-xs", "text-gray-600");

              // Buat elemen untuk menampilkan pesan
              const pesanElement = document.createElement("div");
              pesanElement.textContent = isiPesan;

              // Tambahkan kelas CSS untuk menentukan posisi pesan
              if (pengirim === currentUsername) {
                pesanElement.classList.add(
                  "bg-green-500",
                  "text-white",
                  "rounded-lg",
                  "p-2",
                  "max-w-xs"
                );
                chatContent.classList.add("self-end", "items-end");
              } else {
                pesanElement.classList.add(
                  "bg-blue-500",
                  "text-white",
                  "rounded-lg",
                  "p-2",
                  "max-w-xs"
                );
                chatContent.classList.add("self-start", "items-start");
              }

              // Menambahkan foto profil ke dalam elemen fotoProfil
              fotoProfil.appendChild(fotoProfilImg);

              // Tambahkan elemen foto profil, pesan, dan nama pengirim ke dalam chatContent
              chatContent.appendChild(fotoProfil);
              chatContent.appendChild(pesanElement);
              chatContent.appendChild(pengirimElement);

              // Tambahkan chatContent ke dalam chatMessages
              chatMessages.appendChild(chatContent);
            }
          });

          // Scroll ke bawah agar pesan terbaru terlihat
          chatMessages.scrollTop = chatMessages.scrollHeight;
        } else {
          console.error("Terjadi kesalahan saat memuat chat:", xhr.statusText);
        }
      }
    };
    xhr.send();
  }

  // Memuat chat saat halaman dimuat dan setiap 1 detik
  loadChat();
  setInterval(loadChat, 1000);
});
