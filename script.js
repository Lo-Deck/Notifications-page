const markAllRead = document.getElementById('markAllRead');
const unread = document.getElementById('notif-unread');
const notifications = document.querySelectorAll('.notification p');

unread.innerText = 3;

markAllRead.addEventListener('click', function(){

    unread.innerText = 0;

    for(let i = 0; i < notifications.length; i++)
    {

        notifications[i].classList.remove('unread');

    }
        
});



