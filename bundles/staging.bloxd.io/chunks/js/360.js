export const id = 360;
export const ids = [360];
export const modules = {
  61479: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      particlesPixelShader: () => tB
    });
    var QB = zB(39932),
      nB = zB(42169),
      dB = zB(42171),
      IB = zB(42265),
      NB = zB(42228),
      uB = zB(42068),
      UB = zB(41988),
      aB = zB(42234),
      pB = zB(42274),
      rB = zB(42280),
      sB = zB(42304),
      JB = zB(42308);
    const mB = "geometryRenderingFragment",
      yB = "#ifdef PREPASS\n#if SCENE_MRT_COUNT>0\nfloat geometryCoverage=geometryColor.a>0.4 ? 1.0 : 0.0;\n#ifdef PREPASS_COLOR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_COLOR_INDEX,geometryColor);\n#endif\n#ifdef PREPASS_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_POSITION_INDEX,vec4(geometryPositionW,geometryCoverage));\n#endif\n#ifdef PREPASS_LOCAL_POSITION\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_LOCAL_POSITION_INDEX,vec4(geometryPositionL,geometryCoverage));\n#endif\n#ifdef PREPASS_DEPTH\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_DEPTH_INDEX,vec4(geometryViewDepth,0.0,0.0,geometryCoverage));\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_NORMALIZED_VIEW_DEPTH_INDEX,vec4(geometryNormalizedViewDepth,0.0,0.0,geometryCoverage));\n#endif\n#ifdef PREPASS_SCREENSPACE_DEPTH\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_SCREENSPACE_DEPTH_INDEX,vec4(gl_FragCoord.z,0.0,0.0,geometryCoverage));\n#endif\n#ifdef PREPASS_NORMAL\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_NORMAL_INDEX,vec4(geometryNormalV,geometryCoverage));\n#endif\n#ifdef PREPASS_WORLD_NORMAL\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_WORLD_NORMAL_INDEX,vec4(geometryNormalW*0.5+0.5,geometryCoverage));\n#endif\n#ifdef PREPASS_ALBEDO\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_ALBEDO_INDEX,vec4(geometryAlbedo,geometryCoverage));\n#endif\n#ifdef PREPASS_ALBEDO_SQRT\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_ALBEDO_SQRT_INDEX,vec4(sqrt(max(geometryAlbedo,vec3(0.0))),geometryCoverage));\n#endif\n#ifdef PREPASS_REFLECTIVITY\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_REFLECTIVITY_INDEX,vec4(0.0,0.0,0.0,geometryCoverage));\n#endif\n#ifdef PREPASS_IRRADIANCE\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_IRRADIANCE_INDEX,vec4(0.0,0.0,0.0,geometryCoverage));\n#endif\n#ifdef PREPASS_IRRADIANCE_LEGACY\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_IRRADIANCE_LEGACY_INDEX,vec4(0.0));\n#endif\n#if defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)\n#ifdef PREPASS_VELOCITY_ZERO\nvec2 geometryMotion=vec2(0.0);\n#else\nvec2 geometryMotion=0.5*(geometryCurrentPosition.xy/geometryCurrentPosition.w-geometryPreviousPosition.xy/geometryPreviousPosition.w);\n#endif\n#ifdef PREPASS_VELOCITY\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_VELOCITY_INDEX,vec4(pow(abs(geometryMotion),vec2(1.0/3.0))*sign(geometryMotion)*0.5+0.5,0.0,geometryCoverage));\n#endif\n#ifdef PREPASS_VELOCITY_LINEAR\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_VELOCITY_LINEAR_INDEX,vec4(-geometryMotion,0.0,geometryCoverage));\n#endif\n#endif\n#ifdef PREPASS_OBJECT_ID\nWRITE_GEOMETRY_FRAGMENT_OUTPUT(PREPASS_OBJECT_ID_INDEX,encodeObjectId(objectId)*geometryCoverage);\n#endif\n#ifdef PREPASS_MESH_BLEND_TAG\nmeshBlendTagOutput=geometryCoverage>0.0 ? uvec4(uint(meshBlendTag),0u,0u,0u) : uvec4(0u);\n#endif\n#endif\n#endif\n";
    QB.e.IncludesShadersStore[mB] || (QB.e.IncludesShadersStore[mB] = yB);
    const kB = {
        name: mB,
        shader: yB
      },
      GB = "particlesPixelShader",
      LB = "#ifdef LOGARITHMICDEPTH\n#extension GL_EXT_frag_depth : enable\n#endif\nvarying vec2 vUV;varying vec4 vColor;uniform vec4 textureMask;uniform sampler2D diffuseSampler;\n#ifdef PREPASS\nuniform float geometryZeroAlphaDiscard;\n#ifdef PREPASS_POSITION\nvarying vec3 vGeometryPositionW;\n#endif\n#ifdef PREPASS_WORLD_NORMAL\nvarying vec3 vGeometryNormalW;\n#endif\n#ifdef PREPASS_NORMAL\nvarying vec3 vGeometryNormalV;\n#endif\n#endif\n#define PREPASS_VELOCITY_ZERO\n#include<prePassDeclaration>[SCENE_MRT_COUNT]\n#include<clipPlaneFragmentDeclaration>\n#include<imageProcessingDeclaration>\n#include<logDepthDeclaration>\n#include<helperFunctions>\n#include<imageProcessingFunctions>\n#ifdef RAMPGRADIENT\nvarying vec4 remapRanges;uniform sampler2D rampSampler;\n#endif\n#include<fogFragmentDeclaration>\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec4 textureColor=texture2D(diffuseSampler,vUV);vec4 baseColor=(textureColor*textureMask+(vec4(1.,1.,1.,1.)-textureMask))*vColor;\n#ifdef PREPASS\nvec3 geometryAlbedo=toLinearSpace(baseColor.rgb);\n#endif\n#ifdef RAMPGRADIENT\nfloat alpha=baseColor.a;float remappedColorIndex=clamp((alpha-remapRanges.x)/remapRanges.y,0.0,1.0);vec4 rampColor=texture2D(rampSampler,vec2(1.0-remappedColorIndex,0.));baseColor.rgb*=rampColor.rgb;float finalAlpha=baseColor.a;baseColor.a=clamp((alpha*rampColor.a-remapRanges.z)/remapRanges.w,0.0,1.0);\n#endif\n#ifdef BLENDMULTIPLYMODE\nfloat sourceAlpha=vColor.a*textureColor.a;baseColor.rgb=baseColor.rgb*sourceAlpha+vec3(1.0)*(1.0-sourceAlpha);\n#endif\n#include<logDepthFragment>\n#include<fogFragment>(color,baseColor)\n#ifdef IMAGEPROCESSINGPOSTPROCESS\nbaseColor.rgb=toLinearSpace(baseColor.rgb);\n#else\n#ifdef IMAGEPROCESSING\nbaseColor.rgb=toLinearSpace(baseColor.rgb);baseColor=applyImageProcessing(baseColor);\n#endif\n#endif\ngl_FragColor=baseColor;\n#ifdef PREPASS\nvec4 geometryColor=gl_FragColor;if (geometryColor.a<=0.0 && geometryZeroAlphaDiscard>0.0) {discard;}\n#ifdef PREPASS_POSITION\nvec3 geometryPositionW=vGeometryPositionW;\n#endif\n#ifdef PREPASS_LOCAL_POSITION\nvec3 geometryPositionL=vPosition;\n#endif\n#ifdef PREPASS_DEPTH\nfloat geometryViewDepth=vViewPos.z;\n#endif\n#ifdef PREPASS_NORMALIZED_VIEW_DEPTH\nfloat geometryNormalizedViewDepth=vNormViewDepth;\n#endif\n#ifdef PREPASS_NORMAL\nvec3 geometryNormalV=normalize(vGeometryNormalV);\n#endif\n#ifdef PREPASS_WORLD_NORMAL\nvec3 geometryNormalW=normalize(vGeometryNormalW);\n#endif\n#include<geometryRenderingFragment>\n#endif\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
    QB.e.ShadersStore[GB] || (QB.e.ShadersStore[GB] = LB);
    const gB = [nB.d, dB.d, IB.c, NB.d, uB.e, UB.e, aB.d, pB.e, rB.b, sB.c, JB.c, kB];
    for (const SB of gB) QB.e.IncludesShadersStore[SB.name] || (QB.e.IncludesShadersStore[SB.name] = SB.shader);
    const tB = {
      name: GB,
      shader: LB
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);