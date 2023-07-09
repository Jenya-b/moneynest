import { useLocation } from 'react-router-dom';

import { Main } from 'styles/components';
import { Breadcrumbs } from 'modules/components/Breadcrumbs/Breadcrumbs';
import { questionIcon } from 'constants/images';
import {
  SearchBlock,
  Container,
  TitleWrap,
  ButtonMore,
  InputWrap,
  Info,
  Label,
  InputSearch,
  ButtonSearch,
} from './IsinSearch.styled';

export const IsinSearchPage = () => {
  const location = useLocation();

  return (
    <Main>
      <Breadcrumbs pathName={location.pathname} />
      <SearchBlock>
        <Container>
          <TitleWrap>
            <p>ISIN/FIGI Info</p>
            <img src={questionIcon} />
            <ButtonMore />
          </TitleWrap>
          <InputWrap>
            <Info>
              Enter the name of the company, financial instrument, or security in the search field
              provided.
            </Info>
            <Label>
              <InputSearch />
              <ButtonSearch>Submit</ButtonSearch>
            </Label>
          </InputWrap>
        </Container>
      </SearchBlock>
    </Main>
  );
};

export default IsinSearchPage;
