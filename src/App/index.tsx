import React from "react"
import { Button } from "antd"

import Styles from "./index.module.scss"

export default function App() {
  return <React.Fragment>
    <Button type="primary" icon="exclamation-circle">你好</Button>
    <div className={Styles.test}>box-shadow</div>
  </React.Fragment>
}
