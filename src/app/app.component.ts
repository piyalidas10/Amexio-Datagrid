import { Component} from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  selectedData: any;
  griddata : any[];


  constructor(private employeeData: EmployeeService) {
    this.griddata = this.employeeData.employeeList;
    console.log(this.griddata);
  }

  rowSelected(data: any){
    this.selectedData = data;
  }

}
