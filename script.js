for(let i=0;i<10;1++){
    console.log(i);
}

for( let i=9;i>0;i--) {
    console.log(i);
}

for(let i=1;i<1_000_000;i*=2) {
    console.log(i);
}

for(let i=0;i>10;i++){
    console.log(i);
}

let start = Date.now();
console.log(start);
let i = 0;
while(Date.now() < start+5000) {
    i++;
}
console.log(i);

let num = 5;

while(num>5){
    console.log('WHILE');
}

do {
    console.log('DO');
} while(num>5);

