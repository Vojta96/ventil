const ranges = [
    {
        text: "20x2,2",
        dn: 15.4
    },
    {
        text: "25x2,3",
        dn: 20.4
    },
    {
        text: "32x2,9",
        dn: 26.2

    },
    {
        text: "40x3,7",
        dn: 32.6
    },
    {
        text: "50x4,6",
        dn: 40.8
    },
    {
        text: "63x5,8",
        dn: 51.4
    },
    {
        text: "75x6,8",
        dn: 61.4
    },
    {
        text: "90x8,2",
        dn: 73.6
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