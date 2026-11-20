export const id = 253;
export const ids = [253];
export const modules = {
  40014: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT
    });
    var lT = cT(39631);

    function MT(TT) {
      return class extends TT {
        constructor() {
          super(...arguments);
          const TT = new.target;
          if (!TT[Symbol.metadata]) {
            const kT = Object.getPrototypeOf(TT)?.[Symbol.metadata];
            TT[Symbol.metadata] = kT ? Object.create(kT) : {}
          }
          const kT = (0, lT.d)(TT[Symbol.metadata]);
          kT._imageProcessingConfiguration || (kT._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(TT) {
          this._attachImageProcessingConfiguration(TT), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(TT) {
          TT !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !TT && this.NJ ? this._imageProcessingConfiguration = this.NJ().imageProcessingConfiguration : TT && (this._imageProcessingConfiguration = TT), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(TT) {
          this.imageProcessingConfiguration.colorCurvesEnabled = TT
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(TT) {
          this.imageProcessingConfiguration.colorGradingEnabled = TT
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(TT) {
          this._imageProcessingConfiguration.toneMappingEnabled = TT
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(TT) {
          this._imageProcessingConfiguration.exposure = TT
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(TT) {
          this._imageProcessingConfiguration.contrast = TT
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(TT) {
          this._imageProcessingConfiguration.colorGradingTexture = TT
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(TT) {
          this._imageProcessingConfiguration.colorCurves = TT
        }
      }
    }
  },
  39900: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => KT,
      g: () => MT
    });
    var lT = cT(39902);

    function MT(TT) {
      return class extends TT {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class KT extends lT.e {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  39975: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => AT
    });
    var lT = cT(39620),
      MT = cT(39908),
      KT = cT(39624),
      OT = cT(39959),
      yT = cT(39902),
      fT = cT(39980),
      xT = cT(39943);
    class IT extends yT.e {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let AT = (() => {
      var TT, kT, cT, yT;
      let AT, CT, jT, vT, tT, hT, NT = fT.b,
        QT = [],
        ST = [],
        DT = [],
        aT = [],
        FT = [],
        rT = [],
        PT = [],
        wT = [],
        mT = [],
        bT = [],
        zT = [],
        JT = [];
      return TT = class extends NT {
        get texture() {
          return (0, lT.b)(this, kT, "f")
        }
        set texture(TT) {
          (0, lT.d)(this, kT, TT, "f")
        }
        get normalBlendMethod() {
          return (0, lT.b)(this, cT, "f")
        }
        set normalBlendMethod(TT) {
          (0, lT.d)(this, cT, TT, "f")
        }
        get isEnabled() {
          return (0, lT.b)(this, yT, "f")
        }
        set isEnabled(TT) {
          (0, lT.d)(this, yT, TT, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(TT) {
          let KT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(TT, "DetailMap", 140, new IT, KT), this._texture = null, kT.set(this, (0, lT.h)(this, QT, void 0)), this.diffuseBlendLevel = ((0, lT.h)(this, ST), (0, lT.h)(this, DT, 1)), this.roughnessBlendLevel = ((0, lT.h)(this, aT), (0, lT.h)(this, FT, 1)), this.bumpLevel = ((0, lT.h)(this, rT), (0, lT.h)(this, PT, 1)), this._normalBlendMethod = ((0, lT.h)(this, wT), MT.e.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), cT.set(this, (0, lT.h)(this, mT, void 0)), this._isEnabled = ((0, lT.h)(this, bT), !1), yT.set(this, (0, lT.h)(this, zT, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, lT.h)(this, JT), this._internalMarkAllSubMeshesAsTexturesDirty = TT._dirtyCallbacks[1]
        }
        isReadyForSubMesh(TT, kT, cT) {
          return !this._isEnabled || !(TT._areTexturesDirty && kT.texturesEnabled && cT.getCaps().standardDerivatives && this._texture && OT.b.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(TT, kT) {
          if (this._isEnabled) {
            TT.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const cT = kT.Dv();
            TT._areTexturesDirty && (cT.getCaps().standardDerivatives && this._texture && OT.b.DetailTextureEnabled && this._isEnabled ? ((0, xT.V)(this._texture, TT, "DETAIL"), TT.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : TT.DETAIL = !1)
          } else TT.DETAIL = !1
        }
        bindForSubMesh(TT, kT) {
          if (!this._isEnabled) return;
          const cT = this._material.isFrozen;
          TT.useUbo && cT && TT.isSync || this._texture && OT.b.DetailTextureEnabled && (TT.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, xT.v)(this._texture, TT, "detail")), kT.texturesEnabled && this._texture && OT.b.DetailTextureEnabled && TT.setTexture("detailSampler", this._texture)
        }
        hasTexture(TT) {
          return this._texture === TT
        }
        getActiveTextures(TT) {
          this._texture && TT.push(this._texture)
        }
        getAnimatables(TT) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && TT.push(this._texture)
        }
        dispose(TT) {
          TT && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(TT) {
          TT.push("detailSampler")
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
      }, kT = new WeakMap, cT = new WeakMap, yT = new WeakMap, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(NT[Symbol.metadata] ?? null) : void 0;
        AT = [(0, KT.A)("detailTexture"), (0, KT.c)("_markAllSubMeshesAsTexturesDirty")], CT = [(0, KT.J)()], jT = [(0, KT.J)()], vT = [(0, KT.J)()], tT = [(0, KT.J)(), (0, KT.c)("_markAllSubMeshesAsTexturesDirty")], hT = [(0, KT.J)(), (0, KT.c)("_markAllSubMeshesAsTexturesDirty")], (0, lT.e)(TT, null, AT, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: TT => "texture" in TT,
            get: TT => TT.texture,
            set: (TT, kT) => {
              TT.texture = kT
            }
          },
          metadata: kT
        }, QT, ST), (0, lT.e)(TT, null, tT, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: TT => "normalBlendMethod" in TT,
            get: TT => TT.normalBlendMethod,
            set: (TT, kT) => {
              TT.normalBlendMethod = kT
            }
          },
          metadata: kT
        }, mT, bT), (0, lT.e)(TT, null, hT, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, kT) => {
              TT.isEnabled = kT
            }
          },
          metadata: kT
        }, zT, JT), (0, lT.e)(null, null, CT, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: TT => "diffuseBlendLevel" in TT,
            get: TT => TT.diffuseBlendLevel,
            set: (TT, kT) => {
              TT.diffuseBlendLevel = kT
            }
          },
          metadata: kT
        }, DT, aT), (0, lT.e)(null, null, jT, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: TT => "roughnessBlendLevel" in TT,
            get: TT => TT.roughnessBlendLevel,
            set: (TT, kT) => {
              TT.roughnessBlendLevel = kT
            }
          },
          metadata: kT
        }, FT, rT), (0, lT.e)(null, null, vT, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: TT => "bumpLevel" in TT,
            get: TT => TT.bumpLevel,
            set: (TT, kT) => {
              TT.bumpLevel = kT
            }
          },
          metadata: kT
        }, PT, wT), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT
    })()
  },
  39902: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT
    });
    class lT {
      constructor(TT) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = TT, TT)
          for (const kT in TT) Object.prototype.hasOwnProperty.call(TT, kT) && this._setDefaultValue(kT)
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
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || TT, this._isDirty = !0
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
        for (const TT of Object.keys(this)) "_" !== TT[0] && this._keys.push(TT);
        if (this._externalProperties)
          for (const TT in this._externalProperties) - 1 === this._keys.indexOf(TT) && this._keys.push(TT)
      }
      isEqual(TT) {
        if (this._keys.length !== TT._keys.length) return !1;
        for (let kT = 0; kT < this._keys.length; kT++) {
          const cT = this._keys[kT];
          if (this[cT] !== TT[cT]) return !1
        }
        return !0
      }
      cloneTo(TT) {
        this._keys.length !== TT._keys.length && (TT._keys = this._keys.slice(0));
        for (let kT = 0; kT < this._keys.length; kT++) {
          const cT = this._keys[kT];
          TT[cT] = this[cT]
        }
      }
      reset() {
        for (const TT of this._keys) this._setDefaultValue(TT)
      }
      _setDefaultValue(TT) {
        const kT = this._externalProperties?.[TT]?.type ?? typeof this[TT],
          cT = this._externalProperties?.[TT]?.default;
        switch (kT) {
          case "number":
            this[TT] = cT ?? 0;
            break;
          case "string":
            this[TT] = cT ?? "";
            break;
          default:
            this[TT] = cT ?? !1
        }
      }
      toString() {
        let TT = "";
        for (let kT = 0; kT < this._keys.length; kT++) {
          const cT = this._keys[kT],
            lT = this[cT];
          switch (typeof lT) {
            case "number":
            case "string":
              TT += "#define " + cT + " " + lT + "\n";
              break;
            default:
              lT && (TT += "#define " + cT + "\n")
          }
        }
        return TT
      }
    }
  },
  39997: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT,
      h: () => OT,
      i: () => KT
    });
    var lT, MT = cT(36892);

    function KT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const lT = kT(TT);
      if (!Number.isInteger(lT) || lT < 0 || lT > cT) throw new Error(`Invalid geometry object ID ${lT} for mesh "${TT.name}". Object IDs must be integers between 0 and 0x${cT.toString(16).toUpperCase()}.`);
      return lT
    }

    function OT(TT, kT) {
      const cT = kT(TT);
      if (!Number.isInteger(cT) || cT < 0 || cT > 255 || 0 !== cT && 0 === (63 & cT)) throw new Error(`Invalid geometry mesh-blending tag ${cT} for mesh "${TT.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return cT
    }! function(TT) {
      TT[TT.Zero = 0] = "Zero", TT[TT.One = 1] = "One", TT[TT.MaxViewZ = 2] = "MaxViewZ", TT[TT.NoClear = 3] = "NoClear"
    }(lT || (lT = {}));
    class yT {
      static CreateConfiguration(TT) {
        return yT._Configurations[TT] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: MT.d.Zero(),
          currentViewProjection: MT.d.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, yT._Configurations[TT]
      }
      static DeleteConfiguration(TT) {
        delete yT._Configurations[TT]
      }
      static GetConfiguration(TT) {
        return yT._Configurations[TT]
      }
      static _PrepareConfiguration(TT, kT, cT) {
        const lT = yT._Configurations[TT];
        lT._attachments = kT, lT._colorAttachments = cT, lT._mrtCount = kT.length;
        let MT = "#define PREPASS\n";
        for (const KT of yT.GeometryTextureDescriptions) {
          const TT = lT.defines[KT.defineIndex];
          void 0 !== TT && (MT += `#define ${KT.define}\n#define ${KT.defineIndex} ${TT}\n`)
        }
        lT.objectIdIsRedFormat && (MT += "#define PREPASS_OBJECT_ID_R8\n"), lT._defines = MT + `#define SCENE_MRT_COUNT ${kT.length}\n`
      }
      static _PrepareStringDefines(TT, kT) {
        const cT = yT._Configurations[TT];
        return !!cT?._defines && (kT.push(cT._defines), !0)
      }
      static _BindAttachmentsForEffect(TT, kT) {
        const cT = yT._Configurations[TT.currentRenderPassId];
        return !cT?._attachments || (TT.bindAttachments(kT._multiTarget ? cT._attachments : cT._colorAttachments), kT._multiTarget || void 0 !== cT.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(TT) {
        const kT = yT._Configurations[TT.currentRenderPassId];
        kT?._colorAttachments && TT.bindAttachments(kT._colorAttachments)
      }
      static _BindColorAttachments(TT) {
        const kT = yT._Configurations[TT.currentRenderPassId];
        return !kT?._colorAttachments || (TT.bindAttachments(kT._colorAttachments), void 0 !== kT.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(TT) {
        const kT = yT._Configurations[TT.currentRenderPassId];
        return !kT?._colorAttachments || void 0 !== kT.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(TT, kT) {
        const cT = yT._Configurations[TT.currentRenderPassId];
        if (!cT) return;
        const lT = TT.getAlphaMode(),
          MT = void 0 === cT.defines.PREPASS_COLOR_INDEX || 2 === lT || 1 === lT || 17 === lT;
        kT.setFloat("geometryZeroAlphaDiscard", MT ? 1 : 0)
      }
      static AddUniformsAndSamplers(TT, kT) {
        TT.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(TT, kT) {
        for (const cT of kT)
          if (cT.kF)
            for (const kT of cT.kF) kT._removeDrawWrapper(TT)
      }
      static PrepareDefines(TT, kT, cT) {
        if (!cT._arePrePassDirty) return;
        const lT = yT._Configurations[TT];
        if (!lT) return;
        cT.PREPASS = !0;
        let MT = 0;
        for (let KT = 0; KT < yT.GeometryTextureDescriptions.length; KT++) {
          const TT = yT.GeometryTextureDescriptions[KT],
            kT = TT.define,
            OT = TT.defineIndex,
            fT = lT.defines[OT];
          void 0 !== fT ? (cT[kT] = !0, cT[OT] = fT, MT++) : (cT[kT] = !1, delete cT[OT])
        }
        cT.PREPASS_OBJECT_ID_R8 = lT.objectIdIsRedFormat, cT.SCENE_MRT_COUNT = lT._mrtCount ?? MT, cT.BONES_VELOCITY_ENABLED = kT.useBones && kT.computeBonesUsingShaders && kT.skeleton && !kT.skeleton.isUsingTextureForMatrices && -1 === lT.excludedSkinnedMesh.indexOf(kT)
      }
      static Bind(TT, kT, cT, lT, MT) {
        const fT = yT._Configurations[TT];
        if (!fT) return;
        const xT = cT.NJ(),
          IT = xT.Dv();
        if (fT.reverseCulling && IT.setStateCullFaceType(xT._mirroredCameraPosition ? MT.cullBackFaces : !MT.cullBackFaces), void 0 !== fT.defines.PREPASS_OBJECT_ID_INDEX) {
          const TT = fT.objectIdIsRedFormat ? 255 : 16777215;
          let lT = cT.uniqueId;
          if (fT.objectIdProvider) lT = KT(cT, fT.objectIdProvider, TT);
          else if (lT > TT) throw new Error(`Invalid geometry object ID ${lT} for mesh "${cT.name}". Object IDs must be integers between 0 and 0x${TT.toString(16).toUpperCase()}.`);
          kT.setFloat("objectId", lT)
        }
        if (void 0 !== fT.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const TT = fT.meshBlendTagProvider ? OT(cT, fT.meshBlendTagProvider) : cT.meshBlendingTag;
          kT.setInt("meshBlendTag", TT)
        }
        if (void 0 !== fT.defines.PREPASS_VELOCITY_INDEX || void 0 !== fT.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const TT = fT._currentWorldMatrices ?? (fT._currentWorldMatrices = {}),
            MT = fT._worldMatrixFrameIds ?? (fT._worldMatrixFrameIds = {});
          if (TT[cT.uniqueId] || (TT[cT.uniqueId] = lT.clone(), fT.previousWorldMatrices[cT.uniqueId] = lT.clone()), MT[cT.uniqueId] !== IT.frameId && (fT.previousWorldMatrices[cT.uniqueId].UkT(TT[cT.uniqueId]), MT[cT.uniqueId] = IT.frameId), TT[cT.uniqueId].UkT(lT), -1 === fT.lastUpdateFrameId ? (fT.lastUpdateFrameId = IT.frameId, fT.previousViewProjection.UkT(xT.getTransformMatrix()), fT.currentViewProjection.UkT(xT.getTransformMatrix())) : fT.currentViewProjection.updateFlag !== xT.getTransformMatrix().updateFlag ? (fT.lastUpdateFrameId = IT.frameId, fT.previousViewProjection.UkT(fT.currentViewProjection), fT.currentViewProjection.UkT(xT.getTransformMatrix())) : fT.lastUpdateFrameId !== IT.frameId && (fT.lastUpdateFrameId = IT.frameId, fT.previousViewProjection.UkT(fT.currentViewProjection)), kT.setMatrix("previousWorld", fT.previousWorldMatrices[cT.uniqueId]), kT.setMatrix("previousViewProjection", fT.previousViewProjection), cT.useBones && cT.computeBonesUsingShaders && cT.skeleton) {
            const TT = cT.skeleton;
            if (!TT.isUsingTextureForMatrices || -1 === kT.getUniformIndex("boneTextureInfo")) {
              const lT = TT.getTransformMatrices(cT);
              lT && (fT.previousBones[cT.uniqueId] || (fT.previousBones[cT.uniqueId] = lT.slice()), kT.setMatrices("mPreviousBones", fT.previousBones[cT.uniqueId]), fT.previousBones[cT.uniqueId].set(lT))
            }
          }
        }
      }
    }
    yT.GeometryTextureDescriptions = [{
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
    }], yT._Configurations = {}
  },
  39980: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => CT,
      c: () => vT
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(39509),
      OT = cT(39474);
    const yT = new RegExp("^([gimus]+)!");
    class fT {
      constructor(TT) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = TT, this._scene = TT.NJ(), this._engine = this._scene.Dv()
      }
      _addPlugin(TT) {
        for (let lT = 0; lT < this._plugins.length; ++lT)
          if (this._plugins[lT].name === TT.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !TT.isCompatible(this._material.shaderLanguage)) throw `The plugin "${TT.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const kT = TT.getClassName();
        fT._MaterialPluginClassToMainDefine[kT] || (fT._MaterialPluginClassToMainDefine[kT] = "MATERIALPLUGIN_" + ++fT._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (TT, kT) => this._handlePluginEvent(TT, kT), this._plugins.push(TT), this._plugins.sort(((TT, kT) => TT.priority - kT.priority)), this._codeInjectionPoints = {};
        const cT = {};
        cT[fT._MaterialPluginClassToMainDefine[kT]] = {
          type: "boolean",
          default: !0
        };
        for (const lT of this._plugins) lT.collectDefines(cT), this._collectPointNames("vertex", lT.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", lT.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = cT, !0
      }
      _activatePlugin(TT) {
        -1 === this._activePlugins.indexOf(TT) && (this._activePlugins.push(TT), this._activePlugins.sort(((TT, kT) => TT.priority - kT.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), TT.registerForExtraEvents && (this._activePluginsForExtraEvents.push(TT), this._activePluginsForExtraEvents.sort(((TT, kT) => TT.priority - kT.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(TT) {
        for (let kT = 0; kT < this._plugins.length; ++kT)
          if (this._plugins[kT].name === TT) return this._plugins[kT];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(TT) {
        let kT = !0;
        for (const cT of this._activePlugins) kT = kT && cT.isReadyForSubMesh(TT.defines, this._scene, this._engine, TT.subMesh);
        TT.isReadyForSubMesh = kT
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(TT) {
        for (const kT of this._activePlugins) kT.prepareDefinesBeforeAttributes(TT.defines, this._scene, TT.mesh)
      }
      _handlePluginEventPrepareDefines(TT) {
        for (const kT of this._activePlugins) kT.prepareDefines(TT.defines, this._scene, TT.mesh)
      }
      _handlePluginEventHardBindForSubMesh(TT) {
        for (const kT of this._activePluginsForExtraEvents) kT.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, TT.subMesh)
      }
      _handlePluginEventBindForSubMesh(TT) {
        for (const kT of this._activePlugins) kT.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, TT.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(TT) {
        let kT = !1;
        for (const cT of this._activePluginsForExtraEvents)
          if (kT = cT.hasRenderTargetTextures(), kT) break;
        TT.hasRenderTargetTextures = kT
      }
      _handlePluginEventFillRenderTargetTextures(TT) {
        for (const kT of this._activePluginsForExtraEvents) kT.fillRenderTargetTextures(TT.renderTargets)
      }
      _handlePluginEvent(TT, kT) {
        switch (TT) {
          case 512: {
            const TT = kT;
            for (const kT of this._activePlugins) kT.getActiveTextures(TT.activeTextures);
            break
          }
          case 256: {
            const TT = kT;
            for (const kT of this._activePlugins) kT.getAnimatables(TT.animatables);
            break
          }
          case 1024: {
            const TT = kT;
            let cT = !1;
            for (const kT of this._activePlugins)
              if (cT = kT.hasTexture(TT.texture), cT) break;
            TT.hasTexture = cT;
            break
          }
          case 2: {
            const TT = kT;
            for (const kT of this._plugins) kT.dispose(TT.forceDisposeTextures);
            break
          }
          case 4:
            kT.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const TT = kT;
            for (const kT of this._activePlugins) TT.fallbackRank = kT.addFallbacks(TT.defines, TT.fallbacks, TT.fallbackRank), kT.getAttributes(TT.attributes, this._scene, TT.mesh);
            this._uniformList.length > 0 && TT.uniforms.push(...this._uniformList), this._samplerList.length > 0 && TT.samplers.push(...this._samplerList), this._uboList.length > 0 && TT.uniformBuffersNames.push(...this._uboList), TT.customCode = this._injectCustomCode(TT, TT.customCode);
            break
          }
          case 8: {
            const TT = kT;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const cT = 1 === this._material.shaderLanguage;
            for (const kT of this._plugins) {
              const lT = kT.getUniforms(this._material.shaderLanguage);
              if (lT) {
                if (lT.ubo)
                  for (const kT of lT.ubo) {
                    if (kT.size && kT.type) {
                      const lT = kT.arraySize ?? 0;
                      if (TT.ubo.addUniform(kT.name, kT.size, lT), cT) {
                        let TT;
                        switch (kT.type) {
                          case "mat4":
                            TT = "mat4x4f";
                            break;
                          case "float":
                            TT = "f32";
                            break;
                          default:
                            TT = `${kT.type}f`
                        }
                        this._uboDeclaration += lT > 0 ? `uniform ${kT.name}: array<${TT}, ${lT}>;\n` : `uniform ${kT.name}: ${TT};\n`
                      } else this._uboDeclaration += `${kT.type} ${kT.name}${lT>0?`[${lT}]`:""};\n`
                    }
                    this._uniformList.push(kT.name)
                  }
                lT.vertex && (this._vertexDeclaration += lT.vertex + "\n"), lT.fragment && (this._fragmentDeclaration += lT.fragment + "\n"), lT.externalUniforms && this._uniformList.push(...lT.externalUniforms)
              }
              kT.getSamplers(this._samplerList), kT.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(TT, kT) {
        if (kT)
          for (const cT in kT) this._codeInjectionPoints[TT] || (this._codeInjectionPoints[TT] = {}), this._codeInjectionPoints[TT][cT] = !0
      }
      _injectCustomCode(TT, kT) {
        return (cT, lT) => {
          kT && (lT = kT(cT, lT)), this._uboDeclaration && (lT = lT.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (lT = lT.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (lT = lT.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const MT = this._codeInjectionPoints?.[cT];
          if (!MT) return lT;
          let fT = null;
          for (let kT in MT) {
            let MT = "";
            for (const lT of this._activePlugins) {
              const yT = this._material.shaderLanguage;
              let xT = lT.getCustomCode(cT, yT)?.[kT];
              xT && (lT.resolveIncludes && (null === fT && (fT = {
                defines: [],
                indexParameters: TT.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: OT.d.GetShadersRepository(yT),
                includesShadersStore: OT.d.GetIncludesShadersStore(yT),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                QcT: this._engine.QcT,
                processCodeAfterIncludes: void 0
              }), fT.isFragment = "fragment" === cT, (0, KT.g)(xT, fT, (TT => xT = TT))), MT += xT + "\n")
            }
            if (MT.length > 0)
              if ("!" === kT.charAt(0)) {
                kT = kT.substring(1);
                let TT = "g";
                if ("!" === kT.charAt(0)) TT = "", kT = kT.substring(1);
                else {
                  const cT = yT.exec(kT);
                  cT && cT.length >= 2 && (TT = cT[1], kT = kT.substring(TT.length + 1))
                }
                TT.indexOf("g") < 0 && (TT += "g");
                const cT = new RegExp(kT, TT);
                let KT = cT.exec(lT);
                for (; null !== KT;) {
                  const {
                    index: TT
                  } = KT, kT = xT(MT, KT);
                  lT = lT.substring(0, TT) + kT + lT.substring(TT + KT[0].length), cT.lastIndex = TT + kT.length, KT = cT.exec(lT)
                }
              } else {
                const TT = "#define " + kT;
                lT = lT.replace(TT, "\n" + MT + "\n" + TT)
              }
          }
          return lT
        }
      }
    }
    fT._MaterialPluginClassToMainDefine = {}, fT._MaterialPluginCounter = 0;

    function xT(TT, kT) {
      return TT.replace(/\$(\d+)/g, ((TT, cT) => {
        const lT = Number(cT);
        return lT < kT.length ? kT[lT] : ""
      }))
    }
    var IT = cT(39645),
      AT = cT(36949);
    let CT = (() => {
        var TT;
        let kT, cT, KT, OT, yT = [],
          xT = [],
          AT = [],
          CT = [],
          jT = [],
          vT = [],
          tT = [],
          hT = [];
        return TT = class {
          isCompatible(TT) {
            return 0 === TT
          }
          _enable(TT) {
            TT && this._pluginManager._activatePlugin(this)
          }
          constructor(TT, kT, cT, MT) {
            let KT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              OT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              IT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, lT.h)(this, yT, void 0), this.priority = ((0, lT.h)(this, xT), (0, lT.h)(this, AT, 500)), this.resolveIncludes = ((0, lT.h)(this, CT), (0, lT.h)(this, jT, !1)), this.registerForExtraEvents = ((0, lT.h)(this, vT), (0, lT.h)(this, tT, !1)), this.doNotSerialize = ((0, lT.h)(this, hT), !1), this._material = TT, this.name = kT, this.priority = cT, this.resolveIncludes = IT, TT.pluginManager || (TT.pluginManager = new fT(TT), TT.QJ.add((() => {
              TT.pluginManager = void 0
            }))), this._pluginDefineNames = MT, this._pluginManager = TT.pluginManager, KT && this._pluginManager._addPlugin(this), OT && this._enable(!0), this.markAllDefinesAsDirty = TT._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(TT, kT, cT, lT) {
            return !0
          }
          hardBindForSubMesh(TT, kT, cT, lT) {}
          bindForSubMesh(TT, kT, cT, lT) {}
          dispose(TT) {}
          getCustomCode(TT) {
            return null
          }
          collectDefines(TT) {
            if (this._pluginDefineNames)
              for (const kT of Object.keys(this._pluginDefineNames)) {
                if ("_" === kT[0]) continue;
                const cT = typeof this._pluginDefineNames[kT];
                TT[kT] = {
                  type: "number" === cT ? "number" : "string" === cT ? "string" : "boolean" === cT ? "boolean" : "object",
                  default: this._pluginDefineNames[kT]
                }
              }
          }
          prepareDefinesBeforeAttributes(TT, kT, cT) {}
          prepareDefines(TT, kT, cT) {}
          hasTexture(TT) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(TT) {}
          getActiveTextures(TT) {}
          getAnimatables(TT) {}
          addFallbacks(TT, kT, cT) {
            return cT
          }
          getSamplers(TT) {}
          getAttributes(TT, kT, cT) {}
          getUniformBuffersNames(TT) {}
          getUniforms() {
            return {}
          }
          copyTo(TT) {
            IT.d.Clone((() => TT), this)
          }
          serialize() {
            return IT.d.Serialize(this)
          }
          parse(TT, kT, cT) {
            IT.d.Parse((() => this), TT, kT, cT)
          }
        }, (() => {
          const fT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          kT = [(0, MT.J)()], cT = [(0, MT.J)()], KT = [(0, MT.J)()], OT = [(0, MT.J)()], (0, lT.e)(null, null, kT, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: TT => "name" in TT,
              get: TT => TT.name,
              set: (TT, kT) => {
                TT.name = kT
              }
            },
            metadata: fT
          }, yT, xT), (0, lT.e)(null, null, cT, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: TT => "priority" in TT,
              get: TT => TT.priority,
              set: (TT, kT) => {
                TT.priority = kT
              }
            },
            metadata: fT
          }, AT, CT), (0, lT.e)(null, null, KT, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: TT => "resolveIncludes" in TT,
              get: TT => TT.resolveIncludes,
              set: (TT, kT) => {
                TT.resolveIncludes = kT
              }
            },
            metadata: fT
          }, jT, vT), (0, lT.e)(null, null, OT, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: TT => "registerForExtraEvents" in TT,
              get: TT => TT.registerForExtraEvents,
              set: (TT, kT) => {
                TT.registerForExtraEvents = kT
              }
            },
            metadata: fT
          }, tT, hT), fT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fT
          })
        })(), TT
      })(),
      jT = !1;

    function vT() {
      jT || (jT = !0, (0, AT.g)("BABYLON.MaterialPluginBase", CT))
    }
  },
  39898: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT
    });
    class lT {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(TT) {
        TT.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(TT) {}
      bindForSubMesh(TT, kT, cT, lT, MT) {
        if (kT.prePassRenderer && kT.prePassRenderer.enabled && kT.prePassRenderer.currentRTisSceneRT && (-1 !== kT.prePassRenderer.getIndex(2) || -1 !== kT.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[cT.uniqueId] || (this.previousWorldMatrices[cT.uniqueId] = lT.clone()), this.previousViewProjection || (this.previousViewProjection = kT.getTransformMatrix().clone(), this.currentViewProjection = kT.getTransformMatrix().clone());
          const MT = kT.Dv();
          this.currentViewProjection.updateFlag !== kT.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = MT.frameId, this.previousViewProjection.UkT(this.currentViewProjection), this.currentViewProjection.UkT(kT.getTransformMatrix())) : this._lastUpdateFrameId !== MT.frameId && (this._lastUpdateFrameId = MT.frameId, this.previousViewProjection.UkT(this.currentViewProjection)), TT.setMatrix("previousWorld", this.previousWorldMatrices[cT.uniqueId]), TT.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[cT.uniqueId] = lT.clone()
        }
      }
    }
  },
  40007: (TT, kT, cT) => {
    function lT(TT) {
      return class extends TT {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    cT.d(kT, {
      b: () => lT
    })
  },
  39889: (TT, kT, cT) => {
    cT.d(kT, {
      StandardMaterial: () => lT.f
    });
    var lT = cT(39896);
    (0, lT.d)()
  },
  39896: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => ET,
      f: () => GT
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(39741),
      OT = cT(39720),
      yT = cT(37093),
      fT = cT(39782),
      xT = cT(39898),
      IT = cT(39900),
      AT = cT(39746),
      CT = cT(39908),
      jT = cT(39902),
      vT = cT(39967),
      tT = cT(39959),
      hT = cT(39970),
      NT = cT(39975),
      QT = cT(39951),
      ST = cT(39985),
      DT = cT(39943),
      aT = cT(39645),
      FT = cT(39989),
      rT = cT(39997),
      PT = cT(40004),
      wT = cT(40007),
      mT = cT(40014),
      bT = cT(36949),
      zT = cT(39500);
    const JT = {
      effect: null,
      subMesh: null
    };
    class oT extends((0, wT.b)((0, PT.c)(jT.e))) {}
    class HT extends((0, IT.g)(oT)) {
      constructor(TT) {
        super(TT), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class eT extends((0, mT.c)(vT.e)) {}
    let GT = (() => {
        var TT, kT, IT, jT, PT, wT, mT, bT, zT, oT, GT, VT, ET, ZT, uT, XT, dT, LT, RT, gT, UT, YT, BT, WT, nT, pT, iT, qT, sT, Tk, kk, ck, lk;
        let Mk, Kk, Ok, yk, fk, xk, Ik, Ak, Ck, jk, vk, tk, hk, Nk, Qk, Sk, Dk, ak, Fk, rk, Pk, wk, mk, bk, zk, Jk, Hk, ek, Gk, Vk, Ek, Zk, uk, Xk, dk, Lk, Rk, gk, Uk, Yk, Bk, Wk, nk, pk, ik, qk, sk, Tc, kc, cc, lc, Mc, Kc, Oc, yc, fc, xc, Ic, Ac, Cc, jc, vc, tc, hc, Nc, Qc, Sc, Dc, ac, Fc, rc, Pc, wc, mc = eT,
          bc = [],
          zc = [],
          Jc = [],
          oc = [],
          Hc = [],
          ec = [],
          Gc = [],
          Vc = [],
          Ec = [],
          Zc = [],
          uc = [],
          Xc = [],
          dc = [],
          Lc = [],
          Rc = [],
          gc = [],
          Uc = [],
          Yc = [],
          Bc = [],
          Wc = [],
          nc = [],
          pc = [],
          ic = [],
          qc = [],
          sc = [],
          Tl = [],
          kl = [],
          cl = [],
          ll = [],
          Ml = [],
          Kl = [],
          Ol = [],
          yl = [],
          fl = [],
          xl = [],
          Il = [],
          Al = [],
          Cl = [],
          jl = [],
          vl = [],
          tl = [],
          hl = [],
          Nl = [],
          Ql = [],
          Sl = [],
          Dl = [],
          al = [],
          Fl = [],
          rl = [],
          Pl = [],
          wl = [],
          ml = [],
          bl = [],
          zl = [],
          Jl = [],
          ol = [],
          Hl = [],
          el = [],
          Gl = [],
          Vl = [],
          El = [],
          Zl = [],
          ul = [],
          Xl = [],
          dl = [],
          Ll = [],
          Rl = [],
          gl = [],
          Ul = [],
          Yl = [],
          Bl = [],
          Wl = [],
          nl = [],
          pl = [],
          il = [],
          ql = [],
          sl = [],
          TM = [],
          kM = [],
          cM = [],
          lM = [],
          MM = [],
          KM = [],
          OM = [],
          yM = [],
          fM = [],
          xM = [],
          IM = [],
          AM = [],
          CM = [],
          jM = [],
          vM = [],
          tM = [],
          hM = [],
          NM = [],
          QM = [],
          SM = [],
          DM = [],
          aM = [],
          FM = [],
          rM = [],
          PM = [],
          wM = [],
          mM = [],
          bM = [],
          zM = [],
          JM = [],
          oM = [],
          HM = [],
          eM = [],
          GM = [],
          VM = [],
          EM = [],
          ZM = [],
          uM = [],
          XM = [],
          dM = [],
          LM = [],
          RM = [],
          gM = [],
          UM = [],
          YM = [],
          BM = [],
          WM = [],
          nM = [],
          pM = [],
          iM = [],
          qM = [],
          sM = [],
          TK = [],
          kK = [],
          cK = [],
          lK = [],
          MK = [],
          KK = [],
          OK = [],
          yK = [],
          fK = [],
          xK = [],
          IK = [],
          AK = [],
          CK = [],
          jK = [],
          vK = [],
          tK = [],
          hK = [];
        return TT = class extends mc {
          get diffuseTexture() {
            return (0, lT.b)(this, kT, "f")
          }
          set diffuseTexture(TT) {
            (0, lT.d)(this, kT, TT, "f")
          }
          get ambientTexture() {
            return (0, lT.b)(this, IT, "f")
          }
          set ambientTexture(TT) {
            (0, lT.d)(this, IT, TT, "f")
          }
          get opacityTexture() {
            return (0, lT.b)(this, jT, "f")
          }
          set opacityTexture(TT) {
            (0, lT.d)(this, jT, TT, "f")
          }
          get reflectionTexture() {
            return (0, lT.b)(this, PT, "f")
          }
          set reflectionTexture(TT) {
            (0, lT.d)(this, PT, TT, "f")
          }
          get emissiveTexture() {
            return (0, lT.b)(this, wT, "f")
          }
          set emissiveTexture(TT) {
            (0, lT.d)(this, wT, TT, "f")
          }
          get specularTexture() {
            return (0, lT.b)(this, mT, "f")
          }
          set specularTexture(TT) {
            (0, lT.d)(this, mT, TT, "f")
          }
          get bumpTexture() {
            return (0, lT.b)(this, bT, "f")
          }
          set bumpTexture(TT) {
            (0, lT.d)(this, bT, TT, "f")
          }
          get lightmapTexture() {
            return (0, lT.b)(this, zT, "f")
          }
          set lightmapTexture(TT) {
            (0, lT.d)(this, zT, TT, "f")
          }
          get refractionTexture() {
            return (0, lT.b)(this, oT, "f")
          }
          set refractionTexture(TT) {
            (0, lT.d)(this, oT, TT, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, lT.b)(this, GT, "f")
          }
          set useAlphaFromDiffuseTexture(TT) {
            (0, lT.d)(this, GT, TT, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, lT.b)(this, VT, "f")
          }
          set useEmissiveAsIllumination(TT) {
            (0, lT.d)(this, VT, TT, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, lT.b)(this, ET, "f")
          }
          set linkEmissiveWithDiffuse(TT) {
            (0, lT.d)(this, ET, TT, "f")
          }
          get useSpecularOverAlpha() {
            return (0, lT.b)(this, ZT, "f")
          }
          set useSpecularOverAlpha(TT) {
            (0, lT.d)(this, ZT, TT, "f")
          }
          get useReflectionOverAlpha() {
            return (0, lT.b)(this, uT, "f")
          }
          set useReflectionOverAlpha(TT) {
            (0, lT.d)(this, uT, TT, "f")
          }
          get disableLighting() {
            return (0, lT.b)(this, XT, "f")
          }
          set disableLighting(TT) {
            (0, lT.d)(this, XT, TT, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, lT.b)(this, dT, "f")
          }
          set useObjectSpaceNormalMap(TT) {
            (0, lT.d)(this, dT, TT, "f")
          }
          get useParallax() {
            return (0, lT.b)(this, LT, "f")
          }
          set useParallax(TT) {
            (0, lT.d)(this, LT, TT, "f")
          }
          get useParallaxOcclusion() {
            return (0, lT.b)(this, RT, "f")
          }
          set useParallaxOcclusion(TT) {
            (0, lT.d)(this, RT, TT, "f")
          }
          get roughness() {
            return (0, lT.b)(this, gT, "f")
          }
          set roughness(TT) {
            (0, lT.d)(this, gT, TT, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, lT.b)(this, UT, "f")
          }
          set useLightmapAsShadowmap(TT) {
            (0, lT.d)(this, UT, TT, "f")
          }
          get diffuseFresnelParameters() {
            return (0, lT.b)(this, YT, "f")
          }
          set diffuseFresnelParameters(TT) {
            (0, lT.d)(this, YT, TT, "f")
          }
          get opacityFresnelParameters() {
            return (0, lT.b)(this, BT, "f")
          }
          set opacityFresnelParameters(TT) {
            (0, lT.d)(this, BT, TT, "f")
          }
          get reflectionFresnelParameters() {
            return (0, lT.b)(this, WT, "f")
          }
          set reflectionFresnelParameters(TT) {
            (0, lT.d)(this, WT, TT, "f")
          }
          get refractionFresnelParameters() {
            return (0, lT.b)(this, nT, "f")
          }
          set refractionFresnelParameters(TT) {
            (0, lT.d)(this, nT, TT, "f")
          }
          get emissiveFresnelParameters() {
            return (0, lT.b)(this, pT, "f")
          }
          set emissiveFresnelParameters(TT) {
            (0, lT.d)(this, pT, TT, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, lT.b)(this, iT, "f")
          }
          set useReflectionFresnelFromSpecular(TT) {
            (0, lT.d)(this, iT, TT, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, lT.b)(this, qT, "f")
          }
          set useGlossinessFromSpecularMapAlpha(TT) {
            (0, lT.d)(this, qT, TT, "f")
          }
          get maxSimultaneousLights() {
            return (0, lT.b)(this, sT, "f")
          }
          set maxSimultaneousLights(TT) {
            (0, lT.d)(this, sT, TT, "f")
          }
          get invertNormalMapX() {
            return (0, lT.b)(this, Tk, "f")
          }
          set invertNormalMapX(TT) {
            (0, lT.d)(this, Tk, TT, "f")
          }
          get invertNormalMapY() {
            return (0, lT.b)(this, kk, "f")
          }
          set invertNormalMapY(TT) {
            (0, lT.d)(this, kk, TT, "f")
          }
          get twoSidedLighting() {
            return (0, lT.b)(this, ck, "f")
          }
          set twoSidedLighting(TT) {
            (0, lT.d)(this, ck, TT, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, lT.b)(this, lk, "f")
          }
          set applyDecalMapAfterDetailMap(TT) {
            (0, lT.d)(this, lk, TT, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(cT, MT) {
            super(cT, MT, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || TT.ForceGLSL), this._diffuseTexture = (0, lT.h)(this, bc, null), kT.set(this, ((0, lT.h)(this, zc), (0, lT.h)(this, Jc, void 0))), this._ambientTexture = ((0, lT.h)(this, oc), (0, lT.h)(this, Hc, null)), IT.set(this, ((0, lT.h)(this, ec), (0, lT.h)(this, Gc, void 0))), this._opacityTexture = ((0, lT.h)(this, Vc), (0, lT.h)(this, Ec, null)), jT.set(this, ((0, lT.h)(this, Zc), (0, lT.h)(this, uc, void 0))), this._reflectionTexture = ((0, lT.h)(this, Xc), (0, lT.h)(this, dc, null)), PT.set(this, ((0, lT.h)(this, Lc), (0, lT.h)(this, Rc, void 0))), this._emissiveTexture = ((0, lT.h)(this, gc), (0, lT.h)(this, Uc, null)), wT.set(this, ((0, lT.h)(this, Yc), (0, lT.h)(this, Bc, void 0))), this._specularTexture = ((0, lT.h)(this, Wc), (0, lT.h)(this, nc, null)), mT.set(this, ((0, lT.h)(this, pc), (0, lT.h)(this, ic, void 0))), this._bumpTexture = ((0, lT.h)(this, qc), (0, lT.h)(this, sc, null)), bT.set(this, ((0, lT.h)(this, Tl), (0, lT.h)(this, kl, void 0))), this._lightmapTexture = ((0, lT.h)(this, cl), (0, lT.h)(this, ll, null)), zT.set(this, ((0, lT.h)(this, Ml), (0, lT.h)(this, Kl, void 0))), this._refractionTexture = ((0, lT.h)(this, Ol), (0, lT.h)(this, yl, null)), oT.set(this, ((0, lT.h)(this, fl), (0, lT.h)(this, xl, void 0))), this.ambientColor = ((0, lT.h)(this, Il), (0, lT.h)(this, Al, new yT.c(0, 0, 0))), this.diffuseColor = ((0, lT.h)(this, Cl), (0, lT.h)(this, jl, new yT.c(1, 1, 1))), this.specularColor = ((0, lT.h)(this, vl), (0, lT.h)(this, tl, new yT.c(1, 1, 1))), this.emissiveColor = ((0, lT.h)(this, hl), (0, lT.h)(this, Nl, new yT.c(0, 0, 0))), this.specularPower = ((0, lT.h)(this, Ql), (0, lT.h)(this, Sl, 64)), this._useAlphaFromDiffuseTexture = ((0, lT.h)(this, Dl), (0, lT.h)(this, al, !1)), GT.set(this, ((0, lT.h)(this, Fl), (0, lT.h)(this, rl, void 0))), this._useEmissiveAsIllumination = ((0, lT.h)(this, Pl), (0, lT.h)(this, wl, !1)), VT.set(this, ((0, lT.h)(this, ml), (0, lT.h)(this, bl, void 0))), this._linkEmissiveWithDiffuse = ((0, lT.h)(this, zl), (0, lT.h)(this, Jl, !1)), ET.set(this, ((0, lT.h)(this, ol), (0, lT.h)(this, Hl, void 0))), this._useSpecularOverAlpha = ((0, lT.h)(this, el), (0, lT.h)(this, Gl, !1)), ZT.set(this, ((0, lT.h)(this, Vl), (0, lT.h)(this, El, void 0))), this._useReflectionOverAlpha = ((0, lT.h)(this, Zl), (0, lT.h)(this, ul, !1)), uT.set(this, ((0, lT.h)(this, Xl), (0, lT.h)(this, dl, void 0))), this._disableLighting = ((0, lT.h)(this, Ll), (0, lT.h)(this, Rl, !1)), XT.set(this, ((0, lT.h)(this, gl), (0, lT.h)(this, Ul, void 0))), this._useObjectSpaceNormalMap = ((0, lT.h)(this, Yl), (0, lT.h)(this, Bl, !1)), dT.set(this, ((0, lT.h)(this, Wl), (0, lT.h)(this, nl, void 0))), this._useParallax = ((0, lT.h)(this, pl), (0, lT.h)(this, il, !1)), LT.set(this, ((0, lT.h)(this, ql), (0, lT.h)(this, sl, void 0))), this._useParallaxOcclusion = ((0, lT.h)(this, TM), (0, lT.h)(this, kM, !1)), RT.set(this, ((0, lT.h)(this, cM), (0, lT.h)(this, lM, void 0))), this.parallaxScaleBias = ((0, lT.h)(this, MM), (0, lT.h)(this, KM, .05)), this._roughness = ((0, lT.h)(this, OM), (0, lT.h)(this, yM, 0)), gT.set(this, ((0, lT.h)(this, fM), (0, lT.h)(this, xM, void 0))), this.indexOfRefraction = ((0, lT.h)(this, IM), (0, lT.h)(this, AM, .98)), this.invertRefractionY = ((0, lT.h)(this, CM), (0, lT.h)(this, jM, !0)), this.alphaCutOff = ((0, lT.h)(this, vM), (0, lT.h)(this, tM, .4)), this._useLightmapAsShadowmap = ((0, lT.h)(this, hM), (0, lT.h)(this, NM, !1)), UT.set(this, ((0, lT.h)(this, QM), (0, lT.h)(this, SM, void 0))), this._diffuseFresnelParameters = ((0, lT.h)(this, DM), (0, lT.h)(this, aM, void 0)), YT.set(this, ((0, lT.h)(this, FM), (0, lT.h)(this, rM, void 0))), this._opacityFresnelParameters = ((0, lT.h)(this, PM), (0, lT.h)(this, wM, void 0)), BT.set(this, ((0, lT.h)(this, mM), (0, lT.h)(this, bM, void 0))), this._reflectionFresnelParameters = ((0, lT.h)(this, zM), (0, lT.h)(this, JM, void 0)), WT.set(this, ((0, lT.h)(this, oM), (0, lT.h)(this, HM, void 0))), this._refractionFresnelParameters = ((0, lT.h)(this, eM), (0, lT.h)(this, GM, void 0)), nT.set(this, ((0, lT.h)(this, VM), (0, lT.h)(this, EM, void 0))), this._emissiveFresnelParameters = ((0, lT.h)(this, ZM), (0, lT.h)(this, uM, void 0)), pT.set(this, ((0, lT.h)(this, XM), (0, lT.h)(this, dM, void 0))), this._useReflectionFresnelFromSpecular = ((0, lT.h)(this, LM), (0, lT.h)(this, RM, !1)), iT.set(this, ((0, lT.h)(this, gM), (0, lT.h)(this, UM, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, lT.h)(this, YM), (0, lT.h)(this, BM, !1)), qT.set(this, ((0, lT.h)(this, WM), (0, lT.h)(this, nM, void 0))), this._maxSimultaneousLights = ((0, lT.h)(this, pM), (0, lT.h)(this, iM, 4)), sT.set(this, ((0, lT.h)(this, qM), (0, lT.h)(this, sM, void 0))), this._invertNormalMapX = ((0, lT.h)(this, TK), (0, lT.h)(this, kK, !1)), Tk.set(this, ((0, lT.h)(this, cK), (0, lT.h)(this, lK, void 0))), this._invertNormalMapY = ((0, lT.h)(this, MK), (0, lT.h)(this, KK, !1)), kk.set(this, ((0, lT.h)(this, OK), (0, lT.h)(this, yK, void 0))), this._twoSidedLighting = ((0, lT.h)(this, fK), (0, lT.h)(this, xK, !1)), ck.set(this, ((0, lT.h)(this, IK), (0, lT.h)(this, AK, void 0))), this._applyDecalMapAfterDetailMap = ((0, lT.h)(this, CK), (0, lT.h)(this, jK, !1)), lk.set(this, ((0, lT.h)(this, vK), (0, lT.h)(this, tK, void 0))), this._vertexPullingMetadata = ((0, lT.h)(this, hK), null), this._renderTargets = new KT.g(16), this._globalAmbientColor = new yT.c(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new NT.d(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new xT.c, this.getRenderTargetTextures = () => (this._renderTargets.reset(), TT.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), TT.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(TT.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(TT.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === CT.e.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== CT.e.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(kT, cT) {
            let lT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const MT = cT._drawWrapper;
            if (MT.effect && this.isFrozen && MT._wasPreviouslyReady && MT._wasPreviouslyUsingInstances === lT) return !0;
            cT.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), cT.materialDefines = new HT(this._eventInfo.defineNames));
            const KT = this.NJ(),
              OT = cT.materialDefines;
            if (this._isReadyForSubMesh(cT)) return !0;
            const yT = KT.Dv();
            if (OT._needNormals = (0, DT.U)(KT, kT, OT, !0, this._maxSimultaneousLights, this._disableLighting), !(0, DT.d)(KT, kT, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, DT._)(KT, OT);
            const IT = this.needAlphaBlendingForMesh(kT) && this.NJ().useOrderIndependentTransparency;
            if ((0, DT.fb)(KT, OT, this.canRenderToMRT && !IT), (0, DT.bb)(KT, OT, IT), rT.d.PrepareDefines(yT.currentRenderPassId, kT, OT), OT._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, OT._needUVs = !1;
              for (let TT = 1; TT <= 6; ++TT) OT["MAINUV" + TT] = !1;
              if (KT.texturesEnabled) {
                if (OT.DIFFUSEDIRECTUV = 0, OT.BUMPDIRECTUV = 0, OT.AMBIENTDIRECTUV = 0, OT.OPACITYDIRECTUV = 0, OT.EMISSIVEDIRECTUV = 0, OT.SPECULARDIRECTUV = 0, OT.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && TT.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, DT.V)(this._diffuseTexture, OT, "DIFFUSE")
                } else OT.DIFFUSE = !1;
                if (this._ambientTexture && TT.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, DT.V)(this._ambientTexture, OT, "AMBIENT")
                } else OT.AMBIENT = !1;
                if (this._opacityTexture && TT.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, DT.V)(this._opacityTexture, OT, "OPACITY"), OT.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else OT.OPACITY = !1;
                if (this._reflectionTexture && TT.ReflectionTextureEnabled ? (OT.ROUGHNESS = this._roughness > 0, OT.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (OT.ROUGHNESS = !1, OT.REFLECTIONOVERALPHA = !1), !(0, DT.Q)(KT, this._reflectionTexture, OT)) return !1;
                if (this._emissiveTexture && TT.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, DT.V)(this._emissiveTexture, OT, "EMISSIVE")
                } else OT.EMISSIVE = !1;
                if (this._lightmapTexture && TT.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, DT.V)(this._lightmapTexture, OT, "LIGHTMAP"), OT.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, OT.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else OT.LIGHTMAP = !1;
                if (this._specularTexture && TT.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, DT.V)(this._specularTexture, OT, "SPECULAR"), OT.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else OT.SPECULAR = !1;
                if (KT.Dv().getCaps().standardDerivatives && this._bumpTexture && TT.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, DT.V)(this._bumpTexture, OT, "BUMP"), OT.PARALLAX = this._useParallax, OT.PARALLAX_RHS = KT.useRightHandedSystem, OT.PARALLAXOCCLUSION = this._useParallaxOcclusion, OT.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else OT.BUMP = !1, OT.PARALLAX = !1, OT.PARALLAX_RHS = !1, OT.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && TT.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  OT._needUVs = !0, OT.REFRACTION = !0, OT.REFRACTIONMAP_3D = this._refractionTexture.isCube, OT.RGBDREFRACTION = this._refractionTexture.isRGBD, OT.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else OT.REFRACTION = !1;
                OT.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else OT.DIFFUSE = !1, OT.AMBIENT = !1, OT.OPACITY = !1, OT.REFLECTION = !1, OT.EMISSIVE = !1, OT.LIGHTMAP = !1, OT.BUMP = !1, OT.REFRACTION = !1;
              OT.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), OT.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, OT.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, OT.SPECULAROVERALPHA = this._useSpecularOverAlpha, OT.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, OT.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, OT.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(kT), OT.TEXTURE_REPETITION_MODE = yT.version > 1 || yT.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = OT, this._eventInfo.subMesh = cT, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (OT._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(OT), OT.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, OT.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (OT._areFresnelDirty && (TT.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (OT.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, OT.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, OT.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, OT.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, OT.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, OT.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, OT._needNormals = !0, OT.FRESNEL = !0) : OT.FRESNEL = !1), OT.AREALIGHTUSED || OT.CLUSTLIGHT_BATCH)
              for (let TT = 0; TT < kT.lightSources.length; TT++)
                if (!kT.lightSources[TT]._isReady()) return !1;
            (0, DT.X)(kT, KT, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(kT), OT, this._applyDecalMapAfterDetailMap, this._useVertexPulling, cT.getRenderingMesh(), this._isVertexOutputInvariant), (0, DT.O)(KT, yT, this, OT, lT, null, cT.getRenderingMesh().hasThinInstances), this._eventInfo.defines = OT, this._eventInfo.mesh = kT, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, DT.N)(kT, OT, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let CT = !1;
            if (OT.isDirty) {
              const lT = OT._areLightsDisposed;
              OT.markAsProcessed();
              const MT = new hT.e;
              OT.REFLECTION && MT.addFallback(0, "REFLECTION"), OT.SPECULAR && MT.addFallback(0, "SPECULAR"), OT.BUMP && MT.addFallback(0, "BUMP"), OT.PARALLAX && MT.addFallback(1, "PARALLAX"), OT.PARALLAX_RHS && MT.addFallback(1, "PARALLAX_RHS"), OT.PARALLAXOCCLUSION && MT.addFallback(0, "PARALLAXOCCLUSION"), OT.SPECULAROVERALPHA && MT.addFallback(0, "SPECULAROVERALPHA"), OT.FOG && MT.addFallback(1, "FOG"), OT.POINTSIZE && MT.addFallback(0, "POINTSIZE"), OT.LOGARITHMICDEPTH && MT.addFallback(0, "LOGARITHMICDEPTH"), (0, DT.z)(OT, MT, this._maxSimultaneousLights), OT.SPECULARTERM && MT.addFallback(0, "SPECULARTERM"), OT.DIFFUSEFRESNEL && MT.addFallback(1, "DIFFUSEFRESNEL"), OT.OPACITYFRESNEL && MT.addFallback(2, "OPACITYFRESNEL"), OT.REFLECTIONFRESNEL && MT.addFallback(3, "REFLECTIONFRESNEL"), OT.EMISSIVEFRESNEL && MT.addFallback(4, "EMISSIVEFRESNEL"), OT.FRESNEL && MT.addFallback(4, "FRESNEL"), OT.MULTIVIEW && MT.addFallback(0, "MULTIVIEW");
              const IT = [fT.l.PositionKind];
              OT.NORMAL && IT.push(fT.l.NormalKind), OT.TANGENT && IT.push(fT.l.TangentKind);
              for (let TT = 1; TT <= 6; ++TT) OT["UV" + TT] && IT.push(`uv${1===TT?"":TT}`);
              OT.VERTEXCOLOR && IT.push(fT.l.ColorKind), (0, DT.F)(IT, kT, OT, MT), (0, DT.G)(IT, OT), (0, DT.I)(IT, kT, OT), (0, DT.D)(IT, kT, OT);
              let jT = "default";
              const vT = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                tT = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, DT.nb)(vT, tT, !1);
              const NT = ["Material", "Scene", "Mesh"],
                aT = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: OT.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = MT, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = OT, this._eventInfo.uniforms = vT, this._eventInfo.attributes = IT, this._eventInfo.samplers = tT, this._eventInfo.uniformBuffersNames = NT, this._eventInfo.customCode = void 0, this._eventInfo.mesh = kT, this._eventInfo.indexParameters = aT, this._callbackPluginEventGeneric(128, this._eventInfo), rT.d.AddUniformsAndSamplers(vT, tT), xT.c.AddUniforms(vT), xT.c.AddSamplers(tT), AT.c && (AT.c.PrepareUniforms(vT, OT), AT.c.PrepareSamplers(tT, OT)), (0, DT.qb)({
                  uniformsNames: vT,
                  uniformBuffersNames: NT,
                  samplers: tT,
                  defines: OT,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, QT.e)(vT), this._useVertexPulling) {
                const TT = cT.getRenderingMesh(),
                  kT = TT?.geometry;
                kT && (this._vertexPullingMetadata = (0, ST.f)(kT), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((TT, kT) => {
                  vT.push(`vp_${kT}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const FT = {};
              this.customShaderNameResolve && (jT = this.customShaderNameResolve(jT, vT, NT, tT, OT, IT, FT));
              const PT = OT.toString(),
                wT = cT.effect,
                mT = KT.Dv().createEffect(jT, {
                  attributes: IT,
                  uniformsNames: vT,
                  uniformBuffersNames: NT,
                  samplers: tT,
                  defines: PT,
                  fallbacks: MT,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: aT,
                  processFinalCode: FT.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: OT.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: TT._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, yT);
              if (this._eventInfo.customCode = void 0, mT)
                if (this._onEffectCreatedObservable && (JT.effect = mT, JT.subMesh = cT, this._onEffectCreatedObservable.notifyObservers(JT)), this.allowShaderHotSwapping && wT && !mT.isReady()) {
                  if (OT.markAsUnprocessed(), CT = this.isFrozen, lT) return OT._areLightsDisposed = !0, !1
                } else KT.resetCachedMaterial(), cT.setEffect(mT, OT, this._materialContext)
            }
            return !(!cT.effect || !cT.effect.isReady()) && (OT._renderId = KT.getRenderId(), MT._wasPreviouslyReady = !CT, MT._wasPreviouslyUsingInstances = lT, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const TT = this._uniformBuffer;
            TT.addUniform("diffuseLeftColor", 4), TT.addUniform("diffuseRightColor", 4), TT.addUniform("opacityParts", 4), TT.addUniform("reflectionLeftColor", 4), TT.addUniform("reflectionRightColor", 4), TT.addUniform("refractionLeftColor", 4), TT.addUniform("refractionRightColor", 4), TT.addUniform("emissiveLeftColor", 4), TT.addUniform("emissiveRightColor", 4), TT.addUniform("vDiffuseInfos", 2), TT.addUniform("vAmbientInfos", 2), TT.addUniform("vOpacityInfos", 2), TT.addUniform("vEmissiveInfos", 2), TT.addUniform("vLightmapInfos", 2), TT.addUniform("vSpecularInfos", 2), TT.addUniform("vBumpInfos", 3), TT.addUniform("diffuseMatrix", 16), TT.addUniform("ambientMatrix", 16), TT.addUniform("opacityMatrix", 16), TT.addUniform("emissiveMatrix", 16), TT.addUniform("lightmapMatrix", 16), TT.addUniform("specularMatrix", 16), TT.addUniform("bumpMatrix", 16), TT.addUniform("vTangentSpaceParams", 2), TT.addUniform("pointSize", 1), TT.addUniform("alphaCutOff", 1), TT.addUniform("refractionMatrix", 16), TT.addUniform("vRefractionInfos", 4), TT.addUniform("vRefractionPosition", 3), TT.addUniform("vRefractionSize", 3), TT.addUniform("vSpecularColor", 4), TT.addUniform("vEmissiveColor", 3), TT.addUniform("vDiffuseColor", 4), TT.addUniform("vAmbientColor", 3), TT.addUniform("cameraInfo", 4), TT.addUniform("vTextureRepetitionHexTilingParams", 4), (0, DT.jb)(TT, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(kT, cT, lT) {
            const MT = this.NJ(),
              KT = lT.materialDefines;
            if (!KT) return;
            const fT = lT.effect;
            if (!fT) return;
            this._activeEffect = fT, cT.getMeshUniformBuffer().bindToEffect(fT, "Mesh"), cT.transferToEffect(kT), this._uniformBuffer.bindToEffect(fT, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, MT, cT, kT, this.isFrozen), rT.d.Bind(MT.Dv().currentRenderPassId, this._activeEffect, cT, kT, this);
            const xT = MT.activeCamera;
            xT ? this._uniformBuffer.updateFloat4("cameraInfo", xT.minZ, xT.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const IT = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", IT[0], IT[1], IT[2], IT[3]), this._eventInfo.subMesh = lT, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), KT.OBJECTSPACE_NORMALMAP && (kT.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const AT = this._mustRebind(MT, fT, lT, cT.visibility),
              CT = MT.Dv()._features.needToAlwaysBindUniformBuffers;
            (0, DT.e)(cT, fT), this._vertexPullingMetadata && (0, ST.c)(fT, this._vertexPullingMetadata);
            const jT = this._uniformBuffer;
            if (AT) {
              if (this.bindViewProjection(fT), !jT.useUbo || !this.isFrozen || !jT.isSync || lT._drawWrapper._forceRebindOnNextCall) {
                if (TT.FresnelEnabled && KT.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (jT.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), jT.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const TT = yT.k.Color3[0];
                    TT.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), jT.updateColor4("opacityParts", TT, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (jT.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), jT.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (jT.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), jT.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (jT.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), jT.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (KT.ALPHATEST && jT.updateFloat("alphaCutOff", this.alphaCutOff), MT.texturesEnabled && (this._diffuseTexture && TT.DiffuseTextureEnabled && (jT.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, DT.v)(this._diffuseTexture, jT, "diffuse")), this._ambientTexture && TT.AmbientTextureEnabled && (jT.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, DT.v)(this._ambientTexture, jT, "ambient")), this._opacityTexture && TT.OpacityTextureEnabled && (jT.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, DT.v)(this._opacityTexture, jT, "opacity")), (0, DT.j)(MT, KT, jT, yT.c.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && TT.ReflectionTextureEnabled || jT.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && TT.EmissiveTextureEnabled && (jT.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, DT.v)(this._emissiveTexture, jT, "emissive")), this._lightmapTexture && TT.LightmapTextureEnabled && (jT.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, DT.v)(this._lightmapTexture, jT, "lightmap")), this._specularTexture && TT.SpecularTextureEnabled && (jT.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, DT.v)(this._specularTexture, jT, "specular")), this._bumpTexture && MT.Dv().getCaps().standardDerivatives && TT.BumpTextureEnabled && (jT.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, DT.v)(this._bumpTexture, jT, "bump"), MT._mirroredCameraPosition ? jT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : jT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && TT.RefractionTextureEnabled)) {
                  let TT = 1;
                  if (this._refractionTexture.isCube || (jT.X3("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (TT = this._refractionTexture.depth)), jT.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, TT, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const TT = this._refractionTexture;
                    jT.updateVector3("vRefractionPosition", TT.boundingBoxPosition), jT.updateVector3("vRefractionSize", TT.boundingBoxSize)
                  }
                }
                this.pointsCloud && jT.updateFloat("pointSize", this.pointSize), jT.updateColor4("vSpecularColor", this.specularColor, this.specularPower), jT.updateColor3("vEmissiveColor", TT.EmissiveTextureEnabled ? this.emissiveColor : yT.c.BlackReadOnly), jT.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), MT.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), jT.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              MT.texturesEnabled && (this._diffuseTexture && TT.DiffuseTextureEnabled && fT.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && TT.AmbientTextureEnabled && fT.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && TT.OpacityTextureEnabled && fT.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && TT.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? fT.setTexture("reflectionCubeSampler", this._reflectionTexture) : fT.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && TT.EmissiveTextureEnabled && fT.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && TT.LightmapTextureEnabled && fT.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && TT.SpecularTextureEnabled && fT.setTexture("specularSampler", this._specularTexture), this._bumpTexture && MT.Dv().getCaps().standardDerivatives && TT.BumpTextureEnabled && fT.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && TT.RefractionTextureEnabled && (this._refractionTexture.isCube ? fT.setTexture("refractionCubeSampler", this._refractionTexture) : fT.setTexture("refraction2DSampler", this._refractionTexture))), this.NJ().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(cT) && this.NJ().depthPeelingRenderer.bind(fT), this._eventInfo.subMesh = lT, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, QT.g)(fT, this, MT), this.bindEyePosition(fT)
            } else CT && (this._needToBindSceneUbo = !0);
            !AT && this.isFrozen && !CT || !MT.lightsEnabled || this._disableLighting || (0, DT.m)(MT, cT, fT, KT, this._maxSimultaneousLights), !AT && this.isFrozen || ((MT.fogEnabled && cT.applyFog && MT.fogMode !== OT.f.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || cT.receiveShadows || KT.PREPASS || KT.CLUSTLIGHT_BATCH) && this.bindView(fT), (0, DT.f)(MT, cT, fT), KT.NUM_MORPH_INFLUENCERS && (0, DT.q)(cT, fT), KT.BAKED_VERTEX_ANIMATION_TEXTURE && cT.bakedVertexAnimationManager?.bind(fT, KT.INSTANCES), this.useLogarithmicDepth && (0, DT.p)(KT, fT, MT), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(cT, this._activeEffect, lT), jT.update()
          }
          _canBindRunFollower(kT, cT, lT, MT, KT) {
            const OT = kT.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === TT.prototype.isReadyForSubMesh && this.bindForSubMesh === TT.prototype.bindForSubMesh && this._mustRebind === vT.e.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !cT._features.needToAlwaysBindUniformBuffers && !(OT && OT.enabled && OT.currentRTisSceneRT) && !rT.d._Configurations[cT.currentRenderPassId] && !MT.materialDefines?.OBJECTSPACE_NORMALMAP && !lT.skeleton && !KT._bonesComputationForcedToCPU
          }
          _bindRunFollower(TT, kT, cT, lT) {
            this._activeEffect = lT, kT.getMeshUniformBuffer().bindToEffect(lT, "Mesh"), kT.transferToEffect(TT);
            const MT = this._uniformBuffer;
            MT.bindToEffect(lT, "Material");
            const KT = this._scene.activeCamera;
            KT ? MT.updateFloat4("cameraInfo", KT.minZ, KT.maxZ, 0, 0) : MT.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const OT = this.textureRepetitionHexTilingParams;
            MT.updateFloat4("vTextureRepetitionHexTilingParams", OT[0], OT[1], OT[2], OT[3]), this._afterBind(kT, lT, cT), MT.update()
          }
          getAnimatables() {
            const TT = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && TT.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && TT.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && TT.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && TT.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && TT.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && TT.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && TT.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && TT.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && TT.push(this._refractionTexture), TT
          }
          getActiveTextures() {
            const TT = super.getActiveTextures();
            return this._diffuseTexture && TT.push(this._diffuseTexture), this._ambientTexture && TT.push(this._ambientTexture), this._opacityTexture && TT.push(this._opacityTexture), this._reflectionTexture && TT.push(this._reflectionTexture), this._emissiveTexture && TT.push(this._emissiveTexture), this._specularTexture && TT.push(this._specularTexture), this._bumpTexture && TT.push(this._bumpTexture), this._lightmapTexture && TT.push(this._lightmapTexture), this._refractionTexture && TT.push(this._refractionTexture), TT
          }
          hasTexture(TT) {
            return !!super.hasTexture(TT) || (this._diffuseTexture === TT || (this._ambientTexture === TT || (this._opacityTexture === TT || (this._reflectionTexture === TT || (this._emissiveTexture === TT || (this._specularTexture === TT || (this._bumpTexture === TT || (this._lightmapTexture === TT || this._refractionTexture === TT))))))))
          }
          dispose(TT, kT) {
            kT && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(TT, kT)
          }
          clone(kT) {
            let cT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const MT = aT.d.Clone((() => new TT(kT, this.NJ())), this, {
              cloneTexturesOnlyOnce: cT
            });
            return MT.name = kT, MT.id = kT, this.stencil.copyTo(MT.stencil), this._clonePlugins(MT, lT), MT
          }
          static Parse(kT, cT, lT) {
            const MT = aT.d.Parse((() => new TT(kT.name, cT)), kT, cT, lT);
            return kT.stencil && MT.stencil.parse(kT.stencil, cT, lT), CT.e._ParsePlugins(kT, MT, cT, lT), MT
          }
          static get DiffuseTextureEnabled() {
            return tT.b.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(TT) {
            tT.b.DiffuseTextureEnabled = TT
          }
          static get DetailTextureEnabled() {
            return tT.b.DetailTextureEnabled
          }
          static set DetailTextureEnabled(TT) {
            tT.b.DetailTextureEnabled = TT
          }
          static get AmbientTextureEnabled() {
            return tT.b.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(TT) {
            tT.b.AmbientTextureEnabled = TT
          }
          static get OpacityTextureEnabled() {
            return tT.b.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(TT) {
            tT.b.OpacityTextureEnabled = TT
          }
          static get ReflectionTextureEnabled() {
            return tT.b.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(TT) {
            tT.b.ReflectionTextureEnabled = TT
          }
          static get EmissiveTextureEnabled() {
            return tT.b.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(TT) {
            tT.b.EmissiveTextureEnabled = TT
          }
          static get SpecularTextureEnabled() {
            return tT.b.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(TT) {
            tT.b.SpecularTextureEnabled = TT
          }
          static get BumpTextureEnabled() {
            return tT.b.BumpTextureEnabled
          }
          static set BumpTextureEnabled(TT) {
            tT.b.BumpTextureEnabled = TT
          }
          static get LightmapTextureEnabled() {
            return tT.b.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(TT) {
            tT.b.LightmapTextureEnabled = TT
          }
          static get RefractionTextureEnabled() {
            return tT.b.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(TT) {
            tT.b.RefractionTextureEnabled = TT
          }
          static get ColorGradingTextureEnabled() {
            return tT.b.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(TT) {
            tT.b.ColorGradingTextureEnabled = TT
          }
          static get FresnelEnabled() {
            return tT.b.FresnelEnabled
          }
          static set FresnelEnabled(TT) {
            tT.b.FresnelEnabled = TT
          }
        }, kT = new WeakMap, IT = new WeakMap, jT = new WeakMap, PT = new WeakMap, wT = new WeakMap, mT = new WeakMap, bT = new WeakMap, zT = new WeakMap, oT = new WeakMap, GT = new WeakMap, VT = new WeakMap, ET = new WeakMap, ZT = new WeakMap, uT = new WeakMap, XT = new WeakMap, dT = new WeakMap, LT = new WeakMap, RT = new WeakMap, gT = new WeakMap, UT = new WeakMap, YT = new WeakMap, BT = new WeakMap, WT = new WeakMap, nT = new WeakMap, pT = new WeakMap, iT = new WeakMap, qT = new WeakMap, sT = new WeakMap, Tk = new WeakMap, kk = new WeakMap, ck = new WeakMap, lk = new WeakMap, (() => {
          const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(mc[Symbol.metadata] ?? null) : void 0;
          Mk = [(0, MT.A)("diffuseTexture")], Kk = [(0, MT.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ok = [(0, MT.A)("ambientTexture")], yk = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], fk = [(0, MT.A)("opacityTexture")], xk = [(0, MT.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ik = [(0, MT.A)("reflectionTexture")], Ak = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], Ck = [(0, MT.A)("emissiveTexture")], jk = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], vk = [(0, MT.A)("specularTexture")], tk = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], hk = [(0, MT.A)("bumpTexture")], Nk = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], Qk = [(0, MT.A)("lightmapTexture")], Sk = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], Dk = [(0, MT.A)("refractionTexture")], ak = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], Fk = [(0, MT.m)("ambient")], rk = [(0, MT.m)("diffuse")], Pk = [(0, MT.m)("specular")], wk = [(0, MT.m)("emissive")], mk = [(0, MT.J)()], bk = [(0, MT.J)("useAlphaFromDiffuseTexture")], zk = [() => ({
            init(TT) {
              return void 0 === TT && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = TT), TT
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(TT) {
              this._useAlphaFromDiffuseTexture = TT
            }
          })], Jk = [(0, MT.J)("useEmissiveAsIllumination")], Hk = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], ek = [(0, MT.J)("linkEmissiveWithDiffuse")], Gk = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], Vk = [(0, MT.J)("useSpecularOverAlpha")], Ek = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], Zk = [(0, MT.J)("useReflectionOverAlpha")], uk = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], Xk = [(0, MT.J)("disableLighting")], dk = [(0, MT.c)("_markAllSubMeshesAsLightsDirty")], Lk = [(0, MT.J)("useObjectSpaceNormalMap")], Rk = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], gk = [(0, MT.J)("useParallax")], Uk = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], Yk = [(0, MT.J)("useParallaxOcclusion")], Bk = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], Wk = [(0, MT.J)()], nk = [(0, MT.J)("roughness")], pk = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], ik = [(0, MT.J)()], qk = [(0, MT.J)()], sk = [(0, MT.J)()], Tc = [(0, MT.J)("useLightmapAsShadowmap")], kc = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], cc = [(0, MT.p)("diffuseFresnelParameters")], lc = [(0, MT.c)("_markAllSubMeshesAsFresnelDirty")], Mc = [(0, MT.p)("opacityFresnelParameters")], Kc = [(0, MT.c)("_markAllSubMeshesAsFresnelAndMiscDirty")], Oc = [(0, MT.p)("reflectionFresnelParameters")], yc = [(0, MT.c)("_markAllSubMeshesAsFresnelDirty")], fc = [(0, MT.p)("refractionFresnelParameters")], xc = [(0, MT.c)("_markAllSubMeshesAsFresnelDirty")], Ic = [(0, MT.p)("emissiveFresnelParameters")], Ac = [(0, MT.c)("_markAllSubMeshesAsFresnelDirty")], Cc = [(0, MT.J)("useReflectionFresnelFromSpecular")], jc = [(0, MT.c)("_markAllSubMeshesAsFresnelDirty")], vc = [(0, MT.J)("useGlossinessFromSpecularMapAlpha")], tc = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], hc = [(0, MT.J)("maxSimultaneousLights")], Nc = [(0, MT.c)("_markAllSubMeshesAsLightsDirty")], Qc = [(0, MT.J)("invertNormalMapX")], Sc = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], Dc = [(0, MT.J)("invertNormalMapY")], ac = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], Fc = [(0, MT.J)("twoSidedLighting")], rc = [(0, MT.c)("_markAllSubMeshesAsTexturesDirty")], Pc = [(0, MT.J)("applyDecalMapAfterDetailMap")], wc = [(0, MT.c)("_markAllSubMeshesAsMiscDirty")], (0, lT.e)(TT, null, Kk, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "diffuseTexture" in TT,
              get: TT => TT.diffuseTexture,
              set: (TT, kT) => {
                TT.diffuseTexture = kT
              }
            },
            metadata: kT
          }, Jc, oc), (0, lT.e)(TT, null, yk, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "ambientTexture" in TT,
              get: TT => TT.ambientTexture,
              set: (TT, kT) => {
                TT.ambientTexture = kT
              }
            },
            metadata: kT
          }, Gc, Vc), (0, lT.e)(TT, null, xk, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "opacityTexture" in TT,
              get: TT => TT.opacityTexture,
              set: (TT, kT) => {
                TT.opacityTexture = kT
              }
            },
            metadata: kT
          }, uc, Xc), (0, lT.e)(TT, null, Ak, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "reflectionTexture" in TT,
              get: TT => TT.reflectionTexture,
              set: (TT, kT) => {
                TT.reflectionTexture = kT
              }
            },
            metadata: kT
          }, Rc, gc), (0, lT.e)(TT, null, jk, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissiveTexture" in TT,
              get: TT => TT.emissiveTexture,
              set: (TT, kT) => {
                TT.emissiveTexture = kT
              }
            },
            metadata: kT
          }, Bc, Wc), (0, lT.e)(TT, null, tk, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularTexture" in TT,
              get: TT => TT.specularTexture,
              set: (TT, kT) => {
                TT.specularTexture = kT
              }
            },
            metadata: kT
          }, ic, qc), (0, lT.e)(TT, null, Nk, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "bumpTexture" in TT,
              get: TT => TT.bumpTexture,
              set: (TT, kT) => {
                TT.bumpTexture = kT
              }
            },
            metadata: kT
          }, kl, cl), (0, lT.e)(TT, null, Sk, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "lightmapTexture" in TT,
              get: TT => TT.lightmapTexture,
              set: (TT, kT) => {
                TT.lightmapTexture = kT
              }
            },
            metadata: kT
          }, Kl, Ol), (0, lT.e)(TT, null, ak, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "refractionTexture" in TT,
              get: TT => TT.refractionTexture,
              set: (TT, kT) => {
                TT.refractionTexture = kT
              }
            },
            metadata: kT
          }, xl, Il), (0, lT.e)(TT, null, zk, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "useAlphaFromDiffuseTexture" in TT,
              get: TT => TT.useAlphaFromDiffuseTexture,
              set: (TT, kT) => {
                TT.useAlphaFromDiffuseTexture = kT
              }
            },
            metadata: kT
          }, rl, Pl), (0, lT.e)(TT, null, Hk, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: TT => "useEmissiveAsIllumination" in TT,
              get: TT => TT.useEmissiveAsIllumination,
              set: (TT, kT) => {
                TT.useEmissiveAsIllumination = kT
              }
            },
            metadata: kT
          }, bl, zl), (0, lT.e)(TT, null, Gk, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: TT => "linkEmissiveWithDiffuse" in TT,
              get: TT => TT.linkEmissiveWithDiffuse,
              set: (TT, kT) => {
                TT.linkEmissiveWithDiffuse = kT
              }
            },
            metadata: kT
          }, Hl, el), (0, lT.e)(TT, null, Ek, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "useSpecularOverAlpha" in TT,
              get: TT => TT.useSpecularOverAlpha,
              set: (TT, kT) => {
                TT.useSpecularOverAlpha = kT
              }
            },
            metadata: kT
          }, El, Zl), (0, lT.e)(TT, null, uk, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "useReflectionOverAlpha" in TT,
              get: TT => TT.useReflectionOverAlpha,
              set: (TT, kT) => {
                TT.useReflectionOverAlpha = kT
              }
            },
            metadata: kT
          }, dl, Ll), (0, lT.e)(TT, null, dk, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "disableLighting" in TT,
              get: TT => TT.disableLighting,
              set: (TT, kT) => {
                TT.disableLighting = kT
              }
            },
            metadata: kT
          }, Ul, Yl), (0, lT.e)(TT, null, Rk, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "useObjectSpaceNormalMap" in TT,
              get: TT => TT.useObjectSpaceNormalMap,
              set: (TT, kT) => {
                TT.useObjectSpaceNormalMap = kT
              }
            },
            metadata: kT
          }, nl, pl), (0, lT.e)(TT, null, Uk, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: TT => "useParallax" in TT,
              get: TT => TT.useParallax,
              set: (TT, kT) => {
                TT.useParallax = kT
              }
            },
            metadata: kT
          }, sl, TM), (0, lT.e)(TT, null, Bk, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: TT => "useParallaxOcclusion" in TT,
              get: TT => TT.useParallaxOcclusion,
              set: (TT, kT) => {
                TT.useParallaxOcclusion = kT
              }
            },
            metadata: kT
          }, lM, MM), (0, lT.e)(TT, null, pk, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "roughness" in TT,
              get: TT => TT.roughness,
              set: (TT, kT) => {
                TT.roughness = kT
              }
            },
            metadata: kT
          }, xM, IM), (0, lT.e)(TT, null, kc, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: TT => "useLightmapAsShadowmap" in TT,
              get: TT => TT.useLightmapAsShadowmap,
              set: (TT, kT) => {
                TT.useLightmapAsShadowmap = kT
              }
            },
            metadata: kT
          }, SM, DM), (0, lT.e)(TT, null, lc, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "diffuseFresnelParameters" in TT,
              get: TT => TT.diffuseFresnelParameters,
              set: (TT, kT) => {
                TT.diffuseFresnelParameters = kT
              }
            },
            metadata: kT
          }, rM, PM), (0, lT.e)(TT, null, Kc, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "opacityFresnelParameters" in TT,
              get: TT => TT.opacityFresnelParameters,
              set: (TT, kT) => {
                TT.opacityFresnelParameters = kT
              }
            },
            metadata: kT
          }, bM, zM), (0, lT.e)(TT, null, yc, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "reflectionFresnelParameters" in TT,
              get: TT => TT.reflectionFresnelParameters,
              set: (TT, kT) => {
                TT.reflectionFresnelParameters = kT
              }
            },
            metadata: kT
          }, HM, eM), (0, lT.e)(TT, null, xc, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "refractionFresnelParameters" in TT,
              get: TT => TT.refractionFresnelParameters,
              set: (TT, kT) => {
                TT.refractionFresnelParameters = kT
              }
            },
            metadata: kT
          }, EM, ZM), (0, lT.e)(TT, null, Ac, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissiveFresnelParameters" in TT,
              get: TT => TT.emissiveFresnelParameters,
              set: (TT, kT) => {
                TT.emissiveFresnelParameters = kT
              }
            },
            metadata: kT
          }, dM, LM), (0, lT.e)(TT, null, jc, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: TT => "useReflectionFresnelFromSpecular" in TT,
              get: TT => TT.useReflectionFresnelFromSpecular,
              set: (TT, kT) => {
                TT.useReflectionFresnelFromSpecular = kT
              }
            },
            metadata: kT
          }, UM, YM), (0, lT.e)(TT, null, tc, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "useGlossinessFromSpecularMapAlpha" in TT,
              get: TT => TT.useGlossinessFromSpecularMapAlpha,
              set: (TT, kT) => {
                TT.useGlossinessFromSpecularMapAlpha = kT
              }
            },
            metadata: kT
          }, nM, pM), (0, lT.e)(TT, null, Nc, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: TT => "maxSimultaneousLights" in TT,
              get: TT => TT.maxSimultaneousLights,
              set: (TT, kT) => {
                TT.maxSimultaneousLights = kT
              }
            },
            metadata: kT
          }, sM, TK), (0, lT.e)(TT, null, Sc, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: TT => "invertNormalMapX" in TT,
              get: TT => TT.invertNormalMapX,
              set: (TT, kT) => {
                TT.invertNormalMapX = kT
              }
            },
            metadata: kT
          }, lK, MK), (0, lT.e)(TT, null, ac, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: TT => "invertNormalMapY" in TT,
              get: TT => TT.invertNormalMapY,
              set: (TT, kT) => {
                TT.invertNormalMapY = kT
              }
            },
            metadata: kT
          }, yK, fK), (0, lT.e)(TT, null, rc, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "twoSidedLighting" in TT,
              get: TT => TT.twoSidedLighting,
              set: (TT, kT) => {
                TT.twoSidedLighting = kT
              }
            },
            metadata: kT
          }, AK, CK), (0, lT.e)(TT, null, wc, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "applyDecalMapAfterDetailMap" in TT,
              get: TT => TT.applyDecalMapAfterDetailMap,
              set: (TT, kT) => {
                TT.applyDecalMapAfterDetailMap = kT
              }
            },
            metadata: kT
          }, tK, hK), (0, lT.e)(null, null, Mk, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_diffuseTexture" in TT,
              get: TT => TT._diffuseTexture,
              set: (TT, kT) => {
                TT._diffuseTexture = kT
              }
            },
            metadata: kT
          }, bc, zc), (0, lT.e)(null, null, Ok, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_ambientTexture" in TT,
              get: TT => TT._ambientTexture,
              set: (TT, kT) => {
                TT._ambientTexture = kT
              }
            },
            metadata: kT
          }, Hc, ec), (0, lT.e)(null, null, fk, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_opacityTexture" in TT,
              get: TT => TT._opacityTexture,
              set: (TT, kT) => {
                TT._opacityTexture = kT
              }
            },
            metadata: kT
          }, Ec, Zc), (0, lT.e)(null, null, Ik, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_reflectionTexture" in TT,
              get: TT => TT._reflectionTexture,
              set: (TT, kT) => {
                TT._reflectionTexture = kT
              }
            },
            metadata: kT
          }, dc, Lc), (0, lT.e)(null, null, Ck, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_emissiveTexture" in TT,
              get: TT => TT._emissiveTexture,
              set: (TT, kT) => {
                TT._emissiveTexture = kT
              }
            },
            metadata: kT
          }, Uc, Yc), (0, lT.e)(null, null, vk, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_specularTexture" in TT,
              get: TT => TT._specularTexture,
              set: (TT, kT) => {
                TT._specularTexture = kT
              }
            },
            metadata: kT
          }, nc, pc), (0, lT.e)(null, null, hk, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_bumpTexture" in TT,
              get: TT => TT._bumpTexture,
              set: (TT, kT) => {
                TT._bumpTexture = kT
              }
            },
            metadata: kT
          }, sc, Tl), (0, lT.e)(null, null, Qk, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_lightmapTexture" in TT,
              get: TT => TT._lightmapTexture,
              set: (TT, kT) => {
                TT._lightmapTexture = kT
              }
            },
            metadata: kT
          }, ll, Ml), (0, lT.e)(null, null, Dk, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_refractionTexture" in TT,
              get: TT => TT._refractionTexture,
              set: (TT, kT) => {
                TT._refractionTexture = kT
              }
            },
            metadata: kT
          }, yl, fl), (0, lT.e)(null, null, Fk, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "ambientColor" in TT,
              get: TT => TT.ambientColor,
              set: (TT, kT) => {
                TT.ambientColor = kT
              }
            },
            metadata: kT
          }, Al, Cl), (0, lT.e)(null, null, rk, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "diffuseColor" in TT,
              get: TT => TT.diffuseColor,
              set: (TT, kT) => {
                TT.diffuseColor = kT
              }
            },
            metadata: kT
          }, jl, vl), (0, lT.e)(null, null, Pk, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularColor" in TT,
              get: TT => TT.specularColor,
              set: (TT, kT) => {
                TT.specularColor = kT
              }
            },
            metadata: kT
          }, tl, hl), (0, lT.e)(null, null, wk, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissiveColor" in TT,
              get: TT => TT.emissiveColor,
              set: (TT, kT) => {
                TT.emissiveColor = kT
              }
            },
            metadata: kT
          }, Nl, Ql), (0, lT.e)(null, null, mk, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularPower" in TT,
              get: TT => TT.specularPower,
              set: (TT, kT) => {
                TT.specularPower = kT
              }
            },
            metadata: kT
          }, Sl, Dl), (0, lT.e)(null, null, bk, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useAlphaFromDiffuseTexture" in TT,
              get: TT => TT._useAlphaFromDiffuseTexture,
              set: (TT, kT) => {
                TT._useAlphaFromDiffuseTexture = kT
              }
            },
            metadata: kT
          }, al, Fl), (0, lT.e)(null, null, Jk, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useEmissiveAsIllumination" in TT,
              get: TT => TT._useEmissiveAsIllumination,
              set: (TT, kT) => {
                TT._useEmissiveAsIllumination = kT
              }
            },
            metadata: kT
          }, wl, ml), (0, lT.e)(null, null, ek, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: TT => "_linkEmissiveWithDiffuse" in TT,
              get: TT => TT._linkEmissiveWithDiffuse,
              set: (TT, kT) => {
                TT._linkEmissiveWithDiffuse = kT
              }
            },
            metadata: kT
          }, Jl, ol), (0, lT.e)(null, null, Vk, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useSpecularOverAlpha" in TT,
              get: TT => TT._useSpecularOverAlpha,
              set: (TT, kT) => {
                TT._useSpecularOverAlpha = kT
              }
            },
            metadata: kT
          }, Gl, Vl), (0, lT.e)(null, null, Zk, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useReflectionOverAlpha" in TT,
              get: TT => TT._useReflectionOverAlpha,
              set: (TT, kT) => {
                TT._useReflectionOverAlpha = kT
              }
            },
            metadata: kT
          }, ul, Xl), (0, lT.e)(null, null, Xk, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "_disableLighting" in TT,
              get: TT => TT._disableLighting,
              set: (TT, kT) => {
                TT._disableLighting = kT
              }
            },
            metadata: kT
          }, Rl, gl), (0, lT.e)(null, null, Lk, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useObjectSpaceNormalMap" in TT,
              get: TT => TT._useObjectSpaceNormalMap,
              set: (TT, kT) => {
                TT._useObjectSpaceNormalMap = kT
              }
            },
            metadata: kT
          }, Bl, Wl), (0, lT.e)(null, null, gk, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useParallax" in TT,
              get: TT => TT._useParallax,
              set: (TT, kT) => {
                TT._useParallax = kT
              }
            },
            metadata: kT
          }, il, ql), (0, lT.e)(null, null, Yk, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useParallaxOcclusion" in TT,
              get: TT => TT._useParallaxOcclusion,
              set: (TT, kT) => {
                TT._useParallaxOcclusion = kT
              }
            },
            metadata: kT
          }, kM, cM), (0, lT.e)(null, null, Wk, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: TT => "parallaxScaleBias" in TT,
              get: TT => TT.parallaxScaleBias,
              set: (TT, kT) => {
                TT.parallaxScaleBias = kT
              }
            },
            metadata: kT
          }, KM, OM), (0, lT.e)(null, null, nk, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "_roughness" in TT,
              get: TT => TT._roughness,
              set: (TT, kT) => {
                TT._roughness = kT
              }
            },
            metadata: kT
          }, yM, fM), (0, lT.e)(null, null, ik, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: TT => "indexOfRefraction" in TT,
              get: TT => TT.indexOfRefraction,
              set: (TT, kT) => {
                TT.indexOfRefraction = kT
              }
            },
            metadata: kT
          }, AM, CM), (0, lT.e)(null, null, qk, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: TT => "invertRefractionY" in TT,
              get: TT => TT.invertRefractionY,
              set: (TT, kT) => {
                TT.invertRefractionY = kT
              }
            },
            metadata: kT
          }, jM, vM), (0, lT.e)(null, null, sk, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: TT => "alphaCutOff" in TT,
              get: TT => TT.alphaCutOff,
              set: (TT, kT) => {
                TT.alphaCutOff = kT
              }
            },
            metadata: kT
          }, tM, hM), (0, lT.e)(null, null, Tc, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useLightmapAsShadowmap" in TT,
              get: TT => TT._useLightmapAsShadowmap,
              set: (TT, kT) => {
                TT._useLightmapAsShadowmap = kT
              }
            },
            metadata: kT
          }, NM, QM), (0, lT.e)(null, null, cc, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "_diffuseFresnelParameters" in TT,
              get: TT => TT._diffuseFresnelParameters,
              set: (TT, kT) => {
                TT._diffuseFresnelParameters = kT
              }
            },
            metadata: kT
          }, aM, FM), (0, lT.e)(null, null, Mc, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "_opacityFresnelParameters" in TT,
              get: TT => TT._opacityFresnelParameters,
              set: (TT, kT) => {
                TT._opacityFresnelParameters = kT
              }
            },
            metadata: kT
          }, wM, mM), (0, lT.e)(null, null, Oc, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "_reflectionFresnelParameters" in TT,
              get: TT => TT._reflectionFresnelParameters,
              set: (TT, kT) => {
                TT._reflectionFresnelParameters = kT
              }
            },
            metadata: kT
          }, JM, oM), (0, lT.e)(null, null, fc, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "_refractionFresnelParameters" in TT,
              get: TT => TT._refractionFresnelParameters,
              set: (TT, kT) => {
                TT._refractionFresnelParameters = kT
              }
            },
            metadata: kT
          }, GM, VM), (0, lT.e)(null, null, Ic, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "_emissiveFresnelParameters" in TT,
              get: TT => TT._emissiveFresnelParameters,
              set: (TT, kT) => {
                TT._emissiveFresnelParameters = kT
              }
            },
            metadata: kT
          }, uM, XM), (0, lT.e)(null, null, Cc, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useReflectionFresnelFromSpecular" in TT,
              get: TT => TT._useReflectionFresnelFromSpecular,
              set: (TT, kT) => {
                TT._useReflectionFresnelFromSpecular = kT
              }
            },
            metadata: kT
          }, RM, gM), (0, lT.e)(null, null, vc, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useGlossinessFromSpecularMapAlpha" in TT,
              get: TT => TT._useGlossinessFromSpecularMapAlpha,
              set: (TT, kT) => {
                TT._useGlossinessFromSpecularMapAlpha = kT
              }
            },
            metadata: kT
          }, BM, WM), (0, lT.e)(null, null, hc, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: TT => "_maxSimultaneousLights" in TT,
              get: TT => TT._maxSimultaneousLights,
              set: (TT, kT) => {
                TT._maxSimultaneousLights = kT
              }
            },
            metadata: kT
          }, iM, qM), (0, lT.e)(null, null, Qc, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: TT => "_invertNormalMapX" in TT,
              get: TT => TT._invertNormalMapX,
              set: (TT, kT) => {
                TT._invertNormalMapX = kT
              }
            },
            metadata: kT
          }, kK, cK), (0, lT.e)(null, null, Dc, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: TT => "_invertNormalMapY" in TT,
              get: TT => TT._invertNormalMapY,
              set: (TT, kT) => {
                TT._invertNormalMapY = kT
              }
            },
            metadata: kT
          }, KK, OK), (0, lT.e)(null, null, Fc, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "_twoSidedLighting" in TT,
              get: TT => TT._twoSidedLighting,
              set: (TT, kT) => {
                TT._twoSidedLighting = kT
              }
            },
            metadata: kT
          }, xK, IK), (0, lT.e)(null, null, Pc, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "_applyDecalMapAfterDetailMap" in TT,
              get: TT => TT._applyDecalMapAfterDetailMap,
              set: (TT, kT) => {
                TT._applyDecalMapAfterDetailMap = kT
              }
            },
            metadata: kT
          }, jK, vK), kT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kT
          })
        })(), TT.ForceGLSL = !1, TT._ShaderLoader = new FT.e((() => [Promise.all([cT.e(308), cT.e(307)]).then((() => cT(41423))), Promise.all([cT.e(313), cT.e(309), cT.e(322), cT.e(312)]).then((() => cT(41619)))]), (() => [Promise.all([cT.e(329), cT.e(324)]).then((() => cT(41757))), Promise.all([cT.e(330), cT.e(340), cT.e(326)]).then((() => cT(41953)))])), TT
      })(),
      VT = !1;

    function ET() {
      VT || (VT = !0, (0, AT.g)(), (0, bT.g)("BABYLON.StandardMaterial", GT), OT.f.DefaultMaterialFactory = TT => new GT("default material", TT))
    }
    Object.getOwnPropertyDescriptor(GT.prototype, "decalMap") || Object.defineProperty(GT.prototype, "decalMap", (0, zT.d)("StandardMaterial", "decalMap"))
  },
  40004: (TT, kT, cT) => {
    function lT(TT) {
      return class extends TT {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    cT.d(kT, {
      c: () => lT
    })
  },
  39989: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT
    });
    class lT {
      constructor(TT, kT) {
        this._webGL = {
          load: TT,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: kT,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(TT) {
        const kT = 1 === TT ? this._webGPU : this._webGL;
        return kT.loaded ? void 0 : async () => {
          await this._loadAsync(kT)
        }
      }
      async _loadAsync(TT) {
        if (TT.loaded) return;
        let kT = TT.loadPromise;
        const cT = null === kT;
        cT && (kT = Promise.all(TT.load()), TT.loadPromise = kT);
        let lT = !1;
        try {
          await kT, lT = !0
        } finally {
          cT && this._completeLoad(TT, lT)
        }
      }
      _completeLoad(TT, kT) {
        TT.loaded = kT, TT.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);