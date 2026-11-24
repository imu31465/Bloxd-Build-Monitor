export const id = 261;
export const ids = [261];
export const modules = {
  40322: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => sD
    });
    var pD = wD(39930);

    function sD(DD) {
      return class extends DD {
        constructor() {
          super(...arguments);
          const DD = new.target;
          if (!DD[Symbol.metadata]) {
            const zD = Object.getPrototypeOf(DD)?.[Symbol.metadata];
            DD[Symbol.metadata] = zD ? Object.create(zD) : {}
          }
          const zD = (0, pD.e)(DD[Symbol.metadata]);
          zD._imageProcessingConfiguration || (zD._imageProcessingConfiguration = {
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
          DD !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !DD && this.Ul ? this._imageProcessingConfiguration = this.Ul().imageProcessingConfiguration : DD && (this._imageProcessingConfiguration = DD), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
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
  40211: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      e: () => sD
    });
    var pD = wD(40217);

    function sD(DD) {
      return class extends DD {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class KD extends pD.d {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  40285: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => AD
    });
    var pD = wD(39921),
      sD = wD(40220),
      KD = wD(39927),
      rD = wD(40266),
      LD = wD(40217),
      cD = wD(40291),
      gD = wD(40254);
    class RD extends LD.d {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let AD = (() => {
      var DD, zD, wD, LD;
      let AD, UD, fD, ID, BD, GD, hD = cD.c,
        nD = [],
        MD = [],
        OD = [],
        JD = [],
        ED = [],
        QD = [],
        XD = [],
        VD = [],
        PD = [],
        CD = [],
        xD = [],
        TD = [];
      return DD = class extends hD {
        get texture() {
          return (0, pD.c)(this, zD, "f")
        }
        set texture(DD) {
          (0, pD.g)(this, zD, DD, "f")
        }
        get normalBlendMethod() {
          return (0, pD.c)(this, wD, "f")
        }
        set normalBlendMethod(DD) {
          (0, pD.g)(this, wD, DD, "f")
        }
        get isEnabled() {
          return (0, pD.c)(this, LD, "f")
        }
        set isEnabled(DD) {
          (0, pD.g)(this, LD, DD, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(DD) {
          let KD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(DD, "DetailMap", 140, new RD, KD), this._texture = null, zD.set(this, (0, pD.m)(this, nD, void 0)), this.diffuseBlendLevel = ((0, pD.m)(this, MD), (0, pD.m)(this, OD, 1)), this.roughnessBlendLevel = ((0, pD.m)(this, JD), (0, pD.m)(this, ED, 1)), this.bumpLevel = ((0, pD.m)(this, QD), (0, pD.m)(this, XD, 1)), this._normalBlendMethod = ((0, pD.m)(this, VD), sD.b.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), wD.set(this, (0, pD.m)(this, PD, void 0)), this._isEnabled = ((0, pD.m)(this, CD), !1), LD.set(this, (0, pD.m)(this, xD, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, pD.m)(this, TD), this._internalMarkAllSubMeshesAsTexturesDirty = DD._dirtyCallbacks[1]
        }
        isReadyForSubMesh(DD, zD, wD) {
          return !this._isEnabled || !(DD._areTexturesDirty && zD.texturesEnabled && wD.getCaps().standardDerivatives && this._texture && rD.d.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(DD, zD) {
          if (this._isEnabled) {
            DD.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const wD = zD.iI();
            DD._areTexturesDirty && (wD.getCaps().standardDerivatives && this._texture && rD.d.DetailTextureEnabled && this._isEnabled ? ((0, gD.eb)(this._texture, DD, "DETAIL"), DD.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : DD.DETAIL = !1)
          } else DD.DETAIL = !1
        }
        bindForSubMesh(DD, zD) {
          if (!this._isEnabled) return;
          const wD = this._material.isFrozen;
          DD.useUbo && wD && DD.isSync || this._texture && rD.d.DetailTextureEnabled && (DD.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, gD.z)(this._texture, DD, "detail")), zD.texturesEnabled && this._texture && rD.d.DetailTextureEnabled && DD.setTexture("detailSampler", this._texture)
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
      }, zD = new WeakMap, wD = new WeakMap, LD = new WeakMap, (() => {
        const zD = "function" === typeof Symbol && Symbol.metadata ? Object.create(hD[Symbol.metadata] ?? null) : void 0;
        AD = [(0, KD.w)("detailTexture"), (0, KD.e)("_markAllSubMeshesAsTexturesDirty")], UD = [(0, KD.C)()], fD = [(0, KD.C)()], ID = [(0, KD.C)()], BD = [(0, KD.C)(), (0, KD.e)("_markAllSubMeshesAsTexturesDirty")], GD = [(0, KD.C)(), (0, KD.e)("_markAllSubMeshesAsTexturesDirty")], (0, pD.i)(DD, null, AD, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: DD => "texture" in DD,
            get: DD => DD.texture,
            set: (DD, zD) => {
              DD.texture = zD
            }
          },
          metadata: zD
        }, nD, MD), (0, pD.i)(DD, null, BD, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: DD => "normalBlendMethod" in DD,
            get: DD => DD.normalBlendMethod,
            set: (DD, zD) => {
              DD.normalBlendMethod = zD
            }
          },
          metadata: zD
        }, PD, CD), (0, pD.i)(DD, null, GD, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: DD => "isEnabled" in DD,
            get: DD => DD.isEnabled,
            set: (DD, zD) => {
              DD.isEnabled = zD
            }
          },
          metadata: zD
        }, xD, TD), (0, pD.i)(null, null, UD, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: DD => "diffuseBlendLevel" in DD,
            get: DD => DD.diffuseBlendLevel,
            set: (DD, zD) => {
              DD.diffuseBlendLevel = zD
            }
          },
          metadata: zD
        }, OD, JD), (0, pD.i)(null, null, fD, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: DD => "roughnessBlendLevel" in DD,
            get: DD => DD.roughnessBlendLevel,
            set: (DD, zD) => {
              DD.roughnessBlendLevel = zD
            }
          },
          metadata: zD
        }, ED, QD), (0, pD.i)(null, null, ID, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: DD => "bumpLevel" in DD,
            get: DD => DD.bumpLevel,
            set: (DD, zD) => {
              DD.bumpLevel = zD
            }
          },
          metadata: zD
        }, XD, VD), zD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zD
        })
      })(), DD
    })()
  },
  40217: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    class pD {
      constructor(DD) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = DD, DD)
          for (const zD in DD) Object.prototype.hasOwnProperty.call(DD, zD) && this._setDefaultValue(zD)
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
        for (let zD = 0; zD < this._keys.length; zD++) {
          const wD = this._keys[zD];
          if (this[wD] !== DD[wD]) return !1
        }
        return !0
      }
      cloneTo(DD) {
        this._keys.length !== DD._keys.length && (DD._keys = this._keys.slice(0));
        for (let zD = 0; zD < this._keys.length; zD++) {
          const wD = this._keys[zD];
          DD[wD] = this[wD]
        }
      }
      reset() {
        for (const DD of this._keys) this._setDefaultValue(DD)
      }
      _setDefaultValue(DD) {
        const zD = this._externalProperties?.[DD]?.type ?? typeof this[DD],
          wD = this._externalProperties?.[DD]?.default;
        switch (zD) {
          case "number":
            this[DD] = wD ?? 0;
            break;
          case "string":
            this[DD] = wD ?? "";
            break;
          default:
            this[DD] = wD ?? !1
        }
      }
      toString() {
        let DD = "";
        for (let zD = 0; zD < this._keys.length; zD++) {
          const wD = this._keys[zD],
            pD = this[wD];
          switch (typeof pD) {
            case "number":
            case "string":
              DD += "#define " + wD + " " + pD + "\n";
              break;
            default:
              pD && (DD += "#define " + wD + "\n")
          }
        }
        return DD
      }
    }
  },
  40307: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD,
      h: () => rD,
      k: () => KD
    });
    var pD, sD = wD(37079);

    function KD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const pD = zD(DD);
      if (!Number.isInteger(pD) || pD < 0 || pD > wD) throw new Error(`Invalid geometry object ID ${pD} for mesh "${DD.name}". Object IDs must be integers between 0 and 0x${wD.toString(16).toUpperCase()}.`);
      return pD
    }

    function rD(DD, zD) {
      const wD = zD(DD);
      if (!Number.isInteger(wD) || wD < 0 || wD > 255 || 0 !== wD && 0 === (63 & wD)) throw new Error(`Invalid geometry mesh-blending tag ${wD} for mesh "${DD.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return wD
    }! function(DD) {
      DD[DD.Zero = 0] = "Zero", DD[DD.One = 1] = "One", DD[DD.MaxViewZ = 2] = "MaxViewZ", DD[DD.NoClear = 3] = "NoClear"
    }(pD || (pD = {}));
    class LD {
      static CreateConfiguration(DD) {
        return LD._Configurations[DD] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: sD.e.Zero(),
          currentViewProjection: sD.e.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, LD._Configurations[DD]
      }
      static DeleteConfiguration(DD) {
        delete LD._Configurations[DD]
      }
      static GetConfiguration(DD) {
        return LD._Configurations[DD]
      }
      static _PrepareConfiguration(DD, zD, wD) {
        const pD = LD._Configurations[DD];
        pD._attachments = zD, pD._colorAttachments = wD, pD._mrtCount = zD.length;
        let sD = "#define PREPASS\n";
        for (const KD of LD.GeometryTextureDescriptions) {
          const DD = pD.defines[KD.defineIndex];
          void 0 !== DD && (sD += `#define ${KD.define}\n#define ${KD.defineIndex} ${DD}\n`)
        }
        pD.objectIdIsRedFormat && (sD += "#define PREPASS_OBJECT_ID_R8\n"), pD._defines = sD + `#define SCENE_MRT_COUNT ${zD.length}\n`
      }
      static _PrepareStringDefines(DD, zD) {
        const wD = LD._Configurations[DD];
        return !!wD?._defines && (zD.push(wD._defines), !0)
      }
      static _BindAttachmentsForEffect(DD, zD) {
        const wD = LD._Configurations[DD.currentRenderPassId];
        return !wD?._attachments || (DD.bindAttachments(zD._multiTarget ? wD._attachments : wD._colorAttachments), zD._multiTarget || void 0 !== wD.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(DD) {
        const zD = LD._Configurations[DD.currentRenderPassId];
        zD?._colorAttachments && DD.bindAttachments(zD._colorAttachments)
      }
      static _BindColorAttachments(DD) {
        const zD = LD._Configurations[DD.currentRenderPassId];
        return !zD?._colorAttachments || (DD.bindAttachments(zD._colorAttachments), void 0 !== zD.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(DD) {
        const zD = LD._Configurations[DD.currentRenderPassId];
        return !zD?._colorAttachments || void 0 !== zD.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(DD, zD) {
        const wD = LD._Configurations[DD.currentRenderPassId];
        if (!wD) return;
        const pD = DD.getAlphaMode(),
          sD = void 0 === wD.defines.PREPASS_COLOR_INDEX || 2 === pD || 1 === pD || 17 === pD;
        zD.setFloat("geometryZeroAlphaDiscard", sD ? 1 : 0)
      }
      static AddUniformsAndSamplers(DD, zD) {
        DD.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(DD, zD) {
        for (const wD of zD)
          if (wD.QE)
            for (const zD of wD.QE) zD._removeDrawWrapper(DD)
      }
      static PrepareDefines(DD, zD, wD) {
        if (!wD._arePrePassDirty) return;
        const pD = LD._Configurations[DD];
        if (!pD) return;
        wD.PREPASS = !0;
        let sD = 0;
        for (let KD = 0; KD < LD.GeometryTextureDescriptions.length; KD++) {
          const DD = LD.GeometryTextureDescriptions[KD],
            zD = DD.define,
            rD = DD.defineIndex,
            cD = pD.defines[rD];
          void 0 !== cD ? (wD[zD] = !0, wD[rD] = cD, sD++) : (wD[zD] = !1, delete wD[rD])
        }
        wD.PREPASS_OBJECT_ID_R8 = pD.objectIdIsRedFormat, wD.SCENE_MRT_COUNT = pD._mrtCount ?? sD, wD.BONES_VELOCITY_ENABLED = zD.useBones && zD.computeBonesUsingShaders && zD.skeleton && !zD.skeleton.isUsingTextureForMatrices && -1 === pD.excludedSkinnedMesh.indexOf(zD)
      }
      static Bind(DD, zD, wD, pD, sD) {
        const cD = LD._Configurations[DD];
        if (!cD) return;
        const gD = wD.Ul(),
          RD = gD.iI();
        if (cD.reverseCulling && RD.setStateCullFaceType(gD._mirroredCameraPosition ? sD.cullBackFaces : !sD.cullBackFaces), void 0 !== cD.defines.PREPASS_OBJECT_ID_INDEX) {
          const DD = cD.objectIdIsRedFormat ? 255 : 16777215;
          let pD = wD.uniqueId;
          if (cD.objectIdProvider) pD = KD(wD, cD.objectIdProvider, DD);
          else if (pD > DD) throw new Error(`Invalid geometry object ID ${pD} for mesh "${wD.name}". Object IDs must be integers between 0 and 0x${DD.toString(16).toUpperCase()}.`);
          zD.setFloat("objectId", pD)
        }
        if (void 0 !== cD.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const DD = cD.meshBlendTagProvider ? rD(wD, cD.meshBlendTagProvider) : wD.meshBlendingTag;
          zD.setInt("meshBlendTag", DD)
        }
        if (void 0 !== cD.defines.PREPASS_VELOCITY_INDEX || void 0 !== cD.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const DD = cD._currentWorldMatrices ?? (cD._currentWorldMatrices = {}),
            sD = cD._worldMatrixFrameIds ?? (cD._worldMatrixFrameIds = {});
          if (DD[wD.uniqueId] || (DD[wD.uniqueId] = pD.clone(), cD.previousWorldMatrices[wD.uniqueId] = pD.clone()), sD[wD.uniqueId] !== RD.frameId && (cD.previousWorldMatrices[wD.uniqueId].pC(DD[wD.uniqueId]), sD[wD.uniqueId] = RD.frameId), DD[wD.uniqueId].pC(pD), -1 === cD.lastUpdateFrameId ? (cD.lastUpdateFrameId = RD.frameId, cD.previousViewProjection.pC(gD.getTransformMatrix()), cD.currentViewProjection.pC(gD.getTransformMatrix())) : cD.currentViewProjection.updateFlag !== gD.getTransformMatrix().updateFlag ? (cD.lastUpdateFrameId = RD.frameId, cD.previousViewProjection.pC(cD.currentViewProjection), cD.currentViewProjection.pC(gD.getTransformMatrix())) : cD.lastUpdateFrameId !== RD.frameId && (cD.lastUpdateFrameId = RD.frameId, cD.previousViewProjection.pC(cD.currentViewProjection)), zD.setMatrix("previousWorld", cD.previousWorldMatrices[wD.uniqueId]), zD.setMatrix("previousViewProjection", cD.previousViewProjection), wD.useBones && wD.computeBonesUsingShaders && wD.skeleton) {
            const DD = wD.skeleton;
            if (!DD.isUsingTextureForMatrices || -1 === zD.getUniformIndex("boneTextureInfo")) {
              const pD = DD.getTransformMatrices(wD);
              pD && (cD.previousBones[wD.uniqueId] || (cD.previousBones[wD.uniqueId] = pD.slice()), zD.setMatrices("mPreviousBones", cD.previousBones[wD.uniqueId]), cD.previousBones[wD.uniqueId].set(pD))
            }
          }
        }
      }
    }
    LD.GeometryTextureDescriptions = [{
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
    }], LD._Configurations = {}
  },
  40291: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => UD,
      g: () => ID
    });
    var pD = wD(39921),
      sD = wD(39927),
      KD = wD(39813),
      rD = wD(39776);
    const LD = new RegExp("^([gimus]+)!");
    class cD {
      constructor(DD) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = DD, this._scene = DD.Ul(), this._engine = this._scene.iI()
      }
      _addPlugin(DD) {
        for (let pD = 0; pD < this._plugins.length; ++pD)
          if (this._plugins[pD].name === DD.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !DD.isCompatible(this._material.shaderLanguage)) throw `The plugin "${DD.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const zD = DD.getClassName();
        cD._MaterialPluginClassToMainDefine[zD] || (cD._MaterialPluginClassToMainDefine[zD] = "MATERIALPLUGIN_" + ++cD._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (DD, zD) => this._handlePluginEvent(DD, zD), this._plugins.push(DD), this._plugins.sort(((DD, zD) => DD.priority - zD.priority)), this._codeInjectionPoints = {};
        const wD = {};
        wD[cD._MaterialPluginClassToMainDefine[zD]] = {
          type: "boolean",
          default: !0
        };
        for (const pD of this._plugins) pD.collectDefines(wD), this._collectPointNames("vertex", pD.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", pD.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = wD, !0
      }
      _activatePlugin(DD) {
        -1 === this._activePlugins.indexOf(DD) && (this._activePlugins.push(DD), this._activePlugins.sort(((DD, zD) => DD.priority - zD.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), DD.registerForExtraEvents && (this._activePluginsForExtraEvents.push(DD), this._activePluginsForExtraEvents.sort(((DD, zD) => DD.priority - zD.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(DD) {
        for (let zD = 0; zD < this._plugins.length; ++zD)
          if (this._plugins[zD].name === DD) return this._plugins[zD];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(DD) {
        let zD = !0;
        for (const wD of this._activePlugins) zD = zD && wD.isReadyForSubMesh(DD.defines, this._scene, this._engine, DD.subMesh);
        DD.isReadyForSubMesh = zD
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(DD) {
        for (const zD of this._activePlugins) zD.prepareDefinesBeforeAttributes(DD.defines, this._scene, DD.mesh)
      }
      _handlePluginEventPrepareDefines(DD) {
        for (const zD of this._activePlugins) zD.prepareDefines(DD.defines, this._scene, DD.mesh)
      }
      _handlePluginEventHardBindForSubMesh(DD) {
        for (const zD of this._activePluginsForExtraEvents) zD.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, DD.subMesh)
      }
      _handlePluginEventBindForSubMesh(DD) {
        for (const zD of this._activePlugins) zD.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, DD.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(DD) {
        let zD = !1;
        for (const wD of this._activePluginsForExtraEvents)
          if (zD = wD.hasRenderTargetTextures(), zD) break;
        DD.hasRenderTargetTextures = zD
      }
      _handlePluginEventFillRenderTargetTextures(DD) {
        for (const zD of this._activePluginsForExtraEvents) zD.fillRenderTargetTextures(DD.renderTargets)
      }
      _handlePluginEvent(DD, zD) {
        switch (DD) {
          case 512: {
            const DD = zD;
            for (const zD of this._activePlugins) zD.getActiveTextures(DD.activeTextures);
            break
          }
          case 256: {
            const DD = zD;
            for (const zD of this._activePlugins) zD.getAnimatables(DD.animatables);
            break
          }
          case 1024: {
            const DD = zD;
            let wD = !1;
            for (const zD of this._activePlugins)
              if (wD = zD.hasTexture(DD.texture), wD) break;
            DD.hasTexture = wD;
            break
          }
          case 2: {
            const DD = zD;
            for (const zD of this._plugins) zD.dispose(DD.forceDisposeTextures);
            break
          }
          case 4:
            zD.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const DD = zD;
            for (const zD of this._activePlugins) DD.fallbackRank = zD.addFallbacks(DD.defines, DD.fallbacks, DD.fallbackRank), zD.getAttributes(DD.attributes, this._scene, DD.mesh);
            this._uniformList.length > 0 && DD.uniforms.push(...this._uniformList), this._samplerList.length > 0 && DD.samplers.push(...this._samplerList), this._uboList.length > 0 && DD.uniformBuffersNames.push(...this._uboList), DD.customCode = this._injectCustomCode(DD, DD.customCode);
            break
          }
          case 8: {
            const DD = zD;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const wD = 1 === this._material.shaderLanguage;
            for (const zD of this._plugins) {
              const pD = zD.getUniforms(this._material.shaderLanguage);
              if (pD) {
                if (pD.ubo)
                  for (const zD of pD.ubo) {
                    if (zD.size && zD.type) {
                      const pD = zD.arraySize ?? 0;
                      if (DD.ubo.addUniform(zD.name, zD.size, pD), wD) {
                        let DD;
                        switch (zD.type) {
                          case "mat4":
                            DD = "mat4x4f";
                            break;
                          case "float":
                            DD = "f32";
                            break;
                          default:
                            DD = `${zD.type}f`
                        }
                        this._uboDeclaration += pD > 0 ? `uniform ${zD.name}: array<${DD}, ${pD}>;\n` : `uniform ${zD.name}: ${DD};\n`
                      } else this._uboDeclaration += `${zD.type} ${zD.name}${pD>0?`[${pD}]`:""};\n`
                    }
                    this._uniformList.push(zD.name)
                  }
                pD.vertex && (this._vertexDeclaration += pD.vertex + "\n"), pD.fragment && (this._fragmentDeclaration += pD.fragment + "\n"), pD.externalUniforms && this._uniformList.push(...pD.externalUniforms)
              }
              zD.getSamplers(this._samplerList), zD.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(DD, zD) {
        if (zD)
          for (const wD in zD) this._codeInjectionPoints[DD] || (this._codeInjectionPoints[DD] = {}), this._codeInjectionPoints[DD][wD] = !0
      }
      _injectCustomCode(DD, zD) {
        return (wD, pD) => {
          zD && (pD = zD(wD, pD)), this._uboDeclaration && (pD = pD.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (pD = pD.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (pD = pD.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const sD = this._codeInjectionPoints?.[wD];
          if (!sD) return pD;
          let cD = null;
          for (let zD in sD) {
            let sD = "";
            for (const pD of this._activePlugins) {
              const LD = this._material.shaderLanguage;
              let gD = pD.getCustomCode(wD, LD)?.[zD];
              gD && (pD.resolveIncludes && (null === cD && (cD = {
                defines: [],
                indexParameters: DD.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: rD.e.GetShadersRepository(LD),
                includesShadersStore: rD.e.GetIncludesShadersStore(LD),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                OpD: this._engine.OpD,
                processCodeAfterIncludes: void 0
              }), cD.isFragment = "fragment" === wD, (0, KD.h)(gD, cD, (DD => gD = DD))), sD += gD + "\n")
            }
            if (sD.length > 0)
              if ("!" === zD.charAt(0)) {
                zD = zD.substring(1);
                let DD = "g";
                if ("!" === zD.charAt(0)) DD = "", zD = zD.substring(1);
                else {
                  const wD = LD.exec(zD);
                  wD && wD.length >= 2 && (DD = wD[1], zD = zD.substring(DD.length + 1))
                }
                DD.indexOf("g") < 0 && (DD += "g");
                const wD = new RegExp(zD, DD);
                let KD = wD.exec(pD);
                for (; null !== KD;) {
                  const {
                    index: DD
                  } = KD, zD = gD(sD, KD);
                  pD = pD.substring(0, DD) + zD + pD.substring(DD + KD[0].length), wD.lastIndex = DD + zD.length, KD = wD.exec(pD)
                }
              } else {
                const DD = "#define " + zD;
                pD = pD.replace(DD, "\n" + sD + "\n" + DD)
              }
          }
          return pD
        }
      }
    }
    cD._MaterialPluginClassToMainDefine = {}, cD._MaterialPluginCounter = 0;

    function gD(DD, zD) {
      return DD.replace(/\$(\d+)/g, ((DD, wD) => {
        const pD = Number(wD);
        return pD < zD.length ? zD[pD] : ""
      }))
    }
    var RD = wD(39939),
      AD = wD(37134);
    let UD = (() => {
        var DD;
        let zD, wD, KD, rD, LD = [],
          gD = [],
          AD = [],
          UD = [],
          fD = [],
          ID = [],
          BD = [],
          GD = [];
        return DD = class {
          isCompatible(DD) {
            return 0 === DD
          }
          _enable(DD) {
            DD && this._pluginManager._activatePlugin(this)
          }
          constructor(DD, zD, wD, sD) {
            let KD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              rD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              RD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, pD.m)(this, LD, void 0), this.priority = ((0, pD.m)(this, gD), (0, pD.m)(this, AD, 500)), this.resolveIncludes = ((0, pD.m)(this, UD), (0, pD.m)(this, fD, !1)), this.registerForExtraEvents = ((0, pD.m)(this, ID), (0, pD.m)(this, BD, !1)), this.doNotSerialize = ((0, pD.m)(this, GD), !1), this._material = DD, this.name = zD, this.priority = wD, this.resolveIncludes = RD, DD.pluginManager || (DD.pluginManager = new cD(DD), DD.Bl.add((() => {
              DD.pluginManager = void 0
            }))), this._pluginDefineNames = sD, this._pluginManager = DD.pluginManager, KD && this._pluginManager._addPlugin(this), rD && this._enable(!0), this.markAllDefinesAsDirty = DD._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(DD, zD, wD, pD) {
            return !0
          }
          hardBindForSubMesh(DD, zD, wD, pD) {}
          bindForSubMesh(DD, zD, wD, pD) {}
          dispose(DD) {}
          getCustomCode(DD) {
            return null
          }
          collectDefines(DD) {
            if (this._pluginDefineNames)
              for (const zD of Object.keys(this._pluginDefineNames)) {
                if ("_" === zD[0]) continue;
                const wD = typeof this._pluginDefineNames[zD];
                DD[zD] = {
                  type: "number" === wD ? "number" : "string" === wD ? "string" : "boolean" === wD ? "boolean" : "object",
                  default: this._pluginDefineNames[zD]
                }
              }
          }
          prepareDefinesBeforeAttributes(DD, zD, wD) {}
          prepareDefines(DD, zD, wD) {}
          hasTexture(DD) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(DD) {}
          getActiveTextures(DD) {}
          getAnimatables(DD) {}
          addFallbacks(DD, zD, wD) {
            return wD
          }
          getSamplers(DD) {}
          getAttributes(DD, zD, wD) {}
          getUniformBuffersNames(DD) {}
          getUniforms() {
            return {}
          }
          copyTo(DD) {
            RD.d.Clone((() => DD), this)
          }
          serialize() {
            return RD.d.Serialize(this)
          }
          parse(DD, zD, wD) {
            RD.d.Parse((() => this), DD, zD, wD)
          }
        }, (() => {
          const cD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zD = [(0, sD.C)()], wD = [(0, sD.C)()], KD = [(0, sD.C)()], rD = [(0, sD.C)()], (0, pD.i)(null, null, zD, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: DD => "name" in DD,
              get: DD => DD.name,
              set: (DD, zD) => {
                DD.name = zD
              }
            },
            metadata: cD
          }, LD, gD), (0, pD.i)(null, null, wD, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: DD => "priority" in DD,
              get: DD => DD.priority,
              set: (DD, zD) => {
                DD.priority = zD
              }
            },
            metadata: cD
          }, AD, UD), (0, pD.i)(null, null, KD, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: DD => "resolveIncludes" in DD,
              get: DD => DD.resolveIncludes,
              set: (DD, zD) => {
                DD.resolveIncludes = zD
              }
            },
            metadata: cD
          }, fD, ID), (0, pD.i)(null, null, rD, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: DD => "registerForExtraEvents" in DD,
              get: DD => DD.registerForExtraEvents,
              set: (DD, zD) => {
                DD.registerForExtraEvents = zD
              }
            },
            metadata: cD
          }, BD, GD), cD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cD
          })
        })(), DD
      })(),
      fD = !1;

    function ID() {
      fD || (fD = !0, (0, AD.i)("BABYLON.MaterialPluginBase", UD))
    }
  },
  40208: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD
    });
    class pD {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(DD) {
        DD.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(DD) {}
      bindForSubMesh(DD, zD, wD, pD, sD) {
        if (zD.prePassRenderer && zD.prePassRenderer.enabled && zD.prePassRenderer.currentRTisSceneRT && (-1 !== zD.prePassRenderer.getIndex(2) || -1 !== zD.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[wD.uniqueId] || (this.previousWorldMatrices[wD.uniqueId] = pD.clone()), this.previousViewProjection || (this.previousViewProjection = zD.getTransformMatrix().clone(), this.currentViewProjection = zD.getTransformMatrix().clone());
          const sD = zD.iI();
          this.currentViewProjection.updateFlag !== zD.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = sD.frameId, this.previousViewProjection.pC(this.currentViewProjection), this.currentViewProjection.pC(zD.getTransformMatrix())) : this._lastUpdateFrameId !== sD.frameId && (this._lastUpdateFrameId = sD.frameId, this.previousViewProjection.pC(this.currentViewProjection)), DD.setMatrix("previousWorld", this.previousWorldMatrices[wD.uniqueId]), DD.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[wD.uniqueId] = pD.clone()
        }
      }
    }
  },
  40318: (DD, zD, wD) => {
    function pD(DD) {
      return class extends DD {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    wD.d(zD, {
      e: () => pD
    })
  },
  40192: (DD, zD, wD) => {
    wD.d(zD, {
      StandardMaterial: () => pD.e
    });
    var pD = wD(40199);
    (0, pD.d)()
  },
  40199: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => lD,
      e: () => SD
    });
    var pD = wD(39921),
      sD = wD(39927),
      KD = wD(40043),
      rD = wD(40022),
      LD = wD(37273),
      cD = wD(40066),
      gD = wD(40208),
      RD = wD(40211),
      AD = wD(40046),
      UD = wD(40220),
      fD = wD(40217),
      ID = wD(40270),
      BD = wD(40266),
      GD = wD(40278),
      hD = wD(40285),
      nD = wD(40263),
      MD = wD(40299),
      OD = wD(40254),
      JD = wD(39939),
      ED = wD(40302),
      QD = wD(40307),
      XD = wD(40315),
      VD = wD(40318),
      PD = wD(40322),
      CD = wD(37134),
      xD = wD(39808);
    const TD = {
      effect: null,
      subMesh: null
    };
    class bD extends((0, VD.e)((0, XD.b)(fD.d))) {}
    class jD extends((0, RD.e)(bD)) {
      constructor(DD) {
        super(DD), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class dD extends((0, PD.b)(ID.d)) {}
    let SD = (() => {
        var DD, zD, RD, fD, XD, VD, PD, CD, xD, bD, SD, iD, lD, WD, ND, ZD, yD, kD, mD, eD, oD, aD, uD, vD, tD, FD, YD, HD, qD, Dz, zz, wz, pz;
        let sz, Kz, rz, Lz, cz, gz, Rz, Az, Uz, fz, Iz, Bz, Gz, hz, nz, Mz, Oz, Jz, Ez, Qz, Xz, Vz, Pz, Cz, xz, Tz, bz, jz, dz, Sz, iz, lz, Wz, Nz, Zz, yz, kz, mz, ez, oz, az, uz, vz, tz, Fz, Yz, Hz, qz, Dw, zw, ww, pw, sw, Kw, rw, Lw, gw, Rw, Aw, Uw, fw, Iw, Bw, Gw, hw, nw, Mw, Ow, Jw, Ew, Qw, Xw, Vw, Pw = dD,
          Cw = [],
          xw = [],
          Tw = [],
          bw = [],
          jw = [],
          dw = [],
          Sw = [],
          iw = [],
          lw = [],
          Ww = [],
          Nw = [],
          Zw = [],
          yw = [],
          kw = [],
          mw = [],
          ew = [],
          ow = [],
          aw = [],
          uw = [],
          vw = [],
          tw = [],
          Fw = [],
          Yw = [],
          Hw = [],
          qw = [],
          Dp = [],
          zp = [],
          wp = [],
          pp = [],
          sp = [],
          Kp = [],
          rp = [],
          Lp = [],
          cp = [],
          gp = [],
          Rp = [],
          Ap = [],
          Up = [],
          fp = [],
          Ip = [],
          Bp = [],
          Gp = [],
          hp = [],
          np = [],
          Mp = [],
          Op = [],
          Jp = [],
          Ep = [],
          Qp = [],
          Xp = [],
          Vp = [],
          Pp = [],
          Cp = [],
          xp = [],
          Tp = [],
          bp = [],
          jp = [],
          dp = [],
          Sp = [],
          ip = [],
          lp = [],
          Wp = [],
          Np = [],
          Zp = [],
          yp = [],
          kp = [],
          mp = [],
          ep = [],
          op = [],
          ap = [],
          vp = [],
          tp = [],
          Fp = [],
          Yp = [],
          Hp = [],
          qp = [],
          Ds = [],
          zs = [],
          ws = [],
          ps = [],
          ss = [],
          Ks = [],
          rs = [],
          Ls = [],
          cs = [],
          gs = [],
          Rs = [],
          As = [],
          Us = [],
          fs = [],
          Is = [],
          Bs = [],
          Gs = [],
          hs = [],
          ns = [],
          Ms = [],
          Os = [],
          Es = [],
          Qs = [],
          Xs = [],
          Vs = [],
          Ps = [],
          Cs = [],
          xs = [],
          Ts = [],
          bs = [],
          ds = [],
          Ss = [],
          is = [],
          ls = [],
          Ws = [],
          Ns = [],
          Zs = [],
          ys = [],
          ks = [],
          ms = [],
          es = [],
          os = [],
          as = [],
          us = [],
          vs = [],
          ts = [],
          Fs = [],
          Ys = [],
          Hs = [],
          qs = [],
          DK = [],
          zK = [],
          wK = [],
          pK = [],
          sK = [],
          KK = [],
          rK = [],
          LK = [],
          cK = [],
          gK = [],
          RK = [],
          AK = [],
          UK = [],
          fK = [],
          IK = [],
          BK = [],
          GK = [],
          hK = [],
          nK = [],
          MK = [];
        return DD = class extends Pw {
          get diffuseTexture() {
            return (0, pD.c)(this, zD, "f")
          }
          set diffuseTexture(DD) {
            (0, pD.g)(this, zD, DD, "f")
          }
          get ambientTexture() {
            return (0, pD.c)(this, RD, "f")
          }
          set ambientTexture(DD) {
            (0, pD.g)(this, RD, DD, "f")
          }
          get opacityTexture() {
            return (0, pD.c)(this, fD, "f")
          }
          set opacityTexture(DD) {
            (0, pD.g)(this, fD, DD, "f")
          }
          get reflectionTexture() {
            return (0, pD.c)(this, XD, "f")
          }
          set reflectionTexture(DD) {
            (0, pD.g)(this, XD, DD, "f")
          }
          get emissiveTexture() {
            return (0, pD.c)(this, VD, "f")
          }
          set emissiveTexture(DD) {
            (0, pD.g)(this, VD, DD, "f")
          }
          get specularTexture() {
            return (0, pD.c)(this, PD, "f")
          }
          set specularTexture(DD) {
            (0, pD.g)(this, PD, DD, "f")
          }
          get bumpTexture() {
            return (0, pD.c)(this, CD, "f")
          }
          set bumpTexture(DD) {
            (0, pD.g)(this, CD, DD, "f")
          }
          get lightmapTexture() {
            return (0, pD.c)(this, xD, "f")
          }
          set lightmapTexture(DD) {
            (0, pD.g)(this, xD, DD, "f")
          }
          get refractionTexture() {
            return (0, pD.c)(this, bD, "f")
          }
          set refractionTexture(DD) {
            (0, pD.g)(this, bD, DD, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, pD.c)(this, SD, "f")
          }
          set useAlphaFromDiffuseTexture(DD) {
            (0, pD.g)(this, SD, DD, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, pD.c)(this, iD, "f")
          }
          set useEmissiveAsIllumination(DD) {
            (0, pD.g)(this, iD, DD, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, pD.c)(this, lD, "f")
          }
          set linkEmissiveWithDiffuse(DD) {
            (0, pD.g)(this, lD, DD, "f")
          }
          get useSpecularOverAlpha() {
            return (0, pD.c)(this, WD, "f")
          }
          set useSpecularOverAlpha(DD) {
            (0, pD.g)(this, WD, DD, "f")
          }
          get useReflectionOverAlpha() {
            return (0, pD.c)(this, ND, "f")
          }
          set useReflectionOverAlpha(DD) {
            (0, pD.g)(this, ND, DD, "f")
          }
          get disableLighting() {
            return (0, pD.c)(this, ZD, "f")
          }
          set disableLighting(DD) {
            (0, pD.g)(this, ZD, DD, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, pD.c)(this, yD, "f")
          }
          set useObjectSpaceNormalMap(DD) {
            (0, pD.g)(this, yD, DD, "f")
          }
          get useParallax() {
            return (0, pD.c)(this, kD, "f")
          }
          set useParallax(DD) {
            (0, pD.g)(this, kD, DD, "f")
          }
          get useParallaxOcclusion() {
            return (0, pD.c)(this, mD, "f")
          }
          set useParallaxOcclusion(DD) {
            (0, pD.g)(this, mD, DD, "f")
          }
          get roughness() {
            return (0, pD.c)(this, eD, "f")
          }
          set roughness(DD) {
            (0, pD.g)(this, eD, DD, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, pD.c)(this, oD, "f")
          }
          set useLightmapAsShadowmap(DD) {
            (0, pD.g)(this, oD, DD, "f")
          }
          get diffuseFresnelParameters() {
            return (0, pD.c)(this, aD, "f")
          }
          set diffuseFresnelParameters(DD) {
            (0, pD.g)(this, aD, DD, "f")
          }
          get opacityFresnelParameters() {
            return (0, pD.c)(this, uD, "f")
          }
          set opacityFresnelParameters(DD) {
            (0, pD.g)(this, uD, DD, "f")
          }
          get reflectionFresnelParameters() {
            return (0, pD.c)(this, vD, "f")
          }
          set reflectionFresnelParameters(DD) {
            (0, pD.g)(this, vD, DD, "f")
          }
          get refractionFresnelParameters() {
            return (0, pD.c)(this, tD, "f")
          }
          set refractionFresnelParameters(DD) {
            (0, pD.g)(this, tD, DD, "f")
          }
          get emissiveFresnelParameters() {
            return (0, pD.c)(this, FD, "f")
          }
          set emissiveFresnelParameters(DD) {
            (0, pD.g)(this, FD, DD, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, pD.c)(this, YD, "f")
          }
          set useReflectionFresnelFromSpecular(DD) {
            (0, pD.g)(this, YD, DD, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, pD.c)(this, HD, "f")
          }
          set useGlossinessFromSpecularMapAlpha(DD) {
            (0, pD.g)(this, HD, DD, "f")
          }
          get maxSimultaneousLights() {
            return (0, pD.c)(this, qD, "f")
          }
          set maxSimultaneousLights(DD) {
            (0, pD.g)(this, qD, DD, "f")
          }
          get invertNormalMapX() {
            return (0, pD.c)(this, Dz, "f")
          }
          set invertNormalMapX(DD) {
            (0, pD.g)(this, Dz, DD, "f")
          }
          get invertNormalMapY() {
            return (0, pD.c)(this, zz, "f")
          }
          set invertNormalMapY(DD) {
            (0, pD.g)(this, zz, DD, "f")
          }
          get twoSidedLighting() {
            return (0, pD.c)(this, wz, "f")
          }
          set twoSidedLighting(DD) {
            (0, pD.g)(this, wz, DD, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, pD.c)(this, pz, "f")
          }
          set applyDecalMapAfterDetailMap(DD) {
            (0, pD.g)(this, pz, DD, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(wD, sD) {
            super(wD, sD, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || DD.ForceGLSL), this._diffuseTexture = (0, pD.m)(this, Cw, null), zD.set(this, ((0, pD.m)(this, xw), (0, pD.m)(this, Tw, void 0))), this._ambientTexture = ((0, pD.m)(this, bw), (0, pD.m)(this, jw, null)), RD.set(this, ((0, pD.m)(this, dw), (0, pD.m)(this, Sw, void 0))), this._opacityTexture = ((0, pD.m)(this, iw), (0, pD.m)(this, lw, null)), fD.set(this, ((0, pD.m)(this, Ww), (0, pD.m)(this, Nw, void 0))), this._reflectionTexture = ((0, pD.m)(this, Zw), (0, pD.m)(this, yw, null)), XD.set(this, ((0, pD.m)(this, kw), (0, pD.m)(this, mw, void 0))), this._emissiveTexture = ((0, pD.m)(this, ew), (0, pD.m)(this, ow, null)), VD.set(this, ((0, pD.m)(this, aw), (0, pD.m)(this, uw, void 0))), this._specularTexture = ((0, pD.m)(this, vw), (0, pD.m)(this, tw, null)), PD.set(this, ((0, pD.m)(this, Fw), (0, pD.m)(this, Yw, void 0))), this._bumpTexture = ((0, pD.m)(this, Hw), (0, pD.m)(this, qw, null)), CD.set(this, ((0, pD.m)(this, Dp), (0, pD.m)(this, zp, void 0))), this._lightmapTexture = ((0, pD.m)(this, wp), (0, pD.m)(this, pp, null)), xD.set(this, ((0, pD.m)(this, sp), (0, pD.m)(this, Kp, void 0))), this._refractionTexture = ((0, pD.m)(this, rp), (0, pD.m)(this, Lp, null)), bD.set(this, ((0, pD.m)(this, cp), (0, pD.m)(this, gp, void 0))), this.ambientColor = ((0, pD.m)(this, Rp), (0, pD.m)(this, Ap, new LD.d(0, 0, 0))), this.diffuseColor = ((0, pD.m)(this, Up), (0, pD.m)(this, fp, new LD.d(1, 1, 1))), this.specularColor = ((0, pD.m)(this, Ip), (0, pD.m)(this, Bp, new LD.d(1, 1, 1))), this.emissiveColor = ((0, pD.m)(this, Gp), (0, pD.m)(this, hp, new LD.d(0, 0, 0))), this.specularPower = ((0, pD.m)(this, np), (0, pD.m)(this, Mp, 64)), this._useAlphaFromDiffuseTexture = ((0, pD.m)(this, Op), (0, pD.m)(this, Jp, !1)), SD.set(this, ((0, pD.m)(this, Ep), (0, pD.m)(this, Qp, void 0))), this._useEmissiveAsIllumination = ((0, pD.m)(this, Xp), (0, pD.m)(this, Vp, !1)), iD.set(this, ((0, pD.m)(this, Pp), (0, pD.m)(this, Cp, void 0))), this._linkEmissiveWithDiffuse = ((0, pD.m)(this, xp), (0, pD.m)(this, Tp, !1)), lD.set(this, ((0, pD.m)(this, bp), (0, pD.m)(this, jp, void 0))), this._useSpecularOverAlpha = ((0, pD.m)(this, dp), (0, pD.m)(this, Sp, !1)), WD.set(this, ((0, pD.m)(this, ip), (0, pD.m)(this, lp, void 0))), this._useReflectionOverAlpha = ((0, pD.m)(this, Wp), (0, pD.m)(this, Np, !1)), ND.set(this, ((0, pD.m)(this, Zp), (0, pD.m)(this, yp, void 0))), this._disableLighting = ((0, pD.m)(this, kp), (0, pD.m)(this, mp, !1)), ZD.set(this, ((0, pD.m)(this, ep), (0, pD.m)(this, op, void 0))), this._useObjectSpaceNormalMap = ((0, pD.m)(this, ap), (0, pD.m)(this, vp, !1)), yD.set(this, ((0, pD.m)(this, tp), (0, pD.m)(this, Fp, void 0))), this._useParallax = ((0, pD.m)(this, Yp), (0, pD.m)(this, Hp, !1)), kD.set(this, ((0, pD.m)(this, qp), (0, pD.m)(this, Ds, void 0))), this._useParallaxOcclusion = ((0, pD.m)(this, zs), (0, pD.m)(this, ws, !1)), mD.set(this, ((0, pD.m)(this, ps), (0, pD.m)(this, ss, void 0))), this.parallaxScaleBias = ((0, pD.m)(this, Ks), (0, pD.m)(this, rs, .05)), this._roughness = ((0, pD.m)(this, Ls), (0, pD.m)(this, cs, 0)), eD.set(this, ((0, pD.m)(this, gs), (0, pD.m)(this, Rs, void 0))), this.indexOfRefraction = ((0, pD.m)(this, As), (0, pD.m)(this, Us, .98)), this.invertRefractionY = ((0, pD.m)(this, fs), (0, pD.m)(this, Is, !0)), this.alphaCutOff = ((0, pD.m)(this, Bs), (0, pD.m)(this, Gs, .4)), this._useLightmapAsShadowmap = ((0, pD.m)(this, hs), (0, pD.m)(this, ns, !1)), oD.set(this, ((0, pD.m)(this, Ms), (0, pD.m)(this, Os, void 0))), this._diffuseFresnelParameters = ((0, pD.m)(this, Es), (0, pD.m)(this, Qs, void 0)), aD.set(this, ((0, pD.m)(this, Xs), (0, pD.m)(this, Vs, void 0))), this._opacityFresnelParameters = ((0, pD.m)(this, Ps), (0, pD.m)(this, Cs, void 0)), uD.set(this, ((0, pD.m)(this, xs), (0, pD.m)(this, Ts, void 0))), this._reflectionFresnelParameters = ((0, pD.m)(this, bs), (0, pD.m)(this, ds, void 0)), vD.set(this, ((0, pD.m)(this, Ss), (0, pD.m)(this, is, void 0))), this._refractionFresnelParameters = ((0, pD.m)(this, ls), (0, pD.m)(this, Ws, void 0)), tD.set(this, ((0, pD.m)(this, Ns), (0, pD.m)(this, Zs, void 0))), this._emissiveFresnelParameters = ((0, pD.m)(this, ys), (0, pD.m)(this, ks, void 0)), FD.set(this, ((0, pD.m)(this, ms), (0, pD.m)(this, es, void 0))), this._useReflectionFresnelFromSpecular = ((0, pD.m)(this, os), (0, pD.m)(this, as, !1)), YD.set(this, ((0, pD.m)(this, us), (0, pD.m)(this, vs, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, pD.m)(this, ts), (0, pD.m)(this, Fs, !1)), HD.set(this, ((0, pD.m)(this, Ys), (0, pD.m)(this, Hs, void 0))), this._maxSimultaneousLights = ((0, pD.m)(this, qs), (0, pD.m)(this, DK, 4)), qD.set(this, ((0, pD.m)(this, zK), (0, pD.m)(this, wK, void 0))), this._invertNormalMapX = ((0, pD.m)(this, pK), (0, pD.m)(this, sK, !1)), Dz.set(this, ((0, pD.m)(this, KK), (0, pD.m)(this, rK, void 0))), this._invertNormalMapY = ((0, pD.m)(this, LK), (0, pD.m)(this, cK, !1)), zz.set(this, ((0, pD.m)(this, gK), (0, pD.m)(this, RK, void 0))), this._twoSidedLighting = ((0, pD.m)(this, AK), (0, pD.m)(this, UK, !1)), wz.set(this, ((0, pD.m)(this, fK), (0, pD.m)(this, IK, void 0))), this._applyDecalMapAfterDetailMap = ((0, pD.m)(this, BK), (0, pD.m)(this, GK, !1)), pz.set(this, ((0, pD.m)(this, hK), (0, pD.m)(this, nK, void 0))), this._vertexPullingMetadata = ((0, pD.m)(this, MK), null), this._renderTargets = new KD.f(16), this._globalAmbientColor = new LD.d(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new hD.b(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new gD.c, this.getRenderTargetTextures = () => (this._renderTargets.reset(), DD.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), DD.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
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
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === UD.b.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== UD.b.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(zD, wD) {
            let pD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const sD = wD._drawWrapper;
            if (sD.effect && this.isFrozen && sD._wasPreviouslyReady && sD._wasPreviouslyUsingInstances === pD) return !0;
            wD.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), wD.materialDefines = new jD(this._eventInfo.defineNames));
            const KD = this.Ul(),
              rD = wD.materialDefines;
            if (this._isReadyForSubMesh(wD)) return !0;
            const LD = KD.iI();
            if (rD._needNormals = (0, OD.bb)(KD, zD, rD, !0, this._maxSimultaneousLights, this._disableLighting), !(0, OD.e)(KD, zD, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, OD.kb)(KD, rD);
            const RD = this.needAlphaBlendingForMesh(zD) && this.Ul().useOrderIndependentTransparency;
            if ((0, OD.qb)(KD, rD, this.canRenderToMRT && !RD), (0, OD.nb)(KD, rD, RD), QD.d.PrepareDefines(LD.currentRenderPassId, zD, rD), rD._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, rD._needUVs = !1;
              for (let DD = 1; DD <= 6; ++DD) rD["MAINUV" + DD] = !1;
              if (KD.texturesEnabled) {
                if (rD.DIFFUSEDIRECTUV = 0, rD.BUMPDIRECTUV = 0, rD.AMBIENTDIRECTUV = 0, rD.OPACITYDIRECTUV = 0, rD.EMISSIVEDIRECTUV = 0, rD.SPECULARDIRECTUV = 0, rD.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && DD.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, OD.eb)(this._diffuseTexture, rD, "DIFFUSE")
                } else rD.DIFFUSE = !1;
                if (this._ambientTexture && DD.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, OD.eb)(this._ambientTexture, rD, "AMBIENT")
                } else rD.AMBIENT = !1;
                if (this._opacityTexture && DD.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, OD.eb)(this._opacityTexture, rD, "OPACITY"), rD.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else rD.OPACITY = !1;
                if (this._reflectionTexture && DD.ReflectionTextureEnabled ? (rD.ROUGHNESS = this._roughness > 0, rD.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (rD.ROUGHNESS = !1, rD.REFLECTIONOVERALPHA = !1), !(0, OD.Z)(KD, this._reflectionTexture, rD)) return !1;
                if (this._emissiveTexture && DD.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, OD.eb)(this._emissiveTexture, rD, "EMISSIVE")
                } else rD.EMISSIVE = !1;
                if (this._lightmapTexture && DD.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, OD.eb)(this._lightmapTexture, rD, "LIGHTMAP"), rD.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, rD.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else rD.LIGHTMAP = !1;
                if (this._specularTexture && DD.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, OD.eb)(this._specularTexture, rD, "SPECULAR"), rD.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else rD.SPECULAR = !1;
                if (KD.iI().getCaps().standardDerivatives && this._bumpTexture && DD.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, OD.eb)(this._bumpTexture, rD, "BUMP"), rD.PARALLAX = this._useParallax, rD.PARALLAX_RHS = KD.useRightHandedSystem, rD.PARALLAXOCCLUSION = this._useParallaxOcclusion, rD.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else rD.BUMP = !1, rD.PARALLAX = !1, rD.PARALLAX_RHS = !1, rD.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && DD.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  rD._needUVs = !0, rD.REFRACTION = !0, rD.REFRACTIONMAP_3D = this._refractionTexture.isCube, rD.RGBDREFRACTION = this._refractionTexture.isRGBD, rD.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else rD.REFRACTION = !1;
                rD.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else rD.DIFFUSE = !1, rD.AMBIENT = !1, rD.OPACITY = !1, rD.REFLECTION = !1, rD.EMISSIVE = !1, rD.LIGHTMAP = !1, rD.BUMP = !1, rD.REFRACTION = !1;
              rD.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), rD.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, rD.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, rD.SPECULAROVERALPHA = this._useSpecularOverAlpha, rD.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, rD.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, rD.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(zD), rD.TEXTURE_REPETITION_MODE = LD.version > 1 || LD.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = rD, this._eventInfo.subMesh = wD, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (rD._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(rD), rD.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, rD.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (rD._areFresnelDirty && (DD.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (rD.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, rD.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, rD.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, rD.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, rD.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, rD.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, rD._needNormals = !0, rD.FRESNEL = !0) : rD.FRESNEL = !1), rD.AREALIGHTUSED || rD.CLUSTLIGHT_BATCH)
              for (let DD = 0; DD < zD.lightSources.length; DD++)
                if (!zD.lightSources[DD]._isReady()) return !1;
            (0, OD.hb)(zD, KD, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(zD), rD, this._applyDecalMapAfterDetailMap, this._useVertexPulling, wD.getRenderingMesh(), this._isVertexOutputInvariant), (0, OD.V)(KD, LD, this, rD, pD, null, wD.getRenderingMesh().hasThinInstances), this._eventInfo.defines = rD, this._eventInfo.mesh = zD, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, OD.S)(zD, rD, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let UD = !1;
            if (rD.isDirty) {
              const pD = rD._areLightsDisposed;
              rD.markAsProcessed();
              const sD = new GD.b;
              rD.REFLECTION && sD.addFallback(0, "REFLECTION"), rD.SPECULAR && sD.addFallback(0, "SPECULAR"), rD.BUMP && sD.addFallback(0, "BUMP"), rD.PARALLAX && sD.addFallback(1, "PARALLAX"), rD.PARALLAX_RHS && sD.addFallback(1, "PARALLAX_RHS"), rD.PARALLAXOCCLUSION && sD.addFallback(0, "PARALLAXOCCLUSION"), rD.SPECULAROVERALPHA && sD.addFallback(0, "SPECULAROVERALPHA"), rD.FOG && sD.addFallback(1, "FOG"), rD.POINTSIZE && sD.addFallback(0, "POINTSIZE"), rD.LOGARITHMICDEPTH && sD.addFallback(0, "LOGARITHMICDEPTH"), (0, OD.D)(rD, sD, this._maxSimultaneousLights), rD.SPECULARTERM && sD.addFallback(0, "SPECULARTERM"), rD.DIFFUSEFRESNEL && sD.addFallback(1, "DIFFUSEFRESNEL"), rD.OPACITYFRESNEL && sD.addFallback(2, "OPACITYFRESNEL"), rD.REFLECTIONFRESNEL && sD.addFallback(3, "REFLECTIONFRESNEL"), rD.EMISSIVEFRESNEL && sD.addFallback(4, "EMISSIVEFRESNEL"), rD.FRESNEL && sD.addFallback(4, "FRESNEL"), rD.MULTIVIEW && sD.addFallback(0, "MULTIVIEW");
              const RD = [cD.k.PositionKind];
              rD.NORMAL && RD.push(cD.k.NormalKind), rD.TANGENT && RD.push(cD.k.TangentKind);
              for (let DD = 1; DD <= 6; ++DD) rD["UV" + DD] && RD.push(`uv${1===DD?"":DD}`);
              rD.VERTEXCOLOR && RD.push(cD.k.ColorKind), (0, OD.H)(RD, zD, rD, sD), (0, OD.K)(RD, rD), (0, OD.L)(RD, zD, rD), (0, OD.G)(RD, zD, rD);
              let fD = "default";
              const ID = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                BD = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, OD.xb)(ID, BD, !1);
              const hD = ["Material", "Scene", "Mesh"],
                JD = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: rD.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = sD, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = rD, this._eventInfo.uniforms = ID, this._eventInfo.attributes = RD, this._eventInfo.samplers = BD, this._eventInfo.uniformBuffersNames = hD, this._eventInfo.customCode = void 0, this._eventInfo.mesh = zD, this._eventInfo.indexParameters = JD, this._callbackPluginEventGeneric(128, this._eventInfo), QD.d.AddUniformsAndSamplers(ID, BD), gD.c.AddUniforms(ID), gD.c.AddSamplers(BD), AD.e && (AD.e.PrepareUniforms(ID, rD), AD.e.PrepareSamplers(BD, rD)), (0, OD.Ab)({
                  uniformsNames: ID,
                  uniformBuffersNames: hD,
                  samplers: BD,
                  defines: rD,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, nD.e)(ID), this._useVertexPulling) {
                const DD = wD.getRenderingMesh(),
                  zD = DD?.geometry;
                zD && (this._vertexPullingMetadata = (0, MD.e)(zD), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((DD, zD) => {
                  ID.push(`vp_${zD}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const ED = {};
              this.customShaderNameResolve && (fD = this.customShaderNameResolve(fD, ID, hD, BD, rD, RD, ED));
              const XD = rD.toString(),
                VD = wD.effect,
                PD = KD.iI().createEffect(fD, {
                  attributes: RD,
                  uniformsNames: ID,
                  uniformBuffersNames: hD,
                  samplers: BD,
                  defines: XD,
                  fallbacks: sD,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: JD,
                  processFinalCode: ED.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: rD.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: DD._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, LD);
              if (this._eventInfo.customCode = void 0, PD)
                if (this._onEffectCreatedObservable && (TD.effect = PD, TD.subMesh = wD, this._onEffectCreatedObservable.notifyObservers(TD)), this.allowShaderHotSwapping && VD && !PD.isReady()) {
                  if (rD.markAsUnprocessed(), UD = this.isFrozen, pD) return rD._areLightsDisposed = !0, !1
                } else KD.resetCachedMaterial(), wD.setEffect(PD, rD, this._materialContext)
            }
            return !(!wD.effect || !wD.effect.isReady()) && (rD._renderId = KD.getRenderId(), sD._wasPreviouslyReady = !UD, sD._wasPreviouslyUsingInstances = pD, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const DD = this._uniformBuffer;
            DD.addUniform("diffuseLeftColor", 4), DD.addUniform("diffuseRightColor", 4), DD.addUniform("opacityParts", 4), DD.addUniform("reflectionLeftColor", 4), DD.addUniform("reflectionRightColor", 4), DD.addUniform("refractionLeftColor", 4), DD.addUniform("refractionRightColor", 4), DD.addUniform("emissiveLeftColor", 4), DD.addUniform("emissiveRightColor", 4), DD.addUniform("vDiffuseInfos", 2), DD.addUniform("vAmbientInfos", 2), DD.addUniform("vOpacityInfos", 2), DD.addUniform("vEmissiveInfos", 2), DD.addUniform("vLightmapInfos", 2), DD.addUniform("vSpecularInfos", 2), DD.addUniform("vBumpInfos", 3), DD.addUniform("diffuseMatrix", 16), DD.addUniform("ambientMatrix", 16), DD.addUniform("opacityMatrix", 16), DD.addUniform("emissiveMatrix", 16), DD.addUniform("lightmapMatrix", 16), DD.addUniform("specularMatrix", 16), DD.addUniform("bumpMatrix", 16), DD.addUniform("vTangentSpaceParams", 2), DD.addUniform("pointSize", 1), DD.addUniform("alphaCutOff", 1), DD.addUniform("refractionMatrix", 16), DD.addUniform("vRefractionInfos", 4), DD.addUniform("vRefractionPosition", 3), DD.addUniform("vRefractionSize", 3), DD.addUniform("vSpecularColor", 4), DD.addUniform("vEmissiveColor", 3), DD.addUniform("vDiffuseColor", 4), DD.addUniform("vAmbientColor", 3), DD.addUniform("cameraInfo", 4), DD.addUniform("vTextureRepetitionHexTilingParams", 4), (0, OD.tb)(DD, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(zD, wD, pD) {
            const sD = this.Ul(),
              KD = pD.materialDefines;
            if (!KD) return;
            const cD = pD.effect;
            if (!cD) return;
            this._activeEffect = cD, wD.getMeshUniformBuffer().bindToEffect(cD, "Mesh"), wD.transferToEffect(zD), this._uniformBuffer.bindToEffect(cD, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, sD, wD, zD, this.isFrozen), QD.d.Bind(sD.iI().currentRenderPassId, this._activeEffect, wD, zD, this);
            const gD = sD.activeCamera;
            gD ? this._uniformBuffer.updateFloat4("cameraInfo", gD.minZ, gD.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const RD = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", RD[0], RD[1], RD[2], RD[3]), this._eventInfo.subMesh = pD, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), KD.OBJECTSPACE_NORMALMAP && (zD.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const AD = this._mustRebind(sD, cD, pD, wD.visibility),
              UD = sD.iI()._features.needToAlwaysBindUniformBuffers;
            (0, OD.h)(wD, cD), this._vertexPullingMetadata && (0, MD.d)(cD, this._vertexPullingMetadata);
            const fD = this._uniformBuffer;
            if (AD) {
              if (this.bindViewProjection(cD), !fD.useUbo || !this.isFrozen || !fD.isSync || pD._drawWrapper._forceRebindOnNextCall) {
                if (DD.FresnelEnabled && KD.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (fD.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), fD.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const DD = LD.l.Color3[0];
                    DD.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), fD.updateColor4("opacityParts", DD, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (fD.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), fD.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (fD.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), fD.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (fD.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), fD.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (KD.ALPHATEST && fD.updateFloat("alphaCutOff", this.alphaCutOff), sD.texturesEnabled && (this._diffuseTexture && DD.DiffuseTextureEnabled && (fD.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, OD.z)(this._diffuseTexture, fD, "diffuse")), this._ambientTexture && DD.AmbientTextureEnabled && (fD.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, OD.z)(this._ambientTexture, fD, "ambient")), this._opacityTexture && DD.OpacityTextureEnabled && (fD.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, OD.z)(this._opacityTexture, fD, "opacity")), (0, OD.m)(sD, KD, fD, LD.d.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && DD.ReflectionTextureEnabled || fD.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && DD.EmissiveTextureEnabled && (fD.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, OD.z)(this._emissiveTexture, fD, "emissive")), this._lightmapTexture && DD.LightmapTextureEnabled && (fD.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, OD.z)(this._lightmapTexture, fD, "lightmap")), this._specularTexture && DD.SpecularTextureEnabled && (fD.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, OD.z)(this._specularTexture, fD, "specular")), this._bumpTexture && sD.iI().getCaps().standardDerivatives && DD.BumpTextureEnabled && (fD.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, OD.z)(this._bumpTexture, fD, "bump"), sD._mirroredCameraPosition ? fD.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : fD.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && DD.RefractionTextureEnabled)) {
                  let DD = 1;
                  if (this._refractionTexture.isCube || (fD.i5("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (DD = this._refractionTexture.depth)), fD.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, DD, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const DD = this._refractionTexture;
                    fD.updateVector3("vRefractionPosition", DD.boundingBoxPosition), fD.updateVector3("vRefractionSize", DD.boundingBoxSize)
                  }
                }
                this.pointsCloud && fD.updateFloat("pointSize", this.pointSize), fD.updateColor4("vSpecularColor", this.specularColor, this.specularPower), fD.updateColor3("vEmissiveColor", DD.EmissiveTextureEnabled ? this.emissiveColor : LD.d.BlackReadOnly), fD.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), sD.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), fD.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              sD.texturesEnabled && (this._diffuseTexture && DD.DiffuseTextureEnabled && cD.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && DD.AmbientTextureEnabled && cD.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && DD.OpacityTextureEnabled && cD.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && DD.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? cD.setTexture("reflectionCubeSampler", this._reflectionTexture) : cD.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && DD.EmissiveTextureEnabled && cD.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && DD.LightmapTextureEnabled && cD.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && DD.SpecularTextureEnabled && cD.setTexture("specularSampler", this._specularTexture), this._bumpTexture && sD.iI().getCaps().standardDerivatives && DD.BumpTextureEnabled && cD.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && DD.RefractionTextureEnabled && (this._refractionTexture.isCube ? cD.setTexture("refractionCubeSampler", this._refractionTexture) : cD.setTexture("refraction2DSampler", this._refractionTexture))), this.Ul().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(wD) && this.Ul().depthPeelingRenderer.bind(cD), this._eventInfo.subMesh = pD, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, nD.f)(cD, this, sD), this.bindEyePosition(cD)
            } else UD && (this._needToBindSceneUbo = !0);
            !AD && this.isFrozen && !UD || !sD.lightsEnabled || this._disableLighting || (0, OD.p)(sD, wD, cD, KD, this._maxSimultaneousLights), !AD && this.isFrozen || ((sD.fogEnabled && wD.applyFog && sD.fogMode !== rD.e.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || wD.receiveShadows || KD.PREPASS || KD.CLUSTLIGHT_BATCH) && this.bindView(cD), (0, OD.k)(sD, wD, cD), KD.NUM_MORPH_INFLUENCERS && (0, OD.s)(wD, cD), KD.BAKED_VERTEX_ANIMATION_TEXTURE && wD.bakedVertexAnimationManager?.bind(cD, KD.INSTANCES), this.useLogarithmicDepth && (0, OD.q)(KD, cD, sD), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(wD, this._activeEffect, pD), fD.update()
          }
          _canBindRunFollower(zD, wD, pD, sD, KD) {
            const rD = zD.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === DD.prototype.isReadyForSubMesh && this.bindForSubMesh === DD.prototype.bindForSubMesh && this._mustRebind === ID.d.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !wD._features.needToAlwaysBindUniformBuffers && !(rD && rD.enabled && rD.currentRTisSceneRT) && !QD.d._Configurations[wD.currentRenderPassId] && !sD.materialDefines?.OBJECTSPACE_NORMALMAP && !pD.skeleton && !KD._bonesComputationForcedToCPU
          }
          _bindRunFollower(DD, zD, wD, pD) {
            this._activeEffect = pD, zD.getMeshUniformBuffer().bindToEffect(pD, "Mesh"), zD.transferToEffect(DD);
            const sD = this._uniformBuffer;
            sD.bindToEffect(pD, "Material");
            const KD = this._scene.activeCamera;
            KD ? sD.updateFloat4("cameraInfo", KD.minZ, KD.maxZ, 0, 0) : sD.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const rD = this.textureRepetitionHexTilingParams;
            sD.updateFloat4("vTextureRepetitionHexTilingParams", rD[0], rD[1], rD[2], rD[3]), this._afterBind(zD, pD, wD), sD.update()
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
          dispose(DD, zD) {
            zD && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(DD, zD)
          }
          clone(zD) {
            let wD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              pD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const sD = JD.d.Clone((() => new DD(zD, this.Ul())), this, {
              cloneTexturesOnlyOnce: wD
            });
            return sD.name = zD, sD.id = zD, this.stencil.copyTo(sD.stencil), this._clonePlugins(sD, pD), sD
          }
          static Parse(zD, wD, pD) {
            const sD = JD.d.Parse((() => new DD(zD.name, wD)), zD, wD, pD);
            return zD.stencil && sD.stencil.parse(zD.stencil, wD, pD), UD.b._ParsePlugins(zD, sD, wD, pD), sD
          }
          static get DiffuseTextureEnabled() {
            return BD.d.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(DD) {
            BD.d.DiffuseTextureEnabled = DD
          }
          static get DetailTextureEnabled() {
            return BD.d.DetailTextureEnabled
          }
          static set DetailTextureEnabled(DD) {
            BD.d.DetailTextureEnabled = DD
          }
          static get AmbientTextureEnabled() {
            return BD.d.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(DD) {
            BD.d.AmbientTextureEnabled = DD
          }
          static get OpacityTextureEnabled() {
            return BD.d.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(DD) {
            BD.d.OpacityTextureEnabled = DD
          }
          static get ReflectionTextureEnabled() {
            return BD.d.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(DD) {
            BD.d.ReflectionTextureEnabled = DD
          }
          static get EmissiveTextureEnabled() {
            return BD.d.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(DD) {
            BD.d.EmissiveTextureEnabled = DD
          }
          static get SpecularTextureEnabled() {
            return BD.d.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(DD) {
            BD.d.SpecularTextureEnabled = DD
          }
          static get BumpTextureEnabled() {
            return BD.d.BumpTextureEnabled
          }
          static set BumpTextureEnabled(DD) {
            BD.d.BumpTextureEnabled = DD
          }
          static get LightmapTextureEnabled() {
            return BD.d.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(DD) {
            BD.d.LightmapTextureEnabled = DD
          }
          static get RefractionTextureEnabled() {
            return BD.d.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(DD) {
            BD.d.RefractionTextureEnabled = DD
          }
          static get ColorGradingTextureEnabled() {
            return BD.d.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(DD) {
            BD.d.ColorGradingTextureEnabled = DD
          }
          static get FresnelEnabled() {
            return BD.d.FresnelEnabled
          }
          static set FresnelEnabled(DD) {
            BD.d.FresnelEnabled = DD
          }
        }, zD = new WeakMap, RD = new WeakMap, fD = new WeakMap, XD = new WeakMap, VD = new WeakMap, PD = new WeakMap, CD = new WeakMap, xD = new WeakMap, bD = new WeakMap, SD = new WeakMap, iD = new WeakMap, lD = new WeakMap, WD = new WeakMap, ND = new WeakMap, ZD = new WeakMap, yD = new WeakMap, kD = new WeakMap, mD = new WeakMap, eD = new WeakMap, oD = new WeakMap, aD = new WeakMap, uD = new WeakMap, vD = new WeakMap, tD = new WeakMap, FD = new WeakMap, YD = new WeakMap, HD = new WeakMap, qD = new WeakMap, Dz = new WeakMap, zz = new WeakMap, wz = new WeakMap, pz = new WeakMap, (() => {
          const zD = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pw[Symbol.metadata] ?? null) : void 0;
          sz = [(0, sD.w)("diffuseTexture")], Kz = [(0, sD.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], rz = [(0, sD.w)("ambientTexture")], Lz = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], cz = [(0, sD.w)("opacityTexture")], gz = [(0, sD.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Rz = [(0, sD.w)("reflectionTexture")], Az = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], Uz = [(0, sD.w)("emissiveTexture")], fz = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], Iz = [(0, sD.w)("specularTexture")], Bz = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], Gz = [(0, sD.w)("bumpTexture")], hz = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], nz = [(0, sD.w)("lightmapTexture")], Mz = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], Oz = [(0, sD.w)("refractionTexture")], Jz = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], Ez = [(0, sD.k)("ambient")], Qz = [(0, sD.k)("diffuse")], Xz = [(0, sD.k)("specular")], Vz = [(0, sD.k)("emissive")], Pz = [(0, sD.C)()], Cz = [(0, sD.C)("useAlphaFromDiffuseTexture")], xz = [() => ({
            init(DD) {
              return void 0 === DD && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = DD), DD
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(DD) {
              this._useAlphaFromDiffuseTexture = DD
            }
          })], Tz = [(0, sD.C)("useEmissiveAsIllumination")], bz = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], jz = [(0, sD.C)("linkEmissiveWithDiffuse")], dz = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], Sz = [(0, sD.C)("useSpecularOverAlpha")], iz = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], lz = [(0, sD.C)("useReflectionOverAlpha")], Wz = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], Nz = [(0, sD.C)("disableLighting")], Zz = [(0, sD.e)("_markAllSubMeshesAsLightsDirty")], yz = [(0, sD.C)("useObjectSpaceNormalMap")], kz = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], mz = [(0, sD.C)("useParallax")], ez = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], oz = [(0, sD.C)("useParallaxOcclusion")], az = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], uz = [(0, sD.C)()], vz = [(0, sD.C)("roughness")], tz = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], Fz = [(0, sD.C)()], Yz = [(0, sD.C)()], Hz = [(0, sD.C)()], qz = [(0, sD.C)("useLightmapAsShadowmap")], Dw = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], zw = [(0, sD.n)("diffuseFresnelParameters")], ww = [(0, sD.e)("_markAllSubMeshesAsFresnelDirty")], pw = [(0, sD.n)("opacityFresnelParameters")], sw = [(0, sD.e)("_markAllSubMeshesAsFresnelAndMiscDirty")], Kw = [(0, sD.n)("reflectionFresnelParameters")], rw = [(0, sD.e)("_markAllSubMeshesAsFresnelDirty")], Lw = [(0, sD.n)("refractionFresnelParameters")], gw = [(0, sD.e)("_markAllSubMeshesAsFresnelDirty")], Rw = [(0, sD.n)("emissiveFresnelParameters")], Aw = [(0, sD.e)("_markAllSubMeshesAsFresnelDirty")], Uw = [(0, sD.C)("useReflectionFresnelFromSpecular")], fw = [(0, sD.e)("_markAllSubMeshesAsFresnelDirty")], Iw = [(0, sD.C)("useGlossinessFromSpecularMapAlpha")], Bw = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], Gw = [(0, sD.C)("maxSimultaneousLights")], hw = [(0, sD.e)("_markAllSubMeshesAsLightsDirty")], nw = [(0, sD.C)("invertNormalMapX")], Mw = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], Ow = [(0, sD.C)("invertNormalMapY")], Jw = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], Ew = [(0, sD.C)("twoSidedLighting")], Qw = [(0, sD.e)("_markAllSubMeshesAsTexturesDirty")], Xw = [(0, sD.C)("applyDecalMapAfterDetailMap")], Vw = [(0, sD.e)("_markAllSubMeshesAsMiscDirty")], (0, pD.i)(DD, null, Kz, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "diffuseTexture" in DD,
              get: DD => DD.diffuseTexture,
              set: (DD, zD) => {
                DD.diffuseTexture = zD
              }
            },
            metadata: zD
          }, Tw, bw), (0, pD.i)(DD, null, Lz, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "ambientTexture" in DD,
              get: DD => DD.ambientTexture,
              set: (DD, zD) => {
                DD.ambientTexture = zD
              }
            },
            metadata: zD
          }, Sw, iw), (0, pD.i)(DD, null, gz, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "opacityTexture" in DD,
              get: DD => DD.opacityTexture,
              set: (DD, zD) => {
                DD.opacityTexture = zD
              }
            },
            metadata: zD
          }, Nw, Zw), (0, pD.i)(DD, null, Az, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "reflectionTexture" in DD,
              get: DD => DD.reflectionTexture,
              set: (DD, zD) => {
                DD.reflectionTexture = zD
              }
            },
            metadata: zD
          }, mw, ew), (0, pD.i)(DD, null, fz, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "emissiveTexture" in DD,
              get: DD => DD.emissiveTexture,
              set: (DD, zD) => {
                DD.emissiveTexture = zD
              }
            },
            metadata: zD
          }, uw, vw), (0, pD.i)(DD, null, Bz, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularTexture" in DD,
              get: DD => DD.specularTexture,
              set: (DD, zD) => {
                DD.specularTexture = zD
              }
            },
            metadata: zD
          }, Yw, Hw), (0, pD.i)(DD, null, hz, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "bumpTexture" in DD,
              get: DD => DD.bumpTexture,
              set: (DD, zD) => {
                DD.bumpTexture = zD
              }
            },
            metadata: zD
          }, zp, wp), (0, pD.i)(DD, null, Mz, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "lightmapTexture" in DD,
              get: DD => DD.lightmapTexture,
              set: (DD, zD) => {
                DD.lightmapTexture = zD
              }
            },
            metadata: zD
          }, Kp, rp), (0, pD.i)(DD, null, Jz, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "refractionTexture" in DD,
              get: DD => DD.refractionTexture,
              set: (DD, zD) => {
                DD.refractionTexture = zD
              }
            },
            metadata: zD
          }, gp, Rp), (0, pD.i)(DD, null, xz, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "useAlphaFromDiffuseTexture" in DD,
              get: DD => DD.useAlphaFromDiffuseTexture,
              set: (DD, zD) => {
                DD.useAlphaFromDiffuseTexture = zD
              }
            },
            metadata: zD
          }, Qp, Xp), (0, pD.i)(DD, null, bz, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: DD => "useEmissiveAsIllumination" in DD,
              get: DD => DD.useEmissiveAsIllumination,
              set: (DD, zD) => {
                DD.useEmissiveAsIllumination = zD
              }
            },
            metadata: zD
          }, Cp, xp), (0, pD.i)(DD, null, dz, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: DD => "linkEmissiveWithDiffuse" in DD,
              get: DD => DD.linkEmissiveWithDiffuse,
              set: (DD, zD) => {
                DD.linkEmissiveWithDiffuse = zD
              }
            },
            metadata: zD
          }, jp, dp), (0, pD.i)(DD, null, iz, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: DD => "useSpecularOverAlpha" in DD,
              get: DD => DD.useSpecularOverAlpha,
              set: (DD, zD) => {
                DD.useSpecularOverAlpha = zD
              }
            },
            metadata: zD
          }, lp, Wp), (0, pD.i)(DD, null, Wz, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: DD => "useReflectionOverAlpha" in DD,
              get: DD => DD.useReflectionOverAlpha,
              set: (DD, zD) => {
                DD.useReflectionOverAlpha = zD
              }
            },
            metadata: zD
          }, yp, kp), (0, pD.i)(DD, null, Zz, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: DD => "disableLighting" in DD,
              get: DD => DD.disableLighting,
              set: (DD, zD) => {
                DD.disableLighting = zD
              }
            },
            metadata: zD
          }, op, ap), (0, pD.i)(DD, null, kz, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: DD => "useObjectSpaceNormalMap" in DD,
              get: DD => DD.useObjectSpaceNormalMap,
              set: (DD, zD) => {
                DD.useObjectSpaceNormalMap = zD
              }
            },
            metadata: zD
          }, Fp, Yp), (0, pD.i)(DD, null, ez, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: DD => "useParallax" in DD,
              get: DD => DD.useParallax,
              set: (DD, zD) => {
                DD.useParallax = zD
              }
            },
            metadata: zD
          }, Ds, zs), (0, pD.i)(DD, null, az, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: DD => "useParallaxOcclusion" in DD,
              get: DD => DD.useParallaxOcclusion,
              set: (DD, zD) => {
                DD.useParallaxOcclusion = zD
              }
            },
            metadata: zD
          }, ss, Ks), (0, pD.i)(DD, null, tz, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: DD => "roughness" in DD,
              get: DD => DD.roughness,
              set: (DD, zD) => {
                DD.roughness = zD
              }
            },
            metadata: zD
          }, Rs, As), (0, pD.i)(DD, null, Dw, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: DD => "useLightmapAsShadowmap" in DD,
              get: DD => DD.useLightmapAsShadowmap,
              set: (DD, zD) => {
                DD.useLightmapAsShadowmap = zD
              }
            },
            metadata: zD
          }, Os, Es), (0, pD.i)(DD, null, ww, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "diffuseFresnelParameters" in DD,
              get: DD => DD.diffuseFresnelParameters,
              set: (DD, zD) => {
                DD.diffuseFresnelParameters = zD
              }
            },
            metadata: zD
          }, Vs, Ps), (0, pD.i)(DD, null, sw, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "opacityFresnelParameters" in DD,
              get: DD => DD.opacityFresnelParameters,
              set: (DD, zD) => {
                DD.opacityFresnelParameters = zD
              }
            },
            metadata: zD
          }, Ts, bs), (0, pD.i)(DD, null, rw, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "reflectionFresnelParameters" in DD,
              get: DD => DD.reflectionFresnelParameters,
              set: (DD, zD) => {
                DD.reflectionFresnelParameters = zD
              }
            },
            metadata: zD
          }, is, ls), (0, pD.i)(DD, null, gw, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "refractionFresnelParameters" in DD,
              get: DD => DD.refractionFresnelParameters,
              set: (DD, zD) => {
                DD.refractionFresnelParameters = zD
              }
            },
            metadata: zD
          }, Zs, ys), (0, pD.i)(DD, null, Aw, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "emissiveFresnelParameters" in DD,
              get: DD => DD.emissiveFresnelParameters,
              set: (DD, zD) => {
                DD.emissiveFresnelParameters = zD
              }
            },
            metadata: zD
          }, es, os), (0, pD.i)(DD, null, fw, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: DD => "useReflectionFresnelFromSpecular" in DD,
              get: DD => DD.useReflectionFresnelFromSpecular,
              set: (DD, zD) => {
                DD.useReflectionFresnelFromSpecular = zD
              }
            },
            metadata: zD
          }, vs, ts), (0, pD.i)(DD, null, Bw, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: DD => "useGlossinessFromSpecularMapAlpha" in DD,
              get: DD => DD.useGlossinessFromSpecularMapAlpha,
              set: (DD, zD) => {
                DD.useGlossinessFromSpecularMapAlpha = zD
              }
            },
            metadata: zD
          }, Hs, qs), (0, pD.i)(DD, null, hw, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: DD => "maxSimultaneousLights" in DD,
              get: DD => DD.maxSimultaneousLights,
              set: (DD, zD) => {
                DD.maxSimultaneousLights = zD
              }
            },
            metadata: zD
          }, wK, pK), (0, pD.i)(DD, null, Mw, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: DD => "invertNormalMapX" in DD,
              get: DD => DD.invertNormalMapX,
              set: (DD, zD) => {
                DD.invertNormalMapX = zD
              }
            },
            metadata: zD
          }, rK, LK), (0, pD.i)(DD, null, Jw, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: DD => "invertNormalMapY" in DD,
              get: DD => DD.invertNormalMapY,
              set: (DD, zD) => {
                DD.invertNormalMapY = zD
              }
            },
            metadata: zD
          }, RK, AK), (0, pD.i)(DD, null, Qw, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: DD => "twoSidedLighting" in DD,
              get: DD => DD.twoSidedLighting,
              set: (DD, zD) => {
                DD.twoSidedLighting = zD
              }
            },
            metadata: zD
          }, IK, BK), (0, pD.i)(DD, null, Vw, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: DD => "applyDecalMapAfterDetailMap" in DD,
              get: DD => DD.applyDecalMapAfterDetailMap,
              set: (DD, zD) => {
                DD.applyDecalMapAfterDetailMap = zD
              }
            },
            metadata: zD
          }, nK, MK), (0, pD.i)(null, null, sz, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_diffuseTexture" in DD,
              get: DD => DD._diffuseTexture,
              set: (DD, zD) => {
                DD._diffuseTexture = zD
              }
            },
            metadata: zD
          }, Cw, xw), (0, pD.i)(null, null, rz, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_ambientTexture" in DD,
              get: DD => DD._ambientTexture,
              set: (DD, zD) => {
                DD._ambientTexture = zD
              }
            },
            metadata: zD
          }, jw, dw), (0, pD.i)(null, null, cz, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_opacityTexture" in DD,
              get: DD => DD._opacityTexture,
              set: (DD, zD) => {
                DD._opacityTexture = zD
              }
            },
            metadata: zD
          }, lw, Ww), (0, pD.i)(null, null, Rz, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_reflectionTexture" in DD,
              get: DD => DD._reflectionTexture,
              set: (DD, zD) => {
                DD._reflectionTexture = zD
              }
            },
            metadata: zD
          }, yw, kw), (0, pD.i)(null, null, Uz, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_emissiveTexture" in DD,
              get: DD => DD._emissiveTexture,
              set: (DD, zD) => {
                DD._emissiveTexture = zD
              }
            },
            metadata: zD
          }, ow, aw), (0, pD.i)(null, null, Iz, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_specularTexture" in DD,
              get: DD => DD._specularTexture,
              set: (DD, zD) => {
                DD._specularTexture = zD
              }
            },
            metadata: zD
          }, tw, Fw), (0, pD.i)(null, null, Gz, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_bumpTexture" in DD,
              get: DD => DD._bumpTexture,
              set: (DD, zD) => {
                DD._bumpTexture = zD
              }
            },
            metadata: zD
          }, qw, Dp), (0, pD.i)(null, null, nz, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_lightmapTexture" in DD,
              get: DD => DD._lightmapTexture,
              set: (DD, zD) => {
                DD._lightmapTexture = zD
              }
            },
            metadata: zD
          }, pp, sp), (0, pD.i)(null, null, Oz, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_refractionTexture" in DD,
              get: DD => DD._refractionTexture,
              set: (DD, zD) => {
                DD._refractionTexture = zD
              }
            },
            metadata: zD
          }, Lp, cp), (0, pD.i)(null, null, Ez, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "ambientColor" in DD,
              get: DD => DD.ambientColor,
              set: (DD, zD) => {
                DD.ambientColor = zD
              }
            },
            metadata: zD
          }, Ap, Up), (0, pD.i)(null, null, Qz, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "diffuseColor" in DD,
              get: DD => DD.diffuseColor,
              set: (DD, zD) => {
                DD.diffuseColor = zD
              }
            },
            metadata: zD
          }, fp, Ip), (0, pD.i)(null, null, Xz, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularColor" in DD,
              get: DD => DD.specularColor,
              set: (DD, zD) => {
                DD.specularColor = zD
              }
            },
            metadata: zD
          }, Bp, Gp), (0, pD.i)(null, null, Vz, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "emissiveColor" in DD,
              get: DD => DD.emissiveColor,
              set: (DD, zD) => {
                DD.emissiveColor = zD
              }
            },
            metadata: zD
          }, hp, np), (0, pD.i)(null, null, Pz, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: DD => "specularPower" in DD,
              get: DD => DD.specularPower,
              set: (DD, zD) => {
                DD.specularPower = zD
              }
            },
            metadata: zD
          }, Mp, Op), (0, pD.i)(null, null, Cz, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useAlphaFromDiffuseTexture" in DD,
              get: DD => DD._useAlphaFromDiffuseTexture,
              set: (DD, zD) => {
                DD._useAlphaFromDiffuseTexture = zD
              }
            },
            metadata: zD
          }, Jp, Ep), (0, pD.i)(null, null, Tz, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useEmissiveAsIllumination" in DD,
              get: DD => DD._useEmissiveAsIllumination,
              set: (DD, zD) => {
                DD._useEmissiveAsIllumination = zD
              }
            },
            metadata: zD
          }, Vp, Pp), (0, pD.i)(null, null, jz, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: DD => "_linkEmissiveWithDiffuse" in DD,
              get: DD => DD._linkEmissiveWithDiffuse,
              set: (DD, zD) => {
                DD._linkEmissiveWithDiffuse = zD
              }
            },
            metadata: zD
          }, Tp, bp), (0, pD.i)(null, null, Sz, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useSpecularOverAlpha" in DD,
              get: DD => DD._useSpecularOverAlpha,
              set: (DD, zD) => {
                DD._useSpecularOverAlpha = zD
              }
            },
            metadata: zD
          }, Sp, ip), (0, pD.i)(null, null, lz, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useReflectionOverAlpha" in DD,
              get: DD => DD._useReflectionOverAlpha,
              set: (DD, zD) => {
                DD._useReflectionOverAlpha = zD
              }
            },
            metadata: zD
          }, Np, Zp), (0, pD.i)(null, null, Nz, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: DD => "_disableLighting" in DD,
              get: DD => DD._disableLighting,
              set: (DD, zD) => {
                DD._disableLighting = zD
              }
            },
            metadata: zD
          }, mp, ep), (0, pD.i)(null, null, yz, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useObjectSpaceNormalMap" in DD,
              get: DD => DD._useObjectSpaceNormalMap,
              set: (DD, zD) => {
                DD._useObjectSpaceNormalMap = zD
              }
            },
            metadata: zD
          }, vp, tp), (0, pD.i)(null, null, mz, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useParallax" in DD,
              get: DD => DD._useParallax,
              set: (DD, zD) => {
                DD._useParallax = zD
              }
            },
            metadata: zD
          }, Hp, qp), (0, pD.i)(null, null, oz, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useParallaxOcclusion" in DD,
              get: DD => DD._useParallaxOcclusion,
              set: (DD, zD) => {
                DD._useParallaxOcclusion = zD
              }
            },
            metadata: zD
          }, ws, ps), (0, pD.i)(null, null, uz, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: DD => "parallaxScaleBias" in DD,
              get: DD => DD.parallaxScaleBias,
              set: (DD, zD) => {
                DD.parallaxScaleBias = zD
              }
            },
            metadata: zD
          }, rs, Ls), (0, pD.i)(null, null, vz, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: DD => "_roughness" in DD,
              get: DD => DD._roughness,
              set: (DD, zD) => {
                DD._roughness = zD
              }
            },
            metadata: zD
          }, cs, gs), (0, pD.i)(null, null, Fz, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: DD => "indexOfRefraction" in DD,
              get: DD => DD.indexOfRefraction,
              set: (DD, zD) => {
                DD.indexOfRefraction = zD
              }
            },
            metadata: zD
          }, Us, fs), (0, pD.i)(null, null, Yz, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: DD => "invertRefractionY" in DD,
              get: DD => DD.invertRefractionY,
              set: (DD, zD) => {
                DD.invertRefractionY = zD
              }
            },
            metadata: zD
          }, Is, Bs), (0, pD.i)(null, null, Hz, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: DD => "alphaCutOff" in DD,
              get: DD => DD.alphaCutOff,
              set: (DD, zD) => {
                DD.alphaCutOff = zD
              }
            },
            metadata: zD
          }, Gs, hs), (0, pD.i)(null, null, qz, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useLightmapAsShadowmap" in DD,
              get: DD => DD._useLightmapAsShadowmap,
              set: (DD, zD) => {
                DD._useLightmapAsShadowmap = zD
              }
            },
            metadata: zD
          }, ns, Ms), (0, pD.i)(null, null, zw, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "_diffuseFresnelParameters" in DD,
              get: DD => DD._diffuseFresnelParameters,
              set: (DD, zD) => {
                DD._diffuseFresnelParameters = zD
              }
            },
            metadata: zD
          }, Qs, Xs), (0, pD.i)(null, null, pw, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "_opacityFresnelParameters" in DD,
              get: DD => DD._opacityFresnelParameters,
              set: (DD, zD) => {
                DD._opacityFresnelParameters = zD
              }
            },
            metadata: zD
          }, Cs, xs), (0, pD.i)(null, null, Kw, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "_reflectionFresnelParameters" in DD,
              get: DD => DD._reflectionFresnelParameters,
              set: (DD, zD) => {
                DD._reflectionFresnelParameters = zD
              }
            },
            metadata: zD
          }, ds, Ss), (0, pD.i)(null, null, Lw, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "_refractionFresnelParameters" in DD,
              get: DD => DD._refractionFresnelParameters,
              set: (DD, zD) => {
                DD._refractionFresnelParameters = zD
              }
            },
            metadata: zD
          }, Ws, Ns), (0, pD.i)(null, null, Rw, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: DD => "_emissiveFresnelParameters" in DD,
              get: DD => DD._emissiveFresnelParameters,
              set: (DD, zD) => {
                DD._emissiveFresnelParameters = zD
              }
            },
            metadata: zD
          }, ks, ms), (0, pD.i)(null, null, Uw, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useReflectionFresnelFromSpecular" in DD,
              get: DD => DD._useReflectionFresnelFromSpecular,
              set: (DD, zD) => {
                DD._useReflectionFresnelFromSpecular = zD
              }
            },
            metadata: zD
          }, as, us), (0, pD.i)(null, null, Iw, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: DD => "_useGlossinessFromSpecularMapAlpha" in DD,
              get: DD => DD._useGlossinessFromSpecularMapAlpha,
              set: (DD, zD) => {
                DD._useGlossinessFromSpecularMapAlpha = zD
              }
            },
            metadata: zD
          }, Fs, Ys), (0, pD.i)(null, null, Gw, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: DD => "_maxSimultaneousLights" in DD,
              get: DD => DD._maxSimultaneousLights,
              set: (DD, zD) => {
                DD._maxSimultaneousLights = zD
              }
            },
            metadata: zD
          }, DK, zK), (0, pD.i)(null, null, nw, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: DD => "_invertNormalMapX" in DD,
              get: DD => DD._invertNormalMapX,
              set: (DD, zD) => {
                DD._invertNormalMapX = zD
              }
            },
            metadata: zD
          }, sK, KK), (0, pD.i)(null, null, Ow, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: DD => "_invertNormalMapY" in DD,
              get: DD => DD._invertNormalMapY,
              set: (DD, zD) => {
                DD._invertNormalMapY = zD
              }
            },
            metadata: zD
          }, cK, gK), (0, pD.i)(null, null, Ew, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: DD => "_twoSidedLighting" in DD,
              get: DD => DD._twoSidedLighting,
              set: (DD, zD) => {
                DD._twoSidedLighting = zD
              }
            },
            metadata: zD
          }, UK, fK), (0, pD.i)(null, null, Xw, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: DD => "_applyDecalMapAfterDetailMap" in DD,
              get: DD => DD._applyDecalMapAfterDetailMap,
              set: (DD, zD) => {
                DD._applyDecalMapAfterDetailMap = zD
              }
            },
            metadata: zD
          }, GK, hK), zD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zD
          })
        })(), DD.ForceGLSL = !1, DD._ShaderLoader = new ED.d((() => [Promise.all([wD.e(317), wD.e(316)]).then((() => wD(41785))), Promise.all([wD.e(322), wD.e(318), wD.e(331), wD.e(321)]).then((() => wD(41955)))]), (() => [Promise.all([wD.e(338), wD.e(333)]).then((() => wD(42087))), Promise.all([wD.e(339), wD.e(349), wD.e(335)]).then((() => wD(42272)))])), DD
      })(),
      iD = !1;

    function lD() {
      iD || (iD = !0, (0, AD.h)(), (0, CD.i)("BABYLON.StandardMaterial", SD), rD.e.DefaultMaterialFactory = DD => new SD("default material", DD))
    }
    Object.getOwnPropertyDescriptor(SD.prototype, "decalMap") || Object.defineProperty(SD.prototype, "decalMap", (0, xD.g)("StandardMaterial", "decalMap"))
  },
  40315: (DD, zD, wD) => {
    function pD(DD) {
      return class extends DD {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    wD.d(zD, {
      b: () => pD
    })
  },
  40302: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    class pD {
      constructor(DD, zD) {
        this._webGL = {
          load: DD,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: zD,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(DD) {
        const zD = 1 === DD ? this._webGPU : this._webGL;
        return zD.loaded ? void 0 : async () => {
          await this._loadAsync(zD)
        }
      }
      async _loadAsync(DD) {
        if (DD.loaded) return;
        let zD = DD.loadPromise;
        const wD = null === zD;
        wD && (zD = Promise.all(DD.load()), DD.loadPromise = zD);
        let pD = !1;
        try {
          await zD, pD = !0
        } finally {
          wD && this._completeLoad(DD, pD)
        }
      }
      _completeLoad(DD, zD) {
        DD.loaded = zD, DD.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);