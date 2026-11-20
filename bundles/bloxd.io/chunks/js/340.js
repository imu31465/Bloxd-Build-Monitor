export const id = 340;
export const ids = [340];
export const modules = {
  42070: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => mu
    });
    var Eu = yu(39403);
    const Ku = "clipPlaneFragment",
      Qu = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fragmentInputs.fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fragmentInputs.fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fragmentInputs.fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fragmentInputs.fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fragmentInputs.fClipDistance6>0.0)\n{discard;}\n#endif\n";
    Eu.e.IncludesShadersStoreWGSL[Ku] || (Eu.e.IncludesShadersStoreWGSL[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  42055: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu
    });
    var Eu = yu(39403);
    const Ku = "clipPlaneFragmentDeclaration",
      Qu = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nvarying fClipDistance6: f32;\n#endif\n";
    Eu.e.IncludesShadersStoreWGSL[Ku] || (Eu.e.IncludesShadersStoreWGSL[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  42097: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu
    });
    var Eu = yu(39403);
    const Ku = "fogFragment",
      Qu = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
    Eu.e.IncludesShadersStoreWGSL[Ku] || (Eu.e.IncludesShadersStoreWGSL[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  42061: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    var Eu = yu(39403);
    const Ku = "fogFragmentDeclaration",
      Qu = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: f32=uniforms.vFogInfos.y;var fogEnd: f32=uniforms.vFogInfos.z;var fogDensity: f32=uniforms.vFogInfos.w;var fogDistance: f32=length(fragmentInputs.vFogDistance);if (FOGMODE_LINEAR==uniforms.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    Eu.e.IncludesShadersStoreWGSL[Ku] || (Eu.e.IncludesShadersStoreWGSL[Ku] = Qu);
    const mu = {
      name: Ku,
      shader: Qu
    }
  },
  42120: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      colorPixelShaderWGSL: () => ru
    });
    var Eu = yu(39403),
      Ku = yu(42055),
      Qu = yu(42061),
      mu = yu(42070),
      Ju = yu(42097);
    const Nu = "colorPixelShader",
      Xu = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nfragmentOutputs.color=input.vColor;\n#else\nfragmentOutputs.color=uniforms.color;\n#endif\n#include<fogFragment>(color,fragmentOutputs.color)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    Eu.e.ShadersStoreWGSL[Nu] || (Eu.e.ShadersStoreWGSL[Nu] = Xu);
    const Vu = [Ku.e, Qu.b, mu.c, Ju.d];
    for (const Bu of Vu) Eu.e.IncludesShadersStoreWGSL[Bu.name] || (Eu.e.IncludesShadersStoreWGSL[Bu.name] = Bu.shader);
    const ru = {
      name: Nu,
      shader: Xu
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);