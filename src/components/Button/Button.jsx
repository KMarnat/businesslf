function Button({ modifier, children }) {
  return <button className={`btn btn--${modifier}`}>{children}</button>;
}

export default Button;
