export const id = 290;
export const ids = [290];
export const modules = {
  41399: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => DB
    });
    var YB = GB(41012);

    function DB(BB) {
      return class extends BB {
        constructor() {
          super(...arguments);
          const BB = new.target;
          if (!BB[Symbol.metadata]) {
            const OB = Object.getPrototypeOf(BB)?.[Symbol.metadata];
            BB[Symbol.metadata] = OB ? Object.create(OB) : {}
          }
          const OB = (0, YB.e)(BB[Symbol.metadata]);
          OB._imageProcessingConfiguration || (OB._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(BB) {
          this._attachImageProcessingConfiguration(BB), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(BB) {
          BB !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !BB && this.JF ? this._imageProcessingConfiguration = this.JF().imageProcessingConfiguration : BB && (this._imageProcessingConfiguration = BB), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(BB) {
          this.imageProcessingConfiguration.colorCurvesEnabled = BB
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(BB) {
          this.imageProcessingConfiguration.colorGradingEnabled = BB
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(BB) {
          this._imageProcessingConfiguration.toneMappingEnabled = BB
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(BB) {
          this._imageProcessingConfiguration.exposure = BB
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(BB) {
          this._imageProcessingConfiguration.contrast = BB
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(BB) {
          this._imageProcessingConfiguration.colorGradingTexture = BB
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(BB) {
          this._imageProcessingConfiguration.colorCurves = BB
        }
      }
    }
  },
  41273: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => QB,
      f: () => DB
    });
    var YB = GB(41275);

    function DB(BB) {
      return class extends BB {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class QB extends YB.c {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  41358: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => PB
    });
    var YB = GB(40998),
      DB = GB(41283),
      QB = GB(41004),
      oB = GB(41341),
      jB = GB(41275),
      yB = GB(41361),
      JB = GB(41325);
    class MB extends jB.c {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let PB = (() => {
      var BB, OB, GB, jB;
      let PB, zB, lB, pB, qB, ZB, NB = yB.c,
        RB = [],
        WB = [],
        AB = [],
        VB = [],
        SB = [],
        nB = [],
        UB = [],
        fB = [],
        kB = [],
        dB = [],
        KB = [],
        uB = [];
      return BB = class extends NB {
        get texture() {
          return (0, YB.c)(this, OB, "f")
        }
        set texture(BB) {
          (0, YB.d)(this, OB, BB, "f")
        }
        get normalBlendMethod() {
          return (0, YB.c)(this, GB, "f")
        }
        set normalBlendMethod(BB) {
          (0, YB.d)(this, GB, BB, "f")
        }
        get isEnabled() {
          return (0, YB.c)(this, jB, "f")
        }
        set isEnabled(BB) {
          (0, YB.d)(this, jB, BB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(BB) {
          let QB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(BB, "DetailMap", 140, new MB, QB), this._texture = null, OB.set(this, (0, YB.j)(this, RB, void 0)), this.diffuseBlendLevel = ((0, YB.j)(this, WB), (0, YB.j)(this, AB, 1)), this.roughnessBlendLevel = ((0, YB.j)(this, VB), (0, YB.j)(this, SB, 1)), this.bumpLevel = ((0, YB.j)(this, nB), (0, YB.j)(this, UB, 1)), this._normalBlendMethod = ((0, YB.j)(this, fB), DB.b.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), GB.set(this, (0, YB.j)(this, kB, void 0)), this._isEnabled = ((0, YB.j)(this, dB), !1), jB.set(this, (0, YB.j)(this, KB, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, YB.j)(this, uB), this._internalMarkAllSubMeshesAsTexturesDirty = BB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(BB, OB, GB) {
          return !this._isEnabled || !(BB._areTexturesDirty && OB.texturesEnabled && GB.getCaps().standardDerivatives && this._texture && oB.d.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(BB, OB) {
          if (this._isEnabled) {
            BB.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const GB = OB.Lp();
            BB._areTexturesDirty && (GB.getCaps().standardDerivatives && this._texture && oB.d.DetailTextureEnabled && this._isEnabled ? ((0, JB.ab)(this._texture, BB, "DETAIL"), BB.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : BB.DETAIL = !1)
          } else BB.DETAIL = !1
        }
        bindForSubMesh(BB, OB) {
          if (!this._isEnabled) return;
          const GB = this._material.isFrozen;
          BB.useUbo && GB && BB.isSync || this._texture && oB.d.DetailTextureEnabled && (BB.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, JB.F)(this._texture, BB, "detail")), OB.texturesEnabled && this._texture && oB.d.DetailTextureEnabled && BB.setTexture("detailSampler", this._texture)
        }
        hasTexture(BB) {
          return this._texture === BB
        }
        getActiveTextures(BB) {
          this._texture && BB.push(this._texture)
        }
        getAnimatables(BB) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && BB.push(this._texture)
        }
        dispose(BB) {
          BB && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(BB) {
          BB.push("detailSampler")
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
      }, OB = new WeakMap, GB = new WeakMap, jB = new WeakMap, (() => {
        const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(NB[Symbol.metadata] ?? null) : void 0;
        PB = [(0, QB.B)("detailTexture"), (0, QB.g)("_markAllSubMeshesAsTexturesDirty")], zB = [(0, QB.L)()], lB = [(0, QB.L)()], pB = [(0, QB.L)()], qB = [(0, QB.L)(), (0, QB.g)("_markAllSubMeshesAsTexturesDirty")], ZB = [(0, QB.L)(), (0, QB.g)("_markAllSubMeshesAsTexturesDirty")], (0, YB.h)(BB, null, PB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, OB) => {
              BB.texture = OB
            }
          },
          metadata: OB
        }, RB, WB), (0, YB.h)(BB, null, qB, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: BB => "normalBlendMethod" in BB,
            get: BB => BB.normalBlendMethod,
            set: (BB, OB) => {
              BB.normalBlendMethod = OB
            }
          },
          metadata: OB
        }, kB, dB), (0, YB.h)(BB, null, ZB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, OB) => {
              BB.isEnabled = OB
            }
          },
          metadata: OB
        }, KB, uB), (0, YB.h)(null, null, zB, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: BB => "diffuseBlendLevel" in BB,
            get: BB => BB.diffuseBlendLevel,
            set: (BB, OB) => {
              BB.diffuseBlendLevel = OB
            }
          },
          metadata: OB
        }, AB, VB), (0, YB.h)(null, null, lB, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: BB => "roughnessBlendLevel" in BB,
            get: BB => BB.roughnessBlendLevel,
            set: (BB, OB) => {
              BB.roughnessBlendLevel = OB
            }
          },
          metadata: OB
        }, SB, nB), (0, YB.h)(null, null, pB, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: BB => "bumpLevel" in BB,
            get: BB => BB.bumpLevel,
            set: (BB, OB) => {
              BB.bumpLevel = OB
            }
          },
          metadata: OB
        }, UB, fB), OB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: OB
        })
      })(), BB
    })()
  },
  41275: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    class YB {
      constructor(BB) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = BB, BB)
          for (const OB in BB) Object.prototype.hasOwnProperty.call(BB, OB) && this._setDefaultValue(OB)
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
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || BB, this._isDirty = !0
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
        for (const BB of Object.keys(this)) "_" !== BB[0] && this._keys.push(BB);
        if (this._externalProperties)
          for (const BB in this._externalProperties) - 1 === this._keys.indexOf(BB) && this._keys.push(BB)
      }
      isEqual(BB) {
        if (this._keys.length !== BB._keys.length) return !1;
        for (let OB = 0; OB < this._keys.length; OB++) {
          const GB = this._keys[OB];
          if (this[GB] !== BB[GB]) return !1
        }
        return !0
      }
      cloneTo(BB) {
        this._keys.length !== BB._keys.length && (BB._keys = this._keys.slice(0));
        for (let OB = 0; OB < this._keys.length; OB++) {
          const GB = this._keys[OB];
          BB[GB] = this[GB]
        }
      }
      reset() {
        for (const BB of this._keys) this._setDefaultValue(BB)
      }
      _setDefaultValue(BB) {
        const OB = this._externalProperties?.[BB]?.type ?? typeof this[BB],
          GB = this._externalProperties?.[BB]?.default;
        switch (OB) {
          case "number":
            this[BB] = GB ?? 0;
            break;
          case "string":
            this[BB] = GB ?? "";
            break;
          default:
            this[BB] = GB ?? !1
        }
      }
      toString() {
        let BB = "";
        for (let OB = 0; OB < this._keys.length; OB++) {
          const GB = this._keys[OB],
            YB = this[GB];
          switch (typeof YB) {
            case "number":
            case "string":
              BB += "#define " + GB + " " + YB + "\n";
              break;
            default:
              YB && (BB += "#define " + GB + "\n")
          }
        }
        return BB
      }
    }
  },
  41381: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => jB,
      g: () => oB,
      h: () => QB
    });
    var YB, DB = GB(37778);

    function QB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const YB = OB(BB);
      if (!Number.isInteger(YB) || YB < 0 || YB > GB) throw new Error(`Invalid geometry object ID ${YB} for mesh "${BB.name}". Object IDs must be integers between 0 and 0x${GB.toString(16).toUpperCase()}.`);
      return YB
    }

    function oB(BB, OB) {
      const GB = OB(BB);
      if (!Number.isInteger(GB) || GB < 0 || GB > 255 || 0 !== GB && 0 === (63 & GB)) throw new Error(`Invalid geometry mesh-blending tag ${GB} for mesh "${BB.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return GB
    }! function(BB) {
      BB[BB.Zero = 0] = "Zero", BB[BB.One = 1] = "One", BB[BB.MaxViewZ = 2] = "MaxViewZ", BB[BB.NoClear = 3] = "NoClear"
    }(YB || (YB = {}));
    class jB {
      static CreateConfiguration(BB) {
        return jB._Configurations[BB] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: DB.d.Zero(),
          currentViewProjection: DB.d.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, jB._Configurations[BB]
      }
      static DeleteConfiguration(BB) {
        delete jB._Configurations[BB]
      }
      static GetConfiguration(BB) {
        return jB._Configurations[BB]
      }
      static _PrepareConfiguration(BB, OB, GB) {
        const YB = jB._Configurations[BB];
        YB._attachments = OB, YB._colorAttachments = GB, YB._mrtCount = OB.length;
        let DB = "#define PREPASS\n";
        for (const QB of jB.GeometryTextureDescriptions) {
          const BB = YB.defines[QB.defineIndex];
          void 0 !== BB && (DB += `#define ${QB.define}\n#define ${QB.defineIndex} ${BB}\n`)
        }
        YB.objectIdIsRedFormat && (DB += "#define PREPASS_OBJECT_ID_R8\n"), YB._defines = DB + `#define SCENE_MRT_COUNT ${OB.length}\n`
      }
      static _PrepareStringDefines(BB, OB) {
        const GB = jB._Configurations[BB];
        return !!GB?._defines && (OB.push(GB._defines), !0)
      }
      static _BindAttachmentsForEffect(BB, OB) {
        const GB = jB._Configurations[BB.currentRenderPassId];
        return !GB?._attachments || (BB.bindAttachments(OB._multiTarget ? GB._attachments : GB._colorAttachments), OB._multiTarget || void 0 !== GB.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(BB) {
        const OB = jB._Configurations[BB.currentRenderPassId];
        OB?._colorAttachments && BB.bindAttachments(OB._colorAttachments)
      }
      static _BindColorAttachments(BB) {
        const OB = jB._Configurations[BB.currentRenderPassId];
        return !OB?._colorAttachments || (BB.bindAttachments(OB._colorAttachments), void 0 !== OB.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(BB) {
        const OB = jB._Configurations[BB.currentRenderPassId];
        return !OB?._colorAttachments || void 0 !== OB.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(BB, OB) {
        const GB = jB._Configurations[BB.currentRenderPassId];
        if (!GB) return;
        const YB = BB.getAlphaMode(),
          DB = void 0 === GB.defines.PREPASS_COLOR_INDEX || 2 === YB || 1 === YB || 17 === YB;
        OB.setFloat("geometryZeroAlphaDiscard", DB ? 1 : 0)
      }
      static AddUniformsAndSamplers(BB, OB) {
        BB.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(BB, OB) {
        for (const GB of OB)
          if (GB.iW)
            for (const OB of GB.iW) OB._removeDrawWrapper(BB)
      }
      static PrepareDefines(BB, OB, GB) {
        if (!GB._arePrePassDirty) return;
        const YB = jB._Configurations[BB];
        if (!YB) return;
        GB.PREPASS = !0;
        let DB = 0;
        for (let QB = 0; QB < jB.GeometryTextureDescriptions.length; QB++) {
          const BB = jB.GeometryTextureDescriptions[QB],
            OB = BB.define,
            oB = BB.defineIndex,
            yB = YB.defines[oB];
          void 0 !== yB ? (GB[OB] = !0, GB[oB] = yB, DB++) : (GB[OB] = !1, delete GB[oB])
        }
        GB.PREPASS_OBJECT_ID_R8 = YB.objectIdIsRedFormat, GB.SCENE_MRT_COUNT = YB._mrtCount ?? DB, GB.BONES_VELOCITY_ENABLED = OB.useBones && OB.computeBonesUsingShaders && OB.skeleton && !OB.skeleton.isUsingTextureForMatrices && -1 === YB.excludedSkinnedMesh.indexOf(OB)
      }
      static Bind(BB, OB, GB, YB, DB) {
        const yB = jB._Configurations[BB];
        if (!yB) return;
        const JB = GB.JF(),
          MB = JB.Lp();
        if (yB.reverseCulling && MB.setStateCullFaceType(JB._mirroredCameraPosition ? DB.cullBackFaces : !DB.cullBackFaces), void 0 !== yB.defines.PREPASS_OBJECT_ID_INDEX) {
          const BB = yB.objectIdIsRedFormat ? 255 : 16777215;
          let YB = GB.uniqueId;
          if (yB.objectIdProvider) YB = QB(GB, yB.objectIdProvider, BB);
          else if (YB > BB) throw new Error(`Invalid geometry object ID ${YB} for mesh "${GB.name}". Object IDs must be integers between 0 and 0x${BB.toString(16).toUpperCase()}.`);
          OB.setFloat("objectId", YB)
        }
        if (void 0 !== yB.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const BB = yB.meshBlendTagProvider ? oB(GB, yB.meshBlendTagProvider) : GB.meshBlendingTag;
          OB.setInt("meshBlendTag", BB)
        }
        if (void 0 !== yB.defines.PREPASS_VELOCITY_INDEX || void 0 !== yB.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const BB = yB._currentWorldMatrices ?? (yB._currentWorldMatrices = {}),
            DB = yB._worldMatrixFrameIds ?? (yB._worldMatrixFrameIds = {});
          if (BB[GB.uniqueId] || (BB[GB.uniqueId] = YB.clone(), yB.previousWorldMatrices[GB.uniqueId] = YB.clone()), DB[GB.uniqueId] !== MB.frameId && (yB.previousWorldMatrices[GB.uniqueId].IU(BB[GB.uniqueId]), DB[GB.uniqueId] = MB.frameId), BB[GB.uniqueId].IU(YB), -1 === yB.lastUpdateFrameId ? (yB.lastUpdateFrameId = MB.frameId, yB.previousViewProjection.IU(JB.getTransformMatrix()), yB.currentViewProjection.IU(JB.getTransformMatrix())) : yB.currentViewProjection.updateFlag !== JB.getTransformMatrix().updateFlag ? (yB.lastUpdateFrameId = MB.frameId, yB.previousViewProjection.IU(yB.currentViewProjection), yB.currentViewProjection.IU(JB.getTransformMatrix())) : yB.lastUpdateFrameId !== MB.frameId && (yB.lastUpdateFrameId = MB.frameId, yB.previousViewProjection.IU(yB.currentViewProjection)), OB.setMatrix("previousWorld", yB.previousWorldMatrices[GB.uniqueId]), OB.setMatrix("previousViewProjection", yB.previousViewProjection), GB.useBones && GB.computeBonesUsingShaders && GB.skeleton) {
            const BB = GB.skeleton;
            if (!BB.isUsingTextureForMatrices || -1 === OB.getUniformIndex("boneTextureInfo")) {
              const YB = BB.getTransformMatrices(GB);
              YB && (yB.previousBones[GB.uniqueId] || (yB.previousBones[GB.uniqueId] = YB.slice()), OB.setMatrices("mPreviousBones", yB.previousBones[GB.uniqueId]), yB.previousBones[GB.uniqueId].set(YB))
            }
          }
        }
      }
    }
    jB.GeometryTextureDescriptions = [{
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
    }], jB._Configurations = {}
  },
  41361: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => zB,
      g: () => pB
    });
    var YB = GB(40998),
      DB = GB(41004),
      QB = GB(40896),
      oB = GB(40864);
    const jB = new RegExp("^([gimus]+)!");
    class yB {
      constructor(BB) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = BB, this._scene = BB.JF(), this._engine = this._scene.Lp()
      }
      _addPlugin(BB) {
        for (let YB = 0; YB < this._plugins.length; ++YB)
          if (this._plugins[YB].name === BB.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !BB.isCompatible(this._material.shaderLanguage)) throw `The plugin "${BB.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const OB = BB.getClassName();
        yB._MaterialPluginClassToMainDefine[OB] || (yB._MaterialPluginClassToMainDefine[OB] = "MATERIALPLUGIN_" + ++yB._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (BB, OB) => this._handlePluginEvent(BB, OB), this._plugins.push(BB), this._plugins.sort(((BB, OB) => BB.priority - OB.priority)), this._codeInjectionPoints = {};
        const GB = {};
        GB[yB._MaterialPluginClassToMainDefine[OB]] = {
          type: "boolean",
          default: !0
        };
        for (const YB of this._plugins) YB.collectDefines(GB), this._collectPointNames("vertex", YB.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", YB.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = GB, !0
      }
      _activatePlugin(BB) {
        -1 === this._activePlugins.indexOf(BB) && (this._activePlugins.push(BB), this._activePlugins.sort(((BB, OB) => BB.priority - OB.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), BB.registerForExtraEvents && (this._activePluginsForExtraEvents.push(BB), this._activePluginsForExtraEvents.sort(((BB, OB) => BB.priority - OB.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(BB) {
        for (let OB = 0; OB < this._plugins.length; ++OB)
          if (this._plugins[OB].name === BB) return this._plugins[OB];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(BB) {
        let OB = !0;
        for (const GB of this._activePlugins) OB = OB && GB.isReadyForSubMesh(BB.defines, this._scene, this._engine, BB.subMesh);
        BB.isReadyForSubMesh = OB
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(BB) {
        for (const OB of this._activePlugins) OB.prepareDefinesBeforeAttributes(BB.defines, this._scene, BB.mesh)
      }
      _handlePluginEventPrepareDefines(BB) {
        for (const OB of this._activePlugins) OB.prepareDefines(BB.defines, this._scene, BB.mesh)
      }
      _handlePluginEventHardBindForSubMesh(BB) {
        for (const OB of this._activePluginsForExtraEvents) OB.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, BB.subMesh)
      }
      _handlePluginEventBindForSubMesh(BB) {
        for (const OB of this._activePlugins) OB.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, BB.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(BB) {
        let OB = !1;
        for (const GB of this._activePluginsForExtraEvents)
          if (OB = GB.hasRenderTargetTextures(), OB) break;
        BB.hasRenderTargetTextures = OB
      }
      _handlePluginEventFillRenderTargetTextures(BB) {
        for (const OB of this._activePluginsForExtraEvents) OB.fillRenderTargetTextures(BB.renderTargets)
      }
      _handlePluginEvent(BB, OB) {
        switch (BB) {
          case 512: {
            const BB = OB;
            for (const OB of this._activePlugins) OB.getActiveTextures(BB.activeTextures);
            break
          }
          case 256: {
            const BB = OB;
            for (const OB of this._activePlugins) OB.getAnimatables(BB.animatables);
            break
          }
          case 1024: {
            const BB = OB;
            let GB = !1;
            for (const OB of this._activePlugins)
              if (GB = OB.hasTexture(BB.texture), GB) break;
            BB.hasTexture = GB;
            break
          }
          case 2: {
            const BB = OB;
            for (const OB of this._plugins) OB.dispose(BB.forceDisposeTextures);
            break
          }
          case 4:
            OB.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const BB = OB;
            for (const OB of this._activePlugins) BB.fallbackRank = OB.addFallbacks(BB.defines, BB.fallbacks, BB.fallbackRank), OB.getAttributes(BB.attributes, this._scene, BB.mesh);
            this._uniformList.length > 0 && BB.uniforms.push(...this._uniformList), this._samplerList.length > 0 && BB.samplers.push(...this._samplerList), this._uboList.length > 0 && BB.uniformBuffersNames.push(...this._uboList), BB.customCode = this._injectCustomCode(BB, BB.customCode);
            break
          }
          case 8: {
            const BB = OB;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const GB = 1 === this._material.shaderLanguage;
            for (const OB of this._plugins) {
              const YB = OB.getUniforms(this._material.shaderLanguage);
              if (YB) {
                if (YB.ubo)
                  for (const OB of YB.ubo) {
                    if (OB.size && OB.type) {
                      const YB = OB.arraySize ?? 0;
                      if (BB.ubo.addUniform(OB.name, OB.size, YB), GB) {
                        let BB;
                        switch (OB.type) {
                          case "mat4":
                            BB = "mat4x4f";
                            break;
                          case "float":
                            BB = "f32";
                            break;
                          default:
                            BB = `${OB.type}f`
                        }
                        this._uboDeclaration += YB > 0 ? `uniform ${OB.name}: array<${BB}, ${YB}>;\n` : `uniform ${OB.name}: ${BB};\n`
                      } else this._uboDeclaration += `${OB.type} ${OB.name}${YB>0?`[${YB}]`:""};\n`
                    }
                    this._uniformList.push(OB.name)
                  }
                YB.vertex && (this._vertexDeclaration += YB.vertex + "\n"), YB.fragment && (this._fragmentDeclaration += YB.fragment + "\n"), YB.externalUniforms && this._uniformList.push(...YB.externalUniforms)
              }
              OB.getSamplers(this._samplerList), OB.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(BB, OB) {
        if (OB)
          for (const GB in OB) this._codeInjectionPoints[BB] || (this._codeInjectionPoints[BB] = {}), this._codeInjectionPoints[BB][GB] = !0
      }
      _injectCustomCode(BB, OB) {
        return (GB, YB) => {
          OB && (YB = OB(GB, YB)), this._uboDeclaration && (YB = YB.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (YB = YB.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (YB = YB.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const DB = this._codeInjectionPoints?.[GB];
          if (!DB) return YB;
          let yB = null;
          for (let OB in DB) {
            let DB = "";
            for (const YB of this._activePlugins) {
              const jB = this._material.shaderLanguage;
              let JB = YB.getCustomCode(GB, jB)?.[OB];
              JB && (YB.resolveIncludes && (null === yB && (yB = {
                defines: [],
                indexParameters: BB.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: oB.b.GetShadersRepository(jB),
                includesShadersStore: oB.b.GetIncludesShadersStore(jB),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                fDB: this._engine.fDB,
                processCodeAfterIncludes: void 0
              }), yB.isFragment = "fragment" === GB, (0, QB.g)(JB, yB, (BB => JB = BB))), DB += JB + "\n")
            }
            if (DB.length > 0)
              if ("!" === OB.charAt(0)) {
                OB = OB.substring(1);
                let BB = "g";
                if ("!" === OB.charAt(0)) BB = "", OB = OB.substring(1);
                else {
                  const GB = jB.exec(OB);
                  GB && GB.length >= 2 && (BB = GB[1], OB = OB.substring(BB.length + 1))
                }
                BB.indexOf("g") < 0 && (BB += "g");
                const GB = new RegExp(OB, BB);
                let QB = GB.exec(YB);
                for (; null !== QB;) {
                  const {
                    index: BB
                  } = QB, OB = JB(DB, QB);
                  YB = YB.substring(0, BB) + OB + YB.substring(BB + QB[0].length), GB.lastIndex = BB + OB.length, QB = GB.exec(YB)
                }
              } else {
                const BB = "#define " + OB;
                YB = YB.replace(BB, "\n" + DB + "\n" + BB)
              }
          }
          return YB
        }
      }
    }
    yB._MaterialPluginClassToMainDefine = {}, yB._MaterialPluginCounter = 0;

    function JB(BB, OB) {
      return BB.replace(/\$(\d+)/g, ((BB, GB) => {
        const YB = Number(GB);
        return YB < OB.length ? OB[YB] : ""
      }))
    }
    var MB = GB(41022),
      PB = GB(37823);
    let zB = (() => {
        var BB;
        let OB, GB, QB, oB, jB = [],
          JB = [],
          PB = [],
          zB = [],
          lB = [],
          pB = [],
          qB = [],
          ZB = [];
        return BB = class {
          isCompatible(BB) {
            return 0 === BB
          }
          _enable(BB) {
            BB && this._pluginManager._activatePlugin(this)
          }
          constructor(BB, OB, GB, DB) {
            let QB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              MB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, YB.j)(this, jB, void 0), this.priority = ((0, YB.j)(this, JB), (0, YB.j)(this, PB, 500)), this.resolveIncludes = ((0, YB.j)(this, zB), (0, YB.j)(this, lB, !1)), this.registerForExtraEvents = ((0, YB.j)(this, pB), (0, YB.j)(this, qB, !1)), this.doNotSerialize = ((0, YB.j)(this, ZB), !1), this._material = BB, this.name = OB, this.priority = GB, this.resolveIncludes = MB, BB.pluginManager || (BB.pluginManager = new yB(BB), BB.lF.add((() => {
              BB.pluginManager = void 0
            }))), this._pluginDefineNames = DB, this._pluginManager = BB.pluginManager, QB && this._pluginManager._addPlugin(this), oB && this._enable(!0), this.markAllDefinesAsDirty = BB._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(BB, OB, GB, YB) {
            return !0
          }
          hardBindForSubMesh(BB, OB, GB, YB) {}
          bindForSubMesh(BB, OB, GB, YB) {}
          dispose(BB) {}
          getCustomCode(BB) {
            return null
          }
          collectDefines(BB) {
            if (this._pluginDefineNames)
              for (const OB of Object.keys(this._pluginDefineNames)) {
                if ("_" === OB[0]) continue;
                const GB = typeof this._pluginDefineNames[OB];
                BB[OB] = {
                  type: "number" === GB ? "number" : "string" === GB ? "string" : "boolean" === GB ? "boolean" : "object",
                  default: this._pluginDefineNames[OB]
                }
              }
          }
          prepareDefinesBeforeAttributes(BB, OB, GB) {}
          prepareDefines(BB, OB, GB) {}
          hasTexture(BB) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(BB) {}
          getActiveTextures(BB) {}
          getAnimatables(BB) {}
          addFallbacks(BB, OB, GB) {
            return GB
          }
          getSamplers(BB) {}
          getAttributes(BB, OB, GB) {}
          getUniformBuffersNames(BB) {}
          getUniforms() {
            return {}
          }
          copyTo(BB) {
            MB.d.Clone((() => BB), this)
          }
          serialize() {
            return MB.d.Serialize(this)
          }
          parse(BB, OB, GB) {
            MB.d.Parse((() => this), BB, OB, GB)
          }
        }, (() => {
          const yB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          OB = [(0, DB.L)()], GB = [(0, DB.L)()], QB = [(0, DB.L)()], oB = [(0, DB.L)()], (0, YB.h)(null, null, OB, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name,
              set: (BB, OB) => {
                BB.name = OB
              }
            },
            metadata: yB
          }, jB, JB), (0, YB.h)(null, null, GB, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: BB => "priority" in BB,
              get: BB => BB.priority,
              set: (BB, OB) => {
                BB.priority = OB
              }
            },
            metadata: yB
          }, PB, zB), (0, YB.h)(null, null, QB, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: BB => "resolveIncludes" in BB,
              get: BB => BB.resolveIncludes,
              set: (BB, OB) => {
                BB.resolveIncludes = OB
              }
            },
            metadata: yB
          }, lB, pB), (0, YB.h)(null, null, oB, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: BB => "registerForExtraEvents" in BB,
              get: BB => BB.registerForExtraEvents,
              set: (BB, OB) => {
                BB.registerForExtraEvents = OB
              }
            },
            metadata: yB
          }, qB, ZB), yB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: yB
          })
        })(), BB
      })(),
      lB = !1;

    function pB() {
      lB || (lB = !0, (0, PB.f)("BABYLON.MaterialPluginBase", zB))
    }
  },
  41266: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    class YB {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(BB) {
        BB.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(BB) {}
      bindForSubMesh(BB, OB, GB, YB, DB) {
        if (OB.prePassRenderer && OB.prePassRenderer.enabled && OB.prePassRenderer.currentRTisSceneRT && (-1 !== OB.prePassRenderer.getIndex(2) || -1 !== OB.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[GB.uniqueId] || (this.previousWorldMatrices[GB.uniqueId] = YB.clone()), this.previousViewProjection || (this.previousViewProjection = OB.getTransformMatrix().clone(), this.currentViewProjection = OB.getTransformMatrix().clone());
          const DB = OB.Lp();
          this.currentViewProjection.updateFlag !== OB.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = DB.frameId, this.previousViewProjection.IU(this.currentViewProjection), this.currentViewProjection.IU(OB.getTransformMatrix())) : this._lastUpdateFrameId !== DB.frameId && (this._lastUpdateFrameId = DB.frameId, this.previousViewProjection.IU(this.currentViewProjection)), BB.setMatrix("previousWorld", this.previousWorldMatrices[GB.uniqueId]), BB.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[GB.uniqueId] = YB.clone()
        }
      }
    }
  },
  41392: (BB, OB, GB) => {
    function YB(BB) {
      return class extends BB {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    GB.d(OB, {
      b: () => YB
    })
  },
  41258: (BB, OB, GB) => {
    GB.d(OB, {
      StandardMaterial: () => YB.h
    });
    var YB = GB(41262);
    (0, YB.e)()
  },
  41262: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => gB,
      h: () => iB
    });
    var YB = GB(40998),
      DB = GB(41004),
      QB = GB(41112),
      oB = GB(41091),
      jB = GB(37894),
      yB = GB(41150),
      JB = GB(41266),
      MB = GB(41273),
      PB = GB(41119),
      zB = GB(41283),
      lB = GB(41275),
      pB = GB(41346),
      qB = GB(41341),
      ZB = GB(41354),
      NB = GB(41358),
      RB = GB(41333),
      WB = GB(41368),
      AB = GB(41325),
      VB = GB(41022),
      SB = GB(41372),
      nB = GB(41381),
      UB = GB(41385),
      fB = GB(41392),
      kB = GB(41399),
      dB = GB(37823),
      KB = GB(40890);
    const uB = {
      effect: null,
      subMesh: null
    };
    class mB extends((0, fB.b)((0, UB.e)(lB.c))) {}
    class IB extends((0, MB.f)(mB)) {
      constructor(BB) {
        super(BB), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class FB extends((0, kB.d)(pB.d)) {}
    let iB = (() => {
        var BB, OB, MB, lB, UB, fB, kB, dB, KB, mB, iB, LB, gB, rB, XB, wB, EB, cB, hB, aB, eB, TB, bB, CB, HB, vB, sB, xB, tB, BO, OO, GO, YO;
        let DO, QO, oO, jO, yO, JO, MO, PO, zO, lO, pO, qO, ZO, NO, RO, WO, AO, VO, SO, nO, UO, fO, kO, dO, KO, uO, mO, IO, FO, iO, LO, gO, rO, XO, wO, EO, cO, hO, aO, eO, TO, bO, CO, HO, vO, sO, xO, tO, BG, OG, GG, YG, DG, QG, oG, jG, yG, JG, MG, PG, zG, lG, pG, qG, ZG, NG, RG, WG, AG, VG, SG, nG, UG, fG = FB,
          kG = [],
          dG = [],
          KG = [],
          uG = [],
          mG = [],
          IG = [],
          FG = [],
          iG = [],
          LG = [],
          gG = [],
          rG = [],
          XG = [],
          wG = [],
          EG = [],
          cG = [],
          hG = [],
          aG = [],
          eG = [],
          TG = [],
          bG = [],
          CG = [],
          HG = [],
          vG = [],
          sG = [],
          xG = [],
          tG = [],
          BY = [],
          OY = [],
          GY = [],
          YY = [],
          DY = [],
          QY = [],
          oY = [],
          jY = [],
          yY = [],
          JY = [],
          MY = [],
          PY = [],
          zY = [],
          lY = [],
          pY = [],
          qY = [],
          ZY = [],
          NY = [],
          RY = [],
          WY = [],
          AY = [],
          VY = [],
          SY = [],
          nY = [],
          UY = [],
          fY = [],
          kY = [],
          dY = [],
          KY = [],
          uY = [],
          mY = [],
          IY = [],
          FY = [],
          iY = [],
          LY = [],
          gY = [],
          rY = [],
          XY = [],
          wY = [],
          EY = [],
          cY = [],
          hY = [],
          aY = [],
          eY = [],
          TY = [],
          bY = [],
          CY = [],
          HY = [],
          vY = [],
          sY = [],
          xY = [],
          tY = [],
          BD = [],
          OD = [],
          GD = [],
          YD = [],
          DD = [],
          QD = [],
          oD = [],
          jD = [],
          yD = [],
          JD = [],
          MD = [],
          PD = [],
          zD = [],
          lD = [],
          pD = [],
          qD = [],
          ZD = [],
          ND = [],
          RD = [],
          WD = [],
          AD = [],
          VD = [],
          SD = [],
          nD = [],
          UD = [],
          fD = [],
          kD = [],
          dD = [],
          KD = [],
          uD = [],
          mD = [],
          ID = [],
          FD = [],
          iD = [],
          LD = [],
          gD = [],
          rD = [],
          XD = [],
          wD = [],
          ED = [],
          cD = [],
          hD = [],
          aD = [],
          eD = [],
          TD = [],
          bD = [],
          CD = [],
          HD = [],
          vD = [],
          sD = [],
          xD = [],
          tD = [],
          BQ = [],
          OQ = [],
          GQ = [],
          YQ = [],
          DQ = [],
          QQ = [],
          oQ = [],
          jQ = [],
          yQ = [],
          JQ = [],
          MQ = [],
          PQ = [],
          zQ = [],
          lQ = [],
          pQ = [],
          qQ = [];
        return BB = class extends fG {
          get diffuseTexture() {
            return (0, YB.c)(this, OB, "f")
          }
          set diffuseTexture(BB) {
            (0, YB.d)(this, OB, BB, "f")
          }
          get ambientTexture() {
            return (0, YB.c)(this, MB, "f")
          }
          set ambientTexture(BB) {
            (0, YB.d)(this, MB, BB, "f")
          }
          get opacityTexture() {
            return (0, YB.c)(this, lB, "f")
          }
          set opacityTexture(BB) {
            (0, YB.d)(this, lB, BB, "f")
          }
          get reflectionTexture() {
            return (0, YB.c)(this, UB, "f")
          }
          set reflectionTexture(BB) {
            (0, YB.d)(this, UB, BB, "f")
          }
          get emissiveTexture() {
            return (0, YB.c)(this, fB, "f")
          }
          set emissiveTexture(BB) {
            (0, YB.d)(this, fB, BB, "f")
          }
          get specularTexture() {
            return (0, YB.c)(this, kB, "f")
          }
          set specularTexture(BB) {
            (0, YB.d)(this, kB, BB, "f")
          }
          get bumpTexture() {
            return (0, YB.c)(this, dB, "f")
          }
          set bumpTexture(BB) {
            (0, YB.d)(this, dB, BB, "f")
          }
          get lightmapTexture() {
            return (0, YB.c)(this, KB, "f")
          }
          set lightmapTexture(BB) {
            (0, YB.d)(this, KB, BB, "f")
          }
          get refractionTexture() {
            return (0, YB.c)(this, mB, "f")
          }
          set refractionTexture(BB) {
            (0, YB.d)(this, mB, BB, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, YB.c)(this, iB, "f")
          }
          set useAlphaFromDiffuseTexture(BB) {
            (0, YB.d)(this, iB, BB, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, YB.c)(this, LB, "f")
          }
          set useEmissiveAsIllumination(BB) {
            (0, YB.d)(this, LB, BB, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, YB.c)(this, gB, "f")
          }
          set linkEmissiveWithDiffuse(BB) {
            (0, YB.d)(this, gB, BB, "f")
          }
          get useSpecularOverAlpha() {
            return (0, YB.c)(this, rB, "f")
          }
          set useSpecularOverAlpha(BB) {
            (0, YB.d)(this, rB, BB, "f")
          }
          get useReflectionOverAlpha() {
            return (0, YB.c)(this, XB, "f")
          }
          set useReflectionOverAlpha(BB) {
            (0, YB.d)(this, XB, BB, "f")
          }
          get disableLighting() {
            return (0, YB.c)(this, wB, "f")
          }
          set disableLighting(BB) {
            (0, YB.d)(this, wB, BB, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, YB.c)(this, EB, "f")
          }
          set useObjectSpaceNormalMap(BB) {
            (0, YB.d)(this, EB, BB, "f")
          }
          get useParallax() {
            return (0, YB.c)(this, cB, "f")
          }
          set useParallax(BB) {
            (0, YB.d)(this, cB, BB, "f")
          }
          get useParallaxOcclusion() {
            return (0, YB.c)(this, hB, "f")
          }
          set useParallaxOcclusion(BB) {
            (0, YB.d)(this, hB, BB, "f")
          }
          get roughness() {
            return (0, YB.c)(this, aB, "f")
          }
          set roughness(BB) {
            (0, YB.d)(this, aB, BB, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, YB.c)(this, eB, "f")
          }
          set useLightmapAsShadowmap(BB) {
            (0, YB.d)(this, eB, BB, "f")
          }
          get diffuseFresnelParameters() {
            return (0, YB.c)(this, TB, "f")
          }
          set diffuseFresnelParameters(BB) {
            (0, YB.d)(this, TB, BB, "f")
          }
          get opacityFresnelParameters() {
            return (0, YB.c)(this, bB, "f")
          }
          set opacityFresnelParameters(BB) {
            (0, YB.d)(this, bB, BB, "f")
          }
          get reflectionFresnelParameters() {
            return (0, YB.c)(this, CB, "f")
          }
          set reflectionFresnelParameters(BB) {
            (0, YB.d)(this, CB, BB, "f")
          }
          get refractionFresnelParameters() {
            return (0, YB.c)(this, HB, "f")
          }
          set refractionFresnelParameters(BB) {
            (0, YB.d)(this, HB, BB, "f")
          }
          get emissiveFresnelParameters() {
            return (0, YB.c)(this, vB, "f")
          }
          set emissiveFresnelParameters(BB) {
            (0, YB.d)(this, vB, BB, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, YB.c)(this, sB, "f")
          }
          set useReflectionFresnelFromSpecular(BB) {
            (0, YB.d)(this, sB, BB, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, YB.c)(this, xB, "f")
          }
          set useGlossinessFromSpecularMapAlpha(BB) {
            (0, YB.d)(this, xB, BB, "f")
          }
          get maxSimultaneousLights() {
            return (0, YB.c)(this, tB, "f")
          }
          set maxSimultaneousLights(BB) {
            (0, YB.d)(this, tB, BB, "f")
          }
          get invertNormalMapX() {
            return (0, YB.c)(this, BO, "f")
          }
          set invertNormalMapX(BB) {
            (0, YB.d)(this, BO, BB, "f")
          }
          get invertNormalMapY() {
            return (0, YB.c)(this, OO, "f")
          }
          set invertNormalMapY(BB) {
            (0, YB.d)(this, OO, BB, "f")
          }
          get twoSidedLighting() {
            return (0, YB.c)(this, GO, "f")
          }
          set twoSidedLighting(BB) {
            (0, YB.d)(this, GO, BB, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, YB.c)(this, YO, "f")
          }
          set applyDecalMapAfterDetailMap(BB) {
            (0, YB.d)(this, YO, BB, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(GB, DB) {
            super(GB, DB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || BB.ForceGLSL), this._diffuseTexture = (0, YB.j)(this, kG, null), OB.set(this, ((0, YB.j)(this, dG), (0, YB.j)(this, KG, void 0))), this._ambientTexture = ((0, YB.j)(this, uG), (0, YB.j)(this, mG, null)), MB.set(this, ((0, YB.j)(this, IG), (0, YB.j)(this, FG, void 0))), this._opacityTexture = ((0, YB.j)(this, iG), (0, YB.j)(this, LG, null)), lB.set(this, ((0, YB.j)(this, gG), (0, YB.j)(this, rG, void 0))), this._reflectionTexture = ((0, YB.j)(this, XG), (0, YB.j)(this, wG, null)), UB.set(this, ((0, YB.j)(this, EG), (0, YB.j)(this, cG, void 0))), this._emissiveTexture = ((0, YB.j)(this, hG), (0, YB.j)(this, aG, null)), fB.set(this, ((0, YB.j)(this, eG), (0, YB.j)(this, TG, void 0))), this._specularTexture = ((0, YB.j)(this, bG), (0, YB.j)(this, CG, null)), kB.set(this, ((0, YB.j)(this, HG), (0, YB.j)(this, vG, void 0))), this._bumpTexture = ((0, YB.j)(this, sG), (0, YB.j)(this, xG, null)), dB.set(this, ((0, YB.j)(this, tG), (0, YB.j)(this, BY, void 0))), this._lightmapTexture = ((0, YB.j)(this, OY), (0, YB.j)(this, GY, null)), KB.set(this, ((0, YB.j)(this, YY), (0, YB.j)(this, DY, void 0))), this._refractionTexture = ((0, YB.j)(this, QY), (0, YB.j)(this, oY, null)), mB.set(this, ((0, YB.j)(this, jY), (0, YB.j)(this, yY, void 0))), this.ambientColor = ((0, YB.j)(this, JY), (0, YB.j)(this, MY, new jB.c(0, 0, 0))), this.diffuseColor = ((0, YB.j)(this, PY), (0, YB.j)(this, zY, new jB.c(1, 1, 1))), this.specularColor = ((0, YB.j)(this, lY), (0, YB.j)(this, pY, new jB.c(1, 1, 1))), this.emissiveColor = ((0, YB.j)(this, qY), (0, YB.j)(this, ZY, new jB.c(0, 0, 0))), this.specularPower = ((0, YB.j)(this, NY), (0, YB.j)(this, RY, 64)), this._useAlphaFromDiffuseTexture = ((0, YB.j)(this, WY), (0, YB.j)(this, AY, !1)), iB.set(this, ((0, YB.j)(this, VY), (0, YB.j)(this, SY, void 0))), this._useEmissiveAsIllumination = ((0, YB.j)(this, nY), (0, YB.j)(this, UY, !1)), LB.set(this, ((0, YB.j)(this, fY), (0, YB.j)(this, kY, void 0))), this._linkEmissiveWithDiffuse = ((0, YB.j)(this, dY), (0, YB.j)(this, KY, !1)), gB.set(this, ((0, YB.j)(this, uY), (0, YB.j)(this, mY, void 0))), this._useSpecularOverAlpha = ((0, YB.j)(this, IY), (0, YB.j)(this, FY, !1)), rB.set(this, ((0, YB.j)(this, iY), (0, YB.j)(this, LY, void 0))), this._useReflectionOverAlpha = ((0, YB.j)(this, gY), (0, YB.j)(this, rY, !1)), XB.set(this, ((0, YB.j)(this, XY), (0, YB.j)(this, wY, void 0))), this._disableLighting = ((0, YB.j)(this, EY), (0, YB.j)(this, cY, !1)), wB.set(this, ((0, YB.j)(this, hY), (0, YB.j)(this, aY, void 0))), this._useObjectSpaceNormalMap = ((0, YB.j)(this, eY), (0, YB.j)(this, TY, !1)), EB.set(this, ((0, YB.j)(this, bY), (0, YB.j)(this, CY, void 0))), this._useParallax = ((0, YB.j)(this, HY), (0, YB.j)(this, vY, !1)), cB.set(this, ((0, YB.j)(this, sY), (0, YB.j)(this, xY, void 0))), this._useParallaxOcclusion = ((0, YB.j)(this, tY), (0, YB.j)(this, BD, !1)), hB.set(this, ((0, YB.j)(this, OD), (0, YB.j)(this, GD, void 0))), this.parallaxScaleBias = ((0, YB.j)(this, YD), (0, YB.j)(this, DD, .05)), this._roughness = ((0, YB.j)(this, QD), (0, YB.j)(this, oD, 0)), aB.set(this, ((0, YB.j)(this, jD), (0, YB.j)(this, yD, void 0))), this.indexOfRefraction = ((0, YB.j)(this, JD), (0, YB.j)(this, MD, .98)), this.invertRefractionY = ((0, YB.j)(this, PD), (0, YB.j)(this, zD, !0)), this.alphaCutOff = ((0, YB.j)(this, lD), (0, YB.j)(this, pD, .4)), this._useLightmapAsShadowmap = ((0, YB.j)(this, qD), (0, YB.j)(this, ZD, !1)), eB.set(this, ((0, YB.j)(this, ND), (0, YB.j)(this, RD, void 0))), this._diffuseFresnelParameters = ((0, YB.j)(this, WD), (0, YB.j)(this, AD, void 0)), TB.set(this, ((0, YB.j)(this, VD), (0, YB.j)(this, SD, void 0))), this._opacityFresnelParameters = ((0, YB.j)(this, nD), (0, YB.j)(this, UD, void 0)), bB.set(this, ((0, YB.j)(this, fD), (0, YB.j)(this, kD, void 0))), this._reflectionFresnelParameters = ((0, YB.j)(this, dD), (0, YB.j)(this, KD, void 0)), CB.set(this, ((0, YB.j)(this, uD), (0, YB.j)(this, mD, void 0))), this._refractionFresnelParameters = ((0, YB.j)(this, ID), (0, YB.j)(this, FD, void 0)), HB.set(this, ((0, YB.j)(this, iD), (0, YB.j)(this, LD, void 0))), this._emissiveFresnelParameters = ((0, YB.j)(this, gD), (0, YB.j)(this, rD, void 0)), vB.set(this, ((0, YB.j)(this, XD), (0, YB.j)(this, wD, void 0))), this._useReflectionFresnelFromSpecular = ((0, YB.j)(this, ED), (0, YB.j)(this, cD, !1)), sB.set(this, ((0, YB.j)(this, hD), (0, YB.j)(this, aD, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, YB.j)(this, eD), (0, YB.j)(this, TD, !1)), xB.set(this, ((0, YB.j)(this, bD), (0, YB.j)(this, CD, void 0))), this._maxSimultaneousLights = ((0, YB.j)(this, HD), (0, YB.j)(this, vD, 4)), tB.set(this, ((0, YB.j)(this, sD), (0, YB.j)(this, xD, void 0))), this._invertNormalMapX = ((0, YB.j)(this, tD), (0, YB.j)(this, BQ, !1)), BO.set(this, ((0, YB.j)(this, OQ), (0, YB.j)(this, GQ, void 0))), this._invertNormalMapY = ((0, YB.j)(this, YQ), (0, YB.j)(this, DQ, !1)), OO.set(this, ((0, YB.j)(this, QQ), (0, YB.j)(this, oQ, void 0))), this._twoSidedLighting = ((0, YB.j)(this, jQ), (0, YB.j)(this, yQ, !1)), GO.set(this, ((0, YB.j)(this, JQ), (0, YB.j)(this, MQ, void 0))), this._applyDecalMapAfterDetailMap = ((0, YB.j)(this, PQ), (0, YB.j)(this, zQ, !1)), YO.set(this, ((0, YB.j)(this, lQ), (0, YB.j)(this, pQ, void 0))), this._vertexPullingMetadata = ((0, YB.j)(this, qQ), null), this._renderTargets = new QB.d(16), this._globalAmbientColor = new jB.c(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new NB.b(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new JB.c, this.getRenderTargetTextures = () => (this._renderTargets.reset(), BB.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), BB.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(BB.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(BB.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === zB.b.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== zB.b.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(OB, GB) {
            let YB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const DB = GB._drawWrapper;
            if (DB.effect && this.isFrozen && DB._wasPreviouslyReady && DB._wasPreviouslyUsingInstances === YB) return !0;
            GB.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), GB.materialDefines = new IB(this._eventInfo.defineNames));
            const QB = this.JF(),
              oB = GB.materialDefines;
            if (this._isReadyForSubMesh(GB)) return !0;
            const jB = QB.Lp();
            if (oB._needNormals = (0, AB.$)(QB, OB, oB, !0, this._maxSimultaneousLights, this._disableLighting), !(0, AB.e)(QB, OB, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, AB.db)(QB, oB);
            const MB = this.needAlphaBlendingForMesh(OB) && this.JF().useOrderIndependentTransparency;
            if ((0, AB.jb)(QB, oB, this.canRenderToMRT && !MB), (0, AB.gb)(QB, oB, MB), nB.d.PrepareDefines(jB.currentRenderPassId, OB, oB), oB._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, oB._needUVs = !1;
              for (let BB = 1; BB <= 6; ++BB) oB["MAINUV" + BB] = !1;
              if (QB.texturesEnabled) {
                if (oB.DIFFUSEDIRECTUV = 0, oB.BUMPDIRECTUV = 0, oB.AMBIENTDIRECTUV = 0, oB.OPACITYDIRECTUV = 0, oB.EMISSIVEDIRECTUV = 0, oB.SPECULARDIRECTUV = 0, oB.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && BB.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, AB.ab)(this._diffuseTexture, oB, "DIFFUSE")
                } else oB.DIFFUSE = !1;
                if (this._ambientTexture && BB.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, AB.ab)(this._ambientTexture, oB, "AMBIENT")
                } else oB.AMBIENT = !1;
                if (this._opacityTexture && BB.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, AB.ab)(this._opacityTexture, oB, "OPACITY"), oB.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else oB.OPACITY = !1;
                if (this._reflectionTexture && BB.ReflectionTextureEnabled ? (oB.ROUGHNESS = this._roughness > 0, oB.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (oB.ROUGHNESS = !1, oB.REFLECTIONOVERALPHA = !1), !(0, AB._)(QB, this._reflectionTexture, oB)) return !1;
                if (this._emissiveTexture && BB.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, AB.ab)(this._emissiveTexture, oB, "EMISSIVE")
                } else oB.EMISSIVE = !1;
                if (this._lightmapTexture && BB.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, AB.ab)(this._lightmapTexture, oB, "LIGHTMAP"), oB.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, oB.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else oB.LIGHTMAP = !1;
                if (this._specularTexture && BB.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, AB.ab)(this._specularTexture, oB, "SPECULAR"), oB.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else oB.SPECULAR = !1;
                if (QB.Lp().getCaps().standardDerivatives && this._bumpTexture && BB.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, AB.ab)(this._bumpTexture, oB, "BUMP"), oB.PARALLAX = this._useParallax, oB.PARALLAX_RHS = QB.useRightHandedSystem, oB.PARALLAXOCCLUSION = this._useParallaxOcclusion, oB.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else oB.BUMP = !1, oB.PARALLAX = !1, oB.PARALLAX_RHS = !1, oB.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && BB.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  oB._needUVs = !0, oB.REFRACTION = !0, oB.REFRACTIONMAP_3D = this._refractionTexture.isCube, oB.RGBDREFRACTION = this._refractionTexture.isRGBD, oB.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else oB.REFRACTION = !1;
                oB.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else oB.DIFFUSE = !1, oB.AMBIENT = !1, oB.OPACITY = !1, oB.REFLECTION = !1, oB.EMISSIVE = !1, oB.LIGHTMAP = !1, oB.BUMP = !1, oB.REFRACTION = !1;
              oB.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), oB.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, oB.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, oB.SPECULAROVERALPHA = this._useSpecularOverAlpha, oB.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, oB.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, oB.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(OB), oB.TEXTURE_REPETITION_MODE = jB.version > 1 || jB.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = oB, this._eventInfo.subMesh = GB, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (oB._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(oB), oB.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, oB.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (oB._areFresnelDirty && (BB.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (oB.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, oB.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, oB.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, oB.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, oB.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, oB.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, oB._needNormals = !0, oB.FRESNEL = !0) : oB.FRESNEL = !1), oB.AREALIGHTUSED || oB.CLUSTLIGHT_BATCH)
              for (let BB = 0; BB < OB.lightSources.length; BB++)
                if (!OB.lightSources[BB]._isReady()) return !1;
            (0, AB.cb)(OB, QB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(OB), oB, this._applyDecalMapAfterDetailMap, this._useVertexPulling, GB.getRenderingMesh(), this._isVertexOutputInvariant), (0, AB.Y)(QB, jB, this, oB, YB, null, GB.getRenderingMesh().hasThinInstances), this._eventInfo.defines = oB, this._eventInfo.mesh = OB, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, AB.X)(OB, oB, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let zB = !1;
            if (oB.isDirty) {
              const YB = oB._areLightsDisposed;
              oB.markAsProcessed();
              const DB = new ZB.c;
              oB.REFLECTION && DB.addFallback(0, "REFLECTION"), oB.SPECULAR && DB.addFallback(0, "SPECULAR"), oB.BUMP && DB.addFallback(0, "BUMP"), oB.PARALLAX && DB.addFallback(1, "PARALLAX"), oB.PARALLAX_RHS && DB.addFallback(1, "PARALLAX_RHS"), oB.PARALLAXOCCLUSION && DB.addFallback(0, "PARALLAXOCCLUSION"), oB.SPECULAROVERALPHA && DB.addFallback(0, "SPECULAROVERALPHA"), oB.FOG && DB.addFallback(1, "FOG"), oB.POINTSIZE && DB.addFallback(0, "POINTSIZE"), oB.LOGARITHMICDEPTH && DB.addFallback(0, "LOGARITHMICDEPTH"), (0, AB.J)(oB, DB, this._maxSimultaneousLights), oB.SPECULARTERM && DB.addFallback(0, "SPECULARTERM"), oB.DIFFUSEFRESNEL && DB.addFallback(1, "DIFFUSEFRESNEL"), oB.OPACITYFRESNEL && DB.addFallback(2, "OPACITYFRESNEL"), oB.REFLECTIONFRESNEL && DB.addFallback(3, "REFLECTIONFRESNEL"), oB.EMISSIVEFRESNEL && DB.addFallback(4, "EMISSIVEFRESNEL"), oB.FRESNEL && DB.addFallback(4, "FRESNEL"), oB.MULTIVIEW && DB.addFallback(0, "MULTIVIEW");
              const MB = [yB.h.PositionKind];
              oB.NORMAL && MB.push(yB.h.NormalKind), oB.TANGENT && MB.push(yB.h.TangentKind);
              for (let BB = 1; BB <= 6; ++BB) oB["UV" + BB] && MB.push(`uv${1===BB?"":BB}`);
              oB.VERTEXCOLOR && MB.push(yB.h.ColorKind), (0, AB.M)(MB, OB, oB, DB), (0, AB.P)(MB, oB), (0, AB.R)(MB, OB, oB), (0, AB.L)(MB, OB, oB);
              let lB = "default";
              const pB = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                qB = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, AB.mb)(pB, qB, !1);
              const NB = ["Material", "Scene", "Mesh"],
                VB = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: oB.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = DB, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = oB, this._eventInfo.uniforms = pB, this._eventInfo.attributes = MB, this._eventInfo.samplers = qB, this._eventInfo.uniformBuffersNames = NB, this._eventInfo.customCode = void 0, this._eventInfo.mesh = OB, this._eventInfo.indexParameters = VB, this._callbackPluginEventGeneric(128, this._eventInfo), nB.d.AddUniformsAndSamplers(pB, qB), JB.c.AddUniforms(pB), JB.c.AddSamplers(qB), PB.d && (PB.d.PrepareUniforms(pB, oB), PB.d.PrepareSamplers(qB, oB)), (0, AB.nb)({
                  uniformsNames: pB,
                  uniformBuffersNames: NB,
                  samplers: qB,
                  defines: oB,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, RB.e)(pB), this._useVertexPulling) {
                const BB = GB.getRenderingMesh(),
                  OB = BB?.geometry;
                OB && (this._vertexPullingMetadata = (0, WB.e)(OB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, OB) => {
                  pB.push(`vp_${OB}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const SB = {};
              this.customShaderNameResolve && (lB = this.customShaderNameResolve(lB, pB, NB, qB, oB, MB, SB));
              const UB = oB.toString(),
                fB = GB.effect,
                kB = QB.Lp().createEffect(lB, {
                  attributes: MB,
                  uniformsNames: pB,
                  uniformBuffersNames: NB,
                  samplers: qB,
                  defines: UB,
                  fallbacks: DB,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: VB,
                  processFinalCode: SB.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: oB.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: BB._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, jB);
              if (this._eventInfo.customCode = void 0, kB)
                if (this._onEffectCreatedObservable && (uB.effect = kB, uB.subMesh = GB, this._onEffectCreatedObservable.notifyObservers(uB)), this.allowShaderHotSwapping && fB && !kB.isReady()) {
                  if (oB.markAsUnprocessed(), zB = this.isFrozen, YB) return oB._areLightsDisposed = !0, !1
                } else QB.resetCachedMaterial(), GB.setEffect(kB, oB, this._materialContext)
            }
            return !(!GB.effect || !GB.effect.isReady()) && (oB._renderId = QB.getRenderId(), DB._wasPreviouslyReady = !zB, DB._wasPreviouslyUsingInstances = YB, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const BB = this._uniformBuffer;
            BB.addUniform("diffuseLeftColor", 4), BB.addUniform("diffuseRightColor", 4), BB.addUniform("opacityParts", 4), BB.addUniform("reflectionLeftColor", 4), BB.addUniform("reflectionRightColor", 4), BB.addUniform("refractionLeftColor", 4), BB.addUniform("refractionRightColor", 4), BB.addUniform("emissiveLeftColor", 4), BB.addUniform("emissiveRightColor", 4), BB.addUniform("vDiffuseInfos", 2), BB.addUniform("vAmbientInfos", 2), BB.addUniform("vOpacityInfos", 2), BB.addUniform("vEmissiveInfos", 2), BB.addUniform("vLightmapInfos", 2), BB.addUniform("vSpecularInfos", 2), BB.addUniform("vBumpInfos", 3), BB.addUniform("diffuseMatrix", 16), BB.addUniform("ambientMatrix", 16), BB.addUniform("opacityMatrix", 16), BB.addUniform("emissiveMatrix", 16), BB.addUniform("lightmapMatrix", 16), BB.addUniform("specularMatrix", 16), BB.addUniform("bumpMatrix", 16), BB.addUniform("vTangentSpaceParams", 2), BB.addUniform("pointSize", 1), BB.addUniform("alphaCutOff", 1), BB.addUniform("refractionMatrix", 16), BB.addUniform("vRefractionInfos", 4), BB.addUniform("vRefractionPosition", 3), BB.addUniform("vRefractionSize", 3), BB.addUniform("vSpecularColor", 4), BB.addUniform("vEmissiveColor", 3), BB.addUniform("vDiffuseColor", 4), BB.addUniform("vAmbientColor", 3), BB.addUniform("cameraInfo", 4), BB.addUniform("vTextureRepetitionHexTilingParams", 4), (0, AB.lb)(BB, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(OB, GB, YB) {
            const DB = this.JF(),
              QB = YB.materialDefines;
            if (!QB) return;
            const yB = YB.effect;
            if (!yB) return;
            this._activeEffect = yB, GB.getMeshUniformBuffer().bindToEffect(yB, "Mesh"), GB.transferToEffect(OB), this._uniformBuffer.bindToEffect(yB, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, DB, GB, OB, this.isFrozen), nB.d.Bind(DB.Lp().currentRenderPassId, this._activeEffect, GB, OB, this);
            const JB = DB.activeCamera;
            JB ? this._uniformBuffer.updateFloat4("cameraInfo", JB.minZ, JB.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const MB = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", MB[0], MB[1], MB[2], MB[3]), this._eventInfo.subMesh = YB, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), QB.OBJECTSPACE_NORMALMAP && (OB.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const PB = this._mustRebind(DB, yB, YB, GB.visibility),
              zB = DB.Lp()._features.needToAlwaysBindUniformBuffers;
            (0, AB.i)(GB, yB), this._vertexPullingMetadata && (0, WB.c)(yB, this._vertexPullingMetadata);
            const lB = this._uniformBuffer;
            if (PB) {
              if (this.bindViewProjection(yB), !lB.useUbo || !this.isFrozen || !lB.isSync || YB._drawWrapper._forceRebindOnNextCall) {
                if (BB.FresnelEnabled && QB.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (lB.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), lB.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const BB = jB.o.Color3[0];
                    BB.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), lB.updateColor4("opacityParts", BB, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (lB.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), lB.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (lB.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), lB.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (lB.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), lB.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (QB.ALPHATEST && lB.updateFloat("alphaCutOff", this.alphaCutOff), DB.texturesEnabled && (this._diffuseTexture && BB.DiffuseTextureEnabled && (lB.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, AB.F)(this._diffuseTexture, lB, "diffuse")), this._ambientTexture && BB.AmbientTextureEnabled && (lB.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, AB.F)(this._ambientTexture, lB, "ambient")), this._opacityTexture && BB.OpacityTextureEnabled && (lB.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, AB.F)(this._opacityTexture, lB, "opacity")), (0, AB.o)(DB, QB, lB, jB.c.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && BB.ReflectionTextureEnabled || lB.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && BB.EmissiveTextureEnabled && (lB.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, AB.F)(this._emissiveTexture, lB, "emissive")), this._lightmapTexture && BB.LightmapTextureEnabled && (lB.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, AB.F)(this._lightmapTexture, lB, "lightmap")), this._specularTexture && BB.SpecularTextureEnabled && (lB.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, AB.F)(this._specularTexture, lB, "specular")), this._bumpTexture && DB.Lp().getCaps().standardDerivatives && BB.BumpTextureEnabled && (lB.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, AB.F)(this._bumpTexture, lB, "bump"), DB._mirroredCameraPosition ? lB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : lB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && BB.RefractionTextureEnabled)) {
                  let BB = 1;
                  if (this._refractionTexture.isCube || (lB.TBB("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (BB = this._refractionTexture.depth)), lB.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, BB, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const BB = this._refractionTexture;
                    lB.updateVector3("vRefractionPosition", BB.boundingBoxPosition), lB.updateVector3("vRefractionSize", BB.boundingBoxSize)
                  }
                }
                this.pointsCloud && lB.updateFloat("pointSize", this.pointSize), lB.updateColor4("vSpecularColor", this.specularColor, this.specularPower), lB.updateColor3("vEmissiveColor", BB.EmissiveTextureEnabled ? this.emissiveColor : jB.c.BlackReadOnly), lB.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), DB.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), lB.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              DB.texturesEnabled && (this._diffuseTexture && BB.DiffuseTextureEnabled && yB.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && BB.AmbientTextureEnabled && yB.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && BB.OpacityTextureEnabled && yB.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && BB.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? yB.setTexture("reflectionCubeSampler", this._reflectionTexture) : yB.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && BB.EmissiveTextureEnabled && yB.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && BB.LightmapTextureEnabled && yB.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && BB.SpecularTextureEnabled && yB.setTexture("specularSampler", this._specularTexture), this._bumpTexture && DB.Lp().getCaps().standardDerivatives && BB.BumpTextureEnabled && yB.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && BB.RefractionTextureEnabled && (this._refractionTexture.isCube ? yB.setTexture("refractionCubeSampler", this._refractionTexture) : yB.setTexture("refraction2DSampler", this._refractionTexture))), this.JF().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(GB) && this.JF().depthPeelingRenderer.bind(yB), this._eventInfo.subMesh = YB, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, RB.g)(yB, this, DB), this.bindEyePosition(yB)
            } else zB && (this._needToBindSceneUbo = !0);
            !PB && this.isFrozen && !zB || !DB.lightsEnabled || this._disableLighting || (0, AB.t)(DB, GB, yB, QB, this._maxSimultaneousLights), !PB && this.isFrozen || ((DB.fogEnabled && GB.applyFog && DB.fogMode !== oB.e.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || GB.receiveShadows || QB.PREPASS || QB.CLUSTLIGHT_BATCH) && this.bindView(yB), (0, AB.k)(DB, GB, yB), QB.NUM_MORPH_INFLUENCERS && (0, AB.A)(GB, yB), QB.BAKED_VERTEX_ANIMATION_TEXTURE && GB.bakedVertexAnimationManager?.bind(yB, QB.INSTANCES), this.useLogarithmicDepth && (0, AB.x)(QB, yB, DB), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(GB, this._activeEffect, YB), lB.update()
          }
          _canBindRunFollower(OB, GB, YB, DB, QB) {
            const oB = OB.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === BB.prototype.isReadyForSubMesh && this.bindForSubMesh === BB.prototype.bindForSubMesh && this._mustRebind === pB.d.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !GB._features.needToAlwaysBindUniformBuffers && !(oB && oB.enabled && oB.currentRTisSceneRT) && !nB.d._Configurations[GB.currentRenderPassId] && !DB.materialDefines?.OBJECTSPACE_NORMALMAP && !YB.skeleton && !QB._bonesComputationForcedToCPU
          }
          _bindRunFollower(BB, OB, GB, YB) {
            this._activeEffect = YB, OB.getMeshUniformBuffer().bindToEffect(YB, "Mesh"), OB.transferToEffect(BB);
            const DB = this._uniformBuffer;
            DB.bindToEffect(YB, "Material");
            const QB = this._scene.activeCamera;
            QB ? DB.updateFloat4("cameraInfo", QB.minZ, QB.maxZ, 0, 0) : DB.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const oB = this.textureRepetitionHexTilingParams;
            DB.updateFloat4("vTextureRepetitionHexTilingParams", oB[0], oB[1], oB[2], oB[3]), this._afterBind(OB, YB, GB), DB.update()
          }
          getAnimatables() {
            const BB = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && BB.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && BB.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && BB.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && BB.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && BB.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && BB.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && BB.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && BB.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && BB.push(this._refractionTexture), BB
          }
          getActiveTextures() {
            const BB = super.getActiveTextures();
            return this._diffuseTexture && BB.push(this._diffuseTexture), this._ambientTexture && BB.push(this._ambientTexture), this._opacityTexture && BB.push(this._opacityTexture), this._reflectionTexture && BB.push(this._reflectionTexture), this._emissiveTexture && BB.push(this._emissiveTexture), this._specularTexture && BB.push(this._specularTexture), this._bumpTexture && BB.push(this._bumpTexture), this._lightmapTexture && BB.push(this._lightmapTexture), this._refractionTexture && BB.push(this._refractionTexture), BB
          }
          hasTexture(BB) {
            return !!super.hasTexture(BB) || (this._diffuseTexture === BB || (this._ambientTexture === BB || (this._opacityTexture === BB || (this._reflectionTexture === BB || (this._emissiveTexture === BB || (this._specularTexture === BB || (this._bumpTexture === BB || (this._lightmapTexture === BB || this._refractionTexture === BB))))))))
          }
          dispose(BB, OB) {
            OB && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(BB, OB)
          }
          clone(OB) {
            let GB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              YB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const DB = VB.d.Clone((() => new BB(OB, this.JF())), this, {
              cloneTexturesOnlyOnce: GB
            });
            return DB.name = OB, DB.id = OB, this.stencil.copyTo(DB.stencil), this._clonePlugins(DB, YB), DB
          }
          static Parse(OB, GB, YB) {
            const DB = VB.d.Parse((() => new BB(OB.name, GB)), OB, GB, YB);
            return OB.stencil && DB.stencil.parse(OB.stencil, GB, YB), zB.b._ParsePlugins(OB, DB, GB, YB), DB
          }
          static get DiffuseTextureEnabled() {
            return qB.d.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(BB) {
            qB.d.DiffuseTextureEnabled = BB
          }
          static get DetailTextureEnabled() {
            return qB.d.DetailTextureEnabled
          }
          static set DetailTextureEnabled(BB) {
            qB.d.DetailTextureEnabled = BB
          }
          static get AmbientTextureEnabled() {
            return qB.d.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(BB) {
            qB.d.AmbientTextureEnabled = BB
          }
          static get OpacityTextureEnabled() {
            return qB.d.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(BB) {
            qB.d.OpacityTextureEnabled = BB
          }
          static get ReflectionTextureEnabled() {
            return qB.d.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(BB) {
            qB.d.ReflectionTextureEnabled = BB
          }
          static get EmissiveTextureEnabled() {
            return qB.d.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(BB) {
            qB.d.EmissiveTextureEnabled = BB
          }
          static get SpecularTextureEnabled() {
            return qB.d.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(BB) {
            qB.d.SpecularTextureEnabled = BB
          }
          static get BumpTextureEnabled() {
            return qB.d.BumpTextureEnabled
          }
          static set BumpTextureEnabled(BB) {
            qB.d.BumpTextureEnabled = BB
          }
          static get LightmapTextureEnabled() {
            return qB.d.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(BB) {
            qB.d.LightmapTextureEnabled = BB
          }
          static get RefractionTextureEnabled() {
            return qB.d.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(BB) {
            qB.d.RefractionTextureEnabled = BB
          }
          static get ColorGradingTextureEnabled() {
            return qB.d.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(BB) {
            qB.d.ColorGradingTextureEnabled = BB
          }
          static get FresnelEnabled() {
            return qB.d.FresnelEnabled
          }
          static set FresnelEnabled(BB) {
            qB.d.FresnelEnabled = BB
          }
        }, OB = new WeakMap, MB = new WeakMap, lB = new WeakMap, UB = new WeakMap, fB = new WeakMap, kB = new WeakMap, dB = new WeakMap, KB = new WeakMap, mB = new WeakMap, iB = new WeakMap, LB = new WeakMap, gB = new WeakMap, rB = new WeakMap, XB = new WeakMap, wB = new WeakMap, EB = new WeakMap, cB = new WeakMap, hB = new WeakMap, aB = new WeakMap, eB = new WeakMap, TB = new WeakMap, bB = new WeakMap, CB = new WeakMap, HB = new WeakMap, vB = new WeakMap, sB = new WeakMap, xB = new WeakMap, tB = new WeakMap, BO = new WeakMap, OO = new WeakMap, GO = new WeakMap, YO = new WeakMap, (() => {
          const OB = "function" === typeof Symbol && Symbol.metadata ? Object.create(fG[Symbol.metadata] ?? null) : void 0;
          DO = [(0, DB.B)("diffuseTexture")], QO = [(0, DB.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], oO = [(0, DB.B)("ambientTexture")], jO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], yO = [(0, DB.B)("opacityTexture")], JO = [(0, DB.g)("_markAllSubMeshesAsTexturesAndMiscDirty")], MO = [(0, DB.B)("reflectionTexture")], PO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], zO = [(0, DB.B)("emissiveTexture")], lO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], pO = [(0, DB.B)("specularTexture")], qO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], ZO = [(0, DB.B)("bumpTexture")], NO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], RO = [(0, DB.B)("lightmapTexture")], WO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], AO = [(0, DB.B)("refractionTexture")], VO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], SO = [(0, DB.n)("ambient")], nO = [(0, DB.n)("diffuse")], UO = [(0, DB.n)("specular")], fO = [(0, DB.n)("emissive")], kO = [(0, DB.L)()], dO = [(0, DB.L)("useAlphaFromDiffuseTexture")], KO = [() => ({
            init(BB) {
              return void 0 === BB && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = BB), BB
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(BB) {
              this._useAlphaFromDiffuseTexture = BB
            }
          })], uO = [(0, DB.L)("useEmissiveAsIllumination")], mO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], IO = [(0, DB.L)("linkEmissiveWithDiffuse")], FO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], iO = [(0, DB.L)("useSpecularOverAlpha")], LO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], gO = [(0, DB.L)("useReflectionOverAlpha")], rO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], XO = [(0, DB.L)("disableLighting")], wO = [(0, DB.g)("_markAllSubMeshesAsLightsDirty")], EO = [(0, DB.L)("useObjectSpaceNormalMap")], cO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], hO = [(0, DB.L)("useParallax")], aO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], eO = [(0, DB.L)("useParallaxOcclusion")], TO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], bO = [(0, DB.L)()], CO = [(0, DB.L)("roughness")], HO = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], vO = [(0, DB.L)()], sO = [(0, DB.L)()], xO = [(0, DB.L)()], tO = [(0, DB.L)("useLightmapAsShadowmap")], BG = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], OG = [(0, DB.r)("diffuseFresnelParameters")], GG = [(0, DB.g)("_markAllSubMeshesAsFresnelDirty")], YG = [(0, DB.r)("opacityFresnelParameters")], DG = [(0, DB.g)("_markAllSubMeshesAsFresnelAndMiscDirty")], QG = [(0, DB.r)("reflectionFresnelParameters")], oG = [(0, DB.g)("_markAllSubMeshesAsFresnelDirty")], jG = [(0, DB.r)("refractionFresnelParameters")], yG = [(0, DB.g)("_markAllSubMeshesAsFresnelDirty")], JG = [(0, DB.r)("emissiveFresnelParameters")], MG = [(0, DB.g)("_markAllSubMeshesAsFresnelDirty")], PG = [(0, DB.L)("useReflectionFresnelFromSpecular")], zG = [(0, DB.g)("_markAllSubMeshesAsFresnelDirty")], lG = [(0, DB.L)("useGlossinessFromSpecularMapAlpha")], pG = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], qG = [(0, DB.L)("maxSimultaneousLights")], ZG = [(0, DB.g)("_markAllSubMeshesAsLightsDirty")], NG = [(0, DB.L)("invertNormalMapX")], RG = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], WG = [(0, DB.L)("invertNormalMapY")], AG = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], VG = [(0, DB.L)("twoSidedLighting")], SG = [(0, DB.g)("_markAllSubMeshesAsTexturesDirty")], nG = [(0, DB.L)("applyDecalMapAfterDetailMap")], UG = [(0, DB.g)("_markAllSubMeshesAsMiscDirty")], (0, YB.h)(BB, null, QO, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "diffuseTexture" in BB,
              get: BB => BB.diffuseTexture,
              set: (BB, OB) => {
                BB.diffuseTexture = OB
              }
            },
            metadata: OB
          }, KG, uG), (0, YB.h)(BB, null, jO, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "ambientTexture" in BB,
              get: BB => BB.ambientTexture,
              set: (BB, OB) => {
                BB.ambientTexture = OB
              }
            },
            metadata: OB
          }, FG, iG), (0, YB.h)(BB, null, JO, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "opacityTexture" in BB,
              get: BB => BB.opacityTexture,
              set: (BB, OB) => {
                BB.opacityTexture = OB
              }
            },
            metadata: OB
          }, rG, XG), (0, YB.h)(BB, null, PO, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "reflectionTexture" in BB,
              get: BB => BB.reflectionTexture,
              set: (BB, OB) => {
                BB.reflectionTexture = OB
              }
            },
            metadata: OB
          }, cG, hG), (0, YB.h)(BB, null, lO, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissiveTexture" in BB,
              get: BB => BB.emissiveTexture,
              set: (BB, OB) => {
                BB.emissiveTexture = OB
              }
            },
            metadata: OB
          }, TG, bG), (0, YB.h)(BB, null, qO, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularTexture" in BB,
              get: BB => BB.specularTexture,
              set: (BB, OB) => {
                BB.specularTexture = OB
              }
            },
            metadata: OB
          }, vG, sG), (0, YB.h)(BB, null, NO, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "bumpTexture" in BB,
              get: BB => BB.bumpTexture,
              set: (BB, OB) => {
                BB.bumpTexture = OB
              }
            },
            metadata: OB
          }, BY, OY), (0, YB.h)(BB, null, WO, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "lightmapTexture" in BB,
              get: BB => BB.lightmapTexture,
              set: (BB, OB) => {
                BB.lightmapTexture = OB
              }
            },
            metadata: OB
          }, DY, QY), (0, YB.h)(BB, null, VO, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "refractionTexture" in BB,
              get: BB => BB.refractionTexture,
              set: (BB, OB) => {
                BB.refractionTexture = OB
              }
            },
            metadata: OB
          }, yY, JY), (0, YB.h)(BB, null, KO, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "useAlphaFromDiffuseTexture" in BB,
              get: BB => BB.useAlphaFromDiffuseTexture,
              set: (BB, OB) => {
                BB.useAlphaFromDiffuseTexture = OB
              }
            },
            metadata: OB
          }, SY, nY), (0, YB.h)(BB, null, mO, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: BB => "useEmissiveAsIllumination" in BB,
              get: BB => BB.useEmissiveAsIllumination,
              set: (BB, OB) => {
                BB.useEmissiveAsIllumination = OB
              }
            },
            metadata: OB
          }, kY, dY), (0, YB.h)(BB, null, FO, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: BB => "linkEmissiveWithDiffuse" in BB,
              get: BB => BB.linkEmissiveWithDiffuse,
              set: (BB, OB) => {
                BB.linkEmissiveWithDiffuse = OB
              }
            },
            metadata: OB
          }, mY, IY), (0, YB.h)(BB, null, LO, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "useSpecularOverAlpha" in BB,
              get: BB => BB.useSpecularOverAlpha,
              set: (BB, OB) => {
                BB.useSpecularOverAlpha = OB
              }
            },
            metadata: OB
          }, LY, gY), (0, YB.h)(BB, null, rO, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "useReflectionOverAlpha" in BB,
              get: BB => BB.useReflectionOverAlpha,
              set: (BB, OB) => {
                BB.useReflectionOverAlpha = OB
              }
            },
            metadata: OB
          }, wY, EY), (0, YB.h)(BB, null, wO, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "disableLighting" in BB,
              get: BB => BB.disableLighting,
              set: (BB, OB) => {
                BB.disableLighting = OB
              }
            },
            metadata: OB
          }, aY, eY), (0, YB.h)(BB, null, cO, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "useObjectSpaceNormalMap" in BB,
              get: BB => BB.useObjectSpaceNormalMap,
              set: (BB, OB) => {
                BB.useObjectSpaceNormalMap = OB
              }
            },
            metadata: OB
          }, CY, HY), (0, YB.h)(BB, null, aO, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: BB => "useParallax" in BB,
              get: BB => BB.useParallax,
              set: (BB, OB) => {
                BB.useParallax = OB
              }
            },
            metadata: OB
          }, xY, tY), (0, YB.h)(BB, null, TO, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "useParallaxOcclusion" in BB,
              get: BB => BB.useParallaxOcclusion,
              set: (BB, OB) => {
                BB.useParallaxOcclusion = OB
              }
            },
            metadata: OB
          }, GD, YD), (0, YB.h)(BB, null, HO, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "roughness" in BB,
              get: BB => BB.roughness,
              set: (BB, OB) => {
                BB.roughness = OB
              }
            },
            metadata: OB
          }, yD, JD), (0, YB.h)(BB, null, BG, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: BB => "useLightmapAsShadowmap" in BB,
              get: BB => BB.useLightmapAsShadowmap,
              set: (BB, OB) => {
                BB.useLightmapAsShadowmap = OB
              }
            },
            metadata: OB
          }, RD, WD), (0, YB.h)(BB, null, GG, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "diffuseFresnelParameters" in BB,
              get: BB => BB.diffuseFresnelParameters,
              set: (BB, OB) => {
                BB.diffuseFresnelParameters = OB
              }
            },
            metadata: OB
          }, SD, nD), (0, YB.h)(BB, null, DG, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "opacityFresnelParameters" in BB,
              get: BB => BB.opacityFresnelParameters,
              set: (BB, OB) => {
                BB.opacityFresnelParameters = OB
              }
            },
            metadata: OB
          }, kD, dD), (0, YB.h)(BB, null, oG, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "reflectionFresnelParameters" in BB,
              get: BB => BB.reflectionFresnelParameters,
              set: (BB, OB) => {
                BB.reflectionFresnelParameters = OB
              }
            },
            metadata: OB
          }, mD, ID), (0, YB.h)(BB, null, yG, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "refractionFresnelParameters" in BB,
              get: BB => BB.refractionFresnelParameters,
              set: (BB, OB) => {
                BB.refractionFresnelParameters = OB
              }
            },
            metadata: OB
          }, LD, gD), (0, YB.h)(BB, null, MG, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissiveFresnelParameters" in BB,
              get: BB => BB.emissiveFresnelParameters,
              set: (BB, OB) => {
                BB.emissiveFresnelParameters = OB
              }
            },
            metadata: OB
          }, wD, ED), (0, YB.h)(BB, null, zG, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: BB => "useReflectionFresnelFromSpecular" in BB,
              get: BB => BB.useReflectionFresnelFromSpecular,
              set: (BB, OB) => {
                BB.useReflectionFresnelFromSpecular = OB
              }
            },
            metadata: OB
          }, aD, eD), (0, YB.h)(BB, null, pG, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "useGlossinessFromSpecularMapAlpha" in BB,
              get: BB => BB.useGlossinessFromSpecularMapAlpha,
              set: (BB, OB) => {
                BB.useGlossinessFromSpecularMapAlpha = OB
              }
            },
            metadata: OB
          }, CD, HD), (0, YB.h)(BB, null, ZG, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: BB => "maxSimultaneousLights" in BB,
              get: BB => BB.maxSimultaneousLights,
              set: (BB, OB) => {
                BB.maxSimultaneousLights = OB
              }
            },
            metadata: OB
          }, xD, tD), (0, YB.h)(BB, null, RG, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertNormalMapX" in BB,
              get: BB => BB.invertNormalMapX,
              set: (BB, OB) => {
                BB.invertNormalMapX = OB
              }
            },
            metadata: OB
          }, GQ, YQ), (0, YB.h)(BB, null, AG, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertNormalMapY" in BB,
              get: BB => BB.invertNormalMapY,
              set: (BB, OB) => {
                BB.invertNormalMapY = OB
              }
            },
            metadata: OB
          }, oQ, jQ), (0, YB.h)(BB, null, SG, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "twoSidedLighting" in BB,
              get: BB => BB.twoSidedLighting,
              set: (BB, OB) => {
                BB.twoSidedLighting = OB
              }
            },
            metadata: OB
          }, MQ, PQ), (0, YB.h)(BB, null, UG, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "applyDecalMapAfterDetailMap" in BB,
              get: BB => BB.applyDecalMapAfterDetailMap,
              set: (BB, OB) => {
                BB.applyDecalMapAfterDetailMap = OB
              }
            },
            metadata: OB
          }, pQ, qQ), (0, YB.h)(null, null, DO, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_diffuseTexture" in BB,
              get: BB => BB._diffuseTexture,
              set: (BB, OB) => {
                BB._diffuseTexture = OB
              }
            },
            metadata: OB
          }, kG, dG), (0, YB.h)(null, null, oO, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_ambientTexture" in BB,
              get: BB => BB._ambientTexture,
              set: (BB, OB) => {
                BB._ambientTexture = OB
              }
            },
            metadata: OB
          }, mG, IG), (0, YB.h)(null, null, yO, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_opacityTexture" in BB,
              get: BB => BB._opacityTexture,
              set: (BB, OB) => {
                BB._opacityTexture = OB
              }
            },
            metadata: OB
          }, LG, gG), (0, YB.h)(null, null, MO, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_reflectionTexture" in BB,
              get: BB => BB._reflectionTexture,
              set: (BB, OB) => {
                BB._reflectionTexture = OB
              }
            },
            metadata: OB
          }, wG, EG), (0, YB.h)(null, null, zO, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_emissiveTexture" in BB,
              get: BB => BB._emissiveTexture,
              set: (BB, OB) => {
                BB._emissiveTexture = OB
              }
            },
            metadata: OB
          }, aG, eG), (0, YB.h)(null, null, pO, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_specularTexture" in BB,
              get: BB => BB._specularTexture,
              set: (BB, OB) => {
                BB._specularTexture = OB
              }
            },
            metadata: OB
          }, CG, HG), (0, YB.h)(null, null, ZO, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_bumpTexture" in BB,
              get: BB => BB._bumpTexture,
              set: (BB, OB) => {
                BB._bumpTexture = OB
              }
            },
            metadata: OB
          }, xG, tG), (0, YB.h)(null, null, RO, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_lightmapTexture" in BB,
              get: BB => BB._lightmapTexture,
              set: (BB, OB) => {
                BB._lightmapTexture = OB
              }
            },
            metadata: OB
          }, GY, YY), (0, YB.h)(null, null, AO, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_refractionTexture" in BB,
              get: BB => BB._refractionTexture,
              set: (BB, OB) => {
                BB._refractionTexture = OB
              }
            },
            metadata: OB
          }, oY, jY), (0, YB.h)(null, null, SO, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "ambientColor" in BB,
              get: BB => BB.ambientColor,
              set: (BB, OB) => {
                BB.ambientColor = OB
              }
            },
            metadata: OB
          }, MY, PY), (0, YB.h)(null, null, nO, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "diffuseColor" in BB,
              get: BB => BB.diffuseColor,
              set: (BB, OB) => {
                BB.diffuseColor = OB
              }
            },
            metadata: OB
          }, zY, lY), (0, YB.h)(null, null, UO, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularColor" in BB,
              get: BB => BB.specularColor,
              set: (BB, OB) => {
                BB.specularColor = OB
              }
            },
            metadata: OB
          }, pY, qY), (0, YB.h)(null, null, fO, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissiveColor" in BB,
              get: BB => BB.emissiveColor,
              set: (BB, OB) => {
                BB.emissiveColor = OB
              }
            },
            metadata: OB
          }, ZY, NY), (0, YB.h)(null, null, kO, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularPower" in BB,
              get: BB => BB.specularPower,
              set: (BB, OB) => {
                BB.specularPower = OB
              }
            },
            metadata: OB
          }, RY, WY), (0, YB.h)(null, null, dO, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useAlphaFromDiffuseTexture" in BB,
              get: BB => BB._useAlphaFromDiffuseTexture,
              set: (BB, OB) => {
                BB._useAlphaFromDiffuseTexture = OB
              }
            },
            metadata: OB
          }, AY, VY), (0, YB.h)(null, null, uO, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useEmissiveAsIllumination" in BB,
              get: BB => BB._useEmissiveAsIllumination,
              set: (BB, OB) => {
                BB._useEmissiveAsIllumination = OB
              }
            },
            metadata: OB
          }, UY, fY), (0, YB.h)(null, null, IO, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: BB => "_linkEmissiveWithDiffuse" in BB,
              get: BB => BB._linkEmissiveWithDiffuse,
              set: (BB, OB) => {
                BB._linkEmissiveWithDiffuse = OB
              }
            },
            metadata: OB
          }, KY, uY), (0, YB.h)(null, null, iO, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useSpecularOverAlpha" in BB,
              get: BB => BB._useSpecularOverAlpha,
              set: (BB, OB) => {
                BB._useSpecularOverAlpha = OB
              }
            },
            metadata: OB
          }, FY, iY), (0, YB.h)(null, null, gO, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useReflectionOverAlpha" in BB,
              get: BB => BB._useReflectionOverAlpha,
              set: (BB, OB) => {
                BB._useReflectionOverAlpha = OB
              }
            },
            metadata: OB
          }, rY, XY), (0, YB.h)(null, null, XO, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "_disableLighting" in BB,
              get: BB => BB._disableLighting,
              set: (BB, OB) => {
                BB._disableLighting = OB
              }
            },
            metadata: OB
          }, cY, hY), (0, YB.h)(null, null, EO, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useObjectSpaceNormalMap" in BB,
              get: BB => BB._useObjectSpaceNormalMap,
              set: (BB, OB) => {
                BB._useObjectSpaceNormalMap = OB
              }
            },
            metadata: OB
          }, TY, bY), (0, YB.h)(null, null, hO, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useParallax" in BB,
              get: BB => BB._useParallax,
              set: (BB, OB) => {
                BB._useParallax = OB
              }
            },
            metadata: OB
          }, vY, sY), (0, YB.h)(null, null, eO, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useParallaxOcclusion" in BB,
              get: BB => BB._useParallaxOcclusion,
              set: (BB, OB) => {
                BB._useParallaxOcclusion = OB
              }
            },
            metadata: OB
          }, BD, OD), (0, YB.h)(null, null, bO, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: BB => "parallaxScaleBias" in BB,
              get: BB => BB.parallaxScaleBias,
              set: (BB, OB) => {
                BB.parallaxScaleBias = OB
              }
            },
            metadata: OB
          }, DD, QD), (0, YB.h)(null, null, CO, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "_roughness" in BB,
              get: BB => BB._roughness,
              set: (BB, OB) => {
                BB._roughness = OB
              }
            },
            metadata: OB
          }, oD, jD), (0, YB.h)(null, null, vO, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: BB => "indexOfRefraction" in BB,
              get: BB => BB.indexOfRefraction,
              set: (BB, OB) => {
                BB.indexOfRefraction = OB
              }
            },
            metadata: OB
          }, MD, PD), (0, YB.h)(null, null, sO, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertRefractionY" in BB,
              get: BB => BB.invertRefractionY,
              set: (BB, OB) => {
                BB.invertRefractionY = OB
              }
            },
            metadata: OB
          }, zD, lD), (0, YB.h)(null, null, xO, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: BB => "alphaCutOff" in BB,
              get: BB => BB.alphaCutOff,
              set: (BB, OB) => {
                BB.alphaCutOff = OB
              }
            },
            metadata: OB
          }, pD, qD), (0, YB.h)(null, null, tO, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useLightmapAsShadowmap" in BB,
              get: BB => BB._useLightmapAsShadowmap,
              set: (BB, OB) => {
                BB._useLightmapAsShadowmap = OB
              }
            },
            metadata: OB
          }, ZD, ND), (0, YB.h)(null, null, OG, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_diffuseFresnelParameters" in BB,
              get: BB => BB._diffuseFresnelParameters,
              set: (BB, OB) => {
                BB._diffuseFresnelParameters = OB
              }
            },
            metadata: OB
          }, AD, VD), (0, YB.h)(null, null, YG, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_opacityFresnelParameters" in BB,
              get: BB => BB._opacityFresnelParameters,
              set: (BB, OB) => {
                BB._opacityFresnelParameters = OB
              }
            },
            metadata: OB
          }, UD, fD), (0, YB.h)(null, null, QG, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_reflectionFresnelParameters" in BB,
              get: BB => BB._reflectionFresnelParameters,
              set: (BB, OB) => {
                BB._reflectionFresnelParameters = OB
              }
            },
            metadata: OB
          }, KD, uD), (0, YB.h)(null, null, jG, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_refractionFresnelParameters" in BB,
              get: BB => BB._refractionFresnelParameters,
              set: (BB, OB) => {
                BB._refractionFresnelParameters = OB
              }
            },
            metadata: OB
          }, FD, iD), (0, YB.h)(null, null, JG, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_emissiveFresnelParameters" in BB,
              get: BB => BB._emissiveFresnelParameters,
              set: (BB, OB) => {
                BB._emissiveFresnelParameters = OB
              }
            },
            metadata: OB
          }, rD, XD), (0, YB.h)(null, null, PG, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useReflectionFresnelFromSpecular" in BB,
              get: BB => BB._useReflectionFresnelFromSpecular,
              set: (BB, OB) => {
                BB._useReflectionFresnelFromSpecular = OB
              }
            },
            metadata: OB
          }, cD, hD), (0, YB.h)(null, null, lG, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useGlossinessFromSpecularMapAlpha" in BB,
              get: BB => BB._useGlossinessFromSpecularMapAlpha,
              set: (BB, OB) => {
                BB._useGlossinessFromSpecularMapAlpha = OB
              }
            },
            metadata: OB
          }, TD, bD), (0, YB.h)(null, null, qG, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: BB => "_maxSimultaneousLights" in BB,
              get: BB => BB._maxSimultaneousLights,
              set: (BB, OB) => {
                BB._maxSimultaneousLights = OB
              }
            },
            metadata: OB
          }, vD, sD), (0, YB.h)(null, null, NG, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: BB => "_invertNormalMapX" in BB,
              get: BB => BB._invertNormalMapX,
              set: (BB, OB) => {
                BB._invertNormalMapX = OB
              }
            },
            metadata: OB
          }, BQ, OQ), (0, YB.h)(null, null, WG, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: BB => "_invertNormalMapY" in BB,
              get: BB => BB._invertNormalMapY,
              set: (BB, OB) => {
                BB._invertNormalMapY = OB
              }
            },
            metadata: OB
          }, DQ, QQ), (0, YB.h)(null, null, VG, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "_twoSidedLighting" in BB,
              get: BB => BB._twoSidedLighting,
              set: (BB, OB) => {
                BB._twoSidedLighting = OB
              }
            },
            metadata: OB
          }, yQ, JQ), (0, YB.h)(null, null, nG, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "_applyDecalMapAfterDetailMap" in BB,
              get: BB => BB._applyDecalMapAfterDetailMap,
              set: (BB, OB) => {
                BB._applyDecalMapAfterDetailMap = OB
              }
            },
            metadata: OB
          }, zQ, lQ), OB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: OB
          })
        })(), BB.ForceGLSL = !1, BB._ShaderLoader = new SB.d((() => [Promise.all([GB.e(626), GB.e(625)]).then((() => GB(45016))), Promise.all([GB.e(631), GB.e(627), GB.e(640), GB.e(630)]).then((() => GB(45220)))]), (() => [Promise.all([GB.e(647), GB.e(642)]).then((() => GB(45372))), Promise.all([GB.e(648), GB.e(658), GB.e(644)]).then((() => GB(45565)))])), BB
      })(),
      LB = !1;

    function gB() {
      LB || (LB = !0, (0, PB.f)(), (0, dB.f)("BABYLON.StandardMaterial", iB), oB.e.DefaultMaterialFactory = BB => new iB("default material", BB))
    }
    Object.getOwnPropertyDescriptor(iB.prototype, "decalMap") || Object.defineProperty(iB.prototype, "decalMap", (0, KB.e)("StandardMaterial", "decalMap"))
  },
  41385: (BB, OB, GB) => {
    function YB(BB) {
      return class extends BB {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    GB.d(OB, {
      e: () => YB
    })
  },
  41372: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB
    });
    class YB {
      constructor(BB, OB) {
        this._webGL = {
          load: BB,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: OB,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(BB) {
        const OB = 1 === BB ? this._webGPU : this._webGL;
        return OB.loaded ? void 0 : async () => {
          await this._loadAsync(OB)
        }
      }
      async _loadAsync(BB) {
        if (BB.loaded) return;
        let OB = BB.loadPromise;
        const GB = null === OB;
        GB && (OB = Promise.all(BB.load()), BB.loadPromise = OB);
        let YB = !1;
        try {
          await OB, YB = !0
        } finally {
          GB && this._completeLoad(BB, YB)
        }
      }
      _completeLoad(BB, OB) {
        BB.loaded = OB, BB.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);