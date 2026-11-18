export const id = 328;
export const ids = [328];
export const modules = {
  40987: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "clipPlaneFragment",
      fy = "#if defined(CLIPPLANE) || defined(CLIPPLANE2) || defined(CLIPPLANE3) || defined(CLIPPLANE4) || defined(CLIPPLANE5) || defined(CLIPPLANE6)\nif (false) {}\n#endif\n#ifdef CLIPPLANE\nelse if (fragmentInputs.fClipDistance>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE2\nelse if (fragmentInputs.fClipDistance2>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE3\nelse if (fragmentInputs.fClipDistance3>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE4\nelse if (fragmentInputs.fClipDistance4>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE5\nelse if (fragmentInputs.fClipDistance5>0.0)\n{discard;}\n#endif\n#ifdef CLIPPLANE6\nelse if (fragmentInputs.fClipDistance6>0.0)\n{discard;}\n#endif\n";
    Uy.e.IncludesShadersStoreWGSL[hy] || (Uy.e.IncludesShadersStoreWGSL[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  40970: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "clipPlaneFragmentDeclaration",
      fy = "#ifdef CLIPPLANE\nvarying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nvarying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nvarying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nvarying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nvarying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nvarying fClipDistance6: f32;\n#endif\n";
    Uy.e.IncludesShadersStoreWGSL[hy] || (Uy.e.IncludesShadersStoreWGSL[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  41018: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "fogFragment",
      fy = "#ifdef FOG\nvar fog: f32=CalcFogFactor();\n#ifdef PBR\nfog=toLinearSpace(fog);\n#endif\ncolor= vec4f(mix(uniforms.vFogColor,color.rgb,fog),color.a);\n#endif\n";
    Uy.e.IncludesShadersStoreWGSL[hy] || (Uy.e.IncludesShadersStoreWGSL[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  40978: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Zy
    });
    var Uy = Wy(38319);
    const hy = "fogFragmentDeclaration",
      fy = "#ifdef FOG\n#define FOGMODE_NONE 0.\n#define FOGMODE_EXP 1.\n#define FOGMODE_EXP2 2.\n#define FOGMODE_LINEAR 3.\nconst E=2.71828;uniform vFogInfos: vec4f;uniform vFogColor: vec3f;varying vFogDistance: vec3f;fn CalcFogFactor()->f32\n{var fogCoeff: f32=1.0;var fogStart: f32=uniforms.vFogInfos.y;var fogEnd: f32=uniforms.vFogInfos.z;var fogDensity: f32=uniforms.vFogInfos.w;var fogDistance: f32=length(fragmentInputs.vFogDistance);if (FOGMODE_LINEAR==uniforms.vFogInfos.x)\n{fogCoeff=(fogEnd-fogDistance)/(fogEnd-fogStart);}\nelse if (FOGMODE_EXP==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDensity);}\nelse if (FOGMODE_EXP2==uniforms.vFogInfos.x)\n{fogCoeff=1.0/pow(E,fogDistance*fogDistance*fogDensity*fogDensity);}\nreturn clamp(fogCoeff,0.0,1.0);}\n#endif\n";
    Uy.e.IncludesShadersStoreWGSL[hy] || (Uy.e.IncludesShadersStoreWGSL[hy] = fy);
    const Zy = {
      name: hy,
      shader: fy
    }
  },
  41044: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      colorPixelShaderWGSL: () => Ky
    });
    var Uy = Wy(38319),
      hy = Wy(40970),
      fy = Wy(40978),
      Zy = Wy(40987),
      cb = Wy(41018);
    const Py = "colorPixelShader",
      oy = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\n#define VERTEXCOLOR\nvarying vColor: vec4f;\n#else\nuniform color: vec4f;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nfragmentOutputs.color=input.vColor;\n#else\nfragmentOutputs.color=uniforms.color;\n#endif\n#include<fogFragment>(color,fragmentOutputs.color)\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    Uy.e.ShadersStoreWGSL[Py] || (Uy.e.ShadersStoreWGSL[Py] = oy);
    const By = [hy.b, fy.d, Zy.b, cb.c];
    for (const ey of By) Uy.e.IncludesShadersStoreWGSL[ey.name] || (Uy.e.IncludesShadersStoreWGSL[ey.name] = ey.shader);
    const Ky = {
      name: Py,
      shader: oy
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);