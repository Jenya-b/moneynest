import { useLocation } from 'react-router-dom';

import { Main } from 'styles/components';
import { Breadcrumbs } from 'modules/components/Breadcrumbs/Breadcrumbs';
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
  TooltipWrap,
} from './IsinSearch.styled';
import Tooltip from 'modules/components/Tooltip/Tooltip';

export const IsinSearchPage = () => {
  const location = useLocation();

  return (
    <Main>
      <Breadcrumbs pathName={location.pathname} />
      <SearchBlock>
        <Container>
          <TitleWrap>
            <p>ISIN/FIGI Info</p>
            <TooltipWrap>
              <Tooltip
                text="ISIN stands for International Securities Identification Number. It is a unique 12-character alphanumeric code that serves as a universal identifier for securities such as stocks, bonds, and other financial instruments. The ISIN provides a standardized way to identify and track securities globally.
FIGI stands for Financial Instrument Global Identifier. It is a unique identifier assigned to financial instruments, similar to ISIN. 
Both ISIN and FIGI are widely used in the financial industry for trading, settlement, and reporting purposes. They help ensure accurate identification and tracking of securities across different systems and platforms."
              />
            </TooltipWrap>

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
