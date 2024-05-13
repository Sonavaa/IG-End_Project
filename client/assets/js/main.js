const more_row = document.querySelector(".more");
const menu_Modal = document.querySelector(".menuModal");
const switch_accounts_btn = document.querySelector("#switch-accounts");
const switch_accounts = document.querySelector(".switchModal");
const body = document.querySelector("body");
const create_input = document.querySelector("#create-input");
const create_btn = document.querySelector(".create-row");
const create_new_post_modal = document.querySelector(".create-new-post-Modal")
const post_view_on_modal = document.querySelector("#post-file");
const edit_post_Modal = document.querySelector(".edit-post-Modal")
const done_text = document.querySelector(".edit-post-Modal #done-text")
const create_post_Modal = document.querySelector(".create-post-Modal")
const share_text = document.querySelector(".create-post-Modal #share-text")

more_row.addEventListener("click", function (e) {
  e.preventDefault();
  if (menu_Modal.classList.contains("hidden")) {
    menu_Modal.style.display = "block";
    menu_Modal.classList.remove("hidden");
  } else {
    menu_Modal.style.display = "none";
    menu_Modal.classList.remove("block");
    menu_Modal.classList.add("hidden");
  }
});

switch_accounts_btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (switch_accounts.classList.contains("hidden")) {
    switch_accounts.style.display = "block";
    switch_accounts.classList.remove("hidden");
    menu_Modal.style.display = "none";
    menu_Modal.classList.remove("block");
    menu_Modal.classList.add("hidden");
    body.style.overflow = "hidden";
  } else {
    switch_accounts.style.display = "none";
    switch_accounts.classList.remove("block");
    switch_accounts.classList.add("hidden");
  }
});

window.addEventListener("click", function (event) {
  if (event.target == switch_accounts) {
    switch_accounts.style.display = "none";
    switch_accounts.classList.remove("block");
    switch_accounts.classList.add("hidden");
  }
});

create_btn.addEventListener("click", (e) => {
  e.preventDefault();
  create_input.click();
  console.log("create_btn");
});

create_input.addEventListener("change", function () {
  const selectedFile = this.files[0];
  console.log("Selected File Name: ", selectedFile.name);
  console.log("Selected File Size: ", selectedFile.size, " bytes");

if(selectedFile.name != null){
  create_new_post_modal.style.display = "block";
  let post_file_src = post_view_on_modal.src;
  let new_post_file_src = post_file_src.substring(0, post_file_src.lastIndexOf('/') + 1) + selectedFile.name;
  new_post_file_src = new_post_file_src.replace("http://127.0.0.1:5500", ".");
  post_file_src = new_post_file_src;
  post_view_on_modal.src = post_file_src;
  console.log("New File Src: ", post_file_src);
}
else{
  menu_Modal.style.display = "none";
}

});


const smile = document.querySelector(".fa-face-smile")
      
$(function() {
  // Initializes and creates emoji set from sprite sheet
  window.emojiPicker = new EmojiPicker({
    emojiable_selector: '[data-emojiable=true]',
    assetsPath: './client/assets/lib/img/',
    popupButtonClasses: 'fa fa-smile-o'
  });
  // Finds all elements with `emojiable_selector` and converts them to rich emoji input fields
  // You may want to delay this step if you have dynamically created input fields that appear later in the loading process
  // It can be called as many times as necessary; previously converted input fields will not be converted again
  window.emojiPicker.discover();
});