import styled from "styled-components";
import PropTypes from "prop-types";

const Layout = ({ children }) => <StyledLayout>{children}</StyledLayout>;

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

const StyledLayout = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #487de7;
  min-height: 100vh;
  padding: 50px;
`;
