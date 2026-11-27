export const id = 659;
export const ids = [659];
export const modules = {
  45723: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(40954);
    const be = "clipPlaneFragment",
      Me = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fragmentInputs.fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fragmentInputs.fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fragmentInputs.fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fragmentInputs.fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fragmentInputs.fClipDistance6>0.0)\n{discard;}\n#endif\n";
    ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45711: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(40954);
    const be = "clipPlaneFragmentDeclaration",
      Me = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nvarying fClipDistance6: f32;\n#endif\n";
    ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45754: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ke
    });
    var ye = He(40954);
    const be = "fogFragment",
      Me = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
    ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45719: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(40954);
    const be = "fogFragmentDeclaration",
      Me = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: f32=uniforms.vFogInfos.y;var fogEnd: f32=uniforms.vFogInfos.z;var fogDensity: f32=uniforms.vFogInfos.w;var fogDistance: f32=length(fragmentInputs.vFogDistance);if (FOGMODE_LINEAR==uniforms.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    ye.d.IncludesShadersStoreWGSL[be] || (ye.d.IncludesShadersStoreWGSL[be] = Me);
    const Ke = {
      name: be,
      shader: Me
    }
  },
  45772: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      colorPixelShaderWGSL: () => Re
    });
    var ye = He(40954),
      be = He(45711),
      Me = He(45719),
      Ke = He(45723),
      Ue = He(45754);
    const Fe = "colorPixelShader",
      Je = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nfragmentOutputs.color=input.vColor;\n#else\nfragmentOutputs.color=uniforms.color;\n#endif\n#include<fogFragment>(color,fragmentOutputs.color)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    ye.d.ShadersStoreWGSL[Fe] || (ye.d.ShadersStoreWGSL[Fe] = Je);
    const oe = [be.b, Me.d, Ke.d, Ue.e];
    for (const ke of oe) ye.d.IncludesShadersStoreWGSL[ke.name] || (ye.d.IncludesShadersStoreWGSL[ke.name] = ke.shader);
    const Re = {
      name: Fe,
      shader: Je
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);