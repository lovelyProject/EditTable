'use strict';

let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];
let table = document.querySelector('#table');
function addTd(){
    for (let i = 0; i < employees.length; i++){
        let tr = document.createElement('tr');
    
        let td1 = document.createElement('td');
        td1.textContent = employees[i].name;
    
        let td2 = document.createElement('td');
        td2.textContent = employees[i].age;
    
        let td3 = document.createElement('td');
        td3.textContent = employees[i].salary;
    
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
    
        table.appendChild(tr);
    }
}

addTd();

let list = table.querySelectorAll('td');

for (let elem of list){
    elem.addEventListener('click', function edit(){
        let input = document.createElement('input');
        input.value = elem.textContent;

        elem.textContent = '';
        
        elem.appendChild(input);

        input.addEventListener('blur',function(){
            elem.textContent = input.value;
            elem.addEventListener('click',edit)
        })

        elem.removeEventListener('click',edit);
    });
}

let trs = table.querySelectorAll('tr');

for (let tr of trs){
    addRemove(tr)
}

function addRemove(cold){
    let link = document.createElement('a');
    link.textContent = 'remove row';
    link.href = '';
    
    let td = document.createElement('td');

    link.addEventListener('click', function(event){
        this.closest('tr').remove();
        event.preventDefault();
    })
    td.appendChild(link)
    cold.appendChild(td);
};

let nameInp = document.querySelector('#name');
let ageInp = document.querySelector('#age');
let salaryInp = document.querySelector('#salary');
let submit = document.querySelector('#submit');

submit.addEventListener('click',function(){
    let user = new User;

    employees.push(user);
    console.log(employees);

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent = user.name;
    
    let td2 = document.createElement('td');
    td2.textContent = user.age;

    let td3 = document.createElement('td');
    td3.textContent = user.salary;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    
    addRemove(tr);

    table.appendChild(tr);
})

function User(){
    this.name = nameInp.value;
    this.age = ageInp.value;
    this.salary = salaryInp.value;
}