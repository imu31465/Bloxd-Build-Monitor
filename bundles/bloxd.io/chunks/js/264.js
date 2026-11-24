export const id = 264;
export const ids = [264];
export const modules = {
  40577: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Jm,
      c: () => Qm,
      g: () => Im,
      i: () => Km,
      j: () => Vm,
      n: () => jm
    });
    var hm = fm(40129),
      Am = fm(40199),
      am = fm(37185),
      xm = fm(40251),
      wm = fm(40585),
      Dm = fm(40447),
      im = fm(40160),
      Rm = fm(40445),
      pm = fm(37201),
      Em = fm(40432),
      om = fm(40428),
      Om = fm(40465),
      Ym = fm(37224);
    const qm = {
      effect: null,
      subMesh: null
    };
    class jm extends Rm.d {
      constructor(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(mm, Tm, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new am.e, this._cachedWorldViewProjectionMatrix = new am.e, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = fm, this._options = {
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
          ...hm
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(mm) {
        this._shaderPath = mm
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
      _checkUniform(mm) {
        -1 === this._options.uniforms.indexOf(mm) && this._options.uniforms.push(mm)
      }
      setTexture(mm, Tm) {
        return -1 === this._options.samplers.indexOf(mm) && this._options.samplers.push(mm), this._textures[mm] = Tm, this
      }
      setInternalTexture(mm, Tm) {
        return -1 === this._options.samplers.indexOf(mm) && this._options.samplers.push(mm), this._internalTextures[mm] = Tm, this
      }
      removeTexture(mm) {
        delete this._textures[mm]
      }
      setTextureArray(mm, Tm) {
        return -1 === this._options.samplers.indexOf(mm) && this._options.samplers.push(mm), this._checkUniform(mm), this._textureArrays[mm] = Tm, this
      }
      setExternalTexture(mm, Tm) {
        return -1 === this._options.externalTextures.indexOf(mm) && this._options.externalTextures.push(mm), this._externalTextures[mm] = Tm, this
      }
      setFloat(mm, Tm) {
        return this._checkUniform(mm), this._floats[mm] = Tm, this
      }
      setInt(mm, Tm) {
        return this._checkUniform(mm), this._ints[mm] = Tm, this
      }
      setUInt(mm, Tm) {
        return this._checkUniform(mm), this._uints[mm] = Tm, this
      }
      setFloats(mm, Tm) {
        return this._checkUniform(mm), this._floatsArrays[mm] = Tm, this
      }
      setColor3(mm, Tm) {
        return this._checkUniform(mm), this._colors3[mm] = Tm, this
      }
      setColor3Array(mm, Tm) {
        return this._checkUniform(mm), this._colors3Arrays[mm] = Tm.reduce(((mm, Tm) => (mm.push(Tm.r, Tm.g, Tm.b), mm)), []), this
      }
      setColor4(mm, Tm) {
        return this._checkUniform(mm), this._colors4[mm] = Tm, this
      }
      setColor4Array(mm, Tm) {
        return this._checkUniform(mm), this._colors4Arrays[mm] = Tm.reduce(((mm, Tm) => (mm.push(Tm.r, Tm.g, Tm.b, Tm.a), mm)), []), this
      }
      setVector2(mm, Tm) {
        return this._checkUniform(mm), this._vectors2[mm] = Tm, this
      }
      setVector3(mm, Tm) {
        return this._checkUniform(mm), this._vectors3[mm] = Tm, this
      }
      setVector4(mm, Tm) {
        return this._checkUniform(mm), this._vectors4[mm] = Tm, this
      }
      setQuaternion(mm, Tm) {
        return this._checkUniform(mm), this._quaternions[mm] = Tm, this
      }
      setQuaternionArray(mm, Tm) {
        return this._checkUniform(mm), this._quaternionsArrays[mm] = Tm.reduce(((mm, Tm) => (Tm.toArray(mm, mm.length), mm)), []), this
      }
      setMatrix(mm, Tm) {
        return this._checkUniform(mm), this._matrices[mm] = Tm, this
      }
      setMatrices(mm, Tm) {
        this._checkUniform(mm);
        const fm = new Float32Array(16 * Tm.length);
        for (let hm = 0; hm < Tm.length; hm++) {
          Tm[hm].copyToArray(fm, 16 * hm)
        }
        return this._matrixArrays[mm] = fm, this
      }
      setMatrix3x3(mm, Tm) {
        return this._checkUniform(mm), this._matrices3x3[mm] = Tm, this
      }
      setMatrix2x2(mm, Tm) {
        return this._checkUniform(mm), this._matrices2x2[mm] = Tm, this
      }
      setArray2(mm, Tm) {
        return this._checkUniform(mm), this._vectors2Arrays[mm] = Tm, this
      }
      setArray3(mm, Tm) {
        return this._checkUniform(mm), this._vectors3Arrays[mm] = Tm, this
      }
      setArray4(mm, Tm) {
        return this._checkUniform(mm), this._vectors4Arrays[mm] = Tm, this
      }
      setUniformBuffer(mm, Tm) {
        return -1 === this._options.uniformBuffers.indexOf(mm) && this._options.uniformBuffers.push(mm), this._uniformBuffers[mm] = Tm, this
      }
      setTextureSampler(mm, Tm) {
        return -1 === this._options.samplerObjects.indexOf(mm) && this._options.samplerObjects.push(mm), this._textureSamplers[mm] = Tm, this
      }
      setStorageBuffer(mm, Tm) {
        return -1 === this._options.storageBuffers.indexOf(mm) && this._options.storageBuffers.push(mm), this._storageBuffers[mm] = Tm, this
      }
      setDefine(mm, Tm) {
        const fm = mm.trimEnd() + " ",
          hm = this.options.defines.findIndex((Tm => Tm === mm || Tm.startsWith(fm)));
        return hm >= 0 && this.options.defines.splice(hm, 1), ("boolean" !== typeof Tm || Tm) && this.options.defines.push(fm + Tm), this
      }
      isReadyForSubMesh(mm, Tm, fm) {
        return this.isReady(mm, fm, Tm)
      }
      isReady(mm, Tm, fm) {
        const hm = fm && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const mm = hm ? fm._drawWrapper : this._drawWrapper;
          if (mm.effect && mm._wasPreviouslyReady && mm._wasPreviouslyUsingInstances === Tm) return !0
        }
        const am = this.wG(),
          wm = am.dO(),
          im = [],
          Rm = [];
        let pm = null,
          Ym = this._shaderPath,
          jm = this._options.uniforms,
          Vm = this._options.uniformBuffers,
          Im = this._options.samplers;
        wm.getCaps().multiview && am.activeCamera && am.activeCamera.outputRenderTarget && am.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, im.push("#define MULTIVIEW"), -1 !== jm.indexOf("viewProjection") && -1 === jm.indexOf("viewProjectionR") && jm.push("viewProjectionR"));
        for (let Am = 0; Am < this._options.defines.length; Am++) {
          const mm = 0 === this._options.defines[Am].indexOf("#define") ? this._options.defines[Am] : `#define ${this._options.defines[Am]}`;
          im.push(mm)
        }
        for (let Am = 0; Am < this._options.attributes.length; Am++) Rm.push(this._options.attributes[Am]);
        if (mm && mm.isVerticesDataPresent(xm.m.ColorKind) && (-1 === Rm.indexOf(xm.m.ColorKind) && Rm.push(xm.m.ColorKind), im.push("#define VERTEXCOLOR")), Tm && (im.push("#define INSTANCES"), (0, om.ub)(Rm, this._materialHelperNeedsPreviousMatrices), mm?.hasThinInstances && (im.push("#define THIN_INSTANCES"), mm && mm.isVerticesDataPresent(xm.m.ColorInstanceKind) && (Rm.push(xm.m.ColorInstanceKind), im.push("#define INSTANCESCOLOR")))), mm && mm.useBones && mm.computeBonesUsingShaders && mm.skeleton) {
          Rm.push(xm.m.MatricesIndicesKind), Rm.push(xm.m.MatricesWeightsKind), mm.numBoneInfluencers > 4 && (Rm.push(xm.m.MatricesIndicesExtraKind), Rm.push(xm.m.MatricesWeightsExtraKind));
          const Tm = mm.skeleton;
          im.push("#define NUM_BONE_INFLUENCERS " + mm.numBoneInfluencers), pm = new Dm.e, pm.addCPUSkinningFallback(0, mm), Tm.isUsingTextureForMatrices ? (im.push("#define BONETEXTURE"), -1 === jm.indexOf("boneTextureInfo") && jm.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (im.push("#define BonesPerMesh " + (Tm.bones.length + 1)), -1 === jm.indexOf("mBones") && jm.push("mBones"))
        } else im.push("#define NUM_BONE_INFLUENCERS 0");
        let Km = 0;
        const Qm = mm ? mm.morphTargetManager : null;
        if (Qm) {
          const Tm = -1 !== im.indexOf("#define UV1"),
            fm = -1 !== im.indexOf("#define UV2"),
            hm = -1 !== im.indexOf("#define TANGENT"),
            Am = -1 !== im.indexOf("#define NORMAL"),
            am = -1 !== im.indexOf("#define VERTEXCOLOR");
          Km = (0, om.P)(Qm, im, Rm, mm, !0, Am, hm, Tm, fm, am), Qm.isUsingTextureForTargets && (-1 === jm.indexOf("morphTargetTextureIndices") && jm.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), Km > 0 && (jm = jm.slice(), jm.push("morphTargetInfluences"), jm.push("morphTargetCount"), jm.push("morphTargetTextureInfo"), jm.push("morphTargetTextureIndices"))
        } else im.push("#define NUM_MORPH_INFLUENCERS 0");
        if (mm) {
          const fm = mm.bakedVertexAnimationManager;
          fm && fm.isEnabled && (im.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === jm.indexOf("bakedVertexAnimationSettings") && jm.push("bakedVertexAnimationSettings"), -1 === jm.indexOf("bakedVertexAnimationTextureSizeInverted") && jm.push("bakedVertexAnimationTextureSizeInverted"), -1 === jm.indexOf("bakedVertexAnimationTime") && jm.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), Tm && Rm.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const Am in this._textures)
          if (!this._textures[Am].isReady()) return !1;
        for (const Am in this._internalTextures)
          if (!this._internalTextures[Am].isReady) return !1;
        mm && this.needAlphaTestingForMesh(mm) && im.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, Em.c)(jm), (0, Em.k)(this, am, im)), am.fogEnabled && mm?.applyFog && am.fogMode !== Am.f.FOGMODE_NONE && (im.push("#define FOG"), -1 === jm.indexOf("view") && jm.push("view"), -1 === jm.indexOf("vFogInfos") && jm.push("vFogInfos"), -1 === jm.indexOf("vFogColor") && jm.push("vFogColor")), this._useLogarithmicDepth && (im.push("#define LOGARITHMICDEPTH"), -1 === jm.indexOf("logarithmicDepthConstant") && jm.push("logarithmicDepthConstant"));
        const nm = fm ? fm.getRenderingMesh() : mm;
        if (nm && this.useVertexPulling) {
          const mm = nm.geometry;
          mm && (this._vertexPullingMetadata = (0, Om.f)(mm), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((mm, Tm) => {
            jm.push(`vp_${Tm}_info`)
          }))), im.push("#define USE_VERTEX_PULLING");
          const Tm = nm.geometry?.getIndexBuffer();
          Tm && !nm.isUnIndexed && (im.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), Tm.is32Bits && im.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (jm = jm.slice(), Vm = Vm.slice(), Im = Im.slice(), Ym = this.customShaderNameResolve(this.name, jm, Vm, Im, im, Rm));
        const Jm = hm ? fm._getDrawWrapper(void 0, !0) : this._drawWrapper,
          cm = Jm?.effect ?? null,
          zm = Jm?.defines ?? null,
          Zm = im.join("\n");
        let km = cm;
        return zm !== Zm && (km = wm.createEffect(Ym, {
          attributes: Rm,
          uniformsNames: jm,
          uniformBuffersNames: Vm,
          samplers: Im,
          defines: Zm,
          fallbacks: pm,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: Km
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, wm), hm ? fm.setEffect(km, Zm, this._materialContext) : Jm && Jm.setEffect(km, Zm), this._onEffectCreatedObservable && (qm.effect = km, qm.subMesh = fm ?? mm?.jK[0] ?? null, this._onEffectCreatedObservable.notifyObservers(qm))), Jm._wasPreviouslyUsingInstances = !!Tm, !!km?.isReady() && (cm !== km && am.resetCachedMaterial(), Jm._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(mm, Tm) {
        const fm = Tm ?? this.getEffect();
        if (!fm) return;
        const hm = this._options.uniforms; - 1 !== hm.indexOf("world") && fm.setMatrix("world", mm);
        const Am = this.wG(); - 1 !== hm.indexOf("worldView") && (mm.multiplyToRef(Am.getViewMatrix(), this._cachedWorldViewMatrix), fm.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== hm.indexOf("worldViewProjection") && (mm.multiplyToRef(Am.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), fm.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== hm.indexOf("view") && fm.setMatrix("view", Am.getViewMatrix())
      }
      bindForSubMesh(mm, Tm, fm) {
        this.bind(mm, Tm, fm._drawWrapperOverride?.effect, fm)
      }
      bind(mm, Tm, fm, hm) {
        const Am = hm && this._storeEffectOnSubMeshes,
          am = fm ?? (Am ? hm.effect : this.getEffect());
        if (!am) return;
        const xm = this.wG();
        this._activeEffect = am, this.bindOnlyWorldMatrix(mm, fm);
        const wm = this._options.uniformBuffers;
        let Dm = !1;
        if (am && wm && wm.length > 0 && xm.dO().supportsUniformBuffers)
          for (let Rm = 0; Rm < wm.length; ++Rm) {
            switch (wm[Rm]) {
              case "Mesh":
                Tm && (Tm.getMeshUniformBuffer().bindToEffect(am, "Mesh"), Tm.transferToEffect(mm));
                break;
              case "Scene":
                (0, om.v)(am, xm.getSceneUniformBuffer()), xm.finalizeSceneUbo(), Dm = !0
            }
          }
        const im = Tm && Am ? this._mustRebind(xm, am, hm, Tm.visibility) : xm.getCachedMaterial() !== this;
        if (am && im) {
          let mm;
          for (mm in Dm || -1 === this._options.uniforms.indexOf("view") || am.setMatrix("view", xm.getViewMatrix()), Dm || -1 === this._options.uniforms.indexOf("projection") || am.setMatrix("projection", xm.getProjectionMatrix()), Dm || -1 === this._options.uniforms.indexOf("viewProjection") || (am.setMatrix("viewProjection", xm.getTransformMatrix()), this._multiview && am.setMatrix("viewProjectionR", xm._transformMatrixR)), xm.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && am.setVector3("cameraPosition", xm.activeCamera.globalPosition), (0, om.f)(Tm, am), (0, Em.d)(am, this, xm), this._vertexPullingMetadata && (0, Om.c)(am, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, om.r)(Am ? hm.materialDefines : am.defines, am, xm), Tm && (0, om.j)(xm, Tm, am), this._textures) am.setTexture(mm, this._textures[mm]);
          for (mm in this._internalTextures) am._bindTexture(mm, this._internalTextures[mm]);
          for (mm in this._textureArrays) am.setTextureArray(mm, this._textureArrays[mm]);
          for (mm in this._ints) am.setInt(mm, this._ints[mm]);
          for (mm in this._uints) am.setUInt(mm, this._uints[mm]);
          for (mm in this._floats) am.setFloat(mm, this._floats[mm]);
          for (mm in this._floatsArrays) am.setArray(mm, this._floatsArrays[mm]);
          for (mm in this._colors3) am.setColor3(mm, this._colors3[mm]);
          for (mm in this._colors3Arrays) am.setArray3(mm, this._colors3Arrays[mm]);
          for (mm in this._colors4) {
            const Tm = this._colors4[mm];
            am.setFloat4(mm, Tm.r, Tm.g, Tm.b, Tm.a)
          }
          for (mm in this._colors4Arrays) am.setArray4(mm, this._colors4Arrays[mm]);
          for (mm in this._vectors2) am.setVector2(mm, this._vectors2[mm]);
          for (mm in this._vectors3) am.setVector3(mm, this._vectors3[mm]);
          for (mm in this._vectors4) am.setVector4(mm, this._vectors4[mm]);
          for (mm in this._quaternions) am.setQuaternion(mm, this._quaternions[mm]);
          for (mm in this._matrices) am.setMatrix(mm, this._matrices[mm]);
          for (mm in this._matrixArrays) am.setMatrices(mm, this._matrixArrays[mm]);
          for (mm in this._matrices3x3) am.setMatrix3x3(mm, this._matrices3x3[mm]);
          for (mm in this._matrices2x2) am.setMatrix2x2(mm, this._matrices2x2[mm]);
          for (mm in this._vectors2Arrays) am.setArray2(mm, this._vectors2Arrays[mm]);
          for (mm in this._vectors3Arrays) am.setArray3(mm, this._vectors3Arrays[mm]);
          for (mm in this._vectors4Arrays) am.setArray4(mm, this._vectors4Arrays[mm]);
          for (mm in this._quaternionsArrays) am.setArray4(mm, this._quaternionsArrays[mm]);
          for (mm in this._uniformBuffers) {
            const Tm = this._uniformBuffers[mm].getBuffer();
            Tm && am.bindUniformBuffer(Tm, mm)
          }
          const fm = xm.dO(),
            wm = fm.setExternalTexture;
          if (wm)
            for (mm in this._externalTextures) wm.call(fm, mm, this._externalTextures[mm]);
          const im = fm.setTextureSampler;
          if (im)
            for (mm in this._textureSamplers) im.call(fm, mm, this._textureSamplers[mm]);
          const Rm = fm.setStorageBuffer;
          if (Rm)
            for (mm in this._storageBuffers) Rm.call(fm, mm, this._storageBuffers[mm])
        }
        if (am && Tm && (im || !this.isFrozen)) {
          (0, om.s)(Tm, am), Tm.morphTargetManager && Tm.morphTargetManager.isUsingTextureForTargets && Tm.morphTargetManager._bind(am);
          const mm = Tm.bakedVertexAnimationManager;
          if (mm && mm.isEnabled) {
            const mm = Am ? hm._drawWrapper : this._drawWrapper;
            Tm.bakedVertexAnimationManager?.bind(am, !!mm._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(Tm, am, hm)
      }
      getActiveTextures() {
        const mm = super.getActiveTextures();
        for (const Tm in this._textures) mm.push(this._textures[Tm]);
        for (const Tm in this._textureArrays) {
          const fm = this._textureArrays[Tm];
          for (let Tm = 0; Tm < fm.length; Tm++) mm.push(fm[Tm])
        }
        return mm
      }
      hasTexture(mm) {
        if (super.hasTexture(mm)) return !0;
        for (const fm in this._textures)
          if (this._textures[fm] === mm) return !0;
        const Tm = mm.getInternalTexture();
        for (const fm in this._internalTextures)
          if (this._internalTextures[fm] === Tm) return !0;
        for (const fm in this._textureArrays) {
          const Tm = this._textureArrays[fm];
          for (let fm = 0; fm < Tm.length; fm++)
            if (Tm[fm] === mm) return !0
        }
        return !1
      }
      clone(mm) {
        const Tm = hm.d.Clone((() => new jm(mm, this.wG(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        Tm.name = mm, Tm.id = mm, "object" === typeof Tm._shaderPath && (Tm._shaderPath = {
          ...Tm._shaderPath
        }), this._options = {
          ...this._options
        };
        const fm = Object.keys(this._options);
        for (const hm of fm) {
          const mm = this._options[hm];
          Array.isArray(mm) && (this._options[hm] = mm.slice(0))
        }
        this.stencil.copyTo(Tm.stencil);
        for (const hm in this._textures) Tm.setTexture(hm, this._textures[hm]);
        for (const hm in this._internalTextures) Tm.setInternalTexture(hm, this._internalTextures[hm]);
        for (const hm in this._textureArrays) Tm.setTextureArray(hm, this._textureArrays[hm]);
        for (const hm in this._externalTextures) Tm.setExternalTexture(hm, this._externalTextures[hm]);
        for (const hm in this._ints) Tm.setInt(hm, this._ints[hm]);
        for (const hm in this._uints) Tm.setUInt(hm, this._uints[hm]);
        for (const hm in this._floats) Tm.setFloat(hm, this._floats[hm]);
        for (const hm in this._floatsArrays) Tm.setFloats(hm, this._floatsArrays[hm]);
        for (const hm in this._colors3) Tm.setColor3(hm, this._colors3[hm]);
        for (const hm in this._colors3Arrays) Tm._colors3Arrays[hm] = this._colors3Arrays[hm];
        for (const hm in this._colors4) Tm.setColor4(hm, this._colors4[hm]);
        for (const hm in this._colors4Arrays) Tm._colors4Arrays[hm] = this._colors4Arrays[hm];
        for (const hm in this._vectors2) Tm.setVector2(hm, this._vectors2[hm]);
        for (const hm in this._vectors3) Tm.setVector3(hm, this._vectors3[hm]);
        for (const hm in this._vectors4) Tm.setVector4(hm, this._vectors4[hm]);
        for (const hm in this._quaternions) Tm.setQuaternion(hm, this._quaternions[hm]);
        for (const hm in this._quaternionsArrays) Tm._quaternionsArrays[hm] = this._quaternionsArrays[hm];
        for (const hm in this._matrices) Tm.setMatrix(hm, this._matrices[hm]);
        for (const hm in this._matrixArrays) Tm._matrixArrays[hm] = this._matrixArrays[hm].slice();
        for (const hm in this._matrices3x3) Tm.setMatrix3x3(hm, this._matrices3x3[hm]);
        for (const hm in this._matrices2x2) Tm.setMatrix2x2(hm, this._matrices2x2[hm]);
        for (const hm in this._vectors2Arrays) Tm.setArray2(hm, this._vectors2Arrays[hm]);
        for (const hm in this._vectors3Arrays) Tm.setArray3(hm, this._vectors3Arrays[hm]);
        for (const hm in this._vectors4Arrays) Tm.setArray4(hm, this._vectors4Arrays[hm]);
        for (const hm in this._uniformBuffers) Tm.setUniformBuffer(hm, this._uniformBuffers[hm]);
        for (const hm in this._textureSamplers) Tm.setTextureSampler(hm, this._textureSamplers[hm]);
        for (const hm in this._storageBuffers) Tm.setStorageBuffer(hm, this._storageBuffers[hm]);
        return Tm
      }
      dispose(mm, Tm, fm) {
        if (Tm) {
          let mm;
          for (mm in this._textures) this._textures[mm].dispose();
          for (mm in this._internalTextures) this._internalTextures[mm].dispose();
          for (mm in this._textureArrays) {
            const Tm = this._textureArrays[mm];
            for (let mm = 0; mm < Tm.length; mm++) Tm[mm].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(mm, Tm, fm)
      }
      serialize() {
        const mm = hm.d.Serialize(this);
        let Tm;
        for (Tm in mm.customType = "BABYLON.ShaderMaterial", mm.uniqueId = this.uniqueId, mm.options = this._options, mm.shaderPath = this._shaderPath, mm.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, mm.stencil = this.stencil.serialize(), mm.textures = {}, this._textures) mm.textures[Tm] = this._textures[Tm].serialize();
        for (Tm in mm.textureArrays = {}, this._textureArrays) {
          mm.textureArrays[Tm] = [];
          const fm = this._textureArrays[Tm];
          for (let hm = 0; hm < fm.length; hm++) mm.textureArrays[Tm].push(fm[hm].serialize())
        }
        for (Tm in mm.ints = {}, this._ints) mm.ints[Tm] = this._ints[Tm];
        for (Tm in mm.uints = {}, this._uints) mm.uints[Tm] = this._uints[Tm];
        for (Tm in mm.floats = {}, this._floats) mm.floats[Tm] = this._floats[Tm];
        for (Tm in mm.floatsArrays = {}, this._floatsArrays) mm.floatsArrays[Tm] = this._floatsArrays[Tm];
        for (Tm in mm.colors3 = {}, this._colors3) {
          const fm = this._colors3[Tm];
          mm.colors3[Tm] = [fm.r, fm.g, fm.b]
        }
        for (Tm in mm.colors3Arrays = {}, this._colors3Arrays) mm.colors3Arrays[Tm] = this._colors3Arrays[Tm];
        for (Tm in mm.colors4 = {}, this._colors4) {
          const fm = this._colors4[Tm];
          mm.colors4[Tm] = [fm.r, fm.g, fm.b, fm.a]
        }
        for (Tm in mm.colors4Arrays = {}, this._colors4Arrays) mm.colors4Arrays[Tm] = this._colors4Arrays[Tm];
        for (Tm in mm.vectors2 = {}, this._vectors2) {
          const fm = this._vectors2[Tm];
          mm.vectors2[Tm] = [fm.x, fm.y]
        }
        for (Tm in mm.vectors3 = {}, this._vectors3) {
          const fm = this._vectors3[Tm];
          mm.vectors3[Tm] = [fm.x, fm.y, fm.z]
        }
        for (Tm in mm.vectors4 = {}, this._vectors4) {
          const fm = this._vectors4[Tm];
          mm.vectors4[Tm] = [fm.x, fm.y, fm.z, fm.w]
        }
        for (Tm in mm.quaternions = {}, this._quaternions) mm.quaternions[Tm] = this._quaternions[Tm].ahm();
        for (Tm in mm.matrices = {}, this._matrices) mm.matrices[Tm] = this._matrices[Tm].ahm();
        for (Tm in mm.matrixArray = {}, this._matrixArrays) mm.matrixArray[Tm] = this._matrixArrays[Tm];
        for (Tm in mm.matrices3x3 = {}, this._matrices3x3) mm.matrices3x3[Tm] = this._matrices3x3[Tm];
        for (Tm in mm.matrices2x2 = {}, this._matrices2x2) mm.matrices2x2[Tm] = this._matrices2x2[Tm];
        for (Tm in mm.vectors2Arrays = {}, this._vectors2Arrays) mm.vectors2Arrays[Tm] = this._vectors2Arrays[Tm];
        for (Tm in mm.vectors3Arrays = {}, this._vectors3Arrays) mm.vectors3Arrays[Tm] = this._vectors3Arrays[Tm];
        for (Tm in mm.vectors4Arrays = {}, this._vectors4Arrays) mm.vectors4Arrays[Tm] = this._vectors4Arrays[Tm];
        for (Tm in mm.quaternionsArrays = {}, this._quaternionsArrays) mm.quaternionsArrays[Tm] = this._quaternionsArrays[Tm];
        return mm
      }
    }

    function Vm(mm, Tm, fm) {
      const Am = hm.d.Parse((() => new jm(mm.name, Tm, mm.shaderPath, mm.options, mm.storeEffectOnSubMeshes)), mm, Tm, fm);
      let xm;
      for (xm in mm.stencil && Am.stencil.parse(mm.stencil, Tm, fm), mm.textures) Am.setTexture(xm, wm.f.Parse(mm.textures[xm], Tm, fm));
      for (xm in mm.textureArrays) {
        const hm = mm.textureArrays[xm],
          am = [];
        for (let mm = 0; mm < hm.length; mm++) am.push(wm.f.Parse(hm[mm], Tm, fm));
        Am.setTextureArray(xm, am)
      }
      for (xm in mm.ints) Am.setInt(xm, mm.ints[xm]);
      for (xm in mm.uints) Am.setUInt(xm, mm.uints[xm]);
      for (xm in mm.floats) Am.setFloat(xm, mm.floats[xm]);
      for (xm in mm.floatsArrays) Am.setFloats(xm, mm.floatsArrays[xm]);
      for (xm in mm.colors3) {
        const Tm = mm.colors3[xm];
        Am.setColor3(xm, {
          r: Tm[0],
          g: Tm[1],
          b: Tm[2]
        })
      }
      for (xm in mm.colors3Arrays) {
        const Tm = mm.colors3Arrays[xm].reduce(((mm, Tm, fm) => (fm % 3 === 0 ? mm.push([Tm]) : mm[mm.length - 1].push(Tm), mm)), []).map((mm => ({
          r: mm[0],
          g: mm[1],
          b: mm[2]
        })));
        Am.setColor3Array(xm, Tm)
      }
      for (xm in mm.colors4) {
        const Tm = mm.colors4[xm];
        Am.setColor4(xm, {
          r: Tm[0],
          g: Tm[1],
          b: Tm[2],
          a: Tm[3]
        })
      }
      for (xm in mm.colors4Arrays) {
        const Tm = mm.colors4Arrays[xm].reduce(((mm, Tm, fm) => (fm % 4 === 0 ? mm.push([Tm]) : mm[mm.length - 1].push(Tm), mm)), []).map((mm => ({
          r: mm[0],
          g: mm[1],
          b: mm[2],
          a: mm[3]
        })));
        Am.setColor4Array(xm, Tm)
      }
      for (xm in mm.vectors2) {
        const Tm = mm.vectors2[xm];
        Am.setVector2(xm, {
          x: Tm[0],
          y: Tm[1]
        })
      }
      for (xm in mm.vectors3) {
        const Tm = mm.vectors3[xm];
        Am.setVector3(xm, {
          x: Tm[0],
          y: Tm[1],
          z: Tm[2]
        })
      }
      for (xm in mm.vectors4) {
        const Tm = mm.vectors4[xm];
        Am.setVector4(xm, {
          x: Tm[0],
          y: Tm[1],
          z: Tm[2],
          w: Tm[3]
        })
      }
      for (xm in mm.quaternions) Am.setQuaternion(xm, am.h.FromArray(mm.quaternions[xm]));
      for (xm in mm.matrices) Am.setMatrix(xm, am.e.FromArray(mm.matrices[xm]));
      const Dm = Am;
      for (xm in mm.matrixArray) Dm._matrixArrays[xm] = new Float32Array(mm.matrixArray[xm]);
      for (xm in mm.matrices3x3) Am.setMatrix3x3(xm, mm.matrices3x3[xm]);
      for (xm in mm.matrices2x2) Am.setMatrix2x2(xm, mm.matrices2x2[xm]);
      for (xm in mm.vectors2Arrays) Am.setArray2(xm, mm.vectors2Arrays[xm]);
      for (xm in mm.vectors3Arrays) Am.setArray3(xm, mm.vectors3Arrays[xm]);
      for (xm in mm.vectors4Arrays) Am.setArray4(xm, mm.vectors4Arrays[xm]);
      for (xm in mm.quaternionsArrays) Am.setArray4(xm, mm.quaternionsArrays[xm]);
      return Am
    }
    async function Im(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((Am, am) => {
        const xm = new im.c;
        xm.addEventListener("readystatechange", (() => {
          if (4 == xm.readyState)
            if (200 == xm.status) {
              const Tm = Vm(JSON.parse(xm.responseText), fm || pm.c.LastCreatedScene, hm);
              mm && (Tm.name = mm), Am(Tm)
            } else am("Unable to load the ShaderMaterial")
        })), xm.open("GET", Tm), xm.send()
      }))
    }
    async function Km(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const hm = this?.SnippetUrl ?? jm.SnippetUrl;
      return await new Promise(((Am, am) => {
        const xm = new im.c;
        xm.addEventListener("readystatechange", (() => {
          if (4 == xm.readyState)
            if (200 == xm.status) {
              const hm = JSON.parse(JSON.parse(xm.responseText).jsonPayload),
                am = Vm(JSON.parse(hm.shaderMaterial), Tm || pm.c.LastCreatedScene, fm);
              am.snippetId = mm, Am(am)
            } else am("Unable to load the snippet " + mm)
        })), xm.open("GET", hm + "/" + mm.replace(/#/g, "/")), xm.send()
      }))
    }
    jm.SnippetUrl = "https://snippet.babylonjs.com";
    const Qm = Km;
    let nm = !1;

    function Jm() {
      nm || (nm = !0, jm.Parse = Vm, jm.ParseFromFileAsync = Im, jm.ParseFromSnippetAsync = Km, jm.CreateFromSnippetAsync = Qm, (0, Ym.d)("BABYLON.ShaderMaterial", jm))
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);