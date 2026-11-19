export const id = 357;
export const ids = [357];
export const modules = {
  60276: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      lod3DPixelShader: () => WT
    });
    var iT = IT(38617);
    const zT = "lod3DPixelShader",
      kT = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    iT.c.ShadersStore[zT] || (iT.c.ShadersStore[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);