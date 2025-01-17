import * as Plot from "think-plot";
import * as d3 from "d3";
import {feature} from "topojson-client";

export async function projectionHeightEqualEarth() {
    const world = await d3.json<any>("data/countries-110m.json");
    const land = feature(world, world.objects.land);
    return Plot.plot({
        facet: {data: [0, 1], x: [0, 1]},
        projection: "equal-earth",
        marks: [
            Plot.geo(land, {fill: "currentColor"}),
            Plot.graticule(),
            Plot.sphere(),
            Plot.frame({stroke: "red", strokeDasharray: 4})
        ]
    });
}
