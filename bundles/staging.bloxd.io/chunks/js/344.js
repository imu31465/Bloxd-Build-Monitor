export const id = 344;
export const ids = [344];
export const modules = {
  41959: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk
    });
    var Dk = ik(39412);
    const fk = "bumpVertex",
      Sk = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNormal,tbnTangent)*tangentUpdated.w;var matTemp= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz)* mat3x3f(tbnTangent,tbnBitangent,tbnNormal);vertexOutputs.vTBN0=matTemp[0];vertexOutputs.vTBN1=matTemp[1];vertexOutputs.vTBN2=matTemp[2];\n#endif\n#endif\n";
    Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  },
  41847: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk
    });
    var Dk = ik(39412);
    const fk = "bumpVertexDeclaration",
      Sk = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL) \nvarying vTBN0: vec3f;varying vTBN1: vec3f;varying vTBN2: vec3f;\n#endif\n#endif\n";
    Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  },
  61044: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => bk
    });
    var Dk = ik(39412);
    const fk = "harmonicsFunctions",
      Sk = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ uniforms.vSphericalL2_2*(normal.y*normal.x)\n+ uniforms.vSphericalL2_1*(normal.y*normal.z)\n+ uniforms.vSphericalL20*((3.0*normal.z*normal.z)-1.0)\n+ uniforms.vSphericalL21*(normal.z*normal.x)\n+ uniforms.vSphericalL22*(normal.x*normal.x-(normal.y*normal.y));}\n#else\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {var Nx: f32=normal.x;var Ny: f32=normal.y;var Nz: f32=normal.z;var C1: vec3f=uniforms.vSphericalZZ.rgb;var Cx: vec3f=uniforms.vSphericalX.rgb;var Cy: vec3f=uniforms.vSphericalY.rgb;var Cz: vec3f=uniforms.vSphericalZ.rgb;var Cxx_zz: vec3f=uniforms.vSphericalXX_ZZ.rgb;var Cyy_zz: vec3f=uniforms.vSphericalYY_ZZ.rgb;var Cxy: vec3f=uniforms.vSphericalXY.rgb;var Cyz: vec3f=uniforms.vSphericalYZ.rgb;var Czx: vec3f=uniforms.vSphericalZX.rgb;var a1: vec3f=Cyy_zz*Ny+Cy;var a2: vec3f=Cyz*Nz+a1;var b1: vec3f=Czx*Nz+Cx;var b2: vec3f=Cxy*Ny+b1;var b3: vec3f=Cxx_zz*Nx+b2;var t1: vec3f=Cz *Nz+C1;var t2: vec3f=a2 *Ny+t1;var t3: vec3f=b3 *Nx+t2;return t3;}\n#endif\n#endif\n";
    Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  },
  61028: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk
    });
    var Dk = ik(39412);
    ik(41781), ik(41789);
    const fk = "pbrUboDeclaration",
      Sk = "uniform vAlbedoInfos: vec2f;uniform vBaseWeightInfos: vec2f;uniform vBaseDiffuseRoughnessInfos: vec2f;uniform vAmbientInfos: vec4f;uniform vOpacityInfos: vec2f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vReflectivityInfos: vec3f;uniform vMicroSurfaceSamplerInfos: vec2f;uniform vBumpInfos: vec3f;uniform albedoMatrix: mat4x4f;uniform baseWeightMatrix: mat4x4f;uniform baseDiffuseRoughnessMatrix: mat4x4f;uniform ambientMatrix: mat4x4f;uniform opacityMatrix: mat4x4f;uniform emissiveMatrix: mat4x4f;uniform lightmapMatrix: mat4x4f;uniform reflectivityMatrix: mat4x4f;uniform microSurfaceSamplerMatrix: mat4x4f;uniform bumpMatrix: mat4x4f;uniform vTangentSpaceParams: vec2f;uniform vAlbedoColor: vec4f;uniform baseWeight: f32;uniform baseDiffuseRoughness: f32;uniform vLightingIntensity: vec4f;uniform pointSize: f32;uniform vReflectivityColor: vec4f;uniform vEmissiveColor: vec3f;uniform vAmbientColor: vec3f;uniform vDebugMode: vec2f;uniform vMetallicReflectanceFactors: vec4f;uniform vMetallicReflectanceInfos: vec2f;uniform metallicReflectanceMatrix: mat4x4f;uniform vReflectanceInfos: vec2f;uniform reflectanceMatrix: mat4x4f;uniform cameraInfo: vec4f;uniform vTextureRepetitionHexTilingParams: vec4f;uniform vReflectionInfos: vec2f;uniform reflectionMatrix: mat4x4f;uniform vReflectionMicrosurfaceInfos: vec3f;uniform vReflectionPosition: vec3f;uniform vReflectionSize: vec3f;uniform vReflectionFilteringInfo: vec2f;uniform vReflectionDominantDirection: vec3f;uniform vReflectionColor: vec3f;uniform vSphericalL00: vec3f;uniform vSphericalL1_1: vec3f;uniform vSphericalL10: vec3f;uniform vSphericalL11: vec3f;uniform vSphericalL2_2: vec3f;uniform vSphericalL2_1: vec3f;uniform vSphericalL20: vec3f;uniform vSphericalL21: vec3f;uniform vSphericalL22: vec3f;uniform vSphericalX: vec3f;uniform vSphericalY: vec3f;uniform vSphericalZ: vec3f;uniform vSphericalXX_ZZ: vec3f;uniform vSphericalYY_ZZ: vec3f;uniform vSphericalZZ: vec3f;uniform vSphericalXY: vec3f;uniform vSphericalYZ: vec3f;uniform vSphericalZX: vec3f;\n#define ADDITIONAL_UBO_DECLARATION\n#include<sceneUboDeclaration>\n#include<meshUboDeclaration>\n";
    Dk.d.IncludesShadersStoreWGSL[fk] || (Dk.d.IncludesShadersStoreWGSL[fk] = Sk);
    const bk = {
      name: fk,
      shader: Sk
    }
  },
  61020: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      pbrVertexShaderWGSL: () => Tk
    });
    var Dk = ik(39412),
      fk = ik(41781),
      Sk = ik(41789),
      bk = ik(61028),
      rk = ik(41802),
      Pk = ik(41832),
      mk = ik(41806),
      Mk = ik(61036),
      Kk = ik(41808),
      xk = ik(41817),
      nk = ik(41824),
      Uk = ik(41826),
      Hk = ik(41839),
      wk = ik(61044),
      lk = ik(41847),
      pk = ik(41854),
      yk = ik(41863),
      Yk = ik(41868),
      Lk = ik(41876),
      Ck = ik(41878),
      Ak = ik(41885),
      jk = ik(41894),
      sk = ik(41901),
      dk = ik(41907),
      Vk = ik(41910),
      Fk = ik(41917),
      uk = ik(41926),
      qk = ik(41934),
      Ik = ik(41941),
      zk = ik(41948),
      Qk = ik(41956),
      vk = ik(41959),
      Ek = ik(41966),
      hk = ik(41969),
      ak = ik(41971),
      Wk = ik(41976),
      tk = ik(41980);
    const Xk = "pbrVertexShader",
      Bk = "#define PBR_VERTEX_SHADER\n#include<pbrUboDeclaration>\n#define CUSTOM_VERTEX_BEGIN\n#ifndef USE_VERTEX_PULLING\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef TANGENT\nattribute tangent: vec4f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#include<uvAttributeDeclaration>[2..7]\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n#endif\n#include<mainUVVaryingDeclaration>[1..7]\n#include<helperFunctions>\n#include<pbrBRDFFunctions>\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\n#include<prePassVertexDeclaration>\n#include<samplerVertexDeclaration>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo)\n#include<samplerVertexDeclaration>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight)\n#include<samplerVertexDeclaration>(_DEFINENAME_,BASE_DIFFUSE_ROUGHNESS,_VARYINGNAME_,BaseDiffuseRoughness)\n#include<samplerVertexDeclaration>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail)\n#include<samplerVertexDeclaration>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient)\n#include<samplerVertexDeclaration>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity)\n#include<samplerVertexDeclaration>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive)\n#include<samplerVertexDeclaration>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap)\n#include<samplerVertexDeclaration>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity)\n#include<samplerVertexDeclaration>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler)\n#include<samplerVertexDeclaration>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance)\n#include<samplerVertexDeclaration>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance)\n#include<samplerVertexDeclaration>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump)\n#include<samplerVertexDeclaration>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal)\n#ifdef CLEARCOAT\n#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat)\n#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness)\n#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump)\n#include<samplerVertexDeclaration>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint)\n#endif\n#ifdef IRIDESCENCE\n#include<samplerVertexDeclaration>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence)\n#include<samplerVertexDeclaration>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness)\n#endif\n#ifdef SHEEN\n#include<samplerVertexDeclaration>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen)\n#include<samplerVertexDeclaration>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness)\n#endif\n#ifdef ANISOTROPIC\n#include<samplerVertexDeclaration>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy)\n#endif\n#ifdef SUBSURFACE\n#include<samplerVertexDeclaration>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness)\n#include<samplerVertexDeclaration>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity)\n#include<samplerVertexDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity)\n#include<samplerVertexDeclaration>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor)\n#endif\nvarying vPositionW: vec3f;\n#if DEBUGMODE>0\nvarying vClipSpacePosition: vec4f;\n#endif\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)\nvarying vEnvironmentIrradiance: vec3f;\n#include<harmonicsFunctions>\n#endif\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#include<bumpVertexDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<lightVxUboDeclaration>[0..maxSimultaneousLights]\n#include<morphTargetsVertexGlobalDeclaration>\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\n#ifdef REFLECTIONMAP_SKYBOX\nvarying vPositionUVW: vec3f;\n#endif\n#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)\nvarying vDirectionW: vec3f;\n#endif\n#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\nvarying vViewDepth: f32;\n#endif\n#include<logDepthDeclaration>\n#include<vertexPullingDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#ifdef USE_VERTEX_PULLING\nvar positionUpdated: vec3f=vec3f(0.0);\n#ifdef NORMAL\nvar normalUpdated: vec3f=vec3f(0.0);\n#endif\n#ifdef TANGENT\nvar tangentUpdated: vec4f=vec4f(0.0);\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vec2f(0.0);\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vec2f(0.0);\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vec4f(0.0);\n#endif\n#else\nvar positionUpdated: vec3f=vertexInputs.position;\n#ifdef NORMAL\nvar normalUpdated: vec3f=vertexInputs.normal;\n#endif\n#ifdef TANGENT\nvar tangentUpdated: vec4f=vertexInputs.tangent;\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#endif\n#include<vertexPullingVertex>\n#include<morphTargetsVertexGlobal>\n#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]\n#ifdef REFLECTIONMAP_SKYBOX\nvertexOutputs.vPositionUVW=positionUpdated;\n#endif\n#define CUSTOM_VERTEX_UPDATE_POSITION\n#define CUSTOM_VERTEX_UPDATE_NORMAL\n#include<instancesVertex>\n#if defined(PREPASS) && ((defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)\nvertexOutputs.vCurrentPosition=scene.viewProjection*finalWorld*vec4f(positionUpdated,1.0);vertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*vec4f(positionUpdated,1.0);\n#endif\n#ifdef USE_VERTEX_PULLING\n#include<bonesVertex>(vertexInputs.matricesIndices,vp_matricesIndices,vertexInputs.matricesWeights,vp_matricesWeights,vertexInputs.matricesIndicesExtra,vp_matricesIndicesExtra,vertexInputs.matricesWeightsExtra,vp_matricesWeightsExtra)\n#include<bakedVertexAnimation>(vertexInputs.matricesIndices,vp_matricesIndices,vertexInputs.matricesWeights,vp_matricesWeights,vertexInputs.matricesIndicesExtra,vp_matricesIndicesExtra,vertexInputs.matricesWeightsExtra,vp_matricesWeightsExtra)\n#else\n#include<bonesVertex>\n#include<bakedVertexAnimation>\n#endif\nvar worldPos: vec4f=finalWorld* vec4f(positionUpdated,1.0);vertexOutputs.vPositionW= worldPos.xyz;\n#ifdef PREPASS\n#include<prePassVertex>\n#endif\n#ifdef NORMAL\nvar normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);\n#if defined(INSTANCES) && defined(THIN_INSTANCES)\nvertexOutputs.vNormalW=normalUpdated/ vec3f(dot(normalWorld[0],normalWorld[0]),dot(normalWorld[1],normalWorld[1]),dot(normalWorld[2],normalWorld[2]));vertexOutputs.vNormalW=normalize(normalWorld*vertexOutputs.vNormalW);\n#else\n#ifdef NONUNIFORMSCALING\nnormalWorld=transposeMat3(inverseMat3(normalWorld));\n#endif\nvertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#endif\n#if defined(USESPHERICALFROMREFLECTIONMAP) && defined(USESPHERICALINVERTEX)\n#if BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LAMBERT && BASE_DIFFUSE_MODEL != BRDF_DIFFUSE_MODEL_LEGACY\nvar viewDirectionW: vec3f=normalize(scene.vEyePosition.xyz-vertexOutputs.vPositionW);var NdotV: f32=max(dot(vertexOutputs.vNormalW,viewDirectionW),0.0);var roughNormal: vec3f=mix(vertexOutputs.vNormalW,viewDirectionW,(0.5*(1.0-NdotV))*uniforms.baseDiffuseRoughness);var reflectionVector: vec3f= (uniforms.reflectionMatrix* vec4f(roughNormal,0)).xyz;\n#else\nvar reflectionVector: vec3f= (uniforms.reflectionMatrix* vec4f(vertexOutputs.vNormalW,0)).xyz;\n#endif\n#ifdef REFLECTIONMAP_OPPOSITEZ\nreflectionVector.z*=-1.0;\n#endif\nvertexOutputs.vEnvironmentIrradiance=computeEnvironmentIrradiance(reflectionVector);\n#endif\n#endif\n#define CUSTOM_VERTEX_UPDATE_WORLDPOS\n#ifdef MULTIVIEW\nif (gl_ViewID_OVR==0u) {vertexOutputs.position=scene.viewProjection*worldPos;} else {vertexOutputs.position=scene.viewProjectionR*worldPos;}\n#else\nvertexOutputs.position=scene.viewProjection*worldPos;\n#endif\n#if DEBUGMODE>0\nvertexOutputs.vClipSpacePosition=vertexOutputs.position;\n#endif\n#if defined(REFLECTIONMAP_EQUIRECTANGULAR_FIXED) || defined(REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED)\nvertexOutputs.vDirectionW=normalize((finalWorld*vec4f(positionUpdated,0.0)).xyz);\n#endif\n#if defined(CLUSTLIGHT_BATCH) && CLUSTLIGHT_BATCH>0\n#ifdef RIGHT_HANDED\nvertexOutputs.vViewDepth=-(scene.view*worldPos).z;\n#else\nvertexOutputs.vViewDepth=(scene.view*worldPos).z;\n#endif\n#endif\n#ifndef UV1\nvar uvUpdated: vec2f= vec2f(0.,0.);\n#endif\n#ifdef MAINUV1\nvertexOutputs.vMainUV1=uvUpdated;\n#endif\n#ifndef UV2\nvar uv2Updated: vec2f= vec2f(0.,0.);\n#endif\n#ifdef MAINUV2\nvertexOutputs.vMainUV2=uv2Updated;\n#endif\n#include<uvVariableDeclaration>[3..7]\n#include<samplerVertexImplementation>(_DEFINENAME_,ALBEDO,_VARYINGNAME_,Albedo,_MATRIXNAME_,albedo,_INFONAME_,AlbedoInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,BASE_WEIGHT,_VARYINGNAME_,BaseWeight,_MATRIXNAME_,baseWeight,_INFONAME_,BaseWeightInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,BASE_DIFFUSE_ROUGHNESS,_VARYINGNAME_,BaseDiffuseRoughness,_MATRIXNAME_,baseDiffuseRoughness,_INFONAME_,BaseDiffuseRoughnessInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,DETAIL,_VARYINGNAME_,Detail,_MATRIXNAME_,detail,_INFONAME_,DetailInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,AMBIENT,_VARYINGNAME_,Ambient,_MATRIXNAME_,ambient,_INFONAME_,AmbientInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,OPACITY,_VARYINGNAME_,Opacity,_MATRIXNAME_,opacity,_INFONAME_,OpacityInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,EMISSIVE,_VARYINGNAME_,Emissive,_MATRIXNAME_,emissive,_INFONAME_,EmissiveInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,LIGHTMAP,_VARYINGNAME_,Lightmap,_MATRIXNAME_,lightmap,_INFONAME_,LightmapInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,REFLECTIVITY,_VARYINGNAME_,Reflectivity,_MATRIXNAME_,reflectivity,_INFONAME_,ReflectivityInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,MICROSURFACEMAP,_VARYINGNAME_,MicroSurfaceSampler,_MATRIXNAME_,microSurfaceSampler,_INFONAME_,MicroSurfaceSamplerInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,METALLIC_REFLECTANCE,_VARYINGNAME_,MetallicReflectance,_MATRIXNAME_,metallicReflectance,_INFONAME_,MetallicReflectanceInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,REFLECTANCE,_VARYINGNAME_,Reflectance,_MATRIXNAME_,reflectance,_INFONAME_,ReflectanceInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,BUMP,_VARYINGNAME_,Bump,_MATRIXNAME_,bump,_INFONAME_,BumpInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,DECAL,_VARYINGNAME_,Decal,_MATRIXNAME_,decal,_INFONAME_,DecalInfos.x)\n#ifdef CLEARCOAT\n#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TEXTURE,_VARYINGNAME_,ClearCoat,_MATRIXNAME_,clearCoat,_INFONAME_,ClearCoatInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TEXTURE_ROUGHNESS,_VARYINGNAME_,ClearCoatRoughness,_MATRIXNAME_,clearCoatRoughness,_INFONAME_,ClearCoatInfos.z)\n#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_BUMP,_VARYINGNAME_,ClearCoatBump,_MATRIXNAME_,clearCoatBump,_INFONAME_,ClearCoatBumpInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,CLEARCOAT_TINT_TEXTURE,_VARYINGNAME_,ClearCoatTint,_MATRIXNAME_,clearCoatTint,_INFONAME_,ClearCoatTintInfos.x)\n#endif\n#ifdef IRIDESCENCE\n#include<samplerVertexImplementation>(_DEFINENAME_,IRIDESCENCE_TEXTURE,_VARYINGNAME_,Iridescence,_MATRIXNAME_,iridescence,_INFONAME_,IridescenceInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,IRIDESCENCE_THICKNESS_TEXTURE,_VARYINGNAME_,IridescenceThickness,_MATRIXNAME_,iridescenceThickness,_INFONAME_,IridescenceInfos.z)\n#endif\n#ifdef SHEEN\n#include<samplerVertexImplementation>(_DEFINENAME_,SHEEN_TEXTURE,_VARYINGNAME_,Sheen,_MATRIXNAME_,sheen,_INFONAME_,SheenInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,SHEEN_TEXTURE_ROUGHNESS,_VARYINGNAME_,SheenRoughness,_MATRIXNAME_,sheenRoughness,_INFONAME_,SheenInfos.z)\n#endif\n#ifdef ANISOTROPIC\n#include<samplerVertexImplementation>(_DEFINENAME_,ANISOTROPIC_TEXTURE,_VARYINGNAME_,Anisotropy,_MATRIXNAME_,anisotropy,_INFONAME_,AnisotropyInfos.x)\n#endif\n#ifdef SUBSURFACE\n#include<samplerVertexImplementation>(_DEFINENAME_,SS_THICKNESSANDMASK_TEXTURE,_VARYINGNAME_,Thickness,_MATRIXNAME_,thickness,_INFONAME_,ThicknessInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,SS_REFRACTIONINTENSITY_TEXTURE,_VARYINGNAME_,RefractionIntensity,_MATRIXNAME_,refractionIntensity,_INFONAME_,RefractionIntensityInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,SS_TRANSLUCENCYINTENSITY_TEXTURE,_VARYINGNAME_,TranslucencyIntensity,_MATRIXNAME_,translucencyIntensity,_INFONAME_,TranslucencyIntensityInfos.x)\n#include<samplerVertexImplementation>(_DEFINENAME_,SS_TRANSLUCENCYCOLOR_TEXTURE,_VARYINGNAME_,TranslucencyColor,_MATRIXNAME_,translucencyColor,_INFONAME_,TranslucencyColorInfos.x)\n#endif\n#include<bumpVertex>\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#include<logDepthVertex>\n#define CUSTOM_VERTEX_MAIN_END\n}";
    Dk.d.ShadersStoreWGSL[Xk] || (Dk.d.ShadersStoreWGSL[Xk] = Bk);
    const ck = [fk.c, Sk.d, bk.c, rk.e, Pk.c, mk.d, Mk.e, Kk.e, xk.c, nk.b, Uk.b, Hk.b, wk.d, lk.e, pk.e, yk.c, Yk.e, Lk.b, Ck.e, Ak.d, jk.b, sk.d, dk.e, Vk.e, Fk.c, uk.b, qk.b, Ik.d, zk.c, Qk.c, vk.c, Ek.e, hk.d, ak.d, Wk.b, tk.c];
    for (const Zk of ck) Dk.d.IncludesShadersStoreWGSL[Zk.name] || (Dk.d.IncludesShadersStoreWGSL[Zk.name] = Zk.shader);
    const Tk = {
      name: Xk,
      shader: Bk
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);