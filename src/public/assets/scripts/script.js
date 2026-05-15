/**
 * Central URLs
 */
window.RESTOCK_MOBILE_STORE_URLS = {
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.restock.app.placeholder",
  appStore: "https://apps.apple.com/app/restock/id0000000000",
};

window.RESTOCK_SIGNUP_URL =
  "https://restock-web-application.vercel.app/sign-up/";

const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuClose = document.getElementById("menuClose");
const menuBackdrop = document.getElementById("menuBackdrop");

function openMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.add("is-open");
  mobileMenu.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.remove("is-open");
  mobileMenu.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", openMenu);
}
if (menuClose) {
  menuClose.addEventListener("click", closeMenu);
}
if (menuBackdrop) {
  menuBackdrop.addEventListener("click", closeMenu);
}

if (mobileMenu) {
  mobileMenu.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
  mobileMenu.querySelectorAll(".mobile-menu__actions a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
}

document.querySelectorAll("[data-benefits-scroll]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const id = btn.getAttribute("data-benefits-target");
    const el = id ? document.getElementById(id) : null;
    if (!el) return;
    const dir = btn.getAttribute("data-benefits-scroll");
    const amount = Math.min(el.clientWidth * 0.85, 320);
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  });
});

function applyMobileStoreLinks() {
  const urls = window.RESTOCK_MOBILE_STORE_URLS || {};
  const play = document.getElementById("restockStoreGooglePlay");
  const apple = document.getElementById("restockStoreAppStore");
  if (play && urls.googlePlay) {
    play.setAttribute("href", urls.googlePlay);
  }
  if (apple && urls.appStore) {
    apple.setAttribute("href", urls.appStore);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", applyMobileStoreLinks);
} else {
  applyMobileStoreLinks();
}

/** 
 * Theme Toggle Logic
 */
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "light") {
    document.body.classList.add("light-mode");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}
