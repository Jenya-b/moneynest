import { footerMenu } from 'constants/menu';
import { StyledFooter, FooterNav, LinkList, InfoText, Link } from './Footer.styled';

export const Footer = () => (
  <StyledFooter>
    <FooterNav>
      <p>2023 ©MoneyNest</p>
      <LinkList>
        {footerMenu.map(({ icon, title }) => (
          <li key={title}>
            <Link icon={icon}>{title}</Link>
          </li>
        ))}
      </LinkList>
    </FooterNav>
    <InfoText>
      Disclaimer: The information on this website is for general informational purposes only and
      does not constitute investment advice. The website is intended to store and present
      user-generated investment activity information, generate reports, and provide third-party
      analytics for investor reference. Investing in financial markets carries risks, and past
      performance is not indicative of future results. The information and analytics provided should
      not be the sole basis for investment decisions. Conduct thorough research and consult with
      professionals before making any investment choices. While we strive for accuracy, we do not
      guarantee the completeness, accuracy, reliability, or suitability of the information provided.
      We are not liable for any losses or damages incurred from using or relying on the information.
      Third-party analytics are for informational purposes only and do not imply endorsement. We are
      not responsible for the content, accuracy, or availability of these analytics. Users are
      solely responsible for their investment decisions and should consider their financial
      situation, risk tolerance, and investment goals. By accessing and using this website, you
      release us from any liability for direct or indirect losses. The websites content and
      functionality may change without notice. Please review the Terms of Use and Privacy Policy for
      more details on your rights and responsibilities.
    </InfoText>
  </StyledFooter>
);
