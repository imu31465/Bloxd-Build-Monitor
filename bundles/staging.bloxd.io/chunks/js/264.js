export const id = 264;
export const ids = [264];
export const modules = {
  40482: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Vk,
      f: () => Qk,
      i: () => Pk,
      k: () => Kk,
      o: () => xk,
      q: () => Jk
    });
    var Xk = Ik(40021),
      Tk = Ik(40090),
      ik = Ik(37153),
      yk = Ik(40141),
      lk = Ik(40489),
      ak = Ik(40349),
      qk = Ik(40040),
      Lk = Ik(40345),
      tk = Ik(37178),
      Zk = Ik(40333),
      jk = Ik(40329),
      ek = Ik(40368),
      wk = Ik(37201);
    const Hk = {
      effect: null,
      subMesh: null
    };
    class Jk extends Lk.e {
      constructor(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(kk, Fk, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new ik.c, this._cachedWorldViewProjectionMatrix = new ik.c, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = Ik, this._options = {
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
          ...Xk
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
        const Ik = new Float32Array(16 * Fk.length);
        for (let Xk = 0; Xk < Fk.length; Xk++) {
          Fk[Xk].copyToArray(Ik, 16 * Xk)
        }
        return this._matrixArrays[kk] = Ik, this
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
        const Ik = kk.trimEnd() + " ",
          Xk = this.options.defines.findIndex((Fk => Fk === kk || Fk.startsWith(Ik)));
        return Xk >= 0 && this.options.defines.splice(Xk, 1), ("boolean" !== typeof Fk || Fk) && this.options.defines.push(Ik + Fk), this
      }
      isReadyForSubMesh(kk, Fk, Ik) {
        return this.isReady(kk, Ik, Fk)
      }
      isReady(kk, Fk, Ik) {
        const Xk = Ik && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const kk = Xk ? Ik._drawWrapper : this._drawWrapper;
          if (kk.effect && kk._wasPreviouslyReady && kk._wasPreviouslyUsingInstances === Fk) return !0
        }
        const ik = this.mG(),
          lk = ik.Oe(),
          qk = [],
          Lk = [];
        let tk = null,
          wk = this._shaderPath,
          Jk = this._options.uniforms,
          xk = this._options.uniformBuffers,
          Pk = this._options.samplers;
        lk.getCaps().multiview && ik.activeCamera && ik.activeCamera.outputRenderTarget && ik.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, qk.push("#define MULTIVIEW"), -1 !== Jk.indexOf("viewProjection") && -1 === Jk.indexOf("viewProjectionR") && Jk.push("viewProjectionR"));
        for (let Tk = 0; Tk < this._options.defines.length; Tk++) {
          const kk = 0 === this._options.defines[Tk].indexOf("#define") ? this._options.defines[Tk] : `#define ${this._options.defines[Tk]}`;
          qk.push(kk)
        }
        for (let Tk = 0; Tk < this._options.attributes.length; Tk++) Lk.push(this._options.attributes[Tk]);
        if (kk && kk.isVerticesDataPresent(yk.l.ColorKind) && (-1 === Lk.indexOf(yk.l.ColorKind) && Lk.push(yk.l.ColorKind), qk.push("#define VERTEXCOLOR")), Fk && (qk.push("#define INSTANCES"), (0, jk.fb)(Lk, this._materialHelperNeedsPreviousMatrices), kk?.hasThinInstances && (qk.push("#define THIN_INSTANCES"), kk && kk.isVerticesDataPresent(yk.l.ColorInstanceKind) && (Lk.push(yk.l.ColorInstanceKind), qk.push("#define INSTANCESCOLOR")))), kk && kk.useBones && kk.computeBonesUsingShaders && kk.skeleton) {
          Lk.push(yk.l.MatricesIndicesKind), Lk.push(yk.l.MatricesWeightsKind), kk.numBoneInfluencers > 4 && (Lk.push(yk.l.MatricesIndicesExtraKind), Lk.push(yk.l.MatricesWeightsExtraKind));
          const Fk = kk.skeleton;
          qk.push("#define NUM_BONE_INFLUENCERS " + kk.numBoneInfluencers), tk = new ak.c, tk.addCPUSkinningFallback(0, kk), Fk.isUsingTextureForMatrices ? (qk.push("#define BONETEXTURE"), -1 === Jk.indexOf("boneTextureInfo") && Jk.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (qk.push("#define BonesPerMesh " + (Fk.bones.length + 1)), -1 === Jk.indexOf("mBones") && Jk.push("mBones"))
        } else qk.push("#define NUM_BONE_INFLUENCERS 0");
        let Kk = 0;
        const Qk = kk ? kk.morphTargetManager : null;
        if (Qk) {
          const Fk = -1 !== qk.indexOf("#define UV1"),
            Ik = -1 !== qk.indexOf("#define UV2"),
            Xk = -1 !== qk.indexOf("#define TANGENT"),
            Tk = -1 !== qk.indexOf("#define NORMAL"),
            ik = -1 !== qk.indexOf("#define VERTEXCOLOR");
          Kk = (0, jk.D)(Qk, qk, Lk, kk, !0, Tk, Xk, Fk, Ik, ik), Qk.isUsingTextureForTargets && (-1 === Jk.indexOf("morphTargetTextureIndices") && Jk.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), Kk > 0 && (Jk = Jk.slice(), Jk.push("morphTargetInfluences"), Jk.push("morphTargetCount"), Jk.push("morphTargetTextureInfo"), Jk.push("morphTargetTextureIndices"))
        } else qk.push("#define NUM_MORPH_INFLUENCERS 0");
        if (kk) {
          const Ik = kk.bakedVertexAnimationManager;
          Ik && Ik.isEnabled && (qk.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === Jk.indexOf("bakedVertexAnimationSettings") && Jk.push("bakedVertexAnimationSettings"), -1 === Jk.indexOf("bakedVertexAnimationTextureSizeInverted") && Jk.push("bakedVertexAnimationTextureSizeInverted"), -1 === Jk.indexOf("bakedVertexAnimationTime") && Jk.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), Fk && Lk.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const Tk in this._textures)
          if (!this._textures[Tk].isReady()) return !1;
        for (const Tk in this._internalTextures)
          if (!this._internalTextures[Tk].isReady) return !1;
        kk && this.needAlphaTestingForMesh(kk) && qk.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, Zk.d)(Jk), (0, Zk.h)(this, ik, qk)), ik.fogEnabled && kk?.applyFog && ik.fogMode !== Tk.f.FOGMODE_NONE && (qk.push("#define FOG"), -1 === Jk.indexOf("view") && Jk.push("view"), -1 === Jk.indexOf("vFogInfos") && Jk.push("vFogInfos"), -1 === Jk.indexOf("vFogColor") && Jk.push("vFogColor")), this._useLogarithmicDepth && (qk.push("#define LOGARITHMICDEPTH"), -1 === Jk.indexOf("logarithmicDepthConstant") && Jk.push("logarithmicDepthConstant"));
        const sk = Ik ? Ik.getRenderingMesh() : kk;
        if (sk && this.useVertexPulling) {
          const kk = sk.geometry;
          kk && (this._vertexPullingMetadata = (0, ek.f)(kk), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((kk, Fk) => {
            Jk.push(`vp_${Fk}_info`)
          }))), qk.push("#define USE_VERTEX_PULLING");
          const Fk = sk.geometry?.getIndexBuffer();
          Fk && !sk.isUnIndexed && (qk.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), Fk.is32Bits && qk.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (Jk = Jk.slice(), xk = xk.slice(), Pk = Pk.slice(), wk = this.customShaderNameResolve(this.name, Jk, xk, Pk, qk, Lk));
        const Vk = Xk ? Ik._getDrawWrapper(void 0, !0) : this._drawWrapper,
          zk = Vk?.effect ?? null,
          Sk = Vk?.defines ?? null,
          vk = qk.join("\n");
        let Ek = zk;
        return Sk !== vk && (Ek = lk.createEffect(wk, {
          attributes: Lk,
          uniformsNames: Jk,
          uniformBuffersNames: xk,
          samplers: Pk,
          defines: vk,
          fallbacks: tk,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: Kk
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, lk), Xk ? Ik.setEffect(Ek, vk, this._materialContext) : Vk && Vk.setEffect(Ek, vk), this._onEffectCreatedObservable && (Hk.effect = Ek, Hk.subMesh = Ik ?? kk?.lK[0] ?? null, this._onEffectCreatedObservable.notifyObservers(Hk))), Vk._wasPreviouslyUsingInstances = !!Fk, !!Ek?.isReady() && (zk !== Ek && ik.resetCachedMaterial(), Vk._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(kk, Fk) {
        const Ik = Fk ?? this.getEffect();
        if (!Ik) return;
        const Xk = this._options.uniforms; - 1 !== Xk.indexOf("world") && Ik.setMatrix("world", kk);
        const Tk = this.mG(); - 1 !== Xk.indexOf("worldView") && (kk.multiplyToRef(Tk.getViewMatrix(), this._cachedWorldViewMatrix), Ik.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Xk.indexOf("worldViewProjection") && (kk.multiplyToRef(Tk.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), Ik.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== Xk.indexOf("view") && Ik.setMatrix("view", Tk.getViewMatrix())
      }
      bindForSubMesh(kk, Fk, Ik) {
        this.bind(kk, Fk, Ik._drawWrapperOverride?.effect, Ik)
      }
      bind(kk, Fk, Ik, Xk) {
        const Tk = Xk && this._storeEffectOnSubMeshes,
          ik = Ik ?? (Tk ? Xk.effect : this.getEffect());
        if (!ik) return;
        const yk = this.mG();
        this._activeEffect = ik, this.bindOnlyWorldMatrix(kk, Ik);
        const lk = this._options.uniformBuffers;
        let ak = !1;
        if (ik && lk && lk.length > 0 && yk.Oe().supportsUniformBuffers)
          for (let Lk = 0; Lk < lk.length; ++Lk) {
            switch (lk[Lk]) {
              case "Mesh":
                Fk && (Fk.getMeshUniformBuffer().bindToEffect(ik, "Mesh"), Fk.transferToEffect(kk));
                break;
              case "Scene":
                (0, jk.u)(ik, yk.getSceneUniformBuffer()), yk.finalizeSceneUbo(), ak = !0
            }
          }
        const qk = Fk && Tk ? this._mustRebind(yk, ik, Xk, Fk.visibility) : yk.getCachedMaterial() !== this;
        if (ik && qk) {
          let kk;
          for (kk in ak || -1 === this._options.uniforms.indexOf("view") || ik.setMatrix("view", yk.getViewMatrix()), ak || -1 === this._options.uniforms.indexOf("projection") || ik.setMatrix("projection", yk.getProjectionMatrix()), ak || -1 === this._options.uniforms.indexOf("viewProjection") || (ik.setMatrix("viewProjection", yk.getTransformMatrix()), this._multiview && ik.setMatrix("viewProjectionR", yk._transformMatrixR)), yk.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && ik.setVector3("cameraPosition", yk.activeCamera.globalPosition), (0, jk.e)(Fk, ik), (0, Zk.e)(ik, this, yk), this._vertexPullingMetadata && (0, ek.c)(ik, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, jk.p)(Tk ? Xk.materialDefines : ik.defines, ik, yk), Fk && (0, jk.f)(yk, Fk, ik), this._textures) ik.setTexture(kk, this._textures[kk]);
          for (kk in this._internalTextures) ik._bindTexture(kk, this._internalTextures[kk]);
          for (kk in this._textureArrays) ik.setTextureArray(kk, this._textureArrays[kk]);
          for (kk in this._ints) ik.setInt(kk, this._ints[kk]);
          for (kk in this._uints) ik.setUInt(kk, this._uints[kk]);
          for (kk in this._floats) ik.setFloat(kk, this._floats[kk]);
          for (kk in this._floatsArrays) ik.setArray(kk, this._floatsArrays[kk]);
          for (kk in this._colors3) ik.setColor3(kk, this._colors3[kk]);
          for (kk in this._colors3Arrays) ik.setArray3(kk, this._colors3Arrays[kk]);
          for (kk in this._colors4) {
            const Fk = this._colors4[kk];
            ik.setFloat4(kk, Fk.r, Fk.g, Fk.b, Fk.a)
          }
          for (kk in this._colors4Arrays) ik.setArray4(kk, this._colors4Arrays[kk]);
          for (kk in this._vectors2) ik.setVector2(kk, this._vectors2[kk]);
          for (kk in this._vectors3) ik.setVector3(kk, this._vectors3[kk]);
          for (kk in this._vectors4) ik.setVector4(kk, this._vectors4[kk]);
          for (kk in this._quaternions) ik.setQuaternion(kk, this._quaternions[kk]);
          for (kk in this._matrices) ik.setMatrix(kk, this._matrices[kk]);
          for (kk in this._matrixArrays) ik.setMatrices(kk, this._matrixArrays[kk]);
          for (kk in this._matrices3x3) ik.setMatrix3x3(kk, this._matrices3x3[kk]);
          for (kk in this._matrices2x2) ik.setMatrix2x2(kk, this._matrices2x2[kk]);
          for (kk in this._vectors2Arrays) ik.setArray2(kk, this._vectors2Arrays[kk]);
          for (kk in this._vectors3Arrays) ik.setArray3(kk, this._vectors3Arrays[kk]);
          for (kk in this._vectors4Arrays) ik.setArray4(kk, this._vectors4Arrays[kk]);
          for (kk in this._quaternionsArrays) ik.setArray4(kk, this._quaternionsArrays[kk]);
          for (kk in this._uniformBuffers) {
            const Fk = this._uniformBuffers[kk].getBuffer();
            Fk && ik.bindUniformBuffer(Fk, kk)
          }
          const Ik = yk.Oe(),
            lk = Ik.setExternalTexture;
          if (lk)
            for (kk in this._externalTextures) lk.call(Ik, kk, this._externalTextures[kk]);
          const qk = Ik.setTextureSampler;
          if (qk)
            for (kk in this._textureSamplers) qk.call(Ik, kk, this._textureSamplers[kk]);
          const Lk = Ik.setStorageBuffer;
          if (Lk)
            for (kk in this._storageBuffers) Lk.call(Ik, kk, this._storageBuffers[kk])
        }
        if (ik && Fk && (qk || !this.isFrozen)) {
          (0, jk.s)(Fk, ik), Fk.morphTargetManager && Fk.morphTargetManager.isUsingTextureForTargets && Fk.morphTargetManager._bind(ik);
          const kk = Fk.bakedVertexAnimationManager;
          if (kk && kk.isEnabled) {
            const kk = Tk ? Xk._drawWrapper : this._drawWrapper;
            Fk.bakedVertexAnimationManager?.bind(ik, !!kk._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(Fk, ik, Xk)
      }
      getActiveTextures() {
        const kk = super.getActiveTextures();
        for (const Fk in this._textures) kk.push(this._textures[Fk]);
        for (const Fk in this._textureArrays) {
          const Ik = this._textureArrays[Fk];
          for (let Fk = 0; Fk < Ik.length; Fk++) kk.push(Ik[Fk])
        }
        return kk
      }
      hasTexture(kk) {
        if (super.hasTexture(kk)) return !0;
        for (const Ik in this._textures)
          if (this._textures[Ik] === kk) return !0;
        const Fk = kk.getInternalTexture();
        for (const Ik in this._internalTextures)
          if (this._internalTextures[Ik] === Fk) return !0;
        for (const Ik in this._textureArrays) {
          const Fk = this._textureArrays[Ik];
          for (let Ik = 0; Ik < Fk.length; Ik++)
            if (Fk[Ik] === kk) return !0
        }
        return !1
      }
      clone(kk) {
        const Fk = Xk.b.Clone((() => new Jk(kk, this.mG(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        Fk.name = kk, Fk.id = kk, "object" === typeof Fk._shaderPath && (Fk._shaderPath = {
          ...Fk._shaderPath
        }), this._options = {
          ...this._options
        };
        const Ik = Object.keys(this._options);
        for (const Xk of Ik) {
          const kk = this._options[Xk];
          Array.isArray(kk) && (this._options[Xk] = kk.slice(0))
        }
        this.stencil.copyTo(Fk.stencil);
        for (const Xk in this._textures) Fk.setTexture(Xk, this._textures[Xk]);
        for (const Xk in this._internalTextures) Fk.setInternalTexture(Xk, this._internalTextures[Xk]);
        for (const Xk in this._textureArrays) Fk.setTextureArray(Xk, this._textureArrays[Xk]);
        for (const Xk in this._externalTextures) Fk.setExternalTexture(Xk, this._externalTextures[Xk]);
        for (const Xk in this._ints) Fk.setInt(Xk, this._ints[Xk]);
        for (const Xk in this._uints) Fk.setUInt(Xk, this._uints[Xk]);
        for (const Xk in this._floats) Fk.setFloat(Xk, this._floats[Xk]);
        for (const Xk in this._floatsArrays) Fk.setFloats(Xk, this._floatsArrays[Xk]);
        for (const Xk in this._colors3) Fk.setColor3(Xk, this._colors3[Xk]);
        for (const Xk in this._colors3Arrays) Fk._colors3Arrays[Xk] = this._colors3Arrays[Xk];
        for (const Xk in this._colors4) Fk.setColor4(Xk, this._colors4[Xk]);
        for (const Xk in this._colors4Arrays) Fk._colors4Arrays[Xk] = this._colors4Arrays[Xk];
        for (const Xk in this._vectors2) Fk.setVector2(Xk, this._vectors2[Xk]);
        for (const Xk in this._vectors3) Fk.setVector3(Xk, this._vectors3[Xk]);
        for (const Xk in this._vectors4) Fk.setVector4(Xk, this._vectors4[Xk]);
        for (const Xk in this._quaternions) Fk.setQuaternion(Xk, this._quaternions[Xk]);
        for (const Xk in this._quaternionsArrays) Fk._quaternionsArrays[Xk] = this._quaternionsArrays[Xk];
        for (const Xk in this._matrices) Fk.setMatrix(Xk, this._matrices[Xk]);
        for (const Xk in this._matrixArrays) Fk._matrixArrays[Xk] = this._matrixArrays[Xk].slice();
        for (const Xk in this._matrices3x3) Fk.setMatrix3x3(Xk, this._matrices3x3[Xk]);
        for (const Xk in this._matrices2x2) Fk.setMatrix2x2(Xk, this._matrices2x2[Xk]);
        for (const Xk in this._vectors2Arrays) Fk.setArray2(Xk, this._vectors2Arrays[Xk]);
        for (const Xk in this._vectors3Arrays) Fk.setArray3(Xk, this._vectors3Arrays[Xk]);
        for (const Xk in this._vectors4Arrays) Fk.setArray4(Xk, this._vectors4Arrays[Xk]);
        for (const Xk in this._uniformBuffers) Fk.setUniformBuffer(Xk, this._uniformBuffers[Xk]);
        for (const Xk in this._textureSamplers) Fk.setTextureSampler(Xk, this._textureSamplers[Xk]);
        for (const Xk in this._storageBuffers) Fk.setStorageBuffer(Xk, this._storageBuffers[Xk]);
        return Fk
      }
      dispose(kk, Fk, Ik) {
        if (Fk) {
          let kk;
          for (kk in this._textures) this._textures[kk].dispose();
          for (kk in this._internalTextures) this._internalTextures[kk].dispose();
          for (kk in this._textureArrays) {
            const Fk = this._textureArrays[kk];
            for (let kk = 0; kk < Fk.length; kk++) Fk[kk].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(kk, Fk, Ik)
      }
      serialize() {
        const kk = Xk.b.Serialize(this);
        let Fk;
        for (Fk in kk.customType = "BABYLON.ShaderMaterial", kk.uniqueId = this.uniqueId, kk.options = this._options, kk.shaderPath = this._shaderPath, kk.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, kk.stencil = this.stencil.serialize(), kk.textures = {}, this._textures) kk.textures[Fk] = this._textures[Fk].serialize();
        for (Fk in kk.textureArrays = {}, this._textureArrays) {
          kk.textureArrays[Fk] = [];
          const Ik = this._textureArrays[Fk];
          for (let Xk = 0; Xk < Ik.length; Xk++) kk.textureArrays[Fk].push(Ik[Xk].serialize())
        }
        for (Fk in kk.ints = {}, this._ints) kk.ints[Fk] = this._ints[Fk];
        for (Fk in kk.uints = {}, this._uints) kk.uints[Fk] = this._uints[Fk];
        for (Fk in kk.floats = {}, this._floats) kk.floats[Fk] = this._floats[Fk];
        for (Fk in kk.floatsArrays = {}, this._floatsArrays) kk.floatsArrays[Fk] = this._floatsArrays[Fk];
        for (Fk in kk.colors3 = {}, this._colors3) {
          const Ik = this._colors3[Fk];
          kk.colors3[Fk] = [Ik.r, Ik.g, Ik.b]
        }
        for (Fk in kk.colors3Arrays = {}, this._colors3Arrays) kk.colors3Arrays[Fk] = this._colors3Arrays[Fk];
        for (Fk in kk.colors4 = {}, this._colors4) {
          const Ik = this._colors4[Fk];
          kk.colors4[Fk] = [Ik.r, Ik.g, Ik.b, Ik.a]
        }
        for (Fk in kk.colors4Arrays = {}, this._colors4Arrays) kk.colors4Arrays[Fk] = this._colors4Arrays[Fk];
        for (Fk in kk.vectors2 = {}, this._vectors2) {
          const Ik = this._vectors2[Fk];
          kk.vectors2[Fk] = [Ik.x, Ik.y]
        }
        for (Fk in kk.vectors3 = {}, this._vectors3) {
          const Ik = this._vectors3[Fk];
          kk.vectors3[Fk] = [Ik.x, Ik.y, Ik.z]
        }
        for (Fk in kk.vectors4 = {}, this._vectors4) {
          const Ik = this._vectors4[Fk];
          kk.vectors4[Fk] = [Ik.x, Ik.y, Ik.z, Ik.w]
        }
        for (Fk in kk.quaternions = {}, this._quaternions) kk.quaternions[Fk] = this._quaternions[Fk].iXk();
        for (Fk in kk.matrices = {}, this._matrices) kk.matrices[Fk] = this._matrices[Fk].iXk();
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

    function xk(kk, Fk, Ik) {
      const Tk = Xk.b.Parse((() => new Jk(kk.name, Fk, kk.shaderPath, kk.options, kk.storeEffectOnSubMeshes)), kk, Fk, Ik);
      let yk;
      for (yk in kk.stencil && Tk.stencil.parse(kk.stencil, Fk, Ik), kk.textures) Tk.setTexture(yk, lk.g.Parse(kk.textures[yk], Fk, Ik));
      for (yk in kk.textureArrays) {
        const Xk = kk.textureArrays[yk],
          ik = [];
        for (let kk = 0; kk < Xk.length; kk++) ik.push(lk.g.Parse(Xk[kk], Fk, Ik));
        Tk.setTextureArray(yk, ik)
      }
      for (yk in kk.ints) Tk.setInt(yk, kk.ints[yk]);
      for (yk in kk.uints) Tk.setUInt(yk, kk.uints[yk]);
      for (yk in kk.floats) Tk.setFloat(yk, kk.floats[yk]);
      for (yk in kk.floatsArrays) Tk.setFloats(yk, kk.floatsArrays[yk]);
      for (yk in kk.colors3) {
        const Fk = kk.colors3[yk];
        Tk.setColor3(yk, {
          r: Fk[0],
          g: Fk[1],
          b: Fk[2]
        })
      }
      for (yk in kk.colors3Arrays) {
        const Fk = kk.colors3Arrays[yk].reduce(((kk, Fk, Ik) => (Ik % 3 === 0 ? kk.push([Fk]) : kk[kk.length - 1].push(Fk), kk)), []).map((kk => ({
          r: kk[0],
          g: kk[1],
          b: kk[2]
        })));
        Tk.setColor3Array(yk, Fk)
      }
      for (yk in kk.colors4) {
        const Fk = kk.colors4[yk];
        Tk.setColor4(yk, {
          r: Fk[0],
          g: Fk[1],
          b: Fk[2],
          a: Fk[3]
        })
      }
      for (yk in kk.colors4Arrays) {
        const Fk = kk.colors4Arrays[yk].reduce(((kk, Fk, Ik) => (Ik % 4 === 0 ? kk.push([Fk]) : kk[kk.length - 1].push(Fk), kk)), []).map((kk => ({
          r: kk[0],
          g: kk[1],
          b: kk[2],
          a: kk[3]
        })));
        Tk.setColor4Array(yk, Fk)
      }
      for (yk in kk.vectors2) {
        const Fk = kk.vectors2[yk];
        Tk.setVector2(yk, {
          x: Fk[0],
          y: Fk[1]
        })
      }
      for (yk in kk.vectors3) {
        const Fk = kk.vectors3[yk];
        Tk.setVector3(yk, {
          x: Fk[0],
          y: Fk[1],
          z: Fk[2]
        })
      }
      for (yk in kk.vectors4) {
        const Fk = kk.vectors4[yk];
        Tk.setVector4(yk, {
          x: Fk[0],
          y: Fk[1],
          z: Fk[2],
          w: Fk[3]
        })
      }
      for (yk in kk.quaternions) Tk.setQuaternion(yk, ik.f.FromArray(kk.quaternions[yk]));
      for (yk in kk.matrices) Tk.setMatrix(yk, ik.c.FromArray(kk.matrices[yk]));
      const ak = Tk;
      for (yk in kk.matrixArray) ak._matrixArrays[yk] = new Float32Array(kk.matrixArray[yk]);
      for (yk in kk.matrices3x3) Tk.setMatrix3x3(yk, kk.matrices3x3[yk]);
      for (yk in kk.matrices2x2) Tk.setMatrix2x2(yk, kk.matrices2x2[yk]);
      for (yk in kk.vectors2Arrays) Tk.setArray2(yk, kk.vectors2Arrays[yk]);
      for (yk in kk.vectors3Arrays) Tk.setArray3(yk, kk.vectors3Arrays[yk]);
      for (yk in kk.vectors4Arrays) Tk.setArray4(yk, kk.vectors4Arrays[yk]);
      for (yk in kk.quaternionsArrays) Tk.setArray4(yk, kk.quaternionsArrays[yk]);
      return Tk
    }
    async function Pk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((Tk, ik) => {
        const yk = new qk.b;
        yk.addEventListener("readystatechange", (() => {
          if (4 == yk.readyState)
            if (200 == yk.status) {
              const Fk = xk(JSON.parse(yk.responseText), Ik || tk.e.LastCreatedScene, Xk);
              kk && (Fk.name = kk), Tk(Fk)
            } else ik("Unable to load the ShaderMaterial")
        })), yk.open("GET", Fk), yk.send()
      }))
    }
    async function Kk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Xk = this?.SnippetUrl ?? Jk.SnippetUrl;
      return await new Promise(((Tk, ik) => {
        const yk = new qk.b;
        yk.addEventListener("readystatechange", (() => {
          if (4 == yk.readyState)
            if (200 == yk.status) {
              const Xk = JSON.parse(JSON.parse(yk.responseText).jsonPayload),
                ik = xk(JSON.parse(Xk.shaderMaterial), Fk || tk.e.LastCreatedScene, Ik);
              ik.snippetId = kk, Tk(ik)
            } else ik("Unable to load the snippet " + kk)
        })), yk.open("GET", Xk + "/" + kk.replace(/#/g, "/")), yk.send()
      }))
    }
    Jk.SnippetUrl = "https://snippet.babylonjs.com";
    const Qk = Kk;
    let sk = !1;

    function Vk() {
      sk || (sk = !0, Jk.Parse = xk, Jk.ParseFromFileAsync = Pk, Jk.ParseFromSnippetAsync = Kk, Jk.CreateFromSnippetAsync = Qk, (0, wk.f)("BABYLON.ShaderMaterial", Jk))
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);