import Link from "next/link";

export const Form = () => {
  let userName;
  let password;

  function handleChangeUserName(e) {
    userName = e.target.value;
  }

  function handleChangePassword(e) {
    password = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Please Log In</p>
      <input
        name="product name"
        type="text"
        placeholder="UserName"
        onChange={handleChangeUserName}
      />
      <input
        type="text"
        placeholder="Password"
        onChange={handleChangePassword}
      />
      <button type="submit">Log In</button>
    </form>
  );
};
