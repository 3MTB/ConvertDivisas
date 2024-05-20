import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonLabel, IonNote, IonGrid, IonRow, IonCol, IonImg } from '@ionic/angular/standalone';
import { CurrencyService } from '@Services/currency.service';
import { ResultConvert } from '@Interfaces/interfaces';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [IonImg, IonCol, IonRow, IonGrid, IonNote, IonLabel, IonIcon, IonCardContent, IonCardSubtitle, IonCardTitle, IonCard, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HistoryPage implements OnInit {

  AllHistory: ResultConvert[] = [];
  constructor(private serv: CurrencyService) { }

  ngOnInit() {
    this.AllHistory = this.serv.getHistory;
  }

}
