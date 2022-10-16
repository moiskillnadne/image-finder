import { Container } from '../../components/Container';
import { Thumbnail } from '../../components/Image';
import { background } from '../../constants/colors.constants';
import { defaultBorderRadius } from '../../constants/css.constants';
import { takeWordFromSentence } from '../../utils/takeWordFromSentence';

interface FinderCardProps {
  url: string;
  name: string;
}

export const FinderCard = (props: FinderCardProps) => {
  const { url, name } = props;

  return (
    <Container
      customHeight={{ value: 300, metric: 'px' }}
      customWidth={{ value: 250, metric: 'px' }}
      colorized={background}
      style={{ display: 'grid', gridTemplateRows: '3fr 1fr' }}
      round={{
        upperLeft: defaultBorderRadius,
        upperRight: defaultBorderRadius,
        lowerLeft: defaultBorderRadius,
        lowerRight: defaultBorderRadius,
      }}>
      <Container
        flex
        flexPart={2}
        customHeight={{ value: 250, metric: 'px' }}
        verticalAlign="center"
        horizontalAlign="center">
        <Thumbnail
          src={url}
          alt={name}
          customWidth={{ value: 220, metric: 'px' }}
          customHeight={{ value: 220, metric: 'px' }}
          round={{
            upperLeft: defaultBorderRadius,
            upperRight: defaultBorderRadius,
          }}
        />
      </Container>
      <Container
        flex
        flexPart={1}
        customHeight={{ value: 50, metric: 'px' }}
        verticalAlign="center"
        horizontalAlign="center"
        style={{ textAlign: 'center' }}>
        <p>{takeWordFromSentence(name, 5)}</p>
      </Container>
    </Container>
  );
};
