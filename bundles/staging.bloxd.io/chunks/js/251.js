export const id = 251;
export const ids = [251];
export const modules = {
  39523: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => pD
    });
    var ID = cD(39161);

    function pD(DD) {
      return class extends DD {
        constructor() {
          super(...arguments);
          const DD = new.target;
          if (!DD[Symbol.metadata]) {
            const CD = Object.getPrototypeOf(DD)?.[Symbol.metadata];
            DD[Symbol.metadata] = CD ? Object.create(CD) : {}
          }
          const CD = (0, ID.c)(DD[Symbol.metadata]);
          CD._imageProcessingConfiguration || (CD._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(DD) {
          this._attachImageProcessingConfiguration(DD), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(DD) {
          DD !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !DD && this.hq ? this._imageProcessingConfiguration = this.hq().imageProcessingConfiguration : DD && (this._imageProcessingConfiguration = DD), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(DD) {
          this.imageProcessingConfiguration.colorCurvesEnabled = DD
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(DD) {
          this.imageProcessingConfiguration.colorGradingEnabled = DD
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(DD) {
          this._imageProcessingConfiguration.toneMappingEnabled = DD
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(DD) {
          this._imageProcessingConfiguration.exposure = DD
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(DD) {
          this._imageProcessingConfiguration.contrast = DD
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(DD) {
          this._imageProcessingConfiguration.colorGradingTexture = DD
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(DD) {
          this._imageProcessingConfiguration.colorCurves = DD
        }
      }
    }
  },
  39404: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      f: () => pD
    });
    var ID = cD(39412);

    function pD(DD) {
      return class extends DD {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class iD extends ID.e {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  39483: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => BD
    });
    var ID = cD(39154),
      pD = cD(39416),
      iD = cD(39156),
      fD = cD(39466),
      bD = cD(39412),
      QD = cD(39489),
      wD = cD(39458);
    class SD extends bD.e {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let BD = (() => {
      var DD, CD, cD, bD;
      let BD, yD, MD, tD, ZD, oD, vD = QD.e,
        ND = [],
        gD = [],
        XD = [],
        mD = [],
        nD = [],
        OD = [],
        PD = [],
        HD = [],
        UD = [],
        xD = [],
        qD = [],
        JD = [];
      return DD = class extends vD {
        get texture() {
          return (0, ID.d)(this, CD, "f")
        }
        set texture(DD) {
          (0, ID.g)(this, CD, DD, "f")
        }
        get normalBlendMethod() {
          return (0, ID.d)(this, cD, "f")
        }
        set normalBlendMethod(DD) {
          (0, ID.g)(this, cD, DD, "f")
        }
        get isEnabled() {
          return (0, ID.d)(this, bD, "f")
        }
        set isEnabled(DD) {
          (0, ID.g)(this, bD, DD, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(DD) {
          let iD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(DD, "DetailMap", 140, new SD, iD), this._texture = null, CD.set(this, (0, ID.m)(this, ND, void 0)), this.diffuseBlendLevel = ((0, ID.m)(this, gD), (0, ID.m)(this, XD, 1)), this.roughnessBlendLevel = ((0, ID.m)(this, mD), (0, ID.m)(this, nD, 1)), this.bumpLevel = ((0, ID.m)(this, OD), (0, ID.m)(this, PD, 1)), this._normalBlendMethod = ((0, ID.m)(this, HD), pD.d.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), cD.set(this, (0, ID.m)(this, UD, void 0)), this._isEnabled = ((0, ID.m)(this, xD), !1), bD.set(this, (0, ID.m)(this, qD, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, ID.m)(this, JD), this._internalMarkAllSubMeshesAsTexturesDirty = DD._dirtyCallbacks[1]
        }
        isReadyForSubMesh(DD, CD, cD) {
          return !this._isEnabled || !(DD._areTexturesDirty && CD.texturesEnabled && cD.getCaps().standardDerivatives && this._texture && fD.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(DD, CD) {
          if (this._isEnabled) {
            DD.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const cD = CD.DZ();
            DD._areTexturesDirty && (cD.getCaps().standardDerivatives && this._texture && fD.e.DetailTextureEnabled && this._isEnabled ? ((0, wD.db)(this._texture, DD, "DETAIL"), DD.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : DD.DETAIL = !1)
          } else DD.DETAIL = !1
        }
        bindForSubMesh(DD, CD) {
          if (!this._isEnabled) return;
          const cD = this._material.isFrozen;
          DD.useUbo && cD && DD.isSync || this._texture && fD.e.DetailTextureEnabled && (DD.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, wD.C)(this._texture, DD, "detail")), CD.texturesEnabled && this._texture && fD.e.DetailTextureEnabled && DD.setTexture("detailSampler", this._texture)
        }
        hasTexture(DD) {
          return this._texture === DD
        }
        getActiveTextures(DD) {
          this._texture && DD.push(this._texture)
        }
        getAnimatables(DD) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && DD.push(this._texture)
        }
        dispose(DD) {
          DD && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(DD) {
          DD.push("detailSampler")
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
      }, CD = new WeakMap, cD = new WeakMap, bD = new WeakMap, (() => {
        const CD = "function" === typeof Symbol && Symbol.metadata ? Object.create(vD[Symbol.metadata] ?? null) : void 0;
        BD = [(0, iD.w)("detailTexture"), (0, iD.c)("_markAllSubMeshesAsTexturesDirty")], yD = [(0, iD.G)()], MD = [(0, iD.G)()], tD = [(0, iD.G)()], ZD = [(0, iD.G)(), (0, iD.c)("_markAllSubMeshesAsTexturesDirty")], oD = [(0, iD.G)(), (0, iD.c)("_markAllSubMeshesAsTexturesDirty")], (0, ID.k)(DD, null, BD, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: DD => "texture" in DD,
            get: DD => DD.texture,
            set: (DD, CD) => {
              DD.texture = CD
            }
          },
          metadata: CD
        }, ND, gD), (0, ID.k)(DD, null, ZD, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: DD => "normalBlendMethod" in DD,
            get: DD => DD.normalBlendMethod,
            set: (DD, CD) => {
              DD.normalBlendMethod = CD
            }
          },
          metadata: CD
        }, UD, xD), (0, ID.k)(DD, null, oD, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isEnabled" in DD,
            get: DD => DD.isEnabled,
            set: (DD, CD) => {
              DD.isEnabled = CD
            }
          },
          metadata: CD
        }, qD, JD), (0, ID.k)(null, null, yD, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: DD => "diffuseBlendLevel" in DD,
            get: DD => DD.diffuseBlendLevel,
            set: (DD, CD) => {
              DD.diffuseBlendLevel = CD
            }
          },
          metadata: CD
        }, XD, mD), (0, ID.k)(null, null, MD, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: DD => "roughnessBlendLevel" in DD,
            get: DD => DD.roughnessBlendLevel,
            set: (DD, CD) => {
              DD.roughnessBlendLevel = CD
            }
          },
          metadata: CD
        }, nD, OD), (0, ID.k)(null, null, tD, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: DD => "bumpLevel" in DD,
            get: DD => DD.bumpLevel,
            set: (DD, CD) => {
              DD.bumpLevel = CD
            }
          },
          metadata: CD
        }, PD, HD), CD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: CD
        })
      })(), DD
    })()
  },
  39412: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      constructor(DD) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = DD, DD)
          for (const CD in DD) Object.prototype.hasOwnProperty.call(DD, CD) && this._setDefaultValue(CD)
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
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || DD, this._isDirty = !0
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
        for (const DD of Object.keys(this)) "_" !== DD[0] && this._keys.push(DD);
        if (this._externalProperties)
          for (const DD in this._externalProperties) - 1 === this._keys.indexOf(DD) && this._keys.push(DD)
      }
      isEqual(DD) {
        if (this._keys.length !== DD._keys.length) return !1;
        for (let CD = 0; CD < this._keys.length; CD++) {
          const cD = this._keys[CD];
          if (this[cD] !== DD[cD]) return !1
        }
        return !0
      }
      cloneTo(DD) {
        this._keys.length !== DD._keys.length && (DD._keys = this._keys.slice(0));
        for (let CD = 0; CD < this._keys.length; CD++) {
          const cD = this._keys[CD];
          DD[cD] = this[cD]
        }
      }
      reset() {
        for (const DD of this._keys) this._setDefaultValue(DD)
      }
      _setDefaultValue(DD) {
        const CD = this._externalProperties?.[DD]?.type ?? typeof this[DD],
          cD = this._externalProperties?.[DD]?.default;
        switch (CD) {
          case "number":
            this[DD] = cD ?? 0;
            break;
          case "string":
            this[DD] = cD ?? "";
            break;
          default:
            this[DD] = cD ?? !1
        }
      }
      toString() {
        let DD = "";
        for (let CD = 0; CD < this._keys.length; CD++) {
          const cD = this._keys[CD],
            ID = this[cD];
          switch (typeof ID) {
            case "number":
            case "string":
              DD += "#define " + cD + " " + ID + "\n";
              break;
            default:
              ID && (DD += "#define " + cD + "\n")
          }
        }
        return DD
      }
    }
  },
  39508: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => bD,
      h: () => fD,
      i: () => iD
    });
    var ID, pD = cD(36446);

    function iD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const ID = CD(DD);
      if (!Number.isInteger(ID) || ID < 0 || ID > cD) throw new Error(`Invalid geometry object ID ${ID} for mesh "${DD.name}". Object IDs must be integers between 0 and 0x${cD.toString(16).toUpperCase()}.`);
      return ID
    }

    function fD(DD, CD) {
      const cD = CD(DD);
      if (!Number.isInteger(cD) || cD < 0 || cD > 255 || 0 !== cD && 0 === (63 & cD)) throw new Error(`Invalid geometry mesh-blending tag ${cD} for mesh "${DD.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return cD
    }! function(DD) {
      DD[DD.Zero = 0] = "Zero", DD[DD.One = 1] = "One", DD[DD.MaxViewZ = 2] = "MaxViewZ", DD[DD.NoClear = 3] = "NoClear"
    }(ID || (ID = {}));
    class bD {
      static CreateConfiguration(DD) {
        return bD._Configurations[DD] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: pD.d.Zero(),
          currentViewProjection: pD.d.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, bD._Configurations[DD]
      }
      static DeleteConfiguration(DD) {
        delete bD._Configurations[DD]
      }
      static GetConfiguration(DD) {
        return bD._Configurations[DD]
      }
      static _PrepareConfiguration(DD, CD, cD) {
        const ID = bD._Configurations[DD];
        ID._attachments = CD, ID._colorAttachments = cD, ID._mrtCount = CD.length;
        let pD = "#define PREPASS\n";
        for (const iD of bD.GeometryTextureDescriptions) {
          const DD = ID.defines[iD.defineIndex];
          void 0 !== DD && (pD += `#define ${iD.define}\n#define ${iD.defineIndex} ${DD}\n`)
        }
        ID.objectIdIsRedFormat && (pD += "#define PREPASS_OBJECT_ID_R8\n"), ID._defines = pD + `#define SCENE_MRT_COUNT ${CD.length}\n`
      }
      static _PrepareStringDefines(DD, CD) {
        const cD = bD._Configurations[DD];
        return !!cD?._defines && (CD.push(cD._defines), !0)
      }
      static _BindAttachmentsForEffect(DD, CD) {
        const cD = bD._Configurations[DD.currentRenderPassId];
        return !cD?._attachments || (DD.bindAttachments(CD._multiTarget ? cD._attachments : cD._colorAttachments), CD._multiTarget || void 0 !== cD.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(DD) {
        const CD = bD._Configurations[DD.currentRenderPassId];
        CD?._colorAttachments && DD.bindAttachments(CD._colorAttachments)
      }
      static _BindColorAttachments(DD) {
        const CD = bD._Configurations[DD.currentRenderPassId];
        return !CD?._colorAttachments || (DD.bindAttachments(CD._colorAttachments), void 0 !== CD.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(DD) {
        const CD = bD._Configurations[DD.currentRenderPassId];
        return !CD?._colorAttachments || void 0 !== CD.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(DD, CD) {
        const cD = bD._Configurations[DD.currentRenderPassId];
        if (!cD) return;
        const ID = DD.getAlphaMode(),
          pD = void 0 === cD.defines.PREPASS_COLOR_INDEX || 2 === ID || 1 === ID || 17 === ID;
        CD.setFloat("geometryZeroAlphaDiscard", pD ? 1 : 0)
      }
      static AddUniformsAndSamplers(DD, CD) {
        DD.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(DD, CD) {
        for (const cD of CD)
          if (cD.IH)
            for (const CD of cD.IH) CD._removeDrawWrapper(DD)
      }
      static PrepareDefines(DD, CD, cD) {
        if (!cD._arePrePassDirty) return;
        const ID = bD._Configurations[DD];
        if (!ID) return;
        cD.PREPASS = !0;
        let pD = 0;
        for (let iD = 0; iD < bD.GeometryTextureDescriptions.length; iD++) {
          const DD = bD.GeometryTextureDescriptions[iD],
            CD = DD.define,
            fD = DD.defineIndex,
            QD = ID.defines[fD];
          void 0 !== QD ? (cD[CD] = !0, cD[fD] = QD, pD++) : (cD[CD] = !1, delete cD[fD])
        }
        cD.PREPASS_OBJECT_ID_R8 = ID.objectIdIsRedFormat, cD.SCENE_MRT_COUNT = ID._mrtCount ?? pD, cD.BONES_VELOCITY_ENABLED = CD.useBones && CD.computeBonesUsingShaders && CD.skeleton && !CD.skeleton.isUsingTextureForMatrices && -1 === ID.excludedSkinnedMesh.indexOf(CD)
      }
      static Bind(DD, CD, cD, ID, pD) {
        const QD = bD._Configurations[DD];
        if (!QD) return;
        const wD = cD.hq(),
          SD = wD.DZ();
        if (QD.reverseCulling && SD.setStateCullFaceType(wD._mirroredCameraPosition ? pD.cullBackFaces : !pD.cullBackFaces), void 0 !== QD.defines.PREPASS_OBJECT_ID_INDEX) {
          const DD = QD.objectIdIsRedFormat ? 255 : 16777215;
          let ID = cD.uniqueId;
          if (QD.objectIdProvider) ID = iD(cD, QD.objectIdProvider, DD);
          else if (ID > DD) throw new Error(`Invalid geometry object ID ${ID} for mesh "${cD.name}". Object IDs must be integers between 0 and 0x${DD.toString(16).toUpperCase()}.`);
          CD.setFloat("objectId", ID)
        }
        if (void 0 !== QD.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const DD = QD.meshBlendTagProvider ? fD(cD, QD.meshBlendTagProvider) : cD.meshBlendingTag;
          CD.setInt("meshBlendTag", DD)
        }
        if (void 0 !== QD.defines.PREPASS_VELOCITY_INDEX || void 0 !== QD.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const DD = QD._currentWorldMatrices ?? (QD._currentWorldMatrices = {}),
            pD = QD._worldMatrixFrameIds ?? (QD._worldMatrixFrameIds = {});
          if (DD[cD.uniqueId] || (DD[cD.uniqueId] = ID.clone(), QD.previousWorldMatrices[cD.uniqueId] = ID.clone()), pD[cD.uniqueId] !== SD.frameId && (QD.previousWorldMatrices[cD.uniqueId].YCD(DD[cD.uniqueId]), pD[cD.uniqueId] = SD.frameId), DD[cD.uniqueId].YCD(ID), -1 === QD.lastUpdateFrameId ? (QD.lastUpdateFrameId = SD.frameId, QD.previousViewProjection.YCD(wD.getTransformMatrix()), QD.currentViewProjection.YCD(wD.getTransformMatrix())) : QD.currentViewProjection.updateFlag !== wD.getTransformMatrix().updateFlag ? (QD.lastUpdateFrameId = SD.frameId, QD.previousViewProjection.YCD(QD.currentViewProjection), QD.currentViewProjection.YCD(wD.getTransformMatrix())) : QD.lastUpdateFrameId !== SD.frameId && (QD.lastUpdateFrameId = SD.frameId, QD.previousViewProjection.YCD(QD.currentViewProjection)), CD.setMatrix("previousWorld", QD.previousWorldMatrices[cD.uniqueId]), CD.setMatrix("previousViewProjection", QD.previousViewProjection), cD.useBones && cD.computeBonesUsingShaders && cD.skeleton) {
            const DD = cD.skeleton;
            if (!DD.isUsingTextureForMatrices || -1 === CD.getUniformIndex("boneTextureInfo")) {
              const ID = DD.getTransformMatrices(cD);
              ID && (QD.previousBones[cD.uniqueId] || (QD.previousBones[cD.uniqueId] = ID.slice()), CD.setMatrices("mPreviousBones", QD.previousBones[cD.uniqueId]), QD.previousBones[cD.uniqueId].set(ID))
            }
          }
        }
      }
    }
    bD.GeometryTextureDescriptions = [{
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
    }], bD._Configurations = {}
  },
  39489: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => yD,
      g: () => tD
    });
    var ID = cD(39154),
      pD = cD(39156),
      iD = cD(39035),
      fD = cD(39003);
    const bD = new RegExp("^([gimus]+)!");
    class QD {
      constructor(DD) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = DD, this._scene = DD.hq(), this._engine = this._scene.DZ()
      }
      _addPlugin(DD) {
        for (let ID = 0; ID < this._plugins.length; ++ID)
          if (this._plugins[ID].name === DD.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !DD.isCompatible(this._material.shaderLanguage)) throw `The plugin "${DD.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const CD = DD.getClassName();
        QD._MaterialPluginClassToMainDefine[CD] || (QD._MaterialPluginClassToMainDefine[CD] = "MATERIALPLUGIN_" + ++QD._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (DD, CD) => this._handlePluginEvent(DD, CD), this._plugins.push(DD), this._plugins.sort(((DD, CD) => DD.priority - CD.priority)), this._codeInjectionPoints = {};
        const cD = {};
        cD[QD._MaterialPluginClassToMainDefine[CD]] = {
          type: "boolean",
          default: !0
        };
        for (const ID of this._plugins) ID.collectDefines(cD), this._collectPointNames("vertex", ID.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", ID.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = cD, !0
      }
      _activatePlugin(DD) {
        -1 === this._activePlugins.indexOf(DD) && (this._activePlugins.push(DD), this._activePlugins.sort(((DD, CD) => DD.priority - CD.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), DD.registerForExtraEvents && (this._activePluginsForExtraEvents.push(DD), this._activePluginsForExtraEvents.sort(((DD, CD) => DD.priority - CD.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(DD) {
        for (let CD = 0; CD < this._plugins.length; ++CD)
          if (this._plugins[CD].name === DD) return this._plugins[CD];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(DD) {
        let CD = !0;
        for (const cD of this._activePlugins) CD = CD && cD.isReadyForSubMesh(DD.defines, this._scene, this._engine, DD.subMesh);
        DD.isReadyForSubMesh = CD
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(DD) {
        for (const CD of this._activePlugins) CD.prepareDefinesBeforeAttributes(DD.defines, this._scene, DD.mesh)
      }
      _handlePluginEventPrepareDefines(DD) {
        for (const CD of this._activePlugins) CD.prepareDefines(DD.defines, this._scene, DD.mesh)
      }
      _handlePluginEventHardBindForSubMesh(DD) {
        for (const CD of this._activePluginsForExtraEvents) CD.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, DD.subMesh)
      }
      _handlePluginEventBindForSubMesh(DD) {
        for (const CD of this._activePlugins) CD.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, DD.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(DD) {
        let CD = !1;
        for (const cD of this._activePluginsForExtraEvents)
          if (CD = cD.hasRenderTargetTextures(), CD) break;
        DD.hasRenderTargetTextures = CD
      }
      _handlePluginEventFillRenderTargetTextures(DD) {
        for (const CD of this._activePluginsForExtraEvents) CD.fillRenderTargetTextures(DD.renderTargets)
      }
      _handlePluginEvent(DD, CD) {
        switch (DD) {
          case 512: {
            const DD = CD;
            for (const CD of this._activePlugins) CD.getActiveTextures(DD.activeTextures);
            break
          }
          case 256: {
            const DD = CD;
            for (const CD of this._activePlugins) CD.getAnimatables(DD.animatables);
            break
          }
          case 1024: {
            const DD = CD;
            let cD = !1;
            for (const CD of this._activePlugins)
              if (cD = CD.hasTexture(DD.texture), cD) break;
            DD.hasTexture = cD;
            break
          }
          case 2: {
            const DD = CD;
            for (const CD of this._plugins) CD.dispose(DD.forceDisposeTextures);
            break
          }
          case 4:
            CD.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const DD = CD;
            for (const CD of this._activePlugins) DD.fallbackRank = CD.addFallbacks(DD.defines, DD.fallbacks, DD.fallbackRank), CD.getAttributes(DD.attributes, this._scene, DD.mesh);
            this._uniformList.length > 0 && DD.uniforms.push(...this._uniformList), this._samplerList.length > 0 && DD.samplers.push(...this._samplerList), this._uboList.length > 0 && DD.uniformBuffersNames.push(...this._uboList), DD.customCode = this._injectCustomCode(DD, DD.customCode);
            break
          }
          case 8: {
            const DD = CD;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const cD = 1 === this._material.shaderLanguage;
            for (const CD of this._plugins) {
              const ID = CD.getUniforms(this._material.shaderLanguage);
              if (ID) {
                if (ID.ubo)
                  for (const CD of ID.ubo) {
                    if (CD.size && CD.type) {
                      const ID = CD.arraySize ?? 0;
                      if (DD.ubo.addUniform(CD.name, CD.size, ID), cD) {
                        let DD;
                        switch (CD.type) {
                          case "mat4":
                            DD = "mat4x4f";
                            break;
                          case "float":
                            DD = "f32";
                            break;
                          default:
                            DD = `${CD.type}f`
                        }
                        this._uboDeclaration += ID > 0 ? `uniform ${CD.name}: array<${DD}, ${ID}>;\n` : `uniform ${CD.name}: ${DD};\n`
                      } else this._uboDeclaration += `${CD.type} ${CD.name}${ID>0?`[${ID}]`:""};\n`
                    }
                    this._uniformList.push(CD.name)
                  }
                ID.vertex && (this._vertexDeclaration += ID.vertex + "\n"), ID.fragment && (this._fragmentDeclaration += ID.fragment + "\n"), ID.externalUniforms && this._uniformList.push(...ID.externalUniforms)
              }
              CD.getSamplers(this._samplerList), CD.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(DD, CD) {
        if (CD)
          for (const cD in CD) this._codeInjectionPoints[DD] || (this._codeInjectionPoints[DD] = {}), this._codeInjectionPoints[DD][cD] = !0
      }
      _injectCustomCode(DD, CD) {
        return (cD, ID) => {
          CD && (ID = CD(cD, ID)), this._uboDeclaration && (ID = ID.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (ID = ID.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (ID = ID.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const pD = this._codeInjectionPoints?.[cD];
          if (!pD) return ID;
          let QD = null;
          for (let CD in pD) {
            let pD = "";
            for (const ID of this._activePlugins) {
              const bD = this._material.shaderLanguage;
              let wD = ID.getCustomCode(cD, bD)?.[CD];
              wD && (ID.resolveIncludes && (null === QD && (QD = {
                defines: [],
                indexParameters: DD.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: fD.e.GetShadersRepository(bD),
                includesShadersStore: fD.e.GetIncludesShadersStore(bD),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                vcD: this._engine.vcD,
                processCodeAfterIncludes: void 0
              }), QD.isFragment = "fragment" === cD, (0, iD.g)(wD, QD, (DD => wD = DD))), pD += wD + "\n")
            }
            if (pD.length > 0)
              if ("!" === CD.charAt(0)) {
                CD = CD.substring(1);
                let DD = "g";
                if ("!" === CD.charAt(0)) DD = "", CD = CD.substring(1);
                else {
                  const cD = bD.exec(CD);
                  cD && cD.length >= 2 && (DD = cD[1], CD = CD.substring(DD.length + 1))
                }
                DD.indexOf("g") < 0 && (DD += "g");
                const cD = new RegExp(CD, DD);
                let iD = cD.exec(ID);
                for (; null !== iD;) {
                  const {
                    index: DD
                  } = iD, CD = wD(pD, iD);
                  ID = ID.substring(0, DD) + CD + ID.substring(DD + iD[0].length), cD.lastIndex = DD + CD.length, iD = cD.exec(ID)
                }
              } else {
                const DD = "#define " + CD;
                ID = ID.replace(DD, "\n" + pD + "\n" + DD)
              }
          }
          return ID
        }
      }
    }
    QD._MaterialPluginClassToMainDefine = {}, QD._MaterialPluginCounter = 0;

    function wD(DD, CD) {
      return DD.replace(/\$(\d+)/g, ((DD, cD) => {
        const ID = Number(cD);
        return ID < CD.length ? CD[ID] : ""
      }))
    }
    var SD = cD(39174),
      BD = cD(36488);
    let yD = (() => {
        var DD;
        let CD, cD, iD, fD, bD = [],
          wD = [],
          BD = [],
          yD = [],
          MD = [],
          tD = [],
          ZD = [],
          oD = [];
        return DD = class {
          isCompatible(DD) {
            return 0 === DD
          }
          _enable(DD) {
            DD && this._pluginManager._activatePlugin(this)
          }
          constructor(DD, CD, cD, pD) {
            let iD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              fD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              SD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, ID.m)(this, bD, void 0), this.priority = ((0, ID.m)(this, wD), (0, ID.m)(this, BD, 500)), this.resolveIncludes = ((0, ID.m)(this, yD), (0, ID.m)(this, MD, !1)), this.registerForExtraEvents = ((0, ID.m)(this, tD), (0, ID.m)(this, ZD, !1)), this.doNotSerialize = ((0, ID.m)(this, oD), !1), this._material = DD, this.name = CD, this.priority = cD, this.resolveIncludes = SD, DD.pluginManager || (DD.pluginManager = new QD(DD), DD.Aq.add((() => {
              DD.pluginManager = void 0
            }))), this._pluginDefineNames = pD, this._pluginManager = DD.pluginManager, iD && this._pluginManager._addPlugin(this), fD && this._enable(!0), this.markAllDefinesAsDirty = DD._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(DD, CD, cD, ID) {
            return !0
          }
          hardBindForSubMesh(DD, CD, cD, ID) {}
          bindForSubMesh(DD, CD, cD, ID) {}
          dispose(DD) {}
          getCustomCode(DD) {
            return null
          }
          collectDefines(DD) {
            if (this._pluginDefineNames)
              for (const CD of Object.keys(this._pluginDefineNames)) {
                if ("_" === CD[0]) continue;
                const cD = typeof this._pluginDefineNames[CD];
                DD[CD] = {
                  type: "number" === cD ? "number" : "string" === cD ? "string" : "boolean" === cD ? "boolean" : "object",
                  default: this._pluginDefineNames[CD]
                }
              }
          }
          prepareDefinesBeforeAttributes(DD, CD, cD) {}
          prepareDefines(DD, CD, cD) {}
          hasTexture(DD) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(DD) {}
          getActiveTextures(DD) {}
          getAnimatables(DD) {}
          addFallbacks(DD, CD, cD) {
            return cD
          }
          getSamplers(DD) {}
          getAttributes(DD, CD, cD) {}
          getUniformBuffersNames(DD) {}
          getUniforms() {
            return {}
          }
          copyTo(DD) {
            SD.d.Clone((() => DD), this)
          }
          serialize() {
            return SD.d.Serialize(this)
          }
          parse(DD, CD, cD) {
            SD.d.Parse((() => this), DD, CD, cD)
          }
        }, (() => {
          const QD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          CD = [(0, pD.G)()], cD = [(0, pD.G)()], iD = [(0, pD.G)()], fD = [(0, pD.G)()], (0, ID.k)(null, null, CD, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: DD => "name" in DD,
              get: DD => DD.name,
              set: (DD, CD) => {
                DD.name = CD
              }
            },
            metadata: QD
          }, bD, wD), (0, ID.k)(null, null, cD, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: DD => "priority" in DD,
              get: DD => DD.priority,
              set: (DD, CD) => {
                DD.priority = CD
              }
            },
            metadata: QD
          }, BD, yD), (0, ID.k)(null, null, iD, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: DD => "resolveIncludes" in DD,
              get: DD => DD.resolveIncludes,
              set: (DD, CD) => {
                DD.resolveIncludes = CD
              }
            },
            metadata: QD
          }, MD, tD), (0, ID.k)(null, null, fD, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: DD => "registerForExtraEvents" in DD,
              get: DD => DD.registerForExtraEvents,
              set: (DD, CD) => {
                DD.registerForExtraEvents = CD
              }
            },
            metadata: QD
          }, ZD, oD), QD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QD
          })
        })(), DD
      })(),
      MD = !1;

    function tD() {
      MD || (MD = !0, (0, BD.d)("BABYLON.MaterialPluginBase", yD))
    }
  },
  39402: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID
    });
    class ID {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(DD) {
        DD.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(DD) {}
      bindForSubMesh(DD, CD, cD, ID, pD) {
        if (CD.prePassRenderer && CD.prePassRenderer.enabled && CD.prePassRenderer.currentRTisSceneRT && (-1 !== CD.prePassRenderer.getIndex(2) || -1 !== CD.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[cD.uniqueId] || (this.previousWorldMatrices[cD.uniqueId] = ID.clone()), this.previousViewProjection || (this.previousViewProjection = CD.getTransformMatrix().clone(), this.currentViewProjection = CD.getTransformMatrix().clone());
          const pD = CD.DZ();
          this.currentViewProjection.updateFlag !== CD.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = pD.frameId, this.previousViewProjection.YCD(this.currentViewProjection), this.currentViewProjection.YCD(CD.getTransformMatrix())) : this._lastUpdateFrameId !== pD.frameId && (this._lastUpdateFrameId = pD.frameId, this.previousViewProjection.YCD(this.currentViewProjection)), DD.setMatrix("previousWorld", this.previousWorldMatrices[cD.uniqueId]), DD.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[cD.uniqueId] = ID.clone()
        }
      }
    }
  },
  39514: (DD, CD, cD) => {
    function ID(DD) {
      return class extends DD {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    cD.d(CD, {
      e: () => ID
    })
  },
  39396: (DD, CD, cD) => {
    cD.d(CD, {
      StandardMaterial: () => ID.g
    });
    var ID = cD(39400);
    (0, ID.d)()
  },
  39400: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => lD,
      g: () => zD
    });
    var ID = cD(39154),
      pD = cD(39156),
      iD = cD(39257),
      fD = cD(39239),
      bD = cD(36622),
      QD = cD(39286),
      wD = cD(39402),
      SD = cD(39404),
      BD = cD(39259),
      yD = cD(39416),
      MD = cD(39412),
      tD = cD(39470),
      ZD = cD(39466),
      oD = cD(39474),
      vD = cD(39483),
      ND = cD(39460),
      gD = cD(39496),
      XD = cD(39458),
      mD = cD(39174),
      nD = cD(39503),
      OD = cD(39508),
      PD = cD(39512),
      HD = cD(39514),
      UD = cD(39523),
      xD = cD(36488),
      qD = cD(39027);
    const JD = {
      effect: null,
      subMesh: null
    };
    class KD extends((0, HD.e)((0, PD.c)(MD.e))) {}
    class aD extends((0, SD.f)(KD)) {
      constructor(DD) {
        super(DD), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class VD extends((0, UD.d)(tD.b)) {}
    let zD = (() => {
        var DD, CD, SD, MD, PD, HD, UD, xD, qD, KD, zD, jD, lD, LD, TD, GD, RD, kD, dD, YD, WD, sD, ED, eD, uD, hD, rD, AD, FD, DC, CC, cC, IC;
        let pC, iC, fC, bC, QC, wC, SC, BC, yC, MC, tC, ZC, oC, vC, NC, gC, XC, mC, nC, OC, PC, HC, UC, xC, qC, JC, KC, aC, VC, zC, jC, lC, LC, TC, GC, RC, kC, dC, YC, WC, sC, EC, eC, uC, hC, rC, AC, FC, Dc, Cc, cc, Ic, pc, ic, fc, bc, Qc, wc, Sc, Bc, yc, Mc, tc, Zc, oc, vc, Nc, gc, Xc, mc, nc, Oc, Pc, Hc = VD,
          Uc = [],
          xc = [],
          qc = [],
          Jc = [],
          Kc = [],
          ac = [],
          Vc = [],
          zc = [],
          jc = [],
          lc = [],
          Lc = [],
          Tc = [],
          Gc = [],
          Rc = [],
          kc = [],
          dc = [],
          Yc = [],
          Wc = [],
          sc = [],
          Ec = [],
          ec = [],
          uc = [],
          hc = [],
          rc = [],
          Ac = [],
          Fc = [],
          DI = [],
          CI = [],
          cI = [],
          II = [],
          pI = [],
          iI = [],
          fI = [],
          bI = [],
          QI = [],
          wI = [],
          SI = [],
          BI = [],
          yI = [],
          MI = [],
          tI = [],
          ZI = [],
          oI = [],
          vI = [],
          NI = [],
          gI = [],
          XI = [],
          mI = [],
          nI = [],
          OI = [],
          PI = [],
          HI = [],
          UI = [],
          xI = [],
          qI = [],
          JI = [],
          KI = [],
          aI = [],
          VI = [],
          zI = [],
          jI = [],
          lI = [],
          LI = [],
          TI = [],
          GI = [],
          RI = [],
          kI = [],
          dI = [],
          YI = [],
          WI = [],
          sI = [],
          EI = [],
          eI = [],
          uI = [],
          hI = [],
          rI = [],
          AI = [],
          FI = [],
          Dp = [],
          Cp = [],
          cp = [],
          Ip = [],
          pp = [],
          ip = [],
          fp = [],
          bp = [],
          Qp = [],
          wp = [],
          Sp = [],
          Bp = [],
          yp = [],
          Mp = [],
          tp = [],
          Zp = [],
          op = [],
          vp = [],
          Np = [],
          gp = [],
          Xp = [],
          mp = [],
          np = [],
          Op = [],
          Pp = [],
          Hp = [],
          Up = [],
          xp = [],
          qp = [],
          Jp = [],
          Kp = [],
          ap = [],
          Vp = [],
          zp = [],
          jp = [],
          lp = [],
          Lp = [],
          Tp = [],
          Gp = [],
          Rp = [],
          kp = [],
          dp = [],
          Yp = [],
          Wp = [],
          sp = [],
          Ep = [],
          ep = [],
          hp = [],
          rp = [],
          Ap = [],
          Fp = [],
          Di = [],
          Ci = [],
          ci = [],
          Ii = [],
          ii = [],
          fi = [],
          bi = [],
          Qi = [],
          wi = [],
          Si = [],
          Bi = [],
          yi = [],
          Mi = [],
          ti = [],
          Zi = [],
          oi = [],
          vi = [];
        return DD = class extends Hc {
          get diffuseTexture() {
            return (0, ID.d)(this, CD, "f")
          }
          set diffuseTexture(DD) {
            (0, ID.g)(this, CD, DD, "f")
          }
          get ambientTexture() {
            return (0, ID.d)(this, SD, "f")
          }
          set ambientTexture(DD) {
            (0, ID.g)(this, SD, DD, "f")
          }
          get opacityTexture() {
            return (0, ID.d)(this, MD, "f")
          }
          set opacityTexture(DD) {
            (0, ID.g)(this, MD, DD, "f")
          }
          get reflectionTexture() {
            return (0, ID.d)(this, PD, "f")
          }
          set reflectionTexture(DD) {
            (0, ID.g)(this, PD, DD, "f")
          }
          get emissiveTexture() {
            return (0, ID.d)(this, HD, "f")
          }
          set emissiveTexture(DD) {
            (0, ID.g)(this, HD, DD, "f")
          }
          get specularTexture() {
            return (0, ID.d)(this, UD, "f")
          }
          set specularTexture(DD) {
            (0, ID.g)(this, UD, DD, "f")
          }
          get bumpTexture() {
            return (0, ID.d)(this, xD, "f")
          }
          set bumpTexture(DD) {
            (0, ID.g)(this, xD, DD, "f")
          }
          get lightmapTexture() {
            return (0, ID.d)(this, qD, "f")
          }
          set lightmapTexture(DD) {
            (0, ID.g)(this, qD, DD, "f")
          }
          get refractionTexture() {
            return (0, ID.d)(this, KD, "f")
          }
          set refractionTexture(DD) {
            (0, ID.g)(this, KD, DD, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, ID.d)(this, zD, "f")
          }
          set useAlphaFromDiffuseTexture(DD) {
            (0, ID.g)(this, zD, DD, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, ID.d)(this, jD, "f")
          }
          set useEmissiveAsIllumination(DD) {
            (0, ID.g)(this, jD, DD, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, ID.d)(this, lD, "f")
          }
          set linkEmissiveWithDiffuse(DD) {
            (0, ID.g)(this, lD, DD, "f")
          }
          get useSpecularOverAlpha() {
            return (0, ID.d)(this, LD, "f")
          }
          set useSpecularOverAlpha(DD) {
            (0, ID.g)(this, LD, DD, "f")
          }
          get useReflectionOverAlpha() {
            return (0, ID.d)(this, TD, "f")
          }
          set useReflectionOverAlpha(DD) {
            (0, ID.g)(this, TD, DD, "f")
          }
          get disableLighting() {
            return (0, ID.d)(this, GD, "f")
          }
          set disableLighting(DD) {
            (0, ID.g)(this, GD, DD, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, ID.d)(this, RD, "f")
          }
          set useObjectSpaceNormalMap(DD) {
            (0, ID.g)(this, RD, DD, "f")
          }
          get useParallax() {
            return (0, ID.d)(this, kD, "f")
          }
          set useParallax(DD) {
            (0, ID.g)(this, kD, DD, "f")
          }
          get useParallaxOcclusion() {
            return (0, ID.d)(this, dD, "f")
          }
          set useParallaxOcclusion(DD) {
            (0, ID.g)(this, dD, DD, "f")
          }
          get roughness() {
            return (0, ID.d)(this, YD, "f")
          }
          set roughness(DD) {
            (0, ID.g)(this, YD, DD, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, ID.d)(this, WD, "f")
          }
          set useLightmapAsShadowmap(DD) {
            (0, ID.g)(this, WD, DD, "f")
          }
          get diffuseFresnelParameters() {
            return (0, ID.d)(this, sD, "f")
          }
          set diffuseFresnelParameters(DD) {
            (0, ID.g)(this, sD, DD, "f")
          }
          get opacityFresnelParameters() {
            return (0, ID.d)(this, ED, "f")
          }
          set opacityFresnelParameters(DD) {
            (0, ID.g)(this, ED, DD, "f")
          }
          get reflectionFresnelParameters() {
            return (0, ID.d)(this, eD, "f")
          }
          set reflectionFresnelParameters(DD) {
            (0, ID.g)(this, eD, DD, "f")
          }
          get refractionFresnelParameters() {
            return (0, ID.d)(this, uD, "f")
          }
          set refractionFresnelParameters(DD) {
            (0, ID.g)(this, uD, DD, "f")
          }
          get emissiveFresnelParameters() {
            return (0, ID.d)(this, hD, "f")
          }
          set emissiveFresnelParameters(DD) {
            (0, ID.g)(this, hD, DD, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, ID.d)(this, rD, "f")
          }
          set useReflectionFresnelFromSpecular(DD) {
            (0, ID.g)(this, rD, DD, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, ID.d)(this, AD, "f")
          }
          set useGlossinessFromSpecularMapAlpha(DD) {
            (0, ID.g)(this, AD, DD, "f")
          }
          get maxSimultaneousLights() {
            return (0, ID.d)(this, FD, "f")
          }
          set maxSimultaneousLights(DD) {
            (0, ID.g)(this, FD, DD, "f")
          }
          get invertNormalMapX() {
            return (0, ID.d)(this, DC, "f")
          }
          set invertNormalMapX(DD) {
            (0, ID.g)(this, DC, DD, "f")
          }
          get invertNormalMapY() {
            return (0, ID.d)(this, CC, "f")
          }
          set invertNormalMapY(DD) {
            (0, ID.g)(this, CC, DD, "f")
          }
          get twoSidedLighting() {
            return (0, ID.d)(this, cC, "f")
          }
          set twoSidedLighting(DD) {
            (0, ID.g)(this, cC, DD, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, ID.d)(this, IC, "f")
          }
          set applyDecalMapAfterDetailMap(DD) {
            (0, ID.g)(this, IC, DD, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(cD, pD) {
            super(cD, pD, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || DD.ForceGLSL), this._diffuseTexture = (0, ID.m)(this, Uc, null), CD.set(this, ((0, ID.m)(this, xc), (0, ID.m)(this, qc, void 0))), this._ambientTexture = ((0, ID.m)(this, Jc), (0, ID.m)(this, Kc, null)), SD.set(this, ((0, ID.m)(this, ac), (0, ID.m)(this, Vc, void 0))), this._opacityTexture = ((0, ID.m)(this, zc), (0, ID.m)(this, jc, null)), MD.set(this, ((0, ID.m)(this, lc), (0, ID.m)(this, Lc, void 0))), this._reflectionTexture = ((0, ID.m)(this, Tc), (0, ID.m)(this, Gc, null)), PD.set(this, ((0, ID.m)(this, Rc), (0, ID.m)(this, kc, void 0))), this._emissiveTexture = ((0, ID.m)(this, dc), (0, ID.m)(this, Yc, null)), HD.set(this, ((0, ID.m)(this, Wc), (0, ID.m)(this, sc, void 0))), this._specularTexture = ((0, ID.m)(this, Ec), (0, ID.m)(this, ec, null)), UD.set(this, ((0, ID.m)(this, uc), (0, ID.m)(this, hc, void 0))), this._bumpTexture = ((0, ID.m)(this, rc), (0, ID.m)(this, Ac, null)), xD.set(this, ((0, ID.m)(this, Fc), (0, ID.m)(this, DI, void 0))), this._lightmapTexture = ((0, ID.m)(this, CI), (0, ID.m)(this, cI, null)), qD.set(this, ((0, ID.m)(this, II), (0, ID.m)(this, pI, void 0))), this._refractionTexture = ((0, ID.m)(this, iI), (0, ID.m)(this, fI, null)), KD.set(this, ((0, ID.m)(this, bI), (0, ID.m)(this, QI, void 0))), this.ambientColor = ((0, ID.m)(this, wI), (0, ID.m)(this, SI, new bD.d(0, 0, 0))), this.diffuseColor = ((0, ID.m)(this, BI), (0, ID.m)(this, yI, new bD.d(1, 1, 1))), this.specularColor = ((0, ID.m)(this, MI), (0, ID.m)(this, tI, new bD.d(1, 1, 1))), this.emissiveColor = ((0, ID.m)(this, ZI), (0, ID.m)(this, oI, new bD.d(0, 0, 0))), this.specularPower = ((0, ID.m)(this, vI), (0, ID.m)(this, NI, 64)), this._useAlphaFromDiffuseTexture = ((0, ID.m)(this, gI), (0, ID.m)(this, XI, !1)), zD.set(this, ((0, ID.m)(this, mI), (0, ID.m)(this, nI, void 0))), this._useEmissiveAsIllumination = ((0, ID.m)(this, OI), (0, ID.m)(this, PI, !1)), jD.set(this, ((0, ID.m)(this, HI), (0, ID.m)(this, UI, void 0))), this._linkEmissiveWithDiffuse = ((0, ID.m)(this, xI), (0, ID.m)(this, qI, !1)), lD.set(this, ((0, ID.m)(this, JI), (0, ID.m)(this, KI, void 0))), this._useSpecularOverAlpha = ((0, ID.m)(this, aI), (0, ID.m)(this, VI, !1)), LD.set(this, ((0, ID.m)(this, zI), (0, ID.m)(this, jI, void 0))), this._useReflectionOverAlpha = ((0, ID.m)(this, lI), (0, ID.m)(this, LI, !1)), TD.set(this, ((0, ID.m)(this, TI), (0, ID.m)(this, GI, void 0))), this._disableLighting = ((0, ID.m)(this, RI), (0, ID.m)(this, kI, !1)), GD.set(this, ((0, ID.m)(this, dI), (0, ID.m)(this, YI, void 0))), this._useObjectSpaceNormalMap = ((0, ID.m)(this, WI), (0, ID.m)(this, sI, !1)), RD.set(this, ((0, ID.m)(this, EI), (0, ID.m)(this, eI, void 0))), this._useParallax = ((0, ID.m)(this, uI), (0, ID.m)(this, hI, !1)), kD.set(this, ((0, ID.m)(this, rI), (0, ID.m)(this, AI, void 0))), this._useParallaxOcclusion = ((0, ID.m)(this, FI), (0, ID.m)(this, Dp, !1)), dD.set(this, ((0, ID.m)(this, Cp), (0, ID.m)(this, cp, void 0))), this.parallaxScaleBias = ((0, ID.m)(this, Ip), (0, ID.m)(this, pp, .05)), this._roughness = ((0, ID.m)(this, ip), (0, ID.m)(this, fp, 0)), YD.set(this, ((0, ID.m)(this, bp), (0, ID.m)(this, Qp, void 0))), this.indexOfRefraction = ((0, ID.m)(this, wp), (0, ID.m)(this, Sp, .98)), this.invertRefractionY = ((0, ID.m)(this, Bp), (0, ID.m)(this, yp, !0)), this.alphaCutOff = ((0, ID.m)(this, Mp), (0, ID.m)(this, tp, .4)), this._useLightmapAsShadowmap = ((0, ID.m)(this, Zp), (0, ID.m)(this, op, !1)), WD.set(this, ((0, ID.m)(this, vp), (0, ID.m)(this, Np, void 0))), this._diffuseFresnelParameters = ((0, ID.m)(this, gp), (0, ID.m)(this, Xp, void 0)), sD.set(this, ((0, ID.m)(this, mp), (0, ID.m)(this, np, void 0))), this._opacityFresnelParameters = ((0, ID.m)(this, Op), (0, ID.m)(this, Pp, void 0)), ED.set(this, ((0, ID.m)(this, Hp), (0, ID.m)(this, Up, void 0))), this._reflectionFresnelParameters = ((0, ID.m)(this, xp), (0, ID.m)(this, qp, void 0)), eD.set(this, ((0, ID.m)(this, Jp), (0, ID.m)(this, Kp, void 0))), this._refractionFresnelParameters = ((0, ID.m)(this, ap), (0, ID.m)(this, Vp, void 0)), uD.set(this, ((0, ID.m)(this, zp), (0, ID.m)(this, jp, void 0))), this._emissiveFresnelParameters = ((0, ID.m)(this, lp), (0, ID.m)(this, Lp, void 0)), hD.set(this, ((0, ID.m)(this, Tp), (0, ID.m)(this, Gp, void 0))), this._useReflectionFresnelFromSpecular = ((0, ID.m)(this, Rp), (0, ID.m)(this, kp, !1)), rD.set(this, ((0, ID.m)(this, dp), (0, ID.m)(this, Yp, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, ID.m)(this, Wp), (0, ID.m)(this, sp, !1)), AD.set(this, ((0, ID.m)(this, Ep), (0, ID.m)(this, ep, void 0))), this._maxSimultaneousLights = ((0, ID.m)(this, hp), (0, ID.m)(this, rp, 4)), FD.set(this, ((0, ID.m)(this, Ap), (0, ID.m)(this, Fp, void 0))), this._invertNormalMapX = ((0, ID.m)(this, Di), (0, ID.m)(this, Ci, !1)), DC.set(this, ((0, ID.m)(this, ci), (0, ID.m)(this, Ii, void 0))), this._invertNormalMapY = ((0, ID.m)(this, ii), (0, ID.m)(this, fi, !1)), CC.set(this, ((0, ID.m)(this, bi), (0, ID.m)(this, Qi, void 0))), this._twoSidedLighting = ((0, ID.m)(this, wi), (0, ID.m)(this, Si, !1)), cC.set(this, ((0, ID.m)(this, Bi), (0, ID.m)(this, yi, void 0))), this._applyDecalMapAfterDetailMap = ((0, ID.m)(this, Mi), (0, ID.m)(this, ti, !1)), IC.set(this, ((0, ID.m)(this, Zi), (0, ID.m)(this, oi, void 0))), this._vertexPullingMetadata = ((0, ID.m)(this, vi), null), this._renderTargets = new iD.f(16), this._globalAmbientColor = new bD.d(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new vD.b(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new wD.c, this.getRenderTargetTextures = () => (this._renderTargets.reset(), DD.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), DD.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(DD.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(DD.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === yD.d.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== yD.d.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(CD, cD) {
            let ID = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const pD = cD._drawWrapper;
            if (pD.effect && this.isFrozen && pD._wasPreviouslyReady && pD._wasPreviouslyUsingInstances === ID) return !0;
            cD.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), cD.materialDefines = new aD(this._eventInfo.defineNames));
            const iD = this.hq(),
              fD = cD.materialDefines;
            if (this._isReadyForSubMesh(cD)) return !0;
            const bD = iD.DZ();
            if (fD._needNormals = (0, XD.cb)(iD, CD, fD, !0, this._maxSimultaneousLights, this._disableLighting), !(0, XD.c)(iD, CD, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, XD.hb)(iD, fD);
            const SD = this.needAlphaBlendingForMesh(CD) && this.hq().useOrderIndependentTransparency;
            if ((0, XD.nb)(iD, fD, this.canRenderToMRT && !SD), (0, XD.lb)(iD, fD, SD), OD.d.PrepareDefines(bD.currentRenderPassId, CD, fD), fD._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, fD._needUVs = !1;
              for (let DD = 1; DD <= 6; ++DD) fD["MAINUV" + DD] = !1;
              if (iD.texturesEnabled) {
                if (fD.DIFFUSEDIRECTUV = 0, fD.BUMPDIRECTUV = 0, fD.AMBIENTDIRECTUV = 0, fD.OPACITYDIRECTUV = 0, fD.EMISSIVEDIRECTUV = 0, fD.SPECULARDIRECTUV = 0, fD.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && DD.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, XD.db)(this._diffuseTexture, fD, "DIFFUSE")
                } else fD.DIFFUSE = !1;
                if (this._ambientTexture && DD.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, XD.db)(this._ambientTexture, fD, "AMBIENT")
                } else fD.AMBIENT = !1;
                if (this._opacityTexture && DD.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, XD.db)(this._opacityTexture, fD, "OPACITY"), fD.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else fD.OPACITY = !1;
                if (this._reflectionTexture && DD.ReflectionTextureEnabled ? (fD.ROUGHNESS = this._roughness > 0, fD.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (fD.ROUGHNESS = !1, fD.REFLECTIONOVERALPHA = !1), !(0, XD.$)(iD, this._reflectionTexture, fD)) return !1;
                if (this._emissiveTexture && DD.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, XD.db)(this._emissiveTexture, fD, "EMISSIVE")
                } else fD.EMISSIVE = !1;
                if (this._lightmapTexture && DD.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, XD.db)(this._lightmapTexture, fD, "LIGHTMAP"), fD.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, fD.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else fD.LIGHTMAP = !1;
                if (this._specularTexture && DD.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, XD.db)(this._specularTexture, fD, "SPECULAR"), fD.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else fD.SPECULAR = !1;
                if (iD.DZ().getCaps().standardDerivatives && this._bumpTexture && DD.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, XD.db)(this._bumpTexture, fD, "BUMP"), fD.PARALLAX = this._useParallax, fD.PARALLAX_RHS = iD.useRightHandedSystem, fD.PARALLAXOCCLUSION = this._useParallaxOcclusion, fD.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else fD.BUMP = !1, fD.PARALLAX = !1, fD.PARALLAX_RHS = !1, fD.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && DD.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  fD._needUVs = !0, fD.REFRACTION = !0, fD.REFRACTIONMAP_3D = this._refractionTexture.isCube, fD.RGBDREFRACTION = this._refractionTexture.isRGBD, fD.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else fD.REFRACTION = !1;
                fD.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else fD.DIFFUSE = !1, fD.AMBIENT = !1, fD.OPACITY = !1, fD.REFLECTION = !1, fD.EMISSIVE = !1, fD.LIGHTMAP = !1, fD.BUMP = !1, fD.REFRACTION = !1;
              fD.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), fD.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, fD.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, fD.SPECULAROVERALPHA = this._useSpecularOverAlpha, fD.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, fD.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, fD.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(CD), fD.TEXTURE_REPETITION_MODE = bD.version > 1 || bD.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = fD, this._eventInfo.subMesh = cD, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (fD._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(fD), fD.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, fD.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (fD._areFresnelDirty && (DD.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (fD.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, fD.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, fD.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, fD.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, fD.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, fD.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, fD._needNormals = !0, fD.FRESNEL = !0) : fD.FRESNEL = !1), fD.AREALIGHTUSED || fD.CLUSTLIGHT_BATCH)
              for (let DD = 0; DD < CD.lightSources.length; DD++)
                if (!CD.lightSources[DD]._isReady()) return !1;
            (0, XD.gb)(CD, iD, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(CD), fD, this._applyDecalMapAfterDetailMap, this._useVertexPulling, cD.getRenderingMesh(), this._isVertexOutputInvariant), (0, XD.Z)(iD, bD, this, fD, ID, null, cD.getRenderingMesh().hasThinInstances), this._eventInfo.defines = fD, this._eventInfo.mesh = CD, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, XD.V)(CD, fD, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let yD = !1;
            if (fD.isDirty) {
              const ID = fD._areLightsDisposed;
              fD.markAsProcessed();
              const pD = new oD.b;
              fD.REFLECTION && pD.addFallback(0, "REFLECTION"), fD.SPECULAR && pD.addFallback(0, "SPECULAR"), fD.BUMP && pD.addFallback(0, "BUMP"), fD.PARALLAX && pD.addFallback(1, "PARALLAX"), fD.PARALLAX_RHS && pD.addFallback(1, "PARALLAX_RHS"), fD.PARALLAXOCCLUSION && pD.addFallback(0, "PARALLAXOCCLUSION"), fD.SPECULAROVERALPHA && pD.addFallback(0, "SPECULAROVERALPHA"), fD.FOG && pD.addFallback(1, "FOG"), fD.POINTSIZE && pD.addFallback(0, "POINTSIZE"), fD.LOGARITHMICDEPTH && pD.addFallback(0, "LOGARITHMICDEPTH"), (0, XD.D)(fD, pD, this._maxSimultaneousLights), fD.SPECULARTERM && pD.addFallback(0, "SPECULARTERM"), fD.DIFFUSEFRESNEL && pD.addFallback(1, "DIFFUSEFRESNEL"), fD.OPACITYFRESNEL && pD.addFallback(2, "OPACITYFRESNEL"), fD.REFLECTIONFRESNEL && pD.addFallback(3, "REFLECTIONFRESNEL"), fD.EMISSIVEFRESNEL && pD.addFallback(4, "EMISSIVEFRESNEL"), fD.FRESNEL && pD.addFallback(4, "FRESNEL"), fD.MULTIVIEW && pD.addFallback(0, "MULTIVIEW");
              const SD = [QD.k.PositionKind];
              fD.NORMAL && SD.push(QD.k.NormalKind), fD.TANGENT && SD.push(QD.k.TangentKind);
              for (let DD = 1; DD <= 6; ++DD) fD["UV" + DD] && SD.push(`uv${1===DD?"":DD}`);
              fD.VERTEXCOLOR && SD.push(QD.k.ColorKind), (0, XD.K)(SD, CD, fD, pD), (0, XD.L)(SD, fD), (0, XD.O)(SD, CD, fD), (0, XD.H)(SD, CD, fD);
              let MD = "default";
              const tD = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                ZD = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, XD.pb)(tD, ZD, !1);
              const vD = ["Material", "Scene", "Mesh"],
                mD = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: fD.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = pD, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = fD, this._eventInfo.uniforms = tD, this._eventInfo.attributes = SD, this._eventInfo.samplers = ZD, this._eventInfo.uniformBuffersNames = vD, this._eventInfo.customCode = void 0, this._eventInfo.mesh = CD, this._eventInfo.indexParameters = mD, this._callbackPluginEventGeneric(128, this._eventInfo), OD.d.AddUniformsAndSamplers(tD, ZD), wD.c.AddUniforms(tD), wD.c.AddSamplers(ZD), BD.c && (BD.c.PrepareUniforms(tD, fD), BD.c.PrepareSamplers(ZD, fD)), (0, XD.qb)({
                  uniformsNames: tD,
                  uniformBuffersNames: vD,
                  samplers: ZD,
                  defines: fD,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, ND.e)(tD), this._useVertexPulling) {
                const DD = cD.getRenderingMesh(),
                  CD = DD?.geometry;
                CD && (this._vertexPullingMetadata = (0, gD.f)(CD), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((DD, CD) => {
                  tD.push(`vp_${CD}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const nD = {};
              this.customShaderNameResolve && (MD = this.customShaderNameResolve(MD, tD, vD, ZD, fD, SD, nD));
              const PD = fD.toString(),
                HD = cD.effect,
                UD = iD.DZ().createEffect(MD, {
                  attributes: SD,
                  uniformsNames: tD,
                  uniformBuffersNames: vD,
                  samplers: ZD,
                  defines: PD,
                  fallbacks: pD,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: mD,
                  processFinalCode: nD.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: fD.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: DD._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, bD);
              if (this._eventInfo.customCode = void 0, UD)
                if (this._onEffectCreatedObservable && (JD.effect = UD, JD.subMesh = cD, this._onEffectCreatedObservable.notifyObservers(JD)), this.allowShaderHotSwapping && HD && !UD.isReady()) {
                  if (fD.markAsUnprocessed(), yD = this.isFrozen, ID) return fD._areLightsDisposed = !0, !1
                } else iD.resetCachedMaterial(), cD.setEffect(UD, fD, this._materialContext)
            }
            return !(!cD.effect || !cD.effect.isReady()) && (fD._renderId = iD.getRenderId(), pD._wasPreviouslyReady = !yD, pD._wasPreviouslyUsingInstances = ID, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const DD = this._uniformBuffer;
            DD.addUniform("diffuseLeftColor", 4), DD.addUniform("diffuseRightColor", 4), DD.addUniform("opacityParts", 4), DD.addUniform("reflectionLeftColor", 4), DD.addUniform("reflectionRightColor", 4), DD.addUniform("refractionLeftColor", 4), DD.addUniform("refractionRightColor", 4), DD.addUniform("emissiveLeftColor", 4), DD.addUniform("emissiveRightColor", 4), DD.addUniform("vDiffuseInfos", 2), DD.addUniform("vAmbientInfos", 2), DD.addUniform("vOpacityInfos", 2), DD.addUniform("vEmissiveInfos", 2), DD.addUniform("vLightmapInfos", 2), DD.addUniform("vSpecularInfos", 2), DD.addUniform("vBumpInfos", 3), DD.addUniform("diffuseMatrix", 16), DD.addUniform("ambientMatrix", 16), DD.addUniform("opacityMatrix", 16), DD.addUniform("emissiveMatrix", 16), DD.addUniform("lightmapMatrix", 16), DD.addUniform("specularMatrix", 16), DD.addUniform("bumpMatrix", 16), DD.addUniform("vTangentSpaceParams", 2), DD.addUniform("pointSize", 1), DD.addUniform("alphaCutOff", 1), DD.addUniform("refractionMatrix", 16), DD.addUniform("vRefractionInfos", 4), DD.addUniform("vRefractionPosition", 3), DD.addUniform("vRefractionSize", 3), DD.addUniform("vSpecularColor", 4), DD.addUniform("vEmissiveColor", 3), DD.addUniform("vDiffuseColor", 4), DD.addUniform("vAmbientColor", 3), DD.addUniform("cameraInfo", 4), DD.addUniform("vTextureRepetitionHexTilingParams", 4), (0, XD.ob)(DD, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(CD, cD, ID) {
            const pD = this.hq(),
              iD = ID.materialDefines;
            if (!iD) return;
            const QD = ID.effect;
            if (!QD) return;
            this._activeEffect = QD, cD.getMeshUniformBuffer().bindToEffect(QD, "Mesh"), cD.transferToEffect(CD), this._uniformBuffer.bindToEffect(QD, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, pD, cD, CD, this.isFrozen), OD.d.Bind(pD.DZ().currentRenderPassId, this._activeEffect, cD, CD, this);
            const wD = pD.activeCamera;
            wD ? this._uniformBuffer.updateFloat4("cameraInfo", wD.minZ, wD.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const SD = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", SD[0], SD[1], SD[2], SD[3]), this._eventInfo.subMesh = ID, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), iD.OBJECTSPACE_NORMALMAP && (CD.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const BD = this._mustRebind(pD, QD, ID, cD.visibility),
              yD = pD.DZ()._features.needToAlwaysBindUniformBuffers;
            (0, XD.d)(cD, QD), this._vertexPullingMetadata && (0, gD.c)(QD, this._vertexPullingMetadata);
            const MD = this._uniformBuffer;
            if (BD) {
              if (this.bindViewProjection(QD), !MD.useUbo || !this.isFrozen || !MD.isSync || ID._drawWrapper._forceRebindOnNextCall) {
                if (DD.FresnelEnabled && iD.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (MD.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), MD.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const DD = bD.j.Color3[0];
                    DD.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), MD.updateColor4("opacityParts", DD, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (MD.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), MD.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (MD.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), MD.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (MD.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), MD.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (iD.ALPHATEST && MD.updateFloat("alphaCutOff", this.alphaCutOff), pD.texturesEnabled && (this._diffuseTexture && DD.DiffuseTextureEnabled && (MD.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, XD.C)(this._diffuseTexture, MD, "diffuse")), this._ambientTexture && DD.AmbientTextureEnabled && (MD.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, XD.C)(this._ambientTexture, MD, "ambient")), this._opacityTexture && DD.OpacityTextureEnabled && (MD.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, XD.C)(this._opacityTexture, MD, "opacity")), (0, XD.l)(pD, iD, MD, bD.d.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && DD.ReflectionTextureEnabled || MD.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && DD.EmissiveTextureEnabled && (MD.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, XD.C)(this._emissiveTexture, MD, "emissive")), this._lightmapTexture && DD.LightmapTextureEnabled && (MD.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, XD.C)(this._lightmapTexture, MD, "lightmap")), this._specularTexture && DD.SpecularTextureEnabled && (MD.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, XD.C)(this._specularTexture, MD, "specular")), this._bumpTexture && pD.DZ().getCaps().standardDerivatives && DD.BumpTextureEnabled && (MD.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, XD.C)(this._bumpTexture, MD, "bump"), pD._mirroredCameraPosition ? MD.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : MD.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && DD.RefractionTextureEnabled)) {
                  let DD = 1;
                  if (this._refractionTexture.isCube || (MD.o5("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (DD = this._refractionTexture.depth)), MD.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, DD, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const DD = this._refractionTexture;
                    MD.updateVector3("vRefractionPosition", DD.boundingBoxPosition), MD.updateVector3("vRefractionSize", DD.boundingBoxSize)
                  }
                }
                this.pointsCloud && MD.updateFloat("pointSize", this.pointSize), MD.updateColor4("vSpecularColor", this.specularColor, this.specularPower), MD.updateColor3("vEmissiveColor", DD.EmissiveTextureEnabled ? this.emissiveColor : bD.d.BlackReadOnly), MD.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), pD.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), MD.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              pD.texturesEnabled && (this._diffuseTexture && DD.DiffuseTextureEnabled && QD.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && DD.AmbientTextureEnabled && QD.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && DD.OpacityTextureEnabled && QD.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && DD.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? QD.setTexture("reflectionCubeSampler", this._reflectionTexture) : QD.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && DD.EmissiveTextureEnabled && QD.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && DD.LightmapTextureEnabled && QD.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && DD.SpecularTextureEnabled && QD.setTexture("specularSampler", this._specularTexture), this._bumpTexture && pD.DZ().getCaps().standardDerivatives && DD.BumpTextureEnabled && QD.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && DD.RefractionTextureEnabled && (this._refractionTexture.isCube ? QD.setTexture("refractionCubeSampler", this._refractionTexture) : QD.setTexture("refraction2DSampler", this._refractionTexture))), this.hq().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(cD) && this.hq().depthPeelingRenderer.bind(QD), this._eventInfo.subMesh = ID, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, ND.i)(QD, this, pD), this.bindEyePosition(QD)
            } else yD && (this._needToBindSceneUbo = !0);
            !BD && this.isFrozen && !yD || !pD.lightsEnabled || this._disableLighting || (0, XD.r)(pD, cD, QD, iD, this._maxSimultaneousLights), !BD && this.isFrozen || ((pD.fogEnabled && cD.applyFog && pD.fogMode !== fD.e.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || cD.receiveShadows || iD.PREPASS || iD.CLUSTLIGHT_BATCH) && this.bindView(QD), (0, XD.h)(pD, cD, QD), iD.NUM_MORPH_INFLUENCERS && (0, XD.y)(cD, QD), iD.BAKED_VERTEX_ANIMATION_TEXTURE && cD.bakedVertexAnimationManager?.bind(QD, iD.INSTANCES), this.useLogarithmicDepth && (0, XD.u)(iD, QD, pD), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(cD, this._activeEffect, ID), MD.update()
          }
          _canBindRunFollower(CD, cD, ID, pD, iD) {
            const fD = CD.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === DD.prototype.isReadyForSubMesh && this.bindForSubMesh === DD.prototype.bindForSubMesh && this._mustRebind === tD.b.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !cD._features.needToAlwaysBindUniformBuffers && !(fD && fD.enabled && fD.currentRTisSceneRT) && !OD.d._Configurations[cD.currentRenderPassId] && !pD.materialDefines?.OBJECTSPACE_NORMALMAP && !ID.skeleton && !iD._bonesComputationForcedToCPU
          }
          _bindRunFollower(DD, CD, cD, ID) {
            this._activeEffect = ID, CD.getMeshUniformBuffer().bindToEffect(ID, "Mesh"), CD.transferToEffect(DD);
            const pD = this._uniformBuffer;
            pD.bindToEffect(ID, "Material");
            const iD = this._scene.activeCamera;
            iD ? pD.updateFloat4("cameraInfo", iD.minZ, iD.maxZ, 0, 0) : pD.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const fD = this.textureRepetitionHexTilingParams;
            pD.updateFloat4("vTextureRepetitionHexTilingParams", fD[0], fD[1], fD[2], fD[3]), this._afterBind(CD, ID, cD), pD.update()
          }
          getAnimatables() {
            const DD = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && DD.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && DD.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && DD.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && DD.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && DD.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && DD.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && DD.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && DD.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && DD.push(this._refractionTexture), DD
          }
          getActiveTextures() {
            const DD = super.getActiveTextures();
            return this._diffuseTexture && DD.push(this._diffuseTexture), this._ambientTexture && DD.push(this._ambientTexture), this._opacityTexture && DD.push(this._opacityTexture), this._reflectionTexture && DD.push(this._reflectionTexture), this._emissiveTexture && DD.push(this._emissiveTexture), this._specularTexture && DD.push(this._specularTexture), this._bumpTexture && DD.push(this._bumpTexture), this._lightmapTexture && DD.push(this._lightmapTexture), this._refractionTexture && DD.push(this._refractionTexture), DD
          }
          hasTexture(DD) {
            return !!super.hasTexture(DD) || (this._diffuseTexture === DD || (this._ambientTexture === DD || (this._opacityTexture === DD || (this._reflectionTexture === DD || (this._emissiveTexture === DD || (this._specularTexture === DD || (this._bumpTexture === DD || (this._lightmapTexture === DD || this._refractionTexture === DD))))))))
          }
          dispose(DD, CD) {
            CD && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(DD, CD)
          }
          clone(CD) {
            let cD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const pD = mD.d.Clone((() => new DD(CD, this.hq())), this, {
              cloneTexturesOnlyOnce: cD
            });
            return pD.name = CD, pD.id = CD, this.stencil.copyTo(pD.stencil), this._clonePlugins(pD, ID), pD
          }
          static Parse(CD, cD, ID) {
            const pD = mD.d.Parse((() => new DD(CD.name, cD)), CD, cD, ID);
            return CD.stencil && pD.stencil.parse(CD.stencil, cD, ID), yD.d._ParsePlugins(CD, pD, cD, ID), pD
          }
          static get DiffuseTextureEnabled() {
            return ZD.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(DD) {
            ZD.e.DiffuseTextureEnabled = DD
          }
          static get DetailTextureEnabled() {
            return ZD.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(DD) {
            ZD.e.DetailTextureEnabled = DD
          }
          static get AmbientTextureEnabled() {
            return ZD.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(DD) {
            ZD.e.AmbientTextureEnabled = DD
          }
          static get OpacityTextureEnabled() {
            return ZD.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(DD) {
            ZD.e.OpacityTextureEnabled = DD
          }
          static get ReflectionTextureEnabled() {
            return ZD.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(DD) {
            ZD.e.ReflectionTextureEnabled = DD
          }
          static get EmissiveTextureEnabled() {
            return ZD.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(DD) {
            ZD.e.EmissiveTextureEnabled = DD
          }
          static get SpecularTextureEnabled() {
            return ZD.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(DD) {
            ZD.e.SpecularTextureEnabled = DD
          }
          static get BumpTextureEnabled() {
            return ZD.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(DD) {
            ZD.e.BumpTextureEnabled = DD
          }
          static get LightmapTextureEnabled() {
            return ZD.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(DD) {
            ZD.e.LightmapTextureEnabled = DD
          }
          static get RefractionTextureEnabled() {
            return ZD.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(DD) {
            ZD.e.RefractionTextureEnabled = DD
          }
          static get ColorGradingTextureEnabled() {
            return ZD.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(DD) {
            ZD.e.ColorGradingTextureEnabled = DD
          }
          static get FresnelEnabled() {
            return ZD.e.FresnelEnabled
          }
          static set FresnelEnabled(DD) {
            ZD.e.FresnelEnabled = DD
          }
        }, CD = new WeakMap, SD = new WeakMap, MD = new WeakMap, PD = new WeakMap, HD = new WeakMap, UD = new WeakMap, xD = new WeakMap, qD = new WeakMap, KD = new WeakMap, zD = new WeakMap, jD = new WeakMap, lD = new WeakMap, LD = new WeakMap, TD = new WeakMap, GD = new WeakMap, RD = new WeakMap, kD = new WeakMap, dD = new WeakMap, YD = new WeakMap, WD = new WeakMap, sD = new WeakMap, ED = new WeakMap, eD = new WeakMap, uD = new WeakMap, hD = new WeakMap, rD = new WeakMap, AD = new WeakMap, FD = new WeakMap, DC = new WeakMap, CC = new WeakMap, cC = new WeakMap, IC = new WeakMap, (() => {
          const CD = "function" === typeof Symbol && Symbol.metadata ? Object.create(Hc[Symbol.metadata] ?? null) : void 0;
          pC = [(0, pD.w)("diffuseTexture")], iC = [(0, pD.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], fC = [(0, pD.w)("ambientTexture")], bC = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], QC = [(0, pD.w)("opacityTexture")], wC = [(0, pD.c)("_markAllSubMeshesAsTexturesAndMiscDirty")], SC = [(0, pD.w)("reflectionTexture")], BC = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], yC = [(0, pD.w)("emissiveTexture")], MC = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], tC = [(0, pD.w)("specularTexture")], ZC = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], oC = [(0, pD.w)("bumpTexture")], vC = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], NC = [(0, pD.w)("lightmapTexture")], gC = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], XC = [(0, pD.w)("refractionTexture")], mC = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], nC = [(0, pD.l)("ambient")], OC = [(0, pD.l)("diffuse")], PC = [(0, pD.l)("specular")], HC = [(0, pD.l)("emissive")], UC = [(0, pD.G)()], xC = [(0, pD.G)("useAlphaFromDiffuseTexture")], qC = [() => ({
            init(DD) {
              return void 0 === DD && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = DD), DD
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(DD) {
              this._useAlphaFromDiffuseTexture = DD
            }
          })], JC = [(0, pD.G)("useEmissiveAsIllumination")], KC = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], aC = [(0, pD.G)("linkEmissiveWithDiffuse")], VC = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], zC = [(0, pD.G)("useSpecularOverAlpha")], jC = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], lC = [(0, pD.G)("useReflectionOverAlpha")], LC = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], TC = [(0, pD.G)("disableLighting")], GC = [(0, pD.c)("_markAllSubMeshesAsLightsDirty")], RC = [(0, pD.G)("useObjectSpaceNormalMap")], kC = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], dC = [(0, pD.G)("useParallax")], YC = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], WC = [(0, pD.G)("useParallaxOcclusion")], sC = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], EC = [(0, pD.G)()], eC = [(0, pD.G)("roughness")], uC = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], hC = [(0, pD.G)()], rC = [(0, pD.G)()], AC = [(0, pD.G)()], FC = [(0, pD.G)("useLightmapAsShadowmap")], Dc = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], Cc = [(0, pD.o)("diffuseFresnelParameters")], cc = [(0, pD.c)("_markAllSubMeshesAsFresnelDirty")], Ic = [(0, pD.o)("opacityFresnelParameters")], pc = [(0, pD.c)("_markAllSubMeshesAsFresnelAndMiscDirty")], ic = [(0, pD.o)("reflectionFresnelParameters")], fc = [(0, pD.c)("_markAllSubMeshesAsFresnelDirty")], bc = [(0, pD.o)("refractionFresnelParameters")], Qc = [(0, pD.c)("_markAllSubMeshesAsFresnelDirty")], wc = [(0, pD.o)("emissiveFresnelParameters")], Sc = [(0, pD.c)("_markAllSubMeshesAsFresnelDirty")], Bc = [(0, pD.G)("useReflectionFresnelFromSpecular")], yc = [(0, pD.c)("_markAllSubMeshesAsFresnelDirty")], Mc = [(0, pD.G)("useGlossinessFromSpecularMapAlpha")], tc = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], Zc = [(0, pD.G)("maxSimultaneousLights")], oc = [(0, pD.c)("_markAllSubMeshesAsLightsDirty")], vc = [(0, pD.G)("invertNormalMapX")], Nc = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], gc = [(0, pD.G)("invertNormalMapY")], Xc = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], mc = [(0, pD.G)("twoSidedLighting")], nc = [(0, pD.c)("_markAllSubMeshesAsTexturesDirty")], Oc = [(0, pD.G)("applyDecalMapAfterDetailMap")], Pc = [(0, pD.c)("_markAllSubMeshesAsMiscDirty")], (0, ID.k)(DD, null, iC, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "diffuseTexture" in DD,
              get: DD => DD.diffuseTexture,
              set: (DD, CD) => {
                DD.diffuseTexture = CD
              }
            },
            metadata: CD
          }, qc, Jc), (0, ID.k)(DD, null, bC, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "ambientTexture" in DD,
              get: DD => DD.ambientTexture,
              set: (DD, CD) => {
                DD.ambientTexture = CD
              }
            },
            metadata: CD
          }, Vc, zc), (0, ID.k)(DD, null, wC, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "opacityTexture" in DD,
              get: DD => DD.opacityTexture,
              set: (DD, CD) => {
                DD.opacityTexture = CD
              }
            },
            metadata: CD
          }, Lc, Tc), (0, ID.k)(DD, null, BC, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "reflectionTexture" in DD,
              get: DD => DD.reflectionTexture,
              set: (DD, CD) => {
                DD.reflectionTexture = CD
              }
            },
            metadata: CD
          }, kc, dc), (0, ID.k)(DD, null, MC, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "emissiveTexture" in DD,
              get: DD => DD.emissiveTexture,
              set: (DD, CD) => {
                DD.emissiveTexture = CD
              }
            },
            metadata: CD
          }, sc, Ec), (0, ID.k)(DD, null, ZC, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularTexture" in DD,
              get: DD => DD.specularTexture,
              set: (DD, CD) => {
                DD.specularTexture = CD
              }
            },
            metadata: CD
          }, hc, rc), (0, ID.k)(DD, null, vC, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "bumpTexture" in DD,
              get: DD => DD.bumpTexture,
              set: (DD, CD) => {
                DD.bumpTexture = CD
              }
            },
            metadata: CD
          }, DI, CI), (0, ID.k)(DD, null, gC, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "lightmapTexture" in DD,
              get: DD => DD.lightmapTexture,
              set: (DD, CD) => {
                DD.lightmapTexture = CD
              }
            },
            metadata: CD
          }, pI, iI), (0, ID.k)(DD, null, mC, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "refractionTexture" in DD,
              get: DD => DD.refractionTexture,
              set: (DD, CD) => {
                DD.refractionTexture = CD
              }
            },
            metadata: CD
          }, QI, wI), (0, ID.k)(DD, null, qC, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "useAlphaFromDiffuseTexture" in DD,
              get: DD => DD.useAlphaFromDiffuseTexture,
              set: (DD, CD) => {
                DD.useAlphaFromDiffuseTexture = CD
              }
            },
            metadata: CD
          }, nI, OI), (0, ID.k)(DD, null, KC, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: DD => "useEmissiveAsIllumination" in DD,
              get: DD => DD.useEmissiveAsIllumination,
              set: (DD, CD) => {
                DD.useEmissiveAsIllumination = CD
              }
            },
            metadata: CD
          }, UI, xI), (0, ID.k)(DD, null, VC, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: DD => "linkEmissiveWithDiffuse" in DD,
              get: DD => DD.linkEmissiveWithDiffuse,
              set: (DD, CD) => {
                DD.linkEmissiveWithDiffuse = CD
              }
            },
            metadata: CD
          }, KI, aI), (0, ID.k)(DD, null, jC, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: DD => "useSpecularOverAlpha" in DD,
              get: DD => DD.useSpecularOverAlpha,
              set: (DD, CD) => {
                DD.useSpecularOverAlpha = CD
              }
            },
            metadata: CD
          }, jI, lI), (0, ID.k)(DD, null, LC, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: DD => "useReflectionOverAlpha" in DD,
              get: DD => DD.useReflectionOverAlpha,
              set: (DD, CD) => {
                DD.useReflectionOverAlpha = CD
              }
            },
            metadata: CD
          }, GI, RI), (0, ID.k)(DD, null, GC, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: DD => "disableLighting" in DD,
              get: DD => DD.disableLighting,
              set: (DD, CD) => {
                DD.disableLighting = CD
              }
            },
            metadata: CD
          }, YI, WI), (0, ID.k)(DD, null, kC, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: DD => "useObjectSpaceNormalMap" in DD,
              get: DD => DD.useObjectSpaceNormalMap,
              set: (DD, CD) => {
                DD.useObjectSpaceNormalMap = CD
              }
            },
            metadata: CD
          }, eI, uI), (0, ID.k)(DD, null, YC, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: DD => "useParallax" in DD,
              get: DD => DD.useParallax,
              set: (DD, CD) => {
                DD.useParallax = CD
              }
            },
            metadata: CD
          }, AI, FI), (0, ID.k)(DD, null, sC, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: DD => "useParallaxOcclusion" in DD,
              get: DD => DD.useParallaxOcclusion,
              set: (DD, CD) => {
                DD.useParallaxOcclusion = CD
              }
            },
            metadata: CD
          }, cp, Ip), (0, ID.k)(DD, null, uC, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: DD => "roughness" in DD,
              get: DD => DD.roughness,
              set: (DD, CD) => {
                DD.roughness = CD
              }
            },
            metadata: CD
          }, Qp, wp), (0, ID.k)(DD, null, Dc, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: DD => "useLightmapAsShadowmap" in DD,
              get: DD => DD.useLightmapAsShadowmap,
              set: (DD, CD) => {
                DD.useLightmapAsShadowmap = CD
              }
            },
            metadata: CD
          }, Np, gp), (0, ID.k)(DD, null, cc, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "diffuseFresnelParameters" in DD,
              get: DD => DD.diffuseFresnelParameters,
              set: (DD, CD) => {
                DD.diffuseFresnelParameters = CD
              }
            },
            metadata: CD
          }, np, Op), (0, ID.k)(DD, null, pc, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "opacityFresnelParameters" in DD,
              get: DD => DD.opacityFresnelParameters,
              set: (DD, CD) => {
                DD.opacityFresnelParameters = CD
              }
            },
            metadata: CD
          }, Up, xp), (0, ID.k)(DD, null, fc, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "reflectionFresnelParameters" in DD,
              get: DD => DD.reflectionFresnelParameters,
              set: (DD, CD) => {
                DD.reflectionFresnelParameters = CD
              }
            },
            metadata: CD
          }, Kp, ap), (0, ID.k)(DD, null, Qc, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "refractionFresnelParameters" in DD,
              get: DD => DD.refractionFresnelParameters,
              set: (DD, CD) => {
                DD.refractionFresnelParameters = CD
              }
            },
            metadata: CD
          }, jp, lp), (0, ID.k)(DD, null, Sc, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "emissiveFresnelParameters" in DD,
              get: DD => DD.emissiveFresnelParameters,
              set: (DD, CD) => {
                DD.emissiveFresnelParameters = CD
              }
            },
            metadata: CD
          }, Gp, Rp), (0, ID.k)(DD, null, yc, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: DD => "useReflectionFresnelFromSpecular" in DD,
              get: DD => DD.useReflectionFresnelFromSpecular,
              set: (DD, CD) => {
                DD.useReflectionFresnelFromSpecular = CD
              }
            },
            metadata: CD
          }, Yp, Wp), (0, ID.k)(DD, null, tc, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: DD => "useGlossinessFromSpecularMapAlpha" in DD,
              get: DD => DD.useGlossinessFromSpecularMapAlpha,
              set: (DD, CD) => {
                DD.useGlossinessFromSpecularMapAlpha = CD
              }
            },
            metadata: CD
          }, ep, hp), (0, ID.k)(DD, null, oc, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: DD => "maxSimultaneousLights" in DD,
              get: DD => DD.maxSimultaneousLights,
              set: (DD, CD) => {
                DD.maxSimultaneousLights = CD
              }
            },
            metadata: CD
          }, Fp, Di), (0, ID.k)(DD, null, Nc, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: DD => "invertNormalMapX" in DD,
              get: DD => DD.invertNormalMapX,
              set: (DD, CD) => {
                DD.invertNormalMapX = CD
              }
            },
            metadata: CD
          }, Ii, ii), (0, ID.k)(DD, null, Xc, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: DD => "invertNormalMapY" in DD,
              get: DD => DD.invertNormalMapY,
              set: (DD, CD) => {
                DD.invertNormalMapY = CD
              }
            },
            metadata: CD
          }, Qi, wi), (0, ID.k)(DD, null, nc, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: DD => "twoSidedLighting" in DD,
              get: DD => DD.twoSidedLighting,
              set: (DD, CD) => {
                DD.twoSidedLighting = CD
              }
            },
            metadata: CD
          }, yi, Mi), (0, ID.k)(DD, null, Pc, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: DD => "applyDecalMapAfterDetailMap" in DD,
              get: DD => DD.applyDecalMapAfterDetailMap,
              set: (DD, CD) => {
                DD.applyDecalMapAfterDetailMap = CD
              }
            },
            metadata: CD
          }, oi, vi), (0, ID.k)(null, null, pC, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_diffuseTexture" in DD,
              get: DD => DD._diffuseTexture,
              set: (DD, CD) => {
                DD._diffuseTexture = CD
              }
            },
            metadata: CD
          }, Uc, xc), (0, ID.k)(null, null, fC, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_ambientTexture" in DD,
              get: DD => DD._ambientTexture,
              set: (DD, CD) => {
                DD._ambientTexture = CD
              }
            },
            metadata: CD
          }, Kc, ac), (0, ID.k)(null, null, QC, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_opacityTexture" in DD,
              get: DD => DD._opacityTexture,
              set: (DD, CD) => {
                DD._opacityTexture = CD
              }
            },
            metadata: CD
          }, jc, lc), (0, ID.k)(null, null, SC, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_reflectionTexture" in DD,
              get: DD => DD._reflectionTexture,
              set: (DD, CD) => {
                DD._reflectionTexture = CD
              }
            },
            metadata: CD
          }, Gc, Rc), (0, ID.k)(null, null, yC, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_emissiveTexture" in DD,
              get: DD => DD._emissiveTexture,
              set: (DD, CD) => {
                DD._emissiveTexture = CD
              }
            },
            metadata: CD
          }, Yc, Wc), (0, ID.k)(null, null, tC, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_specularTexture" in DD,
              get: DD => DD._specularTexture,
              set: (DD, CD) => {
                DD._specularTexture = CD
              }
            },
            metadata: CD
          }, ec, uc), (0, ID.k)(null, null, oC, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_bumpTexture" in DD,
              get: DD => DD._bumpTexture,
              set: (DD, CD) => {
                DD._bumpTexture = CD
              }
            },
            metadata: CD
          }, Ac, Fc), (0, ID.k)(null, null, NC, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_lightmapTexture" in DD,
              get: DD => DD._lightmapTexture,
              set: (DD, CD) => {
                DD._lightmapTexture = CD
              }
            },
            metadata: CD
          }, cI, II), (0, ID.k)(null, null, XC, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_refractionTexture" in DD,
              get: DD => DD._refractionTexture,
              set: (DD, CD) => {
                DD._refractionTexture = CD
              }
            },
            metadata: CD
          }, fI, bI), (0, ID.k)(null, null, nC, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "ambientColor" in DD,
              get: DD => DD.ambientColor,
              set: (DD, CD) => {
                DD.ambientColor = CD
              }
            },
            metadata: CD
          }, SI, BI), (0, ID.k)(null, null, OC, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "diffuseColor" in DD,
              get: DD => DD.diffuseColor,
              set: (DD, CD) => {
                DD.diffuseColor = CD
              }
            },
            metadata: CD
          }, yI, MI), (0, ID.k)(null, null, PC, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularColor" in DD,
              get: DD => DD.specularColor,
              set: (DD, CD) => {
                DD.specularColor = CD
              }
            },
            metadata: CD
          }, tI, ZI), (0, ID.k)(null, null, HC, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "emissiveColor" in DD,
              get: DD => DD.emissiveColor,
              set: (DD, CD) => {
                DD.emissiveColor = CD
              }
            },
            metadata: CD
          }, oI, vI), (0, ID.k)(null, null, UC, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularPower" in DD,
              get: DD => DD.specularPower,
              set: (DD, CD) => {
                DD.specularPower = CD
              }
            },
            metadata: CD
          }, NI, gI), (0, ID.k)(null, null, xC, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useAlphaFromDiffuseTexture" in DD,
              get: DD => DD._useAlphaFromDiffuseTexture,
              set: (DD, CD) => {
                DD._useAlphaFromDiffuseTexture = CD
              }
            },
            metadata: CD
          }, XI, mI), (0, ID.k)(null, null, JC, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useEmissiveAsIllumination" in DD,
              get: DD => DD._useEmissiveAsIllumination,
              set: (DD, CD) => {
                DD._useEmissiveAsIllumination = CD
              }
            },
            metadata: CD
          }, PI, HI), (0, ID.k)(null, null, aC, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: DD => "_linkEmissiveWithDiffuse" in DD,
              get: DD => DD._linkEmissiveWithDiffuse,
              set: (DD, CD) => {
                DD._linkEmissiveWithDiffuse = CD
              }
            },
            metadata: CD
          }, qI, JI), (0, ID.k)(null, null, zC, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useSpecularOverAlpha" in DD,
              get: DD => DD._useSpecularOverAlpha,
              set: (DD, CD) => {
                DD._useSpecularOverAlpha = CD
              }
            },
            metadata: CD
          }, VI, zI), (0, ID.k)(null, null, lC, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useReflectionOverAlpha" in DD,
              get: DD => DD._useReflectionOverAlpha,
              set: (DD, CD) => {
                DD._useReflectionOverAlpha = CD
              }
            },
            metadata: CD
          }, LI, TI), (0, ID.k)(null, null, TC, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: DD => "_disableLighting" in DD,
              get: DD => DD._disableLighting,
              set: (DD, CD) => {
                DD._disableLighting = CD
              }
            },
            metadata: CD
          }, kI, dI), (0, ID.k)(null, null, RC, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useObjectSpaceNormalMap" in DD,
              get: DD => DD._useObjectSpaceNormalMap,
              set: (DD, CD) => {
                DD._useObjectSpaceNormalMap = CD
              }
            },
            metadata: CD
          }, sI, EI), (0, ID.k)(null, null, dC, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useParallax" in DD,
              get: DD => DD._useParallax,
              set: (DD, CD) => {
                DD._useParallax = CD
              }
            },
            metadata: CD
          }, hI, rI), (0, ID.k)(null, null, WC, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useParallaxOcclusion" in DD,
              get: DD => DD._useParallaxOcclusion,
              set: (DD, CD) => {
                DD._useParallaxOcclusion = CD
              }
            },
            metadata: CD
          }, Dp, Cp), (0, ID.k)(null, null, EC, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: DD => "parallaxScaleBias" in DD,
              get: DD => DD.parallaxScaleBias,
              set: (DD, CD) => {
                DD.parallaxScaleBias = CD
              }
            },
            metadata: CD
          }, pp, ip), (0, ID.k)(null, null, eC, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: DD => "_roughness" in DD,
              get: DD => DD._roughness,
              set: (DD, CD) => {
                DD._roughness = CD
              }
            },
            metadata: CD
          }, fp, bp), (0, ID.k)(null, null, hC, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: DD => "indexOfRefraction" in DD,
              get: DD => DD.indexOfRefraction,
              set: (DD, CD) => {
                DD.indexOfRefraction = CD
              }
            },
            metadata: CD
          }, Sp, Bp), (0, ID.k)(null, null, rC, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: DD => "invertRefractionY" in DD,
              get: DD => DD.invertRefractionY,
              set: (DD, CD) => {
                DD.invertRefractionY = CD
              }
            },
            metadata: CD
          }, yp, Mp), (0, ID.k)(null, null, AC, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: DD => "alphaCutOff" in DD,
              get: DD => DD.alphaCutOff,
              set: (DD, CD) => {
                DD.alphaCutOff = CD
              }
            },
            metadata: CD
          }, tp, Zp), (0, ID.k)(null, null, FC, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useLightmapAsShadowmap" in DD,
              get: DD => DD._useLightmapAsShadowmap,
              set: (DD, CD) => {
                DD._useLightmapAsShadowmap = CD
              }
            },
            metadata: CD
          }, op, vp), (0, ID.k)(null, null, Cc, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "_diffuseFresnelParameters" in DD,
              get: DD => DD._diffuseFresnelParameters,
              set: (DD, CD) => {
                DD._diffuseFresnelParameters = CD
              }
            },
            metadata: CD
          }, Xp, mp), (0, ID.k)(null, null, Ic, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "_opacityFresnelParameters" in DD,
              get: DD => DD._opacityFresnelParameters,
              set: (DD, CD) => {
                DD._opacityFresnelParameters = CD
              }
            },
            metadata: CD
          }, Pp, Hp), (0, ID.k)(null, null, ic, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "_reflectionFresnelParameters" in DD,
              get: DD => DD._reflectionFresnelParameters,
              set: (DD, CD) => {
                DD._reflectionFresnelParameters = CD
              }
            },
            metadata: CD
          }, qp, Jp), (0, ID.k)(null, null, bc, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "_refractionFresnelParameters" in DD,
              get: DD => DD._refractionFresnelParameters,
              set: (DD, CD) => {
                DD._refractionFresnelParameters = CD
              }
            },
            metadata: CD
          }, Vp, zp), (0, ID.k)(null, null, wc, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "_emissiveFresnelParameters" in DD,
              get: DD => DD._emissiveFresnelParameters,
              set: (DD, CD) => {
                DD._emissiveFresnelParameters = CD
              }
            },
            metadata: CD
          }, Lp, Tp), (0, ID.k)(null, null, Bc, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useReflectionFresnelFromSpecular" in DD,
              get: DD => DD._useReflectionFresnelFromSpecular,
              set: (DD, CD) => {
                DD._useReflectionFresnelFromSpecular = CD
              }
            },
            metadata: CD
          }, kp, dp), (0, ID.k)(null, null, Mc, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useGlossinessFromSpecularMapAlpha" in DD,
              get: DD => DD._useGlossinessFromSpecularMapAlpha,
              set: (DD, CD) => {
                DD._useGlossinessFromSpecularMapAlpha = CD
              }
            },
            metadata: CD
          }, sp, Ep), (0, ID.k)(null, null, Zc, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: DD => "_maxSimultaneousLights" in DD,
              get: DD => DD._maxSimultaneousLights,
              set: (DD, CD) => {
                DD._maxSimultaneousLights = CD
              }
            },
            metadata: CD
          }, rp, Ap), (0, ID.k)(null, null, vc, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: DD => "_invertNormalMapX" in DD,
              get: DD => DD._invertNormalMapX,
              set: (DD, CD) => {
                DD._invertNormalMapX = CD
              }
            },
            metadata: CD
          }, Ci, ci), (0, ID.k)(null, null, gc, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: DD => "_invertNormalMapY" in DD,
              get: DD => DD._invertNormalMapY,
              set: (DD, CD) => {
                DD._invertNormalMapY = CD
              }
            },
            metadata: CD
          }, fi, bi), (0, ID.k)(null, null, mc, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: DD => "_twoSidedLighting" in DD,
              get: DD => DD._twoSidedLighting,
              set: (DD, CD) => {
                DD._twoSidedLighting = CD
              }
            },
            metadata: CD
          }, Si, Bi), (0, ID.k)(null, null, Oc, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: DD => "_applyDecalMapAfterDetailMap" in DD,
              get: DD => DD._applyDecalMapAfterDetailMap,
              set: (DD, CD) => {
                DD._applyDecalMapAfterDetailMap = CD
              }
            },
            metadata: CD
          }, ti, Zi), CD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: CD
          })
        })(), DD.ForceGLSL = !1, DD._ShaderLoader = new nD.e((() => [Promise.all([cD.e(307), cD.e(306)]).then((() => cD(40981))), Promise.all([cD.e(312), cD.e(308), cD.e(321), cD.e(311)]).then((() => cD(41187)))]), (() => [Promise.all([cD.e(328), cD.e(323)]).then((() => cD(41330))), Promise.all([cD.e(329), cD.e(339), cD.e(325)]).then((() => cD(41536)))])), DD
      })(),
      jD = !1;

    function lD() {
      jD || (jD = !0, (0, BD.d)(), (0, xD.d)("BABYLON.StandardMaterial", zD), fD.e.DefaultMaterialFactory = DD => new zD("default material", DD))
    }
    Object.getOwnPropertyDescriptor(zD.prototype, "decalMap") || Object.defineProperty(zD.prototype, "decalMap", (0, qD.g)("StandardMaterial", "decalMap"))
  },
  39512: (DD, CD, cD) => {
    function ID(DD) {
      return class extends DD {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    cD.d(CD, {
      c: () => ID
    })
  },
  39503: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      constructor(DD, CD) {
        this._webGL = {
          load: DD,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: CD,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(DD) {
        const CD = 1 === DD ? this._webGPU : this._webGL;
        return CD.loaded ? void 0 : async () => {
          await this._loadAsync(CD)
        }
      }
      async _loadAsync(DD) {
        if (DD.loaded) return;
        let CD = DD.loadPromise;
        const cD = null === CD;
        cD && (CD = Promise.all(DD.load()), DD.loadPromise = CD);
        let ID = !1;
        try {
          await CD, ID = !0
        } finally {
          cD && this._completeLoad(DD, ID)
        }
      }
      _completeLoad(DD, CD) {
        DD.loaded = CD, DD.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);