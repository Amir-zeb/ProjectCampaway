var user_dropdown = document.querySelector('.user_dropdown');
var user_dropdown_list = document.querySelector('.user_dropdown_list');
if (user_dropdown) {
    user_dropdown.addEventListener('click', () => {
        user_dropdown_list.classList.toggle("show");
    })
}

var close_media_sec = document.querySelector('.close_media_sec');
var open_media_btn = document.querySelector('.open_media_btn');
var media_sec = document.querySelector('.media_sec');
if (close_media_sec) {
    close_media_sec.addEventListener('click', () => {
        media_sec.classList.add("close");
    })
}
if (open_media_btn) {
    open_media_btn.addEventListener('click', () => {
        media_sec.classList.remove("close");
    })
}
