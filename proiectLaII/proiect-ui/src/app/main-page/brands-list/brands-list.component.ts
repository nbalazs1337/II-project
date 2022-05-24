import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Brand } from 'src/app/models/Brand';
import { Product } from 'src/app/models/Product';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.css']
})
export class BrandsListComponent implements OnInit {

  @Input() brandsList:Brand[] = [  ];
  @Input() products:Product[] = [  ];
  brandsControl:FormGroup;
  selectedValue: any;
  constructor(private userService: UserService) {
    this.brandsControl = new FormGroup(
      {
        "name": new FormControl(null)
      }
    )
   }

   onChange(event:any) {
     console.log('\n event \n', event);
     console.log(this.products);
     this.userService.filterProducts(event).subscribe(l => this.userService.prods = l);
    console.log(event);
    console.log(this.userService.prods)
   }
  

   getBrands(){
     this.userService.getAllBrands().subscribe(b => this.brandsList = b);
   }

  ngOnInit(): void {
    this.getBrands();
    var x=document.getElementById('selector');
    console.log(x);
  }

  update(criteria:any){
    this.userService.filterProducts(criteria).subscribe(l => this.products = l);
    console.log(criteria);
    console.log(this.products);
  }
}
