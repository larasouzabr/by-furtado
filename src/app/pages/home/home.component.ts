import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProdutosServiceService } from 'src/app/service/produtos-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sliderConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: false,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      }
    ]

  };
  
  produtos: Product[] = [];

    constructor(
     private prodService : ProdutosServiceService
    ) { }

  ngOnInit(): void {
   this.getCalcas('calca')
  }
  
  getCalcas(type:string){
    this.prodService.getAllProducts().find(p => {
      if(p.type == type){
       console.log (p.type)
        this.produtos.push(p);
      }
    });
    }
}
