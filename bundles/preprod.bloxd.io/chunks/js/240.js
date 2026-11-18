export const id = 240;
export const ids = [240];
export const modules = {
  38895: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy
    });
    var Uy = Wy(38469);

    function hy(yb) {
      return class extends yb {
        constructor() {
          super(...arguments);
          const yb = new.target;
          if (!yb[Symbol.metadata]) {
            const bb = Object.getPrototypeOf(yb)?.[Symbol.metadata];
            yb[Symbol.metadata] = bb ? Object.create(bb) : {}
          }
          const bb = (0, Uy.d)(yb[Symbol.metadata]);
          bb._imageProcessingConfiguration || (bb._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(yb) {
          this._attachImageProcessingConfiguration(yb), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(yb) {
          yb !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !yb && this.kWy ? this._imageProcessingConfiguration = this.kWy().imageProcessingConfiguration : yb && (this._imageProcessingConfiguration = yb), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(yb) {
          this.imageProcessingConfiguration.colorCurvesEnabled = yb
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(yb) {
          this.imageProcessingConfiguration.colorGradingEnabled = yb
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(yb) {
          this._imageProcessingConfiguration.toneMappingEnabled = yb
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(yb) {
          this._imageProcessingConfiguration.exposure = yb
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(yb) {
          this._imageProcessingConfiguration.contrast = yb
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(yb) {
          this._imageProcessingConfiguration.colorGradingTexture = yb
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(yb) {
          this._imageProcessingConfiguration.colorCurves = yb
        }
      }
    }
  },
  38770: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy,
      g: () => hy
    });
    var Uy = Wy(38777);

    function hy(yb) {
      return class extends yb {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class fy extends Uy.d {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  38853: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Ky
    });
    var Uy = Wy(38464),
      hy = Wy(38782),
      fy = Wy(38466),
      Zy = Wy(38836),
      cb = Wy(38777),
      Py = Wy(38862),
      oy = Wy(38824);
    class By extends cb.d {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let Ky = (() => {
      var yb, bb, Wy, cb;
      let Ky, ey, qb, sy, Sy, Ey, ly = Py.c,
        mb = [],
        Cy = [],
        Ty = [],
        Vy = [],
        Jy = [],
        gb = [],
        Gy = [],
        Oy = [],
        Ry = [],
        vb = [],
        ib = [],
        My = [];
      return yb = class extends ly {
        get texture() {
          return (0, Uy.e)(this, bb, "f")
        }
        set texture(yb) {
          (0, Uy.f)(this, bb, yb, "f")
        }
        get normalBlendMethod() {
          return (0, Uy.e)(this, Wy, "f")
        }
        set normalBlendMethod(yb) {
          (0, Uy.f)(this, Wy, yb, "f")
        }
        get isEnabled() {
          return (0, Uy.e)(this, cb, "f")
        }
        set isEnabled(yb) {
          (0, Uy.f)(this, cb, yb, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(yb) {
          let fy = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(yb, "DetailMap", 140, new By, fy), this._texture = null, bb.set(this, (0, Uy.l)(this, mb, void 0)), this.diffuseBlendLevel = ((0, Uy.l)(this, Cy), (0, Uy.l)(this, Ty, 1)), this.roughnessBlendLevel = ((0, Uy.l)(this, Vy), (0, Uy.l)(this, Jy, 1)), this.bumpLevel = ((0, Uy.l)(this, gb), (0, Uy.l)(this, Gy, 1)), this._normalBlendMethod = ((0, Uy.l)(this, Oy), hy.e.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), Wy.set(this, (0, Uy.l)(this, Ry, void 0)), this._isEnabled = ((0, Uy.l)(this, vb), !1), cb.set(this, (0, Uy.l)(this, ib, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Uy.l)(this, My), this._internalMarkAllSubMeshesAsTexturesDirty = yb._dirtyCallbacks[1]
        }
        isReadyForSubMesh(yb, bb, Wy) {
          return !this._isEnabled || !(yb._areTexturesDirty && bb.texturesEnabled && Wy.getCaps().standardDerivatives && this._texture && Zy.d.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(yb, bb) {
          if (this._isEnabled) {
            yb.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const Wy = bb.xh();
            yb._areTexturesDirty && (Wy.getCaps().standardDerivatives && this._texture && Zy.d.DetailTextureEnabled && this._isEnabled ? ((0, oy.$)(this._texture, yb, "DETAIL"), yb.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : yb.DETAIL = !1)
          } else yb.DETAIL = !1
        }
        bindForSubMesh(yb, bb) {
          if (!this._isEnabled) return;
          const Wy = this._material.isFrozen;
          yb.useUbo && Wy && yb.isSync || this._texture && Zy.d.DetailTextureEnabled && (yb.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, oy.z)(this._texture, yb, "detail")), bb.texturesEnabled && this._texture && Zy.d.DetailTextureEnabled && yb.setTexture("detailSampler", this._texture)
        }
        hasTexture(yb) {
          return this._texture === yb
        }
        getActiveTextures(yb) {
          this._texture && yb.push(this._texture)
        }
        getAnimatables(yb) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && yb.push(this._texture)
        }
        dispose(yb) {
          yb && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(yb) {
          yb.push("detailSampler")
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
      }, bb = new WeakMap, Wy = new WeakMap, cb = new WeakMap, (() => {
        const bb = "function" === typeof Symbol && Symbol.metadata ? Object.create(ly[Symbol.metadata] ?? null) : void 0;
        Ky = [(0, fy.M)("detailTexture"), (0, fy.h)("_markAllSubMeshesAsTexturesDirty")], ey = [(0, fy.T)()], qb = [(0, fy.T)()], sy = [(0, fy.T)()], Sy = [(0, fy.T)(), (0, fy.h)("_markAllSubMeshesAsTexturesDirty")], Ey = [(0, fy.T)(), (0, fy.h)("_markAllSubMeshesAsTexturesDirty")], (0, Uy.j)(yb, null, Ky, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: yb => "texture" in yb,
            get: yb => yb.texture,
            set: (yb, bb) => {
              yb.texture = bb
            }
          },
          metadata: bb
        }, mb, Cy), (0, Uy.j)(yb, null, Sy, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: yb => "normalBlendMethod" in yb,
            get: yb => yb.normalBlendMethod,
            set: (yb, bb) => {
              yb.normalBlendMethod = bb
            }
          },
          metadata: bb
        }, Ry, vb), (0, Uy.j)(yb, null, Ey, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: yb => "isEnabled" in yb,
            get: yb => yb.isEnabled,
            set: (yb, bb) => {
              yb.isEnabled = bb
            }
          },
          metadata: bb
        }, ib, My), (0, Uy.j)(null, null, ey, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: yb => "diffuseBlendLevel" in yb,
            get: yb => yb.diffuseBlendLevel,
            set: (yb, bb) => {
              yb.diffuseBlendLevel = bb
            }
          },
          metadata: bb
        }, Ty, Vy), (0, Uy.j)(null, null, qb, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: yb => "roughnessBlendLevel" in yb,
            get: yb => yb.roughnessBlendLevel,
            set: (yb, bb) => {
              yb.roughnessBlendLevel = bb
            }
          },
          metadata: bb
        }, Jy, gb), (0, Uy.j)(null, null, sy, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: yb => "bumpLevel" in yb,
            get: yb => yb.bumpLevel,
            set: (yb, bb) => {
              yb.bumpLevel = bb
            }
          },
          metadata: bb
        }, Gy, Oy), bb && Object.defineProperty(yb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: bb
        })
      })(), yb
    })()
  },
  38777: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Uy
    });
    class Uy {
      constructor(yb) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = yb, yb)
          for (const bb in yb) Object.prototype.hasOwnProperty.call(yb, bb) && this._setDefaultValue(bb)
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
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || yb, this._isDirty = !0
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
        for (const yb of Object.keys(this)) "_" !== yb[0] && this._keys.push(yb);
        if (this._externalProperties)
          for (const yb in this._externalProperties) - 1 === this._keys.indexOf(yb) && this._keys.push(yb)
      }
      isEqual(yb) {
        if (this._keys.length !== yb._keys.length) return !1;
        for (let bb = 0; bb < this._keys.length; bb++) {
          const Wy = this._keys[bb];
          if (this[Wy] !== yb[Wy]) return !1
        }
        return !0
      }
      cloneTo(yb) {
        this._keys.length !== yb._keys.length && (yb._keys = this._keys.slice(0));
        for (let bb = 0; bb < this._keys.length; bb++) {
          const Wy = this._keys[bb];
          yb[Wy] = this[Wy]
        }
      }
      reset() {
        for (const yb of this._keys) this._setDefaultValue(yb)
      }
      _setDefaultValue(yb) {
        const bb = this._externalProperties?.[yb]?.type ?? typeof this[yb],
          Wy = this._externalProperties?.[yb]?.default;
        switch (bb) {
          case "number":
            this[yb] = Wy ?? 0;
            break;
          case "string":
            this[yb] = Wy ?? "";
            break;
          default:
            this[yb] = Wy ?? !1
        }
      }
      toString() {
        let yb = "";
        for (let bb = 0; bb < this._keys.length; bb++) {
          const Wy = this._keys[bb],
            Uy = this[Wy];
          switch (typeof Uy) {
            case "number":
            case "string":
              yb += "#define " + Wy + " " + Uy + "\n";
              break;
            default:
              Uy && (yb += "#define " + Wy + "\n")
          }
        }
        return yb
      }
    }
  },
  38877: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb,
      e: () => Zy,
      i: () => fy
    });
    var Uy, hy = Wy(35861);

    function fy(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const Uy = bb(yb);
      if (!Number.isInteger(Uy) || Uy < 0 || Uy > Wy) throw new Error(`Invalid geometry object ID ${Uy} for mesh "${yb.name}". Object IDs must be integers between 0 and 0x${Wy.toString(16).toUpperCase()}.`);
      return Uy
    }

    function Zy(yb, bb) {
      const Wy = bb(yb);
      if (!Number.isInteger(Wy) || Wy < 0 || Wy > 255 || 0 !== Wy && 0 === (63 & Wy)) throw new Error(`Invalid geometry mesh-blending tag ${Wy} for mesh "${yb.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return Wy
    }! function(yb) {
      yb[yb.Zero = 0] = "Zero", yb[yb.One = 1] = "One", yb[yb.MaxViewZ = 2] = "MaxViewZ", yb[yb.NoClear = 3] = "NoClear"
    }(Uy || (Uy = {}));
    class cb {
      static CreateConfiguration(yb) {
        return cb._Configurations[yb] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: hy.c.Zero(),
          currentViewProjection: hy.c.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, cb._Configurations[yb]
      }
      static DeleteConfiguration(yb) {
        delete cb._Configurations[yb]
      }
      static GetConfiguration(yb) {
        return cb._Configurations[yb]
      }
      static _PrepareConfiguration(yb, bb, Wy) {
        const Uy = cb._Configurations[yb];
        Uy._attachments = bb, Uy._colorAttachments = Wy, Uy._mrtCount = bb.length;
        let hy = "#define PREPASS\n";
        for (const fy of cb.GeometryTextureDescriptions) {
          const yb = Uy.defines[fy.defineIndex];
          void 0 !== yb && (hy += `#define ${fy.define}\n#define ${fy.defineIndex} ${yb}\n`)
        }
        Uy.objectIdIsRedFormat && (hy += "#define PREPASS_OBJECT_ID_R8\n"), Uy._defines = hy + `#define SCENE_MRT_COUNT ${bb.length}\n`
      }
      static _PrepareStringDefines(yb, bb) {
        const Wy = cb._Configurations[yb];
        return !!Wy?._defines && (bb.push(Wy._defines), !0)
      }
      static _BindAttachmentsForEffect(yb, bb) {
        const Wy = cb._Configurations[yb.currentRenderPassId];
        return !Wy?._attachments || (yb.bindAttachments(bb._multiTarget ? Wy._attachments : Wy._colorAttachments), bb._multiTarget || void 0 !== Wy.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(yb) {
        const bb = cb._Configurations[yb.currentRenderPassId];
        bb?._colorAttachments && yb.bindAttachments(bb._colorAttachments)
      }
      static _BindColorAttachments(yb) {
        const bb = cb._Configurations[yb.currentRenderPassId];
        return !bb?._colorAttachments || (yb.bindAttachments(bb._colorAttachments), void 0 !== bb.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(yb) {
        const bb = cb._Configurations[yb.currentRenderPassId];
        return !bb?._colorAttachments || void 0 !== bb.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(yb, bb) {
        const Wy = cb._Configurations[yb.currentRenderPassId];
        if (!Wy) return;
        const Uy = yb.getAlphaMode(),
          hy = void 0 === Wy.defines.PREPASS_COLOR_INDEX || 2 === Uy || 1 === Uy || 17 === Uy;
        bb.setFloat("geometryZeroAlphaDiscard", hy ? 1 : 0)
      }
      static AddUniformsAndSamplers(yb, bb) {
        yb.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(yb, bb) {
        for (const Wy of bb)
          if (Wy.vJ)
            for (const bb of Wy.vJ) bb._removeDrawWrapper(yb)
      }
      static PrepareDefines(yb, bb, Wy) {
        if (!Wy._arePrePassDirty) return;
        const Uy = cb._Configurations[yb];
        if (!Uy) return;
        Wy.PREPASS = !0;
        let hy = 0;
        for (let fy = 0; fy < cb.GeometryTextureDescriptions.length; fy++) {
          const yb = cb.GeometryTextureDescriptions[fy],
            bb = yb.define,
            Zy = yb.defineIndex,
            Py = Uy.defines[Zy];
          void 0 !== Py ? (Wy[bb] = !0, Wy[Zy] = Py, hy++) : (Wy[bb] = !1, delete Wy[Zy])
        }
        Wy.PREPASS_OBJECT_ID_R8 = Uy.objectIdIsRedFormat, Wy.SCENE_MRT_COUNT = Uy._mrtCount ?? hy, Wy.BONES_VELOCITY_ENABLED = bb.useBones && bb.computeBonesUsingShaders && bb.skeleton && !bb.skeleton.isUsingTextureForMatrices && -1 === Uy.excludedSkinnedMesh.indexOf(bb)
      }
      static Bind(yb, bb, Wy, Uy, hy) {
        const Py = cb._Configurations[yb];
        if (!Py) return;
        const oy = Wy.kWy(),
          By = oy.xh();
        if (Py.reverseCulling && By.setStateCullFaceType(oy._mirroredCameraPosition ? hy.cullBackFaces : !hy.cullBackFaces), void 0 !== Py.defines.PREPASS_OBJECT_ID_INDEX) {
          const yb = Py.objectIdIsRedFormat ? 255 : 16777215;
          let Uy = Wy.uniqueId;
          if (Py.objectIdProvider) Uy = fy(Wy, Py.objectIdProvider, yb);
          else if (Uy > yb) throw new Error(`Invalid geometry object ID ${Uy} for mesh "${Wy.name}". Object IDs must be integers between 0 and 0x${yb.toString(16).toUpperCase()}.`);
          bb.setFloat("objectId", Uy)
        }
        if (void 0 !== Py.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const yb = Py.meshBlendTagProvider ? Zy(Wy, Py.meshBlendTagProvider) : Wy.meshBlendingTag;
          bb.setInt("meshBlendTag", yb)
        }
        if (void 0 !== Py.defines.PREPASS_VELOCITY_INDEX || void 0 !== Py.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const yb = Py._currentWorldMatrices ?? (Py._currentWorldMatrices = {}),
            hy = Py._worldMatrixFrameIds ?? (Py._worldMatrixFrameIds = {});
          if (yb[Wy.uniqueId] || (yb[Wy.uniqueId] = Uy.clone(), Py.previousWorldMatrices[Wy.uniqueId] = Uy.clone()), hy[Wy.uniqueId] !== By.frameId && (Py.previousWorldMatrices[Wy.uniqueId].Coy(yb[Wy.uniqueId]), hy[Wy.uniqueId] = By.frameId), yb[Wy.uniqueId].Coy(Uy), -1 === Py.lastUpdateFrameId ? (Py.lastUpdateFrameId = By.frameId, Py.previousViewProjection.Coy(oy.getTransformMatrix()), Py.currentViewProjection.Coy(oy.getTransformMatrix())) : Py.currentViewProjection.updateFlag !== oy.getTransformMatrix().updateFlag ? (Py.lastUpdateFrameId = By.frameId, Py.previousViewProjection.Coy(Py.currentViewProjection), Py.currentViewProjection.Coy(oy.getTransformMatrix())) : Py.lastUpdateFrameId !== By.frameId && (Py.lastUpdateFrameId = By.frameId, Py.previousViewProjection.Coy(Py.currentViewProjection)), bb.setMatrix("previousWorld", Py.previousWorldMatrices[Wy.uniqueId]), bb.setMatrix("previousViewProjection", Py.previousViewProjection), Wy.useBones && Wy.computeBonesUsingShaders && Wy.skeleton) {
            const yb = Wy.skeleton;
            if (!yb.isUsingTextureForMatrices || -1 === bb.getUniformIndex("boneTextureInfo")) {
              const Uy = yb.getTransformMatrices(Wy);
              Uy && (Py.previousBones[Wy.uniqueId] || (Py.previousBones[Wy.uniqueId] = Uy.slice()), bb.setMatrices("mPreviousBones", Py.previousBones[Wy.uniqueId]), Py.previousBones[Wy.uniqueId].set(Uy))
            }
          }
        }
      }
    }
    cb.GeometryTextureDescriptions = [{
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
    }], cb._Configurations = {}
  },
  38862: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => ey,
      d: () => sy
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(38350),
      Zy = Wy(38319);
    const cb = new RegExp("^([gimus]+)!");
    class Py {
      constructor(yb) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = yb, this._scene = yb.kWy(), this._engine = this._scene.xh()
      }
      _addPlugin(yb) {
        for (let Uy = 0; Uy < this._plugins.length; ++Uy)
          if (this._plugins[Uy].name === yb.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !yb.isCompatible(this._material.shaderLanguage)) throw `The plugin "${yb.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const bb = yb.getClassName();
        Py._MaterialPluginClassToMainDefine[bb] || (Py._MaterialPluginClassToMainDefine[bb] = "MATERIALPLUGIN_" + ++Py._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (yb, bb) => this._handlePluginEvent(yb, bb), this._plugins.push(yb), this._plugins.sort(((yb, bb) => yb.priority - bb.priority)), this._codeInjectionPoints = {};
        const Wy = {};
        Wy[Py._MaterialPluginClassToMainDefine[bb]] = {
          type: "boolean",
          default: !0
        };
        for (const Uy of this._plugins) Uy.collectDefines(Wy), this._collectPointNames("vertex", Uy.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Uy.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = Wy, !0
      }
      _activatePlugin(yb) {
        -1 === this._activePlugins.indexOf(yb) && (this._activePlugins.push(yb), this._activePlugins.sort(((yb, bb) => yb.priority - bb.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), yb.registerForExtraEvents && (this._activePluginsForExtraEvents.push(yb), this._activePluginsForExtraEvents.sort(((yb, bb) => yb.priority - bb.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(yb) {
        for (let bb = 0; bb < this._plugins.length; ++bb)
          if (this._plugins[bb].name === yb) return this._plugins[bb];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(yb) {
        let bb = !0;
        for (const Wy of this._activePlugins) bb = bb && Wy.isReadyForSubMesh(yb.defines, this._scene, this._engine, yb.subMesh);
        yb.isReadyForSubMesh = bb
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(yb) {
        for (const bb of this._activePlugins) bb.prepareDefinesBeforeAttributes(yb.defines, this._scene, yb.mesh)
      }
      _handlePluginEventPrepareDefines(yb) {
        for (const bb of this._activePlugins) bb.prepareDefines(yb.defines, this._scene, yb.mesh)
      }
      _handlePluginEventHardBindForSubMesh(yb) {
        for (const bb of this._activePluginsForExtraEvents) bb.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, yb.subMesh)
      }
      _handlePluginEventBindForSubMesh(yb) {
        for (const bb of this._activePlugins) bb.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, yb.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(yb) {
        let bb = !1;
        for (const Wy of this._activePluginsForExtraEvents)
          if (bb = Wy.hasRenderTargetTextures(), bb) break;
        yb.hasRenderTargetTextures = bb
      }
      _handlePluginEventFillRenderTargetTextures(yb) {
        for (const bb of this._activePluginsForExtraEvents) bb.fillRenderTargetTextures(yb.renderTargets)
      }
      _handlePluginEvent(yb, bb) {
        switch (yb) {
          case 512: {
            const yb = bb;
            for (const bb of this._activePlugins) bb.getActiveTextures(yb.activeTextures);
            break
          }
          case 256: {
            const yb = bb;
            for (const bb of this._activePlugins) bb.getAnimatables(yb.animatables);
            break
          }
          case 1024: {
            const yb = bb;
            let Wy = !1;
            for (const bb of this._activePlugins)
              if (Wy = bb.hasTexture(yb.texture), Wy) break;
            yb.hasTexture = Wy;
            break
          }
          case 2: {
            const yb = bb;
            for (const bb of this._plugins) bb.dispose(yb.forceDisposeTextures);
            break
          }
          case 4:
            bb.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const yb = bb;
            for (const bb of this._activePlugins) yb.fallbackRank = bb.addFallbacks(yb.defines, yb.fallbacks, yb.fallbackRank), bb.getAttributes(yb.attributes, this._scene, yb.mesh);
            this._uniformList.length > 0 && yb.uniforms.push(...this._uniformList), this._samplerList.length > 0 && yb.samplers.push(...this._samplerList), this._uboList.length > 0 && yb.uniformBuffersNames.push(...this._uboList), yb.customCode = this._injectCustomCode(yb, yb.customCode);
            break
          }
          case 8: {
            const yb = bb;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const Wy = 1 === this._material.shaderLanguage;
            for (const bb of this._plugins) {
              const Uy = bb.getUniforms(this._material.shaderLanguage);
              if (Uy) {
                if (Uy.ubo)
                  for (const bb of Uy.ubo) {
                    if (bb.size && bb.type) {
                      const Uy = bb.arraySize ?? 0;
                      if (yb.ubo.addUniform(bb.name, bb.size, Uy), Wy) {
                        let yb;
                        switch (bb.type) {
                          case "mat4":
                            yb = "mat4x4f";
                            break;
                          case "float":
                            yb = "f32";
                            break;
                          default:
                            yb = `${bb.type}f`
                        }
                        this._uboDeclaration += Uy > 0 ? `uniform ${bb.name}: array<${yb}, ${Uy}>;\n` : `uniform ${bb.name}: ${yb};\n`
                      } else this._uboDeclaration += `${bb.type} ${bb.name}${Uy>0?`[${Uy}]`:""};\n`
                    }
                    this._uniformList.push(bb.name)
                  }
                Uy.vertex && (this._vertexDeclaration += Uy.vertex + "\n"), Uy.fragment && (this._fragmentDeclaration += Uy.fragment + "\n"), Uy.externalUniforms && this._uniformList.push(...Uy.externalUniforms)
              }
              bb.getSamplers(this._samplerList), bb.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(yb, bb) {
        if (bb)
          for (const Wy in bb) this._codeInjectionPoints[yb] || (this._codeInjectionPoints[yb] = {}), this._codeInjectionPoints[yb][Wy] = !0
      }
      _injectCustomCode(yb, bb) {
        return (Wy, Uy) => {
          bb && (Uy = bb(Wy, Uy)), this._uboDeclaration && (Uy = Uy.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Uy = Uy.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (Uy = Uy.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const hy = this._codeInjectionPoints?.[Wy];
          if (!hy) return Uy;
          let Py = null;
          for (let bb in hy) {
            let hy = "";
            for (const Uy of this._activePlugins) {
              const cb = this._material.shaderLanguage;
              let oy = Uy.getCustomCode(Wy, cb)?.[bb];
              oy && (Uy.resolveIncludes && (null === Py && (Py = {
                defines: [],
                indexParameters: yb.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: Zy.e.GetShadersRepository(cb),
                includesShadersStore: Zy.e.GetIncludesShadersStore(cb),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                Aoy: this._engine.Aoy,
                processCodeAfterIncludes: void 0
              }), Py.isFragment = "fragment" === Wy, (0, fy.d)(oy, Py, (yb => oy = yb))), hy += oy + "\n")
            }
            if (hy.length > 0)
              if ("!" === bb.charAt(0)) {
                bb = bb.substring(1);
                let yb = "g";
                if ("!" === bb.charAt(0)) yb = "", bb = bb.substring(1);
                else {
                  const Wy = cb.exec(bb);
                  Wy && Wy.length >= 2 && (yb = Wy[1], bb = bb.substring(yb.length + 1))
                }
                yb.indexOf("g") < 0 && (yb += "g");
                const Wy = new RegExp(bb, yb);
                let fy = Wy.exec(Uy);
                for (; null !== fy;) {
                  const {
                    index: yb
                  } = fy, bb = oy(hy, fy);
                  Uy = Uy.substring(0, yb) + bb + Uy.substring(yb + fy[0].length), Wy.lastIndex = yb + bb.length, fy = Wy.exec(Uy)
                }
              } else {
                const yb = "#define " + bb;
                Uy = Uy.replace(yb, "\n" + hy + "\n" + yb)
              }
          }
          return Uy
        }
      }
    }
    Py._MaterialPluginClassToMainDefine = {}, Py._MaterialPluginCounter = 0;

    function oy(yb, bb) {
      return yb.replace(/\$(\d+)/g, ((yb, Wy) => {
        const Uy = Number(Wy);
        return Uy < bb.length ? bb[Uy] : ""
      }))
    }
    var By = Wy(38485),
      Ky = Wy(35909);
    let ey = (() => {
        var yb;
        let bb, Wy, fy, Zy, cb = [],
          oy = [],
          Ky = [],
          ey = [],
          qb = [],
          sy = [],
          Sy = [],
          Ey = [];
        return yb = class {
          isCompatible(yb) {
            return 0 === yb
          }
          _enable(yb) {
            yb && this._pluginManager._activatePlugin(this)
          }
          constructor(yb, bb, Wy, hy) {
            let fy = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              Zy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              By = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, Uy.l)(this, cb, void 0), this.priority = ((0, Uy.l)(this, oy), (0, Uy.l)(this, Ky, 500)), this.resolveIncludes = ((0, Uy.l)(this, ey), (0, Uy.l)(this, qb, !1)), this.registerForExtraEvents = ((0, Uy.l)(this, sy), (0, Uy.l)(this, Sy, !1)), this.doNotSerialize = ((0, Uy.l)(this, Ey), !1), this._material = yb, this.name = bb, this.priority = Wy, this.resolveIncludes = By, yb.pluginManager || (yb.pluginManager = new Py(yb), yb.Nby.add((() => {
              yb.pluginManager = void 0
            }))), this._pluginDefineNames = hy, this._pluginManager = yb.pluginManager, fy && this._pluginManager._addPlugin(this), Zy && this._enable(!0), this.markAllDefinesAsDirty = yb._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(yb, bb, Wy, Uy) {
            return !0
          }
          hardBindForSubMesh(yb, bb, Wy, Uy) {}
          bindForSubMesh(yb, bb, Wy, Uy) {}
          dispose(yb) {}
          getCustomCode(yb) {
            return null
          }
          collectDefines(yb) {
            if (this._pluginDefineNames)
              for (const bb of Object.keys(this._pluginDefineNames)) {
                if ("_" === bb[0]) continue;
                const Wy = typeof this._pluginDefineNames[bb];
                yb[bb] = {
                  type: "number" === Wy ? "number" : "string" === Wy ? "string" : "boolean" === Wy ? "boolean" : "object",
                  default: this._pluginDefineNames[bb]
                }
              }
          }
          prepareDefinesBeforeAttributes(yb, bb, Wy) {}
          prepareDefines(yb, bb, Wy) {}
          hasTexture(yb) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(yb) {}
          getActiveTextures(yb) {}
          getAnimatables(yb) {}
          addFallbacks(yb, bb, Wy) {
            return Wy
          }
          getSamplers(yb) {}
          getAttributes(yb, bb, Wy) {}
          getUniformBuffersNames(yb) {}
          getUniforms() {
            return {}
          }
          copyTo(yb) {
            By.c.Clone((() => yb), this)
          }
          serialize() {
            return By.c.Serialize(this)
          }
          parse(yb, bb, Wy) {
            By.c.Parse((() => this), yb, bb, Wy)
          }
        }, (() => {
          const Py = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          bb = [(0, hy.T)()], Wy = [(0, hy.T)()], fy = [(0, hy.T)()], Zy = [(0, hy.T)()], (0, Uy.j)(null, null, bb, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: yb => "name" in yb,
              get: yb => yb.name,
              set: (yb, bb) => {
                yb.name = bb
              }
            },
            metadata: Py
          }, cb, oy), (0, Uy.j)(null, null, Wy, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: yb => "priority" in yb,
              get: yb => yb.priority,
              set: (yb, bb) => {
                yb.priority = bb
              }
            },
            metadata: Py
          }, Ky, ey), (0, Uy.j)(null, null, fy, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: yb => "resolveIncludes" in yb,
              get: yb => yb.resolveIncludes,
              set: (yb, bb) => {
                yb.resolveIncludes = bb
              }
            },
            metadata: Py
          }, qb, sy), (0, Uy.j)(null, null, Zy, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: yb => "registerForExtraEvents" in yb,
              get: yb => yb.registerForExtraEvents,
              set: (yb, bb) => {
                yb.registerForExtraEvents = bb
              }
            },
            metadata: Py
          }, Sy, Ey), Py && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Py
          })
        })(), yb
      })(),
      qb = !1;

    function sy() {
      qb || (qb = !0, (0, Ky.e)("BABYLON.MaterialPluginBase", ey))
    }
  },
  38761: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    class Uy {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(yb) {
        yb.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(yb) {}
      bindForSubMesh(yb, bb, Wy, Uy, hy) {
        if (bb.prePassRenderer && bb.prePassRenderer.enabled && bb.prePassRenderer.currentRTisSceneRT && (-1 !== bb.prePassRenderer.getIndex(2) || -1 !== bb.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[Wy.uniqueId] || (this.previousWorldMatrices[Wy.uniqueId] = Uy.clone()), this.previousViewProjection || (this.previousViewProjection = bb.getTransformMatrix().clone(), this.currentViewProjection = bb.getTransformMatrix().clone());
          const hy = bb.xh();
          this.currentViewProjection.updateFlag !== bb.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = hy.frameId, this.previousViewProjection.Coy(this.currentViewProjection), this.currentViewProjection.Coy(bb.getTransformMatrix())) : this._lastUpdateFrameId !== hy.frameId && (this._lastUpdateFrameId = hy.frameId, this.previousViewProjection.Coy(this.currentViewProjection)), yb.setMatrix("previousWorld", this.previousWorldMatrices[Wy.uniqueId]), yb.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[Wy.uniqueId] = Uy.clone()
        }
      }
    }
  },
  38887: (yb, bb, Wy) => {
    function Uy(yb) {
      return class extends yb {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    Wy.d(bb, {
      b: () => Uy
    })
  },
  38746: (yb, bb, Wy) => {
    Wy.d(bb, {
      StandardMaterial: () => Uy.f
    });
    var Uy = Wy(38752);
    (0, Uy.d)()
  },
  38752: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Hy,
      f: () => uy
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(38587),
      Zy = Wy(38569),
      cb = Wy(35919),
      Py = Wy(38620),
      oy = Wy(38761),
      By = Wy(38770),
      Ky = Wy(38594),
      ey = Wy(38782),
      qb = Wy(38777),
      sy = Wy(38841),
      Sy = Wy(38836),
      Ey = Wy(38846),
      ly = Wy(38853),
      mb = Wy(38830),
      Cy = Wy(38865),
      Ty = Wy(38824),
      Vy = Wy(38485),
      Jy = Wy(38870),
      gb = Wy(38877),
      Gy = Wy(38882),
      Oy = Wy(38887),
      Ry = Wy(38895),
      vb = Wy(35909),
      ib = Wy(38347);
    const My = {
      effect: null,
      subMesh: null
    };
    class Yy extends((0, Oy.b)((0, Gy.b)(qb.d))) {}
    class Xy extends((0, By.g)(Yy)) {
      constructor(yb) {
        super(yb), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class ny extends((0, Ry.e)(sy.d)) {}
    let uy = (() => {
        var yb, bb, By, qb, Gy, Oy, Ry, vb, ib, Yy, uy, rb, Hy, ab, Fy, py, Ly, Qy, jb, Dy, tb, wy, kb, Ny, zb, Iy, xb, Ay, dy, yW, bW, Wb, Ub;
        let hb, fb, Zb, cW, Pb, ob, Bb, Kb, eb, qW, sb, Sb, Eb, lb, mW, Cb, Tb, Vb, Jb, gW, Gb, Ob, Rb, vW, iW, Mb, Yb, Xb, nb, ub, rW, Hb, aW, Fb, pb, Lb, Qb, jW, Db, tW, wb, kW, Nb, zW, Ib, xW, Ab, db, yU, bU, WW, UW, hW, fW, ZW, cU, PW, oW, BW, KW, eW, qU, sW, SW, EW, lW, mU, CW, TW, VW, JW, gU, GW, OW = ny,
          RW = [],
          vU = [],
          iU = [],
          MW = [],
          YW = [],
          XW = [],
          nW = [],
          uW = [],
          rU = [],
          HW = [],
          aU = [],
          FW = [],
          pW = [],
          LW = [],
          QW = [],
          jU = [],
          DW = [],
          tU = [],
          wW = [],
          kU = [],
          NW = [],
          zU = [],
          IW = [],
          xU = [],
          AW = [],
          dW = [],
          yh = [],
          bh = [],
          WU = [],
          UU = [],
          hU = [],
          fU = [],
          ZU = [],
          ch = [],
          PU = [],
          oU = [],
          BU = [],
          KU = [],
          eU = [],
          qh = [],
          sU = [],
          SU = [],
          EU = [],
          lU = [],
          mh = [],
          CU = [],
          TU = [],
          VU = [],
          JU = [],
          gh = [],
          GU = [],
          OU = [],
          RU = [],
          vh = [],
          ih = [],
          MU = [],
          YU = [],
          XU = [],
          nU = [],
          uU = [],
          rh = [],
          HU = [],
          ah = [],
          FU = [],
          pU = [],
          LU = [],
          QU = [],
          jh = [],
          DU = [],
          th = [],
          wU = [],
          kh = [],
          NU = [],
          zh = [],
          IU = [],
          xh = [],
          AU = [],
          dU = [],
          yf = [],
          bf = [],
          Wh = [],
          Uh = [],
          hh = [],
          fh = [],
          Zh = [],
          cf = [],
          Ph = [],
          oh = [],
          Bh = [],
          Kh = [],
          eh = [],
          qf = [],
          sh = [],
          Sh = [],
          Eh = [],
          lh = [],
          mf = [],
          Ch = [],
          Th = [],
          Vh = [],
          Jh = [],
          gf = [],
          Gh = [],
          Oh = [],
          Rh = [],
          vf = [],
          Mh = [],
          Yh = [],
          Xh = [],
          nh = [],
          uh = [],
          rf = [],
          Hh = [],
          af = [],
          Fh = [],
          ph = [],
          Lh = [],
          Qh = [],
          jf = [],
          Dh = [],
          tf = [],
          wh = [],
          kf = [],
          Nh = [],
          zf = [],
          Ih = [],
          xf = [],
          Ah = [],
          dh = [],
          yZ = [],
          bZ = [],
          Wf = [],
          Uf = [],
          hf = [],
          ff = [],
          Zf = [],
          cZ = [],
          Pf = [],
          of = [],
          Bf = [],
          Kf = [],
          ef = [],
          qZ = [],
          sf = [],
          Sf = [],
          Ef = [];
        return yb = class extends OW {
          get diffuseTexture() {
            return (0, Uy.e)(this, bb, "f")
          }
          set diffuseTexture(yb) {
            (0, Uy.f)(this, bb, yb, "f")
          }
          get ambientTexture() {
            return (0, Uy.e)(this, By, "f")
          }
          set ambientTexture(yb) {
            (0, Uy.f)(this, By, yb, "f")
          }
          get opacityTexture() {
            return (0, Uy.e)(this, qb, "f")
          }
          set opacityTexture(yb) {
            (0, Uy.f)(this, qb, yb, "f")
          }
          get reflectionTexture() {
            return (0, Uy.e)(this, Gy, "f")
          }
          set reflectionTexture(yb) {
            (0, Uy.f)(this, Gy, yb, "f")
          }
          get emissiveTexture() {
            return (0, Uy.e)(this, Oy, "f")
          }
          set emissiveTexture(yb) {
            (0, Uy.f)(this, Oy, yb, "f")
          }
          get specularTexture() {
            return (0, Uy.e)(this, Ry, "f")
          }
          set specularTexture(yb) {
            (0, Uy.f)(this, Ry, yb, "f")
          }
          get bumpTexture() {
            return (0, Uy.e)(this, vb, "f")
          }
          set bumpTexture(yb) {
            (0, Uy.f)(this, vb, yb, "f")
          }
          get lightmapTexture() {
            return (0, Uy.e)(this, ib, "f")
          }
          set lightmapTexture(yb) {
            (0, Uy.f)(this, ib, yb, "f")
          }
          get refractionTexture() {
            return (0, Uy.e)(this, Yy, "f")
          }
          set refractionTexture(yb) {
            (0, Uy.f)(this, Yy, yb, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, Uy.e)(this, uy, "f")
          }
          set useAlphaFromDiffuseTexture(yb) {
            (0, Uy.f)(this, uy, yb, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, Uy.e)(this, rb, "f")
          }
          set useEmissiveAsIllumination(yb) {
            (0, Uy.f)(this, rb, yb, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, Uy.e)(this, Hy, "f")
          }
          set linkEmissiveWithDiffuse(yb) {
            (0, Uy.f)(this, Hy, yb, "f")
          }
          get useSpecularOverAlpha() {
            return (0, Uy.e)(this, ab, "f")
          }
          set useSpecularOverAlpha(yb) {
            (0, Uy.f)(this, ab, yb, "f")
          }
          get useReflectionOverAlpha() {
            return (0, Uy.e)(this, Fy, "f")
          }
          set useReflectionOverAlpha(yb) {
            (0, Uy.f)(this, Fy, yb, "f")
          }
          get disableLighting() {
            return (0, Uy.e)(this, py, "f")
          }
          set disableLighting(yb) {
            (0, Uy.f)(this, py, yb, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, Uy.e)(this, Ly, "f")
          }
          set useObjectSpaceNormalMap(yb) {
            (0, Uy.f)(this, Ly, yb, "f")
          }
          get useParallax() {
            return (0, Uy.e)(this, Qy, "f")
          }
          set useParallax(yb) {
            (0, Uy.f)(this, Qy, yb, "f")
          }
          get useParallaxOcclusion() {
            return (0, Uy.e)(this, jb, "f")
          }
          set useParallaxOcclusion(yb) {
            (0, Uy.f)(this, jb, yb, "f")
          }
          get roughness() {
            return (0, Uy.e)(this, Dy, "f")
          }
          set roughness(yb) {
            (0, Uy.f)(this, Dy, yb, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, Uy.e)(this, tb, "f")
          }
          set useLightmapAsShadowmap(yb) {
            (0, Uy.f)(this, tb, yb, "f")
          }
          get diffuseFresnelParameters() {
            return (0, Uy.e)(this, wy, "f")
          }
          set diffuseFresnelParameters(yb) {
            (0, Uy.f)(this, wy, yb, "f")
          }
          get opacityFresnelParameters() {
            return (0, Uy.e)(this, kb, "f")
          }
          set opacityFresnelParameters(yb) {
            (0, Uy.f)(this, kb, yb, "f")
          }
          get reflectionFresnelParameters() {
            return (0, Uy.e)(this, Ny, "f")
          }
          set reflectionFresnelParameters(yb) {
            (0, Uy.f)(this, Ny, yb, "f")
          }
          get refractionFresnelParameters() {
            return (0, Uy.e)(this, zb, "f")
          }
          set refractionFresnelParameters(yb) {
            (0, Uy.f)(this, zb, yb, "f")
          }
          get emissiveFresnelParameters() {
            return (0, Uy.e)(this, Iy, "f")
          }
          set emissiveFresnelParameters(yb) {
            (0, Uy.f)(this, Iy, yb, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, Uy.e)(this, xb, "f")
          }
          set useReflectionFresnelFromSpecular(yb) {
            (0, Uy.f)(this, xb, yb, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, Uy.e)(this, Ay, "f")
          }
          set useGlossinessFromSpecularMapAlpha(yb) {
            (0, Uy.f)(this, Ay, yb, "f")
          }
          get maxSimultaneousLights() {
            return (0, Uy.e)(this, dy, "f")
          }
          set maxSimultaneousLights(yb) {
            (0, Uy.f)(this, dy, yb, "f")
          }
          get invertNormalMapX() {
            return (0, Uy.e)(this, yW, "f")
          }
          set invertNormalMapX(yb) {
            (0, Uy.f)(this, yW, yb, "f")
          }
          get invertNormalMapY() {
            return (0, Uy.e)(this, bW, "f")
          }
          set invertNormalMapY(yb) {
            (0, Uy.f)(this, bW, yb, "f")
          }
          get twoSidedLighting() {
            return (0, Uy.e)(this, Wb, "f")
          }
          set twoSidedLighting(yb) {
            (0, Uy.f)(this, Wb, yb, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Uy.e)(this, Ub, "f")
          }
          set applyDecalMapAfterDetailMap(yb) {
            (0, Uy.f)(this, Ub, yb, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(Wy, hy) {
            super(Wy, hy, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || yb.ForceGLSL), this._diffuseTexture = (0, Uy.l)(this, RW, null), bb.set(this, ((0, Uy.l)(this, vU), (0, Uy.l)(this, iU, void 0))), this._ambientTexture = ((0, Uy.l)(this, MW), (0, Uy.l)(this, YW, null)), By.set(this, ((0, Uy.l)(this, XW), (0, Uy.l)(this, nW, void 0))), this._opacityTexture = ((0, Uy.l)(this, uW), (0, Uy.l)(this, rU, null)), qb.set(this, ((0, Uy.l)(this, HW), (0, Uy.l)(this, aU, void 0))), this._reflectionTexture = ((0, Uy.l)(this, FW), (0, Uy.l)(this, pW, null)), Gy.set(this, ((0, Uy.l)(this, LW), (0, Uy.l)(this, QW, void 0))), this._emissiveTexture = ((0, Uy.l)(this, jU), (0, Uy.l)(this, DW, null)), Oy.set(this, ((0, Uy.l)(this, tU), (0, Uy.l)(this, wW, void 0))), this._specularTexture = ((0, Uy.l)(this, kU), (0, Uy.l)(this, NW, null)), Ry.set(this, ((0, Uy.l)(this, zU), (0, Uy.l)(this, IW, void 0))), this._bumpTexture = ((0, Uy.l)(this, xU), (0, Uy.l)(this, AW, null)), vb.set(this, ((0, Uy.l)(this, dW), (0, Uy.l)(this, yh, void 0))), this._lightmapTexture = ((0, Uy.l)(this, bh), (0, Uy.l)(this, WU, null)), ib.set(this, ((0, Uy.l)(this, UU), (0, Uy.l)(this, hU, void 0))), this._refractionTexture = ((0, Uy.l)(this, fU), (0, Uy.l)(this, ZU, null)), Yy.set(this, ((0, Uy.l)(this, ch), (0, Uy.l)(this, PU, void 0))), this.ambientColor = ((0, Uy.l)(this, oU), (0, Uy.l)(this, BU, new cb.d(0, 0, 0))), this.diffuseColor = ((0, Uy.l)(this, KU), (0, Uy.l)(this, eU, new cb.d(1, 1, 1))), this.specularColor = ((0, Uy.l)(this, qh), (0, Uy.l)(this, sU, new cb.d(1, 1, 1))), this.emissiveColor = ((0, Uy.l)(this, SU), (0, Uy.l)(this, EU, new cb.d(0, 0, 0))), this.specularPower = ((0, Uy.l)(this, lU), (0, Uy.l)(this, mh, 64)), this._useAlphaFromDiffuseTexture = ((0, Uy.l)(this, CU), (0, Uy.l)(this, TU, !1)), uy.set(this, ((0, Uy.l)(this, VU), (0, Uy.l)(this, JU, void 0))), this._useEmissiveAsIllumination = ((0, Uy.l)(this, gh), (0, Uy.l)(this, GU, !1)), rb.set(this, ((0, Uy.l)(this, OU), (0, Uy.l)(this, RU, void 0))), this._linkEmissiveWithDiffuse = ((0, Uy.l)(this, vh), (0, Uy.l)(this, ih, !1)), Hy.set(this, ((0, Uy.l)(this, MU), (0, Uy.l)(this, YU, void 0))), this._useSpecularOverAlpha = ((0, Uy.l)(this, XU), (0, Uy.l)(this, nU, !1)), ab.set(this, ((0, Uy.l)(this, uU), (0, Uy.l)(this, rh, void 0))), this._useReflectionOverAlpha = ((0, Uy.l)(this, HU), (0, Uy.l)(this, ah, !1)), Fy.set(this, ((0, Uy.l)(this, FU), (0, Uy.l)(this, pU, void 0))), this._disableLighting = ((0, Uy.l)(this, LU), (0, Uy.l)(this, QU, !1)), py.set(this, ((0, Uy.l)(this, jh), (0, Uy.l)(this, DU, void 0))), this._useObjectSpaceNormalMap = ((0, Uy.l)(this, th), (0, Uy.l)(this, wU, !1)), Ly.set(this, ((0, Uy.l)(this, kh), (0, Uy.l)(this, NU, void 0))), this._useParallax = ((0, Uy.l)(this, zh), (0, Uy.l)(this, IU, !1)), Qy.set(this, ((0, Uy.l)(this, xh), (0, Uy.l)(this, AU, void 0))), this._useParallaxOcclusion = ((0, Uy.l)(this, dU), (0, Uy.l)(this, yf, !1)), jb.set(this, ((0, Uy.l)(this, bf), (0, Uy.l)(this, Wh, void 0))), this.parallaxScaleBias = ((0, Uy.l)(this, Uh), (0, Uy.l)(this, hh, .05)), this._roughness = ((0, Uy.l)(this, fh), (0, Uy.l)(this, Zh, 0)), Dy.set(this, ((0, Uy.l)(this, cf), (0, Uy.l)(this, Ph, void 0))), this.indexOfRefraction = ((0, Uy.l)(this, oh), (0, Uy.l)(this, Bh, .98)), this.invertRefractionY = ((0, Uy.l)(this, Kh), (0, Uy.l)(this, eh, !0)), this.alphaCutOff = ((0, Uy.l)(this, qf), (0, Uy.l)(this, sh, .4)), this._useLightmapAsShadowmap = ((0, Uy.l)(this, Sh), (0, Uy.l)(this, Eh, !1)), tb.set(this, ((0, Uy.l)(this, lh), (0, Uy.l)(this, mf, void 0))), this._diffuseFresnelParameters = ((0, Uy.l)(this, Ch), (0, Uy.l)(this, Th, void 0)), wy.set(this, ((0, Uy.l)(this, Vh), (0, Uy.l)(this, Jh, void 0))), this._opacityFresnelParameters = ((0, Uy.l)(this, gf), (0, Uy.l)(this, Gh, void 0)), kb.set(this, ((0, Uy.l)(this, Oh), (0, Uy.l)(this, Rh, void 0))), this._reflectionFresnelParameters = ((0, Uy.l)(this, vf), (0, Uy.l)(this, Mh, void 0)), Ny.set(this, ((0, Uy.l)(this, Yh), (0, Uy.l)(this, Xh, void 0))), this._refractionFresnelParameters = ((0, Uy.l)(this, nh), (0, Uy.l)(this, uh, void 0)), zb.set(this, ((0, Uy.l)(this, rf), (0, Uy.l)(this, Hh, void 0))), this._emissiveFresnelParameters = ((0, Uy.l)(this, af), (0, Uy.l)(this, Fh, void 0)), Iy.set(this, ((0, Uy.l)(this, ph), (0, Uy.l)(this, Lh, void 0))), this._useReflectionFresnelFromSpecular = ((0, Uy.l)(this, Qh), (0, Uy.l)(this, jf, !1)), xb.set(this, ((0, Uy.l)(this, Dh), (0, Uy.l)(this, tf, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, Uy.l)(this, wh), (0, Uy.l)(this, kf, !1)), Ay.set(this, ((0, Uy.l)(this, Nh), (0, Uy.l)(this, zf, void 0))), this._maxSimultaneousLights = ((0, Uy.l)(this, Ih), (0, Uy.l)(this, xf, 4)), dy.set(this, ((0, Uy.l)(this, Ah), (0, Uy.l)(this, dh, void 0))), this._invertNormalMapX = ((0, Uy.l)(this, yZ), (0, Uy.l)(this, bZ, !1)), yW.set(this, ((0, Uy.l)(this, Wf), (0, Uy.l)(this, Uf, void 0))), this._invertNormalMapY = ((0, Uy.l)(this, hf), (0, Uy.l)(this, ff, !1)), bW.set(this, ((0, Uy.l)(this, Zf), (0, Uy.l)(this, cZ, void 0))), this._twoSidedLighting = ((0, Uy.l)(this, Pf), (0, Uy.l)(this, of, !1)), Wb.set(this, ((0, Uy.l)(this, Bf), (0, Uy.l)(this, Kf, void 0))), this._applyDecalMapAfterDetailMap = ((0, Uy.l)(this, ef), (0, Uy.l)(this, qZ, !1)), Ub.set(this, ((0, Uy.l)(this, sf), (0, Uy.l)(this, Sf, void 0))), this._vertexPullingMetadata = ((0, Uy.l)(this, Ef), null), this._renderTargets = new fy.e(16), this._globalAmbientColor = new cb.d(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new ly.d(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new oy.b, this.getRenderTargetTextures = () => (this._renderTargets.reset(), yb.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), yb.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(yb.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(yb.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === ey.e.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== ey.e.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(bb, Wy) {
            let Uy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const hy = Wy._drawWrapper;
            if (hy.effect && this.isFrozen && hy._wasPreviouslyReady && hy._wasPreviouslyUsingInstances === Uy) return !0;
            Wy.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), Wy.materialDefines = new Xy(this._eventInfo.defineNames));
            const fy = this.kWy(),
              Zy = Wy.materialDefines;
            if (this._isReadyForSubMesh(Wy)) return !0;
            const cb = fy.xh();
            if (Zy._needNormals = (0, Ty.Y)(fy, bb, Zy, !0, this._maxSimultaneousLights, this._disableLighting), !(0, Ty.b)(fy, bb, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, Ty.db)(fy, Zy);
            const By = this.needAlphaBlendingForMesh(bb) && this.kWy().useOrderIndependentTransparency;
            if ((0, Ty.ib)(fy, Zy, this.canRenderToMRT && !By), (0, Ty.gb)(fy, Zy, By), gb.c.PrepareDefines(cb.currentRenderPassId, bb, Zy), Zy._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Zy._needUVs = !1;
              for (let yb = 1; yb <= 6; ++yb) Zy["MAINUV" + yb] = !1;
              if (fy.texturesEnabled) {
                if (Zy.DIFFUSEDIRECTUV = 0, Zy.BUMPDIRECTUV = 0, Zy.AMBIENTDIRECTUV = 0, Zy.OPACITYDIRECTUV = 0, Zy.EMISSIVEDIRECTUV = 0, Zy.SPECULARDIRECTUV = 0, Zy.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && yb.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, Ty.$)(this._diffuseTexture, Zy, "DIFFUSE")
                } else Zy.DIFFUSE = !1;
                if (this._ambientTexture && yb.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, Ty.$)(this._ambientTexture, Zy, "AMBIENT")
                } else Zy.AMBIENT = !1;
                if (this._opacityTexture && yb.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, Ty.$)(this._opacityTexture, Zy, "OPACITY"), Zy.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else Zy.OPACITY = !1;
                if (this._reflectionTexture && yb.ReflectionTextureEnabled ? (Zy.ROUGHNESS = this._roughness > 0, Zy.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (Zy.ROUGHNESS = !1, Zy.REFLECTIONOVERALPHA = !1), !(0, Ty.X)(fy, this._reflectionTexture, Zy)) return !1;
                if (this._emissiveTexture && yb.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, Ty.$)(this._emissiveTexture, Zy, "EMISSIVE")
                } else Zy.EMISSIVE = !1;
                if (this._lightmapTexture && yb.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, Ty.$)(this._lightmapTexture, Zy, "LIGHTMAP"), Zy.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Zy.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else Zy.LIGHTMAP = !1;
                if (this._specularTexture && yb.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, Ty.$)(this._specularTexture, Zy, "SPECULAR"), Zy.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else Zy.SPECULAR = !1;
                if (fy.xh().getCaps().standardDerivatives && this._bumpTexture && yb.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, Ty.$)(this._bumpTexture, Zy, "BUMP"), Zy.PARALLAX = this._useParallax, Zy.PARALLAX_RHS = fy.useRightHandedSystem, Zy.PARALLAXOCCLUSION = this._useParallaxOcclusion, Zy.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else Zy.BUMP = !1, Zy.PARALLAX = !1, Zy.PARALLAX_RHS = !1, Zy.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && yb.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  Zy._needUVs = !0, Zy.REFRACTION = !0, Zy.REFRACTIONMAP_3D = this._refractionTexture.isCube, Zy.RGBDREFRACTION = this._refractionTexture.isRGBD, Zy.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else Zy.REFRACTION = !1;
                Zy.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else Zy.DIFFUSE = !1, Zy.AMBIENT = !1, Zy.OPACITY = !1, Zy.REFLECTION = !1, Zy.EMISSIVE = !1, Zy.LIGHTMAP = !1, Zy.BUMP = !1, Zy.REFRACTION = !1;
              Zy.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), Zy.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, Zy.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, Zy.SPECULAROVERALPHA = this._useSpecularOverAlpha, Zy.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Zy.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, Zy.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(bb), Zy.TEXTURE_REPETITION_MODE = cb.version > 1 || cb.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Zy, this._eventInfo.subMesh = Wy, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Zy._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(Zy), Zy.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, Zy.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (Zy._areFresnelDirty && (yb.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (Zy.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, Zy.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, Zy.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, Zy.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, Zy.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, Zy.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, Zy._needNormals = !0, Zy.FRESNEL = !0) : Zy.FRESNEL = !1), Zy.AREALIGHTUSED || Zy.CLUSTLIGHT_BATCH)
              for (let yb = 0; yb < bb.lightSources.length; yb++)
                if (!bb.lightSources[yb]._isReady()) return !1;
            (0, Ty.cb)(bb, fy, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(bb), Zy, this._applyDecalMapAfterDetailMap, this._useVertexPulling, Wy.getRenderingMesh(), this._isVertexOutputInvariant), (0, Ty.U)(fy, cb, this, Zy, Uy, null, Wy.getRenderingMesh().hasThinInstances), this._eventInfo.defines = Zy, this._eventInfo.mesh = bb, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Ty.R)(bb, Zy, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let ey = !1;
            if (Zy.isDirty) {
              const Uy = Zy._areLightsDisposed;
              Zy.markAsProcessed();
              const hy = new Ey.c;
              Zy.REFLECTION && hy.addFallback(0, "REFLECTION"), Zy.SPECULAR && hy.addFallback(0, "SPECULAR"), Zy.BUMP && hy.addFallback(0, "BUMP"), Zy.PARALLAX && hy.addFallback(1, "PARALLAX"), Zy.PARALLAX_RHS && hy.addFallback(1, "PARALLAX_RHS"), Zy.PARALLAXOCCLUSION && hy.addFallback(0, "PARALLAXOCCLUSION"), Zy.SPECULAROVERALPHA && hy.addFallback(0, "SPECULAROVERALPHA"), Zy.FOG && hy.addFallback(1, "FOG"), Zy.POINTSIZE && hy.addFallback(0, "POINTSIZE"), Zy.LOGARITHMICDEPTH && hy.addFallback(0, "LOGARITHMICDEPTH"), (0, Ty.D)(Zy, hy, this._maxSimultaneousLights), Zy.SPECULARTERM && hy.addFallback(0, "SPECULARTERM"), Zy.DIFFUSEFRESNEL && hy.addFallback(1, "DIFFUSEFRESNEL"), Zy.OPACITYFRESNEL && hy.addFallback(2, "OPACITYFRESNEL"), Zy.REFLECTIONFRESNEL && hy.addFallback(3, "REFLECTIONFRESNEL"), Zy.EMISSIVEFRESNEL && hy.addFallback(4, "EMISSIVEFRESNEL"), Zy.FRESNEL && hy.addFallback(4, "FRESNEL"), Zy.MULTIVIEW && hy.addFallback(0, "MULTIVIEW");
              const By = [Py.k.PositionKind];
              Zy.NORMAL && By.push(Py.k.NormalKind), Zy.TANGENT && By.push(Py.k.TangentKind);
              for (let yb = 1; yb <= 6; ++yb) Zy["UV" + yb] && By.push(`uv${1===yb?"":yb}`);
              Zy.VERTEXCOLOR && By.push(Py.k.ColorKind), (0, Ty.K)(By, bb, Zy, hy), (0, Ty.N)(By, Zy), (0, Ty.O)(By, bb, Zy), (0, Ty.H)(By, bb, Zy);
              let qb = "default";
              const sy = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                Sy = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, Ty.mb)(sy, Sy, !1);
              const ly = ["Material", "Scene", "Mesh"],
                Vy = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: Zy.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = hy, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = Zy, this._eventInfo.uniforms = sy, this._eventInfo.attributes = By, this._eventInfo.samplers = Sy, this._eventInfo.uniformBuffersNames = ly, this._eventInfo.customCode = void 0, this._eventInfo.mesh = bb, this._eventInfo.indexParameters = Vy, this._callbackPluginEventGeneric(128, this._eventInfo), gb.c.AddUniformsAndSamplers(sy, Sy), oy.b.AddUniforms(sy), oy.b.AddSamplers(Sy), Ky.b && (Ky.b.PrepareUniforms(sy, Zy), Ky.b.PrepareSamplers(Sy, Zy)), (0, Ty.pb)({
                  uniformsNames: sy,
                  uniformBuffersNames: ly,
                  samplers: Sy,
                  defines: Zy,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, mb.d)(sy), this._useVertexPulling) {
                const yb = Wy.getRenderingMesh(),
                  bb = yb?.geometry;
                bb && (this._vertexPullingMetadata = (0, Cy.c)(bb), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((yb, bb) => {
                  sy.push(`vp_${bb}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const Jy = {};
              this.customShaderNameResolve && (qb = this.customShaderNameResolve(qb, sy, ly, Sy, Zy, By, Jy));
              const Gy = Zy.toString(),
                Oy = Wy.effect,
                Ry = fy.xh().createEffect(qb, {
                  attributes: By,
                  uniformsNames: sy,
                  uniformBuffersNames: ly,
                  samplers: Sy,
                  defines: Gy,
                  fallbacks: hy,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: Vy,
                  processFinalCode: Jy.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: Zy.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: yb._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, cb);
              if (this._eventInfo.customCode = void 0, Ry)
                if (this._onEffectCreatedObservable && (My.effect = Ry, My.subMesh = Wy, this._onEffectCreatedObservable.notifyObservers(My)), this.allowShaderHotSwapping && Oy && !Ry.isReady()) {
                  if (Zy.markAsUnprocessed(), ey = this.isFrozen, Uy) return Zy._areLightsDisposed = !0, !1
                } else fy.resetCachedMaterial(), Wy.setEffect(Ry, Zy, this._materialContext)
            }
            return !(!Wy.effect || !Wy.effect.isReady()) && (Zy._renderId = fy.getRenderId(), hy._wasPreviouslyReady = !ey, hy._wasPreviouslyUsingInstances = Uy, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const yb = this._uniformBuffer;
            yb.addUniform("diffuseLeftColor", 4), yb.addUniform("diffuseRightColor", 4), yb.addUniform("opacityParts", 4), yb.addUniform("reflectionLeftColor", 4), yb.addUniform("reflectionRightColor", 4), yb.addUniform("refractionLeftColor", 4), yb.addUniform("refractionRightColor", 4), yb.addUniform("emissiveLeftColor", 4), yb.addUniform("emissiveRightColor", 4), yb.addUniform("vDiffuseInfos", 2), yb.addUniform("vAmbientInfos", 2), yb.addUniform("vOpacityInfos", 2), yb.addUniform("vEmissiveInfos", 2), yb.addUniform("vLightmapInfos", 2), yb.addUniform("vSpecularInfos", 2), yb.addUniform("vBumpInfos", 3), yb.addUniform("diffuseMatrix", 16), yb.addUniform("ambientMatrix", 16), yb.addUniform("opacityMatrix", 16), yb.addUniform("emissiveMatrix", 16), yb.addUniform("lightmapMatrix", 16), yb.addUniform("specularMatrix", 16), yb.addUniform("bumpMatrix", 16), yb.addUniform("vTangentSpaceParams", 2), yb.addUniform("pointSize", 1), yb.addUniform("alphaCutOff", 1), yb.addUniform("refractionMatrix", 16), yb.addUniform("vRefractionInfos", 4), yb.addUniform("vRefractionPosition", 3), yb.addUniform("vRefractionSize", 3), yb.addUniform("vSpecularColor", 4), yb.addUniform("vEmissiveColor", 3), yb.addUniform("vDiffuseColor", 4), yb.addUniform("vAmbientColor", 3), yb.addUniform("cameraInfo", 4), yb.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Ty.jb)(yb, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(bb, Wy, Uy) {
            const hy = this.kWy(),
              fy = Uy.materialDefines;
            if (!fy) return;
            const Py = Uy.effect;
            if (!Py) return;
            this._activeEffect = Py, Wy.getMeshUniformBuffer().bindToEffect(Py, "Mesh"), Wy.transferToEffect(bb), this._uniformBuffer.bindToEffect(Py, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, hy, Wy, bb, this.isFrozen), gb.c.Bind(hy.xh().currentRenderPassId, this._activeEffect, Wy, bb, this);
            const oy = hy.activeCamera;
            oy ? this._uniformBuffer.updateFloat4("cameraInfo", oy.minZ, oy.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const By = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", By[0], By[1], By[2], By[3]), this._eventInfo.subMesh = Uy, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), fy.OBJECTSPACE_NORMALMAP && (bb.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Ky = this._mustRebind(hy, Py, Uy, Wy.visibility),
              ey = hy.xh()._features.needToAlwaysBindUniformBuffers;
            (0, Ty.c)(Wy, Py), this._vertexPullingMetadata && (0, Cy.b)(Py, this._vertexPullingMetadata);
            const qb = this._uniformBuffer;
            if (Ky) {
              if (this.bindViewProjection(Py), !qb.useUbo || !this.isFrozen || !qb.isSync || Uy._drawWrapper._forceRebindOnNextCall) {
                if (yb.FresnelEnabled && fy.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (qb.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), qb.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const yb = cb.m.Color3[0];
                    yb.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), qb.updateColor4("opacityParts", yb, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (qb.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), qb.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (qb.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), qb.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (qb.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), qb.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (fy.ALPHATEST && qb.updateFloat("alphaCutOff", this.alphaCutOff), hy.texturesEnabled && (this._diffuseTexture && yb.DiffuseTextureEnabled && (qb.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, Ty.z)(this._diffuseTexture, qb, "diffuse")), this._ambientTexture && yb.AmbientTextureEnabled && (qb.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, Ty.z)(this._ambientTexture, qb, "ambient")), this._opacityTexture && yb.OpacityTextureEnabled && (qb.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Ty.z)(this._opacityTexture, qb, "opacity")), (0, Ty.e)(hy, fy, qb, cb.d.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && yb.ReflectionTextureEnabled || qb.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && yb.EmissiveTextureEnabled && (qb.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Ty.z)(this._emissiveTexture, qb, "emissive")), this._lightmapTexture && yb.LightmapTextureEnabled && (qb.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Ty.z)(this._lightmapTexture, qb, "lightmap")), this._specularTexture && yb.SpecularTextureEnabled && (qb.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, Ty.z)(this._specularTexture, qb, "specular")), this._bumpTexture && hy.xh().getCaps().standardDerivatives && yb.BumpTextureEnabled && (qb.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, Ty.z)(this._bumpTexture, qb, "bump"), hy._mirroredCameraPosition ? qb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : qb.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && yb.RefractionTextureEnabled)) {
                  let yb = 1;
                  if (this._refractionTexture.isCube || (qb.qcy("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (yb = this._refractionTexture.depth)), qb.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, yb, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const yb = this._refractionTexture;
                    qb.updateVector3("vRefractionPosition", yb.boundingBoxPosition), qb.updateVector3("vRefractionSize", yb.boundingBoxSize)
                  }
                }
                this.pointsCloud && qb.updateFloat("pointSize", this.pointSize), qb.updateColor4("vSpecularColor", this.specularColor, this.specularPower), qb.updateColor3("vEmissiveColor", yb.EmissiveTextureEnabled ? this.emissiveColor : cb.d.BlackReadOnly), qb.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), hy.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), qb.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              hy.texturesEnabled && (this._diffuseTexture && yb.DiffuseTextureEnabled && Py.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && yb.AmbientTextureEnabled && Py.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && yb.OpacityTextureEnabled && Py.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && yb.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? Py.setTexture("reflectionCubeSampler", this._reflectionTexture) : Py.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && yb.EmissiveTextureEnabled && Py.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && yb.LightmapTextureEnabled && Py.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && yb.SpecularTextureEnabled && Py.setTexture("specularSampler", this._specularTexture), this._bumpTexture && hy.xh().getCaps().standardDerivatives && yb.BumpTextureEnabled && Py.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && yb.RefractionTextureEnabled && (this._refractionTexture.isCube ? Py.setTexture("refractionCubeSampler", this._refractionTexture) : Py.setTexture("refraction2DSampler", this._refractionTexture))), this.kWy().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(Wy) && this.kWy().depthPeelingRenderer.bind(Py), this._eventInfo.subMesh = Uy, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, mb.g)(Py, this, hy), this.bindEyePosition(Py)
            } else ey && (this._needToBindSceneUbo = !0);
            !Ky && this.isFrozen && !ey || !hy.lightsEnabled || this._disableLighting || (0, Ty.m)(hy, Wy, Py, fy, this._maxSimultaneousLights), !Ky && this.isFrozen || ((hy.fogEnabled && Wy.applyFog && hy.fogMode !== Zy.g.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || Wy.receiveShadows || fy.PREPASS || fy.CLUSTLIGHT_BATCH) && this.bindView(Py), (0, Ty.d)(hy, Wy, Py), fy.NUM_MORPH_INFLUENCERS && (0, Ty.r)(Wy, Py), fy.BAKED_VERTEX_ANIMATION_TEXTURE && Wy.bakedVertexAnimationManager?.bind(Py, fy.INSTANCES), this.useLogarithmicDepth && (0, Ty.q)(fy, Py, hy), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(Wy, this._activeEffect, Uy), qb.update()
          }
          _canBindRunFollower(bb, Wy, Uy, hy, fy) {
            const Zy = bb.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === yb.prototype.isReadyForSubMesh && this.bindForSubMesh === yb.prototype.bindForSubMesh && this._mustRebind === sy.d.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !Wy._features.needToAlwaysBindUniformBuffers && !(Zy && Zy.enabled && Zy.currentRTisSceneRT) && !gb.c._Configurations[Wy.currentRenderPassId] && !hy.materialDefines?.OBJECTSPACE_NORMALMAP && !Uy.skeleton && !fy._bonesComputationForcedToCPU
          }
          _bindRunFollower(yb, bb, Wy, Uy) {
            this._activeEffect = Uy, bb.getMeshUniformBuffer().bindToEffect(Uy, "Mesh"), bb.transferToEffect(yb);
            const hy = this._uniformBuffer;
            hy.bindToEffect(Uy, "Material");
            const fy = this._scene.activeCamera;
            fy ? hy.updateFloat4("cameraInfo", fy.minZ, fy.maxZ, 0, 0) : hy.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Zy = this.textureRepetitionHexTilingParams;
            hy.updateFloat4("vTextureRepetitionHexTilingParams", Zy[0], Zy[1], Zy[2], Zy[3]), this._afterBind(bb, Uy, Wy), hy.update()
          }
          getAnimatables() {
            const yb = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && yb.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && yb.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && yb.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && yb.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && yb.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && yb.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && yb.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && yb.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && yb.push(this._refractionTexture), yb
          }
          getActiveTextures() {
            const yb = super.getActiveTextures();
            return this._diffuseTexture && yb.push(this._diffuseTexture), this._ambientTexture && yb.push(this._ambientTexture), this._opacityTexture && yb.push(this._opacityTexture), this._reflectionTexture && yb.push(this._reflectionTexture), this._emissiveTexture && yb.push(this._emissiveTexture), this._specularTexture && yb.push(this._specularTexture), this._bumpTexture && yb.push(this._bumpTexture), this._lightmapTexture && yb.push(this._lightmapTexture), this._refractionTexture && yb.push(this._refractionTexture), yb
          }
          hasTexture(yb) {
            return !!super.hasTexture(yb) || (this._diffuseTexture === yb || (this._ambientTexture === yb || (this._opacityTexture === yb || (this._reflectionTexture === yb || (this._emissiveTexture === yb || (this._specularTexture === yb || (this._bumpTexture === yb || (this._lightmapTexture === yb || this._refractionTexture === yb))))))))
          }
          dispose(yb, bb) {
            bb && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(yb, bb)
          }
          clone(bb) {
            let Wy = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Uy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const hy = Vy.c.Clone((() => new yb(bb, this.kWy())), this, {
              cloneTexturesOnlyOnce: Wy
            });
            return hy.name = bb, hy.id = bb, this.stencil.copyTo(hy.stencil), this._clonePlugins(hy, Uy), hy
          }
          static Parse(bb, Wy, Uy) {
            const hy = Vy.c.Parse((() => new yb(bb.name, Wy)), bb, Wy, Uy);
            return bb.stencil && hy.stencil.parse(bb.stencil, Wy, Uy), ey.e._ParsePlugins(bb, hy, Wy, Uy), hy
          }
          static get DiffuseTextureEnabled() {
            return Sy.d.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(yb) {
            Sy.d.DiffuseTextureEnabled = yb
          }
          static get DetailTextureEnabled() {
            return Sy.d.DetailTextureEnabled
          }
          static set DetailTextureEnabled(yb) {
            Sy.d.DetailTextureEnabled = yb
          }
          static get AmbientTextureEnabled() {
            return Sy.d.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(yb) {
            Sy.d.AmbientTextureEnabled = yb
          }
          static get OpacityTextureEnabled() {
            return Sy.d.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(yb) {
            Sy.d.OpacityTextureEnabled = yb
          }
          static get ReflectionTextureEnabled() {
            return Sy.d.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(yb) {
            Sy.d.ReflectionTextureEnabled = yb
          }
          static get EmissiveTextureEnabled() {
            return Sy.d.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(yb) {
            Sy.d.EmissiveTextureEnabled = yb
          }
          static get SpecularTextureEnabled() {
            return Sy.d.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(yb) {
            Sy.d.SpecularTextureEnabled = yb
          }
          static get BumpTextureEnabled() {
            return Sy.d.BumpTextureEnabled
          }
          static set BumpTextureEnabled(yb) {
            Sy.d.BumpTextureEnabled = yb
          }
          static get LightmapTextureEnabled() {
            return Sy.d.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(yb) {
            Sy.d.LightmapTextureEnabled = yb
          }
          static get RefractionTextureEnabled() {
            return Sy.d.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(yb) {
            Sy.d.RefractionTextureEnabled = yb
          }
          static get ColorGradingTextureEnabled() {
            return Sy.d.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(yb) {
            Sy.d.ColorGradingTextureEnabled = yb
          }
          static get FresnelEnabled() {
            return Sy.d.FresnelEnabled
          }
          static set FresnelEnabled(yb) {
            Sy.d.FresnelEnabled = yb
          }
        }, bb = new WeakMap, By = new WeakMap, qb = new WeakMap, Gy = new WeakMap, Oy = new WeakMap, Ry = new WeakMap, vb = new WeakMap, ib = new WeakMap, Yy = new WeakMap, uy = new WeakMap, rb = new WeakMap, Hy = new WeakMap, ab = new WeakMap, Fy = new WeakMap, py = new WeakMap, Ly = new WeakMap, Qy = new WeakMap, jb = new WeakMap, Dy = new WeakMap, tb = new WeakMap, wy = new WeakMap, kb = new WeakMap, Ny = new WeakMap, zb = new WeakMap, Iy = new WeakMap, xb = new WeakMap, Ay = new WeakMap, dy = new WeakMap, yW = new WeakMap, bW = new WeakMap, Wb = new WeakMap, Ub = new WeakMap, (() => {
          const bb = "function" === typeof Symbol && Symbol.metadata ? Object.create(OW[Symbol.metadata] ?? null) : void 0;
          hb = [(0, hy.M)("diffuseTexture")], fb = [(0, hy.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], Zb = [(0, hy.M)("ambientTexture")], cW = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], Pb = [(0, hy.M)("opacityTexture")], ob = [(0, hy.h)("_markAllSubMeshesAsTexturesAndMiscDirty")], Bb = [(0, hy.M)("reflectionTexture")], Kb = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], eb = [(0, hy.M)("emissiveTexture")], qW = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], sb = [(0, hy.M)("specularTexture")], Sb = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], Eb = [(0, hy.M)("bumpTexture")], lb = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], mW = [(0, hy.M)("lightmapTexture")], Cb = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], Tb = [(0, hy.M)("refractionTexture")], Vb = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], Jb = [(0, hy.q)("ambient")], gW = [(0, hy.q)("diffuse")], Gb = [(0, hy.q)("specular")], Ob = [(0, hy.q)("emissive")], Rb = [(0, hy.T)()], vW = [(0, hy.T)("useAlphaFromDiffuseTexture")], iW = [() => ({
            init(yb) {
              return void 0 === yb && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = yb), yb
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(yb) {
              this._useAlphaFromDiffuseTexture = yb
            }
          })], Mb = [(0, hy.T)("useEmissiveAsIllumination")], Yb = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], Xb = [(0, hy.T)("linkEmissiveWithDiffuse")], nb = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], ub = [(0, hy.T)("useSpecularOverAlpha")], rW = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], Hb = [(0, hy.T)("useReflectionOverAlpha")], aW = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], Fb = [(0, hy.T)("disableLighting")], pb = [(0, hy.h)("_markAllSubMeshesAsLightsDirty")], Lb = [(0, hy.T)("useObjectSpaceNormalMap")], Qb = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], jW = [(0, hy.T)("useParallax")], Db = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], tW = [(0, hy.T)("useParallaxOcclusion")], wb = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], kW = [(0, hy.T)()], Nb = [(0, hy.T)("roughness")], zW = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], Ib = [(0, hy.T)()], xW = [(0, hy.T)()], Ab = [(0, hy.T)()], db = [(0, hy.T)("useLightmapAsShadowmap")], yU = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], bU = [(0, hy.x)("diffuseFresnelParameters")], WW = [(0, hy.h)("_markAllSubMeshesAsFresnelDirty")], UW = [(0, hy.x)("opacityFresnelParameters")], hW = [(0, hy.h)("_markAllSubMeshesAsFresnelAndMiscDirty")], fW = [(0, hy.x)("reflectionFresnelParameters")], ZW = [(0, hy.h)("_markAllSubMeshesAsFresnelDirty")], cU = [(0, hy.x)("refractionFresnelParameters")], PW = [(0, hy.h)("_markAllSubMeshesAsFresnelDirty")], oW = [(0, hy.x)("emissiveFresnelParameters")], BW = [(0, hy.h)("_markAllSubMeshesAsFresnelDirty")], KW = [(0, hy.T)("useReflectionFresnelFromSpecular")], eW = [(0, hy.h)("_markAllSubMeshesAsFresnelDirty")], qU = [(0, hy.T)("useGlossinessFromSpecularMapAlpha")], sW = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], SW = [(0, hy.T)("maxSimultaneousLights")], EW = [(0, hy.h)("_markAllSubMeshesAsLightsDirty")], lW = [(0, hy.T)("invertNormalMapX")], mU = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], CW = [(0, hy.T)("invertNormalMapY")], TW = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], VW = [(0, hy.T)("twoSidedLighting")], JW = [(0, hy.h)("_markAllSubMeshesAsTexturesDirty")], gU = [(0, hy.T)("applyDecalMapAfterDetailMap")], GW = [(0, hy.h)("_markAllSubMeshesAsMiscDirty")], (0, Uy.j)(yb, null, fb, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "diffuseTexture" in yb,
              get: yb => yb.diffuseTexture,
              set: (yb, bb) => {
                yb.diffuseTexture = bb
              }
            },
            metadata: bb
          }, iU, MW), (0, Uy.j)(yb, null, cW, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "ambientTexture" in yb,
              get: yb => yb.ambientTexture,
              set: (yb, bb) => {
                yb.ambientTexture = bb
              }
            },
            metadata: bb
          }, nW, uW), (0, Uy.j)(yb, null, ob, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "opacityTexture" in yb,
              get: yb => yb.opacityTexture,
              set: (yb, bb) => {
                yb.opacityTexture = bb
              }
            },
            metadata: bb
          }, aU, FW), (0, Uy.j)(yb, null, Kb, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "reflectionTexture" in yb,
              get: yb => yb.reflectionTexture,
              set: (yb, bb) => {
                yb.reflectionTexture = bb
              }
            },
            metadata: bb
          }, QW, jU), (0, Uy.j)(yb, null, qW, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "emissiveTexture" in yb,
              get: yb => yb.emissiveTexture,
              set: (yb, bb) => {
                yb.emissiveTexture = bb
              }
            },
            metadata: bb
          }, wW, kU), (0, Uy.j)(yb, null, Sb, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "specularTexture" in yb,
              get: yb => yb.specularTexture,
              set: (yb, bb) => {
                yb.specularTexture = bb
              }
            },
            metadata: bb
          }, IW, xU), (0, Uy.j)(yb, null, lb, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "bumpTexture" in yb,
              get: yb => yb.bumpTexture,
              set: (yb, bb) => {
                yb.bumpTexture = bb
              }
            },
            metadata: bb
          }, yh, bh), (0, Uy.j)(yb, null, Cb, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "lightmapTexture" in yb,
              get: yb => yb.lightmapTexture,
              set: (yb, bb) => {
                yb.lightmapTexture = bb
              }
            },
            metadata: bb
          }, hU, fU), (0, Uy.j)(yb, null, Vb, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "refractionTexture" in yb,
              get: yb => yb.refractionTexture,
              set: (yb, bb) => {
                yb.refractionTexture = bb
              }
            },
            metadata: bb
          }, PU, oU), (0, Uy.j)(yb, null, iW, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "useAlphaFromDiffuseTexture" in yb,
              get: yb => yb.useAlphaFromDiffuseTexture,
              set: (yb, bb) => {
                yb.useAlphaFromDiffuseTexture = bb
              }
            },
            metadata: bb
          }, JU, gh), (0, Uy.j)(yb, null, Yb, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: yb => "useEmissiveAsIllumination" in yb,
              get: yb => yb.useEmissiveAsIllumination,
              set: (yb, bb) => {
                yb.useEmissiveAsIllumination = bb
              }
            },
            metadata: bb
          }, RU, vh), (0, Uy.j)(yb, null, nb, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: yb => "linkEmissiveWithDiffuse" in yb,
              get: yb => yb.linkEmissiveWithDiffuse,
              set: (yb, bb) => {
                yb.linkEmissiveWithDiffuse = bb
              }
            },
            metadata: bb
          }, YU, XU), (0, Uy.j)(yb, null, rW, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: yb => "useSpecularOverAlpha" in yb,
              get: yb => yb.useSpecularOverAlpha,
              set: (yb, bb) => {
                yb.useSpecularOverAlpha = bb
              }
            },
            metadata: bb
          }, rh, HU), (0, Uy.j)(yb, null, aW, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: yb => "useReflectionOverAlpha" in yb,
              get: yb => yb.useReflectionOverAlpha,
              set: (yb, bb) => {
                yb.useReflectionOverAlpha = bb
              }
            },
            metadata: bb
          }, pU, LU), (0, Uy.j)(yb, null, pb, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: yb => "disableLighting" in yb,
              get: yb => yb.disableLighting,
              set: (yb, bb) => {
                yb.disableLighting = bb
              }
            },
            metadata: bb
          }, DU, th), (0, Uy.j)(yb, null, Qb, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: yb => "useObjectSpaceNormalMap" in yb,
              get: yb => yb.useObjectSpaceNormalMap,
              set: (yb, bb) => {
                yb.useObjectSpaceNormalMap = bb
              }
            },
            metadata: bb
          }, NU, zh), (0, Uy.j)(yb, null, Db, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: yb => "useParallax" in yb,
              get: yb => yb.useParallax,
              set: (yb, bb) => {
                yb.useParallax = bb
              }
            },
            metadata: bb
          }, AU, dU), (0, Uy.j)(yb, null, wb, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: yb => "useParallaxOcclusion" in yb,
              get: yb => yb.useParallaxOcclusion,
              set: (yb, bb) => {
                yb.useParallaxOcclusion = bb
              }
            },
            metadata: bb
          }, Wh, Uh), (0, Uy.j)(yb, null, zW, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: yb => "roughness" in yb,
              get: yb => yb.roughness,
              set: (yb, bb) => {
                yb.roughness = bb
              }
            },
            metadata: bb
          }, Ph, oh), (0, Uy.j)(yb, null, yU, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: yb => "useLightmapAsShadowmap" in yb,
              get: yb => yb.useLightmapAsShadowmap,
              set: (yb, bb) => {
                yb.useLightmapAsShadowmap = bb
              }
            },
            metadata: bb
          }, mf, Ch), (0, Uy.j)(yb, null, WW, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: yb => "diffuseFresnelParameters" in yb,
              get: yb => yb.diffuseFresnelParameters,
              set: (yb, bb) => {
                yb.diffuseFresnelParameters = bb
              }
            },
            metadata: bb
          }, Jh, gf), (0, Uy.j)(yb, null, hW, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: yb => "opacityFresnelParameters" in yb,
              get: yb => yb.opacityFresnelParameters,
              set: (yb, bb) => {
                yb.opacityFresnelParameters = bb
              }
            },
            metadata: bb
          }, Rh, vf), (0, Uy.j)(yb, null, ZW, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: yb => "reflectionFresnelParameters" in yb,
              get: yb => yb.reflectionFresnelParameters,
              set: (yb, bb) => {
                yb.reflectionFresnelParameters = bb
              }
            },
            metadata: bb
          }, Xh, nh), (0, Uy.j)(yb, null, PW, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: yb => "refractionFresnelParameters" in yb,
              get: yb => yb.refractionFresnelParameters,
              set: (yb, bb) => {
                yb.refractionFresnelParameters = bb
              }
            },
            metadata: bb
          }, Hh, af), (0, Uy.j)(yb, null, BW, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: yb => "emissiveFresnelParameters" in yb,
              get: yb => yb.emissiveFresnelParameters,
              set: (yb, bb) => {
                yb.emissiveFresnelParameters = bb
              }
            },
            metadata: bb
          }, Lh, Qh), (0, Uy.j)(yb, null, eW, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: yb => "useReflectionFresnelFromSpecular" in yb,
              get: yb => yb.useReflectionFresnelFromSpecular,
              set: (yb, bb) => {
                yb.useReflectionFresnelFromSpecular = bb
              }
            },
            metadata: bb
          }, tf, wh), (0, Uy.j)(yb, null, sW, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: yb => "useGlossinessFromSpecularMapAlpha" in yb,
              get: yb => yb.useGlossinessFromSpecularMapAlpha,
              set: (yb, bb) => {
                yb.useGlossinessFromSpecularMapAlpha = bb
              }
            },
            metadata: bb
          }, zf, Ih), (0, Uy.j)(yb, null, EW, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: yb => "maxSimultaneousLights" in yb,
              get: yb => yb.maxSimultaneousLights,
              set: (yb, bb) => {
                yb.maxSimultaneousLights = bb
              }
            },
            metadata: bb
          }, dh, yZ), (0, Uy.j)(yb, null, mU, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: yb => "invertNormalMapX" in yb,
              get: yb => yb.invertNormalMapX,
              set: (yb, bb) => {
                yb.invertNormalMapX = bb
              }
            },
            metadata: bb
          }, Uf, hf), (0, Uy.j)(yb, null, TW, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: yb => "invertNormalMapY" in yb,
              get: yb => yb.invertNormalMapY,
              set: (yb, bb) => {
                yb.invertNormalMapY = bb
              }
            },
            metadata: bb
          }, cZ, Pf), (0, Uy.j)(yb, null, JW, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: yb => "twoSidedLighting" in yb,
              get: yb => yb.twoSidedLighting,
              set: (yb, bb) => {
                yb.twoSidedLighting = bb
              }
            },
            metadata: bb
          }, Kf, ef), (0, Uy.j)(yb, null, GW, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: yb => "applyDecalMapAfterDetailMap" in yb,
              get: yb => yb.applyDecalMapAfterDetailMap,
              set: (yb, bb) => {
                yb.applyDecalMapAfterDetailMap = bb
              }
            },
            metadata: bb
          }, Sf, Ef), (0, Uy.j)(null, null, hb, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "_diffuseTexture" in yb,
              get: yb => yb._diffuseTexture,
              set: (yb, bb) => {
                yb._diffuseTexture = bb
              }
            },
            metadata: bb
          }, RW, vU), (0, Uy.j)(null, null, Zb, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "_ambientTexture" in yb,
              get: yb => yb._ambientTexture,
              set: (yb, bb) => {
                yb._ambientTexture = bb
              }
            },
            metadata: bb
          }, YW, XW), (0, Uy.j)(null, null, Pb, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "_opacityTexture" in yb,
              get: yb => yb._opacityTexture,
              set: (yb, bb) => {
                yb._opacityTexture = bb
              }
            },
            metadata: bb
          }, rU, HW), (0, Uy.j)(null, null, Bb, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "_reflectionTexture" in yb,
              get: yb => yb._reflectionTexture,
              set: (yb, bb) => {
                yb._reflectionTexture = bb
              }
            },
            metadata: bb
          }, pW, LW), (0, Uy.j)(null, null, eb, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "_emissiveTexture" in yb,
              get: yb => yb._emissiveTexture,
              set: (yb, bb) => {
                yb._emissiveTexture = bb
              }
            },
            metadata: bb
          }, DW, tU), (0, Uy.j)(null, null, sb, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "_specularTexture" in yb,
              get: yb => yb._specularTexture,
              set: (yb, bb) => {
                yb._specularTexture = bb
              }
            },
            metadata: bb
          }, NW, zU), (0, Uy.j)(null, null, Eb, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "_bumpTexture" in yb,
              get: yb => yb._bumpTexture,
              set: (yb, bb) => {
                yb._bumpTexture = bb
              }
            },
            metadata: bb
          }, AW, dW), (0, Uy.j)(null, null, mW, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "_lightmapTexture" in yb,
              get: yb => yb._lightmapTexture,
              set: (yb, bb) => {
                yb._lightmapTexture = bb
              }
            },
            metadata: bb
          }, WU, UU), (0, Uy.j)(null, null, Tb, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "_refractionTexture" in yb,
              get: yb => yb._refractionTexture,
              set: (yb, bb) => {
                yb._refractionTexture = bb
              }
            },
            metadata: bb
          }, ZU, ch), (0, Uy.j)(null, null, Jb, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: yb => "ambientColor" in yb,
              get: yb => yb.ambientColor,
              set: (yb, bb) => {
                yb.ambientColor = bb
              }
            },
            metadata: bb
          }, BU, KU), (0, Uy.j)(null, null, gW, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: yb => "diffuseColor" in yb,
              get: yb => yb.diffuseColor,
              set: (yb, bb) => {
                yb.diffuseColor = bb
              }
            },
            metadata: bb
          }, eU, qh), (0, Uy.j)(null, null, Gb, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: yb => "specularColor" in yb,
              get: yb => yb.specularColor,
              set: (yb, bb) => {
                yb.specularColor = bb
              }
            },
            metadata: bb
          }, sU, SU), (0, Uy.j)(null, null, Ob, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: yb => "emissiveColor" in yb,
              get: yb => yb.emissiveColor,
              set: (yb, bb) => {
                yb.emissiveColor = bb
              }
            },
            metadata: bb
          }, EU, lU), (0, Uy.j)(null, null, Rb, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: yb => "specularPower" in yb,
              get: yb => yb.specularPower,
              set: (yb, bb) => {
                yb.specularPower = bb
              }
            },
            metadata: bb
          }, mh, CU), (0, Uy.j)(null, null, vW, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: yb => "_useAlphaFromDiffuseTexture" in yb,
              get: yb => yb._useAlphaFromDiffuseTexture,
              set: (yb, bb) => {
                yb._useAlphaFromDiffuseTexture = bb
              }
            },
            metadata: bb
          }, TU, VU), (0, Uy.j)(null, null, Mb, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: yb => "_useEmissiveAsIllumination" in yb,
              get: yb => yb._useEmissiveAsIllumination,
              set: (yb, bb) => {
                yb._useEmissiveAsIllumination = bb
              }
            },
            metadata: bb
          }, GU, OU), (0, Uy.j)(null, null, Xb, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: yb => "_linkEmissiveWithDiffuse" in yb,
              get: yb => yb._linkEmissiveWithDiffuse,
              set: (yb, bb) => {
                yb._linkEmissiveWithDiffuse = bb
              }
            },
            metadata: bb
          }, ih, MU), (0, Uy.j)(null, null, ub, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: yb => "_useSpecularOverAlpha" in yb,
              get: yb => yb._useSpecularOverAlpha,
              set: (yb, bb) => {
                yb._useSpecularOverAlpha = bb
              }
            },
            metadata: bb
          }, nU, uU), (0, Uy.j)(null, null, Hb, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: yb => "_useReflectionOverAlpha" in yb,
              get: yb => yb._useReflectionOverAlpha,
              set: (yb, bb) => {
                yb._useReflectionOverAlpha = bb
              }
            },
            metadata: bb
          }, ah, FU), (0, Uy.j)(null, null, Fb, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: yb => "_disableLighting" in yb,
              get: yb => yb._disableLighting,
              set: (yb, bb) => {
                yb._disableLighting = bb
              }
            },
            metadata: bb
          }, QU, jh), (0, Uy.j)(null, null, Lb, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: yb => "_useObjectSpaceNormalMap" in yb,
              get: yb => yb._useObjectSpaceNormalMap,
              set: (yb, bb) => {
                yb._useObjectSpaceNormalMap = bb
              }
            },
            metadata: bb
          }, wU, kh), (0, Uy.j)(null, null, jW, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: yb => "_useParallax" in yb,
              get: yb => yb._useParallax,
              set: (yb, bb) => {
                yb._useParallax = bb
              }
            },
            metadata: bb
          }, IU, xh), (0, Uy.j)(null, null, tW, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: yb => "_useParallaxOcclusion" in yb,
              get: yb => yb._useParallaxOcclusion,
              set: (yb, bb) => {
                yb._useParallaxOcclusion = bb
              }
            },
            metadata: bb
          }, yf, bf), (0, Uy.j)(null, null, kW, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: yb => "parallaxScaleBias" in yb,
              get: yb => yb.parallaxScaleBias,
              set: (yb, bb) => {
                yb.parallaxScaleBias = bb
              }
            },
            metadata: bb
          }, hh, fh), (0, Uy.j)(null, null, Nb, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: yb => "_roughness" in yb,
              get: yb => yb._roughness,
              set: (yb, bb) => {
                yb._roughness = bb
              }
            },
            metadata: bb
          }, Zh, cf), (0, Uy.j)(null, null, Ib, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: yb => "indexOfRefraction" in yb,
              get: yb => yb.indexOfRefraction,
              set: (yb, bb) => {
                yb.indexOfRefraction = bb
              }
            },
            metadata: bb
          }, Bh, Kh), (0, Uy.j)(null, null, xW, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: yb => "invertRefractionY" in yb,
              get: yb => yb.invertRefractionY,
              set: (yb, bb) => {
                yb.invertRefractionY = bb
              }
            },
            metadata: bb
          }, eh, qf), (0, Uy.j)(null, null, Ab, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: yb => "alphaCutOff" in yb,
              get: yb => yb.alphaCutOff,
              set: (yb, bb) => {
                yb.alphaCutOff = bb
              }
            },
            metadata: bb
          }, sh, Sh), (0, Uy.j)(null, null, db, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: yb => "_useLightmapAsShadowmap" in yb,
              get: yb => yb._useLightmapAsShadowmap,
              set: (yb, bb) => {
                yb._useLightmapAsShadowmap = bb
              }
            },
            metadata: bb
          }, Eh, lh), (0, Uy.j)(null, null, bU, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: yb => "_diffuseFresnelParameters" in yb,
              get: yb => yb._diffuseFresnelParameters,
              set: (yb, bb) => {
                yb._diffuseFresnelParameters = bb
              }
            },
            metadata: bb
          }, Th, Vh), (0, Uy.j)(null, null, UW, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: yb => "_opacityFresnelParameters" in yb,
              get: yb => yb._opacityFresnelParameters,
              set: (yb, bb) => {
                yb._opacityFresnelParameters = bb
              }
            },
            metadata: bb
          }, Gh, Oh), (0, Uy.j)(null, null, fW, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: yb => "_reflectionFresnelParameters" in yb,
              get: yb => yb._reflectionFresnelParameters,
              set: (yb, bb) => {
                yb._reflectionFresnelParameters = bb
              }
            },
            metadata: bb
          }, Mh, Yh), (0, Uy.j)(null, null, cU, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: yb => "_refractionFresnelParameters" in yb,
              get: yb => yb._refractionFresnelParameters,
              set: (yb, bb) => {
                yb._refractionFresnelParameters = bb
              }
            },
            metadata: bb
          }, uh, rf), (0, Uy.j)(null, null, oW, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: yb => "_emissiveFresnelParameters" in yb,
              get: yb => yb._emissiveFresnelParameters,
              set: (yb, bb) => {
                yb._emissiveFresnelParameters = bb
              }
            },
            metadata: bb
          }, Fh, ph), (0, Uy.j)(null, null, KW, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: yb => "_useReflectionFresnelFromSpecular" in yb,
              get: yb => yb._useReflectionFresnelFromSpecular,
              set: (yb, bb) => {
                yb._useReflectionFresnelFromSpecular = bb
              }
            },
            metadata: bb
          }, jf, Dh), (0, Uy.j)(null, null, qU, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: yb => "_useGlossinessFromSpecularMapAlpha" in yb,
              get: yb => yb._useGlossinessFromSpecularMapAlpha,
              set: (yb, bb) => {
                yb._useGlossinessFromSpecularMapAlpha = bb
              }
            },
            metadata: bb
          }, kf, Nh), (0, Uy.j)(null, null, SW, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: yb => "_maxSimultaneousLights" in yb,
              get: yb => yb._maxSimultaneousLights,
              set: (yb, bb) => {
                yb._maxSimultaneousLights = bb
              }
            },
            metadata: bb
          }, xf, Ah), (0, Uy.j)(null, null, lW, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: yb => "_invertNormalMapX" in yb,
              get: yb => yb._invertNormalMapX,
              set: (yb, bb) => {
                yb._invertNormalMapX = bb
              }
            },
            metadata: bb
          }, bZ, Wf), (0, Uy.j)(null, null, CW, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: yb => "_invertNormalMapY" in yb,
              get: yb => yb._invertNormalMapY,
              set: (yb, bb) => {
                yb._invertNormalMapY = bb
              }
            },
            metadata: bb
          }, ff, Zf), (0, Uy.j)(null, null, VW, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: yb => "_twoSidedLighting" in yb,
              get: yb => yb._twoSidedLighting,
              set: (yb, bb) => {
                yb._twoSidedLighting = bb
              }
            },
            metadata: bb
          }, of, Bf), (0, Uy.j)(null, null, gU, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: yb => "_applyDecalMapAfterDetailMap" in yb,
              get: yb => yb._applyDecalMapAfterDetailMap,
              set: (yb, bb) => {
                yb._applyDecalMapAfterDetailMap = bb
              }
            },
            metadata: bb
          }, qZ, sf), bb && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bb
          })
        })(), yb.ForceGLSL = !1, yb._ShaderLoader = new Jy.d((() => [Promise.all([Wy.e(295), Wy.e(294)]).then((() => Wy(40355))), Promise.all([Wy.e(300), Wy.e(296), Wy.e(309), Wy.e(299)]).then((() => Wy(40541)))]), (() => [Promise.all([Wy.e(316), Wy.e(311)]).then((() => Wy(40695))), Promise.all([Wy.e(317), Wy.e(327), Wy.e(313)]).then((() => Wy(40890)))])), yb
      })(),
      rb = !1;

    function Hy() {
      rb || (rb = !0, (0, Ky.f)(), (0, vb.e)("BABYLON.StandardMaterial", uy), Zy.g.DefaultMaterialFactory = yb => new uy("default material", yb))
    }
    Object.getOwnPropertyDescriptor(uy.prototype, "decalMap") || Object.defineProperty(uy.prototype, "decalMap", (0, ib.e)("StandardMaterial", "decalMap"))
  },
  38882: (yb, bb, Wy) => {
    function Uy(yb) {
      return class extends yb {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    Wy.d(bb, {
      b: () => Uy
    })
  },
  38870: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Uy
    });
    class Uy {
      constructor(yb, bb) {
        this._webGL = {
          load: yb,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: bb,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(yb) {
        const bb = 1 === yb ? this._webGPU : this._webGL;
        return bb.loaded ? void 0 : async () => {
          await this._loadAsync(bb)
        }
      }
      async _loadAsync(yb) {
        if (yb.loaded) return;
        let bb = yb.loadPromise;
        const Wy = null === bb;
        Wy && (bb = Promise.all(yb.load()), yb.loadPromise = bb);
        let Uy = !1;
        try {
          await bb, Uy = !0
        } finally {
          Wy && this._completeLoad(yb, Uy)
        }
      }
      _completeLoad(yb, bb) {
        yb.loaded = bb, yb.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);