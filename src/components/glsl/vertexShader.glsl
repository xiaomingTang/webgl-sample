attribute vec2 a_position;
uniform vec2 u_resolution;

void main() {
  gl_Position = vec4(
    a_position.x / u_resolution.x * 2.0 - 1.0,
    -(a_position.y / u_resolution.y * 2.0 - 1.0),
    1.0,
    1.0
  );
}
