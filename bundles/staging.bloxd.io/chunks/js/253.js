export const id = 253;
export const ids = [253];
export const modules = {
  39587: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => TY,
      h: () => SY,
      l: () => mY,
      p: () => VY,
      q: () => EY,
      t: () => WY
    });
    var FY = DY(39144),
      AY = DY(39217),
      IY = DY(36524),
      RY = DY(39270),
      OY = DY(39596),
      gY = DY(39472),
      aY = DY(39169),
      vY = DY(39465),
      uY = DY(36546),
      sY = DY(39448),
      iY = DY(39444),
      yY = DY(39486),
      QY = DY(36569);
    const oY = {
      effect: null,
      subMesh: null
    };
    class WY extends vY.e {
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(YY, rY, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new IY.e, this._cachedWorldViewProjectionMatrix = new IY.e, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = DY, this._options = {
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
          ...FY
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(YY) {
        this._shaderPath = YY
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
      _checkUniform(YY) {
        -1 === this._options.uniforms.indexOf(YY) && this._options.uniforms.push(YY)
      }
      setTexture(YY, rY) {
        return -1 === this._options.samplers.indexOf(YY) && this._options.samplers.push(YY), this._textures[YY] = rY, this
      }
      setInternalTexture(YY, rY) {
        return -1 === this._options.samplers.indexOf(YY) && this._options.samplers.push(YY), this._internalTextures[YY] = rY, this
      }
      removeTexture(YY) {
        delete this._textures[YY]
      }
      setTextureArray(YY, rY) {
        return -1 === this._options.samplers.indexOf(YY) && this._options.samplers.push(YY), this._checkUniform(YY), this._textureArrays[YY] = rY, this
      }
      setExternalTexture(YY, rY) {
        return -1 === this._options.externalTextures.indexOf(YY) && this._options.externalTextures.push(YY), this._externalTextures[YY] = rY, this
      }
      setFloat(YY, rY) {
        return this._checkUniform(YY), this._floats[YY] = rY, this
      }
      setInt(YY, rY) {
        return this._checkUniform(YY), this._ints[YY] = rY, this
      }
      setUInt(YY, rY) {
        return this._checkUniform(YY), this._uints[YY] = rY, this
      }
      setFloats(YY, rY) {
        return this._checkUniform(YY), this._floatsArrays[YY] = rY, this
      }
      setColor3(YY, rY) {
        return this._checkUniform(YY), this._colors3[YY] = rY, this
      }
      setColor3Array(YY, rY) {
        return this._checkUniform(YY), this._colors3Arrays[YY] = rY.reduce(((YY, rY) => (YY.push(rY.r, rY.g, rY.b), YY)), []), this
      }
      setColor4(YY, rY) {
        return this._checkUniform(YY), this._colors4[YY] = rY, this
      }
      setColor4Array(YY, rY) {
        return this._checkUniform(YY), this._colors4Arrays[YY] = rY.reduce(((YY, rY) => (YY.push(rY.r, rY.g, rY.b, rY.a), YY)), []), this
      }
      setVector2(YY, rY) {
        return this._checkUniform(YY), this._vectors2[YY] = rY, this
      }
      setVector3(YY, rY) {
        return this._checkUniform(YY), this._vectors3[YY] = rY, this
      }
      setVector4(YY, rY) {
        return this._checkUniform(YY), this._vectors4[YY] = rY, this
      }
      setQuaternion(YY, rY) {
        return this._checkUniform(YY), this._quaternions[YY] = rY, this
      }
      setQuaternionArray(YY, rY) {
        return this._checkUniform(YY), this._quaternionsArrays[YY] = rY.reduce(((YY, rY) => (rY.toArray(YY, YY.length), YY)), []), this
      }
      setMatrix(YY, rY) {
        return this._checkUniform(YY), this._matrices[YY] = rY, this
      }
      setMatrices(YY, rY) {
        this._checkUniform(YY);
        const DY = new Float32Array(16 * rY.length);
        for (let FY = 0; FY < rY.length; FY++) {
          rY[FY].copyToArray(DY, 16 * FY)
        }
        return this._matrixArrays[YY] = DY, this
      }
      setMatrix3x3(YY, rY) {
        return this._checkUniform(YY), this._matrices3x3[YY] = rY, this
      }
      setMatrix2x2(YY, rY) {
        return this._checkUniform(YY), this._matrices2x2[YY] = rY, this
      }
      setArray2(YY, rY) {
        return this._checkUniform(YY), this._vectors2Arrays[YY] = rY, this
      }
      setArray3(YY, rY) {
        return this._checkUniform(YY), this._vectors3Arrays[YY] = rY, this
      }
      setArray4(YY, rY) {
        return this._checkUniform(YY), this._vectors4Arrays[YY] = rY, this
      }
      setUniformBuffer(YY, rY) {
        return -1 === this._options.uniformBuffers.indexOf(YY) && this._options.uniformBuffers.push(YY), this._uniformBuffers[YY] = rY, this
      }
      setTextureSampler(YY, rY) {
        return -1 === this._options.samplerObjects.indexOf(YY) && this._options.samplerObjects.push(YY), this._textureSamplers[YY] = rY, this
      }
      setStorageBuffer(YY, rY) {
        return -1 === this._options.storageBuffers.indexOf(YY) && this._options.storageBuffers.push(YY), this._storageBuffers[YY] = rY, this
      }
      setDefine(YY, rY) {
        const DY = YY.trimEnd() + " ",
          FY = this.options.defines.findIndex((rY => rY === YY || rY.startsWith(DY)));
        return FY >= 0 && this.options.defines.splice(FY, 1), ("boolean" !== typeof rY || rY) && this.options.defines.push(DY + rY), this
      }
      isReadyForSubMesh(YY, rY, DY) {
        return this.isReady(YY, DY, rY)
      }
      isReady(YY, rY, DY) {
        const FY = DY && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const YY = FY ? DY._drawWrapper : this._drawWrapper;
          if (YY.effect && YY._wasPreviouslyReady && YY._wasPreviouslyUsingInstances === rY) return !0
        }
        const IY = this.hT(),
          OY = IY.ky(),
          aY = [],
          vY = [];
        let uY = null,
          QY = this._shaderPath,
          WY = this._options.uniforms,
          EY = this._options.uniformBuffers,
          mY = this._options.samplers;
        OY.getCaps().multiview && IY.activeCamera && IY.activeCamera.outputRenderTarget && IY.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, aY.push("#define MULTIVIEW"), -1 !== WY.indexOf("viewProjection") && -1 === WY.indexOf("viewProjectionR") && WY.push("viewProjectionR"));
        for (let AY = 0; AY < this._options.defines.length; AY++) {
          const YY = 0 === this._options.defines[AY].indexOf("#define") ? this._options.defines[AY] : `#define ${this._options.defines[AY]}`;
          aY.push(YY)
        }
        for (let AY = 0; AY < this._options.attributes.length; AY++) vY.push(this._options.attributes[AY]);
        if (YY && YY.isVerticesDataPresent(RY.l.ColorKind) && (-1 === vY.indexOf(RY.l.ColorKind) && vY.push(RY.l.ColorKind), aY.push("#define VERTEXCOLOR")), rY && (aY.push("#define INSTANCES"), (0, iY.tb)(vY, this._materialHelperNeedsPreviousMatrices), YY?.hasThinInstances && (aY.push("#define THIN_INSTANCES"), YY && YY.isVerticesDataPresent(RY.l.ColorInstanceKind) && (vY.push(RY.l.ColorInstanceKind), aY.push("#define INSTANCESCOLOR")))), YY && YY.useBones && YY.computeBonesUsingShaders && YY.skeleton) {
          vY.push(RY.l.MatricesIndicesKind), vY.push(RY.l.MatricesWeightsKind), YY.numBoneInfluencers > 4 && (vY.push(RY.l.MatricesIndicesExtraKind), vY.push(RY.l.MatricesWeightsExtraKind));
          const rY = YY.skeleton;
          aY.push("#define NUM_BONE_INFLUENCERS " + YY.numBoneInfluencers), uY = new gY.e, uY.addCPUSkinningFallback(0, YY), rY.isUsingTextureForMatrices ? (aY.push("#define BONETEXTURE"), -1 === WY.indexOf("boneTextureInfo") && WY.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (aY.push("#define BonesPerMesh " + (rY.bones.length + 1)), -1 === WY.indexOf("mBones") && WY.push("mBones"))
        } else aY.push("#define NUM_BONE_INFLUENCERS 0");
        let VY = 0;
        const SY = YY ? YY.morphTargetManager : null;
        if (SY) {
          const rY = -1 !== aY.indexOf("#define UV1"),
            DY = -1 !== aY.indexOf("#define UV2"),
            FY = -1 !== aY.indexOf("#define TANGENT"),
            AY = -1 !== aY.indexOf("#define NORMAL"),
            IY = -1 !== aY.indexOf("#define VERTEXCOLOR");
          VY = (0, iY.U)(SY, aY, vY, YY, !0, AY, FY, rY, DY, IY), SY.isUsingTextureForTargets && (-1 === WY.indexOf("morphTargetTextureIndices") && WY.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), VY > 0 && (WY = WY.slice(), WY.push("morphTargetInfluences"), WY.push("morphTargetCount"), WY.push("morphTargetTextureInfo"), WY.push("morphTargetTextureIndices"))
        } else aY.push("#define NUM_MORPH_INFLUENCERS 0");
        if (YY) {
          const DY = YY.bakedVertexAnimationManager;
          DY && DY.isEnabled && (aY.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === WY.indexOf("bakedVertexAnimationSettings") && WY.push("bakedVertexAnimationSettings"), -1 === WY.indexOf("bakedVertexAnimationTextureSizeInverted") && WY.push("bakedVertexAnimationTextureSizeInverted"), -1 === WY.indexOf("bakedVertexAnimationTime") && WY.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), rY && vY.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const AY in this._textures)
          if (!this._textures[AY].isReady()) return !1;
        for (const AY in this._internalTextures)
          if (!this._internalTextures[AY].isReady) return !1;
        YY && this.needAlphaTestingForMesh(YY) && aY.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, sY.b)(WY), (0, sY.e)(this, IY, aY)), IY.fogEnabled && YY?.applyFog && IY.fogMode !== AY.g.FOGMODE_NONE && (aY.push("#define FOG"), -1 === WY.indexOf("view") && WY.push("view"), -1 === WY.indexOf("vFogInfos") && WY.push("vFogInfos"), -1 === WY.indexOf("vFogColor") && WY.push("vFogColor")), this._useLogarithmicDepth && (aY.push("#define LOGARITHMICDEPTH"), -1 === WY.indexOf("logarithmicDepthConstant") && WY.push("logarithmicDepthConstant"));
        const lY = DY ? DY.getRenderingMesh() : YY;
        if (lY && this.useVertexPulling) {
          const YY = lY.geometry;
          YY && (this._vertexPullingMetadata = (0, yY.c)(YY), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((YY, rY) => {
            WY.push(`vp_${rY}_info`)
          }))), aY.push("#define USE_VERTEX_PULLING");
          const rY = lY.geometry?.getIndexBuffer();
          rY && !lY.isUnIndexed && (aY.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), rY.is32Bits && aY.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (WY = WY.slice(), EY = EY.slice(), mY = mY.slice(), QY = this.customShaderNameResolve(this.name, WY, EY, mY, aY, vY));
        const TY = FY ? DY._getDrawWrapper(void 0, !0) : this._drawWrapper,
          eY = TY?.effect ?? null,
          NY = TY?.defines ?? null,
          BY = aY.join("\n");
        let cY = eY;
        return NY !== BY && (cY = OY.createEffect(QY, {
          attributes: vY,
          uniformsNames: WY,
          uniformBuffersNames: EY,
          samplers: mY,
          defines: BY,
          fallbacks: uY,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: VY
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, OY), FY ? DY.setEffect(cY, BY, this._materialContext) : TY && TY.setEffect(cY, BY), this._onEffectCreatedObservable && (oY.effect = cY, oY.subMesh = DY ?? YY?.qm[0] ?? null, this._onEffectCreatedObservable.notifyObservers(oY))), TY._wasPreviouslyUsingInstances = !!rY, !!cY?.isReady() && (eY !== cY && IY.resetCachedMaterial(), TY._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(YY, rY) {
        const DY = rY ?? this.getEffect();
        if (!DY) return;
        const FY = this._options.uniforms; - 1 !== FY.indexOf("world") && DY.setMatrix("world", YY);
        const AY = this.hT(); - 1 !== FY.indexOf("worldView") && (YY.multiplyToRef(AY.getViewMatrix(), this._cachedWorldViewMatrix), DY.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== FY.indexOf("worldViewProjection") && (YY.multiplyToRef(AY.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), DY.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== FY.indexOf("view") && DY.setMatrix("view", AY.getViewMatrix())
      }
      bindForSubMesh(YY, rY, DY) {
        this.bind(YY, rY, DY._drawWrapperOverride?.effect, DY)
      }
      bind(YY, rY, DY, FY) {
        const AY = FY && this._storeEffectOnSubMeshes,
          IY = DY ?? (AY ? FY.effect : this.getEffect());
        if (!IY) return;
        const RY = this.hT();
        this._activeEffect = IY, this.bindOnlyWorldMatrix(YY, DY);
        const OY = this._options.uniformBuffers;
        let gY = !1;
        if (IY && OY && OY.length > 0 && RY.ky().supportsUniformBuffers)
          for (let vY = 0; vY < OY.length; ++vY) {
            switch (OY[vY]) {
              case "Mesh":
                rY && (rY.getMeshUniformBuffer().bindToEffect(IY, "Mesh"), rY.transferToEffect(YY));
                break;
              case "Scene":
                (0, iY.x)(IY, RY.getSceneUniformBuffer()), RY.finalizeSceneUbo(), gY = !0
            }
          }
        const aY = rY && AY ? this._mustRebind(RY, IY, FY, rY.visibility) : RY.getCachedMaterial() !== this;
        if (IY && aY) {
          let YY;
          for (YY in gY || -1 === this._options.uniforms.indexOf("view") || IY.setMatrix("view", RY.getViewMatrix()), gY || -1 === this._options.uniforms.indexOf("projection") || IY.setMatrix("projection", RY.getProjectionMatrix()), gY || -1 === this._options.uniforms.indexOf("viewProjection") || (IY.setMatrix("viewProjection", RY.getTransformMatrix()), this._multiview && IY.setMatrix("viewProjectionR", RY._transformMatrixR)), RY.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && IY.setVector3("cameraPosition", RY.activeCamera.globalPosition), (0, iY.c)(rY, IY), (0, sY.c)(IY, this, RY), this._vertexPullingMetadata && (0, yY.b)(IY, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, iY.r)(AY ? FY.materialDefines : IY.defines, IY, RY), rY && (0, iY.f)(RY, rY, IY), this._textures) IY.setTexture(YY, this._textures[YY]);
          for (YY in this._internalTextures) IY._bindTexture(YY, this._internalTextures[YY]);
          for (YY in this._textureArrays) IY.setTextureArray(YY, this._textureArrays[YY]);
          for (YY in this._ints) IY.setInt(YY, this._ints[YY]);
          for (YY in this._uints) IY.setUInt(YY, this._uints[YY]);
          for (YY in this._floats) IY.setFloat(YY, this._floats[YY]);
          for (YY in this._floatsArrays) IY.setArray(YY, this._floatsArrays[YY]);
          for (YY in this._colors3) IY.setColor3(YY, this._colors3[YY]);
          for (YY in this._colors3Arrays) IY.setArray3(YY, this._colors3Arrays[YY]);
          for (YY in this._colors4) {
            const rY = this._colors4[YY];
            IY.setFloat4(YY, rY.r, rY.g, rY.b, rY.a)
          }
          for (YY in this._colors4Arrays) IY.setArray4(YY, this._colors4Arrays[YY]);
          for (YY in this._vectors2) IY.setVector2(YY, this._vectors2[YY]);
          for (YY in this._vectors3) IY.setVector3(YY, this._vectors3[YY]);
          for (YY in this._vectors4) IY.setVector4(YY, this._vectors4[YY]);
          for (YY in this._quaternions) IY.setQuaternion(YY, this._quaternions[YY]);
          for (YY in this._matrices) IY.setMatrix(YY, this._matrices[YY]);
          for (YY in this._matrixArrays) IY.setMatrices(YY, this._matrixArrays[YY]);
          for (YY in this._matrices3x3) IY.setMatrix3x3(YY, this._matrices3x3[YY]);
          for (YY in this._matrices2x2) IY.setMatrix2x2(YY, this._matrices2x2[YY]);
          for (YY in this._vectors2Arrays) IY.setArray2(YY, this._vectors2Arrays[YY]);
          for (YY in this._vectors3Arrays) IY.setArray3(YY, this._vectors3Arrays[YY]);
          for (YY in this._vectors4Arrays) IY.setArray4(YY, this._vectors4Arrays[YY]);
          for (YY in this._quaternionsArrays) IY.setArray4(YY, this._quaternionsArrays[YY]);
          for (YY in this._uniformBuffers) {
            const rY = this._uniformBuffers[YY].getBuffer();
            rY && IY.bindUniformBuffer(rY, YY)
          }
          const DY = RY.ky(),
            OY = DY.setExternalTexture;
          if (OY)
            for (YY in this._externalTextures) OY.call(DY, YY, this._externalTextures[YY]);
          const aY = DY.setTextureSampler;
          if (aY)
            for (YY in this._textureSamplers) aY.call(DY, YY, this._textureSamplers[YY]);
          const vY = DY.setStorageBuffer;
          if (vY)
            for (YY in this._storageBuffers) vY.call(DY, YY, this._storageBuffers[YY])
        }
        if (IY && rY && (aY || !this.isFrozen)) {
          (0, iY.v)(rY, IY), rY.morphTargetManager && rY.morphTargetManager.isUsingTextureForTargets && rY.morphTargetManager._bind(IY);
          const YY = rY.bakedVertexAnimationManager;
          if (YY && YY.isEnabled) {
            const YY = AY ? FY._drawWrapper : this._drawWrapper;
            rY.bakedVertexAnimationManager?.bind(IY, !!YY._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(rY, IY, FY)
      }
      getActiveTextures() {
        const YY = super.getActiveTextures();
        for (const rY in this._textures) YY.push(this._textures[rY]);
        for (const rY in this._textureArrays) {
          const DY = this._textureArrays[rY];
          for (let rY = 0; rY < DY.length; rY++) YY.push(DY[rY])
        }
        return YY
      }
      hasTexture(YY) {
        if (super.hasTexture(YY)) return !0;
        for (const DY in this._textures)
          if (this._textures[DY] === YY) return !0;
        const rY = YY.getInternalTexture();
        for (const DY in this._internalTextures)
          if (this._internalTextures[DY] === rY) return !0;
        for (const DY in this._textureArrays) {
          const rY = this._textureArrays[DY];
          for (let DY = 0; DY < rY.length; DY++)
            if (rY[DY] === YY) return !0
        }
        return !1
      }
      clone(YY) {
        const rY = FY.b.Clone((() => new WY(YY, this.hT(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        rY.name = YY, rY.id = YY, "object" === typeof rY._shaderPath && (rY._shaderPath = {
          ...rY._shaderPath
        }), this._options = {
          ...this._options
        };
        const DY = Object.keys(this._options);
        for (const FY of DY) {
          const YY = this._options[FY];
          Array.isArray(YY) && (this._options[FY] = YY.slice(0))
        }
        this.stencil.copyTo(rY.stencil);
        for (const FY in this._textures) rY.setTexture(FY, this._textures[FY]);
        for (const FY in this._internalTextures) rY.setInternalTexture(FY, this._internalTextures[FY]);
        for (const FY in this._textureArrays) rY.setTextureArray(FY, this._textureArrays[FY]);
        for (const FY in this._externalTextures) rY.setExternalTexture(FY, this._externalTextures[FY]);
        for (const FY in this._ints) rY.setInt(FY, this._ints[FY]);
        for (const FY in this._uints) rY.setUInt(FY, this._uints[FY]);
        for (const FY in this._floats) rY.setFloat(FY, this._floats[FY]);
        for (const FY in this._floatsArrays) rY.setFloats(FY, this._floatsArrays[FY]);
        for (const FY in this._colors3) rY.setColor3(FY, this._colors3[FY]);
        for (const FY in this._colors3Arrays) rY._colors3Arrays[FY] = this._colors3Arrays[FY];
        for (const FY in this._colors4) rY.setColor4(FY, this._colors4[FY]);
        for (const FY in this._colors4Arrays) rY._colors4Arrays[FY] = this._colors4Arrays[FY];
        for (const FY in this._vectors2) rY.setVector2(FY, this._vectors2[FY]);
        for (const FY in this._vectors3) rY.setVector3(FY, this._vectors3[FY]);
        for (const FY in this._vectors4) rY.setVector4(FY, this._vectors4[FY]);
        for (const FY in this._quaternions) rY.setQuaternion(FY, this._quaternions[FY]);
        for (const FY in this._quaternionsArrays) rY._quaternionsArrays[FY] = this._quaternionsArrays[FY];
        for (const FY in this._matrices) rY.setMatrix(FY, this._matrices[FY]);
        for (const FY in this._matrixArrays) rY._matrixArrays[FY] = this._matrixArrays[FY].slice();
        for (const FY in this._matrices3x3) rY.setMatrix3x3(FY, this._matrices3x3[FY]);
        for (const FY in this._matrices2x2) rY.setMatrix2x2(FY, this._matrices2x2[FY]);
        for (const FY in this._vectors2Arrays) rY.setArray2(FY, this._vectors2Arrays[FY]);
        for (const FY in this._vectors3Arrays) rY.setArray3(FY, this._vectors3Arrays[FY]);
        for (const FY in this._vectors4Arrays) rY.setArray4(FY, this._vectors4Arrays[FY]);
        for (const FY in this._uniformBuffers) rY.setUniformBuffer(FY, this._uniformBuffers[FY]);
        for (const FY in this._textureSamplers) rY.setTextureSampler(FY, this._textureSamplers[FY]);
        for (const FY in this._storageBuffers) rY.setStorageBuffer(FY, this._storageBuffers[FY]);
        return rY
      }
      dispose(YY, rY, DY) {
        if (rY) {
          let YY;
          for (YY in this._textures) this._textures[YY].dispose();
          for (YY in this._internalTextures) this._internalTextures[YY].dispose();
          for (YY in this._textureArrays) {
            const rY = this._textureArrays[YY];
            for (let YY = 0; YY < rY.length; YY++) rY[YY].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(YY, rY, DY)
      }
      serialize() {
        const YY = FY.b.Serialize(this);
        let rY;
        for (rY in YY.customType = "BABYLON.ShaderMaterial", YY.uniqueId = this.uniqueId, YY.options = this._options, YY.shaderPath = this._shaderPath, YY.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, YY.stencil = this.stencil.serialize(), YY.textures = {}, this._textures) YY.textures[rY] = this._textures[rY].serialize();
        for (rY in YY.textureArrays = {}, this._textureArrays) {
          YY.textureArrays[rY] = [];
          const DY = this._textureArrays[rY];
          for (let FY = 0; FY < DY.length; FY++) YY.textureArrays[rY].push(DY[FY].serialize())
        }
        for (rY in YY.ints = {}, this._ints) YY.ints[rY] = this._ints[rY];
        for (rY in YY.uints = {}, this._uints) YY.uints[rY] = this._uints[rY];
        for (rY in YY.floats = {}, this._floats) YY.floats[rY] = this._floats[rY];
        for (rY in YY.floatsArrays = {}, this._floatsArrays) YY.floatsArrays[rY] = this._floatsArrays[rY];
        for (rY in YY.colors3 = {}, this._colors3) {
          const DY = this._colors3[rY];
          YY.colors3[rY] = [DY.r, DY.g, DY.b]
        }
        for (rY in YY.colors3Arrays = {}, this._colors3Arrays) YY.colors3Arrays[rY] = this._colors3Arrays[rY];
        for (rY in YY.colors4 = {}, this._colors4) {
          const DY = this._colors4[rY];
          YY.colors4[rY] = [DY.r, DY.g, DY.b, DY.a]
        }
        for (rY in YY.colors4Arrays = {}, this._colors4Arrays) YY.colors4Arrays[rY] = this._colors4Arrays[rY];
        for (rY in YY.vectors2 = {}, this._vectors2) {
          const DY = this._vectors2[rY];
          YY.vectors2[rY] = [DY.x, DY.y]
        }
        for (rY in YY.vectors3 = {}, this._vectors3) {
          const DY = this._vectors3[rY];
          YY.vectors3[rY] = [DY.x, DY.y, DY.z]
        }
        for (rY in YY.vectors4 = {}, this._vectors4) {
          const DY = this._vectors4[rY];
          YY.vectors4[rY] = [DY.x, DY.y, DY.z, DY.w]
        }
        for (rY in YY.quaternions = {}, this._quaternions) YY.quaternions[rY] = this._quaternions[rY].VDY();
        for (rY in YY.matrices = {}, this._matrices) YY.matrices[rY] = this._matrices[rY].VDY();
        for (rY in YY.matrixArray = {}, this._matrixArrays) YY.matrixArray[rY] = this._matrixArrays[rY];
        for (rY in YY.matrices3x3 = {}, this._matrices3x3) YY.matrices3x3[rY] = this._matrices3x3[rY];
        for (rY in YY.matrices2x2 = {}, this._matrices2x2) YY.matrices2x2[rY] = this._matrices2x2[rY];
        for (rY in YY.vectors2Arrays = {}, this._vectors2Arrays) YY.vectors2Arrays[rY] = this._vectors2Arrays[rY];
        for (rY in YY.vectors3Arrays = {}, this._vectors3Arrays) YY.vectors3Arrays[rY] = this._vectors3Arrays[rY];
        for (rY in YY.vectors4Arrays = {}, this._vectors4Arrays) YY.vectors4Arrays[rY] = this._vectors4Arrays[rY];
        for (rY in YY.quaternionsArrays = {}, this._quaternionsArrays) YY.quaternionsArrays[rY] = this._quaternionsArrays[rY];
        return YY
      }
    }

    function EY(YY, rY, DY) {
      const AY = FY.b.Parse((() => new WY(YY.name, rY, YY.shaderPath, YY.options, YY.storeEffectOnSubMeshes)), YY, rY, DY);
      let RY;
      for (RY in YY.stencil && AY.stencil.parse(YY.stencil, rY, DY), YY.textures) AY.setTexture(RY, OY.i.Parse(YY.textures[RY], rY, DY));
      for (RY in YY.textureArrays) {
        const FY = YY.textureArrays[RY],
          IY = [];
        for (let YY = 0; YY < FY.length; YY++) IY.push(OY.i.Parse(FY[YY], rY, DY));
        AY.setTextureArray(RY, IY)
      }
      for (RY in YY.ints) AY.setInt(RY, YY.ints[RY]);
      for (RY in YY.uints) AY.setUInt(RY, YY.uints[RY]);
      for (RY in YY.floats) AY.setFloat(RY, YY.floats[RY]);
      for (RY in YY.floatsArrays) AY.setFloats(RY, YY.floatsArrays[RY]);
      for (RY in YY.colors3) {
        const rY = YY.colors3[RY];
        AY.setColor3(RY, {
          r: rY[0],
          g: rY[1],
          b: rY[2]
        })
      }
      for (RY in YY.colors3Arrays) {
        const rY = YY.colors3Arrays[RY].reduce(((YY, rY, DY) => (DY % 3 === 0 ? YY.push([rY]) : YY[YY.length - 1].push(rY), YY)), []).map((YY => ({
          r: YY[0],
          g: YY[1],
          b: YY[2]
        })));
        AY.setColor3Array(RY, rY)
      }
      for (RY in YY.colors4) {
        const rY = YY.colors4[RY];
        AY.setColor4(RY, {
          r: rY[0],
          g: rY[1],
          b: rY[2],
          a: rY[3]
        })
      }
      for (RY in YY.colors4Arrays) {
        const rY = YY.colors4Arrays[RY].reduce(((YY, rY, DY) => (DY % 4 === 0 ? YY.push([rY]) : YY[YY.length - 1].push(rY), YY)), []).map((YY => ({
          r: YY[0],
          g: YY[1],
          b: YY[2],
          a: YY[3]
        })));
        AY.setColor4Array(RY, rY)
      }
      for (RY in YY.vectors2) {
        const rY = YY.vectors2[RY];
        AY.setVector2(RY, {
          x: rY[0],
          y: rY[1]
        })
      }
      for (RY in YY.vectors3) {
        const rY = YY.vectors3[RY];
        AY.setVector3(RY, {
          x: rY[0],
          y: rY[1],
          z: rY[2]
        })
      }
      for (RY in YY.vectors4) {
        const rY = YY.vectors4[RY];
        AY.setVector4(RY, {
          x: rY[0],
          y: rY[1],
          z: rY[2],
          w: rY[3]
        })
      }
      for (RY in YY.quaternions) AY.setQuaternion(RY, IY.g.FromArray(YY.quaternions[RY]));
      for (RY in YY.matrices) AY.setMatrix(RY, IY.e.FromArray(YY.matrices[RY]));
      const gY = AY;
      for (RY in YY.matrixArray) gY._matrixArrays[RY] = new Float32Array(YY.matrixArray[RY]);
      for (RY in YY.matrices3x3) AY.setMatrix3x3(RY, YY.matrices3x3[RY]);
      for (RY in YY.matrices2x2) AY.setMatrix2x2(RY, YY.matrices2x2[RY]);
      for (RY in YY.vectors2Arrays) AY.setArray2(RY, YY.vectors2Arrays[RY]);
      for (RY in YY.vectors3Arrays) AY.setArray3(RY, YY.vectors3Arrays[RY]);
      for (RY in YY.vectors4Arrays) AY.setArray4(RY, YY.vectors4Arrays[RY]);
      for (RY in YY.quaternionsArrays) AY.setArray4(RY, YY.quaternionsArrays[RY]);
      return AY
    }
    async function mY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((AY, IY) => {
        const RY = new aY.d;
        RY.addEventListener("readystatechange", (() => {
          if (4 == RY.readyState)
            if (200 == RY.status) {
              const rY = EY(JSON.parse(RY.responseText), DY || uY.d.LastCreatedScene, FY);
              YY && (rY.name = YY), AY(rY)
            } else IY("Unable to load the ShaderMaterial")
        })), RY.open("GET", rY), RY.send()
      }))
    }
    async function VY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const FY = this?.SnippetUrl ?? WY.SnippetUrl;
      return await new Promise(((AY, IY) => {
        const RY = new aY.d;
        RY.addEventListener("readystatechange", (() => {
          if (4 == RY.readyState)
            if (200 == RY.status) {
              const FY = JSON.parse(JSON.parse(RY.responseText).jsonPayload),
                IY = EY(JSON.parse(FY.shaderMaterial), rY || uY.d.LastCreatedScene, DY);
              IY.snippetId = YY, AY(IY)
            } else IY("Unable to load the snippet " + YY)
        })), RY.open("GET", FY + "/" + YY.replace(/#/g, "/")), RY.send()
      }))
    }
    WY.SnippetUrl = "https://snippet.babylonjs.com";
    const SY = VY;
    let lY = !1;

    function TY() {
      lY || (lY = !0, WY.Parse = EY, WY.ParseFromFileAsync = mY, WY.ParseFromSnippetAsync = VY, WY.CreateFromSnippetAsync = SY, (0, QY.i)("BABYLON.ShaderMaterial", WY))
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);