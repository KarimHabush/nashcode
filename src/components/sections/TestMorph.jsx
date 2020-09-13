import React from 'react'
import ReactDOM from 'react-dom'
import { Spring, animated,config } from 'react-spring/renderprops'
import { interpolate } from 'flubber'

export default class App extends React.Component {
  state = {
    paths: [
      'M13 0h-3v9.64L0 .1l.06 4.12L13 16.27V0z',
      'M14.91 11.32h-3.39L8.81 5.99 3.39 16.65H0L8.81 0l6.1 11.32zM17.62 16.65h-3.39l-1.35-2.67h3.39l1.35 2.67z',
      'M22.3 9.49l-4.22 9.92h-4.37l4.37-9.92-2.23-4.84-7.26 14.76H4.22L0 9.49 4.22 0h4.37L4.22 9.49l2.3 5.22L13.71 0h4.37l.03.06 4.19 9.43z',
      'M7.75 14.78V8.07H2.64v6.71H0V0h2.64v5.49h5.11V0h2.63v14.78H7.75z'
    ],
    index: 0
  }
  goNext = () => this.setState(state => ({ index: state.index + 1 >= state.paths.length ? 0 : state.index + 1 }))
  render() {
    const { paths, index } = this.state
    const interpolator = interpolate(paths[index], paths[index + 1] || paths[0], { maxSegmentLength: 0.1 })
    return (
      <svg height="400" viewBox="0 0 23 23">
        <g fill="#000000">
          <Spring config={{delay:800}} reset native from={{ t: 0 }} to={{ t: 1 }} onRest={this.goNext}>
            {({ t }) => <animated.path d={t.interpolate(interpolator)} />}
          </Spring>
        </g>
      </svg>
    )
  }
}

