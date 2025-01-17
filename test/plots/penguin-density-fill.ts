import * as Plot from "think-plot";
import * as d3 from "d3";

export async function penguinDensityFill() {
    const penguins = await d3.csv<any>("data/penguins.csv", d3.autoType);
    return Plot.plot({
        width: 960,
        height: 360,
        inset: 20,
        color: {
            scheme: "ylgnbu",
            legend: true,
            label: "Density"
        },
        marks: [
            Plot.density(penguins, {
                fx: "island",
                x: "flipper_length_mm",
                y: "culmen_length_mm",
                fill: "density",
                thresholds: 10,
                clip: true
            }),
            Plot.frame()
        ]
    });
}
