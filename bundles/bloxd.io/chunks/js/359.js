export const id = 359;
export const ids = [359];
export const modules = {
  60792: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      lodPixelShader: () => PU
    });
    var tU = gU(39225);
    const pU = "lodPixelShader",
      EU = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch(textureSampler,ivec2(vUV*vec2(textureDimensions)),int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    tU.d.ShadersStore[pU] || (tU.d.ShadersStore[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);