export const id = 323;
export const ids = [323];
export const modules = {
  41705: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(39474);
    const MT = "clipPlaneFragment",
      KT = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    lT.d.IncludesShadersStore[MT] || (lT.d.IncludesShadersStore[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  },
  41695: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT
    });
    var lT = cT(39474);
    const MT = "clipPlaneFragmentDeclaration",
      KT = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    lT.d.IncludesShadersStore[MT] || (lT.d.IncludesShadersStore[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  },
  41742: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT
    });
    var lT = cT(39474);
    const MT = "fogFragment",
      KT = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    lT.d.IncludesShadersStore[MT] || (lT.d.IncludesShadersStore[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  },
  41701: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT
    });
    var lT = cT(39474);
    const MT = "fogFragmentDeclaration",
      KT = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    lT.d.IncludesShadersStore[MT] || (lT.d.IncludesShadersStore[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  },
  42118: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      colorPixelShader: () => AT
    });
    var lT = cT(39474),
      MT = cT(41695),
      KT = cT(41701),
      OT = cT(41705),
      yT = cT(41742);
    const fT = "colorPixelShader",
      xT = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    lT.d.ShadersStore[fT] || (lT.d.ShadersStore[fT] = xT);
    const IT = [MT.b, KT.e, OT.d, yT.e];
    for (const CT of IT) lT.d.IncludesShadersStore[CT.name] || (lT.d.IncludesShadersStore[CT.name] = CT.shader);
    const AT = {
      name: fT,
      shader: xT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);