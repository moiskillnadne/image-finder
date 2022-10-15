import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { HeaderL } from '../../components/Header';
import { Input } from '../../components/Input';
import { PageContainer } from '../../components/Page';
import { borderRadius } from '../../constants/css.constants';
import { useAuth } from '../../hooks/useAuth';

export const AuthenticationPage = () => {
  const { user, setUser } = useAuth();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value);
  const onButtonClick = () => {};

  return (
    <PageContainer>
      <Container flex horizontalCenter verticalCenter>
        <div>
          <div>
            <HeaderL colorized>Hey Stranger</HeaderL>
          </div>
          <div>
            <HeaderL margin={{ bottom: 14 }}>Tell me your name</HeaderL>
          </div>
          <Container flex horizontalCenter>
            <Input
              value={user}
              onChange={onInputChange}
              placeholder="Your name"
              round={{ upperLeft: borderRadius, lowerLeft: borderRadius }}
            />
            <Link to={'/home'}>
              <Button
                onClick={onButtonClick}
                round={{ upperRight: borderRadius, lowerRight: borderRadius }}>
                {'>'}
              </Button>
            </Link>
          </Container>
        </div>
      </Container>
    </PageContainer>
  );
};
