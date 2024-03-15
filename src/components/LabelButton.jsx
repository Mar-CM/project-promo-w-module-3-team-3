import '../scss/components/LabelButton.scss';

const LabelButton = (props) => {
  return (
    <label htmlFor={props.htmlFor} className="button">
      {props.text}
    </label>
  );
};

export default LabelButton;
