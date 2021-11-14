import React, { KeyboardEvent, MouseEvent, useCallback } from "react";
import { css, useTheme } from "@emotion/react";

import ComboboxItem from "./ComboBoxItem";

interface ComboBoxListProps {
  closeComboBoxList: () => void;
  setComboBoxItemRef: (e: HTMLDivElement) => void;
  comboBoxItemEvent: (
    event: MouseEvent | KeyboardEvent,
    value: string,
    index: number,
    clear?: () => void
  ) => void;
  selectedOptions: Array<string>;
  options: Array<string>;
  clearValues?: () => void;
}
const ComboBoxList: React.FC<ComboBoxListProps> = ({
  closeComboBoxList,
  setComboBoxItemRef,
  comboBoxItemEvent,
  selectedOptions,
  options,
  clearValues,
}) => {
  const {
    colors: { grey, white },
  } = useTheme();

  const handleBlur = useCallback(
    (e) => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        closeComboBoxList();
      }
    },
    [closeComboBoxList]
  );

  return (
    <div
      onBlur={handleBlur}
      css={css`
        position: absolute;
        width: 100%;
        top: 25px;
        border-width: 0px 1px 1px;
        border-style: solid;
        border-color: ${grey["200"]};
        box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.1),
          inset 0px -1px 0px ${grey["200"]};
      `}
    >
      <ComboboxItem
        innerRef={setComboBoxItemRef}
        onKeyDown={(e) => comboBoxItemEvent(e, "", 0, clearValues)}
        onClick={(e) => comboBoxItemEvent(e, "", 0, clearValues)}
        selected={selectedOptions.length === 0}
      >
        All
      </ComboboxItem>
      {options.map((option, index) => (
        <ComboboxItem
          key={index}
          innerRef={setComboBoxItemRef}
          onKeyDown={(e) => comboBoxItemEvent(e, option, index + 1)}
          onClick={(e) => comboBoxItemEvent(e, option, index + 1)}
          selected={selectedOptions.includes(option)}
        >
          {option}
        </ComboboxItem>
      ))}
    </div>
  );
};

export default ComboBoxList;
