import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  catImage;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {

    this.getCatImage();
  }

  getCatImage(){
    this.authService.getCatImage().subscribe(
      (res) => {
        console.log(res);
      this.catImage = res[0].url;
    });
  }

}
