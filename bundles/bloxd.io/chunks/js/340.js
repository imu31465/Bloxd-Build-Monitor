export const id = 340;
export const ids = [340];
export const modules = {
  41562: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "clipPlaneFragment",
      Xz = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fragmentInputs.fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fragmentInputs.fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fragmentInputs.fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fragmentInputs.fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fragmentInputs.fClipDistance6>0.0)\n{discard;}\n#endif\n";
    Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  },
  41548: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "clipPlaneFragmentDeclaration",
      Xz = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nvarying fClipDistance6: f32;\n#endif\n";
    Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  },
  41596: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "fogFragment",
      Xz = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
    Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  },
  41556: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Oz
    });
    var Fz = sz(39041);
    const Wz = "fogFragmentDeclaration",
      Xz = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: f32=uniforms.vFogInfos.y;var fogEnd: f32=uniforms.vFogInfos.z;var fogDensity: f32=uniforms.vFogInfos.w;var fogDistance: f32=length(fragmentInputs.vFogDistance);if (FOGMODE_LINEAR==uniforms.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    Fz.e.IncludesShadersStoreWGSL[Wz] || (Fz.e.IncludesShadersStoreWGSL[Wz] = Xz);
    const Oz = {
      name: Wz,
      shader: Xz
    }
  },
  41630: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      colorPixelShaderWGSL: () => uz
    });
    var Fz = sz(39041),
      Wz = sz(41548),
      Xz = sz(41556),
      Oz = sz(41562),
      oz = sz(41596);
    const vz = "colorPixelShader",
      Uz = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nfragmentOutputs.color=input.vColor;\n#else\nfragmentOutputs.color=uniforms.color;\n#endif\n#include<fogFragment>(color,fragmentOutputs.color)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    Fz.e.ShadersStoreWGSL[vz] || (Fz.e.ShadersStoreWGSL[vz] = Uz);
    const Kz = [Wz.c, Xz.e, Oz.e, oz.b];
    for (const Nz of Kz) Fz.e.IncludesShadersStoreWGSL[Nz.name] || (Fz.e.IncludesShadersStoreWGSL[Nz.name] = Nz.shader);
    const uz = {
      name: vz,
      shader: Uz
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);