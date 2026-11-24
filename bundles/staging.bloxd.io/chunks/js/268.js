export const id = 268;
export const ids = [268];
export const modules = {
  40659: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Kt,
      e: () => Ct,
      g: () => bt,
      h: () => Jt,
      k: () => Mt,
      o: () => Nt
    });
    var Ot = Vt(40230),
      qt = Vt(40296),
      Dt = Vt(37336),
      mt = Vt(40343),
      dt = Vt(40661),
      jt = Vt(40540),
      Ht = Vt(40255),
      Xt = Vt(40531),
      Qt = Vt(37359),
      lt = Vt(40520),
      Et = Vt(40514),
      ft = Vt(40558),
      wt = Vt(37390);
    const yt = {
      effect: null,
      subMesh: null
    };
    class Nt extends Xt.e {
      constructor(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(tt, et, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new Dt.c, this._cachedWorldViewProjectionMatrix = new Dt.c, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = Vt, this._options = {
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
          ...Ot
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(tt) {
        this._shaderPath = tt
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
      _checkUniform(tt) {
        -1 === this._options.uniforms.indexOf(tt) && this._options.uniforms.push(tt)
      }
      setTexture(tt, et) {
        return -1 === this._options.samplers.indexOf(tt) && this._options.samplers.push(tt), this._textures[tt] = et, this
      }
      setInternalTexture(tt, et) {
        return -1 === this._options.samplers.indexOf(tt) && this._options.samplers.push(tt), this._internalTextures[tt] = et, this
      }
      removeTexture(tt) {
        delete this._textures[tt]
      }
      setTextureArray(tt, et) {
        return -1 === this._options.samplers.indexOf(tt) && this._options.samplers.push(tt), this._checkUniform(tt), this._textureArrays[tt] = et, this
      }
      setExternalTexture(tt, et) {
        return -1 === this._options.externalTextures.indexOf(tt) && this._options.externalTextures.push(tt), this._externalTextures[tt] = et, this
      }
      setFloat(tt, et) {
        return this._checkUniform(tt), this._floats[tt] = et, this
      }
      setInt(tt, et) {
        return this._checkUniform(tt), this._ints[tt] = et, this
      }
      setUInt(tt, et) {
        return this._checkUniform(tt), this._uints[tt] = et, this
      }
      setFloats(tt, et) {
        return this._checkUniform(tt), this._floatsArrays[tt] = et, this
      }
      setColor3(tt, et) {
        return this._checkUniform(tt), this._colors3[tt] = et, this
      }
      setColor3Array(tt, et) {
        return this._checkUniform(tt), this._colors3Arrays[tt] = et.reduce(((tt, et) => (tt.push(et.r, et.g, et.b), tt)), []), this
      }
      setColor4(tt, et) {
        return this._checkUniform(tt), this._colors4[tt] = et, this
      }
      setColor4Array(tt, et) {
        return this._checkUniform(tt), this._colors4Arrays[tt] = et.reduce(((tt, et) => (tt.push(et.r, et.g, et.b, et.a), tt)), []), this
      }
      setVector2(tt, et) {
        return this._checkUniform(tt), this._vectors2[tt] = et, this
      }
      setVector3(tt, et) {
        return this._checkUniform(tt), this._vectors3[tt] = et, this
      }
      setVector4(tt, et) {
        return this._checkUniform(tt), this._vectors4[tt] = et, this
      }
      setQuaternion(tt, et) {
        return this._checkUniform(tt), this._quaternions[tt] = et, this
      }
      setQuaternionArray(tt, et) {
        return this._checkUniform(tt), this._quaternionsArrays[tt] = et.reduce(((tt, et) => (et.toArray(tt, tt.length), tt)), []), this
      }
      setMatrix(tt, et) {
        return this._checkUniform(tt), this._matrices[tt] = et, this
      }
      setMatrices(tt, et) {
        this._checkUniform(tt);
        const Vt = new Float32Array(16 * et.length);
        for (let Ot = 0; Ot < et.length; Ot++) {
          et[Ot].copyToArray(Vt, 16 * Ot)
        }
        return this._matrixArrays[tt] = Vt, this
      }
      setMatrix3x3(tt, et) {
        return this._checkUniform(tt), this._matrices3x3[tt] = et, this
      }
      setMatrix2x2(tt, et) {
        return this._checkUniform(tt), this._matrices2x2[tt] = et, this
      }
      setArray2(tt, et) {
        return this._checkUniform(tt), this._vectors2Arrays[tt] = et, this
      }
      setArray3(tt, et) {
        return this._checkUniform(tt), this._vectors3Arrays[tt] = et, this
      }
      setArray4(tt, et) {
        return this._checkUniform(tt), this._vectors4Arrays[tt] = et, this
      }
      setUniformBuffer(tt, et) {
        return -1 === this._options.uniformBuffers.indexOf(tt) && this._options.uniformBuffers.push(tt), this._uniformBuffers[tt] = et, this
      }
      setTextureSampler(tt, et) {
        return -1 === this._options.samplerObjects.indexOf(tt) && this._options.samplerObjects.push(tt), this._textureSamplers[tt] = et, this
      }
      setStorageBuffer(tt, et) {
        return -1 === this._options.storageBuffers.indexOf(tt) && this._options.storageBuffers.push(tt), this._storageBuffers[tt] = et, this
      }
      setDefine(tt, et) {
        const Vt = tt.trimEnd() + " ",
          Ot = this.options.defines.findIndex((et => et === tt || et.startsWith(Vt)));
        return Ot >= 0 && this.options.defines.splice(Ot, 1), ("boolean" !== typeof et || et) && this.options.defines.push(Vt + et), this
      }
      isReadyForSubMesh(tt, et, Vt) {
        return this.isReady(tt, Vt, et)
      }
      isReady(tt, et, Vt) {
        const Ot = Vt && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const tt = Ot ? Vt._drawWrapper : this._drawWrapper;
          if (tt.effect && tt._wasPreviouslyReady && tt._wasPreviouslyUsingInstances === et) return !0
        }
        const Dt = this.vI(),
          dt = Dt.Jf(),
          Ht = [],
          Xt = [];
        let Qt = null,
          wt = this._shaderPath,
          Nt = this._options.uniforms,
          Mt = this._options.uniformBuffers,
          bt = this._options.samplers;
        dt.getCaps().multiview && Dt.activeCamera && Dt.activeCamera.outputRenderTarget && Dt.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, Ht.push("#define MULTIVIEW"), -1 !== Nt.indexOf("viewProjection") && -1 === Nt.indexOf("viewProjectionR") && Nt.push("viewProjectionR"));
        for (let qt = 0; qt < this._options.defines.length; qt++) {
          const tt = 0 === this._options.defines[qt].indexOf("#define") ? this._options.defines[qt] : `#define ${this._options.defines[qt]}`;
          Ht.push(tt)
        }
        for (let qt = 0; qt < this._options.attributes.length; qt++) Xt.push(this._options.attributes[qt]);
        if (tt && tt.isVerticesDataPresent(mt.m.ColorKind) && (-1 === Xt.indexOf(mt.m.ColorKind) && Xt.push(mt.m.ColorKind), Ht.push("#define VERTEXCOLOR")), et && (Ht.push("#define INSTANCES"), (0, Et.pb)(Xt, this._materialHelperNeedsPreviousMatrices), tt?.hasThinInstances && (Ht.push("#define THIN_INSTANCES"), tt && tt.isVerticesDataPresent(mt.m.ColorInstanceKind) && (Xt.push(mt.m.ColorInstanceKind), Ht.push("#define INSTANCESCOLOR")))), tt && tt.useBones && tt.computeBonesUsingShaders && tt.skeleton) {
          Xt.push(mt.m.MatricesIndicesKind), Xt.push(mt.m.MatricesWeightsKind), tt.numBoneInfluencers > 4 && (Xt.push(mt.m.MatricesIndicesExtraKind), Xt.push(mt.m.MatricesWeightsExtraKind));
          const et = tt.skeleton;
          Ht.push("#define NUM_BONE_INFLUENCERS " + tt.numBoneInfluencers), Qt = new jt.b, Qt.addCPUSkinningFallback(0, tt), et.isUsingTextureForMatrices ? (Ht.push("#define BONETEXTURE"), -1 === Nt.indexOf("boneTextureInfo") && Nt.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (Ht.push("#define BonesPerMesh " + (et.bones.length + 1)), -1 === Nt.indexOf("mBones") && Nt.push("mBones"))
        } else Ht.push("#define NUM_BONE_INFLUENCERS 0");
        let Jt = 0;
        const Ct = tt ? tt.morphTargetManager : null;
        if (Ct) {
          const et = -1 !== Ht.indexOf("#define UV1"),
            Vt = -1 !== Ht.indexOf("#define UV2"),
            Ot = -1 !== Ht.indexOf("#define TANGENT"),
            qt = -1 !== Ht.indexOf("#define NORMAL"),
            Dt = -1 !== Ht.indexOf("#define VERTEXCOLOR");
          Jt = (0, Et.O)(Ct, Ht, Xt, tt, !0, qt, Ot, et, Vt, Dt), Ct.isUsingTextureForTargets && (-1 === Nt.indexOf("morphTargetTextureIndices") && Nt.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), Jt > 0 && (Nt = Nt.slice(), Nt.push("morphTargetInfluences"), Nt.push("morphTargetCount"), Nt.push("morphTargetTextureInfo"), Nt.push("morphTargetTextureIndices"))
        } else Ht.push("#define NUM_MORPH_INFLUENCERS 0");
        if (tt) {
          const Vt = tt.bakedVertexAnimationManager;
          Vt && Vt.isEnabled && (Ht.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === Nt.indexOf("bakedVertexAnimationSettings") && Nt.push("bakedVertexAnimationSettings"), -1 === Nt.indexOf("bakedVertexAnimationTextureSizeInverted") && Nt.push("bakedVertexAnimationTextureSizeInverted"), -1 === Nt.indexOf("bakedVertexAnimationTime") && Nt.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), et && Xt.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const qt in this._textures)
          if (!this._textures[qt].isReady()) return !1;
        for (const qt in this._internalTextures)
          if (!this._internalTextures[qt].isReady) return !1;
        tt && this.needAlphaTestingForMesh(tt) && Ht.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, lt.e)(Nt), (0, lt.j)(this, Dt, Ht)), Dt.fogEnabled && tt?.applyFog && Dt.fogMode !== qt.d.FOGMODE_NONE && (Ht.push("#define FOG"), -1 === Nt.indexOf("view") && Nt.push("view"), -1 === Nt.indexOf("vFogInfos") && Nt.push("vFogInfos"), -1 === Nt.indexOf("vFogColor") && Nt.push("vFogColor")), this._useLogarithmicDepth && (Ht.push("#define LOGARITHMICDEPTH"), -1 === Nt.indexOf("logarithmicDepthConstant") && Nt.push("logarithmicDepthConstant"));
        const ut = Vt ? Vt.getRenderingMesh() : tt;
        if (ut && this.useVertexPulling) {
          const tt = ut.geometry;
          tt && (this._vertexPullingMetadata = (0, ft.h)(tt), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((tt, et) => {
            Nt.push(`vp_${et}_info`)
          }))), Ht.push("#define USE_VERTEX_PULLING");
          const et = ut.geometry?.getIndexBuffer();
          et && !ut.isUnIndexed && (Ht.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), et.is32Bits && Ht.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (Nt = Nt.slice(), Mt = Mt.slice(), bt = bt.slice(), wt = this.customShaderNameResolve(this.name, Nt, Mt, bt, Ht, Xt));
        const Kt = Ot ? Vt._getDrawWrapper(void 0, !0) : this._drawWrapper,
          ht = Kt?.effect ?? null,
          vt = Kt?.defines ?? null,
          Wt = Ht.join("\n");
        let St = ht;
        return vt !== Wt && (St = dt.createEffect(wt, {
          attributes: Xt,
          uniformsNames: Nt,
          uniformBuffersNames: Mt,
          samplers: bt,
          defines: Wt,
          fallbacks: Qt,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: Jt
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, dt), Ot ? Vt.setEffect(St, Wt, this._materialContext) : Kt && Kt.setEffect(St, Wt), this._onEffectCreatedObservable && (yt.effect = St, yt.subMesh = Vt ?? tt?.vJ[0] ?? null, this._onEffectCreatedObservable.notifyObservers(yt))), Kt._wasPreviouslyUsingInstances = !!et, !!St?.isReady() && (ht !== St && Dt.resetCachedMaterial(), Kt._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(tt, et) {
        const Vt = et ?? this.getEffect();
        if (!Vt) return;
        const Ot = this._options.uniforms; - 1 !== Ot.indexOf("world") && Vt.setMatrix("world", tt);
        const qt = this.vI(); - 1 !== Ot.indexOf("worldView") && (tt.multiplyToRef(qt.getViewMatrix(), this._cachedWorldViewMatrix), Vt.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== Ot.indexOf("worldViewProjection") && (tt.multiplyToRef(qt.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), Vt.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== Ot.indexOf("view") && Vt.setMatrix("view", qt.getViewMatrix())
      }
      bindForSubMesh(tt, et, Vt) {
        this.bind(tt, et, Vt._drawWrapperOverride?.effect, Vt)
      }
      bind(tt, et, Vt, Ot) {
        const qt = Ot && this._storeEffectOnSubMeshes,
          Dt = Vt ?? (qt ? Ot.effect : this.getEffect());
        if (!Dt) return;
        const mt = this.vI();
        this._activeEffect = Dt, this.bindOnlyWorldMatrix(tt, Vt);
        const dt = this._options.uniformBuffers;
        let jt = !1;
        if (Dt && dt && dt.length > 0 && mt.Jf().supportsUniformBuffers)
          for (let Xt = 0; Xt < dt.length; ++Xt) {
            switch (dt[Xt]) {
              case "Mesh":
                et && (et.getMeshUniformBuffer().bindToEffect(Dt, "Mesh"), et.transferToEffect(tt));
                break;
              case "Scene":
                (0, Et.t)(Dt, mt.getSceneUniformBuffer()), mt.finalizeSceneUbo(), jt = !0
            }
          }
        const Ht = et && qt ? this._mustRebind(mt, Dt, Ot, et.visibility) : mt.getCachedMaterial() !== this;
        if (Dt && Ht) {
          let tt;
          for (tt in jt || -1 === this._options.uniforms.indexOf("view") || Dt.setMatrix("view", mt.getViewMatrix()), jt || -1 === this._options.uniforms.indexOf("projection") || Dt.setMatrix("projection", mt.getProjectionMatrix()), jt || -1 === this._options.uniforms.indexOf("viewProjection") || (Dt.setMatrix("viewProjection", mt.getTransformMatrix()), this._multiview && Dt.setMatrix("viewProjectionR", mt._transformMatrixR)), mt.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && Dt.setVector3("cameraPosition", mt.activeCamera.globalPosition), (0, Et.f)(et, Dt), (0, lt.f)(Dt, this, mt), this._vertexPullingMetadata && (0, ft.d)(Dt, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, Et.q)(qt ? Ot.materialDefines : Dt.defines, Dt, mt), et && (0, Et.i)(mt, et, Dt), this._textures) Dt.setTexture(tt, this._textures[tt]);
          for (tt in this._internalTextures) Dt._bindTexture(tt, this._internalTextures[tt]);
          for (tt in this._textureArrays) Dt.setTextureArray(tt, this._textureArrays[tt]);
          for (tt in this._ints) Dt.setInt(tt, this._ints[tt]);
          for (tt in this._uints) Dt.setUInt(tt, this._uints[tt]);
          for (tt in this._floats) Dt.setFloat(tt, this._floats[tt]);
          for (tt in this._floatsArrays) Dt.setArray(tt, this._floatsArrays[tt]);
          for (tt in this._colors3) Dt.setColor3(tt, this._colors3[tt]);
          for (tt in this._colors3Arrays) Dt.setArray3(tt, this._colors3Arrays[tt]);
          for (tt in this._colors4) {
            const et = this._colors4[tt];
            Dt.setFloat4(tt, et.r, et.g, et.b, et.a)
          }
          for (tt in this._colors4Arrays) Dt.setArray4(tt, this._colors4Arrays[tt]);
          for (tt in this._vectors2) Dt.setVector2(tt, this._vectors2[tt]);
          for (tt in this._vectors3) Dt.setVector3(tt, this._vectors3[tt]);
          for (tt in this._vectors4) Dt.setVector4(tt, this._vectors4[tt]);
          for (tt in this._quaternions) Dt.setQuaternion(tt, this._quaternions[tt]);
          for (tt in this._matrices) Dt.setMatrix(tt, this._matrices[tt]);
          for (tt in this._matrixArrays) Dt.setMatrices(tt, this._matrixArrays[tt]);
          for (tt in this._matrices3x3) Dt.setMatrix3x3(tt, this._matrices3x3[tt]);
          for (tt in this._matrices2x2) Dt.setMatrix2x2(tt, this._matrices2x2[tt]);
          for (tt in this._vectors2Arrays) Dt.setArray2(tt, this._vectors2Arrays[tt]);
          for (tt in this._vectors3Arrays) Dt.setArray3(tt, this._vectors3Arrays[tt]);
          for (tt in this._vectors4Arrays) Dt.setArray4(tt, this._vectors4Arrays[tt]);
          for (tt in this._quaternionsArrays) Dt.setArray4(tt, this._quaternionsArrays[tt]);
          for (tt in this._uniformBuffers) {
            const et = this._uniformBuffers[tt].getBuffer();
            et && Dt.bindUniformBuffer(et, tt)
          }
          const Vt = mt.Jf(),
            dt = Vt.setExternalTexture;
          if (dt)
            for (tt in this._externalTextures) dt.call(Vt, tt, this._externalTextures[tt]);
          const Ht = Vt.setTextureSampler;
          if (Ht)
            for (tt in this._textureSamplers) Ht.call(Vt, tt, this._textureSamplers[tt]);
          const Xt = Vt.setStorageBuffer;
          if (Xt)
            for (tt in this._storageBuffers) Xt.call(Vt, tt, this._storageBuffers[tt])
        }
        if (Dt && et && (Ht || !this.isFrozen)) {
          (0, Et.r)(et, Dt), et.morphTargetManager && et.morphTargetManager.isUsingTextureForTargets && et.morphTargetManager._bind(Dt);
          const tt = et.bakedVertexAnimationManager;
          if (tt && tt.isEnabled) {
            const tt = qt ? Ot._drawWrapper : this._drawWrapper;
            et.bakedVertexAnimationManager?.bind(Dt, !!tt._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(et, Dt, Ot)
      }
      getActiveTextures() {
        const tt = super.getActiveTextures();
        for (const et in this._textures) tt.push(this._textures[et]);
        for (const et in this._textureArrays) {
          const Vt = this._textureArrays[et];
          for (let et = 0; et < Vt.length; et++) tt.push(Vt[et])
        }
        return tt
      }
      hasTexture(tt) {
        if (super.hasTexture(tt)) return !0;
        for (const Vt in this._textures)
          if (this._textures[Vt] === tt) return !0;
        const et = tt.getInternalTexture();
        for (const Vt in this._internalTextures)
          if (this._internalTextures[Vt] === et) return !0;
        for (const Vt in this._textureArrays) {
          const et = this._textureArrays[Vt];
          for (let Vt = 0; Vt < et.length; Vt++)
            if (et[Vt] === tt) return !0
        }
        return !1
      }
      clone(tt) {
        const et = Ot.d.Clone((() => new Nt(tt, this.vI(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        et.name = tt, et.id = tt, "object" === typeof et._shaderPath && (et._shaderPath = {
          ...et._shaderPath
        }), this._options = {
          ...this._options
        };
        const Vt = Object.keys(this._options);
        for (const Ot of Vt) {
          const tt = this._options[Ot];
          Array.isArray(tt) && (this._options[Ot] = tt.slice(0))
        }
        this.stencil.copyTo(et.stencil);
        for (const Ot in this._textures) et.setTexture(Ot, this._textures[Ot]);
        for (const Ot in this._internalTextures) et.setInternalTexture(Ot, this._internalTextures[Ot]);
        for (const Ot in this._textureArrays) et.setTextureArray(Ot, this._textureArrays[Ot]);
        for (const Ot in this._externalTextures) et.setExternalTexture(Ot, this._externalTextures[Ot]);
        for (const Ot in this._ints) et.setInt(Ot, this._ints[Ot]);
        for (const Ot in this._uints) et.setUInt(Ot, this._uints[Ot]);
        for (const Ot in this._floats) et.setFloat(Ot, this._floats[Ot]);
        for (const Ot in this._floatsArrays) et.setFloats(Ot, this._floatsArrays[Ot]);
        for (const Ot in this._colors3) et.setColor3(Ot, this._colors3[Ot]);
        for (const Ot in this._colors3Arrays) et._colors3Arrays[Ot] = this._colors3Arrays[Ot];
        for (const Ot in this._colors4) et.setColor4(Ot, this._colors4[Ot]);
        for (const Ot in this._colors4Arrays) et._colors4Arrays[Ot] = this._colors4Arrays[Ot];
        for (const Ot in this._vectors2) et.setVector2(Ot, this._vectors2[Ot]);
        for (const Ot in this._vectors3) et.setVector3(Ot, this._vectors3[Ot]);
        for (const Ot in this._vectors4) et.setVector4(Ot, this._vectors4[Ot]);
        for (const Ot in this._quaternions) et.setQuaternion(Ot, this._quaternions[Ot]);
        for (const Ot in this._quaternionsArrays) et._quaternionsArrays[Ot] = this._quaternionsArrays[Ot];
        for (const Ot in this._matrices) et.setMatrix(Ot, this._matrices[Ot]);
        for (const Ot in this._matrixArrays) et._matrixArrays[Ot] = this._matrixArrays[Ot].slice();
        for (const Ot in this._matrices3x3) et.setMatrix3x3(Ot, this._matrices3x3[Ot]);
        for (const Ot in this._matrices2x2) et.setMatrix2x2(Ot, this._matrices2x2[Ot]);
        for (const Ot in this._vectors2Arrays) et.setArray2(Ot, this._vectors2Arrays[Ot]);
        for (const Ot in this._vectors3Arrays) et.setArray3(Ot, this._vectors3Arrays[Ot]);
        for (const Ot in this._vectors4Arrays) et.setArray4(Ot, this._vectors4Arrays[Ot]);
        for (const Ot in this._uniformBuffers) et.setUniformBuffer(Ot, this._uniformBuffers[Ot]);
        for (const Ot in this._textureSamplers) et.setTextureSampler(Ot, this._textureSamplers[Ot]);
        for (const Ot in this._storageBuffers) et.setStorageBuffer(Ot, this._storageBuffers[Ot]);
        return et
      }
      dispose(tt, et, Vt) {
        if (et) {
          let tt;
          for (tt in this._textures) this._textures[tt].dispose();
          for (tt in this._internalTextures) this._internalTextures[tt].dispose();
          for (tt in this._textureArrays) {
            const et = this._textureArrays[tt];
            for (let tt = 0; tt < et.length; tt++) et[tt].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(tt, et, Vt)
      }
      serialize() {
        const tt = Ot.d.Serialize(this);
        let et;
        for (et in tt.customType = "BABYLON.ShaderMaterial", tt.uniqueId = this.uniqueId, tt.options = this._options, tt.shaderPath = this._shaderPath, tt.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, tt.stencil = this.stencil.serialize(), tt.textures = {}, this._textures) tt.textures[et] = this._textures[et].serialize();
        for (et in tt.textureArrays = {}, this._textureArrays) {
          tt.textureArrays[et] = [];
          const Vt = this._textureArrays[et];
          for (let Ot = 0; Ot < Vt.length; Ot++) tt.textureArrays[et].push(Vt[Ot].serialize())
        }
        for (et in tt.ints = {}, this._ints) tt.ints[et] = this._ints[et];
        for (et in tt.uints = {}, this._uints) tt.uints[et] = this._uints[et];
        for (et in tt.floats = {}, this._floats) tt.floats[et] = this._floats[et];
        for (et in tt.floatsArrays = {}, this._floatsArrays) tt.floatsArrays[et] = this._floatsArrays[et];
        for (et in tt.colors3 = {}, this._colors3) {
          const Vt = this._colors3[et];
          tt.colors3[et] = [Vt.r, Vt.g, Vt.b]
        }
        for (et in tt.colors3Arrays = {}, this._colors3Arrays) tt.colors3Arrays[et] = this._colors3Arrays[et];
        for (et in tt.colors4 = {}, this._colors4) {
          const Vt = this._colors4[et];
          tt.colors4[et] = [Vt.r, Vt.g, Vt.b, Vt.a]
        }
        for (et in tt.colors4Arrays = {}, this._colors4Arrays) tt.colors4Arrays[et] = this._colors4Arrays[et];
        for (et in tt.vectors2 = {}, this._vectors2) {
          const Vt = this._vectors2[et];
          tt.vectors2[et] = [Vt.x, Vt.y]
        }
        for (et in tt.vectors3 = {}, this._vectors3) {
          const Vt = this._vectors3[et];
          tt.vectors3[et] = [Vt.x, Vt.y, Vt.z]
        }
        for (et in tt.vectors4 = {}, this._vectors4) {
          const Vt = this._vectors4[et];
          tt.vectors4[et] = [Vt.x, Vt.y, Vt.z, Vt.w]
        }
        for (et in tt.quaternions = {}, this._quaternions) tt.quaternions[et] = this._quaternions[et].GOt();
        for (et in tt.matrices = {}, this._matrices) tt.matrices[et] = this._matrices[et].GOt();
        for (et in tt.matrixArray = {}, this._matrixArrays) tt.matrixArray[et] = this._matrixArrays[et];
        for (et in tt.matrices3x3 = {}, this._matrices3x3) tt.matrices3x3[et] = this._matrices3x3[et];
        for (et in tt.matrices2x2 = {}, this._matrices2x2) tt.matrices2x2[et] = this._matrices2x2[et];
        for (et in tt.vectors2Arrays = {}, this._vectors2Arrays) tt.vectors2Arrays[et] = this._vectors2Arrays[et];
        for (et in tt.vectors3Arrays = {}, this._vectors3Arrays) tt.vectors3Arrays[et] = this._vectors3Arrays[et];
        for (et in tt.vectors4Arrays = {}, this._vectors4Arrays) tt.vectors4Arrays[et] = this._vectors4Arrays[et];
        for (et in tt.quaternionsArrays = {}, this._quaternionsArrays) tt.quaternionsArrays[et] = this._quaternionsArrays[et];
        return tt
      }
    }

    function Mt(tt, et, Vt) {
      const qt = Ot.d.Parse((() => new Nt(tt.name, et, tt.shaderPath, tt.options, tt.storeEffectOnSubMeshes)), tt, et, Vt);
      let mt;
      for (mt in tt.stencil && qt.stencil.parse(tt.stencil, et, Vt), tt.textures) qt.setTexture(mt, dt.f.Parse(tt.textures[mt], et, Vt));
      for (mt in tt.textureArrays) {
        const Ot = tt.textureArrays[mt],
          Dt = [];
        for (let tt = 0; tt < Ot.length; tt++) Dt.push(dt.f.Parse(Ot[tt], et, Vt));
        qt.setTextureArray(mt, Dt)
      }
      for (mt in tt.ints) qt.setInt(mt, tt.ints[mt]);
      for (mt in tt.uints) qt.setUInt(mt, tt.uints[mt]);
      for (mt in tt.floats) qt.setFloat(mt, tt.floats[mt]);
      for (mt in tt.floatsArrays) qt.setFloats(mt, tt.floatsArrays[mt]);
      for (mt in tt.colors3) {
        const et = tt.colors3[mt];
        qt.setColor3(mt, {
          r: et[0],
          g: et[1],
          b: et[2]
        })
      }
      for (mt in tt.colors3Arrays) {
        const et = tt.colors3Arrays[mt].reduce(((tt, et, Vt) => (Vt % 3 === 0 ? tt.push([et]) : tt[tt.length - 1].push(et), tt)), []).map((tt => ({
          r: tt[0],
          g: tt[1],
          b: tt[2]
        })));
        qt.setColor3Array(mt, et)
      }
      for (mt in tt.colors4) {
        const et = tt.colors4[mt];
        qt.setColor4(mt, {
          r: et[0],
          g: et[1],
          b: et[2],
          a: et[3]
        })
      }
      for (mt in tt.colors4Arrays) {
        const et = tt.colors4Arrays[mt].reduce(((tt, et, Vt) => (Vt % 4 === 0 ? tt.push([et]) : tt[tt.length - 1].push(et), tt)), []).map((tt => ({
          r: tt[0],
          g: tt[1],
          b: tt[2],
          a: tt[3]
        })));
        qt.setColor4Array(mt, et)
      }
      for (mt in tt.vectors2) {
        const et = tt.vectors2[mt];
        qt.setVector2(mt, {
          x: et[0],
          y: et[1]
        })
      }
      for (mt in tt.vectors3) {
        const et = tt.vectors3[mt];
        qt.setVector3(mt, {
          x: et[0],
          y: et[1],
          z: et[2]
        })
      }
      for (mt in tt.vectors4) {
        const et = tt.vectors4[mt];
        qt.setVector4(mt, {
          x: et[0],
          y: et[1],
          z: et[2],
          w: et[3]
        })
      }
      for (mt in tt.quaternions) qt.setQuaternion(mt, Dt.e.FromArray(tt.quaternions[mt]));
      for (mt in tt.matrices) qt.setMatrix(mt, Dt.c.FromArray(tt.matrices[mt]));
      const jt = qt;
      for (mt in tt.matrixArray) jt._matrixArrays[mt] = new Float32Array(tt.matrixArray[mt]);
      for (mt in tt.matrices3x3) qt.setMatrix3x3(mt, tt.matrices3x3[mt]);
      for (mt in tt.matrices2x2) qt.setMatrix2x2(mt, tt.matrices2x2[mt]);
      for (mt in tt.vectors2Arrays) qt.setArray2(mt, tt.vectors2Arrays[mt]);
      for (mt in tt.vectors3Arrays) qt.setArray3(mt, tt.vectors3Arrays[mt]);
      for (mt in tt.vectors4Arrays) qt.setArray4(mt, tt.vectors4Arrays[mt]);
      for (mt in tt.quaternionsArrays) qt.setArray4(mt, tt.quaternionsArrays[mt]);
      return qt
    }
    async function bt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((qt, Dt) => {
        const mt = new Ht.e;
        mt.addEventListener("readystatechange", (() => {
          if (4 == mt.readyState)
            if (200 == mt.status) {
              const et = Mt(JSON.parse(mt.responseText), Vt || Qt.d.LastCreatedScene, Ot);
              tt && (et.name = tt), qt(et)
            } else Dt("Unable to load the ShaderMaterial")
        })), mt.open("GET", et), mt.send()
      }))
    }
    async function Jt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Ot = this?.SnippetUrl ?? Nt.SnippetUrl;
      return await new Promise(((qt, Dt) => {
        const mt = new Ht.e;
        mt.addEventListener("readystatechange", (() => {
          if (4 == mt.readyState)
            if (200 == mt.status) {
              const Ot = JSON.parse(JSON.parse(mt.responseText).jsonPayload),
                Dt = Mt(JSON.parse(Ot.shaderMaterial), et || Qt.d.LastCreatedScene, Vt);
              Dt.snippetId = tt, qt(Dt)
            } else Dt("Unable to load the snippet " + tt)
        })), mt.open("GET", Ot + "/" + tt.replace(/#/g, "/")), mt.send()
      }))
    }
    Nt.SnippetUrl = "https://snippet.babylonjs.com";
    const Ct = Jt;
    let ut = !1;

    function Kt() {
      ut || (ut = !0, Nt.Parse = Mt, Nt.ParseFromFileAsync = bt, Nt.ParseFromSnippetAsync = Jt, Nt.CreateFromSnippetAsync = Ct, (0, wt.i)("BABYLON.ShaderMaterial", Nt))
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);