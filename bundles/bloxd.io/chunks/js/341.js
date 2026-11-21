export const id = 341;
export const ids = [341];
export const modules = {
  41875: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "clipPlaneFragment",
      oQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fragmentInputs.fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fragmentInputs.fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fragmentInputs.fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fragmentInputs.fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fragmentInputs.fClipDistance6>0.0)\n{discard;}\n#endif\n";
    LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41866: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "clipPlaneFragmentDeclaration",
      oQ = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nvarying fClipDistance6: f32;\n#endif\n";
    LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41909: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "fogFragment",
      oQ = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
    LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41871: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ
    });
    var LQ = wQ(39251);
    const qQ = "fogFragmentDeclaration",
      oQ = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: f32=uniforms.vFogInfos.y;var fogEnd: f32=uniforms.vFogInfos.z;var fogDensity: f32=uniforms.vFogInfos.w;var fogDistance: f32=length(fragmentInputs.vFogDistance);if (FOGMODE_LINEAR==uniforms.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    LQ.c.IncludesShadersStoreWGSL[qQ] || (LQ.c.IncludesShadersStoreWGSL[qQ] = oQ);
    const DQ = {
      name: qQ,
      shader: oQ
    }
  },
  41942: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      colorPixelShaderWGSL: () => HQ
    });
    var LQ = wQ(39251),
      qQ = wQ(41866),
      oQ = wQ(41871),
      DQ = wQ(41875),
      kQ = wQ(41909);
    const vQ = "colorPixelShader",
      mQ = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nfragmentOutputs.color=input.vColor;\n#else\nfragmentOutputs.color=uniforms.color;\n#endif\n#include<fogFragment>(color,fragmentOutputs.color)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    LQ.c.ShadersStoreWGSL[vQ] || (LQ.c.ShadersStoreWGSL[vQ] = mQ);
    const uQ = [qQ.b, oQ.b, DQ.e, kQ.d];
    for (const bQ of uQ) LQ.c.IncludesShadersStoreWGSL[bQ.name] || (LQ.c.IncludesShadersStoreWGSL[bQ.name] = bQ.shader);
    const HQ = {
      name: vQ,
      shader: mQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);