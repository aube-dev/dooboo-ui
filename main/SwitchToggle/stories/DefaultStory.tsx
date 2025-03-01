import React, {FC, useState} from 'react';
import {useTheme} from '@dooboo-ui/theme';
import styled from '@emotion/native';

import {SwitchToggle, Typography} from '../..';

const StoryContainer = styled.View`
  flex: 1;
  align-self: stretch;
  background-color: ${({theme}) => theme.background};
`;

const ScrollContainer = styled.ScrollView`
  width: 100%;
`;

const Container = styled.View`
  background-color: ${({theme}) => theme.background};
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: column;
`;

const SwitchToggleDefault: FC = () => {
  const [on, off] = useState<boolean>(false);
  const {theme} = useTheme();

  return (
    <StoryContainer>
      <ScrollContainer>
        <Container style={{paddingVertical: 60}}>
          <Typography.Heading3 style={{fontSize: 18, marginBottom: 8}}>
            Basic Style
          </Typography.Heading3>
          <SwitchToggle isOn={on} onPress={() => off(!on)} />
        </Container>

        <Container style={{paddingVertical: 30}}>
          <Typography.Heading3 style={{fontSize: 18, marginBottom: 8}}>
            Custom Color
          </Typography.Heading3>
          <SwitchToggle
            isOn={on}
            onPress={() => off(!on)}
            styles={{
              circleColorOff: theme.disabled,
              circleColorOn: theme.secondary,
              backgroundColorOn: theme.placeholder,
              backgroundColorOff: theme.textDisabled,
            }}
          />
        </Container>
        <Container style={{paddingVertical: 30}}>
          <Typography.Heading3 style={{fontSize: 18, marginBottom: 8}}>
            Custom Size
          </Typography.Heading3>
          <SwitchToggle
            isOn={on}
            onPress={() => off(!on)}
            styles={{
              container: {
                marginTop: 16,
                width: 106,
                height: 48,
                borderRadius: 25,
                padding: 5,
              },
              circle: {
                width: 40,
                height: 40,
                borderRadius: 20,
              },
            }}
          />
        </Container>
      </ScrollContainer>
    </StoryContainer>
  );
};

export default SwitchToggleDefault;
