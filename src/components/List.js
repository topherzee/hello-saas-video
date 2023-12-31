import React from "react";
import { EditableArea } from "@magnolia/react-editor";

const List = (props) => {
  const { items } = props;

  return (
    <>
      <ul className="List">
        {items && (
          <EditableArea
            content={items}
            parentTemplateId={props.metadata["mgnl:template"]}
          />
        )}
      </ul>
    </>
  );
};

export default List;
