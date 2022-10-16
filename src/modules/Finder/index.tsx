import { PageContainer } from '../../components/Page';
import { FinderHeader } from './FinderHeader';
import { FinderView } from './FinderView';

export const Finder = () => {
  return (
    <PageContainer>
      <FinderHeader />
      <FinderView />
    </PageContainer>
  );
};
