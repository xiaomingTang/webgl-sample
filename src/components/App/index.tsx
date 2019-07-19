import React from "react"

import { createGLShader, createGLProgram, resizeToDisplaySize } from "@Src/utils/webgl-utils"

import vertexShaderSource from "@Src/components/glsl/vertexShader.glsl"
import fragmentShaderSource from "@Src/components/glsl/fragmentShader.glsl"

const canvas = document.querySelector("#canvas") as HTMLCanvasElement
const gl = canvas.getContext("webgl")

const resizeCanvas = function resizeCanvas() {
  if (gl) {
    resizeToDisplaySize(canvas)
    const { width, height } = canvas
    gl.viewport(0, 0, width, height)
  }
}

resizeCanvas()

window.addEventListener("resize", resizeCanvas)

if (gl) {
  const vertexShader = createGLShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
  const fragmentShader = createGLShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
  const program = createGLProgram(gl, vertexShader, fragmentShader)
  if (program) {
    gl.clearColor(0, 0, 0, 1)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.useProgram(program)

    const positions = new Float32Array([
      0, 0,
      0, 180,
      360, 360,
      18, 0,
      360, 180,
      180, 0,
    ])
    const posAttrLoc = gl.getAttribLocation(program, "a_position")
    const posBuffer = gl.createBuffer() as WebGLBuffer
    gl.enableVertexAttribArray(posAttrLoc)
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)

    const [size, type, normalize, stride, offset1] = [2, gl.FLOAT, false, 0, 0]
    gl.vertexAttribPointer(posAttrLoc, size, type, normalize, stride, offset1)

    const resolutionUnifLoc = gl.getUniformLocation(program, "u_resolution")
    gl.uniform2f(resolutionUnifLoc, gl.canvas.width, gl.canvas.height)

    const [primitiveType, offset2, count] = [gl.TRIANGLES, 0, 6]
    gl.drawArrays(primitiveType, offset2, count)
  }
}

export default function App(): React.ReactElement<HTMLElement> {
  return <React.Fragment>
    nihao
  </React.Fragment>
}
