export type Position = {
  latitude: number;
  longitude: number;
};

export type Route = {
  title: string;
  startPosition: Position;
  endPosition: Position;
};
