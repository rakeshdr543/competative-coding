// 2.

const input = {
    fName: "Name 1",
    lName: "L Name 1",
    obj: {
      fName: "Name 2",
      lName: "L Name 2",
      obj: {
        fName: "Name 3",
        lName: "L Name 3",
      },
    },
  };
  
  const camelToSnakeCase = (str) =>
    str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  
  const isObject = function (obj) {
    return (
      obj === Object(obj) && !Array.isArray(obj) && typeof obj !== "function"
    );
  };
  
  const keysToSnake = (obj)=> {
    if (isObject(obj)) {
      const n = {};
  
      Object.keys(obj).forEach((k) => {
        n[camelToSnakeCase(k)] = keysToSnake(obj[k]);
      });
  
      return n;
    } else if (Array.isArray(obj)) {
      return obj.map((i) => {
        return keysToSnake(i);
      });
    }
  
    return obj;
  };
  
  console.log(keysToSnake(input));
  