import { Component, ElementRef, OnInit } from '@angular/core';
import { MasonryBreakpoint, MasonryOptions } from './types';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.scss']
})
export class MasonryComponent implements OnInit {

  currentBreakpoint!: MasonryBreakpoint;
  columnWidth!: number;
  gridContainer!: HTMLElement | null;
  gridItems!: HTMLElement[];
  masonryGrid!: HTMLElement;
  totalGaps!: number;

  options: MasonryOptions = {
    breakpointsContainer: 'window', // specifies the element to check the breakpoints with id
    itemSelector: '.post',
    container: '.post-list',
    breakpoints: [
      {
        maxWidth: 578,
        settings: {
          columns: 2,
          columnGap: 16,
          rowGap: 30
        }
      },
      {
        maxWidth: 768,
        settings: {
          columns: 3,
          columnGap: 16,
          rowGap: 30
        }
      },
      {
        maxWidth: 992,
        settings: {
          columns: 4,
          columnGap: 16,
          rowGap: 30,
        }
      },
      {
        maxWidth: 1200,
        settings: {
          columns: 6,
          columnGap: 16,
          rowGap: 30,
        }
      },
      {
        maxWidth: 1440,
        settings: {
          columns: 7,
          columnGap: 16,
          rowGap: 30,
        }
      }
    ]
  }

  constructor(private el: ElementRef) {
    this.masonryGrid = <HTMLElement>el.nativeElement;
  }

  ngOnInit() {
    this.sortBreakpoints();
    this.setCurrentBreakpoint();
    this.setContainer();

    setInterval(() => {
      this.setCurrentBreakpoint();
      this.updateView();
    }, 500);
  }

  ngAfterViewChecked() {
    this.setItems();
    this.calculateGridLayout();
    this.updateView();
  }

  // Makes grid container ready by setting its position to relative
  setContainer() {
    this.gridContainer = this.masonryGrid!.querySelector(this.options.container);
    this.gridContainer!.style.position = 'relative';
  }

  setItems() {
    this.gridItems = [];
    const elements = this.masonryGrid.querySelectorAll(this.options.itemSelector);

    elements.forEach((el) => {
      const HTMLElement = <HTMLElement>el;

      HTMLElement.style.position = 'absolute';
      this.gridItems.push(HTMLElement);
    });
  }

  calculateGridLayout() {
    this.totalGaps = (this.currentBreakpoint.settings.columns + 1) * this.currentBreakpoint.settings.columnGap;
    this.columnWidth = (this.gridContainer!.clientWidth - this.totalGaps) / this.currentBreakpoint.settings.columns;
  }

  updateView() {
    this.gridItems.forEach((el, index) => {
      let columnNum = 0;

      if (index / this.currentBreakpoint!.settings.columns >= 1) {
        columnNum = index % this.currentBreakpoint!.settings.columns;
      } else {
        columnNum = index;
      }

      const left = (columnNum * this.columnWidth) + (this.currentBreakpoint!.settings.columnGap * columnNum) + this.currentBreakpoint!.settings.columnGap;

      el.style.left = `${left}px`;
      el.style.width = `${this.columnWidth}px`;


      // update top
      let previuseElementIndex = index - this.currentBreakpoint!.settings.columns;
      let top = 0;

      while (previuseElementIndex >= 0) {
        top += this.gridItems[previuseElementIndex].clientHeight + this.currentBreakpoint!.settings.rowGap;
        previuseElementIndex = previuseElementIndex - this.currentBreakpoint!.settings.columns;
      }

      el.style.top = `${top}px`;
    })
  }

  check() {
    this.updateView();
  }

  sortBreakpoints() {
    this.options.breakpoints = this.options.breakpoints.sort((breakpointA, breakpointB) =>
      breakpointA.maxWidth - breakpointB.maxWidth
    );
  }

  setCurrentBreakpoint() {

    let breakpointContainer: Window | Object | HTMLElement | null;

    // Default breakpoint
    this.currentBreakpoint = this.options.breakpoints[this.options.breakpoints.length - 1];

    // Begin to set the breakpoints container
    if (this.options.breakpointsContainer === 'window'
      || this.options.breakpointsContainer === undefined
      || this.options.breakpointsContainer === null
      || this.options.breakpointsContainer === ''
    ) {
      breakpointContainer = window;
    } else {
      breakpointContainer = document.getElementById(`#${this.options.breakpointsContainer}`);
    }
    // End to set the breakpoints container

    // Begin to set the current breakpoint
    const breakpointByFind = this.options.breakpoints.find((breakpoint) => {

      if (breakpointContainer instanceof Window) {
        if (breakpointContainer.innerWidth < breakpoint.maxWidth) {
          return true;
        }
      }

      if (breakpointContainer instanceof HTMLElement) {
        if (breakpointContainer.clientWidth < breakpoint.maxWidth) {
          return true;
        }
      }

      return false;

    });
    // Begin to set the current breakpoint

    // Replace the default breakpoint if any other breakpoint is found
    if (breakpointByFind) {
      this.currentBreakpoint = breakpointByFind;
    }

  }

}
