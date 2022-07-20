class Point {
    x: number;
    y: number;
  }
   
  const pt = new Point();
  pt.x = 0;
  pt.y = 0;
////////////////////////////////
  class Points {
    x = 0;
    y = 0;
  }
   
  const ptr = new Points();
  // Prints 0, 0
  console.log(`${pt.x}, ${pt.y}`);

  //////////////////////////////

  class GoodGreeter {
    name: string;
   
    constructor() {
      this.name = "hello";
    }
  }

  ////////////////////////////

  class OKGreeter {
    // Not initialized, but no error
    name!: string;
  }


