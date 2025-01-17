import * as Plot from "think-plot";
import * as d3 from "d3";
import {mesh} from "topojson-client";

export async function projectionHeightAlbers() {
    const [conus, countymesh] = await d3
        .json<any>("data/us-counties-10m.json")
        .then((us) => [mesh(us, us.objects.states, (a, b) => a === b), mesh(us, us.objects.counties, (a, b) => a !== b)]);
    return Plot.plot({
        projection: {
            type: "albers-usa"
        },
        marks: [
            Plot.geo(conus, {strokeWidth: 1.5}),
            Plot.geo(countymesh, {strokeOpacity: 0.1}),
            Plot.frame({stroke: "red", strokeDasharray: 4})
        ]
    });
}
