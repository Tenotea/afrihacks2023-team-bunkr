import React from 'react'
import Svg, { Path } from "react-native-svg"


function Scheduletransfericon({active}) {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <Path
      fill={active ? "#5BFF6C": "#484C63"}
      d="M10 3.578a.75.75 0 1 1 0-1.5h3.536a.75.75 0 1 1 0 1.5H10Zm-3.47.452a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0Z"
    />
    <Path
      fill={active ? "#5BFF6C": "#484C63"}
      fillRule="evenodd"
      d="M12 5.06a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm4.99 3.711a.5.5 0 0 0-.7-.7l-3.175 2.467-2.075 1.483a1.433 1.433 0 1 0 2 2l1.482-2.076 2.468-3.174Z"
      clipRule="evenodd"
    />
  </Svg>
  )
}

export default Scheduletransfericon