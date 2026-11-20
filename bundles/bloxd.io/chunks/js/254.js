export const id = 254;
export const ids = [254];
export const modules = {
  39887: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Ok,
      c: () => Yk,
      f: () => vk,
      h: () => ik,
      k: () => Wk,
      n: () => mk
    });
    var Rk = Bk(39414),
      tk = Bk(39489),
      ak = Bk(36758),
      Xk = Bk(39541),
      bk = Bk(39895),
      wk = Bk(39762),
      dk = Bk(39445),
      sk = Bk(39753),
      Vk = Bk(36772),
      Jk = Bk(39741),
      Ak = Bk(39735),
      ek = Bk(39774),
      yk = Bk(36798);
    const fk = {
      effect: null,
      subMesh: null
    };
    class mk extends sk.d {
      constructor(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(kk, Fk, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new ak.c, this._cachedWorldViewProjectionMatrix = new ak.c, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = Bk, this._options = {
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
          ...Rk
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(kk) {
        this._shaderPath = kk
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
      _checkUniform(kk) {
        -1 === this._options.uniforms.indexOf(kk) && this._options.uniforms.push(kk)
      }
      setTexture(kk, Fk) {
        return -1 === this._options.samplers.indexOf(kk) && this._options.samplers.push(kk), this._textures[kk] = Fk, this
      }
      setInternalTexture(kk, Fk) {
        return -1 === this._options.samplers.indexOf(kk) && this._options.samplers.push(kk), this._internalTextures[kk] = Fk, this
      }
      removeTexture(kk) {
        delete this._textures[kk]
      }
      setTextureArray(kk, Fk) {
        return -1 === this._options.samplers.indexOf(kk) && this._options.samplers.push(kk), this._checkUniform(kk), this._textureArrays[kk] = Fk, this
      }
      setExternalTexture(kk, Fk) {
        return -1 === this._options.externalTextures.indexOf(kk) && this._options.externalTextures.push(kk), this._externalTextures[kk] = Fk, this
      }
      setFloat(kk, Fk) {
        return this._checkUniform(kk), this._floats[kk] = Fk, this
      }
      setInt(kk, Fk) {
        return this._checkUniform(kk), this._ints[kk] = Fk, this
      }
      setUInt(kk, Fk) {
        return this._checkUniform(kk), this._uints[kk] = Fk, this
      }
      setFloats(kk, Fk) {
        return this._checkUniform(kk), this._floatsArrays[kk] = Fk, this
      }
      setColor3(kk, Fk) {
        return this._checkUniform(kk), this._colors3[kk] = Fk, this
      }
      setColor3Array(kk, Fk) {
        return this._checkUniform(kk), this._colors3Arrays[kk] = Fk.reduce(((kk, Fk) => (kk.push(Fk.r, Fk.g, Fk.b), kk)), []), this
      }
      setColor4(kk, Fk) {
        return this._checkUniform(kk), this._colors4[kk] = Fk, this
      }
      setColor4Array(kk, Fk) {
        return this._checkUniform(kk), this._colors4Arrays[kk] = Fk.reduce(((kk, Fk) => (kk.push(Fk.r, Fk.g, Fk.b, Fk.a), kk)), []), this
      }
      setVector2(kk, Fk) {
        return this._checkUniform(kk), this._vectors2[kk] = Fk, this
      }
      setVector3(kk, Fk) {
        return this._checkUniform(kk), this._vectors3[kk] = Fk, this
      }
      setVector4(kk, Fk) {
        return this._checkUniform(kk), this._vectors4[kk] = Fk, this
      }
      setQuaternion(kk, Fk) {
        return this._checkUniform(kk), this._quaternions[kk] = Fk, this
      }
      setQuaternionArray(kk, Fk) {
        return this._checkUniform(kk), this._quaternionsArrays[kk] = Fk.reduce(((kk, Fk) => (Fk.toArray(kk, kk.length), kk)), []), this
      }
      setMatrix(kk, Fk) {
        return this._checkUniform(kk), this._matrices[kk] = Fk, this
      }
      setMatrices(kk, Fk) {
        this._checkUniform(kk);
        const Bk = new Float32Array(16 * Fk.length);
        for (let Rk = 0; Rk < Fk.length; Rk++) {
          Fk[Rk].copyToArray(Bk, 16 * Rk)
        }
        return this._matrixArrays[kk] = Bk, this
      }
      setMatrix3x3(kk, Fk) {
        return this._checkUniform(kk), this._matrices3x3[kk] = Fk, this
      }
      setMatrix2x2(kk, Fk) {
        return this._checkUniform(kk), this._matrices2x2[kk] = Fk, this
      }
      setArray2(kk, Fk) {
        return this._checkUniform(kk), this._vectors2Arrays[kk] = Fk, this
      }
      setArray3(kk, Fk) {
        return this._checkUniform(kk), this._vectors3Arrays[kk] = Fk, this
      }
      setArray4(kk, Fk) {
        return this._checkUniform(kk), this._vectors4Arrays[kk] = Fk, this
      }
      setUniformBuffer(kk, Fk) {
        return -1 === this._options.uniformBuffers.indexOf(kk) && this._options.uniformBuffers.push(kk), this._uniformBuffers[kk] = Fk, this
      }
      setTextureSampler(kk, Fk) {
        return -1 === this._options.samplerObjects.indexOf(kk) && this._options.samplerObjects.push(kk), this._textureSamplers[kk] = Fk, this
      }
      setStorageBuffer(kk, Fk) {
        return -1 === this._options.storageBuffers.indexOf(kk) && this._options.storageBuffers.push(kk), this._storageBuffers[kk] = Fk, this
      }
      setDefine(kk, Fk) {
        const Bk = kk.trimEnd() + " ",
          Rk = this.options.defines.findIndex((Fk => Fk === kk || Fk.startsWith(Bk)));
        return Rk >= 0 && this.options.defines.splice(Rk, 1), ("boolean" !== typeof Fk || Fk) && this.options.defines.push(Bk + Fk), this
      }
      isReadyForSubMesh(kk, Fk, Bk) {
        return this.isReady(kk, Bk, Fk)
      }
      isReady(kk, Fk, Bk) {
        const Rk = Bk && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const kk = Rk ? Bk._drawWrapper : this._drawWrapper;
          if (kk.effect && kk._wasPreviouslyReady && kk._wasPreviouslyUsingInstances === Fk) return !0
        }
        const ak = this.XN(),
          bk = ak.ne(),
          dk = [],
          sk = [];
        let Vk = null,
          yk = this._shaderPath,
          mk = this._options.uniforms,
          Wk = this._options.uniformBuffers,
          vk = this._options.samplers;
        bk.getCaps().multiview && ak.activeCamera && ak.activeCamera.outputRenderTarget && ak.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, dk.push("#define MULTIVIEW"), -1 !== mk.indexOf("viewProjection") && -1 === mk.indexOf("viewProjectionR") && mk.push("viewProjectionR"));
        for (let tk = 0; tk < this._options.defines.length; tk++) {
          const kk = 0 === this._options.defines[tk].indexOf("#define") ? this._options.defines[tk] : `#define ${this._options.defines[tk]}`;
          dk.push(kk)
        }
        for (let tk = 0; tk < this._options.attributes.length; tk++) sk.push(this._options.attributes[tk]);
        if (kk && kk.isVerticesDataPresent(Xk.n.ColorKind) && (-1 === sk.indexOf(Xk.n.ColorKind) && sk.push(Xk.n.ColorKind), dk.push("#define VERTEXCOLOR")), Fk && (dk.push("#define INSTANCES"), (0, Ak.pb)(sk, this._materialHelperNeedsPreviousMatrices), kk?.hasThinInstances && (dk.push("#define THIN_INSTANCES"), kk && kk.isVerticesDataPresent(Xk.n.ColorInstanceKind) && (sk.push(Xk.n.ColorInstanceKind), dk.push("#define INSTANCESCOLOR")))), kk && kk.useBones && kk.computeBonesUsingShaders && kk.skeleton) {
          sk.push(Xk.n.MatricesIndicesKind), sk.push(Xk.n.MatricesWeightsKind), kk.numBoneInfluencers > 4 && (sk.push(Xk.n.MatricesIndicesExtraKind), sk.push(Xk.n.MatricesWeightsExtraKind));
          const Fk = kk.skeleton;
          dk.push("#define NUM_BONE_INFLUENCERS " + kk.numBoneInfluencers), Vk = new wk.c, Vk.addCPUSkinningFallback(0, kk), Fk.isUsingTextureForMatrices ? (dk.push("#define BONETEXTURE"), -1 === mk.indexOf("boneTextureInfo") && mk.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (dk.push("#define BonesPerMesh " + (Fk.bones.length + 1)), -1 === mk.indexOf("mBones") && mk.push("mBones"))
        } else dk.push("#define NUM_BONE_INFLUENCERS 0");
        let ik = 0;
        const Yk = kk ? kk.morphTargetManager : null;
        if (Yk) {
          const Fk = -1 !== dk.indexOf("#define UV1"),
            Bk = -1 !== dk.indexOf("#define UV2"),
            Rk = -1 !== dk.indexOf("#define TANGENT"),
            tk = -1 !== dk.indexOf("#define NORMAL"),
            ak = -1 !== dk.indexOf("#define VERTEXCOLOR");
          ik = (0, Ak.R)(Yk, dk, sk, kk, !0, tk, Rk, Fk, Bk, ak), Yk.isUsingTextureForTargets && (-1 === mk.indexOf("morphTargetTextureIndices") && mk.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), ik > 0 && (mk = mk.slice(), mk.push("morphTargetInfluences"), mk.push("morphTargetCount"), mk.push("morphTargetTextureInfo"), mk.push("morphTargetTextureIndices"))
        } else dk.push("#define NUM_MORPH_INFLUENCERS 0");
        if (kk) {
          const Bk = kk.bakedVertexAnimationManager;
          Bk && Bk.isEnabled && (dk.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === mk.indexOf("bakedVertexAnimationSettings") && mk.push("bakedVertexAnimationSettings"), -1 === mk.indexOf("bakedVertexAnimationTextureSizeInverted") && mk.push("bakedVertexAnimationTextureSizeInverted"), -1 === mk.indexOf("bakedVertexAnimationTime") && mk.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), Fk && sk.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const tk in this._textures)
          if (!this._textures[tk].isReady()) return !1;
        for (const tk in this._internalTextures)
          if (!this._internalTextures[tk].isReady) return !1;
        kk && this.needAlphaTestingForMesh(kk) && dk.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, Jk.b)(mk), (0, Jk.i)(this, ak, dk)), ak.fogEnabled && kk?.applyFog && ak.fogMode !== tk.c.FOGMODE_NONE && (dk.push("#define FOG"), -1 === mk.indexOf("view") && mk.push("view"), -1 === mk.indexOf("vFogInfos") && mk.push("vFogInfos"), -1 === mk.indexOf("vFogColor") && mk.push("vFogColor")), this._useLogarithmicDepth && (dk.push("#define LOGARITHMICDEPTH"), -1 === mk.indexOf("logarithmicDepthConstant") && mk.push("logarithmicDepthConstant"));
        const Lk = Bk ? Bk.getRenderingMesh() : kk;
        if (Lk && this.useVertexPulling) {
          const kk = Lk.geometry;
          kk && (this._vertexPullingMetadata = (0, ek.f)(kk), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((kk, Fk) => {
            mk.push(`vp_${Fk}_info`)
          }))), dk.push("#define USE_VERTEX_PULLING");
          const Fk = Lk.geometry?.getIndexBuffer();
          Fk && !Lk.isUnIndexed && (dk.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), Fk.is32Bits && dk.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (mk = mk.slice(), Wk = Wk.slice(), vk = vk.slice(), yk = this.customShaderNameResolve(this.name, mk, Wk, vk, dk, sk));
        const Ok = Rk ? Bk._getDrawWrapper(void 0, !0) : this._drawWrapper,
          Ek = Ok?.effect ?? null,
          Sk = Ok?.defines ?? null,
          Nk = dk.join("\n");
        let Hk = Ek;
        return Sk !== Nk && (Hk = bk.createEffect(yk, {
          attributes: sk,
          uniformsNames: mk,
          uniformBuffersNames: Wk,
          samplers: vk,
          defines: Nk,
          fallbacks: Vk,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: ik
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, bk), Rk ? Bk.setEffect(Hk, Nk, this._materialContext) : Ok && Ok.setEffect(Hk, Nk), this._onEffectCreatedObservable && (fk.effect = Hk, fk.subMesh = Bk ?? kk?.AY[0] ?? null, this._onEffectCreatedObservable.notifyObservers(fk))), Ok._wasPreviouslyUsingInstances = !!Fk, !!Hk?.isReady() && (Ek !== Hk && ak.resetCachedMaterial(), Ok._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(kk, Fk) {
        const Bk = Fk ?? this.getEffect();
        if (!Bk) return;
        const Rk = this._options.uniforms; - 1 !== Rk.indexOf("world") && Bk.setMatrix("world", kk);
        const tk = this.XN(); - 1 !== Rk.indexOf("worldView") && (kk.multiplyToRef(tk.getViewMatrix(), this._cachedWorldViewMatrix), Bk.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Rk.indexOf("worldViewProjection") && (kk.multiplyToRef(tk.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), Bk.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== Rk.indexOf("view") && Bk.setMatrix("view", tk.getViewMatrix())
      }
      bindForSubMesh(kk, Fk, Bk) {
        this.bind(kk, Fk, Bk._drawWrapperOverride?.effect, Bk)
      }
      bind(kk, Fk, Bk, Rk) {
        const tk = Rk && this._storeEffectOnSubMeshes,
          ak = Bk ?? (tk ? Rk.effect : this.getEffect());
        if (!ak) return;
        const Xk = this.XN();
        this._activeEffect = ak, this.bindOnlyWorldMatrix(kk, Bk);
        const bk = this._options.uniformBuffers;
        let wk = !1;
        if (ak && bk && bk.length > 0 && Xk.ne().supportsUniformBuffers)
          for (let sk = 0; sk < bk.length; ++sk) {
            switch (bk[sk]) {
              case "Mesh":
                Fk && (Fk.getMeshUniformBuffer().bindToEffect(ak, "Mesh"), Fk.transferToEffect(kk));
                break;
              case "Scene":
                (0, Ak.B)(ak, Xk.getSceneUniformBuffer()), Xk.finalizeSceneUbo(), wk = !0
            }
          }
        const dk = Fk && tk ? this._mustRebind(Xk, ak, Rk, Fk.visibility) : Xk.getCachedMaterial() !== this;
        if (ak && dk) {
          let kk;
          for (kk in wk || -1 === this._options.uniforms.indexOf("view") || ak.setMatrix("view", Xk.getViewMatrix()), wk || -1 === this._options.uniforms.indexOf("projection") || ak.setMatrix("projection", Xk.getProjectionMatrix()), wk || -1 === this._options.uniforms.indexOf("viewProjection") || (ak.setMatrix("viewProjection", Xk.getTransformMatrix()), this._multiview && ak.setMatrix("viewProjectionR", Xk._transformMatrixR)), Xk.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && ak.setVector3("cameraPosition", Xk.activeCamera.globalPosition), (0, Ak.g)(Fk, ak), (0, Jk.e)(ak, this, Xk), this._vertexPullingMetadata && (0, ek.e)(ak, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, Ak.u)(tk ? Rk.materialDefines : ak.defines, ak, Xk), Fk && (0, Ak.i)(Xk, Fk, ak), this._textures) ak.setTexture(kk, this._textures[kk]);
          for (kk in this._internalTextures) ak._bindTexture(kk, this._internalTextures[kk]);
          for (kk in this._textureArrays) ak.setTextureArray(kk, this._textureArrays[kk]);
          for (kk in this._ints) ak.setInt(kk, this._ints[kk]);
          for (kk in this._uints) ak.setUInt(kk, this._uints[kk]);
          for (kk in this._floats) ak.setFloat(kk, this._floats[kk]);
          for (kk in this._floatsArrays) ak.setArray(kk, this._floatsArrays[kk]);
          for (kk in this._colors3) ak.setColor3(kk, this._colors3[kk]);
          for (kk in this._colors3Arrays) ak.setArray3(kk, this._colors3Arrays[kk]);
          for (kk in this._colors4) {
            const Fk = this._colors4[kk];
            ak.setFloat4(kk, Fk.r, Fk.g, Fk.b, Fk.a)
          }
          for (kk in this._colors4Arrays) ak.setArray4(kk, this._colors4Arrays[kk]);
          for (kk in this._vectors2) ak.setVector2(kk, this._vectors2[kk]);
          for (kk in this._vectors3) ak.setVector3(kk, this._vectors3[kk]);
          for (kk in this._vectors4) ak.setVector4(kk, this._vectors4[kk]);
          for (kk in this._quaternions) ak.setQuaternion(kk, this._quaternions[kk]);
          for (kk in this._matrices) ak.setMatrix(kk, this._matrices[kk]);
          for (kk in this._matrixArrays) ak.setMatrices(kk, this._matrixArrays[kk]);
          for (kk in this._matrices3x3) ak.setMatrix3x3(kk, this._matrices3x3[kk]);
          for (kk in this._matrices2x2) ak.setMatrix2x2(kk, this._matrices2x2[kk]);
          for (kk in this._vectors2Arrays) ak.setArray2(kk, this._vectors2Arrays[kk]);
          for (kk in this._vectors3Arrays) ak.setArray3(kk, this._vectors3Arrays[kk]);
          for (kk in this._vectors4Arrays) ak.setArray4(kk, this._vectors4Arrays[kk]);
          for (kk in this._quaternionsArrays) ak.setArray4(kk, this._quaternionsArrays[kk]);
          for (kk in this._uniformBuffers) {
            const Fk = this._uniformBuffers[kk].getBuffer();
            Fk && ak.bindUniformBuffer(Fk, kk)
          }
          const Bk = Xk.ne(),
            bk = Bk.setExternalTexture;
          if (bk)
            for (kk in this._externalTextures) bk.call(Bk, kk, this._externalTextures[kk]);
          const dk = Bk.setTextureSampler;
          if (dk)
            for (kk in this._textureSamplers) dk.call(Bk, kk, this._textureSamplers[kk]);
          const sk = Bk.setStorageBuffer;
          if (sk)
            for (kk in this._storageBuffers) sk.call(Bk, kk, this._storageBuffers[kk])
        }
        if (ak && Fk && (dk || !this.isFrozen)) {
          (0, Ak.x)(Fk, ak), Fk.morphTargetManager && Fk.morphTargetManager.isUsingTextureForTargets && Fk.morphTargetManager._bind(ak);
          const kk = Fk.bakedVertexAnimationManager;
          if (kk && kk.isEnabled) {
            const kk = tk ? Rk._drawWrapper : this._drawWrapper;
            Fk.bakedVertexAnimationManager?.bind(ak, !!kk._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(Fk, ak, Rk)
      }
      getActiveTextures() {
        const kk = super.getActiveTextures();
        for (const Fk in this._textures) kk.push(this._textures[Fk]);
        for (const Fk in this._textureArrays) {
          const Bk = this._textureArrays[Fk];
          for (let Fk = 0; Fk < Bk.length; Fk++) kk.push(Bk[Fk])
        }
        return kk
      }
      hasTexture(kk) {
        if (super.hasTexture(kk)) return !0;
        for (const Bk in this._textures)
          if (this._textures[Bk] === kk) return !0;
        const Fk = kk.getInternalTexture();
        for (const Bk in this._internalTextures)
          if (this._internalTextures[Bk] === Fk) return !0;
        for (const Bk in this._textureArrays) {
          const Fk = this._textureArrays[Bk];
          for (let Bk = 0; Bk < Fk.length; Bk++)
            if (Fk[Bk] === kk) return !0
        }
        return !1
      }
      clone(kk) {
        const Fk = Rk.c.Clone((() => new mk(kk, this.XN(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        Fk.name = kk, Fk.id = kk, "object" === typeof Fk._shaderPath && (Fk._shaderPath = {
          ...Fk._shaderPath
        }), this._options = {
          ...this._options
        };
        const Bk = Object.keys(this._options);
        for (const Rk of Bk) {
          const kk = this._options[Rk];
          Array.isArray(kk) && (this._options[Rk] = kk.slice(0))
        }
        this.stencil.copyTo(Fk.stencil);
        for (const Rk in this._textures) Fk.setTexture(Rk, this._textures[Rk]);
        for (const Rk in this._internalTextures) Fk.setInternalTexture(Rk, this._internalTextures[Rk]);
        for (const Rk in this._textureArrays) Fk.setTextureArray(Rk, this._textureArrays[Rk]);
        for (const Rk in this._externalTextures) Fk.setExternalTexture(Rk, this._externalTextures[Rk]);
        for (const Rk in this._ints) Fk.setInt(Rk, this._ints[Rk]);
        for (const Rk in this._uints) Fk.setUInt(Rk, this._uints[Rk]);
        for (const Rk in this._floats) Fk.setFloat(Rk, this._floats[Rk]);
        for (const Rk in this._floatsArrays) Fk.setFloats(Rk, this._floatsArrays[Rk]);
        for (const Rk in this._colors3) Fk.setColor3(Rk, this._colors3[Rk]);
        for (const Rk in this._colors3Arrays) Fk._colors3Arrays[Rk] = this._colors3Arrays[Rk];
        for (const Rk in this._colors4) Fk.setColor4(Rk, this._colors4[Rk]);
        for (const Rk in this._colors4Arrays) Fk._colors4Arrays[Rk] = this._colors4Arrays[Rk];
        for (const Rk in this._vectors2) Fk.setVector2(Rk, this._vectors2[Rk]);
        for (const Rk in this._vectors3) Fk.setVector3(Rk, this._vectors3[Rk]);
        for (const Rk in this._vectors4) Fk.setVector4(Rk, this._vectors4[Rk]);
        for (const Rk in this._quaternions) Fk.setQuaternion(Rk, this._quaternions[Rk]);
        for (const Rk in this._quaternionsArrays) Fk._quaternionsArrays[Rk] = this._quaternionsArrays[Rk];
        for (const Rk in this._matrices) Fk.setMatrix(Rk, this._matrices[Rk]);
        for (const Rk in this._matrixArrays) Fk._matrixArrays[Rk] = this._matrixArrays[Rk].slice();
        for (const Rk in this._matrices3x3) Fk.setMatrix3x3(Rk, this._matrices3x3[Rk]);
        for (const Rk in this._matrices2x2) Fk.setMatrix2x2(Rk, this._matrices2x2[Rk]);
        for (const Rk in this._vectors2Arrays) Fk.setArray2(Rk, this._vectors2Arrays[Rk]);
        for (const Rk in this._vectors3Arrays) Fk.setArray3(Rk, this._vectors3Arrays[Rk]);
        for (const Rk in this._vectors4Arrays) Fk.setArray4(Rk, this._vectors4Arrays[Rk]);
        for (const Rk in this._uniformBuffers) Fk.setUniformBuffer(Rk, this._uniformBuffers[Rk]);
        for (const Rk in this._textureSamplers) Fk.setTextureSampler(Rk, this._textureSamplers[Rk]);
        for (const Rk in this._storageBuffers) Fk.setStorageBuffer(Rk, this._storageBuffers[Rk]);
        return Fk
      }
      dispose(kk, Fk, Bk) {
        if (Fk) {
          let kk;
          for (kk in this._textures) this._textures[kk].dispose();
          for (kk in this._internalTextures) this._internalTextures[kk].dispose();
          for (kk in this._textureArrays) {
            const Fk = this._textureArrays[kk];
            for (let kk = 0; kk < Fk.length; kk++) Fk[kk].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(kk, Fk, Bk)
      }
      serialize() {
        const kk = Rk.c.Serialize(this);
        let Fk;
        for (Fk in kk.customType = "BABYLON.ShaderMaterial", kk.uniqueId = this.uniqueId, kk.options = this._options, kk.shaderPath = this._shaderPath, kk.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, kk.stencil = this.stencil.serialize(), kk.textures = {}, this._textures) kk.textures[Fk] = this._textures[Fk].serialize();
        for (Fk in kk.textureArrays = {}, this._textureArrays) {
          kk.textureArrays[Fk] = [];
          const Bk = this._textureArrays[Fk];
          for (let Rk = 0; Rk < Bk.length; Rk++) kk.textureArrays[Fk].push(Bk[Rk].serialize())
        }
        for (Fk in kk.ints = {}, this._ints) kk.ints[Fk] = this._ints[Fk];
        for (Fk in kk.uints = {}, this._uints) kk.uints[Fk] = this._uints[Fk];
        for (Fk in kk.floats = {}, this._floats) kk.floats[Fk] = this._floats[Fk];
        for (Fk in kk.floatsArrays = {}, this._floatsArrays) kk.floatsArrays[Fk] = this._floatsArrays[Fk];
        for (Fk in kk.colors3 = {}, this._colors3) {
          const Bk = this._colors3[Fk];
          kk.colors3[Fk] = [Bk.r, Bk.g, Bk.b]
        }
        for (Fk in kk.colors3Arrays = {}, this._colors3Arrays) kk.colors3Arrays[Fk] = this._colors3Arrays[Fk];
        for (Fk in kk.colors4 = {}, this._colors4) {
          const Bk = this._colors4[Fk];
          kk.colors4[Fk] = [Bk.r, Bk.g, Bk.b, Bk.a]
        }
        for (Fk in kk.colors4Arrays = {}, this._colors4Arrays) kk.colors4Arrays[Fk] = this._colors4Arrays[Fk];
        for (Fk in kk.vectors2 = {}, this._vectors2) {
          const Bk = this._vectors2[Fk];
          kk.vectors2[Fk] = [Bk.x, Bk.y]
        }
        for (Fk in kk.vectors3 = {}, this._vectors3) {
          const Bk = this._vectors3[Fk];
          kk.vectors3[Fk] = [Bk.x, Bk.y, Bk.z]
        }
        for (Fk in kk.vectors4 = {}, this._vectors4) {
          const Bk = this._vectors4[Fk];
          kk.vectors4[Fk] = [Bk.x, Bk.y, Bk.z, Bk.w]
        }
        for (Fk in kk.quaternions = {}, this._quaternions) kk.quaternions[Fk] = this._quaternions[Fk].PBk();
        for (Fk in kk.matrices = {}, this._matrices) kk.matrices[Fk] = this._matrices[Fk].PBk();
        for (Fk in kk.matrixArray = {}, this._matrixArrays) kk.matrixArray[Fk] = this._matrixArrays[Fk];
        for (Fk in kk.matrices3x3 = {}, this._matrices3x3) kk.matrices3x3[Fk] = this._matrices3x3[Fk];
        for (Fk in kk.matrices2x2 = {}, this._matrices2x2) kk.matrices2x2[Fk] = this._matrices2x2[Fk];
        for (Fk in kk.vectors2Arrays = {}, this._vectors2Arrays) kk.vectors2Arrays[Fk] = this._vectors2Arrays[Fk];
        for (Fk in kk.vectors3Arrays = {}, this._vectors3Arrays) kk.vectors3Arrays[Fk] = this._vectors3Arrays[Fk];
        for (Fk in kk.vectors4Arrays = {}, this._vectors4Arrays) kk.vectors4Arrays[Fk] = this._vectors4Arrays[Fk];
        for (Fk in kk.quaternionsArrays = {}, this._quaternionsArrays) kk.quaternionsArrays[Fk] = this._quaternionsArrays[Fk];
        return kk
      }
    }

    function Wk(kk, Fk, Bk) {
      const tk = Rk.c.Parse((() => new mk(kk.name, Fk, kk.shaderPath, kk.options, kk.storeEffectOnSubMeshes)), kk, Fk, Bk);
      let Xk;
      for (Xk in kk.stencil && tk.stencil.parse(kk.stencil, Fk, Bk), kk.textures) tk.setTexture(Xk, bk.f.Parse(kk.textures[Xk], Fk, Bk));
      for (Xk in kk.textureArrays) {
        const Rk = kk.textureArrays[Xk],
          ak = [];
        for (let kk = 0; kk < Rk.length; kk++) ak.push(bk.f.Parse(Rk[kk], Fk, Bk));
        tk.setTextureArray(Xk, ak)
      }
      for (Xk in kk.ints) tk.setInt(Xk, kk.ints[Xk]);
      for (Xk in kk.uints) tk.setUInt(Xk, kk.uints[Xk]);
      for (Xk in kk.floats) tk.setFloat(Xk, kk.floats[Xk]);
      for (Xk in kk.floatsArrays) tk.setFloats(Xk, kk.floatsArrays[Xk]);
      for (Xk in kk.colors3) {
        const Fk = kk.colors3[Xk];
        tk.setColor3(Xk, {
          r: Fk[0],
          g: Fk[1],
          b: Fk[2]
        })
      }
      for (Xk in kk.colors3Arrays) {
        const Fk = kk.colors3Arrays[Xk].reduce(((kk, Fk, Bk) => (Bk % 3 === 0 ? kk.push([Fk]) : kk[kk.length - 1].push(Fk), kk)), []).map((kk => ({
          r: kk[0],
          g: kk[1],
          b: kk[2]
        })));
        tk.setColor3Array(Xk, Fk)
      }
      for (Xk in kk.colors4) {
        const Fk = kk.colors4[Xk];
        tk.setColor4(Xk, {
          r: Fk[0],
          g: Fk[1],
          b: Fk[2],
          a: Fk[3]
        })
      }
      for (Xk in kk.colors4Arrays) {
        const Fk = kk.colors4Arrays[Xk].reduce(((kk, Fk, Bk) => (Bk % 4 === 0 ? kk.push([Fk]) : kk[kk.length - 1].push(Fk), kk)), []).map((kk => ({
          r: kk[0],
          g: kk[1],
          b: kk[2],
          a: kk[3]
        })));
        tk.setColor4Array(Xk, Fk)
      }
      for (Xk in kk.vectors2) {
        const Fk = kk.vectors2[Xk];
        tk.setVector2(Xk, {
          x: Fk[0],
          y: Fk[1]
        })
      }
      for (Xk in kk.vectors3) {
        const Fk = kk.vectors3[Xk];
        tk.setVector3(Xk, {
          x: Fk[0],
          y: Fk[1],
          z: Fk[2]
        })
      }
      for (Xk in kk.vectors4) {
        const Fk = kk.vectors4[Xk];
        tk.setVector4(Xk, {
          x: Fk[0],
          y: Fk[1],
          z: Fk[2],
          w: Fk[3]
        })
      }
      for (Xk in kk.quaternions) tk.setQuaternion(Xk, ak.e.FromArray(kk.quaternions[Xk]));
      for (Xk in kk.matrices) tk.setMatrix(Xk, ak.c.FromArray(kk.matrices[Xk]));
      const wk = tk;
      for (Xk in kk.matrixArray) wk._matrixArrays[Xk] = new Float32Array(kk.matrixArray[Xk]);
      for (Xk in kk.matrices3x3) tk.setMatrix3x3(Xk, kk.matrices3x3[Xk]);
      for (Xk in kk.matrices2x2) tk.setMatrix2x2(Xk, kk.matrices2x2[Xk]);
      for (Xk in kk.vectors2Arrays) tk.setArray2(Xk, kk.vectors2Arrays[Xk]);
      for (Xk in kk.vectors3Arrays) tk.setArray3(Xk, kk.vectors3Arrays[Xk]);
      for (Xk in kk.vectors4Arrays) tk.setArray4(Xk, kk.vectors4Arrays[Xk]);
      for (Xk in kk.quaternionsArrays) tk.setArray4(Xk, kk.quaternionsArrays[Xk]);
      return tk
    }
    async function vk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((tk, ak) => {
        const Xk = new dk.d;
        Xk.addEventListener("readystatechange", (() => {
          if (4 == Xk.readyState)
            if (200 == Xk.status) {
              const Fk = Wk(JSON.parse(Xk.responseText), Bk || Vk.c.LastCreatedScene, Rk);
              kk && (Fk.name = kk), tk(Fk)
            } else ak("Unable to load the ShaderMaterial")
        })), Xk.open("GET", Fk), Xk.send()
      }))
    }
    async function ik(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Rk = this?.SnippetUrl ?? mk.SnippetUrl;
      return await new Promise(((tk, ak) => {
        const Xk = new dk.d;
        Xk.addEventListener("readystatechange", (() => {
          if (4 == Xk.readyState)
            if (200 == Xk.status) {
              const Rk = JSON.parse(JSON.parse(Xk.responseText).jsonPayload),
                ak = Wk(JSON.parse(Rk.shaderMaterial), Fk || Vk.c.LastCreatedScene, Bk);
              ak.snippetId = kk, tk(ak)
            } else ak("Unable to load the snippet " + kk)
        })), Xk.open("GET", Rk + "/" + kk.replace(/#/g, "/")), Xk.send()
      }))
    }
    mk.SnippetUrl = "https://snippet.babylonjs.com";
    const Yk = ik;
    let Lk = !1;

    function Ok() {
      Lk || (Lk = !0, mk.Parse = Wk, mk.ParseFromFileAsync = vk, mk.ParseFromSnippetAsync = ik, mk.CreateFromSnippetAsync = Yk, (0, yk.d)("BABYLON.ShaderMaterial", mk))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);