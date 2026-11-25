export const id = 268;
export const ids = [268];
export const modules = {
  40851: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => uG,
      h: () => oG,
      k: () => zG,
      l: () => EG,
      n: () => rG,
      o: () => JG
    });
    var wG = ZG(40416),
      SG = ZG(40475),
      LG = ZG(37439),
      yG = ZG(40524),
      kG = ZG(40857),
      UG = ZG(40725),
      YG = ZG(40432),
      VG = ZG(40720),
      pG = ZG(37463),
      fG = ZG(40709),
      QG = ZG(40705),
      KG = ZG(40742),
      hG = ZG(37484);
    const dG = {
      effect: null,
      subMesh: null
    };
    class JG extends VG.c {
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(GG, bG, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new LG.e, this._cachedWorldViewProjectionMatrix = new LG.e, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = ZG, this._options = {
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
          ...wG
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(GG) {
        this._shaderPath = GG
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
      _checkUniform(GG) {
        -1 === this._options.uniforms.indexOf(GG) && this._options.uniforms.push(GG)
      }
      setTexture(GG, bG) {
        return -1 === this._options.samplers.indexOf(GG) && this._options.samplers.push(GG), this._textures[GG] = bG, this
      }
      setInternalTexture(GG, bG) {
        return -1 === this._options.samplers.indexOf(GG) && this._options.samplers.push(GG), this._internalTextures[GG] = bG, this
      }
      removeTexture(GG) {
        delete this._textures[GG]
      }
      setTextureArray(GG, bG) {
        return -1 === this._options.samplers.indexOf(GG) && this._options.samplers.push(GG), this._checkUniform(GG), this._textureArrays[GG] = bG, this
      }
      setExternalTexture(GG, bG) {
        return -1 === this._options.externalTextures.indexOf(GG) && this._options.externalTextures.push(GG), this._externalTextures[GG] = bG, this
      }
      setFloat(GG, bG) {
        return this._checkUniform(GG), this._floats[GG] = bG, this
      }
      setInt(GG, bG) {
        return this._checkUniform(GG), this._ints[GG] = bG, this
      }
      setUInt(GG, bG) {
        return this._checkUniform(GG), this._uints[GG] = bG, this
      }
      setFloats(GG, bG) {
        return this._checkUniform(GG), this._floatsArrays[GG] = bG, this
      }
      setColor3(GG, bG) {
        return this._checkUniform(GG), this._colors3[GG] = bG, this
      }
      setColor3Array(GG, bG) {
        return this._checkUniform(GG), this._colors3Arrays[GG] = bG.reduce(((GG, bG) => (GG.push(bG.r, bG.g, bG.b), GG)), []), this
      }
      setColor4(GG, bG) {
        return this._checkUniform(GG), this._colors4[GG] = bG, this
      }
      setColor4Array(GG, bG) {
        return this._checkUniform(GG), this._colors4Arrays[GG] = bG.reduce(((GG, bG) => (GG.push(bG.r, bG.g, bG.b, bG.a), GG)), []), this
      }
      setVector2(GG, bG) {
        return this._checkUniform(GG), this._vectors2[GG] = bG, this
      }
      setVector3(GG, bG) {
        return this._checkUniform(GG), this._vectors3[GG] = bG, this
      }
      setVector4(GG, bG) {
        return this._checkUniform(GG), this._vectors4[GG] = bG, this
      }
      setQuaternion(GG, bG) {
        return this._checkUniform(GG), this._quaternions[GG] = bG, this
      }
      setQuaternionArray(GG, bG) {
        return this._checkUniform(GG), this._quaternionsArrays[GG] = bG.reduce(((GG, bG) => (bG.toArray(GG, GG.length), GG)), []), this
      }
      setMatrix(GG, bG) {
        return this._checkUniform(GG), this._matrices[GG] = bG, this
      }
      setMatrices(GG, bG) {
        this._checkUniform(GG);
        const ZG = new Float32Array(16 * bG.length);
        for (let wG = 0; wG < bG.length; wG++) {
          bG[wG].copyToArray(ZG, 16 * wG)
        }
        return this._matrixArrays[GG] = ZG, this
      }
      setMatrix3x3(GG, bG) {
        return this._checkUniform(GG), this._matrices3x3[GG] = bG, this
      }
      setMatrix2x2(GG, bG) {
        return this._checkUniform(GG), this._matrices2x2[GG] = bG, this
      }
      setArray2(GG, bG) {
        return this._checkUniform(GG), this._vectors2Arrays[GG] = bG, this
      }
      setArray3(GG, bG) {
        return this._checkUniform(GG), this._vectors3Arrays[GG] = bG, this
      }
      setArray4(GG, bG) {
        return this._checkUniform(GG), this._vectors4Arrays[GG] = bG, this
      }
      setUniformBuffer(GG, bG) {
        return -1 === this._options.uniformBuffers.indexOf(GG) && this._options.uniformBuffers.push(GG), this._uniformBuffers[GG] = bG, this
      }
      setTextureSampler(GG, bG) {
        return -1 === this._options.samplerObjects.indexOf(GG) && this._options.samplerObjects.push(GG), this._textureSamplers[GG] = bG, this
      }
      setStorageBuffer(GG, bG) {
        return -1 === this._options.storageBuffers.indexOf(GG) && this._options.storageBuffers.push(GG), this._storageBuffers[GG] = bG, this
      }
      setDefine(GG, bG) {
        const ZG = GG.trimEnd() + " ",
          wG = this.options.defines.findIndex((bG => bG === GG || bG.startsWith(ZG)));
        return wG >= 0 && this.options.defines.splice(wG, 1), ("boolean" !== typeof bG || bG) && this.options.defines.push(ZG + bG), this
      }
      isReadyForSubMesh(GG, bG, ZG) {
        return this.isReady(GG, ZG, bG)
      }
      isReady(GG, bG, ZG) {
        const wG = ZG && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const GG = wG ? ZG._drawWrapper : this._drawWrapper;
          if (GG.effect && GG._wasPreviouslyReady && GG._wasPreviouslyUsingInstances === bG) return !0
        }
        const LG = this.Dv(),
          kG = LG.CK(),
          YG = [],
          VG = [];
        let pG = null,
          hG = this._shaderPath,
          JG = this._options.uniforms,
          rG = this._options.uniformBuffers,
          zG = this._options.samplers;
        kG.getCaps().multiview && LG.activeCamera && LG.activeCamera.outputRenderTarget && LG.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, YG.push("#define MULTIVIEW"), -1 !== JG.indexOf("viewProjection") && -1 === JG.indexOf("viewProjectionR") && JG.push("viewProjectionR"));
        for (let SG = 0; SG < this._options.defines.length; SG++) {
          const GG = 0 === this._options.defines[SG].indexOf("#define") ? this._options.defines[SG] : `#define ${this._options.defines[SG]}`;
          YG.push(GG)
        }
        for (let SG = 0; SG < this._options.attributes.length; SG++) VG.push(this._options.attributes[SG]);
        if (GG && GG.isVerticesDataPresent(yG.l.ColorKind) && (-1 === VG.indexOf(yG.l.ColorKind) && VG.push(yG.l.ColorKind), YG.push("#define VERTEXCOLOR")), bG && (YG.push("#define INSTANCES"), (0, QG.vb)(VG, this._materialHelperNeedsPreviousMatrices), GG?.hasThinInstances && (YG.push("#define THIN_INSTANCES"), GG && GG.isVerticesDataPresent(yG.l.ColorInstanceKind) && (VG.push(yG.l.ColorInstanceKind), YG.push("#define INSTANCESCOLOR")))), GG && GG.useBones && GG.computeBonesUsingShaders && GG.skeleton) {
          VG.push(yG.l.MatricesIndicesKind), VG.push(yG.l.MatricesWeightsKind), GG.numBoneInfluencers > 4 && (VG.push(yG.l.MatricesIndicesExtraKind), VG.push(yG.l.MatricesWeightsExtraKind));
          const bG = GG.skeleton;
          YG.push("#define NUM_BONE_INFLUENCERS " + GG.numBoneInfluencers), pG = new UG.e, pG.addCPUSkinningFallback(0, GG), bG.isUsingTextureForMatrices ? (YG.push("#define BONETEXTURE"), -1 === JG.indexOf("boneTextureInfo") && JG.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (YG.push("#define BonesPerMesh " + (bG.bones.length + 1)), -1 === JG.indexOf("mBones") && JG.push("mBones"))
        } else YG.push("#define NUM_BONE_INFLUENCERS 0");
        let EG = 0;
        const oG = GG ? GG.morphTargetManager : null;
        if (oG) {
          const bG = -1 !== YG.indexOf("#define UV1"),
            ZG = -1 !== YG.indexOf("#define UV2"),
            wG = -1 !== YG.indexOf("#define TANGENT"),
            SG = -1 !== YG.indexOf("#define NORMAL"),
            LG = -1 !== YG.indexOf("#define VERTEXCOLOR");
          EG = (0, QG.T)(oG, YG, VG, GG, !0, SG, wG, bG, ZG, LG), oG.isUsingTextureForTargets && (-1 === JG.indexOf("morphTargetTextureIndices") && JG.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), EG > 0 && (JG = JG.slice(), JG.push("morphTargetInfluences"), JG.push("morphTargetCount"), JG.push("morphTargetTextureInfo"), JG.push("morphTargetTextureIndices"))
        } else YG.push("#define NUM_MORPH_INFLUENCERS 0");
        if (GG) {
          const ZG = GG.bakedVertexAnimationManager;
          ZG && ZG.isEnabled && (YG.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === JG.indexOf("bakedVertexAnimationSettings") && JG.push("bakedVertexAnimationSettings"), -1 === JG.indexOf("bakedVertexAnimationTextureSizeInverted") && JG.push("bakedVertexAnimationTextureSizeInverted"), -1 === JG.indexOf("bakedVertexAnimationTime") && JG.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), bG && VG.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const SG in this._textures)
          if (!this._textures[SG].isReady()) return !1;
        for (const SG in this._internalTextures)
          if (!this._internalTextures[SG].isReady) return !1;
        GG && this.needAlphaTestingForMesh(GG) && YG.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, fG.b)(JG), (0, fG.k)(this, LG, YG)), LG.fogEnabled && GG?.applyFog && LG.fogMode !== SG.f.FOGMODE_NONE && (YG.push("#define FOG"), -1 === JG.indexOf("view") && JG.push("view"), -1 === JG.indexOf("vFogInfos") && JG.push("vFogInfos"), -1 === JG.indexOf("vFogColor") && JG.push("vFogColor")), this._useLogarithmicDepth && (YG.push("#define LOGARITHMICDEPTH"), -1 === JG.indexOf("logarithmicDepthConstant") && JG.push("logarithmicDepthConstant"));
        const XG = ZG ? ZG.getRenderingMesh() : GG;
        if (XG && this.useVertexPulling) {
          const GG = XG.geometry;
          GG && (this._vertexPullingMetadata = (0, KG.g)(GG), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((GG, bG) => {
            JG.push(`vp_${bG}_info`)
          }))), YG.push("#define USE_VERTEX_PULLING");
          const bG = XG.geometry?.getIndexBuffer();
          bG && !XG.isUnIndexed && (YG.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), bG.is32Bits && YG.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (JG = JG.slice(), rG = rG.slice(), zG = zG.slice(), hG = this.customShaderNameResolve(this.name, JG, rG, zG, YG, VG));
        const uG = wG ? ZG._getDrawWrapper(void 0, !0) : this._drawWrapper,
          iG = uG?.effect ?? null,
          CG = uG?.defines ?? null,
          WG = YG.join("\n");
        let mG = iG;
        return CG !== WG && (mG = kG.createEffect(hG, {
          attributes: VG,
          uniformsNames: JG,
          uniformBuffersNames: rG,
          samplers: zG,
          defines: WG,
          fallbacks: pG,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: EG
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, kG), wG ? ZG.setEffect(mG, WG, this._materialContext) : uG && uG.setEffect(mG, WG), this._onEffectCreatedObservable && (dG.effect = mG, dG.subMesh = ZG ?? GG?.aE[0] ?? null, this._onEffectCreatedObservable.notifyObservers(dG))), uG._wasPreviouslyUsingInstances = !!bG, !!mG?.isReady() && (iG !== mG && LG.resetCachedMaterial(), uG._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(GG, bG) {
        const ZG = bG ?? this.getEffect();
        if (!ZG) return;
        const wG = this._options.uniforms; - 1 !== wG.indexOf("world") && ZG.setMatrix("world", GG);
        const SG = this.Dv(); - 1 !== wG.indexOf("worldView") && (GG.multiplyToRef(SG.getViewMatrix(), this._cachedWorldViewMatrix), ZG.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== wG.indexOf("worldViewProjection") && (GG.multiplyToRef(SG.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), ZG.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== wG.indexOf("view") && ZG.setMatrix("view", SG.getViewMatrix())
      }
      bindForSubMesh(GG, bG, ZG) {
        this.bind(GG, bG, ZG._drawWrapperOverride?.effect, ZG)
      }
      bind(GG, bG, ZG, wG) {
        const SG = wG && this._storeEffectOnSubMeshes,
          LG = ZG ?? (SG ? wG.effect : this.getEffect());
        if (!LG) return;
        const yG = this.Dv();
        this._activeEffect = LG, this.bindOnlyWorldMatrix(GG, ZG);
        const kG = this._options.uniformBuffers;
        let UG = !1;
        if (LG && kG && kG.length > 0 && yG.CK().supportsUniformBuffers)
          for (let VG = 0; VG < kG.length; ++VG) {
            switch (kG[VG]) {
              case "Mesh":
                bG && (bG.getMeshUniformBuffer().bindToEffect(LG, "Mesh"), bG.transferToEffect(GG));
                break;
              case "Scene":
                (0, QG.z)(LG, yG.getSceneUniformBuffer()), yG.finalizeSceneUbo(), UG = !0
            }
          }
        const YG = bG && SG ? this._mustRebind(yG, LG, wG, bG.visibility) : yG.getCachedMaterial() !== this;
        if (LG && YG) {
          let GG;
          for (GG in UG || -1 === this._options.uniforms.indexOf("view") || LG.setMatrix("view", yG.getViewMatrix()), UG || -1 === this._options.uniforms.indexOf("projection") || LG.setMatrix("projection", yG.getProjectionMatrix()), UG || -1 === this._options.uniforms.indexOf("viewProjection") || (LG.setMatrix("viewProjection", yG.getTransformMatrix()), this._multiview && LG.setMatrix("viewProjectionR", yG._transformMatrixR)), yG.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && LG.setVector3("cameraPosition", yG.activeCamera.globalPosition), (0, QG.i)(bG, LG), (0, fG.e)(LG, this, yG), this._vertexPullingMetadata && (0, KG.d)(LG, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, QG.w)(SG ? wG.materialDefines : LG.defines, LG, yG), bG && (0, QG.l)(yG, bG, LG), this._textures) LG.setTexture(GG, this._textures[GG]);
          for (GG in this._internalTextures) LG._bindTexture(GG, this._internalTextures[GG]);
          for (GG in this._textureArrays) LG.setTextureArray(GG, this._textureArrays[GG]);
          for (GG in this._ints) LG.setInt(GG, this._ints[GG]);
          for (GG in this._uints) LG.setUInt(GG, this._uints[GG]);
          for (GG in this._floats) LG.setFloat(GG, this._floats[GG]);
          for (GG in this._floatsArrays) LG.setArray(GG, this._floatsArrays[GG]);
          for (GG in this._colors3) LG.setColor3(GG, this._colors3[GG]);
          for (GG in this._colors3Arrays) LG.setArray3(GG, this._colors3Arrays[GG]);
          for (GG in this._colors4) {
            const bG = this._colors4[GG];
            LG.setFloat4(GG, bG.r, bG.g, bG.b, bG.a)
          }
          for (GG in this._colors4Arrays) LG.setArray4(GG, this._colors4Arrays[GG]);
          for (GG in this._vectors2) LG.setVector2(GG, this._vectors2[GG]);
          for (GG in this._vectors3) LG.setVector3(GG, this._vectors3[GG]);
          for (GG in this._vectors4) LG.setVector4(GG, this._vectors4[GG]);
          for (GG in this._quaternions) LG.setQuaternion(GG, this._quaternions[GG]);
          for (GG in this._matrices) LG.setMatrix(GG, this._matrices[GG]);
          for (GG in this._matrixArrays) LG.setMatrices(GG, this._matrixArrays[GG]);
          for (GG in this._matrices3x3) LG.setMatrix3x3(GG, this._matrices3x3[GG]);
          for (GG in this._matrices2x2) LG.setMatrix2x2(GG, this._matrices2x2[GG]);
          for (GG in this._vectors2Arrays) LG.setArray2(GG, this._vectors2Arrays[GG]);
          for (GG in this._vectors3Arrays) LG.setArray3(GG, this._vectors3Arrays[GG]);
          for (GG in this._vectors4Arrays) LG.setArray4(GG, this._vectors4Arrays[GG]);
          for (GG in this._quaternionsArrays) LG.setArray4(GG, this._quaternionsArrays[GG]);
          for (GG in this._uniformBuffers) {
            const bG = this._uniformBuffers[GG].getBuffer();
            bG && LG.bindUniformBuffer(bG, GG)
          }
          const ZG = yG.CK(),
            kG = ZG.setExternalTexture;
          if (kG)
            for (GG in this._externalTextures) kG.call(ZG, GG, this._externalTextures[GG]);
          const YG = ZG.setTextureSampler;
          if (YG)
            for (GG in this._textureSamplers) YG.call(ZG, GG, this._textureSamplers[GG]);
          const VG = ZG.setStorageBuffer;
          if (VG)
            for (GG in this._storageBuffers) VG.call(ZG, GG, this._storageBuffers[GG])
        }
        if (LG && bG && (YG || !this.isFrozen)) {
          (0, QG.y)(bG, LG), bG.morphTargetManager && bG.morphTargetManager.isUsingTextureForTargets && bG.morphTargetManager._bind(LG);
          const GG = bG.bakedVertexAnimationManager;
          if (GG && GG.isEnabled) {
            const GG = SG ? wG._drawWrapper : this._drawWrapper;
            bG.bakedVertexAnimationManager?.bind(LG, !!GG._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(bG, LG, wG)
      }
      getActiveTextures() {
        const GG = super.getActiveTextures();
        for (const bG in this._textures) GG.push(this._textures[bG]);
        for (const bG in this._textureArrays) {
          const ZG = this._textureArrays[bG];
          for (let bG = 0; bG < ZG.length; bG++) GG.push(ZG[bG])
        }
        return GG
      }
      hasTexture(GG) {
        if (super.hasTexture(GG)) return !0;
        for (const ZG in this._textures)
          if (this._textures[ZG] === GG) return !0;
        const bG = GG.getInternalTexture();
        for (const ZG in this._internalTextures)
          if (this._internalTextures[ZG] === bG) return !0;
        for (const ZG in this._textureArrays) {
          const bG = this._textureArrays[ZG];
          for (let ZG = 0; ZG < bG.length; ZG++)
            if (bG[ZG] === GG) return !0
        }
        return !1
      }
      clone(GG) {
        const bG = wG.b.Clone((() => new JG(GG, this.Dv(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        bG.name = GG, bG.id = GG, "object" === typeof bG._shaderPath && (bG._shaderPath = {
          ...bG._shaderPath
        }), this._options = {
          ...this._options
        };
        const ZG = Object.keys(this._options);
        for (const wG of ZG) {
          const GG = this._options[wG];
          Array.isArray(GG) && (this._options[wG] = GG.slice(0))
        }
        this.stencil.copyTo(bG.stencil);
        for (const wG in this._textures) bG.setTexture(wG, this._textures[wG]);
        for (const wG in this._internalTextures) bG.setInternalTexture(wG, this._internalTextures[wG]);
        for (const wG in this._textureArrays) bG.setTextureArray(wG, this._textureArrays[wG]);
        for (const wG in this._externalTextures) bG.setExternalTexture(wG, this._externalTextures[wG]);
        for (const wG in this._ints) bG.setInt(wG, this._ints[wG]);
        for (const wG in this._uints) bG.setUInt(wG, this._uints[wG]);
        for (const wG in this._floats) bG.setFloat(wG, this._floats[wG]);
        for (const wG in this._floatsArrays) bG.setFloats(wG, this._floatsArrays[wG]);
        for (const wG in this._colors3) bG.setColor3(wG, this._colors3[wG]);
        for (const wG in this._colors3Arrays) bG._colors3Arrays[wG] = this._colors3Arrays[wG];
        for (const wG in this._colors4) bG.setColor4(wG, this._colors4[wG]);
        for (const wG in this._colors4Arrays) bG._colors4Arrays[wG] = this._colors4Arrays[wG];
        for (const wG in this._vectors2) bG.setVector2(wG, this._vectors2[wG]);
        for (const wG in this._vectors3) bG.setVector3(wG, this._vectors3[wG]);
        for (const wG in this._vectors4) bG.setVector4(wG, this._vectors4[wG]);
        for (const wG in this._quaternions) bG.setQuaternion(wG, this._quaternions[wG]);
        for (const wG in this._quaternionsArrays) bG._quaternionsArrays[wG] = this._quaternionsArrays[wG];
        for (const wG in this._matrices) bG.setMatrix(wG, this._matrices[wG]);
        for (const wG in this._matrixArrays) bG._matrixArrays[wG] = this._matrixArrays[wG].slice();
        for (const wG in this._matrices3x3) bG.setMatrix3x3(wG, this._matrices3x3[wG]);
        for (const wG in this._matrices2x2) bG.setMatrix2x2(wG, this._matrices2x2[wG]);
        for (const wG in this._vectors2Arrays) bG.setArray2(wG, this._vectors2Arrays[wG]);
        for (const wG in this._vectors3Arrays) bG.setArray3(wG, this._vectors3Arrays[wG]);
        for (const wG in this._vectors4Arrays) bG.setArray4(wG, this._vectors4Arrays[wG]);
        for (const wG in this._uniformBuffers) bG.setUniformBuffer(wG, this._uniformBuffers[wG]);
        for (const wG in this._textureSamplers) bG.setTextureSampler(wG, this._textureSamplers[wG]);
        for (const wG in this._storageBuffers) bG.setStorageBuffer(wG, this._storageBuffers[wG]);
        return bG
      }
      dispose(GG, bG, ZG) {
        if (bG) {
          let GG;
          for (GG in this._textures) this._textures[GG].dispose();
          for (GG in this._internalTextures) this._internalTextures[GG].dispose();
          for (GG in this._textureArrays) {
            const bG = this._textureArrays[GG];
            for (let GG = 0; GG < bG.length; GG++) bG[GG].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(GG, bG, ZG)
      }
      serialize() {
        const GG = wG.b.Serialize(this);
        let bG;
        for (bG in GG.customType = "BABYLON.ShaderMaterial", GG.uniqueId = this.uniqueId, GG.options = this._options, GG.shaderPath = this._shaderPath, GG.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, GG.stencil = this.stencil.serialize(), GG.textures = {}, this._textures) GG.textures[bG] = this._textures[bG].serialize();
        for (bG in GG.textureArrays = {}, this._textureArrays) {
          GG.textureArrays[bG] = [];
          const ZG = this._textureArrays[bG];
          for (let wG = 0; wG < ZG.length; wG++) GG.textureArrays[bG].push(ZG[wG].serialize())
        }
        for (bG in GG.ints = {}, this._ints) GG.ints[bG] = this._ints[bG];
        for (bG in GG.uints = {}, this._uints) GG.uints[bG] = this._uints[bG];
        for (bG in GG.floats = {}, this._floats) GG.floats[bG] = this._floats[bG];
        for (bG in GG.floatsArrays = {}, this._floatsArrays) GG.floatsArrays[bG] = this._floatsArrays[bG];
        for (bG in GG.colors3 = {}, this._colors3) {
          const ZG = this._colors3[bG];
          GG.colors3[bG] = [ZG.r, ZG.g, ZG.b]
        }
        for (bG in GG.colors3Arrays = {}, this._colors3Arrays) GG.colors3Arrays[bG] = this._colors3Arrays[bG];
        for (bG in GG.colors4 = {}, this._colors4) {
          const ZG = this._colors4[bG];
          GG.colors4[bG] = [ZG.r, ZG.g, ZG.b, ZG.a]
        }
        for (bG in GG.colors4Arrays = {}, this._colors4Arrays) GG.colors4Arrays[bG] = this._colors4Arrays[bG];
        for (bG in GG.vectors2 = {}, this._vectors2) {
          const ZG = this._vectors2[bG];
          GG.vectors2[bG] = [ZG.x, ZG.y]
        }
        for (bG in GG.vectors3 = {}, this._vectors3) {
          const ZG = this._vectors3[bG];
          GG.vectors3[bG] = [ZG.x, ZG.y, ZG.z]
        }
        for (bG in GG.vectors4 = {}, this._vectors4) {
          const ZG = this._vectors4[bG];
          GG.vectors4[bG] = [ZG.x, ZG.y, ZG.z, ZG.w]
        }
        for (bG in GG.quaternions = {}, this._quaternions) GG.quaternions[bG] = this._quaternions[bG].mwG();
        for (bG in GG.matrices = {}, this._matrices) GG.matrices[bG] = this._matrices[bG].mwG();
        for (bG in GG.matrixArray = {}, this._matrixArrays) GG.matrixArray[bG] = this._matrixArrays[bG];
        for (bG in GG.matrices3x3 = {}, this._matrices3x3) GG.matrices3x3[bG] = this._matrices3x3[bG];
        for (bG in GG.matrices2x2 = {}, this._matrices2x2) GG.matrices2x2[bG] = this._matrices2x2[bG];
        for (bG in GG.vectors2Arrays = {}, this._vectors2Arrays) GG.vectors2Arrays[bG] = this._vectors2Arrays[bG];
        for (bG in GG.vectors3Arrays = {}, this._vectors3Arrays) GG.vectors3Arrays[bG] = this._vectors3Arrays[bG];
        for (bG in GG.vectors4Arrays = {}, this._vectors4Arrays) GG.vectors4Arrays[bG] = this._vectors4Arrays[bG];
        for (bG in GG.quaternionsArrays = {}, this._quaternionsArrays) GG.quaternionsArrays[bG] = this._quaternionsArrays[bG];
        return GG
      }
    }

    function rG(GG, bG, ZG) {
      const SG = wG.b.Parse((() => new JG(GG.name, bG, GG.shaderPath, GG.options, GG.storeEffectOnSubMeshes)), GG, bG, ZG);
      let yG;
      for (yG in GG.stencil && SG.stencil.parse(GG.stencil, bG, ZG), GG.textures) SG.setTexture(yG, kG.d.Parse(GG.textures[yG], bG, ZG));
      for (yG in GG.textureArrays) {
        const wG = GG.textureArrays[yG],
          LG = [];
        for (let GG = 0; GG < wG.length; GG++) LG.push(kG.d.Parse(wG[GG], bG, ZG));
        SG.setTextureArray(yG, LG)
      }
      for (yG in GG.ints) SG.setInt(yG, GG.ints[yG]);
      for (yG in GG.uints) SG.setUInt(yG, GG.uints[yG]);
      for (yG in GG.floats) SG.setFloat(yG, GG.floats[yG]);
      for (yG in GG.floatsArrays) SG.setFloats(yG, GG.floatsArrays[yG]);
      for (yG in GG.colors3) {
        const bG = GG.colors3[yG];
        SG.setColor3(yG, {
          r: bG[0],
          g: bG[1],
          b: bG[2]
        })
      }
      for (yG in GG.colors3Arrays) {
        const bG = GG.colors3Arrays[yG].reduce(((GG, bG, ZG) => (ZG % 3 === 0 ? GG.push([bG]) : GG[GG.length - 1].push(bG), GG)), []).map((GG => ({
          r: GG[0],
          g: GG[1],
          b: GG[2]
        })));
        SG.setColor3Array(yG, bG)
      }
      for (yG in GG.colors4) {
        const bG = GG.colors4[yG];
        SG.setColor4(yG, {
          r: bG[0],
          g: bG[1],
          b: bG[2],
          a: bG[3]
        })
      }
      for (yG in GG.colors4Arrays) {
        const bG = GG.colors4Arrays[yG].reduce(((GG, bG, ZG) => (ZG % 4 === 0 ? GG.push([bG]) : GG[GG.length - 1].push(bG), GG)), []).map((GG => ({
          r: GG[0],
          g: GG[1],
          b: GG[2],
          a: GG[3]
        })));
        SG.setColor4Array(yG, bG)
      }
      for (yG in GG.vectors2) {
        const bG = GG.vectors2[yG];
        SG.setVector2(yG, {
          x: bG[0],
          y: bG[1]
        })
      }
      for (yG in GG.vectors3) {
        const bG = GG.vectors3[yG];
        SG.setVector3(yG, {
          x: bG[0],
          y: bG[1],
          z: bG[2]
        })
      }
      for (yG in GG.vectors4) {
        const bG = GG.vectors4[yG];
        SG.setVector4(yG, {
          x: bG[0],
          y: bG[1],
          z: bG[2],
          w: bG[3]
        })
      }
      for (yG in GG.quaternions) SG.setQuaternion(yG, LG.g.FromArray(GG.quaternions[yG]));
      for (yG in GG.matrices) SG.setMatrix(yG, LG.e.FromArray(GG.matrices[yG]));
      const UG = SG;
      for (yG in GG.matrixArray) UG._matrixArrays[yG] = new Float32Array(GG.matrixArray[yG]);
      for (yG in GG.matrices3x3) SG.setMatrix3x3(yG, GG.matrices3x3[yG]);
      for (yG in GG.matrices2x2) SG.setMatrix2x2(yG, GG.matrices2x2[yG]);
      for (yG in GG.vectors2Arrays) SG.setArray2(yG, GG.vectors2Arrays[yG]);
      for (yG in GG.vectors3Arrays) SG.setArray3(yG, GG.vectors3Arrays[yG]);
      for (yG in GG.vectors4Arrays) SG.setArray4(yG, GG.vectors4Arrays[yG]);
      for (yG in GG.quaternionsArrays) SG.setArray4(yG, GG.quaternionsArrays[yG]);
      return SG
    }
    async function zG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((SG, LG) => {
        const yG = new YG.b;
        yG.addEventListener("readystatechange", (() => {
          if (4 == yG.readyState)
            if (200 == yG.status) {
              const bG = rG(JSON.parse(yG.responseText), ZG || pG.c.LastCreatedScene, wG);
              GG && (bG.name = GG), SG(bG)
            } else LG("Unable to load the ShaderMaterial")
        })), yG.open("GET", bG), yG.send()
      }))
    }
    async function EG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const wG = this?.SnippetUrl ?? JG.SnippetUrl;
      return await new Promise(((SG, LG) => {
        const yG = new YG.b;
        yG.addEventListener("readystatechange", (() => {
          if (4 == yG.readyState)
            if (200 == yG.status) {
              const wG = JSON.parse(JSON.parse(yG.responseText).jsonPayload),
                LG = rG(JSON.parse(wG.shaderMaterial), bG || pG.c.LastCreatedScene, ZG);
              LG.snippetId = GG, SG(LG)
            } else LG("Unable to load the snippet " + GG)
        })), yG.open("GET", wG + "/" + GG.replace(/#/g, "/")), yG.send()
      }))
    }
    JG.SnippetUrl = "https://snippet.babylonjs.com";
    const oG = EG;
    let XG = !1;

    function uG() {
      XG || (XG = !0, JG.Parse = rG, JG.ParseFromFileAsync = zG, JG.ParseFromSnippetAsync = EG, JG.CreateFromSnippetAsync = oG, (0, hG.i)("BABYLON.ShaderMaterial", JG))
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);