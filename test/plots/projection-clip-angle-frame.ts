import * as Plot from "think-plot";
import * as d3 from "d3";
import {feature} from "topojson-client";

export async function projectionClipAngleFrame() {
    const world = await d3.json<any>("data/countries-50m.json");
    const domain = feature(world, world.objects.land);
    return Plot.plot({
        width: 600,
        height: 600,
        projection: {type: "azimuthal-equidistant", clip: 40, inset: -20, rotate: [0, -90], domain: {type: "Sphere"}},
        marks: [Plot.graticule(), Plot.geo(domain, {fill: "currentColor"}), Plot.sphere()]
    });
}
