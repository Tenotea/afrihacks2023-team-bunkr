import React from 'react'
import Svg, { Path } from "react-native-svg"


function Analyticstabicon({focused}) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
  >
    <Path
        fill={focused ? "#5BFF6C" : "#8B92B6"}
      fillRule="evenodd"
      d="M1.464 1.464C0 2.93 0 5.286 0 10c0 4.714 0 7.071 1.464 8.535C2.93 20 5.286 20 10 20c4.714 0 7.071 0 8.535-1.465C20 17.072 20 14.714 20 10s0-7.071-1.465-8.536C17.072 0 14.714 0 10 0S2.929 0 1.464 1.464ZM15 10.25a.75.75 0 0 1 .75.75v5a.75.75 0 1 1-1.5 0v-5a.75.75 0 0 1 .75-.75ZM10.75 4a.75.75 0 1 0-1.5 0v12a.75.75 0 1 0 1.5 0V4ZM5 6.25a.75.75 0 0 1 .75.75v9a.75.75 0 1 1-1.5 0V7A.75.75 0 0 1 5 6.25Z"
      clipRule="evenodd"
    />
  </Svg>
  )
}

export default Analyticstabicon