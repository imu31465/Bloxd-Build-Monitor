export const id = 672;
export const ids = [672];
export const modules = {
  64241: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      postprocessVertexShaderWGSL: () => hH
    });
    var AH = LH(41138);
    const rH = "postprocessVertexShader",
      SH = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    AH.c.ShadersStoreWGSL[rH] || (AH.c.ShadersStoreWGSL[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);