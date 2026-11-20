export const id = 324;
export const ids = [324];
export const modules = {
  41621: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU
    });
    var tU = gU(39225);
    const pU = "instancesDeclaration",
      EU = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform world : mat4x4<f32>;\n#endif\n#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nattribute previousWorld0 : vec4<f32>;attribute previousWorld1 : vec4<f32>;attribute previousWorld2 : vec4<f32>;attribute previousWorld3 : vec4<f32>;\n#ifdef THIN_INSTANCES\nuniform previousWorld : mat4x4<f32>;\n#endif\n#endif\n#else\n#if !defined(WORLD_UBO)\nuniform world : mat4x4<f32>;\n#endif\n#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nuniform previousWorld : mat4x4<f32>;\n#endif\n#endif\n";
    tU.d.IncludesShadersStoreWGSL[pU] || (tU.d.IncludesShadersStoreWGSL[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41702: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU
    });
    var tU = gU(39225);
    const pU = "instancesVertex",
      EU = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=mat4x4<f32>(\nvertexInputs.previousWorld0,vertexInputs.previousWorld1,\nvertexInputs.previousWorld2,vertexInputs.previousWorld3);\n#endif\n#ifdef THIN_INSTANCES\n#if !defined(WORLD_UBO)\nfinalWorld=uniforms.world*finalWorld;\n#else\nfinalWorld=mesh.world*finalWorld;\n#endif\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nfinalPreviousWorld=uniforms.previousWorld*finalPreviousWorld;\n#endif\n#endif\n#else\n#if !defined(WORLD_UBO)\nvar finalWorld=uniforms.world;\n#else\nvar finalWorld=mesh.world;\n#endif\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=uniforms.previousWorld;\n#endif\n#endif\n";
    tU.d.IncludesShadersStoreWGSL[pU] || (tU.d.IncludesShadersStoreWGSL[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41585: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU
    });
    var tU = gU(39225);
    const pU = "meshUboDeclaration",
      EU = "struct Mesh {world : mat4x4<f32>,\nvisibility : f32,};var<uniform> mesh : Mesh;\n#define WORLD_UBO\n";
    tU.d.IncludesShadersStoreWGSL[pU] || (tU.d.IncludesShadersStoreWGSL[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  41576: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU
    });
    var tU = gU(39225);
    const pU = "sceneUboDeclaration",
      EU = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
    tU.d.IncludesShadersStoreWGSL[pU] || (tU.d.IncludesShadersStoreWGSL[pU] = EU);
    const PU = {
      name: pU,
      shader: EU
    }
  },
  61238: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      greasedLineVertexShaderWGSL: () => GU
    });
    var tU = gU(39225),
      pU = gU(41621),
      EU = gU(41576),
      PU = gU(41585),
      TU = gU(41702);
    const qU = "greasedLineVertexShader",
      KU = "#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\nattribute grl_widths: f32;\n#ifdef GREASED_LINE_USE_OFFSETS\nattribute grl_offsets: vec3f; \n#endif\nattribute grl_colorPointers: f32;attribute position: vec3f;varying grlCounters: f32;varying grlColorPointer: f32;\n#ifdef GREASED_LINE_CAMERA_FACING\nattribute grl_nextAndCounters: vec4f;attribute grl_previousAndSide: vec4f;uniform grlResolution: vec2f;uniform grlAspect: f32;uniform grlWidth: f32;uniform grlSizeAttenuation: f32;fn grlFix(i: vec4f,aspect: f32)->vec2f {var res=i.xy/i.w;res.x*=aspect;return res;}\n#else\nattribute grl_slopes: vec3f;attribute grl_counters: f32;\n#endif\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\nvertexOutputs.grlColorPointer=vertexInputs.grl_colorPointers;let grlMatrix: mat4x4f=scene.viewProjection*mesh.world ;\n#ifdef GREASED_LINE_CAMERA_FACING\nlet grlBaseWidth: f32=uniforms.grlWidth;let grlPrevious: vec3f=vertexInputs.grl_previousAndSide.xyz;let grlSide: f32=vertexInputs.grl_previousAndSide.w;let grlNext: vec3f=vertexInputs.grl_nextAndCounters.xyz;vertexOutputs.grlCounters=vertexInputs.grl_nextAndCounters.w;let grlWidth:f32=grlBaseWidth*vertexInputs.grl_widths;\n#ifdef GREASED_LINE_USE_OFFSETS\nvar grlPositionOffset: vec3f=vertexInputs.grl_offsets;\n#else\nvar grlPositionOffset=vec3f(0.);\n#endif\nlet positionUpdated: vec3f=vertexInputs.position+grlPositionOffset;let worldDir: vec3f=normalize(grlNext-grlPrevious);let nearPosition: vec3f=positionUpdated+(worldDir*0.001);let grlFinalPosition: vec4f=grlMatrix*vec4f(positionUpdated,1.0);let screenNearPos: vec4f=grlMatrix*vec4(nearPosition,1.0);let grlLinePosition: vec2f=grlFix(grlFinalPosition,uniforms.grlAspect);let grlLineNearPosition: vec2f=grlFix(screenNearPos,uniforms.grlAspect);let grlDir: vec2f=normalize(grlLineNearPosition-grlLinePosition);var grlNormal: vec4f=vec4f(-grlDir.y,grlDir.x,0.0,1.0);let grlHalfWidth: f32=0.5*grlWidth;\n#if defined(GREASED_LINE_RIGHT_HANDED_COORDINATE_SYSTEM)\ngrlNormal.x*=-grlHalfWidth;grlNormal.y*=-grlHalfWidth;\n#else\ngrlNormal.x*=grlHalfWidth;grlNormal.y*=grlHalfWidth;\n#endif\ngrlNormal*=scene.projection;if (uniforms.grlSizeAttenuation==1.) {grlNormal.x*=grlFinalPosition.w;grlNormal.y*=grlFinalPosition.w;let pr=vec4f(uniforms.grlResolution,0.0,1.0)*scene.projection;grlNormal.x/=pr.x;grlNormal.y/=pr.y;}\nvertexOutputs.position=vec4f(grlFinalPosition.xy+grlNormal.xy*grlSide,grlFinalPosition.z,grlFinalPosition.w);\n#else\nvertexOutputs.grlCounters=vertexInputs.grl_counters;\n#ifdef GREASED_LINE_USE_OFFSETS\nlet grlPositionOffset: vec3f=vertexInputs.grl_offsets;\n#else\nlet grlPositionOffset: vec3f=vec3f(0.0);\n#endif\nvertexOutputs.position=grlMatrix*vec4f(vertexInputs.position+grlPositionOffset+vertexInputs.grl_slopes*vertexInputs.grl_widths,1.0);\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
    tU.d.ShadersStoreWGSL[qU] || (tU.d.ShadersStoreWGSL[qU] = KU);
    const cU = [pU.b, EU.e, PU.e, TU.c];
    for (const jU of cU) tU.d.IncludesShadersStoreWGSL[jU.name] || (tU.d.IncludesShadersStoreWGSL[jU.name] = jU.shader);
    const GU = {
      name: qU,
      shader: KU
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);