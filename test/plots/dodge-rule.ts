import * as Plot from "think-plot";

export async function dodgeRule() {
    return Plot.ruleX([1, 2, 3], Plot.dodgeY()).plot();
}
