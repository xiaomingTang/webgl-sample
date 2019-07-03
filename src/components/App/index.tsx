import React from "react"
import { Button } from "antd"

import ButtonImage from "@Src/assets/images/buttons.png"
import Styles from "./index.module.scss"

export default function App(): React.ReactElement<HTMLElement> {
  return <React.Fragment>
    <Button type="primary" icon="exclamation-circle" onClick={() => {
      console.log(123)
    }}>你好</Button>
    <br />
    <img className={Styles.container} src={ButtonImage} alt="测试图片" />
  </React.Fragment>
}
