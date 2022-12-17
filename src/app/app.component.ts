import { Component } from '@angular/core';

interface IModel {
  globalNamespace: string;
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
    globalNamespace: '',
    domainNamespace: '',
  };
  formSubmitted = false;
  pk = '';
  sk = '';
  pkName = 'pk';
  skName = 'sk';
  tableName = 'my-table-name';
  keySeparator = '#';
  entityName = 'MyEntity';
  cSharpModel = `
using System;
using Amazon.DynamoDBv2.DataModel;

namespace MyNamespace;

[DynamoDBTable("${this.tableName}", true)]
public class ${this.entityName}
{
    public ${this.entityName}()
    {
    }

    [DynamoDBHashKey("${this.pkName}")] 
    public string ${this.pkName} { get; set; }

    [DynamoDBRangeKey("${this.skName}")] 
    public string ${this.skName} { get; set; }

    /// Add additional entity properties here as regular CSharp properties
}
  `;

  generateEntity() {
    this.formSubmitted = true;
    this.pk = `${this.model.globalNamespace}${this.keySeparator}unique-id`;
    this.sk = `${this.model.domainNamespace}${this.keySeparator}object-identifier`;
  }
}
