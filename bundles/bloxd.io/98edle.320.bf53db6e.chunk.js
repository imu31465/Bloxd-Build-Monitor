export const id = 320;
export const ids = [320];
export const modules = {
  39918: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(37441);
    const CW = "clipPlaneFragment",
      zR = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fragmentInputs.fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fragmentInputs.fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fragmentInputs.fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fragmentInputs.fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fragmentInputs.fClipDistance6>0.0)\n{discard;}\n#endif\n";
    wW.c.IncludesShadersStoreWGSL[CW] || (wW.c.IncludesShadersStoreWGSL[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  39913: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW
    });
    var wW = MW(37441);
    const CW = "clipPlaneFragmentDeclaration",
      zR = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nvarying fClipDistance6: f32;\n#endif\n";
    wW.c.IncludesShadersStoreWGSL[CW] || (wW.c.IncludesShadersStoreWGSL[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  39965: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => AW
    });
    var wW = MW(37441);
    const CW = "fogFragment",
      zR = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
    wW.c.IncludesShadersStoreWGSL[CW] || (wW.c.IncludesShadersStoreWGSL[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  39915: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => AW
    });
    var wW = MW(37441);
    const CW = "fogFragmentDeclaration",
      zR = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: f32=uniforms.vFogInfos.y;var fogEnd: f32=uniforms.vFogInfos.z;var fogDensity: f32=uniforms.vFogInfos.w;var fogDistance: f32=length(fragmentInputs.vFogDistance);if (FOGMODE_LINEAR==uniforms.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    wW.c.IncludesShadersStoreWGSL[CW] || (wW.c.IncludesShadersStoreWGSL[CW] = zR);
    const AW = {
      name: CW,
      shader: zR
    }
  },
  39993: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      colorPixelShaderWGSL: () => BW
    });
    var wW = MW(37441),
      CW = MW(39913),
      zR = MW(39915),
      AW = MW(39918),
      bR = MW(39965);
    const yR = "colorPixelShader",
      NW = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nfragmentOutputs.color=input.vColor;\n#else\nfragmentOutputs.color=uniforms.color;\n#endif\n#include<fogFragment>(color,fragmentOutputs.color)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    wW.c.ShadersStoreWGSL[yR] || (wW.c.ShadersStoreWGSL[yR] = NW);
    const eW = [CW.b, zR.e, AW.c, bR.d];
    for (const tR of eW) wW.c.IncludesShadersStoreWGSL[tR.name] || (wW.c.IncludesShadersStoreWGSL[tR.name] = tR.shader);
    const BW = {
      name: yR,
      shader: NW
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);