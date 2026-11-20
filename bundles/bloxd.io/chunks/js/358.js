export const id = 358;
export const ids = [358];
export const modules = {
  60800: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      lod3DPixelShader: () => OT
    });
    var lT = cT(39474);
    const MT = "lod3DPixelShader",
      KT = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    lT.d.ShadersStore[MT] || (lT.d.ShadersStore[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);