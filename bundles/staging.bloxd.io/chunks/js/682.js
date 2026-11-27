export const id = 682;
export const ids = [682];
export const modules = {
  64748: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      postprocessVertexShaderWGSL: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "postprocessVertexShader",
      ar = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Zr.e.ShadersStoreWGSL[Wr] || (Zr.e.ShadersStoreWGSL[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);