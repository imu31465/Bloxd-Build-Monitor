export const id = 251;
export const ids = [251];
export const modules = {
  39516: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb
    });
    var Ab = Ub(39118);

    function Mb(bb) {
      return class extends bb {
        constructor() {
          super(...arguments);
          const bb = new.target;
          if (!bb[Symbol.metadata]) {
            const ab = Object.getPrototypeOf(bb)?.[Symbol.metadata];
            bb[Symbol.metadata] = ab ? Object.create(ab) : {}
          }
          const ab = (0, Ab.d)(bb[Symbol.metadata]);
          ab._imageProcessingConfiguration || (ab._imageProcessingConfiguration = {
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
          bb !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !bb && this.oN ? this._imageProcessingConfiguration = this.oN().imageProcessingConfiguration : bb && (this._imageProcessingConfiguration = bb), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
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
  39380: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      i: () => Mb
    });
    var Ab = Ub(39389);

    function Mb(bb) {
      return class extends bb {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class Tb extends Ab.d {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  39465: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Lb
    });
    var Ab = Ub(39104),
      Mb = Ub(39394),
      Tb = Ub(39110),
      Eb = Ub(39447),
      Yb = Ub(39389),
      Bb = Ub(39473),
      eb = Ub(39432);
    class vb extends Yb.d {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let Lb = (() => {
      var bb, ab, Ub, Yb;
      let Lb, Pb, Xb, jb, Rb, kb, yb = Bb.d,
        Zb = [],
        Db = [],
        zb = [],
        xb = [],
        ib = [],
        fb = [],
        mb = [],
        pb = [],
        Nb = [],
        Wb = [],
        Hb = [],
        Ib = [];
      return bb = class extends yb {
        get texture() {
          return (0, Ab.c)(this, ab, "f")
        }
        set texture(bb) {
          (0, Ab.e)(this, ab, bb, "f")
        }
        get normalBlendMethod() {
          return (0, Ab.c)(this, Ub, "f")
        }
        set normalBlendMethod(bb) {
          (0, Ab.e)(this, Ub, bb, "f")
        }
        get isEnabled() {
          return (0, Ab.c)(this, Yb, "f")
        }
        set isEnabled(bb) {
          (0, Ab.e)(this, Yb, bb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(bb) {
          let Tb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(bb, "DetailMap", 140, new vb, Tb), this._texture = null, ab.set(this, (0, Ab.k)(this, Zb, void 0)), this.diffuseBlendLevel = ((0, Ab.k)(this, Db), (0, Ab.k)(this, zb, 1)), this.roughnessBlendLevel = ((0, Ab.k)(this, xb), (0, Ab.k)(this, ib, 1)), this.bumpLevel = ((0, Ab.k)(this, fb), (0, Ab.k)(this, mb, 1)), this._normalBlendMethod = ((0, Ab.k)(this, pb), Mb.d.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), Ub.set(this, (0, Ab.k)(this, Nb, void 0)), this._isEnabled = ((0, Ab.k)(this, Wb), !1), Yb.set(this, (0, Ab.k)(this, Hb, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Ab.k)(this, Ib), this._internalMarkAllSubMeshesAsTexturesDirty = bb._dirtyCallbacks[1]
        }
        isReadyForSubMesh(bb, ab, Ub) {
          return !this._isEnabled || !(bb._areTexturesDirty && ab.texturesEnabled && Ub.getCaps().standardDerivatives && this._texture && Eb.c.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(bb, ab) {
          if (this._isEnabled) {
            bb.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const Ub = ab.vj();
            bb._areTexturesDirty && (Ub.getCaps().standardDerivatives && this._texture && Eb.c.DetailTextureEnabled && this._isEnabled ? ((0, eb.$)(this._texture, bb, "DETAIL"), bb.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : bb.DETAIL = !1)
          } else bb.DETAIL = !1
        }
        bindForSubMesh(bb, ab) {
          if (!this._isEnabled) return;
          const Ub = this._material.isFrozen;
          bb.useUbo && Ub && bb.isSync || this._texture && Eb.c.DetailTextureEnabled && (bb.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, eb.x)(this._texture, bb, "detail")), ab.texturesEnabled && this._texture && Eb.c.DetailTextureEnabled && bb.setTexture("detailSampler", this._texture)
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
      }, ab = new WeakMap, Ub = new WeakMap, Yb = new WeakMap, (() => {
        const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(yb[Symbol.metadata] ?? null) : void 0;
        Lb = [(0, Tb.D)("detailTexture"), (0, Tb.e)("_markAllSubMeshesAsTexturesDirty")], Pb = [(0, Tb.K)()], Xb = [(0, Tb.K)()], jb = [(0, Tb.K)()], Rb = [(0, Tb.K)(), (0, Tb.e)("_markAllSubMeshesAsTexturesDirty")], kb = [(0, Tb.K)(), (0, Tb.e)("_markAllSubMeshesAsTexturesDirty")], (0, Ab.h)(bb, null, Lb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, ab) => {
              bb.texture = ab
            }
          },
          metadata: ab
        }, Zb, Db), (0, Ab.h)(bb, null, Rb, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: bb => "normalBlendMethod" in bb,
            get: bb => bb.normalBlendMethod,
            set: (bb, ab) => {
              bb.normalBlendMethod = ab
            }
          },
          metadata: ab
        }, Nb, Wb), (0, Ab.h)(bb, null, kb, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, ab) => {
              bb.isEnabled = ab
            }
          },
          metadata: ab
        }, Hb, Ib), (0, Ab.h)(null, null, Pb, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: bb => "diffuseBlendLevel" in bb,
            get: bb => bb.diffuseBlendLevel,
            set: (bb, ab) => {
              bb.diffuseBlendLevel = ab
            }
          },
          metadata: ab
        }, zb, xb), (0, Ab.h)(null, null, Xb, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: bb => "roughnessBlendLevel" in bb,
            get: bb => bb.roughnessBlendLevel,
            set: (bb, ab) => {
              bb.roughnessBlendLevel = ab
            }
          },
          metadata: ab
        }, ib, fb), (0, Ab.h)(null, null, jb, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: bb => "bumpLevel" in bb,
            get: bb => bb.bumpLevel,
            set: (bb, ab) => {
              bb.bumpLevel = ab
            }
          },
          metadata: ab
        }, mb, pb), ab && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ab
        })
      })(), bb
    })()
  },
  39389: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab
    });
    class Ab {
      constructor(bb) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = bb, bb)
          for (const ab in bb) Object.prototype.hasOwnProperty.call(bb, ab) && this._setDefaultValue(ab)
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
        for (let ab = 0; ab < this._keys.length; ab++) {
          const Ub = this._keys[ab];
          if (this[Ub] !== bb[Ub]) return !1
        }
        return !0
      }
      cloneTo(bb) {
        this._keys.length !== bb._keys.length && (bb._keys = this._keys.slice(0));
        for (let ab = 0; ab < this._keys.length; ab++) {
          const Ub = this._keys[ab];
          bb[Ub] = this[Ub]
        }
      }
      reset() {
        for (const bb of this._keys) this._setDefaultValue(bb)
      }
      _setDefaultValue(bb) {
        const ab = this._externalProperties?.[bb]?.type ?? typeof this[bb],
          Ub = this._externalProperties?.[bb]?.default;
        switch (ab) {
          case "number":
            this[bb] = Ub ?? 0;
            break;
          case "string":
            this[bb] = Ub ?? "";
            break;
          default:
            this[bb] = Ub ?? !1
        }
      }
      toString() {
        let bb = "";
        for (let ab = 0; ab < this._keys.length; ab++) {
          const Ub = this._keys[ab],
            Ab = this[Ub];
          switch (typeof Ab) {
            case "number":
            case "string":
              bb += "#define " + Ub + " " + Ab + "\n";
              break;
            default:
              Ab && (bb += "#define " + Ub + "\n")
          }
        }
        return bb
      }
    }
  },
  39493: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb,
      g: () => Eb,
      k: () => Tb
    });
    var Ab, Mb = Ub(36401);

    function Tb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const Ab = ab(bb);
      if (!Number.isInteger(Ab) || Ab < 0 || Ab > Ub) throw new Error(`Invalid geometry object ID ${Ab} for mesh "${bb.name}". Object IDs must be integers between 0 and 0x${Ub.toString(16).toUpperCase()}.`);
      return Ab
    }

    function Eb(bb, ab) {
      const Ub = ab(bb);
      if (!Number.isInteger(Ub) || Ub < 0 || Ub > 255 || 0 !== Ub && 0 === (63 & Ub)) throw new Error(`Invalid geometry mesh-blending tag ${Ub} for mesh "${bb.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return Ub
    }! function(bb) {
      bb[bb.Zero = 0] = "Zero", bb[bb.One = 1] = "One", bb[bb.MaxViewZ = 2] = "MaxViewZ", bb[bb.NoClear = 3] = "NoClear"
    }(Ab || (Ab = {}));
    class Yb {
      static CreateConfiguration(bb) {
        return Yb._Configurations[bb] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: Mb.b.Zero(),
          currentViewProjection: Mb.b.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, Yb._Configurations[bb]
      }
      static DeleteConfiguration(bb) {
        delete Yb._Configurations[bb]
      }
      static GetConfiguration(bb) {
        return Yb._Configurations[bb]
      }
      static _PrepareConfiguration(bb, ab, Ub) {
        const Ab = Yb._Configurations[bb];
        Ab._attachments = ab, Ab._colorAttachments = Ub, Ab._mrtCount = ab.length;
        let Mb = "#define PREPASS\n";
        for (const Tb of Yb.GeometryTextureDescriptions) {
          const bb = Ab.defines[Tb.defineIndex];
          void 0 !== bb && (Mb += `#define ${Tb.define}\n#define ${Tb.defineIndex} ${bb}\n`)
        }
        Ab.objectIdIsRedFormat && (Mb += "#define PREPASS_OBJECT_ID_R8\n"), Ab._defines = Mb + `#define SCENE_MRT_COUNT ${ab.length}\n`
      }
      static _PrepareStringDefines(bb, ab) {
        const Ub = Yb._Configurations[bb];
        return !!Ub?._defines && (ab.push(Ub._defines), !0)
      }
      static _BindAttachmentsForEffect(bb, ab) {
        const Ub = Yb._Configurations[bb.currentRenderPassId];
        return !Ub?._attachments || (bb.bindAttachments(ab._multiTarget ? Ub._attachments : Ub._colorAttachments), ab._multiTarget || void 0 !== Ub.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(bb) {
        const ab = Yb._Configurations[bb.currentRenderPassId];
        ab?._colorAttachments && bb.bindAttachments(ab._colorAttachments)
      }
      static _BindColorAttachments(bb) {
        const ab = Yb._Configurations[bb.currentRenderPassId];
        return !ab?._colorAttachments || (bb.bindAttachments(ab._colorAttachments), void 0 !== ab.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(bb) {
        const ab = Yb._Configurations[bb.currentRenderPassId];
        return !ab?._colorAttachments || void 0 !== ab.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(bb, ab) {
        const Ub = Yb._Configurations[bb.currentRenderPassId];
        if (!Ub) return;
        const Ab = bb.getAlphaMode(),
          Mb = void 0 === Ub.defines.PREPASS_COLOR_INDEX || 2 === Ab || 1 === Ab || 17 === Ab;
        ab.setFloat("geometryZeroAlphaDiscard", Mb ? 1 : 0)
      }
      static AddUniformsAndSamplers(bb, ab) {
        bb.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(bb, ab) {
        for (const Ub of ab)
          if (Ub.mD)
            for (const ab of Ub.mD) ab._removeDrawWrapper(bb)
      }
      static PrepareDefines(bb, ab, Ub) {
        if (!Ub._arePrePassDirty) return;
        const Ab = Yb._Configurations[bb];
        if (!Ab) return;
        Ub.PREPASS = !0;
        let Mb = 0;
        for (let Tb = 0; Tb < Yb.GeometryTextureDescriptions.length; Tb++) {
          const bb = Yb.GeometryTextureDescriptions[Tb],
            ab = bb.define,
            Eb = bb.defineIndex,
            Bb = Ab.defines[Eb];
          void 0 !== Bb ? (Ub[ab] = !0, Ub[Eb] = Bb, Mb++) : (Ub[ab] = !1, delete Ub[Eb])
        }
        Ub.PREPASS_OBJECT_ID_R8 = Ab.objectIdIsRedFormat, Ub.SCENE_MRT_COUNT = Ab._mrtCount ?? Mb, Ub.BONES_VELOCITY_ENABLED = ab.useBones && ab.computeBonesUsingShaders && ab.skeleton && !ab.skeleton.isUsingTextureForMatrices && -1 === Ab.excludedSkinnedMesh.indexOf(ab)
      }
      static Bind(bb, ab, Ub, Ab, Mb) {
        const Bb = Yb._Configurations[bb];
        if (!Bb) return;
        const eb = Ub.oN(),
          vb = eb.vj();
        if (Bb.reverseCulling && vb.setStateCullFaceType(eb._mirroredCameraPosition ? Mb.cullBackFaces : !Mb.cullBackFaces), void 0 !== Bb.defines.PREPASS_OBJECT_ID_INDEX) {
          const bb = Bb.objectIdIsRedFormat ? 255 : 16777215;
          let Ab = Ub.uniqueId;
          if (Bb.objectIdProvider) Ab = Tb(Ub, Bb.objectIdProvider, bb);
          else if (Ab > bb) throw new Error(`Invalid geometry object ID ${Ab} for mesh "${Ub.name}". Object IDs must be integers between 0 and 0x${bb.toString(16).toUpperCase()}.`);
          ab.setFloat("objectId", Ab)
        }
        if (void 0 !== Bb.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const bb = Bb.meshBlendTagProvider ? Eb(Ub, Bb.meshBlendTagProvider) : Ub.meshBlendingTag;
          ab.setInt("meshBlendTag", bb)
        }
        if (void 0 !== Bb.defines.PREPASS_VELOCITY_INDEX || void 0 !== Bb.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const bb = Bb._currentWorldMatrices ?? (Bb._currentWorldMatrices = {}),
            Mb = Bb._worldMatrixFrameIds ?? (Bb._worldMatrixFrameIds = {});
          if (bb[Ub.uniqueId] || (bb[Ub.uniqueId] = Ab.clone(), Bb.previousWorldMatrices[Ub.uniqueId] = Ab.clone()), Mb[Ub.uniqueId] !== vb.frameId && (Bb.previousWorldMatrices[Ub.uniqueId].EUb(bb[Ub.uniqueId]), Mb[Ub.uniqueId] = vb.frameId), bb[Ub.uniqueId].EUb(Ab), -1 === Bb.lastUpdateFrameId ? (Bb.lastUpdateFrameId = vb.frameId, Bb.previousViewProjection.EUb(eb.getTransformMatrix()), Bb.currentViewProjection.EUb(eb.getTransformMatrix())) : Bb.currentViewProjection.updateFlag !== eb.getTransformMatrix().updateFlag ? (Bb.lastUpdateFrameId = vb.frameId, Bb.previousViewProjection.EUb(Bb.currentViewProjection), Bb.currentViewProjection.EUb(eb.getTransformMatrix())) : Bb.lastUpdateFrameId !== vb.frameId && (Bb.lastUpdateFrameId = vb.frameId, Bb.previousViewProjection.EUb(Bb.currentViewProjection)), ab.setMatrix("previousWorld", Bb.previousWorldMatrices[Ub.uniqueId]), ab.setMatrix("previousViewProjection", Bb.previousViewProjection), Ub.useBones && Ub.computeBonesUsingShaders && Ub.skeleton) {
            const bb = Ub.skeleton;
            if (!bb.isUsingTextureForMatrices || -1 === ab.getUniformIndex("boneTextureInfo")) {
              const Ab = bb.getTransformMatrices(Ub);
              Ab && (Bb.previousBones[Ub.uniqueId] || (Bb.previousBones[Ub.uniqueId] = Ab.slice()), ab.setMatrices("mPreviousBones", Bb.previousBones[Ub.uniqueId]), Bb.previousBones[Ub.uniqueId].set(Ab))
            }
          }
        }
      }
    }
    Yb.GeometryTextureDescriptions = [{
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
    }], Yb._Configurations = {}
  },
  39473: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Pb,
      g: () => jb
    });
    var Ab = Ub(39104),
      Mb = Ub(39110),
      Tb = Ub(38985),
      Eb = Ub(38943);
    const Yb = new RegExp("^([gimus]+)!");
    class Bb {
      constructor(bb) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = bb, this._scene = bb.oN(), this._engine = this._scene.vj()
      }
      _addPlugin(bb) {
        for (let Ab = 0; Ab < this._plugins.length; ++Ab)
          if (this._plugins[Ab].name === bb.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !bb.isCompatible(this._material.shaderLanguage)) throw `The plugin "${bb.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const ab = bb.getClassName();
        Bb._MaterialPluginClassToMainDefine[ab] || (Bb._MaterialPluginClassToMainDefine[ab] = "MATERIALPLUGIN_" + ++Bb._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (bb, ab) => this._handlePluginEvent(bb, ab), this._plugins.push(bb), this._plugins.sort(((bb, ab) => bb.priority - ab.priority)), this._codeInjectionPoints = {};
        const Ub = {};
        Ub[Bb._MaterialPluginClassToMainDefine[ab]] = {
          type: "boolean",
          default: !0
        };
        for (const Ab of this._plugins) Ab.collectDefines(Ub), this._collectPointNames("vertex", Ab.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Ab.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = Ub, !0
      }
      _activatePlugin(bb) {
        -1 === this._activePlugins.indexOf(bb) && (this._activePlugins.push(bb), this._activePlugins.sort(((bb, ab) => bb.priority - ab.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), bb.registerForExtraEvents && (this._activePluginsForExtraEvents.push(bb), this._activePluginsForExtraEvents.sort(((bb, ab) => bb.priority - ab.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(bb) {
        for (let ab = 0; ab < this._plugins.length; ++ab)
          if (this._plugins[ab].name === bb) return this._plugins[ab];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(bb) {
        let ab = !0;
        for (const Ub of this._activePlugins) ab = ab && Ub.isReadyForSubMesh(bb.defines, this._scene, this._engine, bb.subMesh);
        bb.isReadyForSubMesh = ab
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(bb) {
        for (const ab of this._activePlugins) ab.prepareDefinesBeforeAttributes(bb.defines, this._scene, bb.mesh)
      }
      _handlePluginEventPrepareDefines(bb) {
        for (const ab of this._activePlugins) ab.prepareDefines(bb.defines, this._scene, bb.mesh)
      }
      _handlePluginEventHardBindForSubMesh(bb) {
        for (const ab of this._activePluginsForExtraEvents) ab.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, bb.subMesh)
      }
      _handlePluginEventBindForSubMesh(bb) {
        for (const ab of this._activePlugins) ab.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, bb.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(bb) {
        let ab = !1;
        for (const Ub of this._activePluginsForExtraEvents)
          if (ab = Ub.hasRenderTargetTextures(), ab) break;
        bb.hasRenderTargetTextures = ab
      }
      _handlePluginEventFillRenderTargetTextures(bb) {
        for (const ab of this._activePluginsForExtraEvents) ab.fillRenderTargetTextures(bb.renderTargets)
      }
      _handlePluginEvent(bb, ab) {
        switch (bb) {
          case 512: {
            const bb = ab;
            for (const ab of this._activePlugins) ab.getActiveTextures(bb.activeTextures);
            break
          }
          case 256: {
            const bb = ab;
            for (const ab of this._activePlugins) ab.getAnimatables(bb.animatables);
            break
          }
          case 1024: {
            const bb = ab;
            let Ub = !1;
            for (const ab of this._activePlugins)
              if (Ub = ab.hasTexture(bb.texture), Ub) break;
            bb.hasTexture = Ub;
            break
          }
          case 2: {
            const bb = ab;
            for (const ab of this._plugins) ab.dispose(bb.forceDisposeTextures);
            break
          }
          case 4:
            ab.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const bb = ab;
            for (const ab of this._activePlugins) bb.fallbackRank = ab.addFallbacks(bb.defines, bb.fallbacks, bb.fallbackRank), ab.getAttributes(bb.attributes, this._scene, bb.mesh);
            this._uniformList.length > 0 && bb.uniforms.push(...this._uniformList), this._samplerList.length > 0 && bb.samplers.push(...this._samplerList), this._uboList.length > 0 && bb.uniformBuffersNames.push(...this._uboList), bb.customCode = this._injectCustomCode(bb, bb.customCode);
            break
          }
          case 8: {
            const bb = ab;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const Ub = 1 === this._material.shaderLanguage;
            for (const ab of this._plugins) {
              const Ab = ab.getUniforms(this._material.shaderLanguage);
              if (Ab) {
                if (Ab.ubo)
                  for (const ab of Ab.ubo) {
                    if (ab.size && ab.type) {
                      const Ab = ab.arraySize ?? 0;
                      if (bb.ubo.addUniform(ab.name, ab.size, Ab), Ub) {
                        let bb;
                        switch (ab.type) {
                          case "mat4":
                            bb = "mat4x4f";
                            break;
                          case "float":
                            bb = "f32";
                            break;
                          default:
                            bb = `${ab.type}f`
                        }
                        this._uboDeclaration += Ab > 0 ? `uniform ${ab.name}: array<${bb}, ${Ab}>;\n` : `uniform ${ab.name}: ${bb};\n`
                      } else this._uboDeclaration += `${ab.type} ${ab.name}${Ab>0?`[${Ab}]`:""};\n`
                    }
                    this._uniformList.push(ab.name)
                  }
                Ab.vertex && (this._vertexDeclaration += Ab.vertex + "\n"), Ab.fragment && (this._fragmentDeclaration += Ab.fragment + "\n"), Ab.externalUniforms && this._uniformList.push(...Ab.externalUniforms)
              }
              ab.getSamplers(this._samplerList), ab.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(bb, ab) {
        if (ab)
          for (const Ub in ab) this._codeInjectionPoints[bb] || (this._codeInjectionPoints[bb] = {}), this._codeInjectionPoints[bb][Ub] = !0
      }
      _injectCustomCode(bb, ab) {
        return (Ub, Ab) => {
          ab && (Ab = ab(Ub, Ab)), this._uboDeclaration && (Ab = Ab.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Ab = Ab.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (Ab = Ab.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const Mb = this._codeInjectionPoints?.[Ub];
          if (!Mb) return Ab;
          let Bb = null;
          for (let ab in Mb) {
            let Mb = "";
            for (const Ab of this._activePlugins) {
              const Yb = this._material.shaderLanguage;
              let eb = Ab.getCustomCode(Ub, Yb)?.[ab];
              eb && (Ab.resolveIncludes && (null === Bb && (Bb = {
                defines: [],
                indexParameters: bb.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: Eb.d.GetShadersRepository(Yb),
                includesShadersStore: Eb.d.GetIncludesShadersStore(Yb),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                hUb: this._engine.hUb,
                processCodeAfterIncludes: void 0
              }), Bb.isFragment = "fragment" === Ub, (0, Tb.e)(eb, Bb, (bb => eb = bb))), Mb += eb + "\n")
            }
            if (Mb.length > 0)
              if ("!" === ab.charAt(0)) {
                ab = ab.substring(1);
                let bb = "g";
                if ("!" === ab.charAt(0)) bb = "", ab = ab.substring(1);
                else {
                  const Ub = Yb.exec(ab);
                  Ub && Ub.length >= 2 && (bb = Ub[1], ab = ab.substring(bb.length + 1))
                }
                bb.indexOf("g") < 0 && (bb += "g");
                const Ub = new RegExp(ab, bb);
                let Tb = Ub.exec(Ab);
                for (; null !== Tb;) {
                  const {
                    index: bb
                  } = Tb, ab = eb(Mb, Tb);
                  Ab = Ab.substring(0, bb) + ab + Ab.substring(bb + Tb[0].length), Ub.lastIndex = bb + ab.length, Tb = Ub.exec(Ab)
                }
              } else {
                const bb = "#define " + ab;
                Ab = Ab.replace(bb, "\n" + Mb + "\n" + bb)
              }
          }
          return Ab
        }
      }
    }
    Bb._MaterialPluginClassToMainDefine = {}, Bb._MaterialPluginCounter = 0;

    function eb(bb, ab) {
      return bb.replace(/\$(\d+)/g, ((bb, Ub) => {
        const Ab = Number(Ub);
        return Ab < ab.length ? ab[Ab] : ""
      }))
    }
    var vb = Ub(39124),
      Lb = Ub(36447);
    let Pb = (() => {
        var bb;
        let ab, Ub, Tb, Eb, Yb = [],
          eb = [],
          Lb = [],
          Pb = [],
          Xb = [],
          jb = [],
          Rb = [],
          kb = [];
        return bb = class {
          isCompatible(bb) {
            return 0 === bb
          }
          _enable(bb) {
            bb && this._pluginManager._activatePlugin(this)
          }
          constructor(bb, ab, Ub, Mb) {
            let Tb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              Eb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              vb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, Ab.k)(this, Yb, void 0), this.priority = ((0, Ab.k)(this, eb), (0, Ab.k)(this, Lb, 500)), this.resolveIncludes = ((0, Ab.k)(this, Pb), (0, Ab.k)(this, Xb, !1)), this.registerForExtraEvents = ((0, Ab.k)(this, jb), (0, Ab.k)(this, Rb, !1)), this.doNotSerialize = ((0, Ab.k)(this, kb), !1), this._material = bb, this.name = ab, this.priority = Ub, this.resolveIncludes = vb, bb.pluginManager || (bb.pluginManager = new Bb(bb), bb.UW.add((() => {
              bb.pluginManager = void 0
            }))), this._pluginDefineNames = Mb, this._pluginManager = bb.pluginManager, Tb && this._pluginManager._addPlugin(this), Eb && this._enable(!0), this.markAllDefinesAsDirty = bb._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(bb, ab, Ub, Ab) {
            return !0
          }
          hardBindForSubMesh(bb, ab, Ub, Ab) {}
          bindForSubMesh(bb, ab, Ub, Ab) {}
          dispose(bb) {}
          getCustomCode(bb) {
            return null
          }
          collectDefines(bb) {
            if (this._pluginDefineNames)
              for (const ab of Object.keys(this._pluginDefineNames)) {
                if ("_" === ab[0]) continue;
                const Ub = typeof this._pluginDefineNames[ab];
                bb[ab] = {
                  type: "number" === Ub ? "number" : "string" === Ub ? "string" : "boolean" === Ub ? "boolean" : "object",
                  default: this._pluginDefineNames[ab]
                }
              }
          }
          prepareDefinesBeforeAttributes(bb, ab, Ub) {}
          prepareDefines(bb, ab, Ub) {}
          hasTexture(bb) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(bb) {}
          getActiveTextures(bb) {}
          getAnimatables(bb) {}
          addFallbacks(bb, ab, Ub) {
            return Ub
          }
          getSamplers(bb) {}
          getAttributes(bb, ab, Ub) {}
          getUniformBuffersNames(bb) {}
          getUniforms() {
            return {}
          }
          copyTo(bb) {
            vb.b.Clone((() => bb), this)
          }
          serialize() {
            return vb.b.Serialize(this)
          }
          parse(bb, ab, Ub) {
            vb.b.Parse((() => this), bb, ab, Ub)
          }
        }, (() => {
          const Bb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ab = [(0, Mb.K)()], Ub = [(0, Mb.K)()], Tb = [(0, Mb.K)()], Eb = [(0, Mb.K)()], (0, Ab.h)(null, null, ab, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name,
              set: (bb, ab) => {
                bb.name = ab
              }
            },
            metadata: Bb
          }, Yb, eb), (0, Ab.h)(null, null, Ub, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: bb => "priority" in bb,
              get: bb => bb.priority,
              set: (bb, ab) => {
                bb.priority = ab
              }
            },
            metadata: Bb
          }, Lb, Pb), (0, Ab.h)(null, null, Tb, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: bb => "resolveIncludes" in bb,
              get: bb => bb.resolveIncludes,
              set: (bb, ab) => {
                bb.resolveIncludes = ab
              }
            },
            metadata: Bb
          }, Xb, jb), (0, Ab.h)(null, null, Eb, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: bb => "registerForExtraEvents" in bb,
              get: bb => bb.registerForExtraEvents,
              set: (bb, ab) => {
                bb.registerForExtraEvents = ab
              }
            },
            metadata: Bb
          }, Rb, kb), Bb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Bb
          })
        })(), bb
      })(),
      Xb = !1;

    function jb() {
      Xb || (Xb = !0, (0, Lb.f)("BABYLON.MaterialPluginBase", Pb))
    }
  },
  39372: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab
    });
    class Ab {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(bb) {
        bb.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(bb) {}
      bindForSubMesh(bb, ab, Ub, Ab, Mb) {
        if (ab.prePassRenderer && ab.prePassRenderer.enabled && ab.prePassRenderer.currentRTisSceneRT && (-1 !== ab.prePassRenderer.getIndex(2) || -1 !== ab.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[Ub.uniqueId] || (this.previousWorldMatrices[Ub.uniqueId] = Ab.clone()), this.previousViewProjection || (this.previousViewProjection = ab.getTransformMatrix().clone(), this.currentViewProjection = ab.getTransformMatrix().clone());
          const Mb = ab.vj();
          this.currentViewProjection.updateFlag !== ab.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = Mb.frameId, this.previousViewProjection.EUb(this.currentViewProjection), this.currentViewProjection.EUb(ab.getTransformMatrix())) : this._lastUpdateFrameId !== Mb.frameId && (this._lastUpdateFrameId = Mb.frameId, this.previousViewProjection.EUb(this.currentViewProjection)), bb.setMatrix("previousWorld", this.previousWorldMatrices[Ub.uniqueId]), bb.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[Ub.uniqueId] = Ab.clone()
        }
      }
    }
  },
  39508: (bb, ab, Ub) => {
    function Ab(bb) {
      return class extends bb {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    Ub.d(ab, {
      c: () => Ab
    })
  },
  39361: (bb, ab, Ub) => {
    Ub.d(ab, {
      StandardMaterial: () => Ab.g
    });
    var Ab = Ub(39367);
    (0, Ab.c)()
  },
  39367: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => qb,
      g: () => Gb
    });
    var Ab = Ub(39104),
      Mb = Ub(39110),
      Tb = Ub(39205),
      Eb = Ub(39188),
      Yb = Ub(36593),
      Bb = Ub(39244),
      eb = Ub(39372),
      vb = Ub(39380),
      Lb = Ub(39209),
      Pb = Ub(39394),
      Xb = Ub(39389),
      jb = Ub(39454),
      Rb = Ub(39447),
      kb = Ub(39460),
      yb = Ub(39465),
      Zb = Ub(39440),
      Db = Ub(39478),
      zb = Ub(39432),
      xb = Ub(39124),
      ib = Ub(39485),
      fb = Ub(39493),
      mb = Ub(39502),
      pb = Ub(39508),
      Nb = Ub(39516),
      Wb = Ub(36447),
      Hb = Ub(38982);
    const Ib = {
      effect: null,
      subMesh: null
    };
    class db extends((0, pb.c)((0, mb.b)(Xb.d))) {}
    class Fb extends((0, vb.i)(db)) {
      constructor(bb) {
        super(bb), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class hb extends((0, Nb.d)(jb.d)) {}
    let Gb = (() => {
        var bb, ab, vb, Xb, mb, pb, Nb, Wb, Hb, db, Gb, Qb, qb, ub, rb, Kb, ob, lb, tb, wb, sb, gb, Cb, Vb, Ob, cb, Jb, nb, Sb, ba, aa, Ua, Aa;
        let Ma, Ta, Ea, Ya, Ba, ea, va, La, Pa, Xa, ja, Ra, ka, ya, Za, Da, za, xa, ia, fa, ma, pa, Na, Wa, Ha, Ia, da, Fa, ha, Ga, Qa, qa, ua, ra, Ka, oa, la, ta, wa, sa, ga, Ca, Va, Oa, ca, Ja, na, Sa, bU, aU, UU, AU, MU, TU, EU, YU, BU, eU, vU, LU, PU, XU, jU, RU, kU, yU, ZU, DU, zU, xU, iU, fU, mU, pU = hb,
          NU = [],
          WU = [],
          HU = [],
          IU = [],
          dU = [],
          FU = [],
          hU = [],
          GU = [],
          QU = [],
          qU = [],
          uU = [],
          rU = [],
          KU = [],
          oU = [],
          lU = [],
          tU = [],
          wU = [],
          sU = [],
          gU = [],
          CU = [],
          VU = [],
          OU = [],
          cU = [],
          JU = [],
          nU = [],
          SU = [],
          bA = [],
          aA = [],
          UA = [],
          AA = [],
          MA = [],
          TA = [],
          EA = [],
          YA = [],
          BA = [],
          eA = [],
          vA = [],
          LA = [],
          PA = [],
          XA = [],
          jA = [],
          RA = [],
          kA = [],
          yA = [],
          ZA = [],
          DA = [],
          zA = [],
          xA = [],
          iA = [],
          fA = [],
          mA = [],
          pA = [],
          NA = [],
          WA = [],
          HA = [],
          IA = [],
          dA = [],
          FA = [],
          hA = [],
          GA = [],
          QA = [],
          qA = [],
          uA = [],
          rA = [],
          KA = [],
          oA = [],
          lA = [],
          tA = [],
          wA = [],
          sA = [],
          gA = [],
          CA = [],
          VA = [],
          OA = [],
          cA = [],
          JA = [],
          nA = [],
          SA = [],
          bM = [],
          aM = [],
          UM = [],
          AM = [],
          MM = [],
          TM = [],
          EM = [],
          YM = [],
          BM = [],
          eM = [],
          vM = [],
          LM = [],
          PM = [],
          XM = [],
          jM = [],
          RM = [],
          kM = [],
          yM = [],
          ZM = [],
          DM = [],
          zM = [],
          xM = [],
          iM = [],
          fM = [],
          mM = [],
          pM = [],
          NM = [],
          WM = [],
          HM = [],
          IM = [],
          dM = [],
          FM = [],
          hM = [],
          GM = [],
          QM = [],
          qM = [],
          uM = [],
          rM = [],
          KM = [],
          oM = [],
          lM = [],
          tM = [],
          wM = [],
          sM = [],
          gM = [],
          CM = [],
          VM = [],
          OM = [],
          cM = [],
          JM = [],
          nM = [],
          SM = [],
          bT = [],
          aT = [],
          UT = [],
          AT = [],
          MT = [],
          TT = [],
          ET = [],
          YT = [],
          BT = [],
          eT = [],
          vT = [],
          LT = [],
          PT = [],
          XT = [],
          jT = [],
          RT = [];
        return bb = class extends pU {
          get diffuseTexture() {
            return (0, Ab.c)(this, ab, "f")
          }
          set diffuseTexture(bb) {
            (0, Ab.e)(this, ab, bb, "f")
          }
          get ambientTexture() {
            return (0, Ab.c)(this, vb, "f")
          }
          set ambientTexture(bb) {
            (0, Ab.e)(this, vb, bb, "f")
          }
          get opacityTexture() {
            return (0, Ab.c)(this, Xb, "f")
          }
          set opacityTexture(bb) {
            (0, Ab.e)(this, Xb, bb, "f")
          }
          get reflectionTexture() {
            return (0, Ab.c)(this, mb, "f")
          }
          set reflectionTexture(bb) {
            (0, Ab.e)(this, mb, bb, "f")
          }
          get emissiveTexture() {
            return (0, Ab.c)(this, pb, "f")
          }
          set emissiveTexture(bb) {
            (0, Ab.e)(this, pb, bb, "f")
          }
          get specularTexture() {
            return (0, Ab.c)(this, Nb, "f")
          }
          set specularTexture(bb) {
            (0, Ab.e)(this, Nb, bb, "f")
          }
          get bumpTexture() {
            return (0, Ab.c)(this, Wb, "f")
          }
          set bumpTexture(bb) {
            (0, Ab.e)(this, Wb, bb, "f")
          }
          get lightmapTexture() {
            return (0, Ab.c)(this, Hb, "f")
          }
          set lightmapTexture(bb) {
            (0, Ab.e)(this, Hb, bb, "f")
          }
          get refractionTexture() {
            return (0, Ab.c)(this, db, "f")
          }
          set refractionTexture(bb) {
            (0, Ab.e)(this, db, bb, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, Ab.c)(this, Gb, "f")
          }
          set useAlphaFromDiffuseTexture(bb) {
            (0, Ab.e)(this, Gb, bb, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, Ab.c)(this, Qb, "f")
          }
          set useEmissiveAsIllumination(bb) {
            (0, Ab.e)(this, Qb, bb, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, Ab.c)(this, qb, "f")
          }
          set linkEmissiveWithDiffuse(bb) {
            (0, Ab.e)(this, qb, bb, "f")
          }
          get useSpecularOverAlpha() {
            return (0, Ab.c)(this, ub, "f")
          }
          set useSpecularOverAlpha(bb) {
            (0, Ab.e)(this, ub, bb, "f")
          }
          get useReflectionOverAlpha() {
            return (0, Ab.c)(this, rb, "f")
          }
          set useReflectionOverAlpha(bb) {
            (0, Ab.e)(this, rb, bb, "f")
          }
          get disableLighting() {
            return (0, Ab.c)(this, Kb, "f")
          }
          set disableLighting(bb) {
            (0, Ab.e)(this, Kb, bb, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, Ab.c)(this, ob, "f")
          }
          set useObjectSpaceNormalMap(bb) {
            (0, Ab.e)(this, ob, bb, "f")
          }
          get useParallax() {
            return (0, Ab.c)(this, lb, "f")
          }
          set useParallax(bb) {
            (0, Ab.e)(this, lb, bb, "f")
          }
          get useParallaxOcclusion() {
            return (0, Ab.c)(this, tb, "f")
          }
          set useParallaxOcclusion(bb) {
            (0, Ab.e)(this, tb, bb, "f")
          }
          get roughness() {
            return (0, Ab.c)(this, wb, "f")
          }
          set roughness(bb) {
            (0, Ab.e)(this, wb, bb, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, Ab.c)(this, sb, "f")
          }
          set useLightmapAsShadowmap(bb) {
            (0, Ab.e)(this, sb, bb, "f")
          }
          get diffuseFresnelParameters() {
            return (0, Ab.c)(this, gb, "f")
          }
          set diffuseFresnelParameters(bb) {
            (0, Ab.e)(this, gb, bb, "f")
          }
          get opacityFresnelParameters() {
            return (0, Ab.c)(this, Cb, "f")
          }
          set opacityFresnelParameters(bb) {
            (0, Ab.e)(this, Cb, bb, "f")
          }
          get reflectionFresnelParameters() {
            return (0, Ab.c)(this, Vb, "f")
          }
          set reflectionFresnelParameters(bb) {
            (0, Ab.e)(this, Vb, bb, "f")
          }
          get refractionFresnelParameters() {
            return (0, Ab.c)(this, Ob, "f")
          }
          set refractionFresnelParameters(bb) {
            (0, Ab.e)(this, Ob, bb, "f")
          }
          get emissiveFresnelParameters() {
            return (0, Ab.c)(this, cb, "f")
          }
          set emissiveFresnelParameters(bb) {
            (0, Ab.e)(this, cb, bb, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, Ab.c)(this, Jb, "f")
          }
          set useReflectionFresnelFromSpecular(bb) {
            (0, Ab.e)(this, Jb, bb, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, Ab.c)(this, nb, "f")
          }
          set useGlossinessFromSpecularMapAlpha(bb) {
            (0, Ab.e)(this, nb, bb, "f")
          }
          get maxSimultaneousLights() {
            return (0, Ab.c)(this, Sb, "f")
          }
          set maxSimultaneousLights(bb) {
            (0, Ab.e)(this, Sb, bb, "f")
          }
          get invertNormalMapX() {
            return (0, Ab.c)(this, ba, "f")
          }
          set invertNormalMapX(bb) {
            (0, Ab.e)(this, ba, bb, "f")
          }
          get invertNormalMapY() {
            return (0, Ab.c)(this, aa, "f")
          }
          set invertNormalMapY(bb) {
            (0, Ab.e)(this, aa, bb, "f")
          }
          get twoSidedLighting() {
            return (0, Ab.c)(this, Ua, "f")
          }
          set twoSidedLighting(bb) {
            (0, Ab.e)(this, Ua, bb, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Ab.c)(this, Aa, "f")
          }
          set applyDecalMapAfterDetailMap(bb) {
            (0, Ab.e)(this, Aa, bb, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(Ub, Mb) {
            super(Ub, Mb, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || bb.ForceGLSL), this._diffuseTexture = (0, Ab.k)(this, NU, null), ab.set(this, ((0, Ab.k)(this, WU), (0, Ab.k)(this, HU, void 0))), this._ambientTexture = ((0, Ab.k)(this, IU), (0, Ab.k)(this, dU, null)), vb.set(this, ((0, Ab.k)(this, FU), (0, Ab.k)(this, hU, void 0))), this._opacityTexture = ((0, Ab.k)(this, GU), (0, Ab.k)(this, QU, null)), Xb.set(this, ((0, Ab.k)(this, qU), (0, Ab.k)(this, uU, void 0))), this._reflectionTexture = ((0, Ab.k)(this, rU), (0, Ab.k)(this, KU, null)), mb.set(this, ((0, Ab.k)(this, oU), (0, Ab.k)(this, lU, void 0))), this._emissiveTexture = ((0, Ab.k)(this, tU), (0, Ab.k)(this, wU, null)), pb.set(this, ((0, Ab.k)(this, sU), (0, Ab.k)(this, gU, void 0))), this._specularTexture = ((0, Ab.k)(this, CU), (0, Ab.k)(this, VU, null)), Nb.set(this, ((0, Ab.k)(this, OU), (0, Ab.k)(this, cU, void 0))), this._bumpTexture = ((0, Ab.k)(this, JU), (0, Ab.k)(this, nU, null)), Wb.set(this, ((0, Ab.k)(this, SU), (0, Ab.k)(this, bA, void 0))), this._lightmapTexture = ((0, Ab.k)(this, aA), (0, Ab.k)(this, UA, null)), Hb.set(this, ((0, Ab.k)(this, AA), (0, Ab.k)(this, MA, void 0))), this._refractionTexture = ((0, Ab.k)(this, TA), (0, Ab.k)(this, EA, null)), db.set(this, ((0, Ab.k)(this, YA), (0, Ab.k)(this, BA, void 0))), this.ambientColor = ((0, Ab.k)(this, eA), (0, Ab.k)(this, vA, new Yb.c(0, 0, 0))), this.diffuseColor = ((0, Ab.k)(this, LA), (0, Ab.k)(this, PA, new Yb.c(1, 1, 1))), this.specularColor = ((0, Ab.k)(this, XA), (0, Ab.k)(this, jA, new Yb.c(1, 1, 1))), this.emissiveColor = ((0, Ab.k)(this, RA), (0, Ab.k)(this, kA, new Yb.c(0, 0, 0))), this.specularPower = ((0, Ab.k)(this, yA), (0, Ab.k)(this, ZA, 64)), this._useAlphaFromDiffuseTexture = ((0, Ab.k)(this, DA), (0, Ab.k)(this, zA, !1)), Gb.set(this, ((0, Ab.k)(this, xA), (0, Ab.k)(this, iA, void 0))), this._useEmissiveAsIllumination = ((0, Ab.k)(this, fA), (0, Ab.k)(this, mA, !1)), Qb.set(this, ((0, Ab.k)(this, pA), (0, Ab.k)(this, NA, void 0))), this._linkEmissiveWithDiffuse = ((0, Ab.k)(this, WA), (0, Ab.k)(this, HA, !1)), qb.set(this, ((0, Ab.k)(this, IA), (0, Ab.k)(this, dA, void 0))), this._useSpecularOverAlpha = ((0, Ab.k)(this, FA), (0, Ab.k)(this, hA, !1)), ub.set(this, ((0, Ab.k)(this, GA), (0, Ab.k)(this, QA, void 0))), this._useReflectionOverAlpha = ((0, Ab.k)(this, qA), (0, Ab.k)(this, uA, !1)), rb.set(this, ((0, Ab.k)(this, rA), (0, Ab.k)(this, KA, void 0))), this._disableLighting = ((0, Ab.k)(this, oA), (0, Ab.k)(this, lA, !1)), Kb.set(this, ((0, Ab.k)(this, tA), (0, Ab.k)(this, wA, void 0))), this._useObjectSpaceNormalMap = ((0, Ab.k)(this, sA), (0, Ab.k)(this, gA, !1)), ob.set(this, ((0, Ab.k)(this, CA), (0, Ab.k)(this, VA, void 0))), this._useParallax = ((0, Ab.k)(this, OA), (0, Ab.k)(this, cA, !1)), lb.set(this, ((0, Ab.k)(this, JA), (0, Ab.k)(this, nA, void 0))), this._useParallaxOcclusion = ((0, Ab.k)(this, SA), (0, Ab.k)(this, bM, !1)), tb.set(this, ((0, Ab.k)(this, aM), (0, Ab.k)(this, UM, void 0))), this.parallaxScaleBias = ((0, Ab.k)(this, AM), (0, Ab.k)(this, MM, .05)), this._roughness = ((0, Ab.k)(this, TM), (0, Ab.k)(this, EM, 0)), wb.set(this, ((0, Ab.k)(this, YM), (0, Ab.k)(this, BM, void 0))), this.indexOfRefraction = ((0, Ab.k)(this, eM), (0, Ab.k)(this, vM, .98)), this.invertRefractionY = ((0, Ab.k)(this, LM), (0, Ab.k)(this, PM, !0)), this.alphaCutOff = ((0, Ab.k)(this, XM), (0, Ab.k)(this, jM, .4)), this._useLightmapAsShadowmap = ((0, Ab.k)(this, RM), (0, Ab.k)(this, kM, !1)), sb.set(this, ((0, Ab.k)(this, yM), (0, Ab.k)(this, ZM, void 0))), this._diffuseFresnelParameters = ((0, Ab.k)(this, DM), (0, Ab.k)(this, zM, void 0)), gb.set(this, ((0, Ab.k)(this, xM), (0, Ab.k)(this, iM, void 0))), this._opacityFresnelParameters = ((0, Ab.k)(this, fM), (0, Ab.k)(this, mM, void 0)), Cb.set(this, ((0, Ab.k)(this, pM), (0, Ab.k)(this, NM, void 0))), this._reflectionFresnelParameters = ((0, Ab.k)(this, WM), (0, Ab.k)(this, HM, void 0)), Vb.set(this, ((0, Ab.k)(this, IM), (0, Ab.k)(this, dM, void 0))), this._refractionFresnelParameters = ((0, Ab.k)(this, FM), (0, Ab.k)(this, hM, void 0)), Ob.set(this, ((0, Ab.k)(this, GM), (0, Ab.k)(this, QM, void 0))), this._emissiveFresnelParameters = ((0, Ab.k)(this, qM), (0, Ab.k)(this, uM, void 0)), cb.set(this, ((0, Ab.k)(this, rM), (0, Ab.k)(this, KM, void 0))), this._useReflectionFresnelFromSpecular = ((0, Ab.k)(this, oM), (0, Ab.k)(this, lM, !1)), Jb.set(this, ((0, Ab.k)(this, tM), (0, Ab.k)(this, wM, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, Ab.k)(this, sM), (0, Ab.k)(this, gM, !1)), nb.set(this, ((0, Ab.k)(this, CM), (0, Ab.k)(this, VM, void 0))), this._maxSimultaneousLights = ((0, Ab.k)(this, OM), (0, Ab.k)(this, cM, 4)), Sb.set(this, ((0, Ab.k)(this, JM), (0, Ab.k)(this, nM, void 0))), this._invertNormalMapX = ((0, Ab.k)(this, SM), (0, Ab.k)(this, bT, !1)), ba.set(this, ((0, Ab.k)(this, aT), (0, Ab.k)(this, UT, void 0))), this._invertNormalMapY = ((0, Ab.k)(this, AT), (0, Ab.k)(this, MT, !1)), aa.set(this, ((0, Ab.k)(this, TT), (0, Ab.k)(this, ET, void 0))), this._twoSidedLighting = ((0, Ab.k)(this, YT), (0, Ab.k)(this, BT, !1)), Ua.set(this, ((0, Ab.k)(this, eT), (0, Ab.k)(this, vT, void 0))), this._applyDecalMapAfterDetailMap = ((0, Ab.k)(this, LT), (0, Ab.k)(this, PT, !1)), Aa.set(this, ((0, Ab.k)(this, XT), (0, Ab.k)(this, jT, void 0))), this._vertexPullingMetadata = ((0, Ab.k)(this, RT), null), this._renderTargets = new Tb.h(16), this._globalAmbientColor = new Yb.c(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new yb.c(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new eb.d, this.getRenderTargetTextures = () => (this._renderTargets.reset(), bb.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), bb.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
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
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === Pb.d.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== Pb.d.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(ab, Ub) {
            let Ab = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Mb = Ub._drawWrapper;
            if (Mb.effect && this.isFrozen && Mb._wasPreviouslyReady && Mb._wasPreviouslyUsingInstances === Ab) return !0;
            Ub.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Ub.materialDefines = new Fb(this._eventInfo.defineNames));
            const Tb = this.oN(),
              Eb = Ub.materialDefines;
            if (this._isReadyForSubMesh(Ub)) return !0;
            const Yb = Tb.vj();
            if (Eb._needNormals = (0, zb._)(Tb, ab, Eb, !0, this._maxSimultaneousLights, this._disableLighting), !(0, zb.d)(Tb, ab, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, zb.db)(Tb, Eb);
            const vb = this.needAlphaBlendingForMesh(ab) && this.oN().useOrderIndependentTransparency;
            if ((0, zb.gb)(Tb, Eb, this.canRenderToMRT && !vb), (0, zb.fb)(Tb, Eb, vb), fb.d.PrepareDefines(Yb.currentRenderPassId, ab, Eb), Eb._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Eb._needUVs = !1;
              for (let bb = 1; bb <= 6; ++bb) Eb["MAINUV" + bb] = !1;
              if (Tb.texturesEnabled) {
                if (Eb.DIFFUSEDIRECTUV = 0, Eb.BUMPDIRECTUV = 0, Eb.AMBIENTDIRECTUV = 0, Eb.OPACITYDIRECTUV = 0, Eb.EMISSIVEDIRECTUV = 0, Eb.SPECULARDIRECTUV = 0, Eb.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && bb.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, zb.$)(this._diffuseTexture, Eb, "DIFFUSE")
                } else Eb.DIFFUSE = !1;
                if (this._ambientTexture && bb.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, zb.$)(this._ambientTexture, Eb, "AMBIENT")
                } else Eb.AMBIENT = !1;
                if (this._opacityTexture && bb.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, zb.$)(this._opacityTexture, Eb, "OPACITY"), Eb.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else Eb.OPACITY = !1;
                if (this._reflectionTexture && bb.ReflectionTextureEnabled ? (Eb.ROUGHNESS = this._roughness > 0, Eb.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (Eb.ROUGHNESS = !1, Eb.REFLECTIONOVERALPHA = !1), !(0, zb.W)(Tb, this._reflectionTexture, Eb)) return !1;
                if (this._emissiveTexture && bb.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, zb.$)(this._emissiveTexture, Eb, "EMISSIVE")
                } else Eb.EMISSIVE = !1;
                if (this._lightmapTexture && bb.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, zb.$)(this._lightmapTexture, Eb, "LIGHTMAP"), Eb.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Eb.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else Eb.LIGHTMAP = !1;
                if (this._specularTexture && bb.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, zb.$)(this._specularTexture, Eb, "SPECULAR"), Eb.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else Eb.SPECULAR = !1;
                if (Tb.vj().getCaps().standardDerivatives && this._bumpTexture && bb.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, zb.$)(this._bumpTexture, Eb, "BUMP"), Eb.PARALLAX = this._useParallax, Eb.PARALLAX_RHS = Tb.useRightHandedSystem, Eb.PARALLAXOCCLUSION = this._useParallaxOcclusion, Eb.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else Eb.BUMP = !1, Eb.PARALLAX = !1, Eb.PARALLAX_RHS = !1, Eb.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && bb.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  Eb._needUVs = !0, Eb.REFRACTION = !0, Eb.REFRACTIONMAP_3D = this._refractionTexture.isCube, Eb.RGBDREFRACTION = this._refractionTexture.isRGBD, Eb.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else Eb.REFRACTION = !1;
                Eb.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else Eb.DIFFUSE = !1, Eb.AMBIENT = !1, Eb.OPACITY = !1, Eb.REFLECTION = !1, Eb.EMISSIVE = !1, Eb.LIGHTMAP = !1, Eb.BUMP = !1, Eb.REFRACTION = !1;
              Eb.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), Eb.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, Eb.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, Eb.SPECULAROVERALPHA = this._useSpecularOverAlpha, Eb.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Eb.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, Eb.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(ab), Eb.TEXTURE_REPETITION_MODE = Yb.version > 1 || Yb.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Eb, this._eventInfo.subMesh = Ub, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Eb._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(Eb), Eb.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, Eb.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (Eb._areFresnelDirty && (bb.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (Eb.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, Eb.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, Eb.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, Eb.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, Eb.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, Eb.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, Eb._needNormals = !0, Eb.FRESNEL = !0) : Eb.FRESNEL = !1), Eb.AREALIGHTUSED || Eb.CLUSTLIGHT_BATCH)
              for (let bb = 0; bb < ab.lightSources.length; bb++)
                if (!ab.lightSources[bb]._isReady()) return !1;
            (0, zb.bb)(ab, Tb, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(ab), Eb, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Ub.getRenderingMesh(), this._isVertexOutputInvariant), (0, zb.S)(Tb, Yb, this, Eb, Ab, null, Ub.getRenderingMesh().hasThinInstances), this._eventInfo.defines = Eb, this._eventInfo.mesh = ab, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, zb.R)(ab, Eb, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let Pb = !1;
            if (Eb.isDirty) {
              const Ab = Eb._areLightsDisposed;
              Eb.markAsProcessed();
              const Mb = new kb.d;
              Eb.REFLECTION && Mb.addFallback(0, "REFLECTION"), Eb.SPECULAR && Mb.addFallback(0, "SPECULAR"), Eb.BUMP && Mb.addFallback(0, "BUMP"), Eb.PARALLAX && Mb.addFallback(1, "PARALLAX"), Eb.PARALLAX_RHS && Mb.addFallback(1, "PARALLAX_RHS"), Eb.PARALLAXOCCLUSION && Mb.addFallback(0, "PARALLAXOCCLUSION"), Eb.SPECULAROVERALPHA && Mb.addFallback(0, "SPECULAROVERALPHA"), Eb.FOG && Mb.addFallback(1, "FOG"), Eb.POINTSIZE && Mb.addFallback(0, "POINTSIZE"), Eb.LOGARITHMICDEPTH && Mb.addFallback(0, "LOGARITHMICDEPTH"), (0, zb.y)(Eb, Mb, this._maxSimultaneousLights), Eb.SPECULARTERM && Mb.addFallback(0, "SPECULARTERM"), Eb.DIFFUSEFRESNEL && Mb.addFallback(1, "DIFFUSEFRESNEL"), Eb.OPACITYFRESNEL && Mb.addFallback(2, "OPACITYFRESNEL"), Eb.REFLECTIONFRESNEL && Mb.addFallback(3, "REFLECTIONFRESNEL"), Eb.EMISSIVEFRESNEL && Mb.addFallback(4, "EMISSIVEFRESNEL"), Eb.FRESNEL && Mb.addFallback(4, "FRESNEL"), Eb.MULTIVIEW && Mb.addFallback(0, "MULTIVIEW");
              const vb = [Bb.m.PositionKind];
              Eb.NORMAL && vb.push(Bb.m.NormalKind), Eb.TANGENT && vb.push(Bb.m.TangentKind);
              for (let bb = 1; bb <= 6; ++bb) Eb["UV" + bb] && vb.push(`uv${1===bb?"":bb}`);
              Eb.VERTEXCOLOR && vb.push(Bb.m.ColorKind), (0, zb.F)(vb, ab, Eb, Mb), (0, zb.H)(vb, Eb), (0, zb.J)(vb, ab, Eb), (0, zb.B)(vb, ab, Eb);
              let Xb = "default";
              const jb = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                Rb = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, zb.ob)(jb, Rb, !1);
              const yb = ["Material", "Scene", "Mesh"],
                xb = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: Eb.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = Mb, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = Eb, this._eventInfo.uniforms = jb, this._eventInfo.attributes = vb, this._eventInfo.samplers = Rb, this._eventInfo.uniformBuffersNames = yb, this._eventInfo.customCode = void 0, this._eventInfo.mesh = ab, this._eventInfo.indexParameters = xb, this._callbackPluginEventGeneric(128, this._eventInfo), fb.d.AddUniformsAndSamplers(jb, Rb), eb.d.AddUniforms(jb), eb.d.AddSamplers(Rb), Lb.d && (Lb.d.PrepareUniforms(jb, Eb), Lb.d.PrepareSamplers(Rb, Eb)), (0, zb.rb)({
                  uniformsNames: jb,
                  uniformBuffersNames: yb,
                  samplers: Rb,
                  defines: Eb,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, Zb.e)(jb), this._useVertexPulling) {
                const bb = Ub.getRenderingMesh(),
                  ab = bb?.geometry;
                ab && (this._vertexPullingMetadata = (0, Db.g)(ab), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((bb, ab) => {
                  jb.push(`vp_${ab}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const ib = {};
              this.customShaderNameResolve && (Xb = this.customShaderNameResolve(Xb, jb, yb, Rb, Eb, vb, ib));
              const mb = Eb.toString(),
                pb = Ub.effect,
                Nb = Tb.vj().createEffect(Xb, {
                  attributes: vb,
                  uniformsNames: jb,
                  uniformBuffersNames: yb,
                  samplers: Rb,
                  defines: mb,
                  fallbacks: Mb,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: xb,
                  processFinalCode: ib.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: Eb.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: bb._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, Yb);
              if (this._eventInfo.customCode = void 0, Nb)
                if (this._onEffectCreatedObservable && (Ib.effect = Nb, Ib.subMesh = Ub, this._onEffectCreatedObservable.notifyObservers(Ib)), this.allowShaderHotSwapping && pb && !Nb.isReady()) {
                  if (Eb.markAsUnprocessed(), Pb = this.isFrozen, Ab) return Eb._areLightsDisposed = !0, !1
                } else Tb.resetCachedMaterial(), Ub.setEffect(Nb, Eb, this._materialContext)
            }
            return !(!Ub.effect || !Ub.effect.isReady()) && (Eb._renderId = Tb.getRenderId(), Mb._wasPreviouslyReady = !Pb, Mb._wasPreviouslyUsingInstances = Ab, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const bb = this._uniformBuffer;
            bb.addUniform("diffuseLeftColor", 4), bb.addUniform("diffuseRightColor", 4), bb.addUniform("opacityParts", 4), bb.addUniform("reflectionLeftColor", 4), bb.addUniform("reflectionRightColor", 4), bb.addUniform("refractionLeftColor", 4), bb.addUniform("refractionRightColor", 4), bb.addUniform("emissiveLeftColor", 4), bb.addUniform("emissiveRightColor", 4), bb.addUniform("vDiffuseInfos", 2), bb.addUniform("vAmbientInfos", 2), bb.addUniform("vOpacityInfos", 2), bb.addUniform("vEmissiveInfos", 2), bb.addUniform("vLightmapInfos", 2), bb.addUniform("vSpecularInfos", 2), bb.addUniform("vBumpInfos", 3), bb.addUniform("diffuseMatrix", 16), bb.addUniform("ambientMatrix", 16), bb.addUniform("opacityMatrix", 16), bb.addUniform("emissiveMatrix", 16), bb.addUniform("lightmapMatrix", 16), bb.addUniform("specularMatrix", 16), bb.addUniform("bumpMatrix", 16), bb.addUniform("vTangentSpaceParams", 2), bb.addUniform("pointSize", 1), bb.addUniform("alphaCutOff", 1), bb.addUniform("refractionMatrix", 16), bb.addUniform("vRefractionInfos", 4), bb.addUniform("vRefractionPosition", 3), bb.addUniform("vRefractionSize", 3), bb.addUniform("vSpecularColor", 4), bb.addUniform("vEmissiveColor", 3), bb.addUniform("vDiffuseColor", 4), bb.addUniform("vAmbientColor", 3), bb.addUniform("cameraInfo", 4), bb.addUniform("vTextureRepetitionHexTilingParams", 4), (0, zb.kb)(bb, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(ab, Ub, Ab) {
            const Mb = this.oN(),
              Tb = Ab.materialDefines;
            if (!Tb) return;
            const Bb = Ab.effect;
            if (!Bb) return;
            this._activeEffect = Bb, Ub.getMeshUniformBuffer().bindToEffect(Bb, "Mesh"), Ub.transferToEffect(ab), this._uniformBuffer.bindToEffect(Bb, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Mb, Ub, ab, this.isFrozen), fb.d.Bind(Mb.vj().currentRenderPassId, this._activeEffect, Ub, ab, this);
            const eb = Mb.activeCamera;
            eb ? this._uniformBuffer.updateFloat4("cameraInfo", eb.minZ, eb.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const vb = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", vb[0], vb[1], vb[2], vb[3]), this._eventInfo.subMesh = Ab, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Tb.OBJECTSPACE_NORMALMAP && (ab.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Lb = this._mustRebind(Mb, Bb, Ab, Ub.visibility),
              Pb = Mb.vj()._features.needToAlwaysBindUniformBuffers;
            (0, zb.h)(Ub, Bb), this._vertexPullingMetadata && (0, Db.e)(Bb, this._vertexPullingMetadata);
            const Xb = this._uniformBuffer;
            if (Lb) {
              if (this.bindViewProjection(Bb), !Xb.useUbo || !this.isFrozen || !Xb.isSync || Ab._drawWrapper._forceRebindOnNextCall) {
                if (bb.FresnelEnabled && Tb.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (Xb.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), Xb.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const bb = Yb.m.Color3[0];
                    bb.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), Xb.updateColor4("opacityParts", bb, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (Xb.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), Xb.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (Xb.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), Xb.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (Xb.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), Xb.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (Tb.ALPHATEST && Xb.updateFloat("alphaCutOff", this.alphaCutOff), Mb.texturesEnabled && (this._diffuseTexture && bb.DiffuseTextureEnabled && (Xb.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, zb.x)(this._diffuseTexture, Xb, "diffuse")), this._ambientTexture && bb.AmbientTextureEnabled && (Xb.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, zb.x)(this._ambientTexture, Xb, "ambient")), this._opacityTexture && bb.OpacityTextureEnabled && (Xb.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, zb.x)(this._opacityTexture, Xb, "opacity")), (0, zb.m)(Mb, Tb, Xb, Yb.c.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && bb.ReflectionTextureEnabled || Xb.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && bb.EmissiveTextureEnabled && (Xb.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, zb.x)(this._emissiveTexture, Xb, "emissive")), this._lightmapTexture && bb.LightmapTextureEnabled && (Xb.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, zb.x)(this._lightmapTexture, Xb, "lightmap")), this._specularTexture && bb.SpecularTextureEnabled && (Xb.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, zb.x)(this._specularTexture, Xb, "specular")), this._bumpTexture && Mb.vj().getCaps().standardDerivatives && bb.BumpTextureEnabled && (Xb.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, zb.x)(this._bumpTexture, Xb, "bump"), Mb._mirroredCameraPosition ? Xb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Xb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && bb.RefractionTextureEnabled)) {
                  let bb = 1;
                  if (this._refractionTexture.isCube || (Xb.i5("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (bb = this._refractionTexture.depth)), Xb.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, bb, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const bb = this._refractionTexture;
                    Xb.updateVector3("vRefractionPosition", bb.boundingBoxPosition), Xb.updateVector3("vRefractionSize", bb.boundingBoxSize)
                  }
                }
                this.pointsCloud && Xb.updateFloat("pointSize", this.pointSize), Xb.updateColor4("vSpecularColor", this.specularColor, this.specularPower), Xb.updateColor3("vEmissiveColor", bb.EmissiveTextureEnabled ? this.emissiveColor : Yb.c.BlackReadOnly), Xb.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), Mb.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), Xb.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              Mb.texturesEnabled && (this._diffuseTexture && bb.DiffuseTextureEnabled && Bb.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && bb.AmbientTextureEnabled && Bb.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && bb.OpacityTextureEnabled && Bb.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && bb.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? Bb.setTexture("reflectionCubeSampler", this._reflectionTexture) : Bb.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && bb.EmissiveTextureEnabled && Bb.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && bb.LightmapTextureEnabled && Bb.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && bb.SpecularTextureEnabled && Bb.setTexture("specularSampler", this._specularTexture), this._bumpTexture && Mb.vj().getCaps().standardDerivatives && bb.BumpTextureEnabled && Bb.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && bb.RefractionTextureEnabled && (this._refractionTexture.isCube ? Bb.setTexture("refractionCubeSampler", this._refractionTexture) : Bb.setTexture("refraction2DSampler", this._refractionTexture))), this.oN().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Ub) && this.oN().depthPeelingRenderer.bind(Bb), this._eventInfo.subMesh = Ab, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Zb.f)(Bb, this, Mb), this.bindEyePosition(Bb)
            } else Pb && (this._needToBindSceneUbo = !0);
            !Lb && this.isFrozen && !Pb || !Mb.lightsEnabled || this._disableLighting || (0, zb.s)(Mb, Ub, Bb, Tb, this._maxSimultaneousLights), !Lb && this.isFrozen || ((Mb.fogEnabled && Ub.applyFog && Mb.fogMode !== Eb.e.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || Ub.receiveShadows || Tb.PREPASS || Tb.CLUSTLIGHT_BATCH) && this.bindView(Bb), (0, zb.l)(Mb, Ub, Bb), Tb.NUM_MORPH_INFLUENCERS && (0, zb.v)(Ub, Bb), Tb.BAKED_VERTEX_ANIMATION_TEXTURE && Ub.bakedVertexAnimationManager?.bind(Bb, Tb.INSTANCES), this.useLogarithmicDepth && (0, zb.u)(Tb, Bb, Mb), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(Ub, this._activeEffect, Ab), Xb.update()
          }
          _canBindRunFollower(ab, Ub, Ab, Mb, Tb) {
            const Eb = ab.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === bb.prototype.isReadyForSubMesh && this.bindForSubMesh === bb.prototype.bindForSubMesh && this._mustRebind === jb.d.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !Ub._features.needToAlwaysBindUniformBuffers && !(Eb && Eb.enabled && Eb.currentRTisSceneRT) && !fb.d._Configurations[Ub.currentRenderPassId] && !Mb.materialDefines?.OBJECTSPACE_NORMALMAP && !Ab.skeleton && !Tb._bonesComputationForcedToCPU
          }
          _bindRunFollower(bb, ab, Ub, Ab) {
            this._activeEffect = Ab, ab.getMeshUniformBuffer().bindToEffect(Ab, "Mesh"), ab.transferToEffect(bb);
            const Mb = this._uniformBuffer;
            Mb.bindToEffect(Ab, "Material");
            const Tb = this._scene.activeCamera;
            Tb ? Mb.updateFloat4("cameraInfo", Tb.minZ, Tb.maxZ, 0, 0) : Mb.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Eb = this.textureRepetitionHexTilingParams;
            Mb.updateFloat4("vTextureRepetitionHexTilingParams", Eb[0], Eb[1], Eb[2], Eb[3]), this._afterBind(ab, Ab, Ub), Mb.update()
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
          dispose(bb, ab) {
            ab && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(bb, ab)
          }
          clone(ab) {
            let Ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Mb = xb.b.Clone((() => new bb(ab, this.oN())), this, {
              cloneTexturesOnlyOnce: Ub
            });
            return Mb.name = ab, Mb.id = ab, this.stencil.copyTo(Mb.stencil), this._clonePlugins(Mb, Ab), Mb
          }
          static Parse(ab, Ub, Ab) {
            const Mb = xb.b.Parse((() => new bb(ab.name, Ub)), ab, Ub, Ab);
            return ab.stencil && Mb.stencil.parse(ab.stencil, Ub, Ab), Pb.d._ParsePlugins(ab, Mb, Ub, Ab), Mb
          }
          static get DiffuseTextureEnabled() {
            return Rb.c.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(bb) {
            Rb.c.DiffuseTextureEnabled = bb
          }
          static get DetailTextureEnabled() {
            return Rb.c.DetailTextureEnabled
          }
          static set DetailTextureEnabled(bb) {
            Rb.c.DetailTextureEnabled = bb
          }
          static get AmbientTextureEnabled() {
            return Rb.c.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(bb) {
            Rb.c.AmbientTextureEnabled = bb
          }
          static get OpacityTextureEnabled() {
            return Rb.c.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(bb) {
            Rb.c.OpacityTextureEnabled = bb
          }
          static get ReflectionTextureEnabled() {
            return Rb.c.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(bb) {
            Rb.c.ReflectionTextureEnabled = bb
          }
          static get EmissiveTextureEnabled() {
            return Rb.c.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(bb) {
            Rb.c.EmissiveTextureEnabled = bb
          }
          static get SpecularTextureEnabled() {
            return Rb.c.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(bb) {
            Rb.c.SpecularTextureEnabled = bb
          }
          static get BumpTextureEnabled() {
            return Rb.c.BumpTextureEnabled
          }
          static set BumpTextureEnabled(bb) {
            Rb.c.BumpTextureEnabled = bb
          }
          static get LightmapTextureEnabled() {
            return Rb.c.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(bb) {
            Rb.c.LightmapTextureEnabled = bb
          }
          static get RefractionTextureEnabled() {
            return Rb.c.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(bb) {
            Rb.c.RefractionTextureEnabled = bb
          }
          static get ColorGradingTextureEnabled() {
            return Rb.c.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(bb) {
            Rb.c.ColorGradingTextureEnabled = bb
          }
          static get FresnelEnabled() {
            return Rb.c.FresnelEnabled
          }
          static set FresnelEnabled(bb) {
            Rb.c.FresnelEnabled = bb
          }
        }, ab = new WeakMap, vb = new WeakMap, Xb = new WeakMap, mb = new WeakMap, pb = new WeakMap, Nb = new WeakMap, Wb = new WeakMap, Hb = new WeakMap, db = new WeakMap, Gb = new WeakMap, Qb = new WeakMap, qb = new WeakMap, ub = new WeakMap, rb = new WeakMap, Kb = new WeakMap, ob = new WeakMap, lb = new WeakMap, tb = new WeakMap, wb = new WeakMap, sb = new WeakMap, gb = new WeakMap, Cb = new WeakMap, Vb = new WeakMap, Ob = new WeakMap, cb = new WeakMap, Jb = new WeakMap, nb = new WeakMap, Sb = new WeakMap, ba = new WeakMap, aa = new WeakMap, Ua = new WeakMap, Aa = new WeakMap, (() => {
          const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(pU[Symbol.metadata] ?? null) : void 0;
          Ma = [(0, Mb.D)("diffuseTexture")], Ta = [(0, Mb.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ea = [(0, Mb.D)("ambientTexture")], Ya = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], Ba = [(0, Mb.D)("opacityTexture")], ea = [(0, Mb.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], va = [(0, Mb.D)("reflectionTexture")], La = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], Pa = [(0, Mb.D)("emissiveTexture")], Xa = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], ja = [(0, Mb.D)("specularTexture")], Ra = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], ka = [(0, Mb.D)("bumpTexture")], ya = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], Za = [(0, Mb.D)("lightmapTexture")], Da = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], za = [(0, Mb.D)("refractionTexture")], xa = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], ia = [(0, Mb.k)("ambient")], fa = [(0, Mb.k)("diffuse")], ma = [(0, Mb.k)("specular")], pa = [(0, Mb.k)("emissive")], Na = [(0, Mb.K)()], Wa = [(0, Mb.K)("useAlphaFromDiffuseTexture")], Ha = [() => ({
            init(bb) {
              return void 0 === bb && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = bb), bb
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(bb) {
              this._useAlphaFromDiffuseTexture = bb
            }
          })], Ia = [(0, Mb.K)("useEmissiveAsIllumination")], da = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], Fa = [(0, Mb.K)("linkEmissiveWithDiffuse")], ha = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], Ga = [(0, Mb.K)("useSpecularOverAlpha")], Qa = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], qa = [(0, Mb.K)("useReflectionOverAlpha")], ua = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], ra = [(0, Mb.K)("disableLighting")], Ka = [(0, Mb.e)("_markAllSubMeshesAsLightsDirty")], oa = [(0, Mb.K)("useObjectSpaceNormalMap")], la = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], ta = [(0, Mb.K)("useParallax")], wa = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], sa = [(0, Mb.K)("useParallaxOcclusion")], ga = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], Ca = [(0, Mb.K)()], Va = [(0, Mb.K)("roughness")], Oa = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], ca = [(0, Mb.K)()], Ja = [(0, Mb.K)()], na = [(0, Mb.K)()], Sa = [(0, Mb.K)("useLightmapAsShadowmap")], bU = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], aU = [(0, Mb.q)("diffuseFresnelParameters")], UU = [(0, Mb.e)("_markAllSubMeshesAsFresnelDirty")], AU = [(0, Mb.q)("opacityFresnelParameters")], MU = [(0, Mb.e)("_markAllSubMeshesAsFresnelAndMiscDirty")], TU = [(0, Mb.q)("reflectionFresnelParameters")], EU = [(0, Mb.e)("_markAllSubMeshesAsFresnelDirty")], YU = [(0, Mb.q)("refractionFresnelParameters")], BU = [(0, Mb.e)("_markAllSubMeshesAsFresnelDirty")], eU = [(0, Mb.q)("emissiveFresnelParameters")], vU = [(0, Mb.e)("_markAllSubMeshesAsFresnelDirty")], LU = [(0, Mb.K)("useReflectionFresnelFromSpecular")], PU = [(0, Mb.e)("_markAllSubMeshesAsFresnelDirty")], XU = [(0, Mb.K)("useGlossinessFromSpecularMapAlpha")], jU = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], RU = [(0, Mb.K)("maxSimultaneousLights")], kU = [(0, Mb.e)("_markAllSubMeshesAsLightsDirty")], yU = [(0, Mb.K)("invertNormalMapX")], ZU = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], DU = [(0, Mb.K)("invertNormalMapY")], zU = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], xU = [(0, Mb.K)("twoSidedLighting")], iU = [(0, Mb.e)("_markAllSubMeshesAsTexturesDirty")], fU = [(0, Mb.K)("applyDecalMapAfterDetailMap")], mU = [(0, Mb.e)("_markAllSubMeshesAsMiscDirty")], (0, Ab.h)(bb, null, Ta, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "diffuseTexture" in bb,
              get: bb => bb.diffuseTexture,
              set: (bb, ab) => {
                bb.diffuseTexture = ab
              }
            },
            metadata: ab
          }, HU, IU), (0, Ab.h)(bb, null, Ya, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "ambientTexture" in bb,
              get: bb => bb.ambientTexture,
              set: (bb, ab) => {
                bb.ambientTexture = ab
              }
            },
            metadata: ab
          }, hU, GU), (0, Ab.h)(bb, null, ea, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "opacityTexture" in bb,
              get: bb => bb.opacityTexture,
              set: (bb, ab) => {
                bb.opacityTexture = ab
              }
            },
            metadata: ab
          }, uU, rU), (0, Ab.h)(bb, null, La, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "reflectionTexture" in bb,
              get: bb => bb.reflectionTexture,
              set: (bb, ab) => {
                bb.reflectionTexture = ab
              }
            },
            metadata: ab
          }, lU, tU), (0, Ab.h)(bb, null, Xa, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissiveTexture" in bb,
              get: bb => bb.emissiveTexture,
              set: (bb, ab) => {
                bb.emissiveTexture = ab
              }
            },
            metadata: ab
          }, gU, CU), (0, Ab.h)(bb, null, Ra, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularTexture" in bb,
              get: bb => bb.specularTexture,
              set: (bb, ab) => {
                bb.specularTexture = ab
              }
            },
            metadata: ab
          }, cU, JU), (0, Ab.h)(bb, null, ya, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "bumpTexture" in bb,
              get: bb => bb.bumpTexture,
              set: (bb, ab) => {
                bb.bumpTexture = ab
              }
            },
            metadata: ab
          }, bA, aA), (0, Ab.h)(bb, null, Da, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "lightmapTexture" in bb,
              get: bb => bb.lightmapTexture,
              set: (bb, ab) => {
                bb.lightmapTexture = ab
              }
            },
            metadata: ab
          }, MA, TA), (0, Ab.h)(bb, null, xa, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "refractionTexture" in bb,
              get: bb => bb.refractionTexture,
              set: (bb, ab) => {
                bb.refractionTexture = ab
              }
            },
            metadata: ab
          }, BA, eA), (0, Ab.h)(bb, null, Ha, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "useAlphaFromDiffuseTexture" in bb,
              get: bb => bb.useAlphaFromDiffuseTexture,
              set: (bb, ab) => {
                bb.useAlphaFromDiffuseTexture = ab
              }
            },
            metadata: ab
          }, iA, fA), (0, Ab.h)(bb, null, da, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: bb => "useEmissiveAsIllumination" in bb,
              get: bb => bb.useEmissiveAsIllumination,
              set: (bb, ab) => {
                bb.useEmissiveAsIllumination = ab
              }
            },
            metadata: ab
          }, NA, WA), (0, Ab.h)(bb, null, ha, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: bb => "linkEmissiveWithDiffuse" in bb,
              get: bb => bb.linkEmissiveWithDiffuse,
              set: (bb, ab) => {
                bb.linkEmissiveWithDiffuse = ab
              }
            },
            metadata: ab
          }, dA, FA), (0, Ab.h)(bb, null, Qa, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "useSpecularOverAlpha" in bb,
              get: bb => bb.useSpecularOverAlpha,
              set: (bb, ab) => {
                bb.useSpecularOverAlpha = ab
              }
            },
            metadata: ab
          }, QA, qA), (0, Ab.h)(bb, null, ua, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "useReflectionOverAlpha" in bb,
              get: bb => bb.useReflectionOverAlpha,
              set: (bb, ab) => {
                bb.useReflectionOverAlpha = ab
              }
            },
            metadata: ab
          }, KA, oA), (0, Ab.h)(bb, null, Ka, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "disableLighting" in bb,
              get: bb => bb.disableLighting,
              set: (bb, ab) => {
                bb.disableLighting = ab
              }
            },
            metadata: ab
          }, wA, sA), (0, Ab.h)(bb, null, la, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "useObjectSpaceNormalMap" in bb,
              get: bb => bb.useObjectSpaceNormalMap,
              set: (bb, ab) => {
                bb.useObjectSpaceNormalMap = ab
              }
            },
            metadata: ab
          }, VA, OA), (0, Ab.h)(bb, null, wa, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: bb => "useParallax" in bb,
              get: bb => bb.useParallax,
              set: (bb, ab) => {
                bb.useParallax = ab
              }
            },
            metadata: ab
          }, nA, SA), (0, Ab.h)(bb, null, ga, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "useParallaxOcclusion" in bb,
              get: bb => bb.useParallaxOcclusion,
              set: (bb, ab) => {
                bb.useParallaxOcclusion = ab
              }
            },
            metadata: ab
          }, UM, AM), (0, Ab.h)(bb, null, Oa, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "roughness" in bb,
              get: bb => bb.roughness,
              set: (bb, ab) => {
                bb.roughness = ab
              }
            },
            metadata: ab
          }, BM, eM), (0, Ab.h)(bb, null, bU, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: bb => "useLightmapAsShadowmap" in bb,
              get: bb => bb.useLightmapAsShadowmap,
              set: (bb, ab) => {
                bb.useLightmapAsShadowmap = ab
              }
            },
            metadata: ab
          }, ZM, DM), (0, Ab.h)(bb, null, UU, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "diffuseFresnelParameters" in bb,
              get: bb => bb.diffuseFresnelParameters,
              set: (bb, ab) => {
                bb.diffuseFresnelParameters = ab
              }
            },
            metadata: ab
          }, iM, fM), (0, Ab.h)(bb, null, MU, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "opacityFresnelParameters" in bb,
              get: bb => bb.opacityFresnelParameters,
              set: (bb, ab) => {
                bb.opacityFresnelParameters = ab
              }
            },
            metadata: ab
          }, NM, WM), (0, Ab.h)(bb, null, EU, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "reflectionFresnelParameters" in bb,
              get: bb => bb.reflectionFresnelParameters,
              set: (bb, ab) => {
                bb.reflectionFresnelParameters = ab
              }
            },
            metadata: ab
          }, dM, FM), (0, Ab.h)(bb, null, BU, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "refractionFresnelParameters" in bb,
              get: bb => bb.refractionFresnelParameters,
              set: (bb, ab) => {
                bb.refractionFresnelParameters = ab
              }
            },
            metadata: ab
          }, QM, qM), (0, Ab.h)(bb, null, vU, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissiveFresnelParameters" in bb,
              get: bb => bb.emissiveFresnelParameters,
              set: (bb, ab) => {
                bb.emissiveFresnelParameters = ab
              }
            },
            metadata: ab
          }, KM, oM), (0, Ab.h)(bb, null, PU, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: bb => "useReflectionFresnelFromSpecular" in bb,
              get: bb => bb.useReflectionFresnelFromSpecular,
              set: (bb, ab) => {
                bb.useReflectionFresnelFromSpecular = ab
              }
            },
            metadata: ab
          }, wM, sM), (0, Ab.h)(bb, null, jU, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "useGlossinessFromSpecularMapAlpha" in bb,
              get: bb => bb.useGlossinessFromSpecularMapAlpha,
              set: (bb, ab) => {
                bb.useGlossinessFromSpecularMapAlpha = ab
              }
            },
            metadata: ab
          }, VM, OM), (0, Ab.h)(bb, null, kU, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: bb => "maxSimultaneousLights" in bb,
              get: bb => bb.maxSimultaneousLights,
              set: (bb, ab) => {
                bb.maxSimultaneousLights = ab
              }
            },
            metadata: ab
          }, nM, SM), (0, Ab.h)(bb, null, ZU, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertNormalMapX" in bb,
              get: bb => bb.invertNormalMapX,
              set: (bb, ab) => {
                bb.invertNormalMapX = ab
              }
            },
            metadata: ab
          }, UT, AT), (0, Ab.h)(bb, null, zU, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertNormalMapY" in bb,
              get: bb => bb.invertNormalMapY,
              set: (bb, ab) => {
                bb.invertNormalMapY = ab
              }
            },
            metadata: ab
          }, ET, YT), (0, Ab.h)(bb, null, iU, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "twoSidedLighting" in bb,
              get: bb => bb.twoSidedLighting,
              set: (bb, ab) => {
                bb.twoSidedLighting = ab
              }
            },
            metadata: ab
          }, vT, LT), (0, Ab.h)(bb, null, mU, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "applyDecalMapAfterDetailMap" in bb,
              get: bb => bb.applyDecalMapAfterDetailMap,
              set: (bb, ab) => {
                bb.applyDecalMapAfterDetailMap = ab
              }
            },
            metadata: ab
          }, jT, RT), (0, Ab.h)(null, null, Ma, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_diffuseTexture" in bb,
              get: bb => bb._diffuseTexture,
              set: (bb, ab) => {
                bb._diffuseTexture = ab
              }
            },
            metadata: ab
          }, NU, WU), (0, Ab.h)(null, null, Ea, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_ambientTexture" in bb,
              get: bb => bb._ambientTexture,
              set: (bb, ab) => {
                bb._ambientTexture = ab
              }
            },
            metadata: ab
          }, dU, FU), (0, Ab.h)(null, null, Ba, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_opacityTexture" in bb,
              get: bb => bb._opacityTexture,
              set: (bb, ab) => {
                bb._opacityTexture = ab
              }
            },
            metadata: ab
          }, QU, qU), (0, Ab.h)(null, null, va, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_reflectionTexture" in bb,
              get: bb => bb._reflectionTexture,
              set: (bb, ab) => {
                bb._reflectionTexture = ab
              }
            },
            metadata: ab
          }, KU, oU), (0, Ab.h)(null, null, Pa, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_emissiveTexture" in bb,
              get: bb => bb._emissiveTexture,
              set: (bb, ab) => {
                bb._emissiveTexture = ab
              }
            },
            metadata: ab
          }, wU, sU), (0, Ab.h)(null, null, ja, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_specularTexture" in bb,
              get: bb => bb._specularTexture,
              set: (bb, ab) => {
                bb._specularTexture = ab
              }
            },
            metadata: ab
          }, VU, OU), (0, Ab.h)(null, null, ka, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_bumpTexture" in bb,
              get: bb => bb._bumpTexture,
              set: (bb, ab) => {
                bb._bumpTexture = ab
              }
            },
            metadata: ab
          }, nU, SU), (0, Ab.h)(null, null, Za, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_lightmapTexture" in bb,
              get: bb => bb._lightmapTexture,
              set: (bb, ab) => {
                bb._lightmapTexture = ab
              }
            },
            metadata: ab
          }, UA, AA), (0, Ab.h)(null, null, za, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_refractionTexture" in bb,
              get: bb => bb._refractionTexture,
              set: (bb, ab) => {
                bb._refractionTexture = ab
              }
            },
            metadata: ab
          }, EA, YA), (0, Ab.h)(null, null, ia, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "ambientColor" in bb,
              get: bb => bb.ambientColor,
              set: (bb, ab) => {
                bb.ambientColor = ab
              }
            },
            metadata: ab
          }, vA, LA), (0, Ab.h)(null, null, fa, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "diffuseColor" in bb,
              get: bb => bb.diffuseColor,
              set: (bb, ab) => {
                bb.diffuseColor = ab
              }
            },
            metadata: ab
          }, PA, XA), (0, Ab.h)(null, null, ma, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularColor" in bb,
              get: bb => bb.specularColor,
              set: (bb, ab) => {
                bb.specularColor = ab
              }
            },
            metadata: ab
          }, jA, RA), (0, Ab.h)(null, null, pa, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissiveColor" in bb,
              get: bb => bb.emissiveColor,
              set: (bb, ab) => {
                bb.emissiveColor = ab
              }
            },
            metadata: ab
          }, kA, yA), (0, Ab.h)(null, null, Na, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularPower" in bb,
              get: bb => bb.specularPower,
              set: (bb, ab) => {
                bb.specularPower = ab
              }
            },
            metadata: ab
          }, ZA, DA), (0, Ab.h)(null, null, Wa, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useAlphaFromDiffuseTexture" in bb,
              get: bb => bb._useAlphaFromDiffuseTexture,
              set: (bb, ab) => {
                bb._useAlphaFromDiffuseTexture = ab
              }
            },
            metadata: ab
          }, zA, xA), (0, Ab.h)(null, null, Ia, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useEmissiveAsIllumination" in bb,
              get: bb => bb._useEmissiveAsIllumination,
              set: (bb, ab) => {
                bb._useEmissiveAsIllumination = ab
              }
            },
            metadata: ab
          }, mA, pA), (0, Ab.h)(null, null, Fa, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: bb => "_linkEmissiveWithDiffuse" in bb,
              get: bb => bb._linkEmissiveWithDiffuse,
              set: (bb, ab) => {
                bb._linkEmissiveWithDiffuse = ab
              }
            },
            metadata: ab
          }, HA, IA), (0, Ab.h)(null, null, Ga, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useSpecularOverAlpha" in bb,
              get: bb => bb._useSpecularOverAlpha,
              set: (bb, ab) => {
                bb._useSpecularOverAlpha = ab
              }
            },
            metadata: ab
          }, hA, GA), (0, Ab.h)(null, null, qa, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useReflectionOverAlpha" in bb,
              get: bb => bb._useReflectionOverAlpha,
              set: (bb, ab) => {
                bb._useReflectionOverAlpha = ab
              }
            },
            metadata: ab
          }, uA, rA), (0, Ab.h)(null, null, ra, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "_disableLighting" in bb,
              get: bb => bb._disableLighting,
              set: (bb, ab) => {
                bb._disableLighting = ab
              }
            },
            metadata: ab
          }, lA, tA), (0, Ab.h)(null, null, oa, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useObjectSpaceNormalMap" in bb,
              get: bb => bb._useObjectSpaceNormalMap,
              set: (bb, ab) => {
                bb._useObjectSpaceNormalMap = ab
              }
            },
            metadata: ab
          }, gA, CA), (0, Ab.h)(null, null, ta, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useParallax" in bb,
              get: bb => bb._useParallax,
              set: (bb, ab) => {
                bb._useParallax = ab
              }
            },
            metadata: ab
          }, cA, JA), (0, Ab.h)(null, null, sa, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useParallaxOcclusion" in bb,
              get: bb => bb._useParallaxOcclusion,
              set: (bb, ab) => {
                bb._useParallaxOcclusion = ab
              }
            },
            metadata: ab
          }, bM, aM), (0, Ab.h)(null, null, Ca, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: bb => "parallaxScaleBias" in bb,
              get: bb => bb.parallaxScaleBias,
              set: (bb, ab) => {
                bb.parallaxScaleBias = ab
              }
            },
            metadata: ab
          }, MM, TM), (0, Ab.h)(null, null, Va, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "_roughness" in bb,
              get: bb => bb._roughness,
              set: (bb, ab) => {
                bb._roughness = ab
              }
            },
            metadata: ab
          }, EM, YM), (0, Ab.h)(null, null, ca, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: bb => "indexOfRefraction" in bb,
              get: bb => bb.indexOfRefraction,
              set: (bb, ab) => {
                bb.indexOfRefraction = ab
              }
            },
            metadata: ab
          }, vM, LM), (0, Ab.h)(null, null, Ja, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertRefractionY" in bb,
              get: bb => bb.invertRefractionY,
              set: (bb, ab) => {
                bb.invertRefractionY = ab
              }
            },
            metadata: ab
          }, PM, XM), (0, Ab.h)(null, null, na, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: bb => "alphaCutOff" in bb,
              get: bb => bb.alphaCutOff,
              set: (bb, ab) => {
                bb.alphaCutOff = ab
              }
            },
            metadata: ab
          }, jM, RM), (0, Ab.h)(null, null, Sa, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useLightmapAsShadowmap" in bb,
              get: bb => bb._useLightmapAsShadowmap,
              set: (bb, ab) => {
                bb._useLightmapAsShadowmap = ab
              }
            },
            metadata: ab
          }, kM, yM), (0, Ab.h)(null, null, aU, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_diffuseFresnelParameters" in bb,
              get: bb => bb._diffuseFresnelParameters,
              set: (bb, ab) => {
                bb._diffuseFresnelParameters = ab
              }
            },
            metadata: ab
          }, zM, xM), (0, Ab.h)(null, null, AU, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_opacityFresnelParameters" in bb,
              get: bb => bb._opacityFresnelParameters,
              set: (bb, ab) => {
                bb._opacityFresnelParameters = ab
              }
            },
            metadata: ab
          }, mM, pM), (0, Ab.h)(null, null, TU, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_reflectionFresnelParameters" in bb,
              get: bb => bb._reflectionFresnelParameters,
              set: (bb, ab) => {
                bb._reflectionFresnelParameters = ab
              }
            },
            metadata: ab
          }, HM, IM), (0, Ab.h)(null, null, YU, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_refractionFresnelParameters" in bb,
              get: bb => bb._refractionFresnelParameters,
              set: (bb, ab) => {
                bb._refractionFresnelParameters = ab
              }
            },
            metadata: ab
          }, hM, GM), (0, Ab.h)(null, null, eU, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_emissiveFresnelParameters" in bb,
              get: bb => bb._emissiveFresnelParameters,
              set: (bb, ab) => {
                bb._emissiveFresnelParameters = ab
              }
            },
            metadata: ab
          }, uM, rM), (0, Ab.h)(null, null, LU, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useReflectionFresnelFromSpecular" in bb,
              get: bb => bb._useReflectionFresnelFromSpecular,
              set: (bb, ab) => {
                bb._useReflectionFresnelFromSpecular = ab
              }
            },
            metadata: ab
          }, lM, tM), (0, Ab.h)(null, null, XU, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useGlossinessFromSpecularMapAlpha" in bb,
              get: bb => bb._useGlossinessFromSpecularMapAlpha,
              set: (bb, ab) => {
                bb._useGlossinessFromSpecularMapAlpha = ab
              }
            },
            metadata: ab
          }, gM, CM), (0, Ab.h)(null, null, RU, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: bb => "_maxSimultaneousLights" in bb,
              get: bb => bb._maxSimultaneousLights,
              set: (bb, ab) => {
                bb._maxSimultaneousLights = ab
              }
            },
            metadata: ab
          }, cM, JM), (0, Ab.h)(null, null, yU, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: bb => "_invertNormalMapX" in bb,
              get: bb => bb._invertNormalMapX,
              set: (bb, ab) => {
                bb._invertNormalMapX = ab
              }
            },
            metadata: ab
          }, bT, aT), (0, Ab.h)(null, null, DU, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: bb => "_invertNormalMapY" in bb,
              get: bb => bb._invertNormalMapY,
              set: (bb, ab) => {
                bb._invertNormalMapY = ab
              }
            },
            metadata: ab
          }, MT, TT), (0, Ab.h)(null, null, xU, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "_twoSidedLighting" in bb,
              get: bb => bb._twoSidedLighting,
              set: (bb, ab) => {
                bb._twoSidedLighting = ab
              }
            },
            metadata: ab
          }, BT, eT), (0, Ab.h)(null, null, fU, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "_applyDecalMapAfterDetailMap" in bb,
              get: bb => bb._applyDecalMapAfterDetailMap,
              set: (bb, ab) => {
                bb._applyDecalMapAfterDetailMap = ab
              }
            },
            metadata: ab
          }, PT, XT), ab && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ab
          })
        })(), bb.ForceGLSL = !1, bb._ShaderLoader = new ib.e((() => [Promise.all([Ub.e(307), Ub.e(306)]).then((() => Ub(40970))), Promise.all([Ub.e(312), Ub.e(308), Ub.e(321), Ub.e(311)]).then((() => Ub(41157)))]), (() => [Promise.all([Ub.e(328), Ub.e(323)]).then((() => Ub(41313))), Promise.all([Ub.e(329), Ub.e(339), Ub.e(325)]).then((() => Ub(41495)))])), bb
      })(),
      Qb = !1;

    function qb() {
      Qb || (Qb = !0, (0, Lb.h)(), (0, Wb.f)("BABYLON.StandardMaterial", Gb), Eb.e.DefaultMaterialFactory = bb => new Gb("default material", bb))
    }
    Object.getOwnPropertyDescriptor(Gb.prototype, "decalMap") || Object.defineProperty(Gb.prototype, "decalMap", (0, Hb.g)("StandardMaterial", "decalMap"))
  },
  39502: (bb, ab, Ub) => {
    function Ab(bb) {
      return class extends bb {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    Ub.d(ab, {
      b: () => Ab
    })
  },
  39485: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab
    });
    class Ab {
      constructor(bb, ab) {
        this._webGL = {
          load: bb,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: ab,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(bb) {
        const ab = 1 === bb ? this._webGPU : this._webGL;
        return ab.loaded ? void 0 : async () => {
          await this._loadAsync(ab)
        }
      }
      async _loadAsync(bb) {
        if (bb.loaded) return;
        let ab = bb.loadPromise;
        const Ub = null === ab;
        Ub && (ab = Promise.all(bb.load()), bb.loadPromise = ab);
        let Ab = !1;
        try {
          await ab, Ab = !0
        } finally {
          Ub && this._completeLoad(bb, Ab)
        }
      }
      _completeLoad(bb, ab) {
        bb.loaded = ab, bb.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);