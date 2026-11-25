export const id = 265;
export const ids = [265];
export const modules = {
  40650: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Uu
    });
    var su = ju(40264);

    function Uu(uu) {
      return class extends uu {
        constructor() {
          super(...arguments);
          const uu = new.target;
          if (!uu[Symbol.metadata]) {
            const Eu = Object.getPrototypeOf(uu)?.[Symbol.metadata];
            uu[Symbol.metadata] = Eu ? Object.create(Eu) : {}
          }
          const Eu = (0, su.b)(uu[Symbol.metadata]);
          Eu._imageProcessingConfiguration || (Eu._imageProcessingConfiguration = {
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
          uu !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !uu && this.hV ? this._imageProcessingConfiguration = this.hV().imageProcessingConfiguration : uu && (this._imageProcessingConfiguration = uu), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
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
  40535: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu,
      f: () => Uu
    });
    var su = ju(40543);

    function Uu(uu) {
      return class extends uu {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class Zu extends su.c {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  40614: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => bu
    });
    var su = ju(40255),
      Uu = ju(40552),
      Zu = ju(40258),
      Xu = ju(40598),
      lu = ju(40543),
      qu = ju(40622),
      fu = ju(40592);
    class Cu extends lu.c {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let bu = (() => {
      var uu, Eu, ju, lu;
      let bu, cu, Nu, Ou, Yu, hu, Du = qu.b,
        gu = [],
        Mu = [],
        eu = [],
        Gu = [],
        pu = [],
        wu = [],
        Ju = [],
        du = [],
        au = [],
        Pu = [],
        ou = [],
        ku = [];
      return uu = class extends Du {
        get texture() {
          return (0, su.b)(this, Eu, "f")
        }
        set texture(uu) {
          (0, su.d)(this, Eu, uu, "f")
        }
        get normalBlendMethod() {
          return (0, su.b)(this, ju, "f")
        }
        set normalBlendMethod(uu) {
          (0, su.d)(this, ju, uu, "f")
        }
        get isEnabled() {
          return (0, su.b)(this, lu, "f")
        }
        set isEnabled(uu) {
          (0, su.d)(this, lu, uu, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(uu) {
          let Zu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(uu, "DetailMap", 140, new Cu, Zu), this._texture = null, Eu.set(this, (0, su.g)(this, gu, void 0)), this.diffuseBlendLevel = ((0, su.g)(this, Mu), (0, su.g)(this, eu, 1)), this.roughnessBlendLevel = ((0, su.g)(this, Gu), (0, su.g)(this, pu, 1)), this.bumpLevel = ((0, su.g)(this, wu), (0, su.g)(this, Ju, 1)), this._normalBlendMethod = ((0, su.g)(this, du), Uu.b.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), ju.set(this, (0, su.g)(this, au, void 0)), this._isEnabled = ((0, su.g)(this, Pu), !1), lu.set(this, (0, su.g)(this, ou, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, su.g)(this, ku), this._internalMarkAllSubMeshesAsTexturesDirty = uu._dirtyCallbacks[1]
        }
        isReadyForSubMesh(uu, Eu, ju) {
          return !this._isEnabled || !(uu._areTexturesDirty && Eu.texturesEnabled && ju.getCaps().standardDerivatives && this._texture && Xu.d.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(uu, Eu) {
          if (this._isEnabled) {
            uu.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const ju = Eu.wO();
            uu._areTexturesDirty && (ju.getCaps().standardDerivatives && this._texture && Xu.d.DetailTextureEnabled && this._isEnabled ? ((0, fu.jb)(this._texture, uu, "DETAIL"), uu.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : uu.DETAIL = !1)
          } else uu.DETAIL = !1
        }
        bindForSubMesh(uu, Eu) {
          if (!this._isEnabled) return;
          const ju = this._material.isFrozen;
          uu.useUbo && ju && uu.isSync || this._texture && Xu.d.DetailTextureEnabled && (uu.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, fu.E)(this._texture, uu, "detail")), Eu.texturesEnabled && this._texture && Xu.d.DetailTextureEnabled && uu.setTexture("detailSampler", this._texture)
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
      }, Eu = new WeakMap, ju = new WeakMap, lu = new WeakMap, (() => {
        const Eu = "function" === typeof Symbol && Symbol.metadata ? Object.create(Du[Symbol.metadata] ?? null) : void 0;
        bu = [(0, Zu.y)("detailTexture"), (0, Zu.e)("_markAllSubMeshesAsTexturesDirty")], cu = [(0, Zu.E)()], Nu = [(0, Zu.E)()], Ou = [(0, Zu.E)()], Yu = [(0, Zu.E)(), (0, Zu.e)("_markAllSubMeshesAsTexturesDirty")], hu = [(0, Zu.E)(), (0, Zu.e)("_markAllSubMeshesAsTexturesDirty")], (0, su.e)(uu, null, bu, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: uu => "texture" in uu,
            get: uu => uu.texture,
            set: (uu, Eu) => {
              uu.texture = Eu
            }
          },
          metadata: Eu
        }, gu, Mu), (0, su.e)(uu, null, Yu, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: uu => "normalBlendMethod" in uu,
            get: uu => uu.normalBlendMethod,
            set: (uu, Eu) => {
              uu.normalBlendMethod = Eu
            }
          },
          metadata: Eu
        }, au, Pu), (0, su.e)(uu, null, hu, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: uu => "isEnabled" in uu,
            get: uu => uu.isEnabled,
            set: (uu, Eu) => {
              uu.isEnabled = Eu
            }
          },
          metadata: Eu
        }, ou, ku), (0, su.e)(null, null, cu, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: uu => "diffuseBlendLevel" in uu,
            get: uu => uu.diffuseBlendLevel,
            set: (uu, Eu) => {
              uu.diffuseBlendLevel = Eu
            }
          },
          metadata: Eu
        }, eu, Gu), (0, su.e)(null, null, Nu, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: uu => "roughnessBlendLevel" in uu,
            get: uu => uu.roughnessBlendLevel,
            set: (uu, Eu) => {
              uu.roughnessBlendLevel = Eu
            }
          },
          metadata: Eu
        }, pu, wu), (0, su.e)(null, null, Ou, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: uu => "bumpLevel" in uu,
            get: uu => uu.bumpLevel,
            set: (uu, Eu) => {
              uu.bumpLevel = Eu
            }
          },
          metadata: Eu
        }, Ju, du), Eu && Object.defineProperty(uu, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eu
        })
      })(), uu
    })()
  },
  40543: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su
    });
    class su {
      constructor(uu) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = uu, uu)
          for (const Eu in uu) Object.prototype.hasOwnProperty.call(uu, Eu) && this._setDefaultValue(Eu)
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
        for (let Eu = 0; Eu < this._keys.length; Eu++) {
          const ju = this._keys[Eu];
          if (this[ju] !== uu[ju]) return !1
        }
        return !0
      }
      cloneTo(uu) {
        this._keys.length !== uu._keys.length && (uu._keys = this._keys.slice(0));
        for (let Eu = 0; Eu < this._keys.length; Eu++) {
          const ju = this._keys[Eu];
          uu[ju] = this[ju]
        }
      }
      reset() {
        for (const uu of this._keys) this._setDefaultValue(uu)
      }
      _setDefaultValue(uu) {
        const Eu = this._externalProperties?.[uu]?.type ?? typeof this[uu],
          ju = this._externalProperties?.[uu]?.default;
        switch (Eu) {
          case "number":
            this[uu] = ju ?? 0;
            break;
          case "string":
            this[uu] = ju ?? "";
            break;
          default:
            this[uu] = ju ?? !1
        }
      }
      toString() {
        let uu = "";
        for (let Eu = 0; Eu < this._keys.length; Eu++) {
          const ju = this._keys[Eu],
            su = this[ju];
          switch (typeof su) {
            case "number":
            case "string":
              uu += "#define " + ju + " " + su + "\n";
              break;
            default:
              su && (uu += "#define " + ju + "\n")
          }
        }
        return uu
      }
    }
  },
  40634: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => lu,
      d: () => Xu,
      h: () => Zu
    });
    var su, Uu = ju(37494);

    function Zu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const su = Eu(uu);
      if (!Number.isInteger(su) || su < 0 || su > ju) throw new Error(`Invalid geometry object ID ${su} for mesh "${uu.name}". Object IDs must be integers between 0 and 0x${ju.toString(16).toUpperCase()}.`);
      return su
    }

    function Xu(uu, Eu) {
      const ju = Eu(uu);
      if (!Number.isInteger(ju) || ju < 0 || ju > 255 || 0 !== ju && 0 === (63 & ju)) throw new Error(`Invalid geometry mesh-blending tag ${ju} for mesh "${uu.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return ju
    }! function(uu) {
      uu[uu.Zero = 0] = "Zero", uu[uu.One = 1] = "One", uu[uu.MaxViewZ = 2] = "MaxViewZ", uu[uu.NoClear = 3] = "NoClear"
    }(su || (su = {}));
    class lu {
      static CreateConfiguration(uu) {
        return lu._Configurations[uu] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: Uu.e.Zero(),
          currentViewProjection: Uu.e.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, lu._Configurations[uu]
      }
      static DeleteConfiguration(uu) {
        delete lu._Configurations[uu]
      }
      static GetConfiguration(uu) {
        return lu._Configurations[uu]
      }
      static _PrepareConfiguration(uu, Eu, ju) {
        const su = lu._Configurations[uu];
        su._attachments = Eu, su._colorAttachments = ju, su._mrtCount = Eu.length;
        let Uu = "#define PREPASS\n";
        for (const Zu of lu.GeometryTextureDescriptions) {
          const uu = su.defines[Zu.defineIndex];
          void 0 !== uu && (Uu += `#define ${Zu.define}\n#define ${Zu.defineIndex} ${uu}\n`)
        }
        su.objectIdIsRedFormat && (Uu += "#define PREPASS_OBJECT_ID_R8\n"), su._defines = Uu + `#define SCENE_MRT_COUNT ${Eu.length}\n`
      }
      static _PrepareStringDefines(uu, Eu) {
        const ju = lu._Configurations[uu];
        return !!ju?._defines && (Eu.push(ju._defines), !0)
      }
      static _BindAttachmentsForEffect(uu, Eu) {
        const ju = lu._Configurations[uu.currentRenderPassId];
        return !ju?._attachments || (uu.bindAttachments(Eu._multiTarget ? ju._attachments : ju._colorAttachments), Eu._multiTarget || void 0 !== ju.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(uu) {
        const Eu = lu._Configurations[uu.currentRenderPassId];
        Eu?._colorAttachments && uu.bindAttachments(Eu._colorAttachments)
      }
      static _BindColorAttachments(uu) {
        const Eu = lu._Configurations[uu.currentRenderPassId];
        return !Eu?._colorAttachments || (uu.bindAttachments(Eu._colorAttachments), void 0 !== Eu.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(uu) {
        const Eu = lu._Configurations[uu.currentRenderPassId];
        return !Eu?._colorAttachments || void 0 !== Eu.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(uu, Eu) {
        const ju = lu._Configurations[uu.currentRenderPassId];
        if (!ju) return;
        const su = uu.getAlphaMode(),
          Uu = void 0 === ju.defines.PREPASS_COLOR_INDEX || 2 === su || 1 === su || 17 === su;
        Eu.setFloat("geometryZeroAlphaDiscard", Uu ? 1 : 0)
      }
      static AddUniformsAndSamplers(uu, Eu) {
        uu.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(uu, Eu) {
        for (const ju of Eu)
          if (ju.iG)
            for (const Eu of ju.iG) Eu._removeDrawWrapper(uu)
      }
      static PrepareDefines(uu, Eu, ju) {
        if (!ju._arePrePassDirty) return;
        const su = lu._Configurations[uu];
        if (!su) return;
        ju.PREPASS = !0;
        let Uu = 0;
        for (let Zu = 0; Zu < lu.GeometryTextureDescriptions.length; Zu++) {
          const uu = lu.GeometryTextureDescriptions[Zu],
            Eu = uu.define,
            Xu = uu.defineIndex,
            qu = su.defines[Xu];
          void 0 !== qu ? (ju[Eu] = !0, ju[Xu] = qu, Uu++) : (ju[Eu] = !1, delete ju[Xu])
        }
        ju.PREPASS_OBJECT_ID_R8 = su.objectIdIsRedFormat, ju.SCENE_MRT_COUNT = su._mrtCount ?? Uu, ju.BONES_VELOCITY_ENABLED = Eu.useBones && Eu.computeBonesUsingShaders && Eu.skeleton && !Eu.skeleton.isUsingTextureForMatrices && -1 === su.excludedSkinnedMesh.indexOf(Eu)
      }
      static Bind(uu, Eu, ju, su, Uu) {
        const qu = lu._Configurations[uu];
        if (!qu) return;
        const fu = ju.hV(),
          Cu = fu.wO();
        if (qu.reverseCulling && Cu.setStateCullFaceType(fu._mirroredCameraPosition ? Uu.cullBackFaces : !Uu.cullBackFaces), void 0 !== qu.defines.PREPASS_OBJECT_ID_INDEX) {
          const uu = qu.objectIdIsRedFormat ? 255 : 16777215;
          let su = ju.uniqueId;
          if (qu.objectIdProvider) su = Zu(ju, qu.objectIdProvider, uu);
          else if (su > uu) throw new Error(`Invalid geometry object ID ${su} for mesh "${ju.name}". Object IDs must be integers between 0 and 0x${uu.toString(16).toUpperCase()}.`);
          Eu.setFloat("objectId", su)
        }
        if (void 0 !== qu.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const uu = qu.meshBlendTagProvider ? Xu(ju, qu.meshBlendTagProvider) : ju.meshBlendingTag;
          Eu.setInt("meshBlendTag", uu)
        }
        if (void 0 !== qu.defines.PREPASS_VELOCITY_INDEX || void 0 !== qu.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const uu = qu._currentWorldMatrices ?? (qu._currentWorldMatrices = {}),
            Uu = qu._worldMatrixFrameIds ?? (qu._worldMatrixFrameIds = {});
          if (uu[ju.uniqueId] || (uu[ju.uniqueId] = su.clone(), qu.previousWorldMatrices[ju.uniqueId] = su.clone()), Uu[ju.uniqueId] !== Cu.frameId && (qu.previousWorldMatrices[ju.uniqueId].yJ(uu[ju.uniqueId]), Uu[ju.uniqueId] = Cu.frameId), uu[ju.uniqueId].yJ(su), -1 === qu.lastUpdateFrameId ? (qu.lastUpdateFrameId = Cu.frameId, qu.previousViewProjection.yJ(fu.getTransformMatrix()), qu.currentViewProjection.yJ(fu.getTransformMatrix())) : qu.currentViewProjection.updateFlag !== fu.getTransformMatrix().updateFlag ? (qu.lastUpdateFrameId = Cu.frameId, qu.previousViewProjection.yJ(qu.currentViewProjection), qu.currentViewProjection.yJ(fu.getTransformMatrix())) : qu.lastUpdateFrameId !== Cu.frameId && (qu.lastUpdateFrameId = Cu.frameId, qu.previousViewProjection.yJ(qu.currentViewProjection)), Eu.setMatrix("previousWorld", qu.previousWorldMatrices[ju.uniqueId]), Eu.setMatrix("previousViewProjection", qu.previousViewProjection), ju.useBones && ju.computeBonesUsingShaders && ju.skeleton) {
            const uu = ju.skeleton;
            if (!uu.isUsingTextureForMatrices || -1 === Eu.getUniformIndex("boneTextureInfo")) {
              const su = uu.getTransformMatrices(ju);
              su && (qu.previousBones[ju.uniqueId] || (qu.previousBones[ju.uniqueId] = su.slice()), Eu.setMatrices("mPreviousBones", qu.previousBones[ju.uniqueId]), qu.previousBones[ju.uniqueId].set(su))
            }
          }
        }
      }
    }
    lu.GeometryTextureDescriptions = [{
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
    }], lu._Configurations = {}
  },
  40622: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => cu,
      d: () => Ou
    });
    var su = ju(40255),
      Uu = ju(40258),
      Zu = ju(40160),
      Xu = ju(40127);
    const lu = new RegExp("^([gimus]+)!");
    class qu {
      constructor(uu) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = uu, this._scene = uu.hV(), this._engine = this._scene.wO()
      }
      _addPlugin(uu) {
        for (let su = 0; su < this._plugins.length; ++su)
          if (this._plugins[su].name === uu.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !uu.isCompatible(this._material.shaderLanguage)) throw `The plugin "${uu.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const Eu = uu.getClassName();
        qu._MaterialPluginClassToMainDefine[Eu] || (qu._MaterialPluginClassToMainDefine[Eu] = "MATERIALPLUGIN_" + ++qu._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (uu, Eu) => this._handlePluginEvent(uu, Eu), this._plugins.push(uu), this._plugins.sort(((uu, Eu) => uu.priority - Eu.priority)), this._codeInjectionPoints = {};
        const ju = {};
        ju[qu._MaterialPluginClassToMainDefine[Eu]] = {
          type: "boolean",
          default: !0
        };
        for (const su of this._plugins) su.collectDefines(ju), this._collectPointNames("vertex", su.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", su.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = ju, !0
      }
      _activatePlugin(uu) {
        -1 === this._activePlugins.indexOf(uu) && (this._activePlugins.push(uu), this._activePlugins.sort(((uu, Eu) => uu.priority - Eu.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), uu.registerForExtraEvents && (this._activePluginsForExtraEvents.push(uu), this._activePluginsForExtraEvents.sort(((uu, Eu) => uu.priority - Eu.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(uu) {
        for (let Eu = 0; Eu < this._plugins.length; ++Eu)
          if (this._plugins[Eu].name === uu) return this._plugins[Eu];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(uu) {
        let Eu = !0;
        for (const ju of this._activePlugins) Eu = Eu && ju.isReadyForSubMesh(uu.defines, this._scene, this._engine, uu.subMesh);
        uu.isReadyForSubMesh = Eu
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(uu) {
        for (const Eu of this._activePlugins) Eu.prepareDefinesBeforeAttributes(uu.defines, this._scene, uu.mesh)
      }
      _handlePluginEventPrepareDefines(uu) {
        for (const Eu of this._activePlugins) Eu.prepareDefines(uu.defines, this._scene, uu.mesh)
      }
      _handlePluginEventHardBindForSubMesh(uu) {
        for (const Eu of this._activePluginsForExtraEvents) Eu.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, uu.subMesh)
      }
      _handlePluginEventBindForSubMesh(uu) {
        for (const Eu of this._activePlugins) Eu.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, uu.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(uu) {
        let Eu = !1;
        for (const ju of this._activePluginsForExtraEvents)
          if (Eu = ju.hasRenderTargetTextures(), Eu) break;
        uu.hasRenderTargetTextures = Eu
      }
      _handlePluginEventFillRenderTargetTextures(uu) {
        for (const Eu of this._activePluginsForExtraEvents) Eu.fillRenderTargetTextures(uu.renderTargets)
      }
      _handlePluginEvent(uu, Eu) {
        switch (uu) {
          case 512: {
            const uu = Eu;
            for (const Eu of this._activePlugins) Eu.getActiveTextures(uu.activeTextures);
            break
          }
          case 256: {
            const uu = Eu;
            for (const Eu of this._activePlugins) Eu.getAnimatables(uu.animatables);
            break
          }
          case 1024: {
            const uu = Eu;
            let ju = !1;
            for (const Eu of this._activePlugins)
              if (ju = Eu.hasTexture(uu.texture), ju) break;
            uu.hasTexture = ju;
            break
          }
          case 2: {
            const uu = Eu;
            for (const Eu of this._plugins) Eu.dispose(uu.forceDisposeTextures);
            break
          }
          case 4:
            Eu.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const uu = Eu;
            for (const Eu of this._activePlugins) uu.fallbackRank = Eu.addFallbacks(uu.defines, uu.fallbacks, uu.fallbackRank), Eu.getAttributes(uu.attributes, this._scene, uu.mesh);
            this._uniformList.length > 0 && uu.uniforms.push(...this._uniformList), this._samplerList.length > 0 && uu.samplers.push(...this._samplerList), this._uboList.length > 0 && uu.uniformBuffersNames.push(...this._uboList), uu.customCode = this._injectCustomCode(uu, uu.customCode);
            break
          }
          case 8: {
            const uu = Eu;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const ju = 1 === this._material.shaderLanguage;
            for (const Eu of this._plugins) {
              const su = Eu.getUniforms(this._material.shaderLanguage);
              if (su) {
                if (su.ubo)
                  for (const Eu of su.ubo) {
                    if (Eu.size && Eu.type) {
                      const su = Eu.arraySize ?? 0;
                      if (uu.ubo.addUniform(Eu.name, Eu.size, su), ju) {
                        let uu;
                        switch (Eu.type) {
                          case "mat4":
                            uu = "mat4x4f";
                            break;
                          case "float":
                            uu = "f32";
                            break;
                          default:
                            uu = `${Eu.type}f`
                        }
                        this._uboDeclaration += su > 0 ? `uniform ${Eu.name}: array<${uu}, ${su}>;\n` : `uniform ${Eu.name}: ${uu};\n`
                      } else this._uboDeclaration += `${Eu.type} ${Eu.name}${su>0?`[${su}]`:""};\n`
                    }
                    this._uniformList.push(Eu.name)
                  }
                su.vertex && (this._vertexDeclaration += su.vertex + "\n"), su.fragment && (this._fragmentDeclaration += su.fragment + "\n"), su.externalUniforms && this._uniformList.push(...su.externalUniforms)
              }
              Eu.getSamplers(this._samplerList), Eu.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(uu, Eu) {
        if (Eu)
          for (const ju in Eu) this._codeInjectionPoints[uu] || (this._codeInjectionPoints[uu] = {}), this._codeInjectionPoints[uu][ju] = !0
      }
      _injectCustomCode(uu, Eu) {
        return (ju, su) => {
          Eu && (su = Eu(ju, su)), this._uboDeclaration && (su = su.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (su = su.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (su = su.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const Uu = this._codeInjectionPoints?.[ju];
          if (!Uu) return su;
          let qu = null;
          for (let Eu in Uu) {
            let Uu = "";
            for (const su of this._activePlugins) {
              const lu = this._material.shaderLanguage;
              let fu = su.getCustomCode(ju, lu)?.[Eu];
              fu && (su.resolveIncludes && (null === qu && (qu = {
                defines: [],
                indexParameters: uu.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: Xu.b.GetShadersRepository(lu),
                includesShadersStore: Xu.b.GetIncludesShadersStore(lu),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                bsu: this._engine.bsu,
                processCodeAfterIncludes: void 0
              }), qu.isFragment = "fragment" === ju, (0, Zu.l)(fu, qu, (uu => fu = uu))), Uu += fu + "\n")
            }
            if (Uu.length > 0)
              if ("!" === Eu.charAt(0)) {
                Eu = Eu.substring(1);
                let uu = "g";
                if ("!" === Eu.charAt(0)) uu = "", Eu = Eu.substring(1);
                else {
                  const ju = lu.exec(Eu);
                  ju && ju.length >= 2 && (uu = ju[1], Eu = Eu.substring(uu.length + 1))
                }
                uu.indexOf("g") < 0 && (uu += "g");
                const ju = new RegExp(Eu, uu);
                let Zu = ju.exec(su);
                for (; null !== Zu;) {
                  const {
                    index: uu
                  } = Zu, Eu = fu(Uu, Zu);
                  su = su.substring(0, uu) + Eu + su.substring(uu + Zu[0].length), ju.lastIndex = uu + Eu.length, Zu = ju.exec(su)
                }
              } else {
                const uu = "#define " + Eu;
                su = su.replace(uu, "\n" + Uu + "\n" + uu)
              }
          }
          return su
        }
      }
    }
    qu._MaterialPluginClassToMainDefine = {}, qu._MaterialPluginCounter = 0;

    function fu(uu, Eu) {
      return uu.replace(/\$(\d+)/g, ((uu, ju) => {
        const su = Number(ju);
        return su < Eu.length ? Eu[su] : ""
      }))
    }
    var Cu = ju(40272),
      bu = ju(37532);
    let cu = (() => {
        var uu;
        let Eu, ju, Zu, Xu, lu = [],
          fu = [],
          bu = [],
          cu = [],
          Nu = [],
          Ou = [],
          Yu = [],
          hu = [];
        return uu = class {
          isCompatible(uu) {
            return 0 === uu
          }
          _enable(uu) {
            uu && this._pluginManager._activatePlugin(this)
          }
          constructor(uu, Eu, ju, Uu) {
            let Zu = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              Xu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              Cu = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, su.g)(this, lu, void 0), this.priority = ((0, su.g)(this, fu), (0, su.g)(this, bu, 500)), this.resolveIncludes = ((0, su.g)(this, cu), (0, su.g)(this, Nu, !1)), this.registerForExtraEvents = ((0, su.g)(this, Ou), (0, su.g)(this, Yu, !1)), this.doNotSerialize = ((0, su.g)(this, hu), !1), this._material = uu, this.name = Eu, this.priority = ju, this.resolveIncludes = Cu, uu.pluginManager || (uu.pluginManager = new qu(uu), uu.wV.add((() => {
              uu.pluginManager = void 0
            }))), this._pluginDefineNames = Uu, this._pluginManager = uu.pluginManager, Zu && this._pluginManager._addPlugin(this), Xu && this._enable(!0), this.markAllDefinesAsDirty = uu._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(uu, Eu, ju, su) {
            return !0
          }
          hardBindForSubMesh(uu, Eu, ju, su) {}
          bindForSubMesh(uu, Eu, ju, su) {}
          dispose(uu) {}
          getCustomCode(uu) {
            return null
          }
          collectDefines(uu) {
            if (this._pluginDefineNames)
              for (const Eu of Object.keys(this._pluginDefineNames)) {
                if ("_" === Eu[0]) continue;
                const ju = typeof this._pluginDefineNames[Eu];
                uu[Eu] = {
                  type: "number" === ju ? "number" : "string" === ju ? "string" : "boolean" === ju ? "boolean" : "object",
                  default: this._pluginDefineNames[Eu]
                }
              }
          }
          prepareDefinesBeforeAttributes(uu, Eu, ju) {}
          prepareDefines(uu, Eu, ju) {}
          hasTexture(uu) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(uu) {}
          getActiveTextures(uu) {}
          getAnimatables(uu) {}
          addFallbacks(uu, Eu, ju) {
            return ju
          }
          getSamplers(uu) {}
          getAttributes(uu, Eu, ju) {}
          getUniformBuffersNames(uu) {}
          getUniforms() {
            return {}
          }
          copyTo(uu) {
            Cu.e.Clone((() => uu), this)
          }
          serialize() {
            return Cu.e.Serialize(this)
          }
          parse(uu, Eu, ju) {
            Cu.e.Parse((() => this), uu, Eu, ju)
          }
        }, (() => {
          const qu = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Eu = [(0, Uu.E)()], ju = [(0, Uu.E)()], Zu = [(0, Uu.E)()], Xu = [(0, Uu.E)()], (0, su.e)(null, null, Eu, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: uu => "name" in uu,
              get: uu => uu.name,
              set: (uu, Eu) => {
                uu.name = Eu
              }
            },
            metadata: qu
          }, lu, fu), (0, su.e)(null, null, ju, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: uu => "priority" in uu,
              get: uu => uu.priority,
              set: (uu, Eu) => {
                uu.priority = Eu
              }
            },
            metadata: qu
          }, bu, cu), (0, su.e)(null, null, Zu, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: uu => "resolveIncludes" in uu,
              get: uu => uu.resolveIncludes,
              set: (uu, Eu) => {
                uu.resolveIncludes = Eu
              }
            },
            metadata: qu
          }, Nu, Ou), (0, su.e)(null, null, Xu, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: uu => "registerForExtraEvents" in uu,
              get: uu => uu.registerForExtraEvents,
              set: (uu, Eu) => {
                uu.registerForExtraEvents = Eu
              }
            },
            metadata: qu
          }, Yu, hu), qu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qu
          })
        })(), uu
      })(),
      Nu = !1;

    function Ou() {
      Nu || (Nu = !0, (0, bu.f)("BABYLON.MaterialPluginBase", cu))
    }
  },
  40529: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => su
    });
    class su {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(uu) {
        uu.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(uu) {}
      bindForSubMesh(uu, Eu, ju, su, Uu) {
        if (Eu.prePassRenderer && Eu.prePassRenderer.enabled && Eu.prePassRenderer.currentRTisSceneRT && (-1 !== Eu.prePassRenderer.getIndex(2) || -1 !== Eu.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[ju.uniqueId] || (this.previousWorldMatrices[ju.uniqueId] = su.clone()), this.previousViewProjection || (this.previousViewProjection = Eu.getTransformMatrix().clone(), this.currentViewProjection = Eu.getTransformMatrix().clone());
          const Uu = Eu.wO();
          this.currentViewProjection.updateFlag !== Eu.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = Uu.frameId, this.previousViewProjection.yJ(this.currentViewProjection), this.currentViewProjection.yJ(Eu.getTransformMatrix())) : this._lastUpdateFrameId !== Uu.frameId && (this._lastUpdateFrameId = Uu.frameId, this.previousViewProjection.yJ(this.currentViewProjection)), uu.setMatrix("previousWorld", this.previousWorldMatrices[ju.uniqueId]), uu.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[ju.uniqueId] = su.clone()
        }
      }
    }
  },
  40648: (uu, Eu, ju) => {
    function su(uu) {
      return class extends uu {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    ju.d(Eu, {
      b: () => su
    })
  },
  40514: (uu, Eu, ju) => {
    ju.d(Eu, {
      StandardMaterial: () => su.e
    });
    var su = ju(40522);
    (0, su.c)()
  },
  40522: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Qu,
      e: () => Vu
    });
    var su = ju(40255),
      Uu = ju(40258),
      Zu = ju(40366),
      Xu = ju(40350),
      lu = ju(37680),
      qu = ju(40399),
      fu = ju(40529),
      Cu = ju(40535),
      bu = ju(40373),
      cu = ju(40552),
      Nu = ju(40543),
      Ou = ju(40604),
      Yu = ju(40598),
      hu = ju(40610),
      Du = ju(40614),
      gu = ju(40596),
      Mu = ju(40624),
      eu = ju(40592),
      Gu = ju(40272),
      pu = ju(40628),
      wu = ju(40634),
      Ju = ju(40640),
      du = ju(40648),
      au = ju(40650),
      Pu = ju(37532),
      ou = ju(40153);
    const ku = {
      effect: null,
      subMesh: null
    };
    class mu extends((0, du.b)((0, Ju.c)(Nu.c))) {}
    class vu extends((0, Cu.f)(mu)) {
      constructor(uu) {
        super(uu), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class Ku extends((0, au.e)(Ou.c)) {}
    let Vu = (() => {
        var uu, Eu, Cu, Nu, Ju, du, au, Pu, ou, mu, Vu, ru, Qu, iu, Wu, Su, Iu, Fu, Bu, Lu, tu, xu, Tu, Hu, Au, nu, yu, zu, Ru, uE, EE, jE, sE;
        let UE, ZE, XE, lE, qE, fE, CE, bE, cE, NE, OE, YE, hE, DE, gE, ME, eE, GE, pE, wE, JE, dE, aE, PE, oE, kE, mE, vE, KE, VE, rE, QE, iE, WE, SE, IE, FE, BE, LE, tE, xE, TE, HE, AE, nE, yE, zE, RE, uj, Ej, jj, sj, Uj, Zj, Xj, lj, qj, fj, Cj, bj, cj, Nj, Oj, Yj, hj, Dj, gj, Mj, ej, Gj, pj, wj, Jj, dj = Ku,
          aj = [],
          Pj = [],
          oj = [],
          kj = [],
          mj = [],
          vj = [],
          Kj = [],
          Vj = [],
          rj = [],
          Qj = [],
          ij = [],
          Wj = [],
          Sj = [],
          Ij = [],
          Fj = [],
          Bj = [],
          Lj = [],
          tj = [],
          xj = [],
          Tj = [],
          Hj = [],
          Aj = [],
          nj = [],
          yj = [],
          zj = [],
          Rj = [],
          us = [],
          Es = [],
          ss = [],
          Us = [],
          Zs = [],
          Xs = [],
          ls = [],
          qs = [],
          fs = [],
          Cs = [],
          bs = [],
          cs = [],
          Ns = [],
          Os = [],
          Ys = [],
          hs = [],
          Ds = [],
          gs = [],
          Ms = [],
          es = [],
          Gs = [],
          ps = [],
          ws = [],
          ds = [],
          as = [],
          Ps = [],
          os = [],
          ks = [],
          ms = [],
          vs = [],
          Ks = [],
          Vs = [],
          rs = [],
          Qs = [],
          is = [],
          Ws = [],
          Ss = [],
          Is = [],
          Fs = [],
          Bs = [],
          Ls = [],
          ts = [],
          xs = [],
          Ts = [],
          Hs = [],
          As = [],
          ns = [],
          ys = [],
          zs = [],
          Rs = [],
          uU = [],
          EU = [],
          jU = [],
          sU = [],
          UU = [],
          ZU = [],
          XU = [],
          lU = [],
          qU = [],
          fU = [],
          CU = [],
          bU = [],
          cU = [],
          NU = [],
          OU = [],
          YU = [],
          hU = [],
          DU = [],
          gU = [],
          MU = [],
          eU = [],
          GU = [],
          pU = [],
          wU = [],
          JU = [],
          dU = [],
          aU = [],
          PU = [],
          oU = [],
          kU = [],
          mU = [],
          vU = [],
          KU = [],
          VU = [],
          rU = [],
          QU = [],
          iU = [],
          WU = [],
          SU = [],
          IU = [],
          FU = [],
          BU = [],
          LU = [],
          tU = [],
          xU = [],
          TU = [],
          HU = [],
          AU = [],
          nU = [],
          yU = [],
          zU = [],
          RU = [],
          uZ = [],
          EZ = [],
          jZ = [],
          sZ = [],
          UZ = [],
          ZZ = [],
          XZ = [],
          lZ = [],
          qZ = [],
          fZ = [],
          CZ = [],
          bZ = [],
          cZ = [],
          NZ = [],
          OZ = [],
          YZ = [],
          hZ = [],
          DZ = [];
        return uu = class extends dj {
          get diffuseTexture() {
            return (0, su.b)(this, Eu, "f")
          }
          set diffuseTexture(uu) {
            (0, su.d)(this, Eu, uu, "f")
          }
          get ambientTexture() {
            return (0, su.b)(this, Cu, "f")
          }
          set ambientTexture(uu) {
            (0, su.d)(this, Cu, uu, "f")
          }
          get opacityTexture() {
            return (0, su.b)(this, Nu, "f")
          }
          set opacityTexture(uu) {
            (0, su.d)(this, Nu, uu, "f")
          }
          get reflectionTexture() {
            return (0, su.b)(this, Ju, "f")
          }
          set reflectionTexture(uu) {
            (0, su.d)(this, Ju, uu, "f")
          }
          get emissiveTexture() {
            return (0, su.b)(this, du, "f")
          }
          set emissiveTexture(uu) {
            (0, su.d)(this, du, uu, "f")
          }
          get specularTexture() {
            return (0, su.b)(this, au, "f")
          }
          set specularTexture(uu) {
            (0, su.d)(this, au, uu, "f")
          }
          get bumpTexture() {
            return (0, su.b)(this, Pu, "f")
          }
          set bumpTexture(uu) {
            (0, su.d)(this, Pu, uu, "f")
          }
          get lightmapTexture() {
            return (0, su.b)(this, ou, "f")
          }
          set lightmapTexture(uu) {
            (0, su.d)(this, ou, uu, "f")
          }
          get refractionTexture() {
            return (0, su.b)(this, mu, "f")
          }
          set refractionTexture(uu) {
            (0, su.d)(this, mu, uu, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, su.b)(this, Vu, "f")
          }
          set useAlphaFromDiffuseTexture(uu) {
            (0, su.d)(this, Vu, uu, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, su.b)(this, ru, "f")
          }
          set useEmissiveAsIllumination(uu) {
            (0, su.d)(this, ru, uu, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, su.b)(this, Qu, "f")
          }
          set linkEmissiveWithDiffuse(uu) {
            (0, su.d)(this, Qu, uu, "f")
          }
          get useSpecularOverAlpha() {
            return (0, su.b)(this, iu, "f")
          }
          set useSpecularOverAlpha(uu) {
            (0, su.d)(this, iu, uu, "f")
          }
          get useReflectionOverAlpha() {
            return (0, su.b)(this, Wu, "f")
          }
          set useReflectionOverAlpha(uu) {
            (0, su.d)(this, Wu, uu, "f")
          }
          get disableLighting() {
            return (0, su.b)(this, Su, "f")
          }
          set disableLighting(uu) {
            (0, su.d)(this, Su, uu, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, su.b)(this, Iu, "f")
          }
          set useObjectSpaceNormalMap(uu) {
            (0, su.d)(this, Iu, uu, "f")
          }
          get useParallax() {
            return (0, su.b)(this, Fu, "f")
          }
          set useParallax(uu) {
            (0, su.d)(this, Fu, uu, "f")
          }
          get useParallaxOcclusion() {
            return (0, su.b)(this, Bu, "f")
          }
          set useParallaxOcclusion(uu) {
            (0, su.d)(this, Bu, uu, "f")
          }
          get roughness() {
            return (0, su.b)(this, Lu, "f")
          }
          set roughness(uu) {
            (0, su.d)(this, Lu, uu, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, su.b)(this, tu, "f")
          }
          set useLightmapAsShadowmap(uu) {
            (0, su.d)(this, tu, uu, "f")
          }
          get diffuseFresnelParameters() {
            return (0, su.b)(this, xu, "f")
          }
          set diffuseFresnelParameters(uu) {
            (0, su.d)(this, xu, uu, "f")
          }
          get opacityFresnelParameters() {
            return (0, su.b)(this, Tu, "f")
          }
          set opacityFresnelParameters(uu) {
            (0, su.d)(this, Tu, uu, "f")
          }
          get reflectionFresnelParameters() {
            return (0, su.b)(this, Hu, "f")
          }
          set reflectionFresnelParameters(uu) {
            (0, su.d)(this, Hu, uu, "f")
          }
          get refractionFresnelParameters() {
            return (0, su.b)(this, Au, "f")
          }
          set refractionFresnelParameters(uu) {
            (0, su.d)(this, Au, uu, "f")
          }
          get emissiveFresnelParameters() {
            return (0, su.b)(this, nu, "f")
          }
          set emissiveFresnelParameters(uu) {
            (0, su.d)(this, nu, uu, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, su.b)(this, yu, "f")
          }
          set useReflectionFresnelFromSpecular(uu) {
            (0, su.d)(this, yu, uu, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, su.b)(this, zu, "f")
          }
          set useGlossinessFromSpecularMapAlpha(uu) {
            (0, su.d)(this, zu, uu, "f")
          }
          get maxSimultaneousLights() {
            return (0, su.b)(this, Ru, "f")
          }
          set maxSimultaneousLights(uu) {
            (0, su.d)(this, Ru, uu, "f")
          }
          get invertNormalMapX() {
            return (0, su.b)(this, uE, "f")
          }
          set invertNormalMapX(uu) {
            (0, su.d)(this, uE, uu, "f")
          }
          get invertNormalMapY() {
            return (0, su.b)(this, EE, "f")
          }
          set invertNormalMapY(uu) {
            (0, su.d)(this, EE, uu, "f")
          }
          get twoSidedLighting() {
            return (0, su.b)(this, jE, "f")
          }
          set twoSidedLighting(uu) {
            (0, su.d)(this, jE, uu, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, su.b)(this, sE, "f")
          }
          set applyDecalMapAfterDetailMap(uu) {
            (0, su.d)(this, sE, uu, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(ju, Uu) {
            super(ju, Uu, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || uu.ForceGLSL), this._diffuseTexture = (0, su.g)(this, aj, null), Eu.set(this, ((0, su.g)(this, Pj), (0, su.g)(this, oj, void 0))), this._ambientTexture = ((0, su.g)(this, kj), (0, su.g)(this, mj, null)), Cu.set(this, ((0, su.g)(this, vj), (0, su.g)(this, Kj, void 0))), this._opacityTexture = ((0, su.g)(this, Vj), (0, su.g)(this, rj, null)), Nu.set(this, ((0, su.g)(this, Qj), (0, su.g)(this, ij, void 0))), this._reflectionTexture = ((0, su.g)(this, Wj), (0, su.g)(this, Sj, null)), Ju.set(this, ((0, su.g)(this, Ij), (0, su.g)(this, Fj, void 0))), this._emissiveTexture = ((0, su.g)(this, Bj), (0, su.g)(this, Lj, null)), du.set(this, ((0, su.g)(this, tj), (0, su.g)(this, xj, void 0))), this._specularTexture = ((0, su.g)(this, Tj), (0, su.g)(this, Hj, null)), au.set(this, ((0, su.g)(this, Aj), (0, su.g)(this, nj, void 0))), this._bumpTexture = ((0, su.g)(this, yj), (0, su.g)(this, zj, null)), Pu.set(this, ((0, su.g)(this, Rj), (0, su.g)(this, us, void 0))), this._lightmapTexture = ((0, su.g)(this, Es), (0, su.g)(this, ss, null)), ou.set(this, ((0, su.g)(this, Us), (0, su.g)(this, Zs, void 0))), this._refractionTexture = ((0, su.g)(this, Xs), (0, su.g)(this, ls, null)), mu.set(this, ((0, su.g)(this, qs), (0, su.g)(this, fs, void 0))), this.ambientColor = ((0, su.g)(this, Cs), (0, su.g)(this, bs, new lu.c(0, 0, 0))), this.diffuseColor = ((0, su.g)(this, cs), (0, su.g)(this, Ns, new lu.c(1, 1, 1))), this.specularColor = ((0, su.g)(this, Os), (0, su.g)(this, Ys, new lu.c(1, 1, 1))), this.emissiveColor = ((0, su.g)(this, hs), (0, su.g)(this, Ds, new lu.c(0, 0, 0))), this.specularPower = ((0, su.g)(this, gs), (0, su.g)(this, Ms, 64)), this._useAlphaFromDiffuseTexture = ((0, su.g)(this, es), (0, su.g)(this, Gs, !1)), Vu.set(this, ((0, su.g)(this, ps), (0, su.g)(this, ws, void 0))), this._useEmissiveAsIllumination = ((0, su.g)(this, ds), (0, su.g)(this, as, !1)), ru.set(this, ((0, su.g)(this, Ps), (0, su.g)(this, os, void 0))), this._linkEmissiveWithDiffuse = ((0, su.g)(this, ks), (0, su.g)(this, ms, !1)), Qu.set(this, ((0, su.g)(this, vs), (0, su.g)(this, Ks, void 0))), this._useSpecularOverAlpha = ((0, su.g)(this, Vs), (0, su.g)(this, rs, !1)), iu.set(this, ((0, su.g)(this, Qs), (0, su.g)(this, is, void 0))), this._useReflectionOverAlpha = ((0, su.g)(this, Ws), (0, su.g)(this, Ss, !1)), Wu.set(this, ((0, su.g)(this, Is), (0, su.g)(this, Fs, void 0))), this._disableLighting = ((0, su.g)(this, Bs), (0, su.g)(this, Ls, !1)), Su.set(this, ((0, su.g)(this, ts), (0, su.g)(this, xs, void 0))), this._useObjectSpaceNormalMap = ((0, su.g)(this, Ts), (0, su.g)(this, Hs, !1)), Iu.set(this, ((0, su.g)(this, As), (0, su.g)(this, ns, void 0))), this._useParallax = ((0, su.g)(this, ys), (0, su.g)(this, zs, !1)), Fu.set(this, ((0, su.g)(this, Rs), (0, su.g)(this, uU, void 0))), this._useParallaxOcclusion = ((0, su.g)(this, EU), (0, su.g)(this, jU, !1)), Bu.set(this, ((0, su.g)(this, sU), (0, su.g)(this, UU, void 0))), this.parallaxScaleBias = ((0, su.g)(this, ZU), (0, su.g)(this, XU, .05)), this._roughness = ((0, su.g)(this, lU), (0, su.g)(this, qU, 0)), Lu.set(this, ((0, su.g)(this, fU), (0, su.g)(this, CU, void 0))), this.indexOfRefraction = ((0, su.g)(this, bU), (0, su.g)(this, cU, .98)), this.invertRefractionY = ((0, su.g)(this, NU), (0, su.g)(this, OU, !0)), this.alphaCutOff = ((0, su.g)(this, YU), (0, su.g)(this, hU, .4)), this._useLightmapAsShadowmap = ((0, su.g)(this, DU), (0, su.g)(this, gU, !1)), tu.set(this, ((0, su.g)(this, MU), (0, su.g)(this, eU, void 0))), this._diffuseFresnelParameters = ((0, su.g)(this, GU), (0, su.g)(this, pU, void 0)), xu.set(this, ((0, su.g)(this, wU), (0, su.g)(this, JU, void 0))), this._opacityFresnelParameters = ((0, su.g)(this, dU), (0, su.g)(this, aU, void 0)), Tu.set(this, ((0, su.g)(this, PU), (0, su.g)(this, oU, void 0))), this._reflectionFresnelParameters = ((0, su.g)(this, kU), (0, su.g)(this, mU, void 0)), Hu.set(this, ((0, su.g)(this, vU), (0, su.g)(this, KU, void 0))), this._refractionFresnelParameters = ((0, su.g)(this, VU), (0, su.g)(this, rU, void 0)), Au.set(this, ((0, su.g)(this, QU), (0, su.g)(this, iU, void 0))), this._emissiveFresnelParameters = ((0, su.g)(this, WU), (0, su.g)(this, SU, void 0)), nu.set(this, ((0, su.g)(this, IU), (0, su.g)(this, FU, void 0))), this._useReflectionFresnelFromSpecular = ((0, su.g)(this, BU), (0, su.g)(this, LU, !1)), yu.set(this, ((0, su.g)(this, tU), (0, su.g)(this, xU, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, su.g)(this, TU), (0, su.g)(this, HU, !1)), zu.set(this, ((0, su.g)(this, AU), (0, su.g)(this, nU, void 0))), this._maxSimultaneousLights = ((0, su.g)(this, yU), (0, su.g)(this, zU, 4)), Ru.set(this, ((0, su.g)(this, RU), (0, su.g)(this, uZ, void 0))), this._invertNormalMapX = ((0, su.g)(this, EZ), (0, su.g)(this, jZ, !1)), uE.set(this, ((0, su.g)(this, sZ), (0, su.g)(this, UZ, void 0))), this._invertNormalMapY = ((0, su.g)(this, ZZ), (0, su.g)(this, XZ, !1)), EE.set(this, ((0, su.g)(this, lZ), (0, su.g)(this, qZ, void 0))), this._twoSidedLighting = ((0, su.g)(this, fZ), (0, su.g)(this, CZ, !1)), jE.set(this, ((0, su.g)(this, bZ), (0, su.g)(this, cZ, void 0))), this._applyDecalMapAfterDetailMap = ((0, su.g)(this, NZ), (0, su.g)(this, OZ, !1)), sE.set(this, ((0, su.g)(this, YZ), (0, su.g)(this, hZ, void 0))), this._vertexPullingMetadata = ((0, su.g)(this, DZ), null), this._renderTargets = new Zu.f(16), this._globalAmbientColor = new lu.c(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new Du.b(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new fu.e, this.getRenderTargetTextures = () => (this._renderTargets.reset(), uu.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), uu.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
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
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === cu.b.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== cu.b.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(Eu, ju) {
            let su = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Uu = ju._drawWrapper;
            if (Uu.effect && this.isFrozen && Uu._wasPreviouslyReady && Uu._wasPreviouslyUsingInstances === su) return !0;
            ju.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), ju.materialDefines = new vu(this._eventInfo.defineNames));
            const Zu = this.hV(),
              Xu = ju.materialDefines;
            if (this._isReadyForSubMesh(ju)) return !0;
            const lu = Zu.wO();
            if (Xu._needNormals = (0, eu.fb)(Zu, Eu, Xu, !0, this._maxSimultaneousLights, this._disableLighting), !(0, eu.d)(Zu, Eu, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, eu.lb)(Zu, Xu);
            const Cu = this.needAlphaBlendingForMesh(Eu) && this.hV().useOrderIndependentTransparency;
            if ((0, eu.qb)(Zu, Xu, this.canRenderToMRT && !Cu), (0, eu.mb)(Zu, Xu, Cu), wu.c.PrepareDefines(lu.currentRenderPassId, Eu, Xu), Xu._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Xu._needUVs = !1;
              for (let uu = 1; uu <= 6; ++uu) Xu["MAINUV" + uu] = !1;
              if (Zu.texturesEnabled) {
                if (Xu.DIFFUSEDIRECTUV = 0, Xu.BUMPDIRECTUV = 0, Xu.AMBIENTDIRECTUV = 0, Xu.OPACITYDIRECTUV = 0, Xu.EMISSIVEDIRECTUV = 0, Xu.SPECULARDIRECTUV = 0, Xu.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && uu.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, eu.jb)(this._diffuseTexture, Xu, "DIFFUSE")
                } else Xu.DIFFUSE = !1;
                if (this._ambientTexture && uu.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, eu.jb)(this._ambientTexture, Xu, "AMBIENT")
                } else Xu.AMBIENT = !1;
                if (this._opacityTexture && uu.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, eu.jb)(this._opacityTexture, Xu, "OPACITY"), Xu.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else Xu.OPACITY = !1;
                if (this._reflectionTexture && uu.ReflectionTextureEnabled ? (Xu.ROUGHNESS = this._roughness > 0, Xu.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (Xu.ROUGHNESS = !1, Xu.REFLECTIONOVERALPHA = !1), !(0, eu.eb)(Zu, this._reflectionTexture, Xu)) return !1;
                if (this._emissiveTexture && uu.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, eu.jb)(this._emissiveTexture, Xu, "EMISSIVE")
                } else Xu.EMISSIVE = !1;
                if (this._lightmapTexture && uu.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, eu.jb)(this._lightmapTexture, Xu, "LIGHTMAP"), Xu.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Xu.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else Xu.LIGHTMAP = !1;
                if (this._specularTexture && uu.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, eu.jb)(this._specularTexture, Xu, "SPECULAR"), Xu.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else Xu.SPECULAR = !1;
                if (Zu.wO().getCaps().standardDerivatives && this._bumpTexture && uu.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, eu.jb)(this._bumpTexture, Xu, "BUMP"), Xu.PARALLAX = this._useParallax, Xu.PARALLAX_RHS = Zu.useRightHandedSystem, Xu.PARALLAXOCCLUSION = this._useParallaxOcclusion, Xu.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else Xu.BUMP = !1, Xu.PARALLAX = !1, Xu.PARALLAX_RHS = !1, Xu.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && uu.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  Xu._needUVs = !0, Xu.REFRACTION = !0, Xu.REFRACTIONMAP_3D = this._refractionTexture.isCube, Xu.RGBDREFRACTION = this._refractionTexture.isRGBD, Xu.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else Xu.REFRACTION = !1;
                Xu.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else Xu.DIFFUSE = !1, Xu.AMBIENT = !1, Xu.OPACITY = !1, Xu.REFLECTION = !1, Xu.EMISSIVE = !1, Xu.LIGHTMAP = !1, Xu.BUMP = !1, Xu.REFRACTION = !1;
              Xu.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), Xu.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, Xu.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, Xu.SPECULAROVERALPHA = this._useSpecularOverAlpha, Xu.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Xu.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, Xu.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(Eu), Xu.TEXTURE_REPETITION_MODE = lu.version > 1 || lu.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Xu, this._eventInfo.subMesh = ju, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Xu._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(Xu), Xu.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, Xu.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (Xu._areFresnelDirty && (uu.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (Xu.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, Xu.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, Xu.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, Xu.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, Xu.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, Xu.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, Xu._needNormals = !0, Xu.FRESNEL = !0) : Xu.FRESNEL = !1), Xu.AREALIGHTUSED || Xu.CLUSTLIGHT_BATCH)
              for (let uu = 0; uu < Eu.lightSources.length; uu++)
                if (!Eu.lightSources[uu]._isReady()) return !1;
            (0, eu.kb)(Eu, Zu, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Eu), Xu, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ju.getRenderingMesh(), this._isVertexOutputInvariant), (0, eu.ab)(Zu, lu, this, Xu, su, null, ju.getRenderingMesh().hasThinInstances), this._eventInfo.defines = Xu, this._eventInfo.mesh = Eu, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, eu.Z)(Eu, Xu, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let cu = !1;
            if (Xu.isDirty) {
              const su = Xu._areLightsDisposed;
              Xu.markAsProcessed();
              const Uu = new hu.e;
              Xu.REFLECTION && Uu.addFallback(0, "REFLECTION"), Xu.SPECULAR && Uu.addFallback(0, "SPECULAR"), Xu.BUMP && Uu.addFallback(0, "BUMP"), Xu.PARALLAX && Uu.addFallback(1, "PARALLAX"), Xu.PARALLAX_RHS && Uu.addFallback(1, "PARALLAX_RHS"), Xu.PARALLAXOCCLUSION && Uu.addFallback(0, "PARALLAXOCCLUSION"), Xu.SPECULAROVERALPHA && Uu.addFallback(0, "SPECULAROVERALPHA"), Xu.FOG && Uu.addFallback(1, "FOG"), Xu.POINTSIZE && Uu.addFallback(0, "POINTSIZE"), Xu.LOGARITHMICDEPTH && Uu.addFallback(0, "LOGARITHMICDEPTH"), (0, eu.I)(Xu, Uu, this._maxSimultaneousLights), Xu.SPECULARTERM && Uu.addFallback(0, "SPECULARTERM"), Xu.DIFFUSEFRESNEL && Uu.addFallback(1, "DIFFUSEFRESNEL"), Xu.OPACITYFRESNEL && Uu.addFallback(2, "OPACITYFRESNEL"), Xu.REFLECTIONFRESNEL && Uu.addFallback(3, "REFLECTIONFRESNEL"), Xu.EMISSIVEFRESNEL && Uu.addFallback(4, "EMISSIVEFRESNEL"), Xu.FRESNEL && Uu.addFallback(4, "FRESNEL"), Xu.MULTIVIEW && Uu.addFallback(0, "MULTIVIEW");
              const Cu = [qu.j.PositionKind];
              Xu.NORMAL && Cu.push(qu.j.NormalKind), Xu.TANGENT && Cu.push(qu.j.TangentKind);
              for (let uu = 1; uu <= 6; ++uu) Xu["UV" + uu] && Cu.push(`uv${1===uu?"":uu}`);
              Xu.VERTEXCOLOR && Cu.push(qu.j.ColorKind), (0, eu.P)(Cu, Eu, Xu, Uu), (0, eu.S)(Cu, Xu), (0, eu.U)(Cu, Eu, Xu), (0, eu.L)(Cu, Eu, Xu);
              let Nu = "default";
              const Ou = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                Yu = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, eu.ub)(Ou, Yu, !1);
              const Du = ["Material", "Scene", "Mesh"],
                Gu = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: Xu.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = Uu, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = Xu, this._eventInfo.uniforms = Ou, this._eventInfo.attributes = Cu, this._eventInfo.samplers = Yu, this._eventInfo.uniformBuffersNames = Du, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Eu, this._eventInfo.indexParameters = Gu, this._callbackPluginEventGeneric(128, this._eventInfo), wu.c.AddUniformsAndSamplers(Ou, Yu), fu.e.AddUniforms(Ou), fu.e.AddSamplers(Yu), bu.d && (bu.d.PrepareUniforms(Ou, Xu), bu.d.PrepareSamplers(Yu, Xu)), (0, eu.vb)({
                  uniformsNames: Ou,
                  uniformBuffersNames: Du,
                  samplers: Yu,
                  defines: Xu,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, gu.e)(Ou), this._useVertexPulling) {
                const uu = ju.getRenderingMesh(),
                  Eu = uu?.geometry;
                Eu && (this._vertexPullingMetadata = (0, Mu.f)(Eu), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((uu, Eu) => {
                  Ou.push(`vp_${Eu}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const pu = {};
              this.customShaderNameResolve && (Nu = this.customShaderNameResolve(Nu, Ou, Du, Yu, Xu, Cu, pu));
              const Ju = Xu.toString(),
                du = ju.effect,
                au = Zu.wO().createEffect(Nu, {
                  attributes: Cu,
                  uniformsNames: Ou,
                  uniformBuffersNames: Du,
                  samplers: Yu,
                  defines: Ju,
                  fallbacks: Uu,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: Gu,
                  processFinalCode: pu.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: Xu.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: uu._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, lu);
              if (this._eventInfo.customCode = void 0, au)
                if (this._onEffectCreatedObservable && (ku.effect = au, ku.subMesh = ju, this._onEffectCreatedObservable.notifyObservers(ku)), this.allowShaderHotSwapping && du && !au.isReady()) {
                  if (Xu.markAsUnprocessed(), cu = this.isFrozen, su) return Xu._areLightsDisposed = !0, !1
                } else Zu.resetCachedMaterial(), ju.setEffect(au, Xu, this._materialContext)
            }
            return !(!ju.effect || !ju.effect.isReady()) && (Xu._renderId = Zu.getRenderId(), Uu._wasPreviouslyReady = !cu, Uu._wasPreviouslyUsingInstances = su, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const uu = this._uniformBuffer;
            uu.addUniform("diffuseLeftColor", 4), uu.addUniform("diffuseRightColor", 4), uu.addUniform("opacityParts", 4), uu.addUniform("reflectionLeftColor", 4), uu.addUniform("reflectionRightColor", 4), uu.addUniform("refractionLeftColor", 4), uu.addUniform("refractionRightColor", 4), uu.addUniform("emissiveLeftColor", 4), uu.addUniform("emissiveRightColor", 4), uu.addUniform("vDiffuseInfos", 2), uu.addUniform("vAmbientInfos", 2), uu.addUniform("vOpacityInfos", 2), uu.addUniform("vEmissiveInfos", 2), uu.addUniform("vLightmapInfos", 2), uu.addUniform("vSpecularInfos", 2), uu.addUniform("vBumpInfos", 3), uu.addUniform("diffuseMatrix", 16), uu.addUniform("ambientMatrix", 16), uu.addUniform("opacityMatrix", 16), uu.addUniform("emissiveMatrix", 16), uu.addUniform("lightmapMatrix", 16), uu.addUniform("specularMatrix", 16), uu.addUniform("bumpMatrix", 16), uu.addUniform("vTangentSpaceParams", 2), uu.addUniform("pointSize", 1), uu.addUniform("alphaCutOff", 1), uu.addUniform("refractionMatrix", 16), uu.addUniform("vRefractionInfos", 4), uu.addUniform("vRefractionPosition", 3), uu.addUniform("vRefractionSize", 3), uu.addUniform("vSpecularColor", 4), uu.addUniform("vEmissiveColor", 3), uu.addUniform("vDiffuseColor", 4), uu.addUniform("vAmbientColor", 3), uu.addUniform("cameraInfo", 4), uu.addUniform("vTextureRepetitionHexTilingParams", 4), (0, eu.rb)(uu, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(Eu, ju, su) {
            const Uu = this.hV(),
              Zu = su.materialDefines;
            if (!Zu) return;
            const qu = su.effect;
            if (!qu) return;
            this._activeEffect = qu, ju.getMeshUniformBuffer().bindToEffect(qu, "Mesh"), ju.transferToEffect(Eu), this._uniformBuffer.bindToEffect(qu, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Uu, ju, Eu, this.isFrozen), wu.c.Bind(Uu.wO().currentRenderPassId, this._activeEffect, ju, Eu, this);
            const fu = Uu.activeCamera;
            fu ? this._uniformBuffer.updateFloat4("cameraInfo", fu.minZ, fu.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Cu = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Cu[0], Cu[1], Cu[2], Cu[3]), this._eventInfo.subMesh = su, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Zu.OBJECTSPACE_NORMALMAP && (Eu.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const bu = this._mustRebind(Uu, qu, su, ju.visibility),
              cu = Uu.wO()._features.needToAlwaysBindUniformBuffers;
            (0, eu.h)(ju, qu), this._vertexPullingMetadata && (0, Mu.e)(qu, this._vertexPullingMetadata);
            const Nu = this._uniformBuffer;
            if (bu) {
              if (this.bindViewProjection(qu), !Nu.useUbo || !this.isFrozen || !Nu.isSync || su._drawWrapper._forceRebindOnNextCall) {
                if (uu.FresnelEnabled && Zu.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (Nu.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), Nu.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const uu = lu.m.Color3[0];
                    uu.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), Nu.updateColor4("opacityParts", uu, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (Nu.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), Nu.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (Nu.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), Nu.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (Nu.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), Nu.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (Zu.ALPHATEST && Nu.updateFloat("alphaCutOff", this.alphaCutOff), Uu.texturesEnabled && (this._diffuseTexture && uu.DiffuseTextureEnabled && (Nu.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, eu.E)(this._diffuseTexture, Nu, "diffuse")), this._ambientTexture && uu.AmbientTextureEnabled && (Nu.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, eu.E)(this._ambientTexture, Nu, "ambient")), this._opacityTexture && uu.OpacityTextureEnabled && (Nu.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, eu.E)(this._opacityTexture, Nu, "opacity")), (0, eu.m)(Uu, Zu, Nu, lu.c.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && uu.ReflectionTextureEnabled || Nu.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && uu.EmissiveTextureEnabled && (Nu.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, eu.E)(this._emissiveTexture, Nu, "emissive")), this._lightmapTexture && uu.LightmapTextureEnabled && (Nu.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, eu.E)(this._lightmapTexture, Nu, "lightmap")), this._specularTexture && uu.SpecularTextureEnabled && (Nu.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, eu.E)(this._specularTexture, Nu, "specular")), this._bumpTexture && Uu.wO().getCaps().standardDerivatives && uu.BumpTextureEnabled && (Nu.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, eu.E)(this._bumpTexture, Nu, "bump"), Uu._mirroredCameraPosition ? Nu.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Nu.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && uu.RefractionTextureEnabled)) {
                  let uu = 1;
                  if (this._refractionTexture.isCube || (Nu.y_("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (uu = this._refractionTexture.depth)), Nu.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, uu, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const uu = this._refractionTexture;
                    Nu.updateVector3("vRefractionPosition", uu.boundingBoxPosition), Nu.updateVector3("vRefractionSize", uu.boundingBoxSize)
                  }
                }
                this.pointsCloud && Nu.updateFloat("pointSize", this.pointSize), Nu.updateColor4("vSpecularColor", this.specularColor, this.specularPower), Nu.updateColor3("vEmissiveColor", uu.EmissiveTextureEnabled ? this.emissiveColor : lu.c.BlackReadOnly), Nu.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), Uu.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), Nu.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              Uu.texturesEnabled && (this._diffuseTexture && uu.DiffuseTextureEnabled && qu.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && uu.AmbientTextureEnabled && qu.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && uu.OpacityTextureEnabled && qu.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && uu.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? qu.setTexture("reflectionCubeSampler", this._reflectionTexture) : qu.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && uu.EmissiveTextureEnabled && qu.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && uu.LightmapTextureEnabled && qu.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && uu.SpecularTextureEnabled && qu.setTexture("specularSampler", this._specularTexture), this._bumpTexture && Uu.wO().getCaps().standardDerivatives && uu.BumpTextureEnabled && qu.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && uu.RefractionTextureEnabled && (this._refractionTexture.isCube ? qu.setTexture("refractionCubeSampler", this._refractionTexture) : qu.setTexture("refraction2DSampler", this._refractionTexture))), this.hV().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(ju) && this.hV().depthPeelingRenderer.bind(qu), this._eventInfo.subMesh = su, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, gu.f)(qu, this, Uu), this.bindEyePosition(qu)
            } else cu && (this._needToBindSceneUbo = !0);
            !bu && this.isFrozen && !cu || !Uu.lightsEnabled || this._disableLighting || (0, eu.r)(Uu, ju, qu, Zu, this._maxSimultaneousLights), !bu && this.isFrozen || ((Uu.fogEnabled && ju.applyFog && Uu.fogMode !== Xu.f.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || ju.receiveShadows || Zu.PREPASS || Zu.CLUSTLIGHT_BATCH) && this.bindView(qu), (0, eu.j)(Uu, ju, qu), Zu.NUM_MORPH_INFLUENCERS && (0, eu.x)(ju, qu), Zu.BAKED_VERTEX_ANIMATION_TEXTURE && ju.bakedVertexAnimationManager?.bind(qu, Zu.INSTANCES), this.useLogarithmicDepth && (0, eu.u)(Zu, qu, Uu), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(ju, this._activeEffect, su), Nu.update()
          }
          _canBindRunFollower(Eu, ju, su, Uu, Zu) {
            const Xu = Eu.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === uu.prototype.isReadyForSubMesh && this.bindForSubMesh === uu.prototype.bindForSubMesh && this._mustRebind === Ou.c.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !ju._features.needToAlwaysBindUniformBuffers && !(Xu && Xu.enabled && Xu.currentRTisSceneRT) && !wu.c._Configurations[ju.currentRenderPassId] && !Uu.materialDefines?.OBJECTSPACE_NORMALMAP && !su.skeleton && !Zu._bonesComputationForcedToCPU
          }
          _bindRunFollower(uu, Eu, ju, su) {
            this._activeEffect = su, Eu.getMeshUniformBuffer().bindToEffect(su, "Mesh"), Eu.transferToEffect(uu);
            const Uu = this._uniformBuffer;
            Uu.bindToEffect(su, "Material");
            const Zu = this._scene.activeCamera;
            Zu ? Uu.updateFloat4("cameraInfo", Zu.minZ, Zu.maxZ, 0, 0) : Uu.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Xu = this.textureRepetitionHexTilingParams;
            Uu.updateFloat4("vTextureRepetitionHexTilingParams", Xu[0], Xu[1], Xu[2], Xu[3]), this._afterBind(Eu, su, ju), Uu.update()
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
          dispose(uu, Eu) {
            Eu && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(uu, Eu)
          }
          clone(Eu) {
            let ju = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Uu = Gu.e.Clone((() => new uu(Eu, this.hV())), this, {
              cloneTexturesOnlyOnce: ju
            });
            return Uu.name = Eu, Uu.id = Eu, this.stencil.copyTo(Uu.stencil), this._clonePlugins(Uu, su), Uu
          }
          static Parse(Eu, ju, su) {
            const Uu = Gu.e.Parse((() => new uu(Eu.name, ju)), Eu, ju, su);
            return Eu.stencil && Uu.stencil.parse(Eu.stencil, ju, su), cu.b._ParsePlugins(Eu, Uu, ju, su), Uu
          }
          static get DiffuseTextureEnabled() {
            return Yu.d.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(uu) {
            Yu.d.DiffuseTextureEnabled = uu
          }
          static get DetailTextureEnabled() {
            return Yu.d.DetailTextureEnabled
          }
          static set DetailTextureEnabled(uu) {
            Yu.d.DetailTextureEnabled = uu
          }
          static get AmbientTextureEnabled() {
            return Yu.d.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(uu) {
            Yu.d.AmbientTextureEnabled = uu
          }
          static get OpacityTextureEnabled() {
            return Yu.d.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(uu) {
            Yu.d.OpacityTextureEnabled = uu
          }
          static get ReflectionTextureEnabled() {
            return Yu.d.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(uu) {
            Yu.d.ReflectionTextureEnabled = uu
          }
          static get EmissiveTextureEnabled() {
            return Yu.d.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(uu) {
            Yu.d.EmissiveTextureEnabled = uu
          }
          static get SpecularTextureEnabled() {
            return Yu.d.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(uu) {
            Yu.d.SpecularTextureEnabled = uu
          }
          static get BumpTextureEnabled() {
            return Yu.d.BumpTextureEnabled
          }
          static set BumpTextureEnabled(uu) {
            Yu.d.BumpTextureEnabled = uu
          }
          static get LightmapTextureEnabled() {
            return Yu.d.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(uu) {
            Yu.d.LightmapTextureEnabled = uu
          }
          static get RefractionTextureEnabled() {
            return Yu.d.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(uu) {
            Yu.d.RefractionTextureEnabled = uu
          }
          static get ColorGradingTextureEnabled() {
            return Yu.d.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(uu) {
            Yu.d.ColorGradingTextureEnabled = uu
          }
          static get FresnelEnabled() {
            return Yu.d.FresnelEnabled
          }
          static set FresnelEnabled(uu) {
            Yu.d.FresnelEnabled = uu
          }
        }, Eu = new WeakMap, Cu = new WeakMap, Nu = new WeakMap, Ju = new WeakMap, du = new WeakMap, au = new WeakMap, Pu = new WeakMap, ou = new WeakMap, mu = new WeakMap, Vu = new WeakMap, ru = new WeakMap, Qu = new WeakMap, iu = new WeakMap, Wu = new WeakMap, Su = new WeakMap, Iu = new WeakMap, Fu = new WeakMap, Bu = new WeakMap, Lu = new WeakMap, tu = new WeakMap, xu = new WeakMap, Tu = new WeakMap, Hu = new WeakMap, Au = new WeakMap, nu = new WeakMap, yu = new WeakMap, zu = new WeakMap, Ru = new WeakMap, uE = new WeakMap, EE = new WeakMap, jE = new WeakMap, sE = new WeakMap, (() => {
          const Eu = "function" === typeof Symbol && Symbol.metadata ? Object.create(dj[Symbol.metadata] ?? null) : void 0;
          UE = [(0, Uu.y)("diffuseTexture")], ZE = [(0, Uu.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], XE = [(0, Uu.y)("ambientTexture")], lE = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], qE = [(0, Uu.y)("opacityTexture")], fE = [(0, Uu.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], CE = [(0, Uu.y)("reflectionTexture")], bE = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], cE = [(0, Uu.y)("emissiveTexture")], NE = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], OE = [(0, Uu.y)("specularTexture")], YE = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], hE = [(0, Uu.y)("bumpTexture")], DE = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], gE = [(0, Uu.y)("lightmapTexture")], ME = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], eE = [(0, Uu.y)("refractionTexture")], GE = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], pE = [(0, Uu.j)("ambient")], wE = [(0, Uu.j)("diffuse")], JE = [(0, Uu.j)("specular")], dE = [(0, Uu.j)("emissive")], aE = [(0, Uu.E)()], PE = [(0, Uu.E)("useAlphaFromDiffuseTexture")], oE = [() => ({
            init(uu) {
              return void 0 === uu && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = uu), uu
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(uu) {
              this._useAlphaFromDiffuseTexture = uu
            }
          })], kE = [(0, Uu.E)("useEmissiveAsIllumination")], mE = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], vE = [(0, Uu.E)("linkEmissiveWithDiffuse")], KE = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], VE = [(0, Uu.E)("useSpecularOverAlpha")], rE = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], QE = [(0, Uu.E)("useReflectionOverAlpha")], iE = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], WE = [(0, Uu.E)("disableLighting")], SE = [(0, Uu.e)("_markAllSubMeshesAsLightsDirty")], IE = [(0, Uu.E)("useObjectSpaceNormalMap")], FE = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], BE = [(0, Uu.E)("useParallax")], LE = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], tE = [(0, Uu.E)("useParallaxOcclusion")], xE = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], TE = [(0, Uu.E)()], HE = [(0, Uu.E)("roughness")], AE = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], nE = [(0, Uu.E)()], yE = [(0, Uu.E)()], zE = [(0, Uu.E)()], RE = [(0, Uu.E)("useLightmapAsShadowmap")], uj = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], Ej = [(0, Uu.p)("diffuseFresnelParameters")], jj = [(0, Uu.e)("_markAllSubMeshesAsFresnelDirty")], sj = [(0, Uu.p)("opacityFresnelParameters")], Uj = [(0, Uu.e)("_markAllSubMeshesAsFresnelAndMiscDirty")], Zj = [(0, Uu.p)("reflectionFresnelParameters")], Xj = [(0, Uu.e)("_markAllSubMeshesAsFresnelDirty")], lj = [(0, Uu.p)("refractionFresnelParameters")], qj = [(0, Uu.e)("_markAllSubMeshesAsFresnelDirty")], fj = [(0, Uu.p)("emissiveFresnelParameters")], Cj = [(0, Uu.e)("_markAllSubMeshesAsFresnelDirty")], bj = [(0, Uu.E)("useReflectionFresnelFromSpecular")], cj = [(0, Uu.e)("_markAllSubMeshesAsFresnelDirty")], Nj = [(0, Uu.E)("useGlossinessFromSpecularMapAlpha")], Oj = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], Yj = [(0, Uu.E)("maxSimultaneousLights")], hj = [(0, Uu.e)("_markAllSubMeshesAsLightsDirty")], Dj = [(0, Uu.E)("invertNormalMapX")], gj = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], Mj = [(0, Uu.E)("invertNormalMapY")], ej = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], Gj = [(0, Uu.E)("twoSidedLighting")], pj = [(0, Uu.e)("_markAllSubMeshesAsTexturesDirty")], wj = [(0, Uu.E)("applyDecalMapAfterDetailMap")], Jj = [(0, Uu.e)("_markAllSubMeshesAsMiscDirty")], (0, su.e)(uu, null, ZE, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "diffuseTexture" in uu,
              get: uu => uu.diffuseTexture,
              set: (uu, Eu) => {
                uu.diffuseTexture = Eu
              }
            },
            metadata: Eu
          }, oj, kj), (0, su.e)(uu, null, lE, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "ambientTexture" in uu,
              get: uu => uu.ambientTexture,
              set: (uu, Eu) => {
                uu.ambientTexture = Eu
              }
            },
            metadata: Eu
          }, Kj, Vj), (0, su.e)(uu, null, fE, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "opacityTexture" in uu,
              get: uu => uu.opacityTexture,
              set: (uu, Eu) => {
                uu.opacityTexture = Eu
              }
            },
            metadata: Eu
          }, ij, Wj), (0, su.e)(uu, null, bE, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "reflectionTexture" in uu,
              get: uu => uu.reflectionTexture,
              set: (uu, Eu) => {
                uu.reflectionTexture = Eu
              }
            },
            metadata: Eu
          }, Fj, Bj), (0, su.e)(uu, null, NE, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "emissiveTexture" in uu,
              get: uu => uu.emissiveTexture,
              set: (uu, Eu) => {
                uu.emissiveTexture = Eu
              }
            },
            metadata: Eu
          }, xj, Tj), (0, su.e)(uu, null, YE, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularTexture" in uu,
              get: uu => uu.specularTexture,
              set: (uu, Eu) => {
                uu.specularTexture = Eu
              }
            },
            metadata: Eu
          }, nj, yj), (0, su.e)(uu, null, DE, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "bumpTexture" in uu,
              get: uu => uu.bumpTexture,
              set: (uu, Eu) => {
                uu.bumpTexture = Eu
              }
            },
            metadata: Eu
          }, us, Es), (0, su.e)(uu, null, ME, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "lightmapTexture" in uu,
              get: uu => uu.lightmapTexture,
              set: (uu, Eu) => {
                uu.lightmapTexture = Eu
              }
            },
            metadata: Eu
          }, Zs, Xs), (0, su.e)(uu, null, GE, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "refractionTexture" in uu,
              get: uu => uu.refractionTexture,
              set: (uu, Eu) => {
                uu.refractionTexture = Eu
              }
            },
            metadata: Eu
          }, fs, Cs), (0, su.e)(uu, null, oE, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "useAlphaFromDiffuseTexture" in uu,
              get: uu => uu.useAlphaFromDiffuseTexture,
              set: (uu, Eu) => {
                uu.useAlphaFromDiffuseTexture = Eu
              }
            },
            metadata: Eu
          }, ws, ds), (0, su.e)(uu, null, mE, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: uu => "useEmissiveAsIllumination" in uu,
              get: uu => uu.useEmissiveAsIllumination,
              set: (uu, Eu) => {
                uu.useEmissiveAsIllumination = Eu
              }
            },
            metadata: Eu
          }, os, ks), (0, su.e)(uu, null, KE, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: uu => "linkEmissiveWithDiffuse" in uu,
              get: uu => uu.linkEmissiveWithDiffuse,
              set: (uu, Eu) => {
                uu.linkEmissiveWithDiffuse = Eu
              }
            },
            metadata: Eu
          }, Ks, Vs), (0, su.e)(uu, null, rE, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: uu => "useSpecularOverAlpha" in uu,
              get: uu => uu.useSpecularOverAlpha,
              set: (uu, Eu) => {
                uu.useSpecularOverAlpha = Eu
              }
            },
            metadata: Eu
          }, is, Ws), (0, su.e)(uu, null, iE, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: uu => "useReflectionOverAlpha" in uu,
              get: uu => uu.useReflectionOverAlpha,
              set: (uu, Eu) => {
                uu.useReflectionOverAlpha = Eu
              }
            },
            metadata: Eu
          }, Fs, Bs), (0, su.e)(uu, null, SE, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: uu => "disableLighting" in uu,
              get: uu => uu.disableLighting,
              set: (uu, Eu) => {
                uu.disableLighting = Eu
              }
            },
            metadata: Eu
          }, xs, Ts), (0, su.e)(uu, null, FE, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: uu => "useObjectSpaceNormalMap" in uu,
              get: uu => uu.useObjectSpaceNormalMap,
              set: (uu, Eu) => {
                uu.useObjectSpaceNormalMap = Eu
              }
            },
            metadata: Eu
          }, ns, ys), (0, su.e)(uu, null, LE, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: uu => "useParallax" in uu,
              get: uu => uu.useParallax,
              set: (uu, Eu) => {
                uu.useParallax = Eu
              }
            },
            metadata: Eu
          }, uU, EU), (0, su.e)(uu, null, xE, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: uu => "useParallaxOcclusion" in uu,
              get: uu => uu.useParallaxOcclusion,
              set: (uu, Eu) => {
                uu.useParallaxOcclusion = Eu
              }
            },
            metadata: Eu
          }, UU, ZU), (0, su.e)(uu, null, AE, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: uu => "roughness" in uu,
              get: uu => uu.roughness,
              set: (uu, Eu) => {
                uu.roughness = Eu
              }
            },
            metadata: Eu
          }, CU, bU), (0, su.e)(uu, null, uj, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: uu => "useLightmapAsShadowmap" in uu,
              get: uu => uu.useLightmapAsShadowmap,
              set: (uu, Eu) => {
                uu.useLightmapAsShadowmap = Eu
              }
            },
            metadata: Eu
          }, eU, GU), (0, su.e)(uu, null, jj, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "diffuseFresnelParameters" in uu,
              get: uu => uu.diffuseFresnelParameters,
              set: (uu, Eu) => {
                uu.diffuseFresnelParameters = Eu
              }
            },
            metadata: Eu
          }, JU, dU), (0, su.e)(uu, null, Uj, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "opacityFresnelParameters" in uu,
              get: uu => uu.opacityFresnelParameters,
              set: (uu, Eu) => {
                uu.opacityFresnelParameters = Eu
              }
            },
            metadata: Eu
          }, oU, kU), (0, su.e)(uu, null, Xj, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "reflectionFresnelParameters" in uu,
              get: uu => uu.reflectionFresnelParameters,
              set: (uu, Eu) => {
                uu.reflectionFresnelParameters = Eu
              }
            },
            metadata: Eu
          }, KU, VU), (0, su.e)(uu, null, qj, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "refractionFresnelParameters" in uu,
              get: uu => uu.refractionFresnelParameters,
              set: (uu, Eu) => {
                uu.refractionFresnelParameters = Eu
              }
            },
            metadata: Eu
          }, iU, WU), (0, su.e)(uu, null, Cj, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "emissiveFresnelParameters" in uu,
              get: uu => uu.emissiveFresnelParameters,
              set: (uu, Eu) => {
                uu.emissiveFresnelParameters = Eu
              }
            },
            metadata: Eu
          }, FU, BU), (0, su.e)(uu, null, cj, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: uu => "useReflectionFresnelFromSpecular" in uu,
              get: uu => uu.useReflectionFresnelFromSpecular,
              set: (uu, Eu) => {
                uu.useReflectionFresnelFromSpecular = Eu
              }
            },
            metadata: Eu
          }, xU, TU), (0, su.e)(uu, null, Oj, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: uu => "useGlossinessFromSpecularMapAlpha" in uu,
              get: uu => uu.useGlossinessFromSpecularMapAlpha,
              set: (uu, Eu) => {
                uu.useGlossinessFromSpecularMapAlpha = Eu
              }
            },
            metadata: Eu
          }, nU, yU), (0, su.e)(uu, null, hj, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: uu => "maxSimultaneousLights" in uu,
              get: uu => uu.maxSimultaneousLights,
              set: (uu, Eu) => {
                uu.maxSimultaneousLights = Eu
              }
            },
            metadata: Eu
          }, uZ, EZ), (0, su.e)(uu, null, gj, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: uu => "invertNormalMapX" in uu,
              get: uu => uu.invertNormalMapX,
              set: (uu, Eu) => {
                uu.invertNormalMapX = Eu
              }
            },
            metadata: Eu
          }, UZ, ZZ), (0, su.e)(uu, null, ej, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: uu => "invertNormalMapY" in uu,
              get: uu => uu.invertNormalMapY,
              set: (uu, Eu) => {
                uu.invertNormalMapY = Eu
              }
            },
            metadata: Eu
          }, qZ, fZ), (0, su.e)(uu, null, pj, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: uu => "twoSidedLighting" in uu,
              get: uu => uu.twoSidedLighting,
              set: (uu, Eu) => {
                uu.twoSidedLighting = Eu
              }
            },
            metadata: Eu
          }, cZ, NZ), (0, su.e)(uu, null, Jj, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: uu => "applyDecalMapAfterDetailMap" in uu,
              get: uu => uu.applyDecalMapAfterDetailMap,
              set: (uu, Eu) => {
                uu.applyDecalMapAfterDetailMap = Eu
              }
            },
            metadata: Eu
          }, hZ, DZ), (0, su.e)(null, null, UE, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_diffuseTexture" in uu,
              get: uu => uu._diffuseTexture,
              set: (uu, Eu) => {
                uu._diffuseTexture = Eu
              }
            },
            metadata: Eu
          }, aj, Pj), (0, su.e)(null, null, XE, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_ambientTexture" in uu,
              get: uu => uu._ambientTexture,
              set: (uu, Eu) => {
                uu._ambientTexture = Eu
              }
            },
            metadata: Eu
          }, mj, vj), (0, su.e)(null, null, qE, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_opacityTexture" in uu,
              get: uu => uu._opacityTexture,
              set: (uu, Eu) => {
                uu._opacityTexture = Eu
              }
            },
            metadata: Eu
          }, rj, Qj), (0, su.e)(null, null, CE, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_reflectionTexture" in uu,
              get: uu => uu._reflectionTexture,
              set: (uu, Eu) => {
                uu._reflectionTexture = Eu
              }
            },
            metadata: Eu
          }, Sj, Ij), (0, su.e)(null, null, cE, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_emissiveTexture" in uu,
              get: uu => uu._emissiveTexture,
              set: (uu, Eu) => {
                uu._emissiveTexture = Eu
              }
            },
            metadata: Eu
          }, Lj, tj), (0, su.e)(null, null, OE, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_specularTexture" in uu,
              get: uu => uu._specularTexture,
              set: (uu, Eu) => {
                uu._specularTexture = Eu
              }
            },
            metadata: Eu
          }, Hj, Aj), (0, su.e)(null, null, hE, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_bumpTexture" in uu,
              get: uu => uu._bumpTexture,
              set: (uu, Eu) => {
                uu._bumpTexture = Eu
              }
            },
            metadata: Eu
          }, zj, Rj), (0, su.e)(null, null, gE, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_lightmapTexture" in uu,
              get: uu => uu._lightmapTexture,
              set: (uu, Eu) => {
                uu._lightmapTexture = Eu
              }
            },
            metadata: Eu
          }, ss, Us), (0, su.e)(null, null, eE, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_refractionTexture" in uu,
              get: uu => uu._refractionTexture,
              set: (uu, Eu) => {
                uu._refractionTexture = Eu
              }
            },
            metadata: Eu
          }, ls, qs), (0, su.e)(null, null, pE, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "ambientColor" in uu,
              get: uu => uu.ambientColor,
              set: (uu, Eu) => {
                uu.ambientColor = Eu
              }
            },
            metadata: Eu
          }, bs, cs), (0, su.e)(null, null, wE, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "diffuseColor" in uu,
              get: uu => uu.diffuseColor,
              set: (uu, Eu) => {
                uu.diffuseColor = Eu
              }
            },
            metadata: Eu
          }, Ns, Os), (0, su.e)(null, null, JE, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularColor" in uu,
              get: uu => uu.specularColor,
              set: (uu, Eu) => {
                uu.specularColor = Eu
              }
            },
            metadata: Eu
          }, Ys, hs), (0, su.e)(null, null, dE, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "emissiveColor" in uu,
              get: uu => uu.emissiveColor,
              set: (uu, Eu) => {
                uu.emissiveColor = Eu
              }
            },
            metadata: Eu
          }, Ds, gs), (0, su.e)(null, null, aE, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: uu => "specularPower" in uu,
              get: uu => uu.specularPower,
              set: (uu, Eu) => {
                uu.specularPower = Eu
              }
            },
            metadata: Eu
          }, Ms, es), (0, su.e)(null, null, PE, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useAlphaFromDiffuseTexture" in uu,
              get: uu => uu._useAlphaFromDiffuseTexture,
              set: (uu, Eu) => {
                uu._useAlphaFromDiffuseTexture = Eu
              }
            },
            metadata: Eu
          }, Gs, ps), (0, su.e)(null, null, kE, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useEmissiveAsIllumination" in uu,
              get: uu => uu._useEmissiveAsIllumination,
              set: (uu, Eu) => {
                uu._useEmissiveAsIllumination = Eu
              }
            },
            metadata: Eu
          }, as, Ps), (0, su.e)(null, null, vE, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: uu => "_linkEmissiveWithDiffuse" in uu,
              get: uu => uu._linkEmissiveWithDiffuse,
              set: (uu, Eu) => {
                uu._linkEmissiveWithDiffuse = Eu
              }
            },
            metadata: Eu
          }, ms, vs), (0, su.e)(null, null, VE, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useSpecularOverAlpha" in uu,
              get: uu => uu._useSpecularOverAlpha,
              set: (uu, Eu) => {
                uu._useSpecularOverAlpha = Eu
              }
            },
            metadata: Eu
          }, rs, Qs), (0, su.e)(null, null, QE, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useReflectionOverAlpha" in uu,
              get: uu => uu._useReflectionOverAlpha,
              set: (uu, Eu) => {
                uu._useReflectionOverAlpha = Eu
              }
            },
            metadata: Eu
          }, Ss, Is), (0, su.e)(null, null, WE, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: uu => "_disableLighting" in uu,
              get: uu => uu._disableLighting,
              set: (uu, Eu) => {
                uu._disableLighting = Eu
              }
            },
            metadata: Eu
          }, Ls, ts), (0, su.e)(null, null, IE, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useObjectSpaceNormalMap" in uu,
              get: uu => uu._useObjectSpaceNormalMap,
              set: (uu, Eu) => {
                uu._useObjectSpaceNormalMap = Eu
              }
            },
            metadata: Eu
          }, Hs, As), (0, su.e)(null, null, BE, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useParallax" in uu,
              get: uu => uu._useParallax,
              set: (uu, Eu) => {
                uu._useParallax = Eu
              }
            },
            metadata: Eu
          }, zs, Rs), (0, su.e)(null, null, tE, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useParallaxOcclusion" in uu,
              get: uu => uu._useParallaxOcclusion,
              set: (uu, Eu) => {
                uu._useParallaxOcclusion = Eu
              }
            },
            metadata: Eu
          }, jU, sU), (0, su.e)(null, null, TE, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: uu => "parallaxScaleBias" in uu,
              get: uu => uu.parallaxScaleBias,
              set: (uu, Eu) => {
                uu.parallaxScaleBias = Eu
              }
            },
            metadata: Eu
          }, XU, lU), (0, su.e)(null, null, HE, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: uu => "_roughness" in uu,
              get: uu => uu._roughness,
              set: (uu, Eu) => {
                uu._roughness = Eu
              }
            },
            metadata: Eu
          }, qU, fU), (0, su.e)(null, null, nE, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: uu => "indexOfRefraction" in uu,
              get: uu => uu.indexOfRefraction,
              set: (uu, Eu) => {
                uu.indexOfRefraction = Eu
              }
            },
            metadata: Eu
          }, cU, NU), (0, su.e)(null, null, yE, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: uu => "invertRefractionY" in uu,
              get: uu => uu.invertRefractionY,
              set: (uu, Eu) => {
                uu.invertRefractionY = Eu
              }
            },
            metadata: Eu
          }, OU, YU), (0, su.e)(null, null, zE, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: uu => "alphaCutOff" in uu,
              get: uu => uu.alphaCutOff,
              set: (uu, Eu) => {
                uu.alphaCutOff = Eu
              }
            },
            metadata: Eu
          }, hU, DU), (0, su.e)(null, null, RE, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useLightmapAsShadowmap" in uu,
              get: uu => uu._useLightmapAsShadowmap,
              set: (uu, Eu) => {
                uu._useLightmapAsShadowmap = Eu
              }
            },
            metadata: Eu
          }, gU, MU), (0, su.e)(null, null, Ej, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "_diffuseFresnelParameters" in uu,
              get: uu => uu._diffuseFresnelParameters,
              set: (uu, Eu) => {
                uu._diffuseFresnelParameters = Eu
              }
            },
            metadata: Eu
          }, pU, wU), (0, su.e)(null, null, sj, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "_opacityFresnelParameters" in uu,
              get: uu => uu._opacityFresnelParameters,
              set: (uu, Eu) => {
                uu._opacityFresnelParameters = Eu
              }
            },
            metadata: Eu
          }, aU, PU), (0, su.e)(null, null, Zj, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "_reflectionFresnelParameters" in uu,
              get: uu => uu._reflectionFresnelParameters,
              set: (uu, Eu) => {
                uu._reflectionFresnelParameters = Eu
              }
            },
            metadata: Eu
          }, mU, vU), (0, su.e)(null, null, lj, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "_refractionFresnelParameters" in uu,
              get: uu => uu._refractionFresnelParameters,
              set: (uu, Eu) => {
                uu._refractionFresnelParameters = Eu
              }
            },
            metadata: Eu
          }, rU, QU), (0, su.e)(null, null, fj, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: uu => "_emissiveFresnelParameters" in uu,
              get: uu => uu._emissiveFresnelParameters,
              set: (uu, Eu) => {
                uu._emissiveFresnelParameters = Eu
              }
            },
            metadata: Eu
          }, SU, IU), (0, su.e)(null, null, bj, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useReflectionFresnelFromSpecular" in uu,
              get: uu => uu._useReflectionFresnelFromSpecular,
              set: (uu, Eu) => {
                uu._useReflectionFresnelFromSpecular = Eu
              }
            },
            metadata: Eu
          }, LU, tU), (0, su.e)(null, null, Nj, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: uu => "_useGlossinessFromSpecularMapAlpha" in uu,
              get: uu => uu._useGlossinessFromSpecularMapAlpha,
              set: (uu, Eu) => {
                uu._useGlossinessFromSpecularMapAlpha = Eu
              }
            },
            metadata: Eu
          }, HU, AU), (0, su.e)(null, null, Yj, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: uu => "_maxSimultaneousLights" in uu,
              get: uu => uu._maxSimultaneousLights,
              set: (uu, Eu) => {
                uu._maxSimultaneousLights = Eu
              }
            },
            metadata: Eu
          }, zU, RU), (0, su.e)(null, null, Dj, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: uu => "_invertNormalMapX" in uu,
              get: uu => uu._invertNormalMapX,
              set: (uu, Eu) => {
                uu._invertNormalMapX = Eu
              }
            },
            metadata: Eu
          }, jZ, sZ), (0, su.e)(null, null, Mj, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: uu => "_invertNormalMapY" in uu,
              get: uu => uu._invertNormalMapY,
              set: (uu, Eu) => {
                uu._invertNormalMapY = Eu
              }
            },
            metadata: Eu
          }, XZ, lZ), (0, su.e)(null, null, Gj, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: uu => "_twoSidedLighting" in uu,
              get: uu => uu._twoSidedLighting,
              set: (uu, Eu) => {
                uu._twoSidedLighting = Eu
              }
            },
            metadata: Eu
          }, CZ, bZ), (0, su.e)(null, null, wj, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: uu => "_applyDecalMapAfterDetailMap" in uu,
              get: uu => uu._applyDecalMapAfterDetailMap,
              set: (uu, Eu) => {
                uu._applyDecalMapAfterDetailMap = Eu
              }
            },
            metadata: Eu
          }, OZ, YZ), Eu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Eu
          })
        })(), uu.ForceGLSL = !1, uu._ShaderLoader = new pu.b((() => [Promise.all([ju.e(322), ju.e(321)]).then((() => ju(42148))), Promise.all([ju.e(327), ju.e(323), ju.e(336), ju.e(326)]).then((() => ju(42348)))]), (() => [Promise.all([ju.e(343), ju.e(338)]).then((() => ju(42506))), Promise.all([ju.e(344), ju.e(354), ju.e(340)]).then((() => ju(42692)))])), uu
      })(),
      ru = !1;

    function Qu() {
      ru || (ru = !0, (0, bu.g)(), (0, Pu.f)("BABYLON.StandardMaterial", Vu), Xu.f.DefaultMaterialFactory = uu => new Vu("default material", uu))
    }
    Object.getOwnPropertyDescriptor(Vu.prototype, "decalMap") || Object.defineProperty(Vu.prototype, "decalMap", (0, ou.d)("StandardMaterial", "decalMap"))
  },
  40640: (uu, Eu, ju) => {
    function su(uu) {
      return class extends uu {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    ju.d(Eu, {
      c: () => su
    })
  },
  40628: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    class su {
      constructor(uu, Eu) {
        this._webGL = {
          load: uu,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: Eu,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(uu) {
        const Eu = 1 === uu ? this._webGPU : this._webGL;
        return Eu.loaded ? void 0 : async () => {
          await this._loadAsync(Eu)
        }
      }
      async _loadAsync(uu) {
        if (uu.loaded) return;
        let Eu = uu.loadPromise;
        const ju = null === Eu;
        ju && (Eu = Promise.all(uu.load()), uu.loadPromise = Eu);
        let su = !1;
        try {
          await Eu, su = !0
        } finally {
          ju && this._completeLoad(uu, su)
        }
      }
      _completeLoad(uu, Eu) {
        uu.loaded = Eu, uu.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);