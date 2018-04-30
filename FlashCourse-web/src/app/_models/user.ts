/* 
Author: Andry Bintoro, Lawrence Thompson
Last Updated: April 2018
Path: /app/_models / user.ts
The user model is a small class that defines the properties of a user. 
*/

export class User {
    id: number;
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}