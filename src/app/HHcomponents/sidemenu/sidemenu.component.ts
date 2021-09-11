import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(){
    this.status = !this.status;  
    console.log("si se armo")
  }

}
