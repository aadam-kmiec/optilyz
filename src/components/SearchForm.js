import styled from "styled-components";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import InputSearch from "./InputSearch";
import Button from "./Button";

const SearchForm = ({ onSearch }) => {
  const methods = useForm();
  const { handleSubmit } = methods;

  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={handleSubmit(onSearch)}>
        <InputSearch label="Search movie" name="search" autoFocus />
        <Button type="submit">Search</Button>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

const StyledFormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
`;
