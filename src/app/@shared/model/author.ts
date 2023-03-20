import { Book } from './book';
export interface Author {
    ID :Number;
    photo:string;
    firstName:string;
    lastName:string;
    dateOfBirth:string;
    book:Book;
}

