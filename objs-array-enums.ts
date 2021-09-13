// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string];
// } = {
//     name: 'Justin',
//     age: 29,
//     hobbies: ['DIY', 'Cooking'],
//     role: [2, 'admin']
// };

// const ADMIN = 0;
// const ReadOnly = 1;
// const User = 2;

enum Role { ADMIN = 'Admin', READ_ONLY = 'ReadOnly', AUTHOR = "Author" };


const person = {
    name: 'Justin',
    age: 29,
    hobbies: ['DIY', 'Cooking'],
    role: Role.ADMIN
};

let favouriteActivities: string[];
favouriteActivities = ['Sports'];


// console.log(person.name);
if(person.role === Role.ADMIN){
    console.log('admin login!!')
}