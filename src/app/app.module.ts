import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";



import { AppComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { SonComponent } from './family/son/son.component';
import { DaughterComponent } from './family/daughter/daughter.component';
import { FordirectiveComponent } from './directive/fordirective/fordirective.component';
import { NumbersortPipe } from './custompipe/numbersort.pipe';
import { StringsortPipe } from './custompipe/stringsort.pipe';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformsComponent } from './forms/reactiveforms/reactiveforms.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { ParentformComponent } from './forms/parentform/parentform.component';
import { TaskmanagerComponent } from './task/taskmanager/taskmanager.component';
import { LocalServiceComponent } from './consume/local-service/local-service.component';
import { LocalService2Component } from './consume/local-service2/local-service2.component';
import { RemoteApiComponent } from './consume/remote-api/remote-api.component';
import { ViewUserDetailComponent } from './consume/view-user-detail/view-user-detail.component';
import { LiveSearchPipe } from './custompipe/live-search.pipe';
import { CustomerComponent } from './bank/customer/customer.component';


@NgModule({
            imports: [
                      BrowserModule,
                      FormsModule,
                      ReactiveFormsModule,
                      HttpClientModule,
                      RouterModule.forRoot([
                        {
                           path:'',
                           redirectTo:'form',
                           pathMatch:'full' 
                        },
                        {
                          path:'family',
                          component:FatherComponent
                        },
                        {
                          path:'directive',
                          component:FordirectiveComponent
                        },
                        {
                          path:'form',
                          component:ParentformComponent,
                          children:[
                                      {
                                          path:'',
                                          redirectTo:'templateform',
                                          pathMatch:'full' 
                                      },
                                      {
                                        path:'templateform',
                                        component:TemplateformComponent
                                      },
                                      {
                                        path:'reactiveform',
                                        component:ReactiveformsComponent
                                      }
                                    ]
                        },
                        {
                          path:'task',
                          component:TaskmanagerComponent
                        },
                        {
                          path:'local',
                          component:LocalServiceComponent
                        },
                        {
                          path:'local2',
                          component:LocalService2Component
                        },
                        {
                          path:'remote',
                          component:RemoteApiComponent
                        },
                        {
                          path:'viewuser/:myid',
                          component:ViewUserDetailComponent
                        },
                        {
                          path:'bank',
                          component:CustomerComponent
                        },
                        {
                          path:'**',
                          component:NotfoundComponent
                        }
                        
                      ])
                    ],
            declarations: [
              AppComponent,
              FatherComponent, 
              SonComponent,  
              DaughterComponent,
              FordirectiveComponent,
              NumbersortPipe,
              StringsortPipe,
              TemplateformComponent,
              ReactiveformsComponent,
              NotfoundComponent,
              ParentformComponent,
              TaskmanagerComponent,
              LocalServiceComponent,
              LocalService2Component,
              RemoteApiComponent,
              ViewUserDetailComponent,
              LiveSearchPipe,
              CustomerComponent
              
            ],
             providers: [],
             bootstrap: [AppComponent]
})
export class AppModule { }
