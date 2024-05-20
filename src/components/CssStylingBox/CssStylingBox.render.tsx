import {
  selectResolver,
  useEnhancedEditor,
  useRenderer,
  useWebformPath,
} from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, CSSProperties, useEffect, useState } from 'react';
import { Element } from '@ws-ui/craftjs-core';
import { ICssStylingBoxProps, IParameters } from './CssStylingBox.config';

const CssStylingBox: FC<ICssStylingBoxProps> = ({ parameters, className, classNames = [] }) => {
  const { connect } = useRenderer();
  const { resolver } = useEnhancedEditor(selectResolver);
  const path = useWebformPath();
  const [transformedObject, setTransformedObject] = useState<CSSProperties>({});

  const processArray = async (arr: IParameters[]): Promise<CSSProperties> => {
    const transformed: CSSProperties = {};
    for (const obj of arr) {
      const ds = window.DataSource.getSourceOrBuild(obj.source, null, window.$$datastores.ds, path);
      window.DataSource.createRequestOptimization(path);
      console.log(obj.source);
      // const ds = window.DataSource.getSource(obj.source, path);
      const value = await ds?.getValue();
      const propertyName = `--${obj.name}`;
      const tempObj: CSSProperties = {
        [propertyName]: value && value !== '' ? value : obj.defaultValue,
      };
      Object.assign(transformed, tempObj);
    }
    return transformed;
  };

  useEffect(() => {
    const main = async () => {
      const Object = await processArray(parameters);
      setTransformedObject(Object);
    };
    main();
  }, [parameters]);

  return (
    <div ref={connect} style={transformedObject} className={cn(className, classNames)}>
      <Element id="container" is={resolver.StyleBox} canvas />
    </div>
  );
};

export default CssStylingBox;
