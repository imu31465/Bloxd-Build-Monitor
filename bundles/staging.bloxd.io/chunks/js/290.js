export const id = 290;
export const ids = [290];
export const modules = {
  41676: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rH
    });
    var AH = LH(41304);

    function rH(HH) {
      return class extends HH {
        constructor() {
          super(...arguments);
          const HH = new.target;
          if (!HH[Symbol.metadata]) {
            const BH = Object.getPrototypeOf(HH)?.[Symbol.metadata];
            HH[Symbol.metadata] = BH ? Object.create(BH) : {}
          }
          const BH = (0, AH.e)(HH[Symbol.metadata]);
          BH._imageProcessingConfiguration || (BH._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(HH) {
          this._attachImageProcessingConfiguration(HH), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(HH) {
          HH !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !HH && this.yN ? this._imageProcessingConfiguration = this.yN().imageProcessingConfiguration : HH && (this._imageProcessingConfiguration = HH), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(HH) {
          this.imageProcessingConfiguration.colorCurvesEnabled = HH
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(HH) {
          this.imageProcessingConfiguration.colorGradingEnabled = HH
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(HH) {
          this._imageProcessingConfiguration.toneMappingEnabled = HH
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(HH) {
          this._imageProcessingConfiguration.exposure = HH
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(HH) {
          this._imageProcessingConfiguration.contrast = HH
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(HH) {
          this._imageProcessingConfiguration.colorGradingTexture = HH
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(HH) {
          this._imageProcessingConfiguration.colorCurves = HH
        }
      }
    }
  },
  41561: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      e: () => rH
    });
    var AH = LH(41564);

    function rH(HH) {
      return class extends HH {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class SH extends AH.c {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  41644: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => XH
    });
    var AH = LH(41290),
      rH = LH(41573),
      SH = LH(41297),
      hH = LH(41632),
      tH = LH(41564),
      zH = LH(41648),
      CH = LH(41618);
    class EH extends tH.c {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let XH = (() => {
      var HH, BH, LH, tH;
      let XH, GH, YH, uH, QH, WH, MH = zH.b,
        xH = [],
        vH = [],
        PH = [],
        TH = [],
        UH = [],
        VH = [],
        OH = [],
        bH = [],
        kH = [],
        mH = [],
        oH = [],
        IH = [];
      return HH = class extends MH {
        get texture() {
          return (0, AH.e)(this, BH, "f")
        }
        set texture(HH) {
          (0, AH.f)(this, BH, HH, "f")
        }
        get normalBlendMethod() {
          return (0, AH.e)(this, LH, "f")
        }
        set normalBlendMethod(HH) {
          (0, AH.f)(this, LH, HH, "f")
        }
        get isEnabled() {
          return (0, AH.e)(this, tH, "f")
        }
        set isEnabled(HH) {
          (0, AH.f)(this, tH, HH, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(HH) {
          let SH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(HH, "DetailMap", 140, new EH, SH), this._texture = null, BH.set(this, (0, AH.k)(this, xH, void 0)), this.diffuseBlendLevel = ((0, AH.k)(this, vH), (0, AH.k)(this, PH, 1)), this.roughnessBlendLevel = ((0, AH.k)(this, TH), (0, AH.k)(this, UH, 1)), this.bumpLevel = ((0, AH.k)(this, VH), (0, AH.k)(this, OH, 1)), this._normalBlendMethod = ((0, AH.k)(this, bH), rH.c.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), LH.set(this, (0, AH.k)(this, kH, void 0)), this._isEnabled = ((0, AH.k)(this, mH), !1), tH.set(this, (0, AH.k)(this, oH, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, AH.k)(this, IH), this._internalMarkAllSubMeshesAsTexturesDirty = HH._dirtyCallbacks[1]
        }
        isReadyForSubMesh(HH, BH, LH) {
          return !this._isEnabled || !(HH._areTexturesDirty && BH.texturesEnabled && LH.getCaps().standardDerivatives && this._texture && hH.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(HH, BH) {
          if (this._isEnabled) {
            HH.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const LH = BH.Iu();
            HH._areTexturesDirty && (LH.getCaps().standardDerivatives && this._texture && hH.e.DetailTextureEnabled && this._isEnabled ? ((0, CH.X)(this._texture, HH, "DETAIL"), HH.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : HH.DETAIL = !1)
          } else HH.DETAIL = !1
        }
        bindForSubMesh(HH, BH) {
          if (!this._isEnabled) return;
          const LH = this._material.isFrozen;
          HH.useUbo && LH && HH.isSync || this._texture && hH.e.DetailTextureEnabled && (HH.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, CH.u)(this._texture, HH, "detail")), BH.texturesEnabled && this._texture && hH.e.DetailTextureEnabled && HH.setTexture("detailSampler", this._texture)
        }
        hasTexture(HH) {
          return this._texture === HH
        }
        getActiveTextures(HH) {
          this._texture && HH.push(this._texture)
        }
        getAnimatables(HH) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && HH.push(this._texture)
        }
        dispose(HH) {
          HH && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(HH) {
          HH.push("detailSampler")
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
      }, BH = new WeakMap, LH = new WeakMap, tH = new WeakMap, (() => {
        const BH = "function" === typeof Symbol && Symbol.metadata ? Object.create(MH[Symbol.metadata] ?? null) : void 0;
        XH = [(0, SH.A)("detailTexture"), (0, SH.e)("_markAllSubMeshesAsTexturesDirty")], GH = [(0, SH.H)()], YH = [(0, SH.H)()], uH = [(0, SH.H)()], QH = [(0, SH.H)(), (0, SH.e)("_markAllSubMeshesAsTexturesDirty")], WH = [(0, SH.H)(), (0, SH.e)("_markAllSubMeshesAsTexturesDirty")], (0, AH.g)(HH, null, XH, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: HH => "texture" in HH,
            get: HH => HH.texture,
            set: (HH, BH) => {
              HH.texture = BH
            }
          },
          metadata: BH
        }, xH, vH), (0, AH.g)(HH, null, QH, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: HH => "normalBlendMethod" in HH,
            get: HH => HH.normalBlendMethod,
            set: (HH, BH) => {
              HH.normalBlendMethod = BH
            }
          },
          metadata: BH
        }, kH, mH), (0, AH.g)(HH, null, WH, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "isEnabled" in HH,
            get: HH => HH.isEnabled,
            set: (HH, BH) => {
              HH.isEnabled = BH
            }
          },
          metadata: BH
        }, oH, IH), (0, AH.g)(null, null, GH, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: HH => "diffuseBlendLevel" in HH,
            get: HH => HH.diffuseBlendLevel,
            set: (HH, BH) => {
              HH.diffuseBlendLevel = BH
            }
          },
          metadata: BH
        }, PH, TH), (0, AH.g)(null, null, YH, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: HH => "roughnessBlendLevel" in HH,
            get: HH => HH.roughnessBlendLevel,
            set: (HH, BH) => {
              HH.roughnessBlendLevel = BH
            }
          },
          metadata: BH
        }, UH, VH), (0, AH.g)(null, null, uH, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: HH => "bumpLevel" in HH,
            get: HH => HH.bumpLevel,
            set: (HH, BH) => {
              HH.bumpLevel = BH
            }
          },
          metadata: BH
        }, OH, bH), BH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: BH
        })
      })(), HH
    })()
  },
  41564: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    class AH {
      constructor(HH) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = HH, HH)
          for (const BH in HH) Object.prototype.hasOwnProperty.call(HH, BH) && this._setDefaultValue(BH)
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
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || HH, this._isDirty = !0
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
        for (const HH of Object.keys(this)) "_" !== HH[0] && this._keys.push(HH);
        if (this._externalProperties)
          for (const HH in this._externalProperties) - 1 === this._keys.indexOf(HH) && this._keys.push(HH)
      }
      isEqual(HH) {
        if (this._keys.length !== HH._keys.length) return !1;
        for (let BH = 0; BH < this._keys.length; BH++) {
          const LH = this._keys[BH];
          if (this[LH] !== HH[LH]) return !1
        }
        return !0
      }
      cloneTo(HH) {
        this._keys.length !== HH._keys.length && (HH._keys = this._keys.slice(0));
        for (let BH = 0; BH < this._keys.length; BH++) {
          const LH = this._keys[BH];
          HH[LH] = this[LH]
        }
      }
      reset() {
        for (const HH of this._keys) this._setDefaultValue(HH)
      }
      _setDefaultValue(HH) {
        const BH = this._externalProperties?.[HH]?.type ?? typeof this[HH],
          LH = this._externalProperties?.[HH]?.default;
        switch (BH) {
          case "number":
            this[HH] = LH ?? 0;
            break;
          case "string":
            this[HH] = LH ?? "";
            break;
          default:
            this[HH] = LH ?? !1
        }
      }
      toString() {
        let HH = "";
        for (let BH = 0; BH < this._keys.length; BH++) {
          const LH = this._keys[BH],
            AH = this[LH];
          switch (typeof AH) {
            case "number":
            case "string":
              HH += "#define " + LH + " " + AH + "\n";
              break;
            default:
              AH && (HH += "#define " + LH + "\n")
          }
        }
        return HH
      }
    }
  },
  41662: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => tH,
      i: () => hH,
      m: () => SH
    });
    var AH, rH = LH(37963);

    function SH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const AH = BH(HH);
      if (!Number.isInteger(AH) || AH < 0 || AH > LH) throw new Error(`Invalid geometry object ID ${AH} for mesh "${HH.name}". Object IDs must be integers between 0 and 0x${LH.toString(16).toUpperCase()}.`);
      return AH
    }

    function hH(HH, BH) {
      const LH = BH(HH);
      if (!Number.isInteger(LH) || LH < 0 || LH > 255 || 0 !== LH && 0 === (63 & LH)) throw new Error(`Invalid geometry mesh-blending tag ${LH} for mesh "${HH.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return LH
    }! function(HH) {
      HH[HH.Zero = 0] = "Zero", HH[HH.One = 1] = "One", HH[HH.MaxViewZ = 2] = "MaxViewZ", HH[HH.NoClear = 3] = "NoClear"
    }(AH || (AH = {}));
    class tH {
      static CreateConfiguration(HH) {
        return tH._Configurations[HH] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: rH.e.Zero(),
          currentViewProjection: rH.e.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, tH._Configurations[HH]
      }
      static DeleteConfiguration(HH) {
        delete tH._Configurations[HH]
      }
      static GetConfiguration(HH) {
        return tH._Configurations[HH]
      }
      static _PrepareConfiguration(HH, BH, LH) {
        const AH = tH._Configurations[HH];
        AH._attachments = BH, AH._colorAttachments = LH, AH._mrtCount = BH.length;
        let rH = "#define PREPASS\n";
        for (const SH of tH.GeometryTextureDescriptions) {
          const HH = AH.defines[SH.defineIndex];
          void 0 !== HH && (rH += `#define ${SH.define}\n#define ${SH.defineIndex} ${HH}\n`)
        }
        AH.objectIdIsRedFormat && (rH += "#define PREPASS_OBJECT_ID_R8\n"), AH._defines = rH + `#define SCENE_MRT_COUNT ${BH.length}\n`
      }
      static _PrepareStringDefines(HH, BH) {
        const LH = tH._Configurations[HH];
        return !!LH?._defines && (BH.push(LH._defines), !0)
      }
      static _BindAttachmentsForEffect(HH, BH) {
        const LH = tH._Configurations[HH.currentRenderPassId];
        return !LH?._attachments || (HH.bindAttachments(BH._multiTarget ? LH._attachments : LH._colorAttachments), BH._multiTarget || void 0 !== LH.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(HH) {
        const BH = tH._Configurations[HH.currentRenderPassId];
        BH?._colorAttachments && HH.bindAttachments(BH._colorAttachments)
      }
      static _BindColorAttachments(HH) {
        const BH = tH._Configurations[HH.currentRenderPassId];
        return !BH?._colorAttachments || (HH.bindAttachments(BH._colorAttachments), void 0 !== BH.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(HH) {
        const BH = tH._Configurations[HH.currentRenderPassId];
        return !BH?._colorAttachments || void 0 !== BH.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(HH, BH) {
        const LH = tH._Configurations[HH.currentRenderPassId];
        if (!LH) return;
        const AH = HH.getAlphaMode(),
          rH = void 0 === LH.defines.PREPASS_COLOR_INDEX || 2 === AH || 1 === AH || 17 === AH;
        BH.setFloat("geometryZeroAlphaDiscard", rH ? 1 : 0)
      }
      static AddUniformsAndSamplers(HH, BH) {
        HH.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(HH, BH) {
        for (const LH of BH)
          if (LH.jU)
            for (const BH of LH.jU) BH._removeDrawWrapper(HH)
      }
      static PrepareDefines(HH, BH, LH) {
        if (!LH._arePrePassDirty) return;
        const AH = tH._Configurations[HH];
        if (!AH) return;
        LH.PREPASS = !0;
        let rH = 0;
        for (let SH = 0; SH < tH.GeometryTextureDescriptions.length; SH++) {
          const HH = tH.GeometryTextureDescriptions[SH],
            BH = HH.define,
            hH = HH.defineIndex,
            zH = AH.defines[hH];
          void 0 !== zH ? (LH[BH] = !0, LH[hH] = zH, rH++) : (LH[BH] = !1, delete LH[hH])
        }
        LH.PREPASS_OBJECT_ID_R8 = AH.objectIdIsRedFormat, LH.SCENE_MRT_COUNT = AH._mrtCount ?? rH, LH.BONES_VELOCITY_ENABLED = BH.useBones && BH.computeBonesUsingShaders && BH.skeleton && !BH.skeleton.isUsingTextureForMatrices && -1 === AH.excludedSkinnedMesh.indexOf(BH)
      }
      static Bind(HH, BH, LH, AH, rH) {
        const zH = tH._Configurations[HH];
        if (!zH) return;
        const CH = LH.yN(),
          EH = CH.Iu();
        if (zH.reverseCulling && EH.setStateCullFaceType(CH._mirroredCameraPosition ? rH.cullBackFaces : !rH.cullBackFaces), void 0 !== zH.defines.PREPASS_OBJECT_ID_INDEX) {
          const HH = zH.objectIdIsRedFormat ? 255 : 16777215;
          let AH = LH.uniqueId;
          if (zH.objectIdProvider) AH = SH(LH, zH.objectIdProvider, HH);
          else if (AH > HH) throw new Error(`Invalid geometry object ID ${AH} for mesh "${LH.name}". Object IDs must be integers between 0 and 0x${HH.toString(16).toUpperCase()}.`);
          BH.setFloat("objectId", AH)
        }
        if (void 0 !== zH.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const HH = zH.meshBlendTagProvider ? hH(LH, zH.meshBlendTagProvider) : LH.meshBlendingTag;
          BH.setInt("meshBlendTag", HH)
        }
        if (void 0 !== zH.defines.PREPASS_VELOCITY_INDEX || void 0 !== zH.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const HH = zH._currentWorldMatrices ?? (zH._currentWorldMatrices = {}),
            rH = zH._worldMatrixFrameIds ?? (zH._worldMatrixFrameIds = {});
          if (HH[LH.uniqueId] || (HH[LH.uniqueId] = AH.clone(), zH.previousWorldMatrices[LH.uniqueId] = AH.clone()), rH[LH.uniqueId] !== EH.frameId && (zH.previousWorldMatrices[LH.uniqueId].Tm(HH[LH.uniqueId]), rH[LH.uniqueId] = EH.frameId), HH[LH.uniqueId].Tm(AH), -1 === zH.lastUpdateFrameId ? (zH.lastUpdateFrameId = EH.frameId, zH.previousViewProjection.Tm(CH.getTransformMatrix()), zH.currentViewProjection.Tm(CH.getTransformMatrix())) : zH.currentViewProjection.updateFlag !== CH.getTransformMatrix().updateFlag ? (zH.lastUpdateFrameId = EH.frameId, zH.previousViewProjection.Tm(zH.currentViewProjection), zH.currentViewProjection.Tm(CH.getTransformMatrix())) : zH.lastUpdateFrameId !== EH.frameId && (zH.lastUpdateFrameId = EH.frameId, zH.previousViewProjection.Tm(zH.currentViewProjection)), BH.setMatrix("previousWorld", zH.previousWorldMatrices[LH.uniqueId]), BH.setMatrix("previousViewProjection", zH.previousViewProjection), LH.useBones && LH.computeBonesUsingShaders && LH.skeleton) {
            const HH = LH.skeleton;
            if (!HH.isUsingTextureForMatrices || -1 === BH.getUniformIndex("boneTextureInfo")) {
              const AH = HH.getTransformMatrices(LH);
              AH && (zH.previousBones[LH.uniqueId] || (zH.previousBones[LH.uniqueId] = AH.slice()), BH.setMatrices("mPreviousBones", zH.previousBones[LH.uniqueId]), zH.previousBones[LH.uniqueId].set(AH))
            }
          }
        }
      }
    }
    tH.GeometryTextureDescriptions = [{
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
    }], tH._Configurations = {}
  },
  41648: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => GH,
      e: () => uH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(41173),
      hH = LH(41138);
    const tH = new RegExp("^([gimus]+)!");
    class zH {
      constructor(HH) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = HH, this._scene = HH.yN(), this._engine = this._scene.Iu()
      }
      _addPlugin(HH) {
        for (let AH = 0; AH < this._plugins.length; ++AH)
          if (this._plugins[AH].name === HH.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !HH.isCompatible(this._material.shaderLanguage)) throw `The plugin "${HH.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const BH = HH.getClassName();
        zH._MaterialPluginClassToMainDefine[BH] || (zH._MaterialPluginClassToMainDefine[BH] = "MATERIALPLUGIN_" + ++zH._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (HH, BH) => this._handlePluginEvent(HH, BH), this._plugins.push(HH), this._plugins.sort(((HH, BH) => HH.priority - BH.priority)), this._codeInjectionPoints = {};
        const LH = {};
        LH[zH._MaterialPluginClassToMainDefine[BH]] = {
          type: "boolean",
          default: !0
        };
        for (const AH of this._plugins) AH.collectDefines(LH), this._collectPointNames("vertex", AH.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", AH.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = LH, !0
      }
      _activatePlugin(HH) {
        -1 === this._activePlugins.indexOf(HH) && (this._activePlugins.push(HH), this._activePlugins.sort(((HH, BH) => HH.priority - BH.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), HH.registerForExtraEvents && (this._activePluginsForExtraEvents.push(HH), this._activePluginsForExtraEvents.sort(((HH, BH) => HH.priority - BH.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(HH) {
        for (let BH = 0; BH < this._plugins.length; ++BH)
          if (this._plugins[BH].name === HH) return this._plugins[BH];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(HH) {
        let BH = !0;
        for (const LH of this._activePlugins) BH = BH && LH.isReadyForSubMesh(HH.defines, this._scene, this._engine, HH.subMesh);
        HH.isReadyForSubMesh = BH
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(HH) {
        for (const BH of this._activePlugins) BH.prepareDefinesBeforeAttributes(HH.defines, this._scene, HH.mesh)
      }
      _handlePluginEventPrepareDefines(HH) {
        for (const BH of this._activePlugins) BH.prepareDefines(HH.defines, this._scene, HH.mesh)
      }
      _handlePluginEventHardBindForSubMesh(HH) {
        for (const BH of this._activePluginsForExtraEvents) BH.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, HH.subMesh)
      }
      _handlePluginEventBindForSubMesh(HH) {
        for (const BH of this._activePlugins) BH.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, HH.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(HH) {
        let BH = !1;
        for (const LH of this._activePluginsForExtraEvents)
          if (BH = LH.hasRenderTargetTextures(), BH) break;
        HH.hasRenderTargetTextures = BH
      }
      _handlePluginEventFillRenderTargetTextures(HH) {
        for (const BH of this._activePluginsForExtraEvents) BH.fillRenderTargetTextures(HH.renderTargets)
      }
      _handlePluginEvent(HH, BH) {
        switch (HH) {
          case 512: {
            const HH = BH;
            for (const BH of this._activePlugins) BH.getActiveTextures(HH.activeTextures);
            break
          }
          case 256: {
            const HH = BH;
            for (const BH of this._activePlugins) BH.getAnimatables(HH.animatables);
            break
          }
          case 1024: {
            const HH = BH;
            let LH = !1;
            for (const BH of this._activePlugins)
              if (LH = BH.hasTexture(HH.texture), LH) break;
            HH.hasTexture = LH;
            break
          }
          case 2: {
            const HH = BH;
            for (const BH of this._plugins) BH.dispose(HH.forceDisposeTextures);
            break
          }
          case 4:
            BH.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const HH = BH;
            for (const BH of this._activePlugins) HH.fallbackRank = BH.addFallbacks(HH.defines, HH.fallbacks, HH.fallbackRank), BH.getAttributes(HH.attributes, this._scene, HH.mesh);
            this._uniformList.length > 0 && HH.uniforms.push(...this._uniformList), this._samplerList.length > 0 && HH.samplers.push(...this._samplerList), this._uboList.length > 0 && HH.uniformBuffersNames.push(...this._uboList), HH.customCode = this._injectCustomCode(HH, HH.customCode);
            break
          }
          case 8: {
            const HH = BH;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const LH = 1 === this._material.shaderLanguage;
            for (const BH of this._plugins) {
              const AH = BH.getUniforms(this._material.shaderLanguage);
              if (AH) {
                if (AH.ubo)
                  for (const BH of AH.ubo) {
                    if (BH.size && BH.type) {
                      const AH = BH.arraySize ?? 0;
                      if (HH.ubo.addUniform(BH.name, BH.size, AH), LH) {
                        let HH;
                        switch (BH.type) {
                          case "mat4":
                            HH = "mat4x4f";
                            break;
                          case "float":
                            HH = "f32";
                            break;
                          default:
                            HH = `${BH.type}f`
                        }
                        this._uboDeclaration += AH > 0 ? `uniform ${BH.name}: array<${HH}, ${AH}>;\n` : `uniform ${BH.name}: ${HH};\n`
                      } else this._uboDeclaration += `${BH.type} ${BH.name}${AH>0?`[${AH}]`:""};\n`
                    }
                    this._uniformList.push(BH.name)
                  }
                AH.vertex && (this._vertexDeclaration += AH.vertex + "\n"), AH.fragment && (this._fragmentDeclaration += AH.fragment + "\n"), AH.externalUniforms && this._uniformList.push(...AH.externalUniforms)
              }
              BH.getSamplers(this._samplerList), BH.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(HH, BH) {
        if (BH)
          for (const LH in BH) this._codeInjectionPoints[HH] || (this._codeInjectionPoints[HH] = {}), this._codeInjectionPoints[HH][LH] = !0
      }
      _injectCustomCode(HH, BH) {
        return (LH, AH) => {
          BH && (AH = BH(LH, AH)), this._uboDeclaration && (AH = AH.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (AH = AH.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (AH = AH.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const rH = this._codeInjectionPoints?.[LH];
          if (!rH) return AH;
          let zH = null;
          for (let BH in rH) {
            let rH = "";
            for (const AH of this._activePlugins) {
              const tH = this._material.shaderLanguage;
              let CH = AH.getCustomCode(LH, tH)?.[BH];
              CH && (AH.resolveIncludes && (null === zH && (zH = {
                defines: [],
                indexParameters: HH.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: hH.c.GetShadersRepository(tH),
                includesShadersStore: hH.c.GetIncludesShadersStore(tH),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                WrH: this._engine.WrH,
                processCodeAfterIncludes: void 0
              }), zH.isFragment = "fragment" === LH, (0, SH.g)(CH, zH, (HH => CH = HH))), rH += CH + "\n")
            }
            if (rH.length > 0)
              if ("!" === BH.charAt(0)) {
                BH = BH.substring(1);
                let HH = "g";
                if ("!" === BH.charAt(0)) HH = "", BH = BH.substring(1);
                else {
                  const LH = tH.exec(BH);
                  LH && LH.length >= 2 && (HH = LH[1], BH = BH.substring(HH.length + 1))
                }
                HH.indexOf("g") < 0 && (HH += "g");
                const LH = new RegExp(BH, HH);
                let SH = LH.exec(AH);
                for (; null !== SH;) {
                  const {
                    index: HH
                  } = SH, BH = CH(rH, SH);
                  AH = AH.substring(0, HH) + BH + AH.substring(HH + SH[0].length), LH.lastIndex = HH + BH.length, SH = LH.exec(AH)
                }
              } else {
                const HH = "#define " + BH;
                AH = AH.replace(HH, "\n" + rH + "\n" + HH)
              }
          }
          return AH
        }
      }
    }
    zH._MaterialPluginClassToMainDefine = {}, zH._MaterialPluginCounter = 0;

    function CH(HH, BH) {
      return HH.replace(/\$(\d+)/g, ((HH, LH) => {
        const AH = Number(LH);
        return AH < BH.length ? BH[AH] : ""
      }))
    }
    var EH = LH(41319),
      XH = LH(38012);
    let GH = (() => {
        var HH;
        let BH, LH, SH, hH, tH = [],
          CH = [],
          XH = [],
          GH = [],
          YH = [],
          uH = [],
          QH = [],
          WH = [];
        return HH = class {
          isCompatible(HH) {
            return 0 === HH
          }
          _enable(HH) {
            HH && this._pluginManager._activatePlugin(this)
          }
          constructor(HH, BH, LH, rH) {
            let SH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              hH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              EH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, AH.k)(this, tH, void 0), this.priority = ((0, AH.k)(this, CH), (0, AH.k)(this, XH, 500)), this.resolveIncludes = ((0, AH.k)(this, GH), (0, AH.k)(this, YH, !1)), this.registerForExtraEvents = ((0, AH.k)(this, uH), (0, AH.k)(this, QH, !1)), this.doNotSerialize = ((0, AH.k)(this, WH), !1), this._material = HH, this.name = BH, this.priority = LH, this.resolveIncludes = EH, HH.pluginManager || (HH.pluginManager = new zH(HH), HH.uR.add((() => {
              HH.pluginManager = void 0
            }))), this._pluginDefineNames = rH, this._pluginManager = HH.pluginManager, SH && this._pluginManager._addPlugin(this), hH && this._enable(!0), this.markAllDefinesAsDirty = HH._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(HH, BH, LH, AH) {
            return !0
          }
          hardBindForSubMesh(HH, BH, LH, AH) {}
          bindForSubMesh(HH, BH, LH, AH) {}
          dispose(HH) {}
          getCustomCode(HH) {
            return null
          }
          collectDefines(HH) {
            if (this._pluginDefineNames)
              for (const BH of Object.keys(this._pluginDefineNames)) {
                if ("_" === BH[0]) continue;
                const LH = typeof this._pluginDefineNames[BH];
                HH[BH] = {
                  type: "number" === LH ? "number" : "string" === LH ? "string" : "boolean" === LH ? "boolean" : "object",
                  default: this._pluginDefineNames[BH]
                }
              }
          }
          prepareDefinesBeforeAttributes(HH, BH, LH) {}
          prepareDefines(HH, BH, LH) {}
          hasTexture(HH) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(HH) {}
          getActiveTextures(HH) {}
          getAnimatables(HH) {}
          addFallbacks(HH, BH, LH) {
            return LH
          }
          getSamplers(HH) {}
          getAttributes(HH, BH, LH) {}
          getUniformBuffersNames(HH) {}
          getUniforms() {
            return {}
          }
          copyTo(HH) {
            EH.c.Clone((() => HH), this)
          }
          serialize() {
            return EH.c.Serialize(this)
          }
          parse(HH, BH, LH) {
            EH.c.Parse((() => this), HH, BH, LH)
          }
        }, (() => {
          const zH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          BH = [(0, rH.H)()], LH = [(0, rH.H)()], SH = [(0, rH.H)()], hH = [(0, rH.H)()], (0, AH.g)(null, null, BH, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: HH => "name" in HH,
              get: HH => HH.name,
              set: (HH, BH) => {
                HH.name = BH
              }
            },
            metadata: zH
          }, tH, CH), (0, AH.g)(null, null, LH, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: HH => "priority" in HH,
              get: HH => HH.priority,
              set: (HH, BH) => {
                HH.priority = BH
              }
            },
            metadata: zH
          }, XH, GH), (0, AH.g)(null, null, SH, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: HH => "resolveIncludes" in HH,
              get: HH => HH.resolveIncludes,
              set: (HH, BH) => {
                HH.resolveIncludes = BH
              }
            },
            metadata: zH
          }, YH, uH), (0, AH.g)(null, null, hH, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: HH => "registerForExtraEvents" in HH,
              get: HH => HH.registerForExtraEvents,
              set: (HH, BH) => {
                HH.registerForExtraEvents = BH
              }
            },
            metadata: zH
          }, QH, WH), zH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zH
          })
        })(), HH
      })(),
      YH = !1;

    function uH() {
      YH || (YH = !0, (0, XH.f)("BABYLON.MaterialPluginBase", GH))
    }
  },
  41554: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH
    });
    class AH {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(HH) {
        HH.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(HH) {}
      bindForSubMesh(HH, BH, LH, AH, rH) {
        if (BH.prePassRenderer && BH.prePassRenderer.enabled && BH.prePassRenderer.currentRTisSceneRT && (-1 !== BH.prePassRenderer.getIndex(2) || -1 !== BH.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[LH.uniqueId] || (this.previousWorldMatrices[LH.uniqueId] = AH.clone()), this.previousViewProjection || (this.previousViewProjection = BH.getTransformMatrix().clone(), this.currentViewProjection = BH.getTransformMatrix().clone());
          const rH = BH.Iu();
          this.currentViewProjection.updateFlag !== BH.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = rH.frameId, this.previousViewProjection.Tm(this.currentViewProjection), this.currentViewProjection.Tm(BH.getTransformMatrix())) : this._lastUpdateFrameId !== rH.frameId && (this._lastUpdateFrameId = rH.frameId, this.previousViewProjection.Tm(this.currentViewProjection)), HH.setMatrix("previousWorld", this.previousWorldMatrices[LH.uniqueId]), HH.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[LH.uniqueId] = AH.clone()
        }
      }
    }
  },
  41674: (HH, BH, LH) => {
    function AH(HH) {
      return class extends HH {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    LH.d(BH, {
      c: () => AH
    })
  },
  41538: (HH, BH, LH) => {
    LH.d(BH, {
      StandardMaterial: () => AH.e
    });
    var AH = LH(41545);
    (0, AH.d)()
  },
  41545: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => qH,
      e: () => cH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(41398),
      hH = LH(41383),
      tH = LH(38074),
      zH = LH(41427),
      CH = LH(41554),
      EH = LH(41561),
      XH = LH(41402),
      GH = LH(41573),
      YH = LH(41564),
      uH = LH(41634),
      QH = LH(41632),
      WH = LH(41636),
      MH = LH(41644),
      xH = LH(41623),
      vH = LH(41653),
      PH = LH(41618),
      TH = LH(41319),
      UH = LH(41657),
      VH = LH(41662),
      OH = LH(41669),
      bH = LH(41674),
      kH = LH(41676),
      mH = LH(38012),
      oH = LH(41169);
    const IH = {
      effect: null,
      subMesh: null
    };
    class fH extends((0, bH.c)((0, OH.b)(YH.c))) {}
    class lH extends((0, EH.e)(fH)) {
      constructor(HH) {
        super(HH), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class KH extends((0, kH.b)(uH.b)) {}
    let cH = (() => {
        var HH, BH, EH, YH, OH, bH, kH, mH, oH, fH, cH, eH, qH, gH, NH, RH, jH, nH, FH, DH, wH, ZH, dH, aH, sH, JH, iH, pH, yH, HB, BB, LB, AB;
        let rB, SB, hB, tB, zB, CB, EB, XB, GB, YB, uB, QB, WB, MB, xB, vB, PB, TB, UB, VB, OB, bB, kB, mB, oB, IB, fB, lB, KB, cB, eB, qB, gB, NB, RB, jB, nB, FB, DB, wB, ZB, dB, aB, sB, JB, iB, pB, yB, HL, BL, LL, AL, rL, SL, hL, tL, zL, CL, EL, XL, GL, YL, uL, QL, WL, ML, xL, vL, PL, TL, UL, VL, OL, bL = KH,
          kL = [],
          mL = [],
          oL = [],
          IL = [],
          fL = [],
          lL = [],
          KL = [],
          cL = [],
          eL = [],
          qL = [],
          gL = [],
          NL = [],
          RL = [],
          jL = [],
          nL = [],
          FL = [],
          DL = [],
          wL = [],
          ZL = [],
          dL = [],
          aL = [],
          sL = [],
          JL = [],
          iL = [],
          pL = [],
          yL = [],
          HA = [],
          BA = [],
          LA = [],
          AA = [],
          rA = [],
          SA = [],
          hA = [],
          tA = [],
          zA = [],
          CA = [],
          EA = [],
          XA = [],
          GA = [],
          YA = [],
          uA = [],
          QA = [],
          WA = [],
          MA = [],
          xA = [],
          vA = [],
          PA = [],
          TA = [],
          UA = [],
          VA = [],
          OA = [],
          bA = [],
          kA = [],
          mA = [],
          oA = [],
          IA = [],
          fA = [],
          lA = [],
          KA = [],
          cA = [],
          eA = [],
          qA = [],
          gA = [],
          NA = [],
          RA = [],
          jA = [],
          nA = [],
          FA = [],
          DA = [],
          wA = [],
          ZA = [],
          dA = [],
          aA = [],
          sA = [],
          JA = [],
          iA = [],
          pA = [],
          yA = [],
          Hr = [],
          Br = [],
          Lr = [],
          Ar = [],
          rr = [],
          Sr = [],
          hr = [],
          tr = [],
          zr = [],
          Cr = [],
          Er = [],
          Xr = [],
          Gr = [],
          Yr = [],
          ur = [],
          Qr = [],
          Wr = [],
          Mr = [],
          xr = [],
          vr = [],
          Pr = [],
          Tr = [],
          Ur = [],
          Vr = [],
          Or = [],
          br = [],
          kr = [],
          mr = [],
          or = [],
          Ir = [],
          fr = [],
          lr = [],
          Kr = [],
          cr = [],
          er = [],
          qr = [],
          gr = [],
          Nr = [],
          Rr = [],
          jr = [],
          nr = [],
          Fr = [],
          Dr = [],
          wr = [],
          Zr = [],
          dr = [],
          ar = [],
          sr = [],
          Jr = [],
          ir = [],
          pr = [],
          yr = [],
          HS = [],
          BS = [],
          LS = [],
          AS = [],
          rS = [],
          SS = [],
          hS = [],
          tS = [],
          zS = [],
          CS = [],
          ES = [],
          XS = [],
          GS = [],
          YS = [],
          uS = [],
          QS = [];
        return HH = class extends bL {
          get diffuseTexture() {
            return (0, AH.e)(this, BH, "f")
          }
          set diffuseTexture(HH) {
            (0, AH.f)(this, BH, HH, "f")
          }
          get ambientTexture() {
            return (0, AH.e)(this, EH, "f")
          }
          set ambientTexture(HH) {
            (0, AH.f)(this, EH, HH, "f")
          }
          get opacityTexture() {
            return (0, AH.e)(this, YH, "f")
          }
          set opacityTexture(HH) {
            (0, AH.f)(this, YH, HH, "f")
          }
          get reflectionTexture() {
            return (0, AH.e)(this, OH, "f")
          }
          set reflectionTexture(HH) {
            (0, AH.f)(this, OH, HH, "f")
          }
          get emissiveTexture() {
            return (0, AH.e)(this, bH, "f")
          }
          set emissiveTexture(HH) {
            (0, AH.f)(this, bH, HH, "f")
          }
          get specularTexture() {
            return (0, AH.e)(this, kH, "f")
          }
          set specularTexture(HH) {
            (0, AH.f)(this, kH, HH, "f")
          }
          get bumpTexture() {
            return (0, AH.e)(this, mH, "f")
          }
          set bumpTexture(HH) {
            (0, AH.f)(this, mH, HH, "f")
          }
          get lightmapTexture() {
            return (0, AH.e)(this, oH, "f")
          }
          set lightmapTexture(HH) {
            (0, AH.f)(this, oH, HH, "f")
          }
          get refractionTexture() {
            return (0, AH.e)(this, fH, "f")
          }
          set refractionTexture(HH) {
            (0, AH.f)(this, fH, HH, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, AH.e)(this, cH, "f")
          }
          set useAlphaFromDiffuseTexture(HH) {
            (0, AH.f)(this, cH, HH, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, AH.e)(this, eH, "f")
          }
          set useEmissiveAsIllumination(HH) {
            (0, AH.f)(this, eH, HH, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, AH.e)(this, qH, "f")
          }
          set linkEmissiveWithDiffuse(HH) {
            (0, AH.f)(this, qH, HH, "f")
          }
          get useSpecularOverAlpha() {
            return (0, AH.e)(this, gH, "f")
          }
          set useSpecularOverAlpha(HH) {
            (0, AH.f)(this, gH, HH, "f")
          }
          get useReflectionOverAlpha() {
            return (0, AH.e)(this, NH, "f")
          }
          set useReflectionOverAlpha(HH) {
            (0, AH.f)(this, NH, HH, "f")
          }
          get disableLighting() {
            return (0, AH.e)(this, RH, "f")
          }
          set disableLighting(HH) {
            (0, AH.f)(this, RH, HH, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, AH.e)(this, jH, "f")
          }
          set useObjectSpaceNormalMap(HH) {
            (0, AH.f)(this, jH, HH, "f")
          }
          get useParallax() {
            return (0, AH.e)(this, nH, "f")
          }
          set useParallax(HH) {
            (0, AH.f)(this, nH, HH, "f")
          }
          get useParallaxOcclusion() {
            return (0, AH.e)(this, FH, "f")
          }
          set useParallaxOcclusion(HH) {
            (0, AH.f)(this, FH, HH, "f")
          }
          get roughness() {
            return (0, AH.e)(this, DH, "f")
          }
          set roughness(HH) {
            (0, AH.f)(this, DH, HH, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, AH.e)(this, wH, "f")
          }
          set useLightmapAsShadowmap(HH) {
            (0, AH.f)(this, wH, HH, "f")
          }
          get diffuseFresnelParameters() {
            return (0, AH.e)(this, ZH, "f")
          }
          set diffuseFresnelParameters(HH) {
            (0, AH.f)(this, ZH, HH, "f")
          }
          get opacityFresnelParameters() {
            return (0, AH.e)(this, dH, "f")
          }
          set opacityFresnelParameters(HH) {
            (0, AH.f)(this, dH, HH, "f")
          }
          get reflectionFresnelParameters() {
            return (0, AH.e)(this, aH, "f")
          }
          set reflectionFresnelParameters(HH) {
            (0, AH.f)(this, aH, HH, "f")
          }
          get refractionFresnelParameters() {
            return (0, AH.e)(this, sH, "f")
          }
          set refractionFresnelParameters(HH) {
            (0, AH.f)(this, sH, HH, "f")
          }
          get emissiveFresnelParameters() {
            return (0, AH.e)(this, JH, "f")
          }
          set emissiveFresnelParameters(HH) {
            (0, AH.f)(this, JH, HH, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, AH.e)(this, iH, "f")
          }
          set useReflectionFresnelFromSpecular(HH) {
            (0, AH.f)(this, iH, HH, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, AH.e)(this, pH, "f")
          }
          set useGlossinessFromSpecularMapAlpha(HH) {
            (0, AH.f)(this, pH, HH, "f")
          }
          get maxSimultaneousLights() {
            return (0, AH.e)(this, yH, "f")
          }
          set maxSimultaneousLights(HH) {
            (0, AH.f)(this, yH, HH, "f")
          }
          get invertNormalMapX() {
            return (0, AH.e)(this, HB, "f")
          }
          set invertNormalMapX(HH) {
            (0, AH.f)(this, HB, HH, "f")
          }
          get invertNormalMapY() {
            return (0, AH.e)(this, BB, "f")
          }
          set invertNormalMapY(HH) {
            (0, AH.f)(this, BB, HH, "f")
          }
          get twoSidedLighting() {
            return (0, AH.e)(this, LB, "f")
          }
          set twoSidedLighting(HH) {
            (0, AH.f)(this, LB, HH, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, AH.e)(this, AB, "f")
          }
          set applyDecalMapAfterDetailMap(HH) {
            (0, AH.f)(this, AB, HH, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(LH, rH) {
            super(LH, rH, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || HH.ForceGLSL), this._diffuseTexture = (0, AH.k)(this, kL, null), BH.set(this, ((0, AH.k)(this, mL), (0, AH.k)(this, oL, void 0))), this._ambientTexture = ((0, AH.k)(this, IL), (0, AH.k)(this, fL, null)), EH.set(this, ((0, AH.k)(this, lL), (0, AH.k)(this, KL, void 0))), this._opacityTexture = ((0, AH.k)(this, cL), (0, AH.k)(this, eL, null)), YH.set(this, ((0, AH.k)(this, qL), (0, AH.k)(this, gL, void 0))), this._reflectionTexture = ((0, AH.k)(this, NL), (0, AH.k)(this, RL, null)), OH.set(this, ((0, AH.k)(this, jL), (0, AH.k)(this, nL, void 0))), this._emissiveTexture = ((0, AH.k)(this, FL), (0, AH.k)(this, DL, null)), bH.set(this, ((0, AH.k)(this, wL), (0, AH.k)(this, ZL, void 0))), this._specularTexture = ((0, AH.k)(this, dL), (0, AH.k)(this, aL, null)), kH.set(this, ((0, AH.k)(this, sL), (0, AH.k)(this, JL, void 0))), this._bumpTexture = ((0, AH.k)(this, iL), (0, AH.k)(this, pL, null)), mH.set(this, ((0, AH.k)(this, yL), (0, AH.k)(this, HA, void 0))), this._lightmapTexture = ((0, AH.k)(this, BA), (0, AH.k)(this, LA, null)), oH.set(this, ((0, AH.k)(this, AA), (0, AH.k)(this, rA, void 0))), this._refractionTexture = ((0, AH.k)(this, SA), (0, AH.k)(this, hA, null)), fH.set(this, ((0, AH.k)(this, tA), (0, AH.k)(this, zA, void 0))), this.ambientColor = ((0, AH.k)(this, CA), (0, AH.k)(this, EA, new tH.c(0, 0, 0))), this.diffuseColor = ((0, AH.k)(this, XA), (0, AH.k)(this, GA, new tH.c(1, 1, 1))), this.specularColor = ((0, AH.k)(this, YA), (0, AH.k)(this, uA, new tH.c(1, 1, 1))), this.emissiveColor = ((0, AH.k)(this, QA), (0, AH.k)(this, WA, new tH.c(0, 0, 0))), this.specularPower = ((0, AH.k)(this, MA), (0, AH.k)(this, xA, 64)), this._useAlphaFromDiffuseTexture = ((0, AH.k)(this, vA), (0, AH.k)(this, PA, !1)), cH.set(this, ((0, AH.k)(this, TA), (0, AH.k)(this, UA, void 0))), this._useEmissiveAsIllumination = ((0, AH.k)(this, VA), (0, AH.k)(this, OA, !1)), eH.set(this, ((0, AH.k)(this, bA), (0, AH.k)(this, kA, void 0))), this._linkEmissiveWithDiffuse = ((0, AH.k)(this, mA), (0, AH.k)(this, oA, !1)), qH.set(this, ((0, AH.k)(this, IA), (0, AH.k)(this, fA, void 0))), this._useSpecularOverAlpha = ((0, AH.k)(this, lA), (0, AH.k)(this, KA, !1)), gH.set(this, ((0, AH.k)(this, cA), (0, AH.k)(this, eA, void 0))), this._useReflectionOverAlpha = ((0, AH.k)(this, qA), (0, AH.k)(this, gA, !1)), NH.set(this, ((0, AH.k)(this, NA), (0, AH.k)(this, RA, void 0))), this._disableLighting = ((0, AH.k)(this, jA), (0, AH.k)(this, nA, !1)), RH.set(this, ((0, AH.k)(this, FA), (0, AH.k)(this, DA, void 0))), this._useObjectSpaceNormalMap = ((0, AH.k)(this, wA), (0, AH.k)(this, ZA, !1)), jH.set(this, ((0, AH.k)(this, dA), (0, AH.k)(this, aA, void 0))), this._useParallax = ((0, AH.k)(this, sA), (0, AH.k)(this, JA, !1)), nH.set(this, ((0, AH.k)(this, iA), (0, AH.k)(this, pA, void 0))), this._useParallaxOcclusion = ((0, AH.k)(this, yA), (0, AH.k)(this, Hr, !1)), FH.set(this, ((0, AH.k)(this, Br), (0, AH.k)(this, Lr, void 0))), this.parallaxScaleBias = ((0, AH.k)(this, Ar), (0, AH.k)(this, rr, .05)), this._roughness = ((0, AH.k)(this, Sr), (0, AH.k)(this, hr, 0)), DH.set(this, ((0, AH.k)(this, tr), (0, AH.k)(this, zr, void 0))), this.indexOfRefraction = ((0, AH.k)(this, Cr), (0, AH.k)(this, Er, .98)), this.invertRefractionY = ((0, AH.k)(this, Xr), (0, AH.k)(this, Gr, !0)), this.alphaCutOff = ((0, AH.k)(this, Yr), (0, AH.k)(this, ur, .4)), this._useLightmapAsShadowmap = ((0, AH.k)(this, Qr), (0, AH.k)(this, Wr, !1)), wH.set(this, ((0, AH.k)(this, Mr), (0, AH.k)(this, xr, void 0))), this._diffuseFresnelParameters = ((0, AH.k)(this, vr), (0, AH.k)(this, Pr, void 0)), ZH.set(this, ((0, AH.k)(this, Tr), (0, AH.k)(this, Ur, void 0))), this._opacityFresnelParameters = ((0, AH.k)(this, Vr), (0, AH.k)(this, Or, void 0)), dH.set(this, ((0, AH.k)(this, br), (0, AH.k)(this, kr, void 0))), this._reflectionFresnelParameters = ((0, AH.k)(this, mr), (0, AH.k)(this, or, void 0)), aH.set(this, ((0, AH.k)(this, Ir), (0, AH.k)(this, fr, void 0))), this._refractionFresnelParameters = ((0, AH.k)(this, lr), (0, AH.k)(this, Kr, void 0)), sH.set(this, ((0, AH.k)(this, cr), (0, AH.k)(this, er, void 0))), this._emissiveFresnelParameters = ((0, AH.k)(this, qr), (0, AH.k)(this, gr, void 0)), JH.set(this, ((0, AH.k)(this, Nr), (0, AH.k)(this, Rr, void 0))), this._useReflectionFresnelFromSpecular = ((0, AH.k)(this, jr), (0, AH.k)(this, nr, !1)), iH.set(this, ((0, AH.k)(this, Fr), (0, AH.k)(this, Dr, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, AH.k)(this, wr), (0, AH.k)(this, Zr, !1)), pH.set(this, ((0, AH.k)(this, dr), (0, AH.k)(this, ar, void 0))), this._maxSimultaneousLights = ((0, AH.k)(this, sr), (0, AH.k)(this, Jr, 4)), yH.set(this, ((0, AH.k)(this, ir), (0, AH.k)(this, pr, void 0))), this._invertNormalMapX = ((0, AH.k)(this, yr), (0, AH.k)(this, HS, !1)), HB.set(this, ((0, AH.k)(this, BS), (0, AH.k)(this, LS, void 0))), this._invertNormalMapY = ((0, AH.k)(this, AS), (0, AH.k)(this, rS, !1)), BB.set(this, ((0, AH.k)(this, SS), (0, AH.k)(this, hS, void 0))), this._twoSidedLighting = ((0, AH.k)(this, tS), (0, AH.k)(this, zS, !1)), LB.set(this, ((0, AH.k)(this, CS), (0, AH.k)(this, ES, void 0))), this._applyDecalMapAfterDetailMap = ((0, AH.k)(this, XS), (0, AH.k)(this, GS, !1)), AB.set(this, ((0, AH.k)(this, YS), (0, AH.k)(this, uS, void 0))), this._vertexPullingMetadata = ((0, AH.k)(this, QS), null), this._renderTargets = new SH.i(16), this._globalAmbientColor = new tH.c(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new MH.d(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new CH.d, this.getRenderTargetTextures = () => (this._renderTargets.reset(), HH.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), HH.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(HH.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(HH.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === GH.c.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== GH.c.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(BH, LH) {
            let AH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const rH = LH._drawWrapper;
            if (rH.effect && this.isFrozen && rH._wasPreviouslyReady && rH._wasPreviouslyUsingInstances === AH) return !0;
            LH.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), LH.materialDefines = new lH(this._eventInfo.defineNames));
            const SH = this.yN(),
              hH = LH.materialDefines;
            if (this._isReadyForSubMesh(LH)) return !0;
            const tH = SH.Iu();
            if (hH._needNormals = (0, PH.U)(SH, BH, hH, !0, this._maxSimultaneousLights, this._disableLighting), !(0, PH.c)(SH, BH, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, PH._)(SH, hH);
            const EH = this.needAlphaBlendingForMesh(BH) && this.yN().useOrderIndependentTransparency;
            if ((0, PH.ab)(SH, hH, this.canRenderToMRT && !EH), (0, PH.$)(SH, hH, EH), VH.e.PrepareDefines(tH.currentRenderPassId, BH, hH), hH._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, hH._needUVs = !1;
              for (let HH = 1; HH <= 6; ++HH) hH["MAINUV" + HH] = !1;
              if (SH.texturesEnabled) {
                if (hH.DIFFUSEDIRECTUV = 0, hH.BUMPDIRECTUV = 0, hH.AMBIENTDIRECTUV = 0, hH.OPACITYDIRECTUV = 0, hH.EMISSIVEDIRECTUV = 0, hH.SPECULARDIRECTUV = 0, hH.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && HH.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, PH.X)(this._diffuseTexture, hH, "DIFFUSE")
                } else hH.DIFFUSE = !1;
                if (this._ambientTexture && HH.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, PH.X)(this._ambientTexture, hH, "AMBIENT")
                } else hH.AMBIENT = !1;
                if (this._opacityTexture && HH.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, PH.X)(this._opacityTexture, hH, "OPACITY"), hH.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else hH.OPACITY = !1;
                if (this._reflectionTexture && HH.ReflectionTextureEnabled ? (hH.ROUGHNESS = this._roughness > 0, hH.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (hH.ROUGHNESS = !1, hH.REFLECTIONOVERALPHA = !1), !(0, PH.R)(SH, this._reflectionTexture, hH)) return !1;
                if (this._emissiveTexture && HH.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, PH.X)(this._emissiveTexture, hH, "EMISSIVE")
                } else hH.EMISSIVE = !1;
                if (this._lightmapTexture && HH.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, PH.X)(this._lightmapTexture, hH, "LIGHTMAP"), hH.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, hH.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else hH.LIGHTMAP = !1;
                if (this._specularTexture && HH.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, PH.X)(this._specularTexture, hH, "SPECULAR"), hH.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else hH.SPECULAR = !1;
                if (SH.Iu().getCaps().standardDerivatives && this._bumpTexture && HH.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, PH.X)(this._bumpTexture, hH, "BUMP"), hH.PARALLAX = this._useParallax, hH.PARALLAX_RHS = SH.useRightHandedSystem, hH.PARALLAXOCCLUSION = this._useParallaxOcclusion, hH.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else hH.BUMP = !1, hH.PARALLAX = !1, hH.PARALLAX_RHS = !1, hH.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && HH.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  hH._needUVs = !0, hH.REFRACTION = !0, hH.REFRACTIONMAP_3D = this._refractionTexture.isCube, hH.RGBDREFRACTION = this._refractionTexture.isRGBD, hH.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else hH.REFRACTION = !1;
                hH.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else hH.DIFFUSE = !1, hH.AMBIENT = !1, hH.OPACITY = !1, hH.REFLECTION = !1, hH.EMISSIVE = !1, hH.LIGHTMAP = !1, hH.BUMP = !1, hH.REFRACTION = !1;
              hH.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), hH.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, hH.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, hH.SPECULAROVERALPHA = this._useSpecularOverAlpha, hH.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, hH.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, hH.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(BH), hH.TEXTURE_REPETITION_MODE = tH.version > 1 || tH.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = hH, this._eventInfo.subMesh = LH, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (hH._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(hH), hH.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, hH.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (hH._areFresnelDirty && (HH.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (hH.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, hH.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, hH.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, hH.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, hH.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, hH.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, hH._needNormals = !0, hH.FRESNEL = !0) : hH.FRESNEL = !1), hH.AREALIGHTUSED || hH.CLUSTLIGHT_BATCH)
              for (let HH = 0; HH < BH.lightSources.length; HH++)
                if (!BH.lightSources[HH]._isReady()) return !1;
            (0, PH.Z)(BH, SH, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(BH), hH, this._applyDecalMapAfterDetailMap, this._useVertexPulling, LH.getRenderingMesh(), this._isVertexOutputInvariant), (0, PH.P)(SH, tH, this, hH, AH, null, LH.getRenderingMesh().hasThinInstances), this._eventInfo.defines = hH, this._eventInfo.mesh = BH, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, PH.L)(BH, hH, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let GH = !1;
            if (hH.isDirty) {
              const AH = hH._areLightsDisposed;
              hH.markAsProcessed();
              const rH = new WH.b;
              hH.REFLECTION && rH.addFallback(0, "REFLECTION"), hH.SPECULAR && rH.addFallback(0, "SPECULAR"), hH.BUMP && rH.addFallback(0, "BUMP"), hH.PARALLAX && rH.addFallback(1, "PARALLAX"), hH.PARALLAX_RHS && rH.addFallback(1, "PARALLAX_RHS"), hH.PARALLAXOCCLUSION && rH.addFallback(0, "PARALLAXOCCLUSION"), hH.SPECULAROVERALPHA && rH.addFallback(0, "SPECULAROVERALPHA"), hH.FOG && rH.addFallback(1, "FOG"), hH.POINTSIZE && rH.addFallback(0, "POINTSIZE"), hH.LOGARITHMICDEPTH && rH.addFallback(0, "LOGARITHMICDEPTH"), (0, PH.y)(hH, rH, this._maxSimultaneousLights), hH.SPECULARTERM && rH.addFallback(0, "SPECULARTERM"), hH.DIFFUSEFRESNEL && rH.addFallback(1, "DIFFUSEFRESNEL"), hH.OPACITYFRESNEL && rH.addFallback(2, "OPACITYFRESNEL"), hH.REFLECTIONFRESNEL && rH.addFallback(3, "REFLECTIONFRESNEL"), hH.EMISSIVEFRESNEL && rH.addFallback(4, "EMISSIVEFRESNEL"), hH.FRESNEL && rH.addFallback(4, "FRESNEL"), hH.MULTIVIEW && rH.addFallback(0, "MULTIVIEW");
              const EH = [zH.i.PositionKind];
              hH.NORMAL && EH.push(zH.i.NormalKind), hH.TANGENT && EH.push(zH.i.TangentKind);
              for (let HH = 1; HH <= 6; ++HH) hH["UV" + HH] && EH.push(`uv${1===HH?"":HH}`);
              hH.VERTEXCOLOR && EH.push(zH.i.ColorKind), (0, PH.E)(EH, BH, hH, rH), (0, PH.F)(EH, hH), (0, PH.G)(EH, BH, hH), (0, PH.C)(EH, BH, hH);
              let YH = "default";
              const uH = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                QH = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, PH.fb)(uH, QH, !1);
              const MH = ["Material", "Scene", "Mesh"],
                TH = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: hH.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = rH, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = hH, this._eventInfo.uniforms = uH, this._eventInfo.attributes = EH, this._eventInfo.samplers = QH, this._eventInfo.uniformBuffersNames = MH, this._eventInfo.customCode = void 0, this._eventInfo.mesh = BH, this._eventInfo.indexParameters = TH, this._callbackPluginEventGeneric(128, this._eventInfo), VH.e.AddUniformsAndSamplers(uH, QH), CH.d.AddUniforms(uH), CH.d.AddSamplers(QH), XH.b && (XH.b.PrepareUniforms(uH, hH), XH.b.PrepareSamplers(QH, hH)), (0, PH.jb)({
                  uniformsNames: uH,
                  uniformBuffersNames: MH,
                  samplers: QH,
                  defines: hH,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, xH.b)(uH), this._useVertexPulling) {
                const HH = LH.getRenderingMesh(),
                  BH = HH?.geometry;
                BH && (this._vertexPullingMetadata = (0, vH.f)(BH), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((HH, BH) => {
                  uH.push(`vp_${BH}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const UH = {};
              this.customShaderNameResolve && (YH = this.customShaderNameResolve(YH, uH, MH, QH, hH, EH, UH));
              const OH = hH.toString(),
                bH = LH.effect,
                kH = SH.Iu().createEffect(YH, {
                  attributes: EH,
                  uniformsNames: uH,
                  uniformBuffersNames: MH,
                  samplers: QH,
                  defines: OH,
                  fallbacks: rH,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: TH,
                  processFinalCode: UH.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: hH.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: HH._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, tH);
              if (this._eventInfo.customCode = void 0, kH)
                if (this._onEffectCreatedObservable && (IH.effect = kH, IH.subMesh = LH, this._onEffectCreatedObservable.notifyObservers(IH)), this.allowShaderHotSwapping && bH && !kH.isReady()) {
                  if (hH.markAsUnprocessed(), GH = this.isFrozen, AH) return hH._areLightsDisposed = !0, !1
                } else SH.resetCachedMaterial(), LH.setEffect(kH, hH, this._materialContext)
            }
            return !(!LH.effect || !LH.effect.isReady()) && (hH._renderId = SH.getRenderId(), rH._wasPreviouslyReady = !GH, rH._wasPreviouslyUsingInstances = AH, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const HH = this._uniformBuffer;
            HH.addUniform("diffuseLeftColor", 4), HH.addUniform("diffuseRightColor", 4), HH.addUniform("opacityParts", 4), HH.addUniform("reflectionLeftColor", 4), HH.addUniform("reflectionRightColor", 4), HH.addUniform("refractionLeftColor", 4), HH.addUniform("refractionRightColor", 4), HH.addUniform("emissiveLeftColor", 4), HH.addUniform("emissiveRightColor", 4), HH.addUniform("vDiffuseInfos", 2), HH.addUniform("vAmbientInfos", 2), HH.addUniform("vOpacityInfos", 2), HH.addUniform("vEmissiveInfos", 2), HH.addUniform("vLightmapInfos", 2), HH.addUniform("vSpecularInfos", 2), HH.addUniform("vBumpInfos", 3), HH.addUniform("diffuseMatrix", 16), HH.addUniform("ambientMatrix", 16), HH.addUniform("opacityMatrix", 16), HH.addUniform("emissiveMatrix", 16), HH.addUniform("lightmapMatrix", 16), HH.addUniform("specularMatrix", 16), HH.addUniform("bumpMatrix", 16), HH.addUniform("vTangentSpaceParams", 2), HH.addUniform("pointSize", 1), HH.addUniform("alphaCutOff", 1), HH.addUniform("refractionMatrix", 16), HH.addUniform("vRefractionInfos", 4), HH.addUniform("vRefractionPosition", 3), HH.addUniform("vRefractionSize", 3), HH.addUniform("vSpecularColor", 4), HH.addUniform("vEmissiveColor", 3), HH.addUniform("vDiffuseColor", 4), HH.addUniform("vAmbientColor", 3), HH.addUniform("cameraInfo", 4), HH.addUniform("vTextureRepetitionHexTilingParams", 4), (0, PH.db)(HH, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(BH, LH, AH) {
            const rH = this.yN(),
              SH = AH.materialDefines;
            if (!SH) return;
            const zH = AH.effect;
            if (!zH) return;
            this._activeEffect = zH, LH.getMeshUniformBuffer().bindToEffect(zH, "Mesh"), LH.transferToEffect(BH), this._uniformBuffer.bindToEffect(zH, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, rH, LH, BH, this.isFrozen), VH.e.Bind(rH.Iu().currentRenderPassId, this._activeEffect, LH, BH, this);
            const CH = rH.activeCamera;
            CH ? this._uniformBuffer.updateFloat4("cameraInfo", CH.minZ, CH.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const EH = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", EH[0], EH[1], EH[2], EH[3]), this._eventInfo.subMesh = AH, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), SH.OBJECTSPACE_NORMALMAP && (BH.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const XH = this._mustRebind(rH, zH, AH, LH.visibility),
              GH = rH.Iu()._features.needToAlwaysBindUniformBuffers;
            (0, PH.d)(LH, zH), this._vertexPullingMetadata && (0, vH.d)(zH, this._vertexPullingMetadata);
            const YH = this._uniformBuffer;
            if (XH) {
              if (this.bindViewProjection(zH), !YH.useUbo || !this.isFrozen || !YH.isSync || AH._drawWrapper._forceRebindOnNextCall) {
                if (HH.FresnelEnabled && SH.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (YH.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), YH.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const HH = tH.m.Color3[0];
                    HH.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), YH.updateColor4("opacityParts", HH, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (YH.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), YH.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (YH.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), YH.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (YH.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), YH.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (SH.ALPHATEST && YH.updateFloat("alphaCutOff", this.alphaCutOff), rH.texturesEnabled && (this._diffuseTexture && HH.DiffuseTextureEnabled && (YH.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, PH.u)(this._diffuseTexture, YH, "diffuse")), this._ambientTexture && HH.AmbientTextureEnabled && (YH.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, PH.u)(this._ambientTexture, YH, "ambient")), this._opacityTexture && HH.OpacityTextureEnabled && (YH.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, PH.u)(this._opacityTexture, YH, "opacity")), (0, PH.j)(rH, SH, YH, tH.c.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && HH.ReflectionTextureEnabled || YH.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && HH.EmissiveTextureEnabled && (YH.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, PH.u)(this._emissiveTexture, YH, "emissive")), this._lightmapTexture && HH.LightmapTextureEnabled && (YH.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, PH.u)(this._lightmapTexture, YH, "lightmap")), this._specularTexture && HH.SpecularTextureEnabled && (YH.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, PH.u)(this._specularTexture, YH, "specular")), this._bumpTexture && rH.Iu().getCaps().standardDerivatives && HH.BumpTextureEnabled && (YH.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, PH.u)(this._bumpTexture, YH, "bump"), rH._mirroredCameraPosition ? YH.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : YH.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && HH.RefractionTextureEnabled)) {
                  let HH = 1;
                  if (this._refractionTexture.isCube || (YH.wHH("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (HH = this._refractionTexture.depth)), YH.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, HH, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const HH = this._refractionTexture;
                    YH.updateVector3("vRefractionPosition", HH.boundingBoxPosition), YH.updateVector3("vRefractionSize", HH.boundingBoxSize)
                  }
                }
                this.pointsCloud && YH.updateFloat("pointSize", this.pointSize), YH.updateColor4("vSpecularColor", this.specularColor, this.specularPower), YH.updateColor3("vEmissiveColor", HH.EmissiveTextureEnabled ? this.emissiveColor : tH.c.BlackReadOnly), YH.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), rH.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), YH.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              rH.texturesEnabled && (this._diffuseTexture && HH.DiffuseTextureEnabled && zH.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && HH.AmbientTextureEnabled && zH.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && HH.OpacityTextureEnabled && zH.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && HH.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? zH.setTexture("reflectionCubeSampler", this._reflectionTexture) : zH.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && HH.EmissiveTextureEnabled && zH.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && HH.LightmapTextureEnabled && zH.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && HH.SpecularTextureEnabled && zH.setTexture("specularSampler", this._specularTexture), this._bumpTexture && rH.Iu().getCaps().standardDerivatives && HH.BumpTextureEnabled && zH.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && HH.RefractionTextureEnabled && (this._refractionTexture.isCube ? zH.setTexture("refractionCubeSampler", this._refractionTexture) : zH.setTexture("refraction2DSampler", this._refractionTexture))), this.yN().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(LH) && this.yN().depthPeelingRenderer.bind(zH), this._eventInfo.subMesh = AH, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, xH.d)(zH, this, rH), this.bindEyePosition(zH)
            } else GH && (this._needToBindSceneUbo = !0);
            !XH && this.isFrozen && !GH || !rH.lightsEnabled || this._disableLighting || (0, PH.p)(rH, LH, zH, SH, this._maxSimultaneousLights), !XH && this.isFrozen || ((rH.fogEnabled && LH.applyFog && rH.fogMode !== hH.d.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || LH.receiveShadows || SH.PREPASS || SH.CLUSTLIGHT_BATCH) && this.bindView(zH), (0, PH.f)(rH, LH, zH), SH.NUM_MORPH_INFLUENCERS && (0, PH.r)(LH, zH), SH.BAKED_VERTEX_ANIMATION_TEXTURE && LH.bakedVertexAnimationManager?.bind(zH, SH.INSTANCES), this.useLogarithmicDepth && (0, PH.q)(SH, zH, rH), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(LH, this._activeEffect, AH), YH.update()
          }
          _canBindRunFollower(BH, LH, AH, rH, SH) {
            const hH = BH.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === HH.prototype.isReadyForSubMesh && this.bindForSubMesh === HH.prototype.bindForSubMesh && this._mustRebind === uH.b.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !LH._features.needToAlwaysBindUniformBuffers && !(hH && hH.enabled && hH.currentRTisSceneRT) && !VH.e._Configurations[LH.currentRenderPassId] && !rH.materialDefines?.OBJECTSPACE_NORMALMAP && !AH.skeleton && !SH._bonesComputationForcedToCPU
          }
          _bindRunFollower(HH, BH, LH, AH) {
            this._activeEffect = AH, BH.getMeshUniformBuffer().bindToEffect(AH, "Mesh"), BH.transferToEffect(HH);
            const rH = this._uniformBuffer;
            rH.bindToEffect(AH, "Material");
            const SH = this._scene.activeCamera;
            SH ? rH.updateFloat4("cameraInfo", SH.minZ, SH.maxZ, 0, 0) : rH.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const hH = this.textureRepetitionHexTilingParams;
            rH.updateFloat4("vTextureRepetitionHexTilingParams", hH[0], hH[1], hH[2], hH[3]), this._afterBind(BH, AH, LH), rH.update()
          }
          getAnimatables() {
            const HH = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && HH.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && HH.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && HH.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && HH.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && HH.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && HH.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && HH.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && HH.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && HH.push(this._refractionTexture), HH
          }
          getActiveTextures() {
            const HH = super.getActiveTextures();
            return this._diffuseTexture && HH.push(this._diffuseTexture), this._ambientTexture && HH.push(this._ambientTexture), this._opacityTexture && HH.push(this._opacityTexture), this._reflectionTexture && HH.push(this._reflectionTexture), this._emissiveTexture && HH.push(this._emissiveTexture), this._specularTexture && HH.push(this._specularTexture), this._bumpTexture && HH.push(this._bumpTexture), this._lightmapTexture && HH.push(this._lightmapTexture), this._refractionTexture && HH.push(this._refractionTexture), HH
          }
          hasTexture(HH) {
            return !!super.hasTexture(HH) || (this._diffuseTexture === HH || (this._ambientTexture === HH || (this._opacityTexture === HH || (this._reflectionTexture === HH || (this._emissiveTexture === HH || (this._specularTexture === HH || (this._bumpTexture === HH || (this._lightmapTexture === HH || this._refractionTexture === HH))))))))
          }
          dispose(HH, BH) {
            BH && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(HH, BH)
          }
          clone(BH) {
            let LH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const rH = TH.c.Clone((() => new HH(BH, this.yN())), this, {
              cloneTexturesOnlyOnce: LH
            });
            return rH.name = BH, rH.id = BH, this.stencil.copyTo(rH.stencil), this._clonePlugins(rH, AH), rH
          }
          static Parse(BH, LH, AH) {
            const rH = TH.c.Parse((() => new HH(BH.name, LH)), BH, LH, AH);
            return BH.stencil && rH.stencil.parse(BH.stencil, LH, AH), GH.c._ParsePlugins(BH, rH, LH, AH), rH
          }
          static get DiffuseTextureEnabled() {
            return QH.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(HH) {
            QH.e.DiffuseTextureEnabled = HH
          }
          static get DetailTextureEnabled() {
            return QH.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(HH) {
            QH.e.DetailTextureEnabled = HH
          }
          static get AmbientTextureEnabled() {
            return QH.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(HH) {
            QH.e.AmbientTextureEnabled = HH
          }
          static get OpacityTextureEnabled() {
            return QH.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(HH) {
            QH.e.OpacityTextureEnabled = HH
          }
          static get ReflectionTextureEnabled() {
            return QH.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(HH) {
            QH.e.ReflectionTextureEnabled = HH
          }
          static get EmissiveTextureEnabled() {
            return QH.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(HH) {
            QH.e.EmissiveTextureEnabled = HH
          }
          static get SpecularTextureEnabled() {
            return QH.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(HH) {
            QH.e.SpecularTextureEnabled = HH
          }
          static get BumpTextureEnabled() {
            return QH.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(HH) {
            QH.e.BumpTextureEnabled = HH
          }
          static get LightmapTextureEnabled() {
            return QH.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(HH) {
            QH.e.LightmapTextureEnabled = HH
          }
          static get RefractionTextureEnabled() {
            return QH.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(HH) {
            QH.e.RefractionTextureEnabled = HH
          }
          static get ColorGradingTextureEnabled() {
            return QH.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(HH) {
            QH.e.ColorGradingTextureEnabled = HH
          }
          static get FresnelEnabled() {
            return QH.e.FresnelEnabled
          }
          static set FresnelEnabled(HH) {
            QH.e.FresnelEnabled = HH
          }
        }, BH = new WeakMap, EH = new WeakMap, YH = new WeakMap, OH = new WeakMap, bH = new WeakMap, kH = new WeakMap, mH = new WeakMap, oH = new WeakMap, fH = new WeakMap, cH = new WeakMap, eH = new WeakMap, qH = new WeakMap, gH = new WeakMap, NH = new WeakMap, RH = new WeakMap, jH = new WeakMap, nH = new WeakMap, FH = new WeakMap, DH = new WeakMap, wH = new WeakMap, ZH = new WeakMap, dH = new WeakMap, aH = new WeakMap, sH = new WeakMap, JH = new WeakMap, iH = new WeakMap, pH = new WeakMap, yH = new WeakMap, HB = new WeakMap, BB = new WeakMap, LB = new WeakMap, AB = new WeakMap, (() => {
          const BH = "function" === typeof Symbol && Symbol.metadata ? Object.create(bL[Symbol.metadata] ?? null) : void 0;
          rB = [(0, rH.A)("diffuseTexture")], SB = [(0, rH.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], hB = [(0, rH.A)("ambientTexture")], tB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], zB = [(0, rH.A)("opacityTexture")], CB = [(0, rH.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], EB = [(0, rH.A)("reflectionTexture")], XB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], GB = [(0, rH.A)("emissiveTexture")], YB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], uB = [(0, rH.A)("specularTexture")], QB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], WB = [(0, rH.A)("bumpTexture")], MB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], xB = [(0, rH.A)("lightmapTexture")], vB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], PB = [(0, rH.A)("refractionTexture")], TB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], UB = [(0, rH.l)("ambient")], VB = [(0, rH.l)("diffuse")], OB = [(0, rH.l)("specular")], bB = [(0, rH.l)("emissive")], kB = [(0, rH.H)()], mB = [(0, rH.H)("useAlphaFromDiffuseTexture")], oB = [() => ({
            init(HH) {
              return void 0 === HH && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = HH), HH
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(HH) {
              this._useAlphaFromDiffuseTexture = HH
            }
          })], IB = [(0, rH.H)("useEmissiveAsIllumination")], fB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], lB = [(0, rH.H)("linkEmissiveWithDiffuse")], KB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], cB = [(0, rH.H)("useSpecularOverAlpha")], eB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], qB = [(0, rH.H)("useReflectionOverAlpha")], gB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], NB = [(0, rH.H)("disableLighting")], RB = [(0, rH.e)("_markAllSubMeshesAsLightsDirty")], jB = [(0, rH.H)("useObjectSpaceNormalMap")], nB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], FB = [(0, rH.H)("useParallax")], DB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], wB = [(0, rH.H)("useParallaxOcclusion")], ZB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], dB = [(0, rH.H)()], aB = [(0, rH.H)("roughness")], sB = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], JB = [(0, rH.H)()], iB = [(0, rH.H)()], pB = [(0, rH.H)()], yB = [(0, rH.H)("useLightmapAsShadowmap")], HL = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], BL = [(0, rH.r)("diffuseFresnelParameters")], LL = [(0, rH.e)("_markAllSubMeshesAsFresnelDirty")], AL = [(0, rH.r)("opacityFresnelParameters")], rL = [(0, rH.e)("_markAllSubMeshesAsFresnelAndMiscDirty")], SL = [(0, rH.r)("reflectionFresnelParameters")], hL = [(0, rH.e)("_markAllSubMeshesAsFresnelDirty")], tL = [(0, rH.r)("refractionFresnelParameters")], zL = [(0, rH.e)("_markAllSubMeshesAsFresnelDirty")], CL = [(0, rH.r)("emissiveFresnelParameters")], EL = [(0, rH.e)("_markAllSubMeshesAsFresnelDirty")], XL = [(0, rH.H)("useReflectionFresnelFromSpecular")], GL = [(0, rH.e)("_markAllSubMeshesAsFresnelDirty")], YL = [(0, rH.H)("useGlossinessFromSpecularMapAlpha")], uL = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], QL = [(0, rH.H)("maxSimultaneousLights")], WL = [(0, rH.e)("_markAllSubMeshesAsLightsDirty")], ML = [(0, rH.H)("invertNormalMapX")], xL = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], vL = [(0, rH.H)("invertNormalMapY")], PL = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], TL = [(0, rH.H)("twoSidedLighting")], UL = [(0, rH.e)("_markAllSubMeshesAsTexturesDirty")], VL = [(0, rH.H)("applyDecalMapAfterDetailMap")], OL = [(0, rH.e)("_markAllSubMeshesAsMiscDirty")], (0, AH.g)(HH, null, SB, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "diffuseTexture" in HH,
              get: HH => HH.diffuseTexture,
              set: (HH, BH) => {
                HH.diffuseTexture = BH
              }
            },
            metadata: BH
          }, oL, IL), (0, AH.g)(HH, null, tB, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "ambientTexture" in HH,
              get: HH => HH.ambientTexture,
              set: (HH, BH) => {
                HH.ambientTexture = BH
              }
            },
            metadata: BH
          }, KL, cL), (0, AH.g)(HH, null, CB, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "opacityTexture" in HH,
              get: HH => HH.opacityTexture,
              set: (HH, BH) => {
                HH.opacityTexture = BH
              }
            },
            metadata: BH
          }, gL, NL), (0, AH.g)(HH, null, XB, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "reflectionTexture" in HH,
              get: HH => HH.reflectionTexture,
              set: (HH, BH) => {
                HH.reflectionTexture = BH
              }
            },
            metadata: BH
          }, nL, FL), (0, AH.g)(HH, null, YB, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "emissiveTexture" in HH,
              get: HH => HH.emissiveTexture,
              set: (HH, BH) => {
                HH.emissiveTexture = BH
              }
            },
            metadata: BH
          }, ZL, dL), (0, AH.g)(HH, null, QB, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "specularTexture" in HH,
              get: HH => HH.specularTexture,
              set: (HH, BH) => {
                HH.specularTexture = BH
              }
            },
            metadata: BH
          }, JL, iL), (0, AH.g)(HH, null, MB, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "bumpTexture" in HH,
              get: HH => HH.bumpTexture,
              set: (HH, BH) => {
                HH.bumpTexture = BH
              }
            },
            metadata: BH
          }, HA, BA), (0, AH.g)(HH, null, vB, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "lightmapTexture" in HH,
              get: HH => HH.lightmapTexture,
              set: (HH, BH) => {
                HH.lightmapTexture = BH
              }
            },
            metadata: BH
          }, rA, SA), (0, AH.g)(HH, null, TB, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "refractionTexture" in HH,
              get: HH => HH.refractionTexture,
              set: (HH, BH) => {
                HH.refractionTexture = BH
              }
            },
            metadata: BH
          }, zA, CA), (0, AH.g)(HH, null, oB, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "useAlphaFromDiffuseTexture" in HH,
              get: HH => HH.useAlphaFromDiffuseTexture,
              set: (HH, BH) => {
                HH.useAlphaFromDiffuseTexture = BH
              }
            },
            metadata: BH
          }, UA, VA), (0, AH.g)(HH, null, fB, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: HH => "useEmissiveAsIllumination" in HH,
              get: HH => HH.useEmissiveAsIllumination,
              set: (HH, BH) => {
                HH.useEmissiveAsIllumination = BH
              }
            },
            metadata: BH
          }, kA, mA), (0, AH.g)(HH, null, KB, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: HH => "linkEmissiveWithDiffuse" in HH,
              get: HH => HH.linkEmissiveWithDiffuse,
              set: (HH, BH) => {
                HH.linkEmissiveWithDiffuse = BH
              }
            },
            metadata: BH
          }, fA, lA), (0, AH.g)(HH, null, eB, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: HH => "useSpecularOverAlpha" in HH,
              get: HH => HH.useSpecularOverAlpha,
              set: (HH, BH) => {
                HH.useSpecularOverAlpha = BH
              }
            },
            metadata: BH
          }, eA, qA), (0, AH.g)(HH, null, gB, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: HH => "useReflectionOverAlpha" in HH,
              get: HH => HH.useReflectionOverAlpha,
              set: (HH, BH) => {
                HH.useReflectionOverAlpha = BH
              }
            },
            metadata: BH
          }, RA, jA), (0, AH.g)(HH, null, RB, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: HH => "disableLighting" in HH,
              get: HH => HH.disableLighting,
              set: (HH, BH) => {
                HH.disableLighting = BH
              }
            },
            metadata: BH
          }, DA, wA), (0, AH.g)(HH, null, nB, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: HH => "useObjectSpaceNormalMap" in HH,
              get: HH => HH.useObjectSpaceNormalMap,
              set: (HH, BH) => {
                HH.useObjectSpaceNormalMap = BH
              }
            },
            metadata: BH
          }, aA, sA), (0, AH.g)(HH, null, DB, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: HH => "useParallax" in HH,
              get: HH => HH.useParallax,
              set: (HH, BH) => {
                HH.useParallax = BH
              }
            },
            metadata: BH
          }, pA, yA), (0, AH.g)(HH, null, ZB, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: HH => "useParallaxOcclusion" in HH,
              get: HH => HH.useParallaxOcclusion,
              set: (HH, BH) => {
                HH.useParallaxOcclusion = BH
              }
            },
            metadata: BH
          }, Lr, Ar), (0, AH.g)(HH, null, sB, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: HH => "roughness" in HH,
              get: HH => HH.roughness,
              set: (HH, BH) => {
                HH.roughness = BH
              }
            },
            metadata: BH
          }, zr, Cr), (0, AH.g)(HH, null, HL, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: HH => "useLightmapAsShadowmap" in HH,
              get: HH => HH.useLightmapAsShadowmap,
              set: (HH, BH) => {
                HH.useLightmapAsShadowmap = BH
              }
            },
            metadata: BH
          }, xr, vr), (0, AH.g)(HH, null, LL, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "diffuseFresnelParameters" in HH,
              get: HH => HH.diffuseFresnelParameters,
              set: (HH, BH) => {
                HH.diffuseFresnelParameters = BH
              }
            },
            metadata: BH
          }, Ur, Vr), (0, AH.g)(HH, null, rL, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "opacityFresnelParameters" in HH,
              get: HH => HH.opacityFresnelParameters,
              set: (HH, BH) => {
                HH.opacityFresnelParameters = BH
              }
            },
            metadata: BH
          }, kr, mr), (0, AH.g)(HH, null, hL, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "reflectionFresnelParameters" in HH,
              get: HH => HH.reflectionFresnelParameters,
              set: (HH, BH) => {
                HH.reflectionFresnelParameters = BH
              }
            },
            metadata: BH
          }, fr, lr), (0, AH.g)(HH, null, zL, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "refractionFresnelParameters" in HH,
              get: HH => HH.refractionFresnelParameters,
              set: (HH, BH) => {
                HH.refractionFresnelParameters = BH
              }
            },
            metadata: BH
          }, er, qr), (0, AH.g)(HH, null, EL, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "emissiveFresnelParameters" in HH,
              get: HH => HH.emissiveFresnelParameters,
              set: (HH, BH) => {
                HH.emissiveFresnelParameters = BH
              }
            },
            metadata: BH
          }, Rr, jr), (0, AH.g)(HH, null, GL, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: HH => "useReflectionFresnelFromSpecular" in HH,
              get: HH => HH.useReflectionFresnelFromSpecular,
              set: (HH, BH) => {
                HH.useReflectionFresnelFromSpecular = BH
              }
            },
            metadata: BH
          }, Dr, wr), (0, AH.g)(HH, null, uL, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: HH => "useGlossinessFromSpecularMapAlpha" in HH,
              get: HH => HH.useGlossinessFromSpecularMapAlpha,
              set: (HH, BH) => {
                HH.useGlossinessFromSpecularMapAlpha = BH
              }
            },
            metadata: BH
          }, ar, sr), (0, AH.g)(HH, null, WL, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: HH => "maxSimultaneousLights" in HH,
              get: HH => HH.maxSimultaneousLights,
              set: (HH, BH) => {
                HH.maxSimultaneousLights = BH
              }
            },
            metadata: BH
          }, pr, yr), (0, AH.g)(HH, null, xL, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: HH => "invertNormalMapX" in HH,
              get: HH => HH.invertNormalMapX,
              set: (HH, BH) => {
                HH.invertNormalMapX = BH
              }
            },
            metadata: BH
          }, LS, AS), (0, AH.g)(HH, null, PL, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: HH => "invertNormalMapY" in HH,
              get: HH => HH.invertNormalMapY,
              set: (HH, BH) => {
                HH.invertNormalMapY = BH
              }
            },
            metadata: BH
          }, hS, tS), (0, AH.g)(HH, null, UL, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: HH => "twoSidedLighting" in HH,
              get: HH => HH.twoSidedLighting,
              set: (HH, BH) => {
                HH.twoSidedLighting = BH
              }
            },
            metadata: BH
          }, ES, XS), (0, AH.g)(HH, null, OL, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: HH => "applyDecalMapAfterDetailMap" in HH,
              get: HH => HH.applyDecalMapAfterDetailMap,
              set: (HH, BH) => {
                HH.applyDecalMapAfterDetailMap = BH
              }
            },
            metadata: BH
          }, uS, QS), (0, AH.g)(null, null, rB, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_diffuseTexture" in HH,
              get: HH => HH._diffuseTexture,
              set: (HH, BH) => {
                HH._diffuseTexture = BH
              }
            },
            metadata: BH
          }, kL, mL), (0, AH.g)(null, null, hB, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_ambientTexture" in HH,
              get: HH => HH._ambientTexture,
              set: (HH, BH) => {
                HH._ambientTexture = BH
              }
            },
            metadata: BH
          }, fL, lL), (0, AH.g)(null, null, zB, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_opacityTexture" in HH,
              get: HH => HH._opacityTexture,
              set: (HH, BH) => {
                HH._opacityTexture = BH
              }
            },
            metadata: BH
          }, eL, qL), (0, AH.g)(null, null, EB, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_reflectionTexture" in HH,
              get: HH => HH._reflectionTexture,
              set: (HH, BH) => {
                HH._reflectionTexture = BH
              }
            },
            metadata: BH
          }, RL, jL), (0, AH.g)(null, null, GB, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_emissiveTexture" in HH,
              get: HH => HH._emissiveTexture,
              set: (HH, BH) => {
                HH._emissiveTexture = BH
              }
            },
            metadata: BH
          }, DL, wL), (0, AH.g)(null, null, uB, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_specularTexture" in HH,
              get: HH => HH._specularTexture,
              set: (HH, BH) => {
                HH._specularTexture = BH
              }
            },
            metadata: BH
          }, aL, sL), (0, AH.g)(null, null, WB, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_bumpTexture" in HH,
              get: HH => HH._bumpTexture,
              set: (HH, BH) => {
                HH._bumpTexture = BH
              }
            },
            metadata: BH
          }, pL, yL), (0, AH.g)(null, null, xB, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_lightmapTexture" in HH,
              get: HH => HH._lightmapTexture,
              set: (HH, BH) => {
                HH._lightmapTexture = BH
              }
            },
            metadata: BH
          }, LA, AA), (0, AH.g)(null, null, PB, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_refractionTexture" in HH,
              get: HH => HH._refractionTexture,
              set: (HH, BH) => {
                HH._refractionTexture = BH
              }
            },
            metadata: BH
          }, hA, tA), (0, AH.g)(null, null, UB, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "ambientColor" in HH,
              get: HH => HH.ambientColor,
              set: (HH, BH) => {
                HH.ambientColor = BH
              }
            },
            metadata: BH
          }, EA, XA), (0, AH.g)(null, null, VB, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "diffuseColor" in HH,
              get: HH => HH.diffuseColor,
              set: (HH, BH) => {
                HH.diffuseColor = BH
              }
            },
            metadata: BH
          }, GA, YA), (0, AH.g)(null, null, OB, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "specularColor" in HH,
              get: HH => HH.specularColor,
              set: (HH, BH) => {
                HH.specularColor = BH
              }
            },
            metadata: BH
          }, uA, QA), (0, AH.g)(null, null, bB, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: HH => "emissiveColor" in HH,
              get: HH => HH.emissiveColor,
              set: (HH, BH) => {
                HH.emissiveColor = BH
              }
            },
            metadata: BH
          }, WA, MA), (0, AH.g)(null, null, kB, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: HH => "specularPower" in HH,
              get: HH => HH.specularPower,
              set: (HH, BH) => {
                HH.specularPower = BH
              }
            },
            metadata: BH
          }, xA, vA), (0, AH.g)(null, null, mB, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useAlphaFromDiffuseTexture" in HH,
              get: HH => HH._useAlphaFromDiffuseTexture,
              set: (HH, BH) => {
                HH._useAlphaFromDiffuseTexture = BH
              }
            },
            metadata: BH
          }, PA, TA), (0, AH.g)(null, null, IB, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useEmissiveAsIllumination" in HH,
              get: HH => HH._useEmissiveAsIllumination,
              set: (HH, BH) => {
                HH._useEmissiveAsIllumination = BH
              }
            },
            metadata: BH
          }, OA, bA), (0, AH.g)(null, null, lB, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: HH => "_linkEmissiveWithDiffuse" in HH,
              get: HH => HH._linkEmissiveWithDiffuse,
              set: (HH, BH) => {
                HH._linkEmissiveWithDiffuse = BH
              }
            },
            metadata: BH
          }, oA, IA), (0, AH.g)(null, null, cB, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useSpecularOverAlpha" in HH,
              get: HH => HH._useSpecularOverAlpha,
              set: (HH, BH) => {
                HH._useSpecularOverAlpha = BH
              }
            },
            metadata: BH
          }, KA, cA), (0, AH.g)(null, null, qB, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useReflectionOverAlpha" in HH,
              get: HH => HH._useReflectionOverAlpha,
              set: (HH, BH) => {
                HH._useReflectionOverAlpha = BH
              }
            },
            metadata: BH
          }, gA, NA), (0, AH.g)(null, null, NB, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: HH => "_disableLighting" in HH,
              get: HH => HH._disableLighting,
              set: (HH, BH) => {
                HH._disableLighting = BH
              }
            },
            metadata: BH
          }, nA, FA), (0, AH.g)(null, null, jB, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useObjectSpaceNormalMap" in HH,
              get: HH => HH._useObjectSpaceNormalMap,
              set: (HH, BH) => {
                HH._useObjectSpaceNormalMap = BH
              }
            },
            metadata: BH
          }, ZA, dA), (0, AH.g)(null, null, FB, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useParallax" in HH,
              get: HH => HH._useParallax,
              set: (HH, BH) => {
                HH._useParallax = BH
              }
            },
            metadata: BH
          }, JA, iA), (0, AH.g)(null, null, wB, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useParallaxOcclusion" in HH,
              get: HH => HH._useParallaxOcclusion,
              set: (HH, BH) => {
                HH._useParallaxOcclusion = BH
              }
            },
            metadata: BH
          }, Hr, Br), (0, AH.g)(null, null, dB, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: HH => "parallaxScaleBias" in HH,
              get: HH => HH.parallaxScaleBias,
              set: (HH, BH) => {
                HH.parallaxScaleBias = BH
              }
            },
            metadata: BH
          }, rr, Sr), (0, AH.g)(null, null, aB, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: HH => "_roughness" in HH,
              get: HH => HH._roughness,
              set: (HH, BH) => {
                HH._roughness = BH
              }
            },
            metadata: BH
          }, hr, tr), (0, AH.g)(null, null, JB, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: HH => "indexOfRefraction" in HH,
              get: HH => HH.indexOfRefraction,
              set: (HH, BH) => {
                HH.indexOfRefraction = BH
              }
            },
            metadata: BH
          }, Er, Xr), (0, AH.g)(null, null, iB, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: HH => "invertRefractionY" in HH,
              get: HH => HH.invertRefractionY,
              set: (HH, BH) => {
                HH.invertRefractionY = BH
              }
            },
            metadata: BH
          }, Gr, Yr), (0, AH.g)(null, null, pB, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: HH => "alphaCutOff" in HH,
              get: HH => HH.alphaCutOff,
              set: (HH, BH) => {
                HH.alphaCutOff = BH
              }
            },
            metadata: BH
          }, ur, Qr), (0, AH.g)(null, null, yB, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useLightmapAsShadowmap" in HH,
              get: HH => HH._useLightmapAsShadowmap,
              set: (HH, BH) => {
                HH._useLightmapAsShadowmap = BH
              }
            },
            metadata: BH
          }, Wr, Mr), (0, AH.g)(null, null, BL, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "_diffuseFresnelParameters" in HH,
              get: HH => HH._diffuseFresnelParameters,
              set: (HH, BH) => {
                HH._diffuseFresnelParameters = BH
              }
            },
            metadata: BH
          }, Pr, Tr), (0, AH.g)(null, null, AL, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "_opacityFresnelParameters" in HH,
              get: HH => HH._opacityFresnelParameters,
              set: (HH, BH) => {
                HH._opacityFresnelParameters = BH
              }
            },
            metadata: BH
          }, Or, br), (0, AH.g)(null, null, SL, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "_reflectionFresnelParameters" in HH,
              get: HH => HH._reflectionFresnelParameters,
              set: (HH, BH) => {
                HH._reflectionFresnelParameters = BH
              }
            },
            metadata: BH
          }, or, Ir), (0, AH.g)(null, null, tL, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "_refractionFresnelParameters" in HH,
              get: HH => HH._refractionFresnelParameters,
              set: (HH, BH) => {
                HH._refractionFresnelParameters = BH
              }
            },
            metadata: BH
          }, Kr, cr), (0, AH.g)(null, null, CL, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: HH => "_emissiveFresnelParameters" in HH,
              get: HH => HH._emissiveFresnelParameters,
              set: (HH, BH) => {
                HH._emissiveFresnelParameters = BH
              }
            },
            metadata: BH
          }, gr, Nr), (0, AH.g)(null, null, XL, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useReflectionFresnelFromSpecular" in HH,
              get: HH => HH._useReflectionFresnelFromSpecular,
              set: (HH, BH) => {
                HH._useReflectionFresnelFromSpecular = BH
              }
            },
            metadata: BH
          }, nr, Fr), (0, AH.g)(null, null, YL, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: HH => "_useGlossinessFromSpecularMapAlpha" in HH,
              get: HH => HH._useGlossinessFromSpecularMapAlpha,
              set: (HH, BH) => {
                HH._useGlossinessFromSpecularMapAlpha = BH
              }
            },
            metadata: BH
          }, Zr, dr), (0, AH.g)(null, null, QL, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: HH => "_maxSimultaneousLights" in HH,
              get: HH => HH._maxSimultaneousLights,
              set: (HH, BH) => {
                HH._maxSimultaneousLights = BH
              }
            },
            metadata: BH
          }, Jr, ir), (0, AH.g)(null, null, ML, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: HH => "_invertNormalMapX" in HH,
              get: HH => HH._invertNormalMapX,
              set: (HH, BH) => {
                HH._invertNormalMapX = BH
              }
            },
            metadata: BH
          }, HS, BS), (0, AH.g)(null, null, vL, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: HH => "_invertNormalMapY" in HH,
              get: HH => HH._invertNormalMapY,
              set: (HH, BH) => {
                HH._invertNormalMapY = BH
              }
            },
            metadata: BH
          }, rS, SS), (0, AH.g)(null, null, TL, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: HH => "_twoSidedLighting" in HH,
              get: HH => HH._twoSidedLighting,
              set: (HH, BH) => {
                HH._twoSidedLighting = BH
              }
            },
            metadata: BH
          }, zS, CS), (0, AH.g)(null, null, VL, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: HH => "_applyDecalMapAfterDetailMap" in HH,
              get: HH => HH._applyDecalMapAfterDetailMap,
              set: (HH, BH) => {
                HH._applyDecalMapAfterDetailMap = BH
              }
            },
            metadata: BH
          }, GS, YS), BH && Object.defineProperty(HH, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: BH
          })
        })(), HH.ForceGLSL = !1, HH._ShaderLoader = new UH.b((() => [Promise.all([LH.e(626), LH.e(625)]).then((() => LH(45328))), Promise.all([LH.e(631), LH.e(627), LH.e(640), LH.e(630)]).then((() => LH(45518)))]), (() => [Promise.all([LH.e(647), LH.e(642)]).then((() => LH(45679))), Promise.all([LH.e(648), LH.e(658), LH.e(644)]).then((() => LH(45848)))])), HH
      })(),
      eH = !1;

    function qH() {
      eH || (eH = !0, (0, XH.d)(), (0, mH.f)("BABYLON.StandardMaterial", cH), hH.d.DefaultMaterialFactory = HH => new cH("default material", HH))
    }
    Object.getOwnPropertyDescriptor(cH.prototype, "decalMap") || Object.defineProperty(cH.prototype, "decalMap", (0, oH.e)("StandardMaterial", "decalMap"))
  },
  41669: (HH, BH, LH) => {
    function AH(HH) {
      return class extends HH {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    LH.d(BH, {
      b: () => AH
    })
  },
  41657: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH
    });
    class AH {
      constructor(HH, BH) {
        this._webGL = {
          load: HH,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: BH,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(HH) {
        const BH = 1 === HH ? this._webGPU : this._webGL;
        return BH.loaded ? void 0 : async () => {
          await this._loadAsync(BH)
        }
      }
      async _loadAsync(HH) {
        if (HH.loaded) return;
        let BH = HH.loadPromise;
        const LH = null === BH;
        LH && (BH = Promise.all(HH.load()), HH.loadPromise = BH);
        let AH = !1;
        try {
          await BH, AH = !0
        } finally {
          LH && this._completeLoad(HH, AH)
        }
      }
      _completeLoad(HH, BH) {
        HH.loaded = BH, HH.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);