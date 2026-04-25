import { configSchema } from "./core/config.js";
import { withHmrHotExpression } from "./core/hmr-hot-expression.js";
import { unpluginRouterCodeSplitterFactory } from "./core/router-code-splitter-plugin.js";
import { unpluginRouterGeneratorFactory } from "./core/router-generator-plugin.js";
import { unpluginRouterComposedFactory } from "./core/router-composed-plugin.js";
import { createRspackPlugin } from "unplugin";
//#region src/rspack.ts
/**
* @example
* ```ts
* export default defineConfig({
*   // ...
*   tools: {
*     rspack: {
*       plugins: [TanStackRouterGeneratorRspack()],
*     },
*   },
* })
* ```
*/
var TanStackRouterGeneratorRspack = /* @__PURE__ */ createRspackPlugin(unpluginRouterGeneratorFactory);
/**
* @example
* ```ts
* export default defineConfig({
*   // ...
*   tools: {
*     rspack: {
*       plugins: [TanStackRouterCodeSplitterRspack()],
*     },
*   },
* })
* ```
*/
var TanStackRouterCodeSplitterRspack = /* @__PURE__ */ createRspackPlugin((options, meta) => unpluginRouterCodeSplitterFactory(withHmrHotExpression(options, "import.meta.webpackHot"), meta));
/**
* @example
* ```ts
* export default defineConfig({
*   // ...
*   tools: {
*     rspack: {
*       plugins: [tanstackRouter()],
*     },
*   },
* })
* ```
*/
var TanStackRouterRspack = /* @__PURE__ */ createRspackPlugin((options, meta) => unpluginRouterComposedFactory(withHmrHotExpression(options, "import.meta.webpackHot"), meta));
var tanstackRouter = TanStackRouterRspack;
//#endregion
export { TanStackRouterCodeSplitterRspack, TanStackRouterGeneratorRspack, TanStackRouterRspack, TanStackRouterRspack as default, configSchema, tanstackRouter };

//# sourceMappingURL=rspack.js.map