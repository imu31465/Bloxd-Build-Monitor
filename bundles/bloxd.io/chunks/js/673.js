export const id = 673;
export const ids = [673];
export const modules = {
  64438: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      lod3DPixelShader: () => yV
    });
    var JV = xV(41108);
    const YV = "lod3DPixelShader",
      UV = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    JV.d.ShadersStore[YV] || (JV.d.ShadersStore[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);