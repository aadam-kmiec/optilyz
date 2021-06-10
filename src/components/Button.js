import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({ children, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  props: PropTypes.object,
};

Button.defaultProps = {
  props: undefined,
};

const StyledButton = styled.button`
  padding: 3px 13px;
  background: #00dab6;
  border-radius: 5px;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  color: #222222;
  cursor: pointer;
`;
