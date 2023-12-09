import React from 'react'
import Svg, { Path } from "react-native-svg"


function Dropdownicon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
  >
    <Path
      fill="#7E84A5"
      d="m12.48 6.201-4.5 3.75c-.768.64-1.728-.512-.96-1.152l4.5-3.75c.768-.64 1.729.512.96 1.152Z"
    />
    <Path
      fill="#7E84A5"
      d="m3.48 5.049 4.5 3.75c.768.64-.192 1.793-.96 1.152l-4.5-3.75c-.768-.64.192-1.792.96-1.152Z"
    />
  </Svg>

  )
}

export default Dropdownicon