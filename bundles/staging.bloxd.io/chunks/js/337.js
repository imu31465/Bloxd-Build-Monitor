export const id = 337;
export const ids = [337];
export const modules = {
  42632: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(40237);
    const SG = "clipPlaneFragment",
      LG = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  },
  42620: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(40237);
    const SG = "clipPlaneFragmentDeclaration",
      LG = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  },
  42674: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG
    });
    var wG = ZG(40237);
    const SG = "fogFragment",
      LG = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  },
  42623: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG
    });
    var wG = ZG(40237);
    const SG = "fogFragmentDeclaration",
      LG = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    wG.e.IncludesShadersStore[SG] || (wG.e.IncludesShadersStore[SG] = LG);
    const yG = {
      name: SG,
      shader: LG
    }
  },
  43021: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      colorPixelShader: () => pG
    });
    var wG = ZG(40237),
      SG = ZG(42620),
      LG = ZG(42623),
      yG = ZG(42632),
      kG = ZG(42674);
    const UG = "colorPixelShader",
      YG = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    wG.e.ShadersStore[UG] || (wG.e.ShadersStore[UG] = YG);
    const VG = [SG.e, LG.d, yG.e, kG.d];
    for (const fG of VG) wG.e.IncludesShadersStore[fG.name] || (wG.e.IncludesShadersStore[fG.name] = fG.shader);
    const pG = {
      name: UG,
      shader: YG
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);