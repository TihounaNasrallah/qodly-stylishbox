import {
  selectResolver,
  useEnhancedEditor,
  useRenderer,
  useWebformPath,
} from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, CSSProperties } from 'react';
import { Element } from '@ws-ui/craftjs-core';
import { ICssStylingBoxProps, IParameters } from './CssStylingBox.config';

const CssStylingBox: FC<ICssStylingBoxProps> = ({ parameters, className, classNames = [] }) => {
  const { connect } = useRenderer();
  const { resolver } = useEnhancedEditor(selectResolver);
  const path = useWebformPath();

  let transformedObject = {};

  const ds = window.DataSource.getSource(parameters[0].source, path);
  ds?.getValue().then();

  const processArray = async (arr: IParameters[]): Promise<CSSProperties> => {
    const transformed: CSSProperties = {};
    for (const obj of arr) {
      const ds = window.DataSource.getSource(obj.source, path);
      const value = await ds?.getValue();
      const propertyName = `--${obj.name}`;
      const tempObj: CSSProperties = { [propertyName]: value };
      Object.assign(transformed, tempObj);
    }
    return transformed;
  };

  const main = async () => {
    transformedObject = await processArray(parameters);
  };

  main();
  return (
    <div
      ref={connect}
      style={transformedObject as CSSProperties}
      className={cn(className, classNames)}
    >
      <Element id="conatainer" is={resolver.StyleBox} canvas />
    </div>
  );
};

export default CssStylingBox;
