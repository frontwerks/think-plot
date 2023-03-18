import * as assert from "assert";
// import * as Plot from "think-plot";
// import {intrinsics} from "think-plot/intrinsics.js";

const intrinsics = getIntrinsics();
import {getIntrinsics} from "./intrinsics/intrinsics-available.js";
it(`Intrinsics available`, () => {
  assert.notEqual(undefined, intrinsics);
});
