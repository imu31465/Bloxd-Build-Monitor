export const id = 371;
export const ids = [371];
export const modules = {
  61673: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      lodPixelShader: () => mt
    });
    var Ot = Vt(40061);
    const qt = "lodPixelShader",
      Dt = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch(textureSampler,ivec2(vUV*vec2(textureDimensions)),int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    Ot.b.ShadersStore[qt] || (Ot.b.ShadersStore[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);