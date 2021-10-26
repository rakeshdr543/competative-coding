const string = "Welcome to this Javascript Guide!";

const reverseBySeperator=(string,separator)=>{
  return string.split(separator).reverse().join(separator);
}

const reverseString=reverseBySeperator(string,'')

const reverseByWord=reverseBySeperator(reverseString,' ')


console.log(reverseByWord,reverseString)