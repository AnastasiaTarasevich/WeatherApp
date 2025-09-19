import { Button } from '@components/Buttons';

import { StyledInput, StyledWrapper } from './styled';

export function SearchBar() {
  return (
    <StyledWrapper>
      <StyledInput />
      <Button>Search</Button>
    </StyledWrapper>
  );
}
