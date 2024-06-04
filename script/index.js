let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let index = 0;
let savedIndex = localStorage.getItem('index');
if (savedIndex !== null) {
    index = parseInt(savedIndex, 10); 
} 

function count(array) {
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

document.getElementById('nextButton').addEventListener('click', () => {
    count(num);
});

