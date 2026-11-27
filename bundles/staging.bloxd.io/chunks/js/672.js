export const id = 672;
export const ids = [672];
export const modules = {
  63952: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      postprocessVertexShaderWGSL: () => Ke
    });
    var ye = He(40954);
    const be = "postprocessVertexShader",
      Me = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    ye.d.ShadersStoreWGSL[be] || (ye.d.ShadersStoreWGSL[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);