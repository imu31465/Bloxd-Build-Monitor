export const id = 250;
export const ids = [250];
export const modules = {
  39184: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT
    });
    var iT = IT(38781);

    function zT(TT) {
      return class extends TT {
        constructor() {
          super(...arguments);
          const TT = new.target;
          if (!TT[Symbol.metadata]) {
            const oT = Object.getPrototypeOf(TT)?.[Symbol.metadata];
            TT[Symbol.metadata] = oT ? Object.create(oT) : {}
          }
          const oT = (0, iT.c)(TT[Symbol.metadata]);
          oT._imageProcessingConfiguration || (oT._imageProcessingConfiguration = {
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
          TT !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !TT && this.pC ? this._imageProcessingConfiguration = this.pC().imageProcessingConfiguration : TT && (this._imageProcessingConfiguration = TT), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
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
  39057: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      h: () => zT
    });
    var iT = IT(39063);

    function zT(TT) {
      return class extends TT {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class kT extends iT.d {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  39143: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => DT
    });
    var iT = IT(38764),
      zT = IT(39068),
      kT = IT(38773),
      WT = IT(39125),
      XT = IT(39063),
      BT = IT(39149),
      FT = IT(39113);
    class ST extends XT.d {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let DT = (() => {
      var TT, oT, IT, XT;
      let DT, LT, xT, cT, KT, MT, rT = BT.b,
        AT = [],
        gT = [],
        hT = [],
        wT = [],
        mT = [],
        eT = [],
        RT = [],
        uT = [],
        vT = [],
        ET = [],
        fT = [],
        CT = [];
      return TT = class extends rT {
        get texture() {
          return (0, iT.b)(this, oT, "f")
        }
        set texture(TT) {
          (0, iT.e)(this, oT, TT, "f")
        }
        get normalBlendMethod() {
          return (0, iT.b)(this, IT, "f")
        }
        set normalBlendMethod(TT) {
          (0, iT.e)(this, IT, TT, "f")
        }
        get isEnabled() {
          return (0, iT.b)(this, XT, "f")
        }
        set isEnabled(TT) {
          (0, iT.e)(this, XT, TT, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(TT) {
          let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(TT, "DetailMap", 140, new ST, kT), this._texture = null, oT.set(this, (0, iT.j)(this, AT, void 0)), this.diffuseBlendLevel = ((0, iT.j)(this, gT), (0, iT.j)(this, hT, 1)), this.roughnessBlendLevel = ((0, iT.j)(this, wT), (0, iT.j)(this, mT, 1)), this.bumpLevel = ((0, iT.j)(this, eT), (0, iT.j)(this, RT, 1)), this._normalBlendMethod = ((0, iT.j)(this, uT), zT.c.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), IT.set(this, (0, iT.j)(this, vT, void 0)), this._isEnabled = ((0, iT.j)(this, ET), !1), XT.set(this, (0, iT.j)(this, fT, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, iT.j)(this, CT), this._internalMarkAllSubMeshesAsTexturesDirty = TT._dirtyCallbacks[1]
        }
        isReadyForSubMesh(TT, oT, IT) {
          return !this._isEnabled || !(TT._areTexturesDirty && oT.texturesEnabled && IT.getCaps().standardDerivatives && this._texture && WT.c.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(TT, oT) {
          if (this._isEnabled) {
            TT.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const IT = oT.Zc();
            TT._areTexturesDirty && (IT.getCaps().standardDerivatives && this._texture && WT.c.DetailTextureEnabled && this._isEnabled ? ((0, FT.Q)(this._texture, TT, "DETAIL"), TT.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : TT.DETAIL = !1)
          } else TT.DETAIL = !1
        }
        bindForSubMesh(TT, oT) {
          if (!this._isEnabled) return;
          const IT = this._material.isFrozen;
          TT.useUbo && IT && TT.isSync || this._texture && WT.c.DetailTextureEnabled && (TT.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, FT.v)(this._texture, TT, "detail")), oT.texturesEnabled && this._texture && WT.c.DetailTextureEnabled && TT.setTexture("detailSampler", this._texture)
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
      }, oT = new WeakMap, IT = new WeakMap, XT = new WeakMap, (() => {
        const oT = "function" === typeof Symbol && Symbol.metadata ? Object.create(rT[Symbol.metadata] ?? null) : void 0;
        DT = [(0, kT.H)("detailTexture"), (0, kT.h)("_markAllSubMeshesAsTexturesDirty")], LT = [(0, kT.P)()], xT = [(0, kT.P)()], cT = [(0, kT.P)()], KT = [(0, kT.P)(), (0, kT.h)("_markAllSubMeshesAsTexturesDirty")], MT = [(0, kT.P)(), (0, kT.h)("_markAllSubMeshesAsTexturesDirty")], (0, iT.h)(TT, null, DT, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: TT => "texture" in TT,
            get: TT => TT.texture,
            set: (TT, oT) => {
              TT.texture = oT
            }
          },
          metadata: oT
        }, AT, gT), (0, iT.h)(TT, null, KT, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: TT => "normalBlendMethod" in TT,
            get: TT => TT.normalBlendMethod,
            set: (TT, oT) => {
              TT.normalBlendMethod = oT
            }
          },
          metadata: oT
        }, vT, ET), (0, iT.h)(TT, null, MT, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, oT) => {
              TT.isEnabled = oT
            }
          },
          metadata: oT
        }, fT, CT), (0, iT.h)(null, null, LT, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: TT => "diffuseBlendLevel" in TT,
            get: TT => TT.diffuseBlendLevel,
            set: (TT, oT) => {
              TT.diffuseBlendLevel = oT
            }
          },
          metadata: oT
        }, hT, wT), (0, iT.h)(null, null, xT, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: TT => "roughnessBlendLevel" in TT,
            get: TT => TT.roughnessBlendLevel,
            set: (TT, oT) => {
              TT.roughnessBlendLevel = oT
            }
          },
          metadata: oT
        }, mT, eT), (0, iT.h)(null, null, cT, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: TT => "bumpLevel" in TT,
            get: TT => TT.bumpLevel,
            set: (TT, oT) => {
              TT.bumpLevel = oT
            }
          },
          metadata: oT
        }, RT, uT), oT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oT
        })
      })(), TT
    })()
  },
  39063: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    class iT {
      constructor(TT) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = TT, TT)
          for (const oT in TT) Object.prototype.hasOwnProperty.call(TT, oT) && this._setDefaultValue(oT)
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
        for (let oT = 0; oT < this._keys.length; oT++) {
          const IT = this._keys[oT];
          if (this[IT] !== TT[IT]) return !1
        }
        return !0
      }
      cloneTo(TT) {
        this._keys.length !== TT._keys.length && (TT._keys = this._keys.slice(0));
        for (let oT = 0; oT < this._keys.length; oT++) {
          const IT = this._keys[oT];
          TT[IT] = this[IT]
        }
      }
      reset() {
        for (const TT of this._keys) this._setDefaultValue(TT)
      }
      _setDefaultValue(TT) {
        const oT = this._externalProperties?.[TT]?.type ?? typeof this[TT],
          IT = this._externalProperties?.[TT]?.default;
        switch (oT) {
          case "number":
            this[TT] = IT ?? 0;
            break;
          case "string":
            this[TT] = IT ?? "";
            break;
          default:
            this[TT] = IT ?? !1
        }
      }
      toString() {
        let TT = "";
        for (let oT = 0; oT < this._keys.length; oT++) {
          const IT = this._keys[oT],
            iT = this[IT];
          switch (typeof iT) {
            case "number":
            case "string":
              TT += "#define " + IT + " " + iT + "\n";
              break;
            default:
              iT && (TT += "#define " + IT + "\n")
          }
        }
        return TT
      }
    }
  },
  39170: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => XT,
      f: () => WT,
      i: () => kT
    });
    var iT, zT = IT(36118);

    function kT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const iT = oT(TT);
      if (!Number.isInteger(iT) || iT < 0 || iT > IT) throw new Error(`Invalid geometry object ID ${iT} for mesh "${TT.name}". Object IDs must be integers between 0 and 0x${IT.toString(16).toUpperCase()}.`);
      return iT
    }

    function WT(TT, oT) {
      const IT = oT(TT);
      if (!Number.isInteger(IT) || IT < 0 || IT > 255 || 0 !== IT && 0 === (63 & IT)) throw new Error(`Invalid geometry mesh-blending tag ${IT} for mesh "${TT.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return IT
    }! function(TT) {
      TT[TT.Zero = 0] = "Zero", TT[TT.One = 1] = "One", TT[TT.MaxViewZ = 2] = "MaxViewZ", TT[TT.NoClear = 3] = "NoClear"
    }(iT || (iT = {}));
    class XT {
      static CreateConfiguration(TT) {
        return XT._Configurations[TT] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: zT.b.Zero(),
          currentViewProjection: zT.b.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, XT._Configurations[TT]
      }
      static DeleteConfiguration(TT) {
        delete XT._Configurations[TT]
      }
      static GetConfiguration(TT) {
        return XT._Configurations[TT]
      }
      static _PrepareConfiguration(TT, oT, IT) {
        const iT = XT._Configurations[TT];
        iT._attachments = oT, iT._colorAttachments = IT, iT._mrtCount = oT.length;
        let zT = "#define PREPASS\n";
        for (const kT of XT.GeometryTextureDescriptions) {
          const TT = iT.defines[kT.defineIndex];
          void 0 !== TT && (zT += `#define ${kT.define}\n#define ${kT.defineIndex} ${TT}\n`)
        }
        iT.objectIdIsRedFormat && (zT += "#define PREPASS_OBJECT_ID_R8\n"), iT._defines = zT + `#define SCENE_MRT_COUNT ${oT.length}\n`
      }
      static _PrepareStringDefines(TT, oT) {
        const IT = XT._Configurations[TT];
        return !!IT?._defines && (oT.push(IT._defines), !0)
      }
      static _BindAttachmentsForEffect(TT, oT) {
        const IT = XT._Configurations[TT.currentRenderPassId];
        return !IT?._attachments || (TT.bindAttachments(oT._multiTarget ? IT._attachments : IT._colorAttachments), oT._multiTarget || void 0 !== IT.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(TT) {
        const oT = XT._Configurations[TT.currentRenderPassId];
        oT?._colorAttachments && TT.bindAttachments(oT._colorAttachments)
      }
      static _BindColorAttachments(TT) {
        const oT = XT._Configurations[TT.currentRenderPassId];
        return !oT?._colorAttachments || (TT.bindAttachments(oT._colorAttachments), void 0 !== oT.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(TT) {
        const oT = XT._Configurations[TT.currentRenderPassId];
        return !oT?._colorAttachments || void 0 !== oT.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(TT, oT) {
        const IT = XT._Configurations[TT.currentRenderPassId];
        if (!IT) return;
        const iT = TT.getAlphaMode(),
          zT = void 0 === IT.defines.PREPASS_COLOR_INDEX || 2 === iT || 1 === iT || 17 === iT;
        oT.setFloat("geometryZeroAlphaDiscard", zT ? 1 : 0)
      }
      static AddUniformsAndSamplers(TT, oT) {
        TT.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(TT, oT) {
        for (const IT of oT)
          if (IT.pR)
            for (const oT of IT.pR) oT._removeDrawWrapper(TT)
      }
      static PrepareDefines(TT, oT, IT) {
        if (!IT._arePrePassDirty) return;
        const iT = XT._Configurations[TT];
        if (!iT) return;
        IT.PREPASS = !0;
        let zT = 0;
        for (let kT = 0; kT < XT.GeometryTextureDescriptions.length; kT++) {
          const TT = XT.GeometryTextureDescriptions[kT],
            oT = TT.define,
            WT = TT.defineIndex,
            BT = iT.defines[WT];
          void 0 !== BT ? (IT[oT] = !0, IT[WT] = BT, zT++) : (IT[oT] = !1, delete IT[WT])
        }
        IT.PREPASS_OBJECT_ID_R8 = iT.objectIdIsRedFormat, IT.SCENE_MRT_COUNT = iT._mrtCount ?? zT, IT.BONES_VELOCITY_ENABLED = oT.useBones && oT.computeBonesUsingShaders && oT.skeleton && !oT.skeleton.isUsingTextureForMatrices && -1 === iT.excludedSkinnedMesh.indexOf(oT)
      }
      static Bind(TT, oT, IT, iT, zT) {
        const BT = XT._Configurations[TT];
        if (!BT) return;
        const FT = IT.pC(),
          ST = FT.Zc();
        if (BT.reverseCulling && ST.setStateCullFaceType(FT._mirroredCameraPosition ? zT.cullBackFaces : !zT.cullBackFaces), void 0 !== BT.defines.PREPASS_OBJECT_ID_INDEX) {
          const TT = BT.objectIdIsRedFormat ? 255 : 16777215;
          let iT = IT.uniqueId;
          if (BT.objectIdProvider) iT = kT(IT, BT.objectIdProvider, TT);
          else if (iT > TT) throw new Error(`Invalid geometry object ID ${iT} for mesh "${IT.name}". Object IDs must be integers between 0 and 0x${TT.toString(16).toUpperCase()}.`);
          oT.setFloat("objectId", iT)
        }
        if (void 0 !== BT.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const TT = BT.meshBlendTagProvider ? WT(IT, BT.meshBlendTagProvider) : IT.meshBlendingTag;
          oT.setInt("meshBlendTag", TT)
        }
        if (void 0 !== BT.defines.PREPASS_VELOCITY_INDEX || void 0 !== BT.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const TT = BT._currentWorldMatrices ?? (BT._currentWorldMatrices = {}),
            zT = BT._worldMatrixFrameIds ?? (BT._worldMatrixFrameIds = {});
          if (TT[IT.uniqueId] || (TT[IT.uniqueId] = iT.clone(), BT.previousWorldMatrices[IT.uniqueId] = iT.clone()), zT[IT.uniqueId] !== ST.frameId && (BT.previousWorldMatrices[IT.uniqueId].SIT(TT[IT.uniqueId]), zT[IT.uniqueId] = ST.frameId), TT[IT.uniqueId].SIT(iT), -1 === BT.lastUpdateFrameId ? (BT.lastUpdateFrameId = ST.frameId, BT.previousViewProjection.SIT(FT.getTransformMatrix()), BT.currentViewProjection.SIT(FT.getTransformMatrix())) : BT.currentViewProjection.updateFlag !== FT.getTransformMatrix().updateFlag ? (BT.lastUpdateFrameId = ST.frameId, BT.previousViewProjection.SIT(BT.currentViewProjection), BT.currentViewProjection.SIT(FT.getTransformMatrix())) : BT.lastUpdateFrameId !== ST.frameId && (BT.lastUpdateFrameId = ST.frameId, BT.previousViewProjection.SIT(BT.currentViewProjection)), oT.setMatrix("previousWorld", BT.previousWorldMatrices[IT.uniqueId]), oT.setMatrix("previousViewProjection", BT.previousViewProjection), IT.useBones && IT.computeBonesUsingShaders && IT.skeleton) {
            const TT = IT.skeleton;
            if (!TT.isUsingTextureForMatrices || -1 === oT.getUniformIndex("boneTextureInfo")) {
              const iT = TT.getTransformMatrices(IT);
              iT && (BT.previousBones[IT.uniqueId] || (BT.previousBones[IT.uniqueId] = iT.slice()), oT.setMatrices("mPreviousBones", BT.previousBones[IT.uniqueId]), BT.previousBones[IT.uniqueId].set(iT))
            }
          }
        }
      }
    }
    XT.GeometryTextureDescriptions = [{
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
    }], XT._Configurations = {}
  },
  39149: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => LT,
      e: () => cT
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(38647),
      WT = IT(38617);
    const XT = new RegExp("^([gimus]+)!");
    class BT {
      constructor(TT) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = TT, this._scene = TT.pC(), this._engine = this._scene.Zc()
      }
      _addPlugin(TT) {
        for (let iT = 0; iT < this._plugins.length; ++iT)
          if (this._plugins[iT].name === TT.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !TT.isCompatible(this._material.shaderLanguage)) throw `The plugin "${TT.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const oT = TT.getClassName();
        BT._MaterialPluginClassToMainDefine[oT] || (BT._MaterialPluginClassToMainDefine[oT] = "MATERIALPLUGIN_" + ++BT._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (TT, oT) => this._handlePluginEvent(TT, oT), this._plugins.push(TT), this._plugins.sort(((TT, oT) => TT.priority - oT.priority)), this._codeInjectionPoints = {};
        const IT = {};
        IT[BT._MaterialPluginClassToMainDefine[oT]] = {
          type: "boolean",
          default: !0
        };
        for (const iT of this._plugins) iT.collectDefines(IT), this._collectPointNames("vertex", iT.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", iT.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = IT, !0
      }
      _activatePlugin(TT) {
        -1 === this._activePlugins.indexOf(TT) && (this._activePlugins.push(TT), this._activePlugins.sort(((TT, oT) => TT.priority - oT.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), TT.registerForExtraEvents && (this._activePluginsForExtraEvents.push(TT), this._activePluginsForExtraEvents.sort(((TT, oT) => TT.priority - oT.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(TT) {
        for (let oT = 0; oT < this._plugins.length; ++oT)
          if (this._plugins[oT].name === TT) return this._plugins[oT];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(TT) {
        let oT = !0;
        for (const IT of this._activePlugins) oT = oT && IT.isReadyForSubMesh(TT.defines, this._scene, this._engine, TT.subMesh);
        TT.isReadyForSubMesh = oT
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(TT) {
        for (const oT of this._activePlugins) oT.prepareDefinesBeforeAttributes(TT.defines, this._scene, TT.mesh)
      }
      _handlePluginEventPrepareDefines(TT) {
        for (const oT of this._activePlugins) oT.prepareDefines(TT.defines, this._scene, TT.mesh)
      }
      _handlePluginEventHardBindForSubMesh(TT) {
        for (const oT of this._activePluginsForExtraEvents) oT.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, TT.subMesh)
      }
      _handlePluginEventBindForSubMesh(TT) {
        for (const oT of this._activePlugins) oT.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, TT.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(TT) {
        let oT = !1;
        for (const IT of this._activePluginsForExtraEvents)
          if (oT = IT.hasRenderTargetTextures(), oT) break;
        TT.hasRenderTargetTextures = oT
      }
      _handlePluginEventFillRenderTargetTextures(TT) {
        for (const oT of this._activePluginsForExtraEvents) oT.fillRenderTargetTextures(TT.renderTargets)
      }
      _handlePluginEvent(TT, oT) {
        switch (TT) {
          case 512: {
            const TT = oT;
            for (const oT of this._activePlugins) oT.getActiveTextures(TT.activeTextures);
            break
          }
          case 256: {
            const TT = oT;
            for (const oT of this._activePlugins) oT.getAnimatables(TT.animatables);
            break
          }
          case 1024: {
            const TT = oT;
            let IT = !1;
            for (const oT of this._activePlugins)
              if (IT = oT.hasTexture(TT.texture), IT) break;
            TT.hasTexture = IT;
            break
          }
          case 2: {
            const TT = oT;
            for (const oT of this._plugins) oT.dispose(TT.forceDisposeTextures);
            break
          }
          case 4:
            oT.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const TT = oT;
            for (const oT of this._activePlugins) TT.fallbackRank = oT.addFallbacks(TT.defines, TT.fallbacks, TT.fallbackRank), oT.getAttributes(TT.attributes, this._scene, TT.mesh);
            this._uniformList.length > 0 && TT.uniforms.push(...this._uniformList), this._samplerList.length > 0 && TT.samplers.push(...this._samplerList), this._uboList.length > 0 && TT.uniformBuffersNames.push(...this._uboList), TT.customCode = this._injectCustomCode(TT, TT.customCode);
            break
          }
          case 8: {
            const TT = oT;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const IT = 1 === this._material.shaderLanguage;
            for (const oT of this._plugins) {
              const iT = oT.getUniforms(this._material.shaderLanguage);
              if (iT) {
                if (iT.ubo)
                  for (const oT of iT.ubo) {
                    if (oT.size && oT.type) {
                      const iT = oT.arraySize ?? 0;
                      if (TT.ubo.addUniform(oT.name, oT.size, iT), IT) {
                        let TT;
                        switch (oT.type) {
                          case "mat4":
                            TT = "mat4x4f";
                            break;
                          case "float":
                            TT = "f32";
                            break;
                          default:
                            TT = `${oT.type}f`
                        }
                        this._uboDeclaration += iT > 0 ? `uniform ${oT.name}: array<${TT}, ${iT}>;\n` : `uniform ${oT.name}: ${TT};\n`
                      } else this._uboDeclaration += `${oT.type} ${oT.name}${iT>0?`[${iT}]`:""};\n`
                    }
                    this._uniformList.push(oT.name)
                  }
                iT.vertex && (this._vertexDeclaration += iT.vertex + "\n"), iT.fragment && (this._fragmentDeclaration += iT.fragment + "\n"), iT.externalUniforms && this._uniformList.push(...iT.externalUniforms)
              }
              oT.getSamplers(this._samplerList), oT.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(TT, oT) {
        if (oT)
          for (const IT in oT) this._codeInjectionPoints[TT] || (this._codeInjectionPoints[TT] = {}), this._codeInjectionPoints[TT][IT] = !0
      }
      _injectCustomCode(TT, oT) {
        return (IT, iT) => {
          oT && (iT = oT(IT, iT)), this._uboDeclaration && (iT = iT.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (iT = iT.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (iT = iT.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const zT = this._codeInjectionPoints?.[IT];
          if (!zT) return iT;
          let BT = null;
          for (let oT in zT) {
            let zT = "";
            for (const iT of this._activePlugins) {
              const XT = this._material.shaderLanguage;
              let FT = iT.getCustomCode(IT, XT)?.[oT];
              FT && (iT.resolveIncludes && (null === BT && (BT = {
                defines: [],
                indexParameters: TT.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: WT.c.GetShadersRepository(XT),
                includesShadersStore: WT.c.GetIncludesShadersStore(XT),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                lIT: this._engine.lIT,
                processCodeAfterIncludes: void 0
              }), BT.isFragment = "fragment" === IT, (0, kT.h)(FT, BT, (TT => FT = TT))), zT += FT + "\n")
            }
            if (zT.length > 0)
              if ("!" === oT.charAt(0)) {
                oT = oT.substring(1);
                let TT = "g";
                if ("!" === oT.charAt(0)) TT = "", oT = oT.substring(1);
                else {
                  const IT = XT.exec(oT);
                  IT && IT.length >= 2 && (TT = IT[1], oT = oT.substring(TT.length + 1))
                }
                TT.indexOf("g") < 0 && (TT += "g");
                const IT = new RegExp(oT, TT);
                let kT = IT.exec(iT);
                for (; null !== kT;) {
                  const {
                    index: TT
                  } = kT, oT = FT(zT, kT);
                  iT = iT.substring(0, TT) + oT + iT.substring(TT + kT[0].length), IT.lastIndex = TT + oT.length, kT = IT.exec(iT)
                }
              } else {
                const TT = "#define " + oT;
                iT = iT.replace(TT, "\n" + zT + "\n" + TT)
              }
          }
          return iT
        }
      }
    }
    BT._MaterialPluginClassToMainDefine = {}, BT._MaterialPluginCounter = 0;

    function FT(TT, oT) {
      return TT.replace(/\$(\d+)/g, ((TT, IT) => {
        const iT = Number(IT);
        return iT < oT.length ? oT[iT] : ""
      }))
    }
    var ST = IT(38799),
      DT = IT(36166);
    let LT = (() => {
        var TT;
        let oT, IT, kT, WT, XT = [],
          FT = [],
          DT = [],
          LT = [],
          xT = [],
          cT = [],
          KT = [],
          MT = [];
        return TT = class {
          isCompatible(TT) {
            return 0 === TT
          }
          _enable(TT) {
            TT && this._pluginManager._activatePlugin(this)
          }
          constructor(TT, oT, IT, zT) {
            let kT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              WT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              ST = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, iT.j)(this, XT, void 0), this.priority = ((0, iT.j)(this, FT), (0, iT.j)(this, DT, 500)), this.resolveIncludes = ((0, iT.j)(this, LT), (0, iT.j)(this, xT, !1)), this.registerForExtraEvents = ((0, iT.j)(this, cT), (0, iT.j)(this, KT, !1)), this.doNotSerialize = ((0, iT.j)(this, MT), !1), this._material = TT, this.name = oT, this.priority = IT, this.resolveIncludes = ST, TT.pluginManager || (TT.pluginManager = new BT(TT), TT.bC.add((() => {
              TT.pluginManager = void 0
            }))), this._pluginDefineNames = zT, this._pluginManager = TT.pluginManager, kT && this._pluginManager._addPlugin(this), WT && this._enable(!0), this.markAllDefinesAsDirty = TT._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(TT, oT, IT, iT) {
            return !0
          }
          hardBindForSubMesh(TT, oT, IT, iT) {}
          bindForSubMesh(TT, oT, IT, iT) {}
          dispose(TT) {}
          getCustomCode(TT) {
            return null
          }
          collectDefines(TT) {
            if (this._pluginDefineNames)
              for (const oT of Object.keys(this._pluginDefineNames)) {
                if ("_" === oT[0]) continue;
                const IT = typeof this._pluginDefineNames[oT];
                TT[oT] = {
                  type: "number" === IT ? "number" : "string" === IT ? "string" : "boolean" === IT ? "boolean" : "object",
                  default: this._pluginDefineNames[oT]
                }
              }
          }
          prepareDefinesBeforeAttributes(TT, oT, IT) {}
          prepareDefines(TT, oT, IT) {}
          hasTexture(TT) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(TT) {}
          getActiveTextures(TT) {}
          getAnimatables(TT) {}
          addFallbacks(TT, oT, IT) {
            return IT
          }
          getSamplers(TT) {}
          getAttributes(TT, oT, IT) {}
          getUniformBuffersNames(TT) {}
          getUniforms() {
            return {}
          }
          copyTo(TT) {
            ST.c.Clone((() => TT), this)
          }
          serialize() {
            return ST.c.Serialize(this)
          }
          parse(TT, oT, IT) {
            ST.c.Parse((() => this), TT, oT, IT)
          }
        }, (() => {
          const BT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          oT = [(0, zT.P)()], IT = [(0, zT.P)()], kT = [(0, zT.P)()], WT = [(0, zT.P)()], (0, iT.h)(null, null, oT, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: TT => "name" in TT,
              get: TT => TT.name,
              set: (TT, oT) => {
                TT.name = oT
              }
            },
            metadata: BT
          }, XT, FT), (0, iT.h)(null, null, IT, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: TT => "priority" in TT,
              get: TT => TT.priority,
              set: (TT, oT) => {
                TT.priority = oT
              }
            },
            metadata: BT
          }, DT, LT), (0, iT.h)(null, null, kT, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: TT => "resolveIncludes" in TT,
              get: TT => TT.resolveIncludes,
              set: (TT, oT) => {
                TT.resolveIncludes = oT
              }
            },
            metadata: BT
          }, xT, cT), (0, iT.h)(null, null, WT, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: TT => "registerForExtraEvents" in TT,
              get: TT => TT.registerForExtraEvents,
              set: (TT, oT) => {
                TT.registerForExtraEvents = oT
              }
            },
            metadata: BT
          }, KT, MT), BT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: BT
          })
        })(), TT
      })(),
      xT = !1;

    function cT() {
      xT || (xT = !0, (0, DT.h)("BABYLON.MaterialPluginBase", LT))
    }
  },
  39049: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    class iT {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(TT) {
        TT.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(TT) {}
      bindForSubMesh(TT, oT, IT, iT, zT) {
        if (oT.prePassRenderer && oT.prePassRenderer.enabled && oT.prePassRenderer.currentRTisSceneRT && (-1 !== oT.prePassRenderer.getIndex(2) || -1 !== oT.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[IT.uniqueId] || (this.previousWorldMatrices[IT.uniqueId] = iT.clone()), this.previousViewProjection || (this.previousViewProjection = oT.getTransformMatrix().clone(), this.currentViewProjection = oT.getTransformMatrix().clone());
          const zT = oT.Zc();
          this.currentViewProjection.updateFlag !== oT.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = zT.frameId, this.previousViewProjection.SIT(this.currentViewProjection), this.currentViewProjection.SIT(oT.getTransformMatrix())) : this._lastUpdateFrameId !== zT.frameId && (this._lastUpdateFrameId = zT.frameId, this.previousViewProjection.SIT(this.currentViewProjection)), TT.setMatrix("previousWorld", this.previousWorldMatrices[IT.uniqueId]), TT.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[IT.uniqueId] = iT.clone()
        }
      }
    }
  },
  39175: (TT, oT, IT) => {
    function iT(TT) {
      return class extends TT {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    IT.d(oT, {
      e: () => iT
    })
  },
  39038: (TT, oT, IT) => {
    IT.d(oT, {
      StandardMaterial: () => iT.d
    });
    var iT = IT(39046);
    (0, iT.c)()
  },
  39046: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => QT,
      d: () => aT
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(38897),
      WT = IT(38882),
      XT = IT(36177),
      BT = IT(38923),
      FT = IT(39049),
      ST = IT(39057),
      DT = IT(38899),
      LT = IT(39068),
      xT = IT(39063),
      cT = IT(39131),
      KT = IT(39125),
      MT = IT(39135),
      rT = IT(39143),
      AT = IT(39117),
      gT = IT(39152),
      hT = IT(39113),
      wT = IT(38799),
      mT = IT(39161),
      eT = IT(39170),
      RT = IT(39173),
      uT = IT(39175),
      vT = IT(39184),
      ET = IT(36166),
      fT = IT(38643);
    const CT = {
      effect: null,
      subMesh: null
    };
    class jT extends((0, uT.e)((0, RT.c)(xT.d))) {}
    class JT extends((0, ST.h)(jT)) {
      constructor(TT) {
        super(TT), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class UT extends((0, vT.d)(cT.e)) {}
    let aT = (() => {
        var TT, oT, ST, xT, RT, uT, vT, ET, fT, jT, aT, YT, QT, OT, HT, nT, qT, ZT, lT, sT, tT, GT, pT, bT, yT, NT, PT, dT, VT, To, oo, Io, io;
        let zo, ko, Wo, Xo, Bo, Fo, So, Do, Lo, xo, co, Ko, Mo, ro, Ao, go, ho, wo, mo, eo, Ro, uo, vo, Eo, fo, Co, jo, Jo, Uo, ao, Yo, Qo, Oo, Ho, no, qo, Zo, so, to, Go, po, bo, yo, No, Po, Vo, TI, oI, II, iI, zI, kI, WI, XI, BI, FI, SI, DI, LI, xI, cI, KI, MI, rI, AI, gI, hI, wI, mI, eI, RI, uI, vI, EI = UT,
          fI = [],
          CI = [],
          jI = [],
          JI = [],
          UI = [],
          aI = [],
          YI = [],
          QI = [],
          OI = [],
          HI = [],
          nI = [],
          qI = [],
          ZI = [],
          lI = [],
          sI = [],
          tI = [],
          GI = [],
          pI = [],
          bI = [],
          yI = [],
          NI = [],
          PI = [],
          dI = [],
          VI = [],
          Ti = [],
          oi = [],
          Ii = [],
          ii = [],
          zi = [],
          ki = [],
          Wi = [],
          Xi = [],
          Bi = [],
          Fi = [],
          Si = [],
          Di = [],
          Li = [],
          xi = [],
          ci = [],
          Ki = [],
          Mi = [],
          ri = [],
          Ai = [],
          gi = [],
          wi = [],
          mi = [],
          ei = [],
          Ri = [],
          ui = [],
          vi = [],
          Ei = [],
          fi = [],
          Ci = [],
          ji = [],
          Ji = [],
          Ui = [],
          ai = [],
          Yi = [],
          Qi = [],
          Oi = [],
          Hi = [],
          ni = [],
          qi = [],
          Zi = [],
          li = [],
          si = [],
          ti = [],
          Gi = [],
          bi = [],
          yi = [],
          Ni = [],
          Pi = [],
          di = [],
          Vi = [],
          Tz = [],
          oz = [],
          Iz = [],
          iz = [],
          zz = [],
          kz = [],
          Wz = [],
          Xz = [],
          Bz = [],
          Fz = [],
          Sz = [],
          Dz = [],
          Lz = [],
          xz = [],
          cz = [],
          Kz = [],
          Mz = [],
          rz = [],
          Az = [],
          gz = [],
          hz = [],
          wz = [],
          mz = [],
          ez = [],
          Rz = [],
          uz = [],
          vz = [],
          Ez = [],
          fz = [],
          Cz = [],
          jz = [],
          Jz = [],
          Uz = [],
          az = [],
          Yz = [],
          Qz = [],
          Oz = [],
          Hz = [],
          nz = [],
          qz = [],
          Zz = [],
          lz = [],
          sz = [],
          tz = [],
          Gz = [],
          pz = [],
          bz = [],
          yz = [],
          Nz = [],
          Pz = [],
          dz = [],
          Vz = [],
          Tk = [],
          Ik = [],
          ik = [],
          zk = [],
          kk = [],
          Wk = [],
          Xk = [],
          Bk = [],
          Fk = [],
          Sk = [],
          Dk = [],
          Lk = [],
          xk = [],
          ck = [],
          Kk = [],
          Mk = [],
          rk = [],
          Ak = [],
          gk = [],
          hk = [];
        return TT = class extends EI {
          get diffuseTexture() {
            return (0, iT.b)(this, oT, "f")
          }
          set diffuseTexture(TT) {
            (0, iT.e)(this, oT, TT, "f")
          }
          get ambientTexture() {
            return (0, iT.b)(this, ST, "f")
          }
          set ambientTexture(TT) {
            (0, iT.e)(this, ST, TT, "f")
          }
          get opacityTexture() {
            return (0, iT.b)(this, xT, "f")
          }
          set opacityTexture(TT) {
            (0, iT.e)(this, xT, TT, "f")
          }
          get reflectionTexture() {
            return (0, iT.b)(this, RT, "f")
          }
          set reflectionTexture(TT) {
            (0, iT.e)(this, RT, TT, "f")
          }
          get emissiveTexture() {
            return (0, iT.b)(this, uT, "f")
          }
          set emissiveTexture(TT) {
            (0, iT.e)(this, uT, TT, "f")
          }
          get specularTexture() {
            return (0, iT.b)(this, vT, "f")
          }
          set specularTexture(TT) {
            (0, iT.e)(this, vT, TT, "f")
          }
          get bumpTexture() {
            return (0, iT.b)(this, ET, "f")
          }
          set bumpTexture(TT) {
            (0, iT.e)(this, ET, TT, "f")
          }
          get lightmapTexture() {
            return (0, iT.b)(this, fT, "f")
          }
          set lightmapTexture(TT) {
            (0, iT.e)(this, fT, TT, "f")
          }
          get refractionTexture() {
            return (0, iT.b)(this, jT, "f")
          }
          set refractionTexture(TT) {
            (0, iT.e)(this, jT, TT, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, iT.b)(this, aT, "f")
          }
          set useAlphaFromDiffuseTexture(TT) {
            (0, iT.e)(this, aT, TT, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, iT.b)(this, YT, "f")
          }
          set useEmissiveAsIllumination(TT) {
            (0, iT.e)(this, YT, TT, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, iT.b)(this, QT, "f")
          }
          set linkEmissiveWithDiffuse(TT) {
            (0, iT.e)(this, QT, TT, "f")
          }
          get useSpecularOverAlpha() {
            return (0, iT.b)(this, OT, "f")
          }
          set useSpecularOverAlpha(TT) {
            (0, iT.e)(this, OT, TT, "f")
          }
          get useReflectionOverAlpha() {
            return (0, iT.b)(this, HT, "f")
          }
          set useReflectionOverAlpha(TT) {
            (0, iT.e)(this, HT, TT, "f")
          }
          get disableLighting() {
            return (0, iT.b)(this, nT, "f")
          }
          set disableLighting(TT) {
            (0, iT.e)(this, nT, TT, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, iT.b)(this, qT, "f")
          }
          set useObjectSpaceNormalMap(TT) {
            (0, iT.e)(this, qT, TT, "f")
          }
          get useParallax() {
            return (0, iT.b)(this, ZT, "f")
          }
          set useParallax(TT) {
            (0, iT.e)(this, ZT, TT, "f")
          }
          get useParallaxOcclusion() {
            return (0, iT.b)(this, lT, "f")
          }
          set useParallaxOcclusion(TT) {
            (0, iT.e)(this, lT, TT, "f")
          }
          get roughness() {
            return (0, iT.b)(this, sT, "f")
          }
          set roughness(TT) {
            (0, iT.e)(this, sT, TT, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, iT.b)(this, tT, "f")
          }
          set useLightmapAsShadowmap(TT) {
            (0, iT.e)(this, tT, TT, "f")
          }
          get diffuseFresnelParameters() {
            return (0, iT.b)(this, GT, "f")
          }
          set diffuseFresnelParameters(TT) {
            (0, iT.e)(this, GT, TT, "f")
          }
          get opacityFresnelParameters() {
            return (0, iT.b)(this, pT, "f")
          }
          set opacityFresnelParameters(TT) {
            (0, iT.e)(this, pT, TT, "f")
          }
          get reflectionFresnelParameters() {
            return (0, iT.b)(this, bT, "f")
          }
          set reflectionFresnelParameters(TT) {
            (0, iT.e)(this, bT, TT, "f")
          }
          get refractionFresnelParameters() {
            return (0, iT.b)(this, yT, "f")
          }
          set refractionFresnelParameters(TT) {
            (0, iT.e)(this, yT, TT, "f")
          }
          get emissiveFresnelParameters() {
            return (0, iT.b)(this, NT, "f")
          }
          set emissiveFresnelParameters(TT) {
            (0, iT.e)(this, NT, TT, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, iT.b)(this, PT, "f")
          }
          set useReflectionFresnelFromSpecular(TT) {
            (0, iT.e)(this, PT, TT, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, iT.b)(this, dT, "f")
          }
          set useGlossinessFromSpecularMapAlpha(TT) {
            (0, iT.e)(this, dT, TT, "f")
          }
          get maxSimultaneousLights() {
            return (0, iT.b)(this, VT, "f")
          }
          set maxSimultaneousLights(TT) {
            (0, iT.e)(this, VT, TT, "f")
          }
          get invertNormalMapX() {
            return (0, iT.b)(this, To, "f")
          }
          set invertNormalMapX(TT) {
            (0, iT.e)(this, To, TT, "f")
          }
          get invertNormalMapY() {
            return (0, iT.b)(this, oo, "f")
          }
          set invertNormalMapY(TT) {
            (0, iT.e)(this, oo, TT, "f")
          }
          get twoSidedLighting() {
            return (0, iT.b)(this, Io, "f")
          }
          set twoSidedLighting(TT) {
            (0, iT.e)(this, Io, TT, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, iT.b)(this, io, "f")
          }
          set applyDecalMapAfterDetailMap(TT) {
            (0, iT.e)(this, io, TT, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(IT, zT) {
            super(IT, zT, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || TT.ForceGLSL), this._diffuseTexture = (0, iT.j)(this, fI, null), oT.set(this, ((0, iT.j)(this, CI), (0, iT.j)(this, jI, void 0))), this._ambientTexture = ((0, iT.j)(this, JI), (0, iT.j)(this, UI, null)), ST.set(this, ((0, iT.j)(this, aI), (0, iT.j)(this, YI, void 0))), this._opacityTexture = ((0, iT.j)(this, QI), (0, iT.j)(this, OI, null)), xT.set(this, ((0, iT.j)(this, HI), (0, iT.j)(this, nI, void 0))), this._reflectionTexture = ((0, iT.j)(this, qI), (0, iT.j)(this, ZI, null)), RT.set(this, ((0, iT.j)(this, lI), (0, iT.j)(this, sI, void 0))), this._emissiveTexture = ((0, iT.j)(this, tI), (0, iT.j)(this, GI, null)), uT.set(this, ((0, iT.j)(this, pI), (0, iT.j)(this, bI, void 0))), this._specularTexture = ((0, iT.j)(this, yI), (0, iT.j)(this, NI, null)), vT.set(this, ((0, iT.j)(this, PI), (0, iT.j)(this, dI, void 0))), this._bumpTexture = ((0, iT.j)(this, VI), (0, iT.j)(this, Ti, null)), ET.set(this, ((0, iT.j)(this, oi), (0, iT.j)(this, Ii, void 0))), this._lightmapTexture = ((0, iT.j)(this, ii), (0, iT.j)(this, zi, null)), fT.set(this, ((0, iT.j)(this, ki), (0, iT.j)(this, Wi, void 0))), this._refractionTexture = ((0, iT.j)(this, Xi), (0, iT.j)(this, Bi, null)), jT.set(this, ((0, iT.j)(this, Fi), (0, iT.j)(this, Si, void 0))), this.ambientColor = ((0, iT.j)(this, Di), (0, iT.j)(this, Li, new XT.e(0, 0, 0))), this.diffuseColor = ((0, iT.j)(this, xi), (0, iT.j)(this, ci, new XT.e(1, 1, 1))), this.specularColor = ((0, iT.j)(this, Ki), (0, iT.j)(this, Mi, new XT.e(1, 1, 1))), this.emissiveColor = ((0, iT.j)(this, ri), (0, iT.j)(this, Ai, new XT.e(0, 0, 0))), this.specularPower = ((0, iT.j)(this, gi), (0, iT.j)(this, wi, 64)), this._useAlphaFromDiffuseTexture = ((0, iT.j)(this, mi), (0, iT.j)(this, ei, !1)), aT.set(this, ((0, iT.j)(this, Ri), (0, iT.j)(this, ui, void 0))), this._useEmissiveAsIllumination = ((0, iT.j)(this, vi), (0, iT.j)(this, Ei, !1)), YT.set(this, ((0, iT.j)(this, fi), (0, iT.j)(this, Ci, void 0))), this._linkEmissiveWithDiffuse = ((0, iT.j)(this, ji), (0, iT.j)(this, Ji, !1)), QT.set(this, ((0, iT.j)(this, Ui), (0, iT.j)(this, ai, void 0))), this._useSpecularOverAlpha = ((0, iT.j)(this, Yi), (0, iT.j)(this, Qi, !1)), OT.set(this, ((0, iT.j)(this, Oi), (0, iT.j)(this, Hi, void 0))), this._useReflectionOverAlpha = ((0, iT.j)(this, ni), (0, iT.j)(this, qi, !1)), HT.set(this, ((0, iT.j)(this, Zi), (0, iT.j)(this, li, void 0))), this._disableLighting = ((0, iT.j)(this, si), (0, iT.j)(this, ti, !1)), nT.set(this, ((0, iT.j)(this, Gi), (0, iT.j)(this, bi, void 0))), this._useObjectSpaceNormalMap = ((0, iT.j)(this, yi), (0, iT.j)(this, Ni, !1)), qT.set(this, ((0, iT.j)(this, Pi), (0, iT.j)(this, di, void 0))), this._useParallax = ((0, iT.j)(this, Vi), (0, iT.j)(this, Tz, !1)), ZT.set(this, ((0, iT.j)(this, oz), (0, iT.j)(this, Iz, void 0))), this._useParallaxOcclusion = ((0, iT.j)(this, iz), (0, iT.j)(this, zz, !1)), lT.set(this, ((0, iT.j)(this, kz), (0, iT.j)(this, Wz, void 0))), this.parallaxScaleBias = ((0, iT.j)(this, Xz), (0, iT.j)(this, Bz, .05)), this._roughness = ((0, iT.j)(this, Fz), (0, iT.j)(this, Sz, 0)), sT.set(this, ((0, iT.j)(this, Dz), (0, iT.j)(this, Lz, void 0))), this.indexOfRefraction = ((0, iT.j)(this, xz), (0, iT.j)(this, cz, .98)), this.invertRefractionY = ((0, iT.j)(this, Kz), (0, iT.j)(this, Mz, !0)), this.alphaCutOff = ((0, iT.j)(this, rz), (0, iT.j)(this, Az, .4)), this._useLightmapAsShadowmap = ((0, iT.j)(this, gz), (0, iT.j)(this, hz, !1)), tT.set(this, ((0, iT.j)(this, wz), (0, iT.j)(this, mz, void 0))), this._diffuseFresnelParameters = ((0, iT.j)(this, ez), (0, iT.j)(this, Rz, void 0)), GT.set(this, ((0, iT.j)(this, uz), (0, iT.j)(this, vz, void 0))), this._opacityFresnelParameters = ((0, iT.j)(this, Ez), (0, iT.j)(this, fz, void 0)), pT.set(this, ((0, iT.j)(this, Cz), (0, iT.j)(this, jz, void 0))), this._reflectionFresnelParameters = ((0, iT.j)(this, Jz), (0, iT.j)(this, Uz, void 0)), bT.set(this, ((0, iT.j)(this, az), (0, iT.j)(this, Yz, void 0))), this._refractionFresnelParameters = ((0, iT.j)(this, Qz), (0, iT.j)(this, Oz, void 0)), yT.set(this, ((0, iT.j)(this, Hz), (0, iT.j)(this, nz, void 0))), this._emissiveFresnelParameters = ((0, iT.j)(this, qz), (0, iT.j)(this, Zz, void 0)), NT.set(this, ((0, iT.j)(this, lz), (0, iT.j)(this, sz, void 0))), this._useReflectionFresnelFromSpecular = ((0, iT.j)(this, tz), (0, iT.j)(this, Gz, !1)), PT.set(this, ((0, iT.j)(this, pz), (0, iT.j)(this, bz, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, iT.j)(this, yz), (0, iT.j)(this, Nz, !1)), dT.set(this, ((0, iT.j)(this, Pz), (0, iT.j)(this, dz, void 0))), this._maxSimultaneousLights = ((0, iT.j)(this, Vz), (0, iT.j)(this, Tk, 4)), VT.set(this, ((0, iT.j)(this, Ik), (0, iT.j)(this, ik, void 0))), this._invertNormalMapX = ((0, iT.j)(this, zk), (0, iT.j)(this, kk, !1)), To.set(this, ((0, iT.j)(this, Wk), (0, iT.j)(this, Xk, void 0))), this._invertNormalMapY = ((0, iT.j)(this, Bk), (0, iT.j)(this, Fk, !1)), oo.set(this, ((0, iT.j)(this, Sk), (0, iT.j)(this, Dk, void 0))), this._twoSidedLighting = ((0, iT.j)(this, Lk), (0, iT.j)(this, xk, !1)), Io.set(this, ((0, iT.j)(this, ck), (0, iT.j)(this, Kk, void 0))), this._applyDecalMapAfterDetailMap = ((0, iT.j)(this, Mk), (0, iT.j)(this, rk, !1)), io.set(this, ((0, iT.j)(this, Ak), (0, iT.j)(this, gk, void 0))), this._vertexPullingMetadata = ((0, iT.j)(this, hk), null), this._renderTargets = new kT.f(16), this._globalAmbientColor = new XT.e(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new rT.d(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new FT.d, this.getRenderTargetTextures = () => (this._renderTargets.reset(), TT.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), TT.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
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
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === LT.c.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== LT.c.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(oT, IT) {
            let iT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const zT = IT._drawWrapper;
            if (zT.effect && this.isFrozen && zT._wasPreviouslyReady && zT._wasPreviouslyUsingInstances === iT) return !0;
            IT.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), IT.materialDefines = new JT(this._eventInfo.defineNames));
            const kT = this.pC(),
              WT = IT.materialDefines;
            if (this._isReadyForSubMesh(IT)) return !0;
            const XT = kT.Zc();
            if (WT._needNormals = (0, hT.M)(kT, oT, WT, !0, this._maxSimultaneousLights, this._disableLighting), !(0, hT.c)(kT, oT, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, hT.V)(kT, WT);
            const ST = this.needAlphaBlendingForMesh(oT) && this.pC().useOrderIndependentTransparency;
            if ((0, hT.X)(kT, WT, this.canRenderToMRT && !ST), (0, hT.W)(kT, WT, ST), eT.d.PrepareDefines(XT.currentRenderPassId, oT, WT), WT._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, WT._needUVs = !1;
              for (let TT = 1; TT <= 6; ++TT) WT["MAINUV" + TT] = !1;
              if (kT.texturesEnabled) {
                if (WT.DIFFUSEDIRECTUV = 0, WT.BUMPDIRECTUV = 0, WT.AMBIENTDIRECTUV = 0, WT.OPACITYDIRECTUV = 0, WT.EMISSIVEDIRECTUV = 0, WT.SPECULARDIRECTUV = 0, WT.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && TT.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, hT.Q)(this._diffuseTexture, WT, "DIFFUSE")
                } else WT.DIFFUSE = !1;
                if (this._ambientTexture && TT.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, hT.Q)(this._ambientTexture, WT, "AMBIENT")
                } else WT.AMBIENT = !1;
                if (this._opacityTexture && TT.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, hT.Q)(this._opacityTexture, WT, "OPACITY"), WT.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else WT.OPACITY = !1;
                if (this._reflectionTexture && TT.ReflectionTextureEnabled ? (WT.ROUGHNESS = this._roughness > 0, WT.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (WT.ROUGHNESS = !1, WT.REFLECTIONOVERALPHA = !1), !(0, hT.J)(kT, this._reflectionTexture, WT)) return !1;
                if (this._emissiveTexture && TT.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, hT.Q)(this._emissiveTexture, WT, "EMISSIVE")
                } else WT.EMISSIVE = !1;
                if (this._lightmapTexture && TT.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, hT.Q)(this._lightmapTexture, WT, "LIGHTMAP"), WT.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, WT.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else WT.LIGHTMAP = !1;
                if (this._specularTexture && TT.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, hT.Q)(this._specularTexture, WT, "SPECULAR"), WT.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else WT.SPECULAR = !1;
                if (kT.Zc().getCaps().standardDerivatives && this._bumpTexture && TT.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, hT.Q)(this._bumpTexture, WT, "BUMP"), WT.PARALLAX = this._useParallax, WT.PARALLAX_RHS = kT.useRightHandedSystem, WT.PARALLAXOCCLUSION = this._useParallaxOcclusion, WT.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else WT.BUMP = !1, WT.PARALLAX = !1, WT.PARALLAX_RHS = !1, WT.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && TT.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  WT._needUVs = !0, WT.REFRACTION = !0, WT.REFRACTIONMAP_3D = this._refractionTexture.isCube, WT.RGBDREFRACTION = this._refractionTexture.isRGBD, WT.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else WT.REFRACTION = !1;
                WT.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else WT.DIFFUSE = !1, WT.AMBIENT = !1, WT.OPACITY = !1, WT.REFLECTION = !1, WT.EMISSIVE = !1, WT.LIGHTMAP = !1, WT.BUMP = !1, WT.REFRACTION = !1;
              WT.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), WT.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, WT.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, WT.SPECULAROVERALPHA = this._useSpecularOverAlpha, WT.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, WT.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, WT.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(oT), WT.TEXTURE_REPETITION_MODE = XT.version > 1 || XT.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = WT, this._eventInfo.subMesh = IT, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (WT._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(WT), WT.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, WT.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (WT._areFresnelDirty && (TT.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (WT.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, WT.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, WT.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, WT.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, WT.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, WT.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, WT._needNormals = !0, WT.FRESNEL = !0) : WT.FRESNEL = !1), WT.AREALIGHTUSED || WT.CLUSTLIGHT_BATCH)
              for (let TT = 0; TT < oT.lightSources.length; TT++)
                if (!oT.lightSources[TT]._isReady()) return !1;
            (0, hT.U)(oT, kT, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(oT), WT, this._applyDecalMapAfterDetailMap, this._useVertexPulling, IT.getRenderingMesh(), this._isVertexOutputInvariant), (0, hT.I)(kT, XT, this, WT, iT, null, IT.getRenderingMesh().hasThinInstances), this._eventInfo.defines = WT, this._eventInfo.mesh = oT, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, hT.H)(oT, WT, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let LT = !1;
            if (WT.isDirty) {
              const iT = WT._areLightsDisposed;
              WT.markAsProcessed();
              const zT = new MT.e;
              WT.REFLECTION && zT.addFallback(0, "REFLECTION"), WT.SPECULAR && zT.addFallback(0, "SPECULAR"), WT.BUMP && zT.addFallback(0, "BUMP"), WT.PARALLAX && zT.addFallback(1, "PARALLAX"), WT.PARALLAX_RHS && zT.addFallback(1, "PARALLAX_RHS"), WT.PARALLAXOCCLUSION && zT.addFallback(0, "PARALLAXOCCLUSION"), WT.SPECULAROVERALPHA && zT.addFallback(0, "SPECULAROVERALPHA"), WT.FOG && zT.addFallback(1, "FOG"), WT.POINTSIZE && zT.addFallback(0, "POINTSIZE"), WT.LOGARITHMICDEPTH && zT.addFallback(0, "LOGARITHMICDEPTH"), (0, hT.x)(WT, zT, this._maxSimultaneousLights), WT.SPECULARTERM && zT.addFallback(0, "SPECULARTERM"), WT.DIFFUSEFRESNEL && zT.addFallback(1, "DIFFUSEFRESNEL"), WT.OPACITYFRESNEL && zT.addFallback(2, "OPACITYFRESNEL"), WT.REFLECTIONFRESNEL && zT.addFallback(3, "REFLECTIONFRESNEL"), WT.EMISSIVEFRESNEL && zT.addFallback(4, "EMISSIVEFRESNEL"), WT.FRESNEL && zT.addFallback(4, "FRESNEL"), WT.MULTIVIEW && zT.addFallback(0, "MULTIVIEW");
              const ST = [BT.i.PositionKind];
              WT.NORMAL && ST.push(BT.i.NormalKind), WT.TANGENT && ST.push(BT.i.TangentKind);
              for (let TT = 1; TT <= 6; ++TT) WT["UV" + TT] && ST.push(`uv${1===TT?"":TT}`);
              WT.VERTEXCOLOR && ST.push(BT.i.ColorKind), (0, hT.C)(ST, oT, WT, zT), (0, hT.D)(ST, WT), (0, hT.F)(ST, oT, WT), (0, hT.y)(ST, oT, WT);
              let xT = "default";
              const cT = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                KT = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, hT.$)(cT, KT, !1);
              const rT = ["Material", "Scene", "Mesh"],
                wT = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: WT.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = zT, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = WT, this._eventInfo.uniforms = cT, this._eventInfo.attributes = ST, this._eventInfo.samplers = KT, this._eventInfo.uniformBuffersNames = rT, this._eventInfo.customCode = void 0, this._eventInfo.mesh = oT, this._eventInfo.indexParameters = wT, this._callbackPluginEventGeneric(128, this._eventInfo), eT.d.AddUniformsAndSamplers(cT, KT), FT.d.AddUniforms(cT), FT.d.AddSamplers(KT), DT.c && (DT.c.PrepareUniforms(cT, WT), DT.c.PrepareSamplers(KT, WT)), (0, hT.ab)({
                  uniformsNames: cT,
                  uniformBuffersNames: rT,
                  samplers: KT,
                  defines: WT,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, AT.b)(cT), this._useVertexPulling) {
                const TT = IT.getRenderingMesh(),
                  oT = TT?.geometry;
                oT && (this._vertexPullingMetadata = (0, gT.d)(oT), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((TT, oT) => {
                  cT.push(`vp_${oT}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const mT = {};
              this.customShaderNameResolve && (xT = this.customShaderNameResolve(xT, cT, rT, KT, WT, ST, mT));
              const RT = WT.toString(),
                uT = IT.effect,
                vT = kT.Zc().createEffect(xT, {
                  attributes: ST,
                  uniformsNames: cT,
                  uniformBuffersNames: rT,
                  samplers: KT,
                  defines: RT,
                  fallbacks: zT,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: wT,
                  processFinalCode: mT.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: WT.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: TT._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, XT);
              if (this._eventInfo.customCode = void 0, vT)
                if (this._onEffectCreatedObservable && (CT.effect = vT, CT.subMesh = IT, this._onEffectCreatedObservable.notifyObservers(CT)), this.allowShaderHotSwapping && uT && !vT.isReady()) {
                  if (WT.markAsUnprocessed(), LT = this.isFrozen, iT) return WT._areLightsDisposed = !0, !1
                } else kT.resetCachedMaterial(), IT.setEffect(vT, WT, this._materialContext)
            }
            return !(!IT.effect || !IT.effect.isReady()) && (WT._renderId = kT.getRenderId(), zT._wasPreviouslyReady = !LT, zT._wasPreviouslyUsingInstances = iT, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const TT = this._uniformBuffer;
            TT.addUniform("diffuseLeftColor", 4), TT.addUniform("diffuseRightColor", 4), TT.addUniform("opacityParts", 4), TT.addUniform("reflectionLeftColor", 4), TT.addUniform("reflectionRightColor", 4), TT.addUniform("refractionLeftColor", 4), TT.addUniform("refractionRightColor", 4), TT.addUniform("emissiveLeftColor", 4), TT.addUniform("emissiveRightColor", 4), TT.addUniform("vDiffuseInfos", 2), TT.addUniform("vAmbientInfos", 2), TT.addUniform("vOpacityInfos", 2), TT.addUniform("vEmissiveInfos", 2), TT.addUniform("vLightmapInfos", 2), TT.addUniform("vSpecularInfos", 2), TT.addUniform("vBumpInfos", 3), TT.addUniform("diffuseMatrix", 16), TT.addUniform("ambientMatrix", 16), TT.addUniform("opacityMatrix", 16), TT.addUniform("emissiveMatrix", 16), TT.addUniform("lightmapMatrix", 16), TT.addUniform("specularMatrix", 16), TT.addUniform("bumpMatrix", 16), TT.addUniform("vTangentSpaceParams", 2), TT.addUniform("pointSize", 1), TT.addUniform("alphaCutOff", 1), TT.addUniform("refractionMatrix", 16), TT.addUniform("vRefractionInfos", 4), TT.addUniform("vRefractionPosition", 3), TT.addUniform("vRefractionSize", 3), TT.addUniform("vSpecularColor", 4), TT.addUniform("vEmissiveColor", 3), TT.addUniform("vDiffuseColor", 4), TT.addUniform("vAmbientColor", 3), TT.addUniform("cameraInfo", 4), TT.addUniform("vTextureRepetitionHexTilingParams", 4), (0, hT.Y)(TT, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(oT, IT, iT) {
            const zT = this.pC(),
              kT = iT.materialDefines;
            if (!kT) return;
            const BT = iT.effect;
            if (!BT) return;
            this._activeEffect = BT, IT.getMeshUniformBuffer().bindToEffect(BT, "Mesh"), IT.transferToEffect(oT), this._uniformBuffer.bindToEffect(BT, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, zT, IT, oT, this.isFrozen), eT.d.Bind(zT.Zc().currentRenderPassId, this._activeEffect, IT, oT, this);
            const FT = zT.activeCamera;
            FT ? this._uniformBuffer.updateFloat4("cameraInfo", FT.minZ, FT.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const ST = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", ST[0], ST[1], ST[2], ST[3]), this._eventInfo.subMesh = iT, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), kT.OBJECTSPACE_NORMALMAP && (oT.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const DT = this._mustRebind(zT, BT, iT, IT.visibility),
              LT = zT.Zc()._features.needToAlwaysBindUniformBuffers;
            (0, hT.d)(IT, BT), this._vertexPullingMetadata && (0, gT.b)(BT, this._vertexPullingMetadata);
            const xT = this._uniformBuffer;
            if (DT) {
              if (this.bindViewProjection(BT), !xT.useUbo || !this.isFrozen || !xT.isSync || iT._drawWrapper._forceRebindOnNextCall) {
                if (TT.FresnelEnabled && kT.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (xT.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), xT.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const TT = XT.m.Color3[0];
                    TT.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), xT.updateColor4("opacityParts", TT, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (xT.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), xT.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (xT.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), xT.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (xT.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), xT.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (kT.ALPHATEST && xT.updateFloat("alphaCutOff", this.alphaCutOff), zT.texturesEnabled && (this._diffuseTexture && TT.DiffuseTextureEnabled && (xT.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, hT.v)(this._diffuseTexture, xT, "diffuse")), this._ambientTexture && TT.AmbientTextureEnabled && (xT.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, hT.v)(this._ambientTexture, xT, "ambient")), this._opacityTexture && TT.OpacityTextureEnabled && (xT.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, hT.v)(this._opacityTexture, xT, "opacity")), (0, hT.g)(zT, kT, xT, XT.e.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && TT.ReflectionTextureEnabled || xT.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && TT.EmissiveTextureEnabled && (xT.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, hT.v)(this._emissiveTexture, xT, "emissive")), this._lightmapTexture && TT.LightmapTextureEnabled && (xT.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, hT.v)(this._lightmapTexture, xT, "lightmap")), this._specularTexture && TT.SpecularTextureEnabled && (xT.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, hT.v)(this._specularTexture, xT, "specular")), this._bumpTexture && zT.Zc().getCaps().standardDerivatives && TT.BumpTextureEnabled && (xT.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, hT.v)(this._bumpTexture, xT, "bump"), zT._mirroredCameraPosition ? xT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : xT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && TT.RefractionTextureEnabled)) {
                  let TT = 1;
                  if (this._refractionTexture.isCube || (xT.Y1("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (TT = this._refractionTexture.depth)), xT.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, TT, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const TT = this._refractionTexture;
                    xT.updateVector3("vRefractionPosition", TT.boundingBoxPosition), xT.updateVector3("vRefractionSize", TT.boundingBoxSize)
                  }
                }
                this.pointsCloud && xT.updateFloat("pointSize", this.pointSize), xT.updateColor4("vSpecularColor", this.specularColor, this.specularPower), xT.updateColor3("vEmissiveColor", TT.EmissiveTextureEnabled ? this.emissiveColor : XT.e.BlackReadOnly), xT.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), zT.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), xT.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              zT.texturesEnabled && (this._diffuseTexture && TT.DiffuseTextureEnabled && BT.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && TT.AmbientTextureEnabled && BT.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && TT.OpacityTextureEnabled && BT.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && TT.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? BT.setTexture("reflectionCubeSampler", this._reflectionTexture) : BT.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && TT.EmissiveTextureEnabled && BT.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && TT.LightmapTextureEnabled && BT.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && TT.SpecularTextureEnabled && BT.setTexture("specularSampler", this._specularTexture), this._bumpTexture && zT.Zc().getCaps().standardDerivatives && TT.BumpTextureEnabled && BT.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && TT.RefractionTextureEnabled && (this._refractionTexture.isCube ? BT.setTexture("refractionCubeSampler", this._refractionTexture) : BT.setTexture("refraction2DSampler", this._refractionTexture))), this.pC().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(IT) && this.pC().depthPeelingRenderer.bind(BT), this._eventInfo.subMesh = iT, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, AT.d)(BT, this, zT), this.bindEyePosition(BT)
            } else LT && (this._needToBindSceneUbo = !0);
            !DT && this.isFrozen && !LT || !zT.lightsEnabled || this._disableLighting || (0, hT.m)(zT, IT, BT, kT, this._maxSimultaneousLights), !DT && this.isFrozen || ((zT.fogEnabled && IT.applyFog && zT.fogMode !== WT.d.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || IT.receiveShadows || kT.PREPASS || kT.CLUSTLIGHT_BATCH) && this.bindView(BT), (0, hT.e)(zT, IT, BT), kT.NUM_MORPH_INFLUENCERS && (0, hT.r)(IT, BT), kT.BAKED_VERTEX_ANIMATION_TEXTURE && IT.bakedVertexAnimationManager?.bind(BT, kT.INSTANCES), this.useLogarithmicDepth && (0, hT.q)(kT, BT, zT), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(IT, this._activeEffect, iT), xT.update()
          }
          _canBindRunFollower(oT, IT, iT, zT, kT) {
            const WT = oT.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === TT.prototype.isReadyForSubMesh && this.bindForSubMesh === TT.prototype.bindForSubMesh && this._mustRebind === cT.e.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !IT._features.needToAlwaysBindUniformBuffers && !(WT && WT.enabled && WT.currentRTisSceneRT) && !eT.d._Configurations[IT.currentRenderPassId] && !zT.materialDefines?.OBJECTSPACE_NORMALMAP && !iT.skeleton && !kT._bonesComputationForcedToCPU
          }
          _bindRunFollower(TT, oT, IT, iT) {
            this._activeEffect = iT, oT.getMeshUniformBuffer().bindToEffect(iT, "Mesh"), oT.transferToEffect(TT);
            const zT = this._uniformBuffer;
            zT.bindToEffect(iT, "Material");
            const kT = this._scene.activeCamera;
            kT ? zT.updateFloat4("cameraInfo", kT.minZ, kT.maxZ, 0, 0) : zT.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const WT = this.textureRepetitionHexTilingParams;
            zT.updateFloat4("vTextureRepetitionHexTilingParams", WT[0], WT[1], WT[2], WT[3]), this._afterBind(oT, iT, IT), zT.update()
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
          dispose(TT, oT) {
            oT && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(TT, oT)
          }
          clone(oT) {
            let IT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const zT = wT.c.Clone((() => new TT(oT, this.pC())), this, {
              cloneTexturesOnlyOnce: IT
            });
            return zT.name = oT, zT.id = oT, this.stencil.copyTo(zT.stencil), this._clonePlugins(zT, iT), zT
          }
          static Parse(oT, IT, iT) {
            const zT = wT.c.Parse((() => new TT(oT.name, IT)), oT, IT, iT);
            return oT.stencil && zT.stencil.parse(oT.stencil, IT, iT), LT.c._ParsePlugins(oT, zT, IT, iT), zT
          }
          static get DiffuseTextureEnabled() {
            return KT.c.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(TT) {
            KT.c.DiffuseTextureEnabled = TT
          }
          static get DetailTextureEnabled() {
            return KT.c.DetailTextureEnabled
          }
          static set DetailTextureEnabled(TT) {
            KT.c.DetailTextureEnabled = TT
          }
          static get AmbientTextureEnabled() {
            return KT.c.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(TT) {
            KT.c.AmbientTextureEnabled = TT
          }
          static get OpacityTextureEnabled() {
            return KT.c.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(TT) {
            KT.c.OpacityTextureEnabled = TT
          }
          static get ReflectionTextureEnabled() {
            return KT.c.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(TT) {
            KT.c.ReflectionTextureEnabled = TT
          }
          static get EmissiveTextureEnabled() {
            return KT.c.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(TT) {
            KT.c.EmissiveTextureEnabled = TT
          }
          static get SpecularTextureEnabled() {
            return KT.c.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(TT) {
            KT.c.SpecularTextureEnabled = TT
          }
          static get BumpTextureEnabled() {
            return KT.c.BumpTextureEnabled
          }
          static set BumpTextureEnabled(TT) {
            KT.c.BumpTextureEnabled = TT
          }
          static get LightmapTextureEnabled() {
            return KT.c.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(TT) {
            KT.c.LightmapTextureEnabled = TT
          }
          static get RefractionTextureEnabled() {
            return KT.c.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(TT) {
            KT.c.RefractionTextureEnabled = TT
          }
          static get ColorGradingTextureEnabled() {
            return KT.c.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(TT) {
            KT.c.ColorGradingTextureEnabled = TT
          }
          static get FresnelEnabled() {
            return KT.c.FresnelEnabled
          }
          static set FresnelEnabled(TT) {
            KT.c.FresnelEnabled = TT
          }
        }, oT = new WeakMap, ST = new WeakMap, xT = new WeakMap, RT = new WeakMap, uT = new WeakMap, vT = new WeakMap, ET = new WeakMap, fT = new WeakMap, jT = new WeakMap, aT = new WeakMap, YT = new WeakMap, QT = new WeakMap, OT = new WeakMap, HT = new WeakMap, nT = new WeakMap, qT = new WeakMap, ZT = new WeakMap, lT = new WeakMap, sT = new WeakMap, tT = new WeakMap, GT = new WeakMap, pT = new WeakMap, bT = new WeakMap, yT = new WeakMap, NT = new WeakMap, PT = new WeakMap, dT = new WeakMap, VT = new WeakMap, To = new WeakMap, oo = new WeakMap, Io = new WeakMap, io = new WeakMap, (() => {
          const oT = "function" === typeof Symbol && Symbol.metadata ? Object.create(EI[Symbol.metadata] ?? null) : void 0;
          zo = [(0, zT.H)("diffuseTexture")], ko = [(0, zT.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], Wo = [(0, zT.H)("ambientTexture")], Xo = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], Bo = [(0, zT.H)("opacityTexture")], Fo = [(0, zT.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], So = [(0, zT.H)("reflectionTexture")], Do = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], Lo = [(0, zT.H)("emissiveTexture")], xo = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], co = [(0, zT.H)("specularTexture")], Ko = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], Mo = [(0, zT.H)("bumpTexture")], ro = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], Ao = [(0, zT.H)("lightmapTexture")], go = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], ho = [(0, zT.H)("refractionTexture")], wo = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], mo = [(0, zT.q)("ambient")], eo = [(0, zT.q)("diffuse")], Ro = [(0, zT.q)("specular")], uo = [(0, zT.q)("emissive")], vo = [(0, zT.P)()], Eo = [(0, zT.P)("useAlphaFromDiffuseTexture")], fo = [() => ({
            init(TT) {
              return void 0 === TT && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = TT), TT
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(TT) {
              this._useAlphaFromDiffuseTexture = TT
            }
          })], Co = [(0, zT.P)("useEmissiveAsIllumination")], jo = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], Jo = [(0, zT.P)("linkEmissiveWithDiffuse")], Uo = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], ao = [(0, zT.P)("useSpecularOverAlpha")], Yo = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], Qo = [(0, zT.P)("useReflectionOverAlpha")], Oo = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], Ho = [(0, zT.P)("disableLighting")], no = [(0, zT.h)("_markAllSubMeshesAsLightsDirty")], qo = [(0, zT.P)("useObjectSpaceNormalMap")], Zo = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], so = [(0, zT.P)("useParallax")], to = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], Go = [(0, zT.P)("useParallaxOcclusion")], po = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], bo = [(0, zT.P)()], yo = [(0, zT.P)("roughness")], No = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], Po = [(0, zT.P)()], Vo = [(0, zT.P)()], TI = [(0, zT.P)()], oI = [(0, zT.P)("useLightmapAsShadowmap")], II = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], iI = [(0, zT.x)("diffuseFresnelParameters")], zI = [(0, zT.h)("_markAllSubMeshesAsFresnelDirty")], kI = [(0, zT.x)("opacityFresnelParameters")], WI = [(0, zT.h)("_markAllSubMeshesAsFresnelAndMiscDirty")], XI = [(0, zT.x)("reflectionFresnelParameters")], BI = [(0, zT.h)("_markAllSubMeshesAsFresnelDirty")], FI = [(0, zT.x)("refractionFresnelParameters")], SI = [(0, zT.h)("_markAllSubMeshesAsFresnelDirty")], DI = [(0, zT.x)("emissiveFresnelParameters")], LI = [(0, zT.h)("_markAllSubMeshesAsFresnelDirty")], xI = [(0, zT.P)("useReflectionFresnelFromSpecular")], cI = [(0, zT.h)("_markAllSubMeshesAsFresnelDirty")], KI = [(0, zT.P)("useGlossinessFromSpecularMapAlpha")], MI = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], rI = [(0, zT.P)("maxSimultaneousLights")], AI = [(0, zT.h)("_markAllSubMeshesAsLightsDirty")], gI = [(0, zT.P)("invertNormalMapX")], hI = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], wI = [(0, zT.P)("invertNormalMapY")], mI = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], eI = [(0, zT.P)("twoSidedLighting")], RI = [(0, zT.h)("_markAllSubMeshesAsTexturesDirty")], uI = [(0, zT.P)("applyDecalMapAfterDetailMap")], vI = [(0, zT.h)("_markAllSubMeshesAsMiscDirty")], (0, iT.h)(TT, null, ko, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "diffuseTexture" in TT,
              get: TT => TT.diffuseTexture,
              set: (TT, oT) => {
                TT.diffuseTexture = oT
              }
            },
            metadata: oT
          }, jI, JI), (0, iT.h)(TT, null, Xo, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "ambientTexture" in TT,
              get: TT => TT.ambientTexture,
              set: (TT, oT) => {
                TT.ambientTexture = oT
              }
            },
            metadata: oT
          }, YI, QI), (0, iT.h)(TT, null, Fo, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "opacityTexture" in TT,
              get: TT => TT.opacityTexture,
              set: (TT, oT) => {
                TT.opacityTexture = oT
              }
            },
            metadata: oT
          }, nI, qI), (0, iT.h)(TT, null, Do, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "reflectionTexture" in TT,
              get: TT => TT.reflectionTexture,
              set: (TT, oT) => {
                TT.reflectionTexture = oT
              }
            },
            metadata: oT
          }, sI, tI), (0, iT.h)(TT, null, xo, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissiveTexture" in TT,
              get: TT => TT.emissiveTexture,
              set: (TT, oT) => {
                TT.emissiveTexture = oT
              }
            },
            metadata: oT
          }, bI, yI), (0, iT.h)(TT, null, Ko, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularTexture" in TT,
              get: TT => TT.specularTexture,
              set: (TT, oT) => {
                TT.specularTexture = oT
              }
            },
            metadata: oT
          }, dI, VI), (0, iT.h)(TT, null, ro, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "bumpTexture" in TT,
              get: TT => TT.bumpTexture,
              set: (TT, oT) => {
                TT.bumpTexture = oT
              }
            },
            metadata: oT
          }, Ii, ii), (0, iT.h)(TT, null, go, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "lightmapTexture" in TT,
              get: TT => TT.lightmapTexture,
              set: (TT, oT) => {
                TT.lightmapTexture = oT
              }
            },
            metadata: oT
          }, Wi, Xi), (0, iT.h)(TT, null, wo, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "refractionTexture" in TT,
              get: TT => TT.refractionTexture,
              set: (TT, oT) => {
                TT.refractionTexture = oT
              }
            },
            metadata: oT
          }, Si, Di), (0, iT.h)(TT, null, fo, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "useAlphaFromDiffuseTexture" in TT,
              get: TT => TT.useAlphaFromDiffuseTexture,
              set: (TT, oT) => {
                TT.useAlphaFromDiffuseTexture = oT
              }
            },
            metadata: oT
          }, ui, vi), (0, iT.h)(TT, null, jo, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: TT => "useEmissiveAsIllumination" in TT,
              get: TT => TT.useEmissiveAsIllumination,
              set: (TT, oT) => {
                TT.useEmissiveAsIllumination = oT
              }
            },
            metadata: oT
          }, Ci, ji), (0, iT.h)(TT, null, Uo, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: TT => "linkEmissiveWithDiffuse" in TT,
              get: TT => TT.linkEmissiveWithDiffuse,
              set: (TT, oT) => {
                TT.linkEmissiveWithDiffuse = oT
              }
            },
            metadata: oT
          }, ai, Yi), (0, iT.h)(TT, null, Yo, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "useSpecularOverAlpha" in TT,
              get: TT => TT.useSpecularOverAlpha,
              set: (TT, oT) => {
                TT.useSpecularOverAlpha = oT
              }
            },
            metadata: oT
          }, Hi, ni), (0, iT.h)(TT, null, Oo, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "useReflectionOverAlpha" in TT,
              get: TT => TT.useReflectionOverAlpha,
              set: (TT, oT) => {
                TT.useReflectionOverAlpha = oT
              }
            },
            metadata: oT
          }, li, si), (0, iT.h)(TT, null, no, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "disableLighting" in TT,
              get: TT => TT.disableLighting,
              set: (TT, oT) => {
                TT.disableLighting = oT
              }
            },
            metadata: oT
          }, bi, yi), (0, iT.h)(TT, null, Zo, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "useObjectSpaceNormalMap" in TT,
              get: TT => TT.useObjectSpaceNormalMap,
              set: (TT, oT) => {
                TT.useObjectSpaceNormalMap = oT
              }
            },
            metadata: oT
          }, di, Vi), (0, iT.h)(TT, null, to, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: TT => "useParallax" in TT,
              get: TT => TT.useParallax,
              set: (TT, oT) => {
                TT.useParallax = oT
              }
            },
            metadata: oT
          }, Iz, iz), (0, iT.h)(TT, null, po, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: TT => "useParallaxOcclusion" in TT,
              get: TT => TT.useParallaxOcclusion,
              set: (TT, oT) => {
                TT.useParallaxOcclusion = oT
              }
            },
            metadata: oT
          }, Wz, Xz), (0, iT.h)(TT, null, No, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "roughness" in TT,
              get: TT => TT.roughness,
              set: (TT, oT) => {
                TT.roughness = oT
              }
            },
            metadata: oT
          }, Lz, xz), (0, iT.h)(TT, null, II, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: TT => "useLightmapAsShadowmap" in TT,
              get: TT => TT.useLightmapAsShadowmap,
              set: (TT, oT) => {
                TT.useLightmapAsShadowmap = oT
              }
            },
            metadata: oT
          }, mz, ez), (0, iT.h)(TT, null, zI, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "diffuseFresnelParameters" in TT,
              get: TT => TT.diffuseFresnelParameters,
              set: (TT, oT) => {
                TT.diffuseFresnelParameters = oT
              }
            },
            metadata: oT
          }, vz, Ez), (0, iT.h)(TT, null, WI, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "opacityFresnelParameters" in TT,
              get: TT => TT.opacityFresnelParameters,
              set: (TT, oT) => {
                TT.opacityFresnelParameters = oT
              }
            },
            metadata: oT
          }, jz, Jz), (0, iT.h)(TT, null, BI, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "reflectionFresnelParameters" in TT,
              get: TT => TT.reflectionFresnelParameters,
              set: (TT, oT) => {
                TT.reflectionFresnelParameters = oT
              }
            },
            metadata: oT
          }, Yz, Qz), (0, iT.h)(TT, null, SI, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "refractionFresnelParameters" in TT,
              get: TT => TT.refractionFresnelParameters,
              set: (TT, oT) => {
                TT.refractionFresnelParameters = oT
              }
            },
            metadata: oT
          }, nz, qz), (0, iT.h)(TT, null, LI, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissiveFresnelParameters" in TT,
              get: TT => TT.emissiveFresnelParameters,
              set: (TT, oT) => {
                TT.emissiveFresnelParameters = oT
              }
            },
            metadata: oT
          }, sz, tz), (0, iT.h)(TT, null, cI, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: TT => "useReflectionFresnelFromSpecular" in TT,
              get: TT => TT.useReflectionFresnelFromSpecular,
              set: (TT, oT) => {
                TT.useReflectionFresnelFromSpecular = oT
              }
            },
            metadata: oT
          }, bz, yz), (0, iT.h)(TT, null, MI, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "useGlossinessFromSpecularMapAlpha" in TT,
              get: TT => TT.useGlossinessFromSpecularMapAlpha,
              set: (TT, oT) => {
                TT.useGlossinessFromSpecularMapAlpha = oT
              }
            },
            metadata: oT
          }, dz, Vz), (0, iT.h)(TT, null, AI, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: TT => "maxSimultaneousLights" in TT,
              get: TT => TT.maxSimultaneousLights,
              set: (TT, oT) => {
                TT.maxSimultaneousLights = oT
              }
            },
            metadata: oT
          }, ik, zk), (0, iT.h)(TT, null, hI, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: TT => "invertNormalMapX" in TT,
              get: TT => TT.invertNormalMapX,
              set: (TT, oT) => {
                TT.invertNormalMapX = oT
              }
            },
            metadata: oT
          }, Xk, Bk), (0, iT.h)(TT, null, mI, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: TT => "invertNormalMapY" in TT,
              get: TT => TT.invertNormalMapY,
              set: (TT, oT) => {
                TT.invertNormalMapY = oT
              }
            },
            metadata: oT
          }, Dk, Lk), (0, iT.h)(TT, null, RI, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "twoSidedLighting" in TT,
              get: TT => TT.twoSidedLighting,
              set: (TT, oT) => {
                TT.twoSidedLighting = oT
              }
            },
            metadata: oT
          }, Kk, Mk), (0, iT.h)(TT, null, vI, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "applyDecalMapAfterDetailMap" in TT,
              get: TT => TT.applyDecalMapAfterDetailMap,
              set: (TT, oT) => {
                TT.applyDecalMapAfterDetailMap = oT
              }
            },
            metadata: oT
          }, gk, hk), (0, iT.h)(null, null, zo, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_diffuseTexture" in TT,
              get: TT => TT._diffuseTexture,
              set: (TT, oT) => {
                TT._diffuseTexture = oT
              }
            },
            metadata: oT
          }, fI, CI), (0, iT.h)(null, null, Wo, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_ambientTexture" in TT,
              get: TT => TT._ambientTexture,
              set: (TT, oT) => {
                TT._ambientTexture = oT
              }
            },
            metadata: oT
          }, UI, aI), (0, iT.h)(null, null, Bo, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_opacityTexture" in TT,
              get: TT => TT._opacityTexture,
              set: (TT, oT) => {
                TT._opacityTexture = oT
              }
            },
            metadata: oT
          }, OI, HI), (0, iT.h)(null, null, So, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_reflectionTexture" in TT,
              get: TT => TT._reflectionTexture,
              set: (TT, oT) => {
                TT._reflectionTexture = oT
              }
            },
            metadata: oT
          }, ZI, lI), (0, iT.h)(null, null, Lo, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_emissiveTexture" in TT,
              get: TT => TT._emissiveTexture,
              set: (TT, oT) => {
                TT._emissiveTexture = oT
              }
            },
            metadata: oT
          }, GI, pI), (0, iT.h)(null, null, co, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_specularTexture" in TT,
              get: TT => TT._specularTexture,
              set: (TT, oT) => {
                TT._specularTexture = oT
              }
            },
            metadata: oT
          }, NI, PI), (0, iT.h)(null, null, Mo, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_bumpTexture" in TT,
              get: TT => TT._bumpTexture,
              set: (TT, oT) => {
                TT._bumpTexture = oT
              }
            },
            metadata: oT
          }, Ti, oi), (0, iT.h)(null, null, Ao, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_lightmapTexture" in TT,
              get: TT => TT._lightmapTexture,
              set: (TT, oT) => {
                TT._lightmapTexture = oT
              }
            },
            metadata: oT
          }, zi, ki), (0, iT.h)(null, null, ho, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_refractionTexture" in TT,
              get: TT => TT._refractionTexture,
              set: (TT, oT) => {
                TT._refractionTexture = oT
              }
            },
            metadata: oT
          }, Bi, Fi), (0, iT.h)(null, null, mo, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "ambientColor" in TT,
              get: TT => TT.ambientColor,
              set: (TT, oT) => {
                TT.ambientColor = oT
              }
            },
            metadata: oT
          }, Li, xi), (0, iT.h)(null, null, eo, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "diffuseColor" in TT,
              get: TT => TT.diffuseColor,
              set: (TT, oT) => {
                TT.diffuseColor = oT
              }
            },
            metadata: oT
          }, ci, Ki), (0, iT.h)(null, null, Ro, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularColor" in TT,
              get: TT => TT.specularColor,
              set: (TT, oT) => {
                TT.specularColor = oT
              }
            },
            metadata: oT
          }, Mi, ri), (0, iT.h)(null, null, uo, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissiveColor" in TT,
              get: TT => TT.emissiveColor,
              set: (TT, oT) => {
                TT.emissiveColor = oT
              }
            },
            metadata: oT
          }, Ai, gi), (0, iT.h)(null, null, vo, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularPower" in TT,
              get: TT => TT.specularPower,
              set: (TT, oT) => {
                TT.specularPower = oT
              }
            },
            metadata: oT
          }, wi, mi), (0, iT.h)(null, null, Eo, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useAlphaFromDiffuseTexture" in TT,
              get: TT => TT._useAlphaFromDiffuseTexture,
              set: (TT, oT) => {
                TT._useAlphaFromDiffuseTexture = oT
              }
            },
            metadata: oT
          }, ei, Ri), (0, iT.h)(null, null, Co, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useEmissiveAsIllumination" in TT,
              get: TT => TT._useEmissiveAsIllumination,
              set: (TT, oT) => {
                TT._useEmissiveAsIllumination = oT
              }
            },
            metadata: oT
          }, Ei, fi), (0, iT.h)(null, null, Jo, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: TT => "_linkEmissiveWithDiffuse" in TT,
              get: TT => TT._linkEmissiveWithDiffuse,
              set: (TT, oT) => {
                TT._linkEmissiveWithDiffuse = oT
              }
            },
            metadata: oT
          }, Ji, Ui), (0, iT.h)(null, null, ao, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useSpecularOverAlpha" in TT,
              get: TT => TT._useSpecularOverAlpha,
              set: (TT, oT) => {
                TT._useSpecularOverAlpha = oT
              }
            },
            metadata: oT
          }, Qi, Oi), (0, iT.h)(null, null, Qo, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useReflectionOverAlpha" in TT,
              get: TT => TT._useReflectionOverAlpha,
              set: (TT, oT) => {
                TT._useReflectionOverAlpha = oT
              }
            },
            metadata: oT
          }, qi, Zi), (0, iT.h)(null, null, Ho, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "_disableLighting" in TT,
              get: TT => TT._disableLighting,
              set: (TT, oT) => {
                TT._disableLighting = oT
              }
            },
            metadata: oT
          }, ti, Gi), (0, iT.h)(null, null, qo, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useObjectSpaceNormalMap" in TT,
              get: TT => TT._useObjectSpaceNormalMap,
              set: (TT, oT) => {
                TT._useObjectSpaceNormalMap = oT
              }
            },
            metadata: oT
          }, Ni, Pi), (0, iT.h)(null, null, so, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useParallax" in TT,
              get: TT => TT._useParallax,
              set: (TT, oT) => {
                TT._useParallax = oT
              }
            },
            metadata: oT
          }, Tz, oz), (0, iT.h)(null, null, Go, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useParallaxOcclusion" in TT,
              get: TT => TT._useParallaxOcclusion,
              set: (TT, oT) => {
                TT._useParallaxOcclusion = oT
              }
            },
            metadata: oT
          }, zz, kz), (0, iT.h)(null, null, bo, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: TT => "parallaxScaleBias" in TT,
              get: TT => TT.parallaxScaleBias,
              set: (TT, oT) => {
                TT.parallaxScaleBias = oT
              }
            },
            metadata: oT
          }, Bz, Fz), (0, iT.h)(null, null, yo, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "_roughness" in TT,
              get: TT => TT._roughness,
              set: (TT, oT) => {
                TT._roughness = oT
              }
            },
            metadata: oT
          }, Sz, Dz), (0, iT.h)(null, null, Po, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: TT => "indexOfRefraction" in TT,
              get: TT => TT.indexOfRefraction,
              set: (TT, oT) => {
                TT.indexOfRefraction = oT
              }
            },
            metadata: oT
          }, cz, Kz), (0, iT.h)(null, null, Vo, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: TT => "invertRefractionY" in TT,
              get: TT => TT.invertRefractionY,
              set: (TT, oT) => {
                TT.invertRefractionY = oT
              }
            },
            metadata: oT
          }, Mz, rz), (0, iT.h)(null, null, TI, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: TT => "alphaCutOff" in TT,
              get: TT => TT.alphaCutOff,
              set: (TT, oT) => {
                TT.alphaCutOff = oT
              }
            },
            metadata: oT
          }, Az, gz), (0, iT.h)(null, null, oI, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useLightmapAsShadowmap" in TT,
              get: TT => TT._useLightmapAsShadowmap,
              set: (TT, oT) => {
                TT._useLightmapAsShadowmap = oT
              }
            },
            metadata: oT
          }, hz, wz), (0, iT.h)(null, null, iI, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "_diffuseFresnelParameters" in TT,
              get: TT => TT._diffuseFresnelParameters,
              set: (TT, oT) => {
                TT._diffuseFresnelParameters = oT
              }
            },
            metadata: oT
          }, Rz, uz), (0, iT.h)(null, null, kI, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "_opacityFresnelParameters" in TT,
              get: TT => TT._opacityFresnelParameters,
              set: (TT, oT) => {
                TT._opacityFresnelParameters = oT
              }
            },
            metadata: oT
          }, fz, Cz), (0, iT.h)(null, null, XI, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "_reflectionFresnelParameters" in TT,
              get: TT => TT._reflectionFresnelParameters,
              set: (TT, oT) => {
                TT._reflectionFresnelParameters = oT
              }
            },
            metadata: oT
          }, Uz, az), (0, iT.h)(null, null, FI, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "_refractionFresnelParameters" in TT,
              get: TT => TT._refractionFresnelParameters,
              set: (TT, oT) => {
                TT._refractionFresnelParameters = oT
              }
            },
            metadata: oT
          }, Oz, Hz), (0, iT.h)(null, null, DI, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "_emissiveFresnelParameters" in TT,
              get: TT => TT._emissiveFresnelParameters,
              set: (TT, oT) => {
                TT._emissiveFresnelParameters = oT
              }
            },
            metadata: oT
          }, Zz, lz), (0, iT.h)(null, null, xI, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useReflectionFresnelFromSpecular" in TT,
              get: TT => TT._useReflectionFresnelFromSpecular,
              set: (TT, oT) => {
                TT._useReflectionFresnelFromSpecular = oT
              }
            },
            metadata: oT
          }, Gz, pz), (0, iT.h)(null, null, KI, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useGlossinessFromSpecularMapAlpha" in TT,
              get: TT => TT._useGlossinessFromSpecularMapAlpha,
              set: (TT, oT) => {
                TT._useGlossinessFromSpecularMapAlpha = oT
              }
            },
            metadata: oT
          }, Nz, Pz), (0, iT.h)(null, null, rI, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: TT => "_maxSimultaneousLights" in TT,
              get: TT => TT._maxSimultaneousLights,
              set: (TT, oT) => {
                TT._maxSimultaneousLights = oT
              }
            },
            metadata: oT
          }, Tk, Ik), (0, iT.h)(null, null, gI, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: TT => "_invertNormalMapX" in TT,
              get: TT => TT._invertNormalMapX,
              set: (TT, oT) => {
                TT._invertNormalMapX = oT
              }
            },
            metadata: oT
          }, kk, Wk), (0, iT.h)(null, null, wI, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: TT => "_invertNormalMapY" in TT,
              get: TT => TT._invertNormalMapY,
              set: (TT, oT) => {
                TT._invertNormalMapY = oT
              }
            },
            metadata: oT
          }, Fk, Sk), (0, iT.h)(null, null, eI, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "_twoSidedLighting" in TT,
              get: TT => TT._twoSidedLighting,
              set: (TT, oT) => {
                TT._twoSidedLighting = oT
              }
            },
            metadata: oT
          }, xk, ck), (0, iT.h)(null, null, uI, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "_applyDecalMapAfterDetailMap" in TT,
              get: TT => TT._applyDecalMapAfterDetailMap,
              set: (TT, oT) => {
                TT._applyDecalMapAfterDetailMap = oT
              }
            },
            metadata: oT
          }, rk, Ak), oT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oT
          })
        })(), TT.ForceGLSL = !1, TT._ShaderLoader = new mT.c((() => [Promise.all([IT.e(307), IT.e(306)]).then((() => IT(40675))), Promise.all([IT.e(312), IT.e(308), IT.e(321), IT.e(311)]).then((() => IT(40865)))]), (() => [Promise.all([IT.e(328), IT.e(323)]).then((() => IT(41009))), Promise.all([IT.e(329), IT.e(339), IT.e(325)]).then((() => IT(41198)))])), TT
      })(),
      YT = !1;

    function QT() {
      YT || (YT = !0, (0, DT.e)(), (0, ET.h)("BABYLON.StandardMaterial", aT), WT.d.DefaultMaterialFactory = TT => new aT("default material", TT))
    }
    Object.getOwnPropertyDescriptor(aT.prototype, "decalMap") || Object.defineProperty(aT.prototype, "decalMap", (0, fT.f)("StandardMaterial", "decalMap"))
  },
  39173: (TT, oT, IT) => {
    function iT(TT) {
      return class extends TT {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    IT.d(oT, {
      c: () => iT
    })
  },
  39161: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT
    });
    class iT {
      constructor(TT, oT) {
        this._webGL = {
          load: TT,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: oT,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(TT) {
        const oT = 1 === TT ? this._webGPU : this._webGL;
        return oT.loaded ? void 0 : async () => {
          await this._loadAsync(oT)
        }
      }
      async _loadAsync(TT) {
        if (TT.loaded) return;
        let oT = TT.loadPromise;
        const IT = null === oT;
        IT && (oT = Promise.all(TT.load()), TT.loadPromise = oT);
        let iT = !1;
        try {
          await oT, iT = !0
        } finally {
          IT && this._completeLoad(TT, iT)
        }
      }
      _completeLoad(TT, oT) {
        TT.loaded = oT, TT.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);