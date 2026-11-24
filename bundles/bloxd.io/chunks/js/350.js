export const id = 350;
export const ids = [350];
export const modules = {
  42500: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS
    });
    var tS = gS(39899);
    const bS = "clipPlaneFragment",
      XS = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fragmentInputs.fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fragmentInputs.fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fragmentInputs.fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fragmentInputs.fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fragmentInputs.fClipDistance6>0.0)\n{discard;}\n#endif\n";
    tS.c.IncludesShadersStoreWGSL[bS] || (tS.c.IncludesShadersStoreWGSL[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  42494: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(39899);
    const bS = "clipPlaneFragmentDeclaration",
      XS = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nvarying fClipDistance6: f32;\n#endif\n";
    tS.c.IncludesShadersStoreWGSL[bS] || (tS.c.IncludesShadersStoreWGSL[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  42541: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS
    });
    var tS = gS(39899);
    const bS = "fogFragment",
      XS = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
    tS.c.IncludesShadersStoreWGSL[bS] || (tS.c.IncludesShadersStoreWGSL[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  42496: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(39899);
    const bS = "fogFragmentDeclaration",
      XS = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: f32=uniforms.vFogInfos.y;var fogEnd: f32=uniforms.vFogInfos.z;var fogDensity: f32=uniforms.vFogInfos.w;var fogDistance: f32=length(fragmentInputs.vFogDistance);if (FOGMODE_LINEAR==uniforms.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    tS.c.IncludesShadersStoreWGSL[bS] || (tS.c.IncludesShadersStoreWGSL[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  42570: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      colorPixelShaderWGSL: () => fS
    });
    var tS = gS(39899),
      bS = gS(42494),
      XS = gS(42496),
      xS = gS(42500),
      NS = gS(42541);
    const qS = "colorPixelShader",
      uS = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nfragmentOutputs.color=input.vColor;\n#else\nfragmentOutputs.color=uniforms.color;\n#endif\n#include<fogFragment>(color,fragmentOutputs.color)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    tS.c.ShadersStoreWGSL[qS] || (tS.c.ShadersStoreWGSL[qS] = uS);
    const IS = [bS.e, XS.e, xS.b, NS.c];
    for (const kS of IS) tS.c.IncludesShadersStoreWGSL[kS.name] || (tS.c.IncludesShadersStoreWGSL[kS.name] = kS.shader);
    const fS = {
      name: qS,
      shader: uS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);