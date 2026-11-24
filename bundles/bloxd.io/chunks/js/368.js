export const id = 368;
export const ids = [368];
export const modules = {
  61499: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      postprocessVertexShaderWGSL: () => Sp
    });
    var Op = cp(40062);
    const op = "postprocessVertexShader",
      Ip = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    Op.b.ShadersStoreWGSL[op] || (Op.b.ShadersStoreWGSL[op] = Ip);
    const Sp = {
      name: op,
      shader: Ip
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);