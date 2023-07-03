import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  public heroeBorrado?: string;

  //metodo patra eliminar un heroe
  deleteHeroe(): void {
   this.heroeBorrado =  this.heroes.pop();

  }


}

