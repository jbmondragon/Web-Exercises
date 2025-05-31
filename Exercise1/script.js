let users = [];
let editIndex = -1;

// CREATE or UPDATE
function create() {
    let name = prompt("Name of student:");

    if (name === "") {
        alert("Name cannot be empty");
        return;
    }

    if (editIndex === -1) {
        users.push(name); // Create
    } else {
        users[editIndex] = name; // Update
        editIndex = -1;
    }

    console.log("Updated users list:");
    //read();
}

// READ
function read() {
    if (users.length === 0) {
        console.log("No students available.");
    } else {
        users.forEach((user, index) => {
            console.log(`${index + 1}. ${user}`);
        });
    }
}

// UPDATE
function update() {
    let nameToUpdate = prompt("Enter the current name of the student to update:");

    let index = users.findIndex(user => user === nameToUpdate);
    if (index === -1) {
        alert("Name not found.");
        return;
    }

    editIndex = index;
    create(); // Reuse the create() logic
}

// DELETE
function del() {
    let nameToDelete = prompt("Enter the name of the student to delete:");

    let index = users.findIndex(user => user === nameToDelete);
    if (index === -1) {
        alert("Name not found.");
        return;
    }

    users.splice(index, 1);
    console.log(`Deleted "${nameToDelete}".`);
    read();
}
