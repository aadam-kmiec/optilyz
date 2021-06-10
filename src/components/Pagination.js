import styled from "styled-components";
import PropTypes from "prop-types";

import Button from "./Button";

const Pagination = ({ results, page, onChange, resultsPerPage }) => {
  const goToPreviousPage = () => onChange(page - 1);
  const goToNextPage = () => onChange(page + 1);

  const pageCount =
    results.totalResults % resultsPerPage
      ? parseInt(parseInt(results.totalResults) / resultsPerPage) + 1
      : parseInt(results.totalResults) / resultsPerPage;
  const isFirstPage = page === 1;
  const isLastPage = page === pageCount;

  return (
    <StyledPagination>
      {!isFirstPage && <Button onClick={goToPreviousPage}>Previous page</Button>}
      <div />
      {!isLastPage && <Button onClick={goToNextPage}>Next page</Button>}
    </StyledPagination>
  );
};

export default Pagination;

Pagination.propTypes = {
  results: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  resultsPerPage: PropTypes.number,
};

Pagination.defaultProps = {
  resultsPerPage: 10,
};

const StyledPagination = styled.div`
  width: 100%;
  max-width: 930px;
  display: flex;
  justify-content: space-between;
  // margin-top: 20px;
`;
