export const id = 286;
export const ids = [286];
export const modules = {
  41655: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => YV
    });
    var JV = xV(41266);

    function YV(VV) {
      return class extends VV {
        constructor() {
          super(...arguments);
          const VV = new.target;
          if (!VV[Symbol.metadata]) {
            const eV = Object.getPrototypeOf(VV)?.[Symbol.metadata];
            VV[Symbol.metadata] = eV ? Object.create(eV) : {}
          }
          const eV = (0, JV.e)(VV[Symbol.metadata]);
          eV._imageProcessingConfiguration || (eV._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(VV) {
          this._attachImageProcessingConfiguration(VV), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(VV) {
          VV !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !VV && this.dD ? this._imageProcessingConfiguration = this.dD().imageProcessingConfiguration : VV && (this._imageProcessingConfiguration = VV), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(VV) {
          this.imageProcessingConfiguration.colorCurvesEnabled = VV
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(VV) {
          this.imageProcessingConfiguration.colorGradingEnabled = VV
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(VV) {
          this._imageProcessingConfiguration.toneMappingEnabled = VV
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(VV) {
          this._imageProcessingConfiguration.exposure = VV
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(VV) {
          this._imageProcessingConfiguration.contrast = VV
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(VV) {
          this._imageProcessingConfiguration.colorGradingTexture = VV
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(VV) {
          this._imageProcessingConfiguration.colorCurves = VV
        }
      }
    }
  },
  41535: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      e: () => YV
    });
    var JV = xV(41544);

    function YV(VV) {
      return class extends VV {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class UV extends JV.e {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  41616: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => ZV
    });
    var JV = xV(41257),
      YV = xV(41553),
      UV = xV(41263),
      yV = xV(41598),
      pV = xV(41544),
      QV = xV(41621),
      nV = xV(41583);
    class wV extends pV.e {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let ZV = (() => {
      var VV, eV, xV, pV;
      let ZV, vV, rV, kV, bV, EV, BV = QV.d,
        jV = [],
        qV = [],
        tV = [],
        FV = [],
        TV = [],
        PV = [],
        AV = [],
        NV = [],
        XV = [],
        MV = [],
        zV = [],
        GV = [];
      return VV = class extends BV {
        get texture() {
          return (0, JV.b)(this, eV, "f")
        }
        set texture(VV) {
          (0, JV.f)(this, eV, VV, "f")
        }
        get normalBlendMethod() {
          return (0, JV.b)(this, xV, "f")
        }
        set normalBlendMethod(VV) {
          (0, JV.f)(this, xV, VV, "f")
        }
        get isEnabled() {
          return (0, JV.b)(this, pV, "f")
        }
        set isEnabled(VV) {
          (0, JV.f)(this, pV, VV, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(VV) {
          let UV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(VV, "DetailMap", 140, new wV, UV), this._texture = null, eV.set(this, (0, JV.l)(this, jV, void 0)), this.diffuseBlendLevel = ((0, JV.l)(this, qV), (0, JV.l)(this, tV, 1)), this.roughnessBlendLevel = ((0, JV.l)(this, FV), (0, JV.l)(this, TV, 1)), this.bumpLevel = ((0, JV.l)(this, PV), (0, JV.l)(this, AV, 1)), this._normalBlendMethod = ((0, JV.l)(this, NV), YV.e.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), xV.set(this, (0, JV.l)(this, XV, void 0)), this._isEnabled = ((0, JV.l)(this, MV), !1), pV.set(this, (0, JV.l)(this, zV, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, JV.l)(this, GV), this._internalMarkAllSubMeshesAsTexturesDirty = VV._dirtyCallbacks[1]
        }
        isReadyForSubMesh(VV, eV, xV) {
          return !this._isEnabled || !(VV._areTexturesDirty && eV.texturesEnabled && xV.getCaps().standardDerivatives && this._texture && yV.b.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(VV, eV) {
          if (this._isEnabled) {
            VV.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const xV = eV.sk();
            VV._areTexturesDirty && (xV.getCaps().standardDerivatives && this._texture && yV.b.DetailTextureEnabled && this._isEnabled ? ((0, nV.Y)(this._texture, VV, "DETAIL"), VV.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : VV.DETAIL = !1)
          } else VV.DETAIL = !1
        }
        bindForSubMesh(VV, eV) {
          if (!this._isEnabled) return;
          const xV = this._material.isFrozen;
          VV.useUbo && xV && VV.isSync || this._texture && yV.b.DetailTextureEnabled && (VV.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, nV.y)(this._texture, VV, "detail")), eV.texturesEnabled && this._texture && yV.b.DetailTextureEnabled && VV.setTexture("detailSampler", this._texture)
        }
        hasTexture(VV) {
          return this._texture === VV
        }
        getActiveTextures(VV) {
          this._texture && VV.push(this._texture)
        }
        getAnimatables(VV) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && VV.push(this._texture)
        }
        dispose(VV) {
          VV && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(VV) {
          VV.push("detailSampler")
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
      }, eV = new WeakMap, xV = new WeakMap, pV = new WeakMap, (() => {
        const eV = "function" === typeof Symbol && Symbol.metadata ? Object.create(BV[Symbol.metadata] ?? null) : void 0;
        ZV = [(0, UV.F)("detailTexture"), (0, UV.h)("_markAllSubMeshesAsTexturesDirty")], vV = [(0, UV.J)()], rV = [(0, UV.J)()], kV = [(0, UV.J)()], bV = [(0, UV.J)(), (0, UV.h)("_markAllSubMeshesAsTexturesDirty")], EV = [(0, UV.J)(), (0, UV.h)("_markAllSubMeshesAsTexturesDirty")], (0, JV.i)(VV, null, ZV, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: VV => "texture" in VV,
            get: VV => VV.texture,
            set: (VV, eV) => {
              VV.texture = eV
            }
          },
          metadata: eV
        }, jV, qV), (0, JV.i)(VV, null, bV, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: VV => "normalBlendMethod" in VV,
            get: VV => VV.normalBlendMethod,
            set: (VV, eV) => {
              VV.normalBlendMethod = eV
            }
          },
          metadata: eV
        }, XV, MV), (0, JV.i)(VV, null, EV, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: VV => "isEnabled" in VV,
            get: VV => VV.isEnabled,
            set: (VV, eV) => {
              VV.isEnabled = eV
            }
          },
          metadata: eV
        }, zV, GV), (0, JV.i)(null, null, vV, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: VV => "diffuseBlendLevel" in VV,
            get: VV => VV.diffuseBlendLevel,
            set: (VV, eV) => {
              VV.diffuseBlendLevel = eV
            }
          },
          metadata: eV
        }, tV, FV), (0, JV.i)(null, null, rV, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: VV => "roughnessBlendLevel" in VV,
            get: VV => VV.roughnessBlendLevel,
            set: (VV, eV) => {
              VV.roughnessBlendLevel = eV
            }
          },
          metadata: eV
        }, TV, PV), (0, JV.i)(null, null, kV, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: VV => "bumpLevel" in VV,
            get: VV => VV.bumpLevel,
            set: (VV, eV) => {
              VV.bumpLevel = eV
            }
          },
          metadata: eV
        }, AV, NV), eV && Object.defineProperty(VV, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: eV
        })
      })(), VV
    })()
  },
  41544: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV
    });
    class JV {
      constructor(VV) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = VV, VV)
          for (const eV in VV) Object.prototype.hasOwnProperty.call(VV, eV) && this._setDefaultValue(eV)
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
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || VV, this._isDirty = !0
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
        for (const VV of Object.keys(this)) "_" !== VV[0] && this._keys.push(VV);
        if (this._externalProperties)
          for (const VV in this._externalProperties) - 1 === this._keys.indexOf(VV) && this._keys.push(VV)
      }
      isEqual(VV) {
        if (this._keys.length !== VV._keys.length) return !1;
        for (let eV = 0; eV < this._keys.length; eV++) {
          const xV = this._keys[eV];
          if (this[xV] !== VV[xV]) return !1
        }
        return !0
      }
      cloneTo(VV) {
        this._keys.length !== VV._keys.length && (VV._keys = this._keys.slice(0));
        for (let eV = 0; eV < this._keys.length; eV++) {
          const xV = this._keys[eV];
          VV[xV] = this[xV]
        }
      }
      reset() {
        for (const VV of this._keys) this._setDefaultValue(VV)
      }
      _setDefaultValue(VV) {
        const eV = this._externalProperties?.[VV]?.type ?? typeof this[VV],
          xV = this._externalProperties?.[VV]?.default;
        switch (eV) {
          case "number":
            this[VV] = xV ?? 0;
            break;
          case "string":
            this[VV] = xV ?? "";
            break;
          default:
            this[VV] = xV ?? !1
        }
      }
      toString() {
        let VV = "";
        for (let eV = 0; eV < this._keys.length; eV++) {
          const xV = this._keys[eV],
            JV = this[xV];
          switch (typeof JV) {
            case "number":
            case "string":
              VV += "#define " + xV + " " + JV + "\n";
              break;
            default:
              JV && (VV += "#define " + xV + "\n")
          }
        }
        return VV
      }
    }
  },
  41637: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV,
      f: () => yV,
      h: () => UV
    });
    var JV, YV = xV(38269);

    function UV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const JV = eV(VV);
      if (!Number.isInteger(JV) || JV < 0 || JV > xV) throw new Error(`Invalid geometry object ID ${JV} for mesh "${VV.name}". Object IDs must be integers between 0 and 0x${xV.toString(16).toUpperCase()}.`);
      return JV
    }

    function yV(VV, eV) {
      const xV = eV(VV);
      if (!Number.isInteger(xV) || xV < 0 || xV > 255 || 0 !== xV && 0 === (63 & xV)) throw new Error(`Invalid geometry mesh-blending tag ${xV} for mesh "${VV.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return xV
    }! function(VV) {
      VV[VV.Zero = 0] = "Zero", VV[VV.One = 1] = "One", VV[VV.MaxViewZ = 2] = "MaxViewZ", VV[VV.NoClear = 3] = "NoClear"
    }(JV || (JV = {}));
    class pV {
      static CreateConfiguration(VV) {
        return pV._Configurations[VV] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: YV.d.Zero(),
          currentViewProjection: YV.d.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, pV._Configurations[VV]
      }
      static DeleteConfiguration(VV) {
        delete pV._Configurations[VV]
      }
      static GetConfiguration(VV) {
        return pV._Configurations[VV]
      }
      static _PrepareConfiguration(VV, eV, xV) {
        const JV = pV._Configurations[VV];
        JV._attachments = eV, JV._colorAttachments = xV, JV._mrtCount = eV.length;
        let YV = "#define PREPASS\n";
        for (const UV of pV.GeometryTextureDescriptions) {
          const VV = JV.defines[UV.defineIndex];
          void 0 !== VV && (YV += `#define ${UV.define}\n#define ${UV.defineIndex} ${VV}\n`)
        }
        JV.objectIdIsRedFormat && (YV += "#define PREPASS_OBJECT_ID_R8\n"), JV._defines = YV + `#define SCENE_MRT_COUNT ${eV.length}\n`
      }
      static _PrepareStringDefines(VV, eV) {
        const xV = pV._Configurations[VV];
        return !!xV?._defines && (eV.push(xV._defines), !0)
      }
      static _BindAttachmentsForEffect(VV, eV) {
        const xV = pV._Configurations[VV.currentRenderPassId];
        return !xV?._attachments || (VV.bindAttachments(eV._multiTarget ? xV._attachments : xV._colorAttachments), eV._multiTarget || void 0 !== xV.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(VV) {
        const eV = pV._Configurations[VV.currentRenderPassId];
        eV?._colorAttachments && VV.bindAttachments(eV._colorAttachments)
      }
      static _BindColorAttachments(VV) {
        const eV = pV._Configurations[VV.currentRenderPassId];
        return !eV?._colorAttachments || (VV.bindAttachments(eV._colorAttachments), void 0 !== eV.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(VV) {
        const eV = pV._Configurations[VV.currentRenderPassId];
        return !eV?._colorAttachments || void 0 !== eV.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(VV, eV) {
        const xV = pV._Configurations[VV.currentRenderPassId];
        if (!xV) return;
        const JV = VV.getAlphaMode(),
          YV = void 0 === xV.defines.PREPASS_COLOR_INDEX || 2 === JV || 1 === JV || 17 === JV;
        eV.setFloat("geometryZeroAlphaDiscard", YV ? 1 : 0)
      }
      static AddUniformsAndSamplers(VV, eV) {
        VV.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(VV, eV) {
        for (const xV of eV)
          if (xV.hT)
            for (const eV of xV.hT) eV._removeDrawWrapper(VV)
      }
      static PrepareDefines(VV, eV, xV) {
        if (!xV._arePrePassDirty) return;
        const JV = pV._Configurations[VV];
        if (!JV) return;
        xV.PREPASS = !0;
        let YV = 0;
        for (let UV = 0; UV < pV.GeometryTextureDescriptions.length; UV++) {
          const VV = pV.GeometryTextureDescriptions[UV],
            eV = VV.define,
            yV = VV.defineIndex,
            QV = JV.defines[yV];
          void 0 !== QV ? (xV[eV] = !0, xV[yV] = QV, YV++) : (xV[eV] = !1, delete xV[yV])
        }
        xV.PREPASS_OBJECT_ID_R8 = JV.objectIdIsRedFormat, xV.SCENE_MRT_COUNT = JV._mrtCount ?? YV, xV.BONES_VELOCITY_ENABLED = eV.useBones && eV.computeBonesUsingShaders && eV.skeleton && !eV.skeleton.isUsingTextureForMatrices && -1 === JV.excludedSkinnedMesh.indexOf(eV)
      }
      static Bind(VV, eV, xV, JV, YV) {
        const QV = pV._Configurations[VV];
        if (!QV) return;
        const nV = xV.dD(),
          wV = nV.sk();
        if (QV.reverseCulling && wV.setStateCullFaceType(nV._mirroredCameraPosition ? YV.cullBackFaces : !YV.cullBackFaces), void 0 !== QV.defines.PREPASS_OBJECT_ID_INDEX) {
          const VV = QV.objectIdIsRedFormat ? 255 : 16777215;
          let JV = xV.uniqueId;
          if (QV.objectIdProvider) JV = UV(xV, QV.objectIdProvider, VV);
          else if (JV > VV) throw new Error(`Invalid geometry object ID ${JV} for mesh "${xV.name}". Object IDs must be integers between 0 and 0x${VV.toString(16).toUpperCase()}.`);
          eV.setFloat("objectId", JV)
        }
        if (void 0 !== QV.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const VV = QV.meshBlendTagProvider ? yV(xV, QV.meshBlendTagProvider) : xV.meshBlendingTag;
          eV.setInt("meshBlendTag", VV)
        }
        if (void 0 !== QV.defines.PREPASS_VELOCITY_INDEX || void 0 !== QV.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const VV = QV._currentWorldMatrices ?? (QV._currentWorldMatrices = {}),
            YV = QV._worldMatrixFrameIds ?? (QV._worldMatrixFrameIds = {});
          if (VV[xV.uniqueId] || (VV[xV.uniqueId] = JV.clone(), QV.previousWorldMatrices[xV.uniqueId] = JV.clone()), YV[xV.uniqueId] !== wV.frameId && (QV.previousWorldMatrices[xV.uniqueId].iG(VV[xV.uniqueId]), YV[xV.uniqueId] = wV.frameId), VV[xV.uniqueId].iG(JV), -1 === QV.lastUpdateFrameId ? (QV.lastUpdateFrameId = wV.frameId, QV.previousViewProjection.iG(nV.getTransformMatrix()), QV.currentViewProjection.iG(nV.getTransformMatrix())) : QV.currentViewProjection.updateFlag !== nV.getTransformMatrix().updateFlag ? (QV.lastUpdateFrameId = wV.frameId, QV.previousViewProjection.iG(QV.currentViewProjection), QV.currentViewProjection.iG(nV.getTransformMatrix())) : QV.lastUpdateFrameId !== wV.frameId && (QV.lastUpdateFrameId = wV.frameId, QV.previousViewProjection.iG(QV.currentViewProjection)), eV.setMatrix("previousWorld", QV.previousWorldMatrices[xV.uniqueId]), eV.setMatrix("previousViewProjection", QV.previousViewProjection), xV.useBones && xV.computeBonesUsingShaders && xV.skeleton) {
            const VV = xV.skeleton;
            if (!VV.isUsingTextureForMatrices || -1 === eV.getUniformIndex("boneTextureInfo")) {
              const JV = VV.getTransformMatrices(xV);
              JV && (QV.previousBones[xV.uniqueId] || (QV.previousBones[xV.uniqueId] = JV.slice()), eV.setMatrices("mPreviousBones", QV.previousBones[xV.uniqueId]), QV.previousBones[xV.uniqueId].set(JV))
            }
          }
        }
      }
    }
    pV.GeometryTextureDescriptions = [{
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
    }], pV._Configurations = {}
  },
  41621: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => vV,
      e: () => kV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(41143),
      yV = xV(41108);
    const pV = new RegExp("^([gimus]+)!");
    class QV {
      constructor(VV) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = VV, this._scene = VV.dD(), this._engine = this._scene.sk()
      }
      _addPlugin(VV) {
        for (let JV = 0; JV < this._plugins.length; ++JV)
          if (this._plugins[JV].name === VV.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !VV.isCompatible(this._material.shaderLanguage)) throw `The plugin "${VV.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const eV = VV.getClassName();
        QV._MaterialPluginClassToMainDefine[eV] || (QV._MaterialPluginClassToMainDefine[eV] = "MATERIALPLUGIN_" + ++QV._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (VV, eV) => this._handlePluginEvent(VV, eV), this._plugins.push(VV), this._plugins.sort(((VV, eV) => VV.priority - eV.priority)), this._codeInjectionPoints = {};
        const xV = {};
        xV[QV._MaterialPluginClassToMainDefine[eV]] = {
          type: "boolean",
          default: !0
        };
        for (const JV of this._plugins) JV.collectDefines(xV), this._collectPointNames("vertex", JV.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", JV.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = xV, !0
      }
      _activatePlugin(VV) {
        -1 === this._activePlugins.indexOf(VV) && (this._activePlugins.push(VV), this._activePlugins.sort(((VV, eV) => VV.priority - eV.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), VV.registerForExtraEvents && (this._activePluginsForExtraEvents.push(VV), this._activePluginsForExtraEvents.sort(((VV, eV) => VV.priority - eV.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(VV) {
        for (let eV = 0; eV < this._plugins.length; ++eV)
          if (this._plugins[eV].name === VV) return this._plugins[eV];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(VV) {
        let eV = !0;
        for (const xV of this._activePlugins) eV = eV && xV.isReadyForSubMesh(VV.defines, this._scene, this._engine, VV.subMesh);
        VV.isReadyForSubMesh = eV
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(VV) {
        for (const eV of this._activePlugins) eV.prepareDefinesBeforeAttributes(VV.defines, this._scene, VV.mesh)
      }
      _handlePluginEventPrepareDefines(VV) {
        for (const eV of this._activePlugins) eV.prepareDefines(VV.defines, this._scene, VV.mesh)
      }
      _handlePluginEventHardBindForSubMesh(VV) {
        for (const eV of this._activePluginsForExtraEvents) eV.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, VV.subMesh)
      }
      _handlePluginEventBindForSubMesh(VV) {
        for (const eV of this._activePlugins) eV.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, VV.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(VV) {
        let eV = !1;
        for (const xV of this._activePluginsForExtraEvents)
          if (eV = xV.hasRenderTargetTextures(), eV) break;
        VV.hasRenderTargetTextures = eV
      }
      _handlePluginEventFillRenderTargetTextures(VV) {
        for (const eV of this._activePluginsForExtraEvents) eV.fillRenderTargetTextures(VV.renderTargets)
      }
      _handlePluginEvent(VV, eV) {
        switch (VV) {
          case 512: {
            const VV = eV;
            for (const eV of this._activePlugins) eV.getActiveTextures(VV.activeTextures);
            break
          }
          case 256: {
            const VV = eV;
            for (const eV of this._activePlugins) eV.getAnimatables(VV.animatables);
            break
          }
          case 1024: {
            const VV = eV;
            let xV = !1;
            for (const eV of this._activePlugins)
              if (xV = eV.hasTexture(VV.texture), xV) break;
            VV.hasTexture = xV;
            break
          }
          case 2: {
            const VV = eV;
            for (const eV of this._plugins) eV.dispose(VV.forceDisposeTextures);
            break
          }
          case 4:
            eV.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const VV = eV;
            for (const eV of this._activePlugins) VV.fallbackRank = eV.addFallbacks(VV.defines, VV.fallbacks, VV.fallbackRank), eV.getAttributes(VV.attributes, this._scene, VV.mesh);
            this._uniformList.length > 0 && VV.uniforms.push(...this._uniformList), this._samplerList.length > 0 && VV.samplers.push(...this._samplerList), this._uboList.length > 0 && VV.uniformBuffersNames.push(...this._uboList), VV.customCode = this._injectCustomCode(VV, VV.customCode);
            break
          }
          case 8: {
            const VV = eV;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const xV = 1 === this._material.shaderLanguage;
            for (const eV of this._plugins) {
              const JV = eV.getUniforms(this._material.shaderLanguage);
              if (JV) {
                if (JV.ubo)
                  for (const eV of JV.ubo) {
                    if (eV.size && eV.type) {
                      const JV = eV.arraySize ?? 0;
                      if (VV.ubo.addUniform(eV.name, eV.size, JV), xV) {
                        let VV;
                        switch (eV.type) {
                          case "mat4":
                            VV = "mat4x4f";
                            break;
                          case "float":
                            VV = "f32";
                            break;
                          default:
                            VV = `${eV.type}f`
                        }
                        this._uboDeclaration += JV > 0 ? `uniform ${eV.name}: array<${VV}, ${JV}>;\n` : `uniform ${eV.name}: ${VV};\n`
                      } else this._uboDeclaration += `${eV.type} ${eV.name}${JV>0?`[${JV}]`:""};\n`
                    }
                    this._uniformList.push(eV.name)
                  }
                JV.vertex && (this._vertexDeclaration += JV.vertex + "\n"), JV.fragment && (this._fragmentDeclaration += JV.fragment + "\n"), JV.externalUniforms && this._uniformList.push(...JV.externalUniforms)
              }
              eV.getSamplers(this._samplerList), eV.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(VV, eV) {
        if (eV)
          for (const xV in eV) this._codeInjectionPoints[VV] || (this._codeInjectionPoints[VV] = {}), this._codeInjectionPoints[VV][xV] = !0
      }
      _injectCustomCode(VV, eV) {
        return (xV, JV) => {
          eV && (JV = eV(xV, JV)), this._uboDeclaration && (JV = JV.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (JV = JV.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (JV = JV.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const YV = this._codeInjectionPoints?.[xV];
          if (!YV) return JV;
          let QV = null;
          for (let eV in YV) {
            let YV = "";
            for (const JV of this._activePlugins) {
              const pV = this._material.shaderLanguage;
              let nV = JV.getCustomCode(xV, pV)?.[eV];
              nV && (JV.resolveIncludes && (null === QV && (QV = {
                defines: [],
                indexParameters: VV.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: yV.d.GetShadersRepository(pV),
                includesShadersStore: yV.d.GetIncludesShadersStore(pV),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                zYV: this._engine.zYV,
                processCodeAfterIncludes: void 0
              }), QV.isFragment = "fragment" === xV, (0, UV.j)(nV, QV, (VV => nV = VV))), YV += nV + "\n")
            }
            if (YV.length > 0)
              if ("!" === eV.charAt(0)) {
                eV = eV.substring(1);
                let VV = "g";
                if ("!" === eV.charAt(0)) VV = "", eV = eV.substring(1);
                else {
                  const xV = pV.exec(eV);
                  xV && xV.length >= 2 && (VV = xV[1], eV = eV.substring(VV.length + 1))
                }
                VV.indexOf("g") < 0 && (VV += "g");
                const xV = new RegExp(eV, VV);
                let UV = xV.exec(JV);
                for (; null !== UV;) {
                  const {
                    index: VV
                  } = UV, eV = nV(YV, UV);
                  JV = JV.substring(0, VV) + eV + JV.substring(VV + UV[0].length), xV.lastIndex = VV + eV.length, UV = xV.exec(JV)
                }
              } else {
                const VV = "#define " + eV;
                JV = JV.replace(VV, "\n" + YV + "\n" + VV)
              }
          }
          return JV
        }
      }
    }
    QV._MaterialPluginClassToMainDefine = {}, QV._MaterialPluginCounter = 0;

    function nV(VV, eV) {
      return VV.replace(/\$(\d+)/g, ((VV, xV) => {
        const JV = Number(xV);
        return JV < eV.length ? eV[JV] : ""
      }))
    }
    var wV = xV(41279),
      ZV = xV(38318);
    let vV = (() => {
        var VV;
        let eV, xV, UV, yV, pV = [],
          nV = [],
          ZV = [],
          vV = [],
          rV = [],
          kV = [],
          bV = [],
          EV = [];
        return VV = class {
          isCompatible(VV) {
            return 0 === VV
          }
          _enable(VV) {
            VV && this._pluginManager._activatePlugin(this)
          }
          constructor(VV, eV, xV, YV) {
            let UV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              yV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              wV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, JV.l)(this, pV, void 0), this.priority = ((0, JV.l)(this, nV), (0, JV.l)(this, ZV, 500)), this.resolveIncludes = ((0, JV.l)(this, vV), (0, JV.l)(this, rV, !1)), this.registerForExtraEvents = ((0, JV.l)(this, kV), (0, JV.l)(this, bV, !1)), this.doNotSerialize = ((0, JV.l)(this, EV), !1), this._material = VV, this.name = eV, this.priority = xV, this.resolveIncludes = wV, VV.pluginManager || (VV.pluginManager = new QV(VV), VV.eC.add((() => {
              VV.pluginManager = void 0
            }))), this._pluginDefineNames = YV, this._pluginManager = VV.pluginManager, UV && this._pluginManager._addPlugin(this), yV && this._enable(!0), this.markAllDefinesAsDirty = VV._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(VV, eV, xV, JV) {
            return !0
          }
          hardBindForSubMesh(VV, eV, xV, JV) {}
          bindForSubMesh(VV, eV, xV, JV) {}
          dispose(VV) {}
          getCustomCode(VV) {
            return null
          }
          collectDefines(VV) {
            if (this._pluginDefineNames)
              for (const eV of Object.keys(this._pluginDefineNames)) {
                if ("_" === eV[0]) continue;
                const xV = typeof this._pluginDefineNames[eV];
                VV[eV] = {
                  type: "number" === xV ? "number" : "string" === xV ? "string" : "boolean" === xV ? "boolean" : "object",
                  default: this._pluginDefineNames[eV]
                }
              }
          }
          prepareDefinesBeforeAttributes(VV, eV, xV) {}
          prepareDefines(VV, eV, xV) {}
          hasTexture(VV) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(VV) {}
          getActiveTextures(VV) {}
          getAnimatables(VV) {}
          addFallbacks(VV, eV, xV) {
            return xV
          }
          getSamplers(VV) {}
          getAttributes(VV, eV, xV) {}
          getUniformBuffersNames(VV) {}
          getUniforms() {
            return {}
          }
          copyTo(VV) {
            wV.b.Clone((() => VV), this)
          }
          serialize() {
            return wV.b.Serialize(this)
          }
          parse(VV, eV, xV) {
            wV.b.Parse((() => this), VV, eV, xV)
          }
        }, (() => {
          const QV = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          eV = [(0, YV.J)()], xV = [(0, YV.J)()], UV = [(0, YV.J)()], yV = [(0, YV.J)()], (0, JV.i)(null, null, eV, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: VV => "name" in VV,
              get: VV => VV.name,
              set: (VV, eV) => {
                VV.name = eV
              }
            },
            metadata: QV
          }, pV, nV), (0, JV.i)(null, null, xV, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: VV => "priority" in VV,
              get: VV => VV.priority,
              set: (VV, eV) => {
                VV.priority = eV
              }
            },
            metadata: QV
          }, ZV, vV), (0, JV.i)(null, null, UV, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: VV => "resolveIncludes" in VV,
              get: VV => VV.resolveIncludes,
              set: (VV, eV) => {
                VV.resolveIncludes = eV
              }
            },
            metadata: QV
          }, rV, kV), (0, JV.i)(null, null, yV, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: VV => "registerForExtraEvents" in VV,
              get: VV => VV.registerForExtraEvents,
              set: (VV, eV) => {
                VV.registerForExtraEvents = eV
              }
            },
            metadata: QV
          }, bV, EV), QV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QV
          })
        })(), VV
      })(),
      rV = !1;

    function kV() {
      rV || (rV = !0, (0, ZV.d)("BABYLON.MaterialPluginBase", vV))
    }
  },
  41529: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    class JV {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(VV) {
        VV.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(VV) {}
      bindForSubMesh(VV, eV, xV, JV, YV) {
        if (eV.prePassRenderer && eV.prePassRenderer.enabled && eV.prePassRenderer.currentRTisSceneRT && (-1 !== eV.prePassRenderer.getIndex(2) || -1 !== eV.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[xV.uniqueId] || (this.previousWorldMatrices[xV.uniqueId] = JV.clone()), this.previousViewProjection || (this.previousViewProjection = eV.getTransformMatrix().clone(), this.currentViewProjection = eV.getTransformMatrix().clone());
          const YV = eV.sk();
          this.currentViewProjection.updateFlag !== eV.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = YV.frameId, this.previousViewProjection.iG(this.currentViewProjection), this.currentViewProjection.iG(eV.getTransformMatrix())) : this._lastUpdateFrameId !== YV.frameId && (this._lastUpdateFrameId = YV.frameId, this.previousViewProjection.iG(this.currentViewProjection)), VV.setMatrix("previousWorld", this.previousWorldMatrices[xV.uniqueId]), VV.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[xV.uniqueId] = JV.clone()
        }
      }
    }
  },
  41646: (VV, eV, xV) => {
    function JV(VV) {
      return class extends VV {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    xV.d(eV, {
      c: () => JV
    })
  },
  41524: (VV, eV, xV) => {
    xV.d(eV, {
      StandardMaterial: () => JV.e
    });
    var JV = xV(41526);
    (0, JV.b)()
  },
  41526: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => CV,
      e: () => DV
    });
    var JV = xV(41257),
      YV = xV(41263),
      UV = xV(41353),
      yV = xV(41337),
      pV = xV(38389),
      QV = xV(41394),
      nV = xV(41529),
      wV = xV(41535),
      ZV = xV(41360),
      vV = xV(41553),
      rV = xV(41544),
      kV = xV(41606),
      bV = xV(41598),
      EV = xV(41610),
      BV = xV(41616),
      jV = xV(41591),
      qV = xV(41630),
      tV = xV(41583),
      FV = xV(41279),
      TV = xV(41635),
      PV = xV(41637),
      AV = xV(41640),
      NV = xV(41646),
      XV = xV(41655),
      MV = xV(38318),
      zV = xV(41138);
    const GV = {
      effect: null,
      subMesh: null
    };
    class WV extends((0, NV.c)((0, AV.b)(rV.e))) {}
    class RV extends((0, wV.e)(WV)) {
      constructor(VV) {
        super(VV), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class gV extends((0, XV.c)(kV.e)) {}
    let DV = (() => {
        var VV, eV, wV, rV, AV, NV, XV, MV, zV, WV, DV, iV, CV, aV, oV, cV, hV, lV, LV, fV, mV, KV, HV, uV, sV, SV, IV, dV, OV, Ve, ee, xe, Je;
        let Ye, Ue, ye, pe, Qe, ne, we, Ze, ve, re, ke, be, Ee, Be, je, qe, te, Fe, Te, Pe, Ae, Ne, Xe, Me, ze, Ge, We, Re, ge, De, ie, Ce, ae, oe, ce, he, le, Le, fe, me, Ke, He, ue, se, Se, Ie, de, Oe, Vx, ex, xx, Jx, Yx, Ux, yx, px, Qx, nx, wx, Zx, vx, rx, kx, bx, Ex, Bx, jx, qx, tx, Fx, Tx, Px, Ax, Nx = gV,
          Xx = [],
          Mx = [],
          zx = [],
          Gx = [],
          Wx = [],
          Rx = [],
          gx = [],
          Dx = [],
          ix = [],
          Cx = [],
          ax = [],
          ox = [],
          cx = [],
          hx = [],
          lx = [],
          Lx = [],
          fx = [],
          mx = [],
          Kx = [],
          Hx = [],
          ux = [],
          sx = [],
          Sx = [],
          Ix = [],
          dx = [],
          Ox = [],
          VJ = [],
          eJ = [],
          xJ = [],
          JJ = [],
          YJ = [],
          UJ = [],
          yJ = [],
          pJ = [],
          QJ = [],
          nJ = [],
          wJ = [],
          ZJ = [],
          vJ = [],
          rJ = [],
          kJ = [],
          bJ = [],
          EJ = [],
          BJ = [],
          jJ = [],
          qJ = [],
          tJ = [],
          FJ = [],
          TJ = [],
          PJ = [],
          AJ = [],
          NJ = [],
          XJ = [],
          MJ = [],
          zJ = [],
          GJ = [],
          WJ = [],
          RJ = [],
          gJ = [],
          DJ = [],
          iJ = [],
          CJ = [],
          aJ = [],
          oJ = [],
          cJ = [],
          hJ = [],
          lJ = [],
          LJ = [],
          fJ = [],
          mJ = [],
          KJ = [],
          HJ = [],
          uJ = [],
          sJ = [],
          SJ = [],
          IJ = [],
          dJ = [],
          OJ = [],
          VY = [],
          eY = [],
          xY = [],
          JY = [],
          YY = [],
          UY = [],
          yY = [],
          pY = [],
          QY = [],
          nY = [],
          wY = [],
          ZY = [],
          vY = [],
          rY = [],
          kY = [],
          bY = [],
          EY = [],
          BY = [],
          jY = [],
          qY = [],
          tY = [],
          FY = [],
          TY = [],
          PY = [],
          AY = [],
          NY = [],
          XY = [],
          MY = [],
          zY = [],
          GY = [],
          WY = [],
          RY = [],
          gY = [],
          DY = [],
          iY = [],
          CY = [],
          aY = [],
          oY = [],
          cY = [],
          hY = [],
          lY = [],
          LY = [],
          fY = [],
          mY = [],
          KY = [],
          HY = [],
          uY = [],
          sY = [],
          SY = [],
          IY = [],
          dY = [],
          OY = [],
          VU = [],
          eU = [],
          xU = [],
          JU = [],
          YU = [],
          UU = [],
          yU = [],
          pU = [],
          QU = [],
          nU = [],
          wU = [],
          ZU = [],
          vU = [],
          rU = [],
          kU = [],
          bU = [];
        return VV = class extends Nx {
          get diffuseTexture() {
            return (0, JV.b)(this, eV, "f")
          }
          set diffuseTexture(VV) {
            (0, JV.f)(this, eV, VV, "f")
          }
          get ambientTexture() {
            return (0, JV.b)(this, wV, "f")
          }
          set ambientTexture(VV) {
            (0, JV.f)(this, wV, VV, "f")
          }
          get opacityTexture() {
            return (0, JV.b)(this, rV, "f")
          }
          set opacityTexture(VV) {
            (0, JV.f)(this, rV, VV, "f")
          }
          get reflectionTexture() {
            return (0, JV.b)(this, AV, "f")
          }
          set reflectionTexture(VV) {
            (0, JV.f)(this, AV, VV, "f")
          }
          get emissiveTexture() {
            return (0, JV.b)(this, NV, "f")
          }
          set emissiveTexture(VV) {
            (0, JV.f)(this, NV, VV, "f")
          }
          get specularTexture() {
            return (0, JV.b)(this, XV, "f")
          }
          set specularTexture(VV) {
            (0, JV.f)(this, XV, VV, "f")
          }
          get bumpTexture() {
            return (0, JV.b)(this, MV, "f")
          }
          set bumpTexture(VV) {
            (0, JV.f)(this, MV, VV, "f")
          }
          get lightmapTexture() {
            return (0, JV.b)(this, zV, "f")
          }
          set lightmapTexture(VV) {
            (0, JV.f)(this, zV, VV, "f")
          }
          get refractionTexture() {
            return (0, JV.b)(this, WV, "f")
          }
          set refractionTexture(VV) {
            (0, JV.f)(this, WV, VV, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, JV.b)(this, DV, "f")
          }
          set useAlphaFromDiffuseTexture(VV) {
            (0, JV.f)(this, DV, VV, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, JV.b)(this, iV, "f")
          }
          set useEmissiveAsIllumination(VV) {
            (0, JV.f)(this, iV, VV, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, JV.b)(this, CV, "f")
          }
          set linkEmissiveWithDiffuse(VV) {
            (0, JV.f)(this, CV, VV, "f")
          }
          get useSpecularOverAlpha() {
            return (0, JV.b)(this, aV, "f")
          }
          set useSpecularOverAlpha(VV) {
            (0, JV.f)(this, aV, VV, "f")
          }
          get useReflectionOverAlpha() {
            return (0, JV.b)(this, oV, "f")
          }
          set useReflectionOverAlpha(VV) {
            (0, JV.f)(this, oV, VV, "f")
          }
          get disableLighting() {
            return (0, JV.b)(this, cV, "f")
          }
          set disableLighting(VV) {
            (0, JV.f)(this, cV, VV, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, JV.b)(this, hV, "f")
          }
          set useObjectSpaceNormalMap(VV) {
            (0, JV.f)(this, hV, VV, "f")
          }
          get useParallax() {
            return (0, JV.b)(this, lV, "f")
          }
          set useParallax(VV) {
            (0, JV.f)(this, lV, VV, "f")
          }
          get useParallaxOcclusion() {
            return (0, JV.b)(this, LV, "f")
          }
          set useParallaxOcclusion(VV) {
            (0, JV.f)(this, LV, VV, "f")
          }
          get roughness() {
            return (0, JV.b)(this, fV, "f")
          }
          set roughness(VV) {
            (0, JV.f)(this, fV, VV, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, JV.b)(this, mV, "f")
          }
          set useLightmapAsShadowmap(VV) {
            (0, JV.f)(this, mV, VV, "f")
          }
          get diffuseFresnelParameters() {
            return (0, JV.b)(this, KV, "f")
          }
          set diffuseFresnelParameters(VV) {
            (0, JV.f)(this, KV, VV, "f")
          }
          get opacityFresnelParameters() {
            return (0, JV.b)(this, HV, "f")
          }
          set opacityFresnelParameters(VV) {
            (0, JV.f)(this, HV, VV, "f")
          }
          get reflectionFresnelParameters() {
            return (0, JV.b)(this, uV, "f")
          }
          set reflectionFresnelParameters(VV) {
            (0, JV.f)(this, uV, VV, "f")
          }
          get refractionFresnelParameters() {
            return (0, JV.b)(this, sV, "f")
          }
          set refractionFresnelParameters(VV) {
            (0, JV.f)(this, sV, VV, "f")
          }
          get emissiveFresnelParameters() {
            return (0, JV.b)(this, SV, "f")
          }
          set emissiveFresnelParameters(VV) {
            (0, JV.f)(this, SV, VV, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, JV.b)(this, IV, "f")
          }
          set useReflectionFresnelFromSpecular(VV) {
            (0, JV.f)(this, IV, VV, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, JV.b)(this, dV, "f")
          }
          set useGlossinessFromSpecularMapAlpha(VV) {
            (0, JV.f)(this, dV, VV, "f")
          }
          get maxSimultaneousLights() {
            return (0, JV.b)(this, OV, "f")
          }
          set maxSimultaneousLights(VV) {
            (0, JV.f)(this, OV, VV, "f")
          }
          get invertNormalMapX() {
            return (0, JV.b)(this, Ve, "f")
          }
          set invertNormalMapX(VV) {
            (0, JV.f)(this, Ve, VV, "f")
          }
          get invertNormalMapY() {
            return (0, JV.b)(this, ee, "f")
          }
          set invertNormalMapY(VV) {
            (0, JV.f)(this, ee, VV, "f")
          }
          get twoSidedLighting() {
            return (0, JV.b)(this, xe, "f")
          }
          set twoSidedLighting(VV) {
            (0, JV.f)(this, xe, VV, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, JV.b)(this, Je, "f")
          }
          set applyDecalMapAfterDetailMap(VV) {
            (0, JV.f)(this, Je, VV, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(xV, YV) {
            super(xV, YV, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || VV.ForceGLSL), this._diffuseTexture = (0, JV.l)(this, Xx, null), eV.set(this, ((0, JV.l)(this, Mx), (0, JV.l)(this, zx, void 0))), this._ambientTexture = ((0, JV.l)(this, Gx), (0, JV.l)(this, Wx, null)), wV.set(this, ((0, JV.l)(this, Rx), (0, JV.l)(this, gx, void 0))), this._opacityTexture = ((0, JV.l)(this, Dx), (0, JV.l)(this, ix, null)), rV.set(this, ((0, JV.l)(this, Cx), (0, JV.l)(this, ax, void 0))), this._reflectionTexture = ((0, JV.l)(this, ox), (0, JV.l)(this, cx, null)), AV.set(this, ((0, JV.l)(this, hx), (0, JV.l)(this, lx, void 0))), this._emissiveTexture = ((0, JV.l)(this, Lx), (0, JV.l)(this, fx, null)), NV.set(this, ((0, JV.l)(this, mx), (0, JV.l)(this, Kx, void 0))), this._specularTexture = ((0, JV.l)(this, Hx), (0, JV.l)(this, ux, null)), XV.set(this, ((0, JV.l)(this, sx), (0, JV.l)(this, Sx, void 0))), this._bumpTexture = ((0, JV.l)(this, Ix), (0, JV.l)(this, dx, null)), MV.set(this, ((0, JV.l)(this, Ox), (0, JV.l)(this, VJ, void 0))), this._lightmapTexture = ((0, JV.l)(this, eJ), (0, JV.l)(this, xJ, null)), zV.set(this, ((0, JV.l)(this, JJ), (0, JV.l)(this, YJ, void 0))), this._refractionTexture = ((0, JV.l)(this, UJ), (0, JV.l)(this, yJ, null)), WV.set(this, ((0, JV.l)(this, pJ), (0, JV.l)(this, QJ, void 0))), this.ambientColor = ((0, JV.l)(this, nJ), (0, JV.l)(this, wJ, new pV.d(0, 0, 0))), this.diffuseColor = ((0, JV.l)(this, ZJ), (0, JV.l)(this, vJ, new pV.d(1, 1, 1))), this.specularColor = ((0, JV.l)(this, rJ), (0, JV.l)(this, kJ, new pV.d(1, 1, 1))), this.emissiveColor = ((0, JV.l)(this, bJ), (0, JV.l)(this, EJ, new pV.d(0, 0, 0))), this.specularPower = ((0, JV.l)(this, BJ), (0, JV.l)(this, jJ, 64)), this._useAlphaFromDiffuseTexture = ((0, JV.l)(this, qJ), (0, JV.l)(this, tJ, !1)), DV.set(this, ((0, JV.l)(this, FJ), (0, JV.l)(this, TJ, void 0))), this._useEmissiveAsIllumination = ((0, JV.l)(this, PJ), (0, JV.l)(this, AJ, !1)), iV.set(this, ((0, JV.l)(this, NJ), (0, JV.l)(this, XJ, void 0))), this._linkEmissiveWithDiffuse = ((0, JV.l)(this, MJ), (0, JV.l)(this, zJ, !1)), CV.set(this, ((0, JV.l)(this, GJ), (0, JV.l)(this, WJ, void 0))), this._useSpecularOverAlpha = ((0, JV.l)(this, RJ), (0, JV.l)(this, gJ, !1)), aV.set(this, ((0, JV.l)(this, DJ), (0, JV.l)(this, iJ, void 0))), this._useReflectionOverAlpha = ((0, JV.l)(this, CJ), (0, JV.l)(this, aJ, !1)), oV.set(this, ((0, JV.l)(this, oJ), (0, JV.l)(this, cJ, void 0))), this._disableLighting = ((0, JV.l)(this, hJ), (0, JV.l)(this, lJ, !1)), cV.set(this, ((0, JV.l)(this, LJ), (0, JV.l)(this, fJ, void 0))), this._useObjectSpaceNormalMap = ((0, JV.l)(this, mJ), (0, JV.l)(this, KJ, !1)), hV.set(this, ((0, JV.l)(this, HJ), (0, JV.l)(this, uJ, void 0))), this._useParallax = ((0, JV.l)(this, sJ), (0, JV.l)(this, SJ, !1)), lV.set(this, ((0, JV.l)(this, IJ), (0, JV.l)(this, dJ, void 0))), this._useParallaxOcclusion = ((0, JV.l)(this, OJ), (0, JV.l)(this, VY, !1)), LV.set(this, ((0, JV.l)(this, eY), (0, JV.l)(this, xY, void 0))), this.parallaxScaleBias = ((0, JV.l)(this, JY), (0, JV.l)(this, YY, .05)), this._roughness = ((0, JV.l)(this, UY), (0, JV.l)(this, yY, 0)), fV.set(this, ((0, JV.l)(this, pY), (0, JV.l)(this, QY, void 0))), this.indexOfRefraction = ((0, JV.l)(this, nY), (0, JV.l)(this, wY, .98)), this.invertRefractionY = ((0, JV.l)(this, ZY), (0, JV.l)(this, vY, !0)), this.alphaCutOff = ((0, JV.l)(this, rY), (0, JV.l)(this, kY, .4)), this._useLightmapAsShadowmap = ((0, JV.l)(this, bY), (0, JV.l)(this, EY, !1)), mV.set(this, ((0, JV.l)(this, BY), (0, JV.l)(this, jY, void 0))), this._diffuseFresnelParameters = ((0, JV.l)(this, qY), (0, JV.l)(this, tY, void 0)), KV.set(this, ((0, JV.l)(this, FY), (0, JV.l)(this, TY, void 0))), this._opacityFresnelParameters = ((0, JV.l)(this, PY), (0, JV.l)(this, AY, void 0)), HV.set(this, ((0, JV.l)(this, NY), (0, JV.l)(this, XY, void 0))), this._reflectionFresnelParameters = ((0, JV.l)(this, MY), (0, JV.l)(this, zY, void 0)), uV.set(this, ((0, JV.l)(this, GY), (0, JV.l)(this, WY, void 0))), this._refractionFresnelParameters = ((0, JV.l)(this, RY), (0, JV.l)(this, gY, void 0)), sV.set(this, ((0, JV.l)(this, DY), (0, JV.l)(this, iY, void 0))), this._emissiveFresnelParameters = ((0, JV.l)(this, CY), (0, JV.l)(this, aY, void 0)), SV.set(this, ((0, JV.l)(this, oY), (0, JV.l)(this, cY, void 0))), this._useReflectionFresnelFromSpecular = ((0, JV.l)(this, hY), (0, JV.l)(this, lY, !1)), IV.set(this, ((0, JV.l)(this, LY), (0, JV.l)(this, fY, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, JV.l)(this, mY), (0, JV.l)(this, KY, !1)), dV.set(this, ((0, JV.l)(this, HY), (0, JV.l)(this, uY, void 0))), this._maxSimultaneousLights = ((0, JV.l)(this, sY), (0, JV.l)(this, SY, 4)), OV.set(this, ((0, JV.l)(this, IY), (0, JV.l)(this, dY, void 0))), this._invertNormalMapX = ((0, JV.l)(this, OY), (0, JV.l)(this, VU, !1)), Ve.set(this, ((0, JV.l)(this, eU), (0, JV.l)(this, xU, void 0))), this._invertNormalMapY = ((0, JV.l)(this, JU), (0, JV.l)(this, YU, !1)), ee.set(this, ((0, JV.l)(this, UU), (0, JV.l)(this, yU, void 0))), this._twoSidedLighting = ((0, JV.l)(this, pU), (0, JV.l)(this, QU, !1)), xe.set(this, ((0, JV.l)(this, nU), (0, JV.l)(this, wU, void 0))), this._applyDecalMapAfterDetailMap = ((0, JV.l)(this, ZU), (0, JV.l)(this, vU, !1)), Je.set(this, ((0, JV.l)(this, rU), (0, JV.l)(this, kU, void 0))), this._vertexPullingMetadata = ((0, JV.l)(this, bU), null), this._renderTargets = new UV.f(16), this._globalAmbientColor = new pV.d(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new BV.d(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new nV.b, this.getRenderTargetTextures = () => (this._renderTargets.reset(), VV.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), VV.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(VV.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(VV.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === vV.e.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== vV.e.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(eV, xV) {
            let JV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const YV = xV._drawWrapper;
            if (YV.effect && this.isFrozen && YV._wasPreviouslyReady && YV._wasPreviouslyUsingInstances === JV) return !0;
            xV.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), xV.materialDefines = new RV(this._eventInfo.defineNames));
            const UV = this.dD(),
              yV = xV.materialDefines;
            if (this._isReadyForSubMesh(xV)) return !0;
            const pV = UV.sk();
            if (yV._needNormals = (0, tV.X)(UV, eV, yV, !0, this._maxSimultaneousLights, this._disableLighting), !(0, tV.c)(UV, eV, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, tV.bb)(UV, yV);
            const wV = this.needAlphaBlendingForMesh(eV) && this.dD().useOrderIndependentTransparency;
            if ((0, tV.fb)(UV, yV, this.canRenderToMRT && !wV), (0, tV.cb)(UV, yV, wV), PV.d.PrepareDefines(pV.currentRenderPassId, eV, yV), yV._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, yV._needUVs = !1;
              for (let VV = 1; VV <= 6; ++VV) yV["MAINUV" + VV] = !1;
              if (UV.texturesEnabled) {
                if (yV.DIFFUSEDIRECTUV = 0, yV.BUMPDIRECTUV = 0, yV.AMBIENTDIRECTUV = 0, yV.OPACITYDIRECTUV = 0, yV.EMISSIVEDIRECTUV = 0, yV.SPECULARDIRECTUV = 0, yV.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && VV.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, tV.Y)(this._diffuseTexture, yV, "DIFFUSE")
                } else yV.DIFFUSE = !1;
                if (this._ambientTexture && VV.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, tV.Y)(this._ambientTexture, yV, "AMBIENT")
                } else yV.AMBIENT = !1;
                if (this._opacityTexture && VV.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, tV.Y)(this._opacityTexture, yV, "OPACITY"), yV.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else yV.OPACITY = !1;
                if (this._reflectionTexture && VV.ReflectionTextureEnabled ? (yV.ROUGHNESS = this._roughness > 0, yV.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (yV.ROUGHNESS = !1, yV.REFLECTIONOVERALPHA = !1), !(0, tV.U)(UV, this._reflectionTexture, yV)) return !1;
                if (this._emissiveTexture && VV.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, tV.Y)(this._emissiveTexture, yV, "EMISSIVE")
                } else yV.EMISSIVE = !1;
                if (this._lightmapTexture && VV.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, tV.Y)(this._lightmapTexture, yV, "LIGHTMAP"), yV.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, yV.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else yV.LIGHTMAP = !1;
                if (this._specularTexture && VV.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, tV.Y)(this._specularTexture, yV, "SPECULAR"), yV.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else yV.SPECULAR = !1;
                if (UV.sk().getCaps().standardDerivatives && this._bumpTexture && VV.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, tV.Y)(this._bumpTexture, yV, "BUMP"), yV.PARALLAX = this._useParallax, yV.PARALLAX_RHS = UV.useRightHandedSystem, yV.PARALLAXOCCLUSION = this._useParallaxOcclusion, yV.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else yV.BUMP = !1, yV.PARALLAX = !1, yV.PARALLAX_RHS = !1, yV.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && VV.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  yV._needUVs = !0, yV.REFRACTION = !0, yV.REFRACTIONMAP_3D = this._refractionTexture.isCube, yV.RGBDREFRACTION = this._refractionTexture.isRGBD, yV.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else yV.REFRACTION = !1;
                yV.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else yV.DIFFUSE = !1, yV.AMBIENT = !1, yV.OPACITY = !1, yV.REFLECTION = !1, yV.EMISSIVE = !1, yV.LIGHTMAP = !1, yV.BUMP = !1, yV.REFRACTION = !1;
              yV.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), yV.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, yV.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, yV.SPECULAROVERALPHA = this._useSpecularOverAlpha, yV.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, yV.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, yV.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(eV), yV.TEXTURE_REPETITION_MODE = pV.version > 1 || pV.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = yV, this._eventInfo.subMesh = xV, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (yV._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(yV), yV.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, yV.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (yV._areFresnelDirty && (VV.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (yV.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, yV.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, yV.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, yV.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, yV.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, yV.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, yV._needNormals = !0, yV.FRESNEL = !0) : yV.FRESNEL = !1), yV.AREALIGHTUSED || yV.CLUSTLIGHT_BATCH)
              for (let VV = 0; VV < eV.lightSources.length; VV++)
                if (!eV.lightSources[VV]._isReady()) return !1;
            (0, tV.$)(eV, UV, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(eV), yV, this._applyDecalMapAfterDetailMap, this._useVertexPulling, xV.getRenderingMesh(), this._isVertexOutputInvariant), (0, tV.Q)(UV, pV, this, yV, JV, null, xV.getRenderingMesh().hasThinInstances), this._eventInfo.defines = yV, this._eventInfo.mesh = eV, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, tV.P)(eV, yV, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let vV = !1;
            if (yV.isDirty) {
              const JV = yV._areLightsDisposed;
              yV.markAsProcessed();
              const YV = new EV.d;
              yV.REFLECTION && YV.addFallback(0, "REFLECTION"), yV.SPECULAR && YV.addFallback(0, "SPECULAR"), yV.BUMP && YV.addFallback(0, "BUMP"), yV.PARALLAX && YV.addFallback(1, "PARALLAX"), yV.PARALLAX_RHS && YV.addFallback(1, "PARALLAX_RHS"), yV.PARALLAXOCCLUSION && YV.addFallback(0, "PARALLAXOCCLUSION"), yV.SPECULAROVERALPHA && YV.addFallback(0, "SPECULAROVERALPHA"), yV.FOG && YV.addFallback(1, "FOG"), yV.POINTSIZE && YV.addFallback(0, "POINTSIZE"), yV.LOGARITHMICDEPTH && YV.addFallback(0, "LOGARITHMICDEPTH"), (0, tV.z)(yV, YV, this._maxSimultaneousLights), yV.SPECULARTERM && YV.addFallback(0, "SPECULARTERM"), yV.DIFFUSEFRESNEL && YV.addFallback(1, "DIFFUSEFRESNEL"), yV.OPACITYFRESNEL && YV.addFallback(2, "OPACITYFRESNEL"), yV.REFLECTIONFRESNEL && YV.addFallback(3, "REFLECTIONFRESNEL"), yV.EMISSIVEFRESNEL && YV.addFallback(4, "EMISSIVEFRESNEL"), yV.FRESNEL && YV.addFallback(4, "FRESNEL"), yV.MULTIVIEW && YV.addFallback(0, "MULTIVIEW");
              const wV = [QV.j.PositionKind];
              yV.NORMAL && wV.push(QV.j.NormalKind), yV.TANGENT && wV.push(QV.j.TangentKind);
              for (let VV = 1; VV <= 6; ++VV) yV["UV" + VV] && wV.push(`uv${1===VV?"":VV}`);
              yV.VERTEXCOLOR && wV.push(QV.j.ColorKind), (0, tV.E)(wV, eV, yV, YV), (0, tV.H)(wV, yV), (0, tV.L)(wV, eV, yV), (0, tV.A)(wV, eV, yV);
              let rV = "default";
              const kV = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                bV = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, tV.hb)(kV, bV, !1);
              const BV = ["Material", "Scene", "Mesh"],
                FV = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: yV.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = YV, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = yV, this._eventInfo.uniforms = kV, this._eventInfo.attributes = wV, this._eventInfo.samplers = bV, this._eventInfo.uniformBuffersNames = BV, this._eventInfo.customCode = void 0, this._eventInfo.mesh = eV, this._eventInfo.indexParameters = FV, this._callbackPluginEventGeneric(128, this._eventInfo), PV.d.AddUniformsAndSamplers(kV, bV), nV.b.AddUniforms(kV), nV.b.AddSamplers(bV), ZV.b && (ZV.b.PrepareUniforms(kV, yV), ZV.b.PrepareSamplers(bV, yV)), (0, tV.lb)({
                  uniformsNames: kV,
                  uniformBuffersNames: BV,
                  samplers: bV,
                  defines: yV,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, jV.c)(kV), this._useVertexPulling) {
                const VV = xV.getRenderingMesh(),
                  eV = VV?.geometry;
                eV && (this._vertexPullingMetadata = (0, qV.e)(eV), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((VV, eV) => {
                  kV.push(`vp_${eV}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const TV = {};
              this.customShaderNameResolve && (rV = this.customShaderNameResolve(rV, kV, BV, bV, yV, wV, TV));
              const AV = yV.toString(),
                NV = xV.effect,
                XV = UV.sk().createEffect(rV, {
                  attributes: wV,
                  uniformsNames: kV,
                  uniformBuffersNames: BV,
                  samplers: bV,
                  defines: AV,
                  fallbacks: YV,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: FV,
                  processFinalCode: TV.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: yV.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: VV._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, pV);
              if (this._eventInfo.customCode = void 0, XV)
                if (this._onEffectCreatedObservable && (GV.effect = XV, GV.subMesh = xV, this._onEffectCreatedObservable.notifyObservers(GV)), this.allowShaderHotSwapping && NV && !XV.isReady()) {
                  if (yV.markAsUnprocessed(), vV = this.isFrozen, JV) return yV._areLightsDisposed = !0, !1
                } else UV.resetCachedMaterial(), xV.setEffect(XV, yV, this._materialContext)
            }
            return !(!xV.effect || !xV.effect.isReady()) && (yV._renderId = UV.getRenderId(), YV._wasPreviouslyReady = !vV, YV._wasPreviouslyUsingInstances = JV, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const VV = this._uniformBuffer;
            VV.addUniform("diffuseLeftColor", 4), VV.addUniform("diffuseRightColor", 4), VV.addUniform("opacityParts", 4), VV.addUniform("reflectionLeftColor", 4), VV.addUniform("reflectionRightColor", 4), VV.addUniform("refractionLeftColor", 4), VV.addUniform("refractionRightColor", 4), VV.addUniform("emissiveLeftColor", 4), VV.addUniform("emissiveRightColor", 4), VV.addUniform("vDiffuseInfos", 2), VV.addUniform("vAmbientInfos", 2), VV.addUniform("vOpacityInfos", 2), VV.addUniform("vEmissiveInfos", 2), VV.addUniform("vLightmapInfos", 2), VV.addUniform("vSpecularInfos", 2), VV.addUniform("vBumpInfos", 3), VV.addUniform("diffuseMatrix", 16), VV.addUniform("ambientMatrix", 16), VV.addUniform("opacityMatrix", 16), VV.addUniform("emissiveMatrix", 16), VV.addUniform("lightmapMatrix", 16), VV.addUniform("specularMatrix", 16), VV.addUniform("bumpMatrix", 16), VV.addUniform("vTangentSpaceParams", 2), VV.addUniform("pointSize", 1), VV.addUniform("alphaCutOff", 1), VV.addUniform("refractionMatrix", 16), VV.addUniform("vRefractionInfos", 4), VV.addUniform("vRefractionPosition", 3), VV.addUniform("vRefractionSize", 3), VV.addUniform("vSpecularColor", 4), VV.addUniform("vEmissiveColor", 3), VV.addUniform("vDiffuseColor", 4), VV.addUniform("vAmbientColor", 3), VV.addUniform("cameraInfo", 4), VV.addUniform("vTextureRepetitionHexTilingParams", 4), (0, tV.gb)(VV, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(eV, xV, JV) {
            const YV = this.dD(),
              UV = JV.materialDefines;
            if (!UV) return;
            const QV = JV.effect;
            if (!QV) return;
            this._activeEffect = QV, xV.getMeshUniformBuffer().bindToEffect(QV, "Mesh"), xV.transferToEffect(eV), this._uniformBuffer.bindToEffect(QV, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, YV, xV, eV, this.isFrozen), PV.d.Bind(YV.sk().currentRenderPassId, this._activeEffect, xV, eV, this);
            const nV = YV.activeCamera;
            nV ? this._uniformBuffer.updateFloat4("cameraInfo", nV.minZ, nV.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const wV = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", wV[0], wV[1], wV[2], wV[3]), this._eventInfo.subMesh = JV, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), UV.OBJECTSPACE_NORMALMAP && (eV.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const ZV = this._mustRebind(YV, QV, JV, xV.visibility),
              vV = YV.sk()._features.needToAlwaysBindUniformBuffers;
            (0, tV.e)(xV, QV), this._vertexPullingMetadata && (0, qV.d)(QV, this._vertexPullingMetadata);
            const rV = this._uniformBuffer;
            if (ZV) {
              if (this.bindViewProjection(QV), !rV.useUbo || !this.isFrozen || !rV.isSync || JV._drawWrapper._forceRebindOnNextCall) {
                if (VV.FresnelEnabled && UV.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (rV.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), rV.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const VV = pV.k.Color3[0];
                    VV.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), rV.updateColor4("opacityParts", VV, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (rV.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), rV.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (rV.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), rV.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (rV.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), rV.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (UV.ALPHATEST && rV.updateFloat("alphaCutOff", this.alphaCutOff), YV.texturesEnabled && (this._diffuseTexture && VV.DiffuseTextureEnabled && (rV.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, tV.y)(this._diffuseTexture, rV, "diffuse")), this._ambientTexture && VV.AmbientTextureEnabled && (rV.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, tV.y)(this._ambientTexture, rV, "ambient")), this._opacityTexture && VV.OpacityTextureEnabled && (rV.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, tV.y)(this._opacityTexture, rV, "opacity")), (0, tV.k)(YV, UV, rV, pV.d.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && VV.ReflectionTextureEnabled || rV.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && VV.EmissiveTextureEnabled && (rV.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, tV.y)(this._emissiveTexture, rV, "emissive")), this._lightmapTexture && VV.LightmapTextureEnabled && (rV.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, tV.y)(this._lightmapTexture, rV, "lightmap")), this._specularTexture && VV.SpecularTextureEnabled && (rV.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, tV.y)(this._specularTexture, rV, "specular")), this._bumpTexture && YV.sk().getCaps().standardDerivatives && VV.BumpTextureEnabled && (rV.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, tV.y)(this._bumpTexture, rV, "bump"), YV._mirroredCameraPosition ? rV.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : rV.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && VV.RefractionTextureEnabled)) {
                  let VV = 1;
                  if (this._refractionTexture.isCube || (rV.peV("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (VV = this._refractionTexture.depth)), rV.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, VV, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const VV = this._refractionTexture;
                    rV.updateVector3("vRefractionPosition", VV.boundingBoxPosition), rV.updateVector3("vRefractionSize", VV.boundingBoxSize)
                  }
                }
                this.pointsCloud && rV.updateFloat("pointSize", this.pointSize), rV.updateColor4("vSpecularColor", this.specularColor, this.specularPower), rV.updateColor3("vEmissiveColor", VV.EmissiveTextureEnabled ? this.emissiveColor : pV.d.BlackReadOnly), rV.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), YV.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), rV.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              YV.texturesEnabled && (this._diffuseTexture && VV.DiffuseTextureEnabled && QV.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && VV.AmbientTextureEnabled && QV.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && VV.OpacityTextureEnabled && QV.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && VV.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? QV.setTexture("reflectionCubeSampler", this._reflectionTexture) : QV.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && VV.EmissiveTextureEnabled && QV.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && VV.LightmapTextureEnabled && QV.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && VV.SpecularTextureEnabled && QV.setTexture("specularSampler", this._specularTexture), this._bumpTexture && YV.sk().getCaps().standardDerivatives && VV.BumpTextureEnabled && QV.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && VV.RefractionTextureEnabled && (this._refractionTexture.isCube ? QV.setTexture("refractionCubeSampler", this._refractionTexture) : QV.setTexture("refraction2DSampler", this._refractionTexture))), this.dD().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(xV) && this.dD().depthPeelingRenderer.bind(QV), this._eventInfo.subMesh = JV, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, jV.g)(QV, this, YV), this.bindEyePosition(QV)
            } else vV && (this._needToBindSceneUbo = !0);
            !ZV && this.isFrozen && !vV || !YV.lightsEnabled || this._disableLighting || (0, tV.p)(YV, xV, QV, UV, this._maxSimultaneousLights), !ZV && this.isFrozen || ((YV.fogEnabled && xV.applyFog && YV.fogMode !== yV.e.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || xV.receiveShadows || UV.PREPASS || UV.CLUSTLIGHT_BATCH) && this.bindView(QV), (0, tV.g)(YV, xV, QV), UV.NUM_MORPH_INFLUENCERS && (0, tV.u)(xV, QV), UV.BAKED_VERTEX_ANIMATION_TEXTURE && xV.bakedVertexAnimationManager?.bind(QV, UV.INSTANCES), this.useLogarithmicDepth && (0, tV.r)(UV, QV, YV), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(xV, this._activeEffect, JV), rV.update()
          }
          _canBindRunFollower(eV, xV, JV, YV, UV) {
            const yV = eV.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === VV.prototype.isReadyForSubMesh && this.bindForSubMesh === VV.prototype.bindForSubMesh && this._mustRebind === kV.e.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !xV._features.needToAlwaysBindUniformBuffers && !(yV && yV.enabled && yV.currentRTisSceneRT) && !PV.d._Configurations[xV.currentRenderPassId] && !YV.materialDefines?.OBJECTSPACE_NORMALMAP && !JV.skeleton && !UV._bonesComputationForcedToCPU
          }
          _bindRunFollower(VV, eV, xV, JV) {
            this._activeEffect = JV, eV.getMeshUniformBuffer().bindToEffect(JV, "Mesh"), eV.transferToEffect(VV);
            const YV = this._uniformBuffer;
            YV.bindToEffect(JV, "Material");
            const UV = this._scene.activeCamera;
            UV ? YV.updateFloat4("cameraInfo", UV.minZ, UV.maxZ, 0, 0) : YV.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const yV = this.textureRepetitionHexTilingParams;
            YV.updateFloat4("vTextureRepetitionHexTilingParams", yV[0], yV[1], yV[2], yV[3]), this._afterBind(eV, JV, xV), YV.update()
          }
          getAnimatables() {
            const VV = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && VV.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && VV.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && VV.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && VV.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && VV.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && VV.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && VV.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && VV.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && VV.push(this._refractionTexture), VV
          }
          getActiveTextures() {
            const VV = super.getActiveTextures();
            return this._diffuseTexture && VV.push(this._diffuseTexture), this._ambientTexture && VV.push(this._ambientTexture), this._opacityTexture && VV.push(this._opacityTexture), this._reflectionTexture && VV.push(this._reflectionTexture), this._emissiveTexture && VV.push(this._emissiveTexture), this._specularTexture && VV.push(this._specularTexture), this._bumpTexture && VV.push(this._bumpTexture), this._lightmapTexture && VV.push(this._lightmapTexture), this._refractionTexture && VV.push(this._refractionTexture), VV
          }
          hasTexture(VV) {
            return !!super.hasTexture(VV) || (this._diffuseTexture === VV || (this._ambientTexture === VV || (this._opacityTexture === VV || (this._reflectionTexture === VV || (this._emissiveTexture === VV || (this._specularTexture === VV || (this._bumpTexture === VV || (this._lightmapTexture === VV || this._refractionTexture === VV))))))))
          }
          dispose(VV, eV) {
            eV && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(VV, eV)
          }
          clone(eV) {
            let xV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              JV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const YV = FV.b.Clone((() => new VV(eV, this.dD())), this, {
              cloneTexturesOnlyOnce: xV
            });
            return YV.name = eV, YV.id = eV, this.stencil.copyTo(YV.stencil), this._clonePlugins(YV, JV), YV
          }
          static Parse(eV, xV, JV) {
            const YV = FV.b.Parse((() => new VV(eV.name, xV)), eV, xV, JV);
            return eV.stencil && YV.stencil.parse(eV.stencil, xV, JV), vV.e._ParsePlugins(eV, YV, xV, JV), YV
          }
          static get DiffuseTextureEnabled() {
            return bV.b.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(VV) {
            bV.b.DiffuseTextureEnabled = VV
          }
          static get DetailTextureEnabled() {
            return bV.b.DetailTextureEnabled
          }
          static set DetailTextureEnabled(VV) {
            bV.b.DetailTextureEnabled = VV
          }
          static get AmbientTextureEnabled() {
            return bV.b.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(VV) {
            bV.b.AmbientTextureEnabled = VV
          }
          static get OpacityTextureEnabled() {
            return bV.b.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(VV) {
            bV.b.OpacityTextureEnabled = VV
          }
          static get ReflectionTextureEnabled() {
            return bV.b.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(VV) {
            bV.b.ReflectionTextureEnabled = VV
          }
          static get EmissiveTextureEnabled() {
            return bV.b.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(VV) {
            bV.b.EmissiveTextureEnabled = VV
          }
          static get SpecularTextureEnabled() {
            return bV.b.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(VV) {
            bV.b.SpecularTextureEnabled = VV
          }
          static get BumpTextureEnabled() {
            return bV.b.BumpTextureEnabled
          }
          static set BumpTextureEnabled(VV) {
            bV.b.BumpTextureEnabled = VV
          }
          static get LightmapTextureEnabled() {
            return bV.b.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(VV) {
            bV.b.LightmapTextureEnabled = VV
          }
          static get RefractionTextureEnabled() {
            return bV.b.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(VV) {
            bV.b.RefractionTextureEnabled = VV
          }
          static get ColorGradingTextureEnabled() {
            return bV.b.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(VV) {
            bV.b.ColorGradingTextureEnabled = VV
          }
          static get FresnelEnabled() {
            return bV.b.FresnelEnabled
          }
          static set FresnelEnabled(VV) {
            bV.b.FresnelEnabled = VV
          }
        }, eV = new WeakMap, wV = new WeakMap, rV = new WeakMap, AV = new WeakMap, NV = new WeakMap, XV = new WeakMap, MV = new WeakMap, zV = new WeakMap, WV = new WeakMap, DV = new WeakMap, iV = new WeakMap, CV = new WeakMap, aV = new WeakMap, oV = new WeakMap, cV = new WeakMap, hV = new WeakMap, lV = new WeakMap, LV = new WeakMap, fV = new WeakMap, mV = new WeakMap, KV = new WeakMap, HV = new WeakMap, uV = new WeakMap, sV = new WeakMap, SV = new WeakMap, IV = new WeakMap, dV = new WeakMap, OV = new WeakMap, Ve = new WeakMap, ee = new WeakMap, xe = new WeakMap, Je = new WeakMap, (() => {
          const eV = "function" === typeof Symbol && Symbol.metadata ? Object.create(Nx[Symbol.metadata] ?? null) : void 0;
          Ye = [(0, YV.F)("diffuseTexture")], Ue = [(0, YV.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], ye = [(0, YV.F)("ambientTexture")], pe = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], Qe = [(0, YV.F)("opacityTexture")], ne = [(0, YV.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], we = [(0, YV.F)("reflectionTexture")], Ze = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], ve = [(0, YV.F)("emissiveTexture")], re = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], ke = [(0, YV.F)("specularTexture")], be = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], Ee = [(0, YV.F)("bumpTexture")], Be = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], je = [(0, YV.F)("lightmapTexture")], qe = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], te = [(0, YV.F)("refractionTexture")], Fe = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], Te = [(0, YV.o)("ambient")], Pe = [(0, YV.o)("diffuse")], Ae = [(0, YV.o)("specular")], Ne = [(0, YV.o)("emissive")], Xe = [(0, YV.J)()], Me = [(0, YV.J)("useAlphaFromDiffuseTexture")], ze = [() => ({
            init(VV) {
              return void 0 === VV && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = VV), VV
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(VV) {
              this._useAlphaFromDiffuseTexture = VV
            }
          })], Ge = [(0, YV.J)("useEmissiveAsIllumination")], We = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], Re = [(0, YV.J)("linkEmissiveWithDiffuse")], ge = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], De = [(0, YV.J)("useSpecularOverAlpha")], ie = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], Ce = [(0, YV.J)("useReflectionOverAlpha")], ae = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], oe = [(0, YV.J)("disableLighting")], ce = [(0, YV.h)("_markAllSubMeshesAsLightsDirty")], he = [(0, YV.J)("useObjectSpaceNormalMap")], le = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], Le = [(0, YV.J)("useParallax")], fe = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], me = [(0, YV.J)("useParallaxOcclusion")], Ke = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], He = [(0, YV.J)()], ue = [(0, YV.J)("roughness")], se = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], Se = [(0, YV.J)()], Ie = [(0, YV.J)()], de = [(0, YV.J)()], Oe = [(0, YV.J)("useLightmapAsShadowmap")], Vx = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], ex = [(0, YV.u)("diffuseFresnelParameters")], xx = [(0, YV.h)("_markAllSubMeshesAsFresnelDirty")], Jx = [(0, YV.u)("opacityFresnelParameters")], Yx = [(0, YV.h)("_markAllSubMeshesAsFresnelAndMiscDirty")], Ux = [(0, YV.u)("reflectionFresnelParameters")], yx = [(0, YV.h)("_markAllSubMeshesAsFresnelDirty")], px = [(0, YV.u)("refractionFresnelParameters")], Qx = [(0, YV.h)("_markAllSubMeshesAsFresnelDirty")], nx = [(0, YV.u)("emissiveFresnelParameters")], wx = [(0, YV.h)("_markAllSubMeshesAsFresnelDirty")], Zx = [(0, YV.J)("useReflectionFresnelFromSpecular")], vx = [(0, YV.h)("_markAllSubMeshesAsFresnelDirty")], rx = [(0, YV.J)("useGlossinessFromSpecularMapAlpha")], kx = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], bx = [(0, YV.J)("maxSimultaneousLights")], Ex = [(0, YV.h)("_markAllSubMeshesAsLightsDirty")], Bx = [(0, YV.J)("invertNormalMapX")], jx = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], qx = [(0, YV.J)("invertNormalMapY")], tx = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], Fx = [(0, YV.J)("twoSidedLighting")], Tx = [(0, YV.h)("_markAllSubMeshesAsTexturesDirty")], Px = [(0, YV.J)("applyDecalMapAfterDetailMap")], Ax = [(0, YV.h)("_markAllSubMeshesAsMiscDirty")], (0, JV.i)(VV, null, Ue, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "diffuseTexture" in VV,
              get: VV => VV.diffuseTexture,
              set: (VV, eV) => {
                VV.diffuseTexture = eV
              }
            },
            metadata: eV
          }, zx, Gx), (0, JV.i)(VV, null, pe, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "ambientTexture" in VV,
              get: VV => VV.ambientTexture,
              set: (VV, eV) => {
                VV.ambientTexture = eV
              }
            },
            metadata: eV
          }, gx, Dx), (0, JV.i)(VV, null, ne, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "opacityTexture" in VV,
              get: VV => VV.opacityTexture,
              set: (VV, eV) => {
                VV.opacityTexture = eV
              }
            },
            metadata: eV
          }, ax, ox), (0, JV.i)(VV, null, Ze, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "reflectionTexture" in VV,
              get: VV => VV.reflectionTexture,
              set: (VV, eV) => {
                VV.reflectionTexture = eV
              }
            },
            metadata: eV
          }, lx, Lx), (0, JV.i)(VV, null, re, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "emissiveTexture" in VV,
              get: VV => VV.emissiveTexture,
              set: (VV, eV) => {
                VV.emissiveTexture = eV
              }
            },
            metadata: eV
          }, Kx, Hx), (0, JV.i)(VV, null, be, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "specularTexture" in VV,
              get: VV => VV.specularTexture,
              set: (VV, eV) => {
                VV.specularTexture = eV
              }
            },
            metadata: eV
          }, Sx, Ix), (0, JV.i)(VV, null, Be, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "bumpTexture" in VV,
              get: VV => VV.bumpTexture,
              set: (VV, eV) => {
                VV.bumpTexture = eV
              }
            },
            metadata: eV
          }, VJ, eJ), (0, JV.i)(VV, null, qe, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "lightmapTexture" in VV,
              get: VV => VV.lightmapTexture,
              set: (VV, eV) => {
                VV.lightmapTexture = eV
              }
            },
            metadata: eV
          }, YJ, UJ), (0, JV.i)(VV, null, Fe, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "refractionTexture" in VV,
              get: VV => VV.refractionTexture,
              set: (VV, eV) => {
                VV.refractionTexture = eV
              }
            },
            metadata: eV
          }, QJ, nJ), (0, JV.i)(VV, null, ze, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "useAlphaFromDiffuseTexture" in VV,
              get: VV => VV.useAlphaFromDiffuseTexture,
              set: (VV, eV) => {
                VV.useAlphaFromDiffuseTexture = eV
              }
            },
            metadata: eV
          }, TJ, PJ), (0, JV.i)(VV, null, We, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: VV => "useEmissiveAsIllumination" in VV,
              get: VV => VV.useEmissiveAsIllumination,
              set: (VV, eV) => {
                VV.useEmissiveAsIllumination = eV
              }
            },
            metadata: eV
          }, XJ, MJ), (0, JV.i)(VV, null, ge, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: VV => "linkEmissiveWithDiffuse" in VV,
              get: VV => VV.linkEmissiveWithDiffuse,
              set: (VV, eV) => {
                VV.linkEmissiveWithDiffuse = eV
              }
            },
            metadata: eV
          }, WJ, RJ), (0, JV.i)(VV, null, ie, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: VV => "useSpecularOverAlpha" in VV,
              get: VV => VV.useSpecularOverAlpha,
              set: (VV, eV) => {
                VV.useSpecularOverAlpha = eV
              }
            },
            metadata: eV
          }, iJ, CJ), (0, JV.i)(VV, null, ae, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: VV => "useReflectionOverAlpha" in VV,
              get: VV => VV.useReflectionOverAlpha,
              set: (VV, eV) => {
                VV.useReflectionOverAlpha = eV
              }
            },
            metadata: eV
          }, cJ, hJ), (0, JV.i)(VV, null, ce, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: VV => "disableLighting" in VV,
              get: VV => VV.disableLighting,
              set: (VV, eV) => {
                VV.disableLighting = eV
              }
            },
            metadata: eV
          }, fJ, mJ), (0, JV.i)(VV, null, le, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: VV => "useObjectSpaceNormalMap" in VV,
              get: VV => VV.useObjectSpaceNormalMap,
              set: (VV, eV) => {
                VV.useObjectSpaceNormalMap = eV
              }
            },
            metadata: eV
          }, uJ, sJ), (0, JV.i)(VV, null, fe, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: VV => "useParallax" in VV,
              get: VV => VV.useParallax,
              set: (VV, eV) => {
                VV.useParallax = eV
              }
            },
            metadata: eV
          }, dJ, OJ), (0, JV.i)(VV, null, Ke, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: VV => "useParallaxOcclusion" in VV,
              get: VV => VV.useParallaxOcclusion,
              set: (VV, eV) => {
                VV.useParallaxOcclusion = eV
              }
            },
            metadata: eV
          }, xY, JY), (0, JV.i)(VV, null, se, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: VV => "roughness" in VV,
              get: VV => VV.roughness,
              set: (VV, eV) => {
                VV.roughness = eV
              }
            },
            metadata: eV
          }, QY, nY), (0, JV.i)(VV, null, Vx, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: VV => "useLightmapAsShadowmap" in VV,
              get: VV => VV.useLightmapAsShadowmap,
              set: (VV, eV) => {
                VV.useLightmapAsShadowmap = eV
              }
            },
            metadata: eV
          }, jY, qY), (0, JV.i)(VV, null, xx, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: VV => "diffuseFresnelParameters" in VV,
              get: VV => VV.diffuseFresnelParameters,
              set: (VV, eV) => {
                VV.diffuseFresnelParameters = eV
              }
            },
            metadata: eV
          }, TY, PY), (0, JV.i)(VV, null, Yx, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: VV => "opacityFresnelParameters" in VV,
              get: VV => VV.opacityFresnelParameters,
              set: (VV, eV) => {
                VV.opacityFresnelParameters = eV
              }
            },
            metadata: eV
          }, XY, MY), (0, JV.i)(VV, null, yx, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: VV => "reflectionFresnelParameters" in VV,
              get: VV => VV.reflectionFresnelParameters,
              set: (VV, eV) => {
                VV.reflectionFresnelParameters = eV
              }
            },
            metadata: eV
          }, WY, RY), (0, JV.i)(VV, null, Qx, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: VV => "refractionFresnelParameters" in VV,
              get: VV => VV.refractionFresnelParameters,
              set: (VV, eV) => {
                VV.refractionFresnelParameters = eV
              }
            },
            metadata: eV
          }, iY, CY), (0, JV.i)(VV, null, wx, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: VV => "emissiveFresnelParameters" in VV,
              get: VV => VV.emissiveFresnelParameters,
              set: (VV, eV) => {
                VV.emissiveFresnelParameters = eV
              }
            },
            metadata: eV
          }, cY, hY), (0, JV.i)(VV, null, vx, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: VV => "useReflectionFresnelFromSpecular" in VV,
              get: VV => VV.useReflectionFresnelFromSpecular,
              set: (VV, eV) => {
                VV.useReflectionFresnelFromSpecular = eV
              }
            },
            metadata: eV
          }, fY, mY), (0, JV.i)(VV, null, kx, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: VV => "useGlossinessFromSpecularMapAlpha" in VV,
              get: VV => VV.useGlossinessFromSpecularMapAlpha,
              set: (VV, eV) => {
                VV.useGlossinessFromSpecularMapAlpha = eV
              }
            },
            metadata: eV
          }, uY, sY), (0, JV.i)(VV, null, Ex, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: VV => "maxSimultaneousLights" in VV,
              get: VV => VV.maxSimultaneousLights,
              set: (VV, eV) => {
                VV.maxSimultaneousLights = eV
              }
            },
            metadata: eV
          }, dY, OY), (0, JV.i)(VV, null, jx, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: VV => "invertNormalMapX" in VV,
              get: VV => VV.invertNormalMapX,
              set: (VV, eV) => {
                VV.invertNormalMapX = eV
              }
            },
            metadata: eV
          }, xU, JU), (0, JV.i)(VV, null, tx, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: VV => "invertNormalMapY" in VV,
              get: VV => VV.invertNormalMapY,
              set: (VV, eV) => {
                VV.invertNormalMapY = eV
              }
            },
            metadata: eV
          }, yU, pU), (0, JV.i)(VV, null, Tx, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: VV => "twoSidedLighting" in VV,
              get: VV => VV.twoSidedLighting,
              set: (VV, eV) => {
                VV.twoSidedLighting = eV
              }
            },
            metadata: eV
          }, wU, ZU), (0, JV.i)(VV, null, Ax, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: VV => "applyDecalMapAfterDetailMap" in VV,
              get: VV => VV.applyDecalMapAfterDetailMap,
              set: (VV, eV) => {
                VV.applyDecalMapAfterDetailMap = eV
              }
            },
            metadata: eV
          }, kU, bU), (0, JV.i)(null, null, Ye, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "_diffuseTexture" in VV,
              get: VV => VV._diffuseTexture,
              set: (VV, eV) => {
                VV._diffuseTexture = eV
              }
            },
            metadata: eV
          }, Xx, Mx), (0, JV.i)(null, null, ye, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "_ambientTexture" in VV,
              get: VV => VV._ambientTexture,
              set: (VV, eV) => {
                VV._ambientTexture = eV
              }
            },
            metadata: eV
          }, Wx, Rx), (0, JV.i)(null, null, Qe, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "_opacityTexture" in VV,
              get: VV => VV._opacityTexture,
              set: (VV, eV) => {
                VV._opacityTexture = eV
              }
            },
            metadata: eV
          }, ix, Cx), (0, JV.i)(null, null, we, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "_reflectionTexture" in VV,
              get: VV => VV._reflectionTexture,
              set: (VV, eV) => {
                VV._reflectionTexture = eV
              }
            },
            metadata: eV
          }, cx, hx), (0, JV.i)(null, null, ve, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "_emissiveTexture" in VV,
              get: VV => VV._emissiveTexture,
              set: (VV, eV) => {
                VV._emissiveTexture = eV
              }
            },
            metadata: eV
          }, fx, mx), (0, JV.i)(null, null, ke, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "_specularTexture" in VV,
              get: VV => VV._specularTexture,
              set: (VV, eV) => {
                VV._specularTexture = eV
              }
            },
            metadata: eV
          }, ux, sx), (0, JV.i)(null, null, Ee, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "_bumpTexture" in VV,
              get: VV => VV._bumpTexture,
              set: (VV, eV) => {
                VV._bumpTexture = eV
              }
            },
            metadata: eV
          }, dx, Ox), (0, JV.i)(null, null, je, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "_lightmapTexture" in VV,
              get: VV => VV._lightmapTexture,
              set: (VV, eV) => {
                VV._lightmapTexture = eV
              }
            },
            metadata: eV
          }, xJ, JJ), (0, JV.i)(null, null, te, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "_refractionTexture" in VV,
              get: VV => VV._refractionTexture,
              set: (VV, eV) => {
                VV._refractionTexture = eV
              }
            },
            metadata: eV
          }, yJ, pJ), (0, JV.i)(null, null, Te, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: VV => "ambientColor" in VV,
              get: VV => VV.ambientColor,
              set: (VV, eV) => {
                VV.ambientColor = eV
              }
            },
            metadata: eV
          }, wJ, ZJ), (0, JV.i)(null, null, Pe, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: VV => "diffuseColor" in VV,
              get: VV => VV.diffuseColor,
              set: (VV, eV) => {
                VV.diffuseColor = eV
              }
            },
            metadata: eV
          }, vJ, rJ), (0, JV.i)(null, null, Ae, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: VV => "specularColor" in VV,
              get: VV => VV.specularColor,
              set: (VV, eV) => {
                VV.specularColor = eV
              }
            },
            metadata: eV
          }, kJ, bJ), (0, JV.i)(null, null, Ne, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: VV => "emissiveColor" in VV,
              get: VV => VV.emissiveColor,
              set: (VV, eV) => {
                VV.emissiveColor = eV
              }
            },
            metadata: eV
          }, EJ, BJ), (0, JV.i)(null, null, Xe, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: VV => "specularPower" in VV,
              get: VV => VV.specularPower,
              set: (VV, eV) => {
                VV.specularPower = eV
              }
            },
            metadata: eV
          }, jJ, qJ), (0, JV.i)(null, null, Me, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: VV => "_useAlphaFromDiffuseTexture" in VV,
              get: VV => VV._useAlphaFromDiffuseTexture,
              set: (VV, eV) => {
                VV._useAlphaFromDiffuseTexture = eV
              }
            },
            metadata: eV
          }, tJ, FJ), (0, JV.i)(null, null, Ge, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: VV => "_useEmissiveAsIllumination" in VV,
              get: VV => VV._useEmissiveAsIllumination,
              set: (VV, eV) => {
                VV._useEmissiveAsIllumination = eV
              }
            },
            metadata: eV
          }, AJ, NJ), (0, JV.i)(null, null, Re, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: VV => "_linkEmissiveWithDiffuse" in VV,
              get: VV => VV._linkEmissiveWithDiffuse,
              set: (VV, eV) => {
                VV._linkEmissiveWithDiffuse = eV
              }
            },
            metadata: eV
          }, zJ, GJ), (0, JV.i)(null, null, De, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: VV => "_useSpecularOverAlpha" in VV,
              get: VV => VV._useSpecularOverAlpha,
              set: (VV, eV) => {
                VV._useSpecularOverAlpha = eV
              }
            },
            metadata: eV
          }, gJ, DJ), (0, JV.i)(null, null, Ce, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: VV => "_useReflectionOverAlpha" in VV,
              get: VV => VV._useReflectionOverAlpha,
              set: (VV, eV) => {
                VV._useReflectionOverAlpha = eV
              }
            },
            metadata: eV
          }, aJ, oJ), (0, JV.i)(null, null, oe, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: VV => "_disableLighting" in VV,
              get: VV => VV._disableLighting,
              set: (VV, eV) => {
                VV._disableLighting = eV
              }
            },
            metadata: eV
          }, lJ, LJ), (0, JV.i)(null, null, he, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: VV => "_useObjectSpaceNormalMap" in VV,
              get: VV => VV._useObjectSpaceNormalMap,
              set: (VV, eV) => {
                VV._useObjectSpaceNormalMap = eV
              }
            },
            metadata: eV
          }, KJ, HJ), (0, JV.i)(null, null, Le, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: VV => "_useParallax" in VV,
              get: VV => VV._useParallax,
              set: (VV, eV) => {
                VV._useParallax = eV
              }
            },
            metadata: eV
          }, SJ, IJ), (0, JV.i)(null, null, me, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: VV => "_useParallaxOcclusion" in VV,
              get: VV => VV._useParallaxOcclusion,
              set: (VV, eV) => {
                VV._useParallaxOcclusion = eV
              }
            },
            metadata: eV
          }, VY, eY), (0, JV.i)(null, null, He, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: VV => "parallaxScaleBias" in VV,
              get: VV => VV.parallaxScaleBias,
              set: (VV, eV) => {
                VV.parallaxScaleBias = eV
              }
            },
            metadata: eV
          }, YY, UY), (0, JV.i)(null, null, ue, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: VV => "_roughness" in VV,
              get: VV => VV._roughness,
              set: (VV, eV) => {
                VV._roughness = eV
              }
            },
            metadata: eV
          }, yY, pY), (0, JV.i)(null, null, Se, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: VV => "indexOfRefraction" in VV,
              get: VV => VV.indexOfRefraction,
              set: (VV, eV) => {
                VV.indexOfRefraction = eV
              }
            },
            metadata: eV
          }, wY, ZY), (0, JV.i)(null, null, Ie, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: VV => "invertRefractionY" in VV,
              get: VV => VV.invertRefractionY,
              set: (VV, eV) => {
                VV.invertRefractionY = eV
              }
            },
            metadata: eV
          }, vY, rY), (0, JV.i)(null, null, de, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: VV => "alphaCutOff" in VV,
              get: VV => VV.alphaCutOff,
              set: (VV, eV) => {
                VV.alphaCutOff = eV
              }
            },
            metadata: eV
          }, kY, bY), (0, JV.i)(null, null, Oe, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: VV => "_useLightmapAsShadowmap" in VV,
              get: VV => VV._useLightmapAsShadowmap,
              set: (VV, eV) => {
                VV._useLightmapAsShadowmap = eV
              }
            },
            metadata: eV
          }, EY, BY), (0, JV.i)(null, null, ex, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: VV => "_diffuseFresnelParameters" in VV,
              get: VV => VV._diffuseFresnelParameters,
              set: (VV, eV) => {
                VV._diffuseFresnelParameters = eV
              }
            },
            metadata: eV
          }, tY, FY), (0, JV.i)(null, null, Jx, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: VV => "_opacityFresnelParameters" in VV,
              get: VV => VV._opacityFresnelParameters,
              set: (VV, eV) => {
                VV._opacityFresnelParameters = eV
              }
            },
            metadata: eV
          }, AY, NY), (0, JV.i)(null, null, Ux, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: VV => "_reflectionFresnelParameters" in VV,
              get: VV => VV._reflectionFresnelParameters,
              set: (VV, eV) => {
                VV._reflectionFresnelParameters = eV
              }
            },
            metadata: eV
          }, zY, GY), (0, JV.i)(null, null, px, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: VV => "_refractionFresnelParameters" in VV,
              get: VV => VV._refractionFresnelParameters,
              set: (VV, eV) => {
                VV._refractionFresnelParameters = eV
              }
            },
            metadata: eV
          }, gY, DY), (0, JV.i)(null, null, nx, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: VV => "_emissiveFresnelParameters" in VV,
              get: VV => VV._emissiveFresnelParameters,
              set: (VV, eV) => {
                VV._emissiveFresnelParameters = eV
              }
            },
            metadata: eV
          }, aY, oY), (0, JV.i)(null, null, Zx, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: VV => "_useReflectionFresnelFromSpecular" in VV,
              get: VV => VV._useReflectionFresnelFromSpecular,
              set: (VV, eV) => {
                VV._useReflectionFresnelFromSpecular = eV
              }
            },
            metadata: eV
          }, lY, LY), (0, JV.i)(null, null, rx, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: VV => "_useGlossinessFromSpecularMapAlpha" in VV,
              get: VV => VV._useGlossinessFromSpecularMapAlpha,
              set: (VV, eV) => {
                VV._useGlossinessFromSpecularMapAlpha = eV
              }
            },
            metadata: eV
          }, KY, HY), (0, JV.i)(null, null, bx, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: VV => "_maxSimultaneousLights" in VV,
              get: VV => VV._maxSimultaneousLights,
              set: (VV, eV) => {
                VV._maxSimultaneousLights = eV
              }
            },
            metadata: eV
          }, SY, IY), (0, JV.i)(null, null, Bx, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: VV => "_invertNormalMapX" in VV,
              get: VV => VV._invertNormalMapX,
              set: (VV, eV) => {
                VV._invertNormalMapX = eV
              }
            },
            metadata: eV
          }, VU, eU), (0, JV.i)(null, null, qx, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: VV => "_invertNormalMapY" in VV,
              get: VV => VV._invertNormalMapY,
              set: (VV, eV) => {
                VV._invertNormalMapY = eV
              }
            },
            metadata: eV
          }, YU, UU), (0, JV.i)(null, null, Fx, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: VV => "_twoSidedLighting" in VV,
              get: VV => VV._twoSidedLighting,
              set: (VV, eV) => {
                VV._twoSidedLighting = eV
              }
            },
            metadata: eV
          }, QU, nU), (0, JV.i)(null, null, Px, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: VV => "_applyDecalMapAfterDetailMap" in VV,
              get: VV => VV._applyDecalMapAfterDetailMap,
              set: (VV, eV) => {
                VV._applyDecalMapAfterDetailMap = eV
              }
            },
            metadata: eV
          }, vU, rU), eV && Object.defineProperty(VV, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: eV
          })
        })(), VV.ForceGLSL = !1, VV._ShaderLoader = new TV.b((() => [Promise.all([xV.e(626), xV.e(625)]).then((() => xV(44753))), Promise.all([xV.e(631), xV.e(627), xV.e(640), xV.e(630)]).then((() => xV(44955)))]), (() => [Promise.all([xV.e(647), xV.e(642)]).then((() => xV(45116))), Promise.all([xV.e(648), xV.e(658), xV.e(644)]).then((() => xV(45292)))])), VV
      })(),
      iV = !1;

    function CV() {
      iV || (iV = !0, (0, ZV.e)(), (0, MV.d)("BABYLON.StandardMaterial", DV), yV.e.DefaultMaterialFactory = VV => new DV("default material", VV))
    }
    Object.getOwnPropertyDescriptor(DV.prototype, "decalMap") || Object.defineProperty(DV.prototype, "decalMap", (0, zV.g)("StandardMaterial", "decalMap"))
  },
  41640: (VV, eV, xV) => {
    function JV(VV) {
      return class extends VV {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    xV.d(eV, {
      b: () => JV
    })
  },
  41635: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    class JV {
      constructor(VV, eV) {
        this._webGL = {
          load: VV,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: eV,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(VV) {
        const eV = 1 === VV ? this._webGPU : this._webGL;
        return eV.loaded ? void 0 : async () => {
          await this._loadAsync(eV)
        }
      }
      async _loadAsync(VV) {
        if (VV.loaded) return;
        let eV = VV.loadPromise;
        const xV = null === eV;
        xV && (eV = Promise.all(VV.load()), VV.loadPromise = eV);
        let JV = !1;
        try {
          await eV, JV = !0
        } finally {
          xV && this._completeLoad(VV, JV)
        }
      }
      _completeLoad(VV, eV) {
        VV.loaded = eV, VV.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);