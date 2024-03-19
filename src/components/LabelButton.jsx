import PropTypes from "prop-types";

import "../scss/components/LabelButton.scss";

const LabelButton = (props) => {
	return (
		<label htmlFor={props.htmlFor} className="button">
			{props.text}
		</label>
	);
};

LabelButton.propTypes = {
	htmlFor: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default LabelButton;
