const x: number = 1;
console.log(x); 

function greetUser (str: string){
    console.log('Hello '+str);
}
function sum (a:number, b:number): number{
 return a+b;
}

function returnsFunction (fn: (a:number, b:number)=> number){
    fn(1,2);
}
console.log(returnsFunction(sum));


greetUser("Pradyut")