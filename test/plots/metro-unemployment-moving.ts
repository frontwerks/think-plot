import * as Plot from "think-plot";
import * as d3 from "d3";

export async function metroUnemploymentMoving() {
    const data = await d3.csv<any>("data/bls-metro-unemployment.csv", d3.autoType);
    return Plot.plot({
        marks: [Plot.line(data, Plot.windowY(12, {x: "date", y: "unemployment", z: "division"})), Plot.ruleY([0])]
    });
}
