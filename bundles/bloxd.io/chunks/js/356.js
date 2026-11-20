export const id = 356;
export const ids = [356];
export const modules = {
  60514: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      postprocessVertexShaderWGSL: () => Eb
    });
    var Ab = Ub(38943);
    const Mb = "postprocessVertexShader",
      Tb = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Ab.d.ShadersStoreWGSL[Mb] || (Ab.d.ShadersStoreWGSL[Mb] = Tb);
    const Eb = {
      name: Mb,
      shader: Tb
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);