export const id = 358;
export const ids = [358];
export const modules = {
  60830: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      lod3DPixelShader: () => gv
    });
    var hv = Pv(39162);
    const Sv = "lod3DPixelShader",
      ev = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    hv.d.ShadersStore[Sv] || (hv.d.ShadersStore[Sv] = ev);
    const gv = {
      name: Sv,
      shader: ev
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);