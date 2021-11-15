import React from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import styled from '@emotion/native';
import {light} from '@dooboo-ui/theme';
import {isEmptyObject} from '../utils';

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const BackgroundView = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.light};
  height: 24px;
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
  overflow: hidden;
  z-index: 1;
`;

const Progress = styled.View<ProgressProps>`
  width: ${({number}) => `${number}%`};
  background-color: ${({theme, type}) => {
    theme = isEmptyObject(theme) ? light : theme;

    return theme[type ?? 'info'];
  }};
  height: 100%;
`;

const NumberText = styled.Text`
  position: absolute;
  font-size: 14px;
  z-index: 2;
  color: ${({theme}) => theme.text};
`;

export type ProgressbarType = 'success' | 'danger' | 'warning' | 'info';

export type ProgressbarStyles = {
  background?: StyleProp<ViewStyle>;
  progress?: StyleProp<ViewStyle>;
  value?: StyleProp<TextStyle>;
};

interface ProgressProps {
  type?: string;
  number?: number;
}

interface Props {
  number: number;
  type?: ProgressbarType;
  styles?: ProgressbarStyles;
}

export {Props as ProgressbarProps};

export const Progressbar: React.FC<Props> = (props) => {
  const {number, type = 'info', styles = {}} = props;

  return (
    <Container>
      <BackgroundView
        style={styles?.background}
        testID="progressbar-background"
      >
        <Progress
          style={styles?.progress}
          number={number}
          type={type}
          testID="progressbar-main"
        />
      </BackgroundView>
      <NumberText
        style={styles?.value}
        testID="progressbar-text"
      >{`${number}%`}</NumberText>
    </Container>
  );
};
