export const id = 340;
export const ids = [340];
export const modules = {
  41556: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(38998);
    const AY = "clipPlaneFragment",
      IY = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fragmentInputs.fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fragmentInputs.fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fragmentInputs.fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fragmentInputs.fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fragmentInputs.fClipDistance6>0.0)\n{discard;}\n#endif\n";
    FY.b.IncludesShadersStoreWGSL[AY] || (FY.b.IncludesShadersStoreWGSL[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  41546: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(38998);
    const AY = "clipPlaneFragmentDeclaration",
      IY = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nvarying fClipDistance6: f32;\n#endif\n";
    FY.b.IncludesShadersStoreWGSL[AY] || (FY.b.IncludesShadersStoreWGSL[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  41587: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY
    });
    var FY = DY(38998);
    const AY = "fogFragment",
      IY = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
    FY.b.IncludesShadersStoreWGSL[AY] || (FY.b.IncludesShadersStoreWGSL[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  41551: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY
    });
    var FY = DY(38998);
    const AY = "fogFragmentDeclaration",
      IY = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: f32=uniforms.vFogInfos.y;var fogEnd: f32=uniforms.vFogInfos.z;var fogDensity: f32=uniforms.vFogInfos.w;var fogDistance: f32=length(fragmentInputs.vFogDistance);if (FOGMODE_LINEAR==uniforms.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    FY.b.IncludesShadersStoreWGSL[AY] || (FY.b.IncludesShadersStoreWGSL[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  41605: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      colorPixelShaderWGSL: () => uY
    });
    var FY = DY(38998),
      AY = DY(41546),
      IY = DY(41551),
      RY = DY(41556),
      OY = DY(41587);
    const gY = "colorPixelShader",
      aY = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nfragmentOutputs.color=input.vColor;\n#else\nfragmentOutputs.color=uniforms.color;\n#endif\n#include<fogFragment>(color,fragmentOutputs.color)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    FY.b.ShadersStoreWGSL[gY] || (FY.b.ShadersStoreWGSL[gY] = aY);
    const vY = [AY.d, IY.b, RY.d, OY.b];
    for (const sY of vY) FY.b.IncludesShadersStoreWGSL[sY.name] || (FY.b.IncludesShadersStoreWGSL[sY.name] = sY.shader);
    const uY = {
      name: gY,
      shader: aY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);