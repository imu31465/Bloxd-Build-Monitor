export const id = 694;
export const ids = [694];
export const modules = {
  64848: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      fxaaVertexShaderWGSL: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "fxaaVertexShader",
      ar = "attribute position: vec2f;uniform texelSize: vec2f;varying vUV: vec2f;varying sampleCoordS: vec2f;varying sampleCoordE: vec2f;varying sampleCoordN: vec2f;varying sampleCoordW: vec2f;varying sampleCoordNW: vec2f;varying sampleCoordSE: vec2f;varying sampleCoordNE: vec2f;varying sampleCoordSW: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd);vertexOutputs.sampleCoordS=vertexOutputs.vUV+ vec2f( 0.0,1.0)*uniforms.texelSize;vertexOutputs.sampleCoordE=vertexOutputs.vUV+ vec2f( 1.0,0.0)*uniforms.texelSize;vertexOutputs.sampleCoordN=vertexOutputs.vUV+ vec2f( 0.0,-1.0)*uniforms.texelSize;vertexOutputs.sampleCoordW=vertexOutputs.vUV+ vec2f(-1.0,0.0)*uniforms.texelSize;vertexOutputs.sampleCoordNW=vertexOutputs.vUV+ vec2f(-1.0,-1.0)*uniforms.texelSize;vertexOutputs.sampleCoordSE=vertexOutputs.vUV+ vec2f( 1.0,1.0)*uniforms.texelSize;vertexOutputs.sampleCoordNE=vertexOutputs.vUV+ vec2f( 1.0,-1.0)*uniforms.texelSize;vertexOutputs.sampleCoordSW=vertexOutputs.vUV+ vec2f(-1.0,1.0)*uniforms.texelSize;vertexOutputs.position=vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Zr.e.ShadersStoreWGSL[Wr] || (Zr.e.ShadersStoreWGSL[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);