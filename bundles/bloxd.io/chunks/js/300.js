export const id = 300;
export const ids = [300];
export const modules = {
  42308: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Br,
      d: () => Kr,
      h: () => nr,
      j: () => er,
      k: () => Yr,
      o: () => zr
    });
    var Zr = Qr(41889),
      Wr = Qr(41941),
      ar = Qr(38560),
      jr = Qr(41995),
      Ir = Qr(42310),
      fr = Qr(42192),
      Er = Qr(41906),
      pr = Qr(42184),
      xr = Qr(38587),
      mr = Qr(42174),
      Nr = Qr(42167),
      Ur = Qr(42206),
      tr = Qr(38609);
    const hr = {
      effect: null,
      subMesh: null
    };
    class zr extends pr.b {
      constructor(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(rr, Sr, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new ar.d, this._cachedWorldViewProjectionMatrix = new ar.d, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = Qr, this._options = {
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
          ...Zr
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(rr) {
        this._shaderPath = rr
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
      _checkUniform(rr) {
        -1 === this._options.uniforms.indexOf(rr) && this._options.uniforms.push(rr)
      }
      setTexture(rr, Sr) {
        return -1 === this._options.samplers.indexOf(rr) && this._options.samplers.push(rr), this._textures[rr] = Sr, this
      }
      setInternalTexture(rr, Sr) {
        return -1 === this._options.samplers.indexOf(rr) && this._options.samplers.push(rr), this._internalTextures[rr] = Sr, this
      }
      removeTexture(rr) {
        delete this._textures[rr]
      }
      setTextureArray(rr, Sr) {
        return -1 === this._options.samplers.indexOf(rr) && this._options.samplers.push(rr), this._checkUniform(rr), this._textureArrays[rr] = Sr, this
      }
      setExternalTexture(rr, Sr) {
        return -1 === this._options.externalTextures.indexOf(rr) && this._options.externalTextures.push(rr), this._externalTextures[rr] = Sr, this
      }
      setFloat(rr, Sr) {
        return this._checkUniform(rr), this._floats[rr] = Sr, this
      }
      setInt(rr, Sr) {
        return this._checkUniform(rr), this._ints[rr] = Sr, this
      }
      setUInt(rr, Sr) {
        return this._checkUniform(rr), this._uints[rr] = Sr, this
      }
      setFloats(rr, Sr) {
        return this._checkUniform(rr), this._floatsArrays[rr] = Sr, this
      }
      setColor3(rr, Sr) {
        return this._checkUniform(rr), this._colors3[rr] = Sr, this
      }
      setColor3Array(rr, Sr) {
        return this._checkUniform(rr), this._colors3Arrays[rr] = Sr.reduce(((rr, Sr) => (rr.push(Sr.r, Sr.g, Sr.b), rr)), []), this
      }
      setColor4(rr, Sr) {
        return this._checkUniform(rr), this._colors4[rr] = Sr, this
      }
      setColor4Array(rr, Sr) {
        return this._checkUniform(rr), this._colors4Arrays[rr] = Sr.reduce(((rr, Sr) => (rr.push(Sr.r, Sr.g, Sr.b, Sr.a), rr)), []), this
      }
      setVector2(rr, Sr) {
        return this._checkUniform(rr), this._vectors2[rr] = Sr, this
      }
      setVector3(rr, Sr) {
        return this._checkUniform(rr), this._vectors3[rr] = Sr, this
      }
      setVector4(rr, Sr) {
        return this._checkUniform(rr), this._vectors4[rr] = Sr, this
      }
      setQuaternion(rr, Sr) {
        return this._checkUniform(rr), this._quaternions[rr] = Sr, this
      }
      setQuaternionArray(rr, Sr) {
        return this._checkUniform(rr), this._quaternionsArrays[rr] = Sr.reduce(((rr, Sr) => (Sr.toArray(rr, rr.length), rr)), []), this
      }
      setMatrix(rr, Sr) {
        return this._checkUniform(rr), this._matrices[rr] = Sr, this
      }
      setMatrices(rr, Sr) {
        this._checkUniform(rr);
        const Qr = new Float32Array(16 * Sr.length);
        for (let Zr = 0; Zr < Sr.length; Zr++) {
          Sr[Zr].copyToArray(Qr, 16 * Zr)
        }
        return this._matrixArrays[rr] = Qr, this
      }
      setMatrix3x3(rr, Sr) {
        return this._checkUniform(rr), this._matrices3x3[rr] = Sr, this
      }
      setMatrix2x2(rr, Sr) {
        return this._checkUniform(rr), this._matrices2x2[rr] = Sr, this
      }
      setArray2(rr, Sr) {
        return this._checkUniform(rr), this._vectors2Arrays[rr] = Sr, this
      }
      setArray3(rr, Sr) {
        return this._checkUniform(rr), this._vectors3Arrays[rr] = Sr, this
      }
      setArray4(rr, Sr) {
        return this._checkUniform(rr), this._vectors4Arrays[rr] = Sr, this
      }
      setUniformBuffer(rr, Sr) {
        return -1 === this._options.uniformBuffers.indexOf(rr) && this._options.uniformBuffers.push(rr), this._uniformBuffers[rr] = Sr, this
      }
      setTextureSampler(rr, Sr) {
        return -1 === this._options.samplerObjects.indexOf(rr) && this._options.samplerObjects.push(rr), this._textureSamplers[rr] = Sr, this
      }
      setStorageBuffer(rr, Sr) {
        return -1 === this._options.storageBuffers.indexOf(rr) && this._options.storageBuffers.push(rr), this._storageBuffers[rr] = Sr, this
      }
      setDefine(rr, Sr) {
        const Qr = rr.trimEnd() + " ",
          Zr = this.options.defines.findIndex((Sr => Sr === rr || Sr.startsWith(Qr)));
        return Zr >= 0 && this.options.defines.splice(Zr, 1), ("boolean" !== typeof Sr || Sr) && this.options.defines.push(Qr + Sr), this
      }
      isReadyForSubMesh(rr, Sr, Qr) {
        return this.isReady(rr, Qr, Sr)
      }
      isReady(rr, Sr, Qr) {
        const Zr = Qr && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const rr = Zr ? Qr._drawWrapper : this._drawWrapper;
          if (rr.effect && rr._wasPreviouslyReady && rr._wasPreviouslyUsingInstances === Sr) return !0
        }
        const ar = this.eC(),
          Ir = ar.MU(),
          Er = [],
          pr = [];
        let xr = null,
          tr = this._shaderPath,
          zr = this._options.uniforms,
          Yr = this._options.uniformBuffers,
          nr = this._options.samplers;
        Ir.getCaps().multiview && ar.activeCamera && ar.activeCamera.outputRenderTarget && ar.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, Er.push("#define MULTIVIEW"), -1 !== zr.indexOf("viewProjection") && -1 === zr.indexOf("viewProjectionR") && zr.push("viewProjectionR"));
        for (let Wr = 0; Wr < this._options.defines.length; Wr++) {
          const rr = 0 === this._options.defines[Wr].indexOf("#define") ? this._options.defines[Wr] : `#define ${this._options.defines[Wr]}`;
          Er.push(rr)
        }
        for (let Wr = 0; Wr < this._options.attributes.length; Wr++) pr.push(this._options.attributes[Wr]);
        if (rr && rr.isVerticesDataPresent(jr.j.ColorKind) && (-1 === pr.indexOf(jr.j.ColorKind) && pr.push(jr.j.ColorKind), Er.push("#define VERTEXCOLOR")), Sr && (Er.push("#define INSTANCES"), (0, Nr.ob)(pr, this._materialHelperNeedsPreviousMatrices), rr?.hasThinInstances && (Er.push("#define THIN_INSTANCES"), rr && rr.isVerticesDataPresent(jr.j.ColorInstanceKind) && (pr.push(jr.j.ColorInstanceKind), Er.push("#define INSTANCESCOLOR")))), rr && rr.useBones && rr.computeBonesUsingShaders && rr.skeleton) {
          pr.push(jr.j.MatricesIndicesKind), pr.push(jr.j.MatricesWeightsKind), rr.numBoneInfluencers > 4 && (pr.push(jr.j.MatricesIndicesExtraKind), pr.push(jr.j.MatricesWeightsExtraKind));
          const Sr = rr.skeleton;
          Er.push("#define NUM_BONE_INFLUENCERS " + rr.numBoneInfluencers), xr = new fr.e, xr.addCPUSkinningFallback(0, rr), Sr.isUsingTextureForMatrices ? (Er.push("#define BONETEXTURE"), -1 === zr.indexOf("boneTextureInfo") && zr.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (Er.push("#define BonesPerMesh " + (Sr.bones.length + 1)), -1 === zr.indexOf("mBones") && zr.push("mBones"))
        } else Er.push("#define NUM_BONE_INFLUENCERS 0");
        let er = 0;
        const Kr = rr ? rr.morphTargetManager : null;
        if (Kr) {
          const Sr = -1 !== Er.indexOf("#define UV1"),
            Qr = -1 !== Er.indexOf("#define UV2"),
            Zr = -1 !== Er.indexOf("#define TANGENT"),
            Wr = -1 !== Er.indexOf("#define NORMAL"),
            ar = -1 !== Er.indexOf("#define VERTEXCOLOR");
          er = (0, Nr.M)(Kr, Er, pr, rr, !0, Wr, Zr, Sr, Qr, ar), Kr.isUsingTextureForTargets && (-1 === zr.indexOf("morphTargetTextureIndices") && zr.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), er > 0 && (zr = zr.slice(), zr.push("morphTargetInfluences"), zr.push("morphTargetCount"), zr.push("morphTargetTextureInfo"), zr.push("morphTargetTextureIndices"))
        } else Er.push("#define NUM_MORPH_INFLUENCERS 0");
        if (rr) {
          const Qr = rr.bakedVertexAnimationManager;
          Qr && Qr.isEnabled && (Er.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === zr.indexOf("bakedVertexAnimationSettings") && zr.push("bakedVertexAnimationSettings"), -1 === zr.indexOf("bakedVertexAnimationTextureSizeInverted") && zr.push("bakedVertexAnimationTextureSizeInverted"), -1 === zr.indexOf("bakedVertexAnimationTime") && zr.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), Sr && pr.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const Wr in this._textures)
          if (!this._textures[Wr].isReady()) return !1;
        for (const Wr in this._internalTextures)
          if (!this._internalTextures[Wr].isReady) return !1;
        rr && this.needAlphaTestingForMesh(rr) && Er.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, mr.c)(zr), (0, mr.h)(this, ar, Er)), ar.fogEnabled && rr?.applyFog && ar.fogMode !== Wr.f.FOGMODE_NONE && (Er.push("#define FOG"), -1 === zr.indexOf("view") && zr.push("view"), -1 === zr.indexOf("vFogInfos") && zr.push("vFogInfos"), -1 === zr.indexOf("vFogColor") && zr.push("vFogColor")), this._useLogarithmicDepth && (Er.push("#define LOGARITHMICDEPTH"), -1 === zr.indexOf("logarithmicDepthConstant") && zr.push("logarithmicDepthConstant"));
        const yr = Qr ? Qr.getRenderingMesh() : rr;
        if (yr && this.useVertexPulling) {
          const rr = yr.geometry;
          rr && (this._vertexPullingMetadata = (0, Ur.f)(rr), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((rr, Sr) => {
            zr.push(`vp_${Sr}_info`)
          }))), Er.push("#define USE_VERTEX_PULLING");
          const Sr = yr.geometry?.getIndexBuffer();
          Sr && !yr.isUnIndexed && (Er.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), Sr.is32Bits && Er.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (zr = zr.slice(), Yr = Yr.slice(), nr = nr.slice(), tr = this.customShaderNameResolve(this.name, zr, Yr, nr, Er, pr));
        const Br = Zr ? Qr._getDrawWrapper(void 0, !0) : this._drawWrapper,
          Tr = Br?.effect ?? null,
          vr = Br?.defines ?? null,
          Or = Er.join("\n");
        let Lr = Tr;
        return vr !== Or && (Lr = Ir.createEffect(tr, {
          attributes: pr,
          uniformsNames: zr,
          uniformBuffersNames: Yr,
          samplers: nr,
          defines: Or,
          fallbacks: xr,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: er
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, Ir), Zr ? Qr.setEffect(Lr, Or, this._materialContext) : Br && Br.setEffect(Lr, Or), this._onEffectCreatedObservable && (hr.effect = Lr, hr.subMesh = Qr ?? rr?.jT[0] ?? null, this._onEffectCreatedObservable.notifyObservers(hr))), Br._wasPreviouslyUsingInstances = !!Sr, !!Lr?.isReady() && (Tr !== Lr && ar.resetCachedMaterial(), Br._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(rr, Sr) {
        const Qr = Sr ?? this.getEffect();
        if (!Qr) return;
        const Zr = this._options.uniforms; - 1 !== Zr.indexOf("world") && Qr.setMatrix("world", rr);
        const Wr = this.eC(); - 1 !== Zr.indexOf("worldView") && (rr.multiplyToRef(Wr.getViewMatrix(), this._cachedWorldViewMatrix), Qr.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Zr.indexOf("worldViewProjection") && (rr.multiplyToRef(Wr.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), Qr.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== Zr.indexOf("view") && Qr.setMatrix("view", Wr.getViewMatrix())
      }
      bindForSubMesh(rr, Sr, Qr) {
        this.bind(rr, Sr, Qr._drawWrapperOverride?.effect, Qr)
      }
      bind(rr, Sr, Qr, Zr) {
        const Wr = Zr && this._storeEffectOnSubMeshes,
          ar = Qr ?? (Wr ? Zr.effect : this.getEffect());
        if (!ar) return;
        const jr = this.eC();
        this._activeEffect = ar, this.bindOnlyWorldMatrix(rr, Qr);
        const Ir = this._options.uniformBuffers;
        let fr = !1;
        if (ar && Ir && Ir.length > 0 && jr.MU().supportsUniformBuffers)
          for (let pr = 0; pr < Ir.length; ++pr) {
            switch (Ir[pr]) {
              case "Mesh":
                Sr && (Sr.getMeshUniformBuffer().bindToEffect(ar, "Mesh"), Sr.transferToEffect(rr));
                break;
              case "Scene":
                (0, Nr.x)(ar, jr.getSceneUniformBuffer()), jr.finalizeSceneUbo(), fr = !0
            }
          }
        const Er = Sr && Wr ? this._mustRebind(jr, ar, Zr, Sr.visibility) : jr.getCachedMaterial() !== this;
        if (ar && Er) {
          let rr;
          for (rr in fr || -1 === this._options.uniforms.indexOf("view") || ar.setMatrix("view", jr.getViewMatrix()), fr || -1 === this._options.uniforms.indexOf("projection") || ar.setMatrix("projection", jr.getProjectionMatrix()), fr || -1 === this._options.uniforms.indexOf("viewProjection") || (ar.setMatrix("viewProjection", jr.getTransformMatrix()), this._multiview && ar.setMatrix("viewProjectionR", jr._transformMatrixR)), jr.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && ar.setVector3("cameraPosition", jr.activeCamera.globalPosition), (0, Nr.c)(Sr, ar), (0, mr.e)(ar, this, jr), this._vertexPullingMetadata && (0, Ur.d)(ar, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, Nr.q)(Wr ? Zr.materialDefines : ar.defines, ar, jr), Sr && (0, Nr.d)(jr, Sr, ar), this._textures) ar.setTexture(rr, this._textures[rr]);
          for (rr in this._internalTextures) ar._bindTexture(rr, this._internalTextures[rr]);
          for (rr in this._textureArrays) ar.setTextureArray(rr, this._textureArrays[rr]);
          for (rr in this._ints) ar.setInt(rr, this._ints[rr]);
          for (rr in this._uints) ar.setUInt(rr, this._uints[rr]);
          for (rr in this._floats) ar.setFloat(rr, this._floats[rr]);
          for (rr in this._floatsArrays) ar.setArray(rr, this._floatsArrays[rr]);
          for (rr in this._colors3) ar.setColor3(rr, this._colors3[rr]);
          for (rr in this._colors3Arrays) ar.setArray3(rr, this._colors3Arrays[rr]);
          for (rr in this._colors4) {
            const Sr = this._colors4[rr];
            ar.setFloat4(rr, Sr.r, Sr.g, Sr.b, Sr.a)
          }
          for (rr in this._colors4Arrays) ar.setArray4(rr, this._colors4Arrays[rr]);
          for (rr in this._vectors2) ar.setVector2(rr, this._vectors2[rr]);
          for (rr in this._vectors3) ar.setVector3(rr, this._vectors3[rr]);
          for (rr in this._vectors4) ar.setVector4(rr, this._vectors4[rr]);
          for (rr in this._quaternions) ar.setQuaternion(rr, this._quaternions[rr]);
          for (rr in this._matrices) ar.setMatrix(rr, this._matrices[rr]);
          for (rr in this._matrixArrays) ar.setMatrices(rr, this._matrixArrays[rr]);
          for (rr in this._matrices3x3) ar.setMatrix3x3(rr, this._matrices3x3[rr]);
          for (rr in this._matrices2x2) ar.setMatrix2x2(rr, this._matrices2x2[rr]);
          for (rr in this._vectors2Arrays) ar.setArray2(rr, this._vectors2Arrays[rr]);
          for (rr in this._vectors3Arrays) ar.setArray3(rr, this._vectors3Arrays[rr]);
          for (rr in this._vectors4Arrays) ar.setArray4(rr, this._vectors4Arrays[rr]);
          for (rr in this._quaternionsArrays) ar.setArray4(rr, this._quaternionsArrays[rr]);
          for (rr in this._uniformBuffers) {
            const Sr = this._uniformBuffers[rr].getBuffer();
            Sr && ar.bindUniformBuffer(Sr, rr)
          }
          const Qr = jr.MU(),
            Ir = Qr.setExternalTexture;
          if (Ir)
            for (rr in this._externalTextures) Ir.call(Qr, rr, this._externalTextures[rr]);
          const Er = Qr.setTextureSampler;
          if (Er)
            for (rr in this._textureSamplers) Er.call(Qr, rr, this._textureSamplers[rr]);
          const pr = Qr.setStorageBuffer;
          if (pr)
            for (rr in this._storageBuffers) pr.call(Qr, rr, this._storageBuffers[rr])
        }
        if (ar && Sr && (Er || !this.isFrozen)) {
          (0, Nr.t)(Sr, ar), Sr.morphTargetManager && Sr.morphTargetManager.isUsingTextureForTargets && Sr.morphTargetManager._bind(ar);
          const rr = Sr.bakedVertexAnimationManager;
          if (rr && rr.isEnabled) {
            const rr = Wr ? Zr._drawWrapper : this._drawWrapper;
            Sr.bakedVertexAnimationManager?.bind(ar, !!rr._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(Sr, ar, Zr)
      }
      getActiveTextures() {
        const rr = super.getActiveTextures();
        for (const Sr in this._textures) rr.push(this._textures[Sr]);
        for (const Sr in this._textureArrays) {
          const Qr = this._textureArrays[Sr];
          for (let Sr = 0; Sr < Qr.length; Sr++) rr.push(Qr[Sr])
        }
        return rr
      }
      hasTexture(rr) {
        if (super.hasTexture(rr)) return !0;
        for (const Qr in this._textures)
          if (this._textures[Qr] === rr) return !0;
        const Sr = rr.getInternalTexture();
        for (const Qr in this._internalTextures)
          if (this._internalTextures[Qr] === Sr) return !0;
        for (const Qr in this._textureArrays) {
          const Sr = this._textureArrays[Qr];
          for (let Qr = 0; Qr < Sr.length; Qr++)
            if (Sr[Qr] === rr) return !0
        }
        return !1
      }
      clone(rr) {
        const Sr = Zr.e.Clone((() => new zr(rr, this.eC(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        Sr.name = rr, Sr.id = rr, "object" === typeof Sr._shaderPath && (Sr._shaderPath = {
          ...Sr._shaderPath
        }), this._options = {
          ...this._options
        };
        const Qr = Object.keys(this._options);
        for (const Zr of Qr) {
          const rr = this._options[Zr];
          Array.isArray(rr) && (this._options[Zr] = rr.slice(0))
        }
        this.stencil.copyTo(Sr.stencil);
        for (const Zr in this._textures) Sr.setTexture(Zr, this._textures[Zr]);
        for (const Zr in this._internalTextures) Sr.setInternalTexture(Zr, this._internalTextures[Zr]);
        for (const Zr in this._textureArrays) Sr.setTextureArray(Zr, this._textureArrays[Zr]);
        for (const Zr in this._externalTextures) Sr.setExternalTexture(Zr, this._externalTextures[Zr]);
        for (const Zr in this._ints) Sr.setInt(Zr, this._ints[Zr]);
        for (const Zr in this._uints) Sr.setUInt(Zr, this._uints[Zr]);
        for (const Zr in this._floats) Sr.setFloat(Zr, this._floats[Zr]);
        for (const Zr in this._floatsArrays) Sr.setFloats(Zr, this._floatsArrays[Zr]);
        for (const Zr in this._colors3) Sr.setColor3(Zr, this._colors3[Zr]);
        for (const Zr in this._colors3Arrays) Sr._colors3Arrays[Zr] = this._colors3Arrays[Zr];
        for (const Zr in this._colors4) Sr.setColor4(Zr, this._colors4[Zr]);
        for (const Zr in this._colors4Arrays) Sr._colors4Arrays[Zr] = this._colors4Arrays[Zr];
        for (const Zr in this._vectors2) Sr.setVector2(Zr, this._vectors2[Zr]);
        for (const Zr in this._vectors3) Sr.setVector3(Zr, this._vectors3[Zr]);
        for (const Zr in this._vectors4) Sr.setVector4(Zr, this._vectors4[Zr]);
        for (const Zr in this._quaternions) Sr.setQuaternion(Zr, this._quaternions[Zr]);
        for (const Zr in this._quaternionsArrays) Sr._quaternionsArrays[Zr] = this._quaternionsArrays[Zr];
        for (const Zr in this._matrices) Sr.setMatrix(Zr, this._matrices[Zr]);
        for (const Zr in this._matrixArrays) Sr._matrixArrays[Zr] = this._matrixArrays[Zr].slice();
        for (const Zr in this._matrices3x3) Sr.setMatrix3x3(Zr, this._matrices3x3[Zr]);
        for (const Zr in this._matrices2x2) Sr.setMatrix2x2(Zr, this._matrices2x2[Zr]);
        for (const Zr in this._vectors2Arrays) Sr.setArray2(Zr, this._vectors2Arrays[Zr]);
        for (const Zr in this._vectors3Arrays) Sr.setArray3(Zr, this._vectors3Arrays[Zr]);
        for (const Zr in this._vectors4Arrays) Sr.setArray4(Zr, this._vectors4Arrays[Zr]);
        for (const Zr in this._uniformBuffers) Sr.setUniformBuffer(Zr, this._uniformBuffers[Zr]);
        for (const Zr in this._textureSamplers) Sr.setTextureSampler(Zr, this._textureSamplers[Zr]);
        for (const Zr in this._storageBuffers) Sr.setStorageBuffer(Zr, this._storageBuffers[Zr]);
        return Sr
      }
      dispose(rr, Sr, Qr) {
        if (Sr) {
          let rr;
          for (rr in this._textures) this._textures[rr].dispose();
          for (rr in this._internalTextures) this._internalTextures[rr].dispose();
          for (rr in this._textureArrays) {
            const Sr = this._textureArrays[rr];
            for (let rr = 0; rr < Sr.length; rr++) Sr[rr].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(rr, Sr, Qr)
      }
      serialize() {
        const rr = Zr.e.Serialize(this);
        let Sr;
        for (Sr in rr.customType = "BABYLON.ShaderMaterial", rr.uniqueId = this.uniqueId, rr.options = this._options, rr.shaderPath = this._shaderPath, rr.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, rr.stencil = this.stencil.serialize(), rr.textures = {}, this._textures) rr.textures[Sr] = this._textures[Sr].serialize();
        for (Sr in rr.textureArrays = {}, this._textureArrays) {
          rr.textureArrays[Sr] = [];
          const Qr = this._textureArrays[Sr];
          for (let Zr = 0; Zr < Qr.length; Zr++) rr.textureArrays[Sr].push(Qr[Zr].serialize())
        }
        for (Sr in rr.ints = {}, this._ints) rr.ints[Sr] = this._ints[Sr];
        for (Sr in rr.uints = {}, this._uints) rr.uints[Sr] = this._uints[Sr];
        for (Sr in rr.floats = {}, this._floats) rr.floats[Sr] = this._floats[Sr];
        for (Sr in rr.floatsArrays = {}, this._floatsArrays) rr.floatsArrays[Sr] = this._floatsArrays[Sr];
        for (Sr in rr.colors3 = {}, this._colors3) {
          const Qr = this._colors3[Sr];
          rr.colors3[Sr] = [Qr.r, Qr.g, Qr.b]
        }
        for (Sr in rr.colors3Arrays = {}, this._colors3Arrays) rr.colors3Arrays[Sr] = this._colors3Arrays[Sr];
        for (Sr in rr.colors4 = {}, this._colors4) {
          const Qr = this._colors4[Sr];
          rr.colors4[Sr] = [Qr.r, Qr.g, Qr.b, Qr.a]
        }
        for (Sr in rr.colors4Arrays = {}, this._colors4Arrays) rr.colors4Arrays[Sr] = this._colors4Arrays[Sr];
        for (Sr in rr.vectors2 = {}, this._vectors2) {
          const Qr = this._vectors2[Sr];
          rr.vectors2[Sr] = [Qr.x, Qr.y]
        }
        for (Sr in rr.vectors3 = {}, this._vectors3) {
          const Qr = this._vectors3[Sr];
          rr.vectors3[Sr] = [Qr.x, Qr.y, Qr.z]
        }
        for (Sr in rr.vectors4 = {}, this._vectors4) {
          const Qr = this._vectors4[Sr];
          rr.vectors4[Sr] = [Qr.x, Qr.y, Qr.z, Qr.w]
        }
        for (Sr in rr.quaternions = {}, this._quaternions) rr.quaternions[Sr] = this._quaternions[Sr].OWr();
        for (Sr in rr.matrices = {}, this._matrices) rr.matrices[Sr] = this._matrices[Sr].OWr();
        for (Sr in rr.matrixArray = {}, this._matrixArrays) rr.matrixArray[Sr] = this._matrixArrays[Sr];
        for (Sr in rr.matrices3x3 = {}, this._matrices3x3) rr.matrices3x3[Sr] = this._matrices3x3[Sr];
        for (Sr in rr.matrices2x2 = {}, this._matrices2x2) rr.matrices2x2[Sr] = this._matrices2x2[Sr];
        for (Sr in rr.vectors2Arrays = {}, this._vectors2Arrays) rr.vectors2Arrays[Sr] = this._vectors2Arrays[Sr];
        for (Sr in rr.vectors3Arrays = {}, this._vectors3Arrays) rr.vectors3Arrays[Sr] = this._vectors3Arrays[Sr];
        for (Sr in rr.vectors4Arrays = {}, this._vectors4Arrays) rr.vectors4Arrays[Sr] = this._vectors4Arrays[Sr];
        for (Sr in rr.quaternionsArrays = {}, this._quaternionsArrays) rr.quaternionsArrays[Sr] = this._quaternionsArrays[Sr];
        return rr
      }
    }

    function Yr(rr, Sr, Qr) {
      const Wr = Zr.e.Parse((() => new zr(rr.name, Sr, rr.shaderPath, rr.options, rr.storeEffectOnSubMeshes)), rr, Sr, Qr);
      let jr;
      for (jr in rr.stencil && Wr.stencil.parse(rr.stencil, Sr, Qr), rr.textures) Wr.setTexture(jr, Ir.f.Parse(rr.textures[jr], Sr, Qr));
      for (jr in rr.textureArrays) {
        const Zr = rr.textureArrays[jr],
          ar = [];
        for (let rr = 0; rr < Zr.length; rr++) ar.push(Ir.f.Parse(Zr[rr], Sr, Qr));
        Wr.setTextureArray(jr, ar)
      }
      for (jr in rr.ints) Wr.setInt(jr, rr.ints[jr]);
      for (jr in rr.uints) Wr.setUInt(jr, rr.uints[jr]);
      for (jr in rr.floats) Wr.setFloat(jr, rr.floats[jr]);
      for (jr in rr.floatsArrays) Wr.setFloats(jr, rr.floatsArrays[jr]);
      for (jr in rr.colors3) {
        const Sr = rr.colors3[jr];
        Wr.setColor3(jr, {
          r: Sr[0],
          g: Sr[1],
          b: Sr[2]
        })
      }
      for (jr in rr.colors3Arrays) {
        const Sr = rr.colors3Arrays[jr].reduce(((rr, Sr, Qr) => (Qr % 3 === 0 ? rr.push([Sr]) : rr[rr.length - 1].push(Sr), rr)), []).map((rr => ({
          r: rr[0],
          g: rr[1],
          b: rr[2]
        })));
        Wr.setColor3Array(jr, Sr)
      }
      for (jr in rr.colors4) {
        const Sr = rr.colors4[jr];
        Wr.setColor4(jr, {
          r: Sr[0],
          g: Sr[1],
          b: Sr[2],
          a: Sr[3]
        })
      }
      for (jr in rr.colors4Arrays) {
        const Sr = rr.colors4Arrays[jr].reduce(((rr, Sr, Qr) => (Qr % 4 === 0 ? rr.push([Sr]) : rr[rr.length - 1].push(Sr), rr)), []).map((rr => ({
          r: rr[0],
          g: rr[1],
          b: rr[2],
          a: rr[3]
        })));
        Wr.setColor4Array(jr, Sr)
      }
      for (jr in rr.vectors2) {
        const Sr = rr.vectors2[jr];
        Wr.setVector2(jr, {
          x: Sr[0],
          y: Sr[1]
        })
      }
      for (jr in rr.vectors3) {
        const Sr = rr.vectors3[jr];
        Wr.setVector3(jr, {
          x: Sr[0],
          y: Sr[1],
          z: Sr[2]
        })
      }
      for (jr in rr.vectors4) {
        const Sr = rr.vectors4[jr];
        Wr.setVector4(jr, {
          x: Sr[0],
          y: Sr[1],
          z: Sr[2],
          w: Sr[3]
        })
      }
      for (jr in rr.quaternions) Wr.setQuaternion(jr, ar.h.FromArray(rr.quaternions[jr]));
      for (jr in rr.matrices) Wr.setMatrix(jr, ar.d.FromArray(rr.matrices[jr]));
      const fr = Wr;
      for (jr in rr.matrixArray) fr._matrixArrays[jr] = new Float32Array(rr.matrixArray[jr]);
      for (jr in rr.matrices3x3) Wr.setMatrix3x3(jr, rr.matrices3x3[jr]);
      for (jr in rr.matrices2x2) Wr.setMatrix2x2(jr, rr.matrices2x2[jr]);
      for (jr in rr.vectors2Arrays) Wr.setArray2(jr, rr.vectors2Arrays[jr]);
      for (jr in rr.vectors3Arrays) Wr.setArray3(jr, rr.vectors3Arrays[jr]);
      for (jr in rr.vectors4Arrays) Wr.setArray4(jr, rr.vectors4Arrays[jr]);
      for (jr in rr.quaternionsArrays) Wr.setArray4(jr, rr.quaternionsArrays[jr]);
      return Wr
    }
    async function nr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((Wr, ar) => {
        const jr = new Er.b;
        jr.addEventListener("readystatechange", (() => {
          if (4 == jr.readyState)
            if (200 == jr.status) {
              const Sr = Yr(JSON.parse(jr.responseText), Qr || xr.b.LastCreatedScene, Zr);
              rr && (Sr.name = rr), Wr(Sr)
            } else ar("Unable to load the ShaderMaterial")
        })), jr.open("GET", Sr), jr.send()
      }))
    }
    async function er(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Zr = this?.SnippetUrl ?? zr.SnippetUrl;
      return await new Promise(((Wr, ar) => {
        const jr = new Er.b;
        jr.addEventListener("readystatechange", (() => {
          if (4 == jr.readyState)
            if (200 == jr.status) {
              const Zr = JSON.parse(JSON.parse(jr.responseText).jsonPayload),
                ar = Yr(JSON.parse(Zr.shaderMaterial), Sr || xr.b.LastCreatedScene, Qr);
              ar.snippetId = rr, Wr(ar)
            } else ar("Unable to load the snippet " + rr)
        })), jr.open("GET", Zr + "/" + rr.replace(/#/g, "/")), jr.send()
      }))
    }
    zr.SnippetUrl = "https://snippet.babylonjs.com";
    const Kr = er;
    let yr = !1;

    function Br() {
      yr || (yr = !0, zr.Parse = Yr, zr.ParseFromFileAsync = nr, zr.ParseFromSnippetAsync = er, zr.CreateFromSnippetAsync = Kr, (0, tr.e)("BABYLON.ShaderMaterial", zr))
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);