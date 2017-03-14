import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Styling
import { MaterialModule} from '@angular/material';
import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Routing
//import { appRoutingProviders, routing } from './app.routes';

// Components
import { AppComponent } from './app.component';
//import { SensitivityComponent } from './sensitivity/sensitivity.component';

// Services
import { AppServiceService } from './app-service.service';
import { PecoIntervalComponent } from './shared/peco-interval/peco-interval.component';
import { PecoConsumptionComponent } from './shared/peco-consumption/peco-consumption.component';
import { PecoDemandComponent } from './shared/peco-demand/peco-demand.component';
import { PplIntervalComponent } from './shared/ppl-interval/ppl-interval.component';
import { BarchartComponent } from './shared/barchart/barchart.component';

@NgModule({
  declarations: [
    AppComponent,
    PecoIntervalComponent,
    PecoConsumptionComponent,
    PecoDemandComponent,
    PplIntervalComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    NgbModule.forRoot()
    // routing
  ],
  providers: [
    // appRoutingProviders,
    AppServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
