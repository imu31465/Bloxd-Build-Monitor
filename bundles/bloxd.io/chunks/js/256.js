export const id = 256;
export const ids = [256];
export const modules = {
  40465: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Bd,
      i: () => xd,
      m: () => Gd,
      p: () => vd,
      s: () => Id,
      v: () => Rd
    });
    var pd = kd(39983),
      Nd = kd(40062),
      Wd = kd(37251),
      Pd = kd(40115),
      Zd = kd(40471),
      gd = kd(40339),
      Cd = kd(40010),
      Kd = kd(40333),
      od = kd(37277),
      ld = kd(40317),
      Qd = kd(40308),
      Ld = kd(40353),
      Od = kd(37303);
    const ed = {
      effect: null,
      subMesh: null
    };
    class Rd extends Kd.c {
      constructor(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(dd, Jd, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new Wd.b, this._cachedWorldViewProjectionMatrix = new Wd.b, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = kd, this._options = {
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
          ...pd
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(dd) {
        this._shaderPath = dd
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
      _checkUniform(dd) {
        -1 === this._options.uniforms.indexOf(dd) && this._options.uniforms.push(dd)
      }
      setTexture(dd, Jd) {
        return -1 === this._options.samplers.indexOf(dd) && this._options.samplers.push(dd), this._textures[dd] = Jd, this
      }
      setInternalTexture(dd, Jd) {
        return -1 === this._options.samplers.indexOf(dd) && this._options.samplers.push(dd), this._internalTextures[dd] = Jd, this
      }
      removeTexture(dd) {
        delete this._textures[dd]
      }
      setTextureArray(dd, Jd) {
        return -1 === this._options.samplers.indexOf(dd) && this._options.samplers.push(dd), this._checkUniform(dd), this._textureArrays[dd] = Jd, this
      }
      setExternalTexture(dd, Jd) {
        return -1 === this._options.externalTextures.indexOf(dd) && this._options.externalTextures.push(dd), this._externalTextures[dd] = Jd, this
      }
      setFloat(dd, Jd) {
        return this._checkUniform(dd), this._floats[dd] = Jd, this
      }
      setInt(dd, Jd) {
        return this._checkUniform(dd), this._ints[dd] = Jd, this
      }
      setUInt(dd, Jd) {
        return this._checkUniform(dd), this._uints[dd] = Jd, this
      }
      setFloats(dd, Jd) {
        return this._checkUniform(dd), this._floatsArrays[dd] = Jd, this
      }
      setColor3(dd, Jd) {
        return this._checkUniform(dd), this._colors3[dd] = Jd, this
      }
      setColor3Array(dd, Jd) {
        return this._checkUniform(dd), this._colors3Arrays[dd] = Jd.reduce(((dd, Jd) => (dd.push(Jd.r, Jd.g, Jd.b), dd)), []), this
      }
      setColor4(dd, Jd) {
        return this._checkUniform(dd), this._colors4[dd] = Jd, this
      }
      setColor4Array(dd, Jd) {
        return this._checkUniform(dd), this._colors4Arrays[dd] = Jd.reduce(((dd, Jd) => (dd.push(Jd.r, Jd.g, Jd.b, Jd.a), dd)), []), this
      }
      setVector2(dd, Jd) {
        return this._checkUniform(dd), this._vectors2[dd] = Jd, this
      }
      setVector3(dd, Jd) {
        return this._checkUniform(dd), this._vectors3[dd] = Jd, this
      }
      setVector4(dd, Jd) {
        return this._checkUniform(dd), this._vectors4[dd] = Jd, this
      }
      setQuaternion(dd, Jd) {
        return this._checkUniform(dd), this._quaternions[dd] = Jd, this
      }
      setQuaternionArray(dd, Jd) {
        return this._checkUniform(dd), this._quaternionsArrays[dd] = Jd.reduce(((dd, Jd) => (Jd.toArray(dd, dd.length), dd)), []), this
      }
      setMatrix(dd, Jd) {
        return this._checkUniform(dd), this._matrices[dd] = Jd, this
      }
      setMatrices(dd, Jd) {
        this._checkUniform(dd);
        const kd = new Float32Array(16 * Jd.length);
        for (let pd = 0; pd < Jd.length; pd++) {
          Jd[pd].copyToArray(kd, 16 * pd)
        }
        return this._matrixArrays[dd] = kd, this
      }
      setMatrix3x3(dd, Jd) {
        return this._checkUniform(dd), this._matrices3x3[dd] = Jd, this
      }
      setMatrix2x2(dd, Jd) {
        return this._checkUniform(dd), this._matrices2x2[dd] = Jd, this
      }
      setArray2(dd, Jd) {
        return this._checkUniform(dd), this._vectors2Arrays[dd] = Jd, this
      }
      setArray3(dd, Jd) {
        return this._checkUniform(dd), this._vectors3Arrays[dd] = Jd, this
      }
      setArray4(dd, Jd) {
        return this._checkUniform(dd), this._vectors4Arrays[dd] = Jd, this
      }
      setUniformBuffer(dd, Jd) {
        return -1 === this._options.uniformBuffers.indexOf(dd) && this._options.uniformBuffers.push(dd), this._uniformBuffers[dd] = Jd, this
      }
      setTextureSampler(dd, Jd) {
        return -1 === this._options.samplerObjects.indexOf(dd) && this._options.samplerObjects.push(dd), this._textureSamplers[dd] = Jd, this
      }
      setStorageBuffer(dd, Jd) {
        return -1 === this._options.storageBuffers.indexOf(dd) && this._options.storageBuffers.push(dd), this._storageBuffers[dd] = Jd, this
      }
      setDefine(dd, Jd) {
        const kd = dd.trimEnd() + " ",
          pd = this.options.defines.findIndex((Jd => Jd === dd || Jd.startsWith(kd)));
        return pd >= 0 && this.options.defines.splice(pd, 1), ("boolean" !== typeof Jd || Jd) && this.options.defines.push(kd + Jd), this
      }
      isReadyForSubMesh(dd, Jd, kd) {
        return this.isReady(dd, kd, Jd)
      }
      isReady(dd, Jd, kd) {
        const pd = kd && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const dd = pd ? kd._drawWrapper : this._drawWrapper;
          if (dd.effect && dd._wasPreviouslyReady && dd._wasPreviouslyUsingInstances === Jd) return !0
        }
        const Wd = this.Wm(),
          Zd = Wd.eL(),
          Cd = [],
          Kd = [];
        let od = null,
          Od = this._shaderPath,
          Rd = this._options.uniforms,
          Id = this._options.uniformBuffers,
          Gd = this._options.samplers;
        Zd.getCaps().multiview && Wd.activeCamera && Wd.activeCamera.outputRenderTarget && Wd.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, Cd.push("#define MULTIVIEW"), -1 !== Rd.indexOf("viewProjection") && -1 === Rd.indexOf("viewProjectionR") && Rd.push("viewProjectionR"));
        for (let Nd = 0; Nd < this._options.defines.length; Nd++) {
          const dd = 0 === this._options.defines[Nd].indexOf("#define") ? this._options.defines[Nd] : `#define ${this._options.defines[Nd]}`;
          Cd.push(dd)
        }
        for (let Nd = 0; Nd < this._options.attributes.length; Nd++) Kd.push(this._options.attributes[Nd]);
        if (dd && dd.isVerticesDataPresent(Pd.j.ColorKind) && (-1 === Kd.indexOf(Pd.j.ColorKind) && Kd.push(Pd.j.ColorKind), Cd.push("#define VERTEXCOLOR")), Jd && (Cd.push("#define INSTANCES"), (0, Qd.qb)(Kd, this._materialHelperNeedsPreviousMatrices), dd?.hasThinInstances && (Cd.push("#define THIN_INSTANCES"), dd && dd.isVerticesDataPresent(Pd.j.ColorInstanceKind) && (Kd.push(Pd.j.ColorInstanceKind), Cd.push("#define INSTANCESCOLOR")))), dd && dd.useBones && dd.computeBonesUsingShaders && dd.skeleton) {
          Kd.push(Pd.j.MatricesIndicesKind), Kd.push(Pd.j.MatricesWeightsKind), dd.numBoneInfluencers > 4 && (Kd.push(Pd.j.MatricesIndicesExtraKind), Kd.push(Pd.j.MatricesWeightsExtraKind));
          const Jd = dd.skeleton;
          Cd.push("#define NUM_BONE_INFLUENCERS " + dd.numBoneInfluencers), od = new gd.e, od.addCPUSkinningFallback(0, dd), Jd.isUsingTextureForMatrices ? (Cd.push("#define BONETEXTURE"), -1 === Rd.indexOf("boneTextureInfo") && Rd.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (Cd.push("#define BonesPerMesh " + (Jd.bones.length + 1)), -1 === Rd.indexOf("mBones") && Rd.push("mBones"))
        } else Cd.push("#define NUM_BONE_INFLUENCERS 0");
        let vd = 0;
        const xd = dd ? dd.morphTargetManager : null;
        if (xd) {
          const Jd = -1 !== Cd.indexOf("#define UV1"),
            kd = -1 !== Cd.indexOf("#define UV2"),
            pd = -1 !== Cd.indexOf("#define TANGENT"),
            Nd = -1 !== Cd.indexOf("#define NORMAL"),
            Wd = -1 !== Cd.indexOf("#define VERTEXCOLOR");
          vd = (0, Qd.P)(xd, Cd, Kd, dd, !0, Nd, pd, Jd, kd, Wd), xd.isUsingTextureForTargets && (-1 === Rd.indexOf("morphTargetTextureIndices") && Rd.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), vd > 0 && (Rd = Rd.slice(), Rd.push("morphTargetInfluences"), Rd.push("morphTargetCount"), Rd.push("morphTargetTextureInfo"), Rd.push("morphTargetTextureIndices"))
        } else Cd.push("#define NUM_MORPH_INFLUENCERS 0");
        if (dd) {
          const kd = dd.bakedVertexAnimationManager;
          kd && kd.isEnabled && (Cd.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === Rd.indexOf("bakedVertexAnimationSettings") && Rd.push("bakedVertexAnimationSettings"), -1 === Rd.indexOf("bakedVertexAnimationTextureSizeInverted") && Rd.push("bakedVertexAnimationTextureSizeInverted"), -1 === Rd.indexOf("bakedVertexAnimationTime") && Rd.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), Jd && Kd.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const Nd in this._textures)
          if (!this._textures[Nd].isReady()) return !1;
        for (const Nd in this._internalTextures)
          if (!this._internalTextures[Nd].isReady) return !1;
        dd && this.needAlphaTestingForMesh(dd) && Cd.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, ld.e)(Rd), (0, ld.m)(this, Wd, Cd)), Wd.fogEnabled && dd?.applyFog && Wd.fogMode !== Nd.i.FOGMODE_NONE && (Cd.push("#define FOG"), -1 === Rd.indexOf("view") && Rd.push("view"), -1 === Rd.indexOf("vFogInfos") && Rd.push("vFogInfos"), -1 === Rd.indexOf("vFogColor") && Rd.push("vFogColor")), this._useLogarithmicDepth && (Cd.push("#define LOGARITHMICDEPTH"), -1 === Rd.indexOf("logarithmicDepthConstant") && Rd.push("logarithmicDepthConstant"));
        const qd = kd ? kd.getRenderingMesh() : dd;
        if (qd && this.useVertexPulling) {
          const dd = qd.geometry;
          dd && (this._vertexPullingMetadata = (0, Ld.h)(dd), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((dd, Jd) => {
            Rd.push(`vp_${Jd}_info`)
          }))), Cd.push("#define USE_VERTEX_PULLING");
          const Jd = qd.geometry?.getIndexBuffer();
          Jd && !qd.isUnIndexed && (Cd.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), Jd.is32Bits && Cd.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (Rd = Rd.slice(), Id = Id.slice(), Gd = Gd.slice(), Od = this.customShaderNameResolve(this.name, Rd, Id, Gd, Cd, Kd));
        const Bd = pd ? kd._getDrawWrapper(void 0, !0) : this._drawWrapper,
          sd = Bd?.effect ?? null,
          ad = Bd?.defines ?? null,
          Md = Cd.join("\n");
        let Fd = sd;
        return ad !== Md && (Fd = Zd.createEffect(Od, {
          attributes: Kd,
          uniformsNames: Rd,
          uniformBuffersNames: Id,
          samplers: Gd,
          defines: Md,
          fallbacks: od,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: vd
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, Zd), pd ? kd.setEffect(Fd, Md, this._materialContext) : Bd && Bd.setEffect(Fd, Md), this._onEffectCreatedObservable && (ed.effect = Fd, ed.subMesh = kd ?? dd?.rG[0] ?? null, this._onEffectCreatedObservable.notifyObservers(ed))), Bd._wasPreviouslyUsingInstances = !!Jd, !!Fd?.isReady() && (sd !== Fd && Wd.resetCachedMaterial(), Bd._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(dd, Jd) {
        const kd = Jd ?? this.getEffect();
        if (!kd) return;
        const pd = this._options.uniforms; - 1 !== pd.indexOf("world") && kd.setMatrix("world", dd);
        const Nd = this.Wm(); - 1 !== pd.indexOf("worldView") && (dd.multiplyToRef(Nd.getViewMatrix(), this._cachedWorldViewMatrix), kd.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== pd.indexOf("worldViewProjection") && (dd.multiplyToRef(Nd.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), kd.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== pd.indexOf("view") && kd.setMatrix("view", Nd.getViewMatrix())
      }
      bindForSubMesh(dd, Jd, kd) {
        this.bind(dd, Jd, kd._drawWrapperOverride?.effect, kd)
      }
      bind(dd, Jd, kd, pd) {
        const Nd = pd && this._storeEffectOnSubMeshes,
          Wd = kd ?? (Nd ? pd.effect : this.getEffect());
        if (!Wd) return;
        const Pd = this.Wm();
        this._activeEffect = Wd, this.bindOnlyWorldMatrix(dd, kd);
        const Zd = this._options.uniformBuffers;
        let gd = !1;
        if (Wd && Zd && Zd.length > 0 && Pd.eL().supportsUniformBuffers)
          for (let Kd = 0; Kd < Zd.length; ++Kd) {
            switch (Zd[Kd]) {
              case "Mesh":
                Jd && (Jd.getMeshUniformBuffer().bindToEffect(Wd, "Mesh"), Jd.transferToEffect(dd));
                break;
              case "Scene":
                (0, Qd.z)(Wd, Pd.getSceneUniformBuffer()), Pd.finalizeSceneUbo(), gd = !0
            }
          }
        const Cd = Jd && Nd ? this._mustRebind(Pd, Wd, pd, Jd.visibility) : Pd.getCachedMaterial() !== this;
        if (Wd && Cd) {
          let dd;
          for (dd in gd || -1 === this._options.uniforms.indexOf("view") || Wd.setMatrix("view", Pd.getViewMatrix()), gd || -1 === this._options.uniforms.indexOf("projection") || Wd.setMatrix("projection", Pd.getProjectionMatrix()), gd || -1 === this._options.uniforms.indexOf("viewProjection") || (Wd.setMatrix("viewProjection", Pd.getTransformMatrix()), this._multiview && Wd.setMatrix("viewProjectionR", Pd._transformMatrixR)), Pd.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && Wd.setVector3("cameraPosition", Pd.activeCamera.globalPosition), (0, Qd.g)(Jd, Wd), (0, ld.i)(Wd, this, Pd), this._vertexPullingMetadata && (0, Ld.e)(Wd, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, Qd.s)(Nd ? pd.materialDefines : Wd.defines, Wd, Pd), Jd && (0, Qd.k)(Pd, Jd, Wd), this._textures) Wd.setTexture(dd, this._textures[dd]);
          for (dd in this._internalTextures) Wd._bindTexture(dd, this._internalTextures[dd]);
          for (dd in this._textureArrays) Wd.setTextureArray(dd, this._textureArrays[dd]);
          for (dd in this._ints) Wd.setInt(dd, this._ints[dd]);
          for (dd in this._uints) Wd.setUInt(dd, this._uints[dd]);
          for (dd in this._floats) Wd.setFloat(dd, this._floats[dd]);
          for (dd in this._floatsArrays) Wd.setArray(dd, this._floatsArrays[dd]);
          for (dd in this._colors3) Wd.setColor3(dd, this._colors3[dd]);
          for (dd in this._colors3Arrays) Wd.setArray3(dd, this._colors3Arrays[dd]);
          for (dd in this._colors4) {
            const Jd = this._colors4[dd];
            Wd.setFloat4(dd, Jd.r, Jd.g, Jd.b, Jd.a)
          }
          for (dd in this._colors4Arrays) Wd.setArray4(dd, this._colors4Arrays[dd]);
          for (dd in this._vectors2) Wd.setVector2(dd, this._vectors2[dd]);
          for (dd in this._vectors3) Wd.setVector3(dd, this._vectors3[dd]);
          for (dd in this._vectors4) Wd.setVector4(dd, this._vectors4[dd]);
          for (dd in this._quaternions) Wd.setQuaternion(dd, this._quaternions[dd]);
          for (dd in this._matrices) Wd.setMatrix(dd, this._matrices[dd]);
          for (dd in this._matrixArrays) Wd.setMatrices(dd, this._matrixArrays[dd]);
          for (dd in this._matrices3x3) Wd.setMatrix3x3(dd, this._matrices3x3[dd]);
          for (dd in this._matrices2x2) Wd.setMatrix2x2(dd, this._matrices2x2[dd]);
          for (dd in this._vectors2Arrays) Wd.setArray2(dd, this._vectors2Arrays[dd]);
          for (dd in this._vectors3Arrays) Wd.setArray3(dd, this._vectors3Arrays[dd]);
          for (dd in this._vectors4Arrays) Wd.setArray4(dd, this._vectors4Arrays[dd]);
          for (dd in this._quaternionsArrays) Wd.setArray4(dd, this._quaternionsArrays[dd]);
          for (dd in this._uniformBuffers) {
            const Jd = this._uniformBuffers[dd].getBuffer();
            Jd && Wd.bindUniformBuffer(Jd, dd)
          }
          const kd = Pd.eL(),
            Zd = kd.setExternalTexture;
          if (Zd)
            for (dd in this._externalTextures) Zd.call(kd, dd, this._externalTextures[dd]);
          const Cd = kd.setTextureSampler;
          if (Cd)
            for (dd in this._textureSamplers) Cd.call(kd, dd, this._textureSamplers[dd]);
          const Kd = kd.setStorageBuffer;
          if (Kd)
            for (dd in this._storageBuffers) Kd.call(kd, dd, this._storageBuffers[dd])
        }
        if (Wd && Jd && (Cd || !this.isFrozen)) {
          (0, Qd.v)(Jd, Wd), Jd.morphTargetManager && Jd.morphTargetManager.isUsingTextureForTargets && Jd.morphTargetManager._bind(Wd);
          const dd = Jd.bakedVertexAnimationManager;
          if (dd && dd.isEnabled) {
            const dd = Nd ? pd._drawWrapper : this._drawWrapper;
            Jd.bakedVertexAnimationManager?.bind(Wd, !!dd._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(Jd, Wd, pd)
      }
      getActiveTextures() {
        const dd = super.getActiveTextures();
        for (const Jd in this._textures) dd.push(this._textures[Jd]);
        for (const Jd in this._textureArrays) {
          const kd = this._textureArrays[Jd];
          for (let Jd = 0; Jd < kd.length; Jd++) dd.push(kd[Jd])
        }
        return dd
      }
      hasTexture(dd) {
        if (super.hasTexture(dd)) return !0;
        for (const kd in this._textures)
          if (this._textures[kd] === dd) return !0;
        const Jd = dd.getInternalTexture();
        for (const kd in this._internalTextures)
          if (this._internalTextures[kd] === Jd) return !0;
        for (const kd in this._textureArrays) {
          const Jd = this._textureArrays[kd];
          for (let kd = 0; kd < Jd.length; kd++)
            if (Jd[kd] === dd) return !0
        }
        return !1
      }
      clone(dd) {
        const Jd = pd.c.Clone((() => new Rd(dd, this.Wm(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        Jd.name = dd, Jd.id = dd, "object" === typeof Jd._shaderPath && (Jd._shaderPath = {
          ...Jd._shaderPath
        }), this._options = {
          ...this._options
        };
        const kd = Object.keys(this._options);
        for (const pd of kd) {
          const dd = this._options[pd];
          Array.isArray(dd) && (this._options[pd] = dd.slice(0))
        }
        this.stencil.copyTo(Jd.stencil);
        for (const pd in this._textures) Jd.setTexture(pd, this._textures[pd]);
        for (const pd in this._internalTextures) Jd.setInternalTexture(pd, this._internalTextures[pd]);
        for (const pd in this._textureArrays) Jd.setTextureArray(pd, this._textureArrays[pd]);
        for (const pd in this._externalTextures) Jd.setExternalTexture(pd, this._externalTextures[pd]);
        for (const pd in this._ints) Jd.setInt(pd, this._ints[pd]);
        for (const pd in this._uints) Jd.setUInt(pd, this._uints[pd]);
        for (const pd in this._floats) Jd.setFloat(pd, this._floats[pd]);
        for (const pd in this._floatsArrays) Jd.setFloats(pd, this._floatsArrays[pd]);
        for (const pd in this._colors3) Jd.setColor3(pd, this._colors3[pd]);
        for (const pd in this._colors3Arrays) Jd._colors3Arrays[pd] = this._colors3Arrays[pd];
        for (const pd in this._colors4) Jd.setColor4(pd, this._colors4[pd]);
        for (const pd in this._colors4Arrays) Jd._colors4Arrays[pd] = this._colors4Arrays[pd];
        for (const pd in this._vectors2) Jd.setVector2(pd, this._vectors2[pd]);
        for (const pd in this._vectors3) Jd.setVector3(pd, this._vectors3[pd]);
        for (const pd in this._vectors4) Jd.setVector4(pd, this._vectors4[pd]);
        for (const pd in this._quaternions) Jd.setQuaternion(pd, this._quaternions[pd]);
        for (const pd in this._quaternionsArrays) Jd._quaternionsArrays[pd] = this._quaternionsArrays[pd];
        for (const pd in this._matrices) Jd.setMatrix(pd, this._matrices[pd]);
        for (const pd in this._matrixArrays) Jd._matrixArrays[pd] = this._matrixArrays[pd].slice();
        for (const pd in this._matrices3x3) Jd.setMatrix3x3(pd, this._matrices3x3[pd]);
        for (const pd in this._matrices2x2) Jd.setMatrix2x2(pd, this._matrices2x2[pd]);
        for (const pd in this._vectors2Arrays) Jd.setArray2(pd, this._vectors2Arrays[pd]);
        for (const pd in this._vectors3Arrays) Jd.setArray3(pd, this._vectors3Arrays[pd]);
        for (const pd in this._vectors4Arrays) Jd.setArray4(pd, this._vectors4Arrays[pd]);
        for (const pd in this._uniformBuffers) Jd.setUniformBuffer(pd, this._uniformBuffers[pd]);
        for (const pd in this._textureSamplers) Jd.setTextureSampler(pd, this._textureSamplers[pd]);
        for (const pd in this._storageBuffers) Jd.setStorageBuffer(pd, this._storageBuffers[pd]);
        return Jd
      }
      dispose(dd, Jd, kd) {
        if (Jd) {
          let dd;
          for (dd in this._textures) this._textures[dd].dispose();
          for (dd in this._internalTextures) this._internalTextures[dd].dispose();
          for (dd in this._textureArrays) {
            const Jd = this._textureArrays[dd];
            for (let dd = 0; dd < Jd.length; dd++) Jd[dd].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(dd, Jd, kd)
      }
      serialize() {
        const dd = pd.c.Serialize(this);
        let Jd;
        for (Jd in dd.customType = "BABYLON.ShaderMaterial", dd.uniqueId = this.uniqueId, dd.options = this._options, dd.shaderPath = this._shaderPath, dd.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, dd.stencil = this.stencil.serialize(), dd.textures = {}, this._textures) dd.textures[Jd] = this._textures[Jd].serialize();
        for (Jd in dd.textureArrays = {}, this._textureArrays) {
          dd.textureArrays[Jd] = [];
          const kd = this._textureArrays[Jd];
          for (let pd = 0; pd < kd.length; pd++) dd.textureArrays[Jd].push(kd[pd].serialize())
        }
        for (Jd in dd.ints = {}, this._ints) dd.ints[Jd] = this._ints[Jd];
        for (Jd in dd.uints = {}, this._uints) dd.uints[Jd] = this._uints[Jd];
        for (Jd in dd.floats = {}, this._floats) dd.floats[Jd] = this._floats[Jd];
        for (Jd in dd.floatsArrays = {}, this._floatsArrays) dd.floatsArrays[Jd] = this._floatsArrays[Jd];
        for (Jd in dd.colors3 = {}, this._colors3) {
          const kd = this._colors3[Jd];
          dd.colors3[Jd] = [kd.r, kd.g, kd.b]
        }
        for (Jd in dd.colors3Arrays = {}, this._colors3Arrays) dd.colors3Arrays[Jd] = this._colors3Arrays[Jd];
        for (Jd in dd.colors4 = {}, this._colors4) {
          const kd = this._colors4[Jd];
          dd.colors4[Jd] = [kd.r, kd.g, kd.b, kd.a]
        }
        for (Jd in dd.colors4Arrays = {}, this._colors4Arrays) dd.colors4Arrays[Jd] = this._colors4Arrays[Jd];
        for (Jd in dd.vectors2 = {}, this._vectors2) {
          const kd = this._vectors2[Jd];
          dd.vectors2[Jd] = [kd.x, kd.y]
        }
        for (Jd in dd.vectors3 = {}, this._vectors3) {
          const kd = this._vectors3[Jd];
          dd.vectors3[Jd] = [kd.x, kd.y, kd.z]
        }
        for (Jd in dd.vectors4 = {}, this._vectors4) {
          const kd = this._vectors4[Jd];
          dd.vectors4[Jd] = [kd.x, kd.y, kd.z, kd.w]
        }
        for (Jd in dd.quaternions = {}, this._quaternions) dd.quaternions[Jd] = this._quaternions[Jd].spd();
        for (Jd in dd.matrices = {}, this._matrices) dd.matrices[Jd] = this._matrices[Jd].spd();
        for (Jd in dd.matrixArray = {}, this._matrixArrays) dd.matrixArray[Jd] = this._matrixArrays[Jd];
        for (Jd in dd.matrices3x3 = {}, this._matrices3x3) dd.matrices3x3[Jd] = this._matrices3x3[Jd];
        for (Jd in dd.matrices2x2 = {}, this._matrices2x2) dd.matrices2x2[Jd] = this._matrices2x2[Jd];
        for (Jd in dd.vectors2Arrays = {}, this._vectors2Arrays) dd.vectors2Arrays[Jd] = this._vectors2Arrays[Jd];
        for (Jd in dd.vectors3Arrays = {}, this._vectors3Arrays) dd.vectors3Arrays[Jd] = this._vectors3Arrays[Jd];
        for (Jd in dd.vectors4Arrays = {}, this._vectors4Arrays) dd.vectors4Arrays[Jd] = this._vectors4Arrays[Jd];
        for (Jd in dd.quaternionsArrays = {}, this._quaternionsArrays) dd.quaternionsArrays[Jd] = this._quaternionsArrays[Jd];
        return dd
      }
    }

    function Id(dd, Jd, kd) {
      const Nd = pd.c.Parse((() => new Rd(dd.name, Jd, dd.shaderPath, dd.options, dd.storeEffectOnSubMeshes)), dd, Jd, kd);
      let Pd;
      for (Pd in dd.stencil && Nd.stencil.parse(dd.stencil, Jd, kd), dd.textures) Nd.setTexture(Pd, Zd.c.Parse(dd.textures[Pd], Jd, kd));
      for (Pd in dd.textureArrays) {
        const pd = dd.textureArrays[Pd],
          Wd = [];
        for (let dd = 0; dd < pd.length; dd++) Wd.push(Zd.c.Parse(pd[dd], Jd, kd));
        Nd.setTextureArray(Pd, Wd)
      }
      for (Pd in dd.ints) Nd.setInt(Pd, dd.ints[Pd]);
      for (Pd in dd.uints) Nd.setUInt(Pd, dd.uints[Pd]);
      for (Pd in dd.floats) Nd.setFloat(Pd, dd.floats[Pd]);
      for (Pd in dd.floatsArrays) Nd.setFloats(Pd, dd.floatsArrays[Pd]);
      for (Pd in dd.colors3) {
        const Jd = dd.colors3[Pd];
        Nd.setColor3(Pd, {
          r: Jd[0],
          g: Jd[1],
          b: Jd[2]
        })
      }
      for (Pd in dd.colors3Arrays) {
        const Jd = dd.colors3Arrays[Pd].reduce(((dd, Jd, kd) => (kd % 3 === 0 ? dd.push([Jd]) : dd[dd.length - 1].push(Jd), dd)), []).map((dd => ({
          r: dd[0],
          g: dd[1],
          b: dd[2]
        })));
        Nd.setColor3Array(Pd, Jd)
      }
      for (Pd in dd.colors4) {
        const Jd = dd.colors4[Pd];
        Nd.setColor4(Pd, {
          r: Jd[0],
          g: Jd[1],
          b: Jd[2],
          a: Jd[3]
        })
      }
      for (Pd in dd.colors4Arrays) {
        const Jd = dd.colors4Arrays[Pd].reduce(((dd, Jd, kd) => (kd % 4 === 0 ? dd.push([Jd]) : dd[dd.length - 1].push(Jd), dd)), []).map((dd => ({
          r: dd[0],
          g: dd[1],
          b: dd[2],
          a: dd[3]
        })));
        Nd.setColor4Array(Pd, Jd)
      }
      for (Pd in dd.vectors2) {
        const Jd = dd.vectors2[Pd];
        Nd.setVector2(Pd, {
          x: Jd[0],
          y: Jd[1]
        })
      }
      for (Pd in dd.vectors3) {
        const Jd = dd.vectors3[Pd];
        Nd.setVector3(Pd, {
          x: Jd[0],
          y: Jd[1],
          z: Jd[2]
        })
      }
      for (Pd in dd.vectors4) {
        const Jd = dd.vectors4[Pd];
        Nd.setVector4(Pd, {
          x: Jd[0],
          y: Jd[1],
          z: Jd[2],
          w: Jd[3]
        })
      }
      for (Pd in dd.quaternions) Nd.setQuaternion(Pd, Wd.d.FromArray(dd.quaternions[Pd]));
      for (Pd in dd.matrices) Nd.setMatrix(Pd, Wd.b.FromArray(dd.matrices[Pd]));
      const gd = Nd;
      for (Pd in dd.matrixArray) gd._matrixArrays[Pd] = new Float32Array(dd.matrixArray[Pd]);
      for (Pd in dd.matrices3x3) Nd.setMatrix3x3(Pd, dd.matrices3x3[Pd]);
      for (Pd in dd.matrices2x2) Nd.setMatrix2x2(Pd, dd.matrices2x2[Pd]);
      for (Pd in dd.vectors2Arrays) Nd.setArray2(Pd, dd.vectors2Arrays[Pd]);
      for (Pd in dd.vectors3Arrays) Nd.setArray3(Pd, dd.vectors3Arrays[Pd]);
      for (Pd in dd.vectors4Arrays) Nd.setArray4(Pd, dd.vectors4Arrays[Pd]);
      for (Pd in dd.quaternionsArrays) Nd.setArray4(Pd, dd.quaternionsArrays[Pd]);
      return Nd
    }
    async function Gd(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((Nd, Wd) => {
        const Pd = new Cd.b;
        Pd.addEventListener("readystatechange", (() => {
          if (4 == Pd.readyState)
            if (200 == Pd.status) {
              const Jd = Id(JSON.parse(Pd.responseText), kd || od.d.LastCreatedScene, pd);
              dd && (Jd.name = dd), Nd(Jd)
            } else Wd("Unable to load the ShaderMaterial")
        })), Pd.open("GET", Jd), Pd.send()
      }))
    }
    async function vd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const pd = this?.SnippetUrl ?? Rd.SnippetUrl;
      return await new Promise(((Nd, Wd) => {
        const Pd = new Cd.b;
        Pd.addEventListener("readystatechange", (() => {
          if (4 == Pd.readyState)
            if (200 == Pd.status) {
              const pd = JSON.parse(JSON.parse(Pd.responseText).jsonPayload),
                Wd = Id(JSON.parse(pd.shaderMaterial), Jd || od.d.LastCreatedScene, kd);
              Wd.snippetId = dd, Nd(Wd)
            } else Wd("Unable to load the snippet " + dd)
        })), Pd.open("GET", pd + "/" + dd.replace(/#/g, "/")), Pd.send()
      }))
    }
    Rd.SnippetUrl = "https://snippet.babylonjs.com";
    const xd = vd;
    let qd = !1;

    function Bd() {
      qd || (qd = !0, Rd.Parse = Id, Rd.ParseFromFileAsync = Gd, Rd.ParseFromSnippetAsync = vd, Rd.CreateFromSnippetAsync = xd, (0, Od.h)("BABYLON.ShaderMaterial", Rd))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);