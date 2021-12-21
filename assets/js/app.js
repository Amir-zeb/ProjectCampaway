var user_dropdown = document.querySelector('.user_dropdown');
var user_dropdown_list = document.querySelector('.user_dropdown_list');
if (user_dropdown) {
    user_dropdown.addEventListener('click', () => {
        user_dropdown_list.classList.toggle("show");
    })
}

var user_sec = document.querySelector('.chat_container .user_sec');
var close_user = document.querySelector('.chat_user_close');
if (close_user) {
    close_user.addEventListener('click', () => {
        user_sec.classList.toggle("close");
    })
}

var ellipses_dropdown = document.querySelectorAll('.ellipses_dropdown');
var ellipses_droplist = document.querySelectorAll('.ellipses_droplist');
if (ellipses_dropdown) {
    for (let i = 0; i < ellipses_dropdown.length; i++) {
        let item=ellipses_droplist[i];
        ellipses_dropdown[i].addEventListener('click', () => {
            item.classList.toggle("show");
        })
        
    }
}



document.addEventListener('click', function(e){   
    if (!user_dropdown.contains(e.target)){
        user_dropdown_list.classList.remove("show");
    }
    // if (!ellipses_dropdown.contains(e.target)){
    //     user_dropdown_list.classList.remove("show");
    // }
    // for (let i = 0; i < ellipses_dropdown.length; i++) {
    //     if (!ellipses_dropdown[i].contains(e.target)){
    //         user_dropdown_list[i].classList.remove("show");
    //     }        
    // }    
  });

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

var cancel_booking = document.querySelector('.cancel_booking');
if(cancel_booking){
    function CloseMsg() {
        cancel_booking.classList.remove("d-none");
    }
}