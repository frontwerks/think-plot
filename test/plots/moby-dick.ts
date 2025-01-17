import * as Plot from "think-plot";
import * as d3 from "d3";

export async function mobyDick() {
    const mobydick = await d3.text("data/moby-dick-chapter-1.txt");
    return Plot.plot({
        height: 1200,
        marks: [Plot.text([mobydick], {fontSize: 14, lineWidth: 40, lineHeight: 1.2, frameAnchor: "top-left"})]
    });
}
