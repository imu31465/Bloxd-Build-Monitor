export const id = 381;
export const ids = [381];
export const modules = {
  61011: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      proceduralVertexShaderWGSL: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "proceduralVertexShader",
      Xz = "attribute position: vec2f;varying vPosition: vec2f;varying vUV: vec2f;const madd: vec2f= vec2f(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.vPosition=vertexInputs.position;vertexOutputs.vUV=vertexInputs.position*madd+madd;vertexOutputs.position= vec4f(vertexInputs.position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Fz.e.ShadersStoreWGSL[Wz] || (Fz.e.ShadersStoreWGSL[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);