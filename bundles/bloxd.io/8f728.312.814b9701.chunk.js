export const id = 312;
export const ids = [312];
export const modules = {
  40299: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(37923);
    const Ic = "bakedVertexAnimation",
      rB = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\n{\n#ifdef INSTANCES\nlet VATStartFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.x;let VATEndFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.y;let VATOffsetFrame: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.z;let VATSpeed: f32=vertexInputs.bakedVertexAnimationSettingsInstanced.w;\n#else\nlet VATStartFrame: f32=uniforms.bakedVertexAnimationSettings.x;let VATEndFrame: f32=uniforms.bakedVertexAnimationSettings.y;let VATOffsetFrame: f32=uniforms.bakedVertexAnimationSettings.z;let VATSpeed: f32=uniforms.bakedVertexAnimationSettings.w;\n#endif\nlet totalFrames: f32=VATEndFrame-VATStartFrame+1.0;let time: f32=uniforms.bakedVertexAnimationTime*VATSpeed/totalFrames;let frameCorrection: f32=select(1.0,0.0,time<1.0);let numOfFrames: f32=totalFrames-frameCorrection;var VATFrameNum: f32=fract(time)*numOfFrames;VATFrameNum=(VATFrameNum+VATOffsetFrame) % numOfFrames;VATFrameNum=floor(VATFrameNum);VATFrameNum=VATFrameNum+VATStartFrame+frameCorrection;var VATInfluence : mat4x4<f32>;VATInfluence=readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[0],VATFrameNum)*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\nVATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[1],VATFrameNum)*vertexInputs.matricesWeights[1];\n#endif\n#if NUM_BONE_INFLUENCERS>2\nVATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[2],VATFrameNum)*vertexInputs.matricesWeights[2];\n#endif\n#if NUM_BONE_INFLUENCERS>3\nVATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndices[3],VATFrameNum)*vertexInputs.matricesWeights[3];\n#endif\n#if NUM_BONE_INFLUENCERS>4\nVATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[0],VATFrameNum)*vertexInputs.matricesWeightsExtra[0];\n#endif\n#if NUM_BONE_INFLUENCERS>5\nVATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[1],VATFrameNum)*vertexInputs.matricesWeightsExtra[1];\n#endif\n#if NUM_BONE_INFLUENCERS>6\nVATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[2],VATFrameNum)*vertexInputs.matricesWeightsExtra[2];\n#endif\n#if NUM_BONE_INFLUENCERS>7\nVATInfluence=VATInfluence+readMatrixFromRawSamplerVAT(bakedVertexAnimationTexture,vertexInputs.matricesIndicesExtra[3],VATFrameNum)*vertexInputs.matricesWeightsExtra[3];\n#endif\nfinalWorld=finalWorld*VATInfluence;}\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40198: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(37923);
    const Ic = "bakedVertexAnimationDeclaration",
      rB = "#ifdef BAKED_VERTEX_ANIMATION_TEXTURE\nuniform bakedVertexAnimationTime: f32;uniform bakedVertexAnimationSettings: vec4<f32>;var bakedVertexAnimationTexture : texture_2d<f32>;\n#ifdef INSTANCES\nattribute bakedVertexAnimationSettingsInstanced : vec4<f32>;\n#endif\nfn readMatrixFromRawSamplerVAT(smp : texture_2d<f32>,index : f32,frame : f32)->mat4x4<f32>\n{let offset=i32(index)*4;let frameUV=i32(frame);let m0=textureLoad(smp,vec2<i32>(offset+0,frameUV),0);let m1=textureLoad(smp,vec2<i32>(offset+1,frameUV),0);let m2=textureLoad(smp,vec2<i32>(offset+2,frameUV),0);let m3=textureLoad(smp,vec2<i32>(offset+3,frameUV),0);return mat4x4<f32>(m0,m1,m2,m3);}\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40195: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc
    });
    var Vc = nc(37923);
    const Ic = "bonesDeclaration",
      rB = "#if NUM_BONE_INFLUENCERS>0\n#ifndef USE_VERTEX_PULLING\nattribute matricesIndices : vec4f;attribute matricesWeights : vec4f;\n#if NUM_BONE_INFLUENCERS>4\nattribute matricesIndicesExtra : vec4f;attribute matricesWeightsExtra : vec4f;\n#endif\n#endif\n#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#ifdef BONETEXTURE\nvar boneSampler : texture_2d<f32>;uniform boneTextureInfo : vec2f;\n#else\nuniform mBones : array<mat4x4f,BonesPerMesh>;\n#endif\n#ifdef BONES_VELOCITY_ENABLED\nuniform mPreviousBones : array<mat4x4f,BonesPerMesh>;\n#endif\n#ifdef BONETEXTURE\nfn readMatrixFromRawSampler(smp : texture_2d<f32>,index : f32)->mat4x4f\n{let offset=i32(index)*4; \nlet textureWidth=i32(uniforms.boneTextureInfo.x);let y=offset/textureWidth;let x=offset % textureWidth;let m0=textureLoad(smp,vec2<i32>(x+0,y),0);let m1=textureLoad(smp,vec2<i32>(x+1,y),0);let m2=textureLoad(smp,vec2<i32>(x+2,y),0);let m3=textureLoad(smp,vec2<i32>(x+3,y),0);return mat4x4f(m0,m1,m2,m3);}\n#endif\n#endif\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40295: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc
    });
    var Vc = nc(37923);
    const Ic = "bonesVertex",
      rB = "#ifndef BAKED_VERTEX_ANIMATION_TEXTURE\n#if NUM_BONE_INFLUENCERS>0\nvar influence : mat4x4<f32>;\n#ifdef BONETEXTURE\ninfluence=readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[0])*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[1])*vertexInputs.matricesWeights[1];\n#endif \n#if NUM_BONE_INFLUENCERS>2\ninfluence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[2])*vertexInputs.matricesWeights[2];\n#endif \n#if NUM_BONE_INFLUENCERS>3\ninfluence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndices[3])*vertexInputs.matricesWeights[3];\n#endif \n#if NUM_BONE_INFLUENCERS>4\ninfluence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[0])*vertexInputs.matricesWeightsExtra[0];\n#endif \n#if NUM_BONE_INFLUENCERS>5\ninfluence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[1])*vertexInputs.matricesWeightsExtra[1];\n#endif \n#if NUM_BONE_INFLUENCERS>6\ninfluence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[2])*vertexInputs.matricesWeightsExtra[2];\n#endif \n#if NUM_BONE_INFLUENCERS>7\ninfluence=influence+readMatrixFromRawSampler(boneSampler,vertexInputs.matricesIndicesExtra[3])*vertexInputs.matricesWeightsExtra[3];\n#endif \n#else \ninfluence=uniforms.mBones[i32(vertexInputs.matricesIndices[0])]*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\ninfluence=influence+uniforms.mBones[i32(vertexInputs.matricesIndices[1])]*vertexInputs.matricesWeights[1];\n#endif \n#if NUM_BONE_INFLUENCERS>2\ninfluence=influence+uniforms.mBones[i32(vertexInputs.matricesIndices[2])]*vertexInputs.matricesWeights[2];\n#endif \n#if NUM_BONE_INFLUENCERS>3\ninfluence=influence+uniforms.mBones[i32(vertexInputs.matricesIndices[3])]*vertexInputs.matricesWeights[3];\n#endif \n#if NUM_BONE_INFLUENCERS>4\ninfluence=influence+uniforms.mBones[i32(vertexInputs.matricesIndicesExtra[0])]*vertexInputs.matricesWeightsExtra[0];\n#endif \n#if NUM_BONE_INFLUENCERS>5\ninfluence=influence+uniforms.mBones[i32(vertexInputs.matricesIndicesExtra[1])]*vertexInputs.matricesWeightsExtra[1];\n#endif \n#if NUM_BONE_INFLUENCERS>6\ninfluence=influence+uniforms.mBones[i32(vertexInputs.matricesIndicesExtra[2])]*vertexInputs.matricesWeightsExtra[2];\n#endif \n#if NUM_BONE_INFLUENCERS>7\ninfluence=influence+uniforms.mBones[i32(vertexInputs.matricesIndicesExtra[3])]*vertexInputs.matricesWeightsExtra[3];\n#endif \n#endif\nfinalWorld=finalWorld*influence;\n#endif\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40330: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(37923);
    const Ic = "bumpVertex",
      rB = "#if defined(BUMP) || defined(PARALLAX) || defined(CLEARCOAT_BUMP) || defined(ANISOTROPIC)\n#if defined(TANGENT) && defined(NORMAL)\nvar tbnNormal: vec3f=normalize(normalUpdated);var tbnTangent: vec3f=normalize(tangentUpdated.xyz);var tbnBitangent: vec3f=cross(tbnNormal,tbnTangent)*tangentUpdated.w;var matTemp= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz)* mat3x3f(tbnTangent,tbnBitangent,tbnNormal);vertexOutputs.vTBN0=matTemp[0];vertexOutputs.vTBN1=matTemp[1];vertexOutputs.vTBN2=matTemp[2];\n#endif\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40333: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(37923);
    const Ic = "clipPlaneVertex",
      rB = "#ifdef CLIPPLANE\nvertexOutputs.fClipDistance=dot(worldPos,uniforms.vClipPlane);\n#endif\n#ifdef CLIPPLANE2\nvertexOutputs.fClipDistance2=dot(worldPos,uniforms.vClipPlane2);\n#endif\n#ifdef CLIPPLANE3\nvertexOutputs.fClipDistance3=dot(worldPos,uniforms.vClipPlane3);\n#endif\n#ifdef CLIPPLANE4\nvertexOutputs.fClipDistance4=dot(worldPos,uniforms.vClipPlane4);\n#endif\n#ifdef CLIPPLANE5\nvertexOutputs.fClipDistance5=dot(worldPos,uniforms.vClipPlane5);\n#endif\n#ifdef CLIPPLANE6\nvertexOutputs.fClipDistance6=dot(worldPos,uniforms.vClipPlane6);\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40242: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc
    });
    var Vc = nc(37923);
    const Ic = "clipPlaneVertexDeclaration",
      rB = "#ifdef CLIPPLANE\nuniform vClipPlane: vec4<f32>;varying fClipDistance: f32;\n#endif\n#ifdef CLIPPLANE2\nuniform vClipPlane2: vec4<f32>;varying fClipDistance2: f32;\n#endif\n#ifdef CLIPPLANE3\nuniform vClipPlane3: vec4<f32>;varying fClipDistance3: f32;\n#endif\n#ifdef CLIPPLANE4\nuniform vClipPlane4: vec4<f32>;varying fClipDistance4: f32;\n#endif\n#ifdef CLIPPLANE5\nuniform vClipPlane5: vec4<f32>;varying fClipDistance5: f32;\n#endif\n#ifdef CLIPPLANE6\nuniform vClipPlane6: vec4<f32>;varying fClipDistance6: f32;\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  59541: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc
    });
    var Vc = nc(37923);
    const Ic = "harmonicsFunctions",
      rB = "#ifdef USESPHERICALFROMREFLECTIONMAP\n#ifdef SPHERICAL_HARMONICS\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {return uniforms.vSphericalL00\n+ uniforms.vSphericalL1_1*(normal.y)\n+ uniforms.vSphericalL10*(normal.z)\n+ uniforms.vSphericalL11*(normal.x)\n+ uniforms.vSphericalL2_2*(normal.y*normal.x)\n+ uniforms.vSphericalL2_1*(normal.y*normal.z)\n+ uniforms.vSphericalL20*((3.0*normal.z*normal.z)-1.0)\n+ uniforms.vSphericalL21*(normal.z*normal.x)\n+ uniforms.vSphericalL22*(normal.x*normal.x-(normal.y*normal.y));}\n#else\nfn computeEnvironmentIrradiance(normal: vec3f)->vec3f {var Nx: f32=normal.x;var Ny: f32=normal.y;var Nz: f32=normal.z;var C1: vec3f=uniforms.vSphericalZZ.rgb;var Cx: vec3f=uniforms.vSphericalX.rgb;var Cy: vec3f=uniforms.vSphericalY.rgb;var Cz: vec3f=uniforms.vSphericalZ.rgb;var Cxx_zz: vec3f=uniforms.vSphericalXX_ZZ.rgb;var Cyy_zz: vec3f=uniforms.vSphericalYY_ZZ.rgb;var Cxy: vec3f=uniforms.vSphericalXY.rgb;var Cyz: vec3f=uniforms.vSphericalYZ.rgb;var Czx: vec3f=uniforms.vSphericalZX.rgb;var a1: vec3f=Cyy_zz*Ny+Cy;var a2: vec3f=Cyz*Nz+a1;var b1: vec3f=Czx*Nz+Cx;var b2: vec3f=Cxy*Ny+b1;var b3: vec3f=Cxx_zz*Nx+b2;var t1: vec3f=Cz *Nz+C1;var t2: vec3f=a2 *Ny+t1;var t3: vec3f=b3 *Nx+t2;return t3;}\n#endif\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40204: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc
    });
    var Vc = nc(37923);
    const Ic = "instancesDeclaration",
      rB = "#ifdef INSTANCES\nattribute world0 : vec4<f32>;attribute world1 : vec4<f32>;attribute world2 : vec4<f32>;attribute world3 : vec4<f32>;\n#ifdef INSTANCESCOLOR\nattribute instanceColor : vec4<f32>;\n#endif\n#if defined(THIN_INSTANCES) && !defined(WORLD_UBO)\nuniform world : mat4x4<f32>;\n#endif\n#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nattribute previousWorld0 : vec4<f32>;attribute previousWorld1 : vec4<f32>;attribute previousWorld2 : vec4<f32>;attribute previousWorld3 : vec4<f32>;\n#ifdef THIN_INSTANCES\nuniform previousWorld : mat4x4<f32>;\n#endif\n#endif\n#else\n#if !defined(WORLD_UBO)\nuniform world : mat4x4<f32>;\n#endif\n#if defined(VELOCITY) || defined(PREPASS_VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nuniform previousWorld : mat4x4<f32>;\n#endif\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40289: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(37923);
    const Ic = "instancesVertex",
      rB = "#ifdef INSTANCES\nvar finalWorld=mat4x4<f32>(vertexInputs.world0,vertexInputs.world1,vertexInputs.world2,vertexInputs.world3);\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=mat4x4<f32>(\nvertexInputs.previousWorld0,vertexInputs.previousWorld1,\nvertexInputs.previousWorld2,vertexInputs.previousWorld3);\n#endif\n#ifdef THIN_INSTANCES\n#if !defined(WORLD_UBO)\nfinalWorld=uniforms.world*finalWorld;\n#else\nfinalWorld=mesh.world*finalWorld;\n#endif\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nfinalPreviousWorld=uniforms.previousWorld*finalPreviousWorld;\n#endif\n#endif\n#else\n#if !defined(WORLD_UBO)\nvar finalWorld=uniforms.world;\n#else\nvar finalWorld=mesh.world;\n#endif\n#if defined(PREPASS_VELOCITY) || defined(VELOCITY) || defined(PREPASS_VELOCITY_LINEAR) || defined(VELOCITY_LINEAR)\nvar finalPreviousWorld=uniforms.previousWorld;\n#endif\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40285: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc
    });
    var Vc = nc(37923);
    const Ic = "morphTargetsVertex",
      rB = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\n#if {X}==0\nfor (var i=0; i<NUM_MORPH_INFLUENCERS; i=i+1) {if (f32(i)>=uniforms.morphTargetCount) {break;}\n#ifdef USE_VERTEX_PULLING\nvertexID=f32(vpVertexIndex)*uniforms.morphTargetTextureInfo.x;\n#else\nvertexID=f32(vertexInputs.vertexIndex)*uniforms.morphTargetTextureInfo.x;\n#endif\n#ifdef MORPHTARGETS_POSITION\n#ifdef USE_VERTEX_PULLING\npositionUpdated=positionUpdated+(readVector3FromRawSampler(i,vertexID)-vp_basePosition)*uniforms.morphTargetInfluences[i];\n#else\npositionUpdated=positionUpdated+(readVector3FromRawSampler(i,vertexID)-vertexInputs.position)*uniforms.morphTargetInfluences[i];\n#endif\n#endif\n#ifdef MORPHTARGETTEXTURE_HASPOSITIONS\nvertexID=vertexID+1.0;\n#endif\n#ifdef MORPHTARGETS_NORMAL\n#ifdef USE_VERTEX_PULLING\nnormalUpdated=normalUpdated+(readVector3FromRawSampler(i,vertexID) -vp_baseNormal)*uniforms.morphTargetInfluences[i];\n#else\nnormalUpdated=normalUpdated+(readVector3FromRawSampler(i,vertexID) -vertexInputs.normal)*uniforms.morphTargetInfluences[i];\n#endif\n#endif\n#ifdef MORPHTARGETTEXTURE_HASNORMALS\nvertexID=vertexID+1.0;\n#endif\n#ifdef MORPHTARGETS_UV\n#ifdef USE_VERTEX_PULLING\nuvUpdated=uvUpdated+(readVector3FromRawSampler(i,vertexID).xy-vp_baseUV)*uniforms.morphTargetInfluences[i];\n#else\nuvUpdated=uvUpdated+(readVector3FromRawSampler(i,vertexID).xy-vertexInputs.uv)*uniforms.morphTargetInfluences[i];\n#endif\n#endif\n#ifdef MORPHTARGETTEXTURE_HASUVS\nvertexID=vertexID+1.0;\n#endif\n#ifdef MORPHTARGETS_TANGENT\n#ifdef USE_VERTEX_PULLING\ntangentUpdated=vec4f(tangentUpdated.xyz+(readVector3FromRawSampler(i,vertexID) -vp_baseTangent.xyz)*uniforms.morphTargetInfluences[i],tangentUpdated.a);\n#else\ntangentUpdated=vec4f(tangentUpdated.xyz+(readVector3FromRawSampler(i,vertexID) -vertexInputs.tangent.xyz)*uniforms.morphTargetInfluences[i],tangentUpdated.a);\n#endif\n#endif\n#ifdef MORPHTARGETTEXTURE_HASTANGENTS\nvertexID=vertexID+1.0;\n#endif\n#ifdef MORPHTARGETS_UV2\n#ifdef USE_VERTEX_PULLING\nuv2Updated=uv2Updated+(readVector3FromRawSampler(i,vertexID).xy-vp_baseUV2)*uniforms.morphTargetInfluences[i];\n#else\nuv2Updated=uv2Updated+(readVector3FromRawSampler(i,vertexID).xy-vertexInputs.uv2)*uniforms.morphTargetInfluences[i];\n#endif\n#endif\n#ifdef MORPHTARGETS_COLOR\n#ifdef USE_VERTEX_PULLING\ncolorUpdated=colorUpdated+(readVector4FromRawSampler(i,vertexID)-vp_baseColor)*uniforms.morphTargetInfluences[i];\n#else\ncolorUpdated=colorUpdated+(readVector4FromRawSampler(i,vertexID)-vertexInputs.color)*uniforms.morphTargetInfluences[i];\n#endif\n#endif\n}\n#endif\n#else\n#ifdef MORPHTARGETS_POSITION\n#ifdef USE_VERTEX_PULLING\npositionUpdated=positionUpdated+(vertexInputs.position{X}-vp_basePosition)*uniforms.morphTargetInfluences[{X}];\n#else\npositionUpdated=positionUpdated+(vertexInputs.position{X}-vertexInputs.position)*uniforms.morphTargetInfluences[{X}];\n#endif\n#endif\n#ifdef MORPHTARGETS_NORMAL\n#ifdef USE_VERTEX_PULLING\nnormalUpdated=normalUpdated+(vertexInputs.normal{X}-vp_baseNormal)*uniforms.morphTargetInfluences[{X}];\n#else\nnormalUpdated=normalUpdated+(vertexInputs.normal{X}-vertexInputs.normal)*uniforms.morphTargetInfluences[{X}];\n#endif\n#endif\n#ifdef MORPHTARGETS_TANGENT\n#ifdef USE_VERTEX_PULLING\ntangentUpdated=vec4f(tangentUpdated.xyz+(vertexInputs.tangent{X}-vp_baseTangent.xyz)*uniforms.morphTargetInfluences[{X}],tangentUpdated.a);\n#else\ntangentUpdated=vec4f(tangentUpdated.xyz+(vertexInputs.tangent{X}-vertexInputs.tangent.xyz)*uniforms.morphTargetInfluences[{X}],tangentUpdated.a);\n#endif\n#endif\n#ifdef MORPHTARGETS_UV\n#ifdef USE_VERTEX_PULLING\nuvUpdated=uvUpdated+(vertexInputs.uv_{X}-vp_baseUV)*uniforms.morphTargetInfluences[{X}];\n#else\nuvUpdated=uvUpdated+(vertexInputs.uv_{X}-vertexInputs.uv)*uniforms.morphTargetInfluences[{X}];\n#endif\n#endif\n#ifdef MORPHTARGETS_UV2\n#ifdef USE_VERTEX_PULLING\nuv2Updated=uv2Updated+(vertexInputs.uv2_{X}-vp_baseUV2)*uniforms.morphTargetInfluences[{X}];\n#else\nuv2Updated=uv2Updated+(vertexInputs.uv2_{X}-vertexInputs.uv2)*uniforms.morphTargetInfluences[{X}];\n#endif\n#endif\n#ifdef MORPHTARGETS_COLOR\n#ifdef USE_VERTEX_PULLING\ncolorUpdated=colorUpdated+(vertexInputs.color{X}-vp_baseColor)*uniforms.morphTargetInfluences[{X}];\n#else\ncolorUpdated=colorUpdated+(vertexInputs.color{X}-vertexInputs.color)*uniforms.morphTargetInfluences[{X}];\n#endif\n#endif\n#endif\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40258: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc
    });
    var Vc = nc(37923);
    const Ic = "morphTargetsVertexDeclaration",
      rB = "#ifdef MORPHTARGETS\n#ifndef MORPHTARGETS_TEXTURE\n#ifdef MORPHTARGETS_POSITION\nattribute position{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_NORMAL\nattribute normal{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_TANGENT\nattribute tangent{X} : vec3<f32>;\n#endif\n#ifdef MORPHTARGETS_UV\nattribute uv_{X} : vec2<f32>;\n#endif\n#ifdef MORPHTARGETS_UV2\nattribute uv2_{X} : vec2<f32>;\n#endif\n#ifdef MORPHTARGETS_COLOR\nattribute color{X} : vec4<f32>;\n#endif\n#elif {X}==0\nuniform morphTargetCount: f32;\n#endif\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40280: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc
    });
    var Vc = nc(37923);
    const Ic = "morphTargetsVertexGlobal",
      rB = "#ifdef MORPHTARGETS\n#ifdef MORPHTARGETS_TEXTURE\nvar vertexID : f32;\n#endif\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40256: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc
    });
    var Vc = nc(37923);
    const Ic = "morphTargetsVertexGlobalDeclaration",
      rB = "#ifdef MORPHTARGETS\nuniform morphTargetInfluences : array<f32,NUM_MORPH_INFLUENCERS>;\n#ifdef MORPHTARGETS_TEXTURE \nuniform morphTargetTextureIndices : array<f32,NUM_MORPH_INFLUENCERS>;uniform morphTargetTextureInfo : vec3<f32>;var morphTargets : texture_2d_array<f32>;fn readVector3FromRawSampler(targetIndex : i32,vertexIndex : f32)->vec3<f32>\n{ \nlet textureWidth: i32=i32(uniforms.morphTargetTextureInfo.y);let y: i32=i32(vertexIndex)/textureWidth;let x: i32=i32(vertexIndex) % textureWidth;return textureLoad(morphTargets,vec2i(x,y),i32(uniforms.morphTargetTextureIndices[targetIndex]),0).xyz;}\nfn readVector4FromRawSampler(targetIndex : i32,vertexIndex : f32)->vec4<f32>\n{ \nlet textureWidth: i32=i32(uniforms.morphTargetTextureInfo.y); \nlet y: i32=i32(vertexIndex)/textureWidth;let x: i32=i32(vertexIndex) % textureWidth;return textureLoad(morphTargets,vec2i(x,y),i32(uniforms.morphTargetTextureIndices[targetIndex]),0);}\n#endif\n#endif\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  40172: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc
    });
    var Vc = nc(37923);
    const Ic = "sceneUboDeclaration",
      rB = "struct Scene {viewProjection : mat4x4<f32>,\n#ifdef MULTIVIEW\nviewProjectionR : mat4x4<f32>,\n#endif \nview : mat4x4<f32>,\nprojection : mat4x4<f32>,\nvEyePosition : vec4<f32>,\ninverseProjection : mat4x4<f32>,};\n#define SCENE_UBO\nvar<uniform> scene : Scene;\n";
    Vc.b.IncludesShadersStoreWGSL[Ic] || (Vc.b.IncludesShadersStoreWGSL[Ic] = rB);
    const uc = {
      name: Ic,
      shader: rB
    }
  },
  59722: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      geometryVertexShaderWGSL: () => aB
    });
    var Vc = nc(37923),
      Ic = nc(40195),
      rB = nc(40198),
      uc = nc(40256),
      sc = nc(40258),
      Mc = nc(40204),
      Pc = nc(40172),
      qB = nc(40242),
      Oc = nc(59541),
      Tc = nc(40280),
      fc = nc(40285),
      mB = nc(40289),
      ec = nc(40295),
      tB = nc(40299),
      Sc = nc(40333),
      yB = nc(40330);
    const zB = "geometryVertexShader",
      pc = "#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<morphTargetsVertexGlobalDeclaration>\n#include<morphTargetsVertexDeclaration>[0..maxSimultaneousMorphTargets]\n#include<instancesDeclaration>\n#include<sceneUboDeclaration>\n#include<clipPlaneVertexDeclaration>\n#ifdef IRRADIANCE\n#ifdef REFLECTION\nuniform reflectionMatrix: mat4x4f;uniform vReflectionInfos: vec2f;uniform vReflectionColor: vec3f;\n#ifdef USESPHERICALFROMREFLECTIONMAP\nvarying vEnvironmentIrradiance: vec3f;\n#ifdef SPHERICAL_HARMONICS\nuniform vSphericalL00: vec3f;uniform vSphericalL1_1: vec3f;uniform vSphericalL10: vec3f;uniform vSphericalL11: vec3f;uniform vSphericalL2_2: vec3f;uniform vSphericalL2_1: vec3f;uniform vSphericalL20: vec3f;uniform vSphericalL21: vec3f;uniform vSphericalL22: vec3f;\n#else\nuniform vSphericalX: vec3f;uniform vSphericalY: vec3f;uniform vSphericalZ: vec3f;uniform vSphericalXX_ZZ: vec3f;uniform vSphericalYY_ZZ: vec3f;uniform vSphericalZZ: vec3f;uniform vSphericalXY: vec3f;uniform vSphericalYZ: vec3f;uniform vSphericalZX: vec3f;\n#endif\n#include<harmonicsFunctions>\n#endif\n#endif\n#endif\nattribute position : vec3<f32>;\n#ifdef HAS_NORMAL_ATTRIBUTE\nattribute normal: vec3f;\n#endif\n#ifdef NEED_UV\nvarying vUV: vec2f;\n#ifdef ALPHATEST\nuniform diffuseMatrix: mat4x4f;\n#endif\n#ifdef BUMP\nuniform bumpMatrix: mat4x4f;varying vBumpUV: vec2f;\n#endif\n#ifdef REFLECTIVITY\nuniform reflectivityMatrix: mat4x4f;uniform albedoMatrix: mat4x4f;varying vReflectivityUV: vec2f;varying vAlbedoUV: vec2f;\n#endif\n#ifdef METALLIC_TEXTURE\nvarying vMetallicUV: vec2f;uniform metallicMatrix: mat4x4f;\n#endif\n#ifdef ROUGHNESS_TEXTURE\nvarying vRoughnessUV: vec2f;uniform roughnessMatrix: mat4x4f;\n#endif\n#ifdef SUBSURFACE_WEIGHT\nvarying vSubsurfaceWeightUV: vec2f;uniform subsurfaceWeightMatrix: mat4x4f;\n#endif\n#ifdef TRANSMISSION_WEIGHT\nvarying vTransmissionWeightUV: vec2f;uniform transmissionWeightMatrix: mat4x4f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#endif\n#ifdef BUMP\nvarying vWorldView0: vec4f;varying vWorldView1: vec4f;varying vWorldView2: vec4f;varying vWorldView3: vec4f;\n#endif\n#ifdef BUMP\nvarying vNormalW: vec3f;\n#else\nvarying vNormalV: vec3f;\n#endif\nvarying vViewPos: vec4f;\n#if defined(POSITION) || defined(BUMP) || defined(IRRADIANCE)\nvarying vPositionW: vec3f;\n#endif\n#if defined(VELOCITY) || defined(VELOCITY_LINEAR)\nuniform previousViewProjection: mat4x4f;varying vCurrentPosition: vec4f;varying vPreviousPosition: vec4f;\n#endif\n#define CUSTOM_VERTEX_DEFINITIONS\n@vertex\nfn main(input : VertexInputs)->FragmentInputs {var positionUpdated: vec3f=vertexInputs.position;\n#ifdef HAS_NORMAL_ATTRIBUTE\nvar normalUpdated: vec3f=vertexInputs.normal;\n#else\nvar normalUpdated: vec3f=vec3f(0.0,0.0,0.0);\n#endif\n#ifdef UV1\nvar uvUpdated: vec2f=vertexInputs.uv;\n#endif\n#ifdef UV2\nvar uv2Updated: vec2f=vertexInputs.uv2;\n#endif\n#include<morphTargetsVertexGlobal>\n#include<morphTargetsVertex>[0..maxSimultaneousMorphTargets]\n#include<instancesVertex>\n#if (defined(VELOCITY) || defined(VELOCITY_LINEAR)) && !defined(BONES_VELOCITY_ENABLED)\nvCurrentPosition=scene.viewProjection*finalWorld*vec4f(positionUpdated,1.0);vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld* vec4f(positionUpdated,1.0);\n#endif\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvar worldPos: vec4f= vec4f(finalWorld* vec4f(positionUpdated,1.0));\n#ifdef BUMP\nlet vWorldView=scene.view*finalWorld;vertexOutputs.vWorldView0=vWorldView[0];vertexOutputs.vWorldView1=vWorldView[1];vertexOutputs.vWorldView2=vWorldView[2];vertexOutputs.vWorldView3=vWorldView[3];let normalWorld: mat3x3f= mat3x3f(finalWorld[0].xyz,finalWorld[1].xyz,finalWorld[2].xyz);vertexOutputs.vNormalW=normalize(normalWorld*normalUpdated);\n#else\n#ifdef NORMAL_WORLDSPACE\nvertexOutputs.vNormalV=normalize((finalWorld* vec4f(normalUpdated,0.0)).xyz);\n#else\nvertexOutputs.vNormalV=normalize(((scene.view*finalWorld)* vec4f(normalUpdated,0.0)).xyz);\n#endif\n#endif\nvertexOutputs.vViewPos=scene.view*worldPos;\n#if (defined(VELOCITY) || defined(VELOCITY_LINEAR)) && defined(BONES_VELOCITY_ENABLED)\nvertexOutputs.vCurrentPosition=scene.viewProjection*finalWorld* vec4f(positionUpdated,1.0);\n#if NUM_BONE_INFLUENCERS>0\nvar previousInfluence: mat4x4f;previousInfluence=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndices[0])]*vertexInputs.matricesWeights[0];\n#if NUM_BONE_INFLUENCERS>1\npreviousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndices[1])]*vertexInputs.matricesWeights[1];\n#endif\n#if NUM_BONE_INFLUENCERS>2\npreviousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndices[2])]*vertexInputs.matricesWeights[2];\n#endif\n#if NUM_BONE_INFLUENCERS>3\npreviousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndices[3])]*vertexInputs.matricesWeights[3];\n#endif\n#if NUM_BONE_INFLUENCERS>4\npreviousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndicesExtra[0])]*vertexInputs.matricesWeightsExtra[0];\n#endif\n#if NUM_BONE_INFLUENCERS>5\npreviousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndicesExtra[1])]*vertexInputs.matricesWeightsExtra[1];\n#endif\n#if NUM_BONE_INFLUENCERS>6\npreviousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndicesExtra[2])]*vertexInputs.matricesWeightsExtra[2];\n#endif\n#if NUM_BONE_INFLUENCERS>7\npreviousInfluence+=uniforms.mPreviousBones[ i32(vertexInputs.matricesIndicesExtra[3])]*vertexInputs.matricesWeightsExtra[3];\n#endif\nvertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld*previousInfluence* vec4f(positionUpdated,1.0);\n#else\nvertexOutputs.vPreviousPosition=uniforms.previousViewProjection*finalPreviousWorld* vec4f(positionUpdated,1.0);\n#endif\n#endif\n#if defined(POSITION) || defined(BUMP) || defined(IRRADIANCE)\nvertexOutputs.vPositionW=worldPos.xyz/worldPos.w;\n#endif\nvertexOutputs.position=scene.viewProjection*finalWorld* vec4f(positionUpdated,1.0);\n#include<clipPlaneVertex>\n#ifdef NEED_UV\n#ifdef UV1\n#if defined(ALPHATEST) && defined(ALPHATEST_UV1)\nvertexOutputs.vUV=(uniforms.diffuseMatrix* vec4f(uvUpdated,1.0,0.0)).xy;\n#else\nvertexOutputs.vUV=uvUpdated;\n#endif\n#ifdef BUMP_UV1\nvertexOutputs.vBumpUV=(uniforms.bumpMatrix* vec4f(uvUpdated,1.0,0.0)).xy;\n#endif\n#ifdef REFLECTIVITY_UV1\nvertexOutputs.vReflectivityUV=(uniforms.reflectivityMatrix* vec4f(uvUpdated,1.0,0.0)).xy;\n#else\n#ifdef METALLIC_UV1\nvertexOutputs.vMetallicUV=(uniforms.metallicMatrix* vec4f(uvUpdated,1.0,0.0)).xy;\n#endif\n#ifdef ROUGHNESS_UV1\nvertexOutputs.vRoughnessUV=(uniforms.roughnessMatrix* vec4f(uvUpdated,1.0,0.0)).xy;\n#endif\n#endif\n#ifdef ALBEDO_UV1\nvertexOutputs.vAlbedoUV=(uniforms.albedoMatrix* vec4f(uvUpdated,1.0,0.0)).xy;\n#endif\n#ifdef SUBSURFACE_WEIGHT_UV1\nvertexOutputs.vSubsurfaceWeightUV=(uniforms.subsurfaceWeightMatrix* vec4f(uvUpdated,1.0,0.0)).xy;\n#endif\n#ifdef TRANSMISSION_WEIGHT_UV1\nvertexOutputs.vTransmissionWeightUV=(uniforms.transmissionWeightMatrix* vec4f(uvUpdated,1.0,0.0)).xy;\n#endif\n#endif\n#ifdef UV2\n#if defined(ALPHATEST) && defined(ALPHATEST_UV2)\nvertexOutputs.vUV=(uniforms.diffuseMatrix* vec4f(uv2Updated,1.0,0.0)).xy;\n#else\nvertexOutputs.vUV=uv2Updated;\n#endif\n#ifdef BUMP_UV2\nvertexOutputs.vBumpUV=(uniforms.bumpMatrix* vec4f(uv2Updated,1.0,0.0)).xy;\n#endif\n#ifdef REFLECTIVITY_UV2\nvertexOutputs.vReflectivityUV=(uniforms.reflectivityMatrix* vec4f(uv2Updated,1.0,0.0)).xy;\n#else\n#ifdef METALLIC_UV2\nvertexOutputs.vMetallicUV=(uniforms.metallicMatrix* vec4f(uv2Updated,1.0,0.0)).xy;\n#endif\n#ifdef ROUGHNESS_UV2\nvertexOutputs.vRoughnessUV=(uniforms.roughnessMatrix* vec4f(uv2Updated,1.0,0.0)).xy;\n#endif\n#endif\n#ifdef ALBEDO_UV2\nvertexOutputs.vAlbedoUV=(uniforms.albedoMatrix* vec4f(uv2Updated,1.0,0.0)).xy;\n#endif\n#ifdef SUBSURFACE_WEIGHT_UV2\nvertexOutputs.vSubsurfaceWeightUV=(uniforms.subsurfaceWeightMatrix* vec4f(uv2Updated,1.0,0.0)).xy;\n#endif\n#ifdef TRANSMISSION_WEIGHT_UV2\nvertexOutputs.vTransmissionWeightUV=(uniforms.transmissionWeightMatrix* vec4f(uv2Updated,1.0,0.0)).xy;\n#endif\n#endif\n#endif\n#include<bumpVertex>\n#ifdef IRRADIANCE\n#ifdef REFLECTION\n#ifdef USESPHERICALFROMREFLECTIONMAP\nvar reflectionVector: vec3f=(uniforms.reflectionMatrix*vec4f(normalUpdated,0.0)).xyz;\n#ifdef REFLECTIONMAP_OPPOSITEZ\nreflectionVector.z*=-1.0f;\n#endif\nvertexOutputs.vEnvironmentIrradiance=computeEnvironmentIrradiance(reflectionVector)*uniforms.vReflectionInfos.x;\n#endif\n#endif\n#endif\n}\n";
    Vc.b.ShadersStoreWGSL[zB] || (Vc.b.ShadersStoreWGSL[zB] = pc);
    const hc = [Ic.d, rB.e, uc.b, sc.c, Mc.d, Pc.b, qB.d, Oc.c, Tc.b, fc.d, mB.e, ec.c, tB.e, Sc.e, yB.e];
    for (const lc of hc) Vc.b.IncludesShadersStoreWGSL[lc.name] || (Vc.b.IncludesShadersStoreWGSL[lc.name] = lc.shader);
    const aB = {
      name: zB,
      shader: pc
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);