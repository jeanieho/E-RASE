import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";
// import Greeting from "../Components/ItemDisplay"

function ForSale(name, png, price, description, email, categoryValue) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{price}</Text>
      <Text>{description}</Text>
      <Text><Image source={{ uri: png }} style={{ width: 200, height: 200 }} /></Text>
    </View>
   );
 }

const CommunityScreen = () => {


    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Greeting  name="hi" price= '$5.00' description= 'cool' email= 'blah' category= 'PP' png= 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEX///8AAAC0tLQVFRXg4ODl5eX8/Pzx8fGhoaH39/enp6fMzMzp6embm5vJycnd3d2+vr4NDQ1ra2tZWVlQUFBxcXGLi4teXl6VlZUlJSWCgoIqKio6OjowMDBLS0vW1tZDQ0N5eXlcBE/0AAADQklEQVRoge3baWOCMAwGYOsBqHjgxGPe//9PDlGUI0mTUsqH9f3K4JEqSeO2geoxg3+NJ6MekrzxaDJ2nkn0xoeDHjL0uMc97nGPe9zjksyjVV94sM2u/9sTnuZ7tVlbfGpij0c5fm6L7wIDfP7apY7idnicmLw5BT5ph6/V0eDWby/8CByS4BulFnJ8sM/xQzs8OGY/Z3Dr8Sk7bwN9WAX4ErsBXcLoMQRftADf5csXGuhYBHiS42Cp6hxfvcdKuEx3jC/e+KYP/FpM1HP3ePgZ57fu8dkHV2vnePrFT67x76ojvblLfF3GE5PW2gJPy7hRfzHHw3MFT+wUWSZ+U9XsXOK/NVwB+5LO8HMdT93h9VXPcnOGR038xxl+aeI2+gsLjwFbXRzhMwi30F9Y+B7EL62LLAcPQNtCf+HgawQ/tS2yHLxR3oqYbOKF+DTBcGjyLE6yhAPlrcgDOydIOToDR1c9yxg5Z60iK/j0SuDYJv6sRoxPox4fEzY2vzyvymj5enxB4vAmPj+Efxr5OLXqWZbAKRH5lgjwFfqgvXJtFtni2dS2fC0+pG3ozOKN0rZ8Lb7V4ef6Ex1+1krX93R4qFl11ewvO/x1CXHtqit1rD7Rk9LL1VQaHZ5iZCnVJ/qBvy4pzrCrT/SqcoSuNBp8zsLL/WWDvy4pvoMs6tZXtSPkcKHBTzz8W8x+6oeoSkPjdFMBiGbvpyoNjR+4+B67cbLSkHgAXAvJi1gCR+54pSFxcFKBc3/2lwCsxfgOm8ThSQXO8wLwHhuvNCTOX/VsJxsMgsYU/wpaaSg8PgpwtcD7APY1BoVjkwqSKVoUsD0NhW+wi8FBFv0Z5GtyAsfvRByk0hA49NCaBq40BE5NKtLAlYbALdpIpcFxYj40CDjL4zg9qYgDVRocJ54co0h+kRvqLiYNUGlQXNJUeGnuaVBcWN4YaVYaDLe+6goYaDFc2FRYudcHWgy3v+qqWWkQPIS+Z26dS8jCeZOKOAcW/ugGr/3JCILbLm9FUgbe0aqrWqWBcfakIs5Vj9vbQDWy1OHs+dAg5UoD4sBvsuxlpsHjSZfRveeO4nGPe9zjHve4x63ivf6bYK//INlb/i/+B+9pLsz8GMOjAAAAAElFTkSuQmCC'} /> */}
        {/* <Greeting name="React" price="5.00" description= "cool" email="blah" category = "W" png = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEX///8AAAC0tLQVFRXg4ODl5eX8/Pzx8fGhoaH39/enp6fMzMzp6embm5vJycnd3d2+vr4NDQ1ra2tZWVlQUFBxcXGLi4teXl6VlZUlJSWCgoIqKio6OjowMDBLS0vW1tZDQ0N5eXlcBE/0AAADQklEQVRoge3baWOCMAwGYOsBqHjgxGPe//9PDlGUI0mTUsqH9f3K4JEqSeO2geoxg3+NJ6MekrzxaDJ2nkn0xoeDHjL0uMc97nGPe9zjksyjVV94sM2u/9sTnuZ7tVlbfGpij0c5fm6L7wIDfP7apY7idnicmLw5BT5ph6/V0eDWby/8CByS4BulFnJ8sM/xQzs8OGY/Z3Dr8Sk7bwN9WAX4ErsBXcLoMQRftADf5csXGuhYBHiS42Cp6hxfvcdKuEx3jC/e+KYP/FpM1HP3ePgZ57fu8dkHV2vnePrFT67x76ojvblLfF3GE5PW2gJPy7hRfzHHw3MFT+wUWSZ+U9XsXOK/NVwB+5LO8HMdT93h9VXPcnOGR038xxl+aeI2+gsLjwFbXRzhMwi30F9Y+B7EL62LLAcPQNtCf+HgawQ/tS2yHLxR3oqYbOKF+DTBcGjyLE6yhAPlrcgDOydIOToDR1c9yxg5Z60iK/j0SuDYJv6sRoxPox4fEzY2vzyvymj5enxB4vAmPj+Efxr5OLXqWZbAKRH5lgjwFfqgvXJtFtni2dS2fC0+pG3ozOKN0rZ8Lb7V4ef6Ex1+1krX93R4qFl11ewvO/x1CXHtqit1rD7Rk9LL1VQaHZ5iZCnVJ/qBvy4pzrCrT/SqcoSuNBp8zsLL/WWDvy4pvoMs6tZXtSPkcKHBTzz8W8x+6oeoSkPjdFMBiGbvpyoNjR+4+B67cbLSkHgAXAvJi1gCR+54pSFxcFKBc3/2lwCsxfgOm8ThSQXO8wLwHhuvNCTOX/VsJxsMgsYU/wpaaSg8PgpwtcD7APY1BoVjkwqSKVoUsD0NhW+wi8FBFv0Z5GtyAsfvRByk0hA49NCaBq40BE5NKtLAlYbALdpIpcFxYj40CDjL4zg9qYgDVRocJ54co0h+kRvqLiYNUGlQXNJUeGnuaVBcWN4YaVYaDLe+6goYaDFc2FRYudcHWgy3v+qqWWkQPIS+Z26dS8jCeZOKOAcW/ugGr/3JCILbLm9FUgbe0aqrWqWBcfakIs5Vj9vbQDWy1OHs+dAg5UoD4sBvsuxlpsHjSZfRveeO4nGPe9zjHve4x63ivf6bYK//INlb/i/+B+9pLsz8GMOjAAAAAElFTkSuQmCC"/> */}
      </View>
    );
  }

export default CommunityScreen;