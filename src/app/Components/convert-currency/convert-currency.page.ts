import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonSelectOption } from '@ionic/angular/standalone';
import { divisa } from '@Interfaces/interfaces';


@Component({
  selector: 'app-convert-currency',
  templateUrl: './convert-currency.page.html',
  styleUrls: ['./convert-currency.page.scss'],
  standalone: true,
  imports: [FormsModule, IonButton, IonSelectOption, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class ConvertCurrencyPage {

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
    console.log(this.UseToConvert.from.value * this.UseToConvert.value);
  }

}
