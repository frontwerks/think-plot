import * as Plot from "think-plot";
import * as d3 from "d3";
import {feature} from "topojson-client";

export async function populationByLatitude() {
    const world = await d3.json<any>("data/countries-110m.json");
    const land = feature(world, world.objects.land);
    const cities = await d3.csv<any>("data/cities-10k.csv", d3.autoType);
    return Plot.plot({
        style: {overflow: "visible"},
        projection: {type: "equirectangular", rotate: [-10, 0]},
        r: {range: [0, 5]},
        marks: [
            Plot.geo(land, {fill: "#f0f0f0"}),
            Plot.graticule(),
            Plot.dot(
                d3.sort(cities, (d) => -d.population).slice(0, 5000),
                Plot.dodgeX({x: "longitude", y: "latitude", r: "population", fill: "currentColor"})
            ),
            Plot.frame()
        ]
    });
}
