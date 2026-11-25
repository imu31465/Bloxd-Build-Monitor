export const id = 265;
export const ids = [265];
export const modules = {
  40592: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt
    });
    var Ot = Vt(40215);

    function qt(tt) {
      return class extends tt {
        constructor() {
          super(...arguments);
          const tt = new.target;
          if (!tt[Symbol.metadata]) {
            const et = Object.getPrototypeOf(tt)?.[Symbol.metadata];
            tt[Symbol.metadata] = et ? Object.create(et) : {}
          }
          const et = (0, Ot.c)(tt[Symbol.metadata]);
          et._imageProcessingConfiguration || (et._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(tt) {
          this._attachImageProcessingConfiguration(tt), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(tt) {
          tt !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !tt && this.vI ? this._imageProcessingConfiguration = this.vI().imageProcessingConfiguration : tt && (this._imageProcessingConfiguration = tt), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(tt) {
          this.imageProcessingConfiguration.colorCurvesEnabled = tt
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(tt) {
          this.imageProcessingConfiguration.colorGradingEnabled = tt
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(tt) {
          this._imageProcessingConfiguration.toneMappingEnabled = tt
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(tt) {
          this._imageProcessingConfiguration.exposure = tt
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(tt) {
          this._imageProcessingConfiguration.contrast = tt
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(tt) {
          this._imageProcessingConfiguration.colorGradingTexture = tt
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(tt) {
          this._imageProcessingConfiguration.colorCurves = tt
        }
      }
    }
  },
  40463: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Dt,
      e: () => qt
    });
    var Ot = Vt(40466);

    function qt(tt) {
      return class extends tt {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class Dt extends Ot.e {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  40546: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Qt
    });
    var Ot = Vt(40211),
      qt = Vt(40474),
      Dt = Vt(40213),
      mt = Vt(40525),
      dt = Vt(40466),
      jt = Vt(40551),
      Ht = Vt(40514);
    class Xt extends dt.e {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let Qt = (() => {
      var tt, et, Vt, dt;
      let Qt, lt, Et, ft, wt, yt, Nt = jt.e,
        Mt = [],
        bt = [],
        Jt = [],
        Ct = [],
        ut = [],
        Kt = [],
        ht = [],
        vt = [],
        Wt = [],
        St = [],
        ct = [],
        Rt = [];
      return tt = class extends Nt {
        get texture() {
          return (0, Ot.e)(this, et, "f")
        }
        set texture(tt) {
          (0, Ot.i)(this, et, tt, "f")
        }
        get normalBlendMethod() {
          return (0, Ot.e)(this, Vt, "f")
        }
        set normalBlendMethod(tt) {
          (0, Ot.i)(this, Vt, tt, "f")
        }
        get isEnabled() {
          return (0, Ot.e)(this, dt, "f")
        }
        set isEnabled(tt) {
          (0, Ot.i)(this, dt, tt, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(tt) {
          let Dt = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(tt, "DetailMap", 140, new Xt, Dt), this._texture = null, et.set(this, (0, Ot.m)(this, Mt, void 0)), this.diffuseBlendLevel = ((0, Ot.m)(this, bt), (0, Ot.m)(this, Jt, 1)), this.roughnessBlendLevel = ((0, Ot.m)(this, Ct), (0, Ot.m)(this, ut, 1)), this.bumpLevel = ((0, Ot.m)(this, Kt), (0, Ot.m)(this, ht, 1)), this._normalBlendMethod = ((0, Ot.m)(this, vt), qt.c.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), Vt.set(this, (0, Ot.m)(this, Wt, void 0)), this._isEnabled = ((0, Ot.m)(this, St), !1), dt.set(this, (0, Ot.m)(this, ct, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Ot.m)(this, Rt), this._internalMarkAllSubMeshesAsTexturesDirty = tt._dirtyCallbacks[1]
        }
        isReadyForSubMesh(tt, et, Vt) {
          return !this._isEnabled || !(tt._areTexturesDirty && et.texturesEnabled && Vt.getCaps().standardDerivatives && this._texture && mt.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(tt, et) {
          if (this._isEnabled) {
            tt.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const Vt = et.Jf();
            tt._areTexturesDirty && (Vt.getCaps().standardDerivatives && this._texture && mt.e.DetailTextureEnabled && this._isEnabled ? ((0, Ht.ab)(this._texture, tt, "DETAIL"), tt.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : tt.DETAIL = !1)
          } else tt.DETAIL = !1
        }
        bindForSubMesh(tt, et) {
          if (!this._isEnabled) return;
          const Vt = this._material.isFrozen;
          tt.useUbo && Vt && tt.isSync || this._texture && mt.e.DetailTextureEnabled && (tt.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, Ht.w)(this._texture, tt, "detail")), et.texturesEnabled && this._texture && mt.e.DetailTextureEnabled && tt.setTexture("detailSampler", this._texture)
        }
        hasTexture(tt) {
          return this._texture === tt
        }
        getActiveTextures(tt) {
          this._texture && tt.push(this._texture)
        }
        getAnimatables(tt) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && tt.push(this._texture)
        }
        dispose(tt) {
          tt && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(tt) {
          tt.push("detailSampler")
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
      }, et = new WeakMap, Vt = new WeakMap, dt = new WeakMap, (() => {
        const et = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nt[Symbol.metadata] ?? null) : void 0;
        Qt = [(0, Dt.E)("detailTexture"), (0, Dt.i)("_markAllSubMeshesAsTexturesDirty")], lt = [(0, Dt.P)()], Et = [(0, Dt.P)()], ft = [(0, Dt.P)()], wt = [(0, Dt.P)(), (0, Dt.i)("_markAllSubMeshesAsTexturesDirty")], yt = [(0, Dt.P)(), (0, Dt.i)("_markAllSubMeshesAsTexturesDirty")], (0, Ot.l)(tt, null, Qt, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: tt => "texture" in tt,
            get: tt => tt.texture,
            set: (tt, et) => {
              tt.texture = et
            }
          },
          metadata: et
        }, Mt, bt), (0, Ot.l)(tt, null, wt, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: tt => "normalBlendMethod" in tt,
            get: tt => tt.normalBlendMethod,
            set: (tt, et) => {
              tt.normalBlendMethod = et
            }
          },
          metadata: et
        }, Wt, St), (0, Ot.l)(tt, null, yt, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: tt => "isEnabled" in tt,
            get: tt => tt.isEnabled,
            set: (tt, et) => {
              tt.isEnabled = et
            }
          },
          metadata: et
        }, ct, Rt), (0, Ot.l)(null, null, lt, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: tt => "diffuseBlendLevel" in tt,
            get: tt => tt.diffuseBlendLevel,
            set: (tt, et) => {
              tt.diffuseBlendLevel = et
            }
          },
          metadata: et
        }, Jt, Ct), (0, Ot.l)(null, null, Et, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: tt => "roughnessBlendLevel" in tt,
            get: tt => tt.roughnessBlendLevel,
            set: (tt, et) => {
              tt.roughnessBlendLevel = et
            }
          },
          metadata: et
        }, ut, Kt), (0, Ot.l)(null, null, ft, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: tt => "bumpLevel" in tt,
            get: tt => tt.bumpLevel,
            set: (tt, et) => {
              tt.bumpLevel = et
            }
          },
          metadata: et
        }, ht, vt), et && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: et
        })
      })(), tt
    })()
  },
  40466: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot
    });
    class Ot {
      constructor(tt) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = tt, tt)
          for (const et in tt) Object.prototype.hasOwnProperty.call(tt, et) && this._setDefaultValue(et)
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
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || tt, this._isDirty = !0
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
        for (const tt of Object.keys(this)) "_" !== tt[0] && this._keys.push(tt);
        if (this._externalProperties)
          for (const tt in this._externalProperties) - 1 === this._keys.indexOf(tt) && this._keys.push(tt)
      }
      isEqual(tt) {
        if (this._keys.length !== tt._keys.length) return !1;
        for (let et = 0; et < this._keys.length; et++) {
          const Vt = this._keys[et];
          if (this[Vt] !== tt[Vt]) return !1
        }
        return !0
      }
      cloneTo(tt) {
        this._keys.length !== tt._keys.length && (tt._keys = this._keys.slice(0));
        for (let et = 0; et < this._keys.length; et++) {
          const Vt = this._keys[et];
          tt[Vt] = this[Vt]
        }
      }
      reset() {
        for (const tt of this._keys) this._setDefaultValue(tt)
      }
      _setDefaultValue(tt) {
        const et = this._externalProperties?.[tt]?.type ?? typeof this[tt],
          Vt = this._externalProperties?.[tt]?.default;
        switch (et) {
          case "number":
            this[tt] = Vt ?? 0;
            break;
          case "string":
            this[tt] = Vt ?? "";
            break;
          default:
            this[tt] = Vt ?? !1
        }
      }
      toString() {
        let tt = "";
        for (let et = 0; et < this._keys.length; et++) {
          const Vt = this._keys[et],
            Ot = this[Vt];
          switch (typeof Ot) {
            case "number":
            case "string":
              tt += "#define " + Vt + " " + Ot + "\n";
              break;
            default:
              Ot && (tt += "#define " + Vt + "\n")
          }
        }
        return tt
      }
    }
  },
  40575: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => dt,
      e: () => mt,
      h: () => Dt
    });
    var Ot, qt = Vt(37336);

    function Dt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const Ot = et(tt);
      if (!Number.isInteger(Ot) || Ot < 0 || Ot > Vt) throw new Error(`Invalid geometry object ID ${Ot} for mesh "${tt.name}". Object IDs must be integers between 0 and 0x${Vt.toString(16).toUpperCase()}.`);
      return Ot
    }

    function mt(tt, et) {
      const Vt = et(tt);
      if (!Number.isInteger(Vt) || Vt < 0 || Vt > 255 || 0 !== Vt && 0 === (63 & Vt)) throw new Error(`Invalid geometry mesh-blending tag ${Vt} for mesh "${tt.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return Vt
    }! function(tt) {
      tt[tt.Zero = 0] = "Zero", tt[tt.One = 1] = "One", tt[tt.MaxViewZ = 2] = "MaxViewZ", tt[tt.NoClear = 3] = "NoClear"
    }(Ot || (Ot = {}));
    class dt {
      static CreateConfiguration(tt) {
        return dt._Configurations[tt] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: qt.c.Zero(),
          currentViewProjection: qt.c.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, dt._Configurations[tt]
      }
      static DeleteConfiguration(tt) {
        delete dt._Configurations[tt]
      }
      static GetConfiguration(tt) {
        return dt._Configurations[tt]
      }
      static _PrepareConfiguration(tt, et, Vt) {
        const Ot = dt._Configurations[tt];
        Ot._attachments = et, Ot._colorAttachments = Vt, Ot._mrtCount = et.length;
        let qt = "#define PREPASS\n";
        for (const Dt of dt.GeometryTextureDescriptions) {
          const tt = Ot.defines[Dt.defineIndex];
          void 0 !== tt && (qt += `#define ${Dt.define}\n#define ${Dt.defineIndex} ${tt}\n`)
        }
        Ot.objectIdIsRedFormat && (qt += "#define PREPASS_OBJECT_ID_R8\n"), Ot._defines = qt + `#define SCENE_MRT_COUNT ${et.length}\n`
      }
      static _PrepareStringDefines(tt, et) {
        const Vt = dt._Configurations[tt];
        return !!Vt?._defines && (et.push(Vt._defines), !0)
      }
      static _BindAttachmentsForEffect(tt, et) {
        const Vt = dt._Configurations[tt.currentRenderPassId];
        return !Vt?._attachments || (tt.bindAttachments(et._multiTarget ? Vt._attachments : Vt._colorAttachments), et._multiTarget || void 0 !== Vt.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(tt) {
        const et = dt._Configurations[tt.currentRenderPassId];
        et?._colorAttachments && tt.bindAttachments(et._colorAttachments)
      }
      static _BindColorAttachments(tt) {
        const et = dt._Configurations[tt.currentRenderPassId];
        return !et?._colorAttachments || (tt.bindAttachments(et._colorAttachments), void 0 !== et.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(tt) {
        const et = dt._Configurations[tt.currentRenderPassId];
        return !et?._colorAttachments || void 0 !== et.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(tt, et) {
        const Vt = dt._Configurations[tt.currentRenderPassId];
        if (!Vt) return;
        const Ot = tt.getAlphaMode(),
          qt = void 0 === Vt.defines.PREPASS_COLOR_INDEX || 2 === Ot || 1 === Ot || 17 === Ot;
        et.setFloat("geometryZeroAlphaDiscard", qt ? 1 : 0)
      }
      static AddUniformsAndSamplers(tt, et) {
        tt.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(tt, et) {
        for (const Vt of et)
          if (Vt.vJ)
            for (const et of Vt.vJ) et._removeDrawWrapper(tt)
      }
      static PrepareDefines(tt, et, Vt) {
        if (!Vt._arePrePassDirty) return;
        const Ot = dt._Configurations[tt];
        if (!Ot) return;
        Vt.PREPASS = !0;
        let qt = 0;
        for (let Dt = 0; Dt < dt.GeometryTextureDescriptions.length; Dt++) {
          const tt = dt.GeometryTextureDescriptions[Dt],
            et = tt.define,
            mt = tt.defineIndex,
            jt = Ot.defines[mt];
          void 0 !== jt ? (Vt[et] = !0, Vt[mt] = jt, qt++) : (Vt[et] = !1, delete Vt[mt])
        }
        Vt.PREPASS_OBJECT_ID_R8 = Ot.objectIdIsRedFormat, Vt.SCENE_MRT_COUNT = Ot._mrtCount ?? qt, Vt.BONES_VELOCITY_ENABLED = et.useBones && et.computeBonesUsingShaders && et.skeleton && !et.skeleton.isUsingTextureForMatrices && -1 === Ot.excludedSkinnedMesh.indexOf(et)
      }
      static Bind(tt, et, Vt, Ot, qt) {
        const jt = dt._Configurations[tt];
        if (!jt) return;
        const Ht = Vt.vI(),
          Xt = Ht.Jf();
        if (jt.reverseCulling && Xt.setStateCullFaceType(Ht._mirroredCameraPosition ? qt.cullBackFaces : !qt.cullBackFaces), void 0 !== jt.defines.PREPASS_OBJECT_ID_INDEX) {
          const tt = jt.objectIdIsRedFormat ? 255 : 16777215;
          let Ot = Vt.uniqueId;
          if (jt.objectIdProvider) Ot = Dt(Vt, jt.objectIdProvider, tt);
          else if (Ot > tt) throw new Error(`Invalid geometry object ID ${Ot} for mesh "${Vt.name}". Object IDs must be integers between 0 and 0x${tt.toString(16).toUpperCase()}.`);
          et.setFloat("objectId", Ot)
        }
        if (void 0 !== jt.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const tt = jt.meshBlendTagProvider ? mt(Vt, jt.meshBlendTagProvider) : Vt.meshBlendingTag;
          et.setInt("meshBlendTag", tt)
        }
        if (void 0 !== jt.defines.PREPASS_VELOCITY_INDEX || void 0 !== jt.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const tt = jt._currentWorldMatrices ?? (jt._currentWorldMatrices = {}),
            qt = jt._worldMatrixFrameIds ?? (jt._worldMatrixFrameIds = {});
          if (tt[Vt.uniqueId] || (tt[Vt.uniqueId] = Ot.clone(), jt.previousWorldMatrices[Vt.uniqueId] = Ot.clone()), qt[Vt.uniqueId] !== Xt.frameId && (jt.previousWorldMatrices[Vt.uniqueId].rK(tt[Vt.uniqueId]), qt[Vt.uniqueId] = Xt.frameId), tt[Vt.uniqueId].rK(Ot), -1 === jt.lastUpdateFrameId ? (jt.lastUpdateFrameId = Xt.frameId, jt.previousViewProjection.rK(Ht.getTransformMatrix()), jt.currentViewProjection.rK(Ht.getTransformMatrix())) : jt.currentViewProjection.updateFlag !== Ht.getTransformMatrix().updateFlag ? (jt.lastUpdateFrameId = Xt.frameId, jt.previousViewProjection.rK(jt.currentViewProjection), jt.currentViewProjection.rK(Ht.getTransformMatrix())) : jt.lastUpdateFrameId !== Xt.frameId && (jt.lastUpdateFrameId = Xt.frameId, jt.previousViewProjection.rK(jt.currentViewProjection)), et.setMatrix("previousWorld", jt.previousWorldMatrices[Vt.uniqueId]), et.setMatrix("previousViewProjection", jt.previousViewProjection), Vt.useBones && Vt.computeBonesUsingShaders && Vt.skeleton) {
            const tt = Vt.skeleton;
            if (!tt.isUsingTextureForMatrices || -1 === et.getUniformIndex("boneTextureInfo")) {
              const Ot = tt.getTransformMatrices(Vt);
              Ot && (jt.previousBones[Vt.uniqueId] || (jt.previousBones[Vt.uniqueId] = Ot.slice()), et.setMatrices("mPreviousBones", jt.previousBones[Vt.uniqueId]), jt.previousBones[Vt.uniqueId].set(Ot))
            }
          }
        }
      }
    }
    dt.GeometryTextureDescriptions = [{
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
    }], dt._Configurations = {}
  },
  40551: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => lt,
      h: () => ft
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(40082),
      mt = Vt(40061);
    const dt = new RegExp("^([gimus]+)!");
    class jt {
      constructor(tt) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = tt, this._scene = tt.vI(), this._engine = this._scene.Jf()
      }
      _addPlugin(tt) {
        for (let Ot = 0; Ot < this._plugins.length; ++Ot)
          if (this._plugins[Ot].name === tt.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !tt.isCompatible(this._material.shaderLanguage)) throw `The plugin "${tt.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const et = tt.getClassName();
        jt._MaterialPluginClassToMainDefine[et] || (jt._MaterialPluginClassToMainDefine[et] = "MATERIALPLUGIN_" + ++jt._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (tt, et) => this._handlePluginEvent(tt, et), this._plugins.push(tt), this._plugins.sort(((tt, et) => tt.priority - et.priority)), this._codeInjectionPoints = {};
        const Vt = {};
        Vt[jt._MaterialPluginClassToMainDefine[et]] = {
          type: "boolean",
          default: !0
        };
        for (const Ot of this._plugins) Ot.collectDefines(Vt), this._collectPointNames("vertex", Ot.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Ot.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = Vt, !0
      }
      _activatePlugin(tt) {
        -1 === this._activePlugins.indexOf(tt) && (this._activePlugins.push(tt), this._activePlugins.sort(((tt, et) => tt.priority - et.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), tt.registerForExtraEvents && (this._activePluginsForExtraEvents.push(tt), this._activePluginsForExtraEvents.sort(((tt, et) => tt.priority - et.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(tt) {
        for (let et = 0; et < this._plugins.length; ++et)
          if (this._plugins[et].name === tt) return this._plugins[et];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(tt) {
        let et = !0;
        for (const Vt of this._activePlugins) et = et && Vt.isReadyForSubMesh(tt.defines, this._scene, this._engine, tt.subMesh);
        tt.isReadyForSubMesh = et
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(tt) {
        for (const et of this._activePlugins) et.prepareDefinesBeforeAttributes(tt.defines, this._scene, tt.mesh)
      }
      _handlePluginEventPrepareDefines(tt) {
        for (const et of this._activePlugins) et.prepareDefines(tt.defines, this._scene, tt.mesh)
      }
      _handlePluginEventHardBindForSubMesh(tt) {
        for (const et of this._activePluginsForExtraEvents) et.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, tt.subMesh)
      }
      _handlePluginEventBindForSubMesh(tt) {
        for (const et of this._activePlugins) et.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, tt.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(tt) {
        let et = !1;
        for (const Vt of this._activePluginsForExtraEvents)
          if (et = Vt.hasRenderTargetTextures(), et) break;
        tt.hasRenderTargetTextures = et
      }
      _handlePluginEventFillRenderTargetTextures(tt) {
        for (const et of this._activePluginsForExtraEvents) et.fillRenderTargetTextures(tt.renderTargets)
      }
      _handlePluginEvent(tt, et) {
        switch (tt) {
          case 512: {
            const tt = et;
            for (const et of this._activePlugins) et.getActiveTextures(tt.activeTextures);
            break
          }
          case 256: {
            const tt = et;
            for (const et of this._activePlugins) et.getAnimatables(tt.animatables);
            break
          }
          case 1024: {
            const tt = et;
            let Vt = !1;
            for (const et of this._activePlugins)
              if (Vt = et.hasTexture(tt.texture), Vt) break;
            tt.hasTexture = Vt;
            break
          }
          case 2: {
            const tt = et;
            for (const et of this._plugins) et.dispose(tt.forceDisposeTextures);
            break
          }
          case 4:
            et.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const tt = et;
            for (const et of this._activePlugins) tt.fallbackRank = et.addFallbacks(tt.defines, tt.fallbacks, tt.fallbackRank), et.getAttributes(tt.attributes, this._scene, tt.mesh);
            this._uniformList.length > 0 && tt.uniforms.push(...this._uniformList), this._samplerList.length > 0 && tt.samplers.push(...this._samplerList), this._uboList.length > 0 && tt.uniformBuffersNames.push(...this._uboList), tt.customCode = this._injectCustomCode(tt, tt.customCode);
            break
          }
          case 8: {
            const tt = et;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const Vt = 1 === this._material.shaderLanguage;
            for (const et of this._plugins) {
              const Ot = et.getUniforms(this._material.shaderLanguage);
              if (Ot) {
                if (Ot.ubo)
                  for (const et of Ot.ubo) {
                    if (et.size && et.type) {
                      const Ot = et.arraySize ?? 0;
                      if (tt.ubo.addUniform(et.name, et.size, Ot), Vt) {
                        let tt;
                        switch (et.type) {
                          case "mat4":
                            tt = "mat4x4f";
                            break;
                          case "float":
                            tt = "f32";
                            break;
                          default:
                            tt = `${et.type}f`
                        }
                        this._uboDeclaration += Ot > 0 ? `uniform ${et.name}: array<${tt}, ${Ot}>;\n` : `uniform ${et.name}: ${tt};\n`
                      } else this._uboDeclaration += `${et.type} ${et.name}${Ot>0?`[${Ot}]`:""};\n`
                    }
                    this._uniformList.push(et.name)
                  }
                Ot.vertex && (this._vertexDeclaration += Ot.vertex + "\n"), Ot.fragment && (this._fragmentDeclaration += Ot.fragment + "\n"), Ot.externalUniforms && this._uniformList.push(...Ot.externalUniforms)
              }
              et.getSamplers(this._samplerList), et.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(tt, et) {
        if (et)
          for (const Vt in et) this._codeInjectionPoints[tt] || (this._codeInjectionPoints[tt] = {}), this._codeInjectionPoints[tt][Vt] = !0
      }
      _injectCustomCode(tt, et) {
        return (Vt, Ot) => {
          et && (Ot = et(Vt, Ot)), this._uboDeclaration && (Ot = Ot.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Ot = Ot.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (Ot = Ot.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const qt = this._codeInjectionPoints?.[Vt];
          if (!qt) return Ot;
          let jt = null;
          for (let et in qt) {
            let qt = "";
            for (const Ot of this._activePlugins) {
              const dt = this._material.shaderLanguage;
              let Ht = Ot.getCustomCode(Vt, dt)?.[et];
              Ht && (Ot.resolveIncludes && (null === jt && (jt = {
                defines: [],
                indexParameters: tt.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: mt.b.GetShadersRepository(dt),
                includesShadersStore: mt.b.GetIncludesShadersStore(dt),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                LOt: this._engine.LOt,
                processCodeAfterIncludes: void 0
              }), jt.isFragment = "fragment" === Vt, (0, Dt.h)(Ht, jt, (tt => Ht = tt))), qt += Ht + "\n")
            }
            if (qt.length > 0)
              if ("!" === et.charAt(0)) {
                et = et.substring(1);
                let tt = "g";
                if ("!" === et.charAt(0)) tt = "", et = et.substring(1);
                else {
                  const Vt = dt.exec(et);
                  Vt && Vt.length >= 2 && (tt = Vt[1], et = et.substring(tt.length + 1))
                }
                tt.indexOf("g") < 0 && (tt += "g");
                const Vt = new RegExp(et, tt);
                let Dt = Vt.exec(Ot);
                for (; null !== Dt;) {
                  const {
                    index: tt
                  } = Dt, et = Ht(qt, Dt);
                  Ot = Ot.substring(0, tt) + et + Ot.substring(tt + Dt[0].length), Vt.lastIndex = tt + et.length, Dt = Vt.exec(Ot)
                }
              } else {
                const tt = "#define " + et;
                Ot = Ot.replace(tt, "\n" + qt + "\n" + tt)
              }
          }
          return Ot
        }
      }
    }
    jt._MaterialPluginClassToMainDefine = {}, jt._MaterialPluginCounter = 0;

    function Ht(tt, et) {
      return tt.replace(/\$(\d+)/g, ((tt, Vt) => {
        const Ot = Number(Vt);
        return Ot < et.length ? et[Ot] : ""
      }))
    }
    var Xt = Vt(40230),
      Qt = Vt(37390);
    let lt = (() => {
        var tt;
        let et, Vt, Dt, mt, dt = [],
          Ht = [],
          Qt = [],
          lt = [],
          Et = [],
          ft = [],
          wt = [],
          yt = [];
        return tt = class {
          isCompatible(tt) {
            return 0 === tt
          }
          _enable(tt) {
            tt && this._pluginManager._activatePlugin(this)
          }
          constructor(tt, et, Vt, qt) {
            let Dt = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              mt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              Xt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, Ot.m)(this, dt, void 0), this.priority = ((0, Ot.m)(this, Ht), (0, Ot.m)(this, Qt, 500)), this.resolveIncludes = ((0, Ot.m)(this, lt), (0, Ot.m)(this, Et, !1)), this.registerForExtraEvents = ((0, Ot.m)(this, ft), (0, Ot.m)(this, wt, !1)), this.doNotSerialize = ((0, Ot.m)(this, yt), !1), this._material = tt, this.name = et, this.priority = Vt, this.resolveIncludes = Xt, tt.pluginManager || (tt.pluginManager = new jt(tt), tt.ZI.add((() => {
              tt.pluginManager = void 0
            }))), this._pluginDefineNames = qt, this._pluginManager = tt.pluginManager, Dt && this._pluginManager._addPlugin(this), mt && this._enable(!0), this.markAllDefinesAsDirty = tt._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(tt, et, Vt, Ot) {
            return !0
          }
          hardBindForSubMesh(tt, et, Vt, Ot) {}
          bindForSubMesh(tt, et, Vt, Ot) {}
          dispose(tt) {}
          getCustomCode(tt) {
            return null
          }
          collectDefines(tt) {
            if (this._pluginDefineNames)
              for (const et of Object.keys(this._pluginDefineNames)) {
                if ("_" === et[0]) continue;
                const Vt = typeof this._pluginDefineNames[et];
                tt[et] = {
                  type: "number" === Vt ? "number" : "string" === Vt ? "string" : "boolean" === Vt ? "boolean" : "object",
                  default: this._pluginDefineNames[et]
                }
              }
          }
          prepareDefinesBeforeAttributes(tt, et, Vt) {}
          prepareDefines(tt, et, Vt) {}
          hasTexture(tt) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(tt) {}
          getActiveTextures(tt) {}
          getAnimatables(tt) {}
          addFallbacks(tt, et, Vt) {
            return Vt
          }
          getSamplers(tt) {}
          getAttributes(tt, et, Vt) {}
          getUniformBuffersNames(tt) {}
          getUniforms() {
            return {}
          }
          copyTo(tt) {
            Xt.d.Clone((() => tt), this)
          }
          serialize() {
            return Xt.d.Serialize(this)
          }
          parse(tt, et, Vt) {
            Xt.d.Parse((() => this), tt, et, Vt)
          }
        }, (() => {
          const jt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          et = [(0, qt.P)()], Vt = [(0, qt.P)()], Dt = [(0, qt.P)()], mt = [(0, qt.P)()], (0, Ot.l)(null, null, et, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: tt => "name" in tt,
              get: tt => tt.name,
              set: (tt, et) => {
                tt.name = et
              }
            },
            metadata: jt
          }, dt, Ht), (0, Ot.l)(null, null, Vt, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: tt => "priority" in tt,
              get: tt => tt.priority,
              set: (tt, et) => {
                tt.priority = et
              }
            },
            metadata: jt
          }, Qt, lt), (0, Ot.l)(null, null, Dt, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: tt => "resolveIncludes" in tt,
              get: tt => tt.resolveIncludes,
              set: (tt, et) => {
                tt.resolveIncludes = et
              }
            },
            metadata: jt
          }, Et, ft), (0, Ot.l)(null, null, mt, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: tt => "registerForExtraEvents" in tt,
              get: tt => tt.registerForExtraEvents,
              set: (tt, et) => {
                tt.registerForExtraEvents = et
              }
            },
            metadata: jt
          }, wt, yt), jt && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: jt
          })
        })(), tt
      })(),
      Et = !1;

    function ft() {
      Et || (Et = !0, (0, Qt.i)("BABYLON.MaterialPluginBase", lt))
    }
  },
  40461: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    class Ot {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(tt) {
        tt.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(tt) {}
      bindForSubMesh(tt, et, Vt, Ot, qt) {
        if (et.prePassRenderer && et.prePassRenderer.enabled && et.prePassRenderer.currentRTisSceneRT && (-1 !== et.prePassRenderer.getIndex(2) || -1 !== et.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[Vt.uniqueId] || (this.previousWorldMatrices[Vt.uniqueId] = Ot.clone()), this.previousViewProjection || (this.previousViewProjection = et.getTransformMatrix().clone(), this.currentViewProjection = et.getTransformMatrix().clone());
          const qt = et.Jf();
          this.currentViewProjection.updateFlag !== et.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = qt.frameId, this.previousViewProjection.rK(this.currentViewProjection), this.currentViewProjection.rK(et.getTransformMatrix())) : this._lastUpdateFrameId !== qt.frameId && (this._lastUpdateFrameId = qt.frameId, this.previousViewProjection.rK(this.currentViewProjection)), tt.setMatrix("previousWorld", this.previousWorldMatrices[Vt.uniqueId]), tt.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[Vt.uniqueId] = Ot.clone()
        }
      }
    }
  },
  40587: (tt, et, Vt) => {
    function Ot(tt) {
      return class extends tt {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    Vt.d(et, {
      b: () => Ot
    })
  },
  40452: (tt, et, Vt) => {
    Vt.d(et, {
      StandardMaterial: () => Ot.d
    });
    var Ot = Vt(40456);
    (0, Ot.b)()
  },
  40456: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => kt,
      d: () => Lt
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(40311),
      mt = Vt(40296),
      dt = Vt(37513),
      jt = Vt(40343),
      Ht = Vt(40461),
      Xt = Vt(40463),
      Qt = Vt(40313),
      lt = Vt(40474),
      Et = Vt(40466),
      ft = Vt(40531),
      wt = Vt(40525),
      yt = Vt(40540),
      Nt = Vt(40546),
      Mt = Vt(40520),
      bt = Vt(40558),
      Jt = Vt(40514),
      Ct = Vt(40230),
      ut = Vt(40566),
      Kt = Vt(40575),
      ht = Vt(40582),
      vt = Vt(40587),
      Wt = Vt(40592),
      St = Vt(37390),
      ct = Vt(40080);
    const Rt = {
      effect: null,
      subMesh: null
    };
    class It extends((0, vt.b)((0, ht.e)(Et.e))) {}
    class Pt extends((0, Xt.e)(It)) {
      constructor(tt) {
        super(tt), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class Zt extends((0, Wt.c)(ft.e)) {}
    let Lt = (() => {
        var tt, et, Xt, Et, ht, vt, Wt, St, ct, It, Lt, Ft, kt, Gt, zt, ot, rt, Ut, At, it, Yt, Bt, pt, xt, Tt, gt, st, nt, te, ee, Ve, Oe, qe;
        let De, me, de, je, He, Xe, Qe, le, Ee, fe, we, ye, Ne, ae, Me, be, Je, Ce, ue, Ke, he, ve, We, Se, ce, Re, Ie, Pe, Ze, Le, Fe, ke, Ge, ze, oe, re, Ue, Ae, ie, Ye, Be, pe, xe, Te, ge, se, ne, tV, eV, VV, OV, qV, DV, mV, dV, jV, HV, XV, QV, lV, EV, fV, wV, yV, NV, aV, MV, bV, JV, CV, uV, KV, hV, vV = Zt,
          WV = [],
          SV = [],
          cV = [],
          RV = [],
          IV = [],
          PV = [],
          ZV = [],
          LV = [],
          FV = [],
          kV = [],
          GV = [],
          zV = [],
          oV = [],
          rV = [],
          UV = [],
          AV = [],
          iV = [],
          YV = [],
          BV = [],
          pV = [],
          xV = [],
          TV = [],
          gV = [],
          sV = [],
          nV = [],
          tO = [],
          eO = [],
          VO = [],
          OO = [],
          qO = [],
          DO = [],
          mO = [],
          dO = [],
          jO = [],
          HO = [],
          XO = [],
          QO = [],
          lO = [],
          EO = [],
          fO = [],
          wO = [],
          yO = [],
          NO = [],
          aO = [],
          MO = [],
          bO = [],
          JO = [],
          CO = [],
          uO = [],
          KO = [],
          hO = [],
          vO = [],
          WO = [],
          SO = [],
          cO = [],
          RO = [],
          IO = [],
          PO = [],
          ZO = [],
          LO = [],
          FO = [],
          kO = [],
          GO = [],
          zO = [],
          oO = [],
          rO = [],
          UO = [],
          AO = [],
          iO = [],
          YO = [],
          BO = [],
          pO = [],
          xO = [],
          TO = [],
          gO = [],
          sO = [],
          nO = [],
          tq = [],
          eq = [],
          Vq = [],
          Oq = [],
          qq = [],
          Dq = [],
          mq = [],
          dq = [],
          jq = [],
          Hq = [],
          Xq = [],
          Qq = [],
          lq = [],
          Eq = [],
          fq = [],
          wq = [],
          yq = [],
          Nq = [],
          aq = [],
          Mq = [],
          bq = [],
          Jq = [],
          Cq = [],
          uq = [],
          Kq = [],
          hq = [],
          vq = [],
          Wq = [],
          Sq = [],
          cq = [],
          Rq = [],
          Iq = [],
          Pq = [],
          Zq = [],
          Lq = [],
          Fq = [],
          kq = [],
          Gq = [],
          zq = [],
          oq = [],
          rq = [],
          Uq = [],
          Aq = [],
          iq = [],
          Yq = [],
          Bq = [],
          pq = [],
          xq = [],
          Tq = [],
          gq = [],
          sq = [],
          nq = [],
          tD = [],
          eD = [],
          VD = [],
          OD = [],
          qD = [],
          DD = [],
          mD = [],
          dD = [],
          jD = [],
          HD = [],
          XD = [],
          QD = [],
          lD = [],
          ED = [],
          fD = [],
          wD = [],
          yD = [];
        return tt = class extends vV {
          get diffuseTexture() {
            return (0, Ot.e)(this, et, "f")
          }
          set diffuseTexture(tt) {
            (0, Ot.i)(this, et, tt, "f")
          }
          get ambientTexture() {
            return (0, Ot.e)(this, Xt, "f")
          }
          set ambientTexture(tt) {
            (0, Ot.i)(this, Xt, tt, "f")
          }
          get opacityTexture() {
            return (0, Ot.e)(this, Et, "f")
          }
          set opacityTexture(tt) {
            (0, Ot.i)(this, Et, tt, "f")
          }
          get reflectionTexture() {
            return (0, Ot.e)(this, ht, "f")
          }
          set reflectionTexture(tt) {
            (0, Ot.i)(this, ht, tt, "f")
          }
          get emissiveTexture() {
            return (0, Ot.e)(this, vt, "f")
          }
          set emissiveTexture(tt) {
            (0, Ot.i)(this, vt, tt, "f")
          }
          get specularTexture() {
            return (0, Ot.e)(this, Wt, "f")
          }
          set specularTexture(tt) {
            (0, Ot.i)(this, Wt, tt, "f")
          }
          get bumpTexture() {
            return (0, Ot.e)(this, St, "f")
          }
          set bumpTexture(tt) {
            (0, Ot.i)(this, St, tt, "f")
          }
          get lightmapTexture() {
            return (0, Ot.e)(this, ct, "f")
          }
          set lightmapTexture(tt) {
            (0, Ot.i)(this, ct, tt, "f")
          }
          get refractionTexture() {
            return (0, Ot.e)(this, It, "f")
          }
          set refractionTexture(tt) {
            (0, Ot.i)(this, It, tt, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, Ot.e)(this, Lt, "f")
          }
          set useAlphaFromDiffuseTexture(tt) {
            (0, Ot.i)(this, Lt, tt, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, Ot.e)(this, Ft, "f")
          }
          set useEmissiveAsIllumination(tt) {
            (0, Ot.i)(this, Ft, tt, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, Ot.e)(this, kt, "f")
          }
          set linkEmissiveWithDiffuse(tt) {
            (0, Ot.i)(this, kt, tt, "f")
          }
          get useSpecularOverAlpha() {
            return (0, Ot.e)(this, Gt, "f")
          }
          set useSpecularOverAlpha(tt) {
            (0, Ot.i)(this, Gt, tt, "f")
          }
          get useReflectionOverAlpha() {
            return (0, Ot.e)(this, zt, "f")
          }
          set useReflectionOverAlpha(tt) {
            (0, Ot.i)(this, zt, tt, "f")
          }
          get disableLighting() {
            return (0, Ot.e)(this, ot, "f")
          }
          set disableLighting(tt) {
            (0, Ot.i)(this, ot, tt, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, Ot.e)(this, rt, "f")
          }
          set useObjectSpaceNormalMap(tt) {
            (0, Ot.i)(this, rt, tt, "f")
          }
          get useParallax() {
            return (0, Ot.e)(this, Ut, "f")
          }
          set useParallax(tt) {
            (0, Ot.i)(this, Ut, tt, "f")
          }
          get useParallaxOcclusion() {
            return (0, Ot.e)(this, At, "f")
          }
          set useParallaxOcclusion(tt) {
            (0, Ot.i)(this, At, tt, "f")
          }
          get roughness() {
            return (0, Ot.e)(this, it, "f")
          }
          set roughness(tt) {
            (0, Ot.i)(this, it, tt, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, Ot.e)(this, Yt, "f")
          }
          set useLightmapAsShadowmap(tt) {
            (0, Ot.i)(this, Yt, tt, "f")
          }
          get diffuseFresnelParameters() {
            return (0, Ot.e)(this, Bt, "f")
          }
          set diffuseFresnelParameters(tt) {
            (0, Ot.i)(this, Bt, tt, "f")
          }
          get opacityFresnelParameters() {
            return (0, Ot.e)(this, pt, "f")
          }
          set opacityFresnelParameters(tt) {
            (0, Ot.i)(this, pt, tt, "f")
          }
          get reflectionFresnelParameters() {
            return (0, Ot.e)(this, xt, "f")
          }
          set reflectionFresnelParameters(tt) {
            (0, Ot.i)(this, xt, tt, "f")
          }
          get refractionFresnelParameters() {
            return (0, Ot.e)(this, Tt, "f")
          }
          set refractionFresnelParameters(tt) {
            (0, Ot.i)(this, Tt, tt, "f")
          }
          get emissiveFresnelParameters() {
            return (0, Ot.e)(this, gt, "f")
          }
          set emissiveFresnelParameters(tt) {
            (0, Ot.i)(this, gt, tt, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, Ot.e)(this, st, "f")
          }
          set useReflectionFresnelFromSpecular(tt) {
            (0, Ot.i)(this, st, tt, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, Ot.e)(this, nt, "f")
          }
          set useGlossinessFromSpecularMapAlpha(tt) {
            (0, Ot.i)(this, nt, tt, "f")
          }
          get maxSimultaneousLights() {
            return (0, Ot.e)(this, te, "f")
          }
          set maxSimultaneousLights(tt) {
            (0, Ot.i)(this, te, tt, "f")
          }
          get invertNormalMapX() {
            return (0, Ot.e)(this, ee, "f")
          }
          set invertNormalMapX(tt) {
            (0, Ot.i)(this, ee, tt, "f")
          }
          get invertNormalMapY() {
            return (0, Ot.e)(this, Ve, "f")
          }
          set invertNormalMapY(tt) {
            (0, Ot.i)(this, Ve, tt, "f")
          }
          get twoSidedLighting() {
            return (0, Ot.e)(this, Oe, "f")
          }
          set twoSidedLighting(tt) {
            (0, Ot.i)(this, Oe, tt, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Ot.e)(this, qe, "f")
          }
          set applyDecalMapAfterDetailMap(tt) {
            (0, Ot.i)(this, qe, tt, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(Vt, qt) {
            super(Vt, qt, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || tt.ForceGLSL), this._diffuseTexture = (0, Ot.m)(this, WV, null), et.set(this, ((0, Ot.m)(this, SV), (0, Ot.m)(this, cV, void 0))), this._ambientTexture = ((0, Ot.m)(this, RV), (0, Ot.m)(this, IV, null)), Xt.set(this, ((0, Ot.m)(this, PV), (0, Ot.m)(this, ZV, void 0))), this._opacityTexture = ((0, Ot.m)(this, LV), (0, Ot.m)(this, FV, null)), Et.set(this, ((0, Ot.m)(this, kV), (0, Ot.m)(this, GV, void 0))), this._reflectionTexture = ((0, Ot.m)(this, zV), (0, Ot.m)(this, oV, null)), ht.set(this, ((0, Ot.m)(this, rV), (0, Ot.m)(this, UV, void 0))), this._emissiveTexture = ((0, Ot.m)(this, AV), (0, Ot.m)(this, iV, null)), vt.set(this, ((0, Ot.m)(this, YV), (0, Ot.m)(this, BV, void 0))), this._specularTexture = ((0, Ot.m)(this, pV), (0, Ot.m)(this, xV, null)), Wt.set(this, ((0, Ot.m)(this, TV), (0, Ot.m)(this, gV, void 0))), this._bumpTexture = ((0, Ot.m)(this, sV), (0, Ot.m)(this, nV, null)), St.set(this, ((0, Ot.m)(this, tO), (0, Ot.m)(this, eO, void 0))), this._lightmapTexture = ((0, Ot.m)(this, VO), (0, Ot.m)(this, OO, null)), ct.set(this, ((0, Ot.m)(this, qO), (0, Ot.m)(this, DO, void 0))), this._refractionTexture = ((0, Ot.m)(this, mO), (0, Ot.m)(this, dO, null)), It.set(this, ((0, Ot.m)(this, jO), (0, Ot.m)(this, HO, void 0))), this.ambientColor = ((0, Ot.m)(this, XO), (0, Ot.m)(this, QO, new dt.b(0, 0, 0))), this.diffuseColor = ((0, Ot.m)(this, lO), (0, Ot.m)(this, EO, new dt.b(1, 1, 1))), this.specularColor = ((0, Ot.m)(this, fO), (0, Ot.m)(this, wO, new dt.b(1, 1, 1))), this.emissiveColor = ((0, Ot.m)(this, yO), (0, Ot.m)(this, NO, new dt.b(0, 0, 0))), this.specularPower = ((0, Ot.m)(this, aO), (0, Ot.m)(this, MO, 64)), this._useAlphaFromDiffuseTexture = ((0, Ot.m)(this, bO), (0, Ot.m)(this, JO, !1)), Lt.set(this, ((0, Ot.m)(this, CO), (0, Ot.m)(this, uO, void 0))), this._useEmissiveAsIllumination = ((0, Ot.m)(this, KO), (0, Ot.m)(this, hO, !1)), Ft.set(this, ((0, Ot.m)(this, vO), (0, Ot.m)(this, WO, void 0))), this._linkEmissiveWithDiffuse = ((0, Ot.m)(this, SO), (0, Ot.m)(this, cO, !1)), kt.set(this, ((0, Ot.m)(this, RO), (0, Ot.m)(this, IO, void 0))), this._useSpecularOverAlpha = ((0, Ot.m)(this, PO), (0, Ot.m)(this, ZO, !1)), Gt.set(this, ((0, Ot.m)(this, LO), (0, Ot.m)(this, FO, void 0))), this._useReflectionOverAlpha = ((0, Ot.m)(this, kO), (0, Ot.m)(this, GO, !1)), zt.set(this, ((0, Ot.m)(this, zO), (0, Ot.m)(this, oO, void 0))), this._disableLighting = ((0, Ot.m)(this, rO), (0, Ot.m)(this, UO, !1)), ot.set(this, ((0, Ot.m)(this, AO), (0, Ot.m)(this, iO, void 0))), this._useObjectSpaceNormalMap = ((0, Ot.m)(this, YO), (0, Ot.m)(this, BO, !1)), rt.set(this, ((0, Ot.m)(this, pO), (0, Ot.m)(this, xO, void 0))), this._useParallax = ((0, Ot.m)(this, TO), (0, Ot.m)(this, gO, !1)), Ut.set(this, ((0, Ot.m)(this, sO), (0, Ot.m)(this, nO, void 0))), this._useParallaxOcclusion = ((0, Ot.m)(this, tq), (0, Ot.m)(this, eq, !1)), At.set(this, ((0, Ot.m)(this, Vq), (0, Ot.m)(this, Oq, void 0))), this.parallaxScaleBias = ((0, Ot.m)(this, qq), (0, Ot.m)(this, Dq, .05)), this._roughness = ((0, Ot.m)(this, mq), (0, Ot.m)(this, dq, 0)), it.set(this, ((0, Ot.m)(this, jq), (0, Ot.m)(this, Hq, void 0))), this.indexOfRefraction = ((0, Ot.m)(this, Xq), (0, Ot.m)(this, Qq, .98)), this.invertRefractionY = ((0, Ot.m)(this, lq), (0, Ot.m)(this, Eq, !0)), this.alphaCutOff = ((0, Ot.m)(this, fq), (0, Ot.m)(this, wq, .4)), this._useLightmapAsShadowmap = ((0, Ot.m)(this, yq), (0, Ot.m)(this, Nq, !1)), Yt.set(this, ((0, Ot.m)(this, aq), (0, Ot.m)(this, Mq, void 0))), this._diffuseFresnelParameters = ((0, Ot.m)(this, bq), (0, Ot.m)(this, Jq, void 0)), Bt.set(this, ((0, Ot.m)(this, Cq), (0, Ot.m)(this, uq, void 0))), this._opacityFresnelParameters = ((0, Ot.m)(this, Kq), (0, Ot.m)(this, hq, void 0)), pt.set(this, ((0, Ot.m)(this, vq), (0, Ot.m)(this, Wq, void 0))), this._reflectionFresnelParameters = ((0, Ot.m)(this, Sq), (0, Ot.m)(this, cq, void 0)), xt.set(this, ((0, Ot.m)(this, Rq), (0, Ot.m)(this, Iq, void 0))), this._refractionFresnelParameters = ((0, Ot.m)(this, Pq), (0, Ot.m)(this, Zq, void 0)), Tt.set(this, ((0, Ot.m)(this, Lq), (0, Ot.m)(this, Fq, void 0))), this._emissiveFresnelParameters = ((0, Ot.m)(this, kq), (0, Ot.m)(this, Gq, void 0)), gt.set(this, ((0, Ot.m)(this, zq), (0, Ot.m)(this, oq, void 0))), this._useReflectionFresnelFromSpecular = ((0, Ot.m)(this, rq), (0, Ot.m)(this, Uq, !1)), st.set(this, ((0, Ot.m)(this, Aq), (0, Ot.m)(this, iq, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, Ot.m)(this, Yq), (0, Ot.m)(this, Bq, !1)), nt.set(this, ((0, Ot.m)(this, pq), (0, Ot.m)(this, xq, void 0))), this._maxSimultaneousLights = ((0, Ot.m)(this, Tq), (0, Ot.m)(this, gq, 4)), te.set(this, ((0, Ot.m)(this, sq), (0, Ot.m)(this, nq, void 0))), this._invertNormalMapX = ((0, Ot.m)(this, tD), (0, Ot.m)(this, eD, !1)), ee.set(this, ((0, Ot.m)(this, VD), (0, Ot.m)(this, OD, void 0))), this._invertNormalMapY = ((0, Ot.m)(this, qD), (0, Ot.m)(this, DD, !1)), Ve.set(this, ((0, Ot.m)(this, mD), (0, Ot.m)(this, dD, void 0))), this._twoSidedLighting = ((0, Ot.m)(this, jD), (0, Ot.m)(this, HD, !1)), Oe.set(this, ((0, Ot.m)(this, XD), (0, Ot.m)(this, QD, void 0))), this._applyDecalMapAfterDetailMap = ((0, Ot.m)(this, lD), (0, Ot.m)(this, ED, !1)), qe.set(this, ((0, Ot.m)(this, fD), (0, Ot.m)(this, wD, void 0))), this._vertexPullingMetadata = ((0, Ot.m)(this, yD), null), this._renderTargets = new Dt.g(16), this._globalAmbientColor = new dt.b(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new Nt.e(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new Ht.b, this.getRenderTargetTextures = () => (this._renderTargets.reset(), tt.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), tt.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(tt.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(tt.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === lt.c.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== lt.c.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(et, Vt) {
            let Ot = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const qt = Vt._drawWrapper;
            if (qt.effect && this.isFrozen && qt._wasPreviouslyReady && qt._wasPreviouslyUsingInstances === Ot) return !0;
            Vt.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Vt.materialDefines = new Pt(this._eventInfo.defineNames));
            const Dt = this.vI(),
              mt = Vt.materialDefines;
            if (this._isReadyForSubMesh(Vt)) return !0;
            const dt = Dt.Jf();
            if (mt._needNormals = (0, Jt.Y)(Dt, et, mt, !0, this._maxSimultaneousLights, this._disableLighting), !(0, Jt.e)(Dt, et, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, Jt.gb)(Dt, mt);
            const Xt = this.needAlphaBlendingForMesh(et) && this.vI().useOrderIndependentTransparency;
            if ((0, Jt.jb)(Dt, mt, this.canRenderToMRT && !Xt), (0, Jt.ib)(Dt, mt, Xt), Kt.c.PrepareDefines(dt.currentRenderPassId, et, mt), mt._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, mt._needUVs = !1;
              for (let tt = 1; tt <= 6; ++tt) mt["MAINUV" + tt] = !1;
              if (Dt.texturesEnabled) {
                if (mt.DIFFUSEDIRECTUV = 0, mt.BUMPDIRECTUV = 0, mt.AMBIENTDIRECTUV = 0, mt.OPACITYDIRECTUV = 0, mt.EMISSIVEDIRECTUV = 0, mt.SPECULARDIRECTUV = 0, mt.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && tt.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, Jt.ab)(this._diffuseTexture, mt, "DIFFUSE")
                } else mt.DIFFUSE = !1;
                if (this._ambientTexture && tt.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, Jt.ab)(this._ambientTexture, mt, "AMBIENT")
                } else mt.AMBIENT = !1;
                if (this._opacityTexture && tt.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, Jt.ab)(this._opacityTexture, mt, "OPACITY"), mt.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else mt.OPACITY = !1;
                if (this._reflectionTexture && tt.ReflectionTextureEnabled ? (mt.ROUGHNESS = this._roughness > 0, mt.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (mt.ROUGHNESS = !1, mt.REFLECTIONOVERALPHA = !1), !(0, Jt.X)(Dt, this._reflectionTexture, mt)) return !1;
                if (this._emissiveTexture && tt.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, Jt.ab)(this._emissiveTexture, mt, "EMISSIVE")
                } else mt.EMISSIVE = !1;
                if (this._lightmapTexture && tt.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, Jt.ab)(this._lightmapTexture, mt, "LIGHTMAP"), mt.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, mt.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else mt.LIGHTMAP = !1;
                if (this._specularTexture && tt.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, Jt.ab)(this._specularTexture, mt, "SPECULAR"), mt.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else mt.SPECULAR = !1;
                if (Dt.Jf().getCaps().standardDerivatives && this._bumpTexture && tt.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, Jt.ab)(this._bumpTexture, mt, "BUMP"), mt.PARALLAX = this._useParallax, mt.PARALLAX_RHS = Dt.useRightHandedSystem, mt.PARALLAXOCCLUSION = this._useParallaxOcclusion, mt.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else mt.BUMP = !1, mt.PARALLAX = !1, mt.PARALLAX_RHS = !1, mt.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && tt.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  mt._needUVs = !0, mt.REFRACTION = !0, mt.REFRACTIONMAP_3D = this._refractionTexture.isCube, mt.RGBDREFRACTION = this._refractionTexture.isRGBD, mt.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else mt.REFRACTION = !1;
                mt.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else mt.DIFFUSE = !1, mt.AMBIENT = !1, mt.OPACITY = !1, mt.REFLECTION = !1, mt.EMISSIVE = !1, mt.LIGHTMAP = !1, mt.BUMP = !1, mt.REFRACTION = !1;
              mt.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), mt.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, mt.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, mt.SPECULAROVERALPHA = this._useSpecularOverAlpha, mt.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, mt.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, mt.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(et), mt.TEXTURE_REPETITION_MODE = dt.version > 1 || dt.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = mt, this._eventInfo.subMesh = Vt, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (mt._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(mt), mt.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, mt.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (mt._areFresnelDirty && (tt.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (mt.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, mt.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, mt.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, mt.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, mt.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, mt.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, mt._needNormals = !0, mt.FRESNEL = !0) : mt.FRESNEL = !1), mt.AREALIGHTUSED || mt.CLUSTLIGHT_BATCH)
              for (let tt = 0; tt < et.lightSources.length; tt++)
                if (!et.lightSources[tt]._isReady()) return !1;
            (0, Jt.eb)(et, Dt, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(et), mt, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Vt.getRenderingMesh(), this._isVertexOutputInvariant), (0, Jt.V)(Dt, dt, this, mt, Ot, null, Vt.getRenderingMesh().hasThinInstances), this._eventInfo.defines = mt, this._eventInfo.mesh = et, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Jt.R)(et, mt, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let lt = !1;
            if (mt.isDirty) {
              const Ot = mt._areLightsDisposed;
              mt.markAsProcessed();
              const qt = new yt.b;
              mt.REFLECTION && qt.addFallback(0, "REFLECTION"), mt.SPECULAR && qt.addFallback(0, "SPECULAR"), mt.BUMP && qt.addFallback(0, "BUMP"), mt.PARALLAX && qt.addFallback(1, "PARALLAX"), mt.PARALLAX_RHS && qt.addFallback(1, "PARALLAX_RHS"), mt.PARALLAXOCCLUSION && qt.addFallback(0, "PARALLAXOCCLUSION"), mt.SPECULAROVERALPHA && qt.addFallback(0, "SPECULAROVERALPHA"), mt.FOG && qt.addFallback(1, "FOG"), mt.POINTSIZE && qt.addFallback(0, "POINTSIZE"), mt.LOGARITHMICDEPTH && qt.addFallback(0, "LOGARITHMICDEPTH"), (0, Jt.A)(mt, qt, this._maxSimultaneousLights), mt.SPECULARTERM && qt.addFallback(0, "SPECULARTERM"), mt.DIFFUSEFRESNEL && qt.addFallback(1, "DIFFUSEFRESNEL"), mt.OPACITYFRESNEL && qt.addFallback(2, "OPACITYFRESNEL"), mt.REFLECTIONFRESNEL && qt.addFallback(3, "REFLECTIONFRESNEL"), mt.EMISSIVEFRESNEL && qt.addFallback(4, "EMISSIVEFRESNEL"), mt.FRESNEL && qt.addFallback(4, "FRESNEL"), mt.MULTIVIEW && qt.addFallback(0, "MULTIVIEW");
              const Xt = [jt.m.PositionKind];
              mt.NORMAL && Xt.push(jt.m.NormalKind), mt.TANGENT && Xt.push(jt.m.TangentKind);
              for (let tt = 1; tt <= 6; ++tt) mt["UV" + tt] && Xt.push(`uv${1===tt?"":tt}`);
              mt.VERTEXCOLOR && Xt.push(jt.m.ColorKind), (0, Jt.H)(Xt, et, mt, qt), (0, Jt.L)(Xt, mt), (0, Jt.M)(Xt, et, mt), (0, Jt.D)(Xt, et, mt);
              let Et = "default";
              const ft = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                wt = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, Jt.lb)(ft, wt, !1);
              const Nt = ["Material", "Scene", "Mesh"],
                Ct = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: mt.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = qt, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = mt, this._eventInfo.uniforms = ft, this._eventInfo.attributes = Xt, this._eventInfo.samplers = wt, this._eventInfo.uniformBuffersNames = Nt, this._eventInfo.customCode = void 0, this._eventInfo.mesh = et, this._eventInfo.indexParameters = Ct, this._callbackPluginEventGeneric(128, this._eventInfo), Kt.c.AddUniformsAndSamplers(ft, wt), Ht.b.AddUniforms(ft), Ht.b.AddSamplers(wt), Qt.b && (Qt.b.PrepareUniforms(ft, mt), Qt.b.PrepareSamplers(wt, mt)), (0, Jt.ob)({
                  uniformsNames: ft,
                  uniformBuffersNames: Nt,
                  samplers: wt,
                  defines: mt,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, Mt.e)(ft), this._useVertexPulling) {
                const tt = Vt.getRenderingMesh(),
                  et = tt?.geometry;
                et && (this._vertexPullingMetadata = (0, bt.h)(et), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((tt, et) => {
                  ft.push(`vp_${et}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const ut = {};
              this.customShaderNameResolve && (Et = this.customShaderNameResolve(Et, ft, Nt, wt, mt, Xt, ut));
              const ht = mt.toString(),
                vt = Vt.effect,
                Wt = Dt.Jf().createEffect(Et, {
                  attributes: Xt,
                  uniformsNames: ft,
                  uniformBuffersNames: Nt,
                  samplers: wt,
                  defines: ht,
                  fallbacks: qt,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: Ct,
                  processFinalCode: ut.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: mt.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: tt._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, dt);
              if (this._eventInfo.customCode = void 0, Wt)
                if (this._onEffectCreatedObservable && (Rt.effect = Wt, Rt.subMesh = Vt, this._onEffectCreatedObservable.notifyObservers(Rt)), this.allowShaderHotSwapping && vt && !Wt.isReady()) {
                  if (mt.markAsUnprocessed(), lt = this.isFrozen, Ot) return mt._areLightsDisposed = !0, !1
                } else Dt.resetCachedMaterial(), Vt.setEffect(Wt, mt, this._materialContext)
            }
            return !(!Vt.effect || !Vt.effect.isReady()) && (mt._renderId = Dt.getRenderId(), qt._wasPreviouslyReady = !lt, qt._wasPreviouslyUsingInstances = Ot, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const tt = this._uniformBuffer;
            tt.addUniform("diffuseLeftColor", 4), tt.addUniform("diffuseRightColor", 4), tt.addUniform("opacityParts", 4), tt.addUniform("reflectionLeftColor", 4), tt.addUniform("reflectionRightColor", 4), tt.addUniform("refractionLeftColor", 4), tt.addUniform("refractionRightColor", 4), tt.addUniform("emissiveLeftColor", 4), tt.addUniform("emissiveRightColor", 4), tt.addUniform("vDiffuseInfos", 2), tt.addUniform("vAmbientInfos", 2), tt.addUniform("vOpacityInfos", 2), tt.addUniform("vEmissiveInfos", 2), tt.addUniform("vLightmapInfos", 2), tt.addUniform("vSpecularInfos", 2), tt.addUniform("vBumpInfos", 3), tt.addUniform("diffuseMatrix", 16), tt.addUniform("ambientMatrix", 16), tt.addUniform("opacityMatrix", 16), tt.addUniform("emissiveMatrix", 16), tt.addUniform("lightmapMatrix", 16), tt.addUniform("specularMatrix", 16), tt.addUniform("bumpMatrix", 16), tt.addUniform("vTangentSpaceParams", 2), tt.addUniform("pointSize", 1), tt.addUniform("alphaCutOff", 1), tt.addUniform("refractionMatrix", 16), tt.addUniform("vRefractionInfos", 4), tt.addUniform("vRefractionPosition", 3), tt.addUniform("vRefractionSize", 3), tt.addUniform("vSpecularColor", 4), tt.addUniform("vEmissiveColor", 3), tt.addUniform("vDiffuseColor", 4), tt.addUniform("vAmbientColor", 3), tt.addUniform("cameraInfo", 4), tt.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Jt.kb)(tt, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(et, Vt, Ot) {
            const qt = this.vI(),
              Dt = Ot.materialDefines;
            if (!Dt) return;
            const jt = Ot.effect;
            if (!jt) return;
            this._activeEffect = jt, Vt.getMeshUniformBuffer().bindToEffect(jt, "Mesh"), Vt.transferToEffect(et), this._uniformBuffer.bindToEffect(jt, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, qt, Vt, et, this.isFrozen), Kt.c.Bind(qt.Jf().currentRenderPassId, this._activeEffect, Vt, et, this);
            const Ht = qt.activeCamera;
            Ht ? this._uniformBuffer.updateFloat4("cameraInfo", Ht.minZ, Ht.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Xt = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Xt[0], Xt[1], Xt[2], Xt[3]), this._eventInfo.subMesh = Ot, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Dt.OBJECTSPACE_NORMALMAP && (et.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Qt = this._mustRebind(qt, jt, Ot, Vt.visibility),
              lt = qt.Jf()._features.needToAlwaysBindUniformBuffers;
            (0, Jt.f)(Vt, jt), this._vertexPullingMetadata && (0, bt.d)(jt, this._vertexPullingMetadata);
            const Et = this._uniformBuffer;
            if (Qt) {
              if (this.bindViewProjection(jt), !Et.useUbo || !this.isFrozen || !Et.isSync || Ot._drawWrapper._forceRebindOnNextCall) {
                if (tt.FresnelEnabled && Dt.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (Et.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), Et.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const tt = dt.f.Color3[0];
                    tt.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), Et.updateColor4("opacityParts", tt, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (Et.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), Et.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (Et.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), Et.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (Et.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), Et.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (Dt.ALPHATEST && Et.updateFloat("alphaCutOff", this.alphaCutOff), qt.texturesEnabled && (this._diffuseTexture && tt.DiffuseTextureEnabled && (Et.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, Jt.w)(this._diffuseTexture, Et, "diffuse")), this._ambientTexture && tt.AmbientTextureEnabled && (Et.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, Jt.w)(this._ambientTexture, Et, "ambient")), this._opacityTexture && tt.OpacityTextureEnabled && (Et.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Jt.w)(this._opacityTexture, Et, "opacity")), (0, Jt.l)(qt, Dt, Et, dt.b.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && tt.ReflectionTextureEnabled || Et.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && tt.EmissiveTextureEnabled && (Et.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Jt.w)(this._emissiveTexture, Et, "emissive")), this._lightmapTexture && tt.LightmapTextureEnabled && (Et.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Jt.w)(this._lightmapTexture, Et, "lightmap")), this._specularTexture && tt.SpecularTextureEnabled && (Et.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, Jt.w)(this._specularTexture, Et, "specular")), this._bumpTexture && qt.Jf().getCaps().standardDerivatives && tt.BumpTextureEnabled && (Et.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, Jt.w)(this._bumpTexture, Et, "bump"), qt._mirroredCameraPosition ? Et.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Et.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && tt.RefractionTextureEnabled)) {
                  let tt = 1;
                  if (this._refractionTexture.isCube || (Et.x_("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (tt = this._refractionTexture.depth)), Et.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, tt, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const tt = this._refractionTexture;
                    Et.updateVector3("vRefractionPosition", tt.boundingBoxPosition), Et.updateVector3("vRefractionSize", tt.boundingBoxSize)
                  }
                }
                this.pointsCloud && Et.updateFloat("pointSize", this.pointSize), Et.updateColor4("vSpecularColor", this.specularColor, this.specularPower), Et.updateColor3("vEmissiveColor", tt.EmissiveTextureEnabled ? this.emissiveColor : dt.b.BlackReadOnly), Et.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), qt.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), Et.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              qt.texturesEnabled && (this._diffuseTexture && tt.DiffuseTextureEnabled && jt.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && tt.AmbientTextureEnabled && jt.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && tt.OpacityTextureEnabled && jt.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && tt.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? jt.setTexture("reflectionCubeSampler", this._reflectionTexture) : jt.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && tt.EmissiveTextureEnabled && jt.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && tt.LightmapTextureEnabled && jt.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && tt.SpecularTextureEnabled && jt.setTexture("specularSampler", this._specularTexture), this._bumpTexture && qt.Jf().getCaps().standardDerivatives && tt.BumpTextureEnabled && jt.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && tt.RefractionTextureEnabled && (this._refractionTexture.isCube ? jt.setTexture("refractionCubeSampler", this._refractionTexture) : jt.setTexture("refraction2DSampler", this._refractionTexture))), this.vI().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Vt) && this.vI().depthPeelingRenderer.bind(jt), this._eventInfo.subMesh = Ot, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Mt.f)(jt, this, qt), this.bindEyePosition(jt)
            } else lt && (this._needToBindSceneUbo = !0);
            !Qt && this.isFrozen && !lt || !qt.lightsEnabled || this._disableLighting || (0, Jt.o)(qt, Vt, jt, Dt, this._maxSimultaneousLights), !Qt && this.isFrozen || ((qt.fogEnabled && Vt.applyFog && qt.fogMode !== mt.d.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || Vt.receiveShadows || Dt.PREPASS || Dt.CLUSTLIGHT_BATCH) && this.bindView(jt), (0, Jt.i)(qt, Vt, jt), Dt.NUM_MORPH_INFLUENCERS && (0, Jt.r)(Vt, jt), Dt.BAKED_VERTEX_ANIMATION_TEXTURE && Vt.bakedVertexAnimationManager?.bind(jt, Dt.INSTANCES), this.useLogarithmicDepth && (0, Jt.q)(Dt, jt, qt), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(Vt, this._activeEffect, Ot), Et.update()
          }
          _canBindRunFollower(et, Vt, Ot, qt, Dt) {
            const mt = et.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === tt.prototype.isReadyForSubMesh && this.bindForSubMesh === tt.prototype.bindForSubMesh && this._mustRebind === ft.e.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !Vt._features.needToAlwaysBindUniformBuffers && !(mt && mt.enabled && mt.currentRTisSceneRT) && !Kt.c._Configurations[Vt.currentRenderPassId] && !qt.materialDefines?.OBJECTSPACE_NORMALMAP && !Ot.skeleton && !Dt._bonesComputationForcedToCPU
          }
          _bindRunFollower(tt, et, Vt, Ot) {
            this._activeEffect = Ot, et.getMeshUniformBuffer().bindToEffect(Ot, "Mesh"), et.transferToEffect(tt);
            const qt = this._uniformBuffer;
            qt.bindToEffect(Ot, "Material");
            const Dt = this._scene.activeCamera;
            Dt ? qt.updateFloat4("cameraInfo", Dt.minZ, Dt.maxZ, 0, 0) : qt.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const mt = this.textureRepetitionHexTilingParams;
            qt.updateFloat4("vTextureRepetitionHexTilingParams", mt[0], mt[1], mt[2], mt[3]), this._afterBind(et, Ot, Vt), qt.update()
          }
          getAnimatables() {
            const tt = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && tt.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && tt.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && tt.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && tt.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && tt.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && tt.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && tt.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && tt.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && tt.push(this._refractionTexture), tt
          }
          getActiveTextures() {
            const tt = super.getActiveTextures();
            return this._diffuseTexture && tt.push(this._diffuseTexture), this._ambientTexture && tt.push(this._ambientTexture), this._opacityTexture && tt.push(this._opacityTexture), this._reflectionTexture && tt.push(this._reflectionTexture), this._emissiveTexture && tt.push(this._emissiveTexture), this._specularTexture && tt.push(this._specularTexture), this._bumpTexture && tt.push(this._bumpTexture), this._lightmapTexture && tt.push(this._lightmapTexture), this._refractionTexture && tt.push(this._refractionTexture), tt
          }
          hasTexture(tt) {
            return !!super.hasTexture(tt) || (this._diffuseTexture === tt || (this._ambientTexture === tt || (this._opacityTexture === tt || (this._reflectionTexture === tt || (this._emissiveTexture === tt || (this._specularTexture === tt || (this._bumpTexture === tt || (this._lightmapTexture === tt || this._refractionTexture === tt))))))))
          }
          dispose(tt, et) {
            et && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(tt, et)
          }
          clone(et) {
            let Vt = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const qt = Ct.d.Clone((() => new tt(et, this.vI())), this, {
              cloneTexturesOnlyOnce: Vt
            });
            return qt.name = et, qt.id = et, this.stencil.copyTo(qt.stencil), this._clonePlugins(qt, Ot), qt
          }
          static Parse(et, Vt, Ot) {
            const qt = Ct.d.Parse((() => new tt(et.name, Vt)), et, Vt, Ot);
            return et.stencil && qt.stencil.parse(et.stencil, Vt, Ot), lt.c._ParsePlugins(et, qt, Vt, Ot), qt
          }
          static get DiffuseTextureEnabled() {
            return wt.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(tt) {
            wt.e.DiffuseTextureEnabled = tt
          }
          static get DetailTextureEnabled() {
            return wt.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(tt) {
            wt.e.DetailTextureEnabled = tt
          }
          static get AmbientTextureEnabled() {
            return wt.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(tt) {
            wt.e.AmbientTextureEnabled = tt
          }
          static get OpacityTextureEnabled() {
            return wt.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(tt) {
            wt.e.OpacityTextureEnabled = tt
          }
          static get ReflectionTextureEnabled() {
            return wt.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(tt) {
            wt.e.ReflectionTextureEnabled = tt
          }
          static get EmissiveTextureEnabled() {
            return wt.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(tt) {
            wt.e.EmissiveTextureEnabled = tt
          }
          static get SpecularTextureEnabled() {
            return wt.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(tt) {
            wt.e.SpecularTextureEnabled = tt
          }
          static get BumpTextureEnabled() {
            return wt.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(tt) {
            wt.e.BumpTextureEnabled = tt
          }
          static get LightmapTextureEnabled() {
            return wt.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(tt) {
            wt.e.LightmapTextureEnabled = tt
          }
          static get RefractionTextureEnabled() {
            return wt.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(tt) {
            wt.e.RefractionTextureEnabled = tt
          }
          static get ColorGradingTextureEnabled() {
            return wt.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(tt) {
            wt.e.ColorGradingTextureEnabled = tt
          }
          static get FresnelEnabled() {
            return wt.e.FresnelEnabled
          }
          static set FresnelEnabled(tt) {
            wt.e.FresnelEnabled = tt
          }
        }, et = new WeakMap, Xt = new WeakMap, Et = new WeakMap, ht = new WeakMap, vt = new WeakMap, Wt = new WeakMap, St = new WeakMap, ct = new WeakMap, It = new WeakMap, Lt = new WeakMap, Ft = new WeakMap, kt = new WeakMap, Gt = new WeakMap, zt = new WeakMap, ot = new WeakMap, rt = new WeakMap, Ut = new WeakMap, At = new WeakMap, it = new WeakMap, Yt = new WeakMap, Bt = new WeakMap, pt = new WeakMap, xt = new WeakMap, Tt = new WeakMap, gt = new WeakMap, st = new WeakMap, nt = new WeakMap, te = new WeakMap, ee = new WeakMap, Ve = new WeakMap, Oe = new WeakMap, qe = new WeakMap, (() => {
          const et = "function" === typeof Symbol && Symbol.metadata ? Object.create(vV[Symbol.metadata] ?? null) : void 0;
          De = [(0, qt.E)("diffuseTexture")], me = [(0, qt.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], de = [(0, qt.E)("ambientTexture")], je = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], He = [(0, qt.E)("opacityTexture")], Xe = [(0, qt.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], Qe = [(0, qt.E)("reflectionTexture")], le = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], Ee = [(0, qt.E)("emissiveTexture")], fe = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], we = [(0, qt.E)("specularTexture")], ye = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], Ne = [(0, qt.E)("bumpTexture")], ae = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], Me = [(0, qt.E)("lightmapTexture")], be = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], Je = [(0, qt.E)("refractionTexture")], Ce = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], ue = [(0, qt.t)("ambient")], Ke = [(0, qt.t)("diffuse")], he = [(0, qt.t)("specular")], ve = [(0, qt.t)("emissive")], We = [(0, qt.P)()], Se = [(0, qt.P)("useAlphaFromDiffuseTexture")], ce = [() => ({
            init(tt) {
              return void 0 === tt && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = tt), tt
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(tt) {
              this._useAlphaFromDiffuseTexture = tt
            }
          })], Re = [(0, qt.P)("useEmissiveAsIllumination")], Ie = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], Pe = [(0, qt.P)("linkEmissiveWithDiffuse")], Ze = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], Le = [(0, qt.P)("useSpecularOverAlpha")], Fe = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], ke = [(0, qt.P)("useReflectionOverAlpha")], Ge = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], ze = [(0, qt.P)("disableLighting")], oe = [(0, qt.i)("_markAllSubMeshesAsLightsDirty")], re = [(0, qt.P)("useObjectSpaceNormalMap")], Ue = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], Ae = [(0, qt.P)("useParallax")], ie = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], Ye = [(0, qt.P)("useParallaxOcclusion")], Be = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], pe = [(0, qt.P)()], xe = [(0, qt.P)("roughness")], Te = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], ge = [(0, qt.P)()], se = [(0, qt.P)()], ne = [(0, qt.P)()], tV = [(0, qt.P)("useLightmapAsShadowmap")], eV = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], VV = [(0, qt.y)("diffuseFresnelParameters")], OV = [(0, qt.i)("_markAllSubMeshesAsFresnelDirty")], qV = [(0, qt.y)("opacityFresnelParameters")], DV = [(0, qt.i)("_markAllSubMeshesAsFresnelAndMiscDirty")], mV = [(0, qt.y)("reflectionFresnelParameters")], dV = [(0, qt.i)("_markAllSubMeshesAsFresnelDirty")], jV = [(0, qt.y)("refractionFresnelParameters")], HV = [(0, qt.i)("_markAllSubMeshesAsFresnelDirty")], XV = [(0, qt.y)("emissiveFresnelParameters")], QV = [(0, qt.i)("_markAllSubMeshesAsFresnelDirty")], lV = [(0, qt.P)("useReflectionFresnelFromSpecular")], EV = [(0, qt.i)("_markAllSubMeshesAsFresnelDirty")], fV = [(0, qt.P)("useGlossinessFromSpecularMapAlpha")], wV = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], yV = [(0, qt.P)("maxSimultaneousLights")], NV = [(0, qt.i)("_markAllSubMeshesAsLightsDirty")], aV = [(0, qt.P)("invertNormalMapX")], MV = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], bV = [(0, qt.P)("invertNormalMapY")], JV = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], CV = [(0, qt.P)("twoSidedLighting")], uV = [(0, qt.i)("_markAllSubMeshesAsTexturesDirty")], KV = [(0, qt.P)("applyDecalMapAfterDetailMap")], hV = [(0, qt.i)("_markAllSubMeshesAsMiscDirty")], (0, Ot.l)(tt, null, me, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "diffuseTexture" in tt,
              get: tt => tt.diffuseTexture,
              set: (tt, et) => {
                tt.diffuseTexture = et
              }
            },
            metadata: et
          }, cV, RV), (0, Ot.l)(tt, null, je, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "ambientTexture" in tt,
              get: tt => tt.ambientTexture,
              set: (tt, et) => {
                tt.ambientTexture = et
              }
            },
            metadata: et
          }, ZV, LV), (0, Ot.l)(tt, null, Xe, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "opacityTexture" in tt,
              get: tt => tt.opacityTexture,
              set: (tt, et) => {
                tt.opacityTexture = et
              }
            },
            metadata: et
          }, GV, zV), (0, Ot.l)(tt, null, le, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "reflectionTexture" in tt,
              get: tt => tt.reflectionTexture,
              set: (tt, et) => {
                tt.reflectionTexture = et
              }
            },
            metadata: et
          }, UV, AV), (0, Ot.l)(tt, null, fe, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "emissiveTexture" in tt,
              get: tt => tt.emissiveTexture,
              set: (tt, et) => {
                tt.emissiveTexture = et
              }
            },
            metadata: et
          }, BV, pV), (0, Ot.l)(tt, null, ye, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "specularTexture" in tt,
              get: tt => tt.specularTexture,
              set: (tt, et) => {
                tt.specularTexture = et
              }
            },
            metadata: et
          }, gV, sV), (0, Ot.l)(tt, null, ae, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "bumpTexture" in tt,
              get: tt => tt.bumpTexture,
              set: (tt, et) => {
                tt.bumpTexture = et
              }
            },
            metadata: et
          }, eO, VO), (0, Ot.l)(tt, null, be, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "lightmapTexture" in tt,
              get: tt => tt.lightmapTexture,
              set: (tt, et) => {
                tt.lightmapTexture = et
              }
            },
            metadata: et
          }, DO, mO), (0, Ot.l)(tt, null, Ce, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "refractionTexture" in tt,
              get: tt => tt.refractionTexture,
              set: (tt, et) => {
                tt.refractionTexture = et
              }
            },
            metadata: et
          }, HO, XO), (0, Ot.l)(tt, null, ce, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "useAlphaFromDiffuseTexture" in tt,
              get: tt => tt.useAlphaFromDiffuseTexture,
              set: (tt, et) => {
                tt.useAlphaFromDiffuseTexture = et
              }
            },
            metadata: et
          }, uO, KO), (0, Ot.l)(tt, null, Ie, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: tt => "useEmissiveAsIllumination" in tt,
              get: tt => tt.useEmissiveAsIllumination,
              set: (tt, et) => {
                tt.useEmissiveAsIllumination = et
              }
            },
            metadata: et
          }, WO, SO), (0, Ot.l)(tt, null, Ze, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: tt => "linkEmissiveWithDiffuse" in tt,
              get: tt => tt.linkEmissiveWithDiffuse,
              set: (tt, et) => {
                tt.linkEmissiveWithDiffuse = et
              }
            },
            metadata: et
          }, IO, PO), (0, Ot.l)(tt, null, Fe, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: tt => "useSpecularOverAlpha" in tt,
              get: tt => tt.useSpecularOverAlpha,
              set: (tt, et) => {
                tt.useSpecularOverAlpha = et
              }
            },
            metadata: et
          }, FO, kO), (0, Ot.l)(tt, null, Ge, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: tt => "useReflectionOverAlpha" in tt,
              get: tt => tt.useReflectionOverAlpha,
              set: (tt, et) => {
                tt.useReflectionOverAlpha = et
              }
            },
            metadata: et
          }, oO, rO), (0, Ot.l)(tt, null, oe, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: tt => "disableLighting" in tt,
              get: tt => tt.disableLighting,
              set: (tt, et) => {
                tt.disableLighting = et
              }
            },
            metadata: et
          }, iO, YO), (0, Ot.l)(tt, null, Ue, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: tt => "useObjectSpaceNormalMap" in tt,
              get: tt => tt.useObjectSpaceNormalMap,
              set: (tt, et) => {
                tt.useObjectSpaceNormalMap = et
              }
            },
            metadata: et
          }, xO, TO), (0, Ot.l)(tt, null, ie, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: tt => "useParallax" in tt,
              get: tt => tt.useParallax,
              set: (tt, et) => {
                tt.useParallax = et
              }
            },
            metadata: et
          }, nO, tq), (0, Ot.l)(tt, null, Be, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: tt => "useParallaxOcclusion" in tt,
              get: tt => tt.useParallaxOcclusion,
              set: (tt, et) => {
                tt.useParallaxOcclusion = et
              }
            },
            metadata: et
          }, Oq, qq), (0, Ot.l)(tt, null, Te, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: tt => "roughness" in tt,
              get: tt => tt.roughness,
              set: (tt, et) => {
                tt.roughness = et
              }
            },
            metadata: et
          }, Hq, Xq), (0, Ot.l)(tt, null, eV, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: tt => "useLightmapAsShadowmap" in tt,
              get: tt => tt.useLightmapAsShadowmap,
              set: (tt, et) => {
                tt.useLightmapAsShadowmap = et
              }
            },
            metadata: et
          }, Mq, bq), (0, Ot.l)(tt, null, OV, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: tt => "diffuseFresnelParameters" in tt,
              get: tt => tt.diffuseFresnelParameters,
              set: (tt, et) => {
                tt.diffuseFresnelParameters = et
              }
            },
            metadata: et
          }, uq, Kq), (0, Ot.l)(tt, null, DV, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: tt => "opacityFresnelParameters" in tt,
              get: tt => tt.opacityFresnelParameters,
              set: (tt, et) => {
                tt.opacityFresnelParameters = et
              }
            },
            metadata: et
          }, Wq, Sq), (0, Ot.l)(tt, null, dV, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: tt => "reflectionFresnelParameters" in tt,
              get: tt => tt.reflectionFresnelParameters,
              set: (tt, et) => {
                tt.reflectionFresnelParameters = et
              }
            },
            metadata: et
          }, Iq, Pq), (0, Ot.l)(tt, null, HV, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: tt => "refractionFresnelParameters" in tt,
              get: tt => tt.refractionFresnelParameters,
              set: (tt, et) => {
                tt.refractionFresnelParameters = et
              }
            },
            metadata: et
          }, Fq, kq), (0, Ot.l)(tt, null, QV, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: tt => "emissiveFresnelParameters" in tt,
              get: tt => tt.emissiveFresnelParameters,
              set: (tt, et) => {
                tt.emissiveFresnelParameters = et
              }
            },
            metadata: et
          }, oq, rq), (0, Ot.l)(tt, null, EV, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: tt => "useReflectionFresnelFromSpecular" in tt,
              get: tt => tt.useReflectionFresnelFromSpecular,
              set: (tt, et) => {
                tt.useReflectionFresnelFromSpecular = et
              }
            },
            metadata: et
          }, iq, Yq), (0, Ot.l)(tt, null, wV, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: tt => "useGlossinessFromSpecularMapAlpha" in tt,
              get: tt => tt.useGlossinessFromSpecularMapAlpha,
              set: (tt, et) => {
                tt.useGlossinessFromSpecularMapAlpha = et
              }
            },
            metadata: et
          }, xq, Tq), (0, Ot.l)(tt, null, NV, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: tt => "maxSimultaneousLights" in tt,
              get: tt => tt.maxSimultaneousLights,
              set: (tt, et) => {
                tt.maxSimultaneousLights = et
              }
            },
            metadata: et
          }, nq, tD), (0, Ot.l)(tt, null, MV, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: tt => "invertNormalMapX" in tt,
              get: tt => tt.invertNormalMapX,
              set: (tt, et) => {
                tt.invertNormalMapX = et
              }
            },
            metadata: et
          }, OD, qD), (0, Ot.l)(tt, null, JV, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: tt => "invertNormalMapY" in tt,
              get: tt => tt.invertNormalMapY,
              set: (tt, et) => {
                tt.invertNormalMapY = et
              }
            },
            metadata: et
          }, dD, jD), (0, Ot.l)(tt, null, uV, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: tt => "twoSidedLighting" in tt,
              get: tt => tt.twoSidedLighting,
              set: (tt, et) => {
                tt.twoSidedLighting = et
              }
            },
            metadata: et
          }, QD, lD), (0, Ot.l)(tt, null, hV, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: tt => "applyDecalMapAfterDetailMap" in tt,
              get: tt => tt.applyDecalMapAfterDetailMap,
              set: (tt, et) => {
                tt.applyDecalMapAfterDetailMap = et
              }
            },
            metadata: et
          }, wD, yD), (0, Ot.l)(null, null, De, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "_diffuseTexture" in tt,
              get: tt => tt._diffuseTexture,
              set: (tt, et) => {
                tt._diffuseTexture = et
              }
            },
            metadata: et
          }, WV, SV), (0, Ot.l)(null, null, de, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "_ambientTexture" in tt,
              get: tt => tt._ambientTexture,
              set: (tt, et) => {
                tt._ambientTexture = et
              }
            },
            metadata: et
          }, IV, PV), (0, Ot.l)(null, null, He, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "_opacityTexture" in tt,
              get: tt => tt._opacityTexture,
              set: (tt, et) => {
                tt._opacityTexture = et
              }
            },
            metadata: et
          }, FV, kV), (0, Ot.l)(null, null, Qe, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "_reflectionTexture" in tt,
              get: tt => tt._reflectionTexture,
              set: (tt, et) => {
                tt._reflectionTexture = et
              }
            },
            metadata: et
          }, oV, rV), (0, Ot.l)(null, null, Ee, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "_emissiveTexture" in tt,
              get: tt => tt._emissiveTexture,
              set: (tt, et) => {
                tt._emissiveTexture = et
              }
            },
            metadata: et
          }, iV, YV), (0, Ot.l)(null, null, we, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "_specularTexture" in tt,
              get: tt => tt._specularTexture,
              set: (tt, et) => {
                tt._specularTexture = et
              }
            },
            metadata: et
          }, xV, TV), (0, Ot.l)(null, null, Ne, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "_bumpTexture" in tt,
              get: tt => tt._bumpTexture,
              set: (tt, et) => {
                tt._bumpTexture = et
              }
            },
            metadata: et
          }, nV, tO), (0, Ot.l)(null, null, Me, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "_lightmapTexture" in tt,
              get: tt => tt._lightmapTexture,
              set: (tt, et) => {
                tt._lightmapTexture = et
              }
            },
            metadata: et
          }, OO, qO), (0, Ot.l)(null, null, Je, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "_refractionTexture" in tt,
              get: tt => tt._refractionTexture,
              set: (tt, et) => {
                tt._refractionTexture = et
              }
            },
            metadata: et
          }, dO, jO), (0, Ot.l)(null, null, ue, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: tt => "ambientColor" in tt,
              get: tt => tt.ambientColor,
              set: (tt, et) => {
                tt.ambientColor = et
              }
            },
            metadata: et
          }, QO, lO), (0, Ot.l)(null, null, Ke, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: tt => "diffuseColor" in tt,
              get: tt => tt.diffuseColor,
              set: (tt, et) => {
                tt.diffuseColor = et
              }
            },
            metadata: et
          }, EO, fO), (0, Ot.l)(null, null, he, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: tt => "specularColor" in tt,
              get: tt => tt.specularColor,
              set: (tt, et) => {
                tt.specularColor = et
              }
            },
            metadata: et
          }, wO, yO), (0, Ot.l)(null, null, ve, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: tt => "emissiveColor" in tt,
              get: tt => tt.emissiveColor,
              set: (tt, et) => {
                tt.emissiveColor = et
              }
            },
            metadata: et
          }, NO, aO), (0, Ot.l)(null, null, We, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: tt => "specularPower" in tt,
              get: tt => tt.specularPower,
              set: (tt, et) => {
                tt.specularPower = et
              }
            },
            metadata: et
          }, MO, bO), (0, Ot.l)(null, null, Se, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: tt => "_useAlphaFromDiffuseTexture" in tt,
              get: tt => tt._useAlphaFromDiffuseTexture,
              set: (tt, et) => {
                tt._useAlphaFromDiffuseTexture = et
              }
            },
            metadata: et
          }, JO, CO), (0, Ot.l)(null, null, Re, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: tt => "_useEmissiveAsIllumination" in tt,
              get: tt => tt._useEmissiveAsIllumination,
              set: (tt, et) => {
                tt._useEmissiveAsIllumination = et
              }
            },
            metadata: et
          }, hO, vO), (0, Ot.l)(null, null, Pe, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: tt => "_linkEmissiveWithDiffuse" in tt,
              get: tt => tt._linkEmissiveWithDiffuse,
              set: (tt, et) => {
                tt._linkEmissiveWithDiffuse = et
              }
            },
            metadata: et
          }, cO, RO), (0, Ot.l)(null, null, Le, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: tt => "_useSpecularOverAlpha" in tt,
              get: tt => tt._useSpecularOverAlpha,
              set: (tt, et) => {
                tt._useSpecularOverAlpha = et
              }
            },
            metadata: et
          }, ZO, LO), (0, Ot.l)(null, null, ke, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: tt => "_useReflectionOverAlpha" in tt,
              get: tt => tt._useReflectionOverAlpha,
              set: (tt, et) => {
                tt._useReflectionOverAlpha = et
              }
            },
            metadata: et
          }, GO, zO), (0, Ot.l)(null, null, ze, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: tt => "_disableLighting" in tt,
              get: tt => tt._disableLighting,
              set: (tt, et) => {
                tt._disableLighting = et
              }
            },
            metadata: et
          }, UO, AO), (0, Ot.l)(null, null, re, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: tt => "_useObjectSpaceNormalMap" in tt,
              get: tt => tt._useObjectSpaceNormalMap,
              set: (tt, et) => {
                tt._useObjectSpaceNormalMap = et
              }
            },
            metadata: et
          }, BO, pO), (0, Ot.l)(null, null, Ae, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: tt => "_useParallax" in tt,
              get: tt => tt._useParallax,
              set: (tt, et) => {
                tt._useParallax = et
              }
            },
            metadata: et
          }, gO, sO), (0, Ot.l)(null, null, Ye, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: tt => "_useParallaxOcclusion" in tt,
              get: tt => tt._useParallaxOcclusion,
              set: (tt, et) => {
                tt._useParallaxOcclusion = et
              }
            },
            metadata: et
          }, eq, Vq), (0, Ot.l)(null, null, pe, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: tt => "parallaxScaleBias" in tt,
              get: tt => tt.parallaxScaleBias,
              set: (tt, et) => {
                tt.parallaxScaleBias = et
              }
            },
            metadata: et
          }, Dq, mq), (0, Ot.l)(null, null, xe, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: tt => "_roughness" in tt,
              get: tt => tt._roughness,
              set: (tt, et) => {
                tt._roughness = et
              }
            },
            metadata: et
          }, dq, jq), (0, Ot.l)(null, null, ge, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: tt => "indexOfRefraction" in tt,
              get: tt => tt.indexOfRefraction,
              set: (tt, et) => {
                tt.indexOfRefraction = et
              }
            },
            metadata: et
          }, Qq, lq), (0, Ot.l)(null, null, se, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: tt => "invertRefractionY" in tt,
              get: tt => tt.invertRefractionY,
              set: (tt, et) => {
                tt.invertRefractionY = et
              }
            },
            metadata: et
          }, Eq, fq), (0, Ot.l)(null, null, ne, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: tt => "alphaCutOff" in tt,
              get: tt => tt.alphaCutOff,
              set: (tt, et) => {
                tt.alphaCutOff = et
              }
            },
            metadata: et
          }, wq, yq), (0, Ot.l)(null, null, tV, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: tt => "_useLightmapAsShadowmap" in tt,
              get: tt => tt._useLightmapAsShadowmap,
              set: (tt, et) => {
                tt._useLightmapAsShadowmap = et
              }
            },
            metadata: et
          }, Nq, aq), (0, Ot.l)(null, null, VV, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: tt => "_diffuseFresnelParameters" in tt,
              get: tt => tt._diffuseFresnelParameters,
              set: (tt, et) => {
                tt._diffuseFresnelParameters = et
              }
            },
            metadata: et
          }, Jq, Cq), (0, Ot.l)(null, null, qV, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: tt => "_opacityFresnelParameters" in tt,
              get: tt => tt._opacityFresnelParameters,
              set: (tt, et) => {
                tt._opacityFresnelParameters = et
              }
            },
            metadata: et
          }, hq, vq), (0, Ot.l)(null, null, mV, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: tt => "_reflectionFresnelParameters" in tt,
              get: tt => tt._reflectionFresnelParameters,
              set: (tt, et) => {
                tt._reflectionFresnelParameters = et
              }
            },
            metadata: et
          }, cq, Rq), (0, Ot.l)(null, null, jV, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: tt => "_refractionFresnelParameters" in tt,
              get: tt => tt._refractionFresnelParameters,
              set: (tt, et) => {
                tt._refractionFresnelParameters = et
              }
            },
            metadata: et
          }, Zq, Lq), (0, Ot.l)(null, null, XV, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: tt => "_emissiveFresnelParameters" in tt,
              get: tt => tt._emissiveFresnelParameters,
              set: (tt, et) => {
                tt._emissiveFresnelParameters = et
              }
            },
            metadata: et
          }, Gq, zq), (0, Ot.l)(null, null, lV, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: tt => "_useReflectionFresnelFromSpecular" in tt,
              get: tt => tt._useReflectionFresnelFromSpecular,
              set: (tt, et) => {
                tt._useReflectionFresnelFromSpecular = et
              }
            },
            metadata: et
          }, Uq, Aq), (0, Ot.l)(null, null, fV, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: tt => "_useGlossinessFromSpecularMapAlpha" in tt,
              get: tt => tt._useGlossinessFromSpecularMapAlpha,
              set: (tt, et) => {
                tt._useGlossinessFromSpecularMapAlpha = et
              }
            },
            metadata: et
          }, Bq, pq), (0, Ot.l)(null, null, yV, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: tt => "_maxSimultaneousLights" in tt,
              get: tt => tt._maxSimultaneousLights,
              set: (tt, et) => {
                tt._maxSimultaneousLights = et
              }
            },
            metadata: et
          }, gq, sq), (0, Ot.l)(null, null, aV, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: tt => "_invertNormalMapX" in tt,
              get: tt => tt._invertNormalMapX,
              set: (tt, et) => {
                tt._invertNormalMapX = et
              }
            },
            metadata: et
          }, eD, VD), (0, Ot.l)(null, null, bV, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: tt => "_invertNormalMapY" in tt,
              get: tt => tt._invertNormalMapY,
              set: (tt, et) => {
                tt._invertNormalMapY = et
              }
            },
            metadata: et
          }, DD, mD), (0, Ot.l)(null, null, CV, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: tt => "_twoSidedLighting" in tt,
              get: tt => tt._twoSidedLighting,
              set: (tt, et) => {
                tt._twoSidedLighting = et
              }
            },
            metadata: et
          }, HD, XD), (0, Ot.l)(null, null, KV, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: tt => "_applyDecalMapAfterDetailMap" in tt,
              get: tt => tt._applyDecalMapAfterDetailMap,
              set: (tt, et) => {
                tt._applyDecalMapAfterDetailMap = et
              }
            },
            metadata: et
          }, ED, fD), et && Object.defineProperty(tt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: et
          })
        })(), tt.ForceGLSL = !1, tt._ShaderLoader = new ut.b((() => [Promise.all([Vt.e(322), Vt.e(321)]).then((() => Vt(42120))), Promise.all([Vt.e(327), Vt.e(323), Vt.e(336), Vt.e(326)]).then((() => Vt(42314)))]), (() => [Promise.all([Vt.e(343), Vt.e(338)]).then((() => Vt(42438))), Promise.all([Vt.e(344), Vt.e(354), Vt.e(340)]).then((() => Vt(42630)))])), tt
      })(),
      Ft = !1;

    function kt() {
      Ft || (Ft = !0, (0, Qt.c)(), (0, St.i)("BABYLON.StandardMaterial", Lt), mt.d.DefaultMaterialFactory = tt => new Lt("default material", tt))
    }
    Object.getOwnPropertyDescriptor(Lt.prototype, "decalMap") || Object.defineProperty(Lt.prototype, "decalMap", (0, ct.c)("StandardMaterial", "decalMap"))
  },
  40582: (tt, et, Vt) => {
    function Ot(tt) {
      return class extends tt {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    Vt.d(et, {
      e: () => Ot
    })
  },
  40566: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    class Ot {
      constructor(tt, et) {
        this._webGL = {
          load: tt,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: et,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(tt) {
        const et = 1 === tt ? this._webGPU : this._webGL;
        return et.loaded ? void 0 : async () => {
          await this._loadAsync(et)
        }
      }
      async _loadAsync(tt) {
        if (tt.loaded) return;
        let et = tt.loadPromise;
        const Vt = null === et;
        Vt && (et = Promise.all(tt.load()), tt.loadPromise = et);
        let Ot = !1;
        try {
          await et, Ot = !0
        } finally {
          Vt && this._completeLoad(tt, Ot)
        }
      }
      _completeLoad(tt, et) {
        tt.loaded = et, tt.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);