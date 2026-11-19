export const id = 250;
export const ids = [250];
export const modules = {
  39507: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    var FY = DY(39136);

    function AY(YY) {
      return class extends YY {
        constructor() {
          super(...arguments);
          const YY = new.target;
          if (!YY[Symbol.metadata]) {
            const rY = Object.getPrototypeOf(YY)?.[Symbol.metadata];
            YY[Symbol.metadata] = rY ? Object.create(rY) : {}
          }
          const rY = (0, FY.e)(YY[Symbol.metadata]);
          rY._imageProcessingConfiguration || (rY._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(YY) {
          this._attachImageProcessingConfiguration(YY), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(YY) {
          YY !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !YY && this.hT ? this._imageProcessingConfiguration = this.hT().imageProcessingConfiguration : YY && (this._imageProcessingConfiguration = YY), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(YY) {
          this.imageProcessingConfiguration.colorCurvesEnabled = YY
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(YY) {
          this.imageProcessingConfiguration.colorGradingEnabled = YY
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(YY) {
          this._imageProcessingConfiguration.toneMappingEnabled = YY
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(YY) {
          this._imageProcessingConfiguration.exposure = YY
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(YY) {
          this._imageProcessingConfiguration.contrast = YY
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(YY) {
          this._imageProcessingConfiguration.colorGradingTexture = YY
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(YY) {
          this._imageProcessingConfiguration.colorCurves = YY
        }
      }
    }
  },
  39403: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY,
      h: () => AY
    });
    var FY = DY(39408);

    function AY(YY) {
      return class extends YY {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class IY extends FY.e {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  39475: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => uY
    });
    var FY = DY(39127),
      AY = DY(39414),
      IY = DY(39131),
      RY = DY(39456),
      OY = DY(39408),
      gY = DY(39479),
      aY = DY(39444);
    class vY extends OY.e {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let uY = (() => {
      var YY, rY, DY, OY;
      let uY, sY, iY, yY, QY, oY, WY = gY.c,
        EY = [],
        mY = [],
        VY = [],
        SY = [],
        lY = [],
        TY = [],
        eY = [],
        NY = [],
        BY = [],
        cY = [],
        KY = [],
        HY = [];
      return YY = class extends WY {
        get texture() {
          return (0, FY.d)(this, rY, "f")
        }
        set texture(YY) {
          (0, FY.g)(this, rY, YY, "f")
        }
        get normalBlendMethod() {
          return (0, FY.d)(this, DY, "f")
        }
        set normalBlendMethod(YY) {
          (0, FY.g)(this, DY, YY, "f")
        }
        get isEnabled() {
          return (0, FY.d)(this, OY, "f")
        }
        set isEnabled(YY) {
          (0, FY.g)(this, OY, YY, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(YY) {
          let IY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(YY, "DetailMap", 140, new vY, IY), this._texture = null, rY.set(this, (0, FY.j)(this, EY, void 0)), this.diffuseBlendLevel = ((0, FY.j)(this, mY), (0, FY.j)(this, VY, 1)), this.roughnessBlendLevel = ((0, FY.j)(this, SY), (0, FY.j)(this, lY, 1)), this.bumpLevel = ((0, FY.j)(this, TY), (0, FY.j)(this, eY, 1)), this._normalBlendMethod = ((0, FY.j)(this, NY), AY.c.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), DY.set(this, (0, FY.j)(this, BY, void 0)), this._isEnabled = ((0, FY.j)(this, cY), !1), OY.set(this, (0, FY.j)(this, KY, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, FY.j)(this, HY), this._internalMarkAllSubMeshesAsTexturesDirty = YY._dirtyCallbacks[1]
        }
        isReadyForSubMesh(YY, rY, DY) {
          return !this._isEnabled || !(YY._areTexturesDirty && rY.texturesEnabled && DY.getCaps().standardDerivatives && this._texture && RY.c.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(YY, rY) {
          if (this._isEnabled) {
            YY.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const DY = rY.ky();
            YY._areTexturesDirty && (DY.getCaps().standardDerivatives && this._texture && RY.c.DetailTextureEnabled && this._isEnabled ? ((0, aY.eb)(this._texture, YY, "DETAIL"), YY.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : YY.DETAIL = !1)
          } else YY.DETAIL = !1
        }
        bindForSubMesh(YY, rY) {
          if (!this._isEnabled) return;
          const DY = this._material.isFrozen;
          YY.useUbo && DY && YY.isSync || this._texture && RY.c.DetailTextureEnabled && (YY.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, aY.y)(this._texture, YY, "detail")), rY.texturesEnabled && this._texture && RY.c.DetailTextureEnabled && YY.setTexture("detailSampler", this._texture)
        }
        hasTexture(YY) {
          return this._texture === YY
        }
        getActiveTextures(YY) {
          this._texture && YY.push(this._texture)
        }
        getAnimatables(YY) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && YY.push(this._texture)
        }
        dispose(YY) {
          YY && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(YY) {
          YY.push("detailSampler")
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
      }, rY = new WeakMap, DY = new WeakMap, OY = new WeakMap, (() => {
        const rY = "function" === typeof Symbol && Symbol.metadata ? Object.create(WY[Symbol.metadata] ?? null) : void 0;
        uY = [(0, IY.D)("detailTexture"), (0, IY.f)("_markAllSubMeshesAsTexturesDirty")], sY = [(0, IY.M)()], iY = [(0, IY.M)()], yY = [(0, IY.M)()], QY = [(0, IY.M)(), (0, IY.f)("_markAllSubMeshesAsTexturesDirty")], oY = [(0, IY.M)(), (0, IY.f)("_markAllSubMeshesAsTexturesDirty")], (0, FY.i)(YY, null, uY, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: YY => "texture" in YY,
            get: YY => YY.texture,
            set: (YY, rY) => {
              YY.texture = rY
            }
          },
          metadata: rY
        }, EY, mY), (0, FY.i)(YY, null, QY, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: YY => "normalBlendMethod" in YY,
            get: YY => YY.normalBlendMethod,
            set: (YY, rY) => {
              YY.normalBlendMethod = rY
            }
          },
          metadata: rY
        }, BY, cY), (0, FY.i)(YY, null, oY, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: YY => "isEnabled" in YY,
            get: YY => YY.isEnabled,
            set: (YY, rY) => {
              YY.isEnabled = rY
            }
          },
          metadata: rY
        }, KY, HY), (0, FY.i)(null, null, sY, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: YY => "diffuseBlendLevel" in YY,
            get: YY => YY.diffuseBlendLevel,
            set: (YY, rY) => {
              YY.diffuseBlendLevel = rY
            }
          },
          metadata: rY
        }, VY, SY), (0, FY.i)(null, null, iY, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: YY => "roughnessBlendLevel" in YY,
            get: YY => YY.roughnessBlendLevel,
            set: (YY, rY) => {
              YY.roughnessBlendLevel = rY
            }
          },
          metadata: rY
        }, lY, TY), (0, FY.i)(null, null, yY, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: YY => "bumpLevel" in YY,
            get: YY => YY.bumpLevel,
            set: (YY, rY) => {
              YY.bumpLevel = rY
            }
          },
          metadata: rY
        }, eY, NY), rY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rY
        })
      })(), YY
    })()
  },
  39408: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY
    });
    class FY {
      constructor(YY) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = YY, YY)
          for (const rY in YY) Object.prototype.hasOwnProperty.call(YY, rY) && this._setDefaultValue(rY)
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
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || YY, this._isDirty = !0
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
        for (const YY of Object.keys(this)) "_" !== YY[0] && this._keys.push(YY);
        if (this._externalProperties)
          for (const YY in this._externalProperties) - 1 === this._keys.indexOf(YY) && this._keys.push(YY)
      }
      isEqual(YY) {
        if (this._keys.length !== YY._keys.length) return !1;
        for (let rY = 0; rY < this._keys.length; rY++) {
          const DY = this._keys[rY];
          if (this[DY] !== YY[DY]) return !1
        }
        return !0
      }
      cloneTo(YY) {
        this._keys.length !== YY._keys.length && (YY._keys = this._keys.slice(0));
        for (let rY = 0; rY < this._keys.length; rY++) {
          const DY = this._keys[rY];
          YY[DY] = this[DY]
        }
      }
      reset() {
        for (const YY of this._keys) this._setDefaultValue(YY)
      }
      _setDefaultValue(YY) {
        const rY = this._externalProperties?.[YY]?.type ?? typeof this[YY],
          DY = this._externalProperties?.[YY]?.default;
        switch (rY) {
          case "number":
            this[YY] = DY ?? 0;
            break;
          case "string":
            this[YY] = DY ?? "";
            break;
          default:
            this[YY] = DY ?? !1
        }
      }
      toString() {
        let YY = "";
        for (let rY = 0; rY < this._keys.length; rY++) {
          const DY = this._keys[rY],
            FY = this[DY];
          switch (typeof FY) {
            case "number":
            case "string":
              YY += "#define " + DY + " " + FY + "\n";
              break;
            default:
              FY && (YY += "#define " + DY + "\n")
          }
        }
        return YY
      }
    }
  },
  39499: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => OY,
      g: () => RY,
      k: () => IY
    });
    var FY, AY = DY(36524);

    function IY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const FY = rY(YY);
      if (!Number.isInteger(FY) || FY < 0 || FY > DY) throw new Error(`Invalid geometry object ID ${FY} for mesh "${YY.name}". Object IDs must be integers between 0 and 0x${DY.toString(16).toUpperCase()}.`);
      return FY
    }

    function RY(YY, rY) {
      const DY = rY(YY);
      if (!Number.isInteger(DY) || DY < 0 || DY > 255 || 0 !== DY && 0 === (63 & DY)) throw new Error(`Invalid geometry mesh-blending tag ${DY} for mesh "${YY.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return DY
    }! function(YY) {
      YY[YY.Zero = 0] = "Zero", YY[YY.One = 1] = "One", YY[YY.MaxViewZ = 2] = "MaxViewZ", YY[YY.NoClear = 3] = "NoClear"
    }(FY || (FY = {}));
    class OY {
      static CreateConfiguration(YY) {
        return OY._Configurations[YY] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: AY.e.Zero(),
          currentViewProjection: AY.e.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, OY._Configurations[YY]
      }
      static DeleteConfiguration(YY) {
        delete OY._Configurations[YY]
      }
      static GetConfiguration(YY) {
        return OY._Configurations[YY]
      }
      static _PrepareConfiguration(YY, rY, DY) {
        const FY = OY._Configurations[YY];
        FY._attachments = rY, FY._colorAttachments = DY, FY._mrtCount = rY.length;
        let AY = "#define PREPASS\n";
        for (const IY of OY.GeometryTextureDescriptions) {
          const YY = FY.defines[IY.defineIndex];
          void 0 !== YY && (AY += `#define ${IY.define}\n#define ${IY.defineIndex} ${YY}\n`)
        }
        FY.objectIdIsRedFormat && (AY += "#define PREPASS_OBJECT_ID_R8\n"), FY._defines = AY + `#define SCENE_MRT_COUNT ${rY.length}\n`
      }
      static _PrepareStringDefines(YY, rY) {
        const DY = OY._Configurations[YY];
        return !!DY?._defines && (rY.push(DY._defines), !0)
      }
      static _BindAttachmentsForEffect(YY, rY) {
        const DY = OY._Configurations[YY.currentRenderPassId];
        return !DY?._attachments || (YY.bindAttachments(rY._multiTarget ? DY._attachments : DY._colorAttachments), rY._multiTarget || void 0 !== DY.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(YY) {
        const rY = OY._Configurations[YY.currentRenderPassId];
        rY?._colorAttachments && YY.bindAttachments(rY._colorAttachments)
      }
      static _BindColorAttachments(YY) {
        const rY = OY._Configurations[YY.currentRenderPassId];
        return !rY?._colorAttachments || (YY.bindAttachments(rY._colorAttachments), void 0 !== rY.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(YY) {
        const rY = OY._Configurations[YY.currentRenderPassId];
        return !rY?._colorAttachments || void 0 !== rY.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(YY, rY) {
        const DY = OY._Configurations[YY.currentRenderPassId];
        if (!DY) return;
        const FY = YY.getAlphaMode(),
          AY = void 0 === DY.defines.PREPASS_COLOR_INDEX || 2 === FY || 1 === FY || 17 === FY;
        rY.setFloat("geometryZeroAlphaDiscard", AY ? 1 : 0)
      }
      static AddUniformsAndSamplers(YY, rY) {
        YY.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(YY, rY) {
        for (const DY of rY)
          if (DY.qm)
            for (const rY of DY.qm) rY._removeDrawWrapper(YY)
      }
      static PrepareDefines(YY, rY, DY) {
        if (!DY._arePrePassDirty) return;
        const FY = OY._Configurations[YY];
        if (!FY) return;
        DY.PREPASS = !0;
        let AY = 0;
        for (let IY = 0; IY < OY.GeometryTextureDescriptions.length; IY++) {
          const YY = OY.GeometryTextureDescriptions[IY],
            rY = YY.define,
            RY = YY.defineIndex,
            gY = FY.defines[RY];
          void 0 !== gY ? (DY[rY] = !0, DY[RY] = gY, AY++) : (DY[rY] = !1, delete DY[RY])
        }
        DY.PREPASS_OBJECT_ID_R8 = FY.objectIdIsRedFormat, DY.SCENE_MRT_COUNT = FY._mrtCount ?? AY, DY.BONES_VELOCITY_ENABLED = rY.useBones && rY.computeBonesUsingShaders && rY.skeleton && !rY.skeleton.isUsingTextureForMatrices && -1 === FY.excludedSkinnedMesh.indexOf(rY)
      }
      static Bind(YY, rY, DY, FY, AY) {
        const gY = OY._Configurations[YY];
        if (!gY) return;
        const aY = DY.hT(),
          vY = aY.ky();
        if (gY.reverseCulling && vY.setStateCullFaceType(aY._mirroredCameraPosition ? AY.cullBackFaces : !AY.cullBackFaces), void 0 !== gY.defines.PREPASS_OBJECT_ID_INDEX) {
          const YY = gY.objectIdIsRedFormat ? 255 : 16777215;
          let FY = DY.uniqueId;
          if (gY.objectIdProvider) FY = IY(DY, gY.objectIdProvider, YY);
          else if (FY > YY) throw new Error(`Invalid geometry object ID ${FY} for mesh "${DY.name}". Object IDs must be integers between 0 and 0x${YY.toString(16).toUpperCase()}.`);
          rY.setFloat("objectId", FY)
        }
        if (void 0 !== gY.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const YY = gY.meshBlendTagProvider ? RY(DY, gY.meshBlendTagProvider) : DY.meshBlendingTag;
          rY.setInt("meshBlendTag", YY)
        }
        if (void 0 !== gY.defines.PREPASS_VELOCITY_INDEX || void 0 !== gY.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const YY = gY._currentWorldMatrices ?? (gY._currentWorldMatrices = {}),
            AY = gY._worldMatrixFrameIds ?? (gY._worldMatrixFrameIds = {});
          if (YY[DY.uniqueId] || (YY[DY.uniqueId] = FY.clone(), gY.previousWorldMatrices[DY.uniqueId] = FY.clone()), AY[DY.uniqueId] !== vY.frameId && (gY.previousWorldMatrices[DY.uniqueId].brY(YY[DY.uniqueId]), AY[DY.uniqueId] = vY.frameId), YY[DY.uniqueId].brY(FY), -1 === gY.lastUpdateFrameId ? (gY.lastUpdateFrameId = vY.frameId, gY.previousViewProjection.brY(aY.getTransformMatrix()), gY.currentViewProjection.brY(aY.getTransformMatrix())) : gY.currentViewProjection.updateFlag !== aY.getTransformMatrix().updateFlag ? (gY.lastUpdateFrameId = vY.frameId, gY.previousViewProjection.brY(gY.currentViewProjection), gY.currentViewProjection.brY(aY.getTransformMatrix())) : gY.lastUpdateFrameId !== vY.frameId && (gY.lastUpdateFrameId = vY.frameId, gY.previousViewProjection.brY(gY.currentViewProjection)), rY.setMatrix("previousWorld", gY.previousWorldMatrices[DY.uniqueId]), rY.setMatrix("previousViewProjection", gY.previousViewProjection), DY.useBones && DY.computeBonesUsingShaders && DY.skeleton) {
            const YY = DY.skeleton;
            if (!YY.isUsingTextureForMatrices || -1 === rY.getUniformIndex("boneTextureInfo")) {
              const FY = YY.getTransformMatrices(DY);
              FY && (gY.previousBones[DY.uniqueId] || (gY.previousBones[DY.uniqueId] = FY.slice()), rY.setMatrices("mPreviousBones", gY.previousBones[DY.uniqueId]), gY.previousBones[DY.uniqueId].set(FY))
            }
          }
        }
      }
    }
    OY.GeometryTextureDescriptions = [{
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
    }], OY._Configurations = {}
  },
  39479: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => sY,
      d: () => yY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(39032),
      RY = DY(38998);
    const OY = new RegExp("^([gimus]+)!");
    class gY {
      constructor(YY) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = YY, this._scene = YY.hT(), this._engine = this._scene.ky()
      }
      _addPlugin(YY) {
        for (let FY = 0; FY < this._plugins.length; ++FY)
          if (this._plugins[FY].name === YY.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !YY.isCompatible(this._material.shaderLanguage)) throw `The plugin "${YY.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const rY = YY.getClassName();
        gY._MaterialPluginClassToMainDefine[rY] || (gY._MaterialPluginClassToMainDefine[rY] = "MATERIALPLUGIN_" + ++gY._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (YY, rY) => this._handlePluginEvent(YY, rY), this._plugins.push(YY), this._plugins.sort(((YY, rY) => YY.priority - rY.priority)), this._codeInjectionPoints = {};
        const DY = {};
        DY[gY._MaterialPluginClassToMainDefine[rY]] = {
          type: "boolean",
          default: !0
        };
        for (const FY of this._plugins) FY.collectDefines(DY), this._collectPointNames("vertex", FY.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", FY.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = DY, !0
      }
      _activatePlugin(YY) {
        -1 === this._activePlugins.indexOf(YY) && (this._activePlugins.push(YY), this._activePlugins.sort(((YY, rY) => YY.priority - rY.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), YY.registerForExtraEvents && (this._activePluginsForExtraEvents.push(YY), this._activePluginsForExtraEvents.sort(((YY, rY) => YY.priority - rY.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(YY) {
        for (let rY = 0; rY < this._plugins.length; ++rY)
          if (this._plugins[rY].name === YY) return this._plugins[rY];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(YY) {
        let rY = !0;
        for (const DY of this._activePlugins) rY = rY && DY.isReadyForSubMesh(YY.defines, this._scene, this._engine, YY.subMesh);
        YY.isReadyForSubMesh = rY
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(YY) {
        for (const rY of this._activePlugins) rY.prepareDefinesBeforeAttributes(YY.defines, this._scene, YY.mesh)
      }
      _handlePluginEventPrepareDefines(YY) {
        for (const rY of this._activePlugins) rY.prepareDefines(YY.defines, this._scene, YY.mesh)
      }
      _handlePluginEventHardBindForSubMesh(YY) {
        for (const rY of this._activePluginsForExtraEvents) rY.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, YY.subMesh)
      }
      _handlePluginEventBindForSubMesh(YY) {
        for (const rY of this._activePlugins) rY.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, YY.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(YY) {
        let rY = !1;
        for (const DY of this._activePluginsForExtraEvents)
          if (rY = DY.hasRenderTargetTextures(), rY) break;
        YY.hasRenderTargetTextures = rY
      }
      _handlePluginEventFillRenderTargetTextures(YY) {
        for (const rY of this._activePluginsForExtraEvents) rY.fillRenderTargetTextures(YY.renderTargets)
      }
      _handlePluginEvent(YY, rY) {
        switch (YY) {
          case 512: {
            const YY = rY;
            for (const rY of this._activePlugins) rY.getActiveTextures(YY.activeTextures);
            break
          }
          case 256: {
            const YY = rY;
            for (const rY of this._activePlugins) rY.getAnimatables(YY.animatables);
            break
          }
          case 1024: {
            const YY = rY;
            let DY = !1;
            for (const rY of this._activePlugins)
              if (DY = rY.hasTexture(YY.texture), DY) break;
            YY.hasTexture = DY;
            break
          }
          case 2: {
            const YY = rY;
            for (const rY of this._plugins) rY.dispose(YY.forceDisposeTextures);
            break
          }
          case 4:
            rY.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const YY = rY;
            for (const rY of this._activePlugins) YY.fallbackRank = rY.addFallbacks(YY.defines, YY.fallbacks, YY.fallbackRank), rY.getAttributes(YY.attributes, this._scene, YY.mesh);
            this._uniformList.length > 0 && YY.uniforms.push(...this._uniformList), this._samplerList.length > 0 && YY.samplers.push(...this._samplerList), this._uboList.length > 0 && YY.uniformBuffersNames.push(...this._uboList), YY.customCode = this._injectCustomCode(YY, YY.customCode);
            break
          }
          case 8: {
            const YY = rY;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const DY = 1 === this._material.shaderLanguage;
            for (const rY of this._plugins) {
              const FY = rY.getUniforms(this._material.shaderLanguage);
              if (FY) {
                if (FY.ubo)
                  for (const rY of FY.ubo) {
                    if (rY.size && rY.type) {
                      const FY = rY.arraySize ?? 0;
                      if (YY.ubo.addUniform(rY.name, rY.size, FY), DY) {
                        let YY;
                        switch (rY.type) {
                          case "mat4":
                            YY = "mat4x4f";
                            break;
                          case "float":
                            YY = "f32";
                            break;
                          default:
                            YY = `${rY.type}f`
                        }
                        this._uboDeclaration += FY > 0 ? `uniform ${rY.name}: array<${YY}, ${FY}>;\n` : `uniform ${rY.name}: ${YY};\n`
                      } else this._uboDeclaration += `${rY.type} ${rY.name}${FY>0?`[${FY}]`:""};\n`
                    }
                    this._uniformList.push(rY.name)
                  }
                FY.vertex && (this._vertexDeclaration += FY.vertex + "\n"), FY.fragment && (this._fragmentDeclaration += FY.fragment + "\n"), FY.externalUniforms && this._uniformList.push(...FY.externalUniforms)
              }
              rY.getSamplers(this._samplerList), rY.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(YY, rY) {
        if (rY)
          for (const DY in rY) this._codeInjectionPoints[YY] || (this._codeInjectionPoints[YY] = {}), this._codeInjectionPoints[YY][DY] = !0
      }
      _injectCustomCode(YY, rY) {
        return (DY, FY) => {
          rY && (FY = rY(DY, FY)), this._uboDeclaration && (FY = FY.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (FY = FY.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (FY = FY.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const AY = this._codeInjectionPoints?.[DY];
          if (!AY) return FY;
          let gY = null;
          for (let rY in AY) {
            let AY = "";
            for (const FY of this._activePlugins) {
              const OY = this._material.shaderLanguage;
              let aY = FY.getCustomCode(DY, OY)?.[rY];
              aY && (FY.resolveIncludes && (null === gY && (gY = {
                defines: [],
                indexParameters: YY.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: RY.b.GetShadersRepository(OY),
                includesShadersStore: RY.b.GetIncludesShadersStore(OY),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                QDY: this._engine.QDY,
                processCodeAfterIncludes: void 0
              }), gY.isFragment = "fragment" === DY, (0, IY.j)(aY, gY, (YY => aY = YY))), AY += aY + "\n")
            }
            if (AY.length > 0)
              if ("!" === rY.charAt(0)) {
                rY = rY.substring(1);
                let YY = "g";
                if ("!" === rY.charAt(0)) YY = "", rY = rY.substring(1);
                else {
                  const DY = OY.exec(rY);
                  DY && DY.length >= 2 && (YY = DY[1], rY = rY.substring(YY.length + 1))
                }
                YY.indexOf("g") < 0 && (YY += "g");
                const DY = new RegExp(rY, YY);
                let IY = DY.exec(FY);
                for (; null !== IY;) {
                  const {
                    index: YY
                  } = IY, rY = aY(AY, IY);
                  FY = FY.substring(0, YY) + rY + FY.substring(YY + IY[0].length), DY.lastIndex = YY + rY.length, IY = DY.exec(FY)
                }
              } else {
                const YY = "#define " + rY;
                FY = FY.replace(YY, "\n" + AY + "\n" + YY)
              }
          }
          return FY
        }
      }
    }
    gY._MaterialPluginClassToMainDefine = {}, gY._MaterialPluginCounter = 0;

    function aY(YY, rY) {
      return YY.replace(/\$(\d+)/g, ((YY, DY) => {
        const FY = Number(DY);
        return FY < rY.length ? rY[FY] : ""
      }))
    }
    var vY = DY(39144),
      uY = DY(36569);
    let sY = (() => {
        var YY;
        let rY, DY, IY, RY, OY = [],
          aY = [],
          uY = [],
          sY = [],
          iY = [],
          yY = [],
          QY = [],
          oY = [];
        return YY = class {
          isCompatible(YY) {
            return 0 === YY
          }
          _enable(YY) {
            YY && this._pluginManager._activatePlugin(this)
          }
          constructor(YY, rY, DY, AY) {
            let IY = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              RY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              vY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, FY.j)(this, OY, void 0), this.priority = ((0, FY.j)(this, aY), (0, FY.j)(this, uY, 500)), this.resolveIncludes = ((0, FY.j)(this, sY), (0, FY.j)(this, iY, !1)), this.registerForExtraEvents = ((0, FY.j)(this, yY), (0, FY.j)(this, QY, !1)), this.doNotSerialize = ((0, FY.j)(this, oY), !1), this._material = YY, this.name = rY, this.priority = DY, this.resolveIncludes = vY, YY.pluginManager || (YY.pluginManager = new gY(YY), YY.wT.add((() => {
              YY.pluginManager = void 0
            }))), this._pluginDefineNames = AY, this._pluginManager = YY.pluginManager, IY && this._pluginManager._addPlugin(this), RY && this._enable(!0), this.markAllDefinesAsDirty = YY._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(YY, rY, DY, FY) {
            return !0
          }
          hardBindForSubMesh(YY, rY, DY, FY) {}
          bindForSubMesh(YY, rY, DY, FY) {}
          dispose(YY) {}
          getCustomCode(YY) {
            return null
          }
          collectDefines(YY) {
            if (this._pluginDefineNames)
              for (const rY of Object.keys(this._pluginDefineNames)) {
                if ("_" === rY[0]) continue;
                const DY = typeof this._pluginDefineNames[rY];
                YY[rY] = {
                  type: "number" === DY ? "number" : "string" === DY ? "string" : "boolean" === DY ? "boolean" : "object",
                  default: this._pluginDefineNames[rY]
                }
              }
          }
          prepareDefinesBeforeAttributes(YY, rY, DY) {}
          prepareDefines(YY, rY, DY) {}
          hasTexture(YY) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(YY) {}
          getActiveTextures(YY) {}
          getAnimatables(YY) {}
          addFallbacks(YY, rY, DY) {
            return DY
          }
          getSamplers(YY) {}
          getAttributes(YY, rY, DY) {}
          getUniformBuffersNames(YY) {}
          getUniforms() {
            return {}
          }
          copyTo(YY) {
            vY.b.Clone((() => YY), this)
          }
          serialize() {
            return vY.b.Serialize(this)
          }
          parse(YY, rY, DY) {
            vY.b.Parse((() => this), YY, rY, DY)
          }
        }, (() => {
          const gY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          rY = [(0, AY.M)()], DY = [(0, AY.M)()], IY = [(0, AY.M)()], RY = [(0, AY.M)()], (0, FY.i)(null, null, rY, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: YY => "name" in YY,
              get: YY => YY.name,
              set: (YY, rY) => {
                YY.name = rY
              }
            },
            metadata: gY
          }, OY, aY), (0, FY.i)(null, null, DY, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: YY => "priority" in YY,
              get: YY => YY.priority,
              set: (YY, rY) => {
                YY.priority = rY
              }
            },
            metadata: gY
          }, uY, sY), (0, FY.i)(null, null, IY, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: YY => "resolveIncludes" in YY,
              get: YY => YY.resolveIncludes,
              set: (YY, rY) => {
                YY.resolveIncludes = rY
              }
            },
            metadata: gY
          }, iY, yY), (0, FY.i)(null, null, RY, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: YY => "registerForExtraEvents" in YY,
              get: YY => YY.registerForExtraEvents,
              set: (YY, rY) => {
                YY.registerForExtraEvents = rY
              }
            },
            metadata: gY
          }, QY, oY), gY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: gY
          })
        })(), YY
      })(),
      iY = !1;

    function yY() {
      iY || (iY = !0, (0, uY.i)("BABYLON.MaterialPluginBase", sY))
    }
  },
  39399: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    class FY {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(YY) {
        YY.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(YY) {}
      bindForSubMesh(YY, rY, DY, FY, AY) {
        if (rY.prePassRenderer && rY.prePassRenderer.enabled && rY.prePassRenderer.currentRTisSceneRT && (-1 !== rY.prePassRenderer.getIndex(2) || -1 !== rY.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[DY.uniqueId] || (this.previousWorldMatrices[DY.uniqueId] = FY.clone()), this.previousViewProjection || (this.previousViewProjection = rY.getTransformMatrix().clone(), this.currentViewProjection = rY.getTransformMatrix().clone());
          const AY = rY.ky();
          this.currentViewProjection.updateFlag !== rY.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = AY.frameId, this.previousViewProjection.brY(this.currentViewProjection), this.currentViewProjection.brY(rY.getTransformMatrix())) : this._lastUpdateFrameId !== AY.frameId && (this._lastUpdateFrameId = AY.frameId, this.previousViewProjection.brY(this.currentViewProjection)), YY.setMatrix("previousWorld", this.previousWorldMatrices[DY.uniqueId]), YY.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[DY.uniqueId] = FY.clone()
        }
      }
    }
  },
  39504: (YY, rY, DY) => {
    function FY(YY) {
      return class extends YY {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    DY.d(rY, {
      c: () => FY
    })
  },
  39391: (YY, rY, DY) => {
    DY.d(rY, {
      StandardMaterial: () => FY.g
    });
    var FY = DY(39393);
    (0, FY.d)()
  },
  39393: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => hY,
      g: () => fY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(39231),
      RY = DY(39217),
      OY = DY(36588),
      gY = DY(39270),
      aY = DY(39399),
      vY = DY(39403),
      uY = DY(39234),
      sY = DY(39414),
      iY = DY(39408),
      yY = DY(39465),
      QY = DY(39456),
      oY = DY(39472),
      WY = DY(39475),
      EY = DY(39448),
      mY = DY(39486),
      VY = DY(39444),
      SY = DY(39144),
      lY = DY(39491),
      TY = DY(39499),
      eY = DY(39501),
      NY = DY(39504),
      BY = DY(39507),
      cY = DY(36569),
      KY = DY(39029);
    const HY = {
      effect: null,
      subMesh: null
    };
    class zY extends((0, NY.c)((0, eY.e)(iY.e))) {}
    class ZY extends((0, vY.h)(zY)) {
      constructor(YY) {
        super(YY), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class CY extends((0, BY.d)(yY.e)) {}
    let fY = (() => {
        var YY, rY, vY, iY, eY, NY, BY, cY, KY, zY, fY, jY, hY, dY, JY, MY, wY, bY, XY, qY, pY, kY, GY, xY, nY, PY, UY, LY, tY, Yr, rr, Dr, Fr;
        let Ar, Ir, Rr, Or, gr, ar, vr, ur, sr, ir, yr, Qr, or, Wr, Er, mr, Vr, Sr, lr, Tr, er, Nr, Br, cr, Kr, Hr, zr, Zr, Cr, fr, jr, hr, dr, Jr, Mr, wr, br, Xr, qr, pr, kr, Gr, xr, nr, Pr, Ur, Lr, tr, YD, rD, DD, FD, AD, ID, RD, OD, gD, aD, vD, uD, sD, iD, yD, QD, oD, WD, ED, mD, VD, SD, lD, TD, eD, ND = CY,
          BD = [],
          cD = [],
          KD = [],
          HD = [],
          zD = [],
          ZD = [],
          CD = [],
          fD = [],
          jD = [],
          hD = [],
          dD = [],
          JD = [],
          MD = [],
          wD = [],
          bD = [],
          XD = [],
          qD = [],
          pD = [],
          kD = [],
          GD = [],
          xD = [],
          nD = [],
          PD = [],
          UD = [],
          LD = [],
          tD = [],
          YF = [],
          rF = [],
          DF = [],
          FF = [],
          AF = [],
          IF = [],
          RF = [],
          OF = [],
          gF = [],
          aF = [],
          vF = [],
          uF = [],
          sF = [],
          iF = [],
          yF = [],
          QF = [],
          oF = [],
          WF = [],
          EF = [],
          mF = [],
          VF = [],
          SF = [],
          lF = [],
          TF = [],
          eF = [],
          NF = [],
          BF = [],
          cF = [],
          KF = [],
          HF = [],
          zF = [],
          ZF = [],
          CF = [],
          fF = [],
          jF = [],
          hF = [],
          dF = [],
          JF = [],
          MF = [],
          wF = [],
          bF = [],
          XF = [],
          qF = [],
          pF = [],
          kF = [],
          GF = [],
          xF = [],
          nF = [],
          PF = [],
          UF = [],
          LF = [],
          tF = [],
          YA = [],
          rA = [],
          DA = [],
          FA = [],
          AA = [],
          IA = [],
          RA = [],
          OA = [],
          gA = [],
          aA = [],
          vA = [],
          uA = [],
          sA = [],
          iA = [],
          yA = [],
          QA = [],
          oA = [],
          WA = [],
          EA = [],
          mA = [],
          VA = [],
          SA = [],
          lA = [],
          TA = [],
          eA = [],
          NA = [],
          BA = [],
          cA = [],
          KA = [],
          HA = [],
          zA = [],
          ZA = [],
          CA = [],
          fA = [],
          jA = [],
          hA = [],
          dA = [],
          JA = [],
          MA = [],
          wA = [],
          bA = [],
          XA = [],
          qA = [],
          pA = [],
          kA = [],
          GA = [],
          xA = [],
          nA = [],
          PA = [],
          UA = [],
          LA = [],
          tA = [],
          YI = [],
          rI = [],
          DI = [],
          FI = [],
          AI = [],
          II = [],
          RI = [],
          OI = [],
          gI = [],
          aI = [],
          vI = [],
          uI = [],
          sI = [],
          iI = [],
          yI = [],
          QI = [];
        return YY = class extends ND {
          get diffuseTexture() {
            return (0, FY.d)(this, rY, "f")
          }
          set diffuseTexture(YY) {
            (0, FY.g)(this, rY, YY, "f")
          }
          get ambientTexture() {
            return (0, FY.d)(this, vY, "f")
          }
          set ambientTexture(YY) {
            (0, FY.g)(this, vY, YY, "f")
          }
          get opacityTexture() {
            return (0, FY.d)(this, iY, "f")
          }
          set opacityTexture(YY) {
            (0, FY.g)(this, iY, YY, "f")
          }
          get reflectionTexture() {
            return (0, FY.d)(this, eY, "f")
          }
          set reflectionTexture(YY) {
            (0, FY.g)(this, eY, YY, "f")
          }
          get emissiveTexture() {
            return (0, FY.d)(this, NY, "f")
          }
          set emissiveTexture(YY) {
            (0, FY.g)(this, NY, YY, "f")
          }
          get specularTexture() {
            return (0, FY.d)(this, BY, "f")
          }
          set specularTexture(YY) {
            (0, FY.g)(this, BY, YY, "f")
          }
          get bumpTexture() {
            return (0, FY.d)(this, cY, "f")
          }
          set bumpTexture(YY) {
            (0, FY.g)(this, cY, YY, "f")
          }
          get lightmapTexture() {
            return (0, FY.d)(this, KY, "f")
          }
          set lightmapTexture(YY) {
            (0, FY.g)(this, KY, YY, "f")
          }
          get refractionTexture() {
            return (0, FY.d)(this, zY, "f")
          }
          set refractionTexture(YY) {
            (0, FY.g)(this, zY, YY, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, FY.d)(this, fY, "f")
          }
          set useAlphaFromDiffuseTexture(YY) {
            (0, FY.g)(this, fY, YY, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, FY.d)(this, jY, "f")
          }
          set useEmissiveAsIllumination(YY) {
            (0, FY.g)(this, jY, YY, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, FY.d)(this, hY, "f")
          }
          set linkEmissiveWithDiffuse(YY) {
            (0, FY.g)(this, hY, YY, "f")
          }
          get useSpecularOverAlpha() {
            return (0, FY.d)(this, dY, "f")
          }
          set useSpecularOverAlpha(YY) {
            (0, FY.g)(this, dY, YY, "f")
          }
          get useReflectionOverAlpha() {
            return (0, FY.d)(this, JY, "f")
          }
          set useReflectionOverAlpha(YY) {
            (0, FY.g)(this, JY, YY, "f")
          }
          get disableLighting() {
            return (0, FY.d)(this, MY, "f")
          }
          set disableLighting(YY) {
            (0, FY.g)(this, MY, YY, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, FY.d)(this, wY, "f")
          }
          set useObjectSpaceNormalMap(YY) {
            (0, FY.g)(this, wY, YY, "f")
          }
          get useParallax() {
            return (0, FY.d)(this, bY, "f")
          }
          set useParallax(YY) {
            (0, FY.g)(this, bY, YY, "f")
          }
          get useParallaxOcclusion() {
            return (0, FY.d)(this, XY, "f")
          }
          set useParallaxOcclusion(YY) {
            (0, FY.g)(this, XY, YY, "f")
          }
          get roughness() {
            return (0, FY.d)(this, qY, "f")
          }
          set roughness(YY) {
            (0, FY.g)(this, qY, YY, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, FY.d)(this, pY, "f")
          }
          set useLightmapAsShadowmap(YY) {
            (0, FY.g)(this, pY, YY, "f")
          }
          get diffuseFresnelParameters() {
            return (0, FY.d)(this, kY, "f")
          }
          set diffuseFresnelParameters(YY) {
            (0, FY.g)(this, kY, YY, "f")
          }
          get opacityFresnelParameters() {
            return (0, FY.d)(this, GY, "f")
          }
          set opacityFresnelParameters(YY) {
            (0, FY.g)(this, GY, YY, "f")
          }
          get reflectionFresnelParameters() {
            return (0, FY.d)(this, xY, "f")
          }
          set reflectionFresnelParameters(YY) {
            (0, FY.g)(this, xY, YY, "f")
          }
          get refractionFresnelParameters() {
            return (0, FY.d)(this, nY, "f")
          }
          set refractionFresnelParameters(YY) {
            (0, FY.g)(this, nY, YY, "f")
          }
          get emissiveFresnelParameters() {
            return (0, FY.d)(this, PY, "f")
          }
          set emissiveFresnelParameters(YY) {
            (0, FY.g)(this, PY, YY, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, FY.d)(this, UY, "f")
          }
          set useReflectionFresnelFromSpecular(YY) {
            (0, FY.g)(this, UY, YY, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, FY.d)(this, LY, "f")
          }
          set useGlossinessFromSpecularMapAlpha(YY) {
            (0, FY.g)(this, LY, YY, "f")
          }
          get maxSimultaneousLights() {
            return (0, FY.d)(this, tY, "f")
          }
          set maxSimultaneousLights(YY) {
            (0, FY.g)(this, tY, YY, "f")
          }
          get invertNormalMapX() {
            return (0, FY.d)(this, Yr, "f")
          }
          set invertNormalMapX(YY) {
            (0, FY.g)(this, Yr, YY, "f")
          }
          get invertNormalMapY() {
            return (0, FY.d)(this, rr, "f")
          }
          set invertNormalMapY(YY) {
            (0, FY.g)(this, rr, YY, "f")
          }
          get twoSidedLighting() {
            return (0, FY.d)(this, Dr, "f")
          }
          set twoSidedLighting(YY) {
            (0, FY.g)(this, Dr, YY, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, FY.d)(this, Fr, "f")
          }
          set applyDecalMapAfterDetailMap(YY) {
            (0, FY.g)(this, Fr, YY, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(DY, AY) {
            super(DY, AY, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || YY.ForceGLSL), this._diffuseTexture = (0, FY.j)(this, BD, null), rY.set(this, ((0, FY.j)(this, cD), (0, FY.j)(this, KD, void 0))), this._ambientTexture = ((0, FY.j)(this, HD), (0, FY.j)(this, zD, null)), vY.set(this, ((0, FY.j)(this, ZD), (0, FY.j)(this, CD, void 0))), this._opacityTexture = ((0, FY.j)(this, fD), (0, FY.j)(this, jD, null)), iY.set(this, ((0, FY.j)(this, hD), (0, FY.j)(this, dD, void 0))), this._reflectionTexture = ((0, FY.j)(this, JD), (0, FY.j)(this, MD, null)), eY.set(this, ((0, FY.j)(this, wD), (0, FY.j)(this, bD, void 0))), this._emissiveTexture = ((0, FY.j)(this, XD), (0, FY.j)(this, qD, null)), NY.set(this, ((0, FY.j)(this, pD), (0, FY.j)(this, kD, void 0))), this._specularTexture = ((0, FY.j)(this, GD), (0, FY.j)(this, xD, null)), BY.set(this, ((0, FY.j)(this, nD), (0, FY.j)(this, PD, void 0))), this._bumpTexture = ((0, FY.j)(this, UD), (0, FY.j)(this, LD, null)), cY.set(this, ((0, FY.j)(this, tD), (0, FY.j)(this, YF, void 0))), this._lightmapTexture = ((0, FY.j)(this, rF), (0, FY.j)(this, DF, null)), KY.set(this, ((0, FY.j)(this, FF), (0, FY.j)(this, AF, void 0))), this._refractionTexture = ((0, FY.j)(this, IF), (0, FY.j)(this, RF, null)), zY.set(this, ((0, FY.j)(this, OF), (0, FY.j)(this, gF, void 0))), this.ambientColor = ((0, FY.j)(this, aF), (0, FY.j)(this, vF, new OY.c(0, 0, 0))), this.diffuseColor = ((0, FY.j)(this, uF), (0, FY.j)(this, sF, new OY.c(1, 1, 1))), this.specularColor = ((0, FY.j)(this, iF), (0, FY.j)(this, yF, new OY.c(1, 1, 1))), this.emissiveColor = ((0, FY.j)(this, QF), (0, FY.j)(this, oF, new OY.c(0, 0, 0))), this.specularPower = ((0, FY.j)(this, WF), (0, FY.j)(this, EF, 64)), this._useAlphaFromDiffuseTexture = ((0, FY.j)(this, mF), (0, FY.j)(this, VF, !1)), fY.set(this, ((0, FY.j)(this, SF), (0, FY.j)(this, lF, void 0))), this._useEmissiveAsIllumination = ((0, FY.j)(this, TF), (0, FY.j)(this, eF, !1)), jY.set(this, ((0, FY.j)(this, NF), (0, FY.j)(this, BF, void 0))), this._linkEmissiveWithDiffuse = ((0, FY.j)(this, cF), (0, FY.j)(this, KF, !1)), hY.set(this, ((0, FY.j)(this, HF), (0, FY.j)(this, zF, void 0))), this._useSpecularOverAlpha = ((0, FY.j)(this, ZF), (0, FY.j)(this, CF, !1)), dY.set(this, ((0, FY.j)(this, fF), (0, FY.j)(this, jF, void 0))), this._useReflectionOverAlpha = ((0, FY.j)(this, hF), (0, FY.j)(this, dF, !1)), JY.set(this, ((0, FY.j)(this, JF), (0, FY.j)(this, MF, void 0))), this._disableLighting = ((0, FY.j)(this, wF), (0, FY.j)(this, bF, !1)), MY.set(this, ((0, FY.j)(this, XF), (0, FY.j)(this, qF, void 0))), this._useObjectSpaceNormalMap = ((0, FY.j)(this, pF), (0, FY.j)(this, kF, !1)), wY.set(this, ((0, FY.j)(this, GF), (0, FY.j)(this, xF, void 0))), this._useParallax = ((0, FY.j)(this, nF), (0, FY.j)(this, PF, !1)), bY.set(this, ((0, FY.j)(this, UF), (0, FY.j)(this, LF, void 0))), this._useParallaxOcclusion = ((0, FY.j)(this, tF), (0, FY.j)(this, YA, !1)), XY.set(this, ((0, FY.j)(this, rA), (0, FY.j)(this, DA, void 0))), this.parallaxScaleBias = ((0, FY.j)(this, FA), (0, FY.j)(this, AA, .05)), this._roughness = ((0, FY.j)(this, IA), (0, FY.j)(this, RA, 0)), qY.set(this, ((0, FY.j)(this, OA), (0, FY.j)(this, gA, void 0))), this.indexOfRefraction = ((0, FY.j)(this, aA), (0, FY.j)(this, vA, .98)), this.invertRefractionY = ((0, FY.j)(this, uA), (0, FY.j)(this, sA, !0)), this.alphaCutOff = ((0, FY.j)(this, iA), (0, FY.j)(this, yA, .4)), this._useLightmapAsShadowmap = ((0, FY.j)(this, QA), (0, FY.j)(this, oA, !1)), pY.set(this, ((0, FY.j)(this, WA), (0, FY.j)(this, EA, void 0))), this._diffuseFresnelParameters = ((0, FY.j)(this, mA), (0, FY.j)(this, VA, void 0)), kY.set(this, ((0, FY.j)(this, SA), (0, FY.j)(this, lA, void 0))), this._opacityFresnelParameters = ((0, FY.j)(this, TA), (0, FY.j)(this, eA, void 0)), GY.set(this, ((0, FY.j)(this, NA), (0, FY.j)(this, BA, void 0))), this._reflectionFresnelParameters = ((0, FY.j)(this, cA), (0, FY.j)(this, KA, void 0)), xY.set(this, ((0, FY.j)(this, HA), (0, FY.j)(this, zA, void 0))), this._refractionFresnelParameters = ((0, FY.j)(this, ZA), (0, FY.j)(this, CA, void 0)), nY.set(this, ((0, FY.j)(this, fA), (0, FY.j)(this, jA, void 0))), this._emissiveFresnelParameters = ((0, FY.j)(this, hA), (0, FY.j)(this, dA, void 0)), PY.set(this, ((0, FY.j)(this, JA), (0, FY.j)(this, MA, void 0))), this._useReflectionFresnelFromSpecular = ((0, FY.j)(this, wA), (0, FY.j)(this, bA, !1)), UY.set(this, ((0, FY.j)(this, XA), (0, FY.j)(this, qA, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, FY.j)(this, pA), (0, FY.j)(this, kA, !1)), LY.set(this, ((0, FY.j)(this, GA), (0, FY.j)(this, xA, void 0))), this._maxSimultaneousLights = ((0, FY.j)(this, nA), (0, FY.j)(this, PA, 4)), tY.set(this, ((0, FY.j)(this, UA), (0, FY.j)(this, LA, void 0))), this._invertNormalMapX = ((0, FY.j)(this, tA), (0, FY.j)(this, YI, !1)), Yr.set(this, ((0, FY.j)(this, rI), (0, FY.j)(this, DI, void 0))), this._invertNormalMapY = ((0, FY.j)(this, FI), (0, FY.j)(this, AI, !1)), rr.set(this, ((0, FY.j)(this, II), (0, FY.j)(this, RI, void 0))), this._twoSidedLighting = ((0, FY.j)(this, OI), (0, FY.j)(this, gI, !1)), Dr.set(this, ((0, FY.j)(this, aI), (0, FY.j)(this, vI, void 0))), this._applyDecalMapAfterDetailMap = ((0, FY.j)(this, uI), (0, FY.j)(this, sI, !1)), Fr.set(this, ((0, FY.j)(this, iI), (0, FY.j)(this, yI, void 0))), this._vertexPullingMetadata = ((0, FY.j)(this, QI), null), this._renderTargets = new IY.f(16), this._globalAmbientColor = new OY.c(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new WY.d(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new aY.d, this.getRenderTargetTextures = () => (this._renderTargets.reset(), YY.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), YY.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(YY.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(YY.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === sY.c.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== sY.c.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(rY, DY) {
            let FY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const AY = DY._drawWrapper;
            if (AY.effect && this.isFrozen && AY._wasPreviouslyReady && AY._wasPreviouslyUsingInstances === FY) return !0;
            DY.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), DY.materialDefines = new ZY(this._eventInfo.defineNames));
            const IY = this.hT(),
              RY = DY.materialDefines;
            if (this._isReadyForSubMesh(DY)) return !0;
            const OY = IY.ky();
            if (RY._needNormals = (0, VY.cb)(IY, rY, RY, !0, this._maxSimultaneousLights, this._disableLighting), !(0, VY.b)(IY, rY, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, VY.gb)(IY, RY);
            const vY = this.needAlphaBlendingForMesh(rY) && this.hT().useOrderIndependentTransparency;
            if ((0, VY.kb)(IY, RY, this.canRenderToMRT && !vY), (0, VY.ib)(IY, RY, vY), TY.d.PrepareDefines(OY.currentRenderPassId, rY, RY), RY._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, RY._needUVs = !1;
              for (let YY = 1; YY <= 6; ++YY) RY["MAINUV" + YY] = !1;
              if (IY.texturesEnabled) {
                if (RY.DIFFUSEDIRECTUV = 0, RY.BUMPDIRECTUV = 0, RY.AMBIENTDIRECTUV = 0, RY.OPACITYDIRECTUV = 0, RY.EMISSIVEDIRECTUV = 0, RY.SPECULARDIRECTUV = 0, RY.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && YY.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, VY.eb)(this._diffuseTexture, RY, "DIFFUSE")
                } else RY.DIFFUSE = !1;
                if (this._ambientTexture && YY.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, VY.eb)(this._ambientTexture, RY, "AMBIENT")
                } else RY.AMBIENT = !1;
                if (this._opacityTexture && YY.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, VY.eb)(this._opacityTexture, RY, "OPACITY"), RY.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else RY.OPACITY = !1;
                if (this._reflectionTexture && YY.ReflectionTextureEnabled ? (RY.ROUGHNESS = this._roughness > 0, RY.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (RY.ROUGHNESS = !1, RY.REFLECTIONOVERALPHA = !1), !(0, VY.$)(IY, this._reflectionTexture, RY)) return !1;
                if (this._emissiveTexture && YY.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, VY.eb)(this._emissiveTexture, RY, "EMISSIVE")
                } else RY.EMISSIVE = !1;
                if (this._lightmapTexture && YY.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, VY.eb)(this._lightmapTexture, RY, "LIGHTMAP"), RY.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, RY.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else RY.LIGHTMAP = !1;
                if (this._specularTexture && YY.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, VY.eb)(this._specularTexture, RY, "SPECULAR"), RY.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else RY.SPECULAR = !1;
                if (IY.ky().getCaps().standardDerivatives && this._bumpTexture && YY.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, VY.eb)(this._bumpTexture, RY, "BUMP"), RY.PARALLAX = this._useParallax, RY.PARALLAX_RHS = IY.useRightHandedSystem, RY.PARALLAXOCCLUSION = this._useParallaxOcclusion, RY.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else RY.BUMP = !1, RY.PARALLAX = !1, RY.PARALLAX_RHS = !1, RY.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && YY.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  RY._needUVs = !0, RY.REFRACTION = !0, RY.REFRACTIONMAP_3D = this._refractionTexture.isCube, RY.RGBDREFRACTION = this._refractionTexture.isRGBD, RY.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else RY.REFRACTION = !1;
                RY.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else RY.DIFFUSE = !1, RY.AMBIENT = !1, RY.OPACITY = !1, RY.REFLECTION = !1, RY.EMISSIVE = !1, RY.LIGHTMAP = !1, RY.BUMP = !1, RY.REFRACTION = !1;
              RY.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), RY.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, RY.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, RY.SPECULAROVERALPHA = this._useSpecularOverAlpha, RY.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, RY.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, RY.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(rY), RY.TEXTURE_REPETITION_MODE = OY.version > 1 || OY.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = RY, this._eventInfo.subMesh = DY, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (RY._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(RY), RY.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, RY.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (RY._areFresnelDirty && (YY.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (RY.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, RY.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, RY.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, RY.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, RY.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, RY.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, RY._needNormals = !0, RY.FRESNEL = !0) : RY.FRESNEL = !1), RY.AREALIGHTUSED || RY.CLUSTLIGHT_BATCH)
              for (let YY = 0; YY < rY.lightSources.length; YY++)
                if (!rY.lightSources[YY]._isReady()) return !1;
            (0, VY.fb)(rY, IY, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(rY), RY, this._applyDecalMapAfterDetailMap, this._useVertexPulling, DY.getRenderingMesh(), this._isVertexOutputInvariant), (0, VY._)(IY, OY, this, RY, FY, null, DY.getRenderingMesh().hasThinInstances), this._eventInfo.defines = RY, this._eventInfo.mesh = rY, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, VY.W)(rY, RY, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let sY = !1;
            if (RY.isDirty) {
              const FY = RY._areLightsDisposed;
              RY.markAsProcessed();
              const AY = new oY.e;
              RY.REFLECTION && AY.addFallback(0, "REFLECTION"), RY.SPECULAR && AY.addFallback(0, "SPECULAR"), RY.BUMP && AY.addFallback(0, "BUMP"), RY.PARALLAX && AY.addFallback(1, "PARALLAX"), RY.PARALLAX_RHS && AY.addFallback(1, "PARALLAX_RHS"), RY.PARALLAXOCCLUSION && AY.addFallback(0, "PARALLAXOCCLUSION"), RY.SPECULAROVERALPHA && AY.addFallback(0, "SPECULAROVERALPHA"), RY.FOG && AY.addFallback(1, "FOG"), RY.POINTSIZE && AY.addFallback(0, "POINTSIZE"), RY.LOGARITHMICDEPTH && AY.addFallback(0, "LOGARITHMICDEPTH"), (0, VY.C)(RY, AY, this._maxSimultaneousLights), RY.SPECULARTERM && AY.addFallback(0, "SPECULARTERM"), RY.DIFFUSEFRESNEL && AY.addFallback(1, "DIFFUSEFRESNEL"), RY.OPACITYFRESNEL && AY.addFallback(2, "OPACITYFRESNEL"), RY.REFLECTIONFRESNEL && AY.addFallback(3, "REFLECTIONFRESNEL"), RY.EMISSIVEFRESNEL && AY.addFallback(4, "EMISSIVEFRESNEL"), RY.FRESNEL && AY.addFallback(4, "FRESNEL"), RY.MULTIVIEW && AY.addFallback(0, "MULTIVIEW");
              const vY = [gY.l.PositionKind];
              RY.NORMAL && vY.push(gY.l.NormalKind), RY.TANGENT && vY.push(gY.l.TangentKind);
              for (let YY = 1; YY <= 6; ++YY) RY["UV" + YY] && vY.push(`uv${1===YY?"":YY}`);
              RY.VERTEXCOLOR && vY.push(gY.l.ColorKind), (0, VY.J)(vY, rY, RY, AY), (0, VY.N)(vY, RY), (0, VY.R)(vY, rY, RY), (0, VY.F)(vY, rY, RY);
              let iY = "default";
              const yY = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                QY = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, VY.ob)(yY, QY, !1);
              const WY = ["Material", "Scene", "Mesh"],
                SY = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: RY.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = AY, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = RY, this._eventInfo.uniforms = yY, this._eventInfo.attributes = vY, this._eventInfo.samplers = QY, this._eventInfo.uniformBuffersNames = WY, this._eventInfo.customCode = void 0, this._eventInfo.mesh = rY, this._eventInfo.indexParameters = SY, this._callbackPluginEventGeneric(128, this._eventInfo), TY.d.AddUniformsAndSamplers(yY, QY), aY.d.AddUniforms(yY), aY.d.AddSamplers(QY), uY.b && (uY.b.PrepareUniforms(yY, RY), uY.b.PrepareSamplers(QY, RY)), (0, VY.sb)({
                  uniformsNames: yY,
                  uniformBuffersNames: WY,
                  samplers: QY,
                  defines: RY,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, EY.b)(yY), this._useVertexPulling) {
                const YY = DY.getRenderingMesh(),
                  rY = YY?.geometry;
                rY && (this._vertexPullingMetadata = (0, mY.c)(rY), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((YY, rY) => {
                  yY.push(`vp_${rY}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const lY = {};
              this.customShaderNameResolve && (iY = this.customShaderNameResolve(iY, yY, WY, QY, RY, vY, lY));
              const eY = RY.toString(),
                NY = DY.effect,
                BY = IY.ky().createEffect(iY, {
                  attributes: vY,
                  uniformsNames: yY,
                  uniformBuffersNames: WY,
                  samplers: QY,
                  defines: eY,
                  fallbacks: AY,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: SY,
                  processFinalCode: lY.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: RY.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: YY._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, OY);
              if (this._eventInfo.customCode = void 0, BY)
                if (this._onEffectCreatedObservable && (HY.effect = BY, HY.subMesh = DY, this._onEffectCreatedObservable.notifyObservers(HY)), this.allowShaderHotSwapping && NY && !BY.isReady()) {
                  if (RY.markAsUnprocessed(), sY = this.isFrozen, FY) return RY._areLightsDisposed = !0, !1
                } else IY.resetCachedMaterial(), DY.setEffect(BY, RY, this._materialContext)
            }
            return !(!DY.effect || !DY.effect.isReady()) && (RY._renderId = IY.getRenderId(), AY._wasPreviouslyReady = !sY, AY._wasPreviouslyUsingInstances = FY, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const YY = this._uniformBuffer;
            YY.addUniform("diffuseLeftColor", 4), YY.addUniform("diffuseRightColor", 4), YY.addUniform("opacityParts", 4), YY.addUniform("reflectionLeftColor", 4), YY.addUniform("reflectionRightColor", 4), YY.addUniform("refractionLeftColor", 4), YY.addUniform("refractionRightColor", 4), YY.addUniform("emissiveLeftColor", 4), YY.addUniform("emissiveRightColor", 4), YY.addUniform("vDiffuseInfos", 2), YY.addUniform("vAmbientInfos", 2), YY.addUniform("vOpacityInfos", 2), YY.addUniform("vEmissiveInfos", 2), YY.addUniform("vLightmapInfos", 2), YY.addUniform("vSpecularInfos", 2), YY.addUniform("vBumpInfos", 3), YY.addUniform("diffuseMatrix", 16), YY.addUniform("ambientMatrix", 16), YY.addUniform("opacityMatrix", 16), YY.addUniform("emissiveMatrix", 16), YY.addUniform("lightmapMatrix", 16), YY.addUniform("specularMatrix", 16), YY.addUniform("bumpMatrix", 16), YY.addUniform("vTangentSpaceParams", 2), YY.addUniform("pointSize", 1), YY.addUniform("alphaCutOff", 1), YY.addUniform("refractionMatrix", 16), YY.addUniform("vRefractionInfos", 4), YY.addUniform("vRefractionPosition", 3), YY.addUniform("vRefractionSize", 3), YY.addUniform("vSpecularColor", 4), YY.addUniform("vEmissiveColor", 3), YY.addUniform("vDiffuseColor", 4), YY.addUniform("vAmbientColor", 3), YY.addUniform("cameraInfo", 4), YY.addUniform("vTextureRepetitionHexTilingParams", 4), (0, VY.nb)(YY, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(rY, DY, FY) {
            const AY = this.hT(),
              IY = FY.materialDefines;
            if (!IY) return;
            const gY = FY.effect;
            if (!gY) return;
            this._activeEffect = gY, DY.getMeshUniformBuffer().bindToEffect(gY, "Mesh"), DY.transferToEffect(rY), this._uniformBuffer.bindToEffect(gY, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, AY, DY, rY, this.isFrozen), TY.d.Bind(AY.ky().currentRenderPassId, this._activeEffect, DY, rY, this);
            const aY = AY.activeCamera;
            aY ? this._uniformBuffer.updateFloat4("cameraInfo", aY.minZ, aY.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const vY = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", vY[0], vY[1], vY[2], vY[3]), this._eventInfo.subMesh = FY, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), IY.OBJECTSPACE_NORMALMAP && (rY.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const uY = this._mustRebind(AY, gY, FY, DY.visibility),
              sY = AY.ky()._features.needToAlwaysBindUniformBuffers;
            (0, VY.c)(DY, gY), this._vertexPullingMetadata && (0, mY.b)(gY, this._vertexPullingMetadata);
            const iY = this._uniformBuffer;
            if (uY) {
              if (this.bindViewProjection(gY), !iY.useUbo || !this.isFrozen || !iY.isSync || FY._drawWrapper._forceRebindOnNextCall) {
                if (YY.FresnelEnabled && IY.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (iY.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), iY.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const YY = OY.i.Color3[0];
                    YY.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), iY.updateColor4("opacityParts", YY, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (iY.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), iY.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (iY.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), iY.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (iY.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), iY.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (IY.ALPHATEST && iY.updateFloat("alphaCutOff", this.alphaCutOff), AY.texturesEnabled && (this._diffuseTexture && YY.DiffuseTextureEnabled && (iY.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, VY.y)(this._diffuseTexture, iY, "diffuse")), this._ambientTexture && YY.AmbientTextureEnabled && (iY.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, VY.y)(this._ambientTexture, iY, "ambient")), this._opacityTexture && YY.OpacityTextureEnabled && (iY.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, VY.y)(this._opacityTexture, iY, "opacity")), (0, VY.i)(AY, IY, iY, OY.c.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && YY.ReflectionTextureEnabled || iY.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && YY.EmissiveTextureEnabled && (iY.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, VY.y)(this._emissiveTexture, iY, "emissive")), this._lightmapTexture && YY.LightmapTextureEnabled && (iY.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, VY.y)(this._lightmapTexture, iY, "lightmap")), this._specularTexture && YY.SpecularTextureEnabled && (iY.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, VY.y)(this._specularTexture, iY, "specular")), this._bumpTexture && AY.ky().getCaps().standardDerivatives && YY.BumpTextureEnabled && (iY.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, VY.y)(this._bumpTexture, iY, "bump"), AY._mirroredCameraPosition ? iY.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : iY.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && YY.RefractionTextureEnabled)) {
                  let YY = 1;
                  if (this._refractionTexture.isCube || (iY.m_("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (YY = this._refractionTexture.depth)), iY.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, YY, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const YY = this._refractionTexture;
                    iY.updateVector3("vRefractionPosition", YY.boundingBoxPosition), iY.updateVector3("vRefractionSize", YY.boundingBoxSize)
                  }
                }
                this.pointsCloud && iY.updateFloat("pointSize", this.pointSize), iY.updateColor4("vSpecularColor", this.specularColor, this.specularPower), iY.updateColor3("vEmissiveColor", YY.EmissiveTextureEnabled ? this.emissiveColor : OY.c.BlackReadOnly), iY.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), AY.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), iY.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              AY.texturesEnabled && (this._diffuseTexture && YY.DiffuseTextureEnabled && gY.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && YY.AmbientTextureEnabled && gY.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && YY.OpacityTextureEnabled && gY.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && YY.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? gY.setTexture("reflectionCubeSampler", this._reflectionTexture) : gY.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && YY.EmissiveTextureEnabled && gY.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && YY.LightmapTextureEnabled && gY.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && YY.SpecularTextureEnabled && gY.setTexture("specularSampler", this._specularTexture), this._bumpTexture && AY.ky().getCaps().standardDerivatives && YY.BumpTextureEnabled && gY.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && YY.RefractionTextureEnabled && (this._refractionTexture.isCube ? gY.setTexture("refractionCubeSampler", this._refractionTexture) : gY.setTexture("refraction2DSampler", this._refractionTexture))), this.hT().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(DY) && this.hT().depthPeelingRenderer.bind(gY), this._eventInfo.subMesh = FY, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, EY.c)(gY, this, AY), this.bindEyePosition(gY)
            } else sY && (this._needToBindSceneUbo = !0);
            !uY && this.isFrozen && !sY || !AY.lightsEnabled || this._disableLighting || (0, VY.n)(AY, DY, gY, IY, this._maxSimultaneousLights), !uY && this.isFrozen || ((AY.fogEnabled && DY.applyFog && AY.fogMode !== RY.g.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || DY.receiveShadows || IY.PREPASS || IY.CLUSTLIGHT_BATCH) && this.bindView(gY), (0, VY.f)(AY, DY, gY), IY.NUM_MORPH_INFLUENCERS && (0, VY.v)(DY, gY), IY.BAKED_VERTEX_ANIMATION_TEXTURE && DY.bakedVertexAnimationManager?.bind(gY, IY.INSTANCES), this.useLogarithmicDepth && (0, VY.r)(IY, gY, AY), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(DY, this._activeEffect, FY), iY.update()
          }
          _canBindRunFollower(rY, DY, FY, AY, IY) {
            const RY = rY.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === YY.prototype.isReadyForSubMesh && this.bindForSubMesh === YY.prototype.bindForSubMesh && this._mustRebind === yY.e.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !DY._features.needToAlwaysBindUniformBuffers && !(RY && RY.enabled && RY.currentRTisSceneRT) && !TY.d._Configurations[DY.currentRenderPassId] && !AY.materialDefines?.OBJECTSPACE_NORMALMAP && !FY.skeleton && !IY._bonesComputationForcedToCPU
          }
          _bindRunFollower(YY, rY, DY, FY) {
            this._activeEffect = FY, rY.getMeshUniformBuffer().bindToEffect(FY, "Mesh"), rY.transferToEffect(YY);
            const AY = this._uniformBuffer;
            AY.bindToEffect(FY, "Material");
            const IY = this._scene.activeCamera;
            IY ? AY.updateFloat4("cameraInfo", IY.minZ, IY.maxZ, 0, 0) : AY.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const RY = this.textureRepetitionHexTilingParams;
            AY.updateFloat4("vTextureRepetitionHexTilingParams", RY[0], RY[1], RY[2], RY[3]), this._afterBind(rY, FY, DY), AY.update()
          }
          getAnimatables() {
            const YY = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && YY.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && YY.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && YY.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && YY.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && YY.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && YY.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && YY.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && YY.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && YY.push(this._refractionTexture), YY
          }
          getActiveTextures() {
            const YY = super.getActiveTextures();
            return this._diffuseTexture && YY.push(this._diffuseTexture), this._ambientTexture && YY.push(this._ambientTexture), this._opacityTexture && YY.push(this._opacityTexture), this._reflectionTexture && YY.push(this._reflectionTexture), this._emissiveTexture && YY.push(this._emissiveTexture), this._specularTexture && YY.push(this._specularTexture), this._bumpTexture && YY.push(this._bumpTexture), this._lightmapTexture && YY.push(this._lightmapTexture), this._refractionTexture && YY.push(this._refractionTexture), YY
          }
          hasTexture(YY) {
            return !!super.hasTexture(YY) || (this._diffuseTexture === YY || (this._ambientTexture === YY || (this._opacityTexture === YY || (this._reflectionTexture === YY || (this._emissiveTexture === YY || (this._specularTexture === YY || (this._bumpTexture === YY || (this._lightmapTexture === YY || this._refractionTexture === YY))))))))
          }
          dispose(YY, rY) {
            rY && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(YY, rY)
          }
          clone(rY) {
            let DY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const AY = SY.b.Clone((() => new YY(rY, this.hT())), this, {
              cloneTexturesOnlyOnce: DY
            });
            return AY.name = rY, AY.id = rY, this.stencil.copyTo(AY.stencil), this._clonePlugins(AY, FY), AY
          }
          static Parse(rY, DY, FY) {
            const AY = SY.b.Parse((() => new YY(rY.name, DY)), rY, DY, FY);
            return rY.stencil && AY.stencil.parse(rY.stencil, DY, FY), sY.c._ParsePlugins(rY, AY, DY, FY), AY
          }
          static get DiffuseTextureEnabled() {
            return QY.c.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(YY) {
            QY.c.DiffuseTextureEnabled = YY
          }
          static get DetailTextureEnabled() {
            return QY.c.DetailTextureEnabled
          }
          static set DetailTextureEnabled(YY) {
            QY.c.DetailTextureEnabled = YY
          }
          static get AmbientTextureEnabled() {
            return QY.c.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(YY) {
            QY.c.AmbientTextureEnabled = YY
          }
          static get OpacityTextureEnabled() {
            return QY.c.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(YY) {
            QY.c.OpacityTextureEnabled = YY
          }
          static get ReflectionTextureEnabled() {
            return QY.c.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(YY) {
            QY.c.ReflectionTextureEnabled = YY
          }
          static get EmissiveTextureEnabled() {
            return QY.c.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(YY) {
            QY.c.EmissiveTextureEnabled = YY
          }
          static get SpecularTextureEnabled() {
            return QY.c.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(YY) {
            QY.c.SpecularTextureEnabled = YY
          }
          static get BumpTextureEnabled() {
            return QY.c.BumpTextureEnabled
          }
          static set BumpTextureEnabled(YY) {
            QY.c.BumpTextureEnabled = YY
          }
          static get LightmapTextureEnabled() {
            return QY.c.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(YY) {
            QY.c.LightmapTextureEnabled = YY
          }
          static get RefractionTextureEnabled() {
            return QY.c.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(YY) {
            QY.c.RefractionTextureEnabled = YY
          }
          static get ColorGradingTextureEnabled() {
            return QY.c.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(YY) {
            QY.c.ColorGradingTextureEnabled = YY
          }
          static get FresnelEnabled() {
            return QY.c.FresnelEnabled
          }
          static set FresnelEnabled(YY) {
            QY.c.FresnelEnabled = YY
          }
        }, rY = new WeakMap, vY = new WeakMap, iY = new WeakMap, eY = new WeakMap, NY = new WeakMap, BY = new WeakMap, cY = new WeakMap, KY = new WeakMap, zY = new WeakMap, fY = new WeakMap, jY = new WeakMap, hY = new WeakMap, dY = new WeakMap, JY = new WeakMap, MY = new WeakMap, wY = new WeakMap, bY = new WeakMap, XY = new WeakMap, qY = new WeakMap, pY = new WeakMap, kY = new WeakMap, GY = new WeakMap, xY = new WeakMap, nY = new WeakMap, PY = new WeakMap, UY = new WeakMap, LY = new WeakMap, tY = new WeakMap, Yr = new WeakMap, rr = new WeakMap, Dr = new WeakMap, Fr = new WeakMap, (() => {
          const rY = "function" === typeof Symbol && Symbol.metadata ? Object.create(ND[Symbol.metadata] ?? null) : void 0;
          Ar = [(0, AY.D)("diffuseTexture")], Ir = [(0, AY.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], Rr = [(0, AY.D)("ambientTexture")], Or = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], gr = [(0, AY.D)("opacityTexture")], ar = [(0, AY.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], vr = [(0, AY.D)("reflectionTexture")], ur = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], sr = [(0, AY.D)("emissiveTexture")], ir = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], yr = [(0, AY.D)("specularTexture")], Qr = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], or = [(0, AY.D)("bumpTexture")], Wr = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], Er = [(0, AY.D)("lightmapTexture")], mr = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], Vr = [(0, AY.D)("refractionTexture")], Sr = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], lr = [(0, AY.o)("ambient")], Tr = [(0, AY.o)("diffuse")], er = [(0, AY.o)("specular")], Nr = [(0, AY.o)("emissive")], Br = [(0, AY.M)()], cr = [(0, AY.M)("useAlphaFromDiffuseTexture")], Kr = [() => ({
            init(YY) {
              return void 0 === YY && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = YY), YY
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(YY) {
              this._useAlphaFromDiffuseTexture = YY
            }
          })], Hr = [(0, AY.M)("useEmissiveAsIllumination")], zr = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], Zr = [(0, AY.M)("linkEmissiveWithDiffuse")], Cr = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], fr = [(0, AY.M)("useSpecularOverAlpha")], jr = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], hr = [(0, AY.M)("useReflectionOverAlpha")], dr = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], Jr = [(0, AY.M)("disableLighting")], Mr = [(0, AY.f)("_markAllSubMeshesAsLightsDirty")], wr = [(0, AY.M)("useObjectSpaceNormalMap")], br = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], Xr = [(0, AY.M)("useParallax")], qr = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], pr = [(0, AY.M)("useParallaxOcclusion")], kr = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], Gr = [(0, AY.M)()], xr = [(0, AY.M)("roughness")], nr = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], Pr = [(0, AY.M)()], Ur = [(0, AY.M)()], Lr = [(0, AY.M)()], tr = [(0, AY.M)("useLightmapAsShadowmap")], YD = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], rD = [(0, AY.v)("diffuseFresnelParameters")], DD = [(0, AY.f)("_markAllSubMeshesAsFresnelDirty")], FD = [(0, AY.v)("opacityFresnelParameters")], AD = [(0, AY.f)("_markAllSubMeshesAsFresnelAndMiscDirty")], ID = [(0, AY.v)("reflectionFresnelParameters")], RD = [(0, AY.f)("_markAllSubMeshesAsFresnelDirty")], OD = [(0, AY.v)("refractionFresnelParameters")], gD = [(0, AY.f)("_markAllSubMeshesAsFresnelDirty")], aD = [(0, AY.v)("emissiveFresnelParameters")], vD = [(0, AY.f)("_markAllSubMeshesAsFresnelDirty")], uD = [(0, AY.M)("useReflectionFresnelFromSpecular")], sD = [(0, AY.f)("_markAllSubMeshesAsFresnelDirty")], iD = [(0, AY.M)("useGlossinessFromSpecularMapAlpha")], yD = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], QD = [(0, AY.M)("maxSimultaneousLights")], oD = [(0, AY.f)("_markAllSubMeshesAsLightsDirty")], WD = [(0, AY.M)("invertNormalMapX")], ED = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], mD = [(0, AY.M)("invertNormalMapY")], VD = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], SD = [(0, AY.M)("twoSidedLighting")], lD = [(0, AY.f)("_markAllSubMeshesAsTexturesDirty")], TD = [(0, AY.M)("applyDecalMapAfterDetailMap")], eD = [(0, AY.f)("_markAllSubMeshesAsMiscDirty")], (0, FY.i)(YY, null, Ir, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "diffuseTexture" in YY,
              get: YY => YY.diffuseTexture,
              set: (YY, rY) => {
                YY.diffuseTexture = rY
              }
            },
            metadata: rY
          }, KD, HD), (0, FY.i)(YY, null, Or, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "ambientTexture" in YY,
              get: YY => YY.ambientTexture,
              set: (YY, rY) => {
                YY.ambientTexture = rY
              }
            },
            metadata: rY
          }, CD, fD), (0, FY.i)(YY, null, ar, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "opacityTexture" in YY,
              get: YY => YY.opacityTexture,
              set: (YY, rY) => {
                YY.opacityTexture = rY
              }
            },
            metadata: rY
          }, dD, JD), (0, FY.i)(YY, null, ur, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "reflectionTexture" in YY,
              get: YY => YY.reflectionTexture,
              set: (YY, rY) => {
                YY.reflectionTexture = rY
              }
            },
            metadata: rY
          }, bD, XD), (0, FY.i)(YY, null, ir, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "emissiveTexture" in YY,
              get: YY => YY.emissiveTexture,
              set: (YY, rY) => {
                YY.emissiveTexture = rY
              }
            },
            metadata: rY
          }, kD, GD), (0, FY.i)(YY, null, Qr, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "specularTexture" in YY,
              get: YY => YY.specularTexture,
              set: (YY, rY) => {
                YY.specularTexture = rY
              }
            },
            metadata: rY
          }, PD, UD), (0, FY.i)(YY, null, Wr, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "bumpTexture" in YY,
              get: YY => YY.bumpTexture,
              set: (YY, rY) => {
                YY.bumpTexture = rY
              }
            },
            metadata: rY
          }, YF, rF), (0, FY.i)(YY, null, mr, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "lightmapTexture" in YY,
              get: YY => YY.lightmapTexture,
              set: (YY, rY) => {
                YY.lightmapTexture = rY
              }
            },
            metadata: rY
          }, AF, IF), (0, FY.i)(YY, null, Sr, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "refractionTexture" in YY,
              get: YY => YY.refractionTexture,
              set: (YY, rY) => {
                YY.refractionTexture = rY
              }
            },
            metadata: rY
          }, gF, aF), (0, FY.i)(YY, null, Kr, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "useAlphaFromDiffuseTexture" in YY,
              get: YY => YY.useAlphaFromDiffuseTexture,
              set: (YY, rY) => {
                YY.useAlphaFromDiffuseTexture = rY
              }
            },
            metadata: rY
          }, lF, TF), (0, FY.i)(YY, null, zr, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: YY => "useEmissiveAsIllumination" in YY,
              get: YY => YY.useEmissiveAsIllumination,
              set: (YY, rY) => {
                YY.useEmissiveAsIllumination = rY
              }
            },
            metadata: rY
          }, BF, cF), (0, FY.i)(YY, null, Cr, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: YY => "linkEmissiveWithDiffuse" in YY,
              get: YY => YY.linkEmissiveWithDiffuse,
              set: (YY, rY) => {
                YY.linkEmissiveWithDiffuse = rY
              }
            },
            metadata: rY
          }, zF, ZF), (0, FY.i)(YY, null, jr, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: YY => "useSpecularOverAlpha" in YY,
              get: YY => YY.useSpecularOverAlpha,
              set: (YY, rY) => {
                YY.useSpecularOverAlpha = rY
              }
            },
            metadata: rY
          }, jF, hF), (0, FY.i)(YY, null, dr, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: YY => "useReflectionOverAlpha" in YY,
              get: YY => YY.useReflectionOverAlpha,
              set: (YY, rY) => {
                YY.useReflectionOverAlpha = rY
              }
            },
            metadata: rY
          }, MF, wF), (0, FY.i)(YY, null, Mr, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: YY => "disableLighting" in YY,
              get: YY => YY.disableLighting,
              set: (YY, rY) => {
                YY.disableLighting = rY
              }
            },
            metadata: rY
          }, qF, pF), (0, FY.i)(YY, null, br, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: YY => "useObjectSpaceNormalMap" in YY,
              get: YY => YY.useObjectSpaceNormalMap,
              set: (YY, rY) => {
                YY.useObjectSpaceNormalMap = rY
              }
            },
            metadata: rY
          }, xF, nF), (0, FY.i)(YY, null, qr, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: YY => "useParallax" in YY,
              get: YY => YY.useParallax,
              set: (YY, rY) => {
                YY.useParallax = rY
              }
            },
            metadata: rY
          }, LF, tF), (0, FY.i)(YY, null, kr, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: YY => "useParallaxOcclusion" in YY,
              get: YY => YY.useParallaxOcclusion,
              set: (YY, rY) => {
                YY.useParallaxOcclusion = rY
              }
            },
            metadata: rY
          }, DA, FA), (0, FY.i)(YY, null, nr, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: YY => "roughness" in YY,
              get: YY => YY.roughness,
              set: (YY, rY) => {
                YY.roughness = rY
              }
            },
            metadata: rY
          }, gA, aA), (0, FY.i)(YY, null, YD, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: YY => "useLightmapAsShadowmap" in YY,
              get: YY => YY.useLightmapAsShadowmap,
              set: (YY, rY) => {
                YY.useLightmapAsShadowmap = rY
              }
            },
            metadata: rY
          }, EA, mA), (0, FY.i)(YY, null, DD, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: YY => "diffuseFresnelParameters" in YY,
              get: YY => YY.diffuseFresnelParameters,
              set: (YY, rY) => {
                YY.diffuseFresnelParameters = rY
              }
            },
            metadata: rY
          }, lA, TA), (0, FY.i)(YY, null, AD, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: YY => "opacityFresnelParameters" in YY,
              get: YY => YY.opacityFresnelParameters,
              set: (YY, rY) => {
                YY.opacityFresnelParameters = rY
              }
            },
            metadata: rY
          }, BA, cA), (0, FY.i)(YY, null, RD, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: YY => "reflectionFresnelParameters" in YY,
              get: YY => YY.reflectionFresnelParameters,
              set: (YY, rY) => {
                YY.reflectionFresnelParameters = rY
              }
            },
            metadata: rY
          }, zA, ZA), (0, FY.i)(YY, null, gD, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: YY => "refractionFresnelParameters" in YY,
              get: YY => YY.refractionFresnelParameters,
              set: (YY, rY) => {
                YY.refractionFresnelParameters = rY
              }
            },
            metadata: rY
          }, jA, hA), (0, FY.i)(YY, null, vD, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: YY => "emissiveFresnelParameters" in YY,
              get: YY => YY.emissiveFresnelParameters,
              set: (YY, rY) => {
                YY.emissiveFresnelParameters = rY
              }
            },
            metadata: rY
          }, MA, wA), (0, FY.i)(YY, null, sD, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: YY => "useReflectionFresnelFromSpecular" in YY,
              get: YY => YY.useReflectionFresnelFromSpecular,
              set: (YY, rY) => {
                YY.useReflectionFresnelFromSpecular = rY
              }
            },
            metadata: rY
          }, qA, pA), (0, FY.i)(YY, null, yD, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: YY => "useGlossinessFromSpecularMapAlpha" in YY,
              get: YY => YY.useGlossinessFromSpecularMapAlpha,
              set: (YY, rY) => {
                YY.useGlossinessFromSpecularMapAlpha = rY
              }
            },
            metadata: rY
          }, xA, nA), (0, FY.i)(YY, null, oD, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: YY => "maxSimultaneousLights" in YY,
              get: YY => YY.maxSimultaneousLights,
              set: (YY, rY) => {
                YY.maxSimultaneousLights = rY
              }
            },
            metadata: rY
          }, LA, tA), (0, FY.i)(YY, null, ED, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: YY => "invertNormalMapX" in YY,
              get: YY => YY.invertNormalMapX,
              set: (YY, rY) => {
                YY.invertNormalMapX = rY
              }
            },
            metadata: rY
          }, DI, FI), (0, FY.i)(YY, null, VD, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: YY => "invertNormalMapY" in YY,
              get: YY => YY.invertNormalMapY,
              set: (YY, rY) => {
                YY.invertNormalMapY = rY
              }
            },
            metadata: rY
          }, RI, OI), (0, FY.i)(YY, null, lD, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: YY => "twoSidedLighting" in YY,
              get: YY => YY.twoSidedLighting,
              set: (YY, rY) => {
                YY.twoSidedLighting = rY
              }
            },
            metadata: rY
          }, vI, uI), (0, FY.i)(YY, null, eD, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: YY => "applyDecalMapAfterDetailMap" in YY,
              get: YY => YY.applyDecalMapAfterDetailMap,
              set: (YY, rY) => {
                YY.applyDecalMapAfterDetailMap = rY
              }
            },
            metadata: rY
          }, yI, QI), (0, FY.i)(null, null, Ar, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "_diffuseTexture" in YY,
              get: YY => YY._diffuseTexture,
              set: (YY, rY) => {
                YY._diffuseTexture = rY
              }
            },
            metadata: rY
          }, BD, cD), (0, FY.i)(null, null, Rr, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "_ambientTexture" in YY,
              get: YY => YY._ambientTexture,
              set: (YY, rY) => {
                YY._ambientTexture = rY
              }
            },
            metadata: rY
          }, zD, ZD), (0, FY.i)(null, null, gr, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "_opacityTexture" in YY,
              get: YY => YY._opacityTexture,
              set: (YY, rY) => {
                YY._opacityTexture = rY
              }
            },
            metadata: rY
          }, jD, hD), (0, FY.i)(null, null, vr, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "_reflectionTexture" in YY,
              get: YY => YY._reflectionTexture,
              set: (YY, rY) => {
                YY._reflectionTexture = rY
              }
            },
            metadata: rY
          }, MD, wD), (0, FY.i)(null, null, sr, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "_emissiveTexture" in YY,
              get: YY => YY._emissiveTexture,
              set: (YY, rY) => {
                YY._emissiveTexture = rY
              }
            },
            metadata: rY
          }, qD, pD), (0, FY.i)(null, null, yr, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "_specularTexture" in YY,
              get: YY => YY._specularTexture,
              set: (YY, rY) => {
                YY._specularTexture = rY
              }
            },
            metadata: rY
          }, xD, nD), (0, FY.i)(null, null, or, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "_bumpTexture" in YY,
              get: YY => YY._bumpTexture,
              set: (YY, rY) => {
                YY._bumpTexture = rY
              }
            },
            metadata: rY
          }, LD, tD), (0, FY.i)(null, null, Er, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "_lightmapTexture" in YY,
              get: YY => YY._lightmapTexture,
              set: (YY, rY) => {
                YY._lightmapTexture = rY
              }
            },
            metadata: rY
          }, DF, FF), (0, FY.i)(null, null, Vr, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "_refractionTexture" in YY,
              get: YY => YY._refractionTexture,
              set: (YY, rY) => {
                YY._refractionTexture = rY
              }
            },
            metadata: rY
          }, RF, OF), (0, FY.i)(null, null, lr, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: YY => "ambientColor" in YY,
              get: YY => YY.ambientColor,
              set: (YY, rY) => {
                YY.ambientColor = rY
              }
            },
            metadata: rY
          }, vF, uF), (0, FY.i)(null, null, Tr, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: YY => "diffuseColor" in YY,
              get: YY => YY.diffuseColor,
              set: (YY, rY) => {
                YY.diffuseColor = rY
              }
            },
            metadata: rY
          }, sF, iF), (0, FY.i)(null, null, er, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: YY => "specularColor" in YY,
              get: YY => YY.specularColor,
              set: (YY, rY) => {
                YY.specularColor = rY
              }
            },
            metadata: rY
          }, yF, QF), (0, FY.i)(null, null, Nr, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: YY => "emissiveColor" in YY,
              get: YY => YY.emissiveColor,
              set: (YY, rY) => {
                YY.emissiveColor = rY
              }
            },
            metadata: rY
          }, oF, WF), (0, FY.i)(null, null, Br, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: YY => "specularPower" in YY,
              get: YY => YY.specularPower,
              set: (YY, rY) => {
                YY.specularPower = rY
              }
            },
            metadata: rY
          }, EF, mF), (0, FY.i)(null, null, cr, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: YY => "_useAlphaFromDiffuseTexture" in YY,
              get: YY => YY._useAlphaFromDiffuseTexture,
              set: (YY, rY) => {
                YY._useAlphaFromDiffuseTexture = rY
              }
            },
            metadata: rY
          }, VF, SF), (0, FY.i)(null, null, Hr, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: YY => "_useEmissiveAsIllumination" in YY,
              get: YY => YY._useEmissiveAsIllumination,
              set: (YY, rY) => {
                YY._useEmissiveAsIllumination = rY
              }
            },
            metadata: rY
          }, eF, NF), (0, FY.i)(null, null, Zr, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: YY => "_linkEmissiveWithDiffuse" in YY,
              get: YY => YY._linkEmissiveWithDiffuse,
              set: (YY, rY) => {
                YY._linkEmissiveWithDiffuse = rY
              }
            },
            metadata: rY
          }, KF, HF), (0, FY.i)(null, null, fr, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: YY => "_useSpecularOverAlpha" in YY,
              get: YY => YY._useSpecularOverAlpha,
              set: (YY, rY) => {
                YY._useSpecularOverAlpha = rY
              }
            },
            metadata: rY
          }, CF, fF), (0, FY.i)(null, null, hr, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: YY => "_useReflectionOverAlpha" in YY,
              get: YY => YY._useReflectionOverAlpha,
              set: (YY, rY) => {
                YY._useReflectionOverAlpha = rY
              }
            },
            metadata: rY
          }, dF, JF), (0, FY.i)(null, null, Jr, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: YY => "_disableLighting" in YY,
              get: YY => YY._disableLighting,
              set: (YY, rY) => {
                YY._disableLighting = rY
              }
            },
            metadata: rY
          }, bF, XF), (0, FY.i)(null, null, wr, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: YY => "_useObjectSpaceNormalMap" in YY,
              get: YY => YY._useObjectSpaceNormalMap,
              set: (YY, rY) => {
                YY._useObjectSpaceNormalMap = rY
              }
            },
            metadata: rY
          }, kF, GF), (0, FY.i)(null, null, Xr, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: YY => "_useParallax" in YY,
              get: YY => YY._useParallax,
              set: (YY, rY) => {
                YY._useParallax = rY
              }
            },
            metadata: rY
          }, PF, UF), (0, FY.i)(null, null, pr, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: YY => "_useParallaxOcclusion" in YY,
              get: YY => YY._useParallaxOcclusion,
              set: (YY, rY) => {
                YY._useParallaxOcclusion = rY
              }
            },
            metadata: rY
          }, YA, rA), (0, FY.i)(null, null, Gr, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: YY => "parallaxScaleBias" in YY,
              get: YY => YY.parallaxScaleBias,
              set: (YY, rY) => {
                YY.parallaxScaleBias = rY
              }
            },
            metadata: rY
          }, AA, IA), (0, FY.i)(null, null, xr, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: YY => "_roughness" in YY,
              get: YY => YY._roughness,
              set: (YY, rY) => {
                YY._roughness = rY
              }
            },
            metadata: rY
          }, RA, OA), (0, FY.i)(null, null, Pr, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: YY => "indexOfRefraction" in YY,
              get: YY => YY.indexOfRefraction,
              set: (YY, rY) => {
                YY.indexOfRefraction = rY
              }
            },
            metadata: rY
          }, vA, uA), (0, FY.i)(null, null, Ur, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: YY => "invertRefractionY" in YY,
              get: YY => YY.invertRefractionY,
              set: (YY, rY) => {
                YY.invertRefractionY = rY
              }
            },
            metadata: rY
          }, sA, iA), (0, FY.i)(null, null, Lr, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: YY => "alphaCutOff" in YY,
              get: YY => YY.alphaCutOff,
              set: (YY, rY) => {
                YY.alphaCutOff = rY
              }
            },
            metadata: rY
          }, yA, QA), (0, FY.i)(null, null, tr, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: YY => "_useLightmapAsShadowmap" in YY,
              get: YY => YY._useLightmapAsShadowmap,
              set: (YY, rY) => {
                YY._useLightmapAsShadowmap = rY
              }
            },
            metadata: rY
          }, oA, WA), (0, FY.i)(null, null, rD, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: YY => "_diffuseFresnelParameters" in YY,
              get: YY => YY._diffuseFresnelParameters,
              set: (YY, rY) => {
                YY._diffuseFresnelParameters = rY
              }
            },
            metadata: rY
          }, VA, SA), (0, FY.i)(null, null, FD, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: YY => "_opacityFresnelParameters" in YY,
              get: YY => YY._opacityFresnelParameters,
              set: (YY, rY) => {
                YY._opacityFresnelParameters = rY
              }
            },
            metadata: rY
          }, eA, NA), (0, FY.i)(null, null, ID, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: YY => "_reflectionFresnelParameters" in YY,
              get: YY => YY._reflectionFresnelParameters,
              set: (YY, rY) => {
                YY._reflectionFresnelParameters = rY
              }
            },
            metadata: rY
          }, KA, HA), (0, FY.i)(null, null, OD, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: YY => "_refractionFresnelParameters" in YY,
              get: YY => YY._refractionFresnelParameters,
              set: (YY, rY) => {
                YY._refractionFresnelParameters = rY
              }
            },
            metadata: rY
          }, CA, fA), (0, FY.i)(null, null, aD, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: YY => "_emissiveFresnelParameters" in YY,
              get: YY => YY._emissiveFresnelParameters,
              set: (YY, rY) => {
                YY._emissiveFresnelParameters = rY
              }
            },
            metadata: rY
          }, dA, JA), (0, FY.i)(null, null, uD, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: YY => "_useReflectionFresnelFromSpecular" in YY,
              get: YY => YY._useReflectionFresnelFromSpecular,
              set: (YY, rY) => {
                YY._useReflectionFresnelFromSpecular = rY
              }
            },
            metadata: rY
          }, bA, XA), (0, FY.i)(null, null, iD, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: YY => "_useGlossinessFromSpecularMapAlpha" in YY,
              get: YY => YY._useGlossinessFromSpecularMapAlpha,
              set: (YY, rY) => {
                YY._useGlossinessFromSpecularMapAlpha = rY
              }
            },
            metadata: rY
          }, kA, GA), (0, FY.i)(null, null, QD, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: YY => "_maxSimultaneousLights" in YY,
              get: YY => YY._maxSimultaneousLights,
              set: (YY, rY) => {
                YY._maxSimultaneousLights = rY
              }
            },
            metadata: rY
          }, PA, UA), (0, FY.i)(null, null, WD, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: YY => "_invertNormalMapX" in YY,
              get: YY => YY._invertNormalMapX,
              set: (YY, rY) => {
                YY._invertNormalMapX = rY
              }
            },
            metadata: rY
          }, YI, rI), (0, FY.i)(null, null, mD, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: YY => "_invertNormalMapY" in YY,
              get: YY => YY._invertNormalMapY,
              set: (YY, rY) => {
                YY._invertNormalMapY = rY
              }
            },
            metadata: rY
          }, AI, II), (0, FY.i)(null, null, SD, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: YY => "_twoSidedLighting" in YY,
              get: YY => YY._twoSidedLighting,
              set: (YY, rY) => {
                YY._twoSidedLighting = rY
              }
            },
            metadata: rY
          }, gI, aI), (0, FY.i)(null, null, TD, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: YY => "_applyDecalMapAfterDetailMap" in YY,
              get: YY => YY._applyDecalMapAfterDetailMap,
              set: (YY, rY) => {
                YY._applyDecalMapAfterDetailMap = rY
              }
            },
            metadata: rY
          }, sI, iI), rY && Object.defineProperty(YY, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: rY
          })
        })(), YY.ForceGLSL = !1, YY._ShaderLoader = new lY.c((() => [Promise.all([DY.e(307), DY.e(306)]).then((() => DY(40929))), Promise.all([DY.e(312), DY.e(308), DY.e(321), DY.e(311)]).then((() => DY(41084)))]), (() => [Promise.all([DY.e(328), DY.e(323)]).then((() => DY(41252))), Promise.all([DY.e(329), DY.e(339), DY.e(325)]).then((() => DY(41453)))])), YY
      })(),
      jY = !1;

    function hY() {
      jY || (jY = !0, (0, uY.d)(), (0, cY.i)("BABYLON.StandardMaterial", fY), RY.g.DefaultMaterialFactory = YY => new fY("default material", YY))
    }
    Object.getOwnPropertyDescriptor(fY.prototype, "decalMap") || Object.defineProperty(fY.prototype, "decalMap", (0, KY.c)("StandardMaterial", "decalMap"))
  },
  39501: (YY, rY, DY) => {
    function FY(YY) {
      return class extends YY {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    DY.d(rY, {
      e: () => FY
    })
  },
  39491: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY
    });
    class FY {
      constructor(YY, rY) {
        this._webGL = {
          load: YY,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: rY,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(YY) {
        const rY = 1 === YY ? this._webGPU : this._webGL;
        return rY.loaded ? void 0 : async () => {
          await this._loadAsync(rY)
        }
      }
      async _loadAsync(YY) {
        if (YY.loaded) return;
        let rY = YY.loadPromise;
        const DY = null === rY;
        DY && (rY = Promise.all(YY.load()), YY.loadPromise = rY);
        let FY = !1;
        try {
          await rY, FY = !0
        } finally {
          DY && this._completeLoad(YY, FY)
        }
      }
      _completeLoad(YY, rY) {
        YY.loaded = rY, YY.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);