import React from 'react'
import Svg, { Path } from "react-native-svg"

function Accounttabicon({focused}) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={19}
    fill="none"
  >
    <Path
        fill={focused ? "#5BFF6C" : "#8B92B6"}
      d="M9.673.224a1.125 1.125 0 0 0-1.346 0L.355 6.174C-.32 6.678.037 7.75.878 7.75h16.244c.843 0 1.198-1.072.524-1.575L9.673.224ZM9 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM0 17.125A2.625 2.625 0 0 1 2.625 14.5h12.75A2.625 2.625 0 0 1 18 17.125v.75c0 .345-.28.625-.625.625H.625A.623.623 0 0 1 0 17.875v-.75ZM4 13.5H2V8.75h2v4.75Zm2-4.75v4.75h2V8.75H6Zm4 0v4.75h2V8.75h-2Zm4 0v4.75h2V8.75h-2Z"
    />
  </Svg>
  )
}

export default Accounttabicon