export const id = 364;
export const ids = [364];
export const modules = {
  61469: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      postprocessVertexShaderWGSL: () => xm
    });
    var hm = fm(39960);
    const Am = "postprocessVertexShader",
      am = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    hm.e.ShadersStoreWGSL[Am] || (hm.e.ShadersStoreWGSL[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);