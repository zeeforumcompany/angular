import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'This is the description of test recipe 1.', 'https://picsum.photos/200/200'),
    new Recipe('Test Recipe 2', 'This is the description of test recipe 2.', 'https://picsum.photos/150/150')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
