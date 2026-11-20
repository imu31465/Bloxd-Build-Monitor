export const id = 338;
export const ids = [338];
export const modules = {
  41921: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT
    });
    var lT = cT(39474);
    const MT = "clipPlaneVertex",
      KT = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    lT.d.IncludesShadersStoreWGSL[MT] || (lT.d.IncludesShadersStoreWGSL[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  },
  41813: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT
    });
    var lT = cT(39474);
    const MT = "clipPlaneVertexDeclaration",
      KT = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    lT.d.IncludesShadersStoreWGSL[MT] || (lT.d.IncludesShadersStoreWGSL[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  },
  41924: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => OT
    });
    var lT = cT(39474);
    const MT = "fogVertex",
      KT = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    lT.d.IncludesShadersStoreWGSL[MT] || (lT.d.IncludesShadersStoreWGSL[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  },
  41818: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(39474);
    const MT = "fogVertexDeclaration",
      KT = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    lT.d.IncludesShadersStoreWGSL[MT] || (lT.d.IncludesShadersStoreWGSL[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  },
  41846: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => OT
    });
    var lT = cT(39474);
    const MT = "logDepthDeclaration",
      KT = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    lT.d.IncludesShadersStoreWGSL[MT] || (lT.d.IncludesShadersStoreWGSL[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  },
  41948: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT
    });
    var lT = cT(39474);
    const MT = "logDepthVertex",
      KT = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    lT.d.IncludesShadersStoreWGSL[MT] || (lT.d.IncludesShadersStoreWGSL[MT] = KT);
    const OT = {
      name: MT,
      shader: KT
    }
  },
  60620: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      skyVertexShaderWGSL: () => jT
    });
    var lT = cT(39474),
      MT = cT(41846),
      KT = cT(41813),
      OT = cT(41818),
      yT = cT(41921),
      fT = cT(41948),
      xT = cT(41924);
    const IT = "skyVertexShader",
      AT = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    lT.d.ShadersStoreWGSL[IT] || (lT.d.ShadersStoreWGSL[IT] = AT);
    const CT = [MT.d, KT.b, OT.d, yT.c, fT.b, xT.c];
    for (const vT of CT) lT.d.IncludesShadersStoreWGSL[vT.name] || (lT.d.IncludesShadersStoreWGSL[vT.name] = vT.shader);
    const jT = {
      name: IT,
      shader: AT
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);