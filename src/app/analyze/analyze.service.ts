import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyzeService {
  constructor() { }

  getProducts(): Product[] {
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
      type: 'Subcategory',
      name: 'Toilet paper',
      rank: 1,
      surgeRate: 192,
      urgency: 'High'
    },
    {
      type: 'Subcategory',
      name: 'Disinfecant Spray',
      rank: 2,
      surgeRate: 188,
      urgency: 'High'
    },
    {
      type: 'Subcategory',
      name: 'Hand Soaps',
      rank: 3,
      surgeRate: 184,
      urgency: 'High'
    },
    {
      type: 'Subcategory',
      name: 'Flushable Wipes',
      rank: 4,
      surgeRate: 145,
      urgency: 'Medium'
    },
    {
      type: 'Subcategory',
      name: 'Facial Tissue',
      rank: 5,
      surgeRate: 130,
      urgency: 'Medium'
    },
    {
      type: 'Category',
      name: 'Bathroom Essentials',
      rank: 1,
      surgeRate: 192,
      urgency: 'High'
    },
    {
      type: 'Category',
      name: 'Cleaning Supplies',
      rank: 2,
      surgeRate: 188,
      urgency: 'HIgh'
    },
    {
      type: 'Category',
      name: 'Fruits',
      rank: 3,
      surgeRate: 184,
      urgency: 'High'
    },
    {
      type: 'Category',
      name: 'Beer & Wine',
      rank: 4,
      surgeRate: 145,
      urgency: 'Medium'
    },
    {
      type: 'Category',
      name: 'Toys & Games',
      rank: 5,
      surgeRate: 130,
      urgency: 'Medium'
    }];
  }
}

export class Product {
  type: 'Brand' | 'Subcategory' | 'Category';
  name: string;
  rank: number;
  surgeRate: number;
  urgency: string;
}
