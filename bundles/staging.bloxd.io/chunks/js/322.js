export const id = 322;
export const ids = [322];
export const modules = {
  41519: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU
    });
    var tU = gU(39225);
    const pU = "clipPlaneFragment",
      EU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    tU.d.IncludesShadersStore[pU] || (tU.d.IncludesShadersStore[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41504: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU
    });
    var tU = gU(39225);
    const pU = "clipPlaneFragmentDeclaration",
      EU = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    tU.d.IncludesShadersStore[pU] || (tU.d.IncludesShadersStore[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41553: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU
    });
    var tU = gU(39225);
    const pU = "fogFragment",
      EU = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    tU.d.IncludesShadersStore[pU] || (tU.d.IncludesShadersStore[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41510: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU
    });
    var tU = gU(39225);
    const pU = "fogFragmentDeclaration",
      EU = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    tU.d.IncludesShadersStore[pU] || (tU.d.IncludesShadersStore[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41912: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      colorPixelShader: () => GU
    });
    var tU = gU(39225),
      pU = gU(41504),
      EU = gU(41510),
      PU = gU(41519),
      TU = gU(41553);
    const qU = "colorPixelShader",
      KU = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    tU.d.ShadersStore[qU] || (tU.d.ShadersStore[qU] = KU);
    const cU = [pU.c, EU.e, PU.e, TU.c];
    for (const jU of cU) tU.d.IncludesShadersStore[jU.name] || (tU.d.IncludesShadersStore[jU.name] = jU.shader);
    const GU = {
      name: qU,
      shader: KU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);