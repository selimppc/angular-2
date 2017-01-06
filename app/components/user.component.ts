import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService],
})

export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService){
      this.name = 'Selim Reza'; 
      this.email = 'selimppc@gmail.com';
      this.address = {
        street: 'Kemal Ataturk Avenue, Road 4',
        city: 'Dhaka',
        state: 'Dhaka',
      }
      this.hobbies = ['Music', 'Movies', 'Sports'];
      this.showHobbies = false;

      this.postsService.getPosts().subscribe(posts =>{
          //console.log(posts);
          this.posts = posts;
      });
  }

  toggleHobbies(){
      //console.log('show');

      if(this.showHobbies == true){
          this.showHobbies = false;
      }else{
        this.showHobbies = true;
      }
  }

  addHobby(hobby){
      //console.log(hobby);
      this.hobbies.push(hobby)
  }

  deleteHobby(i){
      this.hobbies.splice(i,1);
  }

}

interface address{
    street: string;
    city: string;
    state: string;
}

interface Post{
    id: number;
    title: string;
    body: string;
}