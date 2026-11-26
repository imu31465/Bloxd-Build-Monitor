export const id = 670;
export const ids = [670];
export const modules = {
  64085: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      lod3DPixelShader: () => AU
    });
    var cU = zU(40961);
    const yU = "lod3DPixelShader",
      QU = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    cU.b.ShadersStore[yU] || (cU.b.ShadersStore[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);