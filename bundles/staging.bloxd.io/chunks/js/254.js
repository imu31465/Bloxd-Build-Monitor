export const id = 254;
export const ids = [254];
export const modules = {
  39590: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => OD,
      g: () => mD,
      i: () => gD,
      l: () => XD,
      o: () => ND,
      p: () => vD
    });
    var ID = cD(39174),
      pD = cD(39239),
      iD = cD(36446),
      fD = cD(39286),
      bD = cD(39595),
      QD = cD(39474),
      wD = cD(39198),
      SD = cD(39470),
      BD = cD(36464),
      yD = cD(39460),
      MD = cD(39458),
      tD = cD(39496),
      ZD = cD(36488);
    const oD = {
      effect: null,
      subMesh: null
    };
    class vD extends SD.b {
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        super(DD, CD, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]), this._textures = {}, this._internalTextures = {}, this._textureArrays = {}, this._externalTextures = {}, this._floats = {}, this._ints = {}, this._uints = {}, this._floatsArrays = {}, this._colors3 = {}, this._colors3Arrays = {}, this._colors4 = {}, this._colors4Arrays = {}, this._vectors2 = {}, this._vectors3 = {}, this._vectors4 = {}, this._quaternions = {}, this._quaternionsArrays = {}, this._matrices = {}, this._matrixArrays = {}, this._matrices3x3 = {}, this._matrices2x2 = {}, this._vectors2Arrays = {}, this._vectors3Arrays = {}, this._vectors4Arrays = {}, this._uniformBuffers = {}, this._textureSamplers = {}, this._storageBuffers = {}, this._cachedWorldViewMatrix = new iD.d, this._cachedWorldViewProjectionMatrix = new iD.d, this._multiview = !1, this._vertexPullingMetadata = null, this._materialHelperNeedsPreviousMatrices = !1, this._shaderPath = cD, this._options = {
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
          ...ID
        }
      }
      get shaderPath() {
        return this._shaderPath
      }
      set shaderPath(DD) {
        this._shaderPath = DD
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
      _checkUniform(DD) {
        -1 === this._options.uniforms.indexOf(DD) && this._options.uniforms.push(DD)
      }
      setTexture(DD, CD) {
        return -1 === this._options.samplers.indexOf(DD) && this._options.samplers.push(DD), this._textures[DD] = CD, this
      }
      setInternalTexture(DD, CD) {
        return -1 === this._options.samplers.indexOf(DD) && this._options.samplers.push(DD), this._internalTextures[DD] = CD, this
      }
      removeTexture(DD) {
        delete this._textures[DD]
      }
      setTextureArray(DD, CD) {
        return -1 === this._options.samplers.indexOf(DD) && this._options.samplers.push(DD), this._checkUniform(DD), this._textureArrays[DD] = CD, this
      }
      setExternalTexture(DD, CD) {
        return -1 === this._options.externalTextures.indexOf(DD) && this._options.externalTextures.push(DD), this._externalTextures[DD] = CD, this
      }
      setFloat(DD, CD) {
        return this._checkUniform(DD), this._floats[DD] = CD, this
      }
      setInt(DD, CD) {
        return this._checkUniform(DD), this._ints[DD] = CD, this
      }
      setUInt(DD, CD) {
        return this._checkUniform(DD), this._uints[DD] = CD, this
      }
      setFloats(DD, CD) {
        return this._checkUniform(DD), this._floatsArrays[DD] = CD, this
      }
      setColor3(DD, CD) {
        return this._checkUniform(DD), this._colors3[DD] = CD, this
      }
      setColor3Array(DD, CD) {
        return this._checkUniform(DD), this._colors3Arrays[DD] = CD.reduce(((DD, CD) => (DD.push(CD.r, CD.g, CD.b), DD)), []), this
      }
      setColor4(DD, CD) {
        return this._checkUniform(DD), this._colors4[DD] = CD, this
      }
      setColor4Array(DD, CD) {
        return this._checkUniform(DD), this._colors4Arrays[DD] = CD.reduce(((DD, CD) => (DD.push(CD.r, CD.g, CD.b, CD.a), DD)), []), this
      }
      setVector2(DD, CD) {
        return this._checkUniform(DD), this._vectors2[DD] = CD, this
      }
      setVector3(DD, CD) {
        return this._checkUniform(DD), this._vectors3[DD] = CD, this
      }
      setVector4(DD, CD) {
        return this._checkUniform(DD), this._vectors4[DD] = CD, this
      }
      setQuaternion(DD, CD) {
        return this._checkUniform(DD), this._quaternions[DD] = CD, this
      }
      setQuaternionArray(DD, CD) {
        return this._checkUniform(DD), this._quaternionsArrays[DD] = CD.reduce(((DD, CD) => (CD.toArray(DD, DD.length), DD)), []), this
      }
      setMatrix(DD, CD) {
        return this._checkUniform(DD), this._matrices[DD] = CD, this
      }
      setMatrices(DD, CD) {
        this._checkUniform(DD);
        const cD = new Float32Array(16 * CD.length);
        for (let ID = 0; ID < CD.length; ID++) {
          CD[ID].copyToArray(cD, 16 * ID)
        }
        return this._matrixArrays[DD] = cD, this
      }
      setMatrix3x3(DD, CD) {
        return this._checkUniform(DD), this._matrices3x3[DD] = CD, this
      }
      setMatrix2x2(DD, CD) {
        return this._checkUniform(DD), this._matrices2x2[DD] = CD, this
      }
      setArray2(DD, CD) {
        return this._checkUniform(DD), this._vectors2Arrays[DD] = CD, this
      }
      setArray3(DD, CD) {
        return this._checkUniform(DD), this._vectors3Arrays[DD] = CD, this
      }
      setArray4(DD, CD) {
        return this._checkUniform(DD), this._vectors4Arrays[DD] = CD, this
      }
      setUniformBuffer(DD, CD) {
        return -1 === this._options.uniformBuffers.indexOf(DD) && this._options.uniformBuffers.push(DD), this._uniformBuffers[DD] = CD, this
      }
      setTextureSampler(DD, CD) {
        return -1 === this._options.samplerObjects.indexOf(DD) && this._options.samplerObjects.push(DD), this._textureSamplers[DD] = CD, this
      }
      setStorageBuffer(DD, CD) {
        return -1 === this._options.storageBuffers.indexOf(DD) && this._options.storageBuffers.push(DD), this._storageBuffers[DD] = CD, this
      }
      setDefine(DD, CD) {
        const cD = DD.trimEnd() + " ",
          ID = this.options.defines.findIndex((CD => CD === DD || CD.startsWith(cD)));
        return ID >= 0 && this.options.defines.splice(ID, 1), ("boolean" !== typeof CD || CD) && this.options.defines.push(cD + CD), this
      }
      isReadyForSubMesh(DD, CD, cD) {
        return this.isReady(DD, cD, CD)
      }
      isReady(DD, CD, cD) {
        const ID = cD && this._storeEffectOnSubMeshes;
        if (this.isFrozen) {
          const DD = ID ? cD._drawWrapper : this._drawWrapper;
          if (DD.effect && DD._wasPreviouslyReady && DD._wasPreviouslyUsingInstances === CD) return !0
        }
        const iD = this.hq(),
          bD = iD.DZ(),
          wD = [],
          SD = [];
        let BD = null,
          ZD = this._shaderPath,
          vD = this._options.uniforms,
          ND = this._options.uniformBuffers,
          gD = this._options.samplers;
        bD.getCaps().multiview && iD.activeCamera && iD.activeCamera.outputRenderTarget && iD.activeCamera.outputRenderTarget.getViewCount() > 1 && (this._multiview = !0, wD.push("#define MULTIVIEW"), -1 !== vD.indexOf("viewProjection") && -1 === vD.indexOf("viewProjectionR") && vD.push("viewProjectionR"));
        for (let pD = 0; pD < this._options.defines.length; pD++) {
          const DD = 0 === this._options.defines[pD].indexOf("#define") ? this._options.defines[pD] : `#define ${this._options.defines[pD]}`;
          wD.push(DD)
        }
        for (let pD = 0; pD < this._options.attributes.length; pD++) SD.push(this._options.attributes[pD]);
        if (DD && DD.isVerticesDataPresent(fD.k.ColorKind) && (-1 === SD.indexOf(fD.k.ColorKind) && SD.push(fD.k.ColorKind), wD.push("#define VERTEXCOLOR")), CD && (wD.push("#define INSTANCES"), (0, MD.sb)(SD, this._materialHelperNeedsPreviousMatrices), DD?.hasThinInstances && (wD.push("#define THIN_INSTANCES"), DD && DD.isVerticesDataPresent(fD.k.ColorInstanceKind) && (SD.push(fD.k.ColorInstanceKind), wD.push("#define INSTANCESCOLOR")))), DD && DD.useBones && DD.computeBonesUsingShaders && DD.skeleton) {
          SD.push(fD.k.MatricesIndicesKind), SD.push(fD.k.MatricesWeightsKind), DD.numBoneInfluencers > 4 && (SD.push(fD.k.MatricesIndicesExtraKind), SD.push(fD.k.MatricesWeightsExtraKind));
          const CD = DD.skeleton;
          wD.push("#define NUM_BONE_INFLUENCERS " + DD.numBoneInfluencers), BD = new QD.b, BD.addCPUSkinningFallback(0, DD), CD.isUsingTextureForMatrices ? (wD.push("#define BONETEXTURE"), -1 === vD.indexOf("boneTextureInfo") && vD.push("boneTextureInfo"), -1 === this._options.samplers.indexOf("boneSampler") && this._options.samplers.push("boneSampler")) : (wD.push("#define BonesPerMesh " + (CD.bones.length + 1)), -1 === vD.indexOf("mBones") && vD.push("mBones"))
        } else wD.push("#define NUM_BONE_INFLUENCERS 0");
        let XD = 0;
        const mD = DD ? DD.morphTargetManager : null;
        if (mD) {
          const CD = -1 !== wD.indexOf("#define UV1"),
            cD = -1 !== wD.indexOf("#define UV2"),
            ID = -1 !== wD.indexOf("#define TANGENT"),
            pD = -1 !== wD.indexOf("#define NORMAL"),
            iD = -1 !== wD.indexOf("#define VERTEXCOLOR");
          XD = (0, MD.R)(mD, wD, SD, DD, !0, pD, ID, CD, cD, iD), mD.isUsingTextureForTargets && (-1 === vD.indexOf("morphTargetTextureIndices") && vD.push("morphTargetTextureIndices"), -1 === this._options.samplers.indexOf("morphTargets") && this._options.samplers.push("morphTargets")), XD > 0 && (vD = vD.slice(), vD.push("morphTargetInfluences"), vD.push("morphTargetCount"), vD.push("morphTargetTextureInfo"), vD.push("morphTargetTextureIndices"))
        } else wD.push("#define NUM_MORPH_INFLUENCERS 0");
        if (DD) {
          const cD = DD.bakedVertexAnimationManager;
          cD && cD.isEnabled && (wD.push("#define BAKED_VERTEX_ANIMATION_TEXTURE"), -1 === vD.indexOf("bakedVertexAnimationSettings") && vD.push("bakedVertexAnimationSettings"), -1 === vD.indexOf("bakedVertexAnimationTextureSizeInverted") && vD.push("bakedVertexAnimationTextureSizeInverted"), -1 === vD.indexOf("bakedVertexAnimationTime") && vD.push("bakedVertexAnimationTime"), -1 === this._options.samplers.indexOf("bakedVertexAnimationTexture") && this._options.samplers.push("bakedVertexAnimationTexture"), CD && SD.push("bakedVertexAnimationSettingsInstanced"))
        }
        for (const pD in this._textures)
          if (!this._textures[pD].isReady()) return !1;
        for (const pD in this._internalTextures)
          if (!this._internalTextures[pD].isReady) return !1;
        DD && this.needAlphaTestingForMesh(DD) && wD.push("#define ALPHATEST"), !1 !== this._options.useClipPlane && ((0, yD.e)(vD), (0, yD.o)(this, iD, wD)), iD.fogEnabled && DD?.applyFog && iD.fogMode !== pD.e.FOGMODE_NONE && (wD.push("#define FOG"), -1 === vD.indexOf("view") && vD.push("view"), -1 === vD.indexOf("vFogInfos") && vD.push("vFogInfos"), -1 === vD.indexOf("vFogColor") && vD.push("vFogColor")), this._useLogarithmicDepth && (wD.push("#define LOGARITHMICDEPTH"), -1 === vD.indexOf("logarithmicDepthConstant") && vD.push("logarithmicDepthConstant"));
        const nD = cD ? cD.getRenderingMesh() : DD;
        if (nD && this.useVertexPulling) {
          const DD = nD.geometry;
          DD && (this._vertexPullingMetadata = (0, tD.f)(DD), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((DD, CD) => {
            vD.push(`vp_${CD}_info`)
          }))), wD.push("#define USE_VERTEX_PULLING");
          const CD = nD.geometry?.getIndexBuffer();
          CD && !nD.isUnIndexed && (wD.push("#define VERTEX_PULLING_USE_INDEX_BUFFER"), CD.is32Bits && wD.push("#define VERTEX_PULLING_INDEX_BUFFER_32BITS"))
        }
        this.customShaderNameResolve && (vD = vD.slice(), ND = ND.slice(), gD = gD.slice(), ZD = this.customShaderNameResolve(this.name, vD, ND, gD, wD, SD));
        const OD = ID ? cD._getDrawWrapper(void 0, !0) : this._drawWrapper,
          PD = OD?.effect ?? null,
          HD = OD?.defines ?? null,
          UD = wD.join("\n");
        let xD = PD;
        return HD !== UD && (xD = bD.createEffect(ZD, {
          attributes: SD,
          uniformsNames: vD,
          uniformBuffersNames: ND,
          samplers: gD,
          defines: UD,
          fallbacks: BD,
          onCompiled: this.onCompiled,
          onError: this.onError,
          indexParameters: {
            maxSimultaneousMorphTargets: XD
          },
          shaderLanguage: this._options.shaderLanguage,
          extraInitializationsAsync: this._options.extraInitializationsAsync
        }, bD), ID ? cD.setEffect(xD, UD, this._materialContext) : OD && OD.setEffect(xD, UD), this._onEffectCreatedObservable && (oD.effect = xD, oD.subMesh = cD ?? DD?.IH[0] ?? null, this._onEffectCreatedObservable.notifyObservers(oD))), OD._wasPreviouslyUsingInstances = !!CD, !!xD?.isReady() && (PD !== xD && iD.resetCachedMaterial(), OD._wasPreviouslyReady = !0, !0)
      }
      bindOnlyWorldMatrix(DD, CD) {
        const cD = CD ?? this.getEffect();
        if (!cD) return;
        const ID = this._options.uniforms; - 1 !== ID.indexOf("world") && cD.setMatrix("world", DD);
        const pD = this.hq(); - 1 !== ID.indexOf("worldView") && (DD.multiplyToRef(pD.getViewMatrix(), this._cachedWorldViewMatrix), cD.setMatrix("worldView", this._cachedWorldViewMatrix)), -1 !== ID.indexOf("worldViewProjection") && (DD.multiplyToRef(pD.getTransformMatrix(), this._cachedWorldViewProjectionMatrix), cD.setMatrix("worldViewProjection", this._cachedWorldViewProjectionMatrix)), -1 !== ID.indexOf("view") && cD.setMatrix("view", pD.getViewMatrix())
      }
      bindForSubMesh(DD, CD, cD) {
        this.bind(DD, CD, cD._drawWrapperOverride?.effect, cD)
      }
      bind(DD, CD, cD, ID) {
        const pD = ID && this._storeEffectOnSubMeshes,
          iD = cD ?? (pD ? ID.effect : this.getEffect());
        if (!iD) return;
        const fD = this.hq();
        this._activeEffect = iD, this.bindOnlyWorldMatrix(DD, cD);
        const bD = this._options.uniformBuffers;
        let QD = !1;
        if (iD && bD && bD.length > 0 && fD.DZ().supportsUniformBuffers)
          for (let SD = 0; SD < bD.length; ++SD) {
            switch (bD[SD]) {
              case "Mesh":
                CD && (CD.getMeshUniformBuffer().bindToEffect(iD, "Mesh"), CD.transferToEffect(DD));
                break;
              case "Scene":
                (0, MD.z)(iD, fD.getSceneUniformBuffer()), fD.finalizeSceneUbo(), QD = !0
            }
          }
        const wD = CD && pD ? this._mustRebind(fD, iD, ID, CD.visibility) : fD.getCachedMaterial() !== this;
        if (iD && wD) {
          let DD;
          for (DD in QD || -1 === this._options.uniforms.indexOf("view") || iD.setMatrix("view", fD.getViewMatrix()), QD || -1 === this._options.uniforms.indexOf("projection") || iD.setMatrix("projection", fD.getProjectionMatrix()), QD || -1 === this._options.uniforms.indexOf("viewProjection") || (iD.setMatrix("viewProjection", fD.getTransformMatrix()), this._multiview && iD.setMatrix("viewProjectionR", fD._transformMatrixR)), fD.activeCamera && -1 !== this._options.uniforms.indexOf("cameraPosition") && iD.setVector3("cameraPosition", fD.activeCamera.globalPosition), (0, MD.d)(CD, iD), (0, yD.i)(iD, this, fD), this._vertexPullingMetadata && (0, tD.c)(iD, this._vertexPullingMetadata), this._useLogarithmicDepth && (0, MD.u)(pD ? ID.materialDefines : iD.defines, iD, fD), CD && (0, MD.h)(fD, CD, iD), this._textures) iD.setTexture(DD, this._textures[DD]);
          for (DD in this._internalTextures) iD._bindTexture(DD, this._internalTextures[DD]);
          for (DD in this._textureArrays) iD.setTextureArray(DD, this._textureArrays[DD]);
          for (DD in this._ints) iD.setInt(DD, this._ints[DD]);
          for (DD in this._uints) iD.setUInt(DD, this._uints[DD]);
          for (DD in this._floats) iD.setFloat(DD, this._floats[DD]);
          for (DD in this._floatsArrays) iD.setArray(DD, this._floatsArrays[DD]);
          for (DD in this._colors3) iD.setColor3(DD, this._colors3[DD]);
          for (DD in this._colors3Arrays) iD.setArray3(DD, this._colors3Arrays[DD]);
          for (DD in this._colors4) {
            const CD = this._colors4[DD];
            iD.setFloat4(DD, CD.r, CD.g, CD.b, CD.a)
          }
          for (DD in this._colors4Arrays) iD.setArray4(DD, this._colors4Arrays[DD]);
          for (DD in this._vectors2) iD.setVector2(DD, this._vectors2[DD]);
          for (DD in this._vectors3) iD.setVector3(DD, this._vectors3[DD]);
          for (DD in this._vectors4) iD.setVector4(DD, this._vectors4[DD]);
          for (DD in this._quaternions) iD.setQuaternion(DD, this._quaternions[DD]);
          for (DD in this._matrices) iD.setMatrix(DD, this._matrices[DD]);
          for (DD in this._matrixArrays) iD.setMatrices(DD, this._matrixArrays[DD]);
          for (DD in this._matrices3x3) iD.setMatrix3x3(DD, this._matrices3x3[DD]);
          for (DD in this._matrices2x2) iD.setMatrix2x2(DD, this._matrices2x2[DD]);
          for (DD in this._vectors2Arrays) iD.setArray2(DD, this._vectors2Arrays[DD]);
          for (DD in this._vectors3Arrays) iD.setArray3(DD, this._vectors3Arrays[DD]);
          for (DD in this._vectors4Arrays) iD.setArray4(DD, this._vectors4Arrays[DD]);
          for (DD in this._quaternionsArrays) iD.setArray4(DD, this._quaternionsArrays[DD]);
          for (DD in this._uniformBuffers) {
            const CD = this._uniformBuffers[DD].getBuffer();
            CD && iD.bindUniformBuffer(CD, DD)
          }
          const cD = fD.DZ(),
            bD = cD.setExternalTexture;
          if (bD)
            for (DD in this._externalTextures) bD.call(cD, DD, this._externalTextures[DD]);
          const wD = cD.setTextureSampler;
          if (wD)
            for (DD in this._textureSamplers) wD.call(cD, DD, this._textureSamplers[DD]);
          const SD = cD.setStorageBuffer;
          if (SD)
            for (DD in this._storageBuffers) SD.call(cD, DD, this._storageBuffers[DD])
        }
        if (iD && CD && (wD || !this.isFrozen)) {
          (0, MD.y)(CD, iD), CD.morphTargetManager && CD.morphTargetManager.isUsingTextureForTargets && CD.morphTargetManager._bind(iD);
          const DD = CD.bakedVertexAnimationManager;
          if (DD && DD.isEnabled) {
            const DD = pD ? ID._drawWrapper : this._drawWrapper;
            CD.bakedVertexAnimationManager?.bind(iD, !!DD._wasPreviouslyUsingInstances)
          }
        }
        this._afterBind(CD, iD, ID)
      }
      getActiveTextures() {
        const DD = super.getActiveTextures();
        for (const CD in this._textures) DD.push(this._textures[CD]);
        for (const CD in this._textureArrays) {
          const cD = this._textureArrays[CD];
          for (let CD = 0; CD < cD.length; CD++) DD.push(cD[CD])
        }
        return DD
      }
      hasTexture(DD) {
        if (super.hasTexture(DD)) return !0;
        for (const cD in this._textures)
          if (this._textures[cD] === DD) return !0;
        const CD = DD.getInternalTexture();
        for (const cD in this._internalTextures)
          if (this._internalTextures[cD] === CD) return !0;
        for (const cD in this._textureArrays) {
          const CD = this._textureArrays[cD];
          for (let cD = 0; cD < CD.length; cD++)
            if (CD[cD] === DD) return !0
        }
        return !1
      }
      clone(DD) {
        const CD = ID.d.Clone((() => new vD(DD, this.hq(), this._shaderPath, this._options, this._storeEffectOnSubMeshes)), this);
        CD.name = DD, CD.id = DD, "object" === typeof CD._shaderPath && (CD._shaderPath = {
          ...CD._shaderPath
        }), this._options = {
          ...this._options
        };
        const cD = Object.keys(this._options);
        for (const ID of cD) {
          const DD = this._options[ID];
          Array.isArray(DD) && (this._options[ID] = DD.slice(0))
        }
        this.stencil.copyTo(CD.stencil);
        for (const ID in this._textures) CD.setTexture(ID, this._textures[ID]);
        for (const ID in this._internalTextures) CD.setInternalTexture(ID, this._internalTextures[ID]);
        for (const ID in this._textureArrays) CD.setTextureArray(ID, this._textureArrays[ID]);
        for (const ID in this._externalTextures) CD.setExternalTexture(ID, this._externalTextures[ID]);
        for (const ID in this._ints) CD.setInt(ID, this._ints[ID]);
        for (const ID in this._uints) CD.setUInt(ID, this._uints[ID]);
        for (const ID in this._floats) CD.setFloat(ID, this._floats[ID]);
        for (const ID in this._floatsArrays) CD.setFloats(ID, this._floatsArrays[ID]);
        for (const ID in this._colors3) CD.setColor3(ID, this._colors3[ID]);
        for (const ID in this._colors3Arrays) CD._colors3Arrays[ID] = this._colors3Arrays[ID];
        for (const ID in this._colors4) CD.setColor4(ID, this._colors4[ID]);
        for (const ID in this._colors4Arrays) CD._colors4Arrays[ID] = this._colors4Arrays[ID];
        for (const ID in this._vectors2) CD.setVector2(ID, this._vectors2[ID]);
        for (const ID in this._vectors3) CD.setVector3(ID, this._vectors3[ID]);
        for (const ID in this._vectors4) CD.setVector4(ID, this._vectors4[ID]);
        for (const ID in this._quaternions) CD.setQuaternion(ID, this._quaternions[ID]);
        for (const ID in this._quaternionsArrays) CD._quaternionsArrays[ID] = this._quaternionsArrays[ID];
        for (const ID in this._matrices) CD.setMatrix(ID, this._matrices[ID]);
        for (const ID in this._matrixArrays) CD._matrixArrays[ID] = this._matrixArrays[ID].slice();
        for (const ID in this._matrices3x3) CD.setMatrix3x3(ID, this._matrices3x3[ID]);
        for (const ID in this._matrices2x2) CD.setMatrix2x2(ID, this._matrices2x2[ID]);
        for (const ID in this._vectors2Arrays) CD.setArray2(ID, this._vectors2Arrays[ID]);
        for (const ID in this._vectors3Arrays) CD.setArray3(ID, this._vectors3Arrays[ID]);
        for (const ID in this._vectors4Arrays) CD.setArray4(ID, this._vectors4Arrays[ID]);
        for (const ID in this._uniformBuffers) CD.setUniformBuffer(ID, this._uniformBuffers[ID]);
        for (const ID in this._textureSamplers) CD.setTextureSampler(ID, this._textureSamplers[ID]);
        for (const ID in this._storageBuffers) CD.setStorageBuffer(ID, this._storageBuffers[ID]);
        return CD
      }
      dispose(DD, CD, cD) {
        if (CD) {
          let DD;
          for (DD in this._textures) this._textures[DD].dispose();
          for (DD in this._internalTextures) this._internalTextures[DD].dispose();
          for (DD in this._textureArrays) {
            const CD = this._textureArrays[DD];
            for (let DD = 0; DD < CD.length; DD++) CD[DD].dispose()
          }
        }
        this._textures = {}, this._internalTextures = {}, super.dispose(DD, CD, cD)
      }
      serialize() {
        const DD = ID.d.Serialize(this);
        let CD;
        for (CD in DD.customType = "BABYLON.ShaderMaterial", DD.uniqueId = this.uniqueId, DD.options = this._options, DD.shaderPath = this._shaderPath, DD.storeEffectOnSubMeshes = this._storeEffectOnSubMeshes, DD.stencil = this.stencil.serialize(), DD.textures = {}, this._textures) DD.textures[CD] = this._textures[CD].serialize();
        for (CD in DD.textureArrays = {}, this._textureArrays) {
          DD.textureArrays[CD] = [];
          const cD = this._textureArrays[CD];
          for (let ID = 0; ID < cD.length; ID++) DD.textureArrays[CD].push(cD[ID].serialize())
        }
        for (CD in DD.ints = {}, this._ints) DD.ints[CD] = this._ints[CD];
        for (CD in DD.uints = {}, this._uints) DD.uints[CD] = this._uints[CD];
        for (CD in DD.floats = {}, this._floats) DD.floats[CD] = this._floats[CD];
        for (CD in DD.floatsArrays = {}, this._floatsArrays) DD.floatsArrays[CD] = this._floatsArrays[CD];
        for (CD in DD.colors3 = {}, this._colors3) {
          const cD = this._colors3[CD];
          DD.colors3[CD] = [cD.r, cD.g, cD.b]
        }
        for (CD in DD.colors3Arrays = {}, this._colors3Arrays) DD.colors3Arrays[CD] = this._colors3Arrays[CD];
        for (CD in DD.colors4 = {}, this._colors4) {
          const cD = this._colors4[CD];
          DD.colors4[CD] = [cD.r, cD.g, cD.b, cD.a]
        }
        for (CD in DD.colors4Arrays = {}, this._colors4Arrays) DD.colors4Arrays[CD] = this._colors4Arrays[CD];
        for (CD in DD.vectors2 = {}, this._vectors2) {
          const cD = this._vectors2[CD];
          DD.vectors2[CD] = [cD.x, cD.y]
        }
        for (CD in DD.vectors3 = {}, this._vectors3) {
          const cD = this._vectors3[CD];
          DD.vectors3[CD] = [cD.x, cD.y, cD.z]
        }
        for (CD in DD.vectors4 = {}, this._vectors4) {
          const cD = this._vectors4[CD];
          DD.vectors4[CD] = [cD.x, cD.y, cD.z, cD.w]
        }
        for (CD in DD.quaternions = {}, this._quaternions) DD.quaternions[CD] = this._quaternions[CD].XcD();
        for (CD in DD.matrices = {}, this._matrices) DD.matrices[CD] = this._matrices[CD].XcD();
        for (CD in DD.matrixArray = {}, this._matrixArrays) DD.matrixArray[CD] = this._matrixArrays[CD];
        for (CD in DD.matrices3x3 = {}, this._matrices3x3) DD.matrices3x3[CD] = this._matrices3x3[CD];
        for (CD in DD.matrices2x2 = {}, this._matrices2x2) DD.matrices2x2[CD] = this._matrices2x2[CD];
        for (CD in DD.vectors2Arrays = {}, this._vectors2Arrays) DD.vectors2Arrays[CD] = this._vectors2Arrays[CD];
        for (CD in DD.vectors3Arrays = {}, this._vectors3Arrays) DD.vectors3Arrays[CD] = this._vectors3Arrays[CD];
        for (CD in DD.vectors4Arrays = {}, this._vectors4Arrays) DD.vectors4Arrays[CD] = this._vectors4Arrays[CD];
        for (CD in DD.quaternionsArrays = {}, this._quaternionsArrays) DD.quaternionsArrays[CD] = this._quaternionsArrays[CD];
        return DD
      }
    }

    function ND(DD, CD, cD) {
      const pD = ID.d.Parse((() => new vD(DD.name, CD, DD.shaderPath, DD.options, DD.storeEffectOnSubMeshes)), DD, CD, cD);
      let fD;
      for (fD in DD.stencil && pD.stencil.parse(DD.stencil, CD, cD), DD.textures) pD.setTexture(fD, bD.c.Parse(DD.textures[fD], CD, cD));
      for (fD in DD.textureArrays) {
        const ID = DD.textureArrays[fD],
          iD = [];
        for (let DD = 0; DD < ID.length; DD++) iD.push(bD.c.Parse(ID[DD], CD, cD));
        pD.setTextureArray(fD, iD)
      }
      for (fD in DD.ints) pD.setInt(fD, DD.ints[fD]);
      for (fD in DD.uints) pD.setUInt(fD, DD.uints[fD]);
      for (fD in DD.floats) pD.setFloat(fD, DD.floats[fD]);
      for (fD in DD.floatsArrays) pD.setFloats(fD, DD.floatsArrays[fD]);
      for (fD in DD.colors3) {
        const CD = DD.colors3[fD];
        pD.setColor3(fD, {
          r: CD[0],
          g: CD[1],
          b: CD[2]
        })
      }
      for (fD in DD.colors3Arrays) {
        const CD = DD.colors3Arrays[fD].reduce(((DD, CD, cD) => (cD % 3 === 0 ? DD.push([CD]) : DD[DD.length - 1].push(CD), DD)), []).map((DD => ({
          r: DD[0],
          g: DD[1],
          b: DD[2]
        })));
        pD.setColor3Array(fD, CD)
      }
      for (fD in DD.colors4) {
        const CD = DD.colors4[fD];
        pD.setColor4(fD, {
          r: CD[0],
          g: CD[1],
          b: CD[2],
          a: CD[3]
        })
      }
      for (fD in DD.colors4Arrays) {
        const CD = DD.colors4Arrays[fD].reduce(((DD, CD, cD) => (cD % 4 === 0 ? DD.push([CD]) : DD[DD.length - 1].push(CD), DD)), []).map((DD => ({
          r: DD[0],
          g: DD[1],
          b: DD[2],
          a: DD[3]
        })));
        pD.setColor4Array(fD, CD)
      }
      for (fD in DD.vectors2) {
        const CD = DD.vectors2[fD];
        pD.setVector2(fD, {
          x: CD[0],
          y: CD[1]
        })
      }
      for (fD in DD.vectors3) {
        const CD = DD.vectors3[fD];
        pD.setVector3(fD, {
          x: CD[0],
          y: CD[1],
          z: CD[2]
        })
      }
      for (fD in DD.vectors4) {
        const CD = DD.vectors4[fD];
        pD.setVector4(fD, {
          x: CD[0],
          y: CD[1],
          z: CD[2],
          w: CD[3]
        })
      }
      for (fD in DD.quaternions) pD.setQuaternion(fD, iD.h.FromArray(DD.quaternions[fD]));
      for (fD in DD.matrices) pD.setMatrix(fD, iD.d.FromArray(DD.matrices[fD]));
      const QD = pD;
      for (fD in DD.matrixArray) QD._matrixArrays[fD] = new Float32Array(DD.matrixArray[fD]);
      for (fD in DD.matrices3x3) pD.setMatrix3x3(fD, DD.matrices3x3[fD]);
      for (fD in DD.matrices2x2) pD.setMatrix2x2(fD, DD.matrices2x2[fD]);
      for (fD in DD.vectors2Arrays) pD.setArray2(fD, DD.vectors2Arrays[fD]);
      for (fD in DD.vectors3Arrays) pD.setArray3(fD, DD.vectors3Arrays[fD]);
      for (fD in DD.vectors4Arrays) pD.setArray4(fD, DD.vectors4Arrays[fD]);
      for (fD in DD.quaternionsArrays) pD.setArray4(fD, DD.quaternionsArrays[fD]);
      return pD
    }
    async function gD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
      return await new Promise(((pD, iD) => {
        const fD = new wD.b;
        fD.addEventListener("readystatechange", (() => {
          if (4 == fD.readyState)
            if (200 == fD.status) {
              const CD = ND(JSON.parse(fD.responseText), cD || BD.b.LastCreatedScene, ID);
              DD && (CD.name = DD), pD(CD)
            } else iD("Unable to load the ShaderMaterial")
        })), fD.open("GET", CD), fD.send()
      }))
    }
    async function XD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const ID = this?.SnippetUrl ?? vD.SnippetUrl;
      return await new Promise(((pD, iD) => {
        const fD = new wD.b;
        fD.addEventListener("readystatechange", (() => {
          if (4 == fD.readyState)
            if (200 == fD.status) {
              const ID = JSON.parse(JSON.parse(fD.responseText).jsonPayload),
                iD = ND(JSON.parse(ID.shaderMaterial), CD || BD.b.LastCreatedScene, cD);
              iD.snippetId = DD, pD(iD)
            } else iD("Unable to load the snippet " + DD)
        })), fD.open("GET", ID + "/" + DD.replace(/#/g, "/")), fD.send()
      }))
    }
    vD.SnippetUrl = "https://snippet.babylonjs.com";
    const mD = XD;
    let nD = !1;

    function OD() {
      nD || (nD = !0, vD.Parse = ND, vD.ParseFromFileAsync = gD, vD.ParseFromSnippetAsync = XD, vD.CreateFromSnippetAsync = mD, (0, ZD.d)("BABYLON.ShaderMaterial", vD))
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);