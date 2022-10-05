import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/Product';
import { ProdutosServiceService } from 'src/app/service/produtos-service.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  
  @Input() produto!: Product;
  produtoSimilar: Product[] = [];
  id : number = 0;
  constructor(
    private route: ActivatedRoute,
    private productserv: ProdutosServiceService,
  ) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.getProduct(this.id);
      }
    );
    this.getProductSimilar()

  }

  getProduct(id:number){
   this.productserv.getAllProducts().find(p => {
   if(p.id == id) {
    this.produto = p;  
   }
    console.log (p.id)
   
  });
  }

  getProductSimilar(){
    this.productserv.getAllProducts().find(p => {
     if(p.type == this.produto.type && p.id !== this.produto.id){
      console.log (p.type)
       this.produtoSimilar.push(p);
     }
   });
   }
}
