import React from 'react';
import DOM from 'react-dom-factories'; 
import PropTypes from 'prop-types';

const c3 = require('c3');

class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: this.pie,
      data: { 
        columns: this.props.columns,
        type : 'pie'
      }
    })
  }
  
  componentWillReceiveProps(nextProps) {
    this.chart.load({ columns: nextProps.columns });
  }
  
  componentWillUnmount() {
    this.chart.destroy();
  }
  
  render() {
    return (
      <div ref = { (c) => { this.pie = c; } } />
    );
  }
}

PieChart.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

PieChart.defaultProps = {
  items: [{}, {}, {}]
};

export default PieChart;
