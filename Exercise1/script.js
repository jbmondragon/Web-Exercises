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
    console.log(name);
}

function read(){
    let name = "Name of Student";
    console.log(name);

}

function update(){
    let name = "Name to update";
    console.log(name);

}

function del(){
    let name = "Name to delete";
    console.log(name);

}