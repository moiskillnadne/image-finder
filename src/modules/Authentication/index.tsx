import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { HeaderL } from '../../components/Header';
import { Input } from '../../components/Input';
import { PageContainer } from '../../components/Page';
import { background } from '../../constants/colors.constants';
import { defaultBorderRadius } from '../../constants/css.constants';
import { RoutesPath } from '../../constants/routes.constants';
import { useAuth } from '../../hooks/useAuth';

export const AuthenticationPage = () => {
  const { user, setUser } = useAuth();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value);

  return (
    <PageContainer colorized={background}>
      <Container
        flex
        horizontalAlign="center"
        verticalAlign="center"
        customHeight={{ value: 100, metric: '%' }}>
        <div>
          <div>
            <HeaderL colorized>Hey Stranger</HeaderL>
          </div>
          <div>
            <HeaderL margin={{ bottom: 14 }}>Tell me your name</HeaderL>
          </div>
          <Container flex horizontalAlign="center">
            <Input
              value={user}
              onChange={onInputChange}
              placeholder="Your name"
              round={{ upperLeft: defaultBorderRadius, lowerLeft: defaultBorderRadius }}
            />
            <Link to={RoutesPath.ImageFinderPage}>
              <Button round={{ upperRight: defaultBorderRadius, lowerRight: defaultBorderRadius }}>
                {'>'}
              </Button>
            </Link>
          </Container>
        </div>
      </Container>
    </PageContainer>
  );
};
