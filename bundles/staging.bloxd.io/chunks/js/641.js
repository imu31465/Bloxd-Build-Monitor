export const id = 641;
export const ids = [641];
export const modules = {
  45396: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(40954);
    const be = "clipPlaneFragment",
      Me = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45380: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(40954);
    const be = "clipPlaneFragmentDeclaration",
      Me = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45422: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(40954);
    const be = "fogFragment",
      Me = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45388: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(40954);
    const be = "fogFragmentDeclaration",
      Me = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    ye.d.IncludesShadersStore[be] || (ye.d.IncludesShadersStore[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45785: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      colorPixelShader: () => Re
    });
    var ye = He(40954),
      be = He(45380),
      Me = He(45388),
      Ke = He(45396),
      Ue = He(45422);
    const Fe = "colorPixelShader",
      Je = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    ye.d.ShadersStore[Fe] || (ye.d.ShadersStore[Fe] = Je);
    const oe = [be.d, Me.d, Ke.b, Ue.b];
    for (const ke of oe) ye.d.IncludesShadersStore[ke.name] || (ye.d.IncludesShadersStore[ke.name] = ke.shader);
    const Re = {
      name: Fe,
      shader: Je
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);