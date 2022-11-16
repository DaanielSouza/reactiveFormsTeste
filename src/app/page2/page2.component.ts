import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.sass']
})
export class Page2Component implements OnInit {

  id:string | null | undefined;

  constructor(private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => this.id = p.get('id'));

    // this.id = this.route.snapshot.params['id'];
  }

}
