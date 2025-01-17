import * as Plot from "think-plot";
import * as d3 from "d3";

export async function simpsonsRatings() {
    const data = await d3.csv<any>("data/simpsons.csv", d3.autoType);
    return Plot.plot({
        grid: true,
        padding: 0.05,
        x: {
            label: "Episode",
            axis: "top"
        },
        y: {
            label: "Season"
        },
        color: {
            type: "linear",
            scheme: "PiYG",
            unknown: "#ddd"
        },
        height: 640,
        marks: [
            Plot.cell(data, {
                x: "number_in_season",
                y: "season",
                fill: "imdb_rating"
            }),
            Plot.text(data, {
                x: "number_in_season",
                y: "season",
                text: (d) => (d.imdb_rating == null ? "-" : d.imdb_rating.toFixed(1)),
                title: "title"
            })
        ]
    });
}
