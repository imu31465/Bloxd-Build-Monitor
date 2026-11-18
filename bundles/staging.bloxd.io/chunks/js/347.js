export const id = 347;
export const ids = [347];
export const modules = {
  59968: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      lod3DPixelShader: () => lB
    });
    var VB = dB(38595);
    const yB = "lod3DPixelShader",
      pB = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    VB.e.ShadersStore[yB] || (VB.e.ShadersStore[yB] = pB);
    const lB = {
      name: yB,
      shader: pB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);