import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products=[];
  cart=[];
  view:Boolean=true;
  constructor() { 
    this.products= [{name:"Printer",price:8000,company:"Laserjet"},
    {name:"Scanner",price:12000,company:"HP"},
    {name:"Keyboard",price:1800,company:"Lenovo"}
   ]
  }

  ngOnInit() {
  }
  public Add(i){
    
    let data = this.products[i];
   //let data = this.products.splice(i,1);
   this.cart.push(data);
 }
 public Remove(i){
   this.cart.splice(i,1);    
 }
 public showCart(show){
   this.view = show;
 }

}
