//^ String only array 
var names = ["lugi", 'mario', 'yoshi'];
names.push('toad');
//~ Number only array 
var numbers = [10, 20, 30, 40, 50];
numbers.push(25);
//? Mixed only 
var mixed = ['ken', 4, 'chun-li', 8, 9, true];
mixed.push("Ryan");
mixed.push(34);
mixed.push(true);
mixed[0] = 59;
var ninja = {
    name: "Mario",
    belt: "black",
    age: 33
};
// ninja.age = 40
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40
};
