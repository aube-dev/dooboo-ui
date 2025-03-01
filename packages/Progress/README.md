# Progress

This package is made for show progress of time consuming work as graph. Currently, it only include circle graph.

## Props

### Progress.Circle

| Props    | Types                                                                                                                                                                                                                                                                                                                                                                                              | Description                                                                                                         | Required | Default   |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| styles   | {<br/>&nbsp;&nbsp;&nbsp;&nbsp;container?: ViewStyle;<br/>&nbsp;&nbsp;&nbsp;&nbsp;text?: TextStyle;<br/>&nbsp;&nbsp;&nbsp;&nbsp;circle?: {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;radius?: number;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;color?: string;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;strokeWidth?: number;<br/>&nbsp;&nbsp;&nbsp;&nbsp;};<br/> } | This props determine styles of the component. You don't need to fill this props because the default values are set. |          | undefined |
| progress | number                                                                                                                                                                                                                                                                                                                                                                                             | Progress value. It must be between 0 to 1.                                                                          | v        |           |
| type     | "success" &#124; "danger" &#124; "warning" &#124; "info"                                                                                                                                                                                                                                                                                                                                           | Progress theme type. This value determined the color of the shape if prop color is undefined.                       |          | "info"    |

## Install

```
yarn add @dooboo-ui/progress
```

## Usage

```tsx
import Progress from '@dooboo-ui/Progress';

...
<Progress.Circle progress={progressValue} />;
```
