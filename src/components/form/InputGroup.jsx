import InputField from "./InputField";
import Label from "./Label";

const InputGroup = ({ label, placeholder, valueInput , typeInput, onChange }) => {
  return (
    <div className="py-2">
      <Label title={label} />
      <InputField
        value={valueInput}
        placeholder={placeholder}
        type = {typeInput}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroup;
