export interface MasonryOptions {
  breakpointsContainer: string,
  itemSelector: string,
  container: string,
  breakpoints: MasonryBreakpoint[]
}

export interface MasonryBreakpoint {
  maxWidth: number,
  settings: {
    columns: number,
    columnGap: number,
    rowGap: number
  }
}
