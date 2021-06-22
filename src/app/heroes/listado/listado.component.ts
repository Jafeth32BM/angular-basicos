import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Strange'];
  hdel : string [] = [];
  borrarHeroe(){
    if (this.heroes.length != 0) {
      const sata = this.heroes.pop() || '';
      this.hdel.push(sata);
    }
  }
}
