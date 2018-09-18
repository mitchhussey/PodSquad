var a = [1,2,3]

console.log(a.length);

a.push(4); //smart way to add
//array.splice to remove item from array unless it's at the end

// smarter way to do arrays
a.forEach(function(item){
    console.log(item);
});
