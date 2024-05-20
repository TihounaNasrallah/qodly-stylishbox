import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { BsBoundingBoxCircles } from 'react-icons/bs';
import CssStylingBoxSettings, { BasicSettings } from './CssStylingBox.settings';

export default {
  craft: {
    displayName: 'CssStylingBox',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(CssStylingBoxSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'CssStylingBox',
    exposed: true,
    icon: BsBoundingBoxCircles,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
    ],
    datasources: {},
  },
  defaultProps: {
    iterableChild: true,
  },
} as T4DComponentConfig<ICssStylingBoxProps>;

export interface ICssStylingBoxProps extends webforms.ComponentProps {
  parameters: IParameters[];
}

export interface IParameters {
  name: string;
  source: string;
  defaultValue?: string;
}
