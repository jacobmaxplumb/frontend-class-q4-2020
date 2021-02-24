import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe((items: Item[]) => {
      this.items = items;
    })
  }

  public addProduct(product: Item) {
    this.itemService.addItem(product).subscribe((items: Item[]) => {
      this.items = items;
    })
  }

  public deleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe((items: Item[]) => {
      this.items = items;
    })
  }

}
