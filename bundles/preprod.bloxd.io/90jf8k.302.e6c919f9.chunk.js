export const id = 302;
export const ids = [302];
export const modules = {
  40008: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF
    });
    var CF = SF(37824);
    const AF = "clipPlaneFragment",
      uF = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    CF.c.IncludesShadersStore[AF] || (CF.c.IncludesShadersStore[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  },
  4e4: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF
    });
    var CF = SF(37824);
    const AF = "clipPlaneFragmentDeclaration",
      uF = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    CF.c.IncludesShadersStore[AF] || (CF.c.IncludesShadersStore[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  },
  40044: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => hF
    });
    var CF = SF(37824);
    const AF = "fogFragment",
      uF = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    CF.c.IncludesShadersStore[AF] || (CF.c.IncludesShadersStore[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  },
  40005: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF
    });
    var CF = SF(37824);
    const AF = "fogFragmentDeclaration",
      uF = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    CF.c.IncludesShadersStore[AF] || (CF.c.IncludesShadersStore[AF] = uF);
    const hF = {
      name: AF,
      shader: uF
    }
  },
  40425: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      colorPixelShader: () => iW
    });
    var CF = SF(37824),
      AF = SF(4e4),
      uF = SF(40005),
      hF = SF(40008),
      bW = SF(40044);
    const dF = "colorPixelShader",
      PF = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    CF.c.ShadersStore[dF] || (CF.c.ShadersStore[dF] = PF);
    const RF = [AF.c, uF.d, hF.b, bW.e];
    for (const eF of RF) CF.c.IncludesShadersStore[eF.name] || (CF.c.IncludesShadersStore[eF.name] = eF.shader);
    const iW = {
      name: dF,
      shader: PF
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);