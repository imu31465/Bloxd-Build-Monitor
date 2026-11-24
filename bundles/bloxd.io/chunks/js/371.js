export const id = 371;
export const ids = [371];
export const modules = {
  61570: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      lodPixelShader: () => IB
    });
    var QB = zB(39932);
    const nB = "lodPixelShader",
      dB = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch(textureSampler,ivec2(vUV*vec2(textureDimensions)),int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    QB.e.ShadersStore[nB] || (QB.e.ShadersStore[nB] = dB);
    const IB = {
      name: nB,
      shader: dB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);