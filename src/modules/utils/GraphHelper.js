

export default class GraphHelper {
    static getPointsFromFunc(func, range, pointsCount) {
        let graphData = [];
        const max = range.max;
        const min = range.min;

        for (let i = 0; i < pointsCount; i++) {
            const x = Math.floor(Math.random() * (max - min +1)) + min;
            graphData.push([ x, func(x)]);
        }

        return graphData;
    }
}

