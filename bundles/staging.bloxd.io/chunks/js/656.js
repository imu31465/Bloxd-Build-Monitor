export const id = 656;
export const ids = [656];
export const modules = {
  45267: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV
    });
    var JV = xV(41108);
    const YV = "clipPlaneVertex",
      UV = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    JV.d.IncludesShadersStoreWGSL[YV] || (JV.d.IncludesShadersStoreWGSL[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  },
  45182: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV
    });
    var JV = xV(41108);
    const YV = "clipPlaneVertexDeclaration",
      UV = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    JV.d.IncludesShadersStoreWGSL[YV] || (JV.d.IncludesShadersStoreWGSL[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  },
  45271: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    var JV = xV(41108);
    const YV = "fogVertex",
      UV = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    JV.d.IncludesShadersStoreWGSL[YV] || (JV.d.IncludesShadersStoreWGSL[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  },
  45184: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => yV
    });
    var JV = xV(41108);
    const YV = "fogVertexDeclaration",
      UV = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    JV.d.IncludesShadersStoreWGSL[YV] || (JV.d.IncludesShadersStoreWGSL[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  },
  45198: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => yV
    });
    var JV = xV(41108);
    const YV = "logDepthDeclaration",
      UV = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    JV.d.IncludesShadersStoreWGSL[YV] || (JV.d.IncludesShadersStoreWGSL[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  },
  45286: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    var JV = xV(41108);
    const YV = "logDepthVertex",
      UV = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    JV.d.IncludesShadersStoreWGSL[YV] || (JV.d.IncludesShadersStoreWGSL[YV] = UV);
    const yV = {
      name: YV,
      shader: UV
    }
  },
  64368: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      skyVertexShaderWGSL: () => rV
    });
    var JV = xV(41108),
      YV = xV(45198),
      UV = xV(45182),
      yV = xV(45184),
      pV = xV(45267),
      QV = xV(45286),
      nV = xV(45271);
    const wV = "skyVertexShader",
      ZV = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    JV.d.ShadersStoreWGSL[wV] || (JV.d.ShadersStoreWGSL[wV] = ZV);
    const vV = [YV.d, UV.b, yV.b, pV.d, QV.c, nV.c];
    for (const kV of vV) JV.d.IncludesShadersStoreWGSL[kV.name] || (JV.d.IncludesShadersStoreWGSL[kV.name] = kV.shader);
    const rV = {
      name: wV,
      shader: ZV
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);