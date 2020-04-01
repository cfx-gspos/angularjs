import { Component, OnInit, ViewChild ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('myBox') myBox:ElementRef;
  @ViewChild('header')  header:any;

  constructor() { }

  ngOnInit(): void {
 
  }
  ngAfterViewInit(){
   console.log( this.myBox)
   this.myBox.nativeElement.style.width="100px"
   this.myBox.nativeElement.style.height='100px'
   this.myBox.nativeElement.style.background='yellow'
   console.log(this.myBox.nativeElement.innerHTML)
   // call child
   this.header.run();
  }
}
