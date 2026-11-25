export const id = 371;
export const ids = [371];
export const modules = {
  61977: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      lodPixelShader: () => yG
    });
    var wG = ZG(40237);
    const SG = "lodPixelShader",
      LG = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch(textureSampler,ivec2(vUV*vec2(textureDimensions)),int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    wG.e.ShadersStore[SG] || (wG.e.ShadersStore[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);