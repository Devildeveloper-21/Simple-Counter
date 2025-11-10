const incrementcounter = document.getElementById('incrementbutton');
const decrementcounter = document.getElementById('decrementbutton');
const displaytext = document.getElementById('displaycounter');

let counter = 0;

    incrementcounter.addEventListener('click', function(){
            counter = counter + 1;
            displaytext.textContent = counter;
            console.log(counter);
    });

    //DONT PUT EVENT LISTNERS IN IF ELSE BLOCKS.
    decrementcounter.addEventListener('click', function(){
        if(counter > 0){
            counter = counter - 1;
            displaytext.textContent = counter;
            console.log(counter);
        }
    });




    //SIMPLE CODE BUT COUNTER GOES IN MINUS AFTER DECREMENT.
// incrementcounter.addEventListener('click', function(){
//         counter = counter + 1;
//         displaytext.textContent = counter;
//         console.log(counter);
//     });
    

// decrementcounter.addEventListener('click', function(){
//             counter = counter - 1;
//             displaytext.textContent = counter;
//             console.log(counter);
//      });
