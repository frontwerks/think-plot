import * as Plot from "think-plot";

export async function highCardinalityOrdinal() {
    return Plot.plot({
        color: {
            type: "ordinal"
        },
        marks: [Plot.cellX("ABCDEFGHIJKLMNOPQRSTUVWXYZ")]
    });
}
