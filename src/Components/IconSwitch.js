function IconSwitch(props) {
  const { icon, onSwitch } = props;

  const handleClick = (evt) => {
    props.onSwitch(props.icon);
  };

  return (
    <button className="material-icons" onClick={handleClick}>
      {props.icon}
    </button>
  );
}

export default IconSwitch;
