export const id = 368;
export const ids = [368];
export const modules = {
  61652: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      postprocessVertexShaderWGSL: () => mt
    });
    var Ot = Vt(40061);
    const qt = "postprocessVertexShader",
      Dt = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Ot.b.ShadersStoreWGSL[qt] || (Ot.b.ShadersStoreWGSL[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);