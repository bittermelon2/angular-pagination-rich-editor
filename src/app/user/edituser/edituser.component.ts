import { Component, OnInit } from '@angular/core';
import { en_US, NzI18nService } from 'ng-zorro-antd';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {


options=[
    {value:'vip1', label:'vip1'},
    {value:'vip2', label:'vip2'},
    {value:'vip3', label:'vip3'}
  ];

   public inputData:any={
    last:'',
    first: '',
    phone:'',
    sex: 'A',
    date:'',
    content: 'This is default content',
    face: '',
    checkedOptions:[
      {label:'php', value:'php', checked:true},
      {label:'java', value:'java'},
      {label:'h5', value:'h5'}
    ]
  };
  public selectedOption=this.options[1];

  
  constructor() { }

  ngOnInit() {
  }
  doSubmit(){
    console.log(this.inputData);
    console.log(this.selectedOption);

    var d = new Date(this.inputData.date);
    console.log(d.getFullYear(), d.getMonth(), d.getDate())
    console.log(d.getTime());
    console.log(this.inputData.content);
  }

  changeImage(event){
    console.log(event);

    if(!event.target.files[0]){
      return;
    }

    let file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);//read it to   base64
    reader.onloadend = ()=>{
      var dataURL = reader.result;
      this.inputData.face = dataURL;
      console.log(dataURL);
    }

  }
}
