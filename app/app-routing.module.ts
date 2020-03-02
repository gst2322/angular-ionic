import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { ContactmeComponent } from './contactme/contactme.component';
import { OverviewComponent } from './overview/overview.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';
import { PropertiesComponent } from './properties/properties.component';
import { WorkComponent } from './work/work.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { PayoutComponent } from './payout/payout.component';
import { AddToGoComponent } from './add-to-go/add-to-go.component';


const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'contactme', component: ContactmeComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'properties', component: PropertiesComponent },
    { path: 'payment', component: PaymentmethodComponent },
    { path: 'work', component: WorkComponent },
    { path: 'transactionhistory', component: TransactionHistoryComponent },
    { path: 'addtogo', component: AddToGoComponent },
    { path: 'payoutcomponent', component: PayoutComponent }
  ]),
  { path: 'payoutcomponent', component: PayoutComponent },
  { path: 'addtogo', component: AddToGoComponent },
  { path: 'transactionhistory', component: TransactionHistoryComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'payment', component: PaymentmethodComponent },
  { path: 'work', component: WorkComponent },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: 'tabs/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
