const incrementcounter = document.getElementById('incrementbutton');
const decrementcounter = document.getElementById('decrementbutton');
const displaytext = document.getElementById('displaycounter');

let counter = 0;

// if (incrementcounter.click){
//     incrementcounter.addEventListener('click', function(){
//         counter = counter + 1;
//         displaytext.textContent = counter;
//         console.log(counter);
//     });
// }
// else{
//     decrementcounter.addEventListener('click', function(){
//         counter = counter - 1;
//         displaytext.textContent = counter;
//         console.log(counter);
//     });
// }


incrementcounter.addEventListener('click', function(){
        counter = counter + 1;
        displaytext.textContent = counter;
        console.log(counter);
    });

    decrementcounter.addEventListener('click', function(){
        counter = counter - 1;
        displaytext.textContent = counter;
        console.log(counter);
    });


    // counter in minus
    // write code