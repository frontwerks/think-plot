import * as Plot from "think-plot";
import * as d3 from "d3";

export async function penguinVoronoi1D() {
    const penguins = await d3.csv<any>("data/penguins.csv", d3.autoType);
    return Plot.plot({
        inset: 10,
        marks: [
            Plot.voronoi(penguins, {
                x: "body_mass_g",
                fill: "species",
                fillOpacity: 0.5,
                href: (d) => `https://en.wikipedia.org/wiki/${d.species}_penguin`,
                target: "_blank",
                title: (d) => `${d.species} (${d.sex})\n${d.island}`
            }),
            Plot.dot(penguins, {
                x: "body_mass_g",
                fill: "currentColor",
                r: 1.5,
                pointerEvents: "none"
            }),
            Plot.voronoiMesh(penguins, {
                x: "body_mass_g",
                pointerEvents: "none"
            })
        ]
    });
}
