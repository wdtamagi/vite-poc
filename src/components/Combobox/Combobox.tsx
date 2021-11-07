import React, {
  HTMLProps,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { css, SerializedStyles, useTheme } from "@emotion/react";

import ComboBoxList from "./ComboBoxList";

import ArrowDownIcon from "../ArrowDownIcon";

interface ComboBoxProps extends HTMLProps<HTMLDivElement> {
  label: string;
  selectedValues: Array<string>;
  clearValues: () => void;
  options: Array<string>;
  handleSelect: (v: string) => void;
  customCss?: SerializedStyles;
}
const ComboBox: React.FC<ComboBoxProps> = ({
  label,
  selectedValues,
  clearValues,
  options,
  handleSelect,
  customCss,
  ...restProps
}) => {
  const {
    colors: { blue },
  } = useTheme();
  const [opened, setOpened] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  let optionsRefs: Array<HTMLDivElement> = [];

  const handleOpenSelect = useCallback(
    (event) => {
      switch (event.type) {
        case "click":
          setOpened(true);
          break;
        case "keydown":
          if (event.key === "Enter" || event.key === "ArrowDown") {
            event.preventDefault();
            setOpened(true);
          }
          break;
        default:
      }
    },
    [setOpened]
  );

  useEffect(() => {
    if (opened) {
      optionsRefs[0]?.focus();
    }
  }, [opened]);

  const setComboBoxItemRef = useCallback<(elem: HTMLDivElement) => void>(
    (elem) => {
      if (elem !== null) {
        optionsRefs.push(elem);
      }
    },
    [optionsRefs]
  );

  const handleCloseComboBoxList = useCallback(() => {
    setOpened(false);
    optionsRefs = [];
  }, [setOpened]);

  const handleComboBoxItemEvent = useCallback(
    (event, value, index, clear = null) => {
      switch (event.type) {
        case "click":
          if (clear != null) {
            clear();
            break;
          }
          handleSelect(value);
          break;
        case "keydown":
          if (event.key === "Enter" || event.key === " ") {
            if (clear != null) {
              clear();
              break;
            }
            handleSelect(value);
          }
          if (event.key === "ArrowUp") {
            event.preventDefault();
            optionsRefs[index - 1]?.focus();
          }
          if (event.key === "ArrowDown" || event.key === "Tab") {
            event.preventDefault();
            optionsRefs[index + 1]?.focus();
          }
          if (event.key === "Escape") {
            selectRef.current?.focus();
          }
          break;
        default:
      }
    },
    [selectRef, optionsRefs, handleSelect]
  );

  return (
    <div
      css={[
        css`
          position: relative;
        `,
        customCss,
      ]}
      {...restProps}
    >
      <div
        ref={selectRef}
        tabIndex={0}
        role="combobox"
        aria-expanded={opened}
        onClick={handleOpenSelect}
        onKeyDown={handleOpenSelect}
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.6rem;
          color: ${blue};
          width: 100%;
        `}
      >
        {label}
        <ArrowDownIcon
          css={css`
            transition: all 200ms ease-in;
            ${opened ? "transform: rotate(-180deg);" : ""}
          `}
        />
      </div>
      {opened && (
        <ComboBoxList
          closeComboBoxList={handleCloseComboBoxList}
          setComboBoxItemRef={setComboBoxItemRef}
          comboBoxItemEvent={handleComboBoxItemEvent}
          selectedOptions={selectedValues}
          options={options}
          clearValues={clearValues}
        />
      )}
    </div>
  );
};

export default memo(ComboBox);
