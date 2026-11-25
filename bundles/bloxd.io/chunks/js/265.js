export const id = 265;
export const ids = [265];
export const modules = {
  40767: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG
    });
    var wG = ZG(40402);

    function SG(GG) {
      return class extends GG {
        constructor() {
          super(...arguments);
          const GG = new.target;
          if (!GG[Symbol.metadata]) {
            const bG = Object.getPrototypeOf(GG)?.[Symbol.metadata];
            GG[Symbol.metadata] = bG ? Object.create(bG) : {}
          }
          const bG = (0, wG.c)(GG[Symbol.metadata]);
          bG._imageProcessingConfiguration || (bG._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(GG) {
          this._attachImageProcessingConfiguration(GG), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(GG) {
          GG !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !GG && this.Dv ? this._imageProcessingConfiguration = this.Dv().imageProcessingConfiguration : GG && (this._imageProcessingConfiguration = GG), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(GG) {
          this.imageProcessingConfiguration.colorCurvesEnabled = GG
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(GG) {
          this.imageProcessingConfiguration.colorGradingEnabled = GG
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(GG) {
          this._imageProcessingConfiguration.toneMappingEnabled = GG
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(GG) {
          this._imageProcessingConfiguration.exposure = GG
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(GG) {
          this._imageProcessingConfiguration.contrast = GG
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(GG) {
          this._imageProcessingConfiguration.colorGradingTexture = GG
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(GG) {
          this._imageProcessingConfiguration.colorCurves = GG
        }
      }
    }
  },
  40658: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => LG,
      d: () => SG
    });
    var wG = ZG(40660);

    function SG(GG) {
      return class extends GG {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class LG extends wG.d {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  40727: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => pG
    });
    var wG = ZG(40393),
      SG = ZG(40664),
      LG = ZG(40398),
      yG = ZG(40717),
      kG = ZG(40660),
      UG = ZG(40735),
      YG = ZG(40705);
    class VG extends kG.d {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let pG = (() => {
      var GG, bG, ZG, kG;
      let pG, fG, QG, KG, hG, dG, JG = UG.e,
        rG = [],
        zG = [],
        EG = [],
        oG = [],
        XG = [],
        uG = [],
        iG = [],
        CG = [],
        WG = [],
        mG = [],
        IG = [],
        FG = [];
      return GG = class extends JG {
        get texture() {
          return (0, wG.e)(this, bG, "f")
        }
        set texture(GG) {
          (0, wG.h)(this, bG, GG, "f")
        }
        get normalBlendMethod() {
          return (0, wG.e)(this, ZG, "f")
        }
        set normalBlendMethod(GG) {
          (0, wG.h)(this, ZG, GG, "f")
        }
        get isEnabled() {
          return (0, wG.e)(this, kG, "f")
        }
        set isEnabled(GG) {
          (0, wG.h)(this, kG, GG, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(GG) {
          let LG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(GG, "DetailMap", 140, new VG, LG), this._texture = null, bG.set(this, (0, wG.n)(this, rG, void 0)), this.diffuseBlendLevel = ((0, wG.n)(this, zG), (0, wG.n)(this, EG, 1)), this.roughnessBlendLevel = ((0, wG.n)(this, oG), (0, wG.n)(this, XG, 1)), this.bumpLevel = ((0, wG.n)(this, uG), (0, wG.n)(this, iG, 1)), this._normalBlendMethod = ((0, wG.n)(this, CG), SG.e.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), ZG.set(this, (0, wG.n)(this, WG, void 0)), this._isEnabled = ((0, wG.n)(this, mG), !1), kG.set(this, (0, wG.n)(this, IG, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, wG.n)(this, FG), this._internalMarkAllSubMeshesAsTexturesDirty = GG._dirtyCallbacks[1]
        }
        isReadyForSubMesh(GG, bG, ZG) {
          return !this._isEnabled || !(GG._areTexturesDirty && bG.texturesEnabled && ZG.getCaps().standardDerivatives && this._texture && yG.d.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(GG, bG) {
          if (this._isEnabled) {
            GG.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const ZG = bG.CK();
            GG._areTexturesDirty && (ZG.getCaps().standardDerivatives && this._texture && yG.d.DetailTextureEnabled && this._isEnabled ? ((0, YG.bb)(this._texture, GG, "DETAIL"), GG.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : GG.DETAIL = !1)
          } else GG.DETAIL = !1
        }
        bindForSubMesh(GG, bG) {
          if (!this._isEnabled) return;
          const ZG = this._material.isFrozen;
          GG.useUbo && ZG && GG.isSync || this._texture && yG.d.DetailTextureEnabled && (GG.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, YG.C)(this._texture, GG, "detail")), bG.texturesEnabled && this._texture && yG.d.DetailTextureEnabled && GG.setTexture("detailSampler", this._texture)
        }
        hasTexture(GG) {
          return this._texture === GG
        }
        getActiveTextures(GG) {
          this._texture && GG.push(this._texture)
        }
        getAnimatables(GG) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && GG.push(this._texture)
        }
        dispose(GG) {
          GG && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(GG) {
          GG.push("detailSampler")
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
      }, bG = new WeakMap, ZG = new WeakMap, kG = new WeakMap, (() => {
        const bG = "function" === typeof Symbol && Symbol.metadata ? Object.create(JG[Symbol.metadata] ?? null) : void 0;
        pG = [(0, LG.E)("detailTexture"), (0, LG.d)("_markAllSubMeshesAsTexturesDirty")], fG = [(0, LG.Q)()], QG = [(0, LG.Q)()], KG = [(0, LG.Q)()], hG = [(0, LG.Q)(), (0, LG.d)("_markAllSubMeshesAsTexturesDirty")], dG = [(0, LG.Q)(), (0, LG.d)("_markAllSubMeshesAsTexturesDirty")], (0, wG.k)(GG, null, pG, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: GG => "texture" in GG,
            get: GG => GG.texture,
            set: (GG, bG) => {
              GG.texture = bG
            }
          },
          metadata: bG
        }, rG, zG), (0, wG.k)(GG, null, hG, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: GG => "normalBlendMethod" in GG,
            get: GG => GG.normalBlendMethod,
            set: (GG, bG) => {
              GG.normalBlendMethod = bG
            }
          },
          metadata: bG
        }, WG, mG), (0, wG.k)(GG, null, dG, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: GG => "isEnabled" in GG,
            get: GG => GG.isEnabled,
            set: (GG, bG) => {
              GG.isEnabled = bG
            }
          },
          metadata: bG
        }, IG, FG), (0, wG.k)(null, null, fG, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: GG => "diffuseBlendLevel" in GG,
            get: GG => GG.diffuseBlendLevel,
            set: (GG, bG) => {
              GG.diffuseBlendLevel = bG
            }
          },
          metadata: bG
        }, EG, oG), (0, wG.k)(null, null, QG, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: GG => "roughnessBlendLevel" in GG,
            get: GG => GG.roughnessBlendLevel,
            set: (GG, bG) => {
              GG.roughnessBlendLevel = bG
            }
          },
          metadata: bG
        }, XG, uG), (0, wG.k)(null, null, KG, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: GG => "bumpLevel" in GG,
            get: GG => GG.bumpLevel,
            set: (GG, bG) => {
              GG.bumpLevel = bG
            }
          },
          metadata: bG
        }, iG, CG), bG && Object.defineProperty(GG, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bG
        })
      })(), GG
    })()
  },
  40660: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG
    });
    class wG {
      constructor(GG) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = GG, GG)
          for (const bG in GG) Object.prototype.hasOwnProperty.call(GG, bG) && this._setDefaultValue(bG)
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
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || GG, this._isDirty = !0
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
        for (const GG of Object.keys(this)) "_" !== GG[0] && this._keys.push(GG);
        if (this._externalProperties)
          for (const GG in this._externalProperties) - 1 === this._keys.indexOf(GG) && this._keys.push(GG)
      }
      isEqual(GG) {
        if (this._keys.length !== GG._keys.length) return !1;
        for (let bG = 0; bG < this._keys.length; bG++) {
          const ZG = this._keys[bG];
          if (this[ZG] !== GG[ZG]) return !1
        }
        return !0
      }
      cloneTo(GG) {
        this._keys.length !== GG._keys.length && (GG._keys = this._keys.slice(0));
        for (let bG = 0; bG < this._keys.length; bG++) {
          const ZG = this._keys[bG];
          GG[ZG] = this[ZG]
        }
      }
      reset() {
        for (const GG of this._keys) this._setDefaultValue(GG)
      }
      _setDefaultValue(GG) {
        const bG = this._externalProperties?.[GG]?.type ?? typeof this[GG],
          ZG = this._externalProperties?.[GG]?.default;
        switch (bG) {
          case "number":
            this[GG] = ZG ?? 0;
            break;
          case "string":
            this[GG] = ZG ?? "";
            break;
          default:
            this[GG] = ZG ?? !1
        }
      }
      toString() {
        let GG = "";
        for (let bG = 0; bG < this._keys.length; bG++) {
          const ZG = this._keys[bG],
            wG = this[ZG];
          switch (typeof wG) {
            case "number":
            case "string":
              GG += "#define " + ZG + " " + wG + "\n";
              break;
            default:
              wG && (GG += "#define " + ZG + "\n")
          }
        }
        return GG
      }
    }
  },
  40750: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => kG,
      f: () => yG,
      g: () => LG
    });
    var wG, SG = ZG(37439);

    function LG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const wG = bG(GG);
      if (!Number.isInteger(wG) || wG < 0 || wG > ZG) throw new Error(`Invalid geometry object ID ${wG} for mesh "${GG.name}". Object IDs must be integers between 0 and 0x${ZG.toString(16).toUpperCase()}.`);
      return wG
    }

    function yG(GG, bG) {
      const ZG = bG(GG);
      if (!Number.isInteger(ZG) || ZG < 0 || ZG > 255 || 0 !== ZG && 0 === (63 & ZG)) throw new Error(`Invalid geometry mesh-blending tag ${ZG} for mesh "${GG.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return ZG
    }! function(GG) {
      GG[GG.Zero = 0] = "Zero", GG[GG.One = 1] = "One", GG[GG.MaxViewZ = 2] = "MaxViewZ", GG[GG.NoClear = 3] = "NoClear"
    }(wG || (wG = {}));
    class kG {
      static CreateConfiguration(GG) {
        return kG._Configurations[GG] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: SG.e.Zero(),
          currentViewProjection: SG.e.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, kG._Configurations[GG]
      }
      static DeleteConfiguration(GG) {
        delete kG._Configurations[GG]
      }
      static GetConfiguration(GG) {
        return kG._Configurations[GG]
      }
      static _PrepareConfiguration(GG, bG, ZG) {
        const wG = kG._Configurations[GG];
        wG._attachments = bG, wG._colorAttachments = ZG, wG._mrtCount = bG.length;
        let SG = "#define PREPASS\n";
        for (const LG of kG.GeometryTextureDescriptions) {
          const GG = wG.defines[LG.defineIndex];
          void 0 !== GG && (SG += `#define ${LG.define}\n#define ${LG.defineIndex} ${GG}\n`)
        }
        wG.objectIdIsRedFormat && (SG += "#define PREPASS_OBJECT_ID_R8\n"), wG._defines = SG + `#define SCENE_MRT_COUNT ${bG.length}\n`
      }
      static _PrepareStringDefines(GG, bG) {
        const ZG = kG._Configurations[GG];
        return !!ZG?._defines && (bG.push(ZG._defines), !0)
      }
      static _BindAttachmentsForEffect(GG, bG) {
        const ZG = kG._Configurations[GG.currentRenderPassId];
        return !ZG?._attachments || (GG.bindAttachments(bG._multiTarget ? ZG._attachments : ZG._colorAttachments), bG._multiTarget || void 0 !== ZG.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(GG) {
        const bG = kG._Configurations[GG.currentRenderPassId];
        bG?._colorAttachments && GG.bindAttachments(bG._colorAttachments)
      }
      static _BindColorAttachments(GG) {
        const bG = kG._Configurations[GG.currentRenderPassId];
        return !bG?._colorAttachments || (GG.bindAttachments(bG._colorAttachments), void 0 !== bG.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(GG) {
        const bG = kG._Configurations[GG.currentRenderPassId];
        return !bG?._colorAttachments || void 0 !== bG.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(GG, bG) {
        const ZG = kG._Configurations[GG.currentRenderPassId];
        if (!ZG) return;
        const wG = GG.getAlphaMode(),
          SG = void 0 === ZG.defines.PREPASS_COLOR_INDEX || 2 === wG || 1 === wG || 17 === wG;
        bG.setFloat("geometryZeroAlphaDiscard", SG ? 1 : 0)
      }
      static AddUniformsAndSamplers(GG, bG) {
        GG.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(GG, bG) {
        for (const ZG of bG)
          if (ZG.aE)
            for (const bG of ZG.aE) bG._removeDrawWrapper(GG)
      }
      static PrepareDefines(GG, bG, ZG) {
        if (!ZG._arePrePassDirty) return;
        const wG = kG._Configurations[GG];
        if (!wG) return;
        ZG.PREPASS = !0;
        let SG = 0;
        for (let LG = 0; LG < kG.GeometryTextureDescriptions.length; LG++) {
          const GG = kG.GeometryTextureDescriptions[LG],
            bG = GG.define,
            yG = GG.defineIndex,
            UG = wG.defines[yG];
          void 0 !== UG ? (ZG[bG] = !0, ZG[yG] = UG, SG++) : (ZG[bG] = !1, delete ZG[yG])
        }
        ZG.PREPASS_OBJECT_ID_R8 = wG.objectIdIsRedFormat, ZG.SCENE_MRT_COUNT = wG._mrtCount ?? SG, ZG.BONES_VELOCITY_ENABLED = bG.useBones && bG.computeBonesUsingShaders && bG.skeleton && !bG.skeleton.isUsingTextureForMatrices && -1 === wG.excludedSkinnedMesh.indexOf(bG)
      }
      static Bind(GG, bG, ZG, wG, SG) {
        const UG = kG._Configurations[GG];
        if (!UG) return;
        const YG = ZG.Dv(),
          VG = YG.CK();
        if (UG.reverseCulling && VG.setStateCullFaceType(YG._mirroredCameraPosition ? SG.cullBackFaces : !SG.cullBackFaces), void 0 !== UG.defines.PREPASS_OBJECT_ID_INDEX) {
          const GG = UG.objectIdIsRedFormat ? 255 : 16777215;
          let wG = ZG.uniqueId;
          if (UG.objectIdProvider) wG = LG(ZG, UG.objectIdProvider, GG);
          else if (wG > GG) throw new Error(`Invalid geometry object ID ${wG} for mesh "${ZG.name}". Object IDs must be integers between 0 and 0x${GG.toString(16).toUpperCase()}.`);
          bG.setFloat("objectId", wG)
        }
        if (void 0 !== UG.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const GG = UG.meshBlendTagProvider ? yG(ZG, UG.meshBlendTagProvider) : ZG.meshBlendingTag;
          bG.setInt("meshBlendTag", GG)
        }
        if (void 0 !== UG.defines.PREPASS_VELOCITY_INDEX || void 0 !== UG.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const GG = UG._currentWorldMatrices ?? (UG._currentWorldMatrices = {}),
            SG = UG._worldMatrixFrameIds ?? (UG._worldMatrixFrameIds = {});
          if (GG[ZG.uniqueId] || (GG[ZG.uniqueId] = wG.clone(), UG.previousWorldMatrices[ZG.uniqueId] = wG.clone()), SG[ZG.uniqueId] !== VG.frameId && (UG.previousWorldMatrices[ZG.uniqueId].oW(GG[ZG.uniqueId]), SG[ZG.uniqueId] = VG.frameId), GG[ZG.uniqueId].oW(wG), -1 === UG.lastUpdateFrameId ? (UG.lastUpdateFrameId = VG.frameId, UG.previousViewProjection.oW(YG.getTransformMatrix()), UG.currentViewProjection.oW(YG.getTransformMatrix())) : UG.currentViewProjection.updateFlag !== YG.getTransformMatrix().updateFlag ? (UG.lastUpdateFrameId = VG.frameId, UG.previousViewProjection.oW(UG.currentViewProjection), UG.currentViewProjection.oW(YG.getTransformMatrix())) : UG.lastUpdateFrameId !== VG.frameId && (UG.lastUpdateFrameId = VG.frameId, UG.previousViewProjection.oW(UG.currentViewProjection)), bG.setMatrix("previousWorld", UG.previousWorldMatrices[ZG.uniqueId]), bG.setMatrix("previousViewProjection", UG.previousViewProjection), ZG.useBones && ZG.computeBonesUsingShaders && ZG.skeleton) {
            const GG = ZG.skeleton;
            if (!GG.isUsingTextureForMatrices || -1 === bG.getUniformIndex("boneTextureInfo")) {
              const wG = GG.getTransformMatrices(ZG);
              wG && (UG.previousBones[ZG.uniqueId] || (UG.previousBones[ZG.uniqueId] = wG.slice()), bG.setMatrices("mPreviousBones", UG.previousBones[ZG.uniqueId]), UG.previousBones[ZG.uniqueId].set(wG))
            }
          }
        }
      }
    }
    kG.GeometryTextureDescriptions = [{
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
    }], kG._Configurations = {}
  },
  40735: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => fG,
      f: () => KG
    });
    var wG = ZG(40393),
      SG = ZG(40398),
      LG = ZG(40262),
      yG = ZG(40237);
    const kG = new RegExp("^([gimus]+)!");
    class UG {
      constructor(GG) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = GG, this._scene = GG.Dv(), this._engine = this._scene.CK()
      }
      _addPlugin(GG) {
        for (let wG = 0; wG < this._plugins.length; ++wG)
          if (this._plugins[wG].name === GG.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !GG.isCompatible(this._material.shaderLanguage)) throw `The plugin "${GG.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const bG = GG.getClassName();
        UG._MaterialPluginClassToMainDefine[bG] || (UG._MaterialPluginClassToMainDefine[bG] = "MATERIALPLUGIN_" + ++UG._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (GG, bG) => this._handlePluginEvent(GG, bG), this._plugins.push(GG), this._plugins.sort(((GG, bG) => GG.priority - bG.priority)), this._codeInjectionPoints = {};
        const ZG = {};
        ZG[UG._MaterialPluginClassToMainDefine[bG]] = {
          type: "boolean",
          default: !0
        };
        for (const wG of this._plugins) wG.collectDefines(ZG), this._collectPointNames("vertex", wG.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", wG.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = ZG, !0
      }
      _activatePlugin(GG) {
        -1 === this._activePlugins.indexOf(GG) && (this._activePlugins.push(GG), this._activePlugins.sort(((GG, bG) => GG.priority - bG.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), GG.registerForExtraEvents && (this._activePluginsForExtraEvents.push(GG), this._activePluginsForExtraEvents.sort(((GG, bG) => GG.priority - bG.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(GG) {
        for (let bG = 0; bG < this._plugins.length; ++bG)
          if (this._plugins[bG].name === GG) return this._plugins[bG];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(GG) {
        let bG = !0;
        for (const ZG of this._activePlugins) bG = bG && ZG.isReadyForSubMesh(GG.defines, this._scene, this._engine, GG.subMesh);
        GG.isReadyForSubMesh = bG
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(GG) {
        for (const bG of this._activePlugins) bG.prepareDefinesBeforeAttributes(GG.defines, this._scene, GG.mesh)
      }
      _handlePluginEventPrepareDefines(GG) {
        for (const bG of this._activePlugins) bG.prepareDefines(GG.defines, this._scene, GG.mesh)
      }
      _handlePluginEventHardBindForSubMesh(GG) {
        for (const bG of this._activePluginsForExtraEvents) bG.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, GG.subMesh)
      }
      _handlePluginEventBindForSubMesh(GG) {
        for (const bG of this._activePlugins) bG.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, GG.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(GG) {
        let bG = !1;
        for (const ZG of this._activePluginsForExtraEvents)
          if (bG = ZG.hasRenderTargetTextures(), bG) break;
        GG.hasRenderTargetTextures = bG
      }
      _handlePluginEventFillRenderTargetTextures(GG) {
        for (const bG of this._activePluginsForExtraEvents) bG.fillRenderTargetTextures(GG.renderTargets)
      }
      _handlePluginEvent(GG, bG) {
        switch (GG) {
          case 512: {
            const GG = bG;
            for (const bG of this._activePlugins) bG.getActiveTextures(GG.activeTextures);
            break
          }
          case 256: {
            const GG = bG;
            for (const bG of this._activePlugins) bG.getAnimatables(GG.animatables);
            break
          }
          case 1024: {
            const GG = bG;
            let ZG = !1;
            for (const bG of this._activePlugins)
              if (ZG = bG.hasTexture(GG.texture), ZG) break;
            GG.hasTexture = ZG;
            break
          }
          case 2: {
            const GG = bG;
            for (const bG of this._plugins) bG.dispose(GG.forceDisposeTextures);
            break
          }
          case 4:
            bG.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const GG = bG;
            for (const bG of this._activePlugins) GG.fallbackRank = bG.addFallbacks(GG.defines, GG.fallbacks, GG.fallbackRank), bG.getAttributes(GG.attributes, this._scene, GG.mesh);
            this._uniformList.length > 0 && GG.uniforms.push(...this._uniformList), this._samplerList.length > 0 && GG.samplers.push(...this._samplerList), this._uboList.length > 0 && GG.uniformBuffersNames.push(...this._uboList), GG.customCode = this._injectCustomCode(GG, GG.customCode);
            break
          }
          case 8: {
            const GG = bG;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const ZG = 1 === this._material.shaderLanguage;
            for (const bG of this._plugins) {
              const wG = bG.getUniforms(this._material.shaderLanguage);
              if (wG) {
                if (wG.ubo)
                  for (const bG of wG.ubo) {
                    if (bG.size && bG.type) {
                      const wG = bG.arraySize ?? 0;
                      if (GG.ubo.addUniform(bG.name, bG.size, wG), ZG) {
                        let GG;
                        switch (bG.type) {
                          case "mat4":
                            GG = "mat4x4f";
                            break;
                          case "float":
                            GG = "f32";
                            break;
                          default:
                            GG = `${bG.type}f`
                        }
                        this._uboDeclaration += wG > 0 ? `uniform ${bG.name}: array<${GG}, ${wG}>;\n` : `uniform ${bG.name}: ${GG};\n`
                      } else this._uboDeclaration += `${bG.type} ${bG.name}${wG>0?`[${wG}]`:""};\n`
                    }
                    this._uniformList.push(bG.name)
                  }
                wG.vertex && (this._vertexDeclaration += wG.vertex + "\n"), wG.fragment && (this._fragmentDeclaration += wG.fragment + "\n"), wG.externalUniforms && this._uniformList.push(...wG.externalUniforms)
              }
              bG.getSamplers(this._samplerList), bG.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(GG, bG) {
        if (bG)
          for (const ZG in bG) this._codeInjectionPoints[GG] || (this._codeInjectionPoints[GG] = {}), this._codeInjectionPoints[GG][ZG] = !0
      }
      _injectCustomCode(GG, bG) {
        return (ZG, wG) => {
          bG && (wG = bG(ZG, wG)), this._uboDeclaration && (wG = wG.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (wG = wG.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (wG = wG.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const SG = this._codeInjectionPoints?.[ZG];
          if (!SG) return wG;
          let UG = null;
          for (let bG in SG) {
            let SG = "";
            for (const wG of this._activePlugins) {
              const kG = this._material.shaderLanguage;
              let YG = wG.getCustomCode(ZG, kG)?.[bG];
              YG && (wG.resolveIncludes && (null === UG && (UG = {
                defines: [],
                indexParameters: GG.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: yG.e.GetShadersRepository(kG),
                includesShadersStore: yG.e.GetIncludesShadersStore(kG),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                iwG: this._engine.iwG,
                processCodeAfterIncludes: void 0
              }), UG.isFragment = "fragment" === ZG, (0, LG.i)(YG, UG, (GG => YG = GG))), SG += YG + "\n")
            }
            if (SG.length > 0)
              if ("!" === bG.charAt(0)) {
                bG = bG.substring(1);
                let GG = "g";
                if ("!" === bG.charAt(0)) GG = "", bG = bG.substring(1);
                else {
                  const ZG = kG.exec(bG);
                  ZG && ZG.length >= 2 && (GG = ZG[1], bG = bG.substring(GG.length + 1))
                }
                GG.indexOf("g") < 0 && (GG += "g");
                const ZG = new RegExp(bG, GG);
                let LG = ZG.exec(wG);
                for (; null !== LG;) {
                  const {
                    index: GG
                  } = LG, bG = YG(SG, LG);
                  wG = wG.substring(0, GG) + bG + wG.substring(GG + LG[0].length), ZG.lastIndex = GG + bG.length, LG = ZG.exec(wG)
                }
              } else {
                const GG = "#define " + bG;
                wG = wG.replace(GG, "\n" + SG + "\n" + GG)
              }
          }
          return wG
        }
      }
    }
    UG._MaterialPluginClassToMainDefine = {}, UG._MaterialPluginCounter = 0;

    function YG(GG, bG) {
      return GG.replace(/\$(\d+)/g, ((GG, ZG) => {
        const wG = Number(ZG);
        return wG < bG.length ? bG[wG] : ""
      }))
    }
    var VG = ZG(40416),
      pG = ZG(37484);
    let fG = (() => {
        var GG;
        let bG, ZG, LG, yG, kG = [],
          YG = [],
          pG = [],
          fG = [],
          QG = [],
          KG = [],
          hG = [],
          dG = [];
        return GG = class {
          isCompatible(GG) {
            return 0 === GG
          }
          _enable(GG) {
            GG && this._pluginManager._activatePlugin(this)
          }
          constructor(GG, bG, ZG, SG) {
            let LG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              yG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              VG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, wG.n)(this, kG, void 0), this.priority = ((0, wG.n)(this, YG), (0, wG.n)(this, pG, 500)), this.resolveIncludes = ((0, wG.n)(this, fG), (0, wG.n)(this, QG, !1)), this.registerForExtraEvents = ((0, wG.n)(this, KG), (0, wG.n)(this, hG, !1)), this.doNotSerialize = ((0, wG.n)(this, dG), !1), this._material = GG, this.name = bG, this.priority = ZG, this.resolveIncludes = VG, GG.pluginManager || (GG.pluginManager = new UG(GG), GG.Gl.add((() => {
              GG.pluginManager = void 0
            }))), this._pluginDefineNames = SG, this._pluginManager = GG.pluginManager, LG && this._pluginManager._addPlugin(this), yG && this._enable(!0), this.markAllDefinesAsDirty = GG._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(GG, bG, ZG, wG) {
            return !0
          }
          hardBindForSubMesh(GG, bG, ZG, wG) {}
          bindForSubMesh(GG, bG, ZG, wG) {}
          dispose(GG) {}
          getCustomCode(GG) {
            return null
          }
          collectDefines(GG) {
            if (this._pluginDefineNames)
              for (const bG of Object.keys(this._pluginDefineNames)) {
                if ("_" === bG[0]) continue;
                const ZG = typeof this._pluginDefineNames[bG];
                GG[bG] = {
                  type: "number" === ZG ? "number" : "string" === ZG ? "string" : "boolean" === ZG ? "boolean" : "object",
                  default: this._pluginDefineNames[bG]
                }
              }
          }
          prepareDefinesBeforeAttributes(GG, bG, ZG) {}
          prepareDefines(GG, bG, ZG) {}
          hasTexture(GG) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(GG) {}
          getActiveTextures(GG) {}
          getAnimatables(GG) {}
          addFallbacks(GG, bG, ZG) {
            return ZG
          }
          getSamplers(GG) {}
          getAttributes(GG, bG, ZG) {}
          getUniformBuffersNames(GG) {}
          getUniforms() {
            return {}
          }
          copyTo(GG) {
            VG.b.Clone((() => GG), this)
          }
          serialize() {
            return VG.b.Serialize(this)
          }
          parse(GG, bG, ZG) {
            VG.b.Parse((() => this), GG, bG, ZG)
          }
        }, (() => {
          const UG = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bG = [(0, SG.Q)()], ZG = [(0, SG.Q)()], LG = [(0, SG.Q)()], yG = [(0, SG.Q)()], (0, wG.k)(null, null, bG, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: GG => "name" in GG,
              get: GG => GG.name,
              set: (GG, bG) => {
                GG.name = bG
              }
            },
            metadata: UG
          }, kG, YG), (0, wG.k)(null, null, ZG, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: GG => "priority" in GG,
              get: GG => GG.priority,
              set: (GG, bG) => {
                GG.priority = bG
              }
            },
            metadata: UG
          }, pG, fG), (0, wG.k)(null, null, LG, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: GG => "resolveIncludes" in GG,
              get: GG => GG.resolveIncludes,
              set: (GG, bG) => {
                GG.resolveIncludes = bG
              }
            },
            metadata: UG
          }, QG, KG), (0, wG.k)(null, null, yG, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: GG => "registerForExtraEvents" in GG,
              get: GG => GG.registerForExtraEvents,
              set: (GG, bG) => {
                GG.registerForExtraEvents = bG
              }
            },
            metadata: UG
          }, hG, dG), UG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UG
          })
        })(), GG
      })(),
      QG = !1;

    function KG() {
      QG || (QG = !0, (0, pG.i)("BABYLON.MaterialPluginBase", fG))
    }
  },
  40655: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG
    });
    class wG {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(GG) {
        GG.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(GG) {}
      bindForSubMesh(GG, bG, ZG, wG, SG) {
        if (bG.prePassRenderer && bG.prePassRenderer.enabled && bG.prePassRenderer.currentRTisSceneRT && (-1 !== bG.prePassRenderer.getIndex(2) || -1 !== bG.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[ZG.uniqueId] || (this.previousWorldMatrices[ZG.uniqueId] = wG.clone()), this.previousViewProjection || (this.previousViewProjection = bG.getTransformMatrix().clone(), this.currentViewProjection = bG.getTransformMatrix().clone());
          const SG = bG.CK();
          this.currentViewProjection.updateFlag !== bG.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = SG.frameId, this.previousViewProjection.oW(this.currentViewProjection), this.currentViewProjection.oW(bG.getTransformMatrix())) : this._lastUpdateFrameId !== SG.frameId && (this._lastUpdateFrameId = SG.frameId, this.previousViewProjection.oW(this.currentViewProjection)), GG.setMatrix("previousWorld", this.previousWorldMatrices[ZG.uniqueId]), GG.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[ZG.uniqueId] = wG.clone()
        }
      }
    }
  },
  40761: (GG, bG, ZG) => {
    function wG(GG) {
      return class extends GG {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    ZG.d(bG, {
      d: () => wG
    })
  },
  40644: (GG, bG, ZG) => {
    ZG.d(bG, {
      StandardMaterial: () => wG.e
    });
    var wG = ZG(40648);
    (0, wG.b)()
  },
  40648: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => PG,
      e: () => lG
    });
    var wG = ZG(40393),
      SG = ZG(40398),
      LG = ZG(40484),
      yG = ZG(40475),
      kG = ZG(37621),
      UG = ZG(40524),
      YG = ZG(40655),
      VG = ZG(40658),
      pG = ZG(40491),
      fG = ZG(40664),
      QG = ZG(40660),
      KG = ZG(40720),
      hG = ZG(40717),
      dG = ZG(40725),
      JG = ZG(40727),
      rG = ZG(40709),
      zG = ZG(40742),
      EG = ZG(40705),
      oG = ZG(40416),
      XG = ZG(40747),
      uG = ZG(40750),
      iG = ZG(40757),
      CG = ZG(40761),
      WG = ZG(40767),
      mG = ZG(37484),
      IG = ZG(40258);
    const FG = {
      effect: null,
      subMesh: null
    };
    class vG extends((0, CG.d)((0, iG.d)(QG.d))) {}
    class aG extends((0, VG.d)(vG)) {
      constructor(GG) {
        super(GG), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class cG extends((0, WG.b)(KG.c)) {}
    let lG = (() => {
        var GG, bG, VG, QG, iG, CG, WG, mG, IG, vG, lG, jG, PG, MG, AG, sG, qG, nG, gG, eG, RG, TG, HG, tG, DG, NG, OG, xG, BG, Gb, bb, Zb, wb;
        let Sb, Lb, yb, kb, Ub, Yb, Vb, pb, fb, Qb, Kb, hb, db, Jb, rb, zb, Eb, ob, Xb, ub, ib, Cb, Wb, mb, Ib, Fb, vb, ab, cb, lb, jb, Pb, Mb, Ab, sb, qb, nb, gb, eb, Rb, Tb, Hb, tb, Db, Nb, Ob, xb, Bb, GZ, bZ, ZZ, wZ, SZ, LZ, yZ, kZ, UZ, YZ, VZ, pZ, fZ, QZ, KZ, hZ, dZ, JZ, rZ, zZ, EZ, oZ, XZ, uZ, iZ, CZ = cG,
          WZ = [],
          mZ = [],
          IZ = [],
          FZ = [],
          vZ = [],
          aZ = [],
          cZ = [],
          lZ = [],
          jZ = [],
          PZ = [],
          MZ = [],
          AZ = [],
          sZ = [],
          qZ = [],
          nZ = [],
          gZ = [],
          eZ = [],
          RZ = [],
          TZ = [],
          HZ = [],
          tZ = [],
          DZ = [],
          NZ = [],
          OZ = [],
          xZ = [],
          BZ = [],
          Gw = [],
          bw = [],
          Zw = [],
          ww = [],
          Sw = [],
          Lw = [],
          yw = [],
          kw = [],
          Uw = [],
          Yw = [],
          Vw = [],
          pw = [],
          fw = [],
          Qw = [],
          Kw = [],
          hw = [],
          dw = [],
          Jw = [],
          rw = [],
          zw = [],
          Ew = [],
          ow = [],
          Xw = [],
          uw = [],
          iw = [],
          Cw = [],
          Ww = [],
          mw = [],
          Iw = [],
          Fw = [],
          vw = [],
          aw = [],
          lw = [],
          jw = [],
          Pw = [],
          Mw = [],
          Aw = [],
          sw = [],
          qw = [],
          nw = [],
          gw = [],
          ew = [],
          Rw = [],
          Tw = [],
          Hw = [],
          tw = [],
          Dw = [],
          Nw = [],
          Ow = [],
          xw = [],
          Bw = [],
          GS = [],
          bS = [],
          ZS = [],
          wS = [],
          SS = [],
          LS = [],
          yS = [],
          kS = [],
          US = [],
          YS = [],
          VS = [],
          pS = [],
          fS = [],
          QS = [],
          KS = [],
          hS = [],
          dS = [],
          JS = [],
          rS = [],
          zS = [],
          ES = [],
          oS = [],
          XS = [],
          uS = [],
          iS = [],
          CS = [],
          WS = [],
          mS = [],
          IS = [],
          FS = [],
          vS = [],
          aS = [],
          cS = [],
          lS = [],
          jS = [],
          PS = [],
          MS = [],
          AS = [],
          sS = [],
          qS = [],
          nS = [],
          gS = [],
          eS = [],
          RS = [],
          TS = [],
          HS = [],
          tS = [],
          DS = [],
          NS = [],
          OS = [],
          xS = [],
          BS = [],
          GL = [],
          bL = [],
          ZL = [],
          wL = [],
          SL = [],
          LL = [],
          yL = [],
          kL = [],
          UL = [],
          YL = [],
          VL = [],
          pL = [],
          fL = [],
          QL = [],
          KL = [],
          hL = [],
          dL = [];
        return GG = class extends CZ {
          get diffuseTexture() {
            return (0, wG.e)(this, bG, "f")
          }
          set diffuseTexture(GG) {
            (0, wG.h)(this, bG, GG, "f")
          }
          get ambientTexture() {
            return (0, wG.e)(this, VG, "f")
          }
          set ambientTexture(GG) {
            (0, wG.h)(this, VG, GG, "f")
          }
          get opacityTexture() {
            return (0, wG.e)(this, QG, "f")
          }
          set opacityTexture(GG) {
            (0, wG.h)(this, QG, GG, "f")
          }
          get reflectionTexture() {
            return (0, wG.e)(this, iG, "f")
          }
          set reflectionTexture(GG) {
            (0, wG.h)(this, iG, GG, "f")
          }
          get emissiveTexture() {
            return (0, wG.e)(this, CG, "f")
          }
          set emissiveTexture(GG) {
            (0, wG.h)(this, CG, GG, "f")
          }
          get specularTexture() {
            return (0, wG.e)(this, WG, "f")
          }
          set specularTexture(GG) {
            (0, wG.h)(this, WG, GG, "f")
          }
          get bumpTexture() {
            return (0, wG.e)(this, mG, "f")
          }
          set bumpTexture(GG) {
            (0, wG.h)(this, mG, GG, "f")
          }
          get lightmapTexture() {
            return (0, wG.e)(this, IG, "f")
          }
          set lightmapTexture(GG) {
            (0, wG.h)(this, IG, GG, "f")
          }
          get refractionTexture() {
            return (0, wG.e)(this, vG, "f")
          }
          set refractionTexture(GG) {
            (0, wG.h)(this, vG, GG, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, wG.e)(this, lG, "f")
          }
          set useAlphaFromDiffuseTexture(GG) {
            (0, wG.h)(this, lG, GG, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, wG.e)(this, jG, "f")
          }
          set useEmissiveAsIllumination(GG) {
            (0, wG.h)(this, jG, GG, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, wG.e)(this, PG, "f")
          }
          set linkEmissiveWithDiffuse(GG) {
            (0, wG.h)(this, PG, GG, "f")
          }
          get useSpecularOverAlpha() {
            return (0, wG.e)(this, MG, "f")
          }
          set useSpecularOverAlpha(GG) {
            (0, wG.h)(this, MG, GG, "f")
          }
          get useReflectionOverAlpha() {
            return (0, wG.e)(this, AG, "f")
          }
          set useReflectionOverAlpha(GG) {
            (0, wG.h)(this, AG, GG, "f")
          }
          get disableLighting() {
            return (0, wG.e)(this, sG, "f")
          }
          set disableLighting(GG) {
            (0, wG.h)(this, sG, GG, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, wG.e)(this, qG, "f")
          }
          set useObjectSpaceNormalMap(GG) {
            (0, wG.h)(this, qG, GG, "f")
          }
          get useParallax() {
            return (0, wG.e)(this, nG, "f")
          }
          set useParallax(GG) {
            (0, wG.h)(this, nG, GG, "f")
          }
          get useParallaxOcclusion() {
            return (0, wG.e)(this, gG, "f")
          }
          set useParallaxOcclusion(GG) {
            (0, wG.h)(this, gG, GG, "f")
          }
          get roughness() {
            return (0, wG.e)(this, eG, "f")
          }
          set roughness(GG) {
            (0, wG.h)(this, eG, GG, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, wG.e)(this, RG, "f")
          }
          set useLightmapAsShadowmap(GG) {
            (0, wG.h)(this, RG, GG, "f")
          }
          get diffuseFresnelParameters() {
            return (0, wG.e)(this, TG, "f")
          }
          set diffuseFresnelParameters(GG) {
            (0, wG.h)(this, TG, GG, "f")
          }
          get opacityFresnelParameters() {
            return (0, wG.e)(this, HG, "f")
          }
          set opacityFresnelParameters(GG) {
            (0, wG.h)(this, HG, GG, "f")
          }
          get reflectionFresnelParameters() {
            return (0, wG.e)(this, tG, "f")
          }
          set reflectionFresnelParameters(GG) {
            (0, wG.h)(this, tG, GG, "f")
          }
          get refractionFresnelParameters() {
            return (0, wG.e)(this, DG, "f")
          }
          set refractionFresnelParameters(GG) {
            (0, wG.h)(this, DG, GG, "f")
          }
          get emissiveFresnelParameters() {
            return (0, wG.e)(this, NG, "f")
          }
          set emissiveFresnelParameters(GG) {
            (0, wG.h)(this, NG, GG, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, wG.e)(this, OG, "f")
          }
          set useReflectionFresnelFromSpecular(GG) {
            (0, wG.h)(this, OG, GG, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, wG.e)(this, xG, "f")
          }
          set useGlossinessFromSpecularMapAlpha(GG) {
            (0, wG.h)(this, xG, GG, "f")
          }
          get maxSimultaneousLights() {
            return (0, wG.e)(this, BG, "f")
          }
          set maxSimultaneousLights(GG) {
            (0, wG.h)(this, BG, GG, "f")
          }
          get invertNormalMapX() {
            return (0, wG.e)(this, Gb, "f")
          }
          set invertNormalMapX(GG) {
            (0, wG.h)(this, Gb, GG, "f")
          }
          get invertNormalMapY() {
            return (0, wG.e)(this, bb, "f")
          }
          set invertNormalMapY(GG) {
            (0, wG.h)(this, bb, GG, "f")
          }
          get twoSidedLighting() {
            return (0, wG.e)(this, Zb, "f")
          }
          set twoSidedLighting(GG) {
            (0, wG.h)(this, Zb, GG, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, wG.e)(this, wb, "f")
          }
          set applyDecalMapAfterDetailMap(GG) {
            (0, wG.h)(this, wb, GG, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(ZG, SG) {
            super(ZG, SG, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || GG.ForceGLSL), this._diffuseTexture = (0, wG.n)(this, WZ, null), bG.set(this, ((0, wG.n)(this, mZ), (0, wG.n)(this, IZ, void 0))), this._ambientTexture = ((0, wG.n)(this, FZ), (0, wG.n)(this, vZ, null)), VG.set(this, ((0, wG.n)(this, aZ), (0, wG.n)(this, cZ, void 0))), this._opacityTexture = ((0, wG.n)(this, lZ), (0, wG.n)(this, jZ, null)), QG.set(this, ((0, wG.n)(this, PZ), (0, wG.n)(this, MZ, void 0))), this._reflectionTexture = ((0, wG.n)(this, AZ), (0, wG.n)(this, sZ, null)), iG.set(this, ((0, wG.n)(this, qZ), (0, wG.n)(this, nZ, void 0))), this._emissiveTexture = ((0, wG.n)(this, gZ), (0, wG.n)(this, eZ, null)), CG.set(this, ((0, wG.n)(this, RZ), (0, wG.n)(this, TZ, void 0))), this._specularTexture = ((0, wG.n)(this, HZ), (0, wG.n)(this, tZ, null)), WG.set(this, ((0, wG.n)(this, DZ), (0, wG.n)(this, NZ, void 0))), this._bumpTexture = ((0, wG.n)(this, OZ), (0, wG.n)(this, xZ, null)), mG.set(this, ((0, wG.n)(this, BZ), (0, wG.n)(this, Gw, void 0))), this._lightmapTexture = ((0, wG.n)(this, bw), (0, wG.n)(this, Zw, null)), IG.set(this, ((0, wG.n)(this, ww), (0, wG.n)(this, Sw, void 0))), this._refractionTexture = ((0, wG.n)(this, Lw), (0, wG.n)(this, yw, null)), vG.set(this, ((0, wG.n)(this, kw), (0, wG.n)(this, Uw, void 0))), this.ambientColor = ((0, wG.n)(this, Yw), (0, wG.n)(this, Vw, new kG.c(0, 0, 0))), this.diffuseColor = ((0, wG.n)(this, pw), (0, wG.n)(this, fw, new kG.c(1, 1, 1))), this.specularColor = ((0, wG.n)(this, Qw), (0, wG.n)(this, Kw, new kG.c(1, 1, 1))), this.emissiveColor = ((0, wG.n)(this, hw), (0, wG.n)(this, dw, new kG.c(0, 0, 0))), this.specularPower = ((0, wG.n)(this, Jw), (0, wG.n)(this, rw, 64)), this._useAlphaFromDiffuseTexture = ((0, wG.n)(this, zw), (0, wG.n)(this, Ew, !1)), lG.set(this, ((0, wG.n)(this, ow), (0, wG.n)(this, Xw, void 0))), this._useEmissiveAsIllumination = ((0, wG.n)(this, uw), (0, wG.n)(this, iw, !1)), jG.set(this, ((0, wG.n)(this, Cw), (0, wG.n)(this, Ww, void 0))), this._linkEmissiveWithDiffuse = ((0, wG.n)(this, mw), (0, wG.n)(this, Iw, !1)), PG.set(this, ((0, wG.n)(this, Fw), (0, wG.n)(this, vw, void 0))), this._useSpecularOverAlpha = ((0, wG.n)(this, aw), (0, wG.n)(this, lw, !1)), MG.set(this, ((0, wG.n)(this, jw), (0, wG.n)(this, Pw, void 0))), this._useReflectionOverAlpha = ((0, wG.n)(this, Mw), (0, wG.n)(this, Aw, !1)), AG.set(this, ((0, wG.n)(this, sw), (0, wG.n)(this, qw, void 0))), this._disableLighting = ((0, wG.n)(this, nw), (0, wG.n)(this, gw, !1)), sG.set(this, ((0, wG.n)(this, ew), (0, wG.n)(this, Rw, void 0))), this._useObjectSpaceNormalMap = ((0, wG.n)(this, Tw), (0, wG.n)(this, Hw, !1)), qG.set(this, ((0, wG.n)(this, tw), (0, wG.n)(this, Dw, void 0))), this._useParallax = ((0, wG.n)(this, Nw), (0, wG.n)(this, Ow, !1)), nG.set(this, ((0, wG.n)(this, xw), (0, wG.n)(this, Bw, void 0))), this._useParallaxOcclusion = ((0, wG.n)(this, GS), (0, wG.n)(this, bS, !1)), gG.set(this, ((0, wG.n)(this, ZS), (0, wG.n)(this, wS, void 0))), this.parallaxScaleBias = ((0, wG.n)(this, SS), (0, wG.n)(this, LS, .05)), this._roughness = ((0, wG.n)(this, yS), (0, wG.n)(this, kS, 0)), eG.set(this, ((0, wG.n)(this, US), (0, wG.n)(this, YS, void 0))), this.indexOfRefraction = ((0, wG.n)(this, VS), (0, wG.n)(this, pS, .98)), this.invertRefractionY = ((0, wG.n)(this, fS), (0, wG.n)(this, QS, !0)), this.alphaCutOff = ((0, wG.n)(this, KS), (0, wG.n)(this, hS, .4)), this._useLightmapAsShadowmap = ((0, wG.n)(this, dS), (0, wG.n)(this, JS, !1)), RG.set(this, ((0, wG.n)(this, rS), (0, wG.n)(this, zS, void 0))), this._diffuseFresnelParameters = ((0, wG.n)(this, ES), (0, wG.n)(this, oS, void 0)), TG.set(this, ((0, wG.n)(this, XS), (0, wG.n)(this, uS, void 0))), this._opacityFresnelParameters = ((0, wG.n)(this, iS), (0, wG.n)(this, CS, void 0)), HG.set(this, ((0, wG.n)(this, WS), (0, wG.n)(this, mS, void 0))), this._reflectionFresnelParameters = ((0, wG.n)(this, IS), (0, wG.n)(this, FS, void 0)), tG.set(this, ((0, wG.n)(this, vS), (0, wG.n)(this, aS, void 0))), this._refractionFresnelParameters = ((0, wG.n)(this, cS), (0, wG.n)(this, lS, void 0)), DG.set(this, ((0, wG.n)(this, jS), (0, wG.n)(this, PS, void 0))), this._emissiveFresnelParameters = ((0, wG.n)(this, MS), (0, wG.n)(this, AS, void 0)), NG.set(this, ((0, wG.n)(this, sS), (0, wG.n)(this, qS, void 0))), this._useReflectionFresnelFromSpecular = ((0, wG.n)(this, nS), (0, wG.n)(this, gS, !1)), OG.set(this, ((0, wG.n)(this, eS), (0, wG.n)(this, RS, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, wG.n)(this, TS), (0, wG.n)(this, HS, !1)), xG.set(this, ((0, wG.n)(this, tS), (0, wG.n)(this, DS, void 0))), this._maxSimultaneousLights = ((0, wG.n)(this, NS), (0, wG.n)(this, OS, 4)), BG.set(this, ((0, wG.n)(this, xS), (0, wG.n)(this, BS, void 0))), this._invertNormalMapX = ((0, wG.n)(this, GL), (0, wG.n)(this, bL, !1)), Gb.set(this, ((0, wG.n)(this, ZL), (0, wG.n)(this, wL, void 0))), this._invertNormalMapY = ((0, wG.n)(this, SL), (0, wG.n)(this, LL, !1)), bb.set(this, ((0, wG.n)(this, yL), (0, wG.n)(this, kL, void 0))), this._twoSidedLighting = ((0, wG.n)(this, UL), (0, wG.n)(this, YL, !1)), Zb.set(this, ((0, wG.n)(this, VL), (0, wG.n)(this, pL, void 0))), this._applyDecalMapAfterDetailMap = ((0, wG.n)(this, fL), (0, wG.n)(this, QL, !1)), wb.set(this, ((0, wG.n)(this, KL), (0, wG.n)(this, hL, void 0))), this._vertexPullingMetadata = ((0, wG.n)(this, dL), null), this._renderTargets = new LG.g(16), this._globalAmbientColor = new kG.c(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new JG.c(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new YG.d, this.getRenderTargetTextures = () => (this._renderTargets.reset(), GG.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), GG.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(GG.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(GG.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === fG.e.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== fG.e.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(bG, ZG) {
            let wG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const SG = ZG._drawWrapper;
            if (SG.effect && this.isFrozen && SG._wasPreviouslyReady && SG._wasPreviouslyUsingInstances === wG) return !0;
            ZG.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), ZG.materialDefines = new aG(this._eventInfo.defineNames));
            const LG = this.Dv(),
              yG = ZG.materialDefines;
            if (this._isReadyForSubMesh(ZG)) return !0;
            const kG = LG.CK();
            if (yG._needNormals = (0, EG.Z)(LG, bG, yG, !0, this._maxSimultaneousLights, this._disableLighting), !(0, EG.e)(LG, bG, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, EG.eb)(LG, yG);
            const VG = this.needAlphaBlendingForMesh(bG) && this.Dv().useOrderIndependentTransparency;
            if ((0, EG.lb)(LG, yG, this.canRenderToMRT && !VG), (0, EG.ib)(LG, yG, VG), uG.e.PrepareDefines(kG.currentRenderPassId, bG, yG), yG._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, yG._needUVs = !1;
              for (let GG = 1; GG <= 6; ++GG) yG["MAINUV" + GG] = !1;
              if (LG.texturesEnabled) {
                if (yG.DIFFUSEDIRECTUV = 0, yG.BUMPDIRECTUV = 0, yG.AMBIENTDIRECTUV = 0, yG.OPACITYDIRECTUV = 0, yG.EMISSIVEDIRECTUV = 0, yG.SPECULARDIRECTUV = 0, yG.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && GG.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, EG.bb)(this._diffuseTexture, yG, "DIFFUSE")
                } else yG.DIFFUSE = !1;
                if (this._ambientTexture && GG.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, EG.bb)(this._ambientTexture, yG, "AMBIENT")
                } else yG.AMBIENT = !1;
                if (this._opacityTexture && GG.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, EG.bb)(this._opacityTexture, yG, "OPACITY"), yG.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else yG.OPACITY = !1;
                if (this._reflectionTexture && GG.ReflectionTextureEnabled ? (yG.ROUGHNESS = this._roughness > 0, yG.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (yG.ROUGHNESS = !1, yG.REFLECTIONOVERALPHA = !1), !(0, EG.W)(LG, this._reflectionTexture, yG)) return !1;
                if (this._emissiveTexture && GG.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, EG.bb)(this._emissiveTexture, yG, "EMISSIVE")
                } else yG.EMISSIVE = !1;
                if (this._lightmapTexture && GG.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, EG.bb)(this._lightmapTexture, yG, "LIGHTMAP"), yG.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, yG.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else yG.LIGHTMAP = !1;
                if (this._specularTexture && GG.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, EG.bb)(this._specularTexture, yG, "SPECULAR"), yG.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else yG.SPECULAR = !1;
                if (LG.CK().getCaps().standardDerivatives && this._bumpTexture && GG.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, EG.bb)(this._bumpTexture, yG, "BUMP"), yG.PARALLAX = this._useParallax, yG.PARALLAX_RHS = LG.useRightHandedSystem, yG.PARALLAXOCCLUSION = this._useParallaxOcclusion, yG.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else yG.BUMP = !1, yG.PARALLAX = !1, yG.PARALLAX_RHS = !1, yG.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && GG.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  yG._needUVs = !0, yG.REFRACTION = !0, yG.REFRACTIONMAP_3D = this._refractionTexture.isCube, yG.RGBDREFRACTION = this._refractionTexture.isRGBD, yG.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else yG.REFRACTION = !1;
                yG.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else yG.DIFFUSE = !1, yG.AMBIENT = !1, yG.OPACITY = !1, yG.REFLECTION = !1, yG.EMISSIVE = !1, yG.LIGHTMAP = !1, yG.BUMP = !1, yG.REFRACTION = !1;
              yG.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), yG.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, yG.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, yG.SPECULAROVERALPHA = this._useSpecularOverAlpha, yG.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, yG.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, yG.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(bG), yG.TEXTURE_REPETITION_MODE = kG.version > 1 || kG.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = yG, this._eventInfo.subMesh = ZG, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (yG._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(yG), yG.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, yG.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (yG._areFresnelDirty && (GG.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (yG.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, yG.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, yG.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, yG.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, yG.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, yG.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, yG._needNormals = !0, yG.FRESNEL = !0) : yG.FRESNEL = !1), yG.AREALIGHTUSED || yG.CLUSTLIGHT_BATCH)
              for (let GG = 0; GG < bG.lightSources.length; GG++)
                if (!bG.lightSources[GG]._isReady()) return !1;
            (0, EG.cb)(bG, LG, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(bG), yG, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ZG.getRenderingMesh(), this._isVertexOutputInvariant), (0, EG.V)(LG, kG, this, yG, wG, null, ZG.getRenderingMesh().hasThinInstances), this._eventInfo.defines = yG, this._eventInfo.mesh = bG, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, EG.U)(bG, yG, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let fG = !1;
            if (yG.isDirty) {
              const wG = yG._areLightsDisposed;
              yG.markAsProcessed();
              const SG = new dG.e;
              yG.REFLECTION && SG.addFallback(0, "REFLECTION"), yG.SPECULAR && SG.addFallback(0, "SPECULAR"), yG.BUMP && SG.addFallback(0, "BUMP"), yG.PARALLAX && SG.addFallback(1, "PARALLAX"), yG.PARALLAX_RHS && SG.addFallback(1, "PARALLAX_RHS"), yG.PARALLAXOCCLUSION && SG.addFallback(0, "PARALLAXOCCLUSION"), yG.SPECULAROVERALPHA && SG.addFallback(0, "SPECULAROVERALPHA"), yG.FOG && SG.addFallback(1, "FOG"), yG.POINTSIZE && SG.addFallback(0, "POINTSIZE"), yG.LOGARITHMICDEPTH && SG.addFallback(0, "LOGARITHMICDEPTH"), (0, EG.G)(yG, SG, this._maxSimultaneousLights), yG.SPECULARTERM && SG.addFallback(0, "SPECULARTERM"), yG.DIFFUSEFRESNEL && SG.addFallback(1, "DIFFUSEFRESNEL"), yG.OPACITYFRESNEL && SG.addFallback(2, "OPACITYFRESNEL"), yG.REFLECTIONFRESNEL && SG.addFallback(3, "REFLECTIONFRESNEL"), yG.EMISSIVEFRESNEL && SG.addFallback(4, "EMISSIVEFRESNEL"), yG.FRESNEL && SG.addFallback(4, "FRESNEL"), yG.MULTIVIEW && SG.addFallback(0, "MULTIVIEW");
              const VG = [UG.l.PositionKind];
              yG.NORMAL && VG.push(UG.l.NormalKind), yG.TANGENT && VG.push(UG.l.TangentKind);
              for (let GG = 1; GG <= 6; ++GG) yG["UV" + GG] && VG.push(`uv${1===GG?"":GG}`);
              yG.VERTEXCOLOR && VG.push(UG.l.ColorKind), (0, EG.M)(VG, bG, yG, SG), (0, EG.P)(VG, yG), (0, EG.R)(VG, bG, yG), (0, EG.K)(VG, bG, yG);
              let QG = "default";
              const KG = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                hG = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, EG.pb)(KG, hG, !1);
              const JG = ["Material", "Scene", "Mesh"],
                oG = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: yG.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = SG, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = yG, this._eventInfo.uniforms = KG, this._eventInfo.attributes = VG, this._eventInfo.samplers = hG, this._eventInfo.uniformBuffersNames = JG, this._eventInfo.customCode = void 0, this._eventInfo.mesh = bG, this._eventInfo.indexParameters = oG, this._callbackPluginEventGeneric(128, this._eventInfo), uG.e.AddUniformsAndSamplers(KG, hG), YG.d.AddUniforms(KG), YG.d.AddSamplers(hG), pG.b && (pG.b.PrepareUniforms(KG, yG), pG.b.PrepareSamplers(hG, yG)), (0, EG.tb)({
                  uniformsNames: KG,
                  uniformBuffersNames: JG,
                  samplers: hG,
                  defines: yG,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, rG.b)(KG), this._useVertexPulling) {
                const GG = ZG.getRenderingMesh(),
                  bG = GG?.geometry;
                bG && (this._vertexPullingMetadata = (0, zG.g)(bG), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((GG, bG) => {
                  KG.push(`vp_${bG}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const XG = {};
              this.customShaderNameResolve && (QG = this.customShaderNameResolve(QG, KG, JG, hG, yG, VG, XG));
              const iG = yG.toString(),
                CG = ZG.effect,
                WG = LG.CK().createEffect(QG, {
                  attributes: VG,
                  uniformsNames: KG,
                  uniformBuffersNames: JG,
                  samplers: hG,
                  defines: iG,
                  fallbacks: SG,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: oG,
                  processFinalCode: XG.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: yG.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: GG._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, kG);
              if (this._eventInfo.customCode = void 0, WG)
                if (this._onEffectCreatedObservable && (FG.effect = WG, FG.subMesh = ZG, this._onEffectCreatedObservable.notifyObservers(FG)), this.allowShaderHotSwapping && CG && !WG.isReady()) {
                  if (yG.markAsUnprocessed(), fG = this.isFrozen, wG) return yG._areLightsDisposed = !0, !1
                } else LG.resetCachedMaterial(), ZG.setEffect(WG, yG, this._materialContext)
            }
            return !(!ZG.effect || !ZG.effect.isReady()) && (yG._renderId = LG.getRenderId(), SG._wasPreviouslyReady = !fG, SG._wasPreviouslyUsingInstances = wG, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const GG = this._uniformBuffer;
            GG.addUniform("diffuseLeftColor", 4), GG.addUniform("diffuseRightColor", 4), GG.addUniform("opacityParts", 4), GG.addUniform("reflectionLeftColor", 4), GG.addUniform("reflectionRightColor", 4), GG.addUniform("refractionLeftColor", 4), GG.addUniform("refractionRightColor", 4), GG.addUniform("emissiveLeftColor", 4), GG.addUniform("emissiveRightColor", 4), GG.addUniform("vDiffuseInfos", 2), GG.addUniform("vAmbientInfos", 2), GG.addUniform("vOpacityInfos", 2), GG.addUniform("vEmissiveInfos", 2), GG.addUniform("vLightmapInfos", 2), GG.addUniform("vSpecularInfos", 2), GG.addUniform("vBumpInfos", 3), GG.addUniform("diffuseMatrix", 16), GG.addUniform("ambientMatrix", 16), GG.addUniform("opacityMatrix", 16), GG.addUniform("emissiveMatrix", 16), GG.addUniform("lightmapMatrix", 16), GG.addUniform("specularMatrix", 16), GG.addUniform("bumpMatrix", 16), GG.addUniform("vTangentSpaceParams", 2), GG.addUniform("pointSize", 1), GG.addUniform("alphaCutOff", 1), GG.addUniform("refractionMatrix", 16), GG.addUniform("vRefractionInfos", 4), GG.addUniform("vRefractionPosition", 3), GG.addUniform("vRefractionSize", 3), GG.addUniform("vSpecularColor", 4), GG.addUniform("vEmissiveColor", 3), GG.addUniform("vDiffuseColor", 4), GG.addUniform("vAmbientColor", 3), GG.addUniform("cameraInfo", 4), GG.addUniform("vTextureRepetitionHexTilingParams", 4), (0, EG.mb)(GG, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(bG, ZG, wG) {
            const SG = this.Dv(),
              LG = wG.materialDefines;
            if (!LG) return;
            const UG = wG.effect;
            if (!UG) return;
            this._activeEffect = UG, ZG.getMeshUniformBuffer().bindToEffect(UG, "Mesh"), ZG.transferToEffect(bG), this._uniformBuffer.bindToEffect(UG, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, SG, ZG, bG, this.isFrozen), uG.e.Bind(SG.CK().currentRenderPassId, this._activeEffect, ZG, bG, this);
            const YG = SG.activeCamera;
            YG ? this._uniformBuffer.updateFloat4("cameraInfo", YG.minZ, YG.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const VG = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", VG[0], VG[1], VG[2], VG[3]), this._eventInfo.subMesh = wG, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), LG.OBJECTSPACE_NORMALMAP && (bG.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const pG = this._mustRebind(SG, UG, wG, ZG.visibility),
              fG = SG.CK()._features.needToAlwaysBindUniformBuffers;
            (0, EG.i)(ZG, UG), this._vertexPullingMetadata && (0, zG.d)(UG, this._vertexPullingMetadata);
            const QG = this._uniformBuffer;
            if (pG) {
              if (this.bindViewProjection(UG), !QG.useUbo || !this.isFrozen || !QG.isSync || wG._drawWrapper._forceRebindOnNextCall) {
                if (GG.FresnelEnabled && LG.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (QG.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), QG.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const GG = kG.l.Color3[0];
                    GG.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), QG.updateColor4("opacityParts", GG, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (QG.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), QG.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (QG.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), QG.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (QG.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), QG.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (LG.ALPHATEST && QG.updateFloat("alphaCutOff", this.alphaCutOff), SG.texturesEnabled && (this._diffuseTexture && GG.DiffuseTextureEnabled && (QG.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, EG.C)(this._diffuseTexture, QG, "diffuse")), this._ambientTexture && GG.AmbientTextureEnabled && (QG.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, EG.C)(this._ambientTexture, QG, "ambient")), this._opacityTexture && GG.OpacityTextureEnabled && (QG.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, EG.C)(this._opacityTexture, QG, "opacity")), (0, EG.o)(SG, LG, QG, kG.c.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && GG.ReflectionTextureEnabled || QG.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && GG.EmissiveTextureEnabled && (QG.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, EG.C)(this._emissiveTexture, QG, "emissive")), this._lightmapTexture && GG.LightmapTextureEnabled && (QG.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, EG.C)(this._lightmapTexture, QG, "lightmap")), this._specularTexture && GG.SpecularTextureEnabled && (QG.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, EG.C)(this._specularTexture, QG, "specular")), this._bumpTexture && SG.CK().getCaps().standardDerivatives && GG.BumpTextureEnabled && (QG.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, EG.C)(this._bumpTexture, QG, "bump"), SG._mirroredCameraPosition ? QG.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : QG.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && GG.RefractionTextureEnabled)) {
                  let GG = 1;
                  if (this._refractionTexture.isCube || (QG.R6("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (GG = this._refractionTexture.depth)), QG.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, GG, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const GG = this._refractionTexture;
                    QG.updateVector3("vRefractionPosition", GG.boundingBoxPosition), QG.updateVector3("vRefractionSize", GG.boundingBoxSize)
                  }
                }
                this.pointsCloud && QG.updateFloat("pointSize", this.pointSize), QG.updateColor4("vSpecularColor", this.specularColor, this.specularPower), QG.updateColor3("vEmissiveColor", GG.EmissiveTextureEnabled ? this.emissiveColor : kG.c.BlackReadOnly), QG.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), SG.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), QG.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              SG.texturesEnabled && (this._diffuseTexture && GG.DiffuseTextureEnabled && UG.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && GG.AmbientTextureEnabled && UG.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && GG.OpacityTextureEnabled && UG.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && GG.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? UG.setTexture("reflectionCubeSampler", this._reflectionTexture) : UG.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && GG.EmissiveTextureEnabled && UG.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && GG.LightmapTextureEnabled && UG.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && GG.SpecularTextureEnabled && UG.setTexture("specularSampler", this._specularTexture), this._bumpTexture && SG.CK().getCaps().standardDerivatives && GG.BumpTextureEnabled && UG.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && GG.RefractionTextureEnabled && (this._refractionTexture.isCube ? UG.setTexture("refractionCubeSampler", this._refractionTexture) : UG.setTexture("refraction2DSampler", this._refractionTexture))), this.Dv().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(ZG) && this.Dv().depthPeelingRenderer.bind(UG), this._eventInfo.subMesh = wG, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, rG.e)(UG, this, SG), this.bindEyePosition(UG)
            } else fG && (this._needToBindSceneUbo = !0);
            !pG && this.isFrozen && !fG || !SG.lightsEnabled || this._disableLighting || (0, EG.u)(SG, ZG, UG, LG, this._maxSimultaneousLights), !pG && this.isFrozen || ((SG.fogEnabled && ZG.applyFog && SG.fogMode !== yG.f.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || ZG.receiveShadows || LG.PREPASS || LG.CLUSTLIGHT_BATCH) && this.bindView(UG), (0, EG.l)(SG, ZG, UG), LG.NUM_MORPH_INFLUENCERS && (0, EG.y)(ZG, UG), LG.BAKED_VERTEX_ANIMATION_TEXTURE && ZG.bakedVertexAnimationManager?.bind(UG, LG.INSTANCES), this.useLogarithmicDepth && (0, EG.w)(LG, UG, SG), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(ZG, this._activeEffect, wG), QG.update()
          }
          _canBindRunFollower(bG, ZG, wG, SG, LG) {
            const yG = bG.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === GG.prototype.isReadyForSubMesh && this.bindForSubMesh === GG.prototype.bindForSubMesh && this._mustRebind === KG.c.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !ZG._features.needToAlwaysBindUniformBuffers && !(yG && yG.enabled && yG.currentRTisSceneRT) && !uG.e._Configurations[ZG.currentRenderPassId] && !SG.materialDefines?.OBJECTSPACE_NORMALMAP && !wG.skeleton && !LG._bonesComputationForcedToCPU
          }
          _bindRunFollower(GG, bG, ZG, wG) {
            this._activeEffect = wG, bG.getMeshUniformBuffer().bindToEffect(wG, "Mesh"), bG.transferToEffect(GG);
            const SG = this._uniformBuffer;
            SG.bindToEffect(wG, "Material");
            const LG = this._scene.activeCamera;
            LG ? SG.updateFloat4("cameraInfo", LG.minZ, LG.maxZ, 0, 0) : SG.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const yG = this.textureRepetitionHexTilingParams;
            SG.updateFloat4("vTextureRepetitionHexTilingParams", yG[0], yG[1], yG[2], yG[3]), this._afterBind(bG, wG, ZG), SG.update()
          }
          getAnimatables() {
            const GG = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && GG.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && GG.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && GG.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && GG.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && GG.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && GG.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && GG.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && GG.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && GG.push(this._refractionTexture), GG
          }
          getActiveTextures() {
            const GG = super.getActiveTextures();
            return this._diffuseTexture && GG.push(this._diffuseTexture), this._ambientTexture && GG.push(this._ambientTexture), this._opacityTexture && GG.push(this._opacityTexture), this._reflectionTexture && GG.push(this._reflectionTexture), this._emissiveTexture && GG.push(this._emissiveTexture), this._specularTexture && GG.push(this._specularTexture), this._bumpTexture && GG.push(this._bumpTexture), this._lightmapTexture && GG.push(this._lightmapTexture), this._refractionTexture && GG.push(this._refractionTexture), GG
          }
          hasTexture(GG) {
            return !!super.hasTexture(GG) || (this._diffuseTexture === GG || (this._ambientTexture === GG || (this._opacityTexture === GG || (this._reflectionTexture === GG || (this._emissiveTexture === GG || (this._specularTexture === GG || (this._bumpTexture === GG || (this._lightmapTexture === GG || this._refractionTexture === GG))))))))
          }
          dispose(GG, bG) {
            bG && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(GG, bG)
          }
          clone(bG) {
            let ZG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              wG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const SG = oG.b.Clone((() => new GG(bG, this.Dv())), this, {
              cloneTexturesOnlyOnce: ZG
            });
            return SG.name = bG, SG.id = bG, this.stencil.copyTo(SG.stencil), this._clonePlugins(SG, wG), SG
          }
          static Parse(bG, ZG, wG) {
            const SG = oG.b.Parse((() => new GG(bG.name, ZG)), bG, ZG, wG);
            return bG.stencil && SG.stencil.parse(bG.stencil, ZG, wG), fG.e._ParsePlugins(bG, SG, ZG, wG), SG
          }
          static get DiffuseTextureEnabled() {
            return hG.d.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(GG) {
            hG.d.DiffuseTextureEnabled = GG
          }
          static get DetailTextureEnabled() {
            return hG.d.DetailTextureEnabled
          }
          static set DetailTextureEnabled(GG) {
            hG.d.DetailTextureEnabled = GG
          }
          static get AmbientTextureEnabled() {
            return hG.d.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(GG) {
            hG.d.AmbientTextureEnabled = GG
          }
          static get OpacityTextureEnabled() {
            return hG.d.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(GG) {
            hG.d.OpacityTextureEnabled = GG
          }
          static get ReflectionTextureEnabled() {
            return hG.d.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(GG) {
            hG.d.ReflectionTextureEnabled = GG
          }
          static get EmissiveTextureEnabled() {
            return hG.d.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(GG) {
            hG.d.EmissiveTextureEnabled = GG
          }
          static get SpecularTextureEnabled() {
            return hG.d.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(GG) {
            hG.d.SpecularTextureEnabled = GG
          }
          static get BumpTextureEnabled() {
            return hG.d.BumpTextureEnabled
          }
          static set BumpTextureEnabled(GG) {
            hG.d.BumpTextureEnabled = GG
          }
          static get LightmapTextureEnabled() {
            return hG.d.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(GG) {
            hG.d.LightmapTextureEnabled = GG
          }
          static get RefractionTextureEnabled() {
            return hG.d.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(GG) {
            hG.d.RefractionTextureEnabled = GG
          }
          static get ColorGradingTextureEnabled() {
            return hG.d.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(GG) {
            hG.d.ColorGradingTextureEnabled = GG
          }
          static get FresnelEnabled() {
            return hG.d.FresnelEnabled
          }
          static set FresnelEnabled(GG) {
            hG.d.FresnelEnabled = GG
          }
        }, bG = new WeakMap, VG = new WeakMap, QG = new WeakMap, iG = new WeakMap, CG = new WeakMap, WG = new WeakMap, mG = new WeakMap, IG = new WeakMap, vG = new WeakMap, lG = new WeakMap, jG = new WeakMap, PG = new WeakMap, MG = new WeakMap, AG = new WeakMap, sG = new WeakMap, qG = new WeakMap, nG = new WeakMap, gG = new WeakMap, eG = new WeakMap, RG = new WeakMap, TG = new WeakMap, HG = new WeakMap, tG = new WeakMap, DG = new WeakMap, NG = new WeakMap, OG = new WeakMap, xG = new WeakMap, BG = new WeakMap, Gb = new WeakMap, bb = new WeakMap, Zb = new WeakMap, wb = new WeakMap, (() => {
          const bG = "function" === typeof Symbol && Symbol.metadata ? Object.create(CZ[Symbol.metadata] ?? null) : void 0;
          Sb = [(0, SG.E)("diffuseTexture")], Lb = [(0, SG.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], yb = [(0, SG.E)("ambientTexture")], kb = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], Ub = [(0, SG.E)("opacityTexture")], Yb = [(0, SG.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], Vb = [(0, SG.E)("reflectionTexture")], pb = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], fb = [(0, SG.E)("emissiveTexture")], Qb = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], Kb = [(0, SG.E)("specularTexture")], hb = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], db = [(0, SG.E)("bumpTexture")], Jb = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], rb = [(0, SG.E)("lightmapTexture")], zb = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], Eb = [(0, SG.E)("refractionTexture")], ob = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], Xb = [(0, SG.m)("ambient")], ub = [(0, SG.m)("diffuse")], ib = [(0, SG.m)("specular")], Cb = [(0, SG.m)("emissive")], Wb = [(0, SG.Q)()], mb = [(0, SG.Q)("useAlphaFromDiffuseTexture")], Ib = [() => ({
            init(GG) {
              return void 0 === GG && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = GG), GG
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(GG) {
              this._useAlphaFromDiffuseTexture = GG
            }
          })], Fb = [(0, SG.Q)("useEmissiveAsIllumination")], vb = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], ab = [(0, SG.Q)("linkEmissiveWithDiffuse")], cb = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], lb = [(0, SG.Q)("useSpecularOverAlpha")], jb = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], Pb = [(0, SG.Q)("useReflectionOverAlpha")], Mb = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], Ab = [(0, SG.Q)("disableLighting")], sb = [(0, SG.d)("_markAllSubMeshesAsLightsDirty")], qb = [(0, SG.Q)("useObjectSpaceNormalMap")], nb = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], gb = [(0, SG.Q)("useParallax")], eb = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], Rb = [(0, SG.Q)("useParallaxOcclusion")], Tb = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], Hb = [(0, SG.Q)()], tb = [(0, SG.Q)("roughness")], Db = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], Nb = [(0, SG.Q)()], Ob = [(0, SG.Q)()], xb = [(0, SG.Q)()], Bb = [(0, SG.Q)("useLightmapAsShadowmap")], GZ = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], bZ = [(0, SG.u)("diffuseFresnelParameters")], ZZ = [(0, SG.d)("_markAllSubMeshesAsFresnelDirty")], wZ = [(0, SG.u)("opacityFresnelParameters")], SZ = [(0, SG.d)("_markAllSubMeshesAsFresnelAndMiscDirty")], LZ = [(0, SG.u)("reflectionFresnelParameters")], yZ = [(0, SG.d)("_markAllSubMeshesAsFresnelDirty")], kZ = [(0, SG.u)("refractionFresnelParameters")], UZ = [(0, SG.d)("_markAllSubMeshesAsFresnelDirty")], YZ = [(0, SG.u)("emissiveFresnelParameters")], VZ = [(0, SG.d)("_markAllSubMeshesAsFresnelDirty")], pZ = [(0, SG.Q)("useReflectionFresnelFromSpecular")], fZ = [(0, SG.d)("_markAllSubMeshesAsFresnelDirty")], QZ = [(0, SG.Q)("useGlossinessFromSpecularMapAlpha")], KZ = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], hZ = [(0, SG.Q)("maxSimultaneousLights")], dZ = [(0, SG.d)("_markAllSubMeshesAsLightsDirty")], JZ = [(0, SG.Q)("invertNormalMapX")], rZ = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], zZ = [(0, SG.Q)("invertNormalMapY")], EZ = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], oZ = [(0, SG.Q)("twoSidedLighting")], XZ = [(0, SG.d)("_markAllSubMeshesAsTexturesDirty")], uZ = [(0, SG.Q)("applyDecalMapAfterDetailMap")], iZ = [(0, SG.d)("_markAllSubMeshesAsMiscDirty")], (0, wG.k)(GG, null, Lb, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "diffuseTexture" in GG,
              get: GG => GG.diffuseTexture,
              set: (GG, bG) => {
                GG.diffuseTexture = bG
              }
            },
            metadata: bG
          }, IZ, FZ), (0, wG.k)(GG, null, kb, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "ambientTexture" in GG,
              get: GG => GG.ambientTexture,
              set: (GG, bG) => {
                GG.ambientTexture = bG
              }
            },
            metadata: bG
          }, cZ, lZ), (0, wG.k)(GG, null, Yb, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "opacityTexture" in GG,
              get: GG => GG.opacityTexture,
              set: (GG, bG) => {
                GG.opacityTexture = bG
              }
            },
            metadata: bG
          }, MZ, AZ), (0, wG.k)(GG, null, pb, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "reflectionTexture" in GG,
              get: GG => GG.reflectionTexture,
              set: (GG, bG) => {
                GG.reflectionTexture = bG
              }
            },
            metadata: bG
          }, nZ, gZ), (0, wG.k)(GG, null, Qb, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "emissiveTexture" in GG,
              get: GG => GG.emissiveTexture,
              set: (GG, bG) => {
                GG.emissiveTexture = bG
              }
            },
            metadata: bG
          }, TZ, HZ), (0, wG.k)(GG, null, hb, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "specularTexture" in GG,
              get: GG => GG.specularTexture,
              set: (GG, bG) => {
                GG.specularTexture = bG
              }
            },
            metadata: bG
          }, NZ, OZ), (0, wG.k)(GG, null, Jb, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "bumpTexture" in GG,
              get: GG => GG.bumpTexture,
              set: (GG, bG) => {
                GG.bumpTexture = bG
              }
            },
            metadata: bG
          }, Gw, bw), (0, wG.k)(GG, null, zb, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "lightmapTexture" in GG,
              get: GG => GG.lightmapTexture,
              set: (GG, bG) => {
                GG.lightmapTexture = bG
              }
            },
            metadata: bG
          }, Sw, Lw), (0, wG.k)(GG, null, ob, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "refractionTexture" in GG,
              get: GG => GG.refractionTexture,
              set: (GG, bG) => {
                GG.refractionTexture = bG
              }
            },
            metadata: bG
          }, Uw, Yw), (0, wG.k)(GG, null, Ib, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "useAlphaFromDiffuseTexture" in GG,
              get: GG => GG.useAlphaFromDiffuseTexture,
              set: (GG, bG) => {
                GG.useAlphaFromDiffuseTexture = bG
              }
            },
            metadata: bG
          }, Xw, uw), (0, wG.k)(GG, null, vb, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: GG => "useEmissiveAsIllumination" in GG,
              get: GG => GG.useEmissiveAsIllumination,
              set: (GG, bG) => {
                GG.useEmissiveAsIllumination = bG
              }
            },
            metadata: bG
          }, Ww, mw), (0, wG.k)(GG, null, cb, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: GG => "linkEmissiveWithDiffuse" in GG,
              get: GG => GG.linkEmissiveWithDiffuse,
              set: (GG, bG) => {
                GG.linkEmissiveWithDiffuse = bG
              }
            },
            metadata: bG
          }, vw, aw), (0, wG.k)(GG, null, jb, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: GG => "useSpecularOverAlpha" in GG,
              get: GG => GG.useSpecularOverAlpha,
              set: (GG, bG) => {
                GG.useSpecularOverAlpha = bG
              }
            },
            metadata: bG
          }, Pw, Mw), (0, wG.k)(GG, null, Mb, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: GG => "useReflectionOverAlpha" in GG,
              get: GG => GG.useReflectionOverAlpha,
              set: (GG, bG) => {
                GG.useReflectionOverAlpha = bG
              }
            },
            metadata: bG
          }, qw, nw), (0, wG.k)(GG, null, sb, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: GG => "disableLighting" in GG,
              get: GG => GG.disableLighting,
              set: (GG, bG) => {
                GG.disableLighting = bG
              }
            },
            metadata: bG
          }, Rw, Tw), (0, wG.k)(GG, null, nb, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: GG => "useObjectSpaceNormalMap" in GG,
              get: GG => GG.useObjectSpaceNormalMap,
              set: (GG, bG) => {
                GG.useObjectSpaceNormalMap = bG
              }
            },
            metadata: bG
          }, Dw, Nw), (0, wG.k)(GG, null, eb, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: GG => "useParallax" in GG,
              get: GG => GG.useParallax,
              set: (GG, bG) => {
                GG.useParallax = bG
              }
            },
            metadata: bG
          }, Bw, GS), (0, wG.k)(GG, null, Tb, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: GG => "useParallaxOcclusion" in GG,
              get: GG => GG.useParallaxOcclusion,
              set: (GG, bG) => {
                GG.useParallaxOcclusion = bG
              }
            },
            metadata: bG
          }, wS, SS), (0, wG.k)(GG, null, Db, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: GG => "roughness" in GG,
              get: GG => GG.roughness,
              set: (GG, bG) => {
                GG.roughness = bG
              }
            },
            metadata: bG
          }, YS, VS), (0, wG.k)(GG, null, GZ, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: GG => "useLightmapAsShadowmap" in GG,
              get: GG => GG.useLightmapAsShadowmap,
              set: (GG, bG) => {
                GG.useLightmapAsShadowmap = bG
              }
            },
            metadata: bG
          }, zS, ES), (0, wG.k)(GG, null, ZZ, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: GG => "diffuseFresnelParameters" in GG,
              get: GG => GG.diffuseFresnelParameters,
              set: (GG, bG) => {
                GG.diffuseFresnelParameters = bG
              }
            },
            metadata: bG
          }, uS, iS), (0, wG.k)(GG, null, SZ, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: GG => "opacityFresnelParameters" in GG,
              get: GG => GG.opacityFresnelParameters,
              set: (GG, bG) => {
                GG.opacityFresnelParameters = bG
              }
            },
            metadata: bG
          }, mS, IS), (0, wG.k)(GG, null, yZ, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: GG => "reflectionFresnelParameters" in GG,
              get: GG => GG.reflectionFresnelParameters,
              set: (GG, bG) => {
                GG.reflectionFresnelParameters = bG
              }
            },
            metadata: bG
          }, aS, cS), (0, wG.k)(GG, null, UZ, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: GG => "refractionFresnelParameters" in GG,
              get: GG => GG.refractionFresnelParameters,
              set: (GG, bG) => {
                GG.refractionFresnelParameters = bG
              }
            },
            metadata: bG
          }, PS, MS), (0, wG.k)(GG, null, VZ, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: GG => "emissiveFresnelParameters" in GG,
              get: GG => GG.emissiveFresnelParameters,
              set: (GG, bG) => {
                GG.emissiveFresnelParameters = bG
              }
            },
            metadata: bG
          }, qS, nS), (0, wG.k)(GG, null, fZ, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: GG => "useReflectionFresnelFromSpecular" in GG,
              get: GG => GG.useReflectionFresnelFromSpecular,
              set: (GG, bG) => {
                GG.useReflectionFresnelFromSpecular = bG
              }
            },
            metadata: bG
          }, RS, TS), (0, wG.k)(GG, null, KZ, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: GG => "useGlossinessFromSpecularMapAlpha" in GG,
              get: GG => GG.useGlossinessFromSpecularMapAlpha,
              set: (GG, bG) => {
                GG.useGlossinessFromSpecularMapAlpha = bG
              }
            },
            metadata: bG
          }, DS, NS), (0, wG.k)(GG, null, dZ, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: GG => "maxSimultaneousLights" in GG,
              get: GG => GG.maxSimultaneousLights,
              set: (GG, bG) => {
                GG.maxSimultaneousLights = bG
              }
            },
            metadata: bG
          }, BS, GL), (0, wG.k)(GG, null, rZ, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: GG => "invertNormalMapX" in GG,
              get: GG => GG.invertNormalMapX,
              set: (GG, bG) => {
                GG.invertNormalMapX = bG
              }
            },
            metadata: bG
          }, wL, SL), (0, wG.k)(GG, null, EZ, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: GG => "invertNormalMapY" in GG,
              get: GG => GG.invertNormalMapY,
              set: (GG, bG) => {
                GG.invertNormalMapY = bG
              }
            },
            metadata: bG
          }, kL, UL), (0, wG.k)(GG, null, XZ, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: GG => "twoSidedLighting" in GG,
              get: GG => GG.twoSidedLighting,
              set: (GG, bG) => {
                GG.twoSidedLighting = bG
              }
            },
            metadata: bG
          }, pL, fL), (0, wG.k)(GG, null, iZ, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: GG => "applyDecalMapAfterDetailMap" in GG,
              get: GG => GG.applyDecalMapAfterDetailMap,
              set: (GG, bG) => {
                GG.applyDecalMapAfterDetailMap = bG
              }
            },
            metadata: bG
          }, hL, dL), (0, wG.k)(null, null, Sb, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "_diffuseTexture" in GG,
              get: GG => GG._diffuseTexture,
              set: (GG, bG) => {
                GG._diffuseTexture = bG
              }
            },
            metadata: bG
          }, WZ, mZ), (0, wG.k)(null, null, yb, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "_ambientTexture" in GG,
              get: GG => GG._ambientTexture,
              set: (GG, bG) => {
                GG._ambientTexture = bG
              }
            },
            metadata: bG
          }, vZ, aZ), (0, wG.k)(null, null, Ub, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "_opacityTexture" in GG,
              get: GG => GG._opacityTexture,
              set: (GG, bG) => {
                GG._opacityTexture = bG
              }
            },
            metadata: bG
          }, jZ, PZ), (0, wG.k)(null, null, Vb, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "_reflectionTexture" in GG,
              get: GG => GG._reflectionTexture,
              set: (GG, bG) => {
                GG._reflectionTexture = bG
              }
            },
            metadata: bG
          }, sZ, qZ), (0, wG.k)(null, null, fb, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "_emissiveTexture" in GG,
              get: GG => GG._emissiveTexture,
              set: (GG, bG) => {
                GG._emissiveTexture = bG
              }
            },
            metadata: bG
          }, eZ, RZ), (0, wG.k)(null, null, Kb, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "_specularTexture" in GG,
              get: GG => GG._specularTexture,
              set: (GG, bG) => {
                GG._specularTexture = bG
              }
            },
            metadata: bG
          }, tZ, DZ), (0, wG.k)(null, null, db, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "_bumpTexture" in GG,
              get: GG => GG._bumpTexture,
              set: (GG, bG) => {
                GG._bumpTexture = bG
              }
            },
            metadata: bG
          }, xZ, BZ), (0, wG.k)(null, null, rb, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "_lightmapTexture" in GG,
              get: GG => GG._lightmapTexture,
              set: (GG, bG) => {
                GG._lightmapTexture = bG
              }
            },
            metadata: bG
          }, Zw, ww), (0, wG.k)(null, null, Eb, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "_refractionTexture" in GG,
              get: GG => GG._refractionTexture,
              set: (GG, bG) => {
                GG._refractionTexture = bG
              }
            },
            metadata: bG
          }, yw, kw), (0, wG.k)(null, null, Xb, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: GG => "ambientColor" in GG,
              get: GG => GG.ambientColor,
              set: (GG, bG) => {
                GG.ambientColor = bG
              }
            },
            metadata: bG
          }, Vw, pw), (0, wG.k)(null, null, ub, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: GG => "diffuseColor" in GG,
              get: GG => GG.diffuseColor,
              set: (GG, bG) => {
                GG.diffuseColor = bG
              }
            },
            metadata: bG
          }, fw, Qw), (0, wG.k)(null, null, ib, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: GG => "specularColor" in GG,
              get: GG => GG.specularColor,
              set: (GG, bG) => {
                GG.specularColor = bG
              }
            },
            metadata: bG
          }, Kw, hw), (0, wG.k)(null, null, Cb, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: GG => "emissiveColor" in GG,
              get: GG => GG.emissiveColor,
              set: (GG, bG) => {
                GG.emissiveColor = bG
              }
            },
            metadata: bG
          }, dw, Jw), (0, wG.k)(null, null, Wb, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: GG => "specularPower" in GG,
              get: GG => GG.specularPower,
              set: (GG, bG) => {
                GG.specularPower = bG
              }
            },
            metadata: bG
          }, rw, zw), (0, wG.k)(null, null, mb, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: GG => "_useAlphaFromDiffuseTexture" in GG,
              get: GG => GG._useAlphaFromDiffuseTexture,
              set: (GG, bG) => {
                GG._useAlphaFromDiffuseTexture = bG
              }
            },
            metadata: bG
          }, Ew, ow), (0, wG.k)(null, null, Fb, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: GG => "_useEmissiveAsIllumination" in GG,
              get: GG => GG._useEmissiveAsIllumination,
              set: (GG, bG) => {
                GG._useEmissiveAsIllumination = bG
              }
            },
            metadata: bG
          }, iw, Cw), (0, wG.k)(null, null, ab, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: GG => "_linkEmissiveWithDiffuse" in GG,
              get: GG => GG._linkEmissiveWithDiffuse,
              set: (GG, bG) => {
                GG._linkEmissiveWithDiffuse = bG
              }
            },
            metadata: bG
          }, Iw, Fw), (0, wG.k)(null, null, lb, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: GG => "_useSpecularOverAlpha" in GG,
              get: GG => GG._useSpecularOverAlpha,
              set: (GG, bG) => {
                GG._useSpecularOverAlpha = bG
              }
            },
            metadata: bG
          }, lw, jw), (0, wG.k)(null, null, Pb, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: GG => "_useReflectionOverAlpha" in GG,
              get: GG => GG._useReflectionOverAlpha,
              set: (GG, bG) => {
                GG._useReflectionOverAlpha = bG
              }
            },
            metadata: bG
          }, Aw, sw), (0, wG.k)(null, null, Ab, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: GG => "_disableLighting" in GG,
              get: GG => GG._disableLighting,
              set: (GG, bG) => {
                GG._disableLighting = bG
              }
            },
            metadata: bG
          }, gw, ew), (0, wG.k)(null, null, qb, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: GG => "_useObjectSpaceNormalMap" in GG,
              get: GG => GG._useObjectSpaceNormalMap,
              set: (GG, bG) => {
                GG._useObjectSpaceNormalMap = bG
              }
            },
            metadata: bG
          }, Hw, tw), (0, wG.k)(null, null, gb, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: GG => "_useParallax" in GG,
              get: GG => GG._useParallax,
              set: (GG, bG) => {
                GG._useParallax = bG
              }
            },
            metadata: bG
          }, Ow, xw), (0, wG.k)(null, null, Rb, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: GG => "_useParallaxOcclusion" in GG,
              get: GG => GG._useParallaxOcclusion,
              set: (GG, bG) => {
                GG._useParallaxOcclusion = bG
              }
            },
            metadata: bG
          }, bS, ZS), (0, wG.k)(null, null, Hb, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: GG => "parallaxScaleBias" in GG,
              get: GG => GG.parallaxScaleBias,
              set: (GG, bG) => {
                GG.parallaxScaleBias = bG
              }
            },
            metadata: bG
          }, LS, yS), (0, wG.k)(null, null, tb, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: GG => "_roughness" in GG,
              get: GG => GG._roughness,
              set: (GG, bG) => {
                GG._roughness = bG
              }
            },
            metadata: bG
          }, kS, US), (0, wG.k)(null, null, Nb, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: GG => "indexOfRefraction" in GG,
              get: GG => GG.indexOfRefraction,
              set: (GG, bG) => {
                GG.indexOfRefraction = bG
              }
            },
            metadata: bG
          }, pS, fS), (0, wG.k)(null, null, Ob, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: GG => "invertRefractionY" in GG,
              get: GG => GG.invertRefractionY,
              set: (GG, bG) => {
                GG.invertRefractionY = bG
              }
            },
            metadata: bG
          }, QS, KS), (0, wG.k)(null, null, xb, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: GG => "alphaCutOff" in GG,
              get: GG => GG.alphaCutOff,
              set: (GG, bG) => {
                GG.alphaCutOff = bG
              }
            },
            metadata: bG
          }, hS, dS), (0, wG.k)(null, null, Bb, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: GG => "_useLightmapAsShadowmap" in GG,
              get: GG => GG._useLightmapAsShadowmap,
              set: (GG, bG) => {
                GG._useLightmapAsShadowmap = bG
              }
            },
            metadata: bG
          }, JS, rS), (0, wG.k)(null, null, bZ, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: GG => "_diffuseFresnelParameters" in GG,
              get: GG => GG._diffuseFresnelParameters,
              set: (GG, bG) => {
                GG._diffuseFresnelParameters = bG
              }
            },
            metadata: bG
          }, oS, XS), (0, wG.k)(null, null, wZ, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: GG => "_opacityFresnelParameters" in GG,
              get: GG => GG._opacityFresnelParameters,
              set: (GG, bG) => {
                GG._opacityFresnelParameters = bG
              }
            },
            metadata: bG
          }, CS, WS), (0, wG.k)(null, null, LZ, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: GG => "_reflectionFresnelParameters" in GG,
              get: GG => GG._reflectionFresnelParameters,
              set: (GG, bG) => {
                GG._reflectionFresnelParameters = bG
              }
            },
            metadata: bG
          }, FS, vS), (0, wG.k)(null, null, kZ, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: GG => "_refractionFresnelParameters" in GG,
              get: GG => GG._refractionFresnelParameters,
              set: (GG, bG) => {
                GG._refractionFresnelParameters = bG
              }
            },
            metadata: bG
          }, lS, jS), (0, wG.k)(null, null, YZ, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: GG => "_emissiveFresnelParameters" in GG,
              get: GG => GG._emissiveFresnelParameters,
              set: (GG, bG) => {
                GG._emissiveFresnelParameters = bG
              }
            },
            metadata: bG
          }, AS, sS), (0, wG.k)(null, null, pZ, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: GG => "_useReflectionFresnelFromSpecular" in GG,
              get: GG => GG._useReflectionFresnelFromSpecular,
              set: (GG, bG) => {
                GG._useReflectionFresnelFromSpecular = bG
              }
            },
            metadata: bG
          }, gS, eS), (0, wG.k)(null, null, QZ, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: GG => "_useGlossinessFromSpecularMapAlpha" in GG,
              get: GG => GG._useGlossinessFromSpecularMapAlpha,
              set: (GG, bG) => {
                GG._useGlossinessFromSpecularMapAlpha = bG
              }
            },
            metadata: bG
          }, HS, tS), (0, wG.k)(null, null, hZ, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: GG => "_maxSimultaneousLights" in GG,
              get: GG => GG._maxSimultaneousLights,
              set: (GG, bG) => {
                GG._maxSimultaneousLights = bG
              }
            },
            metadata: bG
          }, OS, xS), (0, wG.k)(null, null, JZ, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: GG => "_invertNormalMapX" in GG,
              get: GG => GG._invertNormalMapX,
              set: (GG, bG) => {
                GG._invertNormalMapX = bG
              }
            },
            metadata: bG
          }, bL, ZL), (0, wG.k)(null, null, zZ, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: GG => "_invertNormalMapY" in GG,
              get: GG => GG._invertNormalMapY,
              set: (GG, bG) => {
                GG._invertNormalMapY = bG
              }
            },
            metadata: bG
          }, LL, yL), (0, wG.k)(null, null, oZ, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: GG => "_twoSidedLighting" in GG,
              get: GG => GG._twoSidedLighting,
              set: (GG, bG) => {
                GG._twoSidedLighting = bG
              }
            },
            metadata: bG
          }, YL, VL), (0, wG.k)(null, null, uZ, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: GG => "_applyDecalMapAfterDetailMap" in GG,
              get: GG => GG._applyDecalMapAfterDetailMap,
              set: (GG, bG) => {
                GG._applyDecalMapAfterDetailMap = bG
              }
            },
            metadata: bG
          }, QL, KL), bG && Object.defineProperty(GG, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bG
          })
        })(), GG.ForceGLSL = !1, GG._ShaderLoader = new XG.c((() => [Promise.all([ZG.e(322), ZG.e(321)]).then((() => ZG(42323))), Promise.all([ZG.e(327), ZG.e(323), ZG.e(336), ZG.e(326)]).then((() => ZG(42519)))]), (() => [Promise.all([ZG.e(343), ZG.e(338)]).then((() => ZG(42682))), Promise.all([ZG.e(344), ZG.e(354), ZG.e(340)]).then((() => ZG(42863)))])), GG
      })(),
      jG = !1;

    function PG() {
      jG || (jG = !0, (0, pG.e)(), (0, mG.i)("BABYLON.StandardMaterial", lG), yG.f.DefaultMaterialFactory = GG => new lG("default material", GG))
    }
    Object.getOwnPropertyDescriptor(lG.prototype, "decalMap") || Object.defineProperty(lG.prototype, "decalMap", (0, IG.d)("StandardMaterial", "decalMap"))
  },
  40757: (GG, bG, ZG) => {
    function wG(GG) {
      return class extends GG {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    ZG.d(bG, {
      d: () => wG
    })
  },
  40747: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    class wG {
      constructor(GG, bG) {
        this._webGL = {
          load: GG,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: bG,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(GG) {
        const bG = 1 === GG ? this._webGPU : this._webGL;
        return bG.loaded ? void 0 : async () => {
          await this._loadAsync(bG)
        }
      }
      async _loadAsync(GG) {
        if (GG.loaded) return;
        let bG = GG.loadPromise;
        const ZG = null === bG;
        ZG && (bG = Promise.all(GG.load()), GG.loadPromise = bG);
        let wG = !1;
        try {
          await bG, wG = !0
        } finally {
          ZG && this._completeLoad(GG, wG)
        }
      }
      _completeLoad(GG, bG) {
        GG.loaded = bG, GG.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);