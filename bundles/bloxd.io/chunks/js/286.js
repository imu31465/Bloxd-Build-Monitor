export const id = 286;
export const ids = [286];
export const modules = {
  41491: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => SM
    });
    var OM = iM(41109);

    function SM(MM) {
      return class extends MM {
        constructor() {
          super(...arguments);
          const MM = new.target;
          if (!MM[Symbol.metadata]) {
            const rM = Object.getPrototypeOf(MM)?.[Symbol.metadata];
            MM[Symbol.metadata] = rM ? Object.create(rM) : {}
          }
          const rM = (0, OM.b)(MM[Symbol.metadata]);
          rM._imageProcessingConfiguration || (rM._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(MM) {
          this._attachImageProcessingConfiguration(MM), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(MM) {
          MM !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !MM && this.Hk ? this._imageProcessingConfiguration = this.Hk().imageProcessingConfiguration : MM && (this._imageProcessingConfiguration = MM), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(MM) {
          this.imageProcessingConfiguration.colorCurvesEnabled = MM
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(MM) {
          this.imageProcessingConfiguration.colorGradingEnabled = MM
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(MM) {
          this._imageProcessingConfiguration.toneMappingEnabled = MM
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(MM) {
          this._imageProcessingConfiguration.exposure = MM
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(MM) {
          this._imageProcessingConfiguration.contrast = MM
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(MM) {
          this._imageProcessingConfiguration.colorGradingTexture = MM
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(MM) {
          this._imageProcessingConfiguration.colorCurves = MM
        }
      }
    }
  },
  41386: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      h: () => SM
    });
    var OM = iM(41393);

    function SM(MM) {
      return class extends MM {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class jM extends OM.c {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  41454: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => LM
    });
    var OM = iM(41099),
      SM = iM(41397),
      jM = iM(41105),
      aM = iM(41438),
      PM = iM(41393),
      nM = iM(41463),
      QM = iM(41426);
    class zM extends PM.c {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let LM = (() => {
      var MM, rM, iM, PM;
      let LM, mM, HM, hM, JM, dM, yM = nM.b,
        lM = [],
        EM = [],
        UM = [],
        GM = [],
        CM = [],
        eM = [],
        bM = [],
        wM = [],
        tM = [],
        gM = [],
        uM = [],
        RM = [];
      return MM = class extends yM {
        get texture() {
          return (0, OM.c)(this, rM, "f")
        }
        set texture(MM) {
          (0, OM.f)(this, rM, MM, "f")
        }
        get normalBlendMethod() {
          return (0, OM.c)(this, iM, "f")
        }
        set normalBlendMethod(MM) {
          (0, OM.f)(this, iM, MM, "f")
        }
        get isEnabled() {
          return (0, OM.c)(this, PM, "f")
        }
        set isEnabled(MM) {
          (0, OM.f)(this, PM, MM, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(MM) {
          let jM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(MM, "DetailMap", 140, new zM, jM), this._texture = null, rM.set(this, (0, OM.m)(this, lM, void 0)), this.diffuseBlendLevel = ((0, OM.m)(this, EM), (0, OM.m)(this, UM, 1)), this.roughnessBlendLevel = ((0, OM.m)(this, GM), (0, OM.m)(this, CM, 1)), this.bumpLevel = ((0, OM.m)(this, eM), (0, OM.m)(this, bM, 1)), this._normalBlendMethod = ((0, OM.m)(this, wM), SM.c.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), iM.set(this, (0, OM.m)(this, tM, void 0)), this._isEnabled = ((0, OM.m)(this, gM), !1), PM.set(this, (0, OM.m)(this, uM, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, OM.m)(this, RM), this._internalMarkAllSubMeshesAsTexturesDirty = MM._dirtyCallbacks[1]
        }
        isReadyForSubMesh(MM, rM, iM) {
          return !this._isEnabled || !(MM._areTexturesDirty && rM.texturesEnabled && iM.getCaps().standardDerivatives && this._texture && aM.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(MM, rM) {
          if (this._isEnabled) {
            MM.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const iM = rM.ph();
            MM._areTexturesDirty && (iM.getCaps().standardDerivatives && this._texture && aM.e.DetailTextureEnabled && this._isEnabled ? ((0, QM.W)(this._texture, MM, "DETAIL"), MM.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : MM.DETAIL = !1)
          } else MM.DETAIL = !1
        }
        bindForSubMesh(MM, rM) {
          if (!this._isEnabled) return;
          const iM = this._material.isFrozen;
          MM.useUbo && iM && MM.isSync || this._texture && aM.e.DetailTextureEnabled && (MM.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, QM.x)(this._texture, MM, "detail")), rM.texturesEnabled && this._texture && aM.e.DetailTextureEnabled && MM.setTexture("detailSampler", this._texture)
        }
        hasTexture(MM) {
          return this._texture === MM
        }
        getActiveTextures(MM) {
          this._texture && MM.push(this._texture)
        }
        getAnimatables(MM) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && MM.push(this._texture)
        }
        dispose(MM) {
          MM && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(MM) {
          MM.push("detailSampler")
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
      }, rM = new WeakMap, iM = new WeakMap, PM = new WeakMap, (() => {
        const rM = "function" === typeof Symbol && Symbol.metadata ? Object.create(yM[Symbol.metadata] ?? null) : void 0;
        LM = [(0, jM.B)("detailTexture"), (0, jM.g)("_markAllSubMeshesAsTexturesDirty")], mM = [(0, jM.L)()], HM = [(0, jM.L)()], hM = [(0, jM.L)()], JM = [(0, jM.L)(), (0, jM.g)("_markAllSubMeshesAsTexturesDirty")], dM = [(0, jM.L)(), (0, jM.g)("_markAllSubMeshesAsTexturesDirty")], (0, OM.i)(MM, null, LM, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: MM => "texture" in MM,
            get: MM => MM.texture,
            set: (MM, rM) => {
              MM.texture = rM
            }
          },
          metadata: rM
        }, lM, EM), (0, OM.i)(MM, null, JM, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: MM => "normalBlendMethod" in MM,
            get: MM => MM.normalBlendMethod,
            set: (MM, rM) => {
              MM.normalBlendMethod = rM
            }
          },
          metadata: rM
        }, tM, gM), (0, OM.i)(MM, null, dM, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: MM => "isEnabled" in MM,
            get: MM => MM.isEnabled,
            set: (MM, rM) => {
              MM.isEnabled = rM
            }
          },
          metadata: rM
        }, uM, RM), (0, OM.i)(null, null, mM, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: MM => "diffuseBlendLevel" in MM,
            get: MM => MM.diffuseBlendLevel,
            set: (MM, rM) => {
              MM.diffuseBlendLevel = rM
            }
          },
          metadata: rM
        }, UM, GM), (0, OM.i)(null, null, HM, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: MM => "roughnessBlendLevel" in MM,
            get: MM => MM.roughnessBlendLevel,
            set: (MM, rM) => {
              MM.roughnessBlendLevel = rM
            }
          },
          metadata: rM
        }, CM, eM), (0, OM.i)(null, null, hM, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: MM => "bumpLevel" in MM,
            get: MM => MM.bumpLevel,
            set: (MM, rM) => {
              MM.bumpLevel = rM
            }
          },
          metadata: rM
        }, bM, wM), rM && Object.defineProperty(MM, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rM
        })
      })(), MM
    })()
  },
  41393: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM
    });
    class OM {
      constructor(MM) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = MM, MM)
          for (const rM in MM) Object.prototype.hasOwnProperty.call(MM, rM) && this._setDefaultValue(rM)
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
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || MM, this._isDirty = !0
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
        for (const MM of Object.keys(this)) "_" !== MM[0] && this._keys.push(MM);
        if (this._externalProperties)
          for (const MM in this._externalProperties) - 1 === this._keys.indexOf(MM) && this._keys.push(MM)
      }
      isEqual(MM) {
        if (this._keys.length !== MM._keys.length) return !1;
        for (let rM = 0; rM < this._keys.length; rM++) {
          const iM = this._keys[rM];
          if (this[iM] !== MM[iM]) return !1
        }
        return !0
      }
      cloneTo(MM) {
        this._keys.length !== MM._keys.length && (MM._keys = this._keys.slice(0));
        for (let rM = 0; rM < this._keys.length; rM++) {
          const iM = this._keys[rM];
          MM[iM] = this[iM]
        }
      }
      reset() {
        for (const MM of this._keys) this._setDefaultValue(MM)
      }
      _setDefaultValue(MM) {
        const rM = this._externalProperties?.[MM]?.type ?? typeof this[MM],
          iM = this._externalProperties?.[MM]?.default;
        switch (rM) {
          case "number":
            this[MM] = iM ?? 0;
            break;
          case "string":
            this[MM] = iM ?? "";
            break;
          default:
            this[MM] = iM ?? !1
        }
      }
      toString() {
        let MM = "";
        for (let rM = 0; rM < this._keys.length; rM++) {
          const iM = this._keys[rM],
            OM = this[iM];
          switch (typeof OM) {
            case "number":
            case "string":
              MM += "#define " + iM + " " + OM + "\n";
              break;
            default:
              OM && (MM += "#define " + iM + "\n")
          }
        }
        return MM
      }
    }
  },
  41474: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => PM,
      d: () => aM,
      h: () => jM
    });
    var OM, SM = iM(38040);

    function jM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const OM = rM(MM);
      if (!Number.isInteger(OM) || OM < 0 || OM > iM) throw new Error(`Invalid geometry object ID ${OM} for mesh "${MM.name}". Object IDs must be integers between 0 and 0x${iM.toString(16).toUpperCase()}.`);
      return OM
    }

    function aM(MM, rM) {
      const iM = rM(MM);
      if (!Number.isInteger(iM) || iM < 0 || iM > 255 || 0 !== iM && 0 === (63 & iM)) throw new Error(`Invalid geometry mesh-blending tag ${iM} for mesh "${MM.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return iM
    }! function(MM) {
      MM[MM.Zero = 0] = "Zero", MM[MM.One = 1] = "One", MM[MM.MaxViewZ = 2] = "MaxViewZ", MM[MM.NoClear = 3] = "NoClear"
    }(OM || (OM = {}));
    class PM {
      static CreateConfiguration(MM) {
        return PM._Configurations[MM] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: SM.d.Zero(),
          currentViewProjection: SM.d.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, PM._Configurations[MM]
      }
      static DeleteConfiguration(MM) {
        delete PM._Configurations[MM]
      }
      static GetConfiguration(MM) {
        return PM._Configurations[MM]
      }
      static _PrepareConfiguration(MM, rM, iM) {
        const OM = PM._Configurations[MM];
        OM._attachments = rM, OM._colorAttachments = iM, OM._mrtCount = rM.length;
        let SM = "#define PREPASS\n";
        for (const jM of PM.GeometryTextureDescriptions) {
          const MM = OM.defines[jM.defineIndex];
          void 0 !== MM && (SM += `#define ${jM.define}\n#define ${jM.defineIndex} ${MM}\n`)
        }
        OM.objectIdIsRedFormat && (SM += "#define PREPASS_OBJECT_ID_R8\n"), OM._defines = SM + `#define SCENE_MRT_COUNT ${rM.length}\n`
      }
      static _PrepareStringDefines(MM, rM) {
        const iM = PM._Configurations[MM];
        return !!iM?._defines && (rM.push(iM._defines), !0)
      }
      static _BindAttachmentsForEffect(MM, rM) {
        const iM = PM._Configurations[MM.currentRenderPassId];
        return !iM?._attachments || (MM.bindAttachments(rM._multiTarget ? iM._attachments : iM._colorAttachments), rM._multiTarget || void 0 !== iM.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(MM) {
        const rM = PM._Configurations[MM.currentRenderPassId];
        rM?._colorAttachments && MM.bindAttachments(rM._colorAttachments)
      }
      static _BindColorAttachments(MM) {
        const rM = PM._Configurations[MM.currentRenderPassId];
        return !rM?._colorAttachments || (MM.bindAttachments(rM._colorAttachments), void 0 !== rM.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(MM) {
        const rM = PM._Configurations[MM.currentRenderPassId];
        return !rM?._colorAttachments || void 0 !== rM.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(MM, rM) {
        const iM = PM._Configurations[MM.currentRenderPassId];
        if (!iM) return;
        const OM = MM.getAlphaMode(),
          SM = void 0 === iM.defines.PREPASS_COLOR_INDEX || 2 === OM || 1 === OM || 17 === OM;
        rM.setFloat("geometryZeroAlphaDiscard", SM ? 1 : 0)
      }
      static AddUniformsAndSamplers(MM, rM) {
        MM.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(MM, rM) {
        for (const iM of rM)
          if (iM.iG)
            for (const rM of iM.iG) rM._removeDrawWrapper(MM)
      }
      static PrepareDefines(MM, rM, iM) {
        if (!iM._arePrePassDirty) return;
        const OM = PM._Configurations[MM];
        if (!OM) return;
        iM.PREPASS = !0;
        let SM = 0;
        for (let jM = 0; jM < PM.GeometryTextureDescriptions.length; jM++) {
          const MM = PM.GeometryTextureDescriptions[jM],
            rM = MM.define,
            aM = MM.defineIndex,
            nM = OM.defines[aM];
          void 0 !== nM ? (iM[rM] = !0, iM[aM] = nM, SM++) : (iM[rM] = !1, delete iM[aM])
        }
        iM.PREPASS_OBJECT_ID_R8 = OM.objectIdIsRedFormat, iM.SCENE_MRT_COUNT = OM._mrtCount ?? SM, iM.BONES_VELOCITY_ENABLED = rM.useBones && rM.computeBonesUsingShaders && rM.skeleton && !rM.skeleton.isUsingTextureForMatrices && -1 === OM.excludedSkinnedMesh.indexOf(rM)
      }
      static Bind(MM, rM, iM, OM, SM) {
        const nM = PM._Configurations[MM];
        if (!nM) return;
        const QM = iM.Hk(),
          zM = QM.ph();
        if (nM.reverseCulling && zM.setStateCullFaceType(QM._mirroredCameraPosition ? SM.cullBackFaces : !SM.cullBackFaces), void 0 !== nM.defines.PREPASS_OBJECT_ID_INDEX) {
          const MM = nM.objectIdIsRedFormat ? 255 : 16777215;
          let OM = iM.uniqueId;
          if (nM.objectIdProvider) OM = jM(iM, nM.objectIdProvider, MM);
          else if (OM > MM) throw new Error(`Invalid geometry object ID ${OM} for mesh "${iM.name}". Object IDs must be integers between 0 and 0x${MM.toString(16).toUpperCase()}.`);
          rM.setFloat("objectId", OM)
        }
        if (void 0 !== nM.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const MM = nM.meshBlendTagProvider ? aM(iM, nM.meshBlendTagProvider) : iM.meshBlendingTag;
          rM.setInt("meshBlendTag", MM)
        }
        if (void 0 !== nM.defines.PREPASS_VELOCITY_INDEX || void 0 !== nM.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const MM = nM._currentWorldMatrices ?? (nM._currentWorldMatrices = {}),
            SM = nM._worldMatrixFrameIds ?? (nM._worldMatrixFrameIds = {});
          if (MM[iM.uniqueId] || (MM[iM.uniqueId] = OM.clone(), nM.previousWorldMatrices[iM.uniqueId] = OM.clone()), SM[iM.uniqueId] !== zM.frameId && (nM.previousWorldMatrices[iM.uniqueId].jR(MM[iM.uniqueId]), SM[iM.uniqueId] = zM.frameId), MM[iM.uniqueId].jR(OM), -1 === nM.lastUpdateFrameId ? (nM.lastUpdateFrameId = zM.frameId, nM.previousViewProjection.jR(QM.getTransformMatrix()), nM.currentViewProjection.jR(QM.getTransformMatrix())) : nM.currentViewProjection.updateFlag !== QM.getTransformMatrix().updateFlag ? (nM.lastUpdateFrameId = zM.frameId, nM.previousViewProjection.jR(nM.currentViewProjection), nM.currentViewProjection.jR(QM.getTransformMatrix())) : nM.lastUpdateFrameId !== zM.frameId && (nM.lastUpdateFrameId = zM.frameId, nM.previousViewProjection.jR(nM.currentViewProjection)), rM.setMatrix("previousWorld", nM.previousWorldMatrices[iM.uniqueId]), rM.setMatrix("previousViewProjection", nM.previousViewProjection), iM.useBones && iM.computeBonesUsingShaders && iM.skeleton) {
            const MM = iM.skeleton;
            if (!MM.isUsingTextureForMatrices || -1 === rM.getUniformIndex("boneTextureInfo")) {
              const OM = MM.getTransformMatrices(iM);
              OM && (nM.previousBones[iM.uniqueId] || (nM.previousBones[iM.uniqueId] = OM.slice()), rM.setMatrices("mPreviousBones", nM.previousBones[iM.uniqueId]), nM.previousBones[iM.uniqueId].set(OM))
            }
          }
        }
      }
    }
    PM.GeometryTextureDescriptions = [{
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
    }], PM._Configurations = {}
  },
  41463: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => mM,
      f: () => hM
    });
    var OM = iM(41099),
      SM = iM(41105),
      jM = iM(40998),
      aM = iM(40964);
    const PM = new RegExp("^([gimus]+)!");
    class nM {
      constructor(MM) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = MM, this._scene = MM.Hk(), this._engine = this._scene.ph()
      }
      _addPlugin(MM) {
        for (let OM = 0; OM < this._plugins.length; ++OM)
          if (this._plugins[OM].name === MM.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !MM.isCompatible(this._material.shaderLanguage)) throw `The plugin "${MM.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const rM = MM.getClassName();
        nM._MaterialPluginClassToMainDefine[rM] || (nM._MaterialPluginClassToMainDefine[rM] = "MATERIALPLUGIN_" + ++nM._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (MM, rM) => this._handlePluginEvent(MM, rM), this._plugins.push(MM), this._plugins.sort(((MM, rM) => MM.priority - rM.priority)), this._codeInjectionPoints = {};
        const iM = {};
        iM[nM._MaterialPluginClassToMainDefine[rM]] = {
          type: "boolean",
          default: !0
        };
        for (const OM of this._plugins) OM.collectDefines(iM), this._collectPointNames("vertex", OM.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", OM.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = iM, !0
      }
      _activatePlugin(MM) {
        -1 === this._activePlugins.indexOf(MM) && (this._activePlugins.push(MM), this._activePlugins.sort(((MM, rM) => MM.priority - rM.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), MM.registerForExtraEvents && (this._activePluginsForExtraEvents.push(MM), this._activePluginsForExtraEvents.sort(((MM, rM) => MM.priority - rM.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(MM) {
        for (let rM = 0; rM < this._plugins.length; ++rM)
          if (this._plugins[rM].name === MM) return this._plugins[rM];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(MM) {
        let rM = !0;
        for (const iM of this._activePlugins) rM = rM && iM.isReadyForSubMesh(MM.defines, this._scene, this._engine, MM.subMesh);
        MM.isReadyForSubMesh = rM
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(MM) {
        for (const rM of this._activePlugins) rM.prepareDefinesBeforeAttributes(MM.defines, this._scene, MM.mesh)
      }
      _handlePluginEventPrepareDefines(MM) {
        for (const rM of this._activePlugins) rM.prepareDefines(MM.defines, this._scene, MM.mesh)
      }
      _handlePluginEventHardBindForSubMesh(MM) {
        for (const rM of this._activePluginsForExtraEvents) rM.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, MM.subMesh)
      }
      _handlePluginEventBindForSubMesh(MM) {
        for (const rM of this._activePlugins) rM.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, MM.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(MM) {
        let rM = !1;
        for (const iM of this._activePluginsForExtraEvents)
          if (rM = iM.hasRenderTargetTextures(), rM) break;
        MM.hasRenderTargetTextures = rM
      }
      _handlePluginEventFillRenderTargetTextures(MM) {
        for (const rM of this._activePluginsForExtraEvents) rM.fillRenderTargetTextures(MM.renderTargets)
      }
      _handlePluginEvent(MM, rM) {
        switch (MM) {
          case 512: {
            const MM = rM;
            for (const rM of this._activePlugins) rM.getActiveTextures(MM.activeTextures);
            break
          }
          case 256: {
            const MM = rM;
            for (const rM of this._activePlugins) rM.getAnimatables(MM.animatables);
            break
          }
          case 1024: {
            const MM = rM;
            let iM = !1;
            for (const rM of this._activePlugins)
              if (iM = rM.hasTexture(MM.texture), iM) break;
            MM.hasTexture = iM;
            break
          }
          case 2: {
            const MM = rM;
            for (const rM of this._plugins) rM.dispose(MM.forceDisposeTextures);
            break
          }
          case 4:
            rM.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const MM = rM;
            for (const rM of this._activePlugins) MM.fallbackRank = rM.addFallbacks(MM.defines, MM.fallbacks, MM.fallbackRank), rM.getAttributes(MM.attributes, this._scene, MM.mesh);
            this._uniformList.length > 0 && MM.uniforms.push(...this._uniformList), this._samplerList.length > 0 && MM.samplers.push(...this._samplerList), this._uboList.length > 0 && MM.uniformBuffersNames.push(...this._uboList), MM.customCode = this._injectCustomCode(MM, MM.customCode);
            break
          }
          case 8: {
            const MM = rM;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const iM = 1 === this._material.shaderLanguage;
            for (const rM of this._plugins) {
              const OM = rM.getUniforms(this._material.shaderLanguage);
              if (OM) {
                if (OM.ubo)
                  for (const rM of OM.ubo) {
                    if (rM.size && rM.type) {
                      const OM = rM.arraySize ?? 0;
                      if (MM.ubo.addUniform(rM.name, rM.size, OM), iM) {
                        let MM;
                        switch (rM.type) {
                          case "mat4":
                            MM = "mat4x4f";
                            break;
                          case "float":
                            MM = "f32";
                            break;
                          default:
                            MM = `${rM.type}f`
                        }
                        this._uboDeclaration += OM > 0 ? `uniform ${rM.name}: array<${MM}, ${OM}>;\n` : `uniform ${rM.name}: ${MM};\n`
                      } else this._uboDeclaration += `${rM.type} ${rM.name}${OM>0?`[${OM}]`:""};\n`
                    }
                    this._uniformList.push(rM.name)
                  }
                OM.vertex && (this._vertexDeclaration += OM.vertex + "\n"), OM.fragment && (this._fragmentDeclaration += OM.fragment + "\n"), OM.externalUniforms && this._uniformList.push(...OM.externalUniforms)
              }
              rM.getSamplers(this._samplerList), rM.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(MM, rM) {
        if (rM)
          for (const iM in rM) this._codeInjectionPoints[MM] || (this._codeInjectionPoints[MM] = {}), this._codeInjectionPoints[MM][iM] = !0
      }
      _injectCustomCode(MM, rM) {
        return (iM, OM) => {
          rM && (OM = rM(iM, OM)), this._uboDeclaration && (OM = OM.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (OM = OM.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (OM = OM.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const SM = this._codeInjectionPoints?.[iM];
          if (!SM) return OM;
          let nM = null;
          for (let rM in SM) {
            let SM = "";
            for (const OM of this._activePlugins) {
              const PM = this._material.shaderLanguage;
              let QM = OM.getCustomCode(iM, PM)?.[rM];
              QM && (OM.resolveIncludes && (null === nM && (nM = {
                defines: [],
                indexParameters: MM.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: aM.e.GetShadersRepository(PM),
                includesShadersStore: aM.e.GetIncludesShadersStore(PM),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                LOM: this._engine.LOM,
                processCodeAfterIncludes: void 0
              }), nM.isFragment = "fragment" === iM, (0, jM.e)(QM, nM, (MM => QM = MM))), SM += QM + "\n")
            }
            if (SM.length > 0)
              if ("!" === rM.charAt(0)) {
                rM = rM.substring(1);
                let MM = "g";
                if ("!" === rM.charAt(0)) MM = "", rM = rM.substring(1);
                else {
                  const iM = PM.exec(rM);
                  iM && iM.length >= 2 && (MM = iM[1], rM = rM.substring(MM.length + 1))
                }
                MM.indexOf("g") < 0 && (MM += "g");
                const iM = new RegExp(rM, MM);
                let jM = iM.exec(OM);
                for (; null !== jM;) {
                  const {
                    index: MM
                  } = jM, rM = QM(SM, jM);
                  OM = OM.substring(0, MM) + rM + OM.substring(MM + jM[0].length), iM.lastIndex = MM + rM.length, jM = iM.exec(OM)
                }
              } else {
                const MM = "#define " + rM;
                OM = OM.replace(MM, "\n" + SM + "\n" + MM)
              }
          }
          return OM
        }
      }
    }
    nM._MaterialPluginClassToMainDefine = {}, nM._MaterialPluginCounter = 0;

    function QM(MM, rM) {
      return MM.replace(/\$(\d+)/g, ((MM, iM) => {
        const OM = Number(iM);
        return OM < rM.length ? rM[OM] : ""
      }))
    }
    var zM = iM(41121),
      LM = iM(38085);
    let mM = (() => {
        var MM;
        let rM, iM, jM, aM, PM = [],
          QM = [],
          LM = [],
          mM = [],
          HM = [],
          hM = [],
          JM = [],
          dM = [];
        return MM = class {
          isCompatible(MM) {
            return 0 === MM
          }
          _enable(MM) {
            MM && this._pluginManager._activatePlugin(this)
          }
          constructor(MM, rM, iM, SM) {
            let jM = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              aM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              zM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, OM.m)(this, PM, void 0), this.priority = ((0, OM.m)(this, QM), (0, OM.m)(this, LM, 500)), this.resolveIncludes = ((0, OM.m)(this, mM), (0, OM.m)(this, HM, !1)), this.registerForExtraEvents = ((0, OM.m)(this, hM), (0, OM.m)(this, JM, !1)), this.doNotSerialize = ((0, OM.m)(this, dM), !1), this._material = MM, this.name = rM, this.priority = iM, this.resolveIncludes = zM, MM.pluginManager || (MM.pluginManager = new nM(MM), MM.Rk.add((() => {
              MM.pluginManager = void 0
            }))), this._pluginDefineNames = SM, this._pluginManager = MM.pluginManager, jM && this._pluginManager._addPlugin(this), aM && this._enable(!0), this.markAllDefinesAsDirty = MM._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(MM, rM, iM, OM) {
            return !0
          }
          hardBindForSubMesh(MM, rM, iM, OM) {}
          bindForSubMesh(MM, rM, iM, OM) {}
          dispose(MM) {}
          getCustomCode(MM) {
            return null
          }
          collectDefines(MM) {
            if (this._pluginDefineNames)
              for (const rM of Object.keys(this._pluginDefineNames)) {
                if ("_" === rM[0]) continue;
                const iM = typeof this._pluginDefineNames[rM];
                MM[rM] = {
                  type: "number" === iM ? "number" : "string" === iM ? "string" : "boolean" === iM ? "boolean" : "object",
                  default: this._pluginDefineNames[rM]
                }
              }
          }
          prepareDefinesBeforeAttributes(MM, rM, iM) {}
          prepareDefines(MM, rM, iM) {}
          hasTexture(MM) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(MM) {}
          getActiveTextures(MM) {}
          getAnimatables(MM) {}
          addFallbacks(MM, rM, iM) {
            return iM
          }
          getSamplers(MM) {}
          getAttributes(MM, rM, iM) {}
          getUniformBuffersNames(MM) {}
          getUniforms() {
            return {}
          }
          copyTo(MM) {
            zM.b.Clone((() => MM), this)
          }
          serialize() {
            return zM.b.Serialize(this)
          }
          parse(MM, rM, iM) {
            zM.b.Parse((() => this), MM, rM, iM)
          }
        }, (() => {
          const nM = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          rM = [(0, SM.L)()], iM = [(0, SM.L)()], jM = [(0, SM.L)()], aM = [(0, SM.L)()], (0, OM.i)(null, null, rM, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: MM => "name" in MM,
              get: MM => MM.name,
              set: (MM, rM) => {
                MM.name = rM
              }
            },
            metadata: nM
          }, PM, QM), (0, OM.i)(null, null, iM, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: MM => "priority" in MM,
              get: MM => MM.priority,
              set: (MM, rM) => {
                MM.priority = rM
              }
            },
            metadata: nM
          }, LM, mM), (0, OM.i)(null, null, jM, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: MM => "resolveIncludes" in MM,
              get: MM => MM.resolveIncludes,
              set: (MM, rM) => {
                MM.resolveIncludes = rM
              }
            },
            metadata: nM
          }, HM, hM), (0, OM.i)(null, null, aM, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: MM => "registerForExtraEvents" in MM,
              get: MM => MM.registerForExtraEvents,
              set: (MM, rM) => {
                MM.registerForExtraEvents = rM
              }
            },
            metadata: nM
          }, JM, dM), nM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: nM
          })
        })(), MM
      })(),
      HM = !1;

    function hM() {
      HM || (HM = !0, (0, LM.e)("BABYLON.MaterialPluginBase", mM))
    }
  },
  41378: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(MM) {
        MM.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(MM) {}
      bindForSubMesh(MM, rM, iM, OM, SM) {
        if (rM.prePassRenderer && rM.prePassRenderer.enabled && rM.prePassRenderer.currentRTisSceneRT && (-1 !== rM.prePassRenderer.getIndex(2) || -1 !== rM.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[iM.uniqueId] || (this.previousWorldMatrices[iM.uniqueId] = OM.clone()), this.previousViewProjection || (this.previousViewProjection = rM.getTransformMatrix().clone(), this.currentViewProjection = rM.getTransformMatrix().clone());
          const SM = rM.ph();
          this.currentViewProjection.updateFlag !== rM.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = SM.frameId, this.previousViewProjection.jR(this.currentViewProjection), this.currentViewProjection.jR(rM.getTransformMatrix())) : this._lastUpdateFrameId !== SM.frameId && (this._lastUpdateFrameId = SM.frameId, this.previousViewProjection.jR(this.currentViewProjection)), MM.setMatrix("previousWorld", this.previousWorldMatrices[iM.uniqueId]), MM.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[iM.uniqueId] = OM.clone()
        }
      }
    }
  },
  41483: (MM, rM, iM) => {
    function OM(MM) {
      return class extends MM {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    iM.d(rM, {
      d: () => OM
    })
  },
  41374: (MM, rM, iM) => {
    iM.d(rM, {
      StandardMaterial: () => OM.g
    });
    var OM = iM(41376);
    (0, OM.d)()
  },
  41376: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => ZM,
      g: () => DM
    });
    var OM = iM(41099),
      SM = iM(41105),
      jM = iM(41213),
      aM = iM(41196),
      PM = iM(38173),
      nM = iM(41250),
      QM = iM(41378),
      zM = iM(41386),
      LM = iM(41220),
      mM = iM(41397),
      HM = iM(41393),
      hM = iM(41442),
      JM = iM(41438),
      dM = iM(41447),
      yM = iM(41454),
      lM = iM(41433),
      EM = iM(41469),
      UM = iM(41426),
      GM = iM(41121),
      CM = iM(41472),
      eM = iM(41474),
      bM = iM(41477),
      wM = iM(41483),
      tM = iM(41491),
      gM = iM(38085),
      uM = iM(40990);
    const RM = {
      effect: null,
      subMesh: null
    };
    class pM extends((0, wM.d)((0, bM.e)(HM.c))) {}
    class WM extends((0, zM.h)(pM)) {
      constructor(MM) {
        super(MM), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class sM extends((0, tM.e)(hM.c)) {}
    let DM = (() => {
        var MM, rM, zM, HM, bM, wM, tM, gM, uM, pM, DM, kM, ZM, oM, fM, YM, NM, AM, xM, vM, FM, BM, XM, IM, KM, qM, TM, VM, cM, Mr, rr, ir, Or;
        let Sr, jr, ar, Pr, nr, Qr, zr, Lr, mr, Hr, hr, Jr, dr, yr, lr, Er, Ur, Gr, Cr, er, br, wr, tr, gr, ur, Rr, pr, Wr, sr, Dr, kr, Zr, or, fr, Yr, Nr, Ar, xr, vr, Fr, Br, Xr, Ir, Kr, qr, Tr, Vr, cr, Mi, ri, ii, Oi, Si, ji, ai, Pi, ni, Qi, zi, Li, mi, Hi, Ji, di, yi, li, Ei, Ui, Gi, Ci, ei, bi, wi, ti = sM,
          gi = [],
          ui = [],
          Ri = [],
          Wi = [],
          si = [],
          Di = [],
          ki = [],
          Zi = [],
          oi = [],
          fi = [],
          Yi = [],
          Ni = [],
          Ai = [],
          xi = [],
          vi = [],
          Fi = [],
          Bi = [],
          Xi = [],
          Ii = [],
          Ki = [],
          qi = [],
          Ti = [],
          Vi = [],
          ci = [],
          MO = [],
          rO = [],
          iO = [],
          OO = [],
          SO = [],
          jO = [],
          aO = [],
          PO = [],
          nO = [],
          QO = [],
          zO = [],
          LO = [],
          mO = [],
          HO = [],
          hO = [],
          JO = [],
          dO = [],
          yO = [],
          lO = [],
          EO = [],
          UO = [],
          GO = [],
          CO = [],
          eO = [],
          bO = [],
          wO = [],
          tO = [],
          gO = [],
          uO = [],
          RO = [],
          pO = [],
          WO = [],
          sO = [],
          DO = [],
          kO = [],
          ZO = [],
          oO = [],
          fO = [],
          YO = [],
          NO = [],
          AO = [],
          xO = [],
          vO = [],
          FO = [],
          BO = [],
          XO = [],
          IO = [],
          KO = [],
          qO = [],
          TO = [],
          VO = [],
          cO = [],
          MS = [],
          rS = [],
          iS = [],
          OS = [],
          SS = [],
          jS = [],
          aS = [],
          PS = [],
          nS = [],
          QS = [],
          zS = [],
          LS = [],
          mS = [],
          HS = [],
          hS = [],
          JS = [],
          dS = [],
          yS = [],
          lS = [],
          ES = [],
          US = [],
          GS = [],
          CS = [],
          eS = [],
          bS = [],
          wS = [],
          tS = [],
          gS = [],
          uS = [],
          RS = [],
          pS = [],
          WS = [],
          sS = [],
          DS = [],
          kS = [],
          ZS = [],
          oS = [],
          fS = [],
          YS = [],
          NS = [],
          AS = [],
          xS = [],
          vS = [],
          FS = [],
          BS = [],
          XS = [],
          IS = [],
          KS = [],
          qS = [],
          TS = [],
          VS = [],
          cS = [],
          Mj = [],
          rj = [],
          ij = [],
          Oj = [],
          Sj = [],
          jj = [],
          aj = [],
          Pj = [],
          nj = [],
          Qj = [],
          zj = [],
          Lj = [],
          mj = [],
          Hj = [],
          hj = [],
          Jj = [],
          dj = [],
          yj = [];
        return MM = class extends ti {
          get diffuseTexture() {
            return (0, OM.c)(this, rM, "f")
          }
          set diffuseTexture(MM) {
            (0, OM.f)(this, rM, MM, "f")
          }
          get ambientTexture() {
            return (0, OM.c)(this, zM, "f")
          }
          set ambientTexture(MM) {
            (0, OM.f)(this, zM, MM, "f")
          }
          get opacityTexture() {
            return (0, OM.c)(this, HM, "f")
          }
          set opacityTexture(MM) {
            (0, OM.f)(this, HM, MM, "f")
          }
          get reflectionTexture() {
            return (0, OM.c)(this, bM, "f")
          }
          set reflectionTexture(MM) {
            (0, OM.f)(this, bM, MM, "f")
          }
          get emissiveTexture() {
            return (0, OM.c)(this, wM, "f")
          }
          set emissiveTexture(MM) {
            (0, OM.f)(this, wM, MM, "f")
          }
          get specularTexture() {
            return (0, OM.c)(this, tM, "f")
          }
          set specularTexture(MM) {
            (0, OM.f)(this, tM, MM, "f")
          }
          get bumpTexture() {
            return (0, OM.c)(this, gM, "f")
          }
          set bumpTexture(MM) {
            (0, OM.f)(this, gM, MM, "f")
          }
          get lightmapTexture() {
            return (0, OM.c)(this, uM, "f")
          }
          set lightmapTexture(MM) {
            (0, OM.f)(this, uM, MM, "f")
          }
          get refractionTexture() {
            return (0, OM.c)(this, pM, "f")
          }
          set refractionTexture(MM) {
            (0, OM.f)(this, pM, MM, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, OM.c)(this, DM, "f")
          }
          set useAlphaFromDiffuseTexture(MM) {
            (0, OM.f)(this, DM, MM, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, OM.c)(this, kM, "f")
          }
          set useEmissiveAsIllumination(MM) {
            (0, OM.f)(this, kM, MM, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, OM.c)(this, ZM, "f")
          }
          set linkEmissiveWithDiffuse(MM) {
            (0, OM.f)(this, ZM, MM, "f")
          }
          get useSpecularOverAlpha() {
            return (0, OM.c)(this, oM, "f")
          }
          set useSpecularOverAlpha(MM) {
            (0, OM.f)(this, oM, MM, "f")
          }
          get useReflectionOverAlpha() {
            return (0, OM.c)(this, fM, "f")
          }
          set useReflectionOverAlpha(MM) {
            (0, OM.f)(this, fM, MM, "f")
          }
          get disableLighting() {
            return (0, OM.c)(this, YM, "f")
          }
          set disableLighting(MM) {
            (0, OM.f)(this, YM, MM, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, OM.c)(this, NM, "f")
          }
          set useObjectSpaceNormalMap(MM) {
            (0, OM.f)(this, NM, MM, "f")
          }
          get useParallax() {
            return (0, OM.c)(this, AM, "f")
          }
          set useParallax(MM) {
            (0, OM.f)(this, AM, MM, "f")
          }
          get useParallaxOcclusion() {
            return (0, OM.c)(this, xM, "f")
          }
          set useParallaxOcclusion(MM) {
            (0, OM.f)(this, xM, MM, "f")
          }
          get roughness() {
            return (0, OM.c)(this, vM, "f")
          }
          set roughness(MM) {
            (0, OM.f)(this, vM, MM, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, OM.c)(this, FM, "f")
          }
          set useLightmapAsShadowmap(MM) {
            (0, OM.f)(this, FM, MM, "f")
          }
          get diffuseFresnelParameters() {
            return (0, OM.c)(this, BM, "f")
          }
          set diffuseFresnelParameters(MM) {
            (0, OM.f)(this, BM, MM, "f")
          }
          get opacityFresnelParameters() {
            return (0, OM.c)(this, XM, "f")
          }
          set opacityFresnelParameters(MM) {
            (0, OM.f)(this, XM, MM, "f")
          }
          get reflectionFresnelParameters() {
            return (0, OM.c)(this, IM, "f")
          }
          set reflectionFresnelParameters(MM) {
            (0, OM.f)(this, IM, MM, "f")
          }
          get refractionFresnelParameters() {
            return (0, OM.c)(this, KM, "f")
          }
          set refractionFresnelParameters(MM) {
            (0, OM.f)(this, KM, MM, "f")
          }
          get emissiveFresnelParameters() {
            return (0, OM.c)(this, qM, "f")
          }
          set emissiveFresnelParameters(MM) {
            (0, OM.f)(this, qM, MM, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, OM.c)(this, TM, "f")
          }
          set useReflectionFresnelFromSpecular(MM) {
            (0, OM.f)(this, TM, MM, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, OM.c)(this, VM, "f")
          }
          set useGlossinessFromSpecularMapAlpha(MM) {
            (0, OM.f)(this, VM, MM, "f")
          }
          get maxSimultaneousLights() {
            return (0, OM.c)(this, cM, "f")
          }
          set maxSimultaneousLights(MM) {
            (0, OM.f)(this, cM, MM, "f")
          }
          get invertNormalMapX() {
            return (0, OM.c)(this, Mr, "f")
          }
          set invertNormalMapX(MM) {
            (0, OM.f)(this, Mr, MM, "f")
          }
          get invertNormalMapY() {
            return (0, OM.c)(this, rr, "f")
          }
          set invertNormalMapY(MM) {
            (0, OM.f)(this, rr, MM, "f")
          }
          get twoSidedLighting() {
            return (0, OM.c)(this, ir, "f")
          }
          set twoSidedLighting(MM) {
            (0, OM.f)(this, ir, MM, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, OM.c)(this, Or, "f")
          }
          set applyDecalMapAfterDetailMap(MM) {
            (0, OM.f)(this, Or, MM, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(iM, SM) {
            super(iM, SM, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || MM.ForceGLSL), this._diffuseTexture = (0, OM.m)(this, gi, null), rM.set(this, ((0, OM.m)(this, ui), (0, OM.m)(this, Ri, void 0))), this._ambientTexture = ((0, OM.m)(this, Wi), (0, OM.m)(this, si, null)), zM.set(this, ((0, OM.m)(this, Di), (0, OM.m)(this, ki, void 0))), this._opacityTexture = ((0, OM.m)(this, Zi), (0, OM.m)(this, oi, null)), HM.set(this, ((0, OM.m)(this, fi), (0, OM.m)(this, Yi, void 0))), this._reflectionTexture = ((0, OM.m)(this, Ni), (0, OM.m)(this, Ai, null)), bM.set(this, ((0, OM.m)(this, xi), (0, OM.m)(this, vi, void 0))), this._emissiveTexture = ((0, OM.m)(this, Fi), (0, OM.m)(this, Bi, null)), wM.set(this, ((0, OM.m)(this, Xi), (0, OM.m)(this, Ii, void 0))), this._specularTexture = ((0, OM.m)(this, Ki), (0, OM.m)(this, qi, null)), tM.set(this, ((0, OM.m)(this, Ti), (0, OM.m)(this, Vi, void 0))), this._bumpTexture = ((0, OM.m)(this, ci), (0, OM.m)(this, MO, null)), gM.set(this, ((0, OM.m)(this, rO), (0, OM.m)(this, iO, void 0))), this._lightmapTexture = ((0, OM.m)(this, OO), (0, OM.m)(this, SO, null)), uM.set(this, ((0, OM.m)(this, jO), (0, OM.m)(this, aO, void 0))), this._refractionTexture = ((0, OM.m)(this, PO), (0, OM.m)(this, nO, null)), pM.set(this, ((0, OM.m)(this, QO), (0, OM.m)(this, zO, void 0))), this.ambientColor = ((0, OM.m)(this, LO), (0, OM.m)(this, mO, new PM.d(0, 0, 0))), this.diffuseColor = ((0, OM.m)(this, HO), (0, OM.m)(this, hO, new PM.d(1, 1, 1))), this.specularColor = ((0, OM.m)(this, JO), (0, OM.m)(this, dO, new PM.d(1, 1, 1))), this.emissiveColor = ((0, OM.m)(this, yO), (0, OM.m)(this, lO, new PM.d(0, 0, 0))), this.specularPower = ((0, OM.m)(this, EO), (0, OM.m)(this, UO, 64)), this._useAlphaFromDiffuseTexture = ((0, OM.m)(this, GO), (0, OM.m)(this, CO, !1)), DM.set(this, ((0, OM.m)(this, eO), (0, OM.m)(this, bO, void 0))), this._useEmissiveAsIllumination = ((0, OM.m)(this, wO), (0, OM.m)(this, tO, !1)), kM.set(this, ((0, OM.m)(this, gO), (0, OM.m)(this, uO, void 0))), this._linkEmissiveWithDiffuse = ((0, OM.m)(this, RO), (0, OM.m)(this, pO, !1)), ZM.set(this, ((0, OM.m)(this, WO), (0, OM.m)(this, sO, void 0))), this._useSpecularOverAlpha = ((0, OM.m)(this, DO), (0, OM.m)(this, kO, !1)), oM.set(this, ((0, OM.m)(this, ZO), (0, OM.m)(this, oO, void 0))), this._useReflectionOverAlpha = ((0, OM.m)(this, fO), (0, OM.m)(this, YO, !1)), fM.set(this, ((0, OM.m)(this, NO), (0, OM.m)(this, AO, void 0))), this._disableLighting = ((0, OM.m)(this, xO), (0, OM.m)(this, vO, !1)), YM.set(this, ((0, OM.m)(this, FO), (0, OM.m)(this, BO, void 0))), this._useObjectSpaceNormalMap = ((0, OM.m)(this, XO), (0, OM.m)(this, IO, !1)), NM.set(this, ((0, OM.m)(this, KO), (0, OM.m)(this, qO, void 0))), this._useParallax = ((0, OM.m)(this, TO), (0, OM.m)(this, VO, !1)), AM.set(this, ((0, OM.m)(this, cO), (0, OM.m)(this, MS, void 0))), this._useParallaxOcclusion = ((0, OM.m)(this, rS), (0, OM.m)(this, iS, !1)), xM.set(this, ((0, OM.m)(this, OS), (0, OM.m)(this, SS, void 0))), this.parallaxScaleBias = ((0, OM.m)(this, jS), (0, OM.m)(this, aS, .05)), this._roughness = ((0, OM.m)(this, PS), (0, OM.m)(this, nS, 0)), vM.set(this, ((0, OM.m)(this, QS), (0, OM.m)(this, zS, void 0))), this.indexOfRefraction = ((0, OM.m)(this, LS), (0, OM.m)(this, mS, .98)), this.invertRefractionY = ((0, OM.m)(this, HS), (0, OM.m)(this, hS, !0)), this.alphaCutOff = ((0, OM.m)(this, JS), (0, OM.m)(this, dS, .4)), this._useLightmapAsShadowmap = ((0, OM.m)(this, yS), (0, OM.m)(this, lS, !1)), FM.set(this, ((0, OM.m)(this, ES), (0, OM.m)(this, US, void 0))), this._diffuseFresnelParameters = ((0, OM.m)(this, GS), (0, OM.m)(this, CS, void 0)), BM.set(this, ((0, OM.m)(this, eS), (0, OM.m)(this, bS, void 0))), this._opacityFresnelParameters = ((0, OM.m)(this, wS), (0, OM.m)(this, tS, void 0)), XM.set(this, ((0, OM.m)(this, gS), (0, OM.m)(this, uS, void 0))), this._reflectionFresnelParameters = ((0, OM.m)(this, RS), (0, OM.m)(this, pS, void 0)), IM.set(this, ((0, OM.m)(this, WS), (0, OM.m)(this, sS, void 0))), this._refractionFresnelParameters = ((0, OM.m)(this, DS), (0, OM.m)(this, kS, void 0)), KM.set(this, ((0, OM.m)(this, ZS), (0, OM.m)(this, oS, void 0))), this._emissiveFresnelParameters = ((0, OM.m)(this, fS), (0, OM.m)(this, YS, void 0)), qM.set(this, ((0, OM.m)(this, NS), (0, OM.m)(this, AS, void 0))), this._useReflectionFresnelFromSpecular = ((0, OM.m)(this, xS), (0, OM.m)(this, vS, !1)), TM.set(this, ((0, OM.m)(this, FS), (0, OM.m)(this, BS, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, OM.m)(this, XS), (0, OM.m)(this, IS, !1)), VM.set(this, ((0, OM.m)(this, KS), (0, OM.m)(this, qS, void 0))), this._maxSimultaneousLights = ((0, OM.m)(this, TS), (0, OM.m)(this, VS, 4)), cM.set(this, ((0, OM.m)(this, cS), (0, OM.m)(this, Mj, void 0))), this._invertNormalMapX = ((0, OM.m)(this, rj), (0, OM.m)(this, ij, !1)), Mr.set(this, ((0, OM.m)(this, Oj), (0, OM.m)(this, Sj, void 0))), this._invertNormalMapY = ((0, OM.m)(this, jj), (0, OM.m)(this, aj, !1)), rr.set(this, ((0, OM.m)(this, Pj), (0, OM.m)(this, nj, void 0))), this._twoSidedLighting = ((0, OM.m)(this, Qj), (0, OM.m)(this, zj, !1)), ir.set(this, ((0, OM.m)(this, Lj), (0, OM.m)(this, mj, void 0))), this._applyDecalMapAfterDetailMap = ((0, OM.m)(this, Hj), (0, OM.m)(this, hj, !1)), Or.set(this, ((0, OM.m)(this, Jj), (0, OM.m)(this, dj, void 0))), this._vertexPullingMetadata = ((0, OM.m)(this, yj), null), this._renderTargets = new jM.e(16), this._globalAmbientColor = new PM.d(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new yM.e(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new QM.e, this.getRenderTargetTextures = () => (this._renderTargets.reset(), MM.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), MM.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(MM.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(MM.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === mM.c.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== mM.c.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(rM, iM) {
            let OM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const SM = iM._drawWrapper;
            if (SM.effect && this.isFrozen && SM._wasPreviouslyReady && SM._wasPreviouslyUsingInstances === OM) return !0;
            iM.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), iM.materialDefines = new WM(this._eventInfo.defineNames));
            const jM = this.Hk(),
              aM = iM.materialDefines;
            if (this._isReadyForSubMesh(iM)) return !0;
            const PM = jM.ph();
            if (aM._needNormals = (0, UM.S)(jM, rM, aM, !0, this._maxSimultaneousLights, this._disableLighting), !(0, UM.b)(jM, rM, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, UM.$)(jM, aM);
            const zM = this.needAlphaBlendingForMesh(rM) && this.Hk().useOrderIndependentTransparency;
            if ((0, UM.eb)(jM, aM, this.canRenderToMRT && !zM), (0, UM.db)(jM, aM, zM), eM.c.PrepareDefines(PM.currentRenderPassId, rM, aM), aM._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, aM._needUVs = !1;
              for (let MM = 1; MM <= 6; ++MM) aM["MAINUV" + MM] = !1;
              if (jM.texturesEnabled) {
                if (aM.DIFFUSEDIRECTUV = 0, aM.BUMPDIRECTUV = 0, aM.AMBIENTDIRECTUV = 0, aM.OPACITYDIRECTUV = 0, aM.EMISSIVEDIRECTUV = 0, aM.SPECULARDIRECTUV = 0, aM.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && MM.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, UM.W)(this._diffuseTexture, aM, "DIFFUSE")
                } else aM.DIFFUSE = !1;
                if (this._ambientTexture && MM.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, UM.W)(this._ambientTexture, aM, "AMBIENT")
                } else aM.AMBIENT = !1;
                if (this._opacityTexture && MM.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, UM.W)(this._opacityTexture, aM, "OPACITY"), aM.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else aM.OPACITY = !1;
                if (this._reflectionTexture && MM.ReflectionTextureEnabled ? (aM.ROUGHNESS = this._roughness > 0, aM.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (aM.ROUGHNESS = !1, aM.REFLECTIONOVERALPHA = !1), !(0, UM.R)(jM, this._reflectionTexture, aM)) return !1;
                if (this._emissiveTexture && MM.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, UM.W)(this._emissiveTexture, aM, "EMISSIVE")
                } else aM.EMISSIVE = !1;
                if (this._lightmapTexture && MM.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, UM.W)(this._lightmapTexture, aM, "LIGHTMAP"), aM.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, aM.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else aM.LIGHTMAP = !1;
                if (this._specularTexture && MM.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, UM.W)(this._specularTexture, aM, "SPECULAR"), aM.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else aM.SPECULAR = !1;
                if (jM.ph().getCaps().standardDerivatives && this._bumpTexture && MM.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, UM.W)(this._bumpTexture, aM, "BUMP"), aM.PARALLAX = this._useParallax, aM.PARALLAX_RHS = jM.useRightHandedSystem, aM.PARALLAXOCCLUSION = this._useParallaxOcclusion, aM.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else aM.BUMP = !1, aM.PARALLAX = !1, aM.PARALLAX_RHS = !1, aM.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && MM.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  aM._needUVs = !0, aM.REFRACTION = !0, aM.REFRACTIONMAP_3D = this._refractionTexture.isCube, aM.RGBDREFRACTION = this._refractionTexture.isRGBD, aM.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else aM.REFRACTION = !1;
                aM.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else aM.DIFFUSE = !1, aM.AMBIENT = !1, aM.OPACITY = !1, aM.REFLECTION = !1, aM.EMISSIVE = !1, aM.LIGHTMAP = !1, aM.BUMP = !1, aM.REFRACTION = !1;
              aM.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), aM.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, aM.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, aM.SPECULAROVERALPHA = this._useSpecularOverAlpha, aM.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, aM.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, aM.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(rM), aM.TEXTURE_REPETITION_MODE = PM.version > 1 || PM.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = aM, this._eventInfo.subMesh = iM, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (aM._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(aM), aM.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, aM.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (aM._areFresnelDirty && (MM.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (aM.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, aM.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, aM.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, aM.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, aM.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, aM.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, aM._needNormals = !0, aM.FRESNEL = !0) : aM.FRESNEL = !1), aM.AREALIGHTUSED || aM.CLUSTLIGHT_BATCH)
              for (let MM = 0; MM < rM.lightSources.length; MM++)
                if (!rM.lightSources[MM]._isReady()) return !1;
            (0, UM.X)(rM, jM, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(rM), aM, this._applyDecalMapAfterDetailMap, this._useVertexPulling, iM.getRenderingMesh(), this._isVertexOutputInvariant), (0, UM.N)(jM, PM, this, aM, OM, null, iM.getRenderingMesh().hasThinInstances), this._eventInfo.defines = aM, this._eventInfo.mesh = rM, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, UM.K)(rM, aM, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let mM = !1;
            if (aM.isDirty) {
              const OM = aM._areLightsDisposed;
              aM.markAsProcessed();
              const SM = new dM.b;
              aM.REFLECTION && SM.addFallback(0, "REFLECTION"), aM.SPECULAR && SM.addFallback(0, "SPECULAR"), aM.BUMP && SM.addFallback(0, "BUMP"), aM.PARALLAX && SM.addFallback(1, "PARALLAX"), aM.PARALLAX_RHS && SM.addFallback(1, "PARALLAX_RHS"), aM.PARALLAXOCCLUSION && SM.addFallback(0, "PARALLAXOCCLUSION"), aM.SPECULAROVERALPHA && SM.addFallback(0, "SPECULAROVERALPHA"), aM.FOG && SM.addFallback(1, "FOG"), aM.POINTSIZE && SM.addFallback(0, "POINTSIZE"), aM.LOGARITHMICDEPTH && SM.addFallback(0, "LOGARITHMICDEPTH"), (0, UM.y)(aM, SM, this._maxSimultaneousLights), aM.SPECULARTERM && SM.addFallback(0, "SPECULARTERM"), aM.DIFFUSEFRESNEL && SM.addFallback(1, "DIFFUSEFRESNEL"), aM.OPACITYFRESNEL && SM.addFallback(2, "OPACITYFRESNEL"), aM.REFLECTIONFRESNEL && SM.addFallback(3, "REFLECTIONFRESNEL"), aM.EMISSIVEFRESNEL && SM.addFallback(4, "EMISSIVEFRESNEL"), aM.FRESNEL && SM.addFallback(4, "FRESNEL"), aM.MULTIVIEW && SM.addFallback(0, "MULTIVIEW");
              const zM = [nM.j.PositionKind];
              aM.NORMAL && zM.push(nM.j.NormalKind), aM.TANGENT && zM.push(nM.j.TangentKind);
              for (let MM = 1; MM <= 6; ++MM) aM["UV" + MM] && zM.push(`uv${1===MM?"":MM}`);
              aM.VERTEXCOLOR && zM.push(nM.j.ColorKind), (0, UM.D)(zM, rM, aM, SM), (0, UM.F)(zM, aM), (0, UM.G)(zM, rM, aM), (0, UM.A)(zM, rM, aM);
              let HM = "default";
              const hM = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                JM = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, UM.gb)(hM, JM, !1);
              const yM = ["Material", "Scene", "Mesh"],
                GM = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: aM.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = SM, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = aM, this._eventInfo.uniforms = hM, this._eventInfo.attributes = zM, this._eventInfo.samplers = JM, this._eventInfo.uniformBuffersNames = yM, this._eventInfo.customCode = void 0, this._eventInfo.mesh = rM, this._eventInfo.indexParameters = GM, this._callbackPluginEventGeneric(128, this._eventInfo), eM.c.AddUniformsAndSamplers(hM, JM), QM.e.AddUniforms(hM), QM.e.AddSamplers(JM), LM.b && (LM.b.PrepareUniforms(hM, aM), LM.b.PrepareSamplers(JM, aM)), (0, UM.ib)({
                  uniformsNames: hM,
                  uniformBuffersNames: yM,
                  samplers: JM,
                  defines: aM,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, lM.b)(hM), this._useVertexPulling) {
                const MM = iM.getRenderingMesh(),
                  rM = MM?.geometry;
                rM && (this._vertexPullingMetadata = (0, EM.g)(rM), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((MM, rM) => {
                  hM.push(`vp_${rM}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const CM = {};
              this.customShaderNameResolve && (HM = this.customShaderNameResolve(HM, hM, yM, JM, aM, zM, CM));
              const bM = aM.toString(),
                wM = iM.effect,
                tM = jM.ph().createEffect(HM, {
                  attributes: zM,
                  uniformsNames: hM,
                  uniformBuffersNames: yM,
                  samplers: JM,
                  defines: bM,
                  fallbacks: SM,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: GM,
                  processFinalCode: CM.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: aM.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: MM._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, PM);
              if (this._eventInfo.customCode = void 0, tM)
                if (this._onEffectCreatedObservable && (RM.effect = tM, RM.subMesh = iM, this._onEffectCreatedObservable.notifyObservers(RM)), this.allowShaderHotSwapping && wM && !tM.isReady()) {
                  if (aM.markAsUnprocessed(), mM = this.isFrozen, OM) return aM._areLightsDisposed = !0, !1
                } else jM.resetCachedMaterial(), iM.setEffect(tM, aM, this._materialContext)
            }
            return !(!iM.effect || !iM.effect.isReady()) && (aM._renderId = jM.getRenderId(), SM._wasPreviouslyReady = !mM, SM._wasPreviouslyUsingInstances = OM, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const MM = this._uniformBuffer;
            MM.addUniform("diffuseLeftColor", 4), MM.addUniform("diffuseRightColor", 4), MM.addUniform("opacityParts", 4), MM.addUniform("reflectionLeftColor", 4), MM.addUniform("reflectionRightColor", 4), MM.addUniform("refractionLeftColor", 4), MM.addUniform("refractionRightColor", 4), MM.addUniform("emissiveLeftColor", 4), MM.addUniform("emissiveRightColor", 4), MM.addUniform("vDiffuseInfos", 2), MM.addUniform("vAmbientInfos", 2), MM.addUniform("vOpacityInfos", 2), MM.addUniform("vEmissiveInfos", 2), MM.addUniform("vLightmapInfos", 2), MM.addUniform("vSpecularInfos", 2), MM.addUniform("vBumpInfos", 3), MM.addUniform("diffuseMatrix", 16), MM.addUniform("ambientMatrix", 16), MM.addUniform("opacityMatrix", 16), MM.addUniform("emissiveMatrix", 16), MM.addUniform("lightmapMatrix", 16), MM.addUniform("specularMatrix", 16), MM.addUniform("bumpMatrix", 16), MM.addUniform("vTangentSpaceParams", 2), MM.addUniform("pointSize", 1), MM.addUniform("alphaCutOff", 1), MM.addUniform("refractionMatrix", 16), MM.addUniform("vRefractionInfos", 4), MM.addUniform("vRefractionPosition", 3), MM.addUniform("vRefractionSize", 3), MM.addUniform("vSpecularColor", 4), MM.addUniform("vEmissiveColor", 3), MM.addUniform("vDiffuseColor", 4), MM.addUniform("vAmbientColor", 3), MM.addUniform("cameraInfo", 4), MM.addUniform("vTextureRepetitionHexTilingParams", 4), (0, UM.fb)(MM, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(rM, iM, OM) {
            const SM = this.Hk(),
              jM = OM.materialDefines;
            if (!jM) return;
            const nM = OM.effect;
            if (!nM) return;
            this._activeEffect = nM, iM.getMeshUniformBuffer().bindToEffect(nM, "Mesh"), iM.transferToEffect(rM), this._uniformBuffer.bindToEffect(nM, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, SM, iM, rM, this.isFrozen), eM.c.Bind(SM.ph().currentRenderPassId, this._activeEffect, iM, rM, this);
            const QM = SM.activeCamera;
            QM ? this._uniformBuffer.updateFloat4("cameraInfo", QM.minZ, QM.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const zM = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", zM[0], zM[1], zM[2], zM[3]), this._eventInfo.subMesh = OM, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), jM.OBJECTSPACE_NORMALMAP && (rM.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const LM = this._mustRebind(SM, nM, OM, iM.visibility),
              mM = SM.ph()._features.needToAlwaysBindUniformBuffers;
            (0, UM.d)(iM, nM), this._vertexPullingMetadata && (0, EM.d)(nM, this._vertexPullingMetadata);
            const HM = this._uniformBuffer;
            if (LM) {
              if (this.bindViewProjection(nM), !HM.useUbo || !this.isFrozen || !HM.isSync || OM._drawWrapper._forceRebindOnNextCall) {
                if (MM.FresnelEnabled && jM.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (HM.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), HM.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const MM = PM.j.Color3[0];
                    MM.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), HM.updateColor4("opacityParts", MM, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (HM.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), HM.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (HM.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), HM.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (HM.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), HM.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (jM.ALPHATEST && HM.updateFloat("alphaCutOff", this.alphaCutOff), SM.texturesEnabled && (this._diffuseTexture && MM.DiffuseTextureEnabled && (HM.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, UM.x)(this._diffuseTexture, HM, "diffuse")), this._ambientTexture && MM.AmbientTextureEnabled && (HM.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, UM.x)(this._ambientTexture, HM, "ambient")), this._opacityTexture && MM.OpacityTextureEnabled && (HM.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, UM.x)(this._opacityTexture, HM, "opacity")), (0, UM.j)(SM, jM, HM, PM.d.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && MM.ReflectionTextureEnabled || HM.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && MM.EmissiveTextureEnabled && (HM.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, UM.x)(this._emissiveTexture, HM, "emissive")), this._lightmapTexture && MM.LightmapTextureEnabled && (HM.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, UM.x)(this._lightmapTexture, HM, "lightmap")), this._specularTexture && MM.SpecularTextureEnabled && (HM.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, UM.x)(this._specularTexture, HM, "specular")), this._bumpTexture && SM.ph().getCaps().standardDerivatives && MM.BumpTextureEnabled && (HM.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, UM.x)(this._bumpTexture, HM, "bump"), SM._mirroredCameraPosition ? HM.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : HM.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && MM.RefractionTextureEnabled)) {
                  let MM = 1;
                  if (this._refractionTexture.isCube || (HM.p_("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (MM = this._refractionTexture.depth)), HM.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, MM, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const MM = this._refractionTexture;
                    HM.updateVector3("vRefractionPosition", MM.boundingBoxPosition), HM.updateVector3("vRefractionSize", MM.boundingBoxSize)
                  }
                }
                this.pointsCloud && HM.updateFloat("pointSize", this.pointSize), HM.updateColor4("vSpecularColor", this.specularColor, this.specularPower), HM.updateColor3("vEmissiveColor", MM.EmissiveTextureEnabled ? this.emissiveColor : PM.d.BlackReadOnly), HM.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), SM.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), HM.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              SM.texturesEnabled && (this._diffuseTexture && MM.DiffuseTextureEnabled && nM.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && MM.AmbientTextureEnabled && nM.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && MM.OpacityTextureEnabled && nM.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && MM.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? nM.setTexture("reflectionCubeSampler", this._reflectionTexture) : nM.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && MM.EmissiveTextureEnabled && nM.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && MM.LightmapTextureEnabled && nM.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && MM.SpecularTextureEnabled && nM.setTexture("specularSampler", this._specularTexture), this._bumpTexture && SM.ph().getCaps().standardDerivatives && MM.BumpTextureEnabled && nM.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && MM.RefractionTextureEnabled && (this._refractionTexture.isCube ? nM.setTexture("refractionCubeSampler", this._refractionTexture) : nM.setTexture("refraction2DSampler", this._refractionTexture))), this.Hk().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(iM) && this.Hk().depthPeelingRenderer.bind(nM), this._eventInfo.subMesh = OM, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, lM.e)(nM, this, SM), this.bindEyePosition(nM)
            } else mM && (this._needToBindSceneUbo = !0);
            !LM && this.isFrozen && !mM || !SM.lightsEnabled || this._disableLighting || (0, UM.o)(SM, iM, nM, jM, this._maxSimultaneousLights), !LM && this.isFrozen || ((SM.fogEnabled && iM.applyFog && SM.fogMode !== aM.d.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || iM.receiveShadows || jM.PREPASS || jM.CLUSTLIGHT_BATCH) && this.bindView(nM), (0, UM.g)(SM, iM, nM), jM.NUM_MORPH_INFLUENCERS && (0, UM.r)(iM, nM), jM.BAKED_VERTEX_ANIMATION_TEXTURE && iM.bakedVertexAnimationManager?.bind(nM, jM.INSTANCES), this.useLogarithmicDepth && (0, UM.q)(jM, nM, SM), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(iM, this._activeEffect, OM), HM.update()
          }
          _canBindRunFollower(rM, iM, OM, SM, jM) {
            const aM = rM.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === MM.prototype.isReadyForSubMesh && this.bindForSubMesh === MM.prototype.bindForSubMesh && this._mustRebind === hM.c.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !iM._features.needToAlwaysBindUniformBuffers && !(aM && aM.enabled && aM.currentRTisSceneRT) && !eM.c._Configurations[iM.currentRenderPassId] && !SM.materialDefines?.OBJECTSPACE_NORMALMAP && !OM.skeleton && !jM._bonesComputationForcedToCPU
          }
          _bindRunFollower(MM, rM, iM, OM) {
            this._activeEffect = OM, rM.getMeshUniformBuffer().bindToEffect(OM, "Mesh"), rM.transferToEffect(MM);
            const SM = this._uniformBuffer;
            SM.bindToEffect(OM, "Material");
            const jM = this._scene.activeCamera;
            jM ? SM.updateFloat4("cameraInfo", jM.minZ, jM.maxZ, 0, 0) : SM.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const aM = this.textureRepetitionHexTilingParams;
            SM.updateFloat4("vTextureRepetitionHexTilingParams", aM[0], aM[1], aM[2], aM[3]), this._afterBind(rM, OM, iM), SM.update()
          }
          getAnimatables() {
            const MM = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && MM.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && MM.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && MM.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && MM.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && MM.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && MM.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && MM.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && MM.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && MM.push(this._refractionTexture), MM
          }
          getActiveTextures() {
            const MM = super.getActiveTextures();
            return this._diffuseTexture && MM.push(this._diffuseTexture), this._ambientTexture && MM.push(this._ambientTexture), this._opacityTexture && MM.push(this._opacityTexture), this._reflectionTexture && MM.push(this._reflectionTexture), this._emissiveTexture && MM.push(this._emissiveTexture), this._specularTexture && MM.push(this._specularTexture), this._bumpTexture && MM.push(this._bumpTexture), this._lightmapTexture && MM.push(this._lightmapTexture), this._refractionTexture && MM.push(this._refractionTexture), MM
          }
          hasTexture(MM) {
            return !!super.hasTexture(MM) || (this._diffuseTexture === MM || (this._ambientTexture === MM || (this._opacityTexture === MM || (this._reflectionTexture === MM || (this._emissiveTexture === MM || (this._specularTexture === MM || (this._bumpTexture === MM || (this._lightmapTexture === MM || this._refractionTexture === MM))))))))
          }
          dispose(MM, rM) {
            rM && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(MM, rM)
          }
          clone(rM) {
            let iM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              OM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const SM = GM.b.Clone((() => new MM(rM, this.Hk())), this, {
              cloneTexturesOnlyOnce: iM
            });
            return SM.name = rM, SM.id = rM, this.stencil.copyTo(SM.stencil), this._clonePlugins(SM, OM), SM
          }
          static Parse(rM, iM, OM) {
            const SM = GM.b.Parse((() => new MM(rM.name, iM)), rM, iM, OM);
            return rM.stencil && SM.stencil.parse(rM.stencil, iM, OM), mM.c._ParsePlugins(rM, SM, iM, OM), SM
          }
          static get DiffuseTextureEnabled() {
            return JM.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(MM) {
            JM.e.DiffuseTextureEnabled = MM
          }
          static get DetailTextureEnabled() {
            return JM.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(MM) {
            JM.e.DetailTextureEnabled = MM
          }
          static get AmbientTextureEnabled() {
            return JM.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(MM) {
            JM.e.AmbientTextureEnabled = MM
          }
          static get OpacityTextureEnabled() {
            return JM.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(MM) {
            JM.e.OpacityTextureEnabled = MM
          }
          static get ReflectionTextureEnabled() {
            return JM.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(MM) {
            JM.e.ReflectionTextureEnabled = MM
          }
          static get EmissiveTextureEnabled() {
            return JM.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(MM) {
            JM.e.EmissiveTextureEnabled = MM
          }
          static get SpecularTextureEnabled() {
            return JM.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(MM) {
            JM.e.SpecularTextureEnabled = MM
          }
          static get BumpTextureEnabled() {
            return JM.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(MM) {
            JM.e.BumpTextureEnabled = MM
          }
          static get LightmapTextureEnabled() {
            return JM.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(MM) {
            JM.e.LightmapTextureEnabled = MM
          }
          static get RefractionTextureEnabled() {
            return JM.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(MM) {
            JM.e.RefractionTextureEnabled = MM
          }
          static get ColorGradingTextureEnabled() {
            return JM.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(MM) {
            JM.e.ColorGradingTextureEnabled = MM
          }
          static get FresnelEnabled() {
            return JM.e.FresnelEnabled
          }
          static set FresnelEnabled(MM) {
            JM.e.FresnelEnabled = MM
          }
        }, rM = new WeakMap, zM = new WeakMap, HM = new WeakMap, bM = new WeakMap, wM = new WeakMap, tM = new WeakMap, gM = new WeakMap, uM = new WeakMap, pM = new WeakMap, DM = new WeakMap, kM = new WeakMap, ZM = new WeakMap, oM = new WeakMap, fM = new WeakMap, YM = new WeakMap, NM = new WeakMap, AM = new WeakMap, xM = new WeakMap, vM = new WeakMap, FM = new WeakMap, BM = new WeakMap, XM = new WeakMap, IM = new WeakMap, KM = new WeakMap, qM = new WeakMap, TM = new WeakMap, VM = new WeakMap, cM = new WeakMap, Mr = new WeakMap, rr = new WeakMap, ir = new WeakMap, Or = new WeakMap, (() => {
          const rM = "function" === typeof Symbol && Symbol.metadata ? Object.create(ti[Symbol.metadata] ?? null) : void 0;
          Sr = [(0, SM.B)("diffuseTexture")], jr = [(0, SM.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], ar = [(0, SM.B)("ambientTexture")], Pr = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], nr = [(0, SM.B)("opacityTexture")], Qr = [(0, SM.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], zr = [(0, SM.B)("reflectionTexture")], Lr = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], mr = [(0, SM.B)("emissiveTexture")], Hr = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], hr = [(0, SM.B)("specularTexture")], Jr = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], dr = [(0, SM.B)("bumpTexture")], yr = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], lr = [(0, SM.B)("lightmapTexture")], Er = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], Ur = [(0, SM.B)("refractionTexture")], Gr = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], Cr = [(0, SM.r)("ambient")], er = [(0, SM.r)("diffuse")], br = [(0, SM.r)("specular")], wr = [(0, SM.r)("emissive")], tr = [(0, SM.L)()], gr = [(0, SM.L)("useAlphaFromDiffuseTexture")], ur = [() => ({
            init(MM) {
              return void 0 === MM && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = MM), MM
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(MM) {
              this._useAlphaFromDiffuseTexture = MM
            }
          })], Rr = [(0, SM.L)("useEmissiveAsIllumination")], pr = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], Wr = [(0, SM.L)("linkEmissiveWithDiffuse")], sr = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], Dr = [(0, SM.L)("useSpecularOverAlpha")], kr = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], Zr = [(0, SM.L)("useReflectionOverAlpha")], or = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], fr = [(0, SM.L)("disableLighting")], Yr = [(0, SM.g)("_markAllSubMeshesAsLightsDirty")], Nr = [(0, SM.L)("useObjectSpaceNormalMap")], Ar = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], xr = [(0, SM.L)("useParallax")], vr = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], Fr = [(0, SM.L)("useParallaxOcclusion")], Br = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], Xr = [(0, SM.L)()], Ir = [(0, SM.L)("roughness")], Kr = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], qr = [(0, SM.L)()], Tr = [(0, SM.L)()], Vr = [(0, SM.L)()], cr = [(0, SM.L)("useLightmapAsShadowmap")], Mi = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], ri = [(0, SM.t)("diffuseFresnelParameters")], ii = [(0, SM.g)("_markAllSubMeshesAsFresnelDirty")], Oi = [(0, SM.t)("opacityFresnelParameters")], Si = [(0, SM.g)("_markAllSubMeshesAsFresnelAndMiscDirty")], ji = [(0, SM.t)("reflectionFresnelParameters")], ai = [(0, SM.g)("_markAllSubMeshesAsFresnelDirty")], Pi = [(0, SM.t)("refractionFresnelParameters")], ni = [(0, SM.g)("_markAllSubMeshesAsFresnelDirty")], Qi = [(0, SM.t)("emissiveFresnelParameters")], zi = [(0, SM.g)("_markAllSubMeshesAsFresnelDirty")], Li = [(0, SM.L)("useReflectionFresnelFromSpecular")], mi = [(0, SM.g)("_markAllSubMeshesAsFresnelDirty")], Hi = [(0, SM.L)("useGlossinessFromSpecularMapAlpha")], Ji = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], di = [(0, SM.L)("maxSimultaneousLights")], yi = [(0, SM.g)("_markAllSubMeshesAsLightsDirty")], li = [(0, SM.L)("invertNormalMapX")], Ei = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], Ui = [(0, SM.L)("invertNormalMapY")], Gi = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], Ci = [(0, SM.L)("twoSidedLighting")], ei = [(0, SM.g)("_markAllSubMeshesAsTexturesDirty")], bi = [(0, SM.L)("applyDecalMapAfterDetailMap")], wi = [(0, SM.g)("_markAllSubMeshesAsMiscDirty")], (0, OM.i)(MM, null, jr, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "diffuseTexture" in MM,
              get: MM => MM.diffuseTexture,
              set: (MM, rM) => {
                MM.diffuseTexture = rM
              }
            },
            metadata: rM
          }, Ri, Wi), (0, OM.i)(MM, null, Pr, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "ambientTexture" in MM,
              get: MM => MM.ambientTexture,
              set: (MM, rM) => {
                MM.ambientTexture = rM
              }
            },
            metadata: rM
          }, ki, Zi), (0, OM.i)(MM, null, Qr, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "opacityTexture" in MM,
              get: MM => MM.opacityTexture,
              set: (MM, rM) => {
                MM.opacityTexture = rM
              }
            },
            metadata: rM
          }, Yi, Ni), (0, OM.i)(MM, null, Lr, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "reflectionTexture" in MM,
              get: MM => MM.reflectionTexture,
              set: (MM, rM) => {
                MM.reflectionTexture = rM
              }
            },
            metadata: rM
          }, vi, Fi), (0, OM.i)(MM, null, Hr, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "emissiveTexture" in MM,
              get: MM => MM.emissiveTexture,
              set: (MM, rM) => {
                MM.emissiveTexture = rM
              }
            },
            metadata: rM
          }, Ii, Ki), (0, OM.i)(MM, null, Jr, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "specularTexture" in MM,
              get: MM => MM.specularTexture,
              set: (MM, rM) => {
                MM.specularTexture = rM
              }
            },
            metadata: rM
          }, Vi, ci), (0, OM.i)(MM, null, yr, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "bumpTexture" in MM,
              get: MM => MM.bumpTexture,
              set: (MM, rM) => {
                MM.bumpTexture = rM
              }
            },
            metadata: rM
          }, iO, OO), (0, OM.i)(MM, null, Er, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "lightmapTexture" in MM,
              get: MM => MM.lightmapTexture,
              set: (MM, rM) => {
                MM.lightmapTexture = rM
              }
            },
            metadata: rM
          }, aO, PO), (0, OM.i)(MM, null, Gr, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "refractionTexture" in MM,
              get: MM => MM.refractionTexture,
              set: (MM, rM) => {
                MM.refractionTexture = rM
              }
            },
            metadata: rM
          }, zO, LO), (0, OM.i)(MM, null, ur, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "useAlphaFromDiffuseTexture" in MM,
              get: MM => MM.useAlphaFromDiffuseTexture,
              set: (MM, rM) => {
                MM.useAlphaFromDiffuseTexture = rM
              }
            },
            metadata: rM
          }, bO, wO), (0, OM.i)(MM, null, pr, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: MM => "useEmissiveAsIllumination" in MM,
              get: MM => MM.useEmissiveAsIllumination,
              set: (MM, rM) => {
                MM.useEmissiveAsIllumination = rM
              }
            },
            metadata: rM
          }, uO, RO), (0, OM.i)(MM, null, sr, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: MM => "linkEmissiveWithDiffuse" in MM,
              get: MM => MM.linkEmissiveWithDiffuse,
              set: (MM, rM) => {
                MM.linkEmissiveWithDiffuse = rM
              }
            },
            metadata: rM
          }, sO, DO), (0, OM.i)(MM, null, kr, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: MM => "useSpecularOverAlpha" in MM,
              get: MM => MM.useSpecularOverAlpha,
              set: (MM, rM) => {
                MM.useSpecularOverAlpha = rM
              }
            },
            metadata: rM
          }, oO, fO), (0, OM.i)(MM, null, or, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: MM => "useReflectionOverAlpha" in MM,
              get: MM => MM.useReflectionOverAlpha,
              set: (MM, rM) => {
                MM.useReflectionOverAlpha = rM
              }
            },
            metadata: rM
          }, AO, xO), (0, OM.i)(MM, null, Yr, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: MM => "disableLighting" in MM,
              get: MM => MM.disableLighting,
              set: (MM, rM) => {
                MM.disableLighting = rM
              }
            },
            metadata: rM
          }, BO, XO), (0, OM.i)(MM, null, Ar, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: MM => "useObjectSpaceNormalMap" in MM,
              get: MM => MM.useObjectSpaceNormalMap,
              set: (MM, rM) => {
                MM.useObjectSpaceNormalMap = rM
              }
            },
            metadata: rM
          }, qO, TO), (0, OM.i)(MM, null, vr, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: MM => "useParallax" in MM,
              get: MM => MM.useParallax,
              set: (MM, rM) => {
                MM.useParallax = rM
              }
            },
            metadata: rM
          }, MS, rS), (0, OM.i)(MM, null, Br, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: MM => "useParallaxOcclusion" in MM,
              get: MM => MM.useParallaxOcclusion,
              set: (MM, rM) => {
                MM.useParallaxOcclusion = rM
              }
            },
            metadata: rM
          }, SS, jS), (0, OM.i)(MM, null, Kr, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: MM => "roughness" in MM,
              get: MM => MM.roughness,
              set: (MM, rM) => {
                MM.roughness = rM
              }
            },
            metadata: rM
          }, zS, LS), (0, OM.i)(MM, null, Mi, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: MM => "useLightmapAsShadowmap" in MM,
              get: MM => MM.useLightmapAsShadowmap,
              set: (MM, rM) => {
                MM.useLightmapAsShadowmap = rM
              }
            },
            metadata: rM
          }, US, GS), (0, OM.i)(MM, null, ii, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: MM => "diffuseFresnelParameters" in MM,
              get: MM => MM.diffuseFresnelParameters,
              set: (MM, rM) => {
                MM.diffuseFresnelParameters = rM
              }
            },
            metadata: rM
          }, bS, wS), (0, OM.i)(MM, null, Si, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: MM => "opacityFresnelParameters" in MM,
              get: MM => MM.opacityFresnelParameters,
              set: (MM, rM) => {
                MM.opacityFresnelParameters = rM
              }
            },
            metadata: rM
          }, uS, RS), (0, OM.i)(MM, null, ai, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: MM => "reflectionFresnelParameters" in MM,
              get: MM => MM.reflectionFresnelParameters,
              set: (MM, rM) => {
                MM.reflectionFresnelParameters = rM
              }
            },
            metadata: rM
          }, sS, DS), (0, OM.i)(MM, null, ni, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: MM => "refractionFresnelParameters" in MM,
              get: MM => MM.refractionFresnelParameters,
              set: (MM, rM) => {
                MM.refractionFresnelParameters = rM
              }
            },
            metadata: rM
          }, oS, fS), (0, OM.i)(MM, null, zi, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: MM => "emissiveFresnelParameters" in MM,
              get: MM => MM.emissiveFresnelParameters,
              set: (MM, rM) => {
                MM.emissiveFresnelParameters = rM
              }
            },
            metadata: rM
          }, AS, xS), (0, OM.i)(MM, null, mi, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: MM => "useReflectionFresnelFromSpecular" in MM,
              get: MM => MM.useReflectionFresnelFromSpecular,
              set: (MM, rM) => {
                MM.useReflectionFresnelFromSpecular = rM
              }
            },
            metadata: rM
          }, BS, XS), (0, OM.i)(MM, null, Ji, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: MM => "useGlossinessFromSpecularMapAlpha" in MM,
              get: MM => MM.useGlossinessFromSpecularMapAlpha,
              set: (MM, rM) => {
                MM.useGlossinessFromSpecularMapAlpha = rM
              }
            },
            metadata: rM
          }, qS, TS), (0, OM.i)(MM, null, yi, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: MM => "maxSimultaneousLights" in MM,
              get: MM => MM.maxSimultaneousLights,
              set: (MM, rM) => {
                MM.maxSimultaneousLights = rM
              }
            },
            metadata: rM
          }, Mj, rj), (0, OM.i)(MM, null, Ei, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: MM => "invertNormalMapX" in MM,
              get: MM => MM.invertNormalMapX,
              set: (MM, rM) => {
                MM.invertNormalMapX = rM
              }
            },
            metadata: rM
          }, Sj, jj), (0, OM.i)(MM, null, Gi, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: MM => "invertNormalMapY" in MM,
              get: MM => MM.invertNormalMapY,
              set: (MM, rM) => {
                MM.invertNormalMapY = rM
              }
            },
            metadata: rM
          }, nj, Qj), (0, OM.i)(MM, null, ei, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: MM => "twoSidedLighting" in MM,
              get: MM => MM.twoSidedLighting,
              set: (MM, rM) => {
                MM.twoSidedLighting = rM
              }
            },
            metadata: rM
          }, mj, Hj), (0, OM.i)(MM, null, wi, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: MM => "applyDecalMapAfterDetailMap" in MM,
              get: MM => MM.applyDecalMapAfterDetailMap,
              set: (MM, rM) => {
                MM.applyDecalMapAfterDetailMap = rM
              }
            },
            metadata: rM
          }, dj, yj), (0, OM.i)(null, null, Sr, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "_diffuseTexture" in MM,
              get: MM => MM._diffuseTexture,
              set: (MM, rM) => {
                MM._diffuseTexture = rM
              }
            },
            metadata: rM
          }, gi, ui), (0, OM.i)(null, null, ar, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "_ambientTexture" in MM,
              get: MM => MM._ambientTexture,
              set: (MM, rM) => {
                MM._ambientTexture = rM
              }
            },
            metadata: rM
          }, si, Di), (0, OM.i)(null, null, nr, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "_opacityTexture" in MM,
              get: MM => MM._opacityTexture,
              set: (MM, rM) => {
                MM._opacityTexture = rM
              }
            },
            metadata: rM
          }, oi, fi), (0, OM.i)(null, null, zr, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "_reflectionTexture" in MM,
              get: MM => MM._reflectionTexture,
              set: (MM, rM) => {
                MM._reflectionTexture = rM
              }
            },
            metadata: rM
          }, Ai, xi), (0, OM.i)(null, null, mr, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "_emissiveTexture" in MM,
              get: MM => MM._emissiveTexture,
              set: (MM, rM) => {
                MM._emissiveTexture = rM
              }
            },
            metadata: rM
          }, Bi, Xi), (0, OM.i)(null, null, hr, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "_specularTexture" in MM,
              get: MM => MM._specularTexture,
              set: (MM, rM) => {
                MM._specularTexture = rM
              }
            },
            metadata: rM
          }, qi, Ti), (0, OM.i)(null, null, dr, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "_bumpTexture" in MM,
              get: MM => MM._bumpTexture,
              set: (MM, rM) => {
                MM._bumpTexture = rM
              }
            },
            metadata: rM
          }, MO, rO), (0, OM.i)(null, null, lr, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "_lightmapTexture" in MM,
              get: MM => MM._lightmapTexture,
              set: (MM, rM) => {
                MM._lightmapTexture = rM
              }
            },
            metadata: rM
          }, SO, jO), (0, OM.i)(null, null, Ur, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "_refractionTexture" in MM,
              get: MM => MM._refractionTexture,
              set: (MM, rM) => {
                MM._refractionTexture = rM
              }
            },
            metadata: rM
          }, nO, QO), (0, OM.i)(null, null, Cr, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: MM => "ambientColor" in MM,
              get: MM => MM.ambientColor,
              set: (MM, rM) => {
                MM.ambientColor = rM
              }
            },
            metadata: rM
          }, mO, HO), (0, OM.i)(null, null, er, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: MM => "diffuseColor" in MM,
              get: MM => MM.diffuseColor,
              set: (MM, rM) => {
                MM.diffuseColor = rM
              }
            },
            metadata: rM
          }, hO, JO), (0, OM.i)(null, null, br, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: MM => "specularColor" in MM,
              get: MM => MM.specularColor,
              set: (MM, rM) => {
                MM.specularColor = rM
              }
            },
            metadata: rM
          }, dO, yO), (0, OM.i)(null, null, wr, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: MM => "emissiveColor" in MM,
              get: MM => MM.emissiveColor,
              set: (MM, rM) => {
                MM.emissiveColor = rM
              }
            },
            metadata: rM
          }, lO, EO), (0, OM.i)(null, null, tr, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: MM => "specularPower" in MM,
              get: MM => MM.specularPower,
              set: (MM, rM) => {
                MM.specularPower = rM
              }
            },
            metadata: rM
          }, UO, GO), (0, OM.i)(null, null, gr, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: MM => "_useAlphaFromDiffuseTexture" in MM,
              get: MM => MM._useAlphaFromDiffuseTexture,
              set: (MM, rM) => {
                MM._useAlphaFromDiffuseTexture = rM
              }
            },
            metadata: rM
          }, CO, eO), (0, OM.i)(null, null, Rr, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: MM => "_useEmissiveAsIllumination" in MM,
              get: MM => MM._useEmissiveAsIllumination,
              set: (MM, rM) => {
                MM._useEmissiveAsIllumination = rM
              }
            },
            metadata: rM
          }, tO, gO), (0, OM.i)(null, null, Wr, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: MM => "_linkEmissiveWithDiffuse" in MM,
              get: MM => MM._linkEmissiveWithDiffuse,
              set: (MM, rM) => {
                MM._linkEmissiveWithDiffuse = rM
              }
            },
            metadata: rM
          }, pO, WO), (0, OM.i)(null, null, Dr, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: MM => "_useSpecularOverAlpha" in MM,
              get: MM => MM._useSpecularOverAlpha,
              set: (MM, rM) => {
                MM._useSpecularOverAlpha = rM
              }
            },
            metadata: rM
          }, kO, ZO), (0, OM.i)(null, null, Zr, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: MM => "_useReflectionOverAlpha" in MM,
              get: MM => MM._useReflectionOverAlpha,
              set: (MM, rM) => {
                MM._useReflectionOverAlpha = rM
              }
            },
            metadata: rM
          }, YO, NO), (0, OM.i)(null, null, fr, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: MM => "_disableLighting" in MM,
              get: MM => MM._disableLighting,
              set: (MM, rM) => {
                MM._disableLighting = rM
              }
            },
            metadata: rM
          }, vO, FO), (0, OM.i)(null, null, Nr, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: MM => "_useObjectSpaceNormalMap" in MM,
              get: MM => MM._useObjectSpaceNormalMap,
              set: (MM, rM) => {
                MM._useObjectSpaceNormalMap = rM
              }
            },
            metadata: rM
          }, IO, KO), (0, OM.i)(null, null, xr, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: MM => "_useParallax" in MM,
              get: MM => MM._useParallax,
              set: (MM, rM) => {
                MM._useParallax = rM
              }
            },
            metadata: rM
          }, VO, cO), (0, OM.i)(null, null, Fr, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: MM => "_useParallaxOcclusion" in MM,
              get: MM => MM._useParallaxOcclusion,
              set: (MM, rM) => {
                MM._useParallaxOcclusion = rM
              }
            },
            metadata: rM
          }, iS, OS), (0, OM.i)(null, null, Xr, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: MM => "parallaxScaleBias" in MM,
              get: MM => MM.parallaxScaleBias,
              set: (MM, rM) => {
                MM.parallaxScaleBias = rM
              }
            },
            metadata: rM
          }, aS, PS), (0, OM.i)(null, null, Ir, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: MM => "_roughness" in MM,
              get: MM => MM._roughness,
              set: (MM, rM) => {
                MM._roughness = rM
              }
            },
            metadata: rM
          }, nS, QS), (0, OM.i)(null, null, qr, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: MM => "indexOfRefraction" in MM,
              get: MM => MM.indexOfRefraction,
              set: (MM, rM) => {
                MM.indexOfRefraction = rM
              }
            },
            metadata: rM
          }, mS, HS), (0, OM.i)(null, null, Tr, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: MM => "invertRefractionY" in MM,
              get: MM => MM.invertRefractionY,
              set: (MM, rM) => {
                MM.invertRefractionY = rM
              }
            },
            metadata: rM
          }, hS, JS), (0, OM.i)(null, null, Vr, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: MM => "alphaCutOff" in MM,
              get: MM => MM.alphaCutOff,
              set: (MM, rM) => {
                MM.alphaCutOff = rM
              }
            },
            metadata: rM
          }, dS, yS), (0, OM.i)(null, null, cr, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: MM => "_useLightmapAsShadowmap" in MM,
              get: MM => MM._useLightmapAsShadowmap,
              set: (MM, rM) => {
                MM._useLightmapAsShadowmap = rM
              }
            },
            metadata: rM
          }, lS, ES), (0, OM.i)(null, null, ri, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: MM => "_diffuseFresnelParameters" in MM,
              get: MM => MM._diffuseFresnelParameters,
              set: (MM, rM) => {
                MM._diffuseFresnelParameters = rM
              }
            },
            metadata: rM
          }, CS, eS), (0, OM.i)(null, null, Oi, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: MM => "_opacityFresnelParameters" in MM,
              get: MM => MM._opacityFresnelParameters,
              set: (MM, rM) => {
                MM._opacityFresnelParameters = rM
              }
            },
            metadata: rM
          }, tS, gS), (0, OM.i)(null, null, ji, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: MM => "_reflectionFresnelParameters" in MM,
              get: MM => MM._reflectionFresnelParameters,
              set: (MM, rM) => {
                MM._reflectionFresnelParameters = rM
              }
            },
            metadata: rM
          }, pS, WS), (0, OM.i)(null, null, Pi, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: MM => "_refractionFresnelParameters" in MM,
              get: MM => MM._refractionFresnelParameters,
              set: (MM, rM) => {
                MM._refractionFresnelParameters = rM
              }
            },
            metadata: rM
          }, kS, ZS), (0, OM.i)(null, null, Qi, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: MM => "_emissiveFresnelParameters" in MM,
              get: MM => MM._emissiveFresnelParameters,
              set: (MM, rM) => {
                MM._emissiveFresnelParameters = rM
              }
            },
            metadata: rM
          }, YS, NS), (0, OM.i)(null, null, Li, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: MM => "_useReflectionFresnelFromSpecular" in MM,
              get: MM => MM._useReflectionFresnelFromSpecular,
              set: (MM, rM) => {
                MM._useReflectionFresnelFromSpecular = rM
              }
            },
            metadata: rM
          }, vS, FS), (0, OM.i)(null, null, Hi, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: MM => "_useGlossinessFromSpecularMapAlpha" in MM,
              get: MM => MM._useGlossinessFromSpecularMapAlpha,
              set: (MM, rM) => {
                MM._useGlossinessFromSpecularMapAlpha = rM
              }
            },
            metadata: rM
          }, IS, KS), (0, OM.i)(null, null, di, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: MM => "_maxSimultaneousLights" in MM,
              get: MM => MM._maxSimultaneousLights,
              set: (MM, rM) => {
                MM._maxSimultaneousLights = rM
              }
            },
            metadata: rM
          }, VS, cS), (0, OM.i)(null, null, li, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: MM => "_invertNormalMapX" in MM,
              get: MM => MM._invertNormalMapX,
              set: (MM, rM) => {
                MM._invertNormalMapX = rM
              }
            },
            metadata: rM
          }, ij, Oj), (0, OM.i)(null, null, Ui, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: MM => "_invertNormalMapY" in MM,
              get: MM => MM._invertNormalMapY,
              set: (MM, rM) => {
                MM._invertNormalMapY = rM
              }
            },
            metadata: rM
          }, aj, Pj), (0, OM.i)(null, null, Ci, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: MM => "_twoSidedLighting" in MM,
              get: MM => MM._twoSidedLighting,
              set: (MM, rM) => {
                MM._twoSidedLighting = rM
              }
            },
            metadata: rM
          }, zj, Lj), (0, OM.i)(null, null, bi, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: MM => "_applyDecalMapAfterDetailMap" in MM,
              get: MM => MM._applyDecalMapAfterDetailMap,
              set: (MM, rM) => {
                MM._applyDecalMapAfterDetailMap = rM
              }
            },
            metadata: rM
          }, hj, Jj), rM && Object.defineProperty(MM, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rM
          })
        })(), MM.ForceGLSL = !1, MM._ShaderLoader = new CM.c((() => [Promise.all([iM.e(626), iM.e(625)]).then((() => iM(44514))), Promise.all([iM.e(631), iM.e(627), iM.e(640), iM.e(630)]).then((() => iM(44714)))]), (() => [Promise.all([iM.e(647), iM.e(642)]).then((() => iM(44879))), Promise.all([iM.e(648), iM.e(658), iM.e(644)]).then((() => iM(45078)))])), MM
      })(),
      kM = !1;

    function ZM() {
      kM || (kM = !0, (0, LM.d)(), (0, gM.e)("BABYLON.StandardMaterial", DM), aM.d.DefaultMaterialFactory = MM => new DM("default material", MM))
    }
    Object.getOwnPropertyDescriptor(DM.prototype, "decalMap") || Object.defineProperty(DM.prototype, "decalMap", (0, uM.g)("StandardMaterial", "decalMap"))
  },
  41477: (MM, rM, iM) => {
    function OM(MM) {
      return class extends MM {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    iM.d(rM, {
      e: () => OM
    })
  },
  41472: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM
    });
    class OM {
      constructor(MM, rM) {
        this._webGL = {
          load: MM,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: rM,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(MM) {
        const rM = 1 === MM ? this._webGPU : this._webGL;
        return rM.loaded ? void 0 : async () => {
          await this._loadAsync(rM)
        }
      }
      async _loadAsync(MM) {
        if (MM.loaded) return;
        let rM = MM.loadPromise;
        const iM = null === rM;
        iM && (rM = Promise.all(MM.load()), MM.loadPromise = rM);
        let OM = !1;
        try {
          await rM, OM = !0
        } finally {
          iM && this._completeLoad(MM, OM)
        }
      }
      _completeLoad(MM, rM) {
        MM.loaded = rM, MM.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);