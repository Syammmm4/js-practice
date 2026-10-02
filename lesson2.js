const isAvailable = false;

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


const role = "admin";

if (role == "student") {
    console.log("Laptop apprved");
}else {
    console.log("Laptop not allowed");
}
