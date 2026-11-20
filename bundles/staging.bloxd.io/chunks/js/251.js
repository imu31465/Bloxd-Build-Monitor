export const id = 251;
export const ids = [251];
export const modules = {
  39545: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz
    });
    var Fz = sz(39177);

    function Wz(zz) {
      return class extends zz {
        constructor() {
          super(...arguments);
          const zz = new.target;
          if (!zz[Symbol.metadata]) {
            const tz = Object.getPrototypeOf(zz)?.[Symbol.metadata];
            zz[Symbol.metadata] = tz ? Object.create(tz) : {}
          }
          const tz = (0, Fz.e)(zz[Symbol.metadata]);
          tz._imageProcessingConfiguration || (tz._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(zz) {
          this._attachImageProcessingConfiguration(zz), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(zz) {
          zz !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !zz && this.aJ ? this._imageProcessingConfiguration = this.aJ().imageProcessingConfiguration : zz && (this._imageProcessingConfiguration = zz), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(zz) {
          this.imageProcessingConfiguration.colorCurvesEnabled = zz
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(zz) {
          this.imageProcessingConfiguration.colorGradingEnabled = zz
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(zz) {
          this._imageProcessingConfiguration.toneMappingEnabled = zz
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(zz) {
          this._imageProcessingConfiguration.exposure = zz
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(zz) {
          this._imageProcessingConfiguration.contrast = zz
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(zz) {
          this._imageProcessingConfiguration.colorGradingTexture = zz
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(zz) {
          this._imageProcessingConfiguration.colorCurves = zz
        }
      }
    }
  },
  39439: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      f: () => Wz
    });
    var Fz = sz(39444);

    function Wz(zz) {
      return class extends zz {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class Xz extends Fz.d {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  39509: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => uz
    });
    var Fz = sz(39167),
      Wz = sz(39451),
      Xz = sz(39170),
      Oz = sz(39499),
      oz = sz(39444),
      vz = sz(39515),
      Uz = sz(39489);
    class Kz extends oz.d {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let uz = (() => {
      var zz, tz, sz, oz;
      let uz, Nz, bz, wz, Dz, gz, Hz = vz.d,
        Bz = [],
        Pz = [],
        rz = [],
        Yz = [],
        xz = [],
        mz = [],
        Jz = [],
        Iz = [],
        Cz = [],
        ez = [],
        Zz = [],
        Gz = [];
      return zz = class extends Hz {
        get texture() {
          return (0, Fz.c)(this, tz, "f")
        }
        set texture(zz) {
          (0, Fz.g)(this, tz, zz, "f")
        }
        get normalBlendMethod() {
          return (0, Fz.c)(this, sz, "f")
        }
        set normalBlendMethod(zz) {
          (0, Fz.g)(this, sz, zz, "f")
        }
        get isEnabled() {
          return (0, Fz.c)(this, oz, "f")
        }
        set isEnabled(zz) {
          (0, Fz.g)(this, oz, zz, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(zz) {
          let Xz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(zz, "DetailMap", 140, new Kz, Xz), this._texture = null, tz.set(this, (0, Fz.k)(this, Bz, void 0)), this.diffuseBlendLevel = ((0, Fz.k)(this, Pz), (0, Fz.k)(this, rz, 1)), this.roughnessBlendLevel = ((0, Fz.k)(this, Yz), (0, Fz.k)(this, xz, 1)), this.bumpLevel = ((0, Fz.k)(this, mz), (0, Fz.k)(this, Jz, 1)), this._normalBlendMethod = ((0, Fz.k)(this, Iz), Wz.b.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), sz.set(this, (0, Fz.k)(this, Cz, void 0)), this._isEnabled = ((0, Fz.k)(this, ez), !1), oz.set(this, (0, Fz.k)(this, Zz, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Fz.k)(this, Gz), this._internalMarkAllSubMeshesAsTexturesDirty = zz._dirtyCallbacks[1]
        }
        isReadyForSubMesh(zz, tz, sz) {
          return !this._isEnabled || !(zz._areTexturesDirty && tz.texturesEnabled && sz.getCaps().standardDerivatives && this._texture && Oz.b.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(zz, tz) {
          if (this._isEnabled) {
            zz.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const sz = tz.FD();
            zz._areTexturesDirty && (sz.getCaps().standardDerivatives && this._texture && Oz.b.DetailTextureEnabled && this._isEnabled ? ((0, Uz.Y)(this._texture, zz, "DETAIL"), zz.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : zz.DETAIL = !1)
          } else zz.DETAIL = !1
        }
        bindForSubMesh(zz, tz) {
          if (!this._isEnabled) return;
          const sz = this._material.isFrozen;
          zz.useUbo && sz && zz.isSync || this._texture && Oz.b.DetailTextureEnabled && (zz.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, Uz.x)(this._texture, zz, "detail")), tz.texturesEnabled && this._texture && Oz.b.DetailTextureEnabled && zz.setTexture("detailSampler", this._texture)
        }
        hasTexture(zz) {
          return this._texture === zz
        }
        getActiveTextures(zz) {
          this._texture && zz.push(this._texture)
        }
        getAnimatables(zz) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && zz.push(this._texture)
        }
        dispose(zz) {
          zz && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(zz) {
          zz.push("detailSampler")
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
      }, tz = new WeakMap, sz = new WeakMap, oz = new WeakMap, (() => {
        const tz = "function" === typeof Symbol && Symbol.metadata ? Object.create(Hz[Symbol.metadata] ?? null) : void 0;
        uz = [(0, Xz.D)("detailTexture"), (0, Xz.i)("_markAllSubMeshesAsTexturesDirty")], Nz = [(0, Xz.J)()], bz = [(0, Xz.J)()], wz = [(0, Xz.J)()], Dz = [(0, Xz.J)(), (0, Xz.i)("_markAllSubMeshesAsTexturesDirty")], gz = [(0, Xz.J)(), (0, Xz.i)("_markAllSubMeshesAsTexturesDirty")], (0, Fz.h)(zz, null, uz, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: zz => "texture" in zz,
            get: zz => zz.texture,
            set: (zz, tz) => {
              zz.texture = tz
            }
          },
          metadata: tz
        }, Bz, Pz), (0, Fz.h)(zz, null, Dz, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: zz => "normalBlendMethod" in zz,
            get: zz => zz.normalBlendMethod,
            set: (zz, tz) => {
              zz.normalBlendMethod = tz
            }
          },
          metadata: tz
        }, Cz, ez), (0, Fz.h)(zz, null, gz, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isEnabled" in zz,
            get: zz => zz.isEnabled,
            set: (zz, tz) => {
              zz.isEnabled = tz
            }
          },
          metadata: tz
        }, Zz, Gz), (0, Fz.h)(null, null, Nz, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: zz => "diffuseBlendLevel" in zz,
            get: zz => zz.diffuseBlendLevel,
            set: (zz, tz) => {
              zz.diffuseBlendLevel = tz
            }
          },
          metadata: tz
        }, rz, Yz), (0, Fz.h)(null, null, bz, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: zz => "roughnessBlendLevel" in zz,
            get: zz => zz.roughnessBlendLevel,
            set: (zz, tz) => {
              zz.roughnessBlendLevel = tz
            }
          },
          metadata: tz
        }, xz, mz), (0, Fz.h)(null, null, wz, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: zz => "bumpLevel" in zz,
            get: zz => zz.bumpLevel,
            set: (zz, tz) => {
              zz.bumpLevel = tz
            }
          },
          metadata: tz
        }, Jz, Iz), tz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: tz
        })
      })(), zz
    })()
  },
  39444: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Fz
    });
    class Fz {
      constructor(zz) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = zz, zz)
          for (const tz in zz) Object.prototype.hasOwnProperty.call(zz, tz) && this._setDefaultValue(tz)
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
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || zz, this._isDirty = !0
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
        for (const zz of Object.keys(this)) "_" !== zz[0] && this._keys.push(zz);
        if (this._externalProperties)
          for (const zz in this._externalProperties) - 1 === this._keys.indexOf(zz) && this._keys.push(zz)
      }
      isEqual(zz) {
        if (this._keys.length !== zz._keys.length) return !1;
        for (let tz = 0; tz < this._keys.length; tz++) {
          const sz = this._keys[tz];
          if (this[sz] !== zz[sz]) return !1
        }
        return !0
      }
      cloneTo(zz) {
        this._keys.length !== zz._keys.length && (zz._keys = this._keys.slice(0));
        for (let tz = 0; tz < this._keys.length; tz++) {
          const sz = this._keys[tz];
          zz[sz] = this[sz]
        }
      }
      reset() {
        for (const zz of this._keys) this._setDefaultValue(zz)
      }
      _setDefaultValue(zz) {
        const tz = this._externalProperties?.[zz]?.type ?? typeof this[zz],
          sz = this._externalProperties?.[zz]?.default;
        switch (tz) {
          case "number":
            this[zz] = sz ?? 0;
            break;
          case "string":
            this[zz] = sz ?? "";
            break;
          default:
            this[zz] = sz ?? !1
        }
      }
      toString() {
        let zz = "";
        for (let tz = 0; tz < this._keys.length; tz++) {
          const sz = this._keys[tz],
            Fz = this[sz];
          switch (typeof Fz) {
            case "number":
            case "string":
              zz += "#define " + sz + " " + Fz + "\n";
              break;
            default:
              Fz && (zz += "#define " + sz + "\n")
          }
        }
        return zz
      }
    }
  },
  39531: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => oz,
      e: () => Oz,
      h: () => Xz
    });
    var Fz, Wz = sz(36475);

    function Xz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const Fz = tz(zz);
      if (!Number.isInteger(Fz) || Fz < 0 || Fz > sz) throw new Error(`Invalid geometry object ID ${Fz} for mesh "${zz.name}". Object IDs must be integers between 0 and 0x${sz.toString(16).toUpperCase()}.`);
      return Fz
    }

    function Oz(zz, tz) {
      const sz = tz(zz);
      if (!Number.isInteger(sz) || sz < 0 || sz > 255 || 0 !== sz && 0 === (63 & sz)) throw new Error(`Invalid geometry mesh-blending tag ${sz} for mesh "${zz.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return sz
    }! function(zz) {
      zz[zz.Zero = 0] = "Zero", zz[zz.One = 1] = "One", zz[zz.MaxViewZ = 2] = "MaxViewZ", zz[zz.NoClear = 3] = "NoClear"
    }(Fz || (Fz = {}));
    class oz {
      static CreateConfiguration(zz) {
        return oz._Configurations[zz] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: Wz.e.Zero(),
          currentViewProjection: Wz.e.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, oz._Configurations[zz]
      }
      static DeleteConfiguration(zz) {
        delete oz._Configurations[zz]
      }
      static GetConfiguration(zz) {
        return oz._Configurations[zz]
      }
      static _PrepareConfiguration(zz, tz, sz) {
        const Fz = oz._Configurations[zz];
        Fz._attachments = tz, Fz._colorAttachments = sz, Fz._mrtCount = tz.length;
        let Wz = "#define PREPASS\n";
        for (const Xz of oz.GeometryTextureDescriptions) {
          const zz = Fz.defines[Xz.defineIndex];
          void 0 !== zz && (Wz += `#define ${Xz.define}\n#define ${Xz.defineIndex} ${zz}\n`)
        }
        Fz.objectIdIsRedFormat && (Wz += "#define PREPASS_OBJECT_ID_R8\n"), Fz._defines = Wz + `#define SCENE_MRT_COUNT ${tz.length}\n`
      }
      static _PrepareStringDefines(zz, tz) {
        const sz = oz._Configurations[zz];
        return !!sz?._defines && (tz.push(sz._defines), !0)
      }
      static _BindAttachmentsForEffect(zz, tz) {
        const sz = oz._Configurations[zz.currentRenderPassId];
        return !sz?._attachments || (zz.bindAttachments(tz._multiTarget ? sz._attachments : sz._colorAttachments), tz._multiTarget || void 0 !== sz.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(zz) {
        const tz = oz._Configurations[zz.currentRenderPassId];
        tz?._colorAttachments && zz.bindAttachments(tz._colorAttachments)
      }
      static _BindColorAttachments(zz) {
        const tz = oz._Configurations[zz.currentRenderPassId];
        return !tz?._colorAttachments || (zz.bindAttachments(tz._colorAttachments), void 0 !== tz.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(zz) {
        const tz = oz._Configurations[zz.currentRenderPassId];
        return !tz?._colorAttachments || void 0 !== tz.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(zz, tz) {
        const sz = oz._Configurations[zz.currentRenderPassId];
        if (!sz) return;
        const Fz = zz.getAlphaMode(),
          Wz = void 0 === sz.defines.PREPASS_COLOR_INDEX || 2 === Fz || 1 === Fz || 17 === Fz;
        tz.setFloat("geometryZeroAlphaDiscard", Wz ? 1 : 0)
      }
      static AddUniformsAndSamplers(zz, tz) {
        zz.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(zz, tz) {
        for (const sz of tz)
          if (sz.kY)
            for (const tz of sz.kY) tz._removeDrawWrapper(zz)
      }
      static PrepareDefines(zz, tz, sz) {
        if (!sz._arePrePassDirty) return;
        const Fz = oz._Configurations[zz];
        if (!Fz) return;
        sz.PREPASS = !0;
        let Wz = 0;
        for (let Xz = 0; Xz < oz.GeometryTextureDescriptions.length; Xz++) {
          const zz = oz.GeometryTextureDescriptions[Xz],
            tz = zz.define,
            Oz = zz.defineIndex,
            vz = Fz.defines[Oz];
          void 0 !== vz ? (sz[tz] = !0, sz[Oz] = vz, Wz++) : (sz[tz] = !1, delete sz[Oz])
        }
        sz.PREPASS_OBJECT_ID_R8 = Fz.objectIdIsRedFormat, sz.SCENE_MRT_COUNT = Fz._mrtCount ?? Wz, sz.BONES_VELOCITY_ENABLED = tz.useBones && tz.computeBonesUsingShaders && tz.skeleton && !tz.skeleton.isUsingTextureForMatrices && -1 === Fz.excludedSkinnedMesh.indexOf(tz)
      }
      static Bind(zz, tz, sz, Fz, Wz) {
        const vz = oz._Configurations[zz];
        if (!vz) return;
        const Uz = sz.aJ(),
          Kz = Uz.FD();
        if (vz.reverseCulling && Kz.setStateCullFaceType(Uz._mirroredCameraPosition ? Wz.cullBackFaces : !Wz.cullBackFaces), void 0 !== vz.defines.PREPASS_OBJECT_ID_INDEX) {
          const zz = vz.objectIdIsRedFormat ? 255 : 16777215;
          let Fz = sz.uniqueId;
          if (vz.objectIdProvider) Fz = Xz(sz, vz.objectIdProvider, zz);
          else if (Fz > zz) throw new Error(`Invalid geometry object ID ${Fz} for mesh "${sz.name}". Object IDs must be integers between 0 and 0x${zz.toString(16).toUpperCase()}.`);
          tz.setFloat("objectId", Fz)
        }
        if (void 0 !== vz.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const zz = vz.meshBlendTagProvider ? Oz(sz, vz.meshBlendTagProvider) : sz.meshBlendingTag;
          tz.setInt("meshBlendTag", zz)
        }
        if (void 0 !== vz.defines.PREPASS_VELOCITY_INDEX || void 0 !== vz.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const zz = vz._currentWorldMatrices ?? (vz._currentWorldMatrices = {}),
            Wz = vz._worldMatrixFrameIds ?? (vz._worldMatrixFrameIds = {});
          if (zz[sz.uniqueId] || (zz[sz.uniqueId] = Fz.clone(), vz.previousWorldMatrices[sz.uniqueId] = Fz.clone()), Wz[sz.uniqueId] !== Kz.frameId && (vz.previousWorldMatrices[sz.uniqueId].vsz(zz[sz.uniqueId]), Wz[sz.uniqueId] = Kz.frameId), zz[sz.uniqueId].vsz(Fz), -1 === vz.lastUpdateFrameId ? (vz.lastUpdateFrameId = Kz.frameId, vz.previousViewProjection.vsz(Uz.getTransformMatrix()), vz.currentViewProjection.vsz(Uz.getTransformMatrix())) : vz.currentViewProjection.updateFlag !== Uz.getTransformMatrix().updateFlag ? (vz.lastUpdateFrameId = Kz.frameId, vz.previousViewProjection.vsz(vz.currentViewProjection), vz.currentViewProjection.vsz(Uz.getTransformMatrix())) : vz.lastUpdateFrameId !== Kz.frameId && (vz.lastUpdateFrameId = Kz.frameId, vz.previousViewProjection.vsz(vz.currentViewProjection)), tz.setMatrix("previousWorld", vz.previousWorldMatrices[sz.uniqueId]), tz.setMatrix("previousViewProjection", vz.previousViewProjection), sz.useBones && sz.computeBonesUsingShaders && sz.skeleton) {
            const zz = sz.skeleton;
            if (!zz.isUsingTextureForMatrices || -1 === tz.getUniformIndex("boneTextureInfo")) {
              const Fz = zz.getTransformMatrices(sz);
              Fz && (vz.previousBones[sz.uniqueId] || (vz.previousBones[sz.uniqueId] = Fz.slice()), tz.setMatrices("mPreviousBones", vz.previousBones[sz.uniqueId]), vz.previousBones[sz.uniqueId].set(Fz))
            }
          }
        }
      }
    }
    oz.GeometryTextureDescriptions = [{
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
    }], oz._Configurations = {}
  },
  39515: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Nz,
      g: () => wz
    });
    var Fz = sz(39167),
      Wz = sz(39170),
      Xz = sz(39071),
      Oz = sz(39041);
    const oz = new RegExp("^([gimus]+)!");
    class vz {
      constructor(zz) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = zz, this._scene = zz.aJ(), this._engine = this._scene.FD()
      }
      _addPlugin(zz) {
        for (let Fz = 0; Fz < this._plugins.length; ++Fz)
          if (this._plugins[Fz].name === zz.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !zz.isCompatible(this._material.shaderLanguage)) throw `The plugin "${zz.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const tz = zz.getClassName();
        vz._MaterialPluginClassToMainDefine[tz] || (vz._MaterialPluginClassToMainDefine[tz] = "MATERIALPLUGIN_" + ++vz._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (zz, tz) => this._handlePluginEvent(zz, tz), this._plugins.push(zz), this._plugins.sort(((zz, tz) => zz.priority - tz.priority)), this._codeInjectionPoints = {};
        const sz = {};
        sz[vz._MaterialPluginClassToMainDefine[tz]] = {
          type: "boolean",
          default: !0
        };
        for (const Fz of this._plugins) Fz.collectDefines(sz), this._collectPointNames("vertex", Fz.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Fz.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = sz, !0
      }
      _activatePlugin(zz) {
        -1 === this._activePlugins.indexOf(zz) && (this._activePlugins.push(zz), this._activePlugins.sort(((zz, tz) => zz.priority - tz.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), zz.registerForExtraEvents && (this._activePluginsForExtraEvents.push(zz), this._activePluginsForExtraEvents.sort(((zz, tz) => zz.priority - tz.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(zz) {
        for (let tz = 0; tz < this._plugins.length; ++tz)
          if (this._plugins[tz].name === zz) return this._plugins[tz];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(zz) {
        let tz = !0;
        for (const sz of this._activePlugins) tz = tz && sz.isReadyForSubMesh(zz.defines, this._scene, this._engine, zz.subMesh);
        zz.isReadyForSubMesh = tz
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(zz) {
        for (const tz of this._activePlugins) tz.prepareDefinesBeforeAttributes(zz.defines, this._scene, zz.mesh)
      }
      _handlePluginEventPrepareDefines(zz) {
        for (const tz of this._activePlugins) tz.prepareDefines(zz.defines, this._scene, zz.mesh)
      }
      _handlePluginEventHardBindForSubMesh(zz) {
        for (const tz of this._activePluginsForExtraEvents) tz.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, zz.subMesh)
      }
      _handlePluginEventBindForSubMesh(zz) {
        for (const tz of this._activePlugins) tz.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, zz.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(zz) {
        let tz = !1;
        for (const sz of this._activePluginsForExtraEvents)
          if (tz = sz.hasRenderTargetTextures(), tz) break;
        zz.hasRenderTargetTextures = tz
      }
      _handlePluginEventFillRenderTargetTextures(zz) {
        for (const tz of this._activePluginsForExtraEvents) tz.fillRenderTargetTextures(zz.renderTargets)
      }
      _handlePluginEvent(zz, tz) {
        switch (zz) {
          case 512: {
            const zz = tz;
            for (const tz of this._activePlugins) tz.getActiveTextures(zz.activeTextures);
            break
          }
          case 256: {
            const zz = tz;
            for (const tz of this._activePlugins) tz.getAnimatables(zz.animatables);
            break
          }
          case 1024: {
            const zz = tz;
            let sz = !1;
            for (const tz of this._activePlugins)
              if (sz = tz.hasTexture(zz.texture), sz) break;
            zz.hasTexture = sz;
            break
          }
          case 2: {
            const zz = tz;
            for (const tz of this._plugins) tz.dispose(zz.forceDisposeTextures);
            break
          }
          case 4:
            tz.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const zz = tz;
            for (const tz of this._activePlugins) zz.fallbackRank = tz.addFallbacks(zz.defines, zz.fallbacks, zz.fallbackRank), tz.getAttributes(zz.attributes, this._scene, zz.mesh);
            this._uniformList.length > 0 && zz.uniforms.push(...this._uniformList), this._samplerList.length > 0 && zz.samplers.push(...this._samplerList), this._uboList.length > 0 && zz.uniformBuffersNames.push(...this._uboList), zz.customCode = this._injectCustomCode(zz, zz.customCode);
            break
          }
          case 8: {
            const zz = tz;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const sz = 1 === this._material.shaderLanguage;
            for (const tz of this._plugins) {
              const Fz = tz.getUniforms(this._material.shaderLanguage);
              if (Fz) {
                if (Fz.ubo)
                  for (const tz of Fz.ubo) {
                    if (tz.size && tz.type) {
                      const Fz = tz.arraySize ?? 0;
                      if (zz.ubo.addUniform(tz.name, tz.size, Fz), sz) {
                        let zz;
                        switch (tz.type) {
                          case "mat4":
                            zz = "mat4x4f";
                            break;
                          case "float":
                            zz = "f32";
                            break;
                          default:
                            zz = `${tz.type}f`
                        }
                        this._uboDeclaration += Fz > 0 ? `uniform ${tz.name}: array<${zz}, ${Fz}>;\n` : `uniform ${tz.name}: ${zz};\n`
                      } else this._uboDeclaration += `${tz.type} ${tz.name}${Fz>0?`[${Fz}]`:""};\n`
                    }
                    this._uniformList.push(tz.name)
                  }
                Fz.vertex && (this._vertexDeclaration += Fz.vertex + "\n"), Fz.fragment && (this._fragmentDeclaration += Fz.fragment + "\n"), Fz.externalUniforms && this._uniformList.push(...Fz.externalUniforms)
              }
              tz.getSamplers(this._samplerList), tz.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(zz, tz) {
        if (tz)
          for (const sz in tz) this._codeInjectionPoints[zz] || (this._codeInjectionPoints[zz] = {}), this._codeInjectionPoints[zz][sz] = !0
      }
      _injectCustomCode(zz, tz) {
        return (sz, Fz) => {
          tz && (Fz = tz(sz, Fz)), this._uboDeclaration && (Fz = Fz.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Fz = Fz.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (Fz = Fz.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const Wz = this._codeInjectionPoints?.[sz];
          if (!Wz) return Fz;
          let vz = null;
          for (let tz in Wz) {
            let Wz = "";
            for (const Fz of this._activePlugins) {
              const oz = this._material.shaderLanguage;
              let Uz = Fz.getCustomCode(sz, oz)?.[tz];
              Uz && (Fz.resolveIncludes && (null === vz && (vz = {
                defines: [],
                indexParameters: zz.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: Oz.e.GetShadersRepository(oz),
                includesShadersStore: Oz.e.GetIncludesShadersStore(oz),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                ysz: this._engine.ysz,
                processCodeAfterIncludes: void 0
              }), vz.isFragment = "fragment" === sz, (0, Xz.j)(Uz, vz, (zz => Uz = zz))), Wz += Uz + "\n")
            }
            if (Wz.length > 0)
              if ("!" === tz.charAt(0)) {
                tz = tz.substring(1);
                let zz = "g";
                if ("!" === tz.charAt(0)) zz = "", tz = tz.substring(1);
                else {
                  const sz = oz.exec(tz);
                  sz && sz.length >= 2 && (zz = sz[1], tz = tz.substring(zz.length + 1))
                }
                zz.indexOf("g") < 0 && (zz += "g");
                const sz = new RegExp(tz, zz);
                let Xz = sz.exec(Fz);
                for (; null !== Xz;) {
                  const {
                    index: zz
                  } = Xz, tz = Uz(Wz, Xz);
                  Fz = Fz.substring(0, zz) + tz + Fz.substring(zz + Xz[0].length), sz.lastIndex = zz + tz.length, Xz = sz.exec(Fz)
                }
              } else {
                const zz = "#define " + tz;
                Fz = Fz.replace(zz, "\n" + Wz + "\n" + zz)
              }
          }
          return Fz
        }
      }
    }
    vz._MaterialPluginClassToMainDefine = {}, vz._MaterialPluginCounter = 0;

    function Uz(zz, tz) {
      return zz.replace(/\$(\d+)/g, ((zz, sz) => {
        const Fz = Number(sz);
        return Fz < tz.length ? tz[Fz] : ""
      }))
    }
    var Kz = sz(39181),
      uz = sz(36518);
    let Nz = (() => {
        var zz;
        let tz, sz, Xz, Oz, oz = [],
          Uz = [],
          uz = [],
          Nz = [],
          bz = [],
          wz = [],
          Dz = [],
          gz = [];
        return zz = class {
          isCompatible(zz) {
            return 0 === zz
          }
          _enable(zz) {
            zz && this._pluginManager._activatePlugin(this)
          }
          constructor(zz, tz, sz, Wz) {
            let Xz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              Oz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              Kz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, Fz.k)(this, oz, void 0), this.priority = ((0, Fz.k)(this, Uz), (0, Fz.k)(this, uz, 500)), this.resolveIncludes = ((0, Fz.k)(this, Nz), (0, Fz.k)(this, bz, !1)), this.registerForExtraEvents = ((0, Fz.k)(this, wz), (0, Fz.k)(this, Dz, !1)), this.doNotSerialize = ((0, Fz.k)(this, gz), !1), this._material = zz, this.name = tz, this.priority = sz, this.resolveIncludes = Kz, zz.pluginManager || (zz.pluginManager = new vz(zz), zz.qJ.add((() => {
              zz.pluginManager = void 0
            }))), this._pluginDefineNames = Wz, this._pluginManager = zz.pluginManager, Xz && this._pluginManager._addPlugin(this), Oz && this._enable(!0), this.markAllDefinesAsDirty = zz._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(zz, tz, sz, Fz) {
            return !0
          }
          hardBindForSubMesh(zz, tz, sz, Fz) {}
          bindForSubMesh(zz, tz, sz, Fz) {}
          dispose(zz) {}
          getCustomCode(zz) {
            return null
          }
          collectDefines(zz) {
            if (this._pluginDefineNames)
              for (const tz of Object.keys(this._pluginDefineNames)) {
                if ("_" === tz[0]) continue;
                const sz = typeof this._pluginDefineNames[tz];
                zz[tz] = {
                  type: "number" === sz ? "number" : "string" === sz ? "string" : "boolean" === sz ? "boolean" : "object",
                  default: this._pluginDefineNames[tz]
                }
              }
          }
          prepareDefinesBeforeAttributes(zz, tz, sz) {}
          prepareDefines(zz, tz, sz) {}
          hasTexture(zz) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(zz) {}
          getActiveTextures(zz) {}
          getAnimatables(zz) {}
          addFallbacks(zz, tz, sz) {
            return sz
          }
          getSamplers(zz) {}
          getAttributes(zz, tz, sz) {}
          getUniformBuffersNames(zz) {}
          getUniforms() {
            return {}
          }
          copyTo(zz) {
            Kz.e.Clone((() => zz), this)
          }
          serialize() {
            return Kz.e.Serialize(this)
          }
          parse(zz, tz, sz) {
            Kz.e.Parse((() => this), zz, tz, sz)
          }
        }, (() => {
          const vz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          tz = [(0, Wz.J)()], sz = [(0, Wz.J)()], Xz = [(0, Wz.J)()], Oz = [(0, Wz.J)()], (0, Fz.h)(null, null, tz, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: zz => "name" in zz,
              get: zz => zz.name,
              set: (zz, tz) => {
                zz.name = tz
              }
            },
            metadata: vz
          }, oz, Uz), (0, Fz.h)(null, null, sz, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: zz => "priority" in zz,
              get: zz => zz.priority,
              set: (zz, tz) => {
                zz.priority = tz
              }
            },
            metadata: vz
          }, uz, Nz), (0, Fz.h)(null, null, Xz, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: zz => "resolveIncludes" in zz,
              get: zz => zz.resolveIncludes,
              set: (zz, tz) => {
                zz.resolveIncludes = tz
              }
            },
            metadata: vz
          }, bz, wz), (0, Fz.h)(null, null, Oz, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: zz => "registerForExtraEvents" in zz,
              get: zz => zz.registerForExtraEvents,
              set: (zz, tz) => {
                zz.registerForExtraEvents = tz
              }
            },
            metadata: vz
          }, Dz, gz), vz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: vz
          })
        })(), zz
      })(),
      bz = !1;

    function wz() {
      bz || (bz = !0, (0, uz.g)("BABYLON.MaterialPluginBase", Nz))
    }
  },
  39436: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz
    });
    class Fz {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(zz) {
        zz.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(zz) {}
      bindForSubMesh(zz, tz, sz, Fz, Wz) {
        if (tz.prePassRenderer && tz.prePassRenderer.enabled && tz.prePassRenderer.currentRTisSceneRT && (-1 !== tz.prePassRenderer.getIndex(2) || -1 !== tz.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[sz.uniqueId] || (this.previousWorldMatrices[sz.uniqueId] = Fz.clone()), this.previousViewProjection || (this.previousViewProjection = tz.getTransformMatrix().clone(), this.currentViewProjection = tz.getTransformMatrix().clone());
          const Wz = tz.FD();
          this.currentViewProjection.updateFlag !== tz.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = Wz.frameId, this.previousViewProjection.vsz(this.currentViewProjection), this.currentViewProjection.vsz(tz.getTransformMatrix())) : this._lastUpdateFrameId !== Wz.frameId && (this._lastUpdateFrameId = Wz.frameId, this.previousViewProjection.vsz(this.currentViewProjection)), zz.setMatrix("previousWorld", this.previousWorldMatrices[sz.uniqueId]), zz.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[sz.uniqueId] = Fz.clone()
        }
      }
    }
  },
  39541: (zz, tz, sz) => {
    function Fz(zz) {
      return class extends zz {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    sz.d(tz, {
      d: () => Fz
    })
  },
  39427: (zz, tz, sz) => {
    sz.d(tz, {
      StandardMaterial: () => Fz.e
    });
    var Fz = sz(39430);
    (0, Fz.d)()
  },
  39430: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Mz,
      e: () => Az
    });
    var Fz = sz(39167),
      Wz = sz(39170),
      Xz = sz(39270),
      Oz = sz(39256),
      oz = sz(36654),
      vz = sz(39293),
      Uz = sz(39436),
      Kz = sz(39439),
      uz = sz(39272),
      Nz = sz(39451),
      bz = sz(39444),
      wz = sz(39501),
      Dz = sz(39499),
      gz = sz(39507),
      Hz = sz(39509),
      Bz = sz(39493),
      Pz = sz(39522),
      rz = sz(39489),
      Yz = sz(39181),
      xz = sz(39529),
      mz = sz(39531),
      Jz = sz(39535),
      Iz = sz(39541),
      Cz = sz(39545),
      ez = sz(36518),
      Zz = sz(39065);
    const Gz = {
      effect: null,
      subMesh: null
    };
    class Tz extends((0, Iz.d)((0, Jz.e)(bz.d))) {}
    class cz extends((0, Kz.f)(Tz)) {
      constructor(zz) {
        super(zz), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class jz extends((0, Cz.c)(wz.c)) {}
    let Az = (() => {
        var zz, tz, Kz, bz, Jz, Iz, Cz, ez, Zz, Tz, Az, yz, Mz, dz, hz, Qz, kz, iz, Lz, lz, nz, az, qz, Sz, Vz, Rz, pz, fz, Ez, zt, tt, st, Ft;
        let Wt, Xt, Ot, ot, vt, Ut, Kt, ut, Nt, bt, wt, Dt, gt, Ht, Bt, Pt, rt, Yt, xt, mt, Jt, It, Ct, et, Zt, Gt, Tt, ct, jt, At, yt, Mt, dt, ht, Qt, kt, it, Lt, lt, nt, qt, St, Vt, Rt, pt, ft, Et, zs, ts, ss, Fs, Ws, Xs, Os, os, vs, Us, Ks, us, Ns, bs, ws, Ds, gs, Hs, Bs, Ps, rs, Ys, xs, ms, Is, Cs, es = jz,
          Zs = [],
          Gs = [],
          Ts = [],
          cs = [],
          As = [],
          ys = [],
          Ms = [],
          ds = [],
          hs = [],
          Qs = [],
          ks = [],
          is = [],
          Ls = [],
          ls = [],
          ns = [],
          as = [],
          qs = [],
          Ss = [],
          Vs = [],
          Rs = [],
          ps = [],
          fs = [],
          Es = [],
          zF = [],
          tF = [],
          sF = [],
          FF = [],
          WF = [],
          XF = [],
          OF = [],
          oF = [],
          vF = [],
          UF = [],
          KF = [],
          uF = [],
          NF = [],
          bF = [],
          wF = [],
          DF = [],
          gF = [],
          HF = [],
          BF = [],
          PF = [],
          rF = [],
          YF = [],
          xF = [],
          mF = [],
          JF = [],
          IF = [],
          CF = [],
          eF = [],
          ZF = [],
          GF = [],
          TF = [],
          cF = [],
          jF = [],
          AF = [],
          yF = [],
          MF = [],
          dF = [],
          hF = [],
          QF = [],
          kF = [],
          iF = [],
          LF = [],
          lF = [],
          nF = [],
          aF = [],
          qF = [],
          SF = [],
          VF = [],
          RF = [],
          pF = [],
          fF = [],
          EF = [],
          zW = [],
          tW = [],
          sW = [],
          FW = [],
          WW = [],
          XW = [],
          OW = [],
          oW = [],
          vW = [],
          UW = [],
          KW = [],
          uW = [],
          NW = [],
          bW = [],
          wW = [],
          DW = [],
          gW = [],
          HW = [],
          BW = [],
          PW = [],
          rW = [],
          YW = [],
          xW = [],
          mW = [],
          JW = [],
          IW = [],
          CW = [],
          eW = [],
          ZW = [],
          GW = [],
          TW = [],
          cW = [],
          jW = [],
          AW = [],
          yW = [],
          MW = [],
          dW = [],
          hW = [],
          QW = [],
          kW = [],
          iW = [],
          LW = [],
          lW = [],
          nW = [],
          aW = [],
          qW = [],
          SW = [],
          VW = [],
          RW = [],
          pW = [],
          fW = [],
          EW = [],
          zX = [],
          tX = [],
          sX = [],
          FX = [],
          WX = [],
          XX = [],
          OX = [],
          oX = [],
          vX = [],
          UX = [],
          KX = [],
          uX = [],
          NX = [],
          bX = [],
          wX = [],
          DX = [],
          gX = [],
          HX = [],
          BX = [];
        return zz = class extends es {
          get diffuseTexture() {
            return (0, Fz.c)(this, tz, "f")
          }
          set diffuseTexture(zz) {
            (0, Fz.g)(this, tz, zz, "f")
          }
          get ambientTexture() {
            return (0, Fz.c)(this, Kz, "f")
          }
          set ambientTexture(zz) {
            (0, Fz.g)(this, Kz, zz, "f")
          }
          get opacityTexture() {
            return (0, Fz.c)(this, bz, "f")
          }
          set opacityTexture(zz) {
            (0, Fz.g)(this, bz, zz, "f")
          }
          get reflectionTexture() {
            return (0, Fz.c)(this, Jz, "f")
          }
          set reflectionTexture(zz) {
            (0, Fz.g)(this, Jz, zz, "f")
          }
          get emissiveTexture() {
            return (0, Fz.c)(this, Iz, "f")
          }
          set emissiveTexture(zz) {
            (0, Fz.g)(this, Iz, zz, "f")
          }
          get specularTexture() {
            return (0, Fz.c)(this, Cz, "f")
          }
          set specularTexture(zz) {
            (0, Fz.g)(this, Cz, zz, "f")
          }
          get bumpTexture() {
            return (0, Fz.c)(this, ez, "f")
          }
          set bumpTexture(zz) {
            (0, Fz.g)(this, ez, zz, "f")
          }
          get lightmapTexture() {
            return (0, Fz.c)(this, Zz, "f")
          }
          set lightmapTexture(zz) {
            (0, Fz.g)(this, Zz, zz, "f")
          }
          get refractionTexture() {
            return (0, Fz.c)(this, Tz, "f")
          }
          set refractionTexture(zz) {
            (0, Fz.g)(this, Tz, zz, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, Fz.c)(this, Az, "f")
          }
          set useAlphaFromDiffuseTexture(zz) {
            (0, Fz.g)(this, Az, zz, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, Fz.c)(this, yz, "f")
          }
          set useEmissiveAsIllumination(zz) {
            (0, Fz.g)(this, yz, zz, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, Fz.c)(this, Mz, "f")
          }
          set linkEmissiveWithDiffuse(zz) {
            (0, Fz.g)(this, Mz, zz, "f")
          }
          get useSpecularOverAlpha() {
            return (0, Fz.c)(this, dz, "f")
          }
          set useSpecularOverAlpha(zz) {
            (0, Fz.g)(this, dz, zz, "f")
          }
          get useReflectionOverAlpha() {
            return (0, Fz.c)(this, hz, "f")
          }
          set useReflectionOverAlpha(zz) {
            (0, Fz.g)(this, hz, zz, "f")
          }
          get disableLighting() {
            return (0, Fz.c)(this, Qz, "f")
          }
          set disableLighting(zz) {
            (0, Fz.g)(this, Qz, zz, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, Fz.c)(this, kz, "f")
          }
          set useObjectSpaceNormalMap(zz) {
            (0, Fz.g)(this, kz, zz, "f")
          }
          get useParallax() {
            return (0, Fz.c)(this, iz, "f")
          }
          set useParallax(zz) {
            (0, Fz.g)(this, iz, zz, "f")
          }
          get useParallaxOcclusion() {
            return (0, Fz.c)(this, Lz, "f")
          }
          set useParallaxOcclusion(zz) {
            (0, Fz.g)(this, Lz, zz, "f")
          }
          get roughness() {
            return (0, Fz.c)(this, lz, "f")
          }
          set roughness(zz) {
            (0, Fz.g)(this, lz, zz, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, Fz.c)(this, nz, "f")
          }
          set useLightmapAsShadowmap(zz) {
            (0, Fz.g)(this, nz, zz, "f")
          }
          get diffuseFresnelParameters() {
            return (0, Fz.c)(this, az, "f")
          }
          set diffuseFresnelParameters(zz) {
            (0, Fz.g)(this, az, zz, "f")
          }
          get opacityFresnelParameters() {
            return (0, Fz.c)(this, qz, "f")
          }
          set opacityFresnelParameters(zz) {
            (0, Fz.g)(this, qz, zz, "f")
          }
          get reflectionFresnelParameters() {
            return (0, Fz.c)(this, Sz, "f")
          }
          set reflectionFresnelParameters(zz) {
            (0, Fz.g)(this, Sz, zz, "f")
          }
          get refractionFresnelParameters() {
            return (0, Fz.c)(this, Vz, "f")
          }
          set refractionFresnelParameters(zz) {
            (0, Fz.g)(this, Vz, zz, "f")
          }
          get emissiveFresnelParameters() {
            return (0, Fz.c)(this, Rz, "f")
          }
          set emissiveFresnelParameters(zz) {
            (0, Fz.g)(this, Rz, zz, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, Fz.c)(this, pz, "f")
          }
          set useReflectionFresnelFromSpecular(zz) {
            (0, Fz.g)(this, pz, zz, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, Fz.c)(this, fz, "f")
          }
          set useGlossinessFromSpecularMapAlpha(zz) {
            (0, Fz.g)(this, fz, zz, "f")
          }
          get maxSimultaneousLights() {
            return (0, Fz.c)(this, Ez, "f")
          }
          set maxSimultaneousLights(zz) {
            (0, Fz.g)(this, Ez, zz, "f")
          }
          get invertNormalMapX() {
            return (0, Fz.c)(this, zt, "f")
          }
          set invertNormalMapX(zz) {
            (0, Fz.g)(this, zt, zz, "f")
          }
          get invertNormalMapY() {
            return (0, Fz.c)(this, tt, "f")
          }
          set invertNormalMapY(zz) {
            (0, Fz.g)(this, tt, zz, "f")
          }
          get twoSidedLighting() {
            return (0, Fz.c)(this, st, "f")
          }
          set twoSidedLighting(zz) {
            (0, Fz.g)(this, st, zz, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Fz.c)(this, Ft, "f")
          }
          set applyDecalMapAfterDetailMap(zz) {
            (0, Fz.g)(this, Ft, zz, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(sz, Wz) {
            super(sz, Wz, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || zz.ForceGLSL), this._diffuseTexture = (0, Fz.k)(this, Zs, null), tz.set(this, ((0, Fz.k)(this, Gs), (0, Fz.k)(this, Ts, void 0))), this._ambientTexture = ((0, Fz.k)(this, cs), (0, Fz.k)(this, As, null)), Kz.set(this, ((0, Fz.k)(this, ys), (0, Fz.k)(this, Ms, void 0))), this._opacityTexture = ((0, Fz.k)(this, ds), (0, Fz.k)(this, hs, null)), bz.set(this, ((0, Fz.k)(this, Qs), (0, Fz.k)(this, ks, void 0))), this._reflectionTexture = ((0, Fz.k)(this, is), (0, Fz.k)(this, Ls, null)), Jz.set(this, ((0, Fz.k)(this, ls), (0, Fz.k)(this, ns, void 0))), this._emissiveTexture = ((0, Fz.k)(this, as), (0, Fz.k)(this, qs, null)), Iz.set(this, ((0, Fz.k)(this, Ss), (0, Fz.k)(this, Vs, void 0))), this._specularTexture = ((0, Fz.k)(this, Rs), (0, Fz.k)(this, ps, null)), Cz.set(this, ((0, Fz.k)(this, fs), (0, Fz.k)(this, Es, void 0))), this._bumpTexture = ((0, Fz.k)(this, zF), (0, Fz.k)(this, tF, null)), ez.set(this, ((0, Fz.k)(this, sF), (0, Fz.k)(this, FF, void 0))), this._lightmapTexture = ((0, Fz.k)(this, WF), (0, Fz.k)(this, XF, null)), Zz.set(this, ((0, Fz.k)(this, OF), (0, Fz.k)(this, oF, void 0))), this._refractionTexture = ((0, Fz.k)(this, vF), (0, Fz.k)(this, UF, null)), Tz.set(this, ((0, Fz.k)(this, KF), (0, Fz.k)(this, uF, void 0))), this.ambientColor = ((0, Fz.k)(this, NF), (0, Fz.k)(this, bF, new oz.c(0, 0, 0))), this.diffuseColor = ((0, Fz.k)(this, wF), (0, Fz.k)(this, DF, new oz.c(1, 1, 1))), this.specularColor = ((0, Fz.k)(this, gF), (0, Fz.k)(this, HF, new oz.c(1, 1, 1))), this.emissiveColor = ((0, Fz.k)(this, BF), (0, Fz.k)(this, PF, new oz.c(0, 0, 0))), this.specularPower = ((0, Fz.k)(this, rF), (0, Fz.k)(this, YF, 64)), this._useAlphaFromDiffuseTexture = ((0, Fz.k)(this, xF), (0, Fz.k)(this, mF, !1)), Az.set(this, ((0, Fz.k)(this, JF), (0, Fz.k)(this, IF, void 0))), this._useEmissiveAsIllumination = ((0, Fz.k)(this, CF), (0, Fz.k)(this, eF, !1)), yz.set(this, ((0, Fz.k)(this, ZF), (0, Fz.k)(this, GF, void 0))), this._linkEmissiveWithDiffuse = ((0, Fz.k)(this, TF), (0, Fz.k)(this, cF, !1)), Mz.set(this, ((0, Fz.k)(this, jF), (0, Fz.k)(this, AF, void 0))), this._useSpecularOverAlpha = ((0, Fz.k)(this, yF), (0, Fz.k)(this, MF, !1)), dz.set(this, ((0, Fz.k)(this, dF), (0, Fz.k)(this, hF, void 0))), this._useReflectionOverAlpha = ((0, Fz.k)(this, QF), (0, Fz.k)(this, kF, !1)), hz.set(this, ((0, Fz.k)(this, iF), (0, Fz.k)(this, LF, void 0))), this._disableLighting = ((0, Fz.k)(this, lF), (0, Fz.k)(this, nF, !1)), Qz.set(this, ((0, Fz.k)(this, aF), (0, Fz.k)(this, qF, void 0))), this._useObjectSpaceNormalMap = ((0, Fz.k)(this, SF), (0, Fz.k)(this, VF, !1)), kz.set(this, ((0, Fz.k)(this, RF), (0, Fz.k)(this, pF, void 0))), this._useParallax = ((0, Fz.k)(this, fF), (0, Fz.k)(this, EF, !1)), iz.set(this, ((0, Fz.k)(this, zW), (0, Fz.k)(this, tW, void 0))), this._useParallaxOcclusion = ((0, Fz.k)(this, sW), (0, Fz.k)(this, FW, !1)), Lz.set(this, ((0, Fz.k)(this, WW), (0, Fz.k)(this, XW, void 0))), this.parallaxScaleBias = ((0, Fz.k)(this, OW), (0, Fz.k)(this, oW, .05)), this._roughness = ((0, Fz.k)(this, vW), (0, Fz.k)(this, UW, 0)), lz.set(this, ((0, Fz.k)(this, KW), (0, Fz.k)(this, uW, void 0))), this.indexOfRefraction = ((0, Fz.k)(this, NW), (0, Fz.k)(this, bW, .98)), this.invertRefractionY = ((0, Fz.k)(this, wW), (0, Fz.k)(this, DW, !0)), this.alphaCutOff = ((0, Fz.k)(this, gW), (0, Fz.k)(this, HW, .4)), this._useLightmapAsShadowmap = ((0, Fz.k)(this, BW), (0, Fz.k)(this, PW, !1)), nz.set(this, ((0, Fz.k)(this, rW), (0, Fz.k)(this, YW, void 0))), this._diffuseFresnelParameters = ((0, Fz.k)(this, xW), (0, Fz.k)(this, mW, void 0)), az.set(this, ((0, Fz.k)(this, JW), (0, Fz.k)(this, IW, void 0))), this._opacityFresnelParameters = ((0, Fz.k)(this, CW), (0, Fz.k)(this, eW, void 0)), qz.set(this, ((0, Fz.k)(this, ZW), (0, Fz.k)(this, GW, void 0))), this._reflectionFresnelParameters = ((0, Fz.k)(this, TW), (0, Fz.k)(this, cW, void 0)), Sz.set(this, ((0, Fz.k)(this, jW), (0, Fz.k)(this, AW, void 0))), this._refractionFresnelParameters = ((0, Fz.k)(this, yW), (0, Fz.k)(this, MW, void 0)), Vz.set(this, ((0, Fz.k)(this, dW), (0, Fz.k)(this, hW, void 0))), this._emissiveFresnelParameters = ((0, Fz.k)(this, QW), (0, Fz.k)(this, kW, void 0)), Rz.set(this, ((0, Fz.k)(this, iW), (0, Fz.k)(this, LW, void 0))), this._useReflectionFresnelFromSpecular = ((0, Fz.k)(this, lW), (0, Fz.k)(this, nW, !1)), pz.set(this, ((0, Fz.k)(this, aW), (0, Fz.k)(this, qW, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, Fz.k)(this, SW), (0, Fz.k)(this, VW, !1)), fz.set(this, ((0, Fz.k)(this, RW), (0, Fz.k)(this, pW, void 0))), this._maxSimultaneousLights = ((0, Fz.k)(this, fW), (0, Fz.k)(this, EW, 4)), Ez.set(this, ((0, Fz.k)(this, zX), (0, Fz.k)(this, tX, void 0))), this._invertNormalMapX = ((0, Fz.k)(this, sX), (0, Fz.k)(this, FX, !1)), zt.set(this, ((0, Fz.k)(this, WX), (0, Fz.k)(this, XX, void 0))), this._invertNormalMapY = ((0, Fz.k)(this, OX), (0, Fz.k)(this, oX, !1)), tt.set(this, ((0, Fz.k)(this, vX), (0, Fz.k)(this, UX, void 0))), this._twoSidedLighting = ((0, Fz.k)(this, KX), (0, Fz.k)(this, uX, !1)), st.set(this, ((0, Fz.k)(this, NX), (0, Fz.k)(this, bX, void 0))), this._applyDecalMapAfterDetailMap = ((0, Fz.k)(this, wX), (0, Fz.k)(this, DX, !1)), Ft.set(this, ((0, Fz.k)(this, gX), (0, Fz.k)(this, HX, void 0))), this._vertexPullingMetadata = ((0, Fz.k)(this, BX), null), this._renderTargets = new Xz.h(16), this._globalAmbientColor = new oz.c(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new Hz.d(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new Uz.c, this.getRenderTargetTextures = () => (this._renderTargets.reset(), zz.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), zz.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(zz.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(zz.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === Nz.b.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== Nz.b.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(tz, sz) {
            let Fz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Wz = sz._drawWrapper;
            if (Wz.effect && this.isFrozen && Wz._wasPreviouslyReady && Wz._wasPreviouslyUsingInstances === Fz) return !0;
            sz.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), sz.materialDefines = new cz(this._eventInfo.defineNames));
            const Xz = this.aJ(),
              Oz = sz.materialDefines;
            if (this._isReadyForSubMesh(sz)) return !0;
            const oz = Xz.FD();
            if (Oz._needNormals = (0, rz.X)(Xz, tz, Oz, !0, this._maxSimultaneousLights, this._disableLighting), !(0, rz.d)(Xz, tz, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, rz.cb)(Xz, Oz);
            const Kz = this.needAlphaBlendingForMesh(tz) && this.aJ().useOrderIndependentTransparency;
            if ((0, rz.hb)(Xz, Oz, this.canRenderToMRT && !Kz), (0, rz.eb)(Xz, Oz, Kz), mz.c.PrepareDefines(oz.currentRenderPassId, tz, Oz), Oz._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Oz._needUVs = !1;
              for (let zz = 1; zz <= 6; ++zz) Oz["MAINUV" + zz] = !1;
              if (Xz.texturesEnabled) {
                if (Oz.DIFFUSEDIRECTUV = 0, Oz.BUMPDIRECTUV = 0, Oz.AMBIENTDIRECTUV = 0, Oz.OPACITYDIRECTUV = 0, Oz.EMISSIVEDIRECTUV = 0, Oz.SPECULARDIRECTUV = 0, Oz.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && zz.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, rz.Y)(this._diffuseTexture, Oz, "DIFFUSE")
                } else Oz.DIFFUSE = !1;
                if (this._ambientTexture && zz.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, rz.Y)(this._ambientTexture, Oz, "AMBIENT")
                } else Oz.AMBIENT = !1;
                if (this._opacityTexture && zz.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, rz.Y)(this._opacityTexture, Oz, "OPACITY"), Oz.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else Oz.OPACITY = !1;
                if (this._reflectionTexture && zz.ReflectionTextureEnabled ? (Oz.ROUGHNESS = this._roughness > 0, Oz.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (Oz.ROUGHNESS = !1, Oz.REFLECTIONOVERALPHA = !1), !(0, rz.U)(Xz, this._reflectionTexture, Oz)) return !1;
                if (this._emissiveTexture && zz.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, rz.Y)(this._emissiveTexture, Oz, "EMISSIVE")
                } else Oz.EMISSIVE = !1;
                if (this._lightmapTexture && zz.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, rz.Y)(this._lightmapTexture, Oz, "LIGHTMAP"), Oz.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Oz.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else Oz.LIGHTMAP = !1;
                if (this._specularTexture && zz.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, rz.Y)(this._specularTexture, Oz, "SPECULAR"), Oz.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else Oz.SPECULAR = !1;
                if (Xz.FD().getCaps().standardDerivatives && this._bumpTexture && zz.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, rz.Y)(this._bumpTexture, Oz, "BUMP"), Oz.PARALLAX = this._useParallax, Oz.PARALLAX_RHS = Xz.useRightHandedSystem, Oz.PARALLAXOCCLUSION = this._useParallaxOcclusion, Oz.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else Oz.BUMP = !1, Oz.PARALLAX = !1, Oz.PARALLAX_RHS = !1, Oz.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && zz.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  Oz._needUVs = !0, Oz.REFRACTION = !0, Oz.REFRACTIONMAP_3D = this._refractionTexture.isCube, Oz.RGBDREFRACTION = this._refractionTexture.isRGBD, Oz.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else Oz.REFRACTION = !1;
                Oz.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else Oz.DIFFUSE = !1, Oz.AMBIENT = !1, Oz.OPACITY = !1, Oz.REFLECTION = !1, Oz.EMISSIVE = !1, Oz.LIGHTMAP = !1, Oz.BUMP = !1, Oz.REFRACTION = !1;
              Oz.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), Oz.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, Oz.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, Oz.SPECULAROVERALPHA = this._useSpecularOverAlpha, Oz.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Oz.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, Oz.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(tz), Oz.TEXTURE_REPETITION_MODE = oz.version > 1 || oz.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Oz, this._eventInfo.subMesh = sz, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Oz._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(Oz), Oz.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, Oz.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (Oz._areFresnelDirty && (zz.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (Oz.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, Oz.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, Oz.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, Oz.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, Oz.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, Oz.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, Oz._needNormals = !0, Oz.FRESNEL = !0) : Oz.FRESNEL = !1), Oz.AREALIGHTUSED || Oz.CLUSTLIGHT_BATCH)
              for (let zz = 0; zz < tz.lightSources.length; zz++)
                if (!tz.lightSources[zz]._isReady()) return !1;
            (0, rz._)(tz, Xz, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(tz), Oz, this._applyDecalMapAfterDetailMap, this._useVertexPulling, sz.getRenderingMesh(), this._isVertexOutputInvariant), (0, rz.S)(Xz, oz, this, Oz, Fz, null, sz.getRenderingMesh().hasThinInstances), this._eventInfo.defines = Oz, this._eventInfo.mesh = tz, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, rz.P)(tz, Oz, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let Nz = !1;
            if (Oz.isDirty) {
              const Fz = Oz._areLightsDisposed;
              Oz.markAsProcessed();
              const Wz = new gz.e;
              Oz.REFLECTION && Wz.addFallback(0, "REFLECTION"), Oz.SPECULAR && Wz.addFallback(0, "SPECULAR"), Oz.BUMP && Wz.addFallback(0, "BUMP"), Oz.PARALLAX && Wz.addFallback(1, "PARALLAX"), Oz.PARALLAX_RHS && Wz.addFallback(1, "PARALLAX_RHS"), Oz.PARALLAXOCCLUSION && Wz.addFallback(0, "PARALLAXOCCLUSION"), Oz.SPECULAROVERALPHA && Wz.addFallback(0, "SPECULAROVERALPHA"), Oz.FOG && Wz.addFallback(1, "FOG"), Oz.POINTSIZE && Wz.addFallback(0, "POINTSIZE"), Oz.LOGARITHMICDEPTH && Wz.addFallback(0, "LOGARITHMICDEPTH"), (0, rz.y)(Oz, Wz, this._maxSimultaneousLights), Oz.SPECULARTERM && Wz.addFallback(0, "SPECULARTERM"), Oz.DIFFUSEFRESNEL && Wz.addFallback(1, "DIFFUSEFRESNEL"), Oz.OPACITYFRESNEL && Wz.addFallback(2, "OPACITYFRESNEL"), Oz.REFLECTIONFRESNEL && Wz.addFallback(3, "REFLECTIONFRESNEL"), Oz.EMISSIVEFRESNEL && Wz.addFallback(4, "EMISSIVEFRESNEL"), Oz.FRESNEL && Wz.addFallback(4, "FRESNEL"), Oz.MULTIVIEW && Wz.addFallback(0, "MULTIVIEW");
              const Kz = [vz.m.PositionKind];
              Oz.NORMAL && Kz.push(vz.m.NormalKind), Oz.TANGENT && Kz.push(vz.m.TangentKind);
              for (let zz = 1; zz <= 6; ++zz) Oz["UV" + zz] && Kz.push(`uv${1===zz?"":zz}`);
              Oz.VERTEXCOLOR && Kz.push(vz.m.ColorKind), (0, rz.F)(Kz, tz, Oz, Wz), (0, rz.J)(Kz, Oz), (0, rz.N)(Kz, tz, Oz), (0, rz.C)(Kz, tz, Oz);
              let bz = "default";
              const wz = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                Dz = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, rz.pb)(wz, Dz, !1);
              const Hz = ["Material", "Scene", "Mesh"],
                Yz = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: Oz.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = Wz, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = Oz, this._eventInfo.uniforms = wz, this._eventInfo.attributes = Kz, this._eventInfo.samplers = Dz, this._eventInfo.uniformBuffersNames = Hz, this._eventInfo.customCode = void 0, this._eventInfo.mesh = tz, this._eventInfo.indexParameters = Yz, this._callbackPluginEventGeneric(128, this._eventInfo), mz.c.AddUniformsAndSamplers(wz, Dz), Uz.c.AddUniforms(wz), Uz.c.AddSamplers(Dz), uz.d && (uz.d.PrepareUniforms(wz, Oz), uz.d.PrepareSamplers(Dz, Oz)), (0, rz.sb)({
                  uniformsNames: wz,
                  uniformBuffersNames: Hz,
                  samplers: Dz,
                  defines: Oz,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, Bz.d)(wz), this._useVertexPulling) {
                const zz = sz.getRenderingMesh(),
                  tz = zz?.geometry;
                tz && (this._vertexPullingMetadata = (0, Pz.f)(tz), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((zz, tz) => {
                  wz.push(`vp_${tz}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const xz = {};
              this.customShaderNameResolve && (bz = this.customShaderNameResolve(bz, wz, Hz, Dz, Oz, Kz, xz));
              const Jz = Oz.toString(),
                Iz = sz.effect,
                Cz = Xz.FD().createEffect(bz, {
                  attributes: Kz,
                  uniformsNames: wz,
                  uniformBuffersNames: Hz,
                  samplers: Dz,
                  defines: Jz,
                  fallbacks: Wz,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: Yz,
                  processFinalCode: xz.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: Oz.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: zz._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, oz);
              if (this._eventInfo.customCode = void 0, Cz)
                if (this._onEffectCreatedObservable && (Gz.effect = Cz, Gz.subMesh = sz, this._onEffectCreatedObservable.notifyObservers(Gz)), this.allowShaderHotSwapping && Iz && !Cz.isReady()) {
                  if (Oz.markAsUnprocessed(), Nz = this.isFrozen, Fz) return Oz._areLightsDisposed = !0, !1
                } else Xz.resetCachedMaterial(), sz.setEffect(Cz, Oz, this._materialContext)
            }
            return !(!sz.effect || !sz.effect.isReady()) && (Oz._renderId = Xz.getRenderId(), Wz._wasPreviouslyReady = !Nz, Wz._wasPreviouslyUsingInstances = Fz, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const zz = this._uniformBuffer;
            zz.addUniform("diffuseLeftColor", 4), zz.addUniform("diffuseRightColor", 4), zz.addUniform("opacityParts", 4), zz.addUniform("reflectionLeftColor", 4), zz.addUniform("reflectionRightColor", 4), zz.addUniform("refractionLeftColor", 4), zz.addUniform("refractionRightColor", 4), zz.addUniform("emissiveLeftColor", 4), zz.addUniform("emissiveRightColor", 4), zz.addUniform("vDiffuseInfos", 2), zz.addUniform("vAmbientInfos", 2), zz.addUniform("vOpacityInfos", 2), zz.addUniform("vEmissiveInfos", 2), zz.addUniform("vLightmapInfos", 2), zz.addUniform("vSpecularInfos", 2), zz.addUniform("vBumpInfos", 3), zz.addUniform("diffuseMatrix", 16), zz.addUniform("ambientMatrix", 16), zz.addUniform("opacityMatrix", 16), zz.addUniform("emissiveMatrix", 16), zz.addUniform("lightmapMatrix", 16), zz.addUniform("specularMatrix", 16), zz.addUniform("bumpMatrix", 16), zz.addUniform("vTangentSpaceParams", 2), zz.addUniform("pointSize", 1), zz.addUniform("alphaCutOff", 1), zz.addUniform("refractionMatrix", 16), zz.addUniform("vRefractionInfos", 4), zz.addUniform("vRefractionPosition", 3), zz.addUniform("vRefractionSize", 3), zz.addUniform("vSpecularColor", 4), zz.addUniform("vEmissiveColor", 3), zz.addUniform("vDiffuseColor", 4), zz.addUniform("vAmbientColor", 3), zz.addUniform("cameraInfo", 4), zz.addUniform("vTextureRepetitionHexTilingParams", 4), (0, rz.lb)(zz, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(tz, sz, Fz) {
            const Wz = this.aJ(),
              Xz = Fz.materialDefines;
            if (!Xz) return;
            const vz = Fz.effect;
            if (!vz) return;
            this._activeEffect = vz, sz.getMeshUniformBuffer().bindToEffect(vz, "Mesh"), sz.transferToEffect(tz), this._uniformBuffer.bindToEffect(vz, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Wz, sz, tz, this.isFrozen), mz.c.Bind(Wz.FD().currentRenderPassId, this._activeEffect, sz, tz, this);
            const Uz = Wz.activeCamera;
            Uz ? this._uniformBuffer.updateFloat4("cameraInfo", Uz.minZ, Uz.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Kz = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Kz[0], Kz[1], Kz[2], Kz[3]), this._eventInfo.subMesh = Fz, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Xz.OBJECTSPACE_NORMALMAP && (tz.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const uz = this._mustRebind(Wz, vz, Fz, sz.visibility),
              Nz = Wz.FD()._features.needToAlwaysBindUniformBuffers;
            (0, rz.g)(sz, vz), this._vertexPullingMetadata && (0, Pz.d)(vz, this._vertexPullingMetadata);
            const bz = this._uniformBuffer;
            if (uz) {
              if (this.bindViewProjection(vz), !bz.useUbo || !this.isFrozen || !bz.isSync || Fz._drawWrapper._forceRebindOnNextCall) {
                if (zz.FresnelEnabled && Xz.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (bz.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), bz.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const zz = oz.f.Color3[0];
                    zz.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), bz.updateColor4("opacityParts", zz, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (bz.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), bz.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (bz.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), bz.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (bz.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), bz.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (Xz.ALPHATEST && bz.updateFloat("alphaCutOff", this.alphaCutOff), Wz.texturesEnabled && (this._diffuseTexture && zz.DiffuseTextureEnabled && (bz.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, rz.x)(this._diffuseTexture, bz, "diffuse")), this._ambientTexture && zz.AmbientTextureEnabled && (bz.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, rz.x)(this._ambientTexture, bz, "ambient")), this._opacityTexture && zz.OpacityTextureEnabled && (bz.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, rz.x)(this._opacityTexture, bz, "opacity")), (0, rz.n)(Wz, Xz, bz, oz.c.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && zz.ReflectionTextureEnabled || bz.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && zz.EmissiveTextureEnabled && (bz.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, rz.x)(this._emissiveTexture, bz, "emissive")), this._lightmapTexture && zz.LightmapTextureEnabled && (bz.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, rz.x)(this._lightmapTexture, bz, "lightmap")), this._specularTexture && zz.SpecularTextureEnabled && (bz.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, rz.x)(this._specularTexture, bz, "specular")), this._bumpTexture && Wz.FD().getCaps().standardDerivatives && zz.BumpTextureEnabled && (bz.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, rz.x)(this._bumpTexture, bz, "bump"), Wz._mirroredCameraPosition ? bz.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : bz.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && zz.RefractionTextureEnabled)) {
                  let zz = 1;
                  if (this._refractionTexture.isCube || (bz.y5("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (zz = this._refractionTexture.depth)), bz.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, zz, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const zz = this._refractionTexture;
                    bz.updateVector3("vRefractionPosition", zz.boundingBoxPosition), bz.updateVector3("vRefractionSize", zz.boundingBoxSize)
                  }
                }
                this.pointsCloud && bz.updateFloat("pointSize", this.pointSize), bz.updateColor4("vSpecularColor", this.specularColor, this.specularPower), bz.updateColor3("vEmissiveColor", zz.EmissiveTextureEnabled ? this.emissiveColor : oz.c.BlackReadOnly), bz.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), Wz.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), bz.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              Wz.texturesEnabled && (this._diffuseTexture && zz.DiffuseTextureEnabled && vz.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && zz.AmbientTextureEnabled && vz.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && zz.OpacityTextureEnabled && vz.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && zz.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? vz.setTexture("reflectionCubeSampler", this._reflectionTexture) : vz.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && zz.EmissiveTextureEnabled && vz.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && zz.LightmapTextureEnabled && vz.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && zz.SpecularTextureEnabled && vz.setTexture("specularSampler", this._specularTexture), this._bumpTexture && Wz.FD().getCaps().standardDerivatives && zz.BumpTextureEnabled && vz.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && zz.RefractionTextureEnabled && (this._refractionTexture.isCube ? vz.setTexture("refractionCubeSampler", this._refractionTexture) : vz.setTexture("refraction2DSampler", this._refractionTexture))), this.aJ().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(sz) && this.aJ().depthPeelingRenderer.bind(vz), this._eventInfo.subMesh = Fz, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Bz.g)(vz, this, Wz), this.bindEyePosition(vz)
            } else Nz && (this._needToBindSceneUbo = !0);
            !uz && this.isFrozen && !Nz || !Wz.lightsEnabled || this._disableLighting || (0, rz.s)(Wz, sz, vz, Xz, this._maxSimultaneousLights), !uz && this.isFrozen || ((Wz.fogEnabled && sz.applyFog && Wz.fogMode !== Oz.i.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || sz.receiveShadows || Xz.PREPASS || Xz.CLUSTLIGHT_BATCH) && this.bindView(vz), (0, rz.j)(Wz, sz, vz), Xz.NUM_MORPH_INFLUENCERS && (0, rz.v)(sz, vz), Xz.BAKED_VERTEX_ANIMATION_TEXTURE && sz.bakedVertexAnimationManager?.bind(vz, Xz.INSTANCES), this.useLogarithmicDepth && (0, rz.t)(Xz, vz, Wz), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(sz, this._activeEffect, Fz), bz.update()
          }
          _canBindRunFollower(tz, sz, Fz, Wz, Xz) {
            const Oz = tz.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === zz.prototype.isReadyForSubMesh && this.bindForSubMesh === zz.prototype.bindForSubMesh && this._mustRebind === wz.c.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !sz._features.needToAlwaysBindUniformBuffers && !(Oz && Oz.enabled && Oz.currentRTisSceneRT) && !mz.c._Configurations[sz.currentRenderPassId] && !Wz.materialDefines?.OBJECTSPACE_NORMALMAP && !Fz.skeleton && !Xz._bonesComputationForcedToCPU
          }
          _bindRunFollower(zz, tz, sz, Fz) {
            this._activeEffect = Fz, tz.getMeshUniformBuffer().bindToEffect(Fz, "Mesh"), tz.transferToEffect(zz);
            const Wz = this._uniformBuffer;
            Wz.bindToEffect(Fz, "Material");
            const Xz = this._scene.activeCamera;
            Xz ? Wz.updateFloat4("cameraInfo", Xz.minZ, Xz.maxZ, 0, 0) : Wz.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Oz = this.textureRepetitionHexTilingParams;
            Wz.updateFloat4("vTextureRepetitionHexTilingParams", Oz[0], Oz[1], Oz[2], Oz[3]), this._afterBind(tz, Fz, sz), Wz.update()
          }
          getAnimatables() {
            const zz = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && zz.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && zz.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && zz.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && zz.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && zz.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && zz.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && zz.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && zz.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && zz.push(this._refractionTexture), zz
          }
          getActiveTextures() {
            const zz = super.getActiveTextures();
            return this._diffuseTexture && zz.push(this._diffuseTexture), this._ambientTexture && zz.push(this._ambientTexture), this._opacityTexture && zz.push(this._opacityTexture), this._reflectionTexture && zz.push(this._reflectionTexture), this._emissiveTexture && zz.push(this._emissiveTexture), this._specularTexture && zz.push(this._specularTexture), this._bumpTexture && zz.push(this._bumpTexture), this._lightmapTexture && zz.push(this._lightmapTexture), this._refractionTexture && zz.push(this._refractionTexture), zz
          }
          hasTexture(zz) {
            return !!super.hasTexture(zz) || (this._diffuseTexture === zz || (this._ambientTexture === zz || (this._opacityTexture === zz || (this._reflectionTexture === zz || (this._emissiveTexture === zz || (this._specularTexture === zz || (this._bumpTexture === zz || (this._lightmapTexture === zz || this._refractionTexture === zz))))))))
          }
          dispose(zz, tz) {
            tz && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(zz, tz)
          }
          clone(tz) {
            let sz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Fz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Wz = Yz.e.Clone((() => new zz(tz, this.aJ())), this, {
              cloneTexturesOnlyOnce: sz
            });
            return Wz.name = tz, Wz.id = tz, this.stencil.copyTo(Wz.stencil), this._clonePlugins(Wz, Fz), Wz
          }
          static Parse(tz, sz, Fz) {
            const Wz = Yz.e.Parse((() => new zz(tz.name, sz)), tz, sz, Fz);
            return tz.stencil && Wz.stencil.parse(tz.stencil, sz, Fz), Nz.b._ParsePlugins(tz, Wz, sz, Fz), Wz
          }
          static get DiffuseTextureEnabled() {
            return Dz.b.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(zz) {
            Dz.b.DiffuseTextureEnabled = zz
          }
          static get DetailTextureEnabled() {
            return Dz.b.DetailTextureEnabled
          }
          static set DetailTextureEnabled(zz) {
            Dz.b.DetailTextureEnabled = zz
          }
          static get AmbientTextureEnabled() {
            return Dz.b.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(zz) {
            Dz.b.AmbientTextureEnabled = zz
          }
          static get OpacityTextureEnabled() {
            return Dz.b.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(zz) {
            Dz.b.OpacityTextureEnabled = zz
          }
          static get ReflectionTextureEnabled() {
            return Dz.b.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(zz) {
            Dz.b.ReflectionTextureEnabled = zz
          }
          static get EmissiveTextureEnabled() {
            return Dz.b.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(zz) {
            Dz.b.EmissiveTextureEnabled = zz
          }
          static get SpecularTextureEnabled() {
            return Dz.b.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(zz) {
            Dz.b.SpecularTextureEnabled = zz
          }
          static get BumpTextureEnabled() {
            return Dz.b.BumpTextureEnabled
          }
          static set BumpTextureEnabled(zz) {
            Dz.b.BumpTextureEnabled = zz
          }
          static get LightmapTextureEnabled() {
            return Dz.b.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(zz) {
            Dz.b.LightmapTextureEnabled = zz
          }
          static get RefractionTextureEnabled() {
            return Dz.b.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(zz) {
            Dz.b.RefractionTextureEnabled = zz
          }
          static get ColorGradingTextureEnabled() {
            return Dz.b.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(zz) {
            Dz.b.ColorGradingTextureEnabled = zz
          }
          static get FresnelEnabled() {
            return Dz.b.FresnelEnabled
          }
          static set FresnelEnabled(zz) {
            Dz.b.FresnelEnabled = zz
          }
        }, tz = new WeakMap, Kz = new WeakMap, bz = new WeakMap, Jz = new WeakMap, Iz = new WeakMap, Cz = new WeakMap, ez = new WeakMap, Zz = new WeakMap, Tz = new WeakMap, Az = new WeakMap, yz = new WeakMap, Mz = new WeakMap, dz = new WeakMap, hz = new WeakMap, Qz = new WeakMap, kz = new WeakMap, iz = new WeakMap, Lz = new WeakMap, lz = new WeakMap, nz = new WeakMap, az = new WeakMap, qz = new WeakMap, Sz = new WeakMap, Vz = new WeakMap, Rz = new WeakMap, pz = new WeakMap, fz = new WeakMap, Ez = new WeakMap, zt = new WeakMap, tt = new WeakMap, st = new WeakMap, Ft = new WeakMap, (() => {
          const tz = "function" === typeof Symbol && Symbol.metadata ? Object.create(es[Symbol.metadata] ?? null) : void 0;
          Wt = [(0, Wz.D)("diffuseTexture")], Xt = [(0, Wz.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ot = [(0, Wz.D)("ambientTexture")], ot = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], vt = [(0, Wz.D)("opacityTexture")], Ut = [(0, Wz.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], Kt = [(0, Wz.D)("reflectionTexture")], ut = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], Nt = [(0, Wz.D)("emissiveTexture")], bt = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], wt = [(0, Wz.D)("specularTexture")], Dt = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], gt = [(0, Wz.D)("bumpTexture")], Ht = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], Bt = [(0, Wz.D)("lightmapTexture")], Pt = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], rt = [(0, Wz.D)("refractionTexture")], Yt = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], xt = [(0, Wz.p)("ambient")], mt = [(0, Wz.p)("diffuse")], Jt = [(0, Wz.p)("specular")], It = [(0, Wz.p)("emissive")], Ct = [(0, Wz.J)()], et = [(0, Wz.J)("useAlphaFromDiffuseTexture")], Zt = [() => ({
            init(zz) {
              return void 0 === zz && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = zz), zz
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(zz) {
              this._useAlphaFromDiffuseTexture = zz
            }
          })], Gt = [(0, Wz.J)("useEmissiveAsIllumination")], Tt = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], ct = [(0, Wz.J)("linkEmissiveWithDiffuse")], jt = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], At = [(0, Wz.J)("useSpecularOverAlpha")], yt = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], Mt = [(0, Wz.J)("useReflectionOverAlpha")], dt = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], ht = [(0, Wz.J)("disableLighting")], Qt = [(0, Wz.i)("_markAllSubMeshesAsLightsDirty")], kt = [(0, Wz.J)("useObjectSpaceNormalMap")], it = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], Lt = [(0, Wz.J)("useParallax")], lt = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], nt = [(0, Wz.J)("useParallaxOcclusion")], qt = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], St = [(0, Wz.J)()], Vt = [(0, Wz.J)("roughness")], Rt = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], pt = [(0, Wz.J)()], ft = [(0, Wz.J)()], Et = [(0, Wz.J)()], zs = [(0, Wz.J)("useLightmapAsShadowmap")], ts = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], ss = [(0, Wz.u)("diffuseFresnelParameters")], Fs = [(0, Wz.i)("_markAllSubMeshesAsFresnelDirty")], Ws = [(0, Wz.u)("opacityFresnelParameters")], Xs = [(0, Wz.i)("_markAllSubMeshesAsFresnelAndMiscDirty")], Os = [(0, Wz.u)("reflectionFresnelParameters")], os = [(0, Wz.i)("_markAllSubMeshesAsFresnelDirty")], vs = [(0, Wz.u)("refractionFresnelParameters")], Us = [(0, Wz.i)("_markAllSubMeshesAsFresnelDirty")], Ks = [(0, Wz.u)("emissiveFresnelParameters")], us = [(0, Wz.i)("_markAllSubMeshesAsFresnelDirty")], Ns = [(0, Wz.J)("useReflectionFresnelFromSpecular")], bs = [(0, Wz.i)("_markAllSubMeshesAsFresnelDirty")], ws = [(0, Wz.J)("useGlossinessFromSpecularMapAlpha")], Ds = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], gs = [(0, Wz.J)("maxSimultaneousLights")], Hs = [(0, Wz.i)("_markAllSubMeshesAsLightsDirty")], Bs = [(0, Wz.J)("invertNormalMapX")], Ps = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], rs = [(0, Wz.J)("invertNormalMapY")], Ys = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], xs = [(0, Wz.J)("twoSidedLighting")], ms = [(0, Wz.i)("_markAllSubMeshesAsTexturesDirty")], Is = [(0, Wz.J)("applyDecalMapAfterDetailMap")], Cs = [(0, Wz.i)("_markAllSubMeshesAsMiscDirty")], (0, Fz.h)(zz, null, Xt, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "diffuseTexture" in zz,
              get: zz => zz.diffuseTexture,
              set: (zz, tz) => {
                zz.diffuseTexture = tz
              }
            },
            metadata: tz
          }, Ts, cs), (0, Fz.h)(zz, null, ot, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "ambientTexture" in zz,
              get: zz => zz.ambientTexture,
              set: (zz, tz) => {
                zz.ambientTexture = tz
              }
            },
            metadata: tz
          }, Ms, ds), (0, Fz.h)(zz, null, Ut, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "opacityTexture" in zz,
              get: zz => zz.opacityTexture,
              set: (zz, tz) => {
                zz.opacityTexture = tz
              }
            },
            metadata: tz
          }, ks, is), (0, Fz.h)(zz, null, ut, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "reflectionTexture" in zz,
              get: zz => zz.reflectionTexture,
              set: (zz, tz) => {
                zz.reflectionTexture = tz
              }
            },
            metadata: tz
          }, ns, as), (0, Fz.h)(zz, null, bt, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "emissiveTexture" in zz,
              get: zz => zz.emissiveTexture,
              set: (zz, tz) => {
                zz.emissiveTexture = tz
              }
            },
            metadata: tz
          }, Vs, Rs), (0, Fz.h)(zz, null, Dt, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularTexture" in zz,
              get: zz => zz.specularTexture,
              set: (zz, tz) => {
                zz.specularTexture = tz
              }
            },
            metadata: tz
          }, Es, zF), (0, Fz.h)(zz, null, Ht, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "bumpTexture" in zz,
              get: zz => zz.bumpTexture,
              set: (zz, tz) => {
                zz.bumpTexture = tz
              }
            },
            metadata: tz
          }, FF, WF), (0, Fz.h)(zz, null, Pt, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "lightmapTexture" in zz,
              get: zz => zz.lightmapTexture,
              set: (zz, tz) => {
                zz.lightmapTexture = tz
              }
            },
            metadata: tz
          }, oF, vF), (0, Fz.h)(zz, null, Yt, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "refractionTexture" in zz,
              get: zz => zz.refractionTexture,
              set: (zz, tz) => {
                zz.refractionTexture = tz
              }
            },
            metadata: tz
          }, uF, NF), (0, Fz.h)(zz, null, Zt, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "useAlphaFromDiffuseTexture" in zz,
              get: zz => zz.useAlphaFromDiffuseTexture,
              set: (zz, tz) => {
                zz.useAlphaFromDiffuseTexture = tz
              }
            },
            metadata: tz
          }, IF, CF), (0, Fz.h)(zz, null, Tt, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: zz => "useEmissiveAsIllumination" in zz,
              get: zz => zz.useEmissiveAsIllumination,
              set: (zz, tz) => {
                zz.useEmissiveAsIllumination = tz
              }
            },
            metadata: tz
          }, GF, TF), (0, Fz.h)(zz, null, jt, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: zz => "linkEmissiveWithDiffuse" in zz,
              get: zz => zz.linkEmissiveWithDiffuse,
              set: (zz, tz) => {
                zz.linkEmissiveWithDiffuse = tz
              }
            },
            metadata: tz
          }, AF, yF), (0, Fz.h)(zz, null, yt, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: zz => "useSpecularOverAlpha" in zz,
              get: zz => zz.useSpecularOverAlpha,
              set: (zz, tz) => {
                zz.useSpecularOverAlpha = tz
              }
            },
            metadata: tz
          }, hF, QF), (0, Fz.h)(zz, null, dt, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: zz => "useReflectionOverAlpha" in zz,
              get: zz => zz.useReflectionOverAlpha,
              set: (zz, tz) => {
                zz.useReflectionOverAlpha = tz
              }
            },
            metadata: tz
          }, LF, lF), (0, Fz.h)(zz, null, Qt, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: zz => "disableLighting" in zz,
              get: zz => zz.disableLighting,
              set: (zz, tz) => {
                zz.disableLighting = tz
              }
            },
            metadata: tz
          }, qF, SF), (0, Fz.h)(zz, null, it, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: zz => "useObjectSpaceNormalMap" in zz,
              get: zz => zz.useObjectSpaceNormalMap,
              set: (zz, tz) => {
                zz.useObjectSpaceNormalMap = tz
              }
            },
            metadata: tz
          }, pF, fF), (0, Fz.h)(zz, null, lt, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: zz => "useParallax" in zz,
              get: zz => zz.useParallax,
              set: (zz, tz) => {
                zz.useParallax = tz
              }
            },
            metadata: tz
          }, tW, sW), (0, Fz.h)(zz, null, qt, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: zz => "useParallaxOcclusion" in zz,
              get: zz => zz.useParallaxOcclusion,
              set: (zz, tz) => {
                zz.useParallaxOcclusion = tz
              }
            },
            metadata: tz
          }, XW, OW), (0, Fz.h)(zz, null, Rt, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: zz => "roughness" in zz,
              get: zz => zz.roughness,
              set: (zz, tz) => {
                zz.roughness = tz
              }
            },
            metadata: tz
          }, uW, NW), (0, Fz.h)(zz, null, ts, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: zz => "useLightmapAsShadowmap" in zz,
              get: zz => zz.useLightmapAsShadowmap,
              set: (zz, tz) => {
                zz.useLightmapAsShadowmap = tz
              }
            },
            metadata: tz
          }, YW, xW), (0, Fz.h)(zz, null, Fs, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "diffuseFresnelParameters" in zz,
              get: zz => zz.diffuseFresnelParameters,
              set: (zz, tz) => {
                zz.diffuseFresnelParameters = tz
              }
            },
            metadata: tz
          }, IW, CW), (0, Fz.h)(zz, null, Xs, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "opacityFresnelParameters" in zz,
              get: zz => zz.opacityFresnelParameters,
              set: (zz, tz) => {
                zz.opacityFresnelParameters = tz
              }
            },
            metadata: tz
          }, GW, TW), (0, Fz.h)(zz, null, os, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "reflectionFresnelParameters" in zz,
              get: zz => zz.reflectionFresnelParameters,
              set: (zz, tz) => {
                zz.reflectionFresnelParameters = tz
              }
            },
            metadata: tz
          }, AW, yW), (0, Fz.h)(zz, null, Us, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "refractionFresnelParameters" in zz,
              get: zz => zz.refractionFresnelParameters,
              set: (zz, tz) => {
                zz.refractionFresnelParameters = tz
              }
            },
            metadata: tz
          }, hW, QW), (0, Fz.h)(zz, null, us, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "emissiveFresnelParameters" in zz,
              get: zz => zz.emissiveFresnelParameters,
              set: (zz, tz) => {
                zz.emissiveFresnelParameters = tz
              }
            },
            metadata: tz
          }, LW, lW), (0, Fz.h)(zz, null, bs, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: zz => "useReflectionFresnelFromSpecular" in zz,
              get: zz => zz.useReflectionFresnelFromSpecular,
              set: (zz, tz) => {
                zz.useReflectionFresnelFromSpecular = tz
              }
            },
            metadata: tz
          }, qW, SW), (0, Fz.h)(zz, null, Ds, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: zz => "useGlossinessFromSpecularMapAlpha" in zz,
              get: zz => zz.useGlossinessFromSpecularMapAlpha,
              set: (zz, tz) => {
                zz.useGlossinessFromSpecularMapAlpha = tz
              }
            },
            metadata: tz
          }, pW, fW), (0, Fz.h)(zz, null, Hs, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: zz => "maxSimultaneousLights" in zz,
              get: zz => zz.maxSimultaneousLights,
              set: (zz, tz) => {
                zz.maxSimultaneousLights = tz
              }
            },
            metadata: tz
          }, tX, sX), (0, Fz.h)(zz, null, Ps, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: zz => "invertNormalMapX" in zz,
              get: zz => zz.invertNormalMapX,
              set: (zz, tz) => {
                zz.invertNormalMapX = tz
              }
            },
            metadata: tz
          }, XX, OX), (0, Fz.h)(zz, null, Ys, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: zz => "invertNormalMapY" in zz,
              get: zz => zz.invertNormalMapY,
              set: (zz, tz) => {
                zz.invertNormalMapY = tz
              }
            },
            metadata: tz
          }, UX, KX), (0, Fz.h)(zz, null, ms, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: zz => "twoSidedLighting" in zz,
              get: zz => zz.twoSidedLighting,
              set: (zz, tz) => {
                zz.twoSidedLighting = tz
              }
            },
            metadata: tz
          }, bX, wX), (0, Fz.h)(zz, null, Cs, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: zz => "applyDecalMapAfterDetailMap" in zz,
              get: zz => zz.applyDecalMapAfterDetailMap,
              set: (zz, tz) => {
                zz.applyDecalMapAfterDetailMap = tz
              }
            },
            metadata: tz
          }, HX, BX), (0, Fz.h)(null, null, Wt, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_diffuseTexture" in zz,
              get: zz => zz._diffuseTexture,
              set: (zz, tz) => {
                zz._diffuseTexture = tz
              }
            },
            metadata: tz
          }, Zs, Gs), (0, Fz.h)(null, null, Ot, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_ambientTexture" in zz,
              get: zz => zz._ambientTexture,
              set: (zz, tz) => {
                zz._ambientTexture = tz
              }
            },
            metadata: tz
          }, As, ys), (0, Fz.h)(null, null, vt, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_opacityTexture" in zz,
              get: zz => zz._opacityTexture,
              set: (zz, tz) => {
                zz._opacityTexture = tz
              }
            },
            metadata: tz
          }, hs, Qs), (0, Fz.h)(null, null, Kt, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_reflectionTexture" in zz,
              get: zz => zz._reflectionTexture,
              set: (zz, tz) => {
                zz._reflectionTexture = tz
              }
            },
            metadata: tz
          }, Ls, ls), (0, Fz.h)(null, null, Nt, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_emissiveTexture" in zz,
              get: zz => zz._emissiveTexture,
              set: (zz, tz) => {
                zz._emissiveTexture = tz
              }
            },
            metadata: tz
          }, qs, Ss), (0, Fz.h)(null, null, wt, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_specularTexture" in zz,
              get: zz => zz._specularTexture,
              set: (zz, tz) => {
                zz._specularTexture = tz
              }
            },
            metadata: tz
          }, ps, fs), (0, Fz.h)(null, null, gt, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_bumpTexture" in zz,
              get: zz => zz._bumpTexture,
              set: (zz, tz) => {
                zz._bumpTexture = tz
              }
            },
            metadata: tz
          }, tF, sF), (0, Fz.h)(null, null, Bt, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_lightmapTexture" in zz,
              get: zz => zz._lightmapTexture,
              set: (zz, tz) => {
                zz._lightmapTexture = tz
              }
            },
            metadata: tz
          }, XF, OF), (0, Fz.h)(null, null, rt, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_refractionTexture" in zz,
              get: zz => zz._refractionTexture,
              set: (zz, tz) => {
                zz._refractionTexture = tz
              }
            },
            metadata: tz
          }, UF, KF), (0, Fz.h)(null, null, xt, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "ambientColor" in zz,
              get: zz => zz.ambientColor,
              set: (zz, tz) => {
                zz.ambientColor = tz
              }
            },
            metadata: tz
          }, bF, wF), (0, Fz.h)(null, null, mt, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "diffuseColor" in zz,
              get: zz => zz.diffuseColor,
              set: (zz, tz) => {
                zz.diffuseColor = tz
              }
            },
            metadata: tz
          }, DF, gF), (0, Fz.h)(null, null, Jt, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularColor" in zz,
              get: zz => zz.specularColor,
              set: (zz, tz) => {
                zz.specularColor = tz
              }
            },
            metadata: tz
          }, HF, BF), (0, Fz.h)(null, null, It, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "emissiveColor" in zz,
              get: zz => zz.emissiveColor,
              set: (zz, tz) => {
                zz.emissiveColor = tz
              }
            },
            metadata: tz
          }, PF, rF), (0, Fz.h)(null, null, Ct, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularPower" in zz,
              get: zz => zz.specularPower,
              set: (zz, tz) => {
                zz.specularPower = tz
              }
            },
            metadata: tz
          }, YF, xF), (0, Fz.h)(null, null, et, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useAlphaFromDiffuseTexture" in zz,
              get: zz => zz._useAlphaFromDiffuseTexture,
              set: (zz, tz) => {
                zz._useAlphaFromDiffuseTexture = tz
              }
            },
            metadata: tz
          }, mF, JF), (0, Fz.h)(null, null, Gt, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useEmissiveAsIllumination" in zz,
              get: zz => zz._useEmissiveAsIllumination,
              set: (zz, tz) => {
                zz._useEmissiveAsIllumination = tz
              }
            },
            metadata: tz
          }, eF, ZF), (0, Fz.h)(null, null, ct, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: zz => "_linkEmissiveWithDiffuse" in zz,
              get: zz => zz._linkEmissiveWithDiffuse,
              set: (zz, tz) => {
                zz._linkEmissiveWithDiffuse = tz
              }
            },
            metadata: tz
          }, cF, jF), (0, Fz.h)(null, null, At, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useSpecularOverAlpha" in zz,
              get: zz => zz._useSpecularOverAlpha,
              set: (zz, tz) => {
                zz._useSpecularOverAlpha = tz
              }
            },
            metadata: tz
          }, MF, dF), (0, Fz.h)(null, null, Mt, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useReflectionOverAlpha" in zz,
              get: zz => zz._useReflectionOverAlpha,
              set: (zz, tz) => {
                zz._useReflectionOverAlpha = tz
              }
            },
            metadata: tz
          }, kF, iF), (0, Fz.h)(null, null, ht, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: zz => "_disableLighting" in zz,
              get: zz => zz._disableLighting,
              set: (zz, tz) => {
                zz._disableLighting = tz
              }
            },
            metadata: tz
          }, nF, aF), (0, Fz.h)(null, null, kt, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useObjectSpaceNormalMap" in zz,
              get: zz => zz._useObjectSpaceNormalMap,
              set: (zz, tz) => {
                zz._useObjectSpaceNormalMap = tz
              }
            },
            metadata: tz
          }, VF, RF), (0, Fz.h)(null, null, Lt, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useParallax" in zz,
              get: zz => zz._useParallax,
              set: (zz, tz) => {
                zz._useParallax = tz
              }
            },
            metadata: tz
          }, EF, zW), (0, Fz.h)(null, null, nt, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useParallaxOcclusion" in zz,
              get: zz => zz._useParallaxOcclusion,
              set: (zz, tz) => {
                zz._useParallaxOcclusion = tz
              }
            },
            metadata: tz
          }, FW, WW), (0, Fz.h)(null, null, St, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: zz => "parallaxScaleBias" in zz,
              get: zz => zz.parallaxScaleBias,
              set: (zz, tz) => {
                zz.parallaxScaleBias = tz
              }
            },
            metadata: tz
          }, oW, vW), (0, Fz.h)(null, null, Vt, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: zz => "_roughness" in zz,
              get: zz => zz._roughness,
              set: (zz, tz) => {
                zz._roughness = tz
              }
            },
            metadata: tz
          }, UW, KW), (0, Fz.h)(null, null, pt, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: zz => "indexOfRefraction" in zz,
              get: zz => zz.indexOfRefraction,
              set: (zz, tz) => {
                zz.indexOfRefraction = tz
              }
            },
            metadata: tz
          }, bW, wW), (0, Fz.h)(null, null, ft, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: zz => "invertRefractionY" in zz,
              get: zz => zz.invertRefractionY,
              set: (zz, tz) => {
                zz.invertRefractionY = tz
              }
            },
            metadata: tz
          }, DW, gW), (0, Fz.h)(null, null, Et, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: zz => "alphaCutOff" in zz,
              get: zz => zz.alphaCutOff,
              set: (zz, tz) => {
                zz.alphaCutOff = tz
              }
            },
            metadata: tz
          }, HW, BW), (0, Fz.h)(null, null, zs, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useLightmapAsShadowmap" in zz,
              get: zz => zz._useLightmapAsShadowmap,
              set: (zz, tz) => {
                zz._useLightmapAsShadowmap = tz
              }
            },
            metadata: tz
          }, PW, rW), (0, Fz.h)(null, null, ss, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "_diffuseFresnelParameters" in zz,
              get: zz => zz._diffuseFresnelParameters,
              set: (zz, tz) => {
                zz._diffuseFresnelParameters = tz
              }
            },
            metadata: tz
          }, mW, JW), (0, Fz.h)(null, null, Ws, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "_opacityFresnelParameters" in zz,
              get: zz => zz._opacityFresnelParameters,
              set: (zz, tz) => {
                zz._opacityFresnelParameters = tz
              }
            },
            metadata: tz
          }, eW, ZW), (0, Fz.h)(null, null, Os, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "_reflectionFresnelParameters" in zz,
              get: zz => zz._reflectionFresnelParameters,
              set: (zz, tz) => {
                zz._reflectionFresnelParameters = tz
              }
            },
            metadata: tz
          }, cW, jW), (0, Fz.h)(null, null, vs, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "_refractionFresnelParameters" in zz,
              get: zz => zz._refractionFresnelParameters,
              set: (zz, tz) => {
                zz._refractionFresnelParameters = tz
              }
            },
            metadata: tz
          }, MW, dW), (0, Fz.h)(null, null, Ks, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "_emissiveFresnelParameters" in zz,
              get: zz => zz._emissiveFresnelParameters,
              set: (zz, tz) => {
                zz._emissiveFresnelParameters = tz
              }
            },
            metadata: tz
          }, kW, iW), (0, Fz.h)(null, null, Ns, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useReflectionFresnelFromSpecular" in zz,
              get: zz => zz._useReflectionFresnelFromSpecular,
              set: (zz, tz) => {
                zz._useReflectionFresnelFromSpecular = tz
              }
            },
            metadata: tz
          }, nW, aW), (0, Fz.h)(null, null, ws, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useGlossinessFromSpecularMapAlpha" in zz,
              get: zz => zz._useGlossinessFromSpecularMapAlpha,
              set: (zz, tz) => {
                zz._useGlossinessFromSpecularMapAlpha = tz
              }
            },
            metadata: tz
          }, VW, RW), (0, Fz.h)(null, null, gs, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: zz => "_maxSimultaneousLights" in zz,
              get: zz => zz._maxSimultaneousLights,
              set: (zz, tz) => {
                zz._maxSimultaneousLights = tz
              }
            },
            metadata: tz
          }, EW, zX), (0, Fz.h)(null, null, Bs, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: zz => "_invertNormalMapX" in zz,
              get: zz => zz._invertNormalMapX,
              set: (zz, tz) => {
                zz._invertNormalMapX = tz
              }
            },
            metadata: tz
          }, FX, WX), (0, Fz.h)(null, null, rs, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: zz => "_invertNormalMapY" in zz,
              get: zz => zz._invertNormalMapY,
              set: (zz, tz) => {
                zz._invertNormalMapY = tz
              }
            },
            metadata: tz
          }, oX, vX), (0, Fz.h)(null, null, xs, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: zz => "_twoSidedLighting" in zz,
              get: zz => zz._twoSidedLighting,
              set: (zz, tz) => {
                zz._twoSidedLighting = tz
              }
            },
            metadata: tz
          }, uX, NX), (0, Fz.h)(null, null, Is, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: zz => "_applyDecalMapAfterDetailMap" in zz,
              get: zz => zz._applyDecalMapAfterDetailMap,
              set: (zz, tz) => {
                zz._applyDecalMapAfterDetailMap = tz
              }
            },
            metadata: tz
          }, DX, gX), tz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tz
          })
        })(), zz.ForceGLSL = !1, zz._ShaderLoader = new xz.c((() => [Promise.all([sz.e(307), sz.e(306)]).then((() => sz(40976))), Promise.all([sz.e(312), sz.e(308), sz.e(321), sz.e(311)]).then((() => sz(41157)))]), (() => [Promise.all([sz.e(328), sz.e(323)]).then((() => sz(41286))), Promise.all([sz.e(329), sz.e(339), sz.e(325)]).then((() => sz(41466)))])), zz
      })(),
      yz = !1;

    function Mz() {
      yz || (yz = !0, (0, uz.g)(), (0, ez.g)("BABYLON.StandardMaterial", Az), Oz.i.DefaultMaterialFactory = zz => new Az("default material", zz))
    }
    Object.getOwnPropertyDescriptor(Az.prototype, "decalMap") || Object.defineProperty(Az.prototype, "decalMap", (0, Zz.f)("StandardMaterial", "decalMap"))
  },
  39535: (zz, tz, sz) => {
    function Fz(zz) {
      return class extends zz {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    sz.d(tz, {
      e: () => Fz
    })
  },
  39529: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz
    });
    class Fz {
      constructor(zz, tz) {
        this._webGL = {
          load: zz,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: tz,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(zz) {
        const tz = 1 === zz ? this._webGPU : this._webGL;
        return tz.loaded ? void 0 : async () => {
          await this._loadAsync(tz)
        }
      }
      async _loadAsync(zz) {
        if (zz.loaded) return;
        let tz = zz.loadPromise;
        const sz = null === tz;
        sz && (tz = Promise.all(zz.load()), zz.loadPromise = tz);
        let Fz = !1;
        try {
          await tz, Fz = !0
        } finally {
          sz && this._completeLoad(zz, Fz)
        }
      }
      _completeLoad(zz, tz) {
        zz.loaded = tz, zz.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);