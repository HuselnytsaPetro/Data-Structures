function calculateMembers(m) {
    if (typeof m !== "number" || !Number.isInteger(m) || m < 1) {
        throw new Error("Invalid format m! Must be a positive integer.");
    }

    for (let n = 1; n <= m; n++) {

        let numerator = Math.log(n + 1);
        let denominator = (5 * Math.pow(n, 2)) + 3;

        console.log(`[${n}]: ${numerator / denominator}`)
    }
};

calculateMembers(20);