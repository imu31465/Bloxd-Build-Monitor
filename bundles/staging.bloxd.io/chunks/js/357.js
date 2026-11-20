export const id = 357;
export const ids = [357];
export const modules = {
  60814: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      postprocessVertexShaderWGSL: () => gv
    });
    var hv = Pv(39162);
    const Sv = "postprocessVertexShader",
      ev = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    hv.d.ShadersStoreWGSL[Sv] || (hv.d.ShadersStoreWGSL[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);