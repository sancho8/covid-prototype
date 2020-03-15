import { Component, OnInit } from '@angular/core';
import theme from '../../../@vex/utils/tailwindcss';

import icErrorOutline from '@iconify/icons-ic/twotone-error';
import icHighlightOff from '@iconify/icons-ic/twotone-highlight-off';
import icDone from '@iconify/icons-ic/twotone-done';
import icHelpOutline from '@iconify/icons-ic/twotone-help';
import icArrowBack from '@iconify/icons-ic/twotone-arrow-back';
import icEmail from '@iconify/icons-ic/twotone-email';
import icDownload from '@iconify/icons-ic/cloud-download';

@Component({
  selector: 'vex-analyze-page',
  templateUrl: './analyze-page.component.html',
  styleUrls: ['./analyze-page.component.scss']
})
export class AnalyzePageComponent implements OnInit {

  icErrorOutline = icErrorOutline;
  icHighlightOff = icHighlightOff;
  icDone = icDone;
  icHelpOutline = icHelpOutline;
  icArrowBack = icArrowBack;
  icDownload = icDownload;
  icEmail = icEmail;

  theme = theme;

  constructor() { }

  ngOnInit() {
  }

}
