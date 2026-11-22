export const id = 260;
export const ids = [260];
export const modules = {
  40049: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Ak,
      d: () => Lk,
      h: () => yk,
      j: () => Yk,
      l: () => pk,
      o: () => lk
    });
    var Dk = ik(39585),
      fk = ik(39653),
      Sk = ik(36698),
      bk = ik(39708),
      rk = ik(40053),
      Pk = ik(39946),
      mk = ik(39612),
      Mk = ik(39937),
      Kk = ik(36722),
      xk = ik(39919),
      nk = ik(39910),
      Uk = ik(39964),
      Hk = ik(36734);
    const wk = {
      effect: null,
      subMesh: null
    };
    class lk extends Mk.c {
      constructor(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(kk, ek, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new Sk.b, this._cachedWorldViewProjectionMatrix = new Sk.b, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = ik, this._options = {
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
          ...Dk
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
      setTexture(kk, ek) {
        return -1 === this._options.samplers.indexOf(kk) && this._options.samplers.push(kk), this._textures[kk] = ek, this
      }
      setInternalTexture(kk, ek) {
        return -1 === this._options.samplers.indexOf(kk) && this._options.samplers.push(kk), this._internalTextures[kk] = ek, this
      }
      removeTexture(kk) {
        delete this._textures[kk]
      }
      setTextureArray(kk, ek) {
        return -1 === this._options.samplers.indexOf(kk) && this._options.samplers.push(kk), this._checkUniform(kk), this._textureArrays[kk] = ek, this
      }
      setExternalTexture(kk, ek) {
        return -1 === this._options.externalTextures.indexOf(kk) && this._options.externalTextures.push(kk), this._externalTextures[kk] = ek, this
      }
      setFloat(kk, ek) {
        return this._checkUniform(kk), this._floats[kk] = ek, this
      }
      setInt(kk, ek) {
        return this._checkUniform(kk), this._ints[kk] = ek, this
      }
      setUInt(kk, ek) {
        return this._checkUniform(kk), this._uints[kk] = ek, this
      }
      setFloats(kk, ek) {
        return this._checkUniform(kk), this._floatsArrays[kk] = ek, this
      }
      setColor3(kk, ek) {
        return this._checkUniform(kk), this._colors3[kk] = ek, this
      }
      setColor3Array(kk, ek) {
        return this._checkUniform(kk), this._colors3Arrays[kk] = ek.reduce(((kk, ek) => (kk.push(ek.r, ek.g, ek.b), kk)), []), this
      }
      setColor4(kk, ek) {
        return this._checkUniform(kk), this._colors4[kk] = ek, this
      }
      setColor4Array(kk, ek) {
        return this._checkUniform(kk), this._colors4Arrays[kk] = ek.reduce(((kk, ek) => (kk.push(ek.r, ek.g, ek.b, ek.a), kk)), []), this
      }
      setVector2(kk, ek) {
        return this._checkUniform(kk), this._vectors2[kk] = ek, this
      }
      setVector3(kk, ek) {
        return this._checkUniform(kk), this._vectors3[kk] = ek, this
      }
      setVector4(kk, ek) {
        return this._checkUniform(kk), this._vectors4[kk] = ek, this
      }
      setQuaternion(kk, ek) {
        return this._checkUniform(kk), this._quaternions[kk] = ek, this
      }
      setQuaternionArray(kk, ek) {
        return this._checkUniform(kk), this._quaternionsArrays[kk] = ek.reduce(((kk, ek) => (ek.toArray(kk, kk.length), kk)), []), this
      }
      setMatrix(kk, ek) {
        return this._checkUniform(kk), this._matrices[kk] = ek, this
      }
      setMatrices(kk, ek) {
        this._checkUniform(kk);
        const ik = new Float32Array(16 * ek.length);
        for (let Dk = 0; Dk < ek.length; Dk++) {
          ek[Dk].copyToArray(ik, 16 * Dk)
        }
        return this._matrixArrays[kk] = ik, this
      }
      setMatrix3x3(kk, ek) {
        return this._checkUniform(kk), this._matrices3x3[kk] = ek, this
      }
      setMatrix2x2(kk, ek) {
        return this._checkUniform(kk), this._matrices2x2[kk] = ek, this
      }
      setArray2(kk, ek) {
        return this._checkUniform(kk), this._vectors2Arrays[kk] = ek, this
      }
      setArray3(kk, ek) {
        return this._checkUniform(kk), this._vectors3Arrays[kk] = ek, this
      }
      setArray4(kk, ek) {
        return this._checkUniform(kk), this._vectors4Arrays[kk] = ek, this
      }
      setUniformBuffer(kk, ek) {
        return -1 === this._options.uniformBuffers.indexOf(kk) && this._options.uniformBuffers.push(kk), this._uniformBuffers[kk] = ek, this
      }
      setTextureSampler(kk, ek) {
        return -1 === this._options.samplerObjects.indexOf(kk) && this._options.samplerObjects.push(kk), this._textureSamplers[kk] = ek, this
      }
      setStorageBuffer(kk, ek) {
        return -1 === this._options.storageBuffers.indexOf(kk) && this._options.storageBuffers.push(kk), this._storageBuffers[kk] = ek, this
      }
      setDefine(kk, ek) {
        const ik = kk.trimEnd() + " ",
          Dk = this.options.defines.findIndex((ek => ek === kk || ek.startsWith(ik)));
        return Dk >= 0 && this.options.defines.splice(Dk, 1), ("boolean" !== typeof ek || ek) && this.options.defines.push(ik + ek), this
      }
      isReadyForSubMesh(kk, ek, ik) {
        return this.isReady(kk, ik, ek)
      }
      isReady(kk, ek, ik) {
        const Dk = ik && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const kk = Dk ? ik._drawWrapper : this._drawWrapper;
          if (kk.effect && kk._wasPreviouslyReady && kk._wasPreviouslyUsingInstances === ek) return !0
        }
        const Sk = this.XF(),
          rk = Sk.JU(),
          mk = [],
          Mk = [];
        let Kk = null,
          Hk = this._shaderPath,
          lk = this._options.uniforms,
          pk = this._options.uniformBuffers,
          yk = this._options.samplers;
        rk.getCaps().multiview && Sk.activeCamera && Sk.activeCamera.outputRenderTarget && Sk.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, mk.push("#define MULTIVIEW"), -1 !== lk.indexOf("viewProjection") && -1 === lk.indexOf("viewProjectionR") && lk.push("viewProjectionR"));
        for (let fk = 0; fk < this._options.defines.length; fk++) {
          const kk = 0 === this._options.defines[fk].indexOf("#define") ? this._options.defines[fk] : `#define ${this._options.defines[fk]}`;
          mk.push(kk)
        }
        for (let fk = 0; fk < this._options.attributes.length; fk++) Mk.push(this._options.attributes[fk]);
        if (kk && kk.isVerticesDataPresent(bk.e.ColorKind) && (-1 === Mk.indexOf(bk.e.ColorKind) && Mk.push(bk.e.ColorKind), mk.push("#define VERTEXCOLOR")), ek && (mk.push("#define INSTANCES"), (0, nk.Eb)(Mk, this._materialHelperNeedsPreviousMatrices), kk?.hasThinInstances && (mk.push("#define THIN_INSTANCES"), kk && kk.isVerticesDataPresent(bk.e.ColorInstanceKind) && (Mk.push(bk.e.ColorInstanceKind), mk.push("#define INSTANCESCOLOR")))), kk && kk.useBones && kk.computeBonesUsingShaders && kk.skeleton) {
          Mk.push(bk.e.MatricesIndicesKind), Mk.push(bk.e.MatricesWeightsKind), kk.numBoneInfluencers > 4 && (Mk.push(bk.e.MatricesIndicesExtraKind), Mk.push(bk.e.MatricesWeightsExtraKind));
          const ek = kk.skeleton;
          mk.push("#define NUM_BONE_INFLUENCERS " + kk.numBoneInfluencers), Kk = new Pk.b, Kk.addCPUSkinningFallback(0, kk), ek.isUsingTextureForMatrices ? (mk.push("#define BONETEXTURE"), -1 === lk.indexOf("boneTextureInfo") && lk.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (mk.push("#define BonesPerMesh " + (ek.bones.length + 1)), -1 === lk.indexOf("mBones") && lk.push("mBones"))
        } else mk.push("#define NUM_BONE_INFLUENCERS 0");
        let Yk = 0;
        const Lk = kk ? kk.morphTargetManager : null;
        if (Lk) {
          const ek = -1 !== mk.indexOf("#define UV1"),
            ik = -1 !== mk.indexOf("#define UV2"),
            Dk = -1 !== mk.indexOf("#define TANGENT"),
            fk = -1 !== mk.indexOf("#define NORMAL"),
            Sk = -1 !== mk.indexOf("#define VERTEXCOLOR");
          Yk = (0, nk.$)(Lk, mk, Mk, kk, !0, fk, Dk, ek, ik, Sk), Lk.isUsingTextureForTargets && (-1 === lk.indexOf("morphTargetTextureIndices") && lk.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), Yk > 0 && (lk = lk.slice(), lk.push("morphTargetInfluences"), lk.push("morphTargetCount"), lk.push("morphTargetTextureInfo"), lk.push("morphTargetTextureIndices"))
        } else mk.push("#define NUM_MORPH_INFLUENCERS 0");
        if (kk) {
          const ik = kk.bakedVertexAnimationManager;
          ik && ik.isEnabled && (mk.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === lk.indexOf("bakedVertexAnimationSettings") && lk.push("bakedVertexAnimationSettings"), -1 === lk.indexOf("bakedVertexAnimationTextureSizeInverted") && lk.push("bakedVertexAnimationTextureSizeInverted"), -1 === lk.indexOf("bakedVertexAnimationTime") && lk.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), ek && Mk.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const fk in this._textures)
          if (!this._textures[fk].isReady()) return !1;
        for (const fk in this._internalTextures)
          if (!this._internalTextures[fk].isReady) return !1;
        kk && this.needAlphaTestingForMesh(kk) && mk.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, xk.d)(lk), (0, xk.m)(this, Sk, mk)), Sk.fogEnabled && kk?.applyFog && Sk.fogMode !== fk.f.FOGMODE_NONE && (mk.push("#define FOG"), -1 === lk.indexOf("view") && lk.push("view"), -1 === lk.indexOf("vFogInfos") && lk.push("vFogInfos"), -1 === lk.indexOf("vFogColor") && lk.push("vFogColor")), this._useLogarithmicDepth && (mk.push("#define LOGARITHMICDEPTH"), -1 === lk.indexOf("logarithmicDepthConstant") && lk.push("logarithmicDepthConstant"));
        const Ck = ik ? ik.getRenderingMesh() : kk;
        if (Ck && this.useVertexPulling) {
          const kk = Ck.geometry;
          kk && (this._vertexPullingMetadata = (0, Uk.f)(kk), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((kk, ek) => {
            lk.push(`vp_${ek}_info`)
          }))), mk.push("#define USE_VERTEX_PULLING");
          const ek = Ck.geometry?.getIndexBuffer();
          ek && !Ck.isUnIndexed && (mk.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), ek.is32Bits && mk.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (lk = lk.slice(), pk = pk.slice(), yk = yk.slice(), Hk = this.customShaderNameResolve(this.name, lk, pk, yk, mk, Mk));
        const Ak = Dk ? ik._getDrawWrapper(void 0, !0) : this._drawWrapper,
          jk = Ak?.effect ?? null,
          sk = Ak?.defines ?? null,
          dk = mk.join("\n");
        let Vk = jk;
        return sk !== dk && (Vk = rk.createEffect(Hk, {
          attributes: Mk,
          uniformsNames: lk,
          uniformBuffersNames: pk,
          samplers: yk,
          defines: dk,
          fallbacks: Kk,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: Yk
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, rk), Dk ? ik.setEffect(Vk, dk, this._materialContext) : Ak && Ak.setEffect(Vk, dk), this._onEffectCreatedObservable && (wk.effect = Vk, wk.subMesh = ik ?? kk?.TY[0] ?? null, this._onEffectCreatedObservable.notifyObservers(wk))), Ak._wasPreviouslyUsingInstances = !!ek, !!Vk?.isReady() && (jk !== Vk && Sk.resetCachedMaterial(), Ak._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(kk, ek) {
        const ik = ek ?? this.getEffect();
        if (!ik) return;
        const Dk = this._options.uniforms; - 1 !== Dk.indexOf("world") && ik.setMatrix("world", kk);
        const fk = this.XF(); - 1 !== Dk.indexOf("worldView") && (kk.multiplyToRef(fk.getViewMatrix(), this._cachedWorldViewMatrix), ik.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Dk.indexOf("worldViewProjection") && (kk.multiplyToRef(fk.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), ik.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== Dk.indexOf("view") && ik.setMatrix("view", fk.getViewMatrix())
      }
      bindForSubMesh(kk, ek, ik) {
        this.bind(kk, ek, ik._drawWrapperOverride?.effect, ik)
      }
      bind(kk, ek, ik, Dk) {
        const fk = Dk && this._storeEffectOnSubMeshes,
          Sk = ik ?? (fk ? Dk.effect : this.getEffect());
        if (!Sk) return;
        const bk = this.XF();
        this._activeEffect = Sk, this.bindOnlyWorldMatrix(kk, ik);
        const rk = this._options.uniformBuffers;
        let Pk = !1;
        if (Sk && rk && rk.length > 0 && bk.JU().supportsUniformBuffers)
          for (let Mk = 0; Mk < rk.length; ++Mk) {
            switch (rk[Mk]) {
              case "Mesh":
                ek && (ek.getMeshUniformBuffer().bindToEffect(Sk, "Mesh"), ek.transferToEffect(kk));
                break;
              case "Scene":
                (0, nk.C)(Sk, bk.getSceneUniformBuffer()), bk.finalizeSceneUbo(), Pk = !0
            }
          }
        const mk = ek && fk ? this._mustRebind(bk, Sk, Dk, ek.visibility) : bk.getCachedMaterial() !== this;
        if (Sk && mk) {
          let kk;
          for (kk in Pk || -1 === this._options.uniforms.indexOf("view") || Sk.setMatrix("view", bk.getViewMatrix()), Pk || -1 === this._options.uniforms.indexOf("projection") || Sk.setMatrix("projection", bk.getProjectionMatrix()), Pk || -1 === this._options.uniforms.indexOf("viewProjection") || (Sk.setMatrix("viewProjection", bk.getTransformMatrix()), this._multiview && Sk.setMatrix("viewProjectionR", bk._transformMatrixR)), bk.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && Sk.setVector3("cameraPosition", bk.activeCamera.globalPosition), (0, nk.f)(ek, Sk), (0, xk.g)(Sk, this, bk), this._vertexPullingMetadata && (0, Uk.b)(Sk, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, nk.u)(fk ? Dk.materialDefines : Sk.defines, Sk, bk), ek && (0, nk.i)(bk, ek, Sk), this._textures) Sk.setTexture(kk, this._textures[kk]);
          for (kk in this._internalTextures) Sk._bindTexture(kk, this._internalTextures[kk]);
          for (kk in this._textureArrays) Sk.setTextureArray(kk, this._textureArrays[kk]);
          for (kk in this._ints) Sk.setInt(kk, this._ints[kk]);
          for (kk in this._uints) Sk.setUInt(kk, this._uints[kk]);
          for (kk in this._floats) Sk.setFloat(kk, this._floats[kk]);
          for (kk in this._floatsArrays) Sk.setArray(kk, this._floatsArrays[kk]);
          for (kk in this._colors3) Sk.setColor3(kk, this._colors3[kk]);
          for (kk in this._colors3Arrays) Sk.setArray3(kk, this._colors3Arrays[kk]);
          for (kk in this._colors4) {
            const ek = this._colors4[kk];
            Sk.setFloat4(kk, ek.r, ek.g, ek.b, ek.a)
          }
          for (kk in this._colors4Arrays) Sk.setArray4(kk, this._colors4Arrays[kk]);
          for (kk in this._vectors2) Sk.setVector2(kk, this._vectors2[kk]);
          for (kk in this._vectors3) Sk.setVector3(kk, this._vectors3[kk]);
          for (kk in this._vectors4) Sk.setVector4(kk, this._vectors4[kk]);
          for (kk in this._quaternions) Sk.setQuaternion(kk, this._quaternions[kk]);
          for (kk in this._matrices) Sk.setMatrix(kk, this._matrices[kk]);
          for (kk in this._matrixArrays) Sk.setMatrices(kk, this._matrixArrays[kk]);
          for (kk in this._matrices3x3) Sk.setMatrix3x3(kk, this._matrices3x3[kk]);
          for (kk in this._matrices2x2) Sk.setMatrix2x2(kk, this._matrices2x2[kk]);
          for (kk in this._vectors2Arrays) Sk.setArray2(kk, this._vectors2Arrays[kk]);
          for (kk in this._vectors3Arrays) Sk.setArray3(kk, this._vectors3Arrays[kk]);
          for (kk in this._vectors4Arrays) Sk.setArray4(kk, this._vectors4Arrays[kk]);
          for (kk in this._quaternionsArrays) Sk.setArray4(kk, this._quaternionsArrays[kk]);
          for (kk in this._uniformBuffers) {
            const ek = this._uniformBuffers[kk].getBuffer();
            ek && Sk.bindUniformBuffer(ek, kk)
          }
          const ik = bk.JU(),
            rk = ik.setExternalTexture;
          if (rk)
            for (kk in this._externalTextures) rk.call(ik, kk, this._externalTextures[kk]);
          const mk = ik.setTextureSampler;
          if (mk)
            for (kk in this._textureSamplers) mk.call(ik, kk, this._textureSamplers[kk]);
          const Mk = ik.setStorageBuffer;
          if (Mk)
            for (kk in this._storageBuffers) Mk.call(ik, kk, this._storageBuffers[kk])
        }
        if (Sk && ek && (mk || !this.isFrozen)) {
          (0, nk.y)(ek, Sk), ek.morphTargetManager && ek.morphTargetManager.isUsingTextureForTargets && ek.morphTargetManager._bind(Sk);
          const kk = ek.bakedVertexAnimationManager;
          if (kk && kk.isEnabled) {
            const kk = fk ? Dk._drawWrapper : this._drawWrapper;
            ek.bakedVertexAnimationManager?.bind(Sk, !!kk._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(ek, Sk, Dk)
      }
      getActiveTextures() {
        const kk = super.getActiveTextures();
        for (const ek in this._textures) kk.push(this._textures[ek]);
        for (const ek in this._textureArrays) {
          const ik = this._textureArrays[ek];
          for (let ek = 0; ek < ik.length; ek++) kk.push(ik[ek])
        }
        return kk
      }
      hasTexture(kk) {
        if (super.hasTexture(kk)) return !0;
        for (const ik in this._textures)
          if (this._textures[ik] === kk) return !0;
        const ek = kk.getInternalTexture();
        for (const ik in this._internalTextures)
          if (this._internalTextures[ik] === ek) return !0;
        for (const ik in this._textureArrays) {
          const ek = this._textureArrays[ik];
          for (let ik = 0; ik < ek.length; ik++)
            if (ek[ik] === kk) return !0
        }
        return !1
      }
      clone(kk) {
        const ek = Dk.b.Clone((() => new lk(kk, this.XF(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        ek.name = kk, ek.id = kk, "object" === typeof ek._shaderPath && (ek._shaderPath = {
          ...ek._shaderPath
        }), this._options = {
          ...this._options
        };
        const ik = Object.keys(this._options);
        for (const Dk of ik) {
          const kk = this._options[Dk];
          Array.isArray(kk) && (this._options[Dk] = kk.slice(0))
        }
        this.stencil.copyTo(ek.stencil);
        for (const Dk in this._textures) ek.setTexture(Dk, this._textures[Dk]);
        for (const Dk in this._internalTextures) ek.setInternalTexture(Dk, this._internalTextures[Dk]);
        for (const Dk in this._textureArrays) ek.setTextureArray(Dk, this._textureArrays[Dk]);
        for (const Dk in this._externalTextures) ek.setExternalTexture(Dk, this._externalTextures[Dk]);
        for (const Dk in this._ints) ek.setInt(Dk, this._ints[Dk]);
        for (const Dk in this._uints) ek.setUInt(Dk, this._uints[Dk]);
        for (const Dk in this._floats) ek.setFloat(Dk, this._floats[Dk]);
        for (const Dk in this._floatsArrays) ek.setFloats(Dk, this._floatsArrays[Dk]);
        for (const Dk in this._colors3) ek.setColor3(Dk, this._colors3[Dk]);
        for (const Dk in this._colors3Arrays) ek._colors3Arrays[Dk] = this._colors3Arrays[Dk];
        for (const Dk in this._colors4) ek.setColor4(Dk, this._colors4[Dk]);
        for (const Dk in this._colors4Arrays) ek._colors4Arrays[Dk] = this._colors4Arrays[Dk];
        for (const Dk in this._vectors2) ek.setVector2(Dk, this._vectors2[Dk]);
        for (const Dk in this._vectors3) ek.setVector3(Dk, this._vectors3[Dk]);
        for (const Dk in this._vectors4) ek.setVector4(Dk, this._vectors4[Dk]);
        for (const Dk in this._quaternions) ek.setQuaternion(Dk, this._quaternions[Dk]);
        for (const Dk in this._quaternionsArrays) ek._quaternionsArrays[Dk] = this._quaternionsArrays[Dk];
        for (const Dk in this._matrices) ek.setMatrix(Dk, this._matrices[Dk]);
        for (const Dk in this._matrixArrays) ek._matrixArrays[Dk] = this._matrixArrays[Dk].slice();
        for (const Dk in this._matrices3x3) ek.setMatrix3x3(Dk, this._matrices3x3[Dk]);
        for (const Dk in this._matrices2x2) ek.setMatrix2x2(Dk, this._matrices2x2[Dk]);
        for (const Dk in this._vectors2Arrays) ek.setArray2(Dk, this._vectors2Arrays[Dk]);
        for (const Dk in this._vectors3Arrays) ek.setArray3(Dk, this._vectors3Arrays[Dk]);
        for (const Dk in this._vectors4Arrays) ek.setArray4(Dk, this._vectors4Arrays[Dk]);
        for (const Dk in this._uniformBuffers) ek.setUniformBuffer(Dk, this._uniformBuffers[Dk]);
        for (const Dk in this._textureSamplers) ek.setTextureSampler(Dk, this._textureSamplers[Dk]);
        for (const Dk in this._storageBuffers) ek.setStorageBuffer(Dk, this._storageBuffers[Dk]);
        return ek
      }
      dispose(kk, ek, ik) {
        if (ek) {
          let kk;
          for (kk in this._textures) this._textures[kk].dispose();
          for (kk in this._internalTextures) this._internalTextures[kk].dispose();
          for (kk in this._textureArrays) {
            const ek = this._textureArrays[kk];
            for (let kk = 0; kk < ek.length; kk++) ek[kk].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(kk, ek, ik)
      }
      serialize() {
        const kk = Dk.b.Serialize(this);
        let ek;
        for (ek in kk.customType = "BABYLON.ShaderMaterial", kk.uniqueId = this.uniqueId, kk.options = this._options, kk.shaderPath = this._shaderPath, kk.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, kk.stencil = this.stencil.serialize(), kk.textures = {}, this._textures) kk.textures[ek] = this._textures[ek].serialize();
        for (ek in kk.textureArrays = {}, this._textureArrays) {
          kk.textureArrays[ek] = [];
          const ik = this._textureArrays[ek];
          for (let Dk = 0; Dk < ik.length; Dk++) kk.textureArrays[ek].push(ik[Dk].serialize())
        }
        for (ek in kk.ints = {}, this._ints) kk.ints[ek] = this._ints[ek];
        for (ek in kk.uints = {}, this._uints) kk.uints[ek] = this._uints[ek];
        for (ek in kk.floats = {}, this._floats) kk.floats[ek] = this._floats[ek];
        for (ek in kk.floatsArrays = {}, this._floatsArrays) kk.floatsArrays[ek] = this._floatsArrays[ek];
        for (ek in kk.colors3 = {}, this._colors3) {
          const ik = this._colors3[ek];
          kk.colors3[ek] = [ik.r, ik.g, ik.b]
        }
        for (ek in kk.colors3Arrays = {}, this._colors3Arrays) kk.colors3Arrays[ek] = this._colors3Arrays[ek];
        for (ek in kk.colors4 = {}, this._colors4) {
          const ik = this._colors4[ek];
          kk.colors4[ek] = [ik.r, ik.g, ik.b, ik.a]
        }
        for (ek in kk.colors4Arrays = {}, this._colors4Arrays) kk.colors4Arrays[ek] = this._colors4Arrays[ek];
        for (ek in kk.vectors2 = {}, this._vectors2) {
          const ik = this._vectors2[ek];
          kk.vectors2[ek] = [ik.x, ik.y]
        }
        for (ek in kk.vectors3 = {}, this._vectors3) {
          const ik = this._vectors3[ek];
          kk.vectors3[ek] = [ik.x, ik.y, ik.z]
        }
        for (ek in kk.vectors4 = {}, this._vectors4) {
          const ik = this._vectors4[ek];
          kk.vectors4[ek] = [ik.x, ik.y, ik.z, ik.w]
        }
        for (ek in kk.quaternions = {}, this._quaternions) kk.quaternions[ek] = this._quaternions[ek].Tik();
        for (ek in kk.matrices = {}, this._matrices) kk.matrices[ek] = this._matrices[ek].Tik();
        for (ek in kk.matrixArray = {}, this._matrixArrays) kk.matrixArray[ek] = this._matrixArrays[ek];
        for (ek in kk.matrices3x3 = {}, this._matrices3x3) kk.matrices3x3[ek] = this._matrices3x3[ek];
        for (ek in kk.matrices2x2 = {}, this._matrices2x2) kk.matrices2x2[ek] = this._matrices2x2[ek];
        for (ek in kk.vectors2Arrays = {}, this._vectors2Arrays) kk.vectors2Arrays[ek] = this._vectors2Arrays[ek];
        for (ek in kk.vectors3Arrays = {}, this._vectors3Arrays) kk.vectors3Arrays[ek] = this._vectors3Arrays[ek];
        for (ek in kk.vectors4Arrays = {}, this._vectors4Arrays) kk.vectors4Arrays[ek] = this._vectors4Arrays[ek];
        for (ek in kk.quaternionsArrays = {}, this._quaternionsArrays) kk.quaternionsArrays[ek] = this._quaternionsArrays[ek];
        return kk
      }
    }

    function pk(kk, ek, ik) {
      const fk = Dk.b.Parse((() => new lk(kk.name, ek, kk.shaderPath, kk.options, kk.storeEffectOnSubMeshes)), kk, ek, ik);
      let bk;
      for (bk in kk.stencil && fk.stencil.parse(kk.stencil, ek, ik), kk.textures) fk.setTexture(bk, rk.f.Parse(kk.textures[bk], ek, ik));
      for (bk in kk.textureArrays) {
        const Dk = kk.textureArrays[bk],
          Sk = [];
        for (let kk = 0; kk < Dk.length; kk++) Sk.push(rk.f.Parse(Dk[kk], ek, ik));
        fk.setTextureArray(bk, Sk)
      }
      for (bk in kk.ints) fk.setInt(bk, kk.ints[bk]);
      for (bk in kk.uints) fk.setUInt(bk, kk.uints[bk]);
      for (bk in kk.floats) fk.setFloat(bk, kk.floats[bk]);
      for (bk in kk.floatsArrays) fk.setFloats(bk, kk.floatsArrays[bk]);
      for (bk in kk.colors3) {
        const ek = kk.colors3[bk];
        fk.setColor3(bk, {
          r: ek[0],
          g: ek[1],
          b: ek[2]
        })
      }
      for (bk in kk.colors3Arrays) {
        const ek = kk.colors3Arrays[bk].reduce(((kk, ek, ik) => (ik % 3 === 0 ? kk.push([ek]) : kk[kk.length - 1].push(ek), kk)), []).map((kk => ({
          r: kk[0],
          g: kk[1],
          b: kk[2]
        })));
        fk.setColor3Array(bk, ek)
      }
      for (bk in kk.colors4) {
        const ek = kk.colors4[bk];
        fk.setColor4(bk, {
          r: ek[0],
          g: ek[1],
          b: ek[2],
          a: ek[3]
        })
      }
      for (bk in kk.colors4Arrays) {
        const ek = kk.colors4Arrays[bk].reduce(((kk, ek, ik) => (ik % 4 === 0 ? kk.push([ek]) : kk[kk.length - 1].push(ek), kk)), []).map((kk => ({
          r: kk[0],
          g: kk[1],
          b: kk[2],
          a: kk[3]
        })));
        fk.setColor4Array(bk, ek)
      }
      for (bk in kk.vectors2) {
        const ek = kk.vectors2[bk];
        fk.setVector2(bk, {
          x: ek[0],
          y: ek[1]
        })
      }
      for (bk in kk.vectors3) {
        const ek = kk.vectors3[bk];
        fk.setVector3(bk, {
          x: ek[0],
          y: ek[1],
          z: ek[2]
        })
      }
      for (bk in kk.vectors4) {
        const ek = kk.vectors4[bk];
        fk.setVector4(bk, {
          x: ek[0],
          y: ek[1],
          z: ek[2],
          w: ek[3]
        })
      }
      for (bk in kk.quaternions) fk.setQuaternion(bk, Sk.c.FromArray(kk.quaternions[bk]));
      for (bk in kk.matrices) fk.setMatrix(bk, Sk.b.FromArray(kk.matrices[bk]));
      const Pk = fk;
      for (bk in kk.matrixArray) Pk._matrixArrays[bk] = new Float32Array(kk.matrixArray[bk]);
      for (bk in kk.matrices3x3) fk.setMatrix3x3(bk, kk.matrices3x3[bk]);
      for (bk in kk.matrices2x2) fk.setMatrix2x2(bk, kk.matrices2x2[bk]);
      for (bk in kk.vectors2Arrays) fk.setArray2(bk, kk.vectors2Arrays[bk]);
      for (bk in kk.vectors3Arrays) fk.setArray3(bk, kk.vectors3Arrays[bk]);
      for (bk in kk.vectors4Arrays) fk.setArray4(bk, kk.vectors4Arrays[bk]);
      for (bk in kk.quaternionsArrays) fk.setArray4(bk, kk.quaternionsArrays[bk]);
      return fk
    }
    async function yk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((fk, Sk) => {
        const bk = new mk.d;
        bk.addEventListener("readystatechange", (() => {
          if (4 == bk.readyState)
            if (200 == bk.status) {
              const ek = pk(JSON.parse(bk.responseText), ik || Kk.e.LastCreatedScene, Dk);
              kk && (ek.name = kk), fk(ek)
            } else Sk("Unable to load the ShaderMaterial")
        })), bk.open("GET", ek), bk.send()
      }))
    }
    async function Yk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Dk = this?.SnippetUrl ?? lk.SnippetUrl;
      return await new Promise(((fk, Sk) => {
        const bk = new mk.d;
        bk.addEventListener("readystatechange", (() => {
          if (4 == bk.readyState)
            if (200 == bk.status) {
              const Dk = JSON.parse(JSON.parse(bk.responseText).jsonPayload),
                Sk = pk(JSON.parse(Dk.shaderMaterial), ek || Kk.e.LastCreatedScene, ik);
              Sk.snippetId = kk, fk(Sk)
            } else Sk("Unable to load the snippet " + kk)
        })), bk.open("GET", Dk + "/" + kk.replace(/#/g, "/")), bk.send()
      }))
    }
    lk.SnippetUrl = "https://snippet.babylonjs.com";
    const Lk = Yk;
    let Ck = !1;

    function Ak() {
      Ck || (Ck = !0, lk.Parse = pk, lk.ParseFromFileAsync = yk, lk.ParseFromSnippetAsync = Yk, lk.CreateFromSnippetAsync = Lk, (0, Hk.h)("BABYLON.ShaderMaterial", lk))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);