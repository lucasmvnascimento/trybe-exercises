import React from 'react';
import './data.js'
class Pokemon extends React.Component {
  render() {
    return (<div className='pokemon'>
      <div>
        <p>{this.props.pokemon.name}</p>
        <p>{this.props.pokemon.type}</p>
        <p>Average Weight: {this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</p>
      </div>
      <img src={this.props.pokemon.image} alt={this.props.pokemon.moreinfo}></img>
    </div>)
  }
}

// Pokemon.propTypes = {
//   pokemon: PropTypes.shape ({
//     name: PropTypes.string,
//     type: PropTypes.string,
//     averageWeight: PropTypes.shape ({
//       value: PropTypes.number,
//       measurementUnit: PropTypes.string,
//     }),
//     image: PropTypes.string,
//   }).isRequired,
// };


export default Pokemon;