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

