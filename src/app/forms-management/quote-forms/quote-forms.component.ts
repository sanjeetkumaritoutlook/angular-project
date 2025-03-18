import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-quote-forms',
  templateUrl: './quote-forms.component.html',
  styleUrls: ['./quote-forms.component.css']
})
export class QuoteFormsComponent {
  public quoteNumber: string;
  public lobCode: string;
  public tables: any[] = [];
  public sourceSystem: string;
  public isDataLoading = true;
  public tableData: any[] = [];
  public isExcess: boolean;
  public errorMessage: string;
  public viewOnlyAccess = false;
  public viewOnlySubject: Subject<boolean> = new Subject<boolean>();
  public clearFilterSubject: Subject<null> = new Subject<null>();
  public endpointType: string;
  public options: any[];
  public mandatoryRadioFlag: boolean;
  public packagesRadioFlag: boolean;
  public suggestedRadioFlag: boolean;
  public availableText: boolean;
  public allText = false;
  public suggestedText: boolean;
  public mandatoryText: boolean;
  public packagesText: boolean;
  public select: any[];
  public packagesDropdown: boolean;
  public globalSelectedForms: any = [];
  public globalAvailableForms: any = [];
  public globalCatalogForms: any = [];
  public isCatalogLoading = false;
  public limit: number;
  public skip: number;
  public sendToMarketDateTime: any;
  protected readonly SELECTED = 'selected';
  public selectedCatalogRadioValue = 'available';
  private packagesDropdownValue: any;
  coverageCategories: any[];
  filteredCatalogForms: any;
  public addedFormNo: any;
  selectedValue: string;
  addflag: boolean;
  dataItems  = new BehaviorSubject<any[]>([
    {
      firstName: 'Chandler',
      surname: 'Flynn',
      location: 'Yonah',
      role: 'Zoxy',
      age: 23,
      balanceString: '1234.34',
      balanceNumber: 1234.34,
      createdDate: '2023-04-12T00:00:00.000Z',
    },
    {
      firstName: 'Carmen',
      surname: 'Rowe',
      location: 'Homeland',
      role: 'Vendblend',
      age: 26,
      balanceString: '2345.23',
      balanceNumber: 2345.23,
      createdDate: '2023-08-02T00:00:00.000Z',
    },
    {
      firstName: 'Collins',
      surname: 'Raymond',
      location: 'Foscoe',
      role: 'Farmex',
      age: 22,
      balanceString: '8765.55',
      balanceNumber: 8765.55,
      createdDate: '2024-02-20T00:00:00.000Z',
    },
    {
      firstName: 'Case',
      surname: 'Burnett',
      location: 'Bakersville',
      role: 'Comstar',
      age: 24,
      balanceString: '4567.78',
      balanceNumber: 4567.78,
      createdDate: '2022-10-19T00:00:00.000Z',
    },
    {
      firstName: 'Reyna',
      surname: 'Lambert',
      location: 'Lemoyne',
      role: 'Luxuria',
      age: 29,
      balanceString: '0987.33',
      balanceNumber: 987.33,
      createdDate: '2023-03-02T00:00:00.000Z',
    },
    {
      firstName: 'Santiago',
      surname: 'Turner',
      location: 'Churchill',
      role: 'Pearlessa',
      age: 45,
      balanceString: '-1233.97',
      balanceNumber: -1233.97,
      createdDate: '2023-09-09T00:00:00.000Z',
    },
    {
      firstName: 'Beasley',
      surname: 'Tran',
      location: 'Noblestown',
      role: 'Atomica',
      age: 32,
      balanceString: '7473.73',
      balanceNumber: 7473.73,
      createdDate: '2024-04-20T00:00:00.000Z',
    },
    {
      firstName: 'Mason',
      surname: 'Johnston',
      location: 'Leroy',
      role: 'Zillanet',
      age: 73,
      balanceString: '853523',
      balanceNumber: 853523,
      createdDate: '2022-05-23T00:00:00.000Z',
    },
    {
      firstName: 'Knowles',
      surname: 'Oliver',
      location: 'Cucumber',
      role: 'Orbean',
      age: 65,
      balanceString: '2356',
      balanceNumber: 2356,
      createdDate: '2023-02-05T00:00:00.000Z',
    },
    {
      firstName: 'Nguyen',
      surname: 'Rivas',
      location: 'Ellerslie',
      role: 'Assitia',
      age: 24,
      balanceString: '8375',
      balanceNumber: 8375,
      createdDate: '2024-12-12T00:00:00.000Z',
    },
    {
      firstName: 'Browning',
      surname: 'Gutierrez',
      location: 'Cawood',
      role: 'Softmicro',
      age: 61,
      balanceString: '17364',
      balanceNumber: 17364,
      createdDate: '2023-05-07T00:00:00.000Z',
    },
    {
      firstName: 'Gallagher',
      surname: 'Charles',
      location: 'Limestone',
      role: 'Magnina',
      age: 43,
      balanceString: '9834',
      balanceNumber: 9834,
      createdDate: '2022-12-27T00:00:00.000Z',
    },
    {
      firstName: 'Alexis',
      surname: 'Baldwin',
      location: 'Kapowsin',
      role: 'Oronoko',
      age: 73,
      balanceString: '8635',
      balanceNumber: 8635,
      createdDate: '2023-10-22T00:00:00.000Z',
    },
    {
      firstName: 'Parsons',
      surname: 'Ferrell',
      location: 'Fairlee',
      role: 'Ewaves',
      age: 20,
      balanceString: '2765',
      balanceNumber: 2765,
      createdDate: '2024-09-19T00:00:00.000Z',
    },
    {
      firstName: 'Cora',
      surname: 'Mcdaniel',
      location: 'Wadsworth',
      role: 'Norali',
      age: 42,
      balanceString: '86543',
      balanceNumber: 86543,
      createdDate: '2023-01-01T00:00:00.000Z',
    },
  ]);

  headers = [
    {
      label: 'First Name',
      dataKey: 'firstName',
    },
    {
      label: 'Surname',
      dataKey: 'surname',
    },
    {
      label: 'Role',
      dataKey: 'role',
      helpText: 'This header has helptext!',
    },
    {
      label: 'Location',
      dataKey: 'location',
    },
    {
      label: 'Age',
      dataKey: 'age',
    },
  ];
}
