export const id = 363;
export const ids = [363];
export const modules = {
  60802: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      postprocessVertexShaderWGSL: () => bk
    });
    var Dk = ik(39412);
    const fk = "postprocessVertexShader",
      Sk = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Dk.d.ShadersStoreWGSL[fk] || (Dk.d.ShadersStoreWGSL[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);