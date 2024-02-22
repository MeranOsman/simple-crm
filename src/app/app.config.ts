import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-cd897","appId":"1:121190463830:web:9077039289806242d6fef7","storageBucket":"simple-crm-cd897.appspot.com","apiKey":"AIzaSyBW9PtWqefqbMm1OC98ABtZgxi-JzPHnkY","authDomain":"simple-crm-cd897.firebaseapp.com","messagingSenderId":"121190463830"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-cd897","appId":"1:121190463830:web:9077039289806242d6fef7","storageBucket":"simple-crm-cd897.appspot.com","apiKey":"AIzaSyBW9PtWqefqbMm1OC98ABtZgxi-JzPHnkY","authDomain":"simple-crm-cd897.firebaseapp.com","messagingSenderId":"121190463830"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
