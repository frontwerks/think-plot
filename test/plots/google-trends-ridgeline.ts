import * as Plot from "think-plot";
import * as d3 from "d3";

export async function googleTrendsRidgeline() {
    const data = await d3.csv<any>("data/google-trends-2020.csv", d3.autoType);
    return Plot.plot({
        width: 960,
        x: {
            axis: "top",
            label: null
        },
        y: {
            insetTop: -24,
            axis: null
        },
        fy: {
            round: true,
            label: null
        },
        facet: {
            data,
            y: "search",
            marginLeft: 160
        },
        marks: [
            Plot.areaY(data, {x: "week", y: "interest", fillOpacity: 0.3, sort: {fy: "y", reduce: "max-index"}}),
            Plot.line(data, {x: "week", y: "interest", stroke: "white", strokeWidth: 1}),
            Plot.ruleY([0])
        ]
    });
}
