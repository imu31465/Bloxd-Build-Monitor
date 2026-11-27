export const id = 682;
export const ids = [682];
export const modules = {
  64554: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      lod3DPixelShader: () => PW
    });
    var mW = OW(41392);
    const EW = "lod3DPixelShader",
      NW = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    mW.c.ShadersStore[EW] || (mW.c.ShadersStore[EW] = NW);
    const PW = {
      name: EW,
      shader: NW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);