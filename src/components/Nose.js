import React from 'react'

const Nose = ({ nose, color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      fill="none"
      viewBox={
        nose === 'nose_1'
          ? '0 0 467 215'
          : nose === 'nose_2'
          ? '0 0 328 265'
          : nose === 'nose_3'
          ? '0 0 207 403'
          : null
      }
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {nose === 'nose_1' && (
        <path
          id="nose_1"
          d="M-50,209.859l409.285,-204.859l47.596,177.632l-456.881,27.227Z"
          style={{ fill: `${color}`, stroke: '#000', strokeWidth: '10px' }}
        />
      )}
      {nose === 'nose_2' && (
        <path
          id="nose_2"
          d="M78.56,234.47c-18.542,-0.91 -35.92,-6.499 -48.532,-15.485c-33.371,-23.776 -33.371,-71.328 0,-118.88c23.36,-35.664 83.425,-71.328 133.48,-95.105c50.057,23.777 110.117,59.441 133.477,95.105c33.37,47.552 33.37,95.104 0,118.88c-12.61,8.986 -29.99,14.576 -48.53,15.485c-20.84,15.395 -51.19,25.096 -84.947,25.096c-33.759,0 -64.103,-9.701 -84.948,-25.096Z"
          style={{ fill: `${color}`, stroke: '#000', strokeWidth: '10px' }}
        />
      )}
      {nose === 'nose_3' && (
        <path
          id="nose_3"
          d="M103.239,5c0,0 -98.239,206.303 -98.239,294.718c0,54.22 44.02,98.239 98.239,98.239c54.22,0 98.24,-44.019 98.24,-98.239c0,-88.415 -98.24,-294.718 -98.24,-294.718Z"
          style={{ fill: `${color}`, stroke: '#000', strokeWidth: '10px' }}
        />
      )}
    </svg>
  )
}

export default Nose
