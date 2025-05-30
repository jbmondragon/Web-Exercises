let users=[];
let editIndex=-1;


function myFunction(){
    document.getElementById("demo").innerHTML = "<h2>I Love Javascript</h2>";
    //document.write("I still love javascript") Note: This should only be used for testing
}

function myFunction1(){
    let a = prompt("Enter value of a: ");
    let b = prompt("Enter value of b: ");

    let sum = Number(a)+Number(b);
    console.log(sum);

    //document.getElementById("demo1").innerHTML = "Sum: "+sum;
    alert("Sum: "+sum);
}

function create(){
    let name = prompt("Name of student: ");
    
    if(name==""){
        alert("Name cannot be empty");
        return;
    }else if(name==-1){
        users.push(name);
    }else{
        users[editIndex] = name;
        editIndex=-1;
    }
    console.log(name);
}

function read() {
    if (users.length === 0) {
        console.log("No students available.");
    } else {
        users.forEach((user, index) => {
            console.log(`${index + 1}. ${user}`);
        });
    }
}


function update(){
    let name = "Name to update";
    console.log(name);

}

function del(){
    let name = "Name to delete";
    console.log(name);

}