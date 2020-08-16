import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() items
  @Input() title

  sortOrder:string = 'asc'
  category:string = 'title'

  constructor() { }

  ngOnInit(): void {
  }

  sort = (val:string) => {
    this.category = val;
    (this.sortOrder==='asc') ? this.sortOrder='desc' : this.sortOrder='asc';
  }

}
