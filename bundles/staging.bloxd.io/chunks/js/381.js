export const id = 381;
export const ids = [381];
export const modules = {
  61637: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      proceduralVertexShaderWGSL: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "proceduralVertexShader",
      ak = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Rk.d.ShadersStoreWGSL[tk] || (Rk.d.ShadersStoreWGSL[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);