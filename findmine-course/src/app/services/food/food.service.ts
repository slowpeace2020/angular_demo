import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return [
      'assets/images/foods/food-1.png',
      'assets/images/foods/food-2.png',
      'assets/images/foods/food-3.png',
      'assets/images/foods/food-4.png',
      'assets/images/foods/food-5.png',
      'assets/images/foods/food-6.png',
    ]
  }
}
