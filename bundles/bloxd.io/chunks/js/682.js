export const id = 682;
export const ids = [682];
export const modules = {
  64897: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      postprocessVertexShaderWGSL: () => Xd
    });
    var Wd = md(41785);
    const Fd = "postprocessVertexShader",
      Rd = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Wd.e.ShadersStoreWGSL[Fd] || (Wd.e.ShadersStoreWGSL[Fd] = Rd);
    const Xd = {
      name: Fd,
      shader: Rd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);