export const id = 369;
export const ids = [369];
export const modules = {
  61663: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      lod3DPixelShader: () => mt
    });
    var Ot = Vt(40061);
    const qt = "lod3DPixelShader",
      Dt = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    Ot.b.ShadersStore[qt] || (Ot.b.ShadersStore[qt] = Dt);
    const mt = {
      name: qt,
      shader: Dt
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);