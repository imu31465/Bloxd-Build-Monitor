export const id = 268;
export const ids = [268];
export const modules = {
  40593: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => eT,
      d: () => bT,
      e: () => qT,
      h: () => iT,
      k: () => fT,
      o: () => vT
    });
    var WT = mT(40122),
      zT = mT(40198),
      MT = mT(37188),
      gT = mT(40257),
      nT = mT(40602),
      HT = mT(40479),
      kT = mT(40155),
      jT = mT(40474),
      lT = mT(37216),
      LT = mT(40463),
      pT = mT(40456),
      BT = mT(40495),
      ZT = mT(37239);
    const cT = {
      effect: null,
      subMesh: null
    };
    class vT extends jT.c {
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(TT, UT, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new MT.e, this._cachedWorldViewProjectionMatrix = new MT.e, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = mT, this._options = {
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
          ...WT
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(TT) {
        this._shaderPath = TT
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
      _checkUniform(TT) {
        -1 === this._options.uniforms.indexOf(TT) && this._options.uniforms.push(TT)
      }
      setTexture(TT, UT) {
        return -1 === this._options.samplers.indexOf(TT) && this._options.samplers.push(TT), this._textures[TT] = UT, this
      }
      setInternalTexture(TT, UT) {
        return -1 === this._options.samplers.indexOf(TT) && this._options.samplers.push(TT), this._internalTextures[TT] = UT, this
      }
      removeTexture(TT) {
        delete this._textures[TT]
      }
      setTextureArray(TT, UT) {
        return -1 === this._options.samplers.indexOf(TT) && this._options.samplers.push(TT), this._checkUniform(TT), this._textureArrays[TT] = UT, this
      }
      setExternalTexture(TT, UT) {
        return -1 === this._options.externalTextures.indexOf(TT) && this._options.externalTextures.push(TT), this._externalTextures[TT] = UT, this
      }
      setFloat(TT, UT) {
        return this._checkUniform(TT), this._floats[TT] = UT, this
      }
      setInt(TT, UT) {
        return this._checkUniform(TT), this._ints[TT] = UT, this
      }
      setUInt(TT, UT) {
        return this._checkUniform(TT), this._uints[TT] = UT, this
      }
      setFloats(TT, UT) {
        return this._checkUniform(TT), this._floatsArrays[TT] = UT, this
      }
      setColor3(TT, UT) {
        return this._checkUniform(TT), this._colors3[TT] = UT, this
      }
      setColor3Array(TT, UT) {
        return this._checkUniform(TT), this._colors3Arrays[TT] = UT.reduce(((TT, UT) => (TT.push(UT.r, UT.g, UT.b), TT)), []), this
      }
      setColor4(TT, UT) {
        return this._checkUniform(TT), this._colors4[TT] = UT, this
      }
      setColor4Array(TT, UT) {
        return this._checkUniform(TT), this._colors4Arrays[TT] = UT.reduce(((TT, UT) => (TT.push(UT.r, UT.g, UT.b, UT.a), TT)), []), this
      }
      setVector2(TT, UT) {
        return this._checkUniform(TT), this._vectors2[TT] = UT, this
      }
      setVector3(TT, UT) {
        return this._checkUniform(TT), this._vectors3[TT] = UT, this
      }
      setVector4(TT, UT) {
        return this._checkUniform(TT), this._vectors4[TT] = UT, this
      }
      setQuaternion(TT, UT) {
        return this._checkUniform(TT), this._quaternions[TT] = UT, this
      }
      setQuaternionArray(TT, UT) {
        return this._checkUniform(TT), this._quaternionsArrays[TT] = UT.reduce(((TT, UT) => (UT.toArray(TT, TT.length), TT)), []), this
      }
      setMatrix(TT, UT) {
        return this._checkUniform(TT), this._matrices[TT] = UT, this
      }
      setMatrices(TT, UT) {
        this._checkUniform(TT);
        const mT = new Float32Array(16 * UT.length);
        for (let WT = 0; WT < UT.length; WT++) {
          UT[WT].copyToArray(mT, 16 * WT)
        }
        return this._matrixArrays[TT] = mT, this
      }
      setMatrix3x3(TT, UT) {
        return this._checkUniform(TT), this._matrices3x3[TT] = UT, this
      }
      setMatrix2x2(TT, UT) {
        return this._checkUniform(TT), this._matrices2x2[TT] = UT, this
      }
      setArray2(TT, UT) {
        return this._checkUniform(TT), this._vectors2Arrays[TT] = UT, this
      }
      setArray3(TT, UT) {
        return this._checkUniform(TT), this._vectors3Arrays[TT] = UT, this
      }
      setArray4(TT, UT) {
        return this._checkUniform(TT), this._vectors4Arrays[TT] = UT, this
      }
      setUniformBuffer(TT, UT) {
        return -1 === this._options.uniformBuffers.indexOf(TT) && this._options.uniformBuffers.push(TT), this._uniformBuffers[TT] = UT, this
      }
      setTextureSampler(TT, UT) {
        return -1 === this._options.samplerObjects.indexOf(TT) && this._options.samplerObjects.push(TT), this._textureSamplers[TT] = UT, this
      }
      setStorageBuffer(TT, UT) {
        return -1 === this._options.storageBuffers.indexOf(TT) && this._options.storageBuffers.push(TT), this._storageBuffers[TT] = UT, this
      }
      setDefine(TT, UT) {
        const mT = TT.trimEnd() + " ",
          WT = this.options.defines.findIndex((UT => UT === TT || UT.startsWith(mT)));
        return WT >= 0 && this.options.defines.splice(WT, 1), ("boolean" !== typeof UT || UT) && this.options.defines.push(mT + UT), this
      }
      isReadyForSubMesh(TT, UT, mT) {
        return this.isReady(TT, mT, UT)
      }
      isReady(TT, UT, mT) {
        const WT = mT && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const TT = WT ? mT._drawWrapper : this._drawWrapper;
          if (TT.effect && TT._wasPreviouslyReady && TT._wasPreviouslyUsingInstances === UT) return !0
        }
        const MT = this.KF(),
          nT = MT.eB(),
          kT = [],
          jT = [];
        let lT = null,
          ZT = this._shaderPath,
          vT = this._options.uniforms,
          fT = this._options.uniformBuffers,
          qT = this._options.samplers;
        nT.getCaps().multiview && MT.activeCamera && MT.activeCamera.outputRenderTarget && MT.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, kT.push("#define MULTIVIEW"), -1 !== vT.indexOf("viewProjection") && -1 === vT.indexOf("viewProjectionR") && vT.push("viewProjectionR"));
        for (let zT = 0; zT < this._options.defines.length; zT++) {
          const TT = 0 === this._options.defines[zT].indexOf("#define") ? this._options.defines[zT] : `#define ${this._options.defines[zT]}`;
          kT.push(TT)
        }
        for (let zT = 0; zT < this._options.attributes.length; zT++) jT.push(this._options.attributes[zT]);
        if (TT && TT.isVerticesDataPresent(gT.i.ColorKind) && (-1 === jT.indexOf(gT.i.ColorKind) && jT.push(gT.i.ColorKind), kT.push("#define VERTEXCOLOR")), UT && (kT.push("#define INSTANCES"), (0, pT.sb)(jT, this._materialHelperNeedsPreviousMatrices), TT?.hasThinInstances && (kT.push("#define THIN_INSTANCES"), TT && TT.isVerticesDataPresent(gT.i.ColorInstanceKind) && (jT.push(gT.i.ColorInstanceKind), kT.push("#define INSTANCESCOLOR")))), TT && TT.useBones && TT.computeBonesUsingShaders && TT.skeleton) {
          jT.push(gT.i.MatricesIndicesKind), jT.push(gT.i.MatricesWeightsKind), TT.numBoneInfluencers > 4 && (jT.push(gT.i.MatricesIndicesExtraKind), jT.push(gT.i.MatricesWeightsExtraKind));
          const UT = TT.skeleton;
          kT.push("#define NUM_BONE_INFLUENCERS " + TT.numBoneInfluencers), lT = new HT.c, lT.addCPUSkinningFallback(0, TT), UT.isUsingTextureForMatrices ? (kT.push("#define BONETEXTURE"), -1 === vT.indexOf("boneTextureInfo") && vT.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (kT.push("#define BonesPerMesh " + (UT.bones.length + 1)), -1 === vT.indexOf("mBones") && vT.push("mBones"))
        } else kT.push("#define NUM_BONE_INFLUENCERS 0");
        let iT = 0;
        const bT = TT ? TT.morphTargetManager : null;
        if (bT) {
          const UT = -1 !== kT.indexOf("#define UV1"),
            mT = -1 !== kT.indexOf("#define UV2"),
            WT = -1 !== kT.indexOf("#define TANGENT"),
            zT = -1 !== kT.indexOf("#define NORMAL"),
            MT = -1 !== kT.indexOf("#define VERTEXCOLOR");
          iT = (0, pT.L)(bT, kT, jT, TT, !0, zT, WT, UT, mT, MT), bT.isUsingTextureForTargets && (-1 === vT.indexOf("morphTargetTextureIndices") && vT.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), iT > 0 && (vT = vT.slice(), vT.push("morphTargetInfluences"), vT.push("morphTargetCount"), vT.push("morphTargetTextureInfo"), vT.push("morphTargetTextureIndices"))
        } else kT.push("#define NUM_MORPH_INFLUENCERS 0");
        if (TT) {
          const mT = TT.bakedVertexAnimationManager;
          mT && mT.isEnabled && (kT.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === vT.indexOf("bakedVertexAnimationSettings") && vT.push("bakedVertexAnimationSettings"), -1 === vT.indexOf("bakedVertexAnimationTextureSizeInverted") && vT.push("bakedVertexAnimationTextureSizeInverted"), -1 === vT.indexOf("bakedVertexAnimationTime") && vT.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), UT && jT.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const zT in this._textures)
          if (!this._textures[zT].isReady()) return !1;
        for (const zT in this._internalTextures)
          if (!this._internalTextures[zT].isReady) return !1;
        TT && this.needAlphaTestingForMesh(TT) && kT.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, LT.b)(vT), (0, LT.k)(this, MT, kT)), MT.fogEnabled && TT?.applyFog && MT.fogMode !== zT.i.FOGMODE_NONE && (kT.push("#define FOG"), -1 === vT.indexOf("view") && vT.push("view"), -1 === vT.indexOf("vFogInfos") && vT.push("vFogInfos"), -1 === vT.indexOf("vFogColor") && vT.push("vFogColor")), this._useLogarithmicDepth && (kT.push("#define LOGARITHMICDEPTH"), -1 === vT.indexOf("logarithmicDepthConstant") && vT.push("logarithmicDepthConstant"));
        const OT = mT ? mT.getRenderingMesh() : TT;
        if (OT && this.useVertexPulling) {
          const TT = OT.geometry;
          TT && (this._vertexPullingMetadata = (0, BT.f)(TT), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((TT, UT) => {
            vT.push(`vp_${UT}_info`)
          }))), kT.push("#define USE_VERTEX_PULLING");
          const UT = OT.geometry?.getIndexBuffer();
          UT && !OT.isUnIndexed && (kT.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), UT.is32Bits && kT.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (vT = vT.slice(), fT = fT.slice(), qT = qT.slice(), ZT = this.customShaderNameResolve(this.name, vT, fT, qT, kT, jT));
        const eT = WT ? mT._getDrawWrapper(void 0, !0) : this._drawWrapper,
          YT = eT?.effect ?? null,
          JT = eT?.defines ?? null,
          xT = kT.join("\n");
        let dT = YT;
        return JT !== xT && (dT = nT.createEffect(ZT, {
          attributes: jT,
          uniformsNames: vT,
          uniformBuffersNames: fT,
          samplers: qT,
          defines: xT,
          fallbacks: lT,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: iT
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, nT), WT ? mT.setEffect(dT, xT, this._materialContext) : eT && eT.setEffect(dT, xT), this._onEffectCreatedObservable && (cT.effect = dT, cT.subMesh = mT ?? TT?.rY[0] ?? null, this._onEffectCreatedObservable.notifyObservers(cT))), eT._wasPreviouslyUsingInstances = !!UT, !!dT?.isReady() && (YT !== dT && MT.resetCachedMaterial(), eT._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(TT, UT) {
        const mT = UT ?? this.getEffect();
        if (!mT) return;
        const WT = this._options.uniforms; - 1 !== WT.indexOf("world") && mT.setMatrix("world", TT);
        const zT = this.KF(); - 1 !== WT.indexOf("worldView") && (TT.multiplyToRef(zT.getViewMatrix(), this._cachedWorldViewMatrix), mT.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== WT.indexOf("worldViewProjection") && (TT.multiplyToRef(zT.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), mT.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== WT.indexOf("view") && mT.setMatrix("view", zT.getViewMatrix())
      }
      bindForSubMesh(TT, UT, mT) {
        this.bind(TT, UT, mT._drawWrapperOverride?.effect, mT)
      }
      bind(TT, UT, mT, WT) {
        const zT = WT && this._storeEffectOnSubMeshes,
          MT = mT ?? (zT ? WT.effect : this.getEffect());
        if (!MT) return;
        const gT = this.KF();
        this._activeEffect = MT, this.bindOnlyWorldMatrix(TT, mT);
        const nT = this._options.uniformBuffers;
        let HT = !1;
        if (MT && nT && nT.length > 0 && gT.eB().supportsUniformBuffers)
          for (let jT = 0; jT < nT.length; ++jT) {
            switch (nT[jT]) {
              case "Mesh":
                UT && (UT.getMeshUniformBuffer().bindToEffect(MT, "Mesh"), UT.transferToEffect(TT));
                break;
              case "Scene":
                (0, pT.v)(MT, gT.getSceneUniformBuffer()), gT.finalizeSceneUbo(), HT = !0
            }
          }
        const kT = UT && zT ? this._mustRebind(gT, MT, WT, UT.visibility) : gT.getCachedMaterial() !== this;
        if (MT && kT) {
          let TT;
          for (TT in HT || -1 === this._options.uniforms.indexOf("view") || MT.setMatrix("view", gT.getViewMatrix()), HT || -1 === this._options.uniforms.indexOf("projection") || MT.setMatrix("projection", gT.getProjectionMatrix()), HT || -1 === this._options.uniforms.indexOf("viewProjection") || (MT.setMatrix("viewProjection", gT.getTransformMatrix()), this._multiview && MT.setMatrix("viewProjectionR", gT._transformMatrixR)), gT.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && MT.setVector3("cameraPosition", gT.activeCamera.globalPosition), (0, pT.d)(UT, MT), (0, LT.c)(MT, this, gT), this._vertexPullingMetadata && (0, BT.c)(MT, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, pT.p)(zT ? WT.materialDefines : MT.defines, MT, gT), UT && (0, pT.f)(gT, UT, MT), this._textures) MT.setTexture(TT, this._textures[TT]);
          for (TT in this._internalTextures) MT._bindTexture(TT, this._internalTextures[TT]);
          for (TT in this._textureArrays) MT.setTextureArray(TT, this._textureArrays[TT]);
          for (TT in this._ints) MT.setInt(TT, this._ints[TT]);
          for (TT in this._uints) MT.setUInt(TT, this._uints[TT]);
          for (TT in this._floats) MT.setFloat(TT, this._floats[TT]);
          for (TT in this._floatsArrays) MT.setArray(TT, this._floatsArrays[TT]);
          for (TT in this._colors3) MT.setColor3(TT, this._colors3[TT]);
          for (TT in this._colors3Arrays) MT.setArray3(TT, this._colors3Arrays[TT]);
          for (TT in this._colors4) {
            const UT = this._colors4[TT];
            MT.setFloat4(TT, UT.r, UT.g, UT.b, UT.a)
          }
          for (TT in this._colors4Arrays) MT.setArray4(TT, this._colors4Arrays[TT]);
          for (TT in this._vectors2) MT.setVector2(TT, this._vectors2[TT]);
          for (TT in this._vectors3) MT.setVector3(TT, this._vectors3[TT]);
          for (TT in this._vectors4) MT.setVector4(TT, this._vectors4[TT]);
          for (TT in this._quaternions) MT.setQuaternion(TT, this._quaternions[TT]);
          for (TT in this._matrices) MT.setMatrix(TT, this._matrices[TT]);
          for (TT in this._matrixArrays) MT.setMatrices(TT, this._matrixArrays[TT]);
          for (TT in this._matrices3x3) MT.setMatrix3x3(TT, this._matrices3x3[TT]);
          for (TT in this._matrices2x2) MT.setMatrix2x2(TT, this._matrices2x2[TT]);
          for (TT in this._vectors2Arrays) MT.setArray2(TT, this._vectors2Arrays[TT]);
          for (TT in this._vectors3Arrays) MT.setArray3(TT, this._vectors3Arrays[TT]);
          for (TT in this._vectors4Arrays) MT.setArray4(TT, this._vectors4Arrays[TT]);
          for (TT in this._quaternionsArrays) MT.setArray4(TT, this._quaternionsArrays[TT]);
          for (TT in this._uniformBuffers) {
            const UT = this._uniformBuffers[TT].getBuffer();
            UT && MT.bindUniformBuffer(UT, TT)
          }
          const mT = gT.eB(),
            nT = mT.setExternalTexture;
          if (nT)
            for (TT in this._externalTextures) nT.call(mT, TT, this._externalTextures[TT]);
          const kT = mT.setTextureSampler;
          if (kT)
            for (TT in this._textureSamplers) kT.call(mT, TT, this._textureSamplers[TT]);
          const jT = mT.setStorageBuffer;
          if (jT)
            for (TT in this._storageBuffers) jT.call(mT, TT, this._storageBuffers[TT])
        }
        if (MT && UT && (kT || !this.isFrozen)) {
          (0, pT.s)(UT, MT), UT.morphTargetManager && UT.morphTargetManager.isUsingTextureForTargets && UT.morphTargetManager._bind(MT);
          const TT = UT.bakedVertexAnimationManager;
          if (TT && TT.isEnabled) {
            const TT = zT ? WT._drawWrapper : this._drawWrapper;
            UT.bakedVertexAnimationManager?.bind(MT, !!TT._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(UT, MT, WT)
      }
      getActiveTextures() {
        const TT = super.getActiveTextures();
        for (const UT in this._textures) TT.push(this._textures[UT]);
        for (const UT in this._textureArrays) {
          const mT = this._textureArrays[UT];
          for (let UT = 0; UT < mT.length; UT++) TT.push(mT[UT])
        }
        return TT
      }
      hasTexture(TT) {
        if (super.hasTexture(TT)) return !0;
        for (const mT in this._textures)
          if (this._textures[mT] === TT) return !0;
        const UT = TT.getInternalTexture();
        for (const mT in this._internalTextures)
          if (this._internalTextures[mT] === UT) return !0;
        for (const mT in this._textureArrays) {
          const UT = this._textureArrays[mT];
          for (let mT = 0; mT < UT.length; mT++)
            if (UT[mT] === TT) return !0
        }
        return !1
      }
      clone(TT) {
        const UT = WT.e.Clone((() => new vT(TT, this.KF(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        UT.name = TT, UT.id = TT, "object" === typeof UT._shaderPath && (UT._shaderPath = {
          ...UT._shaderPath
        }), this._options = {
          ...this._options
        };
        const mT = Object.keys(this._options);
        for (const WT of mT) {
          const TT = this._options[WT];
          Array.isArray(TT) && (this._options[WT] = TT.slice(0))
        }
        this.stencil.copyTo(UT.stencil);
        for (const WT in this._textures) UT.setTexture(WT, this._textures[WT]);
        for (const WT in this._internalTextures) UT.setInternalTexture(WT, this._internalTextures[WT]);
        for (const WT in this._textureArrays) UT.setTextureArray(WT, this._textureArrays[WT]);
        for (const WT in this._externalTextures) UT.setExternalTexture(WT, this._externalTextures[WT]);
        for (const WT in this._ints) UT.setInt(WT, this._ints[WT]);
        for (const WT in this._uints) UT.setUInt(WT, this._uints[WT]);
        for (const WT in this._floats) UT.setFloat(WT, this._floats[WT]);
        for (const WT in this._floatsArrays) UT.setFloats(WT, this._floatsArrays[WT]);
        for (const WT in this._colors3) UT.setColor3(WT, this._colors3[WT]);
        for (const WT in this._colors3Arrays) UT._colors3Arrays[WT] = this._colors3Arrays[WT];
        for (const WT in this._colors4) UT.setColor4(WT, this._colors4[WT]);
        for (const WT in this._colors4Arrays) UT._colors4Arrays[WT] = this._colors4Arrays[WT];
        for (const WT in this._vectors2) UT.setVector2(WT, this._vectors2[WT]);
        for (const WT in this._vectors3) UT.setVector3(WT, this._vectors3[WT]);
        for (const WT in this._vectors4) UT.setVector4(WT, this._vectors4[WT]);
        for (const WT in this._quaternions) UT.setQuaternion(WT, this._quaternions[WT]);
        for (const WT in this._quaternionsArrays) UT._quaternionsArrays[WT] = this._quaternionsArrays[WT];
        for (const WT in this._matrices) UT.setMatrix(WT, this._matrices[WT]);
        for (const WT in this._matrixArrays) UT._matrixArrays[WT] = this._matrixArrays[WT].slice();
        for (const WT in this._matrices3x3) UT.setMatrix3x3(WT, this._matrices3x3[WT]);
        for (const WT in this._matrices2x2) UT.setMatrix2x2(WT, this._matrices2x2[WT]);
        for (const WT in this._vectors2Arrays) UT.setArray2(WT, this._vectors2Arrays[WT]);
        for (const WT in this._vectors3Arrays) UT.setArray3(WT, this._vectors3Arrays[WT]);
        for (const WT in this._vectors4Arrays) UT.setArray4(WT, this._vectors4Arrays[WT]);
        for (const WT in this._uniformBuffers) UT.setUniformBuffer(WT, this._uniformBuffers[WT]);
        for (const WT in this._textureSamplers) UT.setTextureSampler(WT, this._textureSamplers[WT]);
        for (const WT in this._storageBuffers) UT.setStorageBuffer(WT, this._storageBuffers[WT]);
        return UT
      }
      dispose(TT, UT, mT) {
        if (UT) {
          let TT;
          for (TT in this._textures) this._textures[TT].dispose();
          for (TT in this._internalTextures) this._internalTextures[TT].dispose();
          for (TT in this._textureArrays) {
            const UT = this._textureArrays[TT];
            for (let TT = 0; TT < UT.length; TT++) UT[TT].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(TT, UT, mT)
      }
      serialize() {
        const TT = WT.e.Serialize(this);
        let UT;
        for (UT in TT.customType = "BABYLON.ShaderMaterial", TT.uniqueId = this.uniqueId, TT.options = this._options, TT.shaderPath = this._shaderPath, TT.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, TT.stencil = this.stencil.serialize(), TT.textures = {}, this._textures) TT.textures[UT] = this._textures[UT].serialize();
        for (UT in TT.textureArrays = {}, this._textureArrays) {
          TT.textureArrays[UT] = [];
          const mT = this._textureArrays[UT];
          for (let WT = 0; WT < mT.length; WT++) TT.textureArrays[UT].push(mT[WT].serialize())
        }
        for (UT in TT.ints = {}, this._ints) TT.ints[UT] = this._ints[UT];
        for (UT in TT.uints = {}, this._uints) TT.uints[UT] = this._uints[UT];
        for (UT in TT.floats = {}, this._floats) TT.floats[UT] = this._floats[UT];
        for (UT in TT.floatsArrays = {}, this._floatsArrays) TT.floatsArrays[UT] = this._floatsArrays[UT];
        for (UT in TT.colors3 = {}, this._colors3) {
          const mT = this._colors3[UT];
          TT.colors3[UT] = [mT.r, mT.g, mT.b]
        }
        for (UT in TT.colors3Arrays = {}, this._colors3Arrays) TT.colors3Arrays[UT] = this._colors3Arrays[UT];
        for (UT in TT.colors4 = {}, this._colors4) {
          const mT = this._colors4[UT];
          TT.colors4[UT] = [mT.r, mT.g, mT.b, mT.a]
        }
        for (UT in TT.colors4Arrays = {}, this._colors4Arrays) TT.colors4Arrays[UT] = this._colors4Arrays[UT];
        for (UT in TT.vectors2 = {}, this._vectors2) {
          const mT = this._vectors2[UT];
          TT.vectors2[UT] = [mT.x, mT.y]
        }
        for (UT in TT.vectors3 = {}, this._vectors3) {
          const mT = this._vectors3[UT];
          TT.vectors3[UT] = [mT.x, mT.y, mT.z]
        }
        for (UT in TT.vectors4 = {}, this._vectors4) {
          const mT = this._vectors4[UT];
          TT.vectors4[UT] = [mT.x, mT.y, mT.z, mT.w]
        }
        for (UT in TT.quaternions = {}, this._quaternions) TT.quaternions[UT] = this._quaternions[UT].cWT();
        for (UT in TT.matrices = {}, this._matrices) TT.matrices[UT] = this._matrices[UT].cWT();
        for (UT in TT.matrixArray = {}, this._matrixArrays) TT.matrixArray[UT] = this._matrixArrays[UT];
        for (UT in TT.matrices3x3 = {}, this._matrices3x3) TT.matrices3x3[UT] = this._matrices3x3[UT];
        for (UT in TT.matrices2x2 = {}, this._matrices2x2) TT.matrices2x2[UT] = this._matrices2x2[UT];
        for (UT in TT.vectors2Arrays = {}, this._vectors2Arrays) TT.vectors2Arrays[UT] = this._vectors2Arrays[UT];
        for (UT in TT.vectors3Arrays = {}, this._vectors3Arrays) TT.vectors3Arrays[UT] = this._vectors3Arrays[UT];
        for (UT in TT.vectors4Arrays = {}, this._vectors4Arrays) TT.vectors4Arrays[UT] = this._vectors4Arrays[UT];
        for (UT in TT.quaternionsArrays = {}, this._quaternionsArrays) TT.quaternionsArrays[UT] = this._quaternionsArrays[UT];
        return TT
      }
    }

    function fT(TT, UT, mT) {
      const zT = WT.e.Parse((() => new vT(TT.name, UT, TT.shaderPath, TT.options, TT.storeEffectOnSubMeshes)), TT, UT, mT);
      let gT;
      for (gT in TT.stencil && zT.stencil.parse(TT.stencil, UT, mT), TT.textures) zT.setTexture(gT, nT.g.Parse(TT.textures[gT], UT, mT));
      for (gT in TT.textureArrays) {
        const WT = TT.textureArrays[gT],
          MT = [];
        for (let TT = 0; TT < WT.length; TT++) MT.push(nT.g.Parse(WT[TT], UT, mT));
        zT.setTextureArray(gT, MT)
      }
      for (gT in TT.ints) zT.setInt(gT, TT.ints[gT]);
      for (gT in TT.uints) zT.setUInt(gT, TT.uints[gT]);
      for (gT in TT.floats) zT.setFloat(gT, TT.floats[gT]);
      for (gT in TT.floatsArrays) zT.setFloats(gT, TT.floatsArrays[gT]);
      for (gT in TT.colors3) {
        const UT = TT.colors3[gT];
        zT.setColor3(gT, {
          r: UT[0],
          g: UT[1],
          b: UT[2]
        })
      }
      for (gT in TT.colors3Arrays) {
        const UT = TT.colors3Arrays[gT].reduce(((TT, UT, mT) => (mT % 3 === 0 ? TT.push([UT]) : TT[TT.length - 1].push(UT), TT)), []).map((TT => ({
          r: TT[0],
          g: TT[1],
          b: TT[2]
        })));
        zT.setColor3Array(gT, UT)
      }
      for (gT in TT.colors4) {
        const UT = TT.colors4[gT];
        zT.setColor4(gT, {
          r: UT[0],
          g: UT[1],
          b: UT[2],
          a: UT[3]
        })
      }
      for (gT in TT.colors4Arrays) {
        const UT = TT.colors4Arrays[gT].reduce(((TT, UT, mT) => (mT % 4 === 0 ? TT.push([UT]) : TT[TT.length - 1].push(UT), TT)), []).map((TT => ({
          r: TT[0],
          g: TT[1],
          b: TT[2],
          a: TT[3]
        })));
        zT.setColor4Array(gT, UT)
      }
      for (gT in TT.vectors2) {
        const UT = TT.vectors2[gT];
        zT.setVector2(gT, {
          x: UT[0],
          y: UT[1]
        })
      }
      for (gT in TT.vectors3) {
        const UT = TT.vectors3[gT];
        zT.setVector3(gT, {
          x: UT[0],
          y: UT[1],
          z: UT[2]
        })
      }
      for (gT in TT.vectors4) {
        const UT = TT.vectors4[gT];
        zT.setVector4(gT, {
          x: UT[0],
          y: UT[1],
          z: UT[2],
          w: UT[3]
        })
      }
      for (gT in TT.quaternions) zT.setQuaternion(gT, MT.f.FromArray(TT.quaternions[gT]));
      for (gT in TT.matrices) zT.setMatrix(gT, MT.e.FromArray(TT.matrices[gT]));
      const HT = zT;
      for (gT in TT.matrixArray) HT._matrixArrays[gT] = new Float32Array(TT.matrixArray[gT]);
      for (gT in TT.matrices3x3) zT.setMatrix3x3(gT, TT.matrices3x3[gT]);
      for (gT in TT.matrices2x2) zT.setMatrix2x2(gT, TT.matrices2x2[gT]);
      for (gT in TT.vectors2Arrays) zT.setArray2(gT, TT.vectors2Arrays[gT]);
      for (gT in TT.vectors3Arrays) zT.setArray3(gT, TT.vectors3Arrays[gT]);
      for (gT in TT.vectors4Arrays) zT.setArray4(gT, TT.vectors4Arrays[gT]);
      for (gT in TT.quaternionsArrays) zT.setArray4(gT, TT.quaternionsArrays[gT]);
      return zT
    }
    async function qT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((zT, MT) => {
        const gT = new kT.b;
        gT.addEventListener("readystatechange", (() => {
          if (4 == gT.readyState)
            if (200 == gT.status) {
              const UT = fT(JSON.parse(gT.responseText), mT || lT.c.LastCreatedScene, WT);
              TT && (UT.name = TT), zT(UT)
            } else MT("Unable to load the ShaderMaterial")
        })), gT.open("GET", UT), gT.send()
      }))
    }
    async function iT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const WT = this?.SnippetUrl ?? vT.SnippetUrl;
      return await new Promise(((zT, MT) => {
        const gT = new kT.b;
        gT.addEventListener("readystatechange", (() => {
          if (4 == gT.readyState)
            if (200 == gT.status) {
              const WT = JSON.parse(JSON.parse(gT.responseText).jsonPayload),
                MT = fT(JSON.parse(WT.shaderMaterial), UT || lT.c.LastCreatedScene, mT);
              MT.snippetId = TT, zT(MT)
            } else MT("Unable to load the snippet " + TT)
        })), gT.open("GET", WT + "/" + TT.replace(/#/g, "/")), gT.send()
      }))
    }
    vT.SnippetUrl = "https://snippet.babylonjs.com";
    const bT = iT;
    let OT = !1;

    function eT() {
      OT || (OT = !0, vT.Parse = fT, vT.ParseFromFileAsync = qT, vT.ParseFromSnippetAsync = iT, vT.CreateFromSnippetAsync = bT, (0, ZT.h)("BABYLON.ShaderMaterial", vT))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);