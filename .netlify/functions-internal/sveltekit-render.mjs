import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.a5f59570.js","app":"_app/immutable/entry/app.a5f14f86.js","imports":["_app/immutable/entry/start.a5f59570.js","_app/immutable/chunks/index.a4db7de3.js","_app/immutable/chunks/singletons.c3fa3d6e.js","_app/immutable/chunks/index.d1b907c2.js","_app/immutable/entry/app.a5f14f86.js","_app/immutable/chunks/index.a4db7de3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
