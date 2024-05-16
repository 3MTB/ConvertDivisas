import { divisa } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonSelect, IonSelectOption, IonHeader, IonTitle, IonToolbar, IonInput, IonText, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
  standalone: true,
  imports: [FormsModule, IonButton, IonSelect, IonSelectOption, IonText, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CalculadoraPage {

  Result: number = 0;
  divisas: divisa[] = [
    { name: "Dollar", value: 59.5 },
    { name: "Euro", value: 60.1 },
    { name: "Yen", value: 0.63 },
    { name: "Pound", value: 73.2 }
  ]
  UseToConvert: { from: divisa, to: string, value: number } = {
    from: this.divisas[0],
    to: 'DOP',
    value: 0.1
  };

  constructor() { }

  convert() {

    this.Result = this.UseToConvert.from.value * this.UseToConvert.value;
    console.log( this.UseToConvert.from.value * this.UseToConvert.value);
  }

}
