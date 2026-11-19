export const id = 357;
export const ids = [357];
export const modules = {
  60466: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      lod3DPixelShader: () => RY
    });
    var FY = DY(38998);
    const AY = "lod3DPixelShader",
      IY = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    FY.b.ShadersStore[AY] || (FY.b.ShadersStore[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);