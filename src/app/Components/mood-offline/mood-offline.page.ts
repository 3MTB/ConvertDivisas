import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonSelect, IonHeader, IonTitle, IonToolbar, IonInput, IonSelectOption, IonLabel, IonNote, IonToast, IonButton, IonText } from '@ionic/angular/standalone';
import { OffLineServiceService } from '@Services/off-line-service.service';
import { Convert, Currency, OffConvert, OffCurrency, ResultConvert } from '@Interfaces/interfaces';
import { CurrencyService } from '@Services/currency.service';

@Component({
  selector: 'app-mood-offline',
  templateUrl: './mood-offline.page.html',
  styleUrls: ['./mood-offline.page.scss'],
  standalone: true,
  imports: [IonText, IonButton, IonToast, IonNote, IonSelect, IonLabel, IonInput, FormsModule, CommonModule, IonSelectOption, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MoodOfflinePage implements OnInit {

  convertOff: OffConvert = {
    fromOff: { currency: { CurrencyCode: '', CurrencyName: '', Country: '' }, priceToDOP: 0 },
    toOff: { currency: { CurrencyCode: '', CurrencyName: '', Country: '' }, priceToDOP: 0 },
    amountOff: 75
  }
  AllCurrencyOff: OffCurrency[] = []
  resultConvert!: ResultConvert;
  @Output() NewConvertion: EventEmitter<boolean> = new EventEmitter<boolean>;
  constructor(private offServ: OffLineServiceService, private MainServ: CurrencyService) { }

  ngOnInit() {
    this.AllCurrencyOff = this.offServ.getAllCurencyOff;
    this.convertOff.toOff = this.AllCurrencyOff[0];
    this.AllCurrencyOff.shift();
  }
  getResult() {
    if (this.convertOff.fromOff && this.convertOff.fromOff.currency.CurrencyCode != '') {
      let convertNormal: Convert = {
        from: this.convertOff.fromOff.currency,
        to: this.convertOff.toOff.currency,
        amount: this.convertOff.amountOff
      }
      this.resultConvert = {
        convert: convertNormal,
        priceConverted: this.convertOff.fromOff.priceToDOP,
        result: this.convertOff.fromOff.priceToDOP * this.convertOff.amountOff,
        form: 'Offline',
        date: new Date()
      }

      this.MainServ.AddToTheHistory(this.resultConvert);
      this.NewConvertion.emit(true);
    }
  }
}
