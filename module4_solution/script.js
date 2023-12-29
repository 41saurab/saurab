var array = ["Yaakov", "John", "jashon", "Paul", "Frank", "Larry", "Paula", "Laura", "jim", "Jen"]


for (var i = 0; i < array.length; i++) {
    if(array[i].charAt(0) === "j" || array[i].charAt(0) === "J"){
        console.log("Good Bye" + " " + array[i]);
    }
    else{
        console.log("Hello" + " " + array[i]);
    }
    
}