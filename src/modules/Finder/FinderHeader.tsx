import React, { useMemo } from 'react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { HeaderL } from '../../components/Header';
import { Input } from '../../components/Input';
import { background } from '../../constants/colors.constants';
import { defaultHorizontalPadding, defaultBorderRadius } from '../../constants/css.constants';
import { useAuth } from '../../hooks/useAuth';
import { useGoogle } from '../../hooks/useGoogle';

export const FinderHeader = () => {
  const { user, clearUser } = useAuth();
  const { search, saveSearch, changeRequestProcessingStatus, clearSearchAndImagesState } =
    useGoogle();

  const greetings = useMemo(() => `Hello, ${user}`, [user]);

  const onSignoutClick = () => {
    clearUser();
    clearSearchAndImagesState();
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    saveSearch(e.target.value);
  };

  const onSearchEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      changeRequestProcessingStatus(true);
    }
  };

  const onSearchButtonClick = () => {
    changeRequestProcessingStatus(true);
  };

  return (
    <Container>
      <Container
        customHeight={{ value: 150, metric: 'px' }}
        colorized={background}
        padding={{ left: defaultHorizontalPadding, right: defaultHorizontalPadding }}
        flex
        verticalAlign="center"
        horizontalAlign="space-between">
        <div>
          <HeaderL>{greetings}</HeaderL>
        </div>
        <div>
          <Input
            placeholder="What are you looking for?"
            customWidth={{ value: 250, metric: 'px' }}
            value={search}
            onChange={onSearchChange}
            onKeyDown={onSearchEnterKeyPress}
          />
          <Button onClick={onSearchButtonClick}>search</Button>
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
  );
};
