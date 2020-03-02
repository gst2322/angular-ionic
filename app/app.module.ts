import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { SettingsModule } from './settings/settings.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactmeComponent } from './contactme/contactme.component';
import { SaitejaRoutingModule } from './saiteja-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentmethodComponent } from './paymentmethod/paymentmethod.component';
import { PropertiesComponent } from './properties/properties.component';
import { MypopoverComponent } from './mypopover/mypopover.component';
import { WorkComponent } from './work/work.component';
import { WorkEducationDetailsModule } from './work-education-details/work-education-details.module';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { PayoutComponent } from './payout/payout.component';
import { AddToGoComponent } from './add-to-go/add-to-go.component';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    IonicModule.forRoot(),
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    SettingsModule,
    WorkEducationDetailsModule,
    AppRoutingModule,
    SaitejaRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [
    AppComponent,
    ContactmeComponent,
    OverviewComponent,
    ProfileComponent,
    PaymentmethodComponent,
    PropertiesComponent,
    MypopoverComponent,
    WorkComponent,
    TransactionHistoryComponent,
    PayoutComponent,
    AddToGoComponent
  ],
  providers: [],
  entryComponents: [MypopoverComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
