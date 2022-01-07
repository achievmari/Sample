import { UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit, Pipe } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Sample';
  ngOnInit(): void {
    const x = 'maria';
    //alert(xy | x:UpperCasePipe);

  }
 
}
