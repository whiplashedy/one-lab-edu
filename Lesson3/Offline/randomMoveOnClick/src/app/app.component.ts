import {
  ChangeDetectorRef,
  Component,
  OnDestroy, OnInit,
} from '@angular/core';
import {CommunicationService} from './_services/communication-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'randomMoveOnClick';
  constructor(private cdRef: ChangeDetectorRef, private communicationService: CommunicationService) { }

  data: any;
  corX: string | undefined;
  corY: string | undefined;
  sub: any;
  ngOnInit(): void {
    this.sub = this.communicationService.currentActive.subscribe((data) => {
      this.data = data;
      this.corX = (data.x.toFixed(3)).toString();
      this.corY = (data.y.toFixed(3)).toString();
      this.cdRef.detectChanges();
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
