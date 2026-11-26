export const id = 675;
export const ids = [675];
export const modules = {
  64267: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      lodPixelShader: () => hH
    });
    var AH = LH(41138);
    const rH = "lodPixelShader",
      SH = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch(textureSampler,ivec2(vUV*vec2(textureDimensions)),int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    AH.c.ShadersStore[rH] || (AH.c.ShadersStore[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);