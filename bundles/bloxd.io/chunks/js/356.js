export const id = 356;
export const ids = [356];
export const modules = {
  61148: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      postprocessVertexShaderWGSL: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "postprocessVertexShader",
      ak = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Rk.d.ShadersStoreWGSL[tk] || (Rk.d.ShadersStoreWGSL[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);