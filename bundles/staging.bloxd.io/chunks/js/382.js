export const id = 382;
export const ids = [382];
export const modules = {
  60948: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      proceduralVertexShader: () => RY
    });
    var FY = DY(38998);
    const AY = "proceduralVertexShader",
      IY = "attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    FY.b.ShadersStore[AY] || (FY.b.ShadersStore[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);