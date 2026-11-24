export const id = 265;
export const ids = [265];
export const modules = {
  40524: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT
    });
    var WT = mT(40106);

    function zT(TT) {
      return class extends TT {
        constructor() {
          super(...arguments);
          const TT = new.target;
          if (!TT[Symbol.metadata]) {
            const UT = Object.getPrototypeOf(TT)?.[Symbol.metadata];
            TT[Symbol.metadata] = UT ? Object.create(UT) : {}
          }
          const UT = (0, WT.c)(TT[Symbol.metadata]);
          UT._imageProcessingConfiguration || (UT._imageProcessingConfiguration = {
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
          TT !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !TT && this.KF ? this._imageProcessingConfiguration = this.KF().imageProcessingConfiguration : TT && (this._imageProcessingConfiguration = TT), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
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
  40399: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => MT,
      f: () => zT
    });
    var WT = mT(40407);

    function zT(TT) {
      return class extends TT {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class MT extends WT.d {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  40484: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => lT
    });
    var WT = mT(40095),
      zT = mT(40413),
      MT = mT(40102),
      gT = mT(40465),
      nT = mT(40407),
      HT = mT(40487),
      kT = mT(40456);
    class jT extends nT.d {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let lT = (() => {
      var TT, UT, mT, nT;
      let lT, LT, pT, BT, ZT, cT, vT = HT.e,
        fT = [],
        qT = [],
        iT = [],
        bT = [],
        OT = [],
        eT = [],
        YT = [],
        JT = [],
        xT = [],
        dT = [],
        wT = [],
        tT = [];
      return TT = class extends vT {
        get texture() {
          return (0, WT.d)(this, UT, "f")
        }
        set texture(TT) {
          (0, WT.e)(this, UT, TT, "f")
        }
        get normalBlendMethod() {
          return (0, WT.d)(this, mT, "f")
        }
        set normalBlendMethod(TT) {
          (0, WT.e)(this, mT, TT, "f")
        }
        get isEnabled() {
          return (0, WT.d)(this, nT, "f")
        }
        set isEnabled(TT) {
          (0, WT.e)(this, nT, TT, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(TT) {
          let MT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(TT, "DetailMap", 140, new jT, MT), this._texture = null, UT.set(this, (0, WT.k)(this, fT, void 0)), this.diffuseBlendLevel = ((0, WT.k)(this, qT), (0, WT.k)(this, iT, 1)), this.roughnessBlendLevel = ((0, WT.k)(this, bT), (0, WT.k)(this, OT, 1)), this.bumpLevel = ((0, WT.k)(this, eT), (0, WT.k)(this, YT, 1)), this._normalBlendMethod = ((0, WT.k)(this, JT), zT.b.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), mT.set(this, (0, WT.k)(this, xT, void 0)), this._isEnabled = ((0, WT.k)(this, dT), !1), nT.set(this, (0, WT.k)(this, wT, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, WT.k)(this, tT), this._internalMarkAllSubMeshesAsTexturesDirty = TT._dirtyCallbacks[1]
        }
        isReadyForSubMesh(TT, UT, mT) {
          return !this._isEnabled || !(TT._areTexturesDirty && UT.texturesEnabled && mT.getCaps().standardDerivatives && this._texture && gT.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(TT, UT) {
          if (this._isEnabled) {
            TT.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const mT = UT.eB();
            TT._areTexturesDirty && (mT.getCaps().standardDerivatives && this._texture && gT.e.DetailTextureEnabled && this._isEnabled ? ((0, kT.X)(this._texture, TT, "DETAIL"), TT.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : TT.DETAIL = !1)
          } else TT.DETAIL = !1
        }
        bindForSubMesh(TT, UT) {
          if (!this._isEnabled) return;
          const mT = this._material.isFrozen;
          TT.useUbo && mT && TT.isSync || this._texture && gT.e.DetailTextureEnabled && (TT.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, kT.x)(this._texture, TT, "detail")), UT.texturesEnabled && this._texture && gT.e.DetailTextureEnabled && TT.setTexture("detailSampler", this._texture)
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
      }, UT = new WeakMap, mT = new WeakMap, nT = new WeakMap, (() => {
        const UT = "function" === typeof Symbol && Symbol.metadata ? Object.create(vT[Symbol.metadata] ?? null) : void 0;
        lT = [(0, MT.C)("detailTexture"), (0, MT.g)("_markAllSubMeshesAsTexturesDirty")], LT = [(0, MT.L)()], pT = [(0, MT.L)()], BT = [(0, MT.L)()], ZT = [(0, MT.L)(), (0, MT.g)("_markAllSubMeshesAsTexturesDirty")], cT = [(0, MT.L)(), (0, MT.g)("_markAllSubMeshesAsTexturesDirty")], (0, WT.h)(TT, null, lT, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: TT => "texture" in TT,
            get: TT => TT.texture,
            set: (TT, UT) => {
              TT.texture = UT
            }
          },
          metadata: UT
        }, fT, qT), (0, WT.h)(TT, null, ZT, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: TT => "normalBlendMethod" in TT,
            get: TT => TT.normalBlendMethod,
            set: (TT, UT) => {
              TT.normalBlendMethod = UT
            }
          },
          metadata: UT
        }, xT, dT), (0, WT.h)(TT, null, cT, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "isEnabled" in TT,
            get: TT => TT.isEnabled,
            set: (TT, UT) => {
              TT.isEnabled = UT
            }
          },
          metadata: UT
        }, wT, tT), (0, WT.h)(null, null, LT, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: TT => "diffuseBlendLevel" in TT,
            get: TT => TT.diffuseBlendLevel,
            set: (TT, UT) => {
              TT.diffuseBlendLevel = UT
            }
          },
          metadata: UT
        }, iT, bT), (0, WT.h)(null, null, pT, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: TT => "roughnessBlendLevel" in TT,
            get: TT => TT.roughnessBlendLevel,
            set: (TT, UT) => {
              TT.roughnessBlendLevel = UT
            }
          },
          metadata: UT
        }, OT, eT), (0, WT.h)(null, null, BT, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: TT => "bumpLevel" in TT,
            get: TT => TT.bumpLevel,
            set: (TT, UT) => {
              TT.bumpLevel = UT
            }
          },
          metadata: UT
        }, YT, JT), UT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UT
        })
      })(), TT
    })()
  },
  40407: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    class WT {
      constructor(TT) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = TT, TT)
          for (const UT in TT) Object.prototype.hasOwnProperty.call(TT, UT) && this._setDefaultValue(UT)
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
        for (let UT = 0; UT < this._keys.length; UT++) {
          const mT = this._keys[UT];
          if (this[mT] !== TT[mT]) return !1
        }
        return !0
      }
      cloneTo(TT) {
        this._keys.length !== TT._keys.length && (TT._keys = this._keys.slice(0));
        for (let UT = 0; UT < this._keys.length; UT++) {
          const mT = this._keys[UT];
          TT[mT] = this[mT]
        }
      }
      reset() {
        for (const TT of this._keys) this._setDefaultValue(TT)
      }
      _setDefaultValue(TT) {
        const UT = this._externalProperties?.[TT]?.type ?? typeof this[TT],
          mT = this._externalProperties?.[TT]?.default;
        switch (UT) {
          case "number":
            this[TT] = mT ?? 0;
            break;
          case "string":
            this[TT] = mT ?? "";
            break;
          default:
            this[TT] = mT ?? !1
        }
      }
      toString() {
        let TT = "";
        for (let UT = 0; UT < this._keys.length; UT++) {
          const mT = this._keys[UT],
            WT = this[mT];
          switch (typeof WT) {
            case "number":
            case "string":
              TT += "#define " + mT + " " + WT + "\n";
              break;
            default:
              WT && (TT += "#define " + mT + "\n")
          }
        }
        return TT
      }
    }
  },
  40511: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => nT,
      d: () => gT,
      e: () => MT
    });
    var WT, zT = mT(37188);

    function MT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const WT = UT(TT);
      if (!Number.isInteger(WT) || WT < 0 || WT > mT) throw new Error(`Invalid geometry object ID ${WT} for mesh "${TT.name}". Object IDs must be integers between 0 and 0x${mT.toString(16).toUpperCase()}.`);
      return WT
    }

    function gT(TT, UT) {
      const mT = UT(TT);
      if (!Number.isInteger(mT) || mT < 0 || mT > 255 || 0 !== mT && 0 === (63 & mT)) throw new Error(`Invalid geometry mesh-blending tag ${mT} for mesh "${TT.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return mT
    }! function(TT) {
      TT[TT.Zero = 0] = "Zero", TT[TT.One = 1] = "One", TT[TT.MaxViewZ = 2] = "MaxViewZ", TT[TT.NoClear = 3] = "NoClear"
    }(WT || (WT = {}));
    class nT {
      static CreateConfiguration(TT) {
        return nT._Configurations[TT] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: zT.e.Zero(),
          currentViewProjection: zT.e.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, nT._Configurations[TT]
      }
      static DeleteConfiguration(TT) {
        delete nT._Configurations[TT]
      }
      static GetConfiguration(TT) {
        return nT._Configurations[TT]
      }
      static _PrepareConfiguration(TT, UT, mT) {
        const WT = nT._Configurations[TT];
        WT._attachments = UT, WT._colorAttachments = mT, WT._mrtCount = UT.length;
        let zT = "#define PREPASS\n";
        for (const MT of nT.GeometryTextureDescriptions) {
          const TT = WT.defines[MT.defineIndex];
          void 0 !== TT && (zT += `#define ${MT.define}\n#define ${MT.defineIndex} ${TT}\n`)
        }
        WT.objectIdIsRedFormat && (zT += "#define PREPASS_OBJECT_ID_R8\n"), WT._defines = zT + `#define SCENE_MRT_COUNT ${UT.length}\n`
      }
      static _PrepareStringDefines(TT, UT) {
        const mT = nT._Configurations[TT];
        return !!mT?._defines && (UT.push(mT._defines), !0)
      }
      static _BindAttachmentsForEffect(TT, UT) {
        const mT = nT._Configurations[TT.currentRenderPassId];
        return !mT?._attachments || (TT.bindAttachments(UT._multiTarget ? mT._attachments : mT._colorAttachments), UT._multiTarget || void 0 !== mT.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(TT) {
        const UT = nT._Configurations[TT.currentRenderPassId];
        UT?._colorAttachments && TT.bindAttachments(UT._colorAttachments)
      }
      static _BindColorAttachments(TT) {
        const UT = nT._Configurations[TT.currentRenderPassId];
        return !UT?._colorAttachments || (TT.bindAttachments(UT._colorAttachments), void 0 !== UT.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(TT) {
        const UT = nT._Configurations[TT.currentRenderPassId];
        return !UT?._colorAttachments || void 0 !== UT.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(TT, UT) {
        const mT = nT._Configurations[TT.currentRenderPassId];
        if (!mT) return;
        const WT = TT.getAlphaMode(),
          zT = void 0 === mT.defines.PREPASS_COLOR_INDEX || 2 === WT || 1 === WT || 17 === WT;
        UT.setFloat("geometryZeroAlphaDiscard", zT ? 1 : 0)
      }
      static AddUniformsAndSamplers(TT, UT) {
        TT.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(TT, UT) {
        for (const mT of UT)
          if (mT.rY)
            for (const UT of mT.rY) UT._removeDrawWrapper(TT)
      }
      static PrepareDefines(TT, UT, mT) {
        if (!mT._arePrePassDirty) return;
        const WT = nT._Configurations[TT];
        if (!WT) return;
        mT.PREPASS = !0;
        let zT = 0;
        for (let MT = 0; MT < nT.GeometryTextureDescriptions.length; MT++) {
          const TT = nT.GeometryTextureDescriptions[MT],
            UT = TT.define,
            gT = TT.defineIndex,
            HT = WT.defines[gT];
          void 0 !== HT ? (mT[UT] = !0, mT[gT] = HT, zT++) : (mT[UT] = !1, delete mT[gT])
        }
        mT.PREPASS_OBJECT_ID_R8 = WT.objectIdIsRedFormat, mT.SCENE_MRT_COUNT = WT._mrtCount ?? zT, mT.BONES_VELOCITY_ENABLED = UT.useBones && UT.computeBonesUsingShaders && UT.skeleton && !UT.skeleton.isUsingTextureForMatrices && -1 === WT.excludedSkinnedMesh.indexOf(UT)
      }
      static Bind(TT, UT, mT, WT, zT) {
        const HT = nT._Configurations[TT];
        if (!HT) return;
        const kT = mT.KF(),
          jT = kT.eB();
        if (HT.reverseCulling && jT.setStateCullFaceType(kT._mirroredCameraPosition ? zT.cullBackFaces : !zT.cullBackFaces), void 0 !== HT.defines.PREPASS_OBJECT_ID_INDEX) {
          const TT = HT.objectIdIsRedFormat ? 255 : 16777215;
          let WT = mT.uniqueId;
          if (HT.objectIdProvider) WT = MT(mT, HT.objectIdProvider, TT);
          else if (WT > TT) throw new Error(`Invalid geometry object ID ${WT} for mesh "${mT.name}". Object IDs must be integers between 0 and 0x${TT.toString(16).toUpperCase()}.`);
          UT.setFloat("objectId", WT)
        }
        if (void 0 !== HT.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const TT = HT.meshBlendTagProvider ? gT(mT, HT.meshBlendTagProvider) : mT.meshBlendingTag;
          UT.setInt("meshBlendTag", TT)
        }
        if (void 0 !== HT.defines.PREPASS_VELOCITY_INDEX || void 0 !== HT.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const TT = HT._currentWorldMatrices ?? (HT._currentWorldMatrices = {}),
            zT = HT._worldMatrixFrameIds ?? (HT._worldMatrixFrameIds = {});
          if (TT[mT.uniqueId] || (TT[mT.uniqueId] = WT.clone(), HT.previousWorldMatrices[mT.uniqueId] = WT.clone()), zT[mT.uniqueId] !== jT.frameId && (HT.previousWorldMatrices[mT.uniqueId].Gw(TT[mT.uniqueId]), zT[mT.uniqueId] = jT.frameId), TT[mT.uniqueId].Gw(WT), -1 === HT.lastUpdateFrameId ? (HT.lastUpdateFrameId = jT.frameId, HT.previousViewProjection.Gw(kT.getTransformMatrix()), HT.currentViewProjection.Gw(kT.getTransformMatrix())) : HT.currentViewProjection.updateFlag !== kT.getTransformMatrix().updateFlag ? (HT.lastUpdateFrameId = jT.frameId, HT.previousViewProjection.Gw(HT.currentViewProjection), HT.currentViewProjection.Gw(kT.getTransformMatrix())) : HT.lastUpdateFrameId !== jT.frameId && (HT.lastUpdateFrameId = jT.frameId, HT.previousViewProjection.Gw(HT.currentViewProjection)), UT.setMatrix("previousWorld", HT.previousWorldMatrices[mT.uniqueId]), UT.setMatrix("previousViewProjection", HT.previousViewProjection), mT.useBones && mT.computeBonesUsingShaders && mT.skeleton) {
            const TT = mT.skeleton;
            if (!TT.isUsingTextureForMatrices || -1 === UT.getUniformIndex("boneTextureInfo")) {
              const WT = TT.getTransformMatrices(mT);
              WT && (HT.previousBones[mT.uniqueId] || (HT.previousBones[mT.uniqueId] = WT.slice()), UT.setMatrices("mPreviousBones", HT.previousBones[mT.uniqueId]), HT.previousBones[mT.uniqueId].set(WT))
            }
          }
        }
      }
    }
    nT.GeometryTextureDescriptions = [{
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
    }], nT._Configurations = {}
  },
  40487: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => LT,
      g: () => BT
    });
    var WT = mT(40095),
      zT = mT(40102),
      MT = mT(39972),
      gT = mT(39934);
    const nT = new RegExp("^([gimus]+)!");
    class HT {
      constructor(TT) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = TT, this._scene = TT.KF(), this._engine = this._scene.eB()
      }
      _addPlugin(TT) {
        for (let WT = 0; WT < this._plugins.length; ++WT)
          if (this._plugins[WT].name === TT.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !TT.isCompatible(this._material.shaderLanguage)) throw `The plugin "${TT.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const UT = TT.getClassName();
        HT._MaterialPluginClassToMainDefine[UT] || (HT._MaterialPluginClassToMainDefine[UT] = "MATERIALPLUGIN_" + ++HT._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (TT, UT) => this._handlePluginEvent(TT, UT), this._plugins.push(TT), this._plugins.sort(((TT, UT) => TT.priority - UT.priority)), this._codeInjectionPoints = {};
        const mT = {};
        mT[HT._MaterialPluginClassToMainDefine[UT]] = {
          type: "boolean",
          default: !0
        };
        for (const WT of this._plugins) WT.collectDefines(mT), this._collectPointNames("vertex", WT.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", WT.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = mT, !0
      }
      _activatePlugin(TT) {
        -1 === this._activePlugins.indexOf(TT) && (this._activePlugins.push(TT), this._activePlugins.sort(((TT, UT) => TT.priority - UT.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), TT.registerForExtraEvents && (this._activePluginsForExtraEvents.push(TT), this._activePluginsForExtraEvents.sort(((TT, UT) => TT.priority - UT.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(TT) {
        for (let UT = 0; UT < this._plugins.length; ++UT)
          if (this._plugins[UT].name === TT) return this._plugins[UT];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(TT) {
        let UT = !0;
        for (const mT of this._activePlugins) UT = UT && mT.isReadyForSubMesh(TT.defines, this._scene, this._engine, TT.subMesh);
        TT.isReadyForSubMesh = UT
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(TT) {
        for (const UT of this._activePlugins) UT.prepareDefinesBeforeAttributes(TT.defines, this._scene, TT.mesh)
      }
      _handlePluginEventPrepareDefines(TT) {
        for (const UT of this._activePlugins) UT.prepareDefines(TT.defines, this._scene, TT.mesh)
      }
      _handlePluginEventHardBindForSubMesh(TT) {
        for (const UT of this._activePluginsForExtraEvents) UT.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, TT.subMesh)
      }
      _handlePluginEventBindForSubMesh(TT) {
        for (const UT of this._activePlugins) UT.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, TT.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(TT) {
        let UT = !1;
        for (const mT of this._activePluginsForExtraEvents)
          if (UT = mT.hasRenderTargetTextures(), UT) break;
        TT.hasRenderTargetTextures = UT
      }
      _handlePluginEventFillRenderTargetTextures(TT) {
        for (const UT of this._activePluginsForExtraEvents) UT.fillRenderTargetTextures(TT.renderTargets)
      }
      _handlePluginEvent(TT, UT) {
        switch (TT) {
          case 512: {
            const TT = UT;
            for (const UT of this._activePlugins) UT.getActiveTextures(TT.activeTextures);
            break
          }
          case 256: {
            const TT = UT;
            for (const UT of this._activePlugins) UT.getAnimatables(TT.animatables);
            break
          }
          case 1024: {
            const TT = UT;
            let mT = !1;
            for (const UT of this._activePlugins)
              if (mT = UT.hasTexture(TT.texture), mT) break;
            TT.hasTexture = mT;
            break
          }
          case 2: {
            const TT = UT;
            for (const UT of this._plugins) UT.dispose(TT.forceDisposeTextures);
            break
          }
          case 4:
            UT.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const TT = UT;
            for (const UT of this._activePlugins) TT.fallbackRank = UT.addFallbacks(TT.defines, TT.fallbacks, TT.fallbackRank), UT.getAttributes(TT.attributes, this._scene, TT.mesh);
            this._uniformList.length > 0 && TT.uniforms.push(...this._uniformList), this._samplerList.length > 0 && TT.samplers.push(...this._samplerList), this._uboList.length > 0 && TT.uniformBuffersNames.push(...this._uboList), TT.customCode = this._injectCustomCode(TT, TT.customCode);
            break
          }
          case 8: {
            const TT = UT;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const mT = 1 === this._material.shaderLanguage;
            for (const UT of this._plugins) {
              const WT = UT.getUniforms(this._material.shaderLanguage);
              if (WT) {
                if (WT.ubo)
                  for (const UT of WT.ubo) {
                    if (UT.size && UT.type) {
                      const WT = UT.arraySize ?? 0;
                      if (TT.ubo.addUniform(UT.name, UT.size, WT), mT) {
                        let TT;
                        switch (UT.type) {
                          case "mat4":
                            TT = "mat4x4f";
                            break;
                          case "float":
                            TT = "f32";
                            break;
                          default:
                            TT = `${UT.type}f`
                        }
                        this._uboDeclaration += WT > 0 ? `uniform ${UT.name}: array<${TT}, ${WT}>;\n` : `uniform ${UT.name}: ${TT};\n`
                      } else this._uboDeclaration += `${UT.type} ${UT.name}${WT>0?`[${WT}]`:""};\n`
                    }
                    this._uniformList.push(UT.name)
                  }
                WT.vertex && (this._vertexDeclaration += WT.vertex + "\n"), WT.fragment && (this._fragmentDeclaration += WT.fragment + "\n"), WT.externalUniforms && this._uniformList.push(...WT.externalUniforms)
              }
              UT.getSamplers(this._samplerList), UT.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(TT, UT) {
        if (UT)
          for (const mT in UT) this._codeInjectionPoints[TT] || (this._codeInjectionPoints[TT] = {}), this._codeInjectionPoints[TT][mT] = !0
      }
      _injectCustomCode(TT, UT) {
        return (mT, WT) => {
          UT && (WT = UT(mT, WT)), this._uboDeclaration && (WT = WT.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (WT = WT.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (WT = WT.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const zT = this._codeInjectionPoints?.[mT];
          if (!zT) return WT;
          let HT = null;
          for (let UT in zT) {
            let zT = "";
            for (const WT of this._activePlugins) {
              const nT = this._material.shaderLanguage;
              let kT = WT.getCustomCode(mT, nT)?.[UT];
              kT && (WT.resolveIncludes && (null === HT && (HT = {
                defines: [],
                indexParameters: TT.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: gT.d.GetShadersRepository(nT),
                includesShadersStore: gT.d.GetIncludesShadersStore(nT),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                pWT: this._engine.pWT,
                processCodeAfterIncludes: void 0
              }), HT.isFragment = "fragment" === mT, (0, MT.g)(kT, HT, (TT => kT = TT))), zT += kT + "\n")
            }
            if (zT.length > 0)
              if ("!" === UT.charAt(0)) {
                UT = UT.substring(1);
                let TT = "g";
                if ("!" === UT.charAt(0)) TT = "", UT = UT.substring(1);
                else {
                  const mT = nT.exec(UT);
                  mT && mT.length >= 2 && (TT = mT[1], UT = UT.substring(TT.length + 1))
                }
                TT.indexOf("g") < 0 && (TT += "g");
                const mT = new RegExp(UT, TT);
                let MT = mT.exec(WT);
                for (; null !== MT;) {
                  const {
                    index: TT
                  } = MT, UT = kT(zT, MT);
                  WT = WT.substring(0, TT) + UT + WT.substring(TT + MT[0].length), mT.lastIndex = TT + UT.length, MT = mT.exec(WT)
                }
              } else {
                const TT = "#define " + UT;
                WT = WT.replace(TT, "\n" + zT + "\n" + TT)
              }
          }
          return WT
        }
      }
    }
    HT._MaterialPluginClassToMainDefine = {}, HT._MaterialPluginCounter = 0;

    function kT(TT, UT) {
      return TT.replace(/\$(\d+)/g, ((TT, mT) => {
        const WT = Number(mT);
        return WT < UT.length ? UT[WT] : ""
      }))
    }
    var jT = mT(40122),
      lT = mT(37239);
    let LT = (() => {
        var TT;
        let UT, mT, MT, gT, nT = [],
          kT = [],
          lT = [],
          LT = [],
          pT = [],
          BT = [],
          ZT = [],
          cT = [];
        return TT = class {
          isCompatible(TT) {
            return 0 === TT
          }
          _enable(TT) {
            TT && this._pluginManager._activatePlugin(this)
          }
          constructor(TT, UT, mT, zT) {
            let MT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              gT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              jT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, WT.k)(this, nT, void 0), this.priority = ((0, WT.k)(this, kT), (0, WT.k)(this, lT, 500)), this.resolveIncludes = ((0, WT.k)(this, LT), (0, WT.k)(this, pT, !1)), this.registerForExtraEvents = ((0, WT.k)(this, BT), (0, WT.k)(this, ZT, !1)), this.doNotSerialize = ((0, WT.k)(this, cT), !1), this._material = TT, this.name = UT, this.priority = mT, this.resolveIncludes = jT, TT.pluginManager || (TT.pluginManager = new HT(TT), TT.SF.add((() => {
              TT.pluginManager = void 0
            }))), this._pluginDefineNames = zT, this._pluginManager = TT.pluginManager, MT && this._pluginManager._addPlugin(this), gT && this._enable(!0), this.markAllDefinesAsDirty = TT._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(TT, UT, mT, WT) {
            return !0
          }
          hardBindForSubMesh(TT, UT, mT, WT) {}
          bindForSubMesh(TT, UT, mT, WT) {}
          dispose(TT) {}
          getCustomCode(TT) {
            return null
          }
          collectDefines(TT) {
            if (this._pluginDefineNames)
              for (const UT of Object.keys(this._pluginDefineNames)) {
                if ("_" === UT[0]) continue;
                const mT = typeof this._pluginDefineNames[UT];
                TT[UT] = {
                  type: "number" === mT ? "number" : "string" === mT ? "string" : "boolean" === mT ? "boolean" : "object",
                  default: this._pluginDefineNames[UT]
                }
              }
          }
          prepareDefinesBeforeAttributes(TT, UT, mT) {}
          prepareDefines(TT, UT, mT) {}
          hasTexture(TT) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(TT) {}
          getActiveTextures(TT) {}
          getAnimatables(TT) {}
          addFallbacks(TT, UT, mT) {
            return mT
          }
          getSamplers(TT) {}
          getAttributes(TT, UT, mT) {}
          getUniformBuffersNames(TT) {}
          getUniforms() {
            return {}
          }
          copyTo(TT) {
            jT.e.Clone((() => TT), this)
          }
          serialize() {
            return jT.e.Serialize(this)
          }
          parse(TT, UT, mT) {
            jT.e.Parse((() => this), TT, UT, mT)
          }
        }, (() => {
          const HT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          UT = [(0, zT.L)()], mT = [(0, zT.L)()], MT = [(0, zT.L)()], gT = [(0, zT.L)()], (0, WT.h)(null, null, UT, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: TT => "name" in TT,
              get: TT => TT.name,
              set: (TT, UT) => {
                TT.name = UT
              }
            },
            metadata: HT
          }, nT, kT), (0, WT.h)(null, null, mT, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: TT => "priority" in TT,
              get: TT => TT.priority,
              set: (TT, UT) => {
                TT.priority = UT
              }
            },
            metadata: HT
          }, lT, LT), (0, WT.h)(null, null, MT, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: TT => "resolveIncludes" in TT,
              get: TT => TT.resolveIncludes,
              set: (TT, UT) => {
                TT.resolveIncludes = UT
              }
            },
            metadata: HT
          }, pT, BT), (0, WT.h)(null, null, gT, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: TT => "registerForExtraEvents" in TT,
              get: TT => TT.registerForExtraEvents,
              set: (TT, UT) => {
                TT.registerForExtraEvents = UT
              }
            },
            metadata: HT
          }, ZT, cT), HT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: HT
          })
        })(), TT
      })(),
      pT = !1;

    function BT() {
      pT || (pT = !0, (0, lT.h)("BABYLON.MaterialPluginBase", LT))
    }
  },
  40394: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    class WT {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(TT) {
        TT.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(TT) {}
      bindForSubMesh(TT, UT, mT, WT, zT) {
        if (UT.prePassRenderer && UT.prePassRenderer.enabled && UT.prePassRenderer.currentRTisSceneRT && (-1 !== UT.prePassRenderer.getIndex(2) || -1 !== UT.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[mT.uniqueId] || (this.previousWorldMatrices[mT.uniqueId] = WT.clone()), this.previousViewProjection || (this.previousViewProjection = UT.getTransformMatrix().clone(), this.currentViewProjection = UT.getTransformMatrix().clone());
          const zT = UT.eB();
          this.currentViewProjection.updateFlag !== UT.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = zT.frameId, this.previousViewProjection.Gw(this.currentViewProjection), this.currentViewProjection.Gw(UT.getTransformMatrix())) : this._lastUpdateFrameId !== zT.frameId && (this._lastUpdateFrameId = zT.frameId, this.previousViewProjection.Gw(this.currentViewProjection)), TT.setMatrix("previousWorld", this.previousWorldMatrices[mT.uniqueId]), TT.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[mT.uniqueId] = WT.clone()
        }
      }
    }
  },
  40521: (TT, UT, mT) => {
    function WT(TT) {
      return class extends TT {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    mT.d(UT, {
      e: () => WT
    })
  },
  40379: (TT, UT, mT) => {
    mT.d(UT, {
      StandardMaterial: () => WT.f
    });
    var WT = mT(40387);
    (0, WT.b)()
  },
  40387: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => sT,
      f: () => IT
    });
    var WT = mT(40095),
      zT = mT(40102),
      MT = mT(40215),
      gT = mT(40198),
      nT = mT(37367),
      HT = mT(40257),
      kT = mT(40394),
      jT = mT(40399),
      lT = mT(40223),
      LT = mT(40413),
      pT = mT(40407),
      BT = mT(40474),
      ZT = mT(40465),
      cT = mT(40479),
      vT = mT(40484),
      fT = mT(40463),
      qT = mT(40495),
      iT = mT(40456),
      bT = mT(40122),
      OT = mT(40503),
      eT = mT(40511),
      YT = mT(40513),
      JT = mT(40521),
      xT = mT(40524),
      dT = mT(37239),
      wT = mT(39965);
    const tT = {
      effect: null,
      subMesh: null
    };
    class aT extends((0, JT.e)((0, YT.b)(pT.d))) {}
    class yT extends((0, jT.f)(aT)) {
      constructor(TT) {
        super(TT), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class XT extends((0, xT.b)(BT.c)) {}
    let IT = (() => {
        var TT, UT, jT, pT, YT, JT, xT, dT, wT, aT, IT, QT, sT, FT, PT, VT, uT, CT, rT, KT, ST, GT, NT, ET, hT, DT, oT, AT, RT, TU, UU, mU, WU;
        let zU, MU, gU, nU, HU, kU, jU, lU, LU, pU, BU, ZU, cU, vU, fU, qU, iU, bU, OU, eU, YU, JU, xU, dU, wU, tU, aU, yU, XU, IU, QU, sU, FU, PU, VU, uU, CU, rU, KU, SU, GU, NU, EU, hU, DU, oU, AU, RU, Tm, Um, mm, Wm, zm, Mm, gm, nm, Hm, km, jm, lm, Lm, pm, Bm, Zm, cm, fm, qm, im, bm, Om, em, Ym, Jm, xm = XT,
          dm = [],
          wm = [],
          tm = [],
          am = [],
          ym = [],
          Xm = [],
          Im = [],
          Qm = [],
          sm = [],
          Fm = [],
          Pm = [],
          Vm = [],
          um = [],
          Cm = [],
          rm = [],
          Km = [],
          Sm = [],
          Gm = [],
          Nm = [],
          Em = [],
          hm = [],
          Dm = [],
          om = [],
          Am = [],
          Rm = [],
          TW = [],
          UW = [],
          mW = [],
          WW = [],
          zW = [],
          MW = [],
          gW = [],
          nW = [],
          HW = [],
          kW = [],
          jW = [],
          lW = [],
          LW = [],
          pW = [],
          BW = [],
          ZW = [],
          cW = [],
          vW = [],
          fW = [],
          qW = [],
          iW = [],
          bW = [],
          OW = [],
          eW = [],
          YW = [],
          JW = [],
          xW = [],
          dW = [],
          wW = [],
          tW = [],
          aW = [],
          yW = [],
          XW = [],
          IW = [],
          QW = [],
          sW = [],
          FW = [],
          PW = [],
          VW = [],
          uW = [],
          CW = [],
          rW = [],
          KW = [],
          SW = [],
          GW = [],
          NW = [],
          EW = [],
          hW = [],
          DW = [],
          oW = [],
          AW = [],
          RW = [],
          Tz = [],
          Uz = [],
          mz = [],
          Wz = [],
          zz = [],
          Mz = [],
          gz = [],
          nz = [],
          Hz = [],
          kz = [],
          jz = [],
          lz = [],
          Lz = [],
          pz = [],
          Bz = [],
          Zz = [],
          cz = [],
          vz = [],
          fz = [],
          qz = [],
          iz = [],
          bz = [],
          Oz = [],
          ez = [],
          Yz = [],
          Jz = [],
          xz = [],
          dz = [],
          wz = [],
          tz = [],
          az = [],
          yz = [],
          Xz = [],
          Iz = [],
          Qz = [],
          sz = [],
          Fz = [],
          Pz = [],
          Vz = [],
          uz = [],
          Cz = [],
          rz = [],
          Kz = [],
          Sz = [],
          Gz = [],
          Nz = [],
          Ez = [],
          hz = [],
          Dz = [],
          oz = [],
          Az = [],
          Rz = [],
          TM = [],
          UM = [],
          mM = [],
          WM = [],
          zM = [],
          MM = [],
          gM = [],
          nM = [],
          HM = [],
          kM = [],
          jM = [],
          lM = [],
          LM = [],
          pM = [],
          BM = [],
          ZM = [],
          cM = [];
        return TT = class extends xm {
          get diffuseTexture() {
            return (0, WT.d)(this, UT, "f")
          }
          set diffuseTexture(TT) {
            (0, WT.e)(this, UT, TT, "f")
          }
          get ambientTexture() {
            return (0, WT.d)(this, jT, "f")
          }
          set ambientTexture(TT) {
            (0, WT.e)(this, jT, TT, "f")
          }
          get opacityTexture() {
            return (0, WT.d)(this, pT, "f")
          }
          set opacityTexture(TT) {
            (0, WT.e)(this, pT, TT, "f")
          }
          get reflectionTexture() {
            return (0, WT.d)(this, YT, "f")
          }
          set reflectionTexture(TT) {
            (0, WT.e)(this, YT, TT, "f")
          }
          get emissiveTexture() {
            return (0, WT.d)(this, JT, "f")
          }
          set emissiveTexture(TT) {
            (0, WT.e)(this, JT, TT, "f")
          }
          get specularTexture() {
            return (0, WT.d)(this, xT, "f")
          }
          set specularTexture(TT) {
            (0, WT.e)(this, xT, TT, "f")
          }
          get bumpTexture() {
            return (0, WT.d)(this, dT, "f")
          }
          set bumpTexture(TT) {
            (0, WT.e)(this, dT, TT, "f")
          }
          get lightmapTexture() {
            return (0, WT.d)(this, wT, "f")
          }
          set lightmapTexture(TT) {
            (0, WT.e)(this, wT, TT, "f")
          }
          get refractionTexture() {
            return (0, WT.d)(this, aT, "f")
          }
          set refractionTexture(TT) {
            (0, WT.e)(this, aT, TT, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, WT.d)(this, IT, "f")
          }
          set useAlphaFromDiffuseTexture(TT) {
            (0, WT.e)(this, IT, TT, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, WT.d)(this, QT, "f")
          }
          set useEmissiveAsIllumination(TT) {
            (0, WT.e)(this, QT, TT, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, WT.d)(this, sT, "f")
          }
          set linkEmissiveWithDiffuse(TT) {
            (0, WT.e)(this, sT, TT, "f")
          }
          get useSpecularOverAlpha() {
            return (0, WT.d)(this, FT, "f")
          }
          set useSpecularOverAlpha(TT) {
            (0, WT.e)(this, FT, TT, "f")
          }
          get useReflectionOverAlpha() {
            return (0, WT.d)(this, PT, "f")
          }
          set useReflectionOverAlpha(TT) {
            (0, WT.e)(this, PT, TT, "f")
          }
          get disableLighting() {
            return (0, WT.d)(this, VT, "f")
          }
          set disableLighting(TT) {
            (0, WT.e)(this, VT, TT, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, WT.d)(this, uT, "f")
          }
          set useObjectSpaceNormalMap(TT) {
            (0, WT.e)(this, uT, TT, "f")
          }
          get useParallax() {
            return (0, WT.d)(this, CT, "f")
          }
          set useParallax(TT) {
            (0, WT.e)(this, CT, TT, "f")
          }
          get useParallaxOcclusion() {
            return (0, WT.d)(this, rT, "f")
          }
          set useParallaxOcclusion(TT) {
            (0, WT.e)(this, rT, TT, "f")
          }
          get roughness() {
            return (0, WT.d)(this, KT, "f")
          }
          set roughness(TT) {
            (0, WT.e)(this, KT, TT, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, WT.d)(this, ST, "f")
          }
          set useLightmapAsShadowmap(TT) {
            (0, WT.e)(this, ST, TT, "f")
          }
          get diffuseFresnelParameters() {
            return (0, WT.d)(this, GT, "f")
          }
          set diffuseFresnelParameters(TT) {
            (0, WT.e)(this, GT, TT, "f")
          }
          get opacityFresnelParameters() {
            return (0, WT.d)(this, NT, "f")
          }
          set opacityFresnelParameters(TT) {
            (0, WT.e)(this, NT, TT, "f")
          }
          get reflectionFresnelParameters() {
            return (0, WT.d)(this, ET, "f")
          }
          set reflectionFresnelParameters(TT) {
            (0, WT.e)(this, ET, TT, "f")
          }
          get refractionFresnelParameters() {
            return (0, WT.d)(this, hT, "f")
          }
          set refractionFresnelParameters(TT) {
            (0, WT.e)(this, hT, TT, "f")
          }
          get emissiveFresnelParameters() {
            return (0, WT.d)(this, DT, "f")
          }
          set emissiveFresnelParameters(TT) {
            (0, WT.e)(this, DT, TT, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, WT.d)(this, oT, "f")
          }
          set useReflectionFresnelFromSpecular(TT) {
            (0, WT.e)(this, oT, TT, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, WT.d)(this, AT, "f")
          }
          set useGlossinessFromSpecularMapAlpha(TT) {
            (0, WT.e)(this, AT, TT, "f")
          }
          get maxSimultaneousLights() {
            return (0, WT.d)(this, RT, "f")
          }
          set maxSimultaneousLights(TT) {
            (0, WT.e)(this, RT, TT, "f")
          }
          get invertNormalMapX() {
            return (0, WT.d)(this, TU, "f")
          }
          set invertNormalMapX(TT) {
            (0, WT.e)(this, TU, TT, "f")
          }
          get invertNormalMapY() {
            return (0, WT.d)(this, UU, "f")
          }
          set invertNormalMapY(TT) {
            (0, WT.e)(this, UU, TT, "f")
          }
          get twoSidedLighting() {
            return (0, WT.d)(this, mU, "f")
          }
          set twoSidedLighting(TT) {
            (0, WT.e)(this, mU, TT, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, WT.d)(this, WU, "f")
          }
          set applyDecalMapAfterDetailMap(TT) {
            (0, WT.e)(this, WU, TT, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(mT, zT) {
            super(mT, zT, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || TT.ForceGLSL), this._diffuseTexture = (0, WT.k)(this, dm, null), UT.set(this, ((0, WT.k)(this, wm), (0, WT.k)(this, tm, void 0))), this._ambientTexture = ((0, WT.k)(this, am), (0, WT.k)(this, ym, null)), jT.set(this, ((0, WT.k)(this, Xm), (0, WT.k)(this, Im, void 0))), this._opacityTexture = ((0, WT.k)(this, Qm), (0, WT.k)(this, sm, null)), pT.set(this, ((0, WT.k)(this, Fm), (0, WT.k)(this, Pm, void 0))), this._reflectionTexture = ((0, WT.k)(this, Vm), (0, WT.k)(this, um, null)), YT.set(this, ((0, WT.k)(this, Cm), (0, WT.k)(this, rm, void 0))), this._emissiveTexture = ((0, WT.k)(this, Km), (0, WT.k)(this, Sm, null)), JT.set(this, ((0, WT.k)(this, Gm), (0, WT.k)(this, Nm, void 0))), this._specularTexture = ((0, WT.k)(this, Em), (0, WT.k)(this, hm, null)), xT.set(this, ((0, WT.k)(this, Dm), (0, WT.k)(this, om, void 0))), this._bumpTexture = ((0, WT.k)(this, Am), (0, WT.k)(this, Rm, null)), dT.set(this, ((0, WT.k)(this, TW), (0, WT.k)(this, UW, void 0))), this._lightmapTexture = ((0, WT.k)(this, mW), (0, WT.k)(this, WW, null)), wT.set(this, ((0, WT.k)(this, zW), (0, WT.k)(this, MW, void 0))), this._refractionTexture = ((0, WT.k)(this, gW), (0, WT.k)(this, nW, null)), aT.set(this, ((0, WT.k)(this, HW), (0, WT.k)(this, kW, void 0))), this.ambientColor = ((0, WT.k)(this, jW), (0, WT.k)(this, lW, new nT.d(0, 0, 0))), this.diffuseColor = ((0, WT.k)(this, LW), (0, WT.k)(this, pW, new nT.d(1, 1, 1))), this.specularColor = ((0, WT.k)(this, BW), (0, WT.k)(this, ZW, new nT.d(1, 1, 1))), this.emissiveColor = ((0, WT.k)(this, cW), (0, WT.k)(this, vW, new nT.d(0, 0, 0))), this.specularPower = ((0, WT.k)(this, fW), (0, WT.k)(this, qW, 64)), this._useAlphaFromDiffuseTexture = ((0, WT.k)(this, iW), (0, WT.k)(this, bW, !1)), IT.set(this, ((0, WT.k)(this, OW), (0, WT.k)(this, eW, void 0))), this._useEmissiveAsIllumination = ((0, WT.k)(this, YW), (0, WT.k)(this, JW, !1)), QT.set(this, ((0, WT.k)(this, xW), (0, WT.k)(this, dW, void 0))), this._linkEmissiveWithDiffuse = ((0, WT.k)(this, wW), (0, WT.k)(this, tW, !1)), sT.set(this, ((0, WT.k)(this, aW), (0, WT.k)(this, yW, void 0))), this._useSpecularOverAlpha = ((0, WT.k)(this, XW), (0, WT.k)(this, IW, !1)), FT.set(this, ((0, WT.k)(this, QW), (0, WT.k)(this, sW, void 0))), this._useReflectionOverAlpha = ((0, WT.k)(this, FW), (0, WT.k)(this, PW, !1)), PT.set(this, ((0, WT.k)(this, VW), (0, WT.k)(this, uW, void 0))), this._disableLighting = ((0, WT.k)(this, CW), (0, WT.k)(this, rW, !1)), VT.set(this, ((0, WT.k)(this, KW), (0, WT.k)(this, SW, void 0))), this._useObjectSpaceNormalMap = ((0, WT.k)(this, GW), (0, WT.k)(this, NW, !1)), uT.set(this, ((0, WT.k)(this, EW), (0, WT.k)(this, hW, void 0))), this._useParallax = ((0, WT.k)(this, DW), (0, WT.k)(this, oW, !1)), CT.set(this, ((0, WT.k)(this, AW), (0, WT.k)(this, RW, void 0))), this._useParallaxOcclusion = ((0, WT.k)(this, Tz), (0, WT.k)(this, Uz, !1)), rT.set(this, ((0, WT.k)(this, mz), (0, WT.k)(this, Wz, void 0))), this.parallaxScaleBias = ((0, WT.k)(this, zz), (0, WT.k)(this, Mz, .05)), this._roughness = ((0, WT.k)(this, gz), (0, WT.k)(this, nz, 0)), KT.set(this, ((0, WT.k)(this, Hz), (0, WT.k)(this, kz, void 0))), this.indexOfRefraction = ((0, WT.k)(this, jz), (0, WT.k)(this, lz, .98)), this.invertRefractionY = ((0, WT.k)(this, Lz), (0, WT.k)(this, pz, !0)), this.alphaCutOff = ((0, WT.k)(this, Bz), (0, WT.k)(this, Zz, .4)), this._useLightmapAsShadowmap = ((0, WT.k)(this, cz), (0, WT.k)(this, vz, !1)), ST.set(this, ((0, WT.k)(this, fz), (0, WT.k)(this, qz, void 0))), this._diffuseFresnelParameters = ((0, WT.k)(this, iz), (0, WT.k)(this, bz, void 0)), GT.set(this, ((0, WT.k)(this, Oz), (0, WT.k)(this, ez, void 0))), this._opacityFresnelParameters = ((0, WT.k)(this, Yz), (0, WT.k)(this, Jz, void 0)), NT.set(this, ((0, WT.k)(this, xz), (0, WT.k)(this, dz, void 0))), this._reflectionFresnelParameters = ((0, WT.k)(this, wz), (0, WT.k)(this, tz, void 0)), ET.set(this, ((0, WT.k)(this, az), (0, WT.k)(this, yz, void 0))), this._refractionFresnelParameters = ((0, WT.k)(this, Xz), (0, WT.k)(this, Iz, void 0)), hT.set(this, ((0, WT.k)(this, Qz), (0, WT.k)(this, sz, void 0))), this._emissiveFresnelParameters = ((0, WT.k)(this, Fz), (0, WT.k)(this, Pz, void 0)), DT.set(this, ((0, WT.k)(this, Vz), (0, WT.k)(this, uz, void 0))), this._useReflectionFresnelFromSpecular = ((0, WT.k)(this, Cz), (0, WT.k)(this, rz, !1)), oT.set(this, ((0, WT.k)(this, Kz), (0, WT.k)(this, Sz, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, WT.k)(this, Gz), (0, WT.k)(this, Nz, !1)), AT.set(this, ((0, WT.k)(this, Ez), (0, WT.k)(this, hz, void 0))), this._maxSimultaneousLights = ((0, WT.k)(this, Dz), (0, WT.k)(this, oz, 4)), RT.set(this, ((0, WT.k)(this, Az), (0, WT.k)(this, Rz, void 0))), this._invertNormalMapX = ((0, WT.k)(this, TM), (0, WT.k)(this, UM, !1)), TU.set(this, ((0, WT.k)(this, mM), (0, WT.k)(this, WM, void 0))), this._invertNormalMapY = ((0, WT.k)(this, zM), (0, WT.k)(this, MM, !1)), UU.set(this, ((0, WT.k)(this, gM), (0, WT.k)(this, nM, void 0))), this._twoSidedLighting = ((0, WT.k)(this, HM), (0, WT.k)(this, kM, !1)), mU.set(this, ((0, WT.k)(this, jM), (0, WT.k)(this, lM, void 0))), this._applyDecalMapAfterDetailMap = ((0, WT.k)(this, LM), (0, WT.k)(this, pM, !1)), WU.set(this, ((0, WT.k)(this, BM), (0, WT.k)(this, ZM, void 0))), this._vertexPullingMetadata = ((0, WT.k)(this, cM), null), this._renderTargets = new MT.f(16), this._globalAmbientColor = new nT.d(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new vT.c(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new kT.d, this.getRenderTargetTextures = () => (this._renderTargets.reset(), TT.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), TT.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
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
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === LT.b.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== LT.b.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(UT, mT) {
            let WT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const zT = mT._drawWrapper;
            if (zT.effect && this.isFrozen && zT._wasPreviouslyReady && zT._wasPreviouslyUsingInstances === WT) return !0;
            mT.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), mT.materialDefines = new yT(this._eventInfo.defineNames));
            const MT = this.KF(),
              gT = mT.materialDefines;
            if (this._isReadyForSubMesh(mT)) return !0;
            const nT = MT.eB();
            if (gT._needNormals = (0, iT.W)(MT, UT, gT, !0, this._maxSimultaneousLights, this._disableLighting), !(0, iT.c)(MT, UT, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, iT.db)(MT, gT);
            const jT = this.needAlphaBlendingForMesh(UT) && this.KF().useOrderIndependentTransparency;
            if ((0, iT.ib)(MT, gT, this.canRenderToMRT && !jT), (0, iT.gb)(MT, gT, jT), eT.c.PrepareDefines(nT.currentRenderPassId, UT, gT), gT._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, gT._needUVs = !1;
              for (let TT = 1; TT <= 6; ++TT) gT["MAINUV" + TT] = !1;
              if (MT.texturesEnabled) {
                if (gT.DIFFUSEDIRECTUV = 0, gT.BUMPDIRECTUV = 0, gT.AMBIENTDIRECTUV = 0, gT.OPACITYDIRECTUV = 0, gT.EMISSIVEDIRECTUV = 0, gT.SPECULARDIRECTUV = 0, gT.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && TT.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, iT.X)(this._diffuseTexture, gT, "DIFFUSE")
                } else gT.DIFFUSE = !1;
                if (this._ambientTexture && TT.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, iT.X)(this._ambientTexture, gT, "AMBIENT")
                } else gT.AMBIENT = !1;
                if (this._opacityTexture && TT.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, iT.X)(this._opacityTexture, gT, "OPACITY"), gT.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else gT.OPACITY = !1;
                if (this._reflectionTexture && TT.ReflectionTextureEnabled ? (gT.ROUGHNESS = this._roughness > 0, gT.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (gT.ROUGHNESS = !1, gT.REFLECTIONOVERALPHA = !1), !(0, iT.S)(MT, this._reflectionTexture, gT)) return !1;
                if (this._emissiveTexture && TT.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, iT.X)(this._emissiveTexture, gT, "EMISSIVE")
                } else gT.EMISSIVE = !1;
                if (this._lightmapTexture && TT.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, iT.X)(this._lightmapTexture, gT, "LIGHTMAP"), gT.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, gT.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else gT.LIGHTMAP = !1;
                if (this._specularTexture && TT.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, iT.X)(this._specularTexture, gT, "SPECULAR"), gT.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else gT.SPECULAR = !1;
                if (MT.eB().getCaps().standardDerivatives && this._bumpTexture && TT.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, iT.X)(this._bumpTexture, gT, "BUMP"), gT.PARALLAX = this._useParallax, gT.PARALLAX_RHS = MT.useRightHandedSystem, gT.PARALLAXOCCLUSION = this._useParallaxOcclusion, gT.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else gT.BUMP = !1, gT.PARALLAX = !1, gT.PARALLAX_RHS = !1, gT.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && TT.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  gT._needUVs = !0, gT.REFRACTION = !0, gT.REFRACTIONMAP_3D = this._refractionTexture.isCube, gT.RGBDREFRACTION = this._refractionTexture.isRGBD, gT.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else gT.REFRACTION = !1;
                gT.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else gT.DIFFUSE = !1, gT.AMBIENT = !1, gT.OPACITY = !1, gT.REFLECTION = !1, gT.EMISSIVE = !1, gT.LIGHTMAP = !1, gT.BUMP = !1, gT.REFRACTION = !1;
              gT.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), gT.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, gT.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, gT.SPECULAROVERALPHA = this._useSpecularOverAlpha, gT.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, gT.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, gT.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(UT), gT.TEXTURE_REPETITION_MODE = nT.version > 1 || nT.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = gT, this._eventInfo.subMesh = mT, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (gT._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(gT), gT.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, gT.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (gT._areFresnelDirty && (TT.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (gT.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, gT.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, gT.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, gT.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, gT.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, gT.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, gT._needNormals = !0, gT.FRESNEL = !0) : gT.FRESNEL = !1), gT.AREALIGHTUSED || gT.CLUSTLIGHT_BATCH)
              for (let TT = 0; TT < UT.lightSources.length; TT++)
                if (!UT.lightSources[TT]._isReady()) return !1;
            (0, iT.$)(UT, MT, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(UT), gT, this._applyDecalMapAfterDetailMap, this._useVertexPulling, mT.getRenderingMesh(), this._isVertexOutputInvariant), (0, iT.R)(MT, nT, this, gT, WT, null, mT.getRenderingMesh().hasThinInstances), this._eventInfo.defines = gT, this._eventInfo.mesh = UT, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, iT.O)(UT, gT, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let LT = !1;
            if (gT.isDirty) {
              const WT = gT._areLightsDisposed;
              gT.markAsProcessed();
              const zT = new cT.c;
              gT.REFLECTION && zT.addFallback(0, "REFLECTION"), gT.SPECULAR && zT.addFallback(0, "SPECULAR"), gT.BUMP && zT.addFallback(0, "BUMP"), gT.PARALLAX && zT.addFallback(1, "PARALLAX"), gT.PARALLAX_RHS && zT.addFallback(1, "PARALLAX_RHS"), gT.PARALLAXOCCLUSION && zT.addFallback(0, "PARALLAXOCCLUSION"), gT.SPECULAROVERALPHA && zT.addFallback(0, "SPECULAROVERALPHA"), gT.FOG && zT.addFallback(1, "FOG"), gT.POINTSIZE && zT.addFallback(0, "POINTSIZE"), gT.LOGARITHMICDEPTH && zT.addFallback(0, "LOGARITHMICDEPTH"), (0, iT.y)(gT, zT, this._maxSimultaneousLights), gT.SPECULARTERM && zT.addFallback(0, "SPECULARTERM"), gT.DIFFUSEFRESNEL && zT.addFallback(1, "DIFFUSEFRESNEL"), gT.OPACITYFRESNEL && zT.addFallback(2, "OPACITYFRESNEL"), gT.REFLECTIONFRESNEL && zT.addFallback(3, "REFLECTIONFRESNEL"), gT.EMISSIVEFRESNEL && zT.addFallback(4, "EMISSIVEFRESNEL"), gT.FRESNEL && zT.addFallback(4, "FRESNEL"), gT.MULTIVIEW && zT.addFallback(0, "MULTIVIEW");
              const jT = [HT.i.PositionKind];
              gT.NORMAL && jT.push(HT.i.NormalKind), gT.TANGENT && jT.push(HT.i.TangentKind);
              for (let TT = 1; TT <= 6; ++TT) gT["UV" + TT] && jT.push(`uv${1===TT?"":TT}`);
              gT.VERTEXCOLOR && jT.push(HT.i.ColorKind), (0, iT.E)(jT, UT, gT, zT), (0, iT.G)(jT, gT), (0, iT.J)(jT, UT, gT), (0, iT.C)(jT, UT, gT);
              let pT = "default";
              const BT = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                ZT = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, iT.ob)(BT, ZT, !1);
              const vT = ["Material", "Scene", "Mesh"],
                bT = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: gT.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = zT, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = gT, this._eventInfo.uniforms = BT, this._eventInfo.attributes = jT, this._eventInfo.samplers = ZT, this._eventInfo.uniformBuffersNames = vT, this._eventInfo.customCode = void 0, this._eventInfo.mesh = UT, this._eventInfo.indexParameters = bT, this._callbackPluginEventGeneric(128, this._eventInfo), eT.c.AddUniformsAndSamplers(BT, ZT), kT.d.AddUniforms(BT), kT.d.AddSamplers(ZT), lT.b && (lT.b.PrepareUniforms(BT, gT), lT.b.PrepareSamplers(ZT, gT)), (0, iT.rb)({
                  uniformsNames: BT,
                  uniformBuffersNames: vT,
                  samplers: ZT,
                  defines: gT,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, fT.b)(BT), this._useVertexPulling) {
                const TT = mT.getRenderingMesh(),
                  UT = TT?.geometry;
                UT && (this._vertexPullingMetadata = (0, qT.f)(UT), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((TT, UT) => {
                  BT.push(`vp_${UT}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const OT = {};
              this.customShaderNameResolve && (pT = this.customShaderNameResolve(pT, BT, vT, ZT, gT, jT, OT));
              const YT = gT.toString(),
                JT = mT.effect,
                xT = MT.eB().createEffect(pT, {
                  attributes: jT,
                  uniformsNames: BT,
                  uniformBuffersNames: vT,
                  samplers: ZT,
                  defines: YT,
                  fallbacks: zT,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: bT,
                  processFinalCode: OT.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: gT.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: TT._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, nT);
              if (this._eventInfo.customCode = void 0, xT)
                if (this._onEffectCreatedObservable && (tT.effect = xT, tT.subMesh = mT, this._onEffectCreatedObservable.notifyObservers(tT)), this.allowShaderHotSwapping && JT && !xT.isReady()) {
                  if (gT.markAsUnprocessed(), LT = this.isFrozen, WT) return gT._areLightsDisposed = !0, !1
                } else MT.resetCachedMaterial(), mT.setEffect(xT, gT, this._materialContext)
            }
            return !(!mT.effect || !mT.effect.isReady()) && (gT._renderId = MT.getRenderId(), zT._wasPreviouslyReady = !LT, zT._wasPreviouslyUsingInstances = WT, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const TT = this._uniformBuffer;
            TT.addUniform("diffuseLeftColor", 4), TT.addUniform("diffuseRightColor", 4), TT.addUniform("opacityParts", 4), TT.addUniform("reflectionLeftColor", 4), TT.addUniform("reflectionRightColor", 4), TT.addUniform("refractionLeftColor", 4), TT.addUniform("refractionRightColor", 4), TT.addUniform("emissiveLeftColor", 4), TT.addUniform("emissiveRightColor", 4), TT.addUniform("vDiffuseInfos", 2), TT.addUniform("vAmbientInfos", 2), TT.addUniform("vOpacityInfos", 2), TT.addUniform("vEmissiveInfos", 2), TT.addUniform("vLightmapInfos", 2), TT.addUniform("vSpecularInfos", 2), TT.addUniform("vBumpInfos", 3), TT.addUniform("diffuseMatrix", 16), TT.addUniform("ambientMatrix", 16), TT.addUniform("opacityMatrix", 16), TT.addUniform("emissiveMatrix", 16), TT.addUniform("lightmapMatrix", 16), TT.addUniform("specularMatrix", 16), TT.addUniform("bumpMatrix", 16), TT.addUniform("vTangentSpaceParams", 2), TT.addUniform("pointSize", 1), TT.addUniform("alphaCutOff", 1), TT.addUniform("refractionMatrix", 16), TT.addUniform("vRefractionInfos", 4), TT.addUniform("vRefractionPosition", 3), TT.addUniform("vRefractionSize", 3), TT.addUniform("vSpecularColor", 4), TT.addUniform("vEmissiveColor", 3), TT.addUniform("vDiffuseColor", 4), TT.addUniform("vAmbientColor", 3), TT.addUniform("cameraInfo", 4), TT.addUniform("vTextureRepetitionHexTilingParams", 4), (0, iT.kb)(TT, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(UT, mT, WT) {
            const zT = this.KF(),
              MT = WT.materialDefines;
            if (!MT) return;
            const HT = WT.effect;
            if (!HT) return;
            this._activeEffect = HT, mT.getMeshUniformBuffer().bindToEffect(HT, "Mesh"), mT.transferToEffect(UT), this._uniformBuffer.bindToEffect(HT, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, zT, mT, UT, this.isFrozen), eT.c.Bind(zT.eB().currentRenderPassId, this._activeEffect, mT, UT, this);
            const kT = zT.activeCamera;
            kT ? this._uniformBuffer.updateFloat4("cameraInfo", kT.minZ, kT.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const jT = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", jT[0], jT[1], jT[2], jT[3]), this._eventInfo.subMesh = WT, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), MT.OBJECTSPACE_NORMALMAP && (UT.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const lT = this._mustRebind(zT, HT, WT, mT.visibility),
              LT = zT.eB()._features.needToAlwaysBindUniformBuffers;
            (0, iT.d)(mT, HT), this._vertexPullingMetadata && (0, qT.c)(HT, this._vertexPullingMetadata);
            const pT = this._uniformBuffer;
            if (lT) {
              if (this.bindViewProjection(HT), !pT.useUbo || !this.isFrozen || !pT.isSync || WT._drawWrapper._forceRebindOnNextCall) {
                if (TT.FresnelEnabled && MT.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (pT.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), pT.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const TT = nT.m.Color3[0];
                    TT.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), pT.updateColor4("opacityParts", TT, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (pT.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), pT.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (pT.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), pT.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (pT.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), pT.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (MT.ALPHATEST && pT.updateFloat("alphaCutOff", this.alphaCutOff), zT.texturesEnabled && (this._diffuseTexture && TT.DiffuseTextureEnabled && (pT.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, iT.x)(this._diffuseTexture, pT, "diffuse")), this._ambientTexture && TT.AmbientTextureEnabled && (pT.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, iT.x)(this._ambientTexture, pT, "ambient")), this._opacityTexture && TT.OpacityTextureEnabled && (pT.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, iT.x)(this._opacityTexture, pT, "opacity")), (0, iT.i)(zT, MT, pT, nT.d.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && TT.ReflectionTextureEnabled || pT.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && TT.EmissiveTextureEnabled && (pT.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, iT.x)(this._emissiveTexture, pT, "emissive")), this._lightmapTexture && TT.LightmapTextureEnabled && (pT.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, iT.x)(this._lightmapTexture, pT, "lightmap")), this._specularTexture && TT.SpecularTextureEnabled && (pT.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, iT.x)(this._specularTexture, pT, "specular")), this._bumpTexture && zT.eB().getCaps().standardDerivatives && TT.BumpTextureEnabled && (pT.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, iT.x)(this._bumpTexture, pT, "bump"), zT._mirroredCameraPosition ? pT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : pT.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && TT.RefractionTextureEnabled)) {
                  let TT = 1;
                  if (this._refractionTexture.isCube || (pT.R7("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (TT = this._refractionTexture.depth)), pT.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, TT, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const TT = this._refractionTexture;
                    pT.updateVector3("vRefractionPosition", TT.boundingBoxPosition), pT.updateVector3("vRefractionSize", TT.boundingBoxSize)
                  }
                }
                this.pointsCloud && pT.updateFloat("pointSize", this.pointSize), pT.updateColor4("vSpecularColor", this.specularColor, this.specularPower), pT.updateColor3("vEmissiveColor", TT.EmissiveTextureEnabled ? this.emissiveColor : nT.d.BlackReadOnly), pT.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), zT.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), pT.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              zT.texturesEnabled && (this._diffuseTexture && TT.DiffuseTextureEnabled && HT.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && TT.AmbientTextureEnabled && HT.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && TT.OpacityTextureEnabled && HT.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && TT.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? HT.setTexture("reflectionCubeSampler", this._reflectionTexture) : HT.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && TT.EmissiveTextureEnabled && HT.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && TT.LightmapTextureEnabled && HT.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && TT.SpecularTextureEnabled && HT.setTexture("specularSampler", this._specularTexture), this._bumpTexture && zT.eB().getCaps().standardDerivatives && TT.BumpTextureEnabled && HT.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && TT.RefractionTextureEnabled && (this._refractionTexture.isCube ? HT.setTexture("refractionCubeSampler", this._refractionTexture) : HT.setTexture("refraction2DSampler", this._refractionTexture))), this.KF().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(mT) && this.KF().depthPeelingRenderer.bind(HT), this._eventInfo.subMesh = WT, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, fT.c)(HT, this, zT), this.bindEyePosition(HT)
            } else LT && (this._needToBindSceneUbo = !0);
            !lT && this.isFrozen && !LT || !zT.lightsEnabled || this._disableLighting || (0, iT.l)(zT, mT, HT, MT, this._maxSimultaneousLights), !lT && this.isFrozen || ((zT.fogEnabled && mT.applyFog && zT.fogMode !== gT.i.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || mT.receiveShadows || MT.PREPASS || MT.CLUSTLIGHT_BATCH) && this.bindView(HT), (0, iT.f)(zT, mT, HT), MT.NUM_MORPH_INFLUENCERS && (0, iT.s)(mT, HT), MT.BAKED_VERTEX_ANIMATION_TEXTURE && mT.bakedVertexAnimationManager?.bind(HT, MT.INSTANCES), this.useLogarithmicDepth && (0, iT.p)(MT, HT, zT), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(mT, this._activeEffect, WT), pT.update()
          }
          _canBindRunFollower(UT, mT, WT, zT, MT) {
            const gT = UT.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === TT.prototype.isReadyForSubMesh && this.bindForSubMesh === TT.prototype.bindForSubMesh && this._mustRebind === BT.c.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !mT._features.needToAlwaysBindUniformBuffers && !(gT && gT.enabled && gT.currentRTisSceneRT) && !eT.c._Configurations[mT.currentRenderPassId] && !zT.materialDefines?.OBJECTSPACE_NORMALMAP && !WT.skeleton && !MT._bonesComputationForcedToCPU
          }
          _bindRunFollower(TT, UT, mT, WT) {
            this._activeEffect = WT, UT.getMeshUniformBuffer().bindToEffect(WT, "Mesh"), UT.transferToEffect(TT);
            const zT = this._uniformBuffer;
            zT.bindToEffect(WT, "Material");
            const MT = this._scene.activeCamera;
            MT ? zT.updateFloat4("cameraInfo", MT.minZ, MT.maxZ, 0, 0) : zT.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const gT = this.textureRepetitionHexTilingParams;
            zT.updateFloat4("vTextureRepetitionHexTilingParams", gT[0], gT[1], gT[2], gT[3]), this._afterBind(UT, WT, mT), zT.update()
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
          dispose(TT, UT) {
            UT && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(TT, UT)
          }
          clone(UT) {
            let mT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const zT = bT.e.Clone((() => new TT(UT, this.KF())), this, {
              cloneTexturesOnlyOnce: mT
            });
            return zT.name = UT, zT.id = UT, this.stencil.copyTo(zT.stencil), this._clonePlugins(zT, WT), zT
          }
          static Parse(UT, mT, WT) {
            const zT = bT.e.Parse((() => new TT(UT.name, mT)), UT, mT, WT);
            return UT.stencil && zT.stencil.parse(UT.stencil, mT, WT), LT.b._ParsePlugins(UT, zT, mT, WT), zT
          }
          static get DiffuseTextureEnabled() {
            return ZT.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(TT) {
            ZT.e.DiffuseTextureEnabled = TT
          }
          static get DetailTextureEnabled() {
            return ZT.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(TT) {
            ZT.e.DetailTextureEnabled = TT
          }
          static get AmbientTextureEnabled() {
            return ZT.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(TT) {
            ZT.e.AmbientTextureEnabled = TT
          }
          static get OpacityTextureEnabled() {
            return ZT.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(TT) {
            ZT.e.OpacityTextureEnabled = TT
          }
          static get ReflectionTextureEnabled() {
            return ZT.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(TT) {
            ZT.e.ReflectionTextureEnabled = TT
          }
          static get EmissiveTextureEnabled() {
            return ZT.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(TT) {
            ZT.e.EmissiveTextureEnabled = TT
          }
          static get SpecularTextureEnabled() {
            return ZT.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(TT) {
            ZT.e.SpecularTextureEnabled = TT
          }
          static get BumpTextureEnabled() {
            return ZT.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(TT) {
            ZT.e.BumpTextureEnabled = TT
          }
          static get LightmapTextureEnabled() {
            return ZT.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(TT) {
            ZT.e.LightmapTextureEnabled = TT
          }
          static get RefractionTextureEnabled() {
            return ZT.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(TT) {
            ZT.e.RefractionTextureEnabled = TT
          }
          static get ColorGradingTextureEnabled() {
            return ZT.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(TT) {
            ZT.e.ColorGradingTextureEnabled = TT
          }
          static get FresnelEnabled() {
            return ZT.e.FresnelEnabled
          }
          static set FresnelEnabled(TT) {
            ZT.e.FresnelEnabled = TT
          }
        }, UT = new WeakMap, jT = new WeakMap, pT = new WeakMap, YT = new WeakMap, JT = new WeakMap, xT = new WeakMap, dT = new WeakMap, wT = new WeakMap, aT = new WeakMap, IT = new WeakMap, QT = new WeakMap, sT = new WeakMap, FT = new WeakMap, PT = new WeakMap, VT = new WeakMap, uT = new WeakMap, CT = new WeakMap, rT = new WeakMap, KT = new WeakMap, ST = new WeakMap, GT = new WeakMap, NT = new WeakMap, ET = new WeakMap, hT = new WeakMap, DT = new WeakMap, oT = new WeakMap, AT = new WeakMap, RT = new WeakMap, TU = new WeakMap, UU = new WeakMap, mU = new WeakMap, WU = new WeakMap, (() => {
          const UT = "function" === typeof Symbol && Symbol.metadata ? Object.create(xm[Symbol.metadata] ?? null) : void 0;
          zU = [(0, zT.C)("diffuseTexture")], MU = [(0, zT.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], gU = [(0, zT.C)("ambientTexture")], nU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], HU = [(0, zT.C)("opacityTexture")], kU = [(0, zT.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], jU = [(0, zT.C)("reflectionTexture")], lU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], LU = [(0, zT.C)("emissiveTexture")], pU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], BU = [(0, zT.C)("specularTexture")], ZU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], cU = [(0, zT.C)("bumpTexture")], vU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], fU = [(0, zT.C)("lightmapTexture")], qU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], iU = [(0, zT.C)("refractionTexture")], bU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], OU = [(0, zT.l)("ambient")], eU = [(0, zT.l)("diffuse")], YU = [(0, zT.l)("specular")], JU = [(0, zT.l)("emissive")], xU = [(0, zT.L)()], dU = [(0, zT.L)("useAlphaFromDiffuseTexture")], wU = [() => ({
            init(TT) {
              return void 0 === TT && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = TT), TT
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(TT) {
              this._useAlphaFromDiffuseTexture = TT
            }
          })], tU = [(0, zT.L)("useEmissiveAsIllumination")], aU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], yU = [(0, zT.L)("linkEmissiveWithDiffuse")], XU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], IU = [(0, zT.L)("useSpecularOverAlpha")], QU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], sU = [(0, zT.L)("useReflectionOverAlpha")], FU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], PU = [(0, zT.L)("disableLighting")], VU = [(0, zT.g)("_markAllSubMeshesAsLightsDirty")], uU = [(0, zT.L)("useObjectSpaceNormalMap")], CU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], rU = [(0, zT.L)("useParallax")], KU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], SU = [(0, zT.L)("useParallaxOcclusion")], GU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], NU = [(0, zT.L)()], EU = [(0, zT.L)("roughness")], hU = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], DU = [(0, zT.L)()], oU = [(0, zT.L)()], AU = [(0, zT.L)()], RU = [(0, zT.L)("useLightmapAsShadowmap")], Tm = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], Um = [(0, zT.r)("diffuseFresnelParameters")], mm = [(0, zT.g)("_markAllSubMeshesAsFresnelDirty")], Wm = [(0, zT.r)("opacityFresnelParameters")], zm = [(0, zT.g)("_markAllSubMeshesAsFresnelAndMiscDirty")], Mm = [(0, zT.r)("reflectionFresnelParameters")], gm = [(0, zT.g)("_markAllSubMeshesAsFresnelDirty")], nm = [(0, zT.r)("refractionFresnelParameters")], Hm = [(0, zT.g)("_markAllSubMeshesAsFresnelDirty")], km = [(0, zT.r)("emissiveFresnelParameters")], jm = [(0, zT.g)("_markAllSubMeshesAsFresnelDirty")], lm = [(0, zT.L)("useReflectionFresnelFromSpecular")], Lm = [(0, zT.g)("_markAllSubMeshesAsFresnelDirty")], pm = [(0, zT.L)("useGlossinessFromSpecularMapAlpha")], Bm = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], Zm = [(0, zT.L)("maxSimultaneousLights")], cm = [(0, zT.g)("_markAllSubMeshesAsLightsDirty")], fm = [(0, zT.L)("invertNormalMapX")], qm = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], im = [(0, zT.L)("invertNormalMapY")], bm = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], Om = [(0, zT.L)("twoSidedLighting")], em = [(0, zT.g)("_markAllSubMeshesAsTexturesDirty")], Ym = [(0, zT.L)("applyDecalMapAfterDetailMap")], Jm = [(0, zT.g)("_markAllSubMeshesAsMiscDirty")], (0, WT.h)(TT, null, MU, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "diffuseTexture" in TT,
              get: TT => TT.diffuseTexture,
              set: (TT, UT) => {
                TT.diffuseTexture = UT
              }
            },
            metadata: UT
          }, tm, am), (0, WT.h)(TT, null, nU, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "ambientTexture" in TT,
              get: TT => TT.ambientTexture,
              set: (TT, UT) => {
                TT.ambientTexture = UT
              }
            },
            metadata: UT
          }, Im, Qm), (0, WT.h)(TT, null, kU, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "opacityTexture" in TT,
              get: TT => TT.opacityTexture,
              set: (TT, UT) => {
                TT.opacityTexture = UT
              }
            },
            metadata: UT
          }, Pm, Vm), (0, WT.h)(TT, null, lU, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "reflectionTexture" in TT,
              get: TT => TT.reflectionTexture,
              set: (TT, UT) => {
                TT.reflectionTexture = UT
              }
            },
            metadata: UT
          }, rm, Km), (0, WT.h)(TT, null, pU, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissiveTexture" in TT,
              get: TT => TT.emissiveTexture,
              set: (TT, UT) => {
                TT.emissiveTexture = UT
              }
            },
            metadata: UT
          }, Nm, Em), (0, WT.h)(TT, null, ZU, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularTexture" in TT,
              get: TT => TT.specularTexture,
              set: (TT, UT) => {
                TT.specularTexture = UT
              }
            },
            metadata: UT
          }, om, Am), (0, WT.h)(TT, null, vU, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "bumpTexture" in TT,
              get: TT => TT.bumpTexture,
              set: (TT, UT) => {
                TT.bumpTexture = UT
              }
            },
            metadata: UT
          }, UW, mW), (0, WT.h)(TT, null, qU, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "lightmapTexture" in TT,
              get: TT => TT.lightmapTexture,
              set: (TT, UT) => {
                TT.lightmapTexture = UT
              }
            },
            metadata: UT
          }, MW, gW), (0, WT.h)(TT, null, bU, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "refractionTexture" in TT,
              get: TT => TT.refractionTexture,
              set: (TT, UT) => {
                TT.refractionTexture = UT
              }
            },
            metadata: UT
          }, kW, jW), (0, WT.h)(TT, null, wU, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "useAlphaFromDiffuseTexture" in TT,
              get: TT => TT.useAlphaFromDiffuseTexture,
              set: (TT, UT) => {
                TT.useAlphaFromDiffuseTexture = UT
              }
            },
            metadata: UT
          }, eW, YW), (0, WT.h)(TT, null, aU, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: TT => "useEmissiveAsIllumination" in TT,
              get: TT => TT.useEmissiveAsIllumination,
              set: (TT, UT) => {
                TT.useEmissiveAsIllumination = UT
              }
            },
            metadata: UT
          }, dW, wW), (0, WT.h)(TT, null, XU, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: TT => "linkEmissiveWithDiffuse" in TT,
              get: TT => TT.linkEmissiveWithDiffuse,
              set: (TT, UT) => {
                TT.linkEmissiveWithDiffuse = UT
              }
            },
            metadata: UT
          }, yW, XW), (0, WT.h)(TT, null, QU, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "useSpecularOverAlpha" in TT,
              get: TT => TT.useSpecularOverAlpha,
              set: (TT, UT) => {
                TT.useSpecularOverAlpha = UT
              }
            },
            metadata: UT
          }, sW, FW), (0, WT.h)(TT, null, FU, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "useReflectionOverAlpha" in TT,
              get: TT => TT.useReflectionOverAlpha,
              set: (TT, UT) => {
                TT.useReflectionOverAlpha = UT
              }
            },
            metadata: UT
          }, uW, CW), (0, WT.h)(TT, null, VU, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "disableLighting" in TT,
              get: TT => TT.disableLighting,
              set: (TT, UT) => {
                TT.disableLighting = UT
              }
            },
            metadata: UT
          }, SW, GW), (0, WT.h)(TT, null, CU, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "useObjectSpaceNormalMap" in TT,
              get: TT => TT.useObjectSpaceNormalMap,
              set: (TT, UT) => {
                TT.useObjectSpaceNormalMap = UT
              }
            },
            metadata: UT
          }, hW, DW), (0, WT.h)(TT, null, KU, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: TT => "useParallax" in TT,
              get: TT => TT.useParallax,
              set: (TT, UT) => {
                TT.useParallax = UT
              }
            },
            metadata: UT
          }, RW, Tz), (0, WT.h)(TT, null, GU, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: TT => "useParallaxOcclusion" in TT,
              get: TT => TT.useParallaxOcclusion,
              set: (TT, UT) => {
                TT.useParallaxOcclusion = UT
              }
            },
            metadata: UT
          }, Wz, zz), (0, WT.h)(TT, null, hU, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "roughness" in TT,
              get: TT => TT.roughness,
              set: (TT, UT) => {
                TT.roughness = UT
              }
            },
            metadata: UT
          }, kz, jz), (0, WT.h)(TT, null, Tm, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: TT => "useLightmapAsShadowmap" in TT,
              get: TT => TT.useLightmapAsShadowmap,
              set: (TT, UT) => {
                TT.useLightmapAsShadowmap = UT
              }
            },
            metadata: UT
          }, qz, iz), (0, WT.h)(TT, null, mm, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "diffuseFresnelParameters" in TT,
              get: TT => TT.diffuseFresnelParameters,
              set: (TT, UT) => {
                TT.diffuseFresnelParameters = UT
              }
            },
            metadata: UT
          }, ez, Yz), (0, WT.h)(TT, null, zm, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "opacityFresnelParameters" in TT,
              get: TT => TT.opacityFresnelParameters,
              set: (TT, UT) => {
                TT.opacityFresnelParameters = UT
              }
            },
            metadata: UT
          }, dz, wz), (0, WT.h)(TT, null, gm, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "reflectionFresnelParameters" in TT,
              get: TT => TT.reflectionFresnelParameters,
              set: (TT, UT) => {
                TT.reflectionFresnelParameters = UT
              }
            },
            metadata: UT
          }, yz, Xz), (0, WT.h)(TT, null, Hm, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "refractionFresnelParameters" in TT,
              get: TT => TT.refractionFresnelParameters,
              set: (TT, UT) => {
                TT.refractionFresnelParameters = UT
              }
            },
            metadata: UT
          }, sz, Fz), (0, WT.h)(TT, null, jm, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissiveFresnelParameters" in TT,
              get: TT => TT.emissiveFresnelParameters,
              set: (TT, UT) => {
                TT.emissiveFresnelParameters = UT
              }
            },
            metadata: UT
          }, uz, Cz), (0, WT.h)(TT, null, Lm, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: TT => "useReflectionFresnelFromSpecular" in TT,
              get: TT => TT.useReflectionFresnelFromSpecular,
              set: (TT, UT) => {
                TT.useReflectionFresnelFromSpecular = UT
              }
            },
            metadata: UT
          }, Sz, Gz), (0, WT.h)(TT, null, Bm, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "useGlossinessFromSpecularMapAlpha" in TT,
              get: TT => TT.useGlossinessFromSpecularMapAlpha,
              set: (TT, UT) => {
                TT.useGlossinessFromSpecularMapAlpha = UT
              }
            },
            metadata: UT
          }, hz, Dz), (0, WT.h)(TT, null, cm, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: TT => "maxSimultaneousLights" in TT,
              get: TT => TT.maxSimultaneousLights,
              set: (TT, UT) => {
                TT.maxSimultaneousLights = UT
              }
            },
            metadata: UT
          }, Rz, TM), (0, WT.h)(TT, null, qm, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: TT => "invertNormalMapX" in TT,
              get: TT => TT.invertNormalMapX,
              set: (TT, UT) => {
                TT.invertNormalMapX = UT
              }
            },
            metadata: UT
          }, WM, zM), (0, WT.h)(TT, null, bm, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: TT => "invertNormalMapY" in TT,
              get: TT => TT.invertNormalMapY,
              set: (TT, UT) => {
                TT.invertNormalMapY = UT
              }
            },
            metadata: UT
          }, nM, HM), (0, WT.h)(TT, null, em, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "twoSidedLighting" in TT,
              get: TT => TT.twoSidedLighting,
              set: (TT, UT) => {
                TT.twoSidedLighting = UT
              }
            },
            metadata: UT
          }, lM, LM), (0, WT.h)(TT, null, Jm, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "applyDecalMapAfterDetailMap" in TT,
              get: TT => TT.applyDecalMapAfterDetailMap,
              set: (TT, UT) => {
                TT.applyDecalMapAfterDetailMap = UT
              }
            },
            metadata: UT
          }, ZM, cM), (0, WT.h)(null, null, zU, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_diffuseTexture" in TT,
              get: TT => TT._diffuseTexture,
              set: (TT, UT) => {
                TT._diffuseTexture = UT
              }
            },
            metadata: UT
          }, dm, wm), (0, WT.h)(null, null, gU, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_ambientTexture" in TT,
              get: TT => TT._ambientTexture,
              set: (TT, UT) => {
                TT._ambientTexture = UT
              }
            },
            metadata: UT
          }, ym, Xm), (0, WT.h)(null, null, HU, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_opacityTexture" in TT,
              get: TT => TT._opacityTexture,
              set: (TT, UT) => {
                TT._opacityTexture = UT
              }
            },
            metadata: UT
          }, sm, Fm), (0, WT.h)(null, null, jU, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_reflectionTexture" in TT,
              get: TT => TT._reflectionTexture,
              set: (TT, UT) => {
                TT._reflectionTexture = UT
              }
            },
            metadata: UT
          }, um, Cm), (0, WT.h)(null, null, LU, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_emissiveTexture" in TT,
              get: TT => TT._emissiveTexture,
              set: (TT, UT) => {
                TT._emissiveTexture = UT
              }
            },
            metadata: UT
          }, Sm, Gm), (0, WT.h)(null, null, BU, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_specularTexture" in TT,
              get: TT => TT._specularTexture,
              set: (TT, UT) => {
                TT._specularTexture = UT
              }
            },
            metadata: UT
          }, hm, Dm), (0, WT.h)(null, null, cU, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_bumpTexture" in TT,
              get: TT => TT._bumpTexture,
              set: (TT, UT) => {
                TT._bumpTexture = UT
              }
            },
            metadata: UT
          }, Rm, TW), (0, WT.h)(null, null, fU, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_lightmapTexture" in TT,
              get: TT => TT._lightmapTexture,
              set: (TT, UT) => {
                TT._lightmapTexture = UT
              }
            },
            metadata: UT
          }, WW, zW), (0, WT.h)(null, null, iU, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_refractionTexture" in TT,
              get: TT => TT._refractionTexture,
              set: (TT, UT) => {
                TT._refractionTexture = UT
              }
            },
            metadata: UT
          }, nW, HW), (0, WT.h)(null, null, OU, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "ambientColor" in TT,
              get: TT => TT.ambientColor,
              set: (TT, UT) => {
                TT.ambientColor = UT
              }
            },
            metadata: UT
          }, lW, LW), (0, WT.h)(null, null, eU, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "diffuseColor" in TT,
              get: TT => TT.diffuseColor,
              set: (TT, UT) => {
                TT.diffuseColor = UT
              }
            },
            metadata: UT
          }, pW, BW), (0, WT.h)(null, null, YU, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularColor" in TT,
              get: TT => TT.specularColor,
              set: (TT, UT) => {
                TT.specularColor = UT
              }
            },
            metadata: UT
          }, ZW, cW), (0, WT.h)(null, null, JU, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: TT => "emissiveColor" in TT,
              get: TT => TT.emissiveColor,
              set: (TT, UT) => {
                TT.emissiveColor = UT
              }
            },
            metadata: UT
          }, vW, fW), (0, WT.h)(null, null, xU, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: TT => "specularPower" in TT,
              get: TT => TT.specularPower,
              set: (TT, UT) => {
                TT.specularPower = UT
              }
            },
            metadata: UT
          }, qW, iW), (0, WT.h)(null, null, dU, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useAlphaFromDiffuseTexture" in TT,
              get: TT => TT._useAlphaFromDiffuseTexture,
              set: (TT, UT) => {
                TT._useAlphaFromDiffuseTexture = UT
              }
            },
            metadata: UT
          }, bW, OW), (0, WT.h)(null, null, tU, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useEmissiveAsIllumination" in TT,
              get: TT => TT._useEmissiveAsIllumination,
              set: (TT, UT) => {
                TT._useEmissiveAsIllumination = UT
              }
            },
            metadata: UT
          }, JW, xW), (0, WT.h)(null, null, yU, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: TT => "_linkEmissiveWithDiffuse" in TT,
              get: TT => TT._linkEmissiveWithDiffuse,
              set: (TT, UT) => {
                TT._linkEmissiveWithDiffuse = UT
              }
            },
            metadata: UT
          }, tW, aW), (0, WT.h)(null, null, IU, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useSpecularOverAlpha" in TT,
              get: TT => TT._useSpecularOverAlpha,
              set: (TT, UT) => {
                TT._useSpecularOverAlpha = UT
              }
            },
            metadata: UT
          }, IW, QW), (0, WT.h)(null, null, sU, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useReflectionOverAlpha" in TT,
              get: TT => TT._useReflectionOverAlpha,
              set: (TT, UT) => {
                TT._useReflectionOverAlpha = UT
              }
            },
            metadata: UT
          }, PW, VW), (0, WT.h)(null, null, PU, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "_disableLighting" in TT,
              get: TT => TT._disableLighting,
              set: (TT, UT) => {
                TT._disableLighting = UT
              }
            },
            metadata: UT
          }, rW, KW), (0, WT.h)(null, null, uU, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useObjectSpaceNormalMap" in TT,
              get: TT => TT._useObjectSpaceNormalMap,
              set: (TT, UT) => {
                TT._useObjectSpaceNormalMap = UT
              }
            },
            metadata: UT
          }, NW, EW), (0, WT.h)(null, null, rU, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useParallax" in TT,
              get: TT => TT._useParallax,
              set: (TT, UT) => {
                TT._useParallax = UT
              }
            },
            metadata: UT
          }, oW, AW), (0, WT.h)(null, null, SU, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useParallaxOcclusion" in TT,
              get: TT => TT._useParallaxOcclusion,
              set: (TT, UT) => {
                TT._useParallaxOcclusion = UT
              }
            },
            metadata: UT
          }, Uz, mz), (0, WT.h)(null, null, NU, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: TT => "parallaxScaleBias" in TT,
              get: TT => TT.parallaxScaleBias,
              set: (TT, UT) => {
                TT.parallaxScaleBias = UT
              }
            },
            metadata: UT
          }, Mz, gz), (0, WT.h)(null, null, EU, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: TT => "_roughness" in TT,
              get: TT => TT._roughness,
              set: (TT, UT) => {
                TT._roughness = UT
              }
            },
            metadata: UT
          }, nz, Hz), (0, WT.h)(null, null, DU, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: TT => "indexOfRefraction" in TT,
              get: TT => TT.indexOfRefraction,
              set: (TT, UT) => {
                TT.indexOfRefraction = UT
              }
            },
            metadata: UT
          }, lz, Lz), (0, WT.h)(null, null, oU, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: TT => "invertRefractionY" in TT,
              get: TT => TT.invertRefractionY,
              set: (TT, UT) => {
                TT.invertRefractionY = UT
              }
            },
            metadata: UT
          }, pz, Bz), (0, WT.h)(null, null, AU, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: TT => "alphaCutOff" in TT,
              get: TT => TT.alphaCutOff,
              set: (TT, UT) => {
                TT.alphaCutOff = UT
              }
            },
            metadata: UT
          }, Zz, cz), (0, WT.h)(null, null, RU, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useLightmapAsShadowmap" in TT,
              get: TT => TT._useLightmapAsShadowmap,
              set: (TT, UT) => {
                TT._useLightmapAsShadowmap = UT
              }
            },
            metadata: UT
          }, vz, fz), (0, WT.h)(null, null, Um, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "_diffuseFresnelParameters" in TT,
              get: TT => TT._diffuseFresnelParameters,
              set: (TT, UT) => {
                TT._diffuseFresnelParameters = UT
              }
            },
            metadata: UT
          }, bz, Oz), (0, WT.h)(null, null, Wm, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "_opacityFresnelParameters" in TT,
              get: TT => TT._opacityFresnelParameters,
              set: (TT, UT) => {
                TT._opacityFresnelParameters = UT
              }
            },
            metadata: UT
          }, Jz, xz), (0, WT.h)(null, null, Mm, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "_reflectionFresnelParameters" in TT,
              get: TT => TT._reflectionFresnelParameters,
              set: (TT, UT) => {
                TT._reflectionFresnelParameters = UT
              }
            },
            metadata: UT
          }, tz, az), (0, WT.h)(null, null, nm, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "_refractionFresnelParameters" in TT,
              get: TT => TT._refractionFresnelParameters,
              set: (TT, UT) => {
                TT._refractionFresnelParameters = UT
              }
            },
            metadata: UT
          }, Iz, Qz), (0, WT.h)(null, null, km, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: TT => "_emissiveFresnelParameters" in TT,
              get: TT => TT._emissiveFresnelParameters,
              set: (TT, UT) => {
                TT._emissiveFresnelParameters = UT
              }
            },
            metadata: UT
          }, Pz, Vz), (0, WT.h)(null, null, lm, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useReflectionFresnelFromSpecular" in TT,
              get: TT => TT._useReflectionFresnelFromSpecular,
              set: (TT, UT) => {
                TT._useReflectionFresnelFromSpecular = UT
              }
            },
            metadata: UT
          }, rz, Kz), (0, WT.h)(null, null, pm, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: TT => "_useGlossinessFromSpecularMapAlpha" in TT,
              get: TT => TT._useGlossinessFromSpecularMapAlpha,
              set: (TT, UT) => {
                TT._useGlossinessFromSpecularMapAlpha = UT
              }
            },
            metadata: UT
          }, Nz, Ez), (0, WT.h)(null, null, Zm, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: TT => "_maxSimultaneousLights" in TT,
              get: TT => TT._maxSimultaneousLights,
              set: (TT, UT) => {
                TT._maxSimultaneousLights = UT
              }
            },
            metadata: UT
          }, oz, Az), (0, WT.h)(null, null, fm, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: TT => "_invertNormalMapX" in TT,
              get: TT => TT._invertNormalMapX,
              set: (TT, UT) => {
                TT._invertNormalMapX = UT
              }
            },
            metadata: UT
          }, UM, mM), (0, WT.h)(null, null, im, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: TT => "_invertNormalMapY" in TT,
              get: TT => TT._invertNormalMapY,
              set: (TT, UT) => {
                TT._invertNormalMapY = UT
              }
            },
            metadata: UT
          }, MM, gM), (0, WT.h)(null, null, Om, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: TT => "_twoSidedLighting" in TT,
              get: TT => TT._twoSidedLighting,
              set: (TT, UT) => {
                TT._twoSidedLighting = UT
              }
            },
            metadata: UT
          }, kM, jM), (0, WT.h)(null, null, Ym, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: TT => "_applyDecalMapAfterDetailMap" in TT,
              get: TT => TT._applyDecalMapAfterDetailMap,
              set: (TT, UT) => {
                TT._applyDecalMapAfterDetailMap = UT
              }
            },
            metadata: UT
          }, pM, BM), UT && Object.defineProperty(TT, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: UT
          })
        })(), TT.ForceGLSL = !1, TT._ShaderLoader = new OT.c((() => [Promise.all([mT.e(322), mT.e(321)]).then((() => mT(42005))), Promise.all([mT.e(327), mT.e(323), mT.e(336), mT.e(326)]).then((() => mT(42196)))]), (() => [Promise.all([mT.e(343), mT.e(338)]).then((() => mT(42347))), Promise.all([mT.e(344), mT.e(354), mT.e(340)]).then((() => mT(42555)))])), TT
      })(),
      QT = !1;

    function sT() {
      QT || (QT = !0, (0, lT.d)(), (0, dT.h)("BABYLON.StandardMaterial", IT), gT.i.DefaultMaterialFactory = TT => new IT("default material", TT))
    }
    Object.getOwnPropertyDescriptor(IT.prototype, "decalMap") || Object.defineProperty(IT.prototype, "decalMap", (0, wT.h)("StandardMaterial", "decalMap"))
  },
  40513: (TT, UT, mT) => {
    function WT(TT) {
      return class extends TT {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    mT.d(UT, {
      b: () => WT
    })
  },
  40503: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT
    });
    class WT {
      constructor(TT, UT) {
        this._webGL = {
          load: TT,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: UT,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(TT) {
        const UT = 1 === TT ? this._webGPU : this._webGL;
        return UT.loaded ? void 0 : async () => {
          await this._loadAsync(UT)
        }
      }
      async _loadAsync(TT) {
        if (TT.loaded) return;
        let UT = TT.loadPromise;
        const mT = null === UT;
        mT && (UT = Promise.all(TT.load()), TT.loadPromise = UT);
        let WT = !1;
        try {
          await UT, WT = !0
        } finally {
          mT && this._completeLoad(TT, WT)
        }
      }
      _completeLoad(TT, UT) {
        TT.loaded = UT, TT.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);