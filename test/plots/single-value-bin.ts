import * as Plot from "think-plot";

export async function singleValueBin() {
    return Plot.rectY([3], Plot.binX()).plot();
}
