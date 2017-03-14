import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppServiceService {
 
  constructor(private _http: Http) { }

  // load local recipe file
  loadRecipeData() {
    return this._http.get('assets/recipe2.json')
      .map((res:Response) => res.json());
  }

}
