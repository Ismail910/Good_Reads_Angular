import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/@core/api.service';
import { User } from 'src/app/@shared/model/user';
import { AuthService } from 'src/app/services/user/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-author-details',
  templateUrl: './user-author-details.component.html',
  styleUrls: ['./user-author-details.component.css']
})
export class UserAuthorDetailsComponent implements OnInit,OnChanges{
  author: any=[]
  autherID !: number
  userId!:User
  userData?:any
  
  constructor (
                private ActivatedRoute : ActivatedRoute,
                private Api: ApiService,
                private Auth: AuthService,){

                  this.Auth.getuser().subscribe(user=>{
                    this.userData = user;
                    this.userId = this.userData.user._id})


                  this.ActivatedRoute.paramMap.subscribe((paramMap)=>{
                    //convert ID to int and check to null
                    this.autherID =  +paramMap.get('id')! || 1  ;
                  })
                 }
  ngOnChanges() {

  }

  ngOnInit() {

    /*this.authorService.getAuthorByID(this.autherID)
    .subscribe((aut) => this.author = aut);*/
    
    this.Api.get(`${environment.baseUrl}/admin/author/${this.autherID}/${this.userId}`)
    .subscribe((aut) => this.author = aut);
    
// =======
//     this.authorService.getAuthorByID(this.autherID)
//     .subscribe((aut) => {
//       this.author = aut
//     console.log(aut);
//     });

// >>>>>>> 65ff8df27ea4976ae1d258f5d0fdd4f63442f9c3
  }
}
