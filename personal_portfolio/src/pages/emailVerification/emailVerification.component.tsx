import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router';

import { Button } from '../../components';
import { ButtonTheme, ButtonVariant, Path } from '../../enums';

export const EmailVerification = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div>
      Weryfikacja maila zakończona pomyślnie
      <Button label='Zaloguj się' onClick={() => navigate(Path.Login)} theme={ButtonTheme.Default} variant={ButtonVariant.Large} />
    </div>
  );
};
