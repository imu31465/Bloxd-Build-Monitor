export const id = 310;
export const ids = [310];
export const modules = {
  40649: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "clipPlaneFragment",
      fy = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    Uy.e.IncludesShadersStore[hy] || (Uy.e.IncludesShadersStore[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  40639: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "clipPlaneFragmentDeclaration",
      fy = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    Uy.e.IncludesShadersStore[hy] || (Uy.e.IncludesShadersStore[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  40684: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "fogFragment",
      fy = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    Uy.e.IncludesShadersStore[hy] || (Uy.e.IncludesShadersStore[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  40644: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "fogFragmentDeclaration",
      fy = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    Uy.e.IncludesShadersStore[hy] || (Uy.e.IncludesShadersStore[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  41056: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      colorPixelShader: () => Ky
    });
    var Uy = Wy(38319),
      hy = Wy(40639),
      fy = Wy(40644),
      Zy = Wy(40649),
      cb = Wy(40684);
    const Py = "colorPixelShader",
      oy = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    Uy.e.ShadersStore[Py] || (Uy.e.ShadersStore[Py] = oy);
    const By = [hy.e, fy.b, Zy.b, cb.c];
    for (const ey of By) Uy.e.IncludesShadersStore[ey.name] || (Uy.e.IncludesShadersStore[ey.name] = ey.shader);
    const Ky = {
      name: Py,
      shader: oy
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);