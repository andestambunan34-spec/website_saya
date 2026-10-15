// ==============================
// 1. TEKS BERGANTI OTOMATIS
// ==============================
const daftarTeks = [
    " Pemula Graphic Designer",
    "Orang yang suka tampilan visual",
    "CALON MASA DEPAN DIA",
];

let indeksTeks = 0;
const elemenTeks = document.getElementById("changing-text");

function gantiTeks() {
    if (!elemenTeks) return;
    
    elemenTeks.style.opacity = 0;

    setTimeout(function () {
        indeksTeks = (indeksTeks + 1) % daftarTeks.length;
        elemenTeks.textContent = daftarTeks[indeksTeks];
        elemenTeks.style.opacity = 1;
    }, 300);
}

setInterval(gantiTeks, 2500);


// ==============================
// 2. ANIMASI SAAT SCROLL
// ==============================
const elemenAnimasi = document.querySelectorAll(
    ".about, .projects, .contact, .project-card"
);

elemenAnimasi.forEach(function (elemen) {
    elemen.classList.add("reveal");
});

const pengamat = new IntersectionObserver(function (daftar) {
    daftar.forEach(function (item) {
        if (item.isIntersecting) {
            item.target.classList.add("show");
            pengamat.unobserve(item.target);
        }
    });
}, {
    threshold: 0.15
});

elemenAnimasi.forEach(function (elemen) {
    pengamat.observe(elemen);
});


// ==============================
// 3. TAHUN FOOTER OTOMATIS
// ==============================
const tahun = document.getElementById("year");

if (tahun) {
    tahun.textContent = new Date().getFullYear();
}

// ==============================
// 4. SLIDESHOW FOTO PROFIL OTOMATIS & SMUT
// ==============================

// Masukkan nama-nama file foto yang ingin ditampilkan secara bergantian
const daftarFoto = [
    "foto saya.jpeg", // Foto pertama
    "pribadi.jpeg"      // Foto kedua (bisa ditambah foto lain jika ada)
];

let indeksFoto = 0;
const elemenFoto = document.getElementById("profile-img");

if (elemenFoto && daftarFoto.length > 0) {
    // Set foto pertama saat halaman dimuat
    elemenFoto.src = daftarFoto[0];

    function gantiFotoOtomatis() {
        // Efek memudar (fade out)
        elemenFoto.classList.add("fade-out");

        setTimeout(function () {
            // Pindah ke indeks foto berikutnya secara melingkar
            indeksFoto = (indeksFoto + 1) % daftarFoto.length;
            elemenFoto.src = daftarFoto[indeksFoto];

            // Munculkan kembali (fade in)
            elemenFoto.classList.remove("fade-out");
        }, 600); // Waktu jeda sesuai durasi transisi CSS
    }

    // Ganti foto setiap 3 detik (bisa diubah, misal 3000 = 3 detik)
    setInterval(gantiFotoOtomatis, 3000);
}


// ==============================
// SLIDESHOW 2 FOTO KHUSUS BAGIAN KEGIATAN
// ==============================

const daftarDuaFoto = [
    "foto saya2.jpeg",
    "paskah.jpeg",
];

let indeksDuaFoto = 0;
const elemenDuaFoto = document.getElementById("activity-img-2");

if (elemenDuaFoto && daftarDuaFoto.length > 0) {
    elemenDuaFoto.src = daftarDuaFoto[0];

    function gantiDuaFotoOtomatis() {
        elemenDuaFoto.classList.add("fade-out");

        setTimeout(function () {
            indeksDuaFoto = (indeksDuaFoto + 1) % daftarDuaFoto.length;
            elemenDuaFoto.src = daftarDuaFoto[indeksDuaFoto];
            elemenDuaFoto.classList.remove("fade-out");
        }, 500);
    }

    // Berganti foto setiap 3 detik
    setInterval(gantiDuaFotoOtomatis, 3000);
}