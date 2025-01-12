import { Component,ElementRef,
  OnInit,
  VERSION,
  ViewChild} from '@angular/core';
  import { timer } from 'rxjs';
  import { basicTableConfig } from './basic-table.config';
  import { StateSurchargeService } from './../state-surcharge.service';

@Component({
  selector: 'app-table-export',
  templateUrl: './table-export.component.html',
  styleUrls: ['./table-export.component.css']
})
export class TableExportComponent implements OnInit {
  config = basicTableConfig;

  // Create fake array of total items so paginator uses correct total
  totalItemCount: any[] = [];

  constructor(private readonly stateSurchargeService: StateSurchargeService) {}

  dataItems: any[] = [];

  headers = [
    {
      dataPath: 'state',
      label: 'State',
    },
    {
      dataPath: 'distribution',
      label: 'State Distribution (%)',
    },
  ];

  getUniqueFilterValues(values: any[]) {
    return Array.from(new Set(values).values()).map((value) => ({
      label: value,
    }));
  }

  handlePageChange(pageChangedEvent: any) {
    const { rangeFrom, rangeTo } = pageChangedEvent.detail;
    this.loadItemsForPage(rangeFrom, rangeTo);
  }

  loadItemsForPage(rangeFrom: number, rangeTo: number) {
    const newData = this.stateSurchargeService.mockLoadData(rangeFrom, rangeTo);
    this.dataItems = [...newData];
  }

  searchStates(searchEvent: any) {
    const newData = this.stateSurchargeService.searchStates();
    this.dataItems = [...newData];
    this.totalItemCount = this.dataItems;
  }

  handleSearchTermUpdate(searchTermUpdateEvent:any) {
    const searchTerm: string = searchTermUpdateEvent.detail;
    this.stateSurchargeService.setSearchTerm(searchTerm);
    if (searchTerm === '') {
      const resetData: any[] = this.stateSurchargeService.reset();
      this.dataItems = [...resetData];
      this.totalItemCount = this.stateSurchargeService.getTotalCount();
    }
  }

  ngOnInit() {
    this.totalItemCount = this.stateSurchargeService.getTotalCount();
  }
}
