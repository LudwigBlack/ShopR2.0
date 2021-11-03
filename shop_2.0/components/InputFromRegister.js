const RegisterInput = ({ place, typo, change, valueInput, nameInput }) => {
  return (
    <input
      placeholder={place}
      type={typo}
      onChange={change}
      value={valueInput}
      name={nameInput}
    />
  );
};

export default RegisterInput;
