import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.scss']
})
export class MasonryComponent implements OnInit {

  masonryGrid!: HTMLElement;
  gridContainer!: HTMLElement;
  gridItems!: HTMLElement[];
  options: any = {
    columns: 7,
    columnGap: 40,
    rowGap: 40,
    itemSelector: '.post',
    container: '.post-list'
  }
  columnWidth!: number;
  totalGaps!: number;

  constructor(private el: ElementRef) {
    this.masonryGrid = <HTMLElement>el.nativeElement;
  }

  ngOnInit() {
    this.setContainer();

    window.addEventListener('resize', (event) => {
      this.updateView();
    });

    setInterval(() => this.updateView(), 1000);
  }

  ngAfterViewChecked() {
    this.setItems();
    this.calculateGridLayout();
    this.updateView();
  }

  setContainer() {
    this.gridContainer = this.masonryGrid.querySelector(this.options.container);
    this.gridContainer.style.position = 'relative';
    console.log(this.gridContainer.clientWidth);
  }

  setItems() {
    this.gridItems = [];
    const elements = this.masonryGrid.querySelectorAll(this.options.itemSelector);

    elements.forEach((el: HTMLElement) => {
      el.style.position = 'absolute';
      this.gridItems.push(el);
    });
  }

  calculateGridLayout() {
    this.totalGaps = (this.options.columns + 1) * this.options.columnGap;
    this.columnWidth = (this.gridContainer.clientWidth - this.totalGaps) / this.options.columns;
  }

  updateView() {
    this.gridItems.forEach((el, index) => {
      let columnNum = 0;

      if (index / this.options.columns >= 1) {
        columnNum = index % this.options.columns;
      } else {
        columnNum = index;
      }

      const left = (columnNum * this.columnWidth) + (this.options.columnGap * columnNum) + this.options.columnGap;

      el.style.left = `${left}px`;
      el.style.width = `${this.columnWidth}px`;


      // update top
      let previuseElementIndex = index - this.options.columns;
      let top = 0;

      while (previuseElementIndex >= 0) {
        top += this.gridItems[previuseElementIndex].clientHeight + this.options.rowGap;
        previuseElementIndex = previuseElementIndex - this.options.columns;
      }

      el.style.top = `${top}px`;
    })
  }

  check() {
    this.updateView();
  }

}
