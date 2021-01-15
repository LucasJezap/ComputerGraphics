var gl;
var points;
window.onload = function init() {
    var canvas = document.getElementById("gl-canvas");
    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL isn't available");
    }
    var vertices = 
    new Float32Array([-1, -0.5, -0.5, 0.5, 0, -0.5, 0, 0.25, 0.9, -0.5, 0.7, 0, 0, 0.5, 0.3, 0.6, 0.15, 0.7, -0.2, 0.6]);
    //  Configure WebGL
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.0, 0.92, 0.7, 1.0);
    //  load shaders 
    var program = initShaders(gl, "vertex-shader", "fragment-shader");
    gl.useProgram(program);

    // Initiate buffer and load data to GPU
    var bufferId = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    // Associate shader variables with buffer data and draw  
    var vP = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vP, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vP);
    render();
};
function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.LINE_LOOP, 0, 3);
    gl.drawArrays(gl.TRIANGLES, 3, 3);
    gl.drawArrays(gl.TRIANGLE_FAN, 6, 4);
}
