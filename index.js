//sidebar
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
    modal.style.display = "block";
  }
  

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
 

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })
})


const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name=chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage);


messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const len = document.getElementById('len');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = '#191414';
        len.style.color = 'white'
        // body.style.color = 'white';
        body.style.transition = '0.6s';
    }
    else if('bi-brightness-high-fill'){
        body.style.background = "#E1DEED";
        len.style.color = '#191414'
        body.style.transition = '0.6s';
        
    }

})


$(Accept).click(function (e) { 
    e.preventDefault();
    $(this).closest(".request").remove();
    
});

$(Decline).click(function (e) { 
    e.preventDefault();
    $(this).closest(".request").remove();
    
});