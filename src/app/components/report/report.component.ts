import { Component, OnInit, ViewChild } from "@angular/core";
import * as moment from "moment";
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexPlotOptions,
  ApexTheme,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit{
  // @ViewChild("chart")
  charts:ChartComponent|any=[]
  color="#8BDF8E"
  chart_type="area" // |area|line|
  stroke_curve_type="smooth" // | straight | smooth |
  chart_title = "default title"
  y_axis =  [
    "01 Jan",
    "02 Jan",
    "03 Jan",
    "04 Jan",
    "05 Jan",
    "06 Jan",
    "07 Jan",
    "08 Jan",
    "09 Jan",
    "10 Jan",
  ]
  chart: ChartComponent | any;
  monochromepieChart = {
    series: [25, 15, 44, 55, 41, 17],
    chart: {
      width: "100%",
      type: "pie"
    },
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    theme: {
      monochrome: {
        enabled: true
      }
    },
    title: {
      text: "Number of leads"
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };
  timelineChart = {
    series: [
      {
        data: [
          {
            x: "Analysis",
            y: [
              new Date("2019-02-27").getTime(),
              new Date("2019-03-04").getTime()
            ],
            fillColor: "#008FFB"
          },
          {
            x: "Design",
            y: [
              new Date("2019-03-04").getTime(),
              new Date("2019-03-08").getTime()
            ],
            fillColor: "#00E396"
          },
          {
            x: "Coding",
            y: [
              new Date("2019-03-07").getTime(),
              new Date("2019-03-10").getTime()
            ],
            fillColor: "#775DD0"
          },
          {
            x: "Testing",
            y: [
              new Date("2019-03-08").getTime(),
              new Date("2019-03-12").getTime()
            ],
            fillColor: "#FEB019"
          },
          {
            x: "Deployment",
            y: [
              new Date("2019-03-12").getTime(),
              new Date("2019-03-17").getTime()
            ],
            fillColor: "#FF4560"
          }
        ]
      }
    ],
    chart: {
      height: 350,
      type: "rangeBar"
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        dataLabels: {
          hideOverflowingLabels: false
        }
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function(val:any, opts:any) {
        var label = opts.w.globals.labels[opts.dataPointIndex];
        var a = moment(val[0]);
        var b = moment(val[1]);
        var diff = b.diff(a, "days");
        return label + ": " + diff + (diff > 1 ? " days" : " day");
      },
      style: {
        colors: ["#f3f4f5", "#fff"]
      }
    },
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      show: false
    },
    grid: {
      row: {
        colors: ["#f3f4f5", "#fff"],
        opacity: 1
      }
    }
  };
  public barChart = {
    series: [
      {
        name: "basic",
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }
    ],
    chart: {
      type: "bar",
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      
      categories: [
        "South Korea",
        "Canada",
        "United Kingdom",
        "Netherlands",
        "Italy",
        "France",
        "Japan",
        "United States",
        "China",
        "Germany"
      ]
    }
  };
  public columnChart = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }
    ],
    chart: {
      type: "bar",
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded"
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct"
      ]
    },
    yaxis: {
      title: {
        text: "$ (thousands)"
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function(val:any) {
          return "$ " + val + " thousands";
        }
      }
    }
  };
  public lineAreaChart: Partial<ChartOptions>| any ={
    series: [],
    colors : [],
    fill   : {
      colors : ['#FB7185'],
      opacity: 0.9
    },
    chart: {
      height: 250,
      type: ""
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 3,
      curve: "smooth",
      dashArray: [0, 8, 5]
    },
    title: {
      text: "",
      align: "left",
      style: {
        color: "white"
      }
    },
    legend: {
      tooltipHoverFormatter: function(val:any, opts:any) {
        return (
          val +
          " - <strong>" +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          "</strong>"
        );
      }
    },
    markers: {
      size: 3,
      hover: {
        sizeOffset: 2
      }
    },
    labels: 'my labels',
    xaxis: {
      labels: {
        trim: false
      },
      categories: [ ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function(val:any) {
              return val + " (mins)";
            }
          }
        },
        {
          title: {
            formatter: function(val:any) {
              return val + " per session";
            }
          }
        },
        {
          title: {
            formatter: function(val:any) {
              return val;
            }
          }
        }
      ]
    },
    grid: {
      borderColor: "#f1f1f1"
    }
  };

  constructor() {

  }
  create_chart(){
    this.lineAreaChart.series.push({name: "iijfr", data:[20,50,80,10,2,64,1,42,151,7]},{name: "ineicp", data:[2,5,45,170,24,64,14,48,15,27]})
    this.lineAreaChart.colors = [this.color]
    this.lineAreaChart.chart.type = this.chart_type
    this.lineAreaChart.stroke.curve= this.stroke_curve_type
    this.lineAreaChart.title.text = this.chart_title
    this.lineAreaChart.xaxis.categories = this.y_axis
    this.charts.push(this.lineAreaChart)
    this.charts.push(this.barChart)
    this.charts.push(this.columnChart)
    this.charts.push(this.timelineChart)
    this.charts.push(this.monochromepieChart)
  }
  ngOnInit(): void {
    this.create_chart()
  }
}
