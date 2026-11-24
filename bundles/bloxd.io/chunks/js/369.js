export const id = 369;
export const ids = [369];
export const modules = {
  61556: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      lod3DPixelShader: () => IB
    });
    var QB = zB(39932);
    const nB = "lod3DPixelShader",
      dB = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    QB.e.ShadersStore[nB] || (QB.e.ShadersStore[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);