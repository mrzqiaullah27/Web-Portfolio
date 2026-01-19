// 1. Efek Mengetik (Typing Effect)
const textElement = document.querySelector(".typing-text");
const words = ["Mahasiswi Universitas Diponegoro", "Program Studi Agroekoteknologi"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChars = currentWord.substring(0, charIndex);
    textElement.textContent = currentChars;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(typeEffect, isDeleting ? 1500 : 500);
    }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// 2. Menu Burger untuk HP
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// 3. Smooth Scroll saat klik menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        nav.classList.remove('active'); 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 4. Scroll Reveal Animation (BARU: Biar muncul pelan-pelan)
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            // Optional: Hapus else jika ingin animasi hanya sekali
            // reveals[i].classList.remove('active'); 
        }
    }
}

// Panggil fungsi sekali saat load agar elemen hero langsung muncul
reveal();