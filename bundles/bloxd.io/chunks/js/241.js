export const id = 241;
export const ids = [241];
export const modules = {
  39151: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ
    });
    var FJ = ZJ(38813);

    function UJ(JJ) {
      return class extends JJ {
        constructor() {
          super(...arguments);
          const JJ = new.target;
          if (!JJ[Symbol.metadata]) {
            const cJ = Object.getPrototypeOf(JJ)?.[Symbol.metadata];
            JJ[Symbol.metadata] = cJ ? Object.create(cJ) : {}
          }
          const cJ = (0, FJ.e)(JJ[Symbol.metadata]);
          cJ._imageProcessingConfiguration || (cJ._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(JJ) {
          this._attachImageProcessingConfiguration(JJ), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(JJ) {
          JJ !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !JJ && this.Qy ? this._imageProcessingConfiguration = this.Qy().imageProcessingConfiguration : JJ && (this._imageProcessingConfiguration = JJ), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(JJ) {
          this.imageProcessingConfiguration.colorCurvesEnabled = JJ
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(JJ) {
          this.imageProcessingConfiguration.colorGradingEnabled = JJ
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(JJ) {
          this._imageProcessingConfiguration.toneMappingEnabled = JJ
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(JJ) {
          this._imageProcessingConfiguration.exposure = JJ
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(JJ) {
          this._imageProcessingConfiguration.contrast = JJ
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(JJ) {
          this._imageProcessingConfiguration.colorGradingTexture = JJ
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(JJ) {
          this._imageProcessingConfiguration.colorCurves = JJ
        }
      }
    }
  },
  39037: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      e: () => UJ
    });
    var FJ = ZJ(39041);

    function UJ(JJ) {
      return class extends JJ {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class eJ extends FJ.d {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  39117: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => hJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(39049),
      eJ = ZJ(38806),
      XJ = ZJ(39100),
      AJ = ZJ(39041),
      qJ = ZJ(39123),
      jJ = ZJ(39087);
    class YJ extends AJ.d {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let hJ = (() => {
      var JJ, cJ, ZJ, AJ;
      let hJ, DJ, sJ, nJ, GJ, fJ, xJ = qJ.d,
        rJ = [],
        vJ = [],
        mJ = [],
        QJ = [],
        EJ = [],
        VJ = [],
        KJ = [],
        yJ = [],
        SJ = [],
        IJ = [],
        MJ = [],
        bJ = [];
      return JJ = class extends xJ {
        get texture() {
          return (0, FJ.b)(this, cJ, "f")
        }
        set texture(JJ) {
          (0, FJ.c)(this, cJ, JJ, "f")
        }
        get normalBlendMethod() {
          return (0, FJ.b)(this, ZJ, "f")
        }
        set normalBlendMethod(JJ) {
          (0, FJ.c)(this, ZJ, JJ, "f")
        }
        get isEnabled() {
          return (0, FJ.b)(this, AJ, "f")
        }
        set isEnabled(JJ) {
          (0, FJ.c)(this, AJ, JJ, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(JJ) {
          let eJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(JJ, "DetailMap", 140, new YJ, eJ), this._texture = null, cJ.set(this, (0, FJ.e)(this, rJ, void 0)), this.diffuseBlendLevel = ((0, FJ.e)(this, vJ), (0, FJ.e)(this, mJ, 1)), this.roughnessBlendLevel = ((0, FJ.e)(this, QJ), (0, FJ.e)(this, EJ, 1)), this.bumpLevel = ((0, FJ.e)(this, VJ), (0, FJ.e)(this, KJ, 1)), this._normalBlendMethod = ((0, FJ.e)(this, yJ), UJ.c.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), ZJ.set(this, (0, FJ.e)(this, SJ, void 0)), this._isEnabled = ((0, FJ.e)(this, IJ), !1), AJ.set(this, (0, FJ.e)(this, MJ, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, FJ.e)(this, bJ), this._internalMarkAllSubMeshesAsTexturesDirty = JJ._dirtyCallbacks[1]
        }
        isReadyForSubMesh(JJ, cJ, ZJ) {
          return !this._isEnabled || !(JJ._areTexturesDirty && cJ.texturesEnabled && ZJ.getCaps().standardDerivatives && this._texture && XJ.d.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(JJ, cJ) {
          if (this._isEnabled) {
            JJ.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const ZJ = cJ.gn();
            JJ._areTexturesDirty && (ZJ.getCaps().standardDerivatives && this._texture && XJ.d.DetailTextureEnabled && this._isEnabled ? ((0, jJ.X)(this._texture, JJ, "DETAIL"), JJ.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : JJ.DETAIL = !1)
          } else JJ.DETAIL = !1
        }
        bindForSubMesh(JJ, cJ) {
          if (!this._isEnabled) return;
          const ZJ = this._material.isFrozen;
          JJ.useUbo && ZJ && JJ.isSync || this._texture && XJ.d.DetailTextureEnabled && (JJ.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, jJ.q)(this._texture, JJ, "detail")), cJ.texturesEnabled && this._texture && XJ.d.DetailTextureEnabled && JJ.setTexture("detailSampler", this._texture)
        }
        hasTexture(JJ) {
          return this._texture === JJ
        }
        getActiveTextures(JJ) {
          this._texture && JJ.push(this._texture)
        }
        getAnimatables(JJ) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && JJ.push(this._texture)
        }
        dispose(JJ) {
          JJ && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(JJ) {
          JJ.push("detailSampler")
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
      }, cJ = new WeakMap, ZJ = new WeakMap, AJ = new WeakMap, (() => {
        const cJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(xJ[Symbol.metadata] ?? null) : void 0;
        hJ = [(0, eJ.A)("detailTexture"), (0, eJ.f)("_markAllSubMeshesAsTexturesDirty")], DJ = [(0, eJ.F)()], sJ = [(0, eJ.F)()], nJ = [(0, eJ.F)()], GJ = [(0, eJ.F)(), (0, eJ.f)("_markAllSubMeshesAsTexturesDirty")], fJ = [(0, eJ.F)(), (0, eJ.f)("_markAllSubMeshesAsTexturesDirty")], (0, FJ.d)(JJ, null, hJ, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: JJ => "texture" in JJ,
            get: JJ => JJ.texture,
            set: (JJ, cJ) => {
              JJ.texture = cJ
            }
          },
          metadata: cJ
        }, rJ, vJ), (0, FJ.d)(JJ, null, GJ, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: JJ => "normalBlendMethod" in JJ,
            get: JJ => JJ.normalBlendMethod,
            set: (JJ, cJ) => {
              JJ.normalBlendMethod = cJ
            }
          },
          metadata: cJ
        }, SJ, IJ), (0, FJ.d)(JJ, null, fJ, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: JJ => "isEnabled" in JJ,
            get: JJ => JJ.isEnabled,
            set: (JJ, cJ) => {
              JJ.isEnabled = cJ
            }
          },
          metadata: cJ
        }, MJ, bJ), (0, FJ.d)(null, null, DJ, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: JJ => "diffuseBlendLevel" in JJ,
            get: JJ => JJ.diffuseBlendLevel,
            set: (JJ, cJ) => {
              JJ.diffuseBlendLevel = cJ
            }
          },
          metadata: cJ
        }, mJ, QJ), (0, FJ.d)(null, null, sJ, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: JJ => "roughnessBlendLevel" in JJ,
            get: JJ => JJ.roughnessBlendLevel,
            set: (JJ, cJ) => {
              JJ.roughnessBlendLevel = cJ
            }
          },
          metadata: cJ
        }, EJ, VJ), (0, FJ.d)(null, null, nJ, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: JJ => "bumpLevel" in JJ,
            get: JJ => JJ.bumpLevel,
            set: (JJ, cJ) => {
              JJ.bumpLevel = cJ
            }
          },
          metadata: cJ
        }, KJ, yJ), cJ && Object.defineProperty(JJ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cJ
        })
      })(), JJ
    })()
  },
  39041: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ
    });
    class FJ {
      constructor(JJ) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = JJ, JJ)
          for (const cJ in JJ) Object.prototype.hasOwnProperty.call(JJ, cJ) && this._setDefaultValue(cJ)
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
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || JJ, this._isDirty = !0
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
        for (const JJ of Object.keys(this)) "_" !== JJ[0] && this._keys.push(JJ);
        if (this._externalProperties)
          for (const JJ in this._externalProperties) - 1 === this._keys.indexOf(JJ) && this._keys.push(JJ)
      }
      isEqual(JJ) {
        if (this._keys.length !== JJ._keys.length) return !1;
        for (let cJ = 0; cJ < this._keys.length; cJ++) {
          const ZJ = this._keys[cJ];
          if (this[ZJ] !== JJ[ZJ]) return !1
        }
        return !0
      }
      cloneTo(JJ) {
        this._keys.length !== JJ._keys.length && (JJ._keys = this._keys.slice(0));
        for (let cJ = 0; cJ < this._keys.length; cJ++) {
          const ZJ = this._keys[cJ];
          JJ[ZJ] = this[ZJ]
        }
      }
      reset() {
        for (const JJ of this._keys) this._setDefaultValue(JJ)
      }
      _setDefaultValue(JJ) {
        const cJ = this._externalProperties?.[JJ]?.type ?? typeof this[JJ],
          ZJ = this._externalProperties?.[JJ]?.default;
        switch (cJ) {
          case "number":
            this[JJ] = ZJ ?? 0;
            break;
          case "string":
            this[JJ] = ZJ ?? "";
            break;
          default:
            this[JJ] = ZJ ?? !1
        }
      }
      toString() {
        let JJ = "";
        for (let cJ = 0; cJ < this._keys.length; cJ++) {
          const ZJ = this._keys[cJ],
            FJ = this[ZJ];
          switch (typeof FJ) {
            case "number":
            case "string":
              JJ += "#define " + ZJ + " " + FJ + "\n";
              break;
            default:
              FJ && (JJ += "#define " + ZJ + "\n")
          }
        }
        return JJ
      }
    }
  },
  39138: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      d: () => XJ,
      e: () => eJ
    });
    var FJ, UJ = ZJ(36174);

    function eJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const FJ = cJ(JJ);
      if (!Number.isInteger(FJ) || FJ < 0 || FJ > ZJ) throw new Error(`Invalid geometry object ID ${FJ} for mesh "${JJ.name}". Object IDs must be integers between 0 and 0x${ZJ.toString(16).toUpperCase()}.`);
      return FJ
    }

    function XJ(JJ, cJ) {
      const ZJ = cJ(JJ);
      if (!Number.isInteger(ZJ) || ZJ < 0 || ZJ > 255 || 0 !== ZJ && 0 === (63 & ZJ)) throw new Error(`Invalid geometry mesh-blending tag ${ZJ} for mesh "${JJ.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return ZJ
    }! function(JJ) {
      JJ[JJ.Zero = 0] = "Zero", JJ[JJ.One = 1] = "One", JJ[JJ.MaxViewZ = 2] = "MaxViewZ", JJ[JJ.NoClear = 3] = "NoClear"
    }(FJ || (FJ = {}));
    class AJ {
      static CreateConfiguration(JJ) {
        return AJ._Configurations[JJ] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: UJ.b.Zero(),
          currentViewProjection: UJ.b.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, AJ._Configurations[JJ]
      }
      static DeleteConfiguration(JJ) {
        delete AJ._Configurations[JJ]
      }
      static GetConfiguration(JJ) {
        return AJ._Configurations[JJ]
      }
      static _PrepareConfiguration(JJ, cJ, ZJ) {
        const FJ = AJ._Configurations[JJ];
        FJ._attachments = cJ, FJ._colorAttachments = ZJ, FJ._mrtCount = cJ.length;
        let UJ = "#define PREPASS\n";
        for (const eJ of AJ.GeometryTextureDescriptions) {
          const JJ = FJ.defines[eJ.defineIndex];
          void 0 !== JJ && (UJ += `#define ${eJ.define}\n#define ${eJ.defineIndex} ${JJ}\n`)
        }
        FJ.objectIdIsRedFormat && (UJ += "#define PREPASS_OBJECT_ID_R8\n"), FJ._defines = UJ + `#define SCENE_MRT_COUNT ${cJ.length}\n`
      }
      static _PrepareStringDefines(JJ, cJ) {
        const ZJ = AJ._Configurations[JJ];
        return !!ZJ?._defines && (cJ.push(ZJ._defines), !0)
      }
      static _BindAttachmentsForEffect(JJ, cJ) {
        const ZJ = AJ._Configurations[JJ.currentRenderPassId];
        return !ZJ?._attachments || (JJ.bindAttachments(cJ._multiTarget ? ZJ._attachments : ZJ._colorAttachments), cJ._multiTarget || void 0 !== ZJ.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(JJ) {
        const cJ = AJ._Configurations[JJ.currentRenderPassId];
        cJ?._colorAttachments && JJ.bindAttachments(cJ._colorAttachments)
      }
      static _BindColorAttachments(JJ) {
        const cJ = AJ._Configurations[JJ.currentRenderPassId];
        return !cJ?._colorAttachments || (JJ.bindAttachments(cJ._colorAttachments), void 0 !== cJ.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(JJ) {
        const cJ = AJ._Configurations[JJ.currentRenderPassId];
        return !cJ?._colorAttachments || void 0 !== cJ.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(JJ, cJ) {
        const ZJ = AJ._Configurations[JJ.currentRenderPassId];
        if (!ZJ) return;
        const FJ = JJ.getAlphaMode(),
          UJ = void 0 === ZJ.defines.PREPASS_COLOR_INDEX || 2 === FJ || 1 === FJ || 17 === FJ;
        cJ.setFloat("geometryZeroAlphaDiscard", UJ ? 1 : 0)
      }
      static AddUniformsAndSamplers(JJ, cJ) {
        JJ.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(JJ, cJ) {
        for (const ZJ of cJ)
          if (ZJ.aE)
            for (const cJ of ZJ.aE) cJ._removeDrawWrapper(JJ)
      }
      static PrepareDefines(JJ, cJ, ZJ) {
        if (!ZJ._arePrePassDirty) return;
        const FJ = AJ._Configurations[JJ];
        if (!FJ) return;
        ZJ.PREPASS = !0;
        let UJ = 0;
        for (let eJ = 0; eJ < AJ.GeometryTextureDescriptions.length; eJ++) {
          const JJ = AJ.GeometryTextureDescriptions[eJ],
            cJ = JJ.define,
            XJ = JJ.defineIndex,
            qJ = FJ.defines[XJ];
          void 0 !== qJ ? (ZJ[cJ] = !0, ZJ[XJ] = qJ, UJ++) : (ZJ[cJ] = !1, delete ZJ[XJ])
        }
        ZJ.PREPASS_OBJECT_ID_R8 = FJ.objectIdIsRedFormat, ZJ.SCENE_MRT_COUNT = FJ._mrtCount ?? UJ, ZJ.BONES_VELOCITY_ENABLED = cJ.useBones && cJ.computeBonesUsingShaders && cJ.skeleton && !cJ.skeleton.isUsingTextureForMatrices && -1 === FJ.excludedSkinnedMesh.indexOf(cJ)
      }
      static Bind(JJ, cJ, ZJ, FJ, UJ) {
        const qJ = AJ._Configurations[JJ];
        if (!qJ) return;
        const jJ = ZJ.Qy(),
          YJ = jJ.gn();
        if (qJ.reverseCulling && YJ.setStateCullFaceType(jJ._mirroredCameraPosition ? UJ.cullBackFaces : !UJ.cullBackFaces), void 0 !== qJ.defines.PREPASS_OBJECT_ID_INDEX) {
          const JJ = qJ.objectIdIsRedFormat ? 255 : 16777215;
          let FJ = ZJ.uniqueId;
          if (qJ.objectIdProvider) FJ = eJ(ZJ, qJ.objectIdProvider, JJ);
          else if (FJ > JJ) throw new Error(`Invalid geometry object ID ${FJ} for mesh "${ZJ.name}". Object IDs must be integers between 0 and 0x${JJ.toString(16).toUpperCase()}.`);
          cJ.setFloat("objectId", FJ)
        }
        if (void 0 !== qJ.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const JJ = qJ.meshBlendTagProvider ? XJ(ZJ, qJ.meshBlendTagProvider) : ZJ.meshBlendingTag;
          cJ.setInt("meshBlendTag", JJ)
        }
        if (void 0 !== qJ.defines.PREPASS_VELOCITY_INDEX || void 0 !== qJ.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const JJ = qJ._currentWorldMatrices ?? (qJ._currentWorldMatrices = {}),
            UJ = qJ._worldMatrixFrameIds ?? (qJ._worldMatrixFrameIds = {});
          if (JJ[ZJ.uniqueId] || (JJ[ZJ.uniqueId] = FJ.clone(), qJ.previousWorldMatrices[ZJ.uniqueId] = FJ.clone()), UJ[ZJ.uniqueId] !== YJ.frameId && (qJ.previousWorldMatrices[ZJ.uniqueId].rZJ(JJ[ZJ.uniqueId]), UJ[ZJ.uniqueId] = YJ.frameId), JJ[ZJ.uniqueId].rZJ(FJ), -1 === qJ.lastUpdateFrameId ? (qJ.lastUpdateFrameId = YJ.frameId, qJ.previousViewProjection.rZJ(jJ.getTransformMatrix()), qJ.currentViewProjection.rZJ(jJ.getTransformMatrix())) : qJ.currentViewProjection.updateFlag !== jJ.getTransformMatrix().updateFlag ? (qJ.lastUpdateFrameId = YJ.frameId, qJ.previousViewProjection.rZJ(qJ.currentViewProjection), qJ.currentViewProjection.rZJ(jJ.getTransformMatrix())) : qJ.lastUpdateFrameId !== YJ.frameId && (qJ.lastUpdateFrameId = YJ.frameId, qJ.previousViewProjection.rZJ(qJ.currentViewProjection)), cJ.setMatrix("previousWorld", qJ.previousWorldMatrices[ZJ.uniqueId]), cJ.setMatrix("previousViewProjection", qJ.previousViewProjection), ZJ.useBones && ZJ.computeBonesUsingShaders && ZJ.skeleton) {
            const JJ = ZJ.skeleton;
            if (!JJ.isUsingTextureForMatrices || -1 === cJ.getUniformIndex("boneTextureInfo")) {
              const FJ = JJ.getTransformMatrices(ZJ);
              FJ && (qJ.previousBones[ZJ.uniqueId] || (qJ.previousBones[ZJ.uniqueId] = FJ.slice()), cJ.setMatrices("mPreviousBones", qJ.previousBones[ZJ.uniqueId]), qJ.previousBones[ZJ.uniqueId].set(FJ))
            }
          }
        }
      }
    }
    AJ.GeometryTextureDescriptions = [{
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
    }], AJ._Configurations = {}
  },
  39123: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => DJ,
      e: () => nJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38806),
      eJ = ZJ(38683),
      XJ = ZJ(38658);
    const AJ = new RegExp("^([gimus]+)!");
    class qJ {
      constructor(JJ) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = JJ, this._scene = JJ.Qy(), this._engine = this._scene.gn()
      }
      _addPlugin(JJ) {
        for (let FJ = 0; FJ < this._plugins.length; ++FJ)
          if (this._plugins[FJ].name === JJ.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !JJ.isCompatible(this._material.shaderLanguage)) throw `The plugin "${JJ.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const cJ = JJ.getClassName();
        qJ._MaterialPluginClassToMainDefine[cJ] || (qJ._MaterialPluginClassToMainDefine[cJ] = "MATERIALPLUGIN_" + ++qJ._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (JJ, cJ) => this._handlePluginEvent(JJ, cJ), this._plugins.push(JJ), this._plugins.sort(((JJ, cJ) => JJ.priority - cJ.priority)), this._codeInjectionPoints = {};
        const ZJ = {};
        ZJ[qJ._MaterialPluginClassToMainDefine[cJ]] = {
          type: "boolean",
          default: !0
        };
        for (const FJ of this._plugins) FJ.collectDefines(ZJ), this._collectPointNames("vertex", FJ.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", FJ.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = ZJ, !0
      }
      _activatePlugin(JJ) {
        -1 === this._activePlugins.indexOf(JJ) && (this._activePlugins.push(JJ), this._activePlugins.sort(((JJ, cJ) => JJ.priority - cJ.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), JJ.registerForExtraEvents && (this._activePluginsForExtraEvents.push(JJ), this._activePluginsForExtraEvents.sort(((JJ, cJ) => JJ.priority - cJ.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(JJ) {
        for (let cJ = 0; cJ < this._plugins.length; ++cJ)
          if (this._plugins[cJ].name === JJ) return this._plugins[cJ];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(JJ) {
        let cJ = !0;
        for (const ZJ of this._activePlugins) cJ = cJ && ZJ.isReadyForSubMesh(JJ.defines, this._scene, this._engine, JJ.subMesh);
        JJ.isReadyForSubMesh = cJ
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(JJ) {
        for (const cJ of this._activePlugins) cJ.prepareDefinesBeforeAttributes(JJ.defines, this._scene, JJ.mesh)
      }
      _handlePluginEventPrepareDefines(JJ) {
        for (const cJ of this._activePlugins) cJ.prepareDefines(JJ.defines, this._scene, JJ.mesh)
      }
      _handlePluginEventHardBindForSubMesh(JJ) {
        for (const cJ of this._activePluginsForExtraEvents) cJ.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, JJ.subMesh)
      }
      _handlePluginEventBindForSubMesh(JJ) {
        for (const cJ of this._activePlugins) cJ.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, JJ.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(JJ) {
        let cJ = !1;
        for (const ZJ of this._activePluginsForExtraEvents)
          if (cJ = ZJ.hasRenderTargetTextures(), cJ) break;
        JJ.hasRenderTargetTextures = cJ
      }
      _handlePluginEventFillRenderTargetTextures(JJ) {
        for (const cJ of this._activePluginsForExtraEvents) cJ.fillRenderTargetTextures(JJ.renderTargets)
      }
      _handlePluginEvent(JJ, cJ) {
        switch (JJ) {
          case 512: {
            const JJ = cJ;
            for (const cJ of this._activePlugins) cJ.getActiveTextures(JJ.activeTextures);
            break
          }
          case 256: {
            const JJ = cJ;
            for (const cJ of this._activePlugins) cJ.getAnimatables(JJ.animatables);
            break
          }
          case 1024: {
            const JJ = cJ;
            let ZJ = !1;
            for (const cJ of this._activePlugins)
              if (ZJ = cJ.hasTexture(JJ.texture), ZJ) break;
            JJ.hasTexture = ZJ;
            break
          }
          case 2: {
            const JJ = cJ;
            for (const cJ of this._plugins) cJ.dispose(JJ.forceDisposeTextures);
            break
          }
          case 4:
            cJ.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const JJ = cJ;
            for (const cJ of this._activePlugins) JJ.fallbackRank = cJ.addFallbacks(JJ.defines, JJ.fallbacks, JJ.fallbackRank), cJ.getAttributes(JJ.attributes, this._scene, JJ.mesh);
            this._uniformList.length > 0 && JJ.uniforms.push(...this._uniformList), this._samplerList.length > 0 && JJ.samplers.push(...this._samplerList), this._uboList.length > 0 && JJ.uniformBuffersNames.push(...this._uboList), JJ.customCode = this._injectCustomCode(JJ, JJ.customCode);
            break
          }
          case 8: {
            const JJ = cJ;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const ZJ = 1 === this._material.shaderLanguage;
            for (const cJ of this._plugins) {
              const FJ = cJ.getUniforms(this._material.shaderLanguage);
              if (FJ) {
                if (FJ.ubo)
                  for (const cJ of FJ.ubo) {
                    if (cJ.size && cJ.type) {
                      const FJ = cJ.arraySize ?? 0;
                      if (JJ.ubo.addUniform(cJ.name, cJ.size, FJ), ZJ) {
                        let JJ;
                        switch (cJ.type) {
                          case "mat4":
                            JJ = "mat4x4f";
                            break;
                          case "float":
                            JJ = "f32";
                            break;
                          default:
                            JJ = `${cJ.type}f`
                        }
                        this._uboDeclaration += FJ > 0 ? `uniform ${cJ.name}: array<${JJ}, ${FJ}>;\n` : `uniform ${cJ.name}: ${JJ};\n`
                      } else this._uboDeclaration += `${cJ.type} ${cJ.name}${FJ>0?`[${FJ}]`:""};\n`
                    }
                    this._uniformList.push(cJ.name)
                  }
                FJ.vertex && (this._vertexDeclaration += FJ.vertex + "\n"), FJ.fragment && (this._fragmentDeclaration += FJ.fragment + "\n"), FJ.externalUniforms && this._uniformList.push(...FJ.externalUniforms)
              }
              cJ.getSamplers(this._samplerList), cJ.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(JJ, cJ) {
        if (cJ)
          for (const ZJ in cJ) this._codeInjectionPoints[JJ] || (this._codeInjectionPoints[JJ] = {}), this._codeInjectionPoints[JJ][ZJ] = !0
      }
      _injectCustomCode(JJ, cJ) {
        return (ZJ, FJ) => {
          cJ && (FJ = cJ(ZJ, FJ)), this._uboDeclaration && (FJ = FJ.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (FJ = FJ.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (FJ = FJ.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const UJ = this._codeInjectionPoints?.[ZJ];
          if (!UJ) return FJ;
          let qJ = null;
          for (let cJ in UJ) {
            let UJ = "";
            for (const FJ of this._activePlugins) {
              const AJ = this._material.shaderLanguage;
              let jJ = FJ.getCustomCode(ZJ, AJ)?.[cJ];
              jJ && (FJ.resolveIncludes && (null === qJ && (qJ = {
                defines: [],
                indexParameters: JJ.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: XJ.b.GetShadersRepository(AJ),
                includesShadersStore: XJ.b.GetIncludesShadersStore(AJ),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                LZJ: this._engine.LZJ,
                processCodeAfterIncludes: void 0
              }), qJ.isFragment = "fragment" === ZJ, (0, eJ.g)(jJ, qJ, (JJ => jJ = JJ))), UJ += jJ + "\n")
            }
            if (UJ.length > 0)
              if ("!" === cJ.charAt(0)) {
                cJ = cJ.substring(1);
                let JJ = "g";
                if ("!" === cJ.charAt(0)) JJ = "", cJ = cJ.substring(1);
                else {
                  const ZJ = AJ.exec(cJ);
                  ZJ && ZJ.length >= 2 && (JJ = ZJ[1], cJ = cJ.substring(JJ.length + 1))
                }
                JJ.indexOf("g") < 0 && (JJ += "g");
                const ZJ = new RegExp(cJ, JJ);
                let eJ = ZJ.exec(FJ);
                for (; null !== eJ;) {
                  const {
                    index: JJ
                  } = eJ, cJ = jJ(UJ, eJ);
                  FJ = FJ.substring(0, JJ) + cJ + FJ.substring(JJ + eJ[0].length), ZJ.lastIndex = JJ + cJ.length, eJ = ZJ.exec(FJ)
                }
              } else {
                const JJ = "#define " + cJ;
                FJ = FJ.replace(JJ, "\n" + UJ + "\n" + JJ)
              }
          }
          return FJ
        }
      }
    }
    qJ._MaterialPluginClassToMainDefine = {}, qJ._MaterialPluginCounter = 0;

    function jJ(JJ, cJ) {
      return JJ.replace(/\$(\d+)/g, ((JJ, ZJ) => {
        const FJ = Number(ZJ);
        return FJ < cJ.length ? cJ[FJ] : ""
      }))
    }
    var YJ = ZJ(38822),
      hJ = ZJ(36216);
    let DJ = (() => {
        var JJ;
        let cJ, ZJ, eJ, XJ, AJ = [],
          jJ = [],
          hJ = [],
          DJ = [],
          sJ = [],
          nJ = [],
          GJ = [],
          fJ = [];
        return JJ = class {
          isCompatible(JJ) {
            return 0 === JJ
          }
          _enable(JJ) {
            JJ && this._pluginManager._activatePlugin(this)
          }
          constructor(JJ, cJ, ZJ, UJ) {
            let eJ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              XJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              YJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, FJ.e)(this, AJ, void 0), this.priority = ((0, FJ.e)(this, jJ), (0, FJ.e)(this, hJ, 500)), this.resolveIncludes = ((0, FJ.e)(this, DJ), (0, FJ.e)(this, sJ, !1)), this.registerForExtraEvents = ((0, FJ.e)(this, nJ), (0, FJ.e)(this, GJ, !1)), this.doNotSerialize = ((0, FJ.e)(this, fJ), !1), this._material = JJ, this.name = cJ, this.priority = ZJ, this.resolveIncludes = YJ, JJ.pluginManager || (JJ.pluginManager = new qJ(JJ), JJ.Sy.add((() => {
              JJ.pluginManager = void 0
            }))), this._pluginDefineNames = UJ, this._pluginManager = JJ.pluginManager, eJ && this._pluginManager._addPlugin(this), XJ && this._enable(!0), this.markAllDefinesAsDirty = JJ._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(JJ, cJ, ZJ, FJ) {
            return !0
          }
          hardBindForSubMesh(JJ, cJ, ZJ, FJ) {}
          bindForSubMesh(JJ, cJ, ZJ, FJ) {}
          dispose(JJ) {}
          getCustomCode(JJ) {
            return null
          }
          collectDefines(JJ) {
            if (this._pluginDefineNames)
              for (const cJ of Object.keys(this._pluginDefineNames)) {
                if ("_" === cJ[0]) continue;
                const ZJ = typeof this._pluginDefineNames[cJ];
                JJ[cJ] = {
                  type: "number" === ZJ ? "number" : "string" === ZJ ? "string" : "boolean" === ZJ ? "boolean" : "object",
                  default: this._pluginDefineNames[cJ]
                }
              }
          }
          prepareDefinesBeforeAttributes(JJ, cJ, ZJ) {}
          prepareDefines(JJ, cJ, ZJ) {}
          hasTexture(JJ) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(JJ) {}
          getActiveTextures(JJ) {}
          getAnimatables(JJ) {}
          addFallbacks(JJ, cJ, ZJ) {
            return ZJ
          }
          getSamplers(JJ) {}
          getAttributes(JJ, cJ, ZJ) {}
          getUniformBuffersNames(JJ) {}
          getUniforms() {
            return {}
          }
          copyTo(JJ) {
            YJ.c.Clone((() => JJ), this)
          }
          serialize() {
            return YJ.c.Serialize(this)
          }
          parse(JJ, cJ, ZJ) {
            YJ.c.Parse((() => this), JJ, cJ, ZJ)
          }
        }, (() => {
          const qJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cJ = [(0, UJ.F)()], ZJ = [(0, UJ.F)()], eJ = [(0, UJ.F)()], XJ = [(0, UJ.F)()], (0, FJ.d)(null, null, cJ, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: JJ => "name" in JJ,
              get: JJ => JJ.name,
              set: (JJ, cJ) => {
                JJ.name = cJ
              }
            },
            metadata: qJ
          }, AJ, jJ), (0, FJ.d)(null, null, ZJ, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: JJ => "priority" in JJ,
              get: JJ => JJ.priority,
              set: (JJ, cJ) => {
                JJ.priority = cJ
              }
            },
            metadata: qJ
          }, hJ, DJ), (0, FJ.d)(null, null, eJ, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: JJ => "resolveIncludes" in JJ,
              get: JJ => JJ.resolveIncludes,
              set: (JJ, cJ) => {
                JJ.resolveIncludes = cJ
              }
            },
            metadata: qJ
          }, sJ, nJ), (0, FJ.d)(null, null, XJ, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: JJ => "registerForExtraEvents" in JJ,
              get: JJ => JJ.registerForExtraEvents,
              set: (JJ, cJ) => {
                JJ.registerForExtraEvents = cJ
              }
            },
            metadata: qJ
          }, GJ, fJ), qJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qJ
          })
        })(), JJ
      })(),
      sJ = !1;

    function nJ() {
      sJ || (sJ = !0, (0, hJ.f)("BABYLON.MaterialPluginBase", DJ))
    }
  },
  39034: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ
    });
    class FJ {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(JJ) {
        JJ.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(JJ) {}
      bindForSubMesh(JJ, cJ, ZJ, FJ, UJ) {
        if (cJ.prePassRenderer && cJ.prePassRenderer.enabled && cJ.prePassRenderer.currentRTisSceneRT && (-1 !== cJ.prePassRenderer.getIndex(2) || -1 !== cJ.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[ZJ.uniqueId] || (this.previousWorldMatrices[ZJ.uniqueId] = FJ.clone()), this.previousViewProjection || (this.previousViewProjection = cJ.getTransformMatrix().clone(), this.currentViewProjection = cJ.getTransformMatrix().clone());
          const UJ = cJ.gn();
          this.currentViewProjection.updateFlag !== cJ.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = UJ.frameId, this.previousViewProjection.rZJ(this.currentViewProjection), this.currentViewProjection.rZJ(cJ.getTransformMatrix())) : this._lastUpdateFrameId !== UJ.frameId && (this._lastUpdateFrameId = UJ.frameId, this.previousViewProjection.rZJ(this.currentViewProjection)), JJ.setMatrix("previousWorld", this.previousWorldMatrices[ZJ.uniqueId]), JJ.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[ZJ.uniqueId] = FJ.clone()
        }
      }
    }
  },
  39143: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return class extends JJ {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    ZJ.d(cJ, {
      d: () => FJ
    })
  },
  39029: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      StandardMaterial: () => FJ.f
    });
    var FJ = ZJ(39032);
    (0, FJ.c)()
  },
  39032: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => kJ,
      f: () => HJ
    });
    var FJ = ZJ(38800),
      UJ = ZJ(38806),
      eJ = ZJ(38890),
      XJ = ZJ(38874),
      AJ = ZJ(36231),
      qJ = ZJ(38918),
      jJ = ZJ(39034),
      YJ = ZJ(39037),
      hJ = ZJ(38892),
      DJ = ZJ(39049),
      sJ = ZJ(39041),
      nJ = ZJ(39106),
      GJ = ZJ(39100),
      fJ = ZJ(39113),
      xJ = ZJ(39117),
      rJ = ZJ(39091),
      vJ = ZJ(39128),
      mJ = ZJ(39087),
      QJ = ZJ(38822),
      EJ = ZJ(39130),
      VJ = ZJ(39138),
      KJ = ZJ(39140),
      yJ = ZJ(39143),
      SJ = ZJ(39151),
      IJ = ZJ(36216),
      MJ = ZJ(38677);
    const bJ = {
      effect: null,
      subMesh: null
    };
    class wJ extends((0, yJ.d)((0, KJ.c)(sJ.d))) {}
    class WJ extends((0, YJ.e)(wJ)) {
      constructor(JJ) {
        super(JJ), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class gJ extends((0, SJ.e)(nJ.d)) {}
    let HJ = (() => {
        var JJ, cJ, YJ, sJ, KJ, yJ, SJ, IJ, MJ, wJ, HJ, PJ, kJ, pJ, dJ, zJ, NJ, OJ, TJ, CJ, uJ, iJ, RJ, LJ, aJ, BJ, tJ, oJ, lJ, Jc, cc, Zc, Fc;
        let Uc, ec, Xc, Ac, qc, jc, Yc, hc, Dc, sc, nc, Gc, fc, xc, rc, vc, mc, Qc, Ec, Vc, Kc, yc, Sc, Ic, Mc, bc, wc, Wc, gc, Hc, Pc, kc, pc, dc, zc, Nc, Oc, Tc, Cc, uc, ic, Rc, Lc, ac, Bc, tc, oc, lc, JZ, cZ, ZZ, FZ, UZ, eZ, XZ, AZ, qZ, jZ, YZ, hZ, DZ, sZ, nZ, GZ, fZ, xZ, rZ, vZ, mZ, QZ, EZ, VZ, KZ, yZ = gJ,
          SZ = [],
          IZ = [],
          MZ = [],
          bZ = [],
          wZ = [],
          WZ = [],
          gZ = [],
          HZ = [],
          PZ = [],
          kZ = [],
          pZ = [],
          dZ = [],
          zZ = [],
          NZ = [],
          OZ = [],
          TZ = [],
          CZ = [],
          uZ = [],
          iZ = [],
          RZ = [],
          LZ = [],
          aZ = [],
          BZ = [],
          tZ = [],
          oZ = [],
          lZ = [],
          JF = [],
          cF = [],
          ZF = [],
          FF = [],
          UF = [],
          eF = [],
          XF = [],
          AF = [],
          qF = [],
          jF = [],
          YF = [],
          hF = [],
          DF = [],
          sF = [],
          nF = [],
          GF = [],
          fF = [],
          xF = [],
          rF = [],
          vF = [],
          mF = [],
          QF = [],
          EF = [],
          VF = [],
          KF = [],
          yF = [],
          SF = [],
          IF = [],
          MF = [],
          bF = [],
          wF = [],
          WF = [],
          gF = [],
          HF = [],
          PF = [],
          kF = [],
          pF = [],
          dF = [],
          zF = [],
          NF = [],
          OF = [],
          TF = [],
          CF = [],
          uF = [],
          iF = [],
          RF = [],
          LF = [],
          aF = [],
          BF = [],
          tF = [],
          oF = [],
          lF = [],
          JU = [],
          cU = [],
          ZU = [],
          FU = [],
          UU = [],
          eU = [],
          XU = [],
          AU = [],
          qU = [],
          jU = [],
          YU = [],
          hU = [],
          DU = [],
          sU = [],
          nU = [],
          GU = [],
          fU = [],
          xU = [],
          rU = [],
          vU = [],
          mU = [],
          QU = [],
          EU = [],
          VU = [],
          KU = [],
          yU = [],
          SU = [],
          IU = [],
          MU = [],
          bU = [],
          wU = [],
          WU = [],
          gU = [],
          HU = [],
          PU = [],
          kU = [],
          pU = [],
          dU = [],
          zU = [],
          NU = [],
          OU = [],
          TU = [],
          CU = [],
          uU = [],
          iU = [],
          RU = [],
          LU = [],
          aU = [],
          BU = [],
          tU = [],
          oU = [],
          lU = [],
          Je = [],
          ce = [],
          Ze = [],
          Fe = [],
          Ue = [],
          ee = [],
          Xe = [],
          Ae = [],
          qe = [],
          je = [],
          Ye = [],
          he = [],
          De = [],
          se = [],
          ne = [],
          Ge = [];
        return JJ = class extends yZ {
          get diffuseTexture() {
            return (0, FJ.b)(this, cJ, "f")
          }
          set diffuseTexture(JJ) {
            (0, FJ.c)(this, cJ, JJ, "f")
          }
          get ambientTexture() {
            return (0, FJ.b)(this, YJ, "f")
          }
          set ambientTexture(JJ) {
            (0, FJ.c)(this, YJ, JJ, "f")
          }
          get opacityTexture() {
            return (0, FJ.b)(this, sJ, "f")
          }
          set opacityTexture(JJ) {
            (0, FJ.c)(this, sJ, JJ, "f")
          }
          get reflectionTexture() {
            return (0, FJ.b)(this, KJ, "f")
          }
          set reflectionTexture(JJ) {
            (0, FJ.c)(this, KJ, JJ, "f")
          }
          get emissiveTexture() {
            return (0, FJ.b)(this, yJ, "f")
          }
          set emissiveTexture(JJ) {
            (0, FJ.c)(this, yJ, JJ, "f")
          }
          get specularTexture() {
            return (0, FJ.b)(this, SJ, "f")
          }
          set specularTexture(JJ) {
            (0, FJ.c)(this, SJ, JJ, "f")
          }
          get bumpTexture() {
            return (0, FJ.b)(this, IJ, "f")
          }
          set bumpTexture(JJ) {
            (0, FJ.c)(this, IJ, JJ, "f")
          }
          get lightmapTexture() {
            return (0, FJ.b)(this, MJ, "f")
          }
          set lightmapTexture(JJ) {
            (0, FJ.c)(this, MJ, JJ, "f")
          }
          get refractionTexture() {
            return (0, FJ.b)(this, wJ, "f")
          }
          set refractionTexture(JJ) {
            (0, FJ.c)(this, wJ, JJ, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, FJ.b)(this, HJ, "f")
          }
          set useAlphaFromDiffuseTexture(JJ) {
            (0, FJ.c)(this, HJ, JJ, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, FJ.b)(this, PJ, "f")
          }
          set useEmissiveAsIllumination(JJ) {
            (0, FJ.c)(this, PJ, JJ, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, FJ.b)(this, kJ, "f")
          }
          set linkEmissiveWithDiffuse(JJ) {
            (0, FJ.c)(this, kJ, JJ, "f")
          }
          get useSpecularOverAlpha() {
            return (0, FJ.b)(this, pJ, "f")
          }
          set useSpecularOverAlpha(JJ) {
            (0, FJ.c)(this, pJ, JJ, "f")
          }
          get useReflectionOverAlpha() {
            return (0, FJ.b)(this, dJ, "f")
          }
          set useReflectionOverAlpha(JJ) {
            (0, FJ.c)(this, dJ, JJ, "f")
          }
          get disableLighting() {
            return (0, FJ.b)(this, zJ, "f")
          }
          set disableLighting(JJ) {
            (0, FJ.c)(this, zJ, JJ, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, FJ.b)(this, NJ, "f")
          }
          set useObjectSpaceNormalMap(JJ) {
            (0, FJ.c)(this, NJ, JJ, "f")
          }
          get useParallax() {
            return (0, FJ.b)(this, OJ, "f")
          }
          set useParallax(JJ) {
            (0, FJ.c)(this, OJ, JJ, "f")
          }
          get useParallaxOcclusion() {
            return (0, FJ.b)(this, TJ, "f")
          }
          set useParallaxOcclusion(JJ) {
            (0, FJ.c)(this, TJ, JJ, "f")
          }
          get roughness() {
            return (0, FJ.b)(this, CJ, "f")
          }
          set roughness(JJ) {
            (0, FJ.c)(this, CJ, JJ, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, FJ.b)(this, uJ, "f")
          }
          set useLightmapAsShadowmap(JJ) {
            (0, FJ.c)(this, uJ, JJ, "f")
          }
          get diffuseFresnelParameters() {
            return (0, FJ.b)(this, iJ, "f")
          }
          set diffuseFresnelParameters(JJ) {
            (0, FJ.c)(this, iJ, JJ, "f")
          }
          get opacityFresnelParameters() {
            return (0, FJ.b)(this, RJ, "f")
          }
          set opacityFresnelParameters(JJ) {
            (0, FJ.c)(this, RJ, JJ, "f")
          }
          get reflectionFresnelParameters() {
            return (0, FJ.b)(this, LJ, "f")
          }
          set reflectionFresnelParameters(JJ) {
            (0, FJ.c)(this, LJ, JJ, "f")
          }
          get refractionFresnelParameters() {
            return (0, FJ.b)(this, aJ, "f")
          }
          set refractionFresnelParameters(JJ) {
            (0, FJ.c)(this, aJ, JJ, "f")
          }
          get emissiveFresnelParameters() {
            return (0, FJ.b)(this, BJ, "f")
          }
          set emissiveFresnelParameters(JJ) {
            (0, FJ.c)(this, BJ, JJ, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, FJ.b)(this, tJ, "f")
          }
          set useReflectionFresnelFromSpecular(JJ) {
            (0, FJ.c)(this, tJ, JJ, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, FJ.b)(this, oJ, "f")
          }
          set useGlossinessFromSpecularMapAlpha(JJ) {
            (0, FJ.c)(this, oJ, JJ, "f")
          }
          get maxSimultaneousLights() {
            return (0, FJ.b)(this, lJ, "f")
          }
          set maxSimultaneousLights(JJ) {
            (0, FJ.c)(this, lJ, JJ, "f")
          }
          get invertNormalMapX() {
            return (0, FJ.b)(this, Jc, "f")
          }
          set invertNormalMapX(JJ) {
            (0, FJ.c)(this, Jc, JJ, "f")
          }
          get invertNormalMapY() {
            return (0, FJ.b)(this, cc, "f")
          }
          set invertNormalMapY(JJ) {
            (0, FJ.c)(this, cc, JJ, "f")
          }
          get twoSidedLighting() {
            return (0, FJ.b)(this, Zc, "f")
          }
          set twoSidedLighting(JJ) {
            (0, FJ.c)(this, Zc, JJ, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, FJ.b)(this, Fc, "f")
          }
          set applyDecalMapAfterDetailMap(JJ) {
            (0, FJ.c)(this, Fc, JJ, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(ZJ, UJ) {
            super(ZJ, UJ, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || JJ.ForceGLSL), this._diffuseTexture = (0, FJ.e)(this, SZ, null), cJ.set(this, ((0, FJ.e)(this, IZ), (0, FJ.e)(this, MZ, void 0))), this._ambientTexture = ((0, FJ.e)(this, bZ), (0, FJ.e)(this, wZ, null)), YJ.set(this, ((0, FJ.e)(this, WZ), (0, FJ.e)(this, gZ, void 0))), this._opacityTexture = ((0, FJ.e)(this, HZ), (0, FJ.e)(this, PZ, null)), sJ.set(this, ((0, FJ.e)(this, kZ), (0, FJ.e)(this, pZ, void 0))), this._reflectionTexture = ((0, FJ.e)(this, dZ), (0, FJ.e)(this, zZ, null)), KJ.set(this, ((0, FJ.e)(this, NZ), (0, FJ.e)(this, OZ, void 0))), this._emissiveTexture = ((0, FJ.e)(this, TZ), (0, FJ.e)(this, CZ, null)), yJ.set(this, ((0, FJ.e)(this, uZ), (0, FJ.e)(this, iZ, void 0))), this._specularTexture = ((0, FJ.e)(this, RZ), (0, FJ.e)(this, LZ, null)), SJ.set(this, ((0, FJ.e)(this, aZ), (0, FJ.e)(this, BZ, void 0))), this._bumpTexture = ((0, FJ.e)(this, tZ), (0, FJ.e)(this, oZ, null)), IJ.set(this, ((0, FJ.e)(this, lZ), (0, FJ.e)(this, JF, void 0))), this._lightmapTexture = ((0, FJ.e)(this, cF), (0, FJ.e)(this, ZF, null)), MJ.set(this, ((0, FJ.e)(this, FF), (0, FJ.e)(this, UF, void 0))), this._refractionTexture = ((0, FJ.e)(this, eF), (0, FJ.e)(this, XF, null)), wJ.set(this, ((0, FJ.e)(this, AF), (0, FJ.e)(this, qF, void 0))), this.ambientColor = ((0, FJ.e)(this, jF), (0, FJ.e)(this, YF, new AJ.e(0, 0, 0))), this.diffuseColor = ((0, FJ.e)(this, hF), (0, FJ.e)(this, DF, new AJ.e(1, 1, 1))), this.specularColor = ((0, FJ.e)(this, sF), (0, FJ.e)(this, nF, new AJ.e(1, 1, 1))), this.emissiveColor = ((0, FJ.e)(this, GF), (0, FJ.e)(this, fF, new AJ.e(0, 0, 0))), this.specularPower = ((0, FJ.e)(this, xF), (0, FJ.e)(this, rF, 64)), this._useAlphaFromDiffuseTexture = ((0, FJ.e)(this, vF), (0, FJ.e)(this, mF, !1)), HJ.set(this, ((0, FJ.e)(this, QF), (0, FJ.e)(this, EF, void 0))), this._useEmissiveAsIllumination = ((0, FJ.e)(this, VF), (0, FJ.e)(this, KF, !1)), PJ.set(this, ((0, FJ.e)(this, yF), (0, FJ.e)(this, SF, void 0))), this._linkEmissiveWithDiffuse = ((0, FJ.e)(this, IF), (0, FJ.e)(this, MF, !1)), kJ.set(this, ((0, FJ.e)(this, bF), (0, FJ.e)(this, wF, void 0))), this._useSpecularOverAlpha = ((0, FJ.e)(this, WF), (0, FJ.e)(this, gF, !1)), pJ.set(this, ((0, FJ.e)(this, HF), (0, FJ.e)(this, PF, void 0))), this._useReflectionOverAlpha = ((0, FJ.e)(this, kF), (0, FJ.e)(this, pF, !1)), dJ.set(this, ((0, FJ.e)(this, dF), (0, FJ.e)(this, zF, void 0))), this._disableLighting = ((0, FJ.e)(this, NF), (0, FJ.e)(this, OF, !1)), zJ.set(this, ((0, FJ.e)(this, TF), (0, FJ.e)(this, CF, void 0))), this._useObjectSpaceNormalMap = ((0, FJ.e)(this, uF), (0, FJ.e)(this, iF, !1)), NJ.set(this, ((0, FJ.e)(this, RF), (0, FJ.e)(this, LF, void 0))), this._useParallax = ((0, FJ.e)(this, aF), (0, FJ.e)(this, BF, !1)), OJ.set(this, ((0, FJ.e)(this, tF), (0, FJ.e)(this, oF, void 0))), this._useParallaxOcclusion = ((0, FJ.e)(this, lF), (0, FJ.e)(this, JU, !1)), TJ.set(this, ((0, FJ.e)(this, cU), (0, FJ.e)(this, ZU, void 0))), this.parallaxScaleBias = ((0, FJ.e)(this, FU), (0, FJ.e)(this, UU, .05)), this._roughness = ((0, FJ.e)(this, eU), (0, FJ.e)(this, XU, 0)), CJ.set(this, ((0, FJ.e)(this, AU), (0, FJ.e)(this, qU, void 0))), this.indexOfRefraction = ((0, FJ.e)(this, jU), (0, FJ.e)(this, YU, .98)), this.invertRefractionY = ((0, FJ.e)(this, hU), (0, FJ.e)(this, DU, !0)), this.alphaCutOff = ((0, FJ.e)(this, sU), (0, FJ.e)(this, nU, .4)), this._useLightmapAsShadowmap = ((0, FJ.e)(this, GU), (0, FJ.e)(this, fU, !1)), uJ.set(this, ((0, FJ.e)(this, xU), (0, FJ.e)(this, rU, void 0))), this._diffuseFresnelParameters = ((0, FJ.e)(this, vU), (0, FJ.e)(this, mU, void 0)), iJ.set(this, ((0, FJ.e)(this, QU), (0, FJ.e)(this, EU, void 0))), this._opacityFresnelParameters = ((0, FJ.e)(this, VU), (0, FJ.e)(this, KU, void 0)), RJ.set(this, ((0, FJ.e)(this, yU), (0, FJ.e)(this, SU, void 0))), this._reflectionFresnelParameters = ((0, FJ.e)(this, IU), (0, FJ.e)(this, MU, void 0)), LJ.set(this, ((0, FJ.e)(this, bU), (0, FJ.e)(this, wU, void 0))), this._refractionFresnelParameters = ((0, FJ.e)(this, WU), (0, FJ.e)(this, gU, void 0)), aJ.set(this, ((0, FJ.e)(this, HU), (0, FJ.e)(this, PU, void 0))), this._emissiveFresnelParameters = ((0, FJ.e)(this, kU), (0, FJ.e)(this, pU, void 0)), BJ.set(this, ((0, FJ.e)(this, dU), (0, FJ.e)(this, zU, void 0))), this._useReflectionFresnelFromSpecular = ((0, FJ.e)(this, NU), (0, FJ.e)(this, OU, !1)), tJ.set(this, ((0, FJ.e)(this, TU), (0, FJ.e)(this, CU, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, FJ.e)(this, uU), (0, FJ.e)(this, iU, !1)), oJ.set(this, ((0, FJ.e)(this, RU), (0, FJ.e)(this, LU, void 0))), this._maxSimultaneousLights = ((0, FJ.e)(this, aU), (0, FJ.e)(this, BU, 4)), lJ.set(this, ((0, FJ.e)(this, tU), (0, FJ.e)(this, oU, void 0))), this._invertNormalMapX = ((0, FJ.e)(this, lU), (0, FJ.e)(this, Je, !1)), Jc.set(this, ((0, FJ.e)(this, ce), (0, FJ.e)(this, Ze, void 0))), this._invertNormalMapY = ((0, FJ.e)(this, Fe), (0, FJ.e)(this, Ue, !1)), cc.set(this, ((0, FJ.e)(this, ee), (0, FJ.e)(this, Xe, void 0))), this._twoSidedLighting = ((0, FJ.e)(this, Ae), (0, FJ.e)(this, qe, !1)), Zc.set(this, ((0, FJ.e)(this, je), (0, FJ.e)(this, Ye, void 0))), this._applyDecalMapAfterDetailMap = ((0, FJ.e)(this, he), (0, FJ.e)(this, De, !1)), Fc.set(this, ((0, FJ.e)(this, se), (0, FJ.e)(this, ne, void 0))), this._vertexPullingMetadata = ((0, FJ.e)(this, Ge), null), this._renderTargets = new eJ.c(16), this._globalAmbientColor = new AJ.e(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new xJ.d(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new jJ.e, this.getRenderTargetTextures = () => (this._renderTargets.reset(), JJ.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), JJ.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(JJ.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(JJ.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === DJ.c.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== DJ.c.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(cJ, ZJ) {
            let FJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const UJ = ZJ._drawWrapper;
            if (UJ.effect && this.isFrozen && UJ._wasPreviouslyReady && UJ._wasPreviouslyUsingInstances === FJ) return !0;
            ZJ.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), ZJ.materialDefines = new WJ(this._eventInfo.defineNames));
            const eJ = this.Qy(),
              XJ = ZJ.materialDefines;
            if (this._isReadyForSubMesh(ZJ)) return !0;
            const AJ = eJ.gn();
            if (XJ._needNormals = (0, mJ.V)(eJ, cJ, XJ, !0, this._maxSimultaneousLights, this._disableLighting), !(0, mJ.d)(eJ, cJ, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, mJ._)(eJ, XJ);
            const YJ = this.needAlphaBlendingForMesh(cJ) && this.Qy().useOrderIndependentTransparency;
            if ((0, mJ.eb)(eJ, XJ, this.canRenderToMRT && !YJ), (0, mJ.cb)(eJ, XJ, YJ), VJ.b.PrepareDefines(AJ.currentRenderPassId, cJ, XJ), XJ._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, XJ._needUVs = !1;
              for (let JJ = 1; JJ <= 6; ++JJ) XJ["MAINUV" + JJ] = !1;
              if (eJ.texturesEnabled) {
                if (XJ.DIFFUSEDIRECTUV = 0, XJ.BUMPDIRECTUV = 0, XJ.AMBIENTDIRECTUV = 0, XJ.OPACITYDIRECTUV = 0, XJ.EMISSIVEDIRECTUV = 0, XJ.SPECULARDIRECTUV = 0, XJ.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && JJ.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, mJ.X)(this._diffuseTexture, XJ, "DIFFUSE")
                } else XJ.DIFFUSE = !1;
                if (this._ambientTexture && JJ.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, mJ.X)(this._ambientTexture, XJ, "AMBIENT")
                } else XJ.AMBIENT = !1;
                if (this._opacityTexture && JJ.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, mJ.X)(this._opacityTexture, XJ, "OPACITY"), XJ.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else XJ.OPACITY = !1;
                if (this._reflectionTexture && JJ.ReflectionTextureEnabled ? (XJ.ROUGHNESS = this._roughness > 0, XJ.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (XJ.ROUGHNESS = !1, XJ.REFLECTIONOVERALPHA = !1), !(0, mJ.T)(eJ, this._reflectionTexture, XJ)) return !1;
                if (this._emissiveTexture && JJ.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, mJ.X)(this._emissiveTexture, XJ, "EMISSIVE")
                } else XJ.EMISSIVE = !1;
                if (this._lightmapTexture && JJ.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, mJ.X)(this._lightmapTexture, XJ, "LIGHTMAP"), XJ.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, XJ.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else XJ.LIGHTMAP = !1;
                if (this._specularTexture && JJ.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, mJ.X)(this._specularTexture, XJ, "SPECULAR"), XJ.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else XJ.SPECULAR = !1;
                if (eJ.gn().getCaps().standardDerivatives && this._bumpTexture && JJ.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, mJ.X)(this._bumpTexture, XJ, "BUMP"), XJ.PARALLAX = this._useParallax, XJ.PARALLAX_RHS = eJ.useRightHandedSystem, XJ.PARALLAXOCCLUSION = this._useParallaxOcclusion, XJ.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else XJ.BUMP = !1, XJ.PARALLAX = !1, XJ.PARALLAX_RHS = !1, XJ.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && JJ.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  XJ._needUVs = !0, XJ.REFRACTION = !0, XJ.REFRACTIONMAP_3D = this._refractionTexture.isCube, XJ.RGBDREFRACTION = this._refractionTexture.isRGBD, XJ.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else XJ.REFRACTION = !1;
                XJ.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else XJ.DIFFUSE = !1, XJ.AMBIENT = !1, XJ.OPACITY = !1, XJ.REFLECTION = !1, XJ.EMISSIVE = !1, XJ.LIGHTMAP = !1, XJ.BUMP = !1, XJ.REFRACTION = !1;
              XJ.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), XJ.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, XJ.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, XJ.SPECULAROVERALPHA = this._useSpecularOverAlpha, XJ.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, XJ.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, XJ.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(cJ), XJ.TEXTURE_REPETITION_MODE = AJ.version > 1 || AJ.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = XJ, this._eventInfo.subMesh = ZJ, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (XJ._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(XJ), XJ.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, XJ.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (XJ._areFresnelDirty && (JJ.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (XJ.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, XJ.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, XJ.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, XJ.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, XJ.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, XJ.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, XJ._needNormals = !0, XJ.FRESNEL = !0) : XJ.FRESNEL = !1), XJ.AREALIGHTUSED || XJ.CLUSTLIGHT_BATCH)
              for (let JJ = 0; JJ < cJ.lightSources.length; JJ++)
                if (!cJ.lightSources[JJ]._isReady()) return !1;
            (0, mJ.Y)(cJ, eJ, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(cJ), XJ, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ZJ.getRenderingMesh(), this._isVertexOutputInvariant), (0, mJ.P)(eJ, AJ, this, XJ, FJ, null, ZJ.getRenderingMesh().hasThinInstances), this._eventInfo.defines = XJ, this._eventInfo.mesh = cJ, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, mJ.L)(cJ, XJ, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let DJ = !1;
            if (XJ.isDirty) {
              const FJ = XJ._areLightsDisposed;
              XJ.markAsProcessed();
              const UJ = new fJ.b;
              XJ.REFLECTION && UJ.addFallback(0, "REFLECTION"), XJ.SPECULAR && UJ.addFallback(0, "SPECULAR"), XJ.BUMP && UJ.addFallback(0, "BUMP"), XJ.PARALLAX && UJ.addFallback(1, "PARALLAX"), XJ.PARALLAX_RHS && UJ.addFallback(1, "PARALLAX_RHS"), XJ.PARALLAXOCCLUSION && UJ.addFallback(0, "PARALLAXOCCLUSION"), XJ.SPECULAROVERALPHA && UJ.addFallback(0, "SPECULAROVERALPHA"), XJ.FOG && UJ.addFallback(1, "FOG"), XJ.POINTSIZE && UJ.addFallback(0, "POINTSIZE"), XJ.LOGARITHMICDEPTH && UJ.addFallback(0, "LOGARITHMICDEPTH"), (0, mJ.t)(XJ, UJ, this._maxSimultaneousLights), XJ.SPECULARTERM && UJ.addFallback(0, "SPECULARTERM"), XJ.DIFFUSEFRESNEL && UJ.addFallback(1, "DIFFUSEFRESNEL"), XJ.OPACITYFRESNEL && UJ.addFallback(2, "OPACITYFRESNEL"), XJ.REFLECTIONFRESNEL && UJ.addFallback(3, "REFLECTIONFRESNEL"), XJ.EMISSIVEFRESNEL && UJ.addFallback(4, "EMISSIVEFRESNEL"), XJ.FRESNEL && UJ.addFallback(4, "FRESNEL"), XJ.MULTIVIEW && UJ.addFallback(0, "MULTIVIEW");
              const YJ = [qJ.n.PositionKind];
              XJ.NORMAL && YJ.push(qJ.n.NormalKind), XJ.TANGENT && YJ.push(qJ.n.TangentKind);
              for (let JJ = 1; JJ <= 6; ++JJ) XJ["UV" + JJ] && YJ.push(`uv${1===JJ?"":JJ}`);
              XJ.VERTEXCOLOR && YJ.push(qJ.n.ColorKind), (0, mJ.z)(YJ, cJ, XJ, UJ), (0, mJ.D)(YJ, XJ), (0, mJ.H)(YJ, cJ, XJ), (0, mJ.w)(YJ, cJ, XJ);
              let sJ = "default";
              const nJ = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                GJ = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, mJ.kb)(nJ, GJ, !1);
              const xJ = ["Material", "Scene", "Mesh"],
                QJ = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: XJ.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = UJ, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = XJ, this._eventInfo.uniforms = nJ, this._eventInfo.attributes = YJ, this._eventInfo.samplers = GJ, this._eventInfo.uniformBuffersNames = xJ, this._eventInfo.customCode = void 0, this._eventInfo.mesh = cJ, this._eventInfo.indexParameters = QJ, this._callbackPluginEventGeneric(128, this._eventInfo), VJ.b.AddUniformsAndSamplers(nJ, GJ), jJ.e.AddUniforms(nJ), jJ.e.AddSamplers(GJ), hJ.e && (hJ.e.PrepareUniforms(nJ, XJ), hJ.e.PrepareSamplers(GJ, XJ)), (0, mJ.mb)({
                  uniformsNames: nJ,
                  uniformBuffersNames: xJ,
                  samplers: GJ,
                  defines: XJ,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, rJ.c)(nJ), this._useVertexPulling) {
                const JJ = ZJ.getRenderingMesh(),
                  cJ = JJ?.geometry;
                cJ && (this._vertexPullingMetadata = (0, vJ.f)(cJ), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((JJ, cJ) => {
                  nJ.push(`vp_${cJ}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const EJ = {};
              this.customShaderNameResolve && (sJ = this.customShaderNameResolve(sJ, nJ, xJ, GJ, XJ, YJ, EJ));
              const KJ = XJ.toString(),
                yJ = ZJ.effect,
                SJ = eJ.gn().createEffect(sJ, {
                  attributes: YJ,
                  uniformsNames: nJ,
                  uniformBuffersNames: xJ,
                  samplers: GJ,
                  defines: KJ,
                  fallbacks: UJ,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: QJ,
                  processFinalCode: EJ.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: XJ.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: JJ._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, AJ);
              if (this._eventInfo.customCode = void 0, SJ)
                if (this._onEffectCreatedObservable && (bJ.effect = SJ, bJ.subMesh = ZJ, this._onEffectCreatedObservable.notifyObservers(bJ)), this.allowShaderHotSwapping && yJ && !SJ.isReady()) {
                  if (XJ.markAsUnprocessed(), DJ = this.isFrozen, FJ) return XJ._areLightsDisposed = !0, !1
                } else eJ.resetCachedMaterial(), ZJ.setEffect(SJ, XJ, this._materialContext)
            }
            return !(!ZJ.effect || !ZJ.effect.isReady()) && (XJ._renderId = eJ.getRenderId(), UJ._wasPreviouslyReady = !DJ, UJ._wasPreviouslyUsingInstances = FJ, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const JJ = this._uniformBuffer;
            JJ.addUniform("diffuseLeftColor", 4), JJ.addUniform("diffuseRightColor", 4), JJ.addUniform("opacityParts", 4), JJ.addUniform("reflectionLeftColor", 4), JJ.addUniform("reflectionRightColor", 4), JJ.addUniform("refractionLeftColor", 4), JJ.addUniform("refractionRightColor", 4), JJ.addUniform("emissiveLeftColor", 4), JJ.addUniform("emissiveRightColor", 4), JJ.addUniform("vDiffuseInfos", 2), JJ.addUniform("vAmbientInfos", 2), JJ.addUniform("vOpacityInfos", 2), JJ.addUniform("vEmissiveInfos", 2), JJ.addUniform("vLightmapInfos", 2), JJ.addUniform("vSpecularInfos", 2), JJ.addUniform("vBumpInfos", 3), JJ.addUniform("diffuseMatrix", 16), JJ.addUniform("ambientMatrix", 16), JJ.addUniform("opacityMatrix", 16), JJ.addUniform("emissiveMatrix", 16), JJ.addUniform("lightmapMatrix", 16), JJ.addUniform("specularMatrix", 16), JJ.addUniform("bumpMatrix", 16), JJ.addUniform("vTangentSpaceParams", 2), JJ.addUniform("pointSize", 1), JJ.addUniform("alphaCutOff", 1), JJ.addUniform("refractionMatrix", 16), JJ.addUniform("vRefractionInfos", 4), JJ.addUniform("vRefractionPosition", 3), JJ.addUniform("vRefractionSize", 3), JJ.addUniform("vSpecularColor", 4), JJ.addUniform("vEmissiveColor", 3), JJ.addUniform("vDiffuseColor", 4), JJ.addUniform("vAmbientColor", 3), JJ.addUniform("cameraInfo", 4), JJ.addUniform("vTextureRepetitionHexTilingParams", 4), (0, mJ.gb)(JJ, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(cJ, ZJ, FJ) {
            const UJ = this.Qy(),
              eJ = FJ.materialDefines;
            if (!eJ) return;
            const qJ = FJ.effect;
            if (!qJ) return;
            this._activeEffect = qJ, ZJ.getMeshUniformBuffer().bindToEffect(qJ, "Mesh"), ZJ.transferToEffect(cJ), this._uniformBuffer.bindToEffect(qJ, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, UJ, ZJ, cJ, this.isFrozen), VJ.b.Bind(UJ.gn().currentRenderPassId, this._activeEffect, ZJ, cJ, this);
            const jJ = UJ.activeCamera;
            jJ ? this._uniformBuffer.updateFloat4("cameraInfo", jJ.minZ, jJ.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const YJ = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", YJ[0], YJ[1], YJ[2], YJ[3]), this._eventInfo.subMesh = FJ, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), eJ.OBJECTSPACE_NORMALMAP && (cJ.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const hJ = this._mustRebind(UJ, qJ, FJ, ZJ.visibility),
              DJ = UJ.gn()._features.needToAlwaysBindUniformBuffers;
            (0, mJ.e)(ZJ, qJ), this._vertexPullingMetadata && (0, vJ.d)(qJ, this._vertexPullingMetadata);
            const sJ = this._uniformBuffer;
            if (hJ) {
              if (this.bindViewProjection(qJ), !sJ.useUbo || !this.isFrozen || !sJ.isSync || FJ._drawWrapper._forceRebindOnNextCall) {
                if (JJ.FresnelEnabled && eJ.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (sJ.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), sJ.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const JJ = AJ.h.Color3[0];
                    JJ.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), sJ.updateColor4("opacityParts", JJ, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (sJ.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), sJ.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (sJ.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), sJ.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (sJ.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), sJ.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (eJ.ALPHATEST && sJ.updateFloat("alphaCutOff", this.alphaCutOff), UJ.texturesEnabled && (this._diffuseTexture && JJ.DiffuseTextureEnabled && (sJ.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, mJ.q)(this._diffuseTexture, sJ, "diffuse")), this._ambientTexture && JJ.AmbientTextureEnabled && (sJ.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, mJ.q)(this._ambientTexture, sJ, "ambient")), this._opacityTexture && JJ.OpacityTextureEnabled && (sJ.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, mJ.q)(this._opacityTexture, sJ, "opacity")), (0, mJ.i)(UJ, eJ, sJ, AJ.e.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && JJ.ReflectionTextureEnabled || sJ.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && JJ.EmissiveTextureEnabled && (sJ.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, mJ.q)(this._emissiveTexture, sJ, "emissive")), this._lightmapTexture && JJ.LightmapTextureEnabled && (sJ.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, mJ.q)(this._lightmapTexture, sJ, "lightmap")), this._specularTexture && JJ.SpecularTextureEnabled && (sJ.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, mJ.q)(this._specularTexture, sJ, "specular")), this._bumpTexture && UJ.gn().getCaps().standardDerivatives && JJ.BumpTextureEnabled && (sJ.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, mJ.q)(this._bumpTexture, sJ, "bump"), UJ._mirroredCameraPosition ? sJ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : sJ.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && JJ.RefractionTextureEnabled)) {
                  let JJ = 1;
                  if (this._refractionTexture.isCube || (sJ.Y5("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (JJ = this._refractionTexture.depth)), sJ.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, JJ, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const JJ = this._refractionTexture;
                    sJ.updateVector3("vRefractionPosition", JJ.boundingBoxPosition), sJ.updateVector3("vRefractionSize", JJ.boundingBoxSize)
                  }
                }
                this.pointsCloud && sJ.updateFloat("pointSize", this.pointSize), sJ.updateColor4("vSpecularColor", this.specularColor, this.specularPower), sJ.updateColor3("vEmissiveColor", JJ.EmissiveTextureEnabled ? this.emissiveColor : AJ.e.BlackReadOnly), sJ.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), UJ.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), sJ.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              UJ.texturesEnabled && (this._diffuseTexture && JJ.DiffuseTextureEnabled && qJ.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && JJ.AmbientTextureEnabled && qJ.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && JJ.OpacityTextureEnabled && qJ.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && JJ.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? qJ.setTexture("reflectionCubeSampler", this._reflectionTexture) : qJ.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && JJ.EmissiveTextureEnabled && qJ.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && JJ.LightmapTextureEnabled && qJ.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && JJ.SpecularTextureEnabled && qJ.setTexture("specularSampler", this._specularTexture), this._bumpTexture && UJ.gn().getCaps().standardDerivatives && JJ.BumpTextureEnabled && qJ.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && JJ.RefractionTextureEnabled && (this._refractionTexture.isCube ? qJ.setTexture("refractionCubeSampler", this._refractionTexture) : qJ.setTexture("refraction2DSampler", this._refractionTexture))), this.Qy().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(ZJ) && this.Qy().depthPeelingRenderer.bind(qJ), this._eventInfo.subMesh = FJ, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, rJ.e)(qJ, this, UJ), this.bindEyePosition(qJ)
            } else DJ && (this._needToBindSceneUbo = !0);
            !hJ && this.isFrozen && !DJ || !UJ.lightsEnabled || this._disableLighting || (0, mJ.k)(UJ, ZJ, qJ, eJ, this._maxSimultaneousLights), !hJ && this.isFrozen || ((UJ.fogEnabled && ZJ.applyFog && UJ.fogMode !== XJ.e.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || ZJ.receiveShadows || eJ.PREPASS || eJ.CLUSTLIGHT_BATCH) && this.bindView(qJ), (0, mJ.h)(UJ, ZJ, qJ), eJ.NUM_MORPH_INFLUENCERS && (0, mJ.m)(ZJ, qJ), eJ.BAKED_VERTEX_ANIMATION_TEXTURE && ZJ.bakedVertexAnimationManager?.bind(qJ, eJ.INSTANCES), this.useLogarithmicDepth && (0, mJ.l)(eJ, qJ, UJ), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(ZJ, this._activeEffect, FJ), sJ.update()
          }
          _canBindRunFollower(cJ, ZJ, FJ, UJ, eJ) {
            const XJ = cJ.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === JJ.prototype.isReadyForSubMesh && this.bindForSubMesh === JJ.prototype.bindForSubMesh && this._mustRebind === nJ.d.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !ZJ._features.needToAlwaysBindUniformBuffers && !(XJ && XJ.enabled && XJ.currentRTisSceneRT) && !VJ.b._Configurations[ZJ.currentRenderPassId] && !UJ.materialDefines?.OBJECTSPACE_NORMALMAP && !FJ.skeleton && !eJ._bonesComputationForcedToCPU
          }
          _bindRunFollower(JJ, cJ, ZJ, FJ) {
            this._activeEffect = FJ, cJ.getMeshUniformBuffer().bindToEffect(FJ, "Mesh"), cJ.transferToEffect(JJ);
            const UJ = this._uniformBuffer;
            UJ.bindToEffect(FJ, "Material");
            const eJ = this._scene.activeCamera;
            eJ ? UJ.updateFloat4("cameraInfo", eJ.minZ, eJ.maxZ, 0, 0) : UJ.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const XJ = this.textureRepetitionHexTilingParams;
            UJ.updateFloat4("vTextureRepetitionHexTilingParams", XJ[0], XJ[1], XJ[2], XJ[3]), this._afterBind(cJ, FJ, ZJ), UJ.update()
          }
          getAnimatables() {
            const JJ = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && JJ.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && JJ.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && JJ.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && JJ.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && JJ.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && JJ.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && JJ.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && JJ.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && JJ.push(this._refractionTexture), JJ
          }
          getActiveTextures() {
            const JJ = super.getActiveTextures();
            return this._diffuseTexture && JJ.push(this._diffuseTexture), this._ambientTexture && JJ.push(this._ambientTexture), this._opacityTexture && JJ.push(this._opacityTexture), this._reflectionTexture && JJ.push(this._reflectionTexture), this._emissiveTexture && JJ.push(this._emissiveTexture), this._specularTexture && JJ.push(this._specularTexture), this._bumpTexture && JJ.push(this._bumpTexture), this._lightmapTexture && JJ.push(this._lightmapTexture), this._refractionTexture && JJ.push(this._refractionTexture), JJ
          }
          hasTexture(JJ) {
            return !!super.hasTexture(JJ) || (this._diffuseTexture === JJ || (this._ambientTexture === JJ || (this._opacityTexture === JJ || (this._reflectionTexture === JJ || (this._emissiveTexture === JJ || (this._specularTexture === JJ || (this._bumpTexture === JJ || (this._lightmapTexture === JJ || this._refractionTexture === JJ))))))))
          }
          dispose(JJ, cJ) {
            cJ && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(JJ, cJ)
          }
          clone(cJ) {
            let ZJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              FJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const UJ = QJ.c.Clone((() => new JJ(cJ, this.Qy())), this, {
              cloneTexturesOnlyOnce: ZJ
            });
            return UJ.name = cJ, UJ.id = cJ, this.stencil.copyTo(UJ.stencil), this._clonePlugins(UJ, FJ), UJ
          }
          static Parse(cJ, ZJ, FJ) {
            const UJ = QJ.c.Parse((() => new JJ(cJ.name, ZJ)), cJ, ZJ, FJ);
            return cJ.stencil && UJ.stencil.parse(cJ.stencil, ZJ, FJ), DJ.c._ParsePlugins(cJ, UJ, ZJ, FJ), UJ
          }
          static get DiffuseTextureEnabled() {
            return GJ.d.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(JJ) {
            GJ.d.DiffuseTextureEnabled = JJ
          }
          static get DetailTextureEnabled() {
            return GJ.d.DetailTextureEnabled
          }
          static set DetailTextureEnabled(JJ) {
            GJ.d.DetailTextureEnabled = JJ
          }
          static get AmbientTextureEnabled() {
            return GJ.d.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(JJ) {
            GJ.d.AmbientTextureEnabled = JJ
          }
          static get OpacityTextureEnabled() {
            return GJ.d.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(JJ) {
            GJ.d.OpacityTextureEnabled = JJ
          }
          static get ReflectionTextureEnabled() {
            return GJ.d.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(JJ) {
            GJ.d.ReflectionTextureEnabled = JJ
          }
          static get EmissiveTextureEnabled() {
            return GJ.d.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(JJ) {
            GJ.d.EmissiveTextureEnabled = JJ
          }
          static get SpecularTextureEnabled() {
            return GJ.d.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(JJ) {
            GJ.d.SpecularTextureEnabled = JJ
          }
          static get BumpTextureEnabled() {
            return GJ.d.BumpTextureEnabled
          }
          static set BumpTextureEnabled(JJ) {
            GJ.d.BumpTextureEnabled = JJ
          }
          static get LightmapTextureEnabled() {
            return GJ.d.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(JJ) {
            GJ.d.LightmapTextureEnabled = JJ
          }
          static get RefractionTextureEnabled() {
            return GJ.d.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(JJ) {
            GJ.d.RefractionTextureEnabled = JJ
          }
          static get ColorGradingTextureEnabled() {
            return GJ.d.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(JJ) {
            GJ.d.ColorGradingTextureEnabled = JJ
          }
          static get FresnelEnabled() {
            return GJ.d.FresnelEnabled
          }
          static set FresnelEnabled(JJ) {
            GJ.d.FresnelEnabled = JJ
          }
        }, cJ = new WeakMap, YJ = new WeakMap, sJ = new WeakMap, KJ = new WeakMap, yJ = new WeakMap, SJ = new WeakMap, IJ = new WeakMap, MJ = new WeakMap, wJ = new WeakMap, HJ = new WeakMap, PJ = new WeakMap, kJ = new WeakMap, pJ = new WeakMap, dJ = new WeakMap, zJ = new WeakMap, NJ = new WeakMap, OJ = new WeakMap, TJ = new WeakMap, CJ = new WeakMap, uJ = new WeakMap, iJ = new WeakMap, RJ = new WeakMap, LJ = new WeakMap, aJ = new WeakMap, BJ = new WeakMap, tJ = new WeakMap, oJ = new WeakMap, lJ = new WeakMap, Jc = new WeakMap, cc = new WeakMap, Zc = new WeakMap, Fc = new WeakMap, (() => {
          const cJ = "function" === typeof Symbol && Symbol.metadata ? Object.create(yZ[Symbol.metadata] ?? null) : void 0;
          Uc = [(0, UJ.A)("diffuseTexture")], ec = [(0, UJ.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], Xc = [(0, UJ.A)("ambientTexture")], Ac = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], qc = [(0, UJ.A)("opacityTexture")], jc = [(0, UJ.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], Yc = [(0, UJ.A)("reflectionTexture")], hc = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], Dc = [(0, UJ.A)("emissiveTexture")], sc = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], nc = [(0, UJ.A)("specularTexture")], Gc = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], fc = [(0, UJ.A)("bumpTexture")], xc = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], rc = [(0, UJ.A)("lightmapTexture")], vc = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], mc = [(0, UJ.A)("refractionTexture")], Qc = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], Ec = [(0, UJ.m)("ambient")], Vc = [(0, UJ.m)("diffuse")], Kc = [(0, UJ.m)("specular")], yc = [(0, UJ.m)("emissive")], Sc = [(0, UJ.F)()], Ic = [(0, UJ.F)("useAlphaFromDiffuseTexture")], Mc = [() => ({
            init(JJ) {
              return void 0 === JJ && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = JJ), JJ
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(JJ) {
              this._useAlphaFromDiffuseTexture = JJ
            }
          })], bc = [(0, UJ.F)("useEmissiveAsIllumination")], wc = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], Wc = [(0, UJ.F)("linkEmissiveWithDiffuse")], gc = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], Hc = [(0, UJ.F)("useSpecularOverAlpha")], Pc = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], kc = [(0, UJ.F)("useReflectionOverAlpha")], pc = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], dc = [(0, UJ.F)("disableLighting")], zc = [(0, UJ.f)("_markAllSubMeshesAsLightsDirty")], Nc = [(0, UJ.F)("useObjectSpaceNormalMap")], Oc = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], Tc = [(0, UJ.F)("useParallax")], Cc = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], uc = [(0, UJ.F)("useParallaxOcclusion")], ic = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], Rc = [(0, UJ.F)()], Lc = [(0, UJ.F)("roughness")], ac = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], Bc = [(0, UJ.F)()], tc = [(0, UJ.F)()], oc = [(0, UJ.F)()], lc = [(0, UJ.F)("useLightmapAsShadowmap")], JZ = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], cZ = [(0, UJ.s)("diffuseFresnelParameters")], ZZ = [(0, UJ.f)("_markAllSubMeshesAsFresnelDirty")], FZ = [(0, UJ.s)("opacityFresnelParameters")], UZ = [(0, UJ.f)("_markAllSubMeshesAsFresnelAndMiscDirty")], eZ = [(0, UJ.s)("reflectionFresnelParameters")], XZ = [(0, UJ.f)("_markAllSubMeshesAsFresnelDirty")], AZ = [(0, UJ.s)("refractionFresnelParameters")], qZ = [(0, UJ.f)("_markAllSubMeshesAsFresnelDirty")], jZ = [(0, UJ.s)("emissiveFresnelParameters")], YZ = [(0, UJ.f)("_markAllSubMeshesAsFresnelDirty")], hZ = [(0, UJ.F)("useReflectionFresnelFromSpecular")], DZ = [(0, UJ.f)("_markAllSubMeshesAsFresnelDirty")], sZ = [(0, UJ.F)("useGlossinessFromSpecularMapAlpha")], nZ = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], GZ = [(0, UJ.F)("maxSimultaneousLights")], fZ = [(0, UJ.f)("_markAllSubMeshesAsLightsDirty")], xZ = [(0, UJ.F)("invertNormalMapX")], rZ = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], vZ = [(0, UJ.F)("invertNormalMapY")], mZ = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], QZ = [(0, UJ.F)("twoSidedLighting")], EZ = [(0, UJ.f)("_markAllSubMeshesAsTexturesDirty")], VZ = [(0, UJ.F)("applyDecalMapAfterDetailMap")], KZ = [(0, UJ.f)("_markAllSubMeshesAsMiscDirty")], (0, FJ.d)(JJ, null, ec, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "diffuseTexture" in JJ,
              get: JJ => JJ.diffuseTexture,
              set: (JJ, cJ) => {
                JJ.diffuseTexture = cJ
              }
            },
            metadata: cJ
          }, MZ, bZ), (0, FJ.d)(JJ, null, Ac, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "ambientTexture" in JJ,
              get: JJ => JJ.ambientTexture,
              set: (JJ, cJ) => {
                JJ.ambientTexture = cJ
              }
            },
            metadata: cJ
          }, gZ, HZ), (0, FJ.d)(JJ, null, jc, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "opacityTexture" in JJ,
              get: JJ => JJ.opacityTexture,
              set: (JJ, cJ) => {
                JJ.opacityTexture = cJ
              }
            },
            metadata: cJ
          }, pZ, dZ), (0, FJ.d)(JJ, null, hc, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "reflectionTexture" in JJ,
              get: JJ => JJ.reflectionTexture,
              set: (JJ, cJ) => {
                JJ.reflectionTexture = cJ
              }
            },
            metadata: cJ
          }, OZ, TZ), (0, FJ.d)(JJ, null, sc, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "emissiveTexture" in JJ,
              get: JJ => JJ.emissiveTexture,
              set: (JJ, cJ) => {
                JJ.emissiveTexture = cJ
              }
            },
            metadata: cJ
          }, iZ, RZ), (0, FJ.d)(JJ, null, Gc, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "specularTexture" in JJ,
              get: JJ => JJ.specularTexture,
              set: (JJ, cJ) => {
                JJ.specularTexture = cJ
              }
            },
            metadata: cJ
          }, BZ, tZ), (0, FJ.d)(JJ, null, xc, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "bumpTexture" in JJ,
              get: JJ => JJ.bumpTexture,
              set: (JJ, cJ) => {
                JJ.bumpTexture = cJ
              }
            },
            metadata: cJ
          }, JF, cF), (0, FJ.d)(JJ, null, vc, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "lightmapTexture" in JJ,
              get: JJ => JJ.lightmapTexture,
              set: (JJ, cJ) => {
                JJ.lightmapTexture = cJ
              }
            },
            metadata: cJ
          }, UF, eF), (0, FJ.d)(JJ, null, Qc, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "refractionTexture" in JJ,
              get: JJ => JJ.refractionTexture,
              set: (JJ, cJ) => {
                JJ.refractionTexture = cJ
              }
            },
            metadata: cJ
          }, qF, jF), (0, FJ.d)(JJ, null, Mc, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useAlphaFromDiffuseTexture" in JJ,
              get: JJ => JJ.useAlphaFromDiffuseTexture,
              set: (JJ, cJ) => {
                JJ.useAlphaFromDiffuseTexture = cJ
              }
            },
            metadata: cJ
          }, EF, VF), (0, FJ.d)(JJ, null, wc, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useEmissiveAsIllumination" in JJ,
              get: JJ => JJ.useEmissiveAsIllumination,
              set: (JJ, cJ) => {
                JJ.useEmissiveAsIllumination = cJ
              }
            },
            metadata: cJ
          }, SF, IF), (0, FJ.d)(JJ, null, gc, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: JJ => "linkEmissiveWithDiffuse" in JJ,
              get: JJ => JJ.linkEmissiveWithDiffuse,
              set: (JJ, cJ) => {
                JJ.linkEmissiveWithDiffuse = cJ
              }
            },
            metadata: cJ
          }, wF, WF), (0, FJ.d)(JJ, null, Pc, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useSpecularOverAlpha" in JJ,
              get: JJ => JJ.useSpecularOverAlpha,
              set: (JJ, cJ) => {
                JJ.useSpecularOverAlpha = cJ
              }
            },
            metadata: cJ
          }, PF, kF), (0, FJ.d)(JJ, null, pc, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useReflectionOverAlpha" in JJ,
              get: JJ => JJ.useReflectionOverAlpha,
              set: (JJ, cJ) => {
                JJ.useReflectionOverAlpha = cJ
              }
            },
            metadata: cJ
          }, zF, NF), (0, FJ.d)(JJ, null, zc, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: JJ => "disableLighting" in JJ,
              get: JJ => JJ.disableLighting,
              set: (JJ, cJ) => {
                JJ.disableLighting = cJ
              }
            },
            metadata: cJ
          }, CF, uF), (0, FJ.d)(JJ, null, Oc, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useObjectSpaceNormalMap" in JJ,
              get: JJ => JJ.useObjectSpaceNormalMap,
              set: (JJ, cJ) => {
                JJ.useObjectSpaceNormalMap = cJ
              }
            },
            metadata: cJ
          }, LF, aF), (0, FJ.d)(JJ, null, Cc, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useParallax" in JJ,
              get: JJ => JJ.useParallax,
              set: (JJ, cJ) => {
                JJ.useParallax = cJ
              }
            },
            metadata: cJ
          }, oF, lF), (0, FJ.d)(JJ, null, ic, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useParallaxOcclusion" in JJ,
              get: JJ => JJ.useParallaxOcclusion,
              set: (JJ, cJ) => {
                JJ.useParallaxOcclusion = cJ
              }
            },
            metadata: cJ
          }, ZU, FU), (0, FJ.d)(JJ, null, ac, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: JJ => "roughness" in JJ,
              get: JJ => JJ.roughness,
              set: (JJ, cJ) => {
                JJ.roughness = cJ
              }
            },
            metadata: cJ
          }, qU, jU), (0, FJ.d)(JJ, null, JZ, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useLightmapAsShadowmap" in JJ,
              get: JJ => JJ.useLightmapAsShadowmap,
              set: (JJ, cJ) => {
                JJ.useLightmapAsShadowmap = cJ
              }
            },
            metadata: cJ
          }, rU, vU), (0, FJ.d)(JJ, null, ZZ, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: JJ => "diffuseFresnelParameters" in JJ,
              get: JJ => JJ.diffuseFresnelParameters,
              set: (JJ, cJ) => {
                JJ.diffuseFresnelParameters = cJ
              }
            },
            metadata: cJ
          }, EU, VU), (0, FJ.d)(JJ, null, UZ, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: JJ => "opacityFresnelParameters" in JJ,
              get: JJ => JJ.opacityFresnelParameters,
              set: (JJ, cJ) => {
                JJ.opacityFresnelParameters = cJ
              }
            },
            metadata: cJ
          }, SU, IU), (0, FJ.d)(JJ, null, XZ, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: JJ => "reflectionFresnelParameters" in JJ,
              get: JJ => JJ.reflectionFresnelParameters,
              set: (JJ, cJ) => {
                JJ.reflectionFresnelParameters = cJ
              }
            },
            metadata: cJ
          }, wU, WU), (0, FJ.d)(JJ, null, qZ, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: JJ => "refractionFresnelParameters" in JJ,
              get: JJ => JJ.refractionFresnelParameters,
              set: (JJ, cJ) => {
                JJ.refractionFresnelParameters = cJ
              }
            },
            metadata: cJ
          }, PU, kU), (0, FJ.d)(JJ, null, YZ, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: JJ => "emissiveFresnelParameters" in JJ,
              get: JJ => JJ.emissiveFresnelParameters,
              set: (JJ, cJ) => {
                JJ.emissiveFresnelParameters = cJ
              }
            },
            metadata: cJ
          }, zU, NU), (0, FJ.d)(JJ, null, DZ, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useReflectionFresnelFromSpecular" in JJ,
              get: JJ => JJ.useReflectionFresnelFromSpecular,
              set: (JJ, cJ) => {
                JJ.useReflectionFresnelFromSpecular = cJ
              }
            },
            metadata: cJ
          }, CU, uU), (0, FJ.d)(JJ, null, nZ, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: JJ => "useGlossinessFromSpecularMapAlpha" in JJ,
              get: JJ => JJ.useGlossinessFromSpecularMapAlpha,
              set: (JJ, cJ) => {
                JJ.useGlossinessFromSpecularMapAlpha = cJ
              }
            },
            metadata: cJ
          }, LU, aU), (0, FJ.d)(JJ, null, fZ, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: JJ => "maxSimultaneousLights" in JJ,
              get: JJ => JJ.maxSimultaneousLights,
              set: (JJ, cJ) => {
                JJ.maxSimultaneousLights = cJ
              }
            },
            metadata: cJ
          }, oU, lU), (0, FJ.d)(JJ, null, rZ, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: JJ => "invertNormalMapX" in JJ,
              get: JJ => JJ.invertNormalMapX,
              set: (JJ, cJ) => {
                JJ.invertNormalMapX = cJ
              }
            },
            metadata: cJ
          }, Ze, Fe), (0, FJ.d)(JJ, null, mZ, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: JJ => "invertNormalMapY" in JJ,
              get: JJ => JJ.invertNormalMapY,
              set: (JJ, cJ) => {
                JJ.invertNormalMapY = cJ
              }
            },
            metadata: cJ
          }, Xe, Ae), (0, FJ.d)(JJ, null, EZ, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: JJ => "twoSidedLighting" in JJ,
              get: JJ => JJ.twoSidedLighting,
              set: (JJ, cJ) => {
                JJ.twoSidedLighting = cJ
              }
            },
            metadata: cJ
          }, Ye, he), (0, FJ.d)(JJ, null, KZ, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: JJ => "applyDecalMapAfterDetailMap" in JJ,
              get: JJ => JJ.applyDecalMapAfterDetailMap,
              set: (JJ, cJ) => {
                JJ.applyDecalMapAfterDetailMap = cJ
              }
            },
            metadata: cJ
          }, ne, Ge), (0, FJ.d)(null, null, Uc, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_diffuseTexture" in JJ,
              get: JJ => JJ._diffuseTexture,
              set: (JJ, cJ) => {
                JJ._diffuseTexture = cJ
              }
            },
            metadata: cJ
          }, SZ, IZ), (0, FJ.d)(null, null, Xc, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_ambientTexture" in JJ,
              get: JJ => JJ._ambientTexture,
              set: (JJ, cJ) => {
                JJ._ambientTexture = cJ
              }
            },
            metadata: cJ
          }, wZ, WZ), (0, FJ.d)(null, null, qc, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_opacityTexture" in JJ,
              get: JJ => JJ._opacityTexture,
              set: (JJ, cJ) => {
                JJ._opacityTexture = cJ
              }
            },
            metadata: cJ
          }, PZ, kZ), (0, FJ.d)(null, null, Yc, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_reflectionTexture" in JJ,
              get: JJ => JJ._reflectionTexture,
              set: (JJ, cJ) => {
                JJ._reflectionTexture = cJ
              }
            },
            metadata: cJ
          }, zZ, NZ), (0, FJ.d)(null, null, Dc, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_emissiveTexture" in JJ,
              get: JJ => JJ._emissiveTexture,
              set: (JJ, cJ) => {
                JJ._emissiveTexture = cJ
              }
            },
            metadata: cJ
          }, CZ, uZ), (0, FJ.d)(null, null, nc, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_specularTexture" in JJ,
              get: JJ => JJ._specularTexture,
              set: (JJ, cJ) => {
                JJ._specularTexture = cJ
              }
            },
            metadata: cJ
          }, LZ, aZ), (0, FJ.d)(null, null, fc, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_bumpTexture" in JJ,
              get: JJ => JJ._bumpTexture,
              set: (JJ, cJ) => {
                JJ._bumpTexture = cJ
              }
            },
            metadata: cJ
          }, oZ, lZ), (0, FJ.d)(null, null, rc, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_lightmapTexture" in JJ,
              get: JJ => JJ._lightmapTexture,
              set: (JJ, cJ) => {
                JJ._lightmapTexture = cJ
              }
            },
            metadata: cJ
          }, ZF, FF), (0, FJ.d)(null, null, mc, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_refractionTexture" in JJ,
              get: JJ => JJ._refractionTexture,
              set: (JJ, cJ) => {
                JJ._refractionTexture = cJ
              }
            },
            metadata: cJ
          }, XF, AF), (0, FJ.d)(null, null, Ec, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "ambientColor" in JJ,
              get: JJ => JJ.ambientColor,
              set: (JJ, cJ) => {
                JJ.ambientColor = cJ
              }
            },
            metadata: cJ
          }, YF, hF), (0, FJ.d)(null, null, Vc, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "diffuseColor" in JJ,
              get: JJ => JJ.diffuseColor,
              set: (JJ, cJ) => {
                JJ.diffuseColor = cJ
              }
            },
            metadata: cJ
          }, DF, sF), (0, FJ.d)(null, null, Kc, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "specularColor" in JJ,
              get: JJ => JJ.specularColor,
              set: (JJ, cJ) => {
                JJ.specularColor = cJ
              }
            },
            metadata: cJ
          }, nF, GF), (0, FJ.d)(null, null, yc, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: JJ => "emissiveColor" in JJ,
              get: JJ => JJ.emissiveColor,
              set: (JJ, cJ) => {
                JJ.emissiveColor = cJ
              }
            },
            metadata: cJ
          }, fF, xF), (0, FJ.d)(null, null, Sc, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: JJ => "specularPower" in JJ,
              get: JJ => JJ.specularPower,
              set: (JJ, cJ) => {
                JJ.specularPower = cJ
              }
            },
            metadata: cJ
          }, rF, vF), (0, FJ.d)(null, null, Ic, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_useAlphaFromDiffuseTexture" in JJ,
              get: JJ => JJ._useAlphaFromDiffuseTexture,
              set: (JJ, cJ) => {
                JJ._useAlphaFromDiffuseTexture = cJ
              }
            },
            metadata: cJ
          }, mF, QF), (0, FJ.d)(null, null, bc, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_useEmissiveAsIllumination" in JJ,
              get: JJ => JJ._useEmissiveAsIllumination,
              set: (JJ, cJ) => {
                JJ._useEmissiveAsIllumination = cJ
              }
            },
            metadata: cJ
          }, KF, yF), (0, FJ.d)(null, null, Wc, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_linkEmissiveWithDiffuse" in JJ,
              get: JJ => JJ._linkEmissiveWithDiffuse,
              set: (JJ, cJ) => {
                JJ._linkEmissiveWithDiffuse = cJ
              }
            },
            metadata: cJ
          }, MF, bF), (0, FJ.d)(null, null, Hc, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_useSpecularOverAlpha" in JJ,
              get: JJ => JJ._useSpecularOverAlpha,
              set: (JJ, cJ) => {
                JJ._useSpecularOverAlpha = cJ
              }
            },
            metadata: cJ
          }, gF, HF), (0, FJ.d)(null, null, kc, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_useReflectionOverAlpha" in JJ,
              get: JJ => JJ._useReflectionOverAlpha,
              set: (JJ, cJ) => {
                JJ._useReflectionOverAlpha = cJ
              }
            },
            metadata: cJ
          }, pF, dF), (0, FJ.d)(null, null, dc, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_disableLighting" in JJ,
              get: JJ => JJ._disableLighting,
              set: (JJ, cJ) => {
                JJ._disableLighting = cJ
              }
            },
            metadata: cJ
          }, OF, TF), (0, FJ.d)(null, null, Nc, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_useObjectSpaceNormalMap" in JJ,
              get: JJ => JJ._useObjectSpaceNormalMap,
              set: (JJ, cJ) => {
                JJ._useObjectSpaceNormalMap = cJ
              }
            },
            metadata: cJ
          }, iF, RF), (0, FJ.d)(null, null, Tc, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_useParallax" in JJ,
              get: JJ => JJ._useParallax,
              set: (JJ, cJ) => {
                JJ._useParallax = cJ
              }
            },
            metadata: cJ
          }, BF, tF), (0, FJ.d)(null, null, uc, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_useParallaxOcclusion" in JJ,
              get: JJ => JJ._useParallaxOcclusion,
              set: (JJ, cJ) => {
                JJ._useParallaxOcclusion = cJ
              }
            },
            metadata: cJ
          }, JU, cU), (0, FJ.d)(null, null, Rc, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: JJ => "parallaxScaleBias" in JJ,
              get: JJ => JJ.parallaxScaleBias,
              set: (JJ, cJ) => {
                JJ.parallaxScaleBias = cJ
              }
            },
            metadata: cJ
          }, UU, eU), (0, FJ.d)(null, null, Lc, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_roughness" in JJ,
              get: JJ => JJ._roughness,
              set: (JJ, cJ) => {
                JJ._roughness = cJ
              }
            },
            metadata: cJ
          }, XU, AU), (0, FJ.d)(null, null, Bc, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: JJ => "indexOfRefraction" in JJ,
              get: JJ => JJ.indexOfRefraction,
              set: (JJ, cJ) => {
                JJ.indexOfRefraction = cJ
              }
            },
            metadata: cJ
          }, YU, hU), (0, FJ.d)(null, null, tc, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: JJ => "invertRefractionY" in JJ,
              get: JJ => JJ.invertRefractionY,
              set: (JJ, cJ) => {
                JJ.invertRefractionY = cJ
              }
            },
            metadata: cJ
          }, DU, sU), (0, FJ.d)(null, null, oc, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: JJ => "alphaCutOff" in JJ,
              get: JJ => JJ.alphaCutOff,
              set: (JJ, cJ) => {
                JJ.alphaCutOff = cJ
              }
            },
            metadata: cJ
          }, nU, GU), (0, FJ.d)(null, null, lc, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_useLightmapAsShadowmap" in JJ,
              get: JJ => JJ._useLightmapAsShadowmap,
              set: (JJ, cJ) => {
                JJ._useLightmapAsShadowmap = cJ
              }
            },
            metadata: cJ
          }, fU, xU), (0, FJ.d)(null, null, cZ, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_diffuseFresnelParameters" in JJ,
              get: JJ => JJ._diffuseFresnelParameters,
              set: (JJ, cJ) => {
                JJ._diffuseFresnelParameters = cJ
              }
            },
            metadata: cJ
          }, mU, QU), (0, FJ.d)(null, null, FZ, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_opacityFresnelParameters" in JJ,
              get: JJ => JJ._opacityFresnelParameters,
              set: (JJ, cJ) => {
                JJ._opacityFresnelParameters = cJ
              }
            },
            metadata: cJ
          }, KU, yU), (0, FJ.d)(null, null, eZ, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_reflectionFresnelParameters" in JJ,
              get: JJ => JJ._reflectionFresnelParameters,
              set: (JJ, cJ) => {
                JJ._reflectionFresnelParameters = cJ
              }
            },
            metadata: cJ
          }, MU, bU), (0, FJ.d)(null, null, AZ, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_refractionFresnelParameters" in JJ,
              get: JJ => JJ._refractionFresnelParameters,
              set: (JJ, cJ) => {
                JJ._refractionFresnelParameters = cJ
              }
            },
            metadata: cJ
          }, gU, HU), (0, FJ.d)(null, null, jZ, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_emissiveFresnelParameters" in JJ,
              get: JJ => JJ._emissiveFresnelParameters,
              set: (JJ, cJ) => {
                JJ._emissiveFresnelParameters = cJ
              }
            },
            metadata: cJ
          }, pU, dU), (0, FJ.d)(null, null, hZ, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_useReflectionFresnelFromSpecular" in JJ,
              get: JJ => JJ._useReflectionFresnelFromSpecular,
              set: (JJ, cJ) => {
                JJ._useReflectionFresnelFromSpecular = cJ
              }
            },
            metadata: cJ
          }, OU, TU), (0, FJ.d)(null, null, sZ, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_useGlossinessFromSpecularMapAlpha" in JJ,
              get: JJ => JJ._useGlossinessFromSpecularMapAlpha,
              set: (JJ, cJ) => {
                JJ._useGlossinessFromSpecularMapAlpha = cJ
              }
            },
            metadata: cJ
          }, iU, RU), (0, FJ.d)(null, null, GZ, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_maxSimultaneousLights" in JJ,
              get: JJ => JJ._maxSimultaneousLights,
              set: (JJ, cJ) => {
                JJ._maxSimultaneousLights = cJ
              }
            },
            metadata: cJ
          }, BU, tU), (0, FJ.d)(null, null, xZ, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_invertNormalMapX" in JJ,
              get: JJ => JJ._invertNormalMapX,
              set: (JJ, cJ) => {
                JJ._invertNormalMapX = cJ
              }
            },
            metadata: cJ
          }, Je, ce), (0, FJ.d)(null, null, vZ, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_invertNormalMapY" in JJ,
              get: JJ => JJ._invertNormalMapY,
              set: (JJ, cJ) => {
                JJ._invertNormalMapY = cJ
              }
            },
            metadata: cJ
          }, Ue, ee), (0, FJ.d)(null, null, QZ, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_twoSidedLighting" in JJ,
              get: JJ => JJ._twoSidedLighting,
              set: (JJ, cJ) => {
                JJ._twoSidedLighting = cJ
              }
            },
            metadata: cJ
          }, qe, je), (0, FJ.d)(null, null, VZ, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: JJ => "_applyDecalMapAfterDetailMap" in JJ,
              get: JJ => JJ._applyDecalMapAfterDetailMap,
              set: (JJ, cJ) => {
                JJ._applyDecalMapAfterDetailMap = cJ
              }
            },
            metadata: cJ
          }, De, se), cJ && Object.defineProperty(JJ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cJ
          })
        })(), JJ.ForceGLSL = !1, JJ._ShaderLoader = new EJ.b((() => [Promise.all([ZJ.e(297), ZJ.e(296)]).then((() => ZJ(40581))), Promise.all([ZJ.e(302), ZJ.e(298), ZJ.e(311), ZJ.e(301)]).then((() => ZJ(40753)))]), (() => [Promise.all([ZJ.e(318), ZJ.e(313)]).then((() => ZJ(40910))), Promise.all([ZJ.e(319), ZJ.e(329), ZJ.e(315)]).then((() => ZJ(41091)))])), JJ
      })(),
      PJ = !1;

    function kJ() {
      PJ || (PJ = !0, (0, hJ.i)(), (0, IJ.f)("BABYLON.StandardMaterial", HJ), XJ.e.DefaultMaterialFactory = JJ => new HJ("default material", JJ))
    }
    Object.getOwnPropertyDescriptor(HJ.prototype, "decalMap") || Object.defineProperty(HJ.prototype, "decalMap", (0, MJ.h)("StandardMaterial", "decalMap"))
  },
  39140: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return class extends JJ {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    ZJ.d(cJ, {
      c: () => FJ
    })
  },
  39130: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ
    });
    class FJ {
      constructor(JJ, cJ) {
        this._webGL = {
          load: JJ,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: cJ,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(JJ) {
        const cJ = 1 === JJ ? this._webGPU : this._webGL;
        return cJ.loaded ? void 0 : async () => {
          await this._loadAsync(cJ)
        }
      }
      async _loadAsync(JJ) {
        if (JJ.loaded) return;
        let cJ = JJ.loadPromise;
        const ZJ = null === cJ;
        ZJ && (cJ = Promise.all(JJ.load()), JJ.loadPromise = cJ);
        let FJ = !1;
        try {
          await cJ, FJ = !0
        } finally {
          ZJ && this._completeLoad(JJ, FJ)
        }
      }
      _completeLoad(JJ, cJ) {
        JJ.loaded = cJ, JJ.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);