import { Component, OnInit } from '@angular/core';

// Services
// paht = outside user folder/outside components folder/into services folder/service file
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name : string;
  age : number;
  email : string;
  // mapping interface definition
  address : Address;
  hobbies : any[];

  posts : Post[];
  isEdit : boolean = false;

  constructor(private dataService : DataService) { }

  ngOnInit() {

  	this.name = 'Nishi';
  	this.age = 20;
  	this.email = 'nishi.bangar@gmail.com';
  	this.address = {
  		street :'Nr Mohalla',
  		city : 'Mysuru',
  		state : 'Karnataka'
  	};
  	this.hobbies = ['Learning languages', 'Fitness', 'Watchning movies'];

  	
  	// Get posts form dataService
  	this.dataService.getPosts().subscribe((posts) => {
  		this.posts = posts;
  	})

   
  }

  onClick(){
  	console.log("Inside Click event function");
  	this.name = 'Nishi Bangar';
  	this.hobbies.push("New Hobby");
  }

  addHobby(hobby){
  	this.hobbies.unshift(hobby);
  	return false;
  }

  deleteHobby(hobby){
  	for(let i = 0 ; i < this.hobbies.length; i++){
  		if(this.hobbies[i] == hobby){
  			this.hobbies.splice(i,1);
  		}
  	}

  	
  }

  toggleEdit(){
  	this.isEdit = !this.isEdit;
  }

}

// Interface
interface Address{

  	street : string,
  	city : string,
  	state : string
 
}

interface Post{
	id : number,
	title : string,
	body : string,
	userId : number
}
