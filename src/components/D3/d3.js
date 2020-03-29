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

    draw_end_start(svg,starting_position_x,starting_position_y,height_veritcal_line,length) {
        // Start arrow
        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y - height_veritcal_line)
            .attr("x2", starting_position_x + 2.5)
            .attr("y2", starting_position_y - height_veritcal_line + 6)
            .style("stroke", "black");
        
        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y - height_veritcal_line)
            .attr("x2", starting_position_x - 2.5)
            .attr("y2", starting_position_y - height_veritcal_line + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y)
            .attr("x2", starting_position_x)
            .attr("y2", starting_position_y - height_veritcal_line)
            .style("stroke", "black");
        // Start arrow end

        // End arrow 
        svg.append("svg:line")
            .attr("x1", starting_position_x + length)
            .attr("y1", starting_position_y - height_veritcal_line)
            .attr("x2", starting_position_x + 2.5 + length)
            .attr("y2", starting_position_y - height_veritcal_line + 6)
            .style("stroke", "black");
        
        svg.append("svg:line")
            .attr("x1", starting_position_x + length)
            .attr("y1", starting_position_y - height_veritcal_line)
            .attr("x2", starting_position_x - 2.5 + length)
            .attr("y2", starting_position_y - height_veritcal_line + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + length)
            .attr("y1", starting_position_y)
            .attr("x2", starting_position_x + length)
            .attr("y2", starting_position_y - height_veritcal_line)
            .style("stroke", "black");
        // End arrow end
    }

    draw_arrow(svg,starting_position_x,starting_position_y,height_veritcal_line,i) {
        svg.append("svg:line")
            .attr("x1", starting_position_x+i)
            .attr("y1", starting_position_y-height_veritcal_line)
            .attr("x2", starting_position_x +i +2.5)
            .attr("y2", starting_position_y-height_veritcal_line + 6)
            .style("stroke", "black");
        
        svg.append("svg:line")
            .attr("x1", starting_position_x + i)
            .attr("y1", starting_position_y-height_veritcal_line)
            .attr("x2", starting_position_x +i - 2.5)
            .attr("y2", starting_position_y-height_veritcal_line + 6)
            .style("stroke", "black");

        svg.append("svg:line")
            .attr("x1", starting_position_x + i)
            .attr("y1", starting_position_y)
            .attr("x2", starting_position_x + i)
            .attr("y2", starting_position_y-height_veritcal_line)
            .style("stroke", "black");
    }

    draw() {

        var margin = { top: 30, right: 20, bottom: 30, left: 50 },

        height = 250 - margin.top - margin.bottom;
        var starting_position_x = 30;
        var starting_position_y = 40;
        var height_veritcal_line = 20;
        var length_multiplier = 100;
        var start_length = 2 * length_multiplier;
        var end_length = 3.2 * length_multiplier;
        var length = end_length-start_length;

        var svg = d3.select("#D3line")
            .append("svg:svg")
            .attr("height", height + margin.top + margin.bottom);

        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y)
            .attr("x2", starting_position_x + length)
            .attr("y2", starting_position_y)
            .style("stroke", "black");
        
        svg.append("svg:line")
            .attr("x1", starting_position_x)
            .attr("y1", starting_position_y+10)
            .attr("x2", starting_position_x + length)
            .attr("y2", starting_position_y+10)
            .style("stroke", "black");

        this.draw_end_start(svg,starting_position_x,starting_position_y,height_veritcal_line,length);
        console.log(length);
        for (var i = 10; i<length ; i=i+10) {
            this.draw_arrow(svg,starting_position_x,starting_position_y,height_veritcal_line,i);
        }
        
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
