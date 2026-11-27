export const id = 696;
export const ids = [696];
export const modules = {
  64858: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      fxaaVertexShader: () => jr
    });
    var Zr = Qr(41743);
    const Wr = "fxaaVertexShader",
      ar = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sampleCoordSW;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd);sampleCoordS=vUV+vec2( 0.0,1.0)*texelSize;sampleCoordE=vUV+vec2( 1.0,0.0)*texelSize;sampleCoordN=vUV+vec2( 0.0,-1.0)*texelSize;sampleCoordW=vUV+vec2(-1.0,0.0)*texelSize;sampleCoordNW=vUV+vec2(-1.0,-1.0)*texelSize;sampleCoordSE=vUV+vec2( 1.0,1.0)*texelSize;sampleCoordNE=vUV+vec2( 1.0,-1.0)*texelSize;sampleCoordSW=vUV+vec2(-1.0,1.0)*texelSize;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Zr.e.ShadersStore[Wr] || (Zr.e.ShadersStore[Wr] = ar);
    const jr = {
      name: Wr,
      shader: ar
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);