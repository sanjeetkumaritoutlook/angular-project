import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
@Component({
  selector: 'app-forms-selection',
  templateUrl: './forms-selection.component.html',
  styleUrls: ['./forms-selection.component.css']
})
export class FormsSelectionComponent {
  @Input() public quoteNumber: string;
  @Input() public lobCode: string;
  @Input() public isExcess: boolean;
  @Input() public endpointType: string;
  @Input() public tableType: string;
  @Input() public dataItems$: BehaviorSubject<any[]>;
  @Input() public headers: any[];
  @Input() public features: any[];
  @Output() public refreshEvent: EventEmitter<string> =
    new EventEmitter<string>();
  @ViewChild('fluidTable', { static: false }) fluidTable: ElementRef;
  @Output() public deleteFormEvent: EventEmitter<any> =
    new EventEmitter<any>();
  @Output() public hideOnProposalEvent: EventEmitter<any> =
    new EventEmitter<any>();
  @Output() public getSelectedFormEvent: EventEmitter<any> =
    new EventEmitter<any>();
  @Input() public dataLoading: boolean;
  @Input() public additionalInfo: any = {};
  @Input() public selectedForm: any;
  @Input() public searchBoxPlaceholder: string;
  @Input() public viewOnlyAccess: boolean;
  @Input() public viewOnlyObservable: Observable<boolean>;
  @Input() public clearFilterObservable: Observable<null>;
  @Input() public preSignedUrlDetails: any;
  @Input() public disableViewDraftBtn = true;
  @Input() public disableDraftReviewedTgl = true;
  @Input() public allowOverflow = true;
  @Input() public coverageCategories: any[];
  public viewOnlySubject: Subject<boolean> = new Subject<boolean>();
  public clearFilterSubject: Subject<null> = new Subject<null>();
  @Output() public tableMaxHeight: number;
  @Output() public tableMinHeight: number;
  draftReviewedConfig: {
    controlName: string;
    labelOn: string;
    label: string;
    labelOff: string;
    toggleType: string;
    initialValue: boolean;
  };
  public exportModalOpen: boolean;
  public openCrnModal = false;
  public crnDataItem: any;
  public openFillinsModal = false;
  public fillnsDataItem: any;
  public options: any[];
  public openHelpTextModal = false;
  public helpTextDataItem: any;

}
