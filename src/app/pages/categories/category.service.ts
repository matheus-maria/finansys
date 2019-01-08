import { Injectable } from '@angular/core';

import { map, catchError, flatMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { ErrorHandler } from 'src/app/app-error-handler';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiPath: string = "api/categories"

  constructor(private http: HttpClient) { }

  categories = (): Observable<Category[]> => {
    return this.http.get<Category[]>(this.apiPath).pipe( 
      catchError(ErrorHandler.handleError)
    )
  }

  categoryById = (id: number): Observable<Category> => {
    return this.http.get<Category>(`${this.apiPath}/${id}`).pipe( 
      catchError(ErrorHandler.handleError)
    )
  }

  create = (category: Category): Observable<number> => {
    return this.http.post<Category>(this.apiPath,category).pipe(
      map(category => category.id),
      catchError(ErrorHandler.handleError)
    )
  }

  update = (id: number): Observable<number> => {
    return this.http.put<Category>(`${this.apiPath}/${id}`, id).pipe(
      map(() => id),
      catchError(ErrorHandler.handleError)
    )
  }

  delete = (id: number): Observable<number> => {
    return this.http.delete<Category>(`${this.apiPath}/${id}`).pipe(
      map(() => id),
      catchError(ErrorHandler.handleError)
    )
  }

}
