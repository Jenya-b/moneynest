import { ContextMenu } from '../../pages/Dashboard/Menu/Menu';
import { Title, Wrapper } from './ChartBlock.styled';

interface ChartBlockProps {
  title: string;
  children: JSX.Element;
}

export const ChartBlock = ({ children, title }: ChartBlockProps) => (
  <Wrapper>
    <Title>{title}</Title>
    <ContextMenu />
    {children}
  </Wrapper>
);
