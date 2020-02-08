import React from 'react'

const Mouth = ({ mouth, color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      fill="none"
      viewBox={
        mouth === 'mouth_1'
          ? '0 0 319 167'
          : mouth === 'mouth_2'
          ? '0 0 289 102'
          : mouth === 'mouth_3'
          ? '0 0 380 82'
          : null
      }
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {mouth === 'mouth_1' && (
        <path
          id="mouth_1"
          d="M5,8.464c0.337,54.685 29.646,105.082 77.002,132.423c73.613,42.5 167.883,17.241 210.383,-56.371c13.94,-24.145 21.068,-51.634 20.614,-79.516l-31.256,0.511c0.36,22.227 -5.319,44.133 -16.429,63.376c-33.875,58.673 -109.01,78.802 -167.682,44.928c-37.744,-21.792 -61.104,-61.964 -61.378,-105.539l-31.254,0.188Z"
          style={{ fill: `${color}`, stroke: '#000', strokeWidth: '10px' }}
        />
      )}
      {mouth === 'mouth_2' && (
        <path
          id="mouth_2"
          d="M5,5c0,50.617 62.294,91.706 139.018,91.706c76.727,0 139.021,-41.089 139.021,-91.706c-32.432,15.18 -83.559,27.513 -139.021,27.513c-55.453,0 -106.579,-12.333 -139.018,-27.513Z"
          style={{ fill: `${color}`, stroke: '#000', strokeWidth: '10px' }}
        />
      )}
      {mouth === 'mouth_3' && (
        <path
          id="mouth_3"
          d="M374.625,5c-103.221,90.289 -259.875,97.95 -369.625,9.806"
          style={{ fillOpacity: 0, stroke: '#000', strokeWidth: '10px' }}
        />
      )}
    </svg>
  )
}

export default Mouth
