import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { DashboardComponent } from '../app/dashboard/dashboard.component';
    import { TemplateFormComponent } from '../app/template-form/template-form.component';
   import { NoRelationPassComponent } from '../app/no-relation-pass/no-relation-pass.component'
    const routes: Routes = [
        {
            path: 'dashboard',
            component: DashboardComponent,
        },{
          path: '',
          component: DashboardComponent,
      },
      
      {
        path: 'viewChildPass',
        component: NoRelationPassComponent,
    },
      {
        path: 'templateForm',
        component: TemplateFormComponent,
    },
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }