//ES6 let and const
let x = 10;
let y = 5;

console.log("valor inicial de x= " + x);
console.log("valor inical de y = " + y);

//Verificando a questão do escopo

if(x > y){
    let x = 5
    y = 10
    console.log("dentro do if: " + x);
}
console.log("x = " + x);
console.log("y = " + y);

const a = () => console.log("Teste");
a();

//ES6 array methods

const array = [1,2,3,4];

const arrayMap = array.map((n) => n ** 2);

const arrayFilter = arrayMap.filter((n) => n % 2 == 0);

console.log(`Array normal: ${array}\n
Array ao quadrado: ${arrayMap}\n
Array de pares (do ao quadrado): ${arrayFilter}`);

//ES6 Destructuring and Spread Operator
const user = {
    name: "Gabriel",
    age: 23,
    showData(){
        setTimeout(()=>{
            console.log(`Nome: ${this.name}, idade: ${this.age}`);
        },200);
    }
}

const {name: nome, age: idade} = user;

console.log(nome);
console.log(idade);
user.showData();

const arrayLotado = [...array,arrayMap];
console.log(`União do array com o arrayMap: ${arrayLotado}`);

//ES6 Class

class Car{
    constructor(name, price, color){
        this.name = name;
        this.price = price;
        this.color = color;
    }

    carColorDiscount(){
        if(this.color.toLowerCase() == "black"){
            return this.price * ((100 - 40)/ 100);
        }else if(this.color.toLowerCase() == "red"){
            return this.price * ((100 - 30)/ 100);
        }
        return this.price * ((100 - 20)/ 100);
    }
}

const carrinho = new Car("Uno Way",3000,"red");
console.log(`Preço original: ${carrinho.price}
\nCom desconto: ${carrinho.carColorDiscount()}` );