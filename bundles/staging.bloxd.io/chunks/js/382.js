export const id = 382;
export const ids = [382];
export const modules = {
  61291: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      proceduralVertexShaderWGSL: () => gv
    });
    var hv = Pv(39162);
    const Sv = "proceduralVertexShader",
      ev = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    hv.d.ShadersStoreWGSL[Sv] || (hv.d.ShadersStoreWGSL[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);