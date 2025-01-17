import * as Plot from "think-plot";
import * as d3 from "d3";

export async function penguinSpeciesGroup() {
    const penguins = await d3.csv<any>("data/penguins.csv", d3.autoType);
    return Plot.plot({
        marks: [
            Plot.barX(penguins, Plot.stackX(Plot.groupZ({x: "proportion"}, {fill: "species"}))),
            Plot.text(penguins, Plot.stackX(Plot.groupZ({x: "proportion", text: "first"}, {z: "species", text: "species"}))),
            Plot.ruleX([0, 1])
        ]
    });
}
