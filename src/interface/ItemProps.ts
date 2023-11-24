interface ItemProps {
  id: number;
  text: string;
  edit?: (id: number, text: string) => void;
  checked: boolean;
  done?: (id: number) => void;
  remove?: (id: number) => void;
}

export default ItemProps;
