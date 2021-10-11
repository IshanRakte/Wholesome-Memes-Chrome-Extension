fetch('https://meme-api.herokuapp.com/gimme/wholesomememes')
    .then(data => (data.json()))
    .then(memeData => {
        const memeText = memeData.title;
        const MemeTitle = document.getElementById('MemeTitle');
        MemeTitle.innerText = memeText;
        const MemeImage = document.getElementById('MemeImage');
        const memeImage = memeData.url
        MemeImage.innerHTML = `<img src=${memeImage} alt = ${memeText} width="300"/>`
    })
