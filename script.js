const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");




 

const palindrome = () =>{

    const textval = textInput.value.toLowerCase().trim();

    if(textval==""){
        alert("Please input a value")
    }

    const crazyInput = textval;

const x=textval.match(/[a-z0-9]/g);

console.log(x)

const y = x.reverse().join("");
console.log(y);

const reverses = x.reverse().join("");

console.log(reverses);

if(y===reverses){
    result.innerHTML = `<span class="bold">${textval}</span> is a palindrome.`
}else{
    result.innerHTML = `<span class="bold">${textval}</span> is not a palindrome.`

}
}