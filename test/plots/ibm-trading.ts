import * as Plot from "think-plot";
import * as d3 from "d3";

// This example uses both an interval (to define an ordinal x-scale) and a
// custom transform to parse the dates from their string representation. This is
// not a recommended pattern: you should instead parse strings to dates when
// loading the data, say by applying d3.autoType or calling array.map.
export async function ibmTrading() {
    const ibm = await d3.csv<any>("data/ibm.csv").then((data) => data.slice(-20));
    return Plot.plot({
        marginBottom: 65,
        x: {
            interval: "day",
            transform: (d) => d3.utcDay.floor(d3.isoParse(d)),
            tickRotate: -40,
            label: null
        },
        y: {
            transform: (d) => d / 1e6,
            label: "↑ Volume (USD, millions)",
            grid: true
        },
        marks: [Plot.barY(ibm, {x: "Date", y: "Volume"})]
    });
}
