import * as Plot from "think-plot";
import * as d3 from "d3";

export async function mobyDickFaceted() {
    const mobydick = await d3.text("data/moby-dick-chapter-1.txt");
    const letters = [...mobydick].filter((d) => /\w/.test(d));
    const uppers = letters.map((d) => d.toUpperCase());
    const cases = letters.map((d) => (d.toLowerCase() === d ? "lower" : "upper"));
    const vowels = letters.map((d) => (/[aeiouy]/i.test(d) ? "vowel" : "consonant"));
    return Plot.plot({
        y: {
            grid: true
        },
        facet: {
            data: letters,
            x: vowels,
            y: cases
        },
        marks: [Plot.barY(letters, Plot.groupX({y: "count"}, {x: uppers})), Plot.ruleY([0])]
    });
}
