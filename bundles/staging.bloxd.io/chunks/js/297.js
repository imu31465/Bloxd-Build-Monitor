export const id = 297;
export const ids = [297];
export const modules = {
  42314: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd
    });
    var Wd = md(41935);

    function Fd(dd) {
      return class extends dd {
        constructor() {
          super(...arguments);
          const dd = new.target;
          if (!dd[Symbol.metadata]) {
            const Od = Object.getPrototypeOf(dd)?.[Symbol.metadata];
            dd[Symbol.metadata] = Od ? Object.create(Od) : {}
          }
          const Od = (0, Wd.d)(dd[Symbol.metadata]);
          Od._imageProcessingConfiguration || (Od._imageProcessingConfiguration = {
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
          dd !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !dd && this.zV ? this._imageProcessingConfiguration = this.zV().imageProcessingConfiguration : dd && (this._imageProcessingConfiguration = dd), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
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
  42197: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      d: () => Fd
    });
    var Wd = md(42199);

    function Fd(dd) {
      return class extends dd {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class Rd extends Wd.b {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  42278: (dd, Od, md) => {
    md.d(Od, {
      c: () => td
    });
    var Wd = md(41922),
      Fd = md(42208),
      Rd = md(41931),
      Xd = md(42254),
      Kd = md(42199),
      hd = md(42283),
      vd = md(42242);
    class Qd extends Kd.b {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let td = (() => {
      var dd, Od, md, Kd;
      let td, od, Nd, qd, Hd, yd, bd = hd.e,
        Td = [],
        pd = [],
        Yd = [],
        gd = [],
        wd = [],
        Ed = [],
        Jd = [],
        Ud = [],
        xd = [],
        Bd = [],
        Sd = [],
        sd = [];
      return dd = class extends bd {
        get texture() {
          return (0, Wd.c)(this, Od, "f")
        }
        set texture(dd) {
          (0, Wd.e)(this, Od, dd, "f")
        }
        get normalBlendMethod() {
          return (0, Wd.c)(this, md, "f")
        }
        set normalBlendMethod(dd) {
          (0, Wd.e)(this, md, dd, "f")
        }
        get isEnabled() {
          return (0, Wd.c)(this, Kd, "f")
        }
        set isEnabled(dd) {
          (0, Wd.e)(this, Kd, dd, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(dd) {
          let Rd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(dd, "DetailMap", 140, new Qd, Rd), this._texture = null, Od.set(this, (0, Wd.k)(this, Td, void 0)), this.diffuseBlendLevel = ((0, Wd.k)(this, pd), (0, Wd.k)(this, Yd, 1)), this.roughnessBlendLevel = ((0, Wd.k)(this, gd), (0, Wd.k)(this, wd, 1)), this.bumpLevel = ((0, Wd.k)(this, Ed), (0, Wd.k)(this, Jd, 1)), this._normalBlendMethod = ((0, Wd.k)(this, Ud), Fd.b.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), md.set(this, (0, Wd.k)(this, xd, void 0)), this._isEnabled = ((0, Wd.k)(this, Bd), !1), Kd.set(this, (0, Wd.k)(this, Sd, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Wd.k)(this, sd), this._internalMarkAllSubMeshesAsTexturesDirty = dd._dirtyCallbacks[1]
        }
        isReadyForSubMesh(dd, Od, md) {
          return !this._isEnabled || !(dd._areTexturesDirty && Od.texturesEnabled && md.getCaps().standardDerivatives && this._texture && Xd.b.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(dd, Od) {
          if (this._isEnabled) {
            dd.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const md = Od.Iq();
            dd._areTexturesDirty && (md.getCaps().standardDerivatives && this._texture && Xd.b.DetailTextureEnabled && this._isEnabled ? ((0, vd.M)(this._texture, dd, "DETAIL"), dd.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : dd.DETAIL = !1)
          } else dd.DETAIL = !1
        }
        bindForSubMesh(dd, Od) {
          if (!this._isEnabled) return;
          const md = this._material.isFrozen;
          dd.useUbo && md && dd.isSync || this._texture && Xd.b.DetailTextureEnabled && (dd.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, vd.q)(this._texture, dd, "detail")), Od.texturesEnabled && this._texture && Xd.b.DetailTextureEnabled && dd.setTexture("detailSampler", this._texture)
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
      }, Od = new WeakMap, md = new WeakMap, Kd = new WeakMap, (() => {
        const Od = "function" === typeof Symbol && Symbol.metadata ? Object.create(bd[Symbol.metadata] ?? null) : void 0;
        td = [(0, Rd.x)("detailTexture"), (0, Rd.g)("_markAllSubMeshesAsTexturesDirty")], od = [(0, Rd.E)()], Nd = [(0, Rd.E)()], qd = [(0, Rd.E)()], Hd = [(0, Rd.E)(), (0, Rd.g)("_markAllSubMeshesAsTexturesDirty")], yd = [(0, Rd.E)(), (0, Rd.g)("_markAllSubMeshesAsTexturesDirty")], (0, Wd.h)(dd, null, td, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: dd => "texture" in dd,
            get: dd => dd.texture,
            set: (dd, Od) => {
              dd.texture = Od
            }
          },
          metadata: Od
        }, Td, pd), (0, Wd.h)(dd, null, Hd, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: dd => "normalBlendMethod" in dd,
            get: dd => dd.normalBlendMethod,
            set: (dd, Od) => {
              dd.normalBlendMethod = Od
            }
          },
          metadata: Od
        }, xd, Bd), (0, Wd.h)(dd, null, yd, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "isEnabled" in dd,
            get: dd => dd.isEnabled,
            set: (dd, Od) => {
              dd.isEnabled = Od
            }
          },
          metadata: Od
        }, Sd, sd), (0, Wd.h)(null, null, od, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: dd => "diffuseBlendLevel" in dd,
            get: dd => dd.diffuseBlendLevel,
            set: (dd, Od) => {
              dd.diffuseBlendLevel = Od
            }
          },
          metadata: Od
        }, Yd, gd), (0, Wd.h)(null, null, Nd, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: dd => "roughnessBlendLevel" in dd,
            get: dd => dd.roughnessBlendLevel,
            set: (dd, Od) => {
              dd.roughnessBlendLevel = Od
            }
          },
          metadata: Od
        }, wd, Ed), (0, Wd.h)(null, null, qd, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: dd => "bumpLevel" in dd,
            get: dd => dd.bumpLevel,
            set: (dd, Od) => {
              dd.bumpLevel = Od
            }
          },
          metadata: Od
        }, Jd, Ud), Od && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Od
        })
      })(), dd
    })()
  },
  42199: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    class Wd {
      constructor(dd) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = dd, dd)
          for (const Od in dd) Object.prototype.hasOwnProperty.call(dd, Od) && this._setDefaultValue(Od)
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
        for (let Od = 0; Od < this._keys.length; Od++) {
          const md = this._keys[Od];
          if (this[md] !== dd[md]) return !1
        }
        return !0
      }
      cloneTo(dd) {
        this._keys.length !== dd._keys.length && (dd._keys = this._keys.slice(0));
        for (let Od = 0; Od < this._keys.length; Od++) {
          const md = this._keys[Od];
          dd[md] = this[md]
        }
      }
      reset() {
        for (const dd of this._keys) this._setDefaultValue(dd)
      }
      _setDefaultValue(dd) {
        const Od = this._externalProperties?.[dd]?.type ?? typeof this[dd],
          md = this._externalProperties?.[dd]?.default;
        switch (Od) {
          case "number":
            this[dd] = md ?? 0;
            break;
          case "string":
            this[dd] = md ?? "";
            break;
          default:
            this[dd] = md ?? !1
        }
      }
      toString() {
        let dd = "";
        for (let Od = 0; Od < this._keys.length; Od++) {
          const md = this._keys[Od],
            Wd = this[md];
          switch (typeof Wd) {
            case "number":
            case "string":
              dd += "#define " + md + " " + Wd + "\n";
              break;
            default:
              Wd && (dd += "#define " + md + "\n")
          }
        }
        return dd
      }
    }
  },
  42298: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd,
      g: () => Xd,
      j: () => Rd
    });
    var Wd, Fd = md(38636);

    function Rd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const Wd = Od(dd);
      if (!Number.isInteger(Wd) || Wd < 0 || Wd > md) throw new Error(`Invalid geometry object ID ${Wd} for mesh "${dd.name}". Object IDs must be integers between 0 and 0x${md.toString(16).toUpperCase()}.`);
      return Wd
    }

    function Xd(dd, Od) {
      const md = Od(dd);
      if (!Number.isInteger(md) || md < 0 || md > 255 || 0 !== md && 0 === (63 & md)) throw new Error(`Invalid geometry mesh-blending tag ${md} for mesh "${dd.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return md
    }! function(dd) {
      dd[dd.Zero = 0] = "Zero", dd[dd.One = 1] = "One", dd[dd.MaxViewZ = 2] = "MaxViewZ", dd[dd.NoClear = 3] = "NoClear"
    }(Wd || (Wd = {}));
    class Kd {
      static CreateConfiguration(dd) {
        return Kd._Configurations[dd] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: Fd.d.Zero(),
          currentViewProjection: Fd.d.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, Kd._Configurations[dd]
      }
      static DeleteConfiguration(dd) {
        delete Kd._Configurations[dd]
      }
      static GetConfiguration(dd) {
        return Kd._Configurations[dd]
      }
      static _PrepareConfiguration(dd, Od, md) {
        const Wd = Kd._Configurations[dd];
        Wd._attachments = Od, Wd._colorAttachments = md, Wd._mrtCount = Od.length;
        let Fd = "#define PREPASS\n";
        for (const Rd of Kd.GeometryTextureDescriptions) {
          const dd = Wd.defines[Rd.defineIndex];
          void 0 !== dd && (Fd += `#define ${Rd.define}\n#define ${Rd.defineIndex} ${dd}\n`)
        }
        Wd.objectIdIsRedFormat && (Fd += "#define PREPASS_OBJECT_ID_R8\n"), Wd._defines = Fd + `#define SCENE_MRT_COUNT ${Od.length}\n`
      }
      static _PrepareStringDefines(dd, Od) {
        const md = Kd._Configurations[dd];
        return !!md?._defines && (Od.push(md._defines), !0)
      }
      static _BindAttachmentsForEffect(dd, Od) {
        const md = Kd._Configurations[dd.currentRenderPassId];
        return !md?._attachments || (dd.bindAttachments(Od._multiTarget ? md._attachments : md._colorAttachments), Od._multiTarget || void 0 !== md.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(dd) {
        const Od = Kd._Configurations[dd.currentRenderPassId];
        Od?._colorAttachments && dd.bindAttachments(Od._colorAttachments)
      }
      static _BindColorAttachments(dd) {
        const Od = Kd._Configurations[dd.currentRenderPassId];
        return !Od?._colorAttachments || (dd.bindAttachments(Od._colorAttachments), void 0 !== Od.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(dd) {
        const Od = Kd._Configurations[dd.currentRenderPassId];
        return !Od?._colorAttachments || void 0 !== Od.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(dd, Od) {
        const md = Kd._Configurations[dd.currentRenderPassId];
        if (!md) return;
        const Wd = dd.getAlphaMode(),
          Fd = void 0 === md.defines.PREPASS_COLOR_INDEX || 2 === Wd || 1 === Wd || 17 === Wd;
        Od.setFloat("geometryZeroAlphaDiscard", Fd ? 1 : 0)
      }
      static AddUniformsAndSamplers(dd, Od) {
        dd.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(dd, Od) {
        for (const md of Od)
          if (md.ZE)
            for (const Od of md.ZE) Od._removeDrawWrapper(dd)
      }
      static PrepareDefines(dd, Od, md) {
        if (!md._arePrePassDirty) return;
        const Wd = Kd._Configurations[dd];
        if (!Wd) return;
        md.PREPASS = !0;
        let Fd = 0;
        for (let Rd = 0; Rd < Kd.GeometryTextureDescriptions.length; Rd++) {
          const dd = Kd.GeometryTextureDescriptions[Rd],
            Od = dd.define,
            Xd = dd.defineIndex,
            hd = Wd.defines[Xd];
          void 0 !== hd ? (md[Od] = !0, md[Xd] = hd, Fd++) : (md[Od] = !1, delete md[Xd])
        }
        md.PREPASS_OBJECT_ID_R8 = Wd.objectIdIsRedFormat, md.SCENE_MRT_COUNT = Wd._mrtCount ?? Fd, md.BONES_VELOCITY_ENABLED = Od.useBones && Od.computeBonesUsingShaders && Od.skeleton && !Od.skeleton.isUsingTextureForMatrices && -1 === Wd.excludedSkinnedMesh.indexOf(Od)
      }
      static Bind(dd, Od, md, Wd, Fd) {
        const hd = Kd._Configurations[dd];
        if (!hd) return;
        const vd = md.zV(),
          Qd = vd.Iq();
        if (hd.reverseCulling && Qd.setStateCullFaceType(vd._mirroredCameraPosition ? Fd.cullBackFaces : !Fd.cullBackFaces), void 0 !== hd.defines.PREPASS_OBJECT_ID_INDEX) {
          const dd = hd.objectIdIsRedFormat ? 255 : 16777215;
          let Wd = md.uniqueId;
          if (hd.objectIdProvider) Wd = Rd(md, hd.objectIdProvider, dd);
          else if (Wd > dd) throw new Error(`Invalid geometry object ID ${Wd} for mesh "${md.name}". Object IDs must be integers between 0 and 0x${dd.toString(16).toUpperCase()}.`);
          Od.setFloat("objectId", Wd)
        }
        if (void 0 !== hd.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const dd = hd.meshBlendTagProvider ? Xd(md, hd.meshBlendTagProvider) : md.meshBlendingTag;
          Od.setInt("meshBlendTag", dd)
        }
        if (void 0 !== hd.defines.PREPASS_VELOCITY_INDEX || void 0 !== hd.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const dd = hd._currentWorldMatrices ?? (hd._currentWorldMatrices = {}),
            Fd = hd._worldMatrixFrameIds ?? (hd._worldMatrixFrameIds = {});
          if (dd[md.uniqueId] || (dd[md.uniqueId] = Wd.clone(), hd.previousWorldMatrices[md.uniqueId] = Wd.clone()), Fd[md.uniqueId] !== Qd.frameId && (hd.previousWorldMatrices[md.uniqueId].Bx(dd[md.uniqueId]), Fd[md.uniqueId] = Qd.frameId), dd[md.uniqueId].Bx(Wd), -1 === hd.lastUpdateFrameId ? (hd.lastUpdateFrameId = Qd.frameId, hd.previousViewProjection.Bx(vd.getTransformMatrix()), hd.currentViewProjection.Bx(vd.getTransformMatrix())) : hd.currentViewProjection.updateFlag !== vd.getTransformMatrix().updateFlag ? (hd.lastUpdateFrameId = Qd.frameId, hd.previousViewProjection.Bx(hd.currentViewProjection), hd.currentViewProjection.Bx(vd.getTransformMatrix())) : hd.lastUpdateFrameId !== Qd.frameId && (hd.lastUpdateFrameId = Qd.frameId, hd.previousViewProjection.Bx(hd.currentViewProjection)), Od.setMatrix("previousWorld", hd.previousWorldMatrices[md.uniqueId]), Od.setMatrix("previousViewProjection", hd.previousViewProjection), md.useBones && md.computeBonesUsingShaders && md.skeleton) {
            const dd = md.skeleton;
            if (!dd.isUsingTextureForMatrices || -1 === Od.getUniformIndex("boneTextureInfo")) {
              const Wd = dd.getTransformMatrices(md);
              Wd && (hd.previousBones[md.uniqueId] || (hd.previousBones[md.uniqueId] = Wd.slice()), Od.setMatrices("mPreviousBones", hd.previousBones[md.uniqueId]), hd.previousBones[md.uniqueId].set(Wd))
            }
          }
        }
      }
    }
    Kd.GeometryTextureDescriptions = [{
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
    }], Kd._Configurations = {}
  },
  42283: (dd, Od, md) => {
    md.d(Od, {
      e: () => od,
      g: () => qd
    });
    var Wd = md(41922),
      Fd = md(41931),
      Rd = md(41822),
      Xd = md(41785);
    const Kd = new RegExp("^([gimus]+)!");
    class hd {
      constructor(dd) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = dd, this._scene = dd.zV(), this._engine = this._scene.Iq()
      }
      _addPlugin(dd) {
        for (let Wd = 0; Wd < this._plugins.length; ++Wd)
          if (this._plugins[Wd].name === dd.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !dd.isCompatible(this._material.shaderLanguage)) throw `The plugin "${dd.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const Od = dd.getClassName();
        hd._MaterialPluginClassToMainDefine[Od] || (hd._MaterialPluginClassToMainDefine[Od] = "MATERIALPLUGIN_" + ++hd._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (dd, Od) => this._handlePluginEvent(dd, Od), this._plugins.push(dd), this._plugins.sort(((dd, Od) => dd.priority - Od.priority)), this._codeInjectionPoints = {};
        const md = {};
        md[hd._MaterialPluginClassToMainDefine[Od]] = {
          type: "boolean",
          default: !0
        };
        for (const Wd of this._plugins) Wd.collectDefines(md), this._collectPointNames("vertex", Wd.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Wd.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = md, !0
      }
      _activatePlugin(dd) {
        -1 === this._activePlugins.indexOf(dd) && (this._activePlugins.push(dd), this._activePlugins.sort(((dd, Od) => dd.priority - Od.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), dd.registerForExtraEvents && (this._activePluginsForExtraEvents.push(dd), this._activePluginsForExtraEvents.sort(((dd, Od) => dd.priority - Od.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(dd) {
        for (let Od = 0; Od < this._plugins.length; ++Od)
          if (this._plugins[Od].name === dd) return this._plugins[Od];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(dd) {
        let Od = !0;
        for (const md of this._activePlugins) Od = Od && md.isReadyForSubMesh(dd.defines, this._scene, this._engine, dd.subMesh);
        dd.isReadyForSubMesh = Od
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(dd) {
        for (const Od of this._activePlugins) Od.prepareDefinesBeforeAttributes(dd.defines, this._scene, dd.mesh)
      }
      _handlePluginEventPrepareDefines(dd) {
        for (const Od of this._activePlugins) Od.prepareDefines(dd.defines, this._scene, dd.mesh)
      }
      _handlePluginEventHardBindForSubMesh(dd) {
        for (const Od of this._activePluginsForExtraEvents) Od.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, dd.subMesh)
      }
      _handlePluginEventBindForSubMesh(dd) {
        for (const Od of this._activePlugins) Od.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, dd.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(dd) {
        let Od = !1;
        for (const md of this._activePluginsForExtraEvents)
          if (Od = md.hasRenderTargetTextures(), Od) break;
        dd.hasRenderTargetTextures = Od
      }
      _handlePluginEventFillRenderTargetTextures(dd) {
        for (const Od of this._activePluginsForExtraEvents) Od.fillRenderTargetTextures(dd.renderTargets)
      }
      _handlePluginEvent(dd, Od) {
        switch (dd) {
          case 512: {
            const dd = Od;
            for (const Od of this._activePlugins) Od.getActiveTextures(dd.activeTextures);
            break
          }
          case 256: {
            const dd = Od;
            for (const Od of this._activePlugins) Od.getAnimatables(dd.animatables);
            break
          }
          case 1024: {
            const dd = Od;
            let md = !1;
            for (const Od of this._activePlugins)
              if (md = Od.hasTexture(dd.texture), md) break;
            dd.hasTexture = md;
            break
          }
          case 2: {
            const dd = Od;
            for (const Od of this._plugins) Od.dispose(dd.forceDisposeTextures);
            break
          }
          case 4:
            Od.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const dd = Od;
            for (const Od of this._activePlugins) dd.fallbackRank = Od.addFallbacks(dd.defines, dd.fallbacks, dd.fallbackRank), Od.getAttributes(dd.attributes, this._scene, dd.mesh);
            this._uniformList.length > 0 && dd.uniforms.push(...this._uniformList), this._samplerList.length > 0 && dd.samplers.push(...this._samplerList), this._uboList.length > 0 && dd.uniformBuffersNames.push(...this._uboList), dd.customCode = this._injectCustomCode(dd, dd.customCode);
            break
          }
          case 8: {
            const dd = Od;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const md = 1 === this._material.shaderLanguage;
            for (const Od of this._plugins) {
              const Wd = Od.getUniforms(this._material.shaderLanguage);
              if (Wd) {
                if (Wd.ubo)
                  for (const Od of Wd.ubo) {
                    if (Od.size && Od.type) {
                      const Wd = Od.arraySize ?? 0;
                      if (dd.ubo.addUniform(Od.name, Od.size, Wd), md) {
                        let dd;
                        switch (Od.type) {
                          case "mat4":
                            dd = "mat4x4f";
                            break;
                          case "float":
                            dd = "f32";
                            break;
                          default:
                            dd = `${Od.type}f`
                        }
                        this._uboDeclaration += Wd > 0 ? `uniform ${Od.name}: array<${dd}, ${Wd}>;\n` : `uniform ${Od.name}: ${dd};\n`
                      } else this._uboDeclaration += `${Od.type} ${Od.name}${Wd>0?`[${Wd}]`:""};\n`
                    }
                    this._uniformList.push(Od.name)
                  }
                Wd.vertex && (this._vertexDeclaration += Wd.vertex + "\n"), Wd.fragment && (this._fragmentDeclaration += Wd.fragment + "\n"), Wd.externalUniforms && this._uniformList.push(...Wd.externalUniforms)
              }
              Od.getSamplers(this._samplerList), Od.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(dd, Od) {
        if (Od)
          for (const md in Od) this._codeInjectionPoints[dd] || (this._codeInjectionPoints[dd] = {}), this._codeInjectionPoints[dd][md] = !0
      }
      _injectCustomCode(dd, Od) {
        return (md, Wd) => {
          Od && (Wd = Od(md, Wd)), this._uboDeclaration && (Wd = Wd.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Wd = Wd.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (Wd = Wd.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const Fd = this._codeInjectionPoints?.[md];
          if (!Fd) return Wd;
          let hd = null;
          for (let Od in Fd) {
            let Fd = "";
            for (const Wd of this._activePlugins) {
              const Kd = this._material.shaderLanguage;
              let vd = Wd.getCustomCode(md, Kd)?.[Od];
              vd && (Wd.resolveIncludes && (null === hd && (hd = {
                defines: [],
                indexParameters: dd.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: Xd.e.GetShadersRepository(Kd),
                includesShadersStore: Xd.e.GetIncludesShadersStore(Kd),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                JFd: this._engine.JFd,
                processCodeAfterIncludes: void 0
              }), hd.isFragment = "fragment" === md, (0, Rd.l)(vd, hd, (dd => vd = dd))), Fd += vd + "\n")
            }
            if (Fd.length > 0)
              if ("!" === Od.charAt(0)) {
                Od = Od.substring(1);
                let dd = "g";
                if ("!" === Od.charAt(0)) dd = "", Od = Od.substring(1);
                else {
                  const md = Kd.exec(Od);
                  md && md.length >= 2 && (dd = md[1], Od = Od.substring(dd.length + 1))
                }
                dd.indexOf("g") < 0 && (dd += "g");
                const md = new RegExp(Od, dd);
                let Rd = md.exec(Wd);
                for (; null !== Rd;) {
                  const {
                    index: dd
                  } = Rd, Od = vd(Fd, Rd);
                  Wd = Wd.substring(0, dd) + Od + Wd.substring(dd + Rd[0].length), md.lastIndex = dd + Od.length, Rd = md.exec(Wd)
                }
              } else {
                const dd = "#define " + Od;
                Wd = Wd.replace(dd, "\n" + Fd + "\n" + dd)
              }
          }
          return Wd
        }
      }
    }
    hd._MaterialPluginClassToMainDefine = {}, hd._MaterialPluginCounter = 0;

    function vd(dd, Od) {
      return dd.replace(/\$(\d+)/g, ((dd, md) => {
        const Wd = Number(md);
        return Wd < Od.length ? Od[Wd] : ""
      }))
    }
    var Qd = md(41948),
      td = md(38669);
    let od = (() => {
        var dd;
        let Od, md, Rd, Xd, Kd = [],
          vd = [],
          td = [],
          od = [],
          Nd = [],
          qd = [],
          Hd = [],
          yd = [];
        return dd = class {
          isCompatible(dd) {
            return 0 === dd
          }
          _enable(dd) {
            dd && this._pluginManager._activatePlugin(this)
          }
          constructor(dd, Od, md, Fd) {
            let Rd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              Xd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              Qd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, Wd.k)(this, Kd, void 0), this.priority = ((0, Wd.k)(this, vd), (0, Wd.k)(this, td, 500)), this.resolveIncludes = ((0, Wd.k)(this, od), (0, Wd.k)(this, Nd, !1)), this.registerForExtraEvents = ((0, Wd.k)(this, qd), (0, Wd.k)(this, Hd, !1)), this.doNotSerialize = ((0, Wd.k)(this, yd), !1), this._material = dd, this.name = Od, this.priority = md, this.resolveIncludes = Qd, dd.pluginManager || (dd.pluginManager = new hd(dd), dd.cV.add((() => {
              dd.pluginManager = void 0
            }))), this._pluginDefineNames = Fd, this._pluginManager = dd.pluginManager, Rd && this._pluginManager._addPlugin(this), Xd && this._enable(!0), this.markAllDefinesAsDirty = dd._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(dd, Od, md, Wd) {
            return !0
          }
          hardBindForSubMesh(dd, Od, md, Wd) {}
          bindForSubMesh(dd, Od, md, Wd) {}
          dispose(dd) {}
          getCustomCode(dd) {
            return null
          }
          collectDefines(dd) {
            if (this._pluginDefineNames)
              for (const Od of Object.keys(this._pluginDefineNames)) {
                if ("_" === Od[0]) continue;
                const md = typeof this._pluginDefineNames[Od];
                dd[Od] = {
                  type: "number" === md ? "number" : "string" === md ? "string" : "boolean" === md ? "boolean" : "object",
                  default: this._pluginDefineNames[Od]
                }
              }
          }
          prepareDefinesBeforeAttributes(dd, Od, md) {}
          prepareDefines(dd, Od, md) {}
          hasTexture(dd) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(dd) {}
          getActiveTextures(dd) {}
          getAnimatables(dd) {}
          addFallbacks(dd, Od, md) {
            return md
          }
          getSamplers(dd) {}
          getAttributes(dd, Od, md) {}
          getUniformBuffersNames(dd) {}
          getUniforms() {
            return {}
          }
          copyTo(dd) {
            Qd.b.Clone((() => dd), this)
          }
          serialize() {
            return Qd.b.Serialize(this)
          }
          parse(dd, Od, md) {
            Qd.b.Parse((() => this), dd, Od, md)
          }
        }, (() => {
          const hd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Od = [(0, Fd.E)()], md = [(0, Fd.E)()], Rd = [(0, Fd.E)()], Xd = [(0, Fd.E)()], (0, Wd.h)(null, null, Od, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: dd => "name" in dd,
              get: dd => dd.name,
              set: (dd, Od) => {
                dd.name = Od
              }
            },
            metadata: hd
          }, Kd, vd), (0, Wd.h)(null, null, md, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: dd => "priority" in dd,
              get: dd => dd.priority,
              set: (dd, Od) => {
                dd.priority = Od
              }
            },
            metadata: hd
          }, td, od), (0, Wd.h)(null, null, Rd, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: dd => "resolveIncludes" in dd,
              get: dd => dd.resolveIncludes,
              set: (dd, Od) => {
                dd.resolveIncludes = Od
              }
            },
            metadata: hd
          }, Nd, qd), (0, Wd.h)(null, null, Xd, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: dd => "registerForExtraEvents" in dd,
              get: dd => dd.registerForExtraEvents,
              set: (dd, Od) => {
                dd.registerForExtraEvents = Od
              }
            },
            metadata: hd
          }, Hd, yd), hd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: hd
          })
        })(), dd
      })(),
      Nd = !1;

    function qd() {
      Nd || (Nd = !0, (0, td.e)("BABYLON.MaterialPluginBase", od))
    }
  },
  42190: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd
    });
    class Wd {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(dd) {
        dd.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(dd) {}
      bindForSubMesh(dd, Od, md, Wd, Fd) {
        if (Od.prePassRenderer && Od.prePassRenderer.enabled && Od.prePassRenderer.currentRTisSceneRT && (-1 !== Od.prePassRenderer.getIndex(2) || -1 !== Od.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[md.uniqueId] || (this.previousWorldMatrices[md.uniqueId] = Wd.clone()), this.previousViewProjection || (this.previousViewProjection = Od.getTransformMatrix().clone(), this.currentViewProjection = Od.getTransformMatrix().clone());
          const Fd = Od.Iq();
          this.currentViewProjection.updateFlag !== Od.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = Fd.frameId, this.previousViewProjection.Bx(this.currentViewProjection), this.currentViewProjection.Bx(Od.getTransformMatrix())) : this._lastUpdateFrameId !== Fd.frameId && (this._lastUpdateFrameId = Fd.frameId, this.previousViewProjection.Bx(this.currentViewProjection)), dd.setMatrix("previousWorld", this.previousWorldMatrices[md.uniqueId]), dd.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[md.uniqueId] = Wd.clone()
        }
      }
    }
  },
  42308: (dd, Od, md) => {
    function Wd(dd) {
      return class extends dd {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    md.d(Od, {
      d: () => Wd
    })
  },
  42179: (dd, Od, md) => {
    md.d(Od, {
      StandardMaterial: () => Wd.i
    });
    var Wd = md(42186);
    (0, Wd.e)()
  },
  42186: (dd, Od, md) => {
    md.d(Od, {
      e: () => nd,
      i: () => rd
    });
    var Wd = md(41922),
      Fd = md(41931),
      Rd = md(42041),
      Xd = md(42020),
      Kd = md(38741),
      hd = md(42075),
      vd = md(42190),
      Qd = md(42197),
      td = md(42046),
      od = md(42208),
      Nd = md(42199),
      qd = md(42262),
      Hd = md(42254),
      yd = md(42271),
      bd = md(42278),
      Td = md(42248),
      pd = md(42285),
      Yd = md(42242),
      gd = md(41948),
      wd = md(42291),
      Ed = md(42298),
      Jd = md(42303),
      Ud = md(42308),
      xd = md(42314),
      Bd = md(38669),
      Sd = md(41817);
    const sd = {
      effect: null,
      subMesh: null
    };
    class ud extends((0, Ud.d)((0, Jd.d)(Nd.b))) {}
    class Vd extends((0, Qd.d)(ud)) {
      constructor(dd) {
        super(dd), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class Ad extends((0, xd.b)(qd.d)) {}
    let rd = (() => {
        var dd, Od, Qd, Nd, Jd, Ud, xd, Bd, Sd, ud, rd, Gd, nd, Ld, Pd, zd, cd, jd, Dd, ed, Id, ld, Cd, Zd, kd, fd, Md, dO, OO, mO, WO, FO, RO;
        let XO, KO, hO, vO, QO, tO, oO, NO, qO, HO, yO, bO, TO, pO, YO, gO, wO, aO, EO, JO, UO, xO, BO, SO, sO, uO, VO, iO, AO, rO, GO, nO, LO, PO, zO, cO, jO, DO, eO, IO, lO, CO, ZO, kO, fO, MO, dm, Om, mm, Wm, Fm, Rm, Xm, Km, hm, Qm, tm, om, Nm, qm, Hm, ym, bm, Tm, pm, Ym, gm, wm, am, Em, Jm, Um, xm, Bm = Ad,
          Sm = [],
          sm = [],
          um = [],
          Vm = [],
          im = [],
          Am = [],
          rm = [],
          Gm = [],
          nm = [],
          Lm = [],
          Pm = [],
          zm = [],
          cm = [],
          jm = [],
          Dm = [],
          em = [],
          Im = [],
          lm = [],
          Cm = [],
          Zm = [],
          km = [],
          fm = [],
          Mm = [],
          dW = [],
          OW = [],
          mW = [],
          WW = [],
          FW = [],
          RW = [],
          XW = [],
          KW = [],
          hW = [],
          vW = [],
          QW = [],
          tW = [],
          oW = [],
          NW = [],
          qW = [],
          HW = [],
          yW = [],
          bW = [],
          TW = [],
          pW = [],
          YW = [],
          gW = [],
          wW = [],
          aW = [],
          EW = [],
          JW = [],
          UW = [],
          xW = [],
          BW = [],
          SW = [],
          sW = [],
          uW = [],
          VW = [],
          iW = [],
          AW = [],
          rW = [],
          GW = [],
          nW = [],
          LW = [],
          PW = [],
          zW = [],
          cW = [],
          jW = [],
          DW = [],
          eW = [],
          IW = [],
          lW = [],
          CW = [],
          ZW = [],
          kW = [],
          fW = [],
          MW = [],
          dF = [],
          OF = [],
          mF = [],
          WF = [],
          FF = [],
          RF = [],
          XF = [],
          KF = [],
          hF = [],
          vF = [],
          QF = [],
          tF = [],
          oF = [],
          NF = [],
          qF = [],
          HF = [],
          yF = [],
          bF = [],
          TF = [],
          pF = [],
          YF = [],
          gF = [],
          wF = [],
          aF = [],
          EF = [],
          JF = [],
          UF = [],
          xF = [],
          BF = [],
          SF = [],
          sF = [],
          uF = [],
          VF = [],
          iF = [],
          AF = [],
          rF = [],
          GF = [],
          nF = [],
          LF = [],
          PF = [],
          zF = [],
          cF = [],
          jF = [],
          DF = [],
          eF = [],
          IF = [],
          lF = [],
          CF = [],
          ZF = [],
          kF = [],
          fF = [],
          MF = [],
          dR = [],
          OR = [],
          mR = [],
          WR = [],
          FR = [],
          RR = [],
          XR = [],
          KR = [],
          hR = [],
          vR = [],
          QR = [],
          tR = [],
          oR = [],
          NR = [],
          qR = [],
          HR = [],
          yR = [],
          bR = [],
          TR = [];
        return dd = class extends Bm {
          get diffuseTexture() {
            return (0, Wd.c)(this, Od, "f")
          }
          set diffuseTexture(dd) {
            (0, Wd.e)(this, Od, dd, "f")
          }
          get ambientTexture() {
            return (0, Wd.c)(this, Qd, "f")
          }
          set ambientTexture(dd) {
            (0, Wd.e)(this, Qd, dd, "f")
          }
          get opacityTexture() {
            return (0, Wd.c)(this, Nd, "f")
          }
          set opacityTexture(dd) {
            (0, Wd.e)(this, Nd, dd, "f")
          }
          get reflectionTexture() {
            return (0, Wd.c)(this, Jd, "f")
          }
          set reflectionTexture(dd) {
            (0, Wd.e)(this, Jd, dd, "f")
          }
          get emissiveTexture() {
            return (0, Wd.c)(this, Ud, "f")
          }
          set emissiveTexture(dd) {
            (0, Wd.e)(this, Ud, dd, "f")
          }
          get specularTexture() {
            return (0, Wd.c)(this, xd, "f")
          }
          set specularTexture(dd) {
            (0, Wd.e)(this, xd, dd, "f")
          }
          get bumpTexture() {
            return (0, Wd.c)(this, Bd, "f")
          }
          set bumpTexture(dd) {
            (0, Wd.e)(this, Bd, dd, "f")
          }
          get lightmapTexture() {
            return (0, Wd.c)(this, Sd, "f")
          }
          set lightmapTexture(dd) {
            (0, Wd.e)(this, Sd, dd, "f")
          }
          get refractionTexture() {
            return (0, Wd.c)(this, ud, "f")
          }
          set refractionTexture(dd) {
            (0, Wd.e)(this, ud, dd, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, Wd.c)(this, rd, "f")
          }
          set useAlphaFromDiffuseTexture(dd) {
            (0, Wd.e)(this, rd, dd, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, Wd.c)(this, Gd, "f")
          }
          set useEmissiveAsIllumination(dd) {
            (0, Wd.e)(this, Gd, dd, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, Wd.c)(this, nd, "f")
          }
          set linkEmissiveWithDiffuse(dd) {
            (0, Wd.e)(this, nd, dd, "f")
          }
          get useSpecularOverAlpha() {
            return (0, Wd.c)(this, Ld, "f")
          }
          set useSpecularOverAlpha(dd) {
            (0, Wd.e)(this, Ld, dd, "f")
          }
          get useReflectionOverAlpha() {
            return (0, Wd.c)(this, Pd, "f")
          }
          set useReflectionOverAlpha(dd) {
            (0, Wd.e)(this, Pd, dd, "f")
          }
          get disableLighting() {
            return (0, Wd.c)(this, zd, "f")
          }
          set disableLighting(dd) {
            (0, Wd.e)(this, zd, dd, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, Wd.c)(this, cd, "f")
          }
          set useObjectSpaceNormalMap(dd) {
            (0, Wd.e)(this, cd, dd, "f")
          }
          get useParallax() {
            return (0, Wd.c)(this, jd, "f")
          }
          set useParallax(dd) {
            (0, Wd.e)(this, jd, dd, "f")
          }
          get useParallaxOcclusion() {
            return (0, Wd.c)(this, Dd, "f")
          }
          set useParallaxOcclusion(dd) {
            (0, Wd.e)(this, Dd, dd, "f")
          }
          get roughness() {
            return (0, Wd.c)(this, ed, "f")
          }
          set roughness(dd) {
            (0, Wd.e)(this, ed, dd, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, Wd.c)(this, Id, "f")
          }
          set useLightmapAsShadowmap(dd) {
            (0, Wd.e)(this, Id, dd, "f")
          }
          get diffuseFresnelParameters() {
            return (0, Wd.c)(this, ld, "f")
          }
          set diffuseFresnelParameters(dd) {
            (0, Wd.e)(this, ld, dd, "f")
          }
          get opacityFresnelParameters() {
            return (0, Wd.c)(this, Cd, "f")
          }
          set opacityFresnelParameters(dd) {
            (0, Wd.e)(this, Cd, dd, "f")
          }
          get reflectionFresnelParameters() {
            return (0, Wd.c)(this, Zd, "f")
          }
          set reflectionFresnelParameters(dd) {
            (0, Wd.e)(this, Zd, dd, "f")
          }
          get refractionFresnelParameters() {
            return (0, Wd.c)(this, kd, "f")
          }
          set refractionFresnelParameters(dd) {
            (0, Wd.e)(this, kd, dd, "f")
          }
          get emissiveFresnelParameters() {
            return (0, Wd.c)(this, fd, "f")
          }
          set emissiveFresnelParameters(dd) {
            (0, Wd.e)(this, fd, dd, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, Wd.c)(this, Md, "f")
          }
          set useReflectionFresnelFromSpecular(dd) {
            (0, Wd.e)(this, Md, dd, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, Wd.c)(this, dO, "f")
          }
          set useGlossinessFromSpecularMapAlpha(dd) {
            (0, Wd.e)(this, dO, dd, "f")
          }
          get maxSimultaneousLights() {
            return (0, Wd.c)(this, OO, "f")
          }
          set maxSimultaneousLights(dd) {
            (0, Wd.e)(this, OO, dd, "f")
          }
          get invertNormalMapX() {
            return (0, Wd.c)(this, mO, "f")
          }
          set invertNormalMapX(dd) {
            (0, Wd.e)(this, mO, dd, "f")
          }
          get invertNormalMapY() {
            return (0, Wd.c)(this, WO, "f")
          }
          set invertNormalMapY(dd) {
            (0, Wd.e)(this, WO, dd, "f")
          }
          get twoSidedLighting() {
            return (0, Wd.c)(this, FO, "f")
          }
          set twoSidedLighting(dd) {
            (0, Wd.e)(this, FO, dd, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Wd.c)(this, RO, "f")
          }
          set applyDecalMapAfterDetailMap(dd) {
            (0, Wd.e)(this, RO, dd, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(md, Fd) {
            super(md, Fd, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || dd.ForceGLSL), this._diffuseTexture = (0, Wd.k)(this, Sm, null), Od.set(this, ((0, Wd.k)(this, sm), (0, Wd.k)(this, um, void 0))), this._ambientTexture = ((0, Wd.k)(this, Vm), (0, Wd.k)(this, im, null)), Qd.set(this, ((0, Wd.k)(this, Am), (0, Wd.k)(this, rm, void 0))), this._opacityTexture = ((0, Wd.k)(this, Gm), (0, Wd.k)(this, nm, null)), Nd.set(this, ((0, Wd.k)(this, Lm), (0, Wd.k)(this, Pm, void 0))), this._reflectionTexture = ((0, Wd.k)(this, zm), (0, Wd.k)(this, cm, null)), Jd.set(this, ((0, Wd.k)(this, jm), (0, Wd.k)(this, Dm, void 0))), this._emissiveTexture = ((0, Wd.k)(this, em), (0, Wd.k)(this, Im, null)), Ud.set(this, ((0, Wd.k)(this, lm), (0, Wd.k)(this, Cm, void 0))), this._specularTexture = ((0, Wd.k)(this, Zm), (0, Wd.k)(this, km, null)), xd.set(this, ((0, Wd.k)(this, fm), (0, Wd.k)(this, Mm, void 0))), this._bumpTexture = ((0, Wd.k)(this, dW), (0, Wd.k)(this, OW, null)), Bd.set(this, ((0, Wd.k)(this, mW), (0, Wd.k)(this, WW, void 0))), this._lightmapTexture = ((0, Wd.k)(this, FW), (0, Wd.k)(this, RW, null)), Sd.set(this, ((0, Wd.k)(this, XW), (0, Wd.k)(this, KW, void 0))), this._refractionTexture = ((0, Wd.k)(this, hW), (0, Wd.k)(this, vW, null)), ud.set(this, ((0, Wd.k)(this, QW), (0, Wd.k)(this, tW, void 0))), this.ambientColor = ((0, Wd.k)(this, oW), (0, Wd.k)(this, NW, new Kd.d(0, 0, 0))), this.diffuseColor = ((0, Wd.k)(this, qW), (0, Wd.k)(this, HW, new Kd.d(1, 1, 1))), this.specularColor = ((0, Wd.k)(this, yW), (0, Wd.k)(this, bW, new Kd.d(1, 1, 1))), this.emissiveColor = ((0, Wd.k)(this, TW), (0, Wd.k)(this, pW, new Kd.d(0, 0, 0))), this.specularPower = ((0, Wd.k)(this, YW), (0, Wd.k)(this, gW, 64)), this._useAlphaFromDiffuseTexture = ((0, Wd.k)(this, wW), (0, Wd.k)(this, aW, !1)), rd.set(this, ((0, Wd.k)(this, EW), (0, Wd.k)(this, JW, void 0))), this._useEmissiveAsIllumination = ((0, Wd.k)(this, UW), (0, Wd.k)(this, xW, !1)), Gd.set(this, ((0, Wd.k)(this, BW), (0, Wd.k)(this, SW, void 0))), this._linkEmissiveWithDiffuse = ((0, Wd.k)(this, sW), (0, Wd.k)(this, uW, !1)), nd.set(this, ((0, Wd.k)(this, VW), (0, Wd.k)(this, iW, void 0))), this._useSpecularOverAlpha = ((0, Wd.k)(this, AW), (0, Wd.k)(this, rW, !1)), Ld.set(this, ((0, Wd.k)(this, GW), (0, Wd.k)(this, nW, void 0))), this._useReflectionOverAlpha = ((0, Wd.k)(this, LW), (0, Wd.k)(this, PW, !1)), Pd.set(this, ((0, Wd.k)(this, zW), (0, Wd.k)(this, cW, void 0))), this._disableLighting = ((0, Wd.k)(this, jW), (0, Wd.k)(this, DW, !1)), zd.set(this, ((0, Wd.k)(this, eW), (0, Wd.k)(this, IW, void 0))), this._useObjectSpaceNormalMap = ((0, Wd.k)(this, lW), (0, Wd.k)(this, CW, !1)), cd.set(this, ((0, Wd.k)(this, ZW), (0, Wd.k)(this, kW, void 0))), this._useParallax = ((0, Wd.k)(this, fW), (0, Wd.k)(this, MW, !1)), jd.set(this, ((0, Wd.k)(this, dF), (0, Wd.k)(this, OF, void 0))), this._useParallaxOcclusion = ((0, Wd.k)(this, mF), (0, Wd.k)(this, WF, !1)), Dd.set(this, ((0, Wd.k)(this, FF), (0, Wd.k)(this, RF, void 0))), this.parallaxScaleBias = ((0, Wd.k)(this, XF), (0, Wd.k)(this, KF, .05)), this._roughness = ((0, Wd.k)(this, hF), (0, Wd.k)(this, vF, 0)), ed.set(this, ((0, Wd.k)(this, QF), (0, Wd.k)(this, tF, void 0))), this.indexOfRefraction = ((0, Wd.k)(this, oF), (0, Wd.k)(this, NF, .98)), this.invertRefractionY = ((0, Wd.k)(this, qF), (0, Wd.k)(this, HF, !0)), this.alphaCutOff = ((0, Wd.k)(this, yF), (0, Wd.k)(this, bF, .4)), this._useLightmapAsShadowmap = ((0, Wd.k)(this, TF), (0, Wd.k)(this, pF, !1)), Id.set(this, ((0, Wd.k)(this, YF), (0, Wd.k)(this, gF, void 0))), this._diffuseFresnelParameters = ((0, Wd.k)(this, wF), (0, Wd.k)(this, aF, void 0)), ld.set(this, ((0, Wd.k)(this, EF), (0, Wd.k)(this, JF, void 0))), this._opacityFresnelParameters = ((0, Wd.k)(this, UF), (0, Wd.k)(this, xF, void 0)), Cd.set(this, ((0, Wd.k)(this, BF), (0, Wd.k)(this, SF, void 0))), this._reflectionFresnelParameters = ((0, Wd.k)(this, sF), (0, Wd.k)(this, uF, void 0)), Zd.set(this, ((0, Wd.k)(this, VF), (0, Wd.k)(this, iF, void 0))), this._refractionFresnelParameters = ((0, Wd.k)(this, AF), (0, Wd.k)(this, rF, void 0)), kd.set(this, ((0, Wd.k)(this, GF), (0, Wd.k)(this, nF, void 0))), this._emissiveFresnelParameters = ((0, Wd.k)(this, LF), (0, Wd.k)(this, PF, void 0)), fd.set(this, ((0, Wd.k)(this, zF), (0, Wd.k)(this, cF, void 0))), this._useReflectionFresnelFromSpecular = ((0, Wd.k)(this, jF), (0, Wd.k)(this, DF, !1)), Md.set(this, ((0, Wd.k)(this, eF), (0, Wd.k)(this, IF, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, Wd.k)(this, lF), (0, Wd.k)(this, CF, !1)), dO.set(this, ((0, Wd.k)(this, ZF), (0, Wd.k)(this, kF, void 0))), this._maxSimultaneousLights = ((0, Wd.k)(this, fF), (0, Wd.k)(this, MF, 4)), OO.set(this, ((0, Wd.k)(this, dR), (0, Wd.k)(this, OR, void 0))), this._invertNormalMapX = ((0, Wd.k)(this, mR), (0, Wd.k)(this, WR, !1)), mO.set(this, ((0, Wd.k)(this, FR), (0, Wd.k)(this, RR, void 0))), this._invertNormalMapY = ((0, Wd.k)(this, XR), (0, Wd.k)(this, KR, !1)), WO.set(this, ((0, Wd.k)(this, hR), (0, Wd.k)(this, vR, void 0))), this._twoSidedLighting = ((0, Wd.k)(this, QR), (0, Wd.k)(this, tR, !1)), FO.set(this, ((0, Wd.k)(this, oR), (0, Wd.k)(this, NR, void 0))), this._applyDecalMapAfterDetailMap = ((0, Wd.k)(this, qR), (0, Wd.k)(this, HR, !1)), RO.set(this, ((0, Wd.k)(this, yR), (0, Wd.k)(this, bR, void 0))), this._vertexPullingMetadata = ((0, Wd.k)(this, TR), null), this._renderTargets = new Rd.e(16), this._globalAmbientColor = new Kd.d(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new bd.c(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new vd.c, this.getRenderTargetTextures = () => (this._renderTargets.reset(), dd.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), dd.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
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
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === od.b.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== od.b.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(Od, md) {
            let Wd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Fd = md._drawWrapper;
            if (Fd.effect && this.isFrozen && Fd._wasPreviouslyReady && Fd._wasPreviouslyUsingInstances === Wd) return !0;
            md.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), md.materialDefines = new Vd(this._eventInfo.defineNames));
            const Rd = this.zV(),
              Xd = md.materialDefines;
            if (this._isReadyForSubMesh(md)) return !0;
            const Kd = Rd.Iq();
            if (Xd._needNormals = (0, Yd.L)(Rd, Od, Xd, !0, this._maxSimultaneousLights, this._disableLighting), !(0, Yd.b)(Rd, Od, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, Yd.R)(Rd, Xd);
            const Qd = this.needAlphaBlendingForMesh(Od) && this.zV().useOrderIndependentTransparency;
            if ((0, Yd.U)(Rd, Xd, this.canRenderToMRT && !Qd), (0, Yd.T)(Rd, Xd, Qd), Ed.c.PrepareDefines(Kd.currentRenderPassId, Od, Xd), Xd._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Xd._needUVs = !1;
              for (let dd = 1; dd <= 6; ++dd) Xd["MAINUV" + dd] = !1;
              if (Rd.texturesEnabled) {
                if (Xd.DIFFUSEDIRECTUV = 0, Xd.BUMPDIRECTUV = 0, Xd.AMBIENTDIRECTUV = 0, Xd.OPACITYDIRECTUV = 0, Xd.EMISSIVEDIRECTUV = 0, Xd.SPECULARDIRECTUV = 0, Xd.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && dd.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, Yd.M)(this._diffuseTexture, Xd, "DIFFUSE")
                } else Xd.DIFFUSE = !1;
                if (this._ambientTexture && dd.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, Yd.M)(this._ambientTexture, Xd, "AMBIENT")
                } else Xd.AMBIENT = !1;
                if (this._opacityTexture && dd.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, Yd.M)(this._opacityTexture, Xd, "OPACITY"), Xd.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else Xd.OPACITY = !1;
                if (this._reflectionTexture && dd.ReflectionTextureEnabled ? (Xd.ROUGHNESS = this._roughness > 0, Xd.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (Xd.ROUGHNESS = !1, Xd.REFLECTIONOVERALPHA = !1), !(0, Yd.H)(Rd, this._reflectionTexture, Xd)) return !1;
                if (this._emissiveTexture && dd.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, Yd.M)(this._emissiveTexture, Xd, "EMISSIVE")
                } else Xd.EMISSIVE = !1;
                if (this._lightmapTexture && dd.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, Yd.M)(this._lightmapTexture, Xd, "LIGHTMAP"), Xd.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Xd.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else Xd.LIGHTMAP = !1;
                if (this._specularTexture && dd.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, Yd.M)(this._specularTexture, Xd, "SPECULAR"), Xd.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else Xd.SPECULAR = !1;
                if (Rd.Iq().getCaps().standardDerivatives && this._bumpTexture && dd.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, Yd.M)(this._bumpTexture, Xd, "BUMP"), Xd.PARALLAX = this._useParallax, Xd.PARALLAX_RHS = Rd.useRightHandedSystem, Xd.PARALLAXOCCLUSION = this._useParallaxOcclusion, Xd.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else Xd.BUMP = !1, Xd.PARALLAX = !1, Xd.PARALLAX_RHS = !1, Xd.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && dd.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  Xd._needUVs = !0, Xd.REFRACTION = !0, Xd.REFRACTIONMAP_3D = this._refractionTexture.isCube, Xd.RGBDREFRACTION = this._refractionTexture.isRGBD, Xd.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else Xd.REFRACTION = !1;
                Xd.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else Xd.DIFFUSE = !1, Xd.AMBIENT = !1, Xd.OPACITY = !1, Xd.REFLECTION = !1, Xd.EMISSIVE = !1, Xd.LIGHTMAP = !1, Xd.BUMP = !1, Xd.REFRACTION = !1;
              Xd.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), Xd.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, Xd.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, Xd.SPECULAROVERALPHA = this._useSpecularOverAlpha, Xd.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Xd.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, Xd.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(Od), Xd.TEXTURE_REPETITION_MODE = Kd.version > 1 || Kd.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Xd, this._eventInfo.subMesh = md, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Xd._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(Xd), Xd.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, Xd.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (Xd._areFresnelDirty && (dd.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (Xd.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, Xd.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, Xd.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, Xd.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, Xd.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, Xd.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, Xd._needNormals = !0, Xd.FRESNEL = !0) : Xd.FRESNEL = !1), Xd.AREALIGHTUSED || Xd.CLUSTLIGHT_BATCH)
              for (let dd = 0; dd < Od.lightSources.length; dd++)
                if (!Od.lightSources[dd]._isReady()) return !1;
            (0, Yd.N)(Od, Rd, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Od), Xd, this._applyDecalMapAfterDetailMap, this._useVertexPulling, md.getRenderingMesh(), this._isVertexOutputInvariant), (0, Yd.F)(Rd, Kd, this, Xd, Wd, null, md.getRenderingMesh().hasThinInstances), this._eventInfo.defines = Xd, this._eventInfo.mesh = Od, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Yd.E)(Od, Xd, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let od = !1;
            if (Xd.isDirty) {
              const Wd = Xd._areLightsDisposed;
              Xd.markAsProcessed();
              const Fd = new yd.e;
              Xd.REFLECTION && Fd.addFallback(0, "REFLECTION"), Xd.SPECULAR && Fd.addFallback(0, "SPECULAR"), Xd.BUMP && Fd.addFallback(0, "BUMP"), Xd.PARALLAX && Fd.addFallback(1, "PARALLAX"), Xd.PARALLAX_RHS && Fd.addFallback(1, "PARALLAX_RHS"), Xd.PARALLAXOCCLUSION && Fd.addFallback(0, "PARALLAXOCCLUSION"), Xd.SPECULAROVERALPHA && Fd.addFallback(0, "SPECULAROVERALPHA"), Xd.FOG && Fd.addFallback(1, "FOG"), Xd.POINTSIZE && Fd.addFallback(0, "POINTSIZE"), Xd.LOGARITHMICDEPTH && Fd.addFallback(0, "LOGARITHMICDEPTH"), (0, Yd.s)(Xd, Fd, this._maxSimultaneousLights), Xd.SPECULARTERM && Fd.addFallback(0, "SPECULARTERM"), Xd.DIFFUSEFRESNEL && Fd.addFallback(1, "DIFFUSEFRESNEL"), Xd.OPACITYFRESNEL && Fd.addFallback(2, "OPACITYFRESNEL"), Xd.REFLECTIONFRESNEL && Fd.addFallback(3, "REFLECTIONFRESNEL"), Xd.EMISSIVEFRESNEL && Fd.addFallback(4, "EMISSIVEFRESNEL"), Xd.FRESNEL && Fd.addFallback(4, "FRESNEL"), Xd.MULTIVIEW && Fd.addFallback(0, "MULTIVIEW");
              const Qd = [hd.j.PositionKind];
              Xd.NORMAL && Qd.push(hd.j.NormalKind), Xd.TANGENT && Qd.push(hd.j.TangentKind);
              for (let dd = 1; dd <= 6; ++dd) Xd["UV" + dd] && Qd.push(`uv${1===dd?"":dd}`);
              Xd.VERTEXCOLOR && Qd.push(hd.j.ColorKind), (0, Yd.w)(Qd, Od, Xd, Fd), (0, Yd.y)(Qd, Xd), (0, Yd.z)(Qd, Od, Xd), (0, Yd.v)(Qd, Od, Xd);
              let Nd = "default";
              const qd = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                Hd = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, Yd.Y)(qd, Hd, !1);
              const bd = ["Material", "Scene", "Mesh"],
                gd = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: Xd.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = Fd, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = Xd, this._eventInfo.uniforms = qd, this._eventInfo.attributes = Qd, this._eventInfo.samplers = Hd, this._eventInfo.uniformBuffersNames = bd, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Od, this._eventInfo.indexParameters = gd, this._callbackPluginEventGeneric(128, this._eventInfo), Ed.c.AddUniformsAndSamplers(qd, Hd), vd.c.AddUniforms(qd), vd.c.AddSamplers(Hd), td.b && (td.b.PrepareUniforms(qd, Xd), td.b.PrepareSamplers(Hd, Xd)), (0, Yd.Z)({
                  uniformsNames: qd,
                  uniformBuffersNames: bd,
                  samplers: Hd,
                  defines: Xd,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, Td.b)(qd), this._useVertexPulling) {
                const dd = md.getRenderingMesh(),
                  Od = dd?.geometry;
                Od && (this._vertexPullingMetadata = (0, pd.f)(Od), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((dd, Od) => {
                  qd.push(`vp_${Od}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const wd = {};
              this.customShaderNameResolve && (Nd = this.customShaderNameResolve(Nd, qd, bd, Hd, Xd, Qd, wd));
              const Jd = Xd.toString(),
                Ud = md.effect,
                xd = Rd.Iq().createEffect(Nd, {
                  attributes: Qd,
                  uniformsNames: qd,
                  uniformBuffersNames: bd,
                  samplers: Hd,
                  defines: Jd,
                  fallbacks: Fd,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: gd,
                  processFinalCode: wd.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: Xd.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: dd._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, Kd);
              if (this._eventInfo.customCode = void 0, xd)
                if (this._onEffectCreatedObservable && (sd.effect = xd, sd.subMesh = md, this._onEffectCreatedObservable.notifyObservers(sd)), this.allowShaderHotSwapping && Ud && !xd.isReady()) {
                  if (Xd.markAsUnprocessed(), od = this.isFrozen, Wd) return Xd._areLightsDisposed = !0, !1
                } else Rd.resetCachedMaterial(), md.setEffect(xd, Xd, this._materialContext)
            }
            return !(!md.effect || !md.effect.isReady()) && (Xd._renderId = Rd.getRenderId(), Fd._wasPreviouslyReady = !od, Fd._wasPreviouslyUsingInstances = Wd, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const dd = this._uniformBuffer;
            dd.addUniform("diffuseLeftColor", 4), dd.addUniform("diffuseRightColor", 4), dd.addUniform("opacityParts", 4), dd.addUniform("reflectionLeftColor", 4), dd.addUniform("reflectionRightColor", 4), dd.addUniform("refractionLeftColor", 4), dd.addUniform("refractionRightColor", 4), dd.addUniform("emissiveLeftColor", 4), dd.addUniform("emissiveRightColor", 4), dd.addUniform("vDiffuseInfos", 2), dd.addUniform("vAmbientInfos", 2), dd.addUniform("vOpacityInfos", 2), dd.addUniform("vEmissiveInfos", 2), dd.addUniform("vLightmapInfos", 2), dd.addUniform("vSpecularInfos", 2), dd.addUniform("vBumpInfos", 3), dd.addUniform("diffuseMatrix", 16), dd.addUniform("ambientMatrix", 16), dd.addUniform("opacityMatrix", 16), dd.addUniform("emissiveMatrix", 16), dd.addUniform("lightmapMatrix", 16), dd.addUniform("specularMatrix", 16), dd.addUniform("bumpMatrix", 16), dd.addUniform("vTangentSpaceParams", 2), dd.addUniform("pointSize", 1), dd.addUniform("alphaCutOff", 1), dd.addUniform("refractionMatrix", 16), dd.addUniform("vRefractionInfos", 4), dd.addUniform("vRefractionPosition", 3), dd.addUniform("vRefractionSize", 3), dd.addUniform("vSpecularColor", 4), dd.addUniform("vEmissiveColor", 3), dd.addUniform("vDiffuseColor", 4), dd.addUniform("vAmbientColor", 3), dd.addUniform("cameraInfo", 4), dd.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Yd.W)(dd, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(Od, md, Wd) {
            const Fd = this.zV(),
              Rd = Wd.materialDefines;
            if (!Rd) return;
            const hd = Wd.effect;
            if (!hd) return;
            this._activeEffect = hd, md.getMeshUniformBuffer().bindToEffect(hd, "Mesh"), md.transferToEffect(Od), this._uniformBuffer.bindToEffect(hd, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Fd, md, Od, this.isFrozen), Ed.c.Bind(Fd.Iq().currentRenderPassId, this._activeEffect, md, Od, this);
            const vd = Fd.activeCamera;
            vd ? this._uniformBuffer.updateFloat4("cameraInfo", vd.minZ, vd.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Qd = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Qd[0], Qd[1], Qd[2], Qd[3]), this._eventInfo.subMesh = Wd, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Rd.OBJECTSPACE_NORMALMAP && (Od.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const td = this._mustRebind(Fd, hd, Wd, md.visibility),
              od = Fd.Iq()._features.needToAlwaysBindUniformBuffers;
            (0, Yd.d)(md, hd), this._vertexPullingMetadata && (0, pd.e)(hd, this._vertexPullingMetadata);
            const Nd = this._uniformBuffer;
            if (td) {
              if (this.bindViewProjection(hd), !Nd.useUbo || !this.isFrozen || !Nd.isSync || Wd._drawWrapper._forceRebindOnNextCall) {
                if (dd.FresnelEnabled && Rd.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (Nd.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), Nd.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const dd = Kd.j.Color3[0];
                    dd.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), Nd.updateColor4("opacityParts", dd, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (Nd.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), Nd.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (Nd.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), Nd.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (Nd.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), Nd.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (Rd.ALPHATEST && Nd.updateFloat("alphaCutOff", this.alphaCutOff), Fd.texturesEnabled && (this._diffuseTexture && dd.DiffuseTextureEnabled && (Nd.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, Yd.q)(this._diffuseTexture, Nd, "diffuse")), this._ambientTexture && dd.AmbientTextureEnabled && (Nd.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, Yd.q)(this._ambientTexture, Nd, "ambient")), this._opacityTexture && dd.OpacityTextureEnabled && (Nd.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Yd.q)(this._opacityTexture, Nd, "opacity")), (0, Yd.h)(Fd, Rd, Nd, Kd.d.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && dd.ReflectionTextureEnabled || Nd.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && dd.EmissiveTextureEnabled && (Nd.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Yd.q)(this._emissiveTexture, Nd, "emissive")), this._lightmapTexture && dd.LightmapTextureEnabled && (Nd.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Yd.q)(this._lightmapTexture, Nd, "lightmap")), this._specularTexture && dd.SpecularTextureEnabled && (Nd.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, Yd.q)(this._specularTexture, Nd, "specular")), this._bumpTexture && Fd.Iq().getCaps().standardDerivatives && dd.BumpTextureEnabled && (Nd.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, Yd.q)(this._bumpTexture, Nd, "bump"), Fd._mirroredCameraPosition ? Nd.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Nd.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && dd.RefractionTextureEnabled)) {
                  let dd = 1;
                  if (this._refractionTexture.isCube || (Nd.Idd("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (dd = this._refractionTexture.depth)), Nd.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, dd, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const dd = this._refractionTexture;
                    Nd.updateVector3("vRefractionPosition", dd.boundingBoxPosition), Nd.updateVector3("vRefractionSize", dd.boundingBoxSize)
                  }
                }
                this.pointsCloud && Nd.updateFloat("pointSize", this.pointSize), Nd.updateColor4("vSpecularColor", this.specularColor, this.specularPower), Nd.updateColor3("vEmissiveColor", dd.EmissiveTextureEnabled ? this.emissiveColor : Kd.d.BlackReadOnly), Nd.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), Fd.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), Nd.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              Fd.texturesEnabled && (this._diffuseTexture && dd.DiffuseTextureEnabled && hd.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && dd.AmbientTextureEnabled && hd.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && dd.OpacityTextureEnabled && hd.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && dd.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? hd.setTexture("reflectionCubeSampler", this._reflectionTexture) : hd.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && dd.EmissiveTextureEnabled && hd.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && dd.LightmapTextureEnabled && hd.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && dd.SpecularTextureEnabled && hd.setTexture("specularSampler", this._specularTexture), this._bumpTexture && Fd.Iq().getCaps().standardDerivatives && dd.BumpTextureEnabled && hd.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && dd.RefractionTextureEnabled && (this._refractionTexture.isCube ? hd.setTexture("refractionCubeSampler", this._refractionTexture) : hd.setTexture("refraction2DSampler", this._refractionTexture))), this.zV().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(md) && this.zV().depthPeelingRenderer.bind(hd), this._eventInfo.subMesh = Wd, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Td.e)(hd, this, Fd), this.bindEyePosition(hd)
            } else od && (this._needToBindSceneUbo = !0);
            !td && this.isFrozen && !od || !Fd.lightsEnabled || this._disableLighting || (0, Yd.k)(Fd, md, hd, Rd, this._maxSimultaneousLights), !td && this.isFrozen || ((Fd.fogEnabled && md.applyFog && Fd.fogMode !== Xd.c.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || md.receiveShadows || Rd.PREPASS || Rd.CLUSTLIGHT_BATCH) && this.bindView(hd), (0, Yd.f)(Fd, md, hd), Rd.NUM_MORPH_INFLUENCERS && (0, Yd.n)(md, hd), Rd.BAKED_VERTEX_ANIMATION_TEXTURE && md.bakedVertexAnimationManager?.bind(hd, Rd.INSTANCES), this.useLogarithmicDepth && (0, Yd.m)(Rd, hd, Fd), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(md, this._activeEffect, Wd), Nd.update()
          }
          _canBindRunFollower(Od, md, Wd, Fd, Rd) {
            const Xd = Od.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === dd.prototype.isReadyForSubMesh && this.bindForSubMesh === dd.prototype.bindForSubMesh && this._mustRebind === qd.d.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !md._features.needToAlwaysBindUniformBuffers && !(Xd && Xd.enabled && Xd.currentRTisSceneRT) && !Ed.c._Configurations[md.currentRenderPassId] && !Fd.materialDefines?.OBJECTSPACE_NORMALMAP && !Wd.skeleton && !Rd._bonesComputationForcedToCPU
          }
          _bindRunFollower(dd, Od, md, Wd) {
            this._activeEffect = Wd, Od.getMeshUniformBuffer().bindToEffect(Wd, "Mesh"), Od.transferToEffect(dd);
            const Fd = this._uniformBuffer;
            Fd.bindToEffect(Wd, "Material");
            const Rd = this._scene.activeCamera;
            Rd ? Fd.updateFloat4("cameraInfo", Rd.minZ, Rd.maxZ, 0, 0) : Fd.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Xd = this.textureRepetitionHexTilingParams;
            Fd.updateFloat4("vTextureRepetitionHexTilingParams", Xd[0], Xd[1], Xd[2], Xd[3]), this._afterBind(Od, Wd, md), Fd.update()
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
          dispose(dd, Od) {
            Od && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(dd, Od)
          }
          clone(Od) {
            let md = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Fd = gd.b.Clone((() => new dd(Od, this.zV())), this, {
              cloneTexturesOnlyOnce: md
            });
            return Fd.name = Od, Fd.id = Od, this.stencil.copyTo(Fd.stencil), this._clonePlugins(Fd, Wd), Fd
          }
          static Parse(Od, md, Wd) {
            const Fd = gd.b.Parse((() => new dd(Od.name, md)), Od, md, Wd);
            return Od.stencil && Fd.stencil.parse(Od.stencil, md, Wd), od.b._ParsePlugins(Od, Fd, md, Wd), Fd
          }
          static get DiffuseTextureEnabled() {
            return Hd.b.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(dd) {
            Hd.b.DiffuseTextureEnabled = dd
          }
          static get DetailTextureEnabled() {
            return Hd.b.DetailTextureEnabled
          }
          static set DetailTextureEnabled(dd) {
            Hd.b.DetailTextureEnabled = dd
          }
          static get AmbientTextureEnabled() {
            return Hd.b.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(dd) {
            Hd.b.AmbientTextureEnabled = dd
          }
          static get OpacityTextureEnabled() {
            return Hd.b.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(dd) {
            Hd.b.OpacityTextureEnabled = dd
          }
          static get ReflectionTextureEnabled() {
            return Hd.b.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(dd) {
            Hd.b.ReflectionTextureEnabled = dd
          }
          static get EmissiveTextureEnabled() {
            return Hd.b.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(dd) {
            Hd.b.EmissiveTextureEnabled = dd
          }
          static get SpecularTextureEnabled() {
            return Hd.b.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(dd) {
            Hd.b.SpecularTextureEnabled = dd
          }
          static get BumpTextureEnabled() {
            return Hd.b.BumpTextureEnabled
          }
          static set BumpTextureEnabled(dd) {
            Hd.b.BumpTextureEnabled = dd
          }
          static get LightmapTextureEnabled() {
            return Hd.b.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(dd) {
            Hd.b.LightmapTextureEnabled = dd
          }
          static get RefractionTextureEnabled() {
            return Hd.b.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(dd) {
            Hd.b.RefractionTextureEnabled = dd
          }
          static get ColorGradingTextureEnabled() {
            return Hd.b.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(dd) {
            Hd.b.ColorGradingTextureEnabled = dd
          }
          static get FresnelEnabled() {
            return Hd.b.FresnelEnabled
          }
          static set FresnelEnabled(dd) {
            Hd.b.FresnelEnabled = dd
          }
        }, Od = new WeakMap, Qd = new WeakMap, Nd = new WeakMap, Jd = new WeakMap, Ud = new WeakMap, xd = new WeakMap, Bd = new WeakMap, Sd = new WeakMap, ud = new WeakMap, rd = new WeakMap, Gd = new WeakMap, nd = new WeakMap, Ld = new WeakMap, Pd = new WeakMap, zd = new WeakMap, cd = new WeakMap, jd = new WeakMap, Dd = new WeakMap, ed = new WeakMap, Id = new WeakMap, ld = new WeakMap, Cd = new WeakMap, Zd = new WeakMap, kd = new WeakMap, fd = new WeakMap, Md = new WeakMap, dO = new WeakMap, OO = new WeakMap, mO = new WeakMap, WO = new WeakMap, FO = new WeakMap, RO = new WeakMap, (() => {
          const Od = "function" === typeof Symbol && Symbol.metadata ? Object.create(Bm[Symbol.metadata] ?? null) : void 0;
          XO = [(0, Fd.x)("diffuseTexture")], KO = [(0, Fd.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], hO = [(0, Fd.x)("ambientTexture")], vO = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], QO = [(0, Fd.x)("opacityTexture")], tO = [(0, Fd.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], oO = [(0, Fd.x)("reflectionTexture")], NO = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], qO = [(0, Fd.x)("emissiveTexture")], HO = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], yO = [(0, Fd.x)("specularTexture")], bO = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], TO = [(0, Fd.x)("bumpTexture")], pO = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], YO = [(0, Fd.x)("lightmapTexture")], gO = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], wO = [(0, Fd.x)("refractionTexture")], aO = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], EO = [(0, Fd.m)("ambient")], JO = [(0, Fd.m)("diffuse")], UO = [(0, Fd.m)("specular")], xO = [(0, Fd.m)("emissive")], BO = [(0, Fd.E)()], SO = [(0, Fd.E)("useAlphaFromDiffuseTexture")], sO = [() => ({
            init(dd) {
              return void 0 === dd && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = dd), dd
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(dd) {
              this._useAlphaFromDiffuseTexture = dd
            }
          })], uO = [(0, Fd.E)("useEmissiveAsIllumination")], VO = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], iO = [(0, Fd.E)("linkEmissiveWithDiffuse")], AO = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], rO = [(0, Fd.E)("useSpecularOverAlpha")], GO = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], nO = [(0, Fd.E)("useReflectionOverAlpha")], LO = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], PO = [(0, Fd.E)("disableLighting")], zO = [(0, Fd.g)("_markAllSubMeshesAsLightsDirty")], cO = [(0, Fd.E)("useObjectSpaceNormalMap")], jO = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], DO = [(0, Fd.E)("useParallax")], eO = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], IO = [(0, Fd.E)("useParallaxOcclusion")], lO = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], CO = [(0, Fd.E)()], ZO = [(0, Fd.E)("roughness")], kO = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], fO = [(0, Fd.E)()], MO = [(0, Fd.E)()], dm = [(0, Fd.E)()], Om = [(0, Fd.E)("useLightmapAsShadowmap")], mm = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], Wm = [(0, Fd.o)("diffuseFresnelParameters")], Fm = [(0, Fd.g)("_markAllSubMeshesAsFresnelDirty")], Rm = [(0, Fd.o)("opacityFresnelParameters")], Xm = [(0, Fd.g)("_markAllSubMeshesAsFresnelAndMiscDirty")], Km = [(0, Fd.o)("reflectionFresnelParameters")], hm = [(0, Fd.g)("_markAllSubMeshesAsFresnelDirty")], Qm = [(0, Fd.o)("refractionFresnelParameters")], tm = [(0, Fd.g)("_markAllSubMeshesAsFresnelDirty")], om = [(0, Fd.o)("emissiveFresnelParameters")], Nm = [(0, Fd.g)("_markAllSubMeshesAsFresnelDirty")], qm = [(0, Fd.E)("useReflectionFresnelFromSpecular")], Hm = [(0, Fd.g)("_markAllSubMeshesAsFresnelDirty")], ym = [(0, Fd.E)("useGlossinessFromSpecularMapAlpha")], bm = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], Tm = [(0, Fd.E)("maxSimultaneousLights")], pm = [(0, Fd.g)("_markAllSubMeshesAsLightsDirty")], Ym = [(0, Fd.E)("invertNormalMapX")], gm = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], wm = [(0, Fd.E)("invertNormalMapY")], am = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], Em = [(0, Fd.E)("twoSidedLighting")], Jm = [(0, Fd.g)("_markAllSubMeshesAsTexturesDirty")], Um = [(0, Fd.E)("applyDecalMapAfterDetailMap")], xm = [(0, Fd.g)("_markAllSubMeshesAsMiscDirty")], (0, Wd.h)(dd, null, KO, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "diffuseTexture" in dd,
              get: dd => dd.diffuseTexture,
              set: (dd, Od) => {
                dd.diffuseTexture = Od
              }
            },
            metadata: Od
          }, um, Vm), (0, Wd.h)(dd, null, vO, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "ambientTexture" in dd,
              get: dd => dd.ambientTexture,
              set: (dd, Od) => {
                dd.ambientTexture = Od
              }
            },
            metadata: Od
          }, rm, Gm), (0, Wd.h)(dd, null, tO, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "opacityTexture" in dd,
              get: dd => dd.opacityTexture,
              set: (dd, Od) => {
                dd.opacityTexture = Od
              }
            },
            metadata: Od
          }, Pm, zm), (0, Wd.h)(dd, null, NO, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "reflectionTexture" in dd,
              get: dd => dd.reflectionTexture,
              set: (dd, Od) => {
                dd.reflectionTexture = Od
              }
            },
            metadata: Od
          }, Dm, em), (0, Wd.h)(dd, null, HO, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "emissiveTexture" in dd,
              get: dd => dd.emissiveTexture,
              set: (dd, Od) => {
                dd.emissiveTexture = Od
              }
            },
            metadata: Od
          }, Cm, Zm), (0, Wd.h)(dd, null, bO, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularTexture" in dd,
              get: dd => dd.specularTexture,
              set: (dd, Od) => {
                dd.specularTexture = Od
              }
            },
            metadata: Od
          }, Mm, dW), (0, Wd.h)(dd, null, pO, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "bumpTexture" in dd,
              get: dd => dd.bumpTexture,
              set: (dd, Od) => {
                dd.bumpTexture = Od
              }
            },
            metadata: Od
          }, WW, FW), (0, Wd.h)(dd, null, gO, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "lightmapTexture" in dd,
              get: dd => dd.lightmapTexture,
              set: (dd, Od) => {
                dd.lightmapTexture = Od
              }
            },
            metadata: Od
          }, KW, hW), (0, Wd.h)(dd, null, aO, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "refractionTexture" in dd,
              get: dd => dd.refractionTexture,
              set: (dd, Od) => {
                dd.refractionTexture = Od
              }
            },
            metadata: Od
          }, tW, oW), (0, Wd.h)(dd, null, sO, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "useAlphaFromDiffuseTexture" in dd,
              get: dd => dd.useAlphaFromDiffuseTexture,
              set: (dd, Od) => {
                dd.useAlphaFromDiffuseTexture = Od
              }
            },
            metadata: Od
          }, JW, UW), (0, Wd.h)(dd, null, VO, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: dd => "useEmissiveAsIllumination" in dd,
              get: dd => dd.useEmissiveAsIllumination,
              set: (dd, Od) => {
                dd.useEmissiveAsIllumination = Od
              }
            },
            metadata: Od
          }, SW, sW), (0, Wd.h)(dd, null, AO, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: dd => "linkEmissiveWithDiffuse" in dd,
              get: dd => dd.linkEmissiveWithDiffuse,
              set: (dd, Od) => {
                dd.linkEmissiveWithDiffuse = Od
              }
            },
            metadata: Od
          }, iW, AW), (0, Wd.h)(dd, null, GO, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: dd => "useSpecularOverAlpha" in dd,
              get: dd => dd.useSpecularOverAlpha,
              set: (dd, Od) => {
                dd.useSpecularOverAlpha = Od
              }
            },
            metadata: Od
          }, nW, LW), (0, Wd.h)(dd, null, LO, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: dd => "useReflectionOverAlpha" in dd,
              get: dd => dd.useReflectionOverAlpha,
              set: (dd, Od) => {
                dd.useReflectionOverAlpha = Od
              }
            },
            metadata: Od
          }, cW, jW), (0, Wd.h)(dd, null, zO, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: dd => "disableLighting" in dd,
              get: dd => dd.disableLighting,
              set: (dd, Od) => {
                dd.disableLighting = Od
              }
            },
            metadata: Od
          }, IW, lW), (0, Wd.h)(dd, null, jO, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: dd => "useObjectSpaceNormalMap" in dd,
              get: dd => dd.useObjectSpaceNormalMap,
              set: (dd, Od) => {
                dd.useObjectSpaceNormalMap = Od
              }
            },
            metadata: Od
          }, kW, fW), (0, Wd.h)(dd, null, eO, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: dd => "useParallax" in dd,
              get: dd => dd.useParallax,
              set: (dd, Od) => {
                dd.useParallax = Od
              }
            },
            metadata: Od
          }, OF, mF), (0, Wd.h)(dd, null, lO, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: dd => "useParallaxOcclusion" in dd,
              get: dd => dd.useParallaxOcclusion,
              set: (dd, Od) => {
                dd.useParallaxOcclusion = Od
              }
            },
            metadata: Od
          }, RF, XF), (0, Wd.h)(dd, null, kO, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: dd => "roughness" in dd,
              get: dd => dd.roughness,
              set: (dd, Od) => {
                dd.roughness = Od
              }
            },
            metadata: Od
          }, tF, oF), (0, Wd.h)(dd, null, mm, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: dd => "useLightmapAsShadowmap" in dd,
              get: dd => dd.useLightmapAsShadowmap,
              set: (dd, Od) => {
                dd.useLightmapAsShadowmap = Od
              }
            },
            metadata: Od
          }, gF, wF), (0, Wd.h)(dd, null, Fm, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "diffuseFresnelParameters" in dd,
              get: dd => dd.diffuseFresnelParameters,
              set: (dd, Od) => {
                dd.diffuseFresnelParameters = Od
              }
            },
            metadata: Od
          }, JF, UF), (0, Wd.h)(dd, null, Xm, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "opacityFresnelParameters" in dd,
              get: dd => dd.opacityFresnelParameters,
              set: (dd, Od) => {
                dd.opacityFresnelParameters = Od
              }
            },
            metadata: Od
          }, SF, sF), (0, Wd.h)(dd, null, hm, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "reflectionFresnelParameters" in dd,
              get: dd => dd.reflectionFresnelParameters,
              set: (dd, Od) => {
                dd.reflectionFresnelParameters = Od
              }
            },
            metadata: Od
          }, iF, AF), (0, Wd.h)(dd, null, tm, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "refractionFresnelParameters" in dd,
              get: dd => dd.refractionFresnelParameters,
              set: (dd, Od) => {
                dd.refractionFresnelParameters = Od
              }
            },
            metadata: Od
          }, nF, LF), (0, Wd.h)(dd, null, Nm, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "emissiveFresnelParameters" in dd,
              get: dd => dd.emissiveFresnelParameters,
              set: (dd, Od) => {
                dd.emissiveFresnelParameters = Od
              }
            },
            metadata: Od
          }, cF, jF), (0, Wd.h)(dd, null, Hm, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: dd => "useReflectionFresnelFromSpecular" in dd,
              get: dd => dd.useReflectionFresnelFromSpecular,
              set: (dd, Od) => {
                dd.useReflectionFresnelFromSpecular = Od
              }
            },
            metadata: Od
          }, IF, lF), (0, Wd.h)(dd, null, bm, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: dd => "useGlossinessFromSpecularMapAlpha" in dd,
              get: dd => dd.useGlossinessFromSpecularMapAlpha,
              set: (dd, Od) => {
                dd.useGlossinessFromSpecularMapAlpha = Od
              }
            },
            metadata: Od
          }, kF, fF), (0, Wd.h)(dd, null, pm, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: dd => "maxSimultaneousLights" in dd,
              get: dd => dd.maxSimultaneousLights,
              set: (dd, Od) => {
                dd.maxSimultaneousLights = Od
              }
            },
            metadata: Od
          }, OR, mR), (0, Wd.h)(dd, null, gm, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: dd => "invertNormalMapX" in dd,
              get: dd => dd.invertNormalMapX,
              set: (dd, Od) => {
                dd.invertNormalMapX = Od
              }
            },
            metadata: Od
          }, RR, XR), (0, Wd.h)(dd, null, am, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: dd => "invertNormalMapY" in dd,
              get: dd => dd.invertNormalMapY,
              set: (dd, Od) => {
                dd.invertNormalMapY = Od
              }
            },
            metadata: Od
          }, vR, QR), (0, Wd.h)(dd, null, Jm, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: dd => "twoSidedLighting" in dd,
              get: dd => dd.twoSidedLighting,
              set: (dd, Od) => {
                dd.twoSidedLighting = Od
              }
            },
            metadata: Od
          }, NR, qR), (0, Wd.h)(dd, null, xm, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: dd => "applyDecalMapAfterDetailMap" in dd,
              get: dd => dd.applyDecalMapAfterDetailMap,
              set: (dd, Od) => {
                dd.applyDecalMapAfterDetailMap = Od
              }
            },
            metadata: Od
          }, bR, TR), (0, Wd.h)(null, null, XO, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_diffuseTexture" in dd,
              get: dd => dd._diffuseTexture,
              set: (dd, Od) => {
                dd._diffuseTexture = Od
              }
            },
            metadata: Od
          }, Sm, sm), (0, Wd.h)(null, null, hO, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_ambientTexture" in dd,
              get: dd => dd._ambientTexture,
              set: (dd, Od) => {
                dd._ambientTexture = Od
              }
            },
            metadata: Od
          }, im, Am), (0, Wd.h)(null, null, QO, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_opacityTexture" in dd,
              get: dd => dd._opacityTexture,
              set: (dd, Od) => {
                dd._opacityTexture = Od
              }
            },
            metadata: Od
          }, nm, Lm), (0, Wd.h)(null, null, oO, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_reflectionTexture" in dd,
              get: dd => dd._reflectionTexture,
              set: (dd, Od) => {
                dd._reflectionTexture = Od
              }
            },
            metadata: Od
          }, cm, jm), (0, Wd.h)(null, null, qO, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_emissiveTexture" in dd,
              get: dd => dd._emissiveTexture,
              set: (dd, Od) => {
                dd._emissiveTexture = Od
              }
            },
            metadata: Od
          }, Im, lm), (0, Wd.h)(null, null, yO, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_specularTexture" in dd,
              get: dd => dd._specularTexture,
              set: (dd, Od) => {
                dd._specularTexture = Od
              }
            },
            metadata: Od
          }, km, fm), (0, Wd.h)(null, null, TO, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_bumpTexture" in dd,
              get: dd => dd._bumpTexture,
              set: (dd, Od) => {
                dd._bumpTexture = Od
              }
            },
            metadata: Od
          }, OW, mW), (0, Wd.h)(null, null, YO, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_lightmapTexture" in dd,
              get: dd => dd._lightmapTexture,
              set: (dd, Od) => {
                dd._lightmapTexture = Od
              }
            },
            metadata: Od
          }, RW, XW), (0, Wd.h)(null, null, wO, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_refractionTexture" in dd,
              get: dd => dd._refractionTexture,
              set: (dd, Od) => {
                dd._refractionTexture = Od
              }
            },
            metadata: Od
          }, vW, QW), (0, Wd.h)(null, null, EO, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "ambientColor" in dd,
              get: dd => dd.ambientColor,
              set: (dd, Od) => {
                dd.ambientColor = Od
              }
            },
            metadata: Od
          }, NW, qW), (0, Wd.h)(null, null, JO, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "diffuseColor" in dd,
              get: dd => dd.diffuseColor,
              set: (dd, Od) => {
                dd.diffuseColor = Od
              }
            },
            metadata: Od
          }, HW, yW), (0, Wd.h)(null, null, UO, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularColor" in dd,
              get: dd => dd.specularColor,
              set: (dd, Od) => {
                dd.specularColor = Od
              }
            },
            metadata: Od
          }, bW, TW), (0, Wd.h)(null, null, xO, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "emissiveColor" in dd,
              get: dd => dd.emissiveColor,
              set: (dd, Od) => {
                dd.emissiveColor = Od
              }
            },
            metadata: Od
          }, pW, YW), (0, Wd.h)(null, null, BO, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: dd => "specularPower" in dd,
              get: dd => dd.specularPower,
              set: (dd, Od) => {
                dd.specularPower = Od
              }
            },
            metadata: Od
          }, gW, wW), (0, Wd.h)(null, null, SO, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useAlphaFromDiffuseTexture" in dd,
              get: dd => dd._useAlphaFromDiffuseTexture,
              set: (dd, Od) => {
                dd._useAlphaFromDiffuseTexture = Od
              }
            },
            metadata: Od
          }, aW, EW), (0, Wd.h)(null, null, uO, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useEmissiveAsIllumination" in dd,
              get: dd => dd._useEmissiveAsIllumination,
              set: (dd, Od) => {
                dd._useEmissiveAsIllumination = Od
              }
            },
            metadata: Od
          }, xW, BW), (0, Wd.h)(null, null, iO, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: dd => "_linkEmissiveWithDiffuse" in dd,
              get: dd => dd._linkEmissiveWithDiffuse,
              set: (dd, Od) => {
                dd._linkEmissiveWithDiffuse = Od
              }
            },
            metadata: Od
          }, uW, VW), (0, Wd.h)(null, null, rO, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useSpecularOverAlpha" in dd,
              get: dd => dd._useSpecularOverAlpha,
              set: (dd, Od) => {
                dd._useSpecularOverAlpha = Od
              }
            },
            metadata: Od
          }, rW, GW), (0, Wd.h)(null, null, nO, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useReflectionOverAlpha" in dd,
              get: dd => dd._useReflectionOverAlpha,
              set: (dd, Od) => {
                dd._useReflectionOverAlpha = Od
              }
            },
            metadata: Od
          }, PW, zW), (0, Wd.h)(null, null, PO, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: dd => "_disableLighting" in dd,
              get: dd => dd._disableLighting,
              set: (dd, Od) => {
                dd._disableLighting = Od
              }
            },
            metadata: Od
          }, DW, eW), (0, Wd.h)(null, null, cO, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useObjectSpaceNormalMap" in dd,
              get: dd => dd._useObjectSpaceNormalMap,
              set: (dd, Od) => {
                dd._useObjectSpaceNormalMap = Od
              }
            },
            metadata: Od
          }, CW, ZW), (0, Wd.h)(null, null, DO, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useParallax" in dd,
              get: dd => dd._useParallax,
              set: (dd, Od) => {
                dd._useParallax = Od
              }
            },
            metadata: Od
          }, MW, dF), (0, Wd.h)(null, null, IO, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useParallaxOcclusion" in dd,
              get: dd => dd._useParallaxOcclusion,
              set: (dd, Od) => {
                dd._useParallaxOcclusion = Od
              }
            },
            metadata: Od
          }, WF, FF), (0, Wd.h)(null, null, CO, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: dd => "parallaxScaleBias" in dd,
              get: dd => dd.parallaxScaleBias,
              set: (dd, Od) => {
                dd.parallaxScaleBias = Od
              }
            },
            metadata: Od
          }, KF, hF), (0, Wd.h)(null, null, ZO, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: dd => "_roughness" in dd,
              get: dd => dd._roughness,
              set: (dd, Od) => {
                dd._roughness = Od
              }
            },
            metadata: Od
          }, vF, QF), (0, Wd.h)(null, null, fO, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: dd => "indexOfRefraction" in dd,
              get: dd => dd.indexOfRefraction,
              set: (dd, Od) => {
                dd.indexOfRefraction = Od
              }
            },
            metadata: Od
          }, NF, qF), (0, Wd.h)(null, null, MO, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: dd => "invertRefractionY" in dd,
              get: dd => dd.invertRefractionY,
              set: (dd, Od) => {
                dd.invertRefractionY = Od
              }
            },
            metadata: Od
          }, HF, yF), (0, Wd.h)(null, null, dm, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: dd => "alphaCutOff" in dd,
              get: dd => dd.alphaCutOff,
              set: (dd, Od) => {
                dd.alphaCutOff = Od
              }
            },
            metadata: Od
          }, bF, TF), (0, Wd.h)(null, null, Om, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useLightmapAsShadowmap" in dd,
              get: dd => dd._useLightmapAsShadowmap,
              set: (dd, Od) => {
                dd._useLightmapAsShadowmap = Od
              }
            },
            metadata: Od
          }, pF, YF), (0, Wd.h)(null, null, Wm, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "_diffuseFresnelParameters" in dd,
              get: dd => dd._diffuseFresnelParameters,
              set: (dd, Od) => {
                dd._diffuseFresnelParameters = Od
              }
            },
            metadata: Od
          }, aF, EF), (0, Wd.h)(null, null, Rm, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "_opacityFresnelParameters" in dd,
              get: dd => dd._opacityFresnelParameters,
              set: (dd, Od) => {
                dd._opacityFresnelParameters = Od
              }
            },
            metadata: Od
          }, xF, BF), (0, Wd.h)(null, null, Km, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "_reflectionFresnelParameters" in dd,
              get: dd => dd._reflectionFresnelParameters,
              set: (dd, Od) => {
                dd._reflectionFresnelParameters = Od
              }
            },
            metadata: Od
          }, uF, VF), (0, Wd.h)(null, null, Qm, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "_refractionFresnelParameters" in dd,
              get: dd => dd._refractionFresnelParameters,
              set: (dd, Od) => {
                dd._refractionFresnelParameters = Od
              }
            },
            metadata: Od
          }, rF, GF), (0, Wd.h)(null, null, om, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: dd => "_emissiveFresnelParameters" in dd,
              get: dd => dd._emissiveFresnelParameters,
              set: (dd, Od) => {
                dd._emissiveFresnelParameters = Od
              }
            },
            metadata: Od
          }, PF, zF), (0, Wd.h)(null, null, qm, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useReflectionFresnelFromSpecular" in dd,
              get: dd => dd._useReflectionFresnelFromSpecular,
              set: (dd, Od) => {
                dd._useReflectionFresnelFromSpecular = Od
              }
            },
            metadata: Od
          }, DF, eF), (0, Wd.h)(null, null, ym, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: dd => "_useGlossinessFromSpecularMapAlpha" in dd,
              get: dd => dd._useGlossinessFromSpecularMapAlpha,
              set: (dd, Od) => {
                dd._useGlossinessFromSpecularMapAlpha = Od
              }
            },
            metadata: Od
          }, CF, ZF), (0, Wd.h)(null, null, Tm, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: dd => "_maxSimultaneousLights" in dd,
              get: dd => dd._maxSimultaneousLights,
              set: (dd, Od) => {
                dd._maxSimultaneousLights = Od
              }
            },
            metadata: Od
          }, MF, dR), (0, Wd.h)(null, null, Ym, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: dd => "_invertNormalMapX" in dd,
              get: dd => dd._invertNormalMapX,
              set: (dd, Od) => {
                dd._invertNormalMapX = Od
              }
            },
            metadata: Od
          }, WR, FR), (0, Wd.h)(null, null, wm, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: dd => "_invertNormalMapY" in dd,
              get: dd => dd._invertNormalMapY,
              set: (dd, Od) => {
                dd._invertNormalMapY = Od
              }
            },
            metadata: Od
          }, KR, hR), (0, Wd.h)(null, null, Em, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: dd => "_twoSidedLighting" in dd,
              get: dd => dd._twoSidedLighting,
              set: (dd, Od) => {
                dd._twoSidedLighting = Od
              }
            },
            metadata: Od
          }, tR, oR), (0, Wd.h)(null, null, Um, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: dd => "_applyDecalMapAfterDetailMap" in dd,
              get: dd => dd._applyDecalMapAfterDetailMap,
              set: (dd, Od) => {
                dd._applyDecalMapAfterDetailMap = Od
              }
            },
            metadata: Od
          }, HR, yR), Od && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Od
          })
        })(), dd.ForceGLSL = !1, dd._ShaderLoader = new wd.b((() => [Promise.all([md.e(636), md.e(635)]).then((() => md(54292))), Promise.all([md.e(641), md.e(637), md.e(650), md.e(640)]).then((() => md(54475)))]), (() => [Promise.all([md.e(657), md.e(652)]).then((() => md(54647))), Promise.all([md.e(658), md.e(668), md.e(654)]).then((() => md(54858)))])), dd
      })(),
      Gd = !1;

    function nd() {
      Gd || (Gd = !0, (0, td.f)(), (0, Bd.e)("BABYLON.StandardMaterial", rd), Xd.c.DefaultMaterialFactory = dd => new rd("default material", dd))
    }
    Object.getOwnPropertyDescriptor(rd.prototype, "decalMap") || Object.defineProperty(rd.prototype, "decalMap", (0, Sd.g)("StandardMaterial", "decalMap"))
  },
  42303: (dd, Od, md) => {
    function Wd(dd) {
      return class extends dd {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    md.d(Od, {
      d: () => Wd
    })
  },
  42291: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    class Wd {
      constructor(dd, Od) {
        this._webGL = {
          load: dd,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: Od,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(dd) {
        const Od = 1 === dd ? this._webGPU : this._webGL;
        return Od.loaded ? void 0 : async () => {
          await this._loadAsync(Od)
        }
      }
      async _loadAsync(dd) {
        if (dd.loaded) return;
        let Od = dd.loadPromise;
        const md = null === Od;
        md && (Od = Promise.all(dd.load()), dd.loadPromise = Od);
        let Wd = !1;
        try {
          await Od, Wd = !0
        } finally {
          md && this._completeLoad(dd, Wd)
        }
      }
      _completeLoad(dd, Od) {
        dd.loaded = Od, dd.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);