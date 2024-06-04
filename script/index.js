let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let index = 0;
let savedIndex = localStorage.getItem('index'); //save to local storage
if (savedIndex !== null) { //If it's not null, it means a valid value was retrieved from local storage.
    index = parseInt(savedIndex, 10); 
} 

function count(array) { //the values are taken from the local storage
    const displayElement = document.getElementById('numberDisplay');
    if (index < array.length) {
        displayElement.innerText = array[index];
        index++;
        localStorage.setItem('index', index);  
    } else {
        displayElement.innerText = "All numbers have been printed.";
        localStorage.removeItem('index');  // Reset when all numbers have been printed
    }
}
//for the button to function
document.getElementById('nextButton').addEventListener('click', () => {
    count(num);
});

