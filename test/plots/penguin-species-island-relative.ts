import * as Plot from "think-plot";
import * as d3 from "d3";

export async function penguinSpeciesIslandRelative() {
    const penguins = await d3.csv<any>("data/penguins.csv", d3.autoType);
    return Plot.plot({
        y: {
            percent: true
        },
        fx: {
            tickSize: 6
        },
        facet: {
            data: penguins,
            x: "species"
        },
        marks: [Plot.barY(penguins, Plot.groupZ({y: "proportion-facet"}, {fill: "island"})), Plot.ruleY([0])]
    });
}
