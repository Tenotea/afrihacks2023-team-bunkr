import React from "react";
import Svg, { Path } from "react-native-svg";

function Hometabicon({ focused }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
      <Path
        fill={focused ? "#5BFF6C" : "#8B92B6"}
        fillRule="evenodd"
        d="M11.106 20H8.894c-3.447 0-5.17 0-6.345-1.012-1.175-1.012-1.42-2.705-1.906-6.093l-.28-1.937c-.38-2.637-.57-3.956-.028-5.083.54-1.127 1.69-1.813 3.992-3.183l1.385-.825C7.8.622 8.846 0 10 0c1.154 0 2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.45 2.056 3.992 3.183.54 1.127.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093C16.276 20 14.553 20 11.106 20Zm-4.708-6.447a.75.75 0 0 1 1.049-.156c.728.54 1.607.853 2.553.853s1.825-.313 2.553-.853a.75.75 0 0 1 .894 1.205A5.766 5.766 0 0 1 10 15.75a5.766 5.766 0 0 1-3.447-1.148.75.75 0 0 1-.155-1.049Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}

export default Hometabicon;