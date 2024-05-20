import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon,
  IonFooter, IonText, IonNote, IonLabel, IonButtons, IonImg, IonToggle
} from '@ionic/angular/standalone';
import { Network } from '@capacitor/network';
import { MoodOfflinePage } from '@Components/mood-offline/mood-offline.page';
import { MoodOnlinePage } from '@Components/mood-online/mood-online.page';
import { HistoryPage } from '@Components/history/history.page';
import { CurrencyService } from '@Services/currency.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonToggle, IonImg, RouterLink, IonButtons, IonLabel, IonNote, IonText, IonFooter, HistoryPage, IonIcon, IonButton, CommonModule, FormsModule, MoodOfflinePage, MoodOnlinePage, IonContent, IonHeader, IonTitle, IonToolbar]
})
export class HomePage implements OnInit {

  LongHistory = 0;
  isOnline: boolean = true;
  ShowHistory = false;
  constructor(private serv: CurrencyService) {
    this.LongHistory = this.serv.getHistory.length;
  }
  ngOnInit() {
    this.gestorEventos();
  }

  private gestorEventos() {
    Network.getStatus().then(status => {
      this.isOnline = status.connected;
    });
    Network.addListener('networkStatusChange', (status) => {
      this.isOnline = status.connected;
    });
  }
  UpdateHistory() {
    this.LongHistory = this.serv.getHistory.length;
  }
}
