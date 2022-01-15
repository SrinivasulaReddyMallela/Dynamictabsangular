import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people/people-list.component';
import { PersonEditComponent } from './people/person-edit.component';
import { DynamicTabsDirective } from './tabs/dynamic-tabs.directive';
import { TabComponent } from './tabs/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    DynamicTabsDirective,
    PersonEditComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // register the dynamic components here
  entryComponents: [
    TabComponent
  ]
})
export class AppModule { }
