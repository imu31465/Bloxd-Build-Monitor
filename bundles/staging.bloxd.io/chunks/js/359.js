export const id = 359;
export const ids = [359];
export const modules = {
  61182: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      lodPixelShader: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "lodPixelShader",
      ak = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch(textureSampler,ivec2(vUV*vec2(textureDimensions)),int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    Rk.d.ShadersStore[tk] || (Rk.d.ShadersStore[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);