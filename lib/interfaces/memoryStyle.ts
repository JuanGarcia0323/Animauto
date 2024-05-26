interface IMemoryBody {
  x: number;
  y: number;
  width: number;
  height: number;
  className: string;
  date: string;
  element: Element;
}

interface IMemoryV2 {
  [key: string]: string;
}

interface IMemory {
  [key: string]: IMemoryBody;
}

export type { IMemoryBody, IMemory, IMemoryV2 };
