import { Label } from "./Filter.styled";

export const Filter = ({ onChange, filter }) => {
  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={evt => onChange(evt.target.value)}
      />
    </Label>
  );
};
