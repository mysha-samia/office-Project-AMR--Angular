import {Component, Input, OnInit} from '@angular/core';
import {GraphDataTypeModel} from "../../models/GraphDataTypeModel";
import {GraphService} from "../../services/graph.service";
import * as Highcharts from "highcharts";

@Component({
  selector: 'app-user-refuse-to-take-telemedicine-but-buy-medicine',
  templateUrl: './user-refuse-to-take-telemedicine-but-buy-medicine.component.html',
  styleUrls: ['./user-refuse-to-take-telemedicine-but-buy-medicine.component.scss']
})
export class UserRefuseToTakeTelemedicineButBuyMedicineComponent implements OnInit {

  @Input() data: GraphDataTypeModel[] | undefined = [];
  dynamicWidth: number = 100;

  constructor(private service: GraphService) {
  }

  ngOnInit(): void {
    if (this.data?.length) {
      this.dynamicWidth = this.data?.length * 100;
    }

    if (this.data !== null)
      this.diagnosticChart();
  }

  diagnosticChart() {
    Highcharts.chart('userRefuseToTakeTelemedicineButBuyMedicine', {
      chart: {
        width: this.dynamicWidth
      },
      title: {
        text: '',
        align: "left"
      },
      plotOptions: {
        column: {
          /* Here is the setting to limit the maximum column width. */
          maxPointWidth: 30
        },
        series: {
          dataLabels: {
            enabled: true
          }
        }
      },
      xAxis: {
        categories: this.service.getCategory(this.data),
        lineColor: '#ffffff',
      },
      yAxis: {
        labels: {
          enabled: false
        },
        gridLineWidth: 0,
        title: {
          text: null
        }
      },
      colors: [
        '#012fac',
        '#1fc7ce',
        '#aac1ff',
        '#cb6cc8',
        '#2dd6aa',
        '#5874c1',
        '#f5d037',
        '#5932ea',
        '#f5997b',
      ],
      series: [{
        type: 'column',
        name: 'Total',
        colorByPoint: true,
        data: this.service.getChartData(this.data),
        showInLegend: false,
      }],
      credits: {
        enabled: false
      },
    });
  }
}
