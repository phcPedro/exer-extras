
interface User {
name:string;
age:number;
occupation?:string;

}

interface Admin {
    role?: string

}

type NewType = User;

export type Person = Admin & NewType;

export const persons: Person[] /* <- Person[] */ = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(persons:Person) {
    console.log(` - ${persons.name}, ${persons.age}`);
}

persons.forEach(logPerson);