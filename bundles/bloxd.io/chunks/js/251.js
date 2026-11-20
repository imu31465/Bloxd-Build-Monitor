export const id = 251;
export const ids = [251];
export const modules = {
  39823: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    var kb = sb(39427);

    function Wb(bb) {
      return class extends bb {
        constructor() {
          super(...arguments);
          const bb = new.target;
          if (!bb[Symbol.metadata]) {
            const cb = Object.getPrototypeOf(bb)?.[Symbol.metadata];
            bb[Symbol.metadata] = cb ? Object.create(cb) : {}
          }
          const cb = (0, kb.c)(bb[Symbol.metadata]);
          cb._imageProcessingConfiguration || (cb._imageProcessingConfiguration = {
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
          bb !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !bb && this.EY ? this._imageProcessingConfiguration = this.EY().imageProcessingConfiguration : bb && (this._imageProcessingConfiguration = bb), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
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
  39722: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab,
      e: () => Wb
    });
    var kb = sb(39726);

    function Wb(bb) {
      return class extends bb {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class ab extends kb.b {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  39779: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Mb
    });
    var kb = sb(39414),
      Wb = sb(39730),
      ab = sb(39418),
      Tb = sb(39770),
      Ub = sb(39726),
      Ib = sb(39781),
      Hb = sb(39761);
    class fb extends Ub.b {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let Mb = (() => {
      var bb, cb, sb, Ub;
      let Mb, Xb, nb, mb, lb, Qb, eb = Ib.d,
        Cb = [],
        Nb = [],
        Vb = [],
        Lb = [],
        ub = [],
        Yb = [],
        hb = [],
        Jb = [],
        gb = [],
        Bb = [],
        tb = [],
        yb = [];
      return bb = class extends eb {
        get texture() {
          return (0, kb.d)(this, cb, "f")
        }
        set texture(bb) {
          (0, kb.h)(this, cb, bb, "f")
        }
        get normalBlendMethod() {
          return (0, kb.d)(this, sb, "f")
        }
        set normalBlendMethod(bb) {
          (0, kb.h)(this, sb, bb, "f")
        }
        get isEnabled() {
          return (0, kb.d)(this, Ub, "f")
        }
        set isEnabled(bb) {
          (0, kb.h)(this, Ub, bb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(bb) {
          let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(bb, "DetailMap", 140, new fb, ab), this._texture = null, cb.set(this, (0, kb.m)(this, Cb, void 0)), this.diffuseBlendLevel = ((0, kb.m)(this, Nb), (0, kb.m)(this, Vb, 1)), this.roughnessBlendLevel = ((0, kb.m)(this, Lb), (0, kb.m)(this, ub, 1)), this.bumpLevel = ((0, kb.m)(this, Yb), (0, kb.m)(this, hb, 1)), this._normalBlendMethod = ((0, kb.m)(this, Jb), Wb.e.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), sb.set(this, (0, kb.m)(this, gb, void 0)), this._isEnabled = ((0, kb.m)(this, Bb), !1), Ub.set(this, (0, kb.m)(this, tb, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, kb.m)(this, yb), this._internalMarkAllSubMeshesAsTexturesDirty = bb._dirtyCallbacks[1]
        }
        isReadyForSubMesh(bb, cb, sb) {
          return !this._isEnabled || !(bb._areTexturesDirty && cb.texturesEnabled && sb.getCaps().standardDerivatives && this._texture && Tb.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(bb, cb) {
          if (this._isEnabled) {
            bb.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const sb = cb.Sm();
            bb._areTexturesDirty && (sb.getCaps().standardDerivatives && this._texture && Tb.e.DetailTextureEnabled && this._isEnabled ? ((0, Hb.eb)(this._texture, bb, "DETAIL"), bb.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : bb.DETAIL = !1)
          } else bb.DETAIL = !1
        }
        bindForSubMesh(bb, cb) {
          if (!this._isEnabled) return;
          const sb = this._material.isFrozen;
          bb.useUbo && sb && bb.isSync || this._texture && Tb.e.DetailTextureEnabled && (bb.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, Hb.x)(this._texture, bb, "detail")), cb.texturesEnabled && this._texture && Tb.e.DetailTextureEnabled && bb.setTexture("detailSampler", this._texture)
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
      }, cb = new WeakMap, sb = new WeakMap, Ub = new WeakMap, (() => {
        const cb = "function" === typeof Symbol && Symbol.metadata ? Object.create(eb[Symbol.metadata] ?? null) : void 0;
        Mb = [(0, ab.x)("detailTexture"), (0, ab.f)("_markAllSubMeshesAsTexturesDirty")], Xb = [(0, ab.E)()], nb = [(0, ab.E)()], mb = [(0, ab.E)()], lb = [(0, ab.E)(), (0, ab.f)("_markAllSubMeshesAsTexturesDirty")], Qb = [(0, ab.E)(), (0, ab.f)("_markAllSubMeshesAsTexturesDirty")], (0, kb.j)(bb, null, Mb, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: bb => "texture" in bb,
            get: bb => bb.texture,
            set: (bb, cb) => {
              bb.texture = cb
            }
          },
          metadata: cb
        }, Cb, Nb), (0, kb.j)(bb, null, lb, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: bb => "normalBlendMethod" in bb,
            get: bb => bb.normalBlendMethod,
            set: (bb, cb) => {
              bb.normalBlendMethod = cb
            }
          },
          metadata: cb
        }, gb, Bb), (0, kb.j)(bb, null, Qb, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "isEnabled" in bb,
            get: bb => bb.isEnabled,
            set: (bb, cb) => {
              bb.isEnabled = cb
            }
          },
          metadata: cb
        }, tb, yb), (0, kb.j)(null, null, Xb, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: bb => "diffuseBlendLevel" in bb,
            get: bb => bb.diffuseBlendLevel,
            set: (bb, cb) => {
              bb.diffuseBlendLevel = cb
            }
          },
          metadata: cb
        }, Vb, Lb), (0, kb.j)(null, null, nb, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: bb => "roughnessBlendLevel" in bb,
            get: bb => bb.roughnessBlendLevel,
            set: (bb, cb) => {
              bb.roughnessBlendLevel = cb
            }
          },
          metadata: cb
        }, ub, Yb), (0, kb.j)(null, null, mb, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: bb => "bumpLevel" in bb,
            get: bb => bb.bumpLevel,
            set: (bb, cb) => {
              bb.bumpLevel = cb
            }
          },
          metadata: cb
        }, hb, Jb), cb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cb
        })
      })(), bb
    })()
  },
  39726: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb
    });
    class kb {
      constructor(bb) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = bb, bb)
          for (const cb in bb) Object.prototype.hasOwnProperty.call(bb, cb) && this._setDefaultValue(cb)
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
        for (let cb = 0; cb < this._keys.length; cb++) {
          const sb = this._keys[cb];
          if (this[sb] !== bb[sb]) return !1
        }
        return !0
      }
      cloneTo(bb) {
        this._keys.length !== bb._keys.length && (bb._keys = this._keys.slice(0));
        for (let cb = 0; cb < this._keys.length; cb++) {
          const sb = this._keys[cb];
          bb[sb] = this[sb]
        }
      }
      reset() {
        for (const bb of this._keys) this._setDefaultValue(bb)
      }
      _setDefaultValue(bb) {
        const cb = this._externalProperties?.[bb]?.type ?? typeof this[bb],
          sb = this._externalProperties?.[bb]?.default;
        switch (cb) {
          case "number":
            this[bb] = sb ?? 0;
            break;
          case "string":
            this[bb] = sb ?? "";
            break;
          default:
            this[bb] = sb ?? !1
        }
      }
      toString() {
        let bb = "";
        for (let cb = 0; cb < this._keys.length; cb++) {
          const sb = this._keys[cb],
            kb = this[sb];
          switch (typeof kb) {
            case "number":
            case "string":
              bb += "#define " + sb + " " + kb + "\n";
              break;
            default:
              kb && (bb += "#define " + sb + "\n")
          }
        }
        return bb
      }
    }
  },
  39796: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ub,
      f: () => Tb,
      j: () => ab
    });
    var kb, Wb = sb(36656);

    function ab(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const kb = cb(bb);
      if (!Number.isInteger(kb) || kb < 0 || kb > sb) throw new Error(`Invalid geometry object ID ${kb} for mesh "${bb.name}". Object IDs must be integers between 0 and 0x${sb.toString(16).toUpperCase()}.`);
      return kb
    }

    function Tb(bb, cb) {
      const sb = cb(bb);
      if (!Number.isInteger(sb) || sb < 0 || sb > 255 || 0 !== sb && 0 === (63 & sb)) throw new Error(`Invalid geometry mesh-blending tag ${sb} for mesh "${bb.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return sb
    }! function(bb) {
      bb[bb.Zero = 0] = "Zero", bb[bb.One = 1] = "One", bb[bb.MaxViewZ = 2] = "MaxViewZ", bb[bb.NoClear = 3] = "NoClear"
    }(kb || (kb = {}));
    class Ub {
      static CreateConfiguration(bb) {
        return Ub._Configurations[bb] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: Wb.e.Zero(),
          currentViewProjection: Wb.e.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, Ub._Configurations[bb]
      }
      static DeleteConfiguration(bb) {
        delete Ub._Configurations[bb]
      }
      static GetConfiguration(bb) {
        return Ub._Configurations[bb]
      }
      static _PrepareConfiguration(bb, cb, sb) {
        const kb = Ub._Configurations[bb];
        kb._attachments = cb, kb._colorAttachments = sb, kb._mrtCount = cb.length;
        let Wb = "#define PREPASS\n";
        for (const ab of Ub.GeometryTextureDescriptions) {
          const bb = kb.defines[ab.defineIndex];
          void 0 !== bb && (Wb += `#define ${ab.define}\n#define ${ab.defineIndex} ${bb}\n`)
        }
        kb.objectIdIsRedFormat && (Wb += "#define PREPASS_OBJECT_ID_R8\n"), kb._defines = Wb + `#define SCENE_MRT_COUNT ${cb.length}\n`
      }
      static _PrepareStringDefines(bb, cb) {
        const sb = Ub._Configurations[bb];
        return !!sb?._defines && (cb.push(sb._defines), !0)
      }
      static _BindAttachmentsForEffect(bb, cb) {
        const sb = Ub._Configurations[bb.currentRenderPassId];
        return !sb?._attachments || (bb.bindAttachments(cb._multiTarget ? sb._attachments : sb._colorAttachments), cb._multiTarget || void 0 !== sb.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(bb) {
        const cb = Ub._Configurations[bb.currentRenderPassId];
        cb?._colorAttachments && bb.bindAttachments(cb._colorAttachments)
      }
      static _BindColorAttachments(bb) {
        const cb = Ub._Configurations[bb.currentRenderPassId];
        return !cb?._colorAttachments || (bb.bindAttachments(cb._colorAttachments), void 0 !== cb.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(bb) {
        const cb = Ub._Configurations[bb.currentRenderPassId];
        return !cb?._colorAttachments || void 0 !== cb.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(bb, cb) {
        const sb = Ub._Configurations[bb.currentRenderPassId];
        if (!sb) return;
        const kb = bb.getAlphaMode(),
          Wb = void 0 === sb.defines.PREPASS_COLOR_INDEX || 2 === kb || 1 === kb || 17 === kb;
        cb.setFloat("geometryZeroAlphaDiscard", Wb ? 1 : 0)
      }
      static AddUniformsAndSamplers(bb, cb) {
        bb.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(bb, cb) {
        for (const sb of cb)
          if (sb.XV)
            for (const cb of sb.XV) cb._removeDrawWrapper(bb)
      }
      static PrepareDefines(bb, cb, sb) {
        if (!sb._arePrePassDirty) return;
        const kb = Ub._Configurations[bb];
        if (!kb) return;
        sb.PREPASS = !0;
        let Wb = 0;
        for (let ab = 0; ab < Ub.GeometryTextureDescriptions.length; ab++) {
          const bb = Ub.GeometryTextureDescriptions[ab],
            cb = bb.define,
            Tb = bb.defineIndex,
            Ib = kb.defines[Tb];
          void 0 !== Ib ? (sb[cb] = !0, sb[Tb] = Ib, Wb++) : (sb[cb] = !1, delete sb[Tb])
        }
        sb.PREPASS_OBJECT_ID_R8 = kb.objectIdIsRedFormat, sb.SCENE_MRT_COUNT = kb._mrtCount ?? Wb, sb.BONES_VELOCITY_ENABLED = cb.useBones && cb.computeBonesUsingShaders && cb.skeleton && !cb.skeleton.isUsingTextureForMatrices && -1 === kb.excludedSkinnedMesh.indexOf(cb)
      }
      static Bind(bb, cb, sb, kb, Wb) {
        const Ib = Ub._Configurations[bb];
        if (!Ib) return;
        const Hb = sb.EY(),
          fb = Hb.Sm();
        if (Ib.reverseCulling && fb.setStateCullFaceType(Hb._mirroredCameraPosition ? Wb.cullBackFaces : !Wb.cullBackFaces), void 0 !== Ib.defines.PREPASS_OBJECT_ID_INDEX) {
          const bb = Ib.objectIdIsRedFormat ? 255 : 16777215;
          let kb = sb.uniqueId;
          if (Ib.objectIdProvider) kb = ab(sb, Ib.objectIdProvider, bb);
          else if (kb > bb) throw new Error(`Invalid geometry object ID ${kb} for mesh "${sb.name}". Object IDs must be integers between 0 and 0x${bb.toString(16).toUpperCase()}.`);
          cb.setFloat("objectId", kb)
        }
        if (void 0 !== Ib.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const bb = Ib.meshBlendTagProvider ? Tb(sb, Ib.meshBlendTagProvider) : sb.meshBlendingTag;
          cb.setInt("meshBlendTag", bb)
        }
        if (void 0 !== Ib.defines.PREPASS_VELOCITY_INDEX || void 0 !== Ib.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const bb = Ib._currentWorldMatrices ?? (Ib._currentWorldMatrices = {}),
            Wb = Ib._worldMatrixFrameIds ?? (Ib._worldMatrixFrameIds = {});
          if (bb[sb.uniqueId] || (bb[sb.uniqueId] = kb.clone(), Ib.previousWorldMatrices[sb.uniqueId] = kb.clone()), Wb[sb.uniqueId] !== fb.frameId && (Ib.previousWorldMatrices[sb.uniqueId].ssb(bb[sb.uniqueId]), Wb[sb.uniqueId] = fb.frameId), bb[sb.uniqueId].ssb(kb), -1 === Ib.lastUpdateFrameId ? (Ib.lastUpdateFrameId = fb.frameId, Ib.previousViewProjection.ssb(Hb.getTransformMatrix()), Ib.currentViewProjection.ssb(Hb.getTransformMatrix())) : Ib.currentViewProjection.updateFlag !== Hb.getTransformMatrix().updateFlag ? (Ib.lastUpdateFrameId = fb.frameId, Ib.previousViewProjection.ssb(Ib.currentViewProjection), Ib.currentViewProjection.ssb(Hb.getTransformMatrix())) : Ib.lastUpdateFrameId !== fb.frameId && (Ib.lastUpdateFrameId = fb.frameId, Ib.previousViewProjection.ssb(Ib.currentViewProjection)), cb.setMatrix("previousWorld", Ib.previousWorldMatrices[sb.uniqueId]), cb.setMatrix("previousViewProjection", Ib.previousViewProjection), sb.useBones && sb.computeBonesUsingShaders && sb.skeleton) {
            const bb = sb.skeleton;
            if (!bb.isUsingTextureForMatrices || -1 === cb.getUniformIndex("boneTextureInfo")) {
              const kb = bb.getTransformMatrices(sb);
              kb && (Ib.previousBones[sb.uniqueId] || (Ib.previousBones[sb.uniqueId] = kb.slice()), cb.setMatrices("mPreviousBones", Ib.previousBones[sb.uniqueId]), Ib.previousBones[sb.uniqueId].set(kb))
            }
          }
        }
      }
    }
    Ub.GeometryTextureDescriptions = [{
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
    }], Ub._Configurations = {}
  },
  39781: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Xb,
      e: () => mb
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(39298),
      Tb = sb(39267);
    const Ub = new RegExp("^([gimus]+)!");
    class Ib {
      constructor(bb) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = bb, this._scene = bb.EY(), this._engine = this._scene.Sm()
      }
      _addPlugin(bb) {
        for (let kb = 0; kb < this._plugins.length; ++kb)
          if (this._plugins[kb].name === bb.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !bb.isCompatible(this._material.shaderLanguage)) throw `The plugin "${bb.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const cb = bb.getClassName();
        Ib._MaterialPluginClassToMainDefine[cb] || (Ib._MaterialPluginClassToMainDefine[cb] = "MATERIALPLUGIN_" + ++Ib._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (bb, cb) => this._handlePluginEvent(bb, cb), this._plugins.push(bb), this._plugins.sort(((bb, cb) => bb.priority - cb.priority)), this._codeInjectionPoints = {};
        const sb = {};
        sb[Ib._MaterialPluginClassToMainDefine[cb]] = {
          type: "boolean",
          default: !0
        };
        for (const kb of this._plugins) kb.collectDefines(sb), this._collectPointNames("vertex", kb.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", kb.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = sb, !0
      }
      _activatePlugin(bb) {
        -1 === this._activePlugins.indexOf(bb) && (this._activePlugins.push(bb), this._activePlugins.sort(((bb, cb) => bb.priority - cb.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), bb.registerForExtraEvents && (this._activePluginsForExtraEvents.push(bb), this._activePluginsForExtraEvents.sort(((bb, cb) => bb.priority - cb.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(bb) {
        for (let cb = 0; cb < this._plugins.length; ++cb)
          if (this._plugins[cb].name === bb) return this._plugins[cb];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(bb) {
        let cb = !0;
        for (const sb of this._activePlugins) cb = cb && sb.isReadyForSubMesh(bb.defines, this._scene, this._engine, bb.subMesh);
        bb.isReadyForSubMesh = cb
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(bb) {
        for (const cb of this._activePlugins) cb.prepareDefinesBeforeAttributes(bb.defines, this._scene, bb.mesh)
      }
      _handlePluginEventPrepareDefines(bb) {
        for (const cb of this._activePlugins) cb.prepareDefines(bb.defines, this._scene, bb.mesh)
      }
      _handlePluginEventHardBindForSubMesh(bb) {
        for (const cb of this._activePluginsForExtraEvents) cb.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, bb.subMesh)
      }
      _handlePluginEventBindForSubMesh(bb) {
        for (const cb of this._activePlugins) cb.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, bb.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(bb) {
        let cb = !1;
        for (const sb of this._activePluginsForExtraEvents)
          if (cb = sb.hasRenderTargetTextures(), cb) break;
        bb.hasRenderTargetTextures = cb
      }
      _handlePluginEventFillRenderTargetTextures(bb) {
        for (const cb of this._activePluginsForExtraEvents) cb.fillRenderTargetTextures(bb.renderTargets)
      }
      _handlePluginEvent(bb, cb) {
        switch (bb) {
          case 512: {
            const bb = cb;
            for (const cb of this._activePlugins) cb.getActiveTextures(bb.activeTextures);
            break
          }
          case 256: {
            const bb = cb;
            for (const cb of this._activePlugins) cb.getAnimatables(bb.animatables);
            break
          }
          case 1024: {
            const bb = cb;
            let sb = !1;
            for (const cb of this._activePlugins)
              if (sb = cb.hasTexture(bb.texture), sb) break;
            bb.hasTexture = sb;
            break
          }
          case 2: {
            const bb = cb;
            for (const cb of this._plugins) cb.dispose(bb.forceDisposeTextures);
            break
          }
          case 4:
            cb.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const bb = cb;
            for (const cb of this._activePlugins) bb.fallbackRank = cb.addFallbacks(bb.defines, bb.fallbacks, bb.fallbackRank), cb.getAttributes(bb.attributes, this._scene, bb.mesh);
            this._uniformList.length > 0 && bb.uniforms.push(...this._uniformList), this._samplerList.length > 0 && bb.samplers.push(...this._samplerList), this._uboList.length > 0 && bb.uniformBuffersNames.push(...this._uboList), bb.customCode = this._injectCustomCode(bb, bb.customCode);
            break
          }
          case 8: {
            const bb = cb;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const sb = 1 === this._material.shaderLanguage;
            for (const cb of this._plugins) {
              const kb = cb.getUniforms(this._material.shaderLanguage);
              if (kb) {
                if (kb.ubo)
                  for (const cb of kb.ubo) {
                    if (cb.size && cb.type) {
                      const kb = cb.arraySize ?? 0;
                      if (bb.ubo.addUniform(cb.name, cb.size, kb), sb) {
                        let bb;
                        switch (cb.type) {
                          case "mat4":
                            bb = "mat4x4f";
                            break;
                          case "float":
                            bb = "f32";
                            break;
                          default:
                            bb = `${cb.type}f`
                        }
                        this._uboDeclaration += kb > 0 ? `uniform ${cb.name}: array<${bb}, ${kb}>;\n` : `uniform ${cb.name}: ${bb};\n`
                      } else this._uboDeclaration += `${cb.type} ${cb.name}${kb>0?`[${kb}]`:""};\n`
                    }
                    this._uniformList.push(cb.name)
                  }
                kb.vertex && (this._vertexDeclaration += kb.vertex + "\n"), kb.fragment && (this._fragmentDeclaration += kb.fragment + "\n"), kb.externalUniforms && this._uniformList.push(...kb.externalUniforms)
              }
              cb.getSamplers(this._samplerList), cb.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(bb, cb) {
        if (cb)
          for (const sb in cb) this._codeInjectionPoints[bb] || (this._codeInjectionPoints[bb] = {}), this._codeInjectionPoints[bb][sb] = !0
      }
      _injectCustomCode(bb, cb) {
        return (sb, kb) => {
          cb && (kb = cb(sb, kb)), this._uboDeclaration && (kb = kb.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (kb = kb.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (kb = kb.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const Wb = this._codeInjectionPoints?.[sb];
          if (!Wb) return kb;
          let Ib = null;
          for (let cb in Wb) {
            let Wb = "";
            for (const kb of this._activePlugins) {
              const Ub = this._material.shaderLanguage;
              let Hb = kb.getCustomCode(sb, Ub)?.[cb];
              Hb && (kb.resolveIncludes && (null === Ib && (Ib = {
                defines: [],
                indexParameters: bb.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: Tb.d.GetShadersRepository(Ub),
                includesShadersStore: Tb.d.GetIncludesShadersStore(Ub),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                Dsb: this._engine.Dsb,
                processCodeAfterIncludes: void 0
              }), Ib.isFragment = "fragment" === sb, (0, ab.h)(Hb, Ib, (bb => Hb = bb))), Wb += Hb + "\n")
            }
            if (Wb.length > 0)
              if ("!" === cb.charAt(0)) {
                cb = cb.substring(1);
                let bb = "g";
                if ("!" === cb.charAt(0)) bb = "", cb = cb.substring(1);
                else {
                  const sb = Ub.exec(cb);
                  sb && sb.length >= 2 && (bb = sb[1], cb = cb.substring(bb.length + 1))
                }
                bb.indexOf("g") < 0 && (bb += "g");
                const sb = new RegExp(cb, bb);
                let ab = sb.exec(kb);
                for (; null !== ab;) {
                  const {
                    index: bb
                  } = ab, cb = Hb(Wb, ab);
                  kb = kb.substring(0, bb) + cb + kb.substring(bb + ab[0].length), sb.lastIndex = bb + cb.length, ab = sb.exec(kb)
                }
              } else {
                const bb = "#define " + cb;
                kb = kb.replace(bb, "\n" + Wb + "\n" + bb)
              }
          }
          return kb
        }
      }
    }
    Ib._MaterialPluginClassToMainDefine = {}, Ib._MaterialPluginCounter = 0;

    function Hb(bb, cb) {
      return bb.replace(/\$(\d+)/g, ((bb, sb) => {
        const kb = Number(sb);
        return kb < cb.length ? cb[kb] : ""
      }))
    }
    var fb = sb(39441),
      Mb = sb(36698);
    let Xb = (() => {
        var bb;
        let cb, sb, ab, Tb, Ub = [],
          Hb = [],
          Mb = [],
          Xb = [],
          nb = [],
          mb = [],
          lb = [],
          Qb = [];
        return bb = class {
          isCompatible(bb) {
            return 0 === bb
          }
          _enable(bb) {
            bb && this._pluginManager._activatePlugin(this)
          }
          constructor(bb, cb, sb, Wb) {
            let ab = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              fb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, kb.m)(this, Ub, void 0), this.priority = ((0, kb.m)(this, Hb), (0, kb.m)(this, Mb, 500)), this.resolveIncludes = ((0, kb.m)(this, Xb), (0, kb.m)(this, nb, !1)), this.registerForExtraEvents = ((0, kb.m)(this, mb), (0, kb.m)(this, lb, !1)), this.doNotSerialize = ((0, kb.m)(this, Qb), !1), this._material = bb, this.name = cb, this.priority = sb, this.resolveIncludes = fb, bb.pluginManager || (bb.pluginManager = new Ib(bb), bb.ZY.add((() => {
              bb.pluginManager = void 0
            }))), this._pluginDefineNames = Wb, this._pluginManager = bb.pluginManager, ab && this._pluginManager._addPlugin(this), Tb && this._enable(!0), this.markAllDefinesAsDirty = bb._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(bb, cb, sb, kb) {
            return !0
          }
          hardBindForSubMesh(bb, cb, sb, kb) {}
          bindForSubMesh(bb, cb, sb, kb) {}
          dispose(bb) {}
          getCustomCode(bb) {
            return null
          }
          collectDefines(bb) {
            if (this._pluginDefineNames)
              for (const cb of Object.keys(this._pluginDefineNames)) {
                if ("_" === cb[0]) continue;
                const sb = typeof this._pluginDefineNames[cb];
                bb[cb] = {
                  type: "number" === sb ? "number" : "string" === sb ? "string" : "boolean" === sb ? "boolean" : "object",
                  default: this._pluginDefineNames[cb]
                }
              }
          }
          prepareDefinesBeforeAttributes(bb, cb, sb) {}
          prepareDefines(bb, cb, sb) {}
          hasTexture(bb) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(bb) {}
          getActiveTextures(bb) {}
          getAnimatables(bb) {}
          addFallbacks(bb, cb, sb) {
            return sb
          }
          getSamplers(bb) {}
          getAttributes(bb, cb, sb) {}
          getUniformBuffersNames(bb) {}
          getUniforms() {
            return {}
          }
          copyTo(bb) {
            fb.d.Clone((() => bb), this)
          }
          serialize() {
            return fb.d.Serialize(this)
          }
          parse(bb, cb, sb) {
            fb.d.Parse((() => this), bb, cb, sb)
          }
        }, (() => {
          const Ib = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          cb = [(0, Wb.E)()], sb = [(0, Wb.E)()], ab = [(0, Wb.E)()], Tb = [(0, Wb.E)()], (0, kb.j)(null, null, cb, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: bb => "name" in bb,
              get: bb => bb.name,
              set: (bb, cb) => {
                bb.name = cb
              }
            },
            metadata: Ib
          }, Ub, Hb), (0, kb.j)(null, null, sb, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: bb => "priority" in bb,
              get: bb => bb.priority,
              set: (bb, cb) => {
                bb.priority = cb
              }
            },
            metadata: Ib
          }, Mb, Xb), (0, kb.j)(null, null, ab, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: bb => "resolveIncludes" in bb,
              get: bb => bb.resolveIncludes,
              set: (bb, cb) => {
                bb.resolveIncludes = cb
              }
            },
            metadata: Ib
          }, nb, mb), (0, kb.j)(null, null, Tb, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: bb => "registerForExtraEvents" in bb,
              get: bb => bb.registerForExtraEvents,
              set: (bb, cb) => {
                bb.registerForExtraEvents = cb
              }
            },
            metadata: Ib
          }, lb, Qb), Ib && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ib
          })
        })(), bb
      })(),
      nb = !1;

    function mb() {
      nb || (nb = !0, (0, Mb.h)("BABYLON.MaterialPluginBase", Xb))
    }
  },
  39720: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb
    });
    class kb {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(bb) {
        bb.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(bb) {}
      bindForSubMesh(bb, cb, sb, kb, Wb) {
        if (cb.prePassRenderer && cb.prePassRenderer.enabled && cb.prePassRenderer.currentRTisSceneRT && (-1 !== cb.prePassRenderer.getIndex(2) || -1 !== cb.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[sb.uniqueId] || (this.previousWorldMatrices[sb.uniqueId] = kb.clone()), this.previousViewProjection || (this.previousViewProjection = cb.getTransformMatrix().clone(), this.currentViewProjection = cb.getTransformMatrix().clone());
          const Wb = cb.Sm();
          this.currentViewProjection.updateFlag !== cb.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = Wb.frameId, this.previousViewProjection.ssb(this.currentViewProjection), this.currentViewProjection.ssb(cb.getTransformMatrix())) : this._lastUpdateFrameId !== Wb.frameId && (this._lastUpdateFrameId = Wb.frameId, this.previousViewProjection.ssb(this.currentViewProjection)), bb.setMatrix("previousWorld", this.previousWorldMatrices[sb.uniqueId]), bb.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[sb.uniqueId] = kb.clone()
        }
      }
    }
  },
  39814: (bb, cb, sb) => {
    function kb(bb) {
      return class extends bb {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    sb.d(cb, {
      b: () => kb
    })
  },
  39709: (bb, cb, sb) => {
    sb.d(cb, {
      StandardMaterial: () => kb.f
    });
    var kb = sb(39711);
    (0, kb.b)()
  },
  39711: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Gb,
      f: () => ib
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(39536),
      Tb = sb(39524),
      Ub = sb(36830),
      Ib = sb(39576),
      Hb = sb(39720),
      fb = sb(39722),
      Mb = sb(39544),
      Xb = sb(39730),
      nb = sb(39726),
      mb = sb(39774),
      lb = sb(39770),
      Qb = sb(39777),
      eb = sb(39779),
      Cb = sb(39767),
      Nb = sb(39787),
      Vb = sb(39761),
      Lb = sb(39441),
      ub = sb(39794),
      Yb = sb(39796),
      hb = sb(39805),
      Jb = sb(39814),
      gb = sb(39823),
      Bb = sb(36698),
      tb = sb(39296);
    const yb = {
      effect: null,
      subMesh: null
    };
    class Pb extends((0, Jb.b)((0, hb.c)(nb.b))) {}
    class Db extends((0, fb.e)(Pb)) {
      constructor(bb) {
        super(bb), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class Eb extends((0, gb.c)(mb.d)) {}
    let ib = (() => {
        var bb, cb, fb, nb, hb, Jb, gb, Bb, tb, Pb, ib, Ob, Gb, Kb, Zb, zb, qb, db, Ab, wb, rb, ob, Sb, Rb, vb, Fb, xb, jb, pb, bc, cc, sc, kc;
        let Wc, ac, Tc, Uc, Ic, Hc, fc, Mc, Xc, nc, mc, lc, Qc, ec, Cc, Nc, Vc, Lc, uc, Yc, hc, Jc, gc, Bc, tc, yc, Pc, Dc, Ec, ic, Oc, Gc, Kc, Zc, zc, qc, dc, Ac, wc, rc, oc, Sc, Rc, vc, Fc, xc, jc, pc, bs, cs, ss, ks, Ws, as, Ts, Us, Is, Hs, fs, Ms, Xs, ns, ms, ls, Qs, es, Cs, Ns, Vs, Ls, us, Ys, hs, gs = Eb,
          Bs = [],
          ts = [],
          ys = [],
          Ps = [],
          Ds = [],
          Es = [],
          is = [],
          Os = [],
          Gs = [],
          Ks = [],
          Zs = [],
          zs = [],
          qs = [],
          ds = [],
          As = [],
          ws = [],
          rs = [],
          os = [],
          Ss = [],
          Rs = [],
          vs = [],
          Fs = [],
          xs = [],
          ps = [],
          bk = [],
          ck = [],
          sk = [],
          kk = [],
          Wk = [],
          ak = [],
          Tk = [],
          Uk = [],
          Ik = [],
          Hk = [],
          fk = [],
          Mk = [],
          Xk = [],
          nk = [],
          mk = [],
          lk = [],
          Qk = [],
          ek = [],
          Ck = [],
          Nk = [],
          Vk = [],
          Lk = [],
          uk = [],
          Yk = [],
          hk = [],
          Jk = [],
          gk = [],
          Bk = [],
          tk = [],
          yk = [],
          Pk = [],
          Dk = [],
          Ek = [],
          ik = [],
          Ok = [],
          Gk = [],
          Kk = [],
          Zk = [],
          zk = [],
          qk = [],
          dk = [],
          Ak = [],
          wk = [],
          rk = [],
          Sk = [],
          Rk = [],
          vk = [],
          Fk = [],
          xk = [],
          jk = [],
          pk = [],
          bW = [],
          cW = [],
          sW = [],
          kW = [],
          WW = [],
          aW = [],
          TW = [],
          UW = [],
          IW = [],
          HW = [],
          fW = [],
          MW = [],
          XW = [],
          nW = [],
          mW = [],
          lW = [],
          QW = [],
          eW = [],
          CW = [],
          NW = [],
          VW = [],
          LW = [],
          uW = [],
          YW = [],
          hW = [],
          JW = [],
          gW = [],
          BW = [],
          tW = [],
          yW = [],
          PW = [],
          DW = [],
          EW = [],
          iW = [],
          OW = [],
          GW = [],
          KW = [],
          ZW = [],
          zW = [],
          qW = [],
          dW = [],
          AW = [],
          wW = [],
          rW = [],
          oW = [],
          SW = [],
          RW = [],
          vW = [],
          FW = [],
          xW = [],
          jW = [],
          pW = [],
          ba = [],
          ca = [],
          sa = [],
          ka = [],
          Wa = [],
          aa = [],
          Ta = [],
          Ua = [],
          Ia = [],
          Ha = [],
          fa = [],
          Ma = [],
          Xa = [],
          na = [],
          ma = [],
          la = [],
          Qa = [],
          ea = [],
          Ca = [];
        return bb = class extends gs {
          get diffuseTexture() {
            return (0, kb.d)(this, cb, "f")
          }
          set diffuseTexture(bb) {
            (0, kb.h)(this, cb, bb, "f")
          }
          get ambientTexture() {
            return (0, kb.d)(this, fb, "f")
          }
          set ambientTexture(bb) {
            (0, kb.h)(this, fb, bb, "f")
          }
          get opacityTexture() {
            return (0, kb.d)(this, nb, "f")
          }
          set opacityTexture(bb) {
            (0, kb.h)(this, nb, bb, "f")
          }
          get reflectionTexture() {
            return (0, kb.d)(this, hb, "f")
          }
          set reflectionTexture(bb) {
            (0, kb.h)(this, hb, bb, "f")
          }
          get emissiveTexture() {
            return (0, kb.d)(this, Jb, "f")
          }
          set emissiveTexture(bb) {
            (0, kb.h)(this, Jb, bb, "f")
          }
          get specularTexture() {
            return (0, kb.d)(this, gb, "f")
          }
          set specularTexture(bb) {
            (0, kb.h)(this, gb, bb, "f")
          }
          get bumpTexture() {
            return (0, kb.d)(this, Bb, "f")
          }
          set bumpTexture(bb) {
            (0, kb.h)(this, Bb, bb, "f")
          }
          get lightmapTexture() {
            return (0, kb.d)(this, tb, "f")
          }
          set lightmapTexture(bb) {
            (0, kb.h)(this, tb, bb, "f")
          }
          get refractionTexture() {
            return (0, kb.d)(this, Pb, "f")
          }
          set refractionTexture(bb) {
            (0, kb.h)(this, Pb, bb, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, kb.d)(this, ib, "f")
          }
          set useAlphaFromDiffuseTexture(bb) {
            (0, kb.h)(this, ib, bb, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, kb.d)(this, Ob, "f")
          }
          set useEmissiveAsIllumination(bb) {
            (0, kb.h)(this, Ob, bb, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, kb.d)(this, Gb, "f")
          }
          set linkEmissiveWithDiffuse(bb) {
            (0, kb.h)(this, Gb, bb, "f")
          }
          get useSpecularOverAlpha() {
            return (0, kb.d)(this, Kb, "f")
          }
          set useSpecularOverAlpha(bb) {
            (0, kb.h)(this, Kb, bb, "f")
          }
          get useReflectionOverAlpha() {
            return (0, kb.d)(this, Zb, "f")
          }
          set useReflectionOverAlpha(bb) {
            (0, kb.h)(this, Zb, bb, "f")
          }
          get disableLighting() {
            return (0, kb.d)(this, zb, "f")
          }
          set disableLighting(bb) {
            (0, kb.h)(this, zb, bb, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, kb.d)(this, qb, "f")
          }
          set useObjectSpaceNormalMap(bb) {
            (0, kb.h)(this, qb, bb, "f")
          }
          get useParallax() {
            return (0, kb.d)(this, db, "f")
          }
          set useParallax(bb) {
            (0, kb.h)(this, db, bb, "f")
          }
          get useParallaxOcclusion() {
            return (0, kb.d)(this, Ab, "f")
          }
          set useParallaxOcclusion(bb) {
            (0, kb.h)(this, Ab, bb, "f")
          }
          get roughness() {
            return (0, kb.d)(this, wb, "f")
          }
          set roughness(bb) {
            (0, kb.h)(this, wb, bb, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, kb.d)(this, rb, "f")
          }
          set useLightmapAsShadowmap(bb) {
            (0, kb.h)(this, rb, bb, "f")
          }
          get diffuseFresnelParameters() {
            return (0, kb.d)(this, ob, "f")
          }
          set diffuseFresnelParameters(bb) {
            (0, kb.h)(this, ob, bb, "f")
          }
          get opacityFresnelParameters() {
            return (0, kb.d)(this, Sb, "f")
          }
          set opacityFresnelParameters(bb) {
            (0, kb.h)(this, Sb, bb, "f")
          }
          get reflectionFresnelParameters() {
            return (0, kb.d)(this, Rb, "f")
          }
          set reflectionFresnelParameters(bb) {
            (0, kb.h)(this, Rb, bb, "f")
          }
          get refractionFresnelParameters() {
            return (0, kb.d)(this, vb, "f")
          }
          set refractionFresnelParameters(bb) {
            (0, kb.h)(this, vb, bb, "f")
          }
          get emissiveFresnelParameters() {
            return (0, kb.d)(this, Fb, "f")
          }
          set emissiveFresnelParameters(bb) {
            (0, kb.h)(this, Fb, bb, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, kb.d)(this, xb, "f")
          }
          set useReflectionFresnelFromSpecular(bb) {
            (0, kb.h)(this, xb, bb, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, kb.d)(this, jb, "f")
          }
          set useGlossinessFromSpecularMapAlpha(bb) {
            (0, kb.h)(this, jb, bb, "f")
          }
          get maxSimultaneousLights() {
            return (0, kb.d)(this, pb, "f")
          }
          set maxSimultaneousLights(bb) {
            (0, kb.h)(this, pb, bb, "f")
          }
          get invertNormalMapX() {
            return (0, kb.d)(this, bc, "f")
          }
          set invertNormalMapX(bb) {
            (0, kb.h)(this, bc, bb, "f")
          }
          get invertNormalMapY() {
            return (0, kb.d)(this, cc, "f")
          }
          set invertNormalMapY(bb) {
            (0, kb.h)(this, cc, bb, "f")
          }
          get twoSidedLighting() {
            return (0, kb.d)(this, sc, "f")
          }
          set twoSidedLighting(bb) {
            (0, kb.h)(this, sc, bb, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, kb.d)(this, kc, "f")
          }
          set applyDecalMapAfterDetailMap(bb) {
            (0, kb.h)(this, kc, bb, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(sb, Wb) {
            super(sb, Wb, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || bb.ForceGLSL), this._diffuseTexture = (0, kb.m)(this, Bs, null), cb.set(this, ((0, kb.m)(this, ts), (0, kb.m)(this, ys, void 0))), this._ambientTexture = ((0, kb.m)(this, Ps), (0, kb.m)(this, Ds, null)), fb.set(this, ((0, kb.m)(this, Es), (0, kb.m)(this, is, void 0))), this._opacityTexture = ((0, kb.m)(this, Os), (0, kb.m)(this, Gs, null)), nb.set(this, ((0, kb.m)(this, Ks), (0, kb.m)(this, Zs, void 0))), this._reflectionTexture = ((0, kb.m)(this, zs), (0, kb.m)(this, qs, null)), hb.set(this, ((0, kb.m)(this, ds), (0, kb.m)(this, As, void 0))), this._emissiveTexture = ((0, kb.m)(this, ws), (0, kb.m)(this, rs, null)), Jb.set(this, ((0, kb.m)(this, os), (0, kb.m)(this, Ss, void 0))), this._specularTexture = ((0, kb.m)(this, Rs), (0, kb.m)(this, vs, null)), gb.set(this, ((0, kb.m)(this, Fs), (0, kb.m)(this, xs, void 0))), this._bumpTexture = ((0, kb.m)(this, ps), (0, kb.m)(this, bk, null)), Bb.set(this, ((0, kb.m)(this, ck), (0, kb.m)(this, sk, void 0))), this._lightmapTexture = ((0, kb.m)(this, kk), (0, kb.m)(this, Wk, null)), tb.set(this, ((0, kb.m)(this, ak), (0, kb.m)(this, Tk, void 0))), this._refractionTexture = ((0, kb.m)(this, Uk), (0, kb.m)(this, Ik, null)), Pb.set(this, ((0, kb.m)(this, Hk), (0, kb.m)(this, fk, void 0))), this.ambientColor = ((0, kb.m)(this, Mk), (0, kb.m)(this, Xk, new Ub.e(0, 0, 0))), this.diffuseColor = ((0, kb.m)(this, nk), (0, kb.m)(this, mk, new Ub.e(1, 1, 1))), this.specularColor = ((0, kb.m)(this, lk), (0, kb.m)(this, Qk, new Ub.e(1, 1, 1))), this.emissiveColor = ((0, kb.m)(this, ek), (0, kb.m)(this, Ck, new Ub.e(0, 0, 0))), this.specularPower = ((0, kb.m)(this, Nk), (0, kb.m)(this, Vk, 64)), this._useAlphaFromDiffuseTexture = ((0, kb.m)(this, Lk), (0, kb.m)(this, uk, !1)), ib.set(this, ((0, kb.m)(this, Yk), (0, kb.m)(this, hk, void 0))), this._useEmissiveAsIllumination = ((0, kb.m)(this, Jk), (0, kb.m)(this, gk, !1)), Ob.set(this, ((0, kb.m)(this, Bk), (0, kb.m)(this, tk, void 0))), this._linkEmissiveWithDiffuse = ((0, kb.m)(this, yk), (0, kb.m)(this, Pk, !1)), Gb.set(this, ((0, kb.m)(this, Dk), (0, kb.m)(this, Ek, void 0))), this._useSpecularOverAlpha = ((0, kb.m)(this, ik), (0, kb.m)(this, Ok, !1)), Kb.set(this, ((0, kb.m)(this, Gk), (0, kb.m)(this, Kk, void 0))), this._useReflectionOverAlpha = ((0, kb.m)(this, Zk), (0, kb.m)(this, zk, !1)), Zb.set(this, ((0, kb.m)(this, qk), (0, kb.m)(this, dk, void 0))), this._disableLighting = ((0, kb.m)(this, Ak), (0, kb.m)(this, wk, !1)), zb.set(this, ((0, kb.m)(this, rk), (0, kb.m)(this, Sk, void 0))), this._useObjectSpaceNormalMap = ((0, kb.m)(this, Rk), (0, kb.m)(this, vk, !1)), qb.set(this, ((0, kb.m)(this, Fk), (0, kb.m)(this, xk, void 0))), this._useParallax = ((0, kb.m)(this, jk), (0, kb.m)(this, pk, !1)), db.set(this, ((0, kb.m)(this, bW), (0, kb.m)(this, cW, void 0))), this._useParallaxOcclusion = ((0, kb.m)(this, sW), (0, kb.m)(this, kW, !1)), Ab.set(this, ((0, kb.m)(this, WW), (0, kb.m)(this, aW, void 0))), this.parallaxScaleBias = ((0, kb.m)(this, TW), (0, kb.m)(this, UW, .05)), this._roughness = ((0, kb.m)(this, IW), (0, kb.m)(this, HW, 0)), wb.set(this, ((0, kb.m)(this, fW), (0, kb.m)(this, MW, void 0))), this.indexOfRefraction = ((0, kb.m)(this, XW), (0, kb.m)(this, nW, .98)), this.invertRefractionY = ((0, kb.m)(this, mW), (0, kb.m)(this, lW, !0)), this.alphaCutOff = ((0, kb.m)(this, QW), (0, kb.m)(this, eW, .4)), this._useLightmapAsShadowmap = ((0, kb.m)(this, CW), (0, kb.m)(this, NW, !1)), rb.set(this, ((0, kb.m)(this, VW), (0, kb.m)(this, LW, void 0))), this._diffuseFresnelParameters = ((0, kb.m)(this, uW), (0, kb.m)(this, YW, void 0)), ob.set(this, ((0, kb.m)(this, hW), (0, kb.m)(this, JW, void 0))), this._opacityFresnelParameters = ((0, kb.m)(this, gW), (0, kb.m)(this, BW, void 0)), Sb.set(this, ((0, kb.m)(this, tW), (0, kb.m)(this, yW, void 0))), this._reflectionFresnelParameters = ((0, kb.m)(this, PW), (0, kb.m)(this, DW, void 0)), Rb.set(this, ((0, kb.m)(this, EW), (0, kb.m)(this, iW, void 0))), this._refractionFresnelParameters = ((0, kb.m)(this, OW), (0, kb.m)(this, GW, void 0)), vb.set(this, ((0, kb.m)(this, KW), (0, kb.m)(this, ZW, void 0))), this._emissiveFresnelParameters = ((0, kb.m)(this, zW), (0, kb.m)(this, qW, void 0)), Fb.set(this, ((0, kb.m)(this, dW), (0, kb.m)(this, AW, void 0))), this._useReflectionFresnelFromSpecular = ((0, kb.m)(this, wW), (0, kb.m)(this, rW, !1)), xb.set(this, ((0, kb.m)(this, oW), (0, kb.m)(this, SW, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, kb.m)(this, RW), (0, kb.m)(this, vW, !1)), jb.set(this, ((0, kb.m)(this, FW), (0, kb.m)(this, xW, void 0))), this._maxSimultaneousLights = ((0, kb.m)(this, jW), (0, kb.m)(this, pW, 4)), pb.set(this, ((0, kb.m)(this, ba), (0, kb.m)(this, ca, void 0))), this._invertNormalMapX = ((0, kb.m)(this, sa), (0, kb.m)(this, ka, !1)), bc.set(this, ((0, kb.m)(this, Wa), (0, kb.m)(this, aa, void 0))), this._invertNormalMapY = ((0, kb.m)(this, Ta), (0, kb.m)(this, Ua, !1)), cc.set(this, ((0, kb.m)(this, Ia), (0, kb.m)(this, Ha, void 0))), this._twoSidedLighting = ((0, kb.m)(this, fa), (0, kb.m)(this, Ma, !1)), sc.set(this, ((0, kb.m)(this, Xa), (0, kb.m)(this, na, void 0))), this._applyDecalMapAfterDetailMap = ((0, kb.m)(this, ma), (0, kb.m)(this, la, !1)), kc.set(this, ((0, kb.m)(this, Qa), (0, kb.m)(this, ea, void 0))), this._vertexPullingMetadata = ((0, kb.m)(this, Ca), null), this._renderTargets = new ab.d(16), this._globalAmbientColor = new Ub.e(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new eb.e(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new Hb.e, this.getRenderTargetTextures = () => (this._renderTargets.reset(), bb.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), bb.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
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
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === Xb.e.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== Xb.e.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(cb, sb) {
            let kb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Wb = sb._drawWrapper;
            if (Wb.effect && this.isFrozen && Wb._wasPreviouslyReady && Wb._wasPreviouslyUsingInstances === kb) return !0;
            sb.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), sb.materialDefines = new Db(this._eventInfo.defineNames));
            const ab = this.EY(),
              Tb = sb.materialDefines;
            if (this._isReadyForSubMesh(sb)) return !0;
            const Ub = ab.Sm();
            if (Tb._needNormals = (0, Vb.bb)(ab, cb, Tb, !0, this._maxSimultaneousLights, this._disableLighting), !(0, Vb.d)(ab, cb, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, Vb.jb)(ab, Tb);
            const fb = this.needAlphaBlendingForMesh(cb) && this.EY().useOrderIndependentTransparency;
            if ((0, Vb.ob)(ab, Tb, this.canRenderToMRT && !fb), (0, Vb.mb)(ab, Tb, fb), Yb.d.PrepareDefines(Ub.currentRenderPassId, cb, Tb), Tb._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Tb._needUVs = !1;
              for (let bb = 1; bb <= 6; ++bb) Tb["MAINUV" + bb] = !1;
              if (ab.texturesEnabled) {
                if (Tb.DIFFUSEDIRECTUV = 0, Tb.BUMPDIRECTUV = 0, Tb.AMBIENTDIRECTUV = 0, Tb.OPACITYDIRECTUV = 0, Tb.EMISSIVEDIRECTUV = 0, Tb.SPECULARDIRECTUV = 0, Tb.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && bb.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, Vb.eb)(this._diffuseTexture, Tb, "DIFFUSE")
                } else Tb.DIFFUSE = !1;
                if (this._ambientTexture && bb.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, Vb.eb)(this._ambientTexture, Tb, "AMBIENT")
                } else Tb.AMBIENT = !1;
                if (this._opacityTexture && bb.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, Vb.eb)(this._opacityTexture, Tb, "OPACITY"), Tb.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else Tb.OPACITY = !1;
                if (this._reflectionTexture && bb.ReflectionTextureEnabled ? (Tb.ROUGHNESS = this._roughness > 0, Tb.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (Tb.ROUGHNESS = !1, Tb.REFLECTIONOVERALPHA = !1), !(0, Vb._)(ab, this._reflectionTexture, Tb)) return !1;
                if (this._emissiveTexture && bb.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, Vb.eb)(this._emissiveTexture, Tb, "EMISSIVE")
                } else Tb.EMISSIVE = !1;
                if (this._lightmapTexture && bb.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, Vb.eb)(this._lightmapTexture, Tb, "LIGHTMAP"), Tb.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Tb.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else Tb.LIGHTMAP = !1;
                if (this._specularTexture && bb.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, Vb.eb)(this._specularTexture, Tb, "SPECULAR"), Tb.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else Tb.SPECULAR = !1;
                if (ab.Sm().getCaps().standardDerivatives && this._bumpTexture && bb.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, Vb.eb)(this._bumpTexture, Tb, "BUMP"), Tb.PARALLAX = this._useParallax, Tb.PARALLAX_RHS = ab.useRightHandedSystem, Tb.PARALLAXOCCLUSION = this._useParallaxOcclusion, Tb.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else Tb.BUMP = !1, Tb.PARALLAX = !1, Tb.PARALLAX_RHS = !1, Tb.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && bb.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  Tb._needUVs = !0, Tb.REFRACTION = !0, Tb.REFRACTIONMAP_3D = this._refractionTexture.isCube, Tb.RGBDREFRACTION = this._refractionTexture.isRGBD, Tb.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else Tb.REFRACTION = !1;
                Tb.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else Tb.DIFFUSE = !1, Tb.AMBIENT = !1, Tb.OPACITY = !1, Tb.REFLECTION = !1, Tb.EMISSIVE = !1, Tb.LIGHTMAP = !1, Tb.BUMP = !1, Tb.REFRACTION = !1;
              Tb.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), Tb.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, Tb.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, Tb.SPECULAROVERALPHA = this._useSpecularOverAlpha, Tb.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Tb.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, Tb.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(cb), Tb.TEXTURE_REPETITION_MODE = Ub.version > 1 || Ub.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Tb, this._eventInfo.subMesh = sb, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Tb._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(Tb), Tb.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, Tb.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (Tb._areFresnelDirty && (bb.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (Tb.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, Tb.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, Tb.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, Tb.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, Tb.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, Tb.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, Tb._needNormals = !0, Tb.FRESNEL = !0) : Tb.FRESNEL = !1), Tb.AREALIGHTUSED || Tb.CLUSTLIGHT_BATCH)
              for (let bb = 0; bb < cb.lightSources.length; bb++)
                if (!cb.lightSources[bb]._isReady()) return !1;
            (0, Vb.hb)(cb, ab, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(cb), Tb, this._applyDecalMapAfterDetailMap, this._useVertexPulling, sb.getRenderingMesh(), this._isVertexOutputInvariant), (0, Vb.Y)(ab, Ub, this, Tb, kb, null, sb.getRenderingMesh().hasThinInstances), this._eventInfo.defines = Tb, this._eventInfo.mesh = cb, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Vb.V)(cb, Tb, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let Xb = !1;
            if (Tb.isDirty) {
              const kb = Tb._areLightsDisposed;
              Tb.markAsProcessed();
              const Wb = new Qb.b;
              Tb.REFLECTION && Wb.addFallback(0, "REFLECTION"), Tb.SPECULAR && Wb.addFallback(0, "SPECULAR"), Tb.BUMP && Wb.addFallback(0, "BUMP"), Tb.PARALLAX && Wb.addFallback(1, "PARALLAX"), Tb.PARALLAX_RHS && Wb.addFallback(1, "PARALLAX_RHS"), Tb.PARALLAXOCCLUSION && Wb.addFallback(0, "PARALLAXOCCLUSION"), Tb.SPECULAROVERALPHA && Wb.addFallback(0, "SPECULAROVERALPHA"), Tb.FOG && Wb.addFallback(1, "FOG"), Tb.POINTSIZE && Wb.addFallback(0, "POINTSIZE"), Tb.LOGARITHMICDEPTH && Wb.addFallback(0, "LOGARITHMICDEPTH"), (0, Vb.B)(Tb, Wb, this._maxSimultaneousLights), Tb.SPECULARTERM && Wb.addFallback(0, "SPECULARTERM"), Tb.DIFFUSEFRESNEL && Wb.addFallback(1, "DIFFUSEFRESNEL"), Tb.OPACITYFRESNEL && Wb.addFallback(2, "OPACITYFRESNEL"), Tb.REFLECTIONFRESNEL && Wb.addFallback(3, "REFLECTIONFRESNEL"), Tb.EMISSIVEFRESNEL && Wb.addFallback(4, "EMISSIVEFRESNEL"), Tb.FRESNEL && Wb.addFallback(4, "FRESNEL"), Tb.MULTIVIEW && Wb.addFallback(0, "MULTIVIEW");
              const fb = [Ib.l.PositionKind];
              Tb.NORMAL && fb.push(Ib.l.NormalKind), Tb.TANGENT && fb.push(Ib.l.TangentKind);
              for (let bb = 1; bb <= 6; ++bb) Tb["UV" + bb] && fb.push(`uv${1===bb?"":bb}`);
              Tb.VERTEXCOLOR && fb.push(Ib.l.ColorKind), (0, Vb.I)(fb, cb, Tb, Wb), (0, Vb.L)(fb, Tb), (0, Vb.N)(fb, cb, Tb), (0, Vb.F)(fb, cb, Tb);
              let nb = "default";
              const mb = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                lb = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, Vb.wb)(mb, lb, !1);
              const eb = ["Material", "Scene", "Mesh"],
                Lb = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: Tb.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = Wb, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = Tb, this._eventInfo.uniforms = mb, this._eventInfo.attributes = fb, this._eventInfo.samplers = lb, this._eventInfo.uniformBuffersNames = eb, this._eventInfo.customCode = void 0, this._eventInfo.mesh = cb, this._eventInfo.indexParameters = Lb, this._callbackPluginEventGeneric(128, this._eventInfo), Yb.d.AddUniformsAndSamplers(mb, lb), Hb.e.AddUniforms(mb), Hb.e.AddSamplers(lb), Mb.d && (Mb.d.PrepareUniforms(mb, Tb), Mb.d.PrepareSamplers(lb, Tb)), (0, Vb.zb)({
                  uniformsNames: mb,
                  uniformBuffersNames: eb,
                  samplers: lb,
                  defines: Tb,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, Cb.c)(mb), this._useVertexPulling) {
                const bb = sb.getRenderingMesh(),
                  cb = bb?.geometry;
                cb && (this._vertexPullingMetadata = (0, Nb.h)(cb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((bb, cb) => {
                  mb.push(`vp_${cb}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const ub = {};
              this.customShaderNameResolve && (nb = this.customShaderNameResolve(nb, mb, eb, lb, Tb, fb, ub));
              const hb = Tb.toString(),
                Jb = sb.effect,
                gb = ab.Sm().createEffect(nb, {
                  attributes: fb,
                  uniformsNames: mb,
                  uniformBuffersNames: eb,
                  samplers: lb,
                  defines: hb,
                  fallbacks: Wb,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: Lb,
                  processFinalCode: ub.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: Tb.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: bb._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, Ub);
              if (this._eventInfo.customCode = void 0, gb)
                if (this._onEffectCreatedObservable && (yb.effect = gb, yb.subMesh = sb, this._onEffectCreatedObservable.notifyObservers(yb)), this.allowShaderHotSwapping && Jb && !gb.isReady()) {
                  if (Tb.markAsUnprocessed(), Xb = this.isFrozen, kb) return Tb._areLightsDisposed = !0, !1
                } else ab.resetCachedMaterial(), sb.setEffect(gb, Tb, this._materialContext)
            }
            return !(!sb.effect || !sb.effect.isReady()) && (Tb._renderId = ab.getRenderId(), Wb._wasPreviouslyReady = !Xb, Wb._wasPreviouslyUsingInstances = kb, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const bb = this._uniformBuffer;
            bb.addUniform("diffuseLeftColor", 4), bb.addUniform("diffuseRightColor", 4), bb.addUniform("opacityParts", 4), bb.addUniform("reflectionLeftColor", 4), bb.addUniform("reflectionRightColor", 4), bb.addUniform("refractionLeftColor", 4), bb.addUniform("refractionRightColor", 4), bb.addUniform("emissiveLeftColor", 4), bb.addUniform("emissiveRightColor", 4), bb.addUniform("vDiffuseInfos", 2), bb.addUniform("vAmbientInfos", 2), bb.addUniform("vOpacityInfos", 2), bb.addUniform("vEmissiveInfos", 2), bb.addUniform("vLightmapInfos", 2), bb.addUniform("vSpecularInfos", 2), bb.addUniform("vBumpInfos", 3), bb.addUniform("diffuseMatrix", 16), bb.addUniform("ambientMatrix", 16), bb.addUniform("opacityMatrix", 16), bb.addUniform("emissiveMatrix", 16), bb.addUniform("lightmapMatrix", 16), bb.addUniform("specularMatrix", 16), bb.addUniform("bumpMatrix", 16), bb.addUniform("vTangentSpaceParams", 2), bb.addUniform("pointSize", 1), bb.addUniform("alphaCutOff", 1), bb.addUniform("refractionMatrix", 16), bb.addUniform("vRefractionInfos", 4), bb.addUniform("vRefractionPosition", 3), bb.addUniform("vRefractionSize", 3), bb.addUniform("vSpecularColor", 4), bb.addUniform("vEmissiveColor", 3), bb.addUniform("vDiffuseColor", 4), bb.addUniform("vAmbientColor", 3), bb.addUniform("cameraInfo", 4), bb.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Vb.sb)(bb, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(cb, sb, kb) {
            const Wb = this.EY(),
              ab = kb.materialDefines;
            if (!ab) return;
            const Ib = kb.effect;
            if (!Ib) return;
            this._activeEffect = Ib, sb.getMeshUniformBuffer().bindToEffect(Ib, "Mesh"), sb.transferToEffect(cb), this._uniformBuffer.bindToEffect(Ib, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Wb, sb, cb, this.isFrozen), Yb.d.Bind(Wb.Sm().currentRenderPassId, this._activeEffect, sb, cb, this);
            const Hb = Wb.activeCamera;
            Hb ? this._uniformBuffer.updateFloat4("cameraInfo", Hb.minZ, Hb.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const fb = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", fb[0], fb[1], fb[2], fb[3]), this._eventInfo.subMesh = kb, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), ab.OBJECTSPACE_NORMALMAP && (cb.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Mb = this._mustRebind(Wb, Ib, kb, sb.visibility),
              Xb = Wb.Sm()._features.needToAlwaysBindUniformBuffers;
            (0, Vb.e)(sb, Ib), this._vertexPullingMetadata && (0, Nb.d)(Ib, this._vertexPullingMetadata);
            const nb = this._uniformBuffer;
            if (Mb) {
              if (this.bindViewProjection(Ib), !nb.useUbo || !this.isFrozen || !nb.isSync || kb._drawWrapper._forceRebindOnNextCall) {
                if (bb.FresnelEnabled && ab.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (nb.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), nb.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const bb = Ub.m.Color3[0];
                    bb.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), nb.updateColor4("opacityParts", bb, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (nb.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), nb.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (nb.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), nb.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (nb.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), nb.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (ab.ALPHATEST && nb.updateFloat("alphaCutOff", this.alphaCutOff), Wb.texturesEnabled && (this._diffuseTexture && bb.DiffuseTextureEnabled && (nb.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, Vb.x)(this._diffuseTexture, nb, "diffuse")), this._ambientTexture && bb.AmbientTextureEnabled && (nb.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, Vb.x)(this._ambientTexture, nb, "ambient")), this._opacityTexture && bb.OpacityTextureEnabled && (nb.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Vb.x)(this._opacityTexture, nb, "opacity")), (0, Vb.k)(Wb, ab, nb, Ub.e.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && bb.ReflectionTextureEnabled || nb.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && bb.EmissiveTextureEnabled && (nb.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Vb.x)(this._emissiveTexture, nb, "emissive")), this._lightmapTexture && bb.LightmapTextureEnabled && (nb.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Vb.x)(this._lightmapTexture, nb, "lightmap")), this._specularTexture && bb.SpecularTextureEnabled && (nb.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, Vb.x)(this._specularTexture, nb, "specular")), this._bumpTexture && Wb.Sm().getCaps().standardDerivatives && bb.BumpTextureEnabled && (nb.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, Vb.x)(this._bumpTexture, nb, "bump"), Wb._mirroredCameraPosition ? nb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : nb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && bb.RefractionTextureEnabled)) {
                  let bb = 1;
                  if (this._refractionTexture.isCube || (nb.O4("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (bb = this._refractionTexture.depth)), nb.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, bb, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const bb = this._refractionTexture;
                    nb.updateVector3("vRefractionPosition", bb.boundingBoxPosition), nb.updateVector3("vRefractionSize", bb.boundingBoxSize)
                  }
                }
                this.pointsCloud && nb.updateFloat("pointSize", this.pointSize), nb.updateColor4("vSpecularColor", this.specularColor, this.specularPower), nb.updateColor3("vEmissiveColor", bb.EmissiveTextureEnabled ? this.emissiveColor : Ub.e.BlackReadOnly), nb.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), Wb.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), nb.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              Wb.texturesEnabled && (this._diffuseTexture && bb.DiffuseTextureEnabled && Ib.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && bb.AmbientTextureEnabled && Ib.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && bb.OpacityTextureEnabled && Ib.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && bb.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? Ib.setTexture("reflectionCubeSampler", this._reflectionTexture) : Ib.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && bb.EmissiveTextureEnabled && Ib.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && bb.LightmapTextureEnabled && Ib.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && bb.SpecularTextureEnabled && Ib.setTexture("specularSampler", this._specularTexture), this._bumpTexture && Wb.Sm().getCaps().standardDerivatives && bb.BumpTextureEnabled && Ib.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && bb.RefractionTextureEnabled && (this._refractionTexture.isCube ? Ib.setTexture("refractionCubeSampler", this._refractionTexture) : Ib.setTexture("refraction2DSampler", this._refractionTexture))), this.EY().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(sb) && this.EY().depthPeelingRenderer.bind(Ib), this._eventInfo.subMesh = kb, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Cb.f)(Ib, this, Wb), this.bindEyePosition(Ib)
            } else Xb && (this._needToBindSceneUbo = !0);
            !Mb && this.isFrozen && !Xb || !Wb.lightsEnabled || this._disableLighting || (0, Vb.q)(Wb, sb, Ib, ab, this._maxSimultaneousLights), !Mb && this.isFrozen || ((Wb.fogEnabled && sb.applyFog && Wb.fogMode !== Tb.c.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || sb.receiveShadows || ab.PREPASS || ab.CLUSTLIGHT_BATCH) && this.bindView(Ib), (0, Vb.g)(Wb, sb, Ib), ab.NUM_MORPH_INFLUENCERS && (0, Vb.t)(sb, Ib), ab.BAKED_VERTEX_ANIMATION_TEXTURE && sb.bakedVertexAnimationManager?.bind(Ib, ab.INSTANCES), this.useLogarithmicDepth && (0, Vb.s)(ab, Ib, Wb), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(sb, this._activeEffect, kb), nb.update()
          }
          _canBindRunFollower(cb, sb, kb, Wb, ab) {
            const Tb = cb.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === bb.prototype.isReadyForSubMesh && this.bindForSubMesh === bb.prototype.bindForSubMesh && this._mustRebind === mb.d.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !sb._features.needToAlwaysBindUniformBuffers && !(Tb && Tb.enabled && Tb.currentRTisSceneRT) && !Yb.d._Configurations[sb.currentRenderPassId] && !Wb.materialDefines?.OBJECTSPACE_NORMALMAP && !kb.skeleton && !ab._bonesComputationForcedToCPU
          }
          _bindRunFollower(bb, cb, sb, kb) {
            this._activeEffect = kb, cb.getMeshUniformBuffer().bindToEffect(kb, "Mesh"), cb.transferToEffect(bb);
            const Wb = this._uniformBuffer;
            Wb.bindToEffect(kb, "Material");
            const ab = this._scene.activeCamera;
            ab ? Wb.updateFloat4("cameraInfo", ab.minZ, ab.maxZ, 0, 0) : Wb.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Tb = this.textureRepetitionHexTilingParams;
            Wb.updateFloat4("vTextureRepetitionHexTilingParams", Tb[0], Tb[1], Tb[2], Tb[3]), this._afterBind(cb, kb, sb), Wb.update()
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
          dispose(bb, cb) {
            cb && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(bb, cb)
          }
          clone(cb) {
            let sb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Wb = Lb.d.Clone((() => new bb(cb, this.EY())), this, {
              cloneTexturesOnlyOnce: sb
            });
            return Wb.name = cb, Wb.id = cb, this.stencil.copyTo(Wb.stencil), this._clonePlugins(Wb, kb), Wb
          }
          static Parse(cb, sb, kb) {
            const Wb = Lb.d.Parse((() => new bb(cb.name, sb)), cb, sb, kb);
            return cb.stencil && Wb.stencil.parse(cb.stencil, sb, kb), Xb.e._ParsePlugins(cb, Wb, sb, kb), Wb
          }
          static get DiffuseTextureEnabled() {
            return lb.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(bb) {
            lb.e.DiffuseTextureEnabled = bb
          }
          static get DetailTextureEnabled() {
            return lb.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(bb) {
            lb.e.DetailTextureEnabled = bb
          }
          static get AmbientTextureEnabled() {
            return lb.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(bb) {
            lb.e.AmbientTextureEnabled = bb
          }
          static get OpacityTextureEnabled() {
            return lb.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(bb) {
            lb.e.OpacityTextureEnabled = bb
          }
          static get ReflectionTextureEnabled() {
            return lb.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(bb) {
            lb.e.ReflectionTextureEnabled = bb
          }
          static get EmissiveTextureEnabled() {
            return lb.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(bb) {
            lb.e.EmissiveTextureEnabled = bb
          }
          static get SpecularTextureEnabled() {
            return lb.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(bb) {
            lb.e.SpecularTextureEnabled = bb
          }
          static get BumpTextureEnabled() {
            return lb.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(bb) {
            lb.e.BumpTextureEnabled = bb
          }
          static get LightmapTextureEnabled() {
            return lb.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(bb) {
            lb.e.LightmapTextureEnabled = bb
          }
          static get RefractionTextureEnabled() {
            return lb.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(bb) {
            lb.e.RefractionTextureEnabled = bb
          }
          static get ColorGradingTextureEnabled() {
            return lb.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(bb) {
            lb.e.ColorGradingTextureEnabled = bb
          }
          static get FresnelEnabled() {
            return lb.e.FresnelEnabled
          }
          static set FresnelEnabled(bb) {
            lb.e.FresnelEnabled = bb
          }
        }, cb = new WeakMap, fb = new WeakMap, nb = new WeakMap, hb = new WeakMap, Jb = new WeakMap, gb = new WeakMap, Bb = new WeakMap, tb = new WeakMap, Pb = new WeakMap, ib = new WeakMap, Ob = new WeakMap, Gb = new WeakMap, Kb = new WeakMap, Zb = new WeakMap, zb = new WeakMap, qb = new WeakMap, db = new WeakMap, Ab = new WeakMap, wb = new WeakMap, rb = new WeakMap, ob = new WeakMap, Sb = new WeakMap, Rb = new WeakMap, vb = new WeakMap, Fb = new WeakMap, xb = new WeakMap, jb = new WeakMap, pb = new WeakMap, bc = new WeakMap, cc = new WeakMap, sc = new WeakMap, kc = new WeakMap, (() => {
          const cb = "function" === typeof Symbol && Symbol.metadata ? Object.create(gs[Symbol.metadata] ?? null) : void 0;
          Wc = [(0, Wb.x)("diffuseTexture")], ac = [(0, Wb.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], Tc = [(0, Wb.x)("ambientTexture")], Uc = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], Ic = [(0, Wb.x)("opacityTexture")], Hc = [(0, Wb.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], fc = [(0, Wb.x)("reflectionTexture")], Mc = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], Xc = [(0, Wb.x)("emissiveTexture")], nc = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], mc = [(0, Wb.x)("specularTexture")], lc = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], Qc = [(0, Wb.x)("bumpTexture")], ec = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], Cc = [(0, Wb.x)("lightmapTexture")], Nc = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], Vc = [(0, Wb.x)("refractionTexture")], Lc = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], uc = [(0, Wb.o)("ambient")], Yc = [(0, Wb.o)("diffuse")], hc = [(0, Wb.o)("specular")], Jc = [(0, Wb.o)("emissive")], gc = [(0, Wb.E)()], Bc = [(0, Wb.E)("useAlphaFromDiffuseTexture")], tc = [() => ({
            init(bb) {
              return void 0 === bb && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = bb), bb
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(bb) {
              this._useAlphaFromDiffuseTexture = bb
            }
          })], yc = [(0, Wb.E)("useEmissiveAsIllumination")], Pc = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], Dc = [(0, Wb.E)("linkEmissiveWithDiffuse")], Ec = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], ic = [(0, Wb.E)("useSpecularOverAlpha")], Oc = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], Gc = [(0, Wb.E)("useReflectionOverAlpha")], Kc = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], Zc = [(0, Wb.E)("disableLighting")], zc = [(0, Wb.f)("_markAllSubMeshesAsLightsDirty")], qc = [(0, Wb.E)("useObjectSpaceNormalMap")], dc = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], Ac = [(0, Wb.E)("useParallax")], wc = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], rc = [(0, Wb.E)("useParallaxOcclusion")], oc = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], Sc = [(0, Wb.E)()], Rc = [(0, Wb.E)("roughness")], vc = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], Fc = [(0, Wb.E)()], xc = [(0, Wb.E)()], jc = [(0, Wb.E)()], pc = [(0, Wb.E)("useLightmapAsShadowmap")], bs = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], cs = [(0, Wb.s)("diffuseFresnelParameters")], ss = [(0, Wb.f)("_markAllSubMeshesAsFresnelDirty")], ks = [(0, Wb.s)("opacityFresnelParameters")], Ws = [(0, Wb.f)("_markAllSubMeshesAsFresnelAndMiscDirty")], as = [(0, Wb.s)("reflectionFresnelParameters")], Ts = [(0, Wb.f)("_markAllSubMeshesAsFresnelDirty")], Us = [(0, Wb.s)("refractionFresnelParameters")], Is = [(0, Wb.f)("_markAllSubMeshesAsFresnelDirty")], Hs = [(0, Wb.s)("emissiveFresnelParameters")], fs = [(0, Wb.f)("_markAllSubMeshesAsFresnelDirty")], Ms = [(0, Wb.E)("useReflectionFresnelFromSpecular")], Xs = [(0, Wb.f)("_markAllSubMeshesAsFresnelDirty")], ns = [(0, Wb.E)("useGlossinessFromSpecularMapAlpha")], ms = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], ls = [(0, Wb.E)("maxSimultaneousLights")], Qs = [(0, Wb.f)("_markAllSubMeshesAsLightsDirty")], es = [(0, Wb.E)("invertNormalMapX")], Cs = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], Ns = [(0, Wb.E)("invertNormalMapY")], Vs = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], Ls = [(0, Wb.E)("twoSidedLighting")], us = [(0, Wb.f)("_markAllSubMeshesAsTexturesDirty")], Ys = [(0, Wb.E)("applyDecalMapAfterDetailMap")], hs = [(0, Wb.f)("_markAllSubMeshesAsMiscDirty")], (0, kb.j)(bb, null, ac, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "diffuseTexture" in bb,
              get: bb => bb.diffuseTexture,
              set: (bb, cb) => {
                bb.diffuseTexture = cb
              }
            },
            metadata: cb
          }, ys, Ps), (0, kb.j)(bb, null, Uc, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "ambientTexture" in bb,
              get: bb => bb.ambientTexture,
              set: (bb, cb) => {
                bb.ambientTexture = cb
              }
            },
            metadata: cb
          }, is, Os), (0, kb.j)(bb, null, Hc, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "opacityTexture" in bb,
              get: bb => bb.opacityTexture,
              set: (bb, cb) => {
                bb.opacityTexture = cb
              }
            },
            metadata: cb
          }, Zs, zs), (0, kb.j)(bb, null, Mc, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "reflectionTexture" in bb,
              get: bb => bb.reflectionTexture,
              set: (bb, cb) => {
                bb.reflectionTexture = cb
              }
            },
            metadata: cb
          }, As, ws), (0, kb.j)(bb, null, nc, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissiveTexture" in bb,
              get: bb => bb.emissiveTexture,
              set: (bb, cb) => {
                bb.emissiveTexture = cb
              }
            },
            metadata: cb
          }, Ss, Rs), (0, kb.j)(bb, null, lc, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularTexture" in bb,
              get: bb => bb.specularTexture,
              set: (bb, cb) => {
                bb.specularTexture = cb
              }
            },
            metadata: cb
          }, xs, ps), (0, kb.j)(bb, null, ec, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "bumpTexture" in bb,
              get: bb => bb.bumpTexture,
              set: (bb, cb) => {
                bb.bumpTexture = cb
              }
            },
            metadata: cb
          }, sk, kk), (0, kb.j)(bb, null, Nc, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "lightmapTexture" in bb,
              get: bb => bb.lightmapTexture,
              set: (bb, cb) => {
                bb.lightmapTexture = cb
              }
            },
            metadata: cb
          }, Tk, Uk), (0, kb.j)(bb, null, Lc, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "refractionTexture" in bb,
              get: bb => bb.refractionTexture,
              set: (bb, cb) => {
                bb.refractionTexture = cb
              }
            },
            metadata: cb
          }, fk, Mk), (0, kb.j)(bb, null, tc, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "useAlphaFromDiffuseTexture" in bb,
              get: bb => bb.useAlphaFromDiffuseTexture,
              set: (bb, cb) => {
                bb.useAlphaFromDiffuseTexture = cb
              }
            },
            metadata: cb
          }, hk, Jk), (0, kb.j)(bb, null, Pc, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: bb => "useEmissiveAsIllumination" in bb,
              get: bb => bb.useEmissiveAsIllumination,
              set: (bb, cb) => {
                bb.useEmissiveAsIllumination = cb
              }
            },
            metadata: cb
          }, tk, yk), (0, kb.j)(bb, null, Ec, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: bb => "linkEmissiveWithDiffuse" in bb,
              get: bb => bb.linkEmissiveWithDiffuse,
              set: (bb, cb) => {
                bb.linkEmissiveWithDiffuse = cb
              }
            },
            metadata: cb
          }, Ek, ik), (0, kb.j)(bb, null, Oc, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "useSpecularOverAlpha" in bb,
              get: bb => bb.useSpecularOverAlpha,
              set: (bb, cb) => {
                bb.useSpecularOverAlpha = cb
              }
            },
            metadata: cb
          }, Kk, Zk), (0, kb.j)(bb, null, Kc, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "useReflectionOverAlpha" in bb,
              get: bb => bb.useReflectionOverAlpha,
              set: (bb, cb) => {
                bb.useReflectionOverAlpha = cb
              }
            },
            metadata: cb
          }, dk, Ak), (0, kb.j)(bb, null, zc, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "disableLighting" in bb,
              get: bb => bb.disableLighting,
              set: (bb, cb) => {
                bb.disableLighting = cb
              }
            },
            metadata: cb
          }, Sk, Rk), (0, kb.j)(bb, null, dc, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "useObjectSpaceNormalMap" in bb,
              get: bb => bb.useObjectSpaceNormalMap,
              set: (bb, cb) => {
                bb.useObjectSpaceNormalMap = cb
              }
            },
            metadata: cb
          }, xk, jk), (0, kb.j)(bb, null, wc, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: bb => "useParallax" in bb,
              get: bb => bb.useParallax,
              set: (bb, cb) => {
                bb.useParallax = cb
              }
            },
            metadata: cb
          }, cW, sW), (0, kb.j)(bb, null, oc, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "useParallaxOcclusion" in bb,
              get: bb => bb.useParallaxOcclusion,
              set: (bb, cb) => {
                bb.useParallaxOcclusion = cb
              }
            },
            metadata: cb
          }, aW, TW), (0, kb.j)(bb, null, vc, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "roughness" in bb,
              get: bb => bb.roughness,
              set: (bb, cb) => {
                bb.roughness = cb
              }
            },
            metadata: cb
          }, MW, XW), (0, kb.j)(bb, null, bs, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: bb => "useLightmapAsShadowmap" in bb,
              get: bb => bb.useLightmapAsShadowmap,
              set: (bb, cb) => {
                bb.useLightmapAsShadowmap = cb
              }
            },
            metadata: cb
          }, LW, uW), (0, kb.j)(bb, null, ss, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "diffuseFresnelParameters" in bb,
              get: bb => bb.diffuseFresnelParameters,
              set: (bb, cb) => {
                bb.diffuseFresnelParameters = cb
              }
            },
            metadata: cb
          }, JW, gW), (0, kb.j)(bb, null, Ws, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "opacityFresnelParameters" in bb,
              get: bb => bb.opacityFresnelParameters,
              set: (bb, cb) => {
                bb.opacityFresnelParameters = cb
              }
            },
            metadata: cb
          }, yW, PW), (0, kb.j)(bb, null, Ts, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "reflectionFresnelParameters" in bb,
              get: bb => bb.reflectionFresnelParameters,
              set: (bb, cb) => {
                bb.reflectionFresnelParameters = cb
              }
            },
            metadata: cb
          }, iW, OW), (0, kb.j)(bb, null, Is, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "refractionFresnelParameters" in bb,
              get: bb => bb.refractionFresnelParameters,
              set: (bb, cb) => {
                bb.refractionFresnelParameters = cb
              }
            },
            metadata: cb
          }, ZW, zW), (0, kb.j)(bb, null, fs, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissiveFresnelParameters" in bb,
              get: bb => bb.emissiveFresnelParameters,
              set: (bb, cb) => {
                bb.emissiveFresnelParameters = cb
              }
            },
            metadata: cb
          }, AW, wW), (0, kb.j)(bb, null, Xs, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: bb => "useReflectionFresnelFromSpecular" in bb,
              get: bb => bb.useReflectionFresnelFromSpecular,
              set: (bb, cb) => {
                bb.useReflectionFresnelFromSpecular = cb
              }
            },
            metadata: cb
          }, SW, RW), (0, kb.j)(bb, null, ms, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "useGlossinessFromSpecularMapAlpha" in bb,
              get: bb => bb.useGlossinessFromSpecularMapAlpha,
              set: (bb, cb) => {
                bb.useGlossinessFromSpecularMapAlpha = cb
              }
            },
            metadata: cb
          }, xW, jW), (0, kb.j)(bb, null, Qs, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: bb => "maxSimultaneousLights" in bb,
              get: bb => bb.maxSimultaneousLights,
              set: (bb, cb) => {
                bb.maxSimultaneousLights = cb
              }
            },
            metadata: cb
          }, ca, sa), (0, kb.j)(bb, null, Cs, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertNormalMapX" in bb,
              get: bb => bb.invertNormalMapX,
              set: (bb, cb) => {
                bb.invertNormalMapX = cb
              }
            },
            metadata: cb
          }, aa, Ta), (0, kb.j)(bb, null, Vs, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertNormalMapY" in bb,
              get: bb => bb.invertNormalMapY,
              set: (bb, cb) => {
                bb.invertNormalMapY = cb
              }
            },
            metadata: cb
          }, Ha, fa), (0, kb.j)(bb, null, us, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "twoSidedLighting" in bb,
              get: bb => bb.twoSidedLighting,
              set: (bb, cb) => {
                bb.twoSidedLighting = cb
              }
            },
            metadata: cb
          }, na, ma), (0, kb.j)(bb, null, hs, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "applyDecalMapAfterDetailMap" in bb,
              get: bb => bb.applyDecalMapAfterDetailMap,
              set: (bb, cb) => {
                bb.applyDecalMapAfterDetailMap = cb
              }
            },
            metadata: cb
          }, ea, Ca), (0, kb.j)(null, null, Wc, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_diffuseTexture" in bb,
              get: bb => bb._diffuseTexture,
              set: (bb, cb) => {
                bb._diffuseTexture = cb
              }
            },
            metadata: cb
          }, Bs, ts), (0, kb.j)(null, null, Tc, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_ambientTexture" in bb,
              get: bb => bb._ambientTexture,
              set: (bb, cb) => {
                bb._ambientTexture = cb
              }
            },
            metadata: cb
          }, Ds, Es), (0, kb.j)(null, null, Ic, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_opacityTexture" in bb,
              get: bb => bb._opacityTexture,
              set: (bb, cb) => {
                bb._opacityTexture = cb
              }
            },
            metadata: cb
          }, Gs, Ks), (0, kb.j)(null, null, fc, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_reflectionTexture" in bb,
              get: bb => bb._reflectionTexture,
              set: (bb, cb) => {
                bb._reflectionTexture = cb
              }
            },
            metadata: cb
          }, qs, ds), (0, kb.j)(null, null, Xc, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_emissiveTexture" in bb,
              get: bb => bb._emissiveTexture,
              set: (bb, cb) => {
                bb._emissiveTexture = cb
              }
            },
            metadata: cb
          }, rs, os), (0, kb.j)(null, null, mc, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_specularTexture" in bb,
              get: bb => bb._specularTexture,
              set: (bb, cb) => {
                bb._specularTexture = cb
              }
            },
            metadata: cb
          }, vs, Fs), (0, kb.j)(null, null, Qc, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_bumpTexture" in bb,
              get: bb => bb._bumpTexture,
              set: (bb, cb) => {
                bb._bumpTexture = cb
              }
            },
            metadata: cb
          }, bk, ck), (0, kb.j)(null, null, Cc, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_lightmapTexture" in bb,
              get: bb => bb._lightmapTexture,
              set: (bb, cb) => {
                bb._lightmapTexture = cb
              }
            },
            metadata: cb
          }, Wk, ak), (0, kb.j)(null, null, Vc, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_refractionTexture" in bb,
              get: bb => bb._refractionTexture,
              set: (bb, cb) => {
                bb._refractionTexture = cb
              }
            },
            metadata: cb
          }, Ik, Hk), (0, kb.j)(null, null, uc, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "ambientColor" in bb,
              get: bb => bb.ambientColor,
              set: (bb, cb) => {
                bb.ambientColor = cb
              }
            },
            metadata: cb
          }, Xk, nk), (0, kb.j)(null, null, Yc, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "diffuseColor" in bb,
              get: bb => bb.diffuseColor,
              set: (bb, cb) => {
                bb.diffuseColor = cb
              }
            },
            metadata: cb
          }, mk, lk), (0, kb.j)(null, null, hc, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularColor" in bb,
              get: bb => bb.specularColor,
              set: (bb, cb) => {
                bb.specularColor = cb
              }
            },
            metadata: cb
          }, Qk, ek), (0, kb.j)(null, null, Jc, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "emissiveColor" in bb,
              get: bb => bb.emissiveColor,
              set: (bb, cb) => {
                bb.emissiveColor = cb
              }
            },
            metadata: cb
          }, Ck, Nk), (0, kb.j)(null, null, gc, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: bb => "specularPower" in bb,
              get: bb => bb.specularPower,
              set: (bb, cb) => {
                bb.specularPower = cb
              }
            },
            metadata: cb
          }, Vk, Lk), (0, kb.j)(null, null, Bc, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useAlphaFromDiffuseTexture" in bb,
              get: bb => bb._useAlphaFromDiffuseTexture,
              set: (bb, cb) => {
                bb._useAlphaFromDiffuseTexture = cb
              }
            },
            metadata: cb
          }, uk, Yk), (0, kb.j)(null, null, yc, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useEmissiveAsIllumination" in bb,
              get: bb => bb._useEmissiveAsIllumination,
              set: (bb, cb) => {
                bb._useEmissiveAsIllumination = cb
              }
            },
            metadata: cb
          }, gk, Bk), (0, kb.j)(null, null, Dc, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: bb => "_linkEmissiveWithDiffuse" in bb,
              get: bb => bb._linkEmissiveWithDiffuse,
              set: (bb, cb) => {
                bb._linkEmissiveWithDiffuse = cb
              }
            },
            metadata: cb
          }, Pk, Dk), (0, kb.j)(null, null, ic, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useSpecularOverAlpha" in bb,
              get: bb => bb._useSpecularOverAlpha,
              set: (bb, cb) => {
                bb._useSpecularOverAlpha = cb
              }
            },
            metadata: cb
          }, Ok, Gk), (0, kb.j)(null, null, Gc, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useReflectionOverAlpha" in bb,
              get: bb => bb._useReflectionOverAlpha,
              set: (bb, cb) => {
                bb._useReflectionOverAlpha = cb
              }
            },
            metadata: cb
          }, zk, qk), (0, kb.j)(null, null, Zc, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "_disableLighting" in bb,
              get: bb => bb._disableLighting,
              set: (bb, cb) => {
                bb._disableLighting = cb
              }
            },
            metadata: cb
          }, wk, rk), (0, kb.j)(null, null, qc, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useObjectSpaceNormalMap" in bb,
              get: bb => bb._useObjectSpaceNormalMap,
              set: (bb, cb) => {
                bb._useObjectSpaceNormalMap = cb
              }
            },
            metadata: cb
          }, vk, Fk), (0, kb.j)(null, null, Ac, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useParallax" in bb,
              get: bb => bb._useParallax,
              set: (bb, cb) => {
                bb._useParallax = cb
              }
            },
            metadata: cb
          }, pk, bW), (0, kb.j)(null, null, rc, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useParallaxOcclusion" in bb,
              get: bb => bb._useParallaxOcclusion,
              set: (bb, cb) => {
                bb._useParallaxOcclusion = cb
              }
            },
            metadata: cb
          }, kW, WW), (0, kb.j)(null, null, Sc, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: bb => "parallaxScaleBias" in bb,
              get: bb => bb.parallaxScaleBias,
              set: (bb, cb) => {
                bb.parallaxScaleBias = cb
              }
            },
            metadata: cb
          }, UW, IW), (0, kb.j)(null, null, Rc, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: bb => "_roughness" in bb,
              get: bb => bb._roughness,
              set: (bb, cb) => {
                bb._roughness = cb
              }
            },
            metadata: cb
          }, HW, fW), (0, kb.j)(null, null, Fc, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: bb => "indexOfRefraction" in bb,
              get: bb => bb.indexOfRefraction,
              set: (bb, cb) => {
                bb.indexOfRefraction = cb
              }
            },
            metadata: cb
          }, nW, mW), (0, kb.j)(null, null, xc, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: bb => "invertRefractionY" in bb,
              get: bb => bb.invertRefractionY,
              set: (bb, cb) => {
                bb.invertRefractionY = cb
              }
            },
            metadata: cb
          }, lW, QW), (0, kb.j)(null, null, jc, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: bb => "alphaCutOff" in bb,
              get: bb => bb.alphaCutOff,
              set: (bb, cb) => {
                bb.alphaCutOff = cb
              }
            },
            metadata: cb
          }, eW, CW), (0, kb.j)(null, null, pc, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useLightmapAsShadowmap" in bb,
              get: bb => bb._useLightmapAsShadowmap,
              set: (bb, cb) => {
                bb._useLightmapAsShadowmap = cb
              }
            },
            metadata: cb
          }, NW, VW), (0, kb.j)(null, null, cs, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_diffuseFresnelParameters" in bb,
              get: bb => bb._diffuseFresnelParameters,
              set: (bb, cb) => {
                bb._diffuseFresnelParameters = cb
              }
            },
            metadata: cb
          }, YW, hW), (0, kb.j)(null, null, ks, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_opacityFresnelParameters" in bb,
              get: bb => bb._opacityFresnelParameters,
              set: (bb, cb) => {
                bb._opacityFresnelParameters = cb
              }
            },
            metadata: cb
          }, BW, tW), (0, kb.j)(null, null, as, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_reflectionFresnelParameters" in bb,
              get: bb => bb._reflectionFresnelParameters,
              set: (bb, cb) => {
                bb._reflectionFresnelParameters = cb
              }
            },
            metadata: cb
          }, DW, EW), (0, kb.j)(null, null, Us, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_refractionFresnelParameters" in bb,
              get: bb => bb._refractionFresnelParameters,
              set: (bb, cb) => {
                bb._refractionFresnelParameters = cb
              }
            },
            metadata: cb
          }, GW, KW), (0, kb.j)(null, null, Hs, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: bb => "_emissiveFresnelParameters" in bb,
              get: bb => bb._emissiveFresnelParameters,
              set: (bb, cb) => {
                bb._emissiveFresnelParameters = cb
              }
            },
            metadata: cb
          }, qW, dW), (0, kb.j)(null, null, Ms, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useReflectionFresnelFromSpecular" in bb,
              get: bb => bb._useReflectionFresnelFromSpecular,
              set: (bb, cb) => {
                bb._useReflectionFresnelFromSpecular = cb
              }
            },
            metadata: cb
          }, rW, oW), (0, kb.j)(null, null, ns, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: bb => "_useGlossinessFromSpecularMapAlpha" in bb,
              get: bb => bb._useGlossinessFromSpecularMapAlpha,
              set: (bb, cb) => {
                bb._useGlossinessFromSpecularMapAlpha = cb
              }
            },
            metadata: cb
          }, vW, FW), (0, kb.j)(null, null, ls, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: bb => "_maxSimultaneousLights" in bb,
              get: bb => bb._maxSimultaneousLights,
              set: (bb, cb) => {
                bb._maxSimultaneousLights = cb
              }
            },
            metadata: cb
          }, pW, ba), (0, kb.j)(null, null, es, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: bb => "_invertNormalMapX" in bb,
              get: bb => bb._invertNormalMapX,
              set: (bb, cb) => {
                bb._invertNormalMapX = cb
              }
            },
            metadata: cb
          }, ka, Wa), (0, kb.j)(null, null, Ns, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: bb => "_invertNormalMapY" in bb,
              get: bb => bb._invertNormalMapY,
              set: (bb, cb) => {
                bb._invertNormalMapY = cb
              }
            },
            metadata: cb
          }, Ua, Ia), (0, kb.j)(null, null, Ls, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: bb => "_twoSidedLighting" in bb,
              get: bb => bb._twoSidedLighting,
              set: (bb, cb) => {
                bb._twoSidedLighting = cb
              }
            },
            metadata: cb
          }, Ma, Xa), (0, kb.j)(null, null, Ys, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: bb => "_applyDecalMapAfterDetailMap" in bb,
              get: bb => bb._applyDecalMapAfterDetailMap,
              set: (bb, cb) => {
                bb._applyDecalMapAfterDetailMap = cb
              }
            },
            metadata: cb
          }, la, Qa), cb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: cb
          })
        })(), bb.ForceGLSL = !1, bb._ShaderLoader = new ub.d((() => [Promise.all([sb.e(307), sb.e(306)]).then((() => sb(41275))), Promise.all([sb.e(312), sb.e(308), sb.e(321), sb.e(311)]).then((() => sb(41456)))]), (() => [Promise.all([sb.e(328), sb.e(323)]).then((() => sb(41591))), Promise.all([sb.e(329), sb.e(339), sb.e(325)]).then((() => sb(41784)))])), bb
      })(),
      Ob = !1;

    function Gb() {
      Ob || (Ob = !0, (0, Mb.h)(), (0, Bb.h)("BABYLON.StandardMaterial", ib), Tb.c.DefaultMaterialFactory = bb => new ib("default material", bb))
    }
    Object.getOwnPropertyDescriptor(ib.prototype, "decalMap") || Object.defineProperty(ib.prototype, "decalMap", (0, tb.d)("StandardMaterial", "decalMap"))
  },
  39805: (bb, cb, sb) => {
    function kb(bb) {
      return class extends bb {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    sb.d(cb, {
      c: () => kb
    })
  },
  39794: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb
    });
    class kb {
      constructor(bb, cb) {
        this._webGL = {
          load: bb,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: cb,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(bb) {
        const cb = 1 === bb ? this._webGPU : this._webGL;
        return cb.loaded ? void 0 : async () => {
          await this._loadAsync(cb)
        }
      }
      async _loadAsync(bb) {
        if (bb.loaded) return;
        let cb = bb.loadPromise;
        const sb = null === cb;
        sb && (cb = Promise.all(bb.load()), bb.loadPromise = cb);
        let kb = !1;
        try {
          await cb, kb = !0
        } finally {
          sb && this._completeLoad(bb, kb)
        }
      }
      _completeLoad(bb, cb) {
        bb.loaded = cb, bb.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);