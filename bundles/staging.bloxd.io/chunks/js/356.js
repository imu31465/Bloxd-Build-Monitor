export const id = 356;
export const ids = [356];
export const modules = {
  60621: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      postprocessVertexShaderWGSL: () => fD
    });
    var ID = cD(39003);
    const pD = "postprocessVertexShader",
      iD = "attribute position: vec2<f32>;uniform scale: vec2<f32>;varying vUV: vec2<f32>;const madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vUV=(vertexInputs.position*madd+madd)*uniforms.scale;vertexOutputs.position=vec4(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    ID.e.ShadersStoreWGSL[pD] || (ID.e.ShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);