export const id = 641;
export const ids = [641];
export const modules = {
  45629: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH = LH(41138);
    const rH = "clipPlaneFragment",
      SH = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  45620: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => hH
    });
    var AH = LH(41138);
    const rH = "clipPlaneFragmentDeclaration",
      SH = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  45665: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH
    });
    var AH = LH(41138);
    const rH = "fogFragment",
      SH = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  45625: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH = LH(41138);
    const rH = "fogFragmentDeclaration",
      SH = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    AH.c.IncludesShadersStore[rH] || (AH.c.IncludesShadersStore[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  46015: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      colorPixelShader: () => XH
    });
    var AH = LH(41138),
      rH = LH(45620),
      SH = LH(45625),
      hH = LH(45629),
      tH = LH(45665);
    const zH = "colorPixelShader",
      CH = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    AH.c.ShadersStore[zH] || (AH.c.ShadersStore[zH] = CH);
    const EH = [rH.e, SH.d, hH.d, tH.c];
    for (const GH of EH) AH.c.IncludesShadersStore[GH.name] || (AH.c.IncludesShadersStore[GH.name] = GH.shader);
    const XH = {
      name: zH,
      shader: CH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);