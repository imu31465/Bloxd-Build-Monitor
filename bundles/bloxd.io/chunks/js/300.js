export const id = 300;
export const ids = [300];
export const modules = {
  42406: (dd, Od, md) => {
    md.d(Od, {
      c: () => Ed,
      e: () => gd,
      g: () => pd,
      j: () => Yd,
      n: () => Td,
      q: () => bd
    });
    var Wd = md(41948),
      Fd = md(42020),
      Rd = md(38636),
      Xd = md(42075),
      Kd = md(42412),
      hd = md(42271),
      vd = md(41969),
      Qd = md(42262),
      td = md(38651),
      od = md(42248),
      Nd = md(42242),
      qd = md(42285),
      Hd = md(38669);
    const yd = {
      effect: null,
      subMesh: null
    };
    class bd extends Qd.d {
      constructor(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(dd, Od, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new Rd.d, this._cachedWorldViewProjectionMatrix = new Rd.d, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = md, this._options = {
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
          ...Wd
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
      setTexture(dd, Od) {
        return -1 === this._options.samplers.indexOf(dd) && this._options.samplers.push(dd), this._textures[dd] = Od, this
      }
      setInternalTexture(dd, Od) {
        return -1 === this._options.samplers.indexOf(dd) && this._options.samplers.push(dd), this._internalTextures[dd] = Od, this
      }
      removeTexture(dd) {
        delete this._textures[dd]
      }
      setTextureArray(dd, Od) {
        return -1 === this._options.samplers.indexOf(dd) && this._options.samplers.push(dd), this._checkUniform(dd), this._textureArrays[dd] = Od, this
      }
      setExternalTexture(dd, Od) {
        return -1 === this._options.externalTextures.indexOf(dd) && this._options.externalTextures.push(dd), this._externalTextures[dd] = Od, this
      }
      setFloat(dd, Od) {
        return this._checkUniform(dd), this._floats[dd] = Od, this
      }
      setInt(dd, Od) {
        return this._checkUniform(dd), this._ints[dd] = Od, this
      }
      setUInt(dd, Od) {
        return this._checkUniform(dd), this._uints[dd] = Od, this
      }
      setFloats(dd, Od) {
        return this._checkUniform(dd), this._floatsArrays[dd] = Od, this
      }
      setColor3(dd, Od) {
        return this._checkUniform(dd), this._colors3[dd] = Od, this
      }
      setColor3Array(dd, Od) {
        return this._checkUniform(dd), this._colors3Arrays[dd] = Od.reduce(((dd, Od) => (dd.push(Od.r, Od.g, Od.b), dd)), []), this
      }
      setColor4(dd, Od) {
        return this._checkUniform(dd), this._colors4[dd] = Od, this
      }
      setColor4Array(dd, Od) {
        return this._checkUniform(dd), this._colors4Arrays[dd] = Od.reduce(((dd, Od) => (dd.push(Od.r, Od.g, Od.b, Od.a), dd)), []), this
      }
      setVector2(dd, Od) {
        return this._checkUniform(dd), this._vectors2[dd] = Od, this
      }
      setVector3(dd, Od) {
        return this._checkUniform(dd), this._vectors3[dd] = Od, this
      }
      setVector4(dd, Od) {
        return this._checkUniform(dd), this._vectors4[dd] = Od, this
      }
      setQuaternion(dd, Od) {
        return this._checkUniform(dd), this._quaternions[dd] = Od, this
      }
      setQuaternionArray(dd, Od) {
        return this._checkUniform(dd), this._quaternionsArrays[dd] = Od.reduce(((dd, Od) => (Od.toArray(dd, dd.length), dd)), []), this
      }
      setMatrix(dd, Od) {
        return this._checkUniform(dd), this._matrices[dd] = Od, this
      }
      setMatrices(dd, Od) {
        this._checkUniform(dd);
        const md = new Float32Array(16 * Od.length);
        for (let Wd = 0; Wd < Od.length; Wd++) {
          Od[Wd].copyToArray(md, 16 * Wd)
        }
        return this._matrixArrays[dd] = md, this
      }
      setMatrix3x3(dd, Od) {
        return this._checkUniform(dd), this._matrices3x3[dd] = Od, this
      }
      setMatrix2x2(dd, Od) {
        return this._checkUniform(dd), this._matrices2x2[dd] = Od, this
      }
      setArray2(dd, Od) {
        return this._checkUniform(dd), this._vectors2Arrays[dd] = Od, this
      }
      setArray3(dd, Od) {
        return this._checkUniform(dd), this._vectors3Arrays[dd] = Od, this
      }
      setArray4(dd, Od) {
        return this._checkUniform(dd), this._vectors4Arrays[dd] = Od, this
      }
      setUniformBuffer(dd, Od) {
        return -1 === this._options.uniformBuffers.indexOf(dd) && this._options.uniformBuffers.push(dd), this._uniformBuffers[dd] = Od, this
      }
      setTextureSampler(dd, Od) {
        return -1 === this._options.samplerObjects.indexOf(dd) && this._options.samplerObjects.push(dd), this._textureSamplers[dd] = Od, this
      }
      setStorageBuffer(dd, Od) {
        return -1 === this._options.storageBuffers.indexOf(dd) && this._options.storageBuffers.push(dd), this._storageBuffers[dd] = Od, this
      }
      setDefine(dd, Od) {
        const md = dd.trimEnd() + " ",
          Wd = this.options.defines.findIndex((Od => Od === dd || Od.startsWith(md)));
        return Wd >= 0 && this.options.defines.splice(Wd, 1), ("boolean" !== typeof Od || Od) && this.options.defines.push(md + Od), this
      }
      isReadyForSubMesh(dd, Od, md) {
        return this.isReady(dd, md, Od)
      }
      isReady(dd, Od, md) {
        const Wd = md && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const dd = Wd ? md._drawWrapper : this._drawWrapper;
          if (dd.effect && dd._wasPreviouslyReady && dd._wasPreviouslyUsingInstances === Od) return !0
        }
        const Rd = this.zV(),
          Kd = Rd.Iq(),
          vd = [],
          Qd = [];
        let td = null,
          Hd = this._shaderPath,
          bd = this._options.uniforms,
          Td = this._options.uniformBuffers,
          pd = this._options.samplers;
        Kd.getCaps().multiview && Rd.activeCamera && Rd.activeCamera.outputRenderTarget && Rd.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, vd.push("#define MULTIVIEW"), -1 !== bd.indexOf("viewProjection") && -1 === bd.indexOf("viewProjectionR") && bd.push("viewProjectionR"));
        for (let Fd = 0; Fd < this._options.defines.length; Fd++) {
          const dd = 0 === this._options.defines[Fd].indexOf("#define") ? this._options.defines[Fd] : `#define ${this._options.defines[Fd]}`;
          vd.push(dd)
        }
        for (let Fd = 0; Fd < this._options.attributes.length; Fd++) Qd.push(this._options.attributes[Fd]);
        if (dd && dd.isVerticesDataPresent(Xd.j.ColorKind) && (-1 === Qd.indexOf(Xd.j.ColorKind) && Qd.push(Xd.j.ColorKind), vd.push("#define VERTEXCOLOR")), Od && (vd.push("#define INSTANCES"), (0, Nd._)(Qd, this._materialHelperNeedsPreviousMatrices), dd?.hasThinInstances && (vd.push("#define THIN_INSTANCES"), dd && dd.isVerticesDataPresent(Xd.j.ColorInstanceKind) && (Qd.push(Xd.j.ColorInstanceKind), vd.push("#define INSTANCESCOLOR")))), dd && dd.useBones && dd.computeBonesUsingShaders && dd.skeleton) {
          Qd.push(Xd.j.MatricesIndicesKind), Qd.push(Xd.j.MatricesWeightsKind), dd.numBoneInfluencers > 4 && (Qd.push(Xd.j.MatricesIndicesExtraKind), Qd.push(Xd.j.MatricesWeightsExtraKind));
          const Od = dd.skeleton;
          vd.push("#define NUM_BONE_INFLUENCERS " + dd.numBoneInfluencers), td = new hd.e, td.addCPUSkinningFallback(0, dd), Od.isUsingTextureForMatrices ? (vd.push("#define BONETEXTURE"), -1 === bd.indexOf("boneTextureInfo") && bd.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (vd.push("#define BonesPerMesh " + (Od.bones.length + 1)), -1 === bd.indexOf("mBones") && bd.push("mBones"))
        } else vd.push("#define NUM_BONE_INFLUENCERS 0");
        let Yd = 0;
        const gd = dd ? dd.morphTargetManager : null;
        if (gd) {
          const Od = -1 !== vd.indexOf("#define UV1"),
            md = -1 !== vd.indexOf("#define UV2"),
            Wd = -1 !== vd.indexOf("#define TANGENT"),
            Fd = -1 !== vd.indexOf("#define NORMAL"),
            Rd = -1 !== vd.indexOf("#define VERTEXCOLOR");
          Yd = (0, Nd.B)(gd, vd, Qd, dd, !0, Fd, Wd, Od, md, Rd), gd.isUsingTextureForTargets && (-1 === bd.indexOf("morphTargetTextureIndices") && bd.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), Yd > 0 && (bd = bd.slice(), bd.push("morphTargetInfluences"), bd.push("morphTargetCount"), bd.push("morphTargetTextureInfo"), bd.push("morphTargetTextureIndices"))
        } else vd.push("#define NUM_MORPH_INFLUENCERS 0");
        if (dd) {
          const md = dd.bakedVertexAnimationManager;
          md && md.isEnabled && (vd.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === bd.indexOf("bakedVertexAnimationSettings") && bd.push("bakedVertexAnimationSettings"), -1 === bd.indexOf("bakedVertexAnimationTextureSizeInverted") && bd.push("bakedVertexAnimationTextureSizeInverted"), -1 === bd.indexOf("bakedVertexAnimationTime") && bd.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), Od && Qd.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const Fd in this._textures)
          if (!this._textures[Fd].isReady()) return !1;
        for (const Fd in this._internalTextures)
          if (!this._internalTextures[Fd].isReady) return !1;
        dd && this.needAlphaTestingForMesh(dd) && vd.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, od.b)(bd), (0, od.k)(this, Rd, vd)), Rd.fogEnabled && dd?.applyFog && Rd.fogMode !== Fd.c.FOGMODE_NONE && (vd.push("#define FOG"), -1 === bd.indexOf("view") && bd.push("view"), -1 === bd.indexOf("vFogInfos") && bd.push("vFogInfos"), -1 === bd.indexOf("vFogColor") && bd.push("vFogColor")), this._useLogarithmicDepth && (vd.push("#define LOGARITHMICDEPTH"), -1 === bd.indexOf("logarithmicDepthConstant") && bd.push("logarithmicDepthConstant"));
        const wd = md ? md.getRenderingMesh() : dd;
        if (wd && this.useVertexPulling) {
          const dd = wd.geometry;
          dd && (this._vertexPullingMetadata = (0, qd.f)(dd), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((dd, Od) => {
            bd.push(`vp_${Od}_info`)
          }))), vd.push("#define USE_VERTEX_PULLING");
          const Od = wd.geometry?.getIndexBuffer();
          Od && !wd.isUnIndexed && (vd.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), Od.is32Bits && vd.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (bd = bd.slice(), Td = Td.slice(), pd = pd.slice(), Hd = this.customShaderNameResolve(this.name, bd, Td, pd, vd, Qd));
        const Ed = Wd ? md._getDrawWrapper(void 0, !0) : this._drawWrapper,
          Jd = Ed?.effect ?? null,
          Ud = Ed?.defines ?? null,
          xd = vd.join("\n");
        let Bd = Jd;
        return Ud !== xd && (Bd = Kd.createEffect(Hd, {
          attributes: Qd,
          uniformsNames: bd,
          uniformBuffersNames: Td,
          samplers: pd,
          defines: xd,
          fallbacks: td,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: Yd
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, Kd), Wd ? md.setEffect(Bd, xd, this._materialContext) : Ed && Ed.setEffect(Bd, xd), this._onEffectCreatedObservable && (yd.effect = Bd, yd.subMesh = md ?? dd?.ZE[0] ?? null, this._onEffectCreatedObservable.notifyObservers(yd))), Ed._wasPreviouslyUsingInstances = !!Od, !!Bd?.isReady() && (Jd !== Bd && Rd.resetCachedMaterial(), Ed._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(dd, Od) {
        const md = Od ?? this.getEffect();
        if (!md) return;
        const Wd = this._options.uniforms; - 1 !== Wd.indexOf("world") && md.setMatrix("world", dd);
        const Fd = this.zV(); - 1 !== Wd.indexOf("worldView") && (dd.multiplyToRef(Fd.getViewMatrix(), this._cachedWorldViewMatrix), md.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Wd.indexOf("worldViewProjection") && (dd.multiplyToRef(Fd.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), md.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== Wd.indexOf("view") && md.setMatrix("view", Fd.getViewMatrix())
      }
      bindForSubMesh(dd, Od, md) {
        this.bind(dd, Od, md._drawWrapperOverride?.effect, md)
      }
      bind(dd, Od, md, Wd) {
        const Fd = Wd && this._storeEffectOnSubMeshes,
          Rd = md ?? (Fd ? Wd.effect : this.getEffect());
        if (!Rd) return;
        const Xd = this.zV();
        this._activeEffect = Rd, this.bindOnlyWorldMatrix(dd, md);
        const Kd = this._options.uniformBuffers;
        let hd = !1;
        if (Rd && Kd && Kd.length > 0 && Xd.Iq().supportsUniformBuffers)
          for (let Qd = 0; Qd < Kd.length; ++Qd) {
            switch (Kd[Qd]) {
              case "Mesh":
                Od && (Od.getMeshUniformBuffer().bindToEffect(Rd, "Mesh"), Od.transferToEffect(dd));
                break;
              case "Scene":
                (0, Nd.p)(Rd, Xd.getSceneUniformBuffer()), Xd.finalizeSceneUbo(), hd = !0
            }
          }
        const vd = Od && Fd ? this._mustRebind(Xd, Rd, Wd, Od.visibility) : Xd.getCachedMaterial() !== this;
        if (Rd && vd) {
          let dd;
          for (dd in hd || -1 === this._options.uniforms.indexOf("view") || Rd.setMatrix("view", Xd.getViewMatrix()), hd || -1 === this._options.uniforms.indexOf("projection") || Rd.setMatrix("projection", Xd.getProjectionMatrix()), hd || -1 === this._options.uniforms.indexOf("viewProjection") || (Rd.setMatrix("viewProjection", Xd.getTransformMatrix()), this._multiview && Rd.setMatrix("viewProjectionR", Xd._transformMatrixR)), Xd.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && Rd.setVector3("cameraPosition", Xd.activeCamera.globalPosition), (0, Nd.d)(Od, Rd), (0, od.e)(Rd, this, Xd), this._vertexPullingMetadata && (0, qd.e)(Rd, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, Nd.m)(Fd ? Wd.materialDefines : Rd.defines, Rd, Xd), Od && (0, Nd.f)(Xd, Od, Rd), this._textures) Rd.setTexture(dd, this._textures[dd]);
          for (dd in this._internalTextures) Rd._bindTexture(dd, this._internalTextures[dd]);
          for (dd in this._textureArrays) Rd.setTextureArray(dd, this._textureArrays[dd]);
          for (dd in this._ints) Rd.setInt(dd, this._ints[dd]);
          for (dd in this._uints) Rd.setUInt(dd, this._uints[dd]);
          for (dd in this._floats) Rd.setFloat(dd, this._floats[dd]);
          for (dd in this._floatsArrays) Rd.setArray(dd, this._floatsArrays[dd]);
          for (dd in this._colors3) Rd.setColor3(dd, this._colors3[dd]);
          for (dd in this._colors3Arrays) Rd.setArray3(dd, this._colors3Arrays[dd]);
          for (dd in this._colors4) {
            const Od = this._colors4[dd];
            Rd.setFloat4(dd, Od.r, Od.g, Od.b, Od.a)
          }
          for (dd in this._colors4Arrays) Rd.setArray4(dd, this._colors4Arrays[dd]);
          for (dd in this._vectors2) Rd.setVector2(dd, this._vectors2[dd]);
          for (dd in this._vectors3) Rd.setVector3(dd, this._vectors3[dd]);
          for (dd in this._vectors4) Rd.setVector4(dd, this._vectors4[dd]);
          for (dd in this._quaternions) Rd.setQuaternion(dd, this._quaternions[dd]);
          for (dd in this._matrices) Rd.setMatrix(dd, this._matrices[dd]);
          for (dd in this._matrixArrays) Rd.setMatrices(dd, this._matrixArrays[dd]);
          for (dd in this._matrices3x3) Rd.setMatrix3x3(dd, this._matrices3x3[dd]);
          for (dd in this._matrices2x2) Rd.setMatrix2x2(dd, this._matrices2x2[dd]);
          for (dd in this._vectors2Arrays) Rd.setArray2(dd, this._vectors2Arrays[dd]);
          for (dd in this._vectors3Arrays) Rd.setArray3(dd, this._vectors3Arrays[dd]);
          for (dd in this._vectors4Arrays) Rd.setArray4(dd, this._vectors4Arrays[dd]);
          for (dd in this._quaternionsArrays) Rd.setArray4(dd, this._quaternionsArrays[dd]);
          for (dd in this._uniformBuffers) {
            const Od = this._uniformBuffers[dd].getBuffer();
            Od && Rd.bindUniformBuffer(Od, dd)
          }
          const md = Xd.Iq(),
            Kd = md.setExternalTexture;
          if (Kd)
            for (dd in this._externalTextures) Kd.call(md, dd, this._externalTextures[dd]);
          const vd = md.setTextureSampler;
          if (vd)
            for (dd in this._textureSamplers) vd.call(md, dd, this._textureSamplers[dd]);
          const Qd = md.setStorageBuffer;
          if (Qd)
            for (dd in this._storageBuffers) Qd.call(md, dd, this._storageBuffers[dd])
        }
        if (Rd && Od && (vd || !this.isFrozen)) {
          (0, Nd.n)(Od, Rd), Od.morphTargetManager && Od.morphTargetManager.isUsingTextureForTargets && Od.morphTargetManager._bind(Rd);
          const dd = Od.bakedVertexAnimationManager;
          if (dd && dd.isEnabled) {
            const dd = Fd ? Wd._drawWrapper : this._drawWrapper;
            Od.bakedVertexAnimationManager?.bind(Rd, !!dd._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(Od, Rd, Wd)
      }
      getActiveTextures() {
        const dd = super.getActiveTextures();
        for (const Od in this._textures) dd.push(this._textures[Od]);
        for (const Od in this._textureArrays) {
          const md = this._textureArrays[Od];
          for (let Od = 0; Od < md.length; Od++) dd.push(md[Od])
        }
        return dd
      }
      hasTexture(dd) {
        if (super.hasTexture(dd)) return !0;
        for (const md in this._textures)
          if (this._textures[md] === dd) return !0;
        const Od = dd.getInternalTexture();
        for (const md in this._internalTextures)
          if (this._internalTextures[md] === Od) return !0;
        for (const md in this._textureArrays) {
          const Od = this._textureArrays[md];
          for (let md = 0; md < Od.length; md++)
            if (Od[md] === dd) return !0
        }
        return !1
      }
      clone(dd) {
        const Od = Wd.b.Clone((() => new bd(dd, this.zV(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        Od.name = dd, Od.id = dd, "object" === typeof Od._shaderPath && (Od._shaderPath = {
          ...Od._shaderPath
        }), this._options = {
          ...this._options
        };
        const md = Object.keys(this._options);
        for (const Wd of md) {
          const dd = this._options[Wd];
          Array.isArray(dd) && (this._options[Wd] = dd.slice(0))
        }
        this.stencil.copyTo(Od.stencil);
        for (const Wd in this._textures) Od.setTexture(Wd, this._textures[Wd]);
        for (const Wd in this._internalTextures) Od.setInternalTexture(Wd, this._internalTextures[Wd]);
        for (const Wd in this._textureArrays) Od.setTextureArray(Wd, this._textureArrays[Wd]);
        for (const Wd in this._externalTextures) Od.setExternalTexture(Wd, this._externalTextures[Wd]);
        for (const Wd in this._ints) Od.setInt(Wd, this._ints[Wd]);
        for (const Wd in this._uints) Od.setUInt(Wd, this._uints[Wd]);
        for (const Wd in this._floats) Od.setFloat(Wd, this._floats[Wd]);
        for (const Wd in this._floatsArrays) Od.setFloats(Wd, this._floatsArrays[Wd]);
        for (const Wd in this._colors3) Od.setColor3(Wd, this._colors3[Wd]);
        for (const Wd in this._colors3Arrays) Od._colors3Arrays[Wd] = this._colors3Arrays[Wd];
        for (const Wd in this._colors4) Od.setColor4(Wd, this._colors4[Wd]);
        for (const Wd in this._colors4Arrays) Od._colors4Arrays[Wd] = this._colors4Arrays[Wd];
        for (const Wd in this._vectors2) Od.setVector2(Wd, this._vectors2[Wd]);
        for (const Wd in this._vectors3) Od.setVector3(Wd, this._vectors3[Wd]);
        for (const Wd in this._vectors4) Od.setVector4(Wd, this._vectors4[Wd]);
        for (const Wd in this._quaternions) Od.setQuaternion(Wd, this._quaternions[Wd]);
        for (const Wd in this._quaternionsArrays) Od._quaternionsArrays[Wd] = this._quaternionsArrays[Wd];
        for (const Wd in this._matrices) Od.setMatrix(Wd, this._matrices[Wd]);
        for (const Wd in this._matrixArrays) Od._matrixArrays[Wd] = this._matrixArrays[Wd].slice();
        for (const Wd in this._matrices3x3) Od.setMatrix3x3(Wd, this._matrices3x3[Wd]);
        for (const Wd in this._matrices2x2) Od.setMatrix2x2(Wd, this._matrices2x2[Wd]);
        for (const Wd in this._vectors2Arrays) Od.setArray2(Wd, this._vectors2Arrays[Wd]);
        for (const Wd in this._vectors3Arrays) Od.setArray3(Wd, this._vectors3Arrays[Wd]);
        for (const Wd in this._vectors4Arrays) Od.setArray4(Wd, this._vectors4Arrays[Wd]);
        for (const Wd in this._uniformBuffers) Od.setUniformBuffer(Wd, this._uniformBuffers[Wd]);
        for (const Wd in this._textureSamplers) Od.setTextureSampler(Wd, this._textureSamplers[Wd]);
        for (const Wd in this._storageBuffers) Od.setStorageBuffer(Wd, this._storageBuffers[Wd]);
        return Od
      }
      dispose(dd, Od, md) {
        if (Od) {
          let dd;
          for (dd in this._textures) this._textures[dd].dispose();
          for (dd in this._internalTextures) this._internalTextures[dd].dispose();
          for (dd in this._textureArrays) {
            const Od = this._textureArrays[dd];
            for (let dd = 0; dd < Od.length; dd++) Od[dd].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(dd, Od, md)
      }
      serialize() {
        const dd = Wd.b.Serialize(this);
        let Od;
        for (Od in dd.customType = "BABYLON.ShaderMaterial", dd.uniqueId = this.uniqueId, dd.options = this._options, dd.shaderPath = this._shaderPath, dd.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, dd.stencil = this.stencil.serialize(), dd.textures = {}, this._textures) dd.textures[Od] = this._textures[Od].serialize();
        for (Od in dd.textureArrays = {}, this._textureArrays) {
          dd.textureArrays[Od] = [];
          const md = this._textureArrays[Od];
          for (let Wd = 0; Wd < md.length; Wd++) dd.textureArrays[Od].push(md[Wd].serialize())
        }
        for (Od in dd.ints = {}, this._ints) dd.ints[Od] = this._ints[Od];
        for (Od in dd.uints = {}, this._uints) dd.uints[Od] = this._uints[Od];
        for (Od in dd.floats = {}, this._floats) dd.floats[Od] = this._floats[Od];
        for (Od in dd.floatsArrays = {}, this._floatsArrays) dd.floatsArrays[Od] = this._floatsArrays[Od];
        for (Od in dd.colors3 = {}, this._colors3) {
          const md = this._colors3[Od];
          dd.colors3[Od] = [md.r, md.g, md.b]
        }
        for (Od in dd.colors3Arrays = {}, this._colors3Arrays) dd.colors3Arrays[Od] = this._colors3Arrays[Od];
        for (Od in dd.colors4 = {}, this._colors4) {
          const md = this._colors4[Od];
          dd.colors4[Od] = [md.r, md.g, md.b, md.a]
        }
        for (Od in dd.colors4Arrays = {}, this._colors4Arrays) dd.colors4Arrays[Od] = this._colors4Arrays[Od];
        for (Od in dd.vectors2 = {}, this._vectors2) {
          const md = this._vectors2[Od];
          dd.vectors2[Od] = [md.x, md.y]
        }
        for (Od in dd.vectors3 = {}, this._vectors3) {
          const md = this._vectors3[Od];
          dd.vectors3[Od] = [md.x, md.y, md.z]
        }
        for (Od in dd.vectors4 = {}, this._vectors4) {
          const md = this._vectors4[Od];
          dd.vectors4[Od] = [md.x, md.y, md.z, md.w]
        }
        for (Od in dd.quaternions = {}, this._quaternions) dd.quaternions[Od] = this._quaternions[Od].RRd();
        for (Od in dd.matrices = {}, this._matrices) dd.matrices[Od] = this._matrices[Od].RRd();
        for (Od in dd.matrixArray = {}, this._matrixArrays) dd.matrixArray[Od] = this._matrixArrays[Od];
        for (Od in dd.matrices3x3 = {}, this._matrices3x3) dd.matrices3x3[Od] = this._matrices3x3[Od];
        for (Od in dd.matrices2x2 = {}, this._matrices2x2) dd.matrices2x2[Od] = this._matrices2x2[Od];
        for (Od in dd.vectors2Arrays = {}, this._vectors2Arrays) dd.vectors2Arrays[Od] = this._vectors2Arrays[Od];
        for (Od in dd.vectors3Arrays = {}, this._vectors3Arrays) dd.vectors3Arrays[Od] = this._vectors3Arrays[Od];
        for (Od in dd.vectors4Arrays = {}, this._vectors4Arrays) dd.vectors4Arrays[Od] = this._vectors4Arrays[Od];
        for (Od in dd.quaternionsArrays = {}, this._quaternionsArrays) dd.quaternionsArrays[Od] = this._quaternionsArrays[Od];
        return dd
      }
    }

    function Td(dd, Od, md) {
      const Fd = Wd.b.Parse((() => new bd(dd.name, Od, dd.shaderPath, dd.options, dd.storeEffectOnSubMeshes)), dd, Od, md);
      let Xd;
      for (Xd in dd.stencil && Fd.stencil.parse(dd.stencil, Od, md), dd.textures) Fd.setTexture(Xd, Kd.f.Parse(dd.textures[Xd], Od, md));
      for (Xd in dd.textureArrays) {
        const Wd = dd.textureArrays[Xd],
          Rd = [];
        for (let dd = 0; dd < Wd.length; dd++) Rd.push(Kd.f.Parse(Wd[dd], Od, md));
        Fd.setTextureArray(Xd, Rd)
      }
      for (Xd in dd.ints) Fd.setInt(Xd, dd.ints[Xd]);
      for (Xd in dd.uints) Fd.setUInt(Xd, dd.uints[Xd]);
      for (Xd in dd.floats) Fd.setFloat(Xd, dd.floats[Xd]);
      for (Xd in dd.floatsArrays) Fd.setFloats(Xd, dd.floatsArrays[Xd]);
      for (Xd in dd.colors3) {
        const Od = dd.colors3[Xd];
        Fd.setColor3(Xd, {
          r: Od[0],
          g: Od[1],
          b: Od[2]
        })
      }
      for (Xd in dd.colors3Arrays) {
        const Od = dd.colors3Arrays[Xd].reduce(((dd, Od, md) => (md % 3 === 0 ? dd.push([Od]) : dd[dd.length - 1].push(Od), dd)), []).map((dd => ({
          r: dd[0],
          g: dd[1],
          b: dd[2]
        })));
        Fd.setColor3Array(Xd, Od)
      }
      for (Xd in dd.colors4) {
        const Od = dd.colors4[Xd];
        Fd.setColor4(Xd, {
          r: Od[0],
          g: Od[1],
          b: Od[2],
          a: Od[3]
        })
      }
      for (Xd in dd.colors4Arrays) {
        const Od = dd.colors4Arrays[Xd].reduce(((dd, Od, md) => (md % 4 === 0 ? dd.push([Od]) : dd[dd.length - 1].push(Od), dd)), []).map((dd => ({
          r: dd[0],
          g: dd[1],
          b: dd[2],
          a: dd[3]
        })));
        Fd.setColor4Array(Xd, Od)
      }
      for (Xd in dd.vectors2) {
        const Od = dd.vectors2[Xd];
        Fd.setVector2(Xd, {
          x: Od[0],
          y: Od[1]
        })
      }
      for (Xd in dd.vectors3) {
        const Od = dd.vectors3[Xd];
        Fd.setVector3(Xd, {
          x: Od[0],
          y: Od[1],
          z: Od[2]
        })
      }
      for (Xd in dd.vectors4) {
        const Od = dd.vectors4[Xd];
        Fd.setVector4(Xd, {
          x: Od[0],
          y: Od[1],
          z: Od[2],
          w: Od[3]
        })
      }
      for (Xd in dd.quaternions) Fd.setQuaternion(Xd, Rd.e.FromArray(dd.quaternions[Xd]));
      for (Xd in dd.matrices) Fd.setMatrix(Xd, Rd.d.FromArray(dd.matrices[Xd]));
      const hd = Fd;
      for (Xd in dd.matrixArray) hd._matrixArrays[Xd] = new Float32Array(dd.matrixArray[Xd]);
      for (Xd in dd.matrices3x3) Fd.setMatrix3x3(Xd, dd.matrices3x3[Xd]);
      for (Xd in dd.matrices2x2) Fd.setMatrix2x2(Xd, dd.matrices2x2[Xd]);
      for (Xd in dd.vectors2Arrays) Fd.setArray2(Xd, dd.vectors2Arrays[Xd]);
      for (Xd in dd.vectors3Arrays) Fd.setArray3(Xd, dd.vectors3Arrays[Xd]);
      for (Xd in dd.vectors4Arrays) Fd.setArray4(Xd, dd.vectors4Arrays[Xd]);
      for (Xd in dd.quaternionsArrays) Fd.setArray4(Xd, dd.quaternionsArrays[Xd]);
      return Fd
    }
    async function pd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((Fd, Rd) => {
        const Xd = new vd.e;
        Xd.addEventListener("readystatechange", (() => {
          if (4 == Xd.readyState)
            if (200 == Xd.status) {
              const Od = Td(JSON.parse(Xd.responseText), md || td.e.LastCreatedScene, Wd);
              dd && (Od.name = dd), Fd(Od)
            } else Rd("Unable to load the ShaderMaterial")
        })), Xd.open("GET", Od), Xd.send()
      }))
    }
    async function Yd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Wd = this?.SnippetUrl ?? bd.SnippetUrl;
      return await new Promise(((Fd, Rd) => {
        const Xd = new vd.e;
        Xd.addEventListener("readystatechange", (() => {
          if (4 == Xd.readyState)
            if (200 == Xd.status) {
              const Wd = JSON.parse(JSON.parse(Xd.responseText).jsonPayload),
                Rd = Td(JSON.parse(Wd.shaderMaterial), Od || td.e.LastCreatedScene, md);
              Rd.snippetId = dd, Fd(Rd)
            } else Rd("Unable to load the snippet " + dd)
        })), Xd.open("GET", Wd + "/" + dd.replace(/#/g, "/")), Xd.send()
      }))
    }
    bd.SnippetUrl = "https://snippet.babylonjs.com";
    const gd = Yd;
    let wd = !1;

    function Ed() {
      wd || (wd = !0, bd.Parse = Td, bd.ParseFromFileAsync = pd, bd.ParseFromSnippetAsync = Yd, bd.CreateFromSnippetAsync = gd, (0, Hd.e)("BABYLON.ShaderMaterial", bd))
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);