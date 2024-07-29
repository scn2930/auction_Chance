const body = document.querySelector('body')
const mobileNav = document.querySelector('.mobile-header>nav');
const modalBg = document.querySelector('.modal-bg');
const chatView = document.querySelector('.chat-view')
const chatBtn = document.querySelector('.chat-icon')
const chat = document.querySelector('.chat')


//모바일 메뉴바 
function navOpen() {
    mobileNav.style.right = '0'
}
//채팅 아이콘 클릭이벤트
chatBtn.addEventListener('click',() => {
    chatView.style.right= '0'
})

//닫기 버튼 클릭이벤트
function closeBtn() {
    if(mobileNav.style.right === '0px') {
        mobileNav.style.right = '-100%'
    }
    if(chatView.style.right === '0px') {
        chatView.style.right = '-100%'
    }
    if( modalBg.style.display='block') {
        modalBg.style.display='none';
    }
    if(chat.style.display='block') {
        chat.style.display='none'
        body.classList.remove('scroll-lock')
    }
    
}

//1:1채팅, 입찰하기버튼 클릭 이벤트
function chatFunc() {
    chat.style.display = 'block'
    modalBg.style.display = 'block'
    if(modalBg.style.display = 'block') {
        body.classList.add('scroll-lock')
    }
}
