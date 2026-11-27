export const id = 675;
export const ids = [675];
export const modules = {
  63978: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      lodPixelShader: () => Ke
    });
    var ye = He(40954);
    const be = "lodPixelShader",
      Me = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch(textureSampler,ivec2(vUV*vec2(textureDimensions)),int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    ye.d.ShadersStore[be] || (ye.d.ShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);