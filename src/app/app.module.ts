import '../rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent }         from './app.component';

import { DashboardComponent }   from '../components/dashboard/dashboard.component';
import { HeroesComponent }      from '../components/heroes/heroes.component';
import { HeroDetailComponent }  from '../components/hero-detail/hero-detail.component';
import { HeroSearchComponent }  from '../components/hero-search/hero-search.component';
import { HeroService }          from '../services/hero.service';
import { HeroMockService }      from '../mocks/hero.mock';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(HeroMockService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})

export class AppModule { }
