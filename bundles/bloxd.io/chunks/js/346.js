export const id = 346;
export const ids = [346];
export const modules = {
  59644: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      postprocessVertexShaderWGSL: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "postprocessVertexShader",
      eJ = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    FJ.b.ShadersStoreWGSL[UJ] || (FJ.b.ShadersStoreWGSL[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);