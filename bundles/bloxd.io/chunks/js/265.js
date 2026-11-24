export const id = 265;
export const ids = [265];
export const modules = {
  40443: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JB
    });
    var TB = ZB(40071);

    function JB(BB) {
      return class extends BB {
        constructor() {
          super(...arguments);
          const BB = new.target;
          if (!BB[Symbol.metadata]) {
            const IB = Object.getPrototypeOf(BB)?.[Symbol.metadata];
            BB[Symbol.metadata] = IB ? Object.create(IB) : {}
          }
          const IB = (0, TB.c)(BB[Symbol.metadata]);
          IB._imageProcessingConfiguration || (IB._imageProcessingConfiguration = {
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
          BB !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !BB && this.JR ? this._imageProcessingConfiguration = this.JR().imageProcessingConfiguration : BB && (this._imageProcessingConfiguration = BB), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
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
  40333: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB,
      c: () => JB
    });
    var TB = ZB(40335);

    function JB(BB) {
      return class extends BB {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class oB extends TB.e {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  40400: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => hB
    });
    var TB = ZB(40061),
      JB = ZB(40339),
      oB = ZB(40065),
      GB = ZB(40383),
      vB = ZB(40335),
      kB = ZB(40408),
      cB = ZB(40371);
    class nB extends vB.e {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let hB = (() => {
      var BB, IB, ZB, vB;
      let hB, zB, FB, NB, gB, qB, yB = kB.e,
        UB = [],
        WB = [],
        dB = [],
        CB = [],
        QB = [],
        sB = [],
        wB = [],
        OB = [],
        YB = [],
        iB = [],
        pB = [],
        aB = [];
      return BB = class extends yB {
        get texture() {
          return (0, TB.b)(this, IB, "f")
        }
        set texture(BB) {
          (0, TB.f)(this, IB, BB, "f")
        }
        get normalBlendMethod() {
          return (0, TB.b)(this, ZB, "f")
        }
        set normalBlendMethod(BB) {
          (0, TB.f)(this, ZB, BB, "f")
        }
        get isEnabled() {
          return (0, TB.b)(this, vB, "f")
        }
        set isEnabled(BB) {
          (0, TB.f)(this, vB, BB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(BB) {
          let oB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(BB, "DetailMap", 140, new nB, oB), this._texture = null, IB.set(this, (0, TB.l)(this, UB, void 0)), this.diffuseBlendLevel = ((0, TB.l)(this, WB), (0, TB.l)(this, dB, 1)), this.roughnessBlendLevel = ((0, TB.l)(this, CB), (0, TB.l)(this, QB, 1)), this.bumpLevel = ((0, TB.l)(this, sB), (0, TB.l)(this, wB, 1)), this._normalBlendMethod = ((0, TB.l)(this, OB), JB.e.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), ZB.set(this, (0, TB.l)(this, YB, void 0)), this._isEnabled = ((0, TB.l)(this, iB), !1), vB.set(this, (0, TB.l)(this, pB, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, TB.l)(this, aB), this._internalMarkAllSubMeshesAsTexturesDirty = BB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(BB, IB, ZB) {
          return !this._isEnabled || !(BB._areTexturesDirty && IB.texturesEnabled && ZB.getCaps().standardDerivatives && this._texture && GB.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(BB, IB) {
          if (this._isEnabled) {
            BB.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const ZB = IB.PN();
            BB._areTexturesDirty && (ZB.getCaps().standardDerivatives && this._texture && GB.e.DetailTextureEnabled && this._isEnabled ? ((0, cB.ab)(this._texture, BB, "DETAIL"), BB.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : BB.DETAIL = !1)
          } else BB.DETAIL = !1
        }
        bindForSubMesh(BB, IB) {
          if (!this._isEnabled) return;
          const ZB = this._material.isFrozen;
          BB.useUbo && ZB && BB.isSync || this._texture && GB.e.DetailTextureEnabled && (BB.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, cB.y)(this._texture, BB, "detail")), IB.texturesEnabled && this._texture && GB.e.DetailTextureEnabled && BB.setTexture("detailSampler", this._texture)
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
      }, IB = new WeakMap, ZB = new WeakMap, vB = new WeakMap, (() => {
        const IB = "function" === typeof Symbol && Symbol.metadata ? Object.create(yB[Symbol.metadata] ?? null) : void 0;
        hB = [(0, oB.v)("detailTexture"), (0, oB.e)("_markAllSubMeshesAsTexturesDirty")], zB = [(0, oB.C)()], FB = [(0, oB.C)()], NB = [(0, oB.C)()], gB = [(0, oB.C)(), (0, oB.e)("_markAllSubMeshesAsTexturesDirty")], qB = [(0, oB.C)(), (0, oB.e)("_markAllSubMeshesAsTexturesDirty")], (0, TB.j)(BB, null, hB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, IB) => {
              BB.texture = IB
            }
          },
          metadata: IB
        }, UB, WB), (0, TB.j)(BB, null, gB, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: BB => "normalBlendMethod" in BB,
            get: BB => BB.normalBlendMethod,
            set: (BB, IB) => {
              BB.normalBlendMethod = IB
            }
          },
          metadata: IB
        }, YB, iB), (0, TB.j)(BB, null, qB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, IB) => {
              BB.isEnabled = IB
            }
          },
          metadata: IB
        }, pB, aB), (0, TB.j)(null, null, zB, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: BB => "diffuseBlendLevel" in BB,
            get: BB => BB.diffuseBlendLevel,
            set: (BB, IB) => {
              BB.diffuseBlendLevel = IB
            }
          },
          metadata: IB
        }, dB, CB), (0, TB.j)(null, null, FB, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: BB => "roughnessBlendLevel" in BB,
            get: BB => BB.roughnessBlendLevel,
            set: (BB, IB) => {
              BB.roughnessBlendLevel = IB
            }
          },
          metadata: IB
        }, QB, sB), (0, TB.j)(null, null, NB, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: BB => "bumpLevel" in BB,
            get: BB => BB.bumpLevel,
            set: (BB, IB) => {
              BB.bumpLevel = IB
            }
          },
          metadata: IB
        }, wB, OB), IB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: IB
        })
      })(), BB
    })()
  },
  40335: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB
    });
    class TB {
      constructor(BB) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = BB, BB)
          for (const IB in BB) Object.prototype.hasOwnProperty.call(BB, IB) && this._setDefaultValue(IB)
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
        for (let IB = 0; IB < this._keys.length; IB++) {
          const ZB = this._keys[IB];
          if (this[ZB] !== BB[ZB]) return !1
        }
        return !0
      }
      cloneTo(BB) {
        this._keys.length !== BB._keys.length && (BB._keys = this._keys.slice(0));
        for (let IB = 0; IB < this._keys.length; IB++) {
          const ZB = this._keys[IB];
          BB[ZB] = this[ZB]
        }
      }
      reset() {
        for (const BB of this._keys) this._setDefaultValue(BB)
      }
      _setDefaultValue(BB) {
        const IB = this._externalProperties?.[BB]?.type ?? typeof this[BB],
          ZB = this._externalProperties?.[BB]?.default;
        switch (IB) {
          case "number":
            this[BB] = ZB ?? 0;
            break;
          case "string":
            this[BB] = ZB ?? "";
            break;
          default:
            this[BB] = ZB ?? !1
        }
      }
      toString() {
        let BB = "";
        for (let IB = 0; IB < this._keys.length; IB++) {
          const ZB = this._keys[IB],
            TB = this[ZB];
          switch (typeof TB) {
            case "number":
            case "string":
              BB += "#define " + ZB + " " + TB + "\n";
              break;
            default:
              TB && (BB += "#define " + ZB + "\n")
          }
        }
        return BB
      }
    }
  },
  40431: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => vB,
      e: () => GB,
      h: () => oB
    });
    var TB, JB = ZB(37120);

    function oB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const TB = IB(BB);
      if (!Number.isInteger(TB) || TB < 0 || TB > ZB) throw new Error(`Invalid geometry object ID ${TB} for mesh "${BB.name}". Object IDs must be integers between 0 and 0x${ZB.toString(16).toUpperCase()}.`);
      return TB
    }

    function GB(BB, IB) {
      const ZB = IB(BB);
      if (!Number.isInteger(ZB) || ZB < 0 || ZB > 255 || 0 !== ZB && 0 === (63 & ZB)) throw new Error(`Invalid geometry mesh-blending tag ${ZB} for mesh "${BB.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return ZB
    }! function(BB) {
      BB[BB.Zero = 0] = "Zero", BB[BB.One = 1] = "One", BB[BB.MaxViewZ = 2] = "MaxViewZ", BB[BB.NoClear = 3] = "NoClear"
    }(TB || (TB = {}));
    class vB {
      static CreateConfiguration(BB) {
        return vB._Configurations[BB] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: JB.b.Zero(),
          currentViewProjection: JB.b.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, vB._Configurations[BB]
      }
      static DeleteConfiguration(BB) {
        delete vB._Configurations[BB]
      }
      static GetConfiguration(BB) {
        return vB._Configurations[BB]
      }
      static _PrepareConfiguration(BB, IB, ZB) {
        const TB = vB._Configurations[BB];
        TB._attachments = IB, TB._colorAttachments = ZB, TB._mrtCount = IB.length;
        let JB = "#define PREPASS\n";
        for (const oB of vB.GeometryTextureDescriptions) {
          const BB = TB.defines[oB.defineIndex];
          void 0 !== BB && (JB += `#define ${oB.define}\n#define ${oB.defineIndex} ${BB}\n`)
        }
        TB.objectIdIsRedFormat && (JB += "#define PREPASS_OBJECT_ID_R8\n"), TB._defines = JB + `#define SCENE_MRT_COUNT ${IB.length}\n`
      }
      static _PrepareStringDefines(BB, IB) {
        const ZB = vB._Configurations[BB];
        return !!ZB?._defines && (IB.push(ZB._defines), !0)
      }
      static _BindAttachmentsForEffect(BB, IB) {
        const ZB = vB._Configurations[BB.currentRenderPassId];
        return !ZB?._attachments || (BB.bindAttachments(IB._multiTarget ? ZB._attachments : ZB._colorAttachments), IB._multiTarget || void 0 !== ZB.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(BB) {
        const IB = vB._Configurations[BB.currentRenderPassId];
        IB?._colorAttachments && BB.bindAttachments(IB._colorAttachments)
      }
      static _BindColorAttachments(BB) {
        const IB = vB._Configurations[BB.currentRenderPassId];
        return !IB?._colorAttachments || (BB.bindAttachments(IB._colorAttachments), void 0 !== IB.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(BB) {
        const IB = vB._Configurations[BB.currentRenderPassId];
        return !IB?._colorAttachments || void 0 !== IB.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(BB, IB) {
        const ZB = vB._Configurations[BB.currentRenderPassId];
        if (!ZB) return;
        const TB = BB.getAlphaMode(),
          JB = void 0 === ZB.defines.PREPASS_COLOR_INDEX || 2 === TB || 1 === TB || 17 === TB;
        IB.setFloat("geometryZeroAlphaDiscard", JB ? 1 : 0)
      }
      static AddUniformsAndSamplers(BB, IB) {
        BB.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(BB, IB) {
        for (const ZB of IB)
          if (ZB.EW)
            for (const IB of ZB.EW) IB._removeDrawWrapper(BB)
      }
      static PrepareDefines(BB, IB, ZB) {
        if (!ZB._arePrePassDirty) return;
        const TB = vB._Configurations[BB];
        if (!TB) return;
        ZB.PREPASS = !0;
        let JB = 0;
        for (let oB = 0; oB < vB.GeometryTextureDescriptions.length; oB++) {
          const BB = vB.GeometryTextureDescriptions[oB],
            IB = BB.define,
            GB = BB.defineIndex,
            kB = TB.defines[GB];
          void 0 !== kB ? (ZB[IB] = !0, ZB[GB] = kB, JB++) : (ZB[IB] = !1, delete ZB[GB])
        }
        ZB.PREPASS_OBJECT_ID_R8 = TB.objectIdIsRedFormat, ZB.SCENE_MRT_COUNT = TB._mrtCount ?? JB, ZB.BONES_VELOCITY_ENABLED = IB.useBones && IB.computeBonesUsingShaders && IB.skeleton && !IB.skeleton.isUsingTextureForMatrices && -1 === TB.excludedSkinnedMesh.indexOf(IB)
      }
      static Bind(BB, IB, ZB, TB, JB) {
        const kB = vB._Configurations[BB];
        if (!kB) return;
        const cB = ZB.JR(),
          nB = cB.PN();
        if (kB.reverseCulling && nB.setStateCullFaceType(cB._mirroredCameraPosition ? JB.cullBackFaces : !JB.cullBackFaces), void 0 !== kB.defines.PREPASS_OBJECT_ID_INDEX) {
          const BB = kB.objectIdIsRedFormat ? 255 : 16777215;
          let TB = ZB.uniqueId;
          if (kB.objectIdProvider) TB = oB(ZB, kB.objectIdProvider, BB);
          else if (TB > BB) throw new Error(`Invalid geometry object ID ${TB} for mesh "${ZB.name}". Object IDs must be integers between 0 and 0x${BB.toString(16).toUpperCase()}.`);
          IB.setFloat("objectId", TB)
        }
        if (void 0 !== kB.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const BB = kB.meshBlendTagProvider ? GB(ZB, kB.meshBlendTagProvider) : ZB.meshBlendingTag;
          IB.setInt("meshBlendTag", BB)
        }
        if (void 0 !== kB.defines.PREPASS_VELOCITY_INDEX || void 0 !== kB.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const BB = kB._currentWorldMatrices ?? (kB._currentWorldMatrices = {}),
            JB = kB._worldMatrixFrameIds ?? (kB._worldMatrixFrameIds = {});
          if (BB[ZB.uniqueId] || (BB[ZB.uniqueId] = TB.clone(), kB.previousWorldMatrices[ZB.uniqueId] = TB.clone()), JB[ZB.uniqueId] !== nB.frameId && (kB.previousWorldMatrices[ZB.uniqueId].TY(BB[ZB.uniqueId]), JB[ZB.uniqueId] = nB.frameId), BB[ZB.uniqueId].TY(TB), -1 === kB.lastUpdateFrameId ? (kB.lastUpdateFrameId = nB.frameId, kB.previousViewProjection.TY(cB.getTransformMatrix()), kB.currentViewProjection.TY(cB.getTransformMatrix())) : kB.currentViewProjection.updateFlag !== cB.getTransformMatrix().updateFlag ? (kB.lastUpdateFrameId = nB.frameId, kB.previousViewProjection.TY(kB.currentViewProjection), kB.currentViewProjection.TY(cB.getTransformMatrix())) : kB.lastUpdateFrameId !== nB.frameId && (kB.lastUpdateFrameId = nB.frameId, kB.previousViewProjection.TY(kB.currentViewProjection)), IB.setMatrix("previousWorld", kB.previousWorldMatrices[ZB.uniqueId]), IB.setMatrix("previousViewProjection", kB.previousViewProjection), ZB.useBones && ZB.computeBonesUsingShaders && ZB.skeleton) {
            const BB = ZB.skeleton;
            if (!BB.isUsingTextureForMatrices || -1 === IB.getUniformIndex("boneTextureInfo")) {
              const TB = BB.getTransformMatrices(ZB);
              TB && (kB.previousBones[ZB.uniqueId] || (kB.previousBones[ZB.uniqueId] = TB.slice()), IB.setMatrices("mPreviousBones", kB.previousBones[ZB.uniqueId]), kB.previousBones[ZB.uniqueId].set(TB))
            }
          }
        }
      }
    }
    vB.GeometryTextureDescriptions = [{
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
    }], vB._Configurations = {}
  },
  40408: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => zB,
      h: () => NB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(39939),
      GB = ZB(39905);
    const vB = new RegExp("^([gimus]+)!");
    class kB {
      constructor(BB) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = BB, this._scene = BB.JR(), this._engine = this._scene.PN()
      }
      _addPlugin(BB) {
        for (let TB = 0; TB < this._plugins.length; ++TB)
          if (this._plugins[TB].name === BB.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !BB.isCompatible(this._material.shaderLanguage)) throw `The plugin "${BB.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const IB = BB.getClassName();
        kB._MaterialPluginClassToMainDefine[IB] || (kB._MaterialPluginClassToMainDefine[IB] = "MATERIALPLUGIN_" + ++kB._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (BB, IB) => this._handlePluginEvent(BB, IB), this._plugins.push(BB), this._plugins.sort(((BB, IB) => BB.priority - IB.priority)), this._codeInjectionPoints = {};
        const ZB = {};
        ZB[kB._MaterialPluginClassToMainDefine[IB]] = {
          type: "boolean",
          default: !0
        };
        for (const TB of this._plugins) TB.collectDefines(ZB), this._collectPointNames("vertex", TB.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", TB.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = ZB, !0
      }
      _activatePlugin(BB) {
        -1 === this._activePlugins.indexOf(BB) && (this._activePlugins.push(BB), this._activePlugins.sort(((BB, IB) => BB.priority - IB.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), BB.registerForExtraEvents && (this._activePluginsForExtraEvents.push(BB), this._activePluginsForExtraEvents.sort(((BB, IB) => BB.priority - IB.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(BB) {
        for (let IB = 0; IB < this._plugins.length; ++IB)
          if (this._plugins[IB].name === BB) return this._plugins[IB];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(BB) {
        let IB = !0;
        for (const ZB of this._activePlugins) IB = IB && ZB.isReadyForSubMesh(BB.defines, this._scene, this._engine, BB.subMesh);
        BB.isReadyForSubMesh = IB
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(BB) {
        for (const IB of this._activePlugins) IB.prepareDefinesBeforeAttributes(BB.defines, this._scene, BB.mesh)
      }
      _handlePluginEventPrepareDefines(BB) {
        for (const IB of this._activePlugins) IB.prepareDefines(BB.defines, this._scene, BB.mesh)
      }
      _handlePluginEventHardBindForSubMesh(BB) {
        for (const IB of this._activePluginsForExtraEvents) IB.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, BB.subMesh)
      }
      _handlePluginEventBindForSubMesh(BB) {
        for (const IB of this._activePlugins) IB.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, BB.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(BB) {
        let IB = !1;
        for (const ZB of this._activePluginsForExtraEvents)
          if (IB = ZB.hasRenderTargetTextures(), IB) break;
        BB.hasRenderTargetTextures = IB
      }
      _handlePluginEventFillRenderTargetTextures(BB) {
        for (const IB of this._activePluginsForExtraEvents) IB.fillRenderTargetTextures(BB.renderTargets)
      }
      _handlePluginEvent(BB, IB) {
        switch (BB) {
          case 512: {
            const BB = IB;
            for (const IB of this._activePlugins) IB.getActiveTextures(BB.activeTextures);
            break
          }
          case 256: {
            const BB = IB;
            for (const IB of this._activePlugins) IB.getAnimatables(BB.animatables);
            break
          }
          case 1024: {
            const BB = IB;
            let ZB = !1;
            for (const IB of this._activePlugins)
              if (ZB = IB.hasTexture(BB.texture), ZB) break;
            BB.hasTexture = ZB;
            break
          }
          case 2: {
            const BB = IB;
            for (const IB of this._plugins) IB.dispose(BB.forceDisposeTextures);
            break
          }
          case 4:
            IB.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const BB = IB;
            for (const IB of this._activePlugins) BB.fallbackRank = IB.addFallbacks(BB.defines, BB.fallbacks, BB.fallbackRank), IB.getAttributes(BB.attributes, this._scene, BB.mesh);
            this._uniformList.length > 0 && BB.uniforms.push(...this._uniformList), this._samplerList.length > 0 && BB.samplers.push(...this._samplerList), this._uboList.length > 0 && BB.uniformBuffersNames.push(...this._uboList), BB.customCode = this._injectCustomCode(BB, BB.customCode);
            break
          }
          case 8: {
            const BB = IB;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const ZB = 1 === this._material.shaderLanguage;
            for (const IB of this._plugins) {
              const TB = IB.getUniforms(this._material.shaderLanguage);
              if (TB) {
                if (TB.ubo)
                  for (const IB of TB.ubo) {
                    if (IB.size && IB.type) {
                      const TB = IB.arraySize ?? 0;
                      if (BB.ubo.addUniform(IB.name, IB.size, TB), ZB) {
                        let BB;
                        switch (IB.type) {
                          case "mat4":
                            BB = "mat4x4f";
                            break;
                          case "float":
                            BB = "f32";
                            break;
                          default:
                            BB = `${IB.type}f`
                        }
                        this._uboDeclaration += TB > 0 ? `uniform ${IB.name}: array<${BB}, ${TB}>;\n` : `uniform ${IB.name}: ${BB};\n`
                      } else this._uboDeclaration += `${IB.type} ${IB.name}${TB>0?`[${TB}]`:""};\n`
                    }
                    this._uniformList.push(IB.name)
                  }
                TB.vertex && (this._vertexDeclaration += TB.vertex + "\n"), TB.fragment && (this._fragmentDeclaration += TB.fragment + "\n"), TB.externalUniforms && this._uniformList.push(...TB.externalUniforms)
              }
              IB.getSamplers(this._samplerList), IB.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(BB, IB) {
        if (IB)
          for (const ZB in IB) this._codeInjectionPoints[BB] || (this._codeInjectionPoints[BB] = {}), this._codeInjectionPoints[BB][ZB] = !0
      }
      _injectCustomCode(BB, IB) {
        return (ZB, TB) => {
          IB && (TB = IB(ZB, TB)), this._uboDeclaration && (TB = TB.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (TB = TB.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (TB = TB.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const JB = this._codeInjectionPoints?.[ZB];
          if (!JB) return TB;
          let kB = null;
          for (let IB in JB) {
            let JB = "";
            for (const TB of this._activePlugins) {
              const vB = this._material.shaderLanguage;
              let cB = TB.getCustomCode(ZB, vB)?.[IB];
              cB && (TB.resolveIncludes && (null === kB && (kB = {
                defines: [],
                indexParameters: BB.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: GB.c.GetShadersRepository(vB),
                includesShadersStore: GB.c.GetIncludesShadersStore(vB),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                iTB: this._engine.iTB,
                processCodeAfterIncludes: void 0
              }), kB.isFragment = "fragment" === ZB, (0, oB.j)(cB, kB, (BB => cB = BB))), JB += cB + "\n")
            }
            if (JB.length > 0)
              if ("!" === IB.charAt(0)) {
                IB = IB.substring(1);
                let BB = "g";
                if ("!" === IB.charAt(0)) BB = "", IB = IB.substring(1);
                else {
                  const ZB = vB.exec(IB);
                  ZB && ZB.length >= 2 && (BB = ZB[1], IB = IB.substring(BB.length + 1))
                }
                BB.indexOf("g") < 0 && (BB += "g");
                const ZB = new RegExp(IB, BB);
                let oB = ZB.exec(TB);
                for (; null !== oB;) {
                  const {
                    index: BB
                  } = oB, IB = cB(JB, oB);
                  TB = TB.substring(0, BB) + IB + TB.substring(BB + oB[0].length), ZB.lastIndex = BB + IB.length, oB = ZB.exec(TB)
                }
              } else {
                const BB = "#define " + IB;
                TB = TB.replace(BB, "\n" + JB + "\n" + BB)
              }
          }
          return TB
        }
      }
    }
    kB._MaterialPluginClassToMainDefine = {}, kB._MaterialPluginCounter = 0;

    function cB(BB, IB) {
      return BB.replace(/\$(\d+)/g, ((BB, ZB) => {
        const TB = Number(ZB);
        return TB < IB.length ? IB[TB] : ""
      }))
    }
    var nB = ZB(40085),
      hB = ZB(37170);
    let zB = (() => {
        var BB;
        let IB, ZB, oB, GB, vB = [],
          cB = [],
          hB = [],
          zB = [],
          FB = [],
          NB = [],
          gB = [],
          qB = [];
        return BB = class {
          isCompatible(BB) {
            return 0 === BB
          }
          _enable(BB) {
            BB && this._pluginManager._activatePlugin(this)
          }
          constructor(BB, IB, ZB, JB) {
            let oB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              GB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              nB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, TB.l)(this, vB, void 0), this.priority = ((0, TB.l)(this, cB), (0, TB.l)(this, hB, 500)), this.resolveIncludes = ((0, TB.l)(this, zB), (0, TB.l)(this, FB, !1)), this.registerForExtraEvents = ((0, TB.l)(this, NB), (0, TB.l)(this, gB, !1)), this.doNotSerialize = ((0, TB.l)(this, qB), !1), this._material = BB, this.name = IB, this.priority = ZB, this.resolveIncludes = nB, BB.pluginManager || (BB.pluginManager = new kB(BB), BB.oR.add((() => {
              BB.pluginManager = void 0
            }))), this._pluginDefineNames = JB, this._pluginManager = BB.pluginManager, oB && this._pluginManager._addPlugin(this), GB && this._enable(!0), this.markAllDefinesAsDirty = BB._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(BB, IB, ZB, TB) {
            return !0
          }
          hardBindForSubMesh(BB, IB, ZB, TB) {}
          bindForSubMesh(BB, IB, ZB, TB) {}
          dispose(BB) {}
          getCustomCode(BB) {
            return null
          }
          collectDefines(BB) {
            if (this._pluginDefineNames)
              for (const IB of Object.keys(this._pluginDefineNames)) {
                if ("_" === IB[0]) continue;
                const ZB = typeof this._pluginDefineNames[IB];
                BB[IB] = {
                  type: "number" === ZB ? "number" : "string" === ZB ? "string" : "boolean" === ZB ? "boolean" : "object",
                  default: this._pluginDefineNames[IB]
                }
              }
          }
          prepareDefinesBeforeAttributes(BB, IB, ZB) {}
          prepareDefines(BB, IB, ZB) {}
          hasTexture(BB) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(BB) {}
          getActiveTextures(BB) {}
          getAnimatables(BB) {}
          addFallbacks(BB, IB, ZB) {
            return ZB
          }
          getSamplers(BB) {}
          getAttributes(BB, IB, ZB) {}
          getUniformBuffersNames(BB) {}
          getUniforms() {
            return {}
          }
          copyTo(BB) {
            nB.b.Clone((() => BB), this)
          }
          serialize() {
            return nB.b.Serialize(this)
          }
          parse(BB, IB, ZB) {
            nB.b.Parse((() => this), BB, IB, ZB)
          }
        }, (() => {
          const kB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          IB = [(0, JB.C)()], ZB = [(0, JB.C)()], oB = [(0, JB.C)()], GB = [(0, JB.C)()], (0, TB.j)(null, null, IB, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name,
              set: (BB, IB) => {
                BB.name = IB
              }
            },
            metadata: kB
          }, vB, cB), (0, TB.j)(null, null, ZB, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: BB => "priority" in BB,
              get: BB => BB.priority,
              set: (BB, IB) => {
                BB.priority = IB
              }
            },
            metadata: kB
          }, hB, zB), (0, TB.j)(null, null, oB, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: BB => "resolveIncludes" in BB,
              get: BB => BB.resolveIncludes,
              set: (BB, IB) => {
                BB.resolveIncludes = IB
              }
            },
            metadata: kB
          }, FB, NB), (0, TB.j)(null, null, GB, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: BB => "registerForExtraEvents" in BB,
              get: BB => BB.registerForExtraEvents,
              set: (BB, IB) => {
                BB.registerForExtraEvents = IB
              }
            },
            metadata: kB
          }, gB, qB), kB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: kB
          })
        })(), BB
      })(),
      FB = !1;

    function NB() {
      FB || (FB = !0, (0, hB.i)("BABYLON.MaterialPluginBase", zB))
    }
  },
  40330: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB
    });
    class TB {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(BB) {
        BB.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(BB) {}
      bindForSubMesh(BB, IB, ZB, TB, JB) {
        if (IB.prePassRenderer && IB.prePassRenderer.enabled && IB.prePassRenderer.currentRTisSceneRT && (-1 !== IB.prePassRenderer.getIndex(2) || -1 !== IB.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[ZB.uniqueId] || (this.previousWorldMatrices[ZB.uniqueId] = TB.clone()), this.previousViewProjection || (this.previousViewProjection = IB.getTransformMatrix().clone(), this.currentViewProjection = IB.getTransformMatrix().clone());
          const JB = IB.PN();
          this.currentViewProjection.updateFlag !== IB.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = JB.frameId, this.previousViewProjection.TY(this.currentViewProjection), this.currentViewProjection.TY(IB.getTransformMatrix())) : this._lastUpdateFrameId !== JB.frameId && (this._lastUpdateFrameId = JB.frameId, this.previousViewProjection.TY(this.currentViewProjection)), BB.setMatrix("previousWorld", this.previousWorldMatrices[ZB.uniqueId]), BB.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[ZB.uniqueId] = TB.clone()
        }
      }
    }
  },
  40437: (BB, IB, ZB) => {
    function TB(BB) {
      return class extends BB {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    ZB.d(IB, {
      b: () => TB
    })
  },
  40318: (BB, IB, ZB) => {
    ZB.d(IB, {
      StandardMaterial: () => TB.f
    });
    var TB = ZB(40322);
    (0, TB.d)()
  },
  40322: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => rB,
      f: () => PB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(40163),
      GB = ZB(40148),
      vB = ZB(37311),
      kB = ZB(40188),
      cB = ZB(40330),
      nB = ZB(40333),
      hB = ZB(40166),
      zB = ZB(40339),
      FB = ZB(40335),
      NB = ZB(40390),
      gB = ZB(40383),
      qB = ZB(40395),
      yB = ZB(40400),
      UB = ZB(40380),
      WB = ZB(40416),
      dB = ZB(40371),
      CB = ZB(40085),
      QB = ZB(40425),
      sB = ZB(40431),
      wB = ZB(40433),
      OB = ZB(40437),
      YB = ZB(40443),
      iB = ZB(37170),
      pB = ZB(39931);
    const aB = {
      effect: null,
      subMesh: null
    };
    class HB extends((0, OB.b)((0, wB.b)(FB.e))) {}
    class MB extends((0, nB.c)(HB)) {
      constructor(BB) {
        super(BB), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class jB extends((0, YB.b)(NB.b)) {}
    let PB = (() => {
        var BB, IB, nB, FB, wB, OB, YB, iB, pB, HB, PB, RB, rB, mB, XB, LB, eB, uB, fB, lB, AB, tB, bB, xB, EB, DB, KB, VB, SB, BI, II, ZI, TI;
        let JI, oI, GI, vI, kI, cI, nI, hI, zI, FI, NI, gI, qI, yI, UI, WI, dI, CI, QI, sI, wI, OI, YI, iI, pI, aI, HI, MI, jI, PI, RI, rI, mI, XI, LI, eI, uI, fI, lI, AI, tI, bI, xI, EI, DI, KI, VI, SI, BZ, IZ, ZZ, TZ, JZ, oZ, GZ, vZ, kZ, cZ, nZ, hZ, zZ, FZ, NZ, gZ, qZ, yZ, UZ, WZ, dZ, CZ, QZ, sZ, wZ, OZ = jB,
          YZ = [],
          iZ = [],
          pZ = [],
          aZ = [],
          HZ = [],
          MZ = [],
          jZ = [],
          PZ = [],
          RZ = [],
          rZ = [],
          mZ = [],
          XZ = [],
          LZ = [],
          eZ = [],
          uZ = [],
          fZ = [],
          lZ = [],
          AZ = [],
          tZ = [],
          bZ = [],
          xZ = [],
          EZ = [],
          DZ = [],
          KZ = [],
          VZ = [],
          SZ = [],
          BT = [],
          IT = [],
          ZT = [],
          TT = [],
          JT = [],
          oT = [],
          GT = [],
          vT = [],
          kT = [],
          cT = [],
          nT = [],
          hT = [],
          zT = [],
          FT = [],
          NT = [],
          gT = [],
          qT = [],
          yT = [],
          UT = [],
          WT = [],
          dT = [],
          CT = [],
          QT = [],
          sT = [],
          wT = [],
          OT = [],
          YT = [],
          iT = [],
          pT = [],
          aT = [],
          HT = [],
          MT = [],
          jT = [],
          PT = [],
          RT = [],
          rT = [],
          mT = [],
          XT = [],
          LT = [],
          eT = [],
          uT = [],
          fT = [],
          lT = [],
          AT = [],
          tT = [],
          bT = [],
          xT = [],
          ET = [],
          DT = [],
          KT = [],
          VT = [],
          ST = [],
          BJ = [],
          IJ = [],
          ZJ = [],
          TJ = [],
          JJ = [],
          oJ = [],
          GJ = [],
          vJ = [],
          kJ = [],
          cJ = [],
          nJ = [],
          hJ = [],
          zJ = [],
          FJ = [],
          NJ = [],
          gJ = [],
          qJ = [],
          yJ = [],
          UJ = [],
          WJ = [],
          dJ = [],
          CJ = [],
          QJ = [],
          sJ = [],
          wJ = [],
          OJ = [],
          YJ = [],
          iJ = [],
          pJ = [],
          aJ = [],
          HJ = [],
          MJ = [],
          jJ = [],
          PJ = [],
          RJ = [],
          rJ = [],
          mJ = [],
          XJ = [],
          LJ = [],
          eJ = [],
          uJ = [],
          fJ = [],
          lJ = [],
          AJ = [],
          tJ = [],
          bJ = [],
          xJ = [],
          EJ = [],
          DJ = [],
          KJ = [],
          VJ = [],
          SJ = [],
          Bo = [],
          Io = [],
          Zo = [],
          To = [],
          Jo = [],
          oo = [],
          Go = [],
          vo = [],
          ko = [],
          co = [],
          no = [],
          ho = [],
          zo = [],
          Fo = [],
          No = [],
          go = [];
        return BB = class extends OZ {
          get diffuseTexture() {
            return (0, TB.b)(this, IB, "f")
          }
          set diffuseTexture(BB) {
            (0, TB.f)(this, IB, BB, "f")
          }
          get ambientTexture() {
            return (0, TB.b)(this, nB, "f")
          }
          set ambientTexture(BB) {
            (0, TB.f)(this, nB, BB, "f")
          }
          get opacityTexture() {
            return (0, TB.b)(this, FB, "f")
          }
          set opacityTexture(BB) {
            (0, TB.f)(this, FB, BB, "f")
          }
          get reflectionTexture() {
            return (0, TB.b)(this, wB, "f")
          }
          set reflectionTexture(BB) {
            (0, TB.f)(this, wB, BB, "f")
          }
          get emissiveTexture() {
            return (0, TB.b)(this, OB, "f")
          }
          set emissiveTexture(BB) {
            (0, TB.f)(this, OB, BB, "f")
          }
          get specularTexture() {
            return (0, TB.b)(this, YB, "f")
          }
          set specularTexture(BB) {
            (0, TB.f)(this, YB, BB, "f")
          }
          get bumpTexture() {
            return (0, TB.b)(this, iB, "f")
          }
          set bumpTexture(BB) {
            (0, TB.f)(this, iB, BB, "f")
          }
          get lightmapTexture() {
            return (0, TB.b)(this, pB, "f")
          }
          set lightmapTexture(BB) {
            (0, TB.f)(this, pB, BB, "f")
          }
          get refractionTexture() {
            return (0, TB.b)(this, HB, "f")
          }
          set refractionTexture(BB) {
            (0, TB.f)(this, HB, BB, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, TB.b)(this, PB, "f")
          }
          set useAlphaFromDiffuseTexture(BB) {
            (0, TB.f)(this, PB, BB, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, TB.b)(this, RB, "f")
          }
          set useEmissiveAsIllumination(BB) {
            (0, TB.f)(this, RB, BB, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, TB.b)(this, rB, "f")
          }
          set linkEmissiveWithDiffuse(BB) {
            (0, TB.f)(this, rB, BB, "f")
          }
          get useSpecularOverAlpha() {
            return (0, TB.b)(this, mB, "f")
          }
          set useSpecularOverAlpha(BB) {
            (0, TB.f)(this, mB, BB, "f")
          }
          get useReflectionOverAlpha() {
            return (0, TB.b)(this, XB, "f")
          }
          set useReflectionOverAlpha(BB) {
            (0, TB.f)(this, XB, BB, "f")
          }
          get disableLighting() {
            return (0, TB.b)(this, LB, "f")
          }
          set disableLighting(BB) {
            (0, TB.f)(this, LB, BB, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, TB.b)(this, eB, "f")
          }
          set useObjectSpaceNormalMap(BB) {
            (0, TB.f)(this, eB, BB, "f")
          }
          get useParallax() {
            return (0, TB.b)(this, uB, "f")
          }
          set useParallax(BB) {
            (0, TB.f)(this, uB, BB, "f")
          }
          get useParallaxOcclusion() {
            return (0, TB.b)(this, fB, "f")
          }
          set useParallaxOcclusion(BB) {
            (0, TB.f)(this, fB, BB, "f")
          }
          get roughness() {
            return (0, TB.b)(this, lB, "f")
          }
          set roughness(BB) {
            (0, TB.f)(this, lB, BB, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, TB.b)(this, AB, "f")
          }
          set useLightmapAsShadowmap(BB) {
            (0, TB.f)(this, AB, BB, "f")
          }
          get diffuseFresnelParameters() {
            return (0, TB.b)(this, tB, "f")
          }
          set diffuseFresnelParameters(BB) {
            (0, TB.f)(this, tB, BB, "f")
          }
          get opacityFresnelParameters() {
            return (0, TB.b)(this, bB, "f")
          }
          set opacityFresnelParameters(BB) {
            (0, TB.f)(this, bB, BB, "f")
          }
          get reflectionFresnelParameters() {
            return (0, TB.b)(this, xB, "f")
          }
          set reflectionFresnelParameters(BB) {
            (0, TB.f)(this, xB, BB, "f")
          }
          get refractionFresnelParameters() {
            return (0, TB.b)(this, EB, "f")
          }
          set refractionFresnelParameters(BB) {
            (0, TB.f)(this, EB, BB, "f")
          }
          get emissiveFresnelParameters() {
            return (0, TB.b)(this, DB, "f")
          }
          set emissiveFresnelParameters(BB) {
            (0, TB.f)(this, DB, BB, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, TB.b)(this, KB, "f")
          }
          set useReflectionFresnelFromSpecular(BB) {
            (0, TB.f)(this, KB, BB, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, TB.b)(this, VB, "f")
          }
          set useGlossinessFromSpecularMapAlpha(BB) {
            (0, TB.f)(this, VB, BB, "f")
          }
          get maxSimultaneousLights() {
            return (0, TB.b)(this, SB, "f")
          }
          set maxSimultaneousLights(BB) {
            (0, TB.f)(this, SB, BB, "f")
          }
          get invertNormalMapX() {
            return (0, TB.b)(this, BI, "f")
          }
          set invertNormalMapX(BB) {
            (0, TB.f)(this, BI, BB, "f")
          }
          get invertNormalMapY() {
            return (0, TB.b)(this, II, "f")
          }
          set invertNormalMapY(BB) {
            (0, TB.f)(this, II, BB, "f")
          }
          get twoSidedLighting() {
            return (0, TB.b)(this, ZI, "f")
          }
          set twoSidedLighting(BB) {
            (0, TB.f)(this, ZI, BB, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, TB.b)(this, TI, "f")
          }
          set applyDecalMapAfterDetailMap(BB) {
            (0, TB.f)(this, TI, BB, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(ZB, JB) {
            super(ZB, JB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || BB.ForceGLSL), this._diffuseTexture = (0, TB.l)(this, YZ, null), IB.set(this, ((0, TB.l)(this, iZ), (0, TB.l)(this, pZ, void 0))), this._ambientTexture = ((0, TB.l)(this, aZ), (0, TB.l)(this, HZ, null)), nB.set(this, ((0, TB.l)(this, MZ), (0, TB.l)(this, jZ, void 0))), this._opacityTexture = ((0, TB.l)(this, PZ), (0, TB.l)(this, RZ, null)), FB.set(this, ((0, TB.l)(this, rZ), (0, TB.l)(this, mZ, void 0))), this._reflectionTexture = ((0, TB.l)(this, XZ), (0, TB.l)(this, LZ, null)), wB.set(this, ((0, TB.l)(this, eZ), (0, TB.l)(this, uZ, void 0))), this._emissiveTexture = ((0, TB.l)(this, fZ), (0, TB.l)(this, lZ, null)), OB.set(this, ((0, TB.l)(this, AZ), (0, TB.l)(this, tZ, void 0))), this._specularTexture = ((0, TB.l)(this, bZ), (0, TB.l)(this, xZ, null)), YB.set(this, ((0, TB.l)(this, EZ), (0, TB.l)(this, DZ, void 0))), this._bumpTexture = ((0, TB.l)(this, KZ), (0, TB.l)(this, VZ, null)), iB.set(this, ((0, TB.l)(this, SZ), (0, TB.l)(this, BT, void 0))), this._lightmapTexture = ((0, TB.l)(this, IT), (0, TB.l)(this, ZT, null)), pB.set(this, ((0, TB.l)(this, TT), (0, TB.l)(this, JT, void 0))), this._refractionTexture = ((0, TB.l)(this, oT), (0, TB.l)(this, GT, null)), HB.set(this, ((0, TB.l)(this, vT), (0, TB.l)(this, kT, void 0))), this.ambientColor = ((0, TB.l)(this, cT), (0, TB.l)(this, nT, new vB.c(0, 0, 0))), this.diffuseColor = ((0, TB.l)(this, hT), (0, TB.l)(this, zT, new vB.c(1, 1, 1))), this.specularColor = ((0, TB.l)(this, FT), (0, TB.l)(this, NT, new vB.c(1, 1, 1))), this.emissiveColor = ((0, TB.l)(this, gT), (0, TB.l)(this, qT, new vB.c(0, 0, 0))), this.specularPower = ((0, TB.l)(this, yT), (0, TB.l)(this, UT, 64)), this._useAlphaFromDiffuseTexture = ((0, TB.l)(this, WT), (0, TB.l)(this, dT, !1)), PB.set(this, ((0, TB.l)(this, CT), (0, TB.l)(this, QT, void 0))), this._useEmissiveAsIllumination = ((0, TB.l)(this, sT), (0, TB.l)(this, wT, !1)), RB.set(this, ((0, TB.l)(this, OT), (0, TB.l)(this, YT, void 0))), this._linkEmissiveWithDiffuse = ((0, TB.l)(this, iT), (0, TB.l)(this, pT, !1)), rB.set(this, ((0, TB.l)(this, aT), (0, TB.l)(this, HT, void 0))), this._useSpecularOverAlpha = ((0, TB.l)(this, MT), (0, TB.l)(this, jT, !1)), mB.set(this, ((0, TB.l)(this, PT), (0, TB.l)(this, RT, void 0))), this._useReflectionOverAlpha = ((0, TB.l)(this, rT), (0, TB.l)(this, mT, !1)), XB.set(this, ((0, TB.l)(this, XT), (0, TB.l)(this, LT, void 0))), this._disableLighting = ((0, TB.l)(this, eT), (0, TB.l)(this, uT, !1)), LB.set(this, ((0, TB.l)(this, fT), (0, TB.l)(this, lT, void 0))), this._useObjectSpaceNormalMap = ((0, TB.l)(this, AT), (0, TB.l)(this, tT, !1)), eB.set(this, ((0, TB.l)(this, bT), (0, TB.l)(this, xT, void 0))), this._useParallax = ((0, TB.l)(this, ET), (0, TB.l)(this, DT, !1)), uB.set(this, ((0, TB.l)(this, KT), (0, TB.l)(this, VT, void 0))), this._useParallaxOcclusion = ((0, TB.l)(this, ST), (0, TB.l)(this, BJ, !1)), fB.set(this, ((0, TB.l)(this, IJ), (0, TB.l)(this, ZJ, void 0))), this.parallaxScaleBias = ((0, TB.l)(this, TJ), (0, TB.l)(this, JJ, .05)), this._roughness = ((0, TB.l)(this, oJ), (0, TB.l)(this, GJ, 0)), lB.set(this, ((0, TB.l)(this, vJ), (0, TB.l)(this, kJ, void 0))), this.indexOfRefraction = ((0, TB.l)(this, cJ), (0, TB.l)(this, nJ, .98)), this.invertRefractionY = ((0, TB.l)(this, hJ), (0, TB.l)(this, zJ, !0)), this.alphaCutOff = ((0, TB.l)(this, FJ), (0, TB.l)(this, NJ, .4)), this._useLightmapAsShadowmap = ((0, TB.l)(this, gJ), (0, TB.l)(this, qJ, !1)), AB.set(this, ((0, TB.l)(this, yJ), (0, TB.l)(this, UJ, void 0))), this._diffuseFresnelParameters = ((0, TB.l)(this, WJ), (0, TB.l)(this, dJ, void 0)), tB.set(this, ((0, TB.l)(this, CJ), (0, TB.l)(this, QJ, void 0))), this._opacityFresnelParameters = ((0, TB.l)(this, sJ), (0, TB.l)(this, wJ, void 0)), bB.set(this, ((0, TB.l)(this, OJ), (0, TB.l)(this, YJ, void 0))), this._reflectionFresnelParameters = ((0, TB.l)(this, iJ), (0, TB.l)(this, pJ, void 0)), xB.set(this, ((0, TB.l)(this, aJ), (0, TB.l)(this, HJ, void 0))), this._refractionFresnelParameters = ((0, TB.l)(this, MJ), (0, TB.l)(this, jJ, void 0)), EB.set(this, ((0, TB.l)(this, PJ), (0, TB.l)(this, RJ, void 0))), this._emissiveFresnelParameters = ((0, TB.l)(this, rJ), (0, TB.l)(this, mJ, void 0)), DB.set(this, ((0, TB.l)(this, XJ), (0, TB.l)(this, LJ, void 0))), this._useReflectionFresnelFromSpecular = ((0, TB.l)(this, eJ), (0, TB.l)(this, uJ, !1)), KB.set(this, ((0, TB.l)(this, fJ), (0, TB.l)(this, lJ, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, TB.l)(this, AJ), (0, TB.l)(this, tJ, !1)), VB.set(this, ((0, TB.l)(this, bJ), (0, TB.l)(this, xJ, void 0))), this._maxSimultaneousLights = ((0, TB.l)(this, EJ), (0, TB.l)(this, DJ, 4)), SB.set(this, ((0, TB.l)(this, KJ), (0, TB.l)(this, VJ, void 0))), this._invertNormalMapX = ((0, TB.l)(this, SJ), (0, TB.l)(this, Bo, !1)), BI.set(this, ((0, TB.l)(this, Io), (0, TB.l)(this, Zo, void 0))), this._invertNormalMapY = ((0, TB.l)(this, To), (0, TB.l)(this, Jo, !1)), II.set(this, ((0, TB.l)(this, oo), (0, TB.l)(this, Go, void 0))), this._twoSidedLighting = ((0, TB.l)(this, vo), (0, TB.l)(this, ko, !1)), ZI.set(this, ((0, TB.l)(this, co), (0, TB.l)(this, no, void 0))), this._applyDecalMapAfterDetailMap = ((0, TB.l)(this, ho), (0, TB.l)(this, zo, !1)), TI.set(this, ((0, TB.l)(this, Fo), (0, TB.l)(this, No, void 0))), this._vertexPullingMetadata = ((0, TB.l)(this, go), null), this._renderTargets = new oB.g(16), this._globalAmbientColor = new vB.c(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new yB.e(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new cB.e, this.getRenderTargetTextures = () => (this._renderTargets.reset(), BB.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), BB.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
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
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === zB.e.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== zB.e.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(IB, ZB) {
            let TB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const JB = ZB._drawWrapper;
            if (JB.effect && this.isFrozen && JB._wasPreviouslyReady && JB._wasPreviouslyUsingInstances === TB) return !0;
            ZB.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), ZB.materialDefines = new MB(this._eventInfo.defineNames));
            const oB = this.JR(),
              GB = ZB.materialDefines;
            if (this._isReadyForSubMesh(ZB)) return !0;
            const vB = oB.PN();
            if (GB._needNormals = (0, dB.Y)(oB, IB, GB, !0, this._maxSimultaneousLights, this._disableLighting), !(0, dB.c)(oB, IB, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, dB.fb)(oB, GB);
            const nB = this.needAlphaBlendingForMesh(IB) && this.JR().useOrderIndependentTransparency;
            if ((0, dB.kb)(oB, GB, this.canRenderToMRT && !nB), (0, dB.gb)(oB, GB, nB), sB.b.PrepareDefines(vB.currentRenderPassId, IB, GB), GB._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, GB._needUVs = !1;
              for (let BB = 1; BB <= 6; ++BB) GB["MAINUV" + BB] = !1;
              if (oB.texturesEnabled) {
                if (GB.DIFFUSEDIRECTUV = 0, GB.BUMPDIRECTUV = 0, GB.AMBIENTDIRECTUV = 0, GB.OPACITYDIRECTUV = 0, GB.EMISSIVEDIRECTUV = 0, GB.SPECULARDIRECTUV = 0, GB.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && BB.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, dB.ab)(this._diffuseTexture, GB, "DIFFUSE")
                } else GB.DIFFUSE = !1;
                if (this._ambientTexture && BB.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, dB.ab)(this._ambientTexture, GB, "AMBIENT")
                } else GB.AMBIENT = !1;
                if (this._opacityTexture && BB.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, dB.ab)(this._opacityTexture, GB, "OPACITY"), GB.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else GB.OPACITY = !1;
                if (this._reflectionTexture && BB.ReflectionTextureEnabled ? (GB.ROUGHNESS = this._roughness > 0, GB.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (GB.ROUGHNESS = !1, GB.REFLECTIONOVERALPHA = !1), !(0, dB.W)(oB, this._reflectionTexture, GB)) return !1;
                if (this._emissiveTexture && BB.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, dB.ab)(this._emissiveTexture, GB, "EMISSIVE")
                } else GB.EMISSIVE = !1;
                if (this._lightmapTexture && BB.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, dB.ab)(this._lightmapTexture, GB, "LIGHTMAP"), GB.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, GB.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else GB.LIGHTMAP = !1;
                if (this._specularTexture && BB.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, dB.ab)(this._specularTexture, GB, "SPECULAR"), GB.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else GB.SPECULAR = !1;
                if (oB.PN().getCaps().standardDerivatives && this._bumpTexture && BB.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, dB.ab)(this._bumpTexture, GB, "BUMP"), GB.PARALLAX = this._useParallax, GB.PARALLAX_RHS = oB.useRightHandedSystem, GB.PARALLAXOCCLUSION = this._useParallaxOcclusion, GB.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else GB.BUMP = !1, GB.PARALLAX = !1, GB.PARALLAX_RHS = !1, GB.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && BB.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  GB._needUVs = !0, GB.REFRACTION = !0, GB.REFRACTIONMAP_3D = this._refractionTexture.isCube, GB.RGBDREFRACTION = this._refractionTexture.isRGBD, GB.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else GB.REFRACTION = !1;
                GB.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else GB.DIFFUSE = !1, GB.AMBIENT = !1, GB.OPACITY = !1, GB.REFLECTION = !1, GB.EMISSIVE = !1, GB.LIGHTMAP = !1, GB.BUMP = !1, GB.REFRACTION = !1;
              GB.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), GB.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, GB.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, GB.SPECULAROVERALPHA = this._useSpecularOverAlpha, GB.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, GB.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, GB.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(IB), GB.TEXTURE_REPETITION_MODE = vB.version > 1 || vB.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = GB, this._eventInfo.subMesh = ZB, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (GB._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(GB), GB.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, GB.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (GB._areFresnelDirty && (BB.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (GB.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, GB.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, GB.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, GB.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, GB.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, GB.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, GB._needNormals = !0, GB.FRESNEL = !0) : GB.FRESNEL = !1), GB.AREALIGHTUSED || GB.CLUSTLIGHT_BATCH)
              for (let BB = 0; BB < IB.lightSources.length; BB++)
                if (!IB.lightSources[BB]._isReady()) return !1;
            (0, dB.eb)(IB, oB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(IB), GB, this._applyDecalMapAfterDetailMap, this._useVertexPulling, ZB.getRenderingMesh(), this._isVertexOutputInvariant), (0, dB.V)(oB, vB, this, GB, TB, null, ZB.getRenderingMesh().hasThinInstances), this._eventInfo.defines = GB, this._eventInfo.mesh = IB, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, dB.R)(IB, GB, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let zB = !1;
            if (GB.isDirty) {
              const TB = GB._areLightsDisposed;
              GB.markAsProcessed();
              const JB = new qB.e;
              GB.REFLECTION && JB.addFallback(0, "REFLECTION"), GB.SPECULAR && JB.addFallback(0, "SPECULAR"), GB.BUMP && JB.addFallback(0, "BUMP"), GB.PARALLAX && JB.addFallback(1, "PARALLAX"), GB.PARALLAX_RHS && JB.addFallback(1, "PARALLAX_RHS"), GB.PARALLAXOCCLUSION && JB.addFallback(0, "PARALLAXOCCLUSION"), GB.SPECULAROVERALPHA && JB.addFallback(0, "SPECULAROVERALPHA"), GB.FOG && JB.addFallback(1, "FOG"), GB.POINTSIZE && JB.addFallback(0, "POINTSIZE"), GB.LOGARITHMICDEPTH && JB.addFallback(0, "LOGARITHMICDEPTH"), (0, dB.C)(GB, JB, this._maxSimultaneousLights), GB.SPECULARTERM && JB.addFallback(0, "SPECULARTERM"), GB.DIFFUSEFRESNEL && JB.addFallback(1, "DIFFUSEFRESNEL"), GB.OPACITYFRESNEL && JB.addFallback(2, "OPACITYFRESNEL"), GB.REFLECTIONFRESNEL && JB.addFallback(3, "REFLECTIONFRESNEL"), GB.EMISSIVEFRESNEL && JB.addFallback(4, "EMISSIVEFRESNEL"), GB.FRESNEL && JB.addFallback(4, "FRESNEL"), GB.MULTIVIEW && JB.addFallback(0, "MULTIVIEW");
              const nB = [kB.i.PositionKind];
              GB.NORMAL && nB.push(kB.i.NormalKind), GB.TANGENT && nB.push(kB.i.TangentKind);
              for (let BB = 1; BB <= 6; ++BB) GB["UV" + BB] && nB.push(`uv${1===BB?"":BB}`);
              GB.VERTEXCOLOR && nB.push(kB.i.ColorKind), (0, dB.I)(nB, IB, GB, JB), (0, dB.L)(nB, GB), (0, dB.M)(nB, IB, GB), (0, dB.F)(nB, IB, GB);
              let FB = "default";
              const NB = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                gB = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, dB.rb)(NB, gB, !1);
              const yB = ["Material", "Scene", "Mesh"],
                CB = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: GB.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = JB, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = GB, this._eventInfo.uniforms = NB, this._eventInfo.attributes = nB, this._eventInfo.samplers = gB, this._eventInfo.uniformBuffersNames = yB, this._eventInfo.customCode = void 0, this._eventInfo.mesh = IB, this._eventInfo.indexParameters = CB, this._callbackPluginEventGeneric(128, this._eventInfo), sB.b.AddUniformsAndSamplers(NB, gB), cB.e.AddUniforms(NB), cB.e.AddSamplers(gB), hB.b && (hB.b.PrepareUniforms(NB, GB), hB.b.PrepareSamplers(gB, GB)), (0, dB.vb)({
                  uniformsNames: NB,
                  uniformBuffersNames: yB,
                  samplers: gB,
                  defines: GB,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, UB.c)(NB), this._useVertexPulling) {
                const BB = ZB.getRenderingMesh(),
                  IB = BB?.geometry;
                IB && (this._vertexPullingMetadata = (0, WB.d)(IB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, IB) => {
                  NB.push(`vp_${IB}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const QB = {};
              this.customShaderNameResolve && (FB = this.customShaderNameResolve(FB, NB, yB, gB, GB, nB, QB));
              const wB = GB.toString(),
                OB = ZB.effect,
                YB = oB.PN().createEffect(FB, {
                  attributes: nB,
                  uniformsNames: NB,
                  uniformBuffersNames: yB,
                  samplers: gB,
                  defines: wB,
                  fallbacks: JB,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: CB,
                  processFinalCode: QB.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: GB.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: BB._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, vB);
              if (this._eventInfo.customCode = void 0, YB)
                if (this._onEffectCreatedObservable && (aB.effect = YB, aB.subMesh = ZB, this._onEffectCreatedObservable.notifyObservers(aB)), this.allowShaderHotSwapping && OB && !YB.isReady()) {
                  if (GB.markAsUnprocessed(), zB = this.isFrozen, TB) return GB._areLightsDisposed = !0, !1
                } else oB.resetCachedMaterial(), ZB.setEffect(YB, GB, this._materialContext)
            }
            return !(!ZB.effect || !ZB.effect.isReady()) && (GB._renderId = oB.getRenderId(), JB._wasPreviouslyReady = !zB, JB._wasPreviouslyUsingInstances = TB, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const BB = this._uniformBuffer;
            BB.addUniform("diffuseLeftColor", 4), BB.addUniform("diffuseRightColor", 4), BB.addUniform("opacityParts", 4), BB.addUniform("reflectionLeftColor", 4), BB.addUniform("reflectionRightColor", 4), BB.addUniform("refractionLeftColor", 4), BB.addUniform("refractionRightColor", 4), BB.addUniform("emissiveLeftColor", 4), BB.addUniform("emissiveRightColor", 4), BB.addUniform("vDiffuseInfos", 2), BB.addUniform("vAmbientInfos", 2), BB.addUniform("vOpacityInfos", 2), BB.addUniform("vEmissiveInfos", 2), BB.addUniform("vLightmapInfos", 2), BB.addUniform("vSpecularInfos", 2), BB.addUniform("vBumpInfos", 3), BB.addUniform("diffuseMatrix", 16), BB.addUniform("ambientMatrix", 16), BB.addUniform("opacityMatrix", 16), BB.addUniform("emissiveMatrix", 16), BB.addUniform("lightmapMatrix", 16), BB.addUniform("specularMatrix", 16), BB.addUniform("bumpMatrix", 16), BB.addUniform("vTangentSpaceParams", 2), BB.addUniform("pointSize", 1), BB.addUniform("alphaCutOff", 1), BB.addUniform("refractionMatrix", 16), BB.addUniform("vRefractionInfos", 4), BB.addUniform("vRefractionPosition", 3), BB.addUniform("vRefractionSize", 3), BB.addUniform("vSpecularColor", 4), BB.addUniform("vEmissiveColor", 3), BB.addUniform("vDiffuseColor", 4), BB.addUniform("vAmbientColor", 3), BB.addUniform("cameraInfo", 4), BB.addUniform("vTextureRepetitionHexTilingParams", 4), (0, dB.ob)(BB, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(IB, ZB, TB) {
            const JB = this.JR(),
              oB = TB.materialDefines;
            if (!oB) return;
            const kB = TB.effect;
            if (!kB) return;
            this._activeEffect = kB, ZB.getMeshUniformBuffer().bindToEffect(kB, "Mesh"), ZB.transferToEffect(IB), this._uniformBuffer.bindToEffect(kB, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, JB, ZB, IB, this.isFrozen), sB.b.Bind(JB.PN().currentRenderPassId, this._activeEffect, ZB, IB, this);
            const cB = JB.activeCamera;
            cB ? this._uniformBuffer.updateFloat4("cameraInfo", cB.minZ, cB.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const nB = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", nB[0], nB[1], nB[2], nB[3]), this._eventInfo.subMesh = TB, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), oB.OBJECTSPACE_NORMALMAP && (IB.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const hB = this._mustRebind(JB, kB, TB, ZB.visibility),
              zB = JB.PN()._features.needToAlwaysBindUniformBuffers;
            (0, dB.e)(ZB, kB), this._vertexPullingMetadata && (0, WB.c)(kB, this._vertexPullingMetadata);
            const FB = this._uniformBuffer;
            if (hB) {
              if (this.bindViewProjection(kB), !FB.useUbo || !this.isFrozen || !FB.isSync || TB._drawWrapper._forceRebindOnNextCall) {
                if (BB.FresnelEnabled && oB.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (FB.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), FB.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const BB = vB.k.Color3[0];
                    BB.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), FB.updateColor4("opacityParts", BB, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (FB.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), FB.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (FB.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), FB.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (FB.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), FB.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (oB.ALPHATEST && FB.updateFloat("alphaCutOff", this.alphaCutOff), JB.texturesEnabled && (this._diffuseTexture && BB.DiffuseTextureEnabled && (FB.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, dB.y)(this._diffuseTexture, FB, "diffuse")), this._ambientTexture && BB.AmbientTextureEnabled && (FB.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, dB.y)(this._ambientTexture, FB, "ambient")), this._opacityTexture && BB.OpacityTextureEnabled && (FB.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, dB.y)(this._opacityTexture, FB, "opacity")), (0, dB.j)(JB, oB, FB, vB.c.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && BB.ReflectionTextureEnabled || FB.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && BB.EmissiveTextureEnabled && (FB.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, dB.y)(this._emissiveTexture, FB, "emissive")), this._lightmapTexture && BB.LightmapTextureEnabled && (FB.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, dB.y)(this._lightmapTexture, FB, "lightmap")), this._specularTexture && BB.SpecularTextureEnabled && (FB.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, dB.y)(this._specularTexture, FB, "specular")), this._bumpTexture && JB.PN().getCaps().standardDerivatives && BB.BumpTextureEnabled && (FB.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, dB.y)(this._bumpTexture, FB, "bump"), JB._mirroredCameraPosition ? FB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : FB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && BB.RefractionTextureEnabled)) {
                  let BB = 1;
                  if (this._refractionTexture.isCube || (FB.T6("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (BB = this._refractionTexture.depth)), FB.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, BB, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const BB = this._refractionTexture;
                    FB.updateVector3("vRefractionPosition", BB.boundingBoxPosition), FB.updateVector3("vRefractionSize", BB.boundingBoxSize)
                  }
                }
                this.pointsCloud && FB.updateFloat("pointSize", this.pointSize), FB.updateColor4("vSpecularColor", this.specularColor, this.specularPower), FB.updateColor3("vEmissiveColor", BB.EmissiveTextureEnabled ? this.emissiveColor : vB.c.BlackReadOnly), FB.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), JB.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), FB.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              JB.texturesEnabled && (this._diffuseTexture && BB.DiffuseTextureEnabled && kB.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && BB.AmbientTextureEnabled && kB.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && BB.OpacityTextureEnabled && kB.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && BB.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? kB.setTexture("reflectionCubeSampler", this._reflectionTexture) : kB.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && BB.EmissiveTextureEnabled && kB.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && BB.LightmapTextureEnabled && kB.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && BB.SpecularTextureEnabled && kB.setTexture("specularSampler", this._specularTexture), this._bumpTexture && JB.PN().getCaps().standardDerivatives && BB.BumpTextureEnabled && kB.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && BB.RefractionTextureEnabled && (this._refractionTexture.isCube ? kB.setTexture("refractionCubeSampler", this._refractionTexture) : kB.setTexture("refraction2DSampler", this._refractionTexture))), this.JR().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(ZB) && this.JR().depthPeelingRenderer.bind(kB), this._eventInfo.subMesh = TB, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, UB.d)(kB, this, JB), this.bindEyePosition(kB)
            } else zB && (this._needToBindSceneUbo = !0);
            !hB && this.isFrozen && !zB || !JB.lightsEnabled || this._disableLighting || (0, dB.p)(JB, ZB, kB, oB, this._maxSimultaneousLights), !hB && this.isFrozen || ((JB.fogEnabled && ZB.applyFog && JB.fogMode !== GB.e.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || ZB.receiveShadows || oB.PREPASS || oB.CLUSTLIGHT_BATCH) && this.bindView(kB), (0, dB.h)(JB, ZB, kB), oB.NUM_MORPH_INFLUENCERS && (0, dB.t)(ZB, kB), oB.BAKED_VERTEX_ANIMATION_TEXTURE && ZB.bakedVertexAnimationManager?.bind(kB, oB.INSTANCES), this.useLogarithmicDepth && (0, dB.s)(oB, kB, JB), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(ZB, this._activeEffect, TB), FB.update()
          }
          _canBindRunFollower(IB, ZB, TB, JB, oB) {
            const GB = IB.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === BB.prototype.isReadyForSubMesh && this.bindForSubMesh === BB.prototype.bindForSubMesh && this._mustRebind === NB.b.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !ZB._features.needToAlwaysBindUniformBuffers && !(GB && GB.enabled && GB.currentRTisSceneRT) && !sB.b._Configurations[ZB.currentRenderPassId] && !JB.materialDefines?.OBJECTSPACE_NORMALMAP && !TB.skeleton && !oB._bonesComputationForcedToCPU
          }
          _bindRunFollower(BB, IB, ZB, TB) {
            this._activeEffect = TB, IB.getMeshUniformBuffer().bindToEffect(TB, "Mesh"), IB.transferToEffect(BB);
            const JB = this._uniformBuffer;
            JB.bindToEffect(TB, "Material");
            const oB = this._scene.activeCamera;
            oB ? JB.updateFloat4("cameraInfo", oB.minZ, oB.maxZ, 0, 0) : JB.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const GB = this.textureRepetitionHexTilingParams;
            JB.updateFloat4("vTextureRepetitionHexTilingParams", GB[0], GB[1], GB[2], GB[3]), this._afterBind(IB, TB, ZB), JB.update()
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
          dispose(BB, IB) {
            IB && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(BB, IB)
          }
          clone(IB) {
            let ZB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const JB = CB.b.Clone((() => new BB(IB, this.JR())), this, {
              cloneTexturesOnlyOnce: ZB
            });
            return JB.name = IB, JB.id = IB, this.stencil.copyTo(JB.stencil), this._clonePlugins(JB, TB), JB
          }
          static Parse(IB, ZB, TB) {
            const JB = CB.b.Parse((() => new BB(IB.name, ZB)), IB, ZB, TB);
            return IB.stencil && JB.stencil.parse(IB.stencil, ZB, TB), zB.e._ParsePlugins(IB, JB, ZB, TB), JB
          }
          static get DiffuseTextureEnabled() {
            return gB.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(BB) {
            gB.e.DiffuseTextureEnabled = BB
          }
          static get DetailTextureEnabled() {
            return gB.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(BB) {
            gB.e.DetailTextureEnabled = BB
          }
          static get AmbientTextureEnabled() {
            return gB.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(BB) {
            gB.e.AmbientTextureEnabled = BB
          }
          static get OpacityTextureEnabled() {
            return gB.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(BB) {
            gB.e.OpacityTextureEnabled = BB
          }
          static get ReflectionTextureEnabled() {
            return gB.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(BB) {
            gB.e.ReflectionTextureEnabled = BB
          }
          static get EmissiveTextureEnabled() {
            return gB.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(BB) {
            gB.e.EmissiveTextureEnabled = BB
          }
          static get SpecularTextureEnabled() {
            return gB.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(BB) {
            gB.e.SpecularTextureEnabled = BB
          }
          static get BumpTextureEnabled() {
            return gB.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(BB) {
            gB.e.BumpTextureEnabled = BB
          }
          static get LightmapTextureEnabled() {
            return gB.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(BB) {
            gB.e.LightmapTextureEnabled = BB
          }
          static get RefractionTextureEnabled() {
            return gB.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(BB) {
            gB.e.RefractionTextureEnabled = BB
          }
          static get ColorGradingTextureEnabled() {
            return gB.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(BB) {
            gB.e.ColorGradingTextureEnabled = BB
          }
          static get FresnelEnabled() {
            return gB.e.FresnelEnabled
          }
          static set FresnelEnabled(BB) {
            gB.e.FresnelEnabled = BB
          }
        }, IB = new WeakMap, nB = new WeakMap, FB = new WeakMap, wB = new WeakMap, OB = new WeakMap, YB = new WeakMap, iB = new WeakMap, pB = new WeakMap, HB = new WeakMap, PB = new WeakMap, RB = new WeakMap, rB = new WeakMap, mB = new WeakMap, XB = new WeakMap, LB = new WeakMap, eB = new WeakMap, uB = new WeakMap, fB = new WeakMap, lB = new WeakMap, AB = new WeakMap, tB = new WeakMap, bB = new WeakMap, xB = new WeakMap, EB = new WeakMap, DB = new WeakMap, KB = new WeakMap, VB = new WeakMap, SB = new WeakMap, BI = new WeakMap, II = new WeakMap, ZI = new WeakMap, TI = new WeakMap, (() => {
          const IB = "function" === typeof Symbol && Symbol.metadata ? Object.create(OZ[Symbol.metadata] ?? null) : void 0;
          JI = [(0, JB.v)("diffuseTexture")], oI = [(0, JB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], GI = [(0, JB.v)("ambientTexture")], vI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], kI = [(0, JB.v)("opacityTexture")], cI = [(0, JB.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], nI = [(0, JB.v)("reflectionTexture")], hI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], zI = [(0, JB.v)("emissiveTexture")], FI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], NI = [(0, JB.v)("specularTexture")], gI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], qI = [(0, JB.v)("bumpTexture")], yI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], UI = [(0, JB.v)("lightmapTexture")], WI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], dI = [(0, JB.v)("refractionTexture")], CI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], QI = [(0, JB.l)("ambient")], sI = [(0, JB.l)("diffuse")], wI = [(0, JB.l)("specular")], OI = [(0, JB.l)("emissive")], YI = [(0, JB.C)()], iI = [(0, JB.C)("useAlphaFromDiffuseTexture")], pI = [() => ({
            init(BB) {
              return void 0 === BB && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = BB), BB
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(BB) {
              this._useAlphaFromDiffuseTexture = BB
            }
          })], aI = [(0, JB.C)("useEmissiveAsIllumination")], HI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], MI = [(0, JB.C)("linkEmissiveWithDiffuse")], jI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], PI = [(0, JB.C)("useSpecularOverAlpha")], RI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], rI = [(0, JB.C)("useReflectionOverAlpha")], mI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], XI = [(0, JB.C)("disableLighting")], LI = [(0, JB.e)("_markAllSubMeshesAsLightsDirty")], eI = [(0, JB.C)("useObjectSpaceNormalMap")], uI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], fI = [(0, JB.C)("useParallax")], lI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], AI = [(0, JB.C)("useParallaxOcclusion")], tI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], bI = [(0, JB.C)()], xI = [(0, JB.C)("roughness")], EI = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], DI = [(0, JB.C)()], KI = [(0, JB.C)()], VI = [(0, JB.C)()], SI = [(0, JB.C)("useLightmapAsShadowmap")], BZ = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], IZ = [(0, JB.o)("diffuseFresnelParameters")], ZZ = [(0, JB.e)("_markAllSubMeshesAsFresnelDirty")], TZ = [(0, JB.o)("opacityFresnelParameters")], JZ = [(0, JB.e)("_markAllSubMeshesAsFresnelAndMiscDirty")], oZ = [(0, JB.o)("reflectionFresnelParameters")], GZ = [(0, JB.e)("_markAllSubMeshesAsFresnelDirty")], vZ = [(0, JB.o)("refractionFresnelParameters")], kZ = [(0, JB.e)("_markAllSubMeshesAsFresnelDirty")], cZ = [(0, JB.o)("emissiveFresnelParameters")], nZ = [(0, JB.e)("_markAllSubMeshesAsFresnelDirty")], hZ = [(0, JB.C)("useReflectionFresnelFromSpecular")], zZ = [(0, JB.e)("_markAllSubMeshesAsFresnelDirty")], FZ = [(0, JB.C)("useGlossinessFromSpecularMapAlpha")], NZ = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], gZ = [(0, JB.C)("maxSimultaneousLights")], qZ = [(0, JB.e)("_markAllSubMeshesAsLightsDirty")], yZ = [(0, JB.C)("invertNormalMapX")], UZ = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], WZ = [(0, JB.C)("invertNormalMapY")], dZ = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], CZ = [(0, JB.C)("twoSidedLighting")], QZ = [(0, JB.e)("_markAllSubMeshesAsTexturesDirty")], sZ = [(0, JB.C)("applyDecalMapAfterDetailMap")], wZ = [(0, JB.e)("_markAllSubMeshesAsMiscDirty")], (0, TB.j)(BB, null, oI, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "diffuseTexture" in BB,
              get: BB => BB.diffuseTexture,
              set: (BB, IB) => {
                BB.diffuseTexture = IB
              }
            },
            metadata: IB
          }, pZ, aZ), (0, TB.j)(BB, null, vI, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "ambientTexture" in BB,
              get: BB => BB.ambientTexture,
              set: (BB, IB) => {
                BB.ambientTexture = IB
              }
            },
            metadata: IB
          }, jZ, PZ), (0, TB.j)(BB, null, cI, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "opacityTexture" in BB,
              get: BB => BB.opacityTexture,
              set: (BB, IB) => {
                BB.opacityTexture = IB
              }
            },
            metadata: IB
          }, mZ, XZ), (0, TB.j)(BB, null, hI, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "reflectionTexture" in BB,
              get: BB => BB.reflectionTexture,
              set: (BB, IB) => {
                BB.reflectionTexture = IB
              }
            },
            metadata: IB
          }, uZ, fZ), (0, TB.j)(BB, null, FI, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissiveTexture" in BB,
              get: BB => BB.emissiveTexture,
              set: (BB, IB) => {
                BB.emissiveTexture = IB
              }
            },
            metadata: IB
          }, tZ, bZ), (0, TB.j)(BB, null, gI, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularTexture" in BB,
              get: BB => BB.specularTexture,
              set: (BB, IB) => {
                BB.specularTexture = IB
              }
            },
            metadata: IB
          }, DZ, KZ), (0, TB.j)(BB, null, yI, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "bumpTexture" in BB,
              get: BB => BB.bumpTexture,
              set: (BB, IB) => {
                BB.bumpTexture = IB
              }
            },
            metadata: IB
          }, BT, IT), (0, TB.j)(BB, null, WI, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "lightmapTexture" in BB,
              get: BB => BB.lightmapTexture,
              set: (BB, IB) => {
                BB.lightmapTexture = IB
              }
            },
            metadata: IB
          }, JT, oT), (0, TB.j)(BB, null, CI, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "refractionTexture" in BB,
              get: BB => BB.refractionTexture,
              set: (BB, IB) => {
                BB.refractionTexture = IB
              }
            },
            metadata: IB
          }, kT, cT), (0, TB.j)(BB, null, pI, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "useAlphaFromDiffuseTexture" in BB,
              get: BB => BB.useAlphaFromDiffuseTexture,
              set: (BB, IB) => {
                BB.useAlphaFromDiffuseTexture = IB
              }
            },
            metadata: IB
          }, QT, sT), (0, TB.j)(BB, null, HI, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: BB => "useEmissiveAsIllumination" in BB,
              get: BB => BB.useEmissiveAsIllumination,
              set: (BB, IB) => {
                BB.useEmissiveAsIllumination = IB
              }
            },
            metadata: IB
          }, YT, iT), (0, TB.j)(BB, null, jI, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: BB => "linkEmissiveWithDiffuse" in BB,
              get: BB => BB.linkEmissiveWithDiffuse,
              set: (BB, IB) => {
                BB.linkEmissiveWithDiffuse = IB
              }
            },
            metadata: IB
          }, HT, MT), (0, TB.j)(BB, null, RI, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "useSpecularOverAlpha" in BB,
              get: BB => BB.useSpecularOverAlpha,
              set: (BB, IB) => {
                BB.useSpecularOverAlpha = IB
              }
            },
            metadata: IB
          }, RT, rT), (0, TB.j)(BB, null, mI, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "useReflectionOverAlpha" in BB,
              get: BB => BB.useReflectionOverAlpha,
              set: (BB, IB) => {
                BB.useReflectionOverAlpha = IB
              }
            },
            metadata: IB
          }, LT, eT), (0, TB.j)(BB, null, LI, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "disableLighting" in BB,
              get: BB => BB.disableLighting,
              set: (BB, IB) => {
                BB.disableLighting = IB
              }
            },
            metadata: IB
          }, lT, AT), (0, TB.j)(BB, null, uI, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "useObjectSpaceNormalMap" in BB,
              get: BB => BB.useObjectSpaceNormalMap,
              set: (BB, IB) => {
                BB.useObjectSpaceNormalMap = IB
              }
            },
            metadata: IB
          }, xT, ET), (0, TB.j)(BB, null, lI, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: BB => "useParallax" in BB,
              get: BB => BB.useParallax,
              set: (BB, IB) => {
                BB.useParallax = IB
              }
            },
            metadata: IB
          }, VT, ST), (0, TB.j)(BB, null, tI, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "useParallaxOcclusion" in BB,
              get: BB => BB.useParallaxOcclusion,
              set: (BB, IB) => {
                BB.useParallaxOcclusion = IB
              }
            },
            metadata: IB
          }, ZJ, TJ), (0, TB.j)(BB, null, EI, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "roughness" in BB,
              get: BB => BB.roughness,
              set: (BB, IB) => {
                BB.roughness = IB
              }
            },
            metadata: IB
          }, kJ, cJ), (0, TB.j)(BB, null, BZ, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: BB => "useLightmapAsShadowmap" in BB,
              get: BB => BB.useLightmapAsShadowmap,
              set: (BB, IB) => {
                BB.useLightmapAsShadowmap = IB
              }
            },
            metadata: IB
          }, UJ, WJ), (0, TB.j)(BB, null, ZZ, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "diffuseFresnelParameters" in BB,
              get: BB => BB.diffuseFresnelParameters,
              set: (BB, IB) => {
                BB.diffuseFresnelParameters = IB
              }
            },
            metadata: IB
          }, QJ, sJ), (0, TB.j)(BB, null, JZ, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "opacityFresnelParameters" in BB,
              get: BB => BB.opacityFresnelParameters,
              set: (BB, IB) => {
                BB.opacityFresnelParameters = IB
              }
            },
            metadata: IB
          }, YJ, iJ), (0, TB.j)(BB, null, GZ, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "reflectionFresnelParameters" in BB,
              get: BB => BB.reflectionFresnelParameters,
              set: (BB, IB) => {
                BB.reflectionFresnelParameters = IB
              }
            },
            metadata: IB
          }, HJ, MJ), (0, TB.j)(BB, null, kZ, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "refractionFresnelParameters" in BB,
              get: BB => BB.refractionFresnelParameters,
              set: (BB, IB) => {
                BB.refractionFresnelParameters = IB
              }
            },
            metadata: IB
          }, RJ, rJ), (0, TB.j)(BB, null, nZ, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissiveFresnelParameters" in BB,
              get: BB => BB.emissiveFresnelParameters,
              set: (BB, IB) => {
                BB.emissiveFresnelParameters = IB
              }
            },
            metadata: IB
          }, LJ, eJ), (0, TB.j)(BB, null, zZ, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: BB => "useReflectionFresnelFromSpecular" in BB,
              get: BB => BB.useReflectionFresnelFromSpecular,
              set: (BB, IB) => {
                BB.useReflectionFresnelFromSpecular = IB
              }
            },
            metadata: IB
          }, lJ, AJ), (0, TB.j)(BB, null, NZ, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "useGlossinessFromSpecularMapAlpha" in BB,
              get: BB => BB.useGlossinessFromSpecularMapAlpha,
              set: (BB, IB) => {
                BB.useGlossinessFromSpecularMapAlpha = IB
              }
            },
            metadata: IB
          }, xJ, EJ), (0, TB.j)(BB, null, qZ, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: BB => "maxSimultaneousLights" in BB,
              get: BB => BB.maxSimultaneousLights,
              set: (BB, IB) => {
                BB.maxSimultaneousLights = IB
              }
            },
            metadata: IB
          }, VJ, SJ), (0, TB.j)(BB, null, UZ, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertNormalMapX" in BB,
              get: BB => BB.invertNormalMapX,
              set: (BB, IB) => {
                BB.invertNormalMapX = IB
              }
            },
            metadata: IB
          }, Zo, To), (0, TB.j)(BB, null, dZ, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertNormalMapY" in BB,
              get: BB => BB.invertNormalMapY,
              set: (BB, IB) => {
                BB.invertNormalMapY = IB
              }
            },
            metadata: IB
          }, Go, vo), (0, TB.j)(BB, null, QZ, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "twoSidedLighting" in BB,
              get: BB => BB.twoSidedLighting,
              set: (BB, IB) => {
                BB.twoSidedLighting = IB
              }
            },
            metadata: IB
          }, no, ho), (0, TB.j)(BB, null, wZ, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "applyDecalMapAfterDetailMap" in BB,
              get: BB => BB.applyDecalMapAfterDetailMap,
              set: (BB, IB) => {
                BB.applyDecalMapAfterDetailMap = IB
              }
            },
            metadata: IB
          }, No, go), (0, TB.j)(null, null, JI, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_diffuseTexture" in BB,
              get: BB => BB._diffuseTexture,
              set: (BB, IB) => {
                BB._diffuseTexture = IB
              }
            },
            metadata: IB
          }, YZ, iZ), (0, TB.j)(null, null, GI, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_ambientTexture" in BB,
              get: BB => BB._ambientTexture,
              set: (BB, IB) => {
                BB._ambientTexture = IB
              }
            },
            metadata: IB
          }, HZ, MZ), (0, TB.j)(null, null, kI, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_opacityTexture" in BB,
              get: BB => BB._opacityTexture,
              set: (BB, IB) => {
                BB._opacityTexture = IB
              }
            },
            metadata: IB
          }, RZ, rZ), (0, TB.j)(null, null, nI, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_reflectionTexture" in BB,
              get: BB => BB._reflectionTexture,
              set: (BB, IB) => {
                BB._reflectionTexture = IB
              }
            },
            metadata: IB
          }, LZ, eZ), (0, TB.j)(null, null, zI, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_emissiveTexture" in BB,
              get: BB => BB._emissiveTexture,
              set: (BB, IB) => {
                BB._emissiveTexture = IB
              }
            },
            metadata: IB
          }, lZ, AZ), (0, TB.j)(null, null, NI, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_specularTexture" in BB,
              get: BB => BB._specularTexture,
              set: (BB, IB) => {
                BB._specularTexture = IB
              }
            },
            metadata: IB
          }, xZ, EZ), (0, TB.j)(null, null, qI, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_bumpTexture" in BB,
              get: BB => BB._bumpTexture,
              set: (BB, IB) => {
                BB._bumpTexture = IB
              }
            },
            metadata: IB
          }, VZ, SZ), (0, TB.j)(null, null, UI, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_lightmapTexture" in BB,
              get: BB => BB._lightmapTexture,
              set: (BB, IB) => {
                BB._lightmapTexture = IB
              }
            },
            metadata: IB
          }, ZT, TT), (0, TB.j)(null, null, dI, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_refractionTexture" in BB,
              get: BB => BB._refractionTexture,
              set: (BB, IB) => {
                BB._refractionTexture = IB
              }
            },
            metadata: IB
          }, GT, vT), (0, TB.j)(null, null, QI, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "ambientColor" in BB,
              get: BB => BB.ambientColor,
              set: (BB, IB) => {
                BB.ambientColor = IB
              }
            },
            metadata: IB
          }, nT, hT), (0, TB.j)(null, null, sI, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "diffuseColor" in BB,
              get: BB => BB.diffuseColor,
              set: (BB, IB) => {
                BB.diffuseColor = IB
              }
            },
            metadata: IB
          }, zT, FT), (0, TB.j)(null, null, wI, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularColor" in BB,
              get: BB => BB.specularColor,
              set: (BB, IB) => {
                BB.specularColor = IB
              }
            },
            metadata: IB
          }, NT, gT), (0, TB.j)(null, null, OI, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissiveColor" in BB,
              get: BB => BB.emissiveColor,
              set: (BB, IB) => {
                BB.emissiveColor = IB
              }
            },
            metadata: IB
          }, qT, yT), (0, TB.j)(null, null, YI, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularPower" in BB,
              get: BB => BB.specularPower,
              set: (BB, IB) => {
                BB.specularPower = IB
              }
            },
            metadata: IB
          }, UT, WT), (0, TB.j)(null, null, iI, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useAlphaFromDiffuseTexture" in BB,
              get: BB => BB._useAlphaFromDiffuseTexture,
              set: (BB, IB) => {
                BB._useAlphaFromDiffuseTexture = IB
              }
            },
            metadata: IB
          }, dT, CT), (0, TB.j)(null, null, aI, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useEmissiveAsIllumination" in BB,
              get: BB => BB._useEmissiveAsIllumination,
              set: (BB, IB) => {
                BB._useEmissiveAsIllumination = IB
              }
            },
            metadata: IB
          }, wT, OT), (0, TB.j)(null, null, MI, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: BB => "_linkEmissiveWithDiffuse" in BB,
              get: BB => BB._linkEmissiveWithDiffuse,
              set: (BB, IB) => {
                BB._linkEmissiveWithDiffuse = IB
              }
            },
            metadata: IB
          }, pT, aT), (0, TB.j)(null, null, PI, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useSpecularOverAlpha" in BB,
              get: BB => BB._useSpecularOverAlpha,
              set: (BB, IB) => {
                BB._useSpecularOverAlpha = IB
              }
            },
            metadata: IB
          }, jT, PT), (0, TB.j)(null, null, rI, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useReflectionOverAlpha" in BB,
              get: BB => BB._useReflectionOverAlpha,
              set: (BB, IB) => {
                BB._useReflectionOverAlpha = IB
              }
            },
            metadata: IB
          }, mT, XT), (0, TB.j)(null, null, XI, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "_disableLighting" in BB,
              get: BB => BB._disableLighting,
              set: (BB, IB) => {
                BB._disableLighting = IB
              }
            },
            metadata: IB
          }, uT, fT), (0, TB.j)(null, null, eI, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useObjectSpaceNormalMap" in BB,
              get: BB => BB._useObjectSpaceNormalMap,
              set: (BB, IB) => {
                BB._useObjectSpaceNormalMap = IB
              }
            },
            metadata: IB
          }, tT, bT), (0, TB.j)(null, null, fI, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useParallax" in BB,
              get: BB => BB._useParallax,
              set: (BB, IB) => {
                BB._useParallax = IB
              }
            },
            metadata: IB
          }, DT, KT), (0, TB.j)(null, null, AI, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useParallaxOcclusion" in BB,
              get: BB => BB._useParallaxOcclusion,
              set: (BB, IB) => {
                BB._useParallaxOcclusion = IB
              }
            },
            metadata: IB
          }, BJ, IJ), (0, TB.j)(null, null, bI, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: BB => "parallaxScaleBias" in BB,
              get: BB => BB.parallaxScaleBias,
              set: (BB, IB) => {
                BB.parallaxScaleBias = IB
              }
            },
            metadata: IB
          }, JJ, oJ), (0, TB.j)(null, null, xI, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "_roughness" in BB,
              get: BB => BB._roughness,
              set: (BB, IB) => {
                BB._roughness = IB
              }
            },
            metadata: IB
          }, GJ, vJ), (0, TB.j)(null, null, DI, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: BB => "indexOfRefraction" in BB,
              get: BB => BB.indexOfRefraction,
              set: (BB, IB) => {
                BB.indexOfRefraction = IB
              }
            },
            metadata: IB
          }, nJ, hJ), (0, TB.j)(null, null, KI, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertRefractionY" in BB,
              get: BB => BB.invertRefractionY,
              set: (BB, IB) => {
                BB.invertRefractionY = IB
              }
            },
            metadata: IB
          }, zJ, FJ), (0, TB.j)(null, null, VI, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: BB => "alphaCutOff" in BB,
              get: BB => BB.alphaCutOff,
              set: (BB, IB) => {
                BB.alphaCutOff = IB
              }
            },
            metadata: IB
          }, NJ, gJ), (0, TB.j)(null, null, SI, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useLightmapAsShadowmap" in BB,
              get: BB => BB._useLightmapAsShadowmap,
              set: (BB, IB) => {
                BB._useLightmapAsShadowmap = IB
              }
            },
            metadata: IB
          }, qJ, yJ), (0, TB.j)(null, null, IZ, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_diffuseFresnelParameters" in BB,
              get: BB => BB._diffuseFresnelParameters,
              set: (BB, IB) => {
                BB._diffuseFresnelParameters = IB
              }
            },
            metadata: IB
          }, dJ, CJ), (0, TB.j)(null, null, TZ, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_opacityFresnelParameters" in BB,
              get: BB => BB._opacityFresnelParameters,
              set: (BB, IB) => {
                BB._opacityFresnelParameters = IB
              }
            },
            metadata: IB
          }, wJ, OJ), (0, TB.j)(null, null, oZ, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_reflectionFresnelParameters" in BB,
              get: BB => BB._reflectionFresnelParameters,
              set: (BB, IB) => {
                BB._reflectionFresnelParameters = IB
              }
            },
            metadata: IB
          }, pJ, aJ), (0, TB.j)(null, null, vZ, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_refractionFresnelParameters" in BB,
              get: BB => BB._refractionFresnelParameters,
              set: (BB, IB) => {
                BB._refractionFresnelParameters = IB
              }
            },
            metadata: IB
          }, jJ, PJ), (0, TB.j)(null, null, cZ, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_emissiveFresnelParameters" in BB,
              get: BB => BB._emissiveFresnelParameters,
              set: (BB, IB) => {
                BB._emissiveFresnelParameters = IB
              }
            },
            metadata: IB
          }, mJ, XJ), (0, TB.j)(null, null, hZ, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useReflectionFresnelFromSpecular" in BB,
              get: BB => BB._useReflectionFresnelFromSpecular,
              set: (BB, IB) => {
                BB._useReflectionFresnelFromSpecular = IB
              }
            },
            metadata: IB
          }, uJ, fJ), (0, TB.j)(null, null, FZ, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useGlossinessFromSpecularMapAlpha" in BB,
              get: BB => BB._useGlossinessFromSpecularMapAlpha,
              set: (BB, IB) => {
                BB._useGlossinessFromSpecularMapAlpha = IB
              }
            },
            metadata: IB
          }, tJ, bJ), (0, TB.j)(null, null, gZ, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: BB => "_maxSimultaneousLights" in BB,
              get: BB => BB._maxSimultaneousLights,
              set: (BB, IB) => {
                BB._maxSimultaneousLights = IB
              }
            },
            metadata: IB
          }, DJ, KJ), (0, TB.j)(null, null, yZ, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: BB => "_invertNormalMapX" in BB,
              get: BB => BB._invertNormalMapX,
              set: (BB, IB) => {
                BB._invertNormalMapX = IB
              }
            },
            metadata: IB
          }, Bo, Io), (0, TB.j)(null, null, WZ, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: BB => "_invertNormalMapY" in BB,
              get: BB => BB._invertNormalMapY,
              set: (BB, IB) => {
                BB._invertNormalMapY = IB
              }
            },
            metadata: IB
          }, Jo, oo), (0, TB.j)(null, null, CZ, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "_twoSidedLighting" in BB,
              get: BB => BB._twoSidedLighting,
              set: (BB, IB) => {
                BB._twoSidedLighting = IB
              }
            },
            metadata: IB
          }, ko, co), (0, TB.j)(null, null, sZ, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "_applyDecalMapAfterDetailMap" in BB,
              get: BB => BB._applyDecalMapAfterDetailMap,
              set: (BB, IB) => {
                BB._applyDecalMapAfterDetailMap = IB
              }
            },
            metadata: IB
          }, zo, Fo), IB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: IB
          })
        })(), BB.ForceGLSL = !1, BB._ShaderLoader = new QB.d((() => [Promise.all([ZB.e(322), ZB.e(321)]).then((() => ZB(41895))), Promise.all([ZB.e(327), ZB.e(323), ZB.e(336), ZB.e(326)]).then((() => ZB(42088)))]), (() => [Promise.all([ZB.e(343), ZB.e(338)]).then((() => ZB(42226))), Promise.all([ZB.e(344), ZB.e(354), ZB.e(340)]).then((() => ZB(42413)))])), BB
      })(),
      RB = !1;

    function rB() {
      RB || (RB = !0, (0, hB.d)(), (0, iB.i)("BABYLON.StandardMaterial", PB), GB.e.DefaultMaterialFactory = BB => new PB("default material", BB))
    }
    Object.getOwnPropertyDescriptor(PB.prototype, "decalMap") || Object.defineProperty(PB.prototype, "decalMap", (0, pB.g)("StandardMaterial", "decalMap"))
  },
  40433: (BB, IB, ZB) => {
    function TB(BB) {
      return class extends BB {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    ZB.d(IB, {
      b: () => TB
    })
  },
  40425: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB
    });
    class TB {
      constructor(BB, IB) {
        this._webGL = {
          load: BB,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: IB,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(BB) {
        const IB = 1 === BB ? this._webGPU : this._webGL;
        return IB.loaded ? void 0 : async () => {
          await this._loadAsync(IB)
        }
      }
      async _loadAsync(BB) {
        if (BB.loaded) return;
        let IB = BB.loadPromise;
        const ZB = null === IB;
        ZB && (IB = Promise.all(BB.load()), BB.loadPromise = IB);
        let TB = !1;
        try {
          await IB, TB = !0
        } finally {
          ZB && this._completeLoad(BB, TB)
        }
      }
      _completeLoad(BB, IB) {
        BB.loaded = IB, BB.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);