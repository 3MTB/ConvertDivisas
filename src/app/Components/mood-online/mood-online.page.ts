import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabs, IonTabBar, IonButtons, IonButton, IonTabButton, IonLabel, IonInput, IonSelect, IonSelectOption, IonToggle, IonToast, IonFooter, IonText, IonIcon, IonNav, IonNote, IonBadge } from '@ionic/angular/standalone';
import { CurrencyService } from '@Services/currency.service';
import { Convert, Currency, ResultConvert } from '@Interfaces/interfaces';
import { map } from 'rxjs';
import { HistoryPage } from '@Components/history/history.page';
import { Network } from '@capacitor/network';
@Component({
  selector: 'app-mood-online',
  templateUrl: './mood-online.page.html',
  styleUrls: ['./mood-online.page.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, HistoryPage, IonBadge, IonNote, IonNav, IonIcon, IonText, IonFooter, IonToast, IonToggle, IonInput, IonSelect, IonSelectOption, FormsModule, IonLabel, IonTabButton, IonButton, IonButtons, IonTabBar, IonTabs, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class MoodOnlinePage implements OnInit {

  convert: Convert = {
    from: { CurrencyCode: "USD", CurrencyName: "United States Dollar", Country: "United States" },
    to: { CurrencyCode: "DOP", CurrencyName: "Dominican Peso", Country: "Dominican Republic" },
    amount: 100
  }
  ResultConvert: ResultConvert = {
    convert: this.convert,
    priceConverted: 0,
    result: 0,
    form: 'Online',
    date: new Date(Date.now())
  };
  allCurrencys: Currency[] = [];
  ShowHistory: boolean = false;
  isOnline = true;
  @Output() NewConvertion: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private serv: CurrencyService) { }

  ngOnInit() {
    this.allCurrencys = this.serv.AllCurrency;
    this.convert.from = this.allCurrencys.find(x => x.CurrencyCode == 'USD') ?? this.allCurrencys[2];
    this.convert.to = this.allCurrencys.find(x => x.CurrencyCode == 'DOP') ?? this.allCurrencys[2];
    Network.getStatus().then(status => {
      this.isOnline = status.connected;
    });
    Network.addListener('networkStatusChange', (status) => {
      this.isOnline = status.connected;
    });
  }
  getResult() {
    if (this.isOnline) {
      this.serv.getConvert(this.convert).pipe(
        map(r => {
          let resultSearchFrom = this.allCurrencys.find(x => x.CurrencyCode === r.base_code);
          let resultSearchTo = this.allCurrencys.find(x => x.CurrencyCode === r.target_code);
          if (resultSearchFrom && resultSearchTo) {
            this.ResultConvert.convert.from = resultSearchFrom;
            this.ResultConvert.convert.to = resultSearchTo;
            this.ResultConvert.priceConverted = r.conversion_rate;
            this.ResultConvert.result = r.conversion_result;
            this.serv.AddToTheHistory(this.ResultConvert);
            this.NewConvertion.emit(true);
          }
          else {
            //! LANZAR ERROR
          }
        }
        )
      ).subscribe();
    } else {
      alert('WITHOUT CONECTION')
    }
  }


}
