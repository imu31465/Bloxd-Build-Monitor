export const id = 256;
export const ids = [256];
export const modules = {
  39790: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Fv,
      f: () => jv,
      i: () => Gv,
      k: () => mv,
      m: () => cv,
      o: () => iv
    });
    var hv = Pv(39312),
      Sv = Pv(39395),
      ev = Pv(36594),
      gv = Pv(39441),
      pv = Pv(39798),
      dv = Pv(39656),
      Nv = Pv(39346),
      lv = Pv(39647),
      Tv = Pv(36615),
      Wv = Pv(39636),
      wv = Pv(39629),
      av = Pv(39676),
      sv = Pv(36631);
    const Cv = {
      effect: null,
      subMesh: null
    };
    class iv extends lv.d {
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(vv, zv, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new ev.c, this._cachedWorldViewProjectionMatrix = new ev.c, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = Pv, this._options = {
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
          ...hv
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(vv) {
        this._shaderPath = vv
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
      _checkUniform(vv) {
        -1 === this._options.uniforms.indexOf(vv) && this._options.uniforms.push(vv)
      }
      setTexture(vv, zv) {
        return -1 === this._options.samplers.indexOf(vv) && this._options.samplers.push(vv), this._textures[vv] = zv, this
      }
      setInternalTexture(vv, zv) {
        return -1 === this._options.samplers.indexOf(vv) && this._options.samplers.push(vv), this._internalTextures[vv] = zv, this
      }
      removeTexture(vv) {
        delete this._textures[vv]
      }
      setTextureArray(vv, zv) {
        return -1 === this._options.samplers.indexOf(vv) && this._options.samplers.push(vv), this._checkUniform(vv), this._textureArrays[vv] = zv, this
      }
      setExternalTexture(vv, zv) {
        return -1 === this._options.externalTextures.indexOf(vv) && this._options.externalTextures.push(vv), this._externalTextures[vv] = zv, this
      }
      setFloat(vv, zv) {
        return this._checkUniform(vv), this._floats[vv] = zv, this
      }
      setInt(vv, zv) {
        return this._checkUniform(vv), this._ints[vv] = zv, this
      }
      setUInt(vv, zv) {
        return this._checkUniform(vv), this._uints[vv] = zv, this
      }
      setFloats(vv, zv) {
        return this._checkUniform(vv), this._floatsArrays[vv] = zv, this
      }
      setColor3(vv, zv) {
        return this._checkUniform(vv), this._colors3[vv] = zv, this
      }
      setColor3Array(vv, zv) {
        return this._checkUniform(vv), this._colors3Arrays[vv] = zv.reduce(((vv, zv) => (vv.push(zv.r, zv.g, zv.b), vv)), []), this
      }
      setColor4(vv, zv) {
        return this._checkUniform(vv), this._colors4[vv] = zv, this
      }
      setColor4Array(vv, zv) {
        return this._checkUniform(vv), this._colors4Arrays[vv] = zv.reduce(((vv, zv) => (vv.push(zv.r, zv.g, zv.b, zv.a), vv)), []), this
      }
      setVector2(vv, zv) {
        return this._checkUniform(vv), this._vectors2[vv] = zv, this
      }
      setVector3(vv, zv) {
        return this._checkUniform(vv), this._vectors3[vv] = zv, this
      }
      setVector4(vv, zv) {
        return this._checkUniform(vv), this._vectors4[vv] = zv, this
      }
      setQuaternion(vv, zv) {
        return this._checkUniform(vv), this._quaternions[vv] = zv, this
      }
      setQuaternionArray(vv, zv) {
        return this._checkUniform(vv), this._quaternionsArrays[vv] = zv.reduce(((vv, zv) => (zv.toArray(vv, vv.length), vv)), []), this
      }
      setMatrix(vv, zv) {
        return this._checkUniform(vv), this._matrices[vv] = zv, this
      }
      setMatrices(vv, zv) {
        this._checkUniform(vv);
        const Pv = new Float32Array(16 * zv.length);
        for (let hv = 0; hv < zv.length; hv++) {
          zv[hv].copyToArray(Pv, 16 * hv)
        }
        return this._matrixArrays[vv] = Pv, this
      }
      setMatrix3x3(vv, zv) {
        return this._checkUniform(vv), this._matrices3x3[vv] = zv, this
      }
      setMatrix2x2(vv, zv) {
        return this._checkUniform(vv), this._matrices2x2[vv] = zv, this
      }
      setArray2(vv, zv) {
        return this._checkUniform(vv), this._vectors2Arrays[vv] = zv, this
      }
      setArray3(vv, zv) {
        return this._checkUniform(vv), this._vectors3Arrays[vv] = zv, this
      }
      setArray4(vv, zv) {
        return this._checkUniform(vv), this._vectors4Arrays[vv] = zv, this
      }
      setUniformBuffer(vv, zv) {
        return -1 === this._options.uniformBuffers.indexOf(vv) && this._options.uniformBuffers.push(vv), this._uniformBuffers[vv] = zv, this
      }
      setTextureSampler(vv, zv) {
        return -1 === this._options.samplerObjects.indexOf(vv) && this._options.samplerObjects.push(vv), this._textureSamplers[vv] = zv, this
      }
      setStorageBuffer(vv, zv) {
        return -1 === this._options.storageBuffers.indexOf(vv) && this._options.storageBuffers.push(vv), this._storageBuffers[vv] = zv, this
      }
      setDefine(vv, zv) {
        const Pv = vv.trimEnd() + " ",
          hv = this.options.defines.findIndex((zv => zv === vv || zv.startsWith(Pv)));
        return hv >= 0 && this.options.defines.splice(hv, 1), ("boolean" !== typeof zv || zv) && this.options.defines.push(Pv + zv), this
      }
      isReadyForSubMesh(vv, zv, Pv) {
        return this.isReady(vv, Pv, zv)
      }
      isReady(vv, zv, Pv) {
        const hv = Pv && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const vv = hv ? Pv._drawWrapper : this._drawWrapper;
          if (vv.effect && vv._wasPreviouslyReady && vv._wasPreviouslyUsingInstances === zv) return !0
        }
        const ev = this.rD(),
          pv = ev.ma(),
          Nv = [],
          lv = [];
        let Tv = null,
          sv = this._shaderPath,
          iv = this._options.uniforms,
          cv = this._options.uniformBuffers,
          Gv = this._options.samplers;
        pv.getCaps().multiview && ev.activeCamera && ev.activeCamera.outputRenderTarget && ev.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, Nv.push("#define MULTIVIEW"), -1 !== iv.indexOf("viewProjection") && -1 === iv.indexOf("viewProjectionR") && iv.push("viewProjectionR"));
        for (let Sv = 0; Sv < this._options.defines.length; Sv++) {
          const vv = 0 === this._options.defines[Sv].indexOf("#define") ? this._options.defines[Sv] : `#define ${this._options.defines[Sv]}`;
          Nv.push(vv)
        }
        for (let Sv = 0; Sv < this._options.attributes.length; Sv++) lv.push(this._options.attributes[Sv]);
        if (vv && vv.isVerticesDataPresent(gv.k.ColorKind) && (-1 === lv.indexOf(gv.k.ColorKind) && lv.push(gv.k.ColorKind), Nv.push("#define VERTEXCOLOR")), zv && (Nv.push("#define INSTANCES"), (0, wv.mb)(lv, this._materialHelperNeedsPreviousMatrices), vv?.hasThinInstances && (Nv.push("#define THIN_INSTANCES"), vv && vv.isVerticesDataPresent(gv.k.ColorInstanceKind) && (lv.push(gv.k.ColorInstanceKind), Nv.push("#define INSTANCESCOLOR")))), vv && vv.useBones && vv.computeBonesUsingShaders && vv.skeleton) {
          lv.push(gv.k.MatricesIndicesKind), lv.push(gv.k.MatricesWeightsKind), vv.numBoneInfluencers > 4 && (lv.push(gv.k.MatricesIndicesExtraKind), lv.push(gv.k.MatricesWeightsExtraKind));
          const zv = vv.skeleton;
          Nv.push("#define NUM_BONE_INFLUENCERS " + vv.numBoneInfluencers), Tv = new dv.e, Tv.addCPUSkinningFallback(0, vv), zv.isUsingTextureForMatrices ? (Nv.push("#define BONETEXTURE"), -1 === iv.indexOf("boneTextureInfo") && iv.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (Nv.push("#define BonesPerMesh " + (zv.bones.length + 1)), -1 === iv.indexOf("mBones") && iv.push("mBones"))
        } else Nv.push("#define NUM_BONE_INFLUENCERS 0");
        let mv = 0;
        const jv = vv ? vv.morphTargetManager : null;
        if (jv) {
          const zv = -1 !== Nv.indexOf("#define UV1"),
            Pv = -1 !== Nv.indexOf("#define UV2"),
            hv = -1 !== Nv.indexOf("#define TANGENT"),
            Sv = -1 !== Nv.indexOf("#define NORMAL"),
            ev = -1 !== Nv.indexOf("#define VERTEXCOLOR");
          mv = (0, wv.M)(jv, Nv, lv, vv, !0, Sv, hv, zv, Pv, ev), jv.isUsingTextureForTargets && (-1 === iv.indexOf("morphTargetTextureIndices") && iv.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), mv > 0 && (iv = iv.slice(), iv.push("morphTargetInfluences"), iv.push("morphTargetCount"), iv.push("morphTargetTextureInfo"), iv.push("morphTargetTextureIndices"))
        } else Nv.push("#define NUM_MORPH_INFLUENCERS 0");
        if (vv) {
          const Pv = vv.bakedVertexAnimationManager;
          Pv && Pv.isEnabled && (Nv.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === iv.indexOf("bakedVertexAnimationSettings") && iv.push("bakedVertexAnimationSettings"), -1 === iv.indexOf("bakedVertexAnimationTextureSizeInverted") && iv.push("bakedVertexAnimationTextureSizeInverted"), -1 === iv.indexOf("bakedVertexAnimationTime") && iv.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), zv && lv.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const Sv in this._textures)
          if (!this._textures[Sv].isReady()) return !1;
        for (const Sv in this._internalTextures)
          if (!this._internalTextures[Sv].isReady) return !1;
        vv && this.needAlphaTestingForMesh(vv) && Nv.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, Wv.c)(iv), (0, Wv.m)(this, ev, Nv)), ev.fogEnabled && vv?.applyFog && ev.fogMode !== Sv.g.FOGMODE_NONE && (Nv.push("#define FOG"), -1 === iv.indexOf("view") && iv.push("view"), -1 === iv.indexOf("vFogInfos") && iv.push("vFogInfos"), -1 === iv.indexOf("vFogColor") && iv.push("vFogColor")), this._useLogarithmicDepth && (Nv.push("#define LOGARITHMICDEPTH"), -1 === iv.indexOf("logarithmicDepthConstant") && iv.push("logarithmicDepthConstant"));
        const fv = Pv ? Pv.getRenderingMesh() : vv;
        if (fv && this.useVertexPulling) {
          const vv = fv.geometry;
          vv && (this._vertexPullingMetadata = (0, av.e)(vv), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((vv, zv) => {
            iv.push(`vp_${zv}_info`)
          }))), Nv.push("#define USE_VERTEX_PULLING");
          const zv = fv.geometry?.getIndexBuffer();
          zv && !fv.isUnIndexed && (Nv.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), zv.is32Bits && Nv.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (iv = iv.slice(), cv = cv.slice(), Gv = Gv.slice(), sv = this.customShaderNameResolve(this.name, iv, cv, Gv, Nv, lv));
        const Fv = hv ? Pv._getDrawWrapper(void 0, !0) : this._drawWrapper,
          Yv = Fv?.effect ?? null,
          nv = Fv?.defines ?? null,
          Ov = Nv.join("\n");
        let Dv = Yv;
        return nv !== Ov && (Dv = pv.createEffect(sv, {
          attributes: lv,
          uniformsNames: iv,
          uniformBuffersNames: cv,
          samplers: Gv,
          defines: Ov,
          fallbacks: Tv,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: mv
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, pv), hv ? Pv.setEffect(Dv, Ov, this._materialContext) : Fv && Fv.setEffect(Dv, Ov), this._onEffectCreatedObservable && (Cv.effect = Dv, Cv.subMesh = Pv ?? vv?.sF[0] ?? null, this._onEffectCreatedObservable.notifyObservers(Cv))), Fv._wasPreviouslyUsingInstances = !!zv, !!Dv?.isReady() && (Yv !== Dv && ev.resetCachedMaterial(), Fv._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(vv, zv) {
        const Pv = zv ?? this.getEffect();
        if (!Pv) return;
        const hv = this._options.uniforms; - 1 !== hv.indexOf("world") && Pv.setMatrix("world", vv);
        const Sv = this.rD(); - 1 !== hv.indexOf("worldView") && (vv.multiplyToRef(Sv.getViewMatrix(), this._cachedWorldViewMatrix), Pv.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== hv.indexOf("worldViewProjection") && (vv.multiplyToRef(Sv.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), Pv.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== hv.indexOf("view") && Pv.setMatrix("view", Sv.getViewMatrix())
      }
      bindForSubMesh(vv, zv, Pv) {
        this.bind(vv, zv, Pv._drawWrapperOverride?.effect, Pv)
      }
      bind(vv, zv, Pv, hv) {
        const Sv = hv && this._storeEffectOnSubMeshes,
          ev = Pv ?? (Sv ? hv.effect : this.getEffect());
        if (!ev) return;
        const gv = this.rD();
        this._activeEffect = ev, this.bindOnlyWorldMatrix(vv, Pv);
        const pv = this._options.uniformBuffers;
        let dv = !1;
        if (ev && pv && pv.length > 0 && gv.ma().supportsUniformBuffers)
          for (let lv = 0; lv < pv.length; ++lv) {
            switch (pv[lv]) {
              case "Mesh":
                zv && (zv.getMeshUniformBuffer().bindToEffect(ev, "Mesh"), zv.transferToEffect(vv));
                break;
              case "Scene":
                (0, wv.x)(ev, gv.getSceneUniformBuffer()), gv.finalizeSceneUbo(), dv = !0
            }
          }
        const Nv = zv && Sv ? this._mustRebind(gv, ev, hv, zv.visibility) : gv.getCachedMaterial() !== this;
        if (ev && Nv) {
          let vv;
          for (vv in dv || -1 === this._options.uniforms.indexOf("view") || ev.setMatrix("view", gv.getViewMatrix()), dv || -1 === this._options.uniforms.indexOf("projection") || ev.setMatrix("projection", gv.getProjectionMatrix()), dv || -1 === this._options.uniforms.indexOf("viewProjection") || (ev.setMatrix("viewProjection", gv.getTransformMatrix()), this._multiview && ev.setMatrix("viewProjectionR", gv._transformMatrixR)), gv.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && ev.setVector3("cameraPosition", gv.activeCamera.globalPosition), (0, wv.e)(zv, ev), (0, Wv.e)(ev, this, gv), this._vertexPullingMetadata && (0, av.d)(ev, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, wv.u)(Sv ? hv.materialDefines : ev.defines, ev, gv), zv && (0, wv.g)(gv, zv, ev), this._textures) ev.setTexture(vv, this._textures[vv]);
          for (vv in this._internalTextures) ev._bindTexture(vv, this._internalTextures[vv]);
          for (vv in this._textureArrays) ev.setTextureArray(vv, this._textureArrays[vv]);
          for (vv in this._ints) ev.setInt(vv, this._ints[vv]);
          for (vv in this._uints) ev.setUInt(vv, this._uints[vv]);
          for (vv in this._floats) ev.setFloat(vv, this._floats[vv]);
          for (vv in this._floatsArrays) ev.setArray(vv, this._floatsArrays[vv]);
          for (vv in this._colors3) ev.setColor3(vv, this._colors3[vv]);
          for (vv in this._colors3Arrays) ev.setArray3(vv, this._colors3Arrays[vv]);
          for (vv in this._colors4) {
            const zv = this._colors4[vv];
            ev.setFloat4(vv, zv.r, zv.g, zv.b, zv.a)
          }
          for (vv in this._colors4Arrays) ev.setArray4(vv, this._colors4Arrays[vv]);
          for (vv in this._vectors2) ev.setVector2(vv, this._vectors2[vv]);
          for (vv in this._vectors3) ev.setVector3(vv, this._vectors3[vv]);
          for (vv in this._vectors4) ev.setVector4(vv, this._vectors4[vv]);
          for (vv in this._quaternions) ev.setQuaternion(vv, this._quaternions[vv]);
          for (vv in this._matrices) ev.setMatrix(vv, this._matrices[vv]);
          for (vv in this._matrixArrays) ev.setMatrices(vv, this._matrixArrays[vv]);
          for (vv in this._matrices3x3) ev.setMatrix3x3(vv, this._matrices3x3[vv]);
          for (vv in this._matrices2x2) ev.setMatrix2x2(vv, this._matrices2x2[vv]);
          for (vv in this._vectors2Arrays) ev.setArray2(vv, this._vectors2Arrays[vv]);
          for (vv in this._vectors3Arrays) ev.setArray3(vv, this._vectors3Arrays[vv]);
          for (vv in this._vectors4Arrays) ev.setArray4(vv, this._vectors4Arrays[vv]);
          for (vv in this._quaternionsArrays) ev.setArray4(vv, this._quaternionsArrays[vv]);
          for (vv in this._uniformBuffers) {
            const zv = this._uniformBuffers[vv].getBuffer();
            zv && ev.bindUniformBuffer(zv, vv)
          }
          const Pv = gv.ma(),
            pv = Pv.setExternalTexture;
          if (pv)
            for (vv in this._externalTextures) pv.call(Pv, vv, this._externalTextures[vv]);
          const Nv = Pv.setTextureSampler;
          if (Nv)
            for (vv in this._textureSamplers) Nv.call(Pv, vv, this._textureSamplers[vv]);
          const lv = Pv.setStorageBuffer;
          if (lv)
            for (vv in this._storageBuffers) lv.call(Pv, vv, this._storageBuffers[vv])
        }
        if (ev && zv && (Nv || !this.isFrozen)) {
          (0, wv.v)(zv, ev), zv.morphTargetManager && zv.morphTargetManager.isUsingTextureForTargets && zv.morphTargetManager._bind(ev);
          const vv = zv.bakedVertexAnimationManager;
          if (vv && vv.isEnabled) {
            const vv = Sv ? hv._drawWrapper : this._drawWrapper;
            zv.bakedVertexAnimationManager?.bind(ev, !!vv._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(zv, ev, hv)
      }
      getActiveTextures() {
        const vv = super.getActiveTextures();
        for (const zv in this._textures) vv.push(this._textures[zv]);
        for (const zv in this._textureArrays) {
          const Pv = this._textureArrays[zv];
          for (let zv = 0; zv < Pv.length; zv++) vv.push(Pv[zv])
        }
        return vv
      }
      hasTexture(vv) {
        if (super.hasTexture(vv)) return !0;
        for (const Pv in this._textures)
          if (this._textures[Pv] === vv) return !0;
        const zv = vv.getInternalTexture();
        for (const Pv in this._internalTextures)
          if (this._internalTextures[Pv] === zv) return !0;
        for (const Pv in this._textureArrays) {
          const zv = this._textureArrays[Pv];
          for (let Pv = 0; Pv < zv.length; Pv++)
            if (zv[Pv] === vv) return !0
        }
        return !1
      }
      clone(vv) {
        const zv = hv.c.Clone((() => new iv(vv, this.rD(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        zv.name = vv, zv.id = vv, "object" === typeof zv._shaderPath && (zv._shaderPath = {
          ...zv._shaderPath
        }), this._options = {
          ...this._options
        };
        const Pv = Object.keys(this._options);
        for (const hv of Pv) {
          const vv = this._options[hv];
          Array.isArray(vv) && (this._options[hv] = vv.slice(0))
        }
        this.stencil.copyTo(zv.stencil);
        for (const hv in this._textures) zv.setTexture(hv, this._textures[hv]);
        for (const hv in this._internalTextures) zv.setInternalTexture(hv, this._internalTextures[hv]);
        for (const hv in this._textureArrays) zv.setTextureArray(hv, this._textureArrays[hv]);
        for (const hv in this._externalTextures) zv.setExternalTexture(hv, this._externalTextures[hv]);
        for (const hv in this._ints) zv.setInt(hv, this._ints[hv]);
        for (const hv in this._uints) zv.setUInt(hv, this._uints[hv]);
        for (const hv in this._floats) zv.setFloat(hv, this._floats[hv]);
        for (const hv in this._floatsArrays) zv.setFloats(hv, this._floatsArrays[hv]);
        for (const hv in this._colors3) zv.setColor3(hv, this._colors3[hv]);
        for (const hv in this._colors3Arrays) zv._colors3Arrays[hv] = this._colors3Arrays[hv];
        for (const hv in this._colors4) zv.setColor4(hv, this._colors4[hv]);
        for (const hv in this._colors4Arrays) zv._colors4Arrays[hv] = this._colors4Arrays[hv];
        for (const hv in this._vectors2) zv.setVector2(hv, this._vectors2[hv]);
        for (const hv in this._vectors3) zv.setVector3(hv, this._vectors3[hv]);
        for (const hv in this._vectors4) zv.setVector4(hv, this._vectors4[hv]);
        for (const hv in this._quaternions) zv.setQuaternion(hv, this._quaternions[hv]);
        for (const hv in this._quaternionsArrays) zv._quaternionsArrays[hv] = this._quaternionsArrays[hv];
        for (const hv in this._matrices) zv.setMatrix(hv, this._matrices[hv]);
        for (const hv in this._matrixArrays) zv._matrixArrays[hv] = this._matrixArrays[hv].slice();
        for (const hv in this._matrices3x3) zv.setMatrix3x3(hv, this._matrices3x3[hv]);
        for (const hv in this._matrices2x2) zv.setMatrix2x2(hv, this._matrices2x2[hv]);
        for (const hv in this._vectors2Arrays) zv.setArray2(hv, this._vectors2Arrays[hv]);
        for (const hv in this._vectors3Arrays) zv.setArray3(hv, this._vectors3Arrays[hv]);
        for (const hv in this._vectors4Arrays) zv.setArray4(hv, this._vectors4Arrays[hv]);
        for (const hv in this._uniformBuffers) zv.setUniformBuffer(hv, this._uniformBuffers[hv]);
        for (const hv in this._textureSamplers) zv.setTextureSampler(hv, this._textureSamplers[hv]);
        for (const hv in this._storageBuffers) zv.setStorageBuffer(hv, this._storageBuffers[hv]);
        return zv
      }
      dispose(vv, zv, Pv) {
        if (zv) {
          let vv;
          for (vv in this._textures) this._textures[vv].dispose();
          for (vv in this._internalTextures) this._internalTextures[vv].dispose();
          for (vv in this._textureArrays) {
            const zv = this._textureArrays[vv];
            for (let vv = 0; vv < zv.length; vv++) zv[vv].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(vv, zv, Pv)
      }
      serialize() {
        const vv = hv.c.Serialize(this);
        let zv;
        for (zv in vv.customType = "BABYLON.ShaderMaterial", vv.uniqueId = this.uniqueId, vv.options = this._options, vv.shaderPath = this._shaderPath, vv.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, vv.stencil = this.stencil.serialize(), vv.textures = {}, this._textures) vv.textures[zv] = this._textures[zv].serialize();
        for (zv in vv.textureArrays = {}, this._textureArrays) {
          vv.textureArrays[zv] = [];
          const Pv = this._textureArrays[zv];
          for (let hv = 0; hv < Pv.length; hv++) vv.textureArrays[zv].push(Pv[hv].serialize())
        }
        for (zv in vv.ints = {}, this._ints) vv.ints[zv] = this._ints[zv];
        for (zv in vv.uints = {}, this._uints) vv.uints[zv] = this._uints[zv];
        for (zv in vv.floats = {}, this._floats) vv.floats[zv] = this._floats[zv];
        for (zv in vv.floatsArrays = {}, this._floatsArrays) vv.floatsArrays[zv] = this._floatsArrays[zv];
        for (zv in vv.colors3 = {}, this._colors3) {
          const Pv = this._colors3[zv];
          vv.colors3[zv] = [Pv.r, Pv.g, Pv.b]
        }
        for (zv in vv.colors3Arrays = {}, this._colors3Arrays) vv.colors3Arrays[zv] = this._colors3Arrays[zv];
        for (zv in vv.colors4 = {}, this._colors4) {
          const Pv = this._colors4[zv];
          vv.colors4[zv] = [Pv.r, Pv.g, Pv.b, Pv.a]
        }
        for (zv in vv.colors4Arrays = {}, this._colors4Arrays) vv.colors4Arrays[zv] = this._colors4Arrays[zv];
        for (zv in vv.vectors2 = {}, this._vectors2) {
          const Pv = this._vectors2[zv];
          vv.vectors2[zv] = [Pv.x, Pv.y]
        }
        for (zv in vv.vectors3 = {}, this._vectors3) {
          const Pv = this._vectors3[zv];
          vv.vectors3[zv] = [Pv.x, Pv.y, Pv.z]
        }
        for (zv in vv.vectors4 = {}, this._vectors4) {
          const Pv = this._vectors4[zv];
          vv.vectors4[zv] = [Pv.x, Pv.y, Pv.z, Pv.w]
        }
        for (zv in vv.quaternions = {}, this._quaternions) vv.quaternions[zv] = this._quaternions[zv].pPv();
        for (zv in vv.matrices = {}, this._matrices) vv.matrices[zv] = this._matrices[zv].pPv();
        for (zv in vv.matrixArray = {}, this._matrixArrays) vv.matrixArray[zv] = this._matrixArrays[zv];
        for (zv in vv.matrices3x3 = {}, this._matrices3x3) vv.matrices3x3[zv] = this._matrices3x3[zv];
        for (zv in vv.matrices2x2 = {}, this._matrices2x2) vv.matrices2x2[zv] = this._matrices2x2[zv];
        for (zv in vv.vectors2Arrays = {}, this._vectors2Arrays) vv.vectors2Arrays[zv] = this._vectors2Arrays[zv];
        for (zv in vv.vectors3Arrays = {}, this._vectors3Arrays) vv.vectors3Arrays[zv] = this._vectors3Arrays[zv];
        for (zv in vv.vectors4Arrays = {}, this._vectors4Arrays) vv.vectors4Arrays[zv] = this._vectors4Arrays[zv];
        for (zv in vv.quaternionsArrays = {}, this._quaternionsArrays) vv.quaternionsArrays[zv] = this._quaternionsArrays[zv];
        return vv
      }
    }

    function cv(vv, zv, Pv) {
      const Sv = hv.c.Parse((() => new iv(vv.name, zv, vv.shaderPath, vv.options, vv.storeEffectOnSubMeshes)), vv, zv, Pv);
      let gv;
      for (gv in vv.stencil && Sv.stencil.parse(vv.stencil, zv, Pv), vv.textures) Sv.setTexture(gv, pv.e.Parse(vv.textures[gv], zv, Pv));
      for (gv in vv.textureArrays) {
        const hv = vv.textureArrays[gv],
          ev = [];
        for (let vv = 0; vv < hv.length; vv++) ev.push(pv.e.Parse(hv[vv], zv, Pv));
        Sv.setTextureArray(gv, ev)
      }
      for (gv in vv.ints) Sv.setInt(gv, vv.ints[gv]);
      for (gv in vv.uints) Sv.setUInt(gv, vv.uints[gv]);
      for (gv in vv.floats) Sv.setFloat(gv, vv.floats[gv]);
      for (gv in vv.floatsArrays) Sv.setFloats(gv, vv.floatsArrays[gv]);
      for (gv in vv.colors3) {
        const zv = vv.colors3[gv];
        Sv.setColor3(gv, {
          r: zv[0],
          g: zv[1],
          b: zv[2]
        })
      }
      for (gv in vv.colors3Arrays) {
        const zv = vv.colors3Arrays[gv].reduce(((vv, zv, Pv) => (Pv % 3 === 0 ? vv.push([zv]) : vv[vv.length - 1].push(zv), vv)), []).map((vv => ({
          r: vv[0],
          g: vv[1],
          b: vv[2]
        })));
        Sv.setColor3Array(gv, zv)
      }
      for (gv in vv.colors4) {
        const zv = vv.colors4[gv];
        Sv.setColor4(gv, {
          r: zv[0],
          g: zv[1],
          b: zv[2],
          a: zv[3]
        })
      }
      for (gv in vv.colors4Arrays) {
        const zv = vv.colors4Arrays[gv].reduce(((vv, zv, Pv) => (Pv % 4 === 0 ? vv.push([zv]) : vv[vv.length - 1].push(zv), vv)), []).map((vv => ({
          r: vv[0],
          g: vv[1],
          b: vv[2],
          a: vv[3]
        })));
        Sv.setColor4Array(gv, zv)
      }
      for (gv in vv.vectors2) {
        const zv = vv.vectors2[gv];
        Sv.setVector2(gv, {
          x: zv[0],
          y: zv[1]
        })
      }
      for (gv in vv.vectors3) {
        const zv = vv.vectors3[gv];
        Sv.setVector3(gv, {
          x: zv[0],
          y: zv[1],
          z: zv[2]
        })
      }
      for (gv in vv.vectors4) {
        const zv = vv.vectors4[gv];
        Sv.setVector4(gv, {
          x: zv[0],
          y: zv[1],
          z: zv[2],
          w: zv[3]
        })
      }
      for (gv in vv.quaternions) Sv.setQuaternion(gv, ev.d.FromArray(vv.quaternions[gv]));
      for (gv in vv.matrices) Sv.setMatrix(gv, ev.c.FromArray(vv.matrices[gv]));
      const dv = Sv;
      for (gv in vv.matrixArray) dv._matrixArrays[gv] = new Float32Array(vv.matrixArray[gv]);
      for (gv in vv.matrices3x3) Sv.setMatrix3x3(gv, vv.matrices3x3[gv]);
      for (gv in vv.matrices2x2) Sv.setMatrix2x2(gv, vv.matrices2x2[gv]);
      for (gv in vv.vectors2Arrays) Sv.setArray2(gv, vv.vectors2Arrays[gv]);
      for (gv in vv.vectors3Arrays) Sv.setArray3(gv, vv.vectors3Arrays[gv]);
      for (gv in vv.vectors4Arrays) Sv.setArray4(gv, vv.vectors4Arrays[gv]);
      for (gv in vv.quaternionsArrays) Sv.setArray4(gv, vv.quaternionsArrays[gv]);
      return Sv
    }
    async function Gv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((Sv, ev) => {
        const gv = new Nv.b;
        gv.addEventListener("readystatechange", (() => {
          if (4 == gv.readyState)
            if (200 == gv.status) {
              const zv = cv(JSON.parse(gv.responseText), Pv || Tv.e.LastCreatedScene, hv);
              vv && (zv.name = vv), Sv(zv)
            } else ev("Unable to load the ShaderMaterial")
        })), gv.open("GET", zv), gv.send()
      }))
    }
    async function mv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const hv = this?.SnippetUrl ?? iv.SnippetUrl;
      return await new Promise(((Sv, ev) => {
        const gv = new Nv.b;
        gv.addEventListener("readystatechange", (() => {
          if (4 == gv.readyState)
            if (200 == gv.status) {
              const hv = JSON.parse(JSON.parse(gv.responseText).jsonPayload),
                ev = cv(JSON.parse(hv.shaderMaterial), zv || Tv.e.LastCreatedScene, Pv);
              ev.snippetId = vv, Sv(ev)
            } else ev("Unable to load the snippet " + vv)
        })), gv.open("GET", hv + "/" + vv.replace(/#/g, "/")), gv.send()
      }))
    }
    iv.SnippetUrl = "https://snippet.babylonjs.com";
    const jv = mv;
    let fv = !1;

    function Fv() {
      fv || (fv = !0, iv.Parse = cv, iv.ParseFromFileAsync = Gv, iv.ParseFromSnippetAsync = mv, iv.CreateFromSnippetAsync = jv, (0, sv.c)("BABYLON.ShaderMaterial", iv))
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);