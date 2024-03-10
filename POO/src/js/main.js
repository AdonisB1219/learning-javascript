/* const person = {
    firstName : "Jane",
    lastName: "Doe",
    id: 1,
};
const person1 = {
    firstName : "James",
    lastName: "THee",
    id: 2,
};


console.log(person.firstName, person.lastName);
console.log(person1.firstName, person1.lastName); */
let divPersons = document.getElementById("divPersons");

class Person{
    name = "";
    email = "";
    age = 0;
    resume = "";
    id = 0;
    static total = 0;

    constructor (name, email, age, resume){
        this.name = name.toUpperCase();
        this.email= email;
        this.age = age;
        this.resume = resume;
        Person.total ++;
        this.id = Person.total;
    }//constructor

    static printTotal(div){
        div.insertAdjacentHTML("afterbegin", `<div class="alert alert-info" role="alert">
        Total de personas: <strong>${Person.total}</strong>
      </div>`);
    }

    printInfo(div){
        div.insertAdjacentHTML("beforeend",`<div id="card_${this.id}" class="card text-bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">${this.id}. ${this.name}</div>
        <div class="card-body">
          <h5 class="card-title">${this.email}</h5>
          <p class="card-text">${this.resume}</p>
          <p class="card-text">${this.age}</p>
        </div>
      </div>`);
        }//printInfo

}//class Person

class Employee extends Person{
    department = "";
    salary = 0.0;
    constructor (name, email, age, resume, department, salary){
        super(name, email, age, resume);
        this.department = department;
        this.salary = salary;
    }//constructor

    printInfo(div){
        super.printInfo(div);
        let cardBody = document.getElementById(`card_${this.id}`).getElementsByClassName("card-body")[0];
        cardBody.insertAdjacentHTML("beforeend", `<p class="card-text"><strong>${this.department}</strong></p><p class="card-text"><strong>$ ${this.salary}</strong></p>`)
    }//printInfo
}//class Employee


let employees = [];
employees.push(new Employee("angel", "angel@gmail.com", 22, "java jr developer", "IT", 250),
new Employee("miriam", "miriam@gmail.com", 22, "biologa", "investigacion", 250), (new Employee("Gumi", "gumi@gmail.com", 32, "Ingeniero", "Coordinación de proyectos", 420)), (new Employee("Laika", "laika@gmail.com", 32, "Reclutadora", "Recursos humanos", 210)));
employees.forEach((employee)=>employee.printInfo(divPersons));

Person.printTotal(divPersons);

