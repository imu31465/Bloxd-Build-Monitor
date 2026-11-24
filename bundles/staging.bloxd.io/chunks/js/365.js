export const id = 365;
export const ids = [365];
export const modules = {
  61174: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      lod3DPixelShader: () => rD
    });
    var pD = wD(39776);
    const sD = "lod3DPixelShader",
      KD = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    pD.e.ShadersStore[sD] || (pD.e.ShadersStore[sD] = KD);
    const rD = {
      name: sD,
      shader: KD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);