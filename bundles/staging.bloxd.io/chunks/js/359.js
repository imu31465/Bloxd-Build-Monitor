export const id = 359;
export const ids = [359];
export const modules = {
  60475: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      lodPixelShader: () => RY
    });
    var FY = DY(38998);
    const AY = "lodPixelShader",
      IY = "precision highp float;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler2D textureSampler;uniform float lod;uniform vec2 texSize;uniform int gamma;void main(void)\n{ivec2 textureDimensions=textureSize(textureSampler,0);gl_FragColor=texelFetch(textureSampler,ivec2(vUV*vec2(textureDimensions)),int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    FY.b.ShadersStore[AY] || (FY.b.ShadersStore[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);