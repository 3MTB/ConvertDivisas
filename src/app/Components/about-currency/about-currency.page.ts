import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonLabel, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { CurrencyService } from '@Services/currency.service';
import { Currency } from '@Interfaces/interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-currency',
  templateUrl: './about-currency.page.html',
  styleUrls: ['./about-currency.page.scss'],
  standalone: true,
  imports: [RouterLink,IonIcon, IonButton, IonButtons, IonLabel, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AboutCurrencyPage implements OnInit {

  AllCurrency: Currency[] = [];
  constructor(private serv: CurrencyService) { }

  ngOnInit() {
    this.AllCurrency = this.serv.AllCurrency;
  }

}
