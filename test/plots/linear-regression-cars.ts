import * as Plot from "think-plot";
import * as d3 from "d3";

export async function linearRegressionCars() {
    const cars = await d3.csv<any>("data/cars.csv", d3.autoType);
    return Plot.plot({
        marks: [
            Plot.dot(cars, {x: "weight (lb)", y: "economy (mpg)", r: 2}),
            Plot.linearRegressionY(cars, {x: "weight (lb)", y: "economy (mpg)", ci: 0.99})
        ]
    });
}
