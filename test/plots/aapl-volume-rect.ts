import * as Plot from "think-plot";
import * as d3 from "d3";

export async function aaplVolumeRect() {
    const AAPL = (await d3.csv<any>("data/aapl.csv", d3.autoType)).slice(-40);
    return Plot.plot({
        y: {
            grid: true,
            transform: (d) => d / 1e6,
            label: "↑ Daily trade volume (millions)"
        },
        marks: [
            Plot.rectY(AAPL, {x: "Date", interval: "day", y: "Volume", fill: "#ccc"}),
            Plot.ruleY(AAPL, {x: "Date", interval: "day", y: "Volume"}),
            Plot.ruleY([0])
        ]
    });
}
