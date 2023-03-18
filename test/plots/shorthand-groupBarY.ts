import * as Plot from "think-plot";

export async function shorthandGroupBarY() {
    const gene = "AAAAGAGTGAAGATGCTGGAGACGAGTGAAGCATTCACTTTAGGGAAAGCGAGGCAAGAGCGTTTCAGAAGACGAAACCTGGTAGGTGCACTCACCACAG";
    return Plot.barY(gene, Plot.groupX()).plot();
}
