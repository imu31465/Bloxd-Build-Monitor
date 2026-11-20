export const id = 340;
export const ids = [340];
export const modules = {
  41838: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU
    });
    var tU = gU(39225);
    const pU = "clipPlaneFragment",
      EU = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fragmentInputs.fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fragmentInputs.fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fragmentInputs.fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fragmentInputs.fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fragmentInputs.fClipDistance6>0.0)\n{discard;}\n#endif\n";
    tU.d.IncludesShadersStoreWGSL[pU] || (tU.d.IncludesShadersStoreWGSL[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41828: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU
    });
    var tU = gU(39225);
    const pU = "clipPlaneFragmentDeclaration",
      EU = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nvarying fClipDistance6: f32;\n#endif\n";
    tU.d.IncludesShadersStoreWGSL[pU] || (tU.d.IncludesShadersStoreWGSL[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41864: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU
    });
    var tU = gU(39225);
    const pU = "fogFragment",
      EU = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
    tU.d.IncludesShadersStoreWGSL[pU] || (tU.d.IncludesShadersStoreWGSL[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41833: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(39225);
    const pU = "fogFragmentDeclaration",
      EU = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: f32=uniforms.vFogInfos.y;var fogEnd: f32=uniforms.vFogInfos.z;var fogDensity: f32=uniforms.vFogInfos.w;var fogDistance: f32=length(fragmentInputs.vFogDistance);if (FOGMODE_LINEAR==uniforms.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    tU.d.IncludesShadersStoreWGSL[pU] || (tU.d.IncludesShadersStoreWGSL[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41895: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      colorPixelShaderWGSL: () => GU
    });
    var tU = gU(39225),
      pU = gU(41828),
      EU = gU(41833),
      PU = gU(41838),
      TU = gU(41864);
    const qU = "colorPixelShader",
      KU = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nfragmentOutputs.color=input.vColor;\n#else\nfragmentOutputs.color=uniforms.color;\n#endif\n#include<fogFragment>(color,fragmentOutputs.color)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    tU.d.ShadersStoreWGSL[qU] || (tU.d.ShadersStoreWGSL[qU] = KU);
    const cU = [pU.c, EU.d, PU.e, TU.b];
    for (const jU of cU) tU.d.IncludesShadersStoreWGSL[jU.name] || (tU.d.IncludesShadersStoreWGSL[jU.name] = jU.shader);
    const GU = {
      name: qU,
      shader: KU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);