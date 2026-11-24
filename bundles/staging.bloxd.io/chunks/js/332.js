export const id = 332;
export const ids = [332];
export const modules = {
  42181: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(39960);
    const Am = "clipPlaneFragment",
      am = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fClipDistance6>0.0)\n{discard;}\n#endif\n";
    hm.e.IncludesShadersStore[Am] || (hm.e.IncludesShadersStore[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  42167: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm
    });
    var hm = fm(39960);
    const Am = "clipPlaneFragmentDeclaration",
      am = "#ifdef CLIPPLANE\nvarying float fClipDistance;\n#endif\n#ifdef CLIPPLANE2\nvarying float fClipDistance2;\n#endif\n#ifdef CLIPPLANE3\nvarying float fClipDistance3;\n#endif\n#ifdef CLIPPLANE4\nvarying float fClipDistance4;\n#endif\n#ifdef CLIPPLANE5\nvarying float fClipDistance5;\n#endif\n#ifdef CLIPPLANE6\nvarying float fClipDistance6;\n#endif\n";
    hm.e.IncludesShadersStore[Am] || (hm.e.IncludesShadersStore[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  42222: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(39960);
    const Am = "fogFragment",
      am = "#ifdef FOG\nfloat fog=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor.rgb=mix(vFogColor,color.rgb,fog);\n#endif\n";
    hm.e.IncludesShadersStore[Am] || (hm.e.IncludesShadersStore[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  42175: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm
    });
    var hm = fm(39960);
    const Am = "fogFragmentDeclaration",
      am = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\n#define E 2.71828\nuniform vec4 vFogInfos;uniform vec3 vFogColor;varying vec3 vFogDistance;float CalcFogFactor()\n{float fogCoeff=1.0;float fogStart=vFogInfos.y;float fogEnd=vFogInfos.z;float fogDensity=vFogInfos.w;float fogDistance=length(vFogDistance);if (FOGMODE_LINEAR==vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    hm.e.IncludesShadersStore[Am] || (hm.e.IncludesShadersStore[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  42615: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      colorPixelShader: () => pm
    });
    var hm = fm(39960),
      Am = fm(42167),
      am = fm(42175),
      xm = fm(42181),
      wm = fm(42222);
    const Dm = "colorPixelShader",
      im = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vec4 vColor;\n#else\nuniform vec4 color;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\ngl_FragColor=vColor;\n#else\ngl_FragColor=color;\n#endif\n#include<fogFragment>(color,gl_FragColor)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    hm.e.ShadersStore[Dm] || (hm.e.ShadersStore[Dm] = im);
    const Rm = [Am.b, am.d, xm.c, wm.c];
    for (const Em of Rm) hm.e.IncludesShadersStore[Em.name] || (hm.e.IncludesShadersStore[Em.name] = Em.shader);
    const pm = {
      name: Dm,
      shader: im
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);