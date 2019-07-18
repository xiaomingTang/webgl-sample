import React from "react"

import { createGLShader, createGLProgram, resizeToDisplaySize } from "@Src/utils/webgl-utils"

import vertexShaderSource from "@Src/components/glsl/vertexShader.glsl"
import fragmentShaderSource from "@Src/components/glsl/fragmentShader.glsl"

const canvas = document.querySelector("#canvas") as HTMLCanvasElement
const gl = canvas.getContext("webgl")

window.addEventListener("resize", () => {
  if (gl) {
    resizeToDisplaySize(canvas)
    const { width, height } = canvas
    gl.viewport(0, 0, width, height)
  }
})

if (gl) {
  const vertexShader = createGLShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  const fragmentShader = createGLShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
  const program = createGLProgram(gl, vertexShader, fragmentShader)
  if (program) {
    const positions = new Float32Array([0, 0, 0, 0.5, 0.7, 0])
    const posAttrLoc = gl.getAttribLocation(program, "a_position")
    const posBuffer = gl.createBuffer() as WebGLBuffer
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)

    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.useProgram(program)
    gl.enableVertexAttribArray(posAttrLoc)
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)

    const [size, type, normalize, stride, offset1] = [2, gl.FLOAT, false, 0, 0]
    gl.vertexAttribPointer(posAttrLoc, size, type, normalize, stride, offset1)

    const [primitiveType, offset2, count] = [gl.TRIANGLES, 0, 3]
    gl.drawArrays(primitiveType, offset2, count)
  }
}

export default function App(): React.ReactElement<HTMLElement> {
  return <React.Fragment>
    nihao
  </React.Fragment>
}
