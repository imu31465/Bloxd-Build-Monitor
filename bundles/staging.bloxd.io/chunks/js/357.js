export const id = 357;
export const ids = [357];
export const modules = {
  60781: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      lod3DPixelShader: () => PU
    });
    var tU = gU(39225);
    const pU = "lod3DPixelShader",
      EU = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    tU.d.ShadersStore[pU] || (tU.d.ShadersStore[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);