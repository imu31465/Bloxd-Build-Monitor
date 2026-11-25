export const id = 369;
export const ids = [369];
export const modules = {
  61445: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      lod3DPixelShader: () => GB
    });
    var TB = ZB(39905);
    const JB = "lod3DPixelShader",
      oB = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    TB.c.ShadersStore[JB] || (TB.c.ShadersStore[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);