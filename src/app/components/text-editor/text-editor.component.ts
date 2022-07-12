import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  name:string;
  message:string; 
  isDisabled: boolean;
  constructor() {
    this.name = 'Paula';
    this.message = 'enter your name';
    this.isDisabled = false;
   }

  ngOnInit(): void {
  }


  printMessage(): void {
    alert('Detengase Malandro !!');
  }
  updateName(event: KeyboardEvent): void {
  console.log(event);
  // this.name = (<HTMLInputElement>event.target).value; // obtenemos el valor actual del input y lo asignamos a la variable name
  const currentInput = event.target as HTMLInputElement; // obtenemos el valor actual del input y lo asignamos a la variable name
  this.name = currentInput.value;
  // alert(this.name);
  }
  sayHello(): void {
    alert('${this.name}');
  }
}


