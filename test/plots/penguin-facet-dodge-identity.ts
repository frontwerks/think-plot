import * as Plot from "think-plot";
import * as d3 from "d3";

export async function penguinFacetDodgeIdentity() {
    const penguins = await d3.csv<any>("data/penguins.csv", d3.autoType);
    return Plot.plot({
        height: 300,
        grid: true,
        r: {
            type: "identity"
        },
        facet: {
            data: penguins,
            y: "species",
            label: null,
            marginLeft: 60
        },
        marks: [Plot.dot(penguins, Plot.dodgeY("middle", {x: "body_mass_g", r: (d) => (d.sex ? 2.5 : 4)}))]
    });
}
