export const id = 253;
export const ids = [253];
export const modules = {
  39815: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ
    });
    var LQ = wQ(39413);

    function qQ(QQ) {
      return class extends QQ {
        constructor() {
          super(...arguments);
          const QQ = new.target;
          if (!QQ[Symbol.metadata]) {
            const FQ = Object.getPrototypeOf(QQ)?.[Symbol.metadata];
            QQ[Symbol.metadata] = FQ ? Object.create(FQ) : {}
          }
          const FQ = (0, LQ.d)(QQ[Symbol.metadata]);
          FQ._imageProcessingConfiguration || (FQ._imageProcessingConfiguration = {
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
          QQ !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !QQ && this.iN ? this._imageProcessingConfiguration = this.iN().imageProcessingConfiguration : QQ && (this._imageProcessingConfiguration = QQ), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
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
  39708: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      c: () => qQ
    });
    var LQ = wQ(39711);

    function qQ(QQ) {
      return class extends QQ {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class oQ extends LQ.c {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  39778: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => HQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39717),
      oQ = wQ(39409),
      DQ = wQ(39760),
      kQ = wQ(39711),
      vQ = wQ(39781),
      mQ = wQ(39752);
    class uQ extends kQ.c {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let HQ = (() => {
      var QQ, FQ, wQ, kQ;
      let HQ, bQ, YQ, xQ, AQ, tQ, eQ = vQ.d,
        MQ = [],
        GQ = [],
        pQ = [],
        cQ = [],
        CQ = [],
        SQ = [],
        iQ = [],
        WQ = [],
        RQ = [],
        OQ = [],
        sQ = [],
        rQ = [];
      return QQ = class extends eQ {
        get texture() {
          return (0, LQ.c)(this, FQ, "f")
        }
        set texture(QQ) {
          (0, LQ.f)(this, FQ, QQ, "f")
        }
        get normalBlendMethod() {
          return (0, LQ.c)(this, wQ, "f")
        }
        set normalBlendMethod(QQ) {
          (0, LQ.f)(this, wQ, QQ, "f")
        }
        get isEnabled() {
          return (0, LQ.c)(this, kQ, "f")
        }
        set isEnabled(QQ) {
          (0, LQ.f)(this, kQ, QQ, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(QQ) {
          let oQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(QQ, "DetailMap", 140, new uQ, oQ), this._texture = null, FQ.set(this, (0, LQ.l)(this, MQ, void 0)), this.diffuseBlendLevel = ((0, LQ.l)(this, GQ), (0, LQ.l)(this, pQ, 1)), this.roughnessBlendLevel = ((0, LQ.l)(this, cQ), (0, LQ.l)(this, CQ, 1)), this.bumpLevel = ((0, LQ.l)(this, SQ), (0, LQ.l)(this, iQ, 1)), this._normalBlendMethod = ((0, LQ.l)(this, WQ), qQ.d.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), wQ.set(this, (0, LQ.l)(this, RQ, void 0)), this._isEnabled = ((0, LQ.l)(this, OQ), !1), kQ.set(this, (0, LQ.l)(this, sQ, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, LQ.l)(this, rQ), this._internalMarkAllSubMeshesAsTexturesDirty = QQ._dirtyCallbacks[1]
        }
        isReadyForSubMesh(QQ, FQ, wQ) {
          return !this._isEnabled || !(QQ._areTexturesDirty && FQ.texturesEnabled && wQ.getCaps().standardDerivatives && this._texture && DQ.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(QQ, FQ) {
          if (this._isEnabled) {
            QQ.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const wQ = FQ.Wx();
            QQ._areTexturesDirty && (wQ.getCaps().standardDerivatives && this._texture && DQ.e.DetailTextureEnabled && this._isEnabled ? ((0, mQ.X)(this._texture, QQ, "DETAIL"), QQ.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : QQ.DETAIL = !1)
          } else QQ.DETAIL = !1
        }
        bindForSubMesh(QQ, FQ) {
          if (!this._isEnabled) return;
          const wQ = this._material.isFrozen;
          QQ.useUbo && wQ && QQ.isSync || this._texture && DQ.e.DetailTextureEnabled && (QQ.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, mQ.y)(this._texture, QQ, "detail")), FQ.texturesEnabled && this._texture && DQ.e.DetailTextureEnabled && QQ.setTexture("detailSampler", this._texture)
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
      }, FQ = new WeakMap, wQ = new WeakMap, kQ = new WeakMap, (() => {
        const FQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(eQ[Symbol.metadata] ?? null) : void 0;
        HQ = [(0, oQ.z)("detailTexture"), (0, oQ.e)("_markAllSubMeshesAsTexturesDirty")], bQ = [(0, oQ.I)()], YQ = [(0, oQ.I)()], xQ = [(0, oQ.I)()], AQ = [(0, oQ.I)(), (0, oQ.e)("_markAllSubMeshesAsTexturesDirty")], tQ = [(0, oQ.I)(), (0, oQ.e)("_markAllSubMeshesAsTexturesDirty")], (0, LQ.i)(QQ, null, HQ, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: QQ => "texture" in QQ,
            get: QQ => QQ.texture,
            set: (QQ, FQ) => {
              QQ.texture = FQ
            }
          },
          metadata: FQ
        }, MQ, GQ), (0, LQ.i)(QQ, null, AQ, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: QQ => "normalBlendMethod" in QQ,
            get: QQ => QQ.normalBlendMethod,
            set: (QQ, FQ) => {
              QQ.normalBlendMethod = FQ
            }
          },
          metadata: FQ
        }, RQ, OQ), (0, LQ.i)(QQ, null, tQ, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "isEnabled" in QQ,
            get: QQ => QQ.isEnabled,
            set: (QQ, FQ) => {
              QQ.isEnabled = FQ
            }
          },
          metadata: FQ
        }, sQ, rQ), (0, LQ.i)(null, null, bQ, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "diffuseBlendLevel" in QQ,
            get: QQ => QQ.diffuseBlendLevel,
            set: (QQ, FQ) => {
              QQ.diffuseBlendLevel = FQ
            }
          },
          metadata: FQ
        }, pQ, cQ), (0, LQ.i)(null, null, YQ, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "roughnessBlendLevel" in QQ,
            get: QQ => QQ.roughnessBlendLevel,
            set: (QQ, FQ) => {
              QQ.roughnessBlendLevel = FQ
            }
          },
          metadata: FQ
        }, CQ, SQ), (0, LQ.i)(null, null, xQ, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: QQ => "bumpLevel" in QQ,
            get: QQ => QQ.bumpLevel,
            set: (QQ, FQ) => {
              QQ.bumpLevel = FQ
            }
          },
          metadata: FQ
        }, iQ, WQ), FQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: FQ
        })
      })(), QQ
    })()
  },
  39711: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      constructor(QQ) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = QQ, QQ)
          for (const FQ in QQ) Object.prototype.hasOwnProperty.call(QQ, FQ) && this._setDefaultValue(FQ)
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
        for (let FQ = 0; FQ < this._keys.length; FQ++) {
          const wQ = this._keys[FQ];
          if (this[wQ] !== QQ[wQ]) return !1
        }
        return !0
      }
      cloneTo(QQ) {
        this._keys.length !== QQ._keys.length && (QQ._keys = this._keys.slice(0));
        for (let FQ = 0; FQ < this._keys.length; FQ++) {
          const wQ = this._keys[FQ];
          QQ[wQ] = this[wQ]
        }
      }
      reset() {
        for (const QQ of this._keys) this._setDefaultValue(QQ)
      }
      _setDefaultValue(QQ) {
        const FQ = this._externalProperties?.[QQ]?.type ?? typeof this[QQ],
          wQ = this._externalProperties?.[QQ]?.default;
        switch (FQ) {
          case "number":
            this[QQ] = wQ ?? 0;
            break;
          case "string":
            this[QQ] = wQ ?? "";
            break;
          default:
            this[QQ] = wQ ?? !1
        }
      }
      toString() {
        let QQ = "";
        for (let FQ = 0; FQ < this._keys.length; FQ++) {
          const wQ = this._keys[FQ],
            LQ = this[wQ];
          switch (typeof LQ) {
            case "number":
            case "string":
              QQ += "#define " + wQ + " " + LQ + "\n";
              break;
            default:
              LQ && (QQ += "#define " + wQ + "\n")
          }
        }
        return QQ
      }
    }
  },
  39796: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      f: () => DQ,
      i: () => oQ
    });
    var LQ, qQ = wQ(36696);

    function oQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const LQ = FQ(QQ);
      if (!Number.isInteger(LQ) || LQ < 0 || LQ > wQ) throw new Error(`Invalid geometry object ID ${LQ} for mesh "${QQ.name}". Object IDs must be integers between 0 and 0x${wQ.toString(16).toUpperCase()}.`);
      return LQ
    }

    function DQ(QQ, FQ) {
      const wQ = FQ(QQ);
      if (!Number.isInteger(wQ) || wQ < 0 || wQ > 255 || 0 !== wQ && 0 === (63 & wQ)) throw new Error(`Invalid geometry mesh-blending tag ${wQ} for mesh "${QQ.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return wQ
    }! function(QQ) {
      QQ[QQ.Zero = 0] = "Zero", QQ[QQ.One = 1] = "One", QQ[QQ.MaxViewZ = 2] = "MaxViewZ", QQ[QQ.NoClear = 3] = "NoClear"
    }(LQ || (LQ = {}));
    class kQ {
      static CreateConfiguration(QQ) {
        return kQ._Configurations[QQ] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: qQ.c.Zero(),
          currentViewProjection: qQ.c.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, kQ._Configurations[QQ]
      }
      static DeleteConfiguration(QQ) {
        delete kQ._Configurations[QQ]
      }
      static GetConfiguration(QQ) {
        return kQ._Configurations[QQ]
      }
      static _PrepareConfiguration(QQ, FQ, wQ) {
        const LQ = kQ._Configurations[QQ];
        LQ._attachments = FQ, LQ._colorAttachments = wQ, LQ._mrtCount = FQ.length;
        let qQ = "#define PREPASS\n";
        for (const oQ of kQ.GeometryTextureDescriptions) {
          const QQ = LQ.defines[oQ.defineIndex];
          void 0 !== QQ && (qQ += `#define ${oQ.define}\n#define ${oQ.defineIndex} ${QQ}\n`)
        }
        LQ.objectIdIsRedFormat && (qQ += "#define PREPASS_OBJECT_ID_R8\n"), LQ._defines = qQ + `#define SCENE_MRT_COUNT ${FQ.length}\n`
      }
      static _PrepareStringDefines(QQ, FQ) {
        const wQ = kQ._Configurations[QQ];
        return !!wQ?._defines && (FQ.push(wQ._defines), !0)
      }
      static _BindAttachmentsForEffect(QQ, FQ) {
        const wQ = kQ._Configurations[QQ.currentRenderPassId];
        return !wQ?._attachments || (QQ.bindAttachments(FQ._multiTarget ? wQ._attachments : wQ._colorAttachments), FQ._multiTarget || void 0 !== wQ.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(QQ) {
        const FQ = kQ._Configurations[QQ.currentRenderPassId];
        FQ?._colorAttachments && QQ.bindAttachments(FQ._colorAttachments)
      }
      static _BindColorAttachments(QQ) {
        const FQ = kQ._Configurations[QQ.currentRenderPassId];
        return !FQ?._colorAttachments || (QQ.bindAttachments(FQ._colorAttachments), void 0 !== FQ.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(QQ) {
        const FQ = kQ._Configurations[QQ.currentRenderPassId];
        return !FQ?._colorAttachments || void 0 !== FQ.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(QQ, FQ) {
        const wQ = kQ._Configurations[QQ.currentRenderPassId];
        if (!wQ) return;
        const LQ = QQ.getAlphaMode(),
          qQ = void 0 === wQ.defines.PREPASS_COLOR_INDEX || 2 === LQ || 1 === LQ || 17 === LQ;
        FQ.setFloat("geometryZeroAlphaDiscard", qQ ? 1 : 0)
      }
      static AddUniformsAndSamplers(QQ, FQ) {
        QQ.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(QQ, FQ) {
        for (const wQ of FQ)
          if (wQ.lC)
            for (const FQ of wQ.lC) FQ._removeDrawWrapper(QQ)
      }
      static PrepareDefines(QQ, FQ, wQ) {
        if (!wQ._arePrePassDirty) return;
        const LQ = kQ._Configurations[QQ];
        if (!LQ) return;
        wQ.PREPASS = !0;
        let qQ = 0;
        for (let oQ = 0; oQ < kQ.GeometryTextureDescriptions.length; oQ++) {
          const QQ = kQ.GeometryTextureDescriptions[oQ],
            FQ = QQ.define,
            DQ = QQ.defineIndex,
            vQ = LQ.defines[DQ];
          void 0 !== vQ ? (wQ[FQ] = !0, wQ[DQ] = vQ, qQ++) : (wQ[FQ] = !1, delete wQ[DQ])
        }
        wQ.PREPASS_OBJECT_ID_R8 = LQ.objectIdIsRedFormat, wQ.SCENE_MRT_COUNT = LQ._mrtCount ?? qQ, wQ.BONES_VELOCITY_ENABLED = FQ.useBones && FQ.computeBonesUsingShaders && FQ.skeleton && !FQ.skeleton.isUsingTextureForMatrices && -1 === LQ.excludedSkinnedMesh.indexOf(FQ)
      }
      static Bind(QQ, FQ, wQ, LQ, qQ) {
        const vQ = kQ._Configurations[QQ];
        if (!vQ) return;
        const mQ = wQ.iN(),
          uQ = mQ.Wx();
        if (vQ.reverseCulling && uQ.setStateCullFaceType(mQ._mirroredCameraPosition ? qQ.cullBackFaces : !qQ.cullBackFaces), void 0 !== vQ.defines.PREPASS_OBJECT_ID_INDEX) {
          const QQ = vQ.objectIdIsRedFormat ? 255 : 16777215;
          let LQ = wQ.uniqueId;
          if (vQ.objectIdProvider) LQ = oQ(wQ, vQ.objectIdProvider, QQ);
          else if (LQ > QQ) throw new Error(`Invalid geometry object ID ${LQ} for mesh "${wQ.name}". Object IDs must be integers between 0 and 0x${QQ.toString(16).toUpperCase()}.`);
          FQ.setFloat("objectId", LQ)
        }
        if (void 0 !== vQ.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const QQ = vQ.meshBlendTagProvider ? DQ(wQ, vQ.meshBlendTagProvider) : wQ.meshBlendingTag;
          FQ.setInt("meshBlendTag", QQ)
        }
        if (void 0 !== vQ.defines.PREPASS_VELOCITY_INDEX || void 0 !== vQ.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const QQ = vQ._currentWorldMatrices ?? (vQ._currentWorldMatrices = {}),
            qQ = vQ._worldMatrixFrameIds ?? (vQ._worldMatrixFrameIds = {});
          if (QQ[wQ.uniqueId] || (QQ[wQ.uniqueId] = LQ.clone(), vQ.previousWorldMatrices[wQ.uniqueId] = LQ.clone()), qQ[wQ.uniqueId] !== uQ.frameId && (vQ.previousWorldMatrices[wQ.uniqueId].Qs(QQ[wQ.uniqueId]), qQ[wQ.uniqueId] = uQ.frameId), QQ[wQ.uniqueId].Qs(LQ), -1 === vQ.lastUpdateFrameId ? (vQ.lastUpdateFrameId = uQ.frameId, vQ.previousViewProjection.Qs(mQ.getTransformMatrix()), vQ.currentViewProjection.Qs(mQ.getTransformMatrix())) : vQ.currentViewProjection.updateFlag !== mQ.getTransformMatrix().updateFlag ? (vQ.lastUpdateFrameId = uQ.frameId, vQ.previousViewProjection.Qs(vQ.currentViewProjection), vQ.currentViewProjection.Qs(mQ.getTransformMatrix())) : vQ.lastUpdateFrameId !== uQ.frameId && (vQ.lastUpdateFrameId = uQ.frameId, vQ.previousViewProjection.Qs(vQ.currentViewProjection)), FQ.setMatrix("previousWorld", vQ.previousWorldMatrices[wQ.uniqueId]), FQ.setMatrix("previousViewProjection", vQ.previousViewProjection), wQ.useBones && wQ.computeBonesUsingShaders && wQ.skeleton) {
            const QQ = wQ.skeleton;
            if (!QQ.isUsingTextureForMatrices || -1 === FQ.getUniformIndex("boneTextureInfo")) {
              const LQ = QQ.getTransformMatrices(wQ);
              LQ && (vQ.previousBones[wQ.uniqueId] || (vQ.previousBones[wQ.uniqueId] = LQ.slice()), FQ.setMatrices("mPreviousBones", vQ.previousBones[wQ.uniqueId]), vQ.previousBones[wQ.uniqueId].set(LQ))
            }
          }
        }
      }
    }
    kQ.GeometryTextureDescriptions = [{
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
    }], kQ._Configurations = {}
  },
  39781: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => bQ,
      g: () => xQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(39282),
      DQ = wQ(39251);
    const kQ = new RegExp("^([gimus]+)!");
    class vQ {
      constructor(QQ) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = QQ, this._scene = QQ.iN(), this._engine = this._scene.Wx()
      }
      _addPlugin(QQ) {
        for (let LQ = 0; LQ < this._plugins.length; ++LQ)
          if (this._plugins[LQ].name === QQ.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !QQ.isCompatible(this._material.shaderLanguage)) throw `The plugin "${QQ.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const FQ = QQ.getClassName();
        vQ._MaterialPluginClassToMainDefine[FQ] || (vQ._MaterialPluginClassToMainDefine[FQ] = "MATERIALPLUGIN_" + ++vQ._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (QQ, FQ) => this._handlePluginEvent(QQ, FQ), this._plugins.push(QQ), this._plugins.sort(((QQ, FQ) => QQ.priority - FQ.priority)), this._codeInjectionPoints = {};
        const wQ = {};
        wQ[vQ._MaterialPluginClassToMainDefine[FQ]] = {
          type: "boolean",
          default: !0
        };
        for (const LQ of this._plugins) LQ.collectDefines(wQ), this._collectPointNames("vertex", LQ.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", LQ.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = wQ, !0
      }
      _activatePlugin(QQ) {
        -1 === this._activePlugins.indexOf(QQ) && (this._activePlugins.push(QQ), this._activePlugins.sort(((QQ, FQ) => QQ.priority - FQ.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), QQ.registerForExtraEvents && (this._activePluginsForExtraEvents.push(QQ), this._activePluginsForExtraEvents.sort(((QQ, FQ) => QQ.priority - FQ.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(QQ) {
        for (let FQ = 0; FQ < this._plugins.length; ++FQ)
          if (this._plugins[FQ].name === QQ) return this._plugins[FQ];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(QQ) {
        let FQ = !0;
        for (const wQ of this._activePlugins) FQ = FQ && wQ.isReadyForSubMesh(QQ.defines, this._scene, this._engine, QQ.subMesh);
        QQ.isReadyForSubMesh = FQ
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(QQ) {
        for (const FQ of this._activePlugins) FQ.prepareDefinesBeforeAttributes(QQ.defines, this._scene, QQ.mesh)
      }
      _handlePluginEventPrepareDefines(QQ) {
        for (const FQ of this._activePlugins) FQ.prepareDefines(QQ.defines, this._scene, QQ.mesh)
      }
      _handlePluginEventHardBindForSubMesh(QQ) {
        for (const FQ of this._activePluginsForExtraEvents) FQ.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, QQ.subMesh)
      }
      _handlePluginEventBindForSubMesh(QQ) {
        for (const FQ of this._activePlugins) FQ.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, QQ.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(QQ) {
        let FQ = !1;
        for (const wQ of this._activePluginsForExtraEvents)
          if (FQ = wQ.hasRenderTargetTextures(), FQ) break;
        QQ.hasRenderTargetTextures = FQ
      }
      _handlePluginEventFillRenderTargetTextures(QQ) {
        for (const FQ of this._activePluginsForExtraEvents) FQ.fillRenderTargetTextures(QQ.renderTargets)
      }
      _handlePluginEvent(QQ, FQ) {
        switch (QQ) {
          case 512: {
            const QQ = FQ;
            for (const FQ of this._activePlugins) FQ.getActiveTextures(QQ.activeTextures);
            break
          }
          case 256: {
            const QQ = FQ;
            for (const FQ of this._activePlugins) FQ.getAnimatables(QQ.animatables);
            break
          }
          case 1024: {
            const QQ = FQ;
            let wQ = !1;
            for (const FQ of this._activePlugins)
              if (wQ = FQ.hasTexture(QQ.texture), wQ) break;
            QQ.hasTexture = wQ;
            break
          }
          case 2: {
            const QQ = FQ;
            for (const FQ of this._plugins) FQ.dispose(QQ.forceDisposeTextures);
            break
          }
          case 4:
            FQ.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const QQ = FQ;
            for (const FQ of this._activePlugins) QQ.fallbackRank = FQ.addFallbacks(QQ.defines, QQ.fallbacks, QQ.fallbackRank), FQ.getAttributes(QQ.attributes, this._scene, QQ.mesh);
            this._uniformList.length > 0 && QQ.uniforms.push(...this._uniformList), this._samplerList.length > 0 && QQ.samplers.push(...this._samplerList), this._uboList.length > 0 && QQ.uniformBuffersNames.push(...this._uboList), QQ.customCode = this._injectCustomCode(QQ, QQ.customCode);
            break
          }
          case 8: {
            const QQ = FQ;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const wQ = 1 === this._material.shaderLanguage;
            for (const FQ of this._plugins) {
              const LQ = FQ.getUniforms(this._material.shaderLanguage);
              if (LQ) {
                if (LQ.ubo)
                  for (const FQ of LQ.ubo) {
                    if (FQ.size && FQ.type) {
                      const LQ = FQ.arraySize ?? 0;
                      if (QQ.ubo.addUniform(FQ.name, FQ.size, LQ), wQ) {
                        let QQ;
                        switch (FQ.type) {
                          case "mat4":
                            QQ = "mat4x4f";
                            break;
                          case "float":
                            QQ = "f32";
                            break;
                          default:
                            QQ = `${FQ.type}f`
                        }
                        this._uboDeclaration += LQ > 0 ? `uniform ${FQ.name}: array<${QQ}, ${LQ}>;\n` : `uniform ${FQ.name}: ${QQ};\n`
                      } else this._uboDeclaration += `${FQ.type} ${FQ.name}${LQ>0?`[${LQ}]`:""};\n`
                    }
                    this._uniformList.push(FQ.name)
                  }
                LQ.vertex && (this._vertexDeclaration += LQ.vertex + "\n"), LQ.fragment && (this._fragmentDeclaration += LQ.fragment + "\n"), LQ.externalUniforms && this._uniformList.push(...LQ.externalUniforms)
              }
              FQ.getSamplers(this._samplerList), FQ.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(QQ, FQ) {
        if (FQ)
          for (const wQ in FQ) this._codeInjectionPoints[QQ] || (this._codeInjectionPoints[QQ] = {}), this._codeInjectionPoints[QQ][wQ] = !0
      }
      _injectCustomCode(QQ, FQ) {
        return (wQ, LQ) => {
          FQ && (LQ = FQ(wQ, LQ)), this._uboDeclaration && (LQ = LQ.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (LQ = LQ.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (LQ = LQ.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const qQ = this._codeInjectionPoints?.[wQ];
          if (!qQ) return LQ;
          let vQ = null;
          for (let FQ in qQ) {
            let qQ = "";
            for (const LQ of this._activePlugins) {
              const kQ = this._material.shaderLanguage;
              let mQ = LQ.getCustomCode(wQ, kQ)?.[FQ];
              mQ && (LQ.resolveIncludes && (null === vQ && (vQ = {
                defines: [],
                indexParameters: QQ.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: DQ.c.GetShadersRepository(kQ),
                includesShadersStore: DQ.c.GetIncludesShadersStore(kQ),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                SLQ: this._engine.SLQ,
                processCodeAfterIncludes: void 0
              }), vQ.isFragment = "fragment" === wQ, (0, oQ.h)(mQ, vQ, (QQ => mQ = QQ))), qQ += mQ + "\n")
            }
            if (qQ.length > 0)
              if ("!" === FQ.charAt(0)) {
                FQ = FQ.substring(1);
                let QQ = "g";
                if ("!" === FQ.charAt(0)) QQ = "", FQ = FQ.substring(1);
                else {
                  const wQ = kQ.exec(FQ);
                  wQ && wQ.length >= 2 && (QQ = wQ[1], FQ = FQ.substring(QQ.length + 1))
                }
                QQ.indexOf("g") < 0 && (QQ += "g");
                const wQ = new RegExp(FQ, QQ);
                let oQ = wQ.exec(LQ);
                for (; null !== oQ;) {
                  const {
                    index: QQ
                  } = oQ, FQ = mQ(qQ, oQ);
                  LQ = LQ.substring(0, QQ) + FQ + LQ.substring(QQ + oQ[0].length), wQ.lastIndex = QQ + FQ.length, oQ = wQ.exec(LQ)
                }
              } else {
                const QQ = "#define " + FQ;
                LQ = LQ.replace(QQ, "\n" + qQ + "\n" + QQ)
              }
          }
          return LQ
        }
      }
    }
    vQ._MaterialPluginClassToMainDefine = {}, vQ._MaterialPluginCounter = 0;

    function mQ(QQ, FQ) {
      return QQ.replace(/\$(\d+)/g, ((QQ, wQ) => {
        const LQ = Number(wQ);
        return LQ < FQ.length ? FQ[LQ] : ""
      }))
    }
    var uQ = wQ(39426),
      HQ = wQ(36741);
    let bQ = (() => {
        var QQ;
        let FQ, wQ, oQ, DQ, kQ = [],
          mQ = [],
          HQ = [],
          bQ = [],
          YQ = [],
          xQ = [],
          AQ = [],
          tQ = [];
        return QQ = class {
          isCompatible(QQ) {
            return 0 === QQ
          }
          _enable(QQ) {
            QQ && this._pluginManager._activatePlugin(this)
          }
          constructor(QQ, FQ, wQ, qQ) {
            let oQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              DQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              uQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, LQ.l)(this, kQ, void 0), this.priority = ((0, LQ.l)(this, mQ), (0, LQ.l)(this, HQ, 500)), this.resolveIncludes = ((0, LQ.l)(this, bQ), (0, LQ.l)(this, YQ, !1)), this.registerForExtraEvents = ((0, LQ.l)(this, xQ), (0, LQ.l)(this, AQ, !1)), this.doNotSerialize = ((0, LQ.l)(this, tQ), !1), this._material = QQ, this.name = FQ, this.priority = wQ, this.resolveIncludes = uQ, QQ.pluginManager || (QQ.pluginManager = new vQ(QQ), QQ.zN.add((() => {
              QQ.pluginManager = void 0
            }))), this._pluginDefineNames = qQ, this._pluginManager = QQ.pluginManager, oQ && this._pluginManager._addPlugin(this), DQ && this._enable(!0), this.markAllDefinesAsDirty = QQ._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(QQ, FQ, wQ, LQ) {
            return !0
          }
          hardBindForSubMesh(QQ, FQ, wQ, LQ) {}
          bindForSubMesh(QQ, FQ, wQ, LQ) {}
          dispose(QQ) {}
          getCustomCode(QQ) {
            return null
          }
          collectDefines(QQ) {
            if (this._pluginDefineNames)
              for (const FQ of Object.keys(this._pluginDefineNames)) {
                if ("_" === FQ[0]) continue;
                const wQ = typeof this._pluginDefineNames[FQ];
                QQ[FQ] = {
                  type: "number" === wQ ? "number" : "string" === wQ ? "string" : "boolean" === wQ ? "boolean" : "object",
                  default: this._pluginDefineNames[FQ]
                }
              }
          }
          prepareDefinesBeforeAttributes(QQ, FQ, wQ) {}
          prepareDefines(QQ, FQ, wQ) {}
          hasTexture(QQ) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(QQ) {}
          getActiveTextures(QQ) {}
          getAnimatables(QQ) {}
          addFallbacks(QQ, FQ, wQ) {
            return wQ
          }
          getSamplers(QQ) {}
          getAttributes(QQ, FQ, wQ) {}
          getUniformBuffersNames(QQ) {}
          getUniforms() {
            return {}
          }
          copyTo(QQ) {
            uQ.c.Clone((() => QQ), this)
          }
          serialize() {
            return uQ.c.Serialize(this)
          }
          parse(QQ, FQ, wQ) {
            uQ.c.Parse((() => this), QQ, FQ, wQ)
          }
        }, (() => {
          const vQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], oQ = [(0, qQ.I)()], DQ = [(0, qQ.I)()], (0, LQ.i)(null, null, FQ, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: QQ => "name" in QQ,
              get: QQ => QQ.name,
              set: (QQ, FQ) => {
                QQ.name = FQ
              }
            },
            metadata: vQ
          }, kQ, mQ), (0, LQ.i)(null, null, wQ, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: QQ => "priority" in QQ,
              get: QQ => QQ.priority,
              set: (QQ, FQ) => {
                QQ.priority = FQ
              }
            },
            metadata: vQ
          }, HQ, bQ), (0, LQ.i)(null, null, oQ, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: QQ => "resolveIncludes" in QQ,
              get: QQ => QQ.resolveIncludes,
              set: (QQ, FQ) => {
                QQ.resolveIncludes = FQ
              }
            },
            metadata: vQ
          }, YQ, xQ), (0, LQ.i)(null, null, DQ, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: QQ => "registerForExtraEvents" in QQ,
              get: QQ => QQ.registerForExtraEvents,
              set: (QQ, FQ) => {
                QQ.registerForExtraEvents = FQ
              }
            },
            metadata: vQ
          }, AQ, tQ), vQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: vQ
          })
        })(), QQ
      })(),
      YQ = !1;

    function xQ() {
      YQ || (YQ = !0, (0, HQ.e)("BABYLON.MaterialPluginBase", bQ))
    }
  },
  39704: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => LQ
    });
    class LQ {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(QQ) {
        QQ.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(QQ) {}
      bindForSubMesh(QQ, FQ, wQ, LQ, qQ) {
        if (FQ.prePassRenderer && FQ.prePassRenderer.enabled && FQ.prePassRenderer.currentRTisSceneRT && (-1 !== FQ.prePassRenderer.getIndex(2) || -1 !== FQ.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[wQ.uniqueId] || (this.previousWorldMatrices[wQ.uniqueId] = LQ.clone()), this.previousViewProjection || (this.previousViewProjection = FQ.getTransformMatrix().clone(), this.currentViewProjection = FQ.getTransformMatrix().clone());
          const qQ = FQ.Wx();
          this.currentViewProjection.updateFlag !== FQ.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = qQ.frameId, this.previousViewProjection.Qs(this.currentViewProjection), this.currentViewProjection.Qs(FQ.getTransformMatrix())) : this._lastUpdateFrameId !== qQ.frameId && (this._lastUpdateFrameId = qQ.frameId, this.previousViewProjection.Qs(this.currentViewProjection)), QQ.setMatrix("previousWorld", this.previousWorldMatrices[wQ.uniqueId]), QQ.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[wQ.uniqueId] = LQ.clone()
        }
      }
    }
  },
  39809: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return class extends QQ {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    wQ.d(FQ, {
      b: () => LQ
    })
  },
  39692: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      StandardMaterial: () => LQ.d
    });
    var LQ = wQ(39696);
    (0, LQ.b)()
  },
  39696: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => zQ,
      d: () => TQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(39518),
      DQ = wQ(39496),
      kQ = wQ(36873),
      vQ = wQ(39561),
      mQ = wQ(39704),
      uQ = wQ(39708),
      HQ = wQ(39527),
      bQ = wQ(39717),
      YQ = wQ(39711),
      xQ = wQ(39768),
      AQ = wQ(39760),
      tQ = wQ(39770),
      eQ = wQ(39778),
      MQ = wQ(39754),
      GQ = wQ(39787),
      pQ = wQ(39752),
      cQ = wQ(39426),
      CQ = wQ(39790),
      SQ = wQ(39796),
      iQ = wQ(39803),
      WQ = wQ(39809),
      RQ = wQ(39815),
      OQ = wQ(36741),
      sQ = wQ(39277);
    const rQ = {
      effect: null,
      subMesh: null
    };
    class IQ extends((0, WQ.b)((0, iQ.d)(YQ.c))) {}
    class UQ extends((0, uQ.c)(IQ)) {
      constructor(QQ) {
        super(QQ), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class NQ extends((0, RQ.d)(xQ.e)) {}
    let TQ = (() => {
        var QQ, FQ, uQ, YQ, iQ, WQ, RQ, OQ, sQ, IQ, TQ, KQ, zQ, lQ, jQ, aQ, XQ, fQ, VQ, hQ, JQ, EQ, nQ, gQ, PQ, ZQ, yQ, BQ, dQ, QF, FF, wF, LF;
        let qF, oF, DF, kF, vF, mF, uF, HF, bF, YF, xF, AF, tF, eF, MF, GF, pF, cF, CF, SF, iF, WF, RF, OF, sF, rF, IF, UF, NF, TF, KF, zF, lF, jF, aF, XF, fF, VF, hF, JF, EF, nF, gF, PF, ZF, yF, BF, dF, Qw, Fw, ww, Lw, qw, ow, Dw, kw, vw, mw, uw, Hw, bw, Yw, xw, Aw, tw, ew, Mw, Gw, pw, Cw, Sw, iw, Ww, Rw = NQ,
          Ow = [],
          sw = [],
          rw = [],
          Iw = [],
          Uw = [],
          Nw = [],
          Tw = [],
          Kw = [],
          zw = [],
          lw = [],
          jw = [],
          aw = [],
          Xw = [],
          fw = [],
          Vw = [],
          hw = [],
          Jw = [],
          Ew = [],
          nw = [],
          gw = [],
          Pw = [],
          Zw = [],
          yw = [],
          Bw = [],
          dw = [],
          QL = [],
          FL = [],
          wL = [],
          LL = [],
          qL = [],
          oL = [],
          DL = [],
          kL = [],
          vL = [],
          mL = [],
          uL = [],
          HL = [],
          bL = [],
          YL = [],
          xL = [],
          AL = [],
          tL = [],
          eL = [],
          ML = [],
          GL = [],
          pL = [],
          cL = [],
          CL = [],
          SL = [],
          iL = [],
          WL = [],
          RL = [],
          OL = [],
          sL = [],
          rL = [],
          IL = [],
          UL = [],
          NL = [],
          TL = [],
          KL = [],
          zL = [],
          lL = [],
          jL = [],
          aL = [],
          XL = [],
          fL = [],
          VL = [],
          hL = [],
          JL = [],
          EL = [],
          nL = [],
          gL = [],
          PL = [],
          ZL = [],
          yL = [],
          BL = [],
          dL = [],
          Qq = [],
          Fq = [],
          wq = [],
          Lq = [],
          qq = [],
          oq = [],
          Dq = [],
          kq = [],
          vq = [],
          mq = [],
          uq = [],
          Hq = [],
          bq = [],
          Yq = [],
          xq = [],
          Aq = [],
          tq = [],
          eq = [],
          Mq = [],
          Gq = [],
          pq = [],
          cq = [],
          Cq = [],
          Sq = [],
          iq = [],
          Wq = [],
          Rq = [],
          Oq = [],
          sq = [],
          rq = [],
          Iq = [],
          Uq = [],
          Nq = [],
          Tq = [],
          Kq = [],
          zq = [],
          lq = [],
          jq = [],
          aq = [],
          Xq = [],
          fq = [],
          Vq = [],
          hq = [],
          Jq = [],
          Eq = [],
          nq = [],
          gq = [],
          Pq = [],
          Zq = [],
          yq = [],
          Bq = [],
          dq = [],
          Qo = [],
          Fo = [],
          wo = [],
          Lo = [],
          qo = [],
          oo = [],
          Do = [],
          ko = [],
          vo = [],
          mo = [],
          uo = [],
          Ho = [],
          bo = [],
          Yo = [],
          xo = [],
          Ao = [],
          to = [];
        return QQ = class extends Rw {
          get diffuseTexture() {
            return (0, LQ.c)(this, FQ, "f")
          }
          set diffuseTexture(QQ) {
            (0, LQ.f)(this, FQ, QQ, "f")
          }
          get ambientTexture() {
            return (0, LQ.c)(this, uQ, "f")
          }
          set ambientTexture(QQ) {
            (0, LQ.f)(this, uQ, QQ, "f")
          }
          get opacityTexture() {
            return (0, LQ.c)(this, YQ, "f")
          }
          set opacityTexture(QQ) {
            (0, LQ.f)(this, YQ, QQ, "f")
          }
          get reflectionTexture() {
            return (0, LQ.c)(this, iQ, "f")
          }
          set reflectionTexture(QQ) {
            (0, LQ.f)(this, iQ, QQ, "f")
          }
          get emissiveTexture() {
            return (0, LQ.c)(this, WQ, "f")
          }
          set emissiveTexture(QQ) {
            (0, LQ.f)(this, WQ, QQ, "f")
          }
          get specularTexture() {
            return (0, LQ.c)(this, RQ, "f")
          }
          set specularTexture(QQ) {
            (0, LQ.f)(this, RQ, QQ, "f")
          }
          get bumpTexture() {
            return (0, LQ.c)(this, OQ, "f")
          }
          set bumpTexture(QQ) {
            (0, LQ.f)(this, OQ, QQ, "f")
          }
          get lightmapTexture() {
            return (0, LQ.c)(this, sQ, "f")
          }
          set lightmapTexture(QQ) {
            (0, LQ.f)(this, sQ, QQ, "f")
          }
          get refractionTexture() {
            return (0, LQ.c)(this, IQ, "f")
          }
          set refractionTexture(QQ) {
            (0, LQ.f)(this, IQ, QQ, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, LQ.c)(this, TQ, "f")
          }
          set useAlphaFromDiffuseTexture(QQ) {
            (0, LQ.f)(this, TQ, QQ, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, LQ.c)(this, KQ, "f")
          }
          set useEmissiveAsIllumination(QQ) {
            (0, LQ.f)(this, KQ, QQ, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, LQ.c)(this, zQ, "f")
          }
          set linkEmissiveWithDiffuse(QQ) {
            (0, LQ.f)(this, zQ, QQ, "f")
          }
          get useSpecularOverAlpha() {
            return (0, LQ.c)(this, lQ, "f")
          }
          set useSpecularOverAlpha(QQ) {
            (0, LQ.f)(this, lQ, QQ, "f")
          }
          get useReflectionOverAlpha() {
            return (0, LQ.c)(this, jQ, "f")
          }
          set useReflectionOverAlpha(QQ) {
            (0, LQ.f)(this, jQ, QQ, "f")
          }
          get disableLighting() {
            return (0, LQ.c)(this, aQ, "f")
          }
          set disableLighting(QQ) {
            (0, LQ.f)(this, aQ, QQ, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, LQ.c)(this, XQ, "f")
          }
          set useObjectSpaceNormalMap(QQ) {
            (0, LQ.f)(this, XQ, QQ, "f")
          }
          get useParallax() {
            return (0, LQ.c)(this, fQ, "f")
          }
          set useParallax(QQ) {
            (0, LQ.f)(this, fQ, QQ, "f")
          }
          get useParallaxOcclusion() {
            return (0, LQ.c)(this, VQ, "f")
          }
          set useParallaxOcclusion(QQ) {
            (0, LQ.f)(this, VQ, QQ, "f")
          }
          get roughness() {
            return (0, LQ.c)(this, hQ, "f")
          }
          set roughness(QQ) {
            (0, LQ.f)(this, hQ, QQ, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, LQ.c)(this, JQ, "f")
          }
          set useLightmapAsShadowmap(QQ) {
            (0, LQ.f)(this, JQ, QQ, "f")
          }
          get diffuseFresnelParameters() {
            return (0, LQ.c)(this, EQ, "f")
          }
          set diffuseFresnelParameters(QQ) {
            (0, LQ.f)(this, EQ, QQ, "f")
          }
          get opacityFresnelParameters() {
            return (0, LQ.c)(this, nQ, "f")
          }
          set opacityFresnelParameters(QQ) {
            (0, LQ.f)(this, nQ, QQ, "f")
          }
          get reflectionFresnelParameters() {
            return (0, LQ.c)(this, gQ, "f")
          }
          set reflectionFresnelParameters(QQ) {
            (0, LQ.f)(this, gQ, QQ, "f")
          }
          get refractionFresnelParameters() {
            return (0, LQ.c)(this, PQ, "f")
          }
          set refractionFresnelParameters(QQ) {
            (0, LQ.f)(this, PQ, QQ, "f")
          }
          get emissiveFresnelParameters() {
            return (0, LQ.c)(this, ZQ, "f")
          }
          set emissiveFresnelParameters(QQ) {
            (0, LQ.f)(this, ZQ, QQ, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, LQ.c)(this, yQ, "f")
          }
          set useReflectionFresnelFromSpecular(QQ) {
            (0, LQ.f)(this, yQ, QQ, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, LQ.c)(this, BQ, "f")
          }
          set useGlossinessFromSpecularMapAlpha(QQ) {
            (0, LQ.f)(this, BQ, QQ, "f")
          }
          get maxSimultaneousLights() {
            return (0, LQ.c)(this, dQ, "f")
          }
          set maxSimultaneousLights(QQ) {
            (0, LQ.f)(this, dQ, QQ, "f")
          }
          get invertNormalMapX() {
            return (0, LQ.c)(this, QF, "f")
          }
          set invertNormalMapX(QQ) {
            (0, LQ.f)(this, QF, QQ, "f")
          }
          get invertNormalMapY() {
            return (0, LQ.c)(this, FF, "f")
          }
          set invertNormalMapY(QQ) {
            (0, LQ.f)(this, FF, QQ, "f")
          }
          get twoSidedLighting() {
            return (0, LQ.c)(this, wF, "f")
          }
          set twoSidedLighting(QQ) {
            (0, LQ.f)(this, wF, QQ, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, LQ.c)(this, LF, "f")
          }
          set applyDecalMapAfterDetailMap(QQ) {
            (0, LQ.f)(this, LF, QQ, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(wQ, qQ) {
            super(wQ, qQ, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || QQ.ForceGLSL), this._diffuseTexture = (0, LQ.l)(this, Ow, null), FQ.set(this, ((0, LQ.l)(this, sw), (0, LQ.l)(this, rw, void 0))), this._ambientTexture = ((0, LQ.l)(this, Iw), (0, LQ.l)(this, Uw, null)), uQ.set(this, ((0, LQ.l)(this, Nw), (0, LQ.l)(this, Tw, void 0))), this._opacityTexture = ((0, LQ.l)(this, Kw), (0, LQ.l)(this, zw, null)), YQ.set(this, ((0, LQ.l)(this, lw), (0, LQ.l)(this, jw, void 0))), this._reflectionTexture = ((0, LQ.l)(this, aw), (0, LQ.l)(this, Xw, null)), iQ.set(this, ((0, LQ.l)(this, fw), (0, LQ.l)(this, Vw, void 0))), this._emissiveTexture = ((0, LQ.l)(this, hw), (0, LQ.l)(this, Jw, null)), WQ.set(this, ((0, LQ.l)(this, Ew), (0, LQ.l)(this, nw, void 0))), this._specularTexture = ((0, LQ.l)(this, gw), (0, LQ.l)(this, Pw, null)), RQ.set(this, ((0, LQ.l)(this, Zw), (0, LQ.l)(this, yw, void 0))), this._bumpTexture = ((0, LQ.l)(this, Bw), (0, LQ.l)(this, dw, null)), OQ.set(this, ((0, LQ.l)(this, QL), (0, LQ.l)(this, FL, void 0))), this._lightmapTexture = ((0, LQ.l)(this, wL), (0, LQ.l)(this, LL, null)), sQ.set(this, ((0, LQ.l)(this, qL), (0, LQ.l)(this, oL, void 0))), this._refractionTexture = ((0, LQ.l)(this, DL), (0, LQ.l)(this, kL, null)), IQ.set(this, ((0, LQ.l)(this, vL), (0, LQ.l)(this, mL, void 0))), this.ambientColor = ((0, LQ.l)(this, uL), (0, LQ.l)(this, HL, new kQ.b(0, 0, 0))), this.diffuseColor = ((0, LQ.l)(this, bL), (0, LQ.l)(this, YL, new kQ.b(1, 1, 1))), this.specularColor = ((0, LQ.l)(this, xL), (0, LQ.l)(this, AL, new kQ.b(1, 1, 1))), this.emissiveColor = ((0, LQ.l)(this, tL), (0, LQ.l)(this, eL, new kQ.b(0, 0, 0))), this.specularPower = ((0, LQ.l)(this, ML), (0, LQ.l)(this, GL, 64)), this._useAlphaFromDiffuseTexture = ((0, LQ.l)(this, pL), (0, LQ.l)(this, cL, !1)), TQ.set(this, ((0, LQ.l)(this, CL), (0, LQ.l)(this, SL, void 0))), this._useEmissiveAsIllumination = ((0, LQ.l)(this, iL), (0, LQ.l)(this, WL, !1)), KQ.set(this, ((0, LQ.l)(this, RL), (0, LQ.l)(this, OL, void 0))), this._linkEmissiveWithDiffuse = ((0, LQ.l)(this, sL), (0, LQ.l)(this, rL, !1)), zQ.set(this, ((0, LQ.l)(this, IL), (0, LQ.l)(this, UL, void 0))), this._useSpecularOverAlpha = ((0, LQ.l)(this, NL), (0, LQ.l)(this, TL, !1)), lQ.set(this, ((0, LQ.l)(this, KL), (0, LQ.l)(this, zL, void 0))), this._useReflectionOverAlpha = ((0, LQ.l)(this, lL), (0, LQ.l)(this, jL, !1)), jQ.set(this, ((0, LQ.l)(this, aL), (0, LQ.l)(this, XL, void 0))), this._disableLighting = ((0, LQ.l)(this, fL), (0, LQ.l)(this, VL, !1)), aQ.set(this, ((0, LQ.l)(this, hL), (0, LQ.l)(this, JL, void 0))), this._useObjectSpaceNormalMap = ((0, LQ.l)(this, EL), (0, LQ.l)(this, nL, !1)), XQ.set(this, ((0, LQ.l)(this, gL), (0, LQ.l)(this, PL, void 0))), this._useParallax = ((0, LQ.l)(this, ZL), (0, LQ.l)(this, yL, !1)), fQ.set(this, ((0, LQ.l)(this, BL), (0, LQ.l)(this, dL, void 0))), this._useParallaxOcclusion = ((0, LQ.l)(this, Qq), (0, LQ.l)(this, Fq, !1)), VQ.set(this, ((0, LQ.l)(this, wq), (0, LQ.l)(this, Lq, void 0))), this.parallaxScaleBias = ((0, LQ.l)(this, qq), (0, LQ.l)(this, oq, .05)), this._roughness = ((0, LQ.l)(this, Dq), (0, LQ.l)(this, kq, 0)), hQ.set(this, ((0, LQ.l)(this, vq), (0, LQ.l)(this, mq, void 0))), this.indexOfRefraction = ((0, LQ.l)(this, uq), (0, LQ.l)(this, Hq, .98)), this.invertRefractionY = ((0, LQ.l)(this, bq), (0, LQ.l)(this, Yq, !0)), this.alphaCutOff = ((0, LQ.l)(this, xq), (0, LQ.l)(this, Aq, .4)), this._useLightmapAsShadowmap = ((0, LQ.l)(this, tq), (0, LQ.l)(this, eq, !1)), JQ.set(this, ((0, LQ.l)(this, Mq), (0, LQ.l)(this, Gq, void 0))), this._diffuseFresnelParameters = ((0, LQ.l)(this, pq), (0, LQ.l)(this, cq, void 0)), EQ.set(this, ((0, LQ.l)(this, Cq), (0, LQ.l)(this, Sq, void 0))), this._opacityFresnelParameters = ((0, LQ.l)(this, iq), (0, LQ.l)(this, Wq, void 0)), nQ.set(this, ((0, LQ.l)(this, Rq), (0, LQ.l)(this, Oq, void 0))), this._reflectionFresnelParameters = ((0, LQ.l)(this, sq), (0, LQ.l)(this, rq, void 0)), gQ.set(this, ((0, LQ.l)(this, Iq), (0, LQ.l)(this, Uq, void 0))), this._refractionFresnelParameters = ((0, LQ.l)(this, Nq), (0, LQ.l)(this, Tq, void 0)), PQ.set(this, ((0, LQ.l)(this, Kq), (0, LQ.l)(this, zq, void 0))), this._emissiveFresnelParameters = ((0, LQ.l)(this, lq), (0, LQ.l)(this, jq, void 0)), ZQ.set(this, ((0, LQ.l)(this, aq), (0, LQ.l)(this, Xq, void 0))), this._useReflectionFresnelFromSpecular = ((0, LQ.l)(this, fq), (0, LQ.l)(this, Vq, !1)), yQ.set(this, ((0, LQ.l)(this, hq), (0, LQ.l)(this, Jq, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, LQ.l)(this, Eq), (0, LQ.l)(this, nq, !1)), BQ.set(this, ((0, LQ.l)(this, gq), (0, LQ.l)(this, Pq, void 0))), this._maxSimultaneousLights = ((0, LQ.l)(this, Zq), (0, LQ.l)(this, yq, 4)), dQ.set(this, ((0, LQ.l)(this, Bq), (0, LQ.l)(this, dq, void 0))), this._invertNormalMapX = ((0, LQ.l)(this, Qo), (0, LQ.l)(this, Fo, !1)), QF.set(this, ((0, LQ.l)(this, wo), (0, LQ.l)(this, Lo, void 0))), this._invertNormalMapY = ((0, LQ.l)(this, qo), (0, LQ.l)(this, oo, !1)), FF.set(this, ((0, LQ.l)(this, Do), (0, LQ.l)(this, ko, void 0))), this._twoSidedLighting = ((0, LQ.l)(this, vo), (0, LQ.l)(this, mo, !1)), wF.set(this, ((0, LQ.l)(this, uo), (0, LQ.l)(this, Ho, void 0))), this._applyDecalMapAfterDetailMap = ((0, LQ.l)(this, bo), (0, LQ.l)(this, Yo, !1)), LF.set(this, ((0, LQ.l)(this, xo), (0, LQ.l)(this, Ao, void 0))), this._vertexPullingMetadata = ((0, LQ.l)(this, to), null), this._renderTargets = new oQ.d(16), this._globalAmbientColor = new kQ.b(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new eQ.c(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new mQ.d, this.getRenderTargetTextures = () => (this._renderTargets.reset(), QQ.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), QQ.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
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
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === bQ.d.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== bQ.d.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(FQ, wQ) {
            let LQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const qQ = wQ._drawWrapper;
            if (qQ.effect && this.isFrozen && qQ._wasPreviouslyReady && qQ._wasPreviouslyUsingInstances === LQ) return !0;
            wQ.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), wQ.materialDefines = new UQ(this._eventInfo.defineNames));
            const oQ = this.iN(),
              DQ = wQ.materialDefines;
            if (this._isReadyForSubMesh(wQ)) return !0;
            const kQ = oQ.Wx();
            if (DQ._needNormals = (0, pQ.U)(oQ, FQ, DQ, !0, this._maxSimultaneousLights, this._disableLighting), !(0, pQ.c)(oQ, FQ, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, pQ.ab)(oQ, DQ);
            const uQ = this.needAlphaBlendingForMesh(FQ) && this.iN().useOrderIndependentTransparency;
            if ((0, pQ.fb)(oQ, DQ, this.canRenderToMRT && !uQ), (0, pQ.bb)(oQ, DQ, uQ), SQ.b.PrepareDefines(kQ.currentRenderPassId, FQ, DQ), DQ._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, DQ._needUVs = !1;
              for (let QQ = 1; QQ <= 6; ++QQ) DQ["MAINUV" + QQ] = !1;
              if (oQ.texturesEnabled) {
                if (DQ.DIFFUSEDIRECTUV = 0, DQ.BUMPDIRECTUV = 0, DQ.AMBIENTDIRECTUV = 0, DQ.OPACITYDIRECTUV = 0, DQ.EMISSIVEDIRECTUV = 0, DQ.SPECULARDIRECTUV = 0, DQ.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && QQ.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, pQ.X)(this._diffuseTexture, DQ, "DIFFUSE")
                } else DQ.DIFFUSE = !1;
                if (this._ambientTexture && QQ.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, pQ.X)(this._ambientTexture, DQ, "AMBIENT")
                } else DQ.AMBIENT = !1;
                if (this._opacityTexture && QQ.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, pQ.X)(this._opacityTexture, DQ, "OPACITY"), DQ.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else DQ.OPACITY = !1;
                if (this._reflectionTexture && QQ.ReflectionTextureEnabled ? (DQ.ROUGHNESS = this._roughness > 0, DQ.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (DQ.ROUGHNESS = !1, DQ.REFLECTIONOVERALPHA = !1), !(0, pQ.T)(oQ, this._reflectionTexture, DQ)) return !1;
                if (this._emissiveTexture && QQ.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, pQ.X)(this._emissiveTexture, DQ, "EMISSIVE")
                } else DQ.EMISSIVE = !1;
                if (this._lightmapTexture && QQ.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, pQ.X)(this._lightmapTexture, DQ, "LIGHTMAP"), DQ.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, DQ.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else DQ.LIGHTMAP = !1;
                if (this._specularTexture && QQ.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, pQ.X)(this._specularTexture, DQ, "SPECULAR"), DQ.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else DQ.SPECULAR = !1;
                if (oQ.Wx().getCaps().standardDerivatives && this._bumpTexture && QQ.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, pQ.X)(this._bumpTexture, DQ, "BUMP"), DQ.PARALLAX = this._useParallax, DQ.PARALLAX_RHS = oQ.useRightHandedSystem, DQ.PARALLAXOCCLUSION = this._useParallaxOcclusion, DQ.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else DQ.BUMP = !1, DQ.PARALLAX = !1, DQ.PARALLAX_RHS = !1, DQ.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && QQ.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  DQ._needUVs = !0, DQ.REFRACTION = !0, DQ.REFRACTIONMAP_3D = this._refractionTexture.isCube, DQ.RGBDREFRACTION = this._refractionTexture.isRGBD, DQ.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else DQ.REFRACTION = !1;
                DQ.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else DQ.DIFFUSE = !1, DQ.AMBIENT = !1, DQ.OPACITY = !1, DQ.REFLECTION = !1, DQ.EMISSIVE = !1, DQ.LIGHTMAP = !1, DQ.BUMP = !1, DQ.REFRACTION = !1;
              DQ.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), DQ.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, DQ.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, DQ.SPECULAROVERALPHA = this._useSpecularOverAlpha, DQ.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, DQ.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, DQ.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(FQ), DQ.TEXTURE_REPETITION_MODE = kQ.version > 1 || kQ.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = DQ, this._eventInfo.subMesh = wQ, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (DQ._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(DQ), DQ.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, DQ.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (DQ._areFresnelDirty && (QQ.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (DQ.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, DQ.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, DQ.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, DQ.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, DQ.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, DQ.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, DQ._needNormals = !0, DQ.FRESNEL = !0) : DQ.FRESNEL = !1), DQ.AREALIGHTUSED || DQ.CLUSTLIGHT_BATCH)
              for (let QQ = 0; QQ < FQ.lightSources.length; QQ++)
                if (!FQ.lightSources[QQ]._isReady()) return !1;
            (0, pQ.Y)(FQ, oQ, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(FQ), DQ, this._applyDecalMapAfterDetailMap, this._useVertexPulling, wQ.getRenderingMesh(), this._isVertexOutputInvariant), (0, pQ.R)(oQ, kQ, this, DQ, LQ, null, wQ.getRenderingMesh().hasThinInstances), this._eventInfo.defines = DQ, this._eventInfo.mesh = FQ, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, pQ.N)(FQ, DQ, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let bQ = !1;
            if (DQ.isDirty) {
              const LQ = DQ._areLightsDisposed;
              DQ.markAsProcessed();
              const qQ = new tQ.d;
              DQ.REFLECTION && qQ.addFallback(0, "REFLECTION"), DQ.SPECULAR && qQ.addFallback(0, "SPECULAR"), DQ.BUMP && qQ.addFallback(0, "BUMP"), DQ.PARALLAX && qQ.addFallback(1, "PARALLAX"), DQ.PARALLAX_RHS && qQ.addFallback(1, "PARALLAX_RHS"), DQ.PARALLAXOCCLUSION && qQ.addFallback(0, "PARALLAXOCCLUSION"), DQ.SPECULAROVERALPHA && qQ.addFallback(0, "SPECULAROVERALPHA"), DQ.FOG && qQ.addFallback(1, "FOG"), DQ.POINTSIZE && qQ.addFallback(0, "POINTSIZE"), DQ.LOGARITHMICDEPTH && qQ.addFallback(0, "LOGARITHMICDEPTH"), (0, pQ.C)(DQ, qQ, this._maxSimultaneousLights), DQ.SPECULARTERM && qQ.addFallback(0, "SPECULARTERM"), DQ.DIFFUSEFRESNEL && qQ.addFallback(1, "DIFFUSEFRESNEL"), DQ.OPACITYFRESNEL && qQ.addFallback(2, "OPACITYFRESNEL"), DQ.REFLECTIONFRESNEL && qQ.addFallback(3, "REFLECTIONFRESNEL"), DQ.EMISSIVEFRESNEL && qQ.addFallback(4, "EMISSIVEFRESNEL"), DQ.FRESNEL && qQ.addFallback(4, "FRESNEL"), DQ.MULTIVIEW && qQ.addFallback(0, "MULTIVIEW");
              const uQ = [vQ.h.PositionKind];
              DQ.NORMAL && uQ.push(vQ.h.NormalKind), DQ.TANGENT && uQ.push(vQ.h.TangentKind);
              for (let QQ = 1; QQ <= 6; ++QQ) DQ["UV" + QQ] && uQ.push(`uv${1===QQ?"":QQ}`);
              DQ.VERTEXCOLOR && uQ.push(vQ.h.ColorKind), (0, pQ.F)(uQ, FQ, DQ, qQ), (0, pQ.I)(uQ, DQ), (0, pQ.J)(uQ, FQ, DQ), (0, pQ.E)(uQ, FQ, DQ);
              let YQ = "default";
              const xQ = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                AQ = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, pQ.lb)(xQ, AQ, !1);
              const eQ = ["Material", "Scene", "Mesh"],
                cQ = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: DQ.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = qQ, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = DQ, this._eventInfo.uniforms = xQ, this._eventInfo.attributes = uQ, this._eventInfo.samplers = AQ, this._eventInfo.uniformBuffersNames = eQ, this._eventInfo.customCode = void 0, this._eventInfo.mesh = FQ, this._eventInfo.indexParameters = cQ, this._callbackPluginEventGeneric(128, this._eventInfo), SQ.b.AddUniformsAndSamplers(xQ, AQ), mQ.d.AddUniforms(xQ), mQ.d.AddSamplers(AQ), HQ.e && (HQ.e.PrepareUniforms(xQ, DQ), HQ.e.PrepareSamplers(AQ, DQ)), (0, pQ.pb)({
                  uniformsNames: xQ,
                  uniformBuffersNames: eQ,
                  samplers: AQ,
                  defines: DQ,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, MQ.d)(xQ), this._useVertexPulling) {
                const QQ = wQ.getRenderingMesh(),
                  FQ = QQ?.geometry;
                FQ && (this._vertexPullingMetadata = (0, GQ.i)(FQ), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((QQ, FQ) => {
                  xQ.push(`vp_${FQ}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const CQ = {};
              this.customShaderNameResolve && (YQ = this.customShaderNameResolve(YQ, xQ, eQ, AQ, DQ, uQ, CQ));
              const iQ = DQ.toString(),
                WQ = wQ.effect,
                RQ = oQ.Wx().createEffect(YQ, {
                  attributes: uQ,
                  uniformsNames: xQ,
                  uniformBuffersNames: eQ,
                  samplers: AQ,
                  defines: iQ,
                  fallbacks: qQ,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: cQ,
                  processFinalCode: CQ.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: DQ.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: QQ._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, kQ);
              if (this._eventInfo.customCode = void 0, RQ)
                if (this._onEffectCreatedObservable && (rQ.effect = RQ, rQ.subMesh = wQ, this._onEffectCreatedObservable.notifyObservers(rQ)), this.allowShaderHotSwapping && WQ && !RQ.isReady()) {
                  if (DQ.markAsUnprocessed(), bQ = this.isFrozen, LQ) return DQ._areLightsDisposed = !0, !1
                } else oQ.resetCachedMaterial(), wQ.setEffect(RQ, DQ, this._materialContext)
            }
            return !(!wQ.effect || !wQ.effect.isReady()) && (DQ._renderId = oQ.getRenderId(), qQ._wasPreviouslyReady = !bQ, qQ._wasPreviouslyUsingInstances = LQ, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const QQ = this._uniformBuffer;
            QQ.addUniform("diffuseLeftColor", 4), QQ.addUniform("diffuseRightColor", 4), QQ.addUniform("opacityParts", 4), QQ.addUniform("reflectionLeftColor", 4), QQ.addUniform("reflectionRightColor", 4), QQ.addUniform("refractionLeftColor", 4), QQ.addUniform("refractionRightColor", 4), QQ.addUniform("emissiveLeftColor", 4), QQ.addUniform("emissiveRightColor", 4), QQ.addUniform("vDiffuseInfos", 2), QQ.addUniform("vAmbientInfos", 2), QQ.addUniform("vOpacityInfos", 2), QQ.addUniform("vEmissiveInfos", 2), QQ.addUniform("vLightmapInfos", 2), QQ.addUniform("vSpecularInfos", 2), QQ.addUniform("vBumpInfos", 3), QQ.addUniform("diffuseMatrix", 16), QQ.addUniform("ambientMatrix", 16), QQ.addUniform("opacityMatrix", 16), QQ.addUniform("emissiveMatrix", 16), QQ.addUniform("lightmapMatrix", 16), QQ.addUniform("specularMatrix", 16), QQ.addUniform("bumpMatrix", 16), QQ.addUniform("vTangentSpaceParams", 2), QQ.addUniform("pointSize", 1), QQ.addUniform("alphaCutOff", 1), QQ.addUniform("refractionMatrix", 16), QQ.addUniform("vRefractionInfos", 4), QQ.addUniform("vRefractionPosition", 3), QQ.addUniform("vRefractionSize", 3), QQ.addUniform("vSpecularColor", 4), QQ.addUniform("vEmissiveColor", 3), QQ.addUniform("vDiffuseColor", 4), QQ.addUniform("vAmbientColor", 3), QQ.addUniform("cameraInfo", 4), QQ.addUniform("vTextureRepetitionHexTilingParams", 4), (0, pQ.jb)(QQ, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(FQ, wQ, LQ) {
            const qQ = this.iN(),
              oQ = LQ.materialDefines;
            if (!oQ) return;
            const vQ = LQ.effect;
            if (!vQ) return;
            this._activeEffect = vQ, wQ.getMeshUniformBuffer().bindToEffect(vQ, "Mesh"), wQ.transferToEffect(FQ), this._uniformBuffer.bindToEffect(vQ, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, qQ, wQ, FQ, this.isFrozen), SQ.b.Bind(qQ.Wx().currentRenderPassId, this._activeEffect, wQ, FQ, this);
            const mQ = qQ.activeCamera;
            mQ ? this._uniformBuffer.updateFloat4("cameraInfo", mQ.minZ, mQ.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const uQ = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", uQ[0], uQ[1], uQ[2], uQ[3]), this._eventInfo.subMesh = LQ, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), oQ.OBJECTSPACE_NORMALMAP && (FQ.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const HQ = this._mustRebind(qQ, vQ, LQ, wQ.visibility),
              bQ = qQ.Wx()._features.needToAlwaysBindUniformBuffers;
            (0, pQ.d)(wQ, vQ), this._vertexPullingMetadata && (0, GQ.e)(vQ, this._vertexPullingMetadata);
            const YQ = this._uniformBuffer;
            if (HQ) {
              if (this.bindViewProjection(vQ), !YQ.useUbo || !this.isFrozen || !YQ.isSync || LQ._drawWrapper._forceRebindOnNextCall) {
                if (QQ.FresnelEnabled && oQ.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (YQ.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), YQ.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const QQ = kQ.i.Color3[0];
                    QQ.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), YQ.updateColor4("opacityParts", QQ, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (YQ.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), YQ.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (YQ.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), YQ.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (YQ.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), YQ.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (oQ.ALPHATEST && YQ.updateFloat("alphaCutOff", this.alphaCutOff), qQ.texturesEnabled && (this._diffuseTexture && QQ.DiffuseTextureEnabled && (YQ.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, pQ.y)(this._diffuseTexture, YQ, "diffuse")), this._ambientTexture && QQ.AmbientTextureEnabled && (YQ.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, pQ.y)(this._ambientTexture, YQ, "ambient")), this._opacityTexture && QQ.OpacityTextureEnabled && (YQ.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, pQ.y)(this._opacityTexture, YQ, "opacity")), (0, pQ.h)(qQ, oQ, YQ, kQ.b.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && QQ.ReflectionTextureEnabled || YQ.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && QQ.EmissiveTextureEnabled && (YQ.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, pQ.y)(this._emissiveTexture, YQ, "emissive")), this._lightmapTexture && QQ.LightmapTextureEnabled && (YQ.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, pQ.y)(this._lightmapTexture, YQ, "lightmap")), this._specularTexture && QQ.SpecularTextureEnabled && (YQ.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, pQ.y)(this._specularTexture, YQ, "specular")), this._bumpTexture && qQ.Wx().getCaps().standardDerivatives && QQ.BumpTextureEnabled && (YQ.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, pQ.y)(this._bumpTexture, YQ, "bump"), qQ._mirroredCameraPosition ? YQ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : YQ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && QQ.RefractionTextureEnabled)) {
                  let QQ = 1;
                  if (this._refractionTexture.isCube || (YQ.Y5("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (QQ = this._refractionTexture.depth)), YQ.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, QQ, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const QQ = this._refractionTexture;
                    YQ.updateVector3("vRefractionPosition", QQ.boundingBoxPosition), YQ.updateVector3("vRefractionSize", QQ.boundingBoxSize)
                  }
                }
                this.pointsCloud && YQ.updateFloat("pointSize", this.pointSize), YQ.updateColor4("vSpecularColor", this.specularColor, this.specularPower), YQ.updateColor3("vEmissiveColor", QQ.EmissiveTextureEnabled ? this.emissiveColor : kQ.b.BlackReadOnly), YQ.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), qQ.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), YQ.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              qQ.texturesEnabled && (this._diffuseTexture && QQ.DiffuseTextureEnabled && vQ.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && QQ.AmbientTextureEnabled && vQ.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && QQ.OpacityTextureEnabled && vQ.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && QQ.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? vQ.setTexture("reflectionCubeSampler", this._reflectionTexture) : vQ.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && QQ.EmissiveTextureEnabled && vQ.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && QQ.LightmapTextureEnabled && vQ.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && QQ.SpecularTextureEnabled && vQ.setTexture("specularSampler", this._specularTexture), this._bumpTexture && qQ.Wx().getCaps().standardDerivatives && QQ.BumpTextureEnabled && vQ.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && QQ.RefractionTextureEnabled && (this._refractionTexture.isCube ? vQ.setTexture("refractionCubeSampler", this._refractionTexture) : vQ.setTexture("refraction2DSampler", this._refractionTexture))), this.iN().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(wQ) && this.iN().depthPeelingRenderer.bind(vQ), this._eventInfo.subMesh = LQ, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, MQ.h)(vQ, this, qQ), this.bindEyePosition(vQ)
            } else bQ && (this._needToBindSceneUbo = !0);
            !HQ && this.isFrozen && !bQ || !qQ.lightsEnabled || this._disableLighting || (0, pQ.n)(qQ, wQ, vQ, oQ, this._maxSimultaneousLights), !HQ && this.isFrozen || ((qQ.fogEnabled && wQ.applyFog && qQ.fogMode !== DQ.e.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || wQ.receiveShadows || oQ.PREPASS || oQ.CLUSTLIGHT_BATCH) && this.bindView(vQ), (0, pQ.g)(qQ, wQ, vQ), oQ.NUM_MORPH_INFLUENCERS && (0, pQ.s)(wQ, vQ), oQ.BAKED_VERTEX_ANIMATION_TEXTURE && wQ.bakedVertexAnimationManager?.bind(vQ, oQ.INSTANCES), this.useLogarithmicDepth && (0, pQ.r)(oQ, vQ, qQ), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(wQ, this._activeEffect, LQ), YQ.update()
          }
          _canBindRunFollower(FQ, wQ, LQ, qQ, oQ) {
            const DQ = FQ.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === QQ.prototype.isReadyForSubMesh && this.bindForSubMesh === QQ.prototype.bindForSubMesh && this._mustRebind === xQ.e.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !wQ._features.needToAlwaysBindUniformBuffers && !(DQ && DQ.enabled && DQ.currentRTisSceneRT) && !SQ.b._Configurations[wQ.currentRenderPassId] && !qQ.materialDefines?.OBJECTSPACE_NORMALMAP && !LQ.skeleton && !oQ._bonesComputationForcedToCPU
          }
          _bindRunFollower(QQ, FQ, wQ, LQ) {
            this._activeEffect = LQ, FQ.getMeshUniformBuffer().bindToEffect(LQ, "Mesh"), FQ.transferToEffect(QQ);
            const qQ = this._uniformBuffer;
            qQ.bindToEffect(LQ, "Material");
            const oQ = this._scene.activeCamera;
            oQ ? qQ.updateFloat4("cameraInfo", oQ.minZ, oQ.maxZ, 0, 0) : qQ.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const DQ = this.textureRepetitionHexTilingParams;
            qQ.updateFloat4("vTextureRepetitionHexTilingParams", DQ[0], DQ[1], DQ[2], DQ[3]), this._afterBind(FQ, LQ, wQ), qQ.update()
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
          dispose(QQ, FQ) {
            FQ && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(QQ, FQ)
          }
          clone(FQ) {
            let wQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const qQ = cQ.c.Clone((() => new QQ(FQ, this.iN())), this, {
              cloneTexturesOnlyOnce: wQ
            });
            return qQ.name = FQ, qQ.id = FQ, this.stencil.copyTo(qQ.stencil), this._clonePlugins(qQ, LQ), qQ
          }
          static Parse(FQ, wQ, LQ) {
            const qQ = cQ.c.Parse((() => new QQ(FQ.name, wQ)), FQ, wQ, LQ);
            return FQ.stencil && qQ.stencil.parse(FQ.stencil, wQ, LQ), bQ.d._ParsePlugins(FQ, qQ, wQ, LQ), qQ
          }
          static get DiffuseTextureEnabled() {
            return AQ.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(QQ) {
            AQ.e.DiffuseTextureEnabled = QQ
          }
          static get DetailTextureEnabled() {
            return AQ.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(QQ) {
            AQ.e.DetailTextureEnabled = QQ
          }
          static get AmbientTextureEnabled() {
            return AQ.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(QQ) {
            AQ.e.AmbientTextureEnabled = QQ
          }
          static get OpacityTextureEnabled() {
            return AQ.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(QQ) {
            AQ.e.OpacityTextureEnabled = QQ
          }
          static get ReflectionTextureEnabled() {
            return AQ.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(QQ) {
            AQ.e.ReflectionTextureEnabled = QQ
          }
          static get EmissiveTextureEnabled() {
            return AQ.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(QQ) {
            AQ.e.EmissiveTextureEnabled = QQ
          }
          static get SpecularTextureEnabled() {
            return AQ.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(QQ) {
            AQ.e.SpecularTextureEnabled = QQ
          }
          static get BumpTextureEnabled() {
            return AQ.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(QQ) {
            AQ.e.BumpTextureEnabled = QQ
          }
          static get LightmapTextureEnabled() {
            return AQ.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(QQ) {
            AQ.e.LightmapTextureEnabled = QQ
          }
          static get RefractionTextureEnabled() {
            return AQ.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(QQ) {
            AQ.e.RefractionTextureEnabled = QQ
          }
          static get ColorGradingTextureEnabled() {
            return AQ.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(QQ) {
            AQ.e.ColorGradingTextureEnabled = QQ
          }
          static get FresnelEnabled() {
            return AQ.e.FresnelEnabled
          }
          static set FresnelEnabled(QQ) {
            AQ.e.FresnelEnabled = QQ
          }
        }, FQ = new WeakMap, uQ = new WeakMap, YQ = new WeakMap, iQ = new WeakMap, WQ = new WeakMap, RQ = new WeakMap, OQ = new WeakMap, sQ = new WeakMap, IQ = new WeakMap, TQ = new WeakMap, KQ = new WeakMap, zQ = new WeakMap, lQ = new WeakMap, jQ = new WeakMap, aQ = new WeakMap, XQ = new WeakMap, fQ = new WeakMap, VQ = new WeakMap, hQ = new WeakMap, JQ = new WeakMap, EQ = new WeakMap, nQ = new WeakMap, gQ = new WeakMap, PQ = new WeakMap, ZQ = new WeakMap, yQ = new WeakMap, BQ = new WeakMap, dQ = new WeakMap, QF = new WeakMap, FF = new WeakMap, wF = new WeakMap, LF = new WeakMap, (() => {
          const FQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(Rw[Symbol.metadata] ?? null) : void 0;
          qF = [(0, qQ.z)("diffuseTexture")], oF = [(0, qQ.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], DF = [(0, qQ.z)("ambientTexture")], kF = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], vF = [(0, qQ.z)("opacityTexture")], mF = [(0, qQ.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], uF = [(0, qQ.z)("reflectionTexture")], HF = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], bF = [(0, qQ.z)("emissiveTexture")], YF = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], xF = [(0, qQ.z)("specularTexture")], AF = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], tF = [(0, qQ.z)("bumpTexture")], eF = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], MF = [(0, qQ.z)("lightmapTexture")], GF = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], pF = [(0, qQ.z)("refractionTexture")], cF = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], CF = [(0, qQ.m)("ambient")], SF = [(0, qQ.m)("diffuse")], iF = [(0, qQ.m)("specular")], WF = [(0, qQ.m)("emissive")], RF = [(0, qQ.I)()], OF = [(0, qQ.I)("useAlphaFromDiffuseTexture")], sF = [() => ({
            init(QQ) {
              return void 0 === QQ && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = QQ), QQ
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(QQ) {
              this._useAlphaFromDiffuseTexture = QQ
            }
          })], rF = [(0, qQ.I)("useEmissiveAsIllumination")], IF = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], UF = [(0, qQ.I)("linkEmissiveWithDiffuse")], NF = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], TF = [(0, qQ.I)("useSpecularOverAlpha")], KF = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], zF = [(0, qQ.I)("useReflectionOverAlpha")], lF = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], jF = [(0, qQ.I)("disableLighting")], aF = [(0, qQ.e)("_markAllSubMeshesAsLightsDirty")], XF = [(0, qQ.I)("useObjectSpaceNormalMap")], fF = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], VF = [(0, qQ.I)("useParallax")], hF = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], JF = [(0, qQ.I)("useParallaxOcclusion")], EF = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], nF = [(0, qQ.I)()], gF = [(0, qQ.I)("roughness")], PF = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], ZF = [(0, qQ.I)()], yF = [(0, qQ.I)()], BF = [(0, qQ.I)()], dF = [(0, qQ.I)("useLightmapAsShadowmap")], Qw = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], Fw = [(0, qQ.o)("diffuseFresnelParameters")], ww = [(0, qQ.e)("_markAllSubMeshesAsFresnelDirty")], Lw = [(0, qQ.o)("opacityFresnelParameters")], qw = [(0, qQ.e)("_markAllSubMeshesAsFresnelAndMiscDirty")], ow = [(0, qQ.o)("reflectionFresnelParameters")], Dw = [(0, qQ.e)("_markAllSubMeshesAsFresnelDirty")], kw = [(0, qQ.o)("refractionFresnelParameters")], vw = [(0, qQ.e)("_markAllSubMeshesAsFresnelDirty")], mw = [(0, qQ.o)("emissiveFresnelParameters")], uw = [(0, qQ.e)("_markAllSubMeshesAsFresnelDirty")], Hw = [(0, qQ.I)("useReflectionFresnelFromSpecular")], bw = [(0, qQ.e)("_markAllSubMeshesAsFresnelDirty")], Yw = [(0, qQ.I)("useGlossinessFromSpecularMapAlpha")], xw = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], Aw = [(0, qQ.I)("maxSimultaneousLights")], tw = [(0, qQ.e)("_markAllSubMeshesAsLightsDirty")], ew = [(0, qQ.I)("invertNormalMapX")], Mw = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], Gw = [(0, qQ.I)("invertNormalMapY")], pw = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], Cw = [(0, qQ.I)("twoSidedLighting")], Sw = [(0, qQ.e)("_markAllSubMeshesAsTexturesDirty")], iw = [(0, qQ.I)("applyDecalMapAfterDetailMap")], Ww = [(0, qQ.e)("_markAllSubMeshesAsMiscDirty")], (0, LQ.i)(QQ, null, oF, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "diffuseTexture" in QQ,
              get: QQ => QQ.diffuseTexture,
              set: (QQ, FQ) => {
                QQ.diffuseTexture = FQ
              }
            },
            metadata: FQ
          }, rw, Iw), (0, LQ.i)(QQ, null, kF, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "ambientTexture" in QQ,
              get: QQ => QQ.ambientTexture,
              set: (QQ, FQ) => {
                QQ.ambientTexture = FQ
              }
            },
            metadata: FQ
          }, Tw, Kw), (0, LQ.i)(QQ, null, mF, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "opacityTexture" in QQ,
              get: QQ => QQ.opacityTexture,
              set: (QQ, FQ) => {
                QQ.opacityTexture = FQ
              }
            },
            metadata: FQ
          }, jw, aw), (0, LQ.i)(QQ, null, HF, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "reflectionTexture" in QQ,
              get: QQ => QQ.reflectionTexture,
              set: (QQ, FQ) => {
                QQ.reflectionTexture = FQ
              }
            },
            metadata: FQ
          }, Vw, hw), (0, LQ.i)(QQ, null, YF, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "emissiveTexture" in QQ,
              get: QQ => QQ.emissiveTexture,
              set: (QQ, FQ) => {
                QQ.emissiveTexture = FQ
              }
            },
            metadata: FQ
          }, nw, gw), (0, LQ.i)(QQ, null, AF, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularTexture" in QQ,
              get: QQ => QQ.specularTexture,
              set: (QQ, FQ) => {
                QQ.specularTexture = FQ
              }
            },
            metadata: FQ
          }, yw, Bw), (0, LQ.i)(QQ, null, eF, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "bumpTexture" in QQ,
              get: QQ => QQ.bumpTexture,
              set: (QQ, FQ) => {
                QQ.bumpTexture = FQ
              }
            },
            metadata: FQ
          }, FL, wL), (0, LQ.i)(QQ, null, GF, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "lightmapTexture" in QQ,
              get: QQ => QQ.lightmapTexture,
              set: (QQ, FQ) => {
                QQ.lightmapTexture = FQ
              }
            },
            metadata: FQ
          }, oL, DL), (0, LQ.i)(QQ, null, cF, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "refractionTexture" in QQ,
              get: QQ => QQ.refractionTexture,
              set: (QQ, FQ) => {
                QQ.refractionTexture = FQ
              }
            },
            metadata: FQ
          }, mL, uL), (0, LQ.i)(QQ, null, sF, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useAlphaFromDiffuseTexture" in QQ,
              get: QQ => QQ.useAlphaFromDiffuseTexture,
              set: (QQ, FQ) => {
                QQ.useAlphaFromDiffuseTexture = FQ
              }
            },
            metadata: FQ
          }, SL, iL), (0, LQ.i)(QQ, null, IF, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useEmissiveAsIllumination" in QQ,
              get: QQ => QQ.useEmissiveAsIllumination,
              set: (QQ, FQ) => {
                QQ.useEmissiveAsIllumination = FQ
              }
            },
            metadata: FQ
          }, OL, sL), (0, LQ.i)(QQ, null, NF, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: QQ => "linkEmissiveWithDiffuse" in QQ,
              get: QQ => QQ.linkEmissiveWithDiffuse,
              set: (QQ, FQ) => {
                QQ.linkEmissiveWithDiffuse = FQ
              }
            },
            metadata: FQ
          }, UL, NL), (0, LQ.i)(QQ, null, KF, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useSpecularOverAlpha" in QQ,
              get: QQ => QQ.useSpecularOverAlpha,
              set: (QQ, FQ) => {
                QQ.useSpecularOverAlpha = FQ
              }
            },
            metadata: FQ
          }, zL, lL), (0, LQ.i)(QQ, null, lF, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useReflectionOverAlpha" in QQ,
              get: QQ => QQ.useReflectionOverAlpha,
              set: (QQ, FQ) => {
                QQ.useReflectionOverAlpha = FQ
              }
            },
            metadata: FQ
          }, XL, fL), (0, LQ.i)(QQ, null, aF, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: QQ => "disableLighting" in QQ,
              get: QQ => QQ.disableLighting,
              set: (QQ, FQ) => {
                QQ.disableLighting = FQ
              }
            },
            metadata: FQ
          }, JL, EL), (0, LQ.i)(QQ, null, fF, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useObjectSpaceNormalMap" in QQ,
              get: QQ => QQ.useObjectSpaceNormalMap,
              set: (QQ, FQ) => {
                QQ.useObjectSpaceNormalMap = FQ
              }
            },
            metadata: FQ
          }, PL, ZL), (0, LQ.i)(QQ, null, hF, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useParallax" in QQ,
              get: QQ => QQ.useParallax,
              set: (QQ, FQ) => {
                QQ.useParallax = FQ
              }
            },
            metadata: FQ
          }, dL, Qq), (0, LQ.i)(QQ, null, EF, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useParallaxOcclusion" in QQ,
              get: QQ => QQ.useParallaxOcclusion,
              set: (QQ, FQ) => {
                QQ.useParallaxOcclusion = FQ
              }
            },
            metadata: FQ
          }, Lq, qq), (0, LQ.i)(QQ, null, PF, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "roughness" in QQ,
              get: QQ => QQ.roughness,
              set: (QQ, FQ) => {
                QQ.roughness = FQ
              }
            },
            metadata: FQ
          }, mq, uq), (0, LQ.i)(QQ, null, Qw, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useLightmapAsShadowmap" in QQ,
              get: QQ => QQ.useLightmapAsShadowmap,
              set: (QQ, FQ) => {
                QQ.useLightmapAsShadowmap = FQ
              }
            },
            metadata: FQ
          }, Gq, pq), (0, LQ.i)(QQ, null, ww, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "diffuseFresnelParameters" in QQ,
              get: QQ => QQ.diffuseFresnelParameters,
              set: (QQ, FQ) => {
                QQ.diffuseFresnelParameters = FQ
              }
            },
            metadata: FQ
          }, Sq, iq), (0, LQ.i)(QQ, null, qw, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "opacityFresnelParameters" in QQ,
              get: QQ => QQ.opacityFresnelParameters,
              set: (QQ, FQ) => {
                QQ.opacityFresnelParameters = FQ
              }
            },
            metadata: FQ
          }, Oq, sq), (0, LQ.i)(QQ, null, Dw, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "reflectionFresnelParameters" in QQ,
              get: QQ => QQ.reflectionFresnelParameters,
              set: (QQ, FQ) => {
                QQ.reflectionFresnelParameters = FQ
              }
            },
            metadata: FQ
          }, Uq, Nq), (0, LQ.i)(QQ, null, vw, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "refractionFresnelParameters" in QQ,
              get: QQ => QQ.refractionFresnelParameters,
              set: (QQ, FQ) => {
                QQ.refractionFresnelParameters = FQ
              }
            },
            metadata: FQ
          }, zq, lq), (0, LQ.i)(QQ, null, uw, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "emissiveFresnelParameters" in QQ,
              get: QQ => QQ.emissiveFresnelParameters,
              set: (QQ, FQ) => {
                QQ.emissiveFresnelParameters = FQ
              }
            },
            metadata: FQ
          }, Xq, fq), (0, LQ.i)(QQ, null, bw, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useReflectionFresnelFromSpecular" in QQ,
              get: QQ => QQ.useReflectionFresnelFromSpecular,
              set: (QQ, FQ) => {
                QQ.useReflectionFresnelFromSpecular = FQ
              }
            },
            metadata: FQ
          }, Jq, Eq), (0, LQ.i)(QQ, null, xw, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: QQ => "useGlossinessFromSpecularMapAlpha" in QQ,
              get: QQ => QQ.useGlossinessFromSpecularMapAlpha,
              set: (QQ, FQ) => {
                QQ.useGlossinessFromSpecularMapAlpha = FQ
              }
            },
            metadata: FQ
          }, Pq, Zq), (0, LQ.i)(QQ, null, tw, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: QQ => "maxSimultaneousLights" in QQ,
              get: QQ => QQ.maxSimultaneousLights,
              set: (QQ, FQ) => {
                QQ.maxSimultaneousLights = FQ
              }
            },
            metadata: FQ
          }, dq, Qo), (0, LQ.i)(QQ, null, Mw, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: QQ => "invertNormalMapX" in QQ,
              get: QQ => QQ.invertNormalMapX,
              set: (QQ, FQ) => {
                QQ.invertNormalMapX = FQ
              }
            },
            metadata: FQ
          }, Lo, qo), (0, LQ.i)(QQ, null, pw, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: QQ => "invertNormalMapY" in QQ,
              get: QQ => QQ.invertNormalMapY,
              set: (QQ, FQ) => {
                QQ.invertNormalMapY = FQ
              }
            },
            metadata: FQ
          }, ko, vo), (0, LQ.i)(QQ, null, Sw, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: QQ => "twoSidedLighting" in QQ,
              get: QQ => QQ.twoSidedLighting,
              set: (QQ, FQ) => {
                QQ.twoSidedLighting = FQ
              }
            },
            metadata: FQ
          }, Ho, bo), (0, LQ.i)(QQ, null, Ww, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: QQ => "applyDecalMapAfterDetailMap" in QQ,
              get: QQ => QQ.applyDecalMapAfterDetailMap,
              set: (QQ, FQ) => {
                QQ.applyDecalMapAfterDetailMap = FQ
              }
            },
            metadata: FQ
          }, Ao, to), (0, LQ.i)(null, null, qF, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_diffuseTexture" in QQ,
              get: QQ => QQ._diffuseTexture,
              set: (QQ, FQ) => {
                QQ._diffuseTexture = FQ
              }
            },
            metadata: FQ
          }, Ow, sw), (0, LQ.i)(null, null, DF, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_ambientTexture" in QQ,
              get: QQ => QQ._ambientTexture,
              set: (QQ, FQ) => {
                QQ._ambientTexture = FQ
              }
            },
            metadata: FQ
          }, Uw, Nw), (0, LQ.i)(null, null, vF, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_opacityTexture" in QQ,
              get: QQ => QQ._opacityTexture,
              set: (QQ, FQ) => {
                QQ._opacityTexture = FQ
              }
            },
            metadata: FQ
          }, zw, lw), (0, LQ.i)(null, null, uF, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_reflectionTexture" in QQ,
              get: QQ => QQ._reflectionTexture,
              set: (QQ, FQ) => {
                QQ._reflectionTexture = FQ
              }
            },
            metadata: FQ
          }, Xw, fw), (0, LQ.i)(null, null, bF, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_emissiveTexture" in QQ,
              get: QQ => QQ._emissiveTexture,
              set: (QQ, FQ) => {
                QQ._emissiveTexture = FQ
              }
            },
            metadata: FQ
          }, Jw, Ew), (0, LQ.i)(null, null, xF, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_specularTexture" in QQ,
              get: QQ => QQ._specularTexture,
              set: (QQ, FQ) => {
                QQ._specularTexture = FQ
              }
            },
            metadata: FQ
          }, Pw, Zw), (0, LQ.i)(null, null, tF, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_bumpTexture" in QQ,
              get: QQ => QQ._bumpTexture,
              set: (QQ, FQ) => {
                QQ._bumpTexture = FQ
              }
            },
            metadata: FQ
          }, dw, QL), (0, LQ.i)(null, null, MF, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_lightmapTexture" in QQ,
              get: QQ => QQ._lightmapTexture,
              set: (QQ, FQ) => {
                QQ._lightmapTexture = FQ
              }
            },
            metadata: FQ
          }, LL, qL), (0, LQ.i)(null, null, pF, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_refractionTexture" in QQ,
              get: QQ => QQ._refractionTexture,
              set: (QQ, FQ) => {
                QQ._refractionTexture = FQ
              }
            },
            metadata: FQ
          }, kL, vL), (0, LQ.i)(null, null, CF, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "ambientColor" in QQ,
              get: QQ => QQ.ambientColor,
              set: (QQ, FQ) => {
                QQ.ambientColor = FQ
              }
            },
            metadata: FQ
          }, HL, bL), (0, LQ.i)(null, null, SF, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "diffuseColor" in QQ,
              get: QQ => QQ.diffuseColor,
              set: (QQ, FQ) => {
                QQ.diffuseColor = FQ
              }
            },
            metadata: FQ
          }, YL, xL), (0, LQ.i)(null, null, iF, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularColor" in QQ,
              get: QQ => QQ.specularColor,
              set: (QQ, FQ) => {
                QQ.specularColor = FQ
              }
            },
            metadata: FQ
          }, AL, tL), (0, LQ.i)(null, null, WF, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "emissiveColor" in QQ,
              get: QQ => QQ.emissiveColor,
              set: (QQ, FQ) => {
                QQ.emissiveColor = FQ
              }
            },
            metadata: FQ
          }, eL, ML), (0, LQ.i)(null, null, RF, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: QQ => "specularPower" in QQ,
              get: QQ => QQ.specularPower,
              set: (QQ, FQ) => {
                QQ.specularPower = FQ
              }
            },
            metadata: FQ
          }, GL, pL), (0, LQ.i)(null, null, OF, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useAlphaFromDiffuseTexture" in QQ,
              get: QQ => QQ._useAlphaFromDiffuseTexture,
              set: (QQ, FQ) => {
                QQ._useAlphaFromDiffuseTexture = FQ
              }
            },
            metadata: FQ
          }, cL, CL), (0, LQ.i)(null, null, rF, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useEmissiveAsIllumination" in QQ,
              get: QQ => QQ._useEmissiveAsIllumination,
              set: (QQ, FQ) => {
                QQ._useEmissiveAsIllumination = FQ
              }
            },
            metadata: FQ
          }, WL, RL), (0, LQ.i)(null, null, UF, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_linkEmissiveWithDiffuse" in QQ,
              get: QQ => QQ._linkEmissiveWithDiffuse,
              set: (QQ, FQ) => {
                QQ._linkEmissiveWithDiffuse = FQ
              }
            },
            metadata: FQ
          }, rL, IL), (0, LQ.i)(null, null, TF, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useSpecularOverAlpha" in QQ,
              get: QQ => QQ._useSpecularOverAlpha,
              set: (QQ, FQ) => {
                QQ._useSpecularOverAlpha = FQ
              }
            },
            metadata: FQ
          }, TL, KL), (0, LQ.i)(null, null, zF, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useReflectionOverAlpha" in QQ,
              get: QQ => QQ._useReflectionOverAlpha,
              set: (QQ, FQ) => {
                QQ._useReflectionOverAlpha = FQ
              }
            },
            metadata: FQ
          }, jL, aL), (0, LQ.i)(null, null, jF, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_disableLighting" in QQ,
              get: QQ => QQ._disableLighting,
              set: (QQ, FQ) => {
                QQ._disableLighting = FQ
              }
            },
            metadata: FQ
          }, VL, hL), (0, LQ.i)(null, null, XF, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useObjectSpaceNormalMap" in QQ,
              get: QQ => QQ._useObjectSpaceNormalMap,
              set: (QQ, FQ) => {
                QQ._useObjectSpaceNormalMap = FQ
              }
            },
            metadata: FQ
          }, nL, gL), (0, LQ.i)(null, null, VF, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useParallax" in QQ,
              get: QQ => QQ._useParallax,
              set: (QQ, FQ) => {
                QQ._useParallax = FQ
              }
            },
            metadata: FQ
          }, yL, BL), (0, LQ.i)(null, null, JF, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useParallaxOcclusion" in QQ,
              get: QQ => QQ._useParallaxOcclusion,
              set: (QQ, FQ) => {
                QQ._useParallaxOcclusion = FQ
              }
            },
            metadata: FQ
          }, Fq, wq), (0, LQ.i)(null, null, nF, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: QQ => "parallaxScaleBias" in QQ,
              get: QQ => QQ.parallaxScaleBias,
              set: (QQ, FQ) => {
                QQ.parallaxScaleBias = FQ
              }
            },
            metadata: FQ
          }, oq, Dq), (0, LQ.i)(null, null, gF, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_roughness" in QQ,
              get: QQ => QQ._roughness,
              set: (QQ, FQ) => {
                QQ._roughness = FQ
              }
            },
            metadata: FQ
          }, kq, vq), (0, LQ.i)(null, null, ZF, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: QQ => "indexOfRefraction" in QQ,
              get: QQ => QQ.indexOfRefraction,
              set: (QQ, FQ) => {
                QQ.indexOfRefraction = FQ
              }
            },
            metadata: FQ
          }, Hq, bq), (0, LQ.i)(null, null, yF, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: QQ => "invertRefractionY" in QQ,
              get: QQ => QQ.invertRefractionY,
              set: (QQ, FQ) => {
                QQ.invertRefractionY = FQ
              }
            },
            metadata: FQ
          }, Yq, xq), (0, LQ.i)(null, null, BF, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: QQ => "alphaCutOff" in QQ,
              get: QQ => QQ.alphaCutOff,
              set: (QQ, FQ) => {
                QQ.alphaCutOff = FQ
              }
            },
            metadata: FQ
          }, Aq, tq), (0, LQ.i)(null, null, dF, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useLightmapAsShadowmap" in QQ,
              get: QQ => QQ._useLightmapAsShadowmap,
              set: (QQ, FQ) => {
                QQ._useLightmapAsShadowmap = FQ
              }
            },
            metadata: FQ
          }, eq, Mq), (0, LQ.i)(null, null, Fw, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_diffuseFresnelParameters" in QQ,
              get: QQ => QQ._diffuseFresnelParameters,
              set: (QQ, FQ) => {
                QQ._diffuseFresnelParameters = FQ
              }
            },
            metadata: FQ
          }, cq, Cq), (0, LQ.i)(null, null, Lw, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_opacityFresnelParameters" in QQ,
              get: QQ => QQ._opacityFresnelParameters,
              set: (QQ, FQ) => {
                QQ._opacityFresnelParameters = FQ
              }
            },
            metadata: FQ
          }, Wq, Rq), (0, LQ.i)(null, null, ow, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_reflectionFresnelParameters" in QQ,
              get: QQ => QQ._reflectionFresnelParameters,
              set: (QQ, FQ) => {
                QQ._reflectionFresnelParameters = FQ
              }
            },
            metadata: FQ
          }, rq, Iq), (0, LQ.i)(null, null, kw, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_refractionFresnelParameters" in QQ,
              get: QQ => QQ._refractionFresnelParameters,
              set: (QQ, FQ) => {
                QQ._refractionFresnelParameters = FQ
              }
            },
            metadata: FQ
          }, Tq, Kq), (0, LQ.i)(null, null, mw, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_emissiveFresnelParameters" in QQ,
              get: QQ => QQ._emissiveFresnelParameters,
              set: (QQ, FQ) => {
                QQ._emissiveFresnelParameters = FQ
              }
            },
            metadata: FQ
          }, jq, aq), (0, LQ.i)(null, null, Hw, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useReflectionFresnelFromSpecular" in QQ,
              get: QQ => QQ._useReflectionFresnelFromSpecular,
              set: (QQ, FQ) => {
                QQ._useReflectionFresnelFromSpecular = FQ
              }
            },
            metadata: FQ
          }, Vq, hq), (0, LQ.i)(null, null, Yw, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_useGlossinessFromSpecularMapAlpha" in QQ,
              get: QQ => QQ._useGlossinessFromSpecularMapAlpha,
              set: (QQ, FQ) => {
                QQ._useGlossinessFromSpecularMapAlpha = FQ
              }
            },
            metadata: FQ
          }, nq, gq), (0, LQ.i)(null, null, Aw, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_maxSimultaneousLights" in QQ,
              get: QQ => QQ._maxSimultaneousLights,
              set: (QQ, FQ) => {
                QQ._maxSimultaneousLights = FQ
              }
            },
            metadata: FQ
          }, yq, Bq), (0, LQ.i)(null, null, ew, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_invertNormalMapX" in QQ,
              get: QQ => QQ._invertNormalMapX,
              set: (QQ, FQ) => {
                QQ._invertNormalMapX = FQ
              }
            },
            metadata: FQ
          }, Fo, wo), (0, LQ.i)(null, null, Gw, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_invertNormalMapY" in QQ,
              get: QQ => QQ._invertNormalMapY,
              set: (QQ, FQ) => {
                QQ._invertNormalMapY = FQ
              }
            },
            metadata: FQ
          }, oo, Do), (0, LQ.i)(null, null, Cw, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_twoSidedLighting" in QQ,
              get: QQ => QQ._twoSidedLighting,
              set: (QQ, FQ) => {
                QQ._twoSidedLighting = FQ
              }
            },
            metadata: FQ
          }, mo, uo), (0, LQ.i)(null, null, iw, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_applyDecalMapAfterDetailMap" in QQ,
              get: QQ => QQ._applyDecalMapAfterDetailMap,
              set: (QQ, FQ) => {
                QQ._applyDecalMapAfterDetailMap = FQ
              }
            },
            metadata: FQ
          }, Yo, xo), FQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: FQ
          })
        })(), QQ.ForceGLSL = !1, QQ._ShaderLoader = new CQ.b((() => [Promise.all([wQ.e(308), wQ.e(307)]).then((() => wQ(41271))), Promise.all([wQ.e(313), wQ.e(309), wQ.e(322), wQ.e(312)]).then((() => wQ(41453)))]), (() => [Promise.all([wQ.e(329), wQ.e(324)]).then((() => wQ(41607))), Promise.all([wQ.e(330), wQ.e(340), wQ.e(326)]).then((() => wQ(41795)))])), QQ
      })(),
      KQ = !1;

    function zQ() {
      KQ || (KQ = !0, (0, HQ.h)(), (0, OQ.e)("BABYLON.StandardMaterial", TQ), DQ.e.DefaultMaterialFactory = QQ => new TQ("default material", QQ))
    }
    Object.getOwnPropertyDescriptor(TQ.prototype, "decalMap") || Object.defineProperty(TQ.prototype, "decalMap", (0, sQ.e)("StandardMaterial", "decalMap"))
  },
  39803: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return class extends QQ {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    wQ.d(FQ, {
      d: () => LQ
    })
  },
  39790: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ
    });
    class LQ {
      constructor(QQ, FQ) {
        this._webGL = {
          load: QQ,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: FQ,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(QQ) {
        const FQ = 1 === QQ ? this._webGPU : this._webGL;
        return FQ.loaded ? void 0 : async () => {
          await this._loadAsync(FQ)
        }
      }
      async _loadAsync(QQ) {
        if (QQ.loaded) return;
        let FQ = QQ.loadPromise;
        const wQ = null === FQ;
        wQ && (FQ = Promise.all(QQ.load()), QQ.loadPromise = FQ);
        let LQ = !1;
        try {
          await FQ, LQ = !0
        } finally {
          wQ && this._completeLoad(QQ, LQ)
        }
      }
      _completeLoad(QQ, FQ) {
        QQ.loaded = FQ, QQ.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);