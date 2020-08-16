import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ReactiveFormsModule } from '@angular/forms'

import { SortByPipe } from './share/pipe/sortBy.pipe';

import { DashboardComponent } from './dashboard/dashboard.component'
import { CollectionComponent } from './collection/collection.component'
import { StudioReservationComponent } from './studio-reservation/studio-reservation.component'
import { HeaderComponent } from './core/header/header.component'
import { FooterComponent } from './core/footer/footer.component'
import { CardComponent } from './share/component/card/card.component';
import { IconSortAlphaDownComponent } from './share/component/icon-sort-alpha-down/icon-sort-alpha-down.component';
import { IconSortAlphaUpComponent } from './share/component/icon-sort-alpha-up/icon-sort-alpha-up.component'

@NgModule({
  declarations: [
    AppComponent,
    SortByPipe,
    DashboardComponent,
    CollectionComponent,
    StudioReservationComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    IconSortAlphaDownComponent,
    IconSortAlphaUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [ SortByPipe ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
