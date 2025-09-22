import { useSelector } from 'react-redux';

import { RootState } from '@store/store';

import { Button } from '@components/Buttons';

import * as S from './styled';

export function SearchBar() {
  const city = useSelector((state: RootState) => state.location.city);
  const loading = useSelector((state: RootState) => state.location.loading);
  return (
    <S.StyledWrapper>
      <S.StyledInput
        placeholder={loading ? 'Find your city...' : city || 'Enter city'}
      />
      <Button>Search</Button>
    </S.StyledWrapper>
  );
}
