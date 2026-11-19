export const id = 340;
export const ids = [340];
export const modules = {
  41643: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD
    });
    var ID = cD(39003);
    const pD = "clipPlaneFragment",
      iD = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fragmentInputs.fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fragmentInputs.fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fragmentInputs.fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fragmentInputs.fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fragmentInputs.fClipDistance6>0.0)\n{discard;}\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41629: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD
    });
    var ID = cD(39003);
    const pD = "clipPlaneFragmentDeclaration",
      iD = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nvarying fClipDistance6: f32;\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41687: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD
    });
    var ID = cD(39003);
    const pD = "fogFragment",
      iD = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41636: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD
    });
    var ID = cD(39003);
    const pD = "fogFragmentDeclaration",
      iD = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: f32=uniforms.vFogInfos.y;var fogEnd: f32=uniforms.vFogInfos.z;var fogDensity: f32=uniforms.vFogInfos.w;var fogDistance: f32=length(fragmentInputs.vFogDistance);if (FOGMODE_LINEAR==uniforms.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41711: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      colorPixelShaderWGSL: () => BD
    });
    var ID = cD(39003),
      pD = cD(41629),
      iD = cD(41636),
      fD = cD(41643),
      bD = cD(41687);
    const QD = "colorPixelShader",
      wD = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nfragmentOutputs.color=input.vColor;\n#else\nfragmentOutputs.color=uniforms.color;\n#endif\n#include<fogFragment>(color,fragmentOutputs.color)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    ID.e.ShadersStoreWGSL[QD] || (ID.e.ShadersStoreWGSL[QD] = wD);
    const SD = [pD.d, iD.b, fD.b, bD.d];
    for (const yD of SD) ID.e.IncludesShadersStoreWGSL[yD.name] || (ID.e.IncludesShadersStoreWGSL[yD.name] = yD.shader);
    const BD = {
      name: QD,
      shader: wD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);