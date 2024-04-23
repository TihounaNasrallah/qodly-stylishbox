import { useEnhancedNode, useEnhancedEditor, selectResolver } from '@ws-ui/webform-editor';
import { Element } from '@ws-ui/craftjs-core';
import cn from 'classnames';
import { FC, CSSProperties } from 'react';
import { chain } from 'lodash';
import { ICssStylingBoxProps } from './CssStylingBox.config';

const CssStylingBox: FC<ICssStylingBoxProps> = ({ parameters, className, classNames = [] }) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  const { resolver } = useEnhancedEditor(selectResolver);

  const transformedObject: Record<string, string> = chain(parameters)
    .keyBy('name')
    .mapValues('source')
    .value();

  const style = transformedObject as CSSProperties;

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <Element id="container" is={resolver.StyleBox} canvas />
    </div>
  );
};

export default CssStylingBox;
