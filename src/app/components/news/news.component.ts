import { Component, OnInit } from '@angular/core';
import { Person } from '../../person';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  //Property Area 
  public title: string = "I am title hahaha";
  public titleFrank: string = "Frank title";

  public arr: any[] = ["Franka", "叶子", "Amy", "Lily"];
  public userList: Person[] = [
    new Person("Frank", "37"),
    new Person("Lily", "3"),
  ]

  public cars: any[] = [
    {
      cate: 'BMW',
      list: [
        {
          title: 'bmw 1',
          price: '30w',
        },
        {
          title: 'bmw 2',
          price: '30w',
        },
        {
          title: 'bmw 3',
          price: '50w',
        },
      ]
    },
    {
      cate: 'benchi ',
      list: [
        {
          title: 'benchi 1',
          price: '30w',
        },
        {
          title: 'benchi 2',
          price: '30w',
        },
        {
          title: 'benchi 3',
          price: '50w',
        },
      ]
    },
  ];

  public pictureUrl = "https://www.baidu.com/img/bd_logo1.png?where=super";
  public flag: boolean = false;
  public orderStatus: number = 3;
  public flagClass: boolean = false;

  public today: any = new Date();

  public list: any[] = [];
  //Method Area
  constructor(public http: HttpClient) {
    console.log(this.today, 24)
    this.getData();
  }

  ngOnInit(): void {
  }
  testMethod() {

  }
  run() {
    alert(74);
  }
  data = 1;
  setData(event) {
    let dom: any = event.target;
    dom.style.color = 'red';

    this.data++;
  }
  public keywords = 'default value';
  keyDown(e) {
    if (e.keyCode == 13) {
      console.log('pressed enter')
    } else {
      console.log(e.target.value)
    }
  }
  changeKeywords() {
    this.keywords = "changed value";
  }

  getData() {
    let api = 'http://a.itying.com/api/productlist';
    this.http.get(api).subscribe((response: any) => {
      console.log(response, 100)
      this.list = response.result;
    });
  }

  doLogin() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    var api = 'http://localhost:3000/doLogin';
    this.http.post(api, {
      'username': 'A',
      'age': 20,
    }, httpOptions).subscribe((response) => {
      console.log(response)
    })
  }
}
