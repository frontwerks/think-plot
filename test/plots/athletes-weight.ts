import * as Plot from "think-plot";
import * as d3 from "d3";

export async function athletesWeight() {
    const athletes = await d3.csv<any>("data/athletes.csv", d3.autoType);
    return Plot.plot({
        marks: [Plot.rectY(athletes, Plot.binX({y: "count"}, {x: "weight"}))]
    });
}
