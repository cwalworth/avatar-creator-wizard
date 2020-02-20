import React from 'react'

const Extras = ({ shape, color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox={
        shape === 'extras_1'
          ? '0 0 255 57'
          : shape === 'extras_2'
          ? '0 0 285 106'
          : null
      }
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {shape === 'extras_1' && (
        <path
          id="extrashape_1"
          d="M33.289,15.312c0.33,-1.438 -0.522,-3.19 -0.522,-3.19c-0.829,-4.068 -11.502,-3.299 -11.502,-3.299c-5.751,1.719 -6.572,7.265 -6.572,7.265c-5.9,12.744 18.217,13.41 18.217,13.41c14.354,0.774 45.605,-19.369 45.605,-19.369c28.156,-19.378 48.599,1.973 48.599,1.973l-0.271,23.085c-2.634,1.14 -4.45,1.54 -4.45,1.54c-8.18,6.59 -21.42,11.05 -21.42,11.05c-60.777,18.73 -91.539,-9.54 -91.539,-9.54c-20.559,-24.948 8.047,-33.256 8.047,-33.256c8.482,-2.436 11.146,0.083 11.146,0.083c4.334,5.294 5.244,8.417 4.662,10.248c-0.111,0.483 -0.355,0.93 -0.809,1.265c-1.573,1.448 -4.592,1.305 -5.41,1.236c0.836,-0.074 3.846,-0.687 3.846,-0.687c0.687,-0.081 1.195,-0.278 1.564,-0.549c0.36,-0.332 0.644,-0.747 0.809,-1.265Zm188.299,0c-0.59,-1.831 0.32,-4.954 4.66,-10.248c0,0 2.66,-2.519 11.14,-0.083c0,0 28.61,8.308 8.05,33.256c0,0 -30.76,28.27 -91.538,9.54c0,0 -13.24,-4.46 -21.42,-11.05c0,0 -1.816,-0.4 -4.45,-1.54l-0.271,-23.085c0,0 20.443,-21.351 48.599,-1.973c0,0 31.25,20.143 45.6,19.369c0,0 24.12,-0.666 18.22,-13.41c0,0 -0.82,-5.546 -6.57,-7.265c0,0 -10.67,-0.769 -11.5,3.299c0,0 -0.86,1.752 -0.52,3.19c0.16,0.518 0.44,0.933 0.81,1.265c0.36,0.271 0.87,0.468 1.56,0.549c0,0 3.01,0.613 3.85,0.687c-0.82,0.069 -3.84,0.212 -5.41,-1.236c-0.46,-0.335 -0.7,-0.782 -0.81,-1.265Zm-194.518,2.501c-0.153,0.013 -0.233,0.009 -0.209,-0.021c0,0 0.075,0.009 0.209,0.021Zm200.738,0c0.13,-0.012 0.2,-0.021 0.2,-0.021c0.03,0.03 -0.05,0.034 -0.2,0.021Z"
          style={{ fill: `${color}`, stroke: '#000', strokeWidth: '4px' }}
        />
      )}
      {shape === 'extras_2' && (
        <g id="extra_2">
          <path
            d="M121.444,14.274c0,0 18.244,-4.538 38.083,0.096c0,0 0.657,1.672 12.596,-3.956c11.939,-5.627 47.554,-10.409 59.608,-7.57c0,0 37.375,5.885 49.101,10.037c0,0 3.652,2.683 0.895,9.52c0,0 -8.031,2.981 -8.283,15.324c0,0 1.292,43.63 -35.333,60.734c-36.625,17.104 -66.871,-19.346 -66.871,-19.346c0,0 -18.402,-29.384 -18.196,-42.195c0,0 3.617,-10.505 -3.174,-12.593c0,0 -13.319,-3.396 -19.128,2.384c0,0 -2.413,2.24 0.324,9.909c0,0 -1.275,30.313 -27.662,54.04c0,0 -23.768,16.938 -49.932,10.121c0,0 -33.782,-8.777 -39.109,-47.046c0,0 -3.853,-24.182 -6.34,-26.547c0,0 -2.327,-2.411 -4.644,-3.73c0,0 -3.11,-7.141 0.012,-9.641c0,0 27.52,-7.522 37.285,-9.055c9.766,-1.533 35.527,-4.021 47.46,-1.335c0,0 21.272,3.805 33.308,10.849Z"
            style={{ fill: `${color}`, stroke: '#000', strokeWidth: '4px' }}
          />
          <path
            d="M18.322,35.933c0,0 -5.22,54.516 45.26,61.423c0,0 43.992,4.414 55.594,-44.946c0,0 8.165,-30.133 -15.257,-40.138c0,0 -38.643,-9.388 -61.33,-1.731c0,0 -23.626,3.555 -24.267,25.392Z"
            style={{ fill: 'black', stroke: `${color}`, strokeWidth: '4px' }}
          />
          <path
            d="M266.878,35.829c0,0 5.22,54.516 -45.26,61.423c0,0 -43.992,4.414 -55.594,-44.946c0,0 -8.165,-30.133 15.257,-40.138c0,0 38.643,-9.388 61.33,-1.731c0,0 23.626,3.555 24.267,25.392Z"
            style={{ fill: 'black', stroke: `${color}`, strokeWidth: '4px' }}
          />
        </g>
      )}
    </svg>
  )
}

export default Extras
