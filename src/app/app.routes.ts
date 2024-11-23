import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { DexComponent } from './pages/dex/dex.component';

export const routes: Routes = [
    {
        path:'',
        component: HomeComponent 
    },
    {
        path:'details/:id',
        component: DetailsComponent
    },
    {
        path:'dex',
        component: DexComponent
    }
];
