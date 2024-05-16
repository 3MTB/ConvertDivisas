import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabs, IonTabBar, IonButtons, IonButton, IonTabButton, IonLabel, IonInput, IonSelect, IonSelectOption, IonToggle, IonToast, IonFooter, IonText, IonIcon, IonNav } from '@ionic/angular/standalone';
import { CurrencyService } from 'src/app/Services/currency.service';
import { Convert } from '@Interfaces/interfaces';
import { map } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonNav, IonIcon, IonText, IonFooter, IonToast, IonToggle, IonInput, IonSelect, IonSelectOption, FormsModule, IonLabel, IonTabButton, IonButton, IonButtons, IonTabBar, IonTabs, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MainPage implements OnInit {

  convert: Convert = {
    from: "USD",
    to: "DOP",
    amount: 0.1
  }
  ResultConvert: { convert: Convert, priceConverted: number, result: number } = {
    convert: this.convert, priceConverted: 0, result: 0
  };
  allCurrencys: string[] = [];
  constructor(private serv: CurrencyService) { }

  ngOnInit() {
    this.allCurrencys = this.serv.AllCurrency;
  }
  getResult() {
    this.serv.getConvert(this.convert).pipe(
      map(r => {
        this.ResultConvert.convert = {
          from: r.base_code,
          to: r.target_code,
          amount: this.convert.amount
        }
        this.ResultConvert.result = r.conversion_result;
        this.ResultConvert.priceConverted = r.conversion_rate;
      })
    ).subscribe();
  }
}
