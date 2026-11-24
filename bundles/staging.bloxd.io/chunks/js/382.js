export const id = 382;
export const ids = [382];
export const modules = {
  61382: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      fxaaVertexShader: () => gT
    });
    var WT = mT(39934);
    const zT = "fxaaVertexShader",
      MT = "attribute vec2 position;uniform vec2 texelSize;varying vec2 vUV;varying vec2 sampleCoordS;varying vec2 sampleCoordE;varying vec2 sampleCoordN;varying vec2 sampleCoordW;varying vec2 sampleCoordNW;varying vec2 sampleCoordSE;varying vec2 sampleCoordNE;varying vec2 sampleCoordSW;const vec2 madd=vec2(0.5,0.5);\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvUV=(position*madd+madd);sampleCoordS=vUV+vec2( 0.0,1.0)*texelSize;sampleCoordE=vUV+vec2( 1.0,0.0)*texelSize;sampleCoordN=vUV+vec2( 0.0,-1.0)*texelSize;sampleCoordW=vUV+vec2(-1.0,0.0)*texelSize;sampleCoordNW=vUV+vec2(-1.0,-1.0)*texelSize;sampleCoordSE=vUV+vec2( 1.0,1.0)*texelSize;sampleCoordNE=vUV+vec2( 1.0,-1.0)*texelSize;sampleCoordSW=vUV+vec2(-1.0,1.0)*texelSize;gl_Position=vec4(position,0.0,1.0);\n#define CUSTOM_VERTEX_MAIN_END\n}";
    WT.d.ShadersStore[zT] || (WT.d.ShadersStore[zT] = MT);
    const gT = {
      name: zT,
      shader: MT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);