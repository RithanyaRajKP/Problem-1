import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  a:number=0;
  b:number=0;
  result:number= 0;

  constructor() { }

  ngOnInit(): void {
  }

  submitclicked(key:string)
  {
    if(key==='+'){
     this.result= this.a+this.b;
    }
    else if (key==='-') {

      this.result=this.a-this.b;
    }
    else if (key==='*') {
      this.result=this.a*this.b;
    }
    else if (key==='/') {
      this.result=this.a/this.b;
    }
    else{
        this.a=0;
    this.b=0;
    this.result=0;
    }
  }


}
