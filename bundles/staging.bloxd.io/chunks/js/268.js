export const id = 268;
export const ids = [268];
export const modules = {
  40735: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => wu,
      g: () => Gu,
      i: () => Mu,
      j: () => eu,
      m: () => gu,
      q: () => Du
    });
    var su = ju(40272),
      Uu = ju(40350),
      Zu = ju(37494),
      Xu = ju(40399),
      lu = ju(40739),
      qu = ju(40610),
      fu = ju(40302),
      Cu = ju(40604),
      bu = ju(37506),
      cu = ju(40596),
      Nu = ju(40592),
      Ou = ju(40624),
      Yu = ju(37532);
    const hu = {
      effect: null,
      subMesh: null
    };
    class Du extends Cu.c {
      constructor(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(uu, Eu, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new Zu.e, this._cachedWorldViewProjectionMatrix = new Zu.e, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = ju, this._options = {
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
          ...su
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
      setTexture(uu, Eu) {
        return -1 === this._options.samplers.indexOf(uu) && this._options.samplers.push(uu), this._textures[uu] = Eu, this
      }
      setInternalTexture(uu, Eu) {
        return -1 === this._options.samplers.indexOf(uu) && this._options.samplers.push(uu), this._internalTextures[uu] = Eu, this
      }
      removeTexture(uu) {
        delete this._textures[uu]
      }
      setTextureArray(uu, Eu) {
        return -1 === this._options.samplers.indexOf(uu) && this._options.samplers.push(uu), this._checkUniform(uu), this._textureArrays[uu] = Eu, this
      }
      setExternalTexture(uu, Eu) {
        return -1 === this._options.externalTextures.indexOf(uu) && this._options.externalTextures.push(uu), this._externalTextures[uu] = Eu, this
      }
      setFloat(uu, Eu) {
        return this._checkUniform(uu), this._floats[uu] = Eu, this
      }
      setInt(uu, Eu) {
        return this._checkUniform(uu), this._ints[uu] = Eu, this
      }
      setUInt(uu, Eu) {
        return this._checkUniform(uu), this._uints[uu] = Eu, this
      }
      setFloats(uu, Eu) {
        return this._checkUniform(uu), this._floatsArrays[uu] = Eu, this
      }
      setColor3(uu, Eu) {
        return this._checkUniform(uu), this._colors3[uu] = Eu, this
      }
      setColor3Array(uu, Eu) {
        return this._checkUniform(uu), this._colors3Arrays[uu] = Eu.reduce(((uu, Eu) => (uu.push(Eu.r, Eu.g, Eu.b), uu)), []), this
      }
      setColor4(uu, Eu) {
        return this._checkUniform(uu), this._colors4[uu] = Eu, this
      }
      setColor4Array(uu, Eu) {
        return this._checkUniform(uu), this._colors4Arrays[uu] = Eu.reduce(((uu, Eu) => (uu.push(Eu.r, Eu.g, Eu.b, Eu.a), uu)), []), this
      }
      setVector2(uu, Eu) {
        return this._checkUniform(uu), this._vectors2[uu] = Eu, this
      }
      setVector3(uu, Eu) {
        return this._checkUniform(uu), this._vectors3[uu] = Eu, this
      }
      setVector4(uu, Eu) {
        return this._checkUniform(uu), this._vectors4[uu] = Eu, this
      }
      setQuaternion(uu, Eu) {
        return this._checkUniform(uu), this._quaternions[uu] = Eu, this
      }
      setQuaternionArray(uu, Eu) {
        return this._checkUniform(uu), this._quaternionsArrays[uu] = Eu.reduce(((uu, Eu) => (Eu.toArray(uu, uu.length), uu)), []), this
      }
      setMatrix(uu, Eu) {
        return this._checkUniform(uu), this._matrices[uu] = Eu, this
      }
      setMatrices(uu, Eu) {
        this._checkUniform(uu);
        const ju = new Float32Array(16 * Eu.length);
        for (let su = 0; su < Eu.length; su++) {
          Eu[su].copyToArray(ju, 16 * su)
        }
        return this._matrixArrays[uu] = ju, this
      }
      setMatrix3x3(uu, Eu) {
        return this._checkUniform(uu), this._matrices3x3[uu] = Eu, this
      }
      setMatrix2x2(uu, Eu) {
        return this._checkUniform(uu), this._matrices2x2[uu] = Eu, this
      }
      setArray2(uu, Eu) {
        return this._checkUniform(uu), this._vectors2Arrays[uu] = Eu, this
      }
      setArray3(uu, Eu) {
        return this._checkUniform(uu), this._vectors3Arrays[uu] = Eu, this
      }
      setArray4(uu, Eu) {
        return this._checkUniform(uu), this._vectors4Arrays[uu] = Eu, this
      }
      setUniformBuffer(uu, Eu) {
        return -1 === this._options.uniformBuffers.indexOf(uu) && this._options.uniformBuffers.push(uu), this._uniformBuffers[uu] = Eu, this
      }
      setTextureSampler(uu, Eu) {
        return -1 === this._options.samplerObjects.indexOf(uu) && this._options.samplerObjects.push(uu), this._textureSamplers[uu] = Eu, this
      }
      setStorageBuffer(uu, Eu) {
        return -1 === this._options.storageBuffers.indexOf(uu) && this._options.storageBuffers.push(uu), this._storageBuffers[uu] = Eu, this
      }
      setDefine(uu, Eu) {
        const ju = uu.trimEnd() + " ",
          su = this.options.defines.findIndex((Eu => Eu === uu || Eu.startsWith(ju)));
        return su >= 0 && this.options.defines.splice(su, 1), ("boolean" !== typeof Eu || Eu) && this.options.defines.push(ju + Eu), this
      }
      isReadyForSubMesh(uu, Eu, ju) {
        return this.isReady(uu, ju, Eu)
      }
      isReady(uu, Eu, ju) {
        const su = ju && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const uu = su ? ju._drawWrapper : this._drawWrapper;
          if (uu.effect && uu._wasPreviouslyReady && uu._wasPreviouslyUsingInstances === Eu) return !0
        }
        const Zu = this.hV(),
          lu = Zu.wO(),
          fu = [],
          Cu = [];
        let bu = null,
          Yu = this._shaderPath,
          Du = this._options.uniforms,
          gu = this._options.uniformBuffers,
          Mu = this._options.samplers;
        lu.getCaps().multiview && Zu.activeCamera && Zu.activeCamera.outputRenderTarget && Zu.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, fu.push("#define MULTIVIEW"), -1 !== Du.indexOf("viewProjection") && -1 === Du.indexOf("viewProjectionR") && Du.push("viewProjectionR"));
        for (let Uu = 0; Uu < this._options.defines.length; Uu++) {
          const uu = 0 === this._options.defines[Uu].indexOf("#define") ? this._options.defines[Uu] : `#define ${this._options.defines[Uu]}`;
          fu.push(uu)
        }
        for (let Uu = 0; Uu < this._options.attributes.length; Uu++) Cu.push(this._options.attributes[Uu]);
        if (uu && uu.isVerticesDataPresent(Xu.j.ColorKind) && (-1 === Cu.indexOf(Xu.j.ColorKind) && Cu.push(Xu.j.ColorKind), fu.push("#define VERTEXCOLOR")), Eu && (fu.push("#define INSTANCES"), (0, Nu.zb)(Cu, this._materialHelperNeedsPreviousMatrices), uu?.hasThinInstances && (fu.push("#define THIN_INSTANCES"), uu && uu.isVerticesDataPresent(Xu.j.ColorInstanceKind) && (Cu.push(Xu.j.ColorInstanceKind), fu.push("#define INSTANCESCOLOR")))), uu && uu.useBones && uu.computeBonesUsingShaders && uu.skeleton) {
          Cu.push(Xu.j.MatricesIndicesKind), Cu.push(Xu.j.MatricesWeightsKind), uu.numBoneInfluencers > 4 && (Cu.push(Xu.j.MatricesIndicesExtraKind), Cu.push(Xu.j.MatricesWeightsExtraKind));
          const Eu = uu.skeleton;
          fu.push("#define NUM_BONE_INFLUENCERS " + uu.numBoneInfluencers), bu = new qu.e, bu.addCPUSkinningFallback(0, uu), Eu.isUsingTextureForMatrices ? (fu.push("#define BONETEXTURE"), -1 === Du.indexOf("boneTextureInfo") && Du.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (fu.push("#define BonesPerMesh " + (Eu.bones.length + 1)), -1 === Du.indexOf("mBones") && Du.push("mBones"))
        } else fu.push("#define NUM_BONE_INFLUENCERS 0");
        let eu = 0;
        const Gu = uu ? uu.morphTargetManager : null;
        if (Gu) {
          const Eu = -1 !== fu.indexOf("#define UV1"),
            ju = -1 !== fu.indexOf("#define UV2"),
            su = -1 !== fu.indexOf("#define TANGENT"),
            Uu = -1 !== fu.indexOf("#define NORMAL"),
            Zu = -1 !== fu.indexOf("#define VERTEXCOLOR");
          eu = (0, Nu.W)(Gu, fu, Cu, uu, !0, Uu, su, Eu, ju, Zu), Gu.isUsingTextureForTargets && (-1 === Du.indexOf("morphTargetTextureIndices") && Du.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), eu > 0 && (Du = Du.slice(), Du.push("morphTargetInfluences"), Du.push("morphTargetCount"), Du.push("morphTargetTextureInfo"), Du.push("morphTargetTextureIndices"))
        } else fu.push("#define NUM_MORPH_INFLUENCERS 0");
        if (uu) {
          const ju = uu.bakedVertexAnimationManager;
          ju && ju.isEnabled && (fu.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === Du.indexOf("bakedVertexAnimationSettings") && Du.push("bakedVertexAnimationSettings"), -1 === Du.indexOf("bakedVertexAnimationTextureSizeInverted") && Du.push("bakedVertexAnimationTextureSizeInverted"), -1 === Du.indexOf("bakedVertexAnimationTime") && Du.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), Eu && Cu.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const Uu in this._textures)
          if (!this._textures[Uu].isReady()) return !1;
        for (const Uu in this._internalTextures)
          if (!this._internalTextures[Uu].isReady) return !1;
        uu && this.needAlphaTestingForMesh(uu) && fu.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, cu.e)(Du), (0, cu.k)(this, Zu, fu)), Zu.fogEnabled && uu?.applyFog && Zu.fogMode !== Uu.f.FOGMODE_NONE && (fu.push("#define FOG"), -1 === Du.indexOf("view") && Du.push("view"), -1 === Du.indexOf("vFogInfos") && Du.push("vFogInfos"), -1 === Du.indexOf("vFogColor") && Du.push("vFogColor")), this._useLogarithmicDepth && (fu.push("#define LOGARITHMICDEPTH"), -1 === Du.indexOf("logarithmicDepthConstant") && Du.push("logarithmicDepthConstant"));
        const pu = ju ? ju.getRenderingMesh() : uu;
        if (pu && this.useVertexPulling) {
          const uu = pu.geometry;
          uu && (this._vertexPullingMetadata = (0, Ou.f)(uu), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((uu, Eu) => {
            Du.push(`vp_${Eu}_info`)
          }))), fu.push("#define USE_VERTEX_PULLING");
          const Eu = pu.geometry?.getIndexBuffer();
          Eu && !pu.isUnIndexed && (fu.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), Eu.is32Bits && fu.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (Du = Du.slice(), gu = gu.slice(), Mu = Mu.slice(), Yu = this.customShaderNameResolve(this.name, Du, gu, Mu, fu, Cu));
        const wu = su ? ju._getDrawWrapper(void 0, !0) : this._drawWrapper,
          Ju = wu?.effect ?? null,
          du = wu?.defines ?? null,
          au = fu.join("\n");
        let Pu = Ju;
        return du !== au && (Pu = lu.createEffect(Yu, {
          attributes: Cu,
          uniformsNames: Du,
          uniformBuffersNames: gu,
          samplers: Mu,
          defines: au,
          fallbacks: bu,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: eu
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, lu), su ? ju.setEffect(Pu, au, this._materialContext) : wu && wu.setEffect(Pu, au), this._onEffectCreatedObservable && (hu.effect = Pu, hu.subMesh = ju ?? uu?.iG[0] ?? null, this._onEffectCreatedObservable.notifyObservers(hu))), wu._wasPreviouslyUsingInstances = !!Eu, !!Pu?.isReady() && (Ju !== Pu && Zu.resetCachedMaterial(), wu._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(uu, Eu) {
        const ju = Eu ?? this.getEffect();
        if (!ju) return;
        const su = this._options.uniforms; - 1 !== su.indexOf("world") && ju.setMatrix("world", uu);
        const Uu = this.hV(); - 1 !== su.indexOf("worldView") && (uu.multiplyToRef(Uu.getViewMatrix(), this._cachedWorldViewMatrix), ju.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== su.indexOf("worldViewProjection") && (uu.multiplyToRef(Uu.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), ju.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== su.indexOf("view") && ju.setMatrix("view", Uu.getViewMatrix())
      }
      bindForSubMesh(uu, Eu, ju) {
        this.bind(uu, Eu, ju._drawWrapperOverride?.effect, ju)
      }
      bind(uu, Eu, ju, su) {
        const Uu = su && this._storeEffectOnSubMeshes,
          Zu = ju ?? (Uu ? su.effect : this.getEffect());
        if (!Zu) return;
        const Xu = this.hV();
        this._activeEffect = Zu, this.bindOnlyWorldMatrix(uu, ju);
        const lu = this._options.uniformBuffers;
        let qu = !1;
        if (Zu && lu && lu.length > 0 && Xu.wO().supportsUniformBuffers)
          for (let Cu = 0; Cu < lu.length; ++Cu) {
            switch (lu[Cu]) {
              case "Mesh":
                Eu && (Eu.getMeshUniformBuffer().bindToEffect(Zu, "Mesh"), Eu.transferToEffect(uu));
                break;
              case "Scene":
                (0, Nu.B)(Zu, Xu.getSceneUniformBuffer()), Xu.finalizeSceneUbo(), qu = !0
            }
          }
        const fu = Eu && Uu ? this._mustRebind(Xu, Zu, su, Eu.visibility) : Xu.getCachedMaterial() !== this;
        if (Zu && fu) {
          let uu;
          for (uu in qu || -1 === this._options.uniforms.indexOf("view") || Zu.setMatrix("view", Xu.getViewMatrix()), qu || -1 === this._options.uniforms.indexOf("projection") || Zu.setMatrix("projection", Xu.getProjectionMatrix()), qu || -1 === this._options.uniforms.indexOf("viewProjection") || (Zu.setMatrix("viewProjection", Xu.getTransformMatrix()), this._multiview && Zu.setMatrix("viewProjectionR", Xu._transformMatrixR)), Xu.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && Zu.setVector3("cameraPosition", Xu.activeCamera.globalPosition), (0, Nu.h)(Eu, Zu), (0, cu.f)(Zu, this, Xu), this._vertexPullingMetadata && (0, Ou.e)(Zu, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, Nu.u)(Uu ? su.materialDefines : Zu.defines, Zu, Xu), Eu && (0, Nu.j)(Xu, Eu, Zu), this._textures) Zu.setTexture(uu, this._textures[uu]);
          for (uu in this._internalTextures) Zu._bindTexture(uu, this._internalTextures[uu]);
          for (uu in this._textureArrays) Zu.setTextureArray(uu, this._textureArrays[uu]);
          for (uu in this._ints) Zu.setInt(uu, this._ints[uu]);
          for (uu in this._uints) Zu.setUInt(uu, this._uints[uu]);
          for (uu in this._floats) Zu.setFloat(uu, this._floats[uu]);
          for (uu in this._floatsArrays) Zu.setArray(uu, this._floatsArrays[uu]);
          for (uu in this._colors3) Zu.setColor3(uu, this._colors3[uu]);
          for (uu in this._colors3Arrays) Zu.setArray3(uu, this._colors3Arrays[uu]);
          for (uu in this._colors4) {
            const Eu = this._colors4[uu];
            Zu.setFloat4(uu, Eu.r, Eu.g, Eu.b, Eu.a)
          }
          for (uu in this._colors4Arrays) Zu.setArray4(uu, this._colors4Arrays[uu]);
          for (uu in this._vectors2) Zu.setVector2(uu, this._vectors2[uu]);
          for (uu in this._vectors3) Zu.setVector3(uu, this._vectors3[uu]);
          for (uu in this._vectors4) Zu.setVector4(uu, this._vectors4[uu]);
          for (uu in this._quaternions) Zu.setQuaternion(uu, this._quaternions[uu]);
          for (uu in this._matrices) Zu.setMatrix(uu, this._matrices[uu]);
          for (uu in this._matrixArrays) Zu.setMatrices(uu, this._matrixArrays[uu]);
          for (uu in this._matrices3x3) Zu.setMatrix3x3(uu, this._matrices3x3[uu]);
          for (uu in this._matrices2x2) Zu.setMatrix2x2(uu, this._matrices2x2[uu]);
          for (uu in this._vectors2Arrays) Zu.setArray2(uu, this._vectors2Arrays[uu]);
          for (uu in this._vectors3Arrays) Zu.setArray3(uu, this._vectors3Arrays[uu]);
          for (uu in this._vectors4Arrays) Zu.setArray4(uu, this._vectors4Arrays[uu]);
          for (uu in this._quaternionsArrays) Zu.setArray4(uu, this._quaternionsArrays[uu]);
          for (uu in this._uniformBuffers) {
            const Eu = this._uniformBuffers[uu].getBuffer();
            Eu && Zu.bindUniformBuffer(Eu, uu)
          }
          const ju = Xu.wO(),
            lu = ju.setExternalTexture;
          if (lu)
            for (uu in this._externalTextures) lu.call(ju, uu, this._externalTextures[uu]);
          const fu = ju.setTextureSampler;
          if (fu)
            for (uu in this._textureSamplers) fu.call(ju, uu, this._textureSamplers[uu]);
          const Cu = ju.setStorageBuffer;
          if (Cu)
            for (uu in this._storageBuffers) Cu.call(ju, uu, this._storageBuffers[uu])
        }
        if (Zu && Eu && (fu || !this.isFrozen)) {
          (0, Nu.x)(Eu, Zu), Eu.morphTargetManager && Eu.morphTargetManager.isUsingTextureForTargets && Eu.morphTargetManager._bind(Zu);
          const uu = Eu.bakedVertexAnimationManager;
          if (uu && uu.isEnabled) {
            const uu = Uu ? su._drawWrapper : this._drawWrapper;
            Eu.bakedVertexAnimationManager?.bind(Zu, !!uu._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(Eu, Zu, su)
      }
      getActiveTextures() {
        const uu = super.getActiveTextures();
        for (const Eu in this._textures) uu.push(this._textures[Eu]);
        for (const Eu in this._textureArrays) {
          const ju = this._textureArrays[Eu];
          for (let Eu = 0; Eu < ju.length; Eu++) uu.push(ju[Eu])
        }
        return uu
      }
      hasTexture(uu) {
        if (super.hasTexture(uu)) return !0;
        for (const ju in this._textures)
          if (this._textures[ju] === uu) return !0;
        const Eu = uu.getInternalTexture();
        for (const ju in this._internalTextures)
          if (this._internalTextures[ju] === Eu) return !0;
        for (const ju in this._textureArrays) {
          const Eu = this._textureArrays[ju];
          for (let ju = 0; ju < Eu.length; ju++)
            if (Eu[ju] === uu) return !0
        }
        return !1
      }
      clone(uu) {
        const Eu = su.e.Clone((() => new Du(uu, this.hV(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        Eu.name = uu, Eu.id = uu, "object" === typeof Eu._shaderPath && (Eu._shaderPath = {
          ...Eu._shaderPath
        }), this._options = {
          ...this._options
        };
        const ju = Object.keys(this._options);
        for (const su of ju) {
          const uu = this._options[su];
          Array.isArray(uu) && (this._options[su] = uu.slice(0))
        }
        this.stencil.copyTo(Eu.stencil);
        for (const su in this._textures) Eu.setTexture(su, this._textures[su]);
        for (const su in this._internalTextures) Eu.setInternalTexture(su, this._internalTextures[su]);
        for (const su in this._textureArrays) Eu.setTextureArray(su, this._textureArrays[su]);
        for (const su in this._externalTextures) Eu.setExternalTexture(su, this._externalTextures[su]);
        for (const su in this._ints) Eu.setInt(su, this._ints[su]);
        for (const su in this._uints) Eu.setUInt(su, this._uints[su]);
        for (const su in this._floats) Eu.setFloat(su, this._floats[su]);
        for (const su in this._floatsArrays) Eu.setFloats(su, this._floatsArrays[su]);
        for (const su in this._colors3) Eu.setColor3(su, this._colors3[su]);
        for (const su in this._colors3Arrays) Eu._colors3Arrays[su] = this._colors3Arrays[su];
        for (const su in this._colors4) Eu.setColor4(su, this._colors4[su]);
        for (const su in this._colors4Arrays) Eu._colors4Arrays[su] = this._colors4Arrays[su];
        for (const su in this._vectors2) Eu.setVector2(su, this._vectors2[su]);
        for (const su in this._vectors3) Eu.setVector3(su, this._vectors3[su]);
        for (const su in this._vectors4) Eu.setVector4(su, this._vectors4[su]);
        for (const su in this._quaternions) Eu.setQuaternion(su, this._quaternions[su]);
        for (const su in this._quaternionsArrays) Eu._quaternionsArrays[su] = this._quaternionsArrays[su];
        for (const su in this._matrices) Eu.setMatrix(su, this._matrices[su]);
        for (const su in this._matrixArrays) Eu._matrixArrays[su] = this._matrixArrays[su].slice();
        for (const su in this._matrices3x3) Eu.setMatrix3x3(su, this._matrices3x3[su]);
        for (const su in this._matrices2x2) Eu.setMatrix2x2(su, this._matrices2x2[su]);
        for (const su in this._vectors2Arrays) Eu.setArray2(su, this._vectors2Arrays[su]);
        for (const su in this._vectors3Arrays) Eu.setArray3(su, this._vectors3Arrays[su]);
        for (const su in this._vectors4Arrays) Eu.setArray4(su, this._vectors4Arrays[su]);
        for (const su in this._uniformBuffers) Eu.setUniformBuffer(su, this._uniformBuffers[su]);
        for (const su in this._textureSamplers) Eu.setTextureSampler(su, this._textureSamplers[su]);
        for (const su in this._storageBuffers) Eu.setStorageBuffer(su, this._storageBuffers[su]);
        return Eu
      }
      dispose(uu, Eu, ju) {
        if (Eu) {
          let uu;
          for (uu in this._textures) this._textures[uu].dispose();
          for (uu in this._internalTextures) this._internalTextures[uu].dispose();
          for (uu in this._textureArrays) {
            const Eu = this._textureArrays[uu];
            for (let uu = 0; uu < Eu.length; uu++) Eu[uu].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(uu, Eu, ju)
      }
      serialize() {
        const uu = su.e.Serialize(this);
        let Eu;
        for (Eu in uu.customType = "BABYLON.ShaderMaterial", uu.uniqueId = this.uniqueId, uu.options = this._options, uu.shaderPath = this._shaderPath, uu.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, uu.stencil = this.stencil.serialize(), uu.textures = {}, this._textures) uu.textures[Eu] = this._textures[Eu].serialize();
        for (Eu in uu.textureArrays = {}, this._textureArrays) {
          uu.textureArrays[Eu] = [];
          const ju = this._textureArrays[Eu];
          for (let su = 0; su < ju.length; su++) uu.textureArrays[Eu].push(ju[su].serialize())
        }
        for (Eu in uu.ints = {}, this._ints) uu.ints[Eu] = this._ints[Eu];
        for (Eu in uu.uints = {}, this._uints) uu.uints[Eu] = this._uints[Eu];
        for (Eu in uu.floats = {}, this._floats) uu.floats[Eu] = this._floats[Eu];
        for (Eu in uu.floatsArrays = {}, this._floatsArrays) uu.floatsArrays[Eu] = this._floatsArrays[Eu];
        for (Eu in uu.colors3 = {}, this._colors3) {
          const ju = this._colors3[Eu];
          uu.colors3[Eu] = [ju.r, ju.g, ju.b]
        }
        for (Eu in uu.colors3Arrays = {}, this._colors3Arrays) uu.colors3Arrays[Eu] = this._colors3Arrays[Eu];
        for (Eu in uu.colors4 = {}, this._colors4) {
          const ju = this._colors4[Eu];
          uu.colors4[Eu] = [ju.r, ju.g, ju.b, ju.a]
        }
        for (Eu in uu.colors4Arrays = {}, this._colors4Arrays) uu.colors4Arrays[Eu] = this._colors4Arrays[Eu];
        for (Eu in uu.vectors2 = {}, this._vectors2) {
          const ju = this._vectors2[Eu];
          uu.vectors2[Eu] = [ju.x, ju.y]
        }
        for (Eu in uu.vectors3 = {}, this._vectors3) {
          const ju = this._vectors3[Eu];
          uu.vectors3[Eu] = [ju.x, ju.y, ju.z]
        }
        for (Eu in uu.vectors4 = {}, this._vectors4) {
          const ju = this._vectors4[Eu];
          uu.vectors4[Eu] = [ju.x, ju.y, ju.z, ju.w]
        }
        for (Eu in uu.quaternions = {}, this._quaternions) uu.quaternions[Eu] = this._quaternions[Eu].Osu();
        for (Eu in uu.matrices = {}, this._matrices) uu.matrices[Eu] = this._matrices[Eu].Osu();
        for (Eu in uu.matrixArray = {}, this._matrixArrays) uu.matrixArray[Eu] = this._matrixArrays[Eu];
        for (Eu in uu.matrices3x3 = {}, this._matrices3x3) uu.matrices3x3[Eu] = this._matrices3x3[Eu];
        for (Eu in uu.matrices2x2 = {}, this._matrices2x2) uu.matrices2x2[Eu] = this._matrices2x2[Eu];
        for (Eu in uu.vectors2Arrays = {}, this._vectors2Arrays) uu.vectors2Arrays[Eu] = this._vectors2Arrays[Eu];
        for (Eu in uu.vectors3Arrays = {}, this._vectors3Arrays) uu.vectors3Arrays[Eu] = this._vectors3Arrays[Eu];
        for (Eu in uu.vectors4Arrays = {}, this._vectors4Arrays) uu.vectors4Arrays[Eu] = this._vectors4Arrays[Eu];
        for (Eu in uu.quaternionsArrays = {}, this._quaternionsArrays) uu.quaternionsArrays[Eu] = this._quaternionsArrays[Eu];
        return uu
      }
    }

    function gu(uu, Eu, ju) {
      const Uu = su.e.Parse((() => new Du(uu.name, Eu, uu.shaderPath, uu.options, uu.storeEffectOnSubMeshes)), uu, Eu, ju);
      let Xu;
      for (Xu in uu.stencil && Uu.stencil.parse(uu.stencil, Eu, ju), uu.textures) Uu.setTexture(Xu, lu.g.Parse(uu.textures[Xu], Eu, ju));
      for (Xu in uu.textureArrays) {
        const su = uu.textureArrays[Xu],
          Zu = [];
        for (let uu = 0; uu < su.length; uu++) Zu.push(lu.g.Parse(su[uu], Eu, ju));
        Uu.setTextureArray(Xu, Zu)
      }
      for (Xu in uu.ints) Uu.setInt(Xu, uu.ints[Xu]);
      for (Xu in uu.uints) Uu.setUInt(Xu, uu.uints[Xu]);
      for (Xu in uu.floats) Uu.setFloat(Xu, uu.floats[Xu]);
      for (Xu in uu.floatsArrays) Uu.setFloats(Xu, uu.floatsArrays[Xu]);
      for (Xu in uu.colors3) {
        const Eu = uu.colors3[Xu];
        Uu.setColor3(Xu, {
          r: Eu[0],
          g: Eu[1],
          b: Eu[2]
        })
      }
      for (Xu in uu.colors3Arrays) {
        const Eu = uu.colors3Arrays[Xu].reduce(((uu, Eu, ju) => (ju % 3 === 0 ? uu.push([Eu]) : uu[uu.length - 1].push(Eu), uu)), []).map((uu => ({
          r: uu[0],
          g: uu[1],
          b: uu[2]
        })));
        Uu.setColor3Array(Xu, Eu)
      }
      for (Xu in uu.colors4) {
        const Eu = uu.colors4[Xu];
        Uu.setColor4(Xu, {
          r: Eu[0],
          g: Eu[1],
          b: Eu[2],
          a: Eu[3]
        })
      }
      for (Xu in uu.colors4Arrays) {
        const Eu = uu.colors4Arrays[Xu].reduce(((uu, Eu, ju) => (ju % 4 === 0 ? uu.push([Eu]) : uu[uu.length - 1].push(Eu), uu)), []).map((uu => ({
          r: uu[0],
          g: uu[1],
          b: uu[2],
          a: uu[3]
        })));
        Uu.setColor4Array(Xu, Eu)
      }
      for (Xu in uu.vectors2) {
        const Eu = uu.vectors2[Xu];
        Uu.setVector2(Xu, {
          x: Eu[0],
          y: Eu[1]
        })
      }
      for (Xu in uu.vectors3) {
        const Eu = uu.vectors3[Xu];
        Uu.setVector3(Xu, {
          x: Eu[0],
          y: Eu[1],
          z: Eu[2]
        })
      }
      for (Xu in uu.vectors4) {
        const Eu = uu.vectors4[Xu];
        Uu.setVector4(Xu, {
          x: Eu[0],
          y: Eu[1],
          z: Eu[2],
          w: Eu[3]
        })
      }
      for (Xu in uu.quaternions) Uu.setQuaternion(Xu, Zu.i.FromArray(uu.quaternions[Xu]));
      for (Xu in uu.matrices) Uu.setMatrix(Xu, Zu.e.FromArray(uu.matrices[Xu]));
      const qu = Uu;
      for (Xu in uu.matrixArray) qu._matrixArrays[Xu] = new Float32Array(uu.matrixArray[Xu]);
      for (Xu in uu.matrices3x3) Uu.setMatrix3x3(Xu, uu.matrices3x3[Xu]);
      for (Xu in uu.matrices2x2) Uu.setMatrix2x2(Xu, uu.matrices2x2[Xu]);
      for (Xu in uu.vectors2Arrays) Uu.setArray2(Xu, uu.vectors2Arrays[Xu]);
      for (Xu in uu.vectors3Arrays) Uu.setArray3(Xu, uu.vectors3Arrays[Xu]);
      for (Xu in uu.vectors4Arrays) Uu.setArray4(Xu, uu.vectors4Arrays[Xu]);
      for (Xu in uu.quaternionsArrays) Uu.setArray4(Xu, uu.quaternionsArrays[Xu]);
      return Uu
    }
    async function Mu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((Uu, Zu) => {
        const Xu = new fu.b;
        Xu.addEventListener("readystatechange", (() => {
          if (4 == Xu.readyState)
            if (200 == Xu.status) {
              const Eu = gu(JSON.parse(Xu.responseText), ju || bu.b.LastCreatedScene, su);
              uu && (Eu.name = uu), Uu(Eu)
            } else Zu("Unable to load the ShaderMaterial")
        })), Xu.open("GET", Eu), Xu.send()
      }))
    }
    async function eu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const su = this?.SnippetUrl ?? Du.SnippetUrl;
      return await new Promise(((Uu, Zu) => {
        const Xu = new fu.b;
        Xu.addEventListener("readystatechange", (() => {
          if (4 == Xu.readyState)
            if (200 == Xu.status) {
              const su = JSON.parse(JSON.parse(Xu.responseText).jsonPayload),
                Zu = gu(JSON.parse(su.shaderMaterial), Eu || bu.b.LastCreatedScene, ju);
              Zu.snippetId = uu, Uu(Zu)
            } else Zu("Unable to load the snippet " + uu)
        })), Xu.open("GET", su + "/" + uu.replace(/#/g, "/")), Xu.send()
      }))
    }
    Du.SnippetUrl = "https://snippet.babylonjs.com";
    const Gu = eu;
    let pu = !1;

    function wu() {
      pu || (pu = !0, Du.Parse = gu, Du.ParseFromFileAsync = Mu, Du.ParseFromSnippetAsync = eu, Du.CreateFromSnippetAsync = Gu, (0, Yu.f)("BABYLON.ShaderMaterial", Du))
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);