/* eslint-disable react/prop-types */
import FormGroup from "@mui/material/FormGroup";
import { TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
const ChecklistItem = ({
  editInputValue,
  handleDelete,
  handleEdit,
  htmlFor,
  type,
  _id,
  name,
  text,
  completed,
  handleUserClick,
  isEditClicked,
  setIsEditClicked,
  setEditInputValue,
  editItemId,
  setEditItemId,
}) => {
  return (
    <FormGroup>
      {!isEditClicked && (
        <>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() => handleUserClick(_id)}
                checked={completed}
                type={"checkbox"}
                id={`${_id}`}
                name={name}
              />
            }
            label={text}
            htmlFor={htmlFor}
          />

          <Button
            variant="outlined"
            onClick={() => handleDelete(_id)}
            id={`${_id}`}
          >
            Delete
          </Button>

          <Button
            variant="outlined"
            onClick={() => {
              setIsEditClicked(!isEditClicked);
              setEditInputValue(text);
              setEditItemId(_id);
            }}
            id={`${_id}`}
          >
            Edit
          </Button>
        </>
      )}
      {isEditClicked && editItemId === _id && (
        <>
          {" "}
          <TextField
            type="text"
            value={editInputValue}
            name="addToDo"
            onChange={(e) => setEditInputValue(e.target.value)}
            variant="filled"
          />
          <Button
            variant="outlined"
            onClick={() => {
              handleEdit(_id);
              setIsEditClicked(!isEditClicked);
            }}
            id={`${_id}`}
          >
            Update
          </Button>
        </>
      )}
    </FormGroup>
  );
};
export default ChecklistItem;
