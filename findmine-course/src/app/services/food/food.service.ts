import {Injectable} from '@angular/core';
import {Food} from "../../shared/Food";
import {Tag} from "../../shared/Tag";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Steamed Pork Ribs with Glutinous Rice',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['china'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.png',
        tags: ['FastFood', 'Rice', 'Lunch'],
      },
      {
        id: 2,
        name: 'Preserved Egg with Red Chili Pepper',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.png',
        tags: ['Spicy', 'Lunch'],
      },
      {
        id: 3,
        name: 'Cold rice noodles',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['africa', 'asia'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.png',
        tags: ['FastFood', 'Cold'],
      },
      {
        id: 4,
        name: 'Steamed Pork Ribs with Black Bean Sauce',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['Pork', 'meat'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.png',
        tags: ['Ribs', 'Fry'],
      },
      {
        id: 5,
        name: 'Spicy Shrimp',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['china', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.png',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Spicy dry pot chicken',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['china'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.png',
        tags: ['FastFood', 'Chicken', 'Lunch','Spicy'],
      },
    ]
  }

  getAllFoodsByTag(tag: String): Food[] {
    if(tag=="All"){
      return this.getAll();
    }else{
      // @ts-ignore
      return this.getAll().filter(food=>food.tags?.includes(tag));
    }
  }

  getAllTags():Tag[]{
    return [
      {'name':'FastFood','count':3},
      {'name':'Rice','count':1},
      {'name':'Lunch','count':3},
      {'name':'Spicy','count':2},
      {'name':'Cold','count':1},
      {'name':'Ribs','count':1},
      {'name':'Fry','count':1},
      {'name':'SlowFood','count':1},
      {'name':'Soup','count':1},
      {'name':'Chicken','count':1}
    ]
  }


}
