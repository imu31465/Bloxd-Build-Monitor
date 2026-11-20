export const id = 253;
export const ids = [253];
export const modules = {
  39843: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob
    });
    var Bb = hb(39471);

    function Ob(bb) {
      return class extends bb {
        constructor() {
          super(...arguments);
          const bb = new.target;
          if (!bb[Symbol.metadata]) {
            const ub = Object.getPrototypeOf(bb)?.[Symbol.metadata];
            bb[Symbol.metadata] = ub ? Object.create(ub) : {}
          }
          const ub = (0, Bb.b)(bb[Symbol.metadata]);
          ub._imageProcessingConfiguration || (ub._imageProcessingConfiguration = {
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
          bb !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !bb && this.ZN ? this._imageProcessingConfiguration = this.ZN().imageProcessingConfiguration : bb && (this._imageProcessingConfiguration = bb), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
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
  39719: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      c: () => Ob
    });
    var Bb = hb(39724);

    function Ob(bb) {
      return class extends bb {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class Gb extends Bb.d {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  39803: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Hb
    });
    var Bb = hb(39463),
      Ob = hb(39728),
      Gb = hb(39467),
      Ub = hb(39788),
      Lb = hb(39724),
      Yb = hb(39805),
      Sb = hb(39773);
    class ab extends Lb.d {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let Hb = (() => {
      var bb, ub, hb, Lb;
      let Hb, wb, Zb, Xb, pb, ob, Ab = Yb.c,
        lb = [],
        Kb = [],
        Wb = [],
        Cb = [],
        db = [],
        rb = [],
        jb = [],
        nb = [],
        Db = [],
        xb = [],
        zb = [],
        gb = [];
      return bb = class extends Ab {
        get texture() {
          return (0, Bb.b)(this, ub, "f")
        }
        set texture(bb) {
          (0, Bb.f)(this, ub, bb, "f")
        }
        get normalBlendMethod() {
          return (0, Bb.b)(this, hb, "f")
        }
        set normalBlendMethod(bb) {
          (0, Bb.f)(this, hb, bb, "f")
        }
        get isEnabled() {
          return (0, Bb.b)(this, Lb, "f")
        }
        set isEnabled(bb) {
          (0, Bb.f)(this, Lb, bb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(bb) {
          let Gb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(bb, "DetailMap", 140, new ab, Gb), this._texture = null, ub.set(this, (0, Bb.k)(this, lb, void 0)), this.diffuseBlendLevel = ((0, Bb.k)(this, Kb), (0, Bb.k)(this, Wb, 1)), this.roughnessBlendLevel = ((0, Bb.k)(this, Cb), (0, Bb.k)(this, db, 1)), this.bumpLevel = ((0, Bb.k)(this, rb), (0, Bb.k)(this, jb, 1)), this._normalBlendMethod = ((0, Bb.k)(this, nb), Ob.e.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), hb.set(this, (0, Bb.k)(this, Db, void 0)), this._isEnabled = ((0, Bb.k)(this, xb), !1), Lb.set(this, (0, Bb.k)(this, zb, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Bb.k)(this, gb), this._internalMarkAllSubMeshesAsTexturesDirty = bb._dirtyCallbacks[1]
        }
        isReadyForSubMesh(bb, ub, hb) {
          return !this._isEnabled || !(bb._areTexturesDirty && ub.texturesEnabled && hb.getCaps().standardDerivatives && this._texture && Ub.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(bb, ub) {
          if (this._isEnabled) {
            bb.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const hb = ub.UX();
            bb._areTexturesDirty && (hb.getCaps().standardDerivatives && this._texture && Ub.e.DetailTextureEnabled && this._isEnabled ? ((0, Sb.R)(this._texture, bb, "DETAIL"), bb.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : bb.DETAIL = !1)
          } else bb.DETAIL = !1
        }
        bindForSubMesh(bb, ub) {
          if (!this._isEnabled) return;
          const hb = this._material.isFrozen;
          bb.useUbo && hb && bb.isSync || this._texture && Ub.e.DetailTextureEnabled && (bb.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, Sb.u)(this._texture, bb, "detail")), ub.texturesEnabled && this._texture && Ub.e.DetailTextureEnabled && bb.setTexture("detailSampler", this._texture)
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
      }, ub = new WeakMap, hb = new WeakMap, Lb = new WeakMap, (() => {
        const ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ab[Symbol.metadata] ?? null) : void 0;
        Hb = [(0, Gb.D)("detailTexture"), (0, Gb.i)("_markAllSubMeshesAsTexturesDirty")], wb = [(0, Gb.K)()], Zb = [(0, Gb.K)()], Xb = [(0, Gb.K)()], pb = [(0, Gb.K)(), (0, Gb.i)("_markAllSubMeshesAsTexturesDirty")], ob = [(0, Gb.K)(), (0, Gb.i)("_markAllSubMeshesAsTexturesDirty")], (0, Bb.h)(bb, null, Hb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, ub) => {
              bb.texture = ub
            }
          },
          metadata: ub
        }, lb, Kb), (0, Bb.h)(bb, null, pb, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: bb => "normalBlendMethod" in bb,
            get: bb => bb.normalBlendMethod,
            set: (bb, ub) => {
              bb.normalBlendMethod = ub
            }
          },
          metadata: ub
        }, Db, xb), (0, Bb.h)(bb, null, ob, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, ub) => {
              bb.isEnabled = ub
            }
          },
          metadata: ub
        }, zb, gb), (0, Bb.h)(null, null, wb, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: bb => "diffuseBlendLevel" in bb,
            get: bb => bb.diffuseBlendLevel,
            set: (bb, ub) => {
              bb.diffuseBlendLevel = ub
            }
          },
          metadata: ub
        }, Wb, Cb), (0, Bb.h)(null, null, Zb, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: bb => "roughnessBlendLevel" in bb,
            get: bb => bb.roughnessBlendLevel,
            set: (bb, ub) => {
              bb.roughnessBlendLevel = ub
            }
          },
          metadata: ub
        }, db, rb), (0, Bb.h)(null, null, Xb, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: bb => "bumpLevel" in bb,
            get: bb => bb.bumpLevel,
            set: (bb, ub) => {
              bb.bumpLevel = ub
            }
          },
          metadata: ub
        }, jb, nb), ub && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ub
        })
      })(), bb
    })()
  },
  39724: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb
    });
    class Bb {
      constructor(bb) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = bb, bb)
          for (const ub in bb) Object.prototype.hasOwnProperty.call(bb, ub) && this._setDefaultValue(ub)
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
        for (let ub = 0; ub < this._keys.length; ub++) {
          const hb = this._keys[ub];
          if (this[hb] !== bb[hb]) return !1
        }
        return !0
      }
      cloneTo(bb) {
        this._keys.length !== bb._keys.length && (bb._keys = this._keys.slice(0));
        for (let ub = 0; ub < this._keys.length; ub++) {
          const hb = this._keys[ub];
          bb[hb] = this[hb]
        }
      }
      reset() {
        for (const bb of this._keys) this._setDefaultValue(bb)
      }
      _setDefaultValue(bb) {
        const ub = this._externalProperties?.[bb]?.type ?? typeof this[bb],
          hb = this._externalProperties?.[bb]?.default;
        switch (ub) {
          case "number":
            this[bb] = hb ?? 0;
            break;
          case "string":
            this[bb] = hb ?? "";
            break;
          default:
            this[bb] = hb ?? !1
        }
      }
      toString() {
        let bb = "";
        for (let ub = 0; ub < this._keys.length; ub++) {
          const hb = this._keys[ub],
            Bb = this[hb];
          switch (typeof Bb) {
            case "number":
            case "string":
              bb += "#define " + hb + " " + Bb + "\n";
              break;
            default:
              Bb && (bb += "#define " + hb + "\n")
          }
        }
        return bb
      }
    }
  },
  39824: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb,
      g: () => Ub,
      i: () => Gb
    });
    var Bb, Ob = hb(36727);

    function Gb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const Bb = ub(bb);
      if (!Number.isInteger(Bb) || Bb < 0 || Bb > hb) throw new Error(`Invalid geometry object ID ${Bb} for mesh "${bb.name}". Object IDs must be integers between 0 and 0x${hb.toString(16).toUpperCase()}.`);
      return Bb
    }

    function Ub(bb, ub) {
      const hb = ub(bb);
      if (!Number.isInteger(hb) || hb < 0 || hb > 255 || 0 !== hb && 0 === (63 & hb)) throw new Error(`Invalid geometry mesh-blending tag ${hb} for mesh "${bb.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return hb
    }! function(bb) {
      bb[bb.Zero = 0] = "Zero", bb[bb.One = 1] = "One", bb[bb.MaxViewZ = 2] = "MaxViewZ", bb[bb.NoClear = 3] = "NoClear"
    }(Bb || (Bb = {}));
    class Lb {
      static CreateConfiguration(bb) {
        return Lb._Configurations[bb] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: Ob.d.Zero(),
          currentViewProjection: Ob.d.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, Lb._Configurations[bb]
      }
      static DeleteConfiguration(bb) {
        delete Lb._Configurations[bb]
      }
      static GetConfiguration(bb) {
        return Lb._Configurations[bb]
      }
      static _PrepareConfiguration(bb, ub, hb) {
        const Bb = Lb._Configurations[bb];
        Bb._attachments = ub, Bb._colorAttachments = hb, Bb._mrtCount = ub.length;
        let Ob = "#define PREPASS\n";
        for (const Gb of Lb.GeometryTextureDescriptions) {
          const bb = Bb.defines[Gb.defineIndex];
          void 0 !== bb && (Ob += `#define ${Gb.define}\n#define ${Gb.defineIndex} ${bb}\n`)
        }
        Bb.objectIdIsRedFormat && (Ob += "#define PREPASS_OBJECT_ID_R8\n"), Bb._defines = Ob + `#define SCENE_MRT_COUNT ${ub.length}\n`
      }
      static _PrepareStringDefines(bb, ub) {
        const hb = Lb._Configurations[bb];
        return !!hb?._defines && (ub.push(hb._defines), !0)
      }
      static _BindAttachmentsForEffect(bb, ub) {
        const hb = Lb._Configurations[bb.currentRenderPassId];
        return !hb?._attachments || (bb.bindAttachments(ub._multiTarget ? hb._attachments : hb._colorAttachments), ub._multiTarget || void 0 !== hb.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(bb) {
        const ub = Lb._Configurations[bb.currentRenderPassId];
        ub?._colorAttachments && bb.bindAttachments(ub._colorAttachments)
      }
      static _BindColorAttachments(bb) {
        const ub = Lb._Configurations[bb.currentRenderPassId];
        return !ub?._colorAttachments || (bb.bindAttachments(ub._colorAttachments), void 0 !== ub.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(bb) {
        const ub = Lb._Configurations[bb.currentRenderPassId];
        return !ub?._colorAttachments || void 0 !== ub.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(bb, ub) {
        const hb = Lb._Configurations[bb.currentRenderPassId];
        if (!hb) return;
        const Bb = bb.getAlphaMode(),
          Ob = void 0 === hb.defines.PREPASS_COLOR_INDEX || 2 === Bb || 1 === Bb || 17 === Bb;
        ub.setFloat("geometryZeroAlphaDiscard", Ob ? 1 : 0)
      }
      static AddUniformsAndSamplers(bb, ub) {
        bb.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(bb, ub) {
        for (const hb of ub)
          if (hb.FW)
            for (const ub of hb.FW) ub._removeDrawWrapper(bb)
      }
      static PrepareDefines(bb, ub, hb) {
        if (!hb._arePrePassDirty) return;
        const Bb = Lb._Configurations[bb];
        if (!Bb) return;
        hb.PREPASS = !0;
        let Ob = 0;
        for (let Gb = 0; Gb < Lb.GeometryTextureDescriptions.length; Gb++) {
          const bb = Lb.GeometryTextureDescriptions[Gb],
            ub = bb.define,
            Ub = bb.defineIndex,
            Yb = Bb.defines[Ub];
          void 0 !== Yb ? (hb[ub] = !0, hb[Ub] = Yb, Ob++) : (hb[ub] = !1, delete hb[Ub])
        }
        hb.PREPASS_OBJECT_ID_R8 = Bb.objectIdIsRedFormat, hb.SCENE_MRT_COUNT = Bb._mrtCount ?? Ob, hb.BONES_VELOCITY_ENABLED = ub.useBones && ub.computeBonesUsingShaders && ub.skeleton && !ub.skeleton.isUsingTextureForMatrices && -1 === Bb.excludedSkinnedMesh.indexOf(ub)
      }
      static Bind(bb, ub, hb, Bb, Ob) {
        const Yb = Lb._Configurations[bb];
        if (!Yb) return;
        const Sb = hb.ZN(),
          ab = Sb.UX();
        if (Yb.reverseCulling && ab.setStateCullFaceType(Sb._mirroredCameraPosition ? Ob.cullBackFaces : !Ob.cullBackFaces), void 0 !== Yb.defines.PREPASS_OBJECT_ID_INDEX) {
          const bb = Yb.objectIdIsRedFormat ? 255 : 16777215;
          let Bb = hb.uniqueId;
          if (Yb.objectIdProvider) Bb = Gb(hb, Yb.objectIdProvider, bb);
          else if (Bb > bb) throw new Error(`Invalid geometry object ID ${Bb} for mesh "${hb.name}". Object IDs must be integers between 0 and 0x${bb.toString(16).toUpperCase()}.`);
          ub.setFloat("objectId", Bb)
        }
        if (void 0 !== Yb.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const bb = Yb.meshBlendTagProvider ? Ub(hb, Yb.meshBlendTagProvider) : hb.meshBlendingTag;
          ub.setInt("meshBlendTag", bb)
        }
        if (void 0 !== Yb.defines.PREPASS_VELOCITY_INDEX || void 0 !== Yb.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const bb = Yb._currentWorldMatrices ?? (Yb._currentWorldMatrices = {}),
            Ob = Yb._worldMatrixFrameIds ?? (Yb._worldMatrixFrameIds = {});
          if (bb[hb.uniqueId] || (bb[hb.uniqueId] = Bb.clone(), Yb.previousWorldMatrices[hb.uniqueId] = Bb.clone()), Ob[hb.uniqueId] !== ab.frameId && (Yb.previousWorldMatrices[hb.uniqueId].mD(bb[hb.uniqueId]), Ob[hb.uniqueId] = ab.frameId), bb[hb.uniqueId].mD(Bb), -1 === Yb.lastUpdateFrameId ? (Yb.lastUpdateFrameId = ab.frameId, Yb.previousViewProjection.mD(Sb.getTransformMatrix()), Yb.currentViewProjection.mD(Sb.getTransformMatrix())) : Yb.currentViewProjection.updateFlag !== Sb.getTransformMatrix().updateFlag ? (Yb.lastUpdateFrameId = ab.frameId, Yb.previousViewProjection.mD(Yb.currentViewProjection), Yb.currentViewProjection.mD(Sb.getTransformMatrix())) : Yb.lastUpdateFrameId !== ab.frameId && (Yb.lastUpdateFrameId = ab.frameId, Yb.previousViewProjection.mD(Yb.currentViewProjection)), ub.setMatrix("previousWorld", Yb.previousWorldMatrices[hb.uniqueId]), ub.setMatrix("previousViewProjection", Yb.previousViewProjection), hb.useBones && hb.computeBonesUsingShaders && hb.skeleton) {
            const bb = hb.skeleton;
            if (!bb.isUsingTextureForMatrices || -1 === ub.getUniformIndex("boneTextureInfo")) {
              const Bb = bb.getTransformMatrices(hb);
              Bb && (Yb.previousBones[hb.uniqueId] || (Yb.previousBones[hb.uniqueId] = Bb.slice()), ub.setMatrices("mPreviousBones", Yb.previousBones[hb.uniqueId]), Yb.previousBones[hb.uniqueId].set(Bb))
            }
          }
        }
      }
    }
    Lb.GeometryTextureDescriptions = [{
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
    }], Lb._Configurations = {}
  },
  39805: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => wb,
      g: () => Xb
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(39339),
      Ub = hb(39308);
    const Lb = new RegExp("^([gimus]+)!");
    class Yb {
      constructor(bb) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = bb, this._scene = bb.ZN(), this._engine = this._scene.UX()
      }
      _addPlugin(bb) {
        for (let Bb = 0; Bb < this._plugins.length; ++Bb)
          if (this._plugins[Bb].name === bb.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !bb.isCompatible(this._material.shaderLanguage)) throw `The plugin "${bb.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const ub = bb.getClassName();
        Yb._MaterialPluginClassToMainDefine[ub] || (Yb._MaterialPluginClassToMainDefine[ub] = "MATERIALPLUGIN_" + ++Yb._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (bb, ub) => this._handlePluginEvent(bb, ub), this._plugins.push(bb), this._plugins.sort(((bb, ub) => bb.priority - ub.priority)), this._codeInjectionPoints = {};
        const hb = {};
        hb[Yb._MaterialPluginClassToMainDefine[ub]] = {
          type: "boolean",
          default: !0
        };
        for (const Bb of this._plugins) Bb.collectDefines(hb), this._collectPointNames("vertex", Bb.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Bb.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = hb, !0
      }
      _activatePlugin(bb) {
        -1 === this._activePlugins.indexOf(bb) && (this._activePlugins.push(bb), this._activePlugins.sort(((bb, ub) => bb.priority - ub.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), bb.registerForExtraEvents && (this._activePluginsForExtraEvents.push(bb), this._activePluginsForExtraEvents.sort(((bb, ub) => bb.priority - ub.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(bb) {
        for (let ub = 0; ub < this._plugins.length; ++ub)
          if (this._plugins[ub].name === bb) return this._plugins[ub];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(bb) {
        let ub = !0;
        for (const hb of this._activePlugins) ub = ub && hb.isReadyForSubMesh(bb.defines, this._scene, this._engine, bb.subMesh);
        bb.isReadyForSubMesh = ub
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(bb) {
        for (const ub of this._activePlugins) ub.prepareDefinesBeforeAttributes(bb.defines, this._scene, bb.mesh)
      }
      _handlePluginEventPrepareDefines(bb) {
        for (const ub of this._activePlugins) ub.prepareDefines(bb.defines, this._scene, bb.mesh)
      }
      _handlePluginEventHardBindForSubMesh(bb) {
        for (const ub of this._activePluginsForExtraEvents) ub.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, bb.subMesh)
      }
      _handlePluginEventBindForSubMesh(bb) {
        for (const ub of this._activePlugins) ub.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, bb.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(bb) {
        let ub = !1;
        for (const hb of this._activePluginsForExtraEvents)
          if (ub = hb.hasRenderTargetTextures(), ub) break;
        bb.hasRenderTargetTextures = ub
      }
      _handlePluginEventFillRenderTargetTextures(bb) {
        for (const ub of this._activePluginsForExtraEvents) ub.fillRenderTargetTextures(bb.renderTargets)
      }
      _handlePluginEvent(bb, ub) {
        switch (bb) {
          case 512: {
            const bb = ub;
            for (const ub of this._activePlugins) ub.getActiveTextures(bb.activeTextures);
            break
          }
          case 256: {
            const bb = ub;
            for (const ub of this._activePlugins) ub.getAnimatables(bb.animatables);
            break
          }
          case 1024: {
            const bb = ub;
            let hb = !1;
            for (const ub of this._activePlugins)
              if (hb = ub.hasTexture(bb.texture), hb) break;
            bb.hasTexture = hb;
            break
          }
          case 2: {
            const bb = ub;
            for (const ub of this._plugins) ub.dispose(bb.forceDisposeTextures);
            break
          }
          case 4:
            ub.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const bb = ub;
            for (const ub of this._activePlugins) bb.fallbackRank = ub.addFallbacks(bb.defines, bb.fallbacks, bb.fallbackRank), ub.getAttributes(bb.attributes, this._scene, bb.mesh);
            this._uniformList.length > 0 && bb.uniforms.push(...this._uniformList), this._samplerList.length > 0 && bb.samplers.push(...this._samplerList), this._uboList.length > 0 && bb.uniformBuffersNames.push(...this._uboList), bb.customCode = this._injectCustomCode(bb, bb.customCode);
            break
          }
          case 8: {
            const bb = ub;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const hb = 1 === this._material.shaderLanguage;
            for (const ub of this._plugins) {
              const Bb = ub.getUniforms(this._material.shaderLanguage);
              if (Bb) {
                if (Bb.ubo)
                  for (const ub of Bb.ubo) {
                    if (ub.size && ub.type) {
                      const Bb = ub.arraySize ?? 0;
                      if (bb.ubo.addUniform(ub.name, ub.size, Bb), hb) {
                        let bb;
                        switch (ub.type) {
                          case "mat4":
                            bb = "mat4x4f";
                            break;
                          case "float":
                            bb = "f32";
                            break;
                          default:
                            bb = `${ub.type}f`
                        }
                        this._uboDeclaration += Bb > 0 ? `uniform ${ub.name}: array<${bb}, ${Bb}>;\n` : `uniform ${ub.name}: ${bb};\n`
                      } else this._uboDeclaration += `${ub.type} ${ub.name}${Bb>0?`[${Bb}]`:""};\n`
                    }
                    this._uniformList.push(ub.name)
                  }
                Bb.vertex && (this._vertexDeclaration += Bb.vertex + "\n"), Bb.fragment && (this._fragmentDeclaration += Bb.fragment + "\n"), Bb.externalUniforms && this._uniformList.push(...Bb.externalUniforms)
              }
              ub.getSamplers(this._samplerList), ub.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(bb, ub) {
        if (ub)
          for (const hb in ub) this._codeInjectionPoints[bb] || (this._codeInjectionPoints[bb] = {}), this._codeInjectionPoints[bb][hb] = !0
      }
      _injectCustomCode(bb, ub) {
        return (hb, Bb) => {
          ub && (Bb = ub(hb, Bb)), this._uboDeclaration && (Bb = Bb.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Bb = Bb.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (Bb = Bb.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const Ob = this._codeInjectionPoints?.[hb];
          if (!Ob) return Bb;
          let Yb = null;
          for (let ub in Ob) {
            let Ob = "";
            for (const Bb of this._activePlugins) {
              const Lb = this._material.shaderLanguage;
              let Sb = Bb.getCustomCode(hb, Lb)?.[ub];
              Sb && (Bb.resolveIncludes && (null === Yb && (Yb = {
                defines: [],
                indexParameters: bb.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: Ub.e.GetShadersRepository(Lb),
                includesShadersStore: Ub.e.GetIncludesShadersStore(Lb),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                aBb: this._engine.aBb,
                processCodeAfterIncludes: void 0
              }), Yb.isFragment = "fragment" === hb, (0, Gb.l)(Sb, Yb, (bb => Sb = bb))), Ob += Sb + "\n")
            }
            if (Ob.length > 0)
              if ("!" === ub.charAt(0)) {
                ub = ub.substring(1);
                let bb = "g";
                if ("!" === ub.charAt(0)) bb = "", ub = ub.substring(1);
                else {
                  const hb = Lb.exec(ub);
                  hb && hb.length >= 2 && (bb = hb[1], ub = ub.substring(bb.length + 1))
                }
                bb.indexOf("g") < 0 && (bb += "g");
                const hb = new RegExp(ub, bb);
                let Gb = hb.exec(Bb);
                for (; null !== Gb;) {
                  const {
                    index: bb
                  } = Gb, ub = Sb(Ob, Gb);
                  Bb = Bb.substring(0, bb) + ub + Bb.substring(bb + Gb[0].length), hb.lastIndex = bb + ub.length, Gb = hb.exec(Bb)
                }
              } else {
                const bb = "#define " + ub;
                Bb = Bb.replace(bb, "\n" + Ob + "\n" + bb)
              }
          }
          return Bb
        }
      }
    }
    Yb._MaterialPluginClassToMainDefine = {}, Yb._MaterialPluginCounter = 0;

    function Sb(bb, ub) {
      return bb.replace(/\$(\d+)/g, ((bb, hb) => {
        const Bb = Number(hb);
        return Bb < ub.length ? ub[Bb] : ""
      }))
    }
    var ab = hb(39488),
      Hb = hb(36762);
    let wb = (() => {
        var bb;
        let ub, hb, Gb, Ub, Lb = [],
          Sb = [],
          Hb = [],
          wb = [],
          Zb = [],
          Xb = [],
          pb = [],
          ob = [];
        return bb = class {
          isCompatible(bb) {
            return 0 === bb
          }
          _enable(bb) {
            bb && this._pluginManager._activatePlugin(this)
          }
          constructor(bb, ub, hb, Ob) {
            let Gb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              Ub = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              ab = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, Bb.k)(this, Lb, void 0), this.priority = ((0, Bb.k)(this, Sb), (0, Bb.k)(this, Hb, 500)), this.resolveIncludes = ((0, Bb.k)(this, wb), (0, Bb.k)(this, Zb, !1)), this.registerForExtraEvents = ((0, Bb.k)(this, Xb), (0, Bb.k)(this, pb, !1)), this.doNotSerialize = ((0, Bb.k)(this, ob), !1), this._material = bb, this.name = ub, this.priority = hb, this.resolveIncludes = ab, bb.pluginManager || (bb.pluginManager = new Yb(bb), bb.XN.add((() => {
              bb.pluginManager = void 0
            }))), this._pluginDefineNames = Ob, this._pluginManager = bb.pluginManager, Gb && this._pluginManager._addPlugin(this), Ub && this._enable(!0), this.markAllDefinesAsDirty = bb._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(bb, ub, hb, Bb) {
            return !0
          }
          hardBindForSubMesh(bb, ub, hb, Bb) {}
          bindForSubMesh(bb, ub, hb, Bb) {}
          dispose(bb) {}
          getCustomCode(bb) {
            return null
          }
          collectDefines(bb) {
            if (this._pluginDefineNames)
              for (const ub of Object.keys(this._pluginDefineNames)) {
                if ("_" === ub[0]) continue;
                const hb = typeof this._pluginDefineNames[ub];
                bb[ub] = {
                  type: "number" === hb ? "number" : "string" === hb ? "string" : "boolean" === hb ? "boolean" : "object",
                  default: this._pluginDefineNames[ub]
                }
              }
          }
          prepareDefinesBeforeAttributes(bb, ub, hb) {}
          prepareDefines(bb, ub, hb) {}
          hasTexture(bb) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(bb) {}
          getActiveTextures(bb) {}
          getAnimatables(bb) {}
          addFallbacks(bb, ub, hb) {
            return hb
          }
          getSamplers(bb) {}
          getAttributes(bb, ub, hb) {}
          getUniformBuffersNames(bb) {}
          getUniforms() {
            return {}
          }
          copyTo(bb) {
            ab.c.Clone((() => bb), this)
          }
          serialize() {
            return ab.c.Serialize(this)
          }
          parse(bb, ub, hb) {
            ab.c.Parse((() => this), bb, ub, hb)
          }
        }, (() => {
          const Yb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ub = [(0, Ob.K)()], hb = [(0, Ob.K)()], Gb = [(0, Ob.K)()], Ub = [(0, Ob.K)()], (0, Bb.h)(null, null, ub, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name,
              set: (bb, ub) => {
                bb.name = ub
              }
            },
            metadata: Yb
          }, Lb, Sb), (0, Bb.h)(null, null, hb, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: bb => "priority" in bb,
              get: bb => bb.priority,
              set: (bb, ub) => {
                bb.priority = ub
              }
            },
            metadata: Yb
          }, Hb, wb), (0, Bb.h)(null, null, Gb, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: bb => "resolveIncludes" in bb,
              get: bb => bb.resolveIncludes,
              set: (bb, ub) => {
                bb.resolveIncludes = ub
              }
            },
            metadata: Yb
          }, Zb, Xb), (0, Bb.h)(null, null, Ub, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: bb => "registerForExtraEvents" in bb,
              get: bb => bb.registerForExtraEvents,
              set: (bb, ub) => {
                bb.registerForExtraEvents = ub
              }
            },
            metadata: Yb
          }, pb, ob), Yb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Yb
          })
        })(), bb
      })(),
      Zb = !1;

    function Xb() {
      Zb || (Zb = !0, (0, Hb.f)("BABYLON.MaterialPluginBase", wb))
    }
  },
  39717: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb
    });
    class Bb {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(bb) {
        bb.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(bb) {}
      bindForSubMesh(bb, ub, hb, Bb, Ob) {
        if (ub.prePassRenderer && ub.prePassRenderer.enabled && ub.prePassRenderer.currentRTisSceneRT && (-1 !== ub.prePassRenderer.getIndex(2) || -1 !== ub.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[hb.uniqueId] || (this.previousWorldMatrices[hb.uniqueId] = Bb.clone()), this.previousViewProjection || (this.previousViewProjection = ub.getTransformMatrix().clone(), this.currentViewProjection = ub.getTransformMatrix().clone());
          const Ob = ub.UX();
          this.currentViewProjection.updateFlag !== ub.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = Ob.frameId, this.previousViewProjection.mD(this.currentViewProjection), this.currentViewProjection.mD(ub.getTransformMatrix())) : this._lastUpdateFrameId !== Ob.frameId && (this._lastUpdateFrameId = Ob.frameId, this.previousViewProjection.mD(this.currentViewProjection)), bb.setMatrix("previousWorld", this.previousWorldMatrices[hb.uniqueId]), bb.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[hb.uniqueId] = Bb.clone()
        }
      }
    }
  },
  39836: (bb, ub, hb) => {
    function Bb(bb) {
      return class extends bb {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    hb.d(ub, {
      d: () => Bb
    })
  },
  39705: (bb, ub, hb) => {
    hb.d(ub, {
      StandardMaterial: () => Bb.f
    });
    var Bb = hb(39711);
    (0, Bb.c)()
  },
  39711: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Nb,
      f: () => Jb
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(39573),
      Ub = hb(39551),
      Lb = hb(36893),
      Yb = hb(39609),
      Sb = hb(39717),
      ab = hb(39719),
      Hb = hb(39580),
      wb = hb(39728),
      Zb = hb(39724),
      Xb = hb(39795),
      pb = hb(39788),
      ob = hb(39797),
      Ab = hb(39803),
      lb = hb(39782),
      Kb = hb(39809),
      Wb = hb(39773),
      Cb = hb(39488),
      db = hb(39818),
      rb = hb(39824),
      jb = hb(39829),
      nb = hb(39836),
      Db = hb(39843),
      xb = hb(36762),
      zb = hb(39333);
    const gb = {
      effect: null,
      subMesh: null
    };
    class ib extends((0, nb.d)((0, jb.b)(Zb.d))) {}
    class vb extends((0, ab.c)(ib)) {
      constructor(bb) {
        super(bb), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class tb extends((0, Db.e)(Xb.b)) {}
    let Jb = (() => {
        var bb, ub, ab, Zb, jb, nb, Db, xb, zb, ib, Jb, eb, Nb, sb, Mb, mb, Ib, Pb, qb, Eb, yb, Vb, Fb, fb, kb, Tb, cb, Qb, Rb, bu, uu, hu, Bu;
        let Ou, Gu, Uu, Lu, Yu, Su, au, Hu, wu, Zu, Xu, pu, ou, Au, lu, Ku, Wu, Cu, du, ru, ju, nu, Du, xu, zu, gu, iu, vu, tu, Ju, eu, Nu, su, Mu, mu, Iu, Pu, qu, Eu, yu, Vu, Fu, fu, ku, Tu, cu, Qu, Ru, bh, uh, hh, Bh, Oh, Gh, Uh, Lh, Yh, Sh, ah, Hh, wh, Zh, Xh, ph, oh, Ah, lh, Kh, Wh, Ch, dh, rh, jh, nh = tb,
          Dh = [],
          xh = [],
          zh = [],
          gh = [],
          ih = [],
          vh = [],
          th = [],
          Jh = [],
          eh = [],
          Nh = [],
          sh = [],
          Mh = [],
          mh = [],
          Ih = [],
          Ph = [],
          qh = [],
          Eh = [],
          yh = [],
          Vh = [],
          Fh = [],
          fh = [],
          kh = [],
          Th = [],
          ch = [],
          Qh = [],
          Rh = [],
          bB = [],
          uB = [],
          hB = [],
          BB = [],
          OB = [],
          GB = [],
          UB = [],
          LB = [],
          YB = [],
          SB = [],
          aB = [],
          HB = [],
          wB = [],
          ZB = [],
          XB = [],
          pB = [],
          oB = [],
          AB = [],
          lB = [],
          KB = [],
          WB = [],
          CB = [],
          dB = [],
          rB = [],
          jB = [],
          nB = [],
          DB = [],
          xB = [],
          zB = [],
          gB = [],
          iB = [],
          vB = [],
          tB = [],
          JB = [],
          eB = [],
          NB = [],
          sB = [],
          MB = [],
          mB = [],
          IB = [],
          PB = [],
          qB = [],
          EB = [],
          yB = [],
          VB = [],
          FB = [],
          fB = [],
          kB = [],
          TB = [],
          cB = [],
          QB = [],
          RB = [],
          bO = [],
          uO = [],
          hO = [],
          BO = [],
          OO = [],
          GO = [],
          UO = [],
          LO = [],
          YO = [],
          SO = [],
          aO = [],
          HO = [],
          wO = [],
          ZO = [],
          XO = [],
          pO = [],
          oO = [],
          AO = [],
          lO = [],
          KO = [],
          WO = [],
          CO = [],
          dO = [],
          rO = [],
          jO = [],
          nO = [],
          DO = [],
          xO = [],
          zO = [],
          gO = [],
          iO = [],
          vO = [],
          tO = [],
          JO = [],
          eO = [],
          NO = [],
          sO = [],
          MO = [],
          mO = [],
          IO = [],
          PO = [],
          qO = [],
          EO = [],
          yO = [],
          VO = [],
          FO = [],
          fO = [],
          kO = [],
          TO = [],
          cO = [],
          QO = [],
          RO = [],
          bG = [],
          uG = [],
          hG = [],
          BG = [],
          OG = [],
          GG = [],
          UG = [],
          LG = [],
          YG = [],
          SG = [],
          aG = [],
          HG = [],
          wG = [],
          ZG = [],
          XG = [],
          pG = [];
        return bb = class extends nh {
          get diffuseTexture() {
            return (0, Bb.b)(this, ub, "f")
          }
          set diffuseTexture(bb) {
            (0, Bb.f)(this, ub, bb, "f")
          }
          get ambientTexture() {
            return (0, Bb.b)(this, ab, "f")
          }
          set ambientTexture(bb) {
            (0, Bb.f)(this, ab, bb, "f")
          }
          get opacityTexture() {
            return (0, Bb.b)(this, Zb, "f")
          }
          set opacityTexture(bb) {
            (0, Bb.f)(this, Zb, bb, "f")
          }
          get reflectionTexture() {
            return (0, Bb.b)(this, jb, "f")
          }
          set reflectionTexture(bb) {
            (0, Bb.f)(this, jb, bb, "f")
          }
          get emissiveTexture() {
            return (0, Bb.b)(this, nb, "f")
          }
          set emissiveTexture(bb) {
            (0, Bb.f)(this, nb, bb, "f")
          }
          get specularTexture() {
            return (0, Bb.b)(this, Db, "f")
          }
          set specularTexture(bb) {
            (0, Bb.f)(this, Db, bb, "f")
          }
          get bumpTexture() {
            return (0, Bb.b)(this, xb, "f")
          }
          set bumpTexture(bb) {
            (0, Bb.f)(this, xb, bb, "f")
          }
          get lightmapTexture() {
            return (0, Bb.b)(this, zb, "f")
          }
          set lightmapTexture(bb) {
            (0, Bb.f)(this, zb, bb, "f")
          }
          get refractionTexture() {
            return (0, Bb.b)(this, ib, "f")
          }
          set refractionTexture(bb) {
            (0, Bb.f)(this, ib, bb, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, Bb.b)(this, Jb, "f")
          }
          set useAlphaFromDiffuseTexture(bb) {
            (0, Bb.f)(this, Jb, bb, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, Bb.b)(this, eb, "f")
          }
          set useEmissiveAsIllumination(bb) {
            (0, Bb.f)(this, eb, bb, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, Bb.b)(this, Nb, "f")
          }
          set linkEmissiveWithDiffuse(bb) {
            (0, Bb.f)(this, Nb, bb, "f")
          }
          get useSpecularOverAlpha() {
            return (0, Bb.b)(this, sb, "f")
          }
          set useSpecularOverAlpha(bb) {
            (0, Bb.f)(this, sb, bb, "f")
          }
          get useReflectionOverAlpha() {
            return (0, Bb.b)(this, Mb, "f")
          }
          set useReflectionOverAlpha(bb) {
            (0, Bb.f)(this, Mb, bb, "f")
          }
          get disableLighting() {
            return (0, Bb.b)(this, mb, "f")
          }
          set disableLighting(bb) {
            (0, Bb.f)(this, mb, bb, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, Bb.b)(this, Ib, "f")
          }
          set useObjectSpaceNormalMap(bb) {
            (0, Bb.f)(this, Ib, bb, "f")
          }
          get useParallax() {
            return (0, Bb.b)(this, Pb, "f")
          }
          set useParallax(bb) {
            (0, Bb.f)(this, Pb, bb, "f")
          }
          get useParallaxOcclusion() {
            return (0, Bb.b)(this, qb, "f")
          }
          set useParallaxOcclusion(bb) {
            (0, Bb.f)(this, qb, bb, "f")
          }
          get roughness() {
            return (0, Bb.b)(this, Eb, "f")
          }
          set roughness(bb) {
            (0, Bb.f)(this, Eb, bb, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, Bb.b)(this, yb, "f")
          }
          set useLightmapAsShadowmap(bb) {
            (0, Bb.f)(this, yb, bb, "f")
          }
          get diffuseFresnelParameters() {
            return (0, Bb.b)(this, Vb, "f")
          }
          set diffuseFresnelParameters(bb) {
            (0, Bb.f)(this, Vb, bb, "f")
          }
          get opacityFresnelParameters() {
            return (0, Bb.b)(this, Fb, "f")
          }
          set opacityFresnelParameters(bb) {
            (0, Bb.f)(this, Fb, bb, "f")
          }
          get reflectionFresnelParameters() {
            return (0, Bb.b)(this, fb, "f")
          }
          set reflectionFresnelParameters(bb) {
            (0, Bb.f)(this, fb, bb, "f")
          }
          get refractionFresnelParameters() {
            return (0, Bb.b)(this, kb, "f")
          }
          set refractionFresnelParameters(bb) {
            (0, Bb.f)(this, kb, bb, "f")
          }
          get emissiveFresnelParameters() {
            return (0, Bb.b)(this, Tb, "f")
          }
          set emissiveFresnelParameters(bb) {
            (0, Bb.f)(this, Tb, bb, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, Bb.b)(this, cb, "f")
          }
          set useReflectionFresnelFromSpecular(bb) {
            (0, Bb.f)(this, cb, bb, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, Bb.b)(this, Qb, "f")
          }
          set useGlossinessFromSpecularMapAlpha(bb) {
            (0, Bb.f)(this, Qb, bb, "f")
          }
          get maxSimultaneousLights() {
            return (0, Bb.b)(this, Rb, "f")
          }
          set maxSimultaneousLights(bb) {
            (0, Bb.f)(this, Rb, bb, "f")
          }
          get invertNormalMapX() {
            return (0, Bb.b)(this, bu, "f")
          }
          set invertNormalMapX(bb) {
            (0, Bb.f)(this, bu, bb, "f")
          }
          get invertNormalMapY() {
            return (0, Bb.b)(this, uu, "f")
          }
          set invertNormalMapY(bb) {
            (0, Bb.f)(this, uu, bb, "f")
          }
          get twoSidedLighting() {
            return (0, Bb.b)(this, hu, "f")
          }
          set twoSidedLighting(bb) {
            (0, Bb.f)(this, hu, bb, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Bb.b)(this, Bu, "f")
          }
          set applyDecalMapAfterDetailMap(bb) {
            (0, Bb.f)(this, Bu, bb, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(hb, Ob) {
            super(hb, Ob, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || bb.ForceGLSL), this._diffuseTexture = (0, Bb.k)(this, Dh, null), ub.set(this, ((0, Bb.k)(this, xh), (0, Bb.k)(this, zh, void 0))), this._ambientTexture = ((0, Bb.k)(this, gh), (0, Bb.k)(this, ih, null)), ab.set(this, ((0, Bb.k)(this, vh), (0, Bb.k)(this, th, void 0))), this._opacityTexture = ((0, Bb.k)(this, Jh), (0, Bb.k)(this, eh, null)), Zb.set(this, ((0, Bb.k)(this, Nh), (0, Bb.k)(this, sh, void 0))), this._reflectionTexture = ((0, Bb.k)(this, Mh), (0, Bb.k)(this, mh, null)), jb.set(this, ((0, Bb.k)(this, Ih), (0, Bb.k)(this, Ph, void 0))), this._emissiveTexture = ((0, Bb.k)(this, qh), (0, Bb.k)(this, Eh, null)), nb.set(this, ((0, Bb.k)(this, yh), (0, Bb.k)(this, Vh, void 0))), this._specularTexture = ((0, Bb.k)(this, Fh), (0, Bb.k)(this, fh, null)), Db.set(this, ((0, Bb.k)(this, kh), (0, Bb.k)(this, Th, void 0))), this._bumpTexture = ((0, Bb.k)(this, ch), (0, Bb.k)(this, Qh, null)), xb.set(this, ((0, Bb.k)(this, Rh), (0, Bb.k)(this, bB, void 0))), this._lightmapTexture = ((0, Bb.k)(this, uB), (0, Bb.k)(this, hB, null)), zb.set(this, ((0, Bb.k)(this, BB), (0, Bb.k)(this, OB, void 0))), this._refractionTexture = ((0, Bb.k)(this, GB), (0, Bb.k)(this, UB, null)), ib.set(this, ((0, Bb.k)(this, LB), (0, Bb.k)(this, YB, void 0))), this.ambientColor = ((0, Bb.k)(this, SB), (0, Bb.k)(this, aB, new Lb.b(0, 0, 0))), this.diffuseColor = ((0, Bb.k)(this, HB), (0, Bb.k)(this, wB, new Lb.b(1, 1, 1))), this.specularColor = ((0, Bb.k)(this, ZB), (0, Bb.k)(this, XB, new Lb.b(1, 1, 1))), this.emissiveColor = ((0, Bb.k)(this, pB), (0, Bb.k)(this, oB, new Lb.b(0, 0, 0))), this.specularPower = ((0, Bb.k)(this, AB), (0, Bb.k)(this, lB, 64)), this._useAlphaFromDiffuseTexture = ((0, Bb.k)(this, KB), (0, Bb.k)(this, WB, !1)), Jb.set(this, ((0, Bb.k)(this, CB), (0, Bb.k)(this, dB, void 0))), this._useEmissiveAsIllumination = ((0, Bb.k)(this, rB), (0, Bb.k)(this, jB, !1)), eb.set(this, ((0, Bb.k)(this, nB), (0, Bb.k)(this, DB, void 0))), this._linkEmissiveWithDiffuse = ((0, Bb.k)(this, xB), (0, Bb.k)(this, zB, !1)), Nb.set(this, ((0, Bb.k)(this, gB), (0, Bb.k)(this, iB, void 0))), this._useSpecularOverAlpha = ((0, Bb.k)(this, vB), (0, Bb.k)(this, tB, !1)), sb.set(this, ((0, Bb.k)(this, JB), (0, Bb.k)(this, eB, void 0))), this._useReflectionOverAlpha = ((0, Bb.k)(this, NB), (0, Bb.k)(this, sB, !1)), Mb.set(this, ((0, Bb.k)(this, MB), (0, Bb.k)(this, mB, void 0))), this._disableLighting = ((0, Bb.k)(this, IB), (0, Bb.k)(this, PB, !1)), mb.set(this, ((0, Bb.k)(this, qB), (0, Bb.k)(this, EB, void 0))), this._useObjectSpaceNormalMap = ((0, Bb.k)(this, yB), (0, Bb.k)(this, VB, !1)), Ib.set(this, ((0, Bb.k)(this, FB), (0, Bb.k)(this, fB, void 0))), this._useParallax = ((0, Bb.k)(this, kB), (0, Bb.k)(this, TB, !1)), Pb.set(this, ((0, Bb.k)(this, cB), (0, Bb.k)(this, QB, void 0))), this._useParallaxOcclusion = ((0, Bb.k)(this, RB), (0, Bb.k)(this, bO, !1)), qb.set(this, ((0, Bb.k)(this, uO), (0, Bb.k)(this, hO, void 0))), this.parallaxScaleBias = ((0, Bb.k)(this, BO), (0, Bb.k)(this, OO, .05)), this._roughness = ((0, Bb.k)(this, GO), (0, Bb.k)(this, UO, 0)), Eb.set(this, ((0, Bb.k)(this, LO), (0, Bb.k)(this, YO, void 0))), this.indexOfRefraction = ((0, Bb.k)(this, SO), (0, Bb.k)(this, aO, .98)), this.invertRefractionY = ((0, Bb.k)(this, HO), (0, Bb.k)(this, wO, !0)), this.alphaCutOff = ((0, Bb.k)(this, ZO), (0, Bb.k)(this, XO, .4)), this._useLightmapAsShadowmap = ((0, Bb.k)(this, pO), (0, Bb.k)(this, oO, !1)), yb.set(this, ((0, Bb.k)(this, AO), (0, Bb.k)(this, lO, void 0))), this._diffuseFresnelParameters = ((0, Bb.k)(this, KO), (0, Bb.k)(this, WO, void 0)), Vb.set(this, ((0, Bb.k)(this, CO), (0, Bb.k)(this, dO, void 0))), this._opacityFresnelParameters = ((0, Bb.k)(this, rO), (0, Bb.k)(this, jO, void 0)), Fb.set(this, ((0, Bb.k)(this, nO), (0, Bb.k)(this, DO, void 0))), this._reflectionFresnelParameters = ((0, Bb.k)(this, xO), (0, Bb.k)(this, zO, void 0)), fb.set(this, ((0, Bb.k)(this, gO), (0, Bb.k)(this, iO, void 0))), this._refractionFresnelParameters = ((0, Bb.k)(this, vO), (0, Bb.k)(this, tO, void 0)), kb.set(this, ((0, Bb.k)(this, JO), (0, Bb.k)(this, eO, void 0))), this._emissiveFresnelParameters = ((0, Bb.k)(this, NO), (0, Bb.k)(this, sO, void 0)), Tb.set(this, ((0, Bb.k)(this, MO), (0, Bb.k)(this, mO, void 0))), this._useReflectionFresnelFromSpecular = ((0, Bb.k)(this, IO), (0, Bb.k)(this, PO, !1)), cb.set(this, ((0, Bb.k)(this, qO), (0, Bb.k)(this, EO, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, Bb.k)(this, yO), (0, Bb.k)(this, VO, !1)), Qb.set(this, ((0, Bb.k)(this, FO), (0, Bb.k)(this, fO, void 0))), this._maxSimultaneousLights = ((0, Bb.k)(this, kO), (0, Bb.k)(this, TO, 4)), Rb.set(this, ((0, Bb.k)(this, cO), (0, Bb.k)(this, QO, void 0))), this._invertNormalMapX = ((0, Bb.k)(this, RO), (0, Bb.k)(this, bG, !1)), bu.set(this, ((0, Bb.k)(this, uG), (0, Bb.k)(this, hG, void 0))), this._invertNormalMapY = ((0, Bb.k)(this, BG), (0, Bb.k)(this, OG, !1)), uu.set(this, ((0, Bb.k)(this, GG), (0, Bb.k)(this, UG, void 0))), this._twoSidedLighting = ((0, Bb.k)(this, LG), (0, Bb.k)(this, YG, !1)), hu.set(this, ((0, Bb.k)(this, SG), (0, Bb.k)(this, aG, void 0))), this._applyDecalMapAfterDetailMap = ((0, Bb.k)(this, HG), (0, Bb.k)(this, wG, !1)), Bu.set(this, ((0, Bb.k)(this, ZG), (0, Bb.k)(this, XG, void 0))), this._vertexPullingMetadata = ((0, Bb.k)(this, pG), null), this._renderTargets = new Gb.h(16), this._globalAmbientColor = new Lb.b(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new Ab.b(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new Sb.d, this.getRenderTargetTextures = () => (this._renderTargets.reset(), bb.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), bb.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
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
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === wb.e.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== wb.e.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(ub, hb) {
            let Bb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Ob = hb._drawWrapper;
            if (Ob.effect && this.isFrozen && Ob._wasPreviouslyReady && Ob._wasPreviouslyUsingInstances === Bb) return !0;
            hb.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), hb.materialDefines = new vb(this._eventInfo.defineNames));
            const Gb = this.ZN(),
              Ub = hb.materialDefines;
            if (this._isReadyForSubMesh(hb)) return !0;
            const Lb = Gb.UX();
            if (Ub._needNormals = (0, Wb.Q)(Gb, ub, Ub, !0, this._maxSimultaneousLights, this._disableLighting), !(0, Wb.d)(Gb, ub, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, Wb.U)(Gb, Ub);
            const ab = this.needAlphaBlendingForMesh(ub) && this.ZN().useOrderIndependentTransparency;
            if ((0, Wb.X)(Gb, Ub, this.canRenderToMRT && !ab), (0, Wb.W)(Gb, Ub, ab), rb.d.PrepareDefines(Lb.currentRenderPassId, ub, Ub), Ub._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Ub._needUVs = !1;
              for (let bb = 1; bb <= 6; ++bb) Ub["MAINUV" + bb] = !1;
              if (Gb.texturesEnabled) {
                if (Ub.DIFFUSEDIRECTUV = 0, Ub.BUMPDIRECTUV = 0, Ub.AMBIENTDIRECTUV = 0, Ub.OPACITYDIRECTUV = 0, Ub.EMISSIVEDIRECTUV = 0, Ub.SPECULARDIRECTUV = 0, Ub.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && bb.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, Wb.R)(this._diffuseTexture, Ub, "DIFFUSE")
                } else Ub.DIFFUSE = !1;
                if (this._ambientTexture && bb.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, Wb.R)(this._ambientTexture, Ub, "AMBIENT")
                } else Ub.AMBIENT = !1;
                if (this._opacityTexture && bb.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, Wb.R)(this._opacityTexture, Ub, "OPACITY"), Ub.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else Ub.OPACITY = !1;
                if (this._reflectionTexture && bb.ReflectionTextureEnabled ? (Ub.ROUGHNESS = this._roughness > 0, Ub.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (Ub.ROUGHNESS = !1, Ub.REFLECTIONOVERALPHA = !1), !(0, Wb.O)(Gb, this._reflectionTexture, Ub)) return !1;
                if (this._emissiveTexture && bb.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, Wb.R)(this._emissiveTexture, Ub, "EMISSIVE")
                } else Ub.EMISSIVE = !1;
                if (this._lightmapTexture && bb.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, Wb.R)(this._lightmapTexture, Ub, "LIGHTMAP"), Ub.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Ub.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else Ub.LIGHTMAP = !1;
                if (this._specularTexture && bb.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, Wb.R)(this._specularTexture, Ub, "SPECULAR"), Ub.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else Ub.SPECULAR = !1;
                if (Gb.UX().getCaps().standardDerivatives && this._bumpTexture && bb.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, Wb.R)(this._bumpTexture, Ub, "BUMP"), Ub.PARALLAX = this._useParallax, Ub.PARALLAX_RHS = Gb.useRightHandedSystem, Ub.PARALLAXOCCLUSION = this._useParallaxOcclusion, Ub.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else Ub.BUMP = !1, Ub.PARALLAX = !1, Ub.PARALLAX_RHS = !1, Ub.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && bb.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  Ub._needUVs = !0, Ub.REFRACTION = !0, Ub.REFRACTIONMAP_3D = this._refractionTexture.isCube, Ub.RGBDREFRACTION = this._refractionTexture.isRGBD, Ub.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else Ub.REFRACTION = !1;
                Ub.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else Ub.DIFFUSE = !1, Ub.AMBIENT = !1, Ub.OPACITY = !1, Ub.REFLECTION = !1, Ub.EMISSIVE = !1, Ub.LIGHTMAP = !1, Ub.BUMP = !1, Ub.REFRACTION = !1;
              Ub.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), Ub.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, Ub.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, Ub.SPECULAROVERALPHA = this._useSpecularOverAlpha, Ub.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Ub.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, Ub.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(ub), Ub.TEXTURE_REPETITION_MODE = Lb.version > 1 || Lb.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Ub, this._eventInfo.subMesh = hb, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Ub._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(Ub), Ub.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, Ub.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (Ub._areFresnelDirty && (bb.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (Ub.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, Ub.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, Ub.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, Ub.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, Ub.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, Ub.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, Ub._needNormals = !0, Ub.FRESNEL = !0) : Ub.FRESNEL = !1), Ub.AREALIGHTUSED || Ub.CLUSTLIGHT_BATCH)
              for (let bb = 0; bb < ub.lightSources.length; bb++)
                if (!ub.lightSources[bb]._isReady()) return !1;
            (0, Wb.S)(ub, Gb, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(ub), Ub, this._applyDecalMapAfterDetailMap, this._useVertexPulling, hb.getRenderingMesh(), this._isVertexOutputInvariant), (0, Wb.K)(Gb, Lb, this, Ub, Bb, null, hb.getRenderingMesh().hasThinInstances), this._eventInfo.defines = Ub, this._eventInfo.mesh = ub, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Wb.I)(ub, Ub, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let wb = !1;
            if (Ub.isDirty) {
              const Bb = Ub._areLightsDisposed;
              Ub.markAsProcessed();
              const Ob = new ob.c;
              Ub.REFLECTION && Ob.addFallback(0, "REFLECTION"), Ub.SPECULAR && Ob.addFallback(0, "SPECULAR"), Ub.BUMP && Ob.addFallback(0, "BUMP"), Ub.PARALLAX && Ob.addFallback(1, "PARALLAX"), Ub.PARALLAX_RHS && Ob.addFallback(1, "PARALLAX_RHS"), Ub.PARALLAXOCCLUSION && Ob.addFallback(0, "PARALLAXOCCLUSION"), Ub.SPECULAROVERALPHA && Ob.addFallback(0, "SPECULAROVERALPHA"), Ub.FOG && Ob.addFallback(1, "FOG"), Ub.POINTSIZE && Ob.addFallback(0, "POINTSIZE"), Ub.LOGARITHMICDEPTH && Ob.addFallback(0, "LOGARITHMICDEPTH"), (0, Wb.x)(Ub, Ob, this._maxSimultaneousLights), Ub.SPECULARTERM && Ob.addFallback(0, "SPECULARTERM"), Ub.DIFFUSEFRESNEL && Ob.addFallback(1, "DIFFUSEFRESNEL"), Ub.OPACITYFRESNEL && Ob.addFallback(2, "OPACITYFRESNEL"), Ub.REFLECTIONFRESNEL && Ob.addFallback(3, "REFLECTIONFRESNEL"), Ub.EMISSIVEFRESNEL && Ob.addFallback(4, "EMISSIVEFRESNEL"), Ub.FRESNEL && Ob.addFallback(4, "FRESNEL"), Ub.MULTIVIEW && Ob.addFallback(0, "MULTIVIEW");
              const ab = [Yb.i.PositionKind];
              Ub.NORMAL && ab.push(Yb.i.NormalKind), Ub.TANGENT && ab.push(Yb.i.TangentKind);
              for (let bb = 1; bb <= 6; ++bb) Ub["UV" + bb] && ab.push(`uv${1===bb?"":bb}`);
              Ub.VERTEXCOLOR && ab.push(Yb.i.ColorKind), (0, Wb.A)(ab, ub, Ub, Ob), (0, Wb.E)(ab, Ub), (0, Wb.F)(ab, ub, Ub), (0, Wb.y)(ab, ub, Ub);
              let Zb = "default";
              const Xb = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                pb = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, Wb.Z)(Xb, pb, !1);
              const Ab = ["Material", "Scene", "Mesh"],
                Cb = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: Ub.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = Ob, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = Ub, this._eventInfo.uniforms = Xb, this._eventInfo.attributes = ab, this._eventInfo.samplers = pb, this._eventInfo.uniformBuffersNames = Ab, this._eventInfo.customCode = void 0, this._eventInfo.mesh = ub, this._eventInfo.indexParameters = Cb, this._callbackPluginEventGeneric(128, this._eventInfo), rb.d.AddUniformsAndSamplers(Xb, pb), Sb.d.AddUniforms(Xb), Sb.d.AddSamplers(pb), Hb.b && (Hb.b.PrepareUniforms(Xb, Ub), Hb.b.PrepareSamplers(pb, Ub)), (0, Wb.bb)({
                  uniformsNames: Xb,
                  uniformBuffersNames: Ab,
                  samplers: pb,
                  defines: Ub,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, lb.d)(Xb), this._useVertexPulling) {
                const bb = hb.getRenderingMesh(),
                  ub = bb?.geometry;
                ub && (this._vertexPullingMetadata = (0, Kb.h)(ub), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((bb, ub) => {
                  Xb.push(`vp_${ub}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const db = {};
              this.customShaderNameResolve && (Zb = this.customShaderNameResolve(Zb, Xb, Ab, pb, Ub, ab, db));
              const jb = Ub.toString(),
                nb = hb.effect,
                Db = Gb.UX().createEffect(Zb, {
                  attributes: ab,
                  uniformsNames: Xb,
                  uniformBuffersNames: Ab,
                  samplers: pb,
                  defines: jb,
                  fallbacks: Ob,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: Cb,
                  processFinalCode: db.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: Ub.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: bb._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, Lb);
              if (this._eventInfo.customCode = void 0, Db)
                if (this._onEffectCreatedObservable && (gb.effect = Db, gb.subMesh = hb, this._onEffectCreatedObservable.notifyObservers(gb)), this.allowShaderHotSwapping && nb && !Db.isReady()) {
                  if (Ub.markAsUnprocessed(), wb = this.isFrozen, Bb) return Ub._areLightsDisposed = !0, !1
                } else Gb.resetCachedMaterial(), hb.setEffect(Db, Ub, this._materialContext)
            }
            return !(!hb.effect || !hb.effect.isReady()) && (Ub._renderId = Gb.getRenderId(), Ob._wasPreviouslyReady = !wb, Ob._wasPreviouslyUsingInstances = Bb, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const bb = this._uniformBuffer;
            bb.addUniform("diffuseLeftColor", 4), bb.addUniform("diffuseRightColor", 4), bb.addUniform("opacityParts", 4), bb.addUniform("reflectionLeftColor", 4), bb.addUniform("reflectionRightColor", 4), bb.addUniform("refractionLeftColor", 4), bb.addUniform("refractionRightColor", 4), bb.addUniform("emissiveLeftColor", 4), bb.addUniform("emissiveRightColor", 4), bb.addUniform("vDiffuseInfos", 2), bb.addUniform("vAmbientInfos", 2), bb.addUniform("vOpacityInfos", 2), bb.addUniform("vEmissiveInfos", 2), bb.addUniform("vLightmapInfos", 2), bb.addUniform("vSpecularInfos", 2), bb.addUniform("vBumpInfos", 3), bb.addUniform("diffuseMatrix", 16), bb.addUniform("ambientMatrix", 16), bb.addUniform("opacityMatrix", 16), bb.addUniform("emissiveMatrix", 16), bb.addUniform("lightmapMatrix", 16), bb.addUniform("specularMatrix", 16), bb.addUniform("bumpMatrix", 16), bb.addUniform("vTangentSpaceParams", 2), bb.addUniform("pointSize", 1), bb.addUniform("alphaCutOff", 1), bb.addUniform("refractionMatrix", 16), bb.addUniform("vRefractionInfos", 4), bb.addUniform("vRefractionPosition", 3), bb.addUniform("vRefractionSize", 3), bb.addUniform("vSpecularColor", 4), bb.addUniform("vEmissiveColor", 3), bb.addUniform("vDiffuseColor", 4), bb.addUniform("vAmbientColor", 3), bb.addUniform("cameraInfo", 4), bb.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Wb.Y)(bb, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(ub, hb, Bb) {
            const Ob = this.ZN(),
              Gb = Bb.materialDefines;
            if (!Gb) return;
            const Yb = Bb.effect;
            if (!Yb) return;
            this._activeEffect = Yb, hb.getMeshUniformBuffer().bindToEffect(Yb, "Mesh"), hb.transferToEffect(ub), this._uniformBuffer.bindToEffect(Yb, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Ob, hb, ub, this.isFrozen), rb.d.Bind(Ob.UX().currentRenderPassId, this._activeEffect, hb, ub, this);
            const Sb = Ob.activeCamera;
            Sb ? this._uniformBuffer.updateFloat4("cameraInfo", Sb.minZ, Sb.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const ab = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", ab[0], ab[1], ab[2], ab[3]), this._eventInfo.subMesh = Bb, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Gb.OBJECTSPACE_NORMALMAP && (ub.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Hb = this._mustRebind(Ob, Yb, Bb, hb.visibility),
              wb = Ob.UX()._features.needToAlwaysBindUniformBuffers;
            (0, Wb.e)(hb, Yb), this._vertexPullingMetadata && (0, Kb.d)(Yb, this._vertexPullingMetadata);
            const Zb = this._uniformBuffer;
            if (Hb) {
              if (this.bindViewProjection(Yb), !Zb.useUbo || !this.isFrozen || !Zb.isSync || Bb._drawWrapper._forceRebindOnNextCall) {
                if (bb.FresnelEnabled && Gb.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (Zb.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), Zb.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const bb = Lb.k.Color3[0];
                    bb.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), Zb.updateColor4("opacityParts", bb, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (Zb.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), Zb.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (Zb.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), Zb.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (Zb.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), Zb.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (Gb.ALPHATEST && Zb.updateFloat("alphaCutOff", this.alphaCutOff), Ob.texturesEnabled && (this._diffuseTexture && bb.DiffuseTextureEnabled && (Zb.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, Wb.u)(this._diffuseTexture, Zb, "diffuse")), this._ambientTexture && bb.AmbientTextureEnabled && (Zb.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, Wb.u)(this._ambientTexture, Zb, "ambient")), this._opacityTexture && bb.OpacityTextureEnabled && (Zb.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Wb.u)(this._opacityTexture, Zb, "opacity")), (0, Wb.h)(Ob, Gb, Zb, Lb.b.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && bb.ReflectionTextureEnabled || Zb.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && bb.EmissiveTextureEnabled && (Zb.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Wb.u)(this._emissiveTexture, Zb, "emissive")), this._lightmapTexture && bb.LightmapTextureEnabled && (Zb.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Wb.u)(this._lightmapTexture, Zb, "lightmap")), this._specularTexture && bb.SpecularTextureEnabled && (Zb.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, Wb.u)(this._specularTexture, Zb, "specular")), this._bumpTexture && Ob.UX().getCaps().standardDerivatives && bb.BumpTextureEnabled && (Zb.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, Wb.u)(this._bumpTexture, Zb, "bump"), Ob._mirroredCameraPosition ? Zb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Zb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && bb.RefractionTextureEnabled)) {
                  let bb = 1;
                  if (this._refractionTexture.isCube || (Zb.S_("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (bb = this._refractionTexture.depth)), Zb.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, bb, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const bb = this._refractionTexture;
                    Zb.updateVector3("vRefractionPosition", bb.boundingBoxPosition), Zb.updateVector3("vRefractionSize", bb.boundingBoxSize)
                  }
                }
                this.pointsCloud && Zb.updateFloat("pointSize", this.pointSize), Zb.updateColor4("vSpecularColor", this.specularColor, this.specularPower), Zb.updateColor3("vEmissiveColor", bb.EmissiveTextureEnabled ? this.emissiveColor : Lb.b.BlackReadOnly), Zb.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), Ob.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), Zb.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              Ob.texturesEnabled && (this._diffuseTexture && bb.DiffuseTextureEnabled && Yb.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && bb.AmbientTextureEnabled && Yb.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && bb.OpacityTextureEnabled && Yb.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && bb.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? Yb.setTexture("reflectionCubeSampler", this._reflectionTexture) : Yb.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && bb.EmissiveTextureEnabled && Yb.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && bb.LightmapTextureEnabled && Yb.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && bb.SpecularTextureEnabled && Yb.setTexture("specularSampler", this._specularTexture), this._bumpTexture && Ob.UX().getCaps().standardDerivatives && bb.BumpTextureEnabled && Yb.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && bb.RefractionTextureEnabled && (this._refractionTexture.isCube ? Yb.setTexture("refractionCubeSampler", this._refractionTexture) : Yb.setTexture("refraction2DSampler", this._refractionTexture))), this.ZN().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(hb) && this.ZN().depthPeelingRenderer.bind(Yb), this._eventInfo.subMesh = Bb, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, lb.g)(Yb, this, Ob), this.bindEyePosition(Yb)
            } else wb && (this._needToBindSceneUbo = !0);
            !Hb && this.isFrozen && !wb || !Ob.lightsEnabled || this._disableLighting || (0, Wb.j)(Ob, hb, Yb, Gb, this._maxSimultaneousLights), !Hb && this.isFrozen || ((Ob.fogEnabled && hb.applyFog && Ob.fogMode !== Ub.f.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || hb.receiveShadows || Gb.PREPASS || Gb.CLUSTLIGHT_BATCH) && this.bindView(Yb), (0, Wb.f)(Ob, hb, Yb), Gb.NUM_MORPH_INFLUENCERS && (0, Wb.p)(hb, Yb), Gb.BAKED_VERTEX_ANIMATION_TEXTURE && hb.bakedVertexAnimationManager?.bind(Yb, Gb.INSTANCES), this.useLogarithmicDepth && (0, Wb.l)(Gb, Yb, Ob), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(hb, this._activeEffect, Bb), Zb.update()
          }
          _canBindRunFollower(ub, hb, Bb, Ob, Gb) {
            const Ub = ub.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === bb.prototype.isReadyForSubMesh && this.bindForSubMesh === bb.prototype.bindForSubMesh && this._mustRebind === Xb.b.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !hb._features.needToAlwaysBindUniformBuffers && !(Ub && Ub.enabled && Ub.currentRTisSceneRT) && !rb.d._Configurations[hb.currentRenderPassId] && !Ob.materialDefines?.OBJECTSPACE_NORMALMAP && !Bb.skeleton && !Gb._bonesComputationForcedToCPU
          }
          _bindRunFollower(bb, ub, hb, Bb) {
            this._activeEffect = Bb, ub.getMeshUniformBuffer().bindToEffect(Bb, "Mesh"), ub.transferToEffect(bb);
            const Ob = this._uniformBuffer;
            Ob.bindToEffect(Bb, "Material");
            const Gb = this._scene.activeCamera;
            Gb ? Ob.updateFloat4("cameraInfo", Gb.minZ, Gb.maxZ, 0, 0) : Ob.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Ub = this.textureRepetitionHexTilingParams;
            Ob.updateFloat4("vTextureRepetitionHexTilingParams", Ub[0], Ub[1], Ub[2], Ub[3]), this._afterBind(ub, Bb, hb), Ob.update()
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
          dispose(bb, ub) {
            ub && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(bb, ub)
          }
          clone(ub) {
            let hb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Ob = Cb.c.Clone((() => new bb(ub, this.ZN())), this, {
              cloneTexturesOnlyOnce: hb
            });
            return Ob.name = ub, Ob.id = ub, this.stencil.copyTo(Ob.stencil), this._clonePlugins(Ob, Bb), Ob
          }
          static Parse(ub, hb, Bb) {
            const Ob = Cb.c.Parse((() => new bb(ub.name, hb)), ub, hb, Bb);
            return ub.stencil && Ob.stencil.parse(ub.stencil, hb, Bb), wb.e._ParsePlugins(ub, Ob, hb, Bb), Ob
          }
          static get DiffuseTextureEnabled() {
            return pb.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(bb) {
            pb.e.DiffuseTextureEnabled = bb
          }
          static get DetailTextureEnabled() {
            return pb.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(bb) {
            pb.e.DetailTextureEnabled = bb
          }
          static get AmbientTextureEnabled() {
            return pb.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(bb) {
            pb.e.AmbientTextureEnabled = bb
          }
          static get OpacityTextureEnabled() {
            return pb.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(bb) {
            pb.e.OpacityTextureEnabled = bb
          }
          static get ReflectionTextureEnabled() {
            return pb.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(bb) {
            pb.e.ReflectionTextureEnabled = bb
          }
          static get EmissiveTextureEnabled() {
            return pb.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(bb) {
            pb.e.EmissiveTextureEnabled = bb
          }
          static get SpecularTextureEnabled() {
            return pb.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(bb) {
            pb.e.SpecularTextureEnabled = bb
          }
          static get BumpTextureEnabled() {
            return pb.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(bb) {
            pb.e.BumpTextureEnabled = bb
          }
          static get LightmapTextureEnabled() {
            return pb.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(bb) {
            pb.e.LightmapTextureEnabled = bb
          }
          static get RefractionTextureEnabled() {
            return pb.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(bb) {
            pb.e.RefractionTextureEnabled = bb
          }
          static get ColorGradingTextureEnabled() {
            return pb.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(bb) {
            pb.e.ColorGradingTextureEnabled = bb
          }
          static get FresnelEnabled() {
            return pb.e.FresnelEnabled
          }
          static set FresnelEnabled(bb) {
            pb.e.FresnelEnabled = bb
          }
        }, ub = new WeakMap, ab = new WeakMap, Zb = new WeakMap, jb = new WeakMap, nb = new WeakMap, Db = new WeakMap, xb = new WeakMap, zb = new WeakMap, ib = new WeakMap, Jb = new WeakMap, eb = new WeakMap, Nb = new WeakMap, sb = new WeakMap, Mb = new WeakMap, mb = new WeakMap, Ib = new WeakMap, Pb = new WeakMap, qb = new WeakMap, Eb = new WeakMap, yb = new WeakMap, Vb = new WeakMap, Fb = new WeakMap, fb = new WeakMap, kb = new WeakMap, Tb = new WeakMap, cb = new WeakMap, Qb = new WeakMap, Rb = new WeakMap, bu = new WeakMap, uu = new WeakMap, hu = new WeakMap, Bu = new WeakMap, (() => {
          const ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(nh[Symbol.metadata] ?? null) : void 0;
          Ou = [(0, Ob.D)("diffuseTexture")], Gu = [(0, Ob.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], Uu = [(0, Ob.D)("ambientTexture")], Lu = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], Yu = [(0, Ob.D)("opacityTexture")], Su = [(0, Ob.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], au = [(0, Ob.D)("reflectionTexture")], Hu = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], wu = [(0, Ob.D)("emissiveTexture")], Zu = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], Xu = [(0, Ob.D)("specularTexture")], pu = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], ou = [(0, Ob.D)("bumpTexture")], Au = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], lu = [(0, Ob.D)("lightmapTexture")], Ku = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], Wu = [(0, Ob.D)("refractionTexture")], Cu = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], du = [(0, Ob.p)("ambient")], ru = [(0, Ob.p)("diffuse")], ju = [(0, Ob.p)("specular")], nu = [(0, Ob.p)("emissive")], Du = [(0, Ob.K)()], xu = [(0, Ob.K)("useAlphaFromDiffuseTexture")], zu = [() => ({
            init(bb) {
              return void 0 === bb && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = bb), bb
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(bb) {
              this._useAlphaFromDiffuseTexture = bb
            }
          })], gu = [(0, Ob.K)("useEmissiveAsIllumination")], iu = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], vu = [(0, Ob.K)("linkEmissiveWithDiffuse")], tu = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], Ju = [(0, Ob.K)("useSpecularOverAlpha")], eu = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], Nu = [(0, Ob.K)("useReflectionOverAlpha")], su = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], Mu = [(0, Ob.K)("disableLighting")], mu = [(0, Ob.i)("_markAllSubMeshesAsLightsDirty")], Iu = [(0, Ob.K)("useObjectSpaceNormalMap")], Pu = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], qu = [(0, Ob.K)("useParallax")], Eu = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], yu = [(0, Ob.K)("useParallaxOcclusion")], Vu = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], Fu = [(0, Ob.K)()], fu = [(0, Ob.K)("roughness")], ku = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], Tu = [(0, Ob.K)()], cu = [(0, Ob.K)()], Qu = [(0, Ob.K)()], Ru = [(0, Ob.K)("useLightmapAsShadowmap")], bh = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], uh = [(0, Ob.w)("diffuseFresnelParameters")], hh = [(0, Ob.i)("_markAllSubMeshesAsFresnelDirty")], Bh = [(0, Ob.w)("opacityFresnelParameters")], Oh = [(0, Ob.i)("_markAllSubMeshesAsFresnelAndMiscDirty")], Gh = [(0, Ob.w)("reflectionFresnelParameters")], Uh = [(0, Ob.i)("_markAllSubMeshesAsFresnelDirty")], Lh = [(0, Ob.w)("refractionFresnelParameters")], Yh = [(0, Ob.i)("_markAllSubMeshesAsFresnelDirty")], Sh = [(0, Ob.w)("emissiveFresnelParameters")], ah = [(0, Ob.i)("_markAllSubMeshesAsFresnelDirty")], Hh = [(0, Ob.K)("useReflectionFresnelFromSpecular")], wh = [(0, Ob.i)("_markAllSubMeshesAsFresnelDirty")], Zh = [(0, Ob.K)("useGlossinessFromSpecularMapAlpha")], Xh = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], ph = [(0, Ob.K)("maxSimultaneousLights")], oh = [(0, Ob.i)("_markAllSubMeshesAsLightsDirty")], Ah = [(0, Ob.K)("invertNormalMapX")], lh = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], Kh = [(0, Ob.K)("invertNormalMapY")], Wh = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], Ch = [(0, Ob.K)("twoSidedLighting")], dh = [(0, Ob.i)("_markAllSubMeshesAsTexturesDirty")], rh = [(0, Ob.K)("applyDecalMapAfterDetailMap")], jh = [(0, Ob.i)("_markAllSubMeshesAsMiscDirty")], (0, Bb.h)(bb, null, Gu, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "diffuseTexture" in bb,
              get: bb => bb.diffuseTexture,
              set: (bb, ub) => {
                bb.diffuseTexture = ub
              }
            },
            metadata: ub
          }, zh, gh), (0, Bb.h)(bb, null, Lu, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "ambientTexture" in bb,
              get: bb => bb.ambientTexture,
              set: (bb, ub) => {
                bb.ambientTexture = ub
              }
            },
            metadata: ub
          }, th, Jh), (0, Bb.h)(bb, null, Su, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "opacityTexture" in bb,
              get: bb => bb.opacityTexture,
              set: (bb, ub) => {
                bb.opacityTexture = ub
              }
            },
            metadata: ub
          }, sh, Mh), (0, Bb.h)(bb, null, Hu, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "reflectionTexture" in bb,
              get: bb => bb.reflectionTexture,
              set: (bb, ub) => {
                bb.reflectionTexture = ub
              }
            },
            metadata: ub
          }, Ph, qh), (0, Bb.h)(bb, null, Zu, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissiveTexture" in bb,
              get: bb => bb.emissiveTexture,
              set: (bb, ub) => {
                bb.emissiveTexture = ub
              }
            },
            metadata: ub
          }, Vh, Fh), (0, Bb.h)(bb, null, pu, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularTexture" in bb,
              get: bb => bb.specularTexture,
              set: (bb, ub) => {
                bb.specularTexture = ub
              }
            },
            metadata: ub
          }, Th, ch), (0, Bb.h)(bb, null, Au, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "bumpTexture" in bb,
              get: bb => bb.bumpTexture,
              set: (bb, ub) => {
                bb.bumpTexture = ub
              }
            },
            metadata: ub
          }, bB, uB), (0, Bb.h)(bb, null, Ku, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "lightmapTexture" in bb,
              get: bb => bb.lightmapTexture,
              set: (bb, ub) => {
                bb.lightmapTexture = ub
              }
            },
            metadata: ub
          }, OB, GB), (0, Bb.h)(bb, null, Cu, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "refractionTexture" in bb,
              get: bb => bb.refractionTexture,
              set: (bb, ub) => {
                bb.refractionTexture = ub
              }
            },
            metadata: ub
          }, YB, SB), (0, Bb.h)(bb, null, zu, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "useAlphaFromDiffuseTexture" in bb,
              get: bb => bb.useAlphaFromDiffuseTexture,
              set: (bb, ub) => {
                bb.useAlphaFromDiffuseTexture = ub
              }
            },
            metadata: ub
          }, dB, rB), (0, Bb.h)(bb, null, iu, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: bb => "useEmissiveAsIllumination" in bb,
              get: bb => bb.useEmissiveAsIllumination,
              set: (bb, ub) => {
                bb.useEmissiveAsIllumination = ub
              }
            },
            metadata: ub
          }, DB, xB), (0, Bb.h)(bb, null, tu, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: bb => "linkEmissiveWithDiffuse" in bb,
              get: bb => bb.linkEmissiveWithDiffuse,
              set: (bb, ub) => {
                bb.linkEmissiveWithDiffuse = ub
              }
            },
            metadata: ub
          }, iB, vB), (0, Bb.h)(bb, null, eu, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "useSpecularOverAlpha" in bb,
              get: bb => bb.useSpecularOverAlpha,
              set: (bb, ub) => {
                bb.useSpecularOverAlpha = ub
              }
            },
            metadata: ub
          }, eB, NB), (0, Bb.h)(bb, null, su, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "useReflectionOverAlpha" in bb,
              get: bb => bb.useReflectionOverAlpha,
              set: (bb, ub) => {
                bb.useReflectionOverAlpha = ub
              }
            },
            metadata: ub
          }, mB, IB), (0, Bb.h)(bb, null, mu, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "disableLighting" in bb,
              get: bb => bb.disableLighting,
              set: (bb, ub) => {
                bb.disableLighting = ub
              }
            },
            metadata: ub
          }, EB, yB), (0, Bb.h)(bb, null, Pu, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "useObjectSpaceNormalMap" in bb,
              get: bb => bb.useObjectSpaceNormalMap,
              set: (bb, ub) => {
                bb.useObjectSpaceNormalMap = ub
              }
            },
            metadata: ub
          }, fB, kB), (0, Bb.h)(bb, null, Eu, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: bb => "useParallax" in bb,
              get: bb => bb.useParallax,
              set: (bb, ub) => {
                bb.useParallax = ub
              }
            },
            metadata: ub
          }, QB, RB), (0, Bb.h)(bb, null, Vu, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "useParallaxOcclusion" in bb,
              get: bb => bb.useParallaxOcclusion,
              set: (bb, ub) => {
                bb.useParallaxOcclusion = ub
              }
            },
            metadata: ub
          }, hO, BO), (0, Bb.h)(bb, null, ku, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "roughness" in bb,
              get: bb => bb.roughness,
              set: (bb, ub) => {
                bb.roughness = ub
              }
            },
            metadata: ub
          }, YO, SO), (0, Bb.h)(bb, null, bh, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: bb => "useLightmapAsShadowmap" in bb,
              get: bb => bb.useLightmapAsShadowmap,
              set: (bb, ub) => {
                bb.useLightmapAsShadowmap = ub
              }
            },
            metadata: ub
          }, lO, KO), (0, Bb.h)(bb, null, hh, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "diffuseFresnelParameters" in bb,
              get: bb => bb.diffuseFresnelParameters,
              set: (bb, ub) => {
                bb.diffuseFresnelParameters = ub
              }
            },
            metadata: ub
          }, dO, rO), (0, Bb.h)(bb, null, Oh, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "opacityFresnelParameters" in bb,
              get: bb => bb.opacityFresnelParameters,
              set: (bb, ub) => {
                bb.opacityFresnelParameters = ub
              }
            },
            metadata: ub
          }, DO, xO), (0, Bb.h)(bb, null, Uh, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "reflectionFresnelParameters" in bb,
              get: bb => bb.reflectionFresnelParameters,
              set: (bb, ub) => {
                bb.reflectionFresnelParameters = ub
              }
            },
            metadata: ub
          }, iO, vO), (0, Bb.h)(bb, null, Yh, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "refractionFresnelParameters" in bb,
              get: bb => bb.refractionFresnelParameters,
              set: (bb, ub) => {
                bb.refractionFresnelParameters = ub
              }
            },
            metadata: ub
          }, eO, NO), (0, Bb.h)(bb, null, ah, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissiveFresnelParameters" in bb,
              get: bb => bb.emissiveFresnelParameters,
              set: (bb, ub) => {
                bb.emissiveFresnelParameters = ub
              }
            },
            metadata: ub
          }, mO, IO), (0, Bb.h)(bb, null, wh, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: bb => "useReflectionFresnelFromSpecular" in bb,
              get: bb => bb.useReflectionFresnelFromSpecular,
              set: (bb, ub) => {
                bb.useReflectionFresnelFromSpecular = ub
              }
            },
            metadata: ub
          }, EO, yO), (0, Bb.h)(bb, null, Xh, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "useGlossinessFromSpecularMapAlpha" in bb,
              get: bb => bb.useGlossinessFromSpecularMapAlpha,
              set: (bb, ub) => {
                bb.useGlossinessFromSpecularMapAlpha = ub
              }
            },
            metadata: ub
          }, fO, kO), (0, Bb.h)(bb, null, oh, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: bb => "maxSimultaneousLights" in bb,
              get: bb => bb.maxSimultaneousLights,
              set: (bb, ub) => {
                bb.maxSimultaneousLights = ub
              }
            },
            metadata: ub
          }, QO, RO), (0, Bb.h)(bb, null, lh, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertNormalMapX" in bb,
              get: bb => bb.invertNormalMapX,
              set: (bb, ub) => {
                bb.invertNormalMapX = ub
              }
            },
            metadata: ub
          }, hG, BG), (0, Bb.h)(bb, null, Wh, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertNormalMapY" in bb,
              get: bb => bb.invertNormalMapY,
              set: (bb, ub) => {
                bb.invertNormalMapY = ub
              }
            },
            metadata: ub
          }, UG, LG), (0, Bb.h)(bb, null, dh, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "twoSidedLighting" in bb,
              get: bb => bb.twoSidedLighting,
              set: (bb, ub) => {
                bb.twoSidedLighting = ub
              }
            },
            metadata: ub
          }, aG, HG), (0, Bb.h)(bb, null, jh, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "applyDecalMapAfterDetailMap" in bb,
              get: bb => bb.applyDecalMapAfterDetailMap,
              set: (bb, ub) => {
                bb.applyDecalMapAfterDetailMap = ub
              }
            },
            metadata: ub
          }, XG, pG), (0, Bb.h)(null, null, Ou, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_diffuseTexture" in bb,
              get: bb => bb._diffuseTexture,
              set: (bb, ub) => {
                bb._diffuseTexture = ub
              }
            },
            metadata: ub
          }, Dh, xh), (0, Bb.h)(null, null, Uu, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_ambientTexture" in bb,
              get: bb => bb._ambientTexture,
              set: (bb, ub) => {
                bb._ambientTexture = ub
              }
            },
            metadata: ub
          }, ih, vh), (0, Bb.h)(null, null, Yu, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_opacityTexture" in bb,
              get: bb => bb._opacityTexture,
              set: (bb, ub) => {
                bb._opacityTexture = ub
              }
            },
            metadata: ub
          }, eh, Nh), (0, Bb.h)(null, null, au, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_reflectionTexture" in bb,
              get: bb => bb._reflectionTexture,
              set: (bb, ub) => {
                bb._reflectionTexture = ub
              }
            },
            metadata: ub
          }, mh, Ih), (0, Bb.h)(null, null, wu, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_emissiveTexture" in bb,
              get: bb => bb._emissiveTexture,
              set: (bb, ub) => {
                bb._emissiveTexture = ub
              }
            },
            metadata: ub
          }, Eh, yh), (0, Bb.h)(null, null, Xu, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_specularTexture" in bb,
              get: bb => bb._specularTexture,
              set: (bb, ub) => {
                bb._specularTexture = ub
              }
            },
            metadata: ub
          }, fh, kh), (0, Bb.h)(null, null, ou, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_bumpTexture" in bb,
              get: bb => bb._bumpTexture,
              set: (bb, ub) => {
                bb._bumpTexture = ub
              }
            },
            metadata: ub
          }, Qh, Rh), (0, Bb.h)(null, null, lu, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_lightmapTexture" in bb,
              get: bb => bb._lightmapTexture,
              set: (bb, ub) => {
                bb._lightmapTexture = ub
              }
            },
            metadata: ub
          }, hB, BB), (0, Bb.h)(null, null, Wu, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_refractionTexture" in bb,
              get: bb => bb._refractionTexture,
              set: (bb, ub) => {
                bb._refractionTexture = ub
              }
            },
            metadata: ub
          }, UB, LB), (0, Bb.h)(null, null, du, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "ambientColor" in bb,
              get: bb => bb.ambientColor,
              set: (bb, ub) => {
                bb.ambientColor = ub
              }
            },
            metadata: ub
          }, aB, HB), (0, Bb.h)(null, null, ru, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "diffuseColor" in bb,
              get: bb => bb.diffuseColor,
              set: (bb, ub) => {
                bb.diffuseColor = ub
              }
            },
            metadata: ub
          }, wB, ZB), (0, Bb.h)(null, null, ju, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularColor" in bb,
              get: bb => bb.specularColor,
              set: (bb, ub) => {
                bb.specularColor = ub
              }
            },
            metadata: ub
          }, XB, pB), (0, Bb.h)(null, null, nu, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissiveColor" in bb,
              get: bb => bb.emissiveColor,
              set: (bb, ub) => {
                bb.emissiveColor = ub
              }
            },
            metadata: ub
          }, oB, AB), (0, Bb.h)(null, null, Du, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularPower" in bb,
              get: bb => bb.specularPower,
              set: (bb, ub) => {
                bb.specularPower = ub
              }
            },
            metadata: ub
          }, lB, KB), (0, Bb.h)(null, null, xu, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useAlphaFromDiffuseTexture" in bb,
              get: bb => bb._useAlphaFromDiffuseTexture,
              set: (bb, ub) => {
                bb._useAlphaFromDiffuseTexture = ub
              }
            },
            metadata: ub
          }, WB, CB), (0, Bb.h)(null, null, gu, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useEmissiveAsIllumination" in bb,
              get: bb => bb._useEmissiveAsIllumination,
              set: (bb, ub) => {
                bb._useEmissiveAsIllumination = ub
              }
            },
            metadata: ub
          }, jB, nB), (0, Bb.h)(null, null, vu, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: bb => "_linkEmissiveWithDiffuse" in bb,
              get: bb => bb._linkEmissiveWithDiffuse,
              set: (bb, ub) => {
                bb._linkEmissiveWithDiffuse = ub
              }
            },
            metadata: ub
          }, zB, gB), (0, Bb.h)(null, null, Ju, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useSpecularOverAlpha" in bb,
              get: bb => bb._useSpecularOverAlpha,
              set: (bb, ub) => {
                bb._useSpecularOverAlpha = ub
              }
            },
            metadata: ub
          }, tB, JB), (0, Bb.h)(null, null, Nu, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useReflectionOverAlpha" in bb,
              get: bb => bb._useReflectionOverAlpha,
              set: (bb, ub) => {
                bb._useReflectionOverAlpha = ub
              }
            },
            metadata: ub
          }, sB, MB), (0, Bb.h)(null, null, Mu, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "_disableLighting" in bb,
              get: bb => bb._disableLighting,
              set: (bb, ub) => {
                bb._disableLighting = ub
              }
            },
            metadata: ub
          }, PB, qB), (0, Bb.h)(null, null, Iu, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useObjectSpaceNormalMap" in bb,
              get: bb => bb._useObjectSpaceNormalMap,
              set: (bb, ub) => {
                bb._useObjectSpaceNormalMap = ub
              }
            },
            metadata: ub
          }, VB, FB), (0, Bb.h)(null, null, qu, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useParallax" in bb,
              get: bb => bb._useParallax,
              set: (bb, ub) => {
                bb._useParallax = ub
              }
            },
            metadata: ub
          }, TB, cB), (0, Bb.h)(null, null, yu, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useParallaxOcclusion" in bb,
              get: bb => bb._useParallaxOcclusion,
              set: (bb, ub) => {
                bb._useParallaxOcclusion = ub
              }
            },
            metadata: ub
          }, bO, uO), (0, Bb.h)(null, null, Fu, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: bb => "parallaxScaleBias" in bb,
              get: bb => bb.parallaxScaleBias,
              set: (bb, ub) => {
                bb.parallaxScaleBias = ub
              }
            },
            metadata: ub
          }, OO, GO), (0, Bb.h)(null, null, fu, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "_roughness" in bb,
              get: bb => bb._roughness,
              set: (bb, ub) => {
                bb._roughness = ub
              }
            },
            metadata: ub
          }, UO, LO), (0, Bb.h)(null, null, Tu, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: bb => "indexOfRefraction" in bb,
              get: bb => bb.indexOfRefraction,
              set: (bb, ub) => {
                bb.indexOfRefraction = ub
              }
            },
            metadata: ub
          }, aO, HO), (0, Bb.h)(null, null, cu, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertRefractionY" in bb,
              get: bb => bb.invertRefractionY,
              set: (bb, ub) => {
                bb.invertRefractionY = ub
              }
            },
            metadata: ub
          }, wO, ZO), (0, Bb.h)(null, null, Qu, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: bb => "alphaCutOff" in bb,
              get: bb => bb.alphaCutOff,
              set: (bb, ub) => {
                bb.alphaCutOff = ub
              }
            },
            metadata: ub
          }, XO, pO), (0, Bb.h)(null, null, Ru, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useLightmapAsShadowmap" in bb,
              get: bb => bb._useLightmapAsShadowmap,
              set: (bb, ub) => {
                bb._useLightmapAsShadowmap = ub
              }
            },
            metadata: ub
          }, oO, AO), (0, Bb.h)(null, null, uh, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_diffuseFresnelParameters" in bb,
              get: bb => bb._diffuseFresnelParameters,
              set: (bb, ub) => {
                bb._diffuseFresnelParameters = ub
              }
            },
            metadata: ub
          }, WO, CO), (0, Bb.h)(null, null, Bh, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_opacityFresnelParameters" in bb,
              get: bb => bb._opacityFresnelParameters,
              set: (bb, ub) => {
                bb._opacityFresnelParameters = ub
              }
            },
            metadata: ub
          }, jO, nO), (0, Bb.h)(null, null, Gh, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_reflectionFresnelParameters" in bb,
              get: bb => bb._reflectionFresnelParameters,
              set: (bb, ub) => {
                bb._reflectionFresnelParameters = ub
              }
            },
            metadata: ub
          }, zO, gO), (0, Bb.h)(null, null, Lh, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_refractionFresnelParameters" in bb,
              get: bb => bb._refractionFresnelParameters,
              set: (bb, ub) => {
                bb._refractionFresnelParameters = ub
              }
            },
            metadata: ub
          }, tO, JO), (0, Bb.h)(null, null, Sh, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_emissiveFresnelParameters" in bb,
              get: bb => bb._emissiveFresnelParameters,
              set: (bb, ub) => {
                bb._emissiveFresnelParameters = ub
              }
            },
            metadata: ub
          }, sO, MO), (0, Bb.h)(null, null, Hh, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useReflectionFresnelFromSpecular" in bb,
              get: bb => bb._useReflectionFresnelFromSpecular,
              set: (bb, ub) => {
                bb._useReflectionFresnelFromSpecular = ub
              }
            },
            metadata: ub
          }, PO, qO), (0, Bb.h)(null, null, Zh, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useGlossinessFromSpecularMapAlpha" in bb,
              get: bb => bb._useGlossinessFromSpecularMapAlpha,
              set: (bb, ub) => {
                bb._useGlossinessFromSpecularMapAlpha = ub
              }
            },
            metadata: ub
          }, VO, FO), (0, Bb.h)(null, null, ph, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: bb => "_maxSimultaneousLights" in bb,
              get: bb => bb._maxSimultaneousLights,
              set: (bb, ub) => {
                bb._maxSimultaneousLights = ub
              }
            },
            metadata: ub
          }, TO, cO), (0, Bb.h)(null, null, Ah, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: bb => "_invertNormalMapX" in bb,
              get: bb => bb._invertNormalMapX,
              set: (bb, ub) => {
                bb._invertNormalMapX = ub
              }
            },
            metadata: ub
          }, bG, uG), (0, Bb.h)(null, null, Kh, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: bb => "_invertNormalMapY" in bb,
              get: bb => bb._invertNormalMapY,
              set: (bb, ub) => {
                bb._invertNormalMapY = ub
              }
            },
            metadata: ub
          }, OG, GG), (0, Bb.h)(null, null, Ch, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "_twoSidedLighting" in bb,
              get: bb => bb._twoSidedLighting,
              set: (bb, ub) => {
                bb._twoSidedLighting = ub
              }
            },
            metadata: ub
          }, YG, SG), (0, Bb.h)(null, null, rh, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "_applyDecalMapAfterDetailMap" in bb,
              get: bb => bb._applyDecalMapAfterDetailMap,
              set: (bb, ub) => {
                bb._applyDecalMapAfterDetailMap = ub
              }
            },
            metadata: ub
          }, wG, ZG), ub && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ub
          })
        })(), bb.ForceGLSL = !1, bb._ShaderLoader = new db.d((() => [Promise.all([hb.e(308), hb.e(307)]).then((() => hb(41306))), Promise.all([hb.e(313), hb.e(309), hb.e(322), hb.e(312)]).then((() => hb(41486)))]), (() => [Promise.all([hb.e(329), hb.e(324)]).then((() => hb(41646))), Promise.all([hb.e(330), hb.e(340), hb.e(326)]).then((() => hb(41821)))])), bb
      })(),
      eb = !1;

    function Nb() {
      eb || (eb = !0, (0, Hb.c)(), (0, xb.f)("BABYLON.StandardMaterial", Jb), Ub.f.DefaultMaterialFactory = bb => new Jb("default material", bb))
    }
    Object.getOwnPropertyDescriptor(Jb.prototype, "decalMap") || Object.defineProperty(Jb.prototype, "decalMap", (0, zb.f)("StandardMaterial", "decalMap"))
  },
  39829: (bb, ub, hb) => {
    function Bb(bb) {
      return class extends bb {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    hb.d(ub, {
      b: () => Bb
    })
  },
  39818: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb
    });
    class Bb {
      constructor(bb, ub) {
        this._webGL = {
          load: bb,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: ub,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(bb) {
        const ub = 1 === bb ? this._webGPU : this._webGL;
        return ub.loaded ? void 0 : async () => {
          await this._loadAsync(ub)
        }
      }
      async _loadAsync(bb) {
        if (bb.loaded) return;
        let ub = bb.loadPromise;
        const hb = null === ub;
        hb && (ub = Promise.all(bb.load()), bb.loadPromise = ub);
        let Bb = !1;
        try {
          await ub, Bb = !0
        } finally {
          hb && this._completeLoad(bb, Bb)
        }
      }
      _completeLoad(bb, ub) {
        bb.loaded = ub, bb.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);