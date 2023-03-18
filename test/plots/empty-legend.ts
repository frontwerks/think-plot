import * as Plot from "think-plot";

export async function emptyLegend() {
    return Plot.plot({
        color: {
            legend: true // ignored because no color scale
        },
        marks: [Plot.frame()]
    });
}
