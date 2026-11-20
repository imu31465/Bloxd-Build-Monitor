export const id = 322;
export const ids = [322];
export const modules = {
  41736: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu
    });
    var Eu = yu(39403);
    const Ku = "clipPlaneFragment",
      Qu = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    Eu.e.IncludesShadersStore[Ku] || (Eu.e.IncludesShadersStore[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  41730: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu
    });
    var Eu = yu(39403);
    const Ku = "clipPlaneFragmentDeclaration",
      Qu = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    Eu.e.IncludesShadersStore[Ku] || (Eu.e.IncludesShadersStore[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  41766: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    var Eu = yu(39403);
    const Ku = "fogFragment",
      Qu = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    Eu.e.IncludesShadersStore[Ku] || (Eu.e.IncludesShadersStore[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  41732: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    var Eu = yu(39403);
    const Ku = "fogFragmentDeclaration",
      Qu = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    Eu.e.IncludesShadersStore[Ku] || (Eu.e.IncludesShadersStore[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  42126: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      colorPixelShader: () => ru
    });
    var Eu = yu(39403),
      Ku = yu(41730),
      Qu = yu(41732),
      mu = yu(41736),
      Ju = yu(41766);
    const Nu = "colorPixelShader",
      Xu = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    Eu.e.ShadersStore[Nu] || (Eu.e.ShadersStore[Nu] = Xu);
    const Vu = [Ku.c, Qu.b, mu.e, Ju.b];
    for (const Bu of Vu) Eu.e.IncludesShadersStore[Bu.name] || (Eu.e.IncludesShadersStore[Bu.name] = Bu.shader);
    const ru = {
      name: Nu,
      shader: Xu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);