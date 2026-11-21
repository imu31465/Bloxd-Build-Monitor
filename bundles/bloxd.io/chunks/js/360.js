export const id = 360;
export const ids = [360];
export const modules = {
  61152: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      lodPixelShader: () => Pd
    });
    var pd = kd(39829);
    const Nd = "lodPixelShader",
      Wd = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch(textureSampler,ivec2(vUV*vec2(textureDimensions)),int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    pd.c.ShadersStore[Nd] || (pd.c.ShadersStore[Nd] = Wd);
    const Pd = {
      name: Nd,
      shader: Wd
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);