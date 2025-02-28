
//has to be declared as empty 

const postsArray = []
fetch("https://lanciweb.github.io/demo/api/pictures/")
    .then((response) => response.json())
    .then((result) => {
        console.log(`-------------------------------------`);
        console.log(`begin foreach to transfer posts from result array to postsArray`);

        result.forEach((element, i) => {
            postsArray.push(element)
            console.log(`this is element ${i + 1}:`);
            console.log(element);

        });

    })
    .catch((error) => console.error(error));

console.log(`This is the array containing the received posts: `);
console.log(postsArray);




//functions

