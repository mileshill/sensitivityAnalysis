import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeSelector } from './recipe-selector';
import { AppServiceService } from './app-service.service';
import { Premise } from './premise';

// Routing
//import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private recipeForm: FormGroup;
  private utilities: Array<string>;
  private meterTypes: Array<string>;
  public recipe: Premise[];

  constructor(
    private _formBuilder: FormBuilder,
    private _appService: AppServiceService
  //  private _router: Router
    ) { }

  ngOnInit() {
    // Build the form
    this.recipeForm = this._formBuilder.group({
      utilityName: ['', Validators.required],
      meterType: ['', Validators.required]
    });

    // initialize form defaults
    this.utilities = [
      'peco', 'pseg', 'coned', 'comed', 'ppl'
    ];

    this.meterTypes = [
      'interval', 'consumption', 'demand'
    ];

    // load all recipe data
    this.loadRecipe();
  }//onInit


  loadRecipe(){
    this._appService.loadRecipeData()
      .subscribe(data => {
        this.recipe = data.items,
        err => console.log(err),
        () => console.log('Loading data complete')
      });
  }


  // onSubmit(form: FormGroup){
  //   console.log(form.valid);
  //   let utilityName = form.value.utilityName.toLowerCase();
  //   let meterType = form.value.meterType.toLowerCase();
  //   let route = '/' + utilityName + meterType;
  //   this._router.navigate([route]);
  // }



}
