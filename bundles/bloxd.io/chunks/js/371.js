export const id = 371;
export const ids = [371];
export const modules = {
  61651: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      lodPixelShader: () => Xu
    });
    var su = ju(40127);
    const Uu = "lodPixelShader",
      Zu = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch(textureSampler,ivec2(vUV*vec2(textureDimensions)),int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    su.b.ShadersStore[Uu] || (su.b.ShadersStore[Uu] = Zu);
    const Xu = {
      name: Uu,
      shader: Zu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);