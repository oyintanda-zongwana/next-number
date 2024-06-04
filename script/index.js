let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let index = 0;
let savedIndex = localStorage.getItem('index');
if (savedIndex !== null) {
    index = parseInt(savedIndex, 10); 
} 

function count(array) {
    if (index < array.length) {
        console.log(array[index]);  
        index++;
        localStorage.setItem('index', index);  
    } else {
        console.log("All numbers have been printed.");
        localStorage.removeItem('index');  // Reset when all numbers have been printed
    }
}

count(num);

