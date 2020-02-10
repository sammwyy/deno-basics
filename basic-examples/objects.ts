function registerUser (name:string, password:string, age:number):any {
    const isAdult:boolean = age >= 18;
    const firstName:string = name.split(" ")[0];
    const lastName:string = name.split(" ")[1];
    const isPasswordSecure:boolean = password.length > 8;

    const object  = {
        firstName: firstName, 
        lastName: lastName, 
        fullName: name,
        age: age, 
        password: password,
        isAdult: isAdult, 
        isPasswordSecure: isPasswordSecure
    }

    return object;
}

function printUser (user:any):void {
    console.log("")
    console.log(`First Name: ${user.firstName}`);
    console.log(`Last Name: ${user.lastName}`);
    console.log(`Full Name: ${user.fullName}`);
    console.log(`Age: ${user.age}`);
    console.log(`Password: ${user.password}`);
    console.log(`Is adult? ${user.isAdult}`);
    console.log(`Is Password Secure? ${user.isPasswordSecure}`);
    console.log("")
}

const user1:any = registerUser("Valentina Avalos", "cdFodo302XCla0", 18);
const user2:any = registerUser("Joe Smith", "123456", 13);

printUser(user1);
printUser(user2);