import * as template from "@babel/template";
function resolveHmrHotExpression(hotExpression) {
	return hotExpression ?? "import.meta.hot";
}
function createHmrHotExpressionAst(hotExpression) {
	return template.expression.ast(resolveHmrHotExpression(hotExpression));
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
export { createHmrHotExpressionAst, resolveHmrHotExpression, withHmrHotExpression };

//# sourceMappingURL=hmr-hot-expression.js.map