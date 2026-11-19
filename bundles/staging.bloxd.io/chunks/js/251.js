export const id = 251;
export const ids = [251];
export const modules = {
  39575: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz
    });
    var Ez = bz(39175);

    function nz(zz) {
      return class extends zz {
        constructor() {
          super(...arguments);
          const zz = new.target;
          if (!zz[Symbol.metadata]) {
            const uz = Object.getPrototypeOf(zz)?.[Symbol.metadata];
            zz[Symbol.metadata] = uz ? Object.create(uz) : {}
          }
          const uz = (0, Ez.e)(zz[Symbol.metadata]);
          uz._imageProcessingConfiguration || (uz._imageProcessingConfiguration = {
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
          zz !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !zz && this.XT ? this._imageProcessingConfiguration = this.XT().imageProcessingConfiguration : zz && (this._imageProcessingConfiguration = zz), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
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
  39444: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => iz,
      h: () => nz
    });
    var Ez = bz(39446);

    function nz(zz) {
      return class extends zz {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class iz extends Ez.e {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  39530: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => pz
    });
    var Ez = bz(39170),
      nz = bz(39451),
      iz = bz(39172),
      lz = bz(39513),
      Mz = bz(39446),
      tz = bz(39537),
      Hz = bz(39505);
    class Oz extends Mz.e {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let pz = (() => {
      var zz, uz, bz, Mz;
      let pz, dz, Fz, Zz, Rz, Kz, wz = tz.e,
        Xz = [],
        fz = [],
        sz = [],
        rz = [],
        oz = [],
        Nz = [],
        vz = [],
        xz = [],
        Jz = [],
        Az = [],
        Tz = [],
        Lz = [];
      return zz = class extends wz {
        get texture() {
          return (0, Ez.c)(this, uz, "f")
        }
        set texture(zz) {
          (0, Ez.g)(this, uz, zz, "f")
        }
        get normalBlendMethod() {
          return (0, Ez.c)(this, bz, "f")
        }
        set normalBlendMethod(zz) {
          (0, Ez.g)(this, bz, zz, "f")
        }
        get isEnabled() {
          return (0, Ez.c)(this, Mz, "f")
        }
        set isEnabled(zz) {
          (0, Ez.g)(this, Mz, zz, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(zz) {
          let iz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(zz, "DetailMap", 140, new Oz, iz), this._texture = null, uz.set(this, (0, Ez.j)(this, Xz, void 0)), this.diffuseBlendLevel = ((0, Ez.j)(this, fz), (0, Ez.j)(this, sz, 1)), this.roughnessBlendLevel = ((0, Ez.j)(this, rz), (0, Ez.j)(this, oz, 1)), this.bumpLevel = ((0, Ez.j)(this, Nz), (0, Ez.j)(this, vz, 1)), this._normalBlendMethod = ((0, Ez.j)(this, xz), nz.c.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), bz.set(this, (0, Ez.j)(this, Jz, void 0)), this._isEnabled = ((0, Ez.j)(this, Az), !1), Mz.set(this, (0, Ez.j)(this, Tz, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Ez.j)(this, Lz), this._internalMarkAllSubMeshesAsTexturesDirty = zz._dirtyCallbacks[1]
        }
        isReadyForSubMesh(zz, uz, bz) {
          return !this._isEnabled || !(zz._areTexturesDirty && uz.texturesEnabled && bz.getCaps().standardDerivatives && this._texture && lz.d.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(zz, uz) {
          if (this._isEnabled) {
            zz.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const bz = uz.uR();
            zz._areTexturesDirty && (bz.getCaps().standardDerivatives && this._texture && lz.d.DetailTextureEnabled && this._isEnabled ? ((0, Hz.db)(this._texture, zz, "DETAIL"), zz.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : zz.DETAIL = !1)
          } else zz.DETAIL = !1
        }
        bindForSubMesh(zz, uz) {
          if (!this._isEnabled) return;
          const bz = this._material.isFrozen;
          zz.useUbo && bz && zz.isSync || this._texture && lz.d.DetailTextureEnabled && (zz.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, Hz.B)(this._texture, zz, "detail")), uz.texturesEnabled && this._texture && lz.d.DetailTextureEnabled && zz.setTexture("detailSampler", this._texture)
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
      }, uz = new WeakMap, bz = new WeakMap, Mz = new WeakMap, (() => {
        const uz = "function" === typeof Symbol && Symbol.metadata ? Object.create(wz[Symbol.metadata] ?? null) : void 0;
        pz = [(0, iz.B)("detailTexture"), (0, iz.i)("_markAllSubMeshesAsTexturesDirty")], dz = [(0, iz.G)()], Fz = [(0, iz.G)()], Zz = [(0, iz.G)()], Rz = [(0, iz.G)(), (0, iz.i)("_markAllSubMeshesAsTexturesDirty")], Kz = [(0, iz.G)(), (0, iz.i)("_markAllSubMeshesAsTexturesDirty")], (0, Ez.h)(zz, null, pz, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: zz => "texture" in zz,
            get: zz => zz.texture,
            set: (zz, uz) => {
              zz.texture = uz
            }
          },
          metadata: uz
        }, Xz, fz), (0, Ez.h)(zz, null, Rz, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: zz => "normalBlendMethod" in zz,
            get: zz => zz.normalBlendMethod,
            set: (zz, uz) => {
              zz.normalBlendMethod = uz
            }
          },
          metadata: uz
        }, Jz, Az), (0, Ez.h)(zz, null, Kz, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: zz => "isEnabled" in zz,
            get: zz => zz.isEnabled,
            set: (zz, uz) => {
              zz.isEnabled = uz
            }
          },
          metadata: uz
        }, Tz, Lz), (0, Ez.h)(null, null, dz, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: zz => "diffuseBlendLevel" in zz,
            get: zz => zz.diffuseBlendLevel,
            set: (zz, uz) => {
              zz.diffuseBlendLevel = uz
            }
          },
          metadata: uz
        }, sz, rz), (0, Ez.h)(null, null, Fz, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: zz => "roughnessBlendLevel" in zz,
            get: zz => zz.roughnessBlendLevel,
            set: (zz, uz) => {
              zz.roughnessBlendLevel = uz
            }
          },
          metadata: uz
        }, oz, Nz), (0, Ez.h)(null, null, Zz, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: zz => "bumpLevel" in zz,
            get: zz => zz.bumpLevel,
            set: (zz, uz) => {
              zz.bumpLevel = uz
            }
          },
          metadata: uz
        }, vz, xz), uz && Object.defineProperty(zz, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: uz
        })
      })(), zz
    })()
  },
  39446: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    class Ez {
      constructor(zz) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = zz, zz)
          for (const uz in zz) Object.prototype.hasOwnProperty.call(zz, uz) && this._setDefaultValue(uz)
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
        for (let uz = 0; uz < this._keys.length; uz++) {
          const bz = this._keys[uz];
          if (this[bz] !== zz[bz]) return !1
        }
        return !0
      }
      cloneTo(zz) {
        this._keys.length !== zz._keys.length && (zz._keys = this._keys.slice(0));
        for (let uz = 0; uz < this._keys.length; uz++) {
          const bz = this._keys[uz];
          zz[bz] = this[bz]
        }
      }
      reset() {
        for (const zz of this._keys) this._setDefaultValue(zz)
      }
      _setDefaultValue(zz) {
        const uz = this._externalProperties?.[zz]?.type ?? typeof this[zz],
          bz = this._externalProperties?.[zz]?.default;
        switch (uz) {
          case "number":
            this[zz] = bz ?? 0;
            break;
          case "string":
            this[zz] = bz ?? "";
            break;
          default:
            this[zz] = bz ?? !1
        }
      }
      toString() {
        let zz = "";
        for (let uz = 0; uz < this._keys.length; uz++) {
          const bz = this._keys[uz],
            Ez = this[bz];
          switch (typeof Ez) {
            case "number":
            case "string":
              zz += "#define " + bz + " " + Ez + "\n";
              break;
            default:
              Ez && (zz += "#define " + bz + "\n")
          }
        }
        return zz
      }
    }
  },
  39552: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Mz,
      g: () => lz,
      j: () => iz
    });
    var Ez, nz = bz(36519);

    function iz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const Ez = uz(zz);
      if (!Number.isInteger(Ez) || Ez < 0 || Ez > bz) throw new Error(`Invalid geometry object ID ${Ez} for mesh "${zz.name}". Object IDs must be integers between 0 and 0x${bz.toString(16).toUpperCase()}.`);
      return Ez
    }

    function lz(zz, uz) {
      const bz = uz(zz);
      if (!Number.isInteger(bz) || bz < 0 || bz > 255 || 0 !== bz && 0 === (63 & bz)) throw new Error(`Invalid geometry mesh-blending tag ${bz} for mesh "${zz.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return bz
    }! function(zz) {
      zz[zz.Zero = 0] = "Zero", zz[zz.One = 1] = "One", zz[zz.MaxViewZ = 2] = "MaxViewZ", zz[zz.NoClear = 3] = "NoClear"
    }(Ez || (Ez = {}));
    class Mz {
      static CreateConfiguration(zz) {
        return Mz._Configurations[zz] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: nz.d.Zero(),
          currentViewProjection: nz.d.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, Mz._Configurations[zz]
      }
      static DeleteConfiguration(zz) {
        delete Mz._Configurations[zz]
      }
      static GetConfiguration(zz) {
        return Mz._Configurations[zz]
      }
      static _PrepareConfiguration(zz, uz, bz) {
        const Ez = Mz._Configurations[zz];
        Ez._attachments = uz, Ez._colorAttachments = bz, Ez._mrtCount = uz.length;
        let nz = "#define PREPASS\n";
        for (const iz of Mz.GeometryTextureDescriptions) {
          const zz = Ez.defines[iz.defineIndex];
          void 0 !== zz && (nz += `#define ${iz.define}\n#define ${iz.defineIndex} ${zz}\n`)
        }
        Ez.objectIdIsRedFormat && (nz += "#define PREPASS_OBJECT_ID_R8\n"), Ez._defines = nz + `#define SCENE_MRT_COUNT ${uz.length}\n`
      }
      static _PrepareStringDefines(zz, uz) {
        const bz = Mz._Configurations[zz];
        return !!bz?._defines && (uz.push(bz._defines), !0)
      }
      static _BindAttachmentsForEffect(zz, uz) {
        const bz = Mz._Configurations[zz.currentRenderPassId];
        return !bz?._attachments || (zz.bindAttachments(uz._multiTarget ? bz._attachments : bz._colorAttachments), uz._multiTarget || void 0 !== bz.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(zz) {
        const uz = Mz._Configurations[zz.currentRenderPassId];
        uz?._colorAttachments && zz.bindAttachments(uz._colorAttachments)
      }
      static _BindColorAttachments(zz) {
        const uz = Mz._Configurations[zz.currentRenderPassId];
        return !uz?._colorAttachments || (zz.bindAttachments(uz._colorAttachments), void 0 !== uz.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(zz) {
        const uz = Mz._Configurations[zz.currentRenderPassId];
        return !uz?._colorAttachments || void 0 !== uz.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(zz, uz) {
        const bz = Mz._Configurations[zz.currentRenderPassId];
        if (!bz) return;
        const Ez = zz.getAlphaMode(),
          nz = void 0 === bz.defines.PREPASS_COLOR_INDEX || 2 === Ez || 1 === Ez || 17 === Ez;
        uz.setFloat("geometryZeroAlphaDiscard", nz ? 1 : 0)
      }
      static AddUniformsAndSamplers(zz, uz) {
        zz.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(zz, uz) {
        for (const bz of uz)
          if (bz.hN)
            for (const uz of bz.hN) uz._removeDrawWrapper(zz)
      }
      static PrepareDefines(zz, uz, bz) {
        if (!bz._arePrePassDirty) return;
        const Ez = Mz._Configurations[zz];
        if (!Ez) return;
        bz.PREPASS = !0;
        let nz = 0;
        for (let iz = 0; iz < Mz.GeometryTextureDescriptions.length; iz++) {
          const zz = Mz.GeometryTextureDescriptions[iz],
            uz = zz.define,
            lz = zz.defineIndex,
            tz = Ez.defines[lz];
          void 0 !== tz ? (bz[uz] = !0, bz[lz] = tz, nz++) : (bz[uz] = !1, delete bz[lz])
        }
        bz.PREPASS_OBJECT_ID_R8 = Ez.objectIdIsRedFormat, bz.SCENE_MRT_COUNT = Ez._mrtCount ?? nz, bz.BONES_VELOCITY_ENABLED = uz.useBones && uz.computeBonesUsingShaders && uz.skeleton && !uz.skeleton.isUsingTextureForMatrices && -1 === Ez.excludedSkinnedMesh.indexOf(uz)
      }
      static Bind(zz, uz, bz, Ez, nz) {
        const tz = Mz._Configurations[zz];
        if (!tz) return;
        const Hz = bz.XT(),
          Oz = Hz.uR();
        if (tz.reverseCulling && Oz.setStateCullFaceType(Hz._mirroredCameraPosition ? nz.cullBackFaces : !nz.cullBackFaces), void 0 !== tz.defines.PREPASS_OBJECT_ID_INDEX) {
          const zz = tz.objectIdIsRedFormat ? 255 : 16777215;
          let Ez = bz.uniqueId;
          if (tz.objectIdProvider) Ez = iz(bz, tz.objectIdProvider, zz);
          else if (Ez > zz) throw new Error(`Invalid geometry object ID ${Ez} for mesh "${bz.name}". Object IDs must be integers between 0 and 0x${zz.toString(16).toUpperCase()}.`);
          uz.setFloat("objectId", Ez)
        }
        if (void 0 !== tz.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const zz = tz.meshBlendTagProvider ? lz(bz, tz.meshBlendTagProvider) : bz.meshBlendingTag;
          uz.setInt("meshBlendTag", zz)
        }
        if (void 0 !== tz.defines.PREPASS_VELOCITY_INDEX || void 0 !== tz.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const zz = tz._currentWorldMatrices ?? (tz._currentWorldMatrices = {}),
            nz = tz._worldMatrixFrameIds ?? (tz._worldMatrixFrameIds = {});
          if (zz[bz.uniqueId] || (zz[bz.uniqueId] = Ez.clone(), tz.previousWorldMatrices[bz.uniqueId] = Ez.clone()), nz[bz.uniqueId] !== Oz.frameId && (tz.previousWorldMatrices[bz.uniqueId].euz(zz[bz.uniqueId]), nz[bz.uniqueId] = Oz.frameId), zz[bz.uniqueId].euz(Ez), -1 === tz.lastUpdateFrameId ? (tz.lastUpdateFrameId = Oz.frameId, tz.previousViewProjection.euz(Hz.getTransformMatrix()), tz.currentViewProjection.euz(Hz.getTransformMatrix())) : tz.currentViewProjection.updateFlag !== Hz.getTransformMatrix().updateFlag ? (tz.lastUpdateFrameId = Oz.frameId, tz.previousViewProjection.euz(tz.currentViewProjection), tz.currentViewProjection.euz(Hz.getTransformMatrix())) : tz.lastUpdateFrameId !== Oz.frameId && (tz.lastUpdateFrameId = Oz.frameId, tz.previousViewProjection.euz(tz.currentViewProjection)), uz.setMatrix("previousWorld", tz.previousWorldMatrices[bz.uniqueId]), uz.setMatrix("previousViewProjection", tz.previousViewProjection), bz.useBones && bz.computeBonesUsingShaders && bz.skeleton) {
            const zz = bz.skeleton;
            if (!zz.isUsingTextureForMatrices || -1 === uz.getUniformIndex("boneTextureInfo")) {
              const Ez = zz.getTransformMatrices(bz);
              Ez && (tz.previousBones[bz.uniqueId] || (tz.previousBones[bz.uniqueId] = Ez.slice()), uz.setMatrices("mPreviousBones", tz.previousBones[bz.uniqueId]), tz.previousBones[bz.uniqueId].set(Ez))
            }
          }
        }
      }
    }
    Mz.GeometryTextureDescriptions = [{
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
    }], Mz._Configurations = {}
  },
  39537: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => dz,
      h: () => Zz
    });
    var Ez = bz(39170),
      nz = bz(39172),
      iz = bz(39064),
      lz = bz(39033);
    const Mz = new RegExp("^([gimus]+)!");
    class tz {
      constructor(zz) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = zz, this._scene = zz.XT(), this._engine = this._scene.uR()
      }
      _addPlugin(zz) {
        for (let Ez = 0; Ez < this._plugins.length; ++Ez)
          if (this._plugins[Ez].name === zz.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !zz.isCompatible(this._material.shaderLanguage)) throw `The plugin "${zz.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const uz = zz.getClassName();
        tz._MaterialPluginClassToMainDefine[uz] || (tz._MaterialPluginClassToMainDefine[uz] = "MATERIALPLUGIN_" + ++tz._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (zz, uz) => this._handlePluginEvent(zz, uz), this._plugins.push(zz), this._plugins.sort(((zz, uz) => zz.priority - uz.priority)), this._codeInjectionPoints = {};
        const bz = {};
        bz[tz._MaterialPluginClassToMainDefine[uz]] = {
          type: "boolean",
          default: !0
        };
        for (const Ez of this._plugins) Ez.collectDefines(bz), this._collectPointNames("vertex", Ez.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Ez.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = bz, !0
      }
      _activatePlugin(zz) {
        -1 === this._activePlugins.indexOf(zz) && (this._activePlugins.push(zz), this._activePlugins.sort(((zz, uz) => zz.priority - uz.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), zz.registerForExtraEvents && (this._activePluginsForExtraEvents.push(zz), this._activePluginsForExtraEvents.sort(((zz, uz) => zz.priority - uz.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(zz) {
        for (let uz = 0; uz < this._plugins.length; ++uz)
          if (this._plugins[uz].name === zz) return this._plugins[uz];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(zz) {
        let uz = !0;
        for (const bz of this._activePlugins) uz = uz && bz.isReadyForSubMesh(zz.defines, this._scene, this._engine, zz.subMesh);
        zz.isReadyForSubMesh = uz
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(zz) {
        for (const uz of this._activePlugins) uz.prepareDefinesBeforeAttributes(zz.defines, this._scene, zz.mesh)
      }
      _handlePluginEventPrepareDefines(zz) {
        for (const uz of this._activePlugins) uz.prepareDefines(zz.defines, this._scene, zz.mesh)
      }
      _handlePluginEventHardBindForSubMesh(zz) {
        for (const uz of this._activePluginsForExtraEvents) uz.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, zz.subMesh)
      }
      _handlePluginEventBindForSubMesh(zz) {
        for (const uz of this._activePlugins) uz.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, zz.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(zz) {
        let uz = !1;
        for (const bz of this._activePluginsForExtraEvents)
          if (uz = bz.hasRenderTargetTextures(), uz) break;
        zz.hasRenderTargetTextures = uz
      }
      _handlePluginEventFillRenderTargetTextures(zz) {
        for (const uz of this._activePluginsForExtraEvents) uz.fillRenderTargetTextures(zz.renderTargets)
      }
      _handlePluginEvent(zz, uz) {
        switch (zz) {
          case 512: {
            const zz = uz;
            for (const uz of this._activePlugins) uz.getActiveTextures(zz.activeTextures);
            break
          }
          case 256: {
            const zz = uz;
            for (const uz of this._activePlugins) uz.getAnimatables(zz.animatables);
            break
          }
          case 1024: {
            const zz = uz;
            let bz = !1;
            for (const uz of this._activePlugins)
              if (bz = uz.hasTexture(zz.texture), bz) break;
            zz.hasTexture = bz;
            break
          }
          case 2: {
            const zz = uz;
            for (const uz of this._plugins) uz.dispose(zz.forceDisposeTextures);
            break
          }
          case 4:
            uz.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const zz = uz;
            for (const uz of this._activePlugins) zz.fallbackRank = uz.addFallbacks(zz.defines, zz.fallbacks, zz.fallbackRank), uz.getAttributes(zz.attributes, this._scene, zz.mesh);
            this._uniformList.length > 0 && zz.uniforms.push(...this._uniformList), this._samplerList.length > 0 && zz.samplers.push(...this._samplerList), this._uboList.length > 0 && zz.uniformBuffersNames.push(...this._uboList), zz.customCode = this._injectCustomCode(zz, zz.customCode);
            break
          }
          case 8: {
            const zz = uz;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const bz = 1 === this._material.shaderLanguage;
            for (const uz of this._plugins) {
              const Ez = uz.getUniforms(this._material.shaderLanguage);
              if (Ez) {
                if (Ez.ubo)
                  for (const uz of Ez.ubo) {
                    if (uz.size && uz.type) {
                      const Ez = uz.arraySize ?? 0;
                      if (zz.ubo.addUniform(uz.name, uz.size, Ez), bz) {
                        let zz;
                        switch (uz.type) {
                          case "mat4":
                            zz = "mat4x4f";
                            break;
                          case "float":
                            zz = "f32";
                            break;
                          default:
                            zz = `${uz.type}f`
                        }
                        this._uboDeclaration += Ez > 0 ? `uniform ${uz.name}: array<${zz}, ${Ez}>;\n` : `uniform ${uz.name}: ${zz};\n`
                      } else this._uboDeclaration += `${uz.type} ${uz.name}${Ez>0?`[${Ez}]`:""};\n`
                    }
                    this._uniformList.push(uz.name)
                  }
                Ez.vertex && (this._vertexDeclaration += Ez.vertex + "\n"), Ez.fragment && (this._fragmentDeclaration += Ez.fragment + "\n"), Ez.externalUniforms && this._uniformList.push(...Ez.externalUniforms)
              }
              uz.getSamplers(this._samplerList), uz.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(zz, uz) {
        if (uz)
          for (const bz in uz) this._codeInjectionPoints[zz] || (this._codeInjectionPoints[zz] = {}), this._codeInjectionPoints[zz][bz] = !0
      }
      _injectCustomCode(zz, uz) {
        return (bz, Ez) => {
          uz && (Ez = uz(bz, Ez)), this._uboDeclaration && (Ez = Ez.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Ez = Ez.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (Ez = Ez.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const nz = this._codeInjectionPoints?.[bz];
          if (!nz) return Ez;
          let tz = null;
          for (let uz in nz) {
            let nz = "";
            for (const Ez of this._activePlugins) {
              const Mz = this._material.shaderLanguage;
              let Hz = Ez.getCustomCode(bz, Mz)?.[uz];
              Hz && (Ez.resolveIncludes && (null === tz && (tz = {
                defines: [],
                indexParameters: zz.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: lz.e.GetShadersRepository(Mz),
                includesShadersStore: lz.e.GetIncludesShadersStore(Mz),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                fbz: this._engine.fbz,
                processCodeAfterIncludes: void 0
              }), tz.isFragment = "fragment" === bz, (0, iz.g)(Hz, tz, (zz => Hz = zz))), nz += Hz + "\n")
            }
            if (nz.length > 0)
              if ("!" === uz.charAt(0)) {
                uz = uz.substring(1);
                let zz = "g";
                if ("!" === uz.charAt(0)) zz = "", uz = uz.substring(1);
                else {
                  const bz = Mz.exec(uz);
                  bz && bz.length >= 2 && (zz = bz[1], uz = uz.substring(zz.length + 1))
                }
                zz.indexOf("g") < 0 && (zz += "g");
                const bz = new RegExp(uz, zz);
                let iz = bz.exec(Ez);
                for (; null !== iz;) {
                  const {
                    index: zz
                  } = iz, uz = Hz(nz, iz);
                  Ez = Ez.substring(0, zz) + uz + Ez.substring(zz + iz[0].length), bz.lastIndex = zz + uz.length, iz = bz.exec(Ez)
                }
              } else {
                const zz = "#define " + uz;
                Ez = Ez.replace(zz, "\n" + nz + "\n" + zz)
              }
          }
          return Ez
        }
      }
    }
    tz._MaterialPluginClassToMainDefine = {}, tz._MaterialPluginCounter = 0;

    function Hz(zz, uz) {
      return zz.replace(/\$(\d+)/g, ((zz, bz) => {
        const Ez = Number(bz);
        return Ez < uz.length ? uz[Ez] : ""
      }))
    }
    var Oz = bz(39182),
      pz = bz(36564);
    let dz = (() => {
        var zz;
        let uz, bz, iz, lz, Mz = [],
          Hz = [],
          pz = [],
          dz = [],
          Fz = [],
          Zz = [],
          Rz = [],
          Kz = [];
        return zz = class {
          isCompatible(zz) {
            return 0 === zz
          }
          _enable(zz) {
            zz && this._pluginManager._activatePlugin(this)
          }
          constructor(zz, uz, bz, nz) {
            let iz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              lz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, Ez.j)(this, Mz, void 0), this.priority = ((0, Ez.j)(this, Hz), (0, Ez.j)(this, pz, 500)), this.resolveIncludes = ((0, Ez.j)(this, dz), (0, Ez.j)(this, Fz, !1)), this.registerForExtraEvents = ((0, Ez.j)(this, Zz), (0, Ez.j)(this, Rz, !1)), this.doNotSerialize = ((0, Ez.j)(this, Kz), !1), this._material = zz, this.name = uz, this.priority = bz, this.resolveIncludes = Oz, zz.pluginManager || (zz.pluginManager = new tz(zz), zz.aT.add((() => {
              zz.pluginManager = void 0
            }))), this._pluginDefineNames = nz, this._pluginManager = zz.pluginManager, iz && this._pluginManager._addPlugin(this), lz && this._enable(!0), this.markAllDefinesAsDirty = zz._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(zz, uz, bz, Ez) {
            return !0
          }
          hardBindForSubMesh(zz, uz, bz, Ez) {}
          bindForSubMesh(zz, uz, bz, Ez) {}
          dispose(zz) {}
          getCustomCode(zz) {
            return null
          }
          collectDefines(zz) {
            if (this._pluginDefineNames)
              for (const uz of Object.keys(this._pluginDefineNames)) {
                if ("_" === uz[0]) continue;
                const bz = typeof this._pluginDefineNames[uz];
                zz[uz] = {
                  type: "number" === bz ? "number" : "string" === bz ? "string" : "boolean" === bz ? "boolean" : "object",
                  default: this._pluginDefineNames[uz]
                }
              }
          }
          prepareDefinesBeforeAttributes(zz, uz, bz) {}
          prepareDefines(zz, uz, bz) {}
          hasTexture(zz) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(zz) {}
          getActiveTextures(zz) {}
          getAnimatables(zz) {}
          addFallbacks(zz, uz, bz) {
            return bz
          }
          getSamplers(zz) {}
          getAttributes(zz, uz, bz) {}
          getUniformBuffersNames(zz) {}
          getUniforms() {
            return {}
          }
          copyTo(zz) {
            Oz.e.Clone((() => zz), this)
          }
          serialize() {
            return Oz.e.Serialize(this)
          }
          parse(zz, uz, bz) {
            Oz.e.Parse((() => this), zz, uz, bz)
          }
        }, (() => {
          const tz = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          uz = [(0, nz.G)()], bz = [(0, nz.G)()], iz = [(0, nz.G)()], lz = [(0, nz.G)()], (0, Ez.h)(null, null, uz, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: zz => "name" in zz,
              get: zz => zz.name,
              set: (zz, uz) => {
                zz.name = uz
              }
            },
            metadata: tz
          }, Mz, Hz), (0, Ez.h)(null, null, bz, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: zz => "priority" in zz,
              get: zz => zz.priority,
              set: (zz, uz) => {
                zz.priority = uz
              }
            },
            metadata: tz
          }, pz, dz), (0, Ez.h)(null, null, iz, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: zz => "resolveIncludes" in zz,
              get: zz => zz.resolveIncludes,
              set: (zz, uz) => {
                zz.resolveIncludes = uz
              }
            },
            metadata: tz
          }, Fz, Zz), (0, Ez.h)(null, null, lz, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: zz => "registerForExtraEvents" in zz,
              get: zz => zz.registerForExtraEvents,
              set: (zz, uz) => {
                zz.registerForExtraEvents = uz
              }
            },
            metadata: tz
          }, Rz, Kz), tz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tz
          })
        })(), zz
      })(),
      Fz = !1;

    function Zz() {
      Fz || (Fz = !0, (0, pz.c)("BABYLON.MaterialPluginBase", dz))
    }
  },
  39437: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    class Ez {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(zz) {
        zz.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(zz) {}
      bindForSubMesh(zz, uz, bz, Ez, nz) {
        if (uz.prePassRenderer && uz.prePassRenderer.enabled && uz.prePassRenderer.currentRTisSceneRT && (-1 !== uz.prePassRenderer.getIndex(2) || -1 !== uz.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[bz.uniqueId] || (this.previousWorldMatrices[bz.uniqueId] = Ez.clone()), this.previousViewProjection || (this.previousViewProjection = uz.getTransformMatrix().clone(), this.currentViewProjection = uz.getTransformMatrix().clone());
          const nz = uz.uR();
          this.currentViewProjection.updateFlag !== uz.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = nz.frameId, this.previousViewProjection.euz(this.currentViewProjection), this.currentViewProjection.euz(uz.getTransformMatrix())) : this._lastUpdateFrameId !== nz.frameId && (this._lastUpdateFrameId = nz.frameId, this.previousViewProjection.euz(this.currentViewProjection)), zz.setMatrix("previousWorld", this.previousWorldMatrices[bz.uniqueId]), zz.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[bz.uniqueId] = Ez.clone()
        }
      }
    }
  },
  39566: (zz, uz, bz) => {
    function Ez(zz) {
      return class extends zz {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    bz.d(uz, {
      d: () => Ez
    })
  },
  39425: (zz, uz, bz) => {
    bz.d(uz, {
      StandardMaterial: () => Ez.e
    });
    var Ez = bz(39429);
    (0, Ez.b)()
  },
  39429: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => qz,
      e: () => Vz
    });
    var Ez = bz(39170),
      nz = bz(39172),
      iz = bz(39267),
      lz = bz(39253),
      Mz = bz(36715),
      tz = bz(39299),
      Hz = bz(39437),
      Oz = bz(39444),
      pz = bz(39276),
      dz = bz(39451),
      Fz = bz(39446),
      Zz = bz(39519),
      Rz = bz(39513),
      Kz = bz(39528),
      wz = bz(39530),
      Xz = bz(39511),
      fz = bz(39540),
      sz = bz(39505),
      rz = bz(39182),
      oz = bz(39548),
      Nz = bz(39552),
      vz = bz(39558),
      xz = bz(39566),
      Jz = bz(39575),
      Az = bz(36564),
      Tz = bz(39061);
    const Lz = {
      effect: null,
      subMesh: null
    };
    class Pz extends((0, xz.d)((0, vz.d)(Fz.e))) {}
    class Gz extends((0, Oz.h)(Pz)) {
      constructor(zz) {
        super(zz), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class az extends((0, Jz.c)(Zz.b)) {}
    let Vz = (() => {
        var zz, uz, Oz, Fz, vz, xz, Jz, Az, Tz, Pz, Vz, mz, qz, hz, Uz, cz, gz, Sz, yz, Dz, Qz, Wz, ez, jz, Iz, Bz, Cz, Yz, kz, zu, uu, bu, Eu;
        let nu, iu, lu, Mu, tu, Hu, Ou, pu, du, Fu, Zu, Ru, Ku, wu, Xu, fu, su, ru, ou, Nu, vu, xu, Ju, Au, Tu, Lu, Pu, Gu, au, Vu, mu, qu, hu, Uu, cu, gu, Su, yu, Du, Qu, Wu, eu, ju, Iu, Bu, Cu, Yu, ku, zb, ub, bb, Eb, nb, ib, lb, Mb, tb, Hb, Ob, pb, db, Fb, Zb, Rb, Kb, wb, Xb, fb, sb, rb, ob, Nb, vb, xb = az,
          Jb = [],
          Ab = [],
          Tb = [],
          Lb = [],
          Pb = [],
          Gb = [],
          ab = [],
          Vb = [],
          mb = [],
          qb = [],
          hb = [],
          Ub = [],
          cb = [],
          gb = [],
          Sb = [],
          yb = [],
          Db = [],
          Qb = [],
          Wb = [],
          eb = [],
          jb = [],
          Ib = [],
          Bb = [],
          Cb = [],
          Yb = [],
          kb = [],
          zE = [],
          uE = [],
          bE = [],
          EE = [],
          nE = [],
          iE = [],
          lE = [],
          ME = [],
          tE = [],
          HE = [],
          OE = [],
          pE = [],
          dE = [],
          FE = [],
          ZE = [],
          RE = [],
          KE = [],
          wE = [],
          XE = [],
          fE = [],
          sE = [],
          rE = [],
          oE = [],
          NE = [],
          vE = [],
          xE = [],
          JE = [],
          AE = [],
          TE = [],
          LE = [],
          PE = [],
          GE = [],
          aE = [],
          VE = [],
          mE = [],
          qE = [],
          hE = [],
          UE = [],
          cE = [],
          gE = [],
          SE = [],
          yE = [],
          DE = [],
          QE = [],
          WE = [],
          eE = [],
          jE = [],
          IE = [],
          BE = [],
          CE = [],
          YE = [],
          kE = [],
          zn = [],
          un = [],
          bn = [],
          En = [],
          nn = [],
          Mn = [],
          tn = [],
          Hn = [],
          On = [],
          pn = [],
          dn = [],
          Fn = [],
          Zn = [],
          Rn = [],
          Kn = [],
          wn = [],
          Xn = [],
          fn = [],
          sn = [],
          rn = [],
          Nn = [],
          vn = [],
          xn = [],
          Jn = [],
          An = [],
          Tn = [],
          Ln = [],
          Pn = [],
          Gn = [],
          an = [],
          Vn = [],
          mn = [],
          qn = [],
          hn = [],
          Un = [],
          cn = [],
          gn = [],
          Sn = [],
          yn = [],
          Dn = [],
          Qn = [],
          Wn = [],
          en = [],
          jn = [],
          In = [],
          Bn = [],
          Cn = [],
          Yn = [],
          kn = [],
          zi = [],
          ui = [],
          bi = [],
          Ei = [],
          ni = [],
          ii = [],
          li = [],
          Mi = [],
          ti = [],
          Hi = [],
          Oi = [],
          di = [],
          Fi = [],
          Zi = [],
          Ri = [],
          Ki = [],
          wi = [],
          Xi = [],
          fi = [];
        return zz = class extends xb {
          get diffuseTexture() {
            return (0, Ez.c)(this, uz, "f")
          }
          set diffuseTexture(zz) {
            (0, Ez.g)(this, uz, zz, "f")
          }
          get ambientTexture() {
            return (0, Ez.c)(this, Oz, "f")
          }
          set ambientTexture(zz) {
            (0, Ez.g)(this, Oz, zz, "f")
          }
          get opacityTexture() {
            return (0, Ez.c)(this, Fz, "f")
          }
          set opacityTexture(zz) {
            (0, Ez.g)(this, Fz, zz, "f")
          }
          get reflectionTexture() {
            return (0, Ez.c)(this, vz, "f")
          }
          set reflectionTexture(zz) {
            (0, Ez.g)(this, vz, zz, "f")
          }
          get emissiveTexture() {
            return (0, Ez.c)(this, xz, "f")
          }
          set emissiveTexture(zz) {
            (0, Ez.g)(this, xz, zz, "f")
          }
          get specularTexture() {
            return (0, Ez.c)(this, Jz, "f")
          }
          set specularTexture(zz) {
            (0, Ez.g)(this, Jz, zz, "f")
          }
          get bumpTexture() {
            return (0, Ez.c)(this, Az, "f")
          }
          set bumpTexture(zz) {
            (0, Ez.g)(this, Az, zz, "f")
          }
          get lightmapTexture() {
            return (0, Ez.c)(this, Tz, "f")
          }
          set lightmapTexture(zz) {
            (0, Ez.g)(this, Tz, zz, "f")
          }
          get refractionTexture() {
            return (0, Ez.c)(this, Pz, "f")
          }
          set refractionTexture(zz) {
            (0, Ez.g)(this, Pz, zz, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, Ez.c)(this, Vz, "f")
          }
          set useAlphaFromDiffuseTexture(zz) {
            (0, Ez.g)(this, Vz, zz, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, Ez.c)(this, mz, "f")
          }
          set useEmissiveAsIllumination(zz) {
            (0, Ez.g)(this, mz, zz, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, Ez.c)(this, qz, "f")
          }
          set linkEmissiveWithDiffuse(zz) {
            (0, Ez.g)(this, qz, zz, "f")
          }
          get useSpecularOverAlpha() {
            return (0, Ez.c)(this, hz, "f")
          }
          set useSpecularOverAlpha(zz) {
            (0, Ez.g)(this, hz, zz, "f")
          }
          get useReflectionOverAlpha() {
            return (0, Ez.c)(this, Uz, "f")
          }
          set useReflectionOverAlpha(zz) {
            (0, Ez.g)(this, Uz, zz, "f")
          }
          get disableLighting() {
            return (0, Ez.c)(this, cz, "f")
          }
          set disableLighting(zz) {
            (0, Ez.g)(this, cz, zz, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, Ez.c)(this, gz, "f")
          }
          set useObjectSpaceNormalMap(zz) {
            (0, Ez.g)(this, gz, zz, "f")
          }
          get useParallax() {
            return (0, Ez.c)(this, Sz, "f")
          }
          set useParallax(zz) {
            (0, Ez.g)(this, Sz, zz, "f")
          }
          get useParallaxOcclusion() {
            return (0, Ez.c)(this, yz, "f")
          }
          set useParallaxOcclusion(zz) {
            (0, Ez.g)(this, yz, zz, "f")
          }
          get roughness() {
            return (0, Ez.c)(this, Dz, "f")
          }
          set roughness(zz) {
            (0, Ez.g)(this, Dz, zz, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, Ez.c)(this, Qz, "f")
          }
          set useLightmapAsShadowmap(zz) {
            (0, Ez.g)(this, Qz, zz, "f")
          }
          get diffuseFresnelParameters() {
            return (0, Ez.c)(this, Wz, "f")
          }
          set diffuseFresnelParameters(zz) {
            (0, Ez.g)(this, Wz, zz, "f")
          }
          get opacityFresnelParameters() {
            return (0, Ez.c)(this, ez, "f")
          }
          set opacityFresnelParameters(zz) {
            (0, Ez.g)(this, ez, zz, "f")
          }
          get reflectionFresnelParameters() {
            return (0, Ez.c)(this, jz, "f")
          }
          set reflectionFresnelParameters(zz) {
            (0, Ez.g)(this, jz, zz, "f")
          }
          get refractionFresnelParameters() {
            return (0, Ez.c)(this, Iz, "f")
          }
          set refractionFresnelParameters(zz) {
            (0, Ez.g)(this, Iz, zz, "f")
          }
          get emissiveFresnelParameters() {
            return (0, Ez.c)(this, Bz, "f")
          }
          set emissiveFresnelParameters(zz) {
            (0, Ez.g)(this, Bz, zz, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, Ez.c)(this, Cz, "f")
          }
          set useReflectionFresnelFromSpecular(zz) {
            (0, Ez.g)(this, Cz, zz, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, Ez.c)(this, Yz, "f")
          }
          set useGlossinessFromSpecularMapAlpha(zz) {
            (0, Ez.g)(this, Yz, zz, "f")
          }
          get maxSimultaneousLights() {
            return (0, Ez.c)(this, kz, "f")
          }
          set maxSimultaneousLights(zz) {
            (0, Ez.g)(this, kz, zz, "f")
          }
          get invertNormalMapX() {
            return (0, Ez.c)(this, zu, "f")
          }
          set invertNormalMapX(zz) {
            (0, Ez.g)(this, zu, zz, "f")
          }
          get invertNormalMapY() {
            return (0, Ez.c)(this, uu, "f")
          }
          set invertNormalMapY(zz) {
            (0, Ez.g)(this, uu, zz, "f")
          }
          get twoSidedLighting() {
            return (0, Ez.c)(this, bu, "f")
          }
          set twoSidedLighting(zz) {
            (0, Ez.g)(this, bu, zz, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Ez.c)(this, Eu, "f")
          }
          set applyDecalMapAfterDetailMap(zz) {
            (0, Ez.g)(this, Eu, zz, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(bz, nz) {
            super(bz, nz, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || zz.ForceGLSL), this._diffuseTexture = (0, Ez.j)(this, Jb, null), uz.set(this, ((0, Ez.j)(this, Ab), (0, Ez.j)(this, Tb, void 0))), this._ambientTexture = ((0, Ez.j)(this, Lb), (0, Ez.j)(this, Pb, null)), Oz.set(this, ((0, Ez.j)(this, Gb), (0, Ez.j)(this, ab, void 0))), this._opacityTexture = ((0, Ez.j)(this, Vb), (0, Ez.j)(this, mb, null)), Fz.set(this, ((0, Ez.j)(this, qb), (0, Ez.j)(this, hb, void 0))), this._reflectionTexture = ((0, Ez.j)(this, Ub), (0, Ez.j)(this, cb, null)), vz.set(this, ((0, Ez.j)(this, gb), (0, Ez.j)(this, Sb, void 0))), this._emissiveTexture = ((0, Ez.j)(this, yb), (0, Ez.j)(this, Db, null)), xz.set(this, ((0, Ez.j)(this, Qb), (0, Ez.j)(this, Wb, void 0))), this._specularTexture = ((0, Ez.j)(this, eb), (0, Ez.j)(this, jb, null)), Jz.set(this, ((0, Ez.j)(this, Ib), (0, Ez.j)(this, Bb, void 0))), this._bumpTexture = ((0, Ez.j)(this, Cb), (0, Ez.j)(this, Yb, null)), Az.set(this, ((0, Ez.j)(this, kb), (0, Ez.j)(this, zE, void 0))), this._lightmapTexture = ((0, Ez.j)(this, uE), (0, Ez.j)(this, bE, null)), Tz.set(this, ((0, Ez.j)(this, EE), (0, Ez.j)(this, nE, void 0))), this._refractionTexture = ((0, Ez.j)(this, iE), (0, Ez.j)(this, lE, null)), Pz.set(this, ((0, Ez.j)(this, ME), (0, Ez.j)(this, tE, void 0))), this.ambientColor = ((0, Ez.j)(this, HE), (0, Ez.j)(this, OE, new Mz.c(0, 0, 0))), this.diffuseColor = ((0, Ez.j)(this, pE), (0, Ez.j)(this, dE, new Mz.c(1, 1, 1))), this.specularColor = ((0, Ez.j)(this, FE), (0, Ez.j)(this, ZE, new Mz.c(1, 1, 1))), this.emissiveColor = ((0, Ez.j)(this, RE), (0, Ez.j)(this, KE, new Mz.c(0, 0, 0))), this.specularPower = ((0, Ez.j)(this, wE), (0, Ez.j)(this, XE, 64)), this._useAlphaFromDiffuseTexture = ((0, Ez.j)(this, fE), (0, Ez.j)(this, sE, !1)), Vz.set(this, ((0, Ez.j)(this, rE), (0, Ez.j)(this, oE, void 0))), this._useEmissiveAsIllumination = ((0, Ez.j)(this, NE), (0, Ez.j)(this, vE, !1)), mz.set(this, ((0, Ez.j)(this, xE), (0, Ez.j)(this, JE, void 0))), this._linkEmissiveWithDiffuse = ((0, Ez.j)(this, AE), (0, Ez.j)(this, TE, !1)), qz.set(this, ((0, Ez.j)(this, LE), (0, Ez.j)(this, PE, void 0))), this._useSpecularOverAlpha = ((0, Ez.j)(this, GE), (0, Ez.j)(this, aE, !1)), hz.set(this, ((0, Ez.j)(this, VE), (0, Ez.j)(this, mE, void 0))), this._useReflectionOverAlpha = ((0, Ez.j)(this, qE), (0, Ez.j)(this, hE, !1)), Uz.set(this, ((0, Ez.j)(this, UE), (0, Ez.j)(this, cE, void 0))), this._disableLighting = ((0, Ez.j)(this, gE), (0, Ez.j)(this, SE, !1)), cz.set(this, ((0, Ez.j)(this, yE), (0, Ez.j)(this, DE, void 0))), this._useObjectSpaceNormalMap = ((0, Ez.j)(this, QE), (0, Ez.j)(this, WE, !1)), gz.set(this, ((0, Ez.j)(this, eE), (0, Ez.j)(this, jE, void 0))), this._useParallax = ((0, Ez.j)(this, IE), (0, Ez.j)(this, BE, !1)), Sz.set(this, ((0, Ez.j)(this, CE), (0, Ez.j)(this, YE, void 0))), this._useParallaxOcclusion = ((0, Ez.j)(this, kE), (0, Ez.j)(this, zn, !1)), yz.set(this, ((0, Ez.j)(this, un), (0, Ez.j)(this, bn, void 0))), this.parallaxScaleBias = ((0, Ez.j)(this, En), (0, Ez.j)(this, nn, .05)), this._roughness = ((0, Ez.j)(this, Mn), (0, Ez.j)(this, tn, 0)), Dz.set(this, ((0, Ez.j)(this, Hn), (0, Ez.j)(this, On, void 0))), this.indexOfRefraction = ((0, Ez.j)(this, pn), (0, Ez.j)(this, dn, .98)), this.invertRefractionY = ((0, Ez.j)(this, Fn), (0, Ez.j)(this, Zn, !0)), this.alphaCutOff = ((0, Ez.j)(this, Rn), (0, Ez.j)(this, Kn, .4)), this._useLightmapAsShadowmap = ((0, Ez.j)(this, wn), (0, Ez.j)(this, Xn, !1)), Qz.set(this, ((0, Ez.j)(this, fn), (0, Ez.j)(this, sn, void 0))), this._diffuseFresnelParameters = ((0, Ez.j)(this, rn), (0, Ez.j)(this, Nn, void 0)), Wz.set(this, ((0, Ez.j)(this, vn), (0, Ez.j)(this, xn, void 0))), this._opacityFresnelParameters = ((0, Ez.j)(this, Jn), (0, Ez.j)(this, An, void 0)), ez.set(this, ((0, Ez.j)(this, Tn), (0, Ez.j)(this, Ln, void 0))), this._reflectionFresnelParameters = ((0, Ez.j)(this, Pn), (0, Ez.j)(this, Gn, void 0)), jz.set(this, ((0, Ez.j)(this, an), (0, Ez.j)(this, Vn, void 0))), this._refractionFresnelParameters = ((0, Ez.j)(this, mn), (0, Ez.j)(this, qn, void 0)), Iz.set(this, ((0, Ez.j)(this, hn), (0, Ez.j)(this, Un, void 0))), this._emissiveFresnelParameters = ((0, Ez.j)(this, cn), (0, Ez.j)(this, gn, void 0)), Bz.set(this, ((0, Ez.j)(this, Sn), (0, Ez.j)(this, yn, void 0))), this._useReflectionFresnelFromSpecular = ((0, Ez.j)(this, Dn), (0, Ez.j)(this, Qn, !1)), Cz.set(this, ((0, Ez.j)(this, Wn), (0, Ez.j)(this, en, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, Ez.j)(this, jn), (0, Ez.j)(this, In, !1)), Yz.set(this, ((0, Ez.j)(this, Bn), (0, Ez.j)(this, Cn, void 0))), this._maxSimultaneousLights = ((0, Ez.j)(this, Yn), (0, Ez.j)(this, kn, 4)), kz.set(this, ((0, Ez.j)(this, zi), (0, Ez.j)(this, ui, void 0))), this._invertNormalMapX = ((0, Ez.j)(this, bi), (0, Ez.j)(this, Ei, !1)), zu.set(this, ((0, Ez.j)(this, ni), (0, Ez.j)(this, ii, void 0))), this._invertNormalMapY = ((0, Ez.j)(this, li), (0, Ez.j)(this, Mi, !1)), uu.set(this, ((0, Ez.j)(this, ti), (0, Ez.j)(this, Hi, void 0))), this._twoSidedLighting = ((0, Ez.j)(this, Oi), (0, Ez.j)(this, di, !1)), bu.set(this, ((0, Ez.j)(this, Fi), (0, Ez.j)(this, Zi, void 0))), this._applyDecalMapAfterDetailMap = ((0, Ez.j)(this, Ri), (0, Ez.j)(this, Ki, !1)), Eu.set(this, ((0, Ez.j)(this, wi), (0, Ez.j)(this, Xi, void 0))), this._vertexPullingMetadata = ((0, Ez.j)(this, fi), null), this._renderTargets = new iz.e(16), this._globalAmbientColor = new Mz.c(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new wz.e(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new Hz.e, this.getRenderTargetTextures = () => (this._renderTargets.reset(), zz.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), zz.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
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
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === dz.c.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== dz.c.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(uz, bz) {
            let Ez = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const nz = bz._drawWrapper;
            if (nz.effect && this.isFrozen && nz._wasPreviouslyReady && nz._wasPreviouslyUsingInstances === Ez) return !0;
            bz.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), bz.materialDefines = new Gz(this._eventInfo.defineNames));
            const iz = this.XT(),
              lz = bz.materialDefines;
            if (this._isReadyForSubMesh(bz)) return !0;
            const Mz = iz.uR();
            if (lz._needNormals = (0, sz.$)(iz, uz, lz, !0, this._maxSimultaneousLights, this._disableLighting), !(0, sz.d)(iz, uz, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, sz.ib)(iz, lz);
            const Oz = this.needAlphaBlendingForMesh(uz) && this.XT().useOrderIndependentTransparency;
            if ((0, sz.mb)(iz, lz, this.canRenderToMRT && !Oz), (0, sz.kb)(iz, lz, Oz), Nz.d.PrepareDefines(Mz.currentRenderPassId, uz, lz), lz._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, lz._needUVs = !1;
              for (let zz = 1; zz <= 6; ++zz) lz["MAINUV" + zz] = !1;
              if (iz.texturesEnabled) {
                if (lz.DIFFUSEDIRECTUV = 0, lz.BUMPDIRECTUV = 0, lz.AMBIENTDIRECTUV = 0, lz.OPACITYDIRECTUV = 0, lz.EMISSIVEDIRECTUV = 0, lz.SPECULARDIRECTUV = 0, lz.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && zz.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, sz.db)(this._diffuseTexture, lz, "DIFFUSE")
                } else lz.DIFFUSE = !1;
                if (this._ambientTexture && zz.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, sz.db)(this._ambientTexture, lz, "AMBIENT")
                } else lz.AMBIENT = !1;
                if (this._opacityTexture && zz.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, sz.db)(this._opacityTexture, lz, "OPACITY"), lz.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else lz.OPACITY = !1;
                if (this._reflectionTexture && zz.ReflectionTextureEnabled ? (lz.ROUGHNESS = this._roughness > 0, lz.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (lz.ROUGHNESS = !1, lz.REFLECTIONOVERALPHA = !1), !(0, sz.Z)(iz, this._reflectionTexture, lz)) return !1;
                if (this._emissiveTexture && zz.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, sz.db)(this._emissiveTexture, lz, "EMISSIVE")
                } else lz.EMISSIVE = !1;
                if (this._lightmapTexture && zz.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, sz.db)(this._lightmapTexture, lz, "LIGHTMAP"), lz.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, lz.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else lz.LIGHTMAP = !1;
                if (this._specularTexture && zz.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, sz.db)(this._specularTexture, lz, "SPECULAR"), lz.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else lz.SPECULAR = !1;
                if (iz.uR().getCaps().standardDerivatives && this._bumpTexture && zz.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, sz.db)(this._bumpTexture, lz, "BUMP"), lz.PARALLAX = this._useParallax, lz.PARALLAX_RHS = iz.useRightHandedSystem, lz.PARALLAXOCCLUSION = this._useParallaxOcclusion, lz.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else lz.BUMP = !1, lz.PARALLAX = !1, lz.PARALLAX_RHS = !1, lz.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && zz.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  lz._needUVs = !0, lz.REFRACTION = !0, lz.REFRACTIONMAP_3D = this._refractionTexture.isCube, lz.RGBDREFRACTION = this._refractionTexture.isRGBD, lz.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else lz.REFRACTION = !1;
                lz.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else lz.DIFFUSE = !1, lz.AMBIENT = !1, lz.OPACITY = !1, lz.REFLECTION = !1, lz.EMISSIVE = !1, lz.LIGHTMAP = !1, lz.BUMP = !1, lz.REFRACTION = !1;
              lz.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), lz.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, lz.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, lz.SPECULAROVERALPHA = this._useSpecularOverAlpha, lz.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, lz.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, lz.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(uz), lz.TEXTURE_REPETITION_MODE = Mz.version > 1 || Mz.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = lz, this._eventInfo.subMesh = bz, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (lz._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(lz), lz.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, lz.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (lz._areFresnelDirty && (zz.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (lz.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, lz.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, lz.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, lz.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, lz.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, lz.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, lz._needNormals = !0, lz.FRESNEL = !0) : lz.FRESNEL = !1), lz.AREALIGHTUSED || lz.CLUSTLIGHT_BATCH)
              for (let zz = 0; zz < uz.lightSources.length; zz++)
                if (!uz.lightSources[zz]._isReady()) return !1;
            (0, sz.hb)(uz, iz, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(uz), lz, this._applyDecalMapAfterDetailMap, this._useVertexPulling, bz.getRenderingMesh(), this._isVertexOutputInvariant), (0, sz.W)(iz, Mz, this, lz, Ez, null, bz.getRenderingMesh().hasThinInstances), this._eventInfo.defines = lz, this._eventInfo.mesh = uz, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, sz.T)(uz, lz, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let dz = !1;
            if (lz.isDirty) {
              const Ez = lz._areLightsDisposed;
              lz.markAsProcessed();
              const nz = new Kz.c;
              lz.REFLECTION && nz.addFallback(0, "REFLECTION"), lz.SPECULAR && nz.addFallback(0, "SPECULAR"), lz.BUMP && nz.addFallback(0, "BUMP"), lz.PARALLAX && nz.addFallback(1, "PARALLAX"), lz.PARALLAX_RHS && nz.addFallback(1, "PARALLAX_RHS"), lz.PARALLAXOCCLUSION && nz.addFallback(0, "PARALLAXOCCLUSION"), lz.SPECULAROVERALPHA && nz.addFallback(0, "SPECULAROVERALPHA"), lz.FOG && nz.addFallback(1, "FOG"), lz.POINTSIZE && nz.addFallback(0, "POINTSIZE"), lz.LOGARITHMICDEPTH && nz.addFallback(0, "LOGARITHMICDEPTH"), (0, sz.C)(lz, nz, this._maxSimultaneousLights), lz.SPECULARTERM && nz.addFallback(0, "SPECULARTERM"), lz.DIFFUSEFRESNEL && nz.addFallback(1, "DIFFUSEFRESNEL"), lz.OPACITYFRESNEL && nz.addFallback(2, "OPACITYFRESNEL"), lz.REFLECTIONFRESNEL && nz.addFallback(3, "REFLECTIONFRESNEL"), lz.EMISSIVEFRESNEL && nz.addFallback(4, "EMISSIVEFRESNEL"), lz.FRESNEL && nz.addFallback(4, "FRESNEL"), lz.MULTIVIEW && nz.addFallback(0, "MULTIVIEW");
              const Oz = [tz.j.PositionKind];
              lz.NORMAL && Oz.push(tz.j.NormalKind), lz.TANGENT && Oz.push(tz.j.TangentKind);
              for (let zz = 1; zz <= 6; ++zz) lz["UV" + zz] && Oz.push(`uv${1===zz?"":zz}`);
              lz.VERTEXCOLOR && Oz.push(tz.j.ColorKind), (0, sz.I)(Oz, uz, lz, nz), (0, sz.M)(Oz, lz), (0, sz.P)(Oz, uz, lz), (0, sz.G)(Oz, uz, lz);
              let Fz = "default";
              const Zz = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                Rz = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, sz.sb)(Zz, Rz, !1);
              const wz = ["Material", "Scene", "Mesh"],
                rz = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: lz.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = nz, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = lz, this._eventInfo.uniforms = Zz, this._eventInfo.attributes = Oz, this._eventInfo.samplers = Rz, this._eventInfo.uniformBuffersNames = wz, this._eventInfo.customCode = void 0, this._eventInfo.mesh = uz, this._eventInfo.indexParameters = rz, this._callbackPluginEventGeneric(128, this._eventInfo), Nz.d.AddUniformsAndSamplers(Zz, Rz), Hz.e.AddUniforms(Zz), Hz.e.AddSamplers(Rz), pz.c && (pz.c.PrepareUniforms(Zz, lz), pz.c.PrepareSamplers(Rz, lz)), (0, sz.ub)({
                  uniformsNames: Zz,
                  uniformBuffersNames: wz,
                  samplers: Rz,
                  defines: lz,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, Xz.c)(Zz), this._useVertexPulling) {
                const zz = bz.getRenderingMesh(),
                  uz = zz?.geometry;
                uz && (this._vertexPullingMetadata = (0, fz.e)(uz), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((zz, uz) => {
                  Zz.push(`vp_${uz}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const oz = {};
              this.customShaderNameResolve && (Fz = this.customShaderNameResolve(Fz, Zz, wz, Rz, lz, Oz, oz));
              const vz = lz.toString(),
                xz = bz.effect,
                Jz = iz.uR().createEffect(Fz, {
                  attributes: Oz,
                  uniformsNames: Zz,
                  uniformBuffersNames: wz,
                  samplers: Rz,
                  defines: vz,
                  fallbacks: nz,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: rz,
                  processFinalCode: oz.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: lz.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: zz._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, Mz);
              if (this._eventInfo.customCode = void 0, Jz)
                if (this._onEffectCreatedObservable && (Lz.effect = Jz, Lz.subMesh = bz, this._onEffectCreatedObservable.notifyObservers(Lz)), this.allowShaderHotSwapping && xz && !Jz.isReady()) {
                  if (lz.markAsUnprocessed(), dz = this.isFrozen, Ez) return lz._areLightsDisposed = !0, !1
                } else iz.resetCachedMaterial(), bz.setEffect(Jz, lz, this._materialContext)
            }
            return !(!bz.effect || !bz.effect.isReady()) && (lz._renderId = iz.getRenderId(), nz._wasPreviouslyReady = !dz, nz._wasPreviouslyUsingInstances = Ez, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const zz = this._uniformBuffer;
            zz.addUniform("diffuseLeftColor", 4), zz.addUniform("diffuseRightColor", 4), zz.addUniform("opacityParts", 4), zz.addUniform("reflectionLeftColor", 4), zz.addUniform("reflectionRightColor", 4), zz.addUniform("refractionLeftColor", 4), zz.addUniform("refractionRightColor", 4), zz.addUniform("emissiveLeftColor", 4), zz.addUniform("emissiveRightColor", 4), zz.addUniform("vDiffuseInfos", 2), zz.addUniform("vAmbientInfos", 2), zz.addUniform("vOpacityInfos", 2), zz.addUniform("vEmissiveInfos", 2), zz.addUniform("vLightmapInfos", 2), zz.addUniform("vSpecularInfos", 2), zz.addUniform("vBumpInfos", 3), zz.addUniform("diffuseMatrix", 16), zz.addUniform("ambientMatrix", 16), zz.addUniform("opacityMatrix", 16), zz.addUniform("emissiveMatrix", 16), zz.addUniform("lightmapMatrix", 16), zz.addUniform("specularMatrix", 16), zz.addUniform("bumpMatrix", 16), zz.addUniform("vTangentSpaceParams", 2), zz.addUniform("pointSize", 1), zz.addUniform("alphaCutOff", 1), zz.addUniform("refractionMatrix", 16), zz.addUniform("vRefractionInfos", 4), zz.addUniform("vRefractionPosition", 3), zz.addUniform("vRefractionSize", 3), zz.addUniform("vSpecularColor", 4), zz.addUniform("vEmissiveColor", 3), zz.addUniform("vDiffuseColor", 4), zz.addUniform("vAmbientColor", 3), zz.addUniform("cameraInfo", 4), zz.addUniform("vTextureRepetitionHexTilingParams", 4), (0, sz.pb)(zz, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(uz, bz, Ez) {
            const nz = this.XT(),
              iz = Ez.materialDefines;
            if (!iz) return;
            const tz = Ez.effect;
            if (!tz) return;
            this._activeEffect = tz, bz.getMeshUniformBuffer().bindToEffect(tz, "Mesh"), bz.transferToEffect(uz), this._uniformBuffer.bindToEffect(tz, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, nz, bz, uz, this.isFrozen), Nz.d.Bind(nz.uR().currentRenderPassId, this._activeEffect, bz, uz, this);
            const Hz = nz.activeCamera;
            Hz ? this._uniformBuffer.updateFloat4("cameraInfo", Hz.minZ, Hz.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Oz = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Oz[0], Oz[1], Oz[2], Oz[3]), this._eventInfo.subMesh = Ez, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), iz.OBJECTSPACE_NORMALMAP && (uz.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const pz = this._mustRebind(nz, tz, Ez, bz.visibility),
              dz = nz.uR()._features.needToAlwaysBindUniformBuffers;
            (0, sz.g)(bz, tz), this._vertexPullingMetadata && (0, fz.c)(tz, this._vertexPullingMetadata);
            const Fz = this._uniformBuffer;
            if (pz) {
              if (this.bindViewProjection(tz), !Fz.useUbo || !this.isFrozen || !Fz.isSync || Ez._drawWrapper._forceRebindOnNextCall) {
                if (zz.FresnelEnabled && iz.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (Fz.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), Fz.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const zz = Mz.k.Color3[0];
                    zz.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), Fz.updateColor4("opacityParts", zz, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (Fz.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), Fz.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (Fz.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), Fz.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (Fz.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), Fz.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (iz.ALPHATEST && Fz.updateFloat("alphaCutOff", this.alphaCutOff), nz.texturesEnabled && (this._diffuseTexture && zz.DiffuseTextureEnabled && (Fz.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, sz.B)(this._diffuseTexture, Fz, "diffuse")), this._ambientTexture && zz.AmbientTextureEnabled && (Fz.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, sz.B)(this._ambientTexture, Fz, "ambient")), this._opacityTexture && zz.OpacityTextureEnabled && (Fz.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, sz.B)(this._opacityTexture, Fz, "opacity")), (0, sz.m)(nz, iz, Fz, Mz.c.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && zz.ReflectionTextureEnabled || Fz.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && zz.EmissiveTextureEnabled && (Fz.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, sz.B)(this._emissiveTexture, Fz, "emissive")), this._lightmapTexture && zz.LightmapTextureEnabled && (Fz.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, sz.B)(this._lightmapTexture, Fz, "lightmap")), this._specularTexture && zz.SpecularTextureEnabled && (Fz.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, sz.B)(this._specularTexture, Fz, "specular")), this._bumpTexture && nz.uR().getCaps().standardDerivatives && zz.BumpTextureEnabled && (Fz.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, sz.B)(this._bumpTexture, Fz, "bump"), nz._mirroredCameraPosition ? Fz.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Fz.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && zz.RefractionTextureEnabled)) {
                  let zz = 1;
                  if (this._refractionTexture.isCube || (Fz.M_("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (zz = this._refractionTexture.depth)), Fz.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, zz, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const zz = this._refractionTexture;
                    Fz.updateVector3("vRefractionPosition", zz.boundingBoxPosition), Fz.updateVector3("vRefractionSize", zz.boundingBoxSize)
                  }
                }
                this.pointsCloud && Fz.updateFloat("pointSize", this.pointSize), Fz.updateColor4("vSpecularColor", this.specularColor, this.specularPower), Fz.updateColor3("vEmissiveColor", zz.EmissiveTextureEnabled ? this.emissiveColor : Mz.c.BlackReadOnly), Fz.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), nz.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), Fz.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              nz.texturesEnabled && (this._diffuseTexture && zz.DiffuseTextureEnabled && tz.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && zz.AmbientTextureEnabled && tz.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && zz.OpacityTextureEnabled && tz.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && zz.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? tz.setTexture("reflectionCubeSampler", this._reflectionTexture) : tz.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && zz.EmissiveTextureEnabled && tz.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && zz.LightmapTextureEnabled && tz.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && zz.SpecularTextureEnabled && tz.setTexture("specularSampler", this._specularTexture), this._bumpTexture && nz.uR().getCaps().standardDerivatives && zz.BumpTextureEnabled && tz.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && zz.RefractionTextureEnabled && (this._refractionTexture.isCube ? tz.setTexture("refractionCubeSampler", this._refractionTexture) : tz.setTexture("refraction2DSampler", this._refractionTexture))), this.XT().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(bz) && this.XT().depthPeelingRenderer.bind(tz), this._eventInfo.subMesh = Ez, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Xz.d)(tz, this, nz), this.bindEyePosition(tz)
            } else dz && (this._needToBindSceneUbo = !0);
            !pz && this.isFrozen && !dz || !nz.lightsEnabled || this._disableLighting || (0, sz.q)(nz, bz, tz, iz, this._maxSimultaneousLights), !pz && this.isFrozen || ((nz.fogEnabled && bz.applyFog && nz.fogMode !== lz.e.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || bz.receiveShadows || iz.PREPASS || iz.CLUSTLIGHT_BATCH) && this.bindView(tz), (0, sz.k)(nz, bz, tz), iz.NUM_MORPH_INFLUENCERS && (0, sz.w)(bz, tz), iz.BAKED_VERTEX_ANIMATION_TEXTURE && bz.bakedVertexAnimationManager?.bind(tz, iz.INSTANCES), this.useLogarithmicDepth && (0, sz.t)(iz, tz, nz), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(bz, this._activeEffect, Ez), Fz.update()
          }
          _canBindRunFollower(uz, bz, Ez, nz, iz) {
            const lz = uz.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === zz.prototype.isReadyForSubMesh && this.bindForSubMesh === zz.prototype.bindForSubMesh && this._mustRebind === Zz.b.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !bz._features.needToAlwaysBindUniformBuffers && !(lz && lz.enabled && lz.currentRTisSceneRT) && !Nz.d._Configurations[bz.currentRenderPassId] && !nz.materialDefines?.OBJECTSPACE_NORMALMAP && !Ez.skeleton && !iz._bonesComputationForcedToCPU
          }
          _bindRunFollower(zz, uz, bz, Ez) {
            this._activeEffect = Ez, uz.getMeshUniformBuffer().bindToEffect(Ez, "Mesh"), uz.transferToEffect(zz);
            const nz = this._uniformBuffer;
            nz.bindToEffect(Ez, "Material");
            const iz = this._scene.activeCamera;
            iz ? nz.updateFloat4("cameraInfo", iz.minZ, iz.maxZ, 0, 0) : nz.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const lz = this.textureRepetitionHexTilingParams;
            nz.updateFloat4("vTextureRepetitionHexTilingParams", lz[0], lz[1], lz[2], lz[3]), this._afterBind(uz, Ez, bz), nz.update()
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
          dispose(zz, uz) {
            uz && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(zz, uz)
          }
          clone(uz) {
            let bz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const nz = rz.e.Clone((() => new zz(uz, this.XT())), this, {
              cloneTexturesOnlyOnce: bz
            });
            return nz.name = uz, nz.id = uz, this.stencil.copyTo(nz.stencil), this._clonePlugins(nz, Ez), nz
          }
          static Parse(uz, bz, Ez) {
            const nz = rz.e.Parse((() => new zz(uz.name, bz)), uz, bz, Ez);
            return uz.stencil && nz.stencil.parse(uz.stencil, bz, Ez), dz.c._ParsePlugins(uz, nz, bz, Ez), nz
          }
          static get DiffuseTextureEnabled() {
            return Rz.d.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(zz) {
            Rz.d.DiffuseTextureEnabled = zz
          }
          static get DetailTextureEnabled() {
            return Rz.d.DetailTextureEnabled
          }
          static set DetailTextureEnabled(zz) {
            Rz.d.DetailTextureEnabled = zz
          }
          static get AmbientTextureEnabled() {
            return Rz.d.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(zz) {
            Rz.d.AmbientTextureEnabled = zz
          }
          static get OpacityTextureEnabled() {
            return Rz.d.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(zz) {
            Rz.d.OpacityTextureEnabled = zz
          }
          static get ReflectionTextureEnabled() {
            return Rz.d.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(zz) {
            Rz.d.ReflectionTextureEnabled = zz
          }
          static get EmissiveTextureEnabled() {
            return Rz.d.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(zz) {
            Rz.d.EmissiveTextureEnabled = zz
          }
          static get SpecularTextureEnabled() {
            return Rz.d.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(zz) {
            Rz.d.SpecularTextureEnabled = zz
          }
          static get BumpTextureEnabled() {
            return Rz.d.BumpTextureEnabled
          }
          static set BumpTextureEnabled(zz) {
            Rz.d.BumpTextureEnabled = zz
          }
          static get LightmapTextureEnabled() {
            return Rz.d.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(zz) {
            Rz.d.LightmapTextureEnabled = zz
          }
          static get RefractionTextureEnabled() {
            return Rz.d.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(zz) {
            Rz.d.RefractionTextureEnabled = zz
          }
          static get ColorGradingTextureEnabled() {
            return Rz.d.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(zz) {
            Rz.d.ColorGradingTextureEnabled = zz
          }
          static get FresnelEnabled() {
            return Rz.d.FresnelEnabled
          }
          static set FresnelEnabled(zz) {
            Rz.d.FresnelEnabled = zz
          }
        }, uz = new WeakMap, Oz = new WeakMap, Fz = new WeakMap, vz = new WeakMap, xz = new WeakMap, Jz = new WeakMap, Az = new WeakMap, Tz = new WeakMap, Pz = new WeakMap, Vz = new WeakMap, mz = new WeakMap, qz = new WeakMap, hz = new WeakMap, Uz = new WeakMap, cz = new WeakMap, gz = new WeakMap, Sz = new WeakMap, yz = new WeakMap, Dz = new WeakMap, Qz = new WeakMap, Wz = new WeakMap, ez = new WeakMap, jz = new WeakMap, Iz = new WeakMap, Bz = new WeakMap, Cz = new WeakMap, Yz = new WeakMap, kz = new WeakMap, zu = new WeakMap, uu = new WeakMap, bu = new WeakMap, Eu = new WeakMap, (() => {
          const uz = "function" === typeof Symbol && Symbol.metadata ? Object.create(xb[Symbol.metadata] ?? null) : void 0;
          nu = [(0, nz.B)("diffuseTexture")], iu = [(0, nz.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], lu = [(0, nz.B)("ambientTexture")], Mu = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], tu = [(0, nz.B)("opacityTexture")], Hu = [(0, nz.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], Ou = [(0, nz.B)("reflectionTexture")], pu = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], du = [(0, nz.B)("emissiveTexture")], Fu = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], Zu = [(0, nz.B)("specularTexture")], Ru = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], Ku = [(0, nz.B)("bumpTexture")], wu = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], Xu = [(0, nz.B)("lightmapTexture")], fu = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], su = [(0, nz.B)("refractionTexture")], ru = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], ou = [(0, nz.q)("ambient")], Nu = [(0, nz.q)("diffuse")], vu = [(0, nz.q)("specular")], xu = [(0, nz.q)("emissive")], Ju = [(0, nz.G)()], Au = [(0, nz.G)("useAlphaFromDiffuseTexture")], Tu = [() => ({
            init(zz) {
              return void 0 === zz && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = zz), zz
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(zz) {
              this._useAlphaFromDiffuseTexture = zz
            }
          })], Lu = [(0, nz.G)("useEmissiveAsIllumination")], Pu = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], Gu = [(0, nz.G)("linkEmissiveWithDiffuse")], au = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], Vu = [(0, nz.G)("useSpecularOverAlpha")], mu = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], qu = [(0, nz.G)("useReflectionOverAlpha")], hu = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], Uu = [(0, nz.G)("disableLighting")], cu = [(0, nz.i)("_markAllSubMeshesAsLightsDirty")], gu = [(0, nz.G)("useObjectSpaceNormalMap")], Su = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], yu = [(0, nz.G)("useParallax")], Du = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], Qu = [(0, nz.G)("useParallaxOcclusion")], Wu = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], eu = [(0, nz.G)()], ju = [(0, nz.G)("roughness")], Iu = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], Bu = [(0, nz.G)()], Cu = [(0, nz.G)()], Yu = [(0, nz.G)()], ku = [(0, nz.G)("useLightmapAsShadowmap")], zb = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], ub = [(0, nz.t)("diffuseFresnelParameters")], bb = [(0, nz.i)("_markAllSubMeshesAsFresnelDirty")], Eb = [(0, nz.t)("opacityFresnelParameters")], nb = [(0, nz.i)("_markAllSubMeshesAsFresnelAndMiscDirty")], ib = [(0, nz.t)("reflectionFresnelParameters")], lb = [(0, nz.i)("_markAllSubMeshesAsFresnelDirty")], Mb = [(0, nz.t)("refractionFresnelParameters")], tb = [(0, nz.i)("_markAllSubMeshesAsFresnelDirty")], Hb = [(0, nz.t)("emissiveFresnelParameters")], Ob = [(0, nz.i)("_markAllSubMeshesAsFresnelDirty")], pb = [(0, nz.G)("useReflectionFresnelFromSpecular")], db = [(0, nz.i)("_markAllSubMeshesAsFresnelDirty")], Fb = [(0, nz.G)("useGlossinessFromSpecularMapAlpha")], Zb = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], Rb = [(0, nz.G)("maxSimultaneousLights")], Kb = [(0, nz.i)("_markAllSubMeshesAsLightsDirty")], wb = [(0, nz.G)("invertNormalMapX")], Xb = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], fb = [(0, nz.G)("invertNormalMapY")], sb = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], rb = [(0, nz.G)("twoSidedLighting")], ob = [(0, nz.i)("_markAllSubMeshesAsTexturesDirty")], Nb = [(0, nz.G)("applyDecalMapAfterDetailMap")], vb = [(0, nz.i)("_markAllSubMeshesAsMiscDirty")], (0, Ez.h)(zz, null, iu, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "diffuseTexture" in zz,
              get: zz => zz.diffuseTexture,
              set: (zz, uz) => {
                zz.diffuseTexture = uz
              }
            },
            metadata: uz
          }, Tb, Lb), (0, Ez.h)(zz, null, Mu, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "ambientTexture" in zz,
              get: zz => zz.ambientTexture,
              set: (zz, uz) => {
                zz.ambientTexture = uz
              }
            },
            metadata: uz
          }, ab, Vb), (0, Ez.h)(zz, null, Hu, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "opacityTexture" in zz,
              get: zz => zz.opacityTexture,
              set: (zz, uz) => {
                zz.opacityTexture = uz
              }
            },
            metadata: uz
          }, hb, Ub), (0, Ez.h)(zz, null, pu, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "reflectionTexture" in zz,
              get: zz => zz.reflectionTexture,
              set: (zz, uz) => {
                zz.reflectionTexture = uz
              }
            },
            metadata: uz
          }, Sb, yb), (0, Ez.h)(zz, null, Fu, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "emissiveTexture" in zz,
              get: zz => zz.emissiveTexture,
              set: (zz, uz) => {
                zz.emissiveTexture = uz
              }
            },
            metadata: uz
          }, Wb, eb), (0, Ez.h)(zz, null, Ru, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularTexture" in zz,
              get: zz => zz.specularTexture,
              set: (zz, uz) => {
                zz.specularTexture = uz
              }
            },
            metadata: uz
          }, Bb, Cb), (0, Ez.h)(zz, null, wu, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "bumpTexture" in zz,
              get: zz => zz.bumpTexture,
              set: (zz, uz) => {
                zz.bumpTexture = uz
              }
            },
            metadata: uz
          }, zE, uE), (0, Ez.h)(zz, null, fu, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "lightmapTexture" in zz,
              get: zz => zz.lightmapTexture,
              set: (zz, uz) => {
                zz.lightmapTexture = uz
              }
            },
            metadata: uz
          }, nE, iE), (0, Ez.h)(zz, null, ru, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "refractionTexture" in zz,
              get: zz => zz.refractionTexture,
              set: (zz, uz) => {
                zz.refractionTexture = uz
              }
            },
            metadata: uz
          }, tE, HE), (0, Ez.h)(zz, null, Tu, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "useAlphaFromDiffuseTexture" in zz,
              get: zz => zz.useAlphaFromDiffuseTexture,
              set: (zz, uz) => {
                zz.useAlphaFromDiffuseTexture = uz
              }
            },
            metadata: uz
          }, oE, NE), (0, Ez.h)(zz, null, Pu, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: zz => "useEmissiveAsIllumination" in zz,
              get: zz => zz.useEmissiveAsIllumination,
              set: (zz, uz) => {
                zz.useEmissiveAsIllumination = uz
              }
            },
            metadata: uz
          }, JE, AE), (0, Ez.h)(zz, null, au, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: zz => "linkEmissiveWithDiffuse" in zz,
              get: zz => zz.linkEmissiveWithDiffuse,
              set: (zz, uz) => {
                zz.linkEmissiveWithDiffuse = uz
              }
            },
            metadata: uz
          }, PE, GE), (0, Ez.h)(zz, null, mu, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: zz => "useSpecularOverAlpha" in zz,
              get: zz => zz.useSpecularOverAlpha,
              set: (zz, uz) => {
                zz.useSpecularOverAlpha = uz
              }
            },
            metadata: uz
          }, mE, qE), (0, Ez.h)(zz, null, hu, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: zz => "useReflectionOverAlpha" in zz,
              get: zz => zz.useReflectionOverAlpha,
              set: (zz, uz) => {
                zz.useReflectionOverAlpha = uz
              }
            },
            metadata: uz
          }, cE, gE), (0, Ez.h)(zz, null, cu, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: zz => "disableLighting" in zz,
              get: zz => zz.disableLighting,
              set: (zz, uz) => {
                zz.disableLighting = uz
              }
            },
            metadata: uz
          }, DE, QE), (0, Ez.h)(zz, null, Su, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: zz => "useObjectSpaceNormalMap" in zz,
              get: zz => zz.useObjectSpaceNormalMap,
              set: (zz, uz) => {
                zz.useObjectSpaceNormalMap = uz
              }
            },
            metadata: uz
          }, jE, IE), (0, Ez.h)(zz, null, Du, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: zz => "useParallax" in zz,
              get: zz => zz.useParallax,
              set: (zz, uz) => {
                zz.useParallax = uz
              }
            },
            metadata: uz
          }, YE, kE), (0, Ez.h)(zz, null, Wu, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: zz => "useParallaxOcclusion" in zz,
              get: zz => zz.useParallaxOcclusion,
              set: (zz, uz) => {
                zz.useParallaxOcclusion = uz
              }
            },
            metadata: uz
          }, bn, En), (0, Ez.h)(zz, null, Iu, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: zz => "roughness" in zz,
              get: zz => zz.roughness,
              set: (zz, uz) => {
                zz.roughness = uz
              }
            },
            metadata: uz
          }, On, pn), (0, Ez.h)(zz, null, zb, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: zz => "useLightmapAsShadowmap" in zz,
              get: zz => zz.useLightmapAsShadowmap,
              set: (zz, uz) => {
                zz.useLightmapAsShadowmap = uz
              }
            },
            metadata: uz
          }, sn, rn), (0, Ez.h)(zz, null, bb, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "diffuseFresnelParameters" in zz,
              get: zz => zz.diffuseFresnelParameters,
              set: (zz, uz) => {
                zz.diffuseFresnelParameters = uz
              }
            },
            metadata: uz
          }, xn, Jn), (0, Ez.h)(zz, null, nb, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "opacityFresnelParameters" in zz,
              get: zz => zz.opacityFresnelParameters,
              set: (zz, uz) => {
                zz.opacityFresnelParameters = uz
              }
            },
            metadata: uz
          }, Ln, Pn), (0, Ez.h)(zz, null, lb, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "reflectionFresnelParameters" in zz,
              get: zz => zz.reflectionFresnelParameters,
              set: (zz, uz) => {
                zz.reflectionFresnelParameters = uz
              }
            },
            metadata: uz
          }, Vn, mn), (0, Ez.h)(zz, null, tb, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "refractionFresnelParameters" in zz,
              get: zz => zz.refractionFresnelParameters,
              set: (zz, uz) => {
                zz.refractionFresnelParameters = uz
              }
            },
            metadata: uz
          }, Un, cn), (0, Ez.h)(zz, null, Ob, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "emissiveFresnelParameters" in zz,
              get: zz => zz.emissiveFresnelParameters,
              set: (zz, uz) => {
                zz.emissiveFresnelParameters = uz
              }
            },
            metadata: uz
          }, yn, Dn), (0, Ez.h)(zz, null, db, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: zz => "useReflectionFresnelFromSpecular" in zz,
              get: zz => zz.useReflectionFresnelFromSpecular,
              set: (zz, uz) => {
                zz.useReflectionFresnelFromSpecular = uz
              }
            },
            metadata: uz
          }, en, jn), (0, Ez.h)(zz, null, Zb, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: zz => "useGlossinessFromSpecularMapAlpha" in zz,
              get: zz => zz.useGlossinessFromSpecularMapAlpha,
              set: (zz, uz) => {
                zz.useGlossinessFromSpecularMapAlpha = uz
              }
            },
            metadata: uz
          }, Cn, Yn), (0, Ez.h)(zz, null, Kb, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: zz => "maxSimultaneousLights" in zz,
              get: zz => zz.maxSimultaneousLights,
              set: (zz, uz) => {
                zz.maxSimultaneousLights = uz
              }
            },
            metadata: uz
          }, ui, bi), (0, Ez.h)(zz, null, Xb, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: zz => "invertNormalMapX" in zz,
              get: zz => zz.invertNormalMapX,
              set: (zz, uz) => {
                zz.invertNormalMapX = uz
              }
            },
            metadata: uz
          }, ii, li), (0, Ez.h)(zz, null, sb, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: zz => "invertNormalMapY" in zz,
              get: zz => zz.invertNormalMapY,
              set: (zz, uz) => {
                zz.invertNormalMapY = uz
              }
            },
            metadata: uz
          }, Hi, Oi), (0, Ez.h)(zz, null, ob, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: zz => "twoSidedLighting" in zz,
              get: zz => zz.twoSidedLighting,
              set: (zz, uz) => {
                zz.twoSidedLighting = uz
              }
            },
            metadata: uz
          }, Zi, Ri), (0, Ez.h)(zz, null, vb, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: zz => "applyDecalMapAfterDetailMap" in zz,
              get: zz => zz.applyDecalMapAfterDetailMap,
              set: (zz, uz) => {
                zz.applyDecalMapAfterDetailMap = uz
              }
            },
            metadata: uz
          }, Xi, fi), (0, Ez.h)(null, null, nu, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_diffuseTexture" in zz,
              get: zz => zz._diffuseTexture,
              set: (zz, uz) => {
                zz._diffuseTexture = uz
              }
            },
            metadata: uz
          }, Jb, Ab), (0, Ez.h)(null, null, lu, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_ambientTexture" in zz,
              get: zz => zz._ambientTexture,
              set: (zz, uz) => {
                zz._ambientTexture = uz
              }
            },
            metadata: uz
          }, Pb, Gb), (0, Ez.h)(null, null, tu, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_opacityTexture" in zz,
              get: zz => zz._opacityTexture,
              set: (zz, uz) => {
                zz._opacityTexture = uz
              }
            },
            metadata: uz
          }, mb, qb), (0, Ez.h)(null, null, Ou, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_reflectionTexture" in zz,
              get: zz => zz._reflectionTexture,
              set: (zz, uz) => {
                zz._reflectionTexture = uz
              }
            },
            metadata: uz
          }, cb, gb), (0, Ez.h)(null, null, du, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_emissiveTexture" in zz,
              get: zz => zz._emissiveTexture,
              set: (zz, uz) => {
                zz._emissiveTexture = uz
              }
            },
            metadata: uz
          }, Db, Qb), (0, Ez.h)(null, null, Zu, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_specularTexture" in zz,
              get: zz => zz._specularTexture,
              set: (zz, uz) => {
                zz._specularTexture = uz
              }
            },
            metadata: uz
          }, jb, Ib), (0, Ez.h)(null, null, Ku, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_bumpTexture" in zz,
              get: zz => zz._bumpTexture,
              set: (zz, uz) => {
                zz._bumpTexture = uz
              }
            },
            metadata: uz
          }, Yb, kb), (0, Ez.h)(null, null, Xu, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_lightmapTexture" in zz,
              get: zz => zz._lightmapTexture,
              set: (zz, uz) => {
                zz._lightmapTexture = uz
              }
            },
            metadata: uz
          }, bE, EE), (0, Ez.h)(null, null, su, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_refractionTexture" in zz,
              get: zz => zz._refractionTexture,
              set: (zz, uz) => {
                zz._refractionTexture = uz
              }
            },
            metadata: uz
          }, lE, ME), (0, Ez.h)(null, null, ou, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "ambientColor" in zz,
              get: zz => zz.ambientColor,
              set: (zz, uz) => {
                zz.ambientColor = uz
              }
            },
            metadata: uz
          }, OE, pE), (0, Ez.h)(null, null, Nu, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "diffuseColor" in zz,
              get: zz => zz.diffuseColor,
              set: (zz, uz) => {
                zz.diffuseColor = uz
              }
            },
            metadata: uz
          }, dE, FE), (0, Ez.h)(null, null, vu, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularColor" in zz,
              get: zz => zz.specularColor,
              set: (zz, uz) => {
                zz.specularColor = uz
              }
            },
            metadata: uz
          }, ZE, RE), (0, Ez.h)(null, null, xu, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "emissiveColor" in zz,
              get: zz => zz.emissiveColor,
              set: (zz, uz) => {
                zz.emissiveColor = uz
              }
            },
            metadata: uz
          }, KE, wE), (0, Ez.h)(null, null, Ju, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: zz => "specularPower" in zz,
              get: zz => zz.specularPower,
              set: (zz, uz) => {
                zz.specularPower = uz
              }
            },
            metadata: uz
          }, XE, fE), (0, Ez.h)(null, null, Au, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useAlphaFromDiffuseTexture" in zz,
              get: zz => zz._useAlphaFromDiffuseTexture,
              set: (zz, uz) => {
                zz._useAlphaFromDiffuseTexture = uz
              }
            },
            metadata: uz
          }, sE, rE), (0, Ez.h)(null, null, Lu, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useEmissiveAsIllumination" in zz,
              get: zz => zz._useEmissiveAsIllumination,
              set: (zz, uz) => {
                zz._useEmissiveAsIllumination = uz
              }
            },
            metadata: uz
          }, vE, xE), (0, Ez.h)(null, null, Gu, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: zz => "_linkEmissiveWithDiffuse" in zz,
              get: zz => zz._linkEmissiveWithDiffuse,
              set: (zz, uz) => {
                zz._linkEmissiveWithDiffuse = uz
              }
            },
            metadata: uz
          }, TE, LE), (0, Ez.h)(null, null, Vu, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useSpecularOverAlpha" in zz,
              get: zz => zz._useSpecularOverAlpha,
              set: (zz, uz) => {
                zz._useSpecularOverAlpha = uz
              }
            },
            metadata: uz
          }, aE, VE), (0, Ez.h)(null, null, qu, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useReflectionOverAlpha" in zz,
              get: zz => zz._useReflectionOverAlpha,
              set: (zz, uz) => {
                zz._useReflectionOverAlpha = uz
              }
            },
            metadata: uz
          }, hE, UE), (0, Ez.h)(null, null, Uu, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: zz => "_disableLighting" in zz,
              get: zz => zz._disableLighting,
              set: (zz, uz) => {
                zz._disableLighting = uz
              }
            },
            metadata: uz
          }, SE, yE), (0, Ez.h)(null, null, gu, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useObjectSpaceNormalMap" in zz,
              get: zz => zz._useObjectSpaceNormalMap,
              set: (zz, uz) => {
                zz._useObjectSpaceNormalMap = uz
              }
            },
            metadata: uz
          }, WE, eE), (0, Ez.h)(null, null, yu, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useParallax" in zz,
              get: zz => zz._useParallax,
              set: (zz, uz) => {
                zz._useParallax = uz
              }
            },
            metadata: uz
          }, BE, CE), (0, Ez.h)(null, null, Qu, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useParallaxOcclusion" in zz,
              get: zz => zz._useParallaxOcclusion,
              set: (zz, uz) => {
                zz._useParallaxOcclusion = uz
              }
            },
            metadata: uz
          }, zn, un), (0, Ez.h)(null, null, eu, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: zz => "parallaxScaleBias" in zz,
              get: zz => zz.parallaxScaleBias,
              set: (zz, uz) => {
                zz.parallaxScaleBias = uz
              }
            },
            metadata: uz
          }, nn, Mn), (0, Ez.h)(null, null, ju, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: zz => "_roughness" in zz,
              get: zz => zz._roughness,
              set: (zz, uz) => {
                zz._roughness = uz
              }
            },
            metadata: uz
          }, tn, Hn), (0, Ez.h)(null, null, Bu, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: zz => "indexOfRefraction" in zz,
              get: zz => zz.indexOfRefraction,
              set: (zz, uz) => {
                zz.indexOfRefraction = uz
              }
            },
            metadata: uz
          }, dn, Fn), (0, Ez.h)(null, null, Cu, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: zz => "invertRefractionY" in zz,
              get: zz => zz.invertRefractionY,
              set: (zz, uz) => {
                zz.invertRefractionY = uz
              }
            },
            metadata: uz
          }, Zn, Rn), (0, Ez.h)(null, null, Yu, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: zz => "alphaCutOff" in zz,
              get: zz => zz.alphaCutOff,
              set: (zz, uz) => {
                zz.alphaCutOff = uz
              }
            },
            metadata: uz
          }, Kn, wn), (0, Ez.h)(null, null, ku, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useLightmapAsShadowmap" in zz,
              get: zz => zz._useLightmapAsShadowmap,
              set: (zz, uz) => {
                zz._useLightmapAsShadowmap = uz
              }
            },
            metadata: uz
          }, Xn, fn), (0, Ez.h)(null, null, ub, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "_diffuseFresnelParameters" in zz,
              get: zz => zz._diffuseFresnelParameters,
              set: (zz, uz) => {
                zz._diffuseFresnelParameters = uz
              }
            },
            metadata: uz
          }, Nn, vn), (0, Ez.h)(null, null, Eb, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "_opacityFresnelParameters" in zz,
              get: zz => zz._opacityFresnelParameters,
              set: (zz, uz) => {
                zz._opacityFresnelParameters = uz
              }
            },
            metadata: uz
          }, An, Tn), (0, Ez.h)(null, null, ib, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "_reflectionFresnelParameters" in zz,
              get: zz => zz._reflectionFresnelParameters,
              set: (zz, uz) => {
                zz._reflectionFresnelParameters = uz
              }
            },
            metadata: uz
          }, Gn, an), (0, Ez.h)(null, null, Mb, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "_refractionFresnelParameters" in zz,
              get: zz => zz._refractionFresnelParameters,
              set: (zz, uz) => {
                zz._refractionFresnelParameters = uz
              }
            },
            metadata: uz
          }, qn, hn), (0, Ez.h)(null, null, Hb, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: zz => "_emissiveFresnelParameters" in zz,
              get: zz => zz._emissiveFresnelParameters,
              set: (zz, uz) => {
                zz._emissiveFresnelParameters = uz
              }
            },
            metadata: uz
          }, gn, Sn), (0, Ez.h)(null, null, pb, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useReflectionFresnelFromSpecular" in zz,
              get: zz => zz._useReflectionFresnelFromSpecular,
              set: (zz, uz) => {
                zz._useReflectionFresnelFromSpecular = uz
              }
            },
            metadata: uz
          }, Qn, Wn), (0, Ez.h)(null, null, Fb, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: zz => "_useGlossinessFromSpecularMapAlpha" in zz,
              get: zz => zz._useGlossinessFromSpecularMapAlpha,
              set: (zz, uz) => {
                zz._useGlossinessFromSpecularMapAlpha = uz
              }
            },
            metadata: uz
          }, In, Bn), (0, Ez.h)(null, null, Rb, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: zz => "_maxSimultaneousLights" in zz,
              get: zz => zz._maxSimultaneousLights,
              set: (zz, uz) => {
                zz._maxSimultaneousLights = uz
              }
            },
            metadata: uz
          }, kn, zi), (0, Ez.h)(null, null, wb, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: zz => "_invertNormalMapX" in zz,
              get: zz => zz._invertNormalMapX,
              set: (zz, uz) => {
                zz._invertNormalMapX = uz
              }
            },
            metadata: uz
          }, Ei, ni), (0, Ez.h)(null, null, fb, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: zz => "_invertNormalMapY" in zz,
              get: zz => zz._invertNormalMapY,
              set: (zz, uz) => {
                zz._invertNormalMapY = uz
              }
            },
            metadata: uz
          }, Mi, ti), (0, Ez.h)(null, null, rb, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: zz => "_twoSidedLighting" in zz,
              get: zz => zz._twoSidedLighting,
              set: (zz, uz) => {
                zz._twoSidedLighting = uz
              }
            },
            metadata: uz
          }, di, Fi), (0, Ez.h)(null, null, Nb, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: zz => "_applyDecalMapAfterDetailMap" in zz,
              get: zz => zz._applyDecalMapAfterDetailMap,
              set: (zz, uz) => {
                zz._applyDecalMapAfterDetailMap = uz
              }
            },
            metadata: uz
          }, Ki, wi), uz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uz
          })
        })(), zz.ForceGLSL = !1, zz._ShaderLoader = new oz.c((() => [Promise.all([bz.e(307), bz.e(306)]).then((() => bz(41081))), Promise.all([bz.e(312), bz.e(308), bz.e(321), bz.e(311)]).then((() => bz(41268)))]), (() => [Promise.all([bz.e(328), bz.e(323)]).then((() => bz(41415))), Promise.all([bz.e(329), bz.e(339), bz.e(325)]).then((() => bz(41612)))])), zz
      })(),
      mz = !1;

    function qz() {
      mz || (mz = !0, (0, pz.d)(), (0, Az.c)("BABYLON.StandardMaterial", Vz), lz.e.DefaultMaterialFactory = zz => new Vz("default material", zz))
    }
    Object.getOwnPropertyDescriptor(Vz.prototype, "decalMap") || Object.defineProperty(Vz.prototype, "decalMap", (0, Tz.f)("StandardMaterial", "decalMap"))
  },
  39558: (zz, uz, bz) => {
    function Ez(zz) {
      return class extends zz {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    bz.d(uz, {
      d: () => Ez
    })
  },
  39548: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez
    });
    class Ez {
      constructor(zz, uz) {
        this._webGL = {
          load: zz,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: uz,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(zz) {
        const uz = 1 === zz ? this._webGPU : this._webGL;
        return uz.loaded ? void 0 : async () => {
          await this._loadAsync(uz)
        }
      }
      async _loadAsync(zz) {
        if (zz.loaded) return;
        let uz = zz.loadPromise;
        const bz = null === uz;
        bz && (uz = Promise.all(zz.load()), zz.loadPromise = uz);
        let Ez = !1;
        try {
          await uz, Ez = !0
        } finally {
          bz && this._completeLoad(zz, Ez)
        }
      }
      _completeLoad(zz, uz) {
        zz.loaded = uz, zz.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);