import { questionIcon } from 'constants/images';
import { Popap } from './Tooltip.styled';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 0,
    border: 'none',
    padding: '0',
  },
}));

export default function CustomizedTooltips({ text }: { text: string }) {
  return (
    <div>
      <HtmlTooltip
        title={
          <>
            <Popap>{text}</Popap>
          </>
        }
      >
        <img src={questionIcon} />
      </HtmlTooltip>
    </div>
  );
}
