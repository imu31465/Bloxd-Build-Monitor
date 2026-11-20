export const id = 356;
export const ids = [356];
export const modules = {
  60810: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      postprocessVertexShaderWGSL: () => Tb
    });
    var kb = sb(39267);
    const Wb = "postprocessVertexShader",
      ab = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    kb.d.ShadersStoreWGSL[Wb] || (kb.d.ShadersStoreWGSL[Wb] = ab);
    const Tb = {
      name: Wb,
      shader: ab
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);