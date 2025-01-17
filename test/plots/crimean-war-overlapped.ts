import * as Plot from "think-plot";
import * as d3 from "d3";

export async function crimeanWarOverlapped() {
    const crimea = await d3.csv<any>("data/crimean-war.csv", d3.autoType);
    const causes = crimea.columns.slice(2);
    const data = causes.flatMap((cause) => crimea.map(({date, [cause]: deaths}) => ({date, cause, deaths})));
    return Plot.plot({
        x: {
            tickFormat: "%b",
            label: null
        },
        marks: [
            Plot.rectY(data, {x: "date", interval: "month", y2: "deaths", fill: "cause", mixBlendMode: "multiply"}),
            Plot.ruleY([0])
        ]
    });
}
