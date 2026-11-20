export const id = 251;
export const ids = [251];
export const modules = {
  39775: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU
    });
    var tU = gU(39382);

    function pU(UU) {
      return class extends UU {
        constructor() {
          super(...arguments);
          const UU = new.target;
          if (!UU[Symbol.metadata]) {
            const RU = Object.getPrototypeOf(UU)?.[Symbol.metadata];
            UU[Symbol.metadata] = RU ? Object.create(RU) : {}
          }
          const RU = (0, tU.c)(UU[Symbol.metadata]);
          RU._imageProcessingConfiguration || (RU._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(UU) {
          this._attachImageProcessingConfiguration(UU), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(UU) {
          UU !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !UU && this.aZ ? this._imageProcessingConfiguration = this.aZ().imageProcessingConfiguration : UU && (this._imageProcessingConfiguration = UU), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(UU) {
          this.imageProcessingConfiguration.colorCurvesEnabled = UU
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(UU) {
          this.imageProcessingConfiguration.colorGradingEnabled = UU
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(UU) {
          this._imageProcessingConfiguration.toneMappingEnabled = UU
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(UU) {
          this._imageProcessingConfiguration.exposure = UU
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(UU) {
          this._imageProcessingConfiguration.contrast = UU
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(UU) {
          this._imageProcessingConfiguration.colorGradingTexture = UU
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(UU) {
          this._imageProcessingConfiguration.colorCurves = UU
        }
      }
    }
  },
  39665: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU,
      c: () => pU
    });
    var tU = gU(39669);

    function pU(UU) {
      return class extends UU {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class EU extends tU.c {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  39744: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => GU
    });
    var tU = gU(39377),
      pU = gU(39676),
      EU = gU(39380),
      PU = gU(39729),
      TU = gU(39669),
      qU = gU(39752),
      KU = gU(39716);
    class cU extends TU.c {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let GU = (() => {
      var UU, RU, gU, TU;
      let GU, jU, uU, CU, hU, QU, eU = qU.b,
        WU = [],
        fU = [],
        xU = [],
        mU = [],
        IU = [],
        JU = [],
        wU = [],
        nU = [],
        bU = [],
        oU = [],
        ZU = [],
        aU = [];
      return UU = class extends eU {
        get texture() {
          return (0, tU.c)(this, RU, "f")
        }
        set texture(UU) {
          (0, tU.e)(this, RU, UU, "f")
        }
        get normalBlendMethod() {
          return (0, tU.c)(this, gU, "f")
        }
        set normalBlendMethod(UU) {
          (0, tU.e)(this, gU, UU, "f")
        }
        get isEnabled() {
          return (0, tU.c)(this, TU, "f")
        }
        set isEnabled(UU) {
          (0, tU.e)(this, TU, UU, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(UU) {
          let EU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(UU, "DetailMap", 140, new cU, EU), this._texture = null, RU.set(this, (0, tU.j)(this, WU, void 0)), this.diffuseBlendLevel = ((0, tU.j)(this, fU), (0, tU.j)(this, xU, 1)), this.roughnessBlendLevel = ((0, tU.j)(this, mU), (0, tU.j)(this, IU, 1)), this.bumpLevel = ((0, tU.j)(this, JU), (0, tU.j)(this, wU, 1)), this._normalBlendMethod = ((0, tU.j)(this, nU), pU.c.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), gU.set(this, (0, tU.j)(this, bU, void 0)), this._isEnabled = ((0, tU.j)(this, oU), !1), TU.set(this, (0, tU.j)(this, ZU, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, tU.j)(this, aU), this._internalMarkAllSubMeshesAsTexturesDirty = UU._dirtyCallbacks[1]
        }
        isReadyForSubMesh(UU, RU, gU) {
          return !this._isEnabled || !(UU._areTexturesDirty && RU.texturesEnabled && gU.getCaps().standardDerivatives && this._texture && PU.b.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(UU, RU) {
          if (this._isEnabled) {
            UU.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const gU = RU.WC();
            UU._areTexturesDirty && (gU.getCaps().standardDerivatives && this._texture && PU.b.DetailTextureEnabled && this._isEnabled ? ((0, KU.T)(this._texture, UU, "DETAIL"), UU.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : UU.DETAIL = !1)
          } else UU.DETAIL = !1
        }
        bindForSubMesh(UU, RU) {
          if (!this._isEnabled) return;
          const gU = this._material.isFrozen;
          UU.useUbo && gU && UU.isSync || this._texture && PU.b.DetailTextureEnabled && (UU.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, KU.x)(this._texture, UU, "detail")), RU.texturesEnabled && this._texture && PU.b.DetailTextureEnabled && UU.setTexture("detailSampler", this._texture)
        }
        hasTexture(UU) {
          return this._texture === UU
        }
        getActiveTextures(UU) {
          this._texture && UU.push(this._texture)
        }
        getAnimatables(UU) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && UU.push(this._texture)
        }
        dispose(UU) {
          UU && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(UU) {
          UU.push("detailSampler")
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
      }, RU = new WeakMap, gU = new WeakMap, TU = new WeakMap, (() => {
        const RU = "function" === typeof Symbol && Symbol.metadata ? Object.create(eU[Symbol.metadata] ?? null) : void 0;
        GU = [(0, EU.D)("detailTexture"), (0, EU.e)("_markAllSubMeshesAsTexturesDirty")], jU = [(0, EU.K)()], uU = [(0, EU.K)()], CU = [(0, EU.K)()], hU = [(0, EU.K)(), (0, EU.e)("_markAllSubMeshesAsTexturesDirty")], QU = [(0, EU.K)(), (0, EU.e)("_markAllSubMeshesAsTexturesDirty")], (0, tU.i)(UU, null, GU, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: UU => "texture" in UU,
            get: UU => UU.texture,
            set: (UU, RU) => {
              UU.texture = RU
            }
          },
          metadata: RU
        }, WU, fU), (0, tU.i)(UU, null, hU, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: UU => "normalBlendMethod" in UU,
            get: UU => UU.normalBlendMethod,
            set: (UU, RU) => {
              UU.normalBlendMethod = RU
            }
          },
          metadata: RU
        }, bU, oU), (0, tU.i)(UU, null, QU, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isEnabled" in UU,
            get: UU => UU.isEnabled,
            set: (UU, RU) => {
              UU.isEnabled = RU
            }
          },
          metadata: RU
        }, ZU, aU), (0, tU.i)(null, null, jU, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: UU => "diffuseBlendLevel" in UU,
            get: UU => UU.diffuseBlendLevel,
            set: (UU, RU) => {
              UU.diffuseBlendLevel = RU
            }
          },
          metadata: RU
        }, xU, mU), (0, tU.i)(null, null, uU, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: UU => "roughnessBlendLevel" in UU,
            get: UU => UU.roughnessBlendLevel,
            set: (UU, RU) => {
              UU.roughnessBlendLevel = RU
            }
          },
          metadata: RU
        }, IU, JU), (0, tU.i)(null, null, CU, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: UU => "bumpLevel" in UU,
            get: UU => UU.bumpLevel,
            set: (UU, RU) => {
              UU.bumpLevel = RU
            }
          },
          metadata: RU
        }, wU, nU), RU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RU
        })
      })(), UU
    })()
  },
  39669: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU
    });
    class tU {
      constructor(UU) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = UU, UU)
          for (const RU in UU) Object.prototype.hasOwnProperty.call(UU, RU) && this._setDefaultValue(RU)
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
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || UU, this._isDirty = !0
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
        for (const UU of Object.keys(this)) "_" !== UU[0] && this._keys.push(UU);
        if (this._externalProperties)
          for (const UU in this._externalProperties) - 1 === this._keys.indexOf(UU) && this._keys.push(UU)
      }
      isEqual(UU) {
        if (this._keys.length !== UU._keys.length) return !1;
        for (let RU = 0; RU < this._keys.length; RU++) {
          const gU = this._keys[RU];
          if (this[gU] !== UU[gU]) return !1
        }
        return !0
      }
      cloneTo(UU) {
        this._keys.length !== UU._keys.length && (UU._keys = this._keys.slice(0));
        for (let RU = 0; RU < this._keys.length; RU++) {
          const gU = this._keys[RU];
          UU[gU] = this[gU]
        }
      }
      reset() {
        for (const UU of this._keys) this._setDefaultValue(UU)
      }
      _setDefaultValue(UU) {
        const RU = this._externalProperties?.[UU]?.type ?? typeof this[UU],
          gU = this._externalProperties?.[UU]?.default;
        switch (RU) {
          case "number":
            this[UU] = gU ?? 0;
            break;
          case "string":
            this[UU] = gU ?? "";
            break;
          default:
            this[UU] = gU ?? !1
        }
      }
      toString() {
        let UU = "";
        for (let RU = 0; RU < this._keys.length; RU++) {
          const gU = this._keys[RU],
            tU = this[gU];
          switch (typeof tU) {
            case "number":
            case "string":
              UU += "#define " + gU + " " + tU + "\n";
              break;
            default:
              tU && (UU += "#define " + gU + "\n")
          }
        }
        return UU
      }
    }
  },
  39766: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU,
      h: () => PU,
      k: () => EU
    });
    var tU, pU = gU(36600);

    function EU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const tU = RU(UU);
      if (!Number.isInteger(tU) || tU < 0 || tU > gU) throw new Error(`Invalid geometry object ID ${tU} for mesh "${UU.name}". Object IDs must be integers between 0 and 0x${gU.toString(16).toUpperCase()}.`);
      return tU
    }

    function PU(UU, RU) {
      const gU = RU(UU);
      if (!Number.isInteger(gU) || gU < 0 || gU > 255 || 0 !== gU && 0 === (63 & gU)) throw new Error(`Invalid geometry mesh-blending tag ${gU} for mesh "${UU.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return gU
    }! function(UU) {
      UU[UU.Zero = 0] = "Zero", UU[UU.One = 1] = "One", UU[UU.MaxViewZ = 2] = "MaxViewZ", UU[UU.NoClear = 3] = "NoClear"
    }(tU || (tU = {}));
    class TU {
      static CreateConfiguration(UU) {
        return TU._Configurations[UU] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: pU.c.Zero(),
          currentViewProjection: pU.c.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, TU._Configurations[UU]
      }
      static DeleteConfiguration(UU) {
        delete TU._Configurations[UU]
      }
      static GetConfiguration(UU) {
        return TU._Configurations[UU]
      }
      static _PrepareConfiguration(UU, RU, gU) {
        const tU = TU._Configurations[UU];
        tU._attachments = RU, tU._colorAttachments = gU, tU._mrtCount = RU.length;
        let pU = "#define PREPASS\n";
        for (const EU of TU.GeometryTextureDescriptions) {
          const UU = tU.defines[EU.defineIndex];
          void 0 !== UU && (pU += `#define ${EU.define}\n#define ${EU.defineIndex} ${UU}\n`)
        }
        tU.objectIdIsRedFormat && (pU += "#define PREPASS_OBJECT_ID_R8\n"), tU._defines = pU + `#define SCENE_MRT_COUNT ${RU.length}\n`
      }
      static _PrepareStringDefines(UU, RU) {
        const gU = TU._Configurations[UU];
        return !!gU?._defines && (RU.push(gU._defines), !0)
      }
      static _BindAttachmentsForEffect(UU, RU) {
        const gU = TU._Configurations[UU.currentRenderPassId];
        return !gU?._attachments || (UU.bindAttachments(RU._multiTarget ? gU._attachments : gU._colorAttachments), RU._multiTarget || void 0 !== gU.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(UU) {
        const RU = TU._Configurations[UU.currentRenderPassId];
        RU?._colorAttachments && UU.bindAttachments(RU._colorAttachments)
      }
      static _BindColorAttachments(UU) {
        const RU = TU._Configurations[UU.currentRenderPassId];
        return !RU?._colorAttachments || (UU.bindAttachments(RU._colorAttachments), void 0 !== RU.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(UU) {
        const RU = TU._Configurations[UU.currentRenderPassId];
        return !RU?._colorAttachments || void 0 !== RU.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(UU, RU) {
        const gU = TU._Configurations[UU.currentRenderPassId];
        if (!gU) return;
        const tU = UU.getAlphaMode(),
          pU = void 0 === gU.defines.PREPASS_COLOR_INDEX || 2 === tU || 1 === tU || 17 === tU;
        RU.setFloat("geometryZeroAlphaDiscard", pU ? 1 : 0)
      }
      static AddUniformsAndSamplers(UU, RU) {
        UU.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(UU, RU) {
        for (const gU of RU)
          if (gU.ZI)
            for (const RU of gU.ZI) RU._removeDrawWrapper(UU)
      }
      static PrepareDefines(UU, RU, gU) {
        if (!gU._arePrePassDirty) return;
        const tU = TU._Configurations[UU];
        if (!tU) return;
        gU.PREPASS = !0;
        let pU = 0;
        for (let EU = 0; EU < TU.GeometryTextureDescriptions.length; EU++) {
          const UU = TU.GeometryTextureDescriptions[EU],
            RU = UU.define,
            PU = UU.defineIndex,
            qU = tU.defines[PU];
          void 0 !== qU ? (gU[RU] = !0, gU[PU] = qU, pU++) : (gU[RU] = !1, delete gU[PU])
        }
        gU.PREPASS_OBJECT_ID_R8 = tU.objectIdIsRedFormat, gU.SCENE_MRT_COUNT = tU._mrtCount ?? pU, gU.BONES_VELOCITY_ENABLED = RU.useBones && RU.computeBonesUsingShaders && RU.skeleton && !RU.skeleton.isUsingTextureForMatrices && -1 === tU.excludedSkinnedMesh.indexOf(RU)
      }
      static Bind(UU, RU, gU, tU, pU) {
        const qU = TU._Configurations[UU];
        if (!qU) return;
        const KU = gU.aZ(),
          cU = KU.WC();
        if (qU.reverseCulling && cU.setStateCullFaceType(KU._mirroredCameraPosition ? pU.cullBackFaces : !pU.cullBackFaces), void 0 !== qU.defines.PREPASS_OBJECT_ID_INDEX) {
          const UU = qU.objectIdIsRedFormat ? 255 : 16777215;
          let tU = gU.uniqueId;
          if (qU.objectIdProvider) tU = EU(gU, qU.objectIdProvider, UU);
          else if (tU > UU) throw new Error(`Invalid geometry object ID ${tU} for mesh "${gU.name}". Object IDs must be integers between 0 and 0x${UU.toString(16).toUpperCase()}.`);
          RU.setFloat("objectId", tU)
        }
        if (void 0 !== qU.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const UU = qU.meshBlendTagProvider ? PU(gU, qU.meshBlendTagProvider) : gU.meshBlendingTag;
          RU.setInt("meshBlendTag", UU)
        }
        if (void 0 !== qU.defines.PREPASS_VELOCITY_INDEX || void 0 !== qU.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const UU = qU._currentWorldMatrices ?? (qU._currentWorldMatrices = {}),
            pU = qU._worldMatrixFrameIds ?? (qU._worldMatrixFrameIds = {});
          if (UU[gU.uniqueId] || (UU[gU.uniqueId] = tU.clone(), qU.previousWorldMatrices[gU.uniqueId] = tU.clone()), pU[gU.uniqueId] !== cU.frameId && (qU.previousWorldMatrices[gU.uniqueId].PgU(UU[gU.uniqueId]), pU[gU.uniqueId] = cU.frameId), UU[gU.uniqueId].PgU(tU), -1 === qU.lastUpdateFrameId ? (qU.lastUpdateFrameId = cU.frameId, qU.previousViewProjection.PgU(KU.getTransformMatrix()), qU.currentViewProjection.PgU(KU.getTransformMatrix())) : qU.currentViewProjection.updateFlag !== KU.getTransformMatrix().updateFlag ? (qU.lastUpdateFrameId = cU.frameId, qU.previousViewProjection.PgU(qU.currentViewProjection), qU.currentViewProjection.PgU(KU.getTransformMatrix())) : qU.lastUpdateFrameId !== cU.frameId && (qU.lastUpdateFrameId = cU.frameId, qU.previousViewProjection.PgU(qU.currentViewProjection)), RU.setMatrix("previousWorld", qU.previousWorldMatrices[gU.uniqueId]), RU.setMatrix("previousViewProjection", qU.previousViewProjection), gU.useBones && gU.computeBonesUsingShaders && gU.skeleton) {
            const UU = gU.skeleton;
            if (!UU.isUsingTextureForMatrices || -1 === RU.getUniformIndex("boneTextureInfo")) {
              const tU = UU.getTransformMatrices(gU);
              tU && (qU.previousBones[gU.uniqueId] || (qU.previousBones[gU.uniqueId] = tU.slice()), RU.setMatrices("mPreviousBones", qU.previousBones[gU.uniqueId]), qU.previousBones[gU.uniqueId].set(tU))
            }
          }
        }
      }
    }
    TU.GeometryTextureDescriptions = [{
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
    }], TU._Configurations = {}
  },
  39752: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => jU,
      f: () => CU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(39265),
      PU = gU(39225);
    const TU = new RegExp("^([gimus]+)!");
    class qU {
      constructor(UU) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = UU, this._scene = UU.aZ(), this._engine = this._scene.WC()
      }
      _addPlugin(UU) {
        for (let tU = 0; tU < this._plugins.length; ++tU)
          if (this._plugins[tU].name === UU.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !UU.isCompatible(this._material.shaderLanguage)) throw `The plugin "${UU.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const RU = UU.getClassName();
        qU._MaterialPluginClassToMainDefine[RU] || (qU._MaterialPluginClassToMainDefine[RU] = "MATERIALPLUGIN_" + ++qU._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (UU, RU) => this._handlePluginEvent(UU, RU), this._plugins.push(UU), this._plugins.sort(((UU, RU) => UU.priority - RU.priority)), this._codeInjectionPoints = {};
        const gU = {};
        gU[qU._MaterialPluginClassToMainDefine[RU]] = {
          type: "boolean",
          default: !0
        };
        for (const tU of this._plugins) tU.collectDefines(gU), this._collectPointNames("vertex", tU.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", tU.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = gU, !0
      }
      _activatePlugin(UU) {
        -1 === this._activePlugins.indexOf(UU) && (this._activePlugins.push(UU), this._activePlugins.sort(((UU, RU) => UU.priority - RU.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), UU.registerForExtraEvents && (this._activePluginsForExtraEvents.push(UU), this._activePluginsForExtraEvents.sort(((UU, RU) => UU.priority - RU.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(UU) {
        for (let RU = 0; RU < this._plugins.length; ++RU)
          if (this._plugins[RU].name === UU) return this._plugins[RU];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(UU) {
        let RU = !0;
        for (const gU of this._activePlugins) RU = RU && gU.isReadyForSubMesh(UU.defines, this._scene, this._engine, UU.subMesh);
        UU.isReadyForSubMesh = RU
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(UU) {
        for (const RU of this._activePlugins) RU.prepareDefinesBeforeAttributes(UU.defines, this._scene, UU.mesh)
      }
      _handlePluginEventPrepareDefines(UU) {
        for (const RU of this._activePlugins) RU.prepareDefines(UU.defines, this._scene, UU.mesh)
      }
      _handlePluginEventHardBindForSubMesh(UU) {
        for (const RU of this._activePluginsForExtraEvents) RU.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, UU.subMesh)
      }
      _handlePluginEventBindForSubMesh(UU) {
        for (const RU of this._activePlugins) RU.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, UU.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(UU) {
        let RU = !1;
        for (const gU of this._activePluginsForExtraEvents)
          if (RU = gU.hasRenderTargetTextures(), RU) break;
        UU.hasRenderTargetTextures = RU
      }
      _handlePluginEventFillRenderTargetTextures(UU) {
        for (const RU of this._activePluginsForExtraEvents) RU.fillRenderTargetTextures(UU.renderTargets)
      }
      _handlePluginEvent(UU, RU) {
        switch (UU) {
          case 512: {
            const UU = RU;
            for (const RU of this._activePlugins) RU.getActiveTextures(UU.activeTextures);
            break
          }
          case 256: {
            const UU = RU;
            for (const RU of this._activePlugins) RU.getAnimatables(UU.animatables);
            break
          }
          case 1024: {
            const UU = RU;
            let gU = !1;
            for (const RU of this._activePlugins)
              if (gU = RU.hasTexture(UU.texture), gU) break;
            UU.hasTexture = gU;
            break
          }
          case 2: {
            const UU = RU;
            for (const RU of this._plugins) RU.dispose(UU.forceDisposeTextures);
            break
          }
          case 4:
            RU.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const UU = RU;
            for (const RU of this._activePlugins) UU.fallbackRank = RU.addFallbacks(UU.defines, UU.fallbacks, UU.fallbackRank), RU.getAttributes(UU.attributes, this._scene, UU.mesh);
            this._uniformList.length > 0 && UU.uniforms.push(...this._uniformList), this._samplerList.length > 0 && UU.samplers.push(...this._samplerList), this._uboList.length > 0 && UU.uniformBuffersNames.push(...this._uboList), UU.customCode = this._injectCustomCode(UU, UU.customCode);
            break
          }
          case 8: {
            const UU = RU;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const gU = 1 === this._material.shaderLanguage;
            for (const RU of this._plugins) {
              const tU = RU.getUniforms(this._material.shaderLanguage);
              if (tU) {
                if (tU.ubo)
                  for (const RU of tU.ubo) {
                    if (RU.size && RU.type) {
                      const tU = RU.arraySize ?? 0;
                      if (UU.ubo.addUniform(RU.name, RU.size, tU), gU) {
                        let UU;
                        switch (RU.type) {
                          case "mat4":
                            UU = "mat4x4f";
                            break;
                          case "float":
                            UU = "f32";
                            break;
                          default:
                            UU = `${RU.type}f`
                        }
                        this._uboDeclaration += tU > 0 ? `uniform ${RU.name}: array<${UU}, ${tU}>;\n` : `uniform ${RU.name}: ${UU};\n`
                      } else this._uboDeclaration += `${RU.type} ${RU.name}${tU>0?`[${tU}]`:""};\n`
                    }
                    this._uniformList.push(RU.name)
                  }
                tU.vertex && (this._vertexDeclaration += tU.vertex + "\n"), tU.fragment && (this._fragmentDeclaration += tU.fragment + "\n"), tU.externalUniforms && this._uniformList.push(...tU.externalUniforms)
              }
              RU.getSamplers(this._samplerList), RU.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(UU, RU) {
        if (RU)
          for (const gU in RU) this._codeInjectionPoints[UU] || (this._codeInjectionPoints[UU] = {}), this._codeInjectionPoints[UU][gU] = !0
      }
      _injectCustomCode(UU, RU) {
        return (gU, tU) => {
          RU && (tU = RU(gU, tU)), this._uboDeclaration && (tU = tU.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (tU = tU.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (tU = tU.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const pU = this._codeInjectionPoints?.[gU];
          if (!pU) return tU;
          let qU = null;
          for (let RU in pU) {
            let pU = "";
            for (const tU of this._activePlugins) {
              const TU = this._material.shaderLanguage;
              let KU = tU.getCustomCode(gU, TU)?.[RU];
              KU && (tU.resolveIncludes && (null === qU && (qU = {
                defines: [],
                indexParameters: UU.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: PU.d.GetShadersRepository(TU),
                includesShadersStore: PU.d.GetIncludesShadersStore(TU),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                VgU: this._engine.VgU,
                processCodeAfterIncludes: void 0
              }), qU.isFragment = "fragment" === gU, (0, EU.i)(KU, qU, (UU => KU = UU))), pU += KU + "\n")
            }
            if (pU.length > 0)
              if ("!" === RU.charAt(0)) {
                RU = RU.substring(1);
                let UU = "g";
                if ("!" === RU.charAt(0)) UU = "", RU = RU.substring(1);
                else {
                  const gU = TU.exec(RU);
                  gU && gU.length >= 2 && (UU = gU[1], RU = RU.substring(UU.length + 1))
                }
                UU.indexOf("g") < 0 && (UU += "g");
                const gU = new RegExp(RU, UU);
                let EU = gU.exec(tU);
                for (; null !== EU;) {
                  const {
                    index: UU
                  } = EU, RU = KU(pU, EU);
                  tU = tU.substring(0, UU) + RU + tU.substring(UU + EU[0].length), gU.lastIndex = UU + RU.length, EU = gU.exec(tU)
                }
              } else {
                const UU = "#define " + RU;
                tU = tU.replace(UU, "\n" + pU + "\n" + UU)
              }
          }
          return tU
        }
      }
    }
    qU._MaterialPluginClassToMainDefine = {}, qU._MaterialPluginCounter = 0;

    function KU(UU, RU) {
      return UU.replace(/\$(\d+)/g, ((UU, gU) => {
        const tU = Number(gU);
        return tU < RU.length ? RU[tU] : ""
      }))
    }
    var cU = gU(39395),
      GU = gU(36639);
    let jU = (() => {
        var UU;
        let RU, gU, EU, PU, TU = [],
          KU = [],
          GU = [],
          jU = [],
          uU = [],
          CU = [],
          hU = [],
          QU = [];
        return UU = class {
          isCompatible(UU) {
            return 0 === UU
          }
          _enable(UU) {
            UU && this._pluginManager._activatePlugin(this)
          }
          constructor(UU, RU, gU, pU) {
            let EU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              PU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              cU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, tU.j)(this, TU, void 0), this.priority = ((0, tU.j)(this, KU), (0, tU.j)(this, GU, 500)), this.resolveIncludes = ((0, tU.j)(this, jU), (0, tU.j)(this, uU, !1)), this.registerForExtraEvents = ((0, tU.j)(this, CU), (0, tU.j)(this, hU, !1)), this.doNotSerialize = ((0, tU.j)(this, QU), !1), this._material = UU, this.name = RU, this.priority = gU, this.resolveIncludes = cU, UU.pluginManager || (UU.pluginManager = new qU(UU), UU.HZ.add((() => {
              UU.pluginManager = void 0
            }))), this._pluginDefineNames = pU, this._pluginManager = UU.pluginManager, EU && this._pluginManager._addPlugin(this), PU && this._enable(!0), this.markAllDefinesAsDirty = UU._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(UU, RU, gU, tU) {
            return !0
          }
          hardBindForSubMesh(UU, RU, gU, tU) {}
          bindForSubMesh(UU, RU, gU, tU) {}
          dispose(UU) {}
          getCustomCode(UU) {
            return null
          }
          collectDefines(UU) {
            if (this._pluginDefineNames)
              for (const RU of Object.keys(this._pluginDefineNames)) {
                if ("_" === RU[0]) continue;
                const gU = typeof this._pluginDefineNames[RU];
                UU[RU] = {
                  type: "number" === gU ? "number" : "string" === gU ? "string" : "boolean" === gU ? "boolean" : "object",
                  default: this._pluginDefineNames[RU]
                }
              }
          }
          prepareDefinesBeforeAttributes(UU, RU, gU) {}
          prepareDefines(UU, RU, gU) {}
          hasTexture(UU) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(UU) {}
          getActiveTextures(UU) {}
          getAnimatables(UU) {}
          addFallbacks(UU, RU, gU) {
            return gU
          }
          getSamplers(UU) {}
          getAttributes(UU, RU, gU) {}
          getUniformBuffersNames(UU) {}
          getUniforms() {
            return {}
          }
          copyTo(UU) {
            cU.b.Clone((() => UU), this)
          }
          serialize() {
            return cU.b.Serialize(this)
          }
          parse(UU, RU, gU) {
            cU.b.Parse((() => this), UU, RU, gU)
          }
        }, (() => {
          const qU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          RU = [(0, pU.K)()], gU = [(0, pU.K)()], EU = [(0, pU.K)()], PU = [(0, pU.K)()], (0, tU.i)(null, null, RU, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: UU => "name" in UU,
              get: UU => UU.name,
              set: (UU, RU) => {
                UU.name = RU
              }
            },
            metadata: qU
          }, TU, KU), (0, tU.i)(null, null, gU, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: UU => "priority" in UU,
              get: UU => UU.priority,
              set: (UU, RU) => {
                UU.priority = RU
              }
            },
            metadata: qU
          }, GU, jU), (0, tU.i)(null, null, EU, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: UU => "resolveIncludes" in UU,
              get: UU => UU.resolveIncludes,
              set: (UU, RU) => {
                UU.resolveIncludes = RU
              }
            },
            metadata: qU
          }, uU, CU), (0, tU.i)(null, null, PU, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: UU => "registerForExtraEvents" in UU,
              get: UU => UU.registerForExtraEvents,
              set: (UU, RU) => {
                UU.registerForExtraEvents = RU
              }
            },
            metadata: qU
          }, hU, QU), qU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qU
          })
        })(), UU
      })(),
      uU = !1;

    function CU() {
      uU || (uU = !0, (0, GU.g)("BABYLON.MaterialPluginBase", jU))
    }
  },
  39658: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU
    });
    class tU {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(UU) {
        UU.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(UU) {}
      bindForSubMesh(UU, RU, gU, tU, pU) {
        if (RU.prePassRenderer && RU.prePassRenderer.enabled && RU.prePassRenderer.currentRTisSceneRT && (-1 !== RU.prePassRenderer.getIndex(2) || -1 !== RU.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[gU.uniqueId] || (this.previousWorldMatrices[gU.uniqueId] = tU.clone()), this.previousViewProjection || (this.previousViewProjection = RU.getTransformMatrix().clone(), this.currentViewProjection = RU.getTransformMatrix().clone());
          const pU = RU.WC();
          this.currentViewProjection.updateFlag !== RU.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = pU.frameId, this.previousViewProjection.PgU(this.currentViewProjection), this.currentViewProjection.PgU(RU.getTransformMatrix())) : this._lastUpdateFrameId !== pU.frameId && (this._lastUpdateFrameId = pU.frameId, this.previousViewProjection.PgU(this.currentViewProjection)), UU.setMatrix("previousWorld", this.previousWorldMatrices[gU.uniqueId]), UU.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[gU.uniqueId] = tU.clone()
        }
      }
    }
  },
  39772: (UU, RU, gU) => {
    function tU(UU) {
      return class extends UU {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    gU.d(RU, {
      b: () => tU
    })
  },
  39648: (UU, RU, gU) => {
    gU.d(RU, {
      StandardMaterial: () => tU.f
    });
    var tU = gU(39655);
    (0, tU.c)()
  },
  39655: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => vU,
      f: () => rU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(39480),
      PU = gU(39468),
      TU = gU(36761),
      qU = gU(39517),
      KU = gU(39658),
      cU = gU(39665),
      GU = gU(39483),
      jU = gU(39676),
      uU = gU(39669),
      CU = gU(39732),
      hU = gU(39729),
      QU = gU(39740),
      eU = gU(39744),
      WU = gU(39720),
      fU = gU(39755),
      xU = gU(39716),
      mU = gU(39395),
      IU = gU(39759),
      JU = gU(39766),
      wU = gU(39768),
      nU = gU(39772),
      bU = gU(39775),
      oU = gU(36639),
      ZU = gU(39256);
    const aU = {
      effect: null,
      subMesh: null
    };
    class YU extends((0, nU.b)((0, wU.c)(uU.c))) {}
    class BU extends((0, cU.c)(YU)) {
      constructor(UU) {
        super(UU), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class VU extends((0, bU.c)(CU.b)) {}
    let rU = (() => {
        var UU, RU, cU, uU, wU, nU, bU, oU, ZU, YU, rU, XU, vU, dU, HU, SU, sU, yU, kU, FU, iU, AU, zU, MU, DU, LU, NU, lU, OU, UR, RR, gR, tR;
        let pR, ER, PR, TR, qR, KR, cR, GR, jR, uR, CR, hR, QR, eR, WR, fR, xR, mR, IR, JR, wR, nR, bR, oR, ZR, aR, YR, BR, VR, rR, XR, vR, dR, HR, SR, sR, yR, kR, FR, iR, AR, zR, MR, DR, LR, NR, lR, OR, Ug, Rg, gg, tg, pg, Eg, Pg, Tg, qg, Kg, cg, Gg, jg, ug, Cg, hg, Qg, eg, Wg, fg, xg, mg, Ig, Jg, wg, ng = VU,
          bg = [],
          og = [],
          Zg = [],
          ag = [],
          Yg = [],
          Bg = [],
          Vg = [],
          rg = [],
          Xg = [],
          vg = [],
          dg = [],
          Hg = [],
          Sg = [],
          sg = [],
          yg = [],
          kg = [],
          Fg = [],
          ig = [],
          Ag = [],
          zg = [],
          Mg = [],
          Dg = [],
          Lg = [],
          Ng = [],
          lg = [],
          Og = [],
          Ut = [],
          Rt = [],
          gt = [],
          tt = [],
          pt = [],
          Et = [],
          Pt = [],
          Tt = [],
          qt = [],
          Kt = [],
          ct = [],
          Gt = [],
          jt = [],
          ut = [],
          Ct = [],
          ht = [],
          Qt = [],
          et = [],
          Wt = [],
          ft = [],
          xt = [],
          mt = [],
          It = [],
          Jt = [],
          wt = [],
          nt = [],
          bt = [],
          ot = [],
          Zt = [],
          Yt = [],
          Bt = [],
          Vt = [],
          rt = [],
          Xt = [],
          vt = [],
          dt = [],
          Ht = [],
          St = [],
          st = [],
          yt = [],
          kt = [],
          Ft = [],
          it = [],
          At = [],
          zt = [],
          Mt = [],
          Dt = [],
          Lt = [],
          Nt = [],
          lt = [],
          Ot = [],
          Up = [],
          Rp = [],
          gp = [],
          tp = [],
          pp = [],
          Ep = [],
          Pp = [],
          Tp = [],
          qp = [],
          Kp = [],
          cp = [],
          Gp = [],
          jp = [],
          Cp = [],
          hp = [],
          Qp = [],
          ep = [],
          Wp = [],
          fp = [],
          xp = [],
          mp = [],
          Ip = [],
          Jp = [],
          wp = [],
          np = [],
          bp = [],
          op = [],
          Zp = [],
          ap = [],
          Yp = [],
          Bp = [],
          Vp = [],
          rp = [],
          Xp = [],
          vp = [],
          dp = [],
          Hp = [],
          Sp = [],
          sp = [],
          yp = [],
          kp = [],
          Fp = [],
          ip = [],
          Ap = [],
          zp = [],
          Mp = [],
          Dp = [],
          Lp = [],
          Np = [],
          lp = [],
          Op = [],
          UE = [],
          RE = [],
          gE = [],
          tE = [],
          pE = [],
          EE = [],
          PE = [],
          TE = [],
          qE = [],
          KE = [],
          cE = [],
          GE = [],
          jE = [],
          uE = [],
          CE = [],
          hE = [],
          QE = [],
          eE = [];
        return UU = class extends ng {
          get diffuseTexture() {
            return (0, tU.c)(this, RU, "f")
          }
          set diffuseTexture(UU) {
            (0, tU.e)(this, RU, UU, "f")
          }
          get ambientTexture() {
            return (0, tU.c)(this, cU, "f")
          }
          set ambientTexture(UU) {
            (0, tU.e)(this, cU, UU, "f")
          }
          get opacityTexture() {
            return (0, tU.c)(this, uU, "f")
          }
          set opacityTexture(UU) {
            (0, tU.e)(this, uU, UU, "f")
          }
          get reflectionTexture() {
            return (0, tU.c)(this, wU, "f")
          }
          set reflectionTexture(UU) {
            (0, tU.e)(this, wU, UU, "f")
          }
          get emissiveTexture() {
            return (0, tU.c)(this, nU, "f")
          }
          set emissiveTexture(UU) {
            (0, tU.e)(this, nU, UU, "f")
          }
          get specularTexture() {
            return (0, tU.c)(this, bU, "f")
          }
          set specularTexture(UU) {
            (0, tU.e)(this, bU, UU, "f")
          }
          get bumpTexture() {
            return (0, tU.c)(this, oU, "f")
          }
          set bumpTexture(UU) {
            (0, tU.e)(this, oU, UU, "f")
          }
          get lightmapTexture() {
            return (0, tU.c)(this, ZU, "f")
          }
          set lightmapTexture(UU) {
            (0, tU.e)(this, ZU, UU, "f")
          }
          get refractionTexture() {
            return (0, tU.c)(this, YU, "f")
          }
          set refractionTexture(UU) {
            (0, tU.e)(this, YU, UU, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, tU.c)(this, rU, "f")
          }
          set useAlphaFromDiffuseTexture(UU) {
            (0, tU.e)(this, rU, UU, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, tU.c)(this, XU, "f")
          }
          set useEmissiveAsIllumination(UU) {
            (0, tU.e)(this, XU, UU, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, tU.c)(this, vU, "f")
          }
          set linkEmissiveWithDiffuse(UU) {
            (0, tU.e)(this, vU, UU, "f")
          }
          get useSpecularOverAlpha() {
            return (0, tU.c)(this, dU, "f")
          }
          set useSpecularOverAlpha(UU) {
            (0, tU.e)(this, dU, UU, "f")
          }
          get useReflectionOverAlpha() {
            return (0, tU.c)(this, HU, "f")
          }
          set useReflectionOverAlpha(UU) {
            (0, tU.e)(this, HU, UU, "f")
          }
          get disableLighting() {
            return (0, tU.c)(this, SU, "f")
          }
          set disableLighting(UU) {
            (0, tU.e)(this, SU, UU, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, tU.c)(this, sU, "f")
          }
          set useObjectSpaceNormalMap(UU) {
            (0, tU.e)(this, sU, UU, "f")
          }
          get useParallax() {
            return (0, tU.c)(this, yU, "f")
          }
          set useParallax(UU) {
            (0, tU.e)(this, yU, UU, "f")
          }
          get useParallaxOcclusion() {
            return (0, tU.c)(this, kU, "f")
          }
          set useParallaxOcclusion(UU) {
            (0, tU.e)(this, kU, UU, "f")
          }
          get roughness() {
            return (0, tU.c)(this, FU, "f")
          }
          set roughness(UU) {
            (0, tU.e)(this, FU, UU, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, tU.c)(this, iU, "f")
          }
          set useLightmapAsShadowmap(UU) {
            (0, tU.e)(this, iU, UU, "f")
          }
          get diffuseFresnelParameters() {
            return (0, tU.c)(this, AU, "f")
          }
          set diffuseFresnelParameters(UU) {
            (0, tU.e)(this, AU, UU, "f")
          }
          get opacityFresnelParameters() {
            return (0, tU.c)(this, zU, "f")
          }
          set opacityFresnelParameters(UU) {
            (0, tU.e)(this, zU, UU, "f")
          }
          get reflectionFresnelParameters() {
            return (0, tU.c)(this, MU, "f")
          }
          set reflectionFresnelParameters(UU) {
            (0, tU.e)(this, MU, UU, "f")
          }
          get refractionFresnelParameters() {
            return (0, tU.c)(this, DU, "f")
          }
          set refractionFresnelParameters(UU) {
            (0, tU.e)(this, DU, UU, "f")
          }
          get emissiveFresnelParameters() {
            return (0, tU.c)(this, LU, "f")
          }
          set emissiveFresnelParameters(UU) {
            (0, tU.e)(this, LU, UU, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, tU.c)(this, NU, "f")
          }
          set useReflectionFresnelFromSpecular(UU) {
            (0, tU.e)(this, NU, UU, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, tU.c)(this, lU, "f")
          }
          set useGlossinessFromSpecularMapAlpha(UU) {
            (0, tU.e)(this, lU, UU, "f")
          }
          get maxSimultaneousLights() {
            return (0, tU.c)(this, OU, "f")
          }
          set maxSimultaneousLights(UU) {
            (0, tU.e)(this, OU, UU, "f")
          }
          get invertNormalMapX() {
            return (0, tU.c)(this, UR, "f")
          }
          set invertNormalMapX(UU) {
            (0, tU.e)(this, UR, UU, "f")
          }
          get invertNormalMapY() {
            return (0, tU.c)(this, RR, "f")
          }
          set invertNormalMapY(UU) {
            (0, tU.e)(this, RR, UU, "f")
          }
          get twoSidedLighting() {
            return (0, tU.c)(this, gR, "f")
          }
          set twoSidedLighting(UU) {
            (0, tU.e)(this, gR, UU, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, tU.c)(this, tR, "f")
          }
          set applyDecalMapAfterDetailMap(UU) {
            (0, tU.e)(this, tR, UU, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(gU, pU) {
            super(gU, pU, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || UU.ForceGLSL), this._diffuseTexture = (0, tU.j)(this, bg, null), RU.set(this, ((0, tU.j)(this, og), (0, tU.j)(this, Zg, void 0))), this._ambientTexture = ((0, tU.j)(this, ag), (0, tU.j)(this, Yg, null)), cU.set(this, ((0, tU.j)(this, Bg), (0, tU.j)(this, Vg, void 0))), this._opacityTexture = ((0, tU.j)(this, rg), (0, tU.j)(this, Xg, null)), uU.set(this, ((0, tU.j)(this, vg), (0, tU.j)(this, dg, void 0))), this._reflectionTexture = ((0, tU.j)(this, Hg), (0, tU.j)(this, Sg, null)), wU.set(this, ((0, tU.j)(this, sg), (0, tU.j)(this, yg, void 0))), this._emissiveTexture = ((0, tU.j)(this, kg), (0, tU.j)(this, Fg, null)), nU.set(this, ((0, tU.j)(this, ig), (0, tU.j)(this, Ag, void 0))), this._specularTexture = ((0, tU.j)(this, zg), (0, tU.j)(this, Mg, null)), bU.set(this, ((0, tU.j)(this, Dg), (0, tU.j)(this, Lg, void 0))), this._bumpTexture = ((0, tU.j)(this, Ng), (0, tU.j)(this, lg, null)), oU.set(this, ((0, tU.j)(this, Og), (0, tU.j)(this, Ut, void 0))), this._lightmapTexture = ((0, tU.j)(this, Rt), (0, tU.j)(this, gt, null)), ZU.set(this, ((0, tU.j)(this, tt), (0, tU.j)(this, pt, void 0))), this._refractionTexture = ((0, tU.j)(this, Et), (0, tU.j)(this, Pt, null)), YU.set(this, ((0, tU.j)(this, Tt), (0, tU.j)(this, qt, void 0))), this.ambientColor = ((0, tU.j)(this, Kt), (0, tU.j)(this, ct, new TU.e(0, 0, 0))), this.diffuseColor = ((0, tU.j)(this, Gt), (0, tU.j)(this, jt, new TU.e(1, 1, 1))), this.specularColor = ((0, tU.j)(this, ut), (0, tU.j)(this, Ct, new TU.e(1, 1, 1))), this.emissiveColor = ((0, tU.j)(this, ht), (0, tU.j)(this, Qt, new TU.e(0, 0, 0))), this.specularPower = ((0, tU.j)(this, et), (0, tU.j)(this, Wt, 64)), this._useAlphaFromDiffuseTexture = ((0, tU.j)(this, ft), (0, tU.j)(this, xt, !1)), rU.set(this, ((0, tU.j)(this, mt), (0, tU.j)(this, It, void 0))), this._useEmissiveAsIllumination = ((0, tU.j)(this, Jt), (0, tU.j)(this, wt, !1)), XU.set(this, ((0, tU.j)(this, nt), (0, tU.j)(this, bt, void 0))), this._linkEmissiveWithDiffuse = ((0, tU.j)(this, ot), (0, tU.j)(this, Zt, !1)), vU.set(this, ((0, tU.j)(this, Yt), (0, tU.j)(this, Bt, void 0))), this._useSpecularOverAlpha = ((0, tU.j)(this, Vt), (0, tU.j)(this, rt, !1)), dU.set(this, ((0, tU.j)(this, Xt), (0, tU.j)(this, vt, void 0))), this._useReflectionOverAlpha = ((0, tU.j)(this, dt), (0, tU.j)(this, Ht, !1)), HU.set(this, ((0, tU.j)(this, St), (0, tU.j)(this, st, void 0))), this._disableLighting = ((0, tU.j)(this, yt), (0, tU.j)(this, kt, !1)), SU.set(this, ((0, tU.j)(this, Ft), (0, tU.j)(this, it, void 0))), this._useObjectSpaceNormalMap = ((0, tU.j)(this, At), (0, tU.j)(this, zt, !1)), sU.set(this, ((0, tU.j)(this, Mt), (0, tU.j)(this, Dt, void 0))), this._useParallax = ((0, tU.j)(this, Lt), (0, tU.j)(this, Nt, !1)), yU.set(this, ((0, tU.j)(this, lt), (0, tU.j)(this, Ot, void 0))), this._useParallaxOcclusion = ((0, tU.j)(this, Up), (0, tU.j)(this, Rp, !1)), kU.set(this, ((0, tU.j)(this, gp), (0, tU.j)(this, tp, void 0))), this.parallaxScaleBias = ((0, tU.j)(this, pp), (0, tU.j)(this, Ep, .05)), this._roughness = ((0, tU.j)(this, Pp), (0, tU.j)(this, Tp, 0)), FU.set(this, ((0, tU.j)(this, qp), (0, tU.j)(this, Kp, void 0))), this.indexOfRefraction = ((0, tU.j)(this, cp), (0, tU.j)(this, Gp, .98)), this.invertRefractionY = ((0, tU.j)(this, jp), (0, tU.j)(this, Cp, !0)), this.alphaCutOff = ((0, tU.j)(this, hp), (0, tU.j)(this, Qp, .4)), this._useLightmapAsShadowmap = ((0, tU.j)(this, ep), (0, tU.j)(this, Wp, !1)), iU.set(this, ((0, tU.j)(this, fp), (0, tU.j)(this, xp, void 0))), this._diffuseFresnelParameters = ((0, tU.j)(this, mp), (0, tU.j)(this, Ip, void 0)), AU.set(this, ((0, tU.j)(this, Jp), (0, tU.j)(this, wp, void 0))), this._opacityFresnelParameters = ((0, tU.j)(this, np), (0, tU.j)(this, bp, void 0)), zU.set(this, ((0, tU.j)(this, op), (0, tU.j)(this, Zp, void 0))), this._reflectionFresnelParameters = ((0, tU.j)(this, ap), (0, tU.j)(this, Yp, void 0)), MU.set(this, ((0, tU.j)(this, Bp), (0, tU.j)(this, Vp, void 0))), this._refractionFresnelParameters = ((0, tU.j)(this, rp), (0, tU.j)(this, Xp, void 0)), DU.set(this, ((0, tU.j)(this, vp), (0, tU.j)(this, dp, void 0))), this._emissiveFresnelParameters = ((0, tU.j)(this, Hp), (0, tU.j)(this, Sp, void 0)), LU.set(this, ((0, tU.j)(this, sp), (0, tU.j)(this, yp, void 0))), this._useReflectionFresnelFromSpecular = ((0, tU.j)(this, kp), (0, tU.j)(this, Fp, !1)), NU.set(this, ((0, tU.j)(this, ip), (0, tU.j)(this, Ap, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, tU.j)(this, zp), (0, tU.j)(this, Mp, !1)), lU.set(this, ((0, tU.j)(this, Dp), (0, tU.j)(this, Lp, void 0))), this._maxSimultaneousLights = ((0, tU.j)(this, Np), (0, tU.j)(this, lp, 4)), OU.set(this, ((0, tU.j)(this, Op), (0, tU.j)(this, UE, void 0))), this._invertNormalMapX = ((0, tU.j)(this, RE), (0, tU.j)(this, gE, !1)), UR.set(this, ((0, tU.j)(this, tE), (0, tU.j)(this, pE, void 0))), this._invertNormalMapY = ((0, tU.j)(this, EE), (0, tU.j)(this, PE, !1)), RR.set(this, ((0, tU.j)(this, TE), (0, tU.j)(this, qE, void 0))), this._twoSidedLighting = ((0, tU.j)(this, KE), (0, tU.j)(this, cE, !1)), gR.set(this, ((0, tU.j)(this, GE), (0, tU.j)(this, jE, void 0))), this._applyDecalMapAfterDetailMap = ((0, tU.j)(this, uE), (0, tU.j)(this, CE, !1)), tR.set(this, ((0, tU.j)(this, hE), (0, tU.j)(this, QE, void 0))), this._vertexPullingMetadata = ((0, tU.j)(this, eE), null), this._renderTargets = new EU.h(16), this._globalAmbientColor = new TU.e(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new eU.d(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new KU.b, this.getRenderTargetTextures = () => (this._renderTargets.reset(), UU.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), UU.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(UU.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(UU.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === jU.c.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== jU.c.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(RU, gU) {
            let tU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const pU = gU._drawWrapper;
            if (pU.effect && this.isFrozen && pU._wasPreviouslyReady && pU._wasPreviouslyUsingInstances === tU) return !0;
            gU.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), gU.materialDefines = new BU(this._eventInfo.defineNames));
            const EU = this.aZ(),
              PU = gU.materialDefines;
            if (this._isReadyForSubMesh(gU)) return !0;
            const TU = EU.WC();
            if (PU._needNormals = (0, xU.Q)(EU, RU, PU, !0, this._maxSimultaneousLights, this._disableLighting), !(0, xU.b)(EU, RU, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, xU.Y)(EU, PU);
            const cU = this.needAlphaBlendingForMesh(RU) && this.aZ().useOrderIndependentTransparency;
            if ((0, xU.cb)(EU, PU, this.canRenderToMRT && !cU), (0, xU.$)(EU, PU, cU), JU.e.PrepareDefines(TU.currentRenderPassId, RU, PU), PU._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, PU._needUVs = !1;
              for (let UU = 1; UU <= 6; ++UU) PU["MAINUV" + UU] = !1;
              if (EU.texturesEnabled) {
                if (PU.DIFFUSEDIRECTUV = 0, PU.BUMPDIRECTUV = 0, PU.AMBIENTDIRECTUV = 0, PU.OPACITYDIRECTUV = 0, PU.EMISSIVEDIRECTUV = 0, PU.SPECULARDIRECTUV = 0, PU.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && UU.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, xU.T)(this._diffuseTexture, PU, "DIFFUSE")
                } else PU.DIFFUSE = !1;
                if (this._ambientTexture && UU.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, xU.T)(this._ambientTexture, PU, "AMBIENT")
                } else PU.AMBIENT = !1;
                if (this._opacityTexture && UU.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, xU.T)(this._opacityTexture, PU, "OPACITY"), PU.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else PU.OPACITY = !1;
                if (this._reflectionTexture && UU.ReflectionTextureEnabled ? (PU.ROUGHNESS = this._roughness > 0, PU.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (PU.ROUGHNESS = !1, PU.REFLECTIONOVERALPHA = !1), !(0, xU.P)(EU, this._reflectionTexture, PU)) return !1;
                if (this._emissiveTexture && UU.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, xU.T)(this._emissiveTexture, PU, "EMISSIVE")
                } else PU.EMISSIVE = !1;
                if (this._lightmapTexture && UU.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, xU.T)(this._lightmapTexture, PU, "LIGHTMAP"), PU.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, PU.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else PU.LIGHTMAP = !1;
                if (this._specularTexture && UU.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, xU.T)(this._specularTexture, PU, "SPECULAR"), PU.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else PU.SPECULAR = !1;
                if (EU.WC().getCaps().standardDerivatives && this._bumpTexture && UU.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, xU.T)(this._bumpTexture, PU, "BUMP"), PU.PARALLAX = this._useParallax, PU.PARALLAX_RHS = EU.useRightHandedSystem, PU.PARALLAXOCCLUSION = this._useParallaxOcclusion, PU.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else PU.BUMP = !1, PU.PARALLAX = !1, PU.PARALLAX_RHS = !1, PU.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && UU.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  PU._needUVs = !0, PU.REFRACTION = !0, PU.REFRACTIONMAP_3D = this._refractionTexture.isCube, PU.RGBDREFRACTION = this._refractionTexture.isRGBD, PU.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else PU.REFRACTION = !1;
                PU.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else PU.DIFFUSE = !1, PU.AMBIENT = !1, PU.OPACITY = !1, PU.REFLECTION = !1, PU.EMISSIVE = !1, PU.LIGHTMAP = !1, PU.BUMP = !1, PU.REFRACTION = !1;
              PU.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), PU.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, PU.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, PU.SPECULAROVERALPHA = this._useSpecularOverAlpha, PU.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, PU.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, PU.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(RU), PU.TEXTURE_REPETITION_MODE = TU.version > 1 || TU.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = PU, this._eventInfo.subMesh = gU, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (PU._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(PU), PU.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, PU.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (PU._areFresnelDirty && (UU.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (PU.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, PU.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, PU.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, PU.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, PU.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, PU.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, PU._needNormals = !0, PU.FRESNEL = !0) : PU.FRESNEL = !1), PU.AREALIGHTUSED || PU.CLUSTLIGHT_BATCH)
              for (let UU = 0; UU < RU.lightSources.length; UU++)
                if (!RU.lightSources[UU]._isReady()) return !1;
            (0, xU.X)(RU, EU, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(RU), PU, this._applyDecalMapAfterDetailMap, this._useVertexPulling, gU.getRenderingMesh(), this._isVertexOutputInvariant), (0, xU.O)(EU, TU, this, PU, tU, null, gU.getRenderingMesh().hasThinInstances), this._eventInfo.defines = PU, this._eventInfo.mesh = RU, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, xU.K)(RU, PU, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let jU = !1;
            if (PU.isDirty) {
              const tU = PU._areLightsDisposed;
              PU.markAsProcessed();
              const pU = new QU.c;
              PU.REFLECTION && pU.addFallback(0, "REFLECTION"), PU.SPECULAR && pU.addFallback(0, "SPECULAR"), PU.BUMP && pU.addFallback(0, "BUMP"), PU.PARALLAX && pU.addFallback(1, "PARALLAX"), PU.PARALLAX_RHS && pU.addFallback(1, "PARALLAX_RHS"), PU.PARALLAXOCCLUSION && pU.addFallback(0, "PARALLAXOCCLUSION"), PU.SPECULAROVERALPHA && pU.addFallback(0, "SPECULAROVERALPHA"), PU.FOG && pU.addFallback(1, "FOG"), PU.POINTSIZE && pU.addFallback(0, "POINTSIZE"), PU.LOGARITHMICDEPTH && pU.addFallback(0, "LOGARITHMICDEPTH"), (0, xU.z)(PU, pU, this._maxSimultaneousLights), PU.SPECULARTERM && pU.addFallback(0, "SPECULARTERM"), PU.DIFFUSEFRESNEL && pU.addFallback(1, "DIFFUSEFRESNEL"), PU.OPACITYFRESNEL && pU.addFallback(2, "OPACITYFRESNEL"), PU.REFLECTIONFRESNEL && pU.addFallback(3, "REFLECTIONFRESNEL"), PU.EMISSIVEFRESNEL && pU.addFallback(4, "EMISSIVEFRESNEL"), PU.FRESNEL && pU.addFallback(4, "FRESNEL"), PU.MULTIVIEW && pU.addFallback(0, "MULTIVIEW");
              const cU = [qU.l.PositionKind];
              PU.NORMAL && cU.push(qU.l.NormalKind), PU.TANGENT && cU.push(qU.l.TangentKind);
              for (let UU = 1; UU <= 6; ++UU) PU["UV" + UU] && cU.push(`uv${1===UU?"":UU}`);
              PU.VERTEXCOLOR && cU.push(qU.l.ColorKind), (0, xU.C)(cU, RU, PU, pU), (0, xU.F)(cU, PU), (0, xU.G)(cU, RU, PU), (0, xU.A)(cU, RU, PU);
              let uU = "default";
              const CU = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                hU = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, xU.gb)(CU, hU, !1);
              const eU = ["Material", "Scene", "Mesh"],
                mU = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: PU.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = pU, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = PU, this._eventInfo.uniforms = CU, this._eventInfo.attributes = cU, this._eventInfo.samplers = hU, this._eventInfo.uniformBuffersNames = eU, this._eventInfo.customCode = void 0, this._eventInfo.mesh = RU, this._eventInfo.indexParameters = mU, this._callbackPluginEventGeneric(128, this._eventInfo), JU.e.AddUniformsAndSamplers(CU, hU), KU.b.AddUniforms(CU), KU.b.AddSamplers(hU), GU.e && (GU.e.PrepareUniforms(CU, PU), GU.e.PrepareSamplers(hU, PU)), (0, xU.ib)({
                  uniformsNames: CU,
                  uniformBuffersNames: eU,
                  samplers: hU,
                  defines: PU,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, WU.c)(CU), this._useVertexPulling) {
                const UU = gU.getRenderingMesh(),
                  RU = UU?.geometry;
                RU && (this._vertexPullingMetadata = (0, fU.f)(RU), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((UU, RU) => {
                  CU.push(`vp_${RU}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const IU = {};
              this.customShaderNameResolve && (uU = this.customShaderNameResolve(uU, CU, eU, hU, PU, cU, IU));
              const wU = PU.toString(),
                nU = gU.effect,
                bU = EU.WC().createEffect(uU, {
                  attributes: cU,
                  uniformsNames: CU,
                  uniformBuffersNames: eU,
                  samplers: hU,
                  defines: wU,
                  fallbacks: pU,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: mU,
                  processFinalCode: IU.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: PU.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: UU._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, TU);
              if (this._eventInfo.customCode = void 0, bU)
                if (this._onEffectCreatedObservable && (aU.effect = bU, aU.subMesh = gU, this._onEffectCreatedObservable.notifyObservers(aU)), this.allowShaderHotSwapping && nU && !bU.isReady()) {
                  if (PU.markAsUnprocessed(), jU = this.isFrozen, tU) return PU._areLightsDisposed = !0, !1
                } else EU.resetCachedMaterial(), gU.setEffect(bU, PU, this._materialContext)
            }
            return !(!gU.effect || !gU.effect.isReady()) && (PU._renderId = EU.getRenderId(), pU._wasPreviouslyReady = !jU, pU._wasPreviouslyUsingInstances = tU, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const UU = this._uniformBuffer;
            UU.addUniform("diffuseLeftColor", 4), UU.addUniform("diffuseRightColor", 4), UU.addUniform("opacityParts", 4), UU.addUniform("reflectionLeftColor", 4), UU.addUniform("reflectionRightColor", 4), UU.addUniform("refractionLeftColor", 4), UU.addUniform("refractionRightColor", 4), UU.addUniform("emissiveLeftColor", 4), UU.addUniform("emissiveRightColor", 4), UU.addUniform("vDiffuseInfos", 2), UU.addUniform("vAmbientInfos", 2), UU.addUniform("vOpacityInfos", 2), UU.addUniform("vEmissiveInfos", 2), UU.addUniform("vLightmapInfos", 2), UU.addUniform("vSpecularInfos", 2), UU.addUniform("vBumpInfos", 3), UU.addUniform("diffuseMatrix", 16), UU.addUniform("ambientMatrix", 16), UU.addUniform("opacityMatrix", 16), UU.addUniform("emissiveMatrix", 16), UU.addUniform("lightmapMatrix", 16), UU.addUniform("specularMatrix", 16), UU.addUniform("bumpMatrix", 16), UU.addUniform("vTangentSpaceParams", 2), UU.addUniform("pointSize", 1), UU.addUniform("alphaCutOff", 1), UU.addUniform("refractionMatrix", 16), UU.addUniform("vRefractionInfos", 4), UU.addUniform("vRefractionPosition", 3), UU.addUniform("vRefractionSize", 3), UU.addUniform("vSpecularColor", 4), UU.addUniform("vEmissiveColor", 3), UU.addUniform("vDiffuseColor", 4), UU.addUniform("vAmbientColor", 3), UU.addUniform("cameraInfo", 4), UU.addUniform("vTextureRepetitionHexTilingParams", 4), (0, xU.eb)(UU, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(RU, gU, tU) {
            const pU = this.aZ(),
              EU = tU.materialDefines;
            if (!EU) return;
            const qU = tU.effect;
            if (!qU) return;
            this._activeEffect = qU, gU.getMeshUniformBuffer().bindToEffect(qU, "Mesh"), gU.transferToEffect(RU), this._uniformBuffer.bindToEffect(qU, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, pU, gU, RU, this.isFrozen), JU.e.Bind(pU.WC().currentRenderPassId, this._activeEffect, gU, RU, this);
            const KU = pU.activeCamera;
            KU ? this._uniformBuffer.updateFloat4("cameraInfo", KU.minZ, KU.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const cU = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", cU[0], cU[1], cU[2], cU[3]), this._eventInfo.subMesh = tU, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), EU.OBJECTSPACE_NORMALMAP && (RU.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const GU = this._mustRebind(pU, qU, tU, gU.visibility),
              jU = pU.WC()._features.needToAlwaysBindUniformBuffers;
            (0, xU.c)(gU, qU), this._vertexPullingMetadata && (0, fU.c)(qU, this._vertexPullingMetadata);
            const uU = this._uniformBuffer;
            if (GU) {
              if (this.bindViewProjection(qU), !uU.useUbo || !this.isFrozen || !uU.isSync || tU._drawWrapper._forceRebindOnNextCall) {
                if (UU.FresnelEnabled && EU.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (uU.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), uU.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const UU = TU.m.Color3[0];
                    UU.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), uU.updateColor4("opacityParts", UU, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (uU.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), uU.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (uU.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), uU.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (uU.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), uU.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (EU.ALPHATEST && uU.updateFloat("alphaCutOff", this.alphaCutOff), pU.texturesEnabled && (this._diffuseTexture && UU.DiffuseTextureEnabled && (uU.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, xU.x)(this._diffuseTexture, uU, "diffuse")), this._ambientTexture && UU.AmbientTextureEnabled && (uU.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, xU.x)(this._ambientTexture, uU, "ambient")), this._opacityTexture && UU.OpacityTextureEnabled && (uU.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, xU.x)(this._opacityTexture, uU, "opacity")), (0, xU.h)(pU, EU, uU, TU.e.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && UU.ReflectionTextureEnabled || uU.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && UU.EmissiveTextureEnabled && (uU.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, xU.x)(this._emissiveTexture, uU, "emissive")), this._lightmapTexture && UU.LightmapTextureEnabled && (uU.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, xU.x)(this._lightmapTexture, uU, "lightmap")), this._specularTexture && UU.SpecularTextureEnabled && (uU.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, xU.x)(this._specularTexture, uU, "specular")), this._bumpTexture && pU.WC().getCaps().standardDerivatives && UU.BumpTextureEnabled && (uU.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, xU.x)(this._bumpTexture, uU, "bump"), pU._mirroredCameraPosition ? uU.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : uU.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && UU.RefractionTextureEnabled)) {
                  let UU = 1;
                  if (this._refractionTexture.isCube || (uU.p_("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (UU = this._refractionTexture.depth)), uU.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, UU, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const UU = this._refractionTexture;
                    uU.updateVector3("vRefractionPosition", UU.boundingBoxPosition), uU.updateVector3("vRefractionSize", UU.boundingBoxSize)
                  }
                }
                this.pointsCloud && uU.updateFloat("pointSize", this.pointSize), uU.updateColor4("vSpecularColor", this.specularColor, this.specularPower), uU.updateColor3("vEmissiveColor", UU.EmissiveTextureEnabled ? this.emissiveColor : TU.e.BlackReadOnly), uU.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), pU.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), uU.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              pU.texturesEnabled && (this._diffuseTexture && UU.DiffuseTextureEnabled && qU.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && UU.AmbientTextureEnabled && qU.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && UU.OpacityTextureEnabled && qU.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && UU.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? qU.setTexture("reflectionCubeSampler", this._reflectionTexture) : qU.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && UU.EmissiveTextureEnabled && qU.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && UU.LightmapTextureEnabled && qU.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && UU.SpecularTextureEnabled && qU.setTexture("specularSampler", this._specularTexture), this._bumpTexture && pU.WC().getCaps().standardDerivatives && UU.BumpTextureEnabled && qU.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && UU.RefractionTextureEnabled && (this._refractionTexture.isCube ? qU.setTexture("refractionCubeSampler", this._refractionTexture) : qU.setTexture("refraction2DSampler", this._refractionTexture))), this.aZ().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(gU) && this.aZ().depthPeelingRenderer.bind(qU), this._eventInfo.subMesh = tU, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, WU.f)(qU, this, pU), this.bindEyePosition(qU)
            } else jU && (this._needToBindSceneUbo = !0);
            !GU && this.isFrozen && !jU || !pU.lightsEnabled || this._disableLighting || (0, xU.n)(pU, gU, qU, EU, this._maxSimultaneousLights), !GU && this.isFrozen || ((pU.fogEnabled && gU.applyFog && pU.fogMode !== PU.f.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || gU.receiveShadows || EU.PREPASS || EU.CLUSTLIGHT_BATCH) && this.bindView(qU), (0, xU.g)(pU, gU, qU), EU.NUM_MORPH_INFLUENCERS && (0, xU.s)(gU, qU), EU.BAKED_VERTEX_ANIMATION_TEXTURE && gU.bakedVertexAnimationManager?.bind(qU, EU.INSTANCES), this.useLogarithmicDepth && (0, xU.q)(EU, qU, pU), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(gU, this._activeEffect, tU), uU.update()
          }
          _canBindRunFollower(RU, gU, tU, pU, EU) {
            const PU = RU.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === UU.prototype.isReadyForSubMesh && this.bindForSubMesh === UU.prototype.bindForSubMesh && this._mustRebind === CU.b.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !gU._features.needToAlwaysBindUniformBuffers && !(PU && PU.enabled && PU.currentRTisSceneRT) && !JU.e._Configurations[gU.currentRenderPassId] && !pU.materialDefines?.OBJECTSPACE_NORMALMAP && !tU.skeleton && !EU._bonesComputationForcedToCPU
          }
          _bindRunFollower(UU, RU, gU, tU) {
            this._activeEffect = tU, RU.getMeshUniformBuffer().bindToEffect(tU, "Mesh"), RU.transferToEffect(UU);
            const pU = this._uniformBuffer;
            pU.bindToEffect(tU, "Material");
            const EU = this._scene.activeCamera;
            EU ? pU.updateFloat4("cameraInfo", EU.minZ, EU.maxZ, 0, 0) : pU.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const PU = this.textureRepetitionHexTilingParams;
            pU.updateFloat4("vTextureRepetitionHexTilingParams", PU[0], PU[1], PU[2], PU[3]), this._afterBind(RU, tU, gU), pU.update()
          }
          getAnimatables() {
            const UU = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && UU.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && UU.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && UU.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && UU.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && UU.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && UU.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && UU.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && UU.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && UU.push(this._refractionTexture), UU
          }
          getActiveTextures() {
            const UU = super.getActiveTextures();
            return this._diffuseTexture && UU.push(this._diffuseTexture), this._ambientTexture && UU.push(this._ambientTexture), this._opacityTexture && UU.push(this._opacityTexture), this._reflectionTexture && UU.push(this._reflectionTexture), this._emissiveTexture && UU.push(this._emissiveTexture), this._specularTexture && UU.push(this._specularTexture), this._bumpTexture && UU.push(this._bumpTexture), this._lightmapTexture && UU.push(this._lightmapTexture), this._refractionTexture && UU.push(this._refractionTexture), UU
          }
          hasTexture(UU) {
            return !!super.hasTexture(UU) || (this._diffuseTexture === UU || (this._ambientTexture === UU || (this._opacityTexture === UU || (this._reflectionTexture === UU || (this._emissiveTexture === UU || (this._specularTexture === UU || (this._bumpTexture === UU || (this._lightmapTexture === UU || this._refractionTexture === UU))))))))
          }
          dispose(UU, RU) {
            RU && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(UU, RU)
          }
          clone(RU) {
            let gU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const pU = mU.b.Clone((() => new UU(RU, this.aZ())), this, {
              cloneTexturesOnlyOnce: gU
            });
            return pU.name = RU, pU.id = RU, this.stencil.copyTo(pU.stencil), this._clonePlugins(pU, tU), pU
          }
          static Parse(RU, gU, tU) {
            const pU = mU.b.Parse((() => new UU(RU.name, gU)), RU, gU, tU);
            return RU.stencil && pU.stencil.parse(RU.stencil, gU, tU), jU.c._ParsePlugins(RU, pU, gU, tU), pU
          }
          static get DiffuseTextureEnabled() {
            return hU.b.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(UU) {
            hU.b.DiffuseTextureEnabled = UU
          }
          static get DetailTextureEnabled() {
            return hU.b.DetailTextureEnabled
          }
          static set DetailTextureEnabled(UU) {
            hU.b.DetailTextureEnabled = UU
          }
          static get AmbientTextureEnabled() {
            return hU.b.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(UU) {
            hU.b.AmbientTextureEnabled = UU
          }
          static get OpacityTextureEnabled() {
            return hU.b.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(UU) {
            hU.b.OpacityTextureEnabled = UU
          }
          static get ReflectionTextureEnabled() {
            return hU.b.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(UU) {
            hU.b.ReflectionTextureEnabled = UU
          }
          static get EmissiveTextureEnabled() {
            return hU.b.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(UU) {
            hU.b.EmissiveTextureEnabled = UU
          }
          static get SpecularTextureEnabled() {
            return hU.b.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(UU) {
            hU.b.SpecularTextureEnabled = UU
          }
          static get BumpTextureEnabled() {
            return hU.b.BumpTextureEnabled
          }
          static set BumpTextureEnabled(UU) {
            hU.b.BumpTextureEnabled = UU
          }
          static get LightmapTextureEnabled() {
            return hU.b.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(UU) {
            hU.b.LightmapTextureEnabled = UU
          }
          static get RefractionTextureEnabled() {
            return hU.b.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(UU) {
            hU.b.RefractionTextureEnabled = UU
          }
          static get ColorGradingTextureEnabled() {
            return hU.b.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(UU) {
            hU.b.ColorGradingTextureEnabled = UU
          }
          static get FresnelEnabled() {
            return hU.b.FresnelEnabled
          }
          static set FresnelEnabled(UU) {
            hU.b.FresnelEnabled = UU
          }
        }, RU = new WeakMap, cU = new WeakMap, uU = new WeakMap, wU = new WeakMap, nU = new WeakMap, bU = new WeakMap, oU = new WeakMap, ZU = new WeakMap, YU = new WeakMap, rU = new WeakMap, XU = new WeakMap, vU = new WeakMap, dU = new WeakMap, HU = new WeakMap, SU = new WeakMap, sU = new WeakMap, yU = new WeakMap, kU = new WeakMap, FU = new WeakMap, iU = new WeakMap, AU = new WeakMap, zU = new WeakMap, MU = new WeakMap, DU = new WeakMap, LU = new WeakMap, NU = new WeakMap, lU = new WeakMap, OU = new WeakMap, UR = new WeakMap, RR = new WeakMap, gR = new WeakMap, tR = new WeakMap, (() => {
          const RU = "function" === typeof Symbol && Symbol.metadata ? Object.create(ng[Symbol.metadata] ?? null) : void 0;
          pR = [(0, pU.D)("diffuseTexture")], ER = [(0, pU.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], PR = [(0, pU.D)("ambientTexture")], TR = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], qR = [(0, pU.D)("opacityTexture")], KR = [(0, pU.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], cR = [(0, pU.D)("reflectionTexture")], GR = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], jR = [(0, pU.D)("emissiveTexture")], uR = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], CR = [(0, pU.D)("specularTexture")], hR = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], QR = [(0, pU.D)("bumpTexture")], eR = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], WR = [(0, pU.D)("lightmapTexture")], fR = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], xR = [(0, pU.D)("refractionTexture")], mR = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], IR = [(0, pU.l)("ambient")], JR = [(0, pU.l)("diffuse")], wR = [(0, pU.l)("specular")], nR = [(0, pU.l)("emissive")], bR = [(0, pU.K)()], oR = [(0, pU.K)("useAlphaFromDiffuseTexture")], ZR = [() => ({
            init(UU) {
              return void 0 === UU && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = UU), UU
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(UU) {
              this._useAlphaFromDiffuseTexture = UU
            }
          })], aR = [(0, pU.K)("useEmissiveAsIllumination")], YR = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], BR = [(0, pU.K)("linkEmissiveWithDiffuse")], VR = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], rR = [(0, pU.K)("useSpecularOverAlpha")], XR = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], vR = [(0, pU.K)("useReflectionOverAlpha")], dR = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], HR = [(0, pU.K)("disableLighting")], SR = [(0, pU.e)("_markAllSubMeshesAsLightsDirty")], sR = [(0, pU.K)("useObjectSpaceNormalMap")], yR = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], kR = [(0, pU.K)("useParallax")], FR = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], iR = [(0, pU.K)("useParallaxOcclusion")], AR = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], zR = [(0, pU.K)()], MR = [(0, pU.K)("roughness")], DR = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], LR = [(0, pU.K)()], NR = [(0, pU.K)()], lR = [(0, pU.K)()], OR = [(0, pU.K)("useLightmapAsShadowmap")], Ug = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], Rg = [(0, pU.t)("diffuseFresnelParameters")], gg = [(0, pU.e)("_markAllSubMeshesAsFresnelDirty")], tg = [(0, pU.t)("opacityFresnelParameters")], pg = [(0, pU.e)("_markAllSubMeshesAsFresnelAndMiscDirty")], Eg = [(0, pU.t)("reflectionFresnelParameters")], Pg = [(0, pU.e)("_markAllSubMeshesAsFresnelDirty")], Tg = [(0, pU.t)("refractionFresnelParameters")], qg = [(0, pU.e)("_markAllSubMeshesAsFresnelDirty")], Kg = [(0, pU.t)("emissiveFresnelParameters")], cg = [(0, pU.e)("_markAllSubMeshesAsFresnelDirty")], Gg = [(0, pU.K)("useReflectionFresnelFromSpecular")], jg = [(0, pU.e)("_markAllSubMeshesAsFresnelDirty")], ug = [(0, pU.K)("useGlossinessFromSpecularMapAlpha")], Cg = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], hg = [(0, pU.K)("maxSimultaneousLights")], Qg = [(0, pU.e)("_markAllSubMeshesAsLightsDirty")], eg = [(0, pU.K)("invertNormalMapX")], Wg = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], fg = [(0, pU.K)("invertNormalMapY")], xg = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], mg = [(0, pU.K)("twoSidedLighting")], Ig = [(0, pU.e)("_markAllSubMeshesAsTexturesDirty")], Jg = [(0, pU.K)("applyDecalMapAfterDetailMap")], wg = [(0, pU.e)("_markAllSubMeshesAsMiscDirty")], (0, tU.i)(UU, null, ER, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "diffuseTexture" in UU,
              get: UU => UU.diffuseTexture,
              set: (UU, RU) => {
                UU.diffuseTexture = RU
              }
            },
            metadata: RU
          }, Zg, ag), (0, tU.i)(UU, null, TR, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "ambientTexture" in UU,
              get: UU => UU.ambientTexture,
              set: (UU, RU) => {
                UU.ambientTexture = RU
              }
            },
            metadata: RU
          }, Vg, rg), (0, tU.i)(UU, null, KR, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "opacityTexture" in UU,
              get: UU => UU.opacityTexture,
              set: (UU, RU) => {
                UU.opacityTexture = RU
              }
            },
            metadata: RU
          }, dg, Hg), (0, tU.i)(UU, null, GR, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "reflectionTexture" in UU,
              get: UU => UU.reflectionTexture,
              set: (UU, RU) => {
                UU.reflectionTexture = RU
              }
            },
            metadata: RU
          }, yg, kg), (0, tU.i)(UU, null, uR, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "emissiveTexture" in UU,
              get: UU => UU.emissiveTexture,
              set: (UU, RU) => {
                UU.emissiveTexture = RU
              }
            },
            metadata: RU
          }, Ag, zg), (0, tU.i)(UU, null, hR, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularTexture" in UU,
              get: UU => UU.specularTexture,
              set: (UU, RU) => {
                UU.specularTexture = RU
              }
            },
            metadata: RU
          }, Lg, Ng), (0, tU.i)(UU, null, eR, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "bumpTexture" in UU,
              get: UU => UU.bumpTexture,
              set: (UU, RU) => {
                UU.bumpTexture = RU
              }
            },
            metadata: RU
          }, Ut, Rt), (0, tU.i)(UU, null, fR, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "lightmapTexture" in UU,
              get: UU => UU.lightmapTexture,
              set: (UU, RU) => {
                UU.lightmapTexture = RU
              }
            },
            metadata: RU
          }, pt, Et), (0, tU.i)(UU, null, mR, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "refractionTexture" in UU,
              get: UU => UU.refractionTexture,
              set: (UU, RU) => {
                UU.refractionTexture = RU
              }
            },
            metadata: RU
          }, qt, Kt), (0, tU.i)(UU, null, ZR, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "useAlphaFromDiffuseTexture" in UU,
              get: UU => UU.useAlphaFromDiffuseTexture,
              set: (UU, RU) => {
                UU.useAlphaFromDiffuseTexture = RU
              }
            },
            metadata: RU
          }, It, Jt), (0, tU.i)(UU, null, YR, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: UU => "useEmissiveAsIllumination" in UU,
              get: UU => UU.useEmissiveAsIllumination,
              set: (UU, RU) => {
                UU.useEmissiveAsIllumination = RU
              }
            },
            metadata: RU
          }, bt, ot), (0, tU.i)(UU, null, VR, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: UU => "linkEmissiveWithDiffuse" in UU,
              get: UU => UU.linkEmissiveWithDiffuse,
              set: (UU, RU) => {
                UU.linkEmissiveWithDiffuse = RU
              }
            },
            metadata: RU
          }, Bt, Vt), (0, tU.i)(UU, null, XR, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: UU => "useSpecularOverAlpha" in UU,
              get: UU => UU.useSpecularOverAlpha,
              set: (UU, RU) => {
                UU.useSpecularOverAlpha = RU
              }
            },
            metadata: RU
          }, vt, dt), (0, tU.i)(UU, null, dR, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: UU => "useReflectionOverAlpha" in UU,
              get: UU => UU.useReflectionOverAlpha,
              set: (UU, RU) => {
                UU.useReflectionOverAlpha = RU
              }
            },
            metadata: RU
          }, st, yt), (0, tU.i)(UU, null, SR, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: UU => "disableLighting" in UU,
              get: UU => UU.disableLighting,
              set: (UU, RU) => {
                UU.disableLighting = RU
              }
            },
            metadata: RU
          }, it, At), (0, tU.i)(UU, null, yR, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: UU => "useObjectSpaceNormalMap" in UU,
              get: UU => UU.useObjectSpaceNormalMap,
              set: (UU, RU) => {
                UU.useObjectSpaceNormalMap = RU
              }
            },
            metadata: RU
          }, Dt, Lt), (0, tU.i)(UU, null, FR, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: UU => "useParallax" in UU,
              get: UU => UU.useParallax,
              set: (UU, RU) => {
                UU.useParallax = RU
              }
            },
            metadata: RU
          }, Ot, Up), (0, tU.i)(UU, null, AR, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: UU => "useParallaxOcclusion" in UU,
              get: UU => UU.useParallaxOcclusion,
              set: (UU, RU) => {
                UU.useParallaxOcclusion = RU
              }
            },
            metadata: RU
          }, tp, pp), (0, tU.i)(UU, null, DR, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: UU => "roughness" in UU,
              get: UU => UU.roughness,
              set: (UU, RU) => {
                UU.roughness = RU
              }
            },
            metadata: RU
          }, Kp, cp), (0, tU.i)(UU, null, Ug, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: UU => "useLightmapAsShadowmap" in UU,
              get: UU => UU.useLightmapAsShadowmap,
              set: (UU, RU) => {
                UU.useLightmapAsShadowmap = RU
              }
            },
            metadata: RU
          }, xp, mp), (0, tU.i)(UU, null, gg, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "diffuseFresnelParameters" in UU,
              get: UU => UU.diffuseFresnelParameters,
              set: (UU, RU) => {
                UU.diffuseFresnelParameters = RU
              }
            },
            metadata: RU
          }, wp, np), (0, tU.i)(UU, null, pg, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "opacityFresnelParameters" in UU,
              get: UU => UU.opacityFresnelParameters,
              set: (UU, RU) => {
                UU.opacityFresnelParameters = RU
              }
            },
            metadata: RU
          }, Zp, ap), (0, tU.i)(UU, null, Pg, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "reflectionFresnelParameters" in UU,
              get: UU => UU.reflectionFresnelParameters,
              set: (UU, RU) => {
                UU.reflectionFresnelParameters = RU
              }
            },
            metadata: RU
          }, Vp, rp), (0, tU.i)(UU, null, qg, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "refractionFresnelParameters" in UU,
              get: UU => UU.refractionFresnelParameters,
              set: (UU, RU) => {
                UU.refractionFresnelParameters = RU
              }
            },
            metadata: RU
          }, dp, Hp), (0, tU.i)(UU, null, cg, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "emissiveFresnelParameters" in UU,
              get: UU => UU.emissiveFresnelParameters,
              set: (UU, RU) => {
                UU.emissiveFresnelParameters = RU
              }
            },
            metadata: RU
          }, yp, kp), (0, tU.i)(UU, null, jg, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: UU => "useReflectionFresnelFromSpecular" in UU,
              get: UU => UU.useReflectionFresnelFromSpecular,
              set: (UU, RU) => {
                UU.useReflectionFresnelFromSpecular = RU
              }
            },
            metadata: RU
          }, Ap, zp), (0, tU.i)(UU, null, Cg, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: UU => "useGlossinessFromSpecularMapAlpha" in UU,
              get: UU => UU.useGlossinessFromSpecularMapAlpha,
              set: (UU, RU) => {
                UU.useGlossinessFromSpecularMapAlpha = RU
              }
            },
            metadata: RU
          }, Lp, Np), (0, tU.i)(UU, null, Qg, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: UU => "maxSimultaneousLights" in UU,
              get: UU => UU.maxSimultaneousLights,
              set: (UU, RU) => {
                UU.maxSimultaneousLights = RU
              }
            },
            metadata: RU
          }, UE, RE), (0, tU.i)(UU, null, Wg, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: UU => "invertNormalMapX" in UU,
              get: UU => UU.invertNormalMapX,
              set: (UU, RU) => {
                UU.invertNormalMapX = RU
              }
            },
            metadata: RU
          }, pE, EE), (0, tU.i)(UU, null, xg, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: UU => "invertNormalMapY" in UU,
              get: UU => UU.invertNormalMapY,
              set: (UU, RU) => {
                UU.invertNormalMapY = RU
              }
            },
            metadata: RU
          }, qE, KE), (0, tU.i)(UU, null, Ig, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: UU => "twoSidedLighting" in UU,
              get: UU => UU.twoSidedLighting,
              set: (UU, RU) => {
                UU.twoSidedLighting = RU
              }
            },
            metadata: RU
          }, jE, uE), (0, tU.i)(UU, null, wg, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: UU => "applyDecalMapAfterDetailMap" in UU,
              get: UU => UU.applyDecalMapAfterDetailMap,
              set: (UU, RU) => {
                UU.applyDecalMapAfterDetailMap = RU
              }
            },
            metadata: RU
          }, QE, eE), (0, tU.i)(null, null, pR, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_diffuseTexture" in UU,
              get: UU => UU._diffuseTexture,
              set: (UU, RU) => {
                UU._diffuseTexture = RU
              }
            },
            metadata: RU
          }, bg, og), (0, tU.i)(null, null, PR, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_ambientTexture" in UU,
              get: UU => UU._ambientTexture,
              set: (UU, RU) => {
                UU._ambientTexture = RU
              }
            },
            metadata: RU
          }, Yg, Bg), (0, tU.i)(null, null, qR, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_opacityTexture" in UU,
              get: UU => UU._opacityTexture,
              set: (UU, RU) => {
                UU._opacityTexture = RU
              }
            },
            metadata: RU
          }, Xg, vg), (0, tU.i)(null, null, cR, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_reflectionTexture" in UU,
              get: UU => UU._reflectionTexture,
              set: (UU, RU) => {
                UU._reflectionTexture = RU
              }
            },
            metadata: RU
          }, Sg, sg), (0, tU.i)(null, null, jR, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_emissiveTexture" in UU,
              get: UU => UU._emissiveTexture,
              set: (UU, RU) => {
                UU._emissiveTexture = RU
              }
            },
            metadata: RU
          }, Fg, ig), (0, tU.i)(null, null, CR, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_specularTexture" in UU,
              get: UU => UU._specularTexture,
              set: (UU, RU) => {
                UU._specularTexture = RU
              }
            },
            metadata: RU
          }, Mg, Dg), (0, tU.i)(null, null, QR, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_bumpTexture" in UU,
              get: UU => UU._bumpTexture,
              set: (UU, RU) => {
                UU._bumpTexture = RU
              }
            },
            metadata: RU
          }, lg, Og), (0, tU.i)(null, null, WR, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_lightmapTexture" in UU,
              get: UU => UU._lightmapTexture,
              set: (UU, RU) => {
                UU._lightmapTexture = RU
              }
            },
            metadata: RU
          }, gt, tt), (0, tU.i)(null, null, xR, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_refractionTexture" in UU,
              get: UU => UU._refractionTexture,
              set: (UU, RU) => {
                UU._refractionTexture = RU
              }
            },
            metadata: RU
          }, Pt, Tt), (0, tU.i)(null, null, IR, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "ambientColor" in UU,
              get: UU => UU.ambientColor,
              set: (UU, RU) => {
                UU.ambientColor = RU
              }
            },
            metadata: RU
          }, ct, Gt), (0, tU.i)(null, null, JR, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "diffuseColor" in UU,
              get: UU => UU.diffuseColor,
              set: (UU, RU) => {
                UU.diffuseColor = RU
              }
            },
            metadata: RU
          }, jt, ut), (0, tU.i)(null, null, wR, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularColor" in UU,
              get: UU => UU.specularColor,
              set: (UU, RU) => {
                UU.specularColor = RU
              }
            },
            metadata: RU
          }, Ct, ht), (0, tU.i)(null, null, nR, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "emissiveColor" in UU,
              get: UU => UU.emissiveColor,
              set: (UU, RU) => {
                UU.emissiveColor = RU
              }
            },
            metadata: RU
          }, Qt, et), (0, tU.i)(null, null, bR, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularPower" in UU,
              get: UU => UU.specularPower,
              set: (UU, RU) => {
                UU.specularPower = RU
              }
            },
            metadata: RU
          }, Wt, ft), (0, tU.i)(null, null, oR, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useAlphaFromDiffuseTexture" in UU,
              get: UU => UU._useAlphaFromDiffuseTexture,
              set: (UU, RU) => {
                UU._useAlphaFromDiffuseTexture = RU
              }
            },
            metadata: RU
          }, xt, mt), (0, tU.i)(null, null, aR, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useEmissiveAsIllumination" in UU,
              get: UU => UU._useEmissiveAsIllumination,
              set: (UU, RU) => {
                UU._useEmissiveAsIllumination = RU
              }
            },
            metadata: RU
          }, wt, nt), (0, tU.i)(null, null, BR, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: UU => "_linkEmissiveWithDiffuse" in UU,
              get: UU => UU._linkEmissiveWithDiffuse,
              set: (UU, RU) => {
                UU._linkEmissiveWithDiffuse = RU
              }
            },
            metadata: RU
          }, Zt, Yt), (0, tU.i)(null, null, rR, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useSpecularOverAlpha" in UU,
              get: UU => UU._useSpecularOverAlpha,
              set: (UU, RU) => {
                UU._useSpecularOverAlpha = RU
              }
            },
            metadata: RU
          }, rt, Xt), (0, tU.i)(null, null, vR, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useReflectionOverAlpha" in UU,
              get: UU => UU._useReflectionOverAlpha,
              set: (UU, RU) => {
                UU._useReflectionOverAlpha = RU
              }
            },
            metadata: RU
          }, Ht, St), (0, tU.i)(null, null, HR, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: UU => "_disableLighting" in UU,
              get: UU => UU._disableLighting,
              set: (UU, RU) => {
                UU._disableLighting = RU
              }
            },
            metadata: RU
          }, kt, Ft), (0, tU.i)(null, null, sR, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useObjectSpaceNormalMap" in UU,
              get: UU => UU._useObjectSpaceNormalMap,
              set: (UU, RU) => {
                UU._useObjectSpaceNormalMap = RU
              }
            },
            metadata: RU
          }, zt, Mt), (0, tU.i)(null, null, kR, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useParallax" in UU,
              get: UU => UU._useParallax,
              set: (UU, RU) => {
                UU._useParallax = RU
              }
            },
            metadata: RU
          }, Nt, lt), (0, tU.i)(null, null, iR, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useParallaxOcclusion" in UU,
              get: UU => UU._useParallaxOcclusion,
              set: (UU, RU) => {
                UU._useParallaxOcclusion = RU
              }
            },
            metadata: RU
          }, Rp, gp), (0, tU.i)(null, null, zR, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: UU => "parallaxScaleBias" in UU,
              get: UU => UU.parallaxScaleBias,
              set: (UU, RU) => {
                UU.parallaxScaleBias = RU
              }
            },
            metadata: RU
          }, Ep, Pp), (0, tU.i)(null, null, MR, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: UU => "_roughness" in UU,
              get: UU => UU._roughness,
              set: (UU, RU) => {
                UU._roughness = RU
              }
            },
            metadata: RU
          }, Tp, qp), (0, tU.i)(null, null, LR, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: UU => "indexOfRefraction" in UU,
              get: UU => UU.indexOfRefraction,
              set: (UU, RU) => {
                UU.indexOfRefraction = RU
              }
            },
            metadata: RU
          }, Gp, jp), (0, tU.i)(null, null, NR, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: UU => "invertRefractionY" in UU,
              get: UU => UU.invertRefractionY,
              set: (UU, RU) => {
                UU.invertRefractionY = RU
              }
            },
            metadata: RU
          }, Cp, hp), (0, tU.i)(null, null, lR, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: UU => "alphaCutOff" in UU,
              get: UU => UU.alphaCutOff,
              set: (UU, RU) => {
                UU.alphaCutOff = RU
              }
            },
            metadata: RU
          }, Qp, ep), (0, tU.i)(null, null, OR, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useLightmapAsShadowmap" in UU,
              get: UU => UU._useLightmapAsShadowmap,
              set: (UU, RU) => {
                UU._useLightmapAsShadowmap = RU
              }
            },
            metadata: RU
          }, Wp, fp), (0, tU.i)(null, null, Rg, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "_diffuseFresnelParameters" in UU,
              get: UU => UU._diffuseFresnelParameters,
              set: (UU, RU) => {
                UU._diffuseFresnelParameters = RU
              }
            },
            metadata: RU
          }, Ip, Jp), (0, tU.i)(null, null, tg, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "_opacityFresnelParameters" in UU,
              get: UU => UU._opacityFresnelParameters,
              set: (UU, RU) => {
                UU._opacityFresnelParameters = RU
              }
            },
            metadata: RU
          }, bp, op), (0, tU.i)(null, null, Eg, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "_reflectionFresnelParameters" in UU,
              get: UU => UU._reflectionFresnelParameters,
              set: (UU, RU) => {
                UU._reflectionFresnelParameters = RU
              }
            },
            metadata: RU
          }, Yp, Bp), (0, tU.i)(null, null, Tg, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "_refractionFresnelParameters" in UU,
              get: UU => UU._refractionFresnelParameters,
              set: (UU, RU) => {
                UU._refractionFresnelParameters = RU
              }
            },
            metadata: RU
          }, Xp, vp), (0, tU.i)(null, null, Kg, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "_emissiveFresnelParameters" in UU,
              get: UU => UU._emissiveFresnelParameters,
              set: (UU, RU) => {
                UU._emissiveFresnelParameters = RU
              }
            },
            metadata: RU
          }, Sp, sp), (0, tU.i)(null, null, Gg, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useReflectionFresnelFromSpecular" in UU,
              get: UU => UU._useReflectionFresnelFromSpecular,
              set: (UU, RU) => {
                UU._useReflectionFresnelFromSpecular = RU
              }
            },
            metadata: RU
          }, Fp, ip), (0, tU.i)(null, null, ug, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useGlossinessFromSpecularMapAlpha" in UU,
              get: UU => UU._useGlossinessFromSpecularMapAlpha,
              set: (UU, RU) => {
                UU._useGlossinessFromSpecularMapAlpha = RU
              }
            },
            metadata: RU
          }, Mp, Dp), (0, tU.i)(null, null, hg, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: UU => "_maxSimultaneousLights" in UU,
              get: UU => UU._maxSimultaneousLights,
              set: (UU, RU) => {
                UU._maxSimultaneousLights = RU
              }
            },
            metadata: RU
          }, lp, Op), (0, tU.i)(null, null, eg, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: UU => "_invertNormalMapX" in UU,
              get: UU => UU._invertNormalMapX,
              set: (UU, RU) => {
                UU._invertNormalMapX = RU
              }
            },
            metadata: RU
          }, gE, tE), (0, tU.i)(null, null, fg, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: UU => "_invertNormalMapY" in UU,
              get: UU => UU._invertNormalMapY,
              set: (UU, RU) => {
                UU._invertNormalMapY = RU
              }
            },
            metadata: RU
          }, PE, TE), (0, tU.i)(null, null, mg, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: UU => "_twoSidedLighting" in UU,
              get: UU => UU._twoSidedLighting,
              set: (UU, RU) => {
                UU._twoSidedLighting = RU
              }
            },
            metadata: RU
          }, cE, GE), (0, tU.i)(null, null, Jg, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: UU => "_applyDecalMapAfterDetailMap" in UU,
              get: UU => UU._applyDecalMapAfterDetailMap,
              set: (UU, RU) => {
                UU._applyDecalMapAfterDetailMap = RU
              }
            },
            metadata: RU
          }, CE, hE), RU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: RU
          })
        })(), UU.ForceGLSL = !1, UU._ShaderLoader = new IU.c((() => [Promise.all([gU.e(307), gU.e(306)]).then((() => gU(41218))), Promise.all([gU.e(312), gU.e(308), gU.e(321), gU.e(311)]).then((() => gU(41408)))]), (() => [Promise.all([gU.e(328), gU.e(323)]).then((() => gU(41568))), Promise.all([gU.e(329), gU.e(339), gU.e(325)]).then((() => gU(41760)))])), UU
      })(),
      XU = !1;

    function vU() {
      XU || (XU = !0, (0, GU.g)(), (0, oU.g)("BABYLON.StandardMaterial", rU), PU.f.DefaultMaterialFactory = UU => new rU("default material", UU))
    }
    Object.getOwnPropertyDescriptor(rU.prototype, "decalMap") || Object.defineProperty(rU.prototype, "decalMap", (0, ZU.i)("StandardMaterial", "decalMap"))
  },
  39768: (UU, RU, gU) => {
    function tU(UU) {
      return class extends UU {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    gU.d(RU, {
      c: () => tU
    })
  },
  39759: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU
    });
    class tU {
      constructor(UU, RU) {
        this._webGL = {
          load: UU,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: RU,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(UU) {
        const RU = 1 === UU ? this._webGPU : this._webGL;
        return RU.loaded ? void 0 : async () => {
          await this._loadAsync(RU)
        }
      }
      async _loadAsync(UU) {
        if (UU.loaded) return;
        let RU = UU.loadPromise;
        const gU = null === RU;
        gU && (RU = Promise.all(UU.load()), UU.loadPromise = RU);
        let tU = !1;
        try {
          await RU, tU = !0
        } finally {
          gU && this._completeLoad(UU, tU)
        }
      }
      _completeLoad(UU, RU) {
        UU.loaded = RU, UU.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);