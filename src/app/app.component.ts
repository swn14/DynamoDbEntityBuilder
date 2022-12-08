import { Component } from '@angular/core';

interface IModel {
  rootNamespace: string;
  domainNamespace: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DynamoDbEntityBuilder';
  model: IModel = {
    rootNamespace: '',
    domainNamespace: '',
  };
  pk = '';
  sk = '';

  generateEntity() {
    this.pk = `${this.model.rootNamespace}#unique-id`;
    this.sk = `${this.model.domainNamespace}#object-identifier`;
  }
}
