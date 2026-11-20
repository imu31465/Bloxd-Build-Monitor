export const id = 357;
export const ids = [357];
export const modules = {
  60780: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      postprocessVertexShaderWGSL: () => OT
    });
    var lT = cT(39474);
    const MT = "postprocessVertexShader",
      KT = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    lT.d.ShadersStoreWGSL[MT] || (lT.d.ShadersStoreWGSL[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);