import { MenuEnum } from 'constants/menu';
import { Wrapper, BreadcrumbTrail } from './Breadcrumbs.styled';
import { InfoGeneral } from '../InfoGeneral/InfoGeneral';

interface BreadcrumbsProps {
  pathName: string;
}

export const Breadcrumbs = ({ pathName }: BreadcrumbsProps) => (
  <Wrapper>
    <BreadcrumbTrail>
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
    </BreadcrumbTrail>
    <InfoGeneral />
  </Wrapper>
);
