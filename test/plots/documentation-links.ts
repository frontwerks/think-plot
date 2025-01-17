import * as Plot from "think-plot";
import * as d3 from "d3";

export async function documentationLinks() {
    const data = await d3.json<any>("data/plot-documentation.json").then((d) => d.listings);
    return Plot.plot({
        marginLeft: 140,
        x: {
            domain: [0, 41],
            clamp: true,
            grid: true
        },
        y: {
            tickFormat: (i) => data[i].title.replace(" / Observable Plot", "")
        },
        marks: [
            Plot.barX(data, {
                x: "likes",
                y: (d, i) => i,
                href: (d) => `https://observablehq.com/@observablehq/${d.slug}`,
                target: "_blank"
            }),
            Plot.textX(data, {
                x: "likes",
                y: (d, i) => i,
                text: (d) => `${d.likes > 40 ? "⚡︎" : ""} ${d.likes}`,
                textAnchor: "end",
                fill: "white",
                dx: -3
            }),
            Plot.ruleX([0])
        ]
    });
}
