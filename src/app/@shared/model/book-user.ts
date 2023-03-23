import { Book } from "./book";
import { User } from "./user";
export interface BookUser {
  id: string;
  rating: number;
  status: string;
}
export interface Reviews {
  id: string;
  comment: number;
  like: boolean;
  date:Date;
  book:Book;
  user:User;
  _id:string
}
