import { Container } from '../../components/Container';
import { Thumbnail } from '../../components/Image';
import { background } from '../../constants/colors.constants';

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
      flex
      flexDirection="column"
      verticalAlign="center"
      // horizontalAlign="space-around"
      colorized={background}>
      <div>
        <Thumbnail src={url} alt={name} customWidth={{ value: 200, metric: 'px' }} />
      </div>
      <div>{name}</div>
    </Container>
  );
};
