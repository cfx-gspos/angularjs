import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public peopleInfo: any = {
    username: 'jinwanjun d ',
    sex: "1",
    cityList: ['bj', 'sh', 'sz'],
    city: 'sz',
    hobby: [{ title: 'eat', checked: false }
      , { title: 'sleep', checked: true }
      , { title: 'code', checked: true }
    ],
    remark:'test',
  };
  constructor() {
    window['vm'] = this;
  }

  ngOnInit(): void {
  }
  submitData() {
    console.log(20)
  }


}
