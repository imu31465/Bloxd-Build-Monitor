export const id = 359;
export const ids = [359];
export const modules = {
  61288: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      lodPixelShader: () => mu
    });
    var Eu = yu(39403);
    const Ku = "lodPixelShader",
      Qu = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch(textureSampler,ivec2(vUV*vec2(textureDimensions)),int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    Eu.e.ShadersStore[Ku] || (Eu.e.ShadersStore[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);