import { ICategory } from './icategory';

export interface Book {
  name?:string
  img?:string
  summary:string

ICategory:ICategory
// author:Author
}


declare module namespace {

  export interface Author {
      _id: string;
      firstName: string;
      lastName: string;
  }

  export interface BookUser {
      _id: string;
      rating: number;
      status: string;
  }

  export interface RootObject {
      _id: string;
      name: string;
      img: string;
      summary: string;
      avg_rate: number;
      reviews: any[];
      author: Author;
      __v: number;
      bookUser: BookUser;
  }

}

