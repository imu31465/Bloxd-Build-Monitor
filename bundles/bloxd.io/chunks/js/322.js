export const id = 322;
export const ids = [322];
export const modules = {
  41204: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY
    });
    var FY = DY(38998);
    const AY = "clipPlaneFragment",
      IY = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    FY.b.IncludesShadersStore[AY] || (FY.b.IncludesShadersStore[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  41190: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(38998);
    const AY = "clipPlaneFragmentDeclaration",
      IY = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    FY.b.IncludesShadersStore[AY] || (FY.b.IncludesShadersStore[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  41242: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY
    });
    var FY = DY(38998);
    const AY = "fogFragment",
      IY = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    FY.b.IncludesShadersStore[AY] || (FY.b.IncludesShadersStore[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  41195: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY
    });
    var FY = DY(38998);
    const AY = "fogFragmentDeclaration",
      IY = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    FY.b.IncludesShadersStore[AY] || (FY.b.IncludesShadersStore[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  41618: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      colorPixelShader: () => uY
    });
    var FY = DY(38998),
      AY = DY(41190),
      IY = DY(41195),
      RY = DY(41204),
      OY = DY(41242);
    const gY = "colorPixelShader",
      aY = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    FY.b.ShadersStore[gY] || (FY.b.ShadersStore[gY] = aY);
    const vY = [AY.d, IY.c, RY.b, OY.c];
    for (const sY of vY) FY.b.IncludesShadersStore[sY.name] || (FY.b.IncludesShadersStore[sY.name] = sY.shader);
    const uY = {
      name: gY,
      shader: aY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);