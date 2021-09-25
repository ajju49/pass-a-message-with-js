//selectors
const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');

//event listners
sendBtn.addEventListener('click', sendMsg)


//functions
function sendMsg () {
    let content = messageIn.value;
    messageOut.innerHTML = content;
    

    if(content === ''){
        alert('please enter valid value')
    }
    else{
    messageOut.innerHTML = content;
    messageIn.value = " ";
    }
    
}
    
    
    
   
