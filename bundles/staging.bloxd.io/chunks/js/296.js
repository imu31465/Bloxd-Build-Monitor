export const id = 296;
export const ids = [296];
export const modules = {
  41925: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR
    });
    var yR = GR(41527);

    function tR(RR) {
      return class extends RR {
        constructor() {
          super(...arguments);
          const RR = new.target;
          if (!RR[Symbol.metadata]) {
            const JR = Object.getPrototypeOf(RR)?.[Symbol.metadata];
            RR[Symbol.metadata] = JR ? Object.create(JR) : {}
          }
          const JR = (0, yR.d)(RR[Symbol.metadata]);
          JR._imageProcessingConfiguration || (JR._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(RR) {
          this._attachImageProcessingConfiguration(RR), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(RR) {
          RR !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !RR && this.jH ? this._imageProcessingConfiguration = this.jH().imageProcessingConfiguration : RR && (this._imageProcessingConfiguration = RR), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(RR) {
          this.imageProcessingConfiguration.colorCurvesEnabled = RR
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(RR) {
          this.imageProcessingConfiguration.colorGradingEnabled = RR
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(RR) {
          this._imageProcessingConfiguration.toneMappingEnabled = RR
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(RR) {
          this._imageProcessingConfiguration.exposure = RR
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(RR) {
          this._imageProcessingConfiguration.contrast = RR
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(RR) {
          this._imageProcessingConfiguration.colorGradingTexture = RR
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(RR) {
          this._imageProcessingConfiguration.colorCurves = RR
        }
      }
    }
  },
  41797: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR,
      f: () => tR
    });
    var yR = GR(41803);

    function tR(RR) {
      return class extends RR {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class uR extends yR.b {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  41881: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => KR
    });
    var yR = GR(41520),
      tR = GR(41810),
      uR = GR(41524),
      ZR = GR(41860),
      qR = GR(41803),
      iR = GR(41890),
      fR = GR(41852);
    class VR extends qR.b {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let KR = (() => {
      var RR, JR, GR, qR;
      let KR, wR, rR, eR, aR, LR, nR = iR.b,
        UR = [],
        WR = [],
        AR = [],
        CR = [],
        XR = [],
        MR = [],
        BR = [],
        lR = [],
        pR = [],
        gR = [],
        bR = [],
        vR = [];
      return RR = class extends nR {
        get texture() {
          return (0, yR.e)(this, JR, "f")
        }
        set texture(RR) {
          (0, yR.i)(this, JR, RR, "f")
        }
        get normalBlendMethod() {
          return (0, yR.e)(this, GR, "f")
        }
        set normalBlendMethod(RR) {
          (0, yR.i)(this, GR, RR, "f")
        }
        get isEnabled() {
          return (0, yR.e)(this, qR, "f")
        }
        set isEnabled(RR) {
          (0, yR.i)(this, qR, RR, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(RR) {
          let uR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(RR, "DetailMap", 140, new VR, uR), this._texture = null, JR.set(this, (0, yR.m)(this, UR, void 0)), this.diffuseBlendLevel = ((0, yR.m)(this, WR), (0, yR.m)(this, AR, 1)), this.roughnessBlendLevel = ((0, yR.m)(this, CR), (0, yR.m)(this, XR, 1)), this.bumpLevel = ((0, yR.m)(this, MR), (0, yR.m)(this, BR, 1)), this._normalBlendMethod = ((0, yR.m)(this, lR), tR.d.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), GR.set(this, (0, yR.m)(this, pR, void 0)), this._isEnabled = ((0, yR.m)(this, gR), !1), qR.set(this, (0, yR.m)(this, bR, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, yR.m)(this, vR), this._internalMarkAllSubMeshesAsTexturesDirty = RR._dirtyCallbacks[1]
        }
        isReadyForSubMesh(RR, JR, GR) {
          return !this._isEnabled || !(RR._areTexturesDirty && JR.texturesEnabled && GR.getCaps().standardDerivatives && this._texture && ZR.b.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(RR, JR) {
          if (this._isEnabled) {
            RR.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const GR = JR.ke();
            RR._areTexturesDirty && (GR.getCaps().standardDerivatives && this._texture && ZR.b.DetailTextureEnabled && this._isEnabled ? ((0, fR.db)(this._texture, RR, "DETAIL"), RR.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : RR.DETAIL = !1)
          } else RR.DETAIL = !1
        }
        bindForSubMesh(RR, JR) {
          if (!this._isEnabled) return;
          const GR = this._material.isFrozen;
          RR.useUbo && GR && RR.isSync || this._texture && ZR.b.DetailTextureEnabled && (RR.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, fR.B)(this._texture, RR, "detail")), JR.texturesEnabled && this._texture && ZR.b.DetailTextureEnabled && RR.setTexture("detailSampler", this._texture)
        }
        hasTexture(RR) {
          return this._texture === RR
        }
        getActiveTextures(RR) {
          this._texture && RR.push(this._texture)
        }
        getAnimatables(RR) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && RR.push(this._texture)
        }
        dispose(RR) {
          RR && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(RR) {
          RR.push("detailSampler")
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
      }, JR = new WeakMap, GR = new WeakMap, qR = new WeakMap, (() => {
        const JR = "function" === typeof Symbol && Symbol.metadata ? Object.create(nR[Symbol.metadata] ?? null) : void 0;
        KR = [(0, uR.C)("detailTexture"), (0, uR.d)("_markAllSubMeshesAsTexturesDirty")], wR = [(0, uR.H)()], rR = [(0, uR.H)()], eR = [(0, uR.H)()], aR = [(0, uR.H)(), (0, uR.d)("_markAllSubMeshesAsTexturesDirty")], LR = [(0, uR.H)(), (0, uR.d)("_markAllSubMeshesAsTexturesDirty")], (0, yR.l)(RR, null, KR, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: RR => "texture" in RR,
            get: RR => RR.texture,
            set: (RR, JR) => {
              RR.texture = JR
            }
          },
          metadata: JR
        }, UR, WR), (0, yR.l)(RR, null, aR, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: RR => "normalBlendMethod" in RR,
            get: RR => RR.normalBlendMethod,
            set: (RR, JR) => {
              RR.normalBlendMethod = JR
            }
          },
          metadata: JR
        }, pR, gR), (0, yR.l)(RR, null, LR, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: RR => "isEnabled" in RR,
            get: RR => RR.isEnabled,
            set: (RR, JR) => {
              RR.isEnabled = JR
            }
          },
          metadata: JR
        }, bR, vR), (0, yR.l)(null, null, wR, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: RR => "diffuseBlendLevel" in RR,
            get: RR => RR.diffuseBlendLevel,
            set: (RR, JR) => {
              RR.diffuseBlendLevel = JR
            }
          },
          metadata: JR
        }, AR, CR), (0, yR.l)(null, null, rR, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: RR => "roughnessBlendLevel" in RR,
            get: RR => RR.roughnessBlendLevel,
            set: (RR, JR) => {
              RR.roughnessBlendLevel = JR
            }
          },
          metadata: JR
        }, XR, MR), (0, yR.l)(null, null, eR, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: RR => "bumpLevel" in RR,
            get: RR => RR.bumpLevel,
            set: (RR, JR) => {
              RR.bumpLevel = JR
            }
          },
          metadata: JR
        }, BR, lR), JR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JR
        })
      })(), RR
    })()
  },
  41803: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR
    });
    class yR {
      constructor(RR) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = RR, RR)
          for (const JR in RR) Object.prototype.hasOwnProperty.call(RR, JR) && this._setDefaultValue(JR)
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
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || RR, this._isDirty = !0
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
        for (const RR of Object.keys(this)) "_" !== RR[0] && this._keys.push(RR);
        if (this._externalProperties)
          for (const RR in this._externalProperties) - 1 === this._keys.indexOf(RR) && this._keys.push(RR)
      }
      isEqual(RR) {
        if (this._keys.length !== RR._keys.length) return !1;
        for (let JR = 0; JR < this._keys.length; JR++) {
          const GR = this._keys[JR];
          if (this[GR] !== RR[GR]) return !1
        }
        return !0
      }
      cloneTo(RR) {
        this._keys.length !== RR._keys.length && (RR._keys = this._keys.slice(0));
        for (let JR = 0; JR < this._keys.length; JR++) {
          const GR = this._keys[JR];
          RR[GR] = this[GR]
        }
      }
      reset() {
        for (const RR of this._keys) this._setDefaultValue(RR)
      }
      _setDefaultValue(RR) {
        const JR = this._externalProperties?.[RR]?.type ?? typeof this[RR],
          GR = this._externalProperties?.[RR]?.default;
        switch (JR) {
          case "number":
            this[RR] = GR ?? 0;
            break;
          case "string":
            this[RR] = GR ?? "";
            break;
          default:
            this[RR] = GR ?? !1
        }
      }
      toString() {
        let RR = "";
        for (let JR = 0; JR < this._keys.length; JR++) {
          const GR = this._keys[JR],
            yR = this[GR];
          switch (typeof yR) {
            case "number":
            case "string":
              RR += "#define " + GR + " " + yR + "\n";
              break;
            default:
              yR && (RR += "#define " + GR + "\n")
          }
        }
        return RR
      }
    }
  },
  41906: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR,
      d: () => ZR,
      g: () => uR
    });
    var yR, tR = GR(38204);

    function uR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const yR = JR(RR);
      if (!Number.isInteger(yR) || yR < 0 || yR > GR) throw new Error(`Invalid geometry object ID ${yR} for mesh "${RR.name}". Object IDs must be integers between 0 and 0x${GR.toString(16).toUpperCase()}.`);
      return yR
    }

    function ZR(RR, JR) {
      const GR = JR(RR);
      if (!Number.isInteger(GR) || GR < 0 || GR > 255 || 0 !== GR && 0 === (63 & GR)) throw new Error(`Invalid geometry mesh-blending tag ${GR} for mesh "${RR.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return GR
    }! function(RR) {
      RR[RR.Zero = 0] = "Zero", RR[RR.One = 1] = "One", RR[RR.MaxViewZ = 2] = "MaxViewZ", RR[RR.NoClear = 3] = "NoClear"
    }(yR || (yR = {}));
    class qR {
      static CreateConfiguration(RR) {
        return qR._Configurations[RR] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: tR.e.Zero(),
          currentViewProjection: tR.e.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, qR._Configurations[RR]
      }
      static DeleteConfiguration(RR) {
        delete qR._Configurations[RR]
      }
      static GetConfiguration(RR) {
        return qR._Configurations[RR]
      }
      static _PrepareConfiguration(RR, JR, GR) {
        const yR = qR._Configurations[RR];
        yR._attachments = JR, yR._colorAttachments = GR, yR._mrtCount = JR.length;
        let tR = "#define PREPASS\n";
        for (const uR of qR.GeometryTextureDescriptions) {
          const RR = yR.defines[uR.defineIndex];
          void 0 !== RR && (tR += `#define ${uR.define}\n#define ${uR.defineIndex} ${RR}\n`)
        }
        yR.objectIdIsRedFormat && (tR += "#define PREPASS_OBJECT_ID_R8\n"), yR._defines = tR + `#define SCENE_MRT_COUNT ${JR.length}\n`
      }
      static _PrepareStringDefines(RR, JR) {
        const GR = qR._Configurations[RR];
        return !!GR?._defines && (JR.push(GR._defines), !0)
      }
      static _BindAttachmentsForEffect(RR, JR) {
        const GR = qR._Configurations[RR.currentRenderPassId];
        return !GR?._attachments || (RR.bindAttachments(JR._multiTarget ? GR._attachments : GR._colorAttachments), JR._multiTarget || void 0 !== GR.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(RR) {
        const JR = qR._Configurations[RR.currentRenderPassId];
        JR?._colorAttachments && RR.bindAttachments(JR._colorAttachments)
      }
      static _BindColorAttachments(RR) {
        const JR = qR._Configurations[RR.currentRenderPassId];
        return !JR?._colorAttachments || (RR.bindAttachments(JR._colorAttachments), void 0 !== JR.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(RR) {
        const JR = qR._Configurations[RR.currentRenderPassId];
        return !JR?._colorAttachments || void 0 !== JR.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(RR, JR) {
        const GR = qR._Configurations[RR.currentRenderPassId];
        if (!GR) return;
        const yR = RR.getAlphaMode(),
          tR = void 0 === GR.defines.PREPASS_COLOR_INDEX || 2 === yR || 1 === yR || 17 === yR;
        JR.setFloat("geometryZeroAlphaDiscard", tR ? 1 : 0)
      }
      static AddUniformsAndSamplers(RR, JR) {
        RR.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(RR, JR) {
        for (const GR of JR)
          if (GR.XM)
            for (const JR of GR.XM) JR._removeDrawWrapper(RR)
      }
      static PrepareDefines(RR, JR, GR) {
        if (!GR._arePrePassDirty) return;
        const yR = qR._Configurations[RR];
        if (!yR) return;
        GR.PREPASS = !0;
        let tR = 0;
        for (let uR = 0; uR < qR.GeometryTextureDescriptions.length; uR++) {
          const RR = qR.GeometryTextureDescriptions[uR],
            JR = RR.define,
            ZR = RR.defineIndex,
            iR = yR.defines[ZR];
          void 0 !== iR ? (GR[JR] = !0, GR[ZR] = iR, tR++) : (GR[JR] = !1, delete GR[ZR])
        }
        GR.PREPASS_OBJECT_ID_R8 = yR.objectIdIsRedFormat, GR.SCENE_MRT_COUNT = yR._mrtCount ?? tR, GR.BONES_VELOCITY_ENABLED = JR.useBones && JR.computeBonesUsingShaders && JR.skeleton && !JR.skeleton.isUsingTextureForMatrices && -1 === yR.excludedSkinnedMesh.indexOf(JR)
      }
      static Bind(RR, JR, GR, yR, tR) {
        const iR = qR._Configurations[RR];
        if (!iR) return;
        const fR = GR.jH(),
          VR = fR.ke();
        if (iR.reverseCulling && VR.setStateCullFaceType(fR._mirroredCameraPosition ? tR.cullBackFaces : !tR.cullBackFaces), void 0 !== iR.defines.PREPASS_OBJECT_ID_INDEX) {
          const RR = iR.objectIdIsRedFormat ? 255 : 16777215;
          let yR = GR.uniqueId;
          if (iR.objectIdProvider) yR = uR(GR, iR.objectIdProvider, RR);
          else if (yR > RR) throw new Error(`Invalid geometry object ID ${yR} for mesh "${GR.name}". Object IDs must be integers between 0 and 0x${RR.toString(16).toUpperCase()}.`);
          JR.setFloat("objectId", yR)
        }
        if (void 0 !== iR.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const RR = iR.meshBlendTagProvider ? ZR(GR, iR.meshBlendTagProvider) : GR.meshBlendingTag;
          JR.setInt("meshBlendTag", RR)
        }
        if (void 0 !== iR.defines.PREPASS_VELOCITY_INDEX || void 0 !== iR.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const RR = iR._currentWorldMatrices ?? (iR._currentWorldMatrices = {}),
            tR = iR._worldMatrixFrameIds ?? (iR._worldMatrixFrameIds = {});
          if (RR[GR.uniqueId] || (RR[GR.uniqueId] = yR.clone(), iR.previousWorldMatrices[GR.uniqueId] = yR.clone()), tR[GR.uniqueId] !== VR.frameId && (iR.previousWorldMatrices[GR.uniqueId].vN(RR[GR.uniqueId]), tR[GR.uniqueId] = VR.frameId), RR[GR.uniqueId].vN(yR), -1 === iR.lastUpdateFrameId ? (iR.lastUpdateFrameId = VR.frameId, iR.previousViewProjection.vN(fR.getTransformMatrix()), iR.currentViewProjection.vN(fR.getTransformMatrix())) : iR.currentViewProjection.updateFlag !== fR.getTransformMatrix().updateFlag ? (iR.lastUpdateFrameId = VR.frameId, iR.previousViewProjection.vN(iR.currentViewProjection), iR.currentViewProjection.vN(fR.getTransformMatrix())) : iR.lastUpdateFrameId !== VR.frameId && (iR.lastUpdateFrameId = VR.frameId, iR.previousViewProjection.vN(iR.currentViewProjection)), JR.setMatrix("previousWorld", iR.previousWorldMatrices[GR.uniqueId]), JR.setMatrix("previousViewProjection", iR.previousViewProjection), GR.useBones && GR.computeBonesUsingShaders && GR.skeleton) {
            const RR = GR.skeleton;
            if (!RR.isUsingTextureForMatrices || -1 === JR.getUniformIndex("boneTextureInfo")) {
              const yR = RR.getTransformMatrices(GR);
              yR && (iR.previousBones[GR.uniqueId] || (iR.previousBones[GR.uniqueId] = yR.slice()), JR.setMatrices("mPreviousBones", iR.previousBones[GR.uniqueId]), iR.previousBones[GR.uniqueId].set(yR))
            }
          }
        }
      }
    }
    qR.GeometryTextureDescriptions = [{
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
    }], qR._Configurations = {}
  },
  41890: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => wR,
      e: () => eR
    });
    var yR = GR(41520),
      tR = GR(41524),
      uR = GR(41410),
      ZR = GR(41387);
    const qR = new RegExp("^([gimus]+)!");
    class iR {
      constructor(RR) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = RR, this._scene = RR.jH(), this._engine = this._scene.ke()
      }
      _addPlugin(RR) {
        for (let yR = 0; yR < this._plugins.length; ++yR)
          if (this._plugins[yR].name === RR.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !RR.isCompatible(this._material.shaderLanguage)) throw `The plugin "${RR.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const JR = RR.getClassName();
        iR._MaterialPluginClassToMainDefine[JR] || (iR._MaterialPluginClassToMainDefine[JR] = "MATERIALPLUGIN_" + ++iR._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (RR, JR) => this._handlePluginEvent(RR, JR), this._plugins.push(RR), this._plugins.sort(((RR, JR) => RR.priority - JR.priority)), this._codeInjectionPoints = {};
        const GR = {};
        GR[iR._MaterialPluginClassToMainDefine[JR]] = {
          type: "boolean",
          default: !0
        };
        for (const yR of this._plugins) yR.collectDefines(GR), this._collectPointNames("vertex", yR.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", yR.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = GR, !0
      }
      _activatePlugin(RR) {
        -1 === this._activePlugins.indexOf(RR) && (this._activePlugins.push(RR), this._activePlugins.sort(((RR, JR) => RR.priority - JR.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), RR.registerForExtraEvents && (this._activePluginsForExtraEvents.push(RR), this._activePluginsForExtraEvents.sort(((RR, JR) => RR.priority - JR.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(RR) {
        for (let JR = 0; JR < this._plugins.length; ++JR)
          if (this._plugins[JR].name === RR) return this._plugins[JR];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(RR) {
        let JR = !0;
        for (const GR of this._activePlugins) JR = JR && GR.isReadyForSubMesh(RR.defines, this._scene, this._engine, RR.subMesh);
        RR.isReadyForSubMesh = JR
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(RR) {
        for (const JR of this._activePlugins) JR.prepareDefinesBeforeAttributes(RR.defines, this._scene, RR.mesh)
      }
      _handlePluginEventPrepareDefines(RR) {
        for (const JR of this._activePlugins) JR.prepareDefines(RR.defines, this._scene, RR.mesh)
      }
      _handlePluginEventHardBindForSubMesh(RR) {
        for (const JR of this._activePluginsForExtraEvents) JR.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, RR.subMesh)
      }
      _handlePluginEventBindForSubMesh(RR) {
        for (const JR of this._activePlugins) JR.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, RR.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(RR) {
        let JR = !1;
        for (const GR of this._activePluginsForExtraEvents)
          if (JR = GR.hasRenderTargetTextures(), JR) break;
        RR.hasRenderTargetTextures = JR
      }
      _handlePluginEventFillRenderTargetTextures(RR) {
        for (const JR of this._activePluginsForExtraEvents) JR.fillRenderTargetTextures(RR.renderTargets)
      }
      _handlePluginEvent(RR, JR) {
        switch (RR) {
          case 512: {
            const RR = JR;
            for (const JR of this._activePlugins) JR.getActiveTextures(RR.activeTextures);
            break
          }
          case 256: {
            const RR = JR;
            for (const JR of this._activePlugins) JR.getAnimatables(RR.animatables);
            break
          }
          case 1024: {
            const RR = JR;
            let GR = !1;
            for (const JR of this._activePlugins)
              if (GR = JR.hasTexture(RR.texture), GR) break;
            RR.hasTexture = GR;
            break
          }
          case 2: {
            const RR = JR;
            for (const JR of this._plugins) JR.dispose(RR.forceDisposeTextures);
            break
          }
          case 4:
            JR.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const RR = JR;
            for (const JR of this._activePlugins) RR.fallbackRank = JR.addFallbacks(RR.defines, RR.fallbacks, RR.fallbackRank), JR.getAttributes(RR.attributes, this._scene, RR.mesh);
            this._uniformList.length > 0 && RR.uniforms.push(...this._uniformList), this._samplerList.length > 0 && RR.samplers.push(...this._samplerList), this._uboList.length > 0 && RR.uniformBuffersNames.push(...this._uboList), RR.customCode = this._injectCustomCode(RR, RR.customCode);
            break
          }
          case 8: {
            const RR = JR;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const GR = 1 === this._material.shaderLanguage;
            for (const JR of this._plugins) {
              const yR = JR.getUniforms(this._material.shaderLanguage);
              if (yR) {
                if (yR.ubo)
                  for (const JR of yR.ubo) {
                    if (JR.size && JR.type) {
                      const yR = JR.arraySize ?? 0;
                      if (RR.ubo.addUniform(JR.name, JR.size, yR), GR) {
                        let RR;
                        switch (JR.type) {
                          case "mat4":
                            RR = "mat4x4f";
                            break;
                          case "float":
                            RR = "f32";
                            break;
                          default:
                            RR = `${JR.type}f`
                        }
                        this._uboDeclaration += yR > 0 ? `uniform ${JR.name}: array<${RR}, ${yR}>;\n` : `uniform ${JR.name}: ${RR};\n`
                      } else this._uboDeclaration += `${JR.type} ${JR.name}${yR>0?`[${yR}]`:""};\n`
                    }
                    this._uniformList.push(JR.name)
                  }
                yR.vertex && (this._vertexDeclaration += yR.vertex + "\n"), yR.fragment && (this._fragmentDeclaration += yR.fragment + "\n"), yR.externalUniforms && this._uniformList.push(...yR.externalUniforms)
              }
              JR.getSamplers(this._samplerList), JR.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(RR, JR) {
        if (JR)
          for (const GR in JR) this._codeInjectionPoints[RR] || (this._codeInjectionPoints[RR] = {}), this._codeInjectionPoints[RR][GR] = !0
      }
      _injectCustomCode(RR, JR) {
        return (GR, yR) => {
          JR && (yR = JR(GR, yR)), this._uboDeclaration && (yR = yR.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (yR = yR.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (yR = yR.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const tR = this._codeInjectionPoints?.[GR];
          if (!tR) return yR;
          let iR = null;
          for (let JR in tR) {
            let tR = "";
            for (const yR of this._activePlugins) {
              const qR = this._material.shaderLanguage;
              let fR = yR.getCustomCode(GR, qR)?.[JR];
              fR && (yR.resolveIncludes && (null === iR && (iR = {
                defines: [],
                indexParameters: RR.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: ZR.b.GetShadersRepository(qR),
                includesShadersStore: ZR.b.GetIncludesShadersStore(qR),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                LtR: this._engine.LtR,
                processCodeAfterIncludes: void 0
              }), iR.isFragment = "fragment" === GR, (0, uR.j)(fR, iR, (RR => fR = RR))), tR += fR + "\n")
            }
            if (tR.length > 0)
              if ("!" === JR.charAt(0)) {
                JR = JR.substring(1);
                let RR = "g";
                if ("!" === JR.charAt(0)) RR = "", JR = JR.substring(1);
                else {
                  const GR = qR.exec(JR);
                  GR && GR.length >= 2 && (RR = GR[1], JR = JR.substring(RR.length + 1))
                }
                RR.indexOf("g") < 0 && (RR += "g");
                const GR = new RegExp(JR, RR);
                let uR = GR.exec(yR);
                for (; null !== uR;) {
                  const {
                    index: RR
                  } = uR, JR = fR(tR, uR);
                  yR = yR.substring(0, RR) + JR + yR.substring(RR + uR[0].length), GR.lastIndex = RR + JR.length, uR = GR.exec(yR)
                }
              } else {
                const RR = "#define " + JR;
                yR = yR.replace(RR, "\n" + tR + "\n" + RR)
              }
          }
          return yR
        }
      }
    }
    iR._MaterialPluginClassToMainDefine = {}, iR._MaterialPluginCounter = 0;

    function fR(RR, JR) {
      return RR.replace(/\$(\d+)/g, ((RR, GR) => {
        const yR = Number(GR);
        return yR < JR.length ? JR[yR] : ""
      }))
    }
    var VR = GR(41542),
      KR = GR(38253);
    let wR = (() => {
        var RR;
        let JR, GR, uR, ZR, qR = [],
          fR = [],
          KR = [],
          wR = [],
          rR = [],
          eR = [],
          aR = [],
          LR = [];
        return RR = class {
          isCompatible(RR) {
            return 0 === RR
          }
          _enable(RR) {
            RR && this._pluginManager._activatePlugin(this)
          }
          constructor(RR, JR, GR, tR) {
            let uR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              ZR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              VR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, yR.m)(this, qR, void 0), this.priority = ((0, yR.m)(this, fR), (0, yR.m)(this, KR, 500)), this.resolveIncludes = ((0, yR.m)(this, wR), (0, yR.m)(this, rR, !1)), this.registerForExtraEvents = ((0, yR.m)(this, eR), (0, yR.m)(this, aR, !1)), this.doNotSerialize = ((0, yR.m)(this, LR), !1), this._material = RR, this.name = JR, this.priority = GR, this.resolveIncludes = VR, RR.pluginManager || (RR.pluginManager = new iR(RR), RR.YH.add((() => {
              RR.pluginManager = void 0
            }))), this._pluginDefineNames = tR, this._pluginManager = RR.pluginManager, uR && this._pluginManager._addPlugin(this), ZR && this._enable(!0), this.markAllDefinesAsDirty = RR._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(RR, JR, GR, yR) {
            return !0
          }
          hardBindForSubMesh(RR, JR, GR, yR) {}
          bindForSubMesh(RR, JR, GR, yR) {}
          dispose(RR) {}
          getCustomCode(RR) {
            return null
          }
          collectDefines(RR) {
            if (this._pluginDefineNames)
              for (const JR of Object.keys(this._pluginDefineNames)) {
                if ("_" === JR[0]) continue;
                const GR = typeof this._pluginDefineNames[JR];
                RR[JR] = {
                  type: "number" === GR ? "number" : "string" === GR ? "string" : "boolean" === GR ? "boolean" : "object",
                  default: this._pluginDefineNames[JR]
                }
              }
          }
          prepareDefinesBeforeAttributes(RR, JR, GR) {}
          prepareDefines(RR, JR, GR) {}
          hasTexture(RR) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(RR) {}
          getActiveTextures(RR) {}
          getAnimatables(RR) {}
          addFallbacks(RR, JR, GR) {
            return GR
          }
          getSamplers(RR) {}
          getAttributes(RR, JR, GR) {}
          getUniformBuffersNames(RR) {}
          getUniforms() {
            return {}
          }
          copyTo(RR) {
            VR.c.Clone((() => RR), this)
          }
          serialize() {
            return VR.c.Serialize(this)
          }
          parse(RR, JR, GR) {
            VR.c.Parse((() => this), RR, JR, GR)
          }
        }, (() => {
          const iR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          JR = [(0, tR.H)()], GR = [(0, tR.H)()], uR = [(0, tR.H)()], ZR = [(0, tR.H)()], (0, yR.l)(null, null, JR, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: RR => "name" in RR,
              get: RR => RR.name,
              set: (RR, JR) => {
                RR.name = JR
              }
            },
            metadata: iR
          }, qR, fR), (0, yR.l)(null, null, GR, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: RR => "priority" in RR,
              get: RR => RR.priority,
              set: (RR, JR) => {
                RR.priority = JR
              }
            },
            metadata: iR
          }, KR, wR), (0, yR.l)(null, null, uR, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: RR => "resolveIncludes" in RR,
              get: RR => RR.resolveIncludes,
              set: (RR, JR) => {
                RR.resolveIncludes = JR
              }
            },
            metadata: iR
          }, rR, eR), (0, yR.l)(null, null, ZR, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: RR => "registerForExtraEvents" in RR,
              get: RR => RR.registerForExtraEvents,
              set: (RR, JR) => {
                RR.registerForExtraEvents = JR
              }
            },
            metadata: iR
          }, aR, LR), iR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iR
          })
        })(), RR
      })(),
      rR = !1;

    function eR() {
      rR || (rR = !0, (0, KR.f)("BABYLON.MaterialPluginBase", wR))
    }
  },
  41789: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR
    });
    class yR {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(RR) {
        RR.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(RR) {}
      bindForSubMesh(RR, JR, GR, yR, tR) {
        if (JR.prePassRenderer && JR.prePassRenderer.enabled && JR.prePassRenderer.currentRTisSceneRT && (-1 !== JR.prePassRenderer.getIndex(2) || -1 !== JR.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[GR.uniqueId] || (this.previousWorldMatrices[GR.uniqueId] = yR.clone()), this.previousViewProjection || (this.previousViewProjection = JR.getTransformMatrix().clone(), this.currentViewProjection = JR.getTransformMatrix().clone());
          const tR = JR.ke();
          this.currentViewProjection.updateFlag !== JR.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = tR.frameId, this.previousViewProjection.vN(this.currentViewProjection), this.currentViewProjection.vN(JR.getTransformMatrix())) : this._lastUpdateFrameId !== tR.frameId && (this._lastUpdateFrameId = tR.frameId, this.previousViewProjection.vN(this.currentViewProjection)), RR.setMatrix("previousWorld", this.previousWorldMatrices[GR.uniqueId]), RR.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[GR.uniqueId] = yR.clone()
        }
      }
    }
  },
  41920: (RR, JR, GR) => {
    function yR(RR) {
      return class extends RR {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    GR.d(JR, {
      b: () => yR
    })
  },
  41781: (RR, JR, GR) => {
    GR.d(JR, {
      StandardMaterial: () => yR.e
    });
    var yR = GR(41787);
    (0, yR.b)()
  },
  41787: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => oR,
      e: () => DR
    });
    var yR = GR(41520),
      tR = GR(41524),
      uR = GR(41626),
      ZR = GR(41612),
      qR = GR(38331),
      iR = GR(41663),
      fR = GR(41789),
      VR = GR(41797),
      KR = GR(41634),
      wR = GR(41810),
      rR = GR(41803),
      eR = GR(41869),
      aR = GR(41860),
      LR = GR(41873),
      nR = GR(41881),
      UR = GR(41855),
      WR = GR(41897),
      AR = GR(41852),
      CR = GR(41542),
      XR = GR(41900),
      MR = GR(41906),
      BR = GR(41915),
      lR = GR(41920),
      pR = GR(41925),
      gR = GR(38253),
      bR = GR(41407);
    const vR = {
      effect: null,
      subMesh: null
    };
    class OR extends((0, lR.b)((0, BR.c)(rR.b))) {}
    class xR extends((0, VR.f)(OR)) {
      constructor(RR) {
        super(RR), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class NR extends((0, pR.e)(eR.d)) {}
    let DR = (() => {
        var RR, JR, VR, rR, BR, lR, pR, gR, bR, OR, DR, HR, oR, cR, PR, IR, mR, zR, SR, jR, dR, ER, YR, kR, QR, FR, TR, sR, hR, RJ, JJ, GJ, yJ;
        let tJ, uJ, ZJ, qJ, iJ, fJ, VJ, KJ, wJ, rJ, eJ, aJ, LJ, nJ, UJ, WJ, AJ, CJ, XJ, MJ, BJ, lJ, pJ, gJ, bJ, vJ, OJ, xJ, NJ, DJ, HJ, oJ, cJ, PJ, IJ, mJ, zJ, SJ, jJ, dJ, EJ, YJ, kJ, QJ, FJ, TJ, sJ, hJ, RG, JG, GG, yG, tG, uG, ZG, qG, iG, fG, VG, KG, wG, rG, eG, aG, LG, nG, UG, WG, AG, CG, XG, MG, BG, lG = NR,
          pG = [],
          gG = [],
          bG = [],
          vG = [],
          OG = [],
          xG = [],
          NG = [],
          DG = [],
          HG = [],
          oG = [],
          cG = [],
          PG = [],
          IG = [],
          mG = [],
          zG = [],
          SG = [],
          jG = [],
          dG = [],
          EG = [],
          YG = [],
          kG = [],
          QG = [],
          FG = [],
          TG = [],
          sG = [],
          hG = [],
          Ry = [],
          Jy = [],
          Gy = [],
          yy = [],
          ty = [],
          uy = [],
          Zy = [],
          qy = [],
          iy = [],
          fy = [],
          Vy = [],
          Ky = [],
          wy = [],
          ry = [],
          ey = [],
          ay = [],
          Ly = [],
          ny = [],
          Uy = [],
          Wy = [],
          Ay = [],
          Cy = [],
          Xy = [],
          My = [],
          By = [],
          ly = [],
          py = [],
          gy = [],
          by = [],
          vy = [],
          Oy = [],
          xy = [],
          Ny = [],
          Dy = [],
          Hy = [],
          oy = [],
          cy = [],
          Py = [],
          Iy = [],
          my = [],
          zy = [],
          Sy = [],
          jy = [],
          dy = [],
          Ey = [],
          Yy = [],
          ky = [],
          Qy = [],
          Fy = [],
          Ty = [],
          sy = [],
          hy = [],
          Rt = [],
          Jt = [],
          Gt = [],
          yt = [],
          tt = [],
          ut = [],
          Zt = [],
          qt = [],
          it = [],
          ft = [],
          Vt = [],
          Kt = [],
          wt = [],
          rt = [],
          et = [],
          Lt = [],
          nt = [],
          Ut = [],
          Wt = [],
          At = [],
          Ct = [],
          Xt = [],
          Mt = [],
          Bt = [],
          lt = [],
          pt = [],
          gt = [],
          bt = [],
          vt = [],
          Ot = [],
          xt = [],
          Nt = [],
          Dt = [],
          Ht = [],
          ot = [],
          ct = [],
          Pt = [],
          It = [],
          mt = [],
          zt = [],
          St = [],
          jt = [],
          dt = [],
          Et = [],
          Yt = [],
          kt = [],
          Qt = [],
          Ft = [],
          Tt = [],
          st = [],
          ht = [],
          Ru = [],
          Ju = [],
          Gu = [],
          yu = [],
          tu = [],
          uu = [],
          Zu = [],
          qu = [],
          iu = [],
          fu = [],
          Vu = [],
          Ku = [],
          wu = [],
          ru = [],
          eu = [],
          au = [],
          Lu = [];
        return RR = class extends lG {
          get diffuseTexture() {
            return (0, yR.e)(this, JR, "f")
          }
          set diffuseTexture(RR) {
            (0, yR.i)(this, JR, RR, "f")
          }
          get ambientTexture() {
            return (0, yR.e)(this, VR, "f")
          }
          set ambientTexture(RR) {
            (0, yR.i)(this, VR, RR, "f")
          }
          get opacityTexture() {
            return (0, yR.e)(this, rR, "f")
          }
          set opacityTexture(RR) {
            (0, yR.i)(this, rR, RR, "f")
          }
          get reflectionTexture() {
            return (0, yR.e)(this, BR, "f")
          }
          set reflectionTexture(RR) {
            (0, yR.i)(this, BR, RR, "f")
          }
          get emissiveTexture() {
            return (0, yR.e)(this, lR, "f")
          }
          set emissiveTexture(RR) {
            (0, yR.i)(this, lR, RR, "f")
          }
          get specularTexture() {
            return (0, yR.e)(this, pR, "f")
          }
          set specularTexture(RR) {
            (0, yR.i)(this, pR, RR, "f")
          }
          get bumpTexture() {
            return (0, yR.e)(this, gR, "f")
          }
          set bumpTexture(RR) {
            (0, yR.i)(this, gR, RR, "f")
          }
          get lightmapTexture() {
            return (0, yR.e)(this, bR, "f")
          }
          set lightmapTexture(RR) {
            (0, yR.i)(this, bR, RR, "f")
          }
          get refractionTexture() {
            return (0, yR.e)(this, OR, "f")
          }
          set refractionTexture(RR) {
            (0, yR.i)(this, OR, RR, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, yR.e)(this, DR, "f")
          }
          set useAlphaFromDiffuseTexture(RR) {
            (0, yR.i)(this, DR, RR, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, yR.e)(this, HR, "f")
          }
          set useEmissiveAsIllumination(RR) {
            (0, yR.i)(this, HR, RR, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, yR.e)(this, oR, "f")
          }
          set linkEmissiveWithDiffuse(RR) {
            (0, yR.i)(this, oR, RR, "f")
          }
          get useSpecularOverAlpha() {
            return (0, yR.e)(this, cR, "f")
          }
          set useSpecularOverAlpha(RR) {
            (0, yR.i)(this, cR, RR, "f")
          }
          get useReflectionOverAlpha() {
            return (0, yR.e)(this, PR, "f")
          }
          set useReflectionOverAlpha(RR) {
            (0, yR.i)(this, PR, RR, "f")
          }
          get disableLighting() {
            return (0, yR.e)(this, IR, "f")
          }
          set disableLighting(RR) {
            (0, yR.i)(this, IR, RR, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, yR.e)(this, mR, "f")
          }
          set useObjectSpaceNormalMap(RR) {
            (0, yR.i)(this, mR, RR, "f")
          }
          get useParallax() {
            return (0, yR.e)(this, zR, "f")
          }
          set useParallax(RR) {
            (0, yR.i)(this, zR, RR, "f")
          }
          get useParallaxOcclusion() {
            return (0, yR.e)(this, SR, "f")
          }
          set useParallaxOcclusion(RR) {
            (0, yR.i)(this, SR, RR, "f")
          }
          get roughness() {
            return (0, yR.e)(this, jR, "f")
          }
          set roughness(RR) {
            (0, yR.i)(this, jR, RR, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, yR.e)(this, dR, "f")
          }
          set useLightmapAsShadowmap(RR) {
            (0, yR.i)(this, dR, RR, "f")
          }
          get diffuseFresnelParameters() {
            return (0, yR.e)(this, ER, "f")
          }
          set diffuseFresnelParameters(RR) {
            (0, yR.i)(this, ER, RR, "f")
          }
          get opacityFresnelParameters() {
            return (0, yR.e)(this, YR, "f")
          }
          set opacityFresnelParameters(RR) {
            (0, yR.i)(this, YR, RR, "f")
          }
          get reflectionFresnelParameters() {
            return (0, yR.e)(this, kR, "f")
          }
          set reflectionFresnelParameters(RR) {
            (0, yR.i)(this, kR, RR, "f")
          }
          get refractionFresnelParameters() {
            return (0, yR.e)(this, QR, "f")
          }
          set refractionFresnelParameters(RR) {
            (0, yR.i)(this, QR, RR, "f")
          }
          get emissiveFresnelParameters() {
            return (0, yR.e)(this, FR, "f")
          }
          set emissiveFresnelParameters(RR) {
            (0, yR.i)(this, FR, RR, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, yR.e)(this, TR, "f")
          }
          set useReflectionFresnelFromSpecular(RR) {
            (0, yR.i)(this, TR, RR, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, yR.e)(this, sR, "f")
          }
          set useGlossinessFromSpecularMapAlpha(RR) {
            (0, yR.i)(this, sR, RR, "f")
          }
          get maxSimultaneousLights() {
            return (0, yR.e)(this, hR, "f")
          }
          set maxSimultaneousLights(RR) {
            (0, yR.i)(this, hR, RR, "f")
          }
          get invertNormalMapX() {
            return (0, yR.e)(this, RJ, "f")
          }
          set invertNormalMapX(RR) {
            (0, yR.i)(this, RJ, RR, "f")
          }
          get invertNormalMapY() {
            return (0, yR.e)(this, JJ, "f")
          }
          set invertNormalMapY(RR) {
            (0, yR.i)(this, JJ, RR, "f")
          }
          get twoSidedLighting() {
            return (0, yR.e)(this, GJ, "f")
          }
          set twoSidedLighting(RR) {
            (0, yR.i)(this, GJ, RR, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, yR.e)(this, yJ, "f")
          }
          set applyDecalMapAfterDetailMap(RR) {
            (0, yR.i)(this, yJ, RR, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(GR, tR) {
            super(GR, tR, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || RR.ForceGLSL), this._diffuseTexture = (0, yR.m)(this, pG, null), JR.set(this, ((0, yR.m)(this, gG), (0, yR.m)(this, bG, void 0))), this._ambientTexture = ((0, yR.m)(this, vG), (0, yR.m)(this, OG, null)), VR.set(this, ((0, yR.m)(this, xG), (0, yR.m)(this, NG, void 0))), this._opacityTexture = ((0, yR.m)(this, DG), (0, yR.m)(this, HG, null)), rR.set(this, ((0, yR.m)(this, oG), (0, yR.m)(this, cG, void 0))), this._reflectionTexture = ((0, yR.m)(this, PG), (0, yR.m)(this, IG, null)), BR.set(this, ((0, yR.m)(this, mG), (0, yR.m)(this, zG, void 0))), this._emissiveTexture = ((0, yR.m)(this, SG), (0, yR.m)(this, jG, null)), lR.set(this, ((0, yR.m)(this, dG), (0, yR.m)(this, EG, void 0))), this._specularTexture = ((0, yR.m)(this, YG), (0, yR.m)(this, kG, null)), pR.set(this, ((0, yR.m)(this, QG), (0, yR.m)(this, FG, void 0))), this._bumpTexture = ((0, yR.m)(this, TG), (0, yR.m)(this, sG, null)), gR.set(this, ((0, yR.m)(this, hG), (0, yR.m)(this, Ry, void 0))), this._lightmapTexture = ((0, yR.m)(this, Jy), (0, yR.m)(this, Gy, null)), bR.set(this, ((0, yR.m)(this, yy), (0, yR.m)(this, ty, void 0))), this._refractionTexture = ((0, yR.m)(this, uy), (0, yR.m)(this, Zy, null)), OR.set(this, ((0, yR.m)(this, qy), (0, yR.m)(this, iy, void 0))), this.ambientColor = ((0, yR.m)(this, fy), (0, yR.m)(this, Vy, new qR.d(0, 0, 0))), this.diffuseColor = ((0, yR.m)(this, Ky), (0, yR.m)(this, wy, new qR.d(1, 1, 1))), this.specularColor = ((0, yR.m)(this, ry), (0, yR.m)(this, ey, new qR.d(1, 1, 1))), this.emissiveColor = ((0, yR.m)(this, ay), (0, yR.m)(this, Ly, new qR.d(0, 0, 0))), this.specularPower = ((0, yR.m)(this, ny), (0, yR.m)(this, Uy, 64)), this._useAlphaFromDiffuseTexture = ((0, yR.m)(this, Wy), (0, yR.m)(this, Ay, !1)), DR.set(this, ((0, yR.m)(this, Cy), (0, yR.m)(this, Xy, void 0))), this._useEmissiveAsIllumination = ((0, yR.m)(this, My), (0, yR.m)(this, By, !1)), HR.set(this, ((0, yR.m)(this, ly), (0, yR.m)(this, py, void 0))), this._linkEmissiveWithDiffuse = ((0, yR.m)(this, gy), (0, yR.m)(this, by, !1)), oR.set(this, ((0, yR.m)(this, vy), (0, yR.m)(this, Oy, void 0))), this._useSpecularOverAlpha = ((0, yR.m)(this, xy), (0, yR.m)(this, Ny, !1)), cR.set(this, ((0, yR.m)(this, Dy), (0, yR.m)(this, Hy, void 0))), this._useReflectionOverAlpha = ((0, yR.m)(this, oy), (0, yR.m)(this, cy, !1)), PR.set(this, ((0, yR.m)(this, Py), (0, yR.m)(this, Iy, void 0))), this._disableLighting = ((0, yR.m)(this, my), (0, yR.m)(this, zy, !1)), IR.set(this, ((0, yR.m)(this, Sy), (0, yR.m)(this, jy, void 0))), this._useObjectSpaceNormalMap = ((0, yR.m)(this, dy), (0, yR.m)(this, Ey, !1)), mR.set(this, ((0, yR.m)(this, Yy), (0, yR.m)(this, ky, void 0))), this._useParallax = ((0, yR.m)(this, Qy), (0, yR.m)(this, Fy, !1)), zR.set(this, ((0, yR.m)(this, Ty), (0, yR.m)(this, sy, void 0))), this._useParallaxOcclusion = ((0, yR.m)(this, hy), (0, yR.m)(this, Rt, !1)), SR.set(this, ((0, yR.m)(this, Jt), (0, yR.m)(this, Gt, void 0))), this.parallaxScaleBias = ((0, yR.m)(this, yt), (0, yR.m)(this, tt, .05)), this._roughness = ((0, yR.m)(this, ut), (0, yR.m)(this, Zt, 0)), jR.set(this, ((0, yR.m)(this, qt), (0, yR.m)(this, it, void 0))), this.indexOfRefraction = ((0, yR.m)(this, ft), (0, yR.m)(this, Vt, .98)), this.invertRefractionY = ((0, yR.m)(this, Kt), (0, yR.m)(this, wt, !0)), this.alphaCutOff = ((0, yR.m)(this, rt), (0, yR.m)(this, et, .4)), this._useLightmapAsShadowmap = ((0, yR.m)(this, Lt), (0, yR.m)(this, nt, !1)), dR.set(this, ((0, yR.m)(this, Ut), (0, yR.m)(this, Wt, void 0))), this._diffuseFresnelParameters = ((0, yR.m)(this, At), (0, yR.m)(this, Ct, void 0)), ER.set(this, ((0, yR.m)(this, Xt), (0, yR.m)(this, Mt, void 0))), this._opacityFresnelParameters = ((0, yR.m)(this, Bt), (0, yR.m)(this, lt, void 0)), YR.set(this, ((0, yR.m)(this, pt), (0, yR.m)(this, gt, void 0))), this._reflectionFresnelParameters = ((0, yR.m)(this, bt), (0, yR.m)(this, vt, void 0)), kR.set(this, ((0, yR.m)(this, Ot), (0, yR.m)(this, xt, void 0))), this._refractionFresnelParameters = ((0, yR.m)(this, Nt), (0, yR.m)(this, Dt, void 0)), QR.set(this, ((0, yR.m)(this, Ht), (0, yR.m)(this, ot, void 0))), this._emissiveFresnelParameters = ((0, yR.m)(this, ct), (0, yR.m)(this, Pt, void 0)), FR.set(this, ((0, yR.m)(this, It), (0, yR.m)(this, mt, void 0))), this._useReflectionFresnelFromSpecular = ((0, yR.m)(this, zt), (0, yR.m)(this, St, !1)), TR.set(this, ((0, yR.m)(this, jt), (0, yR.m)(this, dt, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, yR.m)(this, Et), (0, yR.m)(this, Yt, !1)), sR.set(this, ((0, yR.m)(this, kt), (0, yR.m)(this, Qt, void 0))), this._maxSimultaneousLights = ((0, yR.m)(this, Ft), (0, yR.m)(this, Tt, 4)), hR.set(this, ((0, yR.m)(this, st), (0, yR.m)(this, ht, void 0))), this._invertNormalMapX = ((0, yR.m)(this, Ru), (0, yR.m)(this, Ju, !1)), RJ.set(this, ((0, yR.m)(this, Gu), (0, yR.m)(this, yu, void 0))), this._invertNormalMapY = ((0, yR.m)(this, tu), (0, yR.m)(this, uu, !1)), JJ.set(this, ((0, yR.m)(this, Zu), (0, yR.m)(this, qu, void 0))), this._twoSidedLighting = ((0, yR.m)(this, iu), (0, yR.m)(this, fu, !1)), GJ.set(this, ((0, yR.m)(this, Vu), (0, yR.m)(this, Ku, void 0))), this._applyDecalMapAfterDetailMap = ((0, yR.m)(this, wu), (0, yR.m)(this, ru, !1)), yJ.set(this, ((0, yR.m)(this, eu), (0, yR.m)(this, au, void 0))), this._vertexPullingMetadata = ((0, yR.m)(this, Lu), null), this._renderTargets = new uR.f(16), this._globalAmbientColor = new qR.d(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new nR.e(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new fR.d, this.getRenderTargetTextures = () => (this._renderTargets.reset(), RR.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), RR.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(RR.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(RR.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === wR.d.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== wR.d.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(JR, GR) {
            let yR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const tR = GR._drawWrapper;
            if (tR.effect && this.isFrozen && tR._wasPreviouslyReady && tR._wasPreviouslyUsingInstances === yR) return !0;
            GR.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), GR.materialDefines = new xR(this._eventInfo.defineNames));
            const uR = this.jH(),
              ZR = GR.materialDefines;
            if (this._isReadyForSubMesh(GR)) return !0;
            const qR = uR.ke();
            if (ZR._needNormals = (0, AR.bb)(uR, JR, ZR, !0, this._maxSimultaneousLights, this._disableLighting), !(0, AR.e)(uR, JR, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, AR.fb)(uR, ZR);
            const VR = this.needAlphaBlendingForMesh(JR) && this.jH().useOrderIndependentTransparency;
            if ((0, AR.jb)(uR, ZR, this.canRenderToMRT && !VR), (0, AR.ib)(uR, ZR, VR), MR.c.PrepareDefines(qR.currentRenderPassId, JR, ZR), ZR._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, ZR._needUVs = !1;
              for (let RR = 1; RR <= 6; ++RR) ZR["MAINUV" + RR] = !1;
              if (uR.texturesEnabled) {
                if (ZR.DIFFUSEDIRECTUV = 0, ZR.BUMPDIRECTUV = 0, ZR.AMBIENTDIRECTUV = 0, ZR.OPACITYDIRECTUV = 0, ZR.EMISSIVEDIRECTUV = 0, ZR.SPECULARDIRECTUV = 0, ZR.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && RR.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, AR.db)(this._diffuseTexture, ZR, "DIFFUSE")
                } else ZR.DIFFUSE = !1;
                if (this._ambientTexture && RR.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, AR.db)(this._ambientTexture, ZR, "AMBIENT")
                } else ZR.AMBIENT = !1;
                if (this._opacityTexture && RR.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, AR.db)(this._opacityTexture, ZR, "OPACITY"), ZR.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else ZR.OPACITY = !1;
                if (this._reflectionTexture && RR.ReflectionTextureEnabled ? (ZR.ROUGHNESS = this._roughness > 0, ZR.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (ZR.ROUGHNESS = !1, ZR.REFLECTIONOVERALPHA = !1), !(0, AR.Z)(uR, this._reflectionTexture, ZR)) return !1;
                if (this._emissiveTexture && RR.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, AR.db)(this._emissiveTexture, ZR, "EMISSIVE")
                } else ZR.EMISSIVE = !1;
                if (this._lightmapTexture && RR.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, AR.db)(this._lightmapTexture, ZR, "LIGHTMAP"), ZR.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, ZR.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else ZR.LIGHTMAP = !1;
                if (this._specularTexture && RR.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, AR.db)(this._specularTexture, ZR, "SPECULAR"), ZR.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else ZR.SPECULAR = !1;
                if (uR.ke().getCaps().standardDerivatives && this._bumpTexture && RR.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, AR.db)(this._bumpTexture, ZR, "BUMP"), ZR.PARALLAX = this._useParallax, ZR.PARALLAX_RHS = uR.useRightHandedSystem, ZR.PARALLAXOCCLUSION = this._useParallaxOcclusion, ZR.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else ZR.BUMP = !1, ZR.PARALLAX = !1, ZR.PARALLAX_RHS = !1, ZR.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && RR.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  ZR._needUVs = !0, ZR.REFRACTION = !0, ZR.REFRACTIONMAP_3D = this._refractionTexture.isCube, ZR.RGBDREFRACTION = this._refractionTexture.isRGBD, ZR.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else ZR.REFRACTION = !1;
                ZR.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else ZR.DIFFUSE = !1, ZR.AMBIENT = !1, ZR.OPACITY = !1, ZR.REFLECTION = !1, ZR.EMISSIVE = !1, ZR.LIGHTMAP = !1, ZR.BUMP = !1, ZR.REFRACTION = !1;
              ZR.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), ZR.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, ZR.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, ZR.SPECULAROVERALPHA = this._useSpecularOverAlpha, ZR.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, ZR.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, ZR.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(JR), ZR.TEXTURE_REPETITION_MODE = qR.version > 1 || qR.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = ZR, this._eventInfo.subMesh = GR, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (ZR._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(ZR), ZR.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, ZR.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (ZR._areFresnelDirty && (RR.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (ZR.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, ZR.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, ZR.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, ZR.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, ZR.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, ZR.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, ZR._needNormals = !0, ZR.FRESNEL = !0) : ZR.FRESNEL = !1), ZR.AREALIGHTUSED || ZR.CLUSTLIGHT_BATCH)
              for (let RR = 0; RR < JR.lightSources.length; RR++)
                if (!JR.lightSources[RR]._isReady()) return !1;
            (0, AR.eb)(JR, uR, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(JR), ZR, this._applyDecalMapAfterDetailMap, this._useVertexPulling, GR.getRenderingMesh(), this._isVertexOutputInvariant), (0, AR.Y)(uR, qR, this, ZR, yR, null, GR.getRenderingMesh().hasThinInstances), this._eventInfo.defines = ZR, this._eventInfo.mesh = JR, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, AR.X)(JR, ZR, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let wR = !1;
            if (ZR.isDirty) {
              const yR = ZR._areLightsDisposed;
              ZR.markAsProcessed();
              const tR = new LR.c;
              ZR.REFLECTION && tR.addFallback(0, "REFLECTION"), ZR.SPECULAR && tR.addFallback(0, "SPECULAR"), ZR.BUMP && tR.addFallback(0, "BUMP"), ZR.PARALLAX && tR.addFallback(1, "PARALLAX"), ZR.PARALLAX_RHS && tR.addFallback(1, "PARALLAX_RHS"), ZR.PARALLAXOCCLUSION && tR.addFallback(0, "PARALLAXOCCLUSION"), ZR.SPECULAROVERALPHA && tR.addFallback(0, "SPECULAROVERALPHA"), ZR.FOG && tR.addFallback(1, "FOG"), ZR.POINTSIZE && tR.addFallback(0, "POINTSIZE"), ZR.LOGARITHMICDEPTH && tR.addFallback(0, "LOGARITHMICDEPTH"), (0, AR.F)(ZR, tR, this._maxSimultaneousLights), ZR.SPECULARTERM && tR.addFallback(0, "SPECULARTERM"), ZR.DIFFUSEFRESNEL && tR.addFallback(1, "DIFFUSEFRESNEL"), ZR.OPACITYFRESNEL && tR.addFallback(2, "OPACITYFRESNEL"), ZR.REFLECTIONFRESNEL && tR.addFallback(3, "REFLECTIONFRESNEL"), ZR.EMISSIVEFRESNEL && tR.addFallback(4, "EMISSIVEFRESNEL"), ZR.FRESNEL && tR.addFallback(4, "FRESNEL"), ZR.MULTIVIEW && tR.addFallback(0, "MULTIVIEW");
              const VR = [iR.l.PositionKind];
              ZR.NORMAL && VR.push(iR.l.NormalKind), ZR.TANGENT && VR.push(iR.l.TangentKind);
              for (let RR = 1; RR <= 6; ++RR) ZR["UV" + RR] && VR.push(`uv${1===RR?"":RR}`);
              ZR.VERTEXCOLOR && VR.push(iR.l.ColorKind), (0, AR.M)(VR, JR, ZR, tR), (0, AR.N)(VR, ZR), (0, AR.R)(VR, JR, ZR), (0, AR.I)(VR, JR, ZR);
              let rR = "default";
              const eR = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                aR = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, AR.rb)(eR, aR, !1);
              const nR = ["Material", "Scene", "Mesh"],
                CR = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: ZR.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = tR, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = ZR, this._eventInfo.uniforms = eR, this._eventInfo.attributes = VR, this._eventInfo.samplers = aR, this._eventInfo.uniformBuffersNames = nR, this._eventInfo.customCode = void 0, this._eventInfo.mesh = JR, this._eventInfo.indexParameters = CR, this._callbackPluginEventGeneric(128, this._eventInfo), MR.c.AddUniformsAndSamplers(eR, aR), fR.d.AddUniforms(eR), fR.d.AddSamplers(aR), KR.b && (KR.b.PrepareUniforms(eR, ZR), KR.b.PrepareSamplers(aR, ZR)), (0, AR.sb)({
                  uniformsNames: eR,
                  uniformBuffersNames: nR,
                  samplers: aR,
                  defines: ZR,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, UR.b)(eR), this._useVertexPulling) {
                const RR = GR.getRenderingMesh(),
                  JR = RR?.geometry;
                JR && (this._vertexPullingMetadata = (0, WR.h)(JR), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((RR, JR) => {
                  eR.push(`vp_${JR}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const XR = {};
              this.customShaderNameResolve && (rR = this.customShaderNameResolve(rR, eR, nR, aR, ZR, VR, XR));
              const BR = ZR.toString(),
                lR = GR.effect,
                pR = uR.ke().createEffect(rR, {
                  attributes: VR,
                  uniformsNames: eR,
                  uniformBuffersNames: nR,
                  samplers: aR,
                  defines: BR,
                  fallbacks: tR,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: CR,
                  processFinalCode: XR.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: ZR.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: RR._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, qR);
              if (this._eventInfo.customCode = void 0, pR)
                if (this._onEffectCreatedObservable && (vR.effect = pR, vR.subMesh = GR, this._onEffectCreatedObservable.notifyObservers(vR)), this.allowShaderHotSwapping && lR && !pR.isReady()) {
                  if (ZR.markAsUnprocessed(), wR = this.isFrozen, yR) return ZR._areLightsDisposed = !0, !1
                } else uR.resetCachedMaterial(), GR.setEffect(pR, ZR, this._materialContext)
            }
            return !(!GR.effect || !GR.effect.isReady()) && (ZR._renderId = uR.getRenderId(), tR._wasPreviouslyReady = !wR, tR._wasPreviouslyUsingInstances = yR, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const RR = this._uniformBuffer;
            RR.addUniform("diffuseLeftColor", 4), RR.addUniform("diffuseRightColor", 4), RR.addUniform("opacityParts", 4), RR.addUniform("reflectionLeftColor", 4), RR.addUniform("reflectionRightColor", 4), RR.addUniform("refractionLeftColor", 4), RR.addUniform("refractionRightColor", 4), RR.addUniform("emissiveLeftColor", 4), RR.addUniform("emissiveRightColor", 4), RR.addUniform("vDiffuseInfos", 2), RR.addUniform("vAmbientInfos", 2), RR.addUniform("vOpacityInfos", 2), RR.addUniform("vEmissiveInfos", 2), RR.addUniform("vLightmapInfos", 2), RR.addUniform("vSpecularInfos", 2), RR.addUniform("vBumpInfos", 3), RR.addUniform("diffuseMatrix", 16), RR.addUniform("ambientMatrix", 16), RR.addUniform("opacityMatrix", 16), RR.addUniform("emissiveMatrix", 16), RR.addUniform("lightmapMatrix", 16), RR.addUniform("specularMatrix", 16), RR.addUniform("bumpMatrix", 16), RR.addUniform("vTangentSpaceParams", 2), RR.addUniform("pointSize", 1), RR.addUniform("alphaCutOff", 1), RR.addUniform("refractionMatrix", 16), RR.addUniform("vRefractionInfos", 4), RR.addUniform("vRefractionPosition", 3), RR.addUniform("vRefractionSize", 3), RR.addUniform("vSpecularColor", 4), RR.addUniform("vEmissiveColor", 3), RR.addUniform("vDiffuseColor", 4), RR.addUniform("vAmbientColor", 3), RR.addUniform("cameraInfo", 4), RR.addUniform("vTextureRepetitionHexTilingParams", 4), (0, AR.nb)(RR, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(JR, GR, yR) {
            const tR = this.jH(),
              uR = yR.materialDefines;
            if (!uR) return;
            const iR = yR.effect;
            if (!iR) return;
            this._activeEffect = iR, GR.getMeshUniformBuffer().bindToEffect(iR, "Mesh"), GR.transferToEffect(JR), this._uniformBuffer.bindToEffect(iR, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, tR, GR, JR, this.isFrozen), MR.c.Bind(tR.ke().currentRenderPassId, this._activeEffect, GR, JR, this);
            const fR = tR.activeCamera;
            fR ? this._uniformBuffer.updateFloat4("cameraInfo", fR.minZ, fR.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const VR = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", VR[0], VR[1], VR[2], VR[3]), this._eventInfo.subMesh = yR, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), uR.OBJECTSPACE_NORMALMAP && (JR.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const KR = this._mustRebind(tR, iR, yR, GR.visibility),
              wR = tR.ke()._features.needToAlwaysBindUniformBuffers;
            (0, AR.h)(GR, iR), this._vertexPullingMetadata && (0, WR.d)(iR, this._vertexPullingMetadata);
            const rR = this._uniformBuffer;
            if (KR) {
              if (this.bindViewProjection(iR), !rR.useUbo || !this.isFrozen || !rR.isSync || yR._drawWrapper._forceRebindOnNextCall) {
                if (RR.FresnelEnabled && uR.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (rR.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), rR.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const RR = qR.j.Color3[0];
                    RR.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), rR.updateColor4("opacityParts", RR, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (rR.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), rR.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (rR.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), rR.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (rR.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), rR.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (uR.ALPHATEST && rR.updateFloat("alphaCutOff", this.alphaCutOff), tR.texturesEnabled && (this._diffuseTexture && RR.DiffuseTextureEnabled && (rR.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, AR.B)(this._diffuseTexture, rR, "diffuse")), this._ambientTexture && RR.AmbientTextureEnabled && (rR.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, AR.B)(this._ambientTexture, rR, "ambient")), this._opacityTexture && RR.OpacityTextureEnabled && (rR.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, AR.B)(this._opacityTexture, rR, "opacity")), (0, AR.l)(tR, uR, rR, qR.d.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && RR.ReflectionTextureEnabled || rR.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && RR.EmissiveTextureEnabled && (rR.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, AR.B)(this._emissiveTexture, rR, "emissive")), this._lightmapTexture && RR.LightmapTextureEnabled && (rR.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, AR.B)(this._lightmapTexture, rR, "lightmap")), this._specularTexture && RR.SpecularTextureEnabled && (rR.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, AR.B)(this._specularTexture, rR, "specular")), this._bumpTexture && tR.ke().getCaps().standardDerivatives && RR.BumpTextureEnabled && (rR.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, AR.B)(this._bumpTexture, rR, "bump"), tR._mirroredCameraPosition ? rR.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : rR.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && RR.RefractionTextureEnabled)) {
                  let RR = 1;
                  if (this._refractionTexture.isCube || (rR.FRR("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (RR = this._refractionTexture.depth)), rR.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, RR, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const RR = this._refractionTexture;
                    rR.updateVector3("vRefractionPosition", RR.boundingBoxPosition), rR.updateVector3("vRefractionSize", RR.boundingBoxSize)
                  }
                }
                this.pointsCloud && rR.updateFloat("pointSize", this.pointSize), rR.updateColor4("vSpecularColor", this.specularColor, this.specularPower), rR.updateColor3("vEmissiveColor", RR.EmissiveTextureEnabled ? this.emissiveColor : qR.d.BlackReadOnly), rR.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), tR.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), rR.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              tR.texturesEnabled && (this._diffuseTexture && RR.DiffuseTextureEnabled && iR.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && RR.AmbientTextureEnabled && iR.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && RR.OpacityTextureEnabled && iR.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && RR.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? iR.setTexture("reflectionCubeSampler", this._reflectionTexture) : iR.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && RR.EmissiveTextureEnabled && iR.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && RR.LightmapTextureEnabled && iR.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && RR.SpecularTextureEnabled && iR.setTexture("specularSampler", this._specularTexture), this._bumpTexture && tR.ke().getCaps().standardDerivatives && RR.BumpTextureEnabled && iR.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && RR.RefractionTextureEnabled && (this._refractionTexture.isCube ? iR.setTexture("refractionCubeSampler", this._refractionTexture) : iR.setTexture("refraction2DSampler", this._refractionTexture))), this.jH().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(GR) && this.jH().depthPeelingRenderer.bind(iR), this._eventInfo.subMesh = yR, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, UR.c)(iR, this, tR), this.bindEyePosition(iR)
            } else wR && (this._needToBindSceneUbo = !0);
            !KR && this.isFrozen && !wR || !tR.lightsEnabled || this._disableLighting || (0, AR.q)(tR, GR, iR, uR, this._maxSimultaneousLights), !KR && this.isFrozen || ((tR.fogEnabled && GR.applyFog && tR.fogMode !== ZR.g.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || GR.receiveShadows || uR.PREPASS || uR.CLUSTLIGHT_BATCH) && this.bindView(iR), (0, AR.k)(tR, GR, iR), uR.NUM_MORPH_INFLUENCERS && (0, AR.w)(GR, iR), uR.BAKED_VERTEX_ANIMATION_TEXTURE && GR.bakedVertexAnimationManager?.bind(iR, uR.INSTANCES), this.useLogarithmicDepth && (0, AR.u)(uR, iR, tR), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(GR, this._activeEffect, yR), rR.update()
          }
          _canBindRunFollower(JR, GR, yR, tR, uR) {
            const ZR = JR.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === RR.prototype.isReadyForSubMesh && this.bindForSubMesh === RR.prototype.bindForSubMesh && this._mustRebind === eR.d.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !GR._features.needToAlwaysBindUniformBuffers && !(ZR && ZR.enabled && ZR.currentRTisSceneRT) && !MR.c._Configurations[GR.currentRenderPassId] && !tR.materialDefines?.OBJECTSPACE_NORMALMAP && !yR.skeleton && !uR._bonesComputationForcedToCPU
          }
          _bindRunFollower(RR, JR, GR, yR) {
            this._activeEffect = yR, JR.getMeshUniformBuffer().bindToEffect(yR, "Mesh"), JR.transferToEffect(RR);
            const tR = this._uniformBuffer;
            tR.bindToEffect(yR, "Material");
            const uR = this._scene.activeCamera;
            uR ? tR.updateFloat4("cameraInfo", uR.minZ, uR.maxZ, 0, 0) : tR.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const ZR = this.textureRepetitionHexTilingParams;
            tR.updateFloat4("vTextureRepetitionHexTilingParams", ZR[0], ZR[1], ZR[2], ZR[3]), this._afterBind(JR, yR, GR), tR.update()
          }
          getAnimatables() {
            const RR = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && RR.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && RR.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && RR.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && RR.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && RR.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && RR.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && RR.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && RR.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && RR.push(this._refractionTexture), RR
          }
          getActiveTextures() {
            const RR = super.getActiveTextures();
            return this._diffuseTexture && RR.push(this._diffuseTexture), this._ambientTexture && RR.push(this._ambientTexture), this._opacityTexture && RR.push(this._opacityTexture), this._reflectionTexture && RR.push(this._reflectionTexture), this._emissiveTexture && RR.push(this._emissiveTexture), this._specularTexture && RR.push(this._specularTexture), this._bumpTexture && RR.push(this._bumpTexture), this._lightmapTexture && RR.push(this._lightmapTexture), this._refractionTexture && RR.push(this._refractionTexture), RR
          }
          hasTexture(RR) {
            return !!super.hasTexture(RR) || (this._diffuseTexture === RR || (this._ambientTexture === RR || (this._opacityTexture === RR || (this._reflectionTexture === RR || (this._emissiveTexture === RR || (this._specularTexture === RR || (this._bumpTexture === RR || (this._lightmapTexture === RR || this._refractionTexture === RR))))))))
          }
          dispose(RR, JR) {
            JR && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(RR, JR)
          }
          clone(JR) {
            let GR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const tR = CR.c.Clone((() => new RR(JR, this.jH())), this, {
              cloneTexturesOnlyOnce: GR
            });
            return tR.name = JR, tR.id = JR, this.stencil.copyTo(tR.stencil), this._clonePlugins(tR, yR), tR
          }
          static Parse(JR, GR, yR) {
            const tR = CR.c.Parse((() => new RR(JR.name, GR)), JR, GR, yR);
            return JR.stencil && tR.stencil.parse(JR.stencil, GR, yR), wR.d._ParsePlugins(JR, tR, GR, yR), tR
          }
          static get DiffuseTextureEnabled() {
            return aR.b.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(RR) {
            aR.b.DiffuseTextureEnabled = RR
          }
          static get DetailTextureEnabled() {
            return aR.b.DetailTextureEnabled
          }
          static set DetailTextureEnabled(RR) {
            aR.b.DetailTextureEnabled = RR
          }
          static get AmbientTextureEnabled() {
            return aR.b.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(RR) {
            aR.b.AmbientTextureEnabled = RR
          }
          static get OpacityTextureEnabled() {
            return aR.b.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(RR) {
            aR.b.OpacityTextureEnabled = RR
          }
          static get ReflectionTextureEnabled() {
            return aR.b.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(RR) {
            aR.b.ReflectionTextureEnabled = RR
          }
          static get EmissiveTextureEnabled() {
            return aR.b.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(RR) {
            aR.b.EmissiveTextureEnabled = RR
          }
          static get SpecularTextureEnabled() {
            return aR.b.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(RR) {
            aR.b.SpecularTextureEnabled = RR
          }
          static get BumpTextureEnabled() {
            return aR.b.BumpTextureEnabled
          }
          static set BumpTextureEnabled(RR) {
            aR.b.BumpTextureEnabled = RR
          }
          static get LightmapTextureEnabled() {
            return aR.b.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(RR) {
            aR.b.LightmapTextureEnabled = RR
          }
          static get RefractionTextureEnabled() {
            return aR.b.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(RR) {
            aR.b.RefractionTextureEnabled = RR
          }
          static get ColorGradingTextureEnabled() {
            return aR.b.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(RR) {
            aR.b.ColorGradingTextureEnabled = RR
          }
          static get FresnelEnabled() {
            return aR.b.FresnelEnabled
          }
          static set FresnelEnabled(RR) {
            aR.b.FresnelEnabled = RR
          }
        }, JR = new WeakMap, VR = new WeakMap, rR = new WeakMap, BR = new WeakMap, lR = new WeakMap, pR = new WeakMap, gR = new WeakMap, bR = new WeakMap, OR = new WeakMap, DR = new WeakMap, HR = new WeakMap, oR = new WeakMap, cR = new WeakMap, PR = new WeakMap, IR = new WeakMap, mR = new WeakMap, zR = new WeakMap, SR = new WeakMap, jR = new WeakMap, dR = new WeakMap, ER = new WeakMap, YR = new WeakMap, kR = new WeakMap, QR = new WeakMap, FR = new WeakMap, TR = new WeakMap, sR = new WeakMap, hR = new WeakMap, RJ = new WeakMap, JJ = new WeakMap, GJ = new WeakMap, yJ = new WeakMap, (() => {
          const JR = "function" === typeof Symbol && Symbol.metadata ? Object.create(lG[Symbol.metadata] ?? null) : void 0;
          tJ = [(0, tR.C)("diffuseTexture")], uJ = [(0, tR.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], ZJ = [(0, tR.C)("ambientTexture")], qJ = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], iJ = [(0, tR.C)("opacityTexture")], fJ = [(0, tR.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], VJ = [(0, tR.C)("reflectionTexture")], KJ = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], wJ = [(0, tR.C)("emissiveTexture")], rJ = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], eJ = [(0, tR.C)("specularTexture")], aJ = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], LJ = [(0, tR.C)("bumpTexture")], nJ = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], UJ = [(0, tR.C)("lightmapTexture")], WJ = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], AJ = [(0, tR.C)("refractionTexture")], CJ = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], XJ = [(0, tR.k)("ambient")], MJ = [(0, tR.k)("diffuse")], BJ = [(0, tR.k)("specular")], lJ = [(0, tR.k)("emissive")], pJ = [(0, tR.H)()], gJ = [(0, tR.H)("useAlphaFromDiffuseTexture")], bJ = [() => ({
            init(RR) {
              return void 0 === RR && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = RR), RR
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(RR) {
              this._useAlphaFromDiffuseTexture = RR
            }
          })], vJ = [(0, tR.H)("useEmissiveAsIllumination")], OJ = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], xJ = [(0, tR.H)("linkEmissiveWithDiffuse")], NJ = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], DJ = [(0, tR.H)("useSpecularOverAlpha")], HJ = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], oJ = [(0, tR.H)("useReflectionOverAlpha")], cJ = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], PJ = [(0, tR.H)("disableLighting")], IJ = [(0, tR.d)("_markAllSubMeshesAsLightsDirty")], mJ = [(0, tR.H)("useObjectSpaceNormalMap")], zJ = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], SJ = [(0, tR.H)("useParallax")], jJ = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], dJ = [(0, tR.H)("useParallaxOcclusion")], EJ = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], YJ = [(0, tR.H)()], kJ = [(0, tR.H)("roughness")], QJ = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], FJ = [(0, tR.H)()], TJ = [(0, tR.H)()], sJ = [(0, tR.H)()], hJ = [(0, tR.H)("useLightmapAsShadowmap")], RG = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], JG = [(0, tR.q)("diffuseFresnelParameters")], GG = [(0, tR.d)("_markAllSubMeshesAsFresnelDirty")], yG = [(0, tR.q)("opacityFresnelParameters")], tG = [(0, tR.d)("_markAllSubMeshesAsFresnelAndMiscDirty")], uG = [(0, tR.q)("reflectionFresnelParameters")], ZG = [(0, tR.d)("_markAllSubMeshesAsFresnelDirty")], qG = [(0, tR.q)("refractionFresnelParameters")], iG = [(0, tR.d)("_markAllSubMeshesAsFresnelDirty")], fG = [(0, tR.q)("emissiveFresnelParameters")], VG = [(0, tR.d)("_markAllSubMeshesAsFresnelDirty")], KG = [(0, tR.H)("useReflectionFresnelFromSpecular")], wG = [(0, tR.d)("_markAllSubMeshesAsFresnelDirty")], rG = [(0, tR.H)("useGlossinessFromSpecularMapAlpha")], eG = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], aG = [(0, tR.H)("maxSimultaneousLights")], LG = [(0, tR.d)("_markAllSubMeshesAsLightsDirty")], nG = [(0, tR.H)("invertNormalMapX")], UG = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], WG = [(0, tR.H)("invertNormalMapY")], AG = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], CG = [(0, tR.H)("twoSidedLighting")], XG = [(0, tR.d)("_markAllSubMeshesAsTexturesDirty")], MG = [(0, tR.H)("applyDecalMapAfterDetailMap")], BG = [(0, tR.d)("_markAllSubMeshesAsMiscDirty")], (0, yR.l)(RR, null, uJ, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "diffuseTexture" in RR,
              get: RR => RR.diffuseTexture,
              set: (RR, JR) => {
                RR.diffuseTexture = JR
              }
            },
            metadata: JR
          }, bG, vG), (0, yR.l)(RR, null, qJ, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "ambientTexture" in RR,
              get: RR => RR.ambientTexture,
              set: (RR, JR) => {
                RR.ambientTexture = JR
              }
            },
            metadata: JR
          }, NG, DG), (0, yR.l)(RR, null, fJ, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "opacityTexture" in RR,
              get: RR => RR.opacityTexture,
              set: (RR, JR) => {
                RR.opacityTexture = JR
              }
            },
            metadata: JR
          }, cG, PG), (0, yR.l)(RR, null, KJ, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "reflectionTexture" in RR,
              get: RR => RR.reflectionTexture,
              set: (RR, JR) => {
                RR.reflectionTexture = JR
              }
            },
            metadata: JR
          }, zG, SG), (0, yR.l)(RR, null, rJ, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "emissiveTexture" in RR,
              get: RR => RR.emissiveTexture,
              set: (RR, JR) => {
                RR.emissiveTexture = JR
              }
            },
            metadata: JR
          }, EG, YG), (0, yR.l)(RR, null, aJ, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "specularTexture" in RR,
              get: RR => RR.specularTexture,
              set: (RR, JR) => {
                RR.specularTexture = JR
              }
            },
            metadata: JR
          }, FG, TG), (0, yR.l)(RR, null, nJ, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "bumpTexture" in RR,
              get: RR => RR.bumpTexture,
              set: (RR, JR) => {
                RR.bumpTexture = JR
              }
            },
            metadata: JR
          }, Ry, Jy), (0, yR.l)(RR, null, WJ, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "lightmapTexture" in RR,
              get: RR => RR.lightmapTexture,
              set: (RR, JR) => {
                RR.lightmapTexture = JR
              }
            },
            metadata: JR
          }, ty, uy), (0, yR.l)(RR, null, CJ, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "refractionTexture" in RR,
              get: RR => RR.refractionTexture,
              set: (RR, JR) => {
                RR.refractionTexture = JR
              }
            },
            metadata: JR
          }, iy, fy), (0, yR.l)(RR, null, bJ, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "useAlphaFromDiffuseTexture" in RR,
              get: RR => RR.useAlphaFromDiffuseTexture,
              set: (RR, JR) => {
                RR.useAlphaFromDiffuseTexture = JR
              }
            },
            metadata: JR
          }, Xy, My), (0, yR.l)(RR, null, OJ, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: RR => "useEmissiveAsIllumination" in RR,
              get: RR => RR.useEmissiveAsIllumination,
              set: (RR, JR) => {
                RR.useEmissiveAsIllumination = JR
              }
            },
            metadata: JR
          }, py, gy), (0, yR.l)(RR, null, NJ, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: RR => "linkEmissiveWithDiffuse" in RR,
              get: RR => RR.linkEmissiveWithDiffuse,
              set: (RR, JR) => {
                RR.linkEmissiveWithDiffuse = JR
              }
            },
            metadata: JR
          }, Oy, xy), (0, yR.l)(RR, null, HJ, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: RR => "useSpecularOverAlpha" in RR,
              get: RR => RR.useSpecularOverAlpha,
              set: (RR, JR) => {
                RR.useSpecularOverAlpha = JR
              }
            },
            metadata: JR
          }, Hy, oy), (0, yR.l)(RR, null, cJ, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: RR => "useReflectionOverAlpha" in RR,
              get: RR => RR.useReflectionOverAlpha,
              set: (RR, JR) => {
                RR.useReflectionOverAlpha = JR
              }
            },
            metadata: JR
          }, Iy, my), (0, yR.l)(RR, null, IJ, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: RR => "disableLighting" in RR,
              get: RR => RR.disableLighting,
              set: (RR, JR) => {
                RR.disableLighting = JR
              }
            },
            metadata: JR
          }, jy, dy), (0, yR.l)(RR, null, zJ, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: RR => "useObjectSpaceNormalMap" in RR,
              get: RR => RR.useObjectSpaceNormalMap,
              set: (RR, JR) => {
                RR.useObjectSpaceNormalMap = JR
              }
            },
            metadata: JR
          }, ky, Qy), (0, yR.l)(RR, null, jJ, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: RR => "useParallax" in RR,
              get: RR => RR.useParallax,
              set: (RR, JR) => {
                RR.useParallax = JR
              }
            },
            metadata: JR
          }, sy, hy), (0, yR.l)(RR, null, EJ, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: RR => "useParallaxOcclusion" in RR,
              get: RR => RR.useParallaxOcclusion,
              set: (RR, JR) => {
                RR.useParallaxOcclusion = JR
              }
            },
            metadata: JR
          }, Gt, yt), (0, yR.l)(RR, null, QJ, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: RR => "roughness" in RR,
              get: RR => RR.roughness,
              set: (RR, JR) => {
                RR.roughness = JR
              }
            },
            metadata: JR
          }, it, ft), (0, yR.l)(RR, null, RG, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: RR => "useLightmapAsShadowmap" in RR,
              get: RR => RR.useLightmapAsShadowmap,
              set: (RR, JR) => {
                RR.useLightmapAsShadowmap = JR
              }
            },
            metadata: JR
          }, Wt, At), (0, yR.l)(RR, null, GG, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: RR => "diffuseFresnelParameters" in RR,
              get: RR => RR.diffuseFresnelParameters,
              set: (RR, JR) => {
                RR.diffuseFresnelParameters = JR
              }
            },
            metadata: JR
          }, Mt, Bt), (0, yR.l)(RR, null, tG, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: RR => "opacityFresnelParameters" in RR,
              get: RR => RR.opacityFresnelParameters,
              set: (RR, JR) => {
                RR.opacityFresnelParameters = JR
              }
            },
            metadata: JR
          }, gt, bt), (0, yR.l)(RR, null, ZG, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: RR => "reflectionFresnelParameters" in RR,
              get: RR => RR.reflectionFresnelParameters,
              set: (RR, JR) => {
                RR.reflectionFresnelParameters = JR
              }
            },
            metadata: JR
          }, xt, Nt), (0, yR.l)(RR, null, iG, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: RR => "refractionFresnelParameters" in RR,
              get: RR => RR.refractionFresnelParameters,
              set: (RR, JR) => {
                RR.refractionFresnelParameters = JR
              }
            },
            metadata: JR
          }, ot, ct), (0, yR.l)(RR, null, VG, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: RR => "emissiveFresnelParameters" in RR,
              get: RR => RR.emissiveFresnelParameters,
              set: (RR, JR) => {
                RR.emissiveFresnelParameters = JR
              }
            },
            metadata: JR
          }, mt, zt), (0, yR.l)(RR, null, wG, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: RR => "useReflectionFresnelFromSpecular" in RR,
              get: RR => RR.useReflectionFresnelFromSpecular,
              set: (RR, JR) => {
                RR.useReflectionFresnelFromSpecular = JR
              }
            },
            metadata: JR
          }, dt, Et), (0, yR.l)(RR, null, eG, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: RR => "useGlossinessFromSpecularMapAlpha" in RR,
              get: RR => RR.useGlossinessFromSpecularMapAlpha,
              set: (RR, JR) => {
                RR.useGlossinessFromSpecularMapAlpha = JR
              }
            },
            metadata: JR
          }, Qt, Ft), (0, yR.l)(RR, null, LG, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: RR => "maxSimultaneousLights" in RR,
              get: RR => RR.maxSimultaneousLights,
              set: (RR, JR) => {
                RR.maxSimultaneousLights = JR
              }
            },
            metadata: JR
          }, ht, Ru), (0, yR.l)(RR, null, UG, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: RR => "invertNormalMapX" in RR,
              get: RR => RR.invertNormalMapX,
              set: (RR, JR) => {
                RR.invertNormalMapX = JR
              }
            },
            metadata: JR
          }, yu, tu), (0, yR.l)(RR, null, AG, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: RR => "invertNormalMapY" in RR,
              get: RR => RR.invertNormalMapY,
              set: (RR, JR) => {
                RR.invertNormalMapY = JR
              }
            },
            metadata: JR
          }, qu, iu), (0, yR.l)(RR, null, XG, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: RR => "twoSidedLighting" in RR,
              get: RR => RR.twoSidedLighting,
              set: (RR, JR) => {
                RR.twoSidedLighting = JR
              }
            },
            metadata: JR
          }, Ku, wu), (0, yR.l)(RR, null, BG, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: RR => "applyDecalMapAfterDetailMap" in RR,
              get: RR => RR.applyDecalMapAfterDetailMap,
              set: (RR, JR) => {
                RR.applyDecalMapAfterDetailMap = JR
              }
            },
            metadata: JR
          }, au, Lu), (0, yR.l)(null, null, tJ, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "_diffuseTexture" in RR,
              get: RR => RR._diffuseTexture,
              set: (RR, JR) => {
                RR._diffuseTexture = JR
              }
            },
            metadata: JR
          }, pG, gG), (0, yR.l)(null, null, ZJ, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "_ambientTexture" in RR,
              get: RR => RR._ambientTexture,
              set: (RR, JR) => {
                RR._ambientTexture = JR
              }
            },
            metadata: JR
          }, OG, xG), (0, yR.l)(null, null, iJ, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "_opacityTexture" in RR,
              get: RR => RR._opacityTexture,
              set: (RR, JR) => {
                RR._opacityTexture = JR
              }
            },
            metadata: JR
          }, HG, oG), (0, yR.l)(null, null, VJ, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "_reflectionTexture" in RR,
              get: RR => RR._reflectionTexture,
              set: (RR, JR) => {
                RR._reflectionTexture = JR
              }
            },
            metadata: JR
          }, IG, mG), (0, yR.l)(null, null, wJ, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "_emissiveTexture" in RR,
              get: RR => RR._emissiveTexture,
              set: (RR, JR) => {
                RR._emissiveTexture = JR
              }
            },
            metadata: JR
          }, jG, dG), (0, yR.l)(null, null, eJ, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "_specularTexture" in RR,
              get: RR => RR._specularTexture,
              set: (RR, JR) => {
                RR._specularTexture = JR
              }
            },
            metadata: JR
          }, kG, QG), (0, yR.l)(null, null, LJ, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "_bumpTexture" in RR,
              get: RR => RR._bumpTexture,
              set: (RR, JR) => {
                RR._bumpTexture = JR
              }
            },
            metadata: JR
          }, sG, hG), (0, yR.l)(null, null, UJ, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "_lightmapTexture" in RR,
              get: RR => RR._lightmapTexture,
              set: (RR, JR) => {
                RR._lightmapTexture = JR
              }
            },
            metadata: JR
          }, Gy, yy), (0, yR.l)(null, null, AJ, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "_refractionTexture" in RR,
              get: RR => RR._refractionTexture,
              set: (RR, JR) => {
                RR._refractionTexture = JR
              }
            },
            metadata: JR
          }, Zy, qy), (0, yR.l)(null, null, XJ, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: RR => "ambientColor" in RR,
              get: RR => RR.ambientColor,
              set: (RR, JR) => {
                RR.ambientColor = JR
              }
            },
            metadata: JR
          }, Vy, Ky), (0, yR.l)(null, null, MJ, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: RR => "diffuseColor" in RR,
              get: RR => RR.diffuseColor,
              set: (RR, JR) => {
                RR.diffuseColor = JR
              }
            },
            metadata: JR
          }, wy, ry), (0, yR.l)(null, null, BJ, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: RR => "specularColor" in RR,
              get: RR => RR.specularColor,
              set: (RR, JR) => {
                RR.specularColor = JR
              }
            },
            metadata: JR
          }, ey, ay), (0, yR.l)(null, null, lJ, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: RR => "emissiveColor" in RR,
              get: RR => RR.emissiveColor,
              set: (RR, JR) => {
                RR.emissiveColor = JR
              }
            },
            metadata: JR
          }, Ly, ny), (0, yR.l)(null, null, pJ, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: RR => "specularPower" in RR,
              get: RR => RR.specularPower,
              set: (RR, JR) => {
                RR.specularPower = JR
              }
            },
            metadata: JR
          }, Uy, Wy), (0, yR.l)(null, null, gJ, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "_useAlphaFromDiffuseTexture" in RR,
              get: RR => RR._useAlphaFromDiffuseTexture,
              set: (RR, JR) => {
                RR._useAlphaFromDiffuseTexture = JR
              }
            },
            metadata: JR
          }, Ay, Cy), (0, yR.l)(null, null, vJ, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: RR => "_useEmissiveAsIllumination" in RR,
              get: RR => RR._useEmissiveAsIllumination,
              set: (RR, JR) => {
                RR._useEmissiveAsIllumination = JR
              }
            },
            metadata: JR
          }, By, ly), (0, yR.l)(null, null, xJ, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: RR => "_linkEmissiveWithDiffuse" in RR,
              get: RR => RR._linkEmissiveWithDiffuse,
              set: (RR, JR) => {
                RR._linkEmissiveWithDiffuse = JR
              }
            },
            metadata: JR
          }, by, vy), (0, yR.l)(null, null, DJ, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: RR => "_useSpecularOverAlpha" in RR,
              get: RR => RR._useSpecularOverAlpha,
              set: (RR, JR) => {
                RR._useSpecularOverAlpha = JR
              }
            },
            metadata: JR
          }, Ny, Dy), (0, yR.l)(null, null, oJ, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: RR => "_useReflectionOverAlpha" in RR,
              get: RR => RR._useReflectionOverAlpha,
              set: (RR, JR) => {
                RR._useReflectionOverAlpha = JR
              }
            },
            metadata: JR
          }, cy, Py), (0, yR.l)(null, null, PJ, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: RR => "_disableLighting" in RR,
              get: RR => RR._disableLighting,
              set: (RR, JR) => {
                RR._disableLighting = JR
              }
            },
            metadata: JR
          }, zy, Sy), (0, yR.l)(null, null, mJ, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: RR => "_useObjectSpaceNormalMap" in RR,
              get: RR => RR._useObjectSpaceNormalMap,
              set: (RR, JR) => {
                RR._useObjectSpaceNormalMap = JR
              }
            },
            metadata: JR
          }, Ey, Yy), (0, yR.l)(null, null, SJ, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: RR => "_useParallax" in RR,
              get: RR => RR._useParallax,
              set: (RR, JR) => {
                RR._useParallax = JR
              }
            },
            metadata: JR
          }, Fy, Ty), (0, yR.l)(null, null, dJ, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: RR => "_useParallaxOcclusion" in RR,
              get: RR => RR._useParallaxOcclusion,
              set: (RR, JR) => {
                RR._useParallaxOcclusion = JR
              }
            },
            metadata: JR
          }, Rt, Jt), (0, yR.l)(null, null, YJ, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: RR => "parallaxScaleBias" in RR,
              get: RR => RR.parallaxScaleBias,
              set: (RR, JR) => {
                RR.parallaxScaleBias = JR
              }
            },
            metadata: JR
          }, tt, ut), (0, yR.l)(null, null, kJ, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: RR => "_roughness" in RR,
              get: RR => RR._roughness,
              set: (RR, JR) => {
                RR._roughness = JR
              }
            },
            metadata: JR
          }, Zt, qt), (0, yR.l)(null, null, FJ, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: RR => "indexOfRefraction" in RR,
              get: RR => RR.indexOfRefraction,
              set: (RR, JR) => {
                RR.indexOfRefraction = JR
              }
            },
            metadata: JR
          }, Vt, Kt), (0, yR.l)(null, null, TJ, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: RR => "invertRefractionY" in RR,
              get: RR => RR.invertRefractionY,
              set: (RR, JR) => {
                RR.invertRefractionY = JR
              }
            },
            metadata: JR
          }, wt, rt), (0, yR.l)(null, null, sJ, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: RR => "alphaCutOff" in RR,
              get: RR => RR.alphaCutOff,
              set: (RR, JR) => {
                RR.alphaCutOff = JR
              }
            },
            metadata: JR
          }, et, Lt), (0, yR.l)(null, null, hJ, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: RR => "_useLightmapAsShadowmap" in RR,
              get: RR => RR._useLightmapAsShadowmap,
              set: (RR, JR) => {
                RR._useLightmapAsShadowmap = JR
              }
            },
            metadata: JR
          }, nt, Ut), (0, yR.l)(null, null, JG, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: RR => "_diffuseFresnelParameters" in RR,
              get: RR => RR._diffuseFresnelParameters,
              set: (RR, JR) => {
                RR._diffuseFresnelParameters = JR
              }
            },
            metadata: JR
          }, Ct, Xt), (0, yR.l)(null, null, yG, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: RR => "_opacityFresnelParameters" in RR,
              get: RR => RR._opacityFresnelParameters,
              set: (RR, JR) => {
                RR._opacityFresnelParameters = JR
              }
            },
            metadata: JR
          }, lt, pt), (0, yR.l)(null, null, uG, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: RR => "_reflectionFresnelParameters" in RR,
              get: RR => RR._reflectionFresnelParameters,
              set: (RR, JR) => {
                RR._reflectionFresnelParameters = JR
              }
            },
            metadata: JR
          }, vt, Ot), (0, yR.l)(null, null, qG, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: RR => "_refractionFresnelParameters" in RR,
              get: RR => RR._refractionFresnelParameters,
              set: (RR, JR) => {
                RR._refractionFresnelParameters = JR
              }
            },
            metadata: JR
          }, Dt, Ht), (0, yR.l)(null, null, fG, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: RR => "_emissiveFresnelParameters" in RR,
              get: RR => RR._emissiveFresnelParameters,
              set: (RR, JR) => {
                RR._emissiveFresnelParameters = JR
              }
            },
            metadata: JR
          }, Pt, It), (0, yR.l)(null, null, KG, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: RR => "_useReflectionFresnelFromSpecular" in RR,
              get: RR => RR._useReflectionFresnelFromSpecular,
              set: (RR, JR) => {
                RR._useReflectionFresnelFromSpecular = JR
              }
            },
            metadata: JR
          }, St, jt), (0, yR.l)(null, null, rG, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: RR => "_useGlossinessFromSpecularMapAlpha" in RR,
              get: RR => RR._useGlossinessFromSpecularMapAlpha,
              set: (RR, JR) => {
                RR._useGlossinessFromSpecularMapAlpha = JR
              }
            },
            metadata: JR
          }, Yt, kt), (0, yR.l)(null, null, aG, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: RR => "_maxSimultaneousLights" in RR,
              get: RR => RR._maxSimultaneousLights,
              set: (RR, JR) => {
                RR._maxSimultaneousLights = JR
              }
            },
            metadata: JR
          }, Tt, st), (0, yR.l)(null, null, nG, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: RR => "_invertNormalMapX" in RR,
              get: RR => RR._invertNormalMapX,
              set: (RR, JR) => {
                RR._invertNormalMapX = JR
              }
            },
            metadata: JR
          }, Ju, Gu), (0, yR.l)(null, null, WG, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: RR => "_invertNormalMapY" in RR,
              get: RR => RR._invertNormalMapY,
              set: (RR, JR) => {
                RR._invertNormalMapY = JR
              }
            },
            metadata: JR
          }, uu, Zu), (0, yR.l)(null, null, CG, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: RR => "_twoSidedLighting" in RR,
              get: RR => RR._twoSidedLighting,
              set: (RR, JR) => {
                RR._twoSidedLighting = JR
              }
            },
            metadata: JR
          }, fu, Vu), (0, yR.l)(null, null, MG, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: RR => "_applyDecalMapAfterDetailMap" in RR,
              get: RR => RR._applyDecalMapAfterDetailMap,
              set: (RR, JR) => {
                RR._applyDecalMapAfterDetailMap = JR
              }
            },
            metadata: JR
          }, ru, eu), JR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: JR
          })
        })(), RR.ForceGLSL = !1, RR._ShaderLoader = new XR.d((() => [Promise.all([GR.e(635), GR.e(634)]).then((() => GR(53903))), Promise.all([GR.e(640), GR.e(636), GR.e(649), GR.e(639)]).then((() => GR(54075)))]), (() => [Promise.all([GR.e(656), GR.e(651)]).then((() => GR(54222))), Promise.all([GR.e(657), GR.e(667), GR.e(653)]).then((() => GR(54408)))])), RR
      })(),
      HR = !1;

    function oR() {
      HR || (HR = !0, (0, KR.d)(), (0, gR.f)("BABYLON.StandardMaterial", DR), ZR.g.DefaultMaterialFactory = RR => new DR("default material", RR))
    }
    Object.getOwnPropertyDescriptor(DR.prototype, "decalMap") || Object.defineProperty(DR.prototype, "decalMap", (0, bR.e)("StandardMaterial", "decalMap"))
  },
  41915: (RR, JR, GR) => {
    function yR(RR) {
      return class extends RR {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    GR.d(JR, {
      c: () => yR
    })
  },
  41900: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR
    });
    class yR {
      constructor(RR, JR) {
        this._webGL = {
          load: RR,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: JR,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(RR) {
        const JR = 1 === RR ? this._webGPU : this._webGL;
        return JR.loaded ? void 0 : async () => {
          await this._loadAsync(JR)
        }
      }
      async _loadAsync(RR) {
        if (RR.loaded) return;
        let JR = RR.loadPromise;
        const GR = null === JR;
        GR && (JR = Promise.all(RR.load()), RR.loadPromise = JR);
        let yR = !1;
        try {
          await JR, yR = !0
        } finally {
          GR && this._completeLoad(RR, yR)
        }
      }
      _completeLoad(RR, JR) {
        RR.loaded = JR, RR.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);