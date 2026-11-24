export const id = 347;
export const ids = [347];
export const modules = {
  42390: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => xS
    });
    var tS = gS(39899);
    const bS = "clipPlaneVertex",
      XS = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    tS.c.IncludesShadersStoreWGSL[bS] || (tS.c.IncludesShadersStoreWGSL[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  42299: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS
    });
    var tS = gS(39899);
    const bS = "clipPlaneVertexDeclaration",
      XS = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    tS.c.IncludesShadersStoreWGSL[bS] || (tS.c.IncludesShadersStoreWGSL[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  42393: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS
    });
    var tS = gS(39899);
    const bS = "fogVertex",
      XS = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    tS.c.IncludesShadersStoreWGSL[bS] || (tS.c.IncludesShadersStoreWGSL[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  42305: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => xS
    });
    var tS = gS(39899);
    const bS = "fogVertexDeclaration",
      XS = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    tS.c.IncludesShadersStoreWGSL[bS] || (tS.c.IncludesShadersStoreWGSL[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  42330: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(39899);
    const bS = "logDepthDeclaration",
      XS = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    tS.c.IncludesShadersStoreWGSL[bS] || (tS.c.IncludesShadersStoreWGSL[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  42410: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS
    });
    var tS = gS(39899);
    const bS = "logDepthVertex",
      XS = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    tS.c.IncludesShadersStoreWGSL[bS] || (tS.c.IncludesShadersStoreWGSL[bS] = XS);
    const xS = {
      name: bS,
      shader: XS
    }
  },
  61390: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      skyVertexShaderWGSL: () => aS
    });
    var tS = gS(39899),
      bS = gS(42330),
      XS = gS(42299),
      xS = gS(42305),
      NS = gS(42390),
      qS = gS(42410),
      uS = gS(42393);
    const IS = "skyVertexShader",
      fS = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    tS.c.ShadersStoreWGSL[IS] || (tS.c.ShadersStoreWGSL[IS] = fS);
    const kS = [bS.e, XS.b, xS.b, NS.d, qS.c, uS.c];
    for (const KS of kS) tS.c.IncludesShadersStoreWGSL[KS.name] || (tS.c.IncludesShadersStoreWGSL[KS.name] = KS.shader);
    const aS = {
      name: IS,
      shader: fS
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);