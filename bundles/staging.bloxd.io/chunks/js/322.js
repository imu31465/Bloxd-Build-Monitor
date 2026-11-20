export const id = 322;
export const ids = [322];
export const modules = {
  41574: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "clipPlaneFragment",
      ak = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    Rk.d.IncludesShadersStore[tk] || (Rk.d.IncludesShadersStore[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  },
  41563: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "clipPlaneFragmentDeclaration",
      ak = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    Rk.d.IncludesShadersStore[tk] || (Rk.d.IncludesShadersStore[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  },
  41609: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "fogFragment",
      ak = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    Rk.d.IncludesShadersStore[tk] || (Rk.d.IncludesShadersStore[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  },
  41571: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Xk
    });
    var Rk = Bk(39270);
    const tk = "fogFragmentDeclaration",
      ak = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    Rk.d.IncludesShadersStore[tk] || (Rk.d.IncludesShadersStore[tk] = ak);
    const Xk = {
      name: tk,
      shader: ak
    }
  },
  41983: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      colorPixelShader: () => Vk
    });
    var Rk = Bk(39270),
      tk = Bk(41563),
      ak = Bk(41571),
      Xk = Bk(41574),
      bk = Bk(41609);
    const wk = "colorPixelShader",
      dk = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    Rk.d.ShadersStore[wk] || (Rk.d.ShadersStore[wk] = dk);
    const sk = [tk.d, ak.d, Xk.b, bk.b];
    for (const Jk of sk) Rk.d.IncludesShadersStore[Jk.name] || (Rk.d.IncludesShadersStore[Jk.name] = Jk.shader);
    const Vk = {
      name: wk,
      shader: dk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);