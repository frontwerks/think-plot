import * as Plot from "think-plot";

export async function logDegenerate() {
    return Plot.plot({
        x: {
            type: "log"
        },
        marks: [Plot.dotX([0, 0.1, 1, 2, 10])]
    });
}
