export const id = 638;
export const ids = [638];
export const modules = {
  44841: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU
    });
    var cU = zU(40961);
    const yU = "clipPlaneFragment",
      QU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  },
  44833: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => AU
    });
    var cU = zU(40961);
    const yU = "clipPlaneFragmentDeclaration",
      QU = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  },
  44866: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    var cU = zU(40961);
    const yU = "fogFragment",
      QU = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  },
  44838: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => AU
    });
    var cU = zU(40961);
    const yU = "fogFragmentDeclaration",
      QU = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    cU.b.IncludesShadersStore[yU] || (cU.b.IncludesShadersStore[yU] = QU);
    const AU = {
      name: yU,
      shader: QU
    }
  },
  45242: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      colorPixelShader: () => YU
    });
    var cU = zU(40961),
      yU = zU(44833),
      QU = zU(44838),
      AU = zU(44841),
      FU = zU(44866);
    const oU = "colorPixelShader",
      DU = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    cU.b.ShadersStore[oU] || (cU.b.ShadersStore[oU] = DU);
    const EU = [yU.c, QU.b, AU.c, FU.e];
    for (const NU of EU) cU.b.IncludesShadersStore[NU.name] || (cU.b.IncludesShadersStore[NU.name] = NU.shader);
    const YU = {
      name: oU,
      shader: DU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);