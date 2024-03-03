const modelImg = document.querySelector("#modelImg");
const imageView = document.querySelector('.imgView');
const cross = document.querySelector('#cross');

const closeModel = () => {
    imageView.style.display = 'none';
};

modelImg.onclick = (event) => {
    imageView.style.display = 'flex';
};

cross.addEventListener('click', closeModel);
