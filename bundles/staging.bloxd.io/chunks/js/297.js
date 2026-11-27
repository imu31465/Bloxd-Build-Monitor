export const id = 297;
export const ids = [297];
export const modules = {
  42232: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    var Zr = Qr(41880);

    function Wr(rr) {
      return class extends rr {
        constructor() {
          super(...arguments);
          const rr = new.target;
          if (!rr[Symbol.metadata]) {
            const Sr = Object.getPrototypeOf(rr)?.[Symbol.metadata];
            rr[Symbol.metadata] = Sr ? Object.create(Sr) : {}
          }
          const Sr = (0, Zr.d)(rr[Symbol.metadata]);
          Sr._imageProcessingConfiguration || (Sr._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(rr) {
          this._attachImageProcessingConfiguration(rr), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(rr) {
          rr !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !rr && this.eC ? this._imageProcessingConfiguration = this.eC().imageProcessingConfiguration : rr && (this._imageProcessingConfiguration = rr), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(rr) {
          this.imageProcessingConfiguration.colorCurvesEnabled = rr
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(rr) {
          this.imageProcessingConfiguration.colorGradingEnabled = rr
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(rr) {
          this._imageProcessingConfiguration.toneMappingEnabled = rr
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(rr) {
          this._imageProcessingConfiguration.exposure = rr
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(rr) {
          this._imageProcessingConfiguration.contrast = rr
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(rr) {
          this._imageProcessingConfiguration.colorGradingTexture = rr
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(rr) {
          this._imageProcessingConfiguration.colorCurves = rr
        }
      }
    }
  },
  42119: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      g: () => Wr
    });
    var Zr = Qr(42121);

    function Wr(rr) {
      return class extends rr {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class ar extends Zr.b {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  42198: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => xr
    });
    var Zr = Qr(41872),
      Wr = Qr(42130),
      ar = Qr(41875),
      jr = Qr(42178),
      Ir = Qr(42121),
      fr = Qr(42202),
      Er = Qr(42167);
    class pr extends Ir.b {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let xr = (() => {
      var rr, Sr, Qr, Ir;
      let xr, mr, Nr, Ur, tr, hr, zr = fr.c,
        Yr = [],
        nr = [],
        er = [],
        Kr = [],
        yr = [],
        Br = [],
        Tr = [],
        vr = [],
        Or = [],
        Lr = [],
        lr = [],
        Xr = [];
      return rr = class extends zr {
        get texture() {
          return (0, Zr.e)(this, Sr, "f")
        }
        set texture(rr) {
          (0, Zr.i)(this, Sr, rr, "f")
        }
        get normalBlendMethod() {
          return (0, Zr.e)(this, Qr, "f")
        }
        set normalBlendMethod(rr) {
          (0, Zr.i)(this, Qr, rr, "f")
        }
        get isEnabled() {
          return (0, Zr.e)(this, Ir, "f")
        }
        set isEnabled(rr) {
          (0, Zr.i)(this, Ir, rr, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(rr) {
          let ar = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(rr, "DetailMap", 140, new pr, ar), this._texture = null, Sr.set(this, (0, Zr.m)(this, Yr, void 0)), this.diffuseBlendLevel = ((0, Zr.m)(this, nr), (0, Zr.m)(this, er, 1)), this.roughnessBlendLevel = ((0, Zr.m)(this, Kr), (0, Zr.m)(this, yr, 1)), this.bumpLevel = ((0, Zr.m)(this, Br), (0, Zr.m)(this, Tr, 1)), this._normalBlendMethod = ((0, Zr.m)(this, vr), Wr.d.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), Qr.set(this, (0, Zr.m)(this, Or, void 0)), this._isEnabled = ((0, Zr.m)(this, Lr), !1), Ir.set(this, (0, Zr.m)(this, lr, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Zr.m)(this, Xr), this._internalMarkAllSubMeshesAsTexturesDirty = rr._dirtyCallbacks[1]
        }
        isReadyForSubMesh(rr, Sr, Qr) {
          return !this._isEnabled || !(rr._areTexturesDirty && Sr.texturesEnabled && Qr.getCaps().standardDerivatives && this._texture && jr.d.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(rr, Sr) {
          if (this._isEnabled) {
            rr.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const Qr = Sr.MU();
            rr._areTexturesDirty && (Qr.getCaps().standardDerivatives && this._texture && jr.d.DetailTextureEnabled && this._isEnabled ? ((0, Er.Y)(this._texture, rr, "DETAIL"), rr.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : rr.DETAIL = !1)
          } else rr.DETAIL = !1
        }
        bindForSubMesh(rr, Sr) {
          if (!this._isEnabled) return;
          const Qr = this._material.isFrozen;
          rr.useUbo && Qr && rr.isSync || this._texture && jr.d.DetailTextureEnabled && (rr.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, Er.B)(this._texture, rr, "detail")), Sr.texturesEnabled && this._texture && jr.d.DetailTextureEnabled && rr.setTexture("detailSampler", this._texture)
        }
        hasTexture(rr) {
          return this._texture === rr
        }
        getActiveTextures(rr) {
          this._texture && rr.push(this._texture)
        }
        getAnimatables(rr) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && rr.push(this._texture)
        }
        dispose(rr) {
          rr && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(rr) {
          rr.push("detailSampler")
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
      }, Sr = new WeakMap, Qr = new WeakMap, Ir = new WeakMap, (() => {
        const Sr = "function" === typeof Symbol && Symbol.metadata ? Object.create(zr[Symbol.metadata] ?? null) : void 0;
        xr = [(0, ar.z)("detailTexture"), (0, ar.f)("_markAllSubMeshesAsTexturesDirty")], mr = [(0, ar.G)()], Nr = [(0, ar.G)()], Ur = [(0, ar.G)()], tr = [(0, ar.G)(), (0, ar.f)("_markAllSubMeshesAsTexturesDirty")], hr = [(0, ar.G)(), (0, ar.f)("_markAllSubMeshesAsTexturesDirty")], (0, Zr.k)(rr, null, xr, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: rr => "texture" in rr,
            get: rr => rr.texture,
            set: (rr, Sr) => {
              rr.texture = Sr
            }
          },
          metadata: Sr
        }, Yr, nr), (0, Zr.k)(rr, null, tr, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: rr => "normalBlendMethod" in rr,
            get: rr => rr.normalBlendMethod,
            set: (rr, Sr) => {
              rr.normalBlendMethod = Sr
            }
          },
          metadata: Sr
        }, Or, Lr), (0, Zr.k)(rr, null, hr, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: rr => "isEnabled" in rr,
            get: rr => rr.isEnabled,
            set: (rr, Sr) => {
              rr.isEnabled = Sr
            }
          },
          metadata: Sr
        }, lr, Xr), (0, Zr.k)(null, null, mr, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: rr => "diffuseBlendLevel" in rr,
            get: rr => rr.diffuseBlendLevel,
            set: (rr, Sr) => {
              rr.diffuseBlendLevel = Sr
            }
          },
          metadata: Sr
        }, er, Kr), (0, Zr.k)(null, null, Nr, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: rr => "roughnessBlendLevel" in rr,
            get: rr => rr.roughnessBlendLevel,
            set: (rr, Sr) => {
              rr.roughnessBlendLevel = Sr
            }
          },
          metadata: Sr
        }, yr, Br), (0, Zr.k)(null, null, Ur, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: rr => "bumpLevel" in rr,
            get: rr => rr.bumpLevel,
            set: (rr, Sr) => {
              rr.bumpLevel = Sr
            }
          },
          metadata: Sr
        }, Tr, vr), Sr && Object.defineProperty(rr, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Sr
        })
      })(), rr
    })()
  },
  42121: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    class Zr {
      constructor(rr) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = rr, rr)
          for (const Sr in rr) Object.prototype.hasOwnProperty.call(rr, Sr) && this._setDefaultValue(Sr)
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
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || rr, this._isDirty = !0
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
        for (const rr of Object.keys(this)) "_" !== rr[0] && this._keys.push(rr);
        if (this._externalProperties)
          for (const rr in this._externalProperties) - 1 === this._keys.indexOf(rr) && this._keys.push(rr)
      }
      isEqual(rr) {
        if (this._keys.length !== rr._keys.length) return !1;
        for (let Sr = 0; Sr < this._keys.length; Sr++) {
          const Qr = this._keys[Sr];
          if (this[Qr] !== rr[Qr]) return !1
        }
        return !0
      }
      cloneTo(rr) {
        this._keys.length !== rr._keys.length && (rr._keys = this._keys.slice(0));
        for (let Sr = 0; Sr < this._keys.length; Sr++) {
          const Qr = this._keys[Sr];
          rr[Qr] = this[Qr]
        }
      }
      reset() {
        for (const rr of this._keys) this._setDefaultValue(rr)
      }
      _setDefaultValue(rr) {
        const Sr = this._externalProperties?.[rr]?.type ?? typeof this[rr],
          Qr = this._externalProperties?.[rr]?.default;
        switch (Sr) {
          case "number":
            this[rr] = Qr ?? 0;
            break;
          case "string":
            this[rr] = Qr ?? "";
            break;
          default:
            this[rr] = Qr ?? !1
        }
      }
      toString() {
        let rr = "";
        for (let Sr = 0; Sr < this._keys.length; Sr++) {
          const Qr = this._keys[Sr],
            Zr = this[Qr];
          switch (typeof Zr) {
            case "number":
            case "string":
              rr += "#define " + Qr + " " + Zr + "\n";
              break;
            default:
              Zr && (rr += "#define " + Qr + "\n")
          }
        }
        return rr
      }
    }
  },
  42215: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      f: () => jr,
      h: () => ar
    });
    var Zr, Wr = Qr(38560);

    function ar(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const Zr = Sr(rr);
      if (!Number.isInteger(Zr) || Zr < 0 || Zr > Qr) throw new Error(`Invalid geometry object ID ${Zr} for mesh "${rr.name}". Object IDs must be integers between 0 and 0x${Qr.toString(16).toUpperCase()}.`);
      return Zr
    }

    function jr(rr, Sr) {
      const Qr = Sr(rr);
      if (!Number.isInteger(Qr) || Qr < 0 || Qr > 255 || 0 !== Qr && 0 === (63 & Qr)) throw new Error(`Invalid geometry mesh-blending tag ${Qr} for mesh "${rr.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return Qr
    }! function(rr) {
      rr[rr.Zero = 0] = "Zero", rr[rr.One = 1] = "One", rr[rr.MaxViewZ = 2] = "MaxViewZ", rr[rr.NoClear = 3] = "NoClear"
    }(Zr || (Zr = {}));
    class Ir {
      static CreateConfiguration(rr) {
        return Ir._Configurations[rr] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: Wr.d.Zero(),
          currentViewProjection: Wr.d.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, Ir._Configurations[rr]
      }
      static DeleteConfiguration(rr) {
        delete Ir._Configurations[rr]
      }
      static GetConfiguration(rr) {
        return Ir._Configurations[rr]
      }
      static _PrepareConfiguration(rr, Sr, Qr) {
        const Zr = Ir._Configurations[rr];
        Zr._attachments = Sr, Zr._colorAttachments = Qr, Zr._mrtCount = Sr.length;
        let Wr = "#define PREPASS\n";
        for (const ar of Ir.GeometryTextureDescriptions) {
          const rr = Zr.defines[ar.defineIndex];
          void 0 !== rr && (Wr += `#define ${ar.define}\n#define ${ar.defineIndex} ${rr}\n`)
        }
        Zr.objectIdIsRedFormat && (Wr += "#define PREPASS_OBJECT_ID_R8\n"), Zr._defines = Wr + `#define SCENE_MRT_COUNT ${Sr.length}\n`
      }
      static _PrepareStringDefines(rr, Sr) {
        const Qr = Ir._Configurations[rr];
        return !!Qr?._defines && (Sr.push(Qr._defines), !0)
      }
      static _BindAttachmentsForEffect(rr, Sr) {
        const Qr = Ir._Configurations[rr.currentRenderPassId];
        return !Qr?._attachments || (rr.bindAttachments(Sr._multiTarget ? Qr._attachments : Qr._colorAttachments), Sr._multiTarget || void 0 !== Qr.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(rr) {
        const Sr = Ir._Configurations[rr.currentRenderPassId];
        Sr?._colorAttachments && rr.bindAttachments(Sr._colorAttachments)
      }
      static _BindColorAttachments(rr) {
        const Sr = Ir._Configurations[rr.currentRenderPassId];
        return !Sr?._colorAttachments || (rr.bindAttachments(Sr._colorAttachments), void 0 !== Sr.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(rr) {
        const Sr = Ir._Configurations[rr.currentRenderPassId];
        return !Sr?._colorAttachments || void 0 !== Sr.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(rr, Sr) {
        const Qr = Ir._Configurations[rr.currentRenderPassId];
        if (!Qr) return;
        const Zr = rr.getAlphaMode(),
          Wr = void 0 === Qr.defines.PREPASS_COLOR_INDEX || 2 === Zr || 1 === Zr || 17 === Zr;
        Sr.setFloat("geometryZeroAlphaDiscard", Wr ? 1 : 0)
      }
      static AddUniformsAndSamplers(rr, Sr) {
        rr.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(rr, Sr) {
        for (const Qr of Sr)
          if (Qr.jT)
            for (const Sr of Qr.jT) Sr._removeDrawWrapper(rr)
      }
      static PrepareDefines(rr, Sr, Qr) {
        if (!Qr._arePrePassDirty) return;
        const Zr = Ir._Configurations[rr];
        if (!Zr) return;
        Qr.PREPASS = !0;
        let Wr = 0;
        for (let ar = 0; ar < Ir.GeometryTextureDescriptions.length; ar++) {
          const rr = Ir.GeometryTextureDescriptions[ar],
            Sr = rr.define,
            jr = rr.defineIndex,
            fr = Zr.defines[jr];
          void 0 !== fr ? (Qr[Sr] = !0, Qr[jr] = fr, Wr++) : (Qr[Sr] = !1, delete Qr[jr])
        }
        Qr.PREPASS_OBJECT_ID_R8 = Zr.objectIdIsRedFormat, Qr.SCENE_MRT_COUNT = Zr._mrtCount ?? Wr, Qr.BONES_VELOCITY_ENABLED = Sr.useBones && Sr.computeBonesUsingShaders && Sr.skeleton && !Sr.skeleton.isUsingTextureForMatrices && -1 === Zr.excludedSkinnedMesh.indexOf(Sr)
      }
      static Bind(rr, Sr, Qr, Zr, Wr) {
        const fr = Ir._Configurations[rr];
        if (!fr) return;
        const Er = Qr.eC(),
          pr = Er.MU();
        if (fr.reverseCulling && pr.setStateCullFaceType(Er._mirroredCameraPosition ? Wr.cullBackFaces : !Wr.cullBackFaces), void 0 !== fr.defines.PREPASS_OBJECT_ID_INDEX) {
          const rr = fr.objectIdIsRedFormat ? 255 : 16777215;
          let Zr = Qr.uniqueId;
          if (fr.objectIdProvider) Zr = ar(Qr, fr.objectIdProvider, rr);
          else if (Zr > rr) throw new Error(`Invalid geometry object ID ${Zr} for mesh "${Qr.name}". Object IDs must be integers between 0 and 0x${rr.toString(16).toUpperCase()}.`);
          Sr.setFloat("objectId", Zr)
        }
        if (void 0 !== fr.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const rr = fr.meshBlendTagProvider ? jr(Qr, fr.meshBlendTagProvider) : Qr.meshBlendingTag;
          Sr.setInt("meshBlendTag", rr)
        }
        if (void 0 !== fr.defines.PREPASS_VELOCITY_INDEX || void 0 !== fr.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const rr = fr._currentWorldMatrices ?? (fr._currentWorldMatrices = {}),
            Wr = fr._worldMatrixFrameIds ?? (fr._worldMatrixFrameIds = {});
          if (rr[Qr.uniqueId] || (rr[Qr.uniqueId] = Zr.clone(), fr.previousWorldMatrices[Qr.uniqueId] = Zr.clone()), Wr[Qr.uniqueId] !== pr.frameId && (fr.previousWorldMatrices[Qr.uniqueId].iH(rr[Qr.uniqueId]), Wr[Qr.uniqueId] = pr.frameId), rr[Qr.uniqueId].iH(Zr), -1 === fr.lastUpdateFrameId ? (fr.lastUpdateFrameId = pr.frameId, fr.previousViewProjection.iH(Er.getTransformMatrix()), fr.currentViewProjection.iH(Er.getTransformMatrix())) : fr.currentViewProjection.updateFlag !== Er.getTransformMatrix().updateFlag ? (fr.lastUpdateFrameId = pr.frameId, fr.previousViewProjection.iH(fr.currentViewProjection), fr.currentViewProjection.iH(Er.getTransformMatrix())) : fr.lastUpdateFrameId !== pr.frameId && (fr.lastUpdateFrameId = pr.frameId, fr.previousViewProjection.iH(fr.currentViewProjection)), Sr.setMatrix("previousWorld", fr.previousWorldMatrices[Qr.uniqueId]), Sr.setMatrix("previousViewProjection", fr.previousViewProjection), Qr.useBones && Qr.computeBonesUsingShaders && Qr.skeleton) {
            const rr = Qr.skeleton;
            if (!rr.isUsingTextureForMatrices || -1 === Sr.getUniformIndex("boneTextureInfo")) {
              const Zr = rr.getTransformMatrices(Qr);
              Zr && (fr.previousBones[Qr.uniqueId] || (fr.previousBones[Qr.uniqueId] = Zr.slice()), Sr.setMatrices("mPreviousBones", fr.previousBones[Qr.uniqueId]), fr.previousBones[Qr.uniqueId].set(Zr))
            }
          }
        }
      }
    }
    Ir.GeometryTextureDescriptions = [{
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
    }], Ir._Configurations = {}
  },
  42202: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => mr,
      f: () => Ur
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(41775),
      jr = Qr(41743);
    const Ir = new RegExp("^([gimus]+)!");
    class fr {
      constructor(rr) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = rr, this._scene = rr.eC(), this._engine = this._scene.MU()
      }
      _addPlugin(rr) {
        for (let Zr = 0; Zr < this._plugins.length; ++Zr)
          if (this._plugins[Zr].name === rr.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !rr.isCompatible(this._material.shaderLanguage)) throw `The plugin "${rr.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const Sr = rr.getClassName();
        fr._MaterialPluginClassToMainDefine[Sr] || (fr._MaterialPluginClassToMainDefine[Sr] = "MATERIALPLUGIN_" + ++fr._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (rr, Sr) => this._handlePluginEvent(rr, Sr), this._plugins.push(rr), this._plugins.sort(((rr, Sr) => rr.priority - Sr.priority)), this._codeInjectionPoints = {};
        const Qr = {};
        Qr[fr._MaterialPluginClassToMainDefine[Sr]] = {
          type: "boolean",
          default: !0
        };
        for (const Zr of this._plugins) Zr.collectDefines(Qr), this._collectPointNames("vertex", Zr.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Zr.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = Qr, !0
      }
      _activatePlugin(rr) {
        -1 === this._activePlugins.indexOf(rr) && (this._activePlugins.push(rr), this._activePlugins.sort(((rr, Sr) => rr.priority - Sr.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), rr.registerForExtraEvents && (this._activePluginsForExtraEvents.push(rr), this._activePluginsForExtraEvents.sort(((rr, Sr) => rr.priority - Sr.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(rr) {
        for (let Sr = 0; Sr < this._plugins.length; ++Sr)
          if (this._plugins[Sr].name === rr) return this._plugins[Sr];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(rr) {
        let Sr = !0;
        for (const Qr of this._activePlugins) Sr = Sr && Qr.isReadyForSubMesh(rr.defines, this._scene, this._engine, rr.subMesh);
        rr.isReadyForSubMesh = Sr
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(rr) {
        for (const Sr of this._activePlugins) Sr.prepareDefinesBeforeAttributes(rr.defines, this._scene, rr.mesh)
      }
      _handlePluginEventPrepareDefines(rr) {
        for (const Sr of this._activePlugins) Sr.prepareDefines(rr.defines, this._scene, rr.mesh)
      }
      _handlePluginEventHardBindForSubMesh(rr) {
        for (const Sr of this._activePluginsForExtraEvents) Sr.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, rr.subMesh)
      }
      _handlePluginEventBindForSubMesh(rr) {
        for (const Sr of this._activePlugins) Sr.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, rr.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(rr) {
        let Sr = !1;
        for (const Qr of this._activePluginsForExtraEvents)
          if (Sr = Qr.hasRenderTargetTextures(), Sr) break;
        rr.hasRenderTargetTextures = Sr
      }
      _handlePluginEventFillRenderTargetTextures(rr) {
        for (const Sr of this._activePluginsForExtraEvents) Sr.fillRenderTargetTextures(rr.renderTargets)
      }
      _handlePluginEvent(rr, Sr) {
        switch (rr) {
          case 512: {
            const rr = Sr;
            for (const Sr of this._activePlugins) Sr.getActiveTextures(rr.activeTextures);
            break
          }
          case 256: {
            const rr = Sr;
            for (const Sr of this._activePlugins) Sr.getAnimatables(rr.animatables);
            break
          }
          case 1024: {
            const rr = Sr;
            let Qr = !1;
            for (const Sr of this._activePlugins)
              if (Qr = Sr.hasTexture(rr.texture), Qr) break;
            rr.hasTexture = Qr;
            break
          }
          case 2: {
            const rr = Sr;
            for (const Sr of this._plugins) Sr.dispose(rr.forceDisposeTextures);
            break
          }
          case 4:
            Sr.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const rr = Sr;
            for (const Sr of this._activePlugins) rr.fallbackRank = Sr.addFallbacks(rr.defines, rr.fallbacks, rr.fallbackRank), Sr.getAttributes(rr.attributes, this._scene, rr.mesh);
            this._uniformList.length > 0 && rr.uniforms.push(...this._uniformList), this._samplerList.length > 0 && rr.samplers.push(...this._samplerList), this._uboList.length > 0 && rr.uniformBuffersNames.push(...this._uboList), rr.customCode = this._injectCustomCode(rr, rr.customCode);
            break
          }
          case 8: {
            const rr = Sr;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const Qr = 1 === this._material.shaderLanguage;
            for (const Sr of this._plugins) {
              const Zr = Sr.getUniforms(this._material.shaderLanguage);
              if (Zr) {
                if (Zr.ubo)
                  for (const Sr of Zr.ubo) {
                    if (Sr.size && Sr.type) {
                      const Zr = Sr.arraySize ?? 0;
                      if (rr.ubo.addUniform(Sr.name, Sr.size, Zr), Qr) {
                        let rr;
                        switch (Sr.type) {
                          case "mat4":
                            rr = "mat4x4f";
                            break;
                          case "float":
                            rr = "f32";
                            break;
                          default:
                            rr = `${Sr.type}f`
                        }
                        this._uboDeclaration += Zr > 0 ? `uniform ${Sr.name}: array<${rr}, ${Zr}>;\n` : `uniform ${Sr.name}: ${rr};\n`
                      } else this._uboDeclaration += `${Sr.type} ${Sr.name}${Zr>0?`[${Zr}]`:""};\n`
                    }
                    this._uniformList.push(Sr.name)
                  }
                Zr.vertex && (this._vertexDeclaration += Zr.vertex + "\n"), Zr.fragment && (this._fragmentDeclaration += Zr.fragment + "\n"), Zr.externalUniforms && this._uniformList.push(...Zr.externalUniforms)
              }
              Sr.getSamplers(this._samplerList), Sr.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(rr, Sr) {
        if (Sr)
          for (const Qr in Sr) this._codeInjectionPoints[rr] || (this._codeInjectionPoints[rr] = {}), this._codeInjectionPoints[rr][Qr] = !0
      }
      _injectCustomCode(rr, Sr) {
        return (Qr, Zr) => {
          Sr && (Zr = Sr(Qr, Zr)), this._uboDeclaration && (Zr = Zr.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Zr = Zr.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (Zr = Zr.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const Wr = this._codeInjectionPoints?.[Qr];
          if (!Wr) return Zr;
          let fr = null;
          for (let Sr in Wr) {
            let Wr = "";
            for (const Zr of this._activePlugins) {
              const Ir = this._material.shaderLanguage;
              let Er = Zr.getCustomCode(Qr, Ir)?.[Sr];
              Er && (Zr.resolveIncludes && (null === fr && (fr = {
                defines: [],
                indexParameters: rr.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: jr.e.GetShadersRepository(Ir),
                includesShadersStore: jr.e.GetIncludesShadersStore(Ir),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                JZr: this._engine.JZr,
                processCodeAfterIncludes: void 0
              }), fr.isFragment = "fragment" === Qr, (0, ar.g)(Er, fr, (rr => Er = rr))), Wr += Er + "\n")
            }
            if (Wr.length > 0)
              if ("!" === Sr.charAt(0)) {
                Sr = Sr.substring(1);
                let rr = "g";
                if ("!" === Sr.charAt(0)) rr = "", Sr = Sr.substring(1);
                else {
                  const Qr = Ir.exec(Sr);
                  Qr && Qr.length >= 2 && (rr = Qr[1], Sr = Sr.substring(rr.length + 1))
                }
                rr.indexOf("g") < 0 && (rr += "g");
                const Qr = new RegExp(Sr, rr);
                let ar = Qr.exec(Zr);
                for (; null !== ar;) {
                  const {
                    index: rr
                  } = ar, Sr = Er(Wr, ar);
                  Zr = Zr.substring(0, rr) + Sr + Zr.substring(rr + ar[0].length), Qr.lastIndex = rr + Sr.length, ar = Qr.exec(Zr)
                }
              } else {
                const rr = "#define " + Sr;
                Zr = Zr.replace(rr, "\n" + Wr + "\n" + rr)
              }
          }
          return Zr
        }
      }
    }
    fr._MaterialPluginClassToMainDefine = {}, fr._MaterialPluginCounter = 0;

    function Er(rr, Sr) {
      return rr.replace(/\$(\d+)/g, ((rr, Qr) => {
        const Zr = Number(Qr);
        return Zr < Sr.length ? Sr[Zr] : ""
      }))
    }
    var pr = Qr(41889),
      xr = Qr(38609);
    let mr = (() => {
        var rr;
        let Sr, Qr, ar, jr, Ir = [],
          Er = [],
          xr = [],
          mr = [],
          Nr = [],
          Ur = [],
          tr = [],
          hr = [];
        return rr = class {
          isCompatible(rr) {
            return 0 === rr
          }
          _enable(rr) {
            rr && this._pluginManager._activatePlugin(this)
          }
          constructor(rr, Sr, Qr, Wr) {
            let ar = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              jr = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              pr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, Zr.m)(this, Ir, void 0), this.priority = ((0, Zr.m)(this, Er), (0, Zr.m)(this, xr, 500)), this.resolveIncludes = ((0, Zr.m)(this, mr), (0, Zr.m)(this, Nr, !1)), this.registerForExtraEvents = ((0, Zr.m)(this, Ur), (0, Zr.m)(this, tr, !1)), this.doNotSerialize = ((0, Zr.m)(this, hr), !1), this._material = rr, this.name = Sr, this.priority = Qr, this.resolveIncludes = pr, rr.pluginManager || (rr.pluginManager = new fr(rr), rr.lC.add((() => {
              rr.pluginManager = void 0
            }))), this._pluginDefineNames = Wr, this._pluginManager = rr.pluginManager, ar && this._pluginManager._addPlugin(this), jr && this._enable(!0), this.markAllDefinesAsDirty = rr._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(rr, Sr, Qr, Zr) {
            return !0
          }
          hardBindForSubMesh(rr, Sr, Qr, Zr) {}
          bindForSubMesh(rr, Sr, Qr, Zr) {}
          dispose(rr) {}
          getCustomCode(rr) {
            return null
          }
          collectDefines(rr) {
            if (this._pluginDefineNames)
              for (const Sr of Object.keys(this._pluginDefineNames)) {
                if ("_" === Sr[0]) continue;
                const Qr = typeof this._pluginDefineNames[Sr];
                rr[Sr] = {
                  type: "number" === Qr ? "number" : "string" === Qr ? "string" : "boolean" === Qr ? "boolean" : "object",
                  default: this._pluginDefineNames[Sr]
                }
              }
          }
          prepareDefinesBeforeAttributes(rr, Sr, Qr) {}
          prepareDefines(rr, Sr, Qr) {}
          hasTexture(rr) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(rr) {}
          getActiveTextures(rr) {}
          getAnimatables(rr) {}
          addFallbacks(rr, Sr, Qr) {
            return Qr
          }
          getSamplers(rr) {}
          getAttributes(rr, Sr, Qr) {}
          getUniformBuffersNames(rr) {}
          getUniforms() {
            return {}
          }
          copyTo(rr) {
            pr.e.Clone((() => rr), this)
          }
          serialize() {
            return pr.e.Serialize(this)
          }
          parse(rr, Sr, Qr) {
            pr.e.Parse((() => this), rr, Sr, Qr)
          }
        }, (() => {
          const fr = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Sr = [(0, Wr.G)()], Qr = [(0, Wr.G)()], ar = [(0, Wr.G)()], jr = [(0, Wr.G)()], (0, Zr.k)(null, null, Sr, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: rr => "name" in rr,
              get: rr => rr.name,
              set: (rr, Sr) => {
                rr.name = Sr
              }
            },
            metadata: fr
          }, Ir, Er), (0, Zr.k)(null, null, Qr, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: rr => "priority" in rr,
              get: rr => rr.priority,
              set: (rr, Sr) => {
                rr.priority = Sr
              }
            },
            metadata: fr
          }, xr, mr), (0, Zr.k)(null, null, ar, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: rr => "resolveIncludes" in rr,
              get: rr => rr.resolveIncludes,
              set: (rr, Sr) => {
                rr.resolveIncludes = Sr
              }
            },
            metadata: fr
          }, Nr, Ur), (0, Zr.k)(null, null, jr, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: rr => "registerForExtraEvents" in rr,
              get: rr => rr.registerForExtraEvents,
              set: (rr, Sr) => {
                rr.registerForExtraEvents = Sr
              }
            },
            metadata: fr
          }, tr, hr), fr && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fr
          })
        })(), rr
      })(),
      Nr = !1;

    function Ur() {
      Nr || (Nr = !0, (0, xr.e)("BABYLON.MaterialPluginBase", mr))
    }
  },
  42111: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    class Zr {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(rr) {
        rr.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(rr) {}
      bindForSubMesh(rr, Sr, Qr, Zr, Wr) {
        if (Sr.prePassRenderer && Sr.prePassRenderer.enabled && Sr.prePassRenderer.currentRTisSceneRT && (-1 !== Sr.prePassRenderer.getIndex(2) || -1 !== Sr.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[Qr.uniqueId] || (this.previousWorldMatrices[Qr.uniqueId] = Zr.clone()), this.previousViewProjection || (this.previousViewProjection = Sr.getTransformMatrix().clone(), this.currentViewProjection = Sr.getTransformMatrix().clone());
          const Wr = Sr.MU();
          this.currentViewProjection.updateFlag !== Sr.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = Wr.frameId, this.previousViewProjection.iH(this.currentViewProjection), this.currentViewProjection.iH(Sr.getTransformMatrix())) : this._lastUpdateFrameId !== Wr.frameId && (this._lastUpdateFrameId = Wr.frameId, this.previousViewProjection.iH(this.currentViewProjection)), rr.setMatrix("previousWorld", this.previousWorldMatrices[Qr.uniqueId]), rr.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[Qr.uniqueId] = Zr.clone()
        }
      }
    }
  },
  42227: (rr, Sr, Qr) => {
    function Zr(rr) {
      return class extends rr {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    Qr.d(Sr, {
      e: () => Zr
    })
  },
  42100: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      StandardMaterial: () => Zr.d
    });
    var Zr = Qr(42103);
    (0, Zr.c)()
  },
  42103: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Cr,
      d: () => Rr
    });
    var Zr = Qr(41872),
      Wr = Qr(41875),
      ar = Qr(41960),
      jr = Qr(41941),
      Ir = Qr(38684),
      fr = Qr(41995),
      Er = Qr(42111),
      pr = Qr(42119),
      xr = Qr(41965),
      mr = Qr(42130),
      Nr = Qr(42121),
      Ur = Qr(42184),
      tr = Qr(42178),
      hr = Qr(42192),
      zr = Qr(42198),
      Yr = Qr(42174),
      nr = Qr(42206),
      er = Qr(42167),
      Kr = Qr(41889),
      yr = Qr(42211),
      Br = Qr(42215),
      Tr = Qr(42219),
      vr = Qr(42227),
      Or = Qr(42232),
      Lr = Qr(38609),
      lr = Qr(41769);
    const Xr = {
      effect: null,
      subMesh: null
    };
    class Pr extends((0, vr.e)((0, Tr.c)(Nr.b))) {}
    class Hr extends((0, pr.g)(Pr)) {
      constructor(rr) {
        super(rr), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class qr extends((0, Or.b)(Ur.b)) {}
    let Rr = (() => {
        var rr, Sr, pr, Nr, Tr, vr, Or, Lr, lr, Pr, Rr, gr, Cr, Mr, Gr, kr, Ar, Vr, ir, wr, cr, Fr, or, br, Jr, Dr, dr, sr, ur, rS, SS, QS, ZS;
        let WS, aS, jS, IS, fS, ES, pS, xS, mS, NS, US, tS, hS, zS, YS, nS, eS, KS, yS, BS, TS, vS, OS, LS, lS, XS, PS, HS, qS, RS, gS, CS, MS, GS, kS, AS, VS, iS, wS, cS, FS, oS, bS, JS, DS, dS, sS, uS, rQ, SQ, QQ, ZQ, WQ, aQ, jQ, IQ, fQ, EQ, pQ, xQ, mQ, NQ, UQ, tQ, hQ, zQ, YQ, nQ, eQ, KQ, yQ, BQ, TQ, vQ = qr,
          OQ = [],
          LQ = [],
          lQ = [],
          XQ = [],
          PQ = [],
          HQ = [],
          qQ = [],
          RQ = [],
          gQ = [],
          CQ = [],
          MQ = [],
          GQ = [],
          kQ = [],
          AQ = [],
          VQ = [],
          iQ = [],
          wQ = [],
          cQ = [],
          FQ = [],
          oQ = [],
          bQ = [],
          JQ = [],
          DQ = [],
          dQ = [],
          sQ = [],
          uQ = [],
          rZ = [],
          SZ = [],
          QZ = [],
          ZZ = [],
          WZ = [],
          aZ = [],
          jZ = [],
          IZ = [],
          fZ = [],
          EZ = [],
          pZ = [],
          xZ = [],
          mZ = [],
          NZ = [],
          UZ = [],
          tZ = [],
          hZ = [],
          zZ = [],
          YZ = [],
          nZ = [],
          eZ = [],
          KZ = [],
          yZ = [],
          BZ = [],
          TZ = [],
          vZ = [],
          OZ = [],
          LZ = [],
          lZ = [],
          XZ = [],
          PZ = [],
          HZ = [],
          qZ = [],
          RZ = [],
          gZ = [],
          CZ = [],
          MZ = [],
          GZ = [],
          kZ = [],
          AZ = [],
          VZ = [],
          iZ = [],
          wZ = [],
          cZ = [],
          FZ = [],
          oZ = [],
          bZ = [],
          JZ = [],
          DZ = [],
          dZ = [],
          sZ = [],
          uZ = [],
          rW = [],
          SW = [],
          QW = [],
          ZW = [],
          WW = [],
          aW = [],
          jW = [],
          IW = [],
          fW = [],
          EW = [],
          pW = [],
          xW = [],
          mW = [],
          NW = [],
          UW = [],
          tW = [],
          hW = [],
          zW = [],
          YW = [],
          nW = [],
          eW = [],
          KW = [],
          yW = [],
          BW = [],
          TW = [],
          vW = [],
          OW = [],
          LW = [],
          lW = [],
          XW = [],
          PW = [],
          HW = [],
          qW = [],
          RW = [],
          gW = [],
          CW = [],
          MW = [],
          GW = [],
          kW = [],
          AW = [],
          VW = [],
          iW = [],
          wW = [],
          cW = [],
          FW = [],
          oW = [],
          bW = [],
          JW = [],
          DW = [],
          dW = [],
          sW = [],
          uW = [],
          ra = [],
          Sa = [],
          Qa = [],
          Za = [],
          Wa = [],
          aa = [],
          ja = [],
          Ia = [],
          fa = [],
          Ea = [],
          pa = [],
          xa = [],
          ma = [],
          Na = [],
          Ua = [],
          ta = [];
        return rr = class extends vQ {
          get diffuseTexture() {
            return (0, Zr.e)(this, Sr, "f")
          }
          set diffuseTexture(rr) {
            (0, Zr.i)(this, Sr, rr, "f")
          }
          get ambientTexture() {
            return (0, Zr.e)(this, pr, "f")
          }
          set ambientTexture(rr) {
            (0, Zr.i)(this, pr, rr, "f")
          }
          get opacityTexture() {
            return (0, Zr.e)(this, Nr, "f")
          }
          set opacityTexture(rr) {
            (0, Zr.i)(this, Nr, rr, "f")
          }
          get reflectionTexture() {
            return (0, Zr.e)(this, Tr, "f")
          }
          set reflectionTexture(rr) {
            (0, Zr.i)(this, Tr, rr, "f")
          }
          get emissiveTexture() {
            return (0, Zr.e)(this, vr, "f")
          }
          set emissiveTexture(rr) {
            (0, Zr.i)(this, vr, rr, "f")
          }
          get specularTexture() {
            return (0, Zr.e)(this, Or, "f")
          }
          set specularTexture(rr) {
            (0, Zr.i)(this, Or, rr, "f")
          }
          get bumpTexture() {
            return (0, Zr.e)(this, Lr, "f")
          }
          set bumpTexture(rr) {
            (0, Zr.i)(this, Lr, rr, "f")
          }
          get lightmapTexture() {
            return (0, Zr.e)(this, lr, "f")
          }
          set lightmapTexture(rr) {
            (0, Zr.i)(this, lr, rr, "f")
          }
          get refractionTexture() {
            return (0, Zr.e)(this, Pr, "f")
          }
          set refractionTexture(rr) {
            (0, Zr.i)(this, Pr, rr, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, Zr.e)(this, Rr, "f")
          }
          set useAlphaFromDiffuseTexture(rr) {
            (0, Zr.i)(this, Rr, rr, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, Zr.e)(this, gr, "f")
          }
          set useEmissiveAsIllumination(rr) {
            (0, Zr.i)(this, gr, rr, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, Zr.e)(this, Cr, "f")
          }
          set linkEmissiveWithDiffuse(rr) {
            (0, Zr.i)(this, Cr, rr, "f")
          }
          get useSpecularOverAlpha() {
            return (0, Zr.e)(this, Mr, "f")
          }
          set useSpecularOverAlpha(rr) {
            (0, Zr.i)(this, Mr, rr, "f")
          }
          get useReflectionOverAlpha() {
            return (0, Zr.e)(this, Gr, "f")
          }
          set useReflectionOverAlpha(rr) {
            (0, Zr.i)(this, Gr, rr, "f")
          }
          get disableLighting() {
            return (0, Zr.e)(this, kr, "f")
          }
          set disableLighting(rr) {
            (0, Zr.i)(this, kr, rr, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, Zr.e)(this, Ar, "f")
          }
          set useObjectSpaceNormalMap(rr) {
            (0, Zr.i)(this, Ar, rr, "f")
          }
          get useParallax() {
            return (0, Zr.e)(this, Vr, "f")
          }
          set useParallax(rr) {
            (0, Zr.i)(this, Vr, rr, "f")
          }
          get useParallaxOcclusion() {
            return (0, Zr.e)(this, ir, "f")
          }
          set useParallaxOcclusion(rr) {
            (0, Zr.i)(this, ir, rr, "f")
          }
          get roughness() {
            return (0, Zr.e)(this, wr, "f")
          }
          set roughness(rr) {
            (0, Zr.i)(this, wr, rr, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, Zr.e)(this, cr, "f")
          }
          set useLightmapAsShadowmap(rr) {
            (0, Zr.i)(this, cr, rr, "f")
          }
          get diffuseFresnelParameters() {
            return (0, Zr.e)(this, Fr, "f")
          }
          set diffuseFresnelParameters(rr) {
            (0, Zr.i)(this, Fr, rr, "f")
          }
          get opacityFresnelParameters() {
            return (0, Zr.e)(this, or, "f")
          }
          set opacityFresnelParameters(rr) {
            (0, Zr.i)(this, or, rr, "f")
          }
          get reflectionFresnelParameters() {
            return (0, Zr.e)(this, br, "f")
          }
          set reflectionFresnelParameters(rr) {
            (0, Zr.i)(this, br, rr, "f")
          }
          get refractionFresnelParameters() {
            return (0, Zr.e)(this, Jr, "f")
          }
          set refractionFresnelParameters(rr) {
            (0, Zr.i)(this, Jr, rr, "f")
          }
          get emissiveFresnelParameters() {
            return (0, Zr.e)(this, Dr, "f")
          }
          set emissiveFresnelParameters(rr) {
            (0, Zr.i)(this, Dr, rr, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, Zr.e)(this, dr, "f")
          }
          set useReflectionFresnelFromSpecular(rr) {
            (0, Zr.i)(this, dr, rr, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, Zr.e)(this, sr, "f")
          }
          set useGlossinessFromSpecularMapAlpha(rr) {
            (0, Zr.i)(this, sr, rr, "f")
          }
          get maxSimultaneousLights() {
            return (0, Zr.e)(this, ur, "f")
          }
          set maxSimultaneousLights(rr) {
            (0, Zr.i)(this, ur, rr, "f")
          }
          get invertNormalMapX() {
            return (0, Zr.e)(this, rS, "f")
          }
          set invertNormalMapX(rr) {
            (0, Zr.i)(this, rS, rr, "f")
          }
          get invertNormalMapY() {
            return (0, Zr.e)(this, SS, "f")
          }
          set invertNormalMapY(rr) {
            (0, Zr.i)(this, SS, rr, "f")
          }
          get twoSidedLighting() {
            return (0, Zr.e)(this, QS, "f")
          }
          set twoSidedLighting(rr) {
            (0, Zr.i)(this, QS, rr, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Zr.e)(this, ZS, "f")
          }
          set applyDecalMapAfterDetailMap(rr) {
            (0, Zr.i)(this, ZS, rr, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(Qr, Wr) {
            super(Qr, Wr, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || rr.ForceGLSL), this._diffuseTexture = (0, Zr.m)(this, OQ, null), Sr.set(this, ((0, Zr.m)(this, LQ), (0, Zr.m)(this, lQ, void 0))), this._ambientTexture = ((0, Zr.m)(this, XQ), (0, Zr.m)(this, PQ, null)), pr.set(this, ((0, Zr.m)(this, HQ), (0, Zr.m)(this, qQ, void 0))), this._opacityTexture = ((0, Zr.m)(this, RQ), (0, Zr.m)(this, gQ, null)), Nr.set(this, ((0, Zr.m)(this, CQ), (0, Zr.m)(this, MQ, void 0))), this._reflectionTexture = ((0, Zr.m)(this, GQ), (0, Zr.m)(this, kQ, null)), Tr.set(this, ((0, Zr.m)(this, AQ), (0, Zr.m)(this, VQ, void 0))), this._emissiveTexture = ((0, Zr.m)(this, iQ), (0, Zr.m)(this, wQ, null)), vr.set(this, ((0, Zr.m)(this, cQ), (0, Zr.m)(this, FQ, void 0))), this._specularTexture = ((0, Zr.m)(this, oQ), (0, Zr.m)(this, bQ, null)), Or.set(this, ((0, Zr.m)(this, JQ), (0, Zr.m)(this, DQ, void 0))), this._bumpTexture = ((0, Zr.m)(this, dQ), (0, Zr.m)(this, sQ, null)), Lr.set(this, ((0, Zr.m)(this, uQ), (0, Zr.m)(this, rZ, void 0))), this._lightmapTexture = ((0, Zr.m)(this, SZ), (0, Zr.m)(this, QZ, null)), lr.set(this, ((0, Zr.m)(this, ZZ), (0, Zr.m)(this, WZ, void 0))), this._refractionTexture = ((0, Zr.m)(this, aZ), (0, Zr.m)(this, jZ, null)), Pr.set(this, ((0, Zr.m)(this, IZ), (0, Zr.m)(this, fZ, void 0))), this.ambientColor = ((0, Zr.m)(this, EZ), (0, Zr.m)(this, pZ, new Ir.e(0, 0, 0))), this.diffuseColor = ((0, Zr.m)(this, xZ), (0, Zr.m)(this, mZ, new Ir.e(1, 1, 1))), this.specularColor = ((0, Zr.m)(this, NZ), (0, Zr.m)(this, UZ, new Ir.e(1, 1, 1))), this.emissiveColor = ((0, Zr.m)(this, tZ), (0, Zr.m)(this, hZ, new Ir.e(0, 0, 0))), this.specularPower = ((0, Zr.m)(this, zZ), (0, Zr.m)(this, YZ, 64)), this._useAlphaFromDiffuseTexture = ((0, Zr.m)(this, nZ), (0, Zr.m)(this, eZ, !1)), Rr.set(this, ((0, Zr.m)(this, KZ), (0, Zr.m)(this, yZ, void 0))), this._useEmissiveAsIllumination = ((0, Zr.m)(this, BZ), (0, Zr.m)(this, TZ, !1)), gr.set(this, ((0, Zr.m)(this, vZ), (0, Zr.m)(this, OZ, void 0))), this._linkEmissiveWithDiffuse = ((0, Zr.m)(this, LZ), (0, Zr.m)(this, lZ, !1)), Cr.set(this, ((0, Zr.m)(this, XZ), (0, Zr.m)(this, PZ, void 0))), this._useSpecularOverAlpha = ((0, Zr.m)(this, HZ), (0, Zr.m)(this, qZ, !1)), Mr.set(this, ((0, Zr.m)(this, RZ), (0, Zr.m)(this, gZ, void 0))), this._useReflectionOverAlpha = ((0, Zr.m)(this, CZ), (0, Zr.m)(this, MZ, !1)), Gr.set(this, ((0, Zr.m)(this, GZ), (0, Zr.m)(this, kZ, void 0))), this._disableLighting = ((0, Zr.m)(this, AZ), (0, Zr.m)(this, VZ, !1)), kr.set(this, ((0, Zr.m)(this, iZ), (0, Zr.m)(this, wZ, void 0))), this._useObjectSpaceNormalMap = ((0, Zr.m)(this, cZ), (0, Zr.m)(this, FZ, !1)), Ar.set(this, ((0, Zr.m)(this, oZ), (0, Zr.m)(this, bZ, void 0))), this._useParallax = ((0, Zr.m)(this, JZ), (0, Zr.m)(this, DZ, !1)), Vr.set(this, ((0, Zr.m)(this, dZ), (0, Zr.m)(this, sZ, void 0))), this._useParallaxOcclusion = ((0, Zr.m)(this, uZ), (0, Zr.m)(this, rW, !1)), ir.set(this, ((0, Zr.m)(this, SW), (0, Zr.m)(this, QW, void 0))), this.parallaxScaleBias = ((0, Zr.m)(this, ZW), (0, Zr.m)(this, WW, .05)), this._roughness = ((0, Zr.m)(this, aW), (0, Zr.m)(this, jW, 0)), wr.set(this, ((0, Zr.m)(this, IW), (0, Zr.m)(this, fW, void 0))), this.indexOfRefraction = ((0, Zr.m)(this, EW), (0, Zr.m)(this, pW, .98)), this.invertRefractionY = ((0, Zr.m)(this, xW), (0, Zr.m)(this, mW, !0)), this.alphaCutOff = ((0, Zr.m)(this, NW), (0, Zr.m)(this, UW, .4)), this._useLightmapAsShadowmap = ((0, Zr.m)(this, tW), (0, Zr.m)(this, hW, !1)), cr.set(this, ((0, Zr.m)(this, zW), (0, Zr.m)(this, YW, void 0))), this._diffuseFresnelParameters = ((0, Zr.m)(this, nW), (0, Zr.m)(this, eW, void 0)), Fr.set(this, ((0, Zr.m)(this, KW), (0, Zr.m)(this, yW, void 0))), this._opacityFresnelParameters = ((0, Zr.m)(this, BW), (0, Zr.m)(this, TW, void 0)), or.set(this, ((0, Zr.m)(this, vW), (0, Zr.m)(this, OW, void 0))), this._reflectionFresnelParameters = ((0, Zr.m)(this, LW), (0, Zr.m)(this, lW, void 0)), br.set(this, ((0, Zr.m)(this, XW), (0, Zr.m)(this, PW, void 0))), this._refractionFresnelParameters = ((0, Zr.m)(this, HW), (0, Zr.m)(this, qW, void 0)), Jr.set(this, ((0, Zr.m)(this, RW), (0, Zr.m)(this, gW, void 0))), this._emissiveFresnelParameters = ((0, Zr.m)(this, CW), (0, Zr.m)(this, MW, void 0)), Dr.set(this, ((0, Zr.m)(this, GW), (0, Zr.m)(this, kW, void 0))), this._useReflectionFresnelFromSpecular = ((0, Zr.m)(this, AW), (0, Zr.m)(this, VW, !1)), dr.set(this, ((0, Zr.m)(this, iW), (0, Zr.m)(this, wW, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, Zr.m)(this, cW), (0, Zr.m)(this, FW, !1)), sr.set(this, ((0, Zr.m)(this, oW), (0, Zr.m)(this, bW, void 0))), this._maxSimultaneousLights = ((0, Zr.m)(this, JW), (0, Zr.m)(this, DW, 4)), ur.set(this, ((0, Zr.m)(this, dW), (0, Zr.m)(this, sW, void 0))), this._invertNormalMapX = ((0, Zr.m)(this, uW), (0, Zr.m)(this, ra, !1)), rS.set(this, ((0, Zr.m)(this, Sa), (0, Zr.m)(this, Qa, void 0))), this._invertNormalMapY = ((0, Zr.m)(this, Za), (0, Zr.m)(this, Wa, !1)), SS.set(this, ((0, Zr.m)(this, aa), (0, Zr.m)(this, ja, void 0))), this._twoSidedLighting = ((0, Zr.m)(this, Ia), (0, Zr.m)(this, fa, !1)), QS.set(this, ((0, Zr.m)(this, Ea), (0, Zr.m)(this, pa, void 0))), this._applyDecalMapAfterDetailMap = ((0, Zr.m)(this, xa), (0, Zr.m)(this, ma, !1)), ZS.set(this, ((0, Zr.m)(this, Na), (0, Zr.m)(this, Ua, void 0))), this._vertexPullingMetadata = ((0, Zr.m)(this, ta), null), this._renderTargets = new ar.h(16), this._globalAmbientColor = new Ir.e(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new zr.b(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new Er.b, this.getRenderTargetTextures = () => (this._renderTargets.reset(), rr.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), rr.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(rr.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(rr.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === mr.d.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== mr.d.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(Sr, Qr) {
            let Zr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Wr = Qr._drawWrapper;
            if (Wr.effect && this.isFrozen && Wr._wasPreviouslyReady && Wr._wasPreviouslyUsingInstances === Zr) return !0;
            Qr.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Qr.materialDefines = new Hr(this._eventInfo.defineNames));
            const ar = this.eC(),
              jr = Qr.materialDefines;
            if (this._isReadyForSubMesh(Qr)) return !0;
            const Ir = ar.MU();
            if (jr._needNormals = (0, er.W)(ar, Sr, jr, !0, this._maxSimultaneousLights, this._disableLighting), !(0, er.b)(ar, Sr, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, er.ab)(ar, jr);
            const pr = this.needAlphaBlendingForMesh(Sr) && this.eC().useOrderIndependentTransparency;
            if ((0, er.fb)(ar, jr, this.canRenderToMRT && !pr), (0, er.db)(ar, jr, pr), Br.b.PrepareDefines(Ir.currentRenderPassId, Sr, jr), jr._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, jr._needUVs = !1;
              for (let rr = 1; rr <= 6; ++rr) jr["MAINUV" + rr] = !1;
              if (ar.texturesEnabled) {
                if (jr.DIFFUSEDIRECTUV = 0, jr.BUMPDIRECTUV = 0, jr.AMBIENTDIRECTUV = 0, jr.OPACITYDIRECTUV = 0, jr.EMISSIVEDIRECTUV = 0, jr.SPECULARDIRECTUV = 0, jr.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && rr.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, er.Y)(this._diffuseTexture, jr, "DIFFUSE")
                } else jr.DIFFUSE = !1;
                if (this._ambientTexture && rr.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, er.Y)(this._ambientTexture, jr, "AMBIENT")
                } else jr.AMBIENT = !1;
                if (this._opacityTexture && rr.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, er.Y)(this._opacityTexture, jr, "OPACITY"), jr.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else jr.OPACITY = !1;
                if (this._reflectionTexture && rr.ReflectionTextureEnabled ? (jr.ROUGHNESS = this._roughness > 0, jr.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (jr.ROUGHNESS = !1, jr.REFLECTIONOVERALPHA = !1), !(0, er.U)(ar, this._reflectionTexture, jr)) return !1;
                if (this._emissiveTexture && rr.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, er.Y)(this._emissiveTexture, jr, "EMISSIVE")
                } else jr.EMISSIVE = !1;
                if (this._lightmapTexture && rr.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, er.Y)(this._lightmapTexture, jr, "LIGHTMAP"), jr.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, jr.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else jr.LIGHTMAP = !1;
                if (this._specularTexture && rr.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, er.Y)(this._specularTexture, jr, "SPECULAR"), jr.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else jr.SPECULAR = !1;
                if (ar.MU().getCaps().standardDerivatives && this._bumpTexture && rr.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, er.Y)(this._bumpTexture, jr, "BUMP"), jr.PARALLAX = this._useParallax, jr.PARALLAX_RHS = ar.useRightHandedSystem, jr.PARALLAXOCCLUSION = this._useParallaxOcclusion, jr.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else jr.BUMP = !1, jr.PARALLAX = !1, jr.PARALLAX_RHS = !1, jr.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && rr.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  jr._needUVs = !0, jr.REFRACTION = !0, jr.REFRACTIONMAP_3D = this._refractionTexture.isCube, jr.RGBDREFRACTION = this._refractionTexture.isRGBD, jr.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else jr.REFRACTION = !1;
                jr.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else jr.DIFFUSE = !1, jr.AMBIENT = !1, jr.OPACITY = !1, jr.REFLECTION = !1, jr.EMISSIVE = !1, jr.LIGHTMAP = !1, jr.BUMP = !1, jr.REFRACTION = !1;
              jr.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), jr.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, jr.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, jr.SPECULAROVERALPHA = this._useSpecularOverAlpha, jr.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, jr.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, jr.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(Sr), jr.TEXTURE_REPETITION_MODE = Ir.version > 1 || Ir.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = jr, this._eventInfo.subMesh = Qr, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (jr._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(jr), jr.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, jr.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (jr._areFresnelDirty && (rr.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (jr.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, jr.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, jr.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, jr.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, jr.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, jr.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, jr._needNormals = !0, jr.FRESNEL = !0) : jr.FRESNEL = !1), jr.AREALIGHTUSED || jr.CLUSTLIGHT_BATCH)
              for (let rr = 0; rr < Sr.lightSources.length; rr++)
                if (!Sr.lightSources[rr]._isReady()) return !1;
            (0, er.Z)(Sr, ar, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Sr), jr, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Qr.getRenderingMesh(), this._isVertexOutputInvariant), (0, er.Q)(ar, Ir, this, jr, Zr, null, Qr.getRenderingMesh().hasThinInstances), this._eventInfo.defines = jr, this._eventInfo.mesh = Sr, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, er.N)(Sr, jr, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let mr = !1;
            if (jr.isDirty) {
              const Zr = jr._areLightsDisposed;
              jr.markAsProcessed();
              const Wr = new hr.e;
              jr.REFLECTION && Wr.addFallback(0, "REFLECTION"), jr.SPECULAR && Wr.addFallback(0, "SPECULAR"), jr.BUMP && Wr.addFallback(0, "BUMP"), jr.PARALLAX && Wr.addFallback(1, "PARALLAX"), jr.PARALLAX_RHS && Wr.addFallback(1, "PARALLAX_RHS"), jr.PARALLAXOCCLUSION && Wr.addFallback(0, "PARALLAXOCCLUSION"), jr.SPECULAROVERALPHA && Wr.addFallback(0, "SPECULAROVERALPHA"), jr.FOG && Wr.addFallback(1, "FOG"), jr.POINTSIZE && Wr.addFallback(0, "POINTSIZE"), jr.LOGARITHMICDEPTH && Wr.addFallback(0, "LOGARITHMICDEPTH"), (0, er.C)(jr, Wr, this._maxSimultaneousLights), jr.SPECULARTERM && Wr.addFallback(0, "SPECULARTERM"), jr.DIFFUSEFRESNEL && Wr.addFallback(1, "DIFFUSEFRESNEL"), jr.OPACITYFRESNEL && Wr.addFallback(2, "OPACITYFRESNEL"), jr.REFLECTIONFRESNEL && Wr.addFallback(3, "REFLECTIONFRESNEL"), jr.EMISSIVEFRESNEL && Wr.addFallback(4, "EMISSIVEFRESNEL"), jr.FRESNEL && Wr.addFallback(4, "FRESNEL"), jr.MULTIVIEW && Wr.addFallback(0, "MULTIVIEW");
              const pr = [fr.j.PositionKind];
              jr.NORMAL && pr.push(fr.j.NormalKind), jr.TANGENT && pr.push(fr.j.TangentKind);
              for (let rr = 1; rr <= 6; ++rr) jr["UV" + rr] && pr.push(`uv${1===rr?"":rr}`);
              jr.VERTEXCOLOR && pr.push(fr.j.ColorKind), (0, er.G)(pr, Sr, jr, Wr), (0, er.I)(pr, jr), (0, er.K)(pr, Sr, jr), (0, er.E)(pr, Sr, jr);
              let Nr = "default";
              const Ur = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                tr = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, er.mb)(Ur, tr, !1);
              const zr = ["Material", "Scene", "Mesh"],
                Kr = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: jr.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = Wr, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = jr, this._eventInfo.uniforms = Ur, this._eventInfo.attributes = pr, this._eventInfo.samplers = tr, this._eventInfo.uniformBuffersNames = zr, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Sr, this._eventInfo.indexParameters = Kr, this._callbackPluginEventGeneric(128, this._eventInfo), Br.b.AddUniformsAndSamplers(Ur, tr), Er.b.AddUniforms(Ur), Er.b.AddSamplers(tr), xr.b && (xr.b.PrepareUniforms(Ur, jr), xr.b.PrepareSamplers(tr, jr)), (0, er.nb)({
                  uniformsNames: Ur,
                  uniformBuffersNames: zr,
                  samplers: tr,
                  defines: jr,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, Yr.c)(Ur), this._useVertexPulling) {
                const rr = Qr.getRenderingMesh(),
                  Sr = rr?.geometry;
                Sr && (this._vertexPullingMetadata = (0, nr.f)(Sr), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((rr, Sr) => {
                  Ur.push(`vp_${Sr}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const yr = {};
              this.customShaderNameResolve && (Nr = this.customShaderNameResolve(Nr, Ur, zr, tr, jr, pr, yr));
              const Tr = jr.toString(),
                vr = Qr.effect,
                Or = ar.MU().createEffect(Nr, {
                  attributes: pr,
                  uniformsNames: Ur,
                  uniformBuffersNames: zr,
                  samplers: tr,
                  defines: Tr,
                  fallbacks: Wr,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: Kr,
                  processFinalCode: yr.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: jr.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: rr._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, Ir);
              if (this._eventInfo.customCode = void 0, Or)
                if (this._onEffectCreatedObservable && (Xr.effect = Or, Xr.subMesh = Qr, this._onEffectCreatedObservable.notifyObservers(Xr)), this.allowShaderHotSwapping && vr && !Or.isReady()) {
                  if (jr.markAsUnprocessed(), mr = this.isFrozen, Zr) return jr._areLightsDisposed = !0, !1
                } else ar.resetCachedMaterial(), Qr.setEffect(Or, jr, this._materialContext)
            }
            return !(!Qr.effect || !Qr.effect.isReady()) && (jr._renderId = ar.getRenderId(), Wr._wasPreviouslyReady = !mr, Wr._wasPreviouslyUsingInstances = Zr, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const rr = this._uniformBuffer;
            rr.addUniform("diffuseLeftColor", 4), rr.addUniform("diffuseRightColor", 4), rr.addUniform("opacityParts", 4), rr.addUniform("reflectionLeftColor", 4), rr.addUniform("reflectionRightColor", 4), rr.addUniform("refractionLeftColor", 4), rr.addUniform("refractionRightColor", 4), rr.addUniform("emissiveLeftColor", 4), rr.addUniform("emissiveRightColor", 4), rr.addUniform("vDiffuseInfos", 2), rr.addUniform("vAmbientInfos", 2), rr.addUniform("vOpacityInfos", 2), rr.addUniform("vEmissiveInfos", 2), rr.addUniform("vLightmapInfos", 2), rr.addUniform("vSpecularInfos", 2), rr.addUniform("vBumpInfos", 3), rr.addUniform("diffuseMatrix", 16), rr.addUniform("ambientMatrix", 16), rr.addUniform("opacityMatrix", 16), rr.addUniform("emissiveMatrix", 16), rr.addUniform("lightmapMatrix", 16), rr.addUniform("specularMatrix", 16), rr.addUniform("bumpMatrix", 16), rr.addUniform("vTangentSpaceParams", 2), rr.addUniform("pointSize", 1), rr.addUniform("alphaCutOff", 1), rr.addUniform("refractionMatrix", 16), rr.addUniform("vRefractionInfos", 4), rr.addUniform("vRefractionPosition", 3), rr.addUniform("vRefractionSize", 3), rr.addUniform("vSpecularColor", 4), rr.addUniform("vEmissiveColor", 3), rr.addUniform("vDiffuseColor", 4), rr.addUniform("vAmbientColor", 3), rr.addUniform("cameraInfo", 4), rr.addUniform("vTextureRepetitionHexTilingParams", 4), (0, er.jb)(rr, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(Sr, Qr, Zr) {
            const Wr = this.eC(),
              ar = Zr.materialDefines;
            if (!ar) return;
            const fr = Zr.effect;
            if (!fr) return;
            this._activeEffect = fr, Qr.getMeshUniformBuffer().bindToEffect(fr, "Mesh"), Qr.transferToEffect(Sr), this._uniformBuffer.bindToEffect(fr, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Wr, Qr, Sr, this.isFrozen), Br.b.Bind(Wr.MU().currentRenderPassId, this._activeEffect, Qr, Sr, this);
            const Er = Wr.activeCamera;
            Er ? this._uniformBuffer.updateFloat4("cameraInfo", Er.minZ, Er.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const pr = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", pr[0], pr[1], pr[2], pr[3]), this._eventInfo.subMesh = Zr, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), ar.OBJECTSPACE_NORMALMAP && (Sr.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const xr = this._mustRebind(Wr, fr, Zr, Qr.visibility),
              mr = Wr.MU()._features.needToAlwaysBindUniformBuffers;
            (0, er.c)(Qr, fr), this._vertexPullingMetadata && (0, nr.d)(fr, this._vertexPullingMetadata);
            const Nr = this._uniformBuffer;
            if (xr) {
              if (this.bindViewProjection(fr), !Nr.useUbo || !this.isFrozen || !Nr.isSync || Zr._drawWrapper._forceRebindOnNextCall) {
                if (rr.FresnelEnabled && ar.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (Nr.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), Nr.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const rr = Ir.l.Color3[0];
                    rr.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), Nr.updateColor4("opacityParts", rr, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (Nr.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), Nr.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (Nr.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), Nr.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (Nr.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), Nr.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (ar.ALPHATEST && Nr.updateFloat("alphaCutOff", this.alphaCutOff), Wr.texturesEnabled && (this._diffuseTexture && rr.DiffuseTextureEnabled && (Nr.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, er.B)(this._diffuseTexture, Nr, "diffuse")), this._ambientTexture && rr.AmbientTextureEnabled && (Nr.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, er.B)(this._ambientTexture, Nr, "ambient")), this._opacityTexture && rr.OpacityTextureEnabled && (Nr.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, er.B)(this._opacityTexture, Nr, "opacity")), (0, er.f)(Wr, ar, Nr, Ir.e.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && rr.ReflectionTextureEnabled || Nr.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && rr.EmissiveTextureEnabled && (Nr.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, er.B)(this._emissiveTexture, Nr, "emissive")), this._lightmapTexture && rr.LightmapTextureEnabled && (Nr.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, er.B)(this._lightmapTexture, Nr, "lightmap")), this._specularTexture && rr.SpecularTextureEnabled && (Nr.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, er.B)(this._specularTexture, Nr, "specular")), this._bumpTexture && Wr.MU().getCaps().standardDerivatives && rr.BumpTextureEnabled && (Nr.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, er.B)(this._bumpTexture, Nr, "bump"), Wr._mirroredCameraPosition ? Nr.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Nr.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && rr.RefractionTextureEnabled)) {
                  let rr = 1;
                  if (this._refractionTexture.isCube || (Nr.hrr("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (rr = this._refractionTexture.depth)), Nr.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, rr, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const rr = this._refractionTexture;
                    Nr.updateVector3("vRefractionPosition", rr.boundingBoxPosition), Nr.updateVector3("vRefractionSize", rr.boundingBoxSize)
                  }
                }
                this.pointsCloud && Nr.updateFloat("pointSize", this.pointSize), Nr.updateColor4("vSpecularColor", this.specularColor, this.specularPower), Nr.updateColor3("vEmissiveColor", rr.EmissiveTextureEnabled ? this.emissiveColor : Ir.e.BlackReadOnly), Nr.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), Wr.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), Nr.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              Wr.texturesEnabled && (this._diffuseTexture && rr.DiffuseTextureEnabled && fr.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && rr.AmbientTextureEnabled && fr.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && rr.OpacityTextureEnabled && fr.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && rr.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? fr.setTexture("reflectionCubeSampler", this._reflectionTexture) : fr.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && rr.EmissiveTextureEnabled && fr.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && rr.LightmapTextureEnabled && fr.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && rr.SpecularTextureEnabled && fr.setTexture("specularSampler", this._specularTexture), this._bumpTexture && Wr.MU().getCaps().standardDerivatives && rr.BumpTextureEnabled && fr.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && rr.RefractionTextureEnabled && (this._refractionTexture.isCube ? fr.setTexture("refractionCubeSampler", this._refractionTexture) : fr.setTexture("refraction2DSampler", this._refractionTexture))), this.eC().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Qr) && this.eC().depthPeelingRenderer.bind(fr), this._eventInfo.subMesh = Zr, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Yr.e)(fr, this, Wr), this.bindEyePosition(fr)
            } else mr && (this._needToBindSceneUbo = !0);
            !xr && this.isFrozen && !mr || !Wr.lightsEnabled || this._disableLighting || (0, er.m)(Wr, Qr, fr, ar, this._maxSimultaneousLights), !xr && this.isFrozen || ((Wr.fogEnabled && Qr.applyFog && Wr.fogMode !== jr.f.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || Qr.receiveShadows || ar.PREPASS || ar.CLUSTLIGHT_BATCH) && this.bindView(fr), (0, er.d)(Wr, Qr, fr), ar.NUM_MORPH_INFLUENCERS && (0, er.t)(Qr, fr), ar.BAKED_VERTEX_ANIMATION_TEXTURE && Qr.bakedVertexAnimationManager?.bind(fr, ar.INSTANCES), this.useLogarithmicDepth && (0, er.q)(ar, fr, Wr), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(Qr, this._activeEffect, Zr), Nr.update()
          }
          _canBindRunFollower(Sr, Qr, Zr, Wr, ar) {
            const jr = Sr.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === rr.prototype.isReadyForSubMesh && this.bindForSubMesh === rr.prototype.bindForSubMesh && this._mustRebind === Ur.b.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !Qr._features.needToAlwaysBindUniformBuffers && !(jr && jr.enabled && jr.currentRTisSceneRT) && !Br.b._Configurations[Qr.currentRenderPassId] && !Wr.materialDefines?.OBJECTSPACE_NORMALMAP && !Zr.skeleton && !ar._bonesComputationForcedToCPU
          }
          _bindRunFollower(rr, Sr, Qr, Zr) {
            this._activeEffect = Zr, Sr.getMeshUniformBuffer().bindToEffect(Zr, "Mesh"), Sr.transferToEffect(rr);
            const Wr = this._uniformBuffer;
            Wr.bindToEffect(Zr, "Material");
            const ar = this._scene.activeCamera;
            ar ? Wr.updateFloat4("cameraInfo", ar.minZ, ar.maxZ, 0, 0) : Wr.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const jr = this.textureRepetitionHexTilingParams;
            Wr.updateFloat4("vTextureRepetitionHexTilingParams", jr[0], jr[1], jr[2], jr[3]), this._afterBind(Sr, Zr, Qr), Wr.update()
          }
          getAnimatables() {
            const rr = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && rr.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && rr.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && rr.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && rr.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && rr.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && rr.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && rr.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && rr.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && rr.push(this._refractionTexture), rr
          }
          getActiveTextures() {
            const rr = super.getActiveTextures();
            return this._diffuseTexture && rr.push(this._diffuseTexture), this._ambientTexture && rr.push(this._ambientTexture), this._opacityTexture && rr.push(this._opacityTexture), this._reflectionTexture && rr.push(this._reflectionTexture), this._emissiveTexture && rr.push(this._emissiveTexture), this._specularTexture && rr.push(this._specularTexture), this._bumpTexture && rr.push(this._bumpTexture), this._lightmapTexture && rr.push(this._lightmapTexture), this._refractionTexture && rr.push(this._refractionTexture), rr
          }
          hasTexture(rr) {
            return !!super.hasTexture(rr) || (this._diffuseTexture === rr || (this._ambientTexture === rr || (this._opacityTexture === rr || (this._reflectionTexture === rr || (this._emissiveTexture === rr || (this._specularTexture === rr || (this._bumpTexture === rr || (this._lightmapTexture === rr || this._refractionTexture === rr))))))))
          }
          dispose(rr, Sr) {
            Sr && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(rr, Sr)
          }
          clone(Sr) {
            let Qr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Wr = Kr.e.Clone((() => new rr(Sr, this.eC())), this, {
              cloneTexturesOnlyOnce: Qr
            });
            return Wr.name = Sr, Wr.id = Sr, this.stencil.copyTo(Wr.stencil), this._clonePlugins(Wr, Zr), Wr
          }
          static Parse(Sr, Qr, Zr) {
            const Wr = Kr.e.Parse((() => new rr(Sr.name, Qr)), Sr, Qr, Zr);
            return Sr.stencil && Wr.stencil.parse(Sr.stencil, Qr, Zr), mr.d._ParsePlugins(Sr, Wr, Qr, Zr), Wr
          }
          static get DiffuseTextureEnabled() {
            return tr.d.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(rr) {
            tr.d.DiffuseTextureEnabled = rr
          }
          static get DetailTextureEnabled() {
            return tr.d.DetailTextureEnabled
          }
          static set DetailTextureEnabled(rr) {
            tr.d.DetailTextureEnabled = rr
          }
          static get AmbientTextureEnabled() {
            return tr.d.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(rr) {
            tr.d.AmbientTextureEnabled = rr
          }
          static get OpacityTextureEnabled() {
            return tr.d.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(rr) {
            tr.d.OpacityTextureEnabled = rr
          }
          static get ReflectionTextureEnabled() {
            return tr.d.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(rr) {
            tr.d.ReflectionTextureEnabled = rr
          }
          static get EmissiveTextureEnabled() {
            return tr.d.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(rr) {
            tr.d.EmissiveTextureEnabled = rr
          }
          static get SpecularTextureEnabled() {
            return tr.d.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(rr) {
            tr.d.SpecularTextureEnabled = rr
          }
          static get BumpTextureEnabled() {
            return tr.d.BumpTextureEnabled
          }
          static set BumpTextureEnabled(rr) {
            tr.d.BumpTextureEnabled = rr
          }
          static get LightmapTextureEnabled() {
            return tr.d.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(rr) {
            tr.d.LightmapTextureEnabled = rr
          }
          static get RefractionTextureEnabled() {
            return tr.d.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(rr) {
            tr.d.RefractionTextureEnabled = rr
          }
          static get ColorGradingTextureEnabled() {
            return tr.d.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(rr) {
            tr.d.ColorGradingTextureEnabled = rr
          }
          static get FresnelEnabled() {
            return tr.d.FresnelEnabled
          }
          static set FresnelEnabled(rr) {
            tr.d.FresnelEnabled = rr
          }
        }, Sr = new WeakMap, pr = new WeakMap, Nr = new WeakMap, Tr = new WeakMap, vr = new WeakMap, Or = new WeakMap, Lr = new WeakMap, lr = new WeakMap, Pr = new WeakMap, Rr = new WeakMap, gr = new WeakMap, Cr = new WeakMap, Mr = new WeakMap, Gr = new WeakMap, kr = new WeakMap, Ar = new WeakMap, Vr = new WeakMap, ir = new WeakMap, wr = new WeakMap, cr = new WeakMap, Fr = new WeakMap, or = new WeakMap, br = new WeakMap, Jr = new WeakMap, Dr = new WeakMap, dr = new WeakMap, sr = new WeakMap, ur = new WeakMap, rS = new WeakMap, SS = new WeakMap, QS = new WeakMap, ZS = new WeakMap, (() => {
          const Sr = "function" === typeof Symbol && Symbol.metadata ? Object.create(vQ[Symbol.metadata] ?? null) : void 0;
          WS = [(0, Wr.z)("diffuseTexture")], aS = [(0, Wr.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], jS = [(0, Wr.z)("ambientTexture")], IS = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], fS = [(0, Wr.z)("opacityTexture")], ES = [(0, Wr.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], pS = [(0, Wr.z)("reflectionTexture")], xS = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], mS = [(0, Wr.z)("emissiveTexture")], NS = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], US = [(0, Wr.z)("specularTexture")], tS = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], hS = [(0, Wr.z)("bumpTexture")], zS = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], YS = [(0, Wr.z)("lightmapTexture")], nS = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], eS = [(0, Wr.z)("refractionTexture")], KS = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], yS = [(0, Wr.n)("ambient")], BS = [(0, Wr.n)("diffuse")], TS = [(0, Wr.n)("specular")], vS = [(0, Wr.n)("emissive")], OS = [(0, Wr.G)()], LS = [(0, Wr.G)("useAlphaFromDiffuseTexture")], lS = [() => ({
            init(rr) {
              return void 0 === rr && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = rr), rr
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(rr) {
              this._useAlphaFromDiffuseTexture = rr
            }
          })], XS = [(0, Wr.G)("useEmissiveAsIllumination")], PS = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], HS = [(0, Wr.G)("linkEmissiveWithDiffuse")], qS = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], RS = [(0, Wr.G)("useSpecularOverAlpha")], gS = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], CS = [(0, Wr.G)("useReflectionOverAlpha")], MS = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], GS = [(0, Wr.G)("disableLighting")], kS = [(0, Wr.f)("_markAllSubMeshesAsLightsDirty")], AS = [(0, Wr.G)("useObjectSpaceNormalMap")], VS = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], iS = [(0, Wr.G)("useParallax")], wS = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], cS = [(0, Wr.G)("useParallaxOcclusion")], FS = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], oS = [(0, Wr.G)()], bS = [(0, Wr.G)("roughness")], JS = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], DS = [(0, Wr.G)()], dS = [(0, Wr.G)()], sS = [(0, Wr.G)()], uS = [(0, Wr.G)("useLightmapAsShadowmap")], rQ = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], SQ = [(0, Wr.r)("diffuseFresnelParameters")], QQ = [(0, Wr.f)("_markAllSubMeshesAsFresnelDirty")], ZQ = [(0, Wr.r)("opacityFresnelParameters")], WQ = [(0, Wr.f)("_markAllSubMeshesAsFresnelAndMiscDirty")], aQ = [(0, Wr.r)("reflectionFresnelParameters")], jQ = [(0, Wr.f)("_markAllSubMeshesAsFresnelDirty")], IQ = [(0, Wr.r)("refractionFresnelParameters")], fQ = [(0, Wr.f)("_markAllSubMeshesAsFresnelDirty")], EQ = [(0, Wr.r)("emissiveFresnelParameters")], pQ = [(0, Wr.f)("_markAllSubMeshesAsFresnelDirty")], xQ = [(0, Wr.G)("useReflectionFresnelFromSpecular")], mQ = [(0, Wr.f)("_markAllSubMeshesAsFresnelDirty")], NQ = [(0, Wr.G)("useGlossinessFromSpecularMapAlpha")], UQ = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], tQ = [(0, Wr.G)("maxSimultaneousLights")], hQ = [(0, Wr.f)("_markAllSubMeshesAsLightsDirty")], zQ = [(0, Wr.G)("invertNormalMapX")], YQ = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], nQ = [(0, Wr.G)("invertNormalMapY")], eQ = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], KQ = [(0, Wr.G)("twoSidedLighting")], yQ = [(0, Wr.f)("_markAllSubMeshesAsTexturesDirty")], BQ = [(0, Wr.G)("applyDecalMapAfterDetailMap")], TQ = [(0, Wr.f)("_markAllSubMeshesAsMiscDirty")], (0, Zr.k)(rr, null, aS, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "diffuseTexture" in rr,
              get: rr => rr.diffuseTexture,
              set: (rr, Sr) => {
                rr.diffuseTexture = Sr
              }
            },
            metadata: Sr
          }, lQ, XQ), (0, Zr.k)(rr, null, IS, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "ambientTexture" in rr,
              get: rr => rr.ambientTexture,
              set: (rr, Sr) => {
                rr.ambientTexture = Sr
              }
            },
            metadata: Sr
          }, qQ, RQ), (0, Zr.k)(rr, null, ES, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "opacityTexture" in rr,
              get: rr => rr.opacityTexture,
              set: (rr, Sr) => {
                rr.opacityTexture = Sr
              }
            },
            metadata: Sr
          }, MQ, GQ), (0, Zr.k)(rr, null, xS, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "reflectionTexture" in rr,
              get: rr => rr.reflectionTexture,
              set: (rr, Sr) => {
                rr.reflectionTexture = Sr
              }
            },
            metadata: Sr
          }, VQ, iQ), (0, Zr.k)(rr, null, NS, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "emissiveTexture" in rr,
              get: rr => rr.emissiveTexture,
              set: (rr, Sr) => {
                rr.emissiveTexture = Sr
              }
            },
            metadata: Sr
          }, FQ, oQ), (0, Zr.k)(rr, null, tS, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "specularTexture" in rr,
              get: rr => rr.specularTexture,
              set: (rr, Sr) => {
                rr.specularTexture = Sr
              }
            },
            metadata: Sr
          }, DQ, dQ), (0, Zr.k)(rr, null, zS, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "bumpTexture" in rr,
              get: rr => rr.bumpTexture,
              set: (rr, Sr) => {
                rr.bumpTexture = Sr
              }
            },
            metadata: Sr
          }, rZ, SZ), (0, Zr.k)(rr, null, nS, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "lightmapTexture" in rr,
              get: rr => rr.lightmapTexture,
              set: (rr, Sr) => {
                rr.lightmapTexture = Sr
              }
            },
            metadata: Sr
          }, WZ, aZ), (0, Zr.k)(rr, null, KS, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "refractionTexture" in rr,
              get: rr => rr.refractionTexture,
              set: (rr, Sr) => {
                rr.refractionTexture = Sr
              }
            },
            metadata: Sr
          }, fZ, EZ), (0, Zr.k)(rr, null, lS, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "useAlphaFromDiffuseTexture" in rr,
              get: rr => rr.useAlphaFromDiffuseTexture,
              set: (rr, Sr) => {
                rr.useAlphaFromDiffuseTexture = Sr
              }
            },
            metadata: Sr
          }, yZ, BZ), (0, Zr.k)(rr, null, PS, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: rr => "useEmissiveAsIllumination" in rr,
              get: rr => rr.useEmissiveAsIllumination,
              set: (rr, Sr) => {
                rr.useEmissiveAsIllumination = Sr
              }
            },
            metadata: Sr
          }, OZ, LZ), (0, Zr.k)(rr, null, qS, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: rr => "linkEmissiveWithDiffuse" in rr,
              get: rr => rr.linkEmissiveWithDiffuse,
              set: (rr, Sr) => {
                rr.linkEmissiveWithDiffuse = Sr
              }
            },
            metadata: Sr
          }, PZ, HZ), (0, Zr.k)(rr, null, gS, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: rr => "useSpecularOverAlpha" in rr,
              get: rr => rr.useSpecularOverAlpha,
              set: (rr, Sr) => {
                rr.useSpecularOverAlpha = Sr
              }
            },
            metadata: Sr
          }, gZ, CZ), (0, Zr.k)(rr, null, MS, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: rr => "useReflectionOverAlpha" in rr,
              get: rr => rr.useReflectionOverAlpha,
              set: (rr, Sr) => {
                rr.useReflectionOverAlpha = Sr
              }
            },
            metadata: Sr
          }, kZ, AZ), (0, Zr.k)(rr, null, kS, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: rr => "disableLighting" in rr,
              get: rr => rr.disableLighting,
              set: (rr, Sr) => {
                rr.disableLighting = Sr
              }
            },
            metadata: Sr
          }, wZ, cZ), (0, Zr.k)(rr, null, VS, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: rr => "useObjectSpaceNormalMap" in rr,
              get: rr => rr.useObjectSpaceNormalMap,
              set: (rr, Sr) => {
                rr.useObjectSpaceNormalMap = Sr
              }
            },
            metadata: Sr
          }, bZ, JZ), (0, Zr.k)(rr, null, wS, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: rr => "useParallax" in rr,
              get: rr => rr.useParallax,
              set: (rr, Sr) => {
                rr.useParallax = Sr
              }
            },
            metadata: Sr
          }, sZ, uZ), (0, Zr.k)(rr, null, FS, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: rr => "useParallaxOcclusion" in rr,
              get: rr => rr.useParallaxOcclusion,
              set: (rr, Sr) => {
                rr.useParallaxOcclusion = Sr
              }
            },
            metadata: Sr
          }, QW, ZW), (0, Zr.k)(rr, null, JS, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: rr => "roughness" in rr,
              get: rr => rr.roughness,
              set: (rr, Sr) => {
                rr.roughness = Sr
              }
            },
            metadata: Sr
          }, fW, EW), (0, Zr.k)(rr, null, rQ, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: rr => "useLightmapAsShadowmap" in rr,
              get: rr => rr.useLightmapAsShadowmap,
              set: (rr, Sr) => {
                rr.useLightmapAsShadowmap = Sr
              }
            },
            metadata: Sr
          }, YW, nW), (0, Zr.k)(rr, null, QQ, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: rr => "diffuseFresnelParameters" in rr,
              get: rr => rr.diffuseFresnelParameters,
              set: (rr, Sr) => {
                rr.diffuseFresnelParameters = Sr
              }
            },
            metadata: Sr
          }, yW, BW), (0, Zr.k)(rr, null, WQ, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: rr => "opacityFresnelParameters" in rr,
              get: rr => rr.opacityFresnelParameters,
              set: (rr, Sr) => {
                rr.opacityFresnelParameters = Sr
              }
            },
            metadata: Sr
          }, OW, LW), (0, Zr.k)(rr, null, jQ, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: rr => "reflectionFresnelParameters" in rr,
              get: rr => rr.reflectionFresnelParameters,
              set: (rr, Sr) => {
                rr.reflectionFresnelParameters = Sr
              }
            },
            metadata: Sr
          }, PW, HW), (0, Zr.k)(rr, null, fQ, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: rr => "refractionFresnelParameters" in rr,
              get: rr => rr.refractionFresnelParameters,
              set: (rr, Sr) => {
                rr.refractionFresnelParameters = Sr
              }
            },
            metadata: Sr
          }, gW, CW), (0, Zr.k)(rr, null, pQ, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: rr => "emissiveFresnelParameters" in rr,
              get: rr => rr.emissiveFresnelParameters,
              set: (rr, Sr) => {
                rr.emissiveFresnelParameters = Sr
              }
            },
            metadata: Sr
          }, kW, AW), (0, Zr.k)(rr, null, mQ, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: rr => "useReflectionFresnelFromSpecular" in rr,
              get: rr => rr.useReflectionFresnelFromSpecular,
              set: (rr, Sr) => {
                rr.useReflectionFresnelFromSpecular = Sr
              }
            },
            metadata: Sr
          }, wW, cW), (0, Zr.k)(rr, null, UQ, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: rr => "useGlossinessFromSpecularMapAlpha" in rr,
              get: rr => rr.useGlossinessFromSpecularMapAlpha,
              set: (rr, Sr) => {
                rr.useGlossinessFromSpecularMapAlpha = Sr
              }
            },
            metadata: Sr
          }, bW, JW), (0, Zr.k)(rr, null, hQ, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: rr => "maxSimultaneousLights" in rr,
              get: rr => rr.maxSimultaneousLights,
              set: (rr, Sr) => {
                rr.maxSimultaneousLights = Sr
              }
            },
            metadata: Sr
          }, sW, uW), (0, Zr.k)(rr, null, YQ, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: rr => "invertNormalMapX" in rr,
              get: rr => rr.invertNormalMapX,
              set: (rr, Sr) => {
                rr.invertNormalMapX = Sr
              }
            },
            metadata: Sr
          }, Qa, Za), (0, Zr.k)(rr, null, eQ, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: rr => "invertNormalMapY" in rr,
              get: rr => rr.invertNormalMapY,
              set: (rr, Sr) => {
                rr.invertNormalMapY = Sr
              }
            },
            metadata: Sr
          }, ja, Ia), (0, Zr.k)(rr, null, yQ, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: rr => "twoSidedLighting" in rr,
              get: rr => rr.twoSidedLighting,
              set: (rr, Sr) => {
                rr.twoSidedLighting = Sr
              }
            },
            metadata: Sr
          }, pa, xa), (0, Zr.k)(rr, null, TQ, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: rr => "applyDecalMapAfterDetailMap" in rr,
              get: rr => rr.applyDecalMapAfterDetailMap,
              set: (rr, Sr) => {
                rr.applyDecalMapAfterDetailMap = Sr
              }
            },
            metadata: Sr
          }, Ua, ta), (0, Zr.k)(null, null, WS, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "_diffuseTexture" in rr,
              get: rr => rr._diffuseTexture,
              set: (rr, Sr) => {
                rr._diffuseTexture = Sr
              }
            },
            metadata: Sr
          }, OQ, LQ), (0, Zr.k)(null, null, jS, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "_ambientTexture" in rr,
              get: rr => rr._ambientTexture,
              set: (rr, Sr) => {
                rr._ambientTexture = Sr
              }
            },
            metadata: Sr
          }, PQ, HQ), (0, Zr.k)(null, null, fS, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "_opacityTexture" in rr,
              get: rr => rr._opacityTexture,
              set: (rr, Sr) => {
                rr._opacityTexture = Sr
              }
            },
            metadata: Sr
          }, gQ, CQ), (0, Zr.k)(null, null, pS, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "_reflectionTexture" in rr,
              get: rr => rr._reflectionTexture,
              set: (rr, Sr) => {
                rr._reflectionTexture = Sr
              }
            },
            metadata: Sr
          }, kQ, AQ), (0, Zr.k)(null, null, mS, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "_emissiveTexture" in rr,
              get: rr => rr._emissiveTexture,
              set: (rr, Sr) => {
                rr._emissiveTexture = Sr
              }
            },
            metadata: Sr
          }, wQ, cQ), (0, Zr.k)(null, null, US, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "_specularTexture" in rr,
              get: rr => rr._specularTexture,
              set: (rr, Sr) => {
                rr._specularTexture = Sr
              }
            },
            metadata: Sr
          }, bQ, JQ), (0, Zr.k)(null, null, hS, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "_bumpTexture" in rr,
              get: rr => rr._bumpTexture,
              set: (rr, Sr) => {
                rr._bumpTexture = Sr
              }
            },
            metadata: Sr
          }, sQ, uQ), (0, Zr.k)(null, null, YS, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "_lightmapTexture" in rr,
              get: rr => rr._lightmapTexture,
              set: (rr, Sr) => {
                rr._lightmapTexture = Sr
              }
            },
            metadata: Sr
          }, QZ, ZZ), (0, Zr.k)(null, null, eS, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "_refractionTexture" in rr,
              get: rr => rr._refractionTexture,
              set: (rr, Sr) => {
                rr._refractionTexture = Sr
              }
            },
            metadata: Sr
          }, jZ, IZ), (0, Zr.k)(null, null, yS, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: rr => "ambientColor" in rr,
              get: rr => rr.ambientColor,
              set: (rr, Sr) => {
                rr.ambientColor = Sr
              }
            },
            metadata: Sr
          }, pZ, xZ), (0, Zr.k)(null, null, BS, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: rr => "diffuseColor" in rr,
              get: rr => rr.diffuseColor,
              set: (rr, Sr) => {
                rr.diffuseColor = Sr
              }
            },
            metadata: Sr
          }, mZ, NZ), (0, Zr.k)(null, null, TS, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: rr => "specularColor" in rr,
              get: rr => rr.specularColor,
              set: (rr, Sr) => {
                rr.specularColor = Sr
              }
            },
            metadata: Sr
          }, UZ, tZ), (0, Zr.k)(null, null, vS, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: rr => "emissiveColor" in rr,
              get: rr => rr.emissiveColor,
              set: (rr, Sr) => {
                rr.emissiveColor = Sr
              }
            },
            metadata: Sr
          }, hZ, zZ), (0, Zr.k)(null, null, OS, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: rr => "specularPower" in rr,
              get: rr => rr.specularPower,
              set: (rr, Sr) => {
                rr.specularPower = Sr
              }
            },
            metadata: Sr
          }, YZ, nZ), (0, Zr.k)(null, null, LS, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: rr => "_useAlphaFromDiffuseTexture" in rr,
              get: rr => rr._useAlphaFromDiffuseTexture,
              set: (rr, Sr) => {
                rr._useAlphaFromDiffuseTexture = Sr
              }
            },
            metadata: Sr
          }, eZ, KZ), (0, Zr.k)(null, null, XS, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: rr => "_useEmissiveAsIllumination" in rr,
              get: rr => rr._useEmissiveAsIllumination,
              set: (rr, Sr) => {
                rr._useEmissiveAsIllumination = Sr
              }
            },
            metadata: Sr
          }, TZ, vZ), (0, Zr.k)(null, null, HS, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: rr => "_linkEmissiveWithDiffuse" in rr,
              get: rr => rr._linkEmissiveWithDiffuse,
              set: (rr, Sr) => {
                rr._linkEmissiveWithDiffuse = Sr
              }
            },
            metadata: Sr
          }, lZ, XZ), (0, Zr.k)(null, null, RS, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: rr => "_useSpecularOverAlpha" in rr,
              get: rr => rr._useSpecularOverAlpha,
              set: (rr, Sr) => {
                rr._useSpecularOverAlpha = Sr
              }
            },
            metadata: Sr
          }, qZ, RZ), (0, Zr.k)(null, null, CS, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: rr => "_useReflectionOverAlpha" in rr,
              get: rr => rr._useReflectionOverAlpha,
              set: (rr, Sr) => {
                rr._useReflectionOverAlpha = Sr
              }
            },
            metadata: Sr
          }, MZ, GZ), (0, Zr.k)(null, null, GS, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: rr => "_disableLighting" in rr,
              get: rr => rr._disableLighting,
              set: (rr, Sr) => {
                rr._disableLighting = Sr
              }
            },
            metadata: Sr
          }, VZ, iZ), (0, Zr.k)(null, null, AS, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: rr => "_useObjectSpaceNormalMap" in rr,
              get: rr => rr._useObjectSpaceNormalMap,
              set: (rr, Sr) => {
                rr._useObjectSpaceNormalMap = Sr
              }
            },
            metadata: Sr
          }, FZ, oZ), (0, Zr.k)(null, null, iS, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: rr => "_useParallax" in rr,
              get: rr => rr._useParallax,
              set: (rr, Sr) => {
                rr._useParallax = Sr
              }
            },
            metadata: Sr
          }, DZ, dZ), (0, Zr.k)(null, null, cS, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: rr => "_useParallaxOcclusion" in rr,
              get: rr => rr._useParallaxOcclusion,
              set: (rr, Sr) => {
                rr._useParallaxOcclusion = Sr
              }
            },
            metadata: Sr
          }, rW, SW), (0, Zr.k)(null, null, oS, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: rr => "parallaxScaleBias" in rr,
              get: rr => rr.parallaxScaleBias,
              set: (rr, Sr) => {
                rr.parallaxScaleBias = Sr
              }
            },
            metadata: Sr
          }, WW, aW), (0, Zr.k)(null, null, bS, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: rr => "_roughness" in rr,
              get: rr => rr._roughness,
              set: (rr, Sr) => {
                rr._roughness = Sr
              }
            },
            metadata: Sr
          }, jW, IW), (0, Zr.k)(null, null, DS, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: rr => "indexOfRefraction" in rr,
              get: rr => rr.indexOfRefraction,
              set: (rr, Sr) => {
                rr.indexOfRefraction = Sr
              }
            },
            metadata: Sr
          }, pW, xW), (0, Zr.k)(null, null, dS, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: rr => "invertRefractionY" in rr,
              get: rr => rr.invertRefractionY,
              set: (rr, Sr) => {
                rr.invertRefractionY = Sr
              }
            },
            metadata: Sr
          }, mW, NW), (0, Zr.k)(null, null, sS, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: rr => "alphaCutOff" in rr,
              get: rr => rr.alphaCutOff,
              set: (rr, Sr) => {
                rr.alphaCutOff = Sr
              }
            },
            metadata: Sr
          }, UW, tW), (0, Zr.k)(null, null, uS, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: rr => "_useLightmapAsShadowmap" in rr,
              get: rr => rr._useLightmapAsShadowmap,
              set: (rr, Sr) => {
                rr._useLightmapAsShadowmap = Sr
              }
            },
            metadata: Sr
          }, hW, zW), (0, Zr.k)(null, null, SQ, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: rr => "_diffuseFresnelParameters" in rr,
              get: rr => rr._diffuseFresnelParameters,
              set: (rr, Sr) => {
                rr._diffuseFresnelParameters = Sr
              }
            },
            metadata: Sr
          }, eW, KW), (0, Zr.k)(null, null, ZQ, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: rr => "_opacityFresnelParameters" in rr,
              get: rr => rr._opacityFresnelParameters,
              set: (rr, Sr) => {
                rr._opacityFresnelParameters = Sr
              }
            },
            metadata: Sr
          }, TW, vW), (0, Zr.k)(null, null, aQ, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: rr => "_reflectionFresnelParameters" in rr,
              get: rr => rr._reflectionFresnelParameters,
              set: (rr, Sr) => {
                rr._reflectionFresnelParameters = Sr
              }
            },
            metadata: Sr
          }, lW, XW), (0, Zr.k)(null, null, IQ, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: rr => "_refractionFresnelParameters" in rr,
              get: rr => rr._refractionFresnelParameters,
              set: (rr, Sr) => {
                rr._refractionFresnelParameters = Sr
              }
            },
            metadata: Sr
          }, qW, RW), (0, Zr.k)(null, null, EQ, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: rr => "_emissiveFresnelParameters" in rr,
              get: rr => rr._emissiveFresnelParameters,
              set: (rr, Sr) => {
                rr._emissiveFresnelParameters = Sr
              }
            },
            metadata: Sr
          }, MW, GW), (0, Zr.k)(null, null, xQ, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: rr => "_useReflectionFresnelFromSpecular" in rr,
              get: rr => rr._useReflectionFresnelFromSpecular,
              set: (rr, Sr) => {
                rr._useReflectionFresnelFromSpecular = Sr
              }
            },
            metadata: Sr
          }, VW, iW), (0, Zr.k)(null, null, NQ, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: rr => "_useGlossinessFromSpecularMapAlpha" in rr,
              get: rr => rr._useGlossinessFromSpecularMapAlpha,
              set: (rr, Sr) => {
                rr._useGlossinessFromSpecularMapAlpha = Sr
              }
            },
            metadata: Sr
          }, FW, oW), (0, Zr.k)(null, null, tQ, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: rr => "_maxSimultaneousLights" in rr,
              get: rr => rr._maxSimultaneousLights,
              set: (rr, Sr) => {
                rr._maxSimultaneousLights = Sr
              }
            },
            metadata: Sr
          }, DW, dW), (0, Zr.k)(null, null, zQ, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: rr => "_invertNormalMapX" in rr,
              get: rr => rr._invertNormalMapX,
              set: (rr, Sr) => {
                rr._invertNormalMapX = Sr
              }
            },
            metadata: Sr
          }, ra, Sa), (0, Zr.k)(null, null, nQ, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: rr => "_invertNormalMapY" in rr,
              get: rr => rr._invertNormalMapY,
              set: (rr, Sr) => {
                rr._invertNormalMapY = Sr
              }
            },
            metadata: Sr
          }, Wa, aa), (0, Zr.k)(null, null, KQ, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: rr => "_twoSidedLighting" in rr,
              get: rr => rr._twoSidedLighting,
              set: (rr, Sr) => {
                rr._twoSidedLighting = Sr
              }
            },
            metadata: Sr
          }, fa, Ea), (0, Zr.k)(null, null, BQ, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: rr => "_applyDecalMapAfterDetailMap" in rr,
              get: rr => rr._applyDecalMapAfterDetailMap,
              set: (rr, Sr) => {
                rr._applyDecalMapAfterDetailMap = Sr
              }
            },
            metadata: Sr
          }, ma, Na), Sr && Object.defineProperty(rr, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sr
          })
        })(), rr.ForceGLSL = !1, rr._ShaderLoader = new yr.b((() => [Promise.all([Qr.e(636), Qr.e(635)]).then((() => Qr(54392))), Promise.all([Qr.e(641), Qr.e(637), Qr.e(650), Qr.e(640)]).then((() => Qr(54569)))]), (() => [Promise.all([Qr.e(657), Qr.e(652)]).then((() => Qr(54718))), Promise.all([Qr.e(658), Qr.e(668), Qr.e(654)]).then((() => Qr(54901)))])), rr
      })(),
      gr = !1;

    function Cr() {
      gr || (gr = !0, (0, xr.c)(), (0, Lr.e)("BABYLON.StandardMaterial", Rr), jr.f.DefaultMaterialFactory = rr => new Rr("default material", rr))
    }
    Object.getOwnPropertyDescriptor(Rr.prototype, "decalMap") || Object.defineProperty(Rr.prototype, "decalMap", (0, lr.g)("StandardMaterial", "decalMap"))
  },
  42219: (rr, Sr, Qr) => {
    function Zr(rr) {
      return class extends rr {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    Qr.d(Sr, {
      c: () => Zr
    })
  },
  42211: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    class Zr {
      constructor(rr, Sr) {
        this._webGL = {
          load: rr,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: Sr,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(rr) {
        const Sr = 1 === rr ? this._webGPU : this._webGL;
        return Sr.loaded ? void 0 : async () => {
          await this._loadAsync(Sr)
        }
      }
      async _loadAsync(rr) {
        if (rr.loaded) return;
        let Sr = rr.loadPromise;
        const Qr = null === Sr;
        Qr && (Sr = Promise.all(rr.load()), rr.loadPromise = Sr);
        let Zr = !1;
        try {
          await Sr, Zr = !0
        } finally {
          Qr && this._completeLoad(rr, Zr)
        }
      }
      _completeLoad(rr, Sr) {
        rr.loaded = Sr, rr.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);