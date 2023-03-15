import { ICategory } from './icategory';
import { Author } from './author';
import { BookUser, Reviews } from './book-user';

    export interface Book {
        id: string;
        name: string;
        img: string;
        summary: string;
        avg_rate: number;
        reviews: Reviews[];
        author: Author;
        ICategory:ICategory;
        bookUser: BookUser;
    }






