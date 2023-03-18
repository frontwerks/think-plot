import {maybeIdentityX, maybeIdentityY} from "./transforms/identity.js";
import {maybeIntervalX, maybeIntervalY} from "./transforms/interval.js";
import {maybeStackX, maybeStackY} from "./transforms/stack.js";

export const intrinsics = {
  identity: {
    maybeIdentityX,
    maybeIdentityY
  },
  interval: {
    maybeIntervalX,
    maybeIntervalY
  },
  transforms: {
    maybeStackX,
    maybeStackY
  }
};

// export * from "./transforms/identity.js";
// export * from "./transforms/intervals.js";
// export * from "./transforms/stack.js";
