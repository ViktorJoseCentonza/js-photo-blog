
const rowEl = document.querySelector(".row")
//console.log(rowEl);


//fetch section
//has to be declared as empty 
//const postsArray = []
fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then((response) => response.json())
    .then((result) => {
        console.log(`-------------------------------------`);
        console.log(`begin foreach to transfer posts from result array to postsArray`);

        result.forEach((element, i) => {
            //postsArray.push(element)
            console.log(`this is element ${i + 1}:`);
            console.log(element);
            renderPosts(element)
        });

    })
    .catch((error) => console.error(error));

//console.log(`This is the array containing the received posts: `);
//console.log(postsArray);




//functions

function renderPosts(object) {
    const markup = `<div class="col">
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

