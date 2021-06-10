import styled from "styled-components";
import PropTypes from "prop-types";

const ResultsList = ({ results, loading }) => (
  <>
    {results && (
      <StyledListWrapper>
        <StyledList>
          {results?.map(({ Title, Poster }) => (
            <StyledListContainer>
              {Poster === "N/A" ? (
                <StyledTitle>{Title}</StyledTitle>
              ) : (
                <StyledImage src={Poster} alt={`${Title} movie poster`} heigh={220} />
              )}
            </StyledListContainer>
          ))}
        </StyledList>
      </StyledListWrapper>
    )}

    {loading ? <p>Loading...</p> : <p>...</p>}
    {!loading && !results && <p>Results not found</p>}
  </>
);

export default ResultsList;

ResultsList.propTypes = {
  results: PropTypes.object,
  loading: PropTypes.bool,
};

ResultsList.defaultProps = {
  results: undefined,
  loading: undefined,
};

const StyledListWrapper = styled.div`
  padding: 30px;
  background-color: white;
  border-radius: 20px;
  height: 530px;
}
`;

const StyledListContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height 220px;
max-width: 150px;
background-color: #ffbc3e80;
border-radius: 20px
`;

const StyledList = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(5, 1fr);
`;

const StyledTitle = styled.p`
  padding: 12px;
  color: #222222;
  overflow: hidden;
  height: 180px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;
