export const id = 337;
export const ids = [337];
export const modules = {
  41425: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY
    });
    var FY = DY(38998);
    const AY = "clipPlaneVertex",
      IY = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    FY.b.IncludesShadersStoreWGSL[AY] || (FY.b.IncludesShadersStoreWGSL[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  41315: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY
    });
    var FY = DY(38998);
    const AY = "clipPlaneVertexDeclaration",
      IY = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    FY.b.IncludesShadersStoreWGSL[AY] || (FY.b.IncludesShadersStoreWGSL[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  41430: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY
    });
    var FY = DY(38998);
    const AY = "fogVertex",
      IY = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    FY.b.IncludesShadersStoreWGSL[AY] || (FY.b.IncludesShadersStoreWGSL[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  41322: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY
    });
    var FY = DY(38998);
    const AY = "fogVertexDeclaration",
      IY = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    FY.b.IncludesShadersStoreWGSL[AY] || (FY.b.IncludesShadersStoreWGSL[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  41353: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY
    });
    var FY = DY(38998);
    const AY = "logDepthDeclaration",
      IY = "#ifdef LOGARITHMICDEPTH\nuniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;\n#endif\n";
    FY.b.IncludesShadersStoreWGSL[AY] || (FY.b.IncludesShadersStoreWGSL[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  41447: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => RY
    });
    var FY = DY(38998);
    const AY = "logDepthVertex",
      IY = "#ifdef LOGARITHMICDEPTH\nvertexOutputs.vFragmentDepth=1.0+vertexOutputs.position.w;vertexOutputs.position.z=log2(max(0.000001,vertexOutputs.vFragmentDepth))*uniforms.logarithmicDepthConstant;\n#endif\n";
    FY.b.IncludesShadersStoreWGSL[AY] || (FY.b.IncludesShadersStoreWGSL[AY] = IY);
    const RY = {
      name: AY,
      shader: IY
    }
  },
  60275: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      skyVertexShaderWGSL: () => iY
    });
    var FY = DY(38998),
      AY = DY(41353),
      IY = DY(41315),
      RY = DY(41322),
      OY = DY(41425),
      gY = DY(41447),
      aY = DY(41430);
    const vY = "skyVertexShader",
      uY = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\nuniform world: mat4x4f;uniform view: mat4x4f;uniform viewProjection: mat4x4f;\n#ifdef POINTSIZE\nuniform pointSize: f32;\n#endif\nvarying vPositionW: vec3f;\n#ifdef VERTEXCOLOR\nvarying vColor: vec4f;\n#endif\n#include<logDepthDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\nvertexOutputs.position=uniforms.viewProjection*uniforms.world* vec4f(vertexInputs.position,1.0);var worldPos: vec4f=uniforms.world* vec4f(vertexInputs.position,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#include<clipPlaneVertex>\n#include<logDepthVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvertexOutputs.vColor=vertexInputs.color;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    FY.b.ShadersStoreWGSL[vY] || (FY.b.ShadersStoreWGSL[vY] = uY);
    const sY = [AY.e, IY.e, RY.b, OY.c, gY.d, aY.b];
    for (const yY of sY) FY.b.IncludesShadersStoreWGSL[yY.name] || (FY.b.IncludesShadersStoreWGSL[yY.name] = yY.shader);
    const iY = {
      name: vY,
      shader: uY
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);