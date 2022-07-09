import { Container, Info, Title } from "./styled.component";
import { PageContainer } from "../../../styles/common.component";

const NotFound = () => {
  return (
    <PageContainer>
      <Container>
        <Title content="404">404</Title>

        <Info content="Page Not Found">Page Not Found</Info>
      </Container>
    </PageContainer>
  );
};

export default NotFound;
