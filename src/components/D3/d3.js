import React, { Component } from 'react';
import * as d3 from 'd3';
class Chart extends Component {

    constructor(props) {
        super(props)
        this.draw = this.draw.bind(this);
    }
    componentDidMount() {
        this.draw()
    }
    componentDidUpdate() {

        this.draw()
    }
    draw() {

        var margin = { top: 30, right: 20, bottom: 30, left: 50 },

            height = 250 - margin.top - margin.bottom;

        var svg = d3.select("#D3line")
            .append("svg:svg")
            .attr("height", height + margin.top + margin.bottom)


        svg.append("svg:line")
            .attr("x1", 40)
            .attr("y1", 50)
            .attr("x2", 750)
            .attr("y2", 50)
            .style("stroke", "black");
    }
    render() {
        return (
            <div className="chart" id="D3line" >
                {/* <svg width="960" height="500" style={{ border: 'solid 1px #eee', borderBottom: 'solid 1px #ccc' }} /> */}
            </div>
        )
    }
}

export default Chart;
