export const id = 253;
export const ids = [253];
export const modules = {
  39705: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv
    });
    var hv = Pv(39303);

    function Sv(vv) {
      return class extends vv {
        constructor() {
          super(...arguments);
          const vv = new.target;
          if (!vv[Symbol.metadata]) {
            const zv = Object.getPrototypeOf(vv)?.[Symbol.metadata];
            vv[Symbol.metadata] = zv ? Object.create(zv) : {}
          }
          const zv = (0, hv.d)(vv[Symbol.metadata]);
          zv._imageProcessingConfiguration || (zv._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(vv) {
          this._attachImageProcessingConfiguration(vv), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(vv) {
          vv !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !vv && this.rD ? this._imageProcessingConfiguration = this.rD().imageProcessingConfiguration : vv && (this._imageProcessingConfiguration = vv), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(vv) {
          this.imageProcessingConfiguration.colorCurvesEnabled = vv
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(vv) {
          this.imageProcessingConfiguration.colorGradingEnabled = vv
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(vv) {
          this._imageProcessingConfiguration.toneMappingEnabled = vv
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(vv) {
          this._imageProcessingConfiguration.exposure = vv
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(vv) {
          this._imageProcessingConfiguration.contrast = vv
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(vv) {
          this._imageProcessingConfiguration.colorGradingTexture = vv
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(vv) {
          this._imageProcessingConfiguration.colorCurves = vv
        }
      }
    }
  },
  39580: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev,
      f: () => Sv
    });
    var hv = Pv(39588);

    function Sv(vv) {
      return class extends vv {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class ev extends hv.c {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  39665: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Tv
    });
    var hv = Pv(39295),
      Sv = Pv(39593),
      ev = Pv(39300),
      gv = Pv(39644),
      pv = Pv(39588),
      dv = Pv(39670),
      Nv = Pv(39629);
    class lv extends pv.c {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let Tv = (() => {
      var vv, zv, Pv, pv;
      let Tv, Wv, wv, av, sv, Cv, iv = dv.d,
        cv = [],
        Gv = [],
        mv = [],
        jv = [],
        fv = [],
        Fv = [],
        Yv = [],
        nv = [],
        Ov = [],
        Dv = [],
        Kv = [],
        Vv = [];
      return vv = class extends iv {
        get texture() {
          return (0, hv.c)(this, zv, "f")
        }
        set texture(vv) {
          (0, hv.d)(this, zv, vv, "f")
        }
        get normalBlendMethod() {
          return (0, hv.c)(this, Pv, "f")
        }
        set normalBlendMethod(vv) {
          (0, hv.d)(this, Pv, vv, "f")
        }
        get isEnabled() {
          return (0, hv.c)(this, pv, "f")
        }
        set isEnabled(vv) {
          (0, hv.d)(this, pv, vv, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(vv) {
          let ev = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(vv, "DetailMap", 140, new lv, ev), this._texture = null, zv.set(this, (0, hv.f)(this, cv, void 0)), this.diffuseBlendLevel = ((0, hv.f)(this, Gv), (0, hv.f)(this, mv, 1)), this.roughnessBlendLevel = ((0, hv.f)(this, jv), (0, hv.f)(this, fv, 1)), this.bumpLevel = ((0, hv.f)(this, Fv), (0, hv.f)(this, Yv, 1)), this._normalBlendMethod = ((0, hv.f)(this, nv), Sv.b.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), Pv.set(this, (0, hv.f)(this, Ov, void 0)), this._isEnabled = ((0, hv.f)(this, Dv), !1), pv.set(this, (0, hv.f)(this, Kv, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, hv.f)(this, Vv), this._internalMarkAllSubMeshesAsTexturesDirty = vv._dirtyCallbacks[1]
        }
        isReadyForSubMesh(vv, zv, Pv) {
          return !this._isEnabled || !(vv._areTexturesDirty && zv.texturesEnabled && Pv.getCaps().standardDerivatives && this._texture && gv.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(vv, zv) {
          if (this._isEnabled) {
            vv.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const Pv = zv.ma();
            vv._areTexturesDirty && (Pv.getCaps().standardDerivatives && this._texture && gv.e.DetailTextureEnabled && this._isEnabled ? ((0, Nv._)(this._texture, vv, "DETAIL"), vv.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : vv.DETAIL = !1)
          } else vv.DETAIL = !1
        }
        bindForSubMesh(vv, zv) {
          if (!this._isEnabled) return;
          const Pv = this._material.isFrozen;
          vv.useUbo && Pv && vv.isSync || this._texture && gv.e.DetailTextureEnabled && (vv.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, Nv.A)(this._texture, vv, "detail")), zv.texturesEnabled && this._texture && gv.e.DetailTextureEnabled && vv.setTexture("detailSampler", this._texture)
        }
        hasTexture(vv) {
          return this._texture === vv
        }
        getActiveTextures(vv) {
          this._texture && vv.push(this._texture)
        }
        getAnimatables(vv) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && vv.push(this._texture)
        }
        dispose(vv) {
          vv && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(vv) {
          vv.push("detailSampler")
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
      }, zv = new WeakMap, Pv = new WeakMap, pv = new WeakMap, (() => {
        const zv = "function" === typeof Symbol && Symbol.metadata ? Object.create(iv[Symbol.metadata] ?? null) : void 0;
        Tv = [(0, ev.E)("detailTexture"), (0, ev.e)("_markAllSubMeshesAsTexturesDirty")], Wv = [(0, ev.L)()], wv = [(0, ev.L)()], av = [(0, ev.L)()], sv = [(0, ev.L)(), (0, ev.e)("_markAllSubMeshesAsTexturesDirty")], Cv = [(0, ev.L)(), (0, ev.e)("_markAllSubMeshesAsTexturesDirty")], (0, hv.e)(vv, null, Tv, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: vv => "texture" in vv,
            get: vv => vv.texture,
            set: (vv, zv) => {
              vv.texture = zv
            }
          },
          metadata: zv
        }, cv, Gv), (0, hv.e)(vv, null, sv, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: vv => "normalBlendMethod" in vv,
            get: vv => vv.normalBlendMethod,
            set: (vv, zv) => {
              vv.normalBlendMethod = zv
            }
          },
          metadata: zv
        }, Ov, Dv), (0, hv.e)(vv, null, Cv, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: vv => "isEnabled" in vv,
            get: vv => vv.isEnabled,
            set: (vv, zv) => {
              vv.isEnabled = zv
            }
          },
          metadata: zv
        }, Kv, Vv), (0, hv.e)(null, null, Wv, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: vv => "diffuseBlendLevel" in vv,
            get: vv => vv.diffuseBlendLevel,
            set: (vv, zv) => {
              vv.diffuseBlendLevel = zv
            }
          },
          metadata: zv
        }, mv, jv), (0, hv.e)(null, null, wv, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: vv => "roughnessBlendLevel" in vv,
            get: vv => vv.roughnessBlendLevel,
            set: (vv, zv) => {
              vv.roughnessBlendLevel = zv
            }
          },
          metadata: zv
        }, fv, Fv), (0, hv.e)(null, null, av, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: vv => "bumpLevel" in vv,
            get: vv => vv.bumpLevel,
            set: (vv, zv) => {
              vv.bumpLevel = zv
            }
          },
          metadata: zv
        }, Yv, nv), zv && Object.defineProperty(vv, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zv
        })
      })(), vv
    })()
  },
  39588: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv
    });
    class hv {
      constructor(vv) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = vv, vv)
          for (const zv in vv) Object.prototype.hasOwnProperty.call(vv, zv) && this._setDefaultValue(zv)
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
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || vv, this._isDirty = !0
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
        for (const vv of Object.keys(this)) "_" !== vv[0] && this._keys.push(vv);
        if (this._externalProperties)
          for (const vv in this._externalProperties) - 1 === this._keys.indexOf(vv) && this._keys.push(vv)
      }
      isEqual(vv) {
        if (this._keys.length !== vv._keys.length) return !1;
        for (let zv = 0; zv < this._keys.length; zv++) {
          const Pv = this._keys[zv];
          if (this[Pv] !== vv[Pv]) return !1
        }
        return !0
      }
      cloneTo(vv) {
        this._keys.length !== vv._keys.length && (vv._keys = this._keys.slice(0));
        for (let zv = 0; zv < this._keys.length; zv++) {
          const Pv = this._keys[zv];
          vv[Pv] = this[Pv]
        }
      }
      reset() {
        for (const vv of this._keys) this._setDefaultValue(vv)
      }
      _setDefaultValue(vv) {
        const zv = this._externalProperties?.[vv]?.type ?? typeof this[vv],
          Pv = this._externalProperties?.[vv]?.default;
        switch (zv) {
          case "number":
            this[vv] = Pv ?? 0;
            break;
          case "string":
            this[vv] = Pv ?? "";
            break;
          default:
            this[vv] = Pv ?? !1
        }
      }
      toString() {
        let vv = "";
        for (let zv = 0; zv < this._keys.length; zv++) {
          const Pv = this._keys[zv],
            hv = this[Pv];
          switch (typeof hv) {
            case "number":
            case "string":
              vv += "#define " + Pv + " " + hv + "\n";
              break;
            default:
              hv && (vv += "#define " + Pv + "\n")
          }
        }
        return vv
      }
    }
  },
  39686: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      f: () => gv,
      g: () => ev
    });
    var hv, Sv = Pv(36594);

    function ev(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const hv = zv(vv);
      if (!Number.isInteger(hv) || hv < 0 || hv > Pv) throw new Error(`Invalid geometry object ID ${hv} for mesh "${vv.name}". Object IDs must be integers between 0 and 0x${Pv.toString(16).toUpperCase()}.`);
      return hv
    }

    function gv(vv, zv) {
      const Pv = zv(vv);
      if (!Number.isInteger(Pv) || Pv < 0 || Pv > 255 || 0 !== Pv && 0 === (63 & Pv)) throw new Error(`Invalid geometry mesh-blending tag ${Pv} for mesh "${vv.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return Pv
    }! function(vv) {
      vv[vv.Zero = 0] = "Zero", vv[vv.One = 1] = "One", vv[vv.MaxViewZ = 2] = "MaxViewZ", vv[vv.NoClear = 3] = "NoClear"
    }(hv || (hv = {}));
    class pv {
      static CreateConfiguration(vv) {
        return pv._Configurations[vv] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: Sv.c.Zero(),
          currentViewProjection: Sv.c.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, pv._Configurations[vv]
      }
      static DeleteConfiguration(vv) {
        delete pv._Configurations[vv]
      }
      static GetConfiguration(vv) {
        return pv._Configurations[vv]
      }
      static _PrepareConfiguration(vv, zv, Pv) {
        const hv = pv._Configurations[vv];
        hv._attachments = zv, hv._colorAttachments = Pv, hv._mrtCount = zv.length;
        let Sv = "#define PREPASS\n";
        for (const ev of pv.GeometryTextureDescriptions) {
          const vv = hv.defines[ev.defineIndex];
          void 0 !== vv && (Sv += `#define ${ev.define}\n#define ${ev.defineIndex} ${vv}\n`)
        }
        hv.objectIdIsRedFormat && (Sv += "#define PREPASS_OBJECT_ID_R8\n"), hv._defines = Sv + `#define SCENE_MRT_COUNT ${zv.length}\n`
      }
      static _PrepareStringDefines(vv, zv) {
        const Pv = pv._Configurations[vv];
        return !!Pv?._defines && (zv.push(Pv._defines), !0)
      }
      static _BindAttachmentsForEffect(vv, zv) {
        const Pv = pv._Configurations[vv.currentRenderPassId];
        return !Pv?._attachments || (vv.bindAttachments(zv._multiTarget ? Pv._attachments : Pv._colorAttachments), zv._multiTarget || void 0 !== Pv.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(vv) {
        const zv = pv._Configurations[vv.currentRenderPassId];
        zv?._colorAttachments && vv.bindAttachments(zv._colorAttachments)
      }
      static _BindColorAttachments(vv) {
        const zv = pv._Configurations[vv.currentRenderPassId];
        return !zv?._colorAttachments || (vv.bindAttachments(zv._colorAttachments), void 0 !== zv.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(vv) {
        const zv = pv._Configurations[vv.currentRenderPassId];
        return !zv?._colorAttachments || void 0 !== zv.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(vv, zv) {
        const Pv = pv._Configurations[vv.currentRenderPassId];
        if (!Pv) return;
        const hv = vv.getAlphaMode(),
          Sv = void 0 === Pv.defines.PREPASS_COLOR_INDEX || 2 === hv || 1 === hv || 17 === hv;
        zv.setFloat("geometryZeroAlphaDiscard", Sv ? 1 : 0)
      }
      static AddUniformsAndSamplers(vv, zv) {
        vv.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(vv, zv) {
        for (const Pv of zv)
          if (Pv.sF)
            for (const zv of Pv.sF) zv._removeDrawWrapper(vv)
      }
      static PrepareDefines(vv, zv, Pv) {
        if (!Pv._arePrePassDirty) return;
        const hv = pv._Configurations[vv];
        if (!hv) return;
        Pv.PREPASS = !0;
        let Sv = 0;
        for (let ev = 0; ev < pv.GeometryTextureDescriptions.length; ev++) {
          const vv = pv.GeometryTextureDescriptions[ev],
            zv = vv.define,
            gv = vv.defineIndex,
            dv = hv.defines[gv];
          void 0 !== dv ? (Pv[zv] = !0, Pv[gv] = dv, Sv++) : (Pv[zv] = !1, delete Pv[gv])
        }
        Pv.PREPASS_OBJECT_ID_R8 = hv.objectIdIsRedFormat, Pv.SCENE_MRT_COUNT = hv._mrtCount ?? Sv, Pv.BONES_VELOCITY_ENABLED = zv.useBones && zv.computeBonesUsingShaders && zv.skeleton && !zv.skeleton.isUsingTextureForMatrices && -1 === hv.excludedSkinnedMesh.indexOf(zv)
      }
      static Bind(vv, zv, Pv, hv, Sv) {
        const dv = pv._Configurations[vv];
        if (!dv) return;
        const Nv = Pv.rD(),
          lv = Nv.ma();
        if (dv.reverseCulling && lv.setStateCullFaceType(Nv._mirroredCameraPosition ? Sv.cullBackFaces : !Sv.cullBackFaces), void 0 !== dv.defines.PREPASS_OBJECT_ID_INDEX) {
          const vv = dv.objectIdIsRedFormat ? 255 : 16777215;
          let hv = Pv.uniqueId;
          if (dv.objectIdProvider) hv = ev(Pv, dv.objectIdProvider, vv);
          else if (hv > vv) throw new Error(`Invalid geometry object ID ${hv} for mesh "${Pv.name}". Object IDs must be integers between 0 and 0x${vv.toString(16).toUpperCase()}.`);
          zv.setFloat("objectId", hv)
        }
        if (void 0 !== dv.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const vv = dv.meshBlendTagProvider ? gv(Pv, dv.meshBlendTagProvider) : Pv.meshBlendingTag;
          zv.setInt("meshBlendTag", vv)
        }
        if (void 0 !== dv.defines.PREPASS_VELOCITY_INDEX || void 0 !== dv.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const vv = dv._currentWorldMatrices ?? (dv._currentWorldMatrices = {}),
            Sv = dv._worldMatrixFrameIds ?? (dv._worldMatrixFrameIds = {});
          if (vv[Pv.uniqueId] || (vv[Pv.uniqueId] = hv.clone(), dv.previousWorldMatrices[Pv.uniqueId] = hv.clone()), Sv[Pv.uniqueId] !== lv.frameId && (dv.previousWorldMatrices[Pv.uniqueId].Vzv(vv[Pv.uniqueId]), Sv[Pv.uniqueId] = lv.frameId), vv[Pv.uniqueId].Vzv(hv), -1 === dv.lastUpdateFrameId ? (dv.lastUpdateFrameId = lv.frameId, dv.previousViewProjection.Vzv(Nv.getTransformMatrix()), dv.currentViewProjection.Vzv(Nv.getTransformMatrix())) : dv.currentViewProjection.updateFlag !== Nv.getTransformMatrix().updateFlag ? (dv.lastUpdateFrameId = lv.frameId, dv.previousViewProjection.Vzv(dv.currentViewProjection), dv.currentViewProjection.Vzv(Nv.getTransformMatrix())) : dv.lastUpdateFrameId !== lv.frameId && (dv.lastUpdateFrameId = lv.frameId, dv.previousViewProjection.Vzv(dv.currentViewProjection)), zv.setMatrix("previousWorld", dv.previousWorldMatrices[Pv.uniqueId]), zv.setMatrix("previousViewProjection", dv.previousViewProjection), Pv.useBones && Pv.computeBonesUsingShaders && Pv.skeleton) {
            const vv = Pv.skeleton;
            if (!vv.isUsingTextureForMatrices || -1 === zv.getUniformIndex("boneTextureInfo")) {
              const hv = vv.getTransformMatrices(Pv);
              hv && (dv.previousBones[Pv.uniqueId] || (dv.previousBones[Pv.uniqueId] = hv.slice()), zv.setMatrices("mPreviousBones", dv.previousBones[Pv.uniqueId]), dv.previousBones[Pv.uniqueId].set(hv))
            }
          }
        }
      }
    }
    pv.GeometryTextureDescriptions = [{
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
    }], pv._Configurations = {}
  },
  39670: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Wv,
      g: () => av
    });
    var hv = Pv(39295),
      Sv = Pv(39300),
      ev = Pv(39196),
      gv = Pv(39162);
    const pv = new RegExp("^([gimus]+)!");
    class dv {
      constructor(vv) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = vv, this._scene = vv.rD(), this._engine = this._scene.ma()
      }
      _addPlugin(vv) {
        for (let hv = 0; hv < this._plugins.length; ++hv)
          if (this._plugins[hv].name === vv.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !vv.isCompatible(this._material.shaderLanguage)) throw `The plugin "${vv.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const zv = vv.getClassName();
        dv._MaterialPluginClassToMainDefine[zv] || (dv._MaterialPluginClassToMainDefine[zv] = "MATERIALPLUGIN_" + ++dv._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (vv, zv) => this._handlePluginEvent(vv, zv), this._plugins.push(vv), this._plugins.sort(((vv, zv) => vv.priority - zv.priority)), this._codeInjectionPoints = {};
        const Pv = {};
        Pv[dv._MaterialPluginClassToMainDefine[zv]] = {
          type: "boolean",
          default: !0
        };
        for (const hv of this._plugins) hv.collectDefines(Pv), this._collectPointNames("vertex", hv.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", hv.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = Pv, !0
      }
      _activatePlugin(vv) {
        -1 === this._activePlugins.indexOf(vv) && (this._activePlugins.push(vv), this._activePlugins.sort(((vv, zv) => vv.priority - zv.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), vv.registerForExtraEvents && (this._activePluginsForExtraEvents.push(vv), this._activePluginsForExtraEvents.sort(((vv, zv) => vv.priority - zv.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(vv) {
        for (let zv = 0; zv < this._plugins.length; ++zv)
          if (this._plugins[zv].name === vv) return this._plugins[zv];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(vv) {
        let zv = !0;
        for (const Pv of this._activePlugins) zv = zv && Pv.isReadyForSubMesh(vv.defines, this._scene, this._engine, vv.subMesh);
        vv.isReadyForSubMesh = zv
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(vv) {
        for (const zv of this._activePlugins) zv.prepareDefinesBeforeAttributes(vv.defines, this._scene, vv.mesh)
      }
      _handlePluginEventPrepareDefines(vv) {
        for (const zv of this._activePlugins) zv.prepareDefines(vv.defines, this._scene, vv.mesh)
      }
      _handlePluginEventHardBindForSubMesh(vv) {
        for (const zv of this._activePluginsForExtraEvents) zv.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, vv.subMesh)
      }
      _handlePluginEventBindForSubMesh(vv) {
        for (const zv of this._activePlugins) zv.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, vv.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(vv) {
        let zv = !1;
        for (const Pv of this._activePluginsForExtraEvents)
          if (zv = Pv.hasRenderTargetTextures(), zv) break;
        vv.hasRenderTargetTextures = zv
      }
      _handlePluginEventFillRenderTargetTextures(vv) {
        for (const zv of this._activePluginsForExtraEvents) zv.fillRenderTargetTextures(vv.renderTargets)
      }
      _handlePluginEvent(vv, zv) {
        switch (vv) {
          case 512: {
            const vv = zv;
            for (const zv of this._activePlugins) zv.getActiveTextures(vv.activeTextures);
            break
          }
          case 256: {
            const vv = zv;
            for (const zv of this._activePlugins) zv.getAnimatables(vv.animatables);
            break
          }
          case 1024: {
            const vv = zv;
            let Pv = !1;
            for (const zv of this._activePlugins)
              if (Pv = zv.hasTexture(vv.texture), Pv) break;
            vv.hasTexture = Pv;
            break
          }
          case 2: {
            const vv = zv;
            for (const zv of this._plugins) zv.dispose(vv.forceDisposeTextures);
            break
          }
          case 4:
            zv.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const vv = zv;
            for (const zv of this._activePlugins) vv.fallbackRank = zv.addFallbacks(vv.defines, vv.fallbacks, vv.fallbackRank), zv.getAttributes(vv.attributes, this._scene, vv.mesh);
            this._uniformList.length > 0 && vv.uniforms.push(...this._uniformList), this._samplerList.length > 0 && vv.samplers.push(...this._samplerList), this._uboList.length > 0 && vv.uniformBuffersNames.push(...this._uboList), vv.customCode = this._injectCustomCode(vv, vv.customCode);
            break
          }
          case 8: {
            const vv = zv;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const Pv = 1 === this._material.shaderLanguage;
            for (const zv of this._plugins) {
              const hv = zv.getUniforms(this._material.shaderLanguage);
              if (hv) {
                if (hv.ubo)
                  for (const zv of hv.ubo) {
                    if (zv.size && zv.type) {
                      const hv = zv.arraySize ?? 0;
                      if (vv.ubo.addUniform(zv.name, zv.size, hv), Pv) {
                        let vv;
                        switch (zv.type) {
                          case "mat4":
                            vv = "mat4x4f";
                            break;
                          case "float":
                            vv = "f32";
                            break;
                          default:
                            vv = `${zv.type}f`
                        }
                        this._uboDeclaration += hv > 0 ? `uniform ${zv.name}: array<${vv}, ${hv}>;\n` : `uniform ${zv.name}: ${vv};\n`
                      } else this._uboDeclaration += `${zv.type} ${zv.name}${hv>0?`[${hv}]`:""};\n`
                    }
                    this._uniformList.push(zv.name)
                  }
                hv.vertex && (this._vertexDeclaration += hv.vertex + "\n"), hv.fragment && (this._fragmentDeclaration += hv.fragment + "\n"), hv.externalUniforms && this._uniformList.push(...hv.externalUniforms)
              }
              zv.getSamplers(this._samplerList), zv.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(vv, zv) {
        if (zv)
          for (const Pv in zv) this._codeInjectionPoints[vv] || (this._codeInjectionPoints[vv] = {}), this._codeInjectionPoints[vv][Pv] = !0
      }
      _injectCustomCode(vv, zv) {
        return (Pv, hv) => {
          zv && (hv = zv(Pv, hv)), this._uboDeclaration && (hv = hv.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (hv = hv.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (hv = hv.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const Sv = this._codeInjectionPoints?.[Pv];
          if (!Sv) return hv;
          let dv = null;
          for (let zv in Sv) {
            let Sv = "";
            for (const hv of this._activePlugins) {
              const pv = this._material.shaderLanguage;
              let Nv = hv.getCustomCode(Pv, pv)?.[zv];
              Nv && (hv.resolveIncludes && (null === dv && (dv = {
                defines: [],
                indexParameters: vv.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: gv.d.GetShadersRepository(pv),
                includesShadersStore: gv.d.GetIncludesShadersStore(pv),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                SPv: this._engine.SPv,
                processCodeAfterIncludes: void 0
              }), dv.isFragment = "fragment" === Pv, (0, ev.g)(Nv, dv, (vv => Nv = vv))), Sv += Nv + "\n")
            }
            if (Sv.length > 0)
              if ("!" === zv.charAt(0)) {
                zv = zv.substring(1);
                let vv = "g";
                if ("!" === zv.charAt(0)) vv = "", zv = zv.substring(1);
                else {
                  const Pv = pv.exec(zv);
                  Pv && Pv.length >= 2 && (vv = Pv[1], zv = zv.substring(vv.length + 1))
                }
                vv.indexOf("g") < 0 && (vv += "g");
                const Pv = new RegExp(zv, vv);
                let ev = Pv.exec(hv);
                for (; null !== ev;) {
                  const {
                    index: vv
                  } = ev, zv = Nv(Sv, ev);
                  hv = hv.substring(0, vv) + zv + hv.substring(vv + ev[0].length), Pv.lastIndex = vv + zv.length, ev = Pv.exec(hv)
                }
              } else {
                const vv = "#define " + zv;
                hv = hv.replace(vv, "\n" + Sv + "\n" + vv)
              }
          }
          return hv
        }
      }
    }
    dv._MaterialPluginClassToMainDefine = {}, dv._MaterialPluginCounter = 0;

    function Nv(vv, zv) {
      return vv.replace(/\$(\d+)/g, ((vv, Pv) => {
        const hv = Number(Pv);
        return hv < zv.length ? zv[hv] : ""
      }))
    }
    var lv = Pv(39312),
      Tv = Pv(36631);
    let Wv = (() => {
        var vv;
        let zv, Pv, ev, gv, pv = [],
          Nv = [],
          Tv = [],
          Wv = [],
          wv = [],
          av = [],
          sv = [],
          Cv = [];
        return vv = class {
          isCompatible(vv) {
            return 0 === vv
          }
          _enable(vv) {
            vv && this._pluginManager._activatePlugin(this)
          }
          constructor(vv, zv, Pv, Sv) {
            let ev = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              gv = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              lv = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, hv.f)(this, pv, void 0), this.priority = ((0, hv.f)(this, Nv), (0, hv.f)(this, Tv, 500)), this.resolveIncludes = ((0, hv.f)(this, Wv), (0, hv.f)(this, wv, !1)), this.registerForExtraEvents = ((0, hv.f)(this, av), (0, hv.f)(this, sv, !1)), this.doNotSerialize = ((0, hv.f)(this, Cv), !1), this._material = vv, this.name = zv, this.priority = Pv, this.resolveIncludes = lv, vv.pluginManager || (vv.pluginManager = new dv(vv), vv.uD.add((() => {
              vv.pluginManager = void 0
            }))), this._pluginDefineNames = Sv, this._pluginManager = vv.pluginManager, ev && this._pluginManager._addPlugin(this), gv && this._enable(!0), this.markAllDefinesAsDirty = vv._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(vv, zv, Pv, hv) {
            return !0
          }
          hardBindForSubMesh(vv, zv, Pv, hv) {}
          bindForSubMesh(vv, zv, Pv, hv) {}
          dispose(vv) {}
          getCustomCode(vv) {
            return null
          }
          collectDefines(vv) {
            if (this._pluginDefineNames)
              for (const zv of Object.keys(this._pluginDefineNames)) {
                if ("_" === zv[0]) continue;
                const Pv = typeof this._pluginDefineNames[zv];
                vv[zv] = {
                  type: "number" === Pv ? "number" : "string" === Pv ? "string" : "boolean" === Pv ? "boolean" : "object",
                  default: this._pluginDefineNames[zv]
                }
              }
          }
          prepareDefinesBeforeAttributes(vv, zv, Pv) {}
          prepareDefines(vv, zv, Pv) {}
          hasTexture(vv) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(vv) {}
          getActiveTextures(vv) {}
          getAnimatables(vv) {}
          addFallbacks(vv, zv, Pv) {
            return Pv
          }
          getSamplers(vv) {}
          getAttributes(vv, zv, Pv) {}
          getUniformBuffersNames(vv) {}
          getUniforms() {
            return {}
          }
          copyTo(vv) {
            lv.c.Clone((() => vv), this)
          }
          serialize() {
            return lv.c.Serialize(this)
          }
          parse(vv, zv, Pv) {
            lv.c.Parse((() => this), vv, zv, Pv)
          }
        }, (() => {
          const dv = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zv = [(0, Sv.L)()], Pv = [(0, Sv.L)()], ev = [(0, Sv.L)()], gv = [(0, Sv.L)()], (0, hv.e)(null, null, zv, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: vv => "name" in vv,
              get: vv => vv.name,
              set: (vv, zv) => {
                vv.name = zv
              }
            },
            metadata: dv
          }, pv, Nv), (0, hv.e)(null, null, Pv, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: vv => "priority" in vv,
              get: vv => vv.priority,
              set: (vv, zv) => {
                vv.priority = zv
              }
            },
            metadata: dv
          }, Tv, Wv), (0, hv.e)(null, null, ev, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: vv => "resolveIncludes" in vv,
              get: vv => vv.resolveIncludes,
              set: (vv, zv) => {
                vv.resolveIncludes = zv
              }
            },
            metadata: dv
          }, wv, av), (0, hv.e)(null, null, gv, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: vv => "registerForExtraEvents" in vv,
              get: vv => vv.registerForExtraEvents,
              set: (vv, zv) => {
                vv.registerForExtraEvents = zv
              }
            },
            metadata: dv
          }, sv, Cv), dv && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: dv
          })
        })(), vv
      })(),
      wv = !1;

    function av() {
      wv || (wv = !0, (0, Tv.c)("BABYLON.MaterialPluginBase", Wv))
    }
  },
  39571: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv
    });
    class hv {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(vv) {
        vv.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(vv) {}
      bindForSubMesh(vv, zv, Pv, hv, Sv) {
        if (zv.prePassRenderer && zv.prePassRenderer.enabled && zv.prePassRenderer.currentRTisSceneRT && (-1 !== zv.prePassRenderer.getIndex(2) || -1 !== zv.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[Pv.uniqueId] || (this.previousWorldMatrices[Pv.uniqueId] = hv.clone()), this.previousViewProjection || (this.previousViewProjection = zv.getTransformMatrix().clone(), this.currentViewProjection = zv.getTransformMatrix().clone());
          const Sv = zv.ma();
          this.currentViewProjection.updateFlag !== zv.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = Sv.frameId, this.previousViewProjection.Vzv(this.currentViewProjection), this.currentViewProjection.Vzv(zv.getTransformMatrix())) : this._lastUpdateFrameId !== Sv.frameId && (this._lastUpdateFrameId = Sv.frameId, this.previousViewProjection.Vzv(this.currentViewProjection)), vv.setMatrix("previousWorld", this.previousWorldMatrices[Pv.uniqueId]), vv.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[Pv.uniqueId] = hv.clone()
        }
      }
    }
  },
  39697: (vv, zv, Pv) => {
    function hv(vv) {
      return class extends vv {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    Pv.d(zv, {
      b: () => hv
    })
  },
  39560: (vv, zv, Pv) => {
    Pv.d(zv, {
      StandardMaterial: () => hv.i
    });
    var hv = Pv(39564);
    (0, hv.e)()
  },
  39564: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Iv,
      i: () => tv
    });
    var hv = Pv(39295),
      Sv = Pv(39300),
      ev = Pv(39413),
      gv = Pv(39395),
      pv = Pv(36751),
      dv = Pv(39441),
      Nv = Pv(39571),
      lv = Pv(39580),
      Tv = Pv(39420),
      Wv = Pv(39593),
      wv = Pv(39588),
      av = Pv(39647),
      sv = Pv(39644),
      Cv = Pv(39656),
      iv = Pv(39665),
      cv = Pv(39636),
      Gv = Pv(39676),
      mv = Pv(39629),
      jv = Pv(39312),
      fv = Pv(39682),
      Fv = Pv(39686),
      Yv = Pv(39694),
      nv = Pv(39697),
      Ov = Pv(39705),
      Dv = Pv(36631),
      Kv = Pv(39190);
    const Vv = {
      effect: null,
      subMesh: null
    };
    class Uv extends((0, nv.b)((0, Yv.b)(wv.c))) {}
    class Rv extends((0, lv.f)(Uv)) {
      constructor(vv) {
        super(vv), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class xv extends((0, Ov.d)(av.d)) {}
    let tv = (() => {
        var vv, zv, lv, wv, Yv, nv, Ov, Dv, Kv, Uv, tv, qv, Iv, Qv, Zv, Av, Lv, Hv, Mv, yv, Bv, Jv, Ev, ov, bv, rv, kv, Xv, uv, vz, zz, Pz, hz;
        let Sz, ez, gz, pz, dz, Nz, lz, Tz, Wz, wz, az, sz, Cz, iz, cz, Gz, mz, jz, fz, Fz, Yz, nz, Oz, Dz, Kz, Vz, Uz, Rz, xz, tz, qz, Iz, Qz, Zz, Az, Lz, Hz, Mz, yz, Bz, Jz, Ez, oz, bz, rz, kz, Xz, uz, vP, zP, PP, hP, SP, eP, gP, pP, dP, NP, lP, TP, WP, wP, aP, sP, CP, iP, cP, GP, mP, jP, fP, FP, YP, nP = xv,
          OP = [],
          DP = [],
          KP = [],
          VP = [],
          UP = [],
          RP = [],
          xP = [],
          tP = [],
          qP = [],
          IP = [],
          QP = [],
          ZP = [],
          AP = [],
          LP = [],
          HP = [],
          MP = [],
          yP = [],
          BP = [],
          JP = [],
          EP = [],
          oP = [],
          bP = [],
          rP = [],
          kP = [],
          XP = [],
          uP = [],
          vh = [],
          zh = [],
          Ph = [],
          hh = [],
          Sh = [],
          eh = [],
          gh = [],
          ph = [],
          dh = [],
          Nh = [],
          lh = [],
          Th = [],
          Wh = [],
          wh = [],
          ah = [],
          sh = [],
          Ch = [],
          ih = [],
          ch = [],
          Gh = [],
          mh = [],
          jh = [],
          fh = [],
          Fh = [],
          Yh = [],
          nh = [],
          Oh = [],
          Dh = [],
          Kh = [],
          Vh = [],
          Uh = [],
          Rh = [],
          xh = [],
          th = [],
          qh = [],
          Ih = [],
          Qh = [],
          Zh = [],
          Ah = [],
          Lh = [],
          Hh = [],
          Mh = [],
          yh = [],
          Bh = [],
          Jh = [],
          Eh = [],
          oh = [],
          bh = [],
          rh = [],
          kh = [],
          Xh = [],
          uh = [],
          vS = [],
          zS = [],
          PS = [],
          hS = [],
          SS = [],
          eS = [],
          gS = [],
          pS = [],
          dS = [],
          NS = [],
          lS = [],
          TS = [],
          WS = [],
          wS = [],
          aS = [],
          sS = [],
          CS = [],
          iS = [],
          cS = [],
          GS = [],
          mS = [],
          jS = [],
          fS = [],
          FS = [],
          YS = [],
          nS = [],
          OS = [],
          DS = [],
          KS = [],
          VS = [],
          US = [],
          RS = [],
          xS = [],
          tS = [],
          qS = [],
          IS = [],
          QS = [],
          ZS = [],
          AS = [],
          LS = [],
          HS = [],
          MS = [],
          yS = [],
          BS = [],
          JS = [],
          ES = [],
          oS = [],
          bS = [],
          rS = [],
          kS = [],
          XS = [],
          uS = [],
          ve = [],
          ze = [],
          Pe = [],
          he = [],
          Se = [],
          ee = [],
          ge = [],
          pe = [],
          de = [],
          Ne = [],
          le = [],
          Te = [],
          We = [],
          we = [],
          ae = [],
          se = [];
        return vv = class extends nP {
          get diffuseTexture() {
            return (0, hv.c)(this, zv, "f")
          }
          set diffuseTexture(vv) {
            (0, hv.d)(this, zv, vv, "f")
          }
          get ambientTexture() {
            return (0, hv.c)(this, lv, "f")
          }
          set ambientTexture(vv) {
            (0, hv.d)(this, lv, vv, "f")
          }
          get opacityTexture() {
            return (0, hv.c)(this, wv, "f")
          }
          set opacityTexture(vv) {
            (0, hv.d)(this, wv, vv, "f")
          }
          get reflectionTexture() {
            return (0, hv.c)(this, Yv, "f")
          }
          set reflectionTexture(vv) {
            (0, hv.d)(this, Yv, vv, "f")
          }
          get emissiveTexture() {
            return (0, hv.c)(this, nv, "f")
          }
          set emissiveTexture(vv) {
            (0, hv.d)(this, nv, vv, "f")
          }
          get specularTexture() {
            return (0, hv.c)(this, Ov, "f")
          }
          set specularTexture(vv) {
            (0, hv.d)(this, Ov, vv, "f")
          }
          get bumpTexture() {
            return (0, hv.c)(this, Dv, "f")
          }
          set bumpTexture(vv) {
            (0, hv.d)(this, Dv, vv, "f")
          }
          get lightmapTexture() {
            return (0, hv.c)(this, Kv, "f")
          }
          set lightmapTexture(vv) {
            (0, hv.d)(this, Kv, vv, "f")
          }
          get refractionTexture() {
            return (0, hv.c)(this, Uv, "f")
          }
          set refractionTexture(vv) {
            (0, hv.d)(this, Uv, vv, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, hv.c)(this, tv, "f")
          }
          set useAlphaFromDiffuseTexture(vv) {
            (0, hv.d)(this, tv, vv, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, hv.c)(this, qv, "f")
          }
          set useEmissiveAsIllumination(vv) {
            (0, hv.d)(this, qv, vv, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, hv.c)(this, Iv, "f")
          }
          set linkEmissiveWithDiffuse(vv) {
            (0, hv.d)(this, Iv, vv, "f")
          }
          get useSpecularOverAlpha() {
            return (0, hv.c)(this, Qv, "f")
          }
          set useSpecularOverAlpha(vv) {
            (0, hv.d)(this, Qv, vv, "f")
          }
          get useReflectionOverAlpha() {
            return (0, hv.c)(this, Zv, "f")
          }
          set useReflectionOverAlpha(vv) {
            (0, hv.d)(this, Zv, vv, "f")
          }
          get disableLighting() {
            return (0, hv.c)(this, Av, "f")
          }
          set disableLighting(vv) {
            (0, hv.d)(this, Av, vv, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, hv.c)(this, Lv, "f")
          }
          set useObjectSpaceNormalMap(vv) {
            (0, hv.d)(this, Lv, vv, "f")
          }
          get useParallax() {
            return (0, hv.c)(this, Hv, "f")
          }
          set useParallax(vv) {
            (0, hv.d)(this, Hv, vv, "f")
          }
          get useParallaxOcclusion() {
            return (0, hv.c)(this, Mv, "f")
          }
          set useParallaxOcclusion(vv) {
            (0, hv.d)(this, Mv, vv, "f")
          }
          get roughness() {
            return (0, hv.c)(this, yv, "f")
          }
          set roughness(vv) {
            (0, hv.d)(this, yv, vv, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, hv.c)(this, Bv, "f")
          }
          set useLightmapAsShadowmap(vv) {
            (0, hv.d)(this, Bv, vv, "f")
          }
          get diffuseFresnelParameters() {
            return (0, hv.c)(this, Jv, "f")
          }
          set diffuseFresnelParameters(vv) {
            (0, hv.d)(this, Jv, vv, "f")
          }
          get opacityFresnelParameters() {
            return (0, hv.c)(this, Ev, "f")
          }
          set opacityFresnelParameters(vv) {
            (0, hv.d)(this, Ev, vv, "f")
          }
          get reflectionFresnelParameters() {
            return (0, hv.c)(this, ov, "f")
          }
          set reflectionFresnelParameters(vv) {
            (0, hv.d)(this, ov, vv, "f")
          }
          get refractionFresnelParameters() {
            return (0, hv.c)(this, bv, "f")
          }
          set refractionFresnelParameters(vv) {
            (0, hv.d)(this, bv, vv, "f")
          }
          get emissiveFresnelParameters() {
            return (0, hv.c)(this, rv, "f")
          }
          set emissiveFresnelParameters(vv) {
            (0, hv.d)(this, rv, vv, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, hv.c)(this, kv, "f")
          }
          set useReflectionFresnelFromSpecular(vv) {
            (0, hv.d)(this, kv, vv, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, hv.c)(this, Xv, "f")
          }
          set useGlossinessFromSpecularMapAlpha(vv) {
            (0, hv.d)(this, Xv, vv, "f")
          }
          get maxSimultaneousLights() {
            return (0, hv.c)(this, uv, "f")
          }
          set maxSimultaneousLights(vv) {
            (0, hv.d)(this, uv, vv, "f")
          }
          get invertNormalMapX() {
            return (0, hv.c)(this, vz, "f")
          }
          set invertNormalMapX(vv) {
            (0, hv.d)(this, vz, vv, "f")
          }
          get invertNormalMapY() {
            return (0, hv.c)(this, zz, "f")
          }
          set invertNormalMapY(vv) {
            (0, hv.d)(this, zz, vv, "f")
          }
          get twoSidedLighting() {
            return (0, hv.c)(this, Pz, "f")
          }
          set twoSidedLighting(vv) {
            (0, hv.d)(this, Pz, vv, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, hv.c)(this, hz, "f")
          }
          set applyDecalMapAfterDetailMap(vv) {
            (0, hv.d)(this, hz, vv, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(Pv, Sv) {
            super(Pv, Sv, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || vv.ForceGLSL), this._diffuseTexture = (0, hv.f)(this, OP, null), zv.set(this, ((0, hv.f)(this, DP), (0, hv.f)(this, KP, void 0))), this._ambientTexture = ((0, hv.f)(this, VP), (0, hv.f)(this, UP, null)), lv.set(this, ((0, hv.f)(this, RP), (0, hv.f)(this, xP, void 0))), this._opacityTexture = ((0, hv.f)(this, tP), (0, hv.f)(this, qP, null)), wv.set(this, ((0, hv.f)(this, IP), (0, hv.f)(this, QP, void 0))), this._reflectionTexture = ((0, hv.f)(this, ZP), (0, hv.f)(this, AP, null)), Yv.set(this, ((0, hv.f)(this, LP), (0, hv.f)(this, HP, void 0))), this._emissiveTexture = ((0, hv.f)(this, MP), (0, hv.f)(this, yP, null)), nv.set(this, ((0, hv.f)(this, BP), (0, hv.f)(this, JP, void 0))), this._specularTexture = ((0, hv.f)(this, EP), (0, hv.f)(this, oP, null)), Ov.set(this, ((0, hv.f)(this, bP), (0, hv.f)(this, rP, void 0))), this._bumpTexture = ((0, hv.f)(this, kP), (0, hv.f)(this, XP, null)), Dv.set(this, ((0, hv.f)(this, uP), (0, hv.f)(this, vh, void 0))), this._lightmapTexture = ((0, hv.f)(this, zh), (0, hv.f)(this, Ph, null)), Kv.set(this, ((0, hv.f)(this, hh), (0, hv.f)(this, Sh, void 0))), this._refractionTexture = ((0, hv.f)(this, eh), (0, hv.f)(this, gh, null)), Uv.set(this, ((0, hv.f)(this, ph), (0, hv.f)(this, dh, void 0))), this.ambientColor = ((0, hv.f)(this, Nh), (0, hv.f)(this, lh, new pv.b(0, 0, 0))), this.diffuseColor = ((0, hv.f)(this, Th), (0, hv.f)(this, Wh, new pv.b(1, 1, 1))), this.specularColor = ((0, hv.f)(this, wh), (0, hv.f)(this, ah, new pv.b(1, 1, 1))), this.emissiveColor = ((0, hv.f)(this, sh), (0, hv.f)(this, Ch, new pv.b(0, 0, 0))), this.specularPower = ((0, hv.f)(this, ih), (0, hv.f)(this, ch, 64)), this._useAlphaFromDiffuseTexture = ((0, hv.f)(this, Gh), (0, hv.f)(this, mh, !1)), tv.set(this, ((0, hv.f)(this, jh), (0, hv.f)(this, fh, void 0))), this._useEmissiveAsIllumination = ((0, hv.f)(this, Fh), (0, hv.f)(this, Yh, !1)), qv.set(this, ((0, hv.f)(this, nh), (0, hv.f)(this, Oh, void 0))), this._linkEmissiveWithDiffuse = ((0, hv.f)(this, Dh), (0, hv.f)(this, Kh, !1)), Iv.set(this, ((0, hv.f)(this, Vh), (0, hv.f)(this, Uh, void 0))), this._useSpecularOverAlpha = ((0, hv.f)(this, Rh), (0, hv.f)(this, xh, !1)), Qv.set(this, ((0, hv.f)(this, th), (0, hv.f)(this, qh, void 0))), this._useReflectionOverAlpha = ((0, hv.f)(this, Ih), (0, hv.f)(this, Qh, !1)), Zv.set(this, ((0, hv.f)(this, Zh), (0, hv.f)(this, Ah, void 0))), this._disableLighting = ((0, hv.f)(this, Lh), (0, hv.f)(this, Hh, !1)), Av.set(this, ((0, hv.f)(this, Mh), (0, hv.f)(this, yh, void 0))), this._useObjectSpaceNormalMap = ((0, hv.f)(this, Bh), (0, hv.f)(this, Jh, !1)), Lv.set(this, ((0, hv.f)(this, Eh), (0, hv.f)(this, oh, void 0))), this._useParallax = ((0, hv.f)(this, bh), (0, hv.f)(this, rh, !1)), Hv.set(this, ((0, hv.f)(this, kh), (0, hv.f)(this, Xh, void 0))), this._useParallaxOcclusion = ((0, hv.f)(this, uh), (0, hv.f)(this, vS, !1)), Mv.set(this, ((0, hv.f)(this, zS), (0, hv.f)(this, PS, void 0))), this.parallaxScaleBias = ((0, hv.f)(this, hS), (0, hv.f)(this, SS, .05)), this._roughness = ((0, hv.f)(this, eS), (0, hv.f)(this, gS, 0)), yv.set(this, ((0, hv.f)(this, pS), (0, hv.f)(this, dS, void 0))), this.indexOfRefraction = ((0, hv.f)(this, NS), (0, hv.f)(this, lS, .98)), this.invertRefractionY = ((0, hv.f)(this, TS), (0, hv.f)(this, WS, !0)), this.alphaCutOff = ((0, hv.f)(this, wS), (0, hv.f)(this, aS, .4)), this._useLightmapAsShadowmap = ((0, hv.f)(this, sS), (0, hv.f)(this, CS, !1)), Bv.set(this, ((0, hv.f)(this, iS), (0, hv.f)(this, cS, void 0))), this._diffuseFresnelParameters = ((0, hv.f)(this, GS), (0, hv.f)(this, mS, void 0)), Jv.set(this, ((0, hv.f)(this, jS), (0, hv.f)(this, fS, void 0))), this._opacityFresnelParameters = ((0, hv.f)(this, FS), (0, hv.f)(this, YS, void 0)), Ev.set(this, ((0, hv.f)(this, nS), (0, hv.f)(this, OS, void 0))), this._reflectionFresnelParameters = ((0, hv.f)(this, DS), (0, hv.f)(this, KS, void 0)), ov.set(this, ((0, hv.f)(this, VS), (0, hv.f)(this, US, void 0))), this._refractionFresnelParameters = ((0, hv.f)(this, RS), (0, hv.f)(this, xS, void 0)), bv.set(this, ((0, hv.f)(this, tS), (0, hv.f)(this, qS, void 0))), this._emissiveFresnelParameters = ((0, hv.f)(this, IS), (0, hv.f)(this, QS, void 0)), rv.set(this, ((0, hv.f)(this, ZS), (0, hv.f)(this, AS, void 0))), this._useReflectionFresnelFromSpecular = ((0, hv.f)(this, LS), (0, hv.f)(this, HS, !1)), kv.set(this, ((0, hv.f)(this, MS), (0, hv.f)(this, yS, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, hv.f)(this, BS), (0, hv.f)(this, JS, !1)), Xv.set(this, ((0, hv.f)(this, ES), (0, hv.f)(this, oS, void 0))), this._maxSimultaneousLights = ((0, hv.f)(this, bS), (0, hv.f)(this, rS, 4)), uv.set(this, ((0, hv.f)(this, kS), (0, hv.f)(this, XS, void 0))), this._invertNormalMapX = ((0, hv.f)(this, uS), (0, hv.f)(this, ve, !1)), vz.set(this, ((0, hv.f)(this, ze), (0, hv.f)(this, Pe, void 0))), this._invertNormalMapY = ((0, hv.f)(this, he), (0, hv.f)(this, Se, !1)), zz.set(this, ((0, hv.f)(this, ee), (0, hv.f)(this, ge, void 0))), this._twoSidedLighting = ((0, hv.f)(this, pe), (0, hv.f)(this, de, !1)), Pz.set(this, ((0, hv.f)(this, Ne), (0, hv.f)(this, le, void 0))), this._applyDecalMapAfterDetailMap = ((0, hv.f)(this, Te), (0, hv.f)(this, We, !1)), hz.set(this, ((0, hv.f)(this, we), (0, hv.f)(this, ae, void 0))), this._vertexPullingMetadata = ((0, hv.f)(this, se), null), this._renderTargets = new ev.g(16), this._globalAmbientColor = new pv.b(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new iv.b(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new Nv.b, this.getRenderTargetTextures = () => (this._renderTargets.reset(), vv.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), vv.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(vv.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(vv.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === Wv.b.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== Wv.b.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(zv, Pv) {
            let hv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Sv = Pv._drawWrapper;
            if (Sv.effect && this.isFrozen && Sv._wasPreviouslyReady && Sv._wasPreviouslyUsingInstances === hv) return !0;
            Pv.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Pv.materialDefines = new Rv(this._eventInfo.defineNames));
            const ev = this.rD(),
              gv = Pv.materialDefines;
            if (this._isReadyForSubMesh(Pv)) return !0;
            const pv = ev.ma();
            if (gv._needNormals = (0, mv.W)(ev, zv, gv, !0, this._maxSimultaneousLights, this._disableLighting), !(0, mv.d)(ev, zv, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, mv.cb)(ev, gv);
            const lv = this.needAlphaBlendingForMesh(zv) && this.rD().useOrderIndependentTransparency;
            if ((0, mv.ib)(ev, gv, this.canRenderToMRT && !lv), (0, mv.eb)(ev, gv, lv), Fv.d.PrepareDefines(pv.currentRenderPassId, zv, gv), gv._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, gv._needUVs = !1;
              for (let vv = 1; vv <= 6; ++vv) gv["MAINUV" + vv] = !1;
              if (ev.texturesEnabled) {
                if (gv.DIFFUSEDIRECTUV = 0, gv.BUMPDIRECTUV = 0, gv.AMBIENTDIRECTUV = 0, gv.OPACITYDIRECTUV = 0, gv.EMISSIVEDIRECTUV = 0, gv.SPECULARDIRECTUV = 0, gv.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && vv.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, mv._)(this._diffuseTexture, gv, "DIFFUSE")
                } else gv.DIFFUSE = !1;
                if (this._ambientTexture && vv.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, mv._)(this._ambientTexture, gv, "AMBIENT")
                } else gv.AMBIENT = !1;
                if (this._opacityTexture && vv.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, mv._)(this._opacityTexture, gv, "OPACITY"), gv.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else gv.OPACITY = !1;
                if (this._reflectionTexture && vv.ReflectionTextureEnabled ? (gv.ROUGHNESS = this._roughness > 0, gv.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (gv.ROUGHNESS = !1, gv.REFLECTIONOVERALPHA = !1), !(0, mv.T)(ev, this._reflectionTexture, gv)) return !1;
                if (this._emissiveTexture && vv.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, mv._)(this._emissiveTexture, gv, "EMISSIVE")
                } else gv.EMISSIVE = !1;
                if (this._lightmapTexture && vv.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, mv._)(this._lightmapTexture, gv, "LIGHTMAP"), gv.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, gv.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else gv.LIGHTMAP = !1;
                if (this._specularTexture && vv.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, mv._)(this._specularTexture, gv, "SPECULAR"), gv.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else gv.SPECULAR = !1;
                if (ev.ma().getCaps().standardDerivatives && this._bumpTexture && vv.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, mv._)(this._bumpTexture, gv, "BUMP"), gv.PARALLAX = this._useParallax, gv.PARALLAX_RHS = ev.useRightHandedSystem, gv.PARALLAXOCCLUSION = this._useParallaxOcclusion, gv.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else gv.BUMP = !1, gv.PARALLAX = !1, gv.PARALLAX_RHS = !1, gv.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && vv.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  gv._needUVs = !0, gv.REFRACTION = !0, gv.REFRACTIONMAP_3D = this._refractionTexture.isCube, gv.RGBDREFRACTION = this._refractionTexture.isRGBD, gv.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else gv.REFRACTION = !1;
                gv.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else gv.DIFFUSE = !1, gv.AMBIENT = !1, gv.OPACITY = !1, gv.REFLECTION = !1, gv.EMISSIVE = !1, gv.LIGHTMAP = !1, gv.BUMP = !1, gv.REFRACTION = !1;
              gv.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), gv.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, gv.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, gv.SPECULAROVERALPHA = this._useSpecularOverAlpha, gv.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, gv.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, gv.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(zv), gv.TEXTURE_REPETITION_MODE = pv.version > 1 || pv.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = gv, this._eventInfo.subMesh = Pv, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (gv._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(gv), gv.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, gv.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (gv._areFresnelDirty && (vv.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (gv.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, gv.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, gv.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, gv.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, gv.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, gv.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, gv._needNormals = !0, gv.FRESNEL = !0) : gv.FRESNEL = !1), gv.AREALIGHTUSED || gv.CLUSTLIGHT_BATCH)
              for (let vv = 0; vv < zv.lightSources.length; vv++)
                if (!zv.lightSources[vv]._isReady()) return !1;
            (0, mv.$)(zv, ev, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(zv), gv, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Pv.getRenderingMesh(), this._isVertexOutputInvariant), (0, mv.S)(ev, pv, this, gv, hv, null, Pv.getRenderingMesh().hasThinInstances), this._eventInfo.defines = gv, this._eventInfo.mesh = zv, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, mv.P)(zv, gv, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let Wv = !1;
            if (gv.isDirty) {
              const hv = gv._areLightsDisposed;
              gv.markAsProcessed();
              const Sv = new Cv.e;
              gv.REFLECTION && Sv.addFallback(0, "REFLECTION"), gv.SPECULAR && Sv.addFallback(0, "SPECULAR"), gv.BUMP && Sv.addFallback(0, "BUMP"), gv.PARALLAX && Sv.addFallback(1, "PARALLAX"), gv.PARALLAX_RHS && Sv.addFallback(1, "PARALLAX_RHS"), gv.PARALLAXOCCLUSION && Sv.addFallback(0, "PARALLAXOCCLUSION"), gv.SPECULAROVERALPHA && Sv.addFallback(0, "SPECULAROVERALPHA"), gv.FOG && Sv.addFallback(1, "FOG"), gv.POINTSIZE && Sv.addFallback(0, "POINTSIZE"), gv.LOGARITHMICDEPTH && Sv.addFallback(0, "LOGARITHMICDEPTH"), (0, mv.B)(gv, Sv, this._maxSimultaneousLights), gv.SPECULARTERM && Sv.addFallback(0, "SPECULARTERM"), gv.DIFFUSEFRESNEL && Sv.addFallback(1, "DIFFUSEFRESNEL"), gv.OPACITYFRESNEL && Sv.addFallback(2, "OPACITYFRESNEL"), gv.REFLECTIONFRESNEL && Sv.addFallback(3, "REFLECTIONFRESNEL"), gv.EMISSIVEFRESNEL && Sv.addFallback(4, "EMISSIVEFRESNEL"), gv.FRESNEL && Sv.addFallback(4, "FRESNEL"), gv.MULTIVIEW && Sv.addFallback(0, "MULTIVIEW");
              const lv = [dv.k.PositionKind];
              gv.NORMAL && lv.push(dv.k.NormalKind), gv.TANGENT && lv.push(dv.k.TangentKind);
              for (let vv = 1; vv <= 6; ++vv) gv["UV" + vv] && lv.push(`uv${1===vv?"":vv}`);
              gv.VERTEXCOLOR && lv.push(dv.k.ColorKind), (0, mv.G)(lv, zv, gv, Sv), (0, mv.J)(lv, gv), (0, mv.L)(lv, zv, gv), (0, mv.F)(lv, zv, gv);
              let wv = "default";
              const av = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                sv = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, mv.kb)(av, sv, !1);
              const iv = ["Material", "Scene", "Mesh"],
                jv = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: gv.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = Sv, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = gv, this._eventInfo.uniforms = av, this._eventInfo.attributes = lv, this._eventInfo.samplers = sv, this._eventInfo.uniformBuffersNames = iv, this._eventInfo.customCode = void 0, this._eventInfo.mesh = zv, this._eventInfo.indexParameters = jv, this._callbackPluginEventGeneric(128, this._eventInfo), Fv.d.AddUniformsAndSamplers(av, sv), Nv.b.AddUniforms(av), Nv.b.AddSamplers(sv), Tv.b && (Tv.b.PrepareUniforms(av, gv), Tv.b.PrepareSamplers(sv, gv)), (0, mv.lb)({
                  uniformsNames: av,
                  uniformBuffersNames: iv,
                  samplers: sv,
                  defines: gv,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, cv.c)(av), this._useVertexPulling) {
                const vv = Pv.getRenderingMesh(),
                  zv = vv?.geometry;
                zv && (this._vertexPullingMetadata = (0, Gv.e)(zv), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((vv, zv) => {
                  av.push(`vp_${zv}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const fv = {};
              this.customShaderNameResolve && (wv = this.customShaderNameResolve(wv, av, iv, sv, gv, lv, fv));
              const Yv = gv.toString(),
                nv = Pv.effect,
                Ov = ev.ma().createEffect(wv, {
                  attributes: lv,
                  uniformsNames: av,
                  uniformBuffersNames: iv,
                  samplers: sv,
                  defines: Yv,
                  fallbacks: Sv,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: jv,
                  processFinalCode: fv.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: gv.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: vv._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, pv);
              if (this._eventInfo.customCode = void 0, Ov)
                if (this._onEffectCreatedObservable && (Vv.effect = Ov, Vv.subMesh = Pv, this._onEffectCreatedObservable.notifyObservers(Vv)), this.allowShaderHotSwapping && nv && !Ov.isReady()) {
                  if (gv.markAsUnprocessed(), Wv = this.isFrozen, hv) return gv._areLightsDisposed = !0, !1
                } else ev.resetCachedMaterial(), Pv.setEffect(Ov, gv, this._materialContext)
            }
            return !(!Pv.effect || !Pv.effect.isReady()) && (gv._renderId = ev.getRenderId(), Sv._wasPreviouslyReady = !Wv, Sv._wasPreviouslyUsingInstances = hv, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const vv = this._uniformBuffer;
            vv.addUniform("diffuseLeftColor", 4), vv.addUniform("diffuseRightColor", 4), vv.addUniform("opacityParts", 4), vv.addUniform("reflectionLeftColor", 4), vv.addUniform("reflectionRightColor", 4), vv.addUniform("refractionLeftColor", 4), vv.addUniform("refractionRightColor", 4), vv.addUniform("emissiveLeftColor", 4), vv.addUniform("emissiveRightColor", 4), vv.addUniform("vDiffuseInfos", 2), vv.addUniform("vAmbientInfos", 2), vv.addUniform("vOpacityInfos", 2), vv.addUniform("vEmissiveInfos", 2), vv.addUniform("vLightmapInfos", 2), vv.addUniform("vSpecularInfos", 2), vv.addUniform("vBumpInfos", 3), vv.addUniform("diffuseMatrix", 16), vv.addUniform("ambientMatrix", 16), vv.addUniform("opacityMatrix", 16), vv.addUniform("emissiveMatrix", 16), vv.addUniform("lightmapMatrix", 16), vv.addUniform("specularMatrix", 16), vv.addUniform("bumpMatrix", 16), vv.addUniform("vTangentSpaceParams", 2), vv.addUniform("pointSize", 1), vv.addUniform("alphaCutOff", 1), vv.addUniform("refractionMatrix", 16), vv.addUniform("vRefractionInfos", 4), vv.addUniform("vRefractionPosition", 3), vv.addUniform("vRefractionSize", 3), vv.addUniform("vSpecularColor", 4), vv.addUniform("vEmissiveColor", 3), vv.addUniform("vDiffuseColor", 4), vv.addUniform("vAmbientColor", 3), vv.addUniform("cameraInfo", 4), vv.addUniform("vTextureRepetitionHexTilingParams", 4), (0, mv.jb)(vv, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(zv, Pv, hv) {
            const Sv = this.rD(),
              ev = hv.materialDefines;
            if (!ev) return;
            const dv = hv.effect;
            if (!dv) return;
            this._activeEffect = dv, Pv.getMeshUniformBuffer().bindToEffect(dv, "Mesh"), Pv.transferToEffect(zv), this._uniformBuffer.bindToEffect(dv, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Sv, Pv, zv, this.isFrozen), Fv.d.Bind(Sv.ma().currentRenderPassId, this._activeEffect, Pv, zv, this);
            const Nv = Sv.activeCamera;
            Nv ? this._uniformBuffer.updateFloat4("cameraInfo", Nv.minZ, Nv.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const lv = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", lv[0], lv[1], lv[2], lv[3]), this._eventInfo.subMesh = hv, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), ev.OBJECTSPACE_NORMALMAP && (zv.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Tv = this._mustRebind(Sv, dv, hv, Pv.visibility),
              Wv = Sv.ma()._features.needToAlwaysBindUniformBuffers;
            (0, mv.e)(Pv, dv), this._vertexPullingMetadata && (0, Gv.d)(dv, this._vertexPullingMetadata);
            const wv = this._uniformBuffer;
            if (Tv) {
              if (this.bindViewProjection(dv), !wv.useUbo || !this.isFrozen || !wv.isSync || hv._drawWrapper._forceRebindOnNextCall) {
                if (vv.FresnelEnabled && ev.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (wv.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), wv.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const vv = pv.k.Color3[0];
                    vv.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), wv.updateColor4("opacityParts", vv, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (wv.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), wv.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (wv.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), wv.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (wv.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), wv.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (ev.ALPHATEST && wv.updateFloat("alphaCutOff", this.alphaCutOff), Sv.texturesEnabled && (this._diffuseTexture && vv.DiffuseTextureEnabled && (wv.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, mv.A)(this._diffuseTexture, wv, "diffuse")), this._ambientTexture && vv.AmbientTextureEnabled && (wv.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, mv.A)(this._ambientTexture, wv, "ambient")), this._opacityTexture && vv.OpacityTextureEnabled && (wv.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, mv.A)(this._opacityTexture, wv, "opacity")), (0, mv.j)(Sv, ev, wv, pv.b.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && vv.ReflectionTextureEnabled || wv.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && vv.EmissiveTextureEnabled && (wv.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, mv.A)(this._emissiveTexture, wv, "emissive")), this._lightmapTexture && vv.LightmapTextureEnabled && (wv.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, mv.A)(this._lightmapTexture, wv, "lightmap")), this._specularTexture && vv.SpecularTextureEnabled && (wv.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, mv.A)(this._specularTexture, wv, "specular")), this._bumpTexture && Sv.ma().getCaps().standardDerivatives && vv.BumpTextureEnabled && (wv.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, mv.A)(this._bumpTexture, wv, "bump"), Sv._mirroredCameraPosition ? wv.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : wv.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && vv.RefractionTextureEnabled)) {
                  let vv = 1;
                  if (this._refractionTexture.isCube || (wv.Xu("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (vv = this._refractionTexture.depth)), wv.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, vv, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const vv = this._refractionTexture;
                    wv.updateVector3("vRefractionPosition", vv.boundingBoxPosition), wv.updateVector3("vRefractionSize", vv.boundingBoxSize)
                  }
                }
                this.pointsCloud && wv.updateFloat("pointSize", this.pointSize), wv.updateColor4("vSpecularColor", this.specularColor, this.specularPower), wv.updateColor3("vEmissiveColor", vv.EmissiveTextureEnabled ? this.emissiveColor : pv.b.BlackReadOnly), wv.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), Sv.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), wv.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              Sv.texturesEnabled && (this._diffuseTexture && vv.DiffuseTextureEnabled && dv.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && vv.AmbientTextureEnabled && dv.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && vv.OpacityTextureEnabled && dv.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && vv.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? dv.setTexture("reflectionCubeSampler", this._reflectionTexture) : dv.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && vv.EmissiveTextureEnabled && dv.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && vv.LightmapTextureEnabled && dv.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && vv.SpecularTextureEnabled && dv.setTexture("specularSampler", this._specularTexture), this._bumpTexture && Sv.ma().getCaps().standardDerivatives && vv.BumpTextureEnabled && dv.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && vv.RefractionTextureEnabled && (this._refractionTexture.isCube ? dv.setTexture("refractionCubeSampler", this._refractionTexture) : dv.setTexture("refraction2DSampler", this._refractionTexture))), this.rD().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Pv) && this.rD().depthPeelingRenderer.bind(dv), this._eventInfo.subMesh = hv, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, cv.e)(dv, this, Sv), this.bindEyePosition(dv)
            } else Wv && (this._needToBindSceneUbo = !0);
            !Tv && this.isFrozen && !Wv || !Sv.lightsEnabled || this._disableLighting || (0, mv.r)(Sv, Pv, dv, ev, this._maxSimultaneousLights), !Tv && this.isFrozen || ((Sv.fogEnabled && Pv.applyFog && Sv.fogMode !== gv.g.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || Pv.receiveShadows || ev.PREPASS || ev.CLUSTLIGHT_BATCH) && this.bindView(dv), (0, mv.g)(Sv, Pv, dv), ev.NUM_MORPH_INFLUENCERS && (0, mv.v)(Pv, dv), ev.BAKED_VERTEX_ANIMATION_TEXTURE && Pv.bakedVertexAnimationManager?.bind(dv, ev.INSTANCES), this.useLogarithmicDepth && (0, mv.u)(ev, dv, Sv), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(Pv, this._activeEffect, hv), wv.update()
          }
          _canBindRunFollower(zv, Pv, hv, Sv, ev) {
            const gv = zv.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === vv.prototype.isReadyForSubMesh && this.bindForSubMesh === vv.prototype.bindForSubMesh && this._mustRebind === av.d.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !Pv._features.needToAlwaysBindUniformBuffers && !(gv && gv.enabled && gv.currentRTisSceneRT) && !Fv.d._Configurations[Pv.currentRenderPassId] && !Sv.materialDefines?.OBJECTSPACE_NORMALMAP && !hv.skeleton && !ev._bonesComputationForcedToCPU
          }
          _bindRunFollower(vv, zv, Pv, hv) {
            this._activeEffect = hv, zv.getMeshUniformBuffer().bindToEffect(hv, "Mesh"), zv.transferToEffect(vv);
            const Sv = this._uniformBuffer;
            Sv.bindToEffect(hv, "Material");
            const ev = this._scene.activeCamera;
            ev ? Sv.updateFloat4("cameraInfo", ev.minZ, ev.maxZ, 0, 0) : Sv.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const gv = this.textureRepetitionHexTilingParams;
            Sv.updateFloat4("vTextureRepetitionHexTilingParams", gv[0], gv[1], gv[2], gv[3]), this._afterBind(zv, hv, Pv), Sv.update()
          }
          getAnimatables() {
            const vv = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && vv.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && vv.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && vv.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && vv.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && vv.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && vv.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && vv.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && vv.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && vv.push(this._refractionTexture), vv
          }
          getActiveTextures() {
            const vv = super.getActiveTextures();
            return this._diffuseTexture && vv.push(this._diffuseTexture), this._ambientTexture && vv.push(this._ambientTexture), this._opacityTexture && vv.push(this._opacityTexture), this._reflectionTexture && vv.push(this._reflectionTexture), this._emissiveTexture && vv.push(this._emissiveTexture), this._specularTexture && vv.push(this._specularTexture), this._bumpTexture && vv.push(this._bumpTexture), this._lightmapTexture && vv.push(this._lightmapTexture), this._refractionTexture && vv.push(this._refractionTexture), vv
          }
          hasTexture(vv) {
            return !!super.hasTexture(vv) || (this._diffuseTexture === vv || (this._ambientTexture === vv || (this._opacityTexture === vv || (this._reflectionTexture === vv || (this._emissiveTexture === vv || (this._specularTexture === vv || (this._bumpTexture === vv || (this._lightmapTexture === vv || this._refractionTexture === vv))))))))
          }
          dispose(vv, zv) {
            zv && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(vv, zv)
          }
          clone(zv) {
            let Pv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Sv = jv.c.Clone((() => new vv(zv, this.rD())), this, {
              cloneTexturesOnlyOnce: Pv
            });
            return Sv.name = zv, Sv.id = zv, this.stencil.copyTo(Sv.stencil), this._clonePlugins(Sv, hv), Sv
          }
          static Parse(zv, Pv, hv) {
            const Sv = jv.c.Parse((() => new vv(zv.name, Pv)), zv, Pv, hv);
            return zv.stencil && Sv.stencil.parse(zv.stencil, Pv, hv), Wv.b._ParsePlugins(zv, Sv, Pv, hv), Sv
          }
          static get DiffuseTextureEnabled() {
            return sv.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(vv) {
            sv.e.DiffuseTextureEnabled = vv
          }
          static get DetailTextureEnabled() {
            return sv.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(vv) {
            sv.e.DetailTextureEnabled = vv
          }
          static get AmbientTextureEnabled() {
            return sv.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(vv) {
            sv.e.AmbientTextureEnabled = vv
          }
          static get OpacityTextureEnabled() {
            return sv.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(vv) {
            sv.e.OpacityTextureEnabled = vv
          }
          static get ReflectionTextureEnabled() {
            return sv.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(vv) {
            sv.e.ReflectionTextureEnabled = vv
          }
          static get EmissiveTextureEnabled() {
            return sv.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(vv) {
            sv.e.EmissiveTextureEnabled = vv
          }
          static get SpecularTextureEnabled() {
            return sv.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(vv) {
            sv.e.SpecularTextureEnabled = vv
          }
          static get BumpTextureEnabled() {
            return sv.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(vv) {
            sv.e.BumpTextureEnabled = vv
          }
          static get LightmapTextureEnabled() {
            return sv.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(vv) {
            sv.e.LightmapTextureEnabled = vv
          }
          static get RefractionTextureEnabled() {
            return sv.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(vv) {
            sv.e.RefractionTextureEnabled = vv
          }
          static get ColorGradingTextureEnabled() {
            return sv.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(vv) {
            sv.e.ColorGradingTextureEnabled = vv
          }
          static get FresnelEnabled() {
            return sv.e.FresnelEnabled
          }
          static set FresnelEnabled(vv) {
            sv.e.FresnelEnabled = vv
          }
        }, zv = new WeakMap, lv = new WeakMap, wv = new WeakMap, Yv = new WeakMap, nv = new WeakMap, Ov = new WeakMap, Dv = new WeakMap, Kv = new WeakMap, Uv = new WeakMap, tv = new WeakMap, qv = new WeakMap, Iv = new WeakMap, Qv = new WeakMap, Zv = new WeakMap, Av = new WeakMap, Lv = new WeakMap, Hv = new WeakMap, Mv = new WeakMap, yv = new WeakMap, Bv = new WeakMap, Jv = new WeakMap, Ev = new WeakMap, ov = new WeakMap, bv = new WeakMap, rv = new WeakMap, kv = new WeakMap, Xv = new WeakMap, uv = new WeakMap, vz = new WeakMap, zz = new WeakMap, Pz = new WeakMap, hz = new WeakMap, (() => {
          const zv = "function" === typeof Symbol && Symbol.metadata ? Object.create(nP[Symbol.metadata] ?? null) : void 0;
          Sz = [(0, Sv.E)("diffuseTexture")], ez = [(0, Sv.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], gz = [(0, Sv.E)("ambientTexture")], pz = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], dz = [(0, Sv.E)("opacityTexture")], Nz = [(0, Sv.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], lz = [(0, Sv.E)("reflectionTexture")], Tz = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], Wz = [(0, Sv.E)("emissiveTexture")], wz = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], az = [(0, Sv.E)("specularTexture")], sz = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], Cz = [(0, Sv.E)("bumpTexture")], iz = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], cz = [(0, Sv.E)("lightmapTexture")], Gz = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], mz = [(0, Sv.E)("refractionTexture")], jz = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], fz = [(0, Sv.n)("ambient")], Fz = [(0, Sv.n)("diffuse")], Yz = [(0, Sv.n)("specular")], nz = [(0, Sv.n)("emissive")], Oz = [(0, Sv.L)()], Dz = [(0, Sv.L)("useAlphaFromDiffuseTexture")], Kz = [() => ({
            init(vv) {
              return void 0 === vv && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = vv), vv
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(vv) {
              this._useAlphaFromDiffuseTexture = vv
            }
          })], Vz = [(0, Sv.L)("useEmissiveAsIllumination")], Uz = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], Rz = [(0, Sv.L)("linkEmissiveWithDiffuse")], xz = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], tz = [(0, Sv.L)("useSpecularOverAlpha")], qz = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], Iz = [(0, Sv.L)("useReflectionOverAlpha")], Qz = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], Zz = [(0, Sv.L)("disableLighting")], Az = [(0, Sv.e)("_markAllSubMeshesAsLightsDirty")], Lz = [(0, Sv.L)("useObjectSpaceNormalMap")], Hz = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], Mz = [(0, Sv.L)("useParallax")], yz = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], Bz = [(0, Sv.L)("useParallaxOcclusion")], Jz = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], Ez = [(0, Sv.L)()], oz = [(0, Sv.L)("roughness")], bz = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], rz = [(0, Sv.L)()], kz = [(0, Sv.L)()], Xz = [(0, Sv.L)()], uz = [(0, Sv.L)("useLightmapAsShadowmap")], vP = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], zP = [(0, Sv.t)("diffuseFresnelParameters")], PP = [(0, Sv.e)("_markAllSubMeshesAsFresnelDirty")], hP = [(0, Sv.t)("opacityFresnelParameters")], SP = [(0, Sv.e)("_markAllSubMeshesAsFresnelAndMiscDirty")], eP = [(0, Sv.t)("reflectionFresnelParameters")], gP = [(0, Sv.e)("_markAllSubMeshesAsFresnelDirty")], pP = [(0, Sv.t)("refractionFresnelParameters")], dP = [(0, Sv.e)("_markAllSubMeshesAsFresnelDirty")], NP = [(0, Sv.t)("emissiveFresnelParameters")], lP = [(0, Sv.e)("_markAllSubMeshesAsFresnelDirty")], TP = [(0, Sv.L)("useReflectionFresnelFromSpecular")], WP = [(0, Sv.e)("_markAllSubMeshesAsFresnelDirty")], wP = [(0, Sv.L)("useGlossinessFromSpecularMapAlpha")], aP = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], sP = [(0, Sv.L)("maxSimultaneousLights")], CP = [(0, Sv.e)("_markAllSubMeshesAsLightsDirty")], iP = [(0, Sv.L)("invertNormalMapX")], cP = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], GP = [(0, Sv.L)("invertNormalMapY")], mP = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], jP = [(0, Sv.L)("twoSidedLighting")], fP = [(0, Sv.e)("_markAllSubMeshesAsTexturesDirty")], FP = [(0, Sv.L)("applyDecalMapAfterDetailMap")], YP = [(0, Sv.e)("_markAllSubMeshesAsMiscDirty")], (0, hv.e)(vv, null, ez, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "diffuseTexture" in vv,
              get: vv => vv.diffuseTexture,
              set: (vv, zv) => {
                vv.diffuseTexture = zv
              }
            },
            metadata: zv
          }, KP, VP), (0, hv.e)(vv, null, pz, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "ambientTexture" in vv,
              get: vv => vv.ambientTexture,
              set: (vv, zv) => {
                vv.ambientTexture = zv
              }
            },
            metadata: zv
          }, xP, tP), (0, hv.e)(vv, null, Nz, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "opacityTexture" in vv,
              get: vv => vv.opacityTexture,
              set: (vv, zv) => {
                vv.opacityTexture = zv
              }
            },
            metadata: zv
          }, QP, ZP), (0, hv.e)(vv, null, Tz, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "reflectionTexture" in vv,
              get: vv => vv.reflectionTexture,
              set: (vv, zv) => {
                vv.reflectionTexture = zv
              }
            },
            metadata: zv
          }, HP, MP), (0, hv.e)(vv, null, wz, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "emissiveTexture" in vv,
              get: vv => vv.emissiveTexture,
              set: (vv, zv) => {
                vv.emissiveTexture = zv
              }
            },
            metadata: zv
          }, JP, EP), (0, hv.e)(vv, null, sz, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "specularTexture" in vv,
              get: vv => vv.specularTexture,
              set: (vv, zv) => {
                vv.specularTexture = zv
              }
            },
            metadata: zv
          }, rP, kP), (0, hv.e)(vv, null, iz, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "bumpTexture" in vv,
              get: vv => vv.bumpTexture,
              set: (vv, zv) => {
                vv.bumpTexture = zv
              }
            },
            metadata: zv
          }, vh, zh), (0, hv.e)(vv, null, Gz, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "lightmapTexture" in vv,
              get: vv => vv.lightmapTexture,
              set: (vv, zv) => {
                vv.lightmapTexture = zv
              }
            },
            metadata: zv
          }, Sh, eh), (0, hv.e)(vv, null, jz, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "refractionTexture" in vv,
              get: vv => vv.refractionTexture,
              set: (vv, zv) => {
                vv.refractionTexture = zv
              }
            },
            metadata: zv
          }, dh, Nh), (0, hv.e)(vv, null, Kz, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "useAlphaFromDiffuseTexture" in vv,
              get: vv => vv.useAlphaFromDiffuseTexture,
              set: (vv, zv) => {
                vv.useAlphaFromDiffuseTexture = zv
              }
            },
            metadata: zv
          }, fh, Fh), (0, hv.e)(vv, null, Uz, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: vv => "useEmissiveAsIllumination" in vv,
              get: vv => vv.useEmissiveAsIllumination,
              set: (vv, zv) => {
                vv.useEmissiveAsIllumination = zv
              }
            },
            metadata: zv
          }, Oh, Dh), (0, hv.e)(vv, null, xz, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: vv => "linkEmissiveWithDiffuse" in vv,
              get: vv => vv.linkEmissiveWithDiffuse,
              set: (vv, zv) => {
                vv.linkEmissiveWithDiffuse = zv
              }
            },
            metadata: zv
          }, Uh, Rh), (0, hv.e)(vv, null, qz, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: vv => "useSpecularOverAlpha" in vv,
              get: vv => vv.useSpecularOverAlpha,
              set: (vv, zv) => {
                vv.useSpecularOverAlpha = zv
              }
            },
            metadata: zv
          }, qh, Ih), (0, hv.e)(vv, null, Qz, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: vv => "useReflectionOverAlpha" in vv,
              get: vv => vv.useReflectionOverAlpha,
              set: (vv, zv) => {
                vv.useReflectionOverAlpha = zv
              }
            },
            metadata: zv
          }, Ah, Lh), (0, hv.e)(vv, null, Az, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: vv => "disableLighting" in vv,
              get: vv => vv.disableLighting,
              set: (vv, zv) => {
                vv.disableLighting = zv
              }
            },
            metadata: zv
          }, yh, Bh), (0, hv.e)(vv, null, Hz, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: vv => "useObjectSpaceNormalMap" in vv,
              get: vv => vv.useObjectSpaceNormalMap,
              set: (vv, zv) => {
                vv.useObjectSpaceNormalMap = zv
              }
            },
            metadata: zv
          }, oh, bh), (0, hv.e)(vv, null, yz, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: vv => "useParallax" in vv,
              get: vv => vv.useParallax,
              set: (vv, zv) => {
                vv.useParallax = zv
              }
            },
            metadata: zv
          }, Xh, uh), (0, hv.e)(vv, null, Jz, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: vv => "useParallaxOcclusion" in vv,
              get: vv => vv.useParallaxOcclusion,
              set: (vv, zv) => {
                vv.useParallaxOcclusion = zv
              }
            },
            metadata: zv
          }, PS, hS), (0, hv.e)(vv, null, bz, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: vv => "roughness" in vv,
              get: vv => vv.roughness,
              set: (vv, zv) => {
                vv.roughness = zv
              }
            },
            metadata: zv
          }, dS, NS), (0, hv.e)(vv, null, vP, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: vv => "useLightmapAsShadowmap" in vv,
              get: vv => vv.useLightmapAsShadowmap,
              set: (vv, zv) => {
                vv.useLightmapAsShadowmap = zv
              }
            },
            metadata: zv
          }, cS, GS), (0, hv.e)(vv, null, PP, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: vv => "diffuseFresnelParameters" in vv,
              get: vv => vv.diffuseFresnelParameters,
              set: (vv, zv) => {
                vv.diffuseFresnelParameters = zv
              }
            },
            metadata: zv
          }, fS, FS), (0, hv.e)(vv, null, SP, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: vv => "opacityFresnelParameters" in vv,
              get: vv => vv.opacityFresnelParameters,
              set: (vv, zv) => {
                vv.opacityFresnelParameters = zv
              }
            },
            metadata: zv
          }, OS, DS), (0, hv.e)(vv, null, gP, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: vv => "reflectionFresnelParameters" in vv,
              get: vv => vv.reflectionFresnelParameters,
              set: (vv, zv) => {
                vv.reflectionFresnelParameters = zv
              }
            },
            metadata: zv
          }, US, RS), (0, hv.e)(vv, null, dP, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: vv => "refractionFresnelParameters" in vv,
              get: vv => vv.refractionFresnelParameters,
              set: (vv, zv) => {
                vv.refractionFresnelParameters = zv
              }
            },
            metadata: zv
          }, qS, IS), (0, hv.e)(vv, null, lP, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: vv => "emissiveFresnelParameters" in vv,
              get: vv => vv.emissiveFresnelParameters,
              set: (vv, zv) => {
                vv.emissiveFresnelParameters = zv
              }
            },
            metadata: zv
          }, AS, LS), (0, hv.e)(vv, null, WP, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: vv => "useReflectionFresnelFromSpecular" in vv,
              get: vv => vv.useReflectionFresnelFromSpecular,
              set: (vv, zv) => {
                vv.useReflectionFresnelFromSpecular = zv
              }
            },
            metadata: zv
          }, yS, BS), (0, hv.e)(vv, null, aP, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: vv => "useGlossinessFromSpecularMapAlpha" in vv,
              get: vv => vv.useGlossinessFromSpecularMapAlpha,
              set: (vv, zv) => {
                vv.useGlossinessFromSpecularMapAlpha = zv
              }
            },
            metadata: zv
          }, oS, bS), (0, hv.e)(vv, null, CP, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: vv => "maxSimultaneousLights" in vv,
              get: vv => vv.maxSimultaneousLights,
              set: (vv, zv) => {
                vv.maxSimultaneousLights = zv
              }
            },
            metadata: zv
          }, XS, uS), (0, hv.e)(vv, null, cP, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: vv => "invertNormalMapX" in vv,
              get: vv => vv.invertNormalMapX,
              set: (vv, zv) => {
                vv.invertNormalMapX = zv
              }
            },
            metadata: zv
          }, Pe, he), (0, hv.e)(vv, null, mP, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: vv => "invertNormalMapY" in vv,
              get: vv => vv.invertNormalMapY,
              set: (vv, zv) => {
                vv.invertNormalMapY = zv
              }
            },
            metadata: zv
          }, ge, pe), (0, hv.e)(vv, null, fP, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: vv => "twoSidedLighting" in vv,
              get: vv => vv.twoSidedLighting,
              set: (vv, zv) => {
                vv.twoSidedLighting = zv
              }
            },
            metadata: zv
          }, le, Te), (0, hv.e)(vv, null, YP, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: vv => "applyDecalMapAfterDetailMap" in vv,
              get: vv => vv.applyDecalMapAfterDetailMap,
              set: (vv, zv) => {
                vv.applyDecalMapAfterDetailMap = zv
              }
            },
            metadata: zv
          }, ae, se), (0, hv.e)(null, null, Sz, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "_diffuseTexture" in vv,
              get: vv => vv._diffuseTexture,
              set: (vv, zv) => {
                vv._diffuseTexture = zv
              }
            },
            metadata: zv
          }, OP, DP), (0, hv.e)(null, null, gz, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "_ambientTexture" in vv,
              get: vv => vv._ambientTexture,
              set: (vv, zv) => {
                vv._ambientTexture = zv
              }
            },
            metadata: zv
          }, UP, RP), (0, hv.e)(null, null, dz, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "_opacityTexture" in vv,
              get: vv => vv._opacityTexture,
              set: (vv, zv) => {
                vv._opacityTexture = zv
              }
            },
            metadata: zv
          }, qP, IP), (0, hv.e)(null, null, lz, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "_reflectionTexture" in vv,
              get: vv => vv._reflectionTexture,
              set: (vv, zv) => {
                vv._reflectionTexture = zv
              }
            },
            metadata: zv
          }, AP, LP), (0, hv.e)(null, null, Wz, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "_emissiveTexture" in vv,
              get: vv => vv._emissiveTexture,
              set: (vv, zv) => {
                vv._emissiveTexture = zv
              }
            },
            metadata: zv
          }, yP, BP), (0, hv.e)(null, null, az, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "_specularTexture" in vv,
              get: vv => vv._specularTexture,
              set: (vv, zv) => {
                vv._specularTexture = zv
              }
            },
            metadata: zv
          }, oP, bP), (0, hv.e)(null, null, Cz, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "_bumpTexture" in vv,
              get: vv => vv._bumpTexture,
              set: (vv, zv) => {
                vv._bumpTexture = zv
              }
            },
            metadata: zv
          }, XP, uP), (0, hv.e)(null, null, cz, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "_lightmapTexture" in vv,
              get: vv => vv._lightmapTexture,
              set: (vv, zv) => {
                vv._lightmapTexture = zv
              }
            },
            metadata: zv
          }, Ph, hh), (0, hv.e)(null, null, mz, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "_refractionTexture" in vv,
              get: vv => vv._refractionTexture,
              set: (vv, zv) => {
                vv._refractionTexture = zv
              }
            },
            metadata: zv
          }, gh, ph), (0, hv.e)(null, null, fz, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: vv => "ambientColor" in vv,
              get: vv => vv.ambientColor,
              set: (vv, zv) => {
                vv.ambientColor = zv
              }
            },
            metadata: zv
          }, lh, Th), (0, hv.e)(null, null, Fz, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: vv => "diffuseColor" in vv,
              get: vv => vv.diffuseColor,
              set: (vv, zv) => {
                vv.diffuseColor = zv
              }
            },
            metadata: zv
          }, Wh, wh), (0, hv.e)(null, null, Yz, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: vv => "specularColor" in vv,
              get: vv => vv.specularColor,
              set: (vv, zv) => {
                vv.specularColor = zv
              }
            },
            metadata: zv
          }, ah, sh), (0, hv.e)(null, null, nz, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: vv => "emissiveColor" in vv,
              get: vv => vv.emissiveColor,
              set: (vv, zv) => {
                vv.emissiveColor = zv
              }
            },
            metadata: zv
          }, Ch, ih), (0, hv.e)(null, null, Oz, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: vv => "specularPower" in vv,
              get: vv => vv.specularPower,
              set: (vv, zv) => {
                vv.specularPower = zv
              }
            },
            metadata: zv
          }, ch, Gh), (0, hv.e)(null, null, Dz, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: vv => "_useAlphaFromDiffuseTexture" in vv,
              get: vv => vv._useAlphaFromDiffuseTexture,
              set: (vv, zv) => {
                vv._useAlphaFromDiffuseTexture = zv
              }
            },
            metadata: zv
          }, mh, jh), (0, hv.e)(null, null, Vz, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: vv => "_useEmissiveAsIllumination" in vv,
              get: vv => vv._useEmissiveAsIllumination,
              set: (vv, zv) => {
                vv._useEmissiveAsIllumination = zv
              }
            },
            metadata: zv
          }, Yh, nh), (0, hv.e)(null, null, Rz, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: vv => "_linkEmissiveWithDiffuse" in vv,
              get: vv => vv._linkEmissiveWithDiffuse,
              set: (vv, zv) => {
                vv._linkEmissiveWithDiffuse = zv
              }
            },
            metadata: zv
          }, Kh, Vh), (0, hv.e)(null, null, tz, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: vv => "_useSpecularOverAlpha" in vv,
              get: vv => vv._useSpecularOverAlpha,
              set: (vv, zv) => {
                vv._useSpecularOverAlpha = zv
              }
            },
            metadata: zv
          }, xh, th), (0, hv.e)(null, null, Iz, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: vv => "_useReflectionOverAlpha" in vv,
              get: vv => vv._useReflectionOverAlpha,
              set: (vv, zv) => {
                vv._useReflectionOverAlpha = zv
              }
            },
            metadata: zv
          }, Qh, Zh), (0, hv.e)(null, null, Zz, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: vv => "_disableLighting" in vv,
              get: vv => vv._disableLighting,
              set: (vv, zv) => {
                vv._disableLighting = zv
              }
            },
            metadata: zv
          }, Hh, Mh), (0, hv.e)(null, null, Lz, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: vv => "_useObjectSpaceNormalMap" in vv,
              get: vv => vv._useObjectSpaceNormalMap,
              set: (vv, zv) => {
                vv._useObjectSpaceNormalMap = zv
              }
            },
            metadata: zv
          }, Jh, Eh), (0, hv.e)(null, null, Mz, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: vv => "_useParallax" in vv,
              get: vv => vv._useParallax,
              set: (vv, zv) => {
                vv._useParallax = zv
              }
            },
            metadata: zv
          }, rh, kh), (0, hv.e)(null, null, Bz, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: vv => "_useParallaxOcclusion" in vv,
              get: vv => vv._useParallaxOcclusion,
              set: (vv, zv) => {
                vv._useParallaxOcclusion = zv
              }
            },
            metadata: zv
          }, vS, zS), (0, hv.e)(null, null, Ez, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: vv => "parallaxScaleBias" in vv,
              get: vv => vv.parallaxScaleBias,
              set: (vv, zv) => {
                vv.parallaxScaleBias = zv
              }
            },
            metadata: zv
          }, SS, eS), (0, hv.e)(null, null, oz, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: vv => "_roughness" in vv,
              get: vv => vv._roughness,
              set: (vv, zv) => {
                vv._roughness = zv
              }
            },
            metadata: zv
          }, gS, pS), (0, hv.e)(null, null, rz, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: vv => "indexOfRefraction" in vv,
              get: vv => vv.indexOfRefraction,
              set: (vv, zv) => {
                vv.indexOfRefraction = zv
              }
            },
            metadata: zv
          }, lS, TS), (0, hv.e)(null, null, kz, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: vv => "invertRefractionY" in vv,
              get: vv => vv.invertRefractionY,
              set: (vv, zv) => {
                vv.invertRefractionY = zv
              }
            },
            metadata: zv
          }, WS, wS), (0, hv.e)(null, null, Xz, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: vv => "alphaCutOff" in vv,
              get: vv => vv.alphaCutOff,
              set: (vv, zv) => {
                vv.alphaCutOff = zv
              }
            },
            metadata: zv
          }, aS, sS), (0, hv.e)(null, null, uz, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: vv => "_useLightmapAsShadowmap" in vv,
              get: vv => vv._useLightmapAsShadowmap,
              set: (vv, zv) => {
                vv._useLightmapAsShadowmap = zv
              }
            },
            metadata: zv
          }, CS, iS), (0, hv.e)(null, null, zP, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: vv => "_diffuseFresnelParameters" in vv,
              get: vv => vv._diffuseFresnelParameters,
              set: (vv, zv) => {
                vv._diffuseFresnelParameters = zv
              }
            },
            metadata: zv
          }, mS, jS), (0, hv.e)(null, null, hP, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: vv => "_opacityFresnelParameters" in vv,
              get: vv => vv._opacityFresnelParameters,
              set: (vv, zv) => {
                vv._opacityFresnelParameters = zv
              }
            },
            metadata: zv
          }, YS, nS), (0, hv.e)(null, null, eP, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: vv => "_reflectionFresnelParameters" in vv,
              get: vv => vv._reflectionFresnelParameters,
              set: (vv, zv) => {
                vv._reflectionFresnelParameters = zv
              }
            },
            metadata: zv
          }, KS, VS), (0, hv.e)(null, null, pP, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: vv => "_refractionFresnelParameters" in vv,
              get: vv => vv._refractionFresnelParameters,
              set: (vv, zv) => {
                vv._refractionFresnelParameters = zv
              }
            },
            metadata: zv
          }, xS, tS), (0, hv.e)(null, null, NP, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: vv => "_emissiveFresnelParameters" in vv,
              get: vv => vv._emissiveFresnelParameters,
              set: (vv, zv) => {
                vv._emissiveFresnelParameters = zv
              }
            },
            metadata: zv
          }, QS, ZS), (0, hv.e)(null, null, TP, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: vv => "_useReflectionFresnelFromSpecular" in vv,
              get: vv => vv._useReflectionFresnelFromSpecular,
              set: (vv, zv) => {
                vv._useReflectionFresnelFromSpecular = zv
              }
            },
            metadata: zv
          }, HS, MS), (0, hv.e)(null, null, wP, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: vv => "_useGlossinessFromSpecularMapAlpha" in vv,
              get: vv => vv._useGlossinessFromSpecularMapAlpha,
              set: (vv, zv) => {
                vv._useGlossinessFromSpecularMapAlpha = zv
              }
            },
            metadata: zv
          }, JS, ES), (0, hv.e)(null, null, sP, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: vv => "_maxSimultaneousLights" in vv,
              get: vv => vv._maxSimultaneousLights,
              set: (vv, zv) => {
                vv._maxSimultaneousLights = zv
              }
            },
            metadata: zv
          }, rS, kS), (0, hv.e)(null, null, iP, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: vv => "_invertNormalMapX" in vv,
              get: vv => vv._invertNormalMapX,
              set: (vv, zv) => {
                vv._invertNormalMapX = zv
              }
            },
            metadata: zv
          }, ve, ze), (0, hv.e)(null, null, GP, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: vv => "_invertNormalMapY" in vv,
              get: vv => vv._invertNormalMapY,
              set: (vv, zv) => {
                vv._invertNormalMapY = zv
              }
            },
            metadata: zv
          }, Se, ee), (0, hv.e)(null, null, jP, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: vv => "_twoSidedLighting" in vv,
              get: vv => vv._twoSidedLighting,
              set: (vv, zv) => {
                vv._twoSidedLighting = zv
              }
            },
            metadata: zv
          }, de, Ne), (0, hv.e)(null, null, FP, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: vv => "_applyDecalMapAfterDetailMap" in vv,
              get: vv => vv._applyDecalMapAfterDetailMap,
              set: (vv, zv) => {
                vv._applyDecalMapAfterDetailMap = zv
              }
            },
            metadata: zv
          }, We, we), zv && Object.defineProperty(vv, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zv
          })
        })(), vv.ForceGLSL = !1, vv._ShaderLoader = new fv.e((() => [Promise.all([Pv.e(308), Pv.e(307)]).then((() => Pv(41193))), Promise.all([Pv.e(313), Pv.e(309), Pv.e(322), Pv.e(312)]).then((() => Pv(41379)))]), (() => [Promise.all([Pv.e(329), Pv.e(324)]).then((() => Pv(41536))), Promise.all([Pv.e(330), Pv.e(340), Pv.e(326)]).then((() => Pv(41728)))])), vv
      })(),
      qv = !1;

    function Iv() {
      qv || (qv = !0, (0, Tv.f)(), (0, Dv.c)("BABYLON.StandardMaterial", tv), gv.g.DefaultMaterialFactory = vv => new tv("default material", vv))
    }
    Object.getOwnPropertyDescriptor(tv.prototype, "decalMap") || Object.defineProperty(tv.prototype, "decalMap", (0, Kv.g)("StandardMaterial", "decalMap"))
  },
  39694: (vv, zv, Pv) => {
    function hv(vv) {
      return class extends vv {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    Pv.d(zv, {
      b: () => hv
    })
  },
  39682: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv
    });
    class hv {
      constructor(vv, zv) {
        this._webGL = {
          load: vv,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: zv,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(vv) {
        const zv = 1 === vv ? this._webGPU : this._webGL;
        return zv.loaded ? void 0 : async () => {
          await this._loadAsync(zv)
        }
      }
      async _loadAsync(vv) {
        if (vv.loaded) return;
        let zv = vv.loadPromise;
        const Pv = null === zv;
        Pv && (zv = Promise.all(vv.load()), vv.loadPromise = zv);
        let hv = !1;
        try {
          await zv, hv = !0
        } finally {
          Pv && this._completeLoad(vv, hv)
        }
      }
      _completeLoad(vv, zv) {
        vv.loaded = zv, vv.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);