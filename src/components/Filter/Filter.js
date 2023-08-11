export const Filter = ({ onChange, filter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={evt => onChange(evt.target.value)}
      />
    </label>
  );
};
