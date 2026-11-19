export const id = 253;
export const ids = [253];
export const modules = {
  39262: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => eT,
      e: () => wT,
      h: () => gT,
      k: () => hT,
      o: () => AT,
      r: () => rT
    });
    var iT = IT(38799),
      zT = IT(38882),
      kT = IT(36118),
      WT = IT(38923),
      XT = IT(39270),
      BT = IT(39135),
      FT = IT(38835),
      ST = IT(39131),
      DT = IT(36146),
      LT = IT(39117),
      xT = IT(39113),
      cT = IT(39152),
      KT = IT(36166);
    const MT = {
      effect: null,
      subMesh: null
    };
    class rT extends ST.e {
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(TT, oT, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new kT.b, this._cachedWorldViewProjectionMatrix = new kT.b, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = IT, this._options = {
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
          ...iT
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
      setTexture(TT, oT) {
        return -1 === this._options.samplers.indexOf(TT) && this._options.samplers.push(TT), this._textures[TT] = oT, this
      }
      setInternalTexture(TT, oT) {
        return -1 === this._options.samplers.indexOf(TT) && this._options.samplers.push(TT), this._internalTextures[TT] = oT, this
      }
      removeTexture(TT) {
        delete this._textures[TT]
      }
      setTextureArray(TT, oT) {
        return -1 === this._options.samplers.indexOf(TT) && this._options.samplers.push(TT), this._checkUniform(TT), this._textureArrays[TT] = oT, this
      }
      setExternalTexture(TT, oT) {
        return -1 === this._options.externalTextures.indexOf(TT) && this._options.externalTextures.push(TT), this._externalTextures[TT] = oT, this
      }
      setFloat(TT, oT) {
        return this._checkUniform(TT), this._floats[TT] = oT, this
      }
      setInt(TT, oT) {
        return this._checkUniform(TT), this._ints[TT] = oT, this
      }
      setUInt(TT, oT) {
        return this._checkUniform(TT), this._uints[TT] = oT, this
      }
      setFloats(TT, oT) {
        return this._checkUniform(TT), this._floatsArrays[TT] = oT, this
      }
      setColor3(TT, oT) {
        return this._checkUniform(TT), this._colors3[TT] = oT, this
      }
      setColor3Array(TT, oT) {
        return this._checkUniform(TT), this._colors3Arrays[TT] = oT.reduce(((TT, oT) => (TT.push(oT.r, oT.g, oT.b), TT)), []), this
      }
      setColor4(TT, oT) {
        return this._checkUniform(TT), this._colors4[TT] = oT, this
      }
      setColor4Array(TT, oT) {
        return this._checkUniform(TT), this._colors4Arrays[TT] = oT.reduce(((TT, oT) => (TT.push(oT.r, oT.g, oT.b, oT.a), TT)), []), this
      }
      setVector2(TT, oT) {
        return this._checkUniform(TT), this._vectors2[TT] = oT, this
      }
      setVector3(TT, oT) {
        return this._checkUniform(TT), this._vectors3[TT] = oT, this
      }
      setVector4(TT, oT) {
        return this._checkUniform(TT), this._vectors4[TT] = oT, this
      }
      setQuaternion(TT, oT) {
        return this._checkUniform(TT), this._quaternions[TT] = oT, this
      }
      setQuaternionArray(TT, oT) {
        return this._checkUniform(TT), this._quaternionsArrays[TT] = oT.reduce(((TT, oT) => (oT.toArray(TT, TT.length), TT)), []), this
      }
      setMatrix(TT, oT) {
        return this._checkUniform(TT), this._matrices[TT] = oT, this
      }
      setMatrices(TT, oT) {
        this._checkUniform(TT);
        const IT = new Float32Array(16 * oT.length);
        for (let iT = 0; iT < oT.length; iT++) {
          oT[iT].copyToArray(IT, 16 * iT)
        }
        return this._matrixArrays[TT] = IT, this
      }
      setMatrix3x3(TT, oT) {
        return this._checkUniform(TT), this._matrices3x3[TT] = oT, this
      }
      setMatrix2x2(TT, oT) {
        return this._checkUniform(TT), this._matrices2x2[TT] = oT, this
      }
      setArray2(TT, oT) {
        return this._checkUniform(TT), this._vectors2Arrays[TT] = oT, this
      }
      setArray3(TT, oT) {
        return this._checkUniform(TT), this._vectors3Arrays[TT] = oT, this
      }
      setArray4(TT, oT) {
        return this._checkUniform(TT), this._vectors4Arrays[TT] = oT, this
      }
      setUniformBuffer(TT, oT) {
        return -1 === this._options.uniformBuffers.indexOf(TT) && this._options.uniformBuffers.push(TT), this._uniformBuffers[TT] = oT, this
      }
      setTextureSampler(TT, oT) {
        return -1 === this._options.samplerObjects.indexOf(TT) && this._options.samplerObjects.push(TT), this._textureSamplers[TT] = oT, this
      }
      setStorageBuffer(TT, oT) {
        return -1 === this._options.storageBuffers.indexOf(TT) && this._options.storageBuffers.push(TT), this._storageBuffers[TT] = oT, this
      }
      setDefine(TT, oT) {
        const IT = TT.trimEnd() + " ",
          iT = this.options.defines.findIndex((oT => oT === TT || oT.startsWith(IT)));
        return iT >= 0 && this.options.defines.splice(iT, 1), ("boolean" !== typeof oT || oT) && this.options.defines.push(IT + oT), this
      }
      isReadyForSubMesh(TT, oT, IT) {
        return this.isReady(TT, IT, oT)
      }
      isReady(TT, oT, IT) {
        const iT = IT && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const TT = iT ? IT._drawWrapper : this._drawWrapper;
          if (TT.effect && TT._wasPreviouslyReady && TT._wasPreviouslyUsingInstances === oT) return !0
        }
        const kT = this.pC(),
          XT = kT.Zc(),
          FT = [],
          ST = [];
        let DT = null,
          KT = this._shaderPath,
          rT = this._options.uniforms,
          AT = this._options.uniformBuffers,
          gT = this._options.samplers;
        XT.getCaps().multiview && kT.activeCamera && kT.activeCamera.outputRenderTarget && kT.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, FT.push("#define MULTIVIEW"), -1 !== rT.indexOf("viewProjection") && -1 === rT.indexOf("viewProjectionR") && rT.push("viewProjectionR"));
        for (let zT = 0; zT < this._options.defines.length; zT++) {
          const TT = 0 === this._options.defines[zT].indexOf("#define") ? this._options.defines[zT] : `#define ${this._options.defines[zT]}`;
          FT.push(TT)
        }
        for (let zT = 0; zT < this._options.attributes.length; zT++) ST.push(this._options.attributes[zT]);
        if (TT && TT.isVerticesDataPresent(WT.i.ColorKind) && (-1 === ST.indexOf(WT.i.ColorKind) && ST.push(WT.i.ColorKind), FT.push("#define VERTEXCOLOR")), oT && (FT.push("#define INSTANCES"), (0, xT.eb)(ST, this._materialHelperNeedsPreviousMatrices), TT?.hasThinInstances && (FT.push("#define THIN_INSTANCES"), TT && TT.isVerticesDataPresent(WT.i.ColorInstanceKind) && (ST.push(WT.i.ColorInstanceKind), FT.push("#define INSTANCESCOLOR")))), TT && TT.useBones && TT.computeBonesUsingShaders && TT.skeleton) {
          ST.push(WT.i.MatricesIndicesKind), ST.push(WT.i.MatricesWeightsKind), TT.numBoneInfluencers > 4 && (ST.push(WT.i.MatricesIndicesExtraKind), ST.push(WT.i.MatricesWeightsExtraKind));
          const oT = TT.skeleton;
          FT.push("#define NUM_BONE_INFLUENCERS " + TT.numBoneInfluencers), DT = new BT.e, DT.addCPUSkinningFallback(0, TT), oT.isUsingTextureForMatrices ? (FT.push("#define BONETEXTURE"), -1 === rT.indexOf("boneTextureInfo") && rT.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (FT.push("#define BonesPerMesh " + (oT.bones.length + 1)), -1 === rT.indexOf("mBones") && rT.push("mBones"))
        } else FT.push("#define NUM_BONE_INFLUENCERS 0");
        let hT = 0;
        const wT = TT ? TT.morphTargetManager : null;
        if (wT) {
          const oT = -1 !== FT.indexOf("#define UV1"),
            IT = -1 !== FT.indexOf("#define UV2"),
            iT = -1 !== FT.indexOf("#define TANGENT"),
            zT = -1 !== FT.indexOf("#define NORMAL"),
            kT = -1 !== FT.indexOf("#define VERTEXCOLOR");
          hT = (0, xT.G)(wT, FT, ST, TT, !0, zT, iT, oT, IT, kT), wT.isUsingTextureForTargets && (-1 === rT.indexOf("morphTargetTextureIndices") && rT.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), hT > 0 && (rT = rT.slice(), rT.push("morphTargetInfluences"), rT.push("morphTargetCount"), rT.push("morphTargetTextureInfo"), rT.push("morphTargetTextureIndices"))
        } else FT.push("#define NUM_MORPH_INFLUENCERS 0");
        if (TT) {
          const IT = TT.bakedVertexAnimationManager;
          IT && IT.isEnabled && (FT.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === rT.indexOf("bakedVertexAnimationSettings") && rT.push("bakedVertexAnimationSettings"), -1 === rT.indexOf("bakedVertexAnimationTextureSizeInverted") && rT.push("bakedVertexAnimationTextureSizeInverted"), -1 === rT.indexOf("bakedVertexAnimationTime") && rT.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), oT && ST.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const zT in this._textures)
          if (!this._textures[zT].isReady()) return !1;
        for (const zT in this._internalTextures)
          if (!this._internalTextures[zT].isReady) return !1;
        TT && this.needAlphaTestingForMesh(TT) && FT.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, LT.b)(rT), (0, LT.g)(this, kT, FT)), kT.fogEnabled && TT?.applyFog && kT.fogMode !== zT.d.FOGMODE_NONE && (FT.push("#define FOG"), -1 === rT.indexOf("view") && rT.push("view"), -1 === rT.indexOf("vFogInfos") && rT.push("vFogInfos"), -1 === rT.indexOf("vFogColor") && rT.push("vFogColor")), this._useLogarithmicDepth && (FT.push("#define LOGARITHMICDEPTH"), -1 === rT.indexOf("logarithmicDepthConstant") && rT.push("logarithmicDepthConstant"));
        const mT = IT ? IT.getRenderingMesh() : TT;
        if (mT && this.useVertexPulling) {
          const TT = mT.geometry;
          TT && (this._vertexPullingMetadata = (0, cT.d)(TT), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((TT, oT) => {
            rT.push(`vp_${oT}_info`)
          }))), FT.push("#define USE_VERTEX_PULLING");
          const oT = mT.geometry?.getIndexBuffer();
          oT && !mT.isUnIndexed && (FT.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), oT.is32Bits && FT.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (rT = rT.slice(), AT = AT.slice(), gT = gT.slice(), KT = this.customShaderNameResolve(this.name, rT, AT, gT, FT, ST));
        const eT = iT ? IT._getDrawWrapper(void 0, !0) : this._drawWrapper,
          RT = eT?.effect ?? null,
          uT = eT?.defines ?? null,
          vT = FT.join("\n");
        let ET = RT;
        return uT !== vT && (ET = XT.createEffect(KT, {
          attributes: ST,
          uniformsNames: rT,
          uniformBuffersNames: AT,
          samplers: gT,
          defines: vT,
          fallbacks: DT,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: hT
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, XT), iT ? IT.setEffect(ET, vT, this._materialContext) : eT && eT.setEffect(ET, vT), this._onEffectCreatedObservable && (MT.effect = ET, MT.subMesh = IT ?? TT?.pR[0] ?? null, this._onEffectCreatedObservable.notifyObservers(MT))), eT._wasPreviouslyUsingInstances = !!oT, !!ET?.isReady() && (RT !== ET && kT.resetCachedMaterial(), eT._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(TT, oT) {
        const IT = oT ?? this.getEffect();
        if (!IT) return;
        const iT = this._options.uniforms; - 1 !== iT.indexOf("world") && IT.setMatrix("world", TT);
        const zT = this.pC(); - 1 !== iT.indexOf("worldView") && (TT.multiplyToRef(zT.getViewMatrix(), this._cachedWorldViewMatrix), IT.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== iT.indexOf("worldViewProjection") && (TT.multiplyToRef(zT.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), IT.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== iT.indexOf("view") && IT.setMatrix("view", zT.getViewMatrix())
      }
      bindForSubMesh(TT, oT, IT) {
        this.bind(TT, oT, IT._drawWrapperOverride?.effect, IT)
      }
      bind(TT, oT, IT, iT) {
        const zT = iT && this._storeEffectOnSubMeshes,
          kT = IT ?? (zT ? iT.effect : this.getEffect());
        if (!kT) return;
        const WT = this.pC();
        this._activeEffect = kT, this.bindOnlyWorldMatrix(TT, IT);
        const XT = this._options.uniformBuffers;
        let BT = !1;
        if (kT && XT && XT.length > 0 && WT.Zc().supportsUniformBuffers)
          for (let ST = 0; ST < XT.length; ++ST) {
            switch (XT[ST]) {
              case "Mesh":
                oT && (oT.getMeshUniformBuffer().bindToEffect(kT, "Mesh"), oT.transferToEffect(TT));
                break;
              case "Scene":
                (0, xT.t)(kT, WT.getSceneUniformBuffer()), WT.finalizeSceneUbo(), BT = !0
            }
          }
        const FT = oT && zT ? this._mustRebind(WT, kT, iT, oT.visibility) : WT.getCachedMaterial() !== this;
        if (kT && FT) {
          let TT;
          for (TT in BT || -1 === this._options.uniforms.indexOf("view") || kT.setMatrix("view", WT.getViewMatrix()), BT || -1 === this._options.uniforms.indexOf("projection") || kT.setMatrix("projection", WT.getProjectionMatrix()), BT || -1 === this._options.uniforms.indexOf("viewProjection") || (kT.setMatrix("viewProjection", WT.getTransformMatrix()), this._multiview && kT.setMatrix("viewProjectionR", WT._transformMatrixR)), WT.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && kT.setVector3("cameraPosition", WT.activeCamera.globalPosition), (0, xT.d)(oT, kT), (0, LT.d)(kT, this, WT), this._vertexPullingMetadata && (0, cT.b)(kT, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, xT.q)(zT ? iT.materialDefines : kT.defines, kT, WT), oT && (0, xT.e)(WT, oT, kT), this._textures) kT.setTexture(TT, this._textures[TT]);
          for (TT in this._internalTextures) kT._bindTexture(TT, this._internalTextures[TT]);
          for (TT in this._textureArrays) kT.setTextureArray(TT, this._textureArrays[TT]);
          for (TT in this._ints) kT.setInt(TT, this._ints[TT]);
          for (TT in this._uints) kT.setUInt(TT, this._uints[TT]);
          for (TT in this._floats) kT.setFloat(TT, this._floats[TT]);
          for (TT in this._floatsArrays) kT.setArray(TT, this._floatsArrays[TT]);
          for (TT in this._colors3) kT.setColor3(TT, this._colors3[TT]);
          for (TT in this._colors3Arrays) kT.setArray3(TT, this._colors3Arrays[TT]);
          for (TT in this._colors4) {
            const oT = this._colors4[TT];
            kT.setFloat4(TT, oT.r, oT.g, oT.b, oT.a)
          }
          for (TT in this._colors4Arrays) kT.setArray4(TT, this._colors4Arrays[TT]);
          for (TT in this._vectors2) kT.setVector2(TT, this._vectors2[TT]);
          for (TT in this._vectors3) kT.setVector3(TT, this._vectors3[TT]);
          for (TT in this._vectors4) kT.setVector4(TT, this._vectors4[TT]);
          for (TT in this._quaternions) kT.setQuaternion(TT, this._quaternions[TT]);
          for (TT in this._matrices) kT.setMatrix(TT, this._matrices[TT]);
          for (TT in this._matrixArrays) kT.setMatrices(TT, this._matrixArrays[TT]);
          for (TT in this._matrices3x3) kT.setMatrix3x3(TT, this._matrices3x3[TT]);
          for (TT in this._matrices2x2) kT.setMatrix2x2(TT, this._matrices2x2[TT]);
          for (TT in this._vectors2Arrays) kT.setArray2(TT, this._vectors2Arrays[TT]);
          for (TT in this._vectors3Arrays) kT.setArray3(TT, this._vectors3Arrays[TT]);
          for (TT in this._vectors4Arrays) kT.setArray4(TT, this._vectors4Arrays[TT]);
          for (TT in this._quaternionsArrays) kT.setArray4(TT, this._quaternionsArrays[TT]);
          for (TT in this._uniformBuffers) {
            const oT = this._uniformBuffers[TT].getBuffer();
            oT && kT.bindUniformBuffer(oT, TT)
          }
          const IT = WT.Zc(),
            XT = IT.setExternalTexture;
          if (XT)
            for (TT in this._externalTextures) XT.call(IT, TT, this._externalTextures[TT]);
          const FT = IT.setTextureSampler;
          if (FT)
            for (TT in this._textureSamplers) FT.call(IT, TT, this._textureSamplers[TT]);
          const ST = IT.setStorageBuffer;
          if (ST)
            for (TT in this._storageBuffers) ST.call(IT, TT, this._storageBuffers[TT])
        }
        if (kT && oT && (FT || !this.isFrozen)) {
          (0, xT.r)(oT, kT), oT.morphTargetManager && oT.morphTargetManager.isUsingTextureForTargets && oT.morphTargetManager._bind(kT);
          const TT = oT.bakedVertexAnimationManager;
          if (TT && TT.isEnabled) {
            const TT = zT ? iT._drawWrapper : this._drawWrapper;
            oT.bakedVertexAnimationManager?.bind(kT, !!TT._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(oT, kT, iT)
      }
      getActiveTextures() {
        const TT = super.getActiveTextures();
        for (const oT in this._textures) TT.push(this._textures[oT]);
        for (const oT in this._textureArrays) {
          const IT = this._textureArrays[oT];
          for (let oT = 0; oT < IT.length; oT++) TT.push(IT[oT])
        }
        return TT
      }
      hasTexture(TT) {
        if (super.hasTexture(TT)) return !0;
        for (const IT in this._textures)
          if (this._textures[IT] === TT) return !0;
        const oT = TT.getInternalTexture();
        for (const IT in this._internalTextures)
          if (this._internalTextures[IT] === oT) return !0;
        for (const IT in this._textureArrays) {
          const oT = this._textureArrays[IT];
          for (let IT = 0; IT < oT.length; IT++)
            if (oT[IT] === TT) return !0
        }
        return !1
      }
      clone(TT) {
        const oT = iT.c.Clone((() => new rT(TT, this.pC(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        oT.name = TT, oT.id = TT, "object" === typeof oT._shaderPath && (oT._shaderPath = {
          ...oT._shaderPath
        }), this._options = {
          ...this._options
        };
        const IT = Object.keys(this._options);
        for (const iT of IT) {
          const TT = this._options[iT];
          Array.isArray(TT) && (this._options[iT] = TT.slice(0))
        }
        this.stencil.copyTo(oT.stencil);
        for (const iT in this._textures) oT.setTexture(iT, this._textures[iT]);
        for (const iT in this._internalTextures) oT.setInternalTexture(iT, this._internalTextures[iT]);
        for (const iT in this._textureArrays) oT.setTextureArray(iT, this._textureArrays[iT]);
        for (const iT in this._externalTextures) oT.setExternalTexture(iT, this._externalTextures[iT]);
        for (const iT in this._ints) oT.setInt(iT, this._ints[iT]);
        for (const iT in this._uints) oT.setUInt(iT, this._uints[iT]);
        for (const iT in this._floats) oT.setFloat(iT, this._floats[iT]);
        for (const iT in this._floatsArrays) oT.setFloats(iT, this._floatsArrays[iT]);
        for (const iT in this._colors3) oT.setColor3(iT, this._colors3[iT]);
        for (const iT in this._colors3Arrays) oT._colors3Arrays[iT] = this._colors3Arrays[iT];
        for (const iT in this._colors4) oT.setColor4(iT, this._colors4[iT]);
        for (const iT in this._colors4Arrays) oT._colors4Arrays[iT] = this._colors4Arrays[iT];
        for (const iT in this._vectors2) oT.setVector2(iT, this._vectors2[iT]);
        for (const iT in this._vectors3) oT.setVector3(iT, this._vectors3[iT]);
        for (const iT in this._vectors4) oT.setVector4(iT, this._vectors4[iT]);
        for (const iT in this._quaternions) oT.setQuaternion(iT, this._quaternions[iT]);
        for (const iT in this._quaternionsArrays) oT._quaternionsArrays[iT] = this._quaternionsArrays[iT];
        for (const iT in this._matrices) oT.setMatrix(iT, this._matrices[iT]);
        for (const iT in this._matrixArrays) oT._matrixArrays[iT] = this._matrixArrays[iT].slice();
        for (const iT in this._matrices3x3) oT.setMatrix3x3(iT, this._matrices3x3[iT]);
        for (const iT in this._matrices2x2) oT.setMatrix2x2(iT, this._matrices2x2[iT]);
        for (const iT in this._vectors2Arrays) oT.setArray2(iT, this._vectors2Arrays[iT]);
        for (const iT in this._vectors3Arrays) oT.setArray3(iT, this._vectors3Arrays[iT]);
        for (const iT in this._vectors4Arrays) oT.setArray4(iT, this._vectors4Arrays[iT]);
        for (const iT in this._uniformBuffers) oT.setUniformBuffer(iT, this._uniformBuffers[iT]);
        for (const iT in this._textureSamplers) oT.setTextureSampler(iT, this._textureSamplers[iT]);
        for (const iT in this._storageBuffers) oT.setStorageBuffer(iT, this._storageBuffers[iT]);
        return oT
      }
      dispose(TT, oT, IT) {
        if (oT) {
          let TT;
          for (TT in this._textures) this._textures[TT].dispose();
          for (TT in this._internalTextures) this._internalTextures[TT].dispose();
          for (TT in this._textureArrays) {
            const oT = this._textureArrays[TT];
            for (let TT = 0; TT < oT.length; TT++) oT[TT].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(TT, oT, IT)
      }
      serialize() {
        const TT = iT.c.Serialize(this);
        let oT;
        for (oT in TT.customType = "BABYLON.ShaderMaterial", TT.uniqueId = this.uniqueId, TT.options = this._options, TT.shaderPath = this._shaderPath, TT.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, TT.stencil = this.stencil.serialize(), TT.textures = {}, this._textures) TT.textures[oT] = this._textures[oT].serialize();
        for (oT in TT.textureArrays = {}, this._textureArrays) {
          TT.textureArrays[oT] = [];
          const IT = this._textureArrays[oT];
          for (let iT = 0; iT < IT.length; iT++) TT.textureArrays[oT].push(IT[iT].serialize())
        }
        for (oT in TT.ints = {}, this._ints) TT.ints[oT] = this._ints[oT];
        for (oT in TT.uints = {}, this._uints) TT.uints[oT] = this._uints[oT];
        for (oT in TT.floats = {}, this._floats) TT.floats[oT] = this._floats[oT];
        for (oT in TT.floatsArrays = {}, this._floatsArrays) TT.floatsArrays[oT] = this._floatsArrays[oT];
        for (oT in TT.colors3 = {}, this._colors3) {
          const IT = this._colors3[oT];
          TT.colors3[oT] = [IT.r, IT.g, IT.b]
        }
        for (oT in TT.colors3Arrays = {}, this._colors3Arrays) TT.colors3Arrays[oT] = this._colors3Arrays[oT];
        for (oT in TT.colors4 = {}, this._colors4) {
          const IT = this._colors4[oT];
          TT.colors4[oT] = [IT.r, IT.g, IT.b, IT.a]
        }
        for (oT in TT.colors4Arrays = {}, this._colors4Arrays) TT.colors4Arrays[oT] = this._colors4Arrays[oT];
        for (oT in TT.vectors2 = {}, this._vectors2) {
          const IT = this._vectors2[oT];
          TT.vectors2[oT] = [IT.x, IT.y]
        }
        for (oT in TT.vectors3 = {}, this._vectors3) {
          const IT = this._vectors3[oT];
          TT.vectors3[oT] = [IT.x, IT.y, IT.z]
        }
        for (oT in TT.vectors4 = {}, this._vectors4) {
          const IT = this._vectors4[oT];
          TT.vectors4[oT] = [IT.x, IT.y, IT.z, IT.w]
        }
        for (oT in TT.quaternions = {}, this._quaternions) TT.quaternions[oT] = this._quaternions[oT].bIT();
        for (oT in TT.matrices = {}, this._matrices) TT.matrices[oT] = this._matrices[oT].bIT();
        for (oT in TT.matrixArray = {}, this._matrixArrays) TT.matrixArray[oT] = this._matrixArrays[oT];
        for (oT in TT.matrices3x3 = {}, this._matrices3x3) TT.matrices3x3[oT] = this._matrices3x3[oT];
        for (oT in TT.matrices2x2 = {}, this._matrices2x2) TT.matrices2x2[oT] = this._matrices2x2[oT];
        for (oT in TT.vectors2Arrays = {}, this._vectors2Arrays) TT.vectors2Arrays[oT] = this._vectors2Arrays[oT];
        for (oT in TT.vectors3Arrays = {}, this._vectors3Arrays) TT.vectors3Arrays[oT] = this._vectors3Arrays[oT];
        for (oT in TT.vectors4Arrays = {}, this._vectors4Arrays) TT.vectors4Arrays[oT] = this._vectors4Arrays[oT];
        for (oT in TT.quaternionsArrays = {}, this._quaternionsArrays) TT.quaternionsArrays[oT] = this._quaternionsArrays[oT];
        return TT
      }
    }

    function AT(TT, oT, IT) {
      const zT = iT.c.Parse((() => new rT(TT.name, oT, TT.shaderPath, TT.options, TT.storeEffectOnSubMeshes)), TT, oT, IT);
      let WT;
      for (WT in TT.stencil && zT.stencil.parse(TT.stencil, oT, IT), TT.textures) zT.setTexture(WT, XT.g.Parse(TT.textures[WT], oT, IT));
      for (WT in TT.textureArrays) {
        const iT = TT.textureArrays[WT],
          kT = [];
        for (let TT = 0; TT < iT.length; TT++) kT.push(XT.g.Parse(iT[TT], oT, IT));
        zT.setTextureArray(WT, kT)
      }
      for (WT in TT.ints) zT.setInt(WT, TT.ints[WT]);
      for (WT in TT.uints) zT.setUInt(WT, TT.uints[WT]);
      for (WT in TT.floats) zT.setFloat(WT, TT.floats[WT]);
      for (WT in TT.floatsArrays) zT.setFloats(WT, TT.floatsArrays[WT]);
      for (WT in TT.colors3) {
        const oT = TT.colors3[WT];
        zT.setColor3(WT, {
          r: oT[0],
          g: oT[1],
          b: oT[2]
        })
      }
      for (WT in TT.colors3Arrays) {
        const oT = TT.colors3Arrays[WT].reduce(((TT, oT, IT) => (IT % 3 === 0 ? TT.push([oT]) : TT[TT.length - 1].push(oT), TT)), []).map((TT => ({
          r: TT[0],
          g: TT[1],
          b: TT[2]
        })));
        zT.setColor3Array(WT, oT)
      }
      for (WT in TT.colors4) {
        const oT = TT.colors4[WT];
        zT.setColor4(WT, {
          r: oT[0],
          g: oT[1],
          b: oT[2],
          a: oT[3]
        })
      }
      for (WT in TT.colors4Arrays) {
        const oT = TT.colors4Arrays[WT].reduce(((TT, oT, IT) => (IT % 4 === 0 ? TT.push([oT]) : TT[TT.length - 1].push(oT), TT)), []).map((TT => ({
          r: TT[0],
          g: TT[1],
          b: TT[2],
          a: TT[3]
        })));
        zT.setColor4Array(WT, oT)
      }
      for (WT in TT.vectors2) {
        const oT = TT.vectors2[WT];
        zT.setVector2(WT, {
          x: oT[0],
          y: oT[1]
        })
      }
      for (WT in TT.vectors3) {
        const oT = TT.vectors3[WT];
        zT.setVector3(WT, {
          x: oT[0],
          y: oT[1],
          z: oT[2]
        })
      }
      for (WT in TT.vectors4) {
        const oT = TT.vectors4[WT];
        zT.setVector4(WT, {
          x: oT[0],
          y: oT[1],
          z: oT[2],
          w: oT[3]
        })
      }
      for (WT in TT.quaternions) zT.setQuaternion(WT, kT.c.FromArray(TT.quaternions[WT]));
      for (WT in TT.matrices) zT.setMatrix(WT, kT.b.FromArray(TT.matrices[WT]));
      const BT = zT;
      for (WT in TT.matrixArray) BT._matrixArrays[WT] = new Float32Array(TT.matrixArray[WT]);
      for (WT in TT.matrices3x3) zT.setMatrix3x3(WT, TT.matrices3x3[WT]);
      for (WT in TT.matrices2x2) zT.setMatrix2x2(WT, TT.matrices2x2[WT]);
      for (WT in TT.vectors2Arrays) zT.setArray2(WT, TT.vectors2Arrays[WT]);
      for (WT in TT.vectors3Arrays) zT.setArray3(WT, TT.vectors3Arrays[WT]);
      for (WT in TT.vectors4Arrays) zT.setArray4(WT, TT.vectors4Arrays[WT]);
      for (WT in TT.quaternionsArrays) zT.setArray4(WT, TT.quaternionsArrays[WT]);
      return zT
    }
    async function gT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((zT, kT) => {
        const WT = new FT.b;
        WT.addEventListener("readystatechange", (() => {
          if (4 == WT.readyState)
            if (200 == WT.status) {
              const oT = AT(JSON.parse(WT.responseText), IT || DT.d.LastCreatedScene, iT);
              TT && (oT.name = TT), zT(oT)
            } else kT("Unable to load the ShaderMaterial")
        })), WT.open("GET", oT), WT.send()
      }))
    }
    async function hT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const iT = this?.SnippetUrl ?? rT.SnippetUrl;
      return await new Promise(((zT, kT) => {
        const WT = new FT.b;
        WT.addEventListener("readystatechange", (() => {
          if (4 == WT.readyState)
            if (200 == WT.status) {
              const iT = JSON.parse(JSON.parse(WT.responseText).jsonPayload),
                kT = AT(JSON.parse(iT.shaderMaterial), oT || DT.d.LastCreatedScene, IT);
              kT.snippetId = TT, zT(kT)
            } else kT("Unable to load the snippet " + TT)
        })), WT.open("GET", iT + "/" + TT.replace(/#/g, "/")), WT.send()
      }))
    }
    rT.SnippetUrl = "https://snippet.babylonjs.com";
    const wT = hT;
    let mT = !1;

    function eT() {
      mT || (mT = !0, rT.Parse = AT, rT.ParseFromFileAsync = gT, rT.ParseFromSnippetAsync = hT, rT.CreateFromSnippetAsync = wT, (0, KT.h)("BABYLON.ShaderMaterial", rT))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);