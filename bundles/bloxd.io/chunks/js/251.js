export const id = 251;
export const ids = [251];
export const modules = {
  39802: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk
    });
    var Rk = Bk(39406);

    function tk(kk) {
      return class extends kk {
        constructor() {
          super(...arguments);
          const kk = new.target;
          if (!kk[Symbol.metadata]) {
            const Fk = Object.getPrototypeOf(kk)?.[Symbol.metadata];
            kk[Symbol.metadata] = Fk ? Object.create(Fk) : {}
          }
          const Fk = (0, Rk.c)(kk[Symbol.metadata]);
          Fk._imageProcessingConfiguration || (Fk._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(kk) {
          this._attachImageProcessingConfiguration(kk), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(kk) {
          kk !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !kk && this.XN ? this._imageProcessingConfiguration = this.XN().imageProcessingConfiguration : kk && (this._imageProcessingConfiguration = kk), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(kk) {
          this.imageProcessingConfiguration.colorCurvesEnabled = kk
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(kk) {
          this.imageProcessingConfiguration.colorGradingEnabled = kk
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(kk) {
          this._imageProcessingConfiguration.toneMappingEnabled = kk
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(kk) {
          this._imageProcessingConfiguration.exposure = kk
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(kk) {
          this._imageProcessingConfiguration.contrast = kk
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(kk) {
          this._imageProcessingConfiguration.colorGradingTexture = kk
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(kk) {
          this._imageProcessingConfiguration.colorCurves = kk
        }
      }
    }
  },
  39686: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => ak,
      g: () => tk
    });
    var Rk = Bk(39692);

    function tk(kk) {
      return class extends kk {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class ak extends Rk.c {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  39768: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Vk
    });
    var Rk = Bk(39397),
      tk = Bk(39695),
      ak = Bk(39404),
      Xk = Bk(39749),
      bk = Bk(39692),
      wk = Bk(39771),
      dk = Bk(39735);
    class sk extends bk.c {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let Vk = (() => {
      var kk, Fk, Bk, bk;
      let Vk, Jk, Ak, ek, yk, fk, mk = wk.e,
        Wk = [],
        vk = [],
        ik = [],
        Yk = [],
        Lk = [],
        Ok = [],
        Ek = [],
        Sk = [],
        Nk = [],
        Hk = [],
        uk = [],
        Mk = [];
      return kk = class extends mk {
        get texture() {
          return (0, Rk.e)(this, Fk, "f")
        }
        set texture(kk) {
          (0, Rk.i)(this, Fk, kk, "f")
        }
        get normalBlendMethod() {
          return (0, Rk.e)(this, Bk, "f")
        }
        set normalBlendMethod(kk) {
          (0, Rk.i)(this, Bk, kk, "f")
        }
        get isEnabled() {
          return (0, Rk.e)(this, bk, "f")
        }
        set isEnabled(kk) {
          (0, Rk.i)(this, bk, kk, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(kk) {
          let ak = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(kk, "DetailMap", 140, new sk, ak), this._texture = null, Fk.set(this, (0, Rk.l)(this, Wk, void 0)), this.diffuseBlendLevel = ((0, Rk.l)(this, vk), (0, Rk.l)(this, ik, 1)), this.roughnessBlendLevel = ((0, Rk.l)(this, Yk), (0, Rk.l)(this, Lk, 1)), this.bumpLevel = ((0, Rk.l)(this, Ok), (0, Rk.l)(this, Ek, 1)), this._normalBlendMethod = ((0, Rk.l)(this, Sk), tk.c.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), Bk.set(this, (0, Rk.l)(this, Nk, void 0)), this._isEnabled = ((0, Rk.l)(this, Hk), !1), bk.set(this, (0, Rk.l)(this, uk, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Rk.l)(this, Mk), this._internalMarkAllSubMeshesAsTexturesDirty = kk._dirtyCallbacks[1]
        }
        isReadyForSubMesh(kk, Fk, Bk) {
          return !this._isEnabled || !(kk._areTexturesDirty && Fk.texturesEnabled && Bk.getCaps().standardDerivatives && this._texture && Xk.b.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(kk, Fk) {
          if (this._isEnabled) {
            kk.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const Bk = Fk.ne();
            kk._areTexturesDirty && (Bk.getCaps().standardDerivatives && this._texture && Xk.b.DetailTextureEnabled && this._isEnabled ? ((0, dk._)(this._texture, kk, "DETAIL"), kk.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : kk.DETAIL = !1)
          } else kk.DETAIL = !1
        }
        bindForSubMesh(kk, Fk) {
          if (!this._isEnabled) return;
          const Bk = this._material.isFrozen;
          kk.useUbo && Bk && kk.isSync || this._texture && Xk.b.DetailTextureEnabled && (kk.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, dk.E)(this._texture, kk, "detail")), Fk.texturesEnabled && this._texture && Xk.b.DetailTextureEnabled && kk.setTexture("detailSampler", this._texture)
        }
        hasTexture(kk) {
          return this._texture === kk
        }
        getActiveTextures(kk) {
          this._texture && kk.push(this._texture)
        }
        getAnimatables(kk) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && kk.push(this._texture)
        }
        dispose(kk) {
          kk && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(kk) {
          kk.push("detailSampler")
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
      }, Fk = new WeakMap, Bk = new WeakMap, bk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(mk[Symbol.metadata] ?? null) : void 0;
        Vk = [(0, ak.D)("detailTexture"), (0, ak.d)("_markAllSubMeshesAsTexturesDirty")], Jk = [(0, ak.M)()], Ak = [(0, ak.M)()], ek = [(0, ak.M)()], yk = [(0, ak.M)(), (0, ak.d)("_markAllSubMeshesAsTexturesDirty")], fk = [(0, ak.M)(), (0, ak.d)("_markAllSubMeshesAsTexturesDirty")], (0, Rk.j)(kk, null, Vk, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: kk => "texture" in kk,
            get: kk => kk.texture,
            set: (kk, Fk) => {
              kk.texture = Fk
            }
          },
          metadata: Fk
        }, Wk, vk), (0, Rk.j)(kk, null, yk, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: kk => "normalBlendMethod" in kk,
            get: kk => kk.normalBlendMethod,
            set: (kk, Fk) => {
              kk.normalBlendMethod = Fk
            }
          },
          metadata: Fk
        }, Nk, Hk), (0, Rk.j)(kk, null, fk, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isEnabled" in kk,
            get: kk => kk.isEnabled,
            set: (kk, Fk) => {
              kk.isEnabled = Fk
            }
          },
          metadata: Fk
        }, uk, Mk), (0, Rk.j)(null, null, Jk, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: kk => "diffuseBlendLevel" in kk,
            get: kk => kk.diffuseBlendLevel,
            set: (kk, Fk) => {
              kk.diffuseBlendLevel = Fk
            }
          },
          metadata: Fk
        }, ik, Yk), (0, Rk.j)(null, null, Ak, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: kk => "roughnessBlendLevel" in kk,
            get: kk => kk.roughnessBlendLevel,
            set: (kk, Fk) => {
              kk.roughnessBlendLevel = Fk
            }
          },
          metadata: Fk
        }, Lk, Ok), (0, Rk.j)(null, null, ek, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: kk => "bumpLevel" in kk,
            get: kk => kk.bumpLevel,
            set: (kk, Fk) => {
              kk.bumpLevel = Fk
            }
          },
          metadata: Fk
        }, Ek, Sk), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk
    })()
  },
  39692: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk
    });
    class Rk {
      constructor(kk) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = kk, kk)
          for (const Fk in kk) Object.prototype.hasOwnProperty.call(kk, Fk) && this._setDefaultValue(Fk)
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
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || kk, this._isDirty = !0
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
        for (const kk of Object.keys(this)) "_" !== kk[0] && this._keys.push(kk);
        if (this._externalProperties)
          for (const kk in this._externalProperties) - 1 === this._keys.indexOf(kk) && this._keys.push(kk)
      }
      isEqual(kk) {
        if (this._keys.length !== kk._keys.length) return !1;
        for (let Fk = 0; Fk < this._keys.length; Fk++) {
          const Bk = this._keys[Fk];
          if (this[Bk] !== kk[Bk]) return !1
        }
        return !0
      }
      cloneTo(kk) {
        this._keys.length !== kk._keys.length && (kk._keys = this._keys.slice(0));
        for (let Fk = 0; Fk < this._keys.length; Fk++) {
          const Bk = this._keys[Fk];
          kk[Bk] = this[Bk]
        }
      }
      reset() {
        for (const kk of this._keys) this._setDefaultValue(kk)
      }
      _setDefaultValue(kk) {
        const Fk = this._externalProperties?.[kk]?.type ?? typeof this[kk],
          Bk = this._externalProperties?.[kk]?.default;
        switch (Fk) {
          case "number":
            this[kk] = Bk ?? 0;
            break;
          case "string":
            this[kk] = Bk ?? "";
            break;
          default:
            this[kk] = Bk ?? !1
        }
      }
      toString() {
        let kk = "";
        for (let Fk = 0; Fk < this._keys.length; Fk++) {
          const Bk = this._keys[Fk],
            Rk = this[Bk];
          switch (typeof Rk) {
            case "number":
            case "string":
              kk += "#define " + Bk + " " + Rk + "\n";
              break;
            default:
              Rk && (kk += "#define " + Bk + "\n")
          }
        }
        return kk
      }
    }
  },
  39785: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => bk,
      d: () => Xk,
      h: () => ak
    });
    var Rk, tk = Bk(36758);

    function ak(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const Rk = Fk(kk);
      if (!Number.isInteger(Rk) || Rk < 0 || Rk > Bk) throw new Error(`Invalid geometry object ID ${Rk} for mesh "${kk.name}". Object IDs must be integers between 0 and 0x${Bk.toString(16).toUpperCase()}.`);
      return Rk
    }

    function Xk(kk, Fk) {
      const Bk = Fk(kk);
      if (!Number.isInteger(Bk) || Bk < 0 || Bk > 255 || 0 !== Bk && 0 === (63 & Bk)) throw new Error(`Invalid geometry mesh-blending tag ${Bk} for mesh "${kk.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return Bk
    }! function(kk) {
      kk[kk.Zero = 0] = "Zero", kk[kk.One = 1] = "One", kk[kk.MaxViewZ = 2] = "MaxViewZ", kk[kk.NoClear = 3] = "NoClear"
    }(Rk || (Rk = {}));
    class bk {
      static CreateConfiguration(kk) {
        return bk._Configurations[kk] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: tk.c.Zero(),
          currentViewProjection: tk.c.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, bk._Configurations[kk]
      }
      static DeleteConfiguration(kk) {
        delete bk._Configurations[kk]
      }
      static GetConfiguration(kk) {
        return bk._Configurations[kk]
      }
      static _PrepareConfiguration(kk, Fk, Bk) {
        const Rk = bk._Configurations[kk];
        Rk._attachments = Fk, Rk._colorAttachments = Bk, Rk._mrtCount = Fk.length;
        let tk = "#define PREPASS\n";
        for (const ak of bk.GeometryTextureDescriptions) {
          const kk = Rk.defines[ak.defineIndex];
          void 0 !== kk && (tk += `#define ${ak.define}\n#define ${ak.defineIndex} ${kk}\n`)
        }
        Rk.objectIdIsRedFormat && (tk += "#define PREPASS_OBJECT_ID_R8\n"), Rk._defines = tk + `#define SCENE_MRT_COUNT ${Fk.length}\n`
      }
      static _PrepareStringDefines(kk, Fk) {
        const Bk = bk._Configurations[kk];
        return !!Bk?._defines && (Fk.push(Bk._defines), !0)
      }
      static _BindAttachmentsForEffect(kk, Fk) {
        const Bk = bk._Configurations[kk.currentRenderPassId];
        return !Bk?._attachments || (kk.bindAttachments(Fk._multiTarget ? Bk._attachments : Bk._colorAttachments), Fk._multiTarget || void 0 !== Bk.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(kk) {
        const Fk = bk._Configurations[kk.currentRenderPassId];
        Fk?._colorAttachments && kk.bindAttachments(Fk._colorAttachments)
      }
      static _BindColorAttachments(kk) {
        const Fk = bk._Configurations[kk.currentRenderPassId];
        return !Fk?._colorAttachments || (kk.bindAttachments(Fk._colorAttachments), void 0 !== Fk.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(kk) {
        const Fk = bk._Configurations[kk.currentRenderPassId];
        return !Fk?._colorAttachments || void 0 !== Fk.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(kk, Fk) {
        const Bk = bk._Configurations[kk.currentRenderPassId];
        if (!Bk) return;
        const Rk = kk.getAlphaMode(),
          tk = void 0 === Bk.defines.PREPASS_COLOR_INDEX || 2 === Rk || 1 === Rk || 17 === Rk;
        Fk.setFloat("geometryZeroAlphaDiscard", tk ? 1 : 0)
      }
      static AddUniformsAndSamplers(kk, Fk) {
        kk.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(kk, Fk) {
        for (const Bk of Fk)
          if (Bk.AY)
            for (const Fk of Bk.AY) Fk._removeDrawWrapper(kk)
      }
      static PrepareDefines(kk, Fk, Bk) {
        if (!Bk._arePrePassDirty) return;
        const Rk = bk._Configurations[kk];
        if (!Rk) return;
        Bk.PREPASS = !0;
        let tk = 0;
        for (let ak = 0; ak < bk.GeometryTextureDescriptions.length; ak++) {
          const kk = bk.GeometryTextureDescriptions[ak],
            Fk = kk.define,
            Xk = kk.defineIndex,
            wk = Rk.defines[Xk];
          void 0 !== wk ? (Bk[Fk] = !0, Bk[Xk] = wk, tk++) : (Bk[Fk] = !1, delete Bk[Xk])
        }
        Bk.PREPASS_OBJECT_ID_R8 = Rk.objectIdIsRedFormat, Bk.SCENE_MRT_COUNT = Rk._mrtCount ?? tk, Bk.BONES_VELOCITY_ENABLED = Fk.useBones && Fk.computeBonesUsingShaders && Fk.skeleton && !Fk.skeleton.isUsingTextureForMatrices && -1 === Rk.excludedSkinnedMesh.indexOf(Fk)
      }
      static Bind(kk, Fk, Bk, Rk, tk) {
        const wk = bk._Configurations[kk];
        if (!wk) return;
        const dk = Bk.XN(),
          sk = dk.ne();
        if (wk.reverseCulling && sk.setStateCullFaceType(dk._mirroredCameraPosition ? tk.cullBackFaces : !tk.cullBackFaces), void 0 !== wk.defines.PREPASS_OBJECT_ID_INDEX) {
          const kk = wk.objectIdIsRedFormat ? 255 : 16777215;
          let Rk = Bk.uniqueId;
          if (wk.objectIdProvider) Rk = ak(Bk, wk.objectIdProvider, kk);
          else if (Rk > kk) throw new Error(`Invalid geometry object ID ${Rk} for mesh "${Bk.name}". Object IDs must be integers between 0 and 0x${kk.toString(16).toUpperCase()}.`);
          Fk.setFloat("objectId", Rk)
        }
        if (void 0 !== wk.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const kk = wk.meshBlendTagProvider ? Xk(Bk, wk.meshBlendTagProvider) : Bk.meshBlendingTag;
          Fk.setInt("meshBlendTag", kk)
        }
        if (void 0 !== wk.defines.PREPASS_VELOCITY_INDEX || void 0 !== wk.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const kk = wk._currentWorldMatrices ?? (wk._currentWorldMatrices = {}),
            tk = wk._worldMatrixFrameIds ?? (wk._worldMatrixFrameIds = {});
          if (kk[Bk.uniqueId] || (kk[Bk.uniqueId] = Rk.clone(), wk.previousWorldMatrices[Bk.uniqueId] = Rk.clone()), tk[Bk.uniqueId] !== sk.frameId && (wk.previousWorldMatrices[Bk.uniqueId].sBk(kk[Bk.uniqueId]), tk[Bk.uniqueId] = sk.frameId), kk[Bk.uniqueId].sBk(Rk), -1 === wk.lastUpdateFrameId ? (wk.lastUpdateFrameId = sk.frameId, wk.previousViewProjection.sBk(dk.getTransformMatrix()), wk.currentViewProjection.sBk(dk.getTransformMatrix())) : wk.currentViewProjection.updateFlag !== dk.getTransformMatrix().updateFlag ? (wk.lastUpdateFrameId = sk.frameId, wk.previousViewProjection.sBk(wk.currentViewProjection), wk.currentViewProjection.sBk(dk.getTransformMatrix())) : wk.lastUpdateFrameId !== sk.frameId && (wk.lastUpdateFrameId = sk.frameId, wk.previousViewProjection.sBk(wk.currentViewProjection)), Fk.setMatrix("previousWorld", wk.previousWorldMatrices[Bk.uniqueId]), Fk.setMatrix("previousViewProjection", wk.previousViewProjection), Bk.useBones && Bk.computeBonesUsingShaders && Bk.skeleton) {
            const kk = Bk.skeleton;
            if (!kk.isUsingTextureForMatrices || -1 === Fk.getUniformIndex("boneTextureInfo")) {
              const Rk = kk.getTransformMatrices(Bk);
              Rk && (wk.previousBones[Bk.uniqueId] || (wk.previousBones[Bk.uniqueId] = Rk.slice()), Fk.setMatrices("mPreviousBones", wk.previousBones[Bk.uniqueId]), wk.previousBones[Bk.uniqueId].set(Rk))
            }
          }
        }
      }
    }
    bk.GeometryTextureDescriptions = [{
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
    }], bk._Configurations = {}
  },
  39771: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Jk,
      g: () => ek
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(39300),
      Xk = Bk(39270);
    const bk = new RegExp("^([gimus]+)!");
    class wk {
      constructor(kk) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = kk, this._scene = kk.XN(), this._engine = this._scene.ne()
      }
      _addPlugin(kk) {
        for (let Rk = 0; Rk < this._plugins.length; ++Rk)
          if (this._plugins[Rk].name === kk.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !kk.isCompatible(this._material.shaderLanguage)) throw `The plugin "${kk.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const Fk = kk.getClassName();
        wk._MaterialPluginClassToMainDefine[Fk] || (wk._MaterialPluginClassToMainDefine[Fk] = "MATERIALPLUGIN_" + ++wk._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (kk, Fk) => this._handlePluginEvent(kk, Fk), this._plugins.push(kk), this._plugins.sort(((kk, Fk) => kk.priority - Fk.priority)), this._codeInjectionPoints = {};
        const Bk = {};
        Bk[wk._MaterialPluginClassToMainDefine[Fk]] = {
          type: "boolean",
          default: !0
        };
        for (const Rk of this._plugins) Rk.collectDefines(Bk), this._collectPointNames("vertex", Rk.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Rk.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = Bk, !0
      }
      _activatePlugin(kk) {
        -1 === this._activePlugins.indexOf(kk) && (this._activePlugins.push(kk), this._activePlugins.sort(((kk, Fk) => kk.priority - Fk.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), kk.registerForExtraEvents && (this._activePluginsForExtraEvents.push(kk), this._activePluginsForExtraEvents.sort(((kk, Fk) => kk.priority - Fk.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(kk) {
        for (let Fk = 0; Fk < this._plugins.length; ++Fk)
          if (this._plugins[Fk].name === kk) return this._plugins[Fk];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(kk) {
        let Fk = !0;
        for (const Bk of this._activePlugins) Fk = Fk && Bk.isReadyForSubMesh(kk.defines, this._scene, this._engine, kk.subMesh);
        kk.isReadyForSubMesh = Fk
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(kk) {
        for (const Fk of this._activePlugins) Fk.prepareDefinesBeforeAttributes(kk.defines, this._scene, kk.mesh)
      }
      _handlePluginEventPrepareDefines(kk) {
        for (const Fk of this._activePlugins) Fk.prepareDefines(kk.defines, this._scene, kk.mesh)
      }
      _handlePluginEventHardBindForSubMesh(kk) {
        for (const Fk of this._activePluginsForExtraEvents) Fk.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, kk.subMesh)
      }
      _handlePluginEventBindForSubMesh(kk) {
        for (const Fk of this._activePlugins) Fk.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, kk.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(kk) {
        let Fk = !1;
        for (const Bk of this._activePluginsForExtraEvents)
          if (Fk = Bk.hasRenderTargetTextures(), Fk) break;
        kk.hasRenderTargetTextures = Fk
      }
      _handlePluginEventFillRenderTargetTextures(kk) {
        for (const Fk of this._activePluginsForExtraEvents) Fk.fillRenderTargetTextures(kk.renderTargets)
      }
      _handlePluginEvent(kk, Fk) {
        switch (kk) {
          case 512: {
            const kk = Fk;
            for (const Fk of this._activePlugins) Fk.getActiveTextures(kk.activeTextures);
            break
          }
          case 256: {
            const kk = Fk;
            for (const Fk of this._activePlugins) Fk.getAnimatables(kk.animatables);
            break
          }
          case 1024: {
            const kk = Fk;
            let Bk = !1;
            for (const Fk of this._activePlugins)
              if (Bk = Fk.hasTexture(kk.texture), Bk) break;
            kk.hasTexture = Bk;
            break
          }
          case 2: {
            const kk = Fk;
            for (const Fk of this._plugins) Fk.dispose(kk.forceDisposeTextures);
            break
          }
          case 4:
            Fk.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const kk = Fk;
            for (const Fk of this._activePlugins) kk.fallbackRank = Fk.addFallbacks(kk.defines, kk.fallbacks, kk.fallbackRank), Fk.getAttributes(kk.attributes, this._scene, kk.mesh);
            this._uniformList.length > 0 && kk.uniforms.push(...this._uniformList), this._samplerList.length > 0 && kk.samplers.push(...this._samplerList), this._uboList.length > 0 && kk.uniformBuffersNames.push(...this._uboList), kk.customCode = this._injectCustomCode(kk, kk.customCode);
            break
          }
          case 8: {
            const kk = Fk;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const Bk = 1 === this._material.shaderLanguage;
            for (const Fk of this._plugins) {
              const Rk = Fk.getUniforms(this._material.shaderLanguage);
              if (Rk) {
                if (Rk.ubo)
                  for (const Fk of Rk.ubo) {
                    if (Fk.size && Fk.type) {
                      const Rk = Fk.arraySize ?? 0;
                      if (kk.ubo.addUniform(Fk.name, Fk.size, Rk), Bk) {
                        let kk;
                        switch (Fk.type) {
                          case "mat4":
                            kk = "mat4x4f";
                            break;
                          case "float":
                            kk = "f32";
                            break;
                          default:
                            kk = `${Fk.type}f`
                        }
                        this._uboDeclaration += Rk > 0 ? `uniform ${Fk.name}: array<${kk}, ${Rk}>;\n` : `uniform ${Fk.name}: ${kk};\n`
                      } else this._uboDeclaration += `${Fk.type} ${Fk.name}${Rk>0?`[${Rk}]`:""};\n`
                    }
                    this._uniformList.push(Fk.name)
                  }
                Rk.vertex && (this._vertexDeclaration += Rk.vertex + "\n"), Rk.fragment && (this._fragmentDeclaration += Rk.fragment + "\n"), Rk.externalUniforms && this._uniformList.push(...Rk.externalUniforms)
              }
              Fk.getSamplers(this._samplerList), Fk.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(kk, Fk) {
        if (Fk)
          for (const Bk in Fk) this._codeInjectionPoints[kk] || (this._codeInjectionPoints[kk] = {}), this._codeInjectionPoints[kk][Bk] = !0
      }
      _injectCustomCode(kk, Fk) {
        return (Bk, Rk) => {
          Fk && (Rk = Fk(Bk, Rk)), this._uboDeclaration && (Rk = Rk.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Rk = Rk.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (Rk = Rk.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const tk = this._codeInjectionPoints?.[Bk];
          if (!tk) return Rk;
          let wk = null;
          for (let Fk in tk) {
            let tk = "";
            for (const Rk of this._activePlugins) {
              const bk = this._material.shaderLanguage;
              let dk = Rk.getCustomCode(Bk, bk)?.[Fk];
              dk && (Rk.resolveIncludes && (null === wk && (wk = {
                defines: [],
                indexParameters: kk.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: Xk.d.GetShadersRepository(bk),
                includesShadersStore: Xk.d.GetIncludesShadersStore(bk),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                rBk: this._engine.rBk,
                processCodeAfterIncludes: void 0
              }), wk.isFragment = "fragment" === Bk, (0, ak.k)(dk, wk, (kk => dk = kk))), tk += dk + "\n")
            }
            if (tk.length > 0)
              if ("!" === Fk.charAt(0)) {
                Fk = Fk.substring(1);
                let kk = "g";
                if ("!" === Fk.charAt(0)) kk = "", Fk = Fk.substring(1);
                else {
                  const Bk = bk.exec(Fk);
                  Bk && Bk.length >= 2 && (kk = Bk[1], Fk = Fk.substring(kk.length + 1))
                }
                kk.indexOf("g") < 0 && (kk += "g");
                const Bk = new RegExp(Fk, kk);
                let ak = Bk.exec(Rk);
                for (; null !== ak;) {
                  const {
                    index: kk
                  } = ak, Fk = dk(tk, ak);
                  Rk = Rk.substring(0, kk) + Fk + Rk.substring(kk + ak[0].length), Bk.lastIndex = kk + Fk.length, ak = Bk.exec(Rk)
                }
              } else {
                const kk = "#define " + Fk;
                Rk = Rk.replace(kk, "\n" + tk + "\n" + kk)
              }
          }
          return Rk
        }
      }
    }
    wk._MaterialPluginClassToMainDefine = {}, wk._MaterialPluginCounter = 0;

    function dk(kk, Fk) {
      return kk.replace(/\$(\d+)/g, ((kk, Bk) => {
        const Rk = Number(Bk);
        return Rk < Fk.length ? Fk[Rk] : ""
      }))
    }
    var sk = Bk(39414),
      Vk = Bk(36798);
    let Jk = (() => {
        var kk;
        let Fk, Bk, ak, Xk, bk = [],
          dk = [],
          Vk = [],
          Jk = [],
          Ak = [],
          ek = [],
          yk = [],
          fk = [];
        return kk = class {
          isCompatible(kk) {
            return 0 === kk
          }
          _enable(kk) {
            kk && this._pluginManager._activatePlugin(this)
          }
          constructor(kk, Fk, Bk, tk) {
            let ak = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              Xk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              sk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, Rk.l)(this, bk, void 0), this.priority = ((0, Rk.l)(this, dk), (0, Rk.l)(this, Vk, 500)), this.resolveIncludes = ((0, Rk.l)(this, Jk), (0, Rk.l)(this, Ak, !1)), this.registerForExtraEvents = ((0, Rk.l)(this, ek), (0, Rk.l)(this, yk, !1)), this.doNotSerialize = ((0, Rk.l)(this, fk), !1), this._material = kk, this.name = Fk, this.priority = Bk, this.resolveIncludes = sk, kk.pluginManager || (kk.pluginManager = new wk(kk), kk.yN.add((() => {
              kk.pluginManager = void 0
            }))), this._pluginDefineNames = tk, this._pluginManager = kk.pluginManager, ak && this._pluginManager._addPlugin(this), Xk && this._enable(!0), this.markAllDefinesAsDirty = kk._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(kk, Fk, Bk, Rk) {
            return !0
          }
          hardBindForSubMesh(kk, Fk, Bk, Rk) {}
          bindForSubMesh(kk, Fk, Bk, Rk) {}
          dispose(kk) {}
          getCustomCode(kk) {
            return null
          }
          collectDefines(kk) {
            if (this._pluginDefineNames)
              for (const Fk of Object.keys(this._pluginDefineNames)) {
                if ("_" === Fk[0]) continue;
                const Bk = typeof this._pluginDefineNames[Fk];
                kk[Fk] = {
                  type: "number" === Bk ? "number" : "string" === Bk ? "string" : "boolean" === Bk ? "boolean" : "object",
                  default: this._pluginDefineNames[Fk]
                }
              }
          }
          prepareDefinesBeforeAttributes(kk, Fk, Bk) {}
          prepareDefines(kk, Fk, Bk) {}
          hasTexture(kk) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(kk) {}
          getActiveTextures(kk) {}
          getAnimatables(kk) {}
          addFallbacks(kk, Fk, Bk) {
            return Bk
          }
          getSamplers(kk) {}
          getAttributes(kk, Fk, Bk) {}
          getUniformBuffersNames(kk) {}
          getUniforms() {
            return {}
          }
          copyTo(kk) {
            sk.c.Clone((() => kk), this)
          }
          serialize() {
            return sk.c.Serialize(this)
          }
          parse(kk, Fk, Bk) {
            sk.c.Parse((() => this), kk, Fk, Bk)
          }
        }, (() => {
          const wk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Fk = [(0, tk.M)()], Bk = [(0, tk.M)()], ak = [(0, tk.M)()], Xk = [(0, tk.M)()], (0, Rk.j)(null, null, Fk, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: kk => "name" in kk,
              get: kk => kk.name,
              set: (kk, Fk) => {
                kk.name = Fk
              }
            },
            metadata: wk
          }, bk, dk), (0, Rk.j)(null, null, Bk, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: kk => "priority" in kk,
              get: kk => kk.priority,
              set: (kk, Fk) => {
                kk.priority = Fk
              }
            },
            metadata: wk
          }, Vk, Jk), (0, Rk.j)(null, null, ak, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: kk => "resolveIncludes" in kk,
              get: kk => kk.resolveIncludes,
              set: (kk, Fk) => {
                kk.resolveIncludes = Fk
              }
            },
            metadata: wk
          }, Ak, ek), (0, Rk.j)(null, null, Xk, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: kk => "registerForExtraEvents" in kk,
              get: kk => kk.registerForExtraEvents,
              set: (kk, Fk) => {
                kk.registerForExtraEvents = Fk
              }
            },
            metadata: wk
          }, yk, fk), wk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wk
          })
        })(), kk
      })(),
      Ak = !1;

    function ek() {
      Ak || (Ak = !0, (0, Vk.d)("BABYLON.MaterialPluginBase", Jk))
    }
  },
  39684: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    class Rk {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(kk) {
        kk.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(kk) {}
      bindForSubMesh(kk, Fk, Bk, Rk, tk) {
        if (Fk.prePassRenderer && Fk.prePassRenderer.enabled && Fk.prePassRenderer.currentRTisSceneRT && (-1 !== Fk.prePassRenderer.getIndex(2) || -1 !== Fk.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[Bk.uniqueId] || (this.previousWorldMatrices[Bk.uniqueId] = Rk.clone()), this.previousViewProjection || (this.previousViewProjection = Fk.getTransformMatrix().clone(), this.currentViewProjection = Fk.getTransformMatrix().clone());
          const tk = Fk.ne();
          this.currentViewProjection.updateFlag !== Fk.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = tk.frameId, this.previousViewProjection.sBk(this.currentViewProjection), this.currentViewProjection.sBk(Fk.getTransformMatrix())) : this._lastUpdateFrameId !== tk.frameId && (this._lastUpdateFrameId = tk.frameId, this.previousViewProjection.sBk(this.currentViewProjection)), kk.setMatrix("previousWorld", this.previousWorldMatrices[Bk.uniqueId]), kk.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[Bk.uniqueId] = Rk.clone()
        }
      }
    }
  },
  39796: (kk, Fk, Bk) => {
    function Rk(kk) {
      return class extends kk {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    Bk.d(Fk, {
      e: () => Rk
    })
  },
  39674: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      StandardMaterial: () => Rk.e
    });
    var Rk = Bk(39678);
    (0, Rk.b)()
  },
  39678: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => rk,
      e: () => Gk
    });
    var Rk = Bk(39397),
      tk = Bk(39404),
      ak = Bk(39506),
      Xk = Bk(39489),
      bk = Bk(36917),
      wk = Bk(39541),
      dk = Bk(39684),
      sk = Bk(39686),
      Vk = Bk(39510),
      Jk = Bk(39695),
      Ak = Bk(39692),
      ek = Bk(39753),
      yk = Bk(39749),
      fk = Bk(39762),
      mk = Bk(39768),
      Wk = Bk(39741),
      vk = Bk(39774),
      ik = Bk(39735),
      Yk = Bk(39414),
      Lk = Bk(39777),
      Ok = Bk(39785),
      Ek = Bk(39787),
      Sk = Bk(39796),
      Nk = Bk(39802),
      Hk = Bk(36798),
      uk = Bk(39296);
    const Mk = {
      effect: null,
      subMesh: null
    };
    class gk extends((0, Sk.e)((0, Ek.c)(Ak.c))) {}
    class Uk extends((0, sk.g)(gk)) {
      constructor(kk) {
        super(kk), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class ck extends((0, Nk.b)(ek.d)) {}
    let Gk = (() => {
        var kk, Fk, sk, Ak, Ek, Sk, Nk, Hk, uk, gk, Gk, Tk, rk, Dk, zk, Pk, hk, qk, Ck, Zk, pk, Kk, xk, jk, lk, nk, Ik, Qk, kF, FF, BF, RF, tF;
        let aF, XF, bF, wF, dF, sF, VF, JF, AF, eF, yF, fF, mF, WF, vF, iF, YF, oF, LF, OF, EF, SF, NF, HF, uF, MF, gF, UF, cF, GF, TF, rF, DF, zF, PF, hF, qF, CF, ZF, pF, KF, xF, jF, lF, nF, IF, QF, kB, FB, BB, RB, tB, aB, XB, bB, wB, dB, sB, VB, JB, AB, eB, yB, fB, mB, WB, vB, iB, YB, oB, LB, OB, EB, SB = ck,
          NB = [],
          HB = [],
          uB = [],
          MB = [],
          gB = [],
          UB = [],
          cB = [],
          GB = [],
          TB = [],
          rB = [],
          DB = [],
          zB = [],
          PB = [],
          hB = [],
          qB = [],
          CB = [],
          ZB = [],
          pB = [],
          KB = [],
          xB = [],
          jB = [],
          lB = [],
          nB = [],
          IB = [],
          QB = [],
          kR = [],
          FR = [],
          BR = [],
          RR = [],
          tR = [],
          aR = [],
          XR = [],
          bR = [],
          wR = [],
          dR = [],
          sR = [],
          VR = [],
          JR = [],
          AR = [],
          eR = [],
          yR = [],
          fR = [],
          mR = [],
          WR = [],
          vR = [],
          iR = [],
          YR = [],
          oR = [],
          LR = [],
          OR = [],
          ER = [],
          SR = [],
          NR = [],
          HR = [],
          uR = [],
          MR = [],
          gR = [],
          UR = [],
          cR = [],
          GR = [],
          TR = [],
          rR = [],
          DR = [],
          zR = [],
          PR = [],
          hR = [],
          qR = [],
          CR = [],
          ZR = [],
          pR = [],
          KR = [],
          xR = [],
          jR = [],
          lR = [],
          nR = [],
          IR = [],
          QR = [],
          kt = [],
          Ft = [],
          Bt = [],
          Rt = [],
          tt = [],
          Xt = [],
          bt = [],
          wt = [],
          dt = [],
          st = [],
          Vt = [],
          Jt = [],
          At = [],
          et = [],
          yt = [],
          ft = [],
          mt = [],
          Wt = [],
          vt = [],
          it = [],
          Yt = [],
          ot = [],
          Lt = [],
          Ot = [],
          Et = [],
          St = [],
          Nt = [],
          Ht = [],
          ut = [],
          Mt = [],
          gt = [],
          Ut = [],
          ct = [],
          Gt = [],
          Tt = [],
          rt = [],
          Dt = [],
          zt = [],
          Pt = [],
          ht = [],
          qt = [],
          Ct = [],
          Zt = [],
          pt = [],
          Kt = [],
          xt = [],
          jt = [],
          lt = [],
          nt = [],
          It = [],
          Qt = [],
          ka = [],
          Fa = [],
          Ba = [],
          Ra = [],
          ta = [],
          aa = [],
          Xa = [],
          ba = [],
          wa = [],
          da = [],
          sa = [],
          Va = [],
          Ja = [],
          Aa = [],
          ea = [],
          ya = [],
          fa = [],
          ma = [];
        return kk = class extends SB {
          get diffuseTexture() {
            return (0, Rk.e)(this, Fk, "f")
          }
          set diffuseTexture(kk) {
            (0, Rk.i)(this, Fk, kk, "f")
          }
          get ambientTexture() {
            return (0, Rk.e)(this, sk, "f")
          }
          set ambientTexture(kk) {
            (0, Rk.i)(this, sk, kk, "f")
          }
          get opacityTexture() {
            return (0, Rk.e)(this, Ak, "f")
          }
          set opacityTexture(kk) {
            (0, Rk.i)(this, Ak, kk, "f")
          }
          get reflectionTexture() {
            return (0, Rk.e)(this, Ek, "f")
          }
          set reflectionTexture(kk) {
            (0, Rk.i)(this, Ek, kk, "f")
          }
          get emissiveTexture() {
            return (0, Rk.e)(this, Sk, "f")
          }
          set emissiveTexture(kk) {
            (0, Rk.i)(this, Sk, kk, "f")
          }
          get specularTexture() {
            return (0, Rk.e)(this, Nk, "f")
          }
          set specularTexture(kk) {
            (0, Rk.i)(this, Nk, kk, "f")
          }
          get bumpTexture() {
            return (0, Rk.e)(this, Hk, "f")
          }
          set bumpTexture(kk) {
            (0, Rk.i)(this, Hk, kk, "f")
          }
          get lightmapTexture() {
            return (0, Rk.e)(this, uk, "f")
          }
          set lightmapTexture(kk) {
            (0, Rk.i)(this, uk, kk, "f")
          }
          get refractionTexture() {
            return (0, Rk.e)(this, gk, "f")
          }
          set refractionTexture(kk) {
            (0, Rk.i)(this, gk, kk, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, Rk.e)(this, Gk, "f")
          }
          set useAlphaFromDiffuseTexture(kk) {
            (0, Rk.i)(this, Gk, kk, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, Rk.e)(this, Tk, "f")
          }
          set useEmissiveAsIllumination(kk) {
            (0, Rk.i)(this, Tk, kk, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, Rk.e)(this, rk, "f")
          }
          set linkEmissiveWithDiffuse(kk) {
            (0, Rk.i)(this, rk, kk, "f")
          }
          get useSpecularOverAlpha() {
            return (0, Rk.e)(this, Dk, "f")
          }
          set useSpecularOverAlpha(kk) {
            (0, Rk.i)(this, Dk, kk, "f")
          }
          get useReflectionOverAlpha() {
            return (0, Rk.e)(this, zk, "f")
          }
          set useReflectionOverAlpha(kk) {
            (0, Rk.i)(this, zk, kk, "f")
          }
          get disableLighting() {
            return (0, Rk.e)(this, Pk, "f")
          }
          set disableLighting(kk) {
            (0, Rk.i)(this, Pk, kk, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, Rk.e)(this, hk, "f")
          }
          set useObjectSpaceNormalMap(kk) {
            (0, Rk.i)(this, hk, kk, "f")
          }
          get useParallax() {
            return (0, Rk.e)(this, qk, "f")
          }
          set useParallax(kk) {
            (0, Rk.i)(this, qk, kk, "f")
          }
          get useParallaxOcclusion() {
            return (0, Rk.e)(this, Ck, "f")
          }
          set useParallaxOcclusion(kk) {
            (0, Rk.i)(this, Ck, kk, "f")
          }
          get roughness() {
            return (0, Rk.e)(this, Zk, "f")
          }
          set roughness(kk) {
            (0, Rk.i)(this, Zk, kk, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, Rk.e)(this, pk, "f")
          }
          set useLightmapAsShadowmap(kk) {
            (0, Rk.i)(this, pk, kk, "f")
          }
          get diffuseFresnelParameters() {
            return (0, Rk.e)(this, Kk, "f")
          }
          set diffuseFresnelParameters(kk) {
            (0, Rk.i)(this, Kk, kk, "f")
          }
          get opacityFresnelParameters() {
            return (0, Rk.e)(this, xk, "f")
          }
          set opacityFresnelParameters(kk) {
            (0, Rk.i)(this, xk, kk, "f")
          }
          get reflectionFresnelParameters() {
            return (0, Rk.e)(this, jk, "f")
          }
          set reflectionFresnelParameters(kk) {
            (0, Rk.i)(this, jk, kk, "f")
          }
          get refractionFresnelParameters() {
            return (0, Rk.e)(this, lk, "f")
          }
          set refractionFresnelParameters(kk) {
            (0, Rk.i)(this, lk, kk, "f")
          }
          get emissiveFresnelParameters() {
            return (0, Rk.e)(this, nk, "f")
          }
          set emissiveFresnelParameters(kk) {
            (0, Rk.i)(this, nk, kk, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, Rk.e)(this, Ik, "f")
          }
          set useReflectionFresnelFromSpecular(kk) {
            (0, Rk.i)(this, Ik, kk, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, Rk.e)(this, Qk, "f")
          }
          set useGlossinessFromSpecularMapAlpha(kk) {
            (0, Rk.i)(this, Qk, kk, "f")
          }
          get maxSimultaneousLights() {
            return (0, Rk.e)(this, kF, "f")
          }
          set maxSimultaneousLights(kk) {
            (0, Rk.i)(this, kF, kk, "f")
          }
          get invertNormalMapX() {
            return (0, Rk.e)(this, FF, "f")
          }
          set invertNormalMapX(kk) {
            (0, Rk.i)(this, FF, kk, "f")
          }
          get invertNormalMapY() {
            return (0, Rk.e)(this, BF, "f")
          }
          set invertNormalMapY(kk) {
            (0, Rk.i)(this, BF, kk, "f")
          }
          get twoSidedLighting() {
            return (0, Rk.e)(this, RF, "f")
          }
          set twoSidedLighting(kk) {
            (0, Rk.i)(this, RF, kk, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Rk.e)(this, tF, "f")
          }
          set applyDecalMapAfterDetailMap(kk) {
            (0, Rk.i)(this, tF, kk, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(Bk, tk) {
            super(Bk, tk, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || kk.ForceGLSL), this._diffuseTexture = (0, Rk.l)(this, NB, null), Fk.set(this, ((0, Rk.l)(this, HB), (0, Rk.l)(this, uB, void 0))), this._ambientTexture = ((0, Rk.l)(this, MB), (0, Rk.l)(this, gB, null)), sk.set(this, ((0, Rk.l)(this, UB), (0, Rk.l)(this, cB, void 0))), this._opacityTexture = ((0, Rk.l)(this, GB), (0, Rk.l)(this, TB, null)), Ak.set(this, ((0, Rk.l)(this, rB), (0, Rk.l)(this, DB, void 0))), this._reflectionTexture = ((0, Rk.l)(this, zB), (0, Rk.l)(this, PB, null)), Ek.set(this, ((0, Rk.l)(this, hB), (0, Rk.l)(this, qB, void 0))), this._emissiveTexture = ((0, Rk.l)(this, CB), (0, Rk.l)(this, ZB, null)), Sk.set(this, ((0, Rk.l)(this, pB), (0, Rk.l)(this, KB, void 0))), this._specularTexture = ((0, Rk.l)(this, xB), (0, Rk.l)(this, jB, null)), Nk.set(this, ((0, Rk.l)(this, lB), (0, Rk.l)(this, nB, void 0))), this._bumpTexture = ((0, Rk.l)(this, IB), (0, Rk.l)(this, QB, null)), Hk.set(this, ((0, Rk.l)(this, kR), (0, Rk.l)(this, FR, void 0))), this._lightmapTexture = ((0, Rk.l)(this, BR), (0, Rk.l)(this, RR, null)), uk.set(this, ((0, Rk.l)(this, tR), (0, Rk.l)(this, aR, void 0))), this._refractionTexture = ((0, Rk.l)(this, XR), (0, Rk.l)(this, bR, null)), gk.set(this, ((0, Rk.l)(this, wR), (0, Rk.l)(this, dR, void 0))), this.ambientColor = ((0, Rk.l)(this, sR), (0, Rk.l)(this, VR, new bk.e(0, 0, 0))), this.diffuseColor = ((0, Rk.l)(this, JR), (0, Rk.l)(this, AR, new bk.e(1, 1, 1))), this.specularColor = ((0, Rk.l)(this, eR), (0, Rk.l)(this, yR, new bk.e(1, 1, 1))), this.emissiveColor = ((0, Rk.l)(this, fR), (0, Rk.l)(this, mR, new bk.e(0, 0, 0))), this.specularPower = ((0, Rk.l)(this, WR), (0, Rk.l)(this, vR, 64)), this._useAlphaFromDiffuseTexture = ((0, Rk.l)(this, iR), (0, Rk.l)(this, YR, !1)), Gk.set(this, ((0, Rk.l)(this, oR), (0, Rk.l)(this, LR, void 0))), this._useEmissiveAsIllumination = ((0, Rk.l)(this, OR), (0, Rk.l)(this, ER, !1)), Tk.set(this, ((0, Rk.l)(this, SR), (0, Rk.l)(this, NR, void 0))), this._linkEmissiveWithDiffuse = ((0, Rk.l)(this, HR), (0, Rk.l)(this, uR, !1)), rk.set(this, ((0, Rk.l)(this, MR), (0, Rk.l)(this, gR, void 0))), this._useSpecularOverAlpha = ((0, Rk.l)(this, UR), (0, Rk.l)(this, cR, !1)), Dk.set(this, ((0, Rk.l)(this, GR), (0, Rk.l)(this, TR, void 0))), this._useReflectionOverAlpha = ((0, Rk.l)(this, rR), (0, Rk.l)(this, DR, !1)), zk.set(this, ((0, Rk.l)(this, zR), (0, Rk.l)(this, PR, void 0))), this._disableLighting = ((0, Rk.l)(this, hR), (0, Rk.l)(this, qR, !1)), Pk.set(this, ((0, Rk.l)(this, CR), (0, Rk.l)(this, ZR, void 0))), this._useObjectSpaceNormalMap = ((0, Rk.l)(this, pR), (0, Rk.l)(this, KR, !1)), hk.set(this, ((0, Rk.l)(this, xR), (0, Rk.l)(this, jR, void 0))), this._useParallax = ((0, Rk.l)(this, lR), (0, Rk.l)(this, nR, !1)), qk.set(this, ((0, Rk.l)(this, IR), (0, Rk.l)(this, QR, void 0))), this._useParallaxOcclusion = ((0, Rk.l)(this, kt), (0, Rk.l)(this, Ft, !1)), Ck.set(this, ((0, Rk.l)(this, Bt), (0, Rk.l)(this, Rt, void 0))), this.parallaxScaleBias = ((0, Rk.l)(this, tt), (0, Rk.l)(this, Xt, .05)), this._roughness = ((0, Rk.l)(this, bt), (0, Rk.l)(this, wt, 0)), Zk.set(this, ((0, Rk.l)(this, dt), (0, Rk.l)(this, st, void 0))), this.indexOfRefraction = ((0, Rk.l)(this, Vt), (0, Rk.l)(this, Jt, .98)), this.invertRefractionY = ((0, Rk.l)(this, At), (0, Rk.l)(this, et, !0)), this.alphaCutOff = ((0, Rk.l)(this, yt), (0, Rk.l)(this, ft, .4)), this._useLightmapAsShadowmap = ((0, Rk.l)(this, mt), (0, Rk.l)(this, Wt, !1)), pk.set(this, ((0, Rk.l)(this, vt), (0, Rk.l)(this, it, void 0))), this._diffuseFresnelParameters = ((0, Rk.l)(this, Yt), (0, Rk.l)(this, ot, void 0)), Kk.set(this, ((0, Rk.l)(this, Lt), (0, Rk.l)(this, Ot, void 0))), this._opacityFresnelParameters = ((0, Rk.l)(this, Et), (0, Rk.l)(this, St, void 0)), xk.set(this, ((0, Rk.l)(this, Nt), (0, Rk.l)(this, Ht, void 0))), this._reflectionFresnelParameters = ((0, Rk.l)(this, ut), (0, Rk.l)(this, Mt, void 0)), jk.set(this, ((0, Rk.l)(this, gt), (0, Rk.l)(this, Ut, void 0))), this._refractionFresnelParameters = ((0, Rk.l)(this, ct), (0, Rk.l)(this, Gt, void 0)), lk.set(this, ((0, Rk.l)(this, Tt), (0, Rk.l)(this, rt, void 0))), this._emissiveFresnelParameters = ((0, Rk.l)(this, Dt), (0, Rk.l)(this, zt, void 0)), nk.set(this, ((0, Rk.l)(this, Pt), (0, Rk.l)(this, ht, void 0))), this._useReflectionFresnelFromSpecular = ((0, Rk.l)(this, qt), (0, Rk.l)(this, Ct, !1)), Ik.set(this, ((0, Rk.l)(this, Zt), (0, Rk.l)(this, pt, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, Rk.l)(this, Kt), (0, Rk.l)(this, xt, !1)), Qk.set(this, ((0, Rk.l)(this, jt), (0, Rk.l)(this, lt, void 0))), this._maxSimultaneousLights = ((0, Rk.l)(this, nt), (0, Rk.l)(this, It, 4)), kF.set(this, ((0, Rk.l)(this, Qt), (0, Rk.l)(this, ka, void 0))), this._invertNormalMapX = ((0, Rk.l)(this, Fa), (0, Rk.l)(this, Ba, !1)), FF.set(this, ((0, Rk.l)(this, Ra), (0, Rk.l)(this, ta, void 0))), this._invertNormalMapY = ((0, Rk.l)(this, aa), (0, Rk.l)(this, Xa, !1)), BF.set(this, ((0, Rk.l)(this, ba), (0, Rk.l)(this, wa, void 0))), this._twoSidedLighting = ((0, Rk.l)(this, da), (0, Rk.l)(this, sa, !1)), RF.set(this, ((0, Rk.l)(this, Va), (0, Rk.l)(this, Ja, void 0))), this._applyDecalMapAfterDetailMap = ((0, Rk.l)(this, Aa), (0, Rk.l)(this, ea, !1)), tF.set(this, ((0, Rk.l)(this, ya), (0, Rk.l)(this, fa, void 0))), this._vertexPullingMetadata = ((0, Rk.l)(this, ma), null), this._renderTargets = new ak.c(16), this._globalAmbientColor = new bk.e(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new mk.e(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new dk.d, this.getRenderTargetTextures = () => (this._renderTargets.reset(), kk.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), kk.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(kk.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(kk.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === Jk.c.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== Jk.c.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(Fk, Bk) {
            let Rk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const tk = Bk._drawWrapper;
            if (tk.effect && this.isFrozen && tk._wasPreviouslyReady && tk._wasPreviouslyUsingInstances === Rk) return !0;
            Bk.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Bk.materialDefines = new Uk(this._eventInfo.defineNames));
            const ak = this.XN(),
              Xk = Bk.materialDefines;
            if (this._isReadyForSubMesh(Bk)) return !0;
            const bk = ak.ne();
            if (Xk._needNormals = (0, ik.Z)(ak, Fk, Xk, !0, this._maxSimultaneousLights, this._disableLighting), !(0, ik.c)(ak, Fk, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, ik.cb)(ak, Xk);
            const sk = this.needAlphaBlendingForMesh(Fk) && this.XN().useOrderIndependentTransparency;
            if ((0, ik.hb)(ak, Xk, this.canRenderToMRT && !sk), (0, ik.eb)(ak, Xk, sk), Ok.c.PrepareDefines(bk.currentRenderPassId, Fk, Xk), Xk._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Xk._needUVs = !1;
              for (let kk = 1; kk <= 6; ++kk) Xk["MAINUV" + kk] = !1;
              if (ak.texturesEnabled) {
                if (Xk.DIFFUSEDIRECTUV = 0, Xk.BUMPDIRECTUV = 0, Xk.AMBIENTDIRECTUV = 0, Xk.OPACITYDIRECTUV = 0, Xk.EMISSIVEDIRECTUV = 0, Xk.SPECULARDIRECTUV = 0, Xk.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && kk.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, ik._)(this._diffuseTexture, Xk, "DIFFUSE")
                } else Xk.DIFFUSE = !1;
                if (this._ambientTexture && kk.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, ik._)(this._ambientTexture, Xk, "AMBIENT")
                } else Xk.AMBIENT = !1;
                if (this._opacityTexture && kk.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, ik._)(this._opacityTexture, Xk, "OPACITY"), Xk.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else Xk.OPACITY = !1;
                if (this._reflectionTexture && kk.ReflectionTextureEnabled ? (Xk.ROUGHNESS = this._roughness > 0, Xk.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (Xk.ROUGHNESS = !1, Xk.REFLECTIONOVERALPHA = !1), !(0, ik.X)(ak, this._reflectionTexture, Xk)) return !1;
                if (this._emissiveTexture && kk.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, ik._)(this._emissiveTexture, Xk, "EMISSIVE")
                } else Xk.EMISSIVE = !1;
                if (this._lightmapTexture && kk.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, ik._)(this._lightmapTexture, Xk, "LIGHTMAP"), Xk.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Xk.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else Xk.LIGHTMAP = !1;
                if (this._specularTexture && kk.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, ik._)(this._specularTexture, Xk, "SPECULAR"), Xk.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else Xk.SPECULAR = !1;
                if (ak.ne().getCaps().standardDerivatives && this._bumpTexture && kk.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, ik._)(this._bumpTexture, Xk, "BUMP"), Xk.PARALLAX = this._useParallax, Xk.PARALLAX_RHS = ak.useRightHandedSystem, Xk.PARALLAXOCCLUSION = this._useParallaxOcclusion, Xk.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else Xk.BUMP = !1, Xk.PARALLAX = !1, Xk.PARALLAX_RHS = !1, Xk.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && kk.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  Xk._needUVs = !0, Xk.REFRACTION = !0, Xk.REFRACTIONMAP_3D = this._refractionTexture.isCube, Xk.RGBDREFRACTION = this._refractionTexture.isRGBD, Xk.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else Xk.REFRACTION = !1;
                Xk.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else Xk.DIFFUSE = !1, Xk.AMBIENT = !1, Xk.OPACITY = !1, Xk.REFLECTION = !1, Xk.EMISSIVE = !1, Xk.LIGHTMAP = !1, Xk.BUMP = !1, Xk.REFRACTION = !1;
              Xk.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), Xk.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, Xk.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, Xk.SPECULAROVERALPHA = this._useSpecularOverAlpha, Xk.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Xk.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, Xk.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(Fk), Xk.TEXTURE_REPETITION_MODE = bk.version > 1 || bk.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Xk, this._eventInfo.subMesh = Bk, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Xk._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(Xk), Xk.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, Xk.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (Xk._areFresnelDirty && (kk.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (Xk.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, Xk.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, Xk.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, Xk.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, Xk.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, Xk.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, Xk._needNormals = !0, Xk.FRESNEL = !0) : Xk.FRESNEL = !1), Xk.AREALIGHTUSED || Xk.CLUSTLIGHT_BATCH)
              for (let kk = 0; kk < Fk.lightSources.length; kk++)
                if (!Fk.lightSources[kk]._isReady()) return !1;
            (0, ik.ab)(Fk, ak, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Fk), Xk, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Bk.getRenderingMesh(), this._isVertexOutputInvariant), (0, ik.V)(ak, bk, this, Xk, Rk, null, Bk.getRenderingMesh().hasThinInstances), this._eventInfo.defines = Xk, this._eventInfo.mesh = Fk, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, ik.T)(Fk, Xk, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let Jk = !1;
            if (Xk.isDirty) {
              const Rk = Xk._areLightsDisposed;
              Xk.markAsProcessed();
              const tk = new fk.c;
              Xk.REFLECTION && tk.addFallback(0, "REFLECTION"), Xk.SPECULAR && tk.addFallback(0, "SPECULAR"), Xk.BUMP && tk.addFallback(0, "BUMP"), Xk.PARALLAX && tk.addFallback(1, "PARALLAX"), Xk.PARALLAX_RHS && tk.addFallback(1, "PARALLAX_RHS"), Xk.PARALLAXOCCLUSION && tk.addFallback(0, "PARALLAXOCCLUSION"), Xk.SPECULAROVERALPHA && tk.addFallback(0, "SPECULAROVERALPHA"), Xk.FOG && tk.addFallback(1, "FOG"), Xk.POINTSIZE && tk.addFallback(0, "POINTSIZE"), Xk.LOGARITHMICDEPTH && tk.addFallback(0, "LOGARITHMICDEPTH"), (0, ik.I)(Xk, tk, this._maxSimultaneousLights), Xk.SPECULARTERM && tk.addFallback(0, "SPECULARTERM"), Xk.DIFFUSEFRESNEL && tk.addFallback(1, "DIFFUSEFRESNEL"), Xk.OPACITYFRESNEL && tk.addFallback(2, "OPACITYFRESNEL"), Xk.REFLECTIONFRESNEL && tk.addFallback(3, "REFLECTIONFRESNEL"), Xk.EMISSIVEFRESNEL && tk.addFallback(4, "EMISSIVEFRESNEL"), Xk.FRESNEL && tk.addFallback(4, "FRESNEL"), Xk.MULTIVIEW && tk.addFallback(0, "MULTIVIEW");
              const sk = [wk.n.PositionKind];
              Xk.NORMAL && sk.push(wk.n.NormalKind), Xk.TANGENT && sk.push(wk.n.TangentKind);
              for (let kk = 1; kk <= 6; ++kk) Xk["UV" + kk] && sk.push(`uv${1===kk?"":kk}`);
              Xk.VERTEXCOLOR && sk.push(wk.n.ColorKind), (0, ik.M)(sk, Fk, Xk, tk), (0, ik.O)(sk, Xk), (0, ik.Q)(sk, Fk, Xk), (0, ik.L)(sk, Fk, Xk);
              let Ak = "default";
              const ek = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                yk = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, ik.kb)(ek, yk, !1);
              const mk = ["Material", "Scene", "Mesh"],
                Yk = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: Xk.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = tk, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = Xk, this._eventInfo.uniforms = ek, this._eventInfo.attributes = sk, this._eventInfo.samplers = yk, this._eventInfo.uniformBuffersNames = mk, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Fk, this._eventInfo.indexParameters = Yk, this._callbackPluginEventGeneric(128, this._eventInfo), Ok.c.AddUniformsAndSamplers(ek, yk), dk.d.AddUniforms(ek), dk.d.AddSamplers(yk), Vk.b && (Vk.b.PrepareUniforms(ek, Xk), Vk.b.PrepareSamplers(yk, Xk)), (0, ik.ob)({
                  uniformsNames: ek,
                  uniformBuffersNames: mk,
                  samplers: yk,
                  defines: Xk,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, Wk.b)(ek), this._useVertexPulling) {
                const kk = Bk.getRenderingMesh(),
                  Fk = kk?.geometry;
                Fk && (this._vertexPullingMetadata = (0, vk.f)(Fk), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((kk, Fk) => {
                  ek.push(`vp_${Fk}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const Lk = {};
              this.customShaderNameResolve && (Ak = this.customShaderNameResolve(Ak, ek, mk, yk, Xk, sk, Lk));
              const Ek = Xk.toString(),
                Sk = Bk.effect,
                Nk = ak.ne().createEffect(Ak, {
                  attributes: sk,
                  uniformsNames: ek,
                  uniformBuffersNames: mk,
                  samplers: yk,
                  defines: Ek,
                  fallbacks: tk,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: Yk,
                  processFinalCode: Lk.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: Xk.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: kk._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, bk);
              if (this._eventInfo.customCode = void 0, Nk)
                if (this._onEffectCreatedObservable && (Mk.effect = Nk, Mk.subMesh = Bk, this._onEffectCreatedObservable.notifyObservers(Mk)), this.allowShaderHotSwapping && Sk && !Nk.isReady()) {
                  if (Xk.markAsUnprocessed(), Jk = this.isFrozen, Rk) return Xk._areLightsDisposed = !0, !1
                } else ak.resetCachedMaterial(), Bk.setEffect(Nk, Xk, this._materialContext)
            }
            return !(!Bk.effect || !Bk.effect.isReady()) && (Xk._renderId = ak.getRenderId(), tk._wasPreviouslyReady = !Jk, tk._wasPreviouslyUsingInstances = Rk, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const kk = this._uniformBuffer;
            kk.addUniform("diffuseLeftColor", 4), kk.addUniform("diffuseRightColor", 4), kk.addUniform("opacityParts", 4), kk.addUniform("reflectionLeftColor", 4), kk.addUniform("reflectionRightColor", 4), kk.addUniform("refractionLeftColor", 4), kk.addUniform("refractionRightColor", 4), kk.addUniform("emissiveLeftColor", 4), kk.addUniform("emissiveRightColor", 4), kk.addUniform("vDiffuseInfos", 2), kk.addUniform("vAmbientInfos", 2), kk.addUniform("vOpacityInfos", 2), kk.addUniform("vEmissiveInfos", 2), kk.addUniform("vLightmapInfos", 2), kk.addUniform("vSpecularInfos", 2), kk.addUniform("vBumpInfos", 3), kk.addUniform("diffuseMatrix", 16), kk.addUniform("ambientMatrix", 16), kk.addUniform("opacityMatrix", 16), kk.addUniform("emissiveMatrix", 16), kk.addUniform("lightmapMatrix", 16), kk.addUniform("specularMatrix", 16), kk.addUniform("bumpMatrix", 16), kk.addUniform("vTangentSpaceParams", 2), kk.addUniform("pointSize", 1), kk.addUniform("alphaCutOff", 1), kk.addUniform("refractionMatrix", 16), kk.addUniform("vRefractionInfos", 4), kk.addUniform("vRefractionPosition", 3), kk.addUniform("vRefractionSize", 3), kk.addUniform("vSpecularColor", 4), kk.addUniform("vEmissiveColor", 3), kk.addUniform("vDiffuseColor", 4), kk.addUniform("vAmbientColor", 3), kk.addUniform("cameraInfo", 4), kk.addUniform("vTextureRepetitionHexTilingParams", 4), (0, ik.ib)(kk, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(Fk, Bk, Rk) {
            const tk = this.XN(),
              ak = Rk.materialDefines;
            if (!ak) return;
            const wk = Rk.effect;
            if (!wk) return;
            this._activeEffect = wk, Bk.getMeshUniformBuffer().bindToEffect(wk, "Mesh"), Bk.transferToEffect(Fk), this._uniformBuffer.bindToEffect(wk, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, tk, Bk, Fk, this.isFrozen), Ok.c.Bind(tk.ne().currentRenderPassId, this._activeEffect, Bk, Fk, this);
            const dk = tk.activeCamera;
            dk ? this._uniformBuffer.updateFloat4("cameraInfo", dk.minZ, dk.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const sk = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", sk[0], sk[1], sk[2], sk[3]), this._eventInfo.subMesh = Rk, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), ak.OBJECTSPACE_NORMALMAP && (Fk.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Vk = this._mustRebind(tk, wk, Rk, Bk.visibility),
              Jk = tk.ne()._features.needToAlwaysBindUniformBuffers;
            (0, ik.g)(Bk, wk), this._vertexPullingMetadata && (0, vk.e)(wk, this._vertexPullingMetadata);
            const Ak = this._uniformBuffer;
            if (Vk) {
              if (this.bindViewProjection(wk), !Ak.useUbo || !this.isFrozen || !Ak.isSync || Rk._drawWrapper._forceRebindOnNextCall) {
                if (kk.FresnelEnabled && ak.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (Ak.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), Ak.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const kk = bk.n.Color3[0];
                    kk.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), Ak.updateColor4("opacityParts", kk, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (Ak.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), Ak.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (Ak.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), Ak.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (Ak.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), Ak.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (ak.ALPHATEST && Ak.updateFloat("alphaCutOff", this.alphaCutOff), tk.texturesEnabled && (this._diffuseTexture && kk.DiffuseTextureEnabled && (Ak.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, ik.E)(this._diffuseTexture, Ak, "diffuse")), this._ambientTexture && kk.AmbientTextureEnabled && (Ak.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, ik.E)(this._ambientTexture, Ak, "ambient")), this._opacityTexture && kk.OpacityTextureEnabled && (Ak.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, ik.E)(this._opacityTexture, Ak, "opacity")), (0, ik.j)(tk, ak, Ak, bk.e.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && kk.ReflectionTextureEnabled || Ak.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && kk.EmissiveTextureEnabled && (Ak.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, ik.E)(this._emissiveTexture, Ak, "emissive")), this._lightmapTexture && kk.LightmapTextureEnabled && (Ak.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, ik.E)(this._lightmapTexture, Ak, "lightmap")), this._specularTexture && kk.SpecularTextureEnabled && (Ak.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, ik.E)(this._specularTexture, Ak, "specular")), this._bumpTexture && tk.ne().getCaps().standardDerivatives && kk.BumpTextureEnabled && (Ak.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, ik.E)(this._bumpTexture, Ak, "bump"), tk._mirroredCameraPosition ? Ak.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Ak.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && kk.RefractionTextureEnabled)) {
                  let kk = 1;
                  if (this._refractionTexture.isCube || (Ak.M_("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (kk = this._refractionTexture.depth)), Ak.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, kk, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const kk = this._refractionTexture;
                    Ak.updateVector3("vRefractionPosition", kk.boundingBoxPosition), Ak.updateVector3("vRefractionSize", kk.boundingBoxSize)
                  }
                }
                this.pointsCloud && Ak.updateFloat("pointSize", this.pointSize), Ak.updateColor4("vSpecularColor", this.specularColor, this.specularPower), Ak.updateColor3("vEmissiveColor", kk.EmissiveTextureEnabled ? this.emissiveColor : bk.e.BlackReadOnly), Ak.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), tk.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), Ak.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              tk.texturesEnabled && (this._diffuseTexture && kk.DiffuseTextureEnabled && wk.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && kk.AmbientTextureEnabled && wk.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && kk.OpacityTextureEnabled && wk.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && kk.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? wk.setTexture("reflectionCubeSampler", this._reflectionTexture) : wk.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && kk.EmissiveTextureEnabled && wk.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && kk.LightmapTextureEnabled && wk.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && kk.SpecularTextureEnabled && wk.setTexture("specularSampler", this._specularTexture), this._bumpTexture && tk.ne().getCaps().standardDerivatives && kk.BumpTextureEnabled && wk.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && kk.RefractionTextureEnabled && (this._refractionTexture.isCube ? wk.setTexture("refractionCubeSampler", this._refractionTexture) : wk.setTexture("refraction2DSampler", this._refractionTexture))), this.XN().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Bk) && this.XN().depthPeelingRenderer.bind(wk), this._eventInfo.subMesh = Rk, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Wk.e)(wk, this, tk), this.bindEyePosition(wk)
            } else Jk && (this._needToBindSceneUbo = !0);
            !Vk && this.isFrozen && !Jk || !tk.lightsEnabled || this._disableLighting || (0, ik.r)(tk, Bk, wk, ak, this._maxSimultaneousLights), !Vk && this.isFrozen || ((tk.fogEnabled && Bk.applyFog && tk.fogMode !== Xk.c.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || Bk.receiveShadows || ak.PREPASS || ak.CLUSTLIGHT_BATCH) && this.bindView(wk), (0, ik.i)(tk, Bk, wk), ak.NUM_MORPH_INFLUENCERS && (0, ik.x)(Bk, wk), ak.BAKED_VERTEX_ANIMATION_TEXTURE && Bk.bakedVertexAnimationManager?.bind(wk, ak.INSTANCES), this.useLogarithmicDepth && (0, ik.u)(ak, wk, tk), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(Bk, this._activeEffect, Rk), Ak.update()
          }
          _canBindRunFollower(Fk, Bk, Rk, tk, ak) {
            const Xk = Fk.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === kk.prototype.isReadyForSubMesh && this.bindForSubMesh === kk.prototype.bindForSubMesh && this._mustRebind === ek.d.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !Bk._features.needToAlwaysBindUniformBuffers && !(Xk && Xk.enabled && Xk.currentRTisSceneRT) && !Ok.c._Configurations[Bk.currentRenderPassId] && !tk.materialDefines?.OBJECTSPACE_NORMALMAP && !Rk.skeleton && !ak._bonesComputationForcedToCPU
          }
          _bindRunFollower(kk, Fk, Bk, Rk) {
            this._activeEffect = Rk, Fk.getMeshUniformBuffer().bindToEffect(Rk, "Mesh"), Fk.transferToEffect(kk);
            const tk = this._uniformBuffer;
            tk.bindToEffect(Rk, "Material");
            const ak = this._scene.activeCamera;
            ak ? tk.updateFloat4("cameraInfo", ak.minZ, ak.maxZ, 0, 0) : tk.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Xk = this.textureRepetitionHexTilingParams;
            tk.updateFloat4("vTextureRepetitionHexTilingParams", Xk[0], Xk[1], Xk[2], Xk[3]), this._afterBind(Fk, Rk, Bk), tk.update()
          }
          getAnimatables() {
            const kk = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && kk.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && kk.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && kk.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && kk.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && kk.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && kk.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && kk.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && kk.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && kk.push(this._refractionTexture), kk
          }
          getActiveTextures() {
            const kk = super.getActiveTextures();
            return this._diffuseTexture && kk.push(this._diffuseTexture), this._ambientTexture && kk.push(this._ambientTexture), this._opacityTexture && kk.push(this._opacityTexture), this._reflectionTexture && kk.push(this._reflectionTexture), this._emissiveTexture && kk.push(this._emissiveTexture), this._specularTexture && kk.push(this._specularTexture), this._bumpTexture && kk.push(this._bumpTexture), this._lightmapTexture && kk.push(this._lightmapTexture), this._refractionTexture && kk.push(this._refractionTexture), kk
          }
          hasTexture(kk) {
            return !!super.hasTexture(kk) || (this._diffuseTexture === kk || (this._ambientTexture === kk || (this._opacityTexture === kk || (this._reflectionTexture === kk || (this._emissiveTexture === kk || (this._specularTexture === kk || (this._bumpTexture === kk || (this._lightmapTexture === kk || this._refractionTexture === kk))))))))
          }
          dispose(kk, Fk) {
            Fk && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(kk, Fk)
          }
          clone(Fk) {
            let Bk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const tk = Yk.c.Clone((() => new kk(Fk, this.XN())), this, {
              cloneTexturesOnlyOnce: Bk
            });
            return tk.name = Fk, tk.id = Fk, this.stencil.copyTo(tk.stencil), this._clonePlugins(tk, Rk), tk
          }
          static Parse(Fk, Bk, Rk) {
            const tk = Yk.c.Parse((() => new kk(Fk.name, Bk)), Fk, Bk, Rk);
            return Fk.stencil && tk.stencil.parse(Fk.stencil, Bk, Rk), Jk.c._ParsePlugins(Fk, tk, Bk, Rk), tk
          }
          static get DiffuseTextureEnabled() {
            return yk.b.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(kk) {
            yk.b.DiffuseTextureEnabled = kk
          }
          static get DetailTextureEnabled() {
            return yk.b.DetailTextureEnabled
          }
          static set DetailTextureEnabled(kk) {
            yk.b.DetailTextureEnabled = kk
          }
          static get AmbientTextureEnabled() {
            return yk.b.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(kk) {
            yk.b.AmbientTextureEnabled = kk
          }
          static get OpacityTextureEnabled() {
            return yk.b.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(kk) {
            yk.b.OpacityTextureEnabled = kk
          }
          static get ReflectionTextureEnabled() {
            return yk.b.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(kk) {
            yk.b.ReflectionTextureEnabled = kk
          }
          static get EmissiveTextureEnabled() {
            return yk.b.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(kk) {
            yk.b.EmissiveTextureEnabled = kk
          }
          static get SpecularTextureEnabled() {
            return yk.b.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(kk) {
            yk.b.SpecularTextureEnabled = kk
          }
          static get BumpTextureEnabled() {
            return yk.b.BumpTextureEnabled
          }
          static set BumpTextureEnabled(kk) {
            yk.b.BumpTextureEnabled = kk
          }
          static get LightmapTextureEnabled() {
            return yk.b.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(kk) {
            yk.b.LightmapTextureEnabled = kk
          }
          static get RefractionTextureEnabled() {
            return yk.b.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(kk) {
            yk.b.RefractionTextureEnabled = kk
          }
          static get ColorGradingTextureEnabled() {
            return yk.b.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(kk) {
            yk.b.ColorGradingTextureEnabled = kk
          }
          static get FresnelEnabled() {
            return yk.b.FresnelEnabled
          }
          static set FresnelEnabled(kk) {
            yk.b.FresnelEnabled = kk
          }
        }, Fk = new WeakMap, sk = new WeakMap, Ak = new WeakMap, Ek = new WeakMap, Sk = new WeakMap, Nk = new WeakMap, Hk = new WeakMap, uk = new WeakMap, gk = new WeakMap, Gk = new WeakMap, Tk = new WeakMap, rk = new WeakMap, Dk = new WeakMap, zk = new WeakMap, Pk = new WeakMap, hk = new WeakMap, qk = new WeakMap, Ck = new WeakMap, Zk = new WeakMap, pk = new WeakMap, Kk = new WeakMap, xk = new WeakMap, jk = new WeakMap, lk = new WeakMap, nk = new WeakMap, Ik = new WeakMap, Qk = new WeakMap, kF = new WeakMap, FF = new WeakMap, BF = new WeakMap, RF = new WeakMap, tF = new WeakMap, (() => {
          const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(SB[Symbol.metadata] ?? null) : void 0;
          aF = [(0, tk.D)("diffuseTexture")], XF = [(0, tk.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], bF = [(0, tk.D)("ambientTexture")], wF = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], dF = [(0, tk.D)("opacityTexture")], sF = [(0, tk.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], VF = [(0, tk.D)("reflectionTexture")], JF = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], AF = [(0, tk.D)("emissiveTexture")], eF = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], yF = [(0, tk.D)("specularTexture")], fF = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], mF = [(0, tk.D)("bumpTexture")], WF = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], vF = [(0, tk.D)("lightmapTexture")], iF = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], YF = [(0, tk.D)("refractionTexture")], oF = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], LF = [(0, tk.l)("ambient")], OF = [(0, tk.l)("diffuse")], EF = [(0, tk.l)("specular")], SF = [(0, tk.l)("emissive")], NF = [(0, tk.M)()], HF = [(0, tk.M)("useAlphaFromDiffuseTexture")], uF = [() => ({
            init(kk) {
              return void 0 === kk && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = kk), kk
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(kk) {
              this._useAlphaFromDiffuseTexture = kk
            }
          })], MF = [(0, tk.M)("useEmissiveAsIllumination")], gF = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], UF = [(0, tk.M)("linkEmissiveWithDiffuse")], cF = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], GF = [(0, tk.M)("useSpecularOverAlpha")], TF = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], rF = [(0, tk.M)("useReflectionOverAlpha")], DF = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], zF = [(0, tk.M)("disableLighting")], PF = [(0, tk.d)("_markAllSubMeshesAsLightsDirty")], hF = [(0, tk.M)("useObjectSpaceNormalMap")], qF = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], CF = [(0, tk.M)("useParallax")], ZF = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], pF = [(0, tk.M)("useParallaxOcclusion")], KF = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], xF = [(0, tk.M)()], jF = [(0, tk.M)("roughness")], lF = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], nF = [(0, tk.M)()], IF = [(0, tk.M)()], QF = [(0, tk.M)()], kB = [(0, tk.M)("useLightmapAsShadowmap")], FB = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], BB = [(0, tk.s)("diffuseFresnelParameters")], RB = [(0, tk.d)("_markAllSubMeshesAsFresnelDirty")], tB = [(0, tk.s)("opacityFresnelParameters")], aB = [(0, tk.d)("_markAllSubMeshesAsFresnelAndMiscDirty")], XB = [(0, tk.s)("reflectionFresnelParameters")], bB = [(0, tk.d)("_markAllSubMeshesAsFresnelDirty")], wB = [(0, tk.s)("refractionFresnelParameters")], dB = [(0, tk.d)("_markAllSubMeshesAsFresnelDirty")], sB = [(0, tk.s)("emissiveFresnelParameters")], VB = [(0, tk.d)("_markAllSubMeshesAsFresnelDirty")], JB = [(0, tk.M)("useReflectionFresnelFromSpecular")], AB = [(0, tk.d)("_markAllSubMeshesAsFresnelDirty")], eB = [(0, tk.M)("useGlossinessFromSpecularMapAlpha")], yB = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], fB = [(0, tk.M)("maxSimultaneousLights")], mB = [(0, tk.d)("_markAllSubMeshesAsLightsDirty")], WB = [(0, tk.M)("invertNormalMapX")], vB = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], iB = [(0, tk.M)("invertNormalMapY")], YB = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], oB = [(0, tk.M)("twoSidedLighting")], LB = [(0, tk.d)("_markAllSubMeshesAsTexturesDirty")], OB = [(0, tk.M)("applyDecalMapAfterDetailMap")], EB = [(0, tk.d)("_markAllSubMeshesAsMiscDirty")], (0, Rk.j)(kk, null, XF, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "diffuseTexture" in kk,
              get: kk => kk.diffuseTexture,
              set: (kk, Fk) => {
                kk.diffuseTexture = Fk
              }
            },
            metadata: Fk
          }, uB, MB), (0, Rk.j)(kk, null, wF, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "ambientTexture" in kk,
              get: kk => kk.ambientTexture,
              set: (kk, Fk) => {
                kk.ambientTexture = Fk
              }
            },
            metadata: Fk
          }, cB, GB), (0, Rk.j)(kk, null, sF, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "opacityTexture" in kk,
              get: kk => kk.opacityTexture,
              set: (kk, Fk) => {
                kk.opacityTexture = Fk
              }
            },
            metadata: Fk
          }, DB, zB), (0, Rk.j)(kk, null, JF, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "reflectionTexture" in kk,
              get: kk => kk.reflectionTexture,
              set: (kk, Fk) => {
                kk.reflectionTexture = Fk
              }
            },
            metadata: Fk
          }, qB, CB), (0, Rk.j)(kk, null, eF, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "emissiveTexture" in kk,
              get: kk => kk.emissiveTexture,
              set: (kk, Fk) => {
                kk.emissiveTexture = Fk
              }
            },
            metadata: Fk
          }, KB, xB), (0, Rk.j)(kk, null, fF, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularTexture" in kk,
              get: kk => kk.specularTexture,
              set: (kk, Fk) => {
                kk.specularTexture = Fk
              }
            },
            metadata: Fk
          }, nB, IB), (0, Rk.j)(kk, null, WF, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "bumpTexture" in kk,
              get: kk => kk.bumpTexture,
              set: (kk, Fk) => {
                kk.bumpTexture = Fk
              }
            },
            metadata: Fk
          }, FR, BR), (0, Rk.j)(kk, null, iF, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "lightmapTexture" in kk,
              get: kk => kk.lightmapTexture,
              set: (kk, Fk) => {
                kk.lightmapTexture = Fk
              }
            },
            metadata: Fk
          }, aR, XR), (0, Rk.j)(kk, null, oF, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "refractionTexture" in kk,
              get: kk => kk.refractionTexture,
              set: (kk, Fk) => {
                kk.refractionTexture = Fk
              }
            },
            metadata: Fk
          }, dR, sR), (0, Rk.j)(kk, null, uF, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "useAlphaFromDiffuseTexture" in kk,
              get: kk => kk.useAlphaFromDiffuseTexture,
              set: (kk, Fk) => {
                kk.useAlphaFromDiffuseTexture = Fk
              }
            },
            metadata: Fk
          }, LR, OR), (0, Rk.j)(kk, null, gF, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: kk => "useEmissiveAsIllumination" in kk,
              get: kk => kk.useEmissiveAsIllumination,
              set: (kk, Fk) => {
                kk.useEmissiveAsIllumination = Fk
              }
            },
            metadata: Fk
          }, NR, HR), (0, Rk.j)(kk, null, cF, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: kk => "linkEmissiveWithDiffuse" in kk,
              get: kk => kk.linkEmissiveWithDiffuse,
              set: (kk, Fk) => {
                kk.linkEmissiveWithDiffuse = Fk
              }
            },
            metadata: Fk
          }, gR, UR), (0, Rk.j)(kk, null, TF, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: kk => "useSpecularOverAlpha" in kk,
              get: kk => kk.useSpecularOverAlpha,
              set: (kk, Fk) => {
                kk.useSpecularOverAlpha = Fk
              }
            },
            metadata: Fk
          }, TR, rR), (0, Rk.j)(kk, null, DF, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: kk => "useReflectionOverAlpha" in kk,
              get: kk => kk.useReflectionOverAlpha,
              set: (kk, Fk) => {
                kk.useReflectionOverAlpha = Fk
              }
            },
            metadata: Fk
          }, PR, hR), (0, Rk.j)(kk, null, PF, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: kk => "disableLighting" in kk,
              get: kk => kk.disableLighting,
              set: (kk, Fk) => {
                kk.disableLighting = Fk
              }
            },
            metadata: Fk
          }, ZR, pR), (0, Rk.j)(kk, null, qF, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: kk => "useObjectSpaceNormalMap" in kk,
              get: kk => kk.useObjectSpaceNormalMap,
              set: (kk, Fk) => {
                kk.useObjectSpaceNormalMap = Fk
              }
            },
            metadata: Fk
          }, jR, lR), (0, Rk.j)(kk, null, ZF, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: kk => "useParallax" in kk,
              get: kk => kk.useParallax,
              set: (kk, Fk) => {
                kk.useParallax = Fk
              }
            },
            metadata: Fk
          }, QR, kt), (0, Rk.j)(kk, null, KF, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: kk => "useParallaxOcclusion" in kk,
              get: kk => kk.useParallaxOcclusion,
              set: (kk, Fk) => {
                kk.useParallaxOcclusion = Fk
              }
            },
            metadata: Fk
          }, Rt, tt), (0, Rk.j)(kk, null, lF, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: kk => "roughness" in kk,
              get: kk => kk.roughness,
              set: (kk, Fk) => {
                kk.roughness = Fk
              }
            },
            metadata: Fk
          }, st, Vt), (0, Rk.j)(kk, null, FB, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: kk => "useLightmapAsShadowmap" in kk,
              get: kk => kk.useLightmapAsShadowmap,
              set: (kk, Fk) => {
                kk.useLightmapAsShadowmap = Fk
              }
            },
            metadata: Fk
          }, it, Yt), (0, Rk.j)(kk, null, RB, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "diffuseFresnelParameters" in kk,
              get: kk => kk.diffuseFresnelParameters,
              set: (kk, Fk) => {
                kk.diffuseFresnelParameters = Fk
              }
            },
            metadata: Fk
          }, Ot, Et), (0, Rk.j)(kk, null, aB, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "opacityFresnelParameters" in kk,
              get: kk => kk.opacityFresnelParameters,
              set: (kk, Fk) => {
                kk.opacityFresnelParameters = Fk
              }
            },
            metadata: Fk
          }, Ht, ut), (0, Rk.j)(kk, null, bB, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "reflectionFresnelParameters" in kk,
              get: kk => kk.reflectionFresnelParameters,
              set: (kk, Fk) => {
                kk.reflectionFresnelParameters = Fk
              }
            },
            metadata: Fk
          }, Ut, ct), (0, Rk.j)(kk, null, dB, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "refractionFresnelParameters" in kk,
              get: kk => kk.refractionFresnelParameters,
              set: (kk, Fk) => {
                kk.refractionFresnelParameters = Fk
              }
            },
            metadata: Fk
          }, rt, Dt), (0, Rk.j)(kk, null, VB, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "emissiveFresnelParameters" in kk,
              get: kk => kk.emissiveFresnelParameters,
              set: (kk, Fk) => {
                kk.emissiveFresnelParameters = Fk
              }
            },
            metadata: Fk
          }, ht, qt), (0, Rk.j)(kk, null, AB, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: kk => "useReflectionFresnelFromSpecular" in kk,
              get: kk => kk.useReflectionFresnelFromSpecular,
              set: (kk, Fk) => {
                kk.useReflectionFresnelFromSpecular = Fk
              }
            },
            metadata: Fk
          }, pt, Kt), (0, Rk.j)(kk, null, yB, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: kk => "useGlossinessFromSpecularMapAlpha" in kk,
              get: kk => kk.useGlossinessFromSpecularMapAlpha,
              set: (kk, Fk) => {
                kk.useGlossinessFromSpecularMapAlpha = Fk
              }
            },
            metadata: Fk
          }, lt, nt), (0, Rk.j)(kk, null, mB, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: kk => "maxSimultaneousLights" in kk,
              get: kk => kk.maxSimultaneousLights,
              set: (kk, Fk) => {
                kk.maxSimultaneousLights = Fk
              }
            },
            metadata: Fk
          }, ka, Fa), (0, Rk.j)(kk, null, vB, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: kk => "invertNormalMapX" in kk,
              get: kk => kk.invertNormalMapX,
              set: (kk, Fk) => {
                kk.invertNormalMapX = Fk
              }
            },
            metadata: Fk
          }, ta, aa), (0, Rk.j)(kk, null, YB, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: kk => "invertNormalMapY" in kk,
              get: kk => kk.invertNormalMapY,
              set: (kk, Fk) => {
                kk.invertNormalMapY = Fk
              }
            },
            metadata: Fk
          }, wa, da), (0, Rk.j)(kk, null, LB, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: kk => "twoSidedLighting" in kk,
              get: kk => kk.twoSidedLighting,
              set: (kk, Fk) => {
                kk.twoSidedLighting = Fk
              }
            },
            metadata: Fk
          }, Ja, Aa), (0, Rk.j)(kk, null, EB, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: kk => "applyDecalMapAfterDetailMap" in kk,
              get: kk => kk.applyDecalMapAfterDetailMap,
              set: (kk, Fk) => {
                kk.applyDecalMapAfterDetailMap = Fk
              }
            },
            metadata: Fk
          }, fa, ma), (0, Rk.j)(null, null, aF, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_diffuseTexture" in kk,
              get: kk => kk._diffuseTexture,
              set: (kk, Fk) => {
                kk._diffuseTexture = Fk
              }
            },
            metadata: Fk
          }, NB, HB), (0, Rk.j)(null, null, bF, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_ambientTexture" in kk,
              get: kk => kk._ambientTexture,
              set: (kk, Fk) => {
                kk._ambientTexture = Fk
              }
            },
            metadata: Fk
          }, gB, UB), (0, Rk.j)(null, null, dF, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_opacityTexture" in kk,
              get: kk => kk._opacityTexture,
              set: (kk, Fk) => {
                kk._opacityTexture = Fk
              }
            },
            metadata: Fk
          }, TB, rB), (0, Rk.j)(null, null, VF, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_reflectionTexture" in kk,
              get: kk => kk._reflectionTexture,
              set: (kk, Fk) => {
                kk._reflectionTexture = Fk
              }
            },
            metadata: Fk
          }, PB, hB), (0, Rk.j)(null, null, AF, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_emissiveTexture" in kk,
              get: kk => kk._emissiveTexture,
              set: (kk, Fk) => {
                kk._emissiveTexture = Fk
              }
            },
            metadata: Fk
          }, ZB, pB), (0, Rk.j)(null, null, yF, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_specularTexture" in kk,
              get: kk => kk._specularTexture,
              set: (kk, Fk) => {
                kk._specularTexture = Fk
              }
            },
            metadata: Fk
          }, jB, lB), (0, Rk.j)(null, null, mF, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_bumpTexture" in kk,
              get: kk => kk._bumpTexture,
              set: (kk, Fk) => {
                kk._bumpTexture = Fk
              }
            },
            metadata: Fk
          }, QB, kR), (0, Rk.j)(null, null, vF, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_lightmapTexture" in kk,
              get: kk => kk._lightmapTexture,
              set: (kk, Fk) => {
                kk._lightmapTexture = Fk
              }
            },
            metadata: Fk
          }, RR, tR), (0, Rk.j)(null, null, YF, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_refractionTexture" in kk,
              get: kk => kk._refractionTexture,
              set: (kk, Fk) => {
                kk._refractionTexture = Fk
              }
            },
            metadata: Fk
          }, bR, wR), (0, Rk.j)(null, null, LF, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "ambientColor" in kk,
              get: kk => kk.ambientColor,
              set: (kk, Fk) => {
                kk.ambientColor = Fk
              }
            },
            metadata: Fk
          }, VR, JR), (0, Rk.j)(null, null, OF, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "diffuseColor" in kk,
              get: kk => kk.diffuseColor,
              set: (kk, Fk) => {
                kk.diffuseColor = Fk
              }
            },
            metadata: Fk
          }, AR, eR), (0, Rk.j)(null, null, EF, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularColor" in kk,
              get: kk => kk.specularColor,
              set: (kk, Fk) => {
                kk.specularColor = Fk
              }
            },
            metadata: Fk
          }, yR, fR), (0, Rk.j)(null, null, SF, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "emissiveColor" in kk,
              get: kk => kk.emissiveColor,
              set: (kk, Fk) => {
                kk.emissiveColor = Fk
              }
            },
            metadata: Fk
          }, mR, WR), (0, Rk.j)(null, null, NF, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularPower" in kk,
              get: kk => kk.specularPower,
              set: (kk, Fk) => {
                kk.specularPower = Fk
              }
            },
            metadata: Fk
          }, vR, iR), (0, Rk.j)(null, null, HF, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useAlphaFromDiffuseTexture" in kk,
              get: kk => kk._useAlphaFromDiffuseTexture,
              set: (kk, Fk) => {
                kk._useAlphaFromDiffuseTexture = Fk
              }
            },
            metadata: Fk
          }, YR, oR), (0, Rk.j)(null, null, MF, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useEmissiveAsIllumination" in kk,
              get: kk => kk._useEmissiveAsIllumination,
              set: (kk, Fk) => {
                kk._useEmissiveAsIllumination = Fk
              }
            },
            metadata: Fk
          }, ER, SR), (0, Rk.j)(null, null, UF, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: kk => "_linkEmissiveWithDiffuse" in kk,
              get: kk => kk._linkEmissiveWithDiffuse,
              set: (kk, Fk) => {
                kk._linkEmissiveWithDiffuse = Fk
              }
            },
            metadata: Fk
          }, uR, MR), (0, Rk.j)(null, null, GF, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useSpecularOverAlpha" in kk,
              get: kk => kk._useSpecularOverAlpha,
              set: (kk, Fk) => {
                kk._useSpecularOverAlpha = Fk
              }
            },
            metadata: Fk
          }, cR, GR), (0, Rk.j)(null, null, rF, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useReflectionOverAlpha" in kk,
              get: kk => kk._useReflectionOverAlpha,
              set: (kk, Fk) => {
                kk._useReflectionOverAlpha = Fk
              }
            },
            metadata: Fk
          }, DR, zR), (0, Rk.j)(null, null, zF, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: kk => "_disableLighting" in kk,
              get: kk => kk._disableLighting,
              set: (kk, Fk) => {
                kk._disableLighting = Fk
              }
            },
            metadata: Fk
          }, qR, CR), (0, Rk.j)(null, null, hF, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useObjectSpaceNormalMap" in kk,
              get: kk => kk._useObjectSpaceNormalMap,
              set: (kk, Fk) => {
                kk._useObjectSpaceNormalMap = Fk
              }
            },
            metadata: Fk
          }, KR, xR), (0, Rk.j)(null, null, CF, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useParallax" in kk,
              get: kk => kk._useParallax,
              set: (kk, Fk) => {
                kk._useParallax = Fk
              }
            },
            metadata: Fk
          }, nR, IR), (0, Rk.j)(null, null, pF, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useParallaxOcclusion" in kk,
              get: kk => kk._useParallaxOcclusion,
              set: (kk, Fk) => {
                kk._useParallaxOcclusion = Fk
              }
            },
            metadata: Fk
          }, Ft, Bt), (0, Rk.j)(null, null, xF, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: kk => "parallaxScaleBias" in kk,
              get: kk => kk.parallaxScaleBias,
              set: (kk, Fk) => {
                kk.parallaxScaleBias = Fk
              }
            },
            metadata: Fk
          }, Xt, bt), (0, Rk.j)(null, null, jF, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: kk => "_roughness" in kk,
              get: kk => kk._roughness,
              set: (kk, Fk) => {
                kk._roughness = Fk
              }
            },
            metadata: Fk
          }, wt, dt), (0, Rk.j)(null, null, nF, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: kk => "indexOfRefraction" in kk,
              get: kk => kk.indexOfRefraction,
              set: (kk, Fk) => {
                kk.indexOfRefraction = Fk
              }
            },
            metadata: Fk
          }, Jt, At), (0, Rk.j)(null, null, IF, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: kk => "invertRefractionY" in kk,
              get: kk => kk.invertRefractionY,
              set: (kk, Fk) => {
                kk.invertRefractionY = Fk
              }
            },
            metadata: Fk
          }, et, yt), (0, Rk.j)(null, null, QF, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: kk => "alphaCutOff" in kk,
              get: kk => kk.alphaCutOff,
              set: (kk, Fk) => {
                kk.alphaCutOff = Fk
              }
            },
            metadata: Fk
          }, ft, mt), (0, Rk.j)(null, null, kB, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useLightmapAsShadowmap" in kk,
              get: kk => kk._useLightmapAsShadowmap,
              set: (kk, Fk) => {
                kk._useLightmapAsShadowmap = Fk
              }
            },
            metadata: Fk
          }, Wt, vt), (0, Rk.j)(null, null, BB, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "_diffuseFresnelParameters" in kk,
              get: kk => kk._diffuseFresnelParameters,
              set: (kk, Fk) => {
                kk._diffuseFresnelParameters = Fk
              }
            },
            metadata: Fk
          }, ot, Lt), (0, Rk.j)(null, null, tB, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "_opacityFresnelParameters" in kk,
              get: kk => kk._opacityFresnelParameters,
              set: (kk, Fk) => {
                kk._opacityFresnelParameters = Fk
              }
            },
            metadata: Fk
          }, St, Nt), (0, Rk.j)(null, null, XB, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "_reflectionFresnelParameters" in kk,
              get: kk => kk._reflectionFresnelParameters,
              set: (kk, Fk) => {
                kk._reflectionFresnelParameters = Fk
              }
            },
            metadata: Fk
          }, Mt, gt), (0, Rk.j)(null, null, wB, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "_refractionFresnelParameters" in kk,
              get: kk => kk._refractionFresnelParameters,
              set: (kk, Fk) => {
                kk._refractionFresnelParameters = Fk
              }
            },
            metadata: Fk
          }, Gt, Tt), (0, Rk.j)(null, null, sB, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "_emissiveFresnelParameters" in kk,
              get: kk => kk._emissiveFresnelParameters,
              set: (kk, Fk) => {
                kk._emissiveFresnelParameters = Fk
              }
            },
            metadata: Fk
          }, zt, Pt), (0, Rk.j)(null, null, JB, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useReflectionFresnelFromSpecular" in kk,
              get: kk => kk._useReflectionFresnelFromSpecular,
              set: (kk, Fk) => {
                kk._useReflectionFresnelFromSpecular = Fk
              }
            },
            metadata: Fk
          }, Ct, Zt), (0, Rk.j)(null, null, eB, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useGlossinessFromSpecularMapAlpha" in kk,
              get: kk => kk._useGlossinessFromSpecularMapAlpha,
              set: (kk, Fk) => {
                kk._useGlossinessFromSpecularMapAlpha = Fk
              }
            },
            metadata: Fk
          }, xt, jt), (0, Rk.j)(null, null, fB, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: kk => "_maxSimultaneousLights" in kk,
              get: kk => kk._maxSimultaneousLights,
              set: (kk, Fk) => {
                kk._maxSimultaneousLights = Fk
              }
            },
            metadata: Fk
          }, It, Qt), (0, Rk.j)(null, null, WB, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: kk => "_invertNormalMapX" in kk,
              get: kk => kk._invertNormalMapX,
              set: (kk, Fk) => {
                kk._invertNormalMapX = Fk
              }
            },
            metadata: Fk
          }, Ba, Ra), (0, Rk.j)(null, null, iB, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: kk => "_invertNormalMapY" in kk,
              get: kk => kk._invertNormalMapY,
              set: (kk, Fk) => {
                kk._invertNormalMapY = Fk
              }
            },
            metadata: Fk
          }, Xa, ba), (0, Rk.j)(null, null, oB, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: kk => "_twoSidedLighting" in kk,
              get: kk => kk._twoSidedLighting,
              set: (kk, Fk) => {
                kk._twoSidedLighting = Fk
              }
            },
            metadata: Fk
          }, sa, Va), (0, Rk.j)(null, null, OB, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: kk => "_applyDecalMapAfterDetailMap" in kk,
              get: kk => kk._applyDecalMapAfterDetailMap,
              set: (kk, Fk) => {
                kk._applyDecalMapAfterDetailMap = Fk
              }
            },
            metadata: Fk
          }, ea, ya), Fk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fk
          })
        })(), kk.ForceGLSL = !1, kk._ShaderLoader = new Lk.d((() => [Promise.all([Bk.e(307), Bk.e(306)]).then((() => Bk(41281))), Promise.all([Bk.e(312), Bk.e(308), Bk.e(321), Bk.e(311)]).then((() => Bk(41488)))]), (() => [Promise.all([Bk.e(328), Bk.e(323)]).then((() => Bk(41617))), Promise.all([Bk.e(329), Bk.e(339), Bk.e(325)]).then((() => Bk(41826)))])), kk
      })(),
      Tk = !1;

    function rk() {
      Tk || (Tk = !0, (0, Vk.d)(), (0, Hk.d)("BABYLON.StandardMaterial", Gk), Xk.c.DefaultMaterialFactory = kk => new Gk("default material", kk))
    }
    Object.getOwnPropertyDescriptor(Gk.prototype, "decalMap") || Object.defineProperty(Gk.prototype, "decalMap", (0, uk.f)("StandardMaterial", "decalMap"))
  },
  39787: (kk, Fk, Bk) => {
    function Rk(kk) {
      return class extends kk {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    Bk.d(Fk, {
      c: () => Rk
    })
  },
  39777: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    class Rk {
      constructor(kk, Fk) {
        this._webGL = {
          load: kk,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: Fk,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(kk) {
        const Fk = 1 === kk ? this._webGPU : this._webGL;
        return Fk.loaded ? void 0 : async () => {
          await this._loadAsync(Fk)
        }
      }
      async _loadAsync(kk) {
        if (kk.loaded) return;
        let Fk = kk.loadPromise;
        const Bk = null === Fk;
        Bk && (Fk = Promise.all(kk.load()), kk.loadPromise = Fk);
        let Rk = !1;
        try {
          await Fk, Rk = !0
        } finally {
          Bk && this._completeLoad(kk, Rk)
        }
      }
      _completeLoad(kk, Fk) {
        kk.loaded = Fk, kk.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);