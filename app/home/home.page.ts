import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';//agregar importación

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: any[] = []; //para almacenar usuarios
  message: string = ""; //para mostrar los mensajes al usuario

  showMoreInfo: boolean = false;
  constructor(private api: ApiService) {}

    ngOnInit(){
      this.api.getRandomUsers(10).subscribe(
        (res)=>{
          this.users = res.results; //results es el objeto de tipo JSON que entrega la api
          this.message = "Usuarios cargados con éxito";
        },
        (error) =>{
          this.message = "Error al cargar usuarios"
          console.log(error);
        }
      );
    }
}
