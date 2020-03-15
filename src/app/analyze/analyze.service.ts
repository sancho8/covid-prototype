import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyzeService {
  constructor() { }

  getProducts() {
    return [{
      type: 'Brand',
      name: 'Clorox',
      rank: 1,
      surgeRate: 192,
      urgency: 'High'
    },
    {
      type: 'Brand',
      name: 'Kleenex',
      rank: 2,
      surgeRate: 188,
      urgency: 'High'
    },
    {
      type: 'Brand',
      name: 'Purell',
      rank: 3,
      surgeRate: 184,
      urgency: 'High'
    },
    {
      type: 'Brand',
      name: 'Lysol',
      rank: 4,
      surgeRate: 145,
      urgency: 'Medium'
    },
    {
      type: 'Brand',
      name: 'Downy',
      rank: 5,
      surgeRate: 130,
      urgency: 'Medium'
    },
    {
      type: 'Subcategories',
      name: 'Toilet paper',
      rank: 1,
      surgeRate: 192,
      urgency: 'High'
    },
    {
      type: 'Subcategories',
      name: 'Disinfecant Spray',
      rank: 2,
      surgeRate: 188,
      urgency: 'High'
    },
    {
      type: 'Subcategories',
      name: 'Hand Soaps',
      rank: 3,
      surgeRate: 184,
      urgency: 'High'
    },
    {
      type: 'Subcategories',
      name: 'Flushable Wipes',
      rank: 4,
      surgeRate: 145,
      urgency: 'Medium'
    },
    {
      type: 'Subcategories',
      name: 'Facial Tissue',
      rank: 5,
      surgeRate: 130,
      urgency: 'Medium'
    },
    {
      type: 'Categories',
      name: 'Bathroom Essentials',
      rank: 1,
      surgeRate: 192,
      urgency: 'High'
    },
    {
      type: 'Categories',
      name: 'Cleaning Supplies',
      rank: 2,
      surgeRate: 188,
      urgency: 'HIgh'
    },
    {
      type: 'Categories',
      name: 'Fruits',
      rank: 3,
      surgeRate: 184,
      urgency: 'High'
    },
    {
      type: 'Categories',
      name: 'Beer & Wine',
      rank: 4,
      surgeRate: 145,
      urgency: 'Medium'
    },
    {
      type: 'Categories',
      name: 'Toys & Games',
      rank: 5,
      surgeRate: 130,
      urgency: 'Medium'
    }];
  }
}

export class Product {
  type: 'Brand' | 'Subcategory' | 'Category';
  name: '';
  rank: number;
  surgeRate: number;
  urgency: number;
}
