export const id = 284;
export const ids = [284];
export const modules = {
  41464: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU
    });
    var cU = zU(41123);

    function yU(UU) {
      return class extends UU {
        constructor() {
          super(...arguments);
          const UU = new.target;
          if (!UU[Symbol.metadata]) {
            const XU = Object.getPrototypeOf(UU)?.[Symbol.metadata];
            UU[Symbol.metadata] = XU ? Object.create(XU) : {}
          }
          const XU = (0, cU.e)(UU[Symbol.metadata]);
          XU._imageProcessingConfiguration || (XU._imageProcessingConfiguration = {
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
          UU !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !UU && this.nS ? this._imageProcessingConfiguration = this.nS().imageProcessingConfiguration : UU && (this._imageProcessingConfiguration = UU), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
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
  41358: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU,
      g: () => yU
    });
    var cU = zU(41366);

    function yU(UU) {
      return class extends UU {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class QU extends cU.d {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  41429: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => YU
    });
    var cU = zU(41113),
      yU = zU(41374),
      QU = zU(41121),
      AU = zU(41413),
      FU = zU(41366),
      oU = zU(41436),
      DU = zU(41400);
    class EU extends FU.d {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let YU = (() => {
      var UU, XU, zU, FU;
      let YU, NU, IU, pU, aU, tU, gU = oU.e,
        kU = [],
        GU = [],
        BU = [],
        ZU = [],
        RU = [],
        PU = [],
        WU = [],
        dU = [],
        LU = [],
        eU = [],
        CU = [],
        wU = [];
      return UU = class extends gU {
        get texture() {
          return (0, cU.e)(this, XU, "f")
        }
        set texture(UU) {
          (0, cU.f)(this, XU, UU, "f")
        }
        get normalBlendMethod() {
          return (0, cU.e)(this, zU, "f")
        }
        set normalBlendMethod(UU) {
          (0, cU.f)(this, zU, UU, "f")
        }
        get isEnabled() {
          return (0, cU.e)(this, FU, "f")
        }
        set isEnabled(UU) {
          (0, cU.f)(this, FU, UU, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(UU) {
          let QU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(UU, "DetailMap", 140, new EU, QU), this._texture = null, XU.set(this, (0, cU.n)(this, kU, void 0)), this.diffuseBlendLevel = ((0, cU.n)(this, GU), (0, cU.n)(this, BU, 1)), this.roughnessBlendLevel = ((0, cU.n)(this, ZU), (0, cU.n)(this, RU, 1)), this.bumpLevel = ((0, cU.n)(this, PU), (0, cU.n)(this, WU, 1)), this._normalBlendMethod = ((0, cU.n)(this, dU), yU.c.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), zU.set(this, (0, cU.n)(this, LU, void 0)), this._isEnabled = ((0, cU.n)(this, eU), !1), FU.set(this, (0, cU.n)(this, CU, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, cU.n)(this, wU), this._internalMarkAllSubMeshesAsTexturesDirty = UU._dirtyCallbacks[1]
        }
        isReadyForSubMesh(UU, XU, zU) {
          return !this._isEnabled || !(UU._areTexturesDirty && XU.texturesEnabled && zU.getCaps().standardDerivatives && this._texture && AU.b.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(UU, XU) {
          if (this._isEnabled) {
            UU.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const zU = XU.qp();
            UU._areTexturesDirty && (zU.getCaps().standardDerivatives && this._texture && AU.b.DetailTextureEnabled && this._isEnabled ? ((0, DU.Z)(this._texture, UU, "DETAIL"), UU.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : UU.DETAIL = !1)
          } else UU.DETAIL = !1
        }
        bindForSubMesh(UU, XU) {
          if (!this._isEnabled) return;
          const zU = this._material.isFrozen;
          UU.useUbo && zU && UU.isSync || this._texture && AU.b.DetailTextureEnabled && (UU.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, DU.B)(this._texture, UU, "detail")), XU.texturesEnabled && this._texture && AU.b.DetailTextureEnabled && UU.setTexture("detailSampler", this._texture)
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
      }, XU = new WeakMap, zU = new WeakMap, FU = new WeakMap, (() => {
        const XU = "function" === typeof Symbol && Symbol.metadata ? Object.create(gU[Symbol.metadata] ?? null) : void 0;
        YU = [(0, QU.x)("detailTexture"), (0, QU.c)("_markAllSubMeshesAsTexturesDirty")], NU = [(0, QU.I)()], IU = [(0, QU.I)()], pU = [(0, QU.I)()], aU = [(0, QU.I)(), (0, QU.c)("_markAllSubMeshesAsTexturesDirty")], tU = [(0, QU.I)(), (0, QU.c)("_markAllSubMeshesAsTexturesDirty")], (0, cU.j)(UU, null, YU, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: UU => "texture" in UU,
            get: UU => UU.texture,
            set: (UU, XU) => {
              UU.texture = XU
            }
          },
          metadata: XU
        }, kU, GU), (0, cU.j)(UU, null, aU, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: UU => "normalBlendMethod" in UU,
            get: UU => UU.normalBlendMethod,
            set: (UU, XU) => {
              UU.normalBlendMethod = XU
            }
          },
          metadata: XU
        }, LU, eU), (0, cU.j)(UU, null, tU, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "isEnabled" in UU,
            get: UU => UU.isEnabled,
            set: (UU, XU) => {
              UU.isEnabled = XU
            }
          },
          metadata: XU
        }, CU, wU), (0, cU.j)(null, null, NU, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: UU => "diffuseBlendLevel" in UU,
            get: UU => UU.diffuseBlendLevel,
            set: (UU, XU) => {
              UU.diffuseBlendLevel = XU
            }
          },
          metadata: XU
        }, BU, ZU), (0, cU.j)(null, null, IU, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: UU => "roughnessBlendLevel" in UU,
            get: UU => UU.roughnessBlendLevel,
            set: (UU, XU) => {
              UU.roughnessBlendLevel = XU
            }
          },
          metadata: XU
        }, RU, PU), (0, cU.j)(null, null, pU, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: UU => "bumpLevel" in UU,
            get: UU => UU.bumpLevel,
            set: (UU, XU) => {
              UU.bumpLevel = XU
            }
          },
          metadata: XU
        }, WU, dU), XU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XU
        })
      })(), UU
    })()
  },
  41366: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    class cU {
      constructor(UU) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = UU, UU)
          for (const XU in UU) Object.prototype.hasOwnProperty.call(UU, XU) && this._setDefaultValue(XU)
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
        for (let XU = 0; XU < this._keys.length; XU++) {
          const zU = this._keys[XU];
          if (this[zU] !== UU[zU]) return !1
        }
        return !0
      }
      cloneTo(UU) {
        this._keys.length !== UU._keys.length && (UU._keys = this._keys.slice(0));
        for (let XU = 0; XU < this._keys.length; XU++) {
          const zU = this._keys[XU];
          UU[zU] = this[zU]
        }
      }
      reset() {
        for (const UU of this._keys) this._setDefaultValue(UU)
      }
      _setDefaultValue(UU) {
        const XU = this._externalProperties?.[UU]?.type ?? typeof this[UU],
          zU = this._externalProperties?.[UU]?.default;
        switch (XU) {
          case "number":
            this[UU] = zU ?? 0;
            break;
          case "string":
            this[UU] = zU ?? "";
            break;
          default:
            this[UU] = zU ?? !1
        }
      }
      toString() {
        let UU = "";
        for (let XU = 0; XU < this._keys.length; XU++) {
          const zU = this._keys[XU],
            cU = this[zU];
          switch (typeof cU) {
            case "number":
            case "string":
              UU += "#define " + zU + " " + cU + "\n";
              break;
            default:
              cU && (UU += "#define " + zU + "\n")
          }
        }
        return UU
      }
    }
  },
  41446: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU,
      f: () => AU,
      h: () => QU
    });
    var cU, yU = zU(37819);

    function QU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const cU = XU(UU);
      if (!Number.isInteger(cU) || cU < 0 || cU > zU) throw new Error(`Invalid geometry object ID ${cU} for mesh "${UU.name}". Object IDs must be integers between 0 and 0x${zU.toString(16).toUpperCase()}.`);
      return cU
    }

    function AU(UU, XU) {
      const zU = XU(UU);
      if (!Number.isInteger(zU) || zU < 0 || zU > 255 || 0 !== zU && 0 === (63 & zU)) throw new Error(`Invalid geometry mesh-blending tag ${zU} for mesh "${UU.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return zU
    }! function(UU) {
      UU[UU.Zero = 0] = "Zero", UU[UU.One = 1] = "One", UU[UU.MaxViewZ = 2] = "MaxViewZ", UU[UU.NoClear = 3] = "NoClear"
    }(cU || (cU = {}));
    class FU {
      static CreateConfiguration(UU) {
        return FU._Configurations[UU] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: yU.e.Zero(),
          currentViewProjection: yU.e.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, FU._Configurations[UU]
      }
      static DeleteConfiguration(UU) {
        delete FU._Configurations[UU]
      }
      static GetConfiguration(UU) {
        return FU._Configurations[UU]
      }
      static _PrepareConfiguration(UU, XU, zU) {
        const cU = FU._Configurations[UU];
        cU._attachments = XU, cU._colorAttachments = zU, cU._mrtCount = XU.length;
        let yU = "#define PREPASS\n";
        for (const QU of FU.GeometryTextureDescriptions) {
          const UU = cU.defines[QU.defineIndex];
          void 0 !== UU && (yU += `#define ${QU.define}\n#define ${QU.defineIndex} ${UU}\n`)
        }
        cU.objectIdIsRedFormat && (yU += "#define PREPASS_OBJECT_ID_R8\n"), cU._defines = yU + `#define SCENE_MRT_COUNT ${XU.length}\n`
      }
      static _PrepareStringDefines(UU, XU) {
        const zU = FU._Configurations[UU];
        return !!zU?._defines && (XU.push(zU._defines), !0)
      }
      static _BindAttachmentsForEffect(UU, XU) {
        const zU = FU._Configurations[UU.currentRenderPassId];
        return !zU?._attachments || (UU.bindAttachments(XU._multiTarget ? zU._attachments : zU._colorAttachments), XU._multiTarget || void 0 !== zU.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(UU) {
        const XU = FU._Configurations[UU.currentRenderPassId];
        XU?._colorAttachments && UU.bindAttachments(XU._colorAttachments)
      }
      static _BindColorAttachments(UU) {
        const XU = FU._Configurations[UU.currentRenderPassId];
        return !XU?._colorAttachments || (UU.bindAttachments(XU._colorAttachments), void 0 !== XU.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(UU) {
        const XU = FU._Configurations[UU.currentRenderPassId];
        return !XU?._colorAttachments || void 0 !== XU.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(UU, XU) {
        const zU = FU._Configurations[UU.currentRenderPassId];
        if (!zU) return;
        const cU = UU.getAlphaMode(),
          yU = void 0 === zU.defines.PREPASS_COLOR_INDEX || 2 === cU || 1 === cU || 17 === cU;
        XU.setFloat("geometryZeroAlphaDiscard", yU ? 1 : 0)
      }
      static AddUniformsAndSamplers(UU, XU) {
        UU.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(UU, XU) {
        for (const zU of XU)
          if (zU.uB)
            for (const XU of zU.uB) XU._removeDrawWrapper(UU)
      }
      static PrepareDefines(UU, XU, zU) {
        if (!zU._arePrePassDirty) return;
        const cU = FU._Configurations[UU];
        if (!cU) return;
        zU.PREPASS = !0;
        let yU = 0;
        for (let QU = 0; QU < FU.GeometryTextureDescriptions.length; QU++) {
          const UU = FU.GeometryTextureDescriptions[QU],
            XU = UU.define,
            AU = UU.defineIndex,
            oU = cU.defines[AU];
          void 0 !== oU ? (zU[XU] = !0, zU[AU] = oU, yU++) : (zU[XU] = !1, delete zU[AU])
        }
        zU.PREPASS_OBJECT_ID_R8 = cU.objectIdIsRedFormat, zU.SCENE_MRT_COUNT = cU._mrtCount ?? yU, zU.BONES_VELOCITY_ENABLED = XU.useBones && XU.computeBonesUsingShaders && XU.skeleton && !XU.skeleton.isUsingTextureForMatrices && -1 === cU.excludedSkinnedMesh.indexOf(XU)
      }
      static Bind(UU, XU, zU, cU, yU) {
        const oU = FU._Configurations[UU];
        if (!oU) return;
        const DU = zU.nS(),
          EU = DU.qp();
        if (oU.reverseCulling && EU.setStateCullFaceType(DU._mirroredCameraPosition ? yU.cullBackFaces : !yU.cullBackFaces), void 0 !== oU.defines.PREPASS_OBJECT_ID_INDEX) {
          const UU = oU.objectIdIsRedFormat ? 255 : 16777215;
          let cU = zU.uniqueId;
          if (oU.objectIdProvider) cU = QU(zU, oU.objectIdProvider, UU);
          else if (cU > UU) throw new Error(`Invalid geometry object ID ${cU} for mesh "${zU.name}". Object IDs must be integers between 0 and 0x${UU.toString(16).toUpperCase()}.`);
          XU.setFloat("objectId", cU)
        }
        if (void 0 !== oU.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const UU = oU.meshBlendTagProvider ? AU(zU, oU.meshBlendTagProvider) : zU.meshBlendingTag;
          XU.setInt("meshBlendTag", UU)
        }
        if (void 0 !== oU.defines.PREPASS_VELOCITY_INDEX || void 0 !== oU.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const UU = oU._currentWorldMatrices ?? (oU._currentWorldMatrices = {}),
            yU = oU._worldMatrixFrameIds ?? (oU._worldMatrixFrameIds = {});
          if (UU[zU.uniqueId] || (UU[zU.uniqueId] = cU.clone(), oU.previousWorldMatrices[zU.uniqueId] = cU.clone()), yU[zU.uniqueId] !== EU.frameId && (oU.previousWorldMatrices[zU.uniqueId].YL(UU[zU.uniqueId]), yU[zU.uniqueId] = EU.frameId), UU[zU.uniqueId].YL(cU), -1 === oU.lastUpdateFrameId ? (oU.lastUpdateFrameId = EU.frameId, oU.previousViewProjection.YL(DU.getTransformMatrix()), oU.currentViewProjection.YL(DU.getTransformMatrix())) : oU.currentViewProjection.updateFlag !== DU.getTransformMatrix().updateFlag ? (oU.lastUpdateFrameId = EU.frameId, oU.previousViewProjection.YL(oU.currentViewProjection), oU.currentViewProjection.YL(DU.getTransformMatrix())) : oU.lastUpdateFrameId !== EU.frameId && (oU.lastUpdateFrameId = EU.frameId, oU.previousViewProjection.YL(oU.currentViewProjection)), XU.setMatrix("previousWorld", oU.previousWorldMatrices[zU.uniqueId]), XU.setMatrix("previousViewProjection", oU.previousViewProjection), zU.useBones && zU.computeBonesUsingShaders && zU.skeleton) {
            const UU = zU.skeleton;
            if (!UU.isUsingTextureForMatrices || -1 === XU.getUniformIndex("boneTextureInfo")) {
              const cU = UU.getTransformMatrices(zU);
              cU && (oU.previousBones[zU.uniqueId] || (oU.previousBones[zU.uniqueId] = cU.slice()), XU.setMatrices("mPreviousBones", oU.previousBones[zU.uniqueId]), oU.previousBones[zU.uniqueId].set(cU))
            }
          }
        }
      }
    }
    FU.GeometryTextureDescriptions = [{
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
    }], FU._Configurations = {}
  },
  41436: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => NU,
      i: () => pU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(40991),
      AU = zU(40961);
    const FU = new RegExp("^([gimus]+)!");
    class oU {
      constructor(UU) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = UU, this._scene = UU.nS(), this._engine = this._scene.qp()
      }
      _addPlugin(UU) {
        for (let cU = 0; cU < this._plugins.length; ++cU)
          if (this._plugins[cU].name === UU.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !UU.isCompatible(this._material.shaderLanguage)) throw `The plugin "${UU.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const XU = UU.getClassName();
        oU._MaterialPluginClassToMainDefine[XU] || (oU._MaterialPluginClassToMainDefine[XU] = "MATERIALPLUGIN_" + ++oU._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (UU, XU) => this._handlePluginEvent(UU, XU), this._plugins.push(UU), this._plugins.sort(((UU, XU) => UU.priority - XU.priority)), this._codeInjectionPoints = {};
        const zU = {};
        zU[oU._MaterialPluginClassToMainDefine[XU]] = {
          type: "boolean",
          default: !0
        };
        for (const cU of this._plugins) cU.collectDefines(zU), this._collectPointNames("vertex", cU.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", cU.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = zU, !0
      }
      _activatePlugin(UU) {
        -1 === this._activePlugins.indexOf(UU) && (this._activePlugins.push(UU), this._activePlugins.sort(((UU, XU) => UU.priority - XU.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), UU.registerForExtraEvents && (this._activePluginsForExtraEvents.push(UU), this._activePluginsForExtraEvents.sort(((UU, XU) => UU.priority - XU.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(UU) {
        for (let XU = 0; XU < this._plugins.length; ++XU)
          if (this._plugins[XU].name === UU) return this._plugins[XU];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(UU) {
        let XU = !0;
        for (const zU of this._activePlugins) XU = XU && zU.isReadyForSubMesh(UU.defines, this._scene, this._engine, UU.subMesh);
        UU.isReadyForSubMesh = XU
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(UU) {
        for (const XU of this._activePlugins) XU.prepareDefinesBeforeAttributes(UU.defines, this._scene, UU.mesh)
      }
      _handlePluginEventPrepareDefines(UU) {
        for (const XU of this._activePlugins) XU.prepareDefines(UU.defines, this._scene, UU.mesh)
      }
      _handlePluginEventHardBindForSubMesh(UU) {
        for (const XU of this._activePluginsForExtraEvents) XU.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, UU.subMesh)
      }
      _handlePluginEventBindForSubMesh(UU) {
        for (const XU of this._activePlugins) XU.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, UU.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(UU) {
        let XU = !1;
        for (const zU of this._activePluginsForExtraEvents)
          if (XU = zU.hasRenderTargetTextures(), XU) break;
        UU.hasRenderTargetTextures = XU
      }
      _handlePluginEventFillRenderTargetTextures(UU) {
        for (const XU of this._activePluginsForExtraEvents) XU.fillRenderTargetTextures(UU.renderTargets)
      }
      _handlePluginEvent(UU, XU) {
        switch (UU) {
          case 512: {
            const UU = XU;
            for (const XU of this._activePlugins) XU.getActiveTextures(UU.activeTextures);
            break
          }
          case 256: {
            const UU = XU;
            for (const XU of this._activePlugins) XU.getAnimatables(UU.animatables);
            break
          }
          case 1024: {
            const UU = XU;
            let zU = !1;
            for (const XU of this._activePlugins)
              if (zU = XU.hasTexture(UU.texture), zU) break;
            UU.hasTexture = zU;
            break
          }
          case 2: {
            const UU = XU;
            for (const XU of this._plugins) XU.dispose(UU.forceDisposeTextures);
            break
          }
          case 4:
            XU.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const UU = XU;
            for (const XU of this._activePlugins) UU.fallbackRank = XU.addFallbacks(UU.defines, UU.fallbacks, UU.fallbackRank), XU.getAttributes(UU.attributes, this._scene, UU.mesh);
            this._uniformList.length > 0 && UU.uniforms.push(...this._uniformList), this._samplerList.length > 0 && UU.samplers.push(...this._samplerList), this._uboList.length > 0 && UU.uniformBuffersNames.push(...this._uboList), UU.customCode = this._injectCustomCode(UU, UU.customCode);
            break
          }
          case 8: {
            const UU = XU;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const zU = 1 === this._material.shaderLanguage;
            for (const XU of this._plugins) {
              const cU = XU.getUniforms(this._material.shaderLanguage);
              if (cU) {
                if (cU.ubo)
                  for (const XU of cU.ubo) {
                    if (XU.size && XU.type) {
                      const cU = XU.arraySize ?? 0;
                      if (UU.ubo.addUniform(XU.name, XU.size, cU), zU) {
                        let UU;
                        switch (XU.type) {
                          case "mat4":
                            UU = "mat4x4f";
                            break;
                          case "float":
                            UU = "f32";
                            break;
                          default:
                            UU = `${XU.type}f`
                        }
                        this._uboDeclaration += cU > 0 ? `uniform ${XU.name}: array<${UU}, ${cU}>;\n` : `uniform ${XU.name}: ${UU};\n`
                      } else this._uboDeclaration += `${XU.type} ${XU.name}${cU>0?`[${cU}]`:""};\n`
                    }
                    this._uniformList.push(XU.name)
                  }
                cU.vertex && (this._vertexDeclaration += cU.vertex + "\n"), cU.fragment && (this._fragmentDeclaration += cU.fragment + "\n"), cU.externalUniforms && this._uniformList.push(...cU.externalUniforms)
              }
              XU.getSamplers(this._samplerList), XU.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(UU, XU) {
        if (XU)
          for (const zU in XU) this._codeInjectionPoints[UU] || (this._codeInjectionPoints[UU] = {}), this._codeInjectionPoints[UU][zU] = !0
      }
      _injectCustomCode(UU, XU) {
        return (zU, cU) => {
          XU && (cU = XU(zU, cU)), this._uboDeclaration && (cU = cU.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (cU = cU.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (cU = cU.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const yU = this._codeInjectionPoints?.[zU];
          if (!yU) return cU;
          let oU = null;
          for (let XU in yU) {
            let yU = "";
            for (const cU of this._activePlugins) {
              const FU = this._material.shaderLanguage;
              let DU = cU.getCustomCode(zU, FU)?.[XU];
              DU && (cU.resolveIncludes && (null === oU && (oU = {
                defines: [],
                indexParameters: UU.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: AU.b.GetShadersRepository(FU),
                includesShadersStore: AU.b.GetIncludesShadersStore(FU),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                XyU: this._engine.XyU,
                processCodeAfterIncludes: void 0
              }), oU.isFragment = "fragment" === zU, (0, QU.i)(DU, oU, (UU => DU = UU))), yU += DU + "\n")
            }
            if (yU.length > 0)
              if ("!" === XU.charAt(0)) {
                XU = XU.substring(1);
                let UU = "g";
                if ("!" === XU.charAt(0)) UU = "", XU = XU.substring(1);
                else {
                  const zU = FU.exec(XU);
                  zU && zU.length >= 2 && (UU = zU[1], XU = XU.substring(UU.length + 1))
                }
                UU.indexOf("g") < 0 && (UU += "g");
                const zU = new RegExp(XU, UU);
                let QU = zU.exec(cU);
                for (; null !== QU;) {
                  const {
                    index: UU
                  } = QU, XU = DU(yU, QU);
                  cU = cU.substring(0, UU) + XU + cU.substring(UU + QU[0].length), zU.lastIndex = UU + XU.length, QU = zU.exec(cU)
                }
              } else {
                const UU = "#define " + XU;
                cU = cU.replace(UU, "\n" + yU + "\n" + UU)
              }
          }
          return cU
        }
      }
    }
    oU._MaterialPluginClassToMainDefine = {}, oU._MaterialPluginCounter = 0;

    function DU(UU, XU) {
      return UU.replace(/\$(\d+)/g, ((UU, zU) => {
        const cU = Number(zU);
        return cU < XU.length ? XU[cU] : ""
      }))
    }
    var EU = zU(41134),
      YU = zU(37863);
    let NU = (() => {
        var UU;
        let XU, zU, QU, AU, FU = [],
          DU = [],
          YU = [],
          NU = [],
          IU = [],
          pU = [],
          aU = [],
          tU = [];
        return UU = class {
          isCompatible(UU) {
            return 0 === UU
          }
          _enable(UU) {
            UU && this._pluginManager._activatePlugin(this)
          }
          constructor(UU, XU, zU, yU) {
            let QU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              AU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              EU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, cU.n)(this, FU, void 0), this.priority = ((0, cU.n)(this, DU), (0, cU.n)(this, YU, 500)), this.resolveIncludes = ((0, cU.n)(this, NU), (0, cU.n)(this, IU, !1)), this.registerForExtraEvents = ((0, cU.n)(this, pU), (0, cU.n)(this, aU, !1)), this.doNotSerialize = ((0, cU.n)(this, tU), !1), this._material = UU, this.name = XU, this.priority = zU, this.resolveIncludes = EU, UU.pluginManager || (UU.pluginManager = new oU(UU), UU.bS.add((() => {
              UU.pluginManager = void 0
            }))), this._pluginDefineNames = yU, this._pluginManager = UU.pluginManager, QU && this._pluginManager._addPlugin(this), AU && this._enable(!0), this.markAllDefinesAsDirty = UU._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(UU, XU, zU, cU) {
            return !0
          }
          hardBindForSubMesh(UU, XU, zU, cU) {}
          bindForSubMesh(UU, XU, zU, cU) {}
          dispose(UU) {}
          getCustomCode(UU) {
            return null
          }
          collectDefines(UU) {
            if (this._pluginDefineNames)
              for (const XU of Object.keys(this._pluginDefineNames)) {
                if ("_" === XU[0]) continue;
                const zU = typeof this._pluginDefineNames[XU];
                UU[XU] = {
                  type: "number" === zU ? "number" : "string" === zU ? "string" : "boolean" === zU ? "boolean" : "object",
                  default: this._pluginDefineNames[XU]
                }
              }
          }
          prepareDefinesBeforeAttributes(UU, XU, zU) {}
          prepareDefines(UU, XU, zU) {}
          hasTexture(UU) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(UU) {}
          getActiveTextures(UU) {}
          getAnimatables(UU) {}
          addFallbacks(UU, XU, zU) {
            return zU
          }
          getSamplers(UU) {}
          getAttributes(UU, XU, zU) {}
          getUniformBuffersNames(UU) {}
          getUniforms() {
            return {}
          }
          copyTo(UU) {
            EU.b.Clone((() => UU), this)
          }
          serialize() {
            return EU.b.Serialize(this)
          }
          parse(UU, XU, zU) {
            EU.b.Parse((() => this), UU, XU, zU)
          }
        }, (() => {
          const oU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          XU = [(0, yU.I)()], zU = [(0, yU.I)()], QU = [(0, yU.I)()], AU = [(0, yU.I)()], (0, cU.j)(null, null, XU, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: UU => "name" in UU,
              get: UU => UU.name,
              set: (UU, XU) => {
                UU.name = XU
              }
            },
            metadata: oU
          }, FU, DU), (0, cU.j)(null, null, zU, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: UU => "priority" in UU,
              get: UU => UU.priority,
              set: (UU, XU) => {
                UU.priority = XU
              }
            },
            metadata: oU
          }, YU, NU), (0, cU.j)(null, null, QU, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: UU => "resolveIncludes" in UU,
              get: UU => UU.resolveIncludes,
              set: (UU, XU) => {
                UU.resolveIncludes = XU
              }
            },
            metadata: oU
          }, IU, pU), (0, cU.j)(null, null, AU, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: UU => "registerForExtraEvents" in UU,
              get: UU => UU.registerForExtraEvents,
              set: (UU, XU) => {
                UU.registerForExtraEvents = XU
              }
            },
            metadata: oU
          }, aU, tU), oU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oU
          })
        })(), UU
      })(),
      IU = !1;

    function pU() {
      IU || (IU = !0, (0, YU.h)("BABYLON.MaterialPluginBase", NU))
    }
  },
  41355: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU
    });
    class cU {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(UU) {
        UU.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(UU) {}
      bindForSubMesh(UU, XU, zU, cU, yU) {
        if (XU.prePassRenderer && XU.prePassRenderer.enabled && XU.prePassRenderer.currentRTisSceneRT && (-1 !== XU.prePassRenderer.getIndex(2) || -1 !== XU.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[zU.uniqueId] || (this.previousWorldMatrices[zU.uniqueId] = cU.clone()), this.previousViewProjection || (this.previousViewProjection = XU.getTransformMatrix().clone(), this.currentViewProjection = XU.getTransformMatrix().clone());
          const yU = XU.qp();
          this.currentViewProjection.updateFlag !== XU.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = yU.frameId, this.previousViewProjection.YL(this.currentViewProjection), this.currentViewProjection.YL(XU.getTransformMatrix())) : this._lastUpdateFrameId !== yU.frameId && (this._lastUpdateFrameId = yU.frameId, this.previousViewProjection.YL(this.currentViewProjection)), UU.setMatrix("previousWorld", this.previousWorldMatrices[zU.uniqueId]), UU.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[zU.uniqueId] = cU.clone()
        }
      }
    }
  },
  41458: (UU, XU, zU) => {
    function cU(UU) {
      return class extends UU {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    zU.d(XU, {
      e: () => cU
    })
  },
  41348: (UU, XU, zU) => {
    zU.d(XU, {
      StandardMaterial: () => cU.h
    });
    var cU = zU(41351);
    (0, cU.d)()
  },
  41351: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => fU,
      h: () => rU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(41210),
      AU = zU(41202),
      FU = zU(37923),
      oU = zU(41237),
      DU = zU(41355),
      EU = zU(41358),
      YU = zU(41214),
      NU = zU(41374),
      IU = zU(41366),
      pU = zU(41415),
      aU = zU(41413),
      tU = zU(41422),
      gU = zU(41429),
      kU = zU(41406),
      GU = zU(41438),
      BU = zU(41400),
      ZU = zU(41134),
      RU = zU(41444),
      PU = zU(41446),
      WU = zU(41453),
      dU = zU(41458),
      LU = zU(41464),
      eU = zU(37863),
      CU = zU(40989);
    const wU = {
      effect: null,
      subMesh: null
    };
    class qU extends((0, dU.e)((0, WU.b)(IU.d))) {}
    class OU extends((0, EU.g)(qU)) {
      constructor(UU) {
        super(UU), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class SU extends((0, LU.d)(pU.d)) {}
    let rU = (() => {
        var UU, XU, EU, IU, WU, dU, LU, eU, CU, qU, rU, uU, fU, iU, HU, MU, vU, VU, sU, nU, mU, lU, xU, JU, jU, KU, bU, TU, hU, UX, XX, zX, cX;
        let yX, QX, AX, FX, oX, DX, EX, YX, NX, IX, pX, aX, tX, gX, kX, GX, BX, ZX, RX, PX, WX, dX, LX, eX, CX, wX, qX, OX, SX, rX, uX, fX, iX, HX, MX, vX, VX, sX, nX, mX, lX, xX, JX, jX, KX, bX, TX, hX, Uz, Xz, zz, cz, yz, Qz, Az, Fz, oz, Dz, Ez, Yz, Nz, Iz, pz, az, tz, gz, kz, Gz, Bz, Zz, Rz, Pz, Wz, dz = SU,
          Lz = [],
          ez = [],
          Cz = [],
          wz = [],
          qz = [],
          Oz = [],
          Sz = [],
          rz = [],
          uz = [],
          fz = [],
          iz = [],
          Hz = [],
          Mz = [],
          vz = [],
          Vz = [],
          sz = [],
          nz = [],
          mz = [],
          lz = [],
          xz = [],
          Jz = [],
          jz = [],
          Kz = [],
          bz = [],
          Tz = [],
          hz = [],
          Uc = [],
          Xc = [],
          zc = [],
          cc = [],
          yc = [],
          Qc = [],
          Ac = [],
          Fc = [],
          oc = [],
          Dc = [],
          Ec = [],
          Yc = [],
          Nc = [],
          Ic = [],
          pc = [],
          ac = [],
          tc = [],
          gc = [],
          kc = [],
          Gc = [],
          Bc = [],
          Zc = [],
          Rc = [],
          Pc = [],
          Wc = [],
          dc = [],
          Lc = [],
          ec = [],
          Cc = [],
          wc = [],
          qc = [],
          Oc = [],
          Sc = [],
          rc = [],
          uc = [],
          fc = [],
          ic = [],
          Hc = [],
          Mc = [],
          vc = [],
          Vc = [],
          sc = [],
          nc = [],
          mc = [],
          lc = [],
          xc = [],
          Jc = [],
          jc = [],
          Kc = [],
          bc = [],
          Tc = [],
          hc = [],
          Uy = [],
          Xy = [],
          zy = [],
          cy = [],
          yy = [],
          Qy = [],
          Ay = [],
          Fy = [],
          oy = [],
          Dy = [],
          Ey = [],
          Yy = [],
          Ny = [],
          Iy = [],
          py = [],
          ay = [],
          ty = [],
          gy = [],
          ky = [],
          Gy = [],
          By = [],
          Zy = [],
          Ry = [],
          Py = [],
          Wy = [],
          dy = [],
          Ly = [],
          ey = [],
          Cy = [],
          wy = [],
          qy = [],
          Oy = [],
          Sy = [],
          ry = [],
          uy = [],
          fy = [],
          iy = [],
          Hy = [],
          My = [],
          vy = [],
          Vy = [],
          sy = [],
          ny = [],
          my = [],
          ly = [],
          xy = [],
          Jy = [],
          jy = [],
          Ky = [],
          by = [],
          Ty = [],
          hy = [],
          UQ = [],
          XQ = [],
          zQ = [],
          cQ = [],
          yQ = [],
          QQ = [],
          AQ = [],
          FQ = [],
          oQ = [],
          DQ = [],
          EQ = [],
          YQ = [],
          NQ = [],
          IQ = [],
          pQ = [],
          aQ = [];
        return UU = class extends dz {
          get diffuseTexture() {
            return (0, cU.e)(this, XU, "f")
          }
          set diffuseTexture(UU) {
            (0, cU.f)(this, XU, UU, "f")
          }
          get ambientTexture() {
            return (0, cU.e)(this, EU, "f")
          }
          set ambientTexture(UU) {
            (0, cU.f)(this, EU, UU, "f")
          }
          get opacityTexture() {
            return (0, cU.e)(this, IU, "f")
          }
          set opacityTexture(UU) {
            (0, cU.f)(this, IU, UU, "f")
          }
          get reflectionTexture() {
            return (0, cU.e)(this, WU, "f")
          }
          set reflectionTexture(UU) {
            (0, cU.f)(this, WU, UU, "f")
          }
          get emissiveTexture() {
            return (0, cU.e)(this, dU, "f")
          }
          set emissiveTexture(UU) {
            (0, cU.f)(this, dU, UU, "f")
          }
          get specularTexture() {
            return (0, cU.e)(this, LU, "f")
          }
          set specularTexture(UU) {
            (0, cU.f)(this, LU, UU, "f")
          }
          get bumpTexture() {
            return (0, cU.e)(this, eU, "f")
          }
          set bumpTexture(UU) {
            (0, cU.f)(this, eU, UU, "f")
          }
          get lightmapTexture() {
            return (0, cU.e)(this, CU, "f")
          }
          set lightmapTexture(UU) {
            (0, cU.f)(this, CU, UU, "f")
          }
          get refractionTexture() {
            return (0, cU.e)(this, qU, "f")
          }
          set refractionTexture(UU) {
            (0, cU.f)(this, qU, UU, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, cU.e)(this, rU, "f")
          }
          set useAlphaFromDiffuseTexture(UU) {
            (0, cU.f)(this, rU, UU, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, cU.e)(this, uU, "f")
          }
          set useEmissiveAsIllumination(UU) {
            (0, cU.f)(this, uU, UU, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, cU.e)(this, fU, "f")
          }
          set linkEmissiveWithDiffuse(UU) {
            (0, cU.f)(this, fU, UU, "f")
          }
          get useSpecularOverAlpha() {
            return (0, cU.e)(this, iU, "f")
          }
          set useSpecularOverAlpha(UU) {
            (0, cU.f)(this, iU, UU, "f")
          }
          get useReflectionOverAlpha() {
            return (0, cU.e)(this, HU, "f")
          }
          set useReflectionOverAlpha(UU) {
            (0, cU.f)(this, HU, UU, "f")
          }
          get disableLighting() {
            return (0, cU.e)(this, MU, "f")
          }
          set disableLighting(UU) {
            (0, cU.f)(this, MU, UU, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, cU.e)(this, vU, "f")
          }
          set useObjectSpaceNormalMap(UU) {
            (0, cU.f)(this, vU, UU, "f")
          }
          get useParallax() {
            return (0, cU.e)(this, VU, "f")
          }
          set useParallax(UU) {
            (0, cU.f)(this, VU, UU, "f")
          }
          get useParallaxOcclusion() {
            return (0, cU.e)(this, sU, "f")
          }
          set useParallaxOcclusion(UU) {
            (0, cU.f)(this, sU, UU, "f")
          }
          get roughness() {
            return (0, cU.e)(this, nU, "f")
          }
          set roughness(UU) {
            (0, cU.f)(this, nU, UU, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, cU.e)(this, mU, "f")
          }
          set useLightmapAsShadowmap(UU) {
            (0, cU.f)(this, mU, UU, "f")
          }
          get diffuseFresnelParameters() {
            return (0, cU.e)(this, lU, "f")
          }
          set diffuseFresnelParameters(UU) {
            (0, cU.f)(this, lU, UU, "f")
          }
          get opacityFresnelParameters() {
            return (0, cU.e)(this, xU, "f")
          }
          set opacityFresnelParameters(UU) {
            (0, cU.f)(this, xU, UU, "f")
          }
          get reflectionFresnelParameters() {
            return (0, cU.e)(this, JU, "f")
          }
          set reflectionFresnelParameters(UU) {
            (0, cU.f)(this, JU, UU, "f")
          }
          get refractionFresnelParameters() {
            return (0, cU.e)(this, jU, "f")
          }
          set refractionFresnelParameters(UU) {
            (0, cU.f)(this, jU, UU, "f")
          }
          get emissiveFresnelParameters() {
            return (0, cU.e)(this, KU, "f")
          }
          set emissiveFresnelParameters(UU) {
            (0, cU.f)(this, KU, UU, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, cU.e)(this, bU, "f")
          }
          set useReflectionFresnelFromSpecular(UU) {
            (0, cU.f)(this, bU, UU, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, cU.e)(this, TU, "f")
          }
          set useGlossinessFromSpecularMapAlpha(UU) {
            (0, cU.f)(this, TU, UU, "f")
          }
          get maxSimultaneousLights() {
            return (0, cU.e)(this, hU, "f")
          }
          set maxSimultaneousLights(UU) {
            (0, cU.f)(this, hU, UU, "f")
          }
          get invertNormalMapX() {
            return (0, cU.e)(this, UX, "f")
          }
          set invertNormalMapX(UU) {
            (0, cU.f)(this, UX, UU, "f")
          }
          get invertNormalMapY() {
            return (0, cU.e)(this, XX, "f")
          }
          set invertNormalMapY(UU) {
            (0, cU.f)(this, XX, UU, "f")
          }
          get twoSidedLighting() {
            return (0, cU.e)(this, zX, "f")
          }
          set twoSidedLighting(UU) {
            (0, cU.f)(this, zX, UU, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, cU.e)(this, cX, "f")
          }
          set applyDecalMapAfterDetailMap(UU) {
            (0, cU.f)(this, cX, UU, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(zU, yU) {
            super(zU, yU, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || UU.ForceGLSL), this._diffuseTexture = (0, cU.n)(this, Lz, null), XU.set(this, ((0, cU.n)(this, ez), (0, cU.n)(this, Cz, void 0))), this._ambientTexture = ((0, cU.n)(this, wz), (0, cU.n)(this, qz, null)), EU.set(this, ((0, cU.n)(this, Oz), (0, cU.n)(this, Sz, void 0))), this._opacityTexture = ((0, cU.n)(this, rz), (0, cU.n)(this, uz, null)), IU.set(this, ((0, cU.n)(this, fz), (0, cU.n)(this, iz, void 0))), this._reflectionTexture = ((0, cU.n)(this, Hz), (0, cU.n)(this, Mz, null)), WU.set(this, ((0, cU.n)(this, vz), (0, cU.n)(this, Vz, void 0))), this._emissiveTexture = ((0, cU.n)(this, sz), (0, cU.n)(this, nz, null)), dU.set(this, ((0, cU.n)(this, mz), (0, cU.n)(this, lz, void 0))), this._specularTexture = ((0, cU.n)(this, xz), (0, cU.n)(this, Jz, null)), LU.set(this, ((0, cU.n)(this, jz), (0, cU.n)(this, Kz, void 0))), this._bumpTexture = ((0, cU.n)(this, bz), (0, cU.n)(this, Tz, null)), eU.set(this, ((0, cU.n)(this, hz), (0, cU.n)(this, Uc, void 0))), this._lightmapTexture = ((0, cU.n)(this, Xc), (0, cU.n)(this, zc, null)), CU.set(this, ((0, cU.n)(this, cc), (0, cU.n)(this, yc, void 0))), this._refractionTexture = ((0, cU.n)(this, Qc), (0, cU.n)(this, Ac, null)), qU.set(this, ((0, cU.n)(this, Fc), (0, cU.n)(this, oc, void 0))), this.ambientColor = ((0, cU.n)(this, Dc), (0, cU.n)(this, Ec, new FU.b(0, 0, 0))), this.diffuseColor = ((0, cU.n)(this, Yc), (0, cU.n)(this, Nc, new FU.b(1, 1, 1))), this.specularColor = ((0, cU.n)(this, Ic), (0, cU.n)(this, pc, new FU.b(1, 1, 1))), this.emissiveColor = ((0, cU.n)(this, ac), (0, cU.n)(this, tc, new FU.b(0, 0, 0))), this.specularPower = ((0, cU.n)(this, gc), (0, cU.n)(this, kc, 64)), this._useAlphaFromDiffuseTexture = ((0, cU.n)(this, Gc), (0, cU.n)(this, Bc, !1)), rU.set(this, ((0, cU.n)(this, Zc), (0, cU.n)(this, Rc, void 0))), this._useEmissiveAsIllumination = ((0, cU.n)(this, Pc), (0, cU.n)(this, Wc, !1)), uU.set(this, ((0, cU.n)(this, dc), (0, cU.n)(this, Lc, void 0))), this._linkEmissiveWithDiffuse = ((0, cU.n)(this, ec), (0, cU.n)(this, Cc, !1)), fU.set(this, ((0, cU.n)(this, wc), (0, cU.n)(this, qc, void 0))), this._useSpecularOverAlpha = ((0, cU.n)(this, Oc), (0, cU.n)(this, Sc, !1)), iU.set(this, ((0, cU.n)(this, rc), (0, cU.n)(this, uc, void 0))), this._useReflectionOverAlpha = ((0, cU.n)(this, fc), (0, cU.n)(this, ic, !1)), HU.set(this, ((0, cU.n)(this, Hc), (0, cU.n)(this, Mc, void 0))), this._disableLighting = ((0, cU.n)(this, vc), (0, cU.n)(this, Vc, !1)), MU.set(this, ((0, cU.n)(this, sc), (0, cU.n)(this, nc, void 0))), this._useObjectSpaceNormalMap = ((0, cU.n)(this, mc), (0, cU.n)(this, lc, !1)), vU.set(this, ((0, cU.n)(this, xc), (0, cU.n)(this, Jc, void 0))), this._useParallax = ((0, cU.n)(this, jc), (0, cU.n)(this, Kc, !1)), VU.set(this, ((0, cU.n)(this, bc), (0, cU.n)(this, Tc, void 0))), this._useParallaxOcclusion = ((0, cU.n)(this, hc), (0, cU.n)(this, Uy, !1)), sU.set(this, ((0, cU.n)(this, Xy), (0, cU.n)(this, zy, void 0))), this.parallaxScaleBias = ((0, cU.n)(this, cy), (0, cU.n)(this, yy, .05)), this._roughness = ((0, cU.n)(this, Qy), (0, cU.n)(this, Ay, 0)), nU.set(this, ((0, cU.n)(this, Fy), (0, cU.n)(this, oy, void 0))), this.indexOfRefraction = ((0, cU.n)(this, Dy), (0, cU.n)(this, Ey, .98)), this.invertRefractionY = ((0, cU.n)(this, Yy), (0, cU.n)(this, Ny, !0)), this.alphaCutOff = ((0, cU.n)(this, Iy), (0, cU.n)(this, py, .4)), this._useLightmapAsShadowmap = ((0, cU.n)(this, ay), (0, cU.n)(this, ty, !1)), mU.set(this, ((0, cU.n)(this, gy), (0, cU.n)(this, ky, void 0))), this._diffuseFresnelParameters = ((0, cU.n)(this, Gy), (0, cU.n)(this, By, void 0)), lU.set(this, ((0, cU.n)(this, Zy), (0, cU.n)(this, Ry, void 0))), this._opacityFresnelParameters = ((0, cU.n)(this, Py), (0, cU.n)(this, Wy, void 0)), xU.set(this, ((0, cU.n)(this, dy), (0, cU.n)(this, Ly, void 0))), this._reflectionFresnelParameters = ((0, cU.n)(this, ey), (0, cU.n)(this, Cy, void 0)), JU.set(this, ((0, cU.n)(this, wy), (0, cU.n)(this, qy, void 0))), this._refractionFresnelParameters = ((0, cU.n)(this, Oy), (0, cU.n)(this, Sy, void 0)), jU.set(this, ((0, cU.n)(this, ry), (0, cU.n)(this, uy, void 0))), this._emissiveFresnelParameters = ((0, cU.n)(this, fy), (0, cU.n)(this, iy, void 0)), KU.set(this, ((0, cU.n)(this, Hy), (0, cU.n)(this, My, void 0))), this._useReflectionFresnelFromSpecular = ((0, cU.n)(this, vy), (0, cU.n)(this, Vy, !1)), bU.set(this, ((0, cU.n)(this, sy), (0, cU.n)(this, ny, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, cU.n)(this, my), (0, cU.n)(this, ly, !1)), TU.set(this, ((0, cU.n)(this, xy), (0, cU.n)(this, Jy, void 0))), this._maxSimultaneousLights = ((0, cU.n)(this, jy), (0, cU.n)(this, Ky, 4)), hU.set(this, ((0, cU.n)(this, by), (0, cU.n)(this, Ty, void 0))), this._invertNormalMapX = ((0, cU.n)(this, hy), (0, cU.n)(this, UQ, !1)), UX.set(this, ((0, cU.n)(this, XQ), (0, cU.n)(this, zQ, void 0))), this._invertNormalMapY = ((0, cU.n)(this, cQ), (0, cU.n)(this, yQ, !1)), XX.set(this, ((0, cU.n)(this, QQ), (0, cU.n)(this, AQ, void 0))), this._twoSidedLighting = ((0, cU.n)(this, FQ), (0, cU.n)(this, oQ, !1)), zX.set(this, ((0, cU.n)(this, DQ), (0, cU.n)(this, EQ, void 0))), this._applyDecalMapAfterDetailMap = ((0, cU.n)(this, YQ), (0, cU.n)(this, NQ, !1)), cX.set(this, ((0, cU.n)(this, IQ), (0, cU.n)(this, pQ, void 0))), this._vertexPullingMetadata = ((0, cU.n)(this, aQ), null), this._renderTargets = new QU.d(16), this._globalAmbientColor = new FU.b(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new gU.b(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new DU.c, this.getRenderTargetTextures = () => (this._renderTargets.reset(), UU.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), UU.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
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
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === NU.c.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== NU.c.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(XU, zU) {
            let cU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const yU = zU._drawWrapper;
            if (yU.effect && this.isFrozen && yU._wasPreviouslyReady && yU._wasPreviouslyUsingInstances === cU) return !0;
            zU.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), zU.materialDefines = new OU(this._eventInfo.defineNames));
            const QU = this.nS(),
              AU = zU.materialDefines;
            if (this._isReadyForSubMesh(zU)) return !0;
            const FU = QU.qp();
            if (AU._needNormals = (0, BU.V)(QU, XU, AU, !0, this._maxSimultaneousLights, this._disableLighting), !(0, BU.e)(QU, XU, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, BU.$)(QU, AU);
            const EU = this.needAlphaBlendingForMesh(XU) && this.nS().useOrderIndependentTransparency;
            if ((0, BU.fb)(QU, AU, this.canRenderToMRT && !EU), (0, BU.bb)(QU, AU, EU), PU.c.PrepareDefines(FU.currentRenderPassId, XU, AU), AU._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, AU._needUVs = !1;
              for (let UU = 1; UU <= 6; ++UU) AU["MAINUV" + UU] = !1;
              if (QU.texturesEnabled) {
                if (AU.DIFFUSEDIRECTUV = 0, AU.BUMPDIRECTUV = 0, AU.AMBIENTDIRECTUV = 0, AU.OPACITYDIRECTUV = 0, AU.EMISSIVEDIRECTUV = 0, AU.SPECULARDIRECTUV = 0, AU.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && UU.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, BU.Z)(this._diffuseTexture, AU, "DIFFUSE")
                } else AU.DIFFUSE = !1;
                if (this._ambientTexture && UU.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, BU.Z)(this._ambientTexture, AU, "AMBIENT")
                } else AU.AMBIENT = !1;
                if (this._opacityTexture && UU.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, BU.Z)(this._opacityTexture, AU, "OPACITY"), AU.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else AU.OPACITY = !1;
                if (this._reflectionTexture && UU.ReflectionTextureEnabled ? (AU.ROUGHNESS = this._roughness > 0, AU.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (AU.ROUGHNESS = !1, AU.REFLECTIONOVERALPHA = !1), !(0, BU.T)(QU, this._reflectionTexture, AU)) return !1;
                if (this._emissiveTexture && UU.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, BU.Z)(this._emissiveTexture, AU, "EMISSIVE")
                } else AU.EMISSIVE = !1;
                if (this._lightmapTexture && UU.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, BU.Z)(this._lightmapTexture, AU, "LIGHTMAP"), AU.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, AU.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else AU.LIGHTMAP = !1;
                if (this._specularTexture && UU.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, BU.Z)(this._specularTexture, AU, "SPECULAR"), AU.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else AU.SPECULAR = !1;
                if (QU.qp().getCaps().standardDerivatives && this._bumpTexture && UU.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, BU.Z)(this._bumpTexture, AU, "BUMP"), AU.PARALLAX = this._useParallax, AU.PARALLAX_RHS = QU.useRightHandedSystem, AU.PARALLAXOCCLUSION = this._useParallaxOcclusion, AU.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else AU.BUMP = !1, AU.PARALLAX = !1, AU.PARALLAX_RHS = !1, AU.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && UU.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  AU._needUVs = !0, AU.REFRACTION = !0, AU.REFRACTIONMAP_3D = this._refractionTexture.isCube, AU.RGBDREFRACTION = this._refractionTexture.isRGBD, AU.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else AU.REFRACTION = !1;
                AU.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else AU.DIFFUSE = !1, AU.AMBIENT = !1, AU.OPACITY = !1, AU.REFLECTION = !1, AU.EMISSIVE = !1, AU.LIGHTMAP = !1, AU.BUMP = !1, AU.REFRACTION = !1;
              AU.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), AU.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, AU.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, AU.SPECULAROVERALPHA = this._useSpecularOverAlpha, AU.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, AU.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, AU.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(XU), AU.TEXTURE_REPETITION_MODE = FU.version > 1 || FU.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = AU, this._eventInfo.subMesh = zU, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (AU._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(AU), AU.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, AU.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (AU._areFresnelDirty && (UU.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (AU.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, AU.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, AU.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, AU.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, AU.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, AU.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, AU._needNormals = !0, AU.FRESNEL = !0) : AU.FRESNEL = !1), AU.AREALIGHTUSED || AU.CLUSTLIGHT_BATCH)
              for (let UU = 0; UU < XU.lightSources.length; UU++)
                if (!XU.lightSources[UU]._isReady()) return !1;
            (0, BU._)(XU, QU, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(XU), AU, this._applyDecalMapAfterDetailMap, this._useVertexPulling, zU.getRenderingMesh(), this._isVertexOutputInvariant), (0, BU.S)(QU, FU, this, AU, cU, null, zU.getRenderingMesh().hasThinInstances), this._eventInfo.defines = AU, this._eventInfo.mesh = XU, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, BU.Q)(XU, AU, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let NU = !1;
            if (AU.isDirty) {
              const cU = AU._areLightsDisposed;
              AU.markAsProcessed();
              const yU = new tU.d;
              AU.REFLECTION && yU.addFallback(0, "REFLECTION"), AU.SPECULAR && yU.addFallback(0, "SPECULAR"), AU.BUMP && yU.addFallback(0, "BUMP"), AU.PARALLAX && yU.addFallback(1, "PARALLAX"), AU.PARALLAX_RHS && yU.addFallback(1, "PARALLAX_RHS"), AU.PARALLAXOCCLUSION && yU.addFallback(0, "PARALLAXOCCLUSION"), AU.SPECULAROVERALPHA && yU.addFallback(0, "SPECULAROVERALPHA"), AU.FOG && yU.addFallback(1, "FOG"), AU.POINTSIZE && yU.addFallback(0, "POINTSIZE"), AU.LOGARITHMICDEPTH && yU.addFallback(0, "LOGARITHMICDEPTH"), (0, BU.D)(AU, yU, this._maxSimultaneousLights), AU.SPECULARTERM && yU.addFallback(0, "SPECULARTERM"), AU.DIFFUSEFRESNEL && yU.addFallback(1, "DIFFUSEFRESNEL"), AU.OPACITYFRESNEL && yU.addFallback(2, "OPACITYFRESNEL"), AU.REFLECTIONFRESNEL && yU.addFallback(3, "REFLECTIONFRESNEL"), AU.EMISSIVEFRESNEL && yU.addFallback(4, "EMISSIVEFRESNEL"), AU.FRESNEL && yU.addFallback(4, "FRESNEL"), AU.MULTIVIEW && yU.addFallback(0, "MULTIVIEW");
              const EU = [oU.h.PositionKind];
              AU.NORMAL && EU.push(oU.h.NormalKind), AU.TANGENT && EU.push(oU.h.TangentKind);
              for (let UU = 1; UU <= 6; ++UU) AU["UV" + UU] && EU.push(`uv${1===UU?"":UU}`);
              AU.VERTEXCOLOR && EU.push(oU.h.ColorKind), (0, BU.H)(EU, XU, AU, yU), (0, BU.K)(EU, AU), (0, BU.L)(EU, XU, AU), (0, BU.F)(EU, XU, AU);
              let IU = "default";
              const pU = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                aU = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, BU.kb)(pU, aU, !1);
              const gU = ["Material", "Scene", "Mesh"],
                ZU = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: AU.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = yU, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = AU, this._eventInfo.uniforms = pU, this._eventInfo.attributes = EU, this._eventInfo.samplers = aU, this._eventInfo.uniformBuffersNames = gU, this._eventInfo.customCode = void 0, this._eventInfo.mesh = XU, this._eventInfo.indexParameters = ZU, this._callbackPluginEventGeneric(128, this._eventInfo), PU.c.AddUniformsAndSamplers(pU, aU), DU.c.AddUniforms(pU), DU.c.AddSamplers(aU), YU.b && (YU.b.PrepareUniforms(pU, AU), YU.b.PrepareSamplers(aU, AU)), (0, BU.mb)({
                  uniformsNames: pU,
                  uniformBuffersNames: gU,
                  samplers: aU,
                  defines: AU,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, kU.c)(pU), this._useVertexPulling) {
                const UU = zU.getRenderingMesh(),
                  XU = UU?.geometry;
                XU && (this._vertexPullingMetadata = (0, GU.f)(XU), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((UU, XU) => {
                  pU.push(`vp_${XU}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const RU = {};
              this.customShaderNameResolve && (IU = this.customShaderNameResolve(IU, pU, gU, aU, AU, EU, RU));
              const WU = AU.toString(),
                dU = zU.effect,
                LU = QU.qp().createEffect(IU, {
                  attributes: EU,
                  uniformsNames: pU,
                  uniformBuffersNames: gU,
                  samplers: aU,
                  defines: WU,
                  fallbacks: yU,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: ZU,
                  processFinalCode: RU.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: AU.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: UU._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, FU);
              if (this._eventInfo.customCode = void 0, LU)
                if (this._onEffectCreatedObservable && (wU.effect = LU, wU.subMesh = zU, this._onEffectCreatedObservable.notifyObservers(wU)), this.allowShaderHotSwapping && dU && !LU.isReady()) {
                  if (AU.markAsUnprocessed(), NU = this.isFrozen, cU) return AU._areLightsDisposed = !0, !1
                } else QU.resetCachedMaterial(), zU.setEffect(LU, AU, this._materialContext)
            }
            return !(!zU.effect || !zU.effect.isReady()) && (AU._renderId = QU.getRenderId(), yU._wasPreviouslyReady = !NU, yU._wasPreviouslyUsingInstances = cU, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const UU = this._uniformBuffer;
            UU.addUniform("diffuseLeftColor", 4), UU.addUniform("diffuseRightColor", 4), UU.addUniform("opacityParts", 4), UU.addUniform("reflectionLeftColor", 4), UU.addUniform("reflectionRightColor", 4), UU.addUniform("refractionLeftColor", 4), UU.addUniform("refractionRightColor", 4), UU.addUniform("emissiveLeftColor", 4), UU.addUniform("emissiveRightColor", 4), UU.addUniform("vDiffuseInfos", 2), UU.addUniform("vAmbientInfos", 2), UU.addUniform("vOpacityInfos", 2), UU.addUniform("vEmissiveInfos", 2), UU.addUniform("vLightmapInfos", 2), UU.addUniform("vSpecularInfos", 2), UU.addUniform("vBumpInfos", 3), UU.addUniform("diffuseMatrix", 16), UU.addUniform("ambientMatrix", 16), UU.addUniform("opacityMatrix", 16), UU.addUniform("emissiveMatrix", 16), UU.addUniform("lightmapMatrix", 16), UU.addUniform("specularMatrix", 16), UU.addUniform("bumpMatrix", 16), UU.addUniform("vTangentSpaceParams", 2), UU.addUniform("pointSize", 1), UU.addUniform("alphaCutOff", 1), UU.addUniform("refractionMatrix", 16), UU.addUniform("vRefractionInfos", 4), UU.addUniform("vRefractionPosition", 3), UU.addUniform("vRefractionSize", 3), UU.addUniform("vSpecularColor", 4), UU.addUniform("vEmissiveColor", 3), UU.addUniform("vDiffuseColor", 4), UU.addUniform("vAmbientColor", 3), UU.addUniform("cameraInfo", 4), UU.addUniform("vTextureRepetitionHexTilingParams", 4), (0, BU.ib)(UU, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(XU, zU, cU) {
            const yU = this.nS(),
              QU = cU.materialDefines;
            if (!QU) return;
            const oU = cU.effect;
            if (!oU) return;
            this._activeEffect = oU, zU.getMeshUniformBuffer().bindToEffect(oU, "Mesh"), zU.transferToEffect(XU), this._uniformBuffer.bindToEffect(oU, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, yU, zU, XU, this.isFrozen), PU.c.Bind(yU.qp().currentRenderPassId, this._activeEffect, zU, XU, this);
            const DU = yU.activeCamera;
            DU ? this._uniformBuffer.updateFloat4("cameraInfo", DU.minZ, DU.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const EU = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", EU[0], EU[1], EU[2], EU[3]), this._eventInfo.subMesh = cU, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), QU.OBJECTSPACE_NORMALMAP && (XU.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const YU = this._mustRebind(yU, oU, cU, zU.visibility),
              NU = yU.qp()._features.needToAlwaysBindUniformBuffers;
            (0, BU.h)(zU, oU), this._vertexPullingMetadata && (0, GU.c)(oU, this._vertexPullingMetadata);
            const IU = this._uniformBuffer;
            if (YU) {
              if (this.bindViewProjection(oU), !IU.useUbo || !this.isFrozen || !IU.isSync || cU._drawWrapper._forceRebindOnNextCall) {
                if (UU.FresnelEnabled && QU.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (IU.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), IU.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const UU = FU.i.Color3[0];
                    UU.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), IU.updateColor4("opacityParts", UU, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (IU.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), IU.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (IU.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), IU.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (IU.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), IU.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (QU.ALPHATEST && IU.updateFloat("alphaCutOff", this.alphaCutOff), yU.texturesEnabled && (this._diffuseTexture && UU.DiffuseTextureEnabled && (IU.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, BU.B)(this._diffuseTexture, IU, "diffuse")), this._ambientTexture && UU.AmbientTextureEnabled && (IU.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, BU.B)(this._ambientTexture, IU, "ambient")), this._opacityTexture && UU.OpacityTextureEnabled && (IU.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, BU.B)(this._opacityTexture, IU, "opacity")), (0, BU.m)(yU, QU, IU, FU.b.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && UU.ReflectionTextureEnabled || IU.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && UU.EmissiveTextureEnabled && (IU.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, BU.B)(this._emissiveTexture, IU, "emissive")), this._lightmapTexture && UU.LightmapTextureEnabled && (IU.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, BU.B)(this._lightmapTexture, IU, "lightmap")), this._specularTexture && UU.SpecularTextureEnabled && (IU.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, BU.B)(this._specularTexture, IU, "specular")), this._bumpTexture && yU.qp().getCaps().standardDerivatives && UU.BumpTextureEnabled && (IU.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, BU.B)(this._bumpTexture, IU, "bump"), yU._mirroredCameraPosition ? IU.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : IU.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && UU.RefractionTextureEnabled)) {
                  let UU = 1;
                  if (this._refractionTexture.isCube || (IU.eUU("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (UU = this._refractionTexture.depth)), IU.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, UU, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const UU = this._refractionTexture;
                    IU.updateVector3("vRefractionPosition", UU.boundingBoxPosition), IU.updateVector3("vRefractionSize", UU.boundingBoxSize)
                  }
                }
                this.pointsCloud && IU.updateFloat("pointSize", this.pointSize), IU.updateColor4("vSpecularColor", this.specularColor, this.specularPower), IU.updateColor3("vEmissiveColor", UU.EmissiveTextureEnabled ? this.emissiveColor : FU.b.BlackReadOnly), IU.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), yU.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), IU.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              yU.texturesEnabled && (this._diffuseTexture && UU.DiffuseTextureEnabled && oU.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && UU.AmbientTextureEnabled && oU.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && UU.OpacityTextureEnabled && oU.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && UU.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? oU.setTexture("reflectionCubeSampler", this._reflectionTexture) : oU.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && UU.EmissiveTextureEnabled && oU.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && UU.LightmapTextureEnabled && oU.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && UU.SpecularTextureEnabled && oU.setTexture("specularSampler", this._specularTexture), this._bumpTexture && yU.qp().getCaps().standardDerivatives && UU.BumpTextureEnabled && oU.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && UU.RefractionTextureEnabled && (this._refractionTexture.isCube ? oU.setTexture("refractionCubeSampler", this._refractionTexture) : oU.setTexture("refraction2DSampler", this._refractionTexture))), this.nS().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(zU) && this.nS().depthPeelingRenderer.bind(oU), this._eventInfo.subMesh = cU, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, kU.e)(oU, this, yU), this.bindEyePosition(oU)
            } else NU && (this._needToBindSceneUbo = !0);
            !YU && this.isFrozen && !NU || !yU.lightsEnabled || this._disableLighting || (0, BU.q)(yU, zU, oU, QU, this._maxSimultaneousLights), !YU && this.isFrozen || ((yU.fogEnabled && zU.applyFog && yU.fogMode !== AU.d.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || zU.receiveShadows || QU.PREPASS || QU.CLUSTLIGHT_BATCH) && this.bindView(oU), (0, BU.i)(yU, zU, oU), QU.NUM_MORPH_INFLUENCERS && (0, BU.w)(zU, oU), QU.BAKED_VERTEX_ANIMATION_TEXTURE && zU.bakedVertexAnimationManager?.bind(oU, QU.INSTANCES), this.useLogarithmicDepth && (0, BU.t)(QU, oU, yU), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(zU, this._activeEffect, cU), IU.update()
          }
          _canBindRunFollower(XU, zU, cU, yU, QU) {
            const AU = XU.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === UU.prototype.isReadyForSubMesh && this.bindForSubMesh === UU.prototype.bindForSubMesh && this._mustRebind === pU.d.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !zU._features.needToAlwaysBindUniformBuffers && !(AU && AU.enabled && AU.currentRTisSceneRT) && !PU.c._Configurations[zU.currentRenderPassId] && !yU.materialDefines?.OBJECTSPACE_NORMALMAP && !cU.skeleton && !QU._bonesComputationForcedToCPU
          }
          _bindRunFollower(UU, XU, zU, cU) {
            this._activeEffect = cU, XU.getMeshUniformBuffer().bindToEffect(cU, "Mesh"), XU.transferToEffect(UU);
            const yU = this._uniformBuffer;
            yU.bindToEffect(cU, "Material");
            const QU = this._scene.activeCamera;
            QU ? yU.updateFloat4("cameraInfo", QU.minZ, QU.maxZ, 0, 0) : yU.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const AU = this.textureRepetitionHexTilingParams;
            yU.updateFloat4("vTextureRepetitionHexTilingParams", AU[0], AU[1], AU[2], AU[3]), this._afterBind(XU, cU, zU), yU.update()
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
          dispose(UU, XU) {
            XU && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(UU, XU)
          }
          clone(XU) {
            let zU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const yU = ZU.b.Clone((() => new UU(XU, this.nS())), this, {
              cloneTexturesOnlyOnce: zU
            });
            return yU.name = XU, yU.id = XU, this.stencil.copyTo(yU.stencil), this._clonePlugins(yU, cU), yU
          }
          static Parse(XU, zU, cU) {
            const yU = ZU.b.Parse((() => new UU(XU.name, zU)), XU, zU, cU);
            return XU.stencil && yU.stencil.parse(XU.stencil, zU, cU), NU.c._ParsePlugins(XU, yU, zU, cU), yU
          }
          static get DiffuseTextureEnabled() {
            return aU.b.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(UU) {
            aU.b.DiffuseTextureEnabled = UU
          }
          static get DetailTextureEnabled() {
            return aU.b.DetailTextureEnabled
          }
          static set DetailTextureEnabled(UU) {
            aU.b.DetailTextureEnabled = UU
          }
          static get AmbientTextureEnabled() {
            return aU.b.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(UU) {
            aU.b.AmbientTextureEnabled = UU
          }
          static get OpacityTextureEnabled() {
            return aU.b.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(UU) {
            aU.b.OpacityTextureEnabled = UU
          }
          static get ReflectionTextureEnabled() {
            return aU.b.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(UU) {
            aU.b.ReflectionTextureEnabled = UU
          }
          static get EmissiveTextureEnabled() {
            return aU.b.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(UU) {
            aU.b.EmissiveTextureEnabled = UU
          }
          static get SpecularTextureEnabled() {
            return aU.b.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(UU) {
            aU.b.SpecularTextureEnabled = UU
          }
          static get BumpTextureEnabled() {
            return aU.b.BumpTextureEnabled
          }
          static set BumpTextureEnabled(UU) {
            aU.b.BumpTextureEnabled = UU
          }
          static get LightmapTextureEnabled() {
            return aU.b.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(UU) {
            aU.b.LightmapTextureEnabled = UU
          }
          static get RefractionTextureEnabled() {
            return aU.b.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(UU) {
            aU.b.RefractionTextureEnabled = UU
          }
          static get ColorGradingTextureEnabled() {
            return aU.b.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(UU) {
            aU.b.ColorGradingTextureEnabled = UU
          }
          static get FresnelEnabled() {
            return aU.b.FresnelEnabled
          }
          static set FresnelEnabled(UU) {
            aU.b.FresnelEnabled = UU
          }
        }, XU = new WeakMap, EU = new WeakMap, IU = new WeakMap, WU = new WeakMap, dU = new WeakMap, LU = new WeakMap, eU = new WeakMap, CU = new WeakMap, qU = new WeakMap, rU = new WeakMap, uU = new WeakMap, fU = new WeakMap, iU = new WeakMap, HU = new WeakMap, MU = new WeakMap, vU = new WeakMap, VU = new WeakMap, sU = new WeakMap, nU = new WeakMap, mU = new WeakMap, lU = new WeakMap, xU = new WeakMap, JU = new WeakMap, jU = new WeakMap, KU = new WeakMap, bU = new WeakMap, TU = new WeakMap, hU = new WeakMap, UX = new WeakMap, XX = new WeakMap, zX = new WeakMap, cX = new WeakMap, (() => {
          const XU = "function" === typeof Symbol && Symbol.metadata ? Object.create(dz[Symbol.metadata] ?? null) : void 0;
          yX = [(0, yU.x)("diffuseTexture")], QX = [(0, yU.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], AX = [(0, yU.x)("ambientTexture")], FX = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], oX = [(0, yU.x)("opacityTexture")], DX = [(0, yU.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], EX = [(0, yU.x)("reflectionTexture")], YX = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], NX = [(0, yU.x)("emissiveTexture")], IX = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], pX = [(0, yU.x)("specularTexture")], aX = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], tX = [(0, yU.x)("bumpTexture")], gX = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], kX = [(0, yU.x)("lightmapTexture")], GX = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], BX = [(0, yU.x)("refractionTexture")], ZX = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], RX = [(0, yU.m)("ambient")], PX = [(0, yU.m)("diffuse")], WX = [(0, yU.m)("specular")], dX = [(0, yU.m)("emissive")], LX = [(0, yU.I)()], eX = [(0, yU.I)("useAlphaFromDiffuseTexture")], CX = [() => ({
            init(UU) {
              return void 0 === UU && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = UU), UU
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(UU) {
              this._useAlphaFromDiffuseTexture = UU
            }
          })], wX = [(0, yU.I)("useEmissiveAsIllumination")], qX = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], OX = [(0, yU.I)("linkEmissiveWithDiffuse")], SX = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], rX = [(0, yU.I)("useSpecularOverAlpha")], uX = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], fX = [(0, yU.I)("useReflectionOverAlpha")], iX = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], HX = [(0, yU.I)("disableLighting")], MX = [(0, yU.c)("_markAllSubMeshesAsLightsDirty")], vX = [(0, yU.I)("useObjectSpaceNormalMap")], VX = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], sX = [(0, yU.I)("useParallax")], nX = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], mX = [(0, yU.I)("useParallaxOcclusion")], lX = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], xX = [(0, yU.I)()], JX = [(0, yU.I)("roughness")], jX = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], KX = [(0, yU.I)()], bX = [(0, yU.I)()], TX = [(0, yU.I)()], hX = [(0, yU.I)("useLightmapAsShadowmap")], Uz = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], Xz = [(0, yU.o)("diffuseFresnelParameters")], zz = [(0, yU.c)("_markAllSubMeshesAsFresnelDirty")], cz = [(0, yU.o)("opacityFresnelParameters")], yz = [(0, yU.c)("_markAllSubMeshesAsFresnelAndMiscDirty")], Qz = [(0, yU.o)("reflectionFresnelParameters")], Az = [(0, yU.c)("_markAllSubMeshesAsFresnelDirty")], Fz = [(0, yU.o)("refractionFresnelParameters")], oz = [(0, yU.c)("_markAllSubMeshesAsFresnelDirty")], Dz = [(0, yU.o)("emissiveFresnelParameters")], Ez = [(0, yU.c)("_markAllSubMeshesAsFresnelDirty")], Yz = [(0, yU.I)("useReflectionFresnelFromSpecular")], Nz = [(0, yU.c)("_markAllSubMeshesAsFresnelDirty")], Iz = [(0, yU.I)("useGlossinessFromSpecularMapAlpha")], pz = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], az = [(0, yU.I)("maxSimultaneousLights")], tz = [(0, yU.c)("_markAllSubMeshesAsLightsDirty")], gz = [(0, yU.I)("invertNormalMapX")], kz = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], Gz = [(0, yU.I)("invertNormalMapY")], Bz = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], Zz = [(0, yU.I)("twoSidedLighting")], Rz = [(0, yU.c)("_markAllSubMeshesAsTexturesDirty")], Pz = [(0, yU.I)("applyDecalMapAfterDetailMap")], Wz = [(0, yU.c)("_markAllSubMeshesAsMiscDirty")], (0, cU.j)(UU, null, QX, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "diffuseTexture" in UU,
              get: UU => UU.diffuseTexture,
              set: (UU, XU) => {
                UU.diffuseTexture = XU
              }
            },
            metadata: XU
          }, Cz, wz), (0, cU.j)(UU, null, FX, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "ambientTexture" in UU,
              get: UU => UU.ambientTexture,
              set: (UU, XU) => {
                UU.ambientTexture = XU
              }
            },
            metadata: XU
          }, Sz, rz), (0, cU.j)(UU, null, DX, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "opacityTexture" in UU,
              get: UU => UU.opacityTexture,
              set: (UU, XU) => {
                UU.opacityTexture = XU
              }
            },
            metadata: XU
          }, iz, Hz), (0, cU.j)(UU, null, YX, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "reflectionTexture" in UU,
              get: UU => UU.reflectionTexture,
              set: (UU, XU) => {
                UU.reflectionTexture = XU
              }
            },
            metadata: XU
          }, Vz, sz), (0, cU.j)(UU, null, IX, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "emissiveTexture" in UU,
              get: UU => UU.emissiveTexture,
              set: (UU, XU) => {
                UU.emissiveTexture = XU
              }
            },
            metadata: XU
          }, lz, xz), (0, cU.j)(UU, null, aX, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularTexture" in UU,
              get: UU => UU.specularTexture,
              set: (UU, XU) => {
                UU.specularTexture = XU
              }
            },
            metadata: XU
          }, Kz, bz), (0, cU.j)(UU, null, gX, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "bumpTexture" in UU,
              get: UU => UU.bumpTexture,
              set: (UU, XU) => {
                UU.bumpTexture = XU
              }
            },
            metadata: XU
          }, Uc, Xc), (0, cU.j)(UU, null, GX, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "lightmapTexture" in UU,
              get: UU => UU.lightmapTexture,
              set: (UU, XU) => {
                UU.lightmapTexture = XU
              }
            },
            metadata: XU
          }, yc, Qc), (0, cU.j)(UU, null, ZX, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "refractionTexture" in UU,
              get: UU => UU.refractionTexture,
              set: (UU, XU) => {
                UU.refractionTexture = XU
              }
            },
            metadata: XU
          }, oc, Dc), (0, cU.j)(UU, null, CX, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "useAlphaFromDiffuseTexture" in UU,
              get: UU => UU.useAlphaFromDiffuseTexture,
              set: (UU, XU) => {
                UU.useAlphaFromDiffuseTexture = XU
              }
            },
            metadata: XU
          }, Rc, Pc), (0, cU.j)(UU, null, qX, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: UU => "useEmissiveAsIllumination" in UU,
              get: UU => UU.useEmissiveAsIllumination,
              set: (UU, XU) => {
                UU.useEmissiveAsIllumination = XU
              }
            },
            metadata: XU
          }, Lc, ec), (0, cU.j)(UU, null, SX, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: UU => "linkEmissiveWithDiffuse" in UU,
              get: UU => UU.linkEmissiveWithDiffuse,
              set: (UU, XU) => {
                UU.linkEmissiveWithDiffuse = XU
              }
            },
            metadata: XU
          }, qc, Oc), (0, cU.j)(UU, null, uX, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: UU => "useSpecularOverAlpha" in UU,
              get: UU => UU.useSpecularOverAlpha,
              set: (UU, XU) => {
                UU.useSpecularOverAlpha = XU
              }
            },
            metadata: XU
          }, uc, fc), (0, cU.j)(UU, null, iX, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: UU => "useReflectionOverAlpha" in UU,
              get: UU => UU.useReflectionOverAlpha,
              set: (UU, XU) => {
                UU.useReflectionOverAlpha = XU
              }
            },
            metadata: XU
          }, Mc, vc), (0, cU.j)(UU, null, MX, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: UU => "disableLighting" in UU,
              get: UU => UU.disableLighting,
              set: (UU, XU) => {
                UU.disableLighting = XU
              }
            },
            metadata: XU
          }, nc, mc), (0, cU.j)(UU, null, VX, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: UU => "useObjectSpaceNormalMap" in UU,
              get: UU => UU.useObjectSpaceNormalMap,
              set: (UU, XU) => {
                UU.useObjectSpaceNormalMap = XU
              }
            },
            metadata: XU
          }, Jc, jc), (0, cU.j)(UU, null, nX, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: UU => "useParallax" in UU,
              get: UU => UU.useParallax,
              set: (UU, XU) => {
                UU.useParallax = XU
              }
            },
            metadata: XU
          }, Tc, hc), (0, cU.j)(UU, null, lX, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: UU => "useParallaxOcclusion" in UU,
              get: UU => UU.useParallaxOcclusion,
              set: (UU, XU) => {
                UU.useParallaxOcclusion = XU
              }
            },
            metadata: XU
          }, zy, cy), (0, cU.j)(UU, null, jX, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: UU => "roughness" in UU,
              get: UU => UU.roughness,
              set: (UU, XU) => {
                UU.roughness = XU
              }
            },
            metadata: XU
          }, oy, Dy), (0, cU.j)(UU, null, Uz, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: UU => "useLightmapAsShadowmap" in UU,
              get: UU => UU.useLightmapAsShadowmap,
              set: (UU, XU) => {
                UU.useLightmapAsShadowmap = XU
              }
            },
            metadata: XU
          }, ky, Gy), (0, cU.j)(UU, null, zz, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "diffuseFresnelParameters" in UU,
              get: UU => UU.diffuseFresnelParameters,
              set: (UU, XU) => {
                UU.diffuseFresnelParameters = XU
              }
            },
            metadata: XU
          }, Ry, Py), (0, cU.j)(UU, null, yz, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "opacityFresnelParameters" in UU,
              get: UU => UU.opacityFresnelParameters,
              set: (UU, XU) => {
                UU.opacityFresnelParameters = XU
              }
            },
            metadata: XU
          }, Ly, ey), (0, cU.j)(UU, null, Az, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "reflectionFresnelParameters" in UU,
              get: UU => UU.reflectionFresnelParameters,
              set: (UU, XU) => {
                UU.reflectionFresnelParameters = XU
              }
            },
            metadata: XU
          }, qy, Oy), (0, cU.j)(UU, null, oz, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "refractionFresnelParameters" in UU,
              get: UU => UU.refractionFresnelParameters,
              set: (UU, XU) => {
                UU.refractionFresnelParameters = XU
              }
            },
            metadata: XU
          }, uy, fy), (0, cU.j)(UU, null, Ez, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "emissiveFresnelParameters" in UU,
              get: UU => UU.emissiveFresnelParameters,
              set: (UU, XU) => {
                UU.emissiveFresnelParameters = XU
              }
            },
            metadata: XU
          }, My, vy), (0, cU.j)(UU, null, Nz, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: UU => "useReflectionFresnelFromSpecular" in UU,
              get: UU => UU.useReflectionFresnelFromSpecular,
              set: (UU, XU) => {
                UU.useReflectionFresnelFromSpecular = XU
              }
            },
            metadata: XU
          }, ny, my), (0, cU.j)(UU, null, pz, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: UU => "useGlossinessFromSpecularMapAlpha" in UU,
              get: UU => UU.useGlossinessFromSpecularMapAlpha,
              set: (UU, XU) => {
                UU.useGlossinessFromSpecularMapAlpha = XU
              }
            },
            metadata: XU
          }, Jy, jy), (0, cU.j)(UU, null, tz, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: UU => "maxSimultaneousLights" in UU,
              get: UU => UU.maxSimultaneousLights,
              set: (UU, XU) => {
                UU.maxSimultaneousLights = XU
              }
            },
            metadata: XU
          }, Ty, hy), (0, cU.j)(UU, null, kz, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: UU => "invertNormalMapX" in UU,
              get: UU => UU.invertNormalMapX,
              set: (UU, XU) => {
                UU.invertNormalMapX = XU
              }
            },
            metadata: XU
          }, zQ, cQ), (0, cU.j)(UU, null, Bz, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: UU => "invertNormalMapY" in UU,
              get: UU => UU.invertNormalMapY,
              set: (UU, XU) => {
                UU.invertNormalMapY = XU
              }
            },
            metadata: XU
          }, AQ, FQ), (0, cU.j)(UU, null, Rz, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: UU => "twoSidedLighting" in UU,
              get: UU => UU.twoSidedLighting,
              set: (UU, XU) => {
                UU.twoSidedLighting = XU
              }
            },
            metadata: XU
          }, EQ, YQ), (0, cU.j)(UU, null, Wz, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: UU => "applyDecalMapAfterDetailMap" in UU,
              get: UU => UU.applyDecalMapAfterDetailMap,
              set: (UU, XU) => {
                UU.applyDecalMapAfterDetailMap = XU
              }
            },
            metadata: XU
          }, pQ, aQ), (0, cU.j)(null, null, yX, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_diffuseTexture" in UU,
              get: UU => UU._diffuseTexture,
              set: (UU, XU) => {
                UU._diffuseTexture = XU
              }
            },
            metadata: XU
          }, Lz, ez), (0, cU.j)(null, null, AX, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_ambientTexture" in UU,
              get: UU => UU._ambientTexture,
              set: (UU, XU) => {
                UU._ambientTexture = XU
              }
            },
            metadata: XU
          }, qz, Oz), (0, cU.j)(null, null, oX, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_opacityTexture" in UU,
              get: UU => UU._opacityTexture,
              set: (UU, XU) => {
                UU._opacityTexture = XU
              }
            },
            metadata: XU
          }, uz, fz), (0, cU.j)(null, null, EX, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_reflectionTexture" in UU,
              get: UU => UU._reflectionTexture,
              set: (UU, XU) => {
                UU._reflectionTexture = XU
              }
            },
            metadata: XU
          }, Mz, vz), (0, cU.j)(null, null, NX, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_emissiveTexture" in UU,
              get: UU => UU._emissiveTexture,
              set: (UU, XU) => {
                UU._emissiveTexture = XU
              }
            },
            metadata: XU
          }, nz, mz), (0, cU.j)(null, null, pX, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_specularTexture" in UU,
              get: UU => UU._specularTexture,
              set: (UU, XU) => {
                UU._specularTexture = XU
              }
            },
            metadata: XU
          }, Jz, jz), (0, cU.j)(null, null, tX, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_bumpTexture" in UU,
              get: UU => UU._bumpTexture,
              set: (UU, XU) => {
                UU._bumpTexture = XU
              }
            },
            metadata: XU
          }, Tz, hz), (0, cU.j)(null, null, kX, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_lightmapTexture" in UU,
              get: UU => UU._lightmapTexture,
              set: (UU, XU) => {
                UU._lightmapTexture = XU
              }
            },
            metadata: XU
          }, zc, cc), (0, cU.j)(null, null, BX, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_refractionTexture" in UU,
              get: UU => UU._refractionTexture,
              set: (UU, XU) => {
                UU._refractionTexture = XU
              }
            },
            metadata: XU
          }, Ac, Fc), (0, cU.j)(null, null, RX, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "ambientColor" in UU,
              get: UU => UU.ambientColor,
              set: (UU, XU) => {
                UU.ambientColor = XU
              }
            },
            metadata: XU
          }, Ec, Yc), (0, cU.j)(null, null, PX, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "diffuseColor" in UU,
              get: UU => UU.diffuseColor,
              set: (UU, XU) => {
                UU.diffuseColor = XU
              }
            },
            metadata: XU
          }, Nc, Ic), (0, cU.j)(null, null, WX, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularColor" in UU,
              get: UU => UU.specularColor,
              set: (UU, XU) => {
                UU.specularColor = XU
              }
            },
            metadata: XU
          }, pc, ac), (0, cU.j)(null, null, dX, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "emissiveColor" in UU,
              get: UU => UU.emissiveColor,
              set: (UU, XU) => {
                UU.emissiveColor = XU
              }
            },
            metadata: XU
          }, tc, gc), (0, cU.j)(null, null, LX, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: UU => "specularPower" in UU,
              get: UU => UU.specularPower,
              set: (UU, XU) => {
                UU.specularPower = XU
              }
            },
            metadata: XU
          }, kc, Gc), (0, cU.j)(null, null, eX, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useAlphaFromDiffuseTexture" in UU,
              get: UU => UU._useAlphaFromDiffuseTexture,
              set: (UU, XU) => {
                UU._useAlphaFromDiffuseTexture = XU
              }
            },
            metadata: XU
          }, Bc, Zc), (0, cU.j)(null, null, wX, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useEmissiveAsIllumination" in UU,
              get: UU => UU._useEmissiveAsIllumination,
              set: (UU, XU) => {
                UU._useEmissiveAsIllumination = XU
              }
            },
            metadata: XU
          }, Wc, dc), (0, cU.j)(null, null, OX, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: UU => "_linkEmissiveWithDiffuse" in UU,
              get: UU => UU._linkEmissiveWithDiffuse,
              set: (UU, XU) => {
                UU._linkEmissiveWithDiffuse = XU
              }
            },
            metadata: XU
          }, Cc, wc), (0, cU.j)(null, null, rX, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useSpecularOverAlpha" in UU,
              get: UU => UU._useSpecularOverAlpha,
              set: (UU, XU) => {
                UU._useSpecularOverAlpha = XU
              }
            },
            metadata: XU
          }, Sc, rc), (0, cU.j)(null, null, fX, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useReflectionOverAlpha" in UU,
              get: UU => UU._useReflectionOverAlpha,
              set: (UU, XU) => {
                UU._useReflectionOverAlpha = XU
              }
            },
            metadata: XU
          }, ic, Hc), (0, cU.j)(null, null, HX, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: UU => "_disableLighting" in UU,
              get: UU => UU._disableLighting,
              set: (UU, XU) => {
                UU._disableLighting = XU
              }
            },
            metadata: XU
          }, Vc, sc), (0, cU.j)(null, null, vX, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useObjectSpaceNormalMap" in UU,
              get: UU => UU._useObjectSpaceNormalMap,
              set: (UU, XU) => {
                UU._useObjectSpaceNormalMap = XU
              }
            },
            metadata: XU
          }, lc, xc), (0, cU.j)(null, null, sX, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useParallax" in UU,
              get: UU => UU._useParallax,
              set: (UU, XU) => {
                UU._useParallax = XU
              }
            },
            metadata: XU
          }, Kc, bc), (0, cU.j)(null, null, mX, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useParallaxOcclusion" in UU,
              get: UU => UU._useParallaxOcclusion,
              set: (UU, XU) => {
                UU._useParallaxOcclusion = XU
              }
            },
            metadata: XU
          }, Uy, Xy), (0, cU.j)(null, null, xX, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: UU => "parallaxScaleBias" in UU,
              get: UU => UU.parallaxScaleBias,
              set: (UU, XU) => {
                UU.parallaxScaleBias = XU
              }
            },
            metadata: XU
          }, yy, Qy), (0, cU.j)(null, null, JX, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: UU => "_roughness" in UU,
              get: UU => UU._roughness,
              set: (UU, XU) => {
                UU._roughness = XU
              }
            },
            metadata: XU
          }, Ay, Fy), (0, cU.j)(null, null, KX, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: UU => "indexOfRefraction" in UU,
              get: UU => UU.indexOfRefraction,
              set: (UU, XU) => {
                UU.indexOfRefraction = XU
              }
            },
            metadata: XU
          }, Ey, Yy), (0, cU.j)(null, null, bX, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: UU => "invertRefractionY" in UU,
              get: UU => UU.invertRefractionY,
              set: (UU, XU) => {
                UU.invertRefractionY = XU
              }
            },
            metadata: XU
          }, Ny, Iy), (0, cU.j)(null, null, TX, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: UU => "alphaCutOff" in UU,
              get: UU => UU.alphaCutOff,
              set: (UU, XU) => {
                UU.alphaCutOff = XU
              }
            },
            metadata: XU
          }, py, ay), (0, cU.j)(null, null, hX, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useLightmapAsShadowmap" in UU,
              get: UU => UU._useLightmapAsShadowmap,
              set: (UU, XU) => {
                UU._useLightmapAsShadowmap = XU
              }
            },
            metadata: XU
          }, ty, gy), (0, cU.j)(null, null, Xz, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "_diffuseFresnelParameters" in UU,
              get: UU => UU._diffuseFresnelParameters,
              set: (UU, XU) => {
                UU._diffuseFresnelParameters = XU
              }
            },
            metadata: XU
          }, By, Zy), (0, cU.j)(null, null, cz, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "_opacityFresnelParameters" in UU,
              get: UU => UU._opacityFresnelParameters,
              set: (UU, XU) => {
                UU._opacityFresnelParameters = XU
              }
            },
            metadata: XU
          }, Wy, dy), (0, cU.j)(null, null, Qz, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "_reflectionFresnelParameters" in UU,
              get: UU => UU._reflectionFresnelParameters,
              set: (UU, XU) => {
                UU._reflectionFresnelParameters = XU
              }
            },
            metadata: XU
          }, Cy, wy), (0, cU.j)(null, null, Fz, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "_refractionFresnelParameters" in UU,
              get: UU => UU._refractionFresnelParameters,
              set: (UU, XU) => {
                UU._refractionFresnelParameters = XU
              }
            },
            metadata: XU
          }, Sy, ry), (0, cU.j)(null, null, Dz, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: UU => "_emissiveFresnelParameters" in UU,
              get: UU => UU._emissiveFresnelParameters,
              set: (UU, XU) => {
                UU._emissiveFresnelParameters = XU
              }
            },
            metadata: XU
          }, iy, Hy), (0, cU.j)(null, null, Yz, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useReflectionFresnelFromSpecular" in UU,
              get: UU => UU._useReflectionFresnelFromSpecular,
              set: (UU, XU) => {
                UU._useReflectionFresnelFromSpecular = XU
              }
            },
            metadata: XU
          }, Vy, sy), (0, cU.j)(null, null, Iz, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: UU => "_useGlossinessFromSpecularMapAlpha" in UU,
              get: UU => UU._useGlossinessFromSpecularMapAlpha,
              set: (UU, XU) => {
                UU._useGlossinessFromSpecularMapAlpha = XU
              }
            },
            metadata: XU
          }, ly, xy), (0, cU.j)(null, null, az, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: UU => "_maxSimultaneousLights" in UU,
              get: UU => UU._maxSimultaneousLights,
              set: (UU, XU) => {
                UU._maxSimultaneousLights = XU
              }
            },
            metadata: XU
          }, Ky, by), (0, cU.j)(null, null, gz, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: UU => "_invertNormalMapX" in UU,
              get: UU => UU._invertNormalMapX,
              set: (UU, XU) => {
                UU._invertNormalMapX = XU
              }
            },
            metadata: XU
          }, UQ, XQ), (0, cU.j)(null, null, Gz, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: UU => "_invertNormalMapY" in UU,
              get: UU => UU._invertNormalMapY,
              set: (UU, XU) => {
                UU._invertNormalMapY = XU
              }
            },
            metadata: XU
          }, yQ, QQ), (0, cU.j)(null, null, Zz, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: UU => "_twoSidedLighting" in UU,
              get: UU => UU._twoSidedLighting,
              set: (UU, XU) => {
                UU._twoSidedLighting = XU
              }
            },
            metadata: XU
          }, oQ, DQ), (0, cU.j)(null, null, Pz, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: UU => "_applyDecalMapAfterDetailMap" in UU,
              get: UU => UU._applyDecalMapAfterDetailMap,
              set: (UU, XU) => {
                UU._applyDecalMapAfterDetailMap = XU
              }
            },
            metadata: XU
          }, NQ, IQ), XU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: XU
          })
        })(), UU.ForceGLSL = !1, UU._ShaderLoader = new RU.e((() => [Promise.all([zU.e(623), zU.e(622)]).then((() => zU(44557))), Promise.all([zU.e(628), zU.e(624), zU.e(637), zU.e(627)]).then((() => zU(44739)))]), (() => [Promise.all([zU.e(644), zU.e(639)]).then((() => zU(44881))), Promise.all([zU.e(645), zU.e(655), zU.e(641)]).then((() => zU(45076)))])), UU
      })(),
      uU = !1;

    function fU() {
      uU || (uU = !0, (0, YU.d)(), (0, eU.h)("BABYLON.StandardMaterial", rU), AU.d.DefaultMaterialFactory = UU => new rU("default material", UU))
    }
    Object.getOwnPropertyDescriptor(rU.prototype, "decalMap") || Object.defineProperty(rU.prototype, "decalMap", (0, CU.i)("StandardMaterial", "decalMap"))
  },
  41453: (UU, XU, zU) => {
    function cU(UU) {
      return class extends UU {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    zU.d(XU, {
      b: () => cU
    })
  },
  41444: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU
    });
    class cU {
      constructor(UU, XU) {
        this._webGL = {
          load: UU,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: XU,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(UU) {
        const XU = 1 === UU ? this._webGPU : this._webGL;
        return XU.loaded ? void 0 : async () => {
          await this._loadAsync(XU)
        }
      }
      async _loadAsync(UU) {
        if (UU.loaded) return;
        let XU = UU.loadPromise;
        const zU = null === XU;
        zU && (XU = Promise.all(UU.load()), UU.loadPromise = XU);
        let cU = !1;
        try {
          await XU, cU = !0
        } finally {
          zU && this._completeLoad(UU, cU)
        }
      }
      _completeLoad(UU, XU) {
        UU.loaded = XU, UU.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);