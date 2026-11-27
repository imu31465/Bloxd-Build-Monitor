export const id = 290;
export const ids = [290];
export const modules = {
  41515: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    var ye = He(41129);

    function be(ee) {
      return class extends ee {
        constructor() {
          super(...arguments);
          const ee = new.target;
          if (!ee[Symbol.metadata]) {
            const ie = Object.getPrototypeOf(ee)?.[Symbol.metadata];
            ee[Symbol.metadata] = ie ? Object.create(ie) : {}
          }
          const ie = (0, ye.b)(ee[Symbol.metadata]);
          ie._imageProcessingConfiguration || (ie._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(ee) {
          this._attachImageProcessingConfiguration(ee), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(ee) {
          ee !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !ee && this.Xx ? this._imageProcessingConfiguration = this.Xx().imageProcessingConfiguration : ee && (this._imageProcessingConfiguration = ee), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(ee) {
          this.imageProcessingConfiguration.colorCurvesEnabled = ee
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(ee) {
          this.imageProcessingConfiguration.colorGradingEnabled = ee
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(ee) {
          this._imageProcessingConfiguration.toneMappingEnabled = ee
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(ee) {
          this._imageProcessingConfiguration.exposure = ee
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(ee) {
          this._imageProcessingConfiguration.contrast = ee
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(ee) {
          this._imageProcessingConfiguration.colorGradingTexture = ee
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(ee) {
          this._imageProcessingConfiguration.colorCurves = ee
        }
      }
    }
  },
  41400: (ee, ie, He) => {
    He.d(ie, {
      d: () => Me,
      e: () => be
    });
    var ye = He(41406);

    function be(ee) {
      return class extends ee {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class Me extends ye.e {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  41483: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re
    });
    var ye = He(41113),
      be = He(41414),
      Me = He(41121),
      Ke = He(41466),
      Ue = He(41406),
      Fe = He(41490),
      Je = He(41451);
    class oe extends Ue.e {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let Re = (() => {
      var ee, ie, He, Ue;
      let Re, ke, qe, fe, Te, pe, Xe = Fe.b,
        ze = [],
        Be = [],
        Ee = [],
        ge = [],
        Oe = [],
        de = [],
        We = [],
        te = [],
        Ze = [],
        we = [],
        De = [],
        Pe = [];
      return ee = class extends Xe {
        get texture() {
          return (0, ye.c)(this, ie, "f")
        }
        set texture(ee) {
          (0, ye.f)(this, ie, ee, "f")
        }
        get normalBlendMethod() {
          return (0, ye.c)(this, He, "f")
        }
        set normalBlendMethod(ee) {
          (0, ye.f)(this, He, ee, "f")
        }
        get isEnabled() {
          return (0, ye.c)(this, Ue, "f")
        }
        set isEnabled(ee) {
          (0, ye.f)(this, Ue, ee, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(ee) {
          let Me = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(ee, "DetailMap", 140, new oe, Me), this._texture = null, ie.set(this, (0, ye.l)(this, ze, void 0)), this.diffuseBlendLevel = ((0, ye.l)(this, Be), (0, ye.l)(this, Ee, 1)), this.roughnessBlendLevel = ((0, ye.l)(this, ge), (0, ye.l)(this, Oe, 1)), this.bumpLevel = ((0, ye.l)(this, de), (0, ye.l)(this, We, 1)), this._normalBlendMethod = ((0, ye.l)(this, te), be.e.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), He.set(this, (0, ye.l)(this, Ze, void 0)), this._isEnabled = ((0, ye.l)(this, we), !1), Ue.set(this, (0, ye.l)(this, De, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, ye.l)(this, Pe), this._internalMarkAllSubMeshesAsTexturesDirty = ee._dirtyCallbacks[1]
        }
        isReadyForSubMesh(ee, ie, He) {
          return !this._isEnabled || !(ee._areTexturesDirty && ie.texturesEnabled && He.getCaps().standardDerivatives && this._texture && Ke.c.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(ee, ie) {
          if (this._isEnabled) {
            ee.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const He = ie.Nf();
            ee._areTexturesDirty && (He.getCaps().standardDerivatives && this._texture && Ke.c.DetailTextureEnabled && this._isEnabled ? ((0, Je.Z)(this._texture, ee, "DETAIL"), ee.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : ee.DETAIL = !1)
          } else ee.DETAIL = !1
        }
        bindForSubMesh(ee, ie) {
          if (!this._isEnabled) return;
          const He = this._material.isFrozen;
          ee.useUbo && He && ee.isSync || this._texture && Ke.c.DetailTextureEnabled && (ee.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, Je.A)(this._texture, ee, "detail")), ie.texturesEnabled && this._texture && Ke.c.DetailTextureEnabled && ee.setTexture("detailSampler", this._texture)
        }
        hasTexture(ee) {
          return this._texture === ee
        }
        getActiveTextures(ee) {
          this._texture && ee.push(this._texture)
        }
        getAnimatables(ee) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && ee.push(this._texture)
        }
        dispose(ee) {
          ee && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(ee) {
          ee.push("detailSampler")
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
      }, ie = new WeakMap, He = new WeakMap, Ue = new WeakMap, (() => {
        const ie = "function" === typeof Symbol && Symbol.metadata ? Object.create(Xe[Symbol.metadata] ?? null) : void 0;
        Re = [(0, Me.H)("detailTexture"), (0, Me.d)("_markAllSubMeshesAsTexturesDirty")], ke = [(0, Me.R)()], qe = [(0, Me.R)()], fe = [(0, Me.R)()], Te = [(0, Me.R)(), (0, Me.d)("_markAllSubMeshesAsTexturesDirty")], pe = [(0, Me.R)(), (0, Me.d)("_markAllSubMeshesAsTexturesDirty")], (0, ye.i)(ee, null, Re, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: ee => "texture" in ee,
            get: ee => ee.texture,
            set: (ee, ie) => {
              ee.texture = ie
            }
          },
          metadata: ie
        }, ze, Be), (0, ye.i)(ee, null, Te, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: ee => "normalBlendMethod" in ee,
            get: ee => ee.normalBlendMethod,
            set: (ee, ie) => {
              ee.normalBlendMethod = ie
            }
          },
          metadata: ie
        }, Ze, we), (0, ye.i)(ee, null, pe, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: ee => "isEnabled" in ee,
            get: ee => ee.isEnabled,
            set: (ee, ie) => {
              ee.isEnabled = ie
            }
          },
          metadata: ie
        }, De, Pe), (0, ye.i)(null, null, ke, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: ee => "diffuseBlendLevel" in ee,
            get: ee => ee.diffuseBlendLevel,
            set: (ee, ie) => {
              ee.diffuseBlendLevel = ie
            }
          },
          metadata: ie
        }, Ee, ge), (0, ye.i)(null, null, qe, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: ee => "roughnessBlendLevel" in ee,
            get: ee => ee.roughnessBlendLevel,
            set: (ee, ie) => {
              ee.roughnessBlendLevel = ie
            }
          },
          metadata: ie
        }, Oe, de), (0, ye.i)(null, null, fe, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: ee => "bumpLevel" in ee,
            get: ee => ee.bumpLevel,
            set: (ee, ie) => {
              ee.bumpLevel = ie
            }
          },
          metadata: ie
        }, We, te), ie && Object.defineProperty(ee, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ie
        })
      })(), ee
    })()
  },
  41406: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    class ye {
      constructor(ee) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = ee, ee)
          for (const ie in ee) Object.prototype.hasOwnProperty.call(ee, ie) && this._setDefaultValue(ie)
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
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || ee, this._isDirty = !0
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
        for (const ee of Object.keys(this)) "_" !== ee[0] && this._keys.push(ee);
        if (this._externalProperties)
          for (const ee in this._externalProperties) - 1 === this._keys.indexOf(ee) && this._keys.push(ee)
      }
      isEqual(ee) {
        if (this._keys.length !== ee._keys.length) return !1;
        for (let ie = 0; ie < this._keys.length; ie++) {
          const He = this._keys[ie];
          if (this[He] !== ee[He]) return !1
        }
        return !0
      }
      cloneTo(ee) {
        this._keys.length !== ee._keys.length && (ee._keys = this._keys.slice(0));
        for (let ie = 0; ie < this._keys.length; ie++) {
          const He = this._keys[ie];
          ee[He] = this[He]
        }
      }
      reset() {
        for (const ee of this._keys) this._setDefaultValue(ee)
      }
      _setDefaultValue(ee) {
        const ie = this._externalProperties?.[ee]?.type ?? typeof this[ee],
          He = this._externalProperties?.[ee]?.default;
        switch (ie) {
          case "number":
            this[ee] = He ?? 0;
            break;
          case "string":
            this[ee] = He ?? "";
            break;
          default:
            this[ee] = He ?? !1
        }
      }
      toString() {
        let ee = "";
        for (let ie = 0; ie < this._keys.length; ie++) {
          const He = this._keys[ie],
            ye = this[He];
          switch (typeof ye) {
            case "number":
            case "string":
              ee += "#define " + He + " " + ye + "\n";
              break;
            default:
              ye && (ee += "#define " + He + "\n")
          }
        }
        return ee
      }
    }
  },
  41499: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      d: () => Ke,
      e: () => Me
    });
    var ye, be = He(37917);

    function Me(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const ye = ie(ee);
      if (!Number.isInteger(ye) || ye < 0 || ye > He) throw new Error(`Invalid geometry object ID ${ye} for mesh "${ee.name}". Object IDs must be integers between 0 and 0x${He.toString(16).toUpperCase()}.`);
      return ye
    }

    function Ke(ee, ie) {
      const He = ie(ee);
      if (!Number.isInteger(He) || He < 0 || He > 255 || 0 !== He && 0 === (63 & He)) throw new Error(`Invalid geometry mesh-blending tag ${He} for mesh "${ee.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return He
    }! function(ee) {
      ee[ee.Zero = 0] = "Zero", ee[ee.One = 1] = "One", ee[ee.MaxViewZ = 2] = "MaxViewZ", ee[ee.NoClear = 3] = "NoClear"
    }(ye || (ye = {}));
    class Ue {
      static CreateConfiguration(ee) {
        return Ue._Configurations[ee] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: be.b.Zero(),
          currentViewProjection: be.b.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, Ue._Configurations[ee]
      }
      static DeleteConfiguration(ee) {
        delete Ue._Configurations[ee]
      }
      static GetConfiguration(ee) {
        return Ue._Configurations[ee]
      }
      static _PrepareConfiguration(ee, ie, He) {
        const ye = Ue._Configurations[ee];
        ye._attachments = ie, ye._colorAttachments = He, ye._mrtCount = ie.length;
        let be = "#define PREPASS\n";
        for (const Me of Ue.GeometryTextureDescriptions) {
          const ee = ye.defines[Me.defineIndex];
          void 0 !== ee && (be += `#define ${Me.define}\n#define ${Me.defineIndex} ${ee}\n`)
        }
        ye.objectIdIsRedFormat && (be += "#define PREPASS_OBJECT_ID_R8\n"), ye._defines = be + `#define SCENE_MRT_COUNT ${ie.length}\n`
      }
      static _PrepareStringDefines(ee, ie) {
        const He = Ue._Configurations[ee];
        return !!He?._defines && (ie.push(He._defines), !0)
      }
      static _BindAttachmentsForEffect(ee, ie) {
        const He = Ue._Configurations[ee.currentRenderPassId];
        return !He?._attachments || (ee.bindAttachments(ie._multiTarget ? He._attachments : He._colorAttachments), ie._multiTarget || void 0 !== He.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(ee) {
        const ie = Ue._Configurations[ee.currentRenderPassId];
        ie?._colorAttachments && ee.bindAttachments(ie._colorAttachments)
      }
      static _BindColorAttachments(ee) {
        const ie = Ue._Configurations[ee.currentRenderPassId];
        return !ie?._colorAttachments || (ee.bindAttachments(ie._colorAttachments), void 0 !== ie.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(ee) {
        const ie = Ue._Configurations[ee.currentRenderPassId];
        return !ie?._colorAttachments || void 0 !== ie.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(ee, ie) {
        const He = Ue._Configurations[ee.currentRenderPassId];
        if (!He) return;
        const ye = ee.getAlphaMode(),
          be = void 0 === He.defines.PREPASS_COLOR_INDEX || 2 === ye || 1 === ye || 17 === ye;
        ie.setFloat("geometryZeroAlphaDiscard", be ? 1 : 0)
      }
      static AddUniformsAndSamplers(ee, ie) {
        ee.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(ee, ie) {
        for (const He of ie)
          if (He.pW)
            for (const ie of He.pW) ie._removeDrawWrapper(ee)
      }
      static PrepareDefines(ee, ie, He) {
        if (!He._arePrePassDirty) return;
        const ye = Ue._Configurations[ee];
        if (!ye) return;
        He.PREPASS = !0;
        let be = 0;
        for (let Me = 0; Me < Ue.GeometryTextureDescriptions.length; Me++) {
          const ee = Ue.GeometryTextureDescriptions[Me],
            ie = ee.define,
            Ke = ee.defineIndex,
            Fe = ye.defines[Ke];
          void 0 !== Fe ? (He[ie] = !0, He[Ke] = Fe, be++) : (He[ie] = !1, delete He[Ke])
        }
        He.PREPASS_OBJECT_ID_R8 = ye.objectIdIsRedFormat, He.SCENE_MRT_COUNT = ye._mrtCount ?? be, He.BONES_VELOCITY_ENABLED = ie.useBones && ie.computeBonesUsingShaders && ie.skeleton && !ie.skeleton.isUsingTextureForMatrices && -1 === ye.excludedSkinnedMesh.indexOf(ie)
      }
      static Bind(ee, ie, He, ye, be) {
        const Fe = Ue._Configurations[ee];
        if (!Fe) return;
        const Je = He.Xx(),
          oe = Je.Nf();
        if (Fe.reverseCulling && oe.setStateCullFaceType(Je._mirroredCameraPosition ? be.cullBackFaces : !be.cullBackFaces), void 0 !== Fe.defines.PREPASS_OBJECT_ID_INDEX) {
          const ee = Fe.objectIdIsRedFormat ? 255 : 16777215;
          let ye = He.uniqueId;
          if (Fe.objectIdProvider) ye = Me(He, Fe.objectIdProvider, ee);
          else if (ye > ee) throw new Error(`Invalid geometry object ID ${ye} for mesh "${He.name}". Object IDs must be integers between 0 and 0x${ee.toString(16).toUpperCase()}.`);
          ie.setFloat("objectId", ye)
        }
        if (void 0 !== Fe.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const ee = Fe.meshBlendTagProvider ? Ke(He, Fe.meshBlendTagProvider) : He.meshBlendingTag;
          ie.setInt("meshBlendTag", ee)
        }
        if (void 0 !== Fe.defines.PREPASS_VELOCITY_INDEX || void 0 !== Fe.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const ee = Fe._currentWorldMatrices ?? (Fe._currentWorldMatrices = {}),
            be = Fe._worldMatrixFrameIds ?? (Fe._worldMatrixFrameIds = {});
          if (ee[He.uniqueId] || (ee[He.uniqueId] = ye.clone(), Fe.previousWorldMatrices[He.uniqueId] = ye.clone()), be[He.uniqueId] !== oe.frameId && (Fe.previousWorldMatrices[He.uniqueId].jD(ee[He.uniqueId]), be[He.uniqueId] = oe.frameId), ee[He.uniqueId].jD(ye), -1 === Fe.lastUpdateFrameId ? (Fe.lastUpdateFrameId = oe.frameId, Fe.previousViewProjection.jD(Je.getTransformMatrix()), Fe.currentViewProjection.jD(Je.getTransformMatrix())) : Fe.currentViewProjection.updateFlag !== Je.getTransformMatrix().updateFlag ? (Fe.lastUpdateFrameId = oe.frameId, Fe.previousViewProjection.jD(Fe.currentViewProjection), Fe.currentViewProjection.jD(Je.getTransformMatrix())) : Fe.lastUpdateFrameId !== oe.frameId && (Fe.lastUpdateFrameId = oe.frameId, Fe.previousViewProjection.jD(Fe.currentViewProjection)), ie.setMatrix("previousWorld", Fe.previousWorldMatrices[He.uniqueId]), ie.setMatrix("previousViewProjection", Fe.previousViewProjection), He.useBones && He.computeBonesUsingShaders && He.skeleton) {
            const ee = He.skeleton;
            if (!ee.isUsingTextureForMatrices || -1 === ie.getUniformIndex("boneTextureInfo")) {
              const ye = ee.getTransformMatrices(He);
              ye && (Fe.previousBones[He.uniqueId] || (Fe.previousBones[He.uniqueId] = ye.slice()), ie.setMatrices("mPreviousBones", Fe.previousBones[He.uniqueId]), Fe.previousBones[He.uniqueId].set(ye))
            }
          }
        }
      }
    }
    Ue.GeometryTextureDescriptions = [{
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
    }], Ue._Configurations = {}
  },
  41490: (ee, ie, He) => {
    He.d(ie, {
      b: () => ke,
      d: () => fe
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(40988),
      Ke = He(40954);
    const Ue = new RegExp("^([gimus]+)!");
    class Fe {
      constructor(ee) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = ee, this._scene = ee.Xx(), this._engine = this._scene.Nf()
      }
      _addPlugin(ee) {
        for (let ye = 0; ye < this._plugins.length; ++ye)
          if (this._plugins[ye].name === ee.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !ee.isCompatible(this._material.shaderLanguage)) throw `The plugin "${ee.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const ie = ee.getClassName();
        Fe._MaterialPluginClassToMainDefine[ie] || (Fe._MaterialPluginClassToMainDefine[ie] = "MATERIALPLUGIN_" + ++Fe._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (ee, ie) => this._handlePluginEvent(ee, ie), this._plugins.push(ee), this._plugins.sort(((ee, ie) => ee.priority - ie.priority)), this._codeInjectionPoints = {};
        const He = {};
        He[Fe._MaterialPluginClassToMainDefine[ie]] = {
          type: "boolean",
          default: !0
        };
        for (const ye of this._plugins) ye.collectDefines(He), this._collectPointNames("vertex", ye.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", ye.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = He, !0
      }
      _activatePlugin(ee) {
        -1 === this._activePlugins.indexOf(ee) && (this._activePlugins.push(ee), this._activePlugins.sort(((ee, ie) => ee.priority - ie.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), ee.registerForExtraEvents && (this._activePluginsForExtraEvents.push(ee), this._activePluginsForExtraEvents.sort(((ee, ie) => ee.priority - ie.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(ee) {
        for (let ie = 0; ie < this._plugins.length; ++ie)
          if (this._plugins[ie].name === ee) return this._plugins[ie];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(ee) {
        let ie = !0;
        for (const He of this._activePlugins) ie = ie && He.isReadyForSubMesh(ee.defines, this._scene, this._engine, ee.subMesh);
        ee.isReadyForSubMesh = ie
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(ee) {
        for (const ie of this._activePlugins) ie.prepareDefinesBeforeAttributes(ee.defines, this._scene, ee.mesh)
      }
      _handlePluginEventPrepareDefines(ee) {
        for (const ie of this._activePlugins) ie.prepareDefines(ee.defines, this._scene, ee.mesh)
      }
      _handlePluginEventHardBindForSubMesh(ee) {
        for (const ie of this._activePluginsForExtraEvents) ie.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, ee.subMesh)
      }
      _handlePluginEventBindForSubMesh(ee) {
        for (const ie of this._activePlugins) ie.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, ee.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(ee) {
        let ie = !1;
        for (const He of this._activePluginsForExtraEvents)
          if (ie = He.hasRenderTargetTextures(), ie) break;
        ee.hasRenderTargetTextures = ie
      }
      _handlePluginEventFillRenderTargetTextures(ee) {
        for (const ie of this._activePluginsForExtraEvents) ie.fillRenderTargetTextures(ee.renderTargets)
      }
      _handlePluginEvent(ee, ie) {
        switch (ee) {
          case 512: {
            const ee = ie;
            for (const ie of this._activePlugins) ie.getActiveTextures(ee.activeTextures);
            break
          }
          case 256: {
            const ee = ie;
            for (const ie of this._activePlugins) ie.getAnimatables(ee.animatables);
            break
          }
          case 1024: {
            const ee = ie;
            let He = !1;
            for (const ie of this._activePlugins)
              if (He = ie.hasTexture(ee.texture), He) break;
            ee.hasTexture = He;
            break
          }
          case 2: {
            const ee = ie;
            for (const ie of this._plugins) ie.dispose(ee.forceDisposeTextures);
            break
          }
          case 4:
            ie.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const ee = ie;
            for (const ie of this._activePlugins) ee.fallbackRank = ie.addFallbacks(ee.defines, ee.fallbacks, ee.fallbackRank), ie.getAttributes(ee.attributes, this._scene, ee.mesh);
            this._uniformList.length > 0 && ee.uniforms.push(...this._uniformList), this._samplerList.length > 0 && ee.samplers.push(...this._samplerList), this._uboList.length > 0 && ee.uniformBuffersNames.push(...this._uboList), ee.customCode = this._injectCustomCode(ee, ee.customCode);
            break
          }
          case 8: {
            const ee = ie;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const He = 1 === this._material.shaderLanguage;
            for (const ie of this._plugins) {
              const ye = ie.getUniforms(this._material.shaderLanguage);
              if (ye) {
                if (ye.ubo)
                  for (const ie of ye.ubo) {
                    if (ie.size && ie.type) {
                      const ye = ie.arraySize ?? 0;
                      if (ee.ubo.addUniform(ie.name, ie.size, ye), He) {
                        let ee;
                        switch (ie.type) {
                          case "mat4":
                            ee = "mat4x4f";
                            break;
                          case "float":
                            ee = "f32";
                            break;
                          default:
                            ee = `${ie.type}f`
                        }
                        this._uboDeclaration += ye > 0 ? `uniform ${ie.name}: array<${ee}, ${ye}>;\n` : `uniform ${ie.name}: ${ee};\n`
                      } else this._uboDeclaration += `${ie.type} ${ie.name}${ye>0?`[${ye}]`:""};\n`
                    }
                    this._uniformList.push(ie.name)
                  }
                ye.vertex && (this._vertexDeclaration += ye.vertex + "\n"), ye.fragment && (this._fragmentDeclaration += ye.fragment + "\n"), ye.externalUniforms && this._uniformList.push(...ye.externalUniforms)
              }
              ie.getSamplers(this._samplerList), ie.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(ee, ie) {
        if (ie)
          for (const He in ie) this._codeInjectionPoints[ee] || (this._codeInjectionPoints[ee] = {}), this._codeInjectionPoints[ee][He] = !0
      }
      _injectCustomCode(ee, ie) {
        return (He, ye) => {
          ie && (ye = ie(He, ye)), this._uboDeclaration && (ye = ye.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (ye = ye.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (ye = ye.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const be = this._codeInjectionPoints?.[He];
          if (!be) return ye;
          let Fe = null;
          for (let ie in be) {
            let be = "";
            for (const ye of this._activePlugins) {
              const Ue = this._material.shaderLanguage;
              let Je = ye.getCustomCode(He, Ue)?.[ie];
              Je && (ye.resolveIncludes && (null === Fe && (Fe = {
                defines: [],
                indexParameters: ee.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: Ke.d.GetShadersRepository(Ue),
                includesShadersStore: Ke.d.GetIncludesShadersStore(Ue),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                Gbe: this._engine.Gbe,
                processCodeAfterIncludes: void 0
              }), Fe.isFragment = "fragment" === He, (0, Me.k)(Je, Fe, (ee => Je = ee))), be += Je + "\n")
            }
            if (be.length > 0)
              if ("!" === ie.charAt(0)) {
                ie = ie.substring(1);
                let ee = "g";
                if ("!" === ie.charAt(0)) ee = "", ie = ie.substring(1);
                else {
                  const He = Ue.exec(ie);
                  He && He.length >= 2 && (ee = He[1], ie = ie.substring(ee.length + 1))
                }
                ee.indexOf("g") < 0 && (ee += "g");
                const He = new RegExp(ie, ee);
                let Me = He.exec(ye);
                for (; null !== Me;) {
                  const {
                    index: ee
                  } = Me, ie = Je(be, Me);
                  ye = ye.substring(0, ee) + ie + ye.substring(ee + Me[0].length), He.lastIndex = ee + ie.length, Me = He.exec(ye)
                }
              } else {
                const ee = "#define " + ie;
                ye = ye.replace(ee, "\n" + be + "\n" + ee)
              }
          }
          return ye
        }
      }
    }
    Fe._MaterialPluginClassToMainDefine = {}, Fe._MaterialPluginCounter = 0;

    function Je(ee, ie) {
      return ee.replace(/\$(\d+)/g, ((ee, He) => {
        const ye = Number(He);
        return ye < ie.length ? ie[ye] : ""
      }))
    }
    var oe = He(41141),
      Re = He(37949);
    let ke = (() => {
        var ee;
        let ie, He, Me, Ke, Ue = [],
          Je = [],
          Re = [],
          ke = [],
          qe = [],
          fe = [],
          Te = [],
          pe = [];
        return ee = class {
          isCompatible(ee) {
            return 0 === ee
          }
          _enable(ee) {
            ee && this._pluginManager._activatePlugin(this)
          }
          constructor(ee, ie, He, be) {
            let Me = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              Ke = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              oe = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, ye.l)(this, Ue, void 0), this.priority = ((0, ye.l)(this, Je), (0, ye.l)(this, Re, 500)), this.resolveIncludes = ((0, ye.l)(this, ke), (0, ye.l)(this, qe, !1)), this.registerForExtraEvents = ((0, ye.l)(this, fe), (0, ye.l)(this, Te, !1)), this.doNotSerialize = ((0, ye.l)(this, pe), !1), this._material = ee, this.name = ie, this.priority = He, this.resolveIncludes = oe, ee.pluginManager || (ee.pluginManager = new Fe(ee), ee.Bx.add((() => {
              ee.pluginManager = void 0
            }))), this._pluginDefineNames = be, this._pluginManager = ee.pluginManager, Me && this._pluginManager._addPlugin(this), Ke && this._enable(!0), this.markAllDefinesAsDirty = ee._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(ee, ie, He, ye) {
            return !0
          }
          hardBindForSubMesh(ee, ie, He, ye) {}
          bindForSubMesh(ee, ie, He, ye) {}
          dispose(ee) {}
          getCustomCode(ee) {
            return null
          }
          collectDefines(ee) {
            if (this._pluginDefineNames)
              for (const ie of Object.keys(this._pluginDefineNames)) {
                if ("_" === ie[0]) continue;
                const He = typeof this._pluginDefineNames[ie];
                ee[ie] = {
                  type: "number" === He ? "number" : "string" === He ? "string" : "boolean" === He ? "boolean" : "object",
                  default: this._pluginDefineNames[ie]
                }
              }
          }
          prepareDefinesBeforeAttributes(ee, ie, He) {}
          prepareDefines(ee, ie, He) {}
          hasTexture(ee) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(ee) {}
          getActiveTextures(ee) {}
          getAnimatables(ee) {}
          addFallbacks(ee, ie, He) {
            return He
          }
          getSamplers(ee) {}
          getAttributes(ee, ie, He) {}
          getUniformBuffersNames(ee) {}
          getUniforms() {
            return {}
          }
          copyTo(ee) {
            oe.c.Clone((() => ee), this)
          }
          serialize() {
            return oe.c.Serialize(this)
          }
          parse(ee, ie, He) {
            oe.c.Parse((() => this), ee, ie, He)
          }
        }, (() => {
          const Fe = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ie = [(0, be.R)()], He = [(0, be.R)()], Me = [(0, be.R)()], Ke = [(0, be.R)()], (0, ye.i)(null, null, ie, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: ee => "name" in ee,
              get: ee => ee.name,
              set: (ee, ie) => {
                ee.name = ie
              }
            },
            metadata: Fe
          }, Ue, Je), (0, ye.i)(null, null, He, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: ee => "priority" in ee,
              get: ee => ee.priority,
              set: (ee, ie) => {
                ee.priority = ie
              }
            },
            metadata: Fe
          }, Re, ke), (0, ye.i)(null, null, Me, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: ee => "resolveIncludes" in ee,
              get: ee => ee.resolveIncludes,
              set: (ee, ie) => {
                ee.resolveIncludes = ie
              }
            },
            metadata: Fe
          }, qe, fe), (0, ye.i)(null, null, Ke, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: ee => "registerForExtraEvents" in ee,
              get: ee => ee.registerForExtraEvents,
              set: (ee, ie) => {
                ee.registerForExtraEvents = ie
              }
            },
            metadata: Fe
          }, Te, pe), Fe && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Fe
          })
        })(), ee
      })(),
      qe = !1;

    function fe() {
      qe || (qe = !0, (0, Re.e)("BABYLON.MaterialPluginBase", ke))
    }
  },
  41391: (ee, ie, He) => {
    He.d(ie, {
      b: () => ye
    });
    class ye {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(ee) {
        ee.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(ee) {}
      bindForSubMesh(ee, ie, He, ye, be) {
        if (ie.prePassRenderer && ie.prePassRenderer.enabled && ie.prePassRenderer.currentRTisSceneRT && (-1 !== ie.prePassRenderer.getIndex(2) || -1 !== ie.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[He.uniqueId] || (this.previousWorldMatrices[He.uniqueId] = ye.clone()), this.previousViewProjection || (this.previousViewProjection = ie.getTransformMatrix().clone(), this.currentViewProjection = ie.getTransformMatrix().clone());
          const be = ie.Nf();
          this.currentViewProjection.updateFlag !== ie.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = be.frameId, this.previousViewProjection.jD(this.currentViewProjection), this.currentViewProjection.jD(ie.getTransformMatrix())) : this._lastUpdateFrameId !== be.frameId && (this._lastUpdateFrameId = be.frameId, this.previousViewProjection.jD(this.currentViewProjection)), ee.setMatrix("previousWorld", this.previousWorldMatrices[He.uniqueId]), ee.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[He.uniqueId] = ye.clone()
        }
      }
    }
  },
  41509: (ee, ie, He) => {
    function ye(ee) {
      return class extends ee {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    He.d(ie, {
      d: () => ye
    })
  },
  41380: (ee, ie, He) => {
    He.d(ie, {
      StandardMaterial: () => ye.h
    });
    var ye = He(41382);
    (0, ye.d)()
  },
  41382: (ee, ie, He) => {
    He.d(ie, {
      d: () => xe,
      h: () => ae
    });
    var ye = He(41113),
      be = He(41121),
      Me = He(41216),
      Ke = He(41199),
      Ue = He(38022),
      Fe = He(41247),
      Je = He(41391),
      oe = He(41400),
      Re = He(41222),
      ke = He(41414),
      qe = He(41406),
      fe = He(41472),
      Te = He(41466),
      pe = He(41481),
      Xe = He(41483),
      ze = He(41458),
      Be = He(41495),
      Ee = He(41451),
      ge = He(41141),
      Oe = He(41497),
      de = He(41499),
      We = He(41502),
      te = He(41509),
      Ze = He(41515),
      we = He(37949),
      De = He(40985);
    const Pe = {
      effect: null,
      subMesh: null
    };
    class Ae extends((0, te.d)((0, We.d)(qe.e))) {}
    class Ye extends((0, oe.e)(Ae)) {
      constructor(ee) {
        super(ee), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class Ve extends((0, Ze.e)(fe.c)) {}
    let ae = (() => {
        var ee, ie, oe, qe, We, te, Ze, we, De, Ae, ae, ce, xe, Le, Ce, ve, ue, me, le, Se, ne, je, se, Ie, he, Ne, Ge, re, Qe, ei, ii, Hi, yi;
        let bi, Mi, Ki, Ui, Fi, Ji, oi, Ri, ki, qi, fi, Ti, Xi, zi, Bi, Ei, gi, Oi, di, Wi, ti, Zi, wi, Di, Pi, Ai, Yi, Vi, ai, ci, xi, Li, Ci, vi, ui, mi, li, Si, ni, ji, si, Ii, Ni, Gi, ri, Qi, eH, iH, HH, yH, bH, MH, KH, UH, FH, JH, oH, RH, kH, qH, fH, TH, pH, XH, zH, BH, EH, gH, OH, dH, WH, tH, ZH, wH = Ve,
          DH = [],
          PH = [],
          AH = [],
          YH = [],
          VH = [],
          aH = [],
          cH = [],
          xH = [],
          LH = [],
          CH = [],
          vH = [],
          uH = [],
          mH = [],
          lH = [],
          SH = [],
          nH = [],
          jH = [],
          sH = [],
          IH = [],
          hH = [],
          NH = [],
          GH = [],
          rH = [],
          QH = [],
          ey = [],
          iy = [],
          Hy = [],
          yy = [],
          by = [],
          My = [],
          Ky = [],
          Uy = [],
          Fy = [],
          Jy = [],
          oy = [],
          Ry = [],
          ky = [],
          qy = [],
          fy = [],
          Ty = [],
          py = [],
          Xy = [],
          zy = [],
          By = [],
          Ey = [],
          gy = [],
          Oy = [],
          dy = [],
          Wy = [],
          ty = [],
          Zy = [],
          wy = [],
          Dy = [],
          Py = [],
          Ay = [],
          Yy = [],
          Vy = [],
          ay = [],
          cy = [],
          xy = [],
          Ly = [],
          Cy = [],
          vy = [],
          uy = [],
          my = [],
          ly = [],
          Sy = [],
          ny = [],
          jy = [],
          sy = [],
          Iy = [],
          hy = [],
          Ny = [],
          Gy = [],
          ry = [],
          Qy = [],
          eb = [],
          ib = [],
          Hb = [],
          yb = [],
          bb = [],
          Mb = [],
          Kb = [],
          Ub = [],
          Fb = [],
          Jb = [],
          ob = [],
          Rb = [],
          kb = [],
          qb = [],
          fb = [],
          Tb = [],
          pb = [],
          Xb = [],
          zb = [],
          Bb = [],
          Eb = [],
          gb = [],
          Ob = [],
          db = [],
          Wb = [],
          tb = [],
          Zb = [],
          wb = [],
          Db = [],
          Pb = [],
          Ab = [],
          Yb = [],
          Vb = [],
          ab = [],
          cb = [],
          xb = [],
          Lb = [],
          Cb = [],
          vb = [],
          ub = [],
          mb = [],
          lb = [],
          Sb = [],
          nb = [],
          jb = [],
          sb = [],
          Ib = [],
          hb = [],
          Nb = [],
          Gb = [],
          rb = [],
          Qb = [],
          eM = [],
          iM = [],
          HM = [],
          yM = [],
          bM = [],
          MM = [],
          KM = [],
          UM = [],
          FM = [],
          JM = [],
          oM = [],
          RM = [],
          kM = [],
          qM = [],
          fM = [],
          TM = [],
          pM = [],
          XM = [];
        return ee = class extends wH {
          get diffuseTexture() {
            return (0, ye.c)(this, ie, "f")
          }
          set diffuseTexture(ee) {
            (0, ye.f)(this, ie, ee, "f")
          }
          get ambientTexture() {
            return (0, ye.c)(this, oe, "f")
          }
          set ambientTexture(ee) {
            (0, ye.f)(this, oe, ee, "f")
          }
          get opacityTexture() {
            return (0, ye.c)(this, qe, "f")
          }
          set opacityTexture(ee) {
            (0, ye.f)(this, qe, ee, "f")
          }
          get reflectionTexture() {
            return (0, ye.c)(this, We, "f")
          }
          set reflectionTexture(ee) {
            (0, ye.f)(this, We, ee, "f")
          }
          get emissiveTexture() {
            return (0, ye.c)(this, te, "f")
          }
          set emissiveTexture(ee) {
            (0, ye.f)(this, te, ee, "f")
          }
          get specularTexture() {
            return (0, ye.c)(this, Ze, "f")
          }
          set specularTexture(ee) {
            (0, ye.f)(this, Ze, ee, "f")
          }
          get bumpTexture() {
            return (0, ye.c)(this, we, "f")
          }
          set bumpTexture(ee) {
            (0, ye.f)(this, we, ee, "f")
          }
          get lightmapTexture() {
            return (0, ye.c)(this, De, "f")
          }
          set lightmapTexture(ee) {
            (0, ye.f)(this, De, ee, "f")
          }
          get refractionTexture() {
            return (0, ye.c)(this, Ae, "f")
          }
          set refractionTexture(ee) {
            (0, ye.f)(this, Ae, ee, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, ye.c)(this, ae, "f")
          }
          set useAlphaFromDiffuseTexture(ee) {
            (0, ye.f)(this, ae, ee, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, ye.c)(this, ce, "f")
          }
          set useEmissiveAsIllumination(ee) {
            (0, ye.f)(this, ce, ee, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, ye.c)(this, xe, "f")
          }
          set linkEmissiveWithDiffuse(ee) {
            (0, ye.f)(this, xe, ee, "f")
          }
          get useSpecularOverAlpha() {
            return (0, ye.c)(this, Le, "f")
          }
          set useSpecularOverAlpha(ee) {
            (0, ye.f)(this, Le, ee, "f")
          }
          get useReflectionOverAlpha() {
            return (0, ye.c)(this, Ce, "f")
          }
          set useReflectionOverAlpha(ee) {
            (0, ye.f)(this, Ce, ee, "f")
          }
          get disableLighting() {
            return (0, ye.c)(this, ve, "f")
          }
          set disableLighting(ee) {
            (0, ye.f)(this, ve, ee, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, ye.c)(this, ue, "f")
          }
          set useObjectSpaceNormalMap(ee) {
            (0, ye.f)(this, ue, ee, "f")
          }
          get useParallax() {
            return (0, ye.c)(this, me, "f")
          }
          set useParallax(ee) {
            (0, ye.f)(this, me, ee, "f")
          }
          get useParallaxOcclusion() {
            return (0, ye.c)(this, le, "f")
          }
          set useParallaxOcclusion(ee) {
            (0, ye.f)(this, le, ee, "f")
          }
          get roughness() {
            return (0, ye.c)(this, Se, "f")
          }
          set roughness(ee) {
            (0, ye.f)(this, Se, ee, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, ye.c)(this, ne, "f")
          }
          set useLightmapAsShadowmap(ee) {
            (0, ye.f)(this, ne, ee, "f")
          }
          get diffuseFresnelParameters() {
            return (0, ye.c)(this, je, "f")
          }
          set diffuseFresnelParameters(ee) {
            (0, ye.f)(this, je, ee, "f")
          }
          get opacityFresnelParameters() {
            return (0, ye.c)(this, se, "f")
          }
          set opacityFresnelParameters(ee) {
            (0, ye.f)(this, se, ee, "f")
          }
          get reflectionFresnelParameters() {
            return (0, ye.c)(this, Ie, "f")
          }
          set reflectionFresnelParameters(ee) {
            (0, ye.f)(this, Ie, ee, "f")
          }
          get refractionFresnelParameters() {
            return (0, ye.c)(this, he, "f")
          }
          set refractionFresnelParameters(ee) {
            (0, ye.f)(this, he, ee, "f")
          }
          get emissiveFresnelParameters() {
            return (0, ye.c)(this, Ne, "f")
          }
          set emissiveFresnelParameters(ee) {
            (0, ye.f)(this, Ne, ee, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, ye.c)(this, Ge, "f")
          }
          set useReflectionFresnelFromSpecular(ee) {
            (0, ye.f)(this, Ge, ee, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, ye.c)(this, re, "f")
          }
          set useGlossinessFromSpecularMapAlpha(ee) {
            (0, ye.f)(this, re, ee, "f")
          }
          get maxSimultaneousLights() {
            return (0, ye.c)(this, Qe, "f")
          }
          set maxSimultaneousLights(ee) {
            (0, ye.f)(this, Qe, ee, "f")
          }
          get invertNormalMapX() {
            return (0, ye.c)(this, ei, "f")
          }
          set invertNormalMapX(ee) {
            (0, ye.f)(this, ei, ee, "f")
          }
          get invertNormalMapY() {
            return (0, ye.c)(this, ii, "f")
          }
          set invertNormalMapY(ee) {
            (0, ye.f)(this, ii, ee, "f")
          }
          get twoSidedLighting() {
            return (0, ye.c)(this, Hi, "f")
          }
          set twoSidedLighting(ee) {
            (0, ye.f)(this, Hi, ee, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, ye.c)(this, yi, "f")
          }
          set applyDecalMapAfterDetailMap(ee) {
            (0, ye.f)(this, yi, ee, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(He, be) {
            super(He, be, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || ee.ForceGLSL), this._diffuseTexture = (0, ye.l)(this, DH, null), ie.set(this, ((0, ye.l)(this, PH), (0, ye.l)(this, AH, void 0))), this._ambientTexture = ((0, ye.l)(this, YH), (0, ye.l)(this, VH, null)), oe.set(this, ((0, ye.l)(this, aH), (0, ye.l)(this, cH, void 0))), this._opacityTexture = ((0, ye.l)(this, xH), (0, ye.l)(this, LH, null)), qe.set(this, ((0, ye.l)(this, CH), (0, ye.l)(this, vH, void 0))), this._reflectionTexture = ((0, ye.l)(this, uH), (0, ye.l)(this, mH, null)), We.set(this, ((0, ye.l)(this, lH), (0, ye.l)(this, SH, void 0))), this._emissiveTexture = ((0, ye.l)(this, nH), (0, ye.l)(this, jH, null)), te.set(this, ((0, ye.l)(this, sH), (0, ye.l)(this, IH, void 0))), this._specularTexture = ((0, ye.l)(this, hH), (0, ye.l)(this, NH, null)), Ze.set(this, ((0, ye.l)(this, GH), (0, ye.l)(this, rH, void 0))), this._bumpTexture = ((0, ye.l)(this, QH), (0, ye.l)(this, ey, null)), we.set(this, ((0, ye.l)(this, iy), (0, ye.l)(this, Hy, void 0))), this._lightmapTexture = ((0, ye.l)(this, yy), (0, ye.l)(this, by, null)), De.set(this, ((0, ye.l)(this, My), (0, ye.l)(this, Ky, void 0))), this._refractionTexture = ((0, ye.l)(this, Uy), (0, ye.l)(this, Fy, null)), Ae.set(this, ((0, ye.l)(this, Jy), (0, ye.l)(this, oy, void 0))), this.ambientColor = ((0, ye.l)(this, Ry), (0, ye.l)(this, ky, new Ue.c(0, 0, 0))), this.diffuseColor = ((0, ye.l)(this, qy), (0, ye.l)(this, fy, new Ue.c(1, 1, 1))), this.specularColor = ((0, ye.l)(this, Ty), (0, ye.l)(this, py, new Ue.c(1, 1, 1))), this.emissiveColor = ((0, ye.l)(this, Xy), (0, ye.l)(this, zy, new Ue.c(0, 0, 0))), this.specularPower = ((0, ye.l)(this, By), (0, ye.l)(this, Ey, 64)), this._useAlphaFromDiffuseTexture = ((0, ye.l)(this, gy), (0, ye.l)(this, Oy, !1)), ae.set(this, ((0, ye.l)(this, dy), (0, ye.l)(this, Wy, void 0))), this._useEmissiveAsIllumination = ((0, ye.l)(this, ty), (0, ye.l)(this, Zy, !1)), ce.set(this, ((0, ye.l)(this, wy), (0, ye.l)(this, Dy, void 0))), this._linkEmissiveWithDiffuse = ((0, ye.l)(this, Py), (0, ye.l)(this, Ay, !1)), xe.set(this, ((0, ye.l)(this, Yy), (0, ye.l)(this, Vy, void 0))), this._useSpecularOverAlpha = ((0, ye.l)(this, ay), (0, ye.l)(this, cy, !1)), Le.set(this, ((0, ye.l)(this, xy), (0, ye.l)(this, Ly, void 0))), this._useReflectionOverAlpha = ((0, ye.l)(this, Cy), (0, ye.l)(this, vy, !1)), Ce.set(this, ((0, ye.l)(this, uy), (0, ye.l)(this, my, void 0))), this._disableLighting = ((0, ye.l)(this, ly), (0, ye.l)(this, Sy, !1)), ve.set(this, ((0, ye.l)(this, ny), (0, ye.l)(this, jy, void 0))), this._useObjectSpaceNormalMap = ((0, ye.l)(this, sy), (0, ye.l)(this, Iy, !1)), ue.set(this, ((0, ye.l)(this, hy), (0, ye.l)(this, Ny, void 0))), this._useParallax = ((0, ye.l)(this, Gy), (0, ye.l)(this, ry, !1)), me.set(this, ((0, ye.l)(this, Qy), (0, ye.l)(this, eb, void 0))), this._useParallaxOcclusion = ((0, ye.l)(this, ib), (0, ye.l)(this, Hb, !1)), le.set(this, ((0, ye.l)(this, yb), (0, ye.l)(this, bb, void 0))), this.parallaxScaleBias = ((0, ye.l)(this, Mb), (0, ye.l)(this, Kb, .05)), this._roughness = ((0, ye.l)(this, Ub), (0, ye.l)(this, Fb, 0)), Se.set(this, ((0, ye.l)(this, Jb), (0, ye.l)(this, ob, void 0))), this.indexOfRefraction = ((0, ye.l)(this, Rb), (0, ye.l)(this, kb, .98)), this.invertRefractionY = ((0, ye.l)(this, qb), (0, ye.l)(this, fb, !0)), this.alphaCutOff = ((0, ye.l)(this, Tb), (0, ye.l)(this, pb, .4)), this._useLightmapAsShadowmap = ((0, ye.l)(this, Xb), (0, ye.l)(this, zb, !1)), ne.set(this, ((0, ye.l)(this, Bb), (0, ye.l)(this, Eb, void 0))), this._diffuseFresnelParameters = ((0, ye.l)(this, gb), (0, ye.l)(this, Ob, void 0)), je.set(this, ((0, ye.l)(this, db), (0, ye.l)(this, Wb, void 0))), this._opacityFresnelParameters = ((0, ye.l)(this, tb), (0, ye.l)(this, Zb, void 0)), se.set(this, ((0, ye.l)(this, wb), (0, ye.l)(this, Db, void 0))), this._reflectionFresnelParameters = ((0, ye.l)(this, Pb), (0, ye.l)(this, Ab, void 0)), Ie.set(this, ((0, ye.l)(this, Yb), (0, ye.l)(this, Vb, void 0))), this._refractionFresnelParameters = ((0, ye.l)(this, ab), (0, ye.l)(this, cb, void 0)), he.set(this, ((0, ye.l)(this, xb), (0, ye.l)(this, Lb, void 0))), this._emissiveFresnelParameters = ((0, ye.l)(this, Cb), (0, ye.l)(this, vb, void 0)), Ne.set(this, ((0, ye.l)(this, ub), (0, ye.l)(this, mb, void 0))), this._useReflectionFresnelFromSpecular = ((0, ye.l)(this, lb), (0, ye.l)(this, Sb, !1)), Ge.set(this, ((0, ye.l)(this, nb), (0, ye.l)(this, jb, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, ye.l)(this, sb), (0, ye.l)(this, Ib, !1)), re.set(this, ((0, ye.l)(this, hb), (0, ye.l)(this, Nb, void 0))), this._maxSimultaneousLights = ((0, ye.l)(this, Gb), (0, ye.l)(this, rb, 4)), Qe.set(this, ((0, ye.l)(this, Qb), (0, ye.l)(this, eM, void 0))), this._invertNormalMapX = ((0, ye.l)(this, iM), (0, ye.l)(this, HM, !1)), ei.set(this, ((0, ye.l)(this, yM), (0, ye.l)(this, bM, void 0))), this._invertNormalMapY = ((0, ye.l)(this, MM), (0, ye.l)(this, KM, !1)), ii.set(this, ((0, ye.l)(this, UM), (0, ye.l)(this, FM, void 0))), this._twoSidedLighting = ((0, ye.l)(this, JM), (0, ye.l)(this, oM, !1)), Hi.set(this, ((0, ye.l)(this, RM), (0, ye.l)(this, kM, void 0))), this._applyDecalMapAfterDetailMap = ((0, ye.l)(this, qM), (0, ye.l)(this, fM, !1)), yi.set(this, ((0, ye.l)(this, TM), (0, ye.l)(this, pM, void 0))), this._vertexPullingMetadata = ((0, ye.l)(this, XM), null), this._renderTargets = new Me.f(16), this._globalAmbientColor = new Ue.c(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new Xe.c(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new Je.b, this.getRenderTargetTextures = () => (this._renderTargets.reset(), ee.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), ee.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(ee.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(ee.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === ke.e.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== ke.e.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(ie, He) {
            let ye = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const be = He._drawWrapper;
            if (be.effect && this.isFrozen && be._wasPreviouslyReady && be._wasPreviouslyUsingInstances === ye) return !0;
            He.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), He.materialDefines = new Ye(this._eventInfo.defineNames));
            const Me = this.Xx(),
              Ke = He.materialDefines;
            if (this._isReadyForSubMesh(He)) return !0;
            const Ue = Me.Nf();
            if (Ke._needNormals = (0, Ee.W)(Me, ie, Ke, !0, this._maxSimultaneousLights, this._disableLighting), !(0, Ee.d)(Me, ie, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, Ee.ab)(Me, Ke);
            const oe = this.needAlphaBlendingForMesh(ie) && this.Xx().useOrderIndependentTransparency;
            if ((0, Ee.eb)(Me, Ke, this.canRenderToMRT && !oe), (0, Ee.cb)(Me, Ke, oe), de.b.PrepareDefines(Ue.currentRenderPassId, ie, Ke), Ke._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Ke._needUVs = !1;
              for (let ee = 1; ee <= 6; ++ee) Ke["MAINUV" + ee] = !1;
              if (Me.texturesEnabled) {
                if (Ke.DIFFUSEDIRECTUV = 0, Ke.BUMPDIRECTUV = 0, Ke.AMBIENTDIRECTUV = 0, Ke.OPACITYDIRECTUV = 0, Ke.EMISSIVEDIRECTUV = 0, Ke.SPECULARDIRECTUV = 0, Ke.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && ee.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, Ee.Z)(this._diffuseTexture, Ke, "DIFFUSE")
                } else Ke.DIFFUSE = !1;
                if (this._ambientTexture && ee.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, Ee.Z)(this._ambientTexture, Ke, "AMBIENT")
                } else Ke.AMBIENT = !1;
                if (this._opacityTexture && ee.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, Ee.Z)(this._opacityTexture, Ke, "OPACITY"), Ke.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else Ke.OPACITY = !1;
                if (this._reflectionTexture && ee.ReflectionTextureEnabled ? (Ke.ROUGHNESS = this._roughness > 0, Ke.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (Ke.ROUGHNESS = !1, Ke.REFLECTIONOVERALPHA = !1), !(0, Ee.V)(Me, this._reflectionTexture, Ke)) return !1;
                if (this._emissiveTexture && ee.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, Ee.Z)(this._emissiveTexture, Ke, "EMISSIVE")
                } else Ke.EMISSIVE = !1;
                if (this._lightmapTexture && ee.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, Ee.Z)(this._lightmapTexture, Ke, "LIGHTMAP"), Ke.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Ke.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else Ke.LIGHTMAP = !1;
                if (this._specularTexture && ee.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, Ee.Z)(this._specularTexture, Ke, "SPECULAR"), Ke.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else Ke.SPECULAR = !1;
                if (Me.Nf().getCaps().standardDerivatives && this._bumpTexture && ee.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, Ee.Z)(this._bumpTexture, Ke, "BUMP"), Ke.PARALLAX = this._useParallax, Ke.PARALLAX_RHS = Me.useRightHandedSystem, Ke.PARALLAXOCCLUSION = this._useParallaxOcclusion, Ke.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else Ke.BUMP = !1, Ke.PARALLAX = !1, Ke.PARALLAX_RHS = !1, Ke.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && ee.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  Ke._needUVs = !0, Ke.REFRACTION = !0, Ke.REFRACTIONMAP_3D = this._refractionTexture.isCube, Ke.RGBDREFRACTION = this._refractionTexture.isRGBD, Ke.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else Ke.REFRACTION = !1;
                Ke.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else Ke.DIFFUSE = !1, Ke.AMBIENT = !1, Ke.OPACITY = !1, Ke.REFLECTION = !1, Ke.EMISSIVE = !1, Ke.LIGHTMAP = !1, Ke.BUMP = !1, Ke.REFRACTION = !1;
              Ke.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), Ke.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, Ke.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, Ke.SPECULAROVERALPHA = this._useSpecularOverAlpha, Ke.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Ke.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, Ke.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(ie), Ke.TEXTURE_REPETITION_MODE = Ue.version > 1 || Ue.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Ke, this._eventInfo.subMesh = He, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Ke._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(Ke), Ke.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, Ke.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (Ke._areFresnelDirty && (ee.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (Ke.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, Ke.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, Ke.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, Ke.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, Ke.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, Ke.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, Ke._needNormals = !0, Ke.FRESNEL = !0) : Ke.FRESNEL = !1), Ke.AREALIGHTUSED || Ke.CLUSTLIGHT_BATCH)
              for (let ee = 0; ee < ie.lightSources.length; ee++)
                if (!ie.lightSources[ee]._isReady()) return !1;
            (0, Ee._)(ie, Me, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(ie), Ke, this._applyDecalMapAfterDetailMap, this._useVertexPulling, He.getRenderingMesh(), this._isVertexOutputInvariant), (0, Ee.U)(Me, Ue, this, Ke, ye, null, He.getRenderingMesh().hasThinInstances), this._eventInfo.defines = Ke, this._eventInfo.mesh = ie, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Ee.T)(ie, Ke, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let ke = !1;
            if (Ke.isDirty) {
              const ye = Ke._areLightsDisposed;
              Ke.markAsProcessed();
              const be = new pe.e;
              Ke.REFLECTION && be.addFallback(0, "REFLECTION"), Ke.SPECULAR && be.addFallback(0, "SPECULAR"), Ke.BUMP && be.addFallback(0, "BUMP"), Ke.PARALLAX && be.addFallback(1, "PARALLAX"), Ke.PARALLAX_RHS && be.addFallback(1, "PARALLAX_RHS"), Ke.PARALLAXOCCLUSION && be.addFallback(0, "PARALLAXOCCLUSION"), Ke.SPECULAROVERALPHA && be.addFallback(0, "SPECULAROVERALPHA"), Ke.FOG && be.addFallback(1, "FOG"), Ke.POINTSIZE && be.addFallback(0, "POINTSIZE"), Ke.LOGARITHMICDEPTH && be.addFallback(0, "LOGARITHMICDEPTH"), (0, Ee.D)(Ke, be, this._maxSimultaneousLights), Ke.SPECULARTERM && be.addFallback(0, "SPECULARTERM"), Ke.DIFFUSEFRESNEL && be.addFallback(1, "DIFFUSEFRESNEL"), Ke.OPACITYFRESNEL && be.addFallback(2, "OPACITYFRESNEL"), Ke.REFLECTIONFRESNEL && be.addFallback(3, "REFLECTIONFRESNEL"), Ke.EMISSIVEFRESNEL && be.addFallback(4, "EMISSIVEFRESNEL"), Ke.FRESNEL && be.addFallback(4, "FRESNEL"), Ke.MULTIVIEW && be.addFallback(0, "MULTIVIEW");
              const oe = [Fe.h.PositionKind];
              Ke.NORMAL && oe.push(Fe.h.NormalKind), Ke.TANGENT && oe.push(Fe.h.TangentKind);
              for (let ee = 1; ee <= 6; ++ee) Ke["UV" + ee] && oe.push(`uv${1===ee?"":ee}`);
              Ke.VERTEXCOLOR && oe.push(Fe.h.ColorKind), (0, Ee.I)(oe, ie, Ke, be), (0, Ee.K)(oe, Ke), (0, Ee.O)(oe, ie, Ke), (0, Ee.F)(oe, ie, Ke);
              let qe = "default";
              const fe = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                Te = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, Ee.kb)(fe, Te, !1);
              const Xe = ["Material", "Scene", "Mesh"],
                ge = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: Ke.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = be, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = Ke, this._eventInfo.uniforms = fe, this._eventInfo.attributes = oe, this._eventInfo.samplers = Te, this._eventInfo.uniformBuffersNames = Xe, this._eventInfo.customCode = void 0, this._eventInfo.mesh = ie, this._eventInfo.indexParameters = ge, this._callbackPluginEventGeneric(128, this._eventInfo), de.b.AddUniformsAndSamplers(fe, Te), Je.b.AddUniforms(fe), Je.b.AddSamplers(Te), Re.e && (Re.e.PrepareUniforms(fe, Ke), Re.e.PrepareSamplers(Te, Ke)), (0, Ee.nb)({
                  uniformsNames: fe,
                  uniformBuffersNames: Xe,
                  samplers: Te,
                  defines: Ke,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, ze.e)(fe), this._useVertexPulling) {
                const ee = He.getRenderingMesh(),
                  ie = ee?.geometry;
                ie && (this._vertexPullingMetadata = (0, Be.h)(ie), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((ee, ie) => {
                  fe.push(`vp_${ie}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const Oe = {};
              this.customShaderNameResolve && (qe = this.customShaderNameResolve(qe, fe, Xe, Te, Ke, oe, Oe));
              const We = Ke.toString(),
                te = He.effect,
                Ze = Me.Nf().createEffect(qe, {
                  attributes: oe,
                  uniformsNames: fe,
                  uniformBuffersNames: Xe,
                  samplers: Te,
                  defines: We,
                  fallbacks: be,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: ge,
                  processFinalCode: Oe.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: Ke.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: ee._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, Ue);
              if (this._eventInfo.customCode = void 0, Ze)
                if (this._onEffectCreatedObservable && (Pe.effect = Ze, Pe.subMesh = He, this._onEffectCreatedObservable.notifyObservers(Pe)), this.allowShaderHotSwapping && te && !Ze.isReady()) {
                  if (Ke.markAsUnprocessed(), ke = this.isFrozen, ye) return Ke._areLightsDisposed = !0, !1
                } else Me.resetCachedMaterial(), He.setEffect(Ze, Ke, this._materialContext)
            }
            return !(!He.effect || !He.effect.isReady()) && (Ke._renderId = Me.getRenderId(), be._wasPreviouslyReady = !ke, be._wasPreviouslyUsingInstances = ye, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const ee = this._uniformBuffer;
            ee.addUniform("diffuseLeftColor", 4), ee.addUniform("diffuseRightColor", 4), ee.addUniform("opacityParts", 4), ee.addUniform("reflectionLeftColor", 4), ee.addUniform("reflectionRightColor", 4), ee.addUniform("refractionLeftColor", 4), ee.addUniform("refractionRightColor", 4), ee.addUniform("emissiveLeftColor", 4), ee.addUniform("emissiveRightColor", 4), ee.addUniform("vDiffuseInfos", 2), ee.addUniform("vAmbientInfos", 2), ee.addUniform("vOpacityInfos", 2), ee.addUniform("vEmissiveInfos", 2), ee.addUniform("vLightmapInfos", 2), ee.addUniform("vSpecularInfos", 2), ee.addUniform("vBumpInfos", 3), ee.addUniform("diffuseMatrix", 16), ee.addUniform("ambientMatrix", 16), ee.addUniform("opacityMatrix", 16), ee.addUniform("emissiveMatrix", 16), ee.addUniform("lightmapMatrix", 16), ee.addUniform("specularMatrix", 16), ee.addUniform("bumpMatrix", 16), ee.addUniform("vTangentSpaceParams", 2), ee.addUniform("pointSize", 1), ee.addUniform("alphaCutOff", 1), ee.addUniform("refractionMatrix", 16), ee.addUniform("vRefractionInfos", 4), ee.addUniform("vRefractionPosition", 3), ee.addUniform("vRefractionSize", 3), ee.addUniform("vSpecularColor", 4), ee.addUniform("vEmissiveColor", 3), ee.addUniform("vDiffuseColor", 4), ee.addUniform("vAmbientColor", 3), ee.addUniform("cameraInfo", 4), ee.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Ee.hb)(ee, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(ie, He, ye) {
            const be = this.Xx(),
              Me = ye.materialDefines;
            if (!Me) return;
            const Fe = ye.effect;
            if (!Fe) return;
            this._activeEffect = Fe, He.getMeshUniformBuffer().bindToEffect(Fe, "Mesh"), He.transferToEffect(ie), this._uniformBuffer.bindToEffect(Fe, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, be, He, ie, this.isFrozen), de.b.Bind(be.Nf().currentRenderPassId, this._activeEffect, He, ie, this);
            const Je = be.activeCamera;
            Je ? this._uniformBuffer.updateFloat4("cameraInfo", Je.minZ, Je.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const oe = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", oe[0], oe[1], oe[2], oe[3]), this._eventInfo.subMesh = ye, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Me.OBJECTSPACE_NORMALMAP && (ie.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Re = this._mustRebind(be, Fe, ye, He.visibility),
              ke = be.Nf()._features.needToAlwaysBindUniformBuffers;
            (0, Ee.g)(He, Fe), this._vertexPullingMetadata && (0, Be.e)(Fe, this._vertexPullingMetadata);
            const qe = this._uniformBuffer;
            if (Re) {
              if (this.bindViewProjection(Fe), !qe.useUbo || !this.isFrozen || !qe.isSync || ye._drawWrapper._forceRebindOnNextCall) {
                if (ee.FresnelEnabled && Me.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (qe.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), qe.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const ee = Ue.j.Color3[0];
                    ee.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), qe.updateColor4("opacityParts", ee, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (qe.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), qe.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (qe.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), qe.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (qe.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), qe.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (Me.ALPHATEST && qe.updateFloat("alphaCutOff", this.alphaCutOff), be.texturesEnabled && (this._diffuseTexture && ee.DiffuseTextureEnabled && (qe.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, Ee.A)(this._diffuseTexture, qe, "diffuse")), this._ambientTexture && ee.AmbientTextureEnabled && (qe.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, Ee.A)(this._ambientTexture, qe, "ambient")), this._opacityTexture && ee.OpacityTextureEnabled && (qe.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Ee.A)(this._opacityTexture, qe, "opacity")), (0, Ee.l)(be, Me, qe, Ue.c.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && ee.ReflectionTextureEnabled || qe.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && ee.EmissiveTextureEnabled && (qe.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Ee.A)(this._emissiveTexture, qe, "emissive")), this._lightmapTexture && ee.LightmapTextureEnabled && (qe.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Ee.A)(this._lightmapTexture, qe, "lightmap")), this._specularTexture && ee.SpecularTextureEnabled && (qe.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, Ee.A)(this._specularTexture, qe, "specular")), this._bumpTexture && be.Nf().getCaps().standardDerivatives && ee.BumpTextureEnabled && (qe.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, Ee.A)(this._bumpTexture, qe, "bump"), be._mirroredCameraPosition ? qe.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : qe.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && ee.RefractionTextureEnabled)) {
                  let ee = 1;
                  if (this._refractionTexture.isCube || (qe.oie("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (ee = this._refractionTexture.depth)), qe.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, ee, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const ee = this._refractionTexture;
                    qe.updateVector3("vRefractionPosition", ee.boundingBoxPosition), qe.updateVector3("vRefractionSize", ee.boundingBoxSize)
                  }
                }
                this.pointsCloud && qe.updateFloat("pointSize", this.pointSize), qe.updateColor4("vSpecularColor", this.specularColor, this.specularPower), qe.updateColor3("vEmissiveColor", ee.EmissiveTextureEnabled ? this.emissiveColor : Ue.c.BlackReadOnly), qe.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), be.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), qe.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              be.texturesEnabled && (this._diffuseTexture && ee.DiffuseTextureEnabled && Fe.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && ee.AmbientTextureEnabled && Fe.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && ee.OpacityTextureEnabled && Fe.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && ee.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? Fe.setTexture("reflectionCubeSampler", this._reflectionTexture) : Fe.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && ee.EmissiveTextureEnabled && Fe.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && ee.LightmapTextureEnabled && Fe.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && ee.SpecularTextureEnabled && Fe.setTexture("specularSampler", this._specularTexture), this._bumpTexture && be.Nf().getCaps().standardDerivatives && ee.BumpTextureEnabled && Fe.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && ee.RefractionTextureEnabled && (this._refractionTexture.isCube ? Fe.setTexture("refractionCubeSampler", this._refractionTexture) : Fe.setTexture("refraction2DSampler", this._refractionTexture))), this.Xx().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(He) && this.Xx().depthPeelingRenderer.bind(Fe), this._eventInfo.subMesh = ye, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, ze.f)(Fe, this, be), this.bindEyePosition(Fe)
            } else ke && (this._needToBindSceneUbo = !0);
            !Re && this.isFrozen && !ke || !be.lightsEnabled || this._disableLighting || (0, Ee.r)(be, He, Fe, Me, this._maxSimultaneousLights), !Re && this.isFrozen || ((be.fogEnabled && He.applyFog && be.fogMode !== Ke.f.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || He.receiveShadows || Me.PREPASS || Me.CLUSTLIGHT_BATCH) && this.bindView(Fe), (0, Ee.k)(be, He, Fe), Me.NUM_MORPH_INFLUENCERS && (0, Ee.w)(He, Fe), Me.BAKED_VERTEX_ANIMATION_TEXTURE && He.bakedVertexAnimationManager?.bind(Fe, Me.INSTANCES), this.useLogarithmicDepth && (0, Ee.v)(Me, Fe, be), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(He, this._activeEffect, ye), qe.update()
          }
          _canBindRunFollower(ie, He, ye, be, Me) {
            const Ke = ie.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === ee.prototype.isReadyForSubMesh && this.bindForSubMesh === ee.prototype.bindForSubMesh && this._mustRebind === fe.c.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !He._features.needToAlwaysBindUniformBuffers && !(Ke && Ke.enabled && Ke.currentRTisSceneRT) && !de.b._Configurations[He.currentRenderPassId] && !be.materialDefines?.OBJECTSPACE_NORMALMAP && !ye.skeleton && !Me._bonesComputationForcedToCPU
          }
          _bindRunFollower(ee, ie, He, ye) {
            this._activeEffect = ye, ie.getMeshUniformBuffer().bindToEffect(ye, "Mesh"), ie.transferToEffect(ee);
            const be = this._uniformBuffer;
            be.bindToEffect(ye, "Material");
            const Me = this._scene.activeCamera;
            Me ? be.updateFloat4("cameraInfo", Me.minZ, Me.maxZ, 0, 0) : be.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Ke = this.textureRepetitionHexTilingParams;
            be.updateFloat4("vTextureRepetitionHexTilingParams", Ke[0], Ke[1], Ke[2], Ke[3]), this._afterBind(ie, ye, He), be.update()
          }
          getAnimatables() {
            const ee = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && ee.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && ee.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && ee.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && ee.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && ee.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && ee.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && ee.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && ee.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && ee.push(this._refractionTexture), ee
          }
          getActiveTextures() {
            const ee = super.getActiveTextures();
            return this._diffuseTexture && ee.push(this._diffuseTexture), this._ambientTexture && ee.push(this._ambientTexture), this._opacityTexture && ee.push(this._opacityTexture), this._reflectionTexture && ee.push(this._reflectionTexture), this._emissiveTexture && ee.push(this._emissiveTexture), this._specularTexture && ee.push(this._specularTexture), this._bumpTexture && ee.push(this._bumpTexture), this._lightmapTexture && ee.push(this._lightmapTexture), this._refractionTexture && ee.push(this._refractionTexture), ee
          }
          hasTexture(ee) {
            return !!super.hasTexture(ee) || (this._diffuseTexture === ee || (this._ambientTexture === ee || (this._opacityTexture === ee || (this._reflectionTexture === ee || (this._emissiveTexture === ee || (this._specularTexture === ee || (this._bumpTexture === ee || (this._lightmapTexture === ee || this._refractionTexture === ee))))))))
          }
          dispose(ee, ie) {
            ie && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(ee, ie)
          }
          clone(ie) {
            let He = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const be = ge.c.Clone((() => new ee(ie, this.Xx())), this, {
              cloneTexturesOnlyOnce: He
            });
            return be.name = ie, be.id = ie, this.stencil.copyTo(be.stencil), this._clonePlugins(be, ye), be
          }
          static Parse(ie, He, ye) {
            const be = ge.c.Parse((() => new ee(ie.name, He)), ie, He, ye);
            return ie.stencil && be.stencil.parse(ie.stencil, He, ye), ke.e._ParsePlugins(ie, be, He, ye), be
          }
          static get DiffuseTextureEnabled() {
            return Te.c.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(ee) {
            Te.c.DiffuseTextureEnabled = ee
          }
          static get DetailTextureEnabled() {
            return Te.c.DetailTextureEnabled
          }
          static set DetailTextureEnabled(ee) {
            Te.c.DetailTextureEnabled = ee
          }
          static get AmbientTextureEnabled() {
            return Te.c.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(ee) {
            Te.c.AmbientTextureEnabled = ee
          }
          static get OpacityTextureEnabled() {
            return Te.c.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(ee) {
            Te.c.OpacityTextureEnabled = ee
          }
          static get ReflectionTextureEnabled() {
            return Te.c.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(ee) {
            Te.c.ReflectionTextureEnabled = ee
          }
          static get EmissiveTextureEnabled() {
            return Te.c.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(ee) {
            Te.c.EmissiveTextureEnabled = ee
          }
          static get SpecularTextureEnabled() {
            return Te.c.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(ee) {
            Te.c.SpecularTextureEnabled = ee
          }
          static get BumpTextureEnabled() {
            return Te.c.BumpTextureEnabled
          }
          static set BumpTextureEnabled(ee) {
            Te.c.BumpTextureEnabled = ee
          }
          static get LightmapTextureEnabled() {
            return Te.c.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(ee) {
            Te.c.LightmapTextureEnabled = ee
          }
          static get RefractionTextureEnabled() {
            return Te.c.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(ee) {
            Te.c.RefractionTextureEnabled = ee
          }
          static get ColorGradingTextureEnabled() {
            return Te.c.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(ee) {
            Te.c.ColorGradingTextureEnabled = ee
          }
          static get FresnelEnabled() {
            return Te.c.FresnelEnabled
          }
          static set FresnelEnabled(ee) {
            Te.c.FresnelEnabled = ee
          }
        }, ie = new WeakMap, oe = new WeakMap, qe = new WeakMap, We = new WeakMap, te = new WeakMap, Ze = new WeakMap, we = new WeakMap, De = new WeakMap, Ae = new WeakMap, ae = new WeakMap, ce = new WeakMap, xe = new WeakMap, Le = new WeakMap, Ce = new WeakMap, ve = new WeakMap, ue = new WeakMap, me = new WeakMap, le = new WeakMap, Se = new WeakMap, ne = new WeakMap, je = new WeakMap, se = new WeakMap, Ie = new WeakMap, he = new WeakMap, Ne = new WeakMap, Ge = new WeakMap, re = new WeakMap, Qe = new WeakMap, ei = new WeakMap, ii = new WeakMap, Hi = new WeakMap, yi = new WeakMap, (() => {
          const ie = "function" === typeof Symbol && Symbol.metadata ? Object.create(wH[Symbol.metadata] ?? null) : void 0;
          bi = [(0, be.H)("diffuseTexture")], Mi = [(0, be.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ki = [(0, be.H)("ambientTexture")], Ui = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], Fi = [(0, be.H)("opacityTexture")], Ji = [(0, be.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], oi = [(0, be.H)("reflectionTexture")], Ri = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], ki = [(0, be.H)("emissiveTexture")], qi = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], fi = [(0, be.H)("specularTexture")], Ti = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], Xi = [(0, be.H)("bumpTexture")], zi = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], Bi = [(0, be.H)("lightmapTexture")], Ei = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], gi = [(0, be.H)("refractionTexture")], Oi = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], di = [(0, be.p)("ambient")], Wi = [(0, be.p)("diffuse")], ti = [(0, be.p)("specular")], Zi = [(0, be.p)("emissive")], wi = [(0, be.R)()], Di = [(0, be.R)("useAlphaFromDiffuseTexture")], Pi = [() => ({
            init(ee) {
              return void 0 === ee && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = ee), ee
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(ee) {
              this._useAlphaFromDiffuseTexture = ee
            }
          })], Ai = [(0, be.R)("useEmissiveAsIllumination")], Yi = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], Vi = [(0, be.R)("linkEmissiveWithDiffuse")], ai = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], ci = [(0, be.R)("useSpecularOverAlpha")], xi = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], Li = [(0, be.R)("useReflectionOverAlpha")], Ci = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], vi = [(0, be.R)("disableLighting")], ui = [(0, be.d)("_markAllSubMeshesAsLightsDirty")], mi = [(0, be.R)("useObjectSpaceNormalMap")], li = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], Si = [(0, be.R)("useParallax")], ni = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], ji = [(0, be.R)("useParallaxOcclusion")], si = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], Ii = [(0, be.R)()], Ni = [(0, be.R)("roughness")], Gi = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], ri = [(0, be.R)()], Qi = [(0, be.R)()], eH = [(0, be.R)()], iH = [(0, be.R)("useLightmapAsShadowmap")], HH = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], yH = [(0, be.w)("diffuseFresnelParameters")], bH = [(0, be.d)("_markAllSubMeshesAsFresnelDirty")], MH = [(0, be.w)("opacityFresnelParameters")], KH = [(0, be.d)("_markAllSubMeshesAsFresnelAndMiscDirty")], UH = [(0, be.w)("reflectionFresnelParameters")], FH = [(0, be.d)("_markAllSubMeshesAsFresnelDirty")], JH = [(0, be.w)("refractionFresnelParameters")], oH = [(0, be.d)("_markAllSubMeshesAsFresnelDirty")], RH = [(0, be.w)("emissiveFresnelParameters")], kH = [(0, be.d)("_markAllSubMeshesAsFresnelDirty")], qH = [(0, be.R)("useReflectionFresnelFromSpecular")], fH = [(0, be.d)("_markAllSubMeshesAsFresnelDirty")], TH = [(0, be.R)("useGlossinessFromSpecularMapAlpha")], pH = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], XH = [(0, be.R)("maxSimultaneousLights")], zH = [(0, be.d)("_markAllSubMeshesAsLightsDirty")], BH = [(0, be.R)("invertNormalMapX")], EH = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], gH = [(0, be.R)("invertNormalMapY")], OH = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], dH = [(0, be.R)("twoSidedLighting")], WH = [(0, be.d)("_markAllSubMeshesAsTexturesDirty")], tH = [(0, be.R)("applyDecalMapAfterDetailMap")], ZH = [(0, be.d)("_markAllSubMeshesAsMiscDirty")], (0, ye.i)(ee, null, Mi, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "diffuseTexture" in ee,
              get: ee => ee.diffuseTexture,
              set: (ee, ie) => {
                ee.diffuseTexture = ie
              }
            },
            metadata: ie
          }, AH, YH), (0, ye.i)(ee, null, Ui, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "ambientTexture" in ee,
              get: ee => ee.ambientTexture,
              set: (ee, ie) => {
                ee.ambientTexture = ie
              }
            },
            metadata: ie
          }, cH, xH), (0, ye.i)(ee, null, Ji, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "opacityTexture" in ee,
              get: ee => ee.opacityTexture,
              set: (ee, ie) => {
                ee.opacityTexture = ie
              }
            },
            metadata: ie
          }, vH, uH), (0, ye.i)(ee, null, Ri, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "reflectionTexture" in ee,
              get: ee => ee.reflectionTexture,
              set: (ee, ie) => {
                ee.reflectionTexture = ie
              }
            },
            metadata: ie
          }, SH, nH), (0, ye.i)(ee, null, qi, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "emissiveTexture" in ee,
              get: ee => ee.emissiveTexture,
              set: (ee, ie) => {
                ee.emissiveTexture = ie
              }
            },
            metadata: ie
          }, IH, hH), (0, ye.i)(ee, null, Ti, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "specularTexture" in ee,
              get: ee => ee.specularTexture,
              set: (ee, ie) => {
                ee.specularTexture = ie
              }
            },
            metadata: ie
          }, rH, QH), (0, ye.i)(ee, null, zi, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "bumpTexture" in ee,
              get: ee => ee.bumpTexture,
              set: (ee, ie) => {
                ee.bumpTexture = ie
              }
            },
            metadata: ie
          }, Hy, yy), (0, ye.i)(ee, null, Ei, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "lightmapTexture" in ee,
              get: ee => ee.lightmapTexture,
              set: (ee, ie) => {
                ee.lightmapTexture = ie
              }
            },
            metadata: ie
          }, Ky, Uy), (0, ye.i)(ee, null, Oi, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "refractionTexture" in ee,
              get: ee => ee.refractionTexture,
              set: (ee, ie) => {
                ee.refractionTexture = ie
              }
            },
            metadata: ie
          }, oy, Ry), (0, ye.i)(ee, null, Pi, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "useAlphaFromDiffuseTexture" in ee,
              get: ee => ee.useAlphaFromDiffuseTexture,
              set: (ee, ie) => {
                ee.useAlphaFromDiffuseTexture = ie
              }
            },
            metadata: ie
          }, Wy, ty), (0, ye.i)(ee, null, Yi, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: ee => "useEmissiveAsIllumination" in ee,
              get: ee => ee.useEmissiveAsIllumination,
              set: (ee, ie) => {
                ee.useEmissiveAsIllumination = ie
              }
            },
            metadata: ie
          }, Dy, Py), (0, ye.i)(ee, null, ai, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: ee => "linkEmissiveWithDiffuse" in ee,
              get: ee => ee.linkEmissiveWithDiffuse,
              set: (ee, ie) => {
                ee.linkEmissiveWithDiffuse = ie
              }
            },
            metadata: ie
          }, Vy, ay), (0, ye.i)(ee, null, xi, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: ee => "useSpecularOverAlpha" in ee,
              get: ee => ee.useSpecularOverAlpha,
              set: (ee, ie) => {
                ee.useSpecularOverAlpha = ie
              }
            },
            metadata: ie
          }, Ly, Cy), (0, ye.i)(ee, null, Ci, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: ee => "useReflectionOverAlpha" in ee,
              get: ee => ee.useReflectionOverAlpha,
              set: (ee, ie) => {
                ee.useReflectionOverAlpha = ie
              }
            },
            metadata: ie
          }, my, ly), (0, ye.i)(ee, null, ui, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: ee => "disableLighting" in ee,
              get: ee => ee.disableLighting,
              set: (ee, ie) => {
                ee.disableLighting = ie
              }
            },
            metadata: ie
          }, jy, sy), (0, ye.i)(ee, null, li, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: ee => "useObjectSpaceNormalMap" in ee,
              get: ee => ee.useObjectSpaceNormalMap,
              set: (ee, ie) => {
                ee.useObjectSpaceNormalMap = ie
              }
            },
            metadata: ie
          }, Ny, Gy), (0, ye.i)(ee, null, ni, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: ee => "useParallax" in ee,
              get: ee => ee.useParallax,
              set: (ee, ie) => {
                ee.useParallax = ie
              }
            },
            metadata: ie
          }, eb, ib), (0, ye.i)(ee, null, si, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: ee => "useParallaxOcclusion" in ee,
              get: ee => ee.useParallaxOcclusion,
              set: (ee, ie) => {
                ee.useParallaxOcclusion = ie
              }
            },
            metadata: ie
          }, bb, Mb), (0, ye.i)(ee, null, Gi, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: ee => "roughness" in ee,
              get: ee => ee.roughness,
              set: (ee, ie) => {
                ee.roughness = ie
              }
            },
            metadata: ie
          }, ob, Rb), (0, ye.i)(ee, null, HH, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: ee => "useLightmapAsShadowmap" in ee,
              get: ee => ee.useLightmapAsShadowmap,
              set: (ee, ie) => {
                ee.useLightmapAsShadowmap = ie
              }
            },
            metadata: ie
          }, Eb, gb), (0, ye.i)(ee, null, bH, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: ee => "diffuseFresnelParameters" in ee,
              get: ee => ee.diffuseFresnelParameters,
              set: (ee, ie) => {
                ee.diffuseFresnelParameters = ie
              }
            },
            metadata: ie
          }, Wb, tb), (0, ye.i)(ee, null, KH, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: ee => "opacityFresnelParameters" in ee,
              get: ee => ee.opacityFresnelParameters,
              set: (ee, ie) => {
                ee.opacityFresnelParameters = ie
              }
            },
            metadata: ie
          }, Db, Pb), (0, ye.i)(ee, null, FH, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: ee => "reflectionFresnelParameters" in ee,
              get: ee => ee.reflectionFresnelParameters,
              set: (ee, ie) => {
                ee.reflectionFresnelParameters = ie
              }
            },
            metadata: ie
          }, Vb, ab), (0, ye.i)(ee, null, oH, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: ee => "refractionFresnelParameters" in ee,
              get: ee => ee.refractionFresnelParameters,
              set: (ee, ie) => {
                ee.refractionFresnelParameters = ie
              }
            },
            metadata: ie
          }, Lb, Cb), (0, ye.i)(ee, null, kH, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: ee => "emissiveFresnelParameters" in ee,
              get: ee => ee.emissiveFresnelParameters,
              set: (ee, ie) => {
                ee.emissiveFresnelParameters = ie
              }
            },
            metadata: ie
          }, mb, lb), (0, ye.i)(ee, null, fH, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: ee => "useReflectionFresnelFromSpecular" in ee,
              get: ee => ee.useReflectionFresnelFromSpecular,
              set: (ee, ie) => {
                ee.useReflectionFresnelFromSpecular = ie
              }
            },
            metadata: ie
          }, jb, sb), (0, ye.i)(ee, null, pH, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: ee => "useGlossinessFromSpecularMapAlpha" in ee,
              get: ee => ee.useGlossinessFromSpecularMapAlpha,
              set: (ee, ie) => {
                ee.useGlossinessFromSpecularMapAlpha = ie
              }
            },
            metadata: ie
          }, Nb, Gb), (0, ye.i)(ee, null, zH, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: ee => "maxSimultaneousLights" in ee,
              get: ee => ee.maxSimultaneousLights,
              set: (ee, ie) => {
                ee.maxSimultaneousLights = ie
              }
            },
            metadata: ie
          }, eM, iM), (0, ye.i)(ee, null, EH, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: ee => "invertNormalMapX" in ee,
              get: ee => ee.invertNormalMapX,
              set: (ee, ie) => {
                ee.invertNormalMapX = ie
              }
            },
            metadata: ie
          }, bM, MM), (0, ye.i)(ee, null, OH, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: ee => "invertNormalMapY" in ee,
              get: ee => ee.invertNormalMapY,
              set: (ee, ie) => {
                ee.invertNormalMapY = ie
              }
            },
            metadata: ie
          }, FM, JM), (0, ye.i)(ee, null, WH, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: ee => "twoSidedLighting" in ee,
              get: ee => ee.twoSidedLighting,
              set: (ee, ie) => {
                ee.twoSidedLighting = ie
              }
            },
            metadata: ie
          }, kM, qM), (0, ye.i)(ee, null, ZH, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: ee => "applyDecalMapAfterDetailMap" in ee,
              get: ee => ee.applyDecalMapAfterDetailMap,
              set: (ee, ie) => {
                ee.applyDecalMapAfterDetailMap = ie
              }
            },
            metadata: ie
          }, pM, XM), (0, ye.i)(null, null, bi, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "_diffuseTexture" in ee,
              get: ee => ee._diffuseTexture,
              set: (ee, ie) => {
                ee._diffuseTexture = ie
              }
            },
            metadata: ie
          }, DH, PH), (0, ye.i)(null, null, Ki, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "_ambientTexture" in ee,
              get: ee => ee._ambientTexture,
              set: (ee, ie) => {
                ee._ambientTexture = ie
              }
            },
            metadata: ie
          }, VH, aH), (0, ye.i)(null, null, Fi, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "_opacityTexture" in ee,
              get: ee => ee._opacityTexture,
              set: (ee, ie) => {
                ee._opacityTexture = ie
              }
            },
            metadata: ie
          }, LH, CH), (0, ye.i)(null, null, oi, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "_reflectionTexture" in ee,
              get: ee => ee._reflectionTexture,
              set: (ee, ie) => {
                ee._reflectionTexture = ie
              }
            },
            metadata: ie
          }, mH, lH), (0, ye.i)(null, null, ki, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "_emissiveTexture" in ee,
              get: ee => ee._emissiveTexture,
              set: (ee, ie) => {
                ee._emissiveTexture = ie
              }
            },
            metadata: ie
          }, jH, sH), (0, ye.i)(null, null, fi, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "_specularTexture" in ee,
              get: ee => ee._specularTexture,
              set: (ee, ie) => {
                ee._specularTexture = ie
              }
            },
            metadata: ie
          }, NH, GH), (0, ye.i)(null, null, Xi, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "_bumpTexture" in ee,
              get: ee => ee._bumpTexture,
              set: (ee, ie) => {
                ee._bumpTexture = ie
              }
            },
            metadata: ie
          }, ey, iy), (0, ye.i)(null, null, Bi, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "_lightmapTexture" in ee,
              get: ee => ee._lightmapTexture,
              set: (ee, ie) => {
                ee._lightmapTexture = ie
              }
            },
            metadata: ie
          }, by, My), (0, ye.i)(null, null, gi, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "_refractionTexture" in ee,
              get: ee => ee._refractionTexture,
              set: (ee, ie) => {
                ee._refractionTexture = ie
              }
            },
            metadata: ie
          }, Fy, Jy), (0, ye.i)(null, null, di, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: ee => "ambientColor" in ee,
              get: ee => ee.ambientColor,
              set: (ee, ie) => {
                ee.ambientColor = ie
              }
            },
            metadata: ie
          }, ky, qy), (0, ye.i)(null, null, Wi, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: ee => "diffuseColor" in ee,
              get: ee => ee.diffuseColor,
              set: (ee, ie) => {
                ee.diffuseColor = ie
              }
            },
            metadata: ie
          }, fy, Ty), (0, ye.i)(null, null, ti, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: ee => "specularColor" in ee,
              get: ee => ee.specularColor,
              set: (ee, ie) => {
                ee.specularColor = ie
              }
            },
            metadata: ie
          }, py, Xy), (0, ye.i)(null, null, Zi, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: ee => "emissiveColor" in ee,
              get: ee => ee.emissiveColor,
              set: (ee, ie) => {
                ee.emissiveColor = ie
              }
            },
            metadata: ie
          }, zy, By), (0, ye.i)(null, null, wi, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: ee => "specularPower" in ee,
              get: ee => ee.specularPower,
              set: (ee, ie) => {
                ee.specularPower = ie
              }
            },
            metadata: ie
          }, Ey, gy), (0, ye.i)(null, null, Di, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: ee => "_useAlphaFromDiffuseTexture" in ee,
              get: ee => ee._useAlphaFromDiffuseTexture,
              set: (ee, ie) => {
                ee._useAlphaFromDiffuseTexture = ie
              }
            },
            metadata: ie
          }, Oy, dy), (0, ye.i)(null, null, Ai, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: ee => "_useEmissiveAsIllumination" in ee,
              get: ee => ee._useEmissiveAsIllumination,
              set: (ee, ie) => {
                ee._useEmissiveAsIllumination = ie
              }
            },
            metadata: ie
          }, Zy, wy), (0, ye.i)(null, null, Vi, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: ee => "_linkEmissiveWithDiffuse" in ee,
              get: ee => ee._linkEmissiveWithDiffuse,
              set: (ee, ie) => {
                ee._linkEmissiveWithDiffuse = ie
              }
            },
            metadata: ie
          }, Ay, Yy), (0, ye.i)(null, null, ci, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: ee => "_useSpecularOverAlpha" in ee,
              get: ee => ee._useSpecularOverAlpha,
              set: (ee, ie) => {
                ee._useSpecularOverAlpha = ie
              }
            },
            metadata: ie
          }, cy, xy), (0, ye.i)(null, null, Li, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: ee => "_useReflectionOverAlpha" in ee,
              get: ee => ee._useReflectionOverAlpha,
              set: (ee, ie) => {
                ee._useReflectionOverAlpha = ie
              }
            },
            metadata: ie
          }, vy, uy), (0, ye.i)(null, null, vi, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: ee => "_disableLighting" in ee,
              get: ee => ee._disableLighting,
              set: (ee, ie) => {
                ee._disableLighting = ie
              }
            },
            metadata: ie
          }, Sy, ny), (0, ye.i)(null, null, mi, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: ee => "_useObjectSpaceNormalMap" in ee,
              get: ee => ee._useObjectSpaceNormalMap,
              set: (ee, ie) => {
                ee._useObjectSpaceNormalMap = ie
              }
            },
            metadata: ie
          }, Iy, hy), (0, ye.i)(null, null, Si, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: ee => "_useParallax" in ee,
              get: ee => ee._useParallax,
              set: (ee, ie) => {
                ee._useParallax = ie
              }
            },
            metadata: ie
          }, ry, Qy), (0, ye.i)(null, null, ji, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: ee => "_useParallaxOcclusion" in ee,
              get: ee => ee._useParallaxOcclusion,
              set: (ee, ie) => {
                ee._useParallaxOcclusion = ie
              }
            },
            metadata: ie
          }, Hb, yb), (0, ye.i)(null, null, Ii, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: ee => "parallaxScaleBias" in ee,
              get: ee => ee.parallaxScaleBias,
              set: (ee, ie) => {
                ee.parallaxScaleBias = ie
              }
            },
            metadata: ie
          }, Kb, Ub), (0, ye.i)(null, null, Ni, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: ee => "_roughness" in ee,
              get: ee => ee._roughness,
              set: (ee, ie) => {
                ee._roughness = ie
              }
            },
            metadata: ie
          }, Fb, Jb), (0, ye.i)(null, null, ri, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: ee => "indexOfRefraction" in ee,
              get: ee => ee.indexOfRefraction,
              set: (ee, ie) => {
                ee.indexOfRefraction = ie
              }
            },
            metadata: ie
          }, kb, qb), (0, ye.i)(null, null, Qi, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: ee => "invertRefractionY" in ee,
              get: ee => ee.invertRefractionY,
              set: (ee, ie) => {
                ee.invertRefractionY = ie
              }
            },
            metadata: ie
          }, fb, Tb), (0, ye.i)(null, null, eH, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: ee => "alphaCutOff" in ee,
              get: ee => ee.alphaCutOff,
              set: (ee, ie) => {
                ee.alphaCutOff = ie
              }
            },
            metadata: ie
          }, pb, Xb), (0, ye.i)(null, null, iH, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: ee => "_useLightmapAsShadowmap" in ee,
              get: ee => ee._useLightmapAsShadowmap,
              set: (ee, ie) => {
                ee._useLightmapAsShadowmap = ie
              }
            },
            metadata: ie
          }, zb, Bb), (0, ye.i)(null, null, yH, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: ee => "_diffuseFresnelParameters" in ee,
              get: ee => ee._diffuseFresnelParameters,
              set: (ee, ie) => {
                ee._diffuseFresnelParameters = ie
              }
            },
            metadata: ie
          }, Ob, db), (0, ye.i)(null, null, MH, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: ee => "_opacityFresnelParameters" in ee,
              get: ee => ee._opacityFresnelParameters,
              set: (ee, ie) => {
                ee._opacityFresnelParameters = ie
              }
            },
            metadata: ie
          }, Zb, wb), (0, ye.i)(null, null, UH, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: ee => "_reflectionFresnelParameters" in ee,
              get: ee => ee._reflectionFresnelParameters,
              set: (ee, ie) => {
                ee._reflectionFresnelParameters = ie
              }
            },
            metadata: ie
          }, Ab, Yb), (0, ye.i)(null, null, JH, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: ee => "_refractionFresnelParameters" in ee,
              get: ee => ee._refractionFresnelParameters,
              set: (ee, ie) => {
                ee._refractionFresnelParameters = ie
              }
            },
            metadata: ie
          }, cb, xb), (0, ye.i)(null, null, RH, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: ee => "_emissiveFresnelParameters" in ee,
              get: ee => ee._emissiveFresnelParameters,
              set: (ee, ie) => {
                ee._emissiveFresnelParameters = ie
              }
            },
            metadata: ie
          }, vb, ub), (0, ye.i)(null, null, qH, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: ee => "_useReflectionFresnelFromSpecular" in ee,
              get: ee => ee._useReflectionFresnelFromSpecular,
              set: (ee, ie) => {
                ee._useReflectionFresnelFromSpecular = ie
              }
            },
            metadata: ie
          }, Sb, nb), (0, ye.i)(null, null, TH, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: ee => "_useGlossinessFromSpecularMapAlpha" in ee,
              get: ee => ee._useGlossinessFromSpecularMapAlpha,
              set: (ee, ie) => {
                ee._useGlossinessFromSpecularMapAlpha = ie
              }
            },
            metadata: ie
          }, Ib, hb), (0, ye.i)(null, null, XH, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: ee => "_maxSimultaneousLights" in ee,
              get: ee => ee._maxSimultaneousLights,
              set: (ee, ie) => {
                ee._maxSimultaneousLights = ie
              }
            },
            metadata: ie
          }, rb, Qb), (0, ye.i)(null, null, BH, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: ee => "_invertNormalMapX" in ee,
              get: ee => ee._invertNormalMapX,
              set: (ee, ie) => {
                ee._invertNormalMapX = ie
              }
            },
            metadata: ie
          }, HM, yM), (0, ye.i)(null, null, gH, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: ee => "_invertNormalMapY" in ee,
              get: ee => ee._invertNormalMapY,
              set: (ee, ie) => {
                ee._invertNormalMapY = ie
              }
            },
            metadata: ie
          }, KM, UM), (0, ye.i)(null, null, dH, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: ee => "_twoSidedLighting" in ee,
              get: ee => ee._twoSidedLighting,
              set: (ee, ie) => {
                ee._twoSidedLighting = ie
              }
            },
            metadata: ie
          }, oM, RM), (0, ye.i)(null, null, tH, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: ee => "_applyDecalMapAfterDetailMap" in ee,
              get: ee => ee._applyDecalMapAfterDetailMap,
              set: (ee, ie) => {
                ee._applyDecalMapAfterDetailMap = ie
              }
            },
            metadata: ie
          }, fM, TM), ie && Object.defineProperty(ee, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ie
          })
        })(), ee.ForceGLSL = !1, ee._ShaderLoader = new Oe.d((() => [Promise.all([He.e(626), He.e(625)]).then((() => He(45070))), Promise.all([He.e(631), He.e(627), He.e(640), He.e(630)]).then((() => He(45264)))]), (() => [Promise.all([He.e(647), He.e(642)]).then((() => He(45435))), Promise.all([He.e(648), He.e(658), He.e(644)]).then((() => He(45623)))])), ee
      })(),
      ce = !1;

    function xe() {
      ce || (ce = !0, (0, Re.g)(), (0, we.e)("BABYLON.StandardMaterial", ae), Ke.f.DefaultMaterialFactory = ee => new ae("default material", ee))
    }
    Object.getOwnPropertyDescriptor(ae.prototype, "decalMap") || Object.defineProperty(ae.prototype, "decalMap", (0, De.d)("StandardMaterial", "decalMap"))
  },
  41502: (ee, ie, He) => {
    function ye(ee) {
      return class extends ee {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    He.d(ie, {
      d: () => ye
    })
  },
  41497: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    class ye {
      constructor(ee, ie) {
        this._webGL = {
          load: ee,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: ie,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(ee) {
        const ie = 1 === ee ? this._webGPU : this._webGL;
        return ie.loaded ? void 0 : async () => {
          await this._loadAsync(ie)
        }
      }
      async _loadAsync(ee) {
        if (ee.loaded) return;
        let ie = ee.loadPromise;
        const He = null === ie;
        He && (ie = Promise.all(ee.load()), ee.loadPromise = ie);
        let ye = !1;
        try {
          await ie, ye = !0
        } finally {
          He && this._completeLoad(ee, ye)
        }
      }
      _completeLoad(ee, ie) {
        ee.loaded = ie, ee.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);