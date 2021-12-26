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

var open_method=document.querySelectorAll('.open_method');
var paypal_en=document.querySelector('.paypal_en');
var stripe_en=document.querySelector('.stripe_en');
var wire_transfer_en=document.querySelector('.wire_transfer_en');

if(open_method){
    for (let i = 0; i < open_method.length; i++) {
        open_method[i].addEventListener('click',()=>{
            let type=open_method[i].getAttribute("data-type");
            if(type=='paypal'){
                paypal_en.classList.remove('d-none');
                stripe_en.classList.add('d-none');
                wire_transfer_en.classList.add('d-none');
            }else if(type=='stripe'){
                stripe_en.classList.remove('d-none');
                paypal_en.classList.add('d-none');
                wire_transfer_en.classList.add('d-none');
            }else if(type=='wire-transfer'){
                wire_transfer_en.classList.remove('d-none');
                stripe_en.classList.add('d-none');
                paypal_en.classList.add('d-none');
            }
        })
    }
}


// Custom Select

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
if(x){
    for (i = 0; i < l; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        /* For each element, create a new DIV that will act as the selected item: */
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /* For each element, create a new DIV that will contain the option list: */
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < ll; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /* When an item is clicked, update the original select box,
                and the selected item: */
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        yl = y.length;
                        for (k = 0; k < yl; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box: */
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
