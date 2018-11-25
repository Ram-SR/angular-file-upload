import { Component } from "@angular/core";
import { parseCsv } from "./utils/csvUtils";
import { sortArrayByKeyValue } from "./utils/arrayUtils";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  chartData = [];
  chartDataLoaded = false;

  constructor() {}

  submitFile(csvData) {
    const parsedData = parseCsv(csvData);
    this.chartData = parsedData.map(element => {
      element.series = sortArrayByKeyValue(element.series, 'name', true);
      return element;
    });
    console.log(this.chartData);
    this.chartDataLoaded = true;
  }
}
