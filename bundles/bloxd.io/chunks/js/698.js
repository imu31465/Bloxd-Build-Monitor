export const id = 698;
export const ids = [698];
export const modules = {
  64870: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      proceduralVertexShader: () => yV
    });
    var JV = xV(41108);
    const YV = "proceduralVertexShader",
      UV = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    JV.d.ShadersStore[YV] || (JV.d.ShadersStore[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);