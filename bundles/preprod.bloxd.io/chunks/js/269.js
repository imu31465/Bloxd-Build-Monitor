export const id = 269;
export const ids = [269];
export const modules = {
  40640: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ
    });
    var wQ = XQ(40272);

    function qQ(QQ) {
      return class extends QQ {
        constructor() {
          super(...arguments);
          const QQ = new.target;
          if (!QQ[Symbol.metadata]) {
            const WQ = Object.getPrototypeOf(QQ)?.[Symbol.metadata];
            QQ[Symbol.metadata] = WQ ? Object.create(WQ) : {}
          }
          const WQ = (0, wQ.e)(QQ[Symbol.metadata]);
          WQ._imageProcessingConfiguration || (WQ._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(QQ) {
          this._attachImageProcessingConfiguration(QQ), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(QQ) {
          QQ !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !QQ && this.sE ? this._imageProcessingConfiguration = this.sE().imageProcessingConfiguration : QQ && (this._imageProcessingConfiguration = QQ), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(QQ) {
          this.imageProcessingConfiguration.colorCurvesEnabled = QQ
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(QQ) {
          this.imageProcessingConfiguration.colorGradingEnabled = QQ
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(QQ) {
          this._imageProcessingConfiguration.toneMappingEnabled = QQ
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(QQ) {
          this._imageProcessingConfiguration.exposure = QQ
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(QQ) {
          this._imageProcessingConfiguration.contrast = QQ
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(QQ) {
          this._imageProcessingConfiguration.colorGradingTexture = QQ
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(QQ) {
          this._imageProcessingConfiguration.colorCurves = QQ
        }
      }
    }
  },
  40538: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ,
      d: () => qQ
    });
    var wQ = XQ(40542);

    function qQ(QQ) {
      return class extends QQ {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class TQ extends wQ.e {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  40608: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => JQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40551),
      TQ = XQ(40268),
      zQ = XQ(40591),
      sQ = XQ(40542),
      FQ = XQ(40612),
      PQ = XQ(40584);
    class gQ extends sQ.e {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let JQ = (() => {
      var QQ, WQ, XQ, sQ;
      let JQ, rQ, IQ, jQ, BQ, yQ, VQ = FQ.b,
        DQ = [],
        pQ = [],
        GQ = [],
        UQ = [],
        bQ = [],
        vQ = [],
        dQ = [],
        HQ = [],
        aQ = [],
        lQ = [],
        hQ = [],
        iQ = [];
      return QQ = class extends VQ {
        get texture() {
          return (0, wQ.d)(this, WQ, "f")
        }
        set texture(QQ) {
          (0, wQ.h)(this, WQ, QQ, "f")
        }
        get normalBlendMethod() {
          return (0, wQ.d)(this, XQ, "f")
        }
        set normalBlendMethod(QQ) {
          (0, wQ.h)(this, XQ, QQ, "f")
        }
        get isEnabled() {
          return (0, wQ.d)(this, sQ, "f")
        }
        set isEnabled(QQ) {
          (0, wQ.h)(this, sQ, QQ, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(QQ) {
          let TQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(QQ, "DetailMap", 140, new gQ, TQ), this._texture = null, WQ.set(this, (0, wQ.n)(this, DQ, void 0)), this.diffuseBlendLevel = ((0, wQ.n)(this, pQ), (0, wQ.n)(this, GQ, 1)), this.roughnessBlendLevel = ((0, wQ.n)(this, UQ), (0, wQ.n)(this, bQ, 1)), this.bumpLevel = ((0, wQ.n)(this, vQ), (0, wQ.n)(this, dQ, 1)), this._normalBlendMethod = ((0, wQ.n)(this, HQ), qQ.b.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), XQ.set(this, (0, wQ.n)(this, aQ, void 0)), this._isEnabled = ((0, wQ.n)(this, lQ), !1), sQ.set(this, (0, wQ.n)(this, hQ, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, wQ.n)(this, iQ), this._internalMarkAllSubMeshesAsTexturesDirty = QQ._dirtyCallbacks[1]
        }
        isReadyForSubMesh(QQ, WQ, XQ) {
          return !this._isEnabled || !(QQ._areTexturesDirty && WQ.texturesEnabled && XQ.getCaps().standardDerivatives && this._texture && zQ.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(QQ, WQ) {
          if (this._isEnabled) {
            QQ.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const XQ = WQ.Uj();
            QQ._areTexturesDirty && (XQ.getCaps().standardDerivatives && this._texture && zQ.e.DetailTextureEnabled && this._isEnabled ? ((0, PQ.db)(this._texture, QQ, "DETAIL"), QQ.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : QQ.DETAIL = !1)
          } else QQ.DETAIL = !1
        }
        bindForSubMesh(QQ, WQ) {
          if (!this._isEnabled) return;
          const XQ = this._material.isFrozen;
          QQ.useUbo && XQ && QQ.isSync || this._texture && zQ.e.DetailTextureEnabled && (QQ.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, PQ.E)(this._texture, QQ, "detail")), WQ.texturesEnabled && this._texture && zQ.e.DetailTextureEnabled && QQ.setTexture("detailSampler", this._texture)
        }
        hasTexture(QQ) {
          return this._texture === QQ
        }
        getActiveTextures(QQ) {
          this._texture && QQ.push(this._texture)
        }
        getAnimatables(QQ) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && QQ.push(this._texture)
        }
        dispose(QQ) {
          QQ && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(QQ) {
          QQ.push("detailSampler")
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
      }, WQ = new WeakMap, XQ = new WeakMap, sQ = new WeakMap, (() => {
        const WQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(VQ[Symbol.metadata] ?? null) : void 0;
        JQ = [(0, TQ.z)("detailTexture"), (0, TQ.e)("_markAllSubMeshesAsTexturesDirty")], rQ = [(0, TQ.I)()], IQ = [(0, TQ.I)()], jQ = [(0, TQ.I)()], BQ = [(0, TQ.I)(), (0, TQ.e)("_markAllSubMeshesAsTexturesDirty")], yQ = [(0, TQ.I)(), (0, TQ.e)("_markAllSubMeshesAsTexturesDirty")], (0, wQ.k)(QQ, null, JQ, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "texture" in QQ,
            get: QQ => QQ.texture,
            set: (QQ, WQ) => {
              QQ.texture = WQ
            }
          },
          metadata: WQ
        }, DQ, pQ), (0, wQ.k)(QQ, null, BQ, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: QQ => "normalBlendMethod" in QQ,
            get: QQ => QQ.normalBlendMethod,
            set: (QQ, WQ) => {
              QQ.normalBlendMethod = WQ
            }
          },
          metadata: WQ
        }, aQ, lQ), (0, wQ.k)(QQ, null, yQ, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isEnabled" in QQ,
            get: QQ => QQ.isEnabled,
            set: (QQ, WQ) => {
              QQ.isEnabled = WQ
            }
          },
          metadata: WQ
        }, hQ, iQ), (0, wQ.k)(null, null, rQ, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "diffuseBlendLevel" in QQ,
            get: QQ => QQ.diffuseBlendLevel,
            set: (QQ, WQ) => {
              QQ.diffuseBlendLevel = WQ
            }
          },
          metadata: WQ
        }, GQ, UQ), (0, wQ.k)(null, null, IQ, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "roughnessBlendLevel" in QQ,
            get: QQ => QQ.roughnessBlendLevel,
            set: (QQ, WQ) => {
              QQ.roughnessBlendLevel = WQ
            }
          },
          metadata: WQ
        }, bQ, vQ), (0, wQ.k)(null, null, jQ, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "bumpLevel" in QQ,
            get: QQ => QQ.bumpLevel,
            set: (QQ, WQ) => {
              QQ.bumpLevel = WQ
            }
          },
          metadata: WQ
        }, dQ, HQ), WQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WQ
        })
      })(), QQ
    })()
  },
  40542: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    class wQ {
      constructor(QQ) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = QQ, QQ)
          for (const WQ in QQ) Object.prototype.hasOwnProperty.call(QQ, WQ) && this._setDefaultValue(WQ)
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
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || QQ, this._isDirty = !0
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
        for (const QQ of Object.keys(this)) "_" !== QQ[0] && this._keys.push(QQ);
        if (this._externalProperties)
          for (const QQ in this._externalProperties) - 1 === this._keys.indexOf(QQ) && this._keys.push(QQ)
      }
      isEqual(QQ) {
        if (this._keys.length !== QQ._keys.length) return !1;
        for (let WQ = 0; WQ < this._keys.length; WQ++) {
          const XQ = this._keys[WQ];
          if (this[XQ] !== QQ[XQ]) return !1
        }
        return !0
      }
      cloneTo(QQ) {
        this._keys.length !== QQ._keys.length && (QQ._keys = this._keys.slice(0));
        for (let WQ = 0; WQ < this._keys.length; WQ++) {
          const XQ = this._keys[WQ];
          QQ[XQ] = this[XQ]
        }
      }
      reset() {
        for (const QQ of this._keys) this._setDefaultValue(QQ)
      }
      _setDefaultValue(QQ) {
        const WQ = this._externalProperties?.[QQ]?.type ?? typeof this[QQ],
          XQ = this._externalProperties?.[QQ]?.default;
        switch (WQ) {
          case "number":
            this[QQ] = XQ ?? 0;
            break;
          case "string":
            this[QQ] = XQ ?? "";
            break;
          default:
            this[QQ] = XQ ?? !1
        }
      }
      toString() {
        let QQ = "";
        for (let WQ = 0; WQ < this._keys.length; WQ++) {
          const XQ = this._keys[WQ],
            wQ = this[XQ];
          switch (typeof wQ) {
            case "number":
            case "string":
              QQ += "#define " + XQ + " " + wQ + "\n";
              break;
            default:
              wQ && (QQ += "#define " + XQ + "\n")
          }
        }
        return QQ
      }
    }
  },
  40628: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      g: () => zQ,
      h: () => TQ
    });
    var wQ, qQ = XQ(37370);

    function TQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const wQ = WQ(QQ);
      if (!Number.isInteger(wQ) || wQ < 0 || wQ > XQ) throw new Error(`Invalid geometry object ID ${wQ} for mesh "${QQ.name}". Object IDs must be integers between 0 and 0x${XQ.toString(16).toUpperCase()}.`);
      return wQ
    }

    function zQ(QQ, WQ) {
      const XQ = WQ(QQ);
      if (!Number.isInteger(XQ) || XQ < 0 || XQ > 255 || 0 !== XQ && 0 === (63 & XQ)) throw new Error(`Invalid geometry mesh-blending tag ${XQ} for mesh "${QQ.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return XQ
    }! function(QQ) {
      QQ[QQ.Zero = 0] = "Zero", QQ[QQ.One = 1] = "One", QQ[QQ.MaxViewZ = 2] = "MaxViewZ", QQ[QQ.NoClear = 3] = "NoClear"
    }(wQ || (wQ = {}));
    class sQ {
      static CreateConfiguration(QQ) {
        return sQ._Configurations[QQ] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: qQ.e.Zero(),
          currentViewProjection: qQ.e.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, sQ._Configurations[QQ]
      }
      static DeleteConfiguration(QQ) {
        delete sQ._Configurations[QQ]
      }
      static GetConfiguration(QQ) {
        return sQ._Configurations[QQ]
      }
      static _PrepareConfiguration(QQ, WQ, XQ) {
        const wQ = sQ._Configurations[QQ];
        wQ._attachments = WQ, wQ._colorAttachments = XQ, wQ._mrtCount = WQ.length;
        let qQ = "#define PREPASS\n";
        for (const TQ of sQ.GeometryTextureDescriptions) {
          const QQ = wQ.defines[TQ.defineIndex];
          void 0 !== QQ && (qQ += `#define ${TQ.define}\n#define ${TQ.defineIndex} ${QQ}\n`)
        }
        wQ.objectIdIsRedFormat && (qQ += "#define PREPASS_OBJECT_ID_R8\n"), wQ._defines = qQ + `#define SCENE_MRT_COUNT ${WQ.length}\n`
      }
      static _PrepareStringDefines(QQ, WQ) {
        const XQ = sQ._Configurations[QQ];
        return !!XQ?._defines && (WQ.push(XQ._defines), !0)
      }
      static _BindAttachmentsForEffect(QQ, WQ) {
        const XQ = sQ._Configurations[QQ.currentRenderPassId];
        return !XQ?._attachments || (QQ.bindAttachments(WQ._multiTarget ? XQ._attachments : XQ._colorAttachments), WQ._multiTarget || void 0 !== XQ.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(QQ) {
        const WQ = sQ._Configurations[QQ.currentRenderPassId];
        WQ?._colorAttachments && QQ.bindAttachments(WQ._colorAttachments)
      }
      static _BindColorAttachments(QQ) {
        const WQ = sQ._Configurations[QQ.currentRenderPassId];
        return !WQ?._colorAttachments || (QQ.bindAttachments(WQ._colorAttachments), void 0 !== WQ.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(QQ) {
        const WQ = sQ._Configurations[QQ.currentRenderPassId];
        return !WQ?._colorAttachments || void 0 !== WQ.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(QQ, WQ) {
        const XQ = sQ._Configurations[QQ.currentRenderPassId];
        if (!XQ) return;
        const wQ = QQ.getAlphaMode(),
          qQ = void 0 === XQ.defines.PREPASS_COLOR_INDEX || 2 === wQ || 1 === wQ || 17 === wQ;
        WQ.setFloat("geometryZeroAlphaDiscard", qQ ? 1 : 0)
      }
      static AddUniformsAndSamplers(QQ, WQ) {
        QQ.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(QQ, WQ) {
        for (const XQ of WQ)
          if (XQ.ZD)
            for (const WQ of XQ.ZD) WQ._removeDrawWrapper(QQ)
      }
      static PrepareDefines(QQ, WQ, XQ) {
        if (!XQ._arePrePassDirty) return;
        const wQ = sQ._Configurations[QQ];
        if (!wQ) return;
        XQ.PREPASS = !0;
        let qQ = 0;
        for (let TQ = 0; TQ < sQ.GeometryTextureDescriptions.length; TQ++) {
          const QQ = sQ.GeometryTextureDescriptions[TQ],
            WQ = QQ.define,
            zQ = QQ.defineIndex,
            FQ = wQ.defines[zQ];
          void 0 !== FQ ? (XQ[WQ] = !0, XQ[zQ] = FQ, qQ++) : (XQ[WQ] = !1, delete XQ[zQ])
        }
        XQ.PREPASS_OBJECT_ID_R8 = wQ.objectIdIsRedFormat, XQ.SCENE_MRT_COUNT = wQ._mrtCount ?? qQ, XQ.BONES_VELOCITY_ENABLED = WQ.useBones && WQ.computeBonesUsingShaders && WQ.skeleton && !WQ.skeleton.isUsingTextureForMatrices && -1 === wQ.excludedSkinnedMesh.indexOf(WQ)
      }
      static Bind(QQ, WQ, XQ, wQ, qQ) {
        const FQ = sQ._Configurations[QQ];
        if (!FQ) return;
        const PQ = XQ.sE(),
          gQ = PQ.Uj();
        if (FQ.reverseCulling && gQ.setStateCullFaceType(PQ._mirroredCameraPosition ? qQ.cullBackFaces : !qQ.cullBackFaces), void 0 !== FQ.defines.PREPASS_OBJECT_ID_INDEX) {
          const QQ = FQ.objectIdIsRedFormat ? 255 : 16777215;
          let wQ = XQ.uniqueId;
          if (FQ.objectIdProvider) wQ = TQ(XQ, FQ.objectIdProvider, QQ);
          else if (wQ > QQ) throw new Error(`Invalid geometry object ID ${wQ} for mesh "${XQ.name}". Object IDs must be integers between 0 and 0x${QQ.toString(16).toUpperCase()}.`);
          WQ.setFloat("objectId", wQ)
        }
        if (void 0 !== FQ.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const QQ = FQ.meshBlendTagProvider ? zQ(XQ, FQ.meshBlendTagProvider) : XQ.meshBlendingTag;
          WQ.setInt("meshBlendTag", QQ)
        }
        if (void 0 !== FQ.defines.PREPASS_VELOCITY_INDEX || void 0 !== FQ.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const QQ = FQ._currentWorldMatrices ?? (FQ._currentWorldMatrices = {}),
            qQ = FQ._worldMatrixFrameIds ?? (FQ._worldMatrixFrameIds = {});
          if (QQ[XQ.uniqueId] || (QQ[XQ.uniqueId] = wQ.clone(), FQ.previousWorldMatrices[XQ.uniqueId] = wQ.clone()), qQ[XQ.uniqueId] !== gQ.frameId && (FQ.previousWorldMatrices[XQ.uniqueId].WH(QQ[XQ.uniqueId]), qQ[XQ.uniqueId] = gQ.frameId), QQ[XQ.uniqueId].WH(wQ), -1 === FQ.lastUpdateFrameId ? (FQ.lastUpdateFrameId = gQ.frameId, FQ.previousViewProjection.WH(PQ.getTransformMatrix()), FQ.currentViewProjection.WH(PQ.getTransformMatrix())) : FQ.currentViewProjection.updateFlag !== PQ.getTransformMatrix().updateFlag ? (FQ.lastUpdateFrameId = gQ.frameId, FQ.previousViewProjection.WH(FQ.currentViewProjection), FQ.currentViewProjection.WH(PQ.getTransformMatrix())) : FQ.lastUpdateFrameId !== gQ.frameId && (FQ.lastUpdateFrameId = gQ.frameId, FQ.previousViewProjection.WH(FQ.currentViewProjection)), WQ.setMatrix("previousWorld", FQ.previousWorldMatrices[XQ.uniqueId]), WQ.setMatrix("previousViewProjection", FQ.previousViewProjection), XQ.useBones && XQ.computeBonesUsingShaders && XQ.skeleton) {
            const QQ = XQ.skeleton;
            if (!QQ.isUsingTextureForMatrices || -1 === WQ.getUniformIndex("boneTextureInfo")) {
              const wQ = QQ.getTransformMatrices(XQ);
              wQ && (FQ.previousBones[XQ.uniqueId] || (FQ.previousBones[XQ.uniqueId] = wQ.slice()), WQ.setMatrices("mPreviousBones", FQ.previousBones[XQ.uniqueId]), FQ.previousBones[XQ.uniqueId].set(wQ))
            }
          }
        }
      }
    }
    sQ.GeometryTextureDescriptions = [{
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
    }], sQ._Configurations = {}
  },
  40612: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => rQ,
      d: () => jQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40268),
      TQ = XQ(40158),
      zQ = XQ(40126);
    const sQ = new RegExp("^([gimus]+)!");
    class FQ {
      constructor(QQ) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = QQ, this._scene = QQ.sE(), this._engine = this._scene.Uj()
      }
      _addPlugin(QQ) {
        for (let wQ = 0; wQ < this._plugins.length; ++wQ)
          if (this._plugins[wQ].name === QQ.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !QQ.isCompatible(this._material.shaderLanguage)) throw `The plugin "${QQ.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const WQ = QQ.getClassName();
        FQ._MaterialPluginClassToMainDefine[WQ] || (FQ._MaterialPluginClassToMainDefine[WQ] = "MATERIALPLUGIN_" + ++FQ._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (QQ, WQ) => this._handlePluginEvent(QQ, WQ), this._plugins.push(QQ), this._plugins.sort(((QQ, WQ) => QQ.priority - WQ.priority)), this._codeInjectionPoints = {};
        const XQ = {};
        XQ[FQ._MaterialPluginClassToMainDefine[WQ]] = {
          type: "boolean",
          default: !0
        };
        for (const wQ of this._plugins) wQ.collectDefines(XQ), this._collectPointNames("vertex", wQ.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", wQ.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = XQ, !0
      }
      _activatePlugin(QQ) {
        -1 === this._activePlugins.indexOf(QQ) && (this._activePlugins.push(QQ), this._activePlugins.sort(((QQ, WQ) => QQ.priority - WQ.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), QQ.registerForExtraEvents && (this._activePluginsForExtraEvents.push(QQ), this._activePluginsForExtraEvents.sort(((QQ, WQ) => QQ.priority - WQ.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(QQ) {
        for (let WQ = 0; WQ < this._plugins.length; ++WQ)
          if (this._plugins[WQ].name === QQ) return this._plugins[WQ];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(QQ) {
        let WQ = !0;
        for (const XQ of this._activePlugins) WQ = WQ && XQ.isReadyForSubMesh(QQ.defines, this._scene, this._engine, QQ.subMesh);
        QQ.isReadyForSubMesh = WQ
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(QQ) {
        for (const WQ of this._activePlugins) WQ.prepareDefinesBeforeAttributes(QQ.defines, this._scene, QQ.mesh)
      }
      _handlePluginEventPrepareDefines(QQ) {
        for (const WQ of this._activePlugins) WQ.prepareDefines(QQ.defines, this._scene, QQ.mesh)
      }
      _handlePluginEventHardBindForSubMesh(QQ) {
        for (const WQ of this._activePluginsForExtraEvents) WQ.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, QQ.subMesh)
      }
      _handlePluginEventBindForSubMesh(QQ) {
        for (const WQ of this._activePlugins) WQ.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, QQ.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(QQ) {
        let WQ = !1;
        for (const XQ of this._activePluginsForExtraEvents)
          if (WQ = XQ.hasRenderTargetTextures(), WQ) break;
        QQ.hasRenderTargetTextures = WQ
      }
      _handlePluginEventFillRenderTargetTextures(QQ) {
        for (const WQ of this._activePluginsForExtraEvents) WQ.fillRenderTargetTextures(QQ.renderTargets)
      }
      _handlePluginEvent(QQ, WQ) {
        switch (QQ) {
          case 512: {
            const QQ = WQ;
            for (const WQ of this._activePlugins) WQ.getActiveTextures(QQ.activeTextures);
            break
          }
          case 256: {
            const QQ = WQ;
            for (const WQ of this._activePlugins) WQ.getAnimatables(QQ.animatables);
            break
          }
          case 1024: {
            const QQ = WQ;
            let XQ = !1;
            for (const WQ of this._activePlugins)
              if (XQ = WQ.hasTexture(QQ.texture), XQ) break;
            QQ.hasTexture = XQ;
            break
          }
          case 2: {
            const QQ = WQ;
            for (const WQ of this._plugins) WQ.dispose(QQ.forceDisposeTextures);
            break
          }
          case 4:
            WQ.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const QQ = WQ;
            for (const WQ of this._activePlugins) QQ.fallbackRank = WQ.addFallbacks(QQ.defines, QQ.fallbacks, QQ.fallbackRank), WQ.getAttributes(QQ.attributes, this._scene, QQ.mesh);
            this._uniformList.length > 0 && QQ.uniforms.push(...this._uniformList), this._samplerList.length > 0 && QQ.samplers.push(...this._samplerList), this._uboList.length > 0 && QQ.uniformBuffersNames.push(...this._uboList), QQ.customCode = this._injectCustomCode(QQ, QQ.customCode);
            break
          }
          case 8: {
            const QQ = WQ;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const XQ = 1 === this._material.shaderLanguage;
            for (const WQ of this._plugins) {
              const wQ = WQ.getUniforms(this._material.shaderLanguage);
              if (wQ) {
                if (wQ.ubo)
                  for (const WQ of wQ.ubo) {
                    if (WQ.size && WQ.type) {
                      const wQ = WQ.arraySize ?? 0;
                      if (QQ.ubo.addUniform(WQ.name, WQ.size, wQ), XQ) {
                        let QQ;
                        switch (WQ.type) {
                          case "mat4":
                            QQ = "mat4x4f";
                            break;
                          case "float":
                            QQ = "f32";
                            break;
                          default:
                            QQ = `${WQ.type}f`
                        }
                        this._uboDeclaration += wQ > 0 ? `uniform ${WQ.name}: array<${QQ}, ${wQ}>;\n` : `uniform ${WQ.name}: ${QQ};\n`
                      } else this._uboDeclaration += `${WQ.type} ${WQ.name}${wQ>0?`[${wQ}]`:""};\n`
                    }
                    this._uniformList.push(WQ.name)
                  }
                wQ.vertex && (this._vertexDeclaration += wQ.vertex + "\n"), wQ.fragment && (this._fragmentDeclaration += wQ.fragment + "\n"), wQ.externalUniforms && this._uniformList.push(...wQ.externalUniforms)
              }
              WQ.getSamplers(this._samplerList), WQ.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(QQ, WQ) {
        if (WQ)
          for (const XQ in WQ) this._codeInjectionPoints[QQ] || (this._codeInjectionPoints[QQ] = {}), this._codeInjectionPoints[QQ][XQ] = !0
      }
      _injectCustomCode(QQ, WQ) {
        return (XQ, wQ) => {
          WQ && (wQ = WQ(XQ, wQ)), this._uboDeclaration && (wQ = wQ.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (wQ = wQ.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (wQ = wQ.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const qQ = this._codeInjectionPoints?.[XQ];
          if (!qQ) return wQ;
          let FQ = null;
          for (let WQ in qQ) {
            let qQ = "";
            for (const wQ of this._activePlugins) {
              const sQ = this._material.shaderLanguage;
              let PQ = wQ.getCustomCode(XQ, sQ)?.[WQ];
              PQ && (wQ.resolveIncludes && (null === FQ && (FQ = {
                defines: [],
                indexParameters: QQ.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: zQ.b.GetShadersRepository(sQ),
                includesShadersStore: zQ.b.GetIncludesShadersStore(sQ),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                vwQ: this._engine.vwQ,
                processCodeAfterIncludes: void 0
              }), FQ.isFragment = "fragment" === XQ, (0, TQ.f)(PQ, FQ, (QQ => PQ = QQ))), qQ += PQ + "\n")
            }
            if (qQ.length > 0)
              if ("!" === WQ.charAt(0)) {
                WQ = WQ.substring(1);
                let QQ = "g";
                if ("!" === WQ.charAt(0)) QQ = "", WQ = WQ.substring(1);
                else {
                  const XQ = sQ.exec(WQ);
                  XQ && XQ.length >= 2 && (QQ = XQ[1], WQ = WQ.substring(QQ.length + 1))
                }
                QQ.indexOf("g") < 0 && (QQ += "g");
                const XQ = new RegExp(WQ, QQ);
                let TQ = XQ.exec(wQ);
                for (; null !== TQ;) {
                  const {
                    index: QQ
                  } = TQ, WQ = PQ(qQ, TQ);
                  wQ = wQ.substring(0, QQ) + WQ + wQ.substring(QQ + TQ[0].length), XQ.lastIndex = QQ + WQ.length, TQ = XQ.exec(wQ)
                }
              } else {
                const QQ = "#define " + WQ;
                wQ = wQ.replace(QQ, "\n" + qQ + "\n" + QQ)
              }
          }
          return wQ
        }
      }
    }
    FQ._MaterialPluginClassToMainDefine = {}, FQ._MaterialPluginCounter = 0;

    function PQ(QQ, WQ) {
      return QQ.replace(/\$(\d+)/g, ((QQ, XQ) => {
        const wQ = Number(XQ);
        return wQ < WQ.length ? WQ[wQ] : ""
      }))
    }
    var gQ = XQ(40286),
      JQ = XQ(37418);
    let rQ = (() => {
        var QQ;
        let WQ, XQ, TQ, zQ, sQ = [],
          PQ = [],
          JQ = [],
          rQ = [],
          IQ = [],
          jQ = [],
          BQ = [],
          yQ = [];
        return QQ = class {
          isCompatible(QQ) {
            return 0 === QQ
          }
          _enable(QQ) {
            QQ && this._pluginManager._activatePlugin(this)
          }
          constructor(QQ, WQ, XQ, qQ) {
            let TQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              zQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              gQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, wQ.n)(this, sQ, void 0), this.priority = ((0, wQ.n)(this, PQ), (0, wQ.n)(this, JQ, 500)), this.resolveIncludes = ((0, wQ.n)(this, rQ), (0, wQ.n)(this, IQ, !1)), this.registerForExtraEvents = ((0, wQ.n)(this, jQ), (0, wQ.n)(this, BQ, !1)), this.doNotSerialize = ((0, wQ.n)(this, yQ), !1), this._material = QQ, this.name = WQ, this.priority = XQ, this.resolveIncludes = gQ, QQ.pluginManager || (QQ.pluginManager = new FQ(QQ), QQ.yE.add((() => {
              QQ.pluginManager = void 0
            }))), this._pluginDefineNames = qQ, this._pluginManager = QQ.pluginManager, TQ && this._pluginManager._addPlugin(this), zQ && this._enable(!0), this.markAllDefinesAsDirty = QQ._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(QQ, WQ, XQ, wQ) {
            return !0
          }
          hardBindForSubMesh(QQ, WQ, XQ, wQ) {}
          bindForSubMesh(QQ, WQ, XQ, wQ) {}
          dispose(QQ) {}
          getCustomCode(QQ) {
            return null
          }
          collectDefines(QQ) {
            if (this._pluginDefineNames)
              for (const WQ of Object.keys(this._pluginDefineNames)) {
                if ("_" === WQ[0]) continue;
                const XQ = typeof this._pluginDefineNames[WQ];
                QQ[WQ] = {
                  type: "number" === XQ ? "number" : "string" === XQ ? "string" : "boolean" === XQ ? "boolean" : "object",
                  default: this._pluginDefineNames[WQ]
                }
              }
          }
          prepareDefinesBeforeAttributes(QQ, WQ, XQ) {}
          prepareDefines(QQ, WQ, XQ) {}
          hasTexture(QQ) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(QQ) {}
          getActiveTextures(QQ) {}
          getAnimatables(QQ) {}
          addFallbacks(QQ, WQ, XQ) {
            return XQ
          }
          getSamplers(QQ) {}
          getAttributes(QQ, WQ, XQ) {}
          getUniformBuffersNames(QQ) {}
          getUniforms() {
            return {}
          }
          copyTo(QQ) {
            gQ.b.Clone((() => QQ), this)
          }
          serialize() {
            return gQ.b.Serialize(this)
          }
          parse(QQ, WQ, XQ) {
            gQ.b.Parse((() => this), QQ, WQ, XQ)
          }
        }, (() => {
          const FQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], TQ = [(0, qQ.I)()], zQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: QQ => "name" in QQ,
              get: QQ => QQ.name,
              set: (QQ, WQ) => {
                QQ.name = WQ
              }
            },
            metadata: FQ
          }, sQ, PQ), (0, wQ.k)(null, null, XQ, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: QQ => "priority" in QQ,
              get: QQ => QQ.priority,
              set: (QQ, WQ) => {
                QQ.priority = WQ
              }
            },
            metadata: FQ
          }, JQ, rQ), (0, wQ.k)(null, null, TQ, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: QQ => "resolveIncludes" in QQ,
              get: QQ => QQ.resolveIncludes,
              set: (QQ, WQ) => {
                QQ.resolveIncludes = WQ
              }
            },
            metadata: FQ
          }, IQ, jQ), (0, wQ.k)(null, null, zQ, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: QQ => "registerForExtraEvents" in QQ,
              get: QQ => QQ.registerForExtraEvents,
              set: (QQ, WQ) => {
                QQ.registerForExtraEvents = WQ
              }
            },
            metadata: FQ
          }, BQ, yQ), FQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: FQ
          })
        })(), QQ
      })(),
      IQ = !1;

    function jQ() {
      IQ || (IQ = !0, (0, JQ.d)("BABYLON.MaterialPluginBase", rQ))
    }
  },
  40535: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    class wQ {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(QQ) {
        QQ.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(QQ) {}
      bindForSubMesh(QQ, WQ, XQ, wQ, qQ) {
        if (WQ.prePassRenderer && WQ.prePassRenderer.enabled && WQ.prePassRenderer.currentRTisSceneRT && (-1 !== WQ.prePassRenderer.getIndex(2) || -1 !== WQ.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[XQ.uniqueId] || (this.previousWorldMatrices[XQ.uniqueId] = wQ.clone()), this.previousViewProjection || (this.previousViewProjection = WQ.getTransformMatrix().clone(), this.currentViewProjection = WQ.getTransformMatrix().clone());
          const qQ = WQ.Uj();
          this.currentViewProjection.updateFlag !== WQ.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = qQ.frameId, this.previousViewProjection.WH(this.currentViewProjection), this.currentViewProjection.WH(WQ.getTransformMatrix())) : this._lastUpdateFrameId !== qQ.frameId && (this._lastUpdateFrameId = qQ.frameId, this.previousViewProjection.WH(this.currentViewProjection)), QQ.setMatrix("previousWorld", this.previousWorldMatrices[XQ.uniqueId]), QQ.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[XQ.uniqueId] = wQ.clone()
        }
      }
    }
  },
  40636: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return class extends QQ {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    XQ.d(WQ, {
      e: () => wQ
    })
  },
  40530: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      StandardMaterial: () => wQ.i
    });
    var wQ = XQ(40533);
    (0, wQ.e)()
  },
  40533: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => uQ,
      i: () => EQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40268),
      TQ = XQ(40371),
      zQ = XQ(40355),
      sQ = XQ(37546),
      FQ = XQ(40404),
      PQ = XQ(40535),
      gQ = XQ(40538),
      JQ = XQ(40379),
      rQ = XQ(40551),
      IQ = XQ(40542),
      jQ = XQ(40596),
      BQ = XQ(40591),
      yQ = XQ(40602),
      VQ = XQ(40608),
      DQ = XQ(40589),
      pQ = XQ(40621),
      GQ = XQ(40584),
      UQ = XQ(40286),
      bQ = XQ(40623),
      vQ = XQ(40628),
      dQ = XQ(40632),
      HQ = XQ(40636),
      aQ = XQ(40640),
      lQ = XQ(37418),
      hQ = XQ(40153);
    const iQ = {
      effect: null,
      subMesh: null
    };
    class cQ extends((0, HQ.e)((0, dQ.b)(IQ.e))) {}
    class AQ extends((0, gQ.d)(cQ)) {
      constructor(QQ) {
        super(QQ), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class RQ extends((0, aQ.e)(jQ.d)) {}
    let EQ = (() => {
        var QQ, WQ, gQ, IQ, dQ, HQ, aQ, lQ, hQ, cQ, EQ, CQ, uQ, LQ, kQ, fQ, SQ, tQ, oQ, eQ, nQ, xQ, YQ, NQ, ZQ, OQ, KQ, mQ, MQ, QW, WW, XW, wW;
        let qW, TW, zW, sW, FW, PW, gW, JW, rW, IW, jW, BW, yW, VW, DW, pW, GW, UW, bW, vW, dW, HW, aW, lW, hW, iW, cW, AW, RW, EW, CW, uW, LW, kW, fW, SW, tW, oW, eW, nW, xW, YW, NW, ZW, OW, KW, mW, MW, QX, WX, XX, wX, qX, TX, zX, sX, FX, PX, gX, JX, rX, IX, jX, BX, yX, VX, DX, pX, GX, UX, bX, vX, dX, HX = RQ,
          aX = [],
          lX = [],
          hX = [],
          iX = [],
          cX = [],
          AX = [],
          RX = [],
          EX = [],
          CX = [],
          uX = [],
          LX = [],
          kX = [],
          fX = [],
          SX = [],
          tX = [],
          oX = [],
          eX = [],
          nX = [],
          xX = [],
          YX = [],
          NX = [],
          ZX = [],
          OX = [],
          KX = [],
          mX = [],
          MX = [],
          Qw = [],
          Ww = [],
          Xw = [],
          ww = [],
          qw = [],
          Tw = [],
          zw = [],
          sw = [],
          Fw = [],
          Pw = [],
          gw = [],
          Jw = [],
          rw = [],
          Iw = [],
          jw = [],
          Bw = [],
          yw = [],
          Vw = [],
          Dw = [],
          pw = [],
          Gw = [],
          Uw = [],
          bw = [],
          vw = [],
          dw = [],
          Hw = [],
          aw = [],
          lw = [],
          hw = [],
          iw = [],
          Aw = [],
          Rw = [],
          Ew = [],
          Cw = [],
          uw = [],
          Lw = [],
          kw = [],
          fw = [],
          Sw = [],
          tw = [],
          ow = [],
          ew = [],
          nw = [],
          xw = [],
          Yw = [],
          Nw = [],
          Zw = [],
          Ow = [],
          Kw = [],
          mw = [],
          Mw = [],
          Qq = [],
          Wq = [],
          Xq = [],
          wq = [],
          qq = [],
          Tq = [],
          zq = [],
          sq = [],
          Fq = [],
          Pq = [],
          gq = [],
          Jq = [],
          rq = [],
          Iq = [],
          jq = [],
          Bq = [],
          yq = [],
          Vq = [],
          Dq = [],
          pq = [],
          Gq = [],
          Uq = [],
          bq = [],
          vq = [],
          dq = [],
          Hq = [],
          aq = [],
          lq = [],
          hq = [],
          iq = [],
          cq = [],
          Aq = [],
          Rq = [],
          Eq = [],
          Cq = [],
          uq = [],
          Lq = [],
          kq = [],
          fq = [],
          Sq = [],
          tq = [],
          oq = [],
          eq = [],
          nq = [],
          xq = [],
          Yq = [],
          Nq = [],
          Zq = [],
          Oq = [],
          Kq = [],
          mq = [],
          Mq = [],
          QT = [],
          WT = [],
          XT = [],
          wT = [],
          qT = [],
          TT = [],
          zT = [],
          sT = [],
          FT = [],
          PT = [],
          gT = [],
          JT = [],
          rT = [],
          IT = [],
          jT = [],
          BT = [],
          yT = [];
        return QQ = class extends HX {
          get diffuseTexture() {
            return (0, wQ.d)(this, WQ, "f")
          }
          set diffuseTexture(QQ) {
            (0, wQ.h)(this, WQ, QQ, "f")
          }
          get ambientTexture() {
            return (0, wQ.d)(this, gQ, "f")
          }
          set ambientTexture(QQ) {
            (0, wQ.h)(this, gQ, QQ, "f")
          }
          get opacityTexture() {
            return (0, wQ.d)(this, IQ, "f")
          }
          set opacityTexture(QQ) {
            (0, wQ.h)(this, IQ, QQ, "f")
          }
          get reflectionTexture() {
            return (0, wQ.d)(this, dQ, "f")
          }
          set reflectionTexture(QQ) {
            (0, wQ.h)(this, dQ, QQ, "f")
          }
          get emissiveTexture() {
            return (0, wQ.d)(this, HQ, "f")
          }
          set emissiveTexture(QQ) {
            (0, wQ.h)(this, HQ, QQ, "f")
          }
          get specularTexture() {
            return (0, wQ.d)(this, aQ, "f")
          }
          set specularTexture(QQ) {
            (0, wQ.h)(this, aQ, QQ, "f")
          }
          get bumpTexture() {
            return (0, wQ.d)(this, lQ, "f")
          }
          set bumpTexture(QQ) {
            (0, wQ.h)(this, lQ, QQ, "f")
          }
          get lightmapTexture() {
            return (0, wQ.d)(this, hQ, "f")
          }
          set lightmapTexture(QQ) {
            (0, wQ.h)(this, hQ, QQ, "f")
          }
          get refractionTexture() {
            return (0, wQ.d)(this, cQ, "f")
          }
          set refractionTexture(QQ) {
            (0, wQ.h)(this, cQ, QQ, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, wQ.d)(this, EQ, "f")
          }
          set useAlphaFromDiffuseTexture(QQ) {
            (0, wQ.h)(this, EQ, QQ, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, wQ.d)(this, CQ, "f")
          }
          set useEmissiveAsIllumination(QQ) {
            (0, wQ.h)(this, CQ, QQ, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, wQ.d)(this, uQ, "f")
          }
          set linkEmissiveWithDiffuse(QQ) {
            (0, wQ.h)(this, uQ, QQ, "f")
          }
          get useSpecularOverAlpha() {
            return (0, wQ.d)(this, LQ, "f")
          }
          set useSpecularOverAlpha(QQ) {
            (0, wQ.h)(this, LQ, QQ, "f")
          }
          get useReflectionOverAlpha() {
            return (0, wQ.d)(this, kQ, "f")
          }
          set useReflectionOverAlpha(QQ) {
            (0, wQ.h)(this, kQ, QQ, "f")
          }
          get disableLighting() {
            return (0, wQ.d)(this, fQ, "f")
          }
          set disableLighting(QQ) {
            (0, wQ.h)(this, fQ, QQ, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, wQ.d)(this, SQ, "f")
          }
          set useObjectSpaceNormalMap(QQ) {
            (0, wQ.h)(this, SQ, QQ, "f")
          }
          get useParallax() {
            return (0, wQ.d)(this, tQ, "f")
          }
          set useParallax(QQ) {
            (0, wQ.h)(this, tQ, QQ, "f")
          }
          get useParallaxOcclusion() {
            return (0, wQ.d)(this, oQ, "f")
          }
          set useParallaxOcclusion(QQ) {
            (0, wQ.h)(this, oQ, QQ, "f")
          }
          get roughness() {
            return (0, wQ.d)(this, eQ, "f")
          }
          set roughness(QQ) {
            (0, wQ.h)(this, eQ, QQ, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, wQ.d)(this, nQ, "f")
          }
          set useLightmapAsShadowmap(QQ) {
            (0, wQ.h)(this, nQ, QQ, "f")
          }
          get diffuseFresnelParameters() {
            return (0, wQ.d)(this, xQ, "f")
          }
          set diffuseFresnelParameters(QQ) {
            (0, wQ.h)(this, xQ, QQ, "f")
          }
          get opacityFresnelParameters() {
            return (0, wQ.d)(this, YQ, "f")
          }
          set opacityFresnelParameters(QQ) {
            (0, wQ.h)(this, YQ, QQ, "f")
          }
          get reflectionFresnelParameters() {
            return (0, wQ.d)(this, NQ, "f")
          }
          set reflectionFresnelParameters(QQ) {
            (0, wQ.h)(this, NQ, QQ, "f")
          }
          get refractionFresnelParameters() {
            return (0, wQ.d)(this, ZQ, "f")
          }
          set refractionFresnelParameters(QQ) {
            (0, wQ.h)(this, ZQ, QQ, "f")
          }
          get emissiveFresnelParameters() {
            return (0, wQ.d)(this, OQ, "f")
          }
          set emissiveFresnelParameters(QQ) {
            (0, wQ.h)(this, OQ, QQ, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, wQ.d)(this, KQ, "f")
          }
          set useReflectionFresnelFromSpecular(QQ) {
            (0, wQ.h)(this, KQ, QQ, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, wQ.d)(this, mQ, "f")
          }
          set useGlossinessFromSpecularMapAlpha(QQ) {
            (0, wQ.h)(this, mQ, QQ, "f")
          }
          get maxSimultaneousLights() {
            return (0, wQ.d)(this, MQ, "f")
          }
          set maxSimultaneousLights(QQ) {
            (0, wQ.h)(this, MQ, QQ, "f")
          }
          get invertNormalMapX() {
            return (0, wQ.d)(this, QW, "f")
          }
          set invertNormalMapX(QQ) {
            (0, wQ.h)(this, QW, QQ, "f")
          }
          get invertNormalMapY() {
            return (0, wQ.d)(this, WW, "f")
          }
          set invertNormalMapY(QQ) {
            (0, wQ.h)(this, WW, QQ, "f")
          }
          get twoSidedLighting() {
            return (0, wQ.d)(this, XW, "f")
          }
          set twoSidedLighting(QQ) {
            (0, wQ.h)(this, XW, QQ, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, wQ.d)(this, wW, "f")
          }
          set applyDecalMapAfterDetailMap(QQ) {
            (0, wQ.h)(this, wW, QQ, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(XQ, qQ) {
            super(XQ, qQ, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || QQ.ForceGLSL), this._diffuseTexture = (0, wQ.n)(this, aX, null), WQ.set(this, ((0, wQ.n)(this, lX), (0, wQ.n)(this, hX, void 0))), this._ambientTexture = ((0, wQ.n)(this, iX), (0, wQ.n)(this, cX, null)), gQ.set(this, ((0, wQ.n)(this, AX), (0, wQ.n)(this, RX, void 0))), this._opacityTexture = ((0, wQ.n)(this, EX), (0, wQ.n)(this, CX, null)), IQ.set(this, ((0, wQ.n)(this, uX), (0, wQ.n)(this, LX, void 0))), this._reflectionTexture = ((0, wQ.n)(this, kX), (0, wQ.n)(this, fX, null)), dQ.set(this, ((0, wQ.n)(this, SX), (0, wQ.n)(this, tX, void 0))), this._emissiveTexture = ((0, wQ.n)(this, oX), (0, wQ.n)(this, eX, null)), HQ.set(this, ((0, wQ.n)(this, nX), (0, wQ.n)(this, xX, void 0))), this._specularTexture = ((0, wQ.n)(this, YX), (0, wQ.n)(this, NX, null)), aQ.set(this, ((0, wQ.n)(this, ZX), (0, wQ.n)(this, OX, void 0))), this._bumpTexture = ((0, wQ.n)(this, KX), (0, wQ.n)(this, mX, null)), lQ.set(this, ((0, wQ.n)(this, MX), (0, wQ.n)(this, Qw, void 0))), this._lightmapTexture = ((0, wQ.n)(this, Ww), (0, wQ.n)(this, Xw, null)), hQ.set(this, ((0, wQ.n)(this, ww), (0, wQ.n)(this, qw, void 0))), this._refractionTexture = ((0, wQ.n)(this, Tw), (0, wQ.n)(this, zw, null)), cQ.set(this, ((0, wQ.n)(this, sw), (0, wQ.n)(this, Fw, void 0))), this.ambientColor = ((0, wQ.n)(this, Pw), (0, wQ.n)(this, gw, new sQ.b(0, 0, 0))), this.diffuseColor = ((0, wQ.n)(this, Jw), (0, wQ.n)(this, rw, new sQ.b(1, 1, 1))), this.specularColor = ((0, wQ.n)(this, Iw), (0, wQ.n)(this, jw, new sQ.b(1, 1, 1))), this.emissiveColor = ((0, wQ.n)(this, Bw), (0, wQ.n)(this, yw, new sQ.b(0, 0, 0))), this.specularPower = ((0, wQ.n)(this, Vw), (0, wQ.n)(this, Dw, 64)), this._useAlphaFromDiffuseTexture = ((0, wQ.n)(this, pw), (0, wQ.n)(this, Gw, !1)), EQ.set(this, ((0, wQ.n)(this, Uw), (0, wQ.n)(this, bw, void 0))), this._useEmissiveAsIllumination = ((0, wQ.n)(this, vw), (0, wQ.n)(this, dw, !1)), CQ.set(this, ((0, wQ.n)(this, Hw), (0, wQ.n)(this, aw, void 0))), this._linkEmissiveWithDiffuse = ((0, wQ.n)(this, lw), (0, wQ.n)(this, hw, !1)), uQ.set(this, ((0, wQ.n)(this, iw), (0, wQ.n)(this, Aw, void 0))), this._useSpecularOverAlpha = ((0, wQ.n)(this, Rw), (0, wQ.n)(this, Ew, !1)), LQ.set(this, ((0, wQ.n)(this, Cw), (0, wQ.n)(this, uw, void 0))), this._useReflectionOverAlpha = ((0, wQ.n)(this, Lw), (0, wQ.n)(this, kw, !1)), kQ.set(this, ((0, wQ.n)(this, fw), (0, wQ.n)(this, Sw, void 0))), this._disableLighting = ((0, wQ.n)(this, tw), (0, wQ.n)(this, ow, !1)), fQ.set(this, ((0, wQ.n)(this, ew), (0, wQ.n)(this, nw, void 0))), this._useObjectSpaceNormalMap = ((0, wQ.n)(this, xw), (0, wQ.n)(this, Yw, !1)), SQ.set(this, ((0, wQ.n)(this, Nw), (0, wQ.n)(this, Zw, void 0))), this._useParallax = ((0, wQ.n)(this, Ow), (0, wQ.n)(this, Kw, !1)), tQ.set(this, ((0, wQ.n)(this, mw), (0, wQ.n)(this, Mw, void 0))), this._useParallaxOcclusion = ((0, wQ.n)(this, Qq), (0, wQ.n)(this, Wq, !1)), oQ.set(this, ((0, wQ.n)(this, Xq), (0, wQ.n)(this, wq, void 0))), this.parallaxScaleBias = ((0, wQ.n)(this, qq), (0, wQ.n)(this, Tq, .05)), this._roughness = ((0, wQ.n)(this, zq), (0, wQ.n)(this, sq, 0)), eQ.set(this, ((0, wQ.n)(this, Fq), (0, wQ.n)(this, Pq, void 0))), this.indexOfRefraction = ((0, wQ.n)(this, gq), (0, wQ.n)(this, Jq, .98)), this.invertRefractionY = ((0, wQ.n)(this, rq), (0, wQ.n)(this, Iq, !0)), this.alphaCutOff = ((0, wQ.n)(this, jq), (0, wQ.n)(this, Bq, .4)), this._useLightmapAsShadowmap = ((0, wQ.n)(this, yq), (0, wQ.n)(this, Vq, !1)), nQ.set(this, ((0, wQ.n)(this, Dq), (0, wQ.n)(this, pq, void 0))), this._diffuseFresnelParameters = ((0, wQ.n)(this, Gq), (0, wQ.n)(this, Uq, void 0)), xQ.set(this, ((0, wQ.n)(this, bq), (0, wQ.n)(this, vq, void 0))), this._opacityFresnelParameters = ((0, wQ.n)(this, dq), (0, wQ.n)(this, Hq, void 0)), YQ.set(this, ((0, wQ.n)(this, aq), (0, wQ.n)(this, lq, void 0))), this._reflectionFresnelParameters = ((0, wQ.n)(this, hq), (0, wQ.n)(this, iq, void 0)), NQ.set(this, ((0, wQ.n)(this, cq), (0, wQ.n)(this, Aq, void 0))), this._refractionFresnelParameters = ((0, wQ.n)(this, Rq), (0, wQ.n)(this, Eq, void 0)), ZQ.set(this, ((0, wQ.n)(this, Cq), (0, wQ.n)(this, uq, void 0))), this._emissiveFresnelParameters = ((0, wQ.n)(this, Lq), (0, wQ.n)(this, kq, void 0)), OQ.set(this, ((0, wQ.n)(this, fq), (0, wQ.n)(this, Sq, void 0))), this._useReflectionFresnelFromSpecular = ((0, wQ.n)(this, tq), (0, wQ.n)(this, oq, !1)), KQ.set(this, ((0, wQ.n)(this, eq), (0, wQ.n)(this, nq, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, wQ.n)(this, xq), (0, wQ.n)(this, Yq, !1)), mQ.set(this, ((0, wQ.n)(this, Nq), (0, wQ.n)(this, Zq, void 0))), this._maxSimultaneousLights = ((0, wQ.n)(this, Oq), (0, wQ.n)(this, Kq, 4)), MQ.set(this, ((0, wQ.n)(this, mq), (0, wQ.n)(this, Mq, void 0))), this._invertNormalMapX = ((0, wQ.n)(this, QT), (0, wQ.n)(this, WT, !1)), QW.set(this, ((0, wQ.n)(this, XT), (0, wQ.n)(this, wT, void 0))), this._invertNormalMapY = ((0, wQ.n)(this, qT), (0, wQ.n)(this, TT, !1)), WW.set(this, ((0, wQ.n)(this, zT), (0, wQ.n)(this, sT, void 0))), this._twoSidedLighting = ((0, wQ.n)(this, FT), (0, wQ.n)(this, PT, !1)), XW.set(this, ((0, wQ.n)(this, gT), (0, wQ.n)(this, JT, void 0))), this._applyDecalMapAfterDetailMap = ((0, wQ.n)(this, rT), (0, wQ.n)(this, IT, !1)), wW.set(this, ((0, wQ.n)(this, jT), (0, wQ.n)(this, BT, void 0))), this._vertexPullingMetadata = ((0, wQ.n)(this, yT), null), this._renderTargets = new TQ.e(16), this._globalAmbientColor = new sQ.b(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new VQ.b(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new PQ.e, this.getRenderTargetTextures = () => (this._renderTargets.reset(), QQ.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), QQ.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(QQ.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(QQ.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === rQ.b.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== rQ.b.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(WQ, XQ) {
            let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const qQ = XQ._drawWrapper;
            if (qQ.effect && this.isFrozen && qQ._wasPreviouslyReady && qQ._wasPreviouslyUsingInstances === wQ) return !0;
            XQ.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), XQ.materialDefines = new AQ(this._eventInfo.defineNames));
            const TQ = this.sE(),
              zQ = XQ.materialDefines;
            if (this._isReadyForSubMesh(XQ)) return !0;
            const sQ = TQ.Uj();
            if (zQ._needNormals = (0, GQ.ab)(TQ, WQ, zQ, !0, this._maxSimultaneousLights, this._disableLighting), !(0, GQ.e)(TQ, WQ, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, GQ.hb)(TQ, zQ);
            const gQ = this.needAlphaBlendingForMesh(WQ) && this.sE().useOrderIndependentTransparency;
            if ((0, GQ.mb)(TQ, zQ, this.canRenderToMRT && !gQ), (0, GQ.jb)(TQ, zQ, gQ), vQ.d.PrepareDefines(sQ.currentRenderPassId, WQ, zQ), zQ._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, zQ._needUVs = !1;
              for (let QQ = 1; QQ <= 6; ++QQ) zQ["MAINUV" + QQ] = !1;
              if (TQ.texturesEnabled) {
                if (zQ.DIFFUSEDIRECTUV = 0, zQ.BUMPDIRECTUV = 0, zQ.AMBIENTDIRECTUV = 0, zQ.OPACITYDIRECTUV = 0, zQ.EMISSIVEDIRECTUV = 0, zQ.SPECULARDIRECTUV = 0, zQ.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && QQ.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, GQ.db)(this._diffuseTexture, zQ, "DIFFUSE")
                } else zQ.DIFFUSE = !1;
                if (this._ambientTexture && QQ.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, GQ.db)(this._ambientTexture, zQ, "AMBIENT")
                } else zQ.AMBIENT = !1;
                if (this._opacityTexture && QQ.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, GQ.db)(this._opacityTexture, zQ, "OPACITY"), zQ.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else zQ.OPACITY = !1;
                if (this._reflectionTexture && QQ.ReflectionTextureEnabled ? (zQ.ROUGHNESS = this._roughness > 0, zQ.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (zQ.ROUGHNESS = !1, zQ.REFLECTIONOVERALPHA = !1), !(0, GQ.$)(TQ, this._reflectionTexture, zQ)) return !1;
                if (this._emissiveTexture && QQ.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, GQ.db)(this._emissiveTexture, zQ, "EMISSIVE")
                } else zQ.EMISSIVE = !1;
                if (this._lightmapTexture && QQ.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, GQ.db)(this._lightmapTexture, zQ, "LIGHTMAP"), zQ.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, zQ.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else zQ.LIGHTMAP = !1;
                if (this._specularTexture && QQ.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, GQ.db)(this._specularTexture, zQ, "SPECULAR"), zQ.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else zQ.SPECULAR = !1;
                if (TQ.Uj().getCaps().standardDerivatives && this._bumpTexture && QQ.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, GQ.db)(this._bumpTexture, zQ, "BUMP"), zQ.PARALLAX = this._useParallax, zQ.PARALLAX_RHS = TQ.useRightHandedSystem, zQ.PARALLAXOCCLUSION = this._useParallaxOcclusion, zQ.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else zQ.BUMP = !1, zQ.PARALLAX = !1, zQ.PARALLAX_RHS = !1, zQ.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && QQ.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  zQ._needUVs = !0, zQ.REFRACTION = !0, zQ.REFRACTIONMAP_3D = this._refractionTexture.isCube, zQ.RGBDREFRACTION = this._refractionTexture.isRGBD, zQ.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else zQ.REFRACTION = !1;
                zQ.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else zQ.DIFFUSE = !1, zQ.AMBIENT = !1, zQ.OPACITY = !1, zQ.REFLECTION = !1, zQ.EMISSIVE = !1, zQ.LIGHTMAP = !1, zQ.BUMP = !1, zQ.REFRACTION = !1;
              zQ.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), zQ.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, zQ.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, zQ.SPECULAROVERALPHA = this._useSpecularOverAlpha, zQ.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, zQ.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, zQ.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(WQ), zQ.TEXTURE_REPETITION_MODE = sQ.version > 1 || sQ.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = zQ, this._eventInfo.subMesh = XQ, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (zQ._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(zQ), zQ.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, zQ.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (zQ._areFresnelDirty && (QQ.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (zQ.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, zQ.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, zQ.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, zQ.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, zQ.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, zQ.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, zQ._needNormals = !0, zQ.FRESNEL = !0) : zQ.FRESNEL = !1), zQ.AREALIGHTUSED || zQ.CLUSTLIGHT_BATCH)
              for (let QQ = 0; QQ < WQ.lightSources.length; QQ++)
                if (!WQ.lightSources[QQ]._isReady()) return !1;
            (0, GQ.fb)(WQ, TQ, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(WQ), zQ, this._applyDecalMapAfterDetailMap, this._useVertexPulling, XQ.getRenderingMesh(), this._isVertexOutputInvariant), (0, GQ._)(TQ, sQ, this, zQ, wQ, null, XQ.getRenderingMesh().hasThinInstances), this._eventInfo.defines = zQ, this._eventInfo.mesh = WQ, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, GQ.X)(WQ, zQ, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let rQ = !1;
            if (zQ.isDirty) {
              const wQ = zQ._areLightsDisposed;
              zQ.markAsProcessed();
              const qQ = new yQ.e;
              zQ.REFLECTION && qQ.addFallback(0, "REFLECTION"), zQ.SPECULAR && qQ.addFallback(0, "SPECULAR"), zQ.BUMP && qQ.addFallback(0, "BUMP"), zQ.PARALLAX && qQ.addFallback(1, "PARALLAX"), zQ.PARALLAX_RHS && qQ.addFallback(1, "PARALLAX_RHS"), zQ.PARALLAXOCCLUSION && qQ.addFallback(0, "PARALLAXOCCLUSION"), zQ.SPECULAROVERALPHA && qQ.addFallback(0, "SPECULAROVERALPHA"), zQ.FOG && qQ.addFallback(1, "FOG"), zQ.POINTSIZE && qQ.addFallback(0, "POINTSIZE"), zQ.LOGARITHMICDEPTH && qQ.addFallback(0, "LOGARITHMICDEPTH"), (0, GQ.G)(zQ, qQ, this._maxSimultaneousLights), zQ.SPECULARTERM && qQ.addFallback(0, "SPECULARTERM"), zQ.DIFFUSEFRESNEL && qQ.addFallback(1, "DIFFUSEFRESNEL"), zQ.OPACITYFRESNEL && qQ.addFallback(2, "OPACITYFRESNEL"), zQ.REFLECTIONFRESNEL && qQ.addFallback(3, "REFLECTIONFRESNEL"), zQ.EMISSIVEFRESNEL && qQ.addFallback(4, "EMISSIVEFRESNEL"), zQ.FRESNEL && qQ.addFallback(4, "FRESNEL"), zQ.MULTIVIEW && qQ.addFallback(0, "MULTIVIEW");
              const gQ = [FQ.l.PositionKind];
              zQ.NORMAL && gQ.push(FQ.l.NormalKind), zQ.TANGENT && gQ.push(FQ.l.TangentKind);
              for (let QQ = 1; QQ <= 6; ++QQ) zQ["UV" + QQ] && gQ.push(`uv${1===QQ?"":QQ}`);
              zQ.VERTEXCOLOR && gQ.push(FQ.l.ColorKind), (0, GQ.N)(gQ, WQ, zQ, qQ), (0, GQ.R)(gQ, zQ), (0, GQ.S)(gQ, WQ, zQ), (0, GQ.J)(gQ, WQ, zQ);
              let IQ = "default";
              const jQ = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                BQ = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, GQ.rb)(jQ, BQ, !1);
              const VQ = ["Material", "Scene", "Mesh"],
                UQ = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: zQ.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = qQ, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = zQ, this._eventInfo.uniforms = jQ, this._eventInfo.attributes = gQ, this._eventInfo.samplers = BQ, this._eventInfo.uniformBuffersNames = VQ, this._eventInfo.customCode = void 0, this._eventInfo.mesh = WQ, this._eventInfo.indexParameters = UQ, this._callbackPluginEventGeneric(128, this._eventInfo), vQ.d.AddUniformsAndSamplers(jQ, BQ), PQ.e.AddUniforms(jQ), PQ.e.AddSamplers(BQ), JQ.c && (JQ.c.PrepareUniforms(jQ, zQ), JQ.c.PrepareSamplers(BQ, zQ)), (0, GQ.tb)({
                  uniformsNames: jQ,
                  uniformBuffersNames: VQ,
                  samplers: BQ,
                  defines: zQ,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, DQ.c)(jQ), this._useVertexPulling) {
                const QQ = XQ.getRenderingMesh(),
                  WQ = QQ?.geometry;
                WQ && (this._vertexPullingMetadata = (0, pQ.d)(WQ), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((QQ, WQ) => {
                  jQ.push(`vp_${WQ}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const bQ = {};
              this.customShaderNameResolve && (IQ = this.customShaderNameResolve(IQ, jQ, VQ, BQ, zQ, gQ, bQ));
              const dQ = zQ.toString(),
                HQ = XQ.effect,
                aQ = TQ.Uj().createEffect(IQ, {
                  attributes: gQ,
                  uniformsNames: jQ,
                  uniformBuffersNames: VQ,
                  samplers: BQ,
                  defines: dQ,
                  fallbacks: qQ,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: UQ,
                  processFinalCode: bQ.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: zQ.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: QQ._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, sQ);
              if (this._eventInfo.customCode = void 0, aQ)
                if (this._onEffectCreatedObservable && (iQ.effect = aQ, iQ.subMesh = XQ, this._onEffectCreatedObservable.notifyObservers(iQ)), this.allowShaderHotSwapping && HQ && !aQ.isReady()) {
                  if (zQ.markAsUnprocessed(), rQ = this.isFrozen, wQ) return zQ._areLightsDisposed = !0, !1
                } else TQ.resetCachedMaterial(), XQ.setEffect(aQ, zQ, this._materialContext)
            }
            return !(!XQ.effect || !XQ.effect.isReady()) && (zQ._renderId = TQ.getRenderId(), qQ._wasPreviouslyReady = !rQ, qQ._wasPreviouslyUsingInstances = wQ, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const QQ = this._uniformBuffer;
            QQ.addUniform("diffuseLeftColor", 4), QQ.addUniform("diffuseRightColor", 4), QQ.addUniform("opacityParts", 4), QQ.addUniform("reflectionLeftColor", 4), QQ.addUniform("reflectionRightColor", 4), QQ.addUniform("refractionLeftColor", 4), QQ.addUniform("refractionRightColor", 4), QQ.addUniform("emissiveLeftColor", 4), QQ.addUniform("emissiveRightColor", 4), QQ.addUniform("vDiffuseInfos", 2), QQ.addUniform("vAmbientInfos", 2), QQ.addUniform("vOpacityInfos", 2), QQ.addUniform("vEmissiveInfos", 2), QQ.addUniform("vLightmapInfos", 2), QQ.addUniform("vSpecularInfos", 2), QQ.addUniform("vBumpInfos", 3), QQ.addUniform("diffuseMatrix", 16), QQ.addUniform("ambientMatrix", 16), QQ.addUniform("opacityMatrix", 16), QQ.addUniform("emissiveMatrix", 16), QQ.addUniform("lightmapMatrix", 16), QQ.addUniform("specularMatrix", 16), QQ.addUniform("bumpMatrix", 16), QQ.addUniform("vTangentSpaceParams", 2), QQ.addUniform("pointSize", 1), QQ.addUniform("alphaCutOff", 1), QQ.addUniform("refractionMatrix", 16), QQ.addUniform("vRefractionInfos", 4), QQ.addUniform("vRefractionPosition", 3), QQ.addUniform("vRefractionSize", 3), QQ.addUniform("vSpecularColor", 4), QQ.addUniform("vEmissiveColor", 3), QQ.addUniform("vDiffuseColor", 4), QQ.addUniform("vAmbientColor", 3), QQ.addUniform("cameraInfo", 4), QQ.addUniform("vTextureRepetitionHexTilingParams", 4), (0, GQ.nb)(QQ, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(WQ, XQ, wQ) {
            const qQ = this.sE(),
              TQ = wQ.materialDefines;
            if (!TQ) return;
            const FQ = wQ.effect;
            if (!FQ) return;
            this._activeEffect = FQ, XQ.getMeshUniformBuffer().bindToEffect(FQ, "Mesh"), XQ.transferToEffect(WQ), this._uniformBuffer.bindToEffect(FQ, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, qQ, XQ, WQ, this.isFrozen), vQ.d.Bind(qQ.Uj().currentRenderPassId, this._activeEffect, XQ, WQ, this);
            const PQ = qQ.activeCamera;
            PQ ? this._uniformBuffer.updateFloat4("cameraInfo", PQ.minZ, PQ.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const gQ = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", gQ[0], gQ[1], gQ[2], gQ[3]), this._eventInfo.subMesh = wQ, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), TQ.OBJECTSPACE_NORMALMAP && (WQ.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const JQ = this._mustRebind(qQ, FQ, wQ, XQ.visibility),
              rQ = qQ.Uj()._features.needToAlwaysBindUniformBuffers;
            (0, GQ.i)(XQ, FQ), this._vertexPullingMetadata && (0, pQ.c)(FQ, this._vertexPullingMetadata);
            const IQ = this._uniformBuffer;
            if (JQ) {
              if (this.bindViewProjection(FQ), !IQ.useUbo || !this.isFrozen || !IQ.isSync || wQ._drawWrapper._forceRebindOnNextCall) {
                if (QQ.FresnelEnabled && TQ.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (IQ.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), IQ.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const QQ = sQ.l.Color3[0];
                    QQ.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), IQ.updateColor4("opacityParts", QQ, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (IQ.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), IQ.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (IQ.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), IQ.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (IQ.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), IQ.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (TQ.ALPHATEST && IQ.updateFloat("alphaCutOff", this.alphaCutOff), qQ.texturesEnabled && (this._diffuseTexture && QQ.DiffuseTextureEnabled && (IQ.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, GQ.E)(this._diffuseTexture, IQ, "diffuse")), this._ambientTexture && QQ.AmbientTextureEnabled && (IQ.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, GQ.E)(this._ambientTexture, IQ, "ambient")), this._opacityTexture && QQ.OpacityTextureEnabled && (IQ.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, GQ.E)(this._opacityTexture, IQ, "opacity")), (0, GQ.p)(qQ, TQ, IQ, sQ.b.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && QQ.ReflectionTextureEnabled || IQ.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && QQ.EmissiveTextureEnabled && (IQ.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, GQ.E)(this._emissiveTexture, IQ, "emissive")), this._lightmapTexture && QQ.LightmapTextureEnabled && (IQ.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, GQ.E)(this._lightmapTexture, IQ, "lightmap")), this._specularTexture && QQ.SpecularTextureEnabled && (IQ.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, GQ.E)(this._specularTexture, IQ, "specular")), this._bumpTexture && qQ.Uj().getCaps().standardDerivatives && QQ.BumpTextureEnabled && (IQ.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, GQ.E)(this._bumpTexture, IQ, "bump"), qQ._mirroredCameraPosition ? IQ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : IQ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && QQ.RefractionTextureEnabled)) {
                  let QQ = 1;
                  if (this._refractionTexture.isCube || (IQ.N_("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (QQ = this._refractionTexture.depth)), IQ.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, QQ, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const QQ = this._refractionTexture;
                    IQ.updateVector3("vRefractionPosition", QQ.boundingBoxPosition), IQ.updateVector3("vRefractionSize", QQ.boundingBoxSize)
                  }
                }
                this.pointsCloud && IQ.updateFloat("pointSize", this.pointSize), IQ.updateColor4("vSpecularColor", this.specularColor, this.specularPower), IQ.updateColor3("vEmissiveColor", QQ.EmissiveTextureEnabled ? this.emissiveColor : sQ.b.BlackReadOnly), IQ.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), qQ.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), IQ.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              qQ.texturesEnabled && (this._diffuseTexture && QQ.DiffuseTextureEnabled && FQ.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && QQ.AmbientTextureEnabled && FQ.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && QQ.OpacityTextureEnabled && FQ.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && QQ.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? FQ.setTexture("reflectionCubeSampler", this._reflectionTexture) : FQ.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && QQ.EmissiveTextureEnabled && FQ.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && QQ.LightmapTextureEnabled && FQ.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && QQ.SpecularTextureEnabled && FQ.setTexture("specularSampler", this._specularTexture), this._bumpTexture && qQ.Uj().getCaps().standardDerivatives && QQ.BumpTextureEnabled && FQ.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && QQ.RefractionTextureEnabled && (this._refractionTexture.isCube ? FQ.setTexture("refractionCubeSampler", this._refractionTexture) : FQ.setTexture("refraction2DSampler", this._refractionTexture))), this.sE().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(XQ) && this.sE().depthPeelingRenderer.bind(FQ), this._eventInfo.subMesh = wQ, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, DQ.d)(FQ, this, qQ), this.bindEyePosition(FQ)
            } else rQ && (this._needToBindSceneUbo = !0);
            !JQ && this.isFrozen && !rQ || !qQ.lightsEnabled || this._disableLighting || (0, GQ.t)(qQ, XQ, FQ, TQ, this._maxSimultaneousLights), !JQ && this.isFrozen || ((qQ.fogEnabled && XQ.applyFog && qQ.fogMode !== zQ.h.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || XQ.receiveShadows || TQ.PREPASS || TQ.CLUSTLIGHT_BATCH) && this.bindView(FQ), (0, GQ.l)(qQ, XQ, FQ), TQ.NUM_MORPH_INFLUENCERS && (0, GQ.A)(XQ, FQ), TQ.BAKED_VERTEX_ANIMATION_TEXTURE && XQ.bakedVertexAnimationManager?.bind(FQ, TQ.INSTANCES), this.useLogarithmicDepth && (0, GQ.w)(TQ, FQ, qQ), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(XQ, this._activeEffect, wQ), IQ.update()
          }
          _canBindRunFollower(WQ, XQ, wQ, qQ, TQ) {
            const zQ = WQ.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === QQ.prototype.isReadyForSubMesh && this.bindForSubMesh === QQ.prototype.bindForSubMesh && this._mustRebind === jQ.d.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !XQ._features.needToAlwaysBindUniformBuffers && !(zQ && zQ.enabled && zQ.currentRTisSceneRT) && !vQ.d._Configurations[XQ.currentRenderPassId] && !qQ.materialDefines?.OBJECTSPACE_NORMALMAP && !wQ.skeleton && !TQ._bonesComputationForcedToCPU
          }
          _bindRunFollower(QQ, WQ, XQ, wQ) {
            this._activeEffect = wQ, WQ.getMeshUniformBuffer().bindToEffect(wQ, "Mesh"), WQ.transferToEffect(QQ);
            const qQ = this._uniformBuffer;
            qQ.bindToEffect(wQ, "Material");
            const TQ = this._scene.activeCamera;
            TQ ? qQ.updateFloat4("cameraInfo", TQ.minZ, TQ.maxZ, 0, 0) : qQ.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const zQ = this.textureRepetitionHexTilingParams;
            qQ.updateFloat4("vTextureRepetitionHexTilingParams", zQ[0], zQ[1], zQ[2], zQ[3]), this._afterBind(WQ, wQ, XQ), qQ.update()
          }
          getAnimatables() {
            const QQ = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && QQ.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && QQ.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && QQ.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && QQ.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && QQ.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && QQ.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && QQ.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && QQ.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && QQ.push(this._refractionTexture), QQ
          }
          getActiveTextures() {
            const QQ = super.getActiveTextures();
            return this._diffuseTexture && QQ.push(this._diffuseTexture), this._ambientTexture && QQ.push(this._ambientTexture), this._opacityTexture && QQ.push(this._opacityTexture), this._reflectionTexture && QQ.push(this._reflectionTexture), this._emissiveTexture && QQ.push(this._emissiveTexture), this._specularTexture && QQ.push(this._specularTexture), this._bumpTexture && QQ.push(this._bumpTexture), this._lightmapTexture && QQ.push(this._lightmapTexture), this._refractionTexture && QQ.push(this._refractionTexture), QQ
          }
          hasTexture(QQ) {
            return !!super.hasTexture(QQ) || (this._diffuseTexture === QQ || (this._ambientTexture === QQ || (this._opacityTexture === QQ || (this._reflectionTexture === QQ || (this._emissiveTexture === QQ || (this._specularTexture === QQ || (this._bumpTexture === QQ || (this._lightmapTexture === QQ || this._refractionTexture === QQ))))))))
          }
          dispose(QQ, WQ) {
            WQ && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(QQ, WQ)
          }
          clone(WQ) {
            let XQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const qQ = UQ.b.Clone((() => new QQ(WQ, this.sE())), this, {
              cloneTexturesOnlyOnce: XQ
            });
            return qQ.name = WQ, qQ.id = WQ, this.stencil.copyTo(qQ.stencil), this._clonePlugins(qQ, wQ), qQ
          }
          static Parse(WQ, XQ, wQ) {
            const qQ = UQ.b.Parse((() => new QQ(WQ.name, XQ)), WQ, XQ, wQ);
            return WQ.stencil && qQ.stencil.parse(WQ.stencil, XQ, wQ), rQ.b._ParsePlugins(WQ, qQ, XQ, wQ), qQ
          }
          static get DiffuseTextureEnabled() {
            return BQ.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(QQ) {
            BQ.e.DiffuseTextureEnabled = QQ
          }
          static get DetailTextureEnabled() {
            return BQ.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(QQ) {
            BQ.e.DetailTextureEnabled = QQ
          }
          static get AmbientTextureEnabled() {
            return BQ.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(QQ) {
            BQ.e.AmbientTextureEnabled = QQ
          }
          static get OpacityTextureEnabled() {
            return BQ.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(QQ) {
            BQ.e.OpacityTextureEnabled = QQ
          }
          static get ReflectionTextureEnabled() {
            return BQ.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(QQ) {
            BQ.e.ReflectionTextureEnabled = QQ
          }
          static get EmissiveTextureEnabled() {
            return BQ.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(QQ) {
            BQ.e.EmissiveTextureEnabled = QQ
          }
          static get SpecularTextureEnabled() {
            return BQ.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(QQ) {
            BQ.e.SpecularTextureEnabled = QQ
          }
          static get BumpTextureEnabled() {
            return BQ.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(QQ) {
            BQ.e.BumpTextureEnabled = QQ
          }
          static get LightmapTextureEnabled() {
            return BQ.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(QQ) {
            BQ.e.LightmapTextureEnabled = QQ
          }
          static get RefractionTextureEnabled() {
            return BQ.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(QQ) {
            BQ.e.RefractionTextureEnabled = QQ
          }
          static get ColorGradingTextureEnabled() {
            return BQ.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(QQ) {
            BQ.e.ColorGradingTextureEnabled = QQ
          }
          static get FresnelEnabled() {
            return BQ.e.FresnelEnabled
          }
          static set FresnelEnabled(QQ) {
            BQ.e.FresnelEnabled = QQ
          }
        }, WQ = new WeakMap, gQ = new WeakMap, IQ = new WeakMap, dQ = new WeakMap, HQ = new WeakMap, aQ = new WeakMap, lQ = new WeakMap, hQ = new WeakMap, cQ = new WeakMap, EQ = new WeakMap, CQ = new WeakMap, uQ = new WeakMap, LQ = new WeakMap, kQ = new WeakMap, fQ = new WeakMap, SQ = new WeakMap, tQ = new WeakMap, oQ = new WeakMap, eQ = new WeakMap, nQ = new WeakMap, xQ = new WeakMap, YQ = new WeakMap, NQ = new WeakMap, ZQ = new WeakMap, OQ = new WeakMap, KQ = new WeakMap, mQ = new WeakMap, MQ = new WeakMap, QW = new WeakMap, WW = new WeakMap, XW = new WeakMap, wW = new WeakMap, (() => {
          const WQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(HX[Symbol.metadata] ?? null) : void 0;
          qW = [(0, qQ.z)("diffuseTexture")], TW = [(0, qQ.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], zW = [(0, qQ.z)("ambientTexture")], sW = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], FW = [(0, qQ.z)("opacityTexture")], PW = [(0, qQ.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], gW = [(0, qQ.z)("reflectionTexture")], JW = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], rW = [(0, qQ.z)("emissiveTexture")], IW = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], jW = [(0, qQ.z)("specularTexture")], BW = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], yW = [(0, qQ.z)("bumpTexture")], VW = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], DW = [(0, qQ.z)("lightmapTexture")], pW = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], GW = [(0, qQ.z)("refractionTexture")], UW = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], bW = [(0, qQ.l)("ambient")], vW = [(0, qQ.l)("diffuse")], dW = [(0, qQ.l)("specular")], HW = [(0, qQ.l)("emissive")], aW = [(0, qQ.I)()], lW = [(0, qQ.I)("useAlphaFromDiffuseTexture")], hW = [() => ({
            init(QQ) {
              return void 0 === QQ && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = QQ), QQ
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(QQ) {
              this._useAlphaFromDiffuseTexture = QQ
            }
          })], iW = [(0, qQ.I)("useEmissiveAsIllumination")], cW = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], AW = [(0, qQ.I)("linkEmissiveWithDiffuse")], RW = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], EW = [(0, qQ.I)("useSpecularOverAlpha")], CW = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], uW = [(0, qQ.I)("useReflectionOverAlpha")], LW = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], kW = [(0, qQ.I)("disableLighting")], fW = [(0, qQ.e)("_markAllSubMeshesAsLightsDirty")], SW = [(0, qQ.I)("useObjectSpaceNormalMap")], tW = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], oW = [(0, qQ.I)("useParallax")], eW = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], nW = [(0, qQ.I)("useParallaxOcclusion")], xW = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], YW = [(0, qQ.I)()], NW = [(0, qQ.I)("roughness")], ZW = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], OW = [(0, qQ.I)()], KW = [(0, qQ.I)()], mW = [(0, qQ.I)()], MW = [(0, qQ.I)("useLightmapAsShadowmap")], QX = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], WX = [(0, qQ.r)("diffuseFresnelParameters")], XX = [(0, qQ.e)("_markAllSubMeshesAsFresnelDirty")], wX = [(0, qQ.r)("opacityFresnelParameters")], qX = [(0, qQ.e)("_markAllSubMeshesAsFresnelAndMiscDirty")], TX = [(0, qQ.r)("reflectionFresnelParameters")], zX = [(0, qQ.e)("_markAllSubMeshesAsFresnelDirty")], sX = [(0, qQ.r)("refractionFresnelParameters")], FX = [(0, qQ.e)("_markAllSubMeshesAsFresnelDirty")], PX = [(0, qQ.r)("emissiveFresnelParameters")], gX = [(0, qQ.e)("_markAllSubMeshesAsFresnelDirty")], JX = [(0, qQ.I)("useReflectionFresnelFromSpecular")], rX = [(0, qQ.e)("_markAllSubMeshesAsFresnelDirty")], IX = [(0, qQ.I)("useGlossinessFromSpecularMapAlpha")], jX = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], BX = [(0, qQ.I)("maxSimultaneousLights")], yX = [(0, qQ.e)("_markAllSubMeshesAsLightsDirty")], VX = [(0, qQ.I)("invertNormalMapX")], DX = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], pX = [(0, qQ.I)("invertNormalMapY")], GX = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], UX = [(0, qQ.I)("twoSidedLighting")], bX = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], vX = [(0, qQ.I)("applyDecalMapAfterDetailMap")], dX = [(0, qQ.e)("_markAllSubMeshesAsMiscDirty")], (0, wQ.k)(QQ, null, TW, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "diffuseTexture" in QQ,
              get: QQ => QQ.diffuseTexture,
              set: (QQ, WQ) => {
                QQ.diffuseTexture = WQ
              }
            },
            metadata: WQ
          }, hX, iX), (0, wQ.k)(QQ, null, sW, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "ambientTexture" in QQ,
              get: QQ => QQ.ambientTexture,
              set: (QQ, WQ) => {
                QQ.ambientTexture = WQ
              }
            },
            metadata: WQ
          }, RX, EX), (0, wQ.k)(QQ, null, PW, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "opacityTexture" in QQ,
              get: QQ => QQ.opacityTexture,
              set: (QQ, WQ) => {
                QQ.opacityTexture = WQ
              }
            },
            metadata: WQ
          }, LX, kX), (0, wQ.k)(QQ, null, JW, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "reflectionTexture" in QQ,
              get: QQ => QQ.reflectionTexture,
              set: (QQ, WQ) => {
                QQ.reflectionTexture = WQ
              }
            },
            metadata: WQ
          }, tX, oX), (0, wQ.k)(QQ, null, IW, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "emissiveTexture" in QQ,
              get: QQ => QQ.emissiveTexture,
              set: (QQ, WQ) => {
                QQ.emissiveTexture = WQ
              }
            },
            metadata: WQ
          }, xX, YX), (0, wQ.k)(QQ, null, BW, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularTexture" in QQ,
              get: QQ => QQ.specularTexture,
              set: (QQ, WQ) => {
                QQ.specularTexture = WQ
              }
            },
            metadata: WQ
          }, OX, KX), (0, wQ.k)(QQ, null, VW, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "bumpTexture" in QQ,
              get: QQ => QQ.bumpTexture,
              set: (QQ, WQ) => {
                QQ.bumpTexture = WQ
              }
            },
            metadata: WQ
          }, Qw, Ww), (0, wQ.k)(QQ, null, pW, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "lightmapTexture" in QQ,
              get: QQ => QQ.lightmapTexture,
              set: (QQ, WQ) => {
                QQ.lightmapTexture = WQ
              }
            },
            metadata: WQ
          }, qw, Tw), (0, wQ.k)(QQ, null, UW, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "refractionTexture" in QQ,
              get: QQ => QQ.refractionTexture,
              set: (QQ, WQ) => {
                QQ.refractionTexture = WQ
              }
            },
            metadata: WQ
          }, Fw, Pw), (0, wQ.k)(QQ, null, hW, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useAlphaFromDiffuseTexture" in QQ,
              get: QQ => QQ.useAlphaFromDiffuseTexture,
              set: (QQ, WQ) => {
                QQ.useAlphaFromDiffuseTexture = WQ
              }
            },
            metadata: WQ
          }, bw, vw), (0, wQ.k)(QQ, null, cW, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useEmissiveAsIllumination" in QQ,
              get: QQ => QQ.useEmissiveAsIllumination,
              set: (QQ, WQ) => {
                QQ.useEmissiveAsIllumination = WQ
              }
            },
            metadata: WQ
          }, aw, lw), (0, wQ.k)(QQ, null, RW, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: QQ => "linkEmissiveWithDiffuse" in QQ,
              get: QQ => QQ.linkEmissiveWithDiffuse,
              set: (QQ, WQ) => {
                QQ.linkEmissiveWithDiffuse = WQ
              }
            },
            metadata: WQ
          }, Aw, Rw), (0, wQ.k)(QQ, null, CW, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useSpecularOverAlpha" in QQ,
              get: QQ => QQ.useSpecularOverAlpha,
              set: (QQ, WQ) => {
                QQ.useSpecularOverAlpha = WQ
              }
            },
            metadata: WQ
          }, uw, Lw), (0, wQ.k)(QQ, null, LW, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useReflectionOverAlpha" in QQ,
              get: QQ => QQ.useReflectionOverAlpha,
              set: (QQ, WQ) => {
                QQ.useReflectionOverAlpha = WQ
              }
            },
            metadata: WQ
          }, Sw, tw), (0, wQ.k)(QQ, null, fW, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: QQ => "disableLighting" in QQ,
              get: QQ => QQ.disableLighting,
              set: (QQ, WQ) => {
                QQ.disableLighting = WQ
              }
            },
            metadata: WQ
          }, nw, xw), (0, wQ.k)(QQ, null, tW, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useObjectSpaceNormalMap" in QQ,
              get: QQ => QQ.useObjectSpaceNormalMap,
              set: (QQ, WQ) => {
                QQ.useObjectSpaceNormalMap = WQ
              }
            },
            metadata: WQ
          }, Zw, Ow), (0, wQ.k)(QQ, null, eW, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useParallax" in QQ,
              get: QQ => QQ.useParallax,
              set: (QQ, WQ) => {
                QQ.useParallax = WQ
              }
            },
            metadata: WQ
          }, Mw, Qq), (0, wQ.k)(QQ, null, xW, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useParallaxOcclusion" in QQ,
              get: QQ => QQ.useParallaxOcclusion,
              set: (QQ, WQ) => {
                QQ.useParallaxOcclusion = WQ
              }
            },
            metadata: WQ
          }, wq, qq), (0, wQ.k)(QQ, null, ZW, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "roughness" in QQ,
              get: QQ => QQ.roughness,
              set: (QQ, WQ) => {
                QQ.roughness = WQ
              }
            },
            metadata: WQ
          }, Pq, gq), (0, wQ.k)(QQ, null, QX, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useLightmapAsShadowmap" in QQ,
              get: QQ => QQ.useLightmapAsShadowmap,
              set: (QQ, WQ) => {
                QQ.useLightmapAsShadowmap = WQ
              }
            },
            metadata: WQ
          }, pq, Gq), (0, wQ.k)(QQ, null, XX, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "diffuseFresnelParameters" in QQ,
              get: QQ => QQ.diffuseFresnelParameters,
              set: (QQ, WQ) => {
                QQ.diffuseFresnelParameters = WQ
              }
            },
            metadata: WQ
          }, vq, dq), (0, wQ.k)(QQ, null, qX, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "opacityFresnelParameters" in QQ,
              get: QQ => QQ.opacityFresnelParameters,
              set: (QQ, WQ) => {
                QQ.opacityFresnelParameters = WQ
              }
            },
            metadata: WQ
          }, lq, hq), (0, wQ.k)(QQ, null, zX, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "reflectionFresnelParameters" in QQ,
              get: QQ => QQ.reflectionFresnelParameters,
              set: (QQ, WQ) => {
                QQ.reflectionFresnelParameters = WQ
              }
            },
            metadata: WQ
          }, Aq, Rq), (0, wQ.k)(QQ, null, FX, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "refractionFresnelParameters" in QQ,
              get: QQ => QQ.refractionFresnelParameters,
              set: (QQ, WQ) => {
                QQ.refractionFresnelParameters = WQ
              }
            },
            metadata: WQ
          }, uq, Lq), (0, wQ.k)(QQ, null, gX, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "emissiveFresnelParameters" in QQ,
              get: QQ => QQ.emissiveFresnelParameters,
              set: (QQ, WQ) => {
                QQ.emissiveFresnelParameters = WQ
              }
            },
            metadata: WQ
          }, Sq, tq), (0, wQ.k)(QQ, null, rX, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useReflectionFresnelFromSpecular" in QQ,
              get: QQ => QQ.useReflectionFresnelFromSpecular,
              set: (QQ, WQ) => {
                QQ.useReflectionFresnelFromSpecular = WQ
              }
            },
            metadata: WQ
          }, nq, xq), (0, wQ.k)(QQ, null, jX, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useGlossinessFromSpecularMapAlpha" in QQ,
              get: QQ => QQ.useGlossinessFromSpecularMapAlpha,
              set: (QQ, WQ) => {
                QQ.useGlossinessFromSpecularMapAlpha = WQ
              }
            },
            metadata: WQ
          }, Zq, Oq), (0, wQ.k)(QQ, null, yX, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: QQ => "maxSimultaneousLights" in QQ,
              get: QQ => QQ.maxSimultaneousLights,
              set: (QQ, WQ) => {
                QQ.maxSimultaneousLights = WQ
              }
            },
            metadata: WQ
          }, Mq, QT), (0, wQ.k)(QQ, null, DX, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: QQ => "invertNormalMapX" in QQ,
              get: QQ => QQ.invertNormalMapX,
              set: (QQ, WQ) => {
                QQ.invertNormalMapX = WQ
              }
            },
            metadata: WQ
          }, wT, qT), (0, wQ.k)(QQ, null, GX, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: QQ => "invertNormalMapY" in QQ,
              get: QQ => QQ.invertNormalMapY,
              set: (QQ, WQ) => {
                QQ.invertNormalMapY = WQ
              }
            },
            metadata: WQ
          }, sT, FT), (0, wQ.k)(QQ, null, bX, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: QQ => "twoSidedLighting" in QQ,
              get: QQ => QQ.twoSidedLighting,
              set: (QQ, WQ) => {
                QQ.twoSidedLighting = WQ
              }
            },
            metadata: WQ
          }, JT, rT), (0, wQ.k)(QQ, null, dX, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: QQ => "applyDecalMapAfterDetailMap" in QQ,
              get: QQ => QQ.applyDecalMapAfterDetailMap,
              set: (QQ, WQ) => {
                QQ.applyDecalMapAfterDetailMap = WQ
              }
            },
            metadata: WQ
          }, BT, yT), (0, wQ.k)(null, null, qW, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_diffuseTexture" in QQ,
              get: QQ => QQ._diffuseTexture,
              set: (QQ, WQ) => {
                QQ._diffuseTexture = WQ
              }
            },
            metadata: WQ
          }, aX, lX), (0, wQ.k)(null, null, zW, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_ambientTexture" in QQ,
              get: QQ => QQ._ambientTexture,
              set: (QQ, WQ) => {
                QQ._ambientTexture = WQ
              }
            },
            metadata: WQ
          }, cX, AX), (0, wQ.k)(null, null, FW, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_opacityTexture" in QQ,
              get: QQ => QQ._opacityTexture,
              set: (QQ, WQ) => {
                QQ._opacityTexture = WQ
              }
            },
            metadata: WQ
          }, CX, uX), (0, wQ.k)(null, null, gW, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_reflectionTexture" in QQ,
              get: QQ => QQ._reflectionTexture,
              set: (QQ, WQ) => {
                QQ._reflectionTexture = WQ
              }
            },
            metadata: WQ
          }, fX, SX), (0, wQ.k)(null, null, rW, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_emissiveTexture" in QQ,
              get: QQ => QQ._emissiveTexture,
              set: (QQ, WQ) => {
                QQ._emissiveTexture = WQ
              }
            },
            metadata: WQ
          }, eX, nX), (0, wQ.k)(null, null, jW, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_specularTexture" in QQ,
              get: QQ => QQ._specularTexture,
              set: (QQ, WQ) => {
                QQ._specularTexture = WQ
              }
            },
            metadata: WQ
          }, NX, ZX), (0, wQ.k)(null, null, yW, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_bumpTexture" in QQ,
              get: QQ => QQ._bumpTexture,
              set: (QQ, WQ) => {
                QQ._bumpTexture = WQ
              }
            },
            metadata: WQ
          }, mX, MX), (0, wQ.k)(null, null, DW, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_lightmapTexture" in QQ,
              get: QQ => QQ._lightmapTexture,
              set: (QQ, WQ) => {
                QQ._lightmapTexture = WQ
              }
            },
            metadata: WQ
          }, Xw, ww), (0, wQ.k)(null, null, GW, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_refractionTexture" in QQ,
              get: QQ => QQ._refractionTexture,
              set: (QQ, WQ) => {
                QQ._refractionTexture = WQ
              }
            },
            metadata: WQ
          }, zw, sw), (0, wQ.k)(null, null, bW, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "ambientColor" in QQ,
              get: QQ => QQ.ambientColor,
              set: (QQ, WQ) => {
                QQ.ambientColor = WQ
              }
            },
            metadata: WQ
          }, gw, Jw), (0, wQ.k)(null, null, vW, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "diffuseColor" in QQ,
              get: QQ => QQ.diffuseColor,
              set: (QQ, WQ) => {
                QQ.diffuseColor = WQ
              }
            },
            metadata: WQ
          }, rw, Iw), (0, wQ.k)(null, null, dW, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularColor" in QQ,
              get: QQ => QQ.specularColor,
              set: (QQ, WQ) => {
                QQ.specularColor = WQ
              }
            },
            metadata: WQ
          }, jw, Bw), (0, wQ.k)(null, null, HW, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "emissiveColor" in QQ,
              get: QQ => QQ.emissiveColor,
              set: (QQ, WQ) => {
                QQ.emissiveColor = WQ
              }
            },
            metadata: WQ
          }, yw, Vw), (0, wQ.k)(null, null, aW, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularPower" in QQ,
              get: QQ => QQ.specularPower,
              set: (QQ, WQ) => {
                QQ.specularPower = WQ
              }
            },
            metadata: WQ
          }, Dw, pw), (0, wQ.k)(null, null, lW, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useAlphaFromDiffuseTexture" in QQ,
              get: QQ => QQ._useAlphaFromDiffuseTexture,
              set: (QQ, WQ) => {
                QQ._useAlphaFromDiffuseTexture = WQ
              }
            },
            metadata: WQ
          }, Gw, Uw), (0, wQ.k)(null, null, iW, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useEmissiveAsIllumination" in QQ,
              get: QQ => QQ._useEmissiveAsIllumination,
              set: (QQ, WQ) => {
                QQ._useEmissiveAsIllumination = WQ
              }
            },
            metadata: WQ
          }, dw, Hw), (0, wQ.k)(null, null, AW, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_linkEmissiveWithDiffuse" in QQ,
              get: QQ => QQ._linkEmissiveWithDiffuse,
              set: (QQ, WQ) => {
                QQ._linkEmissiveWithDiffuse = WQ
              }
            },
            metadata: WQ
          }, hw, iw), (0, wQ.k)(null, null, EW, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useSpecularOverAlpha" in QQ,
              get: QQ => QQ._useSpecularOverAlpha,
              set: (QQ, WQ) => {
                QQ._useSpecularOverAlpha = WQ
              }
            },
            metadata: WQ
          }, Ew, Cw), (0, wQ.k)(null, null, uW, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useReflectionOverAlpha" in QQ,
              get: QQ => QQ._useReflectionOverAlpha,
              set: (QQ, WQ) => {
                QQ._useReflectionOverAlpha = WQ
              }
            },
            metadata: WQ
          }, kw, fw), (0, wQ.k)(null, null, kW, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_disableLighting" in QQ,
              get: QQ => QQ._disableLighting,
              set: (QQ, WQ) => {
                QQ._disableLighting = WQ
              }
            },
            metadata: WQ
          }, ow, ew), (0, wQ.k)(null, null, SW, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useObjectSpaceNormalMap" in QQ,
              get: QQ => QQ._useObjectSpaceNormalMap,
              set: (QQ, WQ) => {
                QQ._useObjectSpaceNormalMap = WQ
              }
            },
            metadata: WQ
          }, Yw, Nw), (0, wQ.k)(null, null, oW, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useParallax" in QQ,
              get: QQ => QQ._useParallax,
              set: (QQ, WQ) => {
                QQ._useParallax = WQ
              }
            },
            metadata: WQ
          }, Kw, mw), (0, wQ.k)(null, null, nW, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useParallaxOcclusion" in QQ,
              get: QQ => QQ._useParallaxOcclusion,
              set: (QQ, WQ) => {
                QQ._useParallaxOcclusion = WQ
              }
            },
            metadata: WQ
          }, Wq, Xq), (0, wQ.k)(null, null, YW, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: QQ => "parallaxScaleBias" in QQ,
              get: QQ => QQ.parallaxScaleBias,
              set: (QQ, WQ) => {
                QQ.parallaxScaleBias = WQ
              }
            },
            metadata: WQ
          }, Tq, zq), (0, wQ.k)(null, null, NW, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_roughness" in QQ,
              get: QQ => QQ._roughness,
              set: (QQ, WQ) => {
                QQ._roughness = WQ
              }
            },
            metadata: WQ
          }, sq, Fq), (0, wQ.k)(null, null, OW, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: QQ => "indexOfRefraction" in QQ,
              get: QQ => QQ.indexOfRefraction,
              set: (QQ, WQ) => {
                QQ.indexOfRefraction = WQ
              }
            },
            metadata: WQ
          }, Jq, rq), (0, wQ.k)(null, null, KW, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: QQ => "invertRefractionY" in QQ,
              get: QQ => QQ.invertRefractionY,
              set: (QQ, WQ) => {
                QQ.invertRefractionY = WQ
              }
            },
            metadata: WQ
          }, Iq, jq), (0, wQ.k)(null, null, mW, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: QQ => "alphaCutOff" in QQ,
              get: QQ => QQ.alphaCutOff,
              set: (QQ, WQ) => {
                QQ.alphaCutOff = WQ
              }
            },
            metadata: WQ
          }, Bq, yq), (0, wQ.k)(null, null, MW, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useLightmapAsShadowmap" in QQ,
              get: QQ => QQ._useLightmapAsShadowmap,
              set: (QQ, WQ) => {
                QQ._useLightmapAsShadowmap = WQ
              }
            },
            metadata: WQ
          }, Vq, Dq), (0, wQ.k)(null, null, WX, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_diffuseFresnelParameters" in QQ,
              get: QQ => QQ._diffuseFresnelParameters,
              set: (QQ, WQ) => {
                QQ._diffuseFresnelParameters = WQ
              }
            },
            metadata: WQ
          }, Uq, bq), (0, wQ.k)(null, null, wX, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_opacityFresnelParameters" in QQ,
              get: QQ => QQ._opacityFresnelParameters,
              set: (QQ, WQ) => {
                QQ._opacityFresnelParameters = WQ
              }
            },
            metadata: WQ
          }, Hq, aq), (0, wQ.k)(null, null, TX, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_reflectionFresnelParameters" in QQ,
              get: QQ => QQ._reflectionFresnelParameters,
              set: (QQ, WQ) => {
                QQ._reflectionFresnelParameters = WQ
              }
            },
            metadata: WQ
          }, iq, cq), (0, wQ.k)(null, null, sX, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_refractionFresnelParameters" in QQ,
              get: QQ => QQ._refractionFresnelParameters,
              set: (QQ, WQ) => {
                QQ._refractionFresnelParameters = WQ
              }
            },
            metadata: WQ
          }, Eq, Cq), (0, wQ.k)(null, null, PX, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_emissiveFresnelParameters" in QQ,
              get: QQ => QQ._emissiveFresnelParameters,
              set: (QQ, WQ) => {
                QQ._emissiveFresnelParameters = WQ
              }
            },
            metadata: WQ
          }, kq, fq), (0, wQ.k)(null, null, JX, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useReflectionFresnelFromSpecular" in QQ,
              get: QQ => QQ._useReflectionFresnelFromSpecular,
              set: (QQ, WQ) => {
                QQ._useReflectionFresnelFromSpecular = WQ
              }
            },
            metadata: WQ
          }, oq, eq), (0, wQ.k)(null, null, IX, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useGlossinessFromSpecularMapAlpha" in QQ,
              get: QQ => QQ._useGlossinessFromSpecularMapAlpha,
              set: (QQ, WQ) => {
                QQ._useGlossinessFromSpecularMapAlpha = WQ
              }
            },
            metadata: WQ
          }, Yq, Nq), (0, wQ.k)(null, null, BX, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_maxSimultaneousLights" in QQ,
              get: QQ => QQ._maxSimultaneousLights,
              set: (QQ, WQ) => {
                QQ._maxSimultaneousLights = WQ
              }
            },
            metadata: WQ
          }, Kq, mq), (0, wQ.k)(null, null, VX, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_invertNormalMapX" in QQ,
              get: QQ => QQ._invertNormalMapX,
              set: (QQ, WQ) => {
                QQ._invertNormalMapX = WQ
              }
            },
            metadata: WQ
          }, WT, XT), (0, wQ.k)(null, null, pX, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_invertNormalMapY" in QQ,
              get: QQ => QQ._invertNormalMapY,
              set: (QQ, WQ) => {
                QQ._invertNormalMapY = WQ
              }
            },
            metadata: WQ
          }, TT, zT), (0, wQ.k)(null, null, UX, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_twoSidedLighting" in QQ,
              get: QQ => QQ._twoSidedLighting,
              set: (QQ, WQ) => {
                QQ._twoSidedLighting = WQ
              }
            },
            metadata: WQ
          }, PT, gT), (0, wQ.k)(null, null, vX, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_applyDecalMapAfterDetailMap" in QQ,
              get: QQ => QQ._applyDecalMapAfterDetailMap,
              set: (QQ, WQ) => {
                QQ._applyDecalMapAfterDetailMap = WQ
              }
            },
            metadata: WQ
          }, IT, jT), WQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: WQ
          })
        })(), QQ.ForceGLSL = !1, QQ._ShaderLoader = new bQ.e((() => [Promise.all([XQ.e(326), XQ.e(325)]).then((() => XQ(42122))), Promise.all([XQ.e(331), XQ.e(327), XQ.e(340), XQ.e(330)]).then((() => XQ(42325)))]), (() => [Promise.all([XQ.e(347), XQ.e(342)]).then((() => XQ(42491))), Promise.all([XQ.e(348), XQ.e(358), XQ.e(344)]).then((() => XQ(42685)))])), QQ
      })(),
      CQ = !1;

    function uQ() {
      CQ || (CQ = !0, (0, JQ.g)(), (0, lQ.d)("BABYLON.StandardMaterial", EQ), zQ.h.DefaultMaterialFactory = QQ => new EQ("default material", QQ))
    }
    Object.getOwnPropertyDescriptor(EQ.prototype, "decalMap") || Object.defineProperty(EQ.prototype, "decalMap", (0, hQ.g)("StandardMaterial", "decalMap"))
  },
  40632: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return class extends QQ {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    XQ.d(WQ, {
      b: () => wQ
    })
  },
  40623: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    class wQ {
      constructor(QQ, WQ) {
        this._webGL = {
          load: QQ,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: WQ,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(QQ) {
        const WQ = 1 === QQ ? this._webGPU : this._webGL;
        return WQ.loaded ? void 0 : async () => {
          await this._loadAsync(WQ)
        }
      }
      async _loadAsync(QQ) {
        if (QQ.loaded) return;
        let WQ = QQ.loadPromise;
        const XQ = null === WQ;
        XQ && (WQ = Promise.all(QQ.load()), QQ.loadPromise = WQ);
        let wQ = !1;
        try {
          await WQ, wQ = !0
        } finally {
          XQ && this._completeLoad(QQ, wQ)
        }
      }
      _completeLoad(QQ, WQ) {
        QQ.loaded = WQ, QQ.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);