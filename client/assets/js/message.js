'use strict';
const x_btn = document.querySelector(".fa-x");
const switch_modal = document.querySelector(".switchModal")
const open_switch_modal = document.querySelector(".open-switch-modal")

open_switch_modal.addEventListener("click", function() {
    switch_modal.style.display = "block"
});

x_btn.addEventListener('click', function() {
switch_modal.style.display = "none"
});