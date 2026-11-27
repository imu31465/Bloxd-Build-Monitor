export const id = 299;
export const ids = [299];
export const modules = {
  42005: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => MR,
      g: () => CR,
      h: () => WR,
      k: () => AR,
      o: () => UR,
      q: () => nR
    });
    var yR = GR(41542),
      tR = GR(41612),
      uR = GR(38204),
      ZR = GR(41663),
      qR = GR(42011),
      iR = GR(41873),
      fR = GR(41568),
      VR = GR(41869),
      KR = GR(38224),
      wR = GR(41855),
      rR = GR(41852),
      eR = GR(41897),
      aR = GR(38253);
    const LR = {
      effect: null,
      subMesh: null
    };
    class nR extends VR.d {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(RR, JR, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new uR.e, this._cachedWorldViewProjectionMatrix = new uR.e, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = GR, this._options = {
          needAlphaBlending: !1,
          needAlphaTesting: !1,
          attributes: ["position", "normal", "uv"],
          uniforms: ["worldViewProjection"],
          uniformBuffers: [],
          samplers: [],
          externalTextures: [],
          samplerObjects: [],
          storageBuffers: [],
          defines: [],
          useClipPlane: !1,
          ...yR
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(RR) {
        this._shaderPath = RR
      }
      get options() {
        return this._options
      }
      get isMultiview() {
        return this._multiview
      }
      getClassName() {
        return "ShaderMaterial"
      }
      needAlphaBlending() {
        return this.alpha < 1 || this._options.needAlphaBlending
      }
      needAlphaTesting() {
        return this._options.needAlphaTesting
      }
      _checkUniform(RR) {
        -1 === this._options.uniforms.indexOf(RR) && this._options.uniforms.push(RR)
      }
      setTexture(RR, JR) {
        return -1 === this._options.samplers.indexOf(RR) && this._options.samplers.push(RR), this._textures[RR] = JR, this
      }
      setInternalTexture(RR, JR) {
        return -1 === this._options.samplers.indexOf(RR) && this._options.samplers.push(RR), this._internalTextures[RR] = JR, this
      }
      removeTexture(RR) {
        delete this._textures[RR]
      }
      setTextureArray(RR, JR) {
        return -1 === this._options.samplers.indexOf(RR) && this._options.samplers.push(RR), this._checkUniform(RR), this._textureArrays[RR] = JR, this
      }
      setExternalTexture(RR, JR) {
        return -1 === this._options.externalTextures.indexOf(RR) && this._options.externalTextures.push(RR), this._externalTextures[RR] = JR, this
      }
      setFloat(RR, JR) {
        return this._checkUniform(RR), this._floats[RR] = JR, this
      }
      setInt(RR, JR) {
        return this._checkUniform(RR), this._ints[RR] = JR, this
      }
      setUInt(RR, JR) {
        return this._checkUniform(RR), this._uints[RR] = JR, this
      }
      setFloats(RR, JR) {
        return this._checkUniform(RR), this._floatsArrays[RR] = JR, this
      }
      setColor3(RR, JR) {
        return this._checkUniform(RR), this._colors3[RR] = JR, this
      }
      setColor3Array(RR, JR) {
        return this._checkUniform(RR), this._colors3Arrays[RR] = JR.reduce(((RR, JR) => (RR.push(JR.r, JR.g, JR.b), RR)), []), this
      }
      setColor4(RR, JR) {
        return this._checkUniform(RR), this._colors4[RR] = JR, this
      }
      setColor4Array(RR, JR) {
        return this._checkUniform(RR), this._colors4Arrays[RR] = JR.reduce(((RR, JR) => (RR.push(JR.r, JR.g, JR.b, JR.a), RR)), []), this
      }
      setVector2(RR, JR) {
        return this._checkUniform(RR), this._vectors2[RR] = JR, this
      }
      setVector3(RR, JR) {
        return this._checkUniform(RR), this._vectors3[RR] = JR, this
      }
      setVector4(RR, JR) {
        return this._checkUniform(RR), this._vectors4[RR] = JR, this
      }
      setQuaternion(RR, JR) {
        return this._checkUniform(RR), this._quaternions[RR] = JR, this
      }
      setQuaternionArray(RR, JR) {
        return this._checkUniform(RR), this._quaternionsArrays[RR] = JR.reduce(((RR, JR) => (JR.toArray(RR, RR.length), RR)), []), this
      }
      setMatrix(RR, JR) {
        return this._checkUniform(RR), this._matrices[RR] = JR, this
      }
      setMatrices(RR, JR) {
        this._checkUniform(RR);
        const GR = new Float32Array(16 * JR.length);
        for (let yR = 0; yR < JR.length; yR++) {
          JR[yR].copyToArray(GR, 16 * yR)
        }
        return this._matrixArrays[RR] = GR, this
      }
      setMatrix3x3(RR, JR) {
        return this._checkUniform(RR), this._matrices3x3[RR] = JR, this
      }
      setMatrix2x2(RR, JR) {
        return this._checkUniform(RR), this._matrices2x2[RR] = JR, this
      }
      setArray2(RR, JR) {
        return this._checkUniform(RR), this._vectors2Arrays[RR] = JR, this
      }
      setArray3(RR, JR) {
        return this._checkUniform(RR), this._vectors3Arrays[RR] = JR, this
      }
      setArray4(RR, JR) {
        return this._checkUniform(RR), this._vectors4Arrays[RR] = JR, this
      }
      setUniformBuffer(RR, JR) {
        return -1 === this._options.uniformBuffers.indexOf(RR) && this._options.uniformBuffers.push(RR), this._uniformBuffers[RR] = JR, this
      }
      setTextureSampler(RR, JR) {
        return -1 === this._options.samplerObjects.indexOf(RR) && this._options.samplerObjects.push(RR), this._textureSamplers[RR] = JR, this
      }
      setStorageBuffer(RR, JR) {
        return -1 === this._options.storageBuffers.indexOf(RR) && this._options.storageBuffers.push(RR), this._storageBuffers[RR] = JR, this
      }
      setDefine(RR, JR) {
        const GR = RR.trimEnd() + " ",
          yR = this.options.defines.findIndex((JR => JR === RR || JR.startsWith(GR)));
        return yR >= 0 && this.options.defines.splice(yR, 1), ("boolean" !== typeof JR || JR) && this.options.defines.push(GR + JR), this
      }
      isReadyForSubMesh(RR, JR, GR) {
        return this.isReady(RR, GR, JR)
      }
      isReady(RR, JR, GR) {
        const yR = GR && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const RR = yR ? GR._drawWrapper : this._drawWrapper;
          if (RR.effect && RR._wasPreviouslyReady && RR._wasPreviouslyUsingInstances === JR) return !0
        }
        const uR = this.jH(),
          qR = uR.ke(),
          fR = [],
          VR = [];
        let KR = null,
          aR = this._shaderPath,
          nR = this._options.uniforms,
          UR = this._options.uniformBuffers,
          WR = this._options.samplers;
        qR.getCaps().multiview && uR.activeCamera && uR.activeCamera.outputRenderTarget && uR.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, fR.push("#define MULTIVIEW"), -1 !== nR.indexOf("viewProjection") && -1 === nR.indexOf("viewProjectionR") && nR.push("viewProjectionR"));
        for (let tR = 0; tR < this._options.defines.length; tR++) {
          const RR = 0 === this._options.defines[tR].indexOf("#define") ? this._options.defines[tR] : `#define ${this._options.defines[tR]}`;
          fR.push(RR)
        }
        for (let tR = 0; tR < this._options.attributes.length; tR++) VR.push(this._options.attributes[tR]);
        if (RR && RR.isVerticesDataPresent(ZR.l.ColorKind) && (-1 === VR.indexOf(ZR.l.ColorKind) && VR.push(ZR.l.ColorKind), fR.push("#define VERTEXCOLOR")), JR && (fR.push("#define INSTANCES"), (0, rR.ub)(VR, this._materialHelperNeedsPreviousMatrices), RR?.hasThinInstances && (fR.push("#define THIN_INSTANCES"), RR && RR.isVerticesDataPresent(ZR.l.ColorInstanceKind) && (VR.push(ZR.l.ColorInstanceKind), fR.push("#define INSTANCESCOLOR")))), RR && RR.useBones && RR.computeBonesUsingShaders && RR.skeleton) {
          VR.push(ZR.l.MatricesIndicesKind), VR.push(ZR.l.MatricesWeightsKind), RR.numBoneInfluencers > 4 && (VR.push(ZR.l.MatricesIndicesExtraKind), VR.push(ZR.l.MatricesWeightsExtraKind));
          const JR = RR.skeleton;
          fR.push("#define NUM_BONE_INFLUENCERS " + RR.numBoneInfluencers), KR = new iR.c, KR.addCPUSkinningFallback(0, RR), JR.isUsingTextureForMatrices ? (fR.push("#define BONETEXTURE"), -1 === nR.indexOf("boneTextureInfo") && nR.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (fR.push("#define BonesPerMesh " + (JR.bones.length + 1)), -1 === nR.indexOf("mBones") && nR.push("mBones"))
        } else fR.push("#define NUM_BONE_INFLUENCERS 0");
        let AR = 0;
        const CR = RR ? RR.morphTargetManager : null;
        if (CR) {
          const JR = -1 !== fR.indexOf("#define UV1"),
            GR = -1 !== fR.indexOf("#define UV2"),
            yR = -1 !== fR.indexOf("#define TANGENT"),
            tR = -1 !== fR.indexOf("#define NORMAL"),
            uR = -1 !== fR.indexOf("#define VERTEXCOLOR");
          AR = (0, rR.T)(CR, fR, VR, RR, !0, tR, yR, JR, GR, uR), CR.isUsingTextureForTargets && (-1 === nR.indexOf("morphTargetTextureIndices") && nR.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), AR > 0 && (nR = nR.slice(), nR.push("morphTargetInfluences"), nR.push("morphTargetCount"), nR.push("morphTargetTextureInfo"), nR.push("morphTargetTextureIndices"))
        } else fR.push("#define NUM_MORPH_INFLUENCERS 0");
        if (RR) {
          const GR = RR.bakedVertexAnimationManager;
          GR && GR.isEnabled && (fR.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === nR.indexOf("bakedVertexAnimationSettings") && nR.push("bakedVertexAnimationSettings"), -1 === nR.indexOf("bakedVertexAnimationTextureSizeInverted") && nR.push("bakedVertexAnimationTextureSizeInverted"), -1 === nR.indexOf("bakedVertexAnimationTime") && nR.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), JR && VR.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const tR in this._textures)
          if (!this._textures[tR].isReady()) return !1;
        for (const tR in this._internalTextures)
          if (!this._internalTextures[tR].isReady) return !1;
        RR && this.needAlphaTestingForMesh(RR) && fR.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, wR.b)(nR), (0, wR.j)(this, uR, fR)), uR.fogEnabled && RR?.applyFog && uR.fogMode !== tR.g.FOGMODE_NONE && (fR.push("#define FOG"), -1 === nR.indexOf("view") && nR.push("view"), -1 === nR.indexOf("vFogInfos") && nR.push("vFogInfos"), -1 === nR.indexOf("vFogColor") && nR.push("vFogColor")), this._useLogarithmicDepth && (fR.push("#define LOGARITHMICDEPTH"), -1 === nR.indexOf("logarithmicDepthConstant") && nR.push("logarithmicDepthConstant"));
        const XR = GR ? GR.getRenderingMesh() : RR;
        if (XR && this.useVertexPulling) {
          const RR = XR.geometry;
          RR && (this._vertexPullingMetadata = (0, eR.h)(RR), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((RR, JR) => {
            nR.push(`vp_${JR}_info`)
          }))), fR.push("#define USE_VERTEX_PULLING");
          const JR = XR.geometry?.getIndexBuffer();
          JR && !XR.isUnIndexed && (fR.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), JR.is32Bits && fR.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (nR = nR.slice(), UR = UR.slice(), WR = WR.slice(), aR = this.customShaderNameResolve(this.name, nR, UR, WR, fR, VR));
        const MR = yR ? GR._getDrawWrapper(void 0, !0) : this._drawWrapper,
          BR = MR?.effect ?? null,
          lR = MR?.defines ?? null,
          pR = fR.join("\n");
        let gR = BR;
        return lR !== pR && (gR = qR.createEffect(aR, {
          attributes: VR,
          uniformsNames: nR,
          uniformBuffersNames: UR,
          samplers: WR,
          defines: pR,
          fallbacks: KR,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: AR
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, qR), yR ? GR.setEffect(gR, pR, this._materialContext) : MR && MR.setEffect(gR, pR), this._onEffectCreatedObservable && (LR.effect = gR, LR.subMesh = GR ?? RR?.XM[0] ?? null, this._onEffectCreatedObservable.notifyObservers(LR))), MR._wasPreviouslyUsingInstances = !!JR, !!gR?.isReady() && (BR !== gR && uR.resetCachedMaterial(), MR._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(RR, JR) {
        const GR = JR ?? this.getEffect();
        if (!GR) return;
        const yR = this._options.uniforms; - 1 !== yR.indexOf("world") && GR.setMatrix("world", RR);
        const tR = this.jH(); - 1 !== yR.indexOf("worldView") && (RR.multiplyToRef(tR.getViewMatrix(), this._cachedWorldViewMatrix), GR.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== yR.indexOf("worldViewProjection") && (RR.multiplyToRef(tR.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), GR.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== yR.indexOf("view") && GR.setMatrix("view", tR.getViewMatrix())
      }
      bindForSubMesh(RR, JR, GR) {
        this.bind(RR, JR, GR._drawWrapperOverride?.effect, GR)
      }
      bind(RR, JR, GR, yR) {
        const tR = yR && this._storeEffectOnSubMeshes,
          uR = GR ?? (tR ? yR.effect : this.getEffect());
        if (!uR) return;
        const ZR = this.jH();
        this._activeEffect = uR, this.bindOnlyWorldMatrix(RR, GR);
        const qR = this._options.uniformBuffers;
        let iR = !1;
        if (uR && qR && qR.length > 0 && ZR.ke().supportsUniformBuffers)
          for (let VR = 0; VR < qR.length; ++VR) {
            switch (qR[VR]) {
              case "Mesh":
                JR && (JR.getMeshUniformBuffer().bindToEffect(uR, "Mesh"), JR.transferToEffect(RR));
                break;
              case "Scene":
                (0, rR.z)(uR, ZR.getSceneUniformBuffer()), ZR.finalizeSceneUbo(), iR = !0
            }
          }
        const fR = JR && tR ? this._mustRebind(ZR, uR, yR, JR.visibility) : ZR.getCachedMaterial() !== this;
        if (uR && fR) {
          let RR;
          for (RR in iR || -1 === this._options.uniforms.indexOf("view") || uR.setMatrix("view", ZR.getViewMatrix()), iR || -1 === this._options.uniforms.indexOf("projection") || uR.setMatrix("projection", ZR.getProjectionMatrix()), iR || -1 === this._options.uniforms.indexOf("viewProjection") || (uR.setMatrix("viewProjection", ZR.getTransformMatrix()), this._multiview && uR.setMatrix("viewProjectionR", ZR._transformMatrixR)), ZR.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && uR.setVector3("cameraPosition", ZR.activeCamera.globalPosition), (0, rR.h)(JR, uR), (0, wR.c)(uR, this, ZR), this._vertexPullingMetadata && (0, eR.d)(uR, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, rR.u)(tR ? yR.materialDefines : uR.defines, uR, ZR), JR && (0, rR.k)(ZR, JR, uR), this._textures) uR.setTexture(RR, this._textures[RR]);
          for (RR in this._internalTextures) uR._bindTexture(RR, this._internalTextures[RR]);
          for (RR in this._textureArrays) uR.setTextureArray(RR, this._textureArrays[RR]);
          for (RR in this._ints) uR.setInt(RR, this._ints[RR]);
          for (RR in this._uints) uR.setUInt(RR, this._uints[RR]);
          for (RR in this._floats) uR.setFloat(RR, this._floats[RR]);
          for (RR in this._floatsArrays) uR.setArray(RR, this._floatsArrays[RR]);
          for (RR in this._colors3) uR.setColor3(RR, this._colors3[RR]);
          for (RR in this._colors3Arrays) uR.setArray3(RR, this._colors3Arrays[RR]);
          for (RR in this._colors4) {
            const JR = this._colors4[RR];
            uR.setFloat4(RR, JR.r, JR.g, JR.b, JR.a)
          }
          for (RR in this._colors4Arrays) uR.setArray4(RR, this._colors4Arrays[RR]);
          for (RR in this._vectors2) uR.setVector2(RR, this._vectors2[RR]);
          for (RR in this._vectors3) uR.setVector3(RR, this._vectors3[RR]);
          for (RR in this._vectors4) uR.setVector4(RR, this._vectors4[RR]);
          for (RR in this._quaternions) uR.setQuaternion(RR, this._quaternions[RR]);
          for (RR in this._matrices) uR.setMatrix(RR, this._matrices[RR]);
          for (RR in this._matrixArrays) uR.setMatrices(RR, this._matrixArrays[RR]);
          for (RR in this._matrices3x3) uR.setMatrix3x3(RR, this._matrices3x3[RR]);
          for (RR in this._matrices2x2) uR.setMatrix2x2(RR, this._matrices2x2[RR]);
          for (RR in this._vectors2Arrays) uR.setArray2(RR, this._vectors2Arrays[RR]);
          for (RR in this._vectors3Arrays) uR.setArray3(RR, this._vectors3Arrays[RR]);
          for (RR in this._vectors4Arrays) uR.setArray4(RR, this._vectors4Arrays[RR]);
          for (RR in this._quaternionsArrays) uR.setArray4(RR, this._quaternionsArrays[RR]);
          for (RR in this._uniformBuffers) {
            const JR = this._uniformBuffers[RR].getBuffer();
            JR && uR.bindUniformBuffer(JR, RR)
          }
          const GR = ZR.ke(),
            qR = GR.setExternalTexture;
          if (qR)
            for (RR in this._externalTextures) qR.call(GR, RR, this._externalTextures[RR]);
          const fR = GR.setTextureSampler;
          if (fR)
            for (RR in this._textureSamplers) fR.call(GR, RR, this._textureSamplers[RR]);
          const VR = GR.setStorageBuffer;
          if (VR)
            for (RR in this._storageBuffers) VR.call(GR, RR, this._storageBuffers[RR])
        }
        if (uR && JR && (fR || !this.isFrozen)) {
          (0, rR.w)(JR, uR), JR.morphTargetManager && JR.morphTargetManager.isUsingTextureForTargets && JR.morphTargetManager._bind(uR);
          const RR = JR.bakedVertexAnimationManager;
          if (RR && RR.isEnabled) {
            const RR = tR ? yR._drawWrapper : this._drawWrapper;
            JR.bakedVertexAnimationManager?.bind(uR, !!RR._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(JR, uR, yR)
      }
      getActiveTextures() {
        const RR = super.getActiveTextures();
        for (const JR in this._textures) RR.push(this._textures[JR]);
        for (const JR in this._textureArrays) {
          const GR = this._textureArrays[JR];
          for (let JR = 0; JR < GR.length; JR++) RR.push(GR[JR])
        }
        return RR
      }
      hasTexture(RR) {
        if (super.hasTexture(RR)) return !0;
        for (const GR in this._textures)
          if (this._textures[GR] === RR) return !0;
        const JR = RR.getInternalTexture();
        for (const GR in this._internalTextures)
          if (this._internalTextures[GR] === JR) return !0;
        for (const GR in this._textureArrays) {
          const JR = this._textureArrays[GR];
          for (let GR = 0; GR < JR.length; GR++)
            if (JR[GR] === RR) return !0
        }
        return !1
      }
      clone(RR) {
        const JR = yR.c.Clone((() => new nR(RR, this.jH(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        JR.name = RR, JR.id = RR, "object" === typeof JR._shaderPath && (JR._shaderPath = {
          ...JR._shaderPath
        }), this._options = {
          ...this._options
        };
        const GR = Object.keys(this._options);
        for (const yR of GR) {
          const RR = this._options[yR];
          Array.isArray(RR) && (this._options[yR] = RR.slice(0))
        }
        this.stencil.copyTo(JR.stencil);
        for (const yR in this._textures) JR.setTexture(yR, this._textures[yR]);
        for (const yR in this._internalTextures) JR.setInternalTexture(yR, this._internalTextures[yR]);
        for (const yR in this._textureArrays) JR.setTextureArray(yR, this._textureArrays[yR]);
        for (const yR in this._externalTextures) JR.setExternalTexture(yR, this._externalTextures[yR]);
        for (const yR in this._ints) JR.setInt(yR, this._ints[yR]);
        for (const yR in this._uints) JR.setUInt(yR, this._uints[yR]);
        for (const yR in this._floats) JR.setFloat(yR, this._floats[yR]);
        for (const yR in this._floatsArrays) JR.setFloats(yR, this._floatsArrays[yR]);
        for (const yR in this._colors3) JR.setColor3(yR, this._colors3[yR]);
        for (const yR in this._colors3Arrays) JR._colors3Arrays[yR] = this._colors3Arrays[yR];
        for (const yR in this._colors4) JR.setColor4(yR, this._colors4[yR]);
        for (const yR in this._colors4Arrays) JR._colors4Arrays[yR] = this._colors4Arrays[yR];
        for (const yR in this._vectors2) JR.setVector2(yR, this._vectors2[yR]);
        for (const yR in this._vectors3) JR.setVector3(yR, this._vectors3[yR]);
        for (const yR in this._vectors4) JR.setVector4(yR, this._vectors4[yR]);
        for (const yR in this._quaternions) JR.setQuaternion(yR, this._quaternions[yR]);
        for (const yR in this._quaternionsArrays) JR._quaternionsArrays[yR] = this._quaternionsArrays[yR];
        for (const yR in this._matrices) JR.setMatrix(yR, this._matrices[yR]);
        for (const yR in this._matrixArrays) JR._matrixArrays[yR] = this._matrixArrays[yR].slice();
        for (const yR in this._matrices3x3) JR.setMatrix3x3(yR, this._matrices3x3[yR]);
        for (const yR in this._matrices2x2) JR.setMatrix2x2(yR, this._matrices2x2[yR]);
        for (const yR in this._vectors2Arrays) JR.setArray2(yR, this._vectors2Arrays[yR]);
        for (const yR in this._vectors3Arrays) JR.setArray3(yR, this._vectors3Arrays[yR]);
        for (const yR in this._vectors4Arrays) JR.setArray4(yR, this._vectors4Arrays[yR]);
        for (const yR in this._uniformBuffers) JR.setUniformBuffer(yR, this._uniformBuffers[yR]);
        for (const yR in this._textureSamplers) JR.setTextureSampler(yR, this._textureSamplers[yR]);
        for (const yR in this._storageBuffers) JR.setStorageBuffer(yR, this._storageBuffers[yR]);
        return JR
      }
      dispose(RR, JR, GR) {
        if (JR) {
          let RR;
          for (RR in this._textures) this._textures[RR].dispose();
          for (RR in this._internalTextures) this._internalTextures[RR].dispose();
          for (RR in this._textureArrays) {
            const JR = this._textureArrays[RR];
            for (let RR = 0; RR < JR.length; RR++) JR[RR].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(RR, JR, GR)
      }
      serialize() {
        const RR = yR.c.Serialize(this);
        let JR;
        for (JR in RR.customType = "BABYLON.ShaderMaterial", RR.uniqueId = this.uniqueId, RR.options = this._options, RR.shaderPath = this._shaderPath, RR.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, RR.stencil = this.stencil.serialize(), RR.textures = {}, this._textures) RR.textures[JR] = this._textures[JR].serialize();
        for (JR in RR.textureArrays = {}, this._textureArrays) {
          RR.textureArrays[JR] = [];
          const GR = this._textureArrays[JR];
          for (let yR = 0; yR < GR.length; yR++) RR.textureArrays[JR].push(GR[yR].serialize())
        }
        for (JR in RR.ints = {}, this._ints) RR.ints[JR] = this._ints[JR];
        for (JR in RR.uints = {}, this._uints) RR.uints[JR] = this._uints[JR];
        for (JR in RR.floats = {}, this._floats) RR.floats[JR] = this._floats[JR];
        for (JR in RR.floatsArrays = {}, this._floatsArrays) RR.floatsArrays[JR] = this._floatsArrays[JR];
        for (JR in RR.colors3 = {}, this._colors3) {
          const GR = this._colors3[JR];
          RR.colors3[JR] = [GR.r, GR.g, GR.b]
        }
        for (JR in RR.colors3Arrays = {}, this._colors3Arrays) RR.colors3Arrays[JR] = this._colors3Arrays[JR];
        for (JR in RR.colors4 = {}, this._colors4) {
          const GR = this._colors4[JR];
          RR.colors4[JR] = [GR.r, GR.g, GR.b, GR.a]
        }
        for (JR in RR.colors4Arrays = {}, this._colors4Arrays) RR.colors4Arrays[JR] = this._colors4Arrays[JR];
        for (JR in RR.vectors2 = {}, this._vectors2) {
          const GR = this._vectors2[JR];
          RR.vectors2[JR] = [GR.x, GR.y]
        }
        for (JR in RR.vectors3 = {}, this._vectors3) {
          const GR = this._vectors3[JR];
          RR.vectors3[JR] = [GR.x, GR.y, GR.z]
        }
        for (JR in RR.vectors4 = {}, this._vectors4) {
          const GR = this._vectors4[JR];
          RR.vectors4[JR] = [GR.x, GR.y, GR.z, GR.w]
        }
        for (JR in RR.quaternions = {}, this._quaternions) RR.quaternions[JR] = this._quaternions[JR].QtR();
        for (JR in RR.matrices = {}, this._matrices) RR.matrices[JR] = this._matrices[JR].QtR();
        for (JR in RR.matrixArray = {}, this._matrixArrays) RR.matrixArray[JR] = this._matrixArrays[JR];
        for (JR in RR.matrices3x3 = {}, this._matrices3x3) RR.matrices3x3[JR] = this._matrices3x3[JR];
        for (JR in RR.matrices2x2 = {}, this._matrices2x2) RR.matrices2x2[JR] = this._matrices2x2[JR];
        for (JR in RR.vectors2Arrays = {}, this._vectors2Arrays) RR.vectors2Arrays[JR] = this._vectors2Arrays[JR];
        for (JR in RR.vectors3Arrays = {}, this._vectors3Arrays) RR.vectors3Arrays[JR] = this._vectors3Arrays[JR];
        for (JR in RR.vectors4Arrays = {}, this._vectors4Arrays) RR.vectors4Arrays[JR] = this._vectors4Arrays[JR];
        for (JR in RR.quaternionsArrays = {}, this._quaternionsArrays) RR.quaternionsArrays[JR] = this._quaternionsArrays[JR];
        return RR
      }
    }

    function UR(RR, JR, GR) {
      const tR = yR.c.Parse((() => new nR(RR.name, JR, RR.shaderPath, RR.options, RR.storeEffectOnSubMeshes)), RR, JR, GR);
      let ZR;
      for (ZR in RR.stencil && tR.stencil.parse(RR.stencil, JR, GR), RR.textures) tR.setTexture(ZR, qR.f.Parse(RR.textures[ZR], JR, GR));
      for (ZR in RR.textureArrays) {
        const yR = RR.textureArrays[ZR],
          uR = [];
        for (let RR = 0; RR < yR.length; RR++) uR.push(qR.f.Parse(yR[RR], JR, GR));
        tR.setTextureArray(ZR, uR)
      }
      for (ZR in RR.ints) tR.setInt(ZR, RR.ints[ZR]);
      for (ZR in RR.uints) tR.setUInt(ZR, RR.uints[ZR]);
      for (ZR in RR.floats) tR.setFloat(ZR, RR.floats[ZR]);
      for (ZR in RR.floatsArrays) tR.setFloats(ZR, RR.floatsArrays[ZR]);
      for (ZR in RR.colors3) {
        const JR = RR.colors3[ZR];
        tR.setColor3(ZR, {
          r: JR[0],
          g: JR[1],
          b: JR[2]
        })
      }
      for (ZR in RR.colors3Arrays) {
        const JR = RR.colors3Arrays[ZR].reduce(((RR, JR, GR) => (GR % 3 === 0 ? RR.push([JR]) : RR[RR.length - 1].push(JR), RR)), []).map((RR => ({
          r: RR[0],
          g: RR[1],
          b: RR[2]
        })));
        tR.setColor3Array(ZR, JR)
      }
      for (ZR in RR.colors4) {
        const JR = RR.colors4[ZR];
        tR.setColor4(ZR, {
          r: JR[0],
          g: JR[1],
          b: JR[2],
          a: JR[3]
        })
      }
      for (ZR in RR.colors4Arrays) {
        const JR = RR.colors4Arrays[ZR].reduce(((RR, JR, GR) => (GR % 4 === 0 ? RR.push([JR]) : RR[RR.length - 1].push(JR), RR)), []).map((RR => ({
          r: RR[0],
          g: RR[1],
          b: RR[2],
          a: RR[3]
        })));
        tR.setColor4Array(ZR, JR)
      }
      for (ZR in RR.vectors2) {
        const JR = RR.vectors2[ZR];
        tR.setVector2(ZR, {
          x: JR[0],
          y: JR[1]
        })
      }
      for (ZR in RR.vectors3) {
        const JR = RR.vectors3[ZR];
        tR.setVector3(ZR, {
          x: JR[0],
          y: JR[1],
          z: JR[2]
        })
      }
      for (ZR in RR.vectors4) {
        const JR = RR.vectors4[ZR];
        tR.setVector4(ZR, {
          x: JR[0],
          y: JR[1],
          z: JR[2],
          w: JR[3]
        })
      }
      for (ZR in RR.quaternions) tR.setQuaternion(ZR, uR.i.FromArray(RR.quaternions[ZR]));
      for (ZR in RR.matrices) tR.setMatrix(ZR, uR.e.FromArray(RR.matrices[ZR]));
      const iR = tR;
      for (ZR in RR.matrixArray) iR._matrixArrays[ZR] = new Float32Array(RR.matrixArray[ZR]);
      for (ZR in RR.matrices3x3) tR.setMatrix3x3(ZR, RR.matrices3x3[ZR]);
      for (ZR in RR.matrices2x2) tR.setMatrix2x2(ZR, RR.matrices2x2[ZR]);
      for (ZR in RR.vectors2Arrays) tR.setArray2(ZR, RR.vectors2Arrays[ZR]);
      for (ZR in RR.vectors3Arrays) tR.setArray3(ZR, RR.vectors3Arrays[ZR]);
      for (ZR in RR.vectors4Arrays) tR.setArray4(ZR, RR.vectors4Arrays[ZR]);
      for (ZR in RR.quaternionsArrays) tR.setArray4(ZR, RR.quaternionsArrays[ZR]);
      return tR
    }
    async function WR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((tR, uR) => {
        const ZR = new fR.c;
        ZR.addEventListener("readystatechange", (() => {
          if (4 == ZR.readyState)
            if (200 == ZR.status) {
              const JR = UR(JSON.parse(ZR.responseText), GR || KR.c.LastCreatedScene, yR);
              RR && (JR.name = RR), tR(JR)
            } else uR("Unable to load the ShaderMaterial")
        })), ZR.open("GET", JR), ZR.send()
      }))
    }
    async function AR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const yR = this?.SnippetUrl ?? nR.SnippetUrl;
      return await new Promise(((tR, uR) => {
        const ZR = new fR.c;
        ZR.addEventListener("readystatechange", (() => {
          if (4 == ZR.readyState)
            if (200 == ZR.status) {
              const yR = JSON.parse(JSON.parse(ZR.responseText).jsonPayload),
                uR = UR(JSON.parse(yR.shaderMaterial), JR || KR.c.LastCreatedScene, GR);
              uR.snippetId = RR, tR(uR)
            } else uR("Unable to load the snippet " + RR)
        })), ZR.open("GET", yR + "/" + RR.replace(/#/g, "/")), ZR.send()
      }))
    }
    nR.SnippetUrl = "https://snippet.babylonjs.com";
    const CR = AR;
    let XR = !1;

    function MR() {
      XR || (XR = !0, nR.Parse = UR, nR.ParseFromFileAsync = WR, nR.ParseFromSnippetAsync = AR, nR.CreateFromSnippetAsync = CR, (0, aR.f)("BABYLON.ShaderMaterial", nR))
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);