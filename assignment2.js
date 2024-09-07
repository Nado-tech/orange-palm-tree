const student1 = {
    name: 'James',
    age: '13',
    grade: '70'
};
const student2 = {
    name:'Milka',
    age: '14',
    grade: '65'
};
const student3 = {
    name: 'Stephen',
    age: '14',
    grade: '40'
};
const student4 = {
    name: 'Patrick',
    age: '13',
    grade: '72'
};

const filterByGrade =[student1.grade, student2.grade, student3.grade, student4.grade];
const filterByGrade2=[student1.name +" "+ student1.grade, 
    student2.name +" "+student2.grade, 
    student3.name +" "+student3.grade, 
    student4.name+" "+ student4.grade];
    console.log(filterByGrade2)
const result = filterByGrade.filter((grade ) => grade >69);
console.log(result);


const averageAge = [ (student1.age, student2.age, student3.age, student4.age)/4];
console.log(averageAge)