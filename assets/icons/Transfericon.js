import React from 'react'
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Transfericon() {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      clipPath="url(#a)"
    >
      <Path d="M14.316 9.098a2 2 0 0 0-1.886-1.334h-1.548a1.785 1.785 0 0 0-.382 3.53l2.357.514a2 2 0 0 1-.428 3.955h-1.332A2 2 0 0 1 9.21 14.43m2.552-6.667v-2m0 12v-2M3.425 23.14v-4.285h4.286" />
      <Path d="M22.95 9.95A11.143 11.143 0 0 1 3.426 19.12m-2.376-5.07a11.143 11.143 0 0 1 19.526-9.172" />
      <Path d="M20.575.86v4.286h-4.286" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
  )
}

export default Transfericon