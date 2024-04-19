import config, { ICssStylingBoxProps } from './CssStylingBox.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './CssStylingBox.build';
import Render from './CssStylingBox.render';

const CssStylingBox: T4DComponent<ICssStylingBoxProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

CssStylingBox.craft = config.craft;
CssStylingBox.info = config.info;
CssStylingBox.defaultProps = config.defaultProps;

export default CssStylingBox;
