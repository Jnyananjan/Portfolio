import { Config } from './config.cjs';
import type * as t from '@babel/types';
export declare const DEFAULT_HMR_HOT_EXPRESSION = "import.meta.hot";
export declare function resolveHmrHotExpression(hotExpression?: string): string;
export declare function createHmrHotExpressionAst(hotExpression?: string): t.Expression;
export declare function withHmrHotExpression(config: Partial<Config> | undefined, hotExpression: string): Partial<Config>;
