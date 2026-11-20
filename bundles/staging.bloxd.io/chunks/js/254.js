export const id = 254;
export const ids = [254];
export const modules = {
  40047: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => ku,
      g: () => bu,
      k: () => Hu,
      n: () => du,
      r: () => ju,
      s: () => Wu
    });
    var Eu = yu(39582),
      Ku = yu(39647),
      Qu = yu(36830),
      mu = yu(39706),
      Ju = yu(40054),
      Nu = yu(39931),
      Xu = yu(39611),
      Vu = yu(39923),
      ru = yu(36851),
      Bu = yu(39913),
      xu = yu(39905),
      Su = yu(39941),
      pu = yu(36871);
    const Tu = {
      effect: null,
      subMesh: null
    };
    class Wu extends Vu.e {
      constructor(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(uu, Ru, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new Qu.d, this._cachedWorldViewProjectionMatrix = new Qu.d, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = yu, this._options = {
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
          ...Eu
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(uu) {
        this._shaderPath = uu
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
      _checkUniform(uu) {
        -1 === this._options.uniforms.indexOf(uu) && this._options.uniforms.push(uu)
      }
      setTexture(uu, Ru) {
        return -1 === this._options.samplers.indexOf(uu) && this._options.samplers.push(uu), this._textures[uu] = Ru, this
      }
      setInternalTexture(uu, Ru) {
        return -1 === this._options.samplers.indexOf(uu) && this._options.samplers.push(uu), this._internalTextures[uu] = Ru, this
      }
      removeTexture(uu) {
        delete this._textures[uu]
      }
      setTextureArray(uu, Ru) {
        return -1 === this._options.samplers.indexOf(uu) && this._options.samplers.push(uu), this._checkUniform(uu), this._textureArrays[uu] = Ru, this
      }
      setExternalTexture(uu, Ru) {
        return -1 === this._options.externalTextures.indexOf(uu) && this._options.externalTextures.push(uu), this._externalTextures[uu] = Ru, this
      }
      setFloat(uu, Ru) {
        return this._checkUniform(uu), this._floats[uu] = Ru, this
      }
      setInt(uu, Ru) {
        return this._checkUniform(uu), this._ints[uu] = Ru, this
      }
      setUInt(uu, Ru) {
        return this._checkUniform(uu), this._uints[uu] = Ru, this
      }
      setFloats(uu, Ru) {
        return this._checkUniform(uu), this._floatsArrays[uu] = Ru, this
      }
      setColor3(uu, Ru) {
        return this._checkUniform(uu), this._colors3[uu] = Ru, this
      }
      setColor3Array(uu, Ru) {
        return this._checkUniform(uu), this._colors3Arrays[uu] = Ru.reduce(((uu, Ru) => (uu.push(Ru.r, Ru.g, Ru.b), uu)), []), this
      }
      setColor4(uu, Ru) {
        return this._checkUniform(uu), this._colors4[uu] = Ru, this
      }
      setColor4Array(uu, Ru) {
        return this._checkUniform(uu), this._colors4Arrays[uu] = Ru.reduce(((uu, Ru) => (uu.push(Ru.r, Ru.g, Ru.b, Ru.a), uu)), []), this
      }
      setVector2(uu, Ru) {
        return this._checkUniform(uu), this._vectors2[uu] = Ru, this
      }
      setVector3(uu, Ru) {
        return this._checkUniform(uu), this._vectors3[uu] = Ru, this
      }
      setVector4(uu, Ru) {
        return this._checkUniform(uu), this._vectors4[uu] = Ru, this
      }
      setQuaternion(uu, Ru) {
        return this._checkUniform(uu), this._quaternions[uu] = Ru, this
      }
      setQuaternionArray(uu, Ru) {
        return this._checkUniform(uu), this._quaternionsArrays[uu] = Ru.reduce(((uu, Ru) => (Ru.toArray(uu, uu.length), uu)), []), this
      }
      setMatrix(uu, Ru) {
        return this._checkUniform(uu), this._matrices[uu] = Ru, this
      }
      setMatrices(uu, Ru) {
        this._checkUniform(uu);
        const yu = new Float32Array(16 * Ru.length);
        for (let Eu = 0; Eu < Ru.length; Eu++) {
          Ru[Eu].copyToArray(yu, 16 * Eu)
        }
        return this._matrixArrays[uu] = yu, this
      }
      setMatrix3x3(uu, Ru) {
        return this._checkUniform(uu), this._matrices3x3[uu] = Ru, this
      }
      setMatrix2x2(uu, Ru) {
        return this._checkUniform(uu), this._matrices2x2[uu] = Ru, this
      }
      setArray2(uu, Ru) {
        return this._checkUniform(uu), this._vectors2Arrays[uu] = Ru, this
      }
      setArray3(uu, Ru) {
        return this._checkUniform(uu), this._vectors3Arrays[uu] = Ru, this
      }
      setArray4(uu, Ru) {
        return this._checkUniform(uu), this._vectors4Arrays[uu] = Ru, this
      }
      setUniformBuffer(uu, Ru) {
        return -1 === this._options.uniformBuffers.indexOf(uu) && this._options.uniformBuffers.push(uu), this._uniformBuffers[uu] = Ru, this
      }
      setTextureSampler(uu, Ru) {
        return -1 === this._options.samplerObjects.indexOf(uu) && this._options.samplerObjects.push(uu), this._textureSamplers[uu] = Ru, this
      }
      setStorageBuffer(uu, Ru) {
        return -1 === this._options.storageBuffers.indexOf(uu) && this._options.storageBuffers.push(uu), this._storageBuffers[uu] = Ru, this
      }
      setDefine(uu, Ru) {
        const yu = uu.trimEnd() + " ",
          Eu = this.options.defines.findIndex((Ru => Ru === uu || Ru.startsWith(yu)));
        return Eu >= 0 && this.options.defines.splice(Eu, 1), ("boolean" !== typeof Ru || Ru) && this.options.defines.push(yu + Ru), this
      }
      isReadyForSubMesh(uu, Ru, yu) {
        return this.isReady(uu, yu, Ru)
      }
      isReady(uu, Ru, yu) {
        const Eu = yu && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const uu = Eu ? yu._drawWrapper : this._drawWrapper;
          if (uu.effect && uu._wasPreviouslyReady && uu._wasPreviouslyUsingInstances === Ru) return !0
        }
        const Qu = this.lD(),
          Ju = Qu.eS(),
          Xu = [],
          Vu = [];
        let ru = null,
          pu = this._shaderPath,
          Wu = this._options.uniforms,
          ju = this._options.uniformBuffers,
          Hu = this._options.samplers;
        Ju.getCaps().multiview && Qu.activeCamera && Qu.activeCamera.outputRenderTarget && Qu.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, Xu.push("#define MULTIVIEW"), -1 !== Wu.indexOf("viewProjection") && -1 === Wu.indexOf("viewProjectionR") && Wu.push("viewProjectionR"));
        for (let Ku = 0; Ku < this._options.defines.length; Ku++) {
          const uu = 0 === this._options.defines[Ku].indexOf("#define") ? this._options.defines[Ku] : `#define ${this._options.defines[Ku]}`;
          Xu.push(uu)
        }
        for (let Ku = 0; Ku < this._options.attributes.length; Ku++) Vu.push(this._options.attributes[Ku]);
        if (uu && uu.isVerticesDataPresent(mu.h.ColorKind) && (-1 === Vu.indexOf(mu.h.ColorKind) && Vu.push(mu.h.ColorKind), Xu.push("#define VERTEXCOLOR")), Ru && (Xu.push("#define INSTANCES"), (0, xu.Cb)(Vu, this._materialHelperNeedsPreviousMatrices), uu?.hasThinInstances && (Xu.push("#define THIN_INSTANCES"), uu && uu.isVerticesDataPresent(mu.h.ColorInstanceKind) && (Vu.push(mu.h.ColorInstanceKind), Xu.push("#define INSTANCESCOLOR")))), uu && uu.useBones && uu.computeBonesUsingShaders && uu.skeleton) {
          Vu.push(mu.h.MatricesIndicesKind), Vu.push(mu.h.MatricesWeightsKind), uu.numBoneInfluencers > 4 && (Vu.push(mu.h.MatricesIndicesExtraKind), Vu.push(mu.h.MatricesWeightsExtraKind));
          const Ru = uu.skeleton;
          Xu.push("#define NUM_BONE_INFLUENCERS " + uu.numBoneInfluencers), ru = new Nu.d, ru.addCPUSkinningFallback(0, uu), Ru.isUsingTextureForMatrices ? (Xu.push("#define BONETEXTURE"), -1 === Wu.indexOf("boneTextureInfo") && Wu.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (Xu.push("#define BonesPerMesh " + (Ru.bones.length + 1)), -1 === Wu.indexOf("mBones") && Wu.push("mBones"))
        } else Xu.push("#define NUM_BONE_INFLUENCERS 0");
        let du = 0;
        const bu = uu ? uu.morphTargetManager : null;
        if (bu) {
          const Ru = -1 !== Xu.indexOf("#define UV1"),
            yu = -1 !== Xu.indexOf("#define UV2"),
            Eu = -1 !== Xu.indexOf("#define TANGENT"),
            Ku = -1 !== Xu.indexOf("#define NORMAL"),
            Qu = -1 !== Xu.indexOf("#define VERTEXCOLOR");
          du = (0, xu.T)(bu, Xu, Vu, uu, !0, Ku, Eu, Ru, yu, Qu), bu.isUsingTextureForTargets && (-1 === Wu.indexOf("morphTargetTextureIndices") && Wu.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), du > 0 && (Wu = Wu.slice(), Wu.push("morphTargetInfluences"), Wu.push("morphTargetCount"), Wu.push("morphTargetTextureInfo"), Wu.push("morphTargetTextureIndices"))
        } else Xu.push("#define NUM_MORPH_INFLUENCERS 0");
        if (uu) {
          const yu = uu.bakedVertexAnimationManager;
          yu && yu.isEnabled && (Xu.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === Wu.indexOf("bakedVertexAnimationSettings") && Wu.push("bakedVertexAnimationSettings"), -1 === Wu.indexOf("bakedVertexAnimationTextureSizeInverted") && Wu.push("bakedVertexAnimationTextureSizeInverted"), -1 === Wu.indexOf("bakedVertexAnimationTime") && Wu.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), Ru && Vu.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const Ku in this._textures)
          if (!this._textures[Ku].isReady()) return !1;
        for (const Ku in this._internalTextures)
          if (!this._internalTextures[Ku].isReady) return !1;
        uu && this.needAlphaTestingForMesh(uu) && Xu.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, Bu.c)(Wu), (0, Bu.k)(this, Qu, Xu)), Qu.fogEnabled && uu?.applyFog && Qu.fogMode !== Ku.i.FOGMODE_NONE && (Xu.push("#define FOG"), -1 === Wu.indexOf("view") && Wu.push("view"), -1 === Wu.indexOf("vFogInfos") && Wu.push("vFogInfos"), -1 === Wu.indexOf("vFogColor") && Wu.push("vFogColor")), this._useLogarithmicDepth && (Xu.push("#define LOGARITHMICDEPTH"), -1 === Wu.indexOf("logarithmicDepthConstant") && Wu.push("logarithmicDepthConstant"));
        const Cu = yu ? yu.getRenderingMesh() : uu;
        if (Cu && this.useVertexPulling) {
          const uu = Cu.geometry;
          uu && (this._vertexPullingMetadata = (0, Su.e)(uu), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((uu, Ru) => {
            Wu.push(`vp_${Ru}_info`)
          }))), Xu.push("#define USE_VERTEX_PULLING");
          const Ru = Cu.geometry?.getIndexBuffer();
          Ru && !Cu.isUnIndexed && (Xu.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), Ru.is32Bits && Xu.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (Wu = Wu.slice(), ju = ju.slice(), Hu = Hu.slice(), pu = this.customShaderNameResolve(this.name, Wu, ju, Hu, Xu, Vu));
        const ku = Eu ? yu._getDrawWrapper(void 0, !0) : this._drawWrapper,
          eu = ku?.effect ?? null,
          Au = ku?.defines ?? null,
          Du = Xu.join("\n");
        let Mu = eu;
        return Au !== Du && (Mu = Ju.createEffect(pu, {
          attributes: Vu,
          uniformsNames: Wu,
          uniformBuffersNames: ju,
          samplers: Hu,
          defines: Du,
          fallbacks: ru,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: du
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, Ju), Eu ? yu.setEffect(Mu, Du, this._materialContext) : ku && ku.setEffect(Mu, Du), this._onEffectCreatedObservable && (Tu.effect = Mu, Tu.subMesh = yu ?? uu?.mC[0] ?? null, this._onEffectCreatedObservable.notifyObservers(Tu))), ku._wasPreviouslyUsingInstances = !!Ru, !!Mu?.isReady() && (eu !== Mu && Qu.resetCachedMaterial(), ku._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(uu, Ru) {
        const yu = Ru ?? this.getEffect();
        if (!yu) return;
        const Eu = this._options.uniforms; - 1 !== Eu.indexOf("world") && yu.setMatrix("world", uu);
        const Ku = this.lD(); - 1 !== Eu.indexOf("worldView") && (uu.multiplyToRef(Ku.getViewMatrix(), this._cachedWorldViewMatrix), yu.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Eu.indexOf("worldViewProjection") && (uu.multiplyToRef(Ku.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), yu.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== Eu.indexOf("view") && yu.setMatrix("view", Ku.getViewMatrix())
      }
      bindForSubMesh(uu, Ru, yu) {
        this.bind(uu, Ru, yu._drawWrapperOverride?.effect, yu)
      }
      bind(uu, Ru, yu, Eu) {
        const Ku = Eu && this._storeEffectOnSubMeshes,
          Qu = yu ?? (Ku ? Eu.effect : this.getEffect());
        if (!Qu) return;
        const mu = this.lD();
        this._activeEffect = Qu, this.bindOnlyWorldMatrix(uu, yu);
        const Ju = this._options.uniformBuffers;
        let Nu = !1;
        if (Qu && Ju && Ju.length > 0 && mu.eS().supportsUniformBuffers)
          for (let Vu = 0; Vu < Ju.length; ++Vu) {
            switch (Ju[Vu]) {
              case "Mesh":
                Ru && (Ru.getMeshUniformBuffer().bindToEffect(Qu, "Mesh"), Ru.transferToEffect(uu));
                break;
              case "Scene":
                (0, xu.C)(Qu, mu.getSceneUniformBuffer()), mu.finalizeSceneUbo(), Nu = !0
            }
          }
        const Xu = Ru && Ku ? this._mustRebind(mu, Qu, Eu, Ru.visibility) : mu.getCachedMaterial() !== this;
        if (Qu && Xu) {
          let uu;
          for (uu in Nu || -1 === this._options.uniforms.indexOf("view") || Qu.setMatrix("view", mu.getViewMatrix()), Nu || -1 === this._options.uniforms.indexOf("projection") || Qu.setMatrix("projection", mu.getProjectionMatrix()), Nu || -1 === this._options.uniforms.indexOf("viewProjection") || (Qu.setMatrix("viewProjection", mu.getTransformMatrix()), this._multiview && Qu.setMatrix("viewProjectionR", mu._transformMatrixR)), mu.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && Qu.setVector3("cameraPosition", mu.activeCamera.globalPosition), (0, xu.f)(Ru, Qu), (0, Bu.f)(Qu, this, mu), this._vertexPullingMetadata && (0, Su.c)(Qu, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, xu.u)(Ku ? Eu.materialDefines : Qu.defines, Qu, mu), Ru && (0, xu.g)(mu, Ru, Qu), this._textures) Qu.setTexture(uu, this._textures[uu]);
          for (uu in this._internalTextures) Qu._bindTexture(uu, this._internalTextures[uu]);
          for (uu in this._textureArrays) Qu.setTextureArray(uu, this._textureArrays[uu]);
          for (uu in this._ints) Qu.setInt(uu, this._ints[uu]);
          for (uu in this._uints) Qu.setUInt(uu, this._uints[uu]);
          for (uu in this._floats) Qu.setFloat(uu, this._floats[uu]);
          for (uu in this._floatsArrays) Qu.setArray(uu, this._floatsArrays[uu]);
          for (uu in this._colors3) Qu.setColor3(uu, this._colors3[uu]);
          for (uu in this._colors3Arrays) Qu.setArray3(uu, this._colors3Arrays[uu]);
          for (uu in this._colors4) {
            const Ru = this._colors4[uu];
            Qu.setFloat4(uu, Ru.r, Ru.g, Ru.b, Ru.a)
          }
          for (uu in this._colors4Arrays) Qu.setArray4(uu, this._colors4Arrays[uu]);
          for (uu in this._vectors2) Qu.setVector2(uu, this._vectors2[uu]);
          for (uu in this._vectors3) Qu.setVector3(uu, this._vectors3[uu]);
          for (uu in this._vectors4) Qu.setVector4(uu, this._vectors4[uu]);
          for (uu in this._quaternions) Qu.setQuaternion(uu, this._quaternions[uu]);
          for (uu in this._matrices) Qu.setMatrix(uu, this._matrices[uu]);
          for (uu in this._matrixArrays) Qu.setMatrices(uu, this._matrixArrays[uu]);
          for (uu in this._matrices3x3) Qu.setMatrix3x3(uu, this._matrices3x3[uu]);
          for (uu in this._matrices2x2) Qu.setMatrix2x2(uu, this._matrices2x2[uu]);
          for (uu in this._vectors2Arrays) Qu.setArray2(uu, this._vectors2Arrays[uu]);
          for (uu in this._vectors3Arrays) Qu.setArray3(uu, this._vectors3Arrays[uu]);
          for (uu in this._vectors4Arrays) Qu.setArray4(uu, this._vectors4Arrays[uu]);
          for (uu in this._quaternionsArrays) Qu.setArray4(uu, this._quaternionsArrays[uu]);
          for (uu in this._uniformBuffers) {
            const Ru = this._uniformBuffers[uu].getBuffer();
            Ru && Qu.bindUniformBuffer(Ru, uu)
          }
          const yu = mu.eS(),
            Ju = yu.setExternalTexture;
          if (Ju)
            for (uu in this._externalTextures) Ju.call(yu, uu, this._externalTextures[uu]);
          const Xu = yu.setTextureSampler;
          if (Xu)
            for (uu in this._textureSamplers) Xu.call(yu, uu, this._textureSamplers[uu]);
          const Vu = yu.setStorageBuffer;
          if (Vu)
            for (uu in this._storageBuffers) Vu.call(yu, uu, this._storageBuffers[uu])
        }
        if (Qu && Ru && (Xu || !this.isFrozen)) {
          (0, xu.y)(Ru, Qu), Ru.morphTargetManager && Ru.morphTargetManager.isUsingTextureForTargets && Ru.morphTargetManager._bind(Qu);
          const uu = Ru.bakedVertexAnimationManager;
          if (uu && uu.isEnabled) {
            const uu = Ku ? Eu._drawWrapper : this._drawWrapper;
            Ru.bakedVertexAnimationManager?.bind(Qu, !!uu._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(Ru, Qu, Eu)
      }
      getActiveTextures() {
        const uu = super.getActiveTextures();
        for (const Ru in this._textures) uu.push(this._textures[Ru]);
        for (const Ru in this._textureArrays) {
          const yu = this._textureArrays[Ru];
          for (let Ru = 0; Ru < yu.length; Ru++) uu.push(yu[Ru])
        }
        return uu
      }
      hasTexture(uu) {
        if (super.hasTexture(uu)) return !0;
        for (const yu in this._textures)
          if (this._textures[yu] === uu) return !0;
        const Ru = uu.getInternalTexture();
        for (const yu in this._internalTextures)
          if (this._internalTextures[yu] === Ru) return !0;
        for (const yu in this._textureArrays) {
          const Ru = this._textureArrays[yu];
          for (let yu = 0; yu < Ru.length; yu++)
            if (Ru[yu] === uu) return !0
        }
        return !1
      }
      clone(uu) {
        const Ru = Eu.c.Clone((() => new Wu(uu, this.lD(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        Ru.name = uu, Ru.id = uu, "object" === typeof Ru._shaderPath && (Ru._shaderPath = {
          ...Ru._shaderPath
        }), this._options = {
          ...this._options
        };
        const yu = Object.keys(this._options);
        for (const Eu of yu) {
          const uu = this._options[Eu];
          Array.isArray(uu) && (this._options[Eu] = uu.slice(0))
        }
        this.stencil.copyTo(Ru.stencil);
        for (const Eu in this._textures) Ru.setTexture(Eu, this._textures[Eu]);
        for (const Eu in this._internalTextures) Ru.setInternalTexture(Eu, this._internalTextures[Eu]);
        for (const Eu in this._textureArrays) Ru.setTextureArray(Eu, this._textureArrays[Eu]);
        for (const Eu in this._externalTextures) Ru.setExternalTexture(Eu, this._externalTextures[Eu]);
        for (const Eu in this._ints) Ru.setInt(Eu, this._ints[Eu]);
        for (const Eu in this._uints) Ru.setUInt(Eu, this._uints[Eu]);
        for (const Eu in this._floats) Ru.setFloat(Eu, this._floats[Eu]);
        for (const Eu in this._floatsArrays) Ru.setFloats(Eu, this._floatsArrays[Eu]);
        for (const Eu in this._colors3) Ru.setColor3(Eu, this._colors3[Eu]);
        for (const Eu in this._colors3Arrays) Ru._colors3Arrays[Eu] = this._colors3Arrays[Eu];
        for (const Eu in this._colors4) Ru.setColor4(Eu, this._colors4[Eu]);
        for (const Eu in this._colors4Arrays) Ru._colors4Arrays[Eu] = this._colors4Arrays[Eu];
        for (const Eu in this._vectors2) Ru.setVector2(Eu, this._vectors2[Eu]);
        for (const Eu in this._vectors3) Ru.setVector3(Eu, this._vectors3[Eu]);
        for (const Eu in this._vectors4) Ru.setVector4(Eu, this._vectors4[Eu]);
        for (const Eu in this._quaternions) Ru.setQuaternion(Eu, this._quaternions[Eu]);
        for (const Eu in this._quaternionsArrays) Ru._quaternionsArrays[Eu] = this._quaternionsArrays[Eu];
        for (const Eu in this._matrices) Ru.setMatrix(Eu, this._matrices[Eu]);
        for (const Eu in this._matrixArrays) Ru._matrixArrays[Eu] = this._matrixArrays[Eu].slice();
        for (const Eu in this._matrices3x3) Ru.setMatrix3x3(Eu, this._matrices3x3[Eu]);
        for (const Eu in this._matrices2x2) Ru.setMatrix2x2(Eu, this._matrices2x2[Eu]);
        for (const Eu in this._vectors2Arrays) Ru.setArray2(Eu, this._vectors2Arrays[Eu]);
        for (const Eu in this._vectors3Arrays) Ru.setArray3(Eu, this._vectors3Arrays[Eu]);
        for (const Eu in this._vectors4Arrays) Ru.setArray4(Eu, this._vectors4Arrays[Eu]);
        for (const Eu in this._uniformBuffers) Ru.setUniformBuffer(Eu, this._uniformBuffers[Eu]);
        for (const Eu in this._textureSamplers) Ru.setTextureSampler(Eu, this._textureSamplers[Eu]);
        for (const Eu in this._storageBuffers) Ru.setStorageBuffer(Eu, this._storageBuffers[Eu]);
        return Ru
      }
      dispose(uu, Ru, yu) {
        if (Ru) {
          let uu;
          for (uu in this._textures) this._textures[uu].dispose();
          for (uu in this._internalTextures) this._internalTextures[uu].dispose();
          for (uu in this._textureArrays) {
            const Ru = this._textureArrays[uu];
            for (let uu = 0; uu < Ru.length; uu++) Ru[uu].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(uu, Ru, yu)
      }
      serialize() {
        const uu = Eu.c.Serialize(this);
        let Ru;
        for (Ru in uu.customType = "BABYLON.ShaderMaterial", uu.uniqueId = this.uniqueId, uu.options = this._options, uu.shaderPath = this._shaderPath, uu.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, uu.stencil = this.stencil.serialize(), uu.textures = {}, this._textures) uu.textures[Ru] = this._textures[Ru].serialize();
        for (Ru in uu.textureArrays = {}, this._textureArrays) {
          uu.textureArrays[Ru] = [];
          const yu = this._textureArrays[Ru];
          for (let Eu = 0; Eu < yu.length; Eu++) uu.textureArrays[Ru].push(yu[Eu].serialize())
        }
        for (Ru in uu.ints = {}, this._ints) uu.ints[Ru] = this._ints[Ru];
        for (Ru in uu.uints = {}, this._uints) uu.uints[Ru] = this._uints[Ru];
        for (Ru in uu.floats = {}, this._floats) uu.floats[Ru] = this._floats[Ru];
        for (Ru in uu.floatsArrays = {}, this._floatsArrays) uu.floatsArrays[Ru] = this._floatsArrays[Ru];
        for (Ru in uu.colors3 = {}, this._colors3) {
          const yu = this._colors3[Ru];
          uu.colors3[Ru] = [yu.r, yu.g, yu.b]
        }
        for (Ru in uu.colors3Arrays = {}, this._colors3Arrays) uu.colors3Arrays[Ru] = this._colors3Arrays[Ru];
        for (Ru in uu.colors4 = {}, this._colors4) {
          const yu = this._colors4[Ru];
          uu.colors4[Ru] = [yu.r, yu.g, yu.b, yu.a]
        }
        for (Ru in uu.colors4Arrays = {}, this._colors4Arrays) uu.colors4Arrays[Ru] = this._colors4Arrays[Ru];
        for (Ru in uu.vectors2 = {}, this._vectors2) {
          const yu = this._vectors2[Ru];
          uu.vectors2[Ru] = [yu.x, yu.y]
        }
        for (Ru in uu.vectors3 = {}, this._vectors3) {
          const yu = this._vectors3[Ru];
          uu.vectors3[Ru] = [yu.x, yu.y, yu.z]
        }
        for (Ru in uu.vectors4 = {}, this._vectors4) {
          const yu = this._vectors4[Ru];
          uu.vectors4[Ru] = [yu.x, yu.y, yu.z, yu.w]
        }
        for (Ru in uu.quaternions = {}, this._quaternions) uu.quaternions[Ru] = this._quaternions[Ru].AEu();
        for (Ru in uu.matrices = {}, this._matrices) uu.matrices[Ru] = this._matrices[Ru].AEu();
        for (Ru in uu.matrixArray = {}, this._matrixArrays) uu.matrixArray[Ru] = this._matrixArrays[Ru];
        for (Ru in uu.matrices3x3 = {}, this._matrices3x3) uu.matrices3x3[Ru] = this._matrices3x3[Ru];
        for (Ru in uu.matrices2x2 = {}, this._matrices2x2) uu.matrices2x2[Ru] = this._matrices2x2[Ru];
        for (Ru in uu.vectors2Arrays = {}, this._vectors2Arrays) uu.vectors2Arrays[Ru] = this._vectors2Arrays[Ru];
        for (Ru in uu.vectors3Arrays = {}, this._vectors3Arrays) uu.vectors3Arrays[Ru] = this._vectors3Arrays[Ru];
        for (Ru in uu.vectors4Arrays = {}, this._vectors4Arrays) uu.vectors4Arrays[Ru] = this._vectors4Arrays[Ru];
        for (Ru in uu.quaternionsArrays = {}, this._quaternionsArrays) uu.quaternionsArrays[Ru] = this._quaternionsArrays[Ru];
        return uu
      }
    }

    function ju(uu, Ru, yu) {
      const Ku = Eu.c.Parse((() => new Wu(uu.name, Ru, uu.shaderPath, uu.options, uu.storeEffectOnSubMeshes)), uu, Ru, yu);
      let mu;
      for (mu in uu.stencil && Ku.stencil.parse(uu.stencil, Ru, yu), uu.textures) Ku.setTexture(mu, Ju.h.Parse(uu.textures[mu], Ru, yu));
      for (mu in uu.textureArrays) {
        const Eu = uu.textureArrays[mu],
          Qu = [];
        for (let uu = 0; uu < Eu.length; uu++) Qu.push(Ju.h.Parse(Eu[uu], Ru, yu));
        Ku.setTextureArray(mu, Qu)
      }
      for (mu in uu.ints) Ku.setInt(mu, uu.ints[mu]);
      for (mu in uu.uints) Ku.setUInt(mu, uu.uints[mu]);
      for (mu in uu.floats) Ku.setFloat(mu, uu.floats[mu]);
      for (mu in uu.floatsArrays) Ku.setFloats(mu, uu.floatsArrays[mu]);
      for (mu in uu.colors3) {
        const Ru = uu.colors3[mu];
        Ku.setColor3(mu, {
          r: Ru[0],
          g: Ru[1],
          b: Ru[2]
        })
      }
      for (mu in uu.colors3Arrays) {
        const Ru = uu.colors3Arrays[mu].reduce(((uu, Ru, yu) => (yu % 3 === 0 ? uu.push([Ru]) : uu[uu.length - 1].push(Ru), uu)), []).map((uu => ({
          r: uu[0],
          g: uu[1],
          b: uu[2]
        })));
        Ku.setColor3Array(mu, Ru)
      }
      for (mu in uu.colors4) {
        const Ru = uu.colors4[mu];
        Ku.setColor4(mu, {
          r: Ru[0],
          g: Ru[1],
          b: Ru[2],
          a: Ru[3]
        })
      }
      for (mu in uu.colors4Arrays) {
        const Ru = uu.colors4Arrays[mu].reduce(((uu, Ru, yu) => (yu % 4 === 0 ? uu.push([Ru]) : uu[uu.length - 1].push(Ru), uu)), []).map((uu => ({
          r: uu[0],
          g: uu[1],
          b: uu[2],
          a: uu[3]
        })));
        Ku.setColor4Array(mu, Ru)
      }
      for (mu in uu.vectors2) {
        const Ru = uu.vectors2[mu];
        Ku.setVector2(mu, {
          x: Ru[0],
          y: Ru[1]
        })
      }
      for (mu in uu.vectors3) {
        const Ru = uu.vectors3[mu];
        Ku.setVector3(mu, {
          x: Ru[0],
          y: Ru[1],
          z: Ru[2]
        })
      }
      for (mu in uu.vectors4) {
        const Ru = uu.vectors4[mu];
        Ku.setVector4(mu, {
          x: Ru[0],
          y: Ru[1],
          z: Ru[2],
          w: Ru[3]
        })
      }
      for (mu in uu.quaternions) Ku.setQuaternion(mu, Qu.f.FromArray(uu.quaternions[mu]));
      for (mu in uu.matrices) Ku.setMatrix(mu, Qu.d.FromArray(uu.matrices[mu]));
      const Nu = Ku;
      for (mu in uu.matrixArray) Nu._matrixArrays[mu] = new Float32Array(uu.matrixArray[mu]);
      for (mu in uu.matrices3x3) Ku.setMatrix3x3(mu, uu.matrices3x3[mu]);
      for (mu in uu.matrices2x2) Ku.setMatrix2x2(mu, uu.matrices2x2[mu]);
      for (mu in uu.vectors2Arrays) Ku.setArray2(mu, uu.vectors2Arrays[mu]);
      for (mu in uu.vectors3Arrays) Ku.setArray3(mu, uu.vectors3Arrays[mu]);
      for (mu in uu.vectors4Arrays) Ku.setArray4(mu, uu.vectors4Arrays[mu]);
      for (mu in uu.quaternionsArrays) Ku.setArray4(mu, uu.quaternionsArrays[mu]);
      return Ku
    }
    async function Hu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((Ku, Qu) => {
        const mu = new Xu.e;
        mu.addEventListener("readystatechange", (() => {
          if (4 == mu.readyState)
            if (200 == mu.status) {
              const Ru = ju(JSON.parse(mu.responseText), yu || ru.b.LastCreatedScene, Eu);
              uu && (Ru.name = uu), Ku(Ru)
            } else Qu("Unable to load the ShaderMaterial")
        })), mu.open("GET", Ru), mu.send()
      }))
    }
    async function du(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Eu = this?.SnippetUrl ?? Wu.SnippetUrl;
      return await new Promise(((Ku, Qu) => {
        const mu = new Xu.e;
        mu.addEventListener("readystatechange", (() => {
          if (4 == mu.readyState)
            if (200 == mu.status) {
              const Eu = JSON.parse(JSON.parse(mu.responseText).jsonPayload),
                Qu = ju(JSON.parse(Eu.shaderMaterial), Ru || ru.b.LastCreatedScene, yu);
              Qu.snippetId = uu, Ku(Qu)
            } else Qu("Unable to load the snippet " + uu)
        })), mu.open("GET", Eu + "/" + uu.replace(/#/g, "/")), mu.send()
      }))
    }
    Wu.SnippetUrl = "https://snippet.babylonjs.com";
    const bu = du;
    let Cu = !1;

    function ku() {
      Cu || (Cu = !0, Wu.Parse = ju, Wu.ParseFromFileAsync = Hu, Wu.ParseFromSnippetAsync = du, Wu.CreateFromSnippetAsync = bu, (0, pu.c)("BABYLON.ShaderMaterial", Wu))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);