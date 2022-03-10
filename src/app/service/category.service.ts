import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apilocal = environment.API_LOCAL;

  constructor(private httpClient: HttpClient) {
  }
  // @ts-ignore
  public getCategories(): Observable<Category[]> {
    this.httpClient.get(this.apilocal + 'index/category/');
  }
}
