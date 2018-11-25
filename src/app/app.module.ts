import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { NgxChartsModule } from "@swimlane/ngx-charts";

import { AppComponent } from "./app.component";
import { LineChartComponent } from "./components/line-chart/line-chart.component";
import { UploadFormComponent } from "./components/upload-form/upload-form.component";

@NgModule({
  declarations: [AppComponent, LineChartComponent, UploadFormComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
