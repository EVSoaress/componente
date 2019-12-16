import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss']
})
export class ProgressCircleComponent implements OnInit {

  @Input("progresso") progresso: any;

  constructor() { }

  ngOnInit() {
    this.setProgress(this.progresso);
  }

  setProgress(valor: any) {
    let css = document.getElementsByClassName('progress-circle-prog') as unknown as HTMLElement;
    css = css[0];
    css.style.strokeDasharray = (((this.progresso) * 345) / 100) + ' 999';
  }

}
