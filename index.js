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

const selectInput = document.querySelector('#groups');
const submitBtn = document.querySelector('#submit-btn');
const selectStudents = document.querySelector('#students');
const selectlastname = document.querySelector('#studentslastname');

const eduardo = new Student ("eduardo", "gali", 5);
const constanza = new Student ("constanza", "ferrón", 4);
const luis = new Student ("luis", "vega", 3);
const isabella = new Student ("isabella", "hemsworth", 2);

let students = [eduardo, constanza, luis, isabella];

submitBtn.addEventListener('click', () => {
  const selectedStudent = selectStudents.value;
  console.log(selectedStudent);
  let findStudent = students.find(student => student.Name === selectedStudent);
  let groupSelected = selectInput.value;
  findStudent.group = groupSelected;
  console.log(selectedStudent, findStudent);
})

function CalcularPromedio(){
  var V1 = document.getElementById ("n1").value
  var V2 = document.getElementById ("n2").value
  var V3 = document.getElementById ("n3").value
  var pro = (parseFloat(V1)+parseFloat(V2)+parseFloat(V3))/3; 
  document.getElementById("PromedioEduardo").innerHTML = pro; 
}

function CalcularPromedio(){
  var V1 = document.getElementById ("n1").value
  var V2 = document.getElementById ("n2").value
  var V3 = document.getElementById ("n3").value
  var pro = (parseFloat(V1)+parseFloat(V2)+parseFloat(V3))/3; 
  document.getElementById("PromedioConstanza").innerHTML = pro; 
}

function CalcularPromedio(){
  var V1 = document.getElementById ("n1").value
  var V2 = document.getElementById ("n2").value
  var V3 = document.getElementById ("n3").value
  var pro = (parseFloat(V1)+parseFloat(V2)+parseFloat(V3))/3; 
  document.getElementById("PromedioLuis").innerHTML = pro; 
}

function CalcularPromedio(){
  var V1 = document.getElementById ("n1").value
  var V2 = document.getElementById ("n2").value
  var V3 = document.getElementById ("n3").value
  var pro = (parseFloat(V1)+parseFloat(V2)+parseFloat(V3))/3; 
  document.getElementById("PromedioIsa").innerHTML = pro; 
}

function CalcularPromedio(){
  var V1 = document.getElementById ("n1").value
  var V2 = document.getElementById ("n2").value
  var V3 = document.getElementById ("n3").value
  var pro = (parseFloat(V1)+parseFloat(V2)+parseFloat(V3))/3; 
  document.getElementById("PromedioGrupal").innerHTML = pro; 
}

const numeros = [3, 23, 12];
numeros.sort(function(a, b){return a - b});

const numerosR = [3, 23, 12];
numeros.sort(function(a, b){return b - a});