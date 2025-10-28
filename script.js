setTimeout(() => {
    console.log('later');
},10_000); 

console.log('now');

setInterval(() => {
    console.log('again');
}, 10_000);

let anwser = fetch('http://127.0.0.1:5500/').then(res => {
    return res.text();
}).then(text => {
    console.log(text);
});
console.log(anwser);
let response = await fetch('http://127.0.0.1:5500/'); 
console.log(response);
let text = await response.text();
console.log(text);

async function getText(){
   let response = await fetch('http://127.0.0.1:5500/'); 
   console.log(response);
   let text = await response.text();
   console.log(text); 
}

await getText();