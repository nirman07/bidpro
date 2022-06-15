import React from "react";
import { PrimaryTextbox } from "./Textbox.styles";
import { TextboxProps } from "./Textbox.types";

function Textbox(props: TextboxProps) {
  return (
    <PrimaryTextbox>
      <input type="text" />
    </PrimaryTextbox>
  );
}

export default Textbox;
