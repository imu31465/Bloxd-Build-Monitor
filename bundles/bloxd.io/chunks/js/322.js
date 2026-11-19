export const id = 322;
export const ids = [322];
export const modules = {
  41283: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD
    });
    var ID = cD(39003);
    const pD = "clipPlaneFragment",
      iD = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    ID.e.IncludesShadersStore[pD] || (ID.e.IncludesShadersStore[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41272: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD
    });
    var ID = cD(39003);
    const pD = "clipPlaneFragmentDeclaration",
      iD = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    ID.e.IncludesShadersStore[pD] || (ID.e.IncludesShadersStore[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41322: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD
    });
    var ID = cD(39003);
    const pD = "fogFragment",
      iD = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    ID.e.IncludesShadersStore[pD] || (ID.e.IncludesShadersStore[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41274: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD
    });
    var ID = cD(39003);
    const pD = "fogFragmentDeclaration",
      iD = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    ID.e.IncludesShadersStore[pD] || (ID.e.IncludesShadersStore[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41722: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      colorPixelShader: () => BD
    });
    var ID = cD(39003),
      pD = cD(41272),
      iD = cD(41274),
      fD = cD(41283),
      bD = cD(41322);
    const QD = "colorPixelShader",
      wD = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    ID.e.ShadersStore[QD] || (ID.e.ShadersStore[QD] = wD);
    const SD = [pD.b, iD.b, fD.c, bD.b];
    for (const yD of SD) ID.e.IncludesShadersStore[yD.name] || (ID.e.IncludesShadersStore[yD.name] = yD.shader);
    const BD = {
      name: QD,
      shader: wD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);