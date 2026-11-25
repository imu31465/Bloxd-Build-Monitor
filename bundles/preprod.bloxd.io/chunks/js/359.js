export const id = 359;
export const ids = [359];
export const modules = {
  42782: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "clipPlaneFragment",
      TQ = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fragmentInputs.fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fragmentInputs.fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fragmentInputs.fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fragmentInputs.fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fragmentInputs.fClipDistance6>0.0)\n{discard;}\n#endif\n";
    wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42774: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "clipPlaneFragmentDeclaration",
      TQ = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nvarying fClipDistance6: f32;\n#endif\n";
    wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42820: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "fogFragment",
      TQ = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
    wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42780: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ
    });
    var wQ = XQ(40126);
    const qQ = "fogFragmentDeclaration",
      TQ = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: f32=uniforms.vFogInfos.y;var fogEnd: f32=uniforms.vFogInfos.z;var fogDensity: f32=uniforms.vFogInfos.w;var fogDistance: f32=length(fragmentInputs.vFogDistance);if (FOGMODE_LINEAR==uniforms.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    wQ.b.IncludesShadersStoreWGSL[qQ] || (wQ.b.IncludesShadersStoreWGSL[qQ] = TQ);
    const zQ = {
      name: qQ,
      shader: TQ
    }
  },
  42839: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      colorPixelShaderWGSL: () => JQ
    });
    var wQ = XQ(40126),
      qQ = XQ(42774),
      TQ = XQ(42780),
      zQ = XQ(42782),
      sQ = XQ(42820);
    const FQ = "colorPixelShader",
      PQ = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nfragmentOutputs.color=input.vColor;\n#else\nfragmentOutputs.color=uniforms.color;\n#endif\n#include<fogFragment>(color,fragmentOutputs.color)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    wQ.b.ShadersStoreWGSL[FQ] || (wQ.b.ShadersStoreWGSL[FQ] = PQ);
    const gQ = [qQ.b, TQ.d, zQ.e, sQ.b];
    for (const rQ of gQ) wQ.b.IncludesShadersStoreWGSL[rQ.name] || (wQ.b.IncludesShadersStoreWGSL[rQ.name] = rQ.shader);
    const JQ = {
      name: FQ,
      shader: PQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);