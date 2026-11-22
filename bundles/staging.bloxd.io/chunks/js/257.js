export const id = 257;
export const ids = [257];
export const modules = {
  39993: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => fk
    });
    var Dk = ik(39574);

    function fk(kk) {
      return class extends kk {
        constructor() {
          super(...arguments);
          const kk = new.target;
          if (!kk[Symbol.metadata]) {
            const ek = Object.getPrototypeOf(kk)?.[Symbol.metadata];
            kk[Symbol.metadata] = ek ? Object.create(ek) : {}
          }
          const ek = (0, Dk.c)(kk[Symbol.metadata]);
          ek._imageProcessingConfiguration || (ek._imageProcessingConfiguration = {
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
          kk !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !kk && this.XF ? this._imageProcessingConfiguration = this.XF().imageProcessingConfiguration : kk && (this._imageProcessingConfiguration = kk), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
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
  39849: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk,
      e: () => fk
    });
    var Dk = ik(39853);

    function fk(kk) {
      return class extends kk {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class Sk extends Dk.d {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  39949: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Kk
    });
    var Dk = ik(39566),
      fk = ik(39861),
      Sk = ik(39570),
      bk = ik(39928),
      rk = ik(39853),
      Pk = ik(39956),
      mk = ik(39910);
    class Mk extends rk.d {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let Kk = (() => {
      var kk, ek, ik, rk;
      let Kk, xk, nk, Uk, Hk, wk, lk = Pk.e,
        pk = [],
        yk = [],
        Yk = [],
        Lk = [],
        Ck = [],
        Ak = [],
        jk = [],
        sk = [],
        dk = [],
        Vk = [],
        Fk = [],
        uk = [];
      return kk = class extends lk {
        get texture() {
          return (0, Dk.b)(this, ek, "f")
        }
        set texture(kk) {
          (0, Dk.c)(this, ek, kk, "f")
        }
        get normalBlendMethod() {
          return (0, Dk.b)(this, ik, "f")
        }
        set normalBlendMethod(kk) {
          (0, Dk.c)(this, ik, kk, "f")
        }
        get isEnabled() {
          return (0, Dk.b)(this, rk, "f")
        }
        set isEnabled(kk) {
          (0, Dk.c)(this, rk, kk, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(kk) {
          let Sk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(kk, "DetailMap", 140, new Mk, Sk), this._texture = null, ek.set(this, (0, Dk.e)(this, pk, void 0)), this.diffuseBlendLevel = ((0, Dk.e)(this, yk), (0, Dk.e)(this, Yk, 1)), this.roughnessBlendLevel = ((0, Dk.e)(this, Lk), (0, Dk.e)(this, Ck, 1)), this.bumpLevel = ((0, Dk.e)(this, Ak), (0, Dk.e)(this, jk, 1)), this._normalBlendMethod = ((0, Dk.e)(this, sk), fk.e.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), ik.set(this, (0, Dk.e)(this, dk, void 0)), this._isEnabled = ((0, Dk.e)(this, Vk), !1), rk.set(this, (0, Dk.e)(this, Fk, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Dk.e)(this, uk), this._internalMarkAllSubMeshesAsTexturesDirty = kk._dirtyCallbacks[1]
        }
        isReadyForSubMesh(kk, ek, ik) {
          return !this._isEnabled || !(kk._areTexturesDirty && ek.texturesEnabled && ik.getCaps().standardDerivatives && this._texture && bk.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(kk, ek) {
          if (this._isEnabled) {
            kk.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const ik = ek.JU();
            kk._areTexturesDirty && (ik.getCaps().standardDerivatives && this._texture && bk.e.DetailTextureEnabled && this._isEnabled ? ((0, mk.qb)(this._texture, kk, "DETAIL"), kk.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : kk.DETAIL = !1)
          } else kk.DETAIL = !1
        }
        bindForSubMesh(kk, ek) {
          if (!this._isEnabled) return;
          const ik = this._material.isFrozen;
          kk.useUbo && ik && kk.isSync || this._texture && bk.e.DetailTextureEnabled && (kk.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, mk.G)(this._texture, kk, "detail")), ek.texturesEnabled && this._texture && bk.e.DetailTextureEnabled && kk.setTexture("detailSampler", this._texture)
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
      }, ek = new WeakMap, ik = new WeakMap, rk = new WeakMap, (() => {
        const ek = "function" === typeof Symbol && Symbol.metadata ? Object.create(lk[Symbol.metadata] ?? null) : void 0;
        Kk = [(0, Sk.z)("detailTexture"), (0, Sk.e)("_markAllSubMeshesAsTexturesDirty")], xk = [(0, Sk.I)()], nk = [(0, Sk.I)()], Uk = [(0, Sk.I)()], Hk = [(0, Sk.I)(), (0, Sk.e)("_markAllSubMeshesAsTexturesDirty")], wk = [(0, Sk.I)(), (0, Sk.e)("_markAllSubMeshesAsTexturesDirty")], (0, Dk.d)(kk, null, Kk, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: kk => "texture" in kk,
            get: kk => kk.texture,
            set: (kk, ek) => {
              kk.texture = ek
            }
          },
          metadata: ek
        }, pk, yk), (0, Dk.d)(kk, null, Hk, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: kk => "normalBlendMethod" in kk,
            get: kk => kk.normalBlendMethod,
            set: (kk, ek) => {
              kk.normalBlendMethod = ek
            }
          },
          metadata: ek
        }, dk, Vk), (0, Dk.d)(kk, null, wk, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "isEnabled" in kk,
            get: kk => kk.isEnabled,
            set: (kk, ek) => {
              kk.isEnabled = ek
            }
          },
          metadata: ek
        }, Fk, uk), (0, Dk.d)(null, null, xk, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: kk => "diffuseBlendLevel" in kk,
            get: kk => kk.diffuseBlendLevel,
            set: (kk, ek) => {
              kk.diffuseBlendLevel = ek
            }
          },
          metadata: ek
        }, Yk, Lk), (0, Dk.d)(null, null, nk, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: kk => "roughnessBlendLevel" in kk,
            get: kk => kk.roughnessBlendLevel,
            set: (kk, ek) => {
              kk.roughnessBlendLevel = ek
            }
          },
          metadata: ek
        }, Ck, Ak), (0, Dk.d)(null, null, Uk, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: kk => "bumpLevel" in kk,
            get: kk => kk.bumpLevel,
            set: (kk, ek) => {
              kk.bumpLevel = ek
            }
          },
          metadata: ek
        }, jk, sk), ek && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ek
        })
      })(), kk
    })()
  },
  39853: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk
    });
    class Dk {
      constructor(kk) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = kk, kk)
          for (const ek in kk) Object.prototype.hasOwnProperty.call(kk, ek) && this._setDefaultValue(ek)
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
        for (let ek = 0; ek < this._keys.length; ek++) {
          const ik = this._keys[ek];
          if (this[ik] !== kk[ik]) return !1
        }
        return !0
      }
      cloneTo(kk) {
        this._keys.length !== kk._keys.length && (kk._keys = this._keys.slice(0));
        for (let ek = 0; ek < this._keys.length; ek++) {
          const ik = this._keys[ek];
          kk[ik] = this[ik]
        }
      }
      reset() {
        for (const kk of this._keys) this._setDefaultValue(kk)
      }
      _setDefaultValue(kk) {
        const ek = this._externalProperties?.[kk]?.type ?? typeof this[kk],
          ik = this._externalProperties?.[kk]?.default;
        switch (ek) {
          case "number":
            this[kk] = ik ?? 0;
            break;
          case "string":
            this[kk] = ik ?? "";
            break;
          default:
            this[kk] = ik ?? !1
        }
      }
      toString() {
        let kk = "";
        for (let ek = 0; ek < this._keys.length; ek++) {
          const ik = this._keys[ek],
            Dk = this[ik];
          switch (typeof Dk) {
            case "number":
            case "string":
              kk += "#define " + ik + " " + Dk + "\n";
              break;
            default:
              Dk && (kk += "#define " + ik + "\n")
          }
        }
        return kk
      }
    }
  },
  39971: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => rk,
      i: () => bk,
      m: () => Sk
    });
    var Dk, fk = ik(36698);

    function Sk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const Dk = ek(kk);
      if (!Number.isInteger(Dk) || Dk < 0 || Dk > ik) throw new Error(`Invalid geometry object ID ${Dk} for mesh "${kk.name}". Object IDs must be integers between 0 and 0x${ik.toString(16).toUpperCase()}.`);
      return Dk
    }

    function bk(kk, ek) {
      const ik = ek(kk);
      if (!Number.isInteger(ik) || ik < 0 || ik > 255 || 0 !== ik && 0 === (63 & ik)) throw new Error(`Invalid geometry mesh-blending tag ${ik} for mesh "${kk.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return ik
    }! function(kk) {
      kk[kk.Zero = 0] = "Zero", kk[kk.One = 1] = "One", kk[kk.MaxViewZ = 2] = "MaxViewZ", kk[kk.NoClear = 3] = "NoClear"
    }(Dk || (Dk = {}));
    class rk {
      static CreateConfiguration(kk) {
        return rk._Configurations[kk] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: fk.b.Zero(),
          currentViewProjection: fk.b.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, rk._Configurations[kk]
      }
      static DeleteConfiguration(kk) {
        delete rk._Configurations[kk]
      }
      static GetConfiguration(kk) {
        return rk._Configurations[kk]
      }
      static _PrepareConfiguration(kk, ek, ik) {
        const Dk = rk._Configurations[kk];
        Dk._attachments = ek, Dk._colorAttachments = ik, Dk._mrtCount = ek.length;
        let fk = "#define PREPASS\n";
        for (const Sk of rk.GeometryTextureDescriptions) {
          const kk = Dk.defines[Sk.defineIndex];
          void 0 !== kk && (fk += `#define ${Sk.define}\n#define ${Sk.defineIndex} ${kk}\n`)
        }
        Dk.objectIdIsRedFormat && (fk += "#define PREPASS_OBJECT_ID_R8\n"), Dk._defines = fk + `#define SCENE_MRT_COUNT ${ek.length}\n`
      }
      static _PrepareStringDefines(kk, ek) {
        const ik = rk._Configurations[kk];
        return !!ik?._defines && (ek.push(ik._defines), !0)
      }
      static _BindAttachmentsForEffect(kk, ek) {
        const ik = rk._Configurations[kk.currentRenderPassId];
        return !ik?._attachments || (kk.bindAttachments(ek._multiTarget ? ik._attachments : ik._colorAttachments), ek._multiTarget || void 0 !== ik.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(kk) {
        const ek = rk._Configurations[kk.currentRenderPassId];
        ek?._colorAttachments && kk.bindAttachments(ek._colorAttachments)
      }
      static _BindColorAttachments(kk) {
        const ek = rk._Configurations[kk.currentRenderPassId];
        return !ek?._colorAttachments || (kk.bindAttachments(ek._colorAttachments), void 0 !== ek.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(kk) {
        const ek = rk._Configurations[kk.currentRenderPassId];
        return !ek?._colorAttachments || void 0 !== ek.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(kk, ek) {
        const ik = rk._Configurations[kk.currentRenderPassId];
        if (!ik) return;
        const Dk = kk.getAlphaMode(),
          fk = void 0 === ik.defines.PREPASS_COLOR_INDEX || 2 === Dk || 1 === Dk || 17 === Dk;
        ek.setFloat("geometryZeroAlphaDiscard", fk ? 1 : 0)
      }
      static AddUniformsAndSamplers(kk, ek) {
        kk.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(kk, ek) {
        for (const ik of ek)
          if (ik.TY)
            for (const ek of ik.TY) ek._removeDrawWrapper(kk)
      }
      static PrepareDefines(kk, ek, ik) {
        if (!ik._arePrePassDirty) return;
        const Dk = rk._Configurations[kk];
        if (!Dk) return;
        ik.PREPASS = !0;
        let fk = 0;
        for (let Sk = 0; Sk < rk.GeometryTextureDescriptions.length; Sk++) {
          const kk = rk.GeometryTextureDescriptions[Sk],
            ek = kk.define,
            bk = kk.defineIndex,
            Pk = Dk.defines[bk];
          void 0 !== Pk ? (ik[ek] = !0, ik[bk] = Pk, fk++) : (ik[ek] = !1, delete ik[bk])
        }
        ik.PREPASS_OBJECT_ID_R8 = Dk.objectIdIsRedFormat, ik.SCENE_MRT_COUNT = Dk._mrtCount ?? fk, ik.BONES_VELOCITY_ENABLED = ek.useBones && ek.computeBonesUsingShaders && ek.skeleton && !ek.skeleton.isUsingTextureForMatrices && -1 === Dk.excludedSkinnedMesh.indexOf(ek)
      }
      static Bind(kk, ek, ik, Dk, fk) {
        const Pk = rk._Configurations[kk];
        if (!Pk) return;
        const mk = ik.XF(),
          Mk = mk.JU();
        if (Pk.reverseCulling && Mk.setStateCullFaceType(mk._mirroredCameraPosition ? fk.cullBackFaces : !fk.cullBackFaces), void 0 !== Pk.defines.PREPASS_OBJECT_ID_INDEX) {
          const kk = Pk.objectIdIsRedFormat ? 255 : 16777215;
          let Dk = ik.uniqueId;
          if (Pk.objectIdProvider) Dk = Sk(ik, Pk.objectIdProvider, kk);
          else if (Dk > kk) throw new Error(`Invalid geometry object ID ${Dk} for mesh "${ik.name}". Object IDs must be integers between 0 and 0x${kk.toString(16).toUpperCase()}.`);
          ek.setFloat("objectId", Dk)
        }
        if (void 0 !== Pk.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const kk = Pk.meshBlendTagProvider ? bk(ik, Pk.meshBlendTagProvider) : ik.meshBlendingTag;
          ek.setInt("meshBlendTag", kk)
        }
        if (void 0 !== Pk.defines.PREPASS_VELOCITY_INDEX || void 0 !== Pk.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const kk = Pk._currentWorldMatrices ?? (Pk._currentWorldMatrices = {}),
            fk = Pk._worldMatrixFrameIds ?? (Pk._worldMatrixFrameIds = {});
          if (kk[ik.uniqueId] || (kk[ik.uniqueId] = Dk.clone(), Pk.previousWorldMatrices[ik.uniqueId] = Dk.clone()), fk[ik.uniqueId] !== Mk.frameId && (Pk.previousWorldMatrices[ik.uniqueId].Fs(kk[ik.uniqueId]), fk[ik.uniqueId] = Mk.frameId), kk[ik.uniqueId].Fs(Dk), -1 === Pk.lastUpdateFrameId ? (Pk.lastUpdateFrameId = Mk.frameId, Pk.previousViewProjection.Fs(mk.getTransformMatrix()), Pk.currentViewProjection.Fs(mk.getTransformMatrix())) : Pk.currentViewProjection.updateFlag !== mk.getTransformMatrix().updateFlag ? (Pk.lastUpdateFrameId = Mk.frameId, Pk.previousViewProjection.Fs(Pk.currentViewProjection), Pk.currentViewProjection.Fs(mk.getTransformMatrix())) : Pk.lastUpdateFrameId !== Mk.frameId && (Pk.lastUpdateFrameId = Mk.frameId, Pk.previousViewProjection.Fs(Pk.currentViewProjection)), ek.setMatrix("previousWorld", Pk.previousWorldMatrices[ik.uniqueId]), ek.setMatrix("previousViewProjection", Pk.previousViewProjection), ik.useBones && ik.computeBonesUsingShaders && ik.skeleton) {
            const kk = ik.skeleton;
            if (!kk.isUsingTextureForMatrices || -1 === ek.getUniformIndex("boneTextureInfo")) {
              const Dk = kk.getTransformMatrices(ik);
              Dk && (Pk.previousBones[ik.uniqueId] || (Pk.previousBones[ik.uniqueId] = Dk.slice()), ek.setMatrices("mPreviousBones", Pk.previousBones[ik.uniqueId]), Pk.previousBones[ik.uniqueId].set(Dk))
            }
          }
        }
      }
    }
    rk.GeometryTextureDescriptions = [{
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
    }], rk._Configurations = {}
  },
  39956: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => xk,
      i: () => Uk
    });
    var Dk = ik(39566),
      fk = ik(39570),
      Sk = ik(39455),
      bk = ik(39412);
    const rk = new RegExp("^([gimus]+)!");
    class Pk {
      constructor(kk) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = kk, this._scene = kk.XF(), this._engine = this._scene.JU()
      }
      _addPlugin(kk) {
        for (let Dk = 0; Dk < this._plugins.length; ++Dk)
          if (this._plugins[Dk].name === kk.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !kk.isCompatible(this._material.shaderLanguage)) throw `The plugin "${kk.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const ek = kk.getClassName();
        Pk._MaterialPluginClassToMainDefine[ek] || (Pk._MaterialPluginClassToMainDefine[ek] = "MATERIALPLUGIN_" + ++Pk._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (kk, ek) => this._handlePluginEvent(kk, ek), this._plugins.push(kk), this._plugins.sort(((kk, ek) => kk.priority - ek.priority)), this._codeInjectionPoints = {};
        const ik = {};
        ik[Pk._MaterialPluginClassToMainDefine[ek]] = {
          type: "boolean",
          default: !0
        };
        for (const Dk of this._plugins) Dk.collectDefines(ik), this._collectPointNames("vertex", Dk.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Dk.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = ik, !0
      }
      _activatePlugin(kk) {
        -1 === this._activePlugins.indexOf(kk) && (this._activePlugins.push(kk), this._activePlugins.sort(((kk, ek) => kk.priority - ek.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), kk.registerForExtraEvents && (this._activePluginsForExtraEvents.push(kk), this._activePluginsForExtraEvents.sort(((kk, ek) => kk.priority - ek.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(kk) {
        for (let ek = 0; ek < this._plugins.length; ++ek)
          if (this._plugins[ek].name === kk) return this._plugins[ek];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(kk) {
        let ek = !0;
        for (const ik of this._activePlugins) ek = ek && ik.isReadyForSubMesh(kk.defines, this._scene, this._engine, kk.subMesh);
        kk.isReadyForSubMesh = ek
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(kk) {
        for (const ek of this._activePlugins) ek.prepareDefinesBeforeAttributes(kk.defines, this._scene, kk.mesh)
      }
      _handlePluginEventPrepareDefines(kk) {
        for (const ek of this._activePlugins) ek.prepareDefines(kk.defines, this._scene, kk.mesh)
      }
      _handlePluginEventHardBindForSubMesh(kk) {
        for (const ek of this._activePluginsForExtraEvents) ek.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, kk.subMesh)
      }
      _handlePluginEventBindForSubMesh(kk) {
        for (const ek of this._activePlugins) ek.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, kk.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(kk) {
        let ek = !1;
        for (const ik of this._activePluginsForExtraEvents)
          if (ek = ik.hasRenderTargetTextures(), ek) break;
        kk.hasRenderTargetTextures = ek
      }
      _handlePluginEventFillRenderTargetTextures(kk) {
        for (const ek of this._activePluginsForExtraEvents) ek.fillRenderTargetTextures(kk.renderTargets)
      }
      _handlePluginEvent(kk, ek) {
        switch (kk) {
          case 512: {
            const kk = ek;
            for (const ek of this._activePlugins) ek.getActiveTextures(kk.activeTextures);
            break
          }
          case 256: {
            const kk = ek;
            for (const ek of this._activePlugins) ek.getAnimatables(kk.animatables);
            break
          }
          case 1024: {
            const kk = ek;
            let ik = !1;
            for (const ek of this._activePlugins)
              if (ik = ek.hasTexture(kk.texture), ik) break;
            kk.hasTexture = ik;
            break
          }
          case 2: {
            const kk = ek;
            for (const ek of this._plugins) ek.dispose(kk.forceDisposeTextures);
            break
          }
          case 4:
            ek.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const kk = ek;
            for (const ek of this._activePlugins) kk.fallbackRank = ek.addFallbacks(kk.defines, kk.fallbacks, kk.fallbackRank), ek.getAttributes(kk.attributes, this._scene, kk.mesh);
            this._uniformList.length > 0 && kk.uniforms.push(...this._uniformList), this._samplerList.length > 0 && kk.samplers.push(...this._samplerList), this._uboList.length > 0 && kk.uniformBuffersNames.push(...this._uboList), kk.customCode = this._injectCustomCode(kk, kk.customCode);
            break
          }
          case 8: {
            const kk = ek;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const ik = 1 === this._material.shaderLanguage;
            for (const ek of this._plugins) {
              const Dk = ek.getUniforms(this._material.shaderLanguage);
              if (Dk) {
                if (Dk.ubo)
                  for (const ek of Dk.ubo) {
                    if (ek.size && ek.type) {
                      const Dk = ek.arraySize ?? 0;
                      if (kk.ubo.addUniform(ek.name, ek.size, Dk), ik) {
                        let kk;
                        switch (ek.type) {
                          case "mat4":
                            kk = "mat4x4f";
                            break;
                          case "float":
                            kk = "f32";
                            break;
                          default:
                            kk = `${ek.type}f`
                        }
                        this._uboDeclaration += Dk > 0 ? `uniform ${ek.name}: array<${kk}, ${Dk}>;\n` : `uniform ${ek.name}: ${kk};\n`
                      } else this._uboDeclaration += `${ek.type} ${ek.name}${Dk>0?`[${Dk}]`:""};\n`
                    }
                    this._uniformList.push(ek.name)
                  }
                Dk.vertex && (this._vertexDeclaration += Dk.vertex + "\n"), Dk.fragment && (this._fragmentDeclaration += Dk.fragment + "\n"), Dk.externalUniforms && this._uniformList.push(...Dk.externalUniforms)
              }
              ek.getSamplers(this._samplerList), ek.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(kk, ek) {
        if (ek)
          for (const ik in ek) this._codeInjectionPoints[kk] || (this._codeInjectionPoints[kk] = {}), this._codeInjectionPoints[kk][ik] = !0
      }
      _injectCustomCode(kk, ek) {
        return (ik, Dk) => {
          ek && (Dk = ek(ik, Dk)), this._uboDeclaration && (Dk = Dk.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Dk = Dk.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (Dk = Dk.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const fk = this._codeInjectionPoints?.[ik];
          if (!fk) return Dk;
          let Pk = null;
          for (let ek in fk) {
            let fk = "";
            for (const Dk of this._activePlugins) {
              const rk = this._material.shaderLanguage;
              let mk = Dk.getCustomCode(ik, rk)?.[ek];
              mk && (Dk.resolveIncludes && (null === Pk && (Pk = {
                defines: [],
                indexParameters: kk.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: bk.d.GetShadersRepository(rk),
                includesShadersStore: bk.d.GetIncludesShadersStore(rk),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                Xik: this._engine.Xik,
                processCodeAfterIncludes: void 0
              }), Pk.isFragment = "fragment" === ik, (0, Sk.i)(mk, Pk, (kk => mk = kk))), fk += mk + "\n")
            }
            if (fk.length > 0)
              if ("!" === ek.charAt(0)) {
                ek = ek.substring(1);
                let kk = "g";
                if ("!" === ek.charAt(0)) kk = "", ek = ek.substring(1);
                else {
                  const ik = rk.exec(ek);
                  ik && ik.length >= 2 && (kk = ik[1], ek = ek.substring(kk.length + 1))
                }
                kk.indexOf("g") < 0 && (kk += "g");
                const ik = new RegExp(ek, kk);
                let Sk = ik.exec(Dk);
                for (; null !== Sk;) {
                  const {
                    index: kk
                  } = Sk, ek = mk(fk, Sk);
                  Dk = Dk.substring(0, kk) + ek + Dk.substring(kk + Sk[0].length), ik.lastIndex = kk + ek.length, Sk = ik.exec(Dk)
                }
              } else {
                const kk = "#define " + ek;
                Dk = Dk.replace(kk, "\n" + fk + "\n" + kk)
              }
          }
          return Dk
        }
      }
    }
    Pk._MaterialPluginClassToMainDefine = {}, Pk._MaterialPluginCounter = 0;

    function mk(kk, ek) {
      return kk.replace(/\$(\d+)/g, ((kk, ik) => {
        const Dk = Number(ik);
        return Dk < ek.length ? ek[Dk] : ""
      }))
    }
    var Mk = ik(39585),
      Kk = ik(36734);
    let xk = (() => {
        var kk;
        let ek, ik, Sk, bk, rk = [],
          mk = [],
          Kk = [],
          xk = [],
          nk = [],
          Uk = [],
          Hk = [],
          wk = [];
        return kk = class {
          isCompatible(kk) {
            return 0 === kk
          }
          _enable(kk) {
            kk && this._pluginManager._activatePlugin(this)
          }
          constructor(kk, ek, ik, fk) {
            let Sk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              Mk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, Dk.e)(this, rk, void 0), this.priority = ((0, Dk.e)(this, mk), (0, Dk.e)(this, Kk, 500)), this.resolveIncludes = ((0, Dk.e)(this, xk), (0, Dk.e)(this, nk, !1)), this.registerForExtraEvents = ((0, Dk.e)(this, Uk), (0, Dk.e)(this, Hk, !1)), this.doNotSerialize = ((0, Dk.e)(this, wk), !1), this._material = kk, this.name = ek, this.priority = ik, this.resolveIncludes = Mk, kk.pluginManager || (kk.pluginManager = new Pk(kk), kk.ZF.add((() => {
              kk.pluginManager = void 0
            }))), this._pluginDefineNames = fk, this._pluginManager = kk.pluginManager, Sk && this._pluginManager._addPlugin(this), bk && this._enable(!0), this.markAllDefinesAsDirty = kk._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(kk, ek, ik, Dk) {
            return !0
          }
          hardBindForSubMesh(kk, ek, ik, Dk) {}
          bindForSubMesh(kk, ek, ik, Dk) {}
          dispose(kk) {}
          getCustomCode(kk) {
            return null
          }
          collectDefines(kk) {
            if (this._pluginDefineNames)
              for (const ek of Object.keys(this._pluginDefineNames)) {
                if ("_" === ek[0]) continue;
                const ik = typeof this._pluginDefineNames[ek];
                kk[ek] = {
                  type: "number" === ik ? "number" : "string" === ik ? "string" : "boolean" === ik ? "boolean" : "object",
                  default: this._pluginDefineNames[ek]
                }
              }
          }
          prepareDefinesBeforeAttributes(kk, ek, ik) {}
          prepareDefines(kk, ek, ik) {}
          hasTexture(kk) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(kk) {}
          getActiveTextures(kk) {}
          getAnimatables(kk) {}
          addFallbacks(kk, ek, ik) {
            return ik
          }
          getSamplers(kk) {}
          getAttributes(kk, ek, ik) {}
          getUniformBuffersNames(kk) {}
          getUniforms() {
            return {}
          }
          copyTo(kk) {
            Mk.b.Clone((() => kk), this)
          }
          serialize() {
            return Mk.b.Serialize(this)
          }
          parse(kk, ek, ik) {
            Mk.b.Parse((() => this), kk, ek, ik)
          }
        }, (() => {
          const Pk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ek = [(0, fk.I)()], ik = [(0, fk.I)()], Sk = [(0, fk.I)()], bk = [(0, fk.I)()], (0, Dk.d)(null, null, ek, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: kk => "name" in kk,
              get: kk => kk.name,
              set: (kk, ek) => {
                kk.name = ek
              }
            },
            metadata: Pk
          }, rk, mk), (0, Dk.d)(null, null, ik, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: kk => "priority" in kk,
              get: kk => kk.priority,
              set: (kk, ek) => {
                kk.priority = ek
              }
            },
            metadata: Pk
          }, Kk, xk), (0, Dk.d)(null, null, Sk, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: kk => "resolveIncludes" in kk,
              get: kk => kk.resolveIncludes,
              set: (kk, ek) => {
                kk.resolveIncludes = ek
              }
            },
            metadata: Pk
          }, nk, Uk), (0, Dk.d)(null, null, bk, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: kk => "registerForExtraEvents" in kk,
              get: kk => kk.registerForExtraEvents,
              set: (kk, ek) => {
                kk.registerForExtraEvents = ek
              }
            },
            metadata: Pk
          }, Hk, wk), Pk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Pk
          })
        })(), kk
      })(),
      nk = !1;

    function Uk() {
      nk || (nk = !0, (0, Kk.h)("BABYLON.MaterialPluginBase", xk))
    }
  },
  39842: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk
    });
    class Dk {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(kk) {
        kk.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(kk) {}
      bindForSubMesh(kk, ek, ik, Dk, fk) {
        if (ek.prePassRenderer && ek.prePassRenderer.enabled && ek.prePassRenderer.currentRTisSceneRT && (-1 !== ek.prePassRenderer.getIndex(2) || -1 !== ek.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[ik.uniqueId] || (this.previousWorldMatrices[ik.uniqueId] = Dk.clone()), this.previousViewProjection || (this.previousViewProjection = ek.getTransformMatrix().clone(), this.currentViewProjection = ek.getTransformMatrix().clone());
          const fk = ek.JU();
          this.currentViewProjection.updateFlag !== ek.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = fk.frameId, this.previousViewProjection.Fs(this.currentViewProjection), this.currentViewProjection.Fs(ek.getTransformMatrix())) : this._lastUpdateFrameId !== fk.frameId && (this._lastUpdateFrameId = fk.frameId, this.previousViewProjection.Fs(this.currentViewProjection)), kk.setMatrix("previousWorld", this.previousWorldMatrices[ik.uniqueId]), kk.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[ik.uniqueId] = Dk.clone()
        }
      }
    }
  },
  39984: (kk, ek, ik) => {
    function Dk(kk) {
      return class extends kk {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    ik.d(ek, {
      d: () => Dk
    })
  },
  39829: (kk, ek, ik) => {
    ik.d(ek, {
      StandardMaterial: () => Dk.f
    });
    var Dk = ik(39833);
    (0, Dk.d)()
  },
  39833: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Ek,
      f: () => Qk
    });
    var Dk = ik(39566),
      fk = ik(39570),
      Sk = ik(39672),
      bk = ik(39653),
      rk = ik(36874),
      Pk = ik(39708),
      mk = ik(39842),
      Mk = ik(39849),
      Kk = ik(39677),
      xk = ik(39861),
      nk = ik(39853),
      Uk = ik(39937),
      Hk = ik(39928),
      wk = ik(39946),
      lk = ik(39949),
      pk = ik(39919),
      yk = ik(39964),
      Yk = ik(39910),
      Lk = ik(39585),
      Ck = ik(39966),
      Ak = ik(39971),
      jk = ik(39975),
      sk = ik(39984),
      dk = ik(39993),
      Vk = ik(36734),
      Fk = ik(39447);
    const uk = {
      effect: null,
      subMesh: null
    };
    class qk extends((0, sk.d)((0, jk.d)(nk.d))) {}
    class Ik extends((0, Mk.e)(qk)) {
      constructor(kk) {
        super(kk), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class zk extends((0, dk.d)(Uk.c)) {}
    let Qk = (() => {
        var kk, ek, Mk, nk, jk, sk, dk, Vk, Fk, qk, Qk, vk, Ek, hk, ak, Wk, tk, Xk, Bk, ck, Tk, Zk, Ok, gk, Gk, Nk, Rk, Jk, ke, ee, ie, De, fe;
        let Se, be, re, Pe, me, Me, Ke, xe, ne, Ue, He, we, le, pe, ye, Ye, Le, Ce, Ae, je, se, de, Ve, Fe, ue, qe, Ie, ze, Qe, ve, Ee, he, ae, We, te, Xe, Be, ce, Te, oe, Ze, Oe, ge, Ge, Ne, Re, Je, ki, ei, ii, Di, fi, Si, bi, ri, Pi, mi, Mi, Ki, xi, ni, Ui, Hi, wi, li, yi, Yi, Li, Ci, Ai, ji, si, di, Vi = zk,
          Fi = [],
          ui = [],
          qi = [],
          Ii = [],
          zi = [],
          Qi = [],
          vi = [],
          Ei = [],
          ai = [],
          Wi = [],
          ti = [],
          Xi = [],
          Bi = [],
          ci = [],
          Ti = [],
          oi = [],
          Zi = [],
          Oi = [],
          gi = [],
          Gi = [],
          Ni = [],
          Ri = [],
          Ji = [],
          kD = [],
          eD = [],
          iD = [],
          DD = [],
          fD = [],
          SD = [],
          bD = [],
          rD = [],
          PD = [],
          mD = [],
          MD = [],
          KD = [],
          xD = [],
          nD = [],
          UD = [],
          HD = [],
          wD = [],
          lD = [],
          pD = [],
          yD = [],
          YD = [],
          LD = [],
          CD = [],
          AD = [],
          jD = [],
          sD = [],
          dD = [],
          VD = [],
          FD = [],
          uD = [],
          qD = [],
          ID = [],
          zD = [],
          QD = [],
          vD = [],
          ED = [],
          hD = [],
          aD = [],
          WD = [],
          tD = [],
          XD = [],
          BD = [],
          cD = [],
          TD = [],
          oD = [],
          ZD = [],
          OD = [],
          gD = [],
          GD = [],
          ND = [],
          RD = [],
          JD = [],
          kf = [],
          ef = [],
          Df = [],
          ff = [],
          Sf = [],
          bf = [],
          rf = [],
          Pf = [],
          mf = [],
          Mf = [],
          Kf = [],
          xf = [],
          nf = [],
          Uf = [],
          Hf = [],
          wf = [],
          lf = [],
          pf = [],
          yf = [],
          Yf = [],
          Lf = [],
          Cf = [],
          Af = [],
          jf = [],
          sf = [],
          df = [],
          Vf = [],
          Ff = [],
          uf = [],
          qf = [],
          If = [],
          zf = [],
          Qf = [],
          vf = [],
          Ef = [],
          hf = [],
          af = [],
          Wf = [],
          tf = [],
          Xf = [],
          Bf = [],
          Tf = [],
          of = [],
          Zf = [],
          Of = [],
          gf = [],
          Gf = [],
          Nf = [],
          Rf = [],
          Jf = [],
          kS = [],
          eS = [],
          iS = [],
          DS = [],
          fS = [],
          SS = [],
          bS = [],
          rS = [],
          PS = [],
          mS = [],
          MS = [],
          KS = [],
          xS = [],
          nS = [],
          US = [],
          HS = [],
          wS = [],
          lS = [],
          pS = [],
          yS = [],
          YS = [];
        return kk = class extends Vi {
          get diffuseTexture() {
            return (0, Dk.b)(this, ek, "f")
          }
          set diffuseTexture(kk) {
            (0, Dk.c)(this, ek, kk, "f")
          }
          get ambientTexture() {
            return (0, Dk.b)(this, Mk, "f")
          }
          set ambientTexture(kk) {
            (0, Dk.c)(this, Mk, kk, "f")
          }
          get opacityTexture() {
            return (0, Dk.b)(this, nk, "f")
          }
          set opacityTexture(kk) {
            (0, Dk.c)(this, nk, kk, "f")
          }
          get reflectionTexture() {
            return (0, Dk.b)(this, jk, "f")
          }
          set reflectionTexture(kk) {
            (0, Dk.c)(this, jk, kk, "f")
          }
          get emissiveTexture() {
            return (0, Dk.b)(this, sk, "f")
          }
          set emissiveTexture(kk) {
            (0, Dk.c)(this, sk, kk, "f")
          }
          get specularTexture() {
            return (0, Dk.b)(this, dk, "f")
          }
          set specularTexture(kk) {
            (0, Dk.c)(this, dk, kk, "f")
          }
          get bumpTexture() {
            return (0, Dk.b)(this, Vk, "f")
          }
          set bumpTexture(kk) {
            (0, Dk.c)(this, Vk, kk, "f")
          }
          get lightmapTexture() {
            return (0, Dk.b)(this, Fk, "f")
          }
          set lightmapTexture(kk) {
            (0, Dk.c)(this, Fk, kk, "f")
          }
          get refractionTexture() {
            return (0, Dk.b)(this, qk, "f")
          }
          set refractionTexture(kk) {
            (0, Dk.c)(this, qk, kk, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, Dk.b)(this, Qk, "f")
          }
          set useAlphaFromDiffuseTexture(kk) {
            (0, Dk.c)(this, Qk, kk, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, Dk.b)(this, vk, "f")
          }
          set useEmissiveAsIllumination(kk) {
            (0, Dk.c)(this, vk, kk, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, Dk.b)(this, Ek, "f")
          }
          set linkEmissiveWithDiffuse(kk) {
            (0, Dk.c)(this, Ek, kk, "f")
          }
          get useSpecularOverAlpha() {
            return (0, Dk.b)(this, hk, "f")
          }
          set useSpecularOverAlpha(kk) {
            (0, Dk.c)(this, hk, kk, "f")
          }
          get useReflectionOverAlpha() {
            return (0, Dk.b)(this, ak, "f")
          }
          set useReflectionOverAlpha(kk) {
            (0, Dk.c)(this, ak, kk, "f")
          }
          get disableLighting() {
            return (0, Dk.b)(this, Wk, "f")
          }
          set disableLighting(kk) {
            (0, Dk.c)(this, Wk, kk, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, Dk.b)(this, tk, "f")
          }
          set useObjectSpaceNormalMap(kk) {
            (0, Dk.c)(this, tk, kk, "f")
          }
          get useParallax() {
            return (0, Dk.b)(this, Xk, "f")
          }
          set useParallax(kk) {
            (0, Dk.c)(this, Xk, kk, "f")
          }
          get useParallaxOcclusion() {
            return (0, Dk.b)(this, Bk, "f")
          }
          set useParallaxOcclusion(kk) {
            (0, Dk.c)(this, Bk, kk, "f")
          }
          get roughness() {
            return (0, Dk.b)(this, ck, "f")
          }
          set roughness(kk) {
            (0, Dk.c)(this, ck, kk, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, Dk.b)(this, Tk, "f")
          }
          set useLightmapAsShadowmap(kk) {
            (0, Dk.c)(this, Tk, kk, "f")
          }
          get diffuseFresnelParameters() {
            return (0, Dk.b)(this, Zk, "f")
          }
          set diffuseFresnelParameters(kk) {
            (0, Dk.c)(this, Zk, kk, "f")
          }
          get opacityFresnelParameters() {
            return (0, Dk.b)(this, Ok, "f")
          }
          set opacityFresnelParameters(kk) {
            (0, Dk.c)(this, Ok, kk, "f")
          }
          get reflectionFresnelParameters() {
            return (0, Dk.b)(this, gk, "f")
          }
          set reflectionFresnelParameters(kk) {
            (0, Dk.c)(this, gk, kk, "f")
          }
          get refractionFresnelParameters() {
            return (0, Dk.b)(this, Gk, "f")
          }
          set refractionFresnelParameters(kk) {
            (0, Dk.c)(this, Gk, kk, "f")
          }
          get emissiveFresnelParameters() {
            return (0, Dk.b)(this, Nk, "f")
          }
          set emissiveFresnelParameters(kk) {
            (0, Dk.c)(this, Nk, kk, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, Dk.b)(this, Rk, "f")
          }
          set useReflectionFresnelFromSpecular(kk) {
            (0, Dk.c)(this, Rk, kk, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, Dk.b)(this, Jk, "f")
          }
          set useGlossinessFromSpecularMapAlpha(kk) {
            (0, Dk.c)(this, Jk, kk, "f")
          }
          get maxSimultaneousLights() {
            return (0, Dk.b)(this, ke, "f")
          }
          set maxSimultaneousLights(kk) {
            (0, Dk.c)(this, ke, kk, "f")
          }
          get invertNormalMapX() {
            return (0, Dk.b)(this, ee, "f")
          }
          set invertNormalMapX(kk) {
            (0, Dk.c)(this, ee, kk, "f")
          }
          get invertNormalMapY() {
            return (0, Dk.b)(this, ie, "f")
          }
          set invertNormalMapY(kk) {
            (0, Dk.c)(this, ie, kk, "f")
          }
          get twoSidedLighting() {
            return (0, Dk.b)(this, De, "f")
          }
          set twoSidedLighting(kk) {
            (0, Dk.c)(this, De, kk, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Dk.b)(this, fe, "f")
          }
          set applyDecalMapAfterDetailMap(kk) {
            (0, Dk.c)(this, fe, kk, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(ik, fk) {
            super(ik, fk, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || kk.ForceGLSL), this._diffuseTexture = (0, Dk.e)(this, Fi, null), ek.set(this, ((0, Dk.e)(this, ui), (0, Dk.e)(this, qi, void 0))), this._ambientTexture = ((0, Dk.e)(this, Ii), (0, Dk.e)(this, zi, null)), Mk.set(this, ((0, Dk.e)(this, Qi), (0, Dk.e)(this, vi, void 0))), this._opacityTexture = ((0, Dk.e)(this, Ei), (0, Dk.e)(this, ai, null)), nk.set(this, ((0, Dk.e)(this, Wi), (0, Dk.e)(this, ti, void 0))), this._reflectionTexture = ((0, Dk.e)(this, Xi), (0, Dk.e)(this, Bi, null)), jk.set(this, ((0, Dk.e)(this, ci), (0, Dk.e)(this, Ti, void 0))), this._emissiveTexture = ((0, Dk.e)(this, oi), (0, Dk.e)(this, Zi, null)), sk.set(this, ((0, Dk.e)(this, Oi), (0, Dk.e)(this, gi, void 0))), this._specularTexture = ((0, Dk.e)(this, Gi), (0, Dk.e)(this, Ni, null)), dk.set(this, ((0, Dk.e)(this, Ri), (0, Dk.e)(this, Ji, void 0))), this._bumpTexture = ((0, Dk.e)(this, kD), (0, Dk.e)(this, eD, null)), Vk.set(this, ((0, Dk.e)(this, iD), (0, Dk.e)(this, DD, void 0))), this._lightmapTexture = ((0, Dk.e)(this, fD), (0, Dk.e)(this, SD, null)), Fk.set(this, ((0, Dk.e)(this, bD), (0, Dk.e)(this, rD, void 0))), this._refractionTexture = ((0, Dk.e)(this, PD), (0, Dk.e)(this, mD, null)), qk.set(this, ((0, Dk.e)(this, MD), (0, Dk.e)(this, KD, void 0))), this.ambientColor = ((0, Dk.e)(this, xD), (0, Dk.e)(this, nD, new rk.e(0, 0, 0))), this.diffuseColor = ((0, Dk.e)(this, UD), (0, Dk.e)(this, HD, new rk.e(1, 1, 1))), this.specularColor = ((0, Dk.e)(this, wD), (0, Dk.e)(this, lD, new rk.e(1, 1, 1))), this.emissiveColor = ((0, Dk.e)(this, pD), (0, Dk.e)(this, yD, new rk.e(0, 0, 0))), this.specularPower = ((0, Dk.e)(this, YD), (0, Dk.e)(this, LD, 64)), this._useAlphaFromDiffuseTexture = ((0, Dk.e)(this, CD), (0, Dk.e)(this, AD, !1)), Qk.set(this, ((0, Dk.e)(this, jD), (0, Dk.e)(this, sD, void 0))), this._useEmissiveAsIllumination = ((0, Dk.e)(this, dD), (0, Dk.e)(this, VD, !1)), vk.set(this, ((0, Dk.e)(this, FD), (0, Dk.e)(this, uD, void 0))), this._linkEmissiveWithDiffuse = ((0, Dk.e)(this, qD), (0, Dk.e)(this, ID, !1)), Ek.set(this, ((0, Dk.e)(this, zD), (0, Dk.e)(this, QD, void 0))), this._useSpecularOverAlpha = ((0, Dk.e)(this, vD), (0, Dk.e)(this, ED, !1)), hk.set(this, ((0, Dk.e)(this, hD), (0, Dk.e)(this, aD, void 0))), this._useReflectionOverAlpha = ((0, Dk.e)(this, WD), (0, Dk.e)(this, tD, !1)), ak.set(this, ((0, Dk.e)(this, XD), (0, Dk.e)(this, BD, void 0))), this._disableLighting = ((0, Dk.e)(this, cD), (0, Dk.e)(this, TD, !1)), Wk.set(this, ((0, Dk.e)(this, oD), (0, Dk.e)(this, ZD, void 0))), this._useObjectSpaceNormalMap = ((0, Dk.e)(this, OD), (0, Dk.e)(this, gD, !1)), tk.set(this, ((0, Dk.e)(this, GD), (0, Dk.e)(this, ND, void 0))), this._useParallax = ((0, Dk.e)(this, RD), (0, Dk.e)(this, JD, !1)), Xk.set(this, ((0, Dk.e)(this, kf), (0, Dk.e)(this, ef, void 0))), this._useParallaxOcclusion = ((0, Dk.e)(this, Df), (0, Dk.e)(this, ff, !1)), Bk.set(this, ((0, Dk.e)(this, Sf), (0, Dk.e)(this, bf, void 0))), this.parallaxScaleBias = ((0, Dk.e)(this, rf), (0, Dk.e)(this, Pf, .05)), this._roughness = ((0, Dk.e)(this, mf), (0, Dk.e)(this, Mf, 0)), ck.set(this, ((0, Dk.e)(this, Kf), (0, Dk.e)(this, xf, void 0))), this.indexOfRefraction = ((0, Dk.e)(this, nf), (0, Dk.e)(this, Uf, .98)), this.invertRefractionY = ((0, Dk.e)(this, Hf), (0, Dk.e)(this, wf, !0)), this.alphaCutOff = ((0, Dk.e)(this, lf), (0, Dk.e)(this, pf, .4)), this._useLightmapAsShadowmap = ((0, Dk.e)(this, yf), (0, Dk.e)(this, Yf, !1)), Tk.set(this, ((0, Dk.e)(this, Lf), (0, Dk.e)(this, Cf, void 0))), this._diffuseFresnelParameters = ((0, Dk.e)(this, Af), (0, Dk.e)(this, jf, void 0)), Zk.set(this, ((0, Dk.e)(this, sf), (0, Dk.e)(this, df, void 0))), this._opacityFresnelParameters = ((0, Dk.e)(this, Vf), (0, Dk.e)(this, Ff, void 0)), Ok.set(this, ((0, Dk.e)(this, uf), (0, Dk.e)(this, qf, void 0))), this._reflectionFresnelParameters = ((0, Dk.e)(this, If), (0, Dk.e)(this, zf, void 0)), gk.set(this, ((0, Dk.e)(this, Qf), (0, Dk.e)(this, vf, void 0))), this._refractionFresnelParameters = ((0, Dk.e)(this, Ef), (0, Dk.e)(this, hf, void 0)), Gk.set(this, ((0, Dk.e)(this, af), (0, Dk.e)(this, Wf, void 0))), this._emissiveFresnelParameters = ((0, Dk.e)(this, tf), (0, Dk.e)(this, Xf, void 0)), Nk.set(this, ((0, Dk.e)(this, Bf), (0, Dk.e)(this, Tf, void 0))), this._useReflectionFresnelFromSpecular = ((0, Dk.e)(this, of), (0, Dk.e)(this, Zf, !1)), Rk.set(this, ((0, Dk.e)(this, Of), (0, Dk.e)(this, gf, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, Dk.e)(this, Gf), (0, Dk.e)(this, Nf, !1)), Jk.set(this, ((0, Dk.e)(this, Rf), (0, Dk.e)(this, Jf, void 0))), this._maxSimultaneousLights = ((0, Dk.e)(this, kS), (0, Dk.e)(this, eS, 4)), ke.set(this, ((0, Dk.e)(this, iS), (0, Dk.e)(this, DS, void 0))), this._invertNormalMapX = ((0, Dk.e)(this, fS), (0, Dk.e)(this, SS, !1)), ee.set(this, ((0, Dk.e)(this, bS), (0, Dk.e)(this, rS, void 0))), this._invertNormalMapY = ((0, Dk.e)(this, PS), (0, Dk.e)(this, mS, !1)), ie.set(this, ((0, Dk.e)(this, MS), (0, Dk.e)(this, KS, void 0))), this._twoSidedLighting = ((0, Dk.e)(this, xS), (0, Dk.e)(this, nS, !1)), De.set(this, ((0, Dk.e)(this, US), (0, Dk.e)(this, HS, void 0))), this._applyDecalMapAfterDetailMap = ((0, Dk.e)(this, wS), (0, Dk.e)(this, lS, !1)), fe.set(this, ((0, Dk.e)(this, pS), (0, Dk.e)(this, yS, void 0))), this._vertexPullingMetadata = ((0, Dk.e)(this, YS), null), this._renderTargets = new Sk.h(16), this._globalAmbientColor = new rk.e(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new lk.e(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new mk.c, this.getRenderTargetTextures = () => (this._renderTargets.reset(), kk.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), kk.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
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
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === xk.e.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== xk.e.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(ek, ik) {
            let Dk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const fk = ik._drawWrapper;
            if (fk.effect && this.isFrozen && fk._wasPreviouslyReady && fk._wasPreviouslyUsingInstances === Dk) return !0;
            ik.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), ik.materialDefines = new Ik(this._eventInfo.defineNames));
            const Sk = this.XF(),
              bk = ik.materialDefines;
            if (this._isReadyForSubMesh(ik)) return !0;
            const rk = Sk.JU();
            if (bk._needNormals = (0, Yk.mb)(Sk, ek, bk, !0, this._maxSimultaneousLights, this._disableLighting), !(0, Yk.b)(Sk, ek, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, Yk.vb)(Sk, bk);
            const Mk = this.needAlphaBlendingForMesh(ek) && this.XF().useOrderIndependentTransparency;
            if ((0, Yk.xb)(Sk, bk, this.canRenderToMRT && !Mk), (0, Yk.wb)(Sk, bk, Mk), Ak.e.PrepareDefines(rk.currentRenderPassId, ek, bk), bk._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, bk._needUVs = !1;
              for (let kk = 1; kk <= 6; ++kk) bk["MAINUV" + kk] = !1;
              if (Sk.texturesEnabled) {
                if (bk.DIFFUSEDIRECTUV = 0, bk.BUMPDIRECTUV = 0, bk.AMBIENTDIRECTUV = 0, bk.OPACITYDIRECTUV = 0, bk.EMISSIVEDIRECTUV = 0, bk.SPECULARDIRECTUV = 0, bk.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && kk.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, Yk.qb)(this._diffuseTexture, bk, "DIFFUSE")
                } else bk.DIFFUSE = !1;
                if (this._ambientTexture && kk.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, Yk.qb)(this._ambientTexture, bk, "AMBIENT")
                } else bk.AMBIENT = !1;
                if (this._opacityTexture && kk.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, Yk.qb)(this._opacityTexture, bk, "OPACITY"), bk.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else bk.OPACITY = !1;
                if (this._reflectionTexture && kk.ReflectionTextureEnabled ? (bk.ROUGHNESS = this._roughness > 0, bk.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (bk.ROUGHNESS = !1, bk.REFLECTIONOVERALPHA = !1), !(0, Yk.jb)(Sk, this._reflectionTexture, bk)) return !1;
                if (this._emissiveTexture && kk.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, Yk.qb)(this._emissiveTexture, bk, "EMISSIVE")
                } else bk.EMISSIVE = !1;
                if (this._lightmapTexture && kk.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, Yk.qb)(this._lightmapTexture, bk, "LIGHTMAP"), bk.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, bk.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else bk.LIGHTMAP = !1;
                if (this._specularTexture && kk.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, Yk.qb)(this._specularTexture, bk, "SPECULAR"), bk.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else bk.SPECULAR = !1;
                if (Sk.JU().getCaps().standardDerivatives && this._bumpTexture && kk.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, Yk.qb)(this._bumpTexture, bk, "BUMP"), bk.PARALLAX = this._useParallax, bk.PARALLAX_RHS = Sk.useRightHandedSystem, bk.PARALLAXOCCLUSION = this._useParallaxOcclusion, bk.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else bk.BUMP = !1, bk.PARALLAX = !1, bk.PARALLAX_RHS = !1, bk.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && kk.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  bk._needUVs = !0, bk.REFRACTION = !0, bk.REFRACTIONMAP_3D = this._refractionTexture.isCube, bk.RGBDREFRACTION = this._refractionTexture.isRGBD, bk.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else bk.REFRACTION = !1;
                bk.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else bk.DIFFUSE = !1, bk.AMBIENT = !1, bk.OPACITY = !1, bk.REFLECTION = !1, bk.EMISSIVE = !1, bk.LIGHTMAP = !1, bk.BUMP = !1, bk.REFRACTION = !1;
              bk.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), bk.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, bk.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, bk.SPECULAROVERALPHA = this._useSpecularOverAlpha, bk.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, bk.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, bk.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(ek), bk.TEXTURE_REPETITION_MODE = rk.version > 1 || rk.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = bk, this._eventInfo.subMesh = ik, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (bk._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(bk), bk.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, bk.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (bk._areFresnelDirty && (kk.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (bk.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, bk.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, bk.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, bk.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, bk.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, bk.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, bk._needNormals = !0, bk.FRESNEL = !0) : bk.FRESNEL = !1), bk.AREALIGHTUSED || bk.CLUSTLIGHT_BATCH)
              for (let kk = 0; kk < ek.lightSources.length; kk++)
                if (!ek.lightSources[kk]._isReady()) return !1;
            (0, Yk.tb)(ek, Sk, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(ek), bk, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ik.getRenderingMesh(), this._isVertexOutputInvariant), (0, Yk.hb)(Sk, rk, this, bk, Dk, null, ik.getRenderingMesh().hasThinInstances), this._eventInfo.defines = bk, this._eventInfo.mesh = ek, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Yk.db)(ek, bk, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let xk = !1;
            if (bk.isDirty) {
              const Dk = bk._areLightsDisposed;
              bk.markAsProcessed();
              const fk = new wk.b;
              bk.REFLECTION && fk.addFallback(0, "REFLECTION"), bk.SPECULAR && fk.addFallback(0, "SPECULAR"), bk.BUMP && fk.addFallback(0, "BUMP"), bk.PARALLAX && fk.addFallback(1, "PARALLAX"), bk.PARALLAX_RHS && fk.addFallback(1, "PARALLAX_RHS"), bk.PARALLAXOCCLUSION && fk.addFallback(0, "PARALLAXOCCLUSION"), bk.SPECULAROVERALPHA && fk.addFallback(0, "SPECULAROVERALPHA"), bk.FOG && fk.addFallback(1, "FOG"), bk.POINTSIZE && fk.addFallback(0, "POINTSIZE"), bk.LOGARITHMICDEPTH && fk.addFallback(0, "LOGARITHMICDEPTH"), (0, Yk.J)(bk, fk, this._maxSimultaneousLights), bk.SPECULARTERM && fk.addFallback(0, "SPECULARTERM"), bk.DIFFUSEFRESNEL && fk.addFallback(1, "DIFFUSEFRESNEL"), bk.OPACITYFRESNEL && fk.addFallback(2, "OPACITYFRESNEL"), bk.REFLECTIONFRESNEL && fk.addFallback(3, "REFLECTIONFRESNEL"), bk.EMISSIVEFRESNEL && fk.addFallback(4, "EMISSIVEFRESNEL"), bk.FRESNEL && fk.addFallback(4, "FRESNEL"), bk.MULTIVIEW && fk.addFallback(0, "MULTIVIEW");
              const Mk = [Pk.e.PositionKind];
              bk.NORMAL && Mk.push(Pk.e.NormalKind), bk.TANGENT && Mk.push(Pk.e.TangentKind);
              for (let kk = 1; kk <= 6; ++kk) bk["UV" + kk] && Mk.push(`uv${1===kk?"":kk}`);
              bk.VERTEXCOLOR && Mk.push(Pk.e.ColorKind), (0, Yk.P)(Mk, ek, bk, fk), (0, Yk.T)(Mk, bk), (0, Yk.X)(Mk, ek, bk), (0, Yk.L)(Mk, ek, bk);
              let nk = "default";
              const Uk = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                Hk = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, Yk.Cb)(Uk, Hk, !1);
              const lk = ["Material", "Scene", "Mesh"],
                Lk = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: bk.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = fk, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = bk, this._eventInfo.uniforms = Uk, this._eventInfo.attributes = Mk, this._eventInfo.samplers = Hk, this._eventInfo.uniformBuffersNames = lk, this._eventInfo.customCode = void 0, this._eventInfo.mesh = ek, this._eventInfo.indexParameters = Lk, this._callbackPluginEventGeneric(128, this._eventInfo), Ak.e.AddUniformsAndSamplers(Uk, Hk), mk.c.AddUniforms(Uk), mk.c.AddSamplers(Hk), Kk.b && (Kk.b.PrepareUniforms(Uk, bk), Kk.b.PrepareSamplers(Hk, bk)), (0, Yk.Db)({
                  uniformsNames: Uk,
                  uniformBuffersNames: lk,
                  samplers: Hk,
                  defines: bk,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, pk.d)(Uk), this._useVertexPulling) {
                const kk = ik.getRenderingMesh(),
                  ek = kk?.geometry;
                ek && (this._vertexPullingMetadata = (0, yk.f)(ek), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((kk, ek) => {
                  Uk.push(`vp_${ek}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const Ck = {};
              this.customShaderNameResolve && (nk = this.customShaderNameResolve(nk, Uk, lk, Hk, bk, Mk, Ck));
              const jk = bk.toString(),
                sk = ik.effect,
                dk = Sk.JU().createEffect(nk, {
                  attributes: Mk,
                  uniformsNames: Uk,
                  uniformBuffersNames: lk,
                  samplers: Hk,
                  defines: jk,
                  fallbacks: fk,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: Lk,
                  processFinalCode: Ck.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: bk.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: kk._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, rk);
              if (this._eventInfo.customCode = void 0, dk)
                if (this._onEffectCreatedObservable && (uk.effect = dk, uk.subMesh = ik, this._onEffectCreatedObservable.notifyObservers(uk)), this.allowShaderHotSwapping && sk && !dk.isReady()) {
                  if (bk.markAsUnprocessed(), xk = this.isFrozen, Dk) return bk._areLightsDisposed = !0, !1
                } else Sk.resetCachedMaterial(), ik.setEffect(dk, bk, this._materialContext)
            }
            return !(!ik.effect || !ik.effect.isReady()) && (bk._renderId = Sk.getRenderId(), fk._wasPreviouslyReady = !xk, fk._wasPreviouslyUsingInstances = Dk, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const kk = this._uniformBuffer;
            kk.addUniform("diffuseLeftColor", 4), kk.addUniform("diffuseRightColor", 4), kk.addUniform("opacityParts", 4), kk.addUniform("reflectionLeftColor", 4), kk.addUniform("reflectionRightColor", 4), kk.addUniform("refractionLeftColor", 4), kk.addUniform("refractionRightColor", 4), kk.addUniform("emissiveLeftColor", 4), kk.addUniform("emissiveRightColor", 4), kk.addUniform("vDiffuseInfos", 2), kk.addUniform("vAmbientInfos", 2), kk.addUniform("vOpacityInfos", 2), kk.addUniform("vEmissiveInfos", 2), kk.addUniform("vLightmapInfos", 2), kk.addUniform("vSpecularInfos", 2), kk.addUniform("vBumpInfos", 3), kk.addUniform("diffuseMatrix", 16), kk.addUniform("ambientMatrix", 16), kk.addUniform("opacityMatrix", 16), kk.addUniform("emissiveMatrix", 16), kk.addUniform("lightmapMatrix", 16), kk.addUniform("specularMatrix", 16), kk.addUniform("bumpMatrix", 16), kk.addUniform("vTangentSpaceParams", 2), kk.addUniform("pointSize", 1), kk.addUniform("alphaCutOff", 1), kk.addUniform("refractionMatrix", 16), kk.addUniform("vRefractionInfos", 4), kk.addUniform("vRefractionPosition", 3), kk.addUniform("vRefractionSize", 3), kk.addUniform("vSpecularColor", 4), kk.addUniform("vEmissiveColor", 3), kk.addUniform("vDiffuseColor", 4), kk.addUniform("vAmbientColor", 3), kk.addUniform("cameraInfo", 4), kk.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Yk.Bb)(kk, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(ek, ik, Dk) {
            const fk = this.XF(),
              Sk = Dk.materialDefines;
            if (!Sk) return;
            const Pk = Dk.effect;
            if (!Pk) return;
            this._activeEffect = Pk, ik.getMeshUniformBuffer().bindToEffect(Pk, "Mesh"), ik.transferToEffect(ek), this._uniformBuffer.bindToEffect(Pk, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, fk, ik, ek, this.isFrozen), Ak.e.Bind(fk.JU().currentRenderPassId, this._activeEffect, ik, ek, this);
            const mk = fk.activeCamera;
            mk ? this._uniformBuffer.updateFloat4("cameraInfo", mk.minZ, mk.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Mk = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Mk[0], Mk[1], Mk[2], Mk[3]), this._eventInfo.subMesh = Dk, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Sk.OBJECTSPACE_NORMALMAP && (ek.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Kk = this._mustRebind(fk, Pk, Dk, ik.visibility),
              xk = fk.JU()._features.needToAlwaysBindUniformBuffers;
            (0, Yk.f)(ik, Pk), this._vertexPullingMetadata && (0, yk.b)(Pk, this._vertexPullingMetadata);
            const nk = this._uniformBuffer;
            if (Kk) {
              if (this.bindViewProjection(Pk), !nk.useUbo || !this.isFrozen || !nk.isSync || Dk._drawWrapper._forceRebindOnNextCall) {
                if (kk.FresnelEnabled && Sk.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (nk.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), nk.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const kk = rk.k.Color3[0];
                    kk.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), nk.updateColor4("opacityParts", kk, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (nk.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), nk.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (nk.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), nk.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (nk.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), nk.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (Sk.ALPHATEST && nk.updateFloat("alphaCutOff", this.alphaCutOff), fk.texturesEnabled && (this._diffuseTexture && kk.DiffuseTextureEnabled && (nk.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, Yk.G)(this._diffuseTexture, nk, "diffuse")), this._ambientTexture && kk.AmbientTextureEnabled && (nk.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, Yk.G)(this._ambientTexture, nk, "ambient")), this._opacityTexture && kk.OpacityTextureEnabled && (nk.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Yk.G)(this._opacityTexture, nk, "opacity")), (0, Yk.m)(fk, Sk, nk, rk.e.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && kk.ReflectionTextureEnabled || nk.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && kk.EmissiveTextureEnabled && (nk.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Yk.G)(this._emissiveTexture, nk, "emissive")), this._lightmapTexture && kk.LightmapTextureEnabled && (nk.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Yk.G)(this._lightmapTexture, nk, "lightmap")), this._specularTexture && kk.SpecularTextureEnabled && (nk.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, Yk.G)(this._specularTexture, nk, "specular")), this._bumpTexture && fk.JU().getCaps().standardDerivatives && kk.BumpTextureEnabled && (nk.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, Yk.G)(this._bumpTexture, nk, "bump"), fk._mirroredCameraPosition ? nk.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : nk.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && kk.RefractionTextureEnabled)) {
                  let kk = 1;
                  if (this._refractionTexture.isCube || (nk.N7("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (kk = this._refractionTexture.depth)), nk.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, kk, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const kk = this._refractionTexture;
                    nk.updateVector3("vRefractionPosition", kk.boundingBoxPosition), nk.updateVector3("vRefractionSize", kk.boundingBoxSize)
                  }
                }
                this.pointsCloud && nk.updateFloat("pointSize", this.pointSize), nk.updateColor4("vSpecularColor", this.specularColor, this.specularPower), nk.updateColor3("vEmissiveColor", kk.EmissiveTextureEnabled ? this.emissiveColor : rk.e.BlackReadOnly), nk.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), fk.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), nk.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              fk.texturesEnabled && (this._diffuseTexture && kk.DiffuseTextureEnabled && Pk.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && kk.AmbientTextureEnabled && Pk.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && kk.OpacityTextureEnabled && Pk.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && kk.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? Pk.setTexture("reflectionCubeSampler", this._reflectionTexture) : Pk.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && kk.EmissiveTextureEnabled && Pk.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && kk.LightmapTextureEnabled && Pk.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && kk.SpecularTextureEnabled && Pk.setTexture("specularSampler", this._specularTexture), this._bumpTexture && fk.JU().getCaps().standardDerivatives && kk.BumpTextureEnabled && Pk.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && kk.RefractionTextureEnabled && (this._refractionTexture.isCube ? Pk.setTexture("refractionCubeSampler", this._refractionTexture) : Pk.setTexture("refraction2DSampler", this._refractionTexture))), this.XF().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(ik) && this.XF().depthPeelingRenderer.bind(Pk), this._eventInfo.subMesh = Dk, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, pk.g)(Pk, this, fk), this.bindEyePosition(Pk)
            } else xk && (this._needToBindSceneUbo = !0);
            !Kk && this.isFrozen && !xk || !fk.lightsEnabled || this._disableLighting || (0, Yk.r)(fk, ik, Pk, Sk, this._maxSimultaneousLights), !Kk && this.isFrozen || ((fk.fogEnabled && ik.applyFog && fk.fogMode !== bk.f.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || ik.receiveShadows || Sk.PREPASS || Sk.CLUSTLIGHT_BATCH) && this.bindView(Pk), (0, Yk.i)(fk, ik, Pk), Sk.NUM_MORPH_INFLUENCERS && (0, Yk.y)(ik, Pk), Sk.BAKED_VERTEX_ANIMATION_TEXTURE && ik.bakedVertexAnimationManager?.bind(Pk, Sk.INSTANCES), this.useLogarithmicDepth && (0, Yk.u)(Sk, Pk, fk), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(ik, this._activeEffect, Dk), nk.update()
          }
          _canBindRunFollower(ek, ik, Dk, fk, Sk) {
            const bk = ek.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === kk.prototype.isReadyForSubMesh && this.bindForSubMesh === kk.prototype.bindForSubMesh && this._mustRebind === Uk.c.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !ik._features.needToAlwaysBindUniformBuffers && !(bk && bk.enabled && bk.currentRTisSceneRT) && !Ak.e._Configurations[ik.currentRenderPassId] && !fk.materialDefines?.OBJECTSPACE_NORMALMAP && !Dk.skeleton && !Sk._bonesComputationForcedToCPU
          }
          _bindRunFollower(kk, ek, ik, Dk) {
            this._activeEffect = Dk, ek.getMeshUniformBuffer().bindToEffect(Dk, "Mesh"), ek.transferToEffect(kk);
            const fk = this._uniformBuffer;
            fk.bindToEffect(Dk, "Material");
            const Sk = this._scene.activeCamera;
            Sk ? fk.updateFloat4("cameraInfo", Sk.minZ, Sk.maxZ, 0, 0) : fk.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const bk = this.textureRepetitionHexTilingParams;
            fk.updateFloat4("vTextureRepetitionHexTilingParams", bk[0], bk[1], bk[2], bk[3]), this._afterBind(ek, Dk, ik), fk.update()
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
          dispose(kk, ek) {
            ek && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(kk, ek)
          }
          clone(ek) {
            let ik = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const fk = Lk.b.Clone((() => new kk(ek, this.XF())), this, {
              cloneTexturesOnlyOnce: ik
            });
            return fk.name = ek, fk.id = ek, this.stencil.copyTo(fk.stencil), this._clonePlugins(fk, Dk), fk
          }
          static Parse(ek, ik, Dk) {
            const fk = Lk.b.Parse((() => new kk(ek.name, ik)), ek, ik, Dk);
            return ek.stencil && fk.stencil.parse(ek.stencil, ik, Dk), xk.e._ParsePlugins(ek, fk, ik, Dk), fk
          }
          static get DiffuseTextureEnabled() {
            return Hk.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(kk) {
            Hk.e.DiffuseTextureEnabled = kk
          }
          static get DetailTextureEnabled() {
            return Hk.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(kk) {
            Hk.e.DetailTextureEnabled = kk
          }
          static get AmbientTextureEnabled() {
            return Hk.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(kk) {
            Hk.e.AmbientTextureEnabled = kk
          }
          static get OpacityTextureEnabled() {
            return Hk.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(kk) {
            Hk.e.OpacityTextureEnabled = kk
          }
          static get ReflectionTextureEnabled() {
            return Hk.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(kk) {
            Hk.e.ReflectionTextureEnabled = kk
          }
          static get EmissiveTextureEnabled() {
            return Hk.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(kk) {
            Hk.e.EmissiveTextureEnabled = kk
          }
          static get SpecularTextureEnabled() {
            return Hk.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(kk) {
            Hk.e.SpecularTextureEnabled = kk
          }
          static get BumpTextureEnabled() {
            return Hk.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(kk) {
            Hk.e.BumpTextureEnabled = kk
          }
          static get LightmapTextureEnabled() {
            return Hk.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(kk) {
            Hk.e.LightmapTextureEnabled = kk
          }
          static get RefractionTextureEnabled() {
            return Hk.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(kk) {
            Hk.e.RefractionTextureEnabled = kk
          }
          static get ColorGradingTextureEnabled() {
            return Hk.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(kk) {
            Hk.e.ColorGradingTextureEnabled = kk
          }
          static get FresnelEnabled() {
            return Hk.e.FresnelEnabled
          }
          static set FresnelEnabled(kk) {
            Hk.e.FresnelEnabled = kk
          }
        }, ek = new WeakMap, Mk = new WeakMap, nk = new WeakMap, jk = new WeakMap, sk = new WeakMap, dk = new WeakMap, Vk = new WeakMap, Fk = new WeakMap, qk = new WeakMap, Qk = new WeakMap, vk = new WeakMap, Ek = new WeakMap, hk = new WeakMap, ak = new WeakMap, Wk = new WeakMap, tk = new WeakMap, Xk = new WeakMap, Bk = new WeakMap, ck = new WeakMap, Tk = new WeakMap, Zk = new WeakMap, Ok = new WeakMap, gk = new WeakMap, Gk = new WeakMap, Nk = new WeakMap, Rk = new WeakMap, Jk = new WeakMap, ke = new WeakMap, ee = new WeakMap, ie = new WeakMap, De = new WeakMap, fe = new WeakMap, (() => {
          const ek = "function" === typeof Symbol && Symbol.metadata ? Object.create(Vi[Symbol.metadata] ?? null) : void 0;
          Se = [(0, fk.z)("diffuseTexture")], be = [(0, fk.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], re = [(0, fk.z)("ambientTexture")], Pe = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], me = [(0, fk.z)("opacityTexture")], Me = [(0, fk.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ke = [(0, fk.z)("reflectionTexture")], xe = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], ne = [(0, fk.z)("emissiveTexture")], Ue = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], He = [(0, fk.z)("specularTexture")], we = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], le = [(0, fk.z)("bumpTexture")], pe = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], ye = [(0, fk.z)("lightmapTexture")], Ye = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], Le = [(0, fk.z)("refractionTexture")], Ce = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], Ae = [(0, fk.k)("ambient")], je = [(0, fk.k)("diffuse")], se = [(0, fk.k)("specular")], de = [(0, fk.k)("emissive")], Ve = [(0, fk.I)()], Fe = [(0, fk.I)("useAlphaFromDiffuseTexture")], ue = [() => ({
            init(kk) {
              return void 0 === kk && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = kk), kk
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(kk) {
              this._useAlphaFromDiffuseTexture = kk
            }
          })], qe = [(0, fk.I)("useEmissiveAsIllumination")], Ie = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], ze = [(0, fk.I)("linkEmissiveWithDiffuse")], Qe = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], ve = [(0, fk.I)("useSpecularOverAlpha")], Ee = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], he = [(0, fk.I)("useReflectionOverAlpha")], ae = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], We = [(0, fk.I)("disableLighting")], te = [(0, fk.e)("_markAllSubMeshesAsLightsDirty")], Xe = [(0, fk.I)("useObjectSpaceNormalMap")], Be = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], ce = [(0, fk.I)("useParallax")], Te = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], oe = [(0, fk.I)("useParallaxOcclusion")], Ze = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], Oe = [(0, fk.I)()], ge = [(0, fk.I)("roughness")], Ge = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], Ne = [(0, fk.I)()], Re = [(0, fk.I)()], Je = [(0, fk.I)()], ki = [(0, fk.I)("useLightmapAsShadowmap")], ei = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], ii = [(0, fk.p)("diffuseFresnelParameters")], Di = [(0, fk.e)("_markAllSubMeshesAsFresnelDirty")], fi = [(0, fk.p)("opacityFresnelParameters")], Si = [(0, fk.e)("_markAllSubMeshesAsFresnelAndMiscDirty")], bi = [(0, fk.p)("reflectionFresnelParameters")], ri = [(0, fk.e)("_markAllSubMeshesAsFresnelDirty")], Pi = [(0, fk.p)("refractionFresnelParameters")], mi = [(0, fk.e)("_markAllSubMeshesAsFresnelDirty")], Mi = [(0, fk.p)("emissiveFresnelParameters")], Ki = [(0, fk.e)("_markAllSubMeshesAsFresnelDirty")], xi = [(0, fk.I)("useReflectionFresnelFromSpecular")], ni = [(0, fk.e)("_markAllSubMeshesAsFresnelDirty")], Ui = [(0, fk.I)("useGlossinessFromSpecularMapAlpha")], Hi = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], wi = [(0, fk.I)("maxSimultaneousLights")], li = [(0, fk.e)("_markAllSubMeshesAsLightsDirty")], yi = [(0, fk.I)("invertNormalMapX")], Yi = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], Li = [(0, fk.I)("invertNormalMapY")], Ci = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], Ai = [(0, fk.I)("twoSidedLighting")], ji = [(0, fk.e)("_markAllSubMeshesAsTexturesDirty")], si = [(0, fk.I)("applyDecalMapAfterDetailMap")], di = [(0, fk.e)("_markAllSubMeshesAsMiscDirty")], (0, Dk.d)(kk, null, be, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "diffuseTexture" in kk,
              get: kk => kk.diffuseTexture,
              set: (kk, ek) => {
                kk.diffuseTexture = ek
              }
            },
            metadata: ek
          }, qi, Ii), (0, Dk.d)(kk, null, Pe, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "ambientTexture" in kk,
              get: kk => kk.ambientTexture,
              set: (kk, ek) => {
                kk.ambientTexture = ek
              }
            },
            metadata: ek
          }, vi, Ei), (0, Dk.d)(kk, null, Me, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "opacityTexture" in kk,
              get: kk => kk.opacityTexture,
              set: (kk, ek) => {
                kk.opacityTexture = ek
              }
            },
            metadata: ek
          }, ti, Xi), (0, Dk.d)(kk, null, xe, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "reflectionTexture" in kk,
              get: kk => kk.reflectionTexture,
              set: (kk, ek) => {
                kk.reflectionTexture = ek
              }
            },
            metadata: ek
          }, Ti, oi), (0, Dk.d)(kk, null, Ue, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "emissiveTexture" in kk,
              get: kk => kk.emissiveTexture,
              set: (kk, ek) => {
                kk.emissiveTexture = ek
              }
            },
            metadata: ek
          }, gi, Gi), (0, Dk.d)(kk, null, we, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularTexture" in kk,
              get: kk => kk.specularTexture,
              set: (kk, ek) => {
                kk.specularTexture = ek
              }
            },
            metadata: ek
          }, Ji, kD), (0, Dk.d)(kk, null, pe, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "bumpTexture" in kk,
              get: kk => kk.bumpTexture,
              set: (kk, ek) => {
                kk.bumpTexture = ek
              }
            },
            metadata: ek
          }, DD, fD), (0, Dk.d)(kk, null, Ye, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "lightmapTexture" in kk,
              get: kk => kk.lightmapTexture,
              set: (kk, ek) => {
                kk.lightmapTexture = ek
              }
            },
            metadata: ek
          }, rD, PD), (0, Dk.d)(kk, null, Ce, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "refractionTexture" in kk,
              get: kk => kk.refractionTexture,
              set: (kk, ek) => {
                kk.refractionTexture = ek
              }
            },
            metadata: ek
          }, KD, xD), (0, Dk.d)(kk, null, ue, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "useAlphaFromDiffuseTexture" in kk,
              get: kk => kk.useAlphaFromDiffuseTexture,
              set: (kk, ek) => {
                kk.useAlphaFromDiffuseTexture = ek
              }
            },
            metadata: ek
          }, sD, dD), (0, Dk.d)(kk, null, Ie, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: kk => "useEmissiveAsIllumination" in kk,
              get: kk => kk.useEmissiveAsIllumination,
              set: (kk, ek) => {
                kk.useEmissiveAsIllumination = ek
              }
            },
            metadata: ek
          }, uD, qD), (0, Dk.d)(kk, null, Qe, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: kk => "linkEmissiveWithDiffuse" in kk,
              get: kk => kk.linkEmissiveWithDiffuse,
              set: (kk, ek) => {
                kk.linkEmissiveWithDiffuse = ek
              }
            },
            metadata: ek
          }, QD, vD), (0, Dk.d)(kk, null, Ee, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: kk => "useSpecularOverAlpha" in kk,
              get: kk => kk.useSpecularOverAlpha,
              set: (kk, ek) => {
                kk.useSpecularOverAlpha = ek
              }
            },
            metadata: ek
          }, aD, WD), (0, Dk.d)(kk, null, ae, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: kk => "useReflectionOverAlpha" in kk,
              get: kk => kk.useReflectionOverAlpha,
              set: (kk, ek) => {
                kk.useReflectionOverAlpha = ek
              }
            },
            metadata: ek
          }, BD, cD), (0, Dk.d)(kk, null, te, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: kk => "disableLighting" in kk,
              get: kk => kk.disableLighting,
              set: (kk, ek) => {
                kk.disableLighting = ek
              }
            },
            metadata: ek
          }, ZD, OD), (0, Dk.d)(kk, null, Be, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: kk => "useObjectSpaceNormalMap" in kk,
              get: kk => kk.useObjectSpaceNormalMap,
              set: (kk, ek) => {
                kk.useObjectSpaceNormalMap = ek
              }
            },
            metadata: ek
          }, ND, RD), (0, Dk.d)(kk, null, Te, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: kk => "useParallax" in kk,
              get: kk => kk.useParallax,
              set: (kk, ek) => {
                kk.useParallax = ek
              }
            },
            metadata: ek
          }, ef, Df), (0, Dk.d)(kk, null, Ze, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: kk => "useParallaxOcclusion" in kk,
              get: kk => kk.useParallaxOcclusion,
              set: (kk, ek) => {
                kk.useParallaxOcclusion = ek
              }
            },
            metadata: ek
          }, bf, rf), (0, Dk.d)(kk, null, Ge, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: kk => "roughness" in kk,
              get: kk => kk.roughness,
              set: (kk, ek) => {
                kk.roughness = ek
              }
            },
            metadata: ek
          }, xf, nf), (0, Dk.d)(kk, null, ei, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: kk => "useLightmapAsShadowmap" in kk,
              get: kk => kk.useLightmapAsShadowmap,
              set: (kk, ek) => {
                kk.useLightmapAsShadowmap = ek
              }
            },
            metadata: ek
          }, Cf, Af), (0, Dk.d)(kk, null, Di, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "diffuseFresnelParameters" in kk,
              get: kk => kk.diffuseFresnelParameters,
              set: (kk, ek) => {
                kk.diffuseFresnelParameters = ek
              }
            },
            metadata: ek
          }, df, Vf), (0, Dk.d)(kk, null, Si, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "opacityFresnelParameters" in kk,
              get: kk => kk.opacityFresnelParameters,
              set: (kk, ek) => {
                kk.opacityFresnelParameters = ek
              }
            },
            metadata: ek
          }, qf, If), (0, Dk.d)(kk, null, ri, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "reflectionFresnelParameters" in kk,
              get: kk => kk.reflectionFresnelParameters,
              set: (kk, ek) => {
                kk.reflectionFresnelParameters = ek
              }
            },
            metadata: ek
          }, vf, Ef), (0, Dk.d)(kk, null, mi, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "refractionFresnelParameters" in kk,
              get: kk => kk.refractionFresnelParameters,
              set: (kk, ek) => {
                kk.refractionFresnelParameters = ek
              }
            },
            metadata: ek
          }, Wf, tf), (0, Dk.d)(kk, null, Ki, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "emissiveFresnelParameters" in kk,
              get: kk => kk.emissiveFresnelParameters,
              set: (kk, ek) => {
                kk.emissiveFresnelParameters = ek
              }
            },
            metadata: ek
          }, Tf, of), (0, Dk.d)(kk, null, ni, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: kk => "useReflectionFresnelFromSpecular" in kk,
              get: kk => kk.useReflectionFresnelFromSpecular,
              set: (kk, ek) => {
                kk.useReflectionFresnelFromSpecular = ek
              }
            },
            metadata: ek
          }, gf, Gf), (0, Dk.d)(kk, null, Hi, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: kk => "useGlossinessFromSpecularMapAlpha" in kk,
              get: kk => kk.useGlossinessFromSpecularMapAlpha,
              set: (kk, ek) => {
                kk.useGlossinessFromSpecularMapAlpha = ek
              }
            },
            metadata: ek
          }, Jf, kS), (0, Dk.d)(kk, null, li, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: kk => "maxSimultaneousLights" in kk,
              get: kk => kk.maxSimultaneousLights,
              set: (kk, ek) => {
                kk.maxSimultaneousLights = ek
              }
            },
            metadata: ek
          }, DS, fS), (0, Dk.d)(kk, null, Yi, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: kk => "invertNormalMapX" in kk,
              get: kk => kk.invertNormalMapX,
              set: (kk, ek) => {
                kk.invertNormalMapX = ek
              }
            },
            metadata: ek
          }, rS, PS), (0, Dk.d)(kk, null, Ci, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: kk => "invertNormalMapY" in kk,
              get: kk => kk.invertNormalMapY,
              set: (kk, ek) => {
                kk.invertNormalMapY = ek
              }
            },
            metadata: ek
          }, KS, xS), (0, Dk.d)(kk, null, ji, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: kk => "twoSidedLighting" in kk,
              get: kk => kk.twoSidedLighting,
              set: (kk, ek) => {
                kk.twoSidedLighting = ek
              }
            },
            metadata: ek
          }, HS, wS), (0, Dk.d)(kk, null, di, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: kk => "applyDecalMapAfterDetailMap" in kk,
              get: kk => kk.applyDecalMapAfterDetailMap,
              set: (kk, ek) => {
                kk.applyDecalMapAfterDetailMap = ek
              }
            },
            metadata: ek
          }, yS, YS), (0, Dk.d)(null, null, Se, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_diffuseTexture" in kk,
              get: kk => kk._diffuseTexture,
              set: (kk, ek) => {
                kk._diffuseTexture = ek
              }
            },
            metadata: ek
          }, Fi, ui), (0, Dk.d)(null, null, re, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_ambientTexture" in kk,
              get: kk => kk._ambientTexture,
              set: (kk, ek) => {
                kk._ambientTexture = ek
              }
            },
            metadata: ek
          }, zi, Qi), (0, Dk.d)(null, null, me, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_opacityTexture" in kk,
              get: kk => kk._opacityTexture,
              set: (kk, ek) => {
                kk._opacityTexture = ek
              }
            },
            metadata: ek
          }, ai, Wi), (0, Dk.d)(null, null, Ke, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_reflectionTexture" in kk,
              get: kk => kk._reflectionTexture,
              set: (kk, ek) => {
                kk._reflectionTexture = ek
              }
            },
            metadata: ek
          }, Bi, ci), (0, Dk.d)(null, null, ne, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_emissiveTexture" in kk,
              get: kk => kk._emissiveTexture,
              set: (kk, ek) => {
                kk._emissiveTexture = ek
              }
            },
            metadata: ek
          }, Zi, Oi), (0, Dk.d)(null, null, He, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_specularTexture" in kk,
              get: kk => kk._specularTexture,
              set: (kk, ek) => {
                kk._specularTexture = ek
              }
            },
            metadata: ek
          }, Ni, Ri), (0, Dk.d)(null, null, le, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_bumpTexture" in kk,
              get: kk => kk._bumpTexture,
              set: (kk, ek) => {
                kk._bumpTexture = ek
              }
            },
            metadata: ek
          }, eD, iD), (0, Dk.d)(null, null, ye, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_lightmapTexture" in kk,
              get: kk => kk._lightmapTexture,
              set: (kk, ek) => {
                kk._lightmapTexture = ek
              }
            },
            metadata: ek
          }, SD, bD), (0, Dk.d)(null, null, Le, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_refractionTexture" in kk,
              get: kk => kk._refractionTexture,
              set: (kk, ek) => {
                kk._refractionTexture = ek
              }
            },
            metadata: ek
          }, mD, MD), (0, Dk.d)(null, null, Ae, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "ambientColor" in kk,
              get: kk => kk.ambientColor,
              set: (kk, ek) => {
                kk.ambientColor = ek
              }
            },
            metadata: ek
          }, nD, UD), (0, Dk.d)(null, null, je, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "diffuseColor" in kk,
              get: kk => kk.diffuseColor,
              set: (kk, ek) => {
                kk.diffuseColor = ek
              }
            },
            metadata: ek
          }, HD, wD), (0, Dk.d)(null, null, se, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularColor" in kk,
              get: kk => kk.specularColor,
              set: (kk, ek) => {
                kk.specularColor = ek
              }
            },
            metadata: ek
          }, lD, pD), (0, Dk.d)(null, null, de, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "emissiveColor" in kk,
              get: kk => kk.emissiveColor,
              set: (kk, ek) => {
                kk.emissiveColor = ek
              }
            },
            metadata: ek
          }, yD, YD), (0, Dk.d)(null, null, Ve, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: kk => "specularPower" in kk,
              get: kk => kk.specularPower,
              set: (kk, ek) => {
                kk.specularPower = ek
              }
            },
            metadata: ek
          }, LD, CD), (0, Dk.d)(null, null, Fe, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useAlphaFromDiffuseTexture" in kk,
              get: kk => kk._useAlphaFromDiffuseTexture,
              set: (kk, ek) => {
                kk._useAlphaFromDiffuseTexture = ek
              }
            },
            metadata: ek
          }, AD, jD), (0, Dk.d)(null, null, qe, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useEmissiveAsIllumination" in kk,
              get: kk => kk._useEmissiveAsIllumination,
              set: (kk, ek) => {
                kk._useEmissiveAsIllumination = ek
              }
            },
            metadata: ek
          }, VD, FD), (0, Dk.d)(null, null, ze, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: kk => "_linkEmissiveWithDiffuse" in kk,
              get: kk => kk._linkEmissiveWithDiffuse,
              set: (kk, ek) => {
                kk._linkEmissiveWithDiffuse = ek
              }
            },
            metadata: ek
          }, ID, zD), (0, Dk.d)(null, null, ve, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useSpecularOverAlpha" in kk,
              get: kk => kk._useSpecularOverAlpha,
              set: (kk, ek) => {
                kk._useSpecularOverAlpha = ek
              }
            },
            metadata: ek
          }, ED, hD), (0, Dk.d)(null, null, he, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useReflectionOverAlpha" in kk,
              get: kk => kk._useReflectionOverAlpha,
              set: (kk, ek) => {
                kk._useReflectionOverAlpha = ek
              }
            },
            metadata: ek
          }, tD, XD), (0, Dk.d)(null, null, We, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: kk => "_disableLighting" in kk,
              get: kk => kk._disableLighting,
              set: (kk, ek) => {
                kk._disableLighting = ek
              }
            },
            metadata: ek
          }, TD, oD), (0, Dk.d)(null, null, Xe, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useObjectSpaceNormalMap" in kk,
              get: kk => kk._useObjectSpaceNormalMap,
              set: (kk, ek) => {
                kk._useObjectSpaceNormalMap = ek
              }
            },
            metadata: ek
          }, gD, GD), (0, Dk.d)(null, null, ce, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useParallax" in kk,
              get: kk => kk._useParallax,
              set: (kk, ek) => {
                kk._useParallax = ek
              }
            },
            metadata: ek
          }, JD, kf), (0, Dk.d)(null, null, oe, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useParallaxOcclusion" in kk,
              get: kk => kk._useParallaxOcclusion,
              set: (kk, ek) => {
                kk._useParallaxOcclusion = ek
              }
            },
            metadata: ek
          }, ff, Sf), (0, Dk.d)(null, null, Oe, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: kk => "parallaxScaleBias" in kk,
              get: kk => kk.parallaxScaleBias,
              set: (kk, ek) => {
                kk.parallaxScaleBias = ek
              }
            },
            metadata: ek
          }, Pf, mf), (0, Dk.d)(null, null, ge, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: kk => "_roughness" in kk,
              get: kk => kk._roughness,
              set: (kk, ek) => {
                kk._roughness = ek
              }
            },
            metadata: ek
          }, Mf, Kf), (0, Dk.d)(null, null, Ne, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: kk => "indexOfRefraction" in kk,
              get: kk => kk.indexOfRefraction,
              set: (kk, ek) => {
                kk.indexOfRefraction = ek
              }
            },
            metadata: ek
          }, Uf, Hf), (0, Dk.d)(null, null, Re, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: kk => "invertRefractionY" in kk,
              get: kk => kk.invertRefractionY,
              set: (kk, ek) => {
                kk.invertRefractionY = ek
              }
            },
            metadata: ek
          }, wf, lf), (0, Dk.d)(null, null, Je, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: kk => "alphaCutOff" in kk,
              get: kk => kk.alphaCutOff,
              set: (kk, ek) => {
                kk.alphaCutOff = ek
              }
            },
            metadata: ek
          }, pf, yf), (0, Dk.d)(null, null, ki, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useLightmapAsShadowmap" in kk,
              get: kk => kk._useLightmapAsShadowmap,
              set: (kk, ek) => {
                kk._useLightmapAsShadowmap = ek
              }
            },
            metadata: ek
          }, Yf, Lf), (0, Dk.d)(null, null, ii, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "_diffuseFresnelParameters" in kk,
              get: kk => kk._diffuseFresnelParameters,
              set: (kk, ek) => {
                kk._diffuseFresnelParameters = ek
              }
            },
            metadata: ek
          }, jf, sf), (0, Dk.d)(null, null, fi, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "_opacityFresnelParameters" in kk,
              get: kk => kk._opacityFresnelParameters,
              set: (kk, ek) => {
                kk._opacityFresnelParameters = ek
              }
            },
            metadata: ek
          }, Ff, uf), (0, Dk.d)(null, null, bi, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "_reflectionFresnelParameters" in kk,
              get: kk => kk._reflectionFresnelParameters,
              set: (kk, ek) => {
                kk._reflectionFresnelParameters = ek
              }
            },
            metadata: ek
          }, zf, Qf), (0, Dk.d)(null, null, Pi, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "_refractionFresnelParameters" in kk,
              get: kk => kk._refractionFresnelParameters,
              set: (kk, ek) => {
                kk._refractionFresnelParameters = ek
              }
            },
            metadata: ek
          }, hf, af), (0, Dk.d)(null, null, Mi, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: kk => "_emissiveFresnelParameters" in kk,
              get: kk => kk._emissiveFresnelParameters,
              set: (kk, ek) => {
                kk._emissiveFresnelParameters = ek
              }
            },
            metadata: ek
          }, Xf, Bf), (0, Dk.d)(null, null, xi, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useReflectionFresnelFromSpecular" in kk,
              get: kk => kk._useReflectionFresnelFromSpecular,
              set: (kk, ek) => {
                kk._useReflectionFresnelFromSpecular = ek
              }
            },
            metadata: ek
          }, Zf, Of), (0, Dk.d)(null, null, Ui, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: kk => "_useGlossinessFromSpecularMapAlpha" in kk,
              get: kk => kk._useGlossinessFromSpecularMapAlpha,
              set: (kk, ek) => {
                kk._useGlossinessFromSpecularMapAlpha = ek
              }
            },
            metadata: ek
          }, Nf, Rf), (0, Dk.d)(null, null, wi, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: kk => "_maxSimultaneousLights" in kk,
              get: kk => kk._maxSimultaneousLights,
              set: (kk, ek) => {
                kk._maxSimultaneousLights = ek
              }
            },
            metadata: ek
          }, eS, iS), (0, Dk.d)(null, null, yi, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: kk => "_invertNormalMapX" in kk,
              get: kk => kk._invertNormalMapX,
              set: (kk, ek) => {
                kk._invertNormalMapX = ek
              }
            },
            metadata: ek
          }, SS, bS), (0, Dk.d)(null, null, Li, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: kk => "_invertNormalMapY" in kk,
              get: kk => kk._invertNormalMapY,
              set: (kk, ek) => {
                kk._invertNormalMapY = ek
              }
            },
            metadata: ek
          }, mS, MS), (0, Dk.d)(null, null, Ai, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: kk => "_twoSidedLighting" in kk,
              get: kk => kk._twoSidedLighting,
              set: (kk, ek) => {
                kk._twoSidedLighting = ek
              }
            },
            metadata: ek
          }, nS, US), (0, Dk.d)(null, null, si, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: kk => "_applyDecalMapAfterDetailMap" in kk,
              get: kk => kk._applyDecalMapAfterDetailMap,
              set: (kk, ek) => {
                kk._applyDecalMapAfterDetailMap = ek
              }
            },
            metadata: ek
          }, lS, pS), ek && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ek
          })
        })(), kk.ForceGLSL = !1, kk._ShaderLoader = new Ck.e((() => [Promise.all([ik.e(316), ik.e(315)]).then((() => ik(41451))), Promise.all([ik.e(321), ik.e(317), ik.e(330), ik.e(320)]).then((() => ik(41633)))]), (() => [Promise.all([ik.e(337), ik.e(332)]).then((() => ik(41774))), Promise.all([ik.e(338), ik.e(348), ik.e(334)]).then((() => ik(41987)))])), kk
      })(),
      vk = !1;

    function Ek() {
      vk || (vk = !0, (0, Kk.e)(), (0, Vk.h)("BABYLON.StandardMaterial", Qk), bk.f.DefaultMaterialFactory = kk => new Qk("default material", kk))
    }
    Object.getOwnPropertyDescriptor(Qk.prototype, "decalMap") || Object.defineProperty(Qk.prototype, "decalMap", (0, Fk.h)("StandardMaterial", "decalMap"))
  },
  39975: (kk, ek, ik) => {
    function Dk(kk) {
      return class extends kk {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    ik.d(ek, {
      d: () => Dk
    })
  },
  39966: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk
    });
    class Dk {
      constructor(kk, ek) {
        this._webGL = {
          load: kk,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: ek,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(kk) {
        const ek = 1 === kk ? this._webGPU : this._webGL;
        return ek.loaded ? void 0 : async () => {
          await this._loadAsync(ek)
        }
      }
      async _loadAsync(kk) {
        if (kk.loaded) return;
        let ek = kk.loadPromise;
        const ik = null === ek;
        ik && (ek = Promise.all(kk.load()), kk.loadPromise = ek);
        let Dk = !1;
        try {
          await ek, Dk = !0
        } finally {
          ik && this._completeLoad(kk, Dk)
        }
      }
      _completeLoad(kk, ek) {
        kk.loaded = ek, kk.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);