export const id = 668;
export const ids = [668];
export const modules = {
  54510: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR
    });
    var yR = GR(41387);
    const tR = "clipPlaneFragment",
      uR = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fragmentInputs.fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fragmentInputs.fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fragmentInputs.fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fragmentInputs.fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fragmentInputs.fClipDistance6>0.0)\n{discard;}\n#endif\n";
    yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  54499: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR = GR(41387);
    const tR = "clipPlaneFragmentDeclaration",
      uR = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nvarying fClipDistance6: f32;\n#endif\n";
    yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  54541: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR = GR(41387);
    const tR = "fogFragment",
      uR = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
    yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  54506: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR
    });
    var yR = GR(41387);
    const tR = "fogFragmentDeclaration",
      uR = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: f32=uniforms.vFogInfos.y;var fogEnd: f32=uniforms.vFogInfos.z;var fogDensity: f32=uniforms.vFogInfos.w;var fogDistance: f32=length(fragmentInputs.vFogDistance);if (FOGMODE_LINEAR==uniforms.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  54565: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      colorPixelShaderWGSL: () => KR
    });
    var yR = GR(41387),
      tR = GR(54499),
      uR = GR(54506),
      ZR = GR(54510),
      qR = GR(54541);
    const iR = "colorPixelShader",
      fR = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nfragmentOutputs.color=input.vColor;\n#else\nfragmentOutputs.color=uniforms.color;\n#endif\n#include<fogFragment>(color,fragmentOutputs.color)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    yR.b.ShadersStoreWGSL[iR] || (yR.b.ShadersStoreWGSL[iR] = fR);
    const VR = [tR.b, uR.e, ZR.d, qR.b];
    for (const wR of VR) yR.b.IncludesShadersStoreWGSL[wR.name] || (yR.b.IncludesShadersStoreWGSL[wR.name] = wR.shader);
    const KR = {
      name: iR,
      shader: fR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);