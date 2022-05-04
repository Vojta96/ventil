const ranges = [
    {
        d: (20),
        s: (2, 2)
    },
    {
        d: (25),
        s: (2, 3)
    },
    {
        d: (32),
        s: (2, 9)
    },
    {
        d: (40),
        s: (3, 7)
    },
    {
        d: (50),
        s: (4, 6)
    },
    {
        d: (63),
        s: (5, 8)
    },
    {
        d: (75),
        s: (6, 8)
    }
];

const lowerRangeFor = (size) => {
    if (size < ranges[0]) {
        return NaN
    }
    return ranges.filter((el) => {
        return el <= size
    }).slice(-1)[0];
};

const higherRangeFor = (size) => {
    if (size > ranges.slice(-1)[0]) {
        return NaN
    }
    return ranges.filter((el) => {
        return el >= size
    })[0]
};

export { lowerRangeFor, higherRangeFor };
export default ranges;