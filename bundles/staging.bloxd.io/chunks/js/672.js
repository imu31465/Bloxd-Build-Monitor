export const id = 672;
export const ids = [672];
export const modules = {
  64421: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      postprocessVertexShaderWGSL: () => yV
    });
    var JV = xV(41108);
    const YV = "postprocessVertexShader",
      UV = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    JV.d.ShadersStoreWGSL[YV] || (JV.d.ShadersStoreWGSL[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);