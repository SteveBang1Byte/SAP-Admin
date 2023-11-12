const InputField = ({value, placeholder, type = 'text', onChange}) => {
  
    return (
        <>
        <input
        type={type}
        className="w-full border px-4 py-2 rounded-md border-2 focus:outline-none focus:border-indigo-400"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      </>
    );

}

export default InputField;