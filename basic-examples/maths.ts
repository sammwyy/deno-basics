// Functions
function addition (n1:number, n2:number):void { 
    const ans:number = n1 + n2;
    console.log(`${n1} * ${n2} is ${ans}`);
}

function substraction (n1:number, n2:number):void { 
    const ans:number = n1 - n2;
    console.log(`${n1} - ${n2} is ${ans}`);
}

function multiplication (n1:number, n2:number):void { 
    const ans:number = n1 * n2;
    console.log(`${n1} * ${n2} is ${ans}`);
}

function division (n1:number, n2:number):void { 
    const ans:number = n1 / n2;
    console.log(`${n1} / ${n2} is ${ans}`);
}

// Calls
addition(2, 2);
substraction(7, 3);
multiplication(2, 4);
division(9, 3);