import React from "react"
import ReactDom from "react-dom"

import App from "@Src/App/index"
import "./index.scss"

const container = document.querySelector("#root")

ReactDom.render(
  <App />,
  container,
)
