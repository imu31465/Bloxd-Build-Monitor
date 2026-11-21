export const id = 256;
export const ids = [256];
export const modules = {
  39892: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => SQ,
      h: () => cQ,
      k: () => GQ,
      o: () => pQ,
      p: () => MQ,
      q: () => eQ
    });
    var LQ = wQ(39426),
      qQ = wQ(39496),
      oQ = wQ(36696),
      DQ = wQ(39561),
      kQ = wQ(39897),
      vQ = wQ(39770),
      mQ = wQ(39455),
      uQ = wQ(39768),
      HQ = wQ(36720),
      bQ = wQ(39754),
      YQ = wQ(39752),
      xQ = wQ(39787),
      AQ = wQ(36741);
    const tQ = {
      effect: null,
      subMesh: null
    };
    class eQ extends uQ.e {
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(QQ, FQ, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new oQ.c, this._cachedWorldViewProjectionMatrix = new oQ.c, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = wQ, this._options = {
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
          ...LQ
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(QQ) {
        this._shaderPath = QQ
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
      _checkUniform(QQ) {
        -1 === this._options.uniforms.indexOf(QQ) && this._options.uniforms.push(QQ)
      }
      setTexture(QQ, FQ) {
        return -1 === this._options.samplers.indexOf(QQ) && this._options.samplers.push(QQ), this._textures[QQ] = FQ, this
      }
      setInternalTexture(QQ, FQ) {
        return -1 === this._options.samplers.indexOf(QQ) && this._options.samplers.push(QQ), this._internalTextures[QQ] = FQ, this
      }
      removeTexture(QQ) {
        delete this._textures[QQ]
      }
      setTextureArray(QQ, FQ) {
        return -1 === this._options.samplers.indexOf(QQ) && this._options.samplers.push(QQ), this._checkUniform(QQ), this._textureArrays[QQ] = FQ, this
      }
      setExternalTexture(QQ, FQ) {
        return -1 === this._options.externalTextures.indexOf(QQ) && this._options.externalTextures.push(QQ), this._externalTextures[QQ] = FQ, this
      }
      setFloat(QQ, FQ) {
        return this._checkUniform(QQ), this._floats[QQ] = FQ, this
      }
      setInt(QQ, FQ) {
        return this._checkUniform(QQ), this._ints[QQ] = FQ, this
      }
      setUInt(QQ, FQ) {
        return this._checkUniform(QQ), this._uints[QQ] = FQ, this
      }
      setFloats(QQ, FQ) {
        return this._checkUniform(QQ), this._floatsArrays[QQ] = FQ, this
      }
      setColor3(QQ, FQ) {
        return this._checkUniform(QQ), this._colors3[QQ] = FQ, this
      }
      setColor3Array(QQ, FQ) {
        return this._checkUniform(QQ), this._colors3Arrays[QQ] = FQ.reduce(((QQ, FQ) => (QQ.push(FQ.r, FQ.g, FQ.b), QQ)), []), this
      }
      setColor4(QQ, FQ) {
        return this._checkUniform(QQ), this._colors4[QQ] = FQ, this
      }
      setColor4Array(QQ, FQ) {
        return this._checkUniform(QQ), this._colors4Arrays[QQ] = FQ.reduce(((QQ, FQ) => (QQ.push(FQ.r, FQ.g, FQ.b, FQ.a), QQ)), []), this
      }
      setVector2(QQ, FQ) {
        return this._checkUniform(QQ), this._vectors2[QQ] = FQ, this
      }
      setVector3(QQ, FQ) {
        return this._checkUniform(QQ), this._vectors3[QQ] = FQ, this
      }
      setVector4(QQ, FQ) {
        return this._checkUniform(QQ), this._vectors4[QQ] = FQ, this
      }
      setQuaternion(QQ, FQ) {
        return this._checkUniform(QQ), this._quaternions[QQ] = FQ, this
      }
      setQuaternionArray(QQ, FQ) {
        return this._checkUniform(QQ), this._quaternionsArrays[QQ] = FQ.reduce(((QQ, FQ) => (FQ.toArray(QQ, QQ.length), QQ)), []), this
      }
      setMatrix(QQ, FQ) {
        return this._checkUniform(QQ), this._matrices[QQ] = FQ, this
      }
      setMatrices(QQ, FQ) {
        this._checkUniform(QQ);
        const wQ = new Float32Array(16 * FQ.length);
        for (let LQ = 0; LQ < FQ.length; LQ++) {
          FQ[LQ].copyToArray(wQ, 16 * LQ)
        }
        return this._matrixArrays[QQ] = wQ, this
      }
      setMatrix3x3(QQ, FQ) {
        return this._checkUniform(QQ), this._matrices3x3[QQ] = FQ, this
      }
      setMatrix2x2(QQ, FQ) {
        return this._checkUniform(QQ), this._matrices2x2[QQ] = FQ, this
      }
      setArray2(QQ, FQ) {
        return this._checkUniform(QQ), this._vectors2Arrays[QQ] = FQ, this
      }
      setArray3(QQ, FQ) {
        return this._checkUniform(QQ), this._vectors3Arrays[QQ] = FQ, this
      }
      setArray4(QQ, FQ) {
        return this._checkUniform(QQ), this._vectors4Arrays[QQ] = FQ, this
      }
      setUniformBuffer(QQ, FQ) {
        return -1 === this._options.uniformBuffers.indexOf(QQ) && this._options.uniformBuffers.push(QQ), this._uniformBuffers[QQ] = FQ, this
      }
      setTextureSampler(QQ, FQ) {
        return -1 === this._options.samplerObjects.indexOf(QQ) && this._options.samplerObjects.push(QQ), this._textureSamplers[QQ] = FQ, this
      }
      setStorageBuffer(QQ, FQ) {
        return -1 === this._options.storageBuffers.indexOf(QQ) && this._options.storageBuffers.push(QQ), this._storageBuffers[QQ] = FQ, this
      }
      setDefine(QQ, FQ) {
        const wQ = QQ.trimEnd() + " ",
          LQ = this.options.defines.findIndex((FQ => FQ === QQ || FQ.startsWith(wQ)));
        return LQ >= 0 && this.options.defines.splice(LQ, 1), ("boolean" !== typeof FQ || FQ) && this.options.defines.push(wQ + FQ), this
      }
      isReadyForSubMesh(QQ, FQ, wQ) {
        return this.isReady(QQ, wQ, FQ)
      }
      isReady(QQ, FQ, wQ) {
        const LQ = wQ && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const QQ = LQ ? wQ._drawWrapper : this._drawWrapper;
          if (QQ.effect && QQ._wasPreviouslyReady && QQ._wasPreviouslyUsingInstances === FQ) return !0
        }
        const oQ = this.iN(),
          kQ = oQ.Wx(),
          mQ = [],
          uQ = [];
        let HQ = null,
          AQ = this._shaderPath,
          eQ = this._options.uniforms,
          MQ = this._options.uniformBuffers,
          GQ = this._options.samplers;
        kQ.getCaps().multiview && oQ.activeCamera && oQ.activeCamera.outputRenderTarget && oQ.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, mQ.push("#define MULTIVIEW"), -1 !== eQ.indexOf("viewProjection") && -1 === eQ.indexOf("viewProjectionR") && eQ.push("viewProjectionR"));
        for (let qQ = 0; qQ < this._options.defines.length; qQ++) {
          const QQ = 0 === this._options.defines[qQ].indexOf("#define") ? this._options.defines[qQ] : `#define ${this._options.defines[qQ]}`;
          mQ.push(QQ)
        }
        for (let qQ = 0; qQ < this._options.attributes.length; qQ++) uQ.push(this._options.attributes[qQ]);
        if (QQ && QQ.isVerticesDataPresent(DQ.h.ColorKind) && (-1 === uQ.indexOf(DQ.h.ColorKind) && uQ.push(DQ.h.ColorKind), mQ.push("#define VERTEXCOLOR")), FQ && (mQ.push("#define INSTANCES"), (0, YQ.qb)(uQ, this._materialHelperNeedsPreviousMatrices), QQ?.hasThinInstances && (mQ.push("#define THIN_INSTANCES"), QQ && QQ.isVerticesDataPresent(DQ.h.ColorInstanceKind) && (uQ.push(DQ.h.ColorInstanceKind), mQ.push("#define INSTANCESCOLOR")))), QQ && QQ.useBones && QQ.computeBonesUsingShaders && QQ.skeleton) {
          uQ.push(DQ.h.MatricesIndicesKind), uQ.push(DQ.h.MatricesWeightsKind), QQ.numBoneInfluencers > 4 && (uQ.push(DQ.h.MatricesIndicesExtraKind), uQ.push(DQ.h.MatricesWeightsExtraKind));
          const FQ = QQ.skeleton;
          mQ.push("#define NUM_BONE_INFLUENCERS " + QQ.numBoneInfluencers), HQ = new vQ.d, HQ.addCPUSkinningFallback(0, QQ), FQ.isUsingTextureForMatrices ? (mQ.push("#define BONETEXTURE"), -1 === eQ.indexOf("boneTextureInfo") && eQ.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (mQ.push("#define BonesPerMesh " + (FQ.bones.length + 1)), -1 === eQ.indexOf("mBones") && eQ.push("mBones"))
        } else mQ.push("#define NUM_BONE_INFLUENCERS 0");
        let pQ = 0;
        const cQ = QQ ? QQ.morphTargetManager : null;
        if (cQ) {
          const FQ = -1 !== mQ.indexOf("#define UV1"),
            wQ = -1 !== mQ.indexOf("#define UV2"),
            LQ = -1 !== mQ.indexOf("#define TANGENT"),
            qQ = -1 !== mQ.indexOf("#define NORMAL"),
            oQ = -1 !== mQ.indexOf("#define VERTEXCOLOR");
          pQ = (0, YQ.K)(cQ, mQ, uQ, QQ, !0, qQ, LQ, FQ, wQ, oQ), cQ.isUsingTextureForTargets && (-1 === eQ.indexOf("morphTargetTextureIndices") && eQ.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), pQ > 0 && (eQ = eQ.slice(), eQ.push("morphTargetInfluences"), eQ.push("morphTargetCount"), eQ.push("morphTargetTextureInfo"), eQ.push("morphTargetTextureIndices"))
        } else mQ.push("#define NUM_MORPH_INFLUENCERS 0");
        if (QQ) {
          const wQ = QQ.bakedVertexAnimationManager;
          wQ && wQ.isEnabled && (mQ.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === eQ.indexOf("bakedVertexAnimationSettings") && eQ.push("bakedVertexAnimationSettings"), -1 === eQ.indexOf("bakedVertexAnimationTextureSizeInverted") && eQ.push("bakedVertexAnimationTextureSizeInverted"), -1 === eQ.indexOf("bakedVertexAnimationTime") && eQ.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), FQ && uQ.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const qQ in this._textures)
          if (!this._textures[qQ].isReady()) return !1;
        for (const qQ in this._internalTextures)
          if (!this._internalTextures[qQ].isReady) return !1;
        QQ && this.needAlphaTestingForMesh(QQ) && mQ.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, bQ.d)(eQ), (0, bQ.o)(this, oQ, mQ)), oQ.fogEnabled && QQ?.applyFog && oQ.fogMode !== qQ.e.FOGMODE_NONE && (mQ.push("#define FOG"), -1 === eQ.indexOf("view") && eQ.push("view"), -1 === eQ.indexOf("vFogInfos") && eQ.push("vFogInfos"), -1 === eQ.indexOf("vFogColor") && eQ.push("vFogColor")), this._useLogarithmicDepth && (mQ.push("#define LOGARITHMICDEPTH"), -1 === eQ.indexOf("logarithmicDepthConstant") && eQ.push("logarithmicDepthConstant"));
        const CQ = wQ ? wQ.getRenderingMesh() : QQ;
        if (CQ && this.useVertexPulling) {
          const QQ = CQ.geometry;
          QQ && (this._vertexPullingMetadata = (0, xQ.i)(QQ), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((QQ, FQ) => {
            eQ.push(`vp_${FQ}_info`)
          }))), mQ.push("#define USE_VERTEX_PULLING");
          const FQ = CQ.geometry?.getIndexBuffer();
          FQ && !CQ.isUnIndexed && (mQ.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), FQ.is32Bits && mQ.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (eQ = eQ.slice(), MQ = MQ.slice(), GQ = GQ.slice(), AQ = this.customShaderNameResolve(this.name, eQ, MQ, GQ, mQ, uQ));
        const SQ = LQ ? wQ._getDrawWrapper(void 0, !0) : this._drawWrapper,
          iQ = SQ?.effect ?? null,
          WQ = SQ?.defines ?? null,
          RQ = mQ.join("\n");
        let OQ = iQ;
        return WQ !== RQ && (OQ = kQ.createEffect(AQ, {
          attributes: uQ,
          uniformsNames: eQ,
          uniformBuffersNames: MQ,
          samplers: GQ,
          defines: RQ,
          fallbacks: HQ,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: pQ
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, kQ), LQ ? wQ.setEffect(OQ, RQ, this._materialContext) : SQ && SQ.setEffect(OQ, RQ), this._onEffectCreatedObservable && (tQ.effect = OQ, tQ.subMesh = wQ ?? QQ?.lC[0] ?? null, this._onEffectCreatedObservable.notifyObservers(tQ))), SQ._wasPreviouslyUsingInstances = !!FQ, !!OQ?.isReady() && (iQ !== OQ && oQ.resetCachedMaterial(), SQ._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(QQ, FQ) {
        const wQ = FQ ?? this.getEffect();
        if (!wQ) return;
        const LQ = this._options.uniforms; - 1 !== LQ.indexOf("world") && wQ.setMatrix("world", QQ);
        const qQ = this.iN(); - 1 !== LQ.indexOf("worldView") && (QQ.multiplyToRef(qQ.getViewMatrix(), this._cachedWorldViewMatrix), wQ.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== LQ.indexOf("worldViewProjection") && (QQ.multiplyToRef(qQ.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), wQ.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== LQ.indexOf("view") && wQ.setMatrix("view", qQ.getViewMatrix())
      }
      bindForSubMesh(QQ, FQ, wQ) {
        this.bind(QQ, FQ, wQ._drawWrapperOverride?.effect, wQ)
      }
      bind(QQ, FQ, wQ, LQ) {
        const qQ = LQ && this._storeEffectOnSubMeshes,
          oQ = wQ ?? (qQ ? LQ.effect : this.getEffect());
        if (!oQ) return;
        const DQ = this.iN();
        this._activeEffect = oQ, this.bindOnlyWorldMatrix(QQ, wQ);
        const kQ = this._options.uniformBuffers;
        let vQ = !1;
        if (oQ && kQ && kQ.length > 0 && DQ.Wx().supportsUniformBuffers)
          for (let uQ = 0; uQ < kQ.length; ++uQ) {
            switch (kQ[uQ]) {
              case "Mesh":
                FQ && (FQ.getMeshUniformBuffer().bindToEffect(oQ, "Mesh"), FQ.transferToEffect(QQ));
                break;
              case "Scene":
                (0, YQ.w)(oQ, DQ.getSceneUniformBuffer()), DQ.finalizeSceneUbo(), vQ = !0
            }
          }
        const mQ = FQ && qQ ? this._mustRebind(DQ, oQ, LQ, FQ.visibility) : DQ.getCachedMaterial() !== this;
        if (oQ && mQ) {
          let QQ;
          for (QQ in vQ || -1 === this._options.uniforms.indexOf("view") || oQ.setMatrix("view", DQ.getViewMatrix()), vQ || -1 === this._options.uniforms.indexOf("projection") || oQ.setMatrix("projection", DQ.getProjectionMatrix()), vQ || -1 === this._options.uniforms.indexOf("viewProjection") || (oQ.setMatrix("viewProjection", DQ.getTransformMatrix()), this._multiview && oQ.setMatrix("viewProjectionR", DQ._transformMatrixR)), DQ.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && oQ.setVector3("cameraPosition", DQ.activeCamera.globalPosition), (0, YQ.d)(FQ, oQ), (0, bQ.h)(oQ, this, DQ), this._vertexPullingMetadata && (0, xQ.e)(oQ, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, YQ.r)(qQ ? LQ.materialDefines : oQ.defines, oQ, DQ), FQ && (0, YQ.g)(DQ, FQ, oQ), this._textures) oQ.setTexture(QQ, this._textures[QQ]);
          for (QQ in this._internalTextures) oQ._bindTexture(QQ, this._internalTextures[QQ]);
          for (QQ in this._textureArrays) oQ.setTextureArray(QQ, this._textureArrays[QQ]);
          for (QQ in this._ints) oQ.setInt(QQ, this._ints[QQ]);
          for (QQ in this._uints) oQ.setUInt(QQ, this._uints[QQ]);
          for (QQ in this._floats) oQ.setFloat(QQ, this._floats[QQ]);
          for (QQ in this._floatsArrays) oQ.setArray(QQ, this._floatsArrays[QQ]);
          for (QQ in this._colors3) oQ.setColor3(QQ, this._colors3[QQ]);
          for (QQ in this._colors3Arrays) oQ.setArray3(QQ, this._colors3Arrays[QQ]);
          for (QQ in this._colors4) {
            const FQ = this._colors4[QQ];
            oQ.setFloat4(QQ, FQ.r, FQ.g, FQ.b, FQ.a)
          }
          for (QQ in this._colors4Arrays) oQ.setArray4(QQ, this._colors4Arrays[QQ]);
          for (QQ in this._vectors2) oQ.setVector2(QQ, this._vectors2[QQ]);
          for (QQ in this._vectors3) oQ.setVector3(QQ, this._vectors3[QQ]);
          for (QQ in this._vectors4) oQ.setVector4(QQ, this._vectors4[QQ]);
          for (QQ in this._quaternions) oQ.setQuaternion(QQ, this._quaternions[QQ]);
          for (QQ in this._matrices) oQ.setMatrix(QQ, this._matrices[QQ]);
          for (QQ in this._matrixArrays) oQ.setMatrices(QQ, this._matrixArrays[QQ]);
          for (QQ in this._matrices3x3) oQ.setMatrix3x3(QQ, this._matrices3x3[QQ]);
          for (QQ in this._matrices2x2) oQ.setMatrix2x2(QQ, this._matrices2x2[QQ]);
          for (QQ in this._vectors2Arrays) oQ.setArray2(QQ, this._vectors2Arrays[QQ]);
          for (QQ in this._vectors3Arrays) oQ.setArray3(QQ, this._vectors3Arrays[QQ]);
          for (QQ in this._vectors4Arrays) oQ.setArray4(QQ, this._vectors4Arrays[QQ]);
          for (QQ in this._quaternionsArrays) oQ.setArray4(QQ, this._quaternionsArrays[QQ]);
          for (QQ in this._uniformBuffers) {
            const FQ = this._uniformBuffers[QQ].getBuffer();
            FQ && oQ.bindUniformBuffer(FQ, QQ)
          }
          const wQ = DQ.Wx(),
            kQ = wQ.setExternalTexture;
          if (kQ)
            for (QQ in this._externalTextures) kQ.call(wQ, QQ, this._externalTextures[QQ]);
          const mQ = wQ.setTextureSampler;
          if (mQ)
            for (QQ in this._textureSamplers) mQ.call(wQ, QQ, this._textureSamplers[QQ]);
          const uQ = wQ.setStorageBuffer;
          if (uQ)
            for (QQ in this._storageBuffers) uQ.call(wQ, QQ, this._storageBuffers[QQ])
        }
        if (oQ && FQ && (mQ || !this.isFrozen)) {
          (0, YQ.s)(FQ, oQ), FQ.morphTargetManager && FQ.morphTargetManager.isUsingTextureForTargets && FQ.morphTargetManager._bind(oQ);
          const QQ = FQ.bakedVertexAnimationManager;
          if (QQ && QQ.isEnabled) {
            const QQ = qQ ? LQ._drawWrapper : this._drawWrapper;
            FQ.bakedVertexAnimationManager?.bind(oQ, !!QQ._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(FQ, oQ, LQ)
      }
      getActiveTextures() {
        const QQ = super.getActiveTextures();
        for (const FQ in this._textures) QQ.push(this._textures[FQ]);
        for (const FQ in this._textureArrays) {
          const wQ = this._textureArrays[FQ];
          for (let FQ = 0; FQ < wQ.length; FQ++) QQ.push(wQ[FQ])
        }
        return QQ
      }
      hasTexture(QQ) {
        if (super.hasTexture(QQ)) return !0;
        for (const wQ in this._textures)
          if (this._textures[wQ] === QQ) return !0;
        const FQ = QQ.getInternalTexture();
        for (const wQ in this._internalTextures)
          if (this._internalTextures[wQ] === FQ) return !0;
        for (const wQ in this._textureArrays) {
          const FQ = this._textureArrays[wQ];
          for (let wQ = 0; wQ < FQ.length; wQ++)
            if (FQ[wQ] === QQ) return !0
        }
        return !1
      }
      clone(QQ) {
        const FQ = LQ.c.Clone((() => new eQ(QQ, this.iN(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        FQ.name = QQ, FQ.id = QQ, "object" === typeof FQ._shaderPath && (FQ._shaderPath = {
          ...FQ._shaderPath
        }), this._options = {
          ...this._options
        };
        const wQ = Object.keys(this._options);
        for (const LQ of wQ) {
          const QQ = this._options[LQ];
          Array.isArray(QQ) && (this._options[LQ] = QQ.slice(0))
        }
        this.stencil.copyTo(FQ.stencil);
        for (const LQ in this._textures) FQ.setTexture(LQ, this._textures[LQ]);
        for (const LQ in this._internalTextures) FQ.setInternalTexture(LQ, this._internalTextures[LQ]);
        for (const LQ in this._textureArrays) FQ.setTextureArray(LQ, this._textureArrays[LQ]);
        for (const LQ in this._externalTextures) FQ.setExternalTexture(LQ, this._externalTextures[LQ]);
        for (const LQ in this._ints) FQ.setInt(LQ, this._ints[LQ]);
        for (const LQ in this._uints) FQ.setUInt(LQ, this._uints[LQ]);
        for (const LQ in this._floats) FQ.setFloat(LQ, this._floats[LQ]);
        for (const LQ in this._floatsArrays) FQ.setFloats(LQ, this._floatsArrays[LQ]);
        for (const LQ in this._colors3) FQ.setColor3(LQ, this._colors3[LQ]);
        for (const LQ in this._colors3Arrays) FQ._colors3Arrays[LQ] = this._colors3Arrays[LQ];
        for (const LQ in this._colors4) FQ.setColor4(LQ, this._colors4[LQ]);
        for (const LQ in this._colors4Arrays) FQ._colors4Arrays[LQ] = this._colors4Arrays[LQ];
        for (const LQ in this._vectors2) FQ.setVector2(LQ, this._vectors2[LQ]);
        for (const LQ in this._vectors3) FQ.setVector3(LQ, this._vectors3[LQ]);
        for (const LQ in this._vectors4) FQ.setVector4(LQ, this._vectors4[LQ]);
        for (const LQ in this._quaternions) FQ.setQuaternion(LQ, this._quaternions[LQ]);
        for (const LQ in this._quaternionsArrays) FQ._quaternionsArrays[LQ] = this._quaternionsArrays[LQ];
        for (const LQ in this._matrices) FQ.setMatrix(LQ, this._matrices[LQ]);
        for (const LQ in this._matrixArrays) FQ._matrixArrays[LQ] = this._matrixArrays[LQ].slice();
        for (const LQ in this._matrices3x3) FQ.setMatrix3x3(LQ, this._matrices3x3[LQ]);
        for (const LQ in this._matrices2x2) FQ.setMatrix2x2(LQ, this._matrices2x2[LQ]);
        for (const LQ in this._vectors2Arrays) FQ.setArray2(LQ, this._vectors2Arrays[LQ]);
        for (const LQ in this._vectors3Arrays) FQ.setArray3(LQ, this._vectors3Arrays[LQ]);
        for (const LQ in this._vectors4Arrays) FQ.setArray4(LQ, this._vectors4Arrays[LQ]);
        for (const LQ in this._uniformBuffers) FQ.setUniformBuffer(LQ, this._uniformBuffers[LQ]);
        for (const LQ in this._textureSamplers) FQ.setTextureSampler(LQ, this._textureSamplers[LQ]);
        for (const LQ in this._storageBuffers) FQ.setStorageBuffer(LQ, this._storageBuffers[LQ]);
        return FQ
      }
      dispose(QQ, FQ, wQ) {
        if (FQ) {
          let QQ;
          for (QQ in this._textures) this._textures[QQ].dispose();
          for (QQ in this._internalTextures) this._internalTextures[QQ].dispose();
          for (QQ in this._textureArrays) {
            const FQ = this._textureArrays[QQ];
            for (let QQ = 0; QQ < FQ.length; QQ++) FQ[QQ].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(QQ, FQ, wQ)
      }
      serialize() {
        const QQ = LQ.c.Serialize(this);
        let FQ;
        for (FQ in QQ.customType = "BABYLON.ShaderMaterial", QQ.uniqueId = this.uniqueId, QQ.options = this._options, QQ.shaderPath = this._shaderPath, QQ.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, QQ.stencil = this.stencil.serialize(), QQ.textures = {}, this._textures) QQ.textures[FQ] = this._textures[FQ].serialize();
        for (FQ in QQ.textureArrays = {}, this._textureArrays) {
          QQ.textureArrays[FQ] = [];
          const wQ = this._textureArrays[FQ];
          for (let LQ = 0; LQ < wQ.length; LQ++) QQ.textureArrays[FQ].push(wQ[LQ].serialize())
        }
        for (FQ in QQ.ints = {}, this._ints) QQ.ints[FQ] = this._ints[FQ];
        for (FQ in QQ.uints = {}, this._uints) QQ.uints[FQ] = this._uints[FQ];
        for (FQ in QQ.floats = {}, this._floats) QQ.floats[FQ] = this._floats[FQ];
        for (FQ in QQ.floatsArrays = {}, this._floatsArrays) QQ.floatsArrays[FQ] = this._floatsArrays[FQ];
        for (FQ in QQ.colors3 = {}, this._colors3) {
          const wQ = this._colors3[FQ];
          QQ.colors3[FQ] = [wQ.r, wQ.g, wQ.b]
        }
        for (FQ in QQ.colors3Arrays = {}, this._colors3Arrays) QQ.colors3Arrays[FQ] = this._colors3Arrays[FQ];
        for (FQ in QQ.colors4 = {}, this._colors4) {
          const wQ = this._colors4[FQ];
          QQ.colors4[FQ] = [wQ.r, wQ.g, wQ.b, wQ.a]
        }
        for (FQ in QQ.colors4Arrays = {}, this._colors4Arrays) QQ.colors4Arrays[FQ] = this._colors4Arrays[FQ];
        for (FQ in QQ.vectors2 = {}, this._vectors2) {
          const wQ = this._vectors2[FQ];
          QQ.vectors2[FQ] = [wQ.x, wQ.y]
        }
        for (FQ in QQ.vectors3 = {}, this._vectors3) {
          const wQ = this._vectors3[FQ];
          QQ.vectors3[FQ] = [wQ.x, wQ.y, wQ.z]
        }
        for (FQ in QQ.vectors4 = {}, this._vectors4) {
          const wQ = this._vectors4[FQ];
          QQ.vectors4[FQ] = [wQ.x, wQ.y, wQ.z, wQ.w]
        }
        for (FQ in QQ.quaternions = {}, this._quaternions) QQ.quaternions[FQ] = this._quaternions[FQ].RLQ();
        for (FQ in QQ.matrices = {}, this._matrices) QQ.matrices[FQ] = this._matrices[FQ].RLQ();
        for (FQ in QQ.matrixArray = {}, this._matrixArrays) QQ.matrixArray[FQ] = this._matrixArrays[FQ];
        for (FQ in QQ.matrices3x3 = {}, this._matrices3x3) QQ.matrices3x3[FQ] = this._matrices3x3[FQ];
        for (FQ in QQ.matrices2x2 = {}, this._matrices2x2) QQ.matrices2x2[FQ] = this._matrices2x2[FQ];
        for (FQ in QQ.vectors2Arrays = {}, this._vectors2Arrays) QQ.vectors2Arrays[FQ] = this._vectors2Arrays[FQ];
        for (FQ in QQ.vectors3Arrays = {}, this._vectors3Arrays) QQ.vectors3Arrays[FQ] = this._vectors3Arrays[FQ];
        for (FQ in QQ.vectors4Arrays = {}, this._vectors4Arrays) QQ.vectors4Arrays[FQ] = this._vectors4Arrays[FQ];
        for (FQ in QQ.quaternionsArrays = {}, this._quaternionsArrays) QQ.quaternionsArrays[FQ] = this._quaternionsArrays[FQ];
        return QQ
      }
    }

    function MQ(QQ, FQ, wQ) {
      const qQ = LQ.c.Parse((() => new eQ(QQ.name, FQ, QQ.shaderPath, QQ.options, QQ.storeEffectOnSubMeshes)), QQ, FQ, wQ);
      let DQ;
      for (DQ in QQ.stencil && qQ.stencil.parse(QQ.stencil, FQ, wQ), QQ.textures) qQ.setTexture(DQ, kQ.e.Parse(QQ.textures[DQ], FQ, wQ));
      for (DQ in QQ.textureArrays) {
        const LQ = QQ.textureArrays[DQ],
          oQ = [];
        for (let QQ = 0; QQ < LQ.length; QQ++) oQ.push(kQ.e.Parse(LQ[QQ], FQ, wQ));
        qQ.setTextureArray(DQ, oQ)
      }
      for (DQ in QQ.ints) qQ.setInt(DQ, QQ.ints[DQ]);
      for (DQ in QQ.uints) qQ.setUInt(DQ, QQ.uints[DQ]);
      for (DQ in QQ.floats) qQ.setFloat(DQ, QQ.floats[DQ]);
      for (DQ in QQ.floatsArrays) qQ.setFloats(DQ, QQ.floatsArrays[DQ]);
      for (DQ in QQ.colors3) {
        const FQ = QQ.colors3[DQ];
        qQ.setColor3(DQ, {
          r: FQ[0],
          g: FQ[1],
          b: FQ[2]
        })
      }
      for (DQ in QQ.colors3Arrays) {
        const FQ = QQ.colors3Arrays[DQ].reduce(((QQ, FQ, wQ) => (wQ % 3 === 0 ? QQ.push([FQ]) : QQ[QQ.length - 1].push(FQ), QQ)), []).map((QQ => ({
          r: QQ[0],
          g: QQ[1],
          b: QQ[2]
        })));
        qQ.setColor3Array(DQ, FQ)
      }
      for (DQ in QQ.colors4) {
        const FQ = QQ.colors4[DQ];
        qQ.setColor4(DQ, {
          r: FQ[0],
          g: FQ[1],
          b: FQ[2],
          a: FQ[3]
        })
      }
      for (DQ in QQ.colors4Arrays) {
        const FQ = QQ.colors4Arrays[DQ].reduce(((QQ, FQ, wQ) => (wQ % 4 === 0 ? QQ.push([FQ]) : QQ[QQ.length - 1].push(FQ), QQ)), []).map((QQ => ({
          r: QQ[0],
          g: QQ[1],
          b: QQ[2],
          a: QQ[3]
        })));
        qQ.setColor4Array(DQ, FQ)
      }
      for (DQ in QQ.vectors2) {
        const FQ = QQ.vectors2[DQ];
        qQ.setVector2(DQ, {
          x: FQ[0],
          y: FQ[1]
        })
      }
      for (DQ in QQ.vectors3) {
        const FQ = QQ.vectors3[DQ];
        qQ.setVector3(DQ, {
          x: FQ[0],
          y: FQ[1],
          z: FQ[2]
        })
      }
      for (DQ in QQ.vectors4) {
        const FQ = QQ.vectors4[DQ];
        qQ.setVector4(DQ, {
          x: FQ[0],
          y: FQ[1],
          z: FQ[2],
          w: FQ[3]
        })
      }
      for (DQ in QQ.quaternions) qQ.setQuaternion(DQ, oQ.e.FromArray(QQ.quaternions[DQ]));
      for (DQ in QQ.matrices) qQ.setMatrix(DQ, oQ.c.FromArray(QQ.matrices[DQ]));
      const vQ = qQ;
      for (DQ in QQ.matrixArray) vQ._matrixArrays[DQ] = new Float32Array(QQ.matrixArray[DQ]);
      for (DQ in QQ.matrices3x3) qQ.setMatrix3x3(DQ, QQ.matrices3x3[DQ]);
      for (DQ in QQ.matrices2x2) qQ.setMatrix2x2(DQ, QQ.matrices2x2[DQ]);
      for (DQ in QQ.vectors2Arrays) qQ.setArray2(DQ, QQ.vectors2Arrays[DQ]);
      for (DQ in QQ.vectors3Arrays) qQ.setArray3(DQ, QQ.vectors3Arrays[DQ]);
      for (DQ in QQ.vectors4Arrays) qQ.setArray4(DQ, QQ.vectors4Arrays[DQ]);
      for (DQ in QQ.quaternionsArrays) qQ.setArray4(DQ, QQ.quaternionsArrays[DQ]);
      return qQ
    }
    async function GQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((qQ, oQ) => {
        const DQ = new mQ.e;
        DQ.addEventListener("readystatechange", (() => {
          if (4 == DQ.readyState)
            if (200 == DQ.status) {
              const FQ = MQ(JSON.parse(DQ.responseText), wQ || HQ.d.LastCreatedScene, LQ);
              QQ && (FQ.name = QQ), qQ(FQ)
            } else oQ("Unable to load the ShaderMaterial")
        })), DQ.open("GET", FQ), DQ.send()
      }))
    }
    async function pQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const LQ = this?.SnippetUrl ?? eQ.SnippetUrl;
      return await new Promise(((qQ, oQ) => {
        const DQ = new mQ.e;
        DQ.addEventListener("readystatechange", (() => {
          if (4 == DQ.readyState)
            if (200 == DQ.status) {
              const LQ = JSON.parse(JSON.parse(DQ.responseText).jsonPayload),
                oQ = MQ(JSON.parse(LQ.shaderMaterial), FQ || HQ.d.LastCreatedScene, wQ);
              oQ.snippetId = QQ, qQ(oQ)
            } else oQ("Unable to load the snippet " + QQ)
        })), DQ.open("GET", LQ + "/" + QQ.replace(/#/g, "/")), DQ.send()
      }))
    }
    eQ.SnippetUrl = "https://snippet.babylonjs.com";
    const cQ = pQ;
    let CQ = !1;

    function SQ() {
      CQ || (CQ = !0, eQ.Parse = MQ, eQ.ParseFromFileAsync = GQ, eQ.ParseFromSnippetAsync = pQ, eQ.CreateFromSnippetAsync = cQ, (0, AQ.e)("BABYLON.ShaderMaterial", eQ))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);