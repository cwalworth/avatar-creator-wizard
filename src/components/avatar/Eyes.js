import React from 'react'

const Eyes = ({ eyes, color }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox={
        eyes === 'eyes_1'
          ? '0 0 43 15'
          : eyes === 'eyes_2'
          ? '0 0 27 7'
          : eyes === 'eyes_3'
          ? '0 0 34 12'
          : null
      }
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      {eyes === 'eyes_1' && (
        <g id="eyes_1">
          <g>
            <path
              d="M13.994,7.353l-13.281,6.641l0,-13.281l13.281,6.64Z"
              style={{
                fill: '#fff',
                stroke: '#000',
                strokeWidth: '1.43px'
              }}
            />
            <circle fill={color} cx="6.107" cy="7.55" r="1.205" />
            <path
              d="M28.228,7.353l13.281,6.641l0,-13.281l-13.281,6.64Z"
              style={{
                fill: '#fff',
                stroke: '#000',
                strokeWidth: '1.43px'
              }}
            />
            <circle fill={color} cx="36.115" cy="7.55" r="1.205" />
          </g>
        </g>
      )}
      {eyes === 'eyes_2' && (
        <g>
          <path
            d="M11.135,1.874c0,-0.79 -0.641,-1.431 -1.431,-1.431l-7.83,0c-0.79,0 -1.431,0.641 -1.431,1.431l0,2.862c0,0.789 0.641,1.431 1.431,1.431l7.83,0c0.79,0 1.431,-0.642 1.431,-1.431l0,-2.862Z"
            style={{ fill: '#fff', stroke: '#000', strokeWidth: '0.89px' }}
          />
          <circle fill={color} cx="6.144" cy="3.305" r="0.604" />
          <path
            d="M15.518,1.874c0,-0.79 0.641,-1.431 1.431,-1.431l7.83,0c0.79,0 1.431,0.641 1.431,1.431l0,2.862c0,0.789 -0.641,1.431 -1.431,1.431l-7.83,0c-0.79,0 -1.431,-0.642 -1.431,-1.431l0,-2.862Z"
            style={{ fill: '#fff', stroke: '#000', strokeWidth: '0.89px' }}
          />
          <circle fill={color} cx="20.509" cy="3.305" r="0.604" />
        </g>
      )}
      {eyes === 'eyes_3' && (
        <g>
          <g>
            <circle
              cx="5.822"
              cy="5.822"
              r="5.422"
              style={{ fill: '#fff', stroke: '#000', strokeWidth: '0.8px' }}
            />
            <circle cx="5.822" cy="5.822" r="1.043" fill={color} />
          </g>
          <g>
            <circle
              cx="27.314"
              cy="5.822"
              r="5.422"
              style={{ fill: '#fff', stroke: '#000', strokeWidth: '0.8px' }}
            />
            <circle cx="27.314" cy="5.822" r="1.043" fill={color} />
          </g>
        </g>
      )}
      }
    </svg>
  )
}

export default Eyes
