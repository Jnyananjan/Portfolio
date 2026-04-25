import { ReferenceRouteCompilerPlugin } from '../plugins.cjs';
import { Config } from '../../config.cjs';
export declare function getReferenceRouteCompilerPlugins(opts: {
    targetFramework: Config['target'];
    addHmr?: boolean;
    hmrHotExpression?: string;
}): Array<ReferenceRouteCompilerPlugin> | undefined;
