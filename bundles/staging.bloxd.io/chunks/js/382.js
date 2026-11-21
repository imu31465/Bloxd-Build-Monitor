export const id = 382;
export const ids = [382];
export const modules = {
  61582: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      proceduralVertexShaderWGSL: () => Pd
    });
    var pd = kd(39829);
    const Nd = "proceduralVertexShader",
      Wd = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    pd.c.ShadersStoreWGSL[Nd] || (pd.c.ShadersStoreWGSL[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);