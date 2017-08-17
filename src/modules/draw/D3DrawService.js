
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';

export default class D3DrawService {
    drawScatterplotAt(data, target) {
        var margin = {
                top: 20,
                right: 20,
                bottom: 30,
                left: 40
            },
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var x = d3Scale.scaleLinear()
            .range([0, width]);

        var y = d3Scale.scaleLinear()
            .range([height, 0]);

        var xAxis = d3.axisBottom(x);

        var yAxis = d3.axisLeft(y);

        var svg = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        data.forEach(function (d) {
            d.x = d[0];
            d.y = d[1];
        });

        var line = d3.line()
            .x(function (d) {
                return x(d.x);
            })
            .y(function (d) {
                return y(d.yhat);
            });

        x.domain(d3.extent(data, function (d) {
            return d.x;
        }));
        y.domain(d3.extent(data, function (d) {
            return d.y;
        }));

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .append("text")
            .attr("class", "label")
            .attr("x", width)
            .attr("y", -6)
            .style("text-anchor", "end")
            .text("X-Value");

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("class", "label")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Y-Value")

        svg.selectAll(".dot")
            .data(data)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("r", 3.5)
            .attr("cx", function (d) {
                return x(d.x);
            })
            .attr("cy", function (d) {
                return y(d.y);
            });

        svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line);
    }
}