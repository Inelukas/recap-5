import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  margin: 15vh 0%;
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
}
