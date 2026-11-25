export const id = 641;
export const ids = [641];
export const modules = {
  44821: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    var OM = iM(40964);
    const SM = "clipPlaneFragment",
      jM = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  },
  44809: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM
    });
    var OM = iM(40964);
    const SM = "clipPlaneFragmentDeclaration",
      jM = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  },
  44868: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM
    });
    var OM = iM(40964);
    const SM = "fogFragment",
      jM = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  },
  44813: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => aM
    });
    var OM = iM(40964);
    const SM = "fogFragmentDeclaration",
      jM = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    OM.e.IncludesShadersStore[SM] || (OM.e.IncludesShadersStore[SM] = jM);
    const aM = {
      name: SM,
      shader: jM
    }
  },
  45246: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      colorPixelShader: () => LM
    });
    var OM = iM(40964),
      SM = iM(44809),
      jM = iM(44813),
      aM = iM(44821),
      PM = iM(44868);
    const nM = "colorPixelShader",
      QM = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    OM.e.ShadersStore[nM] || (OM.e.ShadersStore[nM] = QM);
    const zM = [SM.c, jM.c, aM.d, PM.b];
    for (const mM of zM) OM.e.IncludesShadersStore[mM.name] || (OM.e.IncludesShadersStore[mM.name] = mM.shader);
    const LM = {
      name: nM,
      shader: QM
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);