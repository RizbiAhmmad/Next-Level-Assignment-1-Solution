What are some differences between interfaces and types in TypeScript?
BlogPost Answer 1:
TypeScript-এ interface এবং type দুটোই object এর structure define করতে ব্যবহৃত হয়।
কিন্তু কিছু পার্থক্য আছে।
Interface খুব সহজে এক্সটেন্ড করা যায়,
যেমনঃ 
interface Person{
    name:string;
    age:string;
}
interface Employee extends Person{
    salary:number;
}

 Type দিয়েও extend করা যায়, কিন্তু syntax আলাদা।
 যেমনঃ 
 type Person={
    name:string;
    age:number;
 }
 type Employee = Person & {
    salary:number;
 }

Interface re-open করা যায়, মানে একই interface আবার declare করলে merge হয়ে যায়।Type re-open/ merge করা যায় না
Interface মূলত objects/class এর জন্য বেশি ব্যবহার হয়, Type সাধারণত union, primitive, tuple ইত্যাদি define করতে বেশি ব্যবহৃত হয়।


What is the use of the keyof keyword in TypeScript? Provide an example.
BlogPost Answer 2:
keyof একটি TypeScript keyword, যা কোনো object type এর সবগুলো key এর নামকে union type এ convert করে।
Object থেকে value নিরাপদভাবে access করতে key অনেক কাজে লাগে। 
যেমনঃ 

type Book ={
    title:string;
    pages:number;
}
function BookDetails(key: keyof Book){
    console.log(key)
}
BookDetails("title");
BookDetails("pages");
BookDetails("author"); 
এইখানে author নেই তাই keyof নিশ্চিত করে যে তুমি ভুল key ব্যবহার করতে পারবে না ।