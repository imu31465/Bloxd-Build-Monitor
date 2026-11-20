export const id = 251;
export const ids = [251];
export const modules = {
  39972: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku
    });
    var Eu = yu(39574);

    function Ku(uu) {
      return class extends uu {
        constructor() {
          super(...arguments);
          const uu = new.target;
          if (!uu[Symbol.metadata]) {
            const Ru = Object.getPrototypeOf(uu)?.[Symbol.metadata];
            uu[Symbol.metadata] = Ru ? Object.create(Ru) : {}
          }
          const Ru = (0, Eu.b)(uu[Symbol.metadata]);
          Ru._imageProcessingConfiguration || (Ru._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(uu) {
          this._attachImageProcessingConfiguration(uu), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(uu) {
          uu !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !uu && this.lD ? this._imageProcessingConfiguration = this.lD().imageProcessingConfiguration : uu && (this._imageProcessingConfiguration = uu), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(uu) {
          this.imageProcessingConfiguration.colorCurvesEnabled = uu
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(uu) {
          this.imageProcessingConfiguration.colorGradingEnabled = uu
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(uu) {
          this._imageProcessingConfiguration.toneMappingEnabled = uu
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(uu) {
          this._imageProcessingConfiguration.exposure = uu
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(uu) {
          this._imageProcessingConfiguration.contrast = uu
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(uu) {
          this._imageProcessingConfiguration.colorGradingTexture = uu
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(uu) {
          this._imageProcessingConfiguration.colorCurves = uu
        }
      }
    }
  },
  39845: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu,
      f: () => Ku
    });
    var Eu = yu(39854);

    function Ku(uu) {
      return class extends uu {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class Qu extends Eu.e {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  39934: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => ru
    });
    var Eu = yu(39560),
      Ku = yu(39863),
      Qu = yu(39566),
      mu = yu(39921),
      Ju = yu(39854),
      Nu = yu(39939),
      Xu = yu(39905);
    class Vu extends Ju.e {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let ru = (() => {
      var uu, Ru, yu, Ju;
      let ru, Bu, xu, Su, pu, Tu, Wu = Nu.d,
        ju = [],
        Hu = [],
        du = [],
        bu = [],
        Cu = [],
        ku = [],
        eu = [],
        Au = [],
        Du = [],
        Mu = [],
        Iu = [],
        Gu = [];
      return uu = class extends Wu {
        get texture() {
          return (0, Eu.e)(this, Ru, "f")
        }
        set texture(uu) {
          (0, Eu.f)(this, Ru, uu, "f")
        }
        get normalBlendMethod() {
          return (0, Eu.e)(this, yu, "f")
        }
        set normalBlendMethod(uu) {
          (0, Eu.f)(this, yu, uu, "f")
        }
        get isEnabled() {
          return (0, Eu.e)(this, Ju, "f")
        }
        set isEnabled(uu) {
          (0, Eu.f)(this, Ju, uu, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(uu) {
          let Qu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(uu, "DetailMap", 140, new Vu, Qu), this._texture = null, Ru.set(this, (0, Eu.l)(this, ju, void 0)), this.diffuseBlendLevel = ((0, Eu.l)(this, Hu), (0, Eu.l)(this, du, 1)), this.roughnessBlendLevel = ((0, Eu.l)(this, bu), (0, Eu.l)(this, Cu, 1)), this.bumpLevel = ((0, Eu.l)(this, ku), (0, Eu.l)(this, eu, 1)), this._normalBlendMethod = ((0, Eu.l)(this, Au), Ku.d.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), yu.set(this, (0, Eu.l)(this, Du, void 0)), this._isEnabled = ((0, Eu.l)(this, Mu), !1), Ju.set(this, (0, Eu.l)(this, Iu, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Eu.l)(this, Gu), this._internalMarkAllSubMeshesAsTexturesDirty = uu._dirtyCallbacks[1]
        }
        isReadyForSubMesh(uu, Ru, yu) {
          return !this._isEnabled || !(uu._areTexturesDirty && Ru.texturesEnabled && yu.getCaps().standardDerivatives && this._texture && mu.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(uu, Ru) {
          if (this._isEnabled) {
            uu.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const yu = Ru.eS();
            uu._areTexturesDirty && (yu.getCaps().standardDerivatives && this._texture && mu.e.DetailTextureEnabled && this._isEnabled ? ((0, Xu.fb)(this._texture, uu, "DETAIL"), uu.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : uu.DETAIL = !1)
          } else uu.DETAIL = !1
        }
        bindForSubMesh(uu, Ru) {
          if (!this._isEnabled) return;
          const yu = this._material.isFrozen;
          uu.useUbo && yu && uu.isSync || this._texture && mu.e.DetailTextureEnabled && (uu.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, Xu.E)(this._texture, uu, "detail")), Ru.texturesEnabled && this._texture && mu.e.DetailTextureEnabled && uu.setTexture("detailSampler", this._texture)
        }
        hasTexture(uu) {
          return this._texture === uu
        }
        getActiveTextures(uu) {
          this._texture && uu.push(this._texture)
        }
        getAnimatables(uu) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && uu.push(this._texture)
        }
        dispose(uu) {
          uu && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(uu) {
          uu.push("detailSampler")
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
      }, Ru = new WeakMap, yu = new WeakMap, Ju = new WeakMap, (() => {
        const Ru = "function" === typeof Symbol && Symbol.metadata ? Object.create(Wu[Symbol.metadata] ?? null) : void 0;
        ru = [(0, Qu.A)("detailTexture"), (0, Qu.f)("_markAllSubMeshesAsTexturesDirty")], Bu = [(0, Qu.K)()], xu = [(0, Qu.K)()], Su = [(0, Qu.K)()], pu = [(0, Qu.K)(), (0, Qu.f)("_markAllSubMeshesAsTexturesDirty")], Tu = [(0, Qu.K)(), (0, Qu.f)("_markAllSubMeshesAsTexturesDirty")], (0, Eu.h)(uu, null, ru, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: uu => "texture" in uu,
            get: uu => uu.texture,
            set: (uu, Ru) => {
              uu.texture = Ru
            }
          },
          metadata: Ru
        }, ju, Hu), (0, Eu.h)(uu, null, pu, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: uu => "normalBlendMethod" in uu,
            get: uu => uu.normalBlendMethod,
            set: (uu, Ru) => {
              uu.normalBlendMethod = Ru
            }
          },
          metadata: Ru
        }, Du, Mu), (0, Eu.h)(uu, null, Tu, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isEnabled" in uu,
            get: uu => uu.isEnabled,
            set: (uu, Ru) => {
              uu.isEnabled = Ru
            }
          },
          metadata: Ru
        }, Iu, Gu), (0, Eu.h)(null, null, Bu, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: uu => "diffuseBlendLevel" in uu,
            get: uu => uu.diffuseBlendLevel,
            set: (uu, Ru) => {
              uu.diffuseBlendLevel = Ru
            }
          },
          metadata: Ru
        }, du, bu), (0, Eu.h)(null, null, xu, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: uu => "roughnessBlendLevel" in uu,
            get: uu => uu.roughnessBlendLevel,
            set: (uu, Ru) => {
              uu.roughnessBlendLevel = Ru
            }
          },
          metadata: Ru
        }, Cu, ku), (0, Eu.h)(null, null, Su, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: uu => "bumpLevel" in uu,
            get: uu => uu.bumpLevel,
            set: (uu, Ru) => {
              uu.bumpLevel = Ru
            }
          },
          metadata: Ru
        }, eu, Au), Ru && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ru
        })
      })(), uu
    })()
  },
  39854: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      constructor(uu) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = uu, uu)
          for (const Ru in uu) Object.prototype.hasOwnProperty.call(uu, Ru) && this._setDefaultValue(Ru)
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
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || uu, this._isDirty = !0
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
        for (const uu of Object.keys(this)) "_" !== uu[0] && this._keys.push(uu);
        if (this._externalProperties)
          for (const uu in this._externalProperties) - 1 === this._keys.indexOf(uu) && this._keys.push(uu)
      }
      isEqual(uu) {
        if (this._keys.length !== uu._keys.length) return !1;
        for (let Ru = 0; Ru < this._keys.length; Ru++) {
          const yu = this._keys[Ru];
          if (this[yu] !== uu[yu]) return !1
        }
        return !0
      }
      cloneTo(uu) {
        this._keys.length !== uu._keys.length && (uu._keys = this._keys.slice(0));
        for (let Ru = 0; Ru < this._keys.length; Ru++) {
          const yu = this._keys[Ru];
          uu[yu] = this[yu]
        }
      }
      reset() {
        for (const uu of this._keys) this._setDefaultValue(uu)
      }
      _setDefaultValue(uu) {
        const Ru = this._externalProperties?.[uu]?.type ?? typeof this[uu],
          yu = this._externalProperties?.[uu]?.default;
        switch (Ru) {
          case "number":
            this[uu] = yu ?? 0;
            break;
          case "string":
            this[uu] = yu ?? "";
            break;
          default:
            this[uu] = yu ?? !1
        }
      }
      toString() {
        let uu = "";
        for (let Ru = 0; Ru < this._keys.length; Ru++) {
          const yu = this._keys[Ru],
            Eu = this[yu];
          switch (typeof Eu) {
            case "number":
            case "string":
              uu += "#define " + yu + " " + Eu + "\n";
              break;
            default:
              Eu && (uu += "#define " + yu + "\n")
          }
        }
        return uu
      }
    }
  },
  39951: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ju,
      f: () => mu,
      j: () => Qu
    });
    var Eu, Ku = yu(36830);

    function Qu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const Eu = Ru(uu);
      if (!Number.isInteger(Eu) || Eu < 0 || Eu > yu) throw new Error(`Invalid geometry object ID ${Eu} for mesh "${uu.name}". Object IDs must be integers between 0 and 0x${yu.toString(16).toUpperCase()}.`);
      return Eu
    }

    function mu(uu, Ru) {
      const yu = Ru(uu);
      if (!Number.isInteger(yu) || yu < 0 || yu > 255 || 0 !== yu && 0 === (63 & yu)) throw new Error(`Invalid geometry mesh-blending tag ${yu} for mesh "${uu.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return yu
    }! function(uu) {
      uu[uu.Zero = 0] = "Zero", uu[uu.One = 1] = "One", uu[uu.MaxViewZ = 2] = "MaxViewZ", uu[uu.NoClear = 3] = "NoClear"
    }(Eu || (Eu = {}));
    class Ju {
      static CreateConfiguration(uu) {
        return Ju._Configurations[uu] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: Ku.d.Zero(),
          currentViewProjection: Ku.d.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, Ju._Configurations[uu]
      }
      static DeleteConfiguration(uu) {
        delete Ju._Configurations[uu]
      }
      static GetConfiguration(uu) {
        return Ju._Configurations[uu]
      }
      static _PrepareConfiguration(uu, Ru, yu) {
        const Eu = Ju._Configurations[uu];
        Eu._attachments = Ru, Eu._colorAttachments = yu, Eu._mrtCount = Ru.length;
        let Ku = "#define PREPASS\n";
        for (const Qu of Ju.GeometryTextureDescriptions) {
          const uu = Eu.defines[Qu.defineIndex];
          void 0 !== uu && (Ku += `#define ${Qu.define}\n#define ${Qu.defineIndex} ${uu}\n`)
        }
        Eu.objectIdIsRedFormat && (Ku += "#define PREPASS_OBJECT_ID_R8\n"), Eu._defines = Ku + `#define SCENE_MRT_COUNT ${Ru.length}\n`
      }
      static _PrepareStringDefines(uu, Ru) {
        const yu = Ju._Configurations[uu];
        return !!yu?._defines && (Ru.push(yu._defines), !0)
      }
      static _BindAttachmentsForEffect(uu, Ru) {
        const yu = Ju._Configurations[uu.currentRenderPassId];
        return !yu?._attachments || (uu.bindAttachments(Ru._multiTarget ? yu._attachments : yu._colorAttachments), Ru._multiTarget || void 0 !== yu.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(uu) {
        const Ru = Ju._Configurations[uu.currentRenderPassId];
        Ru?._colorAttachments && uu.bindAttachments(Ru._colorAttachments)
      }
      static _BindColorAttachments(uu) {
        const Ru = Ju._Configurations[uu.currentRenderPassId];
        return !Ru?._colorAttachments || (uu.bindAttachments(Ru._colorAttachments), void 0 !== Ru.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(uu) {
        const Ru = Ju._Configurations[uu.currentRenderPassId];
        return !Ru?._colorAttachments || void 0 !== Ru.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(uu, Ru) {
        const yu = Ju._Configurations[uu.currentRenderPassId];
        if (!yu) return;
        const Eu = uu.getAlphaMode(),
          Ku = void 0 === yu.defines.PREPASS_COLOR_INDEX || 2 === Eu || 1 === Eu || 17 === Eu;
        Ru.setFloat("geometryZeroAlphaDiscard", Ku ? 1 : 0)
      }
      static AddUniformsAndSamplers(uu, Ru) {
        uu.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(uu, Ru) {
        for (const yu of Ru)
          if (yu.mC)
            for (const Ru of yu.mC) Ru._removeDrawWrapper(uu)
      }
      static PrepareDefines(uu, Ru, yu) {
        if (!yu._arePrePassDirty) return;
        const Eu = Ju._Configurations[uu];
        if (!Eu) return;
        yu.PREPASS = !0;
        let Ku = 0;
        for (let Qu = 0; Qu < Ju.GeometryTextureDescriptions.length; Qu++) {
          const uu = Ju.GeometryTextureDescriptions[Qu],
            Ru = uu.define,
            mu = uu.defineIndex,
            Nu = Eu.defines[mu];
          void 0 !== Nu ? (yu[Ru] = !0, yu[mu] = Nu, Ku++) : (yu[Ru] = !1, delete yu[mu])
        }
        yu.PREPASS_OBJECT_ID_R8 = Eu.objectIdIsRedFormat, yu.SCENE_MRT_COUNT = Eu._mrtCount ?? Ku, yu.BONES_VELOCITY_ENABLED = Ru.useBones && Ru.computeBonesUsingShaders && Ru.skeleton && !Ru.skeleton.isUsingTextureForMatrices && -1 === Eu.excludedSkinnedMesh.indexOf(Ru)
      }
      static Bind(uu, Ru, yu, Eu, Ku) {
        const Nu = Ju._Configurations[uu];
        if (!Nu) return;
        const Xu = yu.lD(),
          Vu = Xu.eS();
        if (Nu.reverseCulling && Vu.setStateCullFaceType(Xu._mirroredCameraPosition ? Ku.cullBackFaces : !Ku.cullBackFaces), void 0 !== Nu.defines.PREPASS_OBJECT_ID_INDEX) {
          const uu = Nu.objectIdIsRedFormat ? 255 : 16777215;
          let Eu = yu.uniqueId;
          if (Nu.objectIdProvider) Eu = Qu(yu, Nu.objectIdProvider, uu);
          else if (Eu > uu) throw new Error(`Invalid geometry object ID ${Eu} for mesh "${yu.name}". Object IDs must be integers between 0 and 0x${uu.toString(16).toUpperCase()}.`);
          Ru.setFloat("objectId", Eu)
        }
        if (void 0 !== Nu.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const uu = Nu.meshBlendTagProvider ? mu(yu, Nu.meshBlendTagProvider) : yu.meshBlendingTag;
          Ru.setInt("meshBlendTag", uu)
        }
        if (void 0 !== Nu.defines.PREPASS_VELOCITY_INDEX || void 0 !== Nu.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const uu = Nu._currentWorldMatrices ?? (Nu._currentWorldMatrices = {}),
            Ku = Nu._worldMatrixFrameIds ?? (Nu._worldMatrixFrameIds = {});
          if (uu[yu.uniqueId] || (uu[yu.uniqueId] = Eu.clone(), Nu.previousWorldMatrices[yu.uniqueId] = Eu.clone()), Ku[yu.uniqueId] !== Vu.frameId && (Nu.previousWorldMatrices[yu.uniqueId].Oyu(uu[yu.uniqueId]), Ku[yu.uniqueId] = Vu.frameId), uu[yu.uniqueId].Oyu(Eu), -1 === Nu.lastUpdateFrameId ? (Nu.lastUpdateFrameId = Vu.frameId, Nu.previousViewProjection.Oyu(Xu.getTransformMatrix()), Nu.currentViewProjection.Oyu(Xu.getTransformMatrix())) : Nu.currentViewProjection.updateFlag !== Xu.getTransformMatrix().updateFlag ? (Nu.lastUpdateFrameId = Vu.frameId, Nu.previousViewProjection.Oyu(Nu.currentViewProjection), Nu.currentViewProjection.Oyu(Xu.getTransformMatrix())) : Nu.lastUpdateFrameId !== Vu.frameId && (Nu.lastUpdateFrameId = Vu.frameId, Nu.previousViewProjection.Oyu(Nu.currentViewProjection)), Ru.setMatrix("previousWorld", Nu.previousWorldMatrices[yu.uniqueId]), Ru.setMatrix("previousViewProjection", Nu.previousViewProjection), yu.useBones && yu.computeBonesUsingShaders && yu.skeleton) {
            const uu = yu.skeleton;
            if (!uu.isUsingTextureForMatrices || -1 === Ru.getUniformIndex("boneTextureInfo")) {
              const Eu = uu.getTransformMatrices(yu);
              Eu && (Nu.previousBones[yu.uniqueId] || (Nu.previousBones[yu.uniqueId] = Eu.slice()), Ru.setMatrices("mPreviousBones", Nu.previousBones[yu.uniqueId]), Nu.previousBones[yu.uniqueId].set(Eu))
            }
          }
        }
      }
    }
    Ju.GeometryTextureDescriptions = [{
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
    }], Ju._Configurations = {}
  },
  39939: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Bu,
      f: () => Su
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(39439),
      mu = yu(39403);
    const Ju = new RegExp("^([gimus]+)!");
    class Nu {
      constructor(uu) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = uu, this._scene = uu.lD(), this._engine = this._scene.eS()
      }
      _addPlugin(uu) {
        for (let Eu = 0; Eu < this._plugins.length; ++Eu)
          if (this._plugins[Eu].name === uu.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !uu.isCompatible(this._material.shaderLanguage)) throw `The plugin "${uu.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const Ru = uu.getClassName();
        Nu._MaterialPluginClassToMainDefine[Ru] || (Nu._MaterialPluginClassToMainDefine[Ru] = "MATERIALPLUGIN_" + ++Nu._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (uu, Ru) => this._handlePluginEvent(uu, Ru), this._plugins.push(uu), this._plugins.sort(((uu, Ru) => uu.priority - Ru.priority)), this._codeInjectionPoints = {};
        const yu = {};
        yu[Nu._MaterialPluginClassToMainDefine[Ru]] = {
          type: "boolean",
          default: !0
        };
        for (const Eu of this._plugins) Eu.collectDefines(yu), this._collectPointNames("vertex", Eu.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Eu.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = yu, !0
      }
      _activatePlugin(uu) {
        -1 === this._activePlugins.indexOf(uu) && (this._activePlugins.push(uu), this._activePlugins.sort(((uu, Ru) => uu.priority - Ru.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), uu.registerForExtraEvents && (this._activePluginsForExtraEvents.push(uu), this._activePluginsForExtraEvents.sort(((uu, Ru) => uu.priority - Ru.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(uu) {
        for (let Ru = 0; Ru < this._plugins.length; ++Ru)
          if (this._plugins[Ru].name === uu) return this._plugins[Ru];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(uu) {
        let Ru = !0;
        for (const yu of this._activePlugins) Ru = Ru && yu.isReadyForSubMesh(uu.defines, this._scene, this._engine, uu.subMesh);
        uu.isReadyForSubMesh = Ru
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(uu) {
        for (const Ru of this._activePlugins) Ru.prepareDefinesBeforeAttributes(uu.defines, this._scene, uu.mesh)
      }
      _handlePluginEventPrepareDefines(uu) {
        for (const Ru of this._activePlugins) Ru.prepareDefines(uu.defines, this._scene, uu.mesh)
      }
      _handlePluginEventHardBindForSubMesh(uu) {
        for (const Ru of this._activePluginsForExtraEvents) Ru.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, uu.subMesh)
      }
      _handlePluginEventBindForSubMesh(uu) {
        for (const Ru of this._activePlugins) Ru.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, uu.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(uu) {
        let Ru = !1;
        for (const yu of this._activePluginsForExtraEvents)
          if (Ru = yu.hasRenderTargetTextures(), Ru) break;
        uu.hasRenderTargetTextures = Ru
      }
      _handlePluginEventFillRenderTargetTextures(uu) {
        for (const Ru of this._activePluginsForExtraEvents) Ru.fillRenderTargetTextures(uu.renderTargets)
      }
      _handlePluginEvent(uu, Ru) {
        switch (uu) {
          case 512: {
            const uu = Ru;
            for (const Ru of this._activePlugins) Ru.getActiveTextures(uu.activeTextures);
            break
          }
          case 256: {
            const uu = Ru;
            for (const Ru of this._activePlugins) Ru.getAnimatables(uu.animatables);
            break
          }
          case 1024: {
            const uu = Ru;
            let yu = !1;
            for (const Ru of this._activePlugins)
              if (yu = Ru.hasTexture(uu.texture), yu) break;
            uu.hasTexture = yu;
            break
          }
          case 2: {
            const uu = Ru;
            for (const Ru of this._plugins) Ru.dispose(uu.forceDisposeTextures);
            break
          }
          case 4:
            Ru.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const uu = Ru;
            for (const Ru of this._activePlugins) uu.fallbackRank = Ru.addFallbacks(uu.defines, uu.fallbacks, uu.fallbackRank), Ru.getAttributes(uu.attributes, this._scene, uu.mesh);
            this._uniformList.length > 0 && uu.uniforms.push(...this._uniformList), this._samplerList.length > 0 && uu.samplers.push(...this._samplerList), this._uboList.length > 0 && uu.uniformBuffersNames.push(...this._uboList), uu.customCode = this._injectCustomCode(uu, uu.customCode);
            break
          }
          case 8: {
            const uu = Ru;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const yu = 1 === this._material.shaderLanguage;
            for (const Ru of this._plugins) {
              const Eu = Ru.getUniforms(this._material.shaderLanguage);
              if (Eu) {
                if (Eu.ubo)
                  for (const Ru of Eu.ubo) {
                    if (Ru.size && Ru.type) {
                      const Eu = Ru.arraySize ?? 0;
                      if (uu.ubo.addUniform(Ru.name, Ru.size, Eu), yu) {
                        let uu;
                        switch (Ru.type) {
                          case "mat4":
                            uu = "mat4x4f";
                            break;
                          case "float":
                            uu = "f32";
                            break;
                          default:
                            uu = `${Ru.type}f`
                        }
                        this._uboDeclaration += Eu > 0 ? `uniform ${Ru.name}: array<${uu}, ${Eu}>;\n` : `uniform ${Ru.name}: ${uu};\n`
                      } else this._uboDeclaration += `${Ru.type} ${Ru.name}${Eu>0?`[${Eu}]`:""};\n`
                    }
                    this._uniformList.push(Ru.name)
                  }
                Eu.vertex && (this._vertexDeclaration += Eu.vertex + "\n"), Eu.fragment && (this._fragmentDeclaration += Eu.fragment + "\n"), Eu.externalUniforms && this._uniformList.push(...Eu.externalUniforms)
              }
              Ru.getSamplers(this._samplerList), Ru.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(uu, Ru) {
        if (Ru)
          for (const yu in Ru) this._codeInjectionPoints[uu] || (this._codeInjectionPoints[uu] = {}), this._codeInjectionPoints[uu][yu] = !0
      }
      _injectCustomCode(uu, Ru) {
        return (yu, Eu) => {
          Ru && (Eu = Ru(yu, Eu)), this._uboDeclaration && (Eu = Eu.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Eu = Eu.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (Eu = Eu.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const Ku = this._codeInjectionPoints?.[yu];
          if (!Ku) return Eu;
          let Nu = null;
          for (let Ru in Ku) {
            let Ku = "";
            for (const Eu of this._activePlugins) {
              const Ju = this._material.shaderLanguage;
              let Xu = Eu.getCustomCode(yu, Ju)?.[Ru];
              Xu && (Eu.resolveIncludes && (null === Nu && (Nu = {
                defines: [],
                indexParameters: uu.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: mu.e.GetShadersRepository(Ju),
                includesShadersStore: mu.e.GetIncludesShadersStore(Ju),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                CEu: this._engine.CEu,
                processCodeAfterIncludes: void 0
              }), Nu.isFragment = "fragment" === yu, (0, Qu.l)(Xu, Nu, (uu => Xu = uu))), Ku += Xu + "\n")
            }
            if (Ku.length > 0)
              if ("!" === Ru.charAt(0)) {
                Ru = Ru.substring(1);
                let uu = "g";
                if ("!" === Ru.charAt(0)) uu = "", Ru = Ru.substring(1);
                else {
                  const yu = Ju.exec(Ru);
                  yu && yu.length >= 2 && (uu = yu[1], Ru = Ru.substring(uu.length + 1))
                }
                uu.indexOf("g") < 0 && (uu += "g");
                const yu = new RegExp(Ru, uu);
                let Qu = yu.exec(Eu);
                for (; null !== Qu;) {
                  const {
                    index: uu
                  } = Qu, Ru = Xu(Ku, Qu);
                  Eu = Eu.substring(0, uu) + Ru + Eu.substring(uu + Qu[0].length), yu.lastIndex = uu + Ru.length, Qu = yu.exec(Eu)
                }
              } else {
                const uu = "#define " + Ru;
                Eu = Eu.replace(uu, "\n" + Ku + "\n" + uu)
              }
          }
          return Eu
        }
      }
    }
    Nu._MaterialPluginClassToMainDefine = {}, Nu._MaterialPluginCounter = 0;

    function Xu(uu, Ru) {
      return uu.replace(/\$(\d+)/g, ((uu, yu) => {
        const Eu = Number(yu);
        return Eu < Ru.length ? Ru[Eu] : ""
      }))
    }
    var Vu = yu(39582),
      ru = yu(36871);
    let Bu = (() => {
        var uu;
        let Ru, yu, Qu, mu, Ju = [],
          Xu = [],
          ru = [],
          Bu = [],
          xu = [],
          Su = [],
          pu = [],
          Tu = [];
        return uu = class {
          isCompatible(uu) {
            return 0 === uu
          }
          _enable(uu) {
            uu && this._pluginManager._activatePlugin(this)
          }
          constructor(uu, Ru, yu, Ku) {
            let Qu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              mu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              Vu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, Eu.l)(this, Ju, void 0), this.priority = ((0, Eu.l)(this, Xu), (0, Eu.l)(this, ru, 500)), this.resolveIncludes = ((0, Eu.l)(this, Bu), (0, Eu.l)(this, xu, !1)), this.registerForExtraEvents = ((0, Eu.l)(this, Su), (0, Eu.l)(this, pu, !1)), this.doNotSerialize = ((0, Eu.l)(this, Tu), !1), this._material = uu, this.name = Ru, this.priority = yu, this.resolveIncludes = Vu, uu.pluginManager || (uu.pluginManager = new Nu(uu), uu.zD.add((() => {
              uu.pluginManager = void 0
            }))), this._pluginDefineNames = Ku, this._pluginManager = uu.pluginManager, Qu && this._pluginManager._addPlugin(this), mu && this._enable(!0), this.markAllDefinesAsDirty = uu._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(uu, Ru, yu, Eu) {
            return !0
          }
          hardBindForSubMesh(uu, Ru, yu, Eu) {}
          bindForSubMesh(uu, Ru, yu, Eu) {}
          dispose(uu) {}
          getCustomCode(uu) {
            return null
          }
          collectDefines(uu) {
            if (this._pluginDefineNames)
              for (const Ru of Object.keys(this._pluginDefineNames)) {
                if ("_" === Ru[0]) continue;
                const yu = typeof this._pluginDefineNames[Ru];
                uu[Ru] = {
                  type: "number" === yu ? "number" : "string" === yu ? "string" : "boolean" === yu ? "boolean" : "object",
                  default: this._pluginDefineNames[Ru]
                }
              }
          }
          prepareDefinesBeforeAttributes(uu, Ru, yu) {}
          prepareDefines(uu, Ru, yu) {}
          hasTexture(uu) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(uu) {}
          getActiveTextures(uu) {}
          getAnimatables(uu) {}
          addFallbacks(uu, Ru, yu) {
            return yu
          }
          getSamplers(uu) {}
          getAttributes(uu, Ru, yu) {}
          getUniformBuffersNames(uu) {}
          getUniforms() {
            return {}
          }
          copyTo(uu) {
            Vu.c.Clone((() => uu), this)
          }
          serialize() {
            return Vu.c.Serialize(this)
          }
          parse(uu, Ru, yu) {
            Vu.c.Parse((() => this), uu, Ru, yu)
          }
        }, (() => {
          const Nu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Ru = [(0, Ku.K)()], yu = [(0, Ku.K)()], Qu = [(0, Ku.K)()], mu = [(0, Ku.K)()], (0, Eu.h)(null, null, Ru, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: uu => "name" in uu,
              get: uu => uu.name,
              set: (uu, Ru) => {
                uu.name = Ru
              }
            },
            metadata: Nu
          }, Ju, Xu), (0, Eu.h)(null, null, yu, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: uu => "priority" in uu,
              get: uu => uu.priority,
              set: (uu, Ru) => {
                uu.priority = Ru
              }
            },
            metadata: Nu
          }, ru, Bu), (0, Eu.h)(null, null, Qu, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: uu => "resolveIncludes" in uu,
              get: uu => uu.resolveIncludes,
              set: (uu, Ru) => {
                uu.resolveIncludes = Ru
              }
            },
            metadata: Nu
          }, xu, Su), (0, Eu.h)(null, null, mu, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: uu => "registerForExtraEvents" in uu,
              get: uu => uu.registerForExtraEvents,
              set: (uu, Ru) => {
                uu.registerForExtraEvents = Ru
              }
            },
            metadata: Nu
          }, pu, Tu), Nu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Nu
          })
        })(), uu
      })(),
      xu = !1;

    function Su() {
      xu || (xu = !0, (0, ru.c)("BABYLON.MaterialPluginBase", Bu))
    }
  },
  39840: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(uu) {
        uu.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(uu) {}
      bindForSubMesh(uu, Ru, yu, Eu, Ku) {
        if (Ru.prePassRenderer && Ru.prePassRenderer.enabled && Ru.prePassRenderer.currentRTisSceneRT && (-1 !== Ru.prePassRenderer.getIndex(2) || -1 !== Ru.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[yu.uniqueId] || (this.previousWorldMatrices[yu.uniqueId] = Eu.clone()), this.previousViewProjection || (this.previousViewProjection = Ru.getTransformMatrix().clone(), this.currentViewProjection = Ru.getTransformMatrix().clone());
          const Ku = Ru.eS();
          this.currentViewProjection.updateFlag !== Ru.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = Ku.frameId, this.previousViewProjection.Oyu(this.currentViewProjection), this.currentViewProjection.Oyu(Ru.getTransformMatrix())) : this._lastUpdateFrameId !== Ku.frameId && (this._lastUpdateFrameId = Ku.frameId, this.previousViewProjection.Oyu(this.currentViewProjection)), uu.setMatrix("previousWorld", this.previousWorldMatrices[yu.uniqueId]), uu.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[yu.uniqueId] = Eu.clone()
        }
      }
    }
  },
  39966: (uu, Ru, yu) => {
    function Eu(uu) {
      return class extends uu {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    yu.d(Ru, {
      d: () => Eu
    })
  },
  39827: (uu, Ru, yu) => {
    yu.d(Ru, {
      StandardMaterial: () => Eu.d
    });
    var Eu = yu(39831);
    (0, Eu.c)()
  },
  39831: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => gu,
      d: () => tu
    });
    var Eu = yu(39560),
      Ku = yu(39566),
      Qu = yu(39667),
      mu = yu(39647),
      Ju = yu(36991),
      Nu = yu(39706),
      Xu = yu(39840),
      Vu = yu(39845),
      ru = yu(39676),
      Bu = yu(39863),
      xu = yu(39854),
      Su = yu(39923),
      pu = yu(39921),
      Tu = yu(39931),
      Wu = yu(39934),
      ju = yu(39913),
      Hu = yu(39941),
      du = yu(39905),
      bu = yu(39582),
      Cu = yu(39948),
      ku = yu(39951),
      eu = yu(39958),
      Au = yu(39966),
      Du = yu(39972),
      Mu = yu(36871),
      Iu = yu(39430);
    const Gu = {
      effect: null,
      subMesh: null
    };
    class Uu extends((0, Au.d)((0, eu.c)(xu.e))) {}
    class nu extends((0, Vu.f)(Uu)) {
      constructor(uu) {
        super(uu), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class su extends((0, Du.c)(Su.e)) {}
    let tu = (() => {
        var uu, Ru, Vu, xu, eu, Au, Du, Mu, Iu, Uu, tu, lu, gu, cu, Lu, zu, Fu, wu, Zu, hu, Pu, iu, Yu, ou, qu, Ou, vu, au, fu, uR, RR, yR, ER;
        let KR, QR, mR, JR, NR, XR, VR, rR, BR, xR, SR, pR, TR, WR, jR, HR, dR, bR, CR, kR, eR, AR, DR, MR, IR, GR, UR, nR, sR, tR, lR, gR, cR, LR, zR, FR, wR, ZR, hR, PR, iR, YR, oR, qR, OR, vR, aR, fR, uy, Ry, yy, Ey, Ky, Qy, my, Jy, Ny, Xy, Vy, ry, By, xy, Sy, py, Ty, Wy, jy, Hy, dy, by, Cy, ky, ey, Ay = su,
          Dy = [],
          My = [],
          Iy = [],
          Gy = [],
          Uy = [],
          ny = [],
          sy = [],
          ty = [],
          ly = [],
          gy = [],
          cy = [],
          Ly = [],
          zy = [],
          Fy = [],
          wy = [],
          Zy = [],
          hy = [],
          Py = [],
          iy = [],
          Yy = [],
          oy = [],
          qy = [],
          Oy = [],
          vy = [],
          ay = [],
          fy = [],
          uE = [],
          RE = [],
          yE = [],
          EE = [],
          KE = [],
          QE = [],
          mE = [],
          JE = [],
          NE = [],
          XE = [],
          VE = [],
          rE = [],
          BE = [],
          xE = [],
          SE = [],
          pE = [],
          TE = [],
          WE = [],
          jE = [],
          HE = [],
          dE = [],
          bE = [],
          CE = [],
          kE = [],
          eE = [],
          AE = [],
          DE = [],
          ME = [],
          IE = [],
          GE = [],
          UE = [],
          nE = [],
          sE = [],
          tE = [],
          lE = [],
          gE = [],
          cE = [],
          LE = [],
          zE = [],
          FE = [],
          wE = [],
          ZE = [],
          hE = [],
          PE = [],
          iE = [],
          YE = [],
          oE = [],
          qE = [],
          OE = [],
          vE = [],
          aE = [],
          fE = [],
          uK = [],
          RK = [],
          yK = [],
          EK = [],
          KK = [],
          QK = [],
          mK = [],
          JK = [],
          NK = [],
          XK = [],
          VK = [],
          rK = [],
          BK = [],
          xK = [],
          SK = [],
          pK = [],
          TK = [],
          WK = [],
          jK = [],
          HK = [],
          dK = [],
          bK = [],
          CK = [],
          kK = [],
          eK = [],
          AK = [],
          DK = [],
          MK = [],
          IK = [],
          GK = [],
          UK = [],
          nK = [],
          sK = [],
          tK = [],
          lK = [],
          gK = [],
          cK = [],
          LK = [],
          zK = [],
          FK = [],
          wK = [],
          ZK = [],
          hK = [],
          PK = [],
          iK = [],
          YK = [],
          oK = [],
          qK = [],
          OK = [],
          vK = [],
          aK = [],
          fK = [],
          uQ = [],
          RQ = [],
          yQ = [],
          EQ = [],
          KQ = [],
          QQ = [],
          mQ = [],
          JQ = [],
          NQ = [],
          XQ = [],
          VQ = [],
          rQ = [],
          BQ = [],
          xQ = [],
          SQ = [],
          pQ = [];
        return uu = class extends Ay {
          get diffuseTexture() {
            return (0, Eu.e)(this, Ru, "f")
          }
          set diffuseTexture(uu) {
            (0, Eu.f)(this, Ru, uu, "f")
          }
          get ambientTexture() {
            return (0, Eu.e)(this, Vu, "f")
          }
          set ambientTexture(uu) {
            (0, Eu.f)(this, Vu, uu, "f")
          }
          get opacityTexture() {
            return (0, Eu.e)(this, xu, "f")
          }
          set opacityTexture(uu) {
            (0, Eu.f)(this, xu, uu, "f")
          }
          get reflectionTexture() {
            return (0, Eu.e)(this, eu, "f")
          }
          set reflectionTexture(uu) {
            (0, Eu.f)(this, eu, uu, "f")
          }
          get emissiveTexture() {
            return (0, Eu.e)(this, Au, "f")
          }
          set emissiveTexture(uu) {
            (0, Eu.f)(this, Au, uu, "f")
          }
          get specularTexture() {
            return (0, Eu.e)(this, Du, "f")
          }
          set specularTexture(uu) {
            (0, Eu.f)(this, Du, uu, "f")
          }
          get bumpTexture() {
            return (0, Eu.e)(this, Mu, "f")
          }
          set bumpTexture(uu) {
            (0, Eu.f)(this, Mu, uu, "f")
          }
          get lightmapTexture() {
            return (0, Eu.e)(this, Iu, "f")
          }
          set lightmapTexture(uu) {
            (0, Eu.f)(this, Iu, uu, "f")
          }
          get refractionTexture() {
            return (0, Eu.e)(this, Uu, "f")
          }
          set refractionTexture(uu) {
            (0, Eu.f)(this, Uu, uu, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, Eu.e)(this, tu, "f")
          }
          set useAlphaFromDiffuseTexture(uu) {
            (0, Eu.f)(this, tu, uu, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, Eu.e)(this, lu, "f")
          }
          set useEmissiveAsIllumination(uu) {
            (0, Eu.f)(this, lu, uu, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, Eu.e)(this, gu, "f")
          }
          set linkEmissiveWithDiffuse(uu) {
            (0, Eu.f)(this, gu, uu, "f")
          }
          get useSpecularOverAlpha() {
            return (0, Eu.e)(this, cu, "f")
          }
          set useSpecularOverAlpha(uu) {
            (0, Eu.f)(this, cu, uu, "f")
          }
          get useReflectionOverAlpha() {
            return (0, Eu.e)(this, Lu, "f")
          }
          set useReflectionOverAlpha(uu) {
            (0, Eu.f)(this, Lu, uu, "f")
          }
          get disableLighting() {
            return (0, Eu.e)(this, zu, "f")
          }
          set disableLighting(uu) {
            (0, Eu.f)(this, zu, uu, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, Eu.e)(this, Fu, "f")
          }
          set useObjectSpaceNormalMap(uu) {
            (0, Eu.f)(this, Fu, uu, "f")
          }
          get useParallax() {
            return (0, Eu.e)(this, wu, "f")
          }
          set useParallax(uu) {
            (0, Eu.f)(this, wu, uu, "f")
          }
          get useParallaxOcclusion() {
            return (0, Eu.e)(this, Zu, "f")
          }
          set useParallaxOcclusion(uu) {
            (0, Eu.f)(this, Zu, uu, "f")
          }
          get roughness() {
            return (0, Eu.e)(this, hu, "f")
          }
          set roughness(uu) {
            (0, Eu.f)(this, hu, uu, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, Eu.e)(this, Pu, "f")
          }
          set useLightmapAsShadowmap(uu) {
            (0, Eu.f)(this, Pu, uu, "f")
          }
          get diffuseFresnelParameters() {
            return (0, Eu.e)(this, iu, "f")
          }
          set diffuseFresnelParameters(uu) {
            (0, Eu.f)(this, iu, uu, "f")
          }
          get opacityFresnelParameters() {
            return (0, Eu.e)(this, Yu, "f")
          }
          set opacityFresnelParameters(uu) {
            (0, Eu.f)(this, Yu, uu, "f")
          }
          get reflectionFresnelParameters() {
            return (0, Eu.e)(this, ou, "f")
          }
          set reflectionFresnelParameters(uu) {
            (0, Eu.f)(this, ou, uu, "f")
          }
          get refractionFresnelParameters() {
            return (0, Eu.e)(this, qu, "f")
          }
          set refractionFresnelParameters(uu) {
            (0, Eu.f)(this, qu, uu, "f")
          }
          get emissiveFresnelParameters() {
            return (0, Eu.e)(this, Ou, "f")
          }
          set emissiveFresnelParameters(uu) {
            (0, Eu.f)(this, Ou, uu, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, Eu.e)(this, vu, "f")
          }
          set useReflectionFresnelFromSpecular(uu) {
            (0, Eu.f)(this, vu, uu, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, Eu.e)(this, au, "f")
          }
          set useGlossinessFromSpecularMapAlpha(uu) {
            (0, Eu.f)(this, au, uu, "f")
          }
          get maxSimultaneousLights() {
            return (0, Eu.e)(this, fu, "f")
          }
          set maxSimultaneousLights(uu) {
            (0, Eu.f)(this, fu, uu, "f")
          }
          get invertNormalMapX() {
            return (0, Eu.e)(this, uR, "f")
          }
          set invertNormalMapX(uu) {
            (0, Eu.f)(this, uR, uu, "f")
          }
          get invertNormalMapY() {
            return (0, Eu.e)(this, RR, "f")
          }
          set invertNormalMapY(uu) {
            (0, Eu.f)(this, RR, uu, "f")
          }
          get twoSidedLighting() {
            return (0, Eu.e)(this, yR, "f")
          }
          set twoSidedLighting(uu) {
            (0, Eu.f)(this, yR, uu, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Eu.e)(this, ER, "f")
          }
          set applyDecalMapAfterDetailMap(uu) {
            (0, Eu.f)(this, ER, uu, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(yu, Ku) {
            super(yu, Ku, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || uu.ForceGLSL), this._diffuseTexture = (0, Eu.l)(this, Dy, null), Ru.set(this, ((0, Eu.l)(this, My), (0, Eu.l)(this, Iy, void 0))), this._ambientTexture = ((0, Eu.l)(this, Gy), (0, Eu.l)(this, Uy, null)), Vu.set(this, ((0, Eu.l)(this, ny), (0, Eu.l)(this, sy, void 0))), this._opacityTexture = ((0, Eu.l)(this, ty), (0, Eu.l)(this, ly, null)), xu.set(this, ((0, Eu.l)(this, gy), (0, Eu.l)(this, cy, void 0))), this._reflectionTexture = ((0, Eu.l)(this, Ly), (0, Eu.l)(this, zy, null)), eu.set(this, ((0, Eu.l)(this, Fy), (0, Eu.l)(this, wy, void 0))), this._emissiveTexture = ((0, Eu.l)(this, Zy), (0, Eu.l)(this, hy, null)), Au.set(this, ((0, Eu.l)(this, Py), (0, Eu.l)(this, iy, void 0))), this._specularTexture = ((0, Eu.l)(this, Yy), (0, Eu.l)(this, oy, null)), Du.set(this, ((0, Eu.l)(this, qy), (0, Eu.l)(this, Oy, void 0))), this._bumpTexture = ((0, Eu.l)(this, vy), (0, Eu.l)(this, ay, null)), Mu.set(this, ((0, Eu.l)(this, fy), (0, Eu.l)(this, uE, void 0))), this._lightmapTexture = ((0, Eu.l)(this, RE), (0, Eu.l)(this, yE, null)), Iu.set(this, ((0, Eu.l)(this, EE), (0, Eu.l)(this, KE, void 0))), this._refractionTexture = ((0, Eu.l)(this, QE), (0, Eu.l)(this, mE, null)), Uu.set(this, ((0, Eu.l)(this, JE), (0, Eu.l)(this, NE, void 0))), this.ambientColor = ((0, Eu.l)(this, XE), (0, Eu.l)(this, VE, new Ju.d(0, 0, 0))), this.diffuseColor = ((0, Eu.l)(this, rE), (0, Eu.l)(this, BE, new Ju.d(1, 1, 1))), this.specularColor = ((0, Eu.l)(this, xE), (0, Eu.l)(this, SE, new Ju.d(1, 1, 1))), this.emissiveColor = ((0, Eu.l)(this, pE), (0, Eu.l)(this, TE, new Ju.d(0, 0, 0))), this.specularPower = ((0, Eu.l)(this, WE), (0, Eu.l)(this, jE, 64)), this._useAlphaFromDiffuseTexture = ((0, Eu.l)(this, HE), (0, Eu.l)(this, dE, !1)), tu.set(this, ((0, Eu.l)(this, bE), (0, Eu.l)(this, CE, void 0))), this._useEmissiveAsIllumination = ((0, Eu.l)(this, kE), (0, Eu.l)(this, eE, !1)), lu.set(this, ((0, Eu.l)(this, AE), (0, Eu.l)(this, DE, void 0))), this._linkEmissiveWithDiffuse = ((0, Eu.l)(this, ME), (0, Eu.l)(this, IE, !1)), gu.set(this, ((0, Eu.l)(this, GE), (0, Eu.l)(this, UE, void 0))), this._useSpecularOverAlpha = ((0, Eu.l)(this, nE), (0, Eu.l)(this, sE, !1)), cu.set(this, ((0, Eu.l)(this, tE), (0, Eu.l)(this, lE, void 0))), this._useReflectionOverAlpha = ((0, Eu.l)(this, gE), (0, Eu.l)(this, cE, !1)), Lu.set(this, ((0, Eu.l)(this, LE), (0, Eu.l)(this, zE, void 0))), this._disableLighting = ((0, Eu.l)(this, FE), (0, Eu.l)(this, wE, !1)), zu.set(this, ((0, Eu.l)(this, ZE), (0, Eu.l)(this, hE, void 0))), this._useObjectSpaceNormalMap = ((0, Eu.l)(this, PE), (0, Eu.l)(this, iE, !1)), Fu.set(this, ((0, Eu.l)(this, YE), (0, Eu.l)(this, oE, void 0))), this._useParallax = ((0, Eu.l)(this, qE), (0, Eu.l)(this, OE, !1)), wu.set(this, ((0, Eu.l)(this, vE), (0, Eu.l)(this, aE, void 0))), this._useParallaxOcclusion = ((0, Eu.l)(this, fE), (0, Eu.l)(this, uK, !1)), Zu.set(this, ((0, Eu.l)(this, RK), (0, Eu.l)(this, yK, void 0))), this.parallaxScaleBias = ((0, Eu.l)(this, EK), (0, Eu.l)(this, KK, .05)), this._roughness = ((0, Eu.l)(this, QK), (0, Eu.l)(this, mK, 0)), hu.set(this, ((0, Eu.l)(this, JK), (0, Eu.l)(this, NK, void 0))), this.indexOfRefraction = ((0, Eu.l)(this, XK), (0, Eu.l)(this, VK, .98)), this.invertRefractionY = ((0, Eu.l)(this, rK), (0, Eu.l)(this, BK, !0)), this.alphaCutOff = ((0, Eu.l)(this, xK), (0, Eu.l)(this, SK, .4)), this._useLightmapAsShadowmap = ((0, Eu.l)(this, pK), (0, Eu.l)(this, TK, !1)), Pu.set(this, ((0, Eu.l)(this, WK), (0, Eu.l)(this, jK, void 0))), this._diffuseFresnelParameters = ((0, Eu.l)(this, HK), (0, Eu.l)(this, dK, void 0)), iu.set(this, ((0, Eu.l)(this, bK), (0, Eu.l)(this, CK, void 0))), this._opacityFresnelParameters = ((0, Eu.l)(this, kK), (0, Eu.l)(this, eK, void 0)), Yu.set(this, ((0, Eu.l)(this, AK), (0, Eu.l)(this, DK, void 0))), this._reflectionFresnelParameters = ((0, Eu.l)(this, MK), (0, Eu.l)(this, IK, void 0)), ou.set(this, ((0, Eu.l)(this, GK), (0, Eu.l)(this, UK, void 0))), this._refractionFresnelParameters = ((0, Eu.l)(this, nK), (0, Eu.l)(this, sK, void 0)), qu.set(this, ((0, Eu.l)(this, tK), (0, Eu.l)(this, lK, void 0))), this._emissiveFresnelParameters = ((0, Eu.l)(this, gK), (0, Eu.l)(this, cK, void 0)), Ou.set(this, ((0, Eu.l)(this, LK), (0, Eu.l)(this, zK, void 0))), this._useReflectionFresnelFromSpecular = ((0, Eu.l)(this, FK), (0, Eu.l)(this, wK, !1)), vu.set(this, ((0, Eu.l)(this, ZK), (0, Eu.l)(this, hK, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, Eu.l)(this, PK), (0, Eu.l)(this, iK, !1)), au.set(this, ((0, Eu.l)(this, YK), (0, Eu.l)(this, oK, void 0))), this._maxSimultaneousLights = ((0, Eu.l)(this, qK), (0, Eu.l)(this, OK, 4)), fu.set(this, ((0, Eu.l)(this, vK), (0, Eu.l)(this, aK, void 0))), this._invertNormalMapX = ((0, Eu.l)(this, fK), (0, Eu.l)(this, uQ, !1)), uR.set(this, ((0, Eu.l)(this, RQ), (0, Eu.l)(this, yQ, void 0))), this._invertNormalMapY = ((0, Eu.l)(this, EQ), (0, Eu.l)(this, KQ, !1)), RR.set(this, ((0, Eu.l)(this, QQ), (0, Eu.l)(this, mQ, void 0))), this._twoSidedLighting = ((0, Eu.l)(this, JQ), (0, Eu.l)(this, NQ, !1)), yR.set(this, ((0, Eu.l)(this, XQ), (0, Eu.l)(this, VQ, void 0))), this._applyDecalMapAfterDetailMap = ((0, Eu.l)(this, rQ), (0, Eu.l)(this, BQ, !1)), ER.set(this, ((0, Eu.l)(this, xQ), (0, Eu.l)(this, SQ, void 0))), this._vertexPullingMetadata = ((0, Eu.l)(this, pQ), null), this._renderTargets = new Qu.i(16), this._globalAmbientColor = new Ju.d(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new Wu.b(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new Xu.e, this.getRenderTargetTextures = () => (this._renderTargets.reset(), uu.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), uu.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(uu.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(uu.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === Bu.d.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== Bu.d.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(Ru, yu) {
            let Eu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Ku = yu._drawWrapper;
            if (Ku.effect && this.isFrozen && Ku._wasPreviouslyReady && Ku._wasPreviouslyUsingInstances === Eu) return !0;
            yu.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), yu.materialDefines = new nu(this._eventInfo.defineNames));
            const Qu = this.lD(),
              mu = yu.materialDefines;
            if (this._isReadyForSubMesh(yu)) return !0;
            const Ju = Qu.eS();
            if (mu._needNormals = (0, du.eb)(Qu, Ru, mu, !0, this._maxSimultaneousLights, this._disableLighting), !(0, du.b)(Qu, Ru, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, du.mb)(Qu, mu);
            const Vu = this.needAlphaBlendingForMesh(Ru) && this.lD().useOrderIndependentTransparency;
            if ((0, du.rb)(Qu, mu, this.canRenderToMRT && !Vu), (0, du.qb)(Qu, mu, Vu), ku.b.PrepareDefines(Ju.currentRenderPassId, Ru, mu), mu._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, mu._needUVs = !1;
              for (let uu = 1; uu <= 6; ++uu) mu["MAINUV" + uu] = !1;
              if (Qu.texturesEnabled) {
                if (mu.DIFFUSEDIRECTUV = 0, mu.BUMPDIRECTUV = 0, mu.AMBIENTDIRECTUV = 0, mu.OPACITYDIRECTUV = 0, mu.EMISSIVEDIRECTUV = 0, mu.SPECULARDIRECTUV = 0, mu.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && uu.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, du.fb)(this._diffuseTexture, mu, "DIFFUSE")
                } else mu.DIFFUSE = !1;
                if (this._ambientTexture && uu.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, du.fb)(this._ambientTexture, mu, "AMBIENT")
                } else mu.AMBIENT = !1;
                if (this._opacityTexture && uu.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, du.fb)(this._opacityTexture, mu, "OPACITY"), mu.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else mu.OPACITY = !1;
                if (this._reflectionTexture && uu.ReflectionTextureEnabled ? (mu.ROUGHNESS = this._roughness > 0, mu.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (mu.ROUGHNESS = !1, mu.REFLECTIONOVERALPHA = !1), !(0, du.ab)(Qu, this._reflectionTexture, mu)) return !1;
                if (this._emissiveTexture && uu.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, du.fb)(this._emissiveTexture, mu, "EMISSIVE")
                } else mu.EMISSIVE = !1;
                if (this._lightmapTexture && uu.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, du.fb)(this._lightmapTexture, mu, "LIGHTMAP"), mu.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, mu.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else mu.LIGHTMAP = !1;
                if (this._specularTexture && uu.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, du.fb)(this._specularTexture, mu, "SPECULAR"), mu.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else mu.SPECULAR = !1;
                if (Qu.eS().getCaps().standardDerivatives && this._bumpTexture && uu.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, du.fb)(this._bumpTexture, mu, "BUMP"), mu.PARALLAX = this._useParallax, mu.PARALLAX_RHS = Qu.useRightHandedSystem, mu.PARALLAXOCCLUSION = this._useParallaxOcclusion, mu.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else mu.BUMP = !1, mu.PARALLAX = !1, mu.PARALLAX_RHS = !1, mu.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && uu.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  mu._needUVs = !0, mu.REFRACTION = !0, mu.REFRACTIONMAP_3D = this._refractionTexture.isCube, mu.RGBDREFRACTION = this._refractionTexture.isRGBD, mu.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else mu.REFRACTION = !1;
                mu.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else mu.DIFFUSE = !1, mu.AMBIENT = !1, mu.OPACITY = !1, mu.REFLECTION = !1, mu.EMISSIVE = !1, mu.LIGHTMAP = !1, mu.BUMP = !1, mu.REFRACTION = !1;
              mu.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), mu.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, mu.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, mu.SPECULAROVERALPHA = this._useSpecularOverAlpha, mu.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, mu.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, mu.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(Ru), mu.TEXTURE_REPETITION_MODE = Ju.version > 1 || Ju.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = mu, this._eventInfo.subMesh = yu, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (mu._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(mu), mu.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, mu.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (mu._areFresnelDirty && (uu.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (mu.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, mu.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, mu.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, mu.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, mu.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, mu.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, mu._needNormals = !0, mu.FRESNEL = !0) : mu.FRESNEL = !1), mu.AREALIGHTUSED || mu.CLUSTLIGHT_BATCH)
              for (let uu = 0; uu < Ru.lightSources.length; uu++)
                if (!Ru.lightSources[uu]._isReady()) return !1;
            (0, du.jb)(Ru, Qu, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Ru), mu, this._applyDecalMapAfterDetailMap, this._useVertexPulling, yu.getRenderingMesh(), this._isVertexOutputInvariant), (0, du._)(Qu, Ju, this, mu, Eu, null, yu.getRenderingMesh().hasThinInstances), this._eventInfo.defines = mu, this._eventInfo.mesh = Ru, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, du.X)(Ru, mu, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let Bu = !1;
            if (mu.isDirty) {
              const Eu = mu._areLightsDisposed;
              mu.markAsProcessed();
              const Ku = new Tu.d;
              mu.REFLECTION && Ku.addFallback(0, "REFLECTION"), mu.SPECULAR && Ku.addFallback(0, "SPECULAR"), mu.BUMP && Ku.addFallback(0, "BUMP"), mu.PARALLAX && Ku.addFallback(1, "PARALLAX"), mu.PARALLAX_RHS && Ku.addFallback(1, "PARALLAX_RHS"), mu.PARALLAXOCCLUSION && Ku.addFallback(0, "PARALLAXOCCLUSION"), mu.SPECULAROVERALPHA && Ku.addFallback(0, "SPECULAROVERALPHA"), mu.FOG && Ku.addFallback(1, "FOG"), mu.POINTSIZE && Ku.addFallback(0, "POINTSIZE"), mu.LOGARITHMICDEPTH && Ku.addFallback(0, "LOGARITHMICDEPTH"), (0, du.F)(mu, Ku, this._maxSimultaneousLights), mu.SPECULARTERM && Ku.addFallback(0, "SPECULARTERM"), mu.DIFFUSEFRESNEL && Ku.addFallback(1, "DIFFUSEFRESNEL"), mu.OPACITYFRESNEL && Ku.addFallback(2, "OPACITYFRESNEL"), mu.REFLECTIONFRESNEL && Ku.addFallback(3, "REFLECTIONFRESNEL"), mu.EMISSIVEFRESNEL && Ku.addFallback(4, "EMISSIVEFRESNEL"), mu.FRESNEL && Ku.addFallback(4, "FRESNEL"), mu.MULTIVIEW && Ku.addFallback(0, "MULTIVIEW");
              const Vu = [Nu.h.PositionKind];
              mu.NORMAL && Vu.push(Nu.h.NormalKind), mu.TANGENT && Vu.push(Nu.h.TangentKind);
              for (let uu = 1; uu <= 6; ++uu) mu["UV" + uu] && Vu.push(`uv${1===uu?"":uu}`);
              mu.VERTEXCOLOR && Vu.push(Nu.h.ColorKind), (0, du.K)(Vu, Ru, mu, Ku), (0, du.L)(Vu, mu), (0, du.P)(Vu, Ru, mu), (0, du.J)(Vu, Ru, mu);
              let xu = "default";
              const Su = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                pu = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, du.xb)(Su, pu, !1);
              const Wu = ["Material", "Scene", "Mesh"],
                bu = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: mu.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = Ku, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = mu, this._eventInfo.uniforms = Su, this._eventInfo.attributes = Vu, this._eventInfo.samplers = pu, this._eventInfo.uniformBuffersNames = Wu, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Ru, this._eventInfo.indexParameters = bu, this._callbackPluginEventGeneric(128, this._eventInfo), ku.b.AddUniformsAndSamplers(Su, pu), Xu.e.AddUniforms(Su), Xu.e.AddSamplers(pu), ru.b && (ru.b.PrepareUniforms(Su, mu), ru.b.PrepareSamplers(pu, mu)), (0, du.zb)({
                  uniformsNames: Su,
                  uniformBuffersNames: Wu,
                  samplers: pu,
                  defines: mu,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, ju.c)(Su), this._useVertexPulling) {
                const uu = yu.getRenderingMesh(),
                  Ru = uu?.geometry;
                Ru && (this._vertexPullingMetadata = (0, Hu.e)(Ru), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((uu, Ru) => {
                  Su.push(`vp_${Ru}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const Cu = {};
              this.customShaderNameResolve && (xu = this.customShaderNameResolve(xu, Su, Wu, pu, mu, Vu, Cu));
              const eu = mu.toString(),
                Au = yu.effect,
                Du = Qu.eS().createEffect(xu, {
                  attributes: Vu,
                  uniformsNames: Su,
                  uniformBuffersNames: Wu,
                  samplers: pu,
                  defines: eu,
                  fallbacks: Ku,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: bu,
                  processFinalCode: Cu.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: mu.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: uu._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, Ju);
              if (this._eventInfo.customCode = void 0, Du)
                if (this._onEffectCreatedObservable && (Gu.effect = Du, Gu.subMesh = yu, this._onEffectCreatedObservable.notifyObservers(Gu)), this.allowShaderHotSwapping && Au && !Du.isReady()) {
                  if (mu.markAsUnprocessed(), Bu = this.isFrozen, Eu) return mu._areLightsDisposed = !0, !1
                } else Qu.resetCachedMaterial(), yu.setEffect(Du, mu, this._materialContext)
            }
            return !(!yu.effect || !yu.effect.isReady()) && (mu._renderId = Qu.getRenderId(), Ku._wasPreviouslyReady = !Bu, Ku._wasPreviouslyUsingInstances = Eu, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const uu = this._uniformBuffer;
            uu.addUniform("diffuseLeftColor", 4), uu.addUniform("diffuseRightColor", 4), uu.addUniform("opacityParts", 4), uu.addUniform("reflectionLeftColor", 4), uu.addUniform("reflectionRightColor", 4), uu.addUniform("refractionLeftColor", 4), uu.addUniform("refractionRightColor", 4), uu.addUniform("emissiveLeftColor", 4), uu.addUniform("emissiveRightColor", 4), uu.addUniform("vDiffuseInfos", 2), uu.addUniform("vAmbientInfos", 2), uu.addUniform("vOpacityInfos", 2), uu.addUniform("vEmissiveInfos", 2), uu.addUniform("vLightmapInfos", 2), uu.addUniform("vSpecularInfos", 2), uu.addUniform("vBumpInfos", 3), uu.addUniform("diffuseMatrix", 16), uu.addUniform("ambientMatrix", 16), uu.addUniform("opacityMatrix", 16), uu.addUniform("emissiveMatrix", 16), uu.addUniform("lightmapMatrix", 16), uu.addUniform("specularMatrix", 16), uu.addUniform("bumpMatrix", 16), uu.addUniform("vTangentSpaceParams", 2), uu.addUniform("pointSize", 1), uu.addUniform("alphaCutOff", 1), uu.addUniform("refractionMatrix", 16), uu.addUniform("vRefractionInfos", 4), uu.addUniform("vRefractionPosition", 3), uu.addUniform("vRefractionSize", 3), uu.addUniform("vSpecularColor", 4), uu.addUniform("vEmissiveColor", 3), uu.addUniform("vDiffuseColor", 4), uu.addUniform("vAmbientColor", 3), uu.addUniform("cameraInfo", 4), uu.addUniform("vTextureRepetitionHexTilingParams", 4), (0, du.ub)(uu, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(Ru, yu, Eu) {
            const Ku = this.lD(),
              Qu = Eu.materialDefines;
            if (!Qu) return;
            const Nu = Eu.effect;
            if (!Nu) return;
            this._activeEffect = Nu, yu.getMeshUniformBuffer().bindToEffect(Nu, "Mesh"), yu.transferToEffect(Ru), this._uniformBuffer.bindToEffect(Nu, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Ku, yu, Ru, this.isFrozen), ku.b.Bind(Ku.eS().currentRenderPassId, this._activeEffect, yu, Ru, this);
            const Xu = Ku.activeCamera;
            Xu ? this._uniformBuffer.updateFloat4("cameraInfo", Xu.minZ, Xu.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Vu = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Vu[0], Vu[1], Vu[2], Vu[3]), this._eventInfo.subMesh = Eu, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Qu.OBJECTSPACE_NORMALMAP && (Ru.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const ru = this._mustRebind(Ku, Nu, Eu, yu.visibility),
              Bu = Ku.eS()._features.needToAlwaysBindUniformBuffers;
            (0, du.f)(yu, Nu), this._vertexPullingMetadata && (0, Hu.c)(Nu, this._vertexPullingMetadata);
            const xu = this._uniformBuffer;
            if (ru) {
              if (this.bindViewProjection(Nu), !xu.useUbo || !this.isFrozen || !xu.isSync || Eu._drawWrapper._forceRebindOnNextCall) {
                if (uu.FresnelEnabled && Qu.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (xu.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), xu.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const uu = Ju.m.Color3[0];
                    uu.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), xu.updateColor4("opacityParts", uu, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (xu.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), xu.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (xu.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), xu.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (xu.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), xu.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (Qu.ALPHATEST && xu.updateFloat("alphaCutOff", this.alphaCutOff), Ku.texturesEnabled && (this._diffuseTexture && uu.DiffuseTextureEnabled && (xu.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, du.E)(this._diffuseTexture, xu, "diffuse")), this._ambientTexture && uu.AmbientTextureEnabled && (xu.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, du.E)(this._ambientTexture, xu, "ambient")), this._opacityTexture && uu.OpacityTextureEnabled && (xu.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, du.E)(this._opacityTexture, xu, "opacity")), (0, du.k)(Ku, Qu, xu, Ju.d.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && uu.ReflectionTextureEnabled || xu.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && uu.EmissiveTextureEnabled && (xu.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, du.E)(this._emissiveTexture, xu, "emissive")), this._lightmapTexture && uu.LightmapTextureEnabled && (xu.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, du.E)(this._lightmapTexture, xu, "lightmap")), this._specularTexture && uu.SpecularTextureEnabled && (xu.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, du.E)(this._specularTexture, xu, "specular")), this._bumpTexture && Ku.eS().getCaps().standardDerivatives && uu.BumpTextureEnabled && (xu.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, du.E)(this._bumpTexture, xu, "bump"), Ku._mirroredCameraPosition ? xu.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : xu.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && uu.RefractionTextureEnabled)) {
                  let uu = 1;
                  if (this._refractionTexture.isCube || (xu.v_("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (uu = this._refractionTexture.depth)), xu.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, uu, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const uu = this._refractionTexture;
                    xu.updateVector3("vRefractionPosition", uu.boundingBoxPosition), xu.updateVector3("vRefractionSize", uu.boundingBoxSize)
                  }
                }
                this.pointsCloud && xu.updateFloat("pointSize", this.pointSize), xu.updateColor4("vSpecularColor", this.specularColor, this.specularPower), xu.updateColor3("vEmissiveColor", uu.EmissiveTextureEnabled ? this.emissiveColor : Ju.d.BlackReadOnly), xu.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), Ku.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), xu.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              Ku.texturesEnabled && (this._diffuseTexture && uu.DiffuseTextureEnabled && Nu.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && uu.AmbientTextureEnabled && Nu.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && uu.OpacityTextureEnabled && Nu.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && uu.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? Nu.setTexture("reflectionCubeSampler", this._reflectionTexture) : Nu.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && uu.EmissiveTextureEnabled && Nu.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && uu.LightmapTextureEnabled && Nu.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && uu.SpecularTextureEnabled && Nu.setTexture("specularSampler", this._specularTexture), this._bumpTexture && Ku.eS().getCaps().standardDerivatives && uu.BumpTextureEnabled && Nu.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && uu.RefractionTextureEnabled && (this._refractionTexture.isCube ? Nu.setTexture("refractionCubeSampler", this._refractionTexture) : Nu.setTexture("refraction2DSampler", this._refractionTexture))), this.lD().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(yu) && this.lD().depthPeelingRenderer.bind(Nu), this._eventInfo.subMesh = Eu, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, ju.f)(Nu, this, Ku), this.bindEyePosition(Nu)
            } else Bu && (this._needToBindSceneUbo = !0);
            !ru && this.isFrozen && !Bu || !Ku.lightsEnabled || this._disableLighting || (0, du.r)(Ku, yu, Nu, Qu, this._maxSimultaneousLights), !ru && this.isFrozen || ((Ku.fogEnabled && yu.applyFog && Ku.fogMode !== mu.i.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || yu.receiveShadows || Qu.PREPASS || Qu.CLUSTLIGHT_BATCH) && this.bindView(Nu), (0, du.g)(Ku, yu, Nu), Qu.NUM_MORPH_INFLUENCERS && (0, du.y)(yu, Nu), Qu.BAKED_VERTEX_ANIMATION_TEXTURE && yu.bakedVertexAnimationManager?.bind(Nu, Qu.INSTANCES), this.useLogarithmicDepth && (0, du.u)(Qu, Nu, Ku), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(yu, this._activeEffect, Eu), xu.update()
          }
          _canBindRunFollower(Ru, yu, Eu, Ku, Qu) {
            const mu = Ru.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === uu.prototype.isReadyForSubMesh && this.bindForSubMesh === uu.prototype.bindForSubMesh && this._mustRebind === Su.e.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !yu._features.needToAlwaysBindUniformBuffers && !(mu && mu.enabled && mu.currentRTisSceneRT) && !ku.b._Configurations[yu.currentRenderPassId] && !Ku.materialDefines?.OBJECTSPACE_NORMALMAP && !Eu.skeleton && !Qu._bonesComputationForcedToCPU
          }
          _bindRunFollower(uu, Ru, yu, Eu) {
            this._activeEffect = Eu, Ru.getMeshUniformBuffer().bindToEffect(Eu, "Mesh"), Ru.transferToEffect(uu);
            const Ku = this._uniformBuffer;
            Ku.bindToEffect(Eu, "Material");
            const Qu = this._scene.activeCamera;
            Qu ? Ku.updateFloat4("cameraInfo", Qu.minZ, Qu.maxZ, 0, 0) : Ku.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const mu = this.textureRepetitionHexTilingParams;
            Ku.updateFloat4("vTextureRepetitionHexTilingParams", mu[0], mu[1], mu[2], mu[3]), this._afterBind(Ru, Eu, yu), Ku.update()
          }
          getAnimatables() {
            const uu = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && uu.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && uu.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && uu.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && uu.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && uu.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && uu.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && uu.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && uu.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && uu.push(this._refractionTexture), uu
          }
          getActiveTextures() {
            const uu = super.getActiveTextures();
            return this._diffuseTexture && uu.push(this._diffuseTexture), this._ambientTexture && uu.push(this._ambientTexture), this._opacityTexture && uu.push(this._opacityTexture), this._reflectionTexture && uu.push(this._reflectionTexture), this._emissiveTexture && uu.push(this._emissiveTexture), this._specularTexture && uu.push(this._specularTexture), this._bumpTexture && uu.push(this._bumpTexture), this._lightmapTexture && uu.push(this._lightmapTexture), this._refractionTexture && uu.push(this._refractionTexture), uu
          }
          hasTexture(uu) {
            return !!super.hasTexture(uu) || (this._diffuseTexture === uu || (this._ambientTexture === uu || (this._opacityTexture === uu || (this._reflectionTexture === uu || (this._emissiveTexture === uu || (this._specularTexture === uu || (this._bumpTexture === uu || (this._lightmapTexture === uu || this._refractionTexture === uu))))))))
          }
          dispose(uu, Ru) {
            Ru && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(uu, Ru)
          }
          clone(Ru) {
            let yu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Ku = bu.c.Clone((() => new uu(Ru, this.lD())), this, {
              cloneTexturesOnlyOnce: yu
            });
            return Ku.name = Ru, Ku.id = Ru, this.stencil.copyTo(Ku.stencil), this._clonePlugins(Ku, Eu), Ku
          }
          static Parse(Ru, yu, Eu) {
            const Ku = bu.c.Parse((() => new uu(Ru.name, yu)), Ru, yu, Eu);
            return Ru.stencil && Ku.stencil.parse(Ru.stencil, yu, Eu), Bu.d._ParsePlugins(Ru, Ku, yu, Eu), Ku
          }
          static get DiffuseTextureEnabled() {
            return pu.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(uu) {
            pu.e.DiffuseTextureEnabled = uu
          }
          static get DetailTextureEnabled() {
            return pu.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(uu) {
            pu.e.DetailTextureEnabled = uu
          }
          static get AmbientTextureEnabled() {
            return pu.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(uu) {
            pu.e.AmbientTextureEnabled = uu
          }
          static get OpacityTextureEnabled() {
            return pu.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(uu) {
            pu.e.OpacityTextureEnabled = uu
          }
          static get ReflectionTextureEnabled() {
            return pu.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(uu) {
            pu.e.ReflectionTextureEnabled = uu
          }
          static get EmissiveTextureEnabled() {
            return pu.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(uu) {
            pu.e.EmissiveTextureEnabled = uu
          }
          static get SpecularTextureEnabled() {
            return pu.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(uu) {
            pu.e.SpecularTextureEnabled = uu
          }
          static get BumpTextureEnabled() {
            return pu.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(uu) {
            pu.e.BumpTextureEnabled = uu
          }
          static get LightmapTextureEnabled() {
            return pu.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(uu) {
            pu.e.LightmapTextureEnabled = uu
          }
          static get RefractionTextureEnabled() {
            return pu.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(uu) {
            pu.e.RefractionTextureEnabled = uu
          }
          static get ColorGradingTextureEnabled() {
            return pu.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(uu) {
            pu.e.ColorGradingTextureEnabled = uu
          }
          static get FresnelEnabled() {
            return pu.e.FresnelEnabled
          }
          static set FresnelEnabled(uu) {
            pu.e.FresnelEnabled = uu
          }
        }, Ru = new WeakMap, Vu = new WeakMap, xu = new WeakMap, eu = new WeakMap, Au = new WeakMap, Du = new WeakMap, Mu = new WeakMap, Iu = new WeakMap, Uu = new WeakMap, tu = new WeakMap, lu = new WeakMap, gu = new WeakMap, cu = new WeakMap, Lu = new WeakMap, zu = new WeakMap, Fu = new WeakMap, wu = new WeakMap, Zu = new WeakMap, hu = new WeakMap, Pu = new WeakMap, iu = new WeakMap, Yu = new WeakMap, ou = new WeakMap, qu = new WeakMap, Ou = new WeakMap, vu = new WeakMap, au = new WeakMap, fu = new WeakMap, uR = new WeakMap, RR = new WeakMap, yR = new WeakMap, ER = new WeakMap, (() => {
          const Ru = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ay[Symbol.metadata] ?? null) : void 0;
          KR = [(0, Ku.A)("diffuseTexture")], QR = [(0, Ku.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], mR = [(0, Ku.A)("ambientTexture")], JR = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], NR = [(0, Ku.A)("opacityTexture")], XR = [(0, Ku.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], VR = [(0, Ku.A)("reflectionTexture")], rR = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], BR = [(0, Ku.A)("emissiveTexture")], xR = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], SR = [(0, Ku.A)("specularTexture")], pR = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], TR = [(0, Ku.A)("bumpTexture")], WR = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], jR = [(0, Ku.A)("lightmapTexture")], HR = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], dR = [(0, Ku.A)("refractionTexture")], bR = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], CR = [(0, Ku.n)("ambient")], kR = [(0, Ku.n)("diffuse")], eR = [(0, Ku.n)("specular")], AR = [(0, Ku.n)("emissive")], DR = [(0, Ku.K)()], MR = [(0, Ku.K)("useAlphaFromDiffuseTexture")], IR = [() => ({
            init(uu) {
              return void 0 === uu && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = uu), uu
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(uu) {
              this._useAlphaFromDiffuseTexture = uu
            }
          })], GR = [(0, Ku.K)("useEmissiveAsIllumination")], UR = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], nR = [(0, Ku.K)("linkEmissiveWithDiffuse")], sR = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], tR = [(0, Ku.K)("useSpecularOverAlpha")], lR = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], gR = [(0, Ku.K)("useReflectionOverAlpha")], cR = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], LR = [(0, Ku.K)("disableLighting")], zR = [(0, Ku.f)("_markAllSubMeshesAsLightsDirty")], FR = [(0, Ku.K)("useObjectSpaceNormalMap")], wR = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], ZR = [(0, Ku.K)("useParallax")], hR = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], PR = [(0, Ku.K)("useParallaxOcclusion")], iR = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], YR = [(0, Ku.K)()], oR = [(0, Ku.K)("roughness")], qR = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], OR = [(0, Ku.K)()], vR = [(0, Ku.K)()], aR = [(0, Ku.K)()], fR = [(0, Ku.K)("useLightmapAsShadowmap")], uy = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], Ry = [(0, Ku.t)("diffuseFresnelParameters")], yy = [(0, Ku.f)("_markAllSubMeshesAsFresnelDirty")], Ey = [(0, Ku.t)("opacityFresnelParameters")], Ky = [(0, Ku.f)("_markAllSubMeshesAsFresnelAndMiscDirty")], Qy = [(0, Ku.t)("reflectionFresnelParameters")], my = [(0, Ku.f)("_markAllSubMeshesAsFresnelDirty")], Jy = [(0, Ku.t)("refractionFresnelParameters")], Ny = [(0, Ku.f)("_markAllSubMeshesAsFresnelDirty")], Xy = [(0, Ku.t)("emissiveFresnelParameters")], Vy = [(0, Ku.f)("_markAllSubMeshesAsFresnelDirty")], ry = [(0, Ku.K)("useReflectionFresnelFromSpecular")], By = [(0, Ku.f)("_markAllSubMeshesAsFresnelDirty")], xy = [(0, Ku.K)("useGlossinessFromSpecularMapAlpha")], Sy = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], py = [(0, Ku.K)("maxSimultaneousLights")], Ty = [(0, Ku.f)("_markAllSubMeshesAsLightsDirty")], Wy = [(0, Ku.K)("invertNormalMapX")], jy = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], Hy = [(0, Ku.K)("invertNormalMapY")], dy = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], by = [(0, Ku.K)("twoSidedLighting")], Cy = [(0, Ku.f)("_markAllSubMeshesAsTexturesDirty")], ky = [(0, Ku.K)("applyDecalMapAfterDetailMap")], ey = [(0, Ku.f)("_markAllSubMeshesAsMiscDirty")], (0, Eu.h)(uu, null, QR, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "diffuseTexture" in uu,
              get: uu => uu.diffuseTexture,
              set: (uu, Ru) => {
                uu.diffuseTexture = Ru
              }
            },
            metadata: Ru
          }, Iy, Gy), (0, Eu.h)(uu, null, JR, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "ambientTexture" in uu,
              get: uu => uu.ambientTexture,
              set: (uu, Ru) => {
                uu.ambientTexture = Ru
              }
            },
            metadata: Ru
          }, sy, ty), (0, Eu.h)(uu, null, XR, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "opacityTexture" in uu,
              get: uu => uu.opacityTexture,
              set: (uu, Ru) => {
                uu.opacityTexture = Ru
              }
            },
            metadata: Ru
          }, cy, Ly), (0, Eu.h)(uu, null, rR, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "reflectionTexture" in uu,
              get: uu => uu.reflectionTexture,
              set: (uu, Ru) => {
                uu.reflectionTexture = Ru
              }
            },
            metadata: Ru
          }, wy, Zy), (0, Eu.h)(uu, null, xR, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "emissiveTexture" in uu,
              get: uu => uu.emissiveTexture,
              set: (uu, Ru) => {
                uu.emissiveTexture = Ru
              }
            },
            metadata: Ru
          }, iy, Yy), (0, Eu.h)(uu, null, pR, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularTexture" in uu,
              get: uu => uu.specularTexture,
              set: (uu, Ru) => {
                uu.specularTexture = Ru
              }
            },
            metadata: Ru
          }, Oy, vy), (0, Eu.h)(uu, null, WR, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "bumpTexture" in uu,
              get: uu => uu.bumpTexture,
              set: (uu, Ru) => {
                uu.bumpTexture = Ru
              }
            },
            metadata: Ru
          }, uE, RE), (0, Eu.h)(uu, null, HR, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "lightmapTexture" in uu,
              get: uu => uu.lightmapTexture,
              set: (uu, Ru) => {
                uu.lightmapTexture = Ru
              }
            },
            metadata: Ru
          }, KE, QE), (0, Eu.h)(uu, null, bR, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "refractionTexture" in uu,
              get: uu => uu.refractionTexture,
              set: (uu, Ru) => {
                uu.refractionTexture = Ru
              }
            },
            metadata: Ru
          }, NE, XE), (0, Eu.h)(uu, null, IR, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "useAlphaFromDiffuseTexture" in uu,
              get: uu => uu.useAlphaFromDiffuseTexture,
              set: (uu, Ru) => {
                uu.useAlphaFromDiffuseTexture = Ru
              }
            },
            metadata: Ru
          }, CE, kE), (0, Eu.h)(uu, null, UR, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: uu => "useEmissiveAsIllumination" in uu,
              get: uu => uu.useEmissiveAsIllumination,
              set: (uu, Ru) => {
                uu.useEmissiveAsIllumination = Ru
              }
            },
            metadata: Ru
          }, DE, ME), (0, Eu.h)(uu, null, sR, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: uu => "linkEmissiveWithDiffuse" in uu,
              get: uu => uu.linkEmissiveWithDiffuse,
              set: (uu, Ru) => {
                uu.linkEmissiveWithDiffuse = Ru
              }
            },
            metadata: Ru
          }, UE, nE), (0, Eu.h)(uu, null, lR, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: uu => "useSpecularOverAlpha" in uu,
              get: uu => uu.useSpecularOverAlpha,
              set: (uu, Ru) => {
                uu.useSpecularOverAlpha = Ru
              }
            },
            metadata: Ru
          }, lE, gE), (0, Eu.h)(uu, null, cR, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: uu => "useReflectionOverAlpha" in uu,
              get: uu => uu.useReflectionOverAlpha,
              set: (uu, Ru) => {
                uu.useReflectionOverAlpha = Ru
              }
            },
            metadata: Ru
          }, zE, FE), (0, Eu.h)(uu, null, zR, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: uu => "disableLighting" in uu,
              get: uu => uu.disableLighting,
              set: (uu, Ru) => {
                uu.disableLighting = Ru
              }
            },
            metadata: Ru
          }, hE, PE), (0, Eu.h)(uu, null, wR, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: uu => "useObjectSpaceNormalMap" in uu,
              get: uu => uu.useObjectSpaceNormalMap,
              set: (uu, Ru) => {
                uu.useObjectSpaceNormalMap = Ru
              }
            },
            metadata: Ru
          }, oE, qE), (0, Eu.h)(uu, null, hR, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: uu => "useParallax" in uu,
              get: uu => uu.useParallax,
              set: (uu, Ru) => {
                uu.useParallax = Ru
              }
            },
            metadata: Ru
          }, aE, fE), (0, Eu.h)(uu, null, iR, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: uu => "useParallaxOcclusion" in uu,
              get: uu => uu.useParallaxOcclusion,
              set: (uu, Ru) => {
                uu.useParallaxOcclusion = Ru
              }
            },
            metadata: Ru
          }, yK, EK), (0, Eu.h)(uu, null, qR, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: uu => "roughness" in uu,
              get: uu => uu.roughness,
              set: (uu, Ru) => {
                uu.roughness = Ru
              }
            },
            metadata: Ru
          }, NK, XK), (0, Eu.h)(uu, null, uy, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: uu => "useLightmapAsShadowmap" in uu,
              get: uu => uu.useLightmapAsShadowmap,
              set: (uu, Ru) => {
                uu.useLightmapAsShadowmap = Ru
              }
            },
            metadata: Ru
          }, jK, HK), (0, Eu.h)(uu, null, yy, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "diffuseFresnelParameters" in uu,
              get: uu => uu.diffuseFresnelParameters,
              set: (uu, Ru) => {
                uu.diffuseFresnelParameters = Ru
              }
            },
            metadata: Ru
          }, CK, kK), (0, Eu.h)(uu, null, Ky, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "opacityFresnelParameters" in uu,
              get: uu => uu.opacityFresnelParameters,
              set: (uu, Ru) => {
                uu.opacityFresnelParameters = Ru
              }
            },
            metadata: Ru
          }, DK, MK), (0, Eu.h)(uu, null, my, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "reflectionFresnelParameters" in uu,
              get: uu => uu.reflectionFresnelParameters,
              set: (uu, Ru) => {
                uu.reflectionFresnelParameters = Ru
              }
            },
            metadata: Ru
          }, UK, nK), (0, Eu.h)(uu, null, Ny, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "refractionFresnelParameters" in uu,
              get: uu => uu.refractionFresnelParameters,
              set: (uu, Ru) => {
                uu.refractionFresnelParameters = Ru
              }
            },
            metadata: Ru
          }, lK, gK), (0, Eu.h)(uu, null, Vy, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "emissiveFresnelParameters" in uu,
              get: uu => uu.emissiveFresnelParameters,
              set: (uu, Ru) => {
                uu.emissiveFresnelParameters = Ru
              }
            },
            metadata: Ru
          }, zK, FK), (0, Eu.h)(uu, null, By, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: uu => "useReflectionFresnelFromSpecular" in uu,
              get: uu => uu.useReflectionFresnelFromSpecular,
              set: (uu, Ru) => {
                uu.useReflectionFresnelFromSpecular = Ru
              }
            },
            metadata: Ru
          }, hK, PK), (0, Eu.h)(uu, null, Sy, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: uu => "useGlossinessFromSpecularMapAlpha" in uu,
              get: uu => uu.useGlossinessFromSpecularMapAlpha,
              set: (uu, Ru) => {
                uu.useGlossinessFromSpecularMapAlpha = Ru
              }
            },
            metadata: Ru
          }, oK, qK), (0, Eu.h)(uu, null, Ty, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: uu => "maxSimultaneousLights" in uu,
              get: uu => uu.maxSimultaneousLights,
              set: (uu, Ru) => {
                uu.maxSimultaneousLights = Ru
              }
            },
            metadata: Ru
          }, aK, fK), (0, Eu.h)(uu, null, jy, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: uu => "invertNormalMapX" in uu,
              get: uu => uu.invertNormalMapX,
              set: (uu, Ru) => {
                uu.invertNormalMapX = Ru
              }
            },
            metadata: Ru
          }, yQ, EQ), (0, Eu.h)(uu, null, dy, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: uu => "invertNormalMapY" in uu,
              get: uu => uu.invertNormalMapY,
              set: (uu, Ru) => {
                uu.invertNormalMapY = Ru
              }
            },
            metadata: Ru
          }, mQ, JQ), (0, Eu.h)(uu, null, Cy, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: uu => "twoSidedLighting" in uu,
              get: uu => uu.twoSidedLighting,
              set: (uu, Ru) => {
                uu.twoSidedLighting = Ru
              }
            },
            metadata: Ru
          }, VQ, rQ), (0, Eu.h)(uu, null, ey, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: uu => "applyDecalMapAfterDetailMap" in uu,
              get: uu => uu.applyDecalMapAfterDetailMap,
              set: (uu, Ru) => {
                uu.applyDecalMapAfterDetailMap = Ru
              }
            },
            metadata: Ru
          }, SQ, pQ), (0, Eu.h)(null, null, KR, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_diffuseTexture" in uu,
              get: uu => uu._diffuseTexture,
              set: (uu, Ru) => {
                uu._diffuseTexture = Ru
              }
            },
            metadata: Ru
          }, Dy, My), (0, Eu.h)(null, null, mR, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_ambientTexture" in uu,
              get: uu => uu._ambientTexture,
              set: (uu, Ru) => {
                uu._ambientTexture = Ru
              }
            },
            metadata: Ru
          }, Uy, ny), (0, Eu.h)(null, null, NR, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_opacityTexture" in uu,
              get: uu => uu._opacityTexture,
              set: (uu, Ru) => {
                uu._opacityTexture = Ru
              }
            },
            metadata: Ru
          }, ly, gy), (0, Eu.h)(null, null, VR, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_reflectionTexture" in uu,
              get: uu => uu._reflectionTexture,
              set: (uu, Ru) => {
                uu._reflectionTexture = Ru
              }
            },
            metadata: Ru
          }, zy, Fy), (0, Eu.h)(null, null, BR, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_emissiveTexture" in uu,
              get: uu => uu._emissiveTexture,
              set: (uu, Ru) => {
                uu._emissiveTexture = Ru
              }
            },
            metadata: Ru
          }, hy, Py), (0, Eu.h)(null, null, SR, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_specularTexture" in uu,
              get: uu => uu._specularTexture,
              set: (uu, Ru) => {
                uu._specularTexture = Ru
              }
            },
            metadata: Ru
          }, oy, qy), (0, Eu.h)(null, null, TR, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_bumpTexture" in uu,
              get: uu => uu._bumpTexture,
              set: (uu, Ru) => {
                uu._bumpTexture = Ru
              }
            },
            metadata: Ru
          }, ay, fy), (0, Eu.h)(null, null, jR, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_lightmapTexture" in uu,
              get: uu => uu._lightmapTexture,
              set: (uu, Ru) => {
                uu._lightmapTexture = Ru
              }
            },
            metadata: Ru
          }, yE, EE), (0, Eu.h)(null, null, dR, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_refractionTexture" in uu,
              get: uu => uu._refractionTexture,
              set: (uu, Ru) => {
                uu._refractionTexture = Ru
              }
            },
            metadata: Ru
          }, mE, JE), (0, Eu.h)(null, null, CR, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "ambientColor" in uu,
              get: uu => uu.ambientColor,
              set: (uu, Ru) => {
                uu.ambientColor = Ru
              }
            },
            metadata: Ru
          }, VE, rE), (0, Eu.h)(null, null, kR, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "diffuseColor" in uu,
              get: uu => uu.diffuseColor,
              set: (uu, Ru) => {
                uu.diffuseColor = Ru
              }
            },
            metadata: Ru
          }, BE, xE), (0, Eu.h)(null, null, eR, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularColor" in uu,
              get: uu => uu.specularColor,
              set: (uu, Ru) => {
                uu.specularColor = Ru
              }
            },
            metadata: Ru
          }, SE, pE), (0, Eu.h)(null, null, AR, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "emissiveColor" in uu,
              get: uu => uu.emissiveColor,
              set: (uu, Ru) => {
                uu.emissiveColor = Ru
              }
            },
            metadata: Ru
          }, TE, WE), (0, Eu.h)(null, null, DR, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularPower" in uu,
              get: uu => uu.specularPower,
              set: (uu, Ru) => {
                uu.specularPower = Ru
              }
            },
            metadata: Ru
          }, jE, HE), (0, Eu.h)(null, null, MR, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useAlphaFromDiffuseTexture" in uu,
              get: uu => uu._useAlphaFromDiffuseTexture,
              set: (uu, Ru) => {
                uu._useAlphaFromDiffuseTexture = Ru
              }
            },
            metadata: Ru
          }, dE, bE), (0, Eu.h)(null, null, GR, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useEmissiveAsIllumination" in uu,
              get: uu => uu._useEmissiveAsIllumination,
              set: (uu, Ru) => {
                uu._useEmissiveAsIllumination = Ru
              }
            },
            metadata: Ru
          }, eE, AE), (0, Eu.h)(null, null, nR, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: uu => "_linkEmissiveWithDiffuse" in uu,
              get: uu => uu._linkEmissiveWithDiffuse,
              set: (uu, Ru) => {
                uu._linkEmissiveWithDiffuse = Ru
              }
            },
            metadata: Ru
          }, IE, GE), (0, Eu.h)(null, null, tR, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useSpecularOverAlpha" in uu,
              get: uu => uu._useSpecularOverAlpha,
              set: (uu, Ru) => {
                uu._useSpecularOverAlpha = Ru
              }
            },
            metadata: Ru
          }, sE, tE), (0, Eu.h)(null, null, gR, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useReflectionOverAlpha" in uu,
              get: uu => uu._useReflectionOverAlpha,
              set: (uu, Ru) => {
                uu._useReflectionOverAlpha = Ru
              }
            },
            metadata: Ru
          }, cE, LE), (0, Eu.h)(null, null, LR, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: uu => "_disableLighting" in uu,
              get: uu => uu._disableLighting,
              set: (uu, Ru) => {
                uu._disableLighting = Ru
              }
            },
            metadata: Ru
          }, wE, ZE), (0, Eu.h)(null, null, FR, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useObjectSpaceNormalMap" in uu,
              get: uu => uu._useObjectSpaceNormalMap,
              set: (uu, Ru) => {
                uu._useObjectSpaceNormalMap = Ru
              }
            },
            metadata: Ru
          }, iE, YE), (0, Eu.h)(null, null, ZR, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useParallax" in uu,
              get: uu => uu._useParallax,
              set: (uu, Ru) => {
                uu._useParallax = Ru
              }
            },
            metadata: Ru
          }, OE, vE), (0, Eu.h)(null, null, PR, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useParallaxOcclusion" in uu,
              get: uu => uu._useParallaxOcclusion,
              set: (uu, Ru) => {
                uu._useParallaxOcclusion = Ru
              }
            },
            metadata: Ru
          }, uK, RK), (0, Eu.h)(null, null, YR, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: uu => "parallaxScaleBias" in uu,
              get: uu => uu.parallaxScaleBias,
              set: (uu, Ru) => {
                uu.parallaxScaleBias = Ru
              }
            },
            metadata: Ru
          }, KK, QK), (0, Eu.h)(null, null, oR, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: uu => "_roughness" in uu,
              get: uu => uu._roughness,
              set: (uu, Ru) => {
                uu._roughness = Ru
              }
            },
            metadata: Ru
          }, mK, JK), (0, Eu.h)(null, null, OR, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: uu => "indexOfRefraction" in uu,
              get: uu => uu.indexOfRefraction,
              set: (uu, Ru) => {
                uu.indexOfRefraction = Ru
              }
            },
            metadata: Ru
          }, VK, rK), (0, Eu.h)(null, null, vR, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: uu => "invertRefractionY" in uu,
              get: uu => uu.invertRefractionY,
              set: (uu, Ru) => {
                uu.invertRefractionY = Ru
              }
            },
            metadata: Ru
          }, BK, xK), (0, Eu.h)(null, null, aR, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: uu => "alphaCutOff" in uu,
              get: uu => uu.alphaCutOff,
              set: (uu, Ru) => {
                uu.alphaCutOff = Ru
              }
            },
            metadata: Ru
          }, SK, pK), (0, Eu.h)(null, null, fR, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useLightmapAsShadowmap" in uu,
              get: uu => uu._useLightmapAsShadowmap,
              set: (uu, Ru) => {
                uu._useLightmapAsShadowmap = Ru
              }
            },
            metadata: Ru
          }, TK, WK), (0, Eu.h)(null, null, Ry, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "_diffuseFresnelParameters" in uu,
              get: uu => uu._diffuseFresnelParameters,
              set: (uu, Ru) => {
                uu._diffuseFresnelParameters = Ru
              }
            },
            metadata: Ru
          }, dK, bK), (0, Eu.h)(null, null, Ey, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "_opacityFresnelParameters" in uu,
              get: uu => uu._opacityFresnelParameters,
              set: (uu, Ru) => {
                uu._opacityFresnelParameters = Ru
              }
            },
            metadata: Ru
          }, eK, AK), (0, Eu.h)(null, null, Qy, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "_reflectionFresnelParameters" in uu,
              get: uu => uu._reflectionFresnelParameters,
              set: (uu, Ru) => {
                uu._reflectionFresnelParameters = Ru
              }
            },
            metadata: Ru
          }, IK, GK), (0, Eu.h)(null, null, Jy, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "_refractionFresnelParameters" in uu,
              get: uu => uu._refractionFresnelParameters,
              set: (uu, Ru) => {
                uu._refractionFresnelParameters = Ru
              }
            },
            metadata: Ru
          }, sK, tK), (0, Eu.h)(null, null, Xy, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "_emissiveFresnelParameters" in uu,
              get: uu => uu._emissiveFresnelParameters,
              set: (uu, Ru) => {
                uu._emissiveFresnelParameters = Ru
              }
            },
            metadata: Ru
          }, cK, LK), (0, Eu.h)(null, null, ry, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useReflectionFresnelFromSpecular" in uu,
              get: uu => uu._useReflectionFresnelFromSpecular,
              set: (uu, Ru) => {
                uu._useReflectionFresnelFromSpecular = Ru
              }
            },
            metadata: Ru
          }, wK, ZK), (0, Eu.h)(null, null, xy, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useGlossinessFromSpecularMapAlpha" in uu,
              get: uu => uu._useGlossinessFromSpecularMapAlpha,
              set: (uu, Ru) => {
                uu._useGlossinessFromSpecularMapAlpha = Ru
              }
            },
            metadata: Ru
          }, iK, YK), (0, Eu.h)(null, null, py, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: uu => "_maxSimultaneousLights" in uu,
              get: uu => uu._maxSimultaneousLights,
              set: (uu, Ru) => {
                uu._maxSimultaneousLights = Ru
              }
            },
            metadata: Ru
          }, OK, vK), (0, Eu.h)(null, null, Wy, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: uu => "_invertNormalMapX" in uu,
              get: uu => uu._invertNormalMapX,
              set: (uu, Ru) => {
                uu._invertNormalMapX = Ru
              }
            },
            metadata: Ru
          }, uQ, RQ), (0, Eu.h)(null, null, Hy, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: uu => "_invertNormalMapY" in uu,
              get: uu => uu._invertNormalMapY,
              set: (uu, Ru) => {
                uu._invertNormalMapY = Ru
              }
            },
            metadata: Ru
          }, KQ, QQ), (0, Eu.h)(null, null, by, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: uu => "_twoSidedLighting" in uu,
              get: uu => uu._twoSidedLighting,
              set: (uu, Ru) => {
                uu._twoSidedLighting = Ru
              }
            },
            metadata: Ru
          }, NQ, XQ), (0, Eu.h)(null, null, ky, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: uu => "_applyDecalMapAfterDetailMap" in uu,
              get: uu => uu._applyDecalMapAfterDetailMap,
              set: (uu, Ru) => {
                uu._applyDecalMapAfterDetailMap = Ru
              }
            },
            metadata: Ru
          }, BQ, xQ), Ru && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ru
          })
        })(), uu.ForceGLSL = !1, uu._ShaderLoader = new Cu.d((() => [Promise.all([yu.e(307), yu.e(306)]).then((() => yu(41451))), Promise.all([yu.e(312), yu.e(308), yu.e(321), yu.e(311)]).then((() => yu(41627)))]), (() => [Promise.all([yu.e(328), yu.e(323)]).then((() => yu(41780))), Promise.all([yu.e(329), yu.e(339), yu.e(325)]).then((() => yu(41975)))])), uu
      })(),
      lu = !1;

    function gu() {
      lu || (lu = !0, (0, ru.f)(), (0, Mu.c)("BABYLON.StandardMaterial", tu), mu.i.DefaultMaterialFactory = uu => new tu("default material", uu))
    }
    Object.getOwnPropertyDescriptor(tu.prototype, "decalMap") || Object.defineProperty(tu.prototype, "decalMap", (0, Iu.e)("StandardMaterial", "decalMap"))
  },
  39958: (uu, Ru, yu) => {
    function Eu(uu) {
      return class extends uu {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    yu.d(Ru, {
      c: () => Eu
    })
  },
  39948: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu
    });
    class Eu {
      constructor(uu, Ru) {
        this._webGL = {
          load: uu,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: Ru,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(uu) {
        const Ru = 1 === uu ? this._webGPU : this._webGL;
        return Ru.loaded ? void 0 : async () => {
          await this._loadAsync(Ru)
        }
      }
      async _loadAsync(uu) {
        if (uu.loaded) return;
        let Ru = uu.loadPromise;
        const yu = null === Ru;
        yu && (Ru = Promise.all(uu.load()), uu.loadPromise = Ru);
        let Eu = !1;
        try {
          await Ru, Eu = !0
        } finally {
          yu && this._completeLoad(uu, Eu)
        }
      }
      _completeLoad(uu, Ru) {
        uu.loaded = Ru, uu.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);