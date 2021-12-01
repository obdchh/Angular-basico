import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Thor', 'Goku', 'Gohan'];
  heroeBorrado: string ='';

  borrarHeroe() {
      this.heroeBorrado = this.heroes.shift() || '';

  }

}
