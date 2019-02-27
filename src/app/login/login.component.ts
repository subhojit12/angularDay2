import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   name:any = {};
   arr:any = [];
  constructor() { }

  ngOnInit() {
    console.log('Hello');
    this.name = 'Subhojit';
    this.arr = [0,1,2,3,'one','two','three'];
    console.log(JSON.stringify(this.arr));
    for(var i=0;i<=this.arr.length;i++){
      console.log(this.arr[i]);
    }
    
  }

}
