export const id = 261;
export const ids = [261];
export const modules = {
  40216: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC
    });
    var QC = ZC(39826);

    function wC(CC) {
      return class extends CC {
        constructor() {
          super(...arguments);
          const CC = new.target;
          if (!CC[Symbol.metadata]) {
            const zC = Object.getPrototypeOf(CC)?.[Symbol.metadata];
            CC[Symbol.metadata] = zC ? Object.create(zC) : {}
          }
          const zC = (0, QC.e)(CC[Symbol.metadata]);
          zC._imageProcessingConfiguration || (zC._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(CC) {
          this._attachImageProcessingConfiguration(CC), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(CC) {
          CC !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !CC && this.Km ? this._imageProcessingConfiguration = this.Km().imageProcessingConfiguration : CC && (this._imageProcessingConfiguration = CC), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(CC) {
          this.imageProcessingConfiguration.colorCurvesEnabled = CC
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(CC) {
          this.imageProcessingConfiguration.colorGradingEnabled = CC
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(CC) {
          this._imageProcessingConfiguration.toneMappingEnabled = CC
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(CC) {
          this._imageProcessingConfiguration.exposure = CC
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(CC) {
          this._imageProcessingConfiguration.contrast = CC
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(CC) {
          this._imageProcessingConfiguration.colorGradingTexture = CC
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(CC) {
          this._imageProcessingConfiguration.colorCurves = CC
        }
      }
    }
  },
  40100: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bC,
      e: () => wC
    });
    var QC = ZC(40102);

    function wC(CC) {
      return class extends CC {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class bC extends QC.b {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  40180: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => WC
    });
    var QC = ZC(39811),
      wC = ZC(40110),
      bC = ZC(39818),
      nC = ZC(40162),
      fC = ZC(40102),
      oC = ZC(40188),
      qC = ZC(40151);
    class FC extends fC.b {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let WC = (() => {
      var CC, zC, ZC, fC;
      let WC, NC, MC, gC, SC, pC, PC = oC.c,
        GC = [],
        RC = [],
        AC = [],
        xC = [],
        JC = [],
        IC = [],
        iC = [],
        vC = [],
        eC = [],
        hC = [],
        KC = [],
        YC = [];
      return CC = class extends PC {
        get texture() {
          return (0, QC.e)(this, zC, "f")
        }
        set texture(CC) {
          (0, QC.f)(this, zC, CC, "f")
        }
        get normalBlendMethod() {
          return (0, QC.e)(this, ZC, "f")
        }
        set normalBlendMethod(CC) {
          (0, QC.f)(this, ZC, CC, "f")
        }
        get isEnabled() {
          return (0, QC.e)(this, fC, "f")
        }
        set isEnabled(CC) {
          (0, QC.f)(this, fC, CC, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(CC) {
          let bC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(CC, "DetailMap", 140, new FC, bC), this._texture = null, zC.set(this, (0, QC.n)(this, GC, void 0)), this.diffuseBlendLevel = ((0, QC.n)(this, RC), (0, QC.n)(this, AC, 1)), this.roughnessBlendLevel = ((0, QC.n)(this, xC), (0, QC.n)(this, JC, 1)), this.bumpLevel = ((0, QC.n)(this, IC), (0, QC.n)(this, iC, 1)), this._normalBlendMethod = ((0, QC.n)(this, vC), wC.d.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), ZC.set(this, (0, QC.n)(this, eC, void 0)), this._isEnabled = ((0, QC.n)(this, hC), !1), fC.set(this, (0, QC.n)(this, KC, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, QC.n)(this, YC), this._internalMarkAllSubMeshesAsTexturesDirty = CC._dirtyCallbacks[1]
        }
        isReadyForSubMesh(CC, zC, ZC) {
          return !this._isEnabled || !(CC._areTexturesDirty && zC.texturesEnabled && ZC.getCaps().standardDerivatives && this._texture && nC.b.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(CC, zC) {
          if (this._isEnabled) {
            CC.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const ZC = zC.mg();
            CC._areTexturesDirty && (ZC.getCaps().standardDerivatives && this._texture && nC.b.DetailTextureEnabled && this._isEnabled ? ((0, qC.gb)(this._texture, CC, "DETAIL"), CC.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : CC.DETAIL = !1)
          } else CC.DETAIL = !1
        }
        bindForSubMesh(CC, zC) {
          if (!this._isEnabled) return;
          const ZC = this._material.isFrozen;
          CC.useUbo && ZC && CC.isSync || this._texture && nC.b.DetailTextureEnabled && (CC.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, qC.B)(this._texture, CC, "detail")), zC.texturesEnabled && this._texture && nC.b.DetailTextureEnabled && CC.setTexture("detailSampler", this._texture)
        }
        hasTexture(CC) {
          return this._texture === CC
        }
        getActiveTextures(CC) {
          this._texture && CC.push(this._texture)
        }
        getAnimatables(CC) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && CC.push(this._texture)
        }
        dispose(CC) {
          CC && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(CC) {
          CC.push("detailSampler")
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
      }, zC = new WeakMap, ZC = new WeakMap, fC = new WeakMap, (() => {
        const zC = "function" === typeof Symbol && Symbol.metadata ? Object.create(PC[Symbol.metadata] ?? null) : void 0;
        WC = [(0, bC.B)("detailTexture"), (0, bC.d)("_markAllSubMeshesAsTexturesDirty")], NC = [(0, bC.M)()], MC = [(0, bC.M)()], gC = [(0, bC.M)()], SC = [(0, bC.M)(), (0, bC.d)("_markAllSubMeshesAsTexturesDirty")], pC = [(0, bC.M)(), (0, bC.d)("_markAllSubMeshesAsTexturesDirty")], (0, QC.j)(CC, null, WC, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: CC => "texture" in CC,
            get: CC => CC.texture,
            set: (CC, zC) => {
              CC.texture = zC
            }
          },
          metadata: zC
        }, GC, RC), (0, QC.j)(CC, null, SC, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: CC => "normalBlendMethod" in CC,
            get: CC => CC.normalBlendMethod,
            set: (CC, zC) => {
              CC.normalBlendMethod = zC
            }
          },
          metadata: zC
        }, eC, hC), (0, QC.j)(CC, null, pC, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: CC => "isEnabled" in CC,
            get: CC => CC.isEnabled,
            set: (CC, zC) => {
              CC.isEnabled = zC
            }
          },
          metadata: zC
        }, KC, YC), (0, QC.j)(null, null, NC, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: CC => "diffuseBlendLevel" in CC,
            get: CC => CC.diffuseBlendLevel,
            set: (CC, zC) => {
              CC.diffuseBlendLevel = zC
            }
          },
          metadata: zC
        }, AC, xC), (0, QC.j)(null, null, MC, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: CC => "roughnessBlendLevel" in CC,
            get: CC => CC.roughnessBlendLevel,
            set: (CC, zC) => {
              CC.roughnessBlendLevel = zC
            }
          },
          metadata: zC
        }, JC, IC), (0, QC.j)(null, null, gC, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: CC => "bumpLevel" in CC,
            get: CC => CC.bumpLevel,
            set: (CC, zC) => {
              CC.bumpLevel = zC
            }
          },
          metadata: zC
        }, iC, vC), zC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zC
        })
      })(), CC
    })()
  },
  40102: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC
    });
    class QC {
      constructor(CC) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = CC, CC)
          for (const zC in CC) Object.prototype.hasOwnProperty.call(CC, zC) && this._setDefaultValue(zC)
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
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || CC, this._isDirty = !0
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
        for (const CC of Object.keys(this)) "_" !== CC[0] && this._keys.push(CC);
        if (this._externalProperties)
          for (const CC in this._externalProperties) - 1 === this._keys.indexOf(CC) && this._keys.push(CC)
      }
      isEqual(CC) {
        if (this._keys.length !== CC._keys.length) return !1;
        for (let zC = 0; zC < this._keys.length; zC++) {
          const ZC = this._keys[zC];
          if (this[ZC] !== CC[ZC]) return !1
        }
        return !0
      }
      cloneTo(CC) {
        this._keys.length !== CC._keys.length && (CC._keys = this._keys.slice(0));
        for (let zC = 0; zC < this._keys.length; zC++) {
          const ZC = this._keys[zC];
          CC[ZC] = this[ZC]
        }
      }
      reset() {
        for (const CC of this._keys) this._setDefaultValue(CC)
      }
      _setDefaultValue(CC) {
        const zC = this._externalProperties?.[CC]?.type ?? typeof this[CC],
          ZC = this._externalProperties?.[CC]?.default;
        switch (zC) {
          case "number":
            this[CC] = ZC ?? 0;
            break;
          case "string":
            this[CC] = ZC ?? "";
            break;
          default:
            this[CC] = ZC ?? !1
        }
      }
      toString() {
        let CC = "";
        for (let zC = 0; zC < this._keys.length; zC++) {
          const ZC = this._keys[zC],
            QC = this[ZC];
          switch (typeof QC) {
            case "number":
            case "string":
              CC += "#define " + ZC + " " + QC + "\n";
              break;
            default:
              QC && (CC += "#define " + ZC + "\n")
          }
        }
        return CC
      }
    }
  },
  40200: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => fC,
      h: () => nC,
      i: () => bC
    });
    var QC, wC = ZC(36963);

    function bC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const QC = zC(CC);
      if (!Number.isInteger(QC) || QC < 0 || QC > ZC) throw new Error(`Invalid geometry object ID ${QC} for mesh "${CC.name}". Object IDs must be integers between 0 and 0x${ZC.toString(16).toUpperCase()}.`);
      return QC
    }

    function nC(CC, zC) {
      const ZC = zC(CC);
      if (!Number.isInteger(ZC) || ZC < 0 || ZC > 255 || 0 !== ZC && 0 === (63 & ZC)) throw new Error(`Invalid geometry mesh-blending tag ${ZC} for mesh "${CC.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return ZC
    }! function(CC) {
      CC[CC.Zero = 0] = "Zero", CC[CC.One = 1] = "One", CC[CC.MaxViewZ = 2] = "MaxViewZ", CC[CC.NoClear = 3] = "NoClear"
    }(QC || (QC = {}));
    class fC {
      static CreateConfiguration(CC) {
        return fC._Configurations[CC] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: wC.b.Zero(),
          currentViewProjection: wC.b.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, fC._Configurations[CC]
      }
      static DeleteConfiguration(CC) {
        delete fC._Configurations[CC]
      }
      static GetConfiguration(CC) {
        return fC._Configurations[CC]
      }
      static _PrepareConfiguration(CC, zC, ZC) {
        const QC = fC._Configurations[CC];
        QC._attachments = zC, QC._colorAttachments = ZC, QC._mrtCount = zC.length;
        let wC = "#define PREPASS\n";
        for (const bC of fC.GeometryTextureDescriptions) {
          const CC = QC.defines[bC.defineIndex];
          void 0 !== CC && (wC += `#define ${bC.define}\n#define ${bC.defineIndex} ${CC}\n`)
        }
        QC.objectIdIsRedFormat && (wC += "#define PREPASS_OBJECT_ID_R8\n"), QC._defines = wC + `#define SCENE_MRT_COUNT ${zC.length}\n`
      }
      static _PrepareStringDefines(CC, zC) {
        const ZC = fC._Configurations[CC];
        return !!ZC?._defines && (zC.push(ZC._defines), !0)
      }
      static _BindAttachmentsForEffect(CC, zC) {
        const ZC = fC._Configurations[CC.currentRenderPassId];
        return !ZC?._attachments || (CC.bindAttachments(zC._multiTarget ? ZC._attachments : ZC._colorAttachments), zC._multiTarget || void 0 !== ZC.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(CC) {
        const zC = fC._Configurations[CC.currentRenderPassId];
        zC?._colorAttachments && CC.bindAttachments(zC._colorAttachments)
      }
      static _BindColorAttachments(CC) {
        const zC = fC._Configurations[CC.currentRenderPassId];
        return !zC?._colorAttachments || (CC.bindAttachments(zC._colorAttachments), void 0 !== zC.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(CC) {
        const zC = fC._Configurations[CC.currentRenderPassId];
        return !zC?._colorAttachments || void 0 !== zC.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(CC, zC) {
        const ZC = fC._Configurations[CC.currentRenderPassId];
        if (!ZC) return;
        const QC = CC.getAlphaMode(),
          wC = void 0 === ZC.defines.PREPASS_COLOR_INDEX || 2 === QC || 1 === QC || 17 === QC;
        zC.setFloat("geometryZeroAlphaDiscard", wC ? 1 : 0)
      }
      static AddUniformsAndSamplers(CC, zC) {
        CC.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(CC, zC) {
        for (const ZC of zC)
          if (ZC.Zx)
            for (const zC of ZC.Zx) zC._removeDrawWrapper(CC)
      }
      static PrepareDefines(CC, zC, ZC) {
        if (!ZC._arePrePassDirty) return;
        const QC = fC._Configurations[CC];
        if (!QC) return;
        ZC.PREPASS = !0;
        let wC = 0;
        for (let bC = 0; bC < fC.GeometryTextureDescriptions.length; bC++) {
          const CC = fC.GeometryTextureDescriptions[bC],
            zC = CC.define,
            nC = CC.defineIndex,
            oC = QC.defines[nC];
          void 0 !== oC ? (ZC[zC] = !0, ZC[nC] = oC, wC++) : (ZC[zC] = !1, delete ZC[nC])
        }
        ZC.PREPASS_OBJECT_ID_R8 = QC.objectIdIsRedFormat, ZC.SCENE_MRT_COUNT = QC._mrtCount ?? wC, ZC.BONES_VELOCITY_ENABLED = zC.useBones && zC.computeBonesUsingShaders && zC.skeleton && !zC.skeleton.isUsingTextureForMatrices && -1 === QC.excludedSkinnedMesh.indexOf(zC)
      }
      static Bind(CC, zC, ZC, QC, wC) {
        const oC = fC._Configurations[CC];
        if (!oC) return;
        const qC = ZC.Km(),
          FC = qC.mg();
        if (oC.reverseCulling && FC.setStateCullFaceType(qC._mirroredCameraPosition ? wC.cullBackFaces : !wC.cullBackFaces), void 0 !== oC.defines.PREPASS_OBJECT_ID_INDEX) {
          const CC = oC.objectIdIsRedFormat ? 255 : 16777215;
          let QC = ZC.uniqueId;
          if (oC.objectIdProvider) QC = bC(ZC, oC.objectIdProvider, CC);
          else if (QC > CC) throw new Error(`Invalid geometry object ID ${QC} for mesh "${ZC.name}". Object IDs must be integers between 0 and 0x${CC.toString(16).toUpperCase()}.`);
          zC.setFloat("objectId", QC)
        }
        if (void 0 !== oC.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const CC = oC.meshBlendTagProvider ? nC(ZC, oC.meshBlendTagProvider) : ZC.meshBlendingTag;
          zC.setInt("meshBlendTag", CC)
        }
        if (void 0 !== oC.defines.PREPASS_VELOCITY_INDEX || void 0 !== oC.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const CC = oC._currentWorldMatrices ?? (oC._currentWorldMatrices = {}),
            wC = oC._worldMatrixFrameIds ?? (oC._worldMatrixFrameIds = {});
          if (CC[ZC.uniqueId] || (CC[ZC.uniqueId] = QC.clone(), oC.previousWorldMatrices[ZC.uniqueId] = QC.clone()), wC[ZC.uniqueId] !== FC.frameId && (oC.previousWorldMatrices[ZC.uniqueId].Av(CC[ZC.uniqueId]), wC[ZC.uniqueId] = FC.frameId), CC[ZC.uniqueId].Av(QC), -1 === oC.lastUpdateFrameId ? (oC.lastUpdateFrameId = FC.frameId, oC.previousViewProjection.Av(qC.getTransformMatrix()), oC.currentViewProjection.Av(qC.getTransformMatrix())) : oC.currentViewProjection.updateFlag !== qC.getTransformMatrix().updateFlag ? (oC.lastUpdateFrameId = FC.frameId, oC.previousViewProjection.Av(oC.currentViewProjection), oC.currentViewProjection.Av(qC.getTransformMatrix())) : oC.lastUpdateFrameId !== FC.frameId && (oC.lastUpdateFrameId = FC.frameId, oC.previousViewProjection.Av(oC.currentViewProjection)), zC.setMatrix("previousWorld", oC.previousWorldMatrices[ZC.uniqueId]), zC.setMatrix("previousViewProjection", oC.previousViewProjection), ZC.useBones && ZC.computeBonesUsingShaders && ZC.skeleton) {
            const CC = ZC.skeleton;
            if (!CC.isUsingTextureForMatrices || -1 === zC.getUniformIndex("boneTextureInfo")) {
              const QC = CC.getTransformMatrices(ZC);
              QC && (oC.previousBones[ZC.uniqueId] || (oC.previousBones[ZC.uniqueId] = QC.slice()), zC.setMatrices("mPreviousBones", oC.previousBones[ZC.uniqueId]), oC.previousBones[ZC.uniqueId].set(QC))
            }
          }
        }
      }
    }
    fC.GeometryTextureDescriptions = [{
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
    }], fC._Configurations = {}
  },
  40188: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => NC,
      d: () => gC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(39703),
      nC = ZC(39674);
    const fC = new RegExp("^([gimus]+)!");
    class oC {
      constructor(CC) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = CC, this._scene = CC.Km(), this._engine = this._scene.mg()
      }
      _addPlugin(CC) {
        for (let QC = 0; QC < this._plugins.length; ++QC)
          if (this._plugins[QC].name === CC.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !CC.isCompatible(this._material.shaderLanguage)) throw `The plugin "${CC.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const zC = CC.getClassName();
        oC._MaterialPluginClassToMainDefine[zC] || (oC._MaterialPluginClassToMainDefine[zC] = "MATERIALPLUGIN_" + ++oC._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (CC, zC) => this._handlePluginEvent(CC, zC), this._plugins.push(CC), this._plugins.sort(((CC, zC) => CC.priority - zC.priority)), this._codeInjectionPoints = {};
        const ZC = {};
        ZC[oC._MaterialPluginClassToMainDefine[zC]] = {
          type: "boolean",
          default: !0
        };
        for (const QC of this._plugins) QC.collectDefines(ZC), this._collectPointNames("vertex", QC.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", QC.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = ZC, !0
      }
      _activatePlugin(CC) {
        -1 === this._activePlugins.indexOf(CC) && (this._activePlugins.push(CC), this._activePlugins.sort(((CC, zC) => CC.priority - zC.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), CC.registerForExtraEvents && (this._activePluginsForExtraEvents.push(CC), this._activePluginsForExtraEvents.sort(((CC, zC) => CC.priority - zC.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(CC) {
        for (let zC = 0; zC < this._plugins.length; ++zC)
          if (this._plugins[zC].name === CC) return this._plugins[zC];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(CC) {
        let zC = !0;
        for (const ZC of this._activePlugins) zC = zC && ZC.isReadyForSubMesh(CC.defines, this._scene, this._engine, CC.subMesh);
        CC.isReadyForSubMesh = zC
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(CC) {
        for (const zC of this._activePlugins) zC.prepareDefinesBeforeAttributes(CC.defines, this._scene, CC.mesh)
      }
      _handlePluginEventPrepareDefines(CC) {
        for (const zC of this._activePlugins) zC.prepareDefines(CC.defines, this._scene, CC.mesh)
      }
      _handlePluginEventHardBindForSubMesh(CC) {
        for (const zC of this._activePluginsForExtraEvents) zC.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, CC.subMesh)
      }
      _handlePluginEventBindForSubMesh(CC) {
        for (const zC of this._activePlugins) zC.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, CC.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(CC) {
        let zC = !1;
        for (const ZC of this._activePluginsForExtraEvents)
          if (zC = ZC.hasRenderTargetTextures(), zC) break;
        CC.hasRenderTargetTextures = zC
      }
      _handlePluginEventFillRenderTargetTextures(CC) {
        for (const zC of this._activePluginsForExtraEvents) zC.fillRenderTargetTextures(CC.renderTargets)
      }
      _handlePluginEvent(CC, zC) {
        switch (CC) {
          case 512: {
            const CC = zC;
            for (const zC of this._activePlugins) zC.getActiveTextures(CC.activeTextures);
            break
          }
          case 256: {
            const CC = zC;
            for (const zC of this._activePlugins) zC.getAnimatables(CC.animatables);
            break
          }
          case 1024: {
            const CC = zC;
            let ZC = !1;
            for (const zC of this._activePlugins)
              if (ZC = zC.hasTexture(CC.texture), ZC) break;
            CC.hasTexture = ZC;
            break
          }
          case 2: {
            const CC = zC;
            for (const zC of this._plugins) zC.dispose(CC.forceDisposeTextures);
            break
          }
          case 4:
            zC.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const CC = zC;
            for (const zC of this._activePlugins) CC.fallbackRank = zC.addFallbacks(CC.defines, CC.fallbacks, CC.fallbackRank), zC.getAttributes(CC.attributes, this._scene, CC.mesh);
            this._uniformList.length > 0 && CC.uniforms.push(...this._uniformList), this._samplerList.length > 0 && CC.samplers.push(...this._samplerList), this._uboList.length > 0 && CC.uniformBuffersNames.push(...this._uboList), CC.customCode = this._injectCustomCode(CC, CC.customCode);
            break
          }
          case 8: {
            const CC = zC;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const ZC = 1 === this._material.shaderLanguage;
            for (const zC of this._plugins) {
              const QC = zC.getUniforms(this._material.shaderLanguage);
              if (QC) {
                if (QC.ubo)
                  for (const zC of QC.ubo) {
                    if (zC.size && zC.type) {
                      const QC = zC.arraySize ?? 0;
                      if (CC.ubo.addUniform(zC.name, zC.size, QC), ZC) {
                        let CC;
                        switch (zC.type) {
                          case "mat4":
                            CC = "mat4x4f";
                            break;
                          case "float":
                            CC = "f32";
                            break;
                          default:
                            CC = `${zC.type}f`
                        }
                        this._uboDeclaration += QC > 0 ? `uniform ${zC.name}: array<${CC}, ${QC}>;\n` : `uniform ${zC.name}: ${CC};\n`
                      } else this._uboDeclaration += `${zC.type} ${zC.name}${QC>0?`[${QC}]`:""};\n`
                    }
                    this._uniformList.push(zC.name)
                  }
                QC.vertex && (this._vertexDeclaration += QC.vertex + "\n"), QC.fragment && (this._fragmentDeclaration += QC.fragment + "\n"), QC.externalUniforms && this._uniformList.push(...QC.externalUniforms)
              }
              zC.getSamplers(this._samplerList), zC.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(CC, zC) {
        if (zC)
          for (const ZC in zC) this._codeInjectionPoints[CC] || (this._codeInjectionPoints[CC] = {}), this._codeInjectionPoints[CC][ZC] = !0
      }
      _injectCustomCode(CC, zC) {
        return (ZC, QC) => {
          zC && (QC = zC(ZC, QC)), this._uboDeclaration && (QC = QC.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (QC = QC.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (QC = QC.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const wC = this._codeInjectionPoints?.[ZC];
          if (!wC) return QC;
          let oC = null;
          for (let zC in wC) {
            let wC = "";
            for (const QC of this._activePlugins) {
              const fC = this._material.shaderLanguage;
              let qC = QC.getCustomCode(ZC, fC)?.[zC];
              qC && (QC.resolveIncludes && (null === oC && (oC = {
                defines: [],
                indexParameters: CC.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: nC.b.GetShadersRepository(fC),
                includesShadersStore: nC.b.GetIncludesShadersStore(fC),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                BZC: this._engine.BZC,
                processCodeAfterIncludes: void 0
              }), oC.isFragment = "fragment" === ZC, (0, bC.j)(qC, oC, (CC => qC = CC))), wC += qC + "\n")
            }
            if (wC.length > 0)
              if ("!" === zC.charAt(0)) {
                zC = zC.substring(1);
                let CC = "g";
                if ("!" === zC.charAt(0)) CC = "", zC = zC.substring(1);
                else {
                  const ZC = fC.exec(zC);
                  ZC && ZC.length >= 2 && (CC = ZC[1], zC = zC.substring(CC.length + 1))
                }
                CC.indexOf("g") < 0 && (CC += "g");
                const ZC = new RegExp(zC, CC);
                let bC = ZC.exec(QC);
                for (; null !== bC;) {
                  const {
                    index: CC
                  } = bC, zC = qC(wC, bC);
                  QC = QC.substring(0, CC) + zC + QC.substring(CC + bC[0].length), ZC.lastIndex = CC + zC.length, bC = ZC.exec(QC)
                }
              } else {
                const CC = "#define " + zC;
                QC = QC.replace(CC, "\n" + wC + "\n" + CC)
              }
          }
          return QC
        }
      }
    }
    oC._MaterialPluginClassToMainDefine = {}, oC._MaterialPluginCounter = 0;

    function qC(CC, zC) {
      return CC.replace(/\$(\d+)/g, ((CC, ZC) => {
        const QC = Number(ZC);
        return QC < zC.length ? zC[QC] : ""
      }))
    }
    var FC = ZC(39842),
      WC = ZC(37002);
    let NC = (() => {
        var CC;
        let zC, ZC, bC, nC, fC = [],
          qC = [],
          WC = [],
          NC = [],
          MC = [],
          gC = [],
          SC = [],
          pC = [];
        return CC = class {
          isCompatible(CC) {
            return 0 === CC
          }
          _enable(CC) {
            CC && this._pluginManager._activatePlugin(this)
          }
          constructor(CC, zC, ZC, wC) {
            let bC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              nC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              FC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, QC.n)(this, fC, void 0), this.priority = ((0, QC.n)(this, qC), (0, QC.n)(this, WC, 500)), this.resolveIncludes = ((0, QC.n)(this, NC), (0, QC.n)(this, MC, !1)), this.registerForExtraEvents = ((0, QC.n)(this, gC), (0, QC.n)(this, SC, !1)), this.doNotSerialize = ((0, QC.n)(this, pC), !1), this._material = CC, this.name = zC, this.priority = ZC, this.resolveIncludes = FC, CC.pluginManager || (CC.pluginManager = new oC(CC), CC.Tm.add((() => {
              CC.pluginManager = void 0
            }))), this._pluginDefineNames = wC, this._pluginManager = CC.pluginManager, bC && this._pluginManager._addPlugin(this), nC && this._enable(!0), this.markAllDefinesAsDirty = CC._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(CC, zC, ZC, QC) {
            return !0
          }
          hardBindForSubMesh(CC, zC, ZC, QC) {}
          bindForSubMesh(CC, zC, ZC, QC) {}
          dispose(CC) {}
          getCustomCode(CC) {
            return null
          }
          collectDefines(CC) {
            if (this._pluginDefineNames)
              for (const zC of Object.keys(this._pluginDefineNames)) {
                if ("_" === zC[0]) continue;
                const ZC = typeof this._pluginDefineNames[zC];
                CC[zC] = {
                  type: "number" === ZC ? "number" : "string" === ZC ? "string" : "boolean" === ZC ? "boolean" : "object",
                  default: this._pluginDefineNames[zC]
                }
              }
          }
          prepareDefinesBeforeAttributes(CC, zC, ZC) {}
          prepareDefines(CC, zC, ZC) {}
          hasTexture(CC) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(CC) {}
          getActiveTextures(CC) {}
          getAnimatables(CC) {}
          addFallbacks(CC, zC, ZC) {
            return ZC
          }
          getSamplers(CC) {}
          getAttributes(CC, zC, ZC) {}
          getUniformBuffersNames(CC) {}
          getUniforms() {
            return {}
          }
          copyTo(CC) {
            FC.d.Clone((() => CC), this)
          }
          serialize() {
            return FC.d.Serialize(this)
          }
          parse(CC, zC, ZC) {
            FC.d.Parse((() => this), CC, zC, ZC)
          }
        }, (() => {
          const oC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zC = [(0, wC.M)()], ZC = [(0, wC.M)()], bC = [(0, wC.M)()], nC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: CC => "name" in CC,
              get: CC => CC.name,
              set: (CC, zC) => {
                CC.name = zC
              }
            },
            metadata: oC
          }, fC, qC), (0, QC.j)(null, null, ZC, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: CC => "priority" in CC,
              get: CC => CC.priority,
              set: (CC, zC) => {
                CC.priority = zC
              }
            },
            metadata: oC
          }, WC, NC), (0, QC.j)(null, null, bC, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: CC => "resolveIncludes" in CC,
              get: CC => CC.resolveIncludes,
              set: (CC, zC) => {
                CC.resolveIncludes = zC
              }
            },
            metadata: oC
          }, MC, gC), (0, QC.j)(null, null, nC, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: CC => "registerForExtraEvents" in CC,
              get: CC => CC.registerForExtraEvents,
              set: (CC, zC) => {
                CC.registerForExtraEvents = zC
              }
            },
            metadata: oC
          }, SC, pC), oC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oC
          })
        })(), CC
      })(),
      MC = !1;

    function gC() {
      MC || (MC = !0, (0, WC.d)("BABYLON.MaterialPluginBase", NC))
    }
  },
  40097: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    class QC {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(CC) {
        CC.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(CC) {}
      bindForSubMesh(CC, zC, ZC, QC, wC) {
        if (zC.prePassRenderer && zC.prePassRenderer.enabled && zC.prePassRenderer.currentRTisSceneRT && (-1 !== zC.prePassRenderer.getIndex(2) || -1 !== zC.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[ZC.uniqueId] || (this.previousWorldMatrices[ZC.uniqueId] = QC.clone()), this.previousViewProjection || (this.previousViewProjection = zC.getTransformMatrix().clone(), this.currentViewProjection = zC.getTransformMatrix().clone());
          const wC = zC.mg();
          this.currentViewProjection.updateFlag !== zC.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = wC.frameId, this.previousViewProjection.Av(this.currentViewProjection), this.currentViewProjection.Av(zC.getTransformMatrix())) : this._lastUpdateFrameId !== wC.frameId && (this._lastUpdateFrameId = wC.frameId, this.previousViewProjection.Av(this.currentViewProjection)), CC.setMatrix("previousWorld", this.previousWorldMatrices[ZC.uniqueId]), CC.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[ZC.uniqueId] = QC.clone()
        }
      }
    }
  },
  40211: (CC, zC, ZC) => {
    function QC(CC) {
      return class extends CC {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    ZC.d(zC, {
      d: () => QC
    })
  },
  40092: (CC, zC, ZC) => {
    ZC.d(zC, {
      StandardMaterial: () => QC.d
    });
    var QC = ZC(40095);
    (0, QC.b)()
  },
  40095: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => XC,
      d: () => EC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(39925),
      nC = ZC(39910),
      fC = ZC(37142),
      oC = ZC(39959),
      qC = ZC(40097),
      FC = ZC(40100),
      WC = ZC(39932),
      NC = ZC(40110),
      MC = ZC(40102),
      gC = ZC(40167),
      SC = ZC(40162),
      pC = ZC(40175),
      PC = ZC(40180),
      GC = ZC(40157),
      RC = ZC(40196),
      AC = ZC(40151),
      xC = ZC(39842),
      JC = ZC(40198),
      IC = ZC(40200),
      iC = ZC(40205),
      vC = ZC(40211),
      eC = ZC(40216),
      hC = ZC(37002),
      KC = ZC(39694);
    const YC = {
      effect: null,
      subMesh: null
    };
    class dC extends((0, vC.d)((0, iC.e)(MC.b))) {}
    class mC extends((0, FC.e)(dC)) {
      constructor(CC) {
        super(CC), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class HC extends((0, eC.c)(gC.e)) {}
    let EC = (() => {
        var CC, zC, FC, MC, iC, vC, eC, hC, KC, dC, EC, lC, XC, cC, uC, rC, sC, TC, aC, tC, DC, jC, yC, LC, UC, BC, OC, kC, VC, Cz, zz, Zz, Qz;
        let wz, bz, nz, fz, oz, qz, Fz, Wz, Nz, Mz, gz, Sz, pz, Pz, Gz, Rz, Az, xz, Jz, Iz, iz, vz, ez, hz, Kz, Yz, dz, mz, Hz, Ez, lz, Xz, cz, uz, rz, sz, Tz, az, tz, Dz, jz, yz, Lz, Uz, Bz, Oz, kz, Vz, CZ, zZ, ZZ, QZ, wZ, bZ, nZ, fZ, oZ, qZ, FZ, WZ, NZ, MZ, gZ, SZ, pZ, PZ, GZ, RZ, AZ, xZ, JZ, IZ, iZ, vZ = HC,
          eZ = [],
          hZ = [],
          KZ = [],
          YZ = [],
          dZ = [],
          mZ = [],
          HZ = [],
          EZ = [],
          lZ = [],
          XZ = [],
          cZ = [],
          uZ = [],
          rZ = [],
          sZ = [],
          TZ = [],
          aZ = [],
          tZ = [],
          DZ = [],
          jZ = [],
          yZ = [],
          LZ = [],
          UZ = [],
          BZ = [],
          OZ = [],
          kZ = [],
          VZ = [],
          CQ = [],
          zQ = [],
          ZQ = [],
          QQ = [],
          wQ = [],
          bQ = [],
          nQ = [],
          fQ = [],
          oQ = [],
          qQ = [],
          FQ = [],
          WQ = [],
          NQ = [],
          MQ = [],
          gQ = [],
          SQ = [],
          pQ = [],
          PQ = [],
          GQ = [],
          RQ = [],
          AQ = [],
          xQ = [],
          JQ = [],
          IQ = [],
          iQ = [],
          vQ = [],
          eQ = [],
          hQ = [],
          KQ = [],
          YQ = [],
          dQ = [],
          mQ = [],
          HQ = [],
          EQ = [],
          lQ = [],
          XQ = [],
          cQ = [],
          uQ = [],
          rQ = [],
          sQ = [],
          TQ = [],
          aQ = [],
          tQ = [],
          DQ = [],
          jQ = [],
          yQ = [],
          LQ = [],
          UQ = [],
          BQ = [],
          OQ = [],
          kQ = [],
          VQ = [],
          Cw = [],
          zw = [],
          Zw = [],
          Qw = [],
          ww = [],
          bw = [],
          nw = [],
          fw = [],
          ow = [],
          qw = [],
          Fw = [],
          Ww = [],
          Nw = [],
          Mw = [],
          gw = [],
          Sw = [],
          pw = [],
          Pw = [],
          Gw = [],
          Rw = [],
          Aw = [],
          xw = [],
          Jw = [],
          Iw = [],
          iw = [],
          vw = [],
          ew = [],
          hw = [],
          Kw = [],
          Yw = [],
          dw = [],
          mw = [],
          Hw = [],
          Ew = [],
          lw = [],
          Xw = [],
          uw = [],
          rw = [],
          sw = [],
          Tw = [],
          aw = [],
          tw = [],
          Dw = [],
          jw = [],
          yw = [],
          Lw = [],
          Uw = [],
          Bw = [],
          Ow = [],
          kw = [],
          Vw = [],
          Cb = [],
          zb = [],
          Zb = [],
          Qb = [],
          wb = [],
          bb = [],
          nb = [],
          fb = [],
          ob = [],
          qb = [],
          Fb = [],
          Wb = [],
          Nb = [],
          Mb = [],
          gb = [],
          Sb = [],
          pb = [];
        return CC = class extends vZ {
          get diffuseTexture() {
            return (0, QC.e)(this, zC, "f")
          }
          set diffuseTexture(CC) {
            (0, QC.f)(this, zC, CC, "f")
          }
          get ambientTexture() {
            return (0, QC.e)(this, FC, "f")
          }
          set ambientTexture(CC) {
            (0, QC.f)(this, FC, CC, "f")
          }
          get opacityTexture() {
            return (0, QC.e)(this, MC, "f")
          }
          set opacityTexture(CC) {
            (0, QC.f)(this, MC, CC, "f")
          }
          get reflectionTexture() {
            return (0, QC.e)(this, iC, "f")
          }
          set reflectionTexture(CC) {
            (0, QC.f)(this, iC, CC, "f")
          }
          get emissiveTexture() {
            return (0, QC.e)(this, vC, "f")
          }
          set emissiveTexture(CC) {
            (0, QC.f)(this, vC, CC, "f")
          }
          get specularTexture() {
            return (0, QC.e)(this, eC, "f")
          }
          set specularTexture(CC) {
            (0, QC.f)(this, eC, CC, "f")
          }
          get bumpTexture() {
            return (0, QC.e)(this, hC, "f")
          }
          set bumpTexture(CC) {
            (0, QC.f)(this, hC, CC, "f")
          }
          get lightmapTexture() {
            return (0, QC.e)(this, KC, "f")
          }
          set lightmapTexture(CC) {
            (0, QC.f)(this, KC, CC, "f")
          }
          get refractionTexture() {
            return (0, QC.e)(this, dC, "f")
          }
          set refractionTexture(CC) {
            (0, QC.f)(this, dC, CC, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, QC.e)(this, EC, "f")
          }
          set useAlphaFromDiffuseTexture(CC) {
            (0, QC.f)(this, EC, CC, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, QC.e)(this, lC, "f")
          }
          set useEmissiveAsIllumination(CC) {
            (0, QC.f)(this, lC, CC, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, QC.e)(this, XC, "f")
          }
          set linkEmissiveWithDiffuse(CC) {
            (0, QC.f)(this, XC, CC, "f")
          }
          get useSpecularOverAlpha() {
            return (0, QC.e)(this, cC, "f")
          }
          set useSpecularOverAlpha(CC) {
            (0, QC.f)(this, cC, CC, "f")
          }
          get useReflectionOverAlpha() {
            return (0, QC.e)(this, uC, "f")
          }
          set useReflectionOverAlpha(CC) {
            (0, QC.f)(this, uC, CC, "f")
          }
          get disableLighting() {
            return (0, QC.e)(this, rC, "f")
          }
          set disableLighting(CC) {
            (0, QC.f)(this, rC, CC, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, QC.e)(this, sC, "f")
          }
          set useObjectSpaceNormalMap(CC) {
            (0, QC.f)(this, sC, CC, "f")
          }
          get useParallax() {
            return (0, QC.e)(this, TC, "f")
          }
          set useParallax(CC) {
            (0, QC.f)(this, TC, CC, "f")
          }
          get useParallaxOcclusion() {
            return (0, QC.e)(this, aC, "f")
          }
          set useParallaxOcclusion(CC) {
            (0, QC.f)(this, aC, CC, "f")
          }
          get roughness() {
            return (0, QC.e)(this, tC, "f")
          }
          set roughness(CC) {
            (0, QC.f)(this, tC, CC, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, QC.e)(this, DC, "f")
          }
          set useLightmapAsShadowmap(CC) {
            (0, QC.f)(this, DC, CC, "f")
          }
          get diffuseFresnelParameters() {
            return (0, QC.e)(this, jC, "f")
          }
          set diffuseFresnelParameters(CC) {
            (0, QC.f)(this, jC, CC, "f")
          }
          get opacityFresnelParameters() {
            return (0, QC.e)(this, yC, "f")
          }
          set opacityFresnelParameters(CC) {
            (0, QC.f)(this, yC, CC, "f")
          }
          get reflectionFresnelParameters() {
            return (0, QC.e)(this, LC, "f")
          }
          set reflectionFresnelParameters(CC) {
            (0, QC.f)(this, LC, CC, "f")
          }
          get refractionFresnelParameters() {
            return (0, QC.e)(this, UC, "f")
          }
          set refractionFresnelParameters(CC) {
            (0, QC.f)(this, UC, CC, "f")
          }
          get emissiveFresnelParameters() {
            return (0, QC.e)(this, BC, "f")
          }
          set emissiveFresnelParameters(CC) {
            (0, QC.f)(this, BC, CC, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, QC.e)(this, OC, "f")
          }
          set useReflectionFresnelFromSpecular(CC) {
            (0, QC.f)(this, OC, CC, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, QC.e)(this, kC, "f")
          }
          set useGlossinessFromSpecularMapAlpha(CC) {
            (0, QC.f)(this, kC, CC, "f")
          }
          get maxSimultaneousLights() {
            return (0, QC.e)(this, VC, "f")
          }
          set maxSimultaneousLights(CC) {
            (0, QC.f)(this, VC, CC, "f")
          }
          get invertNormalMapX() {
            return (0, QC.e)(this, Cz, "f")
          }
          set invertNormalMapX(CC) {
            (0, QC.f)(this, Cz, CC, "f")
          }
          get invertNormalMapY() {
            return (0, QC.e)(this, zz, "f")
          }
          set invertNormalMapY(CC) {
            (0, QC.f)(this, zz, CC, "f")
          }
          get twoSidedLighting() {
            return (0, QC.e)(this, Zz, "f")
          }
          set twoSidedLighting(CC) {
            (0, QC.f)(this, Zz, CC, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, QC.e)(this, Qz, "f")
          }
          set applyDecalMapAfterDetailMap(CC) {
            (0, QC.f)(this, Qz, CC, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(ZC, wC) {
            super(ZC, wC, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || CC.ForceGLSL), this._diffuseTexture = (0, QC.n)(this, eZ, null), zC.set(this, ((0, QC.n)(this, hZ), (0, QC.n)(this, KZ, void 0))), this._ambientTexture = ((0, QC.n)(this, YZ), (0, QC.n)(this, dZ, null)), FC.set(this, ((0, QC.n)(this, mZ), (0, QC.n)(this, HZ, void 0))), this._opacityTexture = ((0, QC.n)(this, EZ), (0, QC.n)(this, lZ, null)), MC.set(this, ((0, QC.n)(this, XZ), (0, QC.n)(this, cZ, void 0))), this._reflectionTexture = ((0, QC.n)(this, uZ), (0, QC.n)(this, rZ, null)), iC.set(this, ((0, QC.n)(this, sZ), (0, QC.n)(this, TZ, void 0))), this._emissiveTexture = ((0, QC.n)(this, aZ), (0, QC.n)(this, tZ, null)), vC.set(this, ((0, QC.n)(this, DZ), (0, QC.n)(this, jZ, void 0))), this._specularTexture = ((0, QC.n)(this, yZ), (0, QC.n)(this, LZ, null)), eC.set(this, ((0, QC.n)(this, UZ), (0, QC.n)(this, BZ, void 0))), this._bumpTexture = ((0, QC.n)(this, OZ), (0, QC.n)(this, kZ, null)), hC.set(this, ((0, QC.n)(this, VZ), (0, QC.n)(this, CQ, void 0))), this._lightmapTexture = ((0, QC.n)(this, zQ), (0, QC.n)(this, ZQ, null)), KC.set(this, ((0, QC.n)(this, QQ), (0, QC.n)(this, wQ, void 0))), this._refractionTexture = ((0, QC.n)(this, bQ), (0, QC.n)(this, nQ, null)), dC.set(this, ((0, QC.n)(this, fQ), (0, QC.n)(this, oQ, void 0))), this.ambientColor = ((0, QC.n)(this, qQ), (0, QC.n)(this, FQ, new fC.e(0, 0, 0))), this.diffuseColor = ((0, QC.n)(this, WQ), (0, QC.n)(this, NQ, new fC.e(1, 1, 1))), this.specularColor = ((0, QC.n)(this, MQ), (0, QC.n)(this, gQ, new fC.e(1, 1, 1))), this.emissiveColor = ((0, QC.n)(this, SQ), (0, QC.n)(this, pQ, new fC.e(0, 0, 0))), this.specularPower = ((0, QC.n)(this, PQ), (0, QC.n)(this, GQ, 64)), this._useAlphaFromDiffuseTexture = ((0, QC.n)(this, RQ), (0, QC.n)(this, AQ, !1)), EC.set(this, ((0, QC.n)(this, xQ), (0, QC.n)(this, JQ, void 0))), this._useEmissiveAsIllumination = ((0, QC.n)(this, IQ), (0, QC.n)(this, iQ, !1)), lC.set(this, ((0, QC.n)(this, vQ), (0, QC.n)(this, eQ, void 0))), this._linkEmissiveWithDiffuse = ((0, QC.n)(this, hQ), (0, QC.n)(this, KQ, !1)), XC.set(this, ((0, QC.n)(this, YQ), (0, QC.n)(this, dQ, void 0))), this._useSpecularOverAlpha = ((0, QC.n)(this, mQ), (0, QC.n)(this, HQ, !1)), cC.set(this, ((0, QC.n)(this, EQ), (0, QC.n)(this, lQ, void 0))), this._useReflectionOverAlpha = ((0, QC.n)(this, XQ), (0, QC.n)(this, cQ, !1)), uC.set(this, ((0, QC.n)(this, uQ), (0, QC.n)(this, rQ, void 0))), this._disableLighting = ((0, QC.n)(this, sQ), (0, QC.n)(this, TQ, !1)), rC.set(this, ((0, QC.n)(this, aQ), (0, QC.n)(this, tQ, void 0))), this._useObjectSpaceNormalMap = ((0, QC.n)(this, DQ), (0, QC.n)(this, jQ, !1)), sC.set(this, ((0, QC.n)(this, yQ), (0, QC.n)(this, LQ, void 0))), this._useParallax = ((0, QC.n)(this, UQ), (0, QC.n)(this, BQ, !1)), TC.set(this, ((0, QC.n)(this, OQ), (0, QC.n)(this, kQ, void 0))), this._useParallaxOcclusion = ((0, QC.n)(this, VQ), (0, QC.n)(this, Cw, !1)), aC.set(this, ((0, QC.n)(this, zw), (0, QC.n)(this, Zw, void 0))), this.parallaxScaleBias = ((0, QC.n)(this, Qw), (0, QC.n)(this, ww, .05)), this._roughness = ((0, QC.n)(this, bw), (0, QC.n)(this, nw, 0)), tC.set(this, ((0, QC.n)(this, fw), (0, QC.n)(this, ow, void 0))), this.indexOfRefraction = ((0, QC.n)(this, qw), (0, QC.n)(this, Fw, .98)), this.invertRefractionY = ((0, QC.n)(this, Ww), (0, QC.n)(this, Nw, !0)), this.alphaCutOff = ((0, QC.n)(this, Mw), (0, QC.n)(this, gw, .4)), this._useLightmapAsShadowmap = ((0, QC.n)(this, Sw), (0, QC.n)(this, pw, !1)), DC.set(this, ((0, QC.n)(this, Pw), (0, QC.n)(this, Gw, void 0))), this._diffuseFresnelParameters = ((0, QC.n)(this, Rw), (0, QC.n)(this, Aw, void 0)), jC.set(this, ((0, QC.n)(this, xw), (0, QC.n)(this, Jw, void 0))), this._opacityFresnelParameters = ((0, QC.n)(this, Iw), (0, QC.n)(this, iw, void 0)), yC.set(this, ((0, QC.n)(this, vw), (0, QC.n)(this, ew, void 0))), this._reflectionFresnelParameters = ((0, QC.n)(this, hw), (0, QC.n)(this, Kw, void 0)), LC.set(this, ((0, QC.n)(this, Yw), (0, QC.n)(this, dw, void 0))), this._refractionFresnelParameters = ((0, QC.n)(this, mw), (0, QC.n)(this, Hw, void 0)), UC.set(this, ((0, QC.n)(this, Ew), (0, QC.n)(this, lw, void 0))), this._emissiveFresnelParameters = ((0, QC.n)(this, Xw), (0, QC.n)(this, uw, void 0)), BC.set(this, ((0, QC.n)(this, rw), (0, QC.n)(this, sw, void 0))), this._useReflectionFresnelFromSpecular = ((0, QC.n)(this, Tw), (0, QC.n)(this, aw, !1)), OC.set(this, ((0, QC.n)(this, tw), (0, QC.n)(this, Dw, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, QC.n)(this, jw), (0, QC.n)(this, yw, !1)), kC.set(this, ((0, QC.n)(this, Lw), (0, QC.n)(this, Uw, void 0))), this._maxSimultaneousLights = ((0, QC.n)(this, Bw), (0, QC.n)(this, Ow, 4)), VC.set(this, ((0, QC.n)(this, kw), (0, QC.n)(this, Vw, void 0))), this._invertNormalMapX = ((0, QC.n)(this, Cb), (0, QC.n)(this, zb, !1)), Cz.set(this, ((0, QC.n)(this, Zb), (0, QC.n)(this, Qb, void 0))), this._invertNormalMapY = ((0, QC.n)(this, wb), (0, QC.n)(this, bb, !1)), zz.set(this, ((0, QC.n)(this, nb), (0, QC.n)(this, fb, void 0))), this._twoSidedLighting = ((0, QC.n)(this, ob), (0, QC.n)(this, qb, !1)), Zz.set(this, ((0, QC.n)(this, Fb), (0, QC.n)(this, Wb, void 0))), this._applyDecalMapAfterDetailMap = ((0, QC.n)(this, Nb), (0, QC.n)(this, Mb, !1)), Qz.set(this, ((0, QC.n)(this, gb), (0, QC.n)(this, Sb, void 0))), this._vertexPullingMetadata = ((0, QC.n)(this, pb), null), this._renderTargets = new bC.i(16), this._globalAmbientColor = new fC.e(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new PC.b(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new qC.c, this.getRenderTargetTextures = () => (this._renderTargets.reset(), CC.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), CC.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(CC.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(CC.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === NC.d.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== NC.d.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(zC, ZC) {
            let QC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const wC = ZC._drawWrapper;
            if (wC.effect && this.isFrozen && wC._wasPreviouslyReady && wC._wasPreviouslyUsingInstances === QC) return !0;
            ZC.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), ZC.materialDefines = new mC(this._eventInfo.defineNames));
            const bC = this.Km(),
              nC = ZC.materialDefines;
            if (this._isReadyForSubMesh(ZC)) return !0;
            const fC = bC.mg();
            if (nC._needNormals = (0, AC.db)(bC, zC, nC, !0, this._maxSimultaneousLights, this._disableLighting), !(0, AC.d)(bC, zC, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, AC.lb)(bC, nC);
            const FC = this.needAlphaBlendingForMesh(zC) && this.Km().useOrderIndependentTransparency;
            if ((0, AC.qb)(bC, nC, this.canRenderToMRT && !FC), (0, AC.nb)(bC, nC, FC), IC.e.PrepareDefines(fC.currentRenderPassId, zC, nC), nC._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, nC._needUVs = !1;
              for (let CC = 1; CC <= 6; ++CC) nC["MAINUV" + CC] = !1;
              if (bC.texturesEnabled) {
                if (nC.DIFFUSEDIRECTUV = 0, nC.BUMPDIRECTUV = 0, nC.AMBIENTDIRECTUV = 0, nC.OPACITYDIRECTUV = 0, nC.EMISSIVEDIRECTUV = 0, nC.SPECULARDIRECTUV = 0, nC.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && CC.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, AC.gb)(this._diffuseTexture, nC, "DIFFUSE")
                } else nC.DIFFUSE = !1;
                if (this._ambientTexture && CC.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, AC.gb)(this._ambientTexture, nC, "AMBIENT")
                } else nC.AMBIENT = !1;
                if (this._opacityTexture && CC.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, AC.gb)(this._opacityTexture, nC, "OPACITY"), nC.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else nC.OPACITY = !1;
                if (this._reflectionTexture && CC.ReflectionTextureEnabled ? (nC.ROUGHNESS = this._roughness > 0, nC.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (nC.ROUGHNESS = !1, nC.REFLECTIONOVERALPHA = !1), !(0, AC.ab)(bC, this._reflectionTexture, nC)) return !1;
                if (this._emissiveTexture && CC.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, AC.gb)(this._emissiveTexture, nC, "EMISSIVE")
                } else nC.EMISSIVE = !1;
                if (this._lightmapTexture && CC.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, AC.gb)(this._lightmapTexture, nC, "LIGHTMAP"), nC.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, nC.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else nC.LIGHTMAP = !1;
                if (this._specularTexture && CC.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, AC.gb)(this._specularTexture, nC, "SPECULAR"), nC.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else nC.SPECULAR = !1;
                if (bC.mg().getCaps().standardDerivatives && this._bumpTexture && CC.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, AC.gb)(this._bumpTexture, nC, "BUMP"), nC.PARALLAX = this._useParallax, nC.PARALLAX_RHS = bC.useRightHandedSystem, nC.PARALLAXOCCLUSION = this._useParallaxOcclusion, nC.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else nC.BUMP = !1, nC.PARALLAX = !1, nC.PARALLAX_RHS = !1, nC.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && CC.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  nC._needUVs = !0, nC.REFRACTION = !0, nC.REFRACTIONMAP_3D = this._refractionTexture.isCube, nC.RGBDREFRACTION = this._refractionTexture.isRGBD, nC.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else nC.REFRACTION = !1;
                nC.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else nC.DIFFUSE = !1, nC.AMBIENT = !1, nC.OPACITY = !1, nC.REFLECTION = !1, nC.EMISSIVE = !1, nC.LIGHTMAP = !1, nC.BUMP = !1, nC.REFRACTION = !1;
              nC.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), nC.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, nC.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, nC.SPECULAROVERALPHA = this._useSpecularOverAlpha, nC.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, nC.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, nC.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(zC), nC.TEXTURE_REPETITION_MODE = fC.version > 1 || fC.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = nC, this._eventInfo.subMesh = ZC, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (nC._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(nC), nC.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, nC.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (nC._areFresnelDirty && (CC.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (nC.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, nC.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, nC.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, nC.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, nC.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, nC.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, nC._needNormals = !0, nC.FRESNEL = !0) : nC.FRESNEL = !1), nC.AREALIGHTUSED || nC.CLUSTLIGHT_BATCH)
              for (let CC = 0; CC < zC.lightSources.length; CC++)
                if (!zC.lightSources[CC]._isReady()) return !1;
            (0, AC.ib)(zC, bC, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(zC), nC, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ZC.getRenderingMesh(), this._isVertexOutputInvariant), (0, AC.Z)(bC, fC, this, nC, QC, null, ZC.getRenderingMesh().hasThinInstances), this._eventInfo.defines = nC, this._eventInfo.mesh = zC, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, AC.X)(zC, nC, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let NC = !1;
            if (nC.isDirty) {
              const QC = nC._areLightsDisposed;
              nC.markAsProcessed();
              const wC = new pC.c;
              nC.REFLECTION && wC.addFallback(0, "REFLECTION"), nC.SPECULAR && wC.addFallback(0, "SPECULAR"), nC.BUMP && wC.addFallback(0, "BUMP"), nC.PARALLAX && wC.addFallback(1, "PARALLAX"), nC.PARALLAX_RHS && wC.addFallback(1, "PARALLAX_RHS"), nC.PARALLAXOCCLUSION && wC.addFallback(0, "PARALLAXOCCLUSION"), nC.SPECULAROVERALPHA && wC.addFallback(0, "SPECULAROVERALPHA"), nC.FOG && wC.addFallback(1, "FOG"), nC.POINTSIZE && wC.addFallback(0, "POINTSIZE"), nC.LOGARITHMICDEPTH && wC.addFallback(0, "LOGARITHMICDEPTH"), (0, AC.F)(nC, wC, this._maxSimultaneousLights), nC.SPECULARTERM && wC.addFallback(0, "SPECULARTERM"), nC.DIFFUSEFRESNEL && wC.addFallback(1, "DIFFUSEFRESNEL"), nC.OPACITYFRESNEL && wC.addFallback(2, "OPACITYFRESNEL"), nC.REFLECTIONFRESNEL && wC.addFallback(3, "REFLECTIONFRESNEL"), nC.EMISSIVEFRESNEL && wC.addFallback(4, "EMISSIVEFRESNEL"), nC.FRESNEL && wC.addFallback(4, "FRESNEL"), nC.MULTIVIEW && wC.addFallback(0, "MULTIVIEW");
              const FC = [oC.k.PositionKind];
              nC.NORMAL && FC.push(oC.k.NormalKind), nC.TANGENT && FC.push(oC.k.TangentKind);
              for (let CC = 1; CC <= 6; ++CC) nC["UV" + CC] && FC.push(`uv${1===CC?"":CC}`);
              nC.VERTEXCOLOR && FC.push(oC.k.ColorKind), (0, AC.K)(FC, zC, nC, wC), (0, AC.N)(FC, nC), (0, AC.Q)(FC, zC, nC), (0, AC.J)(FC, zC, nC);
              let MC = "default";
              const gC = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                SC = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, AC.wb)(gC, SC, !1);
              const PC = ["Material", "Scene", "Mesh"],
                xC = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: nC.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = wC, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = nC, this._eventInfo.uniforms = gC, this._eventInfo.attributes = FC, this._eventInfo.samplers = SC, this._eventInfo.uniformBuffersNames = PC, this._eventInfo.customCode = void 0, this._eventInfo.mesh = zC, this._eventInfo.indexParameters = xC, this._callbackPluginEventGeneric(128, this._eventInfo), IC.e.AddUniformsAndSamplers(gC, SC), qC.c.AddUniforms(gC), qC.c.AddSamplers(SC), WC.e && (WC.e.PrepareUniforms(gC, nC), WC.e.PrepareSamplers(SC, nC)), (0, AC.xb)({
                  uniformsNames: gC,
                  uniformBuffersNames: PC,
                  samplers: SC,
                  defines: nC,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, GC.d)(gC), this._useVertexPulling) {
                const CC = ZC.getRenderingMesh(),
                  zC = CC?.geometry;
                zC && (this._vertexPullingMetadata = (0, RC.d)(zC), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((CC, zC) => {
                  gC.push(`vp_${zC}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const JC = {};
              this.customShaderNameResolve && (MC = this.customShaderNameResolve(MC, gC, PC, SC, nC, FC, JC));
              const iC = nC.toString(),
                vC = ZC.effect,
                eC = bC.mg().createEffect(MC, {
                  attributes: FC,
                  uniformsNames: gC,
                  uniformBuffersNames: PC,
                  samplers: SC,
                  defines: iC,
                  fallbacks: wC,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: xC,
                  processFinalCode: JC.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: nC.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: CC._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, fC);
              if (this._eventInfo.customCode = void 0, eC)
                if (this._onEffectCreatedObservable && (YC.effect = eC, YC.subMesh = ZC, this._onEffectCreatedObservable.notifyObservers(YC)), this.allowShaderHotSwapping && vC && !eC.isReady()) {
                  if (nC.markAsUnprocessed(), NC = this.isFrozen, QC) return nC._areLightsDisposed = !0, !1
                } else bC.resetCachedMaterial(), ZC.setEffect(eC, nC, this._materialContext)
            }
            return !(!ZC.effect || !ZC.effect.isReady()) && (nC._renderId = bC.getRenderId(), wC._wasPreviouslyReady = !NC, wC._wasPreviouslyUsingInstances = QC, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const CC = this._uniformBuffer;
            CC.addUniform("diffuseLeftColor", 4), CC.addUniform("diffuseRightColor", 4), CC.addUniform("opacityParts", 4), CC.addUniform("reflectionLeftColor", 4), CC.addUniform("reflectionRightColor", 4), CC.addUniform("refractionLeftColor", 4), CC.addUniform("refractionRightColor", 4), CC.addUniform("emissiveLeftColor", 4), CC.addUniform("emissiveRightColor", 4), CC.addUniform("vDiffuseInfos", 2), CC.addUniform("vAmbientInfos", 2), CC.addUniform("vOpacityInfos", 2), CC.addUniform("vEmissiveInfos", 2), CC.addUniform("vLightmapInfos", 2), CC.addUniform("vSpecularInfos", 2), CC.addUniform("vBumpInfos", 3), CC.addUniform("diffuseMatrix", 16), CC.addUniform("ambientMatrix", 16), CC.addUniform("opacityMatrix", 16), CC.addUniform("emissiveMatrix", 16), CC.addUniform("lightmapMatrix", 16), CC.addUniform("specularMatrix", 16), CC.addUniform("bumpMatrix", 16), CC.addUniform("vTangentSpaceParams", 2), CC.addUniform("pointSize", 1), CC.addUniform("alphaCutOff", 1), CC.addUniform("refractionMatrix", 16), CC.addUniform("vRefractionInfos", 4), CC.addUniform("vRefractionPosition", 3), CC.addUniform("vRefractionSize", 3), CC.addUniform("vSpecularColor", 4), CC.addUniform("vEmissiveColor", 3), CC.addUniform("vDiffuseColor", 4), CC.addUniform("vAmbientColor", 3), CC.addUniform("cameraInfo", 4), CC.addUniform("vTextureRepetitionHexTilingParams", 4), (0, AC.ub)(CC, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(zC, ZC, QC) {
            const wC = this.Km(),
              bC = QC.materialDefines;
            if (!bC) return;
            const oC = QC.effect;
            if (!oC) return;
            this._activeEffect = oC, ZC.getMeshUniformBuffer().bindToEffect(oC, "Mesh"), ZC.transferToEffect(zC), this._uniformBuffer.bindToEffect(oC, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, wC, ZC, zC, this.isFrozen), IC.e.Bind(wC.mg().currentRenderPassId, this._activeEffect, ZC, zC, this);
            const qC = wC.activeCamera;
            qC ? this._uniformBuffer.updateFloat4("cameraInfo", qC.minZ, qC.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const FC = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", FC[0], FC[1], FC[2], FC[3]), this._eventInfo.subMesh = QC, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), bC.OBJECTSPACE_NORMALMAP && (zC.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const WC = this._mustRebind(wC, oC, QC, ZC.visibility),
              NC = wC.mg()._features.needToAlwaysBindUniformBuffers;
            (0, AC.f)(ZC, oC), this._vertexPullingMetadata && (0, RC.c)(oC, this._vertexPullingMetadata);
            const MC = this._uniformBuffer;
            if (WC) {
              if (this.bindViewProjection(oC), !MC.useUbo || !this.isFrozen || !MC.isSync || QC._drawWrapper._forceRebindOnNextCall) {
                if (CC.FresnelEnabled && bC.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (MC.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), MC.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const CC = fC.j.Color3[0];
                    CC.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), MC.updateColor4("opacityParts", CC, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (MC.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), MC.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (MC.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), MC.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (MC.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), MC.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (bC.ALPHATEST && MC.updateFloat("alphaCutOff", this.alphaCutOff), wC.texturesEnabled && (this._diffuseTexture && CC.DiffuseTextureEnabled && (MC.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, AC.B)(this._diffuseTexture, MC, "diffuse")), this._ambientTexture && CC.AmbientTextureEnabled && (MC.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, AC.B)(this._ambientTexture, MC, "ambient")), this._opacityTexture && CC.OpacityTextureEnabled && (MC.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, AC.B)(this._opacityTexture, MC, "opacity")), (0, AC.j)(wC, bC, MC, fC.e.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && CC.ReflectionTextureEnabled || MC.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && CC.EmissiveTextureEnabled && (MC.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, AC.B)(this._emissiveTexture, MC, "emissive")), this._lightmapTexture && CC.LightmapTextureEnabled && (MC.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, AC.B)(this._lightmapTexture, MC, "lightmap")), this._specularTexture && CC.SpecularTextureEnabled && (MC.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, AC.B)(this._specularTexture, MC, "specular")), this._bumpTexture && wC.mg().getCaps().standardDerivatives && CC.BumpTextureEnabled && (MC.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, AC.B)(this._bumpTexture, MC, "bump"), wC._mirroredCameraPosition ? MC.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : MC.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && CC.RefractionTextureEnabled)) {
                  let CC = 1;
                  if (this._refractionTexture.isCube || (MC.x_("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (CC = this._refractionTexture.depth)), MC.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, CC, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const CC = this._refractionTexture;
                    MC.updateVector3("vRefractionPosition", CC.boundingBoxPosition), MC.updateVector3("vRefractionSize", CC.boundingBoxSize)
                  }
                }
                this.pointsCloud && MC.updateFloat("pointSize", this.pointSize), MC.updateColor4("vSpecularColor", this.specularColor, this.specularPower), MC.updateColor3("vEmissiveColor", CC.EmissiveTextureEnabled ? this.emissiveColor : fC.e.BlackReadOnly), MC.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), wC.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), MC.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              wC.texturesEnabled && (this._diffuseTexture && CC.DiffuseTextureEnabled && oC.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && CC.AmbientTextureEnabled && oC.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && CC.OpacityTextureEnabled && oC.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && CC.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? oC.setTexture("reflectionCubeSampler", this._reflectionTexture) : oC.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && CC.EmissiveTextureEnabled && oC.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && CC.LightmapTextureEnabled && oC.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && CC.SpecularTextureEnabled && oC.setTexture("specularSampler", this._specularTexture), this._bumpTexture && wC.mg().getCaps().standardDerivatives && CC.BumpTextureEnabled && oC.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && CC.RefractionTextureEnabled && (this._refractionTexture.isCube ? oC.setTexture("refractionCubeSampler", this._refractionTexture) : oC.setTexture("refraction2DSampler", this._refractionTexture))), this.Km().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(ZC) && this.Km().depthPeelingRenderer.bind(oC), this._eventInfo.subMesh = QC, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, GC.g)(oC, this, wC), this.bindEyePosition(oC)
            } else NC && (this._needToBindSceneUbo = !0);
            !WC && this.isFrozen && !NC || !wC.lightsEnabled || this._disableLighting || (0, AC.q)(wC, ZC, oC, bC, this._maxSimultaneousLights), !WC && this.isFrozen || ((wC.fogEnabled && ZC.applyFog && wC.fogMode !== nC.g.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || ZC.receiveShadows || bC.PREPASS || bC.CLUSTLIGHT_BATCH) && this.bindView(oC), (0, AC.h)(wC, ZC, oC), bC.NUM_MORPH_INFLUENCERS && (0, AC.u)(ZC, oC), bC.BAKED_VERTEX_ANIMATION_TEXTURE && ZC.bakedVertexAnimationManager?.bind(oC, bC.INSTANCES), this.useLogarithmicDepth && (0, AC.t)(bC, oC, wC), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(ZC, this._activeEffect, QC), MC.update()
          }
          _canBindRunFollower(zC, ZC, QC, wC, bC) {
            const nC = zC.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === CC.prototype.isReadyForSubMesh && this.bindForSubMesh === CC.prototype.bindForSubMesh && this._mustRebind === gC.e.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !ZC._features.needToAlwaysBindUniformBuffers && !(nC && nC.enabled && nC.currentRTisSceneRT) && !IC.e._Configurations[ZC.currentRenderPassId] && !wC.materialDefines?.OBJECTSPACE_NORMALMAP && !QC.skeleton && !bC._bonesComputationForcedToCPU
          }
          _bindRunFollower(CC, zC, ZC, QC) {
            this._activeEffect = QC, zC.getMeshUniformBuffer().bindToEffect(QC, "Mesh"), zC.transferToEffect(CC);
            const wC = this._uniformBuffer;
            wC.bindToEffect(QC, "Material");
            const bC = this._scene.activeCamera;
            bC ? wC.updateFloat4("cameraInfo", bC.minZ, bC.maxZ, 0, 0) : wC.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const nC = this.textureRepetitionHexTilingParams;
            wC.updateFloat4("vTextureRepetitionHexTilingParams", nC[0], nC[1], nC[2], nC[3]), this._afterBind(zC, QC, ZC), wC.update()
          }
          getAnimatables() {
            const CC = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && CC.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && CC.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && CC.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && CC.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && CC.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && CC.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && CC.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && CC.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && CC.push(this._refractionTexture), CC
          }
          getActiveTextures() {
            const CC = super.getActiveTextures();
            return this._diffuseTexture && CC.push(this._diffuseTexture), this._ambientTexture && CC.push(this._ambientTexture), this._opacityTexture && CC.push(this._opacityTexture), this._reflectionTexture && CC.push(this._reflectionTexture), this._emissiveTexture && CC.push(this._emissiveTexture), this._specularTexture && CC.push(this._specularTexture), this._bumpTexture && CC.push(this._bumpTexture), this._lightmapTexture && CC.push(this._lightmapTexture), this._refractionTexture && CC.push(this._refractionTexture), CC
          }
          hasTexture(CC) {
            return !!super.hasTexture(CC) || (this._diffuseTexture === CC || (this._ambientTexture === CC || (this._opacityTexture === CC || (this._reflectionTexture === CC || (this._emissiveTexture === CC || (this._specularTexture === CC || (this._bumpTexture === CC || (this._lightmapTexture === CC || this._refractionTexture === CC))))))))
          }
          dispose(CC, zC) {
            zC && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(CC, zC)
          }
          clone(zC) {
            let ZC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const wC = xC.d.Clone((() => new CC(zC, this.Km())), this, {
              cloneTexturesOnlyOnce: ZC
            });
            return wC.name = zC, wC.id = zC, this.stencil.copyTo(wC.stencil), this._clonePlugins(wC, QC), wC
          }
          static Parse(zC, ZC, QC) {
            const wC = xC.d.Parse((() => new CC(zC.name, ZC)), zC, ZC, QC);
            return zC.stencil && wC.stencil.parse(zC.stencil, ZC, QC), NC.d._ParsePlugins(zC, wC, ZC, QC), wC
          }
          static get DiffuseTextureEnabled() {
            return SC.b.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(CC) {
            SC.b.DiffuseTextureEnabled = CC
          }
          static get DetailTextureEnabled() {
            return SC.b.DetailTextureEnabled
          }
          static set DetailTextureEnabled(CC) {
            SC.b.DetailTextureEnabled = CC
          }
          static get AmbientTextureEnabled() {
            return SC.b.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(CC) {
            SC.b.AmbientTextureEnabled = CC
          }
          static get OpacityTextureEnabled() {
            return SC.b.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(CC) {
            SC.b.OpacityTextureEnabled = CC
          }
          static get ReflectionTextureEnabled() {
            return SC.b.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(CC) {
            SC.b.ReflectionTextureEnabled = CC
          }
          static get EmissiveTextureEnabled() {
            return SC.b.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(CC) {
            SC.b.EmissiveTextureEnabled = CC
          }
          static get SpecularTextureEnabled() {
            return SC.b.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(CC) {
            SC.b.SpecularTextureEnabled = CC
          }
          static get BumpTextureEnabled() {
            return SC.b.BumpTextureEnabled
          }
          static set BumpTextureEnabled(CC) {
            SC.b.BumpTextureEnabled = CC
          }
          static get LightmapTextureEnabled() {
            return SC.b.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(CC) {
            SC.b.LightmapTextureEnabled = CC
          }
          static get RefractionTextureEnabled() {
            return SC.b.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(CC) {
            SC.b.RefractionTextureEnabled = CC
          }
          static get ColorGradingTextureEnabled() {
            return SC.b.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(CC) {
            SC.b.ColorGradingTextureEnabled = CC
          }
          static get FresnelEnabled() {
            return SC.b.FresnelEnabled
          }
          static set FresnelEnabled(CC) {
            SC.b.FresnelEnabled = CC
          }
        }, zC = new WeakMap, FC = new WeakMap, MC = new WeakMap, iC = new WeakMap, vC = new WeakMap, eC = new WeakMap, hC = new WeakMap, KC = new WeakMap, dC = new WeakMap, EC = new WeakMap, lC = new WeakMap, XC = new WeakMap, cC = new WeakMap, uC = new WeakMap, rC = new WeakMap, sC = new WeakMap, TC = new WeakMap, aC = new WeakMap, tC = new WeakMap, DC = new WeakMap, jC = new WeakMap, yC = new WeakMap, LC = new WeakMap, UC = new WeakMap, BC = new WeakMap, OC = new WeakMap, kC = new WeakMap, VC = new WeakMap, Cz = new WeakMap, zz = new WeakMap, Zz = new WeakMap, Qz = new WeakMap, (() => {
          const zC = "function" === typeof Symbol && Symbol.metadata ? Object.create(vZ[Symbol.metadata] ?? null) : void 0;
          wz = [(0, wC.B)("diffuseTexture")], bz = [(0, wC.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], nz = [(0, wC.B)("ambientTexture")], fz = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], oz = [(0, wC.B)("opacityTexture")], qz = [(0, wC.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], Fz = [(0, wC.B)("reflectionTexture")], Wz = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], Nz = [(0, wC.B)("emissiveTexture")], Mz = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], gz = [(0, wC.B)("specularTexture")], Sz = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], pz = [(0, wC.B)("bumpTexture")], Pz = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], Gz = [(0, wC.B)("lightmapTexture")], Rz = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], Az = [(0, wC.B)("refractionTexture")], xz = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], Jz = [(0, wC.n)("ambient")], Iz = [(0, wC.n)("diffuse")], iz = [(0, wC.n)("specular")], vz = [(0, wC.n)("emissive")], ez = [(0, wC.M)()], hz = [(0, wC.M)("useAlphaFromDiffuseTexture")], Kz = [() => ({
            init(CC) {
              return void 0 === CC && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = CC), CC
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(CC) {
              this._useAlphaFromDiffuseTexture = CC
            }
          })], Yz = [(0, wC.M)("useEmissiveAsIllumination")], dz = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], mz = [(0, wC.M)("linkEmissiveWithDiffuse")], Hz = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], Ez = [(0, wC.M)("useSpecularOverAlpha")], lz = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], Xz = [(0, wC.M)("useReflectionOverAlpha")], cz = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], uz = [(0, wC.M)("disableLighting")], rz = [(0, wC.d)("_markAllSubMeshesAsLightsDirty")], sz = [(0, wC.M)("useObjectSpaceNormalMap")], Tz = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], az = [(0, wC.M)("useParallax")], tz = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], Dz = [(0, wC.M)("useParallaxOcclusion")], jz = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], yz = [(0, wC.M)()], Lz = [(0, wC.M)("roughness")], Uz = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], Bz = [(0, wC.M)()], Oz = [(0, wC.M)()], kz = [(0, wC.M)()], Vz = [(0, wC.M)("useLightmapAsShadowmap")], CZ = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], zZ = [(0, wC.t)("diffuseFresnelParameters")], ZZ = [(0, wC.d)("_markAllSubMeshesAsFresnelDirty")], QZ = [(0, wC.t)("opacityFresnelParameters")], wZ = [(0, wC.d)("_markAllSubMeshesAsFresnelAndMiscDirty")], bZ = [(0, wC.t)("reflectionFresnelParameters")], nZ = [(0, wC.d)("_markAllSubMeshesAsFresnelDirty")], fZ = [(0, wC.t)("refractionFresnelParameters")], oZ = [(0, wC.d)("_markAllSubMeshesAsFresnelDirty")], qZ = [(0, wC.t)("emissiveFresnelParameters")], FZ = [(0, wC.d)("_markAllSubMeshesAsFresnelDirty")], WZ = [(0, wC.M)("useReflectionFresnelFromSpecular")], NZ = [(0, wC.d)("_markAllSubMeshesAsFresnelDirty")], MZ = [(0, wC.M)("useGlossinessFromSpecularMapAlpha")], gZ = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], SZ = [(0, wC.M)("maxSimultaneousLights")], pZ = [(0, wC.d)("_markAllSubMeshesAsLightsDirty")], PZ = [(0, wC.M)("invertNormalMapX")], GZ = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], RZ = [(0, wC.M)("invertNormalMapY")], AZ = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], xZ = [(0, wC.M)("twoSidedLighting")], JZ = [(0, wC.d)("_markAllSubMeshesAsTexturesDirty")], IZ = [(0, wC.M)("applyDecalMapAfterDetailMap")], iZ = [(0, wC.d)("_markAllSubMeshesAsMiscDirty")], (0, QC.j)(CC, null, bz, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "diffuseTexture" in CC,
              get: CC => CC.diffuseTexture,
              set: (CC, zC) => {
                CC.diffuseTexture = zC
              }
            },
            metadata: zC
          }, KZ, YZ), (0, QC.j)(CC, null, fz, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "ambientTexture" in CC,
              get: CC => CC.ambientTexture,
              set: (CC, zC) => {
                CC.ambientTexture = zC
              }
            },
            metadata: zC
          }, HZ, EZ), (0, QC.j)(CC, null, qz, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "opacityTexture" in CC,
              get: CC => CC.opacityTexture,
              set: (CC, zC) => {
                CC.opacityTexture = zC
              }
            },
            metadata: zC
          }, cZ, uZ), (0, QC.j)(CC, null, Wz, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "reflectionTexture" in CC,
              get: CC => CC.reflectionTexture,
              set: (CC, zC) => {
                CC.reflectionTexture = zC
              }
            },
            metadata: zC
          }, TZ, aZ), (0, QC.j)(CC, null, Mz, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "emissiveTexture" in CC,
              get: CC => CC.emissiveTexture,
              set: (CC, zC) => {
                CC.emissiveTexture = zC
              }
            },
            metadata: zC
          }, jZ, yZ), (0, QC.j)(CC, null, Sz, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "specularTexture" in CC,
              get: CC => CC.specularTexture,
              set: (CC, zC) => {
                CC.specularTexture = zC
              }
            },
            metadata: zC
          }, BZ, OZ), (0, QC.j)(CC, null, Pz, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "bumpTexture" in CC,
              get: CC => CC.bumpTexture,
              set: (CC, zC) => {
                CC.bumpTexture = zC
              }
            },
            metadata: zC
          }, CQ, zQ), (0, QC.j)(CC, null, Rz, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "lightmapTexture" in CC,
              get: CC => CC.lightmapTexture,
              set: (CC, zC) => {
                CC.lightmapTexture = zC
              }
            },
            metadata: zC
          }, wQ, bQ), (0, QC.j)(CC, null, xz, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "refractionTexture" in CC,
              get: CC => CC.refractionTexture,
              set: (CC, zC) => {
                CC.refractionTexture = zC
              }
            },
            metadata: zC
          }, oQ, qQ), (0, QC.j)(CC, null, Kz, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "useAlphaFromDiffuseTexture" in CC,
              get: CC => CC.useAlphaFromDiffuseTexture,
              set: (CC, zC) => {
                CC.useAlphaFromDiffuseTexture = zC
              }
            },
            metadata: zC
          }, JQ, IQ), (0, QC.j)(CC, null, dz, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: CC => "useEmissiveAsIllumination" in CC,
              get: CC => CC.useEmissiveAsIllumination,
              set: (CC, zC) => {
                CC.useEmissiveAsIllumination = zC
              }
            },
            metadata: zC
          }, eQ, hQ), (0, QC.j)(CC, null, Hz, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: CC => "linkEmissiveWithDiffuse" in CC,
              get: CC => CC.linkEmissiveWithDiffuse,
              set: (CC, zC) => {
                CC.linkEmissiveWithDiffuse = zC
              }
            },
            metadata: zC
          }, dQ, mQ), (0, QC.j)(CC, null, lz, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: CC => "useSpecularOverAlpha" in CC,
              get: CC => CC.useSpecularOverAlpha,
              set: (CC, zC) => {
                CC.useSpecularOverAlpha = zC
              }
            },
            metadata: zC
          }, lQ, XQ), (0, QC.j)(CC, null, cz, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: CC => "useReflectionOverAlpha" in CC,
              get: CC => CC.useReflectionOverAlpha,
              set: (CC, zC) => {
                CC.useReflectionOverAlpha = zC
              }
            },
            metadata: zC
          }, rQ, sQ), (0, QC.j)(CC, null, rz, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: CC => "disableLighting" in CC,
              get: CC => CC.disableLighting,
              set: (CC, zC) => {
                CC.disableLighting = zC
              }
            },
            metadata: zC
          }, tQ, DQ), (0, QC.j)(CC, null, Tz, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: CC => "useObjectSpaceNormalMap" in CC,
              get: CC => CC.useObjectSpaceNormalMap,
              set: (CC, zC) => {
                CC.useObjectSpaceNormalMap = zC
              }
            },
            metadata: zC
          }, LQ, UQ), (0, QC.j)(CC, null, tz, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: CC => "useParallax" in CC,
              get: CC => CC.useParallax,
              set: (CC, zC) => {
                CC.useParallax = zC
              }
            },
            metadata: zC
          }, kQ, VQ), (0, QC.j)(CC, null, jz, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: CC => "useParallaxOcclusion" in CC,
              get: CC => CC.useParallaxOcclusion,
              set: (CC, zC) => {
                CC.useParallaxOcclusion = zC
              }
            },
            metadata: zC
          }, Zw, Qw), (0, QC.j)(CC, null, Uz, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: CC => "roughness" in CC,
              get: CC => CC.roughness,
              set: (CC, zC) => {
                CC.roughness = zC
              }
            },
            metadata: zC
          }, ow, qw), (0, QC.j)(CC, null, CZ, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: CC => "useLightmapAsShadowmap" in CC,
              get: CC => CC.useLightmapAsShadowmap,
              set: (CC, zC) => {
                CC.useLightmapAsShadowmap = zC
              }
            },
            metadata: zC
          }, Gw, Rw), (0, QC.j)(CC, null, ZZ, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: CC => "diffuseFresnelParameters" in CC,
              get: CC => CC.diffuseFresnelParameters,
              set: (CC, zC) => {
                CC.diffuseFresnelParameters = zC
              }
            },
            metadata: zC
          }, Jw, Iw), (0, QC.j)(CC, null, wZ, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: CC => "opacityFresnelParameters" in CC,
              get: CC => CC.opacityFresnelParameters,
              set: (CC, zC) => {
                CC.opacityFresnelParameters = zC
              }
            },
            metadata: zC
          }, ew, hw), (0, QC.j)(CC, null, nZ, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: CC => "reflectionFresnelParameters" in CC,
              get: CC => CC.reflectionFresnelParameters,
              set: (CC, zC) => {
                CC.reflectionFresnelParameters = zC
              }
            },
            metadata: zC
          }, dw, mw), (0, QC.j)(CC, null, oZ, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: CC => "refractionFresnelParameters" in CC,
              get: CC => CC.refractionFresnelParameters,
              set: (CC, zC) => {
                CC.refractionFresnelParameters = zC
              }
            },
            metadata: zC
          }, lw, Xw), (0, QC.j)(CC, null, FZ, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: CC => "emissiveFresnelParameters" in CC,
              get: CC => CC.emissiveFresnelParameters,
              set: (CC, zC) => {
                CC.emissiveFresnelParameters = zC
              }
            },
            metadata: zC
          }, sw, Tw), (0, QC.j)(CC, null, NZ, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: CC => "useReflectionFresnelFromSpecular" in CC,
              get: CC => CC.useReflectionFresnelFromSpecular,
              set: (CC, zC) => {
                CC.useReflectionFresnelFromSpecular = zC
              }
            },
            metadata: zC
          }, Dw, jw), (0, QC.j)(CC, null, gZ, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: CC => "useGlossinessFromSpecularMapAlpha" in CC,
              get: CC => CC.useGlossinessFromSpecularMapAlpha,
              set: (CC, zC) => {
                CC.useGlossinessFromSpecularMapAlpha = zC
              }
            },
            metadata: zC
          }, Uw, Bw), (0, QC.j)(CC, null, pZ, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: CC => "maxSimultaneousLights" in CC,
              get: CC => CC.maxSimultaneousLights,
              set: (CC, zC) => {
                CC.maxSimultaneousLights = zC
              }
            },
            metadata: zC
          }, Vw, Cb), (0, QC.j)(CC, null, GZ, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: CC => "invertNormalMapX" in CC,
              get: CC => CC.invertNormalMapX,
              set: (CC, zC) => {
                CC.invertNormalMapX = zC
              }
            },
            metadata: zC
          }, Qb, wb), (0, QC.j)(CC, null, AZ, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: CC => "invertNormalMapY" in CC,
              get: CC => CC.invertNormalMapY,
              set: (CC, zC) => {
                CC.invertNormalMapY = zC
              }
            },
            metadata: zC
          }, fb, ob), (0, QC.j)(CC, null, JZ, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: CC => "twoSidedLighting" in CC,
              get: CC => CC.twoSidedLighting,
              set: (CC, zC) => {
                CC.twoSidedLighting = zC
              }
            },
            metadata: zC
          }, Wb, Nb), (0, QC.j)(CC, null, iZ, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: CC => "applyDecalMapAfterDetailMap" in CC,
              get: CC => CC.applyDecalMapAfterDetailMap,
              set: (CC, zC) => {
                CC.applyDecalMapAfterDetailMap = zC
              }
            },
            metadata: zC
          }, Sb, pb), (0, QC.j)(null, null, wz, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "_diffuseTexture" in CC,
              get: CC => CC._diffuseTexture,
              set: (CC, zC) => {
                CC._diffuseTexture = zC
              }
            },
            metadata: zC
          }, eZ, hZ), (0, QC.j)(null, null, nz, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "_ambientTexture" in CC,
              get: CC => CC._ambientTexture,
              set: (CC, zC) => {
                CC._ambientTexture = zC
              }
            },
            metadata: zC
          }, dZ, mZ), (0, QC.j)(null, null, oz, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "_opacityTexture" in CC,
              get: CC => CC._opacityTexture,
              set: (CC, zC) => {
                CC._opacityTexture = zC
              }
            },
            metadata: zC
          }, lZ, XZ), (0, QC.j)(null, null, Fz, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "_reflectionTexture" in CC,
              get: CC => CC._reflectionTexture,
              set: (CC, zC) => {
                CC._reflectionTexture = zC
              }
            },
            metadata: zC
          }, rZ, sZ), (0, QC.j)(null, null, Nz, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "_emissiveTexture" in CC,
              get: CC => CC._emissiveTexture,
              set: (CC, zC) => {
                CC._emissiveTexture = zC
              }
            },
            metadata: zC
          }, tZ, DZ), (0, QC.j)(null, null, gz, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "_specularTexture" in CC,
              get: CC => CC._specularTexture,
              set: (CC, zC) => {
                CC._specularTexture = zC
              }
            },
            metadata: zC
          }, LZ, UZ), (0, QC.j)(null, null, pz, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "_bumpTexture" in CC,
              get: CC => CC._bumpTexture,
              set: (CC, zC) => {
                CC._bumpTexture = zC
              }
            },
            metadata: zC
          }, kZ, VZ), (0, QC.j)(null, null, Gz, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "_lightmapTexture" in CC,
              get: CC => CC._lightmapTexture,
              set: (CC, zC) => {
                CC._lightmapTexture = zC
              }
            },
            metadata: zC
          }, ZQ, QQ), (0, QC.j)(null, null, Az, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "_refractionTexture" in CC,
              get: CC => CC._refractionTexture,
              set: (CC, zC) => {
                CC._refractionTexture = zC
              }
            },
            metadata: zC
          }, nQ, fQ), (0, QC.j)(null, null, Jz, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: CC => "ambientColor" in CC,
              get: CC => CC.ambientColor,
              set: (CC, zC) => {
                CC.ambientColor = zC
              }
            },
            metadata: zC
          }, FQ, WQ), (0, QC.j)(null, null, Iz, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: CC => "diffuseColor" in CC,
              get: CC => CC.diffuseColor,
              set: (CC, zC) => {
                CC.diffuseColor = zC
              }
            },
            metadata: zC
          }, NQ, MQ), (0, QC.j)(null, null, iz, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: CC => "specularColor" in CC,
              get: CC => CC.specularColor,
              set: (CC, zC) => {
                CC.specularColor = zC
              }
            },
            metadata: zC
          }, gQ, SQ), (0, QC.j)(null, null, vz, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: CC => "emissiveColor" in CC,
              get: CC => CC.emissiveColor,
              set: (CC, zC) => {
                CC.emissiveColor = zC
              }
            },
            metadata: zC
          }, pQ, PQ), (0, QC.j)(null, null, ez, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: CC => "specularPower" in CC,
              get: CC => CC.specularPower,
              set: (CC, zC) => {
                CC.specularPower = zC
              }
            },
            metadata: zC
          }, GQ, RQ), (0, QC.j)(null, null, hz, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "_useAlphaFromDiffuseTexture" in CC,
              get: CC => CC._useAlphaFromDiffuseTexture,
              set: (CC, zC) => {
                CC._useAlphaFromDiffuseTexture = zC
              }
            },
            metadata: zC
          }, AQ, xQ), (0, QC.j)(null, null, Yz, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: CC => "_useEmissiveAsIllumination" in CC,
              get: CC => CC._useEmissiveAsIllumination,
              set: (CC, zC) => {
                CC._useEmissiveAsIllumination = zC
              }
            },
            metadata: zC
          }, iQ, vQ), (0, QC.j)(null, null, mz, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: CC => "_linkEmissiveWithDiffuse" in CC,
              get: CC => CC._linkEmissiveWithDiffuse,
              set: (CC, zC) => {
                CC._linkEmissiveWithDiffuse = zC
              }
            },
            metadata: zC
          }, KQ, YQ), (0, QC.j)(null, null, Ez, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: CC => "_useSpecularOverAlpha" in CC,
              get: CC => CC._useSpecularOverAlpha,
              set: (CC, zC) => {
                CC._useSpecularOverAlpha = zC
              }
            },
            metadata: zC
          }, HQ, EQ), (0, QC.j)(null, null, Xz, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: CC => "_useReflectionOverAlpha" in CC,
              get: CC => CC._useReflectionOverAlpha,
              set: (CC, zC) => {
                CC._useReflectionOverAlpha = zC
              }
            },
            metadata: zC
          }, cQ, uQ), (0, QC.j)(null, null, uz, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: CC => "_disableLighting" in CC,
              get: CC => CC._disableLighting,
              set: (CC, zC) => {
                CC._disableLighting = zC
              }
            },
            metadata: zC
          }, TQ, aQ), (0, QC.j)(null, null, sz, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: CC => "_useObjectSpaceNormalMap" in CC,
              get: CC => CC._useObjectSpaceNormalMap,
              set: (CC, zC) => {
                CC._useObjectSpaceNormalMap = zC
              }
            },
            metadata: zC
          }, jQ, yQ), (0, QC.j)(null, null, az, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: CC => "_useParallax" in CC,
              get: CC => CC._useParallax,
              set: (CC, zC) => {
                CC._useParallax = zC
              }
            },
            metadata: zC
          }, BQ, OQ), (0, QC.j)(null, null, Dz, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: CC => "_useParallaxOcclusion" in CC,
              get: CC => CC._useParallaxOcclusion,
              set: (CC, zC) => {
                CC._useParallaxOcclusion = zC
              }
            },
            metadata: zC
          }, Cw, zw), (0, QC.j)(null, null, yz, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: CC => "parallaxScaleBias" in CC,
              get: CC => CC.parallaxScaleBias,
              set: (CC, zC) => {
                CC.parallaxScaleBias = zC
              }
            },
            metadata: zC
          }, ww, bw), (0, QC.j)(null, null, Lz, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: CC => "_roughness" in CC,
              get: CC => CC._roughness,
              set: (CC, zC) => {
                CC._roughness = zC
              }
            },
            metadata: zC
          }, nw, fw), (0, QC.j)(null, null, Bz, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: CC => "indexOfRefraction" in CC,
              get: CC => CC.indexOfRefraction,
              set: (CC, zC) => {
                CC.indexOfRefraction = zC
              }
            },
            metadata: zC
          }, Fw, Ww), (0, QC.j)(null, null, Oz, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: CC => "invertRefractionY" in CC,
              get: CC => CC.invertRefractionY,
              set: (CC, zC) => {
                CC.invertRefractionY = zC
              }
            },
            metadata: zC
          }, Nw, Mw), (0, QC.j)(null, null, kz, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: CC => "alphaCutOff" in CC,
              get: CC => CC.alphaCutOff,
              set: (CC, zC) => {
                CC.alphaCutOff = zC
              }
            },
            metadata: zC
          }, gw, Sw), (0, QC.j)(null, null, Vz, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: CC => "_useLightmapAsShadowmap" in CC,
              get: CC => CC._useLightmapAsShadowmap,
              set: (CC, zC) => {
                CC._useLightmapAsShadowmap = zC
              }
            },
            metadata: zC
          }, pw, Pw), (0, QC.j)(null, null, zZ, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: CC => "_diffuseFresnelParameters" in CC,
              get: CC => CC._diffuseFresnelParameters,
              set: (CC, zC) => {
                CC._diffuseFresnelParameters = zC
              }
            },
            metadata: zC
          }, Aw, xw), (0, QC.j)(null, null, QZ, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: CC => "_opacityFresnelParameters" in CC,
              get: CC => CC._opacityFresnelParameters,
              set: (CC, zC) => {
                CC._opacityFresnelParameters = zC
              }
            },
            metadata: zC
          }, iw, vw), (0, QC.j)(null, null, bZ, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: CC => "_reflectionFresnelParameters" in CC,
              get: CC => CC._reflectionFresnelParameters,
              set: (CC, zC) => {
                CC._reflectionFresnelParameters = zC
              }
            },
            metadata: zC
          }, Kw, Yw), (0, QC.j)(null, null, fZ, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: CC => "_refractionFresnelParameters" in CC,
              get: CC => CC._refractionFresnelParameters,
              set: (CC, zC) => {
                CC._refractionFresnelParameters = zC
              }
            },
            metadata: zC
          }, Hw, Ew), (0, QC.j)(null, null, qZ, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: CC => "_emissiveFresnelParameters" in CC,
              get: CC => CC._emissiveFresnelParameters,
              set: (CC, zC) => {
                CC._emissiveFresnelParameters = zC
              }
            },
            metadata: zC
          }, uw, rw), (0, QC.j)(null, null, WZ, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: CC => "_useReflectionFresnelFromSpecular" in CC,
              get: CC => CC._useReflectionFresnelFromSpecular,
              set: (CC, zC) => {
                CC._useReflectionFresnelFromSpecular = zC
              }
            },
            metadata: zC
          }, aw, tw), (0, QC.j)(null, null, MZ, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: CC => "_useGlossinessFromSpecularMapAlpha" in CC,
              get: CC => CC._useGlossinessFromSpecularMapAlpha,
              set: (CC, zC) => {
                CC._useGlossinessFromSpecularMapAlpha = zC
              }
            },
            metadata: zC
          }, yw, Lw), (0, QC.j)(null, null, SZ, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: CC => "_maxSimultaneousLights" in CC,
              get: CC => CC._maxSimultaneousLights,
              set: (CC, zC) => {
                CC._maxSimultaneousLights = zC
              }
            },
            metadata: zC
          }, Ow, kw), (0, QC.j)(null, null, PZ, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: CC => "_invertNormalMapX" in CC,
              get: CC => CC._invertNormalMapX,
              set: (CC, zC) => {
                CC._invertNormalMapX = zC
              }
            },
            metadata: zC
          }, zb, Zb), (0, QC.j)(null, null, RZ, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: CC => "_invertNormalMapY" in CC,
              get: CC => CC._invertNormalMapY,
              set: (CC, zC) => {
                CC._invertNormalMapY = zC
              }
            },
            metadata: zC
          }, bb, nb), (0, QC.j)(null, null, xZ, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: CC => "_twoSidedLighting" in CC,
              get: CC => CC._twoSidedLighting,
              set: (CC, zC) => {
                CC._twoSidedLighting = zC
              }
            },
            metadata: zC
          }, qb, Fb), (0, QC.j)(null, null, IZ, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: CC => "_applyDecalMapAfterDetailMap" in CC,
              get: CC => CC._applyDecalMapAfterDetailMap,
              set: (CC, zC) => {
                CC._applyDecalMapAfterDetailMap = zC
              }
            },
            metadata: zC
          }, Mb, gb), zC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zC
          })
        })(), CC.ForceGLSL = !1, CC._ShaderLoader = new JC.c((() => [Promise.all([ZC.e(317), ZC.e(316)]).then((() => ZC(41694))), Promise.all([ZC.e(322), ZC.e(318), ZC.e(331), ZC.e(321)]).then((() => ZC(41900)))]), (() => [Promise.all([ZC.e(338), ZC.e(333)]).then((() => ZC(42053))), Promise.all([ZC.e(339), ZC.e(349), ZC.e(335)]).then((() => ZC(42221)))])), CC
      })(),
      lC = !1;

    function XC() {
      lC || (lC = !0, (0, WC.f)(), (0, hC.d)("BABYLON.StandardMaterial", EC), nC.g.DefaultMaterialFactory = CC => new EC("default material", CC))
    }
    Object.getOwnPropertyDescriptor(EC.prototype, "decalMap") || Object.defineProperty(EC.prototype, "decalMap", (0, KC.d)("StandardMaterial", "decalMap"))
  },
  40205: (CC, zC, ZC) => {
    function QC(CC) {
      return class extends CC {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    ZC.d(zC, {
      e: () => QC
    })
  },
  40198: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    class QC {
      constructor(CC, zC) {
        this._webGL = {
          load: CC,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: zC,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(CC) {
        const zC = 1 === CC ? this._webGPU : this._webGL;
        return zC.loaded ? void 0 : async () => {
          await this._loadAsync(zC)
        }
      }
      async _loadAsync(CC) {
        if (CC.loaded) return;
        let zC = CC.loadPromise;
        const ZC = null === zC;
        ZC && (zC = Promise.all(CC.load()), CC.loadPromise = zC);
        let QC = !1;
        try {
          await zC, QC = !0
        } finally {
          ZC && this._completeLoad(CC, QC)
        }
      }
      _completeLoad(CC, zC) {
        CC.loaded = zC, CC.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);