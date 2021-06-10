import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import PropTypes from "prop-types";

function InputSearch({ label, name, ...props }) {
  const { register } = useFormContext();

  return (
    <StyledInputSearchContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInputSearch label={label} {...register(name)} {...props} />
    </StyledInputSearchContainer>
  );
}

export default InputSearch;

InputSearch.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  props: PropTypes.object,
};

InputSearch.defaultProps = {
  label: undefined,
  props: undefined,
};

const StyledInputSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  margin-bottom: 6px;
`;

const StyledInputSearch = styled.input`
  border: 1px solid #d5def0;
  border-radius: 5px;
  padding: 4px 10px;
  font-size: 15px;
`;
