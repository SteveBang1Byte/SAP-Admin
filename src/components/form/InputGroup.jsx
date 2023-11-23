import InputField from "./InputField";
import Label from "./Label";

const InputGroup = ({ label, placeholder, valueInput , typeInput, onChange, required, customClassName }) => {
  return (
    <div className={`py-2 ${customClassName !== undefined ? customClassName : ''}`}>
      <Label title={label} />
      <InputField
        value={valueInput}
        placeholder={placeholder}
        type = {typeInput}
        onChange={onChange}
        required={required}
      />
    </div>

);
};

export default InputGroup;
