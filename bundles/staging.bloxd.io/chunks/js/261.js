export const id = 261;
export const ids = [261];
export const modules = {
  40498: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am
    });
    var hm = fm(40122);

    function Am(mm) {
      return class extends mm {
        constructor() {
          super(...arguments);
          const mm = new.target;
          if (!mm[Symbol.metadata]) {
            const Tm = Object.getPrototypeOf(mm)?.[Symbol.metadata];
            mm[Symbol.metadata] = Tm ? Object.create(Tm) : {}
          }
          const Tm = (0, hm.e)(mm[Symbol.metadata]);
          Tm._imageProcessingConfiguration || (Tm._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(mm) {
          this._attachImageProcessingConfiguration(mm), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(mm) {
          mm !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !mm && this.wG ? this._imageProcessingConfiguration = this.wG().imageProcessingConfiguration : mm && (this._imageProcessingConfiguration = mm), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(mm) {
          this.imageProcessingConfiguration.colorCurvesEnabled = mm
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(mm) {
          this.imageProcessingConfiguration.colorGradingEnabled = mm
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(mm) {
          this._imageProcessingConfiguration.toneMappingEnabled = mm
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(mm) {
          this._imageProcessingConfiguration.exposure = mm
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(mm) {
          this._imageProcessingConfiguration.contrast = mm
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(mm) {
          this._imageProcessingConfiguration.colorGradingTexture = mm
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(mm) {
          this._imageProcessingConfiguration.colorCurves = mm
        }
      }
    }
  },
  40371: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      e: () => Am
    });
    var hm = fm(40379);

    function Am(mm) {
      return class extends mm {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class am extends hm.c {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  40453: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => pm
    });
    var hm = fm(40113),
      Am = fm(40383),
      am = fm(40119),
      xm = fm(40440),
      wm = fm(40379),
      Dm = fm(40458),
      im = fm(40428);
    class Rm extends wm.c {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let pm = (() => {
      var mm, Tm, fm, wm;
      let pm, Em, om, Om, Ym, qm, jm = Dm.e,
        Vm = [],
        Im = [],
        Km = [],
        Qm = [],
        nm = [],
        Jm = [],
        cm = [],
        zm = [],
        Zm = [],
        km = [],
        bm = [],
        Sm = [];
      return mm = class extends jm {
        get texture() {
          return (0, hm.b)(this, Tm, "f")
        }
        set texture(mm) {
          (0, hm.c)(this, Tm, mm, "f")
        }
        get normalBlendMethod() {
          return (0, hm.b)(this, fm, "f")
        }
        set normalBlendMethod(mm) {
          (0, hm.c)(this, fm, mm, "f")
        }
        get isEnabled() {
          return (0, hm.b)(this, wm, "f")
        }
        set isEnabled(mm) {
          (0, hm.c)(this, wm, mm, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(mm) {
          let am = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(mm, "DetailMap", 140, new Rm, am), this._texture = null, Tm.set(this, (0, hm.i)(this, Vm, void 0)), this.diffuseBlendLevel = ((0, hm.i)(this, Im), (0, hm.i)(this, Km, 1)), this.roughnessBlendLevel = ((0, hm.i)(this, Qm), (0, hm.i)(this, nm, 1)), this.bumpLevel = ((0, hm.i)(this, Jm), (0, hm.i)(this, cm, 1)), this._normalBlendMethod = ((0, hm.i)(this, zm), Am.d.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), fm.set(this, (0, hm.i)(this, Zm, void 0)), this._isEnabled = ((0, hm.i)(this, km), !1), wm.set(this, (0, hm.i)(this, bm, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, hm.i)(this, Sm), this._internalMarkAllSubMeshesAsTexturesDirty = mm._dirtyCallbacks[1]
        }
        isReadyForSubMesh(mm, Tm, fm) {
          return !this._isEnabled || !(mm._areTexturesDirty && Tm.texturesEnabled && fm.getCaps().standardDerivatives && this._texture && xm.d.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(mm, Tm) {
          if (this._isEnabled) {
            mm.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const fm = Tm.dO();
            mm._areTexturesDirty && (fm.getCaps().standardDerivatives && this._texture && xm.d.DetailTextureEnabled && this._isEnabled ? ((0, im.$)(this._texture, mm, "DETAIL"), mm.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : mm.DETAIL = !1)
          } else mm.DETAIL = !1
        }
        bindForSubMesh(mm, Tm) {
          if (!this._isEnabled) return;
          const fm = this._material.isFrozen;
          mm.useUbo && fm && mm.isSync || this._texture && xm.d.DetailTextureEnabled && (mm.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, im.x)(this._texture, mm, "detail")), Tm.texturesEnabled && this._texture && xm.d.DetailTextureEnabled && mm.setTexture("detailSampler", this._texture)
        }
        hasTexture(mm) {
          return this._texture === mm
        }
        getActiveTextures(mm) {
          this._texture && mm.push(this._texture)
        }
        getAnimatables(mm) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && mm.push(this._texture)
        }
        dispose(mm) {
          mm && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(mm) {
          mm.push("detailSampler")
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
      }, Tm = new WeakMap, fm = new WeakMap, wm = new WeakMap, (() => {
        const Tm = "function" === typeof Symbol && Symbol.metadata ? Object.create(jm[Symbol.metadata] ?? null) : void 0;
        pm = [(0, am.A)("detailTexture"), (0, am.c)("_markAllSubMeshesAsTexturesDirty")], Em = [(0, am.J)()], om = [(0, am.J)()], Om = [(0, am.J)()], Ym = [(0, am.J)(), (0, am.c)("_markAllSubMeshesAsTexturesDirty")], qm = [(0, am.J)(), (0, am.c)("_markAllSubMeshesAsTexturesDirty")], (0, hm.g)(mm, null, pm, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: mm => "texture" in mm,
            get: mm => mm.texture,
            set: (mm, Tm) => {
              mm.texture = Tm
            }
          },
          metadata: Tm
        }, Vm, Im), (0, hm.g)(mm, null, Ym, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: mm => "normalBlendMethod" in mm,
            get: mm => mm.normalBlendMethod,
            set: (mm, Tm) => {
              mm.normalBlendMethod = Tm
            }
          },
          metadata: Tm
        }, Zm, km), (0, hm.g)(mm, null, qm, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: mm => "isEnabled" in mm,
            get: mm => mm.isEnabled,
            set: (mm, Tm) => {
              mm.isEnabled = Tm
            }
          },
          metadata: Tm
        }, bm, Sm), (0, hm.g)(null, null, Em, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: mm => "diffuseBlendLevel" in mm,
            get: mm => mm.diffuseBlendLevel,
            set: (mm, Tm) => {
              mm.diffuseBlendLevel = Tm
            }
          },
          metadata: Tm
        }, Km, Qm), (0, hm.g)(null, null, om, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: mm => "roughnessBlendLevel" in mm,
            get: mm => mm.roughnessBlendLevel,
            set: (mm, Tm) => {
              mm.roughnessBlendLevel = Tm
            }
          },
          metadata: Tm
        }, nm, Jm), (0, hm.g)(null, null, Om, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: mm => "bumpLevel" in mm,
            get: mm => mm.bumpLevel,
            set: (mm, Tm) => {
              mm.bumpLevel = Tm
            }
          },
          metadata: Tm
        }, cm, zm), Tm && Object.defineProperty(mm, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tm
        })
      })(), mm
    })()
  },
  40379: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm
    });
    class hm {
      constructor(mm) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = mm, mm)
          for (const Tm in mm) Object.prototype.hasOwnProperty.call(mm, Tm) && this._setDefaultValue(Tm)
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
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || mm, this._isDirty = !0
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
        for (const mm of Object.keys(this)) "_" !== mm[0] && this._keys.push(mm);
        if (this._externalProperties)
          for (const mm in this._externalProperties) - 1 === this._keys.indexOf(mm) && this._keys.push(mm)
      }
      isEqual(mm) {
        if (this._keys.length !== mm._keys.length) return !1;
        for (let Tm = 0; Tm < this._keys.length; Tm++) {
          const fm = this._keys[Tm];
          if (this[fm] !== mm[fm]) return !1
        }
        return !0
      }
      cloneTo(mm) {
        this._keys.length !== mm._keys.length && (mm._keys = this._keys.slice(0));
        for (let Tm = 0; Tm < this._keys.length; Tm++) {
          const fm = this._keys[Tm];
          mm[fm] = this[fm]
        }
      }
      reset() {
        for (const mm of this._keys) this._setDefaultValue(mm)
      }
      _setDefaultValue(mm) {
        const Tm = this._externalProperties?.[mm]?.type ?? typeof this[mm],
          fm = this._externalProperties?.[mm]?.default;
        switch (Tm) {
          case "number":
            this[mm] = fm ?? 0;
            break;
          case "string":
            this[mm] = fm ?? "";
            break;
          default:
            this[mm] = fm ?? !1
        }
      }
      toString() {
        let mm = "";
        for (let Tm = 0; Tm < this._keys.length; Tm++) {
          const fm = this._keys[Tm],
            hm = this[fm];
          switch (typeof hm) {
            case "number":
            case "string":
              mm += "#define " + fm + " " + hm + "\n";
              break;
            default:
              hm && (mm += "#define " + fm + "\n")
          }
        }
        return mm
      }
    }
  },
  40483: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => wm,
      f: () => xm,
      j: () => am
    });
    var hm, Am = fm(37185);

    function am(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const hm = Tm(mm);
      if (!Number.isInteger(hm) || hm < 0 || hm > fm) throw new Error(`Invalid geometry object ID ${hm} for mesh "${mm.name}". Object IDs must be integers between 0 and 0x${fm.toString(16).toUpperCase()}.`);
      return hm
    }

    function xm(mm, Tm) {
      const fm = Tm(mm);
      if (!Number.isInteger(fm) || fm < 0 || fm > 255 || 0 !== fm && 0 === (63 & fm)) throw new Error(`Invalid geometry mesh-blending tag ${fm} for mesh "${mm.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return fm
    }! function(mm) {
      mm[mm.Zero = 0] = "Zero", mm[mm.One = 1] = "One", mm[mm.MaxViewZ = 2] = "MaxViewZ", mm[mm.NoClear = 3] = "NoClear"
    }(hm || (hm = {}));
    class wm {
      static CreateConfiguration(mm) {
        return wm._Configurations[mm] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: Am.e.Zero(),
          currentViewProjection: Am.e.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, wm._Configurations[mm]
      }
      static DeleteConfiguration(mm) {
        delete wm._Configurations[mm]
      }
      static GetConfiguration(mm) {
        return wm._Configurations[mm]
      }
      static _PrepareConfiguration(mm, Tm, fm) {
        const hm = wm._Configurations[mm];
        hm._attachments = Tm, hm._colorAttachments = fm, hm._mrtCount = Tm.length;
        let Am = "#define PREPASS\n";
        for (const am of wm.GeometryTextureDescriptions) {
          const mm = hm.defines[am.defineIndex];
          void 0 !== mm && (Am += `#define ${am.define}\n#define ${am.defineIndex} ${mm}\n`)
        }
        hm.objectIdIsRedFormat && (Am += "#define PREPASS_OBJECT_ID_R8\n"), hm._defines = Am + `#define SCENE_MRT_COUNT ${Tm.length}\n`
      }
      static _PrepareStringDefines(mm, Tm) {
        const fm = wm._Configurations[mm];
        return !!fm?._defines && (Tm.push(fm._defines), !0)
      }
      static _BindAttachmentsForEffect(mm, Tm) {
        const fm = wm._Configurations[mm.currentRenderPassId];
        return !fm?._attachments || (mm.bindAttachments(Tm._multiTarget ? fm._attachments : fm._colorAttachments), Tm._multiTarget || void 0 !== fm.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(mm) {
        const Tm = wm._Configurations[mm.currentRenderPassId];
        Tm?._colorAttachments && mm.bindAttachments(Tm._colorAttachments)
      }
      static _BindColorAttachments(mm) {
        const Tm = wm._Configurations[mm.currentRenderPassId];
        return !Tm?._colorAttachments || (mm.bindAttachments(Tm._colorAttachments), void 0 !== Tm.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(mm) {
        const Tm = wm._Configurations[mm.currentRenderPassId];
        return !Tm?._colorAttachments || void 0 !== Tm.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(mm, Tm) {
        const fm = wm._Configurations[mm.currentRenderPassId];
        if (!fm) return;
        const hm = mm.getAlphaMode(),
          Am = void 0 === fm.defines.PREPASS_COLOR_INDEX || 2 === hm || 1 === hm || 17 === hm;
        Tm.setFloat("geometryZeroAlphaDiscard", Am ? 1 : 0)
      }
      static AddUniformsAndSamplers(mm, Tm) {
        mm.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(mm, Tm) {
        for (const fm of Tm)
          if (fm.jK)
            for (const Tm of fm.jK) Tm._removeDrawWrapper(mm)
      }
      static PrepareDefines(mm, Tm, fm) {
        if (!fm._arePrePassDirty) return;
        const hm = wm._Configurations[mm];
        if (!hm) return;
        fm.PREPASS = !0;
        let Am = 0;
        for (let am = 0; am < wm.GeometryTextureDescriptions.length; am++) {
          const mm = wm.GeometryTextureDescriptions[am],
            Tm = mm.define,
            xm = mm.defineIndex,
            Dm = hm.defines[xm];
          void 0 !== Dm ? (fm[Tm] = !0, fm[xm] = Dm, Am++) : (fm[Tm] = !1, delete fm[xm])
        }
        fm.PREPASS_OBJECT_ID_R8 = hm.objectIdIsRedFormat, fm.SCENE_MRT_COUNT = hm._mrtCount ?? Am, fm.BONES_VELOCITY_ENABLED = Tm.useBones && Tm.computeBonesUsingShaders && Tm.skeleton && !Tm.skeleton.isUsingTextureForMatrices && -1 === hm.excludedSkinnedMesh.indexOf(Tm)
      }
      static Bind(mm, Tm, fm, hm, Am) {
        const Dm = wm._Configurations[mm];
        if (!Dm) return;
        const im = fm.wG(),
          Rm = im.dO();
        if (Dm.reverseCulling && Rm.setStateCullFaceType(im._mirroredCameraPosition ? Am.cullBackFaces : !Am.cullBackFaces), void 0 !== Dm.defines.PREPASS_OBJECT_ID_INDEX) {
          const mm = Dm.objectIdIsRedFormat ? 255 : 16777215;
          let hm = fm.uniqueId;
          if (Dm.objectIdProvider) hm = am(fm, Dm.objectIdProvider, mm);
          else if (hm > mm) throw new Error(`Invalid geometry object ID ${hm} for mesh "${fm.name}". Object IDs must be integers between 0 and 0x${mm.toString(16).toUpperCase()}.`);
          Tm.setFloat("objectId", hm)
        }
        if (void 0 !== Dm.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const mm = Dm.meshBlendTagProvider ? xm(fm, Dm.meshBlendTagProvider) : fm.meshBlendingTag;
          Tm.setInt("meshBlendTag", mm)
        }
        if (void 0 !== Dm.defines.PREPASS_VELOCITY_INDEX || void 0 !== Dm.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const mm = Dm._currentWorldMatrices ?? (Dm._currentWorldMatrices = {}),
            Am = Dm._worldMatrixFrameIds ?? (Dm._worldMatrixFrameIds = {});
          if (mm[fm.uniqueId] || (mm[fm.uniqueId] = hm.clone(), Dm.previousWorldMatrices[fm.uniqueId] = hm.clone()), Am[fm.uniqueId] !== Rm.frameId && (Dm.previousWorldMatrices[fm.uniqueId].ZZ(mm[fm.uniqueId]), Am[fm.uniqueId] = Rm.frameId), mm[fm.uniqueId].ZZ(hm), -1 === Dm.lastUpdateFrameId ? (Dm.lastUpdateFrameId = Rm.frameId, Dm.previousViewProjection.ZZ(im.getTransformMatrix()), Dm.currentViewProjection.ZZ(im.getTransformMatrix())) : Dm.currentViewProjection.updateFlag !== im.getTransformMatrix().updateFlag ? (Dm.lastUpdateFrameId = Rm.frameId, Dm.previousViewProjection.ZZ(Dm.currentViewProjection), Dm.currentViewProjection.ZZ(im.getTransformMatrix())) : Dm.lastUpdateFrameId !== Rm.frameId && (Dm.lastUpdateFrameId = Rm.frameId, Dm.previousViewProjection.ZZ(Dm.currentViewProjection)), Tm.setMatrix("previousWorld", Dm.previousWorldMatrices[fm.uniqueId]), Tm.setMatrix("previousViewProjection", Dm.previousViewProjection), fm.useBones && fm.computeBonesUsingShaders && fm.skeleton) {
            const mm = fm.skeleton;
            if (!mm.isUsingTextureForMatrices || -1 === Tm.getUniformIndex("boneTextureInfo")) {
              const hm = mm.getTransformMatrices(fm);
              hm && (Dm.previousBones[fm.uniqueId] || (Dm.previousBones[fm.uniqueId] = hm.slice()), Tm.setMatrices("mPreviousBones", Dm.previousBones[fm.uniqueId]), Dm.previousBones[fm.uniqueId].set(hm))
            }
          }
        }
      }
    }
    wm.GeometryTextureDescriptions = [{
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
    }], wm._Configurations = {}
  },
  40458: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Em,
      f: () => Om
    });
    var hm = fm(40113),
      Am = fm(40119),
      am = fm(4e4),
      xm = fm(39960);
    const wm = new RegExp("^([gimus]+)!");
    class Dm {
      constructor(mm) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = mm, this._scene = mm.wG(), this._engine = this._scene.dO()
      }
      _addPlugin(mm) {
        for (let hm = 0; hm < this._plugins.length; ++hm)
          if (this._plugins[hm].name === mm.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !mm.isCompatible(this._material.shaderLanguage)) throw `The plugin "${mm.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const Tm = mm.getClassName();
        Dm._MaterialPluginClassToMainDefine[Tm] || (Dm._MaterialPluginClassToMainDefine[Tm] = "MATERIALPLUGIN_" + ++Dm._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (mm, Tm) => this._handlePluginEvent(mm, Tm), this._plugins.push(mm), this._plugins.sort(((mm, Tm) => mm.priority - Tm.priority)), this._codeInjectionPoints = {};
        const fm = {};
        fm[Dm._MaterialPluginClassToMainDefine[Tm]] = {
          type: "boolean",
          default: !0
        };
        for (const hm of this._plugins) hm.collectDefines(fm), this._collectPointNames("vertex", hm.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", hm.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = fm, !0
      }
      _activatePlugin(mm) {
        -1 === this._activePlugins.indexOf(mm) && (this._activePlugins.push(mm), this._activePlugins.sort(((mm, Tm) => mm.priority - Tm.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), mm.registerForExtraEvents && (this._activePluginsForExtraEvents.push(mm), this._activePluginsForExtraEvents.sort(((mm, Tm) => mm.priority - Tm.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(mm) {
        for (let Tm = 0; Tm < this._plugins.length; ++Tm)
          if (this._plugins[Tm].name === mm) return this._plugins[Tm];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(mm) {
        let Tm = !0;
        for (const fm of this._activePlugins) Tm = Tm && fm.isReadyForSubMesh(mm.defines, this._scene, this._engine, mm.subMesh);
        mm.isReadyForSubMesh = Tm
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(mm) {
        for (const Tm of this._activePlugins) Tm.prepareDefinesBeforeAttributes(mm.defines, this._scene, mm.mesh)
      }
      _handlePluginEventPrepareDefines(mm) {
        for (const Tm of this._activePlugins) Tm.prepareDefines(mm.defines, this._scene, mm.mesh)
      }
      _handlePluginEventHardBindForSubMesh(mm) {
        for (const Tm of this._activePluginsForExtraEvents) Tm.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, mm.subMesh)
      }
      _handlePluginEventBindForSubMesh(mm) {
        for (const Tm of this._activePlugins) Tm.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, mm.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(mm) {
        let Tm = !1;
        for (const fm of this._activePluginsForExtraEvents)
          if (Tm = fm.hasRenderTargetTextures(), Tm) break;
        mm.hasRenderTargetTextures = Tm
      }
      _handlePluginEventFillRenderTargetTextures(mm) {
        for (const Tm of this._activePluginsForExtraEvents) Tm.fillRenderTargetTextures(mm.renderTargets)
      }
      _handlePluginEvent(mm, Tm) {
        switch (mm) {
          case 512: {
            const mm = Tm;
            for (const Tm of this._activePlugins) Tm.getActiveTextures(mm.activeTextures);
            break
          }
          case 256: {
            const mm = Tm;
            for (const Tm of this._activePlugins) Tm.getAnimatables(mm.animatables);
            break
          }
          case 1024: {
            const mm = Tm;
            let fm = !1;
            for (const Tm of this._activePlugins)
              if (fm = Tm.hasTexture(mm.texture), fm) break;
            mm.hasTexture = fm;
            break
          }
          case 2: {
            const mm = Tm;
            for (const Tm of this._plugins) Tm.dispose(mm.forceDisposeTextures);
            break
          }
          case 4:
            Tm.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const mm = Tm;
            for (const Tm of this._activePlugins) mm.fallbackRank = Tm.addFallbacks(mm.defines, mm.fallbacks, mm.fallbackRank), Tm.getAttributes(mm.attributes, this._scene, mm.mesh);
            this._uniformList.length > 0 && mm.uniforms.push(...this._uniformList), this._samplerList.length > 0 && mm.samplers.push(...this._samplerList), this._uboList.length > 0 && mm.uniformBuffersNames.push(...this._uboList), mm.customCode = this._injectCustomCode(mm, mm.customCode);
            break
          }
          case 8: {
            const mm = Tm;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const fm = 1 === this._material.shaderLanguage;
            for (const Tm of this._plugins) {
              const hm = Tm.getUniforms(this._material.shaderLanguage);
              if (hm) {
                if (hm.ubo)
                  for (const Tm of hm.ubo) {
                    if (Tm.size && Tm.type) {
                      const hm = Tm.arraySize ?? 0;
                      if (mm.ubo.addUniform(Tm.name, Tm.size, hm), fm) {
                        let mm;
                        switch (Tm.type) {
                          case "mat4":
                            mm = "mat4x4f";
                            break;
                          case "float":
                            mm = "f32";
                            break;
                          default:
                            mm = `${Tm.type}f`
                        }
                        this._uboDeclaration += hm > 0 ? `uniform ${Tm.name}: array<${mm}, ${hm}>;\n` : `uniform ${Tm.name}: ${mm};\n`
                      } else this._uboDeclaration += `${Tm.type} ${Tm.name}${hm>0?`[${hm}]`:""};\n`
                    }
                    this._uniformList.push(Tm.name)
                  }
                hm.vertex && (this._vertexDeclaration += hm.vertex + "\n"), hm.fragment && (this._fragmentDeclaration += hm.fragment + "\n"), hm.externalUniforms && this._uniformList.push(...hm.externalUniforms)
              }
              Tm.getSamplers(this._samplerList), Tm.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(mm, Tm) {
        if (Tm)
          for (const fm in Tm) this._codeInjectionPoints[mm] || (this._codeInjectionPoints[mm] = {}), this._codeInjectionPoints[mm][fm] = !0
      }
      _injectCustomCode(mm, Tm) {
        return (fm, hm) => {
          Tm && (hm = Tm(fm, hm)), this._uboDeclaration && (hm = hm.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (hm = hm.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (hm = hm.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const Am = this._codeInjectionPoints?.[fm];
          if (!Am) return hm;
          let Dm = null;
          for (let Tm in Am) {
            let Am = "";
            for (const hm of this._activePlugins) {
              const wm = this._material.shaderLanguage;
              let im = hm.getCustomCode(fm, wm)?.[Tm];
              im && (hm.resolveIncludes && (null === Dm && (Dm = {
                defines: [],
                indexParameters: mm.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: xm.e.GetShadersRepository(wm),
                includesShadersStore: xm.e.GetIncludesShadersStore(wm),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                fhm: this._engine.fhm,
                processCodeAfterIncludes: void 0
              }), Dm.isFragment = "fragment" === fm, (0, am.e)(im, Dm, (mm => im = mm))), Am += im + "\n")
            }
            if (Am.length > 0)
              if ("!" === Tm.charAt(0)) {
                Tm = Tm.substring(1);
                let mm = "g";
                if ("!" === Tm.charAt(0)) mm = "", Tm = Tm.substring(1);
                else {
                  const fm = wm.exec(Tm);
                  fm && fm.length >= 2 && (mm = fm[1], Tm = Tm.substring(mm.length + 1))
                }
                mm.indexOf("g") < 0 && (mm += "g");
                const fm = new RegExp(Tm, mm);
                let am = fm.exec(hm);
                for (; null !== am;) {
                  const {
                    index: mm
                  } = am, Tm = im(Am, am);
                  hm = hm.substring(0, mm) + Tm + hm.substring(mm + am[0].length), fm.lastIndex = mm + Tm.length, am = fm.exec(hm)
                }
              } else {
                const mm = "#define " + Tm;
                hm = hm.replace(mm, "\n" + Am + "\n" + mm)
              }
          }
          return hm
        }
      }
    }
    Dm._MaterialPluginClassToMainDefine = {}, Dm._MaterialPluginCounter = 0;

    function im(mm, Tm) {
      return mm.replace(/\$(\d+)/g, ((mm, fm) => {
        const hm = Number(fm);
        return hm < Tm.length ? Tm[hm] : ""
      }))
    }
    var Rm = fm(40129),
      pm = fm(37224);
    let Em = (() => {
        var mm;
        let Tm, fm, am, xm, wm = [],
          im = [],
          pm = [],
          Em = [],
          om = [],
          Om = [],
          Ym = [],
          qm = [];
        return mm = class {
          isCompatible(mm) {
            return 0 === mm
          }
          _enable(mm) {
            mm && this._pluginManager._activatePlugin(this)
          }
          constructor(mm, Tm, fm, Am) {
            let am = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              xm = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              Rm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, hm.i)(this, wm, void 0), this.priority = ((0, hm.i)(this, im), (0, hm.i)(this, pm, 500)), this.resolveIncludes = ((0, hm.i)(this, Em), (0, hm.i)(this, om, !1)), this.registerForExtraEvents = ((0, hm.i)(this, Om), (0, hm.i)(this, Ym, !1)), this.doNotSerialize = ((0, hm.i)(this, qm), !1), this._material = mm, this.name = Tm, this.priority = fm, this.resolveIncludes = Rm, mm.pluginManager || (mm.pluginManager = new Dm(mm), mm.iG.add((() => {
              mm.pluginManager = void 0
            }))), this._pluginDefineNames = Am, this._pluginManager = mm.pluginManager, am && this._pluginManager._addPlugin(this), xm && this._enable(!0), this.markAllDefinesAsDirty = mm._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(mm, Tm, fm, hm) {
            return !0
          }
          hardBindForSubMesh(mm, Tm, fm, hm) {}
          bindForSubMesh(mm, Tm, fm, hm) {}
          dispose(mm) {}
          getCustomCode(mm) {
            return null
          }
          collectDefines(mm) {
            if (this._pluginDefineNames)
              for (const Tm of Object.keys(this._pluginDefineNames)) {
                if ("_" === Tm[0]) continue;
                const fm = typeof this._pluginDefineNames[Tm];
                mm[Tm] = {
                  type: "number" === fm ? "number" : "string" === fm ? "string" : "boolean" === fm ? "boolean" : "object",
                  default: this._pluginDefineNames[Tm]
                }
              }
          }
          prepareDefinesBeforeAttributes(mm, Tm, fm) {}
          prepareDefines(mm, Tm, fm) {}
          hasTexture(mm) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(mm) {}
          getActiveTextures(mm) {}
          getAnimatables(mm) {}
          addFallbacks(mm, Tm, fm) {
            return fm
          }
          getSamplers(mm) {}
          getAttributes(mm, Tm, fm) {}
          getUniformBuffersNames(mm) {}
          getUniforms() {
            return {}
          }
          copyTo(mm) {
            Rm.d.Clone((() => mm), this)
          }
          serialize() {
            return Rm.d.Serialize(this)
          }
          parse(mm, Tm, fm) {
            Rm.d.Parse((() => this), mm, Tm, fm)
          }
        }, (() => {
          const Dm = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Tm = [(0, Am.J)()], fm = [(0, Am.J)()], am = [(0, Am.J)()], xm = [(0, Am.J)()], (0, hm.g)(null, null, Tm, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: mm => "name" in mm,
              get: mm => mm.name,
              set: (mm, Tm) => {
                mm.name = Tm
              }
            },
            metadata: Dm
          }, wm, im), (0, hm.g)(null, null, fm, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: mm => "priority" in mm,
              get: mm => mm.priority,
              set: (mm, Tm) => {
                mm.priority = Tm
              }
            },
            metadata: Dm
          }, pm, Em), (0, hm.g)(null, null, am, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: mm => "resolveIncludes" in mm,
              get: mm => mm.resolveIncludes,
              set: (mm, Tm) => {
                mm.resolveIncludes = Tm
              }
            },
            metadata: Dm
          }, om, Om), (0, hm.g)(null, null, xm, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: mm => "registerForExtraEvents" in mm,
              get: mm => mm.registerForExtraEvents,
              set: (mm, Tm) => {
                mm.registerForExtraEvents = Tm
              }
            },
            metadata: Dm
          }, Ym, qm), Dm && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Dm
          })
        })(), mm
      })(),
      om = !1;

    function Om() {
      om || (om = !0, (0, pm.d)("BABYLON.MaterialPluginBase", Em))
    }
  },
  40369: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm
    });
    class hm {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(mm) {
        mm.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(mm) {}
      bindForSubMesh(mm, Tm, fm, hm, Am) {
        if (Tm.prePassRenderer && Tm.prePassRenderer.enabled && Tm.prePassRenderer.currentRTisSceneRT && (-1 !== Tm.prePassRenderer.getIndex(2) || -1 !== Tm.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[fm.uniqueId] || (this.previousWorldMatrices[fm.uniqueId] = hm.clone()), this.previousViewProjection || (this.previousViewProjection = Tm.getTransformMatrix().clone(), this.currentViewProjection = Tm.getTransformMatrix().clone());
          const Am = Tm.dO();
          this.currentViewProjection.updateFlag !== Tm.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = Am.frameId, this.previousViewProjection.ZZ(this.currentViewProjection), this.currentViewProjection.ZZ(Tm.getTransformMatrix())) : this._lastUpdateFrameId !== Am.frameId && (this._lastUpdateFrameId = Am.frameId, this.previousViewProjection.ZZ(this.currentViewProjection)), mm.setMatrix("previousWorld", this.previousWorldMatrices[fm.uniqueId]), mm.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[fm.uniqueId] = hm.clone()
        }
      }
    }
  },
  40493: (mm, Tm, fm) => {
    function hm(mm) {
      return class extends mm {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    fm.d(Tm, {
      b: () => hm
    })
  },
  40357: (mm, Tm, fm) => {
    fm.d(Tm, {
      StandardMaterial: () => hm.h
    });
    var hm = fm(40364);
    (0, hm.d)()
  },
  40364: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Hm,
      h: () => Xm
    });
    var hm = fm(40113),
      Am = fm(40119),
      am = fm(40220),
      xm = fm(40199),
      wm = fm(37336),
      Dm = fm(40251),
      im = fm(40369),
      Rm = fm(40371),
      pm = fm(40226),
      Em = fm(40383),
      om = fm(40379),
      Om = fm(40445),
      Ym = fm(40440),
      qm = fm(40447),
      jm = fm(40453),
      Vm = fm(40432),
      Im = fm(40465),
      Km = fm(40428),
      Qm = fm(40129),
      nm = fm(40474),
      Jm = fm(40483),
      cm = fm(40491),
      zm = fm(40493),
      Zm = fm(40498),
      km = fm(37224),
      bm = fm(39993);
    const Sm = {
      effect: null,
      subMesh: null
    };
    class em extends((0, zm.b)((0, cm.e)(om.c))) {}
    class Nm extends((0, Rm.e)(em)) {
      constructor(mm) {
        super(mm), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class Gm extends((0, Zm.c)(Om.d)) {}
    let Xm = (() => {
        var mm, Tm, Rm, om, cm, zm, Zm, km, bm, em, Xm, Pm, Hm, ym, Cm, rm, sm, lm, Mm, um, Bm, Lm, tm, Um, dm, gm, Wm, Fm, mT, TT, fT, hT, AT;
        let aT, xT, wT, DT, iT, RT, pT, ET, oT, OT, YT, qT, jT, VT, IT, KT, QT, nT, JT, cT, zT, ZT, kT, bT, ST, eT, NT, GT, XT, PT, HT, yT, CT, rT, sT, lT, MT, uT, BT, LT, vT, tT, UT, dT, gT, WT, FT, mf, Tf, ff, hf, Af, af, xf, wf, Df, Rf, pf, Ef, of, Of, Yf, qf, jf, Vf, If, Kf, Qf, nf, Jf, zf, Zf, kf, bf = Gm,
          Sf = [],
          ef = [],
          Nf = [],
          Gf = [],
          Xf = [],
          Pf = [],
          Hf = [],
          yf = [],
          Cf = [],
          rf = [],
          sf = [],
          lf = [],
          Mf = [],
          uf = [],
          Bf = [],
          Lf = [],
          vf = [],
          tf = [],
          Uf = [],
          df = [],
          gf = [],
          Wf = [],
          Ff = [],
          mh = [],
          Th = [],
          fh = [],
          hh = [],
          Ah = [],
          ah = [],
          xh = [],
          wh = [],
          Dh = [],
          ih = [],
          Rh = [],
          ph = [],
          Eh = [],
          oh = [],
          Oh = [],
          Yh = [],
          qh = [],
          jh = [],
          Vh = [],
          Ih = [],
          Kh = [],
          Qh = [],
          nh = [],
          Jh = [],
          ch = [],
          zh = [],
          Zh = [],
          kh = [],
          bh = [],
          Sh = [],
          eh = [],
          Nh = [],
          Gh = [],
          Xh = [],
          Ph = [],
          Hh = [],
          yh = [],
          Ch = [],
          rh = [],
          sh = [],
          lh = [],
          Mh = [],
          uh = [],
          Bh = [],
          Lh = [],
          vh = [],
          th = [],
          Uh = [],
          dh = [],
          gh = [],
          Wh = [],
          Fh = [],
          mA = [],
          TA = [],
          fA = [],
          hA = [],
          AA = [],
          aA = [],
          xA = [],
          wA = [],
          DA = [],
          iA = [],
          RA = [],
          pA = [],
          EA = [],
          oA = [],
          OA = [],
          YA = [],
          qA = [],
          jA = [],
          VA = [],
          IA = [],
          KA = [],
          QA = [],
          nA = [],
          JA = [],
          cA = [],
          zA = [],
          ZA = [],
          kA = [],
          bA = [],
          SA = [],
          eA = [],
          NA = [],
          GA = [],
          XA = [],
          PA = [],
          HA = [],
          yA = [],
          CA = [],
          rA = [],
          sA = [],
          lA = [],
          MA = [],
          uA = [],
          BA = [],
          LA = [],
          vA = [],
          tA = [],
          UA = [],
          dA = [],
          gA = [],
          WA = [],
          FA = [],
          ma = [],
          Ta = [],
          fa = [],
          ha = [],
          Aa = [],
          aa = [],
          xa = [],
          wa = [],
          Da = [],
          ia = [],
          Ra = [],
          pa = [],
          Ea = [],
          oa = [],
          Oa = [],
          Ya = [],
          qa = [],
          ja = [],
          Va = [];
        return mm = class extends bf {
          get diffuseTexture() {
            return (0, hm.b)(this, Tm, "f")
          }
          set diffuseTexture(mm) {
            (0, hm.c)(this, Tm, mm, "f")
          }
          get ambientTexture() {
            return (0, hm.b)(this, Rm, "f")
          }
          set ambientTexture(mm) {
            (0, hm.c)(this, Rm, mm, "f")
          }
          get opacityTexture() {
            return (0, hm.b)(this, om, "f")
          }
          set opacityTexture(mm) {
            (0, hm.c)(this, om, mm, "f")
          }
          get reflectionTexture() {
            return (0, hm.b)(this, cm, "f")
          }
          set reflectionTexture(mm) {
            (0, hm.c)(this, cm, mm, "f")
          }
          get emissiveTexture() {
            return (0, hm.b)(this, zm, "f")
          }
          set emissiveTexture(mm) {
            (0, hm.c)(this, zm, mm, "f")
          }
          get specularTexture() {
            return (0, hm.b)(this, Zm, "f")
          }
          set specularTexture(mm) {
            (0, hm.c)(this, Zm, mm, "f")
          }
          get bumpTexture() {
            return (0, hm.b)(this, km, "f")
          }
          set bumpTexture(mm) {
            (0, hm.c)(this, km, mm, "f")
          }
          get lightmapTexture() {
            return (0, hm.b)(this, bm, "f")
          }
          set lightmapTexture(mm) {
            (0, hm.c)(this, bm, mm, "f")
          }
          get refractionTexture() {
            return (0, hm.b)(this, em, "f")
          }
          set refractionTexture(mm) {
            (0, hm.c)(this, em, mm, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, hm.b)(this, Xm, "f")
          }
          set useAlphaFromDiffuseTexture(mm) {
            (0, hm.c)(this, Xm, mm, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, hm.b)(this, Pm, "f")
          }
          set useEmissiveAsIllumination(mm) {
            (0, hm.c)(this, Pm, mm, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, hm.b)(this, Hm, "f")
          }
          set linkEmissiveWithDiffuse(mm) {
            (0, hm.c)(this, Hm, mm, "f")
          }
          get useSpecularOverAlpha() {
            return (0, hm.b)(this, ym, "f")
          }
          set useSpecularOverAlpha(mm) {
            (0, hm.c)(this, ym, mm, "f")
          }
          get useReflectionOverAlpha() {
            return (0, hm.b)(this, Cm, "f")
          }
          set useReflectionOverAlpha(mm) {
            (0, hm.c)(this, Cm, mm, "f")
          }
          get disableLighting() {
            return (0, hm.b)(this, rm, "f")
          }
          set disableLighting(mm) {
            (0, hm.c)(this, rm, mm, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, hm.b)(this, sm, "f")
          }
          set useObjectSpaceNormalMap(mm) {
            (0, hm.c)(this, sm, mm, "f")
          }
          get useParallax() {
            return (0, hm.b)(this, lm, "f")
          }
          set useParallax(mm) {
            (0, hm.c)(this, lm, mm, "f")
          }
          get useParallaxOcclusion() {
            return (0, hm.b)(this, Mm, "f")
          }
          set useParallaxOcclusion(mm) {
            (0, hm.c)(this, Mm, mm, "f")
          }
          get roughness() {
            return (0, hm.b)(this, um, "f")
          }
          set roughness(mm) {
            (0, hm.c)(this, um, mm, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, hm.b)(this, Bm, "f")
          }
          set useLightmapAsShadowmap(mm) {
            (0, hm.c)(this, Bm, mm, "f")
          }
          get diffuseFresnelParameters() {
            return (0, hm.b)(this, Lm, "f")
          }
          set diffuseFresnelParameters(mm) {
            (0, hm.c)(this, Lm, mm, "f")
          }
          get opacityFresnelParameters() {
            return (0, hm.b)(this, tm, "f")
          }
          set opacityFresnelParameters(mm) {
            (0, hm.c)(this, tm, mm, "f")
          }
          get reflectionFresnelParameters() {
            return (0, hm.b)(this, Um, "f")
          }
          set reflectionFresnelParameters(mm) {
            (0, hm.c)(this, Um, mm, "f")
          }
          get refractionFresnelParameters() {
            return (0, hm.b)(this, dm, "f")
          }
          set refractionFresnelParameters(mm) {
            (0, hm.c)(this, dm, mm, "f")
          }
          get emissiveFresnelParameters() {
            return (0, hm.b)(this, gm, "f")
          }
          set emissiveFresnelParameters(mm) {
            (0, hm.c)(this, gm, mm, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, hm.b)(this, Wm, "f")
          }
          set useReflectionFresnelFromSpecular(mm) {
            (0, hm.c)(this, Wm, mm, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, hm.b)(this, Fm, "f")
          }
          set useGlossinessFromSpecularMapAlpha(mm) {
            (0, hm.c)(this, Fm, mm, "f")
          }
          get maxSimultaneousLights() {
            return (0, hm.b)(this, mT, "f")
          }
          set maxSimultaneousLights(mm) {
            (0, hm.c)(this, mT, mm, "f")
          }
          get invertNormalMapX() {
            return (0, hm.b)(this, TT, "f")
          }
          set invertNormalMapX(mm) {
            (0, hm.c)(this, TT, mm, "f")
          }
          get invertNormalMapY() {
            return (0, hm.b)(this, fT, "f")
          }
          set invertNormalMapY(mm) {
            (0, hm.c)(this, fT, mm, "f")
          }
          get twoSidedLighting() {
            return (0, hm.b)(this, hT, "f")
          }
          set twoSidedLighting(mm) {
            (0, hm.c)(this, hT, mm, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, hm.b)(this, AT, "f")
          }
          set applyDecalMapAfterDetailMap(mm) {
            (0, hm.c)(this, AT, mm, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(fm, Am) {
            super(fm, Am, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || mm.ForceGLSL), this._diffuseTexture = (0, hm.i)(this, Sf, null), Tm.set(this, ((0, hm.i)(this, ef), (0, hm.i)(this, Nf, void 0))), this._ambientTexture = ((0, hm.i)(this, Gf), (0, hm.i)(this, Xf, null)), Rm.set(this, ((0, hm.i)(this, Pf), (0, hm.i)(this, Hf, void 0))), this._opacityTexture = ((0, hm.i)(this, yf), (0, hm.i)(this, Cf, null)), om.set(this, ((0, hm.i)(this, rf), (0, hm.i)(this, sf, void 0))), this._reflectionTexture = ((0, hm.i)(this, lf), (0, hm.i)(this, Mf, null)), cm.set(this, ((0, hm.i)(this, uf), (0, hm.i)(this, Bf, void 0))), this._emissiveTexture = ((0, hm.i)(this, Lf), (0, hm.i)(this, vf, null)), zm.set(this, ((0, hm.i)(this, tf), (0, hm.i)(this, Uf, void 0))), this._specularTexture = ((0, hm.i)(this, df), (0, hm.i)(this, gf, null)), Zm.set(this, ((0, hm.i)(this, Wf), (0, hm.i)(this, Ff, void 0))), this._bumpTexture = ((0, hm.i)(this, mh), (0, hm.i)(this, Th, null)), km.set(this, ((0, hm.i)(this, fh), (0, hm.i)(this, hh, void 0))), this._lightmapTexture = ((0, hm.i)(this, Ah), (0, hm.i)(this, ah, null)), bm.set(this, ((0, hm.i)(this, xh), (0, hm.i)(this, wh, void 0))), this._refractionTexture = ((0, hm.i)(this, Dh), (0, hm.i)(this, ih, null)), em.set(this, ((0, hm.i)(this, Rh), (0, hm.i)(this, ph, void 0))), this.ambientColor = ((0, hm.i)(this, Eh), (0, hm.i)(this, oh, new wm.b(0, 0, 0))), this.diffuseColor = ((0, hm.i)(this, Oh), (0, hm.i)(this, Yh, new wm.b(1, 1, 1))), this.specularColor = ((0, hm.i)(this, qh), (0, hm.i)(this, jh, new wm.b(1, 1, 1))), this.emissiveColor = ((0, hm.i)(this, Vh), (0, hm.i)(this, Ih, new wm.b(0, 0, 0))), this.specularPower = ((0, hm.i)(this, Kh), (0, hm.i)(this, Qh, 64)), this._useAlphaFromDiffuseTexture = ((0, hm.i)(this, nh), (0, hm.i)(this, Jh, !1)), Xm.set(this, ((0, hm.i)(this, ch), (0, hm.i)(this, zh, void 0))), this._useEmissiveAsIllumination = ((0, hm.i)(this, Zh), (0, hm.i)(this, kh, !1)), Pm.set(this, ((0, hm.i)(this, bh), (0, hm.i)(this, Sh, void 0))), this._linkEmissiveWithDiffuse = ((0, hm.i)(this, eh), (0, hm.i)(this, Nh, !1)), Hm.set(this, ((0, hm.i)(this, Gh), (0, hm.i)(this, Xh, void 0))), this._useSpecularOverAlpha = ((0, hm.i)(this, Ph), (0, hm.i)(this, Hh, !1)), ym.set(this, ((0, hm.i)(this, yh), (0, hm.i)(this, Ch, void 0))), this._useReflectionOverAlpha = ((0, hm.i)(this, rh), (0, hm.i)(this, sh, !1)), Cm.set(this, ((0, hm.i)(this, lh), (0, hm.i)(this, Mh, void 0))), this._disableLighting = ((0, hm.i)(this, uh), (0, hm.i)(this, Bh, !1)), rm.set(this, ((0, hm.i)(this, Lh), (0, hm.i)(this, vh, void 0))), this._useObjectSpaceNormalMap = ((0, hm.i)(this, th), (0, hm.i)(this, Uh, !1)), sm.set(this, ((0, hm.i)(this, dh), (0, hm.i)(this, gh, void 0))), this._useParallax = ((0, hm.i)(this, Wh), (0, hm.i)(this, Fh, !1)), lm.set(this, ((0, hm.i)(this, mA), (0, hm.i)(this, TA, void 0))), this._useParallaxOcclusion = ((0, hm.i)(this, fA), (0, hm.i)(this, hA, !1)), Mm.set(this, ((0, hm.i)(this, AA), (0, hm.i)(this, aA, void 0))), this.parallaxScaleBias = ((0, hm.i)(this, xA), (0, hm.i)(this, wA, .05)), this._roughness = ((0, hm.i)(this, DA), (0, hm.i)(this, iA, 0)), um.set(this, ((0, hm.i)(this, RA), (0, hm.i)(this, pA, void 0))), this.indexOfRefraction = ((0, hm.i)(this, EA), (0, hm.i)(this, oA, .98)), this.invertRefractionY = ((0, hm.i)(this, OA), (0, hm.i)(this, YA, !0)), this.alphaCutOff = ((0, hm.i)(this, qA), (0, hm.i)(this, jA, .4)), this._useLightmapAsShadowmap = ((0, hm.i)(this, VA), (0, hm.i)(this, IA, !1)), Bm.set(this, ((0, hm.i)(this, KA), (0, hm.i)(this, QA, void 0))), this._diffuseFresnelParameters = ((0, hm.i)(this, nA), (0, hm.i)(this, JA, void 0)), Lm.set(this, ((0, hm.i)(this, cA), (0, hm.i)(this, zA, void 0))), this._opacityFresnelParameters = ((0, hm.i)(this, ZA), (0, hm.i)(this, kA, void 0)), tm.set(this, ((0, hm.i)(this, bA), (0, hm.i)(this, SA, void 0))), this._reflectionFresnelParameters = ((0, hm.i)(this, eA), (0, hm.i)(this, NA, void 0)), Um.set(this, ((0, hm.i)(this, GA), (0, hm.i)(this, XA, void 0))), this._refractionFresnelParameters = ((0, hm.i)(this, PA), (0, hm.i)(this, HA, void 0)), dm.set(this, ((0, hm.i)(this, yA), (0, hm.i)(this, CA, void 0))), this._emissiveFresnelParameters = ((0, hm.i)(this, rA), (0, hm.i)(this, sA, void 0)), gm.set(this, ((0, hm.i)(this, lA), (0, hm.i)(this, MA, void 0))), this._useReflectionFresnelFromSpecular = ((0, hm.i)(this, uA), (0, hm.i)(this, BA, !1)), Wm.set(this, ((0, hm.i)(this, LA), (0, hm.i)(this, vA, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, hm.i)(this, tA), (0, hm.i)(this, UA, !1)), Fm.set(this, ((0, hm.i)(this, dA), (0, hm.i)(this, gA, void 0))), this._maxSimultaneousLights = ((0, hm.i)(this, WA), (0, hm.i)(this, FA, 4)), mT.set(this, ((0, hm.i)(this, ma), (0, hm.i)(this, Ta, void 0))), this._invertNormalMapX = ((0, hm.i)(this, fa), (0, hm.i)(this, ha, !1)), TT.set(this, ((0, hm.i)(this, Aa), (0, hm.i)(this, aa, void 0))), this._invertNormalMapY = ((0, hm.i)(this, xa), (0, hm.i)(this, wa, !1)), fT.set(this, ((0, hm.i)(this, Da), (0, hm.i)(this, ia, void 0))), this._twoSidedLighting = ((0, hm.i)(this, Ra), (0, hm.i)(this, pa, !1)), hT.set(this, ((0, hm.i)(this, Ea), (0, hm.i)(this, oa, void 0))), this._applyDecalMapAfterDetailMap = ((0, hm.i)(this, Oa), (0, hm.i)(this, Ya, !1)), AT.set(this, ((0, hm.i)(this, qa), (0, hm.i)(this, ja, void 0))), this._vertexPullingMetadata = ((0, hm.i)(this, Va), null), this._renderTargets = new am.f(16), this._globalAmbientColor = new wm.b(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new jm.d(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new im.c, this.getRenderTargetTextures = () => (this._renderTargets.reset(), mm.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), mm.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(mm.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(mm.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === Em.d.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== Em.d.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(Tm, fm) {
            let hm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Am = fm._drawWrapper;
            if (Am.effect && this.isFrozen && Am._wasPreviouslyReady && Am._wasPreviouslyUsingInstances === hm) return !0;
            fm.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), fm.materialDefines = new Nm(this._eventInfo.defineNames));
            const am = this.wG(),
              xm = fm.materialDefines;
            if (this._isReadyForSubMesh(fm)) return !0;
            const wm = am.dO();
            if (xm._needNormals = (0, Km.Z)(am, Tm, xm, !0, this._maxSimultaneousLights, this._disableLighting), !(0, Km.e)(am, Tm, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, Km.fb)(am, xm);
            const Rm = this.needAlphaBlendingForMesh(Tm) && this.wG().useOrderIndependentTransparency;
            if ((0, Km.ib)(am, xm, this.canRenderToMRT && !Rm), (0, Km.gb)(am, xm, Rm), Jm.c.PrepareDefines(wm.currentRenderPassId, Tm, xm), xm._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, xm._needUVs = !1;
              for (let mm = 1; mm <= 6; ++mm) xm["MAINUV" + mm] = !1;
              if (am.texturesEnabled) {
                if (xm.DIFFUSEDIRECTUV = 0, xm.BUMPDIRECTUV = 0, xm.AMBIENTDIRECTUV = 0, xm.OPACITYDIRECTUV = 0, xm.EMISSIVEDIRECTUV = 0, xm.SPECULARDIRECTUV = 0, xm.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && mm.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, Km.$)(this._diffuseTexture, xm, "DIFFUSE")
                } else xm.DIFFUSE = !1;
                if (this._ambientTexture && mm.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, Km.$)(this._ambientTexture, xm, "AMBIENT")
                } else xm.AMBIENT = !1;
                if (this._opacityTexture && mm.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, Km.$)(this._opacityTexture, xm, "OPACITY"), xm.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else xm.OPACITY = !1;
                if (this._reflectionTexture && mm.ReflectionTextureEnabled ? (xm.ROUGHNESS = this._roughness > 0, xm.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (xm.ROUGHNESS = !1, xm.REFLECTIONOVERALPHA = !1), !(0, Km.V)(am, this._reflectionTexture, xm)) return !1;
                if (this._emissiveTexture && mm.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, Km.$)(this._emissiveTexture, xm, "EMISSIVE")
                } else xm.EMISSIVE = !1;
                if (this._lightmapTexture && mm.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, Km.$)(this._lightmapTexture, xm, "LIGHTMAP"), xm.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, xm.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else xm.LIGHTMAP = !1;
                if (this._specularTexture && mm.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, Km.$)(this._specularTexture, xm, "SPECULAR"), xm.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else xm.SPECULAR = !1;
                if (am.dO().getCaps().standardDerivatives && this._bumpTexture && mm.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, Km.$)(this._bumpTexture, xm, "BUMP"), xm.PARALLAX = this._useParallax, xm.PARALLAX_RHS = am.useRightHandedSystem, xm.PARALLAXOCCLUSION = this._useParallaxOcclusion, xm.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else xm.BUMP = !1, xm.PARALLAX = !1, xm.PARALLAX_RHS = !1, xm.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && mm.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  xm._needUVs = !0, xm.REFRACTION = !0, xm.REFRACTIONMAP_3D = this._refractionTexture.isCube, xm.RGBDREFRACTION = this._refractionTexture.isRGBD, xm.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else xm.REFRACTION = !1;
                xm.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else xm.DIFFUSE = !1, xm.AMBIENT = !1, xm.OPACITY = !1, xm.REFLECTION = !1, xm.EMISSIVE = !1, xm.LIGHTMAP = !1, xm.BUMP = !1, xm.REFRACTION = !1;
              xm.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), xm.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, xm.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, xm.SPECULAROVERALPHA = this._useSpecularOverAlpha, xm.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, xm.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, xm.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(Tm), xm.TEXTURE_REPETITION_MODE = wm.version > 1 || wm.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = xm, this._eventInfo.subMesh = fm, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (xm._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(xm), xm.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, xm.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (xm._areFresnelDirty && (mm.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (xm.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, xm.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, xm.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, xm.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, xm.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, xm.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, xm._needNormals = !0, xm.FRESNEL = !0) : xm.FRESNEL = !1), xm.AREALIGHTUSED || xm.CLUSTLIGHT_BATCH)
              for (let mm = 0; mm < Tm.lightSources.length; mm++)
                if (!Tm.lightSources[mm]._isReady()) return !1;
            (0, Km.db)(Tm, am, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Tm), xm, this._applyDecalMapAfterDetailMap, this._useVertexPulling, fm.getRenderingMesh(), this._isVertexOutputInvariant), (0, Km.U)(am, wm, this, xm, hm, null, fm.getRenderingMesh().hasThinInstances), this._eventInfo.defines = xm, this._eventInfo.mesh = Tm, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Km.Q)(Tm, xm, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let Em = !1;
            if (xm.isDirty) {
              const hm = xm._areLightsDisposed;
              xm.markAsProcessed();
              const Am = new qm.e;
              xm.REFLECTION && Am.addFallback(0, "REFLECTION"), xm.SPECULAR && Am.addFallback(0, "SPECULAR"), xm.BUMP && Am.addFallback(0, "BUMP"), xm.PARALLAX && Am.addFallback(1, "PARALLAX"), xm.PARALLAX_RHS && Am.addFallback(1, "PARALLAX_RHS"), xm.PARALLAXOCCLUSION && Am.addFallback(0, "PARALLAXOCCLUSION"), xm.SPECULAROVERALPHA && Am.addFallback(0, "SPECULAROVERALPHA"), xm.FOG && Am.addFallback(1, "FOG"), xm.POINTSIZE && Am.addFallback(0, "POINTSIZE"), xm.LOGARITHMICDEPTH && Am.addFallback(0, "LOGARITHMICDEPTH"), (0, Km.A)(xm, Am, this._maxSimultaneousLights), xm.SPECULARTERM && Am.addFallback(0, "SPECULARTERM"), xm.DIFFUSEFRESNEL && Am.addFallback(1, "DIFFUSEFRESNEL"), xm.OPACITYFRESNEL && Am.addFallback(2, "OPACITYFRESNEL"), xm.REFLECTIONFRESNEL && Am.addFallback(3, "REFLECTIONFRESNEL"), xm.EMISSIVEFRESNEL && Am.addFallback(4, "EMISSIVEFRESNEL"), xm.FRESNEL && Am.addFallback(4, "FRESNEL"), xm.MULTIVIEW && Am.addFallback(0, "MULTIVIEW");
              const Rm = [Dm.m.PositionKind];
              xm.NORMAL && Rm.push(Dm.m.NormalKind), xm.TANGENT && Rm.push(Dm.m.TangentKind);
              for (let mm = 1; mm <= 6; ++mm) xm["UV" + mm] && Rm.push(`uv${1===mm?"":mm}`);
              xm.VERTEXCOLOR && Rm.push(Dm.m.ColorKind), (0, Km.F)(Rm, Tm, xm, Am), (0, Km.J)(Rm, xm), (0, Km.L)(Rm, Tm, xm), (0, Km.E)(Rm, Tm, xm);
              let om = "default";
              const Om = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                Ym = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, Km.mb)(Om, Ym, !1);
              const jm = ["Material", "Scene", "Mesh"],
                Qm = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: xm.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = Am, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = xm, this._eventInfo.uniforms = Om, this._eventInfo.attributes = Rm, this._eventInfo.samplers = Ym, this._eventInfo.uniformBuffersNames = jm, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Tm, this._eventInfo.indexParameters = Qm, this._callbackPluginEventGeneric(128, this._eventInfo), Jm.c.AddUniformsAndSamplers(Om, Ym), im.c.AddUniforms(Om), im.c.AddSamplers(Ym), pm.c && (pm.c.PrepareUniforms(Om, xm), pm.c.PrepareSamplers(Ym, xm)), (0, Km.qb)({
                  uniformsNames: Om,
                  uniformBuffersNames: jm,
                  samplers: Ym,
                  defines: xm,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, Vm.c)(Om), this._useVertexPulling) {
                const mm = fm.getRenderingMesh(),
                  Tm = mm?.geometry;
                Tm && (this._vertexPullingMetadata = (0, Im.f)(Tm), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((mm, Tm) => {
                  Om.push(`vp_${Tm}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const nm = {};
              this.customShaderNameResolve && (om = this.customShaderNameResolve(om, Om, jm, Ym, xm, Rm, nm));
              const cm = xm.toString(),
                zm = fm.effect,
                Zm = am.dO().createEffect(om, {
                  attributes: Rm,
                  uniformsNames: Om,
                  uniformBuffersNames: jm,
                  samplers: Ym,
                  defines: cm,
                  fallbacks: Am,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: Qm,
                  processFinalCode: nm.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: xm.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: mm._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, wm);
              if (this._eventInfo.customCode = void 0, Zm)
                if (this._onEffectCreatedObservable && (Sm.effect = Zm, Sm.subMesh = fm, this._onEffectCreatedObservable.notifyObservers(Sm)), this.allowShaderHotSwapping && zm && !Zm.isReady()) {
                  if (xm.markAsUnprocessed(), Em = this.isFrozen, hm) return xm._areLightsDisposed = !0, !1
                } else am.resetCachedMaterial(), fm.setEffect(Zm, xm, this._materialContext)
            }
            return !(!fm.effect || !fm.effect.isReady()) && (xm._renderId = am.getRenderId(), Am._wasPreviouslyReady = !Em, Am._wasPreviouslyUsingInstances = hm, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const mm = this._uniformBuffer;
            mm.addUniform("diffuseLeftColor", 4), mm.addUniform("diffuseRightColor", 4), mm.addUniform("opacityParts", 4), mm.addUniform("reflectionLeftColor", 4), mm.addUniform("reflectionRightColor", 4), mm.addUniform("refractionLeftColor", 4), mm.addUniform("refractionRightColor", 4), mm.addUniform("emissiveLeftColor", 4), mm.addUniform("emissiveRightColor", 4), mm.addUniform("vDiffuseInfos", 2), mm.addUniform("vAmbientInfos", 2), mm.addUniform("vOpacityInfos", 2), mm.addUniform("vEmissiveInfos", 2), mm.addUniform("vLightmapInfos", 2), mm.addUniform("vSpecularInfos", 2), mm.addUniform("vBumpInfos", 3), mm.addUniform("diffuseMatrix", 16), mm.addUniform("ambientMatrix", 16), mm.addUniform("opacityMatrix", 16), mm.addUniform("emissiveMatrix", 16), mm.addUniform("lightmapMatrix", 16), mm.addUniform("specularMatrix", 16), mm.addUniform("bumpMatrix", 16), mm.addUniform("vTangentSpaceParams", 2), mm.addUniform("pointSize", 1), mm.addUniform("alphaCutOff", 1), mm.addUniform("refractionMatrix", 16), mm.addUniform("vRefractionInfos", 4), mm.addUniform("vRefractionPosition", 3), mm.addUniform("vRefractionSize", 3), mm.addUniform("vSpecularColor", 4), mm.addUniform("vEmissiveColor", 3), mm.addUniform("vDiffuseColor", 4), mm.addUniform("vAmbientColor", 3), mm.addUniform("cameraInfo", 4), mm.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Km.lb)(mm, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(Tm, fm, hm) {
            const Am = this.wG(),
              am = hm.materialDefines;
            if (!am) return;
            const Dm = hm.effect;
            if (!Dm) return;
            this._activeEffect = Dm, fm.getMeshUniformBuffer().bindToEffect(Dm, "Mesh"), fm.transferToEffect(Tm), this._uniformBuffer.bindToEffect(Dm, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Am, fm, Tm, this.isFrozen), Jm.c.Bind(Am.dO().currentRenderPassId, this._activeEffect, fm, Tm, this);
            const im = Am.activeCamera;
            im ? this._uniformBuffer.updateFloat4("cameraInfo", im.minZ, im.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Rm = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Rm[0], Rm[1], Rm[2], Rm[3]), this._eventInfo.subMesh = hm, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), am.OBJECTSPACE_NORMALMAP && (Tm.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const pm = this._mustRebind(Am, Dm, hm, fm.visibility),
              Em = Am.dO()._features.needToAlwaysBindUniformBuffers;
            (0, Km.f)(fm, Dm), this._vertexPullingMetadata && (0, Im.c)(Dm, this._vertexPullingMetadata);
            const om = this._uniformBuffer;
            if (pm) {
              if (this.bindViewProjection(Dm), !om.useUbo || !this.isFrozen || !om.isSync || hm._drawWrapper._forceRebindOnNextCall) {
                if (mm.FresnelEnabled && am.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (om.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), om.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const mm = wm.e.Color3[0];
                    mm.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), om.updateColor4("opacityParts", mm, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (om.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), om.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (om.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), om.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (om.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), om.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (am.ALPHATEST && om.updateFloat("alphaCutOff", this.alphaCutOff), Am.texturesEnabled && (this._diffuseTexture && mm.DiffuseTextureEnabled && (om.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, Km.x)(this._diffuseTexture, om, "diffuse")), this._ambientTexture && mm.AmbientTextureEnabled && (om.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, Km.x)(this._ambientTexture, om, "ambient")), this._opacityTexture && mm.OpacityTextureEnabled && (om.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Km.x)(this._opacityTexture, om, "opacity")), (0, Km.k)(Am, am, om, wm.b.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && mm.ReflectionTextureEnabled || om.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && mm.EmissiveTextureEnabled && (om.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Km.x)(this._emissiveTexture, om, "emissive")), this._lightmapTexture && mm.LightmapTextureEnabled && (om.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Km.x)(this._lightmapTexture, om, "lightmap")), this._specularTexture && mm.SpecularTextureEnabled && (om.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, Km.x)(this._specularTexture, om, "specular")), this._bumpTexture && Am.dO().getCaps().standardDerivatives && mm.BumpTextureEnabled && (om.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, Km.x)(this._bumpTexture, om, "bump"), Am._mirroredCameraPosition ? om.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : om.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && mm.RefractionTextureEnabled)) {
                  let mm = 1;
                  if (this._refractionTexture.isCube || (om.K9("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (mm = this._refractionTexture.depth)), om.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, mm, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const mm = this._refractionTexture;
                    om.updateVector3("vRefractionPosition", mm.boundingBoxPosition), om.updateVector3("vRefractionSize", mm.boundingBoxSize)
                  }
                }
                this.pointsCloud && om.updateFloat("pointSize", this.pointSize), om.updateColor4("vSpecularColor", this.specularColor, this.specularPower), om.updateColor3("vEmissiveColor", mm.EmissiveTextureEnabled ? this.emissiveColor : wm.b.BlackReadOnly), om.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), Am.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), om.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              Am.texturesEnabled && (this._diffuseTexture && mm.DiffuseTextureEnabled && Dm.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && mm.AmbientTextureEnabled && Dm.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && mm.OpacityTextureEnabled && Dm.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && mm.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? Dm.setTexture("reflectionCubeSampler", this._reflectionTexture) : Dm.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && mm.EmissiveTextureEnabled && Dm.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && mm.LightmapTextureEnabled && Dm.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && mm.SpecularTextureEnabled && Dm.setTexture("specularSampler", this._specularTexture), this._bumpTexture && Am.dO().getCaps().standardDerivatives && mm.BumpTextureEnabled && Dm.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && mm.RefractionTextureEnabled && (this._refractionTexture.isCube ? Dm.setTexture("refractionCubeSampler", this._refractionTexture) : Dm.setTexture("refraction2DSampler", this._refractionTexture))), this.wG().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(fm) && this.wG().depthPeelingRenderer.bind(Dm), this._eventInfo.subMesh = hm, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Vm.d)(Dm, this, Am), this.bindEyePosition(Dm)
            } else Em && (this._needToBindSceneUbo = !0);
            !pm && this.isFrozen && !Em || !Am.lightsEnabled || this._disableLighting || (0, Km.p)(Am, fm, Dm, am, this._maxSimultaneousLights), !pm && this.isFrozen || ((Am.fogEnabled && fm.applyFog && Am.fogMode !== xm.f.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || fm.receiveShadows || am.PREPASS || am.CLUSTLIGHT_BATCH) && this.bindView(Dm), (0, Km.j)(Am, fm, Dm), am.NUM_MORPH_INFLUENCERS && (0, Km.s)(fm, Dm), am.BAKED_VERTEX_ANIMATION_TEXTURE && fm.bakedVertexAnimationManager?.bind(Dm, am.INSTANCES), this.useLogarithmicDepth && (0, Km.r)(am, Dm, Am), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(fm, this._activeEffect, hm), om.update()
          }
          _canBindRunFollower(Tm, fm, hm, Am, am) {
            const xm = Tm.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === mm.prototype.isReadyForSubMesh && this.bindForSubMesh === mm.prototype.bindForSubMesh && this._mustRebind === Om.d.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !fm._features.needToAlwaysBindUniformBuffers && !(xm && xm.enabled && xm.currentRTisSceneRT) && !Jm.c._Configurations[fm.currentRenderPassId] && !Am.materialDefines?.OBJECTSPACE_NORMALMAP && !hm.skeleton && !am._bonesComputationForcedToCPU
          }
          _bindRunFollower(mm, Tm, fm, hm) {
            this._activeEffect = hm, Tm.getMeshUniformBuffer().bindToEffect(hm, "Mesh"), Tm.transferToEffect(mm);
            const Am = this._uniformBuffer;
            Am.bindToEffect(hm, "Material");
            const am = this._scene.activeCamera;
            am ? Am.updateFloat4("cameraInfo", am.minZ, am.maxZ, 0, 0) : Am.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const xm = this.textureRepetitionHexTilingParams;
            Am.updateFloat4("vTextureRepetitionHexTilingParams", xm[0], xm[1], xm[2], xm[3]), this._afterBind(Tm, hm, fm), Am.update()
          }
          getAnimatables() {
            const mm = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && mm.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && mm.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && mm.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && mm.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && mm.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && mm.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && mm.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && mm.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && mm.push(this._refractionTexture), mm
          }
          getActiveTextures() {
            const mm = super.getActiveTextures();
            return this._diffuseTexture && mm.push(this._diffuseTexture), this._ambientTexture && mm.push(this._ambientTexture), this._opacityTexture && mm.push(this._opacityTexture), this._reflectionTexture && mm.push(this._reflectionTexture), this._emissiveTexture && mm.push(this._emissiveTexture), this._specularTexture && mm.push(this._specularTexture), this._bumpTexture && mm.push(this._bumpTexture), this._lightmapTexture && mm.push(this._lightmapTexture), this._refractionTexture && mm.push(this._refractionTexture), mm
          }
          hasTexture(mm) {
            return !!super.hasTexture(mm) || (this._diffuseTexture === mm || (this._ambientTexture === mm || (this._opacityTexture === mm || (this._reflectionTexture === mm || (this._emissiveTexture === mm || (this._specularTexture === mm || (this._bumpTexture === mm || (this._lightmapTexture === mm || this._refractionTexture === mm))))))))
          }
          dispose(mm, Tm) {
            Tm && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(mm, Tm)
          }
          clone(Tm) {
            let fm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Am = Qm.d.Clone((() => new mm(Tm, this.wG())), this, {
              cloneTexturesOnlyOnce: fm
            });
            return Am.name = Tm, Am.id = Tm, this.stencil.copyTo(Am.stencil), this._clonePlugins(Am, hm), Am
          }
          static Parse(Tm, fm, hm) {
            const Am = Qm.d.Parse((() => new mm(Tm.name, fm)), Tm, fm, hm);
            return Tm.stencil && Am.stencil.parse(Tm.stencil, fm, hm), Em.d._ParsePlugins(Tm, Am, fm, hm), Am
          }
          static get DiffuseTextureEnabled() {
            return Ym.d.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(mm) {
            Ym.d.DiffuseTextureEnabled = mm
          }
          static get DetailTextureEnabled() {
            return Ym.d.DetailTextureEnabled
          }
          static set DetailTextureEnabled(mm) {
            Ym.d.DetailTextureEnabled = mm
          }
          static get AmbientTextureEnabled() {
            return Ym.d.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(mm) {
            Ym.d.AmbientTextureEnabled = mm
          }
          static get OpacityTextureEnabled() {
            return Ym.d.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(mm) {
            Ym.d.OpacityTextureEnabled = mm
          }
          static get ReflectionTextureEnabled() {
            return Ym.d.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(mm) {
            Ym.d.ReflectionTextureEnabled = mm
          }
          static get EmissiveTextureEnabled() {
            return Ym.d.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(mm) {
            Ym.d.EmissiveTextureEnabled = mm
          }
          static get SpecularTextureEnabled() {
            return Ym.d.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(mm) {
            Ym.d.SpecularTextureEnabled = mm
          }
          static get BumpTextureEnabled() {
            return Ym.d.BumpTextureEnabled
          }
          static set BumpTextureEnabled(mm) {
            Ym.d.BumpTextureEnabled = mm
          }
          static get LightmapTextureEnabled() {
            return Ym.d.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(mm) {
            Ym.d.LightmapTextureEnabled = mm
          }
          static get RefractionTextureEnabled() {
            return Ym.d.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(mm) {
            Ym.d.RefractionTextureEnabled = mm
          }
          static get ColorGradingTextureEnabled() {
            return Ym.d.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(mm) {
            Ym.d.ColorGradingTextureEnabled = mm
          }
          static get FresnelEnabled() {
            return Ym.d.FresnelEnabled
          }
          static set FresnelEnabled(mm) {
            Ym.d.FresnelEnabled = mm
          }
        }, Tm = new WeakMap, Rm = new WeakMap, om = new WeakMap, cm = new WeakMap, zm = new WeakMap, Zm = new WeakMap, km = new WeakMap, bm = new WeakMap, em = new WeakMap, Xm = new WeakMap, Pm = new WeakMap, Hm = new WeakMap, ym = new WeakMap, Cm = new WeakMap, rm = new WeakMap, sm = new WeakMap, lm = new WeakMap, Mm = new WeakMap, um = new WeakMap, Bm = new WeakMap, Lm = new WeakMap, tm = new WeakMap, Um = new WeakMap, dm = new WeakMap, gm = new WeakMap, Wm = new WeakMap, Fm = new WeakMap, mT = new WeakMap, TT = new WeakMap, fT = new WeakMap, hT = new WeakMap, AT = new WeakMap, (() => {
          const Tm = "function" === typeof Symbol && Symbol.metadata ? Object.create(bf[Symbol.metadata] ?? null) : void 0;
          aT = [(0, Am.A)("diffuseTexture")], xT = [(0, Am.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], wT = [(0, Am.A)("ambientTexture")], DT = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], iT = [(0, Am.A)("opacityTexture")], RT = [(0, Am.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], pT = [(0, Am.A)("reflectionTexture")], ET = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], oT = [(0, Am.A)("emissiveTexture")], OT = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], YT = [(0, Am.A)("specularTexture")], qT = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], jT = [(0, Am.A)("bumpTexture")], VT = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], IT = [(0, Am.A)("lightmapTexture")], KT = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], QT = [(0, Am.A)("refractionTexture")], nT = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], JT = [(0, Am.k)("ambient")], cT = [(0, Am.k)("diffuse")], zT = [(0, Am.k)("specular")], ZT = [(0, Am.k)("emissive")], kT = [(0, Am.J)()], bT = [(0, Am.J)("useAlphaFromDiffuseTexture")], ST = [() => ({
            init(mm) {
              return void 0 === mm && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = mm), mm
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(mm) {
              this._useAlphaFromDiffuseTexture = mm
            }
          })], eT = [(0, Am.J)("useEmissiveAsIllumination")], NT = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], GT = [(0, Am.J)("linkEmissiveWithDiffuse")], XT = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], PT = [(0, Am.J)("useSpecularOverAlpha")], HT = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], yT = [(0, Am.J)("useReflectionOverAlpha")], CT = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], rT = [(0, Am.J)("disableLighting")], sT = [(0, Am.c)("_markAllSubMeshesAsLightsDirty")], lT = [(0, Am.J)("useObjectSpaceNormalMap")], MT = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], uT = [(0, Am.J)("useParallax")], BT = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], LT = [(0, Am.J)("useParallaxOcclusion")], vT = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], tT = [(0, Am.J)()], UT = [(0, Am.J)("roughness")], dT = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], gT = [(0, Am.J)()], WT = [(0, Am.J)()], FT = [(0, Am.J)()], mf = [(0, Am.J)("useLightmapAsShadowmap")], Tf = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], ff = [(0, Am.s)("diffuseFresnelParameters")], hf = [(0, Am.c)("_markAllSubMeshesAsFresnelDirty")], Af = [(0, Am.s)("opacityFresnelParameters")], af = [(0, Am.c)("_markAllSubMeshesAsFresnelAndMiscDirty")], xf = [(0, Am.s)("reflectionFresnelParameters")], wf = [(0, Am.c)("_markAllSubMeshesAsFresnelDirty")], Df = [(0, Am.s)("refractionFresnelParameters")], Rf = [(0, Am.c)("_markAllSubMeshesAsFresnelDirty")], pf = [(0, Am.s)("emissiveFresnelParameters")], Ef = [(0, Am.c)("_markAllSubMeshesAsFresnelDirty")], of = [(0, Am.J)("useReflectionFresnelFromSpecular")], Of = [(0, Am.c)("_markAllSubMeshesAsFresnelDirty")], Yf = [(0, Am.J)("useGlossinessFromSpecularMapAlpha")], qf = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], jf = [(0, Am.J)("maxSimultaneousLights")], Vf = [(0, Am.c)("_markAllSubMeshesAsLightsDirty")], If = [(0, Am.J)("invertNormalMapX")], Kf = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], Qf = [(0, Am.J)("invertNormalMapY")], nf = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], Jf = [(0, Am.J)("twoSidedLighting")], zf = [(0, Am.c)("_markAllSubMeshesAsTexturesDirty")], Zf = [(0, Am.J)("applyDecalMapAfterDetailMap")], kf = [(0, Am.c)("_markAllSubMeshesAsMiscDirty")], (0, hm.g)(mm, null, xT, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "diffuseTexture" in mm,
              get: mm => mm.diffuseTexture,
              set: (mm, Tm) => {
                mm.diffuseTexture = Tm
              }
            },
            metadata: Tm
          }, Nf, Gf), (0, hm.g)(mm, null, DT, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "ambientTexture" in mm,
              get: mm => mm.ambientTexture,
              set: (mm, Tm) => {
                mm.ambientTexture = Tm
              }
            },
            metadata: Tm
          }, Hf, yf), (0, hm.g)(mm, null, RT, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "opacityTexture" in mm,
              get: mm => mm.opacityTexture,
              set: (mm, Tm) => {
                mm.opacityTexture = Tm
              }
            },
            metadata: Tm
          }, sf, lf), (0, hm.g)(mm, null, ET, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "reflectionTexture" in mm,
              get: mm => mm.reflectionTexture,
              set: (mm, Tm) => {
                mm.reflectionTexture = Tm
              }
            },
            metadata: Tm
          }, Bf, Lf), (0, hm.g)(mm, null, OT, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "emissiveTexture" in mm,
              get: mm => mm.emissiveTexture,
              set: (mm, Tm) => {
                mm.emissiveTexture = Tm
              }
            },
            metadata: Tm
          }, Uf, df), (0, hm.g)(mm, null, qT, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "specularTexture" in mm,
              get: mm => mm.specularTexture,
              set: (mm, Tm) => {
                mm.specularTexture = Tm
              }
            },
            metadata: Tm
          }, Ff, mh), (0, hm.g)(mm, null, VT, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "bumpTexture" in mm,
              get: mm => mm.bumpTexture,
              set: (mm, Tm) => {
                mm.bumpTexture = Tm
              }
            },
            metadata: Tm
          }, hh, Ah), (0, hm.g)(mm, null, KT, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "lightmapTexture" in mm,
              get: mm => mm.lightmapTexture,
              set: (mm, Tm) => {
                mm.lightmapTexture = Tm
              }
            },
            metadata: Tm
          }, wh, Dh), (0, hm.g)(mm, null, nT, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "refractionTexture" in mm,
              get: mm => mm.refractionTexture,
              set: (mm, Tm) => {
                mm.refractionTexture = Tm
              }
            },
            metadata: Tm
          }, ph, Eh), (0, hm.g)(mm, null, ST, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "useAlphaFromDiffuseTexture" in mm,
              get: mm => mm.useAlphaFromDiffuseTexture,
              set: (mm, Tm) => {
                mm.useAlphaFromDiffuseTexture = Tm
              }
            },
            metadata: Tm
          }, zh, Zh), (0, hm.g)(mm, null, NT, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: mm => "useEmissiveAsIllumination" in mm,
              get: mm => mm.useEmissiveAsIllumination,
              set: (mm, Tm) => {
                mm.useEmissiveAsIllumination = Tm
              }
            },
            metadata: Tm
          }, Sh, eh), (0, hm.g)(mm, null, XT, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: mm => "linkEmissiveWithDiffuse" in mm,
              get: mm => mm.linkEmissiveWithDiffuse,
              set: (mm, Tm) => {
                mm.linkEmissiveWithDiffuse = Tm
              }
            },
            metadata: Tm
          }, Xh, Ph), (0, hm.g)(mm, null, HT, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: mm => "useSpecularOverAlpha" in mm,
              get: mm => mm.useSpecularOverAlpha,
              set: (mm, Tm) => {
                mm.useSpecularOverAlpha = Tm
              }
            },
            metadata: Tm
          }, Ch, rh), (0, hm.g)(mm, null, CT, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: mm => "useReflectionOverAlpha" in mm,
              get: mm => mm.useReflectionOverAlpha,
              set: (mm, Tm) => {
                mm.useReflectionOverAlpha = Tm
              }
            },
            metadata: Tm
          }, Mh, uh), (0, hm.g)(mm, null, sT, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: mm => "disableLighting" in mm,
              get: mm => mm.disableLighting,
              set: (mm, Tm) => {
                mm.disableLighting = Tm
              }
            },
            metadata: Tm
          }, vh, th), (0, hm.g)(mm, null, MT, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: mm => "useObjectSpaceNormalMap" in mm,
              get: mm => mm.useObjectSpaceNormalMap,
              set: (mm, Tm) => {
                mm.useObjectSpaceNormalMap = Tm
              }
            },
            metadata: Tm
          }, gh, Wh), (0, hm.g)(mm, null, BT, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: mm => "useParallax" in mm,
              get: mm => mm.useParallax,
              set: (mm, Tm) => {
                mm.useParallax = Tm
              }
            },
            metadata: Tm
          }, TA, fA), (0, hm.g)(mm, null, vT, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: mm => "useParallaxOcclusion" in mm,
              get: mm => mm.useParallaxOcclusion,
              set: (mm, Tm) => {
                mm.useParallaxOcclusion = Tm
              }
            },
            metadata: Tm
          }, aA, xA), (0, hm.g)(mm, null, dT, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: mm => "roughness" in mm,
              get: mm => mm.roughness,
              set: (mm, Tm) => {
                mm.roughness = Tm
              }
            },
            metadata: Tm
          }, pA, EA), (0, hm.g)(mm, null, Tf, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: mm => "useLightmapAsShadowmap" in mm,
              get: mm => mm.useLightmapAsShadowmap,
              set: (mm, Tm) => {
                mm.useLightmapAsShadowmap = Tm
              }
            },
            metadata: Tm
          }, QA, nA), (0, hm.g)(mm, null, hf, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: mm => "diffuseFresnelParameters" in mm,
              get: mm => mm.diffuseFresnelParameters,
              set: (mm, Tm) => {
                mm.diffuseFresnelParameters = Tm
              }
            },
            metadata: Tm
          }, zA, ZA), (0, hm.g)(mm, null, af, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: mm => "opacityFresnelParameters" in mm,
              get: mm => mm.opacityFresnelParameters,
              set: (mm, Tm) => {
                mm.opacityFresnelParameters = Tm
              }
            },
            metadata: Tm
          }, SA, eA), (0, hm.g)(mm, null, wf, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: mm => "reflectionFresnelParameters" in mm,
              get: mm => mm.reflectionFresnelParameters,
              set: (mm, Tm) => {
                mm.reflectionFresnelParameters = Tm
              }
            },
            metadata: Tm
          }, XA, PA), (0, hm.g)(mm, null, Rf, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: mm => "refractionFresnelParameters" in mm,
              get: mm => mm.refractionFresnelParameters,
              set: (mm, Tm) => {
                mm.refractionFresnelParameters = Tm
              }
            },
            metadata: Tm
          }, CA, rA), (0, hm.g)(mm, null, Ef, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: mm => "emissiveFresnelParameters" in mm,
              get: mm => mm.emissiveFresnelParameters,
              set: (mm, Tm) => {
                mm.emissiveFresnelParameters = Tm
              }
            },
            metadata: Tm
          }, MA, uA), (0, hm.g)(mm, null, Of, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: mm => "useReflectionFresnelFromSpecular" in mm,
              get: mm => mm.useReflectionFresnelFromSpecular,
              set: (mm, Tm) => {
                mm.useReflectionFresnelFromSpecular = Tm
              }
            },
            metadata: Tm
          }, vA, tA), (0, hm.g)(mm, null, qf, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: mm => "useGlossinessFromSpecularMapAlpha" in mm,
              get: mm => mm.useGlossinessFromSpecularMapAlpha,
              set: (mm, Tm) => {
                mm.useGlossinessFromSpecularMapAlpha = Tm
              }
            },
            metadata: Tm
          }, gA, WA), (0, hm.g)(mm, null, Vf, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: mm => "maxSimultaneousLights" in mm,
              get: mm => mm.maxSimultaneousLights,
              set: (mm, Tm) => {
                mm.maxSimultaneousLights = Tm
              }
            },
            metadata: Tm
          }, Ta, fa), (0, hm.g)(mm, null, Kf, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: mm => "invertNormalMapX" in mm,
              get: mm => mm.invertNormalMapX,
              set: (mm, Tm) => {
                mm.invertNormalMapX = Tm
              }
            },
            metadata: Tm
          }, aa, xa), (0, hm.g)(mm, null, nf, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: mm => "invertNormalMapY" in mm,
              get: mm => mm.invertNormalMapY,
              set: (mm, Tm) => {
                mm.invertNormalMapY = Tm
              }
            },
            metadata: Tm
          }, ia, Ra), (0, hm.g)(mm, null, zf, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: mm => "twoSidedLighting" in mm,
              get: mm => mm.twoSidedLighting,
              set: (mm, Tm) => {
                mm.twoSidedLighting = Tm
              }
            },
            metadata: Tm
          }, oa, Oa), (0, hm.g)(mm, null, kf, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: mm => "applyDecalMapAfterDetailMap" in mm,
              get: mm => mm.applyDecalMapAfterDetailMap,
              set: (mm, Tm) => {
                mm.applyDecalMapAfterDetailMap = Tm
              }
            },
            metadata: Tm
          }, ja, Va), (0, hm.g)(null, null, aT, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "_diffuseTexture" in mm,
              get: mm => mm._diffuseTexture,
              set: (mm, Tm) => {
                mm._diffuseTexture = Tm
              }
            },
            metadata: Tm
          }, Sf, ef), (0, hm.g)(null, null, wT, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "_ambientTexture" in mm,
              get: mm => mm._ambientTexture,
              set: (mm, Tm) => {
                mm._ambientTexture = Tm
              }
            },
            metadata: Tm
          }, Xf, Pf), (0, hm.g)(null, null, iT, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "_opacityTexture" in mm,
              get: mm => mm._opacityTexture,
              set: (mm, Tm) => {
                mm._opacityTexture = Tm
              }
            },
            metadata: Tm
          }, Cf, rf), (0, hm.g)(null, null, pT, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "_reflectionTexture" in mm,
              get: mm => mm._reflectionTexture,
              set: (mm, Tm) => {
                mm._reflectionTexture = Tm
              }
            },
            metadata: Tm
          }, Mf, uf), (0, hm.g)(null, null, oT, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "_emissiveTexture" in mm,
              get: mm => mm._emissiveTexture,
              set: (mm, Tm) => {
                mm._emissiveTexture = Tm
              }
            },
            metadata: Tm
          }, vf, tf), (0, hm.g)(null, null, YT, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "_specularTexture" in mm,
              get: mm => mm._specularTexture,
              set: (mm, Tm) => {
                mm._specularTexture = Tm
              }
            },
            metadata: Tm
          }, gf, Wf), (0, hm.g)(null, null, jT, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "_bumpTexture" in mm,
              get: mm => mm._bumpTexture,
              set: (mm, Tm) => {
                mm._bumpTexture = Tm
              }
            },
            metadata: Tm
          }, Th, fh), (0, hm.g)(null, null, IT, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "_lightmapTexture" in mm,
              get: mm => mm._lightmapTexture,
              set: (mm, Tm) => {
                mm._lightmapTexture = Tm
              }
            },
            metadata: Tm
          }, ah, xh), (0, hm.g)(null, null, QT, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "_refractionTexture" in mm,
              get: mm => mm._refractionTexture,
              set: (mm, Tm) => {
                mm._refractionTexture = Tm
              }
            },
            metadata: Tm
          }, ih, Rh), (0, hm.g)(null, null, JT, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: mm => "ambientColor" in mm,
              get: mm => mm.ambientColor,
              set: (mm, Tm) => {
                mm.ambientColor = Tm
              }
            },
            metadata: Tm
          }, oh, Oh), (0, hm.g)(null, null, cT, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: mm => "diffuseColor" in mm,
              get: mm => mm.diffuseColor,
              set: (mm, Tm) => {
                mm.diffuseColor = Tm
              }
            },
            metadata: Tm
          }, Yh, qh), (0, hm.g)(null, null, zT, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: mm => "specularColor" in mm,
              get: mm => mm.specularColor,
              set: (mm, Tm) => {
                mm.specularColor = Tm
              }
            },
            metadata: Tm
          }, jh, Vh), (0, hm.g)(null, null, ZT, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: mm => "emissiveColor" in mm,
              get: mm => mm.emissiveColor,
              set: (mm, Tm) => {
                mm.emissiveColor = Tm
              }
            },
            metadata: Tm
          }, Ih, Kh), (0, hm.g)(null, null, kT, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: mm => "specularPower" in mm,
              get: mm => mm.specularPower,
              set: (mm, Tm) => {
                mm.specularPower = Tm
              }
            },
            metadata: Tm
          }, Qh, nh), (0, hm.g)(null, null, bT, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: mm => "_useAlphaFromDiffuseTexture" in mm,
              get: mm => mm._useAlphaFromDiffuseTexture,
              set: (mm, Tm) => {
                mm._useAlphaFromDiffuseTexture = Tm
              }
            },
            metadata: Tm
          }, Jh, ch), (0, hm.g)(null, null, eT, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: mm => "_useEmissiveAsIllumination" in mm,
              get: mm => mm._useEmissiveAsIllumination,
              set: (mm, Tm) => {
                mm._useEmissiveAsIllumination = Tm
              }
            },
            metadata: Tm
          }, kh, bh), (0, hm.g)(null, null, GT, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: mm => "_linkEmissiveWithDiffuse" in mm,
              get: mm => mm._linkEmissiveWithDiffuse,
              set: (mm, Tm) => {
                mm._linkEmissiveWithDiffuse = Tm
              }
            },
            metadata: Tm
          }, Nh, Gh), (0, hm.g)(null, null, PT, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: mm => "_useSpecularOverAlpha" in mm,
              get: mm => mm._useSpecularOverAlpha,
              set: (mm, Tm) => {
                mm._useSpecularOverAlpha = Tm
              }
            },
            metadata: Tm
          }, Hh, yh), (0, hm.g)(null, null, yT, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: mm => "_useReflectionOverAlpha" in mm,
              get: mm => mm._useReflectionOverAlpha,
              set: (mm, Tm) => {
                mm._useReflectionOverAlpha = Tm
              }
            },
            metadata: Tm
          }, sh, lh), (0, hm.g)(null, null, rT, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: mm => "_disableLighting" in mm,
              get: mm => mm._disableLighting,
              set: (mm, Tm) => {
                mm._disableLighting = Tm
              }
            },
            metadata: Tm
          }, Bh, Lh), (0, hm.g)(null, null, lT, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: mm => "_useObjectSpaceNormalMap" in mm,
              get: mm => mm._useObjectSpaceNormalMap,
              set: (mm, Tm) => {
                mm._useObjectSpaceNormalMap = Tm
              }
            },
            metadata: Tm
          }, Uh, dh), (0, hm.g)(null, null, uT, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: mm => "_useParallax" in mm,
              get: mm => mm._useParallax,
              set: (mm, Tm) => {
                mm._useParallax = Tm
              }
            },
            metadata: Tm
          }, Fh, mA), (0, hm.g)(null, null, LT, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: mm => "_useParallaxOcclusion" in mm,
              get: mm => mm._useParallaxOcclusion,
              set: (mm, Tm) => {
                mm._useParallaxOcclusion = Tm
              }
            },
            metadata: Tm
          }, hA, AA), (0, hm.g)(null, null, tT, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: mm => "parallaxScaleBias" in mm,
              get: mm => mm.parallaxScaleBias,
              set: (mm, Tm) => {
                mm.parallaxScaleBias = Tm
              }
            },
            metadata: Tm
          }, wA, DA), (0, hm.g)(null, null, UT, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: mm => "_roughness" in mm,
              get: mm => mm._roughness,
              set: (mm, Tm) => {
                mm._roughness = Tm
              }
            },
            metadata: Tm
          }, iA, RA), (0, hm.g)(null, null, gT, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: mm => "indexOfRefraction" in mm,
              get: mm => mm.indexOfRefraction,
              set: (mm, Tm) => {
                mm.indexOfRefraction = Tm
              }
            },
            metadata: Tm
          }, oA, OA), (0, hm.g)(null, null, WT, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: mm => "invertRefractionY" in mm,
              get: mm => mm.invertRefractionY,
              set: (mm, Tm) => {
                mm.invertRefractionY = Tm
              }
            },
            metadata: Tm
          }, YA, qA), (0, hm.g)(null, null, FT, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: mm => "alphaCutOff" in mm,
              get: mm => mm.alphaCutOff,
              set: (mm, Tm) => {
                mm.alphaCutOff = Tm
              }
            },
            metadata: Tm
          }, jA, VA), (0, hm.g)(null, null, mf, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: mm => "_useLightmapAsShadowmap" in mm,
              get: mm => mm._useLightmapAsShadowmap,
              set: (mm, Tm) => {
                mm._useLightmapAsShadowmap = Tm
              }
            },
            metadata: Tm
          }, IA, KA), (0, hm.g)(null, null, ff, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: mm => "_diffuseFresnelParameters" in mm,
              get: mm => mm._diffuseFresnelParameters,
              set: (mm, Tm) => {
                mm._diffuseFresnelParameters = Tm
              }
            },
            metadata: Tm
          }, JA, cA), (0, hm.g)(null, null, Af, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: mm => "_opacityFresnelParameters" in mm,
              get: mm => mm._opacityFresnelParameters,
              set: (mm, Tm) => {
                mm._opacityFresnelParameters = Tm
              }
            },
            metadata: Tm
          }, kA, bA), (0, hm.g)(null, null, xf, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: mm => "_reflectionFresnelParameters" in mm,
              get: mm => mm._reflectionFresnelParameters,
              set: (mm, Tm) => {
                mm._reflectionFresnelParameters = Tm
              }
            },
            metadata: Tm
          }, NA, GA), (0, hm.g)(null, null, Df, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: mm => "_refractionFresnelParameters" in mm,
              get: mm => mm._refractionFresnelParameters,
              set: (mm, Tm) => {
                mm._refractionFresnelParameters = Tm
              }
            },
            metadata: Tm
          }, HA, yA), (0, hm.g)(null, null, pf, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: mm => "_emissiveFresnelParameters" in mm,
              get: mm => mm._emissiveFresnelParameters,
              set: (mm, Tm) => {
                mm._emissiveFresnelParameters = Tm
              }
            },
            metadata: Tm
          }, sA, lA), (0, hm.g)(null, null, of, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: mm => "_useReflectionFresnelFromSpecular" in mm,
              get: mm => mm._useReflectionFresnelFromSpecular,
              set: (mm, Tm) => {
                mm._useReflectionFresnelFromSpecular = Tm
              }
            },
            metadata: Tm
          }, BA, LA), (0, hm.g)(null, null, Yf, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: mm => "_useGlossinessFromSpecularMapAlpha" in mm,
              get: mm => mm._useGlossinessFromSpecularMapAlpha,
              set: (mm, Tm) => {
                mm._useGlossinessFromSpecularMapAlpha = Tm
              }
            },
            metadata: Tm
          }, UA, dA), (0, hm.g)(null, null, jf, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: mm => "_maxSimultaneousLights" in mm,
              get: mm => mm._maxSimultaneousLights,
              set: (mm, Tm) => {
                mm._maxSimultaneousLights = Tm
              }
            },
            metadata: Tm
          }, FA, ma), (0, hm.g)(null, null, If, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: mm => "_invertNormalMapX" in mm,
              get: mm => mm._invertNormalMapX,
              set: (mm, Tm) => {
                mm._invertNormalMapX = Tm
              }
            },
            metadata: Tm
          }, ha, Aa), (0, hm.g)(null, null, Qf, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: mm => "_invertNormalMapY" in mm,
              get: mm => mm._invertNormalMapY,
              set: (mm, Tm) => {
                mm._invertNormalMapY = Tm
              }
            },
            metadata: Tm
          }, wa, Da), (0, hm.g)(null, null, Jf, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: mm => "_twoSidedLighting" in mm,
              get: mm => mm._twoSidedLighting,
              set: (mm, Tm) => {
                mm._twoSidedLighting = Tm
              }
            },
            metadata: Tm
          }, pa, Ea), (0, hm.g)(null, null, Zf, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: mm => "_applyDecalMapAfterDetailMap" in mm,
              get: mm => mm._applyDecalMapAfterDetailMap,
              set: (mm, Tm) => {
                mm._applyDecalMapAfterDetailMap = Tm
              }
            },
            metadata: Tm
          }, Ya, qa), Tm && Object.defineProperty(mm, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tm
          })
        })(), mm.ForceGLSL = !1, mm._ShaderLoader = new nm.e((() => [Promise.all([fm.e(317), fm.e(316)]).then((() => fm(41885))), Promise.all([fm.e(322), fm.e(318), fm.e(331), fm.e(321)]).then((() => fm(42072)))]), (() => [Promise.all([fm.e(338), fm.e(333)]).then((() => fm(42234))), Promise.all([fm.e(339), fm.e(349), fm.e(335)]).then((() => fm(42422)))])), mm
      })(),
      Pm = !1;

    function Hm() {
      Pm || (Pm = !0, (0, pm.f)(), (0, km.d)("BABYLON.StandardMaterial", Xm), xm.f.DefaultMaterialFactory = mm => new Xm("default material", mm))
    }
    Object.getOwnPropertyDescriptor(Xm.prototype, "decalMap") || Object.defineProperty(Xm.prototype, "decalMap", (0, bm.e)("StandardMaterial", "decalMap"))
  },
  40491: (mm, Tm, fm) => {
    function hm(mm) {
      return class extends mm {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    fm.d(Tm, {
      e: () => hm
    })
  },
  40474: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm
    });
    class hm {
      constructor(mm, Tm) {
        this._webGL = {
          load: mm,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: Tm,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(mm) {
        const Tm = 1 === mm ? this._webGPU : this._webGL;
        return Tm.loaded ? void 0 : async () => {
          await this._loadAsync(Tm)
        }
      }
      async _loadAsync(mm) {
        if (mm.loaded) return;
        let Tm = mm.loadPromise;
        const fm = null === Tm;
        fm && (Tm = Promise.all(mm.load()), mm.loadPromise = Tm);
        let hm = !1;
        try {
          await Tm, hm = !0
        } finally {
          fm && this._completeLoad(mm, hm)
        }
      }
      _completeLoad(mm, Tm) {
        mm.loaded = Tm, mm.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);