export const id = 369;
export const ids = [369];
export const modules = {
  61967: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      lod3DPixelShader: () => yG
    });
    var wG = ZG(40237);
    const SG = "lod3DPixelShader",
      LG = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    wG.e.ShadersStore[SG] || (wG.e.ShadersStore[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);