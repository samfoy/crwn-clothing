export interface Section {
  title: string;
  imageUrl: string;
  size?: string;
  id: number;
  linkUrl: string;
}

export interface Collection {
  id: number;
  title: string;
  routeName: string;
  items: Item[]
}

export interface Item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
