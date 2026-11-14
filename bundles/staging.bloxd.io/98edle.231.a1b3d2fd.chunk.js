export const id = 231;
export const ids = [231];
export const modules = {
  37978: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW
    });
    var wW = MW(37599);

    function CW(WW) {
      return class extends WW {
        constructor() {
          super(...arguments);
          const WW = new.target;
          if (!WW[Symbol.metadata]) {
            const RW = Object.getPrototypeOf(WW)?.[Symbol.metadata];
            WW[Symbol.metadata] = RW ? Object.create(RW) : {}
          }
          const RW = (0, wW.e)(WW[Symbol.metadata]);
          RW._imageProcessingConfiguration || (RW._imageProcessingConfiguration = {
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
          WW !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !WW && this.QRW ? this._imageProcessingConfiguration = this.QRW().imageProcessingConfiguration : WW && (this._imageProcessingConfiguration = WW), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
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
  37856: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => zR,
      h: () => CW
    });
    var wW = MW(37858);

    function CW(WW) {
      return class extends WW {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class zR extends wW.e {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  37933: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => BW
    });
    var wW = MW(37587),
      CW = MW(37866),
      zR = MW(37593),
      AW = MW(37917),
      bR = MW(37858),
      yR = MW(37941),
      NW = MW(37904);
    class eW extends bR.e {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let BW = (() => {
      var WW, RW, MW, bR;
      let BW, tR, TW, gR, iR, YW, JW = yR.c,
        PW = [],
        IW = [],
        oW = [],
        lW = [],
        FW = [],
        fW = [],
        QW = [],
        rR = [],
        cR = [],
        XW = [],
        jR = [],
        kR = [];
      return WW = class extends JW {
        get texture() {
          return (0, wW.c)(this, RW, "f")
        }
        set texture(WW) {
          (0, wW.d)(this, RW, WW, "f")
        }
        get normalBlendMethod() {
          return (0, wW.c)(this, MW, "f")
        }
        set normalBlendMethod(WW) {
          (0, wW.d)(this, MW, WW, "f")
        }
        get isEnabled() {
          return (0, wW.c)(this, bR, "f")
        }
        set isEnabled(WW) {
          (0, wW.d)(this, bR, WW, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(WW) {
          let zR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(WW, "DetailMap", 140, new eW, zR), this._texture = null, RW.set(this, (0, wW.i)(this, PW, void 0)), this.diffuseBlendLevel = ((0, wW.i)(this, IW), (0, wW.i)(this, oW, 1)), this.roughnessBlendLevel = ((0, wW.i)(this, lW), (0, wW.i)(this, FW, 1)), this.bumpLevel = ((0, wW.i)(this, fW), (0, wW.i)(this, QW, 1)), this._normalBlendMethod = ((0, wW.i)(this, rR), CW.e.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), MW.set(this, (0, wW.i)(this, cR, void 0)), this._isEnabled = ((0, wW.i)(this, XW), !1), bR.set(this, (0, wW.i)(this, jR, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, wW.i)(this, kR), this._internalMarkAllSubMeshesAsTexturesDirty = WW._dirtyCallbacks[1]
        }
        isReadyForSubMesh(WW, RW, MW) {
          return !this._isEnabled || !(WW._areTexturesDirty && RW.texturesEnabled && MW.getCaps().standardDerivatives && this._texture && AW.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(WW, RW) {
          if (this._isEnabled) {
            WW.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const MW = RW.mC();
            WW._areTexturesDirty && (MW.getCaps().standardDerivatives && this._texture && AW.e.DetailTextureEnabled && this._isEnabled ? ((0, NW.cb)(this._texture, WW, "DETAIL"), WW.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : WW.DETAIL = !1)
          } else WW.DETAIL = !1
        }
        bindForSubMesh(WW, RW) {
          if (!this._isEnabled) return;
          const MW = this._material.isFrozen;
          WW.useUbo && MW && WW.isSync || this._texture && AW.e.DetailTextureEnabled && (WW.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, NW.D)(this._texture, WW, "detail")), RW.texturesEnabled && this._texture && AW.e.DetailTextureEnabled && WW.setTexture("detailSampler", this._texture)
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
      }, RW = new WeakMap, MW = new WeakMap, bR = new WeakMap, (() => {
        const RW = "function" === typeof Symbol && Symbol.metadata ? Object.create(JW[Symbol.metadata] ?? null) : void 0;
        BW = [(0, zR.y)("detailTexture"), (0, zR.h)("_markAllSubMeshesAsTexturesDirty")], tR = [(0, zR.D)()], TW = [(0, zR.D)()], gR = [(0, zR.D)()], iR = [(0, zR.D)(), (0, zR.h)("_markAllSubMeshesAsTexturesDirty")], YW = [(0, zR.D)(), (0, zR.h)("_markAllSubMeshesAsTexturesDirty")], (0, wW.e)(WW, null, BW, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: WW => "texture" in WW,
            get: WW => WW.texture,
            set: (WW, RW) => {
              WW.texture = RW
            }
          },
          metadata: RW
        }, PW, IW), (0, wW.e)(WW, null, iR, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: WW => "normalBlendMethod" in WW,
            get: WW => WW.normalBlendMethod,
            set: (WW, RW) => {
              WW.normalBlendMethod = RW
            }
          },
          metadata: RW
        }, cR, XW), (0, wW.e)(WW, null, YW, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "isEnabled" in WW,
            get: WW => WW.isEnabled,
            set: (WW, RW) => {
              WW.isEnabled = RW
            }
          },
          metadata: RW
        }, jR, kR), (0, wW.e)(null, null, tR, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: WW => "diffuseBlendLevel" in WW,
            get: WW => WW.diffuseBlendLevel,
            set: (WW, RW) => {
              WW.diffuseBlendLevel = RW
            }
          },
          metadata: RW
        }, oW, lW), (0, wW.e)(null, null, TW, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: WW => "roughnessBlendLevel" in WW,
            get: WW => WW.roughnessBlendLevel,
            set: (WW, RW) => {
              WW.roughnessBlendLevel = RW
            }
          },
          metadata: RW
        }, FW, fW), (0, wW.e)(null, null, gR, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: WW => "bumpLevel" in WW,
            get: WW => WW.bumpLevel,
            set: (WW, RW) => {
              WW.bumpLevel = RW
            }
          },
          metadata: RW
        }, QW, rR), RW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RW
        })
      })(), WW
    })()
  },
  37858: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW
    });
    class wW {
      constructor(WW) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = WW, WW)
          for (const RW in WW) Object.prototype.hasOwnProperty.call(WW, RW) && this._setDefaultValue(RW)
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
        for (let RW = 0; RW < this._keys.length; RW++) {
          const MW = this._keys[RW];
          if (this[MW] !== WW[MW]) return !1
        }
        return !0
      }
      cloneTo(WW) {
        this._keys.length !== WW._keys.length && (WW._keys = this._keys.slice(0));
        for (let RW = 0; RW < this._keys.length; RW++) {
          const MW = this._keys[RW];
          WW[MW] = this[MW]
        }
      }
      reset() {
        for (const WW of this._keys) this._setDefaultValue(WW)
      }
      _setDefaultValue(WW) {
        const RW = this._externalProperties?.[WW]?.type ?? typeof this[WW],
          MW = this._externalProperties?.[WW]?.default;
        switch (RW) {
          case "number":
            this[WW] = MW ?? 0;
            break;
          case "string":
            this[WW] = MW ?? "";
            break;
          default:
            this[WW] = MW ?? !1
        }
      }
      toString() {
        let WW = "";
        for (let RW = 0; RW < this._keys.length; RW++) {
          const MW = this._keys[RW],
            wW = this[MW];
          switch (typeof wW) {
            case "number":
            case "string":
              WW += "#define " + MW + " " + wW + "\n";
              break;
            default:
              wW && (WW += "#define " + MW + "\n")
          }
        }
        return WW
      }
    }
  },
  37956: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => bR,
      g: () => AW,
      h: () => zR
    });
    var wW, CW = MW(35324);

    function zR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const wW = RW(WW);
      if (!Number.isInteger(wW) || wW < 0 || wW > MW) throw new Error(`Invalid geometry object ID ${wW} for mesh "${WW.name}". Object IDs must be integers between 0 and 0x${MW.toString(16).toUpperCase()}.`);
      return wW
    }

    function AW(WW, RW) {
      const MW = RW(WW);
      if (!Number.isInteger(MW) || MW < 0 || MW > 255 || 0 !== MW && 0 === (63 & MW)) throw new Error(`Invalid geometry mesh-blending tag ${MW} for mesh "${WW.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return MW
    }! function(WW) {
      WW[WW.Zero = 0] = "Zero", WW[WW.One = 1] = "One", WW[WW.MaxViewZ = 2] = "MaxViewZ", WW[WW.NoClear = 3] = "NoClear"
    }(wW || (wW = {}));
    class bR {
      static CreateConfiguration(WW) {
        return bR._Configurations[WW] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: CW.d.Zero(),
          currentViewProjection: CW.d.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, bR._Configurations[WW]
      }
      static DeleteConfiguration(WW) {
        delete bR._Configurations[WW]
      }
      static GetConfiguration(WW) {
        return bR._Configurations[WW]
      }
      static _PrepareConfiguration(WW, RW, MW) {
        const wW = bR._Configurations[WW];
        wW._attachments = RW, wW._colorAttachments = MW, wW._mrtCount = RW.length;
        let CW = "#define PREPASS\n";
        for (const zR of bR.GeometryTextureDescriptions) {
          const WW = wW.defines[zR.defineIndex];
          void 0 !== WW && (CW += `#define ${zR.define}\n#define ${zR.defineIndex} ${WW}\n`)
        }
        wW.objectIdIsRedFormat && (CW += "#define PREPASS_OBJECT_ID_R8\n"), wW._defines = CW + `#define SCENE_MRT_COUNT ${RW.length}\n`
      }
      static _PrepareStringDefines(WW, RW) {
        const MW = bR._Configurations[WW];
        return !!MW?._defines && (RW.push(MW._defines), !0)
      }
      static _BindAttachmentsForEffect(WW, RW) {
        const MW = bR._Configurations[WW.currentRenderPassId];
        return !MW?._attachments || (WW.bindAttachments(RW._multiTarget ? MW._attachments : MW._colorAttachments), RW._multiTarget || void 0 !== MW.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(WW) {
        const RW = bR._Configurations[WW.currentRenderPassId];
        RW?._colorAttachments && WW.bindAttachments(RW._colorAttachments)
      }
      static _BindColorAttachments(WW) {
        const RW = bR._Configurations[WW.currentRenderPassId];
        return !RW?._colorAttachments || (WW.bindAttachments(RW._colorAttachments), void 0 !== RW.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(WW) {
        const RW = bR._Configurations[WW.currentRenderPassId];
        return !RW?._colorAttachments || void 0 !== RW.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(WW, RW) {
        const MW = bR._Configurations[WW.currentRenderPassId];
        if (!MW) return;
        const wW = WW.getAlphaMode(),
          CW = void 0 === MW.defines.PREPASS_COLOR_INDEX || 2 === wW || 1 === wW || 17 === wW;
        RW.setFloat("geometryZeroAlphaDiscard", CW ? 1 : 0)
      }
      static AddUniformsAndSamplers(WW, RW) {
        WW.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(WW, RW) {
        for (const MW of RW)
          if (MW.Qs)
            for (const RW of MW.Qs) RW._removeDrawWrapper(WW)
      }
      static PrepareDefines(WW, RW, MW) {
        if (!MW._arePrePassDirty) return;
        const wW = bR._Configurations[WW];
        if (!wW) return;
        MW.PREPASS = !0;
        let CW = 0;
        for (let zR = 0; zR < bR.GeometryTextureDescriptions.length; zR++) {
          const WW = bR.GeometryTextureDescriptions[zR],
            RW = WW.define,
            AW = WW.defineIndex,
            yR = wW.defines[AW];
          void 0 !== yR ? (MW[RW] = !0, MW[AW] = yR, CW++) : (MW[RW] = !1, delete MW[AW])
        }
        MW.PREPASS_OBJECT_ID_R8 = wW.objectIdIsRedFormat, MW.SCENE_MRT_COUNT = wW._mrtCount ?? CW, MW.BONES_VELOCITY_ENABLED = RW.useBones && RW.computeBonesUsingShaders && RW.skeleton && !RW.skeleton.isUsingTextureForMatrices && -1 === wW.excludedSkinnedMesh.indexOf(RW)
      }
      static Bind(WW, RW, MW, wW, CW) {
        const yR = bR._Configurations[WW];
        if (!yR) return;
        const NW = MW.QRW(),
          eW = NW.mC();
        if (yR.reverseCulling && eW.setStateCullFaceType(NW._mirroredCameraPosition ? CW.cullBackFaces : !CW.cullBackFaces), void 0 !== yR.defines.PREPASS_OBJECT_ID_INDEX) {
          const WW = yR.objectIdIsRedFormat ? 255 : 16777215;
          let wW = MW.uniqueId;
          if (yR.objectIdProvider) wW = zR(MW, yR.objectIdProvider, WW);
          else if (wW > WW) throw new Error(`Invalid geometry object ID ${wW} for mesh "${MW.name}". Object IDs must be integers between 0 and 0x${WW.toString(16).toUpperCase()}.`);
          RW.setFloat("objectId", wW)
        }
        if (void 0 !== yR.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const WW = yR.meshBlendTagProvider ? AW(MW, yR.meshBlendTagProvider) : MW.meshBlendingTag;
          RW.setInt("meshBlendTag", WW)
        }
        if (void 0 !== yR.defines.PREPASS_VELOCITY_INDEX || void 0 !== yR.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const WW = yR._currentWorldMatrices ?? (yR._currentWorldMatrices = {}),
            CW = yR._worldMatrixFrameIds ?? (yR._worldMatrixFrameIds = {});
          if (WW[MW.uniqueId] || (WW[MW.uniqueId] = wW.clone(), yR.previousWorldMatrices[MW.uniqueId] = wW.clone()), CW[MW.uniqueId] !== eW.frameId && (yR.previousWorldMatrices[MW.uniqueId].hyW(WW[MW.uniqueId]), CW[MW.uniqueId] = eW.frameId), WW[MW.uniqueId].hyW(wW), -1 === yR.lastUpdateFrameId ? (yR.lastUpdateFrameId = eW.frameId, yR.previousViewProjection.hyW(NW.getTransformMatrix()), yR.currentViewProjection.hyW(NW.getTransformMatrix())) : yR.currentViewProjection.updateFlag !== NW.getTransformMatrix().updateFlag ? (yR.lastUpdateFrameId = eW.frameId, yR.previousViewProjection.hyW(yR.currentViewProjection), yR.currentViewProjection.hyW(NW.getTransformMatrix())) : yR.lastUpdateFrameId !== eW.frameId && (yR.lastUpdateFrameId = eW.frameId, yR.previousViewProjection.hyW(yR.currentViewProjection)), RW.setMatrix("previousWorld", yR.previousWorldMatrices[MW.uniqueId]), RW.setMatrix("previousViewProjection", yR.previousViewProjection), MW.useBones && MW.computeBonesUsingShaders && MW.skeleton) {
            const WW = MW.skeleton;
            if (!WW.isUsingTextureForMatrices || -1 === RW.getUniformIndex("boneTextureInfo")) {
              const wW = WW.getTransformMatrices(MW);
              wW && (yR.previousBones[MW.uniqueId] || (yR.previousBones[MW.uniqueId] = wW.slice()), RW.setMatrices("mPreviousBones", yR.previousBones[MW.uniqueId]), yR.previousBones[MW.uniqueId].set(wW))
            }
          }
        }
      }
    }
    bR.GeometryTextureDescriptions = [{
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
    }], bR._Configurations = {}
  },
  37941: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => tR,
      f: () => gR
    });
    var wW = MW(37587),
      CW = MW(37593),
      zR = MW(37477),
      AW = MW(37441);
    const bR = new RegExp("^([gimus]+)!");
    class yR {
      constructor(WW) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = WW, this._scene = WW.QRW(), this._engine = this._scene.mC()
      }
      _addPlugin(WW) {
        for (let wW = 0; wW < this._plugins.length; ++wW)
          if (this._plugins[wW].name === WW.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !WW.isCompatible(this._material.shaderLanguage)) throw `The plugin "${WW.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const RW = WW.getClassName();
        yR._MaterialPluginClassToMainDefine[RW] || (yR._MaterialPluginClassToMainDefine[RW] = "MATERIALPLUGIN_" + ++yR._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (WW, RW) => this._handlePluginEvent(WW, RW), this._plugins.push(WW), this._plugins.sort(((WW, RW) => WW.priority - RW.priority)), this._codeInjectionPoints = {};
        const MW = {};
        MW[yR._MaterialPluginClassToMainDefine[RW]] = {
          type: "boolean",
          default: !0
        };
        for (const wW of this._plugins) wW.collectDefines(MW), this._collectPointNames("vertex", wW.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", wW.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = MW, !0
      }
      _activatePlugin(WW) {
        -1 === this._activePlugins.indexOf(WW) && (this._activePlugins.push(WW), this._activePlugins.sort(((WW, RW) => WW.priority - RW.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), WW.registerForExtraEvents && (this._activePluginsForExtraEvents.push(WW), this._activePluginsForExtraEvents.sort(((WW, RW) => WW.priority - RW.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(WW) {
        for (let RW = 0; RW < this._plugins.length; ++RW)
          if (this._plugins[RW].name === WW) return this._plugins[RW];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(WW) {
        let RW = !0;
        for (const MW of this._activePlugins) RW = RW && MW.isReadyForSubMesh(WW.defines, this._scene, this._engine, WW.subMesh);
        WW.isReadyForSubMesh = RW
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(WW) {
        for (const RW of this._activePlugins) RW.prepareDefinesBeforeAttributes(WW.defines, this._scene, WW.mesh)
      }
      _handlePluginEventPrepareDefines(WW) {
        for (const RW of this._activePlugins) RW.prepareDefines(WW.defines, this._scene, WW.mesh)
      }
      _handlePluginEventHardBindForSubMesh(WW) {
        for (const RW of this._activePluginsForExtraEvents) RW.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, WW.subMesh)
      }
      _handlePluginEventBindForSubMesh(WW) {
        for (const RW of this._activePlugins) RW.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, WW.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(WW) {
        let RW = !1;
        for (const MW of this._activePluginsForExtraEvents)
          if (RW = MW.hasRenderTargetTextures(), RW) break;
        WW.hasRenderTargetTextures = RW
      }
      _handlePluginEventFillRenderTargetTextures(WW) {
        for (const RW of this._activePluginsForExtraEvents) RW.fillRenderTargetTextures(WW.renderTargets)
      }
      _handlePluginEvent(WW, RW) {
        switch (WW) {
          case 512: {
            const WW = RW;
            for (const RW of this._activePlugins) RW.getActiveTextures(WW.activeTextures);
            break
          }
          case 256: {
            const WW = RW;
            for (const RW of this._activePlugins) RW.getAnimatables(WW.animatables);
            break
          }
          case 1024: {
            const WW = RW;
            let MW = !1;
            for (const RW of this._activePlugins)
              if (MW = RW.hasTexture(WW.texture), MW) break;
            WW.hasTexture = MW;
            break
          }
          case 2: {
            const WW = RW;
            for (const RW of this._plugins) RW.dispose(WW.forceDisposeTextures);
            break
          }
          case 4:
            RW.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const WW = RW;
            for (const RW of this._activePlugins) WW.fallbackRank = RW.addFallbacks(WW.defines, WW.fallbacks, WW.fallbackRank), RW.getAttributes(WW.attributes, this._scene, WW.mesh);
            this._uniformList.length > 0 && WW.uniforms.push(...this._uniformList), this._samplerList.length > 0 && WW.samplers.push(...this._samplerList), this._uboList.length > 0 && WW.uniformBuffersNames.push(...this._uboList), WW.customCode = this._injectCustomCode(WW, WW.customCode);
            break
          }
          case 8: {
            const WW = RW;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const MW = 1 === this._material.shaderLanguage;
            for (const RW of this._plugins) {
              const wW = RW.getUniforms(this._material.shaderLanguage);
              if (wW) {
                if (wW.ubo)
                  for (const RW of wW.ubo) {
                    if (RW.size && RW.type) {
                      const wW = RW.arraySize ?? 0;
                      if (WW.ubo.addUniform(RW.name, RW.size, wW), MW) {
                        let WW;
                        switch (RW.type) {
                          case "mat4":
                            WW = "mat4x4f";
                            break;
                          case "float":
                            WW = "f32";
                            break;
                          default:
                            WW = `${RW.type}f`
                        }
                        this._uboDeclaration += wW > 0 ? `uniform ${RW.name}: array<${WW}, ${wW}>;\n` : `uniform ${RW.name}: ${WW};\n`
                      } else this._uboDeclaration += `${RW.type} ${RW.name}${wW>0?`[${wW}]`:""};\n`
                    }
                    this._uniformList.push(RW.name)
                  }
                wW.vertex && (this._vertexDeclaration += wW.vertex + "\n"), wW.fragment && (this._fragmentDeclaration += wW.fragment + "\n"), wW.externalUniforms && this._uniformList.push(...wW.externalUniforms)
              }
              RW.getSamplers(this._samplerList), RW.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(WW, RW) {
        if (RW)
          for (const MW in RW) this._codeInjectionPoints[WW] || (this._codeInjectionPoints[WW] = {}), this._codeInjectionPoints[WW][MW] = !0
      }
      _injectCustomCode(WW, RW) {
        return (MW, wW) => {
          RW && (wW = RW(MW, wW)), this._uboDeclaration && (wW = wW.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (wW = wW.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (wW = wW.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const CW = this._codeInjectionPoints?.[MW];
          if (!CW) return wW;
          let yR = null;
          for (let RW in CW) {
            let CW = "";
            for (const wW of this._activePlugins) {
              const bR = this._material.shaderLanguage;
              let NW = wW.getCustomCode(MW, bR)?.[RW];
              NW && (wW.resolveIncludes && (null === yR && (yR = {
                defines: [],
                indexParameters: WW.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: AW.c.GetShadersRepository(bR),
                includesShadersStore: AW.c.GetIncludesShadersStore(bR),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                BNW: this._engine.BNW,
                processCodeAfterIncludes: void 0
              }), yR.isFragment = "fragment" === MW, (0, zR.i)(NW, yR, (WW => NW = WW))), CW += NW + "\n")
            }
            if (CW.length > 0)
              if ("!" === RW.charAt(0)) {
                RW = RW.substring(1);
                let WW = "g";
                if ("!" === RW.charAt(0)) WW = "", RW = RW.substring(1);
                else {
                  const MW = bR.exec(RW);
                  MW && MW.length >= 2 && (WW = MW[1], RW = RW.substring(WW.length + 1))
                }
                WW.indexOf("g") < 0 && (WW += "g");
                const MW = new RegExp(RW, WW);
                let zR = MW.exec(wW);
                for (; null !== zR;) {
                  const {
                    index: WW
                  } = zR, RW = NW(CW, zR);
                  wW = wW.substring(0, WW) + RW + wW.substring(WW + zR[0].length), MW.lastIndex = WW + RW.length, zR = MW.exec(wW)
                }
              } else {
                const WW = "#define " + RW;
                wW = wW.replace(WW, "\n" + CW + "\n" + WW)
              }
          }
          return wW
        }
      }
    }
    yR._MaterialPluginClassToMainDefine = {}, yR._MaterialPluginCounter = 0;

    function NW(WW, RW) {
      return WW.replace(/\$(\d+)/g, ((WW, MW) => {
        const wW = Number(MW);
        return wW < RW.length ? RW[wW] : ""
      }))
    }
    var eW = MW(37615),
      BW = MW(35361);
    let tR = (() => {
        var WW;
        let RW, MW, zR, AW, bR = [],
          NW = [],
          BW = [],
          tR = [],
          TW = [],
          gR = [],
          iR = [],
          YW = [];
        return WW = class {
          isCompatible(WW) {
            return 0 === WW
          }
          _enable(WW) {
            WW && this._pluginManager._activatePlugin(this)
          }
          constructor(WW, RW, MW, CW) {
            let zR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              AW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              eW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, wW.i)(this, bR, void 0), this.priority = ((0, wW.i)(this, NW), (0, wW.i)(this, BW, 500)), this.resolveIncludes = ((0, wW.i)(this, tR), (0, wW.i)(this, TW, !1)), this.registerForExtraEvents = ((0, wW.i)(this, gR), (0, wW.i)(this, iR, !1)), this.doNotSerialize = ((0, wW.i)(this, YW), !1), this._material = WW, this.name = RW, this.priority = MW, this.resolveIncludes = eW, WW.pluginManager || (WW.pluginManager = new yR(WW), WW.rMW.add((() => {
              WW.pluginManager = void 0
            }))), this._pluginDefineNames = CW, this._pluginManager = WW.pluginManager, zR && this._pluginManager._addPlugin(this), AW && this._enable(!0), this.markAllDefinesAsDirty = WW._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(WW, RW, MW, wW) {
            return !0
          }
          hardBindForSubMesh(WW, RW, MW, wW) {}
          bindForSubMesh(WW, RW, MW, wW) {}
          dispose(WW) {}
          getCustomCode(WW) {
            return null
          }
          collectDefines(WW) {
            if (this._pluginDefineNames)
              for (const RW of Object.keys(this._pluginDefineNames)) {
                if ("_" === RW[0]) continue;
                const MW = typeof this._pluginDefineNames[RW];
                WW[RW] = {
                  type: "number" === MW ? "number" : "string" === MW ? "string" : "boolean" === MW ? "boolean" : "object",
                  default: this._pluginDefineNames[RW]
                }
              }
          }
          prepareDefinesBeforeAttributes(WW, RW, MW) {}
          prepareDefines(WW, RW, MW) {}
          hasTexture(WW) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(WW) {}
          getActiveTextures(WW) {}
          getAnimatables(WW) {}
          addFallbacks(WW, RW, MW) {
            return MW
          }
          getSamplers(WW) {}
          getAttributes(WW, RW, MW) {}
          getUniformBuffersNames(WW) {}
          getUniforms() {
            return {}
          }
          copyTo(WW) {
            eW.d.Clone((() => WW), this)
          }
          serialize() {
            return eW.d.Serialize(this)
          }
          parse(WW, RW, MW) {
            eW.d.Parse((() => this), WW, RW, MW)
          }
        }, (() => {
          const yR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          RW = [(0, CW.D)()], MW = [(0, CW.D)()], zR = [(0, CW.D)()], AW = [(0, CW.D)()], (0, wW.e)(null, null, RW, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: WW => "name" in WW,
              get: WW => WW.name,
              set: (WW, RW) => {
                WW.name = RW
              }
            },
            metadata: yR
          }, bR, NW), (0, wW.e)(null, null, MW, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: WW => "priority" in WW,
              get: WW => WW.priority,
              set: (WW, RW) => {
                WW.priority = RW
              }
            },
            metadata: yR
          }, BW, tR), (0, wW.e)(null, null, zR, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: WW => "resolveIncludes" in WW,
              get: WW => WW.resolveIncludes,
              set: (WW, RW) => {
                WW.resolveIncludes = RW
              }
            },
            metadata: yR
          }, TW, gR), (0, wW.e)(null, null, AW, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: WW => "registerForExtraEvents" in WW,
              get: WW => WW.registerForExtraEvents,
              set: (WW, RW) => {
                WW.registerForExtraEvents = RW
              }
            },
            metadata: yR
          }, iR, YW), yR && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yR
          })
        })(), WW
      })(),
      TW = !1;

    function gR() {
      TW || (TW = !0, (0, BW.e)("BABYLON.MaterialPluginBase", tR))
    }
  },
  37853: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW
    });
    class wW {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(WW) {
        WW.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(WW) {}
      bindForSubMesh(WW, RW, MW, wW, CW) {
        if (RW.prePassRenderer && RW.prePassRenderer.enabled && RW.prePassRenderer.currentRTisSceneRT && (-1 !== RW.prePassRenderer.getIndex(2) || -1 !== RW.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[MW.uniqueId] || (this.previousWorldMatrices[MW.uniqueId] = wW.clone()), this.previousViewProjection || (this.previousViewProjection = RW.getTransformMatrix().clone(), this.currentViewProjection = RW.getTransformMatrix().clone());
          const CW = RW.mC();
          this.currentViewProjection.updateFlag !== RW.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = CW.frameId, this.previousViewProjection.hyW(this.currentViewProjection), this.currentViewProjection.hyW(RW.getTransformMatrix())) : this._lastUpdateFrameId !== CW.frameId && (this._lastUpdateFrameId = CW.frameId, this.previousViewProjection.hyW(this.currentViewProjection)), WW.setMatrix("previousWorld", this.previousWorldMatrices[MW.uniqueId]), WW.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[MW.uniqueId] = wW.clone()
        }
      }
    }
  },
  37971: (WW, RW, MW) => {
    function wW(WW) {
      return class extends WW {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    MW.d(RW, {
      e: () => wW
    })
  },
  37844: (WW, RW, MW) => {
    MW.d(RW, {
      StandardMaterial: () => wW.i
    });
    var wW = MW(37846);
    (0, wW.e)()
  },
  37846: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => UW,
      i: () => pW
    });
    var wW = MW(37587),
      CW = MW(37593),
      zR = MW(37693),
      AW = MW(37677),
      bR = MW(35376),
      yR = MW(37722),
      NW = MW(37853),
      eW = MW(37856),
      BW = MW(37699),
      tR = MW(37866),
      TW = MW(37858),
      gR = MW(37925),
      iR = MW(37917),
      YW = MW(37930),
      JW = MW(37933),
      PW = MW(37910),
      IW = MW(37948),
      oW = MW(37904),
      lW = MW(37615),
      FW = MW(37952),
      fW = MW(37956),
      QW = MW(37962),
      rR = MW(37971),
      cR = MW(37978),
      XW = MW(35361),
      jR = MW(37470);
    const kR = {
      effect: null,
      subMesh: null
    };
    class aR extends((0, rR.e)((0, QW.d)(TW.e))) {}
    class sW extends((0, eW.h)(aR)) {
      constructor(WW) {
        super(WW), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class dW extends((0, cR.e)(gR.c)) {}
    let pW = (() => {
        var WW, RW, eW, TW, QW, rR, cR, XW, jR, aR, pW, hW, UW, EW, VW, mR, xR, vR, KW, uW, OW, nW, GW, LW, HW, DW, qR, ZW, SW, WR, RR, MR, wR;
        let CR, zM, AR, bM, yM, NR, eR, BR, tM, TR, gM, iM, YR, JR, PR, IR, oR, lR, FR, fR, QR, rM, cM, XR, jM, kM, aM, sR, dR, pR, hR, UR, ER, VR, mM, xM, vM, KR, uR, OR, nR, GR, LR, HR, DR, qM, ZR, SR, WM, RM, MM, wM, CM, zw, AM, bw, yw, NM, eM, BM, tw, TM, gw, iw, YM, JM, PM, IM, oM, lM, FM, fM, QM, rw = dW,
          cwW = [],
          XM = [],
          jw = [],
          kw = [],
          aw = [],
          sM = [],
          dM = [],
          pM = [],
          hM = [],
          UM = [],
          EM = [],
          VM = [],
          mw = [],
          xw = [],
          vw = [],
          KM = [],
          uM = [],
          OM = [],
          nM = [],
          GM = [],
          LM = [],
          HM = [],
          DM = [],
          qw = [],
          ZM = [],
          SM = [],
          Ww = [],
          Rw = [],
          Mw = [],
          ww = [],
          Cw = [],
          zC = [],
          Aw = [],
          bC = [],
          yC = [],
          Nw = [],
          ew = [],
          Bw = [],
          tC = [],
          Tw = [],
          gC = [],
          iC = [],
          Yw = [],
          Jw = [],
          Pw = [],
          Iw = [],
          ow = [],
          lw = [],
          Fw = [],
          fw = [],
          Qw = [],
          rC = [],
          cC = [],
          Xw = [],
          jC = [],
          kC = [],
          aC = [],
          sw = [],
          dw = [],
          pw = [],
          hw = [],
          Uw = [],
          Ew = [],
          Vw = [],
          mC = [],
          xC = [],
          vC = [],
          Kw = [],
          uw = [],
          Ow = [],
          nw = [],
          Gw = [],
          Lw = [],
          Hw = [],
          Dw = [],
          qC = [],
          Zw = [],
          Sw = [],
          WC = [],
          RC = [],
          MC = [],
          wC = [],
          CC = [],
          zz = [],
          AC = [],
          bz = [],
          yz = [],
          NC = [],
          eC = [],
          BC = [],
          tz = [],
          TC = [],
          gz = [],
          iz = [],
          YC = [],
          JC = [],
          PC = [],
          IC = [],
          oC = [],
          lC = [],
          FC = [],
          fC = [],
          QC = [],
          rz = [],
          cz = [],
          XC = [],
          jz = [],
          kz = [],
          az = [],
          sC = [],
          dC = [],
          pC = [],
          hC = [],
          UC = [],
          EC = [],
          VC = [],
          mz = [],
          xz = [],
          vz = [],
          KC = [],
          uC = [],
          OC = [],
          nC = [],
          GC = [],
          LC = [],
          HC = [],
          DC = [],
          qz = [],
          ZC = [],
          SC = [],
          Wz = [],
          Rz = [],
          Mz = [],
          wz = [],
          Cz = [],
          zA = [],
          Az = [],
          bA = [],
          yA = [],
          Nz = [],
          ez = [],
          Bz = [],
          tA = [],
          Tz = [],
          gA = [],
          iA = [];
        return WW = class extends rw {
          get diffuseTexture() {
            return (0, wW.c)(this, RW, "f")
          }
          set diffuseTexture(WW) {
            (0, wW.d)(this, RW, WW, "f")
          }
          get ambientTexture() {
            return (0, wW.c)(this, eW, "f")
          }
          set ambientTexture(WW) {
            (0, wW.d)(this, eW, WW, "f")
          }
          get opacityTexture() {
            return (0, wW.c)(this, TW, "f")
          }
          set opacityTexture(WW) {
            (0, wW.d)(this, TW, WW, "f")
          }
          get reflectionTexture() {
            return (0, wW.c)(this, QW, "f")
          }
          set reflectionTexture(WW) {
            (0, wW.d)(this, QW, WW, "f")
          }
          get emissiveTexture() {
            return (0, wW.c)(this, rR, "f")
          }
          set emissiveTexture(WW) {
            (0, wW.d)(this, rR, WW, "f")
          }
          get specularTexture() {
            return (0, wW.c)(this, cR, "f")
          }
          set specularTexture(WW) {
            (0, wW.d)(this, cR, WW, "f")
          }
          get bumpTexture() {
            return (0, wW.c)(this, XW, "f")
          }
          set bumpTexture(WW) {
            (0, wW.d)(this, XW, WW, "f")
          }
          get lightmapTexture() {
            return (0, wW.c)(this, jR, "f")
          }
          set lightmapTexture(WW) {
            (0, wW.d)(this, jR, WW, "f")
          }
          get refractionTexture() {
            return (0, wW.c)(this, aR, "f")
          }
          set refractionTexture(WW) {
            (0, wW.d)(this, aR, WW, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, wW.c)(this, pW, "f")
          }
          set useAlphaFromDiffuseTexture(WW) {
            (0, wW.d)(this, pW, WW, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, wW.c)(this, hW, "f")
          }
          set useEmissiveAsIllumination(WW) {
            (0, wW.d)(this, hW, WW, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, wW.c)(this, UW, "f")
          }
          set linkEmissiveWithDiffuse(WW) {
            (0, wW.d)(this, UW, WW, "f")
          }
          get useSpecularOverAlpha() {
            return (0, wW.c)(this, EW, "f")
          }
          set useSpecularOverAlpha(WW) {
            (0, wW.d)(this, EW, WW, "f")
          }
          get useReflectionOverAlpha() {
            return (0, wW.c)(this, VW, "f")
          }
          set useReflectionOverAlpha(WW) {
            (0, wW.d)(this, VW, WW, "f")
          }
          get disableLighting() {
            return (0, wW.c)(this, mR, "f")
          }
          set disableLighting(WW) {
            (0, wW.d)(this, mR, WW, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, wW.c)(this, xR, "f")
          }
          set useObjectSpaceNormalMap(WW) {
            (0, wW.d)(this, xR, WW, "f")
          }
          get useParallax() {
            return (0, wW.c)(this, vR, "f")
          }
          set useParallax(WW) {
            (0, wW.d)(this, vR, WW, "f")
          }
          get useParallaxOcclusion() {
            return (0, wW.c)(this, KW, "f")
          }
          set useParallaxOcclusion(WW) {
            (0, wW.d)(this, KW, WW, "f")
          }
          get roughness() {
            return (0, wW.c)(this, uW, "f")
          }
          set roughness(WW) {
            (0, wW.d)(this, uW, WW, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, wW.c)(this, OW, "f")
          }
          set useLightmapAsShadowmap(WW) {
            (0, wW.d)(this, OW, WW, "f")
          }
          get diffuseFresnelParameters() {
            return (0, wW.c)(this, nW, "f")
          }
          set diffuseFresnelParameters(WW) {
            (0, wW.d)(this, nW, WW, "f")
          }
          get opacityFresnelParameters() {
            return (0, wW.c)(this, GW, "f")
          }
          set opacityFresnelParameters(WW) {
            (0, wW.d)(this, GW, WW, "f")
          }
          get reflectionFresnelParameters() {
            return (0, wW.c)(this, LW, "f")
          }
          set reflectionFresnelParameters(WW) {
            (0, wW.d)(this, LW, WW, "f")
          }
          get refractionFresnelParameters() {
            return (0, wW.c)(this, HW, "f")
          }
          set refractionFresnelParameters(WW) {
            (0, wW.d)(this, HW, WW, "f")
          }
          get emissiveFresnelParameters() {
            return (0, wW.c)(this, DW, "f")
          }
          set emissiveFresnelParameters(WW) {
            (0, wW.d)(this, DW, WW, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, wW.c)(this, qR, "f")
          }
          set useReflectionFresnelFromSpecular(WW) {
            (0, wW.d)(this, qR, WW, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, wW.c)(this, ZW, "f")
          }
          set useGlossinessFromSpecularMapAlpha(WW) {
            (0, wW.d)(this, ZW, WW, "f")
          }
          get maxSimultaneousLights() {
            return (0, wW.c)(this, SW, "f")
          }
          set maxSimultaneousLights(WW) {
            (0, wW.d)(this, SW, WW, "f")
          }
          get invertNormalMapX() {
            return (0, wW.c)(this, WR, "f")
          }
          set invertNormalMapX(WW) {
            (0, wW.d)(this, WR, WW, "f")
          }
          get invertNormalMapY() {
            return (0, wW.c)(this, RR, "f")
          }
          set invertNormalMapY(WW) {
            (0, wW.d)(this, RR, WW, "f")
          }
          get twoSidedLighting() {
            return (0, wW.c)(this, MR, "f")
          }
          set twoSidedLighting(WW) {
            (0, wW.d)(this, MR, WW, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, wW.c)(this, wR, "f")
          }
          set applyDecalMapAfterDetailMap(WW) {
            (0, wW.d)(this, wR, WW, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(MW, CW) {
            super(MW, CW, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || WW.ForceGLSL), this._diffuseTexture = (0, wW.i)(this, cwW, null), RW.set(this, ((0, wW.i)(this, XM), (0, wW.i)(this, jw, void 0))), this._ambientTexture = ((0, wW.i)(this, kw), (0, wW.i)(this, aw, null)), eW.set(this, ((0, wW.i)(this, sM), (0, wW.i)(this, dM, void 0))), this._opacityTexture = ((0, wW.i)(this, pM), (0, wW.i)(this, hM, null)), TW.set(this, ((0, wW.i)(this, UM), (0, wW.i)(this, EM, void 0))), this._reflectionTexture = ((0, wW.i)(this, VM), (0, wW.i)(this, mw, null)), QW.set(this, ((0, wW.i)(this, xw), (0, wW.i)(this, vw, void 0))), this._emissiveTexture = ((0, wW.i)(this, KM), (0, wW.i)(this, uM, null)), rR.set(this, ((0, wW.i)(this, OM), (0, wW.i)(this, nM, void 0))), this._specularTexture = ((0, wW.i)(this, GM), (0, wW.i)(this, LM, null)), cR.set(this, ((0, wW.i)(this, HM), (0, wW.i)(this, DM, void 0))), this._bumpTexture = ((0, wW.i)(this, qw), (0, wW.i)(this, ZM, null)), XW.set(this, ((0, wW.i)(this, SM), (0, wW.i)(this, Ww, void 0))), this._lightmapTexture = ((0, wW.i)(this, Rw), (0, wW.i)(this, Mw, null)), jR.set(this, ((0, wW.i)(this, ww), (0, wW.i)(this, Cw, void 0))), this._refractionTexture = ((0, wW.i)(this, zC), (0, wW.i)(this, Aw, null)), aR.set(this, ((0, wW.i)(this, bC), (0, wW.i)(this, yC, void 0))), this.ambientColor = ((0, wW.i)(this, Nw), (0, wW.i)(this, ew, new bR.d(0, 0, 0))), this.diffuseColor = ((0, wW.i)(this, Bw), (0, wW.i)(this, tC, new bR.d(1, 1, 1))), this.specularColor = ((0, wW.i)(this, Tw), (0, wW.i)(this, gC, new bR.d(1, 1, 1))), this.emissiveColor = ((0, wW.i)(this, iC), (0, wW.i)(this, Yw, new bR.d(0, 0, 0))), this.specularPower = ((0, wW.i)(this, Jw), (0, wW.i)(this, Pw, 64)), this._useAlphaFromDiffuseTexture = ((0, wW.i)(this, Iw), (0, wW.i)(this, ow, !1)), pW.set(this, ((0, wW.i)(this, lw), (0, wW.i)(this, Fw, void 0))), this._useEmissiveAsIllumination = ((0, wW.i)(this, fw), (0, wW.i)(this, Qw, !1)), hW.set(this, ((0, wW.i)(this, rC), (0, wW.i)(this, cC, void 0))), this._linkEmissiveWithDiffuse = ((0, wW.i)(this, Xw), (0, wW.i)(this, jC, !1)), UW.set(this, ((0, wW.i)(this, kC), (0, wW.i)(this, aC, void 0))), this._useSpecularOverAlpha = ((0, wW.i)(this, sw), (0, wW.i)(this, dw, !1)), EW.set(this, ((0, wW.i)(this, pw), (0, wW.i)(this, hw, void 0))), this._useReflectionOverAlpha = ((0, wW.i)(this, Uw), (0, wW.i)(this, Ew, !1)), VW.set(this, ((0, wW.i)(this, Vw), (0, wW.i)(this, mC, void 0))), this._disableLighting = ((0, wW.i)(this, xC), (0, wW.i)(this, vC, !1)), mR.set(this, ((0, wW.i)(this, Kw), (0, wW.i)(this, uw, void 0))), this._useObjectSpaceNormalMap = ((0, wW.i)(this, Ow), (0, wW.i)(this, nw, !1)), xR.set(this, ((0, wW.i)(this, Gw), (0, wW.i)(this, Lw, void 0))), this._useParallax = ((0, wW.i)(this, Hw), (0, wW.i)(this, Dw, !1)), vR.set(this, ((0, wW.i)(this, qC), (0, wW.i)(this, Zw, void 0))), this._useParallaxOcclusion = ((0, wW.i)(this, Sw), (0, wW.i)(this, WC, !1)), KW.set(this, ((0, wW.i)(this, RC), (0, wW.i)(this, MC, void 0))), this.parallaxScaleBias = ((0, wW.i)(this, wC), (0, wW.i)(this, CC, .05)), this._roughness = ((0, wW.i)(this, zz), (0, wW.i)(this, AC, 0)), uW.set(this, ((0, wW.i)(this, bz), (0, wW.i)(this, yz, void 0))), this.indexOfRefraction = ((0, wW.i)(this, NC), (0, wW.i)(this, eC, .98)), this.invertRefractionY = ((0, wW.i)(this, BC), (0, wW.i)(this, tz, !0)), this.alphaCutOff = ((0, wW.i)(this, TC), (0, wW.i)(this, gz, .4)), this._useLightmapAsShadowmap = ((0, wW.i)(this, iz), (0, wW.i)(this, YC, !1)), OW.set(this, ((0, wW.i)(this, JC), (0, wW.i)(this, PC, void 0))), this._diffuseFresnelParameters = ((0, wW.i)(this, IC), (0, wW.i)(this, oC, void 0)), nW.set(this, ((0, wW.i)(this, lC), (0, wW.i)(this, FC, void 0))), this._opacityFresnelParameters = ((0, wW.i)(this, fC), (0, wW.i)(this, QC, void 0)), GW.set(this, ((0, wW.i)(this, rz), (0, wW.i)(this, cz, void 0))), this._reflectionFresnelParameters = ((0, wW.i)(this, XC), (0, wW.i)(this, jz, void 0)), LW.set(this, ((0, wW.i)(this, kz), (0, wW.i)(this, az, void 0))), this._refractionFresnelParameters = ((0, wW.i)(this, sC), (0, wW.i)(this, dC, void 0)), HW.set(this, ((0, wW.i)(this, pC), (0, wW.i)(this, hC, void 0))), this._emissiveFresnelParameters = ((0, wW.i)(this, UC), (0, wW.i)(this, EC, void 0)), DW.set(this, ((0, wW.i)(this, VC), (0, wW.i)(this, mz, void 0))), this._useReflectionFresnelFromSpecular = ((0, wW.i)(this, xz), (0, wW.i)(this, vz, !1)), qR.set(this, ((0, wW.i)(this, KC), (0, wW.i)(this, uC, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, wW.i)(this, OC), (0, wW.i)(this, nC, !1)), ZW.set(this, ((0, wW.i)(this, GC), (0, wW.i)(this, LC, void 0))), this._maxSimultaneousLights = ((0, wW.i)(this, HC), (0, wW.i)(this, DC, 4)), SW.set(this, ((0, wW.i)(this, qz), (0, wW.i)(this, ZC, void 0))), this._invertNormalMapX = ((0, wW.i)(this, SC), (0, wW.i)(this, Wz, !1)), WR.set(this, ((0, wW.i)(this, Rz), (0, wW.i)(this, Mz, void 0))), this._invertNormalMapY = ((0, wW.i)(this, wz), (0, wW.i)(this, Cz, !1)), RR.set(this, ((0, wW.i)(this, zA), (0, wW.i)(this, Az, void 0))), this._twoSidedLighting = ((0, wW.i)(this, bA), (0, wW.i)(this, yA, !1)), MR.set(this, ((0, wW.i)(this, Nz), (0, wW.i)(this, ez, void 0))), this._applyDecalMapAfterDetailMap = ((0, wW.i)(this, Bz), (0, wW.i)(this, tA, !1)), wR.set(this, ((0, wW.i)(this, Tz), (0, wW.i)(this, gA, void 0))), this._vertexPullingMetadata = ((0, wW.i)(this, iA), null), this._renderTargets = new zR.i(16), this._globalAmbientColor = new bR.d(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new JW.c(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new NW.d, this.getRenderTargetTextures = () => (this._renderTargets.reset(), WW.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), WW.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
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
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === tR.e.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== tR.e.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(RW, MW) {
            let wW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const CW = MW._drawWrapper;
            if (CW.effect && this.isFrozen && CW._wasPreviouslyReady && CW._wasPreviouslyUsingInstances === wW) return !0;
            MW.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), MW.materialDefines = new sW(this._eventInfo.defineNames));
            const zR = this.QRW(),
              AW = MW.materialDefines;
            if (this._isReadyForSubMesh(MW)) return !0;
            const bR = zR.mC();
            if (AW._needNormals = (0, oW.ab)(zR, RW, AW, !0, this._maxSimultaneousLights, this._disableLighting), !(0, oW.d)(zR, RW, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, oW.fb)(zR, AW);
            const eW = this.needAlphaBlendingForMesh(RW) && this.QRW().useOrderIndependentTransparency;
            if ((0, oW.lb)(zR, AW, this.canRenderToMRT && !eW), (0, oW.ib)(zR, AW, eW), fW.d.PrepareDefines(bR.currentRenderPassId, RW, AW), AW._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, AW._needUVs = !1;
              for (let WW = 1; WW <= 6; ++WW) AW["MAINUV" + WW] = !1;
              if (zR.texturesEnabled) {
                if (AW.DIFFUSEDIRECTUV = 0, AW.BUMPDIRECTUV = 0, AW.AMBIENTDIRECTUV = 0, AW.OPACITYDIRECTUV = 0, AW.EMISSIVEDIRECTUV = 0, AW.SPECULARDIRECTUV = 0, AW.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && WW.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, oW.cb)(this._diffuseTexture, AW, "DIFFUSE")
                } else AW.DIFFUSE = !1;
                if (this._ambientTexture && WW.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, oW.cb)(this._ambientTexture, AW, "AMBIENT")
                } else AW.AMBIENT = !1;
                if (this._opacityTexture && WW.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, oW.cb)(this._opacityTexture, AW, "OPACITY"), AW.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else AW.OPACITY = !1;
                if (this._reflectionTexture && WW.ReflectionTextureEnabled ? (AW.ROUGHNESS = this._roughness > 0, AW.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (AW.ROUGHNESS = !1, AW.REFLECTIONOVERALPHA = !1), !(0, oW._)(zR, this._reflectionTexture, AW)) return !1;
                if (this._emissiveTexture && WW.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, oW.cb)(this._emissiveTexture, AW, "EMISSIVE")
                } else AW.EMISSIVE = !1;
                if (this._lightmapTexture && WW.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, oW.cb)(this._lightmapTexture, AW, "LIGHTMAP"), AW.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, AW.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else AW.LIGHTMAP = !1;
                if (this._specularTexture && WW.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, oW.cb)(this._specularTexture, AW, "SPECULAR"), AW.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else AW.SPECULAR = !1;
                if (zR.mC().getCaps().standardDerivatives && this._bumpTexture && WW.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, oW.cb)(this._bumpTexture, AW, "BUMP"), AW.PARALLAX = this._useParallax, AW.PARALLAX_RHS = zR.useRightHandedSystem, AW.PARALLAXOCCLUSION = this._useParallaxOcclusion, AW.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else AW.BUMP = !1, AW.PARALLAX = !1, AW.PARALLAX_RHS = !1, AW.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && WW.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  AW._needUVs = !0, AW.REFRACTION = !0, AW.REFRACTIONMAP_3D = this._refractionTexture.isCube, AW.RGBDREFRACTION = this._refractionTexture.isRGBD, AW.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else AW.REFRACTION = !1;
                AW.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else AW.DIFFUSE = !1, AW.AMBIENT = !1, AW.OPACITY = !1, AW.REFLECTION = !1, AW.EMISSIVE = !1, AW.LIGHTMAP = !1, AW.BUMP = !1, AW.REFRACTION = !1;
              AW.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), AW.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, AW.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, AW.SPECULAROVERALPHA = this._useSpecularOverAlpha, AW.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, AW.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, AW.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(RW), AW.TEXTURE_REPETITION_MODE = bR.version > 1 || bR.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = AW, this._eventInfo.subMesh = MW, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (AW._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(AW), AW.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, AW.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (AW._areFresnelDirty && (WW.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (AW.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, AW.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, AW.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, AW.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, AW.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, AW.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, AW._needNormals = !0, AW.FRESNEL = !0) : AW.FRESNEL = !1), AW.AREALIGHTUSED || AW.CLUSTLIGHT_BATCH)
              for (let WW = 0; WW < RW.lightSources.length; WW++)
                if (!RW.lightSources[WW]._isReady()) return !1;
            (0, oW.eb)(RW, zR, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(RW), AW, this._applyDecalMapAfterDetailMap, this._useVertexPulling, MW.getRenderingMesh(), this._isVertexOutputInvariant), (0, oW.X)(zR, bR, this, AW, wW, null, MW.getRenderingMesh().hasThinInstances), this._eventInfo.defines = AW, this._eventInfo.mesh = RW, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, oW.V)(RW, AW, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let tR = !1;
            if (AW.isDirty) {
              const wW = AW._areLightsDisposed;
              AW.markAsProcessed();
              const CW = new YW.c;
              AW.REFLECTION && CW.addFallback(0, "REFLECTION"), AW.SPECULAR && CW.addFallback(0, "SPECULAR"), AW.BUMP && CW.addFallback(0, "BUMP"), AW.PARALLAX && CW.addFallback(1, "PARALLAX"), AW.PARALLAX_RHS && CW.addFallback(1, "PARALLAX_RHS"), AW.PARALLAXOCCLUSION && CW.addFallback(0, "PARALLAXOCCLUSION"), AW.SPECULAROVERALPHA && CW.addFallback(0, "SPECULAROVERALPHA"), AW.FOG && CW.addFallback(1, "FOG"), AW.POINTSIZE && CW.addFallback(0, "POINTSIZE"), AW.LOGARITHMICDEPTH && CW.addFallback(0, "LOGARITHMICDEPTH"), (0, oW.H)(AW, CW, this._maxSimultaneousLights), AW.SPECULARTERM && CW.addFallback(0, "SPECULARTERM"), AW.DIFFUSEFRESNEL && CW.addFallback(1, "DIFFUSEFRESNEL"), AW.OPACITYFRESNEL && CW.addFallback(2, "OPACITYFRESNEL"), AW.REFLECTIONFRESNEL && CW.addFallback(3, "REFLECTIONFRESNEL"), AW.EMISSIVEFRESNEL && CW.addFallback(4, "EMISSIVEFRESNEL"), AW.FRESNEL && CW.addFallback(4, "FRESNEL"), AW.MULTIVIEW && CW.addFallback(0, "MULTIVIEW");
              const eW = [yR.j.PositionKind];
              AW.NORMAL && eW.push(yR.j.NormalKind), AW.TANGENT && eW.push(yR.j.TangentKind);
              for (let WW = 1; WW <= 6; ++WW) AW["UV" + WW] && eW.push(`uv${1===WW?"":WW}`);
              AW.VERTEXCOLOR && eW.push(yR.j.ColorKind), (0, oW.K)(eW, RW, AW, CW), (0, oW.O)(eW, AW), (0, oW.S)(eW, RW, AW), (0, oW.J)(eW, RW, AW);
              let TW = "default";
              const gR = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                iR = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, oW.pb)(gR, iR, !1);
              const JW = ["Material", "Scene", "Mesh"],
                lW = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: AW.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = CW, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = AW, this._eventInfo.uniforms = gR, this._eventInfo.attributes = eW, this._eventInfo.samplers = iR, this._eventInfo.uniformBuffersNames = JW, this._eventInfo.customCode = void 0, this._eventInfo.mesh = RW, this._eventInfo.indexParameters = lW, this._callbackPluginEventGeneric(128, this._eventInfo), fW.d.AddUniformsAndSamplers(gR, iR), NW.d.AddUniforms(gR), NW.d.AddSamplers(iR), BW.b && (BW.b.PrepareUniforms(gR, AW), BW.b.PrepareSamplers(iR, AW)), (0, oW.rb)({
                  uniformsNames: gR,
                  uniformBuffersNames: JW,
                  samplers: iR,
                  defines: AW,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, PW.c)(gR), this._useVertexPulling) {
                const WW = MW.getRenderingMesh(),
                  RW = WW?.geometry;
                RW && (this._vertexPullingMetadata = (0, IW.e)(RW), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((WW, RW) => {
                  gR.push(`vp_${RW}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const FW = {};
              this.customShaderNameResolve && (TW = this.customShaderNameResolve(TW, gR, JW, iR, AW, eW, FW));
              const QW = AW.toString(),
                rR = MW.effect,
                cR = zR.mC().createEffect(TW, {
                  attributes: eW,
                  uniformsNames: gR,
                  uniformBuffersNames: JW,
                  samplers: iR,
                  defines: QW,
                  fallbacks: CW,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: lW,
                  processFinalCode: FW.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: AW.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: WW._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, bR);
              if (this._eventInfo.customCode = void 0, cR)
                if (this._onEffectCreatedObservable && (kR.effect = cR, kR.subMesh = MW, this._onEffectCreatedObservable.notifyObservers(kR)), this.allowShaderHotSwapping && rR && !cR.isReady()) {
                  if (AW.markAsUnprocessed(), tR = this.isFrozen, wW) return AW._areLightsDisposed = !0, !1
                } else zR.resetCachedMaterial(), MW.setEffect(cR, AW, this._materialContext)
            }
            return !(!MW.effect || !MW.effect.isReady()) && (AW._renderId = zR.getRenderId(), CW._wasPreviouslyReady = !tR, CW._wasPreviouslyUsingInstances = wW, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const WW = this._uniformBuffer;
            WW.addUniform("diffuseLeftColor", 4), WW.addUniform("diffuseRightColor", 4), WW.addUniform("opacityParts", 4), WW.addUniform("reflectionLeftColor", 4), WW.addUniform("reflectionRightColor", 4), WW.addUniform("refractionLeftColor", 4), WW.addUniform("refractionRightColor", 4), WW.addUniform("emissiveLeftColor", 4), WW.addUniform("emissiveRightColor", 4), WW.addUniform("vDiffuseInfos", 2), WW.addUniform("vAmbientInfos", 2), WW.addUniform("vOpacityInfos", 2), WW.addUniform("vEmissiveInfos", 2), WW.addUniform("vLightmapInfos", 2), WW.addUniform("vSpecularInfos", 2), WW.addUniform("vBumpInfos", 3), WW.addUniform("diffuseMatrix", 16), WW.addUniform("ambientMatrix", 16), WW.addUniform("opacityMatrix", 16), WW.addUniform("emissiveMatrix", 16), WW.addUniform("lightmapMatrix", 16), WW.addUniform("specularMatrix", 16), WW.addUniform("bumpMatrix", 16), WW.addUniform("vTangentSpaceParams", 2), WW.addUniform("pointSize", 1), WW.addUniform("alphaCutOff", 1), WW.addUniform("refractionMatrix", 16), WW.addUniform("vRefractionInfos", 4), WW.addUniform("vRefractionPosition", 3), WW.addUniform("vRefractionSize", 3), WW.addUniform("vSpecularColor", 4), WW.addUniform("vEmissiveColor", 3), WW.addUniform("vDiffuseColor", 4), WW.addUniform("vAmbientColor", 3), WW.addUniform("cameraInfo", 4), WW.addUniform("vTextureRepetitionHexTilingParams", 4), (0, oW.ob)(WW, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(RW, MW, wW) {
            const CW = this.QRW(),
              zR = wW.materialDefines;
            if (!zR) return;
            const yR = wW.effect;
            if (!yR) return;
            this._activeEffect = yR, MW.getMeshUniformBuffer().bindToEffect(yR, "Mesh"), MW.transferToEffect(RW), this._uniformBuffer.bindToEffect(yR, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, CW, MW, RW, this.isFrozen), fW.d.Bind(CW.mC().currentRenderPassId, this._activeEffect, MW, RW, this);
            const NW = CW.activeCamera;
            NW ? this._uniformBuffer.updateFloat4("cameraInfo", NW.minZ, NW.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const eW = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", eW[0], eW[1], eW[2], eW[3]), this._eventInfo.subMesh = wW, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), zR.OBJECTSPACE_NORMALMAP && (RW.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const BW = this._mustRebind(CW, yR, wW, MW.visibility),
              tR = CW.mC()._features.needToAlwaysBindUniformBuffers;
            (0, oW.e)(MW, yR), this._vertexPullingMetadata && (0, IW.b)(yR, this._vertexPullingMetadata);
            const TW = this._uniformBuffer;
            if (BW) {
              if (this.bindViewProjection(yR), !TW.useUbo || !this.isFrozen || !TW.isSync || wW._drawWrapper._forceRebindOnNextCall) {
                if (WW.FresnelEnabled && zR.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (TW.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), TW.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const WW = bR.n.Color3[0];
                    WW.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), TW.updateColor4("opacityParts", WW, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (TW.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), TW.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (TW.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), TW.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (TW.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), TW.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (zR.ALPHATEST && TW.updateFloat("alphaCutOff", this.alphaCutOff), CW.texturesEnabled && (this._diffuseTexture && WW.DiffuseTextureEnabled && (TW.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, oW.D)(this._diffuseTexture, TW, "diffuse")), this._ambientTexture && WW.AmbientTextureEnabled && (TW.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, oW.D)(this._ambientTexture, TW, "ambient")), this._opacityTexture && WW.OpacityTextureEnabled && (TW.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, oW.D)(this._opacityTexture, TW, "opacity")), (0, oW.j)(CW, zR, TW, bR.d.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && WW.ReflectionTextureEnabled || TW.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && WW.EmissiveTextureEnabled && (TW.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, oW.D)(this._emissiveTexture, TW, "emissive")), this._lightmapTexture && WW.LightmapTextureEnabled && (TW.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, oW.D)(this._lightmapTexture, TW, "lightmap")), this._specularTexture && WW.SpecularTextureEnabled && (TW.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, oW.D)(this._specularTexture, TW, "specular")), this._bumpTexture && CW.mC().getCaps().standardDerivatives && WW.BumpTextureEnabled && (TW.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, oW.D)(this._bumpTexture, TW, "bump"), CW._mirroredCameraPosition ? TW.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : TW.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && WW.RefractionTextureEnabled)) {
                  let WW = 1;
                  if (this._refractionTexture.isCube || (TW.aAW("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (WW = this._refractionTexture.depth)), TW.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, WW, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const WW = this._refractionTexture;
                    TW.updateVector3("vRefractionPosition", WW.boundingBoxPosition), TW.updateVector3("vRefractionSize", WW.boundingBoxSize)
                  }
                }
                this.pointsCloud && TW.updateFloat("pointSize", this.pointSize), TW.updateColor4("vSpecularColor", this.specularColor, this.specularPower), TW.updateColor3("vEmissiveColor", WW.EmissiveTextureEnabled ? this.emissiveColor : bR.d.BlackReadOnly), TW.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), CW.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), TW.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              CW.texturesEnabled && (this._diffuseTexture && WW.DiffuseTextureEnabled && yR.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && WW.AmbientTextureEnabled && yR.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && WW.OpacityTextureEnabled && yR.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && WW.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? yR.setTexture("reflectionCubeSampler", this._reflectionTexture) : yR.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && WW.EmissiveTextureEnabled && yR.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && WW.LightmapTextureEnabled && yR.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && WW.SpecularTextureEnabled && yR.setTexture("specularSampler", this._specularTexture), this._bumpTexture && CW.mC().getCaps().standardDerivatives && WW.BumpTextureEnabled && yR.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && WW.RefractionTextureEnabled && (this._refractionTexture.isCube ? yR.setTexture("refractionCubeSampler", this._refractionTexture) : yR.setTexture("refraction2DSampler", this._refractionTexture))), this.QRW().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(MW) && this.QRW().depthPeelingRenderer.bind(yR), this._eventInfo.subMesh = wW, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, PW.d)(yR, this, CW), this.bindEyePosition(yR)
            } else tR && (this._needToBindSceneUbo = !0);
            !BW && this.isFrozen && !tR || !CW.lightsEnabled || this._disableLighting || (0, oW.r)(CW, MW, yR, zR, this._maxSimultaneousLights), !BW && this.isFrozen || ((CW.fogEnabled && MW.applyFog && CW.fogMode !== AW.i.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || MW.receiveShadows || zR.PREPASS || zR.CLUSTLIGHT_BATCH) && this.bindView(yR), (0, oW.i)(CW, MW, yR), zR.NUM_MORPH_INFLUENCERS && (0, oW.x)(MW, yR), zR.BAKED_VERTEX_ANIMATION_TEXTURE && MW.bakedVertexAnimationManager?.bind(yR, zR.INSTANCES), this.useLogarithmicDepth && (0, oW.t)(zR, yR, CW), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(MW, this._activeEffect, wW), TW.update()
          }
          _canBindRunFollower(RW, MW, wW, CW, zR) {
            const AW = RW.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === WW.prototype.isReadyForSubMesh && this.bindForSubMesh === WW.prototype.bindForSubMesh && this._mustRebind === gR.c.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !MW._features.needToAlwaysBindUniformBuffers && !(AW && AW.enabled && AW.currentRTisSceneRT) && !fW.d._Configurations[MW.currentRenderPassId] && !CW.materialDefines?.OBJECTSPACE_NORMALMAP && !wW.skeleton && !zR._bonesComputationForcedToCPU
          }
          _bindRunFollower(WW, RW, MW, wW) {
            this._activeEffect = wW, RW.getMeshUniformBuffer().bindToEffect(wW, "Mesh"), RW.transferToEffect(WW);
            const CW = this._uniformBuffer;
            CW.bindToEffect(wW, "Material");
            const zR = this._scene.activeCamera;
            zR ? CW.updateFloat4("cameraInfo", zR.minZ, zR.maxZ, 0, 0) : CW.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const AW = this.textureRepetitionHexTilingParams;
            CW.updateFloat4("vTextureRepetitionHexTilingParams", AW[0], AW[1], AW[2], AW[3]), this._afterBind(RW, wW, MW), CW.update()
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
          dispose(WW, RW) {
            RW && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(WW, RW)
          }
          clone(RW) {
            let MW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const CW = lW.d.Clone((() => new WW(RW, this.QRW())), this, {
              cloneTexturesOnlyOnce: MW
            });
            return CW.name = RW, CW.id = RW, this.stencil.copyTo(CW.stencil), this._clonePlugins(CW, wW), CW
          }
          static Parse(RW, MW, wW) {
            const CW = lW.d.Parse((() => new WW(RW.name, MW)), RW, MW, wW);
            return RW.stencil && CW.stencil.parse(RW.stencil, MW, wW), tR.e._ParsePlugins(RW, CW, MW, wW), CW
          }
          static get DiffuseTextureEnabled() {
            return iR.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(WW) {
            iR.e.DiffuseTextureEnabled = WW
          }
          static get DetailTextureEnabled() {
            return iR.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(WW) {
            iR.e.DetailTextureEnabled = WW
          }
          static get AmbientTextureEnabled() {
            return iR.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(WW) {
            iR.e.AmbientTextureEnabled = WW
          }
          static get OpacityTextureEnabled() {
            return iR.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(WW) {
            iR.e.OpacityTextureEnabled = WW
          }
          static get ReflectionTextureEnabled() {
            return iR.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(WW) {
            iR.e.ReflectionTextureEnabled = WW
          }
          static get EmissiveTextureEnabled() {
            return iR.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(WW) {
            iR.e.EmissiveTextureEnabled = WW
          }
          static get SpecularTextureEnabled() {
            return iR.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(WW) {
            iR.e.SpecularTextureEnabled = WW
          }
          static get BumpTextureEnabled() {
            return iR.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(WW) {
            iR.e.BumpTextureEnabled = WW
          }
          static get LightmapTextureEnabled() {
            return iR.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(WW) {
            iR.e.LightmapTextureEnabled = WW
          }
          static get RefractionTextureEnabled() {
            return iR.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(WW) {
            iR.e.RefractionTextureEnabled = WW
          }
          static get ColorGradingTextureEnabled() {
            return iR.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(WW) {
            iR.e.ColorGradingTextureEnabled = WW
          }
          static get FresnelEnabled() {
            return iR.e.FresnelEnabled
          }
          static set FresnelEnabled(WW) {
            iR.e.FresnelEnabled = WW
          }
        }, RW = new WeakMap, eW = new WeakMap, TW = new WeakMap, QW = new WeakMap, rR = new WeakMap, cR = new WeakMap, XW = new WeakMap, jR = new WeakMap, aR = new WeakMap, pW = new WeakMap, hW = new WeakMap, UW = new WeakMap, EW = new WeakMap, VW = new WeakMap, mR = new WeakMap, xR = new WeakMap, vR = new WeakMap, KW = new WeakMap, uW = new WeakMap, OW = new WeakMap, nW = new WeakMap, GW = new WeakMap, LW = new WeakMap, HW = new WeakMap, DW = new WeakMap, qR = new WeakMap, ZW = new WeakMap, SW = new WeakMap, WR = new WeakMap, RR = new WeakMap, MR = new WeakMap, wR = new WeakMap, (() => {
          const RW = "function" === typeof Symbol && Symbol.metadata ? Object.create(rw[Symbol.metadata] ?? null) : void 0;
          CR = [(0, CW.y)("diffuseTexture")], zM = [(0, CW.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], AR = [(0, CW.y)("ambientTexture")], bM = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], yM = [(0, CW.y)("opacityTexture")], NR = [(0, CW.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], eR = [(0, CW.y)("reflectionTexture")], BR = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], tM = [(0, CW.y)("emissiveTexture")], TR = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], gM = [(0, CW.y)("specularTexture")], iM = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], YR = [(0, CW.y)("bumpTexture")], JR = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], PR = [(0, CW.y)("lightmapTexture")], IR = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], oR = [(0, CW.y)("refractionTexture")], lR = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], FR = [(0, CW.m)("ambient")], fR = [(0, CW.m)("diffuse")], QR = [(0, CW.m)("specular")], rM = [(0, CW.m)("emissive")], cM = [(0, CW.D)()], XR = [(0, CW.D)("useAlphaFromDiffuseTexture")], jM = [() => ({
            init(WW) {
              return void 0 === WW && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = WW), WW
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(WW) {
              this._useAlphaFromDiffuseTexture = WW
            }
          })], kM = [(0, CW.D)("useEmissiveAsIllumination")], aM = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], sR = [(0, CW.D)("linkEmissiveWithDiffuse")], dR = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], pR = [(0, CW.D)("useSpecularOverAlpha")], hR = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], UR = [(0, CW.D)("useReflectionOverAlpha")], ER = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], VR = [(0, CW.D)("disableLighting")], mM = [(0, CW.h)("_markAllSubMeshesAsLightsDirty")], xM = [(0, CW.D)("useObjectSpaceNormalMap")], vM = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], KR = [(0, CW.D)("useParallax")], uR = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], OR = [(0, CW.D)("useParallaxOcclusion")], nR = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], GR = [(0, CW.D)()], LR = [(0, CW.D)("roughness")], HR = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], DR = [(0, CW.D)()], qM = [(0, CW.D)()], ZR = [(0, CW.D)()], SR = [(0, CW.D)("useLightmapAsShadowmap")], WM = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], RM = [(0, CW.q)("diffuseFresnelParameters")], MM = [(0, CW.h)("_markAllSubMeshesAsFresnelDirty")], wM = [(0, CW.q)("opacityFresnelParameters")], CM = [(0, CW.h)("_markAllSubMeshesAsFresnelAndMiscDirty")], zw = [(0, CW.q)("reflectionFresnelParameters")], AM = [(0, CW.h)("_markAllSubMeshesAsFresnelDirty")], bw = [(0, CW.q)("refractionFresnelParameters")], yw = [(0, CW.h)("_markAllSubMeshesAsFresnelDirty")], NM = [(0, CW.q)("emissiveFresnelParameters")], eM = [(0, CW.h)("_markAllSubMeshesAsFresnelDirty")], BM = [(0, CW.D)("useReflectionFresnelFromSpecular")], tw = [(0, CW.h)("_markAllSubMeshesAsFresnelDirty")], TM = [(0, CW.D)("useGlossinessFromSpecularMapAlpha")], gw = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], iw = [(0, CW.D)("maxSimultaneousLights")], YM = [(0, CW.h)("_markAllSubMeshesAsLightsDirty")], JM = [(0, CW.D)("invertNormalMapX")], PM = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], IM = [(0, CW.D)("invertNormalMapY")], oM = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], lM = [(0, CW.D)("twoSidedLighting")], FM = [(0, CW.h)("_markAllSubMeshesAsTexturesDirty")], fM = [(0, CW.D)("applyDecalMapAfterDetailMap")], QM = [(0, CW.h)("_markAllSubMeshesAsMiscDirty")], (0, wW.e)(WW, null, zM, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "diffuseTexture" in WW,
              get: WW => WW.diffuseTexture,
              set: (WW, RW) => {
                WW.diffuseTexture = RW
              }
            },
            metadata: RW
          }, jw, kw), (0, wW.e)(WW, null, bM, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "ambientTexture" in WW,
              get: WW => WW.ambientTexture,
              set: (WW, RW) => {
                WW.ambientTexture = RW
              }
            },
            metadata: RW
          }, dM, pM), (0, wW.e)(WW, null, NR, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "opacityTexture" in WW,
              get: WW => WW.opacityTexture,
              set: (WW, RW) => {
                WW.opacityTexture = RW
              }
            },
            metadata: RW
          }, EM, VM), (0, wW.e)(WW, null, BR, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "reflectionTexture" in WW,
              get: WW => WW.reflectionTexture,
              set: (WW, RW) => {
                WW.reflectionTexture = RW
              }
            },
            metadata: RW
          }, vw, KM), (0, wW.e)(WW, null, TR, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "emissiveTexture" in WW,
              get: WW => WW.emissiveTexture,
              set: (WW, RW) => {
                WW.emissiveTexture = RW
              }
            },
            metadata: RW
          }, nM, GM), (0, wW.e)(WW, null, iM, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularTexture" in WW,
              get: WW => WW.specularTexture,
              set: (WW, RW) => {
                WW.specularTexture = RW
              }
            },
            metadata: RW
          }, DM, qw), (0, wW.e)(WW, null, JR, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "bumpTexture" in WW,
              get: WW => WW.bumpTexture,
              set: (WW, RW) => {
                WW.bumpTexture = RW
              }
            },
            metadata: RW
          }, Ww, Rw), (0, wW.e)(WW, null, IR, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "lightmapTexture" in WW,
              get: WW => WW.lightmapTexture,
              set: (WW, RW) => {
                WW.lightmapTexture = RW
              }
            },
            metadata: RW
          }, Cw, zC), (0, wW.e)(WW, null, lR, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "refractionTexture" in WW,
              get: WW => WW.refractionTexture,
              set: (WW, RW) => {
                WW.refractionTexture = RW
              }
            },
            metadata: RW
          }, yC, Nw), (0, wW.e)(WW, null, jM, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "useAlphaFromDiffuseTexture" in WW,
              get: WW => WW.useAlphaFromDiffuseTexture,
              set: (WW, RW) => {
                WW.useAlphaFromDiffuseTexture = RW
              }
            },
            metadata: RW
          }, Fw, fw), (0, wW.e)(WW, null, aM, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: WW => "useEmissiveAsIllumination" in WW,
              get: WW => WW.useEmissiveAsIllumination,
              set: (WW, RW) => {
                WW.useEmissiveAsIllumination = RW
              }
            },
            metadata: RW
          }, cC, Xw), (0, wW.e)(WW, null, dR, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: WW => "linkEmissiveWithDiffuse" in WW,
              get: WW => WW.linkEmissiveWithDiffuse,
              set: (WW, RW) => {
                WW.linkEmissiveWithDiffuse = RW
              }
            },
            metadata: RW
          }, aC, sw), (0, wW.e)(WW, null, hR, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: WW => "useSpecularOverAlpha" in WW,
              get: WW => WW.useSpecularOverAlpha,
              set: (WW, RW) => {
                WW.useSpecularOverAlpha = RW
              }
            },
            metadata: RW
          }, hw, Uw), (0, wW.e)(WW, null, ER, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: WW => "useReflectionOverAlpha" in WW,
              get: WW => WW.useReflectionOverAlpha,
              set: (WW, RW) => {
                WW.useReflectionOverAlpha = RW
              }
            },
            metadata: RW
          }, mC, xC), (0, wW.e)(WW, null, mM, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: WW => "disableLighting" in WW,
              get: WW => WW.disableLighting,
              set: (WW, RW) => {
                WW.disableLighting = RW
              }
            },
            metadata: RW
          }, uw, Ow), (0, wW.e)(WW, null, vM, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: WW => "useObjectSpaceNormalMap" in WW,
              get: WW => WW.useObjectSpaceNormalMap,
              set: (WW, RW) => {
                WW.useObjectSpaceNormalMap = RW
              }
            },
            metadata: RW
          }, Lw, Hw), (0, wW.e)(WW, null, uR, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: WW => "useParallax" in WW,
              get: WW => WW.useParallax,
              set: (WW, RW) => {
                WW.useParallax = RW
              }
            },
            metadata: RW
          }, Zw, Sw), (0, wW.e)(WW, null, nR, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: WW => "useParallaxOcclusion" in WW,
              get: WW => WW.useParallaxOcclusion,
              set: (WW, RW) => {
                WW.useParallaxOcclusion = RW
              }
            },
            metadata: RW
          }, MC, wC), (0, wW.e)(WW, null, HR, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: WW => "roughness" in WW,
              get: WW => WW.roughness,
              set: (WW, RW) => {
                WW.roughness = RW
              }
            },
            metadata: RW
          }, yz, NC), (0, wW.e)(WW, null, WM, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: WW => "useLightmapAsShadowmap" in WW,
              get: WW => WW.useLightmapAsShadowmap,
              set: (WW, RW) => {
                WW.useLightmapAsShadowmap = RW
              }
            },
            metadata: RW
          }, PC, IC), (0, wW.e)(WW, null, MM, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "diffuseFresnelParameters" in WW,
              get: WW => WW.diffuseFresnelParameters,
              set: (WW, RW) => {
                WW.diffuseFresnelParameters = RW
              }
            },
            metadata: RW
          }, FC, fC), (0, wW.e)(WW, null, CM, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "opacityFresnelParameters" in WW,
              get: WW => WW.opacityFresnelParameters,
              set: (WW, RW) => {
                WW.opacityFresnelParameters = RW
              }
            },
            metadata: RW
          }, cz, XC), (0, wW.e)(WW, null, AM, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "reflectionFresnelParameters" in WW,
              get: WW => WW.reflectionFresnelParameters,
              set: (WW, RW) => {
                WW.reflectionFresnelParameters = RW
              }
            },
            metadata: RW
          }, az, sC), (0, wW.e)(WW, null, yw, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "refractionFresnelParameters" in WW,
              get: WW => WW.refractionFresnelParameters,
              set: (WW, RW) => {
                WW.refractionFresnelParameters = RW
              }
            },
            metadata: RW
          }, hC, UC), (0, wW.e)(WW, null, eM, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "emissiveFresnelParameters" in WW,
              get: WW => WW.emissiveFresnelParameters,
              set: (WW, RW) => {
                WW.emissiveFresnelParameters = RW
              }
            },
            metadata: RW
          }, mz, xz), (0, wW.e)(WW, null, tw, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: WW => "useReflectionFresnelFromSpecular" in WW,
              get: WW => WW.useReflectionFresnelFromSpecular,
              set: (WW, RW) => {
                WW.useReflectionFresnelFromSpecular = RW
              }
            },
            metadata: RW
          }, uC, OC), (0, wW.e)(WW, null, gw, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: WW => "useGlossinessFromSpecularMapAlpha" in WW,
              get: WW => WW.useGlossinessFromSpecularMapAlpha,
              set: (WW, RW) => {
                WW.useGlossinessFromSpecularMapAlpha = RW
              }
            },
            metadata: RW
          }, LC, HC), (0, wW.e)(WW, null, YM, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: WW => "maxSimultaneousLights" in WW,
              get: WW => WW.maxSimultaneousLights,
              set: (WW, RW) => {
                WW.maxSimultaneousLights = RW
              }
            },
            metadata: RW
          }, ZC, SC), (0, wW.e)(WW, null, PM, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: WW => "invertNormalMapX" in WW,
              get: WW => WW.invertNormalMapX,
              set: (WW, RW) => {
                WW.invertNormalMapX = RW
              }
            },
            metadata: RW
          }, Mz, wz), (0, wW.e)(WW, null, oM, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: WW => "invertNormalMapY" in WW,
              get: WW => WW.invertNormalMapY,
              set: (WW, RW) => {
                WW.invertNormalMapY = RW
              }
            },
            metadata: RW
          }, Az, bA), (0, wW.e)(WW, null, FM, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: WW => "twoSidedLighting" in WW,
              get: WW => WW.twoSidedLighting,
              set: (WW, RW) => {
                WW.twoSidedLighting = RW
              }
            },
            metadata: RW
          }, ez, Bz), (0, wW.e)(WW, null, QM, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: WW => "applyDecalMapAfterDetailMap" in WW,
              get: WW => WW.applyDecalMapAfterDetailMap,
              set: (WW, RW) => {
                WW.applyDecalMapAfterDetailMap = RW
              }
            },
            metadata: RW
          }, gA, iA), (0, wW.e)(null, null, CR, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_diffuseTexture" in WW,
              get: WW => WW._diffuseTexture,
              set: (WW, RW) => {
                WW._diffuseTexture = RW
              }
            },
            metadata: RW
          }, cwW, XM), (0, wW.e)(null, null, AR, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_ambientTexture" in WW,
              get: WW => WW._ambientTexture,
              set: (WW, RW) => {
                WW._ambientTexture = RW
              }
            },
            metadata: RW
          }, aw, sM), (0, wW.e)(null, null, yM, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_opacityTexture" in WW,
              get: WW => WW._opacityTexture,
              set: (WW, RW) => {
                WW._opacityTexture = RW
              }
            },
            metadata: RW
          }, hM, UM), (0, wW.e)(null, null, eR, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_reflectionTexture" in WW,
              get: WW => WW._reflectionTexture,
              set: (WW, RW) => {
                WW._reflectionTexture = RW
              }
            },
            metadata: RW
          }, mw, xw), (0, wW.e)(null, null, tM, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_emissiveTexture" in WW,
              get: WW => WW._emissiveTexture,
              set: (WW, RW) => {
                WW._emissiveTexture = RW
              }
            },
            metadata: RW
          }, uM, OM), (0, wW.e)(null, null, gM, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_specularTexture" in WW,
              get: WW => WW._specularTexture,
              set: (WW, RW) => {
                WW._specularTexture = RW
              }
            },
            metadata: RW
          }, LM, HM), (0, wW.e)(null, null, YR, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_bumpTexture" in WW,
              get: WW => WW._bumpTexture,
              set: (WW, RW) => {
                WW._bumpTexture = RW
              }
            },
            metadata: RW
          }, ZM, SM), (0, wW.e)(null, null, PR, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_lightmapTexture" in WW,
              get: WW => WW._lightmapTexture,
              set: (WW, RW) => {
                WW._lightmapTexture = RW
              }
            },
            metadata: RW
          }, Mw, ww), (0, wW.e)(null, null, oR, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_refractionTexture" in WW,
              get: WW => WW._refractionTexture,
              set: (WW, RW) => {
                WW._refractionTexture = RW
              }
            },
            metadata: RW
          }, Aw, bC), (0, wW.e)(null, null, FR, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "ambientColor" in WW,
              get: WW => WW.ambientColor,
              set: (WW, RW) => {
                WW.ambientColor = RW
              }
            },
            metadata: RW
          }, ew, Bw), (0, wW.e)(null, null, fR, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "diffuseColor" in WW,
              get: WW => WW.diffuseColor,
              set: (WW, RW) => {
                WW.diffuseColor = RW
              }
            },
            metadata: RW
          }, tC, Tw), (0, wW.e)(null, null, QR, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularColor" in WW,
              get: WW => WW.specularColor,
              set: (WW, RW) => {
                WW.specularColor = RW
              }
            },
            metadata: RW
          }, gC, iC), (0, wW.e)(null, null, rM, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: WW => "emissiveColor" in WW,
              get: WW => WW.emissiveColor,
              set: (WW, RW) => {
                WW.emissiveColor = RW
              }
            },
            metadata: RW
          }, Yw, Jw), (0, wW.e)(null, null, cM, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: WW => "specularPower" in WW,
              get: WW => WW.specularPower,
              set: (WW, RW) => {
                WW.specularPower = RW
              }
            },
            metadata: RW
          }, Pw, Iw), (0, wW.e)(null, null, XR, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useAlphaFromDiffuseTexture" in WW,
              get: WW => WW._useAlphaFromDiffuseTexture,
              set: (WW, RW) => {
                WW._useAlphaFromDiffuseTexture = RW
              }
            },
            metadata: RW
          }, ow, lw), (0, wW.e)(null, null, kM, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useEmissiveAsIllumination" in WW,
              get: WW => WW._useEmissiveAsIllumination,
              set: (WW, RW) => {
                WW._useEmissiveAsIllumination = RW
              }
            },
            metadata: RW
          }, Qw, rC), (0, wW.e)(null, null, sR, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: WW => "_linkEmissiveWithDiffuse" in WW,
              get: WW => WW._linkEmissiveWithDiffuse,
              set: (WW, RW) => {
                WW._linkEmissiveWithDiffuse = RW
              }
            },
            metadata: RW
          }, jC, kC), (0, wW.e)(null, null, pR, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useSpecularOverAlpha" in WW,
              get: WW => WW._useSpecularOverAlpha,
              set: (WW, RW) => {
                WW._useSpecularOverAlpha = RW
              }
            },
            metadata: RW
          }, dw, pw), (0, wW.e)(null, null, UR, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useReflectionOverAlpha" in WW,
              get: WW => WW._useReflectionOverAlpha,
              set: (WW, RW) => {
                WW._useReflectionOverAlpha = RW
              }
            },
            metadata: RW
          }, Ew, Vw), (0, wW.e)(null, null, VR, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: WW => "_disableLighting" in WW,
              get: WW => WW._disableLighting,
              set: (WW, RW) => {
                WW._disableLighting = RW
              }
            },
            metadata: RW
          }, vC, Kw), (0, wW.e)(null, null, xM, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useObjectSpaceNormalMap" in WW,
              get: WW => WW._useObjectSpaceNormalMap,
              set: (WW, RW) => {
                WW._useObjectSpaceNormalMap = RW
              }
            },
            metadata: RW
          }, nw, Gw), (0, wW.e)(null, null, KR, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useParallax" in WW,
              get: WW => WW._useParallax,
              set: (WW, RW) => {
                WW._useParallax = RW
              }
            },
            metadata: RW
          }, Dw, qC), (0, wW.e)(null, null, OR, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useParallaxOcclusion" in WW,
              get: WW => WW._useParallaxOcclusion,
              set: (WW, RW) => {
                WW._useParallaxOcclusion = RW
              }
            },
            metadata: RW
          }, WC, RC), (0, wW.e)(null, null, GR, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: WW => "parallaxScaleBias" in WW,
              get: WW => WW.parallaxScaleBias,
              set: (WW, RW) => {
                WW.parallaxScaleBias = RW
              }
            },
            metadata: RW
          }, CC, zz), (0, wW.e)(null, null, LR, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: WW => "_roughness" in WW,
              get: WW => WW._roughness,
              set: (WW, RW) => {
                WW._roughness = RW
              }
            },
            metadata: RW
          }, AC, bz), (0, wW.e)(null, null, DR, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: WW => "indexOfRefraction" in WW,
              get: WW => WW.indexOfRefraction,
              set: (WW, RW) => {
                WW.indexOfRefraction = RW
              }
            },
            metadata: RW
          }, eC, BC), (0, wW.e)(null, null, qM, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: WW => "invertRefractionY" in WW,
              get: WW => WW.invertRefractionY,
              set: (WW, RW) => {
                WW.invertRefractionY = RW
              }
            },
            metadata: RW
          }, tz, TC), (0, wW.e)(null, null, ZR, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: WW => "alphaCutOff" in WW,
              get: WW => WW.alphaCutOff,
              set: (WW, RW) => {
                WW.alphaCutOff = RW
              }
            },
            metadata: RW
          }, gz, iz), (0, wW.e)(null, null, SR, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useLightmapAsShadowmap" in WW,
              get: WW => WW._useLightmapAsShadowmap,
              set: (WW, RW) => {
                WW._useLightmapAsShadowmap = RW
              }
            },
            metadata: RW
          }, YC, JC), (0, wW.e)(null, null, RM, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "_diffuseFresnelParameters" in WW,
              get: WW => WW._diffuseFresnelParameters,
              set: (WW, RW) => {
                WW._diffuseFresnelParameters = RW
              }
            },
            metadata: RW
          }, oC, lC), (0, wW.e)(null, null, wM, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "_opacityFresnelParameters" in WW,
              get: WW => WW._opacityFresnelParameters,
              set: (WW, RW) => {
                WW._opacityFresnelParameters = RW
              }
            },
            metadata: RW
          }, QC, rz), (0, wW.e)(null, null, zw, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "_reflectionFresnelParameters" in WW,
              get: WW => WW._reflectionFresnelParameters,
              set: (WW, RW) => {
                WW._reflectionFresnelParameters = RW
              }
            },
            metadata: RW
          }, jz, kz), (0, wW.e)(null, null, bw, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "_refractionFresnelParameters" in WW,
              get: WW => WW._refractionFresnelParameters,
              set: (WW, RW) => {
                WW._refractionFresnelParameters = RW
              }
            },
            metadata: RW
          }, dC, pC), (0, wW.e)(null, null, NM, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: WW => "_emissiveFresnelParameters" in WW,
              get: WW => WW._emissiveFresnelParameters,
              set: (WW, RW) => {
                WW._emissiveFresnelParameters = RW
              }
            },
            metadata: RW
          }, EC, VC), (0, wW.e)(null, null, BM, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useReflectionFresnelFromSpecular" in WW,
              get: WW => WW._useReflectionFresnelFromSpecular,
              set: (WW, RW) => {
                WW._useReflectionFresnelFromSpecular = RW
              }
            },
            metadata: RW
          }, vz, KC), (0, wW.e)(null, null, TM, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: WW => "_useGlossinessFromSpecularMapAlpha" in WW,
              get: WW => WW._useGlossinessFromSpecularMapAlpha,
              set: (WW, RW) => {
                WW._useGlossinessFromSpecularMapAlpha = RW
              }
            },
            metadata: RW
          }, nC, GC), (0, wW.e)(null, null, iw, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: WW => "_maxSimultaneousLights" in WW,
              get: WW => WW._maxSimultaneousLights,
              set: (WW, RW) => {
                WW._maxSimultaneousLights = RW
              }
            },
            metadata: RW
          }, DC, qz), (0, wW.e)(null, null, JM, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: WW => "_invertNormalMapX" in WW,
              get: WW => WW._invertNormalMapX,
              set: (WW, RW) => {
                WW._invertNormalMapX = RW
              }
            },
            metadata: RW
          }, Wz, Rz), (0, wW.e)(null, null, IM, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: WW => "_invertNormalMapY" in WW,
              get: WW => WW._invertNormalMapY,
              set: (WW, RW) => {
                WW._invertNormalMapY = RW
              }
            },
            metadata: RW
          }, Cz, zA), (0, wW.e)(null, null, lM, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: WW => "_twoSidedLighting" in WW,
              get: WW => WW._twoSidedLighting,
              set: (WW, RW) => {
                WW._twoSidedLighting = RW
              }
            },
            metadata: RW
          }, yA, Nz), (0, wW.e)(null, null, fM, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: WW => "_applyDecalMapAfterDetailMap" in WW,
              get: WW => WW._applyDecalMapAfterDetailMap,
              set: (WW, RW) => {
                WW._applyDecalMapAfterDetailMap = RW
              }
            },
            metadata: RW
          }, tA, Tz), RW && Object.defineProperty(WW, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: RW
          })
        })(), WW.ForceGLSL = !1, WW._ShaderLoader = new FW.b((() => [Promise.all([MW.e(287), MW.e(286)]).then((() => MW(39327))), Promise.all([MW.e(292), MW.e(288), MW.e(301), MW.e(291)]).then((() => MW(39514)))]), (() => [Promise.all([MW.e(308), MW.e(303)]).then((() => MW(39671))), Promise.all([MW.e(309), MW.e(319), MW.e(305)]).then((() => MW(39840)))])), WW
      })(),
      hW = !1;

    function UW() {
      hW || (hW = !0, (0, BW.d)(), (0, XW.e)("BABYLON.StandardMaterial", pW), AW.i.DefaultMaterialFactory = WW => new pW("default material", WW))
    }
    Object.getOwnPropertyDescriptor(pW.prototype, "decalMap") || Object.defineProperty(pW.prototype, "decalMap", (0, jR.e)("StandardMaterial", "decalMap"))
  },
  37962: (WW, RW, MW) => {
    function wW(WW) {
      return class extends WW {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    MW.d(RW, {
      d: () => wW
    })
  },
  37952: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    class wW {
      constructor(WW, RW) {
        this._webGL = {
          load: WW,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: RW,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(WW) {
        const RW = 1 === WW ? this._webGPU : this._webGL;
        return RW.loaded ? void 0 : async () => {
          await this._loadAsync(RW)
        }
      }
      async _loadAsync(WW) {
        if (WW.loaded) return;
        let RW = WW.loadPromise;
        const MW = null === RW;
        MW && (RW = Promise.all(WW.load()), WW.loadPromise = RW);
        let wW = !1;
        try {
          await RW, wW = !0
        } finally {
          MW && this._completeLoad(WW, wW)
        }
      }
      _completeLoad(WW, RW) {
        WW.loaded = RW, WW.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);