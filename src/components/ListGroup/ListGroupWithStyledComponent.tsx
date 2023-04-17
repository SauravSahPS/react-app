import { MouseEvent } from "react";
import { useState } from "react";
import styles from "./ListGroupWithVanilaCSS.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: disc;
  padding: 8%;
  font-size: larger;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  background: ${(props) => (props.active ? "skyblue" : "none")};
`;

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //items = [];  //if items.length ===0 then print <p>No Items Found</p>

  //const handleClick = (event: MouseEvent) => console.log(event);

  //let selectedItem = 0;

  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedItem}
            key={item}
            onClick={() => {
              setSelectedItem(index);
              onSelectItem(item);
            }}
            //onClick={handleClick}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
