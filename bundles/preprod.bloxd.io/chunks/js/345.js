export const id = 345;
export const ids = [345];
export const modules = {
  59966: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      lod3DPixelShader: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "lod3DPixelShader",
      fy = "precision highp float;precision highp sampler3D;const float GammaEncodePowerApprox=1.0/2.2;varying vec2 vUV;uniform sampler3D textureSampler;uniform float lod;uniform float slice;uniform int gamma;void main(void)\n{ivec3 textureCoordinates=ivec3(vUV*vec2(textureSize(textureSampler,0).xy),int(slice));gl_FragColor=texelFetch(textureSampler,textureCoordinates,int(lod));if (gamma==0) {gl_FragColor.rgb=pow(gl_FragColor.rgb,vec3(GammaEncodePowerApprox));}}\n";
    Uy.e.ShadersStore[hy] || (Uy.e.ShadersStore[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);