export const id = 350;
export const ids = [350];
export const modules = {
  42529: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    var hm = fm(39960);
    const Am = "clipPlaneFragment",
      am = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fragmentInputs.fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fragmentInputs.fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fragmentInputs.fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fragmentInputs.fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fragmentInputs.fClipDistance6>0.0)\n{discard;}\n#endif\n";
    hm.e.IncludesShadersStoreWGSL[Am] || (hm.e.IncludesShadersStoreWGSL[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  42519: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm
    });
    var hm = fm(39960);
    const Am = "clipPlaneFragmentDeclaration",
      am = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nvarying fClipDistance6: f32;\n#endif\n";
    hm.e.IncludesShadersStoreWGSL[Am] || (hm.e.IncludesShadersStoreWGSL[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  42564: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm
    });
    var hm = fm(39960);
    const Am = "fogFragment",
      am = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
    hm.e.IncludesShadersStoreWGSL[Am] || (hm.e.IncludesShadersStoreWGSL[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  42527: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm
    });
    var hm = fm(39960);
    const Am = "fogFragmentDeclaration",
      am = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: f32=uniforms.vFogInfos.y;var fogEnd: f32=uniforms.vFogInfos.z;var fogDensity: f32=uniforms.vFogInfos.w;var fogDistance: f32=length(fragmentInputs.vFogDistance);if (FOGMODE_LINEAR==uniforms.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    hm.e.IncludesShadersStoreWGSL[Am] || (hm.e.IncludesShadersStoreWGSL[Am] = am);
    const xm = {
      name: Am,
      shader: am
    }
  },
  42600: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      colorPixelShaderWGSL: () => pm
    });
    var hm = fm(39960),
      Am = fm(42519),
      am = fm(42527),
      xm = fm(42529),
      wm = fm(42564);
    const Dm = "colorPixelShader",
      im = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nfragmentOutputs.color=input.vColor;\n#else\nfragmentOutputs.color=uniforms.color;\n#endif\n#include<fogFragment>(color,fragmentOutputs.color)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    hm.e.ShadersStoreWGSL[Dm] || (hm.e.ShadersStoreWGSL[Dm] = im);
    const Rm = [Am.d, am.e, xm.c, wm.b];
    for (const Em of Rm) hm.e.IncludesShadersStoreWGSL[Em.name] || (hm.e.IncludesShadersStoreWGSL[Em.name] = Em.shader);
    const pm = {
      name: Dm,
      shader: im
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);