import { closeEditor, updateCellValue } from "ka-table/actionCreators";
import { ICellEditorProps } from "ka-table/props";
import React from "react";
import { useState } from "react";

export interface RowValueChange {
  changedValueKey: string;
  rowKeyValue: string;
  value: string;
}

export const CustomEditor: React.FC<
  ICellEditorProps & { saveRow: (data: RowValueChange) => void }
> = ({ column, rowKeyValue, dispatch, value, saveRow }) => {
  const close = () => {
    dispatch(closeEditor(rowKeyValue, column.key));
  };
  const [editorValue, setValue] = useState(value);
  return (
    <div className="custom-editor">
      <textarea
        className="form-control"
        style={{ height: "100px" }}
        value={editorValue}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <button
        className="custom-editor-button custom-editor-button-save"
        onClick={() => {
          console.log({ column, rowKeyValue, dispatch, value });
          saveRow({
            changedValueKey: column.key,
            rowKeyValue,
            value: editorValue,
          });
          dispatch(updateCellValue(rowKeyValue, column.key, editorValue));
          close();
        }}
      >
        Save
      </button>
      <button
        className="custom-editor-button custom-editor-button-cancel"
        onClick={close}
      >
        Cancel
      </button>
    </div>
  );
};
