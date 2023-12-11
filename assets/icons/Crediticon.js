import React from 'react'
import Svg, { Path } from "react-native-svg"

function Crediticon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
  >
    <Path
      stroke="#5BFF6C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.083}
      d="m2.25 5.25 4.5 4.5 3-3 6 6"
    />
    <Path
      stroke="#5BFF6C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.083}
      d="M12.75 12.75h3v-3"
    />
  </Svg>
  )
}

export default Crediticon