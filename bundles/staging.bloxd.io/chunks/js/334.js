export const id = 334;
export const ids = [334];
export const modules = {
  41466: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD
    });
    var ID = cD(39003);
    const pD = "bakedVertexAnimation",
      iD = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.z;let VATSpeed: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.w;\n#else\nlet VATStartFrame: f32=uniforms.bakedVertexAnimationSettings.x;let VATEndFrame: f32=uniforms.bakedVertexAnimationSettings.y;let VATOffsetFrame: f32=uniforms.bakedVertexAnimationSettings.z;let VATSpeed: f32=uniforms.bakedVertexAnimationSettings.w;\n#endif\nlet totalFrames: f32=VATEndFrame-VATStartFrame+1.0;let time: f32=uniforms.bakedVertexAnimationTime*VATSpeed/totalFrames;let frameCorrection: f32=select(1.0,0.0,time<1.0);let numOfFrames: f32=totalFrames-frameCorrection;var VATFrameNum: f32=fract(time)*numOfFrames;VATFrameNum=(VATFrameNum+VATOffsetFrame) % numOfFrames;VATFrameNum=floor(VATFrameNum);VATFrameNum=VATFrameNum+VATStartFrame+frameCorrection;var VATInfluence : mat4x4<f32>;VATInfluence=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[0],VATFrameNum)*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\nVATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[1],VATFrameNum)*vertexInputs.matricesWeights[1];\n#endif\n#if NUM_BONE_INFLUENCERS>2\nVATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[2],VATFrameNum)*vertexInputs.matricesWeights[2];\n#endif\n#if NUM_BONE_INFLUENCERS>3\nVATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[3],VATFrameNum)*vertexInputs.matricesWeights[3];\n#endif\n#if NUM_BONE_INFLUENCERS>4\nVATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[0],VATFrameNum)*vertexInputs.matricesWeightsExtra[0];\n#endif\n#if NUM_BONE_INFLUENCERS>5\nVATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[1],VATFrameNum)*vertexInputs.matricesWeightsExtra[1];\n#endif\n#if NUM_BONE_INFLUENCERS>6\nVATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[2],VATFrameNum)*vertexInputs.matricesWeightsExtra[2];\n#endif\n#if NUM_BONE_INFLUENCERS>7\nVATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[3],VATFrameNum)*vertexInputs.matricesWeightsExtra[3];\n#endif\nfinalWorld=finalWorld*VATInfluence;}\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41364: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD
    });
    var ID = cD(39003);
    const pD = "bakedVertexAnimationDeclaration",
      iD = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn readMatrixFromRawSamplerVAT(smp : texture_2d<f32>,index : f32,frame : f32)->mat4x4<f32>\n{let offset=i32(index)*4;let frameUV=i32(frame);let m0=textureLoad(smp,vec2<i32>(offset+0,frameUV),0);let m1=textureLoad(smp,vec2<i32>(offset+1,frameUV),0);let m2=textureLoad(smp,vec2<i32>(offset+2,frameUV),0);let m3=textureLoad(smp,vec2<i32>(offset+3,frameUV),0);return mat4x4<f32>(m0,m1,m2,m3);}\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41358: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(39003);
    const pD = "bonesDeclaration",
      iD = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nvar boneSampler : texture_2d<f32>;uniform boneTextureInfo : vec2f;\n#else\nuniform mBones : array<mat4x4f,BonesPerMesh>;\n#endif\n#ifdef BONES_VELOCITY_ENABLED\nuniform mPreviousBones : array<mat4x4f,BonesPerMesh>;\n#endif\n#ifdef BONETEXTURE\nfn readMatrixFromRawSampler(smp : texture_2d<f32>,index : f32)->mat4x4f\n{let offset=i32(index)*4; \nlet textureWidth=i32(uniforms.boneTextureInfo.x);let y=offset/textureWidth;let x=offset % textureWidth;let m0=textureLoad(smp,vec2<i32>(x+0,y),0);let m1=textureLoad(smp,vec2<i32>(x+1,y),0);let m2=textureLoad(smp,vec2<i32>(x+2,y),0);let m3=textureLoad(smp,vec2<i32>(x+3,y),0);return mat4x4f(m0,m1,m2,m3);}\n#endif\n#endif\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41462: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD
    });
    var ID = cD(39003);
    const pD = "bonesVertex",
      iD = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[1])*vertexInputs.matricesWeights[1];\n#endif \n#if NUM_BONE_INFLUENCERS>2\ninfluence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[2])*vertexInputs.matricesWeights[2];\n#endif \n#if NUM_BONE_INFLUENCERS>3\ninfluence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[3])*vertexInputs.matricesWeights[3];\n#endif \n#if NUM_BONE_INFLUENCERS>4\ninfluence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[0])*vertexInputs.matricesWeightsExtra[0];\n#endif \n#if NUM_BONE_INFLUENCERS>5\ninfluence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[1])*vertexInputs.matricesWeightsExtra[1];\n#endif \n#if NUM_BONE_INFLUENCERS>6\ninfluence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[2])*vertexInputs.matricesWeightsExtra[2];\n#endif \n#if NUM_BONE_INFLUENCERS>7\ninfluence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[3])*vertexInputs.matricesWeightsExtra[3];\n#endif \n#else \ninfluence=uniforms.mBones[i32(vertexInputs.matricesIndices[0])]*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence=influence+uniforms.mBones[i32(vertexInputs.matricesIndices[1])]*vertexInputs.matricesWeights[1];\n#endif \n#if NUM_BONE_INFLUENCERS>2\ninfluence=influence+uniforms.mBones[i32(vertexInputs.matricesIndices[2])]*vertexInputs.matricesWeights[2];\n#endif \n#if NUM_BONE_INFLUENCERS>3\ninfluence=influence+uniforms.mBones[i32(vertexInputs.matricesIndices[3])]*vertexInputs.matricesWeights[3];\n#endif \n#if NUM_BONE_INFLUENCERS>4\ninfluence=influence+uniforms.mBones[i32(vertexInputs.matricesIndicesExtra[0])]*vertexInputs.matricesWeightsExtra[0];\n#endif \n#if NUM_BONE_INFLUENCERS>5\ninfluence=influence+uniforms.mBones[i32(vertexInputs.matricesIndicesExtra[1])]*vertexInputs.matricesWeightsExtra[1];\n#endif \n#if NUM_BONE_INFLUENCERS>6\ninfluence=influence+uniforms.mBones[i32(vertexInputs.matricesIndicesExtra[2])]*vertexInputs.matricesWeightsExtra[2];\n#endif \n#if NUM_BONE_INFLUENCERS>7\ninfluence=influence+uniforms.mBones[i32(vertexInputs.matricesIndicesExtra[3])]*vertexInputs.matricesWeightsExtra[3];\n#endif \n#endif\nfinalWorld=finalWorld*influence;\n#endif\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41504: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => fD
    });
    var ID = cD(39003);
    const pD = "clipPlaneVertex",
      iD = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41403: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD
    });
    var ID = cD(39003);
    const pD = "clipPlaneVertexDeclaration",
      iD = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41512: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD
    });
    var ID = cD(39003);
    const pD = "fogVertex",
      iD = "#ifdef FOG\n#ifdef SCENE_UBO\nvertexOutputs.vFogDistance=(scene.view*worldPos).xyz;\n#else\nvertexOutputs.vFogDistance=(uniforms.view*worldPos).xyz;\n#endif\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41407: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD
    });
    var ID = cD(39003);
    const pD = "fogVertexDeclaration",
      iD = "#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41369: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD
    });
    var ID = cD(39003);
    const pD = "instancesDeclaration",
      iD = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform world : mat4x4<f32>;\n#endif\n#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nattribute previousWorld0 : vec4<f32>;attribute previousWorld1 : vec4<f32>;attribute previousWorld2 : vec4<f32>;attribute previousWorld3 : vec4<f32>;\n#ifdef THIN_INSTANCES\nuniform previousWorld : mat4x4<f32>;\n#endif\n#endif\n#else\n#if !defined(WORLD_UBO)\nuniform world : mat4x4<f32>;\n#endif\n#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nuniform previousWorld : mat4x4<f32>;\n#endif\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41460: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD
    });
    var ID = cD(39003);
    const pD = "instancesVertex",
      iD = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=mat4x4<f32>(\nvertexInputs.previousWorld0,vertexInputs.previousWorld1,\nvertexInputs.previousWorld2,vertexInputs.previousWorld3);\n#endif\n#ifdef THIN_INSTANCES\n#if !defined(WORLD_UBO)\nfinalWorld=uniforms.world*finalWorld;\n#else\nfinalWorld=mesh.world*finalWorld;\n#endif\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nfinalPreviousWorld=uniforms.previousWorld*finalPreviousWorld;\n#endif\n#endif\n#else\n#if !defined(WORLD_UBO)\nvar finalWorld=uniforms.world;\n#else\nvar finalWorld=mesh.world;\n#endif\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=uniforms.previousWorld;\n#endif\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41525: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD
    });
    var ID = cD(39003);
    const pD = "vertexColorMixing",
      iD = "#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvertexOutputs.vColor=vec4f(1.0);\n#ifdef VERTEXCOLOR\n#ifdef VERTEXALPHA\nvertexOutputs.vColor*=colorUpdated;\n#else\nvertexOutputs.vColor=vec4f(vertexOutputs.vColor.rgb*colorUpdated.rgb,vertexOutputs.vColor.a);\n#endif\n#endif\n#ifdef INSTANCESCOLOR\nvertexOutputs.vColor*=vertexInputs.instanceColor;\n#endif\n#endif\n";
    ID.e.IncludesShadersStoreWGSL[pD] || (ID.e.IncludesShadersStoreWGSL[pD] = iD);
    const fD = {
      name: pD,
      shader: iD
    }
  },
  41708: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      colorVertexShaderWGSL: () => ND
    });
    var ID = cD(39003),
      pD = cD(41358),
      iD = cD(41364),
      fD = cD(41403),
      bD = cD(41407),
      QD = cD(41369),
      wD = cD(41460),
      SD = cD(41462),
      BD = cD(41466),
      yD = cD(41504),
      MD = cD(41512),
      tD = cD(41525);
    const ZD = "colorVertexShader",
      oD = "attribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#ifdef FOG\nuniform view: mat4x4f;\n#endif\n#include<instancesDeclaration>\nuniform viewProjection: mat4x4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#ifdef VERTEXCOLOR\nvar colorUpdated: vec4f=vertexInputs.color;\n#endif\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvar worldPos: vec4f=finalWorld* vec4f(vertexInputs.position,1.0);vertexOutputs.position=uniforms.viewProjection*worldPos;\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<vertexColorMixing>\n#define CUSTOM_VERTEX_MAIN_END\n}";
    ID.e.ShadersStoreWGSL[ZD] || (ID.e.ShadersStoreWGSL[ZD] = oD);
    const vD = [pD.e, iD.b, fD.c, bD.b, QD.d, wD.c, SD.c, BD.c, yD.e, MD.c, tD.d];
    for (const gD of vD) ID.e.IncludesShadersStoreWGSL[gD.name] || (ID.e.IncludesShadersStoreWGSL[gD.name] = gD.shader);
    const ND = {
      name: ZD,
      shader: oD
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);