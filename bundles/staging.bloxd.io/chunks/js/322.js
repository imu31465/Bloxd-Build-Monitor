export const id = 322;
export const ids = [322];
export const modules = {
  40971: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => WT
    });
    var iT = IT(38617);
    const zT = "clipPlaneFragment",
      kT = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    iT.c.IncludesShadersStore[zT] || (iT.c.IncludesShadersStore[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  },
  40960: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT
    });
    var iT = IT(38617);
    const zT = "clipPlaneFragmentDeclaration",
      kT = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    iT.c.IncludesShadersStore[zT] || (iT.c.IncludesShadersStore[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  },
  41e3: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => WT
    });
    var iT = IT(38617);
    const zT = "fogFragment",
      kT = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    iT.c.IncludesShadersStore[zT] || (iT.c.IncludesShadersStore[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  },
  40964: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT
    });
    var iT = IT(38617);
    const zT = "fogFragmentDeclaration",
      kT = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    iT.c.IncludesShadersStore[zT] || (iT.c.IncludesShadersStore[zT] = kT);
    const WT = {
      name: zT,
      shader: kT
    }
  },
  41373: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      colorPixelShader: () => DT
    });
    var iT = IT(38617),
      zT = IT(40960),
      kT = IT(40964),
      WT = IT(40971),
      XT = IT(41e3);
    const BT = "colorPixelShader",
      FT = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    iT.c.ShadersStore[BT] || (iT.c.ShadersStore[BT] = FT);
    const ST = [zT.d, kT.d, WT.e, XT.b];
    for (const LT of ST) iT.c.IncludesShadersStore[LT.name] || (iT.c.IncludesShadersStore[LT.name] = LT.shader);
    const DT = {
      name: BT,
      shader: FT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);