import { useMemo } from 'react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { HeaderL } from '../../components/Header';
import { PageContainer } from '../../components/Page';
import { background } from '../../constants/colors.constants';
import { defaultBorderRadius, defaultHorizontalPadding } from '../../constants/css.constants';
import { useAuth } from '../../hooks/useAuth';

export const Finder = () => {
  const { user, clearUser } = useAuth();

  const greetings = useMemo(() => `Hello, ${user}`, [user]);

  const onSignoutClick = () => {
    clearUser();
  };

  return (
    <PageContainer>
      <Container>
        <Container
          height={150}
          colorized={background}
          padding={{ left: defaultHorizontalPadding, right: defaultHorizontalPadding }}
          flex
          verticalCenter
          horizintalSpaceBetween>
          <div>
            <HeaderL>{greetings}</HeaderL>
          </div>
          <div>
            <Button
              onClick={onSignoutClick}
              round={{
                upperRight: defaultBorderRadius,
                upperLeft: defaultBorderRadius,
                lowerLeft: defaultBorderRadius,
                lowerRight: defaultBorderRadius,
              }}>
              Sign out
            </Button>
          </div>
        </Container>
      </Container>
    </PageContainer>
  );
};
