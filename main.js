
const rowEl = document.querySelector(".row")
//console.log(rowEl);
const overlayEl = document.getElementById("overlay")
//console.log(overlayEl);
const buttonEl = document.querySelector("#overlay button")
//console.log(buttonEl);

const overlayImgEl = document.querySelector("#overlay img")
//console.log(overlayImgEl);




//fetch section

axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(response => {
        console.log(`-------------------------------------`);
        console.log(`begin foreach to transfer posts from result array to postsArray`);

        response.data.forEach((element, i) => {
            console.log(element);
            renderPosts(element, i)
        });

    })
    //second then to wait for first async function to end before executing to allow all elements to load
    .then(() => addEventListenerToCards())

    .catch((error) => console.error(error));


//event listener to hide overlay when button clicked
buttonEl.addEventListener("click", () => overlayEl.classList.add("d-none"))

//functions

function renderPosts(object, i) {
    const markup = `<div id="card n${i}"class="col">
                    <div class="card">
                        <img class="center-pin" src="./assets/img/pin.svg" alt="pin">

                        <div class="img-container">
                            <img src="${object.url}" alt="post-photo">
                        </div>

                        <div class="text-container">
                            <span>${object.date}
                            </span>
                            <div>${object.title}
                            </div>
                        </div>
                    </div>
                </div>`



    rowEl.innerHTML += markup
}

function addEventListenerToCards() {

    const thisCard = document.querySelector(`.row`).children
    //console.log(thisCard);

    for (let i = 0; i < thisCard.length; i++) {
        console.log(`this is the ${i} dom element from the collection for the event listener`);
        console.log(thisCard[i]);

        thisCard[i].addEventListener('click', function () {
            overlayEl.classList.remove("d-none")
            console.log(`event listener for item ${i} activated`);
            overlayImgEl.src = thisCard[i].querySelector(".img-container img").src
        })
    }
}
