export const id = 256;
export const ids = [256];
export const modules = {
  40225: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => tq,
      i: () => Qq,
      k: () => oq,
      m: () => Pq,
      p: () => Hq,
      s: () => jq
    });
    var Yq = gq(39779),
      lq = gq(39838),
      Oq = gq(37139),
      mq = gq(39879),
      xq = gq(40233),
      Aq = gq(40104),
      cq = gq(39801),
      uq = gq(40096),
      Bq = gq(37153),
      Wq = gq(40083),
      Nq = gq(40079),
      aq = gq(40115),
      Vq = gq(37171);
    const dq = {
      effect: null,
      subMesh: null
    };
    class jq extends uq.b {
      constructor(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(qq, Eq, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new Oq.e, this._cachedWorldViewProjectionMatrix = new Oq.e, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = gq, this._options = {
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
          ...Yq
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(qq) {
        this._shaderPath = qq
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
      _checkUniform(qq) {
        -1 === this._options.uniforms.indexOf(qq) && this._options.uniforms.push(qq)
      }
      setTexture(qq, Eq) {
        return -1 === this._options.samplers.indexOf(qq) && this._options.samplers.push(qq), this._textures[qq] = Eq, this
      }
      setInternalTexture(qq, Eq) {
        return -1 === this._options.samplers.indexOf(qq) && this._options.samplers.push(qq), this._internalTextures[qq] = Eq, this
      }
      removeTexture(qq) {
        delete this._textures[qq]
      }
      setTextureArray(qq, Eq) {
        return -1 === this._options.samplers.indexOf(qq) && this._options.samplers.push(qq), this._checkUniform(qq), this._textureArrays[qq] = Eq, this
      }
      setExternalTexture(qq, Eq) {
        return -1 === this._options.externalTextures.indexOf(qq) && this._options.externalTextures.push(qq), this._externalTextures[qq] = Eq, this
      }
      setFloat(qq, Eq) {
        return this._checkUniform(qq), this._floats[qq] = Eq, this
      }
      setInt(qq, Eq) {
        return this._checkUniform(qq), this._ints[qq] = Eq, this
      }
      setUInt(qq, Eq) {
        return this._checkUniform(qq), this._uints[qq] = Eq, this
      }
      setFloats(qq, Eq) {
        return this._checkUniform(qq), this._floatsArrays[qq] = Eq, this
      }
      setColor3(qq, Eq) {
        return this._checkUniform(qq), this._colors3[qq] = Eq, this
      }
      setColor3Array(qq, Eq) {
        return this._checkUniform(qq), this._colors3Arrays[qq] = Eq.reduce(((qq, Eq) => (qq.push(Eq.r, Eq.g, Eq.b), qq)), []), this
      }
      setColor4(qq, Eq) {
        return this._checkUniform(qq), this._colors4[qq] = Eq, this
      }
      setColor4Array(qq, Eq) {
        return this._checkUniform(qq), this._colors4Arrays[qq] = Eq.reduce(((qq, Eq) => (qq.push(Eq.r, Eq.g, Eq.b, Eq.a), qq)), []), this
      }
      setVector2(qq, Eq) {
        return this._checkUniform(qq), this._vectors2[qq] = Eq, this
      }
      setVector3(qq, Eq) {
        return this._checkUniform(qq), this._vectors3[qq] = Eq, this
      }
      setVector4(qq, Eq) {
        return this._checkUniform(qq), this._vectors4[qq] = Eq, this
      }
      setQuaternion(qq, Eq) {
        return this._checkUniform(qq), this._quaternions[qq] = Eq, this
      }
      setQuaternionArray(qq, Eq) {
        return this._checkUniform(qq), this._quaternionsArrays[qq] = Eq.reduce(((qq, Eq) => (Eq.toArray(qq, qq.length), qq)), []), this
      }
      setMatrix(qq, Eq) {
        return this._checkUniform(qq), this._matrices[qq] = Eq, this
      }
      setMatrices(qq, Eq) {
        this._checkUniform(qq);
        const gq = new Float32Array(16 * Eq.length);
        for (let Yq = 0; Yq < Eq.length; Yq++) {
          Eq[Yq].copyToArray(gq, 16 * Yq)
        }
        return this._matrixArrays[qq] = gq, this
      }
      setMatrix3x3(qq, Eq) {
        return this._checkUniform(qq), this._matrices3x3[qq] = Eq, this
      }
      setMatrix2x2(qq, Eq) {
        return this._checkUniform(qq), this._matrices2x2[qq] = Eq, this
      }
      setArray2(qq, Eq) {
        return this._checkUniform(qq), this._vectors2Arrays[qq] = Eq, this
      }
      setArray3(qq, Eq) {
        return this._checkUniform(qq), this._vectors3Arrays[qq] = Eq, this
      }
      setArray4(qq, Eq) {
        return this._checkUniform(qq), this._vectors4Arrays[qq] = Eq, this
      }
      setUniformBuffer(qq, Eq) {
        return -1 === this._options.uniformBuffers.indexOf(qq) && this._options.uniformBuffers.push(qq), this._uniformBuffers[qq] = Eq, this
      }
      setTextureSampler(qq, Eq) {
        return -1 === this._options.samplerObjects.indexOf(qq) && this._options.samplerObjects.push(qq), this._textureSamplers[qq] = Eq, this
      }
      setStorageBuffer(qq, Eq) {
        return -1 === this._options.storageBuffers.indexOf(qq) && this._options.storageBuffers.push(qq), this._storageBuffers[qq] = Eq, this
      }
      setDefine(qq, Eq) {
        const gq = qq.trimEnd() + " ",
          Yq = this.options.defines.findIndex((Eq => Eq === qq || Eq.startsWith(gq)));
        return Yq >= 0 && this.options.defines.splice(Yq, 1), ("boolean" !== typeof Eq || Eq) && this.options.defines.push(gq + Eq), this
      }
      isReadyForSubMesh(qq, Eq, gq) {
        return this.isReady(qq, gq, Eq)
      }
      isReady(qq, Eq, gq) {
        const Yq = gq && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const qq = Yq ? gq._drawWrapper : this._drawWrapper;
          if (qq.effect && qq._wasPreviouslyReady && qq._wasPreviouslyUsingInstances === Eq) return !0
        }
        const Oq = this.ZJ(),
          xq = Oq.Ba(),
          cq = [],
          uq = [];
        let Bq = null,
          Vq = this._shaderPath,
          jq = this._options.uniforms,
          Hq = this._options.uniformBuffers,
          oq = this._options.samplers;
        xq.getCaps().multiview && Oq.activeCamera && Oq.activeCamera.outputRenderTarget && Oq.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, cq.push("#define MULTIVIEW"), -1 !== jq.indexOf("viewProjection") && -1 === jq.indexOf("viewProjectionR") && jq.push("viewProjectionR"));
        for (let lq = 0; lq < this._options.defines.length; lq++) {
          const qq = 0 === this._options.defines[lq].indexOf("#define") ? this._options.defines[lq] : `#define ${this._options.defines[lq]}`;
          cq.push(qq)
        }
        for (let lq = 0; lq < this._options.attributes.length; lq++) uq.push(this._options.attributes[lq]);
        if (qq && qq.isVerticesDataPresent(mq.g.ColorKind) && (-1 === uq.indexOf(mq.g.ColorKind) && uq.push(mq.g.ColorKind), cq.push("#define VERTEXCOLOR")), Eq && (cq.push("#define INSTANCES"), (0, Nq.xb)(uq, this._materialHelperNeedsPreviousMatrices), qq?.hasThinInstances && (cq.push("#define THIN_INSTANCES"), qq && qq.isVerticesDataPresent(mq.g.ColorInstanceKind) && (uq.push(mq.g.ColorInstanceKind), cq.push("#define INSTANCESCOLOR")))), qq && qq.useBones && qq.computeBonesUsingShaders && qq.skeleton) {
          uq.push(mq.g.MatricesIndicesKind), uq.push(mq.g.MatricesWeightsKind), qq.numBoneInfluencers > 4 && (uq.push(mq.g.MatricesIndicesExtraKind), uq.push(mq.g.MatricesWeightsExtraKind));
          const Eq = qq.skeleton;
          cq.push("#define NUM_BONE_INFLUENCERS " + qq.numBoneInfluencers), Bq = new Aq.c, Bq.addCPUSkinningFallback(0, qq), Eq.isUsingTextureForMatrices ? (cq.push("#define BONETEXTURE"), -1 === jq.indexOf("boneTextureInfo") && jq.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (cq.push("#define BonesPerMesh " + (Eq.bones.length + 1)), -1 === jq.indexOf("mBones") && jq.push("mBones"))
        } else cq.push("#define NUM_BONE_INFLUENCERS 0");
        let Pq = 0;
        const Qq = qq ? qq.morphTargetManager : null;
        if (Qq) {
          const Eq = -1 !== cq.indexOf("#define UV1"),
            gq = -1 !== cq.indexOf("#define UV2"),
            Yq = -1 !== cq.indexOf("#define TANGENT"),
            lq = -1 !== cq.indexOf("#define NORMAL"),
            Oq = -1 !== cq.indexOf("#define VERTEXCOLOR");
          Pq = (0, Nq.Q)(Qq, cq, uq, qq, !0, lq, Yq, Eq, gq, Oq), Qq.isUsingTextureForTargets && (-1 === jq.indexOf("morphTargetTextureIndices") && jq.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), Pq > 0 && (jq = jq.slice(), jq.push("morphTargetInfluences"), jq.push("morphTargetCount"), jq.push("morphTargetTextureInfo"), jq.push("morphTargetTextureIndices"))
        } else cq.push("#define NUM_MORPH_INFLUENCERS 0");
        if (qq) {
          const gq = qq.bakedVertexAnimationManager;
          gq && gq.isEnabled && (cq.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === jq.indexOf("bakedVertexAnimationSettings") && jq.push("bakedVertexAnimationSettings"), -1 === jq.indexOf("bakedVertexAnimationTextureSizeInverted") && jq.push("bakedVertexAnimationTextureSizeInverted"), -1 === jq.indexOf("bakedVertexAnimationTime") && jq.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), Eq && uq.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const lq in this._textures)
          if (!this._textures[lq].isReady()) return !1;
        for (const lq in this._internalTextures)
          if (!this._internalTextures[lq].isReady) return !1;
        qq && this.needAlphaTestingForMesh(qq) && cq.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, Wq.e)(jq), (0, Wq.m)(this, Oq, cq)), Oq.fogEnabled && qq?.applyFog && Oq.fogMode !== lq.i.FOGMODE_NONE && (cq.push("#define FOG"), -1 === jq.indexOf("view") && jq.push("view"), -1 === jq.indexOf("vFogInfos") && jq.push("vFogInfos"), -1 === jq.indexOf("vFogColor") && jq.push("vFogColor")), this._useLogarithmicDepth && (cq.push("#define LOGARITHMICDEPTH"), -1 === jq.indexOf("logarithmicDepthConstant") && jq.push("logarithmicDepthConstant"));
        const yq = gq ? gq.getRenderingMesh() : qq;
        if (yq && this.useVertexPulling) {
          const qq = yq.geometry;
          qq && (this._vertexPullingMetadata = (0, aq.f)(qq), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((qq, Eq) => {
            jq.push(`vp_${Eq}_info`)
          }))), cq.push("#define USE_VERTEX_PULLING");
          const Eq = yq.geometry?.getIndexBuffer();
          Eq && !yq.isUnIndexed && (cq.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), Eq.is32Bits && cq.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (jq = jq.slice(), Hq = Hq.slice(), oq = oq.slice(), Vq = this.customShaderNameResolve(this.name, jq, Hq, oq, cq, uq));
        const tq = Yq ? gq._getDrawWrapper(void 0, !0) : this._drawWrapper,
          rq = tq?.effect ?? null,
          vq = tq?.defines ?? null,
          hq = cq.join("\n");
        let nq = rq;
        return vq !== hq && (nq = xq.createEffect(Vq, {
          attributes: uq,
          uniformsNames: jq,
          uniformBuffersNames: Hq,
          samplers: oq,
          defines: hq,
          fallbacks: Bq,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: Pq
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, xq), Yq ? gq.setEffect(nq, hq, this._materialContext) : tq && tq.setEffect(nq, hq), this._onEffectCreatedObservable && (dq.effect = nq, dq.subMesh = gq ?? qq?.fn[0] ?? null, this._onEffectCreatedObservable.notifyObservers(dq))), tq._wasPreviouslyUsingInstances = !!Eq, !!nq?.isReady() && (rq !== nq && Oq.resetCachedMaterial(), tq._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(qq, Eq) {
        const gq = Eq ?? this.getEffect();
        if (!gq) return;
        const Yq = this._options.uniforms; - 1 !== Yq.indexOf("world") && gq.setMatrix("world", qq);
        const lq = this.ZJ(); - 1 !== Yq.indexOf("worldView") && (qq.multiplyToRef(lq.getViewMatrix(), this._cachedWorldViewMatrix), gq.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Yq.indexOf("worldViewProjection") && (qq.multiplyToRef(lq.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), gq.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== Yq.indexOf("view") && gq.setMatrix("view", lq.getViewMatrix())
      }
      bindForSubMesh(qq, Eq, gq) {
        this.bind(qq, Eq, gq._drawWrapperOverride?.effect, gq)
      }
      bind(qq, Eq, gq, Yq) {
        const lq = Yq && this._storeEffectOnSubMeshes,
          Oq = gq ?? (lq ? Yq.effect : this.getEffect());
        if (!Oq) return;
        const mq = this.ZJ();
        this._activeEffect = Oq, this.bindOnlyWorldMatrix(qq, gq);
        const xq = this._options.uniformBuffers;
        let Aq = !1;
        if (Oq && xq && xq.length > 0 && mq.Ba().supportsUniformBuffers)
          for (let uq = 0; uq < xq.length; ++uq) {
            switch (xq[uq]) {
              case "Mesh":
                Eq && (Eq.getMeshUniformBuffer().bindToEffect(Oq, "Mesh"), Eq.transferToEffect(qq));
                break;
              case "Scene":
                (0, Nq.s)(Oq, mq.getSceneUniformBuffer()), mq.finalizeSceneUbo(), Aq = !0
            }
          }
        const cq = Eq && lq ? this._mustRebind(mq, Oq, Yq, Eq.visibility) : mq.getCachedMaterial() !== this;
        if (Oq && cq) {
          let qq;
          for (qq in Aq || -1 === this._options.uniforms.indexOf("view") || Oq.setMatrix("view", mq.getViewMatrix()), Aq || -1 === this._options.uniforms.indexOf("projection") || Oq.setMatrix("projection", mq.getProjectionMatrix()), Aq || -1 === this._options.uniforms.indexOf("viewProjection") || (Oq.setMatrix("viewProjection", mq.getTransformMatrix()), this._multiview && Oq.setMatrix("viewProjectionR", mq._transformMatrixR)), mq.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && Oq.setVector3("cameraPosition", mq.activeCamera.globalPosition), (0, Nq.c)(Eq, Oq), (0, Wq.i)(Oq, this, mq), this._vertexPullingMetadata && (0, aq.e)(Oq, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, Nq.o)(lq ? Yq.materialDefines : Oq.defines, Oq, mq), Eq && (0, Nq.f)(mq, Eq, Oq), this._textures) Oq.setTexture(qq, this._textures[qq]);
          for (qq in this._internalTextures) Oq._bindTexture(qq, this._internalTextures[qq]);
          for (qq in this._textureArrays) Oq.setTextureArray(qq, this._textureArrays[qq]);
          for (qq in this._ints) Oq.setInt(qq, this._ints[qq]);
          for (qq in this._uints) Oq.setUInt(qq, this._uints[qq]);
          for (qq in this._floats) Oq.setFloat(qq, this._floats[qq]);
          for (qq in this._floatsArrays) Oq.setArray(qq, this._floatsArrays[qq]);
          for (qq in this._colors3) Oq.setColor3(qq, this._colors3[qq]);
          for (qq in this._colors3Arrays) Oq.setArray3(qq, this._colors3Arrays[qq]);
          for (qq in this._colors4) {
            const Eq = this._colors4[qq];
            Oq.setFloat4(qq, Eq.r, Eq.g, Eq.b, Eq.a)
          }
          for (qq in this._colors4Arrays) Oq.setArray4(qq, this._colors4Arrays[qq]);
          for (qq in this._vectors2) Oq.setVector2(qq, this._vectors2[qq]);
          for (qq in this._vectors3) Oq.setVector3(qq, this._vectors3[qq]);
          for (qq in this._vectors4) Oq.setVector4(qq, this._vectors4[qq]);
          for (qq in this._quaternions) Oq.setQuaternion(qq, this._quaternions[qq]);
          for (qq in this._matrices) Oq.setMatrix(qq, this._matrices[qq]);
          for (qq in this._matrixArrays) Oq.setMatrices(qq, this._matrixArrays[qq]);
          for (qq in this._matrices3x3) Oq.setMatrix3x3(qq, this._matrices3x3[qq]);
          for (qq in this._matrices2x2) Oq.setMatrix2x2(qq, this._matrices2x2[qq]);
          for (qq in this._vectors2Arrays) Oq.setArray2(qq, this._vectors2Arrays[qq]);
          for (qq in this._vectors3Arrays) Oq.setArray3(qq, this._vectors3Arrays[qq]);
          for (qq in this._vectors4Arrays) Oq.setArray4(qq, this._vectors4Arrays[qq]);
          for (qq in this._quaternionsArrays) Oq.setArray4(qq, this._quaternionsArrays[qq]);
          for (qq in this._uniformBuffers) {
            const Eq = this._uniformBuffers[qq].getBuffer();
            Eq && Oq.bindUniformBuffer(Eq, qq)
          }
          const gq = mq.Ba(),
            xq = gq.setExternalTexture;
          if (xq)
            for (qq in this._externalTextures) xq.call(gq, qq, this._externalTextures[qq]);
          const cq = gq.setTextureSampler;
          if (cq)
            for (qq in this._textureSamplers) cq.call(gq, qq, this._textureSamplers[qq]);
          const uq = gq.setStorageBuffer;
          if (uq)
            for (qq in this._storageBuffers) uq.call(gq, qq, this._storageBuffers[qq])
        }
        if (Oq && Eq && (cq || !this.isFrozen)) {
          (0, Nq.p)(Eq, Oq), Eq.morphTargetManager && Eq.morphTargetManager.isUsingTextureForTargets && Eq.morphTargetManager._bind(Oq);
          const qq = Eq.bakedVertexAnimationManager;
          if (qq && qq.isEnabled) {
            const qq = lq ? Yq._drawWrapper : this._drawWrapper;
            Eq.bakedVertexAnimationManager?.bind(Oq, !!qq._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(Eq, Oq, Yq)
      }
      getActiveTextures() {
        const qq = super.getActiveTextures();
        for (const Eq in this._textures) qq.push(this._textures[Eq]);
        for (const Eq in this._textureArrays) {
          const gq = this._textureArrays[Eq];
          for (let Eq = 0; Eq < gq.length; Eq++) qq.push(gq[Eq])
        }
        return qq
      }
      hasTexture(qq) {
        if (super.hasTexture(qq)) return !0;
        for (const gq in this._textures)
          if (this._textures[gq] === qq) return !0;
        const Eq = qq.getInternalTexture();
        for (const gq in this._internalTextures)
          if (this._internalTextures[gq] === Eq) return !0;
        for (const gq in this._textureArrays) {
          const Eq = this._textureArrays[gq];
          for (let gq = 0; gq < Eq.length; gq++)
            if (Eq[gq] === qq) return !0
        }
        return !1
      }
      clone(qq) {
        const Eq = Yq.d.Clone((() => new jq(qq, this.ZJ(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        Eq.name = qq, Eq.id = qq, "object" === typeof Eq._shaderPath && (Eq._shaderPath = {
          ...Eq._shaderPath
        }), this._options = {
          ...this._options
        };
        const gq = Object.keys(this._options);
        for (const Yq of gq) {
          const qq = this._options[Yq];
          Array.isArray(qq) && (this._options[Yq] = qq.slice(0))
        }
        this.stencil.copyTo(Eq.stencil);
        for (const Yq in this._textures) Eq.setTexture(Yq, this._textures[Yq]);
        for (const Yq in this._internalTextures) Eq.setInternalTexture(Yq, this._internalTextures[Yq]);
        for (const Yq in this._textureArrays) Eq.setTextureArray(Yq, this._textureArrays[Yq]);
        for (const Yq in this._externalTextures) Eq.setExternalTexture(Yq, this._externalTextures[Yq]);
        for (const Yq in this._ints) Eq.setInt(Yq, this._ints[Yq]);
        for (const Yq in this._uints) Eq.setUInt(Yq, this._uints[Yq]);
        for (const Yq in this._floats) Eq.setFloat(Yq, this._floats[Yq]);
        for (const Yq in this._floatsArrays) Eq.setFloats(Yq, this._floatsArrays[Yq]);
        for (const Yq in this._colors3) Eq.setColor3(Yq, this._colors3[Yq]);
        for (const Yq in this._colors3Arrays) Eq._colors3Arrays[Yq] = this._colors3Arrays[Yq];
        for (const Yq in this._colors4) Eq.setColor4(Yq, this._colors4[Yq]);
        for (const Yq in this._colors4Arrays) Eq._colors4Arrays[Yq] = this._colors4Arrays[Yq];
        for (const Yq in this._vectors2) Eq.setVector2(Yq, this._vectors2[Yq]);
        for (const Yq in this._vectors3) Eq.setVector3(Yq, this._vectors3[Yq]);
        for (const Yq in this._vectors4) Eq.setVector4(Yq, this._vectors4[Yq]);
        for (const Yq in this._quaternions) Eq.setQuaternion(Yq, this._quaternions[Yq]);
        for (const Yq in this._quaternionsArrays) Eq._quaternionsArrays[Yq] = this._quaternionsArrays[Yq];
        for (const Yq in this._matrices) Eq.setMatrix(Yq, this._matrices[Yq]);
        for (const Yq in this._matrixArrays) Eq._matrixArrays[Yq] = this._matrixArrays[Yq].slice();
        for (const Yq in this._matrices3x3) Eq.setMatrix3x3(Yq, this._matrices3x3[Yq]);
        for (const Yq in this._matrices2x2) Eq.setMatrix2x2(Yq, this._matrices2x2[Yq]);
        for (const Yq in this._vectors2Arrays) Eq.setArray2(Yq, this._vectors2Arrays[Yq]);
        for (const Yq in this._vectors3Arrays) Eq.setArray3(Yq, this._vectors3Arrays[Yq]);
        for (const Yq in this._vectors4Arrays) Eq.setArray4(Yq, this._vectors4Arrays[Yq]);
        for (const Yq in this._uniformBuffers) Eq.setUniformBuffer(Yq, this._uniformBuffers[Yq]);
        for (const Yq in this._textureSamplers) Eq.setTextureSampler(Yq, this._textureSamplers[Yq]);
        for (const Yq in this._storageBuffers) Eq.setStorageBuffer(Yq, this._storageBuffers[Yq]);
        return Eq
      }
      dispose(qq, Eq, gq) {
        if (Eq) {
          let qq;
          for (qq in this._textures) this._textures[qq].dispose();
          for (qq in this._internalTextures) this._internalTextures[qq].dispose();
          for (qq in this._textureArrays) {
            const Eq = this._textureArrays[qq];
            for (let qq = 0; qq < Eq.length; qq++) Eq[qq].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(qq, Eq, gq)
      }
      serialize() {
        const qq = Yq.d.Serialize(this);
        let Eq;
        for (Eq in qq.customType = "BABYLON.ShaderMaterial", qq.uniqueId = this.uniqueId, qq.options = this._options, qq.shaderPath = this._shaderPath, qq.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, qq.stencil = this.stencil.serialize(), qq.textures = {}, this._textures) qq.textures[Eq] = this._textures[Eq].serialize();
        for (Eq in qq.textureArrays = {}, this._textureArrays) {
          qq.textureArrays[Eq] = [];
          const gq = this._textureArrays[Eq];
          for (let Yq = 0; Yq < gq.length; Yq++) qq.textureArrays[Eq].push(gq[Yq].serialize())
        }
        for (Eq in qq.ints = {}, this._ints) qq.ints[Eq] = this._ints[Eq];
        for (Eq in qq.uints = {}, this._uints) qq.uints[Eq] = this._uints[Eq];
        for (Eq in qq.floats = {}, this._floats) qq.floats[Eq] = this._floats[Eq];
        for (Eq in qq.floatsArrays = {}, this._floatsArrays) qq.floatsArrays[Eq] = this._floatsArrays[Eq];
        for (Eq in qq.colors3 = {}, this._colors3) {
          const gq = this._colors3[Eq];
          qq.colors3[Eq] = [gq.r, gq.g, gq.b]
        }
        for (Eq in qq.colors3Arrays = {}, this._colors3Arrays) qq.colors3Arrays[Eq] = this._colors3Arrays[Eq];
        for (Eq in qq.colors4 = {}, this._colors4) {
          const gq = this._colors4[Eq];
          qq.colors4[Eq] = [gq.r, gq.g, gq.b, gq.a]
        }
        for (Eq in qq.colors4Arrays = {}, this._colors4Arrays) qq.colors4Arrays[Eq] = this._colors4Arrays[Eq];
        for (Eq in qq.vectors2 = {}, this._vectors2) {
          const gq = this._vectors2[Eq];
          qq.vectors2[Eq] = [gq.x, gq.y]
        }
        for (Eq in qq.vectors3 = {}, this._vectors3) {
          const gq = this._vectors3[Eq];
          qq.vectors3[Eq] = [gq.x, gq.y, gq.z]
        }
        for (Eq in qq.vectors4 = {}, this._vectors4) {
          const gq = this._vectors4[Eq];
          qq.vectors4[Eq] = [gq.x, gq.y, gq.z, gq.w]
        }
        for (Eq in qq.quaternions = {}, this._quaternions) qq.quaternions[Eq] = this._quaternions[Eq].bYq();
        for (Eq in qq.matrices = {}, this._matrices) qq.matrices[Eq] = this._matrices[Eq].bYq();
        for (Eq in qq.matrixArray = {}, this._matrixArrays) qq.matrixArray[Eq] = this._matrixArrays[Eq];
        for (Eq in qq.matrices3x3 = {}, this._matrices3x3) qq.matrices3x3[Eq] = this._matrices3x3[Eq];
        for (Eq in qq.matrices2x2 = {}, this._matrices2x2) qq.matrices2x2[Eq] = this._matrices2x2[Eq];
        for (Eq in qq.vectors2Arrays = {}, this._vectors2Arrays) qq.vectors2Arrays[Eq] = this._vectors2Arrays[Eq];
        for (Eq in qq.vectors3Arrays = {}, this._vectors3Arrays) qq.vectors3Arrays[Eq] = this._vectors3Arrays[Eq];
        for (Eq in qq.vectors4Arrays = {}, this._vectors4Arrays) qq.vectors4Arrays[Eq] = this._vectors4Arrays[Eq];
        for (Eq in qq.quaternionsArrays = {}, this._quaternionsArrays) qq.quaternionsArrays[Eq] = this._quaternionsArrays[Eq];
        return qq
      }
    }

    function Hq(qq, Eq, gq) {
      const lq = Yq.d.Parse((() => new jq(qq.name, Eq, qq.shaderPath, qq.options, qq.storeEffectOnSubMeshes)), qq, Eq, gq);
      let mq;
      for (mq in qq.stencil && lq.stencil.parse(qq.stencil, Eq, gq), qq.textures) lq.setTexture(mq, xq.d.Parse(qq.textures[mq], Eq, gq));
      for (mq in qq.textureArrays) {
        const Yq = qq.textureArrays[mq],
          Oq = [];
        for (let qq = 0; qq < Yq.length; qq++) Oq.push(xq.d.Parse(Yq[qq], Eq, gq));
        lq.setTextureArray(mq, Oq)
      }
      for (mq in qq.ints) lq.setInt(mq, qq.ints[mq]);
      for (mq in qq.uints) lq.setUInt(mq, qq.uints[mq]);
      for (mq in qq.floats) lq.setFloat(mq, qq.floats[mq]);
      for (mq in qq.floatsArrays) lq.setFloats(mq, qq.floatsArrays[mq]);
      for (mq in qq.colors3) {
        const Eq = qq.colors3[mq];
        lq.setColor3(mq, {
          r: Eq[0],
          g: Eq[1],
          b: Eq[2]
        })
      }
      for (mq in qq.colors3Arrays) {
        const Eq = qq.colors3Arrays[mq].reduce(((qq, Eq, gq) => (gq % 3 === 0 ? qq.push([Eq]) : qq[qq.length - 1].push(Eq), qq)), []).map((qq => ({
          r: qq[0],
          g: qq[1],
          b: qq[2]
        })));
        lq.setColor3Array(mq, Eq)
      }
      for (mq in qq.colors4) {
        const Eq = qq.colors4[mq];
        lq.setColor4(mq, {
          r: Eq[0],
          g: Eq[1],
          b: Eq[2],
          a: Eq[3]
        })
      }
      for (mq in qq.colors4Arrays) {
        const Eq = qq.colors4Arrays[mq].reduce(((qq, Eq, gq) => (gq % 4 === 0 ? qq.push([Eq]) : qq[qq.length - 1].push(Eq), qq)), []).map((qq => ({
          r: qq[0],
          g: qq[1],
          b: qq[2],
          a: qq[3]
        })));
        lq.setColor4Array(mq, Eq)
      }
      for (mq in qq.vectors2) {
        const Eq = qq.vectors2[mq];
        lq.setVector2(mq, {
          x: Eq[0],
          y: Eq[1]
        })
      }
      for (mq in qq.vectors3) {
        const Eq = qq.vectors3[mq];
        lq.setVector3(mq, {
          x: Eq[0],
          y: Eq[1],
          z: Eq[2]
        })
      }
      for (mq in qq.vectors4) {
        const Eq = qq.vectors4[mq];
        lq.setVector4(mq, {
          x: Eq[0],
          y: Eq[1],
          z: Eq[2],
          w: Eq[3]
        })
      }
      for (mq in qq.quaternions) lq.setQuaternion(mq, Oq.h.FromArray(qq.quaternions[mq]));
      for (mq in qq.matrices) lq.setMatrix(mq, Oq.e.FromArray(qq.matrices[mq]));
      const Aq = lq;
      for (mq in qq.matrixArray) Aq._matrixArrays[mq] = new Float32Array(qq.matrixArray[mq]);
      for (mq in qq.matrices3x3) lq.setMatrix3x3(mq, qq.matrices3x3[mq]);
      for (mq in qq.matrices2x2) lq.setMatrix2x2(mq, qq.matrices2x2[mq]);
      for (mq in qq.vectors2Arrays) lq.setArray2(mq, qq.vectors2Arrays[mq]);
      for (mq in qq.vectors3Arrays) lq.setArray3(mq, qq.vectors3Arrays[mq]);
      for (mq in qq.vectors4Arrays) lq.setArray4(mq, qq.vectors4Arrays[mq]);
      for (mq in qq.quaternionsArrays) lq.setArray4(mq, qq.quaternionsArrays[mq]);
      return lq
    }
    async function oq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((lq, Oq) => {
        const mq = new cq.e;
        mq.addEventListener("readystatechange", (() => {
          if (4 == mq.readyState)
            if (200 == mq.status) {
              const Eq = Hq(JSON.parse(mq.responseText), gq || Bq.b.LastCreatedScene, Yq);
              qq && (Eq.name = qq), lq(Eq)
            } else Oq("Unable to load the ShaderMaterial")
        })), mq.open("GET", Eq), mq.send()
      }))
    }
    async function Pq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Yq = this?.SnippetUrl ?? jq.SnippetUrl;
      return await new Promise(((lq, Oq) => {
        const mq = new cq.e;
        mq.addEventListener("readystatechange", (() => {
          if (4 == mq.readyState)
            if (200 == mq.status) {
              const Yq = JSON.parse(JSON.parse(mq.responseText).jsonPayload),
                Oq = Hq(JSON.parse(Yq.shaderMaterial), Eq || Bq.b.LastCreatedScene, gq);
              Oq.snippetId = qq, lq(Oq)
            } else Oq("Unable to load the snippet " + qq)
        })), mq.open("GET", Yq + "/" + qq.replace(/#/g, "/")), mq.send()
      }))
    }
    jq.SnippetUrl = "https://snippet.babylonjs.com";
    const Qq = Pq;
    let yq = !1;

    function tq() {
      yq || (yq = !0, jq.Parse = Hq, jq.ParseFromFileAsync = oq, jq.ParseFromSnippetAsync = Pq, jq.CreateFromSnippetAsync = Qq, (0, Vq.g)("BABYLON.ShaderMaterial", jq))
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);