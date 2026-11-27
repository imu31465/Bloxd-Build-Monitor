export const id = 293;
export const ids = [293];
export const modules = {
  41585: (ee, ie, He) => {
    He.d(ie, {
      e: () => de,
      g: () => ge,
      h: () => Be,
      i: () => Ee,
      m: () => ze,
      o: () => Xe
    });
    var ye = He(41141),
      be = He(41199),
      Me = He(37917),
      Ke = He(41247),
      Ue = He(41593),
      Fe = He(41481),
      Je = He(41161),
      oe = He(41472),
      Re = He(37929),
      ke = He(41458),
      qe = He(41451),
      fe = He(41495),
      Te = He(37949);
    const pe = {
      effect: null,
      subMesh: null
    };
    class Xe extends oe.c {
      constructor(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(ee, ie, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new Me.b, this._cachedWorldViewProjectionMatrix = new Me.b, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = He, this._options = {
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
          ...ye
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(ee) {
        this._shaderPath = ee
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
      _checkUniform(ee) {
        -1 === this._options.uniforms.indexOf(ee) && this._options.uniforms.push(ee)
      }
      setTexture(ee, ie) {
        return -1 === this._options.samplers.indexOf(ee) && this._options.samplers.push(ee), this._textures[ee] = ie, this
      }
      setInternalTexture(ee, ie) {
        return -1 === this._options.samplers.indexOf(ee) && this._options.samplers.push(ee), this._internalTextures[ee] = ie, this
      }
      removeTexture(ee) {
        delete this._textures[ee]
      }
      setTextureArray(ee, ie) {
        return -1 === this._options.samplers.indexOf(ee) && this._options.samplers.push(ee), this._checkUniform(ee), this._textureArrays[ee] = ie, this
      }
      setExternalTexture(ee, ie) {
        return -1 === this._options.externalTextures.indexOf(ee) && this._options.externalTextures.push(ee), this._externalTextures[ee] = ie, this
      }
      setFloat(ee, ie) {
        return this._checkUniform(ee), this._floats[ee] = ie, this
      }
      setInt(ee, ie) {
        return this._checkUniform(ee), this._ints[ee] = ie, this
      }
      setUInt(ee, ie) {
        return this._checkUniform(ee), this._uints[ee] = ie, this
      }
      setFloats(ee, ie) {
        return this._checkUniform(ee), this._floatsArrays[ee] = ie, this
      }
      setColor3(ee, ie) {
        return this._checkUniform(ee), this._colors3[ee] = ie, this
      }
      setColor3Array(ee, ie) {
        return this._checkUniform(ee), this._colors3Arrays[ee] = ie.reduce(((ee, ie) => (ee.push(ie.r, ie.g, ie.b), ee)), []), this
      }
      setColor4(ee, ie) {
        return this._checkUniform(ee), this._colors4[ee] = ie, this
      }
      setColor4Array(ee, ie) {
        return this._checkUniform(ee), this._colors4Arrays[ee] = ie.reduce(((ee, ie) => (ee.push(ie.r, ie.g, ie.b, ie.a), ee)), []), this
      }
      setVector2(ee, ie) {
        return this._checkUniform(ee), this._vectors2[ee] = ie, this
      }
      setVector3(ee, ie) {
        return this._checkUniform(ee), this._vectors3[ee] = ie, this
      }
      setVector4(ee, ie) {
        return this._checkUniform(ee), this._vectors4[ee] = ie, this
      }
      setQuaternion(ee, ie) {
        return this._checkUniform(ee), this._quaternions[ee] = ie, this
      }
      setQuaternionArray(ee, ie) {
        return this._checkUniform(ee), this._quaternionsArrays[ee] = ie.reduce(((ee, ie) => (ie.toArray(ee, ee.length), ee)), []), this
      }
      setMatrix(ee, ie) {
        return this._checkUniform(ee), this._matrices[ee] = ie, this
      }
      setMatrices(ee, ie) {
        this._checkUniform(ee);
        const He = new Float32Array(16 * ie.length);
        for (let ye = 0; ye < ie.length; ye++) {
          ie[ye].copyToArray(He, 16 * ye)
        }
        return this._matrixArrays[ee] = He, this
      }
      setMatrix3x3(ee, ie) {
        return this._checkUniform(ee), this._matrices3x3[ee] = ie, this
      }
      setMatrix2x2(ee, ie) {
        return this._checkUniform(ee), this._matrices2x2[ee] = ie, this
      }
      setArray2(ee, ie) {
        return this._checkUniform(ee), this._vectors2Arrays[ee] = ie, this
      }
      setArray3(ee, ie) {
        return this._checkUniform(ee), this._vectors3Arrays[ee] = ie, this
      }
      setArray4(ee, ie) {
        return this._checkUniform(ee), this._vectors4Arrays[ee] = ie, this
      }
      setUniformBuffer(ee, ie) {
        return -1 === this._options.uniformBuffers.indexOf(ee) && this._options.uniformBuffers.push(ee), this._uniformBuffers[ee] = ie, this
      }
      setTextureSampler(ee, ie) {
        return -1 === this._options.samplerObjects.indexOf(ee) && this._options.samplerObjects.push(ee), this._textureSamplers[ee] = ie, this
      }
      setStorageBuffer(ee, ie) {
        return -1 === this._options.storageBuffers.indexOf(ee) && this._options.storageBuffers.push(ee), this._storageBuffers[ee] = ie, this
      }
      setDefine(ee, ie) {
        const He = ee.trimEnd() + " ",
          ye = this.options.defines.findIndex((ie => ie === ee || ie.startsWith(He)));
        return ye >= 0 && this.options.defines.splice(ye, 1), ("boolean" !== typeof ie || ie) && this.options.defines.push(He + ie), this
      }
      isReadyForSubMesh(ee, ie, He) {
        return this.isReady(ee, He, ie)
      }
      isReady(ee, ie, He) {
        const ye = He && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const ee = ye ? He._drawWrapper : this._drawWrapper;
          if (ee.effect && ee._wasPreviouslyReady && ee._wasPreviouslyUsingInstances === ie) return !0
        }
        const Me = this.Xx(),
          Ue = Me.Nf(),
          Je = [],
          oe = [];
        let Re = null,
          Te = this._shaderPath,
          Xe = this._options.uniforms,
          ze = this._options.uniformBuffers,
          Be = this._options.samplers;
        Ue.getCaps().multiview && Me.activeCamera && Me.activeCamera.outputRenderTarget && Me.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, Je.push("#define MULTIVIEW"), -1 !== Xe.indexOf("viewProjection") && -1 === Xe.indexOf("viewProjectionR") && Xe.push("viewProjectionR"));
        for (let be = 0; be < this._options.defines.length; be++) {
          const ee = 0 === this._options.defines[be].indexOf("#define") ? this._options.defines[be] : `#define ${this._options.defines[be]}`;
          Je.push(ee)
        }
        for (let be = 0; be < this._options.attributes.length; be++) oe.push(this._options.attributes[be]);
        if (ee && ee.isVerticesDataPresent(Ke.h.ColorKind) && (-1 === oe.indexOf(Ke.h.ColorKind) && oe.push(Ke.h.ColorKind), Je.push("#define VERTEXCOLOR")), ie && (Je.push("#define INSTANCES"), (0, qe.rb)(oe, this._materialHelperNeedsPreviousMatrices), ee?.hasThinInstances && (Je.push("#define THIN_INSTANCES"), ee && ee.isVerticesDataPresent(Ke.h.ColorInstanceKind) && (oe.push(Ke.h.ColorInstanceKind), Je.push("#define INSTANCESCOLOR")))), ee && ee.useBones && ee.computeBonesUsingShaders && ee.skeleton) {
          oe.push(Ke.h.MatricesIndicesKind), oe.push(Ke.h.MatricesWeightsKind), ee.numBoneInfluencers > 4 && (oe.push(Ke.h.MatricesIndicesExtraKind), oe.push(Ke.h.MatricesWeightsExtraKind));
          const ie = ee.skeleton;
          Je.push("#define NUM_BONE_INFLUENCERS " + ee.numBoneInfluencers), Re = new Fe.e, Re.addCPUSkinningFallback(0, ee), ie.isUsingTextureForMatrices ? (Je.push("#define BONETEXTURE"), -1 === Xe.indexOf("boneTextureInfo") && Xe.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (Je.push("#define BonesPerMesh " + (ie.bones.length + 1)), -1 === Xe.indexOf("mBones") && Xe.push("mBones"))
        } else Je.push("#define NUM_BONE_INFLUENCERS 0");
        let Ee = 0;
        const ge = ee ? ee.morphTargetManager : null;
        if (ge) {
          const ie = -1 !== Je.indexOf("#define UV1"),
            He = -1 !== Je.indexOf("#define UV2"),
            ye = -1 !== Je.indexOf("#define TANGENT"),
            be = -1 !== Je.indexOf("#define NORMAL"),
            Me = -1 !== Je.indexOf("#define VERTEXCOLOR");
          Ee = (0, qe.R)(ge, Je, oe, ee, !0, be, ye, ie, He, Me), ge.isUsingTextureForTargets && (-1 === Xe.indexOf("morphTargetTextureIndices") && Xe.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), Ee > 0 && (Xe = Xe.slice(), Xe.push("morphTargetInfluences"), Xe.push("morphTargetCount"), Xe.push("morphTargetTextureInfo"), Xe.push("morphTargetTextureIndices"))
        } else Je.push("#define NUM_MORPH_INFLUENCERS 0");
        if (ee) {
          const He = ee.bakedVertexAnimationManager;
          He && He.isEnabled && (Je.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === Xe.indexOf("bakedVertexAnimationSettings") && Xe.push("bakedVertexAnimationSettings"), -1 === Xe.indexOf("bakedVertexAnimationTextureSizeInverted") && Xe.push("bakedVertexAnimationTextureSizeInverted"), -1 === Xe.indexOf("bakedVertexAnimationTime") && Xe.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), ie && oe.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const be in this._textures)
          if (!this._textures[be].isReady()) return !1;
        for (const be in this._internalTextures)
          if (!this._internalTextures[be].isReady) return !1;
        ee && this.needAlphaTestingForMesh(ee) && Je.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, ke.e)(Xe), (0, ke.k)(this, Me, Je)), Me.fogEnabled && ee?.applyFog && Me.fogMode !== be.f.FOGMODE_NONE && (Je.push("#define FOG"), -1 === Xe.indexOf("view") && Xe.push("view"), -1 === Xe.indexOf("vFogInfos") && Xe.push("vFogInfos"), -1 === Xe.indexOf("vFogColor") && Xe.push("vFogColor")), this._useLogarithmicDepth && (Je.push("#define LOGARITHMICDEPTH"), -1 === Xe.indexOf("logarithmicDepthConstant") && Xe.push("logarithmicDepthConstant"));
        const Oe = He ? He.getRenderingMesh() : ee;
        if (Oe && this.useVertexPulling) {
          const ee = Oe.geometry;
          ee && (this._vertexPullingMetadata = (0, fe.h)(ee), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((ee, ie) => {
            Xe.push(`vp_${ie}_info`)
          }))), Je.push("#define USE_VERTEX_PULLING");
          const ie = Oe.geometry?.getIndexBuffer();
          ie && !Oe.isUnIndexed && (Je.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), ie.is32Bits && Je.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (Xe = Xe.slice(), ze = ze.slice(), Be = Be.slice(), Te = this.customShaderNameResolve(this.name, Xe, ze, Be, Je, oe));
        const de = ye ? He._getDrawWrapper(void 0, !0) : this._drawWrapper,
          We = de?.effect ?? null,
          te = de?.defines ?? null,
          Ze = Je.join("\n");
        let we = We;
        return te !== Ze && (we = Ue.createEffect(Te, {
          attributes: oe,
          uniformsNames: Xe,
          uniformBuffersNames: ze,
          samplers: Be,
          defines: Ze,
          fallbacks: Re,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: Ee
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, Ue), ye ? He.setEffect(we, Ze, this._materialContext) : de && de.setEffect(we, Ze), this._onEffectCreatedObservable && (pe.effect = we, pe.subMesh = He ?? ee?.pW[0] ?? null, this._onEffectCreatedObservable.notifyObservers(pe))), de._wasPreviouslyUsingInstances = !!ie, !!we?.isReady() && (We !== we && Me.resetCachedMaterial(), de._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(ee, ie) {
        const He = ie ?? this.getEffect();
        if (!He) return;
        const ye = this._options.uniforms; - 1 !== ye.indexOf("world") && He.setMatrix("world", ee);
        const be = this.Xx(); - 1 !== ye.indexOf("worldView") && (ee.multiplyToRef(be.getViewMatrix(), this._cachedWorldViewMatrix), He.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== ye.indexOf("worldViewProjection") && (ee.multiplyToRef(be.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), He.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== ye.indexOf("view") && He.setMatrix("view", be.getViewMatrix())
      }
      bindForSubMesh(ee, ie, He) {
        this.bind(ee, ie, He._drawWrapperOverride?.effect, He)
      }
      bind(ee, ie, He, ye) {
        const be = ye && this._storeEffectOnSubMeshes,
          Me = He ?? (be ? ye.effect : this.getEffect());
        if (!Me) return;
        const Ke = this.Xx();
        this._activeEffect = Me, this.bindOnlyWorldMatrix(ee, He);
        const Ue = this._options.uniformBuffers;
        let Fe = !1;
        if (Me && Ue && Ue.length > 0 && Ke.Nf().supportsUniformBuffers)
          for (let oe = 0; oe < Ue.length; ++oe) {
            switch (Ue[oe]) {
              case "Mesh":
                ie && (ie.getMeshUniformBuffer().bindToEffect(Me, "Mesh"), ie.transferToEffect(ee));
                break;
              case "Scene":
                (0, qe.x)(Me, Ke.getSceneUniformBuffer()), Ke.finalizeSceneUbo(), Fe = !0
            }
          }
        const Je = ie && be ? this._mustRebind(Ke, Me, ye, ie.visibility) : Ke.getCachedMaterial() !== this;
        if (Me && Je) {
          let ee;
          for (ee in Fe || -1 === this._options.uniforms.indexOf("view") || Me.setMatrix("view", Ke.getViewMatrix()), Fe || -1 === this._options.uniforms.indexOf("projection") || Me.setMatrix("projection", Ke.getProjectionMatrix()), Fe || -1 === this._options.uniforms.indexOf("viewProjection") || (Me.setMatrix("viewProjection", Ke.getTransformMatrix()), this._multiview && Me.setMatrix("viewProjectionR", Ke._transformMatrixR)), Ke.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && Me.setVector3("cameraPosition", Ke.activeCamera.globalPosition), (0, qe.g)(ie, Me), (0, ke.f)(Me, this, Ke), this._vertexPullingMetadata && (0, fe.e)(Me, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, qe.v)(be ? ye.materialDefines : Me.defines, Me, Ke), ie && (0, qe.k)(Ke, ie, Me), this._textures) Me.setTexture(ee, this._textures[ee]);
          for (ee in this._internalTextures) Me._bindTexture(ee, this._internalTextures[ee]);
          for (ee in this._textureArrays) Me.setTextureArray(ee, this._textureArrays[ee]);
          for (ee in this._ints) Me.setInt(ee, this._ints[ee]);
          for (ee in this._uints) Me.setUInt(ee, this._uints[ee]);
          for (ee in this._floats) Me.setFloat(ee, this._floats[ee]);
          for (ee in this._floatsArrays) Me.setArray(ee, this._floatsArrays[ee]);
          for (ee in this._colors3) Me.setColor3(ee, this._colors3[ee]);
          for (ee in this._colors3Arrays) Me.setArray3(ee, this._colors3Arrays[ee]);
          for (ee in this._colors4) {
            const ie = this._colors4[ee];
            Me.setFloat4(ee, ie.r, ie.g, ie.b, ie.a)
          }
          for (ee in this._colors4Arrays) Me.setArray4(ee, this._colors4Arrays[ee]);
          for (ee in this._vectors2) Me.setVector2(ee, this._vectors2[ee]);
          for (ee in this._vectors3) Me.setVector3(ee, this._vectors3[ee]);
          for (ee in this._vectors4) Me.setVector4(ee, this._vectors4[ee]);
          for (ee in this._quaternions) Me.setQuaternion(ee, this._quaternions[ee]);
          for (ee in this._matrices) Me.setMatrix(ee, this._matrices[ee]);
          for (ee in this._matrixArrays) Me.setMatrices(ee, this._matrixArrays[ee]);
          for (ee in this._matrices3x3) Me.setMatrix3x3(ee, this._matrices3x3[ee]);
          for (ee in this._matrices2x2) Me.setMatrix2x2(ee, this._matrices2x2[ee]);
          for (ee in this._vectors2Arrays) Me.setArray2(ee, this._vectors2Arrays[ee]);
          for (ee in this._vectors3Arrays) Me.setArray3(ee, this._vectors3Arrays[ee]);
          for (ee in this._vectors4Arrays) Me.setArray4(ee, this._vectors4Arrays[ee]);
          for (ee in this._quaternionsArrays) Me.setArray4(ee, this._quaternionsArrays[ee]);
          for (ee in this._uniformBuffers) {
            const ie = this._uniformBuffers[ee].getBuffer();
            ie && Me.bindUniformBuffer(ie, ee)
          }
          const He = Ke.Nf(),
            Ue = He.setExternalTexture;
          if (Ue)
            for (ee in this._externalTextures) Ue.call(He, ee, this._externalTextures[ee]);
          const Je = He.setTextureSampler;
          if (Je)
            for (ee in this._textureSamplers) Je.call(He, ee, this._textureSamplers[ee]);
          const oe = He.setStorageBuffer;
          if (oe)
            for (ee in this._storageBuffers) oe.call(He, ee, this._storageBuffers[ee])
        }
        if (Me && ie && (Je || !this.isFrozen)) {
          (0, qe.w)(ie, Me), ie.morphTargetManager && ie.morphTargetManager.isUsingTextureForTargets && ie.morphTargetManager._bind(Me);
          const ee = ie.bakedVertexAnimationManager;
          if (ee && ee.isEnabled) {
            const ee = be ? ye._drawWrapper : this._drawWrapper;
            ie.bakedVertexAnimationManager?.bind(Me, !!ee._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(ie, Me, ye)
      }
      getActiveTextures() {
        const ee = super.getActiveTextures();
        for (const ie in this._textures) ee.push(this._textures[ie]);
        for (const ie in this._textureArrays) {
          const He = this._textureArrays[ie];
          for (let ie = 0; ie < He.length; ie++) ee.push(He[ie])
        }
        return ee
      }
      hasTexture(ee) {
        if (super.hasTexture(ee)) return !0;
        for (const He in this._textures)
          if (this._textures[He] === ee) return !0;
        const ie = ee.getInternalTexture();
        for (const He in this._internalTextures)
          if (this._internalTextures[He] === ie) return !0;
        for (const He in this._textureArrays) {
          const ie = this._textureArrays[He];
          for (let He = 0; He < ie.length; He++)
            if (ie[He] === ee) return !0
        }
        return !1
      }
      clone(ee) {
        const ie = ye.c.Clone((() => new Xe(ee, this.Xx(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        ie.name = ee, ie.id = ee, "object" === typeof ie._shaderPath && (ie._shaderPath = {
          ...ie._shaderPath
        }), this._options = {
          ...this._options
        };
        const He = Object.keys(this._options);
        for (const ye of He) {
          const ee = this._options[ye];
          Array.isArray(ee) && (this._options[ye] = ee.slice(0))
        }
        this.stencil.copyTo(ie.stencil);
        for (const ye in this._textures) ie.setTexture(ye, this._textures[ye]);
        for (const ye in this._internalTextures) ie.setInternalTexture(ye, this._internalTextures[ye]);
        for (const ye in this._textureArrays) ie.setTextureArray(ye, this._textureArrays[ye]);
        for (const ye in this._externalTextures) ie.setExternalTexture(ye, this._externalTextures[ye]);
        for (const ye in this._ints) ie.setInt(ye, this._ints[ye]);
        for (const ye in this._uints) ie.setUInt(ye, this._uints[ye]);
        for (const ye in this._floats) ie.setFloat(ye, this._floats[ye]);
        for (const ye in this._floatsArrays) ie.setFloats(ye, this._floatsArrays[ye]);
        for (const ye in this._colors3) ie.setColor3(ye, this._colors3[ye]);
        for (const ye in this._colors3Arrays) ie._colors3Arrays[ye] = this._colors3Arrays[ye];
        for (const ye in this._colors4) ie.setColor4(ye, this._colors4[ye]);
        for (const ye in this._colors4Arrays) ie._colors4Arrays[ye] = this._colors4Arrays[ye];
        for (const ye in this._vectors2) ie.setVector2(ye, this._vectors2[ye]);
        for (const ye in this._vectors3) ie.setVector3(ye, this._vectors3[ye]);
        for (const ye in this._vectors4) ie.setVector4(ye, this._vectors4[ye]);
        for (const ye in this._quaternions) ie.setQuaternion(ye, this._quaternions[ye]);
        for (const ye in this._quaternionsArrays) ie._quaternionsArrays[ye] = this._quaternionsArrays[ye];
        for (const ye in this._matrices) ie.setMatrix(ye, this._matrices[ye]);
        for (const ye in this._matrixArrays) ie._matrixArrays[ye] = this._matrixArrays[ye].slice();
        for (const ye in this._matrices3x3) ie.setMatrix3x3(ye, this._matrices3x3[ye]);
        for (const ye in this._matrices2x2) ie.setMatrix2x2(ye, this._matrices2x2[ye]);
        for (const ye in this._vectors2Arrays) ie.setArray2(ye, this._vectors2Arrays[ye]);
        for (const ye in this._vectors3Arrays) ie.setArray3(ye, this._vectors3Arrays[ye]);
        for (const ye in this._vectors4Arrays) ie.setArray4(ye, this._vectors4Arrays[ye]);
        for (const ye in this._uniformBuffers) ie.setUniformBuffer(ye, this._uniformBuffers[ye]);
        for (const ye in this._textureSamplers) ie.setTextureSampler(ye, this._textureSamplers[ye]);
        for (const ye in this._storageBuffers) ie.setStorageBuffer(ye, this._storageBuffers[ye]);
        return ie
      }
      dispose(ee, ie, He) {
        if (ie) {
          let ee;
          for (ee in this._textures) this._textures[ee].dispose();
          for (ee in this._internalTextures) this._internalTextures[ee].dispose();
          for (ee in this._textureArrays) {
            const ie = this._textureArrays[ee];
            for (let ee = 0; ee < ie.length; ee++) ie[ee].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(ee, ie, He)
      }
      serialize() {
        const ee = ye.c.Serialize(this);
        let ie;
        for (ie in ee.customType = "BABYLON.ShaderMaterial", ee.uniqueId = this.uniqueId, ee.options = this._options, ee.shaderPath = this._shaderPath, ee.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, ee.stencil = this.stencil.serialize(), ee.textures = {}, this._textures) ee.textures[ie] = this._textures[ie].serialize();
        for (ie in ee.textureArrays = {}, this._textureArrays) {
          ee.textureArrays[ie] = [];
          const He = this._textureArrays[ie];
          for (let ye = 0; ye < He.length; ye++) ee.textureArrays[ie].push(He[ye].serialize())
        }
        for (ie in ee.ints = {}, this._ints) ee.ints[ie] = this._ints[ie];
        for (ie in ee.uints = {}, this._uints) ee.uints[ie] = this._uints[ie];
        for (ie in ee.floats = {}, this._floats) ee.floats[ie] = this._floats[ie];
        for (ie in ee.floatsArrays = {}, this._floatsArrays) ee.floatsArrays[ie] = this._floatsArrays[ie];
        for (ie in ee.colors3 = {}, this._colors3) {
          const He = this._colors3[ie];
          ee.colors3[ie] = [He.r, He.g, He.b]
        }
        for (ie in ee.colors3Arrays = {}, this._colors3Arrays) ee.colors3Arrays[ie] = this._colors3Arrays[ie];
        for (ie in ee.colors4 = {}, this._colors4) {
          const He = this._colors4[ie];
          ee.colors4[ie] = [He.r, He.g, He.b, He.a]
        }
        for (ie in ee.colors4Arrays = {}, this._colors4Arrays) ee.colors4Arrays[ie] = this._colors4Arrays[ie];
        for (ie in ee.vectors2 = {}, this._vectors2) {
          const He = this._vectors2[ie];
          ee.vectors2[ie] = [He.x, He.y]
        }
        for (ie in ee.vectors3 = {}, this._vectors3) {
          const He = this._vectors3[ie];
          ee.vectors3[ie] = [He.x, He.y, He.z]
        }
        for (ie in ee.vectors4 = {}, this._vectors4) {
          const He = this._vectors4[ie];
          ee.vectors4[ie] = [He.x, He.y, He.z, He.w]
        }
        for (ie in ee.quaternions = {}, this._quaternions) ee.quaternions[ie] = this._quaternions[ie].Qbe();
        for (ie in ee.matrices = {}, this._matrices) ee.matrices[ie] = this._matrices[ie].Qbe();
        for (ie in ee.matrixArray = {}, this._matrixArrays) ee.matrixArray[ie] = this._matrixArrays[ie];
        for (ie in ee.matrices3x3 = {}, this._matrices3x3) ee.matrices3x3[ie] = this._matrices3x3[ie];
        for (ie in ee.matrices2x2 = {}, this._matrices2x2) ee.matrices2x2[ie] = this._matrices2x2[ie];
        for (ie in ee.vectors2Arrays = {}, this._vectors2Arrays) ee.vectors2Arrays[ie] = this._vectors2Arrays[ie];
        for (ie in ee.vectors3Arrays = {}, this._vectors3Arrays) ee.vectors3Arrays[ie] = this._vectors3Arrays[ie];
        for (ie in ee.vectors4Arrays = {}, this._vectors4Arrays) ee.vectors4Arrays[ie] = this._vectors4Arrays[ie];
        for (ie in ee.quaternionsArrays = {}, this._quaternionsArrays) ee.quaternionsArrays[ie] = this._quaternionsArrays[ie];
        return ee
      }
    }

    function ze(ee, ie, He) {
      const be = ye.c.Parse((() => new Xe(ee.name, ie, ee.shaderPath, ee.options, ee.storeEffectOnSubMeshes)), ee, ie, He);
      let Ke;
      for (Ke in ee.stencil && be.stencil.parse(ee.stencil, ie, He), ee.textures) be.setTexture(Ke, Ue.e.Parse(ee.textures[Ke], ie, He));
      for (Ke in ee.textureArrays) {
        const ye = ee.textureArrays[Ke],
          Me = [];
        for (let ee = 0; ee < ye.length; ee++) Me.push(Ue.e.Parse(ye[ee], ie, He));
        be.setTextureArray(Ke, Me)
      }
      for (Ke in ee.ints) be.setInt(Ke, ee.ints[Ke]);
      for (Ke in ee.uints) be.setUInt(Ke, ee.uints[Ke]);
      for (Ke in ee.floats) be.setFloat(Ke, ee.floats[Ke]);
      for (Ke in ee.floatsArrays) be.setFloats(Ke, ee.floatsArrays[Ke]);
      for (Ke in ee.colors3) {
        const ie = ee.colors3[Ke];
        be.setColor3(Ke, {
          r: ie[0],
          g: ie[1],
          b: ie[2]
        })
      }
      for (Ke in ee.colors3Arrays) {
        const ie = ee.colors3Arrays[Ke].reduce(((ee, ie, He) => (He % 3 === 0 ? ee.push([ie]) : ee[ee.length - 1].push(ie), ee)), []).map((ee => ({
          r: ee[0],
          g: ee[1],
          b: ee[2]
        })));
        be.setColor3Array(Ke, ie)
      }
      for (Ke in ee.colors4) {
        const ie = ee.colors4[Ke];
        be.setColor4(Ke, {
          r: ie[0],
          g: ie[1],
          b: ie[2],
          a: ie[3]
        })
      }
      for (Ke in ee.colors4Arrays) {
        const ie = ee.colors4Arrays[Ke].reduce(((ee, ie, He) => (He % 4 === 0 ? ee.push([ie]) : ee[ee.length - 1].push(ie), ee)), []).map((ee => ({
          r: ee[0],
          g: ee[1],
          b: ee[2],
          a: ee[3]
        })));
        be.setColor4Array(Ke, ie)
      }
      for (Ke in ee.vectors2) {
        const ie = ee.vectors2[Ke];
        be.setVector2(Ke, {
          x: ie[0],
          y: ie[1]
        })
      }
      for (Ke in ee.vectors3) {
        const ie = ee.vectors3[Ke];
        be.setVector3(Ke, {
          x: ie[0],
          y: ie[1],
          z: ie[2]
        })
      }
      for (Ke in ee.vectors4) {
        const ie = ee.vectors4[Ke];
        be.setVector4(Ke, {
          x: ie[0],
          y: ie[1],
          z: ie[2],
          w: ie[3]
        })
      }
      for (Ke in ee.quaternions) be.setQuaternion(Ke, Me.f.FromArray(ee.quaternions[Ke]));
      for (Ke in ee.matrices) be.setMatrix(Ke, Me.b.FromArray(ee.matrices[Ke]));
      const Fe = be;
      for (Ke in ee.matrixArray) Fe._matrixArrays[Ke] = new Float32Array(ee.matrixArray[Ke]);
      for (Ke in ee.matrices3x3) be.setMatrix3x3(Ke, ee.matrices3x3[Ke]);
      for (Ke in ee.matrices2x2) be.setMatrix2x2(Ke, ee.matrices2x2[Ke]);
      for (Ke in ee.vectors2Arrays) be.setArray2(Ke, ee.vectors2Arrays[Ke]);
      for (Ke in ee.vectors3Arrays) be.setArray3(Ke, ee.vectors3Arrays[Ke]);
      for (Ke in ee.vectors4Arrays) be.setArray4(Ke, ee.vectors4Arrays[Ke]);
      for (Ke in ee.quaternionsArrays) be.setArray4(Ke, ee.quaternionsArrays[Ke]);
      return be
    }
    async function Be(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((be, Me) => {
        const Ke = new Je.c;
        Ke.addEventListener("readystatechange", (() => {
          if (4 == Ke.readyState)
            if (200 == Ke.status) {
              const ie = ze(JSON.parse(Ke.responseText), He || Re.b.LastCreatedScene, ye);
              ee && (ie.name = ee), be(ie)
            } else Me("Unable to load the ShaderMaterial")
        })), Ke.open("GET", ie), Ke.send()
      }))
    }
    async function Ee(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const ye = this?.SnippetUrl ?? Xe.SnippetUrl;
      return await new Promise(((be, Me) => {
        const Ke = new Je.c;
        Ke.addEventListener("readystatechange", (() => {
          if (4 == Ke.readyState)
            if (200 == Ke.status) {
              const ye = JSON.parse(JSON.parse(Ke.responseText).jsonPayload),
                Me = ze(JSON.parse(ye.shaderMaterial), ie || Re.b.LastCreatedScene, He);
              Me.snippetId = ee, be(Me)
            } else Me("Unable to load the snippet " + ee)
        })), Ke.open("GET", ye + "/" + ee.replace(/#/g, "/")), Ke.send()
      }))
    }
    Xe.SnippetUrl = "https://snippet.babylonjs.com";
    const ge = Ee;
    let Oe = !1;

    function de() {
      Oe || (Oe = !0, Xe.Parse = ze, Xe.ParseFromFileAsync = Be, Xe.ParseFromSnippetAsync = Ee, Xe.CreateFromSnippetAsync = ge, (0, Te.e)("BABYLON.ShaderMaterial", Xe))
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);