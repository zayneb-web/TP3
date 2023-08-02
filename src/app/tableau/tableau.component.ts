import { Component } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent {
titre:string="1. Opérations sur un tableau:";
tab= [15, 46, 0, 89, 80];
onPosition(ind:number,cpt:number){
  console.log(this.tab[ind] + "a la position");
}

}
