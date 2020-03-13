import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {SidenavComponent} from '../shared/components/sidenav/sidenav.component';
import {ProfileService} from '../core/services/profile/profile.service';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import {HeaderComponent} from '../shared/components/header/header.component';
import { NewsComponent } from './home/news/news.component';
import { TargetsComponent } from './home/targets/targets.component';
import { TeamComponent } from './home/team/team.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { CompanyComponent } from './company/company.component';
import { OrganigramComponent } from './organigram/organigram.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FaqComponent } from './faq/faq.component';
import {FullCalendarModule} from '@fullcalendar/angular';
import {EditprojectComponent} from './profile/editproject/editproject.component';
import {DialogTargetComponent} from './home/dialog-target/dialog-target.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { OverlayModule } from '@angular/cdk/overlay';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule, MatIconModule,
    MatInputModule, MatListModule, MatNativeDateModule,
    MatSelectModule, MatSnackBarModule, MatTabsModule,
} from '@angular/material';

import { ProjectsFormComponent } from './profile/projects-form/projects-form.component';
import { HobbiesFormComponent } from './profile/hobbies-form/hobbies-form.component';
import { GalleryComponent } from './gallery/gallery.component';
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { NgxMaskModule} from 'ngx-mask';
import { EventsComponent} from './events/events.component';
import { OnlyCalendarComponent } from './calendar/only-calendar/only-calendar.component';
import {NewsListComponent} from './home/news/news-list/news-list.component';
import {NewsCompanyComponent} from './home/news/news-company/news-company.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { SuggestDialogComponent } from './home/news/suggest-dialog/suggest-dialog.component';
import { MoreInfoComponent } from './home/news/more-info/more-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        DashboardComponent,
        SidenavComponent,
        HeaderComponent,
        HomeComponent,
        ProfileComponent,
        EditprofileComponent,
        NewsComponent,
        TargetsComponent,
        TeamComponent,
        ProjectsComponent,
        CompanyComponent,
        OrganigramComponent,
        CalendarComponent,
        FaqComponent,
        ProjectsFormComponent,
        HobbiesFormComponent,
        GalleryComponent,
        EventsComponent,
        OnlyCalendarComponent,
        NewsListComponent,
        NewsCompanyComponent,
        SuggestDialogComponent,
        MoreInfoComponent,
        SearchComponent,
        DialogTargetComponent,
        EditprojectComponent
    ],
    entryComponents: [
        ProjectsFormComponent,
        HobbiesFormComponent,
        DialogTargetComponent,
        EditprojectComponent,
        SuggestDialogComponent,
        MoreInfoComponent,
    ],
    imports: [
        OverlayModule,
        FormsModule,
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
        FullCalendarModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocompleteModule,
        MatListModule,
        MatIconModule,
        MatSnackBarModule,
        GalleryModule,
        MatTabsModule,
        NgxMaskModule.forRoot(),
        FormsModule,
        MatProgressBarModule,
        HttpClientModule,
        NgxMaskModule.forRoot(),
    ],
    providers: [
        ProfileService,
        MatDatepickerModule,
       AuthGuard
    ]
})
export class DashboardModule { }
