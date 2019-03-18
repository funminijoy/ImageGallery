/*document.getElementById("grid-container")
    .addEventListener("click", function(e) {
        var picture = e.target.dataset.clickedImage;
        var image = document.getElementById(picture);
        image.innerHTML= e.target.src;
    });*/

    const currentPics = document.querySelector('#currentPics');
    const imgs = document.querySelectorAll('.imgs img');

    imgs.forEach(img => img.addEventListener('click', e => (currentPics.src = e.target.src))
    );