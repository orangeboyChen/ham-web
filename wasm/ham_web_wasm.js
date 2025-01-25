import * as wasm from "./ham_web_wasm_bg.wasm";
export * from "./ham_web_wasm_bg.js";
import { __wbg_set_wasm } from "./ham_web_wasm_bg.js";
__wbg_set_wasm(wasm);
wasm.__wbindgen_start();
