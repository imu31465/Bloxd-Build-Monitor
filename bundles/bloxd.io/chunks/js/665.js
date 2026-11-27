export const id = 665;
export const ids = [665];
export const modules = {
  54390: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR = GR(41387);
    const tR = "clipPlaneVertex",
      uR = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  54299: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    var yR = GR(41387);
    const tR = "clipPlaneVertexDeclaration",
      uR = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  54392: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR
    });
    var yR = GR(41387);
    const tR = "fogVertex",
      uR = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  54301: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR = GR(41387);
    const tR = "fogVertexDeclaration",
      uR = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  54329: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR
    });
    var yR = GR(41387);
    const tR = "logDepthDeclaration",
      uR = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  54401: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => ZR
    });
    var yR = GR(41387);
    const tR = "logDepthVertex",
      uR = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    yR.b.IncludesShadersStoreWGSL[tR] || (yR.b.IncludesShadersStoreWGSL[tR] = uR);
    const ZR = {
      name: tR,
      shader: uR
    }
  },
  64195: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      skyVertexShaderWGSL: () => rR
    });
    var yR = GR(41387),
      tR = GR(54329),
      uR = GR(54299),
      ZR = GR(54301),
      qR = GR(54390),
      iR = GR(54401),
      fR = GR(54392);
    const VR = "skyVertexShader",
      KR = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    yR.b.ShadersStoreWGSL[VR] || (yR.b.ShadersStoreWGSL[VR] = KR);
    const wR = [tR.e, uR.c, ZR.b, qR.b, iR.c, fR.d];
    for (const eR of wR) yR.b.IncludesShadersStoreWGSL[eR.name] || (yR.b.IncludesShadersStoreWGSL[eR.name] = eR.shader);
    const rR = {
      name: VR,
      shader: KR
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);