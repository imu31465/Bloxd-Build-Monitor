export const id = 296;
export const ids = [296];
export const modules = {
  41912: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => EW
    });
    var mW = OW(41523);

    function EW(WW) {
      return class extends WW {
        constructor() {
          super(...arguments);
          const WW = new.target;
          if (!WW[Symbol.metadata]) {
            const iW = Object.getPrototypeOf(WW)?.[Symbol.metadata];
            WW[Symbol.metadata] = iW ? Object.create(iW) : {}
          }
          const iW = (0, mW.b)(WW[Symbol.metadata]);
          iW._imageProcessingConfiguration || (iW._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(WW) {
          this._attachImageProcessingConfiguration(WW), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(WW) {
          WW !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !WW && this.bD ? this._imageProcessingConfiguration = this.bD().imageProcessingConfiguration : WW && (this._imageProcessingConfiguration = WW), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(WW) {
          this.imageProcessingConfiguration.colorCurvesEnabled = WW
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(WW) {
          this.imageProcessingConfiguration.colorGradingEnabled = WW
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(WW) {
          this._imageProcessingConfiguration.toneMappingEnabled = WW
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(WW) {
          this._imageProcessingConfiguration.exposure = WW
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(WW) {
          this._imageProcessingConfiguration.contrast = WW
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(WW) {
          this._imageProcessingConfiguration.colorGradingTexture = WW
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(WW) {
          this._imageProcessingConfiguration.colorCurves = WW
        }
      }
    }
  },
  41795: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW,
      f: () => EW
    });
    var mW = OW(41801);

    function EW(WW) {
      return class extends WW {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class NW extends mW.c {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  41873: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => ZW
    });
    var mW = OW(41516),
      EW = OW(41805),
      NW = OW(41519),
      PW = OW(41857),
      LW = OW(41801),
      cW = OW(41877),
      wW = OW(41845);
    class tW extends LW.c {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let ZW = (() => {
      var WW, iW, OW, LW;
      let ZW, xW, lW, AW, bW, jW, UW = cW.e,
        kW = [],
        sW = [],
        MW = [],
        KW = [],
        SW = [],
        YW = [],
        yW = [],
        TW = [],
        JW = [],
        hW = [],
        HW = [],
        nW = [];
      return WW = class extends UW {
        get texture() {
          return (0, mW.b)(this, iW, "f")
        }
        set texture(WW) {
          (0, mW.d)(this, iW, WW, "f")
        }
        get normalBlendMethod() {
          return (0, mW.b)(this, OW, "f")
        }
        set normalBlendMethod(WW) {
          (0, mW.d)(this, OW, WW, "f")
        }
        get isEnabled() {
          return (0, mW.b)(this, LW, "f")
        }
        set isEnabled(WW) {
          (0, mW.d)(this, LW, WW, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(WW) {
          let NW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(WW, "DetailMap", 140, new tW, NW), this._texture = null, iW.set(this, (0, mW.g)(this, kW, void 0)), this.diffuseBlendLevel = ((0, mW.g)(this, sW), (0, mW.g)(this, MW, 1)), this.roughnessBlendLevel = ((0, mW.g)(this, KW), (0, mW.g)(this, SW, 1)), this.bumpLevel = ((0, mW.g)(this, YW), (0, mW.g)(this, yW, 1)), this._normalBlendMethod = ((0, mW.g)(this, TW), EW.d.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), OW.set(this, (0, mW.g)(this, JW, void 0)), this._isEnabled = ((0, mW.g)(this, hW), !1), LW.set(this, (0, mW.g)(this, HW, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, mW.g)(this, nW), this._internalMarkAllSubMeshesAsTexturesDirty = WW._dirtyCallbacks[1]
        }
        isReadyForSubMesh(WW, iW, OW) {
          return !this._isEnabled || !(WW._areTexturesDirty && iW.texturesEnabled && OW.getCaps().standardDerivatives && this._texture && PW.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(WW, iW) {
          if (this._isEnabled) {
            WW.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const OW = iW.VA();
            WW._areTexturesDirty && (OW.getCaps().standardDerivatives && this._texture && PW.e.DetailTextureEnabled && this._isEnabled ? ((0, wW.W)(this._texture, WW, "DETAIL"), WW.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : WW.DETAIL = !1)
          } else WW.DETAIL = !1
        }
        bindForSubMesh(WW, iW) {
          if (!this._isEnabled) return;
          const OW = this._material.isFrozen;
          WW.useUbo && OW && WW.isSync || this._texture && PW.e.DetailTextureEnabled && (WW.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, wW.v)(this._texture, WW, "detail")), iW.texturesEnabled && this._texture && PW.e.DetailTextureEnabled && WW.setTexture("detailSampler", this._texture)
        }
        hasTexture(WW) {
          return this._texture === WW
        }
        getActiveTextures(WW) {
          this._texture && WW.push(this._texture)
        }
        getAnimatables(WW) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && WW.push(this._texture)
        }
        dispose(WW) {
          WW && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(WW) {
          WW.push("detailSampler")
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
      }, iW = new WeakMap, OW = new WeakMap, LW = new WeakMap, (() => {
        const iW = "function" === typeof Symbol && Symbol.metadata ? Object.create(UW[Symbol.metadata] ?? null) : void 0;
        ZW = [(0, NW.F)("detailTexture"), (0, NW.h)("_markAllSubMeshesAsTexturesDirty")], xW = [(0, NW.M)()], lW = [(0, NW.M)()], AW = [(0, NW.M)()], bW = [(0, NW.M)(), (0, NW.h)("_markAllSubMeshesAsTexturesDirty")], jW = [(0, NW.M)(), (0, NW.h)("_markAllSubMeshesAsTexturesDirty")], (0, mW.e)(WW, null, ZW, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: WW => "texture" in WW,
            get: WW => WW.texture,
            set: (WW, iW) => {
              WW.texture = iW
            }
          },
          metadata: iW
        }, kW, sW), (0, mW.e)(WW, null, bW, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: WW => "normalBlendMethod" in WW,
            get: WW => WW.normalBlendMethod,
            set: (WW, iW) => {
              WW.normalBlendMethod = iW
            }
          },
          metadata: iW
        }, JW, hW), (0, mW.e)(WW, null, jW, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isEnabled" in WW,
            get: WW => WW.isEnabled,
            set: (WW, iW) => {
              WW.isEnabled = iW
            }
          },
          metadata: iW
        }, HW, nW), (0, mW.e)(null, null, xW, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: WW => "diffuseBlendLevel" in WW,
            get: WW => WW.diffuseBlendLevel,
            set: (WW, iW) => {
              WW.diffuseBlendLevel = iW
            }
          },
          metadata: iW
        }, MW, KW), (0, mW.e)(null, null, lW, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: WW => "roughnessBlendLevel" in WW,
            get: WW => WW.roughnessBlendLevel,
            set: (WW, iW) => {
              WW.roughnessBlendLevel = iW
            }
          },
          metadata: iW
        }, SW, YW), (0, mW.e)(null, null, AW, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: WW => "bumpLevel" in WW,
            get: WW => WW.bumpLevel,
            set: (WW, iW) => {
              WW.bumpLevel = iW
            }
          },
          metadata: iW
        }, yW, TW), iW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iW
        })
      })(), WW
    })()
  },
  41801: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    class mW {
      constructor(WW) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = WW, WW)
          for (const iW in WW) Object.prototype.hasOwnProperty.call(WW, iW) && this._setDefaultValue(iW)
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
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || WW, this._isDirty = !0
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
        for (const WW of Object.keys(this)) "_" !== WW[0] && this._keys.push(WW);
        if (this._externalProperties)
          for (const WW in this._externalProperties) - 1 === this._keys.indexOf(WW) && this._keys.push(WW)
      }
      isEqual(WW) {
        if (this._keys.length !== WW._keys.length) return !1;
        for (let iW = 0; iW < this._keys.length; iW++) {
          const OW = this._keys[iW];
          if (this[OW] !== WW[OW]) return !1
        }
        return !0
      }
      cloneTo(WW) {
        this._keys.length !== WW._keys.length && (WW._keys = this._keys.slice(0));
        for (let iW = 0; iW < this._keys.length; iW++) {
          const OW = this._keys[iW];
          WW[OW] = this[OW]
        }
      }
      reset() {
        for (const WW of this._keys) this._setDefaultValue(WW)
      }
      _setDefaultValue(WW) {
        const iW = this._externalProperties?.[WW]?.type ?? typeof this[WW],
          OW = this._externalProperties?.[WW]?.default;
        switch (iW) {
          case "number":
            this[WW] = OW ?? 0;
            break;
          case "string":
            this[WW] = OW ?? "";
            break;
          default:
            this[WW] = OW ?? !1
        }
      }
      toString() {
        let WW = "";
        for (let iW = 0; iW < this._keys.length; iW++) {
          const OW = this._keys[iW],
            mW = this[OW];
          switch (typeof mW) {
            case "number":
            case "string":
              WW += "#define " + OW + " " + mW + "\n";
              break;
            default:
              mW && (WW += "#define " + OW + "\n")
          }
        }
        return WW
      }
    }
  },
  41892: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      e: () => PW,
      i: () => NW
    });
    var mW, EW = OW(38241);

    function NW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const mW = iW(WW);
      if (!Number.isInteger(mW) || mW < 0 || mW > OW) throw new Error(`Invalid geometry object ID ${mW} for mesh "${WW.name}". Object IDs must be integers between 0 and 0x${OW.toString(16).toUpperCase()}.`);
      return mW
    }

    function PW(WW, iW) {
      const OW = iW(WW);
      if (!Number.isInteger(OW) || OW < 0 || OW > 255 || 0 !== OW && 0 === (63 & OW)) throw new Error(`Invalid geometry mesh-blending tag ${OW} for mesh "${WW.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return OW
    }! function(WW) {
      WW[WW.Zero = 0] = "Zero", WW[WW.One = 1] = "One", WW[WW.MaxViewZ = 2] = "MaxViewZ", WW[WW.NoClear = 3] = "NoClear"
    }(mW || (mW = {}));
    class LW {
      static CreateConfiguration(WW) {
        return LW._Configurations[WW] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: EW.d.Zero(),
          currentViewProjection: EW.d.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, LW._Configurations[WW]
      }
      static DeleteConfiguration(WW) {
        delete LW._Configurations[WW]
      }
      static GetConfiguration(WW) {
        return LW._Configurations[WW]
      }
      static _PrepareConfiguration(WW, iW, OW) {
        const mW = LW._Configurations[WW];
        mW._attachments = iW, mW._colorAttachments = OW, mW._mrtCount = iW.length;
        let EW = "#define PREPASS\n";
        for (const NW of LW.GeometryTextureDescriptions) {
          const WW = mW.defines[NW.defineIndex];
          void 0 !== WW && (EW += `#define ${NW.define}\n#define ${NW.defineIndex} ${WW}\n`)
        }
        mW.objectIdIsRedFormat && (EW += "#define PREPASS_OBJECT_ID_R8\n"), mW._defines = EW + `#define SCENE_MRT_COUNT ${iW.length}\n`
      }
      static _PrepareStringDefines(WW, iW) {
        const OW = LW._Configurations[WW];
        return !!OW?._defines && (iW.push(OW._defines), !0)
      }
      static _BindAttachmentsForEffect(WW, iW) {
        const OW = LW._Configurations[WW.currentRenderPassId];
        return !OW?._attachments || (WW.bindAttachments(iW._multiTarget ? OW._attachments : OW._colorAttachments), iW._multiTarget || void 0 !== OW.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(WW) {
        const iW = LW._Configurations[WW.currentRenderPassId];
        iW?._colorAttachments && WW.bindAttachments(iW._colorAttachments)
      }
      static _BindColorAttachments(WW) {
        const iW = LW._Configurations[WW.currentRenderPassId];
        return !iW?._colorAttachments || (WW.bindAttachments(iW._colorAttachments), void 0 !== iW.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(WW) {
        const iW = LW._Configurations[WW.currentRenderPassId];
        return !iW?._colorAttachments || void 0 !== iW.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(WW, iW) {
        const OW = LW._Configurations[WW.currentRenderPassId];
        if (!OW) return;
        const mW = WW.getAlphaMode(),
          EW = void 0 === OW.defines.PREPASS_COLOR_INDEX || 2 === mW || 1 === mW || 17 === mW;
        iW.setFloat("geometryZeroAlphaDiscard", EW ? 1 : 0)
      }
      static AddUniformsAndSamplers(WW, iW) {
        WW.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(WW, iW) {
        for (const OW of iW)
          if (OW.hY)
            for (const iW of OW.hY) iW._removeDrawWrapper(WW)
      }
      static PrepareDefines(WW, iW, OW) {
        if (!OW._arePrePassDirty) return;
        const mW = LW._Configurations[WW];
        if (!mW) return;
        OW.PREPASS = !0;
        let EW = 0;
        for (let NW = 0; NW < LW.GeometryTextureDescriptions.length; NW++) {
          const WW = LW.GeometryTextureDescriptions[NW],
            iW = WW.define,
            PW = WW.defineIndex,
            cW = mW.defines[PW];
          void 0 !== cW ? (OW[iW] = !0, OW[PW] = cW, EW++) : (OW[iW] = !1, delete OW[PW])
        }
        OW.PREPASS_OBJECT_ID_R8 = mW.objectIdIsRedFormat, OW.SCENE_MRT_COUNT = mW._mrtCount ?? EW, OW.BONES_VELOCITY_ENABLED = iW.useBones && iW.computeBonesUsingShaders && iW.skeleton && !iW.skeleton.isUsingTextureForMatrices && -1 === mW.excludedSkinnedMesh.indexOf(iW)
      }
      static Bind(WW, iW, OW, mW, EW) {
        const cW = LW._Configurations[WW];
        if (!cW) return;
        const wW = OW.bD(),
          tW = wW.VA();
        if (cW.reverseCulling && tW.setStateCullFaceType(wW._mirroredCameraPosition ? EW.cullBackFaces : !EW.cullBackFaces), void 0 !== cW.defines.PREPASS_OBJECT_ID_INDEX) {
          const WW = cW.objectIdIsRedFormat ? 255 : 16777215;
          let mW = OW.uniqueId;
          if (cW.objectIdProvider) mW = NW(OW, cW.objectIdProvider, WW);
          else if (mW > WW) throw new Error(`Invalid geometry object ID ${mW} for mesh "${OW.name}". Object IDs must be integers between 0 and 0x${WW.toString(16).toUpperCase()}.`);
          iW.setFloat("objectId", mW)
        }
        if (void 0 !== cW.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const WW = cW.meshBlendTagProvider ? PW(OW, cW.meshBlendTagProvider) : OW.meshBlendingTag;
          iW.setInt("meshBlendTag", WW)
        }
        if (void 0 !== cW.defines.PREPASS_VELOCITY_INDEX || void 0 !== cW.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const WW = cW._currentWorldMatrices ?? (cW._currentWorldMatrices = {}),
            EW = cW._worldMatrixFrameIds ?? (cW._worldMatrixFrameIds = {});
          if (WW[OW.uniqueId] || (WW[OW.uniqueId] = mW.clone(), cW.previousWorldMatrices[OW.uniqueId] = mW.clone()), EW[OW.uniqueId] !== tW.frameId && (cW.previousWorldMatrices[OW.uniqueId].HJ(WW[OW.uniqueId]), EW[OW.uniqueId] = tW.frameId), WW[OW.uniqueId].HJ(mW), -1 === cW.lastUpdateFrameId ? (cW.lastUpdateFrameId = tW.frameId, cW.previousViewProjection.HJ(wW.getTransformMatrix()), cW.currentViewProjection.HJ(wW.getTransformMatrix())) : cW.currentViewProjection.updateFlag !== wW.getTransformMatrix().updateFlag ? (cW.lastUpdateFrameId = tW.frameId, cW.previousViewProjection.HJ(cW.currentViewProjection), cW.currentViewProjection.HJ(wW.getTransformMatrix())) : cW.lastUpdateFrameId !== tW.frameId && (cW.lastUpdateFrameId = tW.frameId, cW.previousViewProjection.HJ(cW.currentViewProjection)), iW.setMatrix("previousWorld", cW.previousWorldMatrices[OW.uniqueId]), iW.setMatrix("previousViewProjection", cW.previousViewProjection), OW.useBones && OW.computeBonesUsingShaders && OW.skeleton) {
            const WW = OW.skeleton;
            if (!WW.isUsingTextureForMatrices || -1 === iW.getUniformIndex("boneTextureInfo")) {
              const mW = WW.getTransformMatrices(OW);
              mW && (cW.previousBones[OW.uniqueId] || (cW.previousBones[OW.uniqueId] = mW.slice()), iW.setMatrices("mPreviousBones", cW.previousBones[OW.uniqueId]), cW.previousBones[OW.uniqueId].set(mW))
            }
          }
        }
      }
    }
    LW.GeometryTextureDescriptions = [{
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
    }], LW._Configurations = {}
  },
  41877: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => xW,
      f: () => AW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(41418),
      PW = OW(41392);
    const LW = new RegExp("^([gimus]+)!");
    class cW {
      constructor(WW) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = WW, this._scene = WW.bD(), this._engine = this._scene.VA()
      }
      _addPlugin(WW) {
        for (let mW = 0; mW < this._plugins.length; ++mW)
          if (this._plugins[mW].name === WW.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !WW.isCompatible(this._material.shaderLanguage)) throw `The plugin "${WW.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const iW = WW.getClassName();
        cW._MaterialPluginClassToMainDefine[iW] || (cW._MaterialPluginClassToMainDefine[iW] = "MATERIALPLUGIN_" + ++cW._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (WW, iW) => this._handlePluginEvent(WW, iW), this._plugins.push(WW), this._plugins.sort(((WW, iW) => WW.priority - iW.priority)), this._codeInjectionPoints = {};
        const OW = {};
        OW[cW._MaterialPluginClassToMainDefine[iW]] = {
          type: "boolean",
          default: !0
        };
        for (const mW of this._plugins) mW.collectDefines(OW), this._collectPointNames("vertex", mW.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", mW.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = OW, !0
      }
      _activatePlugin(WW) {
        -1 === this._activePlugins.indexOf(WW) && (this._activePlugins.push(WW), this._activePlugins.sort(((WW, iW) => WW.priority - iW.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), WW.registerForExtraEvents && (this._activePluginsForExtraEvents.push(WW), this._activePluginsForExtraEvents.sort(((WW, iW) => WW.priority - iW.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(WW) {
        for (let iW = 0; iW < this._plugins.length; ++iW)
          if (this._plugins[iW].name === WW) return this._plugins[iW];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(WW) {
        let iW = !0;
        for (const OW of this._activePlugins) iW = iW && OW.isReadyForSubMesh(WW.defines, this._scene, this._engine, WW.subMesh);
        WW.isReadyForSubMesh = iW
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(WW) {
        for (const iW of this._activePlugins) iW.prepareDefinesBeforeAttributes(WW.defines, this._scene, WW.mesh)
      }
      _handlePluginEventPrepareDefines(WW) {
        for (const iW of this._activePlugins) iW.prepareDefines(WW.defines, this._scene, WW.mesh)
      }
      _handlePluginEventHardBindForSubMesh(WW) {
        for (const iW of this._activePluginsForExtraEvents) iW.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, WW.subMesh)
      }
      _handlePluginEventBindForSubMesh(WW) {
        for (const iW of this._activePlugins) iW.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, WW.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(WW) {
        let iW = !1;
        for (const OW of this._activePluginsForExtraEvents)
          if (iW = OW.hasRenderTargetTextures(), iW) break;
        WW.hasRenderTargetTextures = iW
      }
      _handlePluginEventFillRenderTargetTextures(WW) {
        for (const iW of this._activePluginsForExtraEvents) iW.fillRenderTargetTextures(WW.renderTargets)
      }
      _handlePluginEvent(WW, iW) {
        switch (WW) {
          case 512: {
            const WW = iW;
            for (const iW of this._activePlugins) iW.getActiveTextures(WW.activeTextures);
            break
          }
          case 256: {
            const WW = iW;
            for (const iW of this._activePlugins) iW.getAnimatables(WW.animatables);
            break
          }
          case 1024: {
            const WW = iW;
            let OW = !1;
            for (const iW of this._activePlugins)
              if (OW = iW.hasTexture(WW.texture), OW) break;
            WW.hasTexture = OW;
            break
          }
          case 2: {
            const WW = iW;
            for (const iW of this._plugins) iW.dispose(WW.forceDisposeTextures);
            break
          }
          case 4:
            iW.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const WW = iW;
            for (const iW of this._activePlugins) WW.fallbackRank = iW.addFallbacks(WW.defines, WW.fallbacks, WW.fallbackRank), iW.getAttributes(WW.attributes, this._scene, WW.mesh);
            this._uniformList.length > 0 && WW.uniforms.push(...this._uniformList), this._samplerList.length > 0 && WW.samplers.push(...this._samplerList), this._uboList.length > 0 && WW.uniformBuffersNames.push(...this._uboList), WW.customCode = this._injectCustomCode(WW, WW.customCode);
            break
          }
          case 8: {
            const WW = iW;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const OW = 1 === this._material.shaderLanguage;
            for (const iW of this._plugins) {
              const mW = iW.getUniforms(this._material.shaderLanguage);
              if (mW) {
                if (mW.ubo)
                  for (const iW of mW.ubo) {
                    if (iW.size && iW.type) {
                      const mW = iW.arraySize ?? 0;
                      if (WW.ubo.addUniform(iW.name, iW.size, mW), OW) {
                        let WW;
                        switch (iW.type) {
                          case "mat4":
                            WW = "mat4x4f";
                            break;
                          case "float":
                            WW = "f32";
                            break;
                          default:
                            WW = `${iW.type}f`
                        }
                        this._uboDeclaration += mW > 0 ? `uniform ${iW.name}: array<${WW}, ${mW}>;\n` : `uniform ${iW.name}: ${WW};\n`
                      } else this._uboDeclaration += `${iW.type} ${iW.name}${mW>0?`[${mW}]`:""};\n`
                    }
                    this._uniformList.push(iW.name)
                  }
                mW.vertex && (this._vertexDeclaration += mW.vertex + "\n"), mW.fragment && (this._fragmentDeclaration += mW.fragment + "\n"), mW.externalUniforms && this._uniformList.push(...mW.externalUniforms)
              }
              iW.getSamplers(this._samplerList), iW.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(WW, iW) {
        if (iW)
          for (const OW in iW) this._codeInjectionPoints[WW] || (this._codeInjectionPoints[WW] = {}), this._codeInjectionPoints[WW][OW] = !0
      }
      _injectCustomCode(WW, iW) {
        return (OW, mW) => {
          iW && (mW = iW(OW, mW)), this._uboDeclaration && (mW = mW.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (mW = mW.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (mW = mW.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const EW = this._codeInjectionPoints?.[OW];
          if (!EW) return mW;
          let cW = null;
          for (let iW in EW) {
            let EW = "";
            for (const mW of this._activePlugins) {
              const LW = this._material.shaderLanguage;
              let wW = mW.getCustomCode(OW, LW)?.[iW];
              wW && (mW.resolveIncludes && (null === cW && (cW = {
                defines: [],
                indexParameters: WW.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: PW.c.GetShadersRepository(LW),
                includesShadersStore: PW.c.GetIncludesShadersStore(LW),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                nmW: this._engine.nmW,
                processCodeAfterIncludes: void 0
              }), cW.isFragment = "fragment" === OW, (0, NW.e)(wW, cW, (WW => wW = WW))), EW += wW + "\n")
            }
            if (EW.length > 0)
              if ("!" === iW.charAt(0)) {
                iW = iW.substring(1);
                let WW = "g";
                if ("!" === iW.charAt(0)) WW = "", iW = iW.substring(1);
                else {
                  const OW = LW.exec(iW);
                  OW && OW.length >= 2 && (WW = OW[1], iW = iW.substring(WW.length + 1))
                }
                WW.indexOf("g") < 0 && (WW += "g");
                const OW = new RegExp(iW, WW);
                let NW = OW.exec(mW);
                for (; null !== NW;) {
                  const {
                    index: WW
                  } = NW, iW = wW(EW, NW);
                  mW = mW.substring(0, WW) + iW + mW.substring(WW + NW[0].length), OW.lastIndex = WW + iW.length, NW = OW.exec(mW)
                }
              } else {
                const WW = "#define " + iW;
                mW = mW.replace(WW, "\n" + EW + "\n" + WW)
              }
          }
          return mW
        }
      }
    }
    cW._MaterialPluginClassToMainDefine = {}, cW._MaterialPluginCounter = 0;

    function wW(WW, iW) {
      return WW.replace(/\$(\d+)/g, ((WW, OW) => {
        const mW = Number(OW);
        return mW < iW.length ? iW[mW] : ""
      }))
    }
    var tW = OW(41538),
      ZW = OW(38299);
    let xW = (() => {
        var WW;
        let iW, OW, NW, PW, LW = [],
          wW = [],
          ZW = [],
          xW = [],
          lW = [],
          AW = [],
          bW = [],
          jW = [];
        return WW = class {
          isCompatible(WW) {
            return 0 === WW
          }
          _enable(WW) {
            WW && this._pluginManager._activatePlugin(this)
          }
          constructor(WW, iW, OW, EW) {
            let NW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              PW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              tW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, mW.g)(this, LW, void 0), this.priority = ((0, mW.g)(this, wW), (0, mW.g)(this, ZW, 500)), this.resolveIncludes = ((0, mW.g)(this, xW), (0, mW.g)(this, lW, !1)), this.registerForExtraEvents = ((0, mW.g)(this, AW), (0, mW.g)(this, bW, !1)), this.doNotSerialize = ((0, mW.g)(this, jW), !1), this._material = WW, this.name = iW, this.priority = OW, this.resolveIncludes = tW, WW.pluginManager || (WW.pluginManager = new cW(WW), WW.jD.add((() => {
              WW.pluginManager = void 0
            }))), this._pluginDefineNames = EW, this._pluginManager = WW.pluginManager, NW && this._pluginManager._addPlugin(this), PW && this._enable(!0), this.markAllDefinesAsDirty = WW._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(WW, iW, OW, mW) {
            return !0
          }
          hardBindForSubMesh(WW, iW, OW, mW) {}
          bindForSubMesh(WW, iW, OW, mW) {}
          dispose(WW) {}
          getCustomCode(WW) {
            return null
          }
          collectDefines(WW) {
            if (this._pluginDefineNames)
              for (const iW of Object.keys(this._pluginDefineNames)) {
                if ("_" === iW[0]) continue;
                const OW = typeof this._pluginDefineNames[iW];
                WW[iW] = {
                  type: "number" === OW ? "number" : "string" === OW ? "string" : "boolean" === OW ? "boolean" : "object",
                  default: this._pluginDefineNames[iW]
                }
              }
          }
          prepareDefinesBeforeAttributes(WW, iW, OW) {}
          prepareDefines(WW, iW, OW) {}
          hasTexture(WW) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(WW) {}
          getActiveTextures(WW) {}
          getAnimatables(WW) {}
          addFallbacks(WW, iW, OW) {
            return OW
          }
          getSamplers(WW) {}
          getAttributes(WW, iW, OW) {}
          getUniformBuffersNames(WW) {}
          getUniforms() {
            return {}
          }
          copyTo(WW) {
            tW.d.Clone((() => WW), this)
          }
          serialize() {
            return tW.d.Serialize(this)
          }
          parse(WW, iW, OW) {
            tW.d.Parse((() => this), WW, iW, OW)
          }
        }, (() => {
          const cW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          iW = [(0, EW.M)()], OW = [(0, EW.M)()], NW = [(0, EW.M)()], PW = [(0, EW.M)()], (0, mW.e)(null, null, iW, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: WW => "name" in WW,
              get: WW => WW.name,
              set: (WW, iW) => {
                WW.name = iW
              }
            },
            metadata: cW
          }, LW, wW), (0, mW.e)(null, null, OW, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: WW => "priority" in WW,
              get: WW => WW.priority,
              set: (WW, iW) => {
                WW.priority = iW
              }
            },
            metadata: cW
          }, ZW, xW), (0, mW.e)(null, null, NW, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: WW => "resolveIncludes" in WW,
              get: WW => WW.resolveIncludes,
              set: (WW, iW) => {
                WW.resolveIncludes = iW
              }
            },
            metadata: cW
          }, lW, AW), (0, mW.e)(null, null, PW, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: WW => "registerForExtraEvents" in WW,
              get: WW => WW.registerForExtraEvents,
              set: (WW, iW) => {
                WW.registerForExtraEvents = iW
              }
            },
            metadata: cW
          }, bW, jW), cW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cW
          })
        })(), WW
      })(),
      lW = !1;

    function AW() {
      lW || (lW = !0, (0, ZW.h)("BABYLON.MaterialPluginBase", xW))
    }
  },
  41792: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    class mW {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(WW) {
        WW.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(WW) {}
      bindForSubMesh(WW, iW, OW, mW, EW) {
        if (iW.prePassRenderer && iW.prePassRenderer.enabled && iW.prePassRenderer.currentRTisSceneRT && (-1 !== iW.prePassRenderer.getIndex(2) || -1 !== iW.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[OW.uniqueId] || (this.previousWorldMatrices[OW.uniqueId] = mW.clone()), this.previousViewProjection || (this.previousViewProjection = iW.getTransformMatrix().clone(), this.currentViewProjection = iW.getTransformMatrix().clone());
          const EW = iW.VA();
          this.currentViewProjection.updateFlag !== iW.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = EW.frameId, this.previousViewProjection.HJ(this.currentViewProjection), this.currentViewProjection.HJ(iW.getTransformMatrix())) : this._lastUpdateFrameId !== EW.frameId && (this._lastUpdateFrameId = EW.frameId, this.previousViewProjection.HJ(this.currentViewProjection)), WW.setMatrix("previousWorld", this.previousWorldMatrices[OW.uniqueId]), WW.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[OW.uniqueId] = mW.clone()
        }
      }
    }
  },
  41904: (WW, iW, OW) => {
    function mW(WW) {
      return class extends WW {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    OW.d(iW, {
      b: () => mW
    })
  },
  41782: (WW, iW, OW) => {
    OW.d(iW, {
      StandardMaterial: () => mW.f
    });
    var mW = OW(41784);
    (0, mW.b)()
  },
  41784: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => gW,
      f: () => eW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(41628),
      PW = OW(41612),
      LW = OW(38372),
      cW = OW(41660),
      wW = OW(41792),
      tW = OW(41795),
      ZW = OW(41634),
      xW = OW(41805),
      lW = OW(41801),
      AW = OW(41861),
      bW = OW(41857),
      jW = OW(41867),
      UW = OW(41873),
      kW = OW(41853),
      sW = OW(41886),
      MW = OW(41845),
      KW = OW(41538),
      SW = OW(41889),
      YW = OW(41892),
      yW = OW(41895),
      TW = OW(41904),
      JW = OW(41912),
      hW = OW(38299),
      HW = OW(41415);
    const nW = {
      effect: null,
      subMesh: null
    };
    class uW extends((0, TW.b)((0, yW.d)(lW.c))) {}
    class oW extends((0, tW.f)(uW)) {
      constructor(WW) {
        super(WW), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class dW extends((0, JW.b)(AW.e)) {}
    let eW = (() => {
        var WW, iW, tW, lW, yW, TW, JW, hW, HW, uW, eW, vW, gW, DW, VW, pW, fW, CW, XW, BW, qW, RW, GW, IW, aW, rW, zW, FW, QW, Wi, ii, Oi, mi;
        let Ei, Ni, Pi, Li, ci, wi, ti, Zi, xi, li, Ai, bi, ji, Ui, ki, si, Mi, Ki, Si, Yi, yi, Ti, Ji, Hi, ni, ui, oi, di, ei, vi, gi, Di, Vi, fi, Ci, Xi, Bi, qi, Ri, Gi, Ii, ai, ri, zi, Fi, Qi, WO, iO, OO, mO, EO, NO, PO, LO, cO, wO, tO, ZO, xO, lO, AO, bO, jO, UO, kO, sO, MO, KO, SO, YO, yO, TO, JO, hO = dW,
          HO = [],
          nO = [],
          uO = [],
          oO = [],
          dO = [],
          eO = [],
          vO = [],
          gO = [],
          DO = [],
          VO = [],
          pO = [],
          fO = [],
          CO = [],
          XO = [],
          BO = [],
          qO = [],
          RO = [],
          GO = [],
          IO = [],
          aO = [],
          rO = [],
          zO = [],
          FO = [],
          QO = [],
          Wm = [],
          im = [],
          Om = [],
          mm = [],
          Em = [],
          Nm = [],
          Pm = [],
          Lm = [],
          cm = [],
          wm = [],
          tm = [],
          Zm = [],
          xm = [],
          lm = [],
          Am = [],
          bm = [],
          jm = [],
          Um = [],
          km = [],
          sm = [],
          Mm = [],
          Km = [],
          Sm = [],
          Ym = [],
          ym = [],
          Tm = [],
          Jm = [],
          hm = [],
          Hm = [],
          nm = [],
          um = [],
          om = [],
          dm = [],
          em = [],
          gm = [],
          Dm = [],
          Vm = [],
          pm = [],
          fm = [],
          Cm = [],
          Xm = [],
          Bm = [],
          qm = [],
          Rm = [],
          Gm = [],
          Im = [],
          am = [],
          rm = [],
          zm = [],
          Fm = [],
          Qm = [],
          WE = [],
          iE = [],
          OE = [],
          mE = [],
          EE = [],
          NE = [],
          PE = [],
          LE = [],
          cE = [],
          wE = [],
          tE = [],
          ZE = [],
          xE = [],
          lE = [],
          AE = [],
          bE = [],
          jE = [],
          UE = [],
          kE = [],
          sE = [],
          ME = [],
          KE = [],
          SE = [],
          YE = [],
          yE = [],
          TE = [],
          JE = [],
          hE = [],
          HE = [],
          nE = [],
          uE = [],
          oE = [],
          dE = [],
          eE = [],
          vE = [],
          gE = [],
          DE = [],
          VE = [],
          pE = [],
          fE = [],
          CE = [],
          XE = [],
          BE = [],
          qE = [],
          RE = [],
          GE = [],
          IE = [],
          aE = [],
          rE = [],
          zE = [],
          FE = [],
          QE = [],
          WN = [],
          iN = [],
          ON = [],
          mN = [],
          EN = [],
          NN = [],
          PN = [],
          LN = [],
          cN = [],
          wN = [],
          tN = [],
          ZN = [],
          xN = [],
          lN = [],
          AN = [],
          bN = [],
          jN = [],
          UN = [],
          kN = [];
        return WW = class extends hO {
          get diffuseTexture() {
            return (0, mW.b)(this, iW, "f")
          }
          set diffuseTexture(WW) {
            (0, mW.d)(this, iW, WW, "f")
          }
          get ambientTexture() {
            return (0, mW.b)(this, tW, "f")
          }
          set ambientTexture(WW) {
            (0, mW.d)(this, tW, WW, "f")
          }
          get opacityTexture() {
            return (0, mW.b)(this, lW, "f")
          }
          set opacityTexture(WW) {
            (0, mW.d)(this, lW, WW, "f")
          }
          get reflectionTexture() {
            return (0, mW.b)(this, yW, "f")
          }
          set reflectionTexture(WW) {
            (0, mW.d)(this, yW, WW, "f")
          }
          get emissiveTexture() {
            return (0, mW.b)(this, TW, "f")
          }
          set emissiveTexture(WW) {
            (0, mW.d)(this, TW, WW, "f")
          }
          get specularTexture() {
            return (0, mW.b)(this, JW, "f")
          }
          set specularTexture(WW) {
            (0, mW.d)(this, JW, WW, "f")
          }
          get bumpTexture() {
            return (0, mW.b)(this, hW, "f")
          }
          set bumpTexture(WW) {
            (0, mW.d)(this, hW, WW, "f")
          }
          get lightmapTexture() {
            return (0, mW.b)(this, HW, "f")
          }
          set lightmapTexture(WW) {
            (0, mW.d)(this, HW, WW, "f")
          }
          get refractionTexture() {
            return (0, mW.b)(this, uW, "f")
          }
          set refractionTexture(WW) {
            (0, mW.d)(this, uW, WW, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, mW.b)(this, eW, "f")
          }
          set useAlphaFromDiffuseTexture(WW) {
            (0, mW.d)(this, eW, WW, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, mW.b)(this, vW, "f")
          }
          set useEmissiveAsIllumination(WW) {
            (0, mW.d)(this, vW, WW, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, mW.b)(this, gW, "f")
          }
          set linkEmissiveWithDiffuse(WW) {
            (0, mW.d)(this, gW, WW, "f")
          }
          get useSpecularOverAlpha() {
            return (0, mW.b)(this, DW, "f")
          }
          set useSpecularOverAlpha(WW) {
            (0, mW.d)(this, DW, WW, "f")
          }
          get useReflectionOverAlpha() {
            return (0, mW.b)(this, VW, "f")
          }
          set useReflectionOverAlpha(WW) {
            (0, mW.d)(this, VW, WW, "f")
          }
          get disableLighting() {
            return (0, mW.b)(this, pW, "f")
          }
          set disableLighting(WW) {
            (0, mW.d)(this, pW, WW, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, mW.b)(this, fW, "f")
          }
          set useObjectSpaceNormalMap(WW) {
            (0, mW.d)(this, fW, WW, "f")
          }
          get useParallax() {
            return (0, mW.b)(this, CW, "f")
          }
          set useParallax(WW) {
            (0, mW.d)(this, CW, WW, "f")
          }
          get useParallaxOcclusion() {
            return (0, mW.b)(this, XW, "f")
          }
          set useParallaxOcclusion(WW) {
            (0, mW.d)(this, XW, WW, "f")
          }
          get roughness() {
            return (0, mW.b)(this, BW, "f")
          }
          set roughness(WW) {
            (0, mW.d)(this, BW, WW, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, mW.b)(this, qW, "f")
          }
          set useLightmapAsShadowmap(WW) {
            (0, mW.d)(this, qW, WW, "f")
          }
          get diffuseFresnelParameters() {
            return (0, mW.b)(this, RW, "f")
          }
          set diffuseFresnelParameters(WW) {
            (0, mW.d)(this, RW, WW, "f")
          }
          get opacityFresnelParameters() {
            return (0, mW.b)(this, GW, "f")
          }
          set opacityFresnelParameters(WW) {
            (0, mW.d)(this, GW, WW, "f")
          }
          get reflectionFresnelParameters() {
            return (0, mW.b)(this, IW, "f")
          }
          set reflectionFresnelParameters(WW) {
            (0, mW.d)(this, IW, WW, "f")
          }
          get refractionFresnelParameters() {
            return (0, mW.b)(this, aW, "f")
          }
          set refractionFresnelParameters(WW) {
            (0, mW.d)(this, aW, WW, "f")
          }
          get emissiveFresnelParameters() {
            return (0, mW.b)(this, rW, "f")
          }
          set emissiveFresnelParameters(WW) {
            (0, mW.d)(this, rW, WW, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, mW.b)(this, zW, "f")
          }
          set useReflectionFresnelFromSpecular(WW) {
            (0, mW.d)(this, zW, WW, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, mW.b)(this, FW, "f")
          }
          set useGlossinessFromSpecularMapAlpha(WW) {
            (0, mW.d)(this, FW, WW, "f")
          }
          get maxSimultaneousLights() {
            return (0, mW.b)(this, QW, "f")
          }
          set maxSimultaneousLights(WW) {
            (0, mW.d)(this, QW, WW, "f")
          }
          get invertNormalMapX() {
            return (0, mW.b)(this, Wi, "f")
          }
          set invertNormalMapX(WW) {
            (0, mW.d)(this, Wi, WW, "f")
          }
          get invertNormalMapY() {
            return (0, mW.b)(this, ii, "f")
          }
          set invertNormalMapY(WW) {
            (0, mW.d)(this, ii, WW, "f")
          }
          get twoSidedLighting() {
            return (0, mW.b)(this, Oi, "f")
          }
          set twoSidedLighting(WW) {
            (0, mW.d)(this, Oi, WW, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, mW.b)(this, mi, "f")
          }
          set applyDecalMapAfterDetailMap(WW) {
            (0, mW.d)(this, mi, WW, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(OW, EW) {
            super(OW, EW, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || WW.ForceGLSL), this._diffuseTexture = (0, mW.g)(this, HO, null), iW.set(this, ((0, mW.g)(this, nO), (0, mW.g)(this, uO, void 0))), this._ambientTexture = ((0, mW.g)(this, oO), (0, mW.g)(this, dO, null)), tW.set(this, ((0, mW.g)(this, eO), (0, mW.g)(this, vO, void 0))), this._opacityTexture = ((0, mW.g)(this, gO), (0, mW.g)(this, DO, null)), lW.set(this, ((0, mW.g)(this, VO), (0, mW.g)(this, pO, void 0))), this._reflectionTexture = ((0, mW.g)(this, fO), (0, mW.g)(this, CO, null)), yW.set(this, ((0, mW.g)(this, XO), (0, mW.g)(this, BO, void 0))), this._emissiveTexture = ((0, mW.g)(this, qO), (0, mW.g)(this, RO, null)), TW.set(this, ((0, mW.g)(this, GO), (0, mW.g)(this, IO, void 0))), this._specularTexture = ((0, mW.g)(this, aO), (0, mW.g)(this, rO, null)), JW.set(this, ((0, mW.g)(this, zO), (0, mW.g)(this, FO, void 0))), this._bumpTexture = ((0, mW.g)(this, QO), (0, mW.g)(this, Wm, null)), hW.set(this, ((0, mW.g)(this, im), (0, mW.g)(this, Om, void 0))), this._lightmapTexture = ((0, mW.g)(this, mm), (0, mW.g)(this, Em, null)), HW.set(this, ((0, mW.g)(this, Nm), (0, mW.g)(this, Pm, void 0))), this._refractionTexture = ((0, mW.g)(this, Lm), (0, mW.g)(this, cm, null)), uW.set(this, ((0, mW.g)(this, wm), (0, mW.g)(this, tm, void 0))), this.ambientColor = ((0, mW.g)(this, Zm), (0, mW.g)(this, xm, new LW.b(0, 0, 0))), this.diffuseColor = ((0, mW.g)(this, lm), (0, mW.g)(this, Am, new LW.b(1, 1, 1))), this.specularColor = ((0, mW.g)(this, bm), (0, mW.g)(this, jm, new LW.b(1, 1, 1))), this.emissiveColor = ((0, mW.g)(this, Um), (0, mW.g)(this, km, new LW.b(0, 0, 0))), this.specularPower = ((0, mW.g)(this, sm), (0, mW.g)(this, Mm, 64)), this._useAlphaFromDiffuseTexture = ((0, mW.g)(this, Km), (0, mW.g)(this, Sm, !1)), eW.set(this, ((0, mW.g)(this, Ym), (0, mW.g)(this, ym, void 0))), this._useEmissiveAsIllumination = ((0, mW.g)(this, Tm), (0, mW.g)(this, Jm, !1)), vW.set(this, ((0, mW.g)(this, hm), (0, mW.g)(this, Hm, void 0))), this._linkEmissiveWithDiffuse = ((0, mW.g)(this, nm), (0, mW.g)(this, um, !1)), gW.set(this, ((0, mW.g)(this, om), (0, mW.g)(this, dm, void 0))), this._useSpecularOverAlpha = ((0, mW.g)(this, em), (0, mW.g)(this, gm, !1)), DW.set(this, ((0, mW.g)(this, Dm), (0, mW.g)(this, Vm, void 0))), this._useReflectionOverAlpha = ((0, mW.g)(this, pm), (0, mW.g)(this, fm, !1)), VW.set(this, ((0, mW.g)(this, Cm), (0, mW.g)(this, Xm, void 0))), this._disableLighting = ((0, mW.g)(this, Bm), (0, mW.g)(this, qm, !1)), pW.set(this, ((0, mW.g)(this, Rm), (0, mW.g)(this, Gm, void 0))), this._useObjectSpaceNormalMap = ((0, mW.g)(this, Im), (0, mW.g)(this, am, !1)), fW.set(this, ((0, mW.g)(this, rm), (0, mW.g)(this, zm, void 0))), this._useParallax = ((0, mW.g)(this, Fm), (0, mW.g)(this, Qm, !1)), CW.set(this, ((0, mW.g)(this, WE), (0, mW.g)(this, iE, void 0))), this._useParallaxOcclusion = ((0, mW.g)(this, OE), (0, mW.g)(this, mE, !1)), XW.set(this, ((0, mW.g)(this, EE), (0, mW.g)(this, NE, void 0))), this.parallaxScaleBias = ((0, mW.g)(this, PE), (0, mW.g)(this, LE, .05)), this._roughness = ((0, mW.g)(this, cE), (0, mW.g)(this, wE, 0)), BW.set(this, ((0, mW.g)(this, tE), (0, mW.g)(this, ZE, void 0))), this.indexOfRefraction = ((0, mW.g)(this, xE), (0, mW.g)(this, lE, .98)), this.invertRefractionY = ((0, mW.g)(this, AE), (0, mW.g)(this, bE, !0)), this.alphaCutOff = ((0, mW.g)(this, jE), (0, mW.g)(this, UE, .4)), this._useLightmapAsShadowmap = ((0, mW.g)(this, kE), (0, mW.g)(this, sE, !1)), qW.set(this, ((0, mW.g)(this, ME), (0, mW.g)(this, KE, void 0))), this._diffuseFresnelParameters = ((0, mW.g)(this, SE), (0, mW.g)(this, YE, void 0)), RW.set(this, ((0, mW.g)(this, yE), (0, mW.g)(this, TE, void 0))), this._opacityFresnelParameters = ((0, mW.g)(this, JE), (0, mW.g)(this, hE, void 0)), GW.set(this, ((0, mW.g)(this, HE), (0, mW.g)(this, nE, void 0))), this._reflectionFresnelParameters = ((0, mW.g)(this, uE), (0, mW.g)(this, oE, void 0)), IW.set(this, ((0, mW.g)(this, dE), (0, mW.g)(this, eE, void 0))), this._refractionFresnelParameters = ((0, mW.g)(this, vE), (0, mW.g)(this, gE, void 0)), aW.set(this, ((0, mW.g)(this, DE), (0, mW.g)(this, VE, void 0))), this._emissiveFresnelParameters = ((0, mW.g)(this, pE), (0, mW.g)(this, fE, void 0)), rW.set(this, ((0, mW.g)(this, CE), (0, mW.g)(this, XE, void 0))), this._useReflectionFresnelFromSpecular = ((0, mW.g)(this, BE), (0, mW.g)(this, qE, !1)), zW.set(this, ((0, mW.g)(this, RE), (0, mW.g)(this, GE, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, mW.g)(this, IE), (0, mW.g)(this, aE, !1)), FW.set(this, ((0, mW.g)(this, rE), (0, mW.g)(this, zE, void 0))), this._maxSimultaneousLights = ((0, mW.g)(this, FE), (0, mW.g)(this, QE, 4)), QW.set(this, ((0, mW.g)(this, WN), (0, mW.g)(this, iN, void 0))), this._invertNormalMapX = ((0, mW.g)(this, ON), (0, mW.g)(this, mN, !1)), Wi.set(this, ((0, mW.g)(this, EN), (0, mW.g)(this, NN, void 0))), this._invertNormalMapY = ((0, mW.g)(this, PN), (0, mW.g)(this, LN, !1)), ii.set(this, ((0, mW.g)(this, cN), (0, mW.g)(this, wN, void 0))), this._twoSidedLighting = ((0, mW.g)(this, tN), (0, mW.g)(this, ZN, !1)), Oi.set(this, ((0, mW.g)(this, xN), (0, mW.g)(this, lN, void 0))), this._applyDecalMapAfterDetailMap = ((0, mW.g)(this, AN), (0, mW.g)(this, bN, !1)), mi.set(this, ((0, mW.g)(this, jN), (0, mW.g)(this, UN, void 0))), this._vertexPullingMetadata = ((0, mW.g)(this, kN), null), this._renderTargets = new NW.g(16), this._globalAmbientColor = new LW.b(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new UW.c(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new wW.e, this.getRenderTargetTextures = () => (this._renderTargets.reset(), WW.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), WW.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(WW.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(WW.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === xW.d.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== xW.d.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(iW, OW) {
            let mW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const EW = OW._drawWrapper;
            if (EW.effect && this.isFrozen && EW._wasPreviouslyReady && EW._wasPreviouslyUsingInstances === mW) return !0;
            OW.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), OW.materialDefines = new oW(this._eventInfo.defineNames));
            const NW = this.bD(),
              PW = OW.materialDefines;
            if (this._isReadyForSubMesh(OW)) return !0;
            const LW = NW.VA();
            if (PW._needNormals = (0, MW.U)(NW, iW, PW, !0, this._maxSimultaneousLights, this._disableLighting), !(0, MW.c)(NW, iW, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, MW.$)(NW, PW);
            const tW = this.needAlphaBlendingForMesh(iW) && this.bD().useOrderIndependentTransparency;
            if ((0, MW.hb)(NW, PW, this.canRenderToMRT && !tW), (0, MW.db)(NW, PW, tW), YW.d.PrepareDefines(LW.currentRenderPassId, iW, PW), PW._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, PW._needUVs = !1;
              for (let WW = 1; WW <= 6; ++WW) PW["MAINUV" + WW] = !1;
              if (NW.texturesEnabled) {
                if (PW.DIFFUSEDIRECTUV = 0, PW.BUMPDIRECTUV = 0, PW.AMBIENTDIRECTUV = 0, PW.OPACITYDIRECTUV = 0, PW.EMISSIVEDIRECTUV = 0, PW.SPECULARDIRECTUV = 0, PW.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && WW.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, MW.W)(this._diffuseTexture, PW, "DIFFUSE")
                } else PW.DIFFUSE = !1;
                if (this._ambientTexture && WW.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, MW.W)(this._ambientTexture, PW, "AMBIENT")
                } else PW.AMBIENT = !1;
                if (this._opacityTexture && WW.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, MW.W)(this._opacityTexture, PW, "OPACITY"), PW.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else PW.OPACITY = !1;
                if (this._reflectionTexture && WW.ReflectionTextureEnabled ? (PW.ROUGHNESS = this._roughness > 0, PW.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (PW.ROUGHNESS = !1, PW.REFLECTIONOVERALPHA = !1), !(0, MW.R)(NW, this._reflectionTexture, PW)) return !1;
                if (this._emissiveTexture && WW.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, MW.W)(this._emissiveTexture, PW, "EMISSIVE")
                } else PW.EMISSIVE = !1;
                if (this._lightmapTexture && WW.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, MW.W)(this._lightmapTexture, PW, "LIGHTMAP"), PW.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, PW.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else PW.LIGHTMAP = !1;
                if (this._specularTexture && WW.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, MW.W)(this._specularTexture, PW, "SPECULAR"), PW.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else PW.SPECULAR = !1;
                if (NW.VA().getCaps().standardDerivatives && this._bumpTexture && WW.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, MW.W)(this._bumpTexture, PW, "BUMP"), PW.PARALLAX = this._useParallax, PW.PARALLAX_RHS = NW.useRightHandedSystem, PW.PARALLAXOCCLUSION = this._useParallaxOcclusion, PW.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else PW.BUMP = !1, PW.PARALLAX = !1, PW.PARALLAX_RHS = !1, PW.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && WW.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  PW._needUVs = !0, PW.REFRACTION = !0, PW.REFRACTIONMAP_3D = this._refractionTexture.isCube, PW.RGBDREFRACTION = this._refractionTexture.isRGBD, PW.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else PW.REFRACTION = !1;
                PW.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else PW.DIFFUSE = !1, PW.AMBIENT = !1, PW.OPACITY = !1, PW.REFLECTION = !1, PW.EMISSIVE = !1, PW.LIGHTMAP = !1, PW.BUMP = !1, PW.REFRACTION = !1;
              PW.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), PW.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, PW.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, PW.SPECULAROVERALPHA = this._useSpecularOverAlpha, PW.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, PW.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, PW.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(iW), PW.TEXTURE_REPETITION_MODE = LW.version > 1 || LW.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = PW, this._eventInfo.subMesh = OW, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (PW._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(PW), PW.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, PW.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (PW._areFresnelDirty && (WW.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (PW.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, PW.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, PW.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, PW.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, PW.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, PW.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, PW._needNormals = !0, PW.FRESNEL = !0) : PW.FRESNEL = !1), PW.AREALIGHTUSED || PW.CLUSTLIGHT_BATCH)
              for (let WW = 0; WW < iW.lightSources.length; WW++)
                if (!iW.lightSources[WW]._isReady()) return !1;
            (0, MW.Z)(iW, NW, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(iW), PW, this._applyDecalMapAfterDetailMap, this._useVertexPulling, OW.getRenderingMesh(), this._isVertexOutputInvariant), (0, MW.O)(NW, LW, this, PW, mW, null, OW.getRenderingMesh().hasThinInstances), this._eventInfo.defines = PW, this._eventInfo.mesh = iW, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, MW.M)(iW, PW, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let xW = !1;
            if (PW.isDirty) {
              const mW = PW._areLightsDisposed;
              PW.markAsProcessed();
              const EW = new jW.e;
              PW.REFLECTION && EW.addFallback(0, "REFLECTION"), PW.SPECULAR && EW.addFallback(0, "SPECULAR"), PW.BUMP && EW.addFallback(0, "BUMP"), PW.PARALLAX && EW.addFallback(1, "PARALLAX"), PW.PARALLAX_RHS && EW.addFallback(1, "PARALLAX_RHS"), PW.PARALLAXOCCLUSION && EW.addFallback(0, "PARALLAXOCCLUSION"), PW.SPECULAROVERALPHA && EW.addFallback(0, "SPECULAROVERALPHA"), PW.FOG && EW.addFallback(1, "FOG"), PW.POINTSIZE && EW.addFallback(0, "POINTSIZE"), PW.LOGARITHMICDEPTH && EW.addFallback(0, "LOGARITHMICDEPTH"), (0, MW.w)(PW, EW, this._maxSimultaneousLights), PW.SPECULARTERM && EW.addFallback(0, "SPECULARTERM"), PW.DIFFUSEFRESNEL && EW.addFallback(1, "DIFFUSEFRESNEL"), PW.OPACITYFRESNEL && EW.addFallback(2, "OPACITYFRESNEL"), PW.REFLECTIONFRESNEL && EW.addFallback(3, "REFLECTIONFRESNEL"), PW.EMISSIVEFRESNEL && EW.addFallback(4, "EMISSIVEFRESNEL"), PW.FRESNEL && EW.addFallback(4, "FRESNEL"), PW.MULTIVIEW && EW.addFallback(0, "MULTIVIEW");
              const tW = [cW.k.PositionKind];
              PW.NORMAL && tW.push(cW.k.NormalKind), PW.TANGENT && tW.push(cW.k.TangentKind);
              for (let WW = 1; WW <= 6; ++WW) PW["UV" + WW] && tW.push(`uv${1===WW?"":WW}`);
              PW.VERTEXCOLOR && tW.push(cW.k.ColorKind), (0, MW.B)(tW, iW, PW, EW), (0, MW.F)(tW, PW), (0, MW.I)(tW, iW, PW), (0, MW.z)(tW, iW, PW);
              let lW = "default";
              const AW = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                bW = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, MW.jb)(AW, bW, !1);
              const UW = ["Material", "Scene", "Mesh"],
                KW = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: PW.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = EW, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = PW, this._eventInfo.uniforms = AW, this._eventInfo.attributes = tW, this._eventInfo.samplers = bW, this._eventInfo.uniformBuffersNames = UW, this._eventInfo.customCode = void 0, this._eventInfo.mesh = iW, this._eventInfo.indexParameters = KW, this._callbackPluginEventGeneric(128, this._eventInfo), YW.d.AddUniformsAndSamplers(AW, bW), wW.e.AddUniforms(AW), wW.e.AddSamplers(bW), ZW.e && (ZW.e.PrepareUniforms(AW, PW), ZW.e.PrepareSamplers(bW, PW)), (0, MW.mb)({
                  uniformsNames: AW,
                  uniformBuffersNames: UW,
                  samplers: bW,
                  defines: PW,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, kW.d)(AW), this._useVertexPulling) {
                const WW = OW.getRenderingMesh(),
                  iW = WW?.geometry;
                iW && (this._vertexPullingMetadata = (0, sW.c)(iW), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((WW, iW) => {
                  AW.push(`vp_${iW}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const SW = {};
              this.customShaderNameResolve && (lW = this.customShaderNameResolve(lW, AW, UW, bW, PW, tW, SW));
              const yW = PW.toString(),
                TW = OW.effect,
                JW = NW.VA().createEffect(lW, {
                  attributes: tW,
                  uniformsNames: AW,
                  uniformBuffersNames: UW,
                  samplers: bW,
                  defines: yW,
                  fallbacks: EW,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: KW,
                  processFinalCode: SW.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: PW.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: WW._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, LW);
              if (this._eventInfo.customCode = void 0, JW)
                if (this._onEffectCreatedObservable && (nW.effect = JW, nW.subMesh = OW, this._onEffectCreatedObservable.notifyObservers(nW)), this.allowShaderHotSwapping && TW && !JW.isReady()) {
                  if (PW.markAsUnprocessed(), xW = this.isFrozen, mW) return PW._areLightsDisposed = !0, !1
                } else NW.resetCachedMaterial(), OW.setEffect(JW, PW, this._materialContext)
            }
            return !(!OW.effect || !OW.effect.isReady()) && (PW._renderId = NW.getRenderId(), EW._wasPreviouslyReady = !xW, EW._wasPreviouslyUsingInstances = mW, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const WW = this._uniformBuffer;
            WW.addUniform("diffuseLeftColor", 4), WW.addUniform("diffuseRightColor", 4), WW.addUniform("opacityParts", 4), WW.addUniform("reflectionLeftColor", 4), WW.addUniform("reflectionRightColor", 4), WW.addUniform("refractionLeftColor", 4), WW.addUniform("refractionRightColor", 4), WW.addUniform("emissiveLeftColor", 4), WW.addUniform("emissiveRightColor", 4), WW.addUniform("vDiffuseInfos", 2), WW.addUniform("vAmbientInfos", 2), WW.addUniform("vOpacityInfos", 2), WW.addUniform("vEmissiveInfos", 2), WW.addUniform("vLightmapInfos", 2), WW.addUniform("vSpecularInfos", 2), WW.addUniform("vBumpInfos", 3), WW.addUniform("diffuseMatrix", 16), WW.addUniform("ambientMatrix", 16), WW.addUniform("opacityMatrix", 16), WW.addUniform("emissiveMatrix", 16), WW.addUniform("lightmapMatrix", 16), WW.addUniform("specularMatrix", 16), WW.addUniform("bumpMatrix", 16), WW.addUniform("vTangentSpaceParams", 2), WW.addUniform("pointSize", 1), WW.addUniform("alphaCutOff", 1), WW.addUniform("refractionMatrix", 16), WW.addUniform("vRefractionInfos", 4), WW.addUniform("vRefractionPosition", 3), WW.addUniform("vRefractionSize", 3), WW.addUniform("vSpecularColor", 4), WW.addUniform("vEmissiveColor", 3), WW.addUniform("vDiffuseColor", 4), WW.addUniform("vAmbientColor", 3), WW.addUniform("cameraInfo", 4), WW.addUniform("vTextureRepetitionHexTilingParams", 4), (0, MW.ib)(WW, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(iW, OW, mW) {
            const EW = this.bD(),
              NW = mW.materialDefines;
            if (!NW) return;
            const cW = mW.effect;
            if (!cW) return;
            this._activeEffect = cW, OW.getMeshUniformBuffer().bindToEffect(cW, "Mesh"), OW.transferToEffect(iW), this._uniformBuffer.bindToEffect(cW, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, EW, OW, iW, this.isFrozen), YW.d.Bind(EW.VA().currentRenderPassId, this._activeEffect, OW, iW, this);
            const wW = EW.activeCamera;
            wW ? this._uniformBuffer.updateFloat4("cameraInfo", wW.minZ, wW.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const tW = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", tW[0], tW[1], tW[2], tW[3]), this._eventInfo.subMesh = mW, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), NW.OBJECTSPACE_NORMALMAP && (iW.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const ZW = this._mustRebind(EW, cW, mW, OW.visibility),
              xW = EW.VA()._features.needToAlwaysBindUniformBuffers;
            (0, MW.f)(OW, cW), this._vertexPullingMetadata && (0, sW.b)(cW, this._vertexPullingMetadata);
            const lW = this._uniformBuffer;
            if (ZW) {
              if (this.bindViewProjection(cW), !lW.useUbo || !this.isFrozen || !lW.isSync || mW._drawWrapper._forceRebindOnNextCall) {
                if (WW.FresnelEnabled && NW.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (lW.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), lW.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const WW = LW.j.Color3[0];
                    WW.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), lW.updateColor4("opacityParts", WW, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (lW.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), lW.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (lW.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), lW.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (lW.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), lW.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (NW.ALPHATEST && lW.updateFloat("alphaCutOff", this.alphaCutOff), EW.texturesEnabled && (this._diffuseTexture && WW.DiffuseTextureEnabled && (lW.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, MW.v)(this._diffuseTexture, lW, "diffuse")), this._ambientTexture && WW.AmbientTextureEnabled && (lW.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, MW.v)(this._ambientTexture, lW, "ambient")), this._opacityTexture && WW.OpacityTextureEnabled && (lW.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, MW.v)(this._opacityTexture, lW, "opacity")), (0, MW.h)(EW, NW, lW, LW.b.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && WW.ReflectionTextureEnabled || lW.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && WW.EmissiveTextureEnabled && (lW.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, MW.v)(this._emissiveTexture, lW, "emissive")), this._lightmapTexture && WW.LightmapTextureEnabled && (lW.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, MW.v)(this._lightmapTexture, lW, "lightmap")), this._specularTexture && WW.SpecularTextureEnabled && (lW.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, MW.v)(this._specularTexture, lW, "specular")), this._bumpTexture && EW.VA().getCaps().standardDerivatives && WW.BumpTextureEnabled && (lW.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, MW.v)(this._bumpTexture, lW, "bump"), EW._mirroredCameraPosition ? lW.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : lW.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && WW.RefractionTextureEnabled)) {
                  let WW = 1;
                  if (this._refractionTexture.isCube || (lW.tWW("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (WW = this._refractionTexture.depth)), lW.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, WW, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const WW = this._refractionTexture;
                    lW.updateVector3("vRefractionPosition", WW.boundingBoxPosition), lW.updateVector3("vRefractionSize", WW.boundingBoxSize)
                  }
                }
                this.pointsCloud && lW.updateFloat("pointSize", this.pointSize), lW.updateColor4("vSpecularColor", this.specularColor, this.specularPower), lW.updateColor3("vEmissiveColor", WW.EmissiveTextureEnabled ? this.emissiveColor : LW.b.BlackReadOnly), lW.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), EW.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), lW.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              EW.texturesEnabled && (this._diffuseTexture && WW.DiffuseTextureEnabled && cW.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && WW.AmbientTextureEnabled && cW.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && WW.OpacityTextureEnabled && cW.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && WW.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? cW.setTexture("reflectionCubeSampler", this._reflectionTexture) : cW.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && WW.EmissiveTextureEnabled && cW.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && WW.LightmapTextureEnabled && cW.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && WW.SpecularTextureEnabled && cW.setTexture("specularSampler", this._specularTexture), this._bumpTexture && EW.VA().getCaps().standardDerivatives && WW.BumpTextureEnabled && cW.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && WW.RefractionTextureEnabled && (this._refractionTexture.isCube ? cW.setTexture("refractionCubeSampler", this._refractionTexture) : cW.setTexture("refraction2DSampler", this._refractionTexture))), this.bD().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(OW) && this.bD().depthPeelingRenderer.bind(cW), this._eventInfo.subMesh = mW, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, kW.g)(cW, this, EW), this.bindEyePosition(cW)
            } else xW && (this._needToBindSceneUbo = !0);
            !ZW && this.isFrozen && !xW || !EW.lightsEnabled || this._disableLighting || (0, MW.l)(EW, OW, cW, NW, this._maxSimultaneousLights), !ZW && this.isFrozen || ((EW.fogEnabled && OW.applyFog && EW.fogMode !== PW.i.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || OW.receiveShadows || NW.PREPASS || NW.CLUSTLIGHT_BATCH) && this.bindView(cW), (0, MW.g)(EW, OW, cW), NW.NUM_MORPH_INFLUENCERS && (0, MW.r)(OW, cW), NW.BAKED_VERTEX_ANIMATION_TEXTURE && OW.bakedVertexAnimationManager?.bind(cW, NW.INSTANCES), this.useLogarithmicDepth && (0, MW.p)(NW, cW, EW), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(OW, this._activeEffect, mW), lW.update()
          }
          _canBindRunFollower(iW, OW, mW, EW, NW) {
            const PW = iW.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === WW.prototype.isReadyForSubMesh && this.bindForSubMesh === WW.prototype.bindForSubMesh && this._mustRebind === AW.e.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !OW._features.needToAlwaysBindUniformBuffers && !(PW && PW.enabled && PW.currentRTisSceneRT) && !YW.d._Configurations[OW.currentRenderPassId] && !EW.materialDefines?.OBJECTSPACE_NORMALMAP && !mW.skeleton && !NW._bonesComputationForcedToCPU
          }
          _bindRunFollower(WW, iW, OW, mW) {
            this._activeEffect = mW, iW.getMeshUniformBuffer().bindToEffect(mW, "Mesh"), iW.transferToEffect(WW);
            const EW = this._uniformBuffer;
            EW.bindToEffect(mW, "Material");
            const NW = this._scene.activeCamera;
            NW ? EW.updateFloat4("cameraInfo", NW.minZ, NW.maxZ, 0, 0) : EW.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const PW = this.textureRepetitionHexTilingParams;
            EW.updateFloat4("vTextureRepetitionHexTilingParams", PW[0], PW[1], PW[2], PW[3]), this._afterBind(iW, mW, OW), EW.update()
          }
          getAnimatables() {
            const WW = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && WW.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && WW.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && WW.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && WW.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && WW.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && WW.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && WW.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && WW.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && WW.push(this._refractionTexture), WW
          }
          getActiveTextures() {
            const WW = super.getActiveTextures();
            return this._diffuseTexture && WW.push(this._diffuseTexture), this._ambientTexture && WW.push(this._ambientTexture), this._opacityTexture && WW.push(this._opacityTexture), this._reflectionTexture && WW.push(this._reflectionTexture), this._emissiveTexture && WW.push(this._emissiveTexture), this._specularTexture && WW.push(this._specularTexture), this._bumpTexture && WW.push(this._bumpTexture), this._lightmapTexture && WW.push(this._lightmapTexture), this._refractionTexture && WW.push(this._refractionTexture), WW
          }
          hasTexture(WW) {
            return !!super.hasTexture(WW) || (this._diffuseTexture === WW || (this._ambientTexture === WW || (this._opacityTexture === WW || (this._reflectionTexture === WW || (this._emissiveTexture === WW || (this._specularTexture === WW || (this._bumpTexture === WW || (this._lightmapTexture === WW || this._refractionTexture === WW))))))))
          }
          dispose(WW, iW) {
            iW && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(WW, iW)
          }
          clone(iW) {
            let OW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const EW = KW.d.Clone((() => new WW(iW, this.bD())), this, {
              cloneTexturesOnlyOnce: OW
            });
            return EW.name = iW, EW.id = iW, this.stencil.copyTo(EW.stencil), this._clonePlugins(EW, mW), EW
          }
          static Parse(iW, OW, mW) {
            const EW = KW.d.Parse((() => new WW(iW.name, OW)), iW, OW, mW);
            return iW.stencil && EW.stencil.parse(iW.stencil, OW, mW), xW.d._ParsePlugins(iW, EW, OW, mW), EW
          }
          static get DiffuseTextureEnabled() {
            return bW.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(WW) {
            bW.e.DiffuseTextureEnabled = WW
          }
          static get DetailTextureEnabled() {
            return bW.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(WW) {
            bW.e.DetailTextureEnabled = WW
          }
          static get AmbientTextureEnabled() {
            return bW.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(WW) {
            bW.e.AmbientTextureEnabled = WW
          }
          static get OpacityTextureEnabled() {
            return bW.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(WW) {
            bW.e.OpacityTextureEnabled = WW
          }
          static get ReflectionTextureEnabled() {
            return bW.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(WW) {
            bW.e.ReflectionTextureEnabled = WW
          }
          static get EmissiveTextureEnabled() {
            return bW.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(WW) {
            bW.e.EmissiveTextureEnabled = WW
          }
          static get SpecularTextureEnabled() {
            return bW.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(WW) {
            bW.e.SpecularTextureEnabled = WW
          }
          static get BumpTextureEnabled() {
            return bW.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(WW) {
            bW.e.BumpTextureEnabled = WW
          }
          static get LightmapTextureEnabled() {
            return bW.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(WW) {
            bW.e.LightmapTextureEnabled = WW
          }
          static get RefractionTextureEnabled() {
            return bW.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(WW) {
            bW.e.RefractionTextureEnabled = WW
          }
          static get ColorGradingTextureEnabled() {
            return bW.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(WW) {
            bW.e.ColorGradingTextureEnabled = WW
          }
          static get FresnelEnabled() {
            return bW.e.FresnelEnabled
          }
          static set FresnelEnabled(WW) {
            bW.e.FresnelEnabled = WW
          }
        }, iW = new WeakMap, tW = new WeakMap, lW = new WeakMap, yW = new WeakMap, TW = new WeakMap, JW = new WeakMap, hW = new WeakMap, HW = new WeakMap, uW = new WeakMap, eW = new WeakMap, vW = new WeakMap, gW = new WeakMap, DW = new WeakMap, VW = new WeakMap, pW = new WeakMap, fW = new WeakMap, CW = new WeakMap, XW = new WeakMap, BW = new WeakMap, qW = new WeakMap, RW = new WeakMap, GW = new WeakMap, IW = new WeakMap, aW = new WeakMap, rW = new WeakMap, zW = new WeakMap, FW = new WeakMap, QW = new WeakMap, Wi = new WeakMap, ii = new WeakMap, Oi = new WeakMap, mi = new WeakMap, (() => {
          const iW = "function" === typeof Symbol && Symbol.metadata ? Object.create(hO[Symbol.metadata] ?? null) : void 0;
          Ei = [(0, EW.F)("diffuseTexture")], Ni = [(0, EW.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], Pi = [(0, EW.F)("ambientTexture")], Li = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], ci = [(0, EW.F)("opacityTexture")], wi = [(0, EW.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], ti = [(0, EW.F)("reflectionTexture")], Zi = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], xi = [(0, EW.F)("emissiveTexture")], li = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], Ai = [(0, EW.F)("specularTexture")], bi = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], ji = [(0, EW.F)("bumpTexture")], Ui = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], ki = [(0, EW.F)("lightmapTexture")], si = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], Mi = [(0, EW.F)("refractionTexture")], Ki = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], Si = [(0, EW.n)("ambient")], Yi = [(0, EW.n)("diffuse")], yi = [(0, EW.n)("specular")], Ti = [(0, EW.n)("emissive")], Ji = [(0, EW.M)()], Hi = [(0, EW.M)("useAlphaFromDiffuseTexture")], ni = [() => ({
            init(WW) {
              return void 0 === WW && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = WW), WW
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(WW) {
              this._useAlphaFromDiffuseTexture = WW
            }
          })], ui = [(0, EW.M)("useEmissiveAsIllumination")], oi = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], di = [(0, EW.M)("linkEmissiveWithDiffuse")], ei = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], vi = [(0, EW.M)("useSpecularOverAlpha")], gi = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], Di = [(0, EW.M)("useReflectionOverAlpha")], Vi = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], fi = [(0, EW.M)("disableLighting")], Ci = [(0, EW.h)("_markAllSubMeshesAsLightsDirty")], Xi = [(0, EW.M)("useObjectSpaceNormalMap")], Bi = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], qi = [(0, EW.M)("useParallax")], Ri = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], Gi = [(0, EW.M)("useParallaxOcclusion")], Ii = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], ai = [(0, EW.M)()], ri = [(0, EW.M)("roughness")], zi = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], Fi = [(0, EW.M)()], Qi = [(0, EW.M)()], WO = [(0, EW.M)()], iO = [(0, EW.M)("useLightmapAsShadowmap")], OO = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], mO = [(0, EW.t)("diffuseFresnelParameters")], EO = [(0, EW.h)("_markAllSubMeshesAsFresnelDirty")], NO = [(0, EW.t)("opacityFresnelParameters")], PO = [(0, EW.h)("_markAllSubMeshesAsFresnelAndMiscDirty")], LO = [(0, EW.t)("reflectionFresnelParameters")], cO = [(0, EW.h)("_markAllSubMeshesAsFresnelDirty")], wO = [(0, EW.t)("refractionFresnelParameters")], tO = [(0, EW.h)("_markAllSubMeshesAsFresnelDirty")], ZO = [(0, EW.t)("emissiveFresnelParameters")], xO = [(0, EW.h)("_markAllSubMeshesAsFresnelDirty")], lO = [(0, EW.M)("useReflectionFresnelFromSpecular")], AO = [(0, EW.h)("_markAllSubMeshesAsFresnelDirty")], bO = [(0, EW.M)("useGlossinessFromSpecularMapAlpha")], jO = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], UO = [(0, EW.M)("maxSimultaneousLights")], kO = [(0, EW.h)("_markAllSubMeshesAsLightsDirty")], sO = [(0, EW.M)("invertNormalMapX")], MO = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], KO = [(0, EW.M)("invertNormalMapY")], SO = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], YO = [(0, EW.M)("twoSidedLighting")], yO = [(0, EW.h)("_markAllSubMeshesAsTexturesDirty")], TO = [(0, EW.M)("applyDecalMapAfterDetailMap")], JO = [(0, EW.h)("_markAllSubMeshesAsMiscDirty")], (0, mW.e)(WW, null, Ni, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "diffuseTexture" in WW,
              get: WW => WW.diffuseTexture,
              set: (WW, iW) => {
                WW.diffuseTexture = iW
              }
            },
            metadata: iW
          }, uO, oO), (0, mW.e)(WW, null, Li, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "ambientTexture" in WW,
              get: WW => WW.ambientTexture,
              set: (WW, iW) => {
                WW.ambientTexture = iW
              }
            },
            metadata: iW
          }, vO, gO), (0, mW.e)(WW, null, wi, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "opacityTexture" in WW,
              get: WW => WW.opacityTexture,
              set: (WW, iW) => {
                WW.opacityTexture = iW
              }
            },
            metadata: iW
          }, pO, fO), (0, mW.e)(WW, null, Zi, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "reflectionTexture" in WW,
              get: WW => WW.reflectionTexture,
              set: (WW, iW) => {
                WW.reflectionTexture = iW
              }
            },
            metadata: iW
          }, BO, qO), (0, mW.e)(WW, null, li, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "emissiveTexture" in WW,
              get: WW => WW.emissiveTexture,
              set: (WW, iW) => {
                WW.emissiveTexture = iW
              }
            },
            metadata: iW
          }, IO, aO), (0, mW.e)(WW, null, bi, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularTexture" in WW,
              get: WW => WW.specularTexture,
              set: (WW, iW) => {
                WW.specularTexture = iW
              }
            },
            metadata: iW
          }, FO, QO), (0, mW.e)(WW, null, Ui, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "bumpTexture" in WW,
              get: WW => WW.bumpTexture,
              set: (WW, iW) => {
                WW.bumpTexture = iW
              }
            },
            metadata: iW
          }, Om, mm), (0, mW.e)(WW, null, si, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "lightmapTexture" in WW,
              get: WW => WW.lightmapTexture,
              set: (WW, iW) => {
                WW.lightmapTexture = iW
              }
            },
            metadata: iW
          }, Pm, Lm), (0, mW.e)(WW, null, Ki, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "refractionTexture" in WW,
              get: WW => WW.refractionTexture,
              set: (WW, iW) => {
                WW.refractionTexture = iW
              }
            },
            metadata: iW
          }, tm, Zm), (0, mW.e)(WW, null, ni, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "useAlphaFromDiffuseTexture" in WW,
              get: WW => WW.useAlphaFromDiffuseTexture,
              set: (WW, iW) => {
                WW.useAlphaFromDiffuseTexture = iW
              }
            },
            metadata: iW
          }, ym, Tm), (0, mW.e)(WW, null, oi, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: WW => "useEmissiveAsIllumination" in WW,
              get: WW => WW.useEmissiveAsIllumination,
              set: (WW, iW) => {
                WW.useEmissiveAsIllumination = iW
              }
            },
            metadata: iW
          }, Hm, nm), (0, mW.e)(WW, null, ei, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: WW => "linkEmissiveWithDiffuse" in WW,
              get: WW => WW.linkEmissiveWithDiffuse,
              set: (WW, iW) => {
                WW.linkEmissiveWithDiffuse = iW
              }
            },
            metadata: iW
          }, dm, em), (0, mW.e)(WW, null, gi, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: WW => "useSpecularOverAlpha" in WW,
              get: WW => WW.useSpecularOverAlpha,
              set: (WW, iW) => {
                WW.useSpecularOverAlpha = iW
              }
            },
            metadata: iW
          }, Vm, pm), (0, mW.e)(WW, null, Vi, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: WW => "useReflectionOverAlpha" in WW,
              get: WW => WW.useReflectionOverAlpha,
              set: (WW, iW) => {
                WW.useReflectionOverAlpha = iW
              }
            },
            metadata: iW
          }, Xm, Bm), (0, mW.e)(WW, null, Ci, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: WW => "disableLighting" in WW,
              get: WW => WW.disableLighting,
              set: (WW, iW) => {
                WW.disableLighting = iW
              }
            },
            metadata: iW
          }, Gm, Im), (0, mW.e)(WW, null, Bi, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: WW => "useObjectSpaceNormalMap" in WW,
              get: WW => WW.useObjectSpaceNormalMap,
              set: (WW, iW) => {
                WW.useObjectSpaceNormalMap = iW
              }
            },
            metadata: iW
          }, zm, Fm), (0, mW.e)(WW, null, Ri, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: WW => "useParallax" in WW,
              get: WW => WW.useParallax,
              set: (WW, iW) => {
                WW.useParallax = iW
              }
            },
            metadata: iW
          }, iE, OE), (0, mW.e)(WW, null, Ii, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: WW => "useParallaxOcclusion" in WW,
              get: WW => WW.useParallaxOcclusion,
              set: (WW, iW) => {
                WW.useParallaxOcclusion = iW
              }
            },
            metadata: iW
          }, NE, PE), (0, mW.e)(WW, null, zi, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: WW => "roughness" in WW,
              get: WW => WW.roughness,
              set: (WW, iW) => {
                WW.roughness = iW
              }
            },
            metadata: iW
          }, ZE, xE), (0, mW.e)(WW, null, OO, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: WW => "useLightmapAsShadowmap" in WW,
              get: WW => WW.useLightmapAsShadowmap,
              set: (WW, iW) => {
                WW.useLightmapAsShadowmap = iW
              }
            },
            metadata: iW
          }, KE, SE), (0, mW.e)(WW, null, EO, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "diffuseFresnelParameters" in WW,
              get: WW => WW.diffuseFresnelParameters,
              set: (WW, iW) => {
                WW.diffuseFresnelParameters = iW
              }
            },
            metadata: iW
          }, TE, JE), (0, mW.e)(WW, null, PO, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "opacityFresnelParameters" in WW,
              get: WW => WW.opacityFresnelParameters,
              set: (WW, iW) => {
                WW.opacityFresnelParameters = iW
              }
            },
            metadata: iW
          }, nE, uE), (0, mW.e)(WW, null, cO, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "reflectionFresnelParameters" in WW,
              get: WW => WW.reflectionFresnelParameters,
              set: (WW, iW) => {
                WW.reflectionFresnelParameters = iW
              }
            },
            metadata: iW
          }, eE, vE), (0, mW.e)(WW, null, tO, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "refractionFresnelParameters" in WW,
              get: WW => WW.refractionFresnelParameters,
              set: (WW, iW) => {
                WW.refractionFresnelParameters = iW
              }
            },
            metadata: iW
          }, VE, pE), (0, mW.e)(WW, null, xO, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "emissiveFresnelParameters" in WW,
              get: WW => WW.emissiveFresnelParameters,
              set: (WW, iW) => {
                WW.emissiveFresnelParameters = iW
              }
            },
            metadata: iW
          }, XE, BE), (0, mW.e)(WW, null, AO, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: WW => "useReflectionFresnelFromSpecular" in WW,
              get: WW => WW.useReflectionFresnelFromSpecular,
              set: (WW, iW) => {
                WW.useReflectionFresnelFromSpecular = iW
              }
            },
            metadata: iW
          }, GE, IE), (0, mW.e)(WW, null, jO, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: WW => "useGlossinessFromSpecularMapAlpha" in WW,
              get: WW => WW.useGlossinessFromSpecularMapAlpha,
              set: (WW, iW) => {
                WW.useGlossinessFromSpecularMapAlpha = iW
              }
            },
            metadata: iW
          }, zE, FE), (0, mW.e)(WW, null, kO, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: WW => "maxSimultaneousLights" in WW,
              get: WW => WW.maxSimultaneousLights,
              set: (WW, iW) => {
                WW.maxSimultaneousLights = iW
              }
            },
            metadata: iW
          }, iN, ON), (0, mW.e)(WW, null, MO, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: WW => "invertNormalMapX" in WW,
              get: WW => WW.invertNormalMapX,
              set: (WW, iW) => {
                WW.invertNormalMapX = iW
              }
            },
            metadata: iW
          }, NN, PN), (0, mW.e)(WW, null, SO, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: WW => "invertNormalMapY" in WW,
              get: WW => WW.invertNormalMapY,
              set: (WW, iW) => {
                WW.invertNormalMapY = iW
              }
            },
            metadata: iW
          }, wN, tN), (0, mW.e)(WW, null, yO, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: WW => "twoSidedLighting" in WW,
              get: WW => WW.twoSidedLighting,
              set: (WW, iW) => {
                WW.twoSidedLighting = iW
              }
            },
            metadata: iW
          }, lN, AN), (0, mW.e)(WW, null, JO, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: WW => "applyDecalMapAfterDetailMap" in WW,
              get: WW => WW.applyDecalMapAfterDetailMap,
              set: (WW, iW) => {
                WW.applyDecalMapAfterDetailMap = iW
              }
            },
            metadata: iW
          }, UN, kN), (0, mW.e)(null, null, Ei, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_diffuseTexture" in WW,
              get: WW => WW._diffuseTexture,
              set: (WW, iW) => {
                WW._diffuseTexture = iW
              }
            },
            metadata: iW
          }, HO, nO), (0, mW.e)(null, null, Pi, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_ambientTexture" in WW,
              get: WW => WW._ambientTexture,
              set: (WW, iW) => {
                WW._ambientTexture = iW
              }
            },
            metadata: iW
          }, dO, eO), (0, mW.e)(null, null, ci, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_opacityTexture" in WW,
              get: WW => WW._opacityTexture,
              set: (WW, iW) => {
                WW._opacityTexture = iW
              }
            },
            metadata: iW
          }, DO, VO), (0, mW.e)(null, null, ti, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_reflectionTexture" in WW,
              get: WW => WW._reflectionTexture,
              set: (WW, iW) => {
                WW._reflectionTexture = iW
              }
            },
            metadata: iW
          }, CO, XO), (0, mW.e)(null, null, xi, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_emissiveTexture" in WW,
              get: WW => WW._emissiveTexture,
              set: (WW, iW) => {
                WW._emissiveTexture = iW
              }
            },
            metadata: iW
          }, RO, GO), (0, mW.e)(null, null, Ai, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_specularTexture" in WW,
              get: WW => WW._specularTexture,
              set: (WW, iW) => {
                WW._specularTexture = iW
              }
            },
            metadata: iW
          }, rO, zO), (0, mW.e)(null, null, ji, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_bumpTexture" in WW,
              get: WW => WW._bumpTexture,
              set: (WW, iW) => {
                WW._bumpTexture = iW
              }
            },
            metadata: iW
          }, Wm, im), (0, mW.e)(null, null, ki, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_lightmapTexture" in WW,
              get: WW => WW._lightmapTexture,
              set: (WW, iW) => {
                WW._lightmapTexture = iW
              }
            },
            metadata: iW
          }, Em, Nm), (0, mW.e)(null, null, Mi, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_refractionTexture" in WW,
              get: WW => WW._refractionTexture,
              set: (WW, iW) => {
                WW._refractionTexture = iW
              }
            },
            metadata: iW
          }, cm, wm), (0, mW.e)(null, null, Si, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "ambientColor" in WW,
              get: WW => WW.ambientColor,
              set: (WW, iW) => {
                WW.ambientColor = iW
              }
            },
            metadata: iW
          }, xm, lm), (0, mW.e)(null, null, Yi, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "diffuseColor" in WW,
              get: WW => WW.diffuseColor,
              set: (WW, iW) => {
                WW.diffuseColor = iW
              }
            },
            metadata: iW
          }, Am, bm), (0, mW.e)(null, null, yi, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularColor" in WW,
              get: WW => WW.specularColor,
              set: (WW, iW) => {
                WW.specularColor = iW
              }
            },
            metadata: iW
          }, jm, Um), (0, mW.e)(null, null, Ti, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "emissiveColor" in WW,
              get: WW => WW.emissiveColor,
              set: (WW, iW) => {
                WW.emissiveColor = iW
              }
            },
            metadata: iW
          }, km, sm), (0, mW.e)(null, null, Ji, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularPower" in WW,
              get: WW => WW.specularPower,
              set: (WW, iW) => {
                WW.specularPower = iW
              }
            },
            metadata: iW
          }, Mm, Km), (0, mW.e)(null, null, Hi, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useAlphaFromDiffuseTexture" in WW,
              get: WW => WW._useAlphaFromDiffuseTexture,
              set: (WW, iW) => {
                WW._useAlphaFromDiffuseTexture = iW
              }
            },
            metadata: iW
          }, Sm, Ym), (0, mW.e)(null, null, ui, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useEmissiveAsIllumination" in WW,
              get: WW => WW._useEmissiveAsIllumination,
              set: (WW, iW) => {
                WW._useEmissiveAsIllumination = iW
              }
            },
            metadata: iW
          }, Jm, hm), (0, mW.e)(null, null, di, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: WW => "_linkEmissiveWithDiffuse" in WW,
              get: WW => WW._linkEmissiveWithDiffuse,
              set: (WW, iW) => {
                WW._linkEmissiveWithDiffuse = iW
              }
            },
            metadata: iW
          }, um, om), (0, mW.e)(null, null, vi, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useSpecularOverAlpha" in WW,
              get: WW => WW._useSpecularOverAlpha,
              set: (WW, iW) => {
                WW._useSpecularOverAlpha = iW
              }
            },
            metadata: iW
          }, gm, Dm), (0, mW.e)(null, null, Di, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useReflectionOverAlpha" in WW,
              get: WW => WW._useReflectionOverAlpha,
              set: (WW, iW) => {
                WW._useReflectionOverAlpha = iW
              }
            },
            metadata: iW
          }, fm, Cm), (0, mW.e)(null, null, fi, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: WW => "_disableLighting" in WW,
              get: WW => WW._disableLighting,
              set: (WW, iW) => {
                WW._disableLighting = iW
              }
            },
            metadata: iW
          }, qm, Rm), (0, mW.e)(null, null, Xi, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useObjectSpaceNormalMap" in WW,
              get: WW => WW._useObjectSpaceNormalMap,
              set: (WW, iW) => {
                WW._useObjectSpaceNormalMap = iW
              }
            },
            metadata: iW
          }, am, rm), (0, mW.e)(null, null, qi, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useParallax" in WW,
              get: WW => WW._useParallax,
              set: (WW, iW) => {
                WW._useParallax = iW
              }
            },
            metadata: iW
          }, Qm, WE), (0, mW.e)(null, null, Gi, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useParallaxOcclusion" in WW,
              get: WW => WW._useParallaxOcclusion,
              set: (WW, iW) => {
                WW._useParallaxOcclusion = iW
              }
            },
            metadata: iW
          }, mE, EE), (0, mW.e)(null, null, ai, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: WW => "parallaxScaleBias" in WW,
              get: WW => WW.parallaxScaleBias,
              set: (WW, iW) => {
                WW.parallaxScaleBias = iW
              }
            },
            metadata: iW
          }, LE, cE), (0, mW.e)(null, null, ri, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: WW => "_roughness" in WW,
              get: WW => WW._roughness,
              set: (WW, iW) => {
                WW._roughness = iW
              }
            },
            metadata: iW
          }, wE, tE), (0, mW.e)(null, null, Fi, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: WW => "indexOfRefraction" in WW,
              get: WW => WW.indexOfRefraction,
              set: (WW, iW) => {
                WW.indexOfRefraction = iW
              }
            },
            metadata: iW
          }, lE, AE), (0, mW.e)(null, null, Qi, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: WW => "invertRefractionY" in WW,
              get: WW => WW.invertRefractionY,
              set: (WW, iW) => {
                WW.invertRefractionY = iW
              }
            },
            metadata: iW
          }, bE, jE), (0, mW.e)(null, null, WO, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: WW => "alphaCutOff" in WW,
              get: WW => WW.alphaCutOff,
              set: (WW, iW) => {
                WW.alphaCutOff = iW
              }
            },
            metadata: iW
          }, UE, kE), (0, mW.e)(null, null, iO, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useLightmapAsShadowmap" in WW,
              get: WW => WW._useLightmapAsShadowmap,
              set: (WW, iW) => {
                WW._useLightmapAsShadowmap = iW
              }
            },
            metadata: iW
          }, sE, ME), (0, mW.e)(null, null, mO, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "_diffuseFresnelParameters" in WW,
              get: WW => WW._diffuseFresnelParameters,
              set: (WW, iW) => {
                WW._diffuseFresnelParameters = iW
              }
            },
            metadata: iW
          }, YE, yE), (0, mW.e)(null, null, NO, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "_opacityFresnelParameters" in WW,
              get: WW => WW._opacityFresnelParameters,
              set: (WW, iW) => {
                WW._opacityFresnelParameters = iW
              }
            },
            metadata: iW
          }, hE, HE), (0, mW.e)(null, null, LO, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "_reflectionFresnelParameters" in WW,
              get: WW => WW._reflectionFresnelParameters,
              set: (WW, iW) => {
                WW._reflectionFresnelParameters = iW
              }
            },
            metadata: iW
          }, oE, dE), (0, mW.e)(null, null, wO, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "_refractionFresnelParameters" in WW,
              get: WW => WW._refractionFresnelParameters,
              set: (WW, iW) => {
                WW._refractionFresnelParameters = iW
              }
            },
            metadata: iW
          }, gE, DE), (0, mW.e)(null, null, ZO, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "_emissiveFresnelParameters" in WW,
              get: WW => WW._emissiveFresnelParameters,
              set: (WW, iW) => {
                WW._emissiveFresnelParameters = iW
              }
            },
            metadata: iW
          }, fE, CE), (0, mW.e)(null, null, lO, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useReflectionFresnelFromSpecular" in WW,
              get: WW => WW._useReflectionFresnelFromSpecular,
              set: (WW, iW) => {
                WW._useReflectionFresnelFromSpecular = iW
              }
            },
            metadata: iW
          }, qE, RE), (0, mW.e)(null, null, bO, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useGlossinessFromSpecularMapAlpha" in WW,
              get: WW => WW._useGlossinessFromSpecularMapAlpha,
              set: (WW, iW) => {
                WW._useGlossinessFromSpecularMapAlpha = iW
              }
            },
            metadata: iW
          }, aE, rE), (0, mW.e)(null, null, UO, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: WW => "_maxSimultaneousLights" in WW,
              get: WW => WW._maxSimultaneousLights,
              set: (WW, iW) => {
                WW._maxSimultaneousLights = iW
              }
            },
            metadata: iW
          }, QE, WN), (0, mW.e)(null, null, sO, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: WW => "_invertNormalMapX" in WW,
              get: WW => WW._invertNormalMapX,
              set: (WW, iW) => {
                WW._invertNormalMapX = iW
              }
            },
            metadata: iW
          }, mN, EN), (0, mW.e)(null, null, KO, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: WW => "_invertNormalMapY" in WW,
              get: WW => WW._invertNormalMapY,
              set: (WW, iW) => {
                WW._invertNormalMapY = iW
              }
            },
            metadata: iW
          }, LN, cN), (0, mW.e)(null, null, YO, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: WW => "_twoSidedLighting" in WW,
              get: WW => WW._twoSidedLighting,
              set: (WW, iW) => {
                WW._twoSidedLighting = iW
              }
            },
            metadata: iW
          }, ZN, xN), (0, mW.e)(null, null, TO, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: WW => "_applyDecalMapAfterDetailMap" in WW,
              get: WW => WW._applyDecalMapAfterDetailMap,
              set: (WW, iW) => {
                WW._applyDecalMapAfterDetailMap = iW
              }
            },
            metadata: iW
          }, bN, jN), iW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iW
          })
        })(), WW.ForceGLSL = !1, WW._ShaderLoader = new SW.d((() => [Promise.all([OW.e(635), OW.e(634)]).then((() => OW(54047))), Promise.all([OW.e(640), OW.e(636), OW.e(649), OW.e(639)]).then((() => OW(54248)))]), (() => [Promise.all([OW.e(656), OW.e(651)]).then((() => OW(54390))), Promise.all([OW.e(657), OW.e(667), OW.e(653)]).then((() => OW(54581)))])), WW
      })(),
      vW = !1;

    function gW() {
      vW || (vW = !0, (0, ZW.g)(), (0, hW.h)("BABYLON.StandardMaterial", eW), PW.i.DefaultMaterialFactory = WW => new eW("default material", WW))
    }
    Object.getOwnPropertyDescriptor(eW.prototype, "decalMap") || Object.defineProperty(eW.prototype, "decalMap", (0, HW.h)("StandardMaterial", "decalMap"))
  },
  41895: (WW, iW, OW) => {
    function mW(WW) {
      return class extends WW {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    OW.d(iW, {
      d: () => mW
    })
  },
  41889: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW
    });
    class mW {
      constructor(WW, iW) {
        this._webGL = {
          load: WW,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: iW,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(WW) {
        const iW = 1 === WW ? this._webGPU : this._webGL;
        return iW.loaded ? void 0 : async () => {
          await this._loadAsync(iW)
        }
      }
      async _loadAsync(WW) {
        if (WW.loaded) return;
        let iW = WW.loadPromise;
        const OW = null === iW;
        OW && (iW = Promise.all(WW.load()), WW.loadPromise = iW);
        let mW = !1;
        try {
          await iW, mW = !0
        } finally {
          OW && this._completeLoad(WW, mW)
        }
      }
      _completeLoad(WW, iW) {
        WW.loaded = iW, WW.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);