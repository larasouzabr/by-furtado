import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../Product';
import { CALCAS, PRODUCTS } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProdutosServiceService {
  baseProdutos = PRODUCTS;
  constructor() { }

  getAllProducts(){
    return this.baseProdutos;
  }

  getCalcas():Observable<Product[]> {
    const calcas = of(CALCAS);
    return calcas;
  }
  
  getProductById(id: number){
    const product = PRODUCTS.find(h => h.id === id)!;
    console.log(product.id);
    return of(product);
   
  }
}
