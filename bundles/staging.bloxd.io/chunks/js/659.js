export const id = 659;
export const ids = [659];
export const modules = {
  45948: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH
    });
    var AH = LH(41138);
    const rH = "clipPlaneFragment",
      SH = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fragmentInputs.fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fragmentInputs.fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fragmentInputs.fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fragmentInputs.fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fragmentInputs.fClipDistance6>0.0)\n{discard;}\n#endif\n";
    AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  45936: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH
    });
    var AH = LH(41138);
    const rH = "clipPlaneFragmentDeclaration",
      SH = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nvarying fClipDistance6: f32;\n#endif\n";
    AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  45973: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    var AH = LH(41138);
    const rH = "fogFragment",
      SH = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
    AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  45939: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => hH
    });
    var AH = LH(41138);
    const rH = "fogFragmentDeclaration",
      SH = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: f32=uniforms.vFogInfos.y;var fogEnd: f32=uniforms.vFogInfos.z;var fogDensity: f32=uniforms.vFogInfos.w;var fogDistance: f32=length(fragmentInputs.vFogDistance);if (FOGMODE_LINEAR==uniforms.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    AH.c.IncludesShadersStoreWGSL[rH] || (AH.c.IncludesShadersStoreWGSL[rH] = SH);
    const hH = {
      name: rH,
      shader: SH
    }
  },
  46001: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      colorPixelShaderWGSL: () => XH
    });
    var AH = LH(41138),
      rH = LH(45936),
      SH = LH(45939),
      hH = LH(45948),
      tH = LH(45973);
    const zH = "colorPixelShader",
      CH = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nfragmentOutputs.color=input.vColor;\n#else\nfragmentOutputs.color=uniforms.color;\n#endif\n#include<fogFragment>(color,fragmentOutputs.color)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    AH.c.ShadersStoreWGSL[zH] || (AH.c.ShadersStoreWGSL[zH] = CH);
    const EH = [rH.b, SH.c, hH.b, tH.d];
    for (const GH of EH) AH.c.IncludesShadersStoreWGSL[GH.name] || (AH.c.IncludesShadersStoreWGSL[GH.name] = GH.shader);
    const XH = {
      name: zH,
      shader: CH
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);