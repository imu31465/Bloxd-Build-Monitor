export const id = 349;
export const ids = [349];
export const modules = {
  59672: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      lodPixelShader: () => XJ
    });
    var FJ = ZJ(38658);
    const UJ = "lodPixelShader",
      eJ = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch(textureSampler,ivec2(vUV*vec2(textureDimensions)),int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    FJ.b.ShadersStore[UJ] || (FJ.b.ShadersStore[UJ] = eJ);
    const XJ = {
      name: UJ,
      shader: eJ
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);