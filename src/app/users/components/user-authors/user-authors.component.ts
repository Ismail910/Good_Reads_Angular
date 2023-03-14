import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Author } from 'src/app/@shared/model/author';
import { AuthorService } from 'src/app/services/user/author.service';

@Component({
  selector: 'app-user-authors',
  templateUrl: './user-authors.component.html',
  styleUrls: ['./user-authors.component.css']
})
export class UserAuthorsComponent implements OnInit,OnChanges {
  authors!: any
  constructor (private authorService : AuthorService){

  }
  ngOnChanges() {

  }

  ngOnInit() {
    this.authorService.getAllAuthors()
    .subscribe((aut) => this.authors = aut);

  }

}
