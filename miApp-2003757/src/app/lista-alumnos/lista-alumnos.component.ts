import { Component, OnInit } from '@angular/core';
import { alumno } from '../alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  alumnos : alumno[] = [];

  public actionSheetButtons = [
    {
      text: 'Eliminar',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  
  nuevoAlumno: alumno = {
    nombre: '',
    presente: false
  }

  agregarAlumnos(){
    this.alumnos.push(this.nuevoAlumno);
    console.log(this.alumnos)
    
    this.nuevoAlumno={
      nombre: '',
      presente: false,
    }
  }

}
