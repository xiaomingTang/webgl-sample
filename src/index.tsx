import React from "react"
import ReactDom from "react-dom"
import { Button } from "antd"

const container = document.querySelector("#root")

ReactDom.render(
    <Button>你好</Button>,
    container
)
