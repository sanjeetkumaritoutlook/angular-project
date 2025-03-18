import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() public dataItems$: BehaviorSubject<any[]>;
  @Input() public features: any[];
  @Input() public headers: any[];
  @Input() public tableId: string;
  @Input() public quoteNumber: string;
  @Input() public dataLoading: boolean=true;
  @ViewChild('fluidTable', { static: false }) fluidTable: ElementRef;
  @Output() public deleteFormEvent: EventEmitter<any> =
    new EventEmitter<any>();
  @Output() public hideOnProposalEvent: EventEmitter<any> =
    new EventEmitter<any>();
  @Output() public getSelectedFormEvent: EventEmitter<any> =
    new EventEmitter<any>();
  @Output() public refreshEvent: EventEmitter<string> =
    new EventEmitter<string>();
  @Input() public tableLoading: boolean=false;
  @Input() public additionalInfo: any;
  @Input() public searchBoxPlaceholder: string;
  @Input() public viewOnlyObservable: Observable<boolean>;
  @Input() public disableRowIf: any; /*this is a function that returns boolean*/
  @Input() public maxHeight: number;
  @Input() public minHeight: number;
  @Input() public allowOverflow: boolean;
  @Input() public clearFilterObservable: Observable<null>;
  public refreshFormsListFeature: any;
  public selectable: boolean;
  public columnAdjustments: any;
  public selectableDataPath: string;
  public selectableHeaderLabel: string;
  public enableSearch = true;
  public searchOptions: any;
  public viewOnlySubscription: Subscription;
  public filteredRows: Object;
  public filteredRowsSubscription: Subscription;
  public tableActions:any;
  public paginationNumber: number[] = [25, 50, 100, 250];
  public tableExpanded = false;
  public tableSelectionOptions = {};

  constructor(
    
    private el: ElementRef
  ) {}
  formActionsConfig = {
    showEditActions: false,
  };
  public ngOnInit(): void {
    this.selectable = this.additionalInfo?.selectable;
    this.selectableDataPath = this.additionalInfo?.selectableDataPath;
    this.selectableHeaderLabel = this.additionalInfo?.selectableHeaderLabel;
    this.refreshFormsListFeature = this.features?.filter(
      (item) => item.name === 'refresh'
    )[0];
    this.searchOptions = {
      helpText: 'Start typing to search table below.',
      deepSearch: false,
      debounceTime: 3000,
      dynamicSearch: true,
      searchableColumns: [
        'formNo',
        'formName',
        'fullPolicyFormsUnformattedNumber',
      ],
    };
    this.columnAdjustments = {
      hideOnProposal: '100px',
      selectable: '100px',
      formName: '600px',
      formNo: '120px',
      action: '120px',
      fastTrack: '120px',
      fillInText: '80px',
      fillInPresent: '80px',
      availableFillInText: '100px',
      coverageCategory: '150px',
      supportingMaterials: '150px',
      conditionalRenewalNotification: '120px',
      status: '60px',
      ruleCriteriaMessage: '180px',
      stateCodes: '100px',
      formCode: '120px',
      inventoryCategory: '120px',
      selected: '80px',
      goForwardFormNumber: '120px',
      ruleMessage: '180px',
    };

   
  
  
  }
}
