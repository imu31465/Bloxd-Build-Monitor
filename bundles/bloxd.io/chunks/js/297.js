export const id = 297;
export const ids = [297];
export const modules = {
  42070: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    var eb = Mb(41686);

    function Hb(bb) {
      return class extends bb {
        constructor() {
          super(...arguments);
          const bb = new.target;
          if (!bb[Symbol.metadata]) {
            const wb = Object.getPrototypeOf(bb)?.[Symbol.metadata];
            bb[Symbol.metadata] = wb ? Object.create(wb) : {}
          }
          const wb = (0, eb.b)(bb[Symbol.metadata]);
          wb._imageProcessingConfiguration || (wb._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(bb) {
          this._attachImageProcessingConfiguration(bb), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(bb) {
          bb !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !bb && this.RJ ? this._imageProcessingConfiguration = this.RJ().imageProcessingConfiguration : bb && (this._imageProcessingConfiguration = bb), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(bb) {
          this.imageProcessingConfiguration.colorCurvesEnabled = bb
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(bb) {
          this.imageProcessingConfiguration.colorGradingEnabled = bb
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(bb) {
          this._imageProcessingConfiguration.toneMappingEnabled = bb
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(bb) {
          this._imageProcessingConfiguration.exposure = bb
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(bb) {
          this._imageProcessingConfiguration.contrast = bb
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(bb) {
          this._imageProcessingConfiguration.colorGradingTexture = bb
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(bb) {
          this._imageProcessingConfiguration.colorCurves = bb
        }
      }
    }
  },
  41952: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      i: () => Hb
    });
    var eb = Mb(41954);

    function Hb(bb) {
      return class extends bb {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class pb extends eb.b {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  42035: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ob
    });
    var eb = Mb(41675),
      Hb = Mb(41963),
      pb = Mb(41679),
      Vb = Mb(42010),
      gb = Mb(41954),
      lb = Mb(42044),
      Lb = Mb(41999);
    class Ib extends gb.b {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let Ob = (() => {
      var bb, wb, Mb, gb;
      let Ob, Ub, tb, Cb, Eb, Fb, Bb = lb.d,
        sb = [],
        mb = [],
        hb = [],
        zb = [],
        Xb = [],
        xb = [],
        jb = [],
        Kb = [],
        rb = [],
        Rb = [],
        Db = [],
        cb = [];
      return bb = class extends Bb {
        get texture() {
          return (0, eb.b)(this, wb, "f")
        }
        set texture(bb) {
          (0, eb.f)(this, wb, bb, "f")
        }
        get normalBlendMethod() {
          return (0, eb.b)(this, Mb, "f")
        }
        set normalBlendMethod(bb) {
          (0, eb.f)(this, Mb, bb, "f")
        }
        get isEnabled() {
          return (0, eb.b)(this, gb, "f")
        }
        set isEnabled(bb) {
          (0, eb.f)(this, gb, bb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(bb) {
          let pb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(bb, "DetailMap", 140, new Ib, pb), this._texture = null, wb.set(this, (0, eb.m)(this, sb, void 0)), this.diffuseBlendLevel = ((0, eb.m)(this, mb), (0, eb.m)(this, hb, 1)), this.roughnessBlendLevel = ((0, eb.m)(this, zb), (0, eb.m)(this, Xb, 1)), this.bumpLevel = ((0, eb.m)(this, xb), (0, eb.m)(this, jb, 1)), this._normalBlendMethod = ((0, eb.m)(this, Kb), Hb.b.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), Mb.set(this, (0, eb.m)(this, rb, void 0)), this._isEnabled = ((0, eb.m)(this, Rb), !1), gb.set(this, (0, eb.m)(this, Db, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, eb.m)(this, cb), this._internalMarkAllSubMeshesAsTexturesDirty = bb._dirtyCallbacks[1]
        }
        isReadyForSubMesh(bb, wb, Mb) {
          return !this._isEnabled || !(bb._areTexturesDirty && wb.texturesEnabled && Mb.getCaps().standardDerivatives && this._texture && Vb.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(bb, wb) {
          if (this._isEnabled) {
            bb.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const Mb = wb.DC();
            bb._areTexturesDirty && (Mb.getCaps().standardDerivatives && this._texture && Vb.e.DetailTextureEnabled && this._isEnabled ? ((0, Lb.$)(this._texture, bb, "DETAIL"), bb.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : bb.DETAIL = !1)
          } else bb.DETAIL = !1
        }
        bindForSubMesh(bb, wb) {
          if (!this._isEnabled) return;
          const Mb = this._material.isFrozen;
          bb.useUbo && Mb && bb.isSync || this._texture && Vb.e.DetailTextureEnabled && (bb.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, Lb.C)(this._texture, bb, "detail")), wb.texturesEnabled && this._texture && Vb.e.DetailTextureEnabled && bb.setTexture("detailSampler", this._texture)
        }
        hasTexture(bb) {
          return this._texture === bb
        }
        getActiveTextures(bb) {
          this._texture && bb.push(this._texture)
        }
        getAnimatables(bb) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && bb.push(this._texture)
        }
        dispose(bb) {
          bb && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(bb) {
          bb.push("detailSampler")
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
      }, wb = new WeakMap, Mb = new WeakMap, gb = new WeakMap, (() => {
        const wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Bb[Symbol.metadata] ?? null) : void 0;
        Ob = [(0, pb.x)("detailTexture"), (0, pb.d)("_markAllSubMeshesAsTexturesDirty")], Ub = [(0, pb.E)()], tb = [(0, pb.E)()], Cb = [(0, pb.E)()], Eb = [(0, pb.E)(), (0, pb.d)("_markAllSubMeshesAsTexturesDirty")], Fb = [(0, pb.E)(), (0, pb.d)("_markAllSubMeshesAsTexturesDirty")], (0, eb.i)(bb, null, Ob, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, wb) => {
              bb.texture = wb
            }
          },
          metadata: wb
        }, sb, mb), (0, eb.i)(bb, null, Eb, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: bb => "normalBlendMethod" in bb,
            get: bb => bb.normalBlendMethod,
            set: (bb, wb) => {
              bb.normalBlendMethod = wb
            }
          },
          metadata: wb
        }, rb, Rb), (0, eb.i)(bb, null, Fb, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, wb) => {
              bb.isEnabled = wb
            }
          },
          metadata: wb
        }, Db, cb), (0, eb.i)(null, null, Ub, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: bb => "diffuseBlendLevel" in bb,
            get: bb => bb.diffuseBlendLevel,
            set: (bb, wb) => {
              bb.diffuseBlendLevel = wb
            }
          },
          metadata: wb
        }, hb, zb), (0, eb.i)(null, null, tb, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: bb => "roughnessBlendLevel" in bb,
            get: bb => bb.roughnessBlendLevel,
            set: (bb, wb) => {
              bb.roughnessBlendLevel = wb
            }
          },
          metadata: wb
        }, Xb, xb), (0, eb.i)(null, null, Cb, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: bb => "bumpLevel" in bb,
            get: bb => bb.bumpLevel,
            set: (bb, wb) => {
              bb.bumpLevel = wb
            }
          },
          metadata: wb
        }, jb, Kb), wb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wb
        })
      })(), bb
    })()
  },
  41954: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    class eb {
      constructor(bb) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = bb, bb)
          for (const wb in bb) Object.prototype.hasOwnProperty.call(bb, wb) && this._setDefaultValue(wb)
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
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || bb, this._isDirty = !0
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
        for (const bb of Object.keys(this)) "_" !== bb[0] && this._keys.push(bb);
        if (this._externalProperties)
          for (const bb in this._externalProperties) - 1 === this._keys.indexOf(bb) && this._keys.push(bb)
      }
      isEqual(bb) {
        if (this._keys.length !== bb._keys.length) return !1;
        for (let wb = 0; wb < this._keys.length; wb++) {
          const Mb = this._keys[wb];
          if (this[Mb] !== bb[Mb]) return !1
        }
        return !0
      }
      cloneTo(bb) {
        this._keys.length !== bb._keys.length && (bb._keys = this._keys.slice(0));
        for (let wb = 0; wb < this._keys.length; wb++) {
          const Mb = this._keys[wb];
          bb[Mb] = this[Mb]
        }
      }
      reset() {
        for (const bb of this._keys) this._setDefaultValue(bb)
      }
      _setDefaultValue(bb) {
        const wb = this._externalProperties?.[bb]?.type ?? typeof this[bb],
          Mb = this._externalProperties?.[bb]?.default;
        switch (wb) {
          case "number":
            this[bb] = Mb ?? 0;
            break;
          case "string":
            this[bb] = Mb ?? "";
            break;
          default:
            this[bb] = Mb ?? !1
        }
      }
      toString() {
        let bb = "";
        for (let wb = 0; wb < this._keys.length; wb++) {
          const Mb = this._keys[wb],
            eb = this[Mb];
          switch (typeof eb) {
            case "number":
            case "string":
              bb += "#define " + Mb + " " + eb + "\n";
              break;
            default:
              eb && (bb += "#define " + Mb + "\n")
          }
        }
        return bb
      }
    }
  },
  42055: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      d: () => Vb,
      g: () => pb
    });
    var eb, Hb = Mb(38285);

    function pb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const eb = wb(bb);
      if (!Number.isInteger(eb) || eb < 0 || eb > Mb) throw new Error(`Invalid geometry object ID ${eb} for mesh "${bb.name}". Object IDs must be integers between 0 and 0x${Mb.toString(16).toUpperCase()}.`);
      return eb
    }

    function Vb(bb, wb) {
      const Mb = wb(bb);
      if (!Number.isInteger(Mb) || Mb < 0 || Mb > 255 || 0 !== Mb && 0 === (63 & Mb)) throw new Error(`Invalid geometry mesh-blending tag ${Mb} for mesh "${bb.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return Mb
    }! function(bb) {
      bb[bb.Zero = 0] = "Zero", bb[bb.One = 1] = "One", bb[bb.MaxViewZ = 2] = "MaxViewZ", bb[bb.NoClear = 3] = "NoClear"
    }(eb || (eb = {}));
    class gb {
      static CreateConfiguration(bb) {
        return gb._Configurations[bb] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: Hb.b.Zero(),
          currentViewProjection: Hb.b.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, gb._Configurations[bb]
      }
      static DeleteConfiguration(bb) {
        delete gb._Configurations[bb]
      }
      static GetConfiguration(bb) {
        return gb._Configurations[bb]
      }
      static _PrepareConfiguration(bb, wb, Mb) {
        const eb = gb._Configurations[bb];
        eb._attachments = wb, eb._colorAttachments = Mb, eb._mrtCount = wb.length;
        let Hb = "#define PREPASS\n";
        for (const pb of gb.GeometryTextureDescriptions) {
          const bb = eb.defines[pb.defineIndex];
          void 0 !== bb && (Hb += `#define ${pb.define}\n#define ${pb.defineIndex} ${bb}\n`)
        }
        eb.objectIdIsRedFormat && (Hb += "#define PREPASS_OBJECT_ID_R8\n"), eb._defines = Hb + `#define SCENE_MRT_COUNT ${wb.length}\n`
      }
      static _PrepareStringDefines(bb, wb) {
        const Mb = gb._Configurations[bb];
        return !!Mb?._defines && (wb.push(Mb._defines), !0)
      }
      static _BindAttachmentsForEffect(bb, wb) {
        const Mb = gb._Configurations[bb.currentRenderPassId];
        return !Mb?._attachments || (bb.bindAttachments(wb._multiTarget ? Mb._attachments : Mb._colorAttachments), wb._multiTarget || void 0 !== Mb.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(bb) {
        const wb = gb._Configurations[bb.currentRenderPassId];
        wb?._colorAttachments && bb.bindAttachments(wb._colorAttachments)
      }
      static _BindColorAttachments(bb) {
        const wb = gb._Configurations[bb.currentRenderPassId];
        return !wb?._colorAttachments || (bb.bindAttachments(wb._colorAttachments), void 0 !== wb.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(bb) {
        const wb = gb._Configurations[bb.currentRenderPassId];
        return !wb?._colorAttachments || void 0 !== wb.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(bb, wb) {
        const Mb = gb._Configurations[bb.currentRenderPassId];
        if (!Mb) return;
        const eb = bb.getAlphaMode(),
          Hb = void 0 === Mb.defines.PREPASS_COLOR_INDEX || 2 === eb || 1 === eb || 17 === eb;
        wb.setFloat("geometryZeroAlphaDiscard", Hb ? 1 : 0)
      }
      static AddUniformsAndSamplers(bb, wb) {
        bb.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(bb, wb) {
        for (const Mb of wb)
          if (Mb.oR)
            for (const wb of Mb.oR) wb._removeDrawWrapper(bb)
      }
      static PrepareDefines(bb, wb, Mb) {
        if (!Mb._arePrePassDirty) return;
        const eb = gb._Configurations[bb];
        if (!eb) return;
        Mb.PREPASS = !0;
        let Hb = 0;
        for (let pb = 0; pb < gb.GeometryTextureDescriptions.length; pb++) {
          const bb = gb.GeometryTextureDescriptions[pb],
            wb = bb.define,
            Vb = bb.defineIndex,
            lb = eb.defines[Vb];
          void 0 !== lb ? (Mb[wb] = !0, Mb[Vb] = lb, Hb++) : (Mb[wb] = !1, delete Mb[Vb])
        }
        Mb.PREPASS_OBJECT_ID_R8 = eb.objectIdIsRedFormat, Mb.SCENE_MRT_COUNT = eb._mrtCount ?? Hb, Mb.BONES_VELOCITY_ENABLED = wb.useBones && wb.computeBonesUsingShaders && wb.skeleton && !wb.skeleton.isUsingTextureForMatrices && -1 === eb.excludedSkinnedMesh.indexOf(wb)
      }
      static Bind(bb, wb, Mb, eb, Hb) {
        const lb = gb._Configurations[bb];
        if (!lb) return;
        const Lb = Mb.RJ(),
          Ib = Lb.DC();
        if (lb.reverseCulling && Ib.setStateCullFaceType(Lb._mirroredCameraPosition ? Hb.cullBackFaces : !Hb.cullBackFaces), void 0 !== lb.defines.PREPASS_OBJECT_ID_INDEX) {
          const bb = lb.objectIdIsRedFormat ? 255 : 16777215;
          let eb = Mb.uniqueId;
          if (lb.objectIdProvider) eb = pb(Mb, lb.objectIdProvider, bb);
          else if (eb > bb) throw new Error(`Invalid geometry object ID ${eb} for mesh "${Mb.name}". Object IDs must be integers between 0 and 0x${bb.toString(16).toUpperCase()}.`);
          wb.setFloat("objectId", eb)
        }
        if (void 0 !== lb.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const bb = lb.meshBlendTagProvider ? Vb(Mb, lb.meshBlendTagProvider) : Mb.meshBlendingTag;
          wb.setInt("meshBlendTag", bb)
        }
        if (void 0 !== lb.defines.PREPASS_VELOCITY_INDEX || void 0 !== lb.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const bb = lb._currentWorldMatrices ?? (lb._currentWorldMatrices = {}),
            Hb = lb._worldMatrixFrameIds ?? (lb._worldMatrixFrameIds = {});
          if (bb[Mb.uniqueId] || (bb[Mb.uniqueId] = eb.clone(), lb.previousWorldMatrices[Mb.uniqueId] = eb.clone()), Hb[Mb.uniqueId] !== Ib.frameId && (lb.previousWorldMatrices[Mb.uniqueId].eZ(bb[Mb.uniqueId]), Hb[Mb.uniqueId] = Ib.frameId), bb[Mb.uniqueId].eZ(eb), -1 === lb.lastUpdateFrameId ? (lb.lastUpdateFrameId = Ib.frameId, lb.previousViewProjection.eZ(Lb.getTransformMatrix()), lb.currentViewProjection.eZ(Lb.getTransformMatrix())) : lb.currentViewProjection.updateFlag !== Lb.getTransformMatrix().updateFlag ? (lb.lastUpdateFrameId = Ib.frameId, lb.previousViewProjection.eZ(lb.currentViewProjection), lb.currentViewProjection.eZ(Lb.getTransformMatrix())) : lb.lastUpdateFrameId !== Ib.frameId && (lb.lastUpdateFrameId = Ib.frameId, lb.previousViewProjection.eZ(lb.currentViewProjection)), wb.setMatrix("previousWorld", lb.previousWorldMatrices[Mb.uniqueId]), wb.setMatrix("previousViewProjection", lb.previousViewProjection), Mb.useBones && Mb.computeBonesUsingShaders && Mb.skeleton) {
            const bb = Mb.skeleton;
            if (!bb.isUsingTextureForMatrices || -1 === wb.getUniformIndex("boneTextureInfo")) {
              const eb = bb.getTransformMatrices(Mb);
              eb && (lb.previousBones[Mb.uniqueId] || (lb.previousBones[Mb.uniqueId] = eb.slice()), wb.setMatrices("mPreviousBones", lb.previousBones[Mb.uniqueId]), lb.previousBones[Mb.uniqueId].set(eb))
            }
          }
        }
      }
    }
    gb.GeometryTextureDescriptions = [{
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
    }], gb._Configurations = {}
  },
  42044: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ub,
      h: () => Cb
    });
    var eb = Mb(41675),
      Hb = Mb(41679),
      pb = Mb(41562),
      Vb = Mb(41518);
    const gb = new RegExp("^([gimus]+)!");
    class lb {
      constructor(bb) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = bb, this._scene = bb.RJ(), this._engine = this._scene.DC()
      }
      _addPlugin(bb) {
        for (let eb = 0; eb < this._plugins.length; ++eb)
          if (this._plugins[eb].name === bb.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !bb.isCompatible(this._material.shaderLanguage)) throw `The plugin "${bb.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const wb = bb.getClassName();
        lb._MaterialPluginClassToMainDefine[wb] || (lb._MaterialPluginClassToMainDefine[wb] = "MATERIALPLUGIN_" + ++lb._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (bb, wb) => this._handlePluginEvent(bb, wb), this._plugins.push(bb), this._plugins.sort(((bb, wb) => bb.priority - wb.priority)), this._codeInjectionPoints = {};
        const Mb = {};
        Mb[lb._MaterialPluginClassToMainDefine[wb]] = {
          type: "boolean",
          default: !0
        };
        for (const eb of this._plugins) eb.collectDefines(Mb), this._collectPointNames("vertex", eb.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", eb.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = Mb, !0
      }
      _activatePlugin(bb) {
        -1 === this._activePlugins.indexOf(bb) && (this._activePlugins.push(bb), this._activePlugins.sort(((bb, wb) => bb.priority - wb.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), bb.registerForExtraEvents && (this._activePluginsForExtraEvents.push(bb), this._activePluginsForExtraEvents.sort(((bb, wb) => bb.priority - wb.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(bb) {
        for (let wb = 0; wb < this._plugins.length; ++wb)
          if (this._plugins[wb].name === bb) return this._plugins[wb];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(bb) {
        let wb = !0;
        for (const Mb of this._activePlugins) wb = wb && Mb.isReadyForSubMesh(bb.defines, this._scene, this._engine, bb.subMesh);
        bb.isReadyForSubMesh = wb
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(bb) {
        for (const wb of this._activePlugins) wb.prepareDefinesBeforeAttributes(bb.defines, this._scene, bb.mesh)
      }
      _handlePluginEventPrepareDefines(bb) {
        for (const wb of this._activePlugins) wb.prepareDefines(bb.defines, this._scene, bb.mesh)
      }
      _handlePluginEventHardBindForSubMesh(bb) {
        for (const wb of this._activePluginsForExtraEvents) wb.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, bb.subMesh)
      }
      _handlePluginEventBindForSubMesh(bb) {
        for (const wb of this._activePlugins) wb.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, bb.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(bb) {
        let wb = !1;
        for (const Mb of this._activePluginsForExtraEvents)
          if (wb = Mb.hasRenderTargetTextures(), wb) break;
        bb.hasRenderTargetTextures = wb
      }
      _handlePluginEventFillRenderTargetTextures(bb) {
        for (const wb of this._activePluginsForExtraEvents) wb.fillRenderTargetTextures(bb.renderTargets)
      }
      _handlePluginEvent(bb, wb) {
        switch (bb) {
          case 512: {
            const bb = wb;
            for (const wb of this._activePlugins) wb.getActiveTextures(bb.activeTextures);
            break
          }
          case 256: {
            const bb = wb;
            for (const wb of this._activePlugins) wb.getAnimatables(bb.animatables);
            break
          }
          case 1024: {
            const bb = wb;
            let Mb = !1;
            for (const wb of this._activePlugins)
              if (Mb = wb.hasTexture(bb.texture), Mb) break;
            bb.hasTexture = Mb;
            break
          }
          case 2: {
            const bb = wb;
            for (const wb of this._plugins) wb.dispose(bb.forceDisposeTextures);
            break
          }
          case 4:
            wb.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const bb = wb;
            for (const wb of this._activePlugins) bb.fallbackRank = wb.addFallbacks(bb.defines, bb.fallbacks, bb.fallbackRank), wb.getAttributes(bb.attributes, this._scene, bb.mesh);
            this._uniformList.length > 0 && bb.uniforms.push(...this._uniformList), this._samplerList.length > 0 && bb.samplers.push(...this._samplerList), this._uboList.length > 0 && bb.uniformBuffersNames.push(...this._uboList), bb.customCode = this._injectCustomCode(bb, bb.customCode);
            break
          }
          case 8: {
            const bb = wb;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const Mb = 1 === this._material.shaderLanguage;
            for (const wb of this._plugins) {
              const eb = wb.getUniforms(this._material.shaderLanguage);
              if (eb) {
                if (eb.ubo)
                  for (const wb of eb.ubo) {
                    if (wb.size && wb.type) {
                      const eb = wb.arraySize ?? 0;
                      if (bb.ubo.addUniform(wb.name, wb.size, eb), Mb) {
                        let bb;
                        switch (wb.type) {
                          case "mat4":
                            bb = "mat4x4f";
                            break;
                          case "float":
                            bb = "f32";
                            break;
                          default:
                            bb = `${wb.type}f`
                        }
                        this._uboDeclaration += eb > 0 ? `uniform ${wb.name}: array<${bb}, ${eb}>;\n` : `uniform ${wb.name}: ${bb};\n`
                      } else this._uboDeclaration += `${wb.type} ${wb.name}${eb>0?`[${eb}]`:""};\n`
                    }
                    this._uniformList.push(wb.name)
                  }
                eb.vertex && (this._vertexDeclaration += eb.vertex + "\n"), eb.fragment && (this._fragmentDeclaration += eb.fragment + "\n"), eb.externalUniforms && this._uniformList.push(...eb.externalUniforms)
              }
              wb.getSamplers(this._samplerList), wb.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(bb, wb) {
        if (wb)
          for (const Mb in wb) this._codeInjectionPoints[bb] || (this._codeInjectionPoints[bb] = {}), this._codeInjectionPoints[bb][Mb] = !0
      }
      _injectCustomCode(bb, wb) {
        return (Mb, eb) => {
          wb && (eb = wb(Mb, eb)), this._uboDeclaration && (eb = eb.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (eb = eb.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (eb = eb.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const Hb = this._codeInjectionPoints?.[Mb];
          if (!Hb) return eb;
          let lb = null;
          for (let wb in Hb) {
            let Hb = "";
            for (const eb of this._activePlugins) {
              const gb = this._material.shaderLanguage;
              let Lb = eb.getCustomCode(Mb, gb)?.[wb];
              Lb && (eb.resolveIncludes && (null === lb && (lb = {
                defines: [],
                indexParameters: bb.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: Vb.e.GetShadersRepository(gb),
                includesShadersStore: Vb.e.GetIncludesShadersStore(gb),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                rHb: this._engine.rHb,
                processCodeAfterIncludes: void 0
              }), lb.isFragment = "fragment" === Mb, (0, pb.i)(Lb, lb, (bb => Lb = bb))), Hb += Lb + "\n")
            }
            if (Hb.length > 0)
              if ("!" === wb.charAt(0)) {
                wb = wb.substring(1);
                let bb = "g";
                if ("!" === wb.charAt(0)) bb = "", wb = wb.substring(1);
                else {
                  const Mb = gb.exec(wb);
                  Mb && Mb.length >= 2 && (bb = Mb[1], wb = wb.substring(bb.length + 1))
                }
                bb.indexOf("g") < 0 && (bb += "g");
                const Mb = new RegExp(wb, bb);
                let pb = Mb.exec(eb);
                for (; null !== pb;) {
                  const {
                    index: bb
                  } = pb, wb = Lb(Hb, pb);
                  eb = eb.substring(0, bb) + wb + eb.substring(bb + pb[0].length), Mb.lastIndex = bb + wb.length, pb = Mb.exec(eb)
                }
              } else {
                const bb = "#define " + wb;
                eb = eb.replace(bb, "\n" + Hb + "\n" + bb)
              }
          }
          return eb
        }
      }
    }
    lb._MaterialPluginClassToMainDefine = {}, lb._MaterialPluginCounter = 0;

    function Lb(bb, wb) {
      return bb.replace(/\$(\d+)/g, ((bb, Mb) => {
        const eb = Number(Mb);
        return eb < wb.length ? wb[eb] : ""
      }))
    }
    var Ib = Mb(41697),
      Ob = Mb(38333);
    let Ub = (() => {
        var bb;
        let wb, Mb, pb, Vb, gb = [],
          Lb = [],
          Ob = [],
          Ub = [],
          tb = [],
          Cb = [],
          Eb = [],
          Fb = [];
        return bb = class {
          isCompatible(bb) {
            return 0 === bb
          }
          _enable(bb) {
            bb && this._pluginManager._activatePlugin(this)
          }
          constructor(bb, wb, Mb, Hb) {
            let pb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              Vb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              Ib = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, eb.m)(this, gb, void 0), this.priority = ((0, eb.m)(this, Lb), (0, eb.m)(this, Ob, 500)), this.resolveIncludes = ((0, eb.m)(this, Ub), (0, eb.m)(this, tb, !1)), this.registerForExtraEvents = ((0, eb.m)(this, Cb), (0, eb.m)(this, Eb, !1)), this.doNotSerialize = ((0, eb.m)(this, Fb), !1), this._material = bb, this.name = wb, this.priority = Mb, this.resolveIncludes = Ib, bb.pluginManager || (bb.pluginManager = new lb(bb), bb.vJ.add((() => {
              bb.pluginManager = void 0
            }))), this._pluginDefineNames = Hb, this._pluginManager = bb.pluginManager, pb && this._pluginManager._addPlugin(this), Vb && this._enable(!0), this.markAllDefinesAsDirty = bb._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(bb, wb, Mb, eb) {
            return !0
          }
          hardBindForSubMesh(bb, wb, Mb, eb) {}
          bindForSubMesh(bb, wb, Mb, eb) {}
          dispose(bb) {}
          getCustomCode(bb) {
            return null
          }
          collectDefines(bb) {
            if (this._pluginDefineNames)
              for (const wb of Object.keys(this._pluginDefineNames)) {
                if ("_" === wb[0]) continue;
                const Mb = typeof this._pluginDefineNames[wb];
                bb[wb] = {
                  type: "number" === Mb ? "number" : "string" === Mb ? "string" : "boolean" === Mb ? "boolean" : "object",
                  default: this._pluginDefineNames[wb]
                }
              }
          }
          prepareDefinesBeforeAttributes(bb, wb, Mb) {}
          prepareDefines(bb, wb, Mb) {}
          hasTexture(bb) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(bb) {}
          getActiveTextures(bb) {}
          getAnimatables(bb) {}
          addFallbacks(bb, wb, Mb) {
            return Mb
          }
          getSamplers(bb) {}
          getAttributes(bb, wb, Mb) {}
          getUniformBuffersNames(bb) {}
          getUniforms() {
            return {}
          }
          copyTo(bb) {
            Ib.d.Clone((() => bb), this)
          }
          serialize() {
            return Ib.d.Serialize(this)
          }
          parse(bb, wb, Mb) {
            Ib.d.Parse((() => this), bb, wb, Mb)
          }
        }, (() => {
          const lb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          wb = [(0, Hb.E)()], Mb = [(0, Hb.E)()], pb = [(0, Hb.E)()], Vb = [(0, Hb.E)()], (0, eb.i)(null, null, wb, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name,
              set: (bb, wb) => {
                bb.name = wb
              }
            },
            metadata: lb
          }, gb, Lb), (0, eb.i)(null, null, Mb, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: bb => "priority" in bb,
              get: bb => bb.priority,
              set: (bb, wb) => {
                bb.priority = wb
              }
            },
            metadata: lb
          }, Ob, Ub), (0, eb.i)(null, null, pb, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: bb => "resolveIncludes" in bb,
              get: bb => bb.resolveIncludes,
              set: (bb, wb) => {
                bb.resolveIncludes = wb
              }
            },
            metadata: lb
          }, tb, Cb), (0, eb.i)(null, null, Vb, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: bb => "registerForExtraEvents" in bb,
              get: bb => bb.registerForExtraEvents,
              set: (bb, wb) => {
                bb.registerForExtraEvents = wb
              }
            },
            metadata: lb
          }, Eb, Fb), lb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lb
          })
        })(), bb
      })(),
      tb = !1;

    function Cb() {
      tb || (tb = !0, (0, Ob.e)("BABYLON.MaterialPluginBase", Ub))
    }
  },
  41943: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb
    });
    class eb {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(bb) {
        bb.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(bb) {}
      bindForSubMesh(bb, wb, Mb, eb, Hb) {
        if (wb.prePassRenderer && wb.prePassRenderer.enabled && wb.prePassRenderer.currentRTisSceneRT && (-1 !== wb.prePassRenderer.getIndex(2) || -1 !== wb.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[Mb.uniqueId] || (this.previousWorldMatrices[Mb.uniqueId] = eb.clone()), this.previousViewProjection || (this.previousViewProjection = wb.getTransformMatrix().clone(), this.currentViewProjection = wb.getTransformMatrix().clone());
          const Hb = wb.DC();
          this.currentViewProjection.updateFlag !== wb.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = Hb.frameId, this.previousViewProjection.eZ(this.currentViewProjection), this.currentViewProjection.eZ(wb.getTransformMatrix())) : this._lastUpdateFrameId !== Hb.frameId && (this._lastUpdateFrameId = Hb.frameId, this.previousViewProjection.eZ(this.currentViewProjection)), bb.setMatrix("previousWorld", this.previousWorldMatrices[Mb.uniqueId]), bb.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[Mb.uniqueId] = eb.clone()
        }
      }
    }
  },
  42066: (bb, wb, Mb) => {
    function eb(bb) {
      return class extends bb {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    Mb.d(wb, {
      c: () => eb
    })
  },
  41933: (bb, wb, Mb) => {
    Mb.d(wb, {
      StandardMaterial: () => eb.g
    });
    var eb = Mb(41935);
    (0, eb.d)()
  },
  41935: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Jb,
      g: () => Ab
    });
    var eb = Mb(41675),
      Hb = Mb(41679),
      pb = Mb(41777),
      Vb = Mb(41764),
      gb = Mb(38406),
      lb = Mb(41816),
      Lb = Mb(41943),
      Ib = Mb(41952),
      Ob = Mb(41786),
      Ub = Mb(41963),
      tb = Mb(41954),
      Cb = Mb(42017),
      Eb = Mb(42010),
      Fb = Mb(42026),
      Bb = Mb(42035),
      sb = Mb(42004),
      mb = Mb(42050),
      hb = Mb(41999),
      zb = Mb(41697),
      Xb = Mb(42052),
      xb = Mb(42055),
      jb = Mb(42061),
      Kb = Mb(42066),
      rb = Mb(42070),
      Rb = Mb(38333),
      Db = Mb(41554);
    const cb = {
      effect: null,
      subMesh: null
    };
    class Yb extends((0, Kb.c)((0, jb.e)(tb.b))) {}
    class Zb extends((0, Ib.i)(Yb)) {
      constructor(bb) {
        super(bb), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class fb extends((0, rb.b)(Cb.d)) {}
    let Ab = (() => {
        var bb, wb, Ib, tb, jb, Kb, rb, Rb, Db, Yb, Ab, Wb, Jb, Sb, Nb, vb, Qb, Gb, qb, ab, ib, ub, db, Pb, nb, yb, ob, Tb, kb, bw, ww, Mw, ew;
        let Hw, pw, Vw, gw, lw, Lw, Iw, Ow, Uw, tw, Cw, Ew, Fw, Bw, sw, mw, hw, zw, Xw, xw, jw, Kw, rw, Rw, Dw, Yw, Zw, fw, Aw, Ww, Jw, Sw, Nw, vw, Qw, Gw, qw, aw, iw, uw, dw, Pw, nw, yw, ow, Tw, kw, bM, wM, MM, eM, HM, pM, VM, gM, lM, LM, IM, OM, UM, tM, CM, EM, FM, BM, sM, mM, hM, zM, XM, xM, jM, KM, rM = fb,
          RM = [],
          DM = [],
          cM = [],
          YM = [],
          ZM = [],
          fM = [],
          AM = [],
          WM = [],
          JM = [],
          SM = [],
          NM = [],
          vM = [],
          QM = [],
          GM = [],
          qM = [],
          aM = [],
          iM = [],
          uM = [],
          dM = [],
          PM = [],
          nM = [],
          yM = [],
          oM = [],
          TM = [],
          kM = [],
          be = [],
          we = [],
          Me = [],
          ee = [],
          He = [],
          pe = [],
          Ve = [],
          ge = [],
          le = [],
          Le = [],
          Ie = [],
          Oe = [],
          Ue = [],
          te = [],
          Ce = [],
          Ee = [],
          Fe = [],
          Be = [],
          se = [],
          me = [],
          he = [],
          ze = [],
          Xe = [],
          xe = [],
          je = [],
          Ke = [],
          re = [],
          Re = [],
          De = [],
          ce = [],
          Ye = [],
          Ze = [],
          fe = [],
          Ae = [],
          We = [],
          Je = [],
          Se = [],
          Ne = [],
          ve = [],
          Qe = [],
          Ge = [],
          qe = [],
          ae = [],
          ie = [],
          ue = [],
          de = [],
          Pe = [],
          ne = [],
          ye = [],
          oe = [],
          Te = [],
          ke = [],
          bH = [],
          wH = [],
          MH = [],
          eH = [],
          HH = [],
          pH = [],
          VH = [],
          gH = [],
          lH = [],
          LH = [],
          IH = [],
          OH = [],
          UH = [],
          tH = [],
          CH = [],
          EH = [],
          FH = [],
          BH = [],
          sH = [],
          mH = [],
          hH = [],
          zH = [],
          XH = [],
          xH = [],
          jH = [],
          KH = [],
          rH = [],
          RH = [],
          DH = [],
          cH = [],
          YH = [],
          ZH = [],
          fH = [],
          AH = [],
          WH = [],
          JH = [],
          SH = [],
          NH = [],
          vH = [],
          QH = [],
          GH = [],
          qH = [],
          aH = [],
          iH = [],
          uH = [],
          dH = [],
          PH = [],
          nH = [],
          yH = [],
          oH = [],
          TH = [],
          kH = [],
          bp = [],
          wp = [],
          Mp = [],
          ep = [],
          Hp = [],
          pp = [],
          Vp = [],
          gp = [],
          lp = [],
          Lp = [],
          Ip = [],
          Op = [],
          Up = [],
          tp = [],
          Cp = [],
          Ep = [],
          Fp = [];
        return bb = class extends rM {
          get diffuseTexture() {
            return (0, eb.b)(this, wb, "f")
          }
          set diffuseTexture(bb) {
            (0, eb.f)(this, wb, bb, "f")
          }
          get ambientTexture() {
            return (0, eb.b)(this, Ib, "f")
          }
          set ambientTexture(bb) {
            (0, eb.f)(this, Ib, bb, "f")
          }
          get opacityTexture() {
            return (0, eb.b)(this, tb, "f")
          }
          set opacityTexture(bb) {
            (0, eb.f)(this, tb, bb, "f")
          }
          get reflectionTexture() {
            return (0, eb.b)(this, jb, "f")
          }
          set reflectionTexture(bb) {
            (0, eb.f)(this, jb, bb, "f")
          }
          get emissiveTexture() {
            return (0, eb.b)(this, Kb, "f")
          }
          set emissiveTexture(bb) {
            (0, eb.f)(this, Kb, bb, "f")
          }
          get specularTexture() {
            return (0, eb.b)(this, rb, "f")
          }
          set specularTexture(bb) {
            (0, eb.f)(this, rb, bb, "f")
          }
          get bumpTexture() {
            return (0, eb.b)(this, Rb, "f")
          }
          set bumpTexture(bb) {
            (0, eb.f)(this, Rb, bb, "f")
          }
          get lightmapTexture() {
            return (0, eb.b)(this, Db, "f")
          }
          set lightmapTexture(bb) {
            (0, eb.f)(this, Db, bb, "f")
          }
          get refractionTexture() {
            return (0, eb.b)(this, Yb, "f")
          }
          set refractionTexture(bb) {
            (0, eb.f)(this, Yb, bb, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, eb.b)(this, Ab, "f")
          }
          set useAlphaFromDiffuseTexture(bb) {
            (0, eb.f)(this, Ab, bb, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, eb.b)(this, Wb, "f")
          }
          set useEmissiveAsIllumination(bb) {
            (0, eb.f)(this, Wb, bb, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, eb.b)(this, Jb, "f")
          }
          set linkEmissiveWithDiffuse(bb) {
            (0, eb.f)(this, Jb, bb, "f")
          }
          get useSpecularOverAlpha() {
            return (0, eb.b)(this, Sb, "f")
          }
          set useSpecularOverAlpha(bb) {
            (0, eb.f)(this, Sb, bb, "f")
          }
          get useReflectionOverAlpha() {
            return (0, eb.b)(this, Nb, "f")
          }
          set useReflectionOverAlpha(bb) {
            (0, eb.f)(this, Nb, bb, "f")
          }
          get disableLighting() {
            return (0, eb.b)(this, vb, "f")
          }
          set disableLighting(bb) {
            (0, eb.f)(this, vb, bb, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, eb.b)(this, Qb, "f")
          }
          set useObjectSpaceNormalMap(bb) {
            (0, eb.f)(this, Qb, bb, "f")
          }
          get useParallax() {
            return (0, eb.b)(this, Gb, "f")
          }
          set useParallax(bb) {
            (0, eb.f)(this, Gb, bb, "f")
          }
          get useParallaxOcclusion() {
            return (0, eb.b)(this, qb, "f")
          }
          set useParallaxOcclusion(bb) {
            (0, eb.f)(this, qb, bb, "f")
          }
          get roughness() {
            return (0, eb.b)(this, ab, "f")
          }
          set roughness(bb) {
            (0, eb.f)(this, ab, bb, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, eb.b)(this, ib, "f")
          }
          set useLightmapAsShadowmap(bb) {
            (0, eb.f)(this, ib, bb, "f")
          }
          get diffuseFresnelParameters() {
            return (0, eb.b)(this, ub, "f")
          }
          set diffuseFresnelParameters(bb) {
            (0, eb.f)(this, ub, bb, "f")
          }
          get opacityFresnelParameters() {
            return (0, eb.b)(this, db, "f")
          }
          set opacityFresnelParameters(bb) {
            (0, eb.f)(this, db, bb, "f")
          }
          get reflectionFresnelParameters() {
            return (0, eb.b)(this, Pb, "f")
          }
          set reflectionFresnelParameters(bb) {
            (0, eb.f)(this, Pb, bb, "f")
          }
          get refractionFresnelParameters() {
            return (0, eb.b)(this, nb, "f")
          }
          set refractionFresnelParameters(bb) {
            (0, eb.f)(this, nb, bb, "f")
          }
          get emissiveFresnelParameters() {
            return (0, eb.b)(this, yb, "f")
          }
          set emissiveFresnelParameters(bb) {
            (0, eb.f)(this, yb, bb, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, eb.b)(this, ob, "f")
          }
          set useReflectionFresnelFromSpecular(bb) {
            (0, eb.f)(this, ob, bb, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, eb.b)(this, Tb, "f")
          }
          set useGlossinessFromSpecularMapAlpha(bb) {
            (0, eb.f)(this, Tb, bb, "f")
          }
          get maxSimultaneousLights() {
            return (0, eb.b)(this, kb, "f")
          }
          set maxSimultaneousLights(bb) {
            (0, eb.f)(this, kb, bb, "f")
          }
          get invertNormalMapX() {
            return (0, eb.b)(this, bw, "f")
          }
          set invertNormalMapX(bb) {
            (0, eb.f)(this, bw, bb, "f")
          }
          get invertNormalMapY() {
            return (0, eb.b)(this, ww, "f")
          }
          set invertNormalMapY(bb) {
            (0, eb.f)(this, ww, bb, "f")
          }
          get twoSidedLighting() {
            return (0, eb.b)(this, Mw, "f")
          }
          set twoSidedLighting(bb) {
            (0, eb.f)(this, Mw, bb, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, eb.b)(this, ew, "f")
          }
          set applyDecalMapAfterDetailMap(bb) {
            (0, eb.f)(this, ew, bb, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(Mb, Hb) {
            super(Mb, Hb, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || bb.ForceGLSL), this._diffuseTexture = (0, eb.m)(this, RM, null), wb.set(this, ((0, eb.m)(this, DM), (0, eb.m)(this, cM, void 0))), this._ambientTexture = ((0, eb.m)(this, YM), (0, eb.m)(this, ZM, null)), Ib.set(this, ((0, eb.m)(this, fM), (0, eb.m)(this, AM, void 0))), this._opacityTexture = ((0, eb.m)(this, WM), (0, eb.m)(this, JM, null)), tb.set(this, ((0, eb.m)(this, SM), (0, eb.m)(this, NM, void 0))), this._reflectionTexture = ((0, eb.m)(this, vM), (0, eb.m)(this, QM, null)), jb.set(this, ((0, eb.m)(this, GM), (0, eb.m)(this, qM, void 0))), this._emissiveTexture = ((0, eb.m)(this, aM), (0, eb.m)(this, iM, null)), Kb.set(this, ((0, eb.m)(this, uM), (0, eb.m)(this, dM, void 0))), this._specularTexture = ((0, eb.m)(this, PM), (0, eb.m)(this, nM, null)), rb.set(this, ((0, eb.m)(this, yM), (0, eb.m)(this, oM, void 0))), this._bumpTexture = ((0, eb.m)(this, TM), (0, eb.m)(this, kM, null)), Rb.set(this, ((0, eb.m)(this, be), (0, eb.m)(this, we, void 0))), this._lightmapTexture = ((0, eb.m)(this, Me), (0, eb.m)(this, ee, null)), Db.set(this, ((0, eb.m)(this, He), (0, eb.m)(this, pe, void 0))), this._refractionTexture = ((0, eb.m)(this, Ve), (0, eb.m)(this, ge, null)), Yb.set(this, ((0, eb.m)(this, le), (0, eb.m)(this, Le, void 0))), this.ambientColor = ((0, eb.m)(this, Ie), (0, eb.m)(this, Oe, new gb.e(0, 0, 0))), this.diffuseColor = ((0, eb.m)(this, Ue), (0, eb.m)(this, te, new gb.e(1, 1, 1))), this.specularColor = ((0, eb.m)(this, Ce), (0, eb.m)(this, Ee, new gb.e(1, 1, 1))), this.emissiveColor = ((0, eb.m)(this, Fe), (0, eb.m)(this, Be, new gb.e(0, 0, 0))), this.specularPower = ((0, eb.m)(this, se), (0, eb.m)(this, me, 64)), this._useAlphaFromDiffuseTexture = ((0, eb.m)(this, he), (0, eb.m)(this, ze, !1)), Ab.set(this, ((0, eb.m)(this, Xe), (0, eb.m)(this, xe, void 0))), this._useEmissiveAsIllumination = ((0, eb.m)(this, je), (0, eb.m)(this, Ke, !1)), Wb.set(this, ((0, eb.m)(this, re), (0, eb.m)(this, Re, void 0))), this._linkEmissiveWithDiffuse = ((0, eb.m)(this, De), (0, eb.m)(this, ce, !1)), Jb.set(this, ((0, eb.m)(this, Ye), (0, eb.m)(this, Ze, void 0))), this._useSpecularOverAlpha = ((0, eb.m)(this, fe), (0, eb.m)(this, Ae, !1)), Sb.set(this, ((0, eb.m)(this, We), (0, eb.m)(this, Je, void 0))), this._useReflectionOverAlpha = ((0, eb.m)(this, Se), (0, eb.m)(this, Ne, !1)), Nb.set(this, ((0, eb.m)(this, ve), (0, eb.m)(this, Qe, void 0))), this._disableLighting = ((0, eb.m)(this, Ge), (0, eb.m)(this, qe, !1)), vb.set(this, ((0, eb.m)(this, ae), (0, eb.m)(this, ie, void 0))), this._useObjectSpaceNormalMap = ((0, eb.m)(this, ue), (0, eb.m)(this, de, !1)), Qb.set(this, ((0, eb.m)(this, Pe), (0, eb.m)(this, ne, void 0))), this._useParallax = ((0, eb.m)(this, ye), (0, eb.m)(this, oe, !1)), Gb.set(this, ((0, eb.m)(this, Te), (0, eb.m)(this, ke, void 0))), this._useParallaxOcclusion = ((0, eb.m)(this, bH), (0, eb.m)(this, wH, !1)), qb.set(this, ((0, eb.m)(this, MH), (0, eb.m)(this, eH, void 0))), this.parallaxScaleBias = ((0, eb.m)(this, HH), (0, eb.m)(this, pH, .05)), this._roughness = ((0, eb.m)(this, VH), (0, eb.m)(this, gH, 0)), ab.set(this, ((0, eb.m)(this, lH), (0, eb.m)(this, LH, void 0))), this.indexOfRefraction = ((0, eb.m)(this, IH), (0, eb.m)(this, OH, .98)), this.invertRefractionY = ((0, eb.m)(this, UH), (0, eb.m)(this, tH, !0)), this.alphaCutOff = ((0, eb.m)(this, CH), (0, eb.m)(this, EH, .4)), this._useLightmapAsShadowmap = ((0, eb.m)(this, FH), (0, eb.m)(this, BH, !1)), ib.set(this, ((0, eb.m)(this, sH), (0, eb.m)(this, mH, void 0))), this._diffuseFresnelParameters = ((0, eb.m)(this, hH), (0, eb.m)(this, zH, void 0)), ub.set(this, ((0, eb.m)(this, XH), (0, eb.m)(this, xH, void 0))), this._opacityFresnelParameters = ((0, eb.m)(this, jH), (0, eb.m)(this, KH, void 0)), db.set(this, ((0, eb.m)(this, rH), (0, eb.m)(this, RH, void 0))), this._reflectionFresnelParameters = ((0, eb.m)(this, DH), (0, eb.m)(this, cH, void 0)), Pb.set(this, ((0, eb.m)(this, YH), (0, eb.m)(this, ZH, void 0))), this._refractionFresnelParameters = ((0, eb.m)(this, fH), (0, eb.m)(this, AH, void 0)), nb.set(this, ((0, eb.m)(this, WH), (0, eb.m)(this, JH, void 0))), this._emissiveFresnelParameters = ((0, eb.m)(this, SH), (0, eb.m)(this, NH, void 0)), yb.set(this, ((0, eb.m)(this, vH), (0, eb.m)(this, QH, void 0))), this._useReflectionFresnelFromSpecular = ((0, eb.m)(this, GH), (0, eb.m)(this, qH, !1)), ob.set(this, ((0, eb.m)(this, aH), (0, eb.m)(this, iH, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, eb.m)(this, uH), (0, eb.m)(this, dH, !1)), Tb.set(this, ((0, eb.m)(this, PH), (0, eb.m)(this, nH, void 0))), this._maxSimultaneousLights = ((0, eb.m)(this, yH), (0, eb.m)(this, oH, 4)), kb.set(this, ((0, eb.m)(this, TH), (0, eb.m)(this, kH, void 0))), this._invertNormalMapX = ((0, eb.m)(this, bp), (0, eb.m)(this, wp, !1)), bw.set(this, ((0, eb.m)(this, Mp), (0, eb.m)(this, ep, void 0))), this._invertNormalMapY = ((0, eb.m)(this, Hp), (0, eb.m)(this, pp, !1)), ww.set(this, ((0, eb.m)(this, Vp), (0, eb.m)(this, gp, void 0))), this._twoSidedLighting = ((0, eb.m)(this, lp), (0, eb.m)(this, Lp, !1)), Mw.set(this, ((0, eb.m)(this, Ip), (0, eb.m)(this, Op, void 0))), this._applyDecalMapAfterDetailMap = ((0, eb.m)(this, Up), (0, eb.m)(this, tp, !1)), ew.set(this, ((0, eb.m)(this, Cp), (0, eb.m)(this, Ep, void 0))), this._vertexPullingMetadata = ((0, eb.m)(this, Fp), null), this._renderTargets = new pb.h(16), this._globalAmbientColor = new gb.e(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new Bb.d(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new Lb.c, this.getRenderTargetTextures = () => (this._renderTargets.reset(), bb.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), bb.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(bb.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(bb.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === Ub.b.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== Ub.b.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(wb, Mb) {
            let eb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Hb = Mb._drawWrapper;
            if (Hb.effect && this.isFrozen && Hb._wasPreviouslyReady && Hb._wasPreviouslyUsingInstances === eb) return !0;
            Mb.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Mb.materialDefines = new Zb(this._eventInfo.defineNames));
            const pb = this.RJ(),
              Vb = Mb.materialDefines;
            if (this._isReadyForSubMesh(Mb)) return !0;
            const gb = pb.DC();
            if (Vb._needNormals = (0, hb.Z)(pb, wb, Vb, !0, this._maxSimultaneousLights, this._disableLighting), !(0, hb.c)(pb, wb, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, hb.eb)(pb, Vb);
            const Ib = this.needAlphaBlendingForMesh(wb) && this.RJ().useOrderIndependentTransparency;
            if ((0, hb.jb)(pb, Vb, this.canRenderToMRT && !Ib), (0, hb.ib)(pb, Vb, Ib), xb.b.PrepareDefines(gb.currentRenderPassId, wb, Vb), Vb._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Vb._needUVs = !1;
              for (let bb = 1; bb <= 6; ++bb) Vb["MAINUV" + bb] = !1;
              if (pb.texturesEnabled) {
                if (Vb.DIFFUSEDIRECTUV = 0, Vb.BUMPDIRECTUV = 0, Vb.AMBIENTDIRECTUV = 0, Vb.OPACITYDIRECTUV = 0, Vb.EMISSIVEDIRECTUV = 0, Vb.SPECULARDIRECTUV = 0, Vb.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && bb.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, hb.$)(this._diffuseTexture, Vb, "DIFFUSE")
                } else Vb.DIFFUSE = !1;
                if (this._ambientTexture && bb.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, hb.$)(this._ambientTexture, Vb, "AMBIENT")
                } else Vb.AMBIENT = !1;
                if (this._opacityTexture && bb.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, hb.$)(this._opacityTexture, Vb, "OPACITY"), Vb.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else Vb.OPACITY = !1;
                if (this._reflectionTexture && bb.ReflectionTextureEnabled ? (Vb.ROUGHNESS = this._roughness > 0, Vb.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (Vb.ROUGHNESS = !1, Vb.REFLECTIONOVERALPHA = !1), !(0, hb.V)(pb, this._reflectionTexture, Vb)) return !1;
                if (this._emissiveTexture && bb.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, hb.$)(this._emissiveTexture, Vb, "EMISSIVE")
                } else Vb.EMISSIVE = !1;
                if (this._lightmapTexture && bb.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, hb.$)(this._lightmapTexture, Vb, "LIGHTMAP"), Vb.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Vb.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else Vb.LIGHTMAP = !1;
                if (this._specularTexture && bb.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, hb.$)(this._specularTexture, Vb, "SPECULAR"), Vb.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else Vb.SPECULAR = !1;
                if (pb.DC().getCaps().standardDerivatives && this._bumpTexture && bb.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, hb.$)(this._bumpTexture, Vb, "BUMP"), Vb.PARALLAX = this._useParallax, Vb.PARALLAX_RHS = pb.useRightHandedSystem, Vb.PARALLAXOCCLUSION = this._useParallaxOcclusion, Vb.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else Vb.BUMP = !1, Vb.PARALLAX = !1, Vb.PARALLAX_RHS = !1, Vb.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && bb.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  Vb._needUVs = !0, Vb.REFRACTION = !0, Vb.REFRACTIONMAP_3D = this._refractionTexture.isCube, Vb.RGBDREFRACTION = this._refractionTexture.isRGBD, Vb.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else Vb.REFRACTION = !1;
                Vb.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else Vb.DIFFUSE = !1, Vb.AMBIENT = !1, Vb.OPACITY = !1, Vb.REFLECTION = !1, Vb.EMISSIVE = !1, Vb.LIGHTMAP = !1, Vb.BUMP = !1, Vb.REFRACTION = !1;
              Vb.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), Vb.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, Vb.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, Vb.SPECULAROVERALPHA = this._useSpecularOverAlpha, Vb.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Vb.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, Vb.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(wb), Vb.TEXTURE_REPETITION_MODE = gb.version > 1 || gb.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Vb, this._eventInfo.subMesh = Mb, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Vb._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(Vb), Vb.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, Vb.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (Vb._areFresnelDirty && (bb.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (Vb.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, Vb.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, Vb.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, Vb.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, Vb.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, Vb.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, Vb._needNormals = !0, Vb.FRESNEL = !0) : Vb.FRESNEL = !1), Vb.AREALIGHTUSED || Vb.CLUSTLIGHT_BATCH)
              for (let bb = 0; bb < wb.lightSources.length; bb++)
                if (!wb.lightSources[bb]._isReady()) return !1;
            (0, hb.bb)(wb, pb, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(wb), Vb, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Mb.getRenderingMesh(), this._isVertexOutputInvariant), (0, hb.U)(pb, gb, this, Vb, eb, null, Mb.getRenderingMesh().hasThinInstances), this._eventInfo.defines = Vb, this._eventInfo.mesh = wb, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, hb.Q)(wb, Vb, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let Ub = !1;
            if (Vb.isDirty) {
              const eb = Vb._areLightsDisposed;
              Vb.markAsProcessed();
              const Hb = new Fb.d;
              Vb.REFLECTION && Hb.addFallback(0, "REFLECTION"), Vb.SPECULAR && Hb.addFallback(0, "SPECULAR"), Vb.BUMP && Hb.addFallback(0, "BUMP"), Vb.PARALLAX && Hb.addFallback(1, "PARALLAX"), Vb.PARALLAX_RHS && Hb.addFallback(1, "PARALLAX_RHS"), Vb.PARALLAXOCCLUSION && Hb.addFallback(0, "PARALLAXOCCLUSION"), Vb.SPECULAROVERALPHA && Hb.addFallback(0, "SPECULAROVERALPHA"), Vb.FOG && Hb.addFallback(1, "FOG"), Vb.POINTSIZE && Hb.addFallback(0, "POINTSIZE"), Vb.LOGARITHMICDEPTH && Hb.addFallback(0, "LOGARITHMICDEPTH"), (0, hb.G)(Vb, Hb, this._maxSimultaneousLights), Vb.SPECULARTERM && Hb.addFallback(0, "SPECULARTERM"), Vb.DIFFUSEFRESNEL && Hb.addFallback(1, "DIFFUSEFRESNEL"), Vb.OPACITYFRESNEL && Hb.addFallback(2, "OPACITYFRESNEL"), Vb.REFLECTIONFRESNEL && Hb.addFallback(3, "REFLECTIONFRESNEL"), Vb.EMISSIVEFRESNEL && Hb.addFallback(4, "EMISSIVEFRESNEL"), Vb.FRESNEL && Hb.addFallback(4, "FRESNEL"), Vb.MULTIVIEW && Hb.addFallback(0, "MULTIVIEW");
              const Ib = [lb.i.PositionKind];
              Vb.NORMAL && Ib.push(lb.i.NormalKind), Vb.TANGENT && Ib.push(lb.i.TangentKind);
              for (let bb = 1; bb <= 6; ++bb) Vb["UV" + bb] && Ib.push(`uv${1===bb?"":bb}`);
              Vb.VERTEXCOLOR && Ib.push(lb.i.ColorKind), (0, hb.I)(Ib, wb, Vb, Hb), (0, hb.J)(Ib, Vb), (0, hb.N)(Ib, wb, Vb), (0, hb.H)(Ib, wb, Vb);
              let tb = "default";
              const Cb = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                Eb = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, hb.nb)(Cb, Eb, !1);
              const Bb = ["Material", "Scene", "Mesh"],
                zb = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: Vb.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = Hb, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = Vb, this._eventInfo.uniforms = Cb, this._eventInfo.attributes = Ib, this._eventInfo.samplers = Eb, this._eventInfo.uniformBuffersNames = Bb, this._eventInfo.customCode = void 0, this._eventInfo.mesh = wb, this._eventInfo.indexParameters = zb, this._callbackPluginEventGeneric(128, this._eventInfo), xb.b.AddUniformsAndSamplers(Cb, Eb), Lb.c.AddUniforms(Cb), Lb.c.AddSamplers(Eb), Ob.e && (Ob.e.PrepareUniforms(Cb, Vb), Ob.e.PrepareSamplers(Eb, Vb)), (0, hb.ob)({
                  uniformsNames: Cb,
                  uniformBuffersNames: Bb,
                  samplers: Eb,
                  defines: Vb,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, sb.d)(Cb), this._useVertexPulling) {
                const bb = Mb.getRenderingMesh(),
                  wb = bb?.geometry;
                wb && (this._vertexPullingMetadata = (0, mb.e)(wb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((bb, wb) => {
                  Cb.push(`vp_${wb}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const Xb = {};
              this.customShaderNameResolve && (tb = this.customShaderNameResolve(tb, Cb, Bb, Eb, Vb, Ib, Xb));
              const jb = Vb.toString(),
                Kb = Mb.effect,
                rb = pb.DC().createEffect(tb, {
                  attributes: Ib,
                  uniformsNames: Cb,
                  uniformBuffersNames: Bb,
                  samplers: Eb,
                  defines: jb,
                  fallbacks: Hb,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: zb,
                  processFinalCode: Xb.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: Vb.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: bb._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, gb);
              if (this._eventInfo.customCode = void 0, rb)
                if (this._onEffectCreatedObservable && (cb.effect = rb, cb.subMesh = Mb, this._onEffectCreatedObservable.notifyObservers(cb)), this.allowShaderHotSwapping && Kb && !rb.isReady()) {
                  if (Vb.markAsUnprocessed(), Ub = this.isFrozen, eb) return Vb._areLightsDisposed = !0, !1
                } else pb.resetCachedMaterial(), Mb.setEffect(rb, Vb, this._materialContext)
            }
            return !(!Mb.effect || !Mb.effect.isReady()) && (Vb._renderId = pb.getRenderId(), Hb._wasPreviouslyReady = !Ub, Hb._wasPreviouslyUsingInstances = eb, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const bb = this._uniformBuffer;
            bb.addUniform("diffuseLeftColor", 4), bb.addUniform("diffuseRightColor", 4), bb.addUniform("opacityParts", 4), bb.addUniform("reflectionLeftColor", 4), bb.addUniform("reflectionRightColor", 4), bb.addUniform("refractionLeftColor", 4), bb.addUniform("refractionRightColor", 4), bb.addUniform("emissiveLeftColor", 4), bb.addUniform("emissiveRightColor", 4), bb.addUniform("vDiffuseInfos", 2), bb.addUniform("vAmbientInfos", 2), bb.addUniform("vOpacityInfos", 2), bb.addUniform("vEmissiveInfos", 2), bb.addUniform("vLightmapInfos", 2), bb.addUniform("vSpecularInfos", 2), bb.addUniform("vBumpInfos", 3), bb.addUniform("diffuseMatrix", 16), bb.addUniform("ambientMatrix", 16), bb.addUniform("opacityMatrix", 16), bb.addUniform("emissiveMatrix", 16), bb.addUniform("lightmapMatrix", 16), bb.addUniform("specularMatrix", 16), bb.addUniform("bumpMatrix", 16), bb.addUniform("vTangentSpaceParams", 2), bb.addUniform("pointSize", 1), bb.addUniform("alphaCutOff", 1), bb.addUniform("refractionMatrix", 16), bb.addUniform("vRefractionInfos", 4), bb.addUniform("vRefractionPosition", 3), bb.addUniform("vRefractionSize", 3), bb.addUniform("vSpecularColor", 4), bb.addUniform("vEmissiveColor", 3), bb.addUniform("vDiffuseColor", 4), bb.addUniform("vAmbientColor", 3), bb.addUniform("cameraInfo", 4), bb.addUniform("vTextureRepetitionHexTilingParams", 4), (0, hb.mb)(bb, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(wb, Mb, eb) {
            const Hb = this.RJ(),
              pb = eb.materialDefines;
            if (!pb) return;
            const lb = eb.effect;
            if (!lb) return;
            this._activeEffect = lb, Mb.getMeshUniformBuffer().bindToEffect(lb, "Mesh"), Mb.transferToEffect(wb), this._uniformBuffer.bindToEffect(lb, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Hb, Mb, wb, this.isFrozen), xb.b.Bind(Hb.DC().currentRenderPassId, this._activeEffect, Mb, wb, this);
            const Lb = Hb.activeCamera;
            Lb ? this._uniformBuffer.updateFloat4("cameraInfo", Lb.minZ, Lb.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Ib = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Ib[0], Ib[1], Ib[2], Ib[3]), this._eventInfo.subMesh = eb, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), pb.OBJECTSPACE_NORMALMAP && (wb.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Ob = this._mustRebind(Hb, lb, eb, Mb.visibility),
              Ub = Hb.DC()._features.needToAlwaysBindUniformBuffers;
            (0, hb.g)(Mb, lb), this._vertexPullingMetadata && (0, mb.c)(lb, this._vertexPullingMetadata);
            const tb = this._uniformBuffer;
            if (Ob) {
              if (this.bindViewProjection(lb), !tb.useUbo || !this.isFrozen || !tb.isSync || eb._drawWrapper._forceRebindOnNextCall) {
                if (bb.FresnelEnabled && pb.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (tb.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), tb.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const bb = gb.k.Color3[0];
                    bb.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), tb.updateColor4("opacityParts", bb, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (tb.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), tb.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (tb.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), tb.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (tb.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), tb.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (pb.ALPHATEST && tb.updateFloat("alphaCutOff", this.alphaCutOff), Hb.texturesEnabled && (this._diffuseTexture && bb.DiffuseTextureEnabled && (tb.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, hb.C)(this._diffuseTexture, tb, "diffuse")), this._ambientTexture && bb.AmbientTextureEnabled && (tb.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, hb.C)(this._ambientTexture, tb, "ambient")), this._opacityTexture && bb.OpacityTextureEnabled && (tb.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, hb.C)(this._opacityTexture, tb, "opacity")), (0, hb.n)(Hb, pb, tb, gb.e.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && bb.ReflectionTextureEnabled || tb.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && bb.EmissiveTextureEnabled && (tb.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, hb.C)(this._emissiveTexture, tb, "emissive")), this._lightmapTexture && bb.LightmapTextureEnabled && (tb.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, hb.C)(this._lightmapTexture, tb, "lightmap")), this._specularTexture && bb.SpecularTextureEnabled && (tb.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, hb.C)(this._specularTexture, tb, "specular")), this._bumpTexture && Hb.DC().getCaps().standardDerivatives && bb.BumpTextureEnabled && (tb.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, hb.C)(this._bumpTexture, tb, "bump"), Hb._mirroredCameraPosition ? tb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : tb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && bb.RefractionTextureEnabled)) {
                  let bb = 1;
                  if (this._refractionTexture.isCube || (tb.kbb("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (bb = this._refractionTexture.depth)), tb.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, bb, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const bb = this._refractionTexture;
                    tb.updateVector3("vRefractionPosition", bb.boundingBoxPosition), tb.updateVector3("vRefractionSize", bb.boundingBoxSize)
                  }
                }
                this.pointsCloud && tb.updateFloat("pointSize", this.pointSize), tb.updateColor4("vSpecularColor", this.specularColor, this.specularPower), tb.updateColor3("vEmissiveColor", bb.EmissiveTextureEnabled ? this.emissiveColor : gb.e.BlackReadOnly), tb.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), Hb.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), tb.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              Hb.texturesEnabled && (this._diffuseTexture && bb.DiffuseTextureEnabled && lb.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && bb.AmbientTextureEnabled && lb.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && bb.OpacityTextureEnabled && lb.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && bb.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? lb.setTexture("reflectionCubeSampler", this._reflectionTexture) : lb.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && bb.EmissiveTextureEnabled && lb.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && bb.LightmapTextureEnabled && lb.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && bb.SpecularTextureEnabled && lb.setTexture("specularSampler", this._specularTexture), this._bumpTexture && Hb.DC().getCaps().standardDerivatives && bb.BumpTextureEnabled && lb.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && bb.RefractionTextureEnabled && (this._refractionTexture.isCube ? lb.setTexture("refractionCubeSampler", this._refractionTexture) : lb.setTexture("refraction2DSampler", this._refractionTexture))), this.RJ().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Mb) && this.RJ().depthPeelingRenderer.bind(lb), this._eventInfo.subMesh = eb, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, sb.f)(lb, this, Hb), this.bindEyePosition(lb)
            } else Ub && (this._needToBindSceneUbo = !0);
            !Ob && this.isFrozen && !Ub || !Hb.lightsEnabled || this._disableLighting || (0, hb.s)(Hb, Mb, lb, pb, this._maxSimultaneousLights), !Ob && this.isFrozen || ((Hb.fogEnabled && Mb.applyFog && Hb.fogMode !== Vb.g.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || Mb.receiveShadows || pb.PREPASS || pb.CLUSTLIGHT_BATCH) && this.bindView(lb), (0, hb.j)(Hb, Mb, lb), pb.NUM_MORPH_INFLUENCERS && (0, hb.x)(Mb, lb), pb.BAKED_VERTEX_ANIMATION_TEXTURE && Mb.bakedVertexAnimationManager?.bind(lb, pb.INSTANCES), this.useLogarithmicDepth && (0, hb.v)(pb, lb, Hb), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(Mb, this._activeEffect, eb), tb.update()
          }
          _canBindRunFollower(wb, Mb, eb, Hb, pb) {
            const Vb = wb.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === bb.prototype.isReadyForSubMesh && this.bindForSubMesh === bb.prototype.bindForSubMesh && this._mustRebind === Cb.d.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !Mb._features.needToAlwaysBindUniformBuffers && !(Vb && Vb.enabled && Vb.currentRTisSceneRT) && !xb.b._Configurations[Mb.currentRenderPassId] && !Hb.materialDefines?.OBJECTSPACE_NORMALMAP && !eb.skeleton && !pb._bonesComputationForcedToCPU
          }
          _bindRunFollower(bb, wb, Mb, eb) {
            this._activeEffect = eb, wb.getMeshUniformBuffer().bindToEffect(eb, "Mesh"), wb.transferToEffect(bb);
            const Hb = this._uniformBuffer;
            Hb.bindToEffect(eb, "Material");
            const pb = this._scene.activeCamera;
            pb ? Hb.updateFloat4("cameraInfo", pb.minZ, pb.maxZ, 0, 0) : Hb.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Vb = this.textureRepetitionHexTilingParams;
            Hb.updateFloat4("vTextureRepetitionHexTilingParams", Vb[0], Vb[1], Vb[2], Vb[3]), this._afterBind(wb, eb, Mb), Hb.update()
          }
          getAnimatables() {
            const bb = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && bb.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && bb.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && bb.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && bb.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && bb.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && bb.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && bb.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && bb.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && bb.push(this._refractionTexture), bb
          }
          getActiveTextures() {
            const bb = super.getActiveTextures();
            return this._diffuseTexture && bb.push(this._diffuseTexture), this._ambientTexture && bb.push(this._ambientTexture), this._opacityTexture && bb.push(this._opacityTexture), this._reflectionTexture && bb.push(this._reflectionTexture), this._emissiveTexture && bb.push(this._emissiveTexture), this._specularTexture && bb.push(this._specularTexture), this._bumpTexture && bb.push(this._bumpTexture), this._lightmapTexture && bb.push(this._lightmapTexture), this._refractionTexture && bb.push(this._refractionTexture), bb
          }
          hasTexture(bb) {
            return !!super.hasTexture(bb) || (this._diffuseTexture === bb || (this._ambientTexture === bb || (this._opacityTexture === bb || (this._reflectionTexture === bb || (this._emissiveTexture === bb || (this._specularTexture === bb || (this._bumpTexture === bb || (this._lightmapTexture === bb || this._refractionTexture === bb))))))))
          }
          dispose(bb, wb) {
            wb && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(bb, wb)
          }
          clone(wb) {
            let Mb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Hb = zb.d.Clone((() => new bb(wb, this.RJ())), this, {
              cloneTexturesOnlyOnce: Mb
            });
            return Hb.name = wb, Hb.id = wb, this.stencil.copyTo(Hb.stencil), this._clonePlugins(Hb, eb), Hb
          }
          static Parse(wb, Mb, eb) {
            const Hb = zb.d.Parse((() => new bb(wb.name, Mb)), wb, Mb, eb);
            return wb.stencil && Hb.stencil.parse(wb.stencil, Mb, eb), Ub.b._ParsePlugins(wb, Hb, Mb, eb), Hb
          }
          static get DiffuseTextureEnabled() {
            return Eb.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(bb) {
            Eb.e.DiffuseTextureEnabled = bb
          }
          static get DetailTextureEnabled() {
            return Eb.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(bb) {
            Eb.e.DetailTextureEnabled = bb
          }
          static get AmbientTextureEnabled() {
            return Eb.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(bb) {
            Eb.e.AmbientTextureEnabled = bb
          }
          static get OpacityTextureEnabled() {
            return Eb.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(bb) {
            Eb.e.OpacityTextureEnabled = bb
          }
          static get ReflectionTextureEnabled() {
            return Eb.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(bb) {
            Eb.e.ReflectionTextureEnabled = bb
          }
          static get EmissiveTextureEnabled() {
            return Eb.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(bb) {
            Eb.e.EmissiveTextureEnabled = bb
          }
          static get SpecularTextureEnabled() {
            return Eb.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(bb) {
            Eb.e.SpecularTextureEnabled = bb
          }
          static get BumpTextureEnabled() {
            return Eb.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(bb) {
            Eb.e.BumpTextureEnabled = bb
          }
          static get LightmapTextureEnabled() {
            return Eb.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(bb) {
            Eb.e.LightmapTextureEnabled = bb
          }
          static get RefractionTextureEnabled() {
            return Eb.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(bb) {
            Eb.e.RefractionTextureEnabled = bb
          }
          static get ColorGradingTextureEnabled() {
            return Eb.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(bb) {
            Eb.e.ColorGradingTextureEnabled = bb
          }
          static get FresnelEnabled() {
            return Eb.e.FresnelEnabled
          }
          static set FresnelEnabled(bb) {
            Eb.e.FresnelEnabled = bb
          }
        }, wb = new WeakMap, Ib = new WeakMap, tb = new WeakMap, jb = new WeakMap, Kb = new WeakMap, rb = new WeakMap, Rb = new WeakMap, Db = new WeakMap, Yb = new WeakMap, Ab = new WeakMap, Wb = new WeakMap, Jb = new WeakMap, Sb = new WeakMap, Nb = new WeakMap, vb = new WeakMap, Qb = new WeakMap, Gb = new WeakMap, qb = new WeakMap, ab = new WeakMap, ib = new WeakMap, ub = new WeakMap, db = new WeakMap, Pb = new WeakMap, nb = new WeakMap, yb = new WeakMap, ob = new WeakMap, Tb = new WeakMap, kb = new WeakMap, bw = new WeakMap, ww = new WeakMap, Mw = new WeakMap, ew = new WeakMap, (() => {
          const wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(rM[Symbol.metadata] ?? null) : void 0;
          Hw = [(0, Hb.x)("diffuseTexture")], pw = [(0, Hb.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], Vw = [(0, Hb.x)("ambientTexture")], gw = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], lw = [(0, Hb.x)("opacityTexture")], Lw = [(0, Hb.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], Iw = [(0, Hb.x)("reflectionTexture")], Ow = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], Uw = [(0, Hb.x)("emissiveTexture")], tw = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], Cw = [(0, Hb.x)("specularTexture")], Ew = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], Fw = [(0, Hb.x)("bumpTexture")], Bw = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], sw = [(0, Hb.x)("lightmapTexture")], mw = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], hw = [(0, Hb.x)("refractionTexture")], zw = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], Xw = [(0, Hb.i)("ambient")], xw = [(0, Hb.i)("diffuse")], jw = [(0, Hb.i)("specular")], Kw = [(0, Hb.i)("emissive")], rw = [(0, Hb.E)()], Rw = [(0, Hb.E)("useAlphaFromDiffuseTexture")], Dw = [() => ({
            init(bb) {
              return void 0 === bb && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = bb), bb
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(bb) {
              this._useAlphaFromDiffuseTexture = bb
            }
          })], Yw = [(0, Hb.E)("useEmissiveAsIllumination")], Zw = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], fw = [(0, Hb.E)("linkEmissiveWithDiffuse")], Aw = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], Ww = [(0, Hb.E)("useSpecularOverAlpha")], Jw = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], Sw = [(0, Hb.E)("useReflectionOverAlpha")], Nw = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], vw = [(0, Hb.E)("disableLighting")], Qw = [(0, Hb.d)("_markAllSubMeshesAsLightsDirty")], Gw = [(0, Hb.E)("useObjectSpaceNormalMap")], qw = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], aw = [(0, Hb.E)("useParallax")], iw = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], uw = [(0, Hb.E)("useParallaxOcclusion")], dw = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], Pw = [(0, Hb.E)()], nw = [(0, Hb.E)("roughness")], yw = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], ow = [(0, Hb.E)()], Tw = [(0, Hb.E)()], kw = [(0, Hb.E)()], bM = [(0, Hb.E)("useLightmapAsShadowmap")], wM = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], MM = [(0, Hb.m)("diffuseFresnelParameters")], eM = [(0, Hb.d)("_markAllSubMeshesAsFresnelDirty")], HM = [(0, Hb.m)("opacityFresnelParameters")], pM = [(0, Hb.d)("_markAllSubMeshesAsFresnelAndMiscDirty")], VM = [(0, Hb.m)("reflectionFresnelParameters")], gM = [(0, Hb.d)("_markAllSubMeshesAsFresnelDirty")], lM = [(0, Hb.m)("refractionFresnelParameters")], LM = [(0, Hb.d)("_markAllSubMeshesAsFresnelDirty")], IM = [(0, Hb.m)("emissiveFresnelParameters")], OM = [(0, Hb.d)("_markAllSubMeshesAsFresnelDirty")], UM = [(0, Hb.E)("useReflectionFresnelFromSpecular")], tM = [(0, Hb.d)("_markAllSubMeshesAsFresnelDirty")], CM = [(0, Hb.E)("useGlossinessFromSpecularMapAlpha")], EM = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], FM = [(0, Hb.E)("maxSimultaneousLights")], BM = [(0, Hb.d)("_markAllSubMeshesAsLightsDirty")], sM = [(0, Hb.E)("invertNormalMapX")], mM = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], hM = [(0, Hb.E)("invertNormalMapY")], zM = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], XM = [(0, Hb.E)("twoSidedLighting")], xM = [(0, Hb.d)("_markAllSubMeshesAsTexturesDirty")], jM = [(0, Hb.E)("applyDecalMapAfterDetailMap")], KM = [(0, Hb.d)("_markAllSubMeshesAsMiscDirty")], (0, eb.i)(bb, null, pw, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "diffuseTexture" in bb,
              get: bb => bb.diffuseTexture,
              set: (bb, wb) => {
                bb.diffuseTexture = wb
              }
            },
            metadata: wb
          }, cM, YM), (0, eb.i)(bb, null, gw, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "ambientTexture" in bb,
              get: bb => bb.ambientTexture,
              set: (bb, wb) => {
                bb.ambientTexture = wb
              }
            },
            metadata: wb
          }, AM, WM), (0, eb.i)(bb, null, Lw, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "opacityTexture" in bb,
              get: bb => bb.opacityTexture,
              set: (bb, wb) => {
                bb.opacityTexture = wb
              }
            },
            metadata: wb
          }, NM, vM), (0, eb.i)(bb, null, Ow, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "reflectionTexture" in bb,
              get: bb => bb.reflectionTexture,
              set: (bb, wb) => {
                bb.reflectionTexture = wb
              }
            },
            metadata: wb
          }, qM, aM), (0, eb.i)(bb, null, tw, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissiveTexture" in bb,
              get: bb => bb.emissiveTexture,
              set: (bb, wb) => {
                bb.emissiveTexture = wb
              }
            },
            metadata: wb
          }, dM, PM), (0, eb.i)(bb, null, Ew, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularTexture" in bb,
              get: bb => bb.specularTexture,
              set: (bb, wb) => {
                bb.specularTexture = wb
              }
            },
            metadata: wb
          }, oM, TM), (0, eb.i)(bb, null, Bw, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "bumpTexture" in bb,
              get: bb => bb.bumpTexture,
              set: (bb, wb) => {
                bb.bumpTexture = wb
              }
            },
            metadata: wb
          }, we, Me), (0, eb.i)(bb, null, mw, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "lightmapTexture" in bb,
              get: bb => bb.lightmapTexture,
              set: (bb, wb) => {
                bb.lightmapTexture = wb
              }
            },
            metadata: wb
          }, pe, Ve), (0, eb.i)(bb, null, zw, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "refractionTexture" in bb,
              get: bb => bb.refractionTexture,
              set: (bb, wb) => {
                bb.refractionTexture = wb
              }
            },
            metadata: wb
          }, Le, Ie), (0, eb.i)(bb, null, Dw, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "useAlphaFromDiffuseTexture" in bb,
              get: bb => bb.useAlphaFromDiffuseTexture,
              set: (bb, wb) => {
                bb.useAlphaFromDiffuseTexture = wb
              }
            },
            metadata: wb
          }, xe, je), (0, eb.i)(bb, null, Zw, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: bb => "useEmissiveAsIllumination" in bb,
              get: bb => bb.useEmissiveAsIllumination,
              set: (bb, wb) => {
                bb.useEmissiveAsIllumination = wb
              }
            },
            metadata: wb
          }, Re, De), (0, eb.i)(bb, null, Aw, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: bb => "linkEmissiveWithDiffuse" in bb,
              get: bb => bb.linkEmissiveWithDiffuse,
              set: (bb, wb) => {
                bb.linkEmissiveWithDiffuse = wb
              }
            },
            metadata: wb
          }, Ze, fe), (0, eb.i)(bb, null, Jw, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "useSpecularOverAlpha" in bb,
              get: bb => bb.useSpecularOverAlpha,
              set: (bb, wb) => {
                bb.useSpecularOverAlpha = wb
              }
            },
            metadata: wb
          }, Je, Se), (0, eb.i)(bb, null, Nw, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "useReflectionOverAlpha" in bb,
              get: bb => bb.useReflectionOverAlpha,
              set: (bb, wb) => {
                bb.useReflectionOverAlpha = wb
              }
            },
            metadata: wb
          }, Qe, Ge), (0, eb.i)(bb, null, Qw, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "disableLighting" in bb,
              get: bb => bb.disableLighting,
              set: (bb, wb) => {
                bb.disableLighting = wb
              }
            },
            metadata: wb
          }, ie, ue), (0, eb.i)(bb, null, qw, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "useObjectSpaceNormalMap" in bb,
              get: bb => bb.useObjectSpaceNormalMap,
              set: (bb, wb) => {
                bb.useObjectSpaceNormalMap = wb
              }
            },
            metadata: wb
          }, ne, ye), (0, eb.i)(bb, null, iw, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: bb => "useParallax" in bb,
              get: bb => bb.useParallax,
              set: (bb, wb) => {
                bb.useParallax = wb
              }
            },
            metadata: wb
          }, ke, bH), (0, eb.i)(bb, null, dw, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "useParallaxOcclusion" in bb,
              get: bb => bb.useParallaxOcclusion,
              set: (bb, wb) => {
                bb.useParallaxOcclusion = wb
              }
            },
            metadata: wb
          }, eH, HH), (0, eb.i)(bb, null, yw, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "roughness" in bb,
              get: bb => bb.roughness,
              set: (bb, wb) => {
                bb.roughness = wb
              }
            },
            metadata: wb
          }, LH, IH), (0, eb.i)(bb, null, wM, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: bb => "useLightmapAsShadowmap" in bb,
              get: bb => bb.useLightmapAsShadowmap,
              set: (bb, wb) => {
                bb.useLightmapAsShadowmap = wb
              }
            },
            metadata: wb
          }, mH, hH), (0, eb.i)(bb, null, eM, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "diffuseFresnelParameters" in bb,
              get: bb => bb.diffuseFresnelParameters,
              set: (bb, wb) => {
                bb.diffuseFresnelParameters = wb
              }
            },
            metadata: wb
          }, xH, jH), (0, eb.i)(bb, null, pM, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "opacityFresnelParameters" in bb,
              get: bb => bb.opacityFresnelParameters,
              set: (bb, wb) => {
                bb.opacityFresnelParameters = wb
              }
            },
            metadata: wb
          }, RH, DH), (0, eb.i)(bb, null, gM, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "reflectionFresnelParameters" in bb,
              get: bb => bb.reflectionFresnelParameters,
              set: (bb, wb) => {
                bb.reflectionFresnelParameters = wb
              }
            },
            metadata: wb
          }, ZH, fH), (0, eb.i)(bb, null, LM, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "refractionFresnelParameters" in bb,
              get: bb => bb.refractionFresnelParameters,
              set: (bb, wb) => {
                bb.refractionFresnelParameters = wb
              }
            },
            metadata: wb
          }, JH, SH), (0, eb.i)(bb, null, OM, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissiveFresnelParameters" in bb,
              get: bb => bb.emissiveFresnelParameters,
              set: (bb, wb) => {
                bb.emissiveFresnelParameters = wb
              }
            },
            metadata: wb
          }, QH, GH), (0, eb.i)(bb, null, tM, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: bb => "useReflectionFresnelFromSpecular" in bb,
              get: bb => bb.useReflectionFresnelFromSpecular,
              set: (bb, wb) => {
                bb.useReflectionFresnelFromSpecular = wb
              }
            },
            metadata: wb
          }, iH, uH), (0, eb.i)(bb, null, EM, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "useGlossinessFromSpecularMapAlpha" in bb,
              get: bb => bb.useGlossinessFromSpecularMapAlpha,
              set: (bb, wb) => {
                bb.useGlossinessFromSpecularMapAlpha = wb
              }
            },
            metadata: wb
          }, nH, yH), (0, eb.i)(bb, null, BM, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: bb => "maxSimultaneousLights" in bb,
              get: bb => bb.maxSimultaneousLights,
              set: (bb, wb) => {
                bb.maxSimultaneousLights = wb
              }
            },
            metadata: wb
          }, kH, bp), (0, eb.i)(bb, null, mM, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertNormalMapX" in bb,
              get: bb => bb.invertNormalMapX,
              set: (bb, wb) => {
                bb.invertNormalMapX = wb
              }
            },
            metadata: wb
          }, ep, Hp), (0, eb.i)(bb, null, zM, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertNormalMapY" in bb,
              get: bb => bb.invertNormalMapY,
              set: (bb, wb) => {
                bb.invertNormalMapY = wb
              }
            },
            metadata: wb
          }, gp, lp), (0, eb.i)(bb, null, xM, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "twoSidedLighting" in bb,
              get: bb => bb.twoSidedLighting,
              set: (bb, wb) => {
                bb.twoSidedLighting = wb
              }
            },
            metadata: wb
          }, Op, Up), (0, eb.i)(bb, null, KM, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "applyDecalMapAfterDetailMap" in bb,
              get: bb => bb.applyDecalMapAfterDetailMap,
              set: (bb, wb) => {
                bb.applyDecalMapAfterDetailMap = wb
              }
            },
            metadata: wb
          }, Ep, Fp), (0, eb.i)(null, null, Hw, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_diffuseTexture" in bb,
              get: bb => bb._diffuseTexture,
              set: (bb, wb) => {
                bb._diffuseTexture = wb
              }
            },
            metadata: wb
          }, RM, DM), (0, eb.i)(null, null, Vw, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_ambientTexture" in bb,
              get: bb => bb._ambientTexture,
              set: (bb, wb) => {
                bb._ambientTexture = wb
              }
            },
            metadata: wb
          }, ZM, fM), (0, eb.i)(null, null, lw, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_opacityTexture" in bb,
              get: bb => bb._opacityTexture,
              set: (bb, wb) => {
                bb._opacityTexture = wb
              }
            },
            metadata: wb
          }, JM, SM), (0, eb.i)(null, null, Iw, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_reflectionTexture" in bb,
              get: bb => bb._reflectionTexture,
              set: (bb, wb) => {
                bb._reflectionTexture = wb
              }
            },
            metadata: wb
          }, QM, GM), (0, eb.i)(null, null, Uw, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_emissiveTexture" in bb,
              get: bb => bb._emissiveTexture,
              set: (bb, wb) => {
                bb._emissiveTexture = wb
              }
            },
            metadata: wb
          }, iM, uM), (0, eb.i)(null, null, Cw, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_specularTexture" in bb,
              get: bb => bb._specularTexture,
              set: (bb, wb) => {
                bb._specularTexture = wb
              }
            },
            metadata: wb
          }, nM, yM), (0, eb.i)(null, null, Fw, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_bumpTexture" in bb,
              get: bb => bb._bumpTexture,
              set: (bb, wb) => {
                bb._bumpTexture = wb
              }
            },
            metadata: wb
          }, kM, be), (0, eb.i)(null, null, sw, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_lightmapTexture" in bb,
              get: bb => bb._lightmapTexture,
              set: (bb, wb) => {
                bb._lightmapTexture = wb
              }
            },
            metadata: wb
          }, ee, He), (0, eb.i)(null, null, hw, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_refractionTexture" in bb,
              get: bb => bb._refractionTexture,
              set: (bb, wb) => {
                bb._refractionTexture = wb
              }
            },
            metadata: wb
          }, ge, le), (0, eb.i)(null, null, Xw, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "ambientColor" in bb,
              get: bb => bb.ambientColor,
              set: (bb, wb) => {
                bb.ambientColor = wb
              }
            },
            metadata: wb
          }, Oe, Ue), (0, eb.i)(null, null, xw, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "diffuseColor" in bb,
              get: bb => bb.diffuseColor,
              set: (bb, wb) => {
                bb.diffuseColor = wb
              }
            },
            metadata: wb
          }, te, Ce), (0, eb.i)(null, null, jw, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularColor" in bb,
              get: bb => bb.specularColor,
              set: (bb, wb) => {
                bb.specularColor = wb
              }
            },
            metadata: wb
          }, Ee, Fe), (0, eb.i)(null, null, Kw, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissiveColor" in bb,
              get: bb => bb.emissiveColor,
              set: (bb, wb) => {
                bb.emissiveColor = wb
              }
            },
            metadata: wb
          }, Be, se), (0, eb.i)(null, null, rw, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularPower" in bb,
              get: bb => bb.specularPower,
              set: (bb, wb) => {
                bb.specularPower = wb
              }
            },
            metadata: wb
          }, me, he), (0, eb.i)(null, null, Rw, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useAlphaFromDiffuseTexture" in bb,
              get: bb => bb._useAlphaFromDiffuseTexture,
              set: (bb, wb) => {
                bb._useAlphaFromDiffuseTexture = wb
              }
            },
            metadata: wb
          }, ze, Xe), (0, eb.i)(null, null, Yw, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useEmissiveAsIllumination" in bb,
              get: bb => bb._useEmissiveAsIllumination,
              set: (bb, wb) => {
                bb._useEmissiveAsIllumination = wb
              }
            },
            metadata: wb
          }, Ke, re), (0, eb.i)(null, null, fw, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: bb => "_linkEmissiveWithDiffuse" in bb,
              get: bb => bb._linkEmissiveWithDiffuse,
              set: (bb, wb) => {
                bb._linkEmissiveWithDiffuse = wb
              }
            },
            metadata: wb
          }, ce, Ye), (0, eb.i)(null, null, Ww, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useSpecularOverAlpha" in bb,
              get: bb => bb._useSpecularOverAlpha,
              set: (bb, wb) => {
                bb._useSpecularOverAlpha = wb
              }
            },
            metadata: wb
          }, Ae, We), (0, eb.i)(null, null, Sw, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useReflectionOverAlpha" in bb,
              get: bb => bb._useReflectionOverAlpha,
              set: (bb, wb) => {
                bb._useReflectionOverAlpha = wb
              }
            },
            metadata: wb
          }, Ne, ve), (0, eb.i)(null, null, vw, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "_disableLighting" in bb,
              get: bb => bb._disableLighting,
              set: (bb, wb) => {
                bb._disableLighting = wb
              }
            },
            metadata: wb
          }, qe, ae), (0, eb.i)(null, null, Gw, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useObjectSpaceNormalMap" in bb,
              get: bb => bb._useObjectSpaceNormalMap,
              set: (bb, wb) => {
                bb._useObjectSpaceNormalMap = wb
              }
            },
            metadata: wb
          }, de, Pe), (0, eb.i)(null, null, aw, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useParallax" in bb,
              get: bb => bb._useParallax,
              set: (bb, wb) => {
                bb._useParallax = wb
              }
            },
            metadata: wb
          }, oe, Te), (0, eb.i)(null, null, uw, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useParallaxOcclusion" in bb,
              get: bb => bb._useParallaxOcclusion,
              set: (bb, wb) => {
                bb._useParallaxOcclusion = wb
              }
            },
            metadata: wb
          }, wH, MH), (0, eb.i)(null, null, Pw, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: bb => "parallaxScaleBias" in bb,
              get: bb => bb.parallaxScaleBias,
              set: (bb, wb) => {
                bb.parallaxScaleBias = wb
              }
            },
            metadata: wb
          }, pH, VH), (0, eb.i)(null, null, nw, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "_roughness" in bb,
              get: bb => bb._roughness,
              set: (bb, wb) => {
                bb._roughness = wb
              }
            },
            metadata: wb
          }, gH, lH), (0, eb.i)(null, null, ow, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: bb => "indexOfRefraction" in bb,
              get: bb => bb.indexOfRefraction,
              set: (bb, wb) => {
                bb.indexOfRefraction = wb
              }
            },
            metadata: wb
          }, OH, UH), (0, eb.i)(null, null, Tw, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertRefractionY" in bb,
              get: bb => bb.invertRefractionY,
              set: (bb, wb) => {
                bb.invertRefractionY = wb
              }
            },
            metadata: wb
          }, tH, CH), (0, eb.i)(null, null, kw, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: bb => "alphaCutOff" in bb,
              get: bb => bb.alphaCutOff,
              set: (bb, wb) => {
                bb.alphaCutOff = wb
              }
            },
            metadata: wb
          }, EH, FH), (0, eb.i)(null, null, bM, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useLightmapAsShadowmap" in bb,
              get: bb => bb._useLightmapAsShadowmap,
              set: (bb, wb) => {
                bb._useLightmapAsShadowmap = wb
              }
            },
            metadata: wb
          }, BH, sH), (0, eb.i)(null, null, MM, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_diffuseFresnelParameters" in bb,
              get: bb => bb._diffuseFresnelParameters,
              set: (bb, wb) => {
                bb._diffuseFresnelParameters = wb
              }
            },
            metadata: wb
          }, zH, XH), (0, eb.i)(null, null, HM, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_opacityFresnelParameters" in bb,
              get: bb => bb._opacityFresnelParameters,
              set: (bb, wb) => {
                bb._opacityFresnelParameters = wb
              }
            },
            metadata: wb
          }, KH, rH), (0, eb.i)(null, null, VM, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_reflectionFresnelParameters" in bb,
              get: bb => bb._reflectionFresnelParameters,
              set: (bb, wb) => {
                bb._reflectionFresnelParameters = wb
              }
            },
            metadata: wb
          }, cH, YH), (0, eb.i)(null, null, lM, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_refractionFresnelParameters" in bb,
              get: bb => bb._refractionFresnelParameters,
              set: (bb, wb) => {
                bb._refractionFresnelParameters = wb
              }
            },
            metadata: wb
          }, AH, WH), (0, eb.i)(null, null, IM, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_emissiveFresnelParameters" in bb,
              get: bb => bb._emissiveFresnelParameters,
              set: (bb, wb) => {
                bb._emissiveFresnelParameters = wb
              }
            },
            metadata: wb
          }, NH, vH), (0, eb.i)(null, null, UM, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useReflectionFresnelFromSpecular" in bb,
              get: bb => bb._useReflectionFresnelFromSpecular,
              set: (bb, wb) => {
                bb._useReflectionFresnelFromSpecular = wb
              }
            },
            metadata: wb
          }, qH, aH), (0, eb.i)(null, null, CM, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useGlossinessFromSpecularMapAlpha" in bb,
              get: bb => bb._useGlossinessFromSpecularMapAlpha,
              set: (bb, wb) => {
                bb._useGlossinessFromSpecularMapAlpha = wb
              }
            },
            metadata: wb
          }, dH, PH), (0, eb.i)(null, null, FM, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: bb => "_maxSimultaneousLights" in bb,
              get: bb => bb._maxSimultaneousLights,
              set: (bb, wb) => {
                bb._maxSimultaneousLights = wb
              }
            },
            metadata: wb
          }, oH, TH), (0, eb.i)(null, null, sM, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: bb => "_invertNormalMapX" in bb,
              get: bb => bb._invertNormalMapX,
              set: (bb, wb) => {
                bb._invertNormalMapX = wb
              }
            },
            metadata: wb
          }, wp, Mp), (0, eb.i)(null, null, hM, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: bb => "_invertNormalMapY" in bb,
              get: bb => bb._invertNormalMapY,
              set: (bb, wb) => {
                bb._invertNormalMapY = wb
              }
            },
            metadata: wb
          }, pp, Vp), (0, eb.i)(null, null, XM, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "_twoSidedLighting" in bb,
              get: bb => bb._twoSidedLighting,
              set: (bb, wb) => {
                bb._twoSidedLighting = wb
              }
            },
            metadata: wb
          }, Lp, Ip), (0, eb.i)(null, null, jM, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "_applyDecalMapAfterDetailMap" in bb,
              get: bb => bb._applyDecalMapAfterDetailMap,
              set: (bb, wb) => {
                bb._applyDecalMapAfterDetailMap = wb
              }
            },
            metadata: wb
          }, tp, Cp), wb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: wb
          })
        })(), bb.ForceGLSL = !1, bb._ShaderLoader = new Xb.e((() => [Promise.all([Mb.e(636), Mb.e(635)]).then((() => Mb(54100))), Promise.all([Mb.e(641), Mb.e(637), Mb.e(650), Mb.e(640)]).then((() => Mb(54286)))]), (() => [Promise.all([Mb.e(657), Mb.e(652)]).then((() => Mb(54436))), Promise.all([Mb.e(658), Mb.e(668), Mb.e(654)]).then((() => Mb(54633)))])), bb
      })(),
      Wb = !1;

    function Jb() {
      Wb || (Wb = !0, (0, Ob.h)(), (0, Rb.e)("BABYLON.StandardMaterial", Ab), Vb.g.DefaultMaterialFactory = bb => new Ab("default material", bb))
    }
    Object.getOwnPropertyDescriptor(Ab.prototype, "decalMap") || Object.defineProperty(Ab.prototype, "decalMap", (0, Db.g)("StandardMaterial", "decalMap"))
  },
  42061: (bb, wb, Mb) => {
    function eb(bb) {
      return class extends bb {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    Mb.d(wb, {
      e: () => eb
    })
  },
  42052: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb
    });
    class eb {
      constructor(bb, wb) {
        this._webGL = {
          load: bb,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: wb,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(bb) {
        const wb = 1 === bb ? this._webGPU : this._webGL;
        return wb.loaded ? void 0 : async () => {
          await this._loadAsync(wb)
        }
      }
      async _loadAsync(bb) {
        if (bb.loaded) return;
        let wb = bb.loadPromise;
        const Mb = null === wb;
        Mb && (wb = Promise.all(bb.load()), bb.loadPromise = wb);
        let eb = !1;
        try {
          await wb, eb = !0
        } finally {
          Mb && this._completeLoad(bb, eb)
        }
      }
      _completeLoad(bb, wb) {
        bb.loaded = wb, bb.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);