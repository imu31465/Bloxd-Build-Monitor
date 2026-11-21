export const id = 253;
export const ids = [253];
export const modules = {
  40382: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd
    });
    var pd = kd(39975);

    function Nd(dd) {
      return class extends dd {
        constructor() {
          super(...arguments);
          const dd = new.target;
          if (!dd[Symbol.metadata]) {
            const Jd = Object.getPrototypeOf(dd)?.[Symbol.metadata];
            dd[Symbol.metadata] = Jd ? Object.create(Jd) : {}
          }
          const Jd = (0, pd.d)(dd[Symbol.metadata]);
          Jd._imageProcessingConfiguration || (Jd._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(dd) {
          this._attachImageProcessingConfiguration(dd), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(dd) {
          dd !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !dd && this.Wm ? this._imageProcessingConfiguration = this.Wm().imageProcessingConfiguration : dd && (this._imageProcessingConfiguration = dd), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(dd) {
          this.imageProcessingConfiguration.colorCurvesEnabled = dd
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(dd) {
          this.imageProcessingConfiguration.colorGradingEnabled = dd
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(dd) {
          this._imageProcessingConfiguration.toneMappingEnabled = dd
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(dd) {
          this._imageProcessingConfiguration.exposure = dd
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(dd) {
          this._imageProcessingConfiguration.contrast = dd
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(dd) {
          this._imageProcessingConfiguration.colorGradingTexture = dd
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(dd) {
          this._imageProcessingConfiguration.colorCurves = dd
        }
      }
    }
  },
  40266: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Wd,
      c: () => Nd
    });
    var pd = kd(40275);

    function Nd(dd) {
      return class extends dd {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class Wd extends pd.d {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  40342: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => od
    });
    var pd = kd(39964),
      Nd = kd(40278),
      Wd = kd(39966),
      Pd = kd(40325),
      Zd = kd(40275),
      gd = kd(40351),
      Cd = kd(40308);
    class Kd extends Zd.d {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let od = (() => {
      var dd, Jd, kd, Zd;
      let od, ld, Qd, Ld, Od, ed, Rd = gd.c,
        Id = [],
        Gd = [],
        vd = [],
        xd = [],
        qd = [],
        Bd = [],
        sd = [],
        ad = [],
        Md = [],
        Fd = [],
        Yd = [],
        md = [];
      return dd = class extends Rd {
        get texture() {
          return (0, pd.d)(this, Jd, "f")
        }
        set texture(dd) {
          (0, pd.e)(this, Jd, dd, "f")
        }
        get normalBlendMethod() {
          return (0, pd.d)(this, kd, "f")
        }
        set normalBlendMethod(dd) {
          (0, pd.e)(this, kd, dd, "f")
        }
        get isEnabled() {
          return (0, pd.d)(this, Zd, "f")
        }
        set isEnabled(dd) {
          (0, pd.e)(this, Zd, dd, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(dd) {
          let Wd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(dd, "DetailMap", 140, new Kd, Wd), this._texture = null, Jd.set(this, (0, pd.i)(this, Id, void 0)), this.diffuseBlendLevel = ((0, pd.i)(this, Gd), (0, pd.i)(this, vd, 1)), this.roughnessBlendLevel = ((0, pd.i)(this, xd), (0, pd.i)(this, qd, 1)), this.bumpLevel = ((0, pd.i)(this, Bd), (0, pd.i)(this, sd, 1)), this._normalBlendMethod = ((0, pd.i)(this, ad), Nd.b.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), kd.set(this, (0, pd.i)(this, Md, void 0)), this._isEnabled = ((0, pd.i)(this, Fd), !1), Zd.set(this, (0, pd.i)(this, Yd, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, pd.i)(this, md), this._internalMarkAllSubMeshesAsTexturesDirty = dd._dirtyCallbacks[1]
        }
        isReadyForSubMesh(dd, Jd, kd) {
          return !this._isEnabled || !(dd._areTexturesDirty && Jd.texturesEnabled && kd.getCaps().standardDerivatives && this._texture && Pd.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(dd, Jd) {
          if (this._isEnabled) {
            dd.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const kd = Jd.eL();
            dd._areTexturesDirty && (kd.getCaps().standardDerivatives && this._texture && Pd.e.DetailTextureEnabled && this._isEnabled ? ((0, Cd.db)(this._texture, dd, "DETAIL"), dd.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : dd.DETAIL = !1)
          } else dd.DETAIL = !1
        }
        bindForSubMesh(dd, Jd) {
          if (!this._isEnabled) return;
          const kd = this._material.isFrozen;
          dd.useUbo && kd && dd.isSync || this._texture && Pd.e.DetailTextureEnabled && (dd.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, Cd.C)(this._texture, dd, "detail")), Jd.texturesEnabled && this._texture && Pd.e.DetailTextureEnabled && dd.setTexture("detailSampler", this._texture)
        }
        hasTexture(dd) {
          return this._texture === dd
        }
        getActiveTextures(dd) {
          this._texture && dd.push(this._texture)
        }
        getAnimatables(dd) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && dd.push(this._texture)
        }
        dispose(dd) {
          dd && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(dd) {
          dd.push("detailSampler")
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
      }, Jd = new WeakMap, kd = new WeakMap, Zd = new WeakMap, (() => {
        const Jd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Rd[Symbol.metadata] ?? null) : void 0;
        od = [(0, Wd.y)("detailTexture"), (0, Wd.f)("_markAllSubMeshesAsTexturesDirty")], ld = [(0, Wd.H)()], Qd = [(0, Wd.H)()], Ld = [(0, Wd.H)()], Od = [(0, Wd.H)(), (0, Wd.f)("_markAllSubMeshesAsTexturesDirty")], ed = [(0, Wd.H)(), (0, Wd.f)("_markAllSubMeshesAsTexturesDirty")], (0, pd.h)(dd, null, od, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: dd => "texture" in dd,
            get: dd => dd.texture,
            set: (dd, Jd) => {
              dd.texture = Jd
            }
          },
          metadata: Jd
        }, Id, Gd), (0, pd.h)(dd, null, Od, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: dd => "normalBlendMethod" in dd,
            get: dd => dd.normalBlendMethod,
            set: (dd, Jd) => {
              dd.normalBlendMethod = Jd
            }
          },
          metadata: Jd
        }, Md, Fd), (0, pd.h)(dd, null, ed, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isEnabled" in dd,
            get: dd => dd.isEnabled,
            set: (dd, Jd) => {
              dd.isEnabled = Jd
            }
          },
          metadata: Jd
        }, Yd, md), (0, pd.h)(null, null, ld, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: dd => "diffuseBlendLevel" in dd,
            get: dd => dd.diffuseBlendLevel,
            set: (dd, Jd) => {
              dd.diffuseBlendLevel = Jd
            }
          },
          metadata: Jd
        }, vd, xd), (0, pd.h)(null, null, Qd, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: dd => "roughnessBlendLevel" in dd,
            get: dd => dd.roughnessBlendLevel,
            set: (dd, Jd) => {
              dd.roughnessBlendLevel = Jd
            }
          },
          metadata: Jd
        }, qd, Bd), (0, pd.h)(null, null, Ld, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: dd => "bumpLevel" in dd,
            get: dd => dd.bumpLevel,
            set: (dd, Jd) => {
              dd.bumpLevel = Jd
            }
          },
          metadata: Jd
        }, sd, ad), Jd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Jd
        })
      })(), dd
    })()
  },
  40275: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd
    });
    class pd {
      constructor(dd) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = dd, dd)
          for (const Jd in dd) Object.prototype.hasOwnProperty.call(dd, Jd) && this._setDefaultValue(Jd)
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
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || dd, this._isDirty = !0
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
        for (const dd of Object.keys(this)) "_" !== dd[0] && this._keys.push(dd);
        if (this._externalProperties)
          for (const dd in this._externalProperties) - 1 === this._keys.indexOf(dd) && this._keys.push(dd)
      }
      isEqual(dd) {
        if (this._keys.length !== dd._keys.length) return !1;
        for (let Jd = 0; Jd < this._keys.length; Jd++) {
          const kd = this._keys[Jd];
          if (this[kd] !== dd[kd]) return !1
        }
        return !0
      }
      cloneTo(dd) {
        this._keys.length !== dd._keys.length && (dd._keys = this._keys.slice(0));
        for (let Jd = 0; Jd < this._keys.length; Jd++) {
          const kd = this._keys[Jd];
          dd[kd] = this[kd]
        }
      }
      reset() {
        for (const dd of this._keys) this._setDefaultValue(dd)
      }
      _setDefaultValue(dd) {
        const Jd = this._externalProperties?.[dd]?.type ?? typeof this[dd],
          kd = this._externalProperties?.[dd]?.default;
        switch (Jd) {
          case "number":
            this[dd] = kd ?? 0;
            break;
          case "string":
            this[dd] = kd ?? "";
            break;
          default:
            this[dd] = kd ?? !1
        }
      }
      toString() {
        let dd = "";
        for (let Jd = 0; Jd < this._keys.length; Jd++) {
          const kd = this._keys[Jd],
            pd = this[kd];
          switch (typeof pd) {
            case "number":
            case "string":
              dd += "#define " + kd + " " + pd + "\n";
              break;
            default:
              pd && (dd += "#define " + kd + "\n")
          }
        }
        return dd
      }
    }
  },
  40364: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Zd,
      c: () => Pd,
      d: () => Wd
    });
    var pd, Nd = kd(37251);

    function Wd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const pd = Jd(dd);
      if (!Number.isInteger(pd) || pd < 0 || pd > kd) throw new Error(`Invalid geometry object ID ${pd} for mesh "${dd.name}". Object IDs must be integers between 0 and 0x${kd.toString(16).toUpperCase()}.`);
      return pd
    }

    function Pd(dd, Jd) {
      const kd = Jd(dd);
      if (!Number.isInteger(kd) || kd < 0 || kd > 255 || 0 !== kd && 0 === (63 & kd)) throw new Error(`Invalid geometry mesh-blending tag ${kd} for mesh "${dd.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return kd
    }! function(dd) {
      dd[dd.Zero = 0] = "Zero", dd[dd.One = 1] = "One", dd[dd.MaxViewZ = 2] = "MaxViewZ", dd[dd.NoClear = 3] = "NoClear"
    }(pd || (pd = {}));
    class Zd {
      static CreateConfiguration(dd) {
        return Zd._Configurations[dd] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: Nd.b.Zero(),
          currentViewProjection: Nd.b.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, Zd._Configurations[dd]
      }
      static DeleteConfiguration(dd) {
        delete Zd._Configurations[dd]
      }
      static GetConfiguration(dd) {
        return Zd._Configurations[dd]
      }
      static _PrepareConfiguration(dd, Jd, kd) {
        const pd = Zd._Configurations[dd];
        pd._attachments = Jd, pd._colorAttachments = kd, pd._mrtCount = Jd.length;
        let Nd = "#define PREPASS\n";
        for (const Wd of Zd.GeometryTextureDescriptions) {
          const dd = pd.defines[Wd.defineIndex];
          void 0 !== dd && (Nd += `#define ${Wd.define}\n#define ${Wd.defineIndex} ${dd}\n`)
        }
        pd.objectIdIsRedFormat && (Nd += "#define PREPASS_OBJECT_ID_R8\n"), pd._defines = Nd + `#define SCENE_MRT_COUNT ${Jd.length}\n`
      }
      static _PrepareStringDefines(dd, Jd) {
        const kd = Zd._Configurations[dd];
        return !!kd?._defines && (Jd.push(kd._defines), !0)
      }
      static _BindAttachmentsForEffect(dd, Jd) {
        const kd = Zd._Configurations[dd.currentRenderPassId];
        return !kd?._attachments || (dd.bindAttachments(Jd._multiTarget ? kd._attachments : kd._colorAttachments), Jd._multiTarget || void 0 !== kd.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(dd) {
        const Jd = Zd._Configurations[dd.currentRenderPassId];
        Jd?._colorAttachments && dd.bindAttachments(Jd._colorAttachments)
      }
      static _BindColorAttachments(dd) {
        const Jd = Zd._Configurations[dd.currentRenderPassId];
        return !Jd?._colorAttachments || (dd.bindAttachments(Jd._colorAttachments), void 0 !== Jd.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(dd) {
        const Jd = Zd._Configurations[dd.currentRenderPassId];
        return !Jd?._colorAttachments || void 0 !== Jd.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(dd, Jd) {
        const kd = Zd._Configurations[dd.currentRenderPassId];
        if (!kd) return;
        const pd = dd.getAlphaMode(),
          Nd = void 0 === kd.defines.PREPASS_COLOR_INDEX || 2 === pd || 1 === pd || 17 === pd;
        Jd.setFloat("geometryZeroAlphaDiscard", Nd ? 1 : 0)
      }
      static AddUniformsAndSamplers(dd, Jd) {
        dd.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(dd, Jd) {
        for (const kd of Jd)
          if (kd.rG)
            for (const Jd of kd.rG) Jd._removeDrawWrapper(dd)
      }
      static PrepareDefines(dd, Jd, kd) {
        if (!kd._arePrePassDirty) return;
        const pd = Zd._Configurations[dd];
        if (!pd) return;
        kd.PREPASS = !0;
        let Nd = 0;
        for (let Wd = 0; Wd < Zd.GeometryTextureDescriptions.length; Wd++) {
          const dd = Zd.GeometryTextureDescriptions[Wd],
            Jd = dd.define,
            Pd = dd.defineIndex,
            gd = pd.defines[Pd];
          void 0 !== gd ? (kd[Jd] = !0, kd[Pd] = gd, Nd++) : (kd[Jd] = !1, delete kd[Pd])
        }
        kd.PREPASS_OBJECT_ID_R8 = pd.objectIdIsRedFormat, kd.SCENE_MRT_COUNT = pd._mrtCount ?? Nd, kd.BONES_VELOCITY_ENABLED = Jd.useBones && Jd.computeBonesUsingShaders && Jd.skeleton && !Jd.skeleton.isUsingTextureForMatrices && -1 === pd.excludedSkinnedMesh.indexOf(Jd)
      }
      static Bind(dd, Jd, kd, pd, Nd) {
        const gd = Zd._Configurations[dd];
        if (!gd) return;
        const Cd = kd.Wm(),
          Kd = Cd.eL();
        if (gd.reverseCulling && Kd.setStateCullFaceType(Cd._mirroredCameraPosition ? Nd.cullBackFaces : !Nd.cullBackFaces), void 0 !== gd.defines.PREPASS_OBJECT_ID_INDEX) {
          const dd = gd.objectIdIsRedFormat ? 255 : 16777215;
          let pd = kd.uniqueId;
          if (gd.objectIdProvider) pd = Wd(kd, gd.objectIdProvider, dd);
          else if (pd > dd) throw new Error(`Invalid geometry object ID ${pd} for mesh "${kd.name}". Object IDs must be integers between 0 and 0x${dd.toString(16).toUpperCase()}.`);
          Jd.setFloat("objectId", pd)
        }
        if (void 0 !== gd.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const dd = gd.meshBlendTagProvider ? Pd(kd, gd.meshBlendTagProvider) : kd.meshBlendingTag;
          Jd.setInt("meshBlendTag", dd)
        }
        if (void 0 !== gd.defines.PREPASS_VELOCITY_INDEX || void 0 !== gd.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const dd = gd._currentWorldMatrices ?? (gd._currentWorldMatrices = {}),
            Nd = gd._worldMatrixFrameIds ?? (gd._worldMatrixFrameIds = {});
          if (dd[kd.uniqueId] || (dd[kd.uniqueId] = pd.clone(), gd.previousWorldMatrices[kd.uniqueId] = pd.clone()), Nd[kd.uniqueId] !== Kd.frameId && (gd.previousWorldMatrices[kd.uniqueId].Fs(dd[kd.uniqueId]), Nd[kd.uniqueId] = Kd.frameId), dd[kd.uniqueId].Fs(pd), -1 === gd.lastUpdateFrameId ? (gd.lastUpdateFrameId = Kd.frameId, gd.previousViewProjection.Fs(Cd.getTransformMatrix()), gd.currentViewProjection.Fs(Cd.getTransformMatrix())) : gd.currentViewProjection.updateFlag !== Cd.getTransformMatrix().updateFlag ? (gd.lastUpdateFrameId = Kd.frameId, gd.previousViewProjection.Fs(gd.currentViewProjection), gd.currentViewProjection.Fs(Cd.getTransformMatrix())) : gd.lastUpdateFrameId !== Kd.frameId && (gd.lastUpdateFrameId = Kd.frameId, gd.previousViewProjection.Fs(gd.currentViewProjection)), Jd.setMatrix("previousWorld", gd.previousWorldMatrices[kd.uniqueId]), Jd.setMatrix("previousViewProjection", gd.previousViewProjection), kd.useBones && kd.computeBonesUsingShaders && kd.skeleton) {
            const dd = kd.skeleton;
            if (!dd.isUsingTextureForMatrices || -1 === Jd.getUniformIndex("boneTextureInfo")) {
              const pd = dd.getTransformMatrices(kd);
              pd && (gd.previousBones[kd.uniqueId] || (gd.previousBones[kd.uniqueId] = pd.slice()), Jd.setMatrices("mPreviousBones", gd.previousBones[kd.uniqueId]), gd.previousBones[kd.uniqueId].set(pd))
            }
          }
        }
      }
    }
    Zd.GeometryTextureDescriptions = [{
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
    }], Zd._Configurations = {}
  },
  40351: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ld,
      f: () => Ld
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(39862),
      Pd = kd(39829);
    const Zd = new RegExp("^([gimus]+)!");
    class gd {
      constructor(dd) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = dd, this._scene = dd.Wm(), this._engine = this._scene.eL()
      }
      _addPlugin(dd) {
        for (let pd = 0; pd < this._plugins.length; ++pd)
          if (this._plugins[pd].name === dd.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !dd.isCompatible(this._material.shaderLanguage)) throw `The plugin "${dd.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const Jd = dd.getClassName();
        gd._MaterialPluginClassToMainDefine[Jd] || (gd._MaterialPluginClassToMainDefine[Jd] = "MATERIALPLUGIN_" + ++gd._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (dd, Jd) => this._handlePluginEvent(dd, Jd), this._plugins.push(dd), this._plugins.sort(((dd, Jd) => dd.priority - Jd.priority)), this._codeInjectionPoints = {};
        const kd = {};
        kd[gd._MaterialPluginClassToMainDefine[Jd]] = {
          type: "boolean",
          default: !0
        };
        for (const pd of this._plugins) pd.collectDefines(kd), this._collectPointNames("vertex", pd.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", pd.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = kd, !0
      }
      _activatePlugin(dd) {
        -1 === this._activePlugins.indexOf(dd) && (this._activePlugins.push(dd), this._activePlugins.sort(((dd, Jd) => dd.priority - Jd.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), dd.registerForExtraEvents && (this._activePluginsForExtraEvents.push(dd), this._activePluginsForExtraEvents.sort(((dd, Jd) => dd.priority - Jd.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(dd) {
        for (let Jd = 0; Jd < this._plugins.length; ++Jd)
          if (this._plugins[Jd].name === dd) return this._plugins[Jd];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(dd) {
        let Jd = !0;
        for (const kd of this._activePlugins) Jd = Jd && kd.isReadyForSubMesh(dd.defines, this._scene, this._engine, dd.subMesh);
        dd.isReadyForSubMesh = Jd
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(dd) {
        for (const Jd of this._activePlugins) Jd.prepareDefinesBeforeAttributes(dd.defines, this._scene, dd.mesh)
      }
      _handlePluginEventPrepareDefines(dd) {
        for (const Jd of this._activePlugins) Jd.prepareDefines(dd.defines, this._scene, dd.mesh)
      }
      _handlePluginEventHardBindForSubMesh(dd) {
        for (const Jd of this._activePluginsForExtraEvents) Jd.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, dd.subMesh)
      }
      _handlePluginEventBindForSubMesh(dd) {
        for (const Jd of this._activePlugins) Jd.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, dd.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(dd) {
        let Jd = !1;
        for (const kd of this._activePluginsForExtraEvents)
          if (Jd = kd.hasRenderTargetTextures(), Jd) break;
        dd.hasRenderTargetTextures = Jd
      }
      _handlePluginEventFillRenderTargetTextures(dd) {
        for (const Jd of this._activePluginsForExtraEvents) Jd.fillRenderTargetTextures(dd.renderTargets)
      }
      _handlePluginEvent(dd, Jd) {
        switch (dd) {
          case 512: {
            const dd = Jd;
            for (const Jd of this._activePlugins) Jd.getActiveTextures(dd.activeTextures);
            break
          }
          case 256: {
            const dd = Jd;
            for (const Jd of this._activePlugins) Jd.getAnimatables(dd.animatables);
            break
          }
          case 1024: {
            const dd = Jd;
            let kd = !1;
            for (const Jd of this._activePlugins)
              if (kd = Jd.hasTexture(dd.texture), kd) break;
            dd.hasTexture = kd;
            break
          }
          case 2: {
            const dd = Jd;
            for (const Jd of this._plugins) Jd.dispose(dd.forceDisposeTextures);
            break
          }
          case 4:
            Jd.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const dd = Jd;
            for (const Jd of this._activePlugins) dd.fallbackRank = Jd.addFallbacks(dd.defines, dd.fallbacks, dd.fallbackRank), Jd.getAttributes(dd.attributes, this._scene, dd.mesh);
            this._uniformList.length > 0 && dd.uniforms.push(...this._uniformList), this._samplerList.length > 0 && dd.samplers.push(...this._samplerList), this._uboList.length > 0 && dd.uniformBuffersNames.push(...this._uboList), dd.customCode = this._injectCustomCode(dd, dd.customCode);
            break
          }
          case 8: {
            const dd = Jd;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const kd = 1 === this._material.shaderLanguage;
            for (const Jd of this._plugins) {
              const pd = Jd.getUniforms(this._material.shaderLanguage);
              if (pd) {
                if (pd.ubo)
                  for (const Jd of pd.ubo) {
                    if (Jd.size && Jd.type) {
                      const pd = Jd.arraySize ?? 0;
                      if (dd.ubo.addUniform(Jd.name, Jd.size, pd), kd) {
                        let dd;
                        switch (Jd.type) {
                          case "mat4":
                            dd = "mat4x4f";
                            break;
                          case "float":
                            dd = "f32";
                            break;
                          default:
                            dd = `${Jd.type}f`
                        }
                        this._uboDeclaration += pd > 0 ? `uniform ${Jd.name}: array<${dd}, ${pd}>;\n` : `uniform ${Jd.name}: ${dd};\n`
                      } else this._uboDeclaration += `${Jd.type} ${Jd.name}${pd>0?`[${pd}]`:""};\n`
                    }
                    this._uniformList.push(Jd.name)
                  }
                pd.vertex && (this._vertexDeclaration += pd.vertex + "\n"), pd.fragment && (this._fragmentDeclaration += pd.fragment + "\n"), pd.externalUniforms && this._uniformList.push(...pd.externalUniforms)
              }
              Jd.getSamplers(this._samplerList), Jd.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(dd, Jd) {
        if (Jd)
          for (const kd in Jd) this._codeInjectionPoints[dd] || (this._codeInjectionPoints[dd] = {}), this._codeInjectionPoints[dd][kd] = !0
      }
      _injectCustomCode(dd, Jd) {
        return (kd, pd) => {
          Jd && (pd = Jd(kd, pd)), this._uboDeclaration && (pd = pd.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (pd = pd.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (pd = pd.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const Nd = this._codeInjectionPoints?.[kd];
          if (!Nd) return pd;
          let gd = null;
          for (let Jd in Nd) {
            let Nd = "";
            for (const pd of this._activePlugins) {
              const Zd = this._material.shaderLanguage;
              let Cd = pd.getCustomCode(kd, Zd)?.[Jd];
              Cd && (pd.resolveIncludes && (null === gd && (gd = {
                defines: [],
                indexParameters: dd.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: Pd.c.GetShadersRepository(Zd),
                includesShadersStore: Pd.c.GetIncludesShadersStore(Zd),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                vpd: this._engine.vpd,
                processCodeAfterIncludes: void 0
              }), gd.isFragment = "fragment" === kd, (0, Wd.i)(Cd, gd, (dd => Cd = dd))), Nd += Cd + "\n")
            }
            if (Nd.length > 0)
              if ("!" === Jd.charAt(0)) {
                Jd = Jd.substring(1);
                let dd = "g";
                if ("!" === Jd.charAt(0)) dd = "", Jd = Jd.substring(1);
                else {
                  const kd = Zd.exec(Jd);
                  kd && kd.length >= 2 && (dd = kd[1], Jd = Jd.substring(dd.length + 1))
                }
                dd.indexOf("g") < 0 && (dd += "g");
                const kd = new RegExp(Jd, dd);
                let Wd = kd.exec(pd);
                for (; null !== Wd;) {
                  const {
                    index: dd
                  } = Wd, Jd = Cd(Nd, Wd);
                  pd = pd.substring(0, dd) + Jd + pd.substring(dd + Wd[0].length), kd.lastIndex = dd + Jd.length, Wd = kd.exec(pd)
                }
              } else {
                const dd = "#define " + Jd;
                pd = pd.replace(dd, "\n" + Nd + "\n" + dd)
              }
          }
          return pd
        }
      }
    }
    gd._MaterialPluginClassToMainDefine = {}, gd._MaterialPluginCounter = 0;

    function Cd(dd, Jd) {
      return dd.replace(/\$(\d+)/g, ((dd, kd) => {
        const pd = Number(kd);
        return pd < Jd.length ? Jd[pd] : ""
      }))
    }
    var Kd = kd(39983),
      od = kd(37303);
    let ld = (() => {
        var dd;
        let Jd, kd, Wd, Pd, Zd = [],
          Cd = [],
          od = [],
          ld = [],
          Qd = [],
          Ld = [],
          Od = [],
          ed = [];
        return dd = class {
          isCompatible(dd) {
            return 0 === dd
          }
          _enable(dd) {
            dd && this._pluginManager._activatePlugin(this)
          }
          constructor(dd, Jd, kd, Nd) {
            let Wd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              Pd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              Kd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, pd.i)(this, Zd, void 0), this.priority = ((0, pd.i)(this, Cd), (0, pd.i)(this, od, 500)), this.resolveIncludes = ((0, pd.i)(this, ld), (0, pd.i)(this, Qd, !1)), this.registerForExtraEvents = ((0, pd.i)(this, Ld), (0, pd.i)(this, Od, !1)), this.doNotSerialize = ((0, pd.i)(this, ed), !1), this._material = dd, this.name = Jd, this.priority = kd, this.resolveIncludes = Kd, dd.pluginManager || (dd.pluginManager = new gd(dd), dd.Zm.add((() => {
              dd.pluginManager = void 0
            }))), this._pluginDefineNames = Nd, this._pluginManager = dd.pluginManager, Wd && this._pluginManager._addPlugin(this), Pd && this._enable(!0), this.markAllDefinesAsDirty = dd._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(dd, Jd, kd, pd) {
            return !0
          }
          hardBindForSubMesh(dd, Jd, kd, pd) {}
          bindForSubMesh(dd, Jd, kd, pd) {}
          dispose(dd) {}
          getCustomCode(dd) {
            return null
          }
          collectDefines(dd) {
            if (this._pluginDefineNames)
              for (const Jd of Object.keys(this._pluginDefineNames)) {
                if ("_" === Jd[0]) continue;
                const kd = typeof this._pluginDefineNames[Jd];
                dd[Jd] = {
                  type: "number" === kd ? "number" : "string" === kd ? "string" : "boolean" === kd ? "boolean" : "object",
                  default: this._pluginDefineNames[Jd]
                }
              }
          }
          prepareDefinesBeforeAttributes(dd, Jd, kd) {}
          prepareDefines(dd, Jd, kd) {}
          hasTexture(dd) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(dd) {}
          getActiveTextures(dd) {}
          getAnimatables(dd) {}
          addFallbacks(dd, Jd, kd) {
            return kd
          }
          getSamplers(dd) {}
          getAttributes(dd, Jd, kd) {}
          getUniformBuffersNames(dd) {}
          getUniforms() {
            return {}
          }
          copyTo(dd) {
            Kd.c.Clone((() => dd), this)
          }
          serialize() {
            return Kd.c.Serialize(this)
          }
          parse(dd, Jd, kd) {
            Kd.c.Parse((() => this), dd, Jd, kd)
          }
        }, (() => {
          const gd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Jd = [(0, Nd.H)()], kd = [(0, Nd.H)()], Wd = [(0, Nd.H)()], Pd = [(0, Nd.H)()], (0, pd.h)(null, null, Jd, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: dd => "name" in dd,
              get: dd => dd.name,
              set: (dd, Jd) => {
                dd.name = Jd
              }
            },
            metadata: gd
          }, Zd, Cd), (0, pd.h)(null, null, kd, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: dd => "priority" in dd,
              get: dd => dd.priority,
              set: (dd, Jd) => {
                dd.priority = Jd
              }
            },
            metadata: gd
          }, od, ld), (0, pd.h)(null, null, Wd, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: dd => "resolveIncludes" in dd,
              get: dd => dd.resolveIncludes,
              set: (dd, Jd) => {
                dd.resolveIncludes = Jd
              }
            },
            metadata: gd
          }, Qd, Ld), (0, pd.h)(null, null, Pd, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: dd => "registerForExtraEvents" in dd,
              get: dd => dd.registerForExtraEvents,
              set: (dd, Jd) => {
                dd.registerForExtraEvents = Jd
              }
            },
            metadata: gd
          }, Od, ed), gd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gd
          })
        })(), dd
      })(),
      Qd = !1;

    function Ld() {
      Qd || (Qd = !0, (0, od.h)("BABYLON.MaterialPluginBase", ld))
    }
  },
  40263: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd
    });
    class pd {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(dd) {
        dd.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(dd) {}
      bindForSubMesh(dd, Jd, kd, pd, Nd) {
        if (Jd.prePassRenderer && Jd.prePassRenderer.enabled && Jd.prePassRenderer.currentRTisSceneRT && (-1 !== Jd.prePassRenderer.getIndex(2) || -1 !== Jd.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[kd.uniqueId] || (this.previousWorldMatrices[kd.uniqueId] = pd.clone()), this.previousViewProjection || (this.previousViewProjection = Jd.getTransformMatrix().clone(), this.currentViewProjection = Jd.getTransformMatrix().clone());
          const Nd = Jd.eL();
          this.currentViewProjection.updateFlag !== Jd.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = Nd.frameId, this.previousViewProjection.Fs(this.currentViewProjection), this.currentViewProjection.Fs(Jd.getTransformMatrix())) : this._lastUpdateFrameId !== Nd.frameId && (this._lastUpdateFrameId = Nd.frameId, this.previousViewProjection.Fs(this.currentViewProjection)), dd.setMatrix("previousWorld", this.previousWorldMatrices[kd.uniqueId]), dd.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[kd.uniqueId] = pd.clone()
        }
      }
    }
  },
  40379: (dd, Jd, kd) => {
    function pd(dd) {
      return class extends dd {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    kd.d(Jd, {
      c: () => pd
    })
  },
  40251: (dd, Jd, kd) => {
    kd.d(Jd, {
      StandardMaterial: () => pd.e
    });
    var pd = kd(40254);
    (0, pd.b)()
  },
  40254: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => nd,
      e: () => Xd
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(40080),
      Pd = kd(40062),
      Zd = kd(37443),
      gd = kd(40115),
      Cd = kd(40263),
      Kd = kd(40266),
      od = kd(40083),
      ld = kd(40278),
      Qd = kd(40275),
      Ld = kd(40333),
      Od = kd(40325),
      ed = kd(40339),
      Rd = kd(40342),
      Id = kd(40317),
      Gd = kd(40353),
      vd = kd(40308),
      xd = kd(39983),
      qd = kd(40358),
      Bd = kd(40364),
      sd = kd(40372),
      ad = kd(40379),
      Md = kd(40382),
      Fd = kd(37303),
      Yd = kd(39860);
    const md = {
      effect: null,
      subMesh: null
    };
    class bd extends((0, ad.c)((0, sd.d)(Qd.d))) {}
    class Sd extends((0, Kd.c)(bd)) {
      constructor(dd) {
        super(dd), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class jd extends((0, Md.b)(Ld.c)) {}
    let Xd = (() => {
        var dd, Jd, Kd, Qd, sd, ad, Md, Fd, Yd, bd, Xd, fd, nd, Ud, yd, Dd, Td, Ed, cd, hd, rd, ud, td, Vd, zd, Hd, wd, Ad, dJ, JJ, kJ, pJ, NJ;
        let WJ, PJ, ZJ, gJ, CJ, KJ, oJ, lJ, QJ, LJ, OJ, eJ, RJ, IJ, GJ, vJ, xJ, qJ, BJ, sJ, iJ, aJ, MJ, FJ, YJ, mJ, bJ, SJ, jJ, XJ, fJ, nJ, UJ, yJ, DJ, TJ, EJ, cJ, hJ, rJ, uJ, tJ, VJ, zJ, HJ, wJ, AJ, dk, Jk, kk, pk, Nk, Wk, Pk, Zk, gk, Ck, Kk, lk, Qk, Lk, Ok, ek, Rk, Ik, Gk, vk, xk, qk, Bk, sk, ik, ak, Mk = jd,
          Fk = [],
          Yk = [],
          mk = [],
          bk = [],
          Sk = [],
          jk = [],
          Xk = [],
          fk = [],
          nk = [],
          Uk = [],
          yk = [],
          Dk = [],
          Tk = [],
          Ek = [],
          ck = [],
          hk = [],
          rk = [],
          uk = [],
          tk = [],
          Vk = [],
          zk = [],
          Hk = [],
          wk = [],
          Ak = [],
          dp = [],
          Jp = [],
          kp = [],
          pp = [],
          Np = [],
          Wp = [],
          Pp = [],
          Zp = [],
          gp = [],
          Cp = [],
          Kp = [],
          op = [],
          lp = [],
          Qp = [],
          Lp = [],
          Op = [],
          ep = [],
          Rp = [],
          Ip = [],
          Gp = [],
          vp = [],
          xp = [],
          qp = [],
          Bp = [],
          sp = [],
          ip = [],
          ap = [],
          Mp = [],
          Fp = [],
          Yp = [],
          mp = [],
          bp = [],
          Sp = [],
          jp = [],
          Xp = [],
          fp = [],
          np = [],
          Up = [],
          yp = [],
          Dp = [],
          Tp = [],
          Ep = [],
          cp = [],
          hp = [],
          rp = [],
          tp = [],
          Vp = [],
          zp = [],
          Hp = [],
          wp = [],
          Ap = [],
          dN = [],
          JN = [],
          kN = [],
          pN = [],
          NN = [],
          WN = [],
          PN = [],
          ZN = [],
          gN = [],
          CN = [],
          KN = [],
          oN = [],
          lN = [],
          QN = [],
          LN = [],
          ON = [],
          eN = [],
          RN = [],
          IN = [],
          GN = [],
          vN = [],
          xN = [],
          qN = [],
          BN = [],
          sN = [],
          iN = [],
          aN = [],
          MN = [],
          FN = [],
          YN = [],
          mN = [],
          bN = [],
          SN = [],
          jN = [],
          XN = [],
          fN = [],
          nN = [],
          UN = [],
          yN = [],
          DN = [],
          TN = [],
          EN = [],
          cN = [],
          hN = [],
          rN = [],
          uN = [],
          tN = [],
          VN = [],
          zN = [],
          HN = [],
          wN = [],
          AN = [],
          dW = [],
          JW = [],
          kW = [],
          pW = [],
          NW = [],
          WW = [],
          PW = [],
          ZW = [],
          gW = [],
          CW = [],
          KW = [],
          oW = [],
          lW = [],
          QW = [],
          LW = [],
          OW = [],
          eW = [],
          RW = [],
          IW = [];
        return dd = class extends Mk {
          get diffuseTexture() {
            return (0, pd.d)(this, Jd, "f")
          }
          set diffuseTexture(dd) {
            (0, pd.e)(this, Jd, dd, "f")
          }
          get ambientTexture() {
            return (0, pd.d)(this, Kd, "f")
          }
          set ambientTexture(dd) {
            (0, pd.e)(this, Kd, dd, "f")
          }
          get opacityTexture() {
            return (0, pd.d)(this, Qd, "f")
          }
          set opacityTexture(dd) {
            (0, pd.e)(this, Qd, dd, "f")
          }
          get reflectionTexture() {
            return (0, pd.d)(this, sd, "f")
          }
          set reflectionTexture(dd) {
            (0, pd.e)(this, sd, dd, "f")
          }
          get emissiveTexture() {
            return (0, pd.d)(this, ad, "f")
          }
          set emissiveTexture(dd) {
            (0, pd.e)(this, ad, dd, "f")
          }
          get specularTexture() {
            return (0, pd.d)(this, Md, "f")
          }
          set specularTexture(dd) {
            (0, pd.e)(this, Md, dd, "f")
          }
          get bumpTexture() {
            return (0, pd.d)(this, Fd, "f")
          }
          set bumpTexture(dd) {
            (0, pd.e)(this, Fd, dd, "f")
          }
          get lightmapTexture() {
            return (0, pd.d)(this, Yd, "f")
          }
          set lightmapTexture(dd) {
            (0, pd.e)(this, Yd, dd, "f")
          }
          get refractionTexture() {
            return (0, pd.d)(this, bd, "f")
          }
          set refractionTexture(dd) {
            (0, pd.e)(this, bd, dd, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, pd.d)(this, Xd, "f")
          }
          set useAlphaFromDiffuseTexture(dd) {
            (0, pd.e)(this, Xd, dd, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, pd.d)(this, fd, "f")
          }
          set useEmissiveAsIllumination(dd) {
            (0, pd.e)(this, fd, dd, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, pd.d)(this, nd, "f")
          }
          set linkEmissiveWithDiffuse(dd) {
            (0, pd.e)(this, nd, dd, "f")
          }
          get useSpecularOverAlpha() {
            return (0, pd.d)(this, Ud, "f")
          }
          set useSpecularOverAlpha(dd) {
            (0, pd.e)(this, Ud, dd, "f")
          }
          get useReflectionOverAlpha() {
            return (0, pd.d)(this, yd, "f")
          }
          set useReflectionOverAlpha(dd) {
            (0, pd.e)(this, yd, dd, "f")
          }
          get disableLighting() {
            return (0, pd.d)(this, Dd, "f")
          }
          set disableLighting(dd) {
            (0, pd.e)(this, Dd, dd, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, pd.d)(this, Td, "f")
          }
          set useObjectSpaceNormalMap(dd) {
            (0, pd.e)(this, Td, dd, "f")
          }
          get useParallax() {
            return (0, pd.d)(this, Ed, "f")
          }
          set useParallax(dd) {
            (0, pd.e)(this, Ed, dd, "f")
          }
          get useParallaxOcclusion() {
            return (0, pd.d)(this, cd, "f")
          }
          set useParallaxOcclusion(dd) {
            (0, pd.e)(this, cd, dd, "f")
          }
          get roughness() {
            return (0, pd.d)(this, hd, "f")
          }
          set roughness(dd) {
            (0, pd.e)(this, hd, dd, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, pd.d)(this, rd, "f")
          }
          set useLightmapAsShadowmap(dd) {
            (0, pd.e)(this, rd, dd, "f")
          }
          get diffuseFresnelParameters() {
            return (0, pd.d)(this, ud, "f")
          }
          set diffuseFresnelParameters(dd) {
            (0, pd.e)(this, ud, dd, "f")
          }
          get opacityFresnelParameters() {
            return (0, pd.d)(this, td, "f")
          }
          set opacityFresnelParameters(dd) {
            (0, pd.e)(this, td, dd, "f")
          }
          get reflectionFresnelParameters() {
            return (0, pd.d)(this, Vd, "f")
          }
          set reflectionFresnelParameters(dd) {
            (0, pd.e)(this, Vd, dd, "f")
          }
          get refractionFresnelParameters() {
            return (0, pd.d)(this, zd, "f")
          }
          set refractionFresnelParameters(dd) {
            (0, pd.e)(this, zd, dd, "f")
          }
          get emissiveFresnelParameters() {
            return (0, pd.d)(this, Hd, "f")
          }
          set emissiveFresnelParameters(dd) {
            (0, pd.e)(this, Hd, dd, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, pd.d)(this, wd, "f")
          }
          set useReflectionFresnelFromSpecular(dd) {
            (0, pd.e)(this, wd, dd, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, pd.d)(this, Ad, "f")
          }
          set useGlossinessFromSpecularMapAlpha(dd) {
            (0, pd.e)(this, Ad, dd, "f")
          }
          get maxSimultaneousLights() {
            return (0, pd.d)(this, dJ, "f")
          }
          set maxSimultaneousLights(dd) {
            (0, pd.e)(this, dJ, dd, "f")
          }
          get invertNormalMapX() {
            return (0, pd.d)(this, JJ, "f")
          }
          set invertNormalMapX(dd) {
            (0, pd.e)(this, JJ, dd, "f")
          }
          get invertNormalMapY() {
            return (0, pd.d)(this, kJ, "f")
          }
          set invertNormalMapY(dd) {
            (0, pd.e)(this, kJ, dd, "f")
          }
          get twoSidedLighting() {
            return (0, pd.d)(this, pJ, "f")
          }
          set twoSidedLighting(dd) {
            (0, pd.e)(this, pJ, dd, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, pd.d)(this, NJ, "f")
          }
          set applyDecalMapAfterDetailMap(dd) {
            (0, pd.e)(this, NJ, dd, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(kd, Nd) {
            super(kd, Nd, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || dd.ForceGLSL), this._diffuseTexture = (0, pd.i)(this, Fk, null), Jd.set(this, ((0, pd.i)(this, Yk), (0, pd.i)(this, mk, void 0))), this._ambientTexture = ((0, pd.i)(this, bk), (0, pd.i)(this, Sk, null)), Kd.set(this, ((0, pd.i)(this, jk), (0, pd.i)(this, Xk, void 0))), this._opacityTexture = ((0, pd.i)(this, fk), (0, pd.i)(this, nk, null)), Qd.set(this, ((0, pd.i)(this, Uk), (0, pd.i)(this, yk, void 0))), this._reflectionTexture = ((0, pd.i)(this, Dk), (0, pd.i)(this, Tk, null)), sd.set(this, ((0, pd.i)(this, Ek), (0, pd.i)(this, ck, void 0))), this._emissiveTexture = ((0, pd.i)(this, hk), (0, pd.i)(this, rk, null)), ad.set(this, ((0, pd.i)(this, uk), (0, pd.i)(this, tk, void 0))), this._specularTexture = ((0, pd.i)(this, Vk), (0, pd.i)(this, zk, null)), Md.set(this, ((0, pd.i)(this, Hk), (0, pd.i)(this, wk, void 0))), this._bumpTexture = ((0, pd.i)(this, Ak), (0, pd.i)(this, dp, null)), Fd.set(this, ((0, pd.i)(this, Jp), (0, pd.i)(this, kp, void 0))), this._lightmapTexture = ((0, pd.i)(this, pp), (0, pd.i)(this, Np, null)), Yd.set(this, ((0, pd.i)(this, Wp), (0, pd.i)(this, Pp, void 0))), this._refractionTexture = ((0, pd.i)(this, Zp), (0, pd.i)(this, gp, null)), bd.set(this, ((0, pd.i)(this, Cp), (0, pd.i)(this, Kp, void 0))), this.ambientColor = ((0, pd.i)(this, op), (0, pd.i)(this, lp, new Zd.c(0, 0, 0))), this.diffuseColor = ((0, pd.i)(this, Qp), (0, pd.i)(this, Lp, new Zd.c(1, 1, 1))), this.specularColor = ((0, pd.i)(this, Op), (0, pd.i)(this, ep, new Zd.c(1, 1, 1))), this.emissiveColor = ((0, pd.i)(this, Rp), (0, pd.i)(this, Ip, new Zd.c(0, 0, 0))), this.specularPower = ((0, pd.i)(this, Gp), (0, pd.i)(this, vp, 64)), this._useAlphaFromDiffuseTexture = ((0, pd.i)(this, xp), (0, pd.i)(this, qp, !1)), Xd.set(this, ((0, pd.i)(this, Bp), (0, pd.i)(this, sp, void 0))), this._useEmissiveAsIllumination = ((0, pd.i)(this, ip), (0, pd.i)(this, ap, !1)), fd.set(this, ((0, pd.i)(this, Mp), (0, pd.i)(this, Fp, void 0))), this._linkEmissiveWithDiffuse = ((0, pd.i)(this, Yp), (0, pd.i)(this, mp, !1)), nd.set(this, ((0, pd.i)(this, bp), (0, pd.i)(this, Sp, void 0))), this._useSpecularOverAlpha = ((0, pd.i)(this, jp), (0, pd.i)(this, Xp, !1)), Ud.set(this, ((0, pd.i)(this, fp), (0, pd.i)(this, np, void 0))), this._useReflectionOverAlpha = ((0, pd.i)(this, Up), (0, pd.i)(this, yp, !1)), yd.set(this, ((0, pd.i)(this, Dp), (0, pd.i)(this, Tp, void 0))), this._disableLighting = ((0, pd.i)(this, Ep), (0, pd.i)(this, cp, !1)), Dd.set(this, ((0, pd.i)(this, hp), (0, pd.i)(this, rp, void 0))), this._useObjectSpaceNormalMap = ((0, pd.i)(this, tp), (0, pd.i)(this, Vp, !1)), Td.set(this, ((0, pd.i)(this, zp), (0, pd.i)(this, Hp, void 0))), this._useParallax = ((0, pd.i)(this, wp), (0, pd.i)(this, Ap, !1)), Ed.set(this, ((0, pd.i)(this, dN), (0, pd.i)(this, JN, void 0))), this._useParallaxOcclusion = ((0, pd.i)(this, kN), (0, pd.i)(this, pN, !1)), cd.set(this, ((0, pd.i)(this, NN), (0, pd.i)(this, WN, void 0))), this.parallaxScaleBias = ((0, pd.i)(this, PN), (0, pd.i)(this, ZN, .05)), this._roughness = ((0, pd.i)(this, gN), (0, pd.i)(this, CN, 0)), hd.set(this, ((0, pd.i)(this, KN), (0, pd.i)(this, oN, void 0))), this.indexOfRefraction = ((0, pd.i)(this, lN), (0, pd.i)(this, QN, .98)), this.invertRefractionY = ((0, pd.i)(this, LN), (0, pd.i)(this, ON, !0)), this.alphaCutOff = ((0, pd.i)(this, eN), (0, pd.i)(this, RN, .4)), this._useLightmapAsShadowmap = ((0, pd.i)(this, IN), (0, pd.i)(this, GN, !1)), rd.set(this, ((0, pd.i)(this, vN), (0, pd.i)(this, xN, void 0))), this._diffuseFresnelParameters = ((0, pd.i)(this, qN), (0, pd.i)(this, BN, void 0)), ud.set(this, ((0, pd.i)(this, sN), (0, pd.i)(this, iN, void 0))), this._opacityFresnelParameters = ((0, pd.i)(this, aN), (0, pd.i)(this, MN, void 0)), td.set(this, ((0, pd.i)(this, FN), (0, pd.i)(this, YN, void 0))), this._reflectionFresnelParameters = ((0, pd.i)(this, mN), (0, pd.i)(this, bN, void 0)), Vd.set(this, ((0, pd.i)(this, SN), (0, pd.i)(this, jN, void 0))), this._refractionFresnelParameters = ((0, pd.i)(this, XN), (0, pd.i)(this, fN, void 0)), zd.set(this, ((0, pd.i)(this, nN), (0, pd.i)(this, UN, void 0))), this._emissiveFresnelParameters = ((0, pd.i)(this, yN), (0, pd.i)(this, DN, void 0)), Hd.set(this, ((0, pd.i)(this, TN), (0, pd.i)(this, EN, void 0))), this._useReflectionFresnelFromSpecular = ((0, pd.i)(this, cN), (0, pd.i)(this, hN, !1)), wd.set(this, ((0, pd.i)(this, rN), (0, pd.i)(this, uN, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, pd.i)(this, tN), (0, pd.i)(this, VN, !1)), Ad.set(this, ((0, pd.i)(this, zN), (0, pd.i)(this, HN, void 0))), this._maxSimultaneousLights = ((0, pd.i)(this, wN), (0, pd.i)(this, AN, 4)), dJ.set(this, ((0, pd.i)(this, dW), (0, pd.i)(this, JW, void 0))), this._invertNormalMapX = ((0, pd.i)(this, kW), (0, pd.i)(this, pW, !1)), JJ.set(this, ((0, pd.i)(this, NW), (0, pd.i)(this, WW, void 0))), this._invertNormalMapY = ((0, pd.i)(this, PW), (0, pd.i)(this, ZW, !1)), kJ.set(this, ((0, pd.i)(this, gW), (0, pd.i)(this, CW, void 0))), this._twoSidedLighting = ((0, pd.i)(this, KW), (0, pd.i)(this, oW, !1)), pJ.set(this, ((0, pd.i)(this, lW), (0, pd.i)(this, QW, void 0))), this._applyDecalMapAfterDetailMap = ((0, pd.i)(this, LW), (0, pd.i)(this, OW, !1)), NJ.set(this, ((0, pd.i)(this, eW), (0, pd.i)(this, RW, void 0))), this._vertexPullingMetadata = ((0, pd.i)(this, IW), null), this._renderTargets = new Wd.h(16), this._globalAmbientColor = new Zd.c(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new Rd.d(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new Cd.e, this.getRenderTargetTextures = () => (this._renderTargets.reset(), dd.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), dd.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(dd.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(dd.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === ld.b.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== ld.b.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(Jd, kd) {
            let pd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Nd = kd._drawWrapper;
            if (Nd.effect && this.isFrozen && Nd._wasPreviouslyReady && Nd._wasPreviouslyUsingInstances === pd) return !0;
            kd.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), kd.materialDefines = new Sd(this._eventInfo.defineNames));
            const Wd = this.Wm(),
              Pd = kd.materialDefines;
            if (this._isReadyForSubMesh(kd)) return !0;
            const Zd = Wd.eL();
            if (Pd._needNormals = (0, vd.ab)(Wd, Jd, Pd, !0, this._maxSimultaneousLights, this._disableLighting), !(0, vd.e)(Wd, Jd, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, vd.gb)(Wd, Pd);
            const Kd = this.needAlphaBlendingForMesh(Jd) && this.Wm().useOrderIndependentTransparency;
            if ((0, vd.ib)(Wd, Pd, this.canRenderToMRT && !Kd), (0, vd.hb)(Wd, Pd, Kd), Bd.b.PrepareDefines(Zd.currentRenderPassId, Jd, Pd), Pd._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Pd._needUVs = !1;
              for (let dd = 1; dd <= 6; ++dd) Pd["MAINUV" + dd] = !1;
              if (Wd.texturesEnabled) {
                if (Pd.DIFFUSEDIRECTUV = 0, Pd.BUMPDIRECTUV = 0, Pd.AMBIENTDIRECTUV = 0, Pd.OPACITYDIRECTUV = 0, Pd.EMISSIVEDIRECTUV = 0, Pd.SPECULARDIRECTUV = 0, Pd.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && dd.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, vd.db)(this._diffuseTexture, Pd, "DIFFUSE")
                } else Pd.DIFFUSE = !1;
                if (this._ambientTexture && dd.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, vd.db)(this._ambientTexture, Pd, "AMBIENT")
                } else Pd.AMBIENT = !1;
                if (this._opacityTexture && dd.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, vd.db)(this._opacityTexture, Pd, "OPACITY"), Pd.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else Pd.OPACITY = !1;
                if (this._reflectionTexture && dd.ReflectionTextureEnabled ? (Pd.ROUGHNESS = this._roughness > 0, Pd.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (Pd.ROUGHNESS = !1, Pd.REFLECTIONOVERALPHA = !1), !(0, vd.Z)(Wd, this._reflectionTexture, Pd)) return !1;
                if (this._emissiveTexture && dd.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, vd.db)(this._emissiveTexture, Pd, "EMISSIVE")
                } else Pd.EMISSIVE = !1;
                if (this._lightmapTexture && dd.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, vd.db)(this._lightmapTexture, Pd, "LIGHTMAP"), Pd.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Pd.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else Pd.LIGHTMAP = !1;
                if (this._specularTexture && dd.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, vd.db)(this._specularTexture, Pd, "SPECULAR"), Pd.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else Pd.SPECULAR = !1;
                if (Wd.eL().getCaps().standardDerivatives && this._bumpTexture && dd.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, vd.db)(this._bumpTexture, Pd, "BUMP"), Pd.PARALLAX = this._useParallax, Pd.PARALLAX_RHS = Wd.useRightHandedSystem, Pd.PARALLAXOCCLUSION = this._useParallaxOcclusion, Pd.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else Pd.BUMP = !1, Pd.PARALLAX = !1, Pd.PARALLAX_RHS = !1, Pd.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && dd.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  Pd._needUVs = !0, Pd.REFRACTION = !0, Pd.REFRACTIONMAP_3D = this._refractionTexture.isCube, Pd.RGBDREFRACTION = this._refractionTexture.isRGBD, Pd.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else Pd.REFRACTION = !1;
                Pd.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else Pd.DIFFUSE = !1, Pd.AMBIENT = !1, Pd.OPACITY = !1, Pd.REFLECTION = !1, Pd.EMISSIVE = !1, Pd.LIGHTMAP = !1, Pd.BUMP = !1, Pd.REFRACTION = !1;
              Pd.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), Pd.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, Pd.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, Pd.SPECULAROVERALPHA = this._useSpecularOverAlpha, Pd.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Pd.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, Pd.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(Jd), Pd.TEXTURE_REPETITION_MODE = Zd.version > 1 || Zd.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Pd, this._eventInfo.subMesh = kd, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Pd._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(Pd), Pd.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, Pd.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (Pd._areFresnelDirty && (dd.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (Pd.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, Pd.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, Pd.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, Pd.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, Pd.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, Pd.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, Pd._needNormals = !0, Pd.FRESNEL = !0) : Pd.FRESNEL = !1), Pd.AREALIGHTUSED || Pd.CLUSTLIGHT_BATCH)
              for (let dd = 0; dd < Jd.lightSources.length; dd++)
                if (!Jd.lightSources[dd]._isReady()) return !1;
            (0, vd.eb)(Jd, Wd, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Jd), Pd, this._applyDecalMapAfterDetailMap, this._useVertexPulling, kd.getRenderingMesh(), this._isVertexOutputInvariant), (0, vd.V)(Wd, Zd, this, Pd, pd, null, kd.getRenderingMesh().hasThinInstances), this._eventInfo.defines = Pd, this._eventInfo.mesh = Jd, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, vd.R)(Jd, Pd, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let ld = !1;
            if (Pd.isDirty) {
              const pd = Pd._areLightsDisposed;
              Pd.markAsProcessed();
              const Nd = new ed.e;
              Pd.REFLECTION && Nd.addFallback(0, "REFLECTION"), Pd.SPECULAR && Nd.addFallback(0, "SPECULAR"), Pd.BUMP && Nd.addFallback(0, "BUMP"), Pd.PARALLAX && Nd.addFallback(1, "PARALLAX"), Pd.PARALLAX_RHS && Nd.addFallback(1, "PARALLAX_RHS"), Pd.PARALLAXOCCLUSION && Nd.addFallback(0, "PARALLAXOCCLUSION"), Pd.SPECULAROVERALPHA && Nd.addFallback(0, "SPECULAROVERALPHA"), Pd.FOG && Nd.addFallback(1, "FOG"), Pd.POINTSIZE && Nd.addFallback(0, "POINTSIZE"), Pd.LOGARITHMICDEPTH && Nd.addFallback(0, "LOGARITHMICDEPTH"), (0, vd.D)(Pd, Nd, this._maxSimultaneousLights), Pd.SPECULARTERM && Nd.addFallback(0, "SPECULARTERM"), Pd.DIFFUSEFRESNEL && Nd.addFallback(1, "DIFFUSEFRESNEL"), Pd.OPACITYFRESNEL && Nd.addFallback(2, "OPACITYFRESNEL"), Pd.REFLECTIONFRESNEL && Nd.addFallback(3, "REFLECTIONFRESNEL"), Pd.EMISSIVEFRESNEL && Nd.addFallback(4, "EMISSIVEFRESNEL"), Pd.FRESNEL && Nd.addFallback(4, "FRESNEL"), Pd.MULTIVIEW && Nd.addFallback(0, "MULTIVIEW");
              const Kd = [gd.j.PositionKind];
              Pd.NORMAL && Kd.push(gd.j.NormalKind), Pd.TANGENT && Kd.push(gd.j.TangentKind);
              for (let dd = 1; dd <= 6; ++dd) Pd["UV" + dd] && Kd.push(`uv${1===dd?"":dd}`);
              Pd.VERTEXCOLOR && Kd.push(gd.j.ColorKind), (0, vd.I)(Kd, Jd, Pd, Nd), (0, vd.K)(Kd, Pd), (0, vd.O)(Kd, Jd, Pd), (0, vd.H)(Kd, Jd, Pd);
              let Qd = "default";
              const Ld = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                Od = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, vd.lb)(Ld, Od, !1);
              const Rd = ["Material", "Scene", "Mesh"],
                xd = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: Pd.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = Nd, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = Pd, this._eventInfo.uniforms = Ld, this._eventInfo.attributes = Kd, this._eventInfo.samplers = Od, this._eventInfo.uniformBuffersNames = Rd, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Jd, this._eventInfo.indexParameters = xd, this._callbackPluginEventGeneric(128, this._eventInfo), Bd.b.AddUniformsAndSamplers(Ld, Od), Cd.e.AddUniforms(Ld), Cd.e.AddSamplers(Od), od.e && (od.e.PrepareUniforms(Ld, Pd), od.e.PrepareSamplers(Od, Pd)), (0, vd.pb)({
                  uniformsNames: Ld,
                  uniformBuffersNames: Rd,
                  samplers: Od,
                  defines: Pd,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, Id.e)(Ld), this._useVertexPulling) {
                const dd = kd.getRenderingMesh(),
                  Jd = dd?.geometry;
                Jd && (this._vertexPullingMetadata = (0, Gd.h)(Jd), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((dd, Jd) => {
                  Ld.push(`vp_${Jd}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const qd = {};
              this.customShaderNameResolve && (Qd = this.customShaderNameResolve(Qd, Ld, Rd, Od, Pd, Kd, qd));
              const sd = Pd.toString(),
                ad = kd.effect,
                Md = Wd.eL().createEffect(Qd, {
                  attributes: Kd,
                  uniformsNames: Ld,
                  uniformBuffersNames: Rd,
                  samplers: Od,
                  defines: sd,
                  fallbacks: Nd,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: xd,
                  processFinalCode: qd.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: Pd.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: dd._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, Zd);
              if (this._eventInfo.customCode = void 0, Md)
                if (this._onEffectCreatedObservable && (md.effect = Md, md.subMesh = kd, this._onEffectCreatedObservable.notifyObservers(md)), this.allowShaderHotSwapping && ad && !Md.isReady()) {
                  if (Pd.markAsUnprocessed(), ld = this.isFrozen, pd) return Pd._areLightsDisposed = !0, !1
                } else Wd.resetCachedMaterial(), kd.setEffect(Md, Pd, this._materialContext)
            }
            return !(!kd.effect || !kd.effect.isReady()) && (Pd._renderId = Wd.getRenderId(), Nd._wasPreviouslyReady = !ld, Nd._wasPreviouslyUsingInstances = pd, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const dd = this._uniformBuffer;
            dd.addUniform("diffuseLeftColor", 4), dd.addUniform("diffuseRightColor", 4), dd.addUniform("opacityParts", 4), dd.addUniform("reflectionLeftColor", 4), dd.addUniform("reflectionRightColor", 4), dd.addUniform("refractionLeftColor", 4), dd.addUniform("refractionRightColor", 4), dd.addUniform("emissiveLeftColor", 4), dd.addUniform("emissiveRightColor", 4), dd.addUniform("vDiffuseInfos", 2), dd.addUniform("vAmbientInfos", 2), dd.addUniform("vOpacityInfos", 2), dd.addUniform("vEmissiveInfos", 2), dd.addUniform("vLightmapInfos", 2), dd.addUniform("vSpecularInfos", 2), dd.addUniform("vBumpInfos", 3), dd.addUniform("diffuseMatrix", 16), dd.addUniform("ambientMatrix", 16), dd.addUniform("opacityMatrix", 16), dd.addUniform("emissiveMatrix", 16), dd.addUniform("lightmapMatrix", 16), dd.addUniform("specularMatrix", 16), dd.addUniform("bumpMatrix", 16), dd.addUniform("vTangentSpaceParams", 2), dd.addUniform("pointSize", 1), dd.addUniform("alphaCutOff", 1), dd.addUniform("refractionMatrix", 16), dd.addUniform("vRefractionInfos", 4), dd.addUniform("vRefractionPosition", 3), dd.addUniform("vRefractionSize", 3), dd.addUniform("vSpecularColor", 4), dd.addUniform("vEmissiveColor", 3), dd.addUniform("vDiffuseColor", 4), dd.addUniform("vAmbientColor", 3), dd.addUniform("cameraInfo", 4), dd.addUniform("vTextureRepetitionHexTilingParams", 4), (0, vd.jb)(dd, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(Jd, kd, pd) {
            const Nd = this.Wm(),
              Wd = pd.materialDefines;
            if (!Wd) return;
            const gd = pd.effect;
            if (!gd) return;
            this._activeEffect = gd, kd.getMeshUniformBuffer().bindToEffect(gd, "Mesh"), kd.transferToEffect(Jd), this._uniformBuffer.bindToEffect(gd, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Nd, kd, Jd, this.isFrozen), Bd.b.Bind(Nd.eL().currentRenderPassId, this._activeEffect, kd, Jd, this);
            const Cd = Nd.activeCamera;
            Cd ? this._uniformBuffer.updateFloat4("cameraInfo", Cd.minZ, Cd.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Kd = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Kd[0], Kd[1], Kd[2], Kd[3]), this._eventInfo.subMesh = pd, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Wd.OBJECTSPACE_NORMALMAP && (Jd.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const od = this._mustRebind(Nd, gd, pd, kd.visibility),
              ld = Nd.eL()._features.needToAlwaysBindUniformBuffers;
            (0, vd.g)(kd, gd), this._vertexPullingMetadata && (0, Gd.e)(gd, this._vertexPullingMetadata);
            const Qd = this._uniformBuffer;
            if (od) {
              if (this.bindViewProjection(gd), !Qd.useUbo || !this.isFrozen || !Qd.isSync || pd._drawWrapper._forceRebindOnNextCall) {
                if (dd.FresnelEnabled && Wd.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (Qd.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), Qd.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const dd = Zd.m.Color3[0];
                    dd.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), Qd.updateColor4("opacityParts", dd, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (Qd.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), Qd.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (Qd.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), Qd.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (Qd.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), Qd.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (Wd.ALPHATEST && Qd.updateFloat("alphaCutOff", this.alphaCutOff), Nd.texturesEnabled && (this._diffuseTexture && dd.DiffuseTextureEnabled && (Qd.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, vd.C)(this._diffuseTexture, Qd, "diffuse")), this._ambientTexture && dd.AmbientTextureEnabled && (Qd.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, vd.C)(this._ambientTexture, Qd, "ambient")), this._opacityTexture && dd.OpacityTextureEnabled && (Qd.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, vd.C)(this._opacityTexture, Qd, "opacity")), (0, vd.n)(Nd, Wd, Qd, Zd.c.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && dd.ReflectionTextureEnabled || Qd.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && dd.EmissiveTextureEnabled && (Qd.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, vd.C)(this._emissiveTexture, Qd, "emissive")), this._lightmapTexture && dd.LightmapTextureEnabled && (Qd.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, vd.C)(this._lightmapTexture, Qd, "lightmap")), this._specularTexture && dd.SpecularTextureEnabled && (Qd.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, vd.C)(this._specularTexture, Qd, "specular")), this._bumpTexture && Nd.eL().getCaps().standardDerivatives && dd.BumpTextureEnabled && (Qd.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, vd.C)(this._bumpTexture, Qd, "bump"), Nd._mirroredCameraPosition ? Qd.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Qd.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && dd.RefractionTextureEnabled)) {
                  let dd = 1;
                  if (this._refractionTexture.isCube || (Qd.o3("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (dd = this._refractionTexture.depth)), Qd.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, dd, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const dd = this._refractionTexture;
                    Qd.updateVector3("vRefractionPosition", dd.boundingBoxPosition), Qd.updateVector3("vRefractionSize", dd.boundingBoxSize)
                  }
                }
                this.pointsCloud && Qd.updateFloat("pointSize", this.pointSize), Qd.updateColor4("vSpecularColor", this.specularColor, this.specularPower), Qd.updateColor3("vEmissiveColor", dd.EmissiveTextureEnabled ? this.emissiveColor : Zd.c.BlackReadOnly), Qd.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), Nd.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), Qd.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              Nd.texturesEnabled && (this._diffuseTexture && dd.DiffuseTextureEnabled && gd.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && dd.AmbientTextureEnabled && gd.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && dd.OpacityTextureEnabled && gd.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && dd.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? gd.setTexture("reflectionCubeSampler", this._reflectionTexture) : gd.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && dd.EmissiveTextureEnabled && gd.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && dd.LightmapTextureEnabled && gd.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && dd.SpecularTextureEnabled && gd.setTexture("specularSampler", this._specularTexture), this._bumpTexture && Nd.eL().getCaps().standardDerivatives && dd.BumpTextureEnabled && gd.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && dd.RefractionTextureEnabled && (this._refractionTexture.isCube ? gd.setTexture("refractionCubeSampler", this._refractionTexture) : gd.setTexture("refraction2DSampler", this._refractionTexture))), this.Wm().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(kd) && this.Wm().depthPeelingRenderer.bind(gd), this._eventInfo.subMesh = pd, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Id.i)(gd, this, Nd), this.bindEyePosition(gd)
            } else ld && (this._needToBindSceneUbo = !0);
            !od && this.isFrozen && !ld || !Nd.lightsEnabled || this._disableLighting || (0, vd.q)(Nd, kd, gd, Wd, this._maxSimultaneousLights), !od && this.isFrozen || ((Nd.fogEnabled && kd.applyFog && Nd.fogMode !== Pd.i.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || kd.receiveShadows || Wd.PREPASS || Wd.CLUSTLIGHT_BATCH) && this.bindView(gd), (0, vd.k)(Nd, kd, gd), Wd.NUM_MORPH_INFLUENCERS && (0, vd.v)(kd, gd), Wd.BAKED_VERTEX_ANIMATION_TEXTURE && kd.bakedVertexAnimationManager?.bind(gd, Wd.INSTANCES), this.useLogarithmicDepth && (0, vd.s)(Wd, gd, Nd), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(kd, this._activeEffect, pd), Qd.update()
          }
          _canBindRunFollower(Jd, kd, pd, Nd, Wd) {
            const Pd = Jd.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === dd.prototype.isReadyForSubMesh && this.bindForSubMesh === dd.prototype.bindForSubMesh && this._mustRebind === Ld.c.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !kd._features.needToAlwaysBindUniformBuffers && !(Pd && Pd.enabled && Pd.currentRTisSceneRT) && !Bd.b._Configurations[kd.currentRenderPassId] && !Nd.materialDefines?.OBJECTSPACE_NORMALMAP && !pd.skeleton && !Wd._bonesComputationForcedToCPU
          }
          _bindRunFollower(dd, Jd, kd, pd) {
            this._activeEffect = pd, Jd.getMeshUniformBuffer().bindToEffect(pd, "Mesh"), Jd.transferToEffect(dd);
            const Nd = this._uniformBuffer;
            Nd.bindToEffect(pd, "Material");
            const Wd = this._scene.activeCamera;
            Wd ? Nd.updateFloat4("cameraInfo", Wd.minZ, Wd.maxZ, 0, 0) : Nd.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Pd = this.textureRepetitionHexTilingParams;
            Nd.updateFloat4("vTextureRepetitionHexTilingParams", Pd[0], Pd[1], Pd[2], Pd[3]), this._afterBind(Jd, pd, kd), Nd.update()
          }
          getAnimatables() {
            const dd = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && dd.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && dd.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && dd.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && dd.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && dd.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && dd.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && dd.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && dd.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && dd.push(this._refractionTexture), dd
          }
          getActiveTextures() {
            const dd = super.getActiveTextures();
            return this._diffuseTexture && dd.push(this._diffuseTexture), this._ambientTexture && dd.push(this._ambientTexture), this._opacityTexture && dd.push(this._opacityTexture), this._reflectionTexture && dd.push(this._reflectionTexture), this._emissiveTexture && dd.push(this._emissiveTexture), this._specularTexture && dd.push(this._specularTexture), this._bumpTexture && dd.push(this._bumpTexture), this._lightmapTexture && dd.push(this._lightmapTexture), this._refractionTexture && dd.push(this._refractionTexture), dd
          }
          hasTexture(dd) {
            return !!super.hasTexture(dd) || (this._diffuseTexture === dd || (this._ambientTexture === dd || (this._opacityTexture === dd || (this._reflectionTexture === dd || (this._emissiveTexture === dd || (this._specularTexture === dd || (this._bumpTexture === dd || (this._lightmapTexture === dd || this._refractionTexture === dd))))))))
          }
          dispose(dd, Jd) {
            Jd && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(dd, Jd)
          }
          clone(Jd) {
            let kd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Nd = xd.c.Clone((() => new dd(Jd, this.Wm())), this, {
              cloneTexturesOnlyOnce: kd
            });
            return Nd.name = Jd, Nd.id = Jd, this.stencil.copyTo(Nd.stencil), this._clonePlugins(Nd, pd), Nd
          }
          static Parse(Jd, kd, pd) {
            const Nd = xd.c.Parse((() => new dd(Jd.name, kd)), Jd, kd, pd);
            return Jd.stencil && Nd.stencil.parse(Jd.stencil, kd, pd), ld.b._ParsePlugins(Jd, Nd, kd, pd), Nd
          }
          static get DiffuseTextureEnabled() {
            return Od.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(dd) {
            Od.e.DiffuseTextureEnabled = dd
          }
          static get DetailTextureEnabled() {
            return Od.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(dd) {
            Od.e.DetailTextureEnabled = dd
          }
          static get AmbientTextureEnabled() {
            return Od.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(dd) {
            Od.e.AmbientTextureEnabled = dd
          }
          static get OpacityTextureEnabled() {
            return Od.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(dd) {
            Od.e.OpacityTextureEnabled = dd
          }
          static get ReflectionTextureEnabled() {
            return Od.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(dd) {
            Od.e.ReflectionTextureEnabled = dd
          }
          static get EmissiveTextureEnabled() {
            return Od.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(dd) {
            Od.e.EmissiveTextureEnabled = dd
          }
          static get SpecularTextureEnabled() {
            return Od.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(dd) {
            Od.e.SpecularTextureEnabled = dd
          }
          static get BumpTextureEnabled() {
            return Od.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(dd) {
            Od.e.BumpTextureEnabled = dd
          }
          static get LightmapTextureEnabled() {
            return Od.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(dd) {
            Od.e.LightmapTextureEnabled = dd
          }
          static get RefractionTextureEnabled() {
            return Od.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(dd) {
            Od.e.RefractionTextureEnabled = dd
          }
          static get ColorGradingTextureEnabled() {
            return Od.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(dd) {
            Od.e.ColorGradingTextureEnabled = dd
          }
          static get FresnelEnabled() {
            return Od.e.FresnelEnabled
          }
          static set FresnelEnabled(dd) {
            Od.e.FresnelEnabled = dd
          }
        }, Jd = new WeakMap, Kd = new WeakMap, Qd = new WeakMap, sd = new WeakMap, ad = new WeakMap, Md = new WeakMap, Fd = new WeakMap, Yd = new WeakMap, bd = new WeakMap, Xd = new WeakMap, fd = new WeakMap, nd = new WeakMap, Ud = new WeakMap, yd = new WeakMap, Dd = new WeakMap, Td = new WeakMap, Ed = new WeakMap, cd = new WeakMap, hd = new WeakMap, rd = new WeakMap, ud = new WeakMap, td = new WeakMap, Vd = new WeakMap, zd = new WeakMap, Hd = new WeakMap, wd = new WeakMap, Ad = new WeakMap, dJ = new WeakMap, JJ = new WeakMap, kJ = new WeakMap, pJ = new WeakMap, NJ = new WeakMap, (() => {
          const Jd = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mk[Symbol.metadata] ?? null) : void 0;
          WJ = [(0, Nd.y)("diffuseTexture")], PJ = [(0, Nd.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], ZJ = [(0, Nd.y)("ambientTexture")], gJ = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], CJ = [(0, Nd.y)("opacityTexture")], KJ = [(0, Nd.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], oJ = [(0, Nd.y)("reflectionTexture")], lJ = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], QJ = [(0, Nd.y)("emissiveTexture")], LJ = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], OJ = [(0, Nd.y)("specularTexture")], eJ = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], RJ = [(0, Nd.y)("bumpTexture")], IJ = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], GJ = [(0, Nd.y)("lightmapTexture")], vJ = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], xJ = [(0, Nd.y)("refractionTexture")], qJ = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], BJ = [(0, Nd.n)("ambient")], sJ = [(0, Nd.n)("diffuse")], iJ = [(0, Nd.n)("specular")], aJ = [(0, Nd.n)("emissive")], MJ = [(0, Nd.H)()], FJ = [(0, Nd.H)("useAlphaFromDiffuseTexture")], YJ = [() => ({
            init(dd) {
              return void 0 === dd && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = dd), dd
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(dd) {
              this._useAlphaFromDiffuseTexture = dd
            }
          })], mJ = [(0, Nd.H)("useEmissiveAsIllumination")], bJ = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], SJ = [(0, Nd.H)("linkEmissiveWithDiffuse")], jJ = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], XJ = [(0, Nd.H)("useSpecularOverAlpha")], fJ = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], nJ = [(0, Nd.H)("useReflectionOverAlpha")], UJ = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], yJ = [(0, Nd.H)("disableLighting")], DJ = [(0, Nd.f)("_markAllSubMeshesAsLightsDirty")], TJ = [(0, Nd.H)("useObjectSpaceNormalMap")], EJ = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], cJ = [(0, Nd.H)("useParallax")], hJ = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], rJ = [(0, Nd.H)("useParallaxOcclusion")], uJ = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], tJ = [(0, Nd.H)()], VJ = [(0, Nd.H)("roughness")], zJ = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], HJ = [(0, Nd.H)()], wJ = [(0, Nd.H)()], AJ = [(0, Nd.H)()], dk = [(0, Nd.H)("useLightmapAsShadowmap")], Jk = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], kk = [(0, Nd.s)("diffuseFresnelParameters")], pk = [(0, Nd.f)("_markAllSubMeshesAsFresnelDirty")], Nk = [(0, Nd.s)("opacityFresnelParameters")], Wk = [(0, Nd.f)("_markAllSubMeshesAsFresnelAndMiscDirty")], Pk = [(0, Nd.s)("reflectionFresnelParameters")], Zk = [(0, Nd.f)("_markAllSubMeshesAsFresnelDirty")], gk = [(0, Nd.s)("refractionFresnelParameters")], Ck = [(0, Nd.f)("_markAllSubMeshesAsFresnelDirty")], Kk = [(0, Nd.s)("emissiveFresnelParameters")], lk = [(0, Nd.f)("_markAllSubMeshesAsFresnelDirty")], Qk = [(0, Nd.H)("useReflectionFresnelFromSpecular")], Lk = [(0, Nd.f)("_markAllSubMeshesAsFresnelDirty")], Ok = [(0, Nd.H)("useGlossinessFromSpecularMapAlpha")], ek = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], Rk = [(0, Nd.H)("maxSimultaneousLights")], Ik = [(0, Nd.f)("_markAllSubMeshesAsLightsDirty")], Gk = [(0, Nd.H)("invertNormalMapX")], vk = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], xk = [(0, Nd.H)("invertNormalMapY")], qk = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], Bk = [(0, Nd.H)("twoSidedLighting")], sk = [(0, Nd.f)("_markAllSubMeshesAsTexturesDirty")], ik = [(0, Nd.H)("applyDecalMapAfterDetailMap")], ak = [(0, Nd.f)("_markAllSubMeshesAsMiscDirty")], (0, pd.h)(dd, null, PJ, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "diffuseTexture" in dd,
              get: dd => dd.diffuseTexture,
              set: (dd, Jd) => {
                dd.diffuseTexture = Jd
              }
            },
            metadata: Jd
          }, mk, bk), (0, pd.h)(dd, null, gJ, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "ambientTexture" in dd,
              get: dd => dd.ambientTexture,
              set: (dd, Jd) => {
                dd.ambientTexture = Jd
              }
            },
            metadata: Jd
          }, Xk, fk), (0, pd.h)(dd, null, KJ, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "opacityTexture" in dd,
              get: dd => dd.opacityTexture,
              set: (dd, Jd) => {
                dd.opacityTexture = Jd
              }
            },
            metadata: Jd
          }, yk, Dk), (0, pd.h)(dd, null, lJ, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "reflectionTexture" in dd,
              get: dd => dd.reflectionTexture,
              set: (dd, Jd) => {
                dd.reflectionTexture = Jd
              }
            },
            metadata: Jd
          }, ck, hk), (0, pd.h)(dd, null, LJ, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "emissiveTexture" in dd,
              get: dd => dd.emissiveTexture,
              set: (dd, Jd) => {
                dd.emissiveTexture = Jd
              }
            },
            metadata: Jd
          }, tk, Vk), (0, pd.h)(dd, null, eJ, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularTexture" in dd,
              get: dd => dd.specularTexture,
              set: (dd, Jd) => {
                dd.specularTexture = Jd
              }
            },
            metadata: Jd
          }, wk, Ak), (0, pd.h)(dd, null, IJ, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "bumpTexture" in dd,
              get: dd => dd.bumpTexture,
              set: (dd, Jd) => {
                dd.bumpTexture = Jd
              }
            },
            metadata: Jd
          }, kp, pp), (0, pd.h)(dd, null, vJ, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "lightmapTexture" in dd,
              get: dd => dd.lightmapTexture,
              set: (dd, Jd) => {
                dd.lightmapTexture = Jd
              }
            },
            metadata: Jd
          }, Pp, Zp), (0, pd.h)(dd, null, qJ, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "refractionTexture" in dd,
              get: dd => dd.refractionTexture,
              set: (dd, Jd) => {
                dd.refractionTexture = Jd
              }
            },
            metadata: Jd
          }, Kp, op), (0, pd.h)(dd, null, YJ, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "useAlphaFromDiffuseTexture" in dd,
              get: dd => dd.useAlphaFromDiffuseTexture,
              set: (dd, Jd) => {
                dd.useAlphaFromDiffuseTexture = Jd
              }
            },
            metadata: Jd
          }, sp, ip), (0, pd.h)(dd, null, bJ, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: dd => "useEmissiveAsIllumination" in dd,
              get: dd => dd.useEmissiveAsIllumination,
              set: (dd, Jd) => {
                dd.useEmissiveAsIllumination = Jd
              }
            },
            metadata: Jd
          }, Fp, Yp), (0, pd.h)(dd, null, jJ, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: dd => "linkEmissiveWithDiffuse" in dd,
              get: dd => dd.linkEmissiveWithDiffuse,
              set: (dd, Jd) => {
                dd.linkEmissiveWithDiffuse = Jd
              }
            },
            metadata: Jd
          }, Sp, jp), (0, pd.h)(dd, null, fJ, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: dd => "useSpecularOverAlpha" in dd,
              get: dd => dd.useSpecularOverAlpha,
              set: (dd, Jd) => {
                dd.useSpecularOverAlpha = Jd
              }
            },
            metadata: Jd
          }, np, Up), (0, pd.h)(dd, null, UJ, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: dd => "useReflectionOverAlpha" in dd,
              get: dd => dd.useReflectionOverAlpha,
              set: (dd, Jd) => {
                dd.useReflectionOverAlpha = Jd
              }
            },
            metadata: Jd
          }, Tp, Ep), (0, pd.h)(dd, null, DJ, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: dd => "disableLighting" in dd,
              get: dd => dd.disableLighting,
              set: (dd, Jd) => {
                dd.disableLighting = Jd
              }
            },
            metadata: Jd
          }, rp, tp), (0, pd.h)(dd, null, EJ, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: dd => "useObjectSpaceNormalMap" in dd,
              get: dd => dd.useObjectSpaceNormalMap,
              set: (dd, Jd) => {
                dd.useObjectSpaceNormalMap = Jd
              }
            },
            metadata: Jd
          }, Hp, wp), (0, pd.h)(dd, null, hJ, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: dd => "useParallax" in dd,
              get: dd => dd.useParallax,
              set: (dd, Jd) => {
                dd.useParallax = Jd
              }
            },
            metadata: Jd
          }, JN, kN), (0, pd.h)(dd, null, uJ, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: dd => "useParallaxOcclusion" in dd,
              get: dd => dd.useParallaxOcclusion,
              set: (dd, Jd) => {
                dd.useParallaxOcclusion = Jd
              }
            },
            metadata: Jd
          }, WN, PN), (0, pd.h)(dd, null, zJ, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: dd => "roughness" in dd,
              get: dd => dd.roughness,
              set: (dd, Jd) => {
                dd.roughness = Jd
              }
            },
            metadata: Jd
          }, oN, lN), (0, pd.h)(dd, null, Jk, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: dd => "useLightmapAsShadowmap" in dd,
              get: dd => dd.useLightmapAsShadowmap,
              set: (dd, Jd) => {
                dd.useLightmapAsShadowmap = Jd
              }
            },
            metadata: Jd
          }, xN, qN), (0, pd.h)(dd, null, pk, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "diffuseFresnelParameters" in dd,
              get: dd => dd.diffuseFresnelParameters,
              set: (dd, Jd) => {
                dd.diffuseFresnelParameters = Jd
              }
            },
            metadata: Jd
          }, iN, aN), (0, pd.h)(dd, null, Wk, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "opacityFresnelParameters" in dd,
              get: dd => dd.opacityFresnelParameters,
              set: (dd, Jd) => {
                dd.opacityFresnelParameters = Jd
              }
            },
            metadata: Jd
          }, YN, mN), (0, pd.h)(dd, null, Zk, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "reflectionFresnelParameters" in dd,
              get: dd => dd.reflectionFresnelParameters,
              set: (dd, Jd) => {
                dd.reflectionFresnelParameters = Jd
              }
            },
            metadata: Jd
          }, jN, XN), (0, pd.h)(dd, null, Ck, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "refractionFresnelParameters" in dd,
              get: dd => dd.refractionFresnelParameters,
              set: (dd, Jd) => {
                dd.refractionFresnelParameters = Jd
              }
            },
            metadata: Jd
          }, UN, yN), (0, pd.h)(dd, null, lk, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "emissiveFresnelParameters" in dd,
              get: dd => dd.emissiveFresnelParameters,
              set: (dd, Jd) => {
                dd.emissiveFresnelParameters = Jd
              }
            },
            metadata: Jd
          }, EN, cN), (0, pd.h)(dd, null, Lk, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: dd => "useReflectionFresnelFromSpecular" in dd,
              get: dd => dd.useReflectionFresnelFromSpecular,
              set: (dd, Jd) => {
                dd.useReflectionFresnelFromSpecular = Jd
              }
            },
            metadata: Jd
          }, uN, tN), (0, pd.h)(dd, null, ek, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: dd => "useGlossinessFromSpecularMapAlpha" in dd,
              get: dd => dd.useGlossinessFromSpecularMapAlpha,
              set: (dd, Jd) => {
                dd.useGlossinessFromSpecularMapAlpha = Jd
              }
            },
            metadata: Jd
          }, HN, wN), (0, pd.h)(dd, null, Ik, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: dd => "maxSimultaneousLights" in dd,
              get: dd => dd.maxSimultaneousLights,
              set: (dd, Jd) => {
                dd.maxSimultaneousLights = Jd
              }
            },
            metadata: Jd
          }, JW, kW), (0, pd.h)(dd, null, vk, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: dd => "invertNormalMapX" in dd,
              get: dd => dd.invertNormalMapX,
              set: (dd, Jd) => {
                dd.invertNormalMapX = Jd
              }
            },
            metadata: Jd
          }, WW, PW), (0, pd.h)(dd, null, qk, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: dd => "invertNormalMapY" in dd,
              get: dd => dd.invertNormalMapY,
              set: (dd, Jd) => {
                dd.invertNormalMapY = Jd
              }
            },
            metadata: Jd
          }, CW, KW), (0, pd.h)(dd, null, sk, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: dd => "twoSidedLighting" in dd,
              get: dd => dd.twoSidedLighting,
              set: (dd, Jd) => {
                dd.twoSidedLighting = Jd
              }
            },
            metadata: Jd
          }, QW, LW), (0, pd.h)(dd, null, ak, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: dd => "applyDecalMapAfterDetailMap" in dd,
              get: dd => dd.applyDecalMapAfterDetailMap,
              set: (dd, Jd) => {
                dd.applyDecalMapAfterDetailMap = Jd
              }
            },
            metadata: Jd
          }, RW, IW), (0, pd.h)(null, null, WJ, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_diffuseTexture" in dd,
              get: dd => dd._diffuseTexture,
              set: (dd, Jd) => {
                dd._diffuseTexture = Jd
              }
            },
            metadata: Jd
          }, Fk, Yk), (0, pd.h)(null, null, ZJ, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_ambientTexture" in dd,
              get: dd => dd._ambientTexture,
              set: (dd, Jd) => {
                dd._ambientTexture = Jd
              }
            },
            metadata: Jd
          }, Sk, jk), (0, pd.h)(null, null, CJ, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_opacityTexture" in dd,
              get: dd => dd._opacityTexture,
              set: (dd, Jd) => {
                dd._opacityTexture = Jd
              }
            },
            metadata: Jd
          }, nk, Uk), (0, pd.h)(null, null, oJ, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_reflectionTexture" in dd,
              get: dd => dd._reflectionTexture,
              set: (dd, Jd) => {
                dd._reflectionTexture = Jd
              }
            },
            metadata: Jd
          }, Tk, Ek), (0, pd.h)(null, null, QJ, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_emissiveTexture" in dd,
              get: dd => dd._emissiveTexture,
              set: (dd, Jd) => {
                dd._emissiveTexture = Jd
              }
            },
            metadata: Jd
          }, rk, uk), (0, pd.h)(null, null, OJ, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_specularTexture" in dd,
              get: dd => dd._specularTexture,
              set: (dd, Jd) => {
                dd._specularTexture = Jd
              }
            },
            metadata: Jd
          }, zk, Hk), (0, pd.h)(null, null, RJ, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_bumpTexture" in dd,
              get: dd => dd._bumpTexture,
              set: (dd, Jd) => {
                dd._bumpTexture = Jd
              }
            },
            metadata: Jd
          }, dp, Jp), (0, pd.h)(null, null, GJ, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_lightmapTexture" in dd,
              get: dd => dd._lightmapTexture,
              set: (dd, Jd) => {
                dd._lightmapTexture = Jd
              }
            },
            metadata: Jd
          }, Np, Wp), (0, pd.h)(null, null, xJ, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_refractionTexture" in dd,
              get: dd => dd._refractionTexture,
              set: (dd, Jd) => {
                dd._refractionTexture = Jd
              }
            },
            metadata: Jd
          }, gp, Cp), (0, pd.h)(null, null, BJ, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "ambientColor" in dd,
              get: dd => dd.ambientColor,
              set: (dd, Jd) => {
                dd.ambientColor = Jd
              }
            },
            metadata: Jd
          }, lp, Qp), (0, pd.h)(null, null, sJ, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "diffuseColor" in dd,
              get: dd => dd.diffuseColor,
              set: (dd, Jd) => {
                dd.diffuseColor = Jd
              }
            },
            metadata: Jd
          }, Lp, Op), (0, pd.h)(null, null, iJ, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularColor" in dd,
              get: dd => dd.specularColor,
              set: (dd, Jd) => {
                dd.specularColor = Jd
              }
            },
            metadata: Jd
          }, ep, Rp), (0, pd.h)(null, null, aJ, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "emissiveColor" in dd,
              get: dd => dd.emissiveColor,
              set: (dd, Jd) => {
                dd.emissiveColor = Jd
              }
            },
            metadata: Jd
          }, Ip, Gp), (0, pd.h)(null, null, MJ, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularPower" in dd,
              get: dd => dd.specularPower,
              set: (dd, Jd) => {
                dd.specularPower = Jd
              }
            },
            metadata: Jd
          }, vp, xp), (0, pd.h)(null, null, FJ, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useAlphaFromDiffuseTexture" in dd,
              get: dd => dd._useAlphaFromDiffuseTexture,
              set: (dd, Jd) => {
                dd._useAlphaFromDiffuseTexture = Jd
              }
            },
            metadata: Jd
          }, qp, Bp), (0, pd.h)(null, null, mJ, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useEmissiveAsIllumination" in dd,
              get: dd => dd._useEmissiveAsIllumination,
              set: (dd, Jd) => {
                dd._useEmissiveAsIllumination = Jd
              }
            },
            metadata: Jd
          }, ap, Mp), (0, pd.h)(null, null, SJ, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: dd => "_linkEmissiveWithDiffuse" in dd,
              get: dd => dd._linkEmissiveWithDiffuse,
              set: (dd, Jd) => {
                dd._linkEmissiveWithDiffuse = Jd
              }
            },
            metadata: Jd
          }, mp, bp), (0, pd.h)(null, null, XJ, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useSpecularOverAlpha" in dd,
              get: dd => dd._useSpecularOverAlpha,
              set: (dd, Jd) => {
                dd._useSpecularOverAlpha = Jd
              }
            },
            metadata: Jd
          }, Xp, fp), (0, pd.h)(null, null, nJ, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useReflectionOverAlpha" in dd,
              get: dd => dd._useReflectionOverAlpha,
              set: (dd, Jd) => {
                dd._useReflectionOverAlpha = Jd
              }
            },
            metadata: Jd
          }, yp, Dp), (0, pd.h)(null, null, yJ, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: dd => "_disableLighting" in dd,
              get: dd => dd._disableLighting,
              set: (dd, Jd) => {
                dd._disableLighting = Jd
              }
            },
            metadata: Jd
          }, cp, hp), (0, pd.h)(null, null, TJ, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useObjectSpaceNormalMap" in dd,
              get: dd => dd._useObjectSpaceNormalMap,
              set: (dd, Jd) => {
                dd._useObjectSpaceNormalMap = Jd
              }
            },
            metadata: Jd
          }, Vp, zp), (0, pd.h)(null, null, cJ, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useParallax" in dd,
              get: dd => dd._useParallax,
              set: (dd, Jd) => {
                dd._useParallax = Jd
              }
            },
            metadata: Jd
          }, Ap, dN), (0, pd.h)(null, null, rJ, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useParallaxOcclusion" in dd,
              get: dd => dd._useParallaxOcclusion,
              set: (dd, Jd) => {
                dd._useParallaxOcclusion = Jd
              }
            },
            metadata: Jd
          }, pN, NN), (0, pd.h)(null, null, tJ, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: dd => "parallaxScaleBias" in dd,
              get: dd => dd.parallaxScaleBias,
              set: (dd, Jd) => {
                dd.parallaxScaleBias = Jd
              }
            },
            metadata: Jd
          }, ZN, gN), (0, pd.h)(null, null, VJ, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: dd => "_roughness" in dd,
              get: dd => dd._roughness,
              set: (dd, Jd) => {
                dd._roughness = Jd
              }
            },
            metadata: Jd
          }, CN, KN), (0, pd.h)(null, null, HJ, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: dd => "indexOfRefraction" in dd,
              get: dd => dd.indexOfRefraction,
              set: (dd, Jd) => {
                dd.indexOfRefraction = Jd
              }
            },
            metadata: Jd
          }, QN, LN), (0, pd.h)(null, null, wJ, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: dd => "invertRefractionY" in dd,
              get: dd => dd.invertRefractionY,
              set: (dd, Jd) => {
                dd.invertRefractionY = Jd
              }
            },
            metadata: Jd
          }, ON, eN), (0, pd.h)(null, null, AJ, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: dd => "alphaCutOff" in dd,
              get: dd => dd.alphaCutOff,
              set: (dd, Jd) => {
                dd.alphaCutOff = Jd
              }
            },
            metadata: Jd
          }, RN, IN), (0, pd.h)(null, null, dk, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useLightmapAsShadowmap" in dd,
              get: dd => dd._useLightmapAsShadowmap,
              set: (dd, Jd) => {
                dd._useLightmapAsShadowmap = Jd
              }
            },
            metadata: Jd
          }, GN, vN), (0, pd.h)(null, null, kk, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "_diffuseFresnelParameters" in dd,
              get: dd => dd._diffuseFresnelParameters,
              set: (dd, Jd) => {
                dd._diffuseFresnelParameters = Jd
              }
            },
            metadata: Jd
          }, BN, sN), (0, pd.h)(null, null, Nk, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "_opacityFresnelParameters" in dd,
              get: dd => dd._opacityFresnelParameters,
              set: (dd, Jd) => {
                dd._opacityFresnelParameters = Jd
              }
            },
            metadata: Jd
          }, MN, FN), (0, pd.h)(null, null, Pk, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "_reflectionFresnelParameters" in dd,
              get: dd => dd._reflectionFresnelParameters,
              set: (dd, Jd) => {
                dd._reflectionFresnelParameters = Jd
              }
            },
            metadata: Jd
          }, bN, SN), (0, pd.h)(null, null, gk, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "_refractionFresnelParameters" in dd,
              get: dd => dd._refractionFresnelParameters,
              set: (dd, Jd) => {
                dd._refractionFresnelParameters = Jd
              }
            },
            metadata: Jd
          }, fN, nN), (0, pd.h)(null, null, Kk, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "_emissiveFresnelParameters" in dd,
              get: dd => dd._emissiveFresnelParameters,
              set: (dd, Jd) => {
                dd._emissiveFresnelParameters = Jd
              }
            },
            metadata: Jd
          }, DN, TN), (0, pd.h)(null, null, Qk, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useReflectionFresnelFromSpecular" in dd,
              get: dd => dd._useReflectionFresnelFromSpecular,
              set: (dd, Jd) => {
                dd._useReflectionFresnelFromSpecular = Jd
              }
            },
            metadata: Jd
          }, hN, rN), (0, pd.h)(null, null, Ok, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useGlossinessFromSpecularMapAlpha" in dd,
              get: dd => dd._useGlossinessFromSpecularMapAlpha,
              set: (dd, Jd) => {
                dd._useGlossinessFromSpecularMapAlpha = Jd
              }
            },
            metadata: Jd
          }, VN, zN), (0, pd.h)(null, null, Rk, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: dd => "_maxSimultaneousLights" in dd,
              get: dd => dd._maxSimultaneousLights,
              set: (dd, Jd) => {
                dd._maxSimultaneousLights = Jd
              }
            },
            metadata: Jd
          }, AN, dW), (0, pd.h)(null, null, Gk, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: dd => "_invertNormalMapX" in dd,
              get: dd => dd._invertNormalMapX,
              set: (dd, Jd) => {
                dd._invertNormalMapX = Jd
              }
            },
            metadata: Jd
          }, pW, NW), (0, pd.h)(null, null, xk, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: dd => "_invertNormalMapY" in dd,
              get: dd => dd._invertNormalMapY,
              set: (dd, Jd) => {
                dd._invertNormalMapY = Jd
              }
            },
            metadata: Jd
          }, ZW, gW), (0, pd.h)(null, null, Bk, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: dd => "_twoSidedLighting" in dd,
              get: dd => dd._twoSidedLighting,
              set: (dd, Jd) => {
                dd._twoSidedLighting = Jd
              }
            },
            metadata: Jd
          }, oW, lW), (0, pd.h)(null, null, ik, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: dd => "_applyDecalMapAfterDetailMap" in dd,
              get: dd => dd._applyDecalMapAfterDetailMap,
              set: (dd, Jd) => {
                dd._applyDecalMapAfterDetailMap = Jd
              }
            },
            metadata: Jd
          }, OW, eW), Jd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Jd
          })
        })(), dd.ForceGLSL = !1, dd._ShaderLoader = new qd.e((() => [Promise.all([kd.e(308), kd.e(307)]).then((() => kd(41833))), Promise.all([kd.e(313), kd.e(309), kd.e(322), kd.e(312)]).then((() => kd(42012)))]), (() => [Promise.all([kd.e(329), kd.e(324)]).then((() => kd(42171))), Promise.all([kd.e(330), kd.e(340), kd.e(326)]).then((() => kd(42345)))])), dd
      })(),
      fd = !1;

    function nd() {
      fd || (fd = !0, (0, od.h)(), (0, Fd.h)("BABYLON.StandardMaterial", Xd), Pd.i.DefaultMaterialFactory = dd => new Xd("default material", dd))
    }
    Object.getOwnPropertyDescriptor(Xd.prototype, "decalMap") || Object.defineProperty(Xd.prototype, "decalMap", (0, Yd.g)("StandardMaterial", "decalMap"))
  },
  40372: (dd, Jd, kd) => {
    function pd(dd) {
      return class extends dd {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    kd.d(Jd, {
      d: () => pd
    })
  },
  40358: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd
    });
    class pd {
      constructor(dd, Jd) {
        this._webGL = {
          load: dd,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: Jd,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(dd) {
        const Jd = 1 === dd ? this._webGPU : this._webGL;
        return Jd.loaded ? void 0 : async () => {
          await this._loadAsync(Jd)
        }
      }
      async _loadAsync(dd) {
        if (dd.loaded) return;
        let Jd = dd.loadPromise;
        const kd = null === Jd;
        kd && (Jd = Promise.all(dd.load()), dd.loadPromise = Jd);
        let pd = !1;
        try {
          await Jd, pd = !0
        } finally {
          kd && this._completeLoad(dd, pd)
        }
      }
      _completeLoad(dd, Jd) {
        dd.loaded = Jd, dd.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);