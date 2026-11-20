export const id = 360;
export const ids = [360];
export const modules = {
  60840: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      lodPixelShader: () => gv
    });
    var hv = Pv(39162);
    const Sv = "lodPixelShader",
      ev = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch(textureSampler,ivec2(vUV*vec2(textureDimensions)),int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    hv.d.ShadersStore[Sv] || (hv.d.ShadersStore[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);