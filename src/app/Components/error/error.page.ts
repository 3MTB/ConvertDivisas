import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonText, IonLabel } from '@ionic/angular/standalone';
import { MyError } from '@Interfaces/interfaces';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
  standalone: true,
  imports: [IonLabel, IonText, IonCardHeader, IonCardContent, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ErrorPage {
 // @Input({ required: true }) error!: MyError;
  @Input({ required: true }) error: MyError= {
    title: 'Error Convert',
    message: 'Error During the convertion of USD -> DOP',
    fecha: new Date(Date.now())
  };
  constructor() { }
}
