import { Component, ViewChild } from '@angular/core';

import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-root',
  template: `
  <my-tabs>
    <my-tab [tabTitle]="'People'">
      <h3>List of People</h3>
      <people-list
        [people]="people"
        (addPerson)="onAddPerson()"
        (editPerson)="onEditPerson($event)">
      </people-list>
      <hr />
      <button class="btn btn-default" (click)="onOpenAbout()"><i class="glyphicon glyphicon-question-sign"></i> About this</button>
    </my-tab>
  </my-tabs>

  <ng-template let-person="person" #personEdit>
    <person-edit [person]="person" (savePerson)="onPersonFormSubmit($event)"></person-edit>
  </ng-template>
  <ng-template #about>
    <p>
      Hi, I hope this demo was useful to learn more about dynamic components
      in Angular, in specific about <code>ViewContainerRef</code>,
      <code>ComponentResolverFactory</code> etc.
    </p>
    <p>
     This is a small example on dynamic tabs
    </p>
     
  </ng-template>
`
})
export class AppComponent {
  title = 'DynamicTabs';
  @ViewChild('personEdit') editPersonTemplate: any;
  @ViewChild('about') aboutTemplate: any;
  @ViewChild(TabsComponent) tabsComponent: any;

  people = [
    {
      id: 1,
      name: 'Srinivasula Reddy',
      surname: 'Mallela',
      twitter: '@srinivasulareddymallela'
    }
  ];

  onEditPerson(person: any) {
    this.tabsComponent.openTab(
      `Editing ${person.name}`,
      this.editPersonTemplate,
      person,
      true
    );
  }

  onAddPerson() {
    this.tabsComponent.openTab('New Person', this.editPersonTemplate, {}, true);
  }

  onPersonFormSubmit(dataModel: any) {
    if (dataModel.id > 0) {
      this.people = this.people.map(person => {
        if (person.id === dataModel.id) {
          return dataModel;
        } else {
          return person;
        }
      });
    } else {
      // create a new one
      dataModel.id = Math.round(Math.random() * 100);
      this.people.push(dataModel);
    }

    // close the tab
    this.tabsComponent.closeActiveTab();
  }

  onOpenAbout() {
    this.tabsComponent.openTab('About', this.aboutTemplate, {}, true);
  }
}
