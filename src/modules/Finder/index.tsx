import { useMemo } from 'react';
import { Container } from '../../components/Container';
import { PageContainer } from '../../components/Page';
import { accent } from '../../constants/colors.constants';
import { useGoogle } from '../../hooks/useGoogle';
import { FinderHeader } from './FinderHeader';
import { FinderView } from './FinderView';

export const Finder = () => {
  const { resultsBySearch } = useGoogle();

  const findByKeyword = useMemo(() => {
    return (
      <p>
        {'Results by: '}
        <span style={{ color: accent }}>{resultsBySearch}</span>
      </p>
    );
  }, [resultsBySearch]);

  return (
    <PageContainer>
      <FinderHeader />

      {resultsBySearch && (
        <Container
          flex
          horizontalAlign="center"
          verticalAlign="center"
          customHeight={{ value: 50, metric: 'px' }}
          customWidth={{ value: 100, metric: '%' }}>
          <Container>{findByKeyword}</Container>
        </Container>
      )}

      <FinderView />
    </PageContainer>
  );
};
