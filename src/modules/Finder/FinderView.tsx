import { useEffect } from 'react';
import { Container } from '../../components/Container';
import { defaultHorizontalPadding } from '../../constants/css.constants';
import { useGoogle } from '../../hooks/useGoogle';
import { FinderCard } from './FinderCard';

export const FinderView = () => {
  const { images } = useGoogle();

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <Container
      flex
      flexWrap
      horizontalAlign="space-around"
      gap={25}
      padding={{
        top: defaultHorizontalPadding,
        bottom: defaultHorizontalPadding,
        left: defaultHorizontalPadding,
        right: defaultHorizontalPadding,
      }}>
      {images &&
        images.map(imageItem => (
          <FinderCard key={imageItem.imageId} url={imageItem.contentUrl} name={imageItem.name} />
        ))}
    </Container>
  );
};
