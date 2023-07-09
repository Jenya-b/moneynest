import { MenuEnum } from 'constants/menu';
import { Wrapper } from './Breadcrumbs.styled';

interface BreadcrumbsProps {
  pathName: string;
}

export const Breadcrumbs = ({ pathName }: BreadcrumbsProps) => (
  <Wrapper>
    {pathName === '/' ? (
      <p>Dashboard</p>
    ) : (
      <>
        {pathName
          .split('/')
          .filter((item) => item !== '')
          .map((item) => (
            <p key={item}>{MenuEnum[item as keyof typeof MenuEnum]}</p>
          ))}
      </>
    )}
  </Wrapper>
);
