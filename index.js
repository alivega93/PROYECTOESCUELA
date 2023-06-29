class Student {
    constructor (Name, lastName, Age, Classes, Qualification, Group, PhoneNumber, MotherName, FatherName){
        this.Name = Name; 
        this.lastName = lastName;
        this.Age = Age;
        this.Classes = Classes;
        this.Qualification = Qualification; 
        this._PhoneNumber = PhoneNumber; 
        this.MotherName = MotherName;
        this.FatherName = FatherName;
    }; 
}; 

const Eduardo = new Student ("Eduardo", "Gali Vega", 5);
const Constanza = new Student ("Constanza", "Ferrón Vega", 4);
const LuisDaniel = new Student ("Luis Daniel", "Vega Jauckens", 3);
const Leonardo = new Student ("Leonardo", "Gali Vega", 3);
const Beleni = new Student ("Beleni", "Gali Vega", 3);
const Jeronimo = new Student ("Jeronimo", "Vega Jauckens", 2);
const Aitana = new Student ("Aitana", "Ferron Vega", 2);
const Romina = new Student ("Romina", "Ferron Vega", 2);
const Sofia = new Student ("Sofia", "Hemsworth Vega", 1);
const Victoria = new Student ("Victoria", "Hemsworth Vega", 1);
const Santiago = new Student ("Santiago", "Hemsworth Vega", 1);
const Patricio = new Student ("Patricio", "Hemsworth Vega", 1); 

console.log(Eduardo); 
console.log(Constanza); 
console.log(LuisDaniel); 
console.log(Leonardo); 
console.log(Beleni); 
console.log(Jeronimo); 
console.log(Aitana); 
console.log(Romina); 
console.log(Sofia); 
console.log(Victoria); 
console.log(Santiago); 
console.log(Patricio); 

const Age = 4;

switch (Age) {
    case 5:
      console.log(`El niño ${this.Name} pertenece al grupo E`);
      break;
    case 4:
      console.log(`El niño ${this.Name} pertenece al grupo D`);
      break;
    case 3:
      console.log(`El niño ${this.Name} pertenece al grupo C`);
      break;
    case 2:
      console.log(`El niño ${this.Name} pertenece al grupo B`);
      break; 
      default:
      console.log(`El niño ${this.Name} pertenece al grupo A`);
      break;
  }