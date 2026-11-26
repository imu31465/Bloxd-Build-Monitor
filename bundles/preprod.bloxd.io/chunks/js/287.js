export const id = 287;
export const ids = [287];
export const modules = {
  41549: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => PU,
      h: () => ZU,
      i: () => GU,
      k: () => BU,
      n: () => kU,
      o: () => gU
    });
    var cU = zU(41134),
      yU = zU(41202),
      QU = zU(37819),
      AU = zU(41237),
      FU = zU(41557),
      oU = zU(41422),
      DU = zU(41160),
      EU = zU(41415),
      YU = zU(37841),
      NU = zU(41406),
      IU = zU(41400),
      pU = zU(41438),
      aU = zU(37863);
    const tU = {
      effect: null,
      subMesh: null
    };
    class gU extends EU.d {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(UU, XU, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new QU.e, this._cachedWorldViewProjectionMatrix = new QU.e, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = zU, this._options = {
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
          ...cU
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(UU) {
        this._shaderPath = UU
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
      _checkUniform(UU) {
        -1 === this._options.uniforms.indexOf(UU) && this._options.uniforms.push(UU)
      }
      setTexture(UU, XU) {
        return -1 === this._options.samplers.indexOf(UU) && this._options.samplers.push(UU), this._textures[UU] = XU, this
      }
      setInternalTexture(UU, XU) {
        return -1 === this._options.samplers.indexOf(UU) && this._options.samplers.push(UU), this._internalTextures[UU] = XU, this
      }
      removeTexture(UU) {
        delete this._textures[UU]
      }
      setTextureArray(UU, XU) {
        return -1 === this._options.samplers.indexOf(UU) && this._options.samplers.push(UU), this._checkUniform(UU), this._textureArrays[UU] = XU, this
      }
      setExternalTexture(UU, XU) {
        return -1 === this._options.externalTextures.indexOf(UU) && this._options.externalTextures.push(UU), this._externalTextures[UU] = XU, this
      }
      setFloat(UU, XU) {
        return this._checkUniform(UU), this._floats[UU] = XU, this
      }
      setInt(UU, XU) {
        return this._checkUniform(UU), this._ints[UU] = XU, this
      }
      setUInt(UU, XU) {
        return this._checkUniform(UU), this._uints[UU] = XU, this
      }
      setFloats(UU, XU) {
        return this._checkUniform(UU), this._floatsArrays[UU] = XU, this
      }
      setColor3(UU, XU) {
        return this._checkUniform(UU), this._colors3[UU] = XU, this
      }
      setColor3Array(UU, XU) {
        return this._checkUniform(UU), this._colors3Arrays[UU] = XU.reduce(((UU, XU) => (UU.push(XU.r, XU.g, XU.b), UU)), []), this
      }
      setColor4(UU, XU) {
        return this._checkUniform(UU), this._colors4[UU] = XU, this
      }
      setColor4Array(UU, XU) {
        return this._checkUniform(UU), this._colors4Arrays[UU] = XU.reduce(((UU, XU) => (UU.push(XU.r, XU.g, XU.b, XU.a), UU)), []), this
      }
      setVector2(UU, XU) {
        return this._checkUniform(UU), this._vectors2[UU] = XU, this
      }
      setVector3(UU, XU) {
        return this._checkUniform(UU), this._vectors3[UU] = XU, this
      }
      setVector4(UU, XU) {
        return this._checkUniform(UU), this._vectors4[UU] = XU, this
      }
      setQuaternion(UU, XU) {
        return this._checkUniform(UU), this._quaternions[UU] = XU, this
      }
      setQuaternionArray(UU, XU) {
        return this._checkUniform(UU), this._quaternionsArrays[UU] = XU.reduce(((UU, XU) => (XU.toArray(UU, UU.length), UU)), []), this
      }
      setMatrix(UU, XU) {
        return this._checkUniform(UU), this._matrices[UU] = XU, this
      }
      setMatrices(UU, XU) {
        this._checkUniform(UU);
        const zU = new Float32Array(16 * XU.length);
        for (let cU = 0; cU < XU.length; cU++) {
          XU[cU].copyToArray(zU, 16 * cU)
        }
        return this._matrixArrays[UU] = zU, this
      }
      setMatrix3x3(UU, XU) {
        return this._checkUniform(UU), this._matrices3x3[UU] = XU, this
      }
      setMatrix2x2(UU, XU) {
        return this._checkUniform(UU), this._matrices2x2[UU] = XU, this
      }
      setArray2(UU, XU) {
        return this._checkUniform(UU), this._vectors2Arrays[UU] = XU, this
      }
      setArray3(UU, XU) {
        return this._checkUniform(UU), this._vectors3Arrays[UU] = XU, this
      }
      setArray4(UU, XU) {
        return this._checkUniform(UU), this._vectors4Arrays[UU] = XU, this
      }
      setUniformBuffer(UU, XU) {
        return -1 === this._options.uniformBuffers.indexOf(UU) && this._options.uniformBuffers.push(UU), this._uniformBuffers[UU] = XU, this
      }
      setTextureSampler(UU, XU) {
        return -1 === this._options.samplerObjects.indexOf(UU) && this._options.samplerObjects.push(UU), this._textureSamplers[UU] = XU, this
      }
      setStorageBuffer(UU, XU) {
        return -1 === this._options.storageBuffers.indexOf(UU) && this._options.storageBuffers.push(UU), this._storageBuffers[UU] = XU, this
      }
      setDefine(UU, XU) {
        const zU = UU.trimEnd() + " ",
          cU = this.options.defines.findIndex((XU => XU === UU || XU.startsWith(zU)));
        return cU >= 0 && this.options.defines.splice(cU, 1), ("boolean" !== typeof XU || XU) && this.options.defines.push(zU + XU), this
      }
      isReadyForSubMesh(UU, XU, zU) {
        return this.isReady(UU, zU, XU)
      }
      isReady(UU, XU, zU) {
        const cU = zU && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const UU = cU ? zU._drawWrapper : this._drawWrapper;
          if (UU.effect && UU._wasPreviouslyReady && UU._wasPreviouslyUsingInstances === XU) return !0
        }
        const QU = this.nS(),
          FU = QU.qp(),
          DU = [],
          EU = [];
        let YU = null,
          aU = this._shaderPath,
          gU = this._options.uniforms,
          kU = this._options.uniformBuffers,
          GU = this._options.samplers;
        FU.getCaps().multiview && QU.activeCamera && QU.activeCamera.outputRenderTarget && QU.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, DU.push("#define MULTIVIEW"), -1 !== gU.indexOf("viewProjection") && -1 === gU.indexOf("viewProjectionR") && gU.push("viewProjectionR"));
        for (let yU = 0; yU < this._options.defines.length; yU++) {
          const UU = 0 === this._options.defines[yU].indexOf("#define") ? this._options.defines[yU] : `#define ${this._options.defines[yU]}`;
          DU.push(UU)
        }
        for (let yU = 0; yU < this._options.attributes.length; yU++) EU.push(this._options.attributes[yU]);
        if (UU && UU.isVerticesDataPresent(AU.h.ColorKind) && (-1 === EU.indexOf(AU.h.ColorKind) && EU.push(AU.h.ColorKind), DU.push("#define VERTEXCOLOR")), XU && (DU.push("#define INSTANCES"), (0, IU.nb)(EU, this._materialHelperNeedsPreviousMatrices), UU?.hasThinInstances && (DU.push("#define THIN_INSTANCES"), UU && UU.isVerticesDataPresent(AU.h.ColorInstanceKind) && (EU.push(AU.h.ColorInstanceKind), DU.push("#define INSTANCESCOLOR")))), UU && UU.useBones && UU.computeBonesUsingShaders && UU.skeleton) {
          EU.push(AU.h.MatricesIndicesKind), EU.push(AU.h.MatricesWeightsKind), UU.numBoneInfluencers > 4 && (EU.push(AU.h.MatricesIndicesExtraKind), EU.push(AU.h.MatricesWeightsExtraKind));
          const XU = UU.skeleton;
          DU.push("#define NUM_BONE_INFLUENCERS " + UU.numBoneInfluencers), YU = new oU.d, YU.addCPUSkinningFallback(0, UU), XU.isUsingTextureForMatrices ? (DU.push("#define BONETEXTURE"), -1 === gU.indexOf("boneTextureInfo") && gU.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (DU.push("#define BonesPerMesh " + (XU.bones.length + 1)), -1 === gU.indexOf("mBones") && gU.push("mBones"))
        } else DU.push("#define NUM_BONE_INFLUENCERS 0");
        let BU = 0;
        const ZU = UU ? UU.morphTargetManager : null;
        if (ZU) {
          const XU = -1 !== DU.indexOf("#define UV1"),
            zU = -1 !== DU.indexOf("#define UV2"),
            cU = -1 !== DU.indexOf("#define TANGENT"),
            yU = -1 !== DU.indexOf("#define NORMAL"),
            QU = -1 !== DU.indexOf("#define VERTEXCOLOR");
          BU = (0, IU.O)(ZU, DU, EU, UU, !0, yU, cU, XU, zU, QU), ZU.isUsingTextureForTargets && (-1 === gU.indexOf("morphTargetTextureIndices") && gU.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), BU > 0 && (gU = gU.slice(), gU.push("morphTargetInfluences"), gU.push("morphTargetCount"), gU.push("morphTargetTextureInfo"), gU.push("morphTargetTextureIndices"))
        } else DU.push("#define NUM_MORPH_INFLUENCERS 0");
        if (UU) {
          const zU = UU.bakedVertexAnimationManager;
          zU && zU.isEnabled && (DU.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === gU.indexOf("bakedVertexAnimationSettings") && gU.push("bakedVertexAnimationSettings"), -1 === gU.indexOf("bakedVertexAnimationTextureSizeInverted") && gU.push("bakedVertexAnimationTextureSizeInverted"), -1 === gU.indexOf("bakedVertexAnimationTime") && gU.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), XU && EU.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const yU in this._textures)
          if (!this._textures[yU].isReady()) return !1;
        for (const yU in this._internalTextures)
          if (!this._internalTextures[yU].isReady) return !1;
        UU && this.needAlphaTestingForMesh(UU) && DU.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, NU.c)(gU), (0, NU.m)(this, QU, DU)), QU.fogEnabled && UU?.applyFog && QU.fogMode !== yU.d.FOGMODE_NONE && (DU.push("#define FOG"), -1 === gU.indexOf("view") && gU.push("view"), -1 === gU.indexOf("vFogInfos") && gU.push("vFogInfos"), -1 === gU.indexOf("vFogColor") && gU.push("vFogColor")), this._useLogarithmicDepth && (DU.push("#define LOGARITHMICDEPTH"), -1 === gU.indexOf("logarithmicDepthConstant") && gU.push("logarithmicDepthConstant"));
        const RU = zU ? zU.getRenderingMesh() : UU;
        if (RU && this.useVertexPulling) {
          const UU = RU.geometry;
          UU && (this._vertexPullingMetadata = (0, pU.f)(UU), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((UU, XU) => {
            gU.push(`vp_${XU}_info`)
          }))), DU.push("#define USE_VERTEX_PULLING");
          const XU = RU.geometry?.getIndexBuffer();
          XU && !RU.isUnIndexed && (DU.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), XU.is32Bits && DU.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (gU = gU.slice(), kU = kU.slice(), GU = GU.slice(), aU = this.customShaderNameResolve(this.name, gU, kU, GU, DU, EU));
        const PU = cU ? zU._getDrawWrapper(void 0, !0) : this._drawWrapper,
          WU = PU?.effect ?? null,
          dU = PU?.defines ?? null,
          LU = DU.join("\n");
        let eU = WU;
        return dU !== LU && (eU = FU.createEffect(aU, {
          attributes: EU,
          uniformsNames: gU,
          uniformBuffersNames: kU,
          samplers: GU,
          defines: LU,
          fallbacks: YU,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: BU
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, FU), cU ? zU.setEffect(eU, LU, this._materialContext) : PU && PU.setEffect(eU, LU), this._onEffectCreatedObservable && (tU.effect = eU, tU.subMesh = zU ?? UU?.uB[0] ?? null, this._onEffectCreatedObservable.notifyObservers(tU))), PU._wasPreviouslyUsingInstances = !!XU, !!eU?.isReady() && (WU !== eU && QU.resetCachedMaterial(), PU._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(UU, XU) {
        const zU = XU ?? this.getEffect();
        if (!zU) return;
        const cU = this._options.uniforms; - 1 !== cU.indexOf("world") && zU.setMatrix("world", UU);
        const yU = this.nS(); - 1 !== cU.indexOf("worldView") && (UU.multiplyToRef(yU.getViewMatrix(), this._cachedWorldViewMatrix), zU.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== cU.indexOf("worldViewProjection") && (UU.multiplyToRef(yU.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), zU.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== cU.indexOf("view") && zU.setMatrix("view", yU.getViewMatrix())
      }
      bindForSubMesh(UU, XU, zU) {
        this.bind(UU, XU, zU._drawWrapperOverride?.effect, zU)
      }
      bind(UU, XU, zU, cU) {
        const yU = cU && this._storeEffectOnSubMeshes,
          QU = zU ?? (yU ? cU.effect : this.getEffect());
        if (!QU) return;
        const AU = this.nS();
        this._activeEffect = QU, this.bindOnlyWorldMatrix(UU, zU);
        const FU = this._options.uniformBuffers;
        let oU = !1;
        if (QU && FU && FU.length > 0 && AU.qp().supportsUniformBuffers)
          for (let EU = 0; EU < FU.length; ++EU) {
            switch (FU[EU]) {
              case "Mesh":
                XU && (XU.getMeshUniformBuffer().bindToEffect(QU, "Mesh"), XU.transferToEffect(UU));
                break;
              case "Scene":
                (0, IU.x)(QU, AU.getSceneUniformBuffer()), AU.finalizeSceneUbo(), oU = !0
            }
          }
        const DU = XU && yU ? this._mustRebind(AU, QU, cU, XU.visibility) : AU.getCachedMaterial() !== this;
        if (QU && DU) {
          let UU;
          for (UU in oU || -1 === this._options.uniforms.indexOf("view") || QU.setMatrix("view", AU.getViewMatrix()), oU || -1 === this._options.uniforms.indexOf("projection") || QU.setMatrix("projection", AU.getProjectionMatrix()), oU || -1 === this._options.uniforms.indexOf("viewProjection") || (QU.setMatrix("viewProjection", AU.getTransformMatrix()), this._multiview && QU.setMatrix("viewProjectionR", AU._transformMatrixR)), AU.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && QU.setVector3("cameraPosition", AU.activeCamera.globalPosition), (0, IU.h)(XU, QU), (0, NU.e)(QU, this, AU), this._vertexPullingMetadata && (0, pU.c)(QU, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, IU.t)(yU ? cU.materialDefines : QU.defines, QU, AU), XU && (0, IU.i)(AU, XU, QU), this._textures) QU.setTexture(UU, this._textures[UU]);
          for (UU in this._internalTextures) QU._bindTexture(UU, this._internalTextures[UU]);
          for (UU in this._textureArrays) QU.setTextureArray(UU, this._textureArrays[UU]);
          for (UU in this._ints) QU.setInt(UU, this._ints[UU]);
          for (UU in this._uints) QU.setUInt(UU, this._uints[UU]);
          for (UU in this._floats) QU.setFloat(UU, this._floats[UU]);
          for (UU in this._floatsArrays) QU.setArray(UU, this._floatsArrays[UU]);
          for (UU in this._colors3) QU.setColor3(UU, this._colors3[UU]);
          for (UU in this._colors3Arrays) QU.setArray3(UU, this._colors3Arrays[UU]);
          for (UU in this._colors4) {
            const XU = this._colors4[UU];
            QU.setFloat4(UU, XU.r, XU.g, XU.b, XU.a)
          }
          for (UU in this._colors4Arrays) QU.setArray4(UU, this._colors4Arrays[UU]);
          for (UU in this._vectors2) QU.setVector2(UU, this._vectors2[UU]);
          for (UU in this._vectors3) QU.setVector3(UU, this._vectors3[UU]);
          for (UU in this._vectors4) QU.setVector4(UU, this._vectors4[UU]);
          for (UU in this._quaternions) QU.setQuaternion(UU, this._quaternions[UU]);
          for (UU in this._matrices) QU.setMatrix(UU, this._matrices[UU]);
          for (UU in this._matrixArrays) QU.setMatrices(UU, this._matrixArrays[UU]);
          for (UU in this._matrices3x3) QU.setMatrix3x3(UU, this._matrices3x3[UU]);
          for (UU in this._matrices2x2) QU.setMatrix2x2(UU, this._matrices2x2[UU]);
          for (UU in this._vectors2Arrays) QU.setArray2(UU, this._vectors2Arrays[UU]);
          for (UU in this._vectors3Arrays) QU.setArray3(UU, this._vectors3Arrays[UU]);
          for (UU in this._vectors4Arrays) QU.setArray4(UU, this._vectors4Arrays[UU]);
          for (UU in this._quaternionsArrays) QU.setArray4(UU, this._quaternionsArrays[UU]);
          for (UU in this._uniformBuffers) {
            const XU = this._uniformBuffers[UU].getBuffer();
            XU && QU.bindUniformBuffer(XU, UU)
          }
          const zU = AU.qp(),
            FU = zU.setExternalTexture;
          if (FU)
            for (UU in this._externalTextures) FU.call(zU, UU, this._externalTextures[UU]);
          const DU = zU.setTextureSampler;
          if (DU)
            for (UU in this._textureSamplers) DU.call(zU, UU, this._textureSamplers[UU]);
          const EU = zU.setStorageBuffer;
          if (EU)
            for (UU in this._storageBuffers) EU.call(zU, UU, this._storageBuffers[UU])
        }
        if (QU && XU && (DU || !this.isFrozen)) {
          (0, IU.w)(XU, QU), XU.morphTargetManager && XU.morphTargetManager.isUsingTextureForTargets && XU.morphTargetManager._bind(QU);
          const UU = XU.bakedVertexAnimationManager;
          if (UU && UU.isEnabled) {
            const UU = yU ? cU._drawWrapper : this._drawWrapper;
            XU.bakedVertexAnimationManager?.bind(QU, !!UU._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(XU, QU, cU)
      }
      getActiveTextures() {
        const UU = super.getActiveTextures();
        for (const XU in this._textures) UU.push(this._textures[XU]);
        for (const XU in this._textureArrays) {
          const zU = this._textureArrays[XU];
          for (let XU = 0; XU < zU.length; XU++) UU.push(zU[XU])
        }
        return UU
      }
      hasTexture(UU) {
        if (super.hasTexture(UU)) return !0;
        for (const zU in this._textures)
          if (this._textures[zU] === UU) return !0;
        const XU = UU.getInternalTexture();
        for (const zU in this._internalTextures)
          if (this._internalTextures[zU] === XU) return !0;
        for (const zU in this._textureArrays) {
          const XU = this._textureArrays[zU];
          for (let zU = 0; zU < XU.length; zU++)
            if (XU[zU] === UU) return !0
        }
        return !1
      }
      clone(UU) {
        const XU = cU.b.Clone((() => new gU(UU, this.nS(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        XU.name = UU, XU.id = UU, "object" === typeof XU._shaderPath && (XU._shaderPath = {
          ...XU._shaderPath
        }), this._options = {
          ...this._options
        };
        const zU = Object.keys(this._options);
        for (const cU of zU) {
          const UU = this._options[cU];
          Array.isArray(UU) && (this._options[cU] = UU.slice(0))
        }
        this.stencil.copyTo(XU.stencil);
        for (const cU in this._textures) XU.setTexture(cU, this._textures[cU]);
        for (const cU in this._internalTextures) XU.setInternalTexture(cU, this._internalTextures[cU]);
        for (const cU in this._textureArrays) XU.setTextureArray(cU, this._textureArrays[cU]);
        for (const cU in this._externalTextures) XU.setExternalTexture(cU, this._externalTextures[cU]);
        for (const cU in this._ints) XU.setInt(cU, this._ints[cU]);
        for (const cU in this._uints) XU.setUInt(cU, this._uints[cU]);
        for (const cU in this._floats) XU.setFloat(cU, this._floats[cU]);
        for (const cU in this._floatsArrays) XU.setFloats(cU, this._floatsArrays[cU]);
        for (const cU in this._colors3) XU.setColor3(cU, this._colors3[cU]);
        for (const cU in this._colors3Arrays) XU._colors3Arrays[cU] = this._colors3Arrays[cU];
        for (const cU in this._colors4) XU.setColor4(cU, this._colors4[cU]);
        for (const cU in this._colors4Arrays) XU._colors4Arrays[cU] = this._colors4Arrays[cU];
        for (const cU in this._vectors2) XU.setVector2(cU, this._vectors2[cU]);
        for (const cU in this._vectors3) XU.setVector3(cU, this._vectors3[cU]);
        for (const cU in this._vectors4) XU.setVector4(cU, this._vectors4[cU]);
        for (const cU in this._quaternions) XU.setQuaternion(cU, this._quaternions[cU]);
        for (const cU in this._quaternionsArrays) XU._quaternionsArrays[cU] = this._quaternionsArrays[cU];
        for (const cU in this._matrices) XU.setMatrix(cU, this._matrices[cU]);
        for (const cU in this._matrixArrays) XU._matrixArrays[cU] = this._matrixArrays[cU].slice();
        for (const cU in this._matrices3x3) XU.setMatrix3x3(cU, this._matrices3x3[cU]);
        for (const cU in this._matrices2x2) XU.setMatrix2x2(cU, this._matrices2x2[cU]);
        for (const cU in this._vectors2Arrays) XU.setArray2(cU, this._vectors2Arrays[cU]);
        for (const cU in this._vectors3Arrays) XU.setArray3(cU, this._vectors3Arrays[cU]);
        for (const cU in this._vectors4Arrays) XU.setArray4(cU, this._vectors4Arrays[cU]);
        for (const cU in this._uniformBuffers) XU.setUniformBuffer(cU, this._uniformBuffers[cU]);
        for (const cU in this._textureSamplers) XU.setTextureSampler(cU, this._textureSamplers[cU]);
        for (const cU in this._storageBuffers) XU.setStorageBuffer(cU, this._storageBuffers[cU]);
        return XU
      }
      dispose(UU, XU, zU) {
        if (XU) {
          let UU;
          for (UU in this._textures) this._textures[UU].dispose();
          for (UU in this._internalTextures) this._internalTextures[UU].dispose();
          for (UU in this._textureArrays) {
            const XU = this._textureArrays[UU];
            for (let UU = 0; UU < XU.length; UU++) XU[UU].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(UU, XU, zU)
      }
      serialize() {
        const UU = cU.b.Serialize(this);
        let XU;
        for (XU in UU.customType = "BABYLON.ShaderMaterial", UU.uniqueId = this.uniqueId, UU.options = this._options, UU.shaderPath = this._shaderPath, UU.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, UU.stencil = this.stencil.serialize(), UU.textures = {}, this._textures) UU.textures[XU] = this._textures[XU].serialize();
        for (XU in UU.textureArrays = {}, this._textureArrays) {
          UU.textureArrays[XU] = [];
          const zU = this._textureArrays[XU];
          for (let cU = 0; cU < zU.length; cU++) UU.textureArrays[XU].push(zU[cU].serialize())
        }
        for (XU in UU.ints = {}, this._ints) UU.ints[XU] = this._ints[XU];
        for (XU in UU.uints = {}, this._uints) UU.uints[XU] = this._uints[XU];
        for (XU in UU.floats = {}, this._floats) UU.floats[XU] = this._floats[XU];
        for (XU in UU.floatsArrays = {}, this._floatsArrays) UU.floatsArrays[XU] = this._floatsArrays[XU];
        for (XU in UU.colors3 = {}, this._colors3) {
          const zU = this._colors3[XU];
          UU.colors3[XU] = [zU.r, zU.g, zU.b]
        }
        for (XU in UU.colors3Arrays = {}, this._colors3Arrays) UU.colors3Arrays[XU] = this._colors3Arrays[XU];
        for (XU in UU.colors4 = {}, this._colors4) {
          const zU = this._colors4[XU];
          UU.colors4[XU] = [zU.r, zU.g, zU.b, zU.a]
        }
        for (XU in UU.colors4Arrays = {}, this._colors4Arrays) UU.colors4Arrays[XU] = this._colors4Arrays[XU];
        for (XU in UU.vectors2 = {}, this._vectors2) {
          const zU = this._vectors2[XU];
          UU.vectors2[XU] = [zU.x, zU.y]
        }
        for (XU in UU.vectors3 = {}, this._vectors3) {
          const zU = this._vectors3[XU];
          UU.vectors3[XU] = [zU.x, zU.y, zU.z]
        }
        for (XU in UU.vectors4 = {}, this._vectors4) {
          const zU = this._vectors4[XU];
          UU.vectors4[XU] = [zU.x, zU.y, zU.z, zU.w]
        }
        for (XU in UU.quaternions = {}, this._quaternions) UU.quaternions[XU] = this._quaternions[XU].cyU();
        for (XU in UU.matrices = {}, this._matrices) UU.matrices[XU] = this._matrices[XU].cyU();
        for (XU in UU.matrixArray = {}, this._matrixArrays) UU.matrixArray[XU] = this._matrixArrays[XU];
        for (XU in UU.matrices3x3 = {}, this._matrices3x3) UU.matrices3x3[XU] = this._matrices3x3[XU];
        for (XU in UU.matrices2x2 = {}, this._matrices2x2) UU.matrices2x2[XU] = this._matrices2x2[XU];
        for (XU in UU.vectors2Arrays = {}, this._vectors2Arrays) UU.vectors2Arrays[XU] = this._vectors2Arrays[XU];
        for (XU in UU.vectors3Arrays = {}, this._vectors3Arrays) UU.vectors3Arrays[XU] = this._vectors3Arrays[XU];
        for (XU in UU.vectors4Arrays = {}, this._vectors4Arrays) UU.vectors4Arrays[XU] = this._vectors4Arrays[XU];
        for (XU in UU.quaternionsArrays = {}, this._quaternionsArrays) UU.quaternionsArrays[XU] = this._quaternionsArrays[XU];
        return UU
      }
    }

    function kU(UU, XU, zU) {
      const yU = cU.b.Parse((() => new gU(UU.name, XU, UU.shaderPath, UU.options, UU.storeEffectOnSubMeshes)), UU, XU, zU);
      let AU;
      for (AU in UU.stencil && yU.stencil.parse(UU.stencil, XU, zU), UU.textures) yU.setTexture(AU, FU.e.Parse(UU.textures[AU], XU, zU));
      for (AU in UU.textureArrays) {
        const cU = UU.textureArrays[AU],
          QU = [];
        for (let UU = 0; UU < cU.length; UU++) QU.push(FU.e.Parse(cU[UU], XU, zU));
        yU.setTextureArray(AU, QU)
      }
      for (AU in UU.ints) yU.setInt(AU, UU.ints[AU]);
      for (AU in UU.uints) yU.setUInt(AU, UU.uints[AU]);
      for (AU in UU.floats) yU.setFloat(AU, UU.floats[AU]);
      for (AU in UU.floatsArrays) yU.setFloats(AU, UU.floatsArrays[AU]);
      for (AU in UU.colors3) {
        const XU = UU.colors3[AU];
        yU.setColor3(AU, {
          r: XU[0],
          g: XU[1],
          b: XU[2]
        })
      }
      for (AU in UU.colors3Arrays) {
        const XU = UU.colors3Arrays[AU].reduce(((UU, XU, zU) => (zU % 3 === 0 ? UU.push([XU]) : UU[UU.length - 1].push(XU), UU)), []).map((UU => ({
          r: UU[0],
          g: UU[1],
          b: UU[2]
        })));
        yU.setColor3Array(AU, XU)
      }
      for (AU in UU.colors4) {
        const XU = UU.colors4[AU];
        yU.setColor4(AU, {
          r: XU[0],
          g: XU[1],
          b: XU[2],
          a: XU[3]
        })
      }
      for (AU in UU.colors4Arrays) {
        const XU = UU.colors4Arrays[AU].reduce(((UU, XU, zU) => (zU % 4 === 0 ? UU.push([XU]) : UU[UU.length - 1].push(XU), UU)), []).map((UU => ({
          r: UU[0],
          g: UU[1],
          b: UU[2],
          a: UU[3]
        })));
        yU.setColor4Array(AU, XU)
      }
      for (AU in UU.vectors2) {
        const XU = UU.vectors2[AU];
        yU.setVector2(AU, {
          x: XU[0],
          y: XU[1]
        })
      }
      for (AU in UU.vectors3) {
        const XU = UU.vectors3[AU];
        yU.setVector3(AU, {
          x: XU[0],
          y: XU[1],
          z: XU[2]
        })
      }
      for (AU in UU.vectors4) {
        const XU = UU.vectors4[AU];
        yU.setVector4(AU, {
          x: XU[0],
          y: XU[1],
          z: XU[2],
          w: XU[3]
        })
      }
      for (AU in UU.quaternions) yU.setQuaternion(AU, QU.f.FromArray(UU.quaternions[AU]));
      for (AU in UU.matrices) yU.setMatrix(AU, QU.e.FromArray(UU.matrices[AU]));
      const oU = yU;
      for (AU in UU.matrixArray) oU._matrixArrays[AU] = new Float32Array(UU.matrixArray[AU]);
      for (AU in UU.matrices3x3) yU.setMatrix3x3(AU, UU.matrices3x3[AU]);
      for (AU in UU.matrices2x2) yU.setMatrix2x2(AU, UU.matrices2x2[AU]);
      for (AU in UU.vectors2Arrays) yU.setArray2(AU, UU.vectors2Arrays[AU]);
      for (AU in UU.vectors3Arrays) yU.setArray3(AU, UU.vectors3Arrays[AU]);
      for (AU in UU.vectors4Arrays) yU.setArray4(AU, UU.vectors4Arrays[AU]);
      for (AU in UU.quaternionsArrays) yU.setArray4(AU, UU.quaternionsArrays[AU]);
      return yU
    }
    async function GU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((yU, QU) => {
        const AU = new DU.e;
        AU.addEventListener("readystatechange", (() => {
          if (4 == AU.readyState)
            if (200 == AU.status) {
              const XU = kU(JSON.parse(AU.responseText), zU || YU.b.LastCreatedScene, cU);
              UU && (XU.name = UU), yU(XU)
            } else QU("Unable to load the ShaderMaterial")
        })), AU.open("GET", XU), AU.send()
      }))
    }
    async function BU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const cU = this?.SnippetUrl ?? gU.SnippetUrl;
      return await new Promise(((yU, QU) => {
        const AU = new DU.e;
        AU.addEventListener("readystatechange", (() => {
          if (4 == AU.readyState)
            if (200 == AU.status) {
              const cU = JSON.parse(JSON.parse(AU.responseText).jsonPayload),
                QU = kU(JSON.parse(cU.shaderMaterial), XU || YU.b.LastCreatedScene, zU);
              QU.snippetId = UU, yU(QU)
            } else QU("Unable to load the snippet " + UU)
        })), AU.open("GET", cU + "/" + UU.replace(/#/g, "/")), AU.send()
      }))
    }
    gU.SnippetUrl = "https://snippet.babylonjs.com";
    const ZU = BU;
    let RU = !1;

    function PU() {
      RU || (RU = !0, gU.Parse = kU, gU.ParseFromFileAsync = GU, gU.ParseFromSnippetAsync = BU, gU.CreateFromSnippetAsync = ZU, (0, aU.h)("BABYLON.ShaderMaterial", gU))
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);