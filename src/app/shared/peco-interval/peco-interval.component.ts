import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-peco-interval',
  templateUrl: './peco-interval.component.html',
  styleUrls: ['./peco-interval.component.css']
})
export class PecoIntervalComponent implements OnInit {
  private intervalForm: FormGroup;
  private icap: Array<Object> = [];
  private count = 0;

  constructor(
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.intervalForm = this._fb.group({
      usageMin: 0,
      usageMax: 1,
      usage1: 0,
      usage2: 0,
      usage3: 0,
      usage4: 0,
      usage5: 0,
      wcf1: 0,
      wcf2: 0,
      wcf3: 0,
      wcf4: 0,
      wcf5: 0,
      rclf: 0,
      scenario: ""
    });

  }


  onSubmit(form: FormGroup){
    // obtain local values
    let values = form.value;
    let u1 = values.usage1;
    let u2 = values.usage2;
    let u3 = values.usage3;
    let u4 = values.usage4;
    let u5 = values.usage5;
    let w1 = values.wcf1;
    let w2 = values.wcf2;
    let w3 = values.wcf3;
    let w4 = values.wcf4;
    let w5 = values.wcf5;
    let rclf = values.rclf;

    // compute local icap
    let _icap = ((u1 * w1) + (u2 * w2) + (u3 * w3) + (u4 * w4) + (u5 * w5)) / 5.0 * rclf;
    
    // store the icap
    // this.icap.push({
    //   "icap": _icap,
    //   "usage": [u1, u2, u3, u4, u5],
    //   "wcf": [w1, w2, w3, w4, w5],
    //   "rclf": rclf
    // });
    let tmpIcapArray = [];
    for(let i = 0; i < this.icap.length; i++){
      tmpIcapArray.push(this.icap[i]);
    }

    tmpIcapArray.push([
      `${this.count++ +': '+ this.intervalForm.value.scenario}`,
      _icap
    ]);

    this.icap = tmpIcapArray;
    // this.icap.push([
    //   `Index ${this.count++}`,
    //   _icap
    // ]);
    
    

    console.log(this.icap);

  }

}
