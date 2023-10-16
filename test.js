// let obj = { name: "tom", age: 18 };

// let obj1 = obj;

// obj.name = "jerry";

// obj1.age = 20;

// console.log(obj1);
function replacer(key, value) {

    if (typeof value === "string") {
  
      return undefined;
  
    }
  
    return value;
  
  }
  
  let foo = {model: "box", week: 4};
  
  let jsonString = JSON.stringify(foo, replacer);