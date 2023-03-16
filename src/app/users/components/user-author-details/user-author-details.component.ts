import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from 'src/app/services/user/author.service';

@Component({
  selector: 'app-user-author-details',
  templateUrl: './user-author-details.component.html',
  styleUrls: ['./user-author-details.component.css']
})
export class UserAuthorDetailsComponent implements OnInit,OnChanges{
  authors!: any
  autherID !: number
  constructor (private authorService : AuthorService,
                private ActivatedRoute : ActivatedRoute){
                  this.ActivatedRoute.paramMap.subscribe((paramMap)=>{
                    //convert ID to int and check to null
                    this.autherID =  +paramMap.get('ID')! || 1  ;
                  })
                 }
  ngOnChanges() {
   
  }

  ngOnInit() {
    this.authorService.getAllAuthors()
    .subscribe((aut) => this.authors = aut);
    
  }
}
