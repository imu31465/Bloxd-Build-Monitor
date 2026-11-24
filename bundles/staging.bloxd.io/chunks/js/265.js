export const id = 265;
export const ids = [265];
export const modules = {
  40491: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB
    });
    var QB = zB(40076);

    function nB(BB) {
      return class extends BB {
        constructor() {
          super(...arguments);
          const BB = new.target;
          if (!BB[Symbol.metadata]) {
            const jB = Object.getPrototypeOf(BB)?.[Symbol.metadata];
            BB[Symbol.metadata] = jB ? Object.create(jB) : {}
          }
          const jB = (0, QB.c)(BB[Symbol.metadata]);
          jB._imageProcessingConfiguration || (jB._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(BB) {
          this._attachImageProcessingConfiguration(BB), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(BB) {
          BB !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !BB && this.aY ? this._imageProcessingConfiguration = this.aY().imageProcessingConfiguration : BB && (this._imageProcessingConfiguration = BB), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(BB) {
          this.imageProcessingConfiguration.colorCurvesEnabled = BB
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(BB) {
          this.imageProcessingConfiguration.colorGradingEnabled = BB
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(BB) {
          this._imageProcessingConfiguration.toneMappingEnabled = BB
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(BB) {
          this._imageProcessingConfiguration.exposure = BB
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(BB) {
          this._imageProcessingConfiguration.contrast = BB
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(BB) {
          this._imageProcessingConfiguration.colorGradingTexture = BB
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(BB) {
          this._imageProcessingConfiguration.colorCurves = BB
        }
      }
    }
  },
  40373: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB,
      e: () => nB
    });
    var QB = zB(40376);

    function nB(BB) {
      return class extends BB {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class dB extends QB.b {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  40451: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => pB
    });
    var QB = zB(40066),
      nB = zB(40380),
      dB = zB(40068),
      IB = zB(40435),
      NB = zB(40376),
      uB = zB(40457),
      UB = zB(40428);
    class aB extends NB.b {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let pB = (() => {
      var BB, jB, zB, NB;
      let pB, rB, sB, JB, mB, yB, kB = uB.c,
        GB = [],
        LB = [],
        gB = [],
        tB = [],
        SB = [],
        MB = [],
        EB = [],
        iB = [],
        qB = [],
        fB = [],
        oB = [],
        HB = [];
      return BB = class extends kB {
        get texture() {
          return (0, QB.b)(this, jB, "f")
        }
        set texture(BB) {
          (0, QB.d)(this, jB, BB, "f")
        }
        get normalBlendMethod() {
          return (0, QB.b)(this, zB, "f")
        }
        set normalBlendMethod(BB) {
          (0, QB.d)(this, zB, BB, "f")
        }
        get isEnabled() {
          return (0, QB.b)(this, NB, "f")
        }
        set isEnabled(BB) {
          (0, QB.d)(this, NB, BB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(BB) {
          let dB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(BB, "DetailMap", 140, new aB, dB), this._texture = null, jB.set(this, (0, QB.g)(this, GB, void 0)), this.diffuseBlendLevel = ((0, QB.g)(this, LB), (0, QB.g)(this, gB, 1)), this.roughnessBlendLevel = ((0, QB.g)(this, tB), (0, QB.g)(this, SB, 1)), this.bumpLevel = ((0, QB.g)(this, MB), (0, QB.g)(this, EB, 1)), this._normalBlendMethod = ((0, QB.g)(this, iB), nB.b.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), zB.set(this, (0, QB.g)(this, qB, void 0)), this._isEnabled = ((0, QB.g)(this, fB), !1), NB.set(this, (0, QB.g)(this, oB, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, QB.g)(this, HB), this._internalMarkAllSubMeshesAsTexturesDirty = BB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(BB, jB, zB) {
          return !this._isEnabled || !(BB._areTexturesDirty && jB.texturesEnabled && zB.getCaps().standardDerivatives && this._texture && IB.d.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(BB, jB) {
          if (this._isEnabled) {
            BB.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const zB = jB.wJ();
            BB._areTexturesDirty && (zB.getCaps().standardDerivatives && this._texture && IB.d.DetailTextureEnabled && this._isEnabled ? ((0, UB.cb)(this._texture, BB, "DETAIL"), BB.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : BB.DETAIL = !1)
          } else BB.DETAIL = !1
        }
        bindForSubMesh(BB, jB) {
          if (!this._isEnabled) return;
          const zB = this._material.isFrozen;
          BB.useUbo && zB && BB.isSync || this._texture && IB.d.DetailTextureEnabled && (BB.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, UB.A)(this._texture, BB, "detail")), jB.texturesEnabled && this._texture && IB.d.DetailTextureEnabled && BB.setTexture("detailSampler", this._texture)
        }
        hasTexture(BB) {
          return this._texture === BB
        }
        getActiveTextures(BB) {
          this._texture && BB.push(this._texture)
        }
        getAnimatables(BB) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && BB.push(this._texture)
        }
        dispose(BB) {
          BB && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(BB) {
          BB.push("detailSampler")
        }
        getUniforms() {
          return {
            ubo: [{
              name: "vDetailInfos",
              size: 4,
              type: "vec4"
            }, {
              name: "detailMatrix",
              size: 16,
              type: "mat4"
            }]
          }
        }
      }, jB = new WeakMap, zB = new WeakMap, NB = new WeakMap, (() => {
        const jB = "function" === typeof Symbol && Symbol.metadata ? Object.create(kB[Symbol.metadata] ?? null) : void 0;
        pB = [(0, dB.v)("detailTexture"), (0, dB.e)("_markAllSubMeshesAsTexturesDirty")], rB = [(0, dB.A)()], sB = [(0, dB.A)()], JB = [(0, dB.A)()], mB = [(0, dB.A)(), (0, dB.e)("_markAllSubMeshesAsTexturesDirty")], yB = [(0, dB.A)(), (0, dB.e)("_markAllSubMeshesAsTexturesDirty")], (0, QB.e)(BB, null, pB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, jB) => {
              BB.texture = jB
            }
          },
          metadata: jB
        }, GB, LB), (0, QB.e)(BB, null, mB, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: BB => "normalBlendMethod" in BB,
            get: BB => BB.normalBlendMethod,
            set: (BB, jB) => {
              BB.normalBlendMethod = jB
            }
          },
          metadata: jB
        }, qB, fB), (0, QB.e)(BB, null, yB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, jB) => {
              BB.isEnabled = jB
            }
          },
          metadata: jB
        }, oB, HB), (0, QB.e)(null, null, rB, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: BB => "diffuseBlendLevel" in BB,
            get: BB => BB.diffuseBlendLevel,
            set: (BB, jB) => {
              BB.diffuseBlendLevel = jB
            }
          },
          metadata: jB
        }, gB, tB), (0, QB.e)(null, null, sB, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: BB => "roughnessBlendLevel" in BB,
            get: BB => BB.roughnessBlendLevel,
            set: (BB, jB) => {
              BB.roughnessBlendLevel = jB
            }
          },
          metadata: jB
        }, SB, MB), (0, QB.e)(null, null, JB, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: BB => "bumpLevel" in BB,
            get: BB => BB.bumpLevel,
            set: (BB, jB) => {
              BB.bumpLevel = jB
            }
          },
          metadata: jB
        }, EB, iB), jB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: jB
        })
      })(), BB
    })()
  },
  40376: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB
    });
    class QB {
      constructor(BB) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = BB, BB)
          for (const jB in BB) Object.prototype.hasOwnProperty.call(BB, jB) && this._setDefaultValue(jB)
      }
      get isDirty() {
        return this._isDirty
      }
      markAsProcessed() {
        this._isDirty = !1, this._areAttributesDirty = !1, this._areTexturesDirty = !1, this._areFresnelDirty = !1, this._areLightsDirty = !1, this._areLightsDisposed = !1, this._areMiscDirty = !1, this._arePrePassDirty = !1, this._areImageProcessingDirty = !1
      }
      markAsUnprocessed() {
        this._isDirty = !0
      }
      markAllAsDirty() {
        this._areTexturesDirty = !0, this._areAttributesDirty = !0, this._areLightsDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._isDirty = !0
      }
      markAsImageProcessingDirty() {
        this._areImageProcessingDirty = !0, this._isDirty = !0
      }
      markAsLightDirty() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || BB, this._isDirty = !0
      }
      markAsAttributesDirty() {
        this._areAttributesDirty = !0, this._isDirty = !0
      }
      markAsTexturesDirty() {
        this._areTexturesDirty = !0, this._isDirty = !0
      }
      markAsFresnelDirty() {
        this._areFresnelDirty = !0, this._isDirty = !0
      }
      markAsMiscDirty() {
        this._areMiscDirty = !0, this._isDirty = !0
      }
      markAsPrePassDirty() {
        this._arePrePassDirty = !0, this._isDirty = !0
      }
      rebuild() {
        this._keys.length = 0;
        for (const BB of Object.keys(this)) "_" !== BB[0] && this._keys.push(BB);
        if (this._externalProperties)
          for (const BB in this._externalProperties) - 1 === this._keys.indexOf(BB) && this._keys.push(BB)
      }
      isEqual(BB) {
        if (this._keys.length !== BB._keys.length) return !1;
        for (let jB = 0; jB < this._keys.length; jB++) {
          const zB = this._keys[jB];
          if (this[zB] !== BB[zB]) return !1
        }
        return !0
      }
      cloneTo(BB) {
        this._keys.length !== BB._keys.length && (BB._keys = this._keys.slice(0));
        for (let jB = 0; jB < this._keys.length; jB++) {
          const zB = this._keys[jB];
          BB[zB] = this[zB]
        }
      }
      reset() {
        for (const BB of this._keys) this._setDefaultValue(BB)
      }
      _setDefaultValue(BB) {
        const jB = this._externalProperties?.[BB]?.type ?? typeof this[BB],
          zB = this._externalProperties?.[BB]?.default;
        switch (jB) {
          case "number":
            this[BB] = zB ?? 0;
            break;
          case "string":
            this[BB] = zB ?? "";
            break;
          default:
            this[BB] = zB ?? !1
        }
      }
      toString() {
        let BB = "";
        for (let jB = 0; jB < this._keys.length; jB++) {
          const zB = this._keys[jB],
            QB = this[zB];
          switch (typeof QB) {
            case "number":
            case "string":
              BB += "#define " + zB + " " + QB + "\n";
              break;
            default:
              QB && (BB += "#define " + zB + "\n")
          }
        }
        return BB
      }
    }
  },
  40475: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB,
      f: () => IB,
      h: () => dB
    });
    var QB, nB = zB(37171);

    function dB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const QB = jB(BB);
      if (!Number.isInteger(QB) || QB < 0 || QB > zB) throw new Error(`Invalid geometry object ID ${QB} for mesh "${BB.name}". Object IDs must be integers between 0 and 0x${zB.toString(16).toUpperCase()}.`);
      return QB
    }

    function IB(BB, jB) {
      const zB = jB(BB);
      if (!Number.isInteger(zB) || zB < 0 || zB > 255 || 0 !== zB && 0 === (63 & zB)) throw new Error(`Invalid geometry mesh-blending tag ${zB} for mesh "${BB.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return zB
    }! function(BB) {
      BB[BB.Zero = 0] = "Zero", BB[BB.One = 1] = "One", BB[BB.MaxViewZ = 2] = "MaxViewZ", BB[BB.NoClear = 3] = "NoClear"
    }(QB || (QB = {}));
    class NB {
      static CreateConfiguration(BB) {
        return NB._Configurations[BB] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: nB.c.Zero(),
          currentViewProjection: nB.c.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, NB._Configurations[BB]
      }
      static DeleteConfiguration(BB) {
        delete NB._Configurations[BB]
      }
      static GetConfiguration(BB) {
        return NB._Configurations[BB]
      }
      static _PrepareConfiguration(BB, jB, zB) {
        const QB = NB._Configurations[BB];
        QB._attachments = jB, QB._colorAttachments = zB, QB._mrtCount = jB.length;
        let nB = "#define PREPASS\n";
        for (const dB of NB.GeometryTextureDescriptions) {
          const BB = QB.defines[dB.defineIndex];
          void 0 !== BB && (nB += `#define ${dB.define}\n#define ${dB.defineIndex} ${BB}\n`)
        }
        QB.objectIdIsRedFormat && (nB += "#define PREPASS_OBJECT_ID_R8\n"), QB._defines = nB + `#define SCENE_MRT_COUNT ${jB.length}\n`
      }
      static _PrepareStringDefines(BB, jB) {
        const zB = NB._Configurations[BB];
        return !!zB?._defines && (jB.push(zB._defines), !0)
      }
      static _BindAttachmentsForEffect(BB, jB) {
        const zB = NB._Configurations[BB.currentRenderPassId];
        return !zB?._attachments || (BB.bindAttachments(jB._multiTarget ? zB._attachments : zB._colorAttachments), jB._multiTarget || void 0 !== zB.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(BB) {
        const jB = NB._Configurations[BB.currentRenderPassId];
        jB?._colorAttachments && BB.bindAttachments(jB._colorAttachments)
      }
      static _BindColorAttachments(BB) {
        const jB = NB._Configurations[BB.currentRenderPassId];
        return !jB?._colorAttachments || (BB.bindAttachments(jB._colorAttachments), void 0 !== jB.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(BB) {
        const jB = NB._Configurations[BB.currentRenderPassId];
        return !jB?._colorAttachments || void 0 !== jB.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(BB, jB) {
        const zB = NB._Configurations[BB.currentRenderPassId];
        if (!zB) return;
        const QB = BB.getAlphaMode(),
          nB = void 0 === zB.defines.PREPASS_COLOR_INDEX || 2 === QB || 1 === QB || 17 === QB;
        jB.setFloat("geometryZeroAlphaDiscard", nB ? 1 : 0)
      }
      static AddUniformsAndSamplers(BB, jB) {
        BB.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(BB, jB) {
        for (const zB of jB)
          if (zB.cL)
            for (const jB of zB.cL) jB._removeDrawWrapper(BB)
      }
      static PrepareDefines(BB, jB, zB) {
        if (!zB._arePrePassDirty) return;
        const QB = NB._Configurations[BB];
        if (!QB) return;
        zB.PREPASS = !0;
        let nB = 0;
        for (let dB = 0; dB < NB.GeometryTextureDescriptions.length; dB++) {
          const BB = NB.GeometryTextureDescriptions[dB],
            jB = BB.define,
            IB = BB.defineIndex,
            uB = QB.defines[IB];
          void 0 !== uB ? (zB[jB] = !0, zB[IB] = uB, nB++) : (zB[jB] = !1, delete zB[IB])
        }
        zB.PREPASS_OBJECT_ID_R8 = QB.objectIdIsRedFormat, zB.SCENE_MRT_COUNT = QB._mrtCount ?? nB, zB.BONES_VELOCITY_ENABLED = jB.useBones && jB.computeBonesUsingShaders && jB.skeleton && !jB.skeleton.isUsingTextureForMatrices && -1 === QB.excludedSkinnedMesh.indexOf(jB)
      }
      static Bind(BB, jB, zB, QB, nB) {
        const uB = NB._Configurations[BB];
        if (!uB) return;
        const UB = zB.aY(),
          aB = UB.wJ();
        if (uB.reverseCulling && aB.setStateCullFaceType(UB._mirroredCameraPosition ? nB.cullBackFaces : !nB.cullBackFaces), void 0 !== uB.defines.PREPASS_OBJECT_ID_INDEX) {
          const BB = uB.objectIdIsRedFormat ? 255 : 16777215;
          let QB = zB.uniqueId;
          if (uB.objectIdProvider) QB = dB(zB, uB.objectIdProvider, BB);
          else if (QB > BB) throw new Error(`Invalid geometry object ID ${QB} for mesh "${zB.name}". Object IDs must be integers between 0 and 0x${BB.toString(16).toUpperCase()}.`);
          jB.setFloat("objectId", QB)
        }
        if (void 0 !== uB.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const BB = uB.meshBlendTagProvider ? IB(zB, uB.meshBlendTagProvider) : zB.meshBlendingTag;
          jB.setInt("meshBlendTag", BB)
        }
        if (void 0 !== uB.defines.PREPASS_VELOCITY_INDEX || void 0 !== uB.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const BB = uB._currentWorldMatrices ?? (uB._currentWorldMatrices = {}),
            nB = uB._worldMatrixFrameIds ?? (uB._worldMatrixFrameIds = {});
          if (BB[zB.uniqueId] || (BB[zB.uniqueId] = QB.clone(), uB.previousWorldMatrices[zB.uniqueId] = QB.clone()), nB[zB.uniqueId] !== aB.frameId && (uB.previousWorldMatrices[zB.uniqueId].jH(BB[zB.uniqueId]), nB[zB.uniqueId] = aB.frameId), BB[zB.uniqueId].jH(QB), -1 === uB.lastUpdateFrameId ? (uB.lastUpdateFrameId = aB.frameId, uB.previousViewProjection.jH(UB.getTransformMatrix()), uB.currentViewProjection.jH(UB.getTransformMatrix())) : uB.currentViewProjection.updateFlag !== UB.getTransformMatrix().updateFlag ? (uB.lastUpdateFrameId = aB.frameId, uB.previousViewProjection.jH(uB.currentViewProjection), uB.currentViewProjection.jH(UB.getTransformMatrix())) : uB.lastUpdateFrameId !== aB.frameId && (uB.lastUpdateFrameId = aB.frameId, uB.previousViewProjection.jH(uB.currentViewProjection)), jB.setMatrix("previousWorld", uB.previousWorldMatrices[zB.uniqueId]), jB.setMatrix("previousViewProjection", uB.previousViewProjection), zB.useBones && zB.computeBonesUsingShaders && zB.skeleton) {
            const BB = zB.skeleton;
            if (!BB.isUsingTextureForMatrices || -1 === jB.getUniformIndex("boneTextureInfo")) {
              const QB = BB.getTransformMatrices(zB);
              QB && (uB.previousBones[zB.uniqueId] || (uB.previousBones[zB.uniqueId] = QB.slice()), jB.setMatrices("mPreviousBones", uB.previousBones[zB.uniqueId]), uB.previousBones[zB.uniqueId].set(QB))
            }
          }
        }
      }
    }
    NB.GeometryTextureDescriptions = [{
      type: 0,
      name: "IrradianceLegacy",
      clearType: 0,
      define: "PREPASS_IRRADIANCE_LEGACY",
      defineIndex: "PREPASS_IRRADIANCE_LEGACY_INDEX"
    }, {
      type: 1,
      name: "WorldPosition",
      clearType: 0,
      define: "PREPASS_POSITION",
      defineIndex: "PREPASS_POSITION_INDEX"
    }, {
      type: 2,
      name: "Velocity",
      clearType: 0,
      define: "PREPASS_VELOCITY",
      defineIndex: "PREPASS_VELOCITY_INDEX"
    }, {
      type: 3,
      name: "Reflectivity",
      clearType: 0,
      define: "PREPASS_REFLECTIVITY",
      defineIndex: "PREPASS_REFLECTIVITY_INDEX"
    }, {
      type: 5,
      name: "ViewDepth",
      clearType: 2,
      define: "PREPASS_DEPTH",
      defineIndex: "PREPASS_DEPTH_INDEX"
    }, {
      type: 6,
      name: "ViewNormal",
      clearType: 0,
      define: "PREPASS_NORMAL",
      defineIndex: "PREPASS_NORMAL_INDEX"
    }, {
      type: 7,
      name: "AlbedoSqrt",
      clearType: 0,
      define: "PREPASS_ALBEDO_SQRT",
      defineIndex: "PREPASS_ALBEDO_SQRT_INDEX"
    }, {
      type: 8,
      name: "WorldNormal",
      clearType: 0,
      define: "PREPASS_WORLD_NORMAL",
      defineIndex: "PREPASS_WORLD_NORMAL_INDEX"
    }, {
      type: 9,
      name: "LocalPosition",
      clearType: 0,
      define: "PREPASS_LOCAL_POSITION",
      defineIndex: "PREPASS_LOCAL_POSITION_INDEX"
    }, {
      type: 10,
      name: "ScreenDepth",
      clearType: 1,
      define: "PREPASS_SCREENSPACE_DEPTH",
      defineIndex: "PREPASS_SCREENSPACE_DEPTH_INDEX"
    }, {
      type: 11,
      name: "LinearVelocity",
      clearType: 0,
      define: "PREPASS_VELOCITY_LINEAR",
      defineIndex: "PREPASS_VELOCITY_LINEAR_INDEX"
    }, {
      type: 12,
      name: "Albedo",
      clearType: 0,
      define: "PREPASS_ALBEDO",
      defineIndex: "PREPASS_ALBEDO_INDEX"
    }, {
      type: 13,
      name: "NormalizedViewDepth",
      clearType: 1,
      define: "PREPASS_NORMALIZED_VIEW_DEPTH",
      defineIndex: "PREPASS_NORMALIZED_VIEW_DEPTH_INDEX"
    }, {
      type: 4,
      name: "Color",
      clearType: 3,
      define: "PREPASS_COLOR",
      defineIndex: "PREPASS_COLOR_INDEX"
    }, {
      type: 14,
      name: "Irradiance",
      clearType: 0,
      define: "PREPASS_IRRADIANCE",
      defineIndex: "PREPASS_IRRADIANCE_INDEX"
    }, {
      type: 15,
      name: "ObjectId",
      clearType: 0,
      define: "PREPASS_OBJECT_ID",
      defineIndex: "PREPASS_OBJECT_ID_INDEX"
    }, {
      type: 16,
      name: "MeshBlendTag",
      clearType: 0,
      define: "PREPASS_MESH_BLEND_TAG",
      defineIndex: "PREPASS_MESH_BLEND_TAG_INDEX"
    }], NB._Configurations = {}
  },
  40457: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => rB,
      f: () => JB
    });
    var QB = zB(40066),
      nB = zB(40068),
      dB = zB(39974),
      IB = zB(39932);
    const NB = new RegExp("^([gimus]+)!");
    class uB {
      constructor(BB) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = BB, this._scene = BB.aY(), this._engine = this._scene.wJ()
      }
      _addPlugin(BB) {
        for (let QB = 0; QB < this._plugins.length; ++QB)
          if (this._plugins[QB].name === BB.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !BB.isCompatible(this._material.shaderLanguage)) throw `The plugin "${BB.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const jB = BB.getClassName();
        uB._MaterialPluginClassToMainDefine[jB] || (uB._MaterialPluginClassToMainDefine[jB] = "MATERIALPLUGIN_" + ++uB._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (BB, jB) => this._handlePluginEvent(BB, jB), this._plugins.push(BB), this._plugins.sort(((BB, jB) => BB.priority - jB.priority)), this._codeInjectionPoints = {};
        const zB = {};
        zB[uB._MaterialPluginClassToMainDefine[jB]] = {
          type: "boolean",
          default: !0
        };
        for (const QB of this._plugins) QB.collectDefines(zB), this._collectPointNames("vertex", QB.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", QB.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = zB, !0
      }
      _activatePlugin(BB) {
        -1 === this._activePlugins.indexOf(BB) && (this._activePlugins.push(BB), this._activePlugins.sort(((BB, jB) => BB.priority - jB.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), BB.registerForExtraEvents && (this._activePluginsForExtraEvents.push(BB), this._activePluginsForExtraEvents.sort(((BB, jB) => BB.priority - jB.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(BB) {
        for (let jB = 0; jB < this._plugins.length; ++jB)
          if (this._plugins[jB].name === BB) return this._plugins[jB];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(BB) {
        let jB = !0;
        for (const zB of this._activePlugins) jB = jB && zB.isReadyForSubMesh(BB.defines, this._scene, this._engine, BB.subMesh);
        BB.isReadyForSubMesh = jB
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(BB) {
        for (const jB of this._activePlugins) jB.prepareDefinesBeforeAttributes(BB.defines, this._scene, BB.mesh)
      }
      _handlePluginEventPrepareDefines(BB) {
        for (const jB of this._activePlugins) jB.prepareDefines(BB.defines, this._scene, BB.mesh)
      }
      _handlePluginEventHardBindForSubMesh(BB) {
        for (const jB of this._activePluginsForExtraEvents) jB.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, BB.subMesh)
      }
      _handlePluginEventBindForSubMesh(BB) {
        for (const jB of this._activePlugins) jB.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, BB.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(BB) {
        let jB = !1;
        for (const zB of this._activePluginsForExtraEvents)
          if (jB = zB.hasRenderTargetTextures(), jB) break;
        BB.hasRenderTargetTextures = jB
      }
      _handlePluginEventFillRenderTargetTextures(BB) {
        for (const jB of this._activePluginsForExtraEvents) jB.fillRenderTargetTextures(BB.renderTargets)
      }
      _handlePluginEvent(BB, jB) {
        switch (BB) {
          case 512: {
            const BB = jB;
            for (const jB of this._activePlugins) jB.getActiveTextures(BB.activeTextures);
            break
          }
          case 256: {
            const BB = jB;
            for (const jB of this._activePlugins) jB.getAnimatables(BB.animatables);
            break
          }
          case 1024: {
            const BB = jB;
            let zB = !1;
            for (const jB of this._activePlugins)
              if (zB = jB.hasTexture(BB.texture), zB) break;
            BB.hasTexture = zB;
            break
          }
          case 2: {
            const BB = jB;
            for (const jB of this._plugins) jB.dispose(BB.forceDisposeTextures);
            break
          }
          case 4:
            jB.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const BB = jB;
            for (const jB of this._activePlugins) BB.fallbackRank = jB.addFallbacks(BB.defines, BB.fallbacks, BB.fallbackRank), jB.getAttributes(BB.attributes, this._scene, BB.mesh);
            this._uniformList.length > 0 && BB.uniforms.push(...this._uniformList), this._samplerList.length > 0 && BB.samplers.push(...this._samplerList), this._uboList.length > 0 && BB.uniformBuffersNames.push(...this._uboList), BB.customCode = this._injectCustomCode(BB, BB.customCode);
            break
          }
          case 8: {
            const BB = jB;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const zB = 1 === this._material.shaderLanguage;
            for (const jB of this._plugins) {
              const QB = jB.getUniforms(this._material.shaderLanguage);
              if (QB) {
                if (QB.ubo)
                  for (const jB of QB.ubo) {
                    if (jB.size && jB.type) {
                      const QB = jB.arraySize ?? 0;
                      if (BB.ubo.addUniform(jB.name, jB.size, QB), zB) {
                        let BB;
                        switch (jB.type) {
                          case "mat4":
                            BB = "mat4x4f";
                            break;
                          case "float":
                            BB = "f32";
                            break;
                          default:
                            BB = `${jB.type}f`
                        }
                        this._uboDeclaration += QB > 0 ? `uniform ${jB.name}: array<${BB}, ${QB}>;\n` : `uniform ${jB.name}: ${BB};\n`
                      } else this._uboDeclaration += `${jB.type} ${jB.name}${QB>0?`[${QB}]`:""};\n`
                    }
                    this._uniformList.push(jB.name)
                  }
                QB.vertex && (this._vertexDeclaration += QB.vertex + "\n"), QB.fragment && (this._fragmentDeclaration += QB.fragment + "\n"), QB.externalUniforms && this._uniformList.push(...QB.externalUniforms)
              }
              jB.getSamplers(this._samplerList), jB.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(BB, jB) {
        if (jB)
          for (const zB in jB) this._codeInjectionPoints[BB] || (this._codeInjectionPoints[BB] = {}), this._codeInjectionPoints[BB][zB] = !0
      }
      _injectCustomCode(BB, jB) {
        return (zB, QB) => {
          jB && (QB = jB(zB, QB)), this._uboDeclaration && (QB = QB.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (QB = QB.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (QB = QB.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const nB = this._codeInjectionPoints?.[zB];
          if (!nB) return QB;
          let uB = null;
          for (let jB in nB) {
            let nB = "";
            for (const QB of this._activePlugins) {
              const NB = this._material.shaderLanguage;
              let UB = QB.getCustomCode(zB, NB)?.[jB];
              UB && (QB.resolveIncludes && (null === uB && (uB = {
                defines: [],
                indexParameters: BB.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: IB.e.GetShadersRepository(NB),
                includesShadersStore: IB.e.GetIncludesShadersStore(NB),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                jQB: this._engine.jQB,
                processCodeAfterIncludes: void 0
              }), uB.isFragment = "fragment" === zB, (0, dB.h)(UB, uB, (BB => UB = BB))), nB += UB + "\n")
            }
            if (nB.length > 0)
              if ("!" === jB.charAt(0)) {
                jB = jB.substring(1);
                let BB = "g";
                if ("!" === jB.charAt(0)) BB = "", jB = jB.substring(1);
                else {
                  const zB = NB.exec(jB);
                  zB && zB.length >= 2 && (BB = zB[1], jB = jB.substring(BB.length + 1))
                }
                BB.indexOf("g") < 0 && (BB += "g");
                const zB = new RegExp(jB, BB);
                let dB = zB.exec(QB);
                for (; null !== dB;) {
                  const {
                    index: BB
                  } = dB, jB = UB(nB, dB);
                  QB = QB.substring(0, BB) + jB + QB.substring(BB + dB[0].length), zB.lastIndex = BB + jB.length, dB = zB.exec(QB)
                }
              } else {
                const BB = "#define " + jB;
                QB = QB.replace(BB, "\n" + nB + "\n" + BB)
              }
          }
          return QB
        }
      }
    }
    uB._MaterialPluginClassToMainDefine = {}, uB._MaterialPluginCounter = 0;

    function UB(BB, jB) {
      return BB.replace(/\$(\d+)/g, ((BB, zB) => {
        const QB = Number(zB);
        return QB < jB.length ? jB[QB] : ""
      }))
    }
    var aB = zB(40086),
      pB = zB(37222);
    let rB = (() => {
        var BB;
        let jB, zB, dB, IB, NB = [],
          UB = [],
          pB = [],
          rB = [],
          sB = [],
          JB = [],
          mB = [],
          yB = [];
        return BB = class {
          isCompatible(BB) {
            return 0 === BB
          }
          _enable(BB) {
            BB && this._pluginManager._activatePlugin(this)
          }
          constructor(BB, jB, zB, nB) {
            let dB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              IB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              aB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, QB.g)(this, NB, void 0), this.priority = ((0, QB.g)(this, UB), (0, QB.g)(this, pB, 500)), this.resolveIncludes = ((0, QB.g)(this, rB), (0, QB.g)(this, sB, !1)), this.registerForExtraEvents = ((0, QB.g)(this, JB), (0, QB.g)(this, mB, !1)), this.doNotSerialize = ((0, QB.g)(this, yB), !1), this._material = BB, this.name = jB, this.priority = zB, this.resolveIncludes = aB, BB.pluginManager || (BB.pluginManager = new uB(BB), BB.pY.add((() => {
              BB.pluginManager = void 0
            }))), this._pluginDefineNames = nB, this._pluginManager = BB.pluginManager, dB && this._pluginManager._addPlugin(this), IB && this._enable(!0), this.markAllDefinesAsDirty = BB._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(BB, jB, zB, QB) {
            return !0
          }
          hardBindForSubMesh(BB, jB, zB, QB) {}
          bindForSubMesh(BB, jB, zB, QB) {}
          dispose(BB) {}
          getCustomCode(BB) {
            return null
          }
          collectDefines(BB) {
            if (this._pluginDefineNames)
              for (const jB of Object.keys(this._pluginDefineNames)) {
                if ("_" === jB[0]) continue;
                const zB = typeof this._pluginDefineNames[jB];
                BB[jB] = {
                  type: "number" === zB ? "number" : "string" === zB ? "string" : "boolean" === zB ? "boolean" : "object",
                  default: this._pluginDefineNames[jB]
                }
              }
          }
          prepareDefinesBeforeAttributes(BB, jB, zB) {}
          prepareDefines(BB, jB, zB) {}
          hasTexture(BB) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(BB) {}
          getActiveTextures(BB) {}
          getAnimatables(BB) {}
          addFallbacks(BB, jB, zB) {
            return zB
          }
          getSamplers(BB) {}
          getAttributes(BB, jB, zB) {}
          getUniformBuffersNames(BB) {}
          getUniforms() {
            return {}
          }
          copyTo(BB) {
            aB.b.Clone((() => BB), this)
          }
          serialize() {
            return aB.b.Serialize(this)
          }
          parse(BB, jB, zB) {
            aB.b.Parse((() => this), BB, jB, zB)
          }
        }, (() => {
          const uB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          jB = [(0, nB.A)()], zB = [(0, nB.A)()], dB = [(0, nB.A)()], IB = [(0, nB.A)()], (0, QB.e)(null, null, jB, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name,
              set: (BB, jB) => {
                BB.name = jB
              }
            },
            metadata: uB
          }, NB, UB), (0, QB.e)(null, null, zB, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: BB => "priority" in BB,
              get: BB => BB.priority,
              set: (BB, jB) => {
                BB.priority = jB
              }
            },
            metadata: uB
          }, pB, rB), (0, QB.e)(null, null, dB, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: BB => "resolveIncludes" in BB,
              get: BB => BB.resolveIncludes,
              set: (BB, jB) => {
                BB.resolveIncludes = jB
              }
            },
            metadata: uB
          }, sB, JB), (0, QB.e)(null, null, IB, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: BB => "registerForExtraEvents" in BB,
              get: BB => BB.registerForExtraEvents,
              set: (BB, jB) => {
                BB.registerForExtraEvents = jB
              }
            },
            metadata: uB
          }, mB, yB), uB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uB
          })
        })(), BB
      })(),
      sB = !1;

    function JB() {
      sB || (sB = !0, (0, pB.d)("BABYLON.MaterialPluginBase", rB))
    }
  },
  40364: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB
    });
    class QB {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(BB) {
        BB.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(BB) {}
      bindForSubMesh(BB, jB, zB, QB, nB) {
        if (jB.prePassRenderer && jB.prePassRenderer.enabled && jB.prePassRenderer.currentRTisSceneRT && (-1 !== jB.prePassRenderer.getIndex(2) || -1 !== jB.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[zB.uniqueId] || (this.previousWorldMatrices[zB.uniqueId] = QB.clone()), this.previousViewProjection || (this.previousViewProjection = jB.getTransformMatrix().clone(), this.currentViewProjection = jB.getTransformMatrix().clone());
          const nB = jB.wJ();
          this.currentViewProjection.updateFlag !== jB.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = nB.frameId, this.previousViewProjection.jH(this.currentViewProjection), this.currentViewProjection.jH(jB.getTransformMatrix())) : this._lastUpdateFrameId !== nB.frameId && (this._lastUpdateFrameId = nB.frameId, this.previousViewProjection.jH(this.currentViewProjection)), BB.setMatrix("previousWorld", this.previousWorldMatrices[zB.uniqueId]), BB.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[zB.uniqueId] = QB.clone()
        }
      }
    }
  },
  40482: (BB, jB, zB) => {
    function QB(BB) {
      return class extends BB {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    zB.d(jB, {
      b: () => QB
    })
  },
  40350: (BB, jB, zB) => {
    zB.d(jB, {
      StandardMaterial: () => QB.e
    });
    var QB = zB(40355);
    (0, QB.c)()
  },
  40355: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => XB,
      e: () => VB
    });
    var QB = zB(40066),
      nB = zB(40068),
      dB = zB(40171),
      IB = zB(40156),
      NB = zB(37379),
      uB = zB(40211),
      UB = zB(40364),
      aB = zB(40373),
      pB = zB(40180),
      rB = zB(40380),
      sB = zB(40376),
      JB = zB(40438),
      mB = zB(40435),
      yB = zB(40445),
      kB = zB(40451),
      GB = zB(40432),
      LB = zB(40466),
      gB = zB(40428),
      tB = zB(40086),
      SB = zB(40473),
      MB = zB(40475),
      EB = zB(40478),
      iB = zB(40482),
      qB = zB(40491),
      fB = zB(37222),
      oB = zB(39965);
    const HB = {
      effect: null,
      subMesh: null
    };
    class DB extends((0, iB.b)((0, EB.d)(sB.b))) {}
    class FB extends((0, aB.e)(DB)) {
      constructor(BB) {
        super(BB), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class YB extends((0, qB.d)(JB.e)) {}
    let VB = (() => {
        var BB, jB, aB, sB, EB, iB, qB, fB, oB, DB, VB, hB, XB, ZB, AB, TB, PB, WB, eB, lB, wB, xB, KB, CB, cB, bB, vB, RB, OB, Bj, jj, zj, Qj;
        let nj, dj, Ij, Nj, uj, Uj, aj, pj, rj, sj, Jj, mj, yj, kj, Gj, Lj, gj, tj, Sj, Mj, Ej, ij, qj, fj, oj, Hj, Dj, Fj, Yj, Vj, hj, Xj, Zj, Aj, Tj, Pj, Wj, ej, lj, wj, xj, Kj, Cj, cj, bj, vj, Rj, Oj, Bz, jz, zz, Qz, nz, dz, Iz, Nz, uz, Uz, az, pz, rz, sz, Jz, mz, yz, kz, Gz, Lz, gz, tz, Sz, Mz, Ez, iz = YB,
          qz = [],
          fz = [],
          oz = [],
          Hz = [],
          Dz = [],
          Fz = [],
          Yz = [],
          Vz = [],
          hz = [],
          Xz = [],
          Zz = [],
          Az = [],
          Tz = [],
          Pz = [],
          Wz = [],
          ez = [],
          lz = [],
          wz = [],
          xz = [],
          Kz = [],
          Cz = [],
          cz = [],
          bz = [],
          vz = [],
          Rz = [],
          Oz = [],
          BQ = [],
          jQ = [],
          zQ = [],
          QQ = [],
          nQ = [],
          dQ = [],
          IQ = [],
          NQ = [],
          uQ = [],
          UQ = [],
          aQ = [],
          pQ = [],
          rQ = [],
          sQ = [],
          JQ = [],
          mQ = [],
          yQ = [],
          kQ = [],
          GQ = [],
          LQ = [],
          gQ = [],
          tQ = [],
          SQ = [],
          MQ = [],
          EQ = [],
          iQ = [],
          qQ = [],
          fQ = [],
          oQ = [],
          HQ = [],
          DQ = [],
          FQ = [],
          YQ = [],
          VQ = [],
          hQ = [],
          XQ = [],
          ZQ = [],
          AQ = [],
          TQ = [],
          PQ = [],
          WQ = [],
          eQ = [],
          lQ = [],
          wQ = [],
          xQ = [],
          KQ = [],
          CQ = [],
          cQ = [],
          bQ = [],
          vQ = [],
          RQ = [],
          OQ = [],
          Bn = [],
          jn = [],
          zn = [],
          Qn = [],
          nn = [],
          dn = [],
          In = [],
          Nn = [],
          un = [],
          Un = [],
          an = [],
          pn = [],
          rn = [],
          sn = [],
          Jn = [],
          mn = [],
          yn = [],
          kn = [],
          Gn = [],
          Ln = [],
          gn = [],
          tn = [],
          Sn = [],
          Mn = [],
          En = [],
          qn = [],
          fn = [],
          Hn = [],
          Dn = [],
          Fn = [],
          Yn = [],
          Vn = [],
          hn = [],
          Xn = [],
          Zn = [],
          An = [],
          Tn = [],
          Pn = [],
          Wn = [],
          en = [],
          wn = [],
          xn = [],
          Kn = [],
          Cn = [],
          cn = [],
          bn = [],
          vn = [],
          Rn = [],
          On = [],
          Bd = [],
          jd = [],
          zd = [],
          Qd = [],
          nd = [],
          dd = [],
          Id = [],
          Nd = [],
          ud = [],
          Ud = [],
          pd = [],
          rd = [],
          sd = [],
          Jd = [],
          md = [],
          yd = [],
          kd = [],
          Gd = [],
          Ld = [];
        return BB = class extends iz {
          get diffuseTexture() {
            return (0, QB.b)(this, jB, "f")
          }
          set diffuseTexture(BB) {
            (0, QB.d)(this, jB, BB, "f")
          }
          get ambientTexture() {
            return (0, QB.b)(this, aB, "f")
          }
          set ambientTexture(BB) {
            (0, QB.d)(this, aB, BB, "f")
          }
          get opacityTexture() {
            return (0, QB.b)(this, sB, "f")
          }
          set opacityTexture(BB) {
            (0, QB.d)(this, sB, BB, "f")
          }
          get reflectionTexture() {
            return (0, QB.b)(this, EB, "f")
          }
          set reflectionTexture(BB) {
            (0, QB.d)(this, EB, BB, "f")
          }
          get emissiveTexture() {
            return (0, QB.b)(this, iB, "f")
          }
          set emissiveTexture(BB) {
            (0, QB.d)(this, iB, BB, "f")
          }
          get specularTexture() {
            return (0, QB.b)(this, qB, "f")
          }
          set specularTexture(BB) {
            (0, QB.d)(this, qB, BB, "f")
          }
          get bumpTexture() {
            return (0, QB.b)(this, fB, "f")
          }
          set bumpTexture(BB) {
            (0, QB.d)(this, fB, BB, "f")
          }
          get lightmapTexture() {
            return (0, QB.b)(this, oB, "f")
          }
          set lightmapTexture(BB) {
            (0, QB.d)(this, oB, BB, "f")
          }
          get refractionTexture() {
            return (0, QB.b)(this, DB, "f")
          }
          set refractionTexture(BB) {
            (0, QB.d)(this, DB, BB, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, QB.b)(this, VB, "f")
          }
          set useAlphaFromDiffuseTexture(BB) {
            (0, QB.d)(this, VB, BB, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, QB.b)(this, hB, "f")
          }
          set useEmissiveAsIllumination(BB) {
            (0, QB.d)(this, hB, BB, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, QB.b)(this, XB, "f")
          }
          set linkEmissiveWithDiffuse(BB) {
            (0, QB.d)(this, XB, BB, "f")
          }
          get useSpecularOverAlpha() {
            return (0, QB.b)(this, ZB, "f")
          }
          set useSpecularOverAlpha(BB) {
            (0, QB.d)(this, ZB, BB, "f")
          }
          get useReflectionOverAlpha() {
            return (0, QB.b)(this, AB, "f")
          }
          set useReflectionOverAlpha(BB) {
            (0, QB.d)(this, AB, BB, "f")
          }
          get disableLighting() {
            return (0, QB.b)(this, TB, "f")
          }
          set disableLighting(BB) {
            (0, QB.d)(this, TB, BB, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, QB.b)(this, PB, "f")
          }
          set useObjectSpaceNormalMap(BB) {
            (0, QB.d)(this, PB, BB, "f")
          }
          get useParallax() {
            return (0, QB.b)(this, WB, "f")
          }
          set useParallax(BB) {
            (0, QB.d)(this, WB, BB, "f")
          }
          get useParallaxOcclusion() {
            return (0, QB.b)(this, eB, "f")
          }
          set useParallaxOcclusion(BB) {
            (0, QB.d)(this, eB, BB, "f")
          }
          get roughness() {
            return (0, QB.b)(this, lB, "f")
          }
          set roughness(BB) {
            (0, QB.d)(this, lB, BB, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, QB.b)(this, wB, "f")
          }
          set useLightmapAsShadowmap(BB) {
            (0, QB.d)(this, wB, BB, "f")
          }
          get diffuseFresnelParameters() {
            return (0, QB.b)(this, xB, "f")
          }
          set diffuseFresnelParameters(BB) {
            (0, QB.d)(this, xB, BB, "f")
          }
          get opacityFresnelParameters() {
            return (0, QB.b)(this, KB, "f")
          }
          set opacityFresnelParameters(BB) {
            (0, QB.d)(this, KB, BB, "f")
          }
          get reflectionFresnelParameters() {
            return (0, QB.b)(this, CB, "f")
          }
          set reflectionFresnelParameters(BB) {
            (0, QB.d)(this, CB, BB, "f")
          }
          get refractionFresnelParameters() {
            return (0, QB.b)(this, cB, "f")
          }
          set refractionFresnelParameters(BB) {
            (0, QB.d)(this, cB, BB, "f")
          }
          get emissiveFresnelParameters() {
            return (0, QB.b)(this, bB, "f")
          }
          set emissiveFresnelParameters(BB) {
            (0, QB.d)(this, bB, BB, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, QB.b)(this, vB, "f")
          }
          set useReflectionFresnelFromSpecular(BB) {
            (0, QB.d)(this, vB, BB, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, QB.b)(this, RB, "f")
          }
          set useGlossinessFromSpecularMapAlpha(BB) {
            (0, QB.d)(this, RB, BB, "f")
          }
          get maxSimultaneousLights() {
            return (0, QB.b)(this, OB, "f")
          }
          set maxSimultaneousLights(BB) {
            (0, QB.d)(this, OB, BB, "f")
          }
          get invertNormalMapX() {
            return (0, QB.b)(this, Bj, "f")
          }
          set invertNormalMapX(BB) {
            (0, QB.d)(this, Bj, BB, "f")
          }
          get invertNormalMapY() {
            return (0, QB.b)(this, jj, "f")
          }
          set invertNormalMapY(BB) {
            (0, QB.d)(this, jj, BB, "f")
          }
          get twoSidedLighting() {
            return (0, QB.b)(this, zj, "f")
          }
          set twoSidedLighting(BB) {
            (0, QB.d)(this, zj, BB, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, QB.b)(this, Qj, "f")
          }
          set applyDecalMapAfterDetailMap(BB) {
            (0, QB.d)(this, Qj, BB, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(zB, nB) {
            super(zB, nB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || BB.ForceGLSL), this._diffuseTexture = (0, QB.g)(this, qz, null), jB.set(this, ((0, QB.g)(this, fz), (0, QB.g)(this, oz, void 0))), this._ambientTexture = ((0, QB.g)(this, Hz), (0, QB.g)(this, Dz, null)), aB.set(this, ((0, QB.g)(this, Fz), (0, QB.g)(this, Yz, void 0))), this._opacityTexture = ((0, QB.g)(this, Vz), (0, QB.g)(this, hz, null)), sB.set(this, ((0, QB.g)(this, Xz), (0, QB.g)(this, Zz, void 0))), this._reflectionTexture = ((0, QB.g)(this, Az), (0, QB.g)(this, Tz, null)), EB.set(this, ((0, QB.g)(this, Pz), (0, QB.g)(this, Wz, void 0))), this._emissiveTexture = ((0, QB.g)(this, ez), (0, QB.g)(this, lz, null)), iB.set(this, ((0, QB.g)(this, wz), (0, QB.g)(this, xz, void 0))), this._specularTexture = ((0, QB.g)(this, Kz), (0, QB.g)(this, Cz, null)), qB.set(this, ((0, QB.g)(this, cz), (0, QB.g)(this, bz, void 0))), this._bumpTexture = ((0, QB.g)(this, vz), (0, QB.g)(this, Rz, null)), fB.set(this, ((0, QB.g)(this, Oz), (0, QB.g)(this, BQ, void 0))), this._lightmapTexture = ((0, QB.g)(this, jQ), (0, QB.g)(this, zQ, null)), oB.set(this, ((0, QB.g)(this, QQ), (0, QB.g)(this, nQ, void 0))), this._refractionTexture = ((0, QB.g)(this, dQ), (0, QB.g)(this, IQ, null)), DB.set(this, ((0, QB.g)(this, NQ), (0, QB.g)(this, uQ, void 0))), this.ambientColor = ((0, QB.g)(this, UQ), (0, QB.g)(this, aQ, new NB.d(0, 0, 0))), this.diffuseColor = ((0, QB.g)(this, pQ), (0, QB.g)(this, rQ, new NB.d(1, 1, 1))), this.specularColor = ((0, QB.g)(this, sQ), (0, QB.g)(this, JQ, new NB.d(1, 1, 1))), this.emissiveColor = ((0, QB.g)(this, mQ), (0, QB.g)(this, yQ, new NB.d(0, 0, 0))), this.specularPower = ((0, QB.g)(this, kQ), (0, QB.g)(this, GQ, 64)), this._useAlphaFromDiffuseTexture = ((0, QB.g)(this, LQ), (0, QB.g)(this, gQ, !1)), VB.set(this, ((0, QB.g)(this, tQ), (0, QB.g)(this, SQ, void 0))), this._useEmissiveAsIllumination = ((0, QB.g)(this, MQ), (0, QB.g)(this, EQ, !1)), hB.set(this, ((0, QB.g)(this, iQ), (0, QB.g)(this, qQ, void 0))), this._linkEmissiveWithDiffuse = ((0, QB.g)(this, fQ), (0, QB.g)(this, oQ, !1)), XB.set(this, ((0, QB.g)(this, HQ), (0, QB.g)(this, DQ, void 0))), this._useSpecularOverAlpha = ((0, QB.g)(this, FQ), (0, QB.g)(this, YQ, !1)), ZB.set(this, ((0, QB.g)(this, VQ), (0, QB.g)(this, hQ, void 0))), this._useReflectionOverAlpha = ((0, QB.g)(this, XQ), (0, QB.g)(this, ZQ, !1)), AB.set(this, ((0, QB.g)(this, AQ), (0, QB.g)(this, TQ, void 0))), this._disableLighting = ((0, QB.g)(this, PQ), (0, QB.g)(this, WQ, !1)), TB.set(this, ((0, QB.g)(this, eQ), (0, QB.g)(this, lQ, void 0))), this._useObjectSpaceNormalMap = ((0, QB.g)(this, wQ), (0, QB.g)(this, xQ, !1)), PB.set(this, ((0, QB.g)(this, KQ), (0, QB.g)(this, CQ, void 0))), this._useParallax = ((0, QB.g)(this, cQ), (0, QB.g)(this, bQ, !1)), WB.set(this, ((0, QB.g)(this, vQ), (0, QB.g)(this, RQ, void 0))), this._useParallaxOcclusion = ((0, QB.g)(this, OQ), (0, QB.g)(this, Bn, !1)), eB.set(this, ((0, QB.g)(this, jn), (0, QB.g)(this, zn, void 0))), this.parallaxScaleBias = ((0, QB.g)(this, Qn), (0, QB.g)(this, nn, .05)), this._roughness = ((0, QB.g)(this, dn), (0, QB.g)(this, In, 0)), lB.set(this, ((0, QB.g)(this, Nn), (0, QB.g)(this, un, void 0))), this.indexOfRefraction = ((0, QB.g)(this, Un), (0, QB.g)(this, an, .98)), this.invertRefractionY = ((0, QB.g)(this, pn), (0, QB.g)(this, rn, !0)), this.alphaCutOff = ((0, QB.g)(this, sn), (0, QB.g)(this, Jn, .4)), this._useLightmapAsShadowmap = ((0, QB.g)(this, mn), (0, QB.g)(this, yn, !1)), wB.set(this, ((0, QB.g)(this, kn), (0, QB.g)(this, Gn, void 0))), this._diffuseFresnelParameters = ((0, QB.g)(this, Ln), (0, QB.g)(this, gn, void 0)), xB.set(this, ((0, QB.g)(this, tn), (0, QB.g)(this, Sn, void 0))), this._opacityFresnelParameters = ((0, QB.g)(this, Mn), (0, QB.g)(this, En, void 0)), KB.set(this, ((0, QB.g)(this, qn), (0, QB.g)(this, fn, void 0))), this._reflectionFresnelParameters = ((0, QB.g)(this, Hn), (0, QB.g)(this, Dn, void 0)), CB.set(this, ((0, QB.g)(this, Fn), (0, QB.g)(this, Yn, void 0))), this._refractionFresnelParameters = ((0, QB.g)(this, Vn), (0, QB.g)(this, hn, void 0)), cB.set(this, ((0, QB.g)(this, Xn), (0, QB.g)(this, Zn, void 0))), this._emissiveFresnelParameters = ((0, QB.g)(this, An), (0, QB.g)(this, Tn, void 0)), bB.set(this, ((0, QB.g)(this, Pn), (0, QB.g)(this, Wn, void 0))), this._useReflectionFresnelFromSpecular = ((0, QB.g)(this, en), (0, QB.g)(this, wn, !1)), vB.set(this, ((0, QB.g)(this, xn), (0, QB.g)(this, Kn, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, QB.g)(this, Cn), (0, QB.g)(this, cn, !1)), RB.set(this, ((0, QB.g)(this, bn), (0, QB.g)(this, vn, void 0))), this._maxSimultaneousLights = ((0, QB.g)(this, Rn), (0, QB.g)(this, On, 4)), OB.set(this, ((0, QB.g)(this, Bd), (0, QB.g)(this, jd, void 0))), this._invertNormalMapX = ((0, QB.g)(this, zd), (0, QB.g)(this, Qd, !1)), Bj.set(this, ((0, QB.g)(this, nd), (0, QB.g)(this, dd, void 0))), this._invertNormalMapY = ((0, QB.g)(this, Id), (0, QB.g)(this, Nd, !1)), jj.set(this, ((0, QB.g)(this, ud), (0, QB.g)(this, Ud, void 0))), this._twoSidedLighting = ((0, QB.g)(this, pd), (0, QB.g)(this, rd, !1)), zj.set(this, ((0, QB.g)(this, sd), (0, QB.g)(this, Jd, void 0))), this._applyDecalMapAfterDetailMap = ((0, QB.g)(this, md), (0, QB.g)(this, yd, !1)), Qj.set(this, ((0, QB.g)(this, kd), (0, QB.g)(this, Gd, void 0))), this._vertexPullingMetadata = ((0, QB.g)(this, Ld), null), this._renderTargets = new dB.i(16), this._globalAmbientColor = new NB.d(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new kB.e(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new UB.e, this.getRenderTargetTextures = () => (this._renderTargets.reset(), BB.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), BB.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(BB.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(BB.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === rB.b.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== rB.b.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(jB, zB) {
            let QB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const nB = zB._drawWrapper;
            if (nB.effect && this.isFrozen && nB._wasPreviouslyReady && nB._wasPreviouslyUsingInstances === QB) return !0;
            zB.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), zB.materialDefines = new FB(this._eventInfo.defineNames));
            const dB = this.aY(),
              IB = zB.materialDefines;
            if (this._isReadyForSubMesh(zB)) return !0;
            const NB = dB.wJ();
            if (IB._needNormals = (0, gB.ab)(dB, jB, IB, !0, this._maxSimultaneousLights, this._disableLighting), !(0, gB.c)(dB, jB, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, gB.gb)(dB, IB);
            const aB = this.needAlphaBlendingForMesh(jB) && this.aY().useOrderIndependentTransparency;
            if ((0, gB.lb)(dB, IB, this.canRenderToMRT && !aB), (0, gB.hb)(dB, IB, aB), MB.c.PrepareDefines(NB.currentRenderPassId, jB, IB), IB._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, IB._needUVs = !1;
              for (let BB = 1; BB <= 6; ++BB) IB["MAINUV" + BB] = !1;
              if (dB.texturesEnabled) {
                if (IB.DIFFUSEDIRECTUV = 0, IB.BUMPDIRECTUV = 0, IB.AMBIENTDIRECTUV = 0, IB.OPACITYDIRECTUV = 0, IB.EMISSIVEDIRECTUV = 0, IB.SPECULARDIRECTUV = 0, IB.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && BB.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, gB.cb)(this._diffuseTexture, IB, "DIFFUSE")
                } else IB.DIFFUSE = !1;
                if (this._ambientTexture && BB.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, gB.cb)(this._ambientTexture, IB, "AMBIENT")
                } else IB.AMBIENT = !1;
                if (this._opacityTexture && BB.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, gB.cb)(this._opacityTexture, IB, "OPACITY"), IB.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else IB.OPACITY = !1;
                if (this._reflectionTexture && BB.ReflectionTextureEnabled ? (IB.ROUGHNESS = this._roughness > 0, IB.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (IB.ROUGHNESS = !1, IB.REFLECTIONOVERALPHA = !1), !(0, gB.Y)(dB, this._reflectionTexture, IB)) return !1;
                if (this._emissiveTexture && BB.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, gB.cb)(this._emissiveTexture, IB, "EMISSIVE")
                } else IB.EMISSIVE = !1;
                if (this._lightmapTexture && BB.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, gB.cb)(this._lightmapTexture, IB, "LIGHTMAP"), IB.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, IB.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else IB.LIGHTMAP = !1;
                if (this._specularTexture && BB.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, gB.cb)(this._specularTexture, IB, "SPECULAR"), IB.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else IB.SPECULAR = !1;
                if (dB.wJ().getCaps().standardDerivatives && this._bumpTexture && BB.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, gB.cb)(this._bumpTexture, IB, "BUMP"), IB.PARALLAX = this._useParallax, IB.PARALLAX_RHS = dB.useRightHandedSystem, IB.PARALLAXOCCLUSION = this._useParallaxOcclusion, IB.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else IB.BUMP = !1, IB.PARALLAX = !1, IB.PARALLAX_RHS = !1, IB.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && BB.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  IB._needUVs = !0, IB.REFRACTION = !0, IB.REFRACTIONMAP_3D = this._refractionTexture.isCube, IB.RGBDREFRACTION = this._refractionTexture.isRGBD, IB.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else IB.REFRACTION = !1;
                IB.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else IB.DIFFUSE = !1, IB.AMBIENT = !1, IB.OPACITY = !1, IB.REFLECTION = !1, IB.EMISSIVE = !1, IB.LIGHTMAP = !1, IB.BUMP = !1, IB.REFRACTION = !1;
              IB.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), IB.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, IB.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, IB.SPECULAROVERALPHA = this._useSpecularOverAlpha, IB.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, IB.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, IB.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(jB), IB.TEXTURE_REPETITION_MODE = NB.version > 1 || NB.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = IB, this._eventInfo.subMesh = zB, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (IB._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(IB), IB.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, IB.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (IB._areFresnelDirty && (BB.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (IB.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, IB.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, IB.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, IB.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, IB.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, IB.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, IB._needNormals = !0, IB.FRESNEL = !0) : IB.FRESNEL = !1), IB.AREALIGHTUSED || IB.CLUSTLIGHT_BATCH)
              for (let BB = 0; BB < jB.lightSources.length; BB++)
                if (!jB.lightSources[BB]._isReady()) return !1;
            (0, gB.db)(jB, dB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(jB), IB, this._applyDecalMapAfterDetailMap, this._useVertexPulling, zB.getRenderingMesh(), this._isVertexOutputInvariant), (0, gB.U)(dB, NB, this, IB, QB, null, zB.getRenderingMesh().hasThinInstances), this._eventInfo.defines = IB, this._eventInfo.mesh = jB, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, gB.S)(jB, IB, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let rB = !1;
            if (IB.isDirty) {
              const QB = IB._areLightsDisposed;
              IB.markAsProcessed();
              const nB = new yB.c;
              IB.REFLECTION && nB.addFallback(0, "REFLECTION"), IB.SPECULAR && nB.addFallback(0, "SPECULAR"), IB.BUMP && nB.addFallback(0, "BUMP"), IB.PARALLAX && nB.addFallback(1, "PARALLAX"), IB.PARALLAX_RHS && nB.addFallback(1, "PARALLAX_RHS"), IB.PARALLAXOCCLUSION && nB.addFallback(0, "PARALLAXOCCLUSION"), IB.SPECULAROVERALPHA && nB.addFallback(0, "SPECULAROVERALPHA"), IB.FOG && nB.addFallback(1, "FOG"), IB.POINTSIZE && nB.addFallback(0, "POINTSIZE"), IB.LOGARITHMICDEPTH && nB.addFallback(0, "LOGARITHMICDEPTH"), (0, gB.E)(IB, nB, this._maxSimultaneousLights), IB.SPECULARTERM && nB.addFallback(0, "SPECULARTERM"), IB.DIFFUSEFRESNEL && nB.addFallback(1, "DIFFUSEFRESNEL"), IB.OPACITYFRESNEL && nB.addFallback(2, "OPACITYFRESNEL"), IB.REFLECTIONFRESNEL && nB.addFallback(3, "REFLECTIONFRESNEL"), IB.EMISSIVEFRESNEL && nB.addFallback(4, "EMISSIVEFRESNEL"), IB.FRESNEL && nB.addFallback(4, "FRESNEL"), IB.MULTIVIEW && nB.addFallback(0, "MULTIVIEW");
              const aB = [uB.l.PositionKind];
              IB.NORMAL && aB.push(uB.l.NormalKind), IB.TANGENT && aB.push(uB.l.TangentKind);
              for (let BB = 1; BB <= 6; ++BB) IB["UV" + BB] && aB.push(`uv${1===BB?"":BB}`);
              IB.VERTEXCOLOR && aB.push(uB.l.ColorKind), (0, gB.J)(aB, jB, IB, nB), (0, gB.K)(aB, IB), (0, gB.N)(aB, jB, IB), (0, gB.H)(aB, jB, IB);
              let sB = "default";
              const JB = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                mB = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, gB.rb)(JB, mB, !1);
              const kB = ["Material", "Scene", "Mesh"],
                tB = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: IB.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = nB, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = IB, this._eventInfo.uniforms = JB, this._eventInfo.attributes = aB, this._eventInfo.samplers = mB, this._eventInfo.uniformBuffersNames = kB, this._eventInfo.customCode = void 0, this._eventInfo.mesh = jB, this._eventInfo.indexParameters = tB, this._callbackPluginEventGeneric(128, this._eventInfo), MB.c.AddUniformsAndSamplers(JB, mB), UB.e.AddUniforms(JB), UB.e.AddSamplers(mB), pB.c && (pB.c.PrepareUniforms(JB, IB), pB.c.PrepareSamplers(mB, IB)), (0, gB.vb)({
                  uniformsNames: JB,
                  uniformBuffersNames: kB,
                  samplers: mB,
                  defines: IB,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, GB.c)(JB), this._useVertexPulling) {
                const BB = zB.getRenderingMesh(),
                  jB = BB?.geometry;
                jB && (this._vertexPullingMetadata = (0, LB.d)(jB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, jB) => {
                  JB.push(`vp_${jB}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const SB = {};
              this.customShaderNameResolve && (sB = this.customShaderNameResolve(sB, JB, kB, mB, IB, aB, SB));
              const EB = IB.toString(),
                iB = zB.effect,
                qB = dB.wJ().createEffect(sB, {
                  attributes: aB,
                  uniformsNames: JB,
                  uniformBuffersNames: kB,
                  samplers: mB,
                  defines: EB,
                  fallbacks: nB,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: tB,
                  processFinalCode: SB.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: IB.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: BB._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, NB);
              if (this._eventInfo.customCode = void 0, qB)
                if (this._onEffectCreatedObservable && (HB.effect = qB, HB.subMesh = zB, this._onEffectCreatedObservable.notifyObservers(HB)), this.allowShaderHotSwapping && iB && !qB.isReady()) {
                  if (IB.markAsUnprocessed(), rB = this.isFrozen, QB) return IB._areLightsDisposed = !0, !1
                } else dB.resetCachedMaterial(), zB.setEffect(qB, IB, this._materialContext)
            }
            return !(!zB.effect || !zB.effect.isReady()) && (IB._renderId = dB.getRenderId(), nB._wasPreviouslyReady = !rB, nB._wasPreviouslyUsingInstances = QB, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const BB = this._uniformBuffer;
            BB.addUniform("diffuseLeftColor", 4), BB.addUniform("diffuseRightColor", 4), BB.addUniform("opacityParts", 4), BB.addUniform("reflectionLeftColor", 4), BB.addUniform("reflectionRightColor", 4), BB.addUniform("refractionLeftColor", 4), BB.addUniform("refractionRightColor", 4), BB.addUniform("emissiveLeftColor", 4), BB.addUniform("emissiveRightColor", 4), BB.addUniform("vDiffuseInfos", 2), BB.addUniform("vAmbientInfos", 2), BB.addUniform("vOpacityInfos", 2), BB.addUniform("vEmissiveInfos", 2), BB.addUniform("vLightmapInfos", 2), BB.addUniform("vSpecularInfos", 2), BB.addUniform("vBumpInfos", 3), BB.addUniform("diffuseMatrix", 16), BB.addUniform("ambientMatrix", 16), BB.addUniform("opacityMatrix", 16), BB.addUniform("emissiveMatrix", 16), BB.addUniform("lightmapMatrix", 16), BB.addUniform("specularMatrix", 16), BB.addUniform("bumpMatrix", 16), BB.addUniform("vTangentSpaceParams", 2), BB.addUniform("pointSize", 1), BB.addUniform("alphaCutOff", 1), BB.addUniform("refractionMatrix", 16), BB.addUniform("vRefractionInfos", 4), BB.addUniform("vRefractionPosition", 3), BB.addUniform("vRefractionSize", 3), BB.addUniform("vSpecularColor", 4), BB.addUniform("vEmissiveColor", 3), BB.addUniform("vDiffuseColor", 4), BB.addUniform("vAmbientColor", 3), BB.addUniform("cameraInfo", 4), BB.addUniform("vTextureRepetitionHexTilingParams", 4), (0, gB.nb)(BB, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(jB, zB, QB) {
            const nB = this.aY(),
              dB = QB.materialDefines;
            if (!dB) return;
            const uB = QB.effect;
            if (!uB) return;
            this._activeEffect = uB, zB.getMeshUniformBuffer().bindToEffect(uB, "Mesh"), zB.transferToEffect(jB), this._uniformBuffer.bindToEffect(uB, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, nB, zB, jB, this.isFrozen), MB.c.Bind(nB.wJ().currentRenderPassId, this._activeEffect, zB, jB, this);
            const UB = nB.activeCamera;
            UB ? this._uniformBuffer.updateFloat4("cameraInfo", UB.minZ, UB.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const aB = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", aB[0], aB[1], aB[2], aB[3]), this._eventInfo.subMesh = QB, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), dB.OBJECTSPACE_NORMALMAP && (jB.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const pB = this._mustRebind(nB, uB, QB, zB.visibility),
              rB = nB.wJ()._features.needToAlwaysBindUniformBuffers;
            (0, gB.f)(zB, uB), this._vertexPullingMetadata && (0, LB.c)(uB, this._vertexPullingMetadata);
            const sB = this._uniformBuffer;
            if (pB) {
              if (this.bindViewProjection(uB), !sB.useUbo || !this.isFrozen || !sB.isSync || QB._drawWrapper._forceRebindOnNextCall) {
                if (BB.FresnelEnabled && dB.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (sB.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), sB.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const BB = NB.o.Color3[0];
                    BB.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), sB.updateColor4("opacityParts", BB, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (sB.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), sB.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (sB.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), sB.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (sB.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), sB.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (dB.ALPHATEST && sB.updateFloat("alphaCutOff", this.alphaCutOff), nB.texturesEnabled && (this._diffuseTexture && BB.DiffuseTextureEnabled && (sB.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, gB.A)(this._diffuseTexture, sB, "diffuse")), this._ambientTexture && BB.AmbientTextureEnabled && (sB.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, gB.A)(this._ambientTexture, sB, "ambient")), this._opacityTexture && BB.OpacityTextureEnabled && (sB.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, gB.A)(this._opacityTexture, sB, "opacity")), (0, gB.n)(nB, dB, sB, NB.d.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && BB.ReflectionTextureEnabled || sB.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && BB.EmissiveTextureEnabled && (sB.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, gB.A)(this._emissiveTexture, sB, "emissive")), this._lightmapTexture && BB.LightmapTextureEnabled && (sB.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, gB.A)(this._lightmapTexture, sB, "lightmap")), this._specularTexture && BB.SpecularTextureEnabled && (sB.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, gB.A)(this._specularTexture, sB, "specular")), this._bumpTexture && nB.wJ().getCaps().standardDerivatives && BB.BumpTextureEnabled && (sB.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, gB.A)(this._bumpTexture, sB, "bump"), nB._mirroredCameraPosition ? sB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : sB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && BB.RefractionTextureEnabled)) {
                  let BB = 1;
                  if (this._refractionTexture.isCube || (sB.l_("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (BB = this._refractionTexture.depth)), sB.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, BB, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const BB = this._refractionTexture;
                    sB.updateVector3("vRefractionPosition", BB.boundingBoxPosition), sB.updateVector3("vRefractionSize", BB.boundingBoxSize)
                  }
                }
                this.pointsCloud && sB.updateFloat("pointSize", this.pointSize), sB.updateColor4("vSpecularColor", this.specularColor, this.specularPower), sB.updateColor3("vEmissiveColor", BB.EmissiveTextureEnabled ? this.emissiveColor : NB.d.BlackReadOnly), sB.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), nB.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), sB.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              nB.texturesEnabled && (this._diffuseTexture && BB.DiffuseTextureEnabled && uB.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && BB.AmbientTextureEnabled && uB.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && BB.OpacityTextureEnabled && uB.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && BB.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? uB.setTexture("reflectionCubeSampler", this._reflectionTexture) : uB.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && BB.EmissiveTextureEnabled && uB.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && BB.LightmapTextureEnabled && uB.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && BB.SpecularTextureEnabled && uB.setTexture("specularSampler", this._specularTexture), this._bumpTexture && nB.wJ().getCaps().standardDerivatives && BB.BumpTextureEnabled && uB.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && BB.RefractionTextureEnabled && (this._refractionTexture.isCube ? uB.setTexture("refractionCubeSampler", this._refractionTexture) : uB.setTexture("refraction2DSampler", this._refractionTexture))), this.aY().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(zB) && this.aY().depthPeelingRenderer.bind(uB), this._eventInfo.subMesh = QB, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, GB.g)(uB, this, nB), this.bindEyePosition(uB)
            } else rB && (this._needToBindSceneUbo = !0);
            !pB && this.isFrozen && !rB || !nB.lightsEnabled || this._disableLighting || (0, gB.t)(nB, zB, uB, dB, this._maxSimultaneousLights), !pB && this.isFrozen || ((nB.fogEnabled && zB.applyFog && nB.fogMode !== IB.g.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || zB.receiveShadows || dB.PREPASS || dB.CLUSTLIGHT_BATCH) && this.bindView(uB), (0, gB.j)(nB, zB, uB), dB.NUM_MORPH_INFLUENCERS && (0, gB.y)(zB, uB), dB.BAKED_VERTEX_ANIMATION_TEXTURE && zB.bakedVertexAnimationManager?.bind(uB, dB.INSTANCES), this.useLogarithmicDepth && (0, gB.x)(dB, uB, nB), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(zB, this._activeEffect, QB), sB.update()
          }
          _canBindRunFollower(jB, zB, QB, nB, dB) {
            const IB = jB.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === BB.prototype.isReadyForSubMesh && this.bindForSubMesh === BB.prototype.bindForSubMesh && this._mustRebind === JB.e.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !zB._features.needToAlwaysBindUniformBuffers && !(IB && IB.enabled && IB.currentRTisSceneRT) && !MB.c._Configurations[zB.currentRenderPassId] && !nB.materialDefines?.OBJECTSPACE_NORMALMAP && !QB.skeleton && !dB._bonesComputationForcedToCPU
          }
          _bindRunFollower(BB, jB, zB, QB) {
            this._activeEffect = QB, jB.getMeshUniformBuffer().bindToEffect(QB, "Mesh"), jB.transferToEffect(BB);
            const nB = this._uniformBuffer;
            nB.bindToEffect(QB, "Material");
            const dB = this._scene.activeCamera;
            dB ? nB.updateFloat4("cameraInfo", dB.minZ, dB.maxZ, 0, 0) : nB.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const IB = this.textureRepetitionHexTilingParams;
            nB.updateFloat4("vTextureRepetitionHexTilingParams", IB[0], IB[1], IB[2], IB[3]), this._afterBind(jB, QB, zB), nB.update()
          }
          getAnimatables() {
            const BB = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && BB.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && BB.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && BB.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && BB.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && BB.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && BB.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && BB.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && BB.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && BB.push(this._refractionTexture), BB
          }
          getActiveTextures() {
            const BB = super.getActiveTextures();
            return this._diffuseTexture && BB.push(this._diffuseTexture), this._ambientTexture && BB.push(this._ambientTexture), this._opacityTexture && BB.push(this._opacityTexture), this._reflectionTexture && BB.push(this._reflectionTexture), this._emissiveTexture && BB.push(this._emissiveTexture), this._specularTexture && BB.push(this._specularTexture), this._bumpTexture && BB.push(this._bumpTexture), this._lightmapTexture && BB.push(this._lightmapTexture), this._refractionTexture && BB.push(this._refractionTexture), BB
          }
          hasTexture(BB) {
            return !!super.hasTexture(BB) || (this._diffuseTexture === BB || (this._ambientTexture === BB || (this._opacityTexture === BB || (this._reflectionTexture === BB || (this._emissiveTexture === BB || (this._specularTexture === BB || (this._bumpTexture === BB || (this._lightmapTexture === BB || this._refractionTexture === BB))))))))
          }
          dispose(BB, jB) {
            jB && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(BB, jB)
          }
          clone(jB) {
            let zB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const nB = tB.b.Clone((() => new BB(jB, this.aY())), this, {
              cloneTexturesOnlyOnce: zB
            });
            return nB.name = jB, nB.id = jB, this.stencil.copyTo(nB.stencil), this._clonePlugins(nB, QB), nB
          }
          static Parse(jB, zB, QB) {
            const nB = tB.b.Parse((() => new BB(jB.name, zB)), jB, zB, QB);
            return jB.stencil && nB.stencil.parse(jB.stencil, zB, QB), rB.b._ParsePlugins(jB, nB, zB, QB), nB
          }
          static get DiffuseTextureEnabled() {
            return mB.d.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(BB) {
            mB.d.DiffuseTextureEnabled = BB
          }
          static get DetailTextureEnabled() {
            return mB.d.DetailTextureEnabled
          }
          static set DetailTextureEnabled(BB) {
            mB.d.DetailTextureEnabled = BB
          }
          static get AmbientTextureEnabled() {
            return mB.d.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(BB) {
            mB.d.AmbientTextureEnabled = BB
          }
          static get OpacityTextureEnabled() {
            return mB.d.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(BB) {
            mB.d.OpacityTextureEnabled = BB
          }
          static get ReflectionTextureEnabled() {
            return mB.d.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(BB) {
            mB.d.ReflectionTextureEnabled = BB
          }
          static get EmissiveTextureEnabled() {
            return mB.d.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(BB) {
            mB.d.EmissiveTextureEnabled = BB
          }
          static get SpecularTextureEnabled() {
            return mB.d.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(BB) {
            mB.d.SpecularTextureEnabled = BB
          }
          static get BumpTextureEnabled() {
            return mB.d.BumpTextureEnabled
          }
          static set BumpTextureEnabled(BB) {
            mB.d.BumpTextureEnabled = BB
          }
          static get LightmapTextureEnabled() {
            return mB.d.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(BB) {
            mB.d.LightmapTextureEnabled = BB
          }
          static get RefractionTextureEnabled() {
            return mB.d.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(BB) {
            mB.d.RefractionTextureEnabled = BB
          }
          static get ColorGradingTextureEnabled() {
            return mB.d.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(BB) {
            mB.d.ColorGradingTextureEnabled = BB
          }
          static get FresnelEnabled() {
            return mB.d.FresnelEnabled
          }
          static set FresnelEnabled(BB) {
            mB.d.FresnelEnabled = BB
          }
        }, jB = new WeakMap, aB = new WeakMap, sB = new WeakMap, EB = new WeakMap, iB = new WeakMap, qB = new WeakMap, fB = new WeakMap, oB = new WeakMap, DB = new WeakMap, VB = new WeakMap, hB = new WeakMap, XB = new WeakMap, ZB = new WeakMap, AB = new WeakMap, TB = new WeakMap, PB = new WeakMap, WB = new WeakMap, eB = new WeakMap, lB = new WeakMap, wB = new WeakMap, xB = new WeakMap, KB = new WeakMap, CB = new WeakMap, cB = new WeakMap, bB = new WeakMap, vB = new WeakMap, RB = new WeakMap, OB = new WeakMap, Bj = new WeakMap, jj = new WeakMap, zj = new WeakMap, Qj = new WeakMap, (() => {
          const jB = "function" === typeof Symbol && Symbol.metadata ? Object.create(iz[Symbol.metadata] ?? null) : void 0;
          nj = [(0, nB.v)("diffuseTexture")], dj = [(0, nB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ij = [(0, nB.v)("ambientTexture")], Nj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], uj = [(0, nB.v)("opacityTexture")], Uj = [(0, nB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], aj = [(0, nB.v)("reflectionTexture")], pj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], rj = [(0, nB.v)("emissiveTexture")], sj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], Jj = [(0, nB.v)("specularTexture")], mj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], yj = [(0, nB.v)("bumpTexture")], kj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], Gj = [(0, nB.v)("lightmapTexture")], Lj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], gj = [(0, nB.v)("refractionTexture")], tj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], Sj = [(0, nB.i)("ambient")], Mj = [(0, nB.i)("diffuse")], Ej = [(0, nB.i)("specular")], ij = [(0, nB.i)("emissive")], qj = [(0, nB.A)()], fj = [(0, nB.A)("useAlphaFromDiffuseTexture")], oj = [() => ({
            init(BB) {
              return void 0 === BB && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = BB), BB
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(BB) {
              this._useAlphaFromDiffuseTexture = BB
            }
          })], Hj = [(0, nB.A)("useEmissiveAsIllumination")], Dj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], Fj = [(0, nB.A)("linkEmissiveWithDiffuse")], Yj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], Vj = [(0, nB.A)("useSpecularOverAlpha")], hj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], Xj = [(0, nB.A)("useReflectionOverAlpha")], Zj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], Aj = [(0, nB.A)("disableLighting")], Tj = [(0, nB.e)("_markAllSubMeshesAsLightsDirty")], Pj = [(0, nB.A)("useObjectSpaceNormalMap")], Wj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], ej = [(0, nB.A)("useParallax")], lj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], wj = [(0, nB.A)("useParallaxOcclusion")], xj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], Kj = [(0, nB.A)()], Cj = [(0, nB.A)("roughness")], cj = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], bj = [(0, nB.A)()], vj = [(0, nB.A)()], Rj = [(0, nB.A)()], Oj = [(0, nB.A)("useLightmapAsShadowmap")], Bz = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], jz = [(0, nB.p)("diffuseFresnelParameters")], zz = [(0, nB.e)("_markAllSubMeshesAsFresnelDirty")], Qz = [(0, nB.p)("opacityFresnelParameters")], nz = [(0, nB.e)("_markAllSubMeshesAsFresnelAndMiscDirty")], dz = [(0, nB.p)("reflectionFresnelParameters")], Iz = [(0, nB.e)("_markAllSubMeshesAsFresnelDirty")], Nz = [(0, nB.p)("refractionFresnelParameters")], uz = [(0, nB.e)("_markAllSubMeshesAsFresnelDirty")], Uz = [(0, nB.p)("emissiveFresnelParameters")], az = [(0, nB.e)("_markAllSubMeshesAsFresnelDirty")], pz = [(0, nB.A)("useReflectionFresnelFromSpecular")], rz = [(0, nB.e)("_markAllSubMeshesAsFresnelDirty")], sz = [(0, nB.A)("useGlossinessFromSpecularMapAlpha")], Jz = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], mz = [(0, nB.A)("maxSimultaneousLights")], yz = [(0, nB.e)("_markAllSubMeshesAsLightsDirty")], kz = [(0, nB.A)("invertNormalMapX")], Gz = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], Lz = [(0, nB.A)("invertNormalMapY")], gz = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], tz = [(0, nB.A)("twoSidedLighting")], Sz = [(0, nB.e)("_markAllSubMeshesAsTexturesDirty")], Mz = [(0, nB.A)("applyDecalMapAfterDetailMap")], Ez = [(0, nB.e)("_markAllSubMeshesAsMiscDirty")], (0, QB.e)(BB, null, dj, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "diffuseTexture" in BB,
              get: BB => BB.diffuseTexture,
              set: (BB, jB) => {
                BB.diffuseTexture = jB
              }
            },
            metadata: jB
          }, oz, Hz), (0, QB.e)(BB, null, Nj, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "ambientTexture" in BB,
              get: BB => BB.ambientTexture,
              set: (BB, jB) => {
                BB.ambientTexture = jB
              }
            },
            metadata: jB
          }, Yz, Vz), (0, QB.e)(BB, null, Uj, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "opacityTexture" in BB,
              get: BB => BB.opacityTexture,
              set: (BB, jB) => {
                BB.opacityTexture = jB
              }
            },
            metadata: jB
          }, Zz, Az), (0, QB.e)(BB, null, pj, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "reflectionTexture" in BB,
              get: BB => BB.reflectionTexture,
              set: (BB, jB) => {
                BB.reflectionTexture = jB
              }
            },
            metadata: jB
          }, Wz, ez), (0, QB.e)(BB, null, sj, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissiveTexture" in BB,
              get: BB => BB.emissiveTexture,
              set: (BB, jB) => {
                BB.emissiveTexture = jB
              }
            },
            metadata: jB
          }, xz, Kz), (0, QB.e)(BB, null, mj, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularTexture" in BB,
              get: BB => BB.specularTexture,
              set: (BB, jB) => {
                BB.specularTexture = jB
              }
            },
            metadata: jB
          }, bz, vz), (0, QB.e)(BB, null, kj, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "bumpTexture" in BB,
              get: BB => BB.bumpTexture,
              set: (BB, jB) => {
                BB.bumpTexture = jB
              }
            },
            metadata: jB
          }, BQ, jQ), (0, QB.e)(BB, null, Lj, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "lightmapTexture" in BB,
              get: BB => BB.lightmapTexture,
              set: (BB, jB) => {
                BB.lightmapTexture = jB
              }
            },
            metadata: jB
          }, nQ, dQ), (0, QB.e)(BB, null, tj, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "refractionTexture" in BB,
              get: BB => BB.refractionTexture,
              set: (BB, jB) => {
                BB.refractionTexture = jB
              }
            },
            metadata: jB
          }, uQ, UQ), (0, QB.e)(BB, null, oj, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "useAlphaFromDiffuseTexture" in BB,
              get: BB => BB.useAlphaFromDiffuseTexture,
              set: (BB, jB) => {
                BB.useAlphaFromDiffuseTexture = jB
              }
            },
            metadata: jB
          }, SQ, MQ), (0, QB.e)(BB, null, Dj, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: BB => "useEmissiveAsIllumination" in BB,
              get: BB => BB.useEmissiveAsIllumination,
              set: (BB, jB) => {
                BB.useEmissiveAsIllumination = jB
              }
            },
            metadata: jB
          }, qQ, fQ), (0, QB.e)(BB, null, Yj, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: BB => "linkEmissiveWithDiffuse" in BB,
              get: BB => BB.linkEmissiveWithDiffuse,
              set: (BB, jB) => {
                BB.linkEmissiveWithDiffuse = jB
              }
            },
            metadata: jB
          }, DQ, FQ), (0, QB.e)(BB, null, hj, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "useSpecularOverAlpha" in BB,
              get: BB => BB.useSpecularOverAlpha,
              set: (BB, jB) => {
                BB.useSpecularOverAlpha = jB
              }
            },
            metadata: jB
          }, hQ, XQ), (0, QB.e)(BB, null, Zj, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "useReflectionOverAlpha" in BB,
              get: BB => BB.useReflectionOverAlpha,
              set: (BB, jB) => {
                BB.useReflectionOverAlpha = jB
              }
            },
            metadata: jB
          }, TQ, PQ), (0, QB.e)(BB, null, Tj, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "disableLighting" in BB,
              get: BB => BB.disableLighting,
              set: (BB, jB) => {
                BB.disableLighting = jB
              }
            },
            metadata: jB
          }, lQ, wQ), (0, QB.e)(BB, null, Wj, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "useObjectSpaceNormalMap" in BB,
              get: BB => BB.useObjectSpaceNormalMap,
              set: (BB, jB) => {
                BB.useObjectSpaceNormalMap = jB
              }
            },
            metadata: jB
          }, CQ, cQ), (0, QB.e)(BB, null, lj, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: BB => "useParallax" in BB,
              get: BB => BB.useParallax,
              set: (BB, jB) => {
                BB.useParallax = jB
              }
            },
            metadata: jB
          }, RQ, OQ), (0, QB.e)(BB, null, xj, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "useParallaxOcclusion" in BB,
              get: BB => BB.useParallaxOcclusion,
              set: (BB, jB) => {
                BB.useParallaxOcclusion = jB
              }
            },
            metadata: jB
          }, zn, Qn), (0, QB.e)(BB, null, cj, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "roughness" in BB,
              get: BB => BB.roughness,
              set: (BB, jB) => {
                BB.roughness = jB
              }
            },
            metadata: jB
          }, un, Un), (0, QB.e)(BB, null, Bz, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: BB => "useLightmapAsShadowmap" in BB,
              get: BB => BB.useLightmapAsShadowmap,
              set: (BB, jB) => {
                BB.useLightmapAsShadowmap = jB
              }
            },
            metadata: jB
          }, Gn, Ln), (0, QB.e)(BB, null, zz, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "diffuseFresnelParameters" in BB,
              get: BB => BB.diffuseFresnelParameters,
              set: (BB, jB) => {
                BB.diffuseFresnelParameters = jB
              }
            },
            metadata: jB
          }, Sn, Mn), (0, QB.e)(BB, null, nz, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "opacityFresnelParameters" in BB,
              get: BB => BB.opacityFresnelParameters,
              set: (BB, jB) => {
                BB.opacityFresnelParameters = jB
              }
            },
            metadata: jB
          }, fn, Hn), (0, QB.e)(BB, null, Iz, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "reflectionFresnelParameters" in BB,
              get: BB => BB.reflectionFresnelParameters,
              set: (BB, jB) => {
                BB.reflectionFresnelParameters = jB
              }
            },
            metadata: jB
          }, Yn, Vn), (0, QB.e)(BB, null, uz, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "refractionFresnelParameters" in BB,
              get: BB => BB.refractionFresnelParameters,
              set: (BB, jB) => {
                BB.refractionFresnelParameters = jB
              }
            },
            metadata: jB
          }, Zn, An), (0, QB.e)(BB, null, az, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissiveFresnelParameters" in BB,
              get: BB => BB.emissiveFresnelParameters,
              set: (BB, jB) => {
                BB.emissiveFresnelParameters = jB
              }
            },
            metadata: jB
          }, Wn, en), (0, QB.e)(BB, null, rz, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: BB => "useReflectionFresnelFromSpecular" in BB,
              get: BB => BB.useReflectionFresnelFromSpecular,
              set: (BB, jB) => {
                BB.useReflectionFresnelFromSpecular = jB
              }
            },
            metadata: jB
          }, Kn, Cn), (0, QB.e)(BB, null, Jz, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "useGlossinessFromSpecularMapAlpha" in BB,
              get: BB => BB.useGlossinessFromSpecularMapAlpha,
              set: (BB, jB) => {
                BB.useGlossinessFromSpecularMapAlpha = jB
              }
            },
            metadata: jB
          }, vn, Rn), (0, QB.e)(BB, null, yz, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: BB => "maxSimultaneousLights" in BB,
              get: BB => BB.maxSimultaneousLights,
              set: (BB, jB) => {
                BB.maxSimultaneousLights = jB
              }
            },
            metadata: jB
          }, jd, zd), (0, QB.e)(BB, null, Gz, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertNormalMapX" in BB,
              get: BB => BB.invertNormalMapX,
              set: (BB, jB) => {
                BB.invertNormalMapX = jB
              }
            },
            metadata: jB
          }, dd, Id), (0, QB.e)(BB, null, gz, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertNormalMapY" in BB,
              get: BB => BB.invertNormalMapY,
              set: (BB, jB) => {
                BB.invertNormalMapY = jB
              }
            },
            metadata: jB
          }, Ud, pd), (0, QB.e)(BB, null, Sz, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "twoSidedLighting" in BB,
              get: BB => BB.twoSidedLighting,
              set: (BB, jB) => {
                BB.twoSidedLighting = jB
              }
            },
            metadata: jB
          }, Jd, md), (0, QB.e)(BB, null, Ez, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "applyDecalMapAfterDetailMap" in BB,
              get: BB => BB.applyDecalMapAfterDetailMap,
              set: (BB, jB) => {
                BB.applyDecalMapAfterDetailMap = jB
              }
            },
            metadata: jB
          }, Gd, Ld), (0, QB.e)(null, null, nj, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_diffuseTexture" in BB,
              get: BB => BB._diffuseTexture,
              set: (BB, jB) => {
                BB._diffuseTexture = jB
              }
            },
            metadata: jB
          }, qz, fz), (0, QB.e)(null, null, Ij, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_ambientTexture" in BB,
              get: BB => BB._ambientTexture,
              set: (BB, jB) => {
                BB._ambientTexture = jB
              }
            },
            metadata: jB
          }, Dz, Fz), (0, QB.e)(null, null, uj, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_opacityTexture" in BB,
              get: BB => BB._opacityTexture,
              set: (BB, jB) => {
                BB._opacityTexture = jB
              }
            },
            metadata: jB
          }, hz, Xz), (0, QB.e)(null, null, aj, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_reflectionTexture" in BB,
              get: BB => BB._reflectionTexture,
              set: (BB, jB) => {
                BB._reflectionTexture = jB
              }
            },
            metadata: jB
          }, Tz, Pz), (0, QB.e)(null, null, rj, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_emissiveTexture" in BB,
              get: BB => BB._emissiveTexture,
              set: (BB, jB) => {
                BB._emissiveTexture = jB
              }
            },
            metadata: jB
          }, lz, wz), (0, QB.e)(null, null, Jj, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_specularTexture" in BB,
              get: BB => BB._specularTexture,
              set: (BB, jB) => {
                BB._specularTexture = jB
              }
            },
            metadata: jB
          }, Cz, cz), (0, QB.e)(null, null, yj, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_bumpTexture" in BB,
              get: BB => BB._bumpTexture,
              set: (BB, jB) => {
                BB._bumpTexture = jB
              }
            },
            metadata: jB
          }, Rz, Oz), (0, QB.e)(null, null, Gj, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_lightmapTexture" in BB,
              get: BB => BB._lightmapTexture,
              set: (BB, jB) => {
                BB._lightmapTexture = jB
              }
            },
            metadata: jB
          }, zQ, QQ), (0, QB.e)(null, null, gj, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_refractionTexture" in BB,
              get: BB => BB._refractionTexture,
              set: (BB, jB) => {
                BB._refractionTexture = jB
              }
            },
            metadata: jB
          }, IQ, NQ), (0, QB.e)(null, null, Sj, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "ambientColor" in BB,
              get: BB => BB.ambientColor,
              set: (BB, jB) => {
                BB.ambientColor = jB
              }
            },
            metadata: jB
          }, aQ, pQ), (0, QB.e)(null, null, Mj, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "diffuseColor" in BB,
              get: BB => BB.diffuseColor,
              set: (BB, jB) => {
                BB.diffuseColor = jB
              }
            },
            metadata: jB
          }, rQ, sQ), (0, QB.e)(null, null, Ej, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularColor" in BB,
              get: BB => BB.specularColor,
              set: (BB, jB) => {
                BB.specularColor = jB
              }
            },
            metadata: jB
          }, JQ, mQ), (0, QB.e)(null, null, ij, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissiveColor" in BB,
              get: BB => BB.emissiveColor,
              set: (BB, jB) => {
                BB.emissiveColor = jB
              }
            },
            metadata: jB
          }, yQ, kQ), (0, QB.e)(null, null, qj, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularPower" in BB,
              get: BB => BB.specularPower,
              set: (BB, jB) => {
                BB.specularPower = jB
              }
            },
            metadata: jB
          }, GQ, LQ), (0, QB.e)(null, null, fj, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useAlphaFromDiffuseTexture" in BB,
              get: BB => BB._useAlphaFromDiffuseTexture,
              set: (BB, jB) => {
                BB._useAlphaFromDiffuseTexture = jB
              }
            },
            metadata: jB
          }, gQ, tQ), (0, QB.e)(null, null, Hj, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useEmissiveAsIllumination" in BB,
              get: BB => BB._useEmissiveAsIllumination,
              set: (BB, jB) => {
                BB._useEmissiveAsIllumination = jB
              }
            },
            metadata: jB
          }, EQ, iQ), (0, QB.e)(null, null, Fj, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: BB => "_linkEmissiveWithDiffuse" in BB,
              get: BB => BB._linkEmissiveWithDiffuse,
              set: (BB, jB) => {
                BB._linkEmissiveWithDiffuse = jB
              }
            },
            metadata: jB
          }, oQ, HQ), (0, QB.e)(null, null, Vj, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useSpecularOverAlpha" in BB,
              get: BB => BB._useSpecularOverAlpha,
              set: (BB, jB) => {
                BB._useSpecularOverAlpha = jB
              }
            },
            metadata: jB
          }, YQ, VQ), (0, QB.e)(null, null, Xj, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useReflectionOverAlpha" in BB,
              get: BB => BB._useReflectionOverAlpha,
              set: (BB, jB) => {
                BB._useReflectionOverAlpha = jB
              }
            },
            metadata: jB
          }, ZQ, AQ), (0, QB.e)(null, null, Aj, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "_disableLighting" in BB,
              get: BB => BB._disableLighting,
              set: (BB, jB) => {
                BB._disableLighting = jB
              }
            },
            metadata: jB
          }, WQ, eQ), (0, QB.e)(null, null, Pj, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useObjectSpaceNormalMap" in BB,
              get: BB => BB._useObjectSpaceNormalMap,
              set: (BB, jB) => {
                BB._useObjectSpaceNormalMap = jB
              }
            },
            metadata: jB
          }, xQ, KQ), (0, QB.e)(null, null, ej, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useParallax" in BB,
              get: BB => BB._useParallax,
              set: (BB, jB) => {
                BB._useParallax = jB
              }
            },
            metadata: jB
          }, bQ, vQ), (0, QB.e)(null, null, wj, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useParallaxOcclusion" in BB,
              get: BB => BB._useParallaxOcclusion,
              set: (BB, jB) => {
                BB._useParallaxOcclusion = jB
              }
            },
            metadata: jB
          }, Bn, jn), (0, QB.e)(null, null, Kj, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: BB => "parallaxScaleBias" in BB,
              get: BB => BB.parallaxScaleBias,
              set: (BB, jB) => {
                BB.parallaxScaleBias = jB
              }
            },
            metadata: jB
          }, nn, dn), (0, QB.e)(null, null, Cj, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "_roughness" in BB,
              get: BB => BB._roughness,
              set: (BB, jB) => {
                BB._roughness = jB
              }
            },
            metadata: jB
          }, In, Nn), (0, QB.e)(null, null, bj, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: BB => "indexOfRefraction" in BB,
              get: BB => BB.indexOfRefraction,
              set: (BB, jB) => {
                BB.indexOfRefraction = jB
              }
            },
            metadata: jB
          }, an, pn), (0, QB.e)(null, null, vj, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertRefractionY" in BB,
              get: BB => BB.invertRefractionY,
              set: (BB, jB) => {
                BB.invertRefractionY = jB
              }
            },
            metadata: jB
          }, rn, sn), (0, QB.e)(null, null, Rj, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: BB => "alphaCutOff" in BB,
              get: BB => BB.alphaCutOff,
              set: (BB, jB) => {
                BB.alphaCutOff = jB
              }
            },
            metadata: jB
          }, Jn, mn), (0, QB.e)(null, null, Oj, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useLightmapAsShadowmap" in BB,
              get: BB => BB._useLightmapAsShadowmap,
              set: (BB, jB) => {
                BB._useLightmapAsShadowmap = jB
              }
            },
            metadata: jB
          }, yn, kn), (0, QB.e)(null, null, jz, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_diffuseFresnelParameters" in BB,
              get: BB => BB._diffuseFresnelParameters,
              set: (BB, jB) => {
                BB._diffuseFresnelParameters = jB
              }
            },
            metadata: jB
          }, gn, tn), (0, QB.e)(null, null, Qz, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_opacityFresnelParameters" in BB,
              get: BB => BB._opacityFresnelParameters,
              set: (BB, jB) => {
                BB._opacityFresnelParameters = jB
              }
            },
            metadata: jB
          }, En, qn), (0, QB.e)(null, null, dz, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_reflectionFresnelParameters" in BB,
              get: BB => BB._reflectionFresnelParameters,
              set: (BB, jB) => {
                BB._reflectionFresnelParameters = jB
              }
            },
            metadata: jB
          }, Dn, Fn), (0, QB.e)(null, null, Nz, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_refractionFresnelParameters" in BB,
              get: BB => BB._refractionFresnelParameters,
              set: (BB, jB) => {
                BB._refractionFresnelParameters = jB
              }
            },
            metadata: jB
          }, hn, Xn), (0, QB.e)(null, null, Uz, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_emissiveFresnelParameters" in BB,
              get: BB => BB._emissiveFresnelParameters,
              set: (BB, jB) => {
                BB._emissiveFresnelParameters = jB
              }
            },
            metadata: jB
          }, Tn, Pn), (0, QB.e)(null, null, pz, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useReflectionFresnelFromSpecular" in BB,
              get: BB => BB._useReflectionFresnelFromSpecular,
              set: (BB, jB) => {
                BB._useReflectionFresnelFromSpecular = jB
              }
            },
            metadata: jB
          }, wn, xn), (0, QB.e)(null, null, sz, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useGlossinessFromSpecularMapAlpha" in BB,
              get: BB => BB._useGlossinessFromSpecularMapAlpha,
              set: (BB, jB) => {
                BB._useGlossinessFromSpecularMapAlpha = jB
              }
            },
            metadata: jB
          }, cn, bn), (0, QB.e)(null, null, mz, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: BB => "_maxSimultaneousLights" in BB,
              get: BB => BB._maxSimultaneousLights,
              set: (BB, jB) => {
                BB._maxSimultaneousLights = jB
              }
            },
            metadata: jB
          }, On, Bd), (0, QB.e)(null, null, kz, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: BB => "_invertNormalMapX" in BB,
              get: BB => BB._invertNormalMapX,
              set: (BB, jB) => {
                BB._invertNormalMapX = jB
              }
            },
            metadata: jB
          }, Qd, nd), (0, QB.e)(null, null, Lz, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: BB => "_invertNormalMapY" in BB,
              get: BB => BB._invertNormalMapY,
              set: (BB, jB) => {
                BB._invertNormalMapY = jB
              }
            },
            metadata: jB
          }, Nd, ud), (0, QB.e)(null, null, tz, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "_twoSidedLighting" in BB,
              get: BB => BB._twoSidedLighting,
              set: (BB, jB) => {
                BB._twoSidedLighting = jB
              }
            },
            metadata: jB
          }, rd, sd), (0, QB.e)(null, null, Mz, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "_applyDecalMapAfterDetailMap" in BB,
              get: BB => BB._applyDecalMapAfterDetailMap,
              set: (BB, jB) => {
                BB._applyDecalMapAfterDetailMap = jB
              }
            },
            metadata: jB
          }, yd, kd), jB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jB
          })
        })(), BB.ForceGLSL = !1, BB._ShaderLoader = new SB.c((() => [Promise.all([zB.e(322), zB.e(321)]).then((() => zB(41957))), Promise.all([zB.e(327), zB.e(323), zB.e(336), zB.e(326)]).then((() => zB(42159)))]), (() => [Promise.all([zB.e(343), zB.e(338)]).then((() => zB(42319))), Promise.all([zB.e(344), zB.e(354), zB.e(340)]).then((() => zB(42523)))])), BB
      })(),
      hB = !1;

    function XB() {
      hB || (hB = !0, (0, pB.e)(), (0, fB.d)("BABYLON.StandardMaterial", VB), IB.g.DefaultMaterialFactory = BB => new VB("default material", BB))
    }
    Object.getOwnPropertyDescriptor(VB.prototype, "decalMap") || Object.defineProperty(VB.prototype, "decalMap", (0, oB.f)("StandardMaterial", "decalMap"))
  },
  40478: (BB, jB, zB) => {
    function QB(BB) {
      return class extends BB {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    zB.d(jB, {
      d: () => QB
    })
  },
  40473: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    class QB {
      constructor(BB, jB) {
        this._webGL = {
          load: BB,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: jB,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(BB) {
        const jB = 1 === BB ? this._webGPU : this._webGL;
        return jB.loaded ? void 0 : async () => {
          await this._loadAsync(jB)
        }
      }
      async _loadAsync(BB) {
        if (BB.loaded) return;
        let jB = BB.loadPromise;
        const zB = null === jB;
        zB && (jB = Promise.all(BB.load()), BB.loadPromise = jB);
        let QB = !1;
        try {
          await jB, QB = !0
        } finally {
          zB && this._completeLoad(BB, QB)
        }
      }
      _completeLoad(BB, jB) {
        BB.loaded = jB, BB.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);