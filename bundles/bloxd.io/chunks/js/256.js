export const id = 256;
export const ids = [256];
export const modules = {
  39928: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => rb,
      f: () => Cb,
      i: () => Kb,
      k: () => Wb,
      m: () => lb,
      p: () => Ab
    });
    var Bb = hb(39488),
      Ob = hb(39551),
      Gb = hb(36727),
      Ub = hb(39609),
      Lb = hb(39932),
      Yb = hb(39797),
      Sb = hb(39520),
      ab = hb(39795),
      Hb = hb(36748),
      wb = hb(39782),
      Zb = hb(39773),
      Xb = hb(39809),
      pb = hb(36762);
    const ob = {
      effect: null,
      subMesh: null
    };
    class Ab extends ab.b {
      constructor(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(bb, ub, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new Gb.d, this._cachedWorldViewProjectionMatrix = new Gb.d, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = hb, this._options = {
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
          ...Bb
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(bb) {
        this._shaderPath = bb
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
      _checkUniform(bb) {
        -1 === this._options.uniforms.indexOf(bb) && this._options.uniforms.push(bb)
      }
      setTexture(bb, ub) {
        return -1 === this._options.samplers.indexOf(bb) && this._options.samplers.push(bb), this._textures[bb] = ub, this
      }
      setInternalTexture(bb, ub) {
        return -1 === this._options.samplers.indexOf(bb) && this._options.samplers.push(bb), this._internalTextures[bb] = ub, this
      }
      removeTexture(bb) {
        delete this._textures[bb]
      }
      setTextureArray(bb, ub) {
        return -1 === this._options.samplers.indexOf(bb) && this._options.samplers.push(bb), this._checkUniform(bb), this._textureArrays[bb] = ub, this
      }
      setExternalTexture(bb, ub) {
        return -1 === this._options.externalTextures.indexOf(bb) && this._options.externalTextures.push(bb), this._externalTextures[bb] = ub, this
      }
      setFloat(bb, ub) {
        return this._checkUniform(bb), this._floats[bb] = ub, this
      }
      setInt(bb, ub) {
        return this._checkUniform(bb), this._ints[bb] = ub, this
      }
      setUInt(bb, ub) {
        return this._checkUniform(bb), this._uints[bb] = ub, this
      }
      setFloats(bb, ub) {
        return this._checkUniform(bb), this._floatsArrays[bb] = ub, this
      }
      setColor3(bb, ub) {
        return this._checkUniform(bb), this._colors3[bb] = ub, this
      }
      setColor3Array(bb, ub) {
        return this._checkUniform(bb), this._colors3Arrays[bb] = ub.reduce(((bb, ub) => (bb.push(ub.r, ub.g, ub.b), bb)), []), this
      }
      setColor4(bb, ub) {
        return this._checkUniform(bb), this._colors4[bb] = ub, this
      }
      setColor4Array(bb, ub) {
        return this._checkUniform(bb), this._colors4Arrays[bb] = ub.reduce(((bb, ub) => (bb.push(ub.r, ub.g, ub.b, ub.a), bb)), []), this
      }
      setVector2(bb, ub) {
        return this._checkUniform(bb), this._vectors2[bb] = ub, this
      }
      setVector3(bb, ub) {
        return this._checkUniform(bb), this._vectors3[bb] = ub, this
      }
      setVector4(bb, ub) {
        return this._checkUniform(bb), this._vectors4[bb] = ub, this
      }
      setQuaternion(bb, ub) {
        return this._checkUniform(bb), this._quaternions[bb] = ub, this
      }
      setQuaternionArray(bb, ub) {
        return this._checkUniform(bb), this._quaternionsArrays[bb] = ub.reduce(((bb, ub) => (ub.toArray(bb, bb.length), bb)), []), this
      }
      setMatrix(bb, ub) {
        return this._checkUniform(bb), this._matrices[bb] = ub, this
      }
      setMatrices(bb, ub) {
        this._checkUniform(bb);
        const hb = new Float32Array(16 * ub.length);
        for (let Bb = 0; Bb < ub.length; Bb++) {
          ub[Bb].copyToArray(hb, 16 * Bb)
        }
        return this._matrixArrays[bb] = hb, this
      }
      setMatrix3x3(bb, ub) {
        return this._checkUniform(bb), this._matrices3x3[bb] = ub, this
      }
      setMatrix2x2(bb, ub) {
        return this._checkUniform(bb), this._matrices2x2[bb] = ub, this
      }
      setArray2(bb, ub) {
        return this._checkUniform(bb), this._vectors2Arrays[bb] = ub, this
      }
      setArray3(bb, ub) {
        return this._checkUniform(bb), this._vectors3Arrays[bb] = ub, this
      }
      setArray4(bb, ub) {
        return this._checkUniform(bb), this._vectors4Arrays[bb] = ub, this
      }
      setUniformBuffer(bb, ub) {
        return -1 === this._options.uniformBuffers.indexOf(bb) && this._options.uniformBuffers.push(bb), this._uniformBuffers[bb] = ub, this
      }
      setTextureSampler(bb, ub) {
        return -1 === this._options.samplerObjects.indexOf(bb) && this._options.samplerObjects.push(bb), this._textureSamplers[bb] = ub, this
      }
      setStorageBuffer(bb, ub) {
        return -1 === this._options.storageBuffers.indexOf(bb) && this._options.storageBuffers.push(bb), this._storageBuffers[bb] = ub, this
      }
      setDefine(bb, ub) {
        const hb = bb.trimEnd() + " ",
          Bb = this.options.defines.findIndex((ub => ub === bb || ub.startsWith(hb)));
        return Bb >= 0 && this.options.defines.splice(Bb, 1), ("boolean" !== typeof ub || ub) && this.options.defines.push(hb + ub), this
      }
      isReadyForSubMesh(bb, ub, hb) {
        return this.isReady(bb, hb, ub)
      }
      isReady(bb, ub, hb) {
        const Bb = hb && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const bb = Bb ? hb._drawWrapper : this._drawWrapper;
          if (bb.effect && bb._wasPreviouslyReady && bb._wasPreviouslyUsingInstances === ub) return !0
        }
        const Gb = this.ZN(),
          Lb = Gb.UX(),
          Sb = [],
          ab = [];
        let Hb = null,
          pb = this._shaderPath,
          Ab = this._options.uniforms,
          lb = this._options.uniformBuffers,
          Kb = this._options.samplers;
        Lb.getCaps().multiview && Gb.activeCamera && Gb.activeCamera.outputRenderTarget && Gb.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, Sb.push("#define MULTIVIEW"), -1 !== Ab.indexOf("viewProjection") && -1 === Ab.indexOf("viewProjectionR") && Ab.push("viewProjectionR"));
        for (let Ob = 0; Ob < this._options.defines.length; Ob++) {
          const bb = 0 === this._options.defines[Ob].indexOf("#define") ? this._options.defines[Ob] : `#define ${this._options.defines[Ob]}`;
          Sb.push(bb)
        }
        for (let Ob = 0; Ob < this._options.attributes.length; Ob++) ab.push(this._options.attributes[Ob]);
        if (bb && bb.isVerticesDataPresent(Ub.i.ColorKind) && (-1 === ab.indexOf(Ub.i.ColorKind) && ab.push(Ub.i.ColorKind), Sb.push("#define VERTEXCOLOR")), ub && (Sb.push("#define INSTANCES"), (0, Zb.fb)(ab, this._materialHelperNeedsPreviousMatrices), bb?.hasThinInstances && (Sb.push("#define THIN_INSTANCES"), bb && bb.isVerticesDataPresent(Ub.i.ColorInstanceKind) && (ab.push(Ub.i.ColorInstanceKind), Sb.push("#define INSTANCESCOLOR")))), bb && bb.useBones && bb.computeBonesUsingShaders && bb.skeleton) {
          ab.push(Ub.i.MatricesIndicesKind), ab.push(Ub.i.MatricesWeightsKind), bb.numBoneInfluencers > 4 && (ab.push(Ub.i.MatricesIndicesExtraKind), ab.push(Ub.i.MatricesWeightsExtraKind));
          const ub = bb.skeleton;
          Sb.push("#define NUM_BONE_INFLUENCERS " + bb.numBoneInfluencers), Hb = new Yb.c, Hb.addCPUSkinningFallback(0, bb), ub.isUsingTextureForMatrices ? (Sb.push("#define BONETEXTURE"), -1 === Ab.indexOf("boneTextureInfo") && Ab.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (Sb.push("#define BonesPerMesh " + (ub.bones.length + 1)), -1 === Ab.indexOf("mBones") && Ab.push("mBones"))
        } else Sb.push("#define NUM_BONE_INFLUENCERS 0");
        let Wb = 0;
        const Cb = bb ? bb.morphTargetManager : null;
        if (Cb) {
          const ub = -1 !== Sb.indexOf("#define UV1"),
            hb = -1 !== Sb.indexOf("#define UV2"),
            Bb = -1 !== Sb.indexOf("#define TANGENT"),
            Ob = -1 !== Sb.indexOf("#define NORMAL"),
            Gb = -1 !== Sb.indexOf("#define VERTEXCOLOR");
          Wb = (0, Zb.H)(Cb, Sb, ab, bb, !0, Ob, Bb, ub, hb, Gb), Cb.isUsingTextureForTargets && (-1 === Ab.indexOf("morphTargetTextureIndices") && Ab.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), Wb > 0 && (Ab = Ab.slice(), Ab.push("morphTargetInfluences"), Ab.push("morphTargetCount"), Ab.push("morphTargetTextureInfo"), Ab.push("morphTargetTextureIndices"))
        } else Sb.push("#define NUM_MORPH_INFLUENCERS 0");
        if (bb) {
          const hb = bb.bakedVertexAnimationManager;
          hb && hb.isEnabled && (Sb.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === Ab.indexOf("bakedVertexAnimationSettings") && Ab.push("bakedVertexAnimationSettings"), -1 === Ab.indexOf("bakedVertexAnimationTextureSizeInverted") && Ab.push("bakedVertexAnimationTextureSizeInverted"), -1 === Ab.indexOf("bakedVertexAnimationTime") && Ab.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), ub && ab.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const Ob in this._textures)
          if (!this._textures[Ob].isReady()) return !1;
        for (const Ob in this._internalTextures)
          if (!this._internalTextures[Ob].isReady) return !1;
        bb && this.needAlphaTestingForMesh(bb) && Sb.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, wb.d)(Ab), (0, wb.k)(this, Gb, Sb)), Gb.fogEnabled && bb?.applyFog && Gb.fogMode !== Ob.f.FOGMODE_NONE && (Sb.push("#define FOG"), -1 === Ab.indexOf("view") && Ab.push("view"), -1 === Ab.indexOf("vFogInfos") && Ab.push("vFogInfos"), -1 === Ab.indexOf("vFogColor") && Ab.push("vFogColor")), this._useLogarithmicDepth && (Sb.push("#define LOGARITHMICDEPTH"), -1 === Ab.indexOf("logarithmicDepthConstant") && Ab.push("logarithmicDepthConstant"));
        const db = hb ? hb.getRenderingMesh() : bb;
        if (db && this.useVertexPulling) {
          const bb = db.geometry;
          bb && (this._vertexPullingMetadata = (0, Xb.h)(bb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((bb, ub) => {
            Ab.push(`vp_${ub}_info`)
          }))), Sb.push("#define USE_VERTEX_PULLING");
          const ub = db.geometry?.getIndexBuffer();
          ub && !db.isUnIndexed && (Sb.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), ub.is32Bits && Sb.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (Ab = Ab.slice(), lb = lb.slice(), Kb = Kb.slice(), pb = this.customShaderNameResolve(this.name, Ab, lb, Kb, Sb, ab));
        const rb = Bb ? hb._getDrawWrapper(void 0, !0) : this._drawWrapper,
          jb = rb?.effect ?? null,
          nb = rb?.defines ?? null,
          Db = Sb.join("\n");
        let xb = jb;
        return nb !== Db && (xb = Lb.createEffect(pb, {
          attributes: ab,
          uniformsNames: Ab,
          uniformBuffersNames: lb,
          samplers: Kb,
          defines: Db,
          fallbacks: Hb,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: Wb
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, Lb), Bb ? hb.setEffect(xb, Db, this._materialContext) : rb && rb.setEffect(xb, Db), this._onEffectCreatedObservable && (ob.effect = xb, ob.subMesh = hb ?? bb?.FW[0] ?? null, this._onEffectCreatedObservable.notifyObservers(ob))), rb._wasPreviouslyUsingInstances = !!ub, !!xb?.isReady() && (jb !== xb && Gb.resetCachedMaterial(), rb._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(bb, ub) {
        const hb = ub ?? this.getEffect();
        if (!hb) return;
        const Bb = this._options.uniforms; - 1 !== Bb.indexOf("world") && hb.setMatrix("world", bb);
        const Ob = this.ZN(); - 1 !== Bb.indexOf("worldView") && (bb.multiplyToRef(Ob.getViewMatrix(), this._cachedWorldViewMatrix), hb.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Bb.indexOf("worldViewProjection") && (bb.multiplyToRef(Ob.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), hb.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== Bb.indexOf("view") && hb.setMatrix("view", Ob.getViewMatrix())
      }
      bindForSubMesh(bb, ub, hb) {
        this.bind(bb, ub, hb._drawWrapperOverride?.effect, hb)
      }
      bind(bb, ub, hb, Bb) {
        const Ob = Bb && this._storeEffectOnSubMeshes,
          Gb = hb ?? (Ob ? Bb.effect : this.getEffect());
        if (!Gb) return;
        const Ub = this.ZN();
        this._activeEffect = Gb, this.bindOnlyWorldMatrix(bb, hb);
        const Lb = this._options.uniformBuffers;
        let Yb = !1;
        if (Gb && Lb && Lb.length > 0 && Ub.UX().supportsUniformBuffers)
          for (let ab = 0; ab < Lb.length; ++ab) {
            switch (Lb[ab]) {
              case "Mesh":
                ub && (ub.getMeshUniformBuffer().bindToEffect(Gb, "Mesh"), ub.transferToEffect(bb));
                break;
              case "Scene":
                (0, Zb.s)(Gb, Ub.getSceneUniformBuffer()), Ub.finalizeSceneUbo(), Yb = !0
            }
          }
        const Sb = ub && Ob ? this._mustRebind(Ub, Gb, Bb, ub.visibility) : Ub.getCachedMaterial() !== this;
        if (Gb && Sb) {
          let bb;
          for (bb in Yb || -1 === this._options.uniforms.indexOf("view") || Gb.setMatrix("view", Ub.getViewMatrix()), Yb || -1 === this._options.uniforms.indexOf("projection") || Gb.setMatrix("projection", Ub.getProjectionMatrix()), Yb || -1 === this._options.uniforms.indexOf("viewProjection") || (Gb.setMatrix("viewProjection", Ub.getTransformMatrix()), this._multiview && Gb.setMatrix("viewProjectionR", Ub._transformMatrixR)), Ub.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && Gb.setVector3("cameraPosition", Ub.activeCamera.globalPosition), (0, Zb.e)(ub, Gb), (0, wb.g)(Gb, this, Ub), this._vertexPullingMetadata && (0, Xb.d)(Gb, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, Zb.l)(Ob ? Bb.materialDefines : Gb.defines, Gb, Ub), ub && (0, Zb.f)(Ub, ub, Gb), this._textures) Gb.setTexture(bb, this._textures[bb]);
          for (bb in this._internalTextures) Gb._bindTexture(bb, this._internalTextures[bb]);
          for (bb in this._textureArrays) Gb.setTextureArray(bb, this._textureArrays[bb]);
          for (bb in this._ints) Gb.setInt(bb, this._ints[bb]);
          for (bb in this._uints) Gb.setUInt(bb, this._uints[bb]);
          for (bb in this._floats) Gb.setFloat(bb, this._floats[bb]);
          for (bb in this._floatsArrays) Gb.setArray(bb, this._floatsArrays[bb]);
          for (bb in this._colors3) Gb.setColor3(bb, this._colors3[bb]);
          for (bb in this._colors3Arrays) Gb.setArray3(bb, this._colors3Arrays[bb]);
          for (bb in this._colors4) {
            const ub = this._colors4[bb];
            Gb.setFloat4(bb, ub.r, ub.g, ub.b, ub.a)
          }
          for (bb in this._colors4Arrays) Gb.setArray4(bb, this._colors4Arrays[bb]);
          for (bb in this._vectors2) Gb.setVector2(bb, this._vectors2[bb]);
          for (bb in this._vectors3) Gb.setVector3(bb, this._vectors3[bb]);
          for (bb in this._vectors4) Gb.setVector4(bb, this._vectors4[bb]);
          for (bb in this._quaternions) Gb.setQuaternion(bb, this._quaternions[bb]);
          for (bb in this._matrices) Gb.setMatrix(bb, this._matrices[bb]);
          for (bb in this._matrixArrays) Gb.setMatrices(bb, this._matrixArrays[bb]);
          for (bb in this._matrices3x3) Gb.setMatrix3x3(bb, this._matrices3x3[bb]);
          for (bb in this._matrices2x2) Gb.setMatrix2x2(bb, this._matrices2x2[bb]);
          for (bb in this._vectors2Arrays) Gb.setArray2(bb, this._vectors2Arrays[bb]);
          for (bb in this._vectors3Arrays) Gb.setArray3(bb, this._vectors3Arrays[bb]);
          for (bb in this._vectors4Arrays) Gb.setArray4(bb, this._vectors4Arrays[bb]);
          for (bb in this._quaternionsArrays) Gb.setArray4(bb, this._quaternionsArrays[bb]);
          for (bb in this._uniformBuffers) {
            const ub = this._uniformBuffers[bb].getBuffer();
            ub && Gb.bindUniformBuffer(ub, bb)
          }
          const hb = Ub.UX(),
            Lb = hb.setExternalTexture;
          if (Lb)
            for (bb in this._externalTextures) Lb.call(hb, bb, this._externalTextures[bb]);
          const Sb = hb.setTextureSampler;
          if (Sb)
            for (bb in this._textureSamplers) Sb.call(hb, bb, this._textureSamplers[bb]);
          const ab = hb.setStorageBuffer;
          if (ab)
            for (bb in this._storageBuffers) ab.call(hb, bb, this._storageBuffers[bb])
        }
        if (Gb && ub && (Sb || !this.isFrozen)) {
          (0, Zb.p)(ub, Gb), ub.morphTargetManager && ub.morphTargetManager.isUsingTextureForTargets && ub.morphTargetManager._bind(Gb);
          const bb = ub.bakedVertexAnimationManager;
          if (bb && bb.isEnabled) {
            const bb = Ob ? Bb._drawWrapper : this._drawWrapper;
            ub.bakedVertexAnimationManager?.bind(Gb, !!bb._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(ub, Gb, Bb)
      }
      getActiveTextures() {
        const bb = super.getActiveTextures();
        for (const ub in this._textures) bb.push(this._textures[ub]);
        for (const ub in this._textureArrays) {
          const hb = this._textureArrays[ub];
          for (let ub = 0; ub < hb.length; ub++) bb.push(hb[ub])
        }
        return bb
      }
      hasTexture(bb) {
        if (super.hasTexture(bb)) return !0;
        for (const hb in this._textures)
          if (this._textures[hb] === bb) return !0;
        const ub = bb.getInternalTexture();
        for (const hb in this._internalTextures)
          if (this._internalTextures[hb] === ub) return !0;
        for (const hb in this._textureArrays) {
          const ub = this._textureArrays[hb];
          for (let hb = 0; hb < ub.length; hb++)
            if (ub[hb] === bb) return !0
        }
        return !1
      }
      clone(bb) {
        const ub = Bb.c.Clone((() => new Ab(bb, this.ZN(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        ub.name = bb, ub.id = bb, "object" === typeof ub._shaderPath && (ub._shaderPath = {
          ...ub._shaderPath
        }), this._options = {
          ...this._options
        };
        const hb = Object.keys(this._options);
        for (const Bb of hb) {
          const bb = this._options[Bb];
          Array.isArray(bb) && (this._options[Bb] = bb.slice(0))
        }
        this.stencil.copyTo(ub.stencil);
        for (const Bb in this._textures) ub.setTexture(Bb, this._textures[Bb]);
        for (const Bb in this._internalTextures) ub.setInternalTexture(Bb, this._internalTextures[Bb]);
        for (const Bb in this._textureArrays) ub.setTextureArray(Bb, this._textureArrays[Bb]);
        for (const Bb in this._externalTextures) ub.setExternalTexture(Bb, this._externalTextures[Bb]);
        for (const Bb in this._ints) ub.setInt(Bb, this._ints[Bb]);
        for (const Bb in this._uints) ub.setUInt(Bb, this._uints[Bb]);
        for (const Bb in this._floats) ub.setFloat(Bb, this._floats[Bb]);
        for (const Bb in this._floatsArrays) ub.setFloats(Bb, this._floatsArrays[Bb]);
        for (const Bb in this._colors3) ub.setColor3(Bb, this._colors3[Bb]);
        for (const Bb in this._colors3Arrays) ub._colors3Arrays[Bb] = this._colors3Arrays[Bb];
        for (const Bb in this._colors4) ub.setColor4(Bb, this._colors4[Bb]);
        for (const Bb in this._colors4Arrays) ub._colors4Arrays[Bb] = this._colors4Arrays[Bb];
        for (const Bb in this._vectors2) ub.setVector2(Bb, this._vectors2[Bb]);
        for (const Bb in this._vectors3) ub.setVector3(Bb, this._vectors3[Bb]);
        for (const Bb in this._vectors4) ub.setVector4(Bb, this._vectors4[Bb]);
        for (const Bb in this._quaternions) ub.setQuaternion(Bb, this._quaternions[Bb]);
        for (const Bb in this._quaternionsArrays) ub._quaternionsArrays[Bb] = this._quaternionsArrays[Bb];
        for (const Bb in this._matrices) ub.setMatrix(Bb, this._matrices[Bb]);
        for (const Bb in this._matrixArrays) ub._matrixArrays[Bb] = this._matrixArrays[Bb].slice();
        for (const Bb in this._matrices3x3) ub.setMatrix3x3(Bb, this._matrices3x3[Bb]);
        for (const Bb in this._matrices2x2) ub.setMatrix2x2(Bb, this._matrices2x2[Bb]);
        for (const Bb in this._vectors2Arrays) ub.setArray2(Bb, this._vectors2Arrays[Bb]);
        for (const Bb in this._vectors3Arrays) ub.setArray3(Bb, this._vectors3Arrays[Bb]);
        for (const Bb in this._vectors4Arrays) ub.setArray4(Bb, this._vectors4Arrays[Bb]);
        for (const Bb in this._uniformBuffers) ub.setUniformBuffer(Bb, this._uniformBuffers[Bb]);
        for (const Bb in this._textureSamplers) ub.setTextureSampler(Bb, this._textureSamplers[Bb]);
        for (const Bb in this._storageBuffers) ub.setStorageBuffer(Bb, this._storageBuffers[Bb]);
        return ub
      }
      dispose(bb, ub, hb) {
        if (ub) {
          let bb;
          for (bb in this._textures) this._textures[bb].dispose();
          for (bb in this._internalTextures) this._internalTextures[bb].dispose();
          for (bb in this._textureArrays) {
            const ub = this._textureArrays[bb];
            for (let bb = 0; bb < ub.length; bb++) ub[bb].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(bb, ub, hb)
      }
      serialize() {
        const bb = Bb.c.Serialize(this);
        let ub;
        for (ub in bb.customType = "BABYLON.ShaderMaterial", bb.uniqueId = this.uniqueId, bb.options = this._options, bb.shaderPath = this._shaderPath, bb.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, bb.stencil = this.stencil.serialize(), bb.textures = {}, this._textures) bb.textures[ub] = this._textures[ub].serialize();
        for (ub in bb.textureArrays = {}, this._textureArrays) {
          bb.textureArrays[ub] = [];
          const hb = this._textureArrays[ub];
          for (let Bb = 0; Bb < hb.length; Bb++) bb.textureArrays[ub].push(hb[Bb].serialize())
        }
        for (ub in bb.ints = {}, this._ints) bb.ints[ub] = this._ints[ub];
        for (ub in bb.uints = {}, this._uints) bb.uints[ub] = this._uints[ub];
        for (ub in bb.floats = {}, this._floats) bb.floats[ub] = this._floats[ub];
        for (ub in bb.floatsArrays = {}, this._floatsArrays) bb.floatsArrays[ub] = this._floatsArrays[ub];
        for (ub in bb.colors3 = {}, this._colors3) {
          const hb = this._colors3[ub];
          bb.colors3[ub] = [hb.r, hb.g, hb.b]
        }
        for (ub in bb.colors3Arrays = {}, this._colors3Arrays) bb.colors3Arrays[ub] = this._colors3Arrays[ub];
        for (ub in bb.colors4 = {}, this._colors4) {
          const hb = this._colors4[ub];
          bb.colors4[ub] = [hb.r, hb.g, hb.b, hb.a]
        }
        for (ub in bb.colors4Arrays = {}, this._colors4Arrays) bb.colors4Arrays[ub] = this._colors4Arrays[ub];
        for (ub in bb.vectors2 = {}, this._vectors2) {
          const hb = this._vectors2[ub];
          bb.vectors2[ub] = [hb.x, hb.y]
        }
        for (ub in bb.vectors3 = {}, this._vectors3) {
          const hb = this._vectors3[ub];
          bb.vectors3[ub] = [hb.x, hb.y, hb.z]
        }
        for (ub in bb.vectors4 = {}, this._vectors4) {
          const hb = this._vectors4[ub];
          bb.vectors4[ub] = [hb.x, hb.y, hb.z, hb.w]
        }
        for (ub in bb.quaternions = {}, this._quaternions) bb.quaternions[ub] = this._quaternions[ub].ZBb();
        for (ub in bb.matrices = {}, this._matrices) bb.matrices[ub] = this._matrices[ub].ZBb();
        for (ub in bb.matrixArray = {}, this._matrixArrays) bb.matrixArray[ub] = this._matrixArrays[ub];
        for (ub in bb.matrices3x3 = {}, this._matrices3x3) bb.matrices3x3[ub] = this._matrices3x3[ub];
        for (ub in bb.matrices2x2 = {}, this._matrices2x2) bb.matrices2x2[ub] = this._matrices2x2[ub];
        for (ub in bb.vectors2Arrays = {}, this._vectors2Arrays) bb.vectors2Arrays[ub] = this._vectors2Arrays[ub];
        for (ub in bb.vectors3Arrays = {}, this._vectors3Arrays) bb.vectors3Arrays[ub] = this._vectors3Arrays[ub];
        for (ub in bb.vectors4Arrays = {}, this._vectors4Arrays) bb.vectors4Arrays[ub] = this._vectors4Arrays[ub];
        for (ub in bb.quaternionsArrays = {}, this._quaternionsArrays) bb.quaternionsArrays[ub] = this._quaternionsArrays[ub];
        return bb
      }
    }

    function lb(bb, ub, hb) {
      const Ob = Bb.c.Parse((() => new Ab(bb.name, ub, bb.shaderPath, bb.options, bb.storeEffectOnSubMeshes)), bb, ub, hb);
      let Ub;
      for (Ub in bb.stencil && Ob.stencil.parse(bb.stencil, ub, hb), bb.textures) Ob.setTexture(Ub, Lb.f.Parse(bb.textures[Ub], ub, hb));
      for (Ub in bb.textureArrays) {
        const Bb = bb.textureArrays[Ub],
          Gb = [];
        for (let bb = 0; bb < Bb.length; bb++) Gb.push(Lb.f.Parse(Bb[bb], ub, hb));
        Ob.setTextureArray(Ub, Gb)
      }
      for (Ub in bb.ints) Ob.setInt(Ub, bb.ints[Ub]);
      for (Ub in bb.uints) Ob.setUInt(Ub, bb.uints[Ub]);
      for (Ub in bb.floats) Ob.setFloat(Ub, bb.floats[Ub]);
      for (Ub in bb.floatsArrays) Ob.setFloats(Ub, bb.floatsArrays[Ub]);
      for (Ub in bb.colors3) {
        const ub = bb.colors3[Ub];
        Ob.setColor3(Ub, {
          r: ub[0],
          g: ub[1],
          b: ub[2]
        })
      }
      for (Ub in bb.colors3Arrays) {
        const ub = bb.colors3Arrays[Ub].reduce(((bb, ub, hb) => (hb % 3 === 0 ? bb.push([ub]) : bb[bb.length - 1].push(ub), bb)), []).map((bb => ({
          r: bb[0],
          g: bb[1],
          b: bb[2]
        })));
        Ob.setColor3Array(Ub, ub)
      }
      for (Ub in bb.colors4) {
        const ub = bb.colors4[Ub];
        Ob.setColor4(Ub, {
          r: ub[0],
          g: ub[1],
          b: ub[2],
          a: ub[3]
        })
      }
      for (Ub in bb.colors4Arrays) {
        const ub = bb.colors4Arrays[Ub].reduce(((bb, ub, hb) => (hb % 4 === 0 ? bb.push([ub]) : bb[bb.length - 1].push(ub), bb)), []).map((bb => ({
          r: bb[0],
          g: bb[1],
          b: bb[2],
          a: bb[3]
        })));
        Ob.setColor4Array(Ub, ub)
      }
      for (Ub in bb.vectors2) {
        const ub = bb.vectors2[Ub];
        Ob.setVector2(Ub, {
          x: ub[0],
          y: ub[1]
        })
      }
      for (Ub in bb.vectors3) {
        const ub = bb.vectors3[Ub];
        Ob.setVector3(Ub, {
          x: ub[0],
          y: ub[1],
          z: ub[2]
        })
      }
      for (Ub in bb.vectors4) {
        const ub = bb.vectors4[Ub];
        Ob.setVector4(Ub, {
          x: ub[0],
          y: ub[1],
          z: ub[2],
          w: ub[3]
        })
      }
      for (Ub in bb.quaternions) Ob.setQuaternion(Ub, Gb.f.FromArray(bb.quaternions[Ub]));
      for (Ub in bb.matrices) Ob.setMatrix(Ub, Gb.d.FromArray(bb.matrices[Ub]));
      const Yb = Ob;
      for (Ub in bb.matrixArray) Yb._matrixArrays[Ub] = new Float32Array(bb.matrixArray[Ub]);
      for (Ub in bb.matrices3x3) Ob.setMatrix3x3(Ub, bb.matrices3x3[Ub]);
      for (Ub in bb.matrices2x2) Ob.setMatrix2x2(Ub, bb.matrices2x2[Ub]);
      for (Ub in bb.vectors2Arrays) Ob.setArray2(Ub, bb.vectors2Arrays[Ub]);
      for (Ub in bb.vectors3Arrays) Ob.setArray3(Ub, bb.vectors3Arrays[Ub]);
      for (Ub in bb.vectors4Arrays) Ob.setArray4(Ub, bb.vectors4Arrays[Ub]);
      for (Ub in bb.quaternionsArrays) Ob.setArray4(Ub, bb.quaternionsArrays[Ub]);
      return Ob
    }
    async function Kb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((Ob, Gb) => {
        const Ub = new Sb.b;
        Ub.addEventListener("readystatechange", (() => {
          if (4 == Ub.readyState)
            if (200 == Ub.status) {
              const ub = lb(JSON.parse(Ub.responseText), hb || Hb.b.LastCreatedScene, Bb);
              bb && (ub.name = bb), Ob(ub)
            } else Gb("Unable to load the ShaderMaterial")
        })), Ub.open("GET", ub), Ub.send()
      }))
    }
    async function Wb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Bb = this?.SnippetUrl ?? Ab.SnippetUrl;
      return await new Promise(((Ob, Gb) => {
        const Ub = new Sb.b;
        Ub.addEventListener("readystatechange", (() => {
          if (4 == Ub.readyState)
            if (200 == Ub.status) {
              const Bb = JSON.parse(JSON.parse(Ub.responseText).jsonPayload),
                Gb = lb(JSON.parse(Bb.shaderMaterial), ub || Hb.b.LastCreatedScene, hb);
              Gb.snippetId = bb, Ob(Gb)
            } else Gb("Unable to load the snippet " + bb)
        })), Ub.open("GET", Bb + "/" + bb.replace(/#/g, "/")), Ub.send()
      }))
    }
    Ab.SnippetUrl = "https://snippet.babylonjs.com";
    const Cb = Wb;
    let db = !1;

    function rb() {
      db || (db = !0, Ab.Parse = lb, Ab.ParseFromFileAsync = Kb, Ab.ParseFromSnippetAsync = Wb, Ab.CreateFromSnippetAsync = Cb, (0, pb.f)("BABYLON.ShaderMaterial", Ab))
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);