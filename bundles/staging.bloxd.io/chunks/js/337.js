export const id = 337;
export const ids = [337];
export const modules = {
  42184: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(39905);
    const JB = "clipPlaneFragment",
      oB = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    TB.c.IncludesShadersStore[JB] || (TB.c.IncludesShadersStore[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  },
  42179: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(39905);
    const JB = "clipPlaneFragmentDeclaration",
      oB = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    TB.c.IncludesShadersStore[JB] || (TB.c.IncludesShadersStore[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  },
  42216: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB
    });
    var TB = ZB(39905);
    const JB = "fogFragment",
      oB = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    TB.c.IncludesShadersStore[JB] || (TB.c.IncludesShadersStore[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  },
  42182: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    var TB = ZB(39905);
    const JB = "fogFragmentDeclaration",
      oB = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    TB.c.IncludesShadersStore[JB] || (TB.c.IncludesShadersStore[JB] = oB);
    const GB = {
      name: JB,
      shader: oB
    }
  },
  42575: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      colorPixelShader: () => hB
    });
    var TB = ZB(39905),
      JB = ZB(42179),
      oB = ZB(42182),
      GB = ZB(42184),
      vB = ZB(42216);
    const kB = "colorPixelShader",
      cB = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    TB.c.ShadersStore[kB] || (TB.c.ShadersStore[kB] = cB);
    const nB = [JB.e, oB.e, GB.e, vB.d];
    for (const zB of nB) TB.c.IncludesShadersStore[zB.name] || (TB.c.IncludesShadersStore[zB.name] = zB.shader);
    const hB = {
      name: kB,
      shader: cB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);