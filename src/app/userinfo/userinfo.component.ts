import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(private myapi:ApiService) { 

    this.fetchData()
  }


  fetchData=()=>{
    this.myapi.viewUser().subscribe(
      (data)=>{
        this.userData=data
      }
    )
  }

  userData:any={}

  ngOnInit(): void {
  }

}
