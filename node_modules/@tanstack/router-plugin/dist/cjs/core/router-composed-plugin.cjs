require("../_virtual/_rolldown/runtime.cjs");
const require_router_code_splitter_plugin = require("./router-code-splitter-plugin.cjs");
const require_router_generator_plugin = require("./router-generator-plugin.cjs");
const require_router_hmr_plugin = require("./router-hmr-plugin.cjs");
let _tanstack_router_generator = require("@tanstack/router-generator");
//#region src/core/router-composed-plugin.ts
var unpluginRouterComposedFactory = (options = {}, meta) => {
	const userConfig = (0, _tanstack_router_generator.getConfig)(options, process.cwd());
	const getPlugin = (pluginFactory) => {
		const plugin = pluginFactory(options, meta);
		if (!Array.isArray(plugin)) return [plugin];
		return plugin;
	};
	const routerGenerator = getPlugin(require_router_generator_plugin.unpluginRouterGeneratorFactory);
	const routerCodeSplitter = getPlugin(require_router_code_splitter_plugin.unpluginRouterCodeSplitterFactory);
	const result = [...routerGenerator];
	if (userConfig.autoCodeSplitting) result.push(...routerCodeSplitter);
	if (!(process.env.NODE_ENV === "production") && !userConfig.autoCodeSplitting) {
		const routerHmr = getPlugin(require_router_hmr_plugin.unpluginRouterHmrFactory);
		result.push(...routerHmr);
	}
	return result;
};
//#endregion
exports.unpluginRouterComposedFactory = unpluginRouterComposedFactory;

//# sourceMappingURL=router-composed-plugin.cjs.map