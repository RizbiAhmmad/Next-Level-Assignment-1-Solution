function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return !value;
  }
  return value;
}


function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}
const person1 = new Person("John Doe", 30);

const person2 = new Person("Alice", 25);


type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  return items.filter(item => {
    if (item.rating < 0 || item.rating > 5) {
      return false;
    }
    return item.rating >= 4;
  });
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];


type User={
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}

function filterActiveUsers(users:User[]):User[]{
    return users.filter(user=>user.isActive===true)
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];


interface Book{
  title:string;
  author:string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book:Book):void{
  const availability = book.isAvailable? "Yes":"No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);


function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
  const result: (string | number)[] = [];
  let index = 0;

  function addUniqueValue(value: string | number) {
    let isFound = false;

    for (let i = 0; i < index; i++) {
      if (result[i] === value) {
        isFound = true;
        break;
      }
    }

    if (!isFound) {
      result[index] = value;
      index++;
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    addUniqueValue(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    addUniqueValue(arr2[i]);
  }

  return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];


type Product ={
  name:string;
  price:number;
  quantity: number;
  discount?:number;
}

function calculateTotalPrice(products:Product[]):number{
  if (products.length===0)
    return 0;

  return products.map(product=>{
    const totalPrice = product.price*product.quantity;

    if(product.discount!==undefined){
      const discountAmount = totalPrice*(product.discount/100)
      return totalPrice - discountAmount;
    }
    return totalPrice;
  })
  .reduce((sum, value) => sum + value, 0);
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];