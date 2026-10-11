/*const isAvailable = false;

if (isAvailable) {
    console.log("You can borrow the item.");
} else {
    console.log("Sorry, the item is use.")
}

const daysLate = -2;

if (daysLate > 0) {
    console.log("Overdue by " + daysLate + " days!");
} else if (daysLate === 0) {
    console.log("Due today.");
} else {
    console.log("Not due yet.");
}

const itemAvailable = true;
const userBlocked = false;

if (itemAvailable && !userBlocked) {
    console.log("Borrow approved ✅");
} else {
    console.log("Borrow rejected ❌")
}


//const role = "admin";
//const role = "lecturer";
const role = "student";

if (role === "admin" || role === "lecturer") {
    console.log("Laptop apprved");      
}else {
    console.log("Laptop not allowed");
} 


/*console.log("Item 1");
console.log("Item 2");
console.log("Item 3");
console.log("Item 4");
console.log("Item 5");

for (let i = 1; i<= 10 ; i++) {
    console.log("Item " + i);
}*/

const items = ["Prjector", "Microphone", "Speaker", "Laptop",];

for (let i =0 ; i <items.length; i++) {
    console.log(i + ": "+ items[i]);

}

const statuses = ["Available", "In USe", "Available", " Under Repair"];

for (let i = 0 ; i < statuses.length; i++) {
    if (statuses[i] === "Available") {
        console.log("Item " + i + " is available ")
    }
}