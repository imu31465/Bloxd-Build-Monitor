export const id = 365;
export const ids = [365];
export const modules = {
  61069: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      lod3DPixelShader: () => nC
    });
    var QC = ZC(39674);
    const wC = "lod3DPixelShader",
      bC = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    QC.b.ShadersStore[wC] || (QC.b.ShadersStore[wC] = bC);
    const nC = {
      name: wC,
      shader: bC
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);