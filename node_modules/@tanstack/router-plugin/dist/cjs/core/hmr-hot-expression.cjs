const require_runtime = require("../_virtual/_rolldown/runtime.cjs");
let _babel_template = require("@babel/template");
_babel_template = require_runtime.__toESM(_babel_template);
function resolveHmrHotExpression(hotExpression) {
	return hotExpression ?? "import.meta.hot";
}
function createHmrHotExpressionAst(hotExpression) {
	return _babel_template.expression.ast(resolveHmrHotExpression(hotExpression));
}
function withHmrHotExpression(config, hotExpression) {
	return {
		...config,
		plugin: {
			...config?.plugin,
			hmr: {
				...config?.plugin?.hmr,
				hotExpression: config?.plugin?.hmr?.hotExpression ?? hotExpression
			}
		}
	};
}
//#endregion
exports.createHmrHotExpressionAst = createHmrHotExpressionAst;
exports.resolveHmrHotExpression = resolveHmrHotExpression;
exports.withHmrHotExpression = withHmrHotExpression;

//# sourceMappingURL=hmr-hot-expression.cjs.map