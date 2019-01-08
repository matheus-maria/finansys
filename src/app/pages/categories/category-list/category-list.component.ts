import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../category.service';
import { Category } from '../category.model';

@Component({
  selector: 'fns-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.sass']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = []

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.categories().subscribe( 
      categories => this.categories = categories, 
      error => alert(`Erro ao carregar a lista: ${error}`)
    )
  }  
  
  

}
