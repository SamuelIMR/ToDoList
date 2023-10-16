

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.ebd071cc.js","_app/immutable/chunks/index.a4db7de3.js"];
export const stylesheets = ["_app/immutable/assets/0.e5b945df.css"];
export const fonts = [];
