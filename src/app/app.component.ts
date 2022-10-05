import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'by-furtado';
   btn = document.querySelector("#back-to-top");
   
   goToTop(){
    window.scrollTo(0, 0);
   }
}
