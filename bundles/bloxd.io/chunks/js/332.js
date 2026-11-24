export const id = 332;
export const ids = [332];
export const modules = {
  42185: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => xS
    });
    var tS = gS(39899);
    const bS = "clipPlaneFragment",
      XS = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    tS.c.IncludesShadersStore[bS] || (tS.c.IncludesShadersStore[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  42173: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(39899);
    const bS = "clipPlaneFragmentDeclaration",
      XS = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    tS.c.IncludesShadersStore[bS] || (tS.c.IncludesShadersStore[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  42211: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(39899);
    const bS = "fogFragment",
      XS = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    tS.c.IncludesShadersStore[bS] || (tS.c.IncludesShadersStore[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  42176: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(39899);
    const bS = "fogFragmentDeclaration",
      XS = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    tS.c.IncludesShadersStore[bS] || (tS.c.IncludesShadersStore[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  42584: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      colorPixelShader: () => fS
    });
    var tS = gS(39899),
      bS = gS(42173),
      XS = gS(42176),
      xS = gS(42185),
      NS = gS(42211);
    const qS = "colorPixelShader",
      uS = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    tS.c.ShadersStore[qS] || (tS.c.ShadersStore[qS] = uS);
    const IS = [bS.e, XS.e, xS.d, NS.e];
    for (const kS of IS) tS.c.IncludesShadersStore[kS.name] || (tS.c.IncludesShadersStore[kS.name] = kS.shader);
    const fS = {
      name: qS,
      shader: uS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);