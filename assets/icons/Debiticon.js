import React from 'react'
import Svg, { Path } from "react-native-svg"


function Debiticon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
  >
    <Path
      stroke="#F44336"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m2.25 12.75 4.5-4.5 3 3 6-6"
    />
    <Path
      stroke="#F44336"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M12.75 5.25h3v3"
    />
  </Svg>
  )
}

export default Debiticon