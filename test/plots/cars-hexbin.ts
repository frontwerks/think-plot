import * as Plot from "think-plot";
import * as d3 from "d3";

export async function carsHexbin() {
    const cars = await d3.csv<any>("data/cars.csv", d3.autoType);
    return Plot.plot({
        color: {
            scheme: "reds",
            nice: true,
            legend: true
        },
        marks: [
            Plot.hexagon(
                cars,
                Plot.hexbin({r: "count", fill: "mean"}, {x: "displacement (cc)", y: "economy (mpg)", fill: "weight (lb)"})
            )
        ]
    });
}
