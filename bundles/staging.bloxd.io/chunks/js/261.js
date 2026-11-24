export const id = 261;
export const ids = [261];
export const modules = {
  40402: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk
    });
    var Xk = Ik(40013);

    function Tk(kk) {
      return class extends kk {
        constructor() {
          super(...arguments);
          const kk = new.target;
          if (!kk[Symbol.metadata]) {
            const Fk = Object.getPrototypeOf(kk)?.[Symbol.metadata];
            kk[Symbol.metadata] = Fk ? Object.create(Fk) : {}
          }
          const Fk = (0, Xk.c)(kk[Symbol.metadata]);
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
          kk !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !kk && this.mG ? this._imageProcessingConfiguration = this.mG().imageProcessingConfiguration : kk && (this._imageProcessingConfiguration = kk), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
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
  40288: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik,
      f: () => Tk
    });
    var Xk = Ik(40291);

    function Tk(kk) {
      return class extends kk {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class ik extends Xk.e {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  40357: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => tk
    });
    var Xk = Ik(40003),
      Tk = Ik(40295),
      ik = Ik(40011),
      yk = Ik(40338),
      lk = Ik(40291),
      ak = Ik(40363),
      qk = Ik(40329);
    class Lk extends lk.e {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let tk = (() => {
      var kk, Fk, Ik, lk;
      let tk, Zk, jk, ek, wk, Hk, Jk = ak.b,
        xk = [],
        Pk = [],
        Kk = [],
        Qk = [],
        sk = [],
        Vk = [],
        zk = [],
        Sk = [],
        vk = [],
        Ek = [],
        Ok = [],
        nk = [];
      return kk = class extends Jk {
        get texture() {
          return (0, Xk.e)(this, Fk, "f")
        }
        set texture(kk) {
          (0, Xk.f)(this, Fk, kk, "f")
        }
        get normalBlendMethod() {
          return (0, Xk.e)(this, Ik, "f")
        }
        set normalBlendMethod(kk) {
          (0, Xk.f)(this, Ik, kk, "f")
        }
        get isEnabled() {
          return (0, Xk.e)(this, lk, "f")
        }
        set isEnabled(kk) {
          (0, Xk.f)(this, lk, kk, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(kk) {
          let ik = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(kk, "DetailMap", 140, new Lk, ik), this._texture = null, Fk.set(this, (0, Xk.n)(this, xk, void 0)), this.diffuseBlendLevel = ((0, Xk.n)(this, Pk), (0, Xk.n)(this, Kk, 1)), this.roughnessBlendLevel = ((0, Xk.n)(this, Qk), (0, Xk.n)(this, sk, 1)), this.bumpLevel = ((0, Xk.n)(this, Vk), (0, Xk.n)(this, zk, 1)), this._normalBlendMethod = ((0, Xk.n)(this, Sk), Tk.c.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), Ik.set(this, (0, Xk.n)(this, vk, void 0)), this._isEnabled = ((0, Xk.n)(this, Ek), !1), lk.set(this, (0, Xk.n)(this, Ok, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Xk.n)(this, nk), this._internalMarkAllSubMeshesAsTexturesDirty = kk._dirtyCallbacks[1]
        }
        isReadyForSubMesh(kk, Fk, Ik) {
          return !this._isEnabled || !(kk._areTexturesDirty && Fk.texturesEnabled && Ik.getCaps().standardDerivatives && this._texture && yk.d.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(kk, Fk) {
          if (this._isEnabled) {
            kk.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const Ik = Fk.Oe();
            kk._areTexturesDirty && (Ik.getCaps().standardDerivatives && this._texture && yk.d.DetailTextureEnabled && this._isEnabled ? ((0, qk.P)(this._texture, kk, "DETAIL"), kk.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : kk.DETAIL = !1)
          } else kk.DETAIL = !1
        }
        bindForSubMesh(kk, Fk) {
          if (!this._isEnabled) return;
          const Ik = this._material.isFrozen;
          kk.useUbo && Ik && kk.isSync || this._texture && yk.d.DetailTextureEnabled && (kk.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, qk.v)(this._texture, kk, "detail")), Fk.texturesEnabled && this._texture && yk.d.DetailTextureEnabled && kk.setTexture("detailSampler", this._texture)
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
      }, Fk = new WeakMap, Ik = new WeakMap, lk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Jk[Symbol.metadata] ?? null) : void 0;
        tk = [(0, ik.B)("detailTexture"), (0, ik.e)("_markAllSubMeshesAsTexturesDirty")], Zk = [(0, ik.J)()], jk = [(0, ik.J)()], ek = [(0, ik.J)()], wk = [(0, ik.J)(), (0, ik.e)("_markAllSubMeshesAsTexturesDirty")], Hk = [(0, ik.J)(), (0, ik.e)("_markAllSubMeshesAsTexturesDirty")], (0, Xk.j)(kk, null, tk, {
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
        }, xk, Pk), (0, Xk.j)(kk, null, wk, {
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
        }, vk, Ek), (0, Xk.j)(kk, null, Hk, {
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
        }, Ok, nk), (0, Xk.j)(null, null, Zk, {
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
        }, Kk, Qk), (0, Xk.j)(null, null, jk, {
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
        }, sk, Vk), (0, Xk.j)(null, null, ek, {
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
        }, zk, Sk), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk
    })()
  },
  40291: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk
    });
    class Xk {
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
          const Ik = this._keys[Fk];
          if (this[Ik] !== kk[Ik]) return !1
        }
        return !0
      }
      cloneTo(kk) {
        this._keys.length !== kk._keys.length && (kk._keys = this._keys.slice(0));
        for (let Fk = 0; Fk < this._keys.length; Fk++) {
          const Ik = this._keys[Fk];
          kk[Ik] = this[Ik]
        }
      }
      reset() {
        for (const kk of this._keys) this._setDefaultValue(kk)
      }
      _setDefaultValue(kk) {
        const Fk = this._externalProperties?.[kk]?.type ?? typeof this[kk],
          Ik = this._externalProperties?.[kk]?.default;
        switch (Fk) {
          case "number":
            this[kk] = Ik ?? 0;
            break;
          case "string":
            this[kk] = Ik ?? "";
            break;
          default:
            this[kk] = Ik ?? !1
        }
      }
      toString() {
        let kk = "";
        for (let Fk = 0; Fk < this._keys.length; Fk++) {
          const Ik = this._keys[Fk],
            Xk = this[Ik];
          switch (typeof Xk) {
            case "number":
            case "string":
              kk += "#define " + Ik + " " + Xk + "\n";
              break;
            default:
              Xk && (kk += "#define " + Ik + "\n")
          }
        }
        return kk
      }
    }
  },
  40382: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => lk,
      g: () => yk,
      j: () => ik
    });
    var Xk, Tk = Ik(37153);

    function ik(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const Xk = Fk(kk);
      if (!Number.isInteger(Xk) || Xk < 0 || Xk > Ik) throw new Error(`Invalid geometry object ID ${Xk} for mesh "${kk.name}". Object IDs must be integers between 0 and 0x${Ik.toString(16).toUpperCase()}.`);
      return Xk
    }

    function yk(kk, Fk) {
      const Ik = Fk(kk);
      if (!Number.isInteger(Ik) || Ik < 0 || Ik > 255 || 0 !== Ik && 0 === (63 & Ik)) throw new Error(`Invalid geometry mesh-blending tag ${Ik} for mesh "${kk.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return Ik
    }! function(kk) {
      kk[kk.Zero = 0] = "Zero", kk[kk.One = 1] = "One", kk[kk.MaxViewZ = 2] = "MaxViewZ", kk[kk.NoClear = 3] = "NoClear"
    }(Xk || (Xk = {}));
    class lk {
      static CreateConfiguration(kk) {
        return lk._Configurations[kk] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: Tk.c.Zero(),
          currentViewProjection: Tk.c.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, lk._Configurations[kk]
      }
      static DeleteConfiguration(kk) {
        delete lk._Configurations[kk]
      }
      static GetConfiguration(kk) {
        return lk._Configurations[kk]
      }
      static _PrepareConfiguration(kk, Fk, Ik) {
        const Xk = lk._Configurations[kk];
        Xk._attachments = Fk, Xk._colorAttachments = Ik, Xk._mrtCount = Fk.length;
        let Tk = "#define PREPASS\n";
        for (const ik of lk.GeometryTextureDescriptions) {
          const kk = Xk.defines[ik.defineIndex];
          void 0 !== kk && (Tk += `#define ${ik.define}\n#define ${ik.defineIndex} ${kk}\n`)
        }
        Xk.objectIdIsRedFormat && (Tk += "#define PREPASS_OBJECT_ID_R8\n"), Xk._defines = Tk + `#define SCENE_MRT_COUNT ${Fk.length}\n`
      }
      static _PrepareStringDefines(kk, Fk) {
        const Ik = lk._Configurations[kk];
        return !!Ik?._defines && (Fk.push(Ik._defines), !0)
      }
      static _BindAttachmentsForEffect(kk, Fk) {
        const Ik = lk._Configurations[kk.currentRenderPassId];
        return !Ik?._attachments || (kk.bindAttachments(Fk._multiTarget ? Ik._attachments : Ik._colorAttachments), Fk._multiTarget || void 0 !== Ik.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(kk) {
        const Fk = lk._Configurations[kk.currentRenderPassId];
        Fk?._colorAttachments && kk.bindAttachments(Fk._colorAttachments)
      }
      static _BindColorAttachments(kk) {
        const Fk = lk._Configurations[kk.currentRenderPassId];
        return !Fk?._colorAttachments || (kk.bindAttachments(Fk._colorAttachments), void 0 !== Fk.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(kk) {
        const Fk = lk._Configurations[kk.currentRenderPassId];
        return !Fk?._colorAttachments || void 0 !== Fk.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(kk, Fk) {
        const Ik = lk._Configurations[kk.currentRenderPassId];
        if (!Ik) return;
        const Xk = kk.getAlphaMode(),
          Tk = void 0 === Ik.defines.PREPASS_COLOR_INDEX || 2 === Xk || 1 === Xk || 17 === Xk;
        Fk.setFloat("geometryZeroAlphaDiscard", Tk ? 1 : 0)
      }
      static AddUniformsAndSamplers(kk, Fk) {
        kk.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(kk, Fk) {
        for (const Ik of Fk)
          if (Ik.lK)
            for (const Fk of Ik.lK) Fk._removeDrawWrapper(kk)
      }
      static PrepareDefines(kk, Fk, Ik) {
        if (!Ik._arePrePassDirty) return;
        const Xk = lk._Configurations[kk];
        if (!Xk) return;
        Ik.PREPASS = !0;
        let Tk = 0;
        for (let ik = 0; ik < lk.GeometryTextureDescriptions.length; ik++) {
          const kk = lk.GeometryTextureDescriptions[ik],
            Fk = kk.define,
            yk = kk.defineIndex,
            ak = Xk.defines[yk];
          void 0 !== ak ? (Ik[Fk] = !0, Ik[yk] = ak, Tk++) : (Ik[Fk] = !1, delete Ik[yk])
        }
        Ik.PREPASS_OBJECT_ID_R8 = Xk.objectIdIsRedFormat, Ik.SCENE_MRT_COUNT = Xk._mrtCount ?? Tk, Ik.BONES_VELOCITY_ENABLED = Fk.useBones && Fk.computeBonesUsingShaders && Fk.skeleton && !Fk.skeleton.isUsingTextureForMatrices && -1 === Xk.excludedSkinnedMesh.indexOf(Fk)
      }
      static Bind(kk, Fk, Ik, Xk, Tk) {
        const ak = lk._Configurations[kk];
        if (!ak) return;
        const qk = Ik.mG(),
          Lk = qk.Oe();
        if (ak.reverseCulling && Lk.setStateCullFaceType(qk._mirroredCameraPosition ? Tk.cullBackFaces : !Tk.cullBackFaces), void 0 !== ak.defines.PREPASS_OBJECT_ID_INDEX) {
          const kk = ak.objectIdIsRedFormat ? 255 : 16777215;
          let Xk = Ik.uniqueId;
          if (ak.objectIdProvider) Xk = ik(Ik, ak.objectIdProvider, kk);
          else if (Xk > kk) throw new Error(`Invalid geometry object ID ${Xk} for mesh "${Ik.name}". Object IDs must be integers between 0 and 0x${kk.toString(16).toUpperCase()}.`);
          Fk.setFloat("objectId", Xk)
        }
        if (void 0 !== ak.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const kk = ak.meshBlendTagProvider ? yk(Ik, ak.meshBlendTagProvider) : Ik.meshBlendingTag;
          Fk.setInt("meshBlendTag", kk)
        }
        if (void 0 !== ak.defines.PREPASS_VELOCITY_INDEX || void 0 !== ak.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const kk = ak._currentWorldMatrices ?? (ak._currentWorldMatrices = {}),
            Tk = ak._worldMatrixFrameIds ?? (ak._worldMatrixFrameIds = {});
          if (kk[Ik.uniqueId] || (kk[Ik.uniqueId] = Xk.clone(), ak.previousWorldMatrices[Ik.uniqueId] = Xk.clone()), Tk[Ik.uniqueId] !== Lk.frameId && (ak.previousWorldMatrices[Ik.uniqueId].kS(kk[Ik.uniqueId]), Tk[Ik.uniqueId] = Lk.frameId), kk[Ik.uniqueId].kS(Xk), -1 === ak.lastUpdateFrameId ? (ak.lastUpdateFrameId = Lk.frameId, ak.previousViewProjection.kS(qk.getTransformMatrix()), ak.currentViewProjection.kS(qk.getTransformMatrix())) : ak.currentViewProjection.updateFlag !== qk.getTransformMatrix().updateFlag ? (ak.lastUpdateFrameId = Lk.frameId, ak.previousViewProjection.kS(ak.currentViewProjection), ak.currentViewProjection.kS(qk.getTransformMatrix())) : ak.lastUpdateFrameId !== Lk.frameId && (ak.lastUpdateFrameId = Lk.frameId, ak.previousViewProjection.kS(ak.currentViewProjection)), Fk.setMatrix("previousWorld", ak.previousWorldMatrices[Ik.uniqueId]), Fk.setMatrix("previousViewProjection", ak.previousViewProjection), Ik.useBones && Ik.computeBonesUsingShaders && Ik.skeleton) {
            const kk = Ik.skeleton;
            if (!kk.isUsingTextureForMatrices || -1 === Fk.getUniformIndex("boneTextureInfo")) {
              const Xk = kk.getTransformMatrices(Ik);
              Xk && (ak.previousBones[Ik.uniqueId] || (ak.previousBones[Ik.uniqueId] = Xk.slice()), Fk.setMatrices("mPreviousBones", ak.previousBones[Ik.uniqueId]), ak.previousBones[Ik.uniqueId].set(Xk))
            }
          }
        }
      }
    }
    lk.GeometryTextureDescriptions = [{
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
    }], lk._Configurations = {}
  },
  40363: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Zk,
      d: () => ek
    });
    var Xk = Ik(40003),
      Tk = Ik(40011),
      ik = Ik(39872),
      yk = Ik(39837);
    const lk = new RegExp("^([gimus]+)!");
    class ak {
      constructor(kk) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = kk, this._scene = kk.mG(), this._engine = this._scene.Oe()
      }
      _addPlugin(kk) {
        for (let Xk = 0; Xk < this._plugins.length; ++Xk)
          if (this._plugins[Xk].name === kk.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !kk.isCompatible(this._material.shaderLanguage)) throw `The plugin "${kk.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const Fk = kk.getClassName();
        ak._MaterialPluginClassToMainDefine[Fk] || (ak._MaterialPluginClassToMainDefine[Fk] = "MATERIALPLUGIN_" + ++ak._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (kk, Fk) => this._handlePluginEvent(kk, Fk), this._plugins.push(kk), this._plugins.sort(((kk, Fk) => kk.priority - Fk.priority)), this._codeInjectionPoints = {};
        const Ik = {};
        Ik[ak._MaterialPluginClassToMainDefine[Fk]] = {
          type: "boolean",
          default: !0
        };
        for (const Xk of this._plugins) Xk.collectDefines(Ik), this._collectPointNames("vertex", Xk.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Xk.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = Ik, !0
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
        for (const Ik of this._activePlugins) Fk = Fk && Ik.isReadyForSubMesh(kk.defines, this._scene, this._engine, kk.subMesh);
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
        for (const Ik of this._activePluginsForExtraEvents)
          if (Fk = Ik.hasRenderTargetTextures(), Fk) break;
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
            let Ik = !1;
            for (const Fk of this._activePlugins)
              if (Ik = Fk.hasTexture(kk.texture), Ik) break;
            kk.hasTexture = Ik;
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
            const Ik = 1 === this._material.shaderLanguage;
            for (const Fk of this._plugins) {
              const Xk = Fk.getUniforms(this._material.shaderLanguage);
              if (Xk) {
                if (Xk.ubo)
                  for (const Fk of Xk.ubo) {
                    if (Fk.size && Fk.type) {
                      const Xk = Fk.arraySize ?? 0;
                      if (kk.ubo.addUniform(Fk.name, Fk.size, Xk), Ik) {
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
                        this._uboDeclaration += Xk > 0 ? `uniform ${Fk.name}: array<${kk}, ${Xk}>;\n` : `uniform ${Fk.name}: ${kk};\n`
                      } else this._uboDeclaration += `${Fk.type} ${Fk.name}${Xk>0?`[${Xk}]`:""};\n`
                    }
                    this._uniformList.push(Fk.name)
                  }
                Xk.vertex && (this._vertexDeclaration += Xk.vertex + "\n"), Xk.fragment && (this._fragmentDeclaration += Xk.fragment + "\n"), Xk.externalUniforms && this._uniformList.push(...Xk.externalUniforms)
              }
              Fk.getSamplers(this._samplerList), Fk.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(kk, Fk) {
        if (Fk)
          for (const Ik in Fk) this._codeInjectionPoints[kk] || (this._codeInjectionPoints[kk] = {}), this._codeInjectionPoints[kk][Ik] = !0
      }
      _injectCustomCode(kk, Fk) {
        return (Ik, Xk) => {
          Fk && (Xk = Fk(Ik, Xk)), this._uboDeclaration && (Xk = Xk.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Xk = Xk.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (Xk = Xk.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const Tk = this._codeInjectionPoints?.[Ik];
          if (!Tk) return Xk;
          let ak = null;
          for (let Fk in Tk) {
            let Tk = "";
            for (const Xk of this._activePlugins) {
              const lk = this._material.shaderLanguage;
              let qk = Xk.getCustomCode(Ik, lk)?.[Fk];
              qk && (Xk.resolveIncludes && (null === ak && (ak = {
                defines: [],
                indexParameters: kk.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: yk.b.GetShadersRepository(lk),
                includesShadersStore: yk.b.GetIncludesShadersStore(lk),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                IXk: this._engine.IXk,
                processCodeAfterIncludes: void 0
              }), ak.isFragment = "fragment" === Ik, (0, ik.g)(qk, ak, (kk => qk = kk))), Tk += qk + "\n")
            }
            if (Tk.length > 0)
              if ("!" === Fk.charAt(0)) {
                Fk = Fk.substring(1);
                let kk = "g";
                if ("!" === Fk.charAt(0)) kk = "", Fk = Fk.substring(1);
                else {
                  const Ik = lk.exec(Fk);
                  Ik && Ik.length >= 2 && (kk = Ik[1], Fk = Fk.substring(kk.length + 1))
                }
                kk.indexOf("g") < 0 && (kk += "g");
                const Ik = new RegExp(Fk, kk);
                let ik = Ik.exec(Xk);
                for (; null !== ik;) {
                  const {
                    index: kk
                  } = ik, Fk = qk(Tk, ik);
                  Xk = Xk.substring(0, kk) + Fk + Xk.substring(kk + ik[0].length), Ik.lastIndex = kk + Fk.length, ik = Ik.exec(Xk)
                }
              } else {
                const kk = "#define " + Fk;
                Xk = Xk.replace(kk, "\n" + Tk + "\n" + kk)
              }
          }
          return Xk
        }
      }
    }
    ak._MaterialPluginClassToMainDefine = {}, ak._MaterialPluginCounter = 0;

    function qk(kk, Fk) {
      return kk.replace(/\$(\d+)/g, ((kk, Ik) => {
        const Xk = Number(Ik);
        return Xk < Fk.length ? Fk[Xk] : ""
      }))
    }
    var Lk = Ik(40021),
      tk = Ik(37201);
    let Zk = (() => {
        var kk;
        let Fk, Ik, ik, yk, lk = [],
          qk = [],
          tk = [],
          Zk = [],
          jk = [],
          ek = [],
          wk = [],
          Hk = [];
        return kk = class {
          isCompatible(kk) {
            return 0 === kk
          }
          _enable(kk) {
            kk && this._pluginManager._activatePlugin(this)
          }
          constructor(kk, Fk, Ik, Tk) {
            let ik = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              yk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              Lk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, Xk.n)(this, lk, void 0), this.priority = ((0, Xk.n)(this, qk), (0, Xk.n)(this, tk, 500)), this.resolveIncludes = ((0, Xk.n)(this, Zk), (0, Xk.n)(this, jk, !1)), this.registerForExtraEvents = ((0, Xk.n)(this, ek), (0, Xk.n)(this, wk, !1)), this.doNotSerialize = ((0, Xk.n)(this, Hk), !1), this._material = kk, this.name = Fk, this.priority = Ik, this.resolveIncludes = Lk, kk.pluginManager || (kk.pluginManager = new ak(kk), kk.hG.add((() => {
              kk.pluginManager = void 0
            }))), this._pluginDefineNames = Tk, this._pluginManager = kk.pluginManager, ik && this._pluginManager._addPlugin(this), yk && this._enable(!0), this.markAllDefinesAsDirty = kk._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(kk, Fk, Ik, Xk) {
            return !0
          }
          hardBindForSubMesh(kk, Fk, Ik, Xk) {}
          bindForSubMesh(kk, Fk, Ik, Xk) {}
          dispose(kk) {}
          getCustomCode(kk) {
            return null
          }
          collectDefines(kk) {
            if (this._pluginDefineNames)
              for (const Fk of Object.keys(this._pluginDefineNames)) {
                if ("_" === Fk[0]) continue;
                const Ik = typeof this._pluginDefineNames[Fk];
                kk[Fk] = {
                  type: "number" === Ik ? "number" : "string" === Ik ? "string" : "boolean" === Ik ? "boolean" : "object",
                  default: this._pluginDefineNames[Fk]
                }
              }
          }
          prepareDefinesBeforeAttributes(kk, Fk, Ik) {}
          prepareDefines(kk, Fk, Ik) {}
          hasTexture(kk) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(kk) {}
          getActiveTextures(kk) {}
          getAnimatables(kk) {}
          addFallbacks(kk, Fk, Ik) {
            return Ik
          }
          getSamplers(kk) {}
          getAttributes(kk, Fk, Ik) {}
          getUniformBuffersNames(kk) {}
          getUniforms() {
            return {}
          }
          copyTo(kk) {
            Lk.b.Clone((() => kk), this)
          }
          serialize() {
            return Lk.b.Serialize(this)
          }
          parse(kk, Fk, Ik) {
            Lk.b.Parse((() => this), kk, Fk, Ik)
          }
        }, (() => {
          const ak = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Fk = [(0, Tk.J)()], Ik = [(0, Tk.J)()], ik = [(0, Tk.J)()], yk = [(0, Tk.J)()], (0, Xk.j)(null, null, Fk, {
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
            metadata: ak
          }, lk, qk), (0, Xk.j)(null, null, Ik, {
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
            metadata: ak
          }, tk, Zk), (0, Xk.j)(null, null, ik, {
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
            metadata: ak
          }, jk, ek), (0, Xk.j)(null, null, yk, {
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
            metadata: ak
          }, wk, Hk), ak && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ak
          })
        })(), kk
      })(),
      jk = !1;

    function ek() {
      jk || (jk = !0, (0, tk.f)("BABYLON.MaterialPluginBase", Zk))
    }
  },
  40279: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk
    });
    class Xk {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(kk) {
        kk.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(kk) {}
      bindForSubMesh(kk, Fk, Ik, Xk, Tk) {
        if (Fk.prePassRenderer && Fk.prePassRenderer.enabled && Fk.prePassRenderer.currentRTisSceneRT && (-1 !== Fk.prePassRenderer.getIndex(2) || -1 !== Fk.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[Ik.uniqueId] || (this.previousWorldMatrices[Ik.uniqueId] = Xk.clone()), this.previousViewProjection || (this.previousViewProjection = Fk.getTransformMatrix().clone(), this.currentViewProjection = Fk.getTransformMatrix().clone());
          const Tk = Fk.Oe();
          this.currentViewProjection.updateFlag !== Fk.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = Tk.frameId, this.previousViewProjection.kS(this.currentViewProjection), this.currentViewProjection.kS(Fk.getTransformMatrix())) : this._lastUpdateFrameId !== Tk.frameId && (this._lastUpdateFrameId = Tk.frameId, this.previousViewProjection.kS(this.currentViewProjection)), kk.setMatrix("previousWorld", this.previousWorldMatrices[Ik.uniqueId]), kk.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[Ik.uniqueId] = Xk.clone()
        }
      }
    }
  },
  40393: (kk, Fk, Ik) => {
    function Xk(kk) {
      return class extends kk {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    Ik.d(Fk, {
      d: () => Xk
    })
  },
  40269: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      StandardMaterial: () => Xk.e
    });
    var Xk = Ik(40277);
    (0, Xk.b)()
  },
  40277: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Uk,
      e: () => bk
    });
    var Xk = Ik(40003),
      Tk = Ik(40011),
      ik = Ik(40107),
      yk = Ik(40090),
      lk = Ik(37331),
      ak = Ik(40141),
      qk = Ik(40279),
      Lk = Ik(40288),
      tk = Ik(40113),
      Zk = Ik(40295),
      jk = Ik(40291),
      ek = Ik(40345),
      wk = Ik(40338),
      Hk = Ik(40349),
      Jk = Ik(40357),
      xk = Ik(40333),
      Pk = Ik(40368),
      Kk = Ik(40329),
      Qk = Ik(40021),
      sk = Ik(40377),
      Vk = Ik(40382),
      zk = Ik(40386),
      Sk = Ik(40393),
      vk = Ik(40402),
      Ek = Ik(37201),
      Ok = Ik(39863);
    const nk = {
      effect: null,
      subMesh: null
    };
    class Gk extends((0, Sk.d)((0, zk.b)(jk.e))) {}
    class pk extends((0, Lk.f)(Gk)) {
      constructor(kk) {
        super(kk), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class uk extends((0, vk.e)(ek.e)) {}
    let bk = (() => {
        var kk, Fk, Lk, jk, zk, Sk, vk, Ek, Ok, Gk, bk, Rk, Uk, Ck, Nk, ck, Wk, fk, Bk, dk, Yk, Ak, gk, mk, hk, rk, Dk, Mk, kF, FF, IF, XF, TF;
        let iF, yF, lF, aF, qF, LF, tF, ZF, jF, eF, wF, HF, JF, xF, PF, KF, QF, sF, VF, zF, SF, oF, vF, EF, OF, nF, GF, pF, uF, bF, RF, UF, CF, NF, cF, WF, fF, BF, dF, YF, AF, gF, mF, hF, rF, DF, MF, kI, FI, II, XI, TI, iI, yI, lI, aI, qI, LI, tI, ZI, jI, eI, wI, HI, JI, xI, PI, KI, QI, sI, VI, zI, SI, oI = uk,
          vI = [],
          EI = [],
          OI = [],
          nI = [],
          GI = [],
          pI = [],
          uI = [],
          bI = [],
          RI = [],
          UI = [],
          CI = [],
          NI = [],
          cI = [],
          WI = [],
          fI = [],
          BI = [],
          dI = [],
          YI = [],
          AI = [],
          gI = [],
          mI = [],
          hI = [],
          rI = [],
          DI = [],
          MI = [],
          kX = [],
          FX = [],
          IX = [],
          XX = [],
          TX = [],
          iX = [],
          yX = [],
          lX = [],
          aX = [],
          qX = [],
          LX = [],
          tX = [],
          ZX = [],
          jX = [],
          eX = [],
          wX = [],
          HX = [],
          JX = [],
          xX = [],
          PX = [],
          KX = [],
          QX = [],
          sX = [],
          VX = [],
          zX = [],
          SX = [],
          oX = [],
          vX = [],
          EX = [],
          OX = [],
          nX = [],
          GX = [],
          pX = [],
          uX = [],
          bX = [],
          RX = [],
          UX = [],
          CX = [],
          NX = [],
          cX = [],
          WX = [],
          fX = [],
          BX = [],
          dX = [],
          YX = [],
          AX = [],
          gX = [],
          mX = [],
          hX = [],
          rX = [],
          DX = [],
          MX = [],
          kT = [],
          FT = [],
          IT = [],
          XT = [],
          TT = [],
          iT = [],
          yT = [],
          lT = [],
          aT = [],
          qT = [],
          LT = [],
          tT = [],
          ZT = [],
          jT = [],
          eT = [],
          wT = [],
          HT = [],
          JT = [],
          xT = [],
          PT = [],
          KT = [],
          QT = [],
          sT = [],
          VT = [],
          zT = [],
          ST = [],
          oT = [],
          vT = [],
          ET = [],
          OT = [],
          nT = [],
          GT = [],
          pT = [],
          uT = [],
          bT = [],
          RT = [],
          UT = [],
          CT = [],
          NT = [],
          cT = [],
          WT = [],
          fT = [],
          BT = [],
          dT = [],
          YT = [],
          AT = [],
          gT = [],
          mT = [],
          hT = [],
          rT = [],
          DT = [],
          MT = [],
          ki = [],
          Fi = [],
          Ii = [],
          Xi = [],
          Ti = [],
          ii = [],
          yi = [],
          li = [],
          ai = [],
          qi = [],
          Li = [],
          ti = [],
          Zi = [],
          ji = [],
          ei = [],
          wi = [],
          Hi = [];
        return kk = class extends oI {
          get diffuseTexture() {
            return (0, Xk.e)(this, Fk, "f")
          }
          set diffuseTexture(kk) {
            (0, Xk.f)(this, Fk, kk, "f")
          }
          get ambientTexture() {
            return (0, Xk.e)(this, Lk, "f")
          }
          set ambientTexture(kk) {
            (0, Xk.f)(this, Lk, kk, "f")
          }
          get opacityTexture() {
            return (0, Xk.e)(this, jk, "f")
          }
          set opacityTexture(kk) {
            (0, Xk.f)(this, jk, kk, "f")
          }
          get reflectionTexture() {
            return (0, Xk.e)(this, zk, "f")
          }
          set reflectionTexture(kk) {
            (0, Xk.f)(this, zk, kk, "f")
          }
          get emissiveTexture() {
            return (0, Xk.e)(this, Sk, "f")
          }
          set emissiveTexture(kk) {
            (0, Xk.f)(this, Sk, kk, "f")
          }
          get specularTexture() {
            return (0, Xk.e)(this, vk, "f")
          }
          set specularTexture(kk) {
            (0, Xk.f)(this, vk, kk, "f")
          }
          get bumpTexture() {
            return (0, Xk.e)(this, Ek, "f")
          }
          set bumpTexture(kk) {
            (0, Xk.f)(this, Ek, kk, "f")
          }
          get lightmapTexture() {
            return (0, Xk.e)(this, Ok, "f")
          }
          set lightmapTexture(kk) {
            (0, Xk.f)(this, Ok, kk, "f")
          }
          get refractionTexture() {
            return (0, Xk.e)(this, Gk, "f")
          }
          set refractionTexture(kk) {
            (0, Xk.f)(this, Gk, kk, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, Xk.e)(this, bk, "f")
          }
          set useAlphaFromDiffuseTexture(kk) {
            (0, Xk.f)(this, bk, kk, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, Xk.e)(this, Rk, "f")
          }
          set useEmissiveAsIllumination(kk) {
            (0, Xk.f)(this, Rk, kk, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, Xk.e)(this, Uk, "f")
          }
          set linkEmissiveWithDiffuse(kk) {
            (0, Xk.f)(this, Uk, kk, "f")
          }
          get useSpecularOverAlpha() {
            return (0, Xk.e)(this, Ck, "f")
          }
          set useSpecularOverAlpha(kk) {
            (0, Xk.f)(this, Ck, kk, "f")
          }
          get useReflectionOverAlpha() {
            return (0, Xk.e)(this, Nk, "f")
          }
          set useReflectionOverAlpha(kk) {
            (0, Xk.f)(this, Nk, kk, "f")
          }
          get disableLighting() {
            return (0, Xk.e)(this, ck, "f")
          }
          set disableLighting(kk) {
            (0, Xk.f)(this, ck, kk, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, Xk.e)(this, Wk, "f")
          }
          set useObjectSpaceNormalMap(kk) {
            (0, Xk.f)(this, Wk, kk, "f")
          }
          get useParallax() {
            return (0, Xk.e)(this, fk, "f")
          }
          set useParallax(kk) {
            (0, Xk.f)(this, fk, kk, "f")
          }
          get useParallaxOcclusion() {
            return (0, Xk.e)(this, Bk, "f")
          }
          set useParallaxOcclusion(kk) {
            (0, Xk.f)(this, Bk, kk, "f")
          }
          get roughness() {
            return (0, Xk.e)(this, dk, "f")
          }
          set roughness(kk) {
            (0, Xk.f)(this, dk, kk, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, Xk.e)(this, Yk, "f")
          }
          set useLightmapAsShadowmap(kk) {
            (0, Xk.f)(this, Yk, kk, "f")
          }
          get diffuseFresnelParameters() {
            return (0, Xk.e)(this, Ak, "f")
          }
          set diffuseFresnelParameters(kk) {
            (0, Xk.f)(this, Ak, kk, "f")
          }
          get opacityFresnelParameters() {
            return (0, Xk.e)(this, gk, "f")
          }
          set opacityFresnelParameters(kk) {
            (0, Xk.f)(this, gk, kk, "f")
          }
          get reflectionFresnelParameters() {
            return (0, Xk.e)(this, mk, "f")
          }
          set reflectionFresnelParameters(kk) {
            (0, Xk.f)(this, mk, kk, "f")
          }
          get refractionFresnelParameters() {
            return (0, Xk.e)(this, hk, "f")
          }
          set refractionFresnelParameters(kk) {
            (0, Xk.f)(this, hk, kk, "f")
          }
          get emissiveFresnelParameters() {
            return (0, Xk.e)(this, rk, "f")
          }
          set emissiveFresnelParameters(kk) {
            (0, Xk.f)(this, rk, kk, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, Xk.e)(this, Dk, "f")
          }
          set useReflectionFresnelFromSpecular(kk) {
            (0, Xk.f)(this, Dk, kk, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, Xk.e)(this, Mk, "f")
          }
          set useGlossinessFromSpecularMapAlpha(kk) {
            (0, Xk.f)(this, Mk, kk, "f")
          }
          get maxSimultaneousLights() {
            return (0, Xk.e)(this, kF, "f")
          }
          set maxSimultaneousLights(kk) {
            (0, Xk.f)(this, kF, kk, "f")
          }
          get invertNormalMapX() {
            return (0, Xk.e)(this, FF, "f")
          }
          set invertNormalMapX(kk) {
            (0, Xk.f)(this, FF, kk, "f")
          }
          get invertNormalMapY() {
            return (0, Xk.e)(this, IF, "f")
          }
          set invertNormalMapY(kk) {
            (0, Xk.f)(this, IF, kk, "f")
          }
          get twoSidedLighting() {
            return (0, Xk.e)(this, XF, "f")
          }
          set twoSidedLighting(kk) {
            (0, Xk.f)(this, XF, kk, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Xk.e)(this, TF, "f")
          }
          set applyDecalMapAfterDetailMap(kk) {
            (0, Xk.f)(this, TF, kk, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(Ik, Tk) {
            super(Ik, Tk, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || kk.ForceGLSL), this._diffuseTexture = (0, Xk.n)(this, vI, null), Fk.set(this, ((0, Xk.n)(this, EI), (0, Xk.n)(this, OI, void 0))), this._ambientTexture = ((0, Xk.n)(this, nI), (0, Xk.n)(this, GI, null)), Lk.set(this, ((0, Xk.n)(this, pI), (0, Xk.n)(this, uI, void 0))), this._opacityTexture = ((0, Xk.n)(this, bI), (0, Xk.n)(this, RI, null)), jk.set(this, ((0, Xk.n)(this, UI), (0, Xk.n)(this, CI, void 0))), this._reflectionTexture = ((0, Xk.n)(this, NI), (0, Xk.n)(this, cI, null)), zk.set(this, ((0, Xk.n)(this, WI), (0, Xk.n)(this, fI, void 0))), this._emissiveTexture = ((0, Xk.n)(this, BI), (0, Xk.n)(this, dI, null)), Sk.set(this, ((0, Xk.n)(this, YI), (0, Xk.n)(this, AI, void 0))), this._specularTexture = ((0, Xk.n)(this, gI), (0, Xk.n)(this, mI, null)), vk.set(this, ((0, Xk.n)(this, hI), (0, Xk.n)(this, rI, void 0))), this._bumpTexture = ((0, Xk.n)(this, DI), (0, Xk.n)(this, MI, null)), Ek.set(this, ((0, Xk.n)(this, kX), (0, Xk.n)(this, FX, void 0))), this._lightmapTexture = ((0, Xk.n)(this, IX), (0, Xk.n)(this, XX, null)), Ok.set(this, ((0, Xk.n)(this, TX), (0, Xk.n)(this, iX, void 0))), this._refractionTexture = ((0, Xk.n)(this, yX), (0, Xk.n)(this, lX, null)), Gk.set(this, ((0, Xk.n)(this, aX), (0, Xk.n)(this, qX, void 0))), this.ambientColor = ((0, Xk.n)(this, LX), (0, Xk.n)(this, tX, new lk.e(0, 0, 0))), this.diffuseColor = ((0, Xk.n)(this, ZX), (0, Xk.n)(this, jX, new lk.e(1, 1, 1))), this.specularColor = ((0, Xk.n)(this, eX), (0, Xk.n)(this, wX, new lk.e(1, 1, 1))), this.emissiveColor = ((0, Xk.n)(this, HX), (0, Xk.n)(this, JX, new lk.e(0, 0, 0))), this.specularPower = ((0, Xk.n)(this, xX), (0, Xk.n)(this, PX, 64)), this._useAlphaFromDiffuseTexture = ((0, Xk.n)(this, KX), (0, Xk.n)(this, QX, !1)), bk.set(this, ((0, Xk.n)(this, sX), (0, Xk.n)(this, VX, void 0))), this._useEmissiveAsIllumination = ((0, Xk.n)(this, zX), (0, Xk.n)(this, SX, !1)), Rk.set(this, ((0, Xk.n)(this, oX), (0, Xk.n)(this, vX, void 0))), this._linkEmissiveWithDiffuse = ((0, Xk.n)(this, EX), (0, Xk.n)(this, OX, !1)), Uk.set(this, ((0, Xk.n)(this, nX), (0, Xk.n)(this, GX, void 0))), this._useSpecularOverAlpha = ((0, Xk.n)(this, pX), (0, Xk.n)(this, uX, !1)), Ck.set(this, ((0, Xk.n)(this, bX), (0, Xk.n)(this, RX, void 0))), this._useReflectionOverAlpha = ((0, Xk.n)(this, UX), (0, Xk.n)(this, CX, !1)), Nk.set(this, ((0, Xk.n)(this, NX), (0, Xk.n)(this, cX, void 0))), this._disableLighting = ((0, Xk.n)(this, WX), (0, Xk.n)(this, fX, !1)), ck.set(this, ((0, Xk.n)(this, BX), (0, Xk.n)(this, dX, void 0))), this._useObjectSpaceNormalMap = ((0, Xk.n)(this, YX), (0, Xk.n)(this, AX, !1)), Wk.set(this, ((0, Xk.n)(this, gX), (0, Xk.n)(this, mX, void 0))), this._useParallax = ((0, Xk.n)(this, hX), (0, Xk.n)(this, rX, !1)), fk.set(this, ((0, Xk.n)(this, DX), (0, Xk.n)(this, MX, void 0))), this._useParallaxOcclusion = ((0, Xk.n)(this, kT), (0, Xk.n)(this, FT, !1)), Bk.set(this, ((0, Xk.n)(this, IT), (0, Xk.n)(this, XT, void 0))), this.parallaxScaleBias = ((0, Xk.n)(this, TT), (0, Xk.n)(this, iT, .05)), this._roughness = ((0, Xk.n)(this, yT), (0, Xk.n)(this, lT, 0)), dk.set(this, ((0, Xk.n)(this, aT), (0, Xk.n)(this, qT, void 0))), this.indexOfRefraction = ((0, Xk.n)(this, LT), (0, Xk.n)(this, tT, .98)), this.invertRefractionY = ((0, Xk.n)(this, ZT), (0, Xk.n)(this, jT, !0)), this.alphaCutOff = ((0, Xk.n)(this, eT), (0, Xk.n)(this, wT, .4)), this._useLightmapAsShadowmap = ((0, Xk.n)(this, HT), (0, Xk.n)(this, JT, !1)), Yk.set(this, ((0, Xk.n)(this, xT), (0, Xk.n)(this, PT, void 0))), this._diffuseFresnelParameters = ((0, Xk.n)(this, KT), (0, Xk.n)(this, QT, void 0)), Ak.set(this, ((0, Xk.n)(this, sT), (0, Xk.n)(this, VT, void 0))), this._opacityFresnelParameters = ((0, Xk.n)(this, zT), (0, Xk.n)(this, ST, void 0)), gk.set(this, ((0, Xk.n)(this, oT), (0, Xk.n)(this, vT, void 0))), this._reflectionFresnelParameters = ((0, Xk.n)(this, ET), (0, Xk.n)(this, OT, void 0)), mk.set(this, ((0, Xk.n)(this, nT), (0, Xk.n)(this, GT, void 0))), this._refractionFresnelParameters = ((0, Xk.n)(this, pT), (0, Xk.n)(this, uT, void 0)), hk.set(this, ((0, Xk.n)(this, bT), (0, Xk.n)(this, RT, void 0))), this._emissiveFresnelParameters = ((0, Xk.n)(this, UT), (0, Xk.n)(this, CT, void 0)), rk.set(this, ((0, Xk.n)(this, NT), (0, Xk.n)(this, cT, void 0))), this._useReflectionFresnelFromSpecular = ((0, Xk.n)(this, WT), (0, Xk.n)(this, fT, !1)), Dk.set(this, ((0, Xk.n)(this, BT), (0, Xk.n)(this, dT, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, Xk.n)(this, YT), (0, Xk.n)(this, AT, !1)), Mk.set(this, ((0, Xk.n)(this, gT), (0, Xk.n)(this, mT, void 0))), this._maxSimultaneousLights = ((0, Xk.n)(this, hT), (0, Xk.n)(this, rT, 4)), kF.set(this, ((0, Xk.n)(this, DT), (0, Xk.n)(this, MT, void 0))), this._invertNormalMapX = ((0, Xk.n)(this, ki), (0, Xk.n)(this, Fi, !1)), FF.set(this, ((0, Xk.n)(this, Ii), (0, Xk.n)(this, Xi, void 0))), this._invertNormalMapY = ((0, Xk.n)(this, Ti), (0, Xk.n)(this, ii, !1)), IF.set(this, ((0, Xk.n)(this, yi), (0, Xk.n)(this, li, void 0))), this._twoSidedLighting = ((0, Xk.n)(this, ai), (0, Xk.n)(this, qi, !1)), XF.set(this, ((0, Xk.n)(this, Li), (0, Xk.n)(this, ti, void 0))), this._applyDecalMapAfterDetailMap = ((0, Xk.n)(this, Zi), (0, Xk.n)(this, ji, !1)), TF.set(this, ((0, Xk.n)(this, ei), (0, Xk.n)(this, wi, void 0))), this._vertexPullingMetadata = ((0, Xk.n)(this, Hi), null), this._renderTargets = new ik.f(16), this._globalAmbientColor = new lk.e(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new Jk.c(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new qk.c, this.getRenderTargetTextures = () => (this._renderTargets.reset(), kk.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), kk.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
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
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === Zk.c.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== Zk.c.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(Fk, Ik) {
            let Xk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Tk = Ik._drawWrapper;
            if (Tk.effect && this.isFrozen && Tk._wasPreviouslyReady && Tk._wasPreviouslyUsingInstances === Xk) return !0;
            Ik.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Ik.materialDefines = new pk(this._eventInfo.defineNames));
            const ik = this.mG(),
              yk = Ik.materialDefines;
            if (this._isReadyForSubMesh(Ik)) return !0;
            const lk = ik.Oe();
            if (yk._needNormals = (0, Kk.M)(ik, Fk, yk, !0, this._maxSimultaneousLights, this._disableLighting), !(0, Kk.b)(ik, Fk, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, Kk.T)(ik, yk);
            const Lk = this.needAlphaBlendingForMesh(Fk) && this.mG().useOrderIndependentTransparency;
            if ((0, Kk._)(ik, yk, this.canRenderToMRT && !Lk), (0, Kk.W)(ik, yk, Lk), Vk.e.PrepareDefines(lk.currentRenderPassId, Fk, yk), yk._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, yk._needUVs = !1;
              for (let kk = 1; kk <= 6; ++kk) yk["MAINUV" + kk] = !1;
              if (ik.texturesEnabled) {
                if (yk.DIFFUSEDIRECTUV = 0, yk.BUMPDIRECTUV = 0, yk.AMBIENTDIRECTUV = 0, yk.OPACITYDIRECTUV = 0, yk.EMISSIVEDIRECTUV = 0, yk.SPECULARDIRECTUV = 0, yk.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && kk.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, Kk.P)(this._diffuseTexture, yk, "DIFFUSE")
                } else yk.DIFFUSE = !1;
                if (this._ambientTexture && kk.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, Kk.P)(this._ambientTexture, yk, "AMBIENT")
                } else yk.AMBIENT = !1;
                if (this._opacityTexture && kk.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, Kk.P)(this._opacityTexture, yk, "OPACITY"), yk.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else yk.OPACITY = !1;
                if (this._reflectionTexture && kk.ReflectionTextureEnabled ? (yk.ROUGHNESS = this._roughness > 0, yk.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (yk.ROUGHNESS = !1, yk.REFLECTIONOVERALPHA = !1), !(0, Kk.I)(ik, this._reflectionTexture, yk)) return !1;
                if (this._emissiveTexture && kk.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, Kk.P)(this._emissiveTexture, yk, "EMISSIVE")
                } else yk.EMISSIVE = !1;
                if (this._lightmapTexture && kk.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, Kk.P)(this._lightmapTexture, yk, "LIGHTMAP"), yk.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, yk.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else yk.LIGHTMAP = !1;
                if (this._specularTexture && kk.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, Kk.P)(this._specularTexture, yk, "SPECULAR"), yk.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else yk.SPECULAR = !1;
                if (ik.Oe().getCaps().standardDerivatives && this._bumpTexture && kk.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, Kk.P)(this._bumpTexture, yk, "BUMP"), yk.PARALLAX = this._useParallax, yk.PARALLAX_RHS = ik.useRightHandedSystem, yk.PARALLAXOCCLUSION = this._useParallaxOcclusion, yk.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else yk.BUMP = !1, yk.PARALLAX = !1, yk.PARALLAX_RHS = !1, yk.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && kk.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  yk._needUVs = !0, yk.REFRACTION = !0, yk.REFRACTIONMAP_3D = this._refractionTexture.isCube, yk.RGBDREFRACTION = this._refractionTexture.isRGBD, yk.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else yk.REFRACTION = !1;
                yk.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else yk.DIFFUSE = !1, yk.AMBIENT = !1, yk.OPACITY = !1, yk.REFLECTION = !1, yk.EMISSIVE = !1, yk.LIGHTMAP = !1, yk.BUMP = !1, yk.REFRACTION = !1;
              yk.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), yk.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, yk.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, yk.SPECULAROVERALPHA = this._useSpecularOverAlpha, yk.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, yk.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, yk.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(Fk), yk.TEXTURE_REPETITION_MODE = lk.version > 1 || lk.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = yk, this._eventInfo.subMesh = Ik, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (yk._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(yk), yk.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, yk.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (yk._areFresnelDirty && (kk.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (yk.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, yk.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, yk.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, yk.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, yk.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, yk.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, yk._needNormals = !0, yk.FRESNEL = !0) : yk.FRESNEL = !1), yk.AREALIGHTUSED || yk.CLUSTLIGHT_BATCH)
              for (let kk = 0; kk < Fk.lightSources.length; kk++)
                if (!Fk.lightSources[kk]._isReady()) return !1;
            (0, Kk.R)(Fk, ik, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Fk), yk, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Ik.getRenderingMesh(), this._isVertexOutputInvariant), (0, Kk.F)(ik, lk, this, yk, Xk, null, Ik.getRenderingMesh().hasThinInstances), this._eventInfo.defines = yk, this._eventInfo.mesh = Fk, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Kk.E)(Fk, yk, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let Zk = !1;
            if (yk.isDirty) {
              const Xk = yk._areLightsDisposed;
              yk.markAsProcessed();
              const Tk = new Hk.c;
              yk.REFLECTION && Tk.addFallback(0, "REFLECTION"), yk.SPECULAR && Tk.addFallback(0, "SPECULAR"), yk.BUMP && Tk.addFallback(0, "BUMP"), yk.PARALLAX && Tk.addFallback(1, "PARALLAX"), yk.PARALLAX_RHS && Tk.addFallback(1, "PARALLAX_RHS"), yk.PARALLAXOCCLUSION && Tk.addFallback(0, "PARALLAXOCCLUSION"), yk.SPECULAROVERALPHA && Tk.addFallback(0, "SPECULAROVERALPHA"), yk.FOG && Tk.addFallback(1, "FOG"), yk.POINTSIZE && Tk.addFallback(0, "POINTSIZE"), yk.LOGARITHMICDEPTH && Tk.addFallback(0, "LOGARITHMICDEPTH"), (0, Kk.w)(yk, Tk, this._maxSimultaneousLights), yk.SPECULARTERM && Tk.addFallback(0, "SPECULARTERM"), yk.DIFFUSEFRESNEL && Tk.addFallback(1, "DIFFUSEFRESNEL"), yk.OPACITYFRESNEL && Tk.addFallback(2, "OPACITYFRESNEL"), yk.REFLECTIONFRESNEL && Tk.addFallback(3, "REFLECTIONFRESNEL"), yk.EMISSIVEFRESNEL && Tk.addFallback(4, "EMISSIVEFRESNEL"), yk.FRESNEL && Tk.addFallback(4, "FRESNEL"), yk.MULTIVIEW && Tk.addFallback(0, "MULTIVIEW");
              const Lk = [ak.l.PositionKind];
              yk.NORMAL && Lk.push(ak.l.NormalKind), yk.TANGENT && Lk.push(ak.l.TangentKind);
              for (let kk = 1; kk <= 6; ++kk) yk["UV" + kk] && Lk.push(`uv${1===kk?"":kk}`);
              yk.VERTEXCOLOR && Lk.push(ak.l.ColorKind), (0, Kk.y)(Lk, Fk, yk, Tk), (0, Kk.A)(Lk, yk), (0, Kk.C)(Lk, Fk, yk), (0, Kk.x)(Lk, Fk, yk);
              let jk = "default";
              const ek = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                wk = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, Kk.cb)(ek, wk, !1);
              const Jk = ["Material", "Scene", "Mesh"],
                Qk = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: yk.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = Tk, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = yk, this._eventInfo.uniforms = ek, this._eventInfo.attributes = Lk, this._eventInfo.samplers = wk, this._eventInfo.uniformBuffersNames = Jk, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Fk, this._eventInfo.indexParameters = Qk, this._callbackPluginEventGeneric(128, this._eventInfo), Vk.e.AddUniformsAndSamplers(ek, wk), qk.c.AddUniforms(ek), qk.c.AddSamplers(wk), tk.d && (tk.d.PrepareUniforms(ek, yk), tk.d.PrepareSamplers(wk, yk)), (0, Kk.db)({
                  uniformsNames: ek,
                  uniformBuffersNames: Jk,
                  samplers: wk,
                  defines: yk,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, xk.d)(ek), this._useVertexPulling) {
                const kk = Ik.getRenderingMesh(),
                  Fk = kk?.geometry;
                Fk && (this._vertexPullingMetadata = (0, Pk.f)(Fk), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((kk, Fk) => {
                  ek.push(`vp_${Fk}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const sk = {};
              this.customShaderNameResolve && (jk = this.customShaderNameResolve(jk, ek, Jk, wk, yk, Lk, sk));
              const zk = yk.toString(),
                Sk = Ik.effect,
                vk = ik.Oe().createEffect(jk, {
                  attributes: Lk,
                  uniformsNames: ek,
                  uniformBuffersNames: Jk,
                  samplers: wk,
                  defines: zk,
                  fallbacks: Tk,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: Qk,
                  processFinalCode: sk.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: yk.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: kk._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, lk);
              if (this._eventInfo.customCode = void 0, vk)
                if (this._onEffectCreatedObservable && (nk.effect = vk, nk.subMesh = Ik, this._onEffectCreatedObservable.notifyObservers(nk)), this.allowShaderHotSwapping && Sk && !vk.isReady()) {
                  if (yk.markAsUnprocessed(), Zk = this.isFrozen, Xk) return yk._areLightsDisposed = !0, !1
                } else ik.resetCachedMaterial(), Ik.setEffect(vk, yk, this._materialContext)
            }
            return !(!Ik.effect || !Ik.effect.isReady()) && (yk._renderId = ik.getRenderId(), Tk._wasPreviouslyReady = !Zk, Tk._wasPreviouslyUsingInstances = Xk, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const kk = this._uniformBuffer;
            kk.addUniform("diffuseLeftColor", 4), kk.addUniform("diffuseRightColor", 4), kk.addUniform("opacityParts", 4), kk.addUniform("reflectionLeftColor", 4), kk.addUniform("reflectionRightColor", 4), kk.addUniform("refractionLeftColor", 4), kk.addUniform("refractionRightColor", 4), kk.addUniform("emissiveLeftColor", 4), kk.addUniform("emissiveRightColor", 4), kk.addUniform("vDiffuseInfos", 2), kk.addUniform("vAmbientInfos", 2), kk.addUniform("vOpacityInfos", 2), kk.addUniform("vEmissiveInfos", 2), kk.addUniform("vLightmapInfos", 2), kk.addUniform("vSpecularInfos", 2), kk.addUniform("vBumpInfos", 3), kk.addUniform("diffuseMatrix", 16), kk.addUniform("ambientMatrix", 16), kk.addUniform("opacityMatrix", 16), kk.addUniform("emissiveMatrix", 16), kk.addUniform("lightmapMatrix", 16), kk.addUniform("specularMatrix", 16), kk.addUniform("bumpMatrix", 16), kk.addUniform("vTangentSpaceParams", 2), kk.addUniform("pointSize", 1), kk.addUniform("alphaCutOff", 1), kk.addUniform("refractionMatrix", 16), kk.addUniform("vRefractionInfos", 4), kk.addUniform("vRefractionPosition", 3), kk.addUniform("vRefractionSize", 3), kk.addUniform("vSpecularColor", 4), kk.addUniform("vEmissiveColor", 3), kk.addUniform("vDiffuseColor", 4), kk.addUniform("vAmbientColor", 3), kk.addUniform("cameraInfo", 4), kk.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Kk.$)(kk, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(Fk, Ik, Xk) {
            const Tk = this.mG(),
              ik = Xk.materialDefines;
            if (!ik) return;
            const ak = Xk.effect;
            if (!ak) return;
            this._activeEffect = ak, Ik.getMeshUniformBuffer().bindToEffect(ak, "Mesh"), Ik.transferToEffect(Fk), this._uniformBuffer.bindToEffect(ak, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Tk, Ik, Fk, this.isFrozen), Vk.e.Bind(Tk.Oe().currentRenderPassId, this._activeEffect, Ik, Fk, this);
            const qk = Tk.activeCamera;
            qk ? this._uniformBuffer.updateFloat4("cameraInfo", qk.minZ, qk.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Lk = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Lk[0], Lk[1], Lk[2], Lk[3]), this._eventInfo.subMesh = Xk, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), ik.OBJECTSPACE_NORMALMAP && (Fk.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const tk = this._mustRebind(Tk, ak, Xk, Ik.visibility),
              Zk = Tk.Oe()._features.needToAlwaysBindUniformBuffers;
            (0, Kk.e)(Ik, ak), this._vertexPullingMetadata && (0, Pk.c)(ak, this._vertexPullingMetadata);
            const jk = this._uniformBuffer;
            if (tk) {
              if (this.bindViewProjection(ak), !jk.useUbo || !this.isFrozen || !jk.isSync || Xk._drawWrapper._forceRebindOnNextCall) {
                if (kk.FresnelEnabled && ik.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (jk.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), jk.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const kk = lk.k.Color3[0];
                    kk.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), jk.updateColor4("opacityParts", kk, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (jk.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), jk.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (jk.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), jk.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (jk.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), jk.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (ik.ALPHATEST && jk.updateFloat("alphaCutOff", this.alphaCutOff), Tk.texturesEnabled && (this._diffuseTexture && kk.DiffuseTextureEnabled && (jk.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, Kk.v)(this._diffuseTexture, jk, "diffuse")), this._ambientTexture && kk.AmbientTextureEnabled && (jk.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, Kk.v)(this._ambientTexture, jk, "ambient")), this._opacityTexture && kk.OpacityTextureEnabled && (jk.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Kk.v)(this._opacityTexture, jk, "opacity")), (0, Kk.i)(Tk, ik, jk, lk.e.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && kk.ReflectionTextureEnabled || jk.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && kk.EmissiveTextureEnabled && (jk.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Kk.v)(this._emissiveTexture, jk, "emissive")), this._lightmapTexture && kk.LightmapTextureEnabled && (jk.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Kk.v)(this._lightmapTexture, jk, "lightmap")), this._specularTexture && kk.SpecularTextureEnabled && (jk.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, Kk.v)(this._specularTexture, jk, "specular")), this._bumpTexture && Tk.Oe().getCaps().standardDerivatives && kk.BumpTextureEnabled && (jk.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, Kk.v)(this._bumpTexture, jk, "bump"), Tk._mirroredCameraPosition ? jk.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : jk.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && kk.RefractionTextureEnabled)) {
                  let kk = 1;
                  if (this._refractionTexture.isCube || (jk.I9("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (kk = this._refractionTexture.depth)), jk.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, kk, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const kk = this._refractionTexture;
                    jk.updateVector3("vRefractionPosition", kk.boundingBoxPosition), jk.updateVector3("vRefractionSize", kk.boundingBoxSize)
                  }
                }
                this.pointsCloud && jk.updateFloat("pointSize", this.pointSize), jk.updateColor4("vSpecularColor", this.specularColor, this.specularPower), jk.updateColor3("vEmissiveColor", kk.EmissiveTextureEnabled ? this.emissiveColor : lk.e.BlackReadOnly), jk.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), Tk.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), jk.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              Tk.texturesEnabled && (this._diffuseTexture && kk.DiffuseTextureEnabled && ak.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && kk.AmbientTextureEnabled && ak.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && kk.OpacityTextureEnabled && ak.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && kk.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? ak.setTexture("reflectionCubeSampler", this._reflectionTexture) : ak.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && kk.EmissiveTextureEnabled && ak.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && kk.LightmapTextureEnabled && ak.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && kk.SpecularTextureEnabled && ak.setTexture("specularSampler", this._specularTexture), this._bumpTexture && Tk.Oe().getCaps().standardDerivatives && kk.BumpTextureEnabled && ak.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && kk.RefractionTextureEnabled && (this._refractionTexture.isCube ? ak.setTexture("refractionCubeSampler", this._refractionTexture) : ak.setTexture("refraction2DSampler", this._refractionTexture))), this.mG().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Ik) && this.mG().depthPeelingRenderer.bind(ak), this._eventInfo.subMesh = Xk, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, xk.e)(ak, this, Tk), this.bindEyePosition(ak)
            } else Zk && (this._needToBindSceneUbo = !0);
            !tk && this.isFrozen && !Zk || !Tk.lightsEnabled || this._disableLighting || (0, Kk.n)(Tk, Ik, ak, ik, this._maxSimultaneousLights), !tk && this.isFrozen || ((Tk.fogEnabled && Ik.applyFog && Tk.fogMode !== yk.f.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || Ik.receiveShadows || ik.PREPASS || ik.CLUSTLIGHT_BATCH) && this.bindView(ak), (0, Kk.f)(Tk, Ik, ak), ik.NUM_MORPH_INFLUENCERS && (0, Kk.s)(Ik, ak), ik.BAKED_VERTEX_ANIMATION_TEXTURE && Ik.bakedVertexAnimationManager?.bind(ak, ik.INSTANCES), this.useLogarithmicDepth && (0, Kk.p)(ik, ak, Tk), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(Ik, this._activeEffect, Xk), jk.update()
          }
          _canBindRunFollower(Fk, Ik, Xk, Tk, ik) {
            const yk = Fk.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === kk.prototype.isReadyForSubMesh && this.bindForSubMesh === kk.prototype.bindForSubMesh && this._mustRebind === ek.e.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !Ik._features.needToAlwaysBindUniformBuffers && !(yk && yk.enabled && yk.currentRTisSceneRT) && !Vk.e._Configurations[Ik.currentRenderPassId] && !Tk.materialDefines?.OBJECTSPACE_NORMALMAP && !Xk.skeleton && !ik._bonesComputationForcedToCPU
          }
          _bindRunFollower(kk, Fk, Ik, Xk) {
            this._activeEffect = Xk, Fk.getMeshUniformBuffer().bindToEffect(Xk, "Mesh"), Fk.transferToEffect(kk);
            const Tk = this._uniformBuffer;
            Tk.bindToEffect(Xk, "Material");
            const ik = this._scene.activeCamera;
            ik ? Tk.updateFloat4("cameraInfo", ik.minZ, ik.maxZ, 0, 0) : Tk.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const yk = this.textureRepetitionHexTilingParams;
            Tk.updateFloat4("vTextureRepetitionHexTilingParams", yk[0], yk[1], yk[2], yk[3]), this._afterBind(Fk, Xk, Ik), Tk.update()
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
            let Ik = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Tk = Qk.b.Clone((() => new kk(Fk, this.mG())), this, {
              cloneTexturesOnlyOnce: Ik
            });
            return Tk.name = Fk, Tk.id = Fk, this.stencil.copyTo(Tk.stencil), this._clonePlugins(Tk, Xk), Tk
          }
          static Parse(Fk, Ik, Xk) {
            const Tk = Qk.b.Parse((() => new kk(Fk.name, Ik)), Fk, Ik, Xk);
            return Fk.stencil && Tk.stencil.parse(Fk.stencil, Ik, Xk), Zk.c._ParsePlugins(Fk, Tk, Ik, Xk), Tk
          }
          static get DiffuseTextureEnabled() {
            return wk.d.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(kk) {
            wk.d.DiffuseTextureEnabled = kk
          }
          static get DetailTextureEnabled() {
            return wk.d.DetailTextureEnabled
          }
          static set DetailTextureEnabled(kk) {
            wk.d.DetailTextureEnabled = kk
          }
          static get AmbientTextureEnabled() {
            return wk.d.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(kk) {
            wk.d.AmbientTextureEnabled = kk
          }
          static get OpacityTextureEnabled() {
            return wk.d.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(kk) {
            wk.d.OpacityTextureEnabled = kk
          }
          static get ReflectionTextureEnabled() {
            return wk.d.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(kk) {
            wk.d.ReflectionTextureEnabled = kk
          }
          static get EmissiveTextureEnabled() {
            return wk.d.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(kk) {
            wk.d.EmissiveTextureEnabled = kk
          }
          static get SpecularTextureEnabled() {
            return wk.d.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(kk) {
            wk.d.SpecularTextureEnabled = kk
          }
          static get BumpTextureEnabled() {
            return wk.d.BumpTextureEnabled
          }
          static set BumpTextureEnabled(kk) {
            wk.d.BumpTextureEnabled = kk
          }
          static get LightmapTextureEnabled() {
            return wk.d.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(kk) {
            wk.d.LightmapTextureEnabled = kk
          }
          static get RefractionTextureEnabled() {
            return wk.d.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(kk) {
            wk.d.RefractionTextureEnabled = kk
          }
          static get ColorGradingTextureEnabled() {
            return wk.d.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(kk) {
            wk.d.ColorGradingTextureEnabled = kk
          }
          static get FresnelEnabled() {
            return wk.d.FresnelEnabled
          }
          static set FresnelEnabled(kk) {
            wk.d.FresnelEnabled = kk
          }
        }, Fk = new WeakMap, Lk = new WeakMap, jk = new WeakMap, zk = new WeakMap, Sk = new WeakMap, vk = new WeakMap, Ek = new WeakMap, Ok = new WeakMap, Gk = new WeakMap, bk = new WeakMap, Rk = new WeakMap, Uk = new WeakMap, Ck = new WeakMap, Nk = new WeakMap, ck = new WeakMap, Wk = new WeakMap, fk = new WeakMap, Bk = new WeakMap, dk = new WeakMap, Yk = new WeakMap, Ak = new WeakMap, gk = new WeakMap, mk = new WeakMap, hk = new WeakMap, rk = new WeakMap, Dk = new WeakMap, Mk = new WeakMap, kF = new WeakMap, FF = new WeakMap, IF = new WeakMap, XF = new WeakMap, TF = new WeakMap, (() => {
          const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(oI[Symbol.metadata] ?? null) : void 0;
          iF = [(0, Tk.B)("diffuseTexture")], yF = [(0, Tk.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], lF = [(0, Tk.B)("ambientTexture")], aF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], qF = [(0, Tk.B)("opacityTexture")], LF = [(0, Tk.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], tF = [(0, Tk.B)("reflectionTexture")], ZF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], jF = [(0, Tk.B)("emissiveTexture")], eF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], wF = [(0, Tk.B)("specularTexture")], HF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], JF = [(0, Tk.B)("bumpTexture")], xF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], PF = [(0, Tk.B)("lightmapTexture")], KF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], QF = [(0, Tk.B)("refractionTexture")], sF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], VF = [(0, Tk.n)("ambient")], zF = [(0, Tk.n)("diffuse")], SF = [(0, Tk.n)("specular")], oF = [(0, Tk.n)("emissive")], vF = [(0, Tk.J)()], EF = [(0, Tk.J)("useAlphaFromDiffuseTexture")], OF = [() => ({
            init(kk) {
              return void 0 === kk && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = kk), kk
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(kk) {
              this._useAlphaFromDiffuseTexture = kk
            }
          })], nF = [(0, Tk.J)("useEmissiveAsIllumination")], GF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], pF = [(0, Tk.J)("linkEmissiveWithDiffuse")], uF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], bF = [(0, Tk.J)("useSpecularOverAlpha")], RF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], UF = [(0, Tk.J)("useReflectionOverAlpha")], CF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], NF = [(0, Tk.J)("disableLighting")], cF = [(0, Tk.e)("_markAllSubMeshesAsLightsDirty")], WF = [(0, Tk.J)("useObjectSpaceNormalMap")], fF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], BF = [(0, Tk.J)("useParallax")], dF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], YF = [(0, Tk.J)("useParallaxOcclusion")], AF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], gF = [(0, Tk.J)()], mF = [(0, Tk.J)("roughness")], hF = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], rF = [(0, Tk.J)()], DF = [(0, Tk.J)()], MF = [(0, Tk.J)()], kI = [(0, Tk.J)("useLightmapAsShadowmap")], FI = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], II = [(0, Tk.v)("diffuseFresnelParameters")], XI = [(0, Tk.e)("_markAllSubMeshesAsFresnelDirty")], TI = [(0, Tk.v)("opacityFresnelParameters")], iI = [(0, Tk.e)("_markAllSubMeshesAsFresnelAndMiscDirty")], yI = [(0, Tk.v)("reflectionFresnelParameters")], lI = [(0, Tk.e)("_markAllSubMeshesAsFresnelDirty")], aI = [(0, Tk.v)("refractionFresnelParameters")], qI = [(0, Tk.e)("_markAllSubMeshesAsFresnelDirty")], LI = [(0, Tk.v)("emissiveFresnelParameters")], tI = [(0, Tk.e)("_markAllSubMeshesAsFresnelDirty")], ZI = [(0, Tk.J)("useReflectionFresnelFromSpecular")], jI = [(0, Tk.e)("_markAllSubMeshesAsFresnelDirty")], eI = [(0, Tk.J)("useGlossinessFromSpecularMapAlpha")], wI = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], HI = [(0, Tk.J)("maxSimultaneousLights")], JI = [(0, Tk.e)("_markAllSubMeshesAsLightsDirty")], xI = [(0, Tk.J)("invertNormalMapX")], PI = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], KI = [(0, Tk.J)("invertNormalMapY")], QI = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], sI = [(0, Tk.J)("twoSidedLighting")], VI = [(0, Tk.e)("_markAllSubMeshesAsTexturesDirty")], zI = [(0, Tk.J)("applyDecalMapAfterDetailMap")], SI = [(0, Tk.e)("_markAllSubMeshesAsMiscDirty")], (0, Xk.j)(kk, null, yF, {
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
          }, OI, nI), (0, Xk.j)(kk, null, aF, {
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
          }, uI, bI), (0, Xk.j)(kk, null, LF, {
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
          }, CI, NI), (0, Xk.j)(kk, null, ZF, {
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
          }, fI, BI), (0, Xk.j)(kk, null, eF, {
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
          }, AI, gI), (0, Xk.j)(kk, null, HF, {
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
          }, rI, DI), (0, Xk.j)(kk, null, xF, {
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
          }, FX, IX), (0, Xk.j)(kk, null, KF, {
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
          }, iX, yX), (0, Xk.j)(kk, null, sF, {
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
          }, qX, LX), (0, Xk.j)(kk, null, OF, {
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
          }, VX, zX), (0, Xk.j)(kk, null, GF, {
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
          }, vX, EX), (0, Xk.j)(kk, null, uF, {
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
          }, GX, pX), (0, Xk.j)(kk, null, RF, {
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
          }, RX, UX), (0, Xk.j)(kk, null, CF, {
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
          }, cX, WX), (0, Xk.j)(kk, null, cF, {
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
          }, dX, YX), (0, Xk.j)(kk, null, fF, {
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
          }, mX, hX), (0, Xk.j)(kk, null, dF, {
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
          }, MX, kT), (0, Xk.j)(kk, null, AF, {
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
          }, XT, TT), (0, Xk.j)(kk, null, hF, {
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
          }, qT, LT), (0, Xk.j)(kk, null, FI, {
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
          }, PT, KT), (0, Xk.j)(kk, null, XI, {
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
          }, VT, zT), (0, Xk.j)(kk, null, iI, {
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
          }, vT, ET), (0, Xk.j)(kk, null, lI, {
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
          }, GT, pT), (0, Xk.j)(kk, null, qI, {
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
          }, RT, UT), (0, Xk.j)(kk, null, tI, {
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
          }, cT, WT), (0, Xk.j)(kk, null, jI, {
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
          }, dT, YT), (0, Xk.j)(kk, null, wI, {
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
          }, mT, hT), (0, Xk.j)(kk, null, JI, {
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
          }, MT, ki), (0, Xk.j)(kk, null, PI, {
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
          }, Xi, Ti), (0, Xk.j)(kk, null, QI, {
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
          }, li, ai), (0, Xk.j)(kk, null, VI, {
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
          }, ti, Zi), (0, Xk.j)(kk, null, SI, {
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
          }, wi, Hi), (0, Xk.j)(null, null, iF, {
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
          }, vI, EI), (0, Xk.j)(null, null, lF, {
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
          }, GI, pI), (0, Xk.j)(null, null, qF, {
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
          }, RI, UI), (0, Xk.j)(null, null, tF, {
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
          }, cI, WI), (0, Xk.j)(null, null, jF, {
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
          }, dI, YI), (0, Xk.j)(null, null, wF, {
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
          }, mI, hI), (0, Xk.j)(null, null, JF, {
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
          }, MI, kX), (0, Xk.j)(null, null, PF, {
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
          }, XX, TX), (0, Xk.j)(null, null, QF, {
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
          }, lX, aX), (0, Xk.j)(null, null, VF, {
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
          }, tX, ZX), (0, Xk.j)(null, null, zF, {
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
          }, jX, eX), (0, Xk.j)(null, null, SF, {
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
          }, wX, HX), (0, Xk.j)(null, null, oF, {
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
          }, JX, xX), (0, Xk.j)(null, null, vF, {
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
          }, PX, KX), (0, Xk.j)(null, null, EF, {
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
          }, QX, sX), (0, Xk.j)(null, null, nF, {
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
          }, SX, oX), (0, Xk.j)(null, null, pF, {
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
          }, OX, nX), (0, Xk.j)(null, null, bF, {
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
          }, uX, bX), (0, Xk.j)(null, null, UF, {
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
          }, CX, NX), (0, Xk.j)(null, null, NF, {
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
          }, fX, BX), (0, Xk.j)(null, null, WF, {
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
          }, AX, gX), (0, Xk.j)(null, null, BF, {
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
          }, rX, DX), (0, Xk.j)(null, null, YF, {
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
          }, FT, IT), (0, Xk.j)(null, null, gF, {
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
          }, iT, yT), (0, Xk.j)(null, null, mF, {
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
          }, lT, aT), (0, Xk.j)(null, null, rF, {
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
          }, tT, ZT), (0, Xk.j)(null, null, DF, {
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
          }, jT, eT), (0, Xk.j)(null, null, MF, {
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
          }, wT, HT), (0, Xk.j)(null, null, kI, {
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
          }, JT, xT), (0, Xk.j)(null, null, II, {
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
          }, QT, sT), (0, Xk.j)(null, null, TI, {
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
          }, ST, oT), (0, Xk.j)(null, null, yI, {
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
          }, OT, nT), (0, Xk.j)(null, null, aI, {
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
          }, uT, bT), (0, Xk.j)(null, null, LI, {
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
          }, CT, NT), (0, Xk.j)(null, null, ZI, {
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
          }, fT, BT), (0, Xk.j)(null, null, eI, {
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
          }, AT, gT), (0, Xk.j)(null, null, HI, {
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
          }, rT, DT), (0, Xk.j)(null, null, xI, {
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
          }, Fi, Ii), (0, Xk.j)(null, null, KI, {
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
          }, ii, yi), (0, Xk.j)(null, null, sI, {
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
          }, qi, Li), (0, Xk.j)(null, null, zI, {
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
          }, ji, ei), Fk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fk
          })
        })(), kk.ForceGLSL = !1, kk._ShaderLoader = new sk.c((() => [Promise.all([Ik.e(317), Ik.e(316)]).then((() => Ik(41867))), Promise.all([Ik.e(322), Ik.e(318), Ik.e(331), Ik.e(321)]).then((() => Ik(42073)))]), (() => [Promise.all([Ik.e(338), Ik.e(333)]).then((() => Ik(42225))), Promise.all([Ik.e(339), Ik.e(349), Ik.e(335)]).then((() => Ik(42415)))])), kk
      })(),
      Rk = !1;

    function Uk() {
      Rk || (Rk = !0, (0, tk.e)(), (0, Ek.f)("BABYLON.StandardMaterial", bk), yk.f.DefaultMaterialFactory = kk => new bk("default material", kk))
    }
    Object.getOwnPropertyDescriptor(bk.prototype, "decalMap") || Object.defineProperty(bk.prototype, "decalMap", (0, Ok.g)("StandardMaterial", "decalMap"))
  },
  40386: (kk, Fk, Ik) => {
    function Xk(kk) {
      return class extends kk {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    Ik.d(Fk, {
      b: () => Xk
    })
  },
  40377: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk
    });
    class Xk {
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
        const Ik = null === Fk;
        Ik && (Fk = Promise.all(kk.load()), kk.loadPromise = Fk);
        let Xk = !1;
        try {
          await Fk, Xk = !0
        } finally {
          Ik && this._completeLoad(kk, Xk)
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