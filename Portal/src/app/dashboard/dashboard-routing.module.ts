import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import {NewsComponent} from './home/news/news.component';
import {TargetsComponent} from './home/targets/targets.component';
import {TeamComponent} from './home/team/team.component';
import {ProjectsComponent} from './home/projects/projects.component';
import {CompanyComponent} from './company/company.component';
import {OrganigramComponent} from './organigram/organigram.component';
import {CalendarComponent} from './calendar/calendar.component';
import {FaqComponent} from './faq/faq.component';
import {GalleryComponent} from './gallery/gallery.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { NewsListComponent } from './home/news/news-list/news-list.component';
import { NewsCompanyComponent } from './home/news/news-company/news-company.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },

            {
                path: 'home',
                component: HomeComponent,
                canActivateChild: [AuthGuard],
                children: [
                    { path: '', redirectTo: 'news', pathMatch: 'full' },
                    { path: 'news', component: NewsComponent,
                        children: [
                            { path: '', redirectTo: 'news_list', pathMatch: 'full' },
                            { path: 'news_list', component: NewsListComponent },
                            { path: 'news_company', component: NewsCompanyComponent },
                        ]
                    },
                    { path: 'targets', component: TargetsComponent },
                    { path: 'team', component: TeamComponent },
                    { path: 'projects', component: ProjectsComponent }
                ]
            },
            {
                path: 'profile',
                component: ProfileComponent,
                canActivateChild: [AuthGuard],
            },
            { path: 'edit', component: EditprofileComponent },
            { path: 'company', component: CompanyComponent },
            { path: 'organigram', component: OrganigramComponent },
            { path: 'calendar',  component: CalendarComponent, },
            { path: 'faq', component: FaqComponent },
            { path: 'gallery', component: GalleryComponent }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
