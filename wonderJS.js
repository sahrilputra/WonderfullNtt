var counter = 1;
setInterval(function(){
    document.getElementById('radio'+counter).checked =true;
    counter++;
    if(counter>4){
        counter = 1;
    }
},5000);

const btn = document.querySelector('.more-btn');
const text = document.querySelector('.kartu-more');
const content = document.querySelector('.tambah');

content.addEventListener('click',e =>{

    const current = e.target;
    const isReadMoreBtn = current.className.includes('more-btn');
    if(!isReadMoreBtn){
        return;
    }
    const currentText = e.target.parentNode.querySelector('.kartu-more');
    currentText.classList.toggle('kartu-more--open');
    current.textContent = current.textContent.includes('Read More...')? 'Read Less...' : 'Read More...';
});
