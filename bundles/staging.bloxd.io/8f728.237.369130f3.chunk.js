export const id = 237;
export const ids = [237];
export const modules = {
  38410: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic
    });
    var Vc = nc(38052);

    function Ic(cB) {
      return class extends cB {
        constructor() {
          super(...arguments);
          const cB = new.target;
          if (!cB[Symbol.metadata]) {
            const Bc = Object.getPrototypeOf(cB)?.[Symbol.metadata];
            cB[Symbol.metadata] = Bc ? Object.create(Bc) : {}
          }
          const Bc = (0, Vc.d)(cB[Symbol.metadata]);
          Bc._imageProcessingConfiguration || (Bc._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(cB) {
          this._attachImageProcessingConfiguration(cB), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(cB) {
          cB !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !cB && this.knc ? this._imageProcessingConfiguration = this.knc().imageProcessingConfiguration : cB && (this._imageProcessingConfiguration = cB), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(cB) {
          this.imageProcessingConfiguration.colorCurvesEnabled = cB
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(cB) {
          this.imageProcessingConfiguration.colorGradingEnabled = cB
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(cB) {
          this._imageProcessingConfiguration.toneMappingEnabled = cB
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(cB) {
          this._imageProcessingConfiguration.exposure = cB
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(cB) {
          this._imageProcessingConfiguration.contrast = cB
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(cB) {
          this._imageProcessingConfiguration.colorGradingTexture = cB
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(cB) {
          this._imageProcessingConfiguration.colorCurves = cB
        }
      }
    }
  },
  38310: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      g: () => Ic
    });
    var Vc = nc(38317);

    function Ic(cB) {
      return class extends cB {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class rB extends Vc.e {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  38377: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Oc
    });
    var Vc = nc(38035),
      Ic = nc(38326),
      rB = nc(38043),
      uc = nc(38364),
      sc = nc(38317),
      Mc = nc(38379),
      Pc = nc(38358);
    class qB extends sc.e {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let Oc = (() => {
      var cB, Bc, nc, sc;
      let Oc, Tc, fc, mB, ec, tB, Sc = Mc.c,
        yB = [],
        zB = [],
        pc = [],
        hc = [],
        aB = [],
        lc = [],
        Yc = [],
        Lc = [],
        gB = [],
        Uc = [],
        bB = [],
        Zc = [];
      return cB = class extends Sc {
        get texture() {
          return (0, Vc.c)(this, Bc, "f")
        }
        set texture(cB) {
          (0, Vc.f)(this, Bc, cB, "f")
        }
        get normalBlendMethod() {
          return (0, Vc.c)(this, nc, "f")
        }
        set normalBlendMethod(cB) {
          (0, Vc.f)(this, nc, cB, "f")
        }
        get isEnabled() {
          return (0, Vc.c)(this, sc, "f")
        }
        set isEnabled(cB) {
          (0, Vc.f)(this, sc, cB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(cB) {
          let rB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(cB, "DetailMap", 140, new qB, rB), this._texture = null, Bc.set(this, (0, Vc.k)(this, yB, void 0)), this.diffuseBlendLevel = ((0, Vc.k)(this, zB), (0, Vc.k)(this, pc, 1)), this.roughnessBlendLevel = ((0, Vc.k)(this, hc), (0, Vc.k)(this, aB, 1)), this.bumpLevel = ((0, Vc.k)(this, lc), (0, Vc.k)(this, Yc, 1)), this._normalBlendMethod = ((0, Vc.k)(this, Lc), Ic.c.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), nc.set(this, (0, Vc.k)(this, gB, void 0)), this._isEnabled = ((0, Vc.k)(this, Uc), !1), sc.set(this, (0, Vc.k)(this, bB, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Vc.k)(this, Zc), this._internalMarkAllSubMeshesAsTexturesDirty = cB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(cB, Bc, nc) {
          return !this._isEnabled || !(cB._areTexturesDirty && Bc.texturesEnabled && nc.getCaps().standardDerivatives && this._texture && uc.c.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(cB, Bc) {
          if (this._isEnabled) {
            cB.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const nc = Bc.RV();
            cB._areTexturesDirty && (nc.getCaps().standardDerivatives && this._texture && uc.c.DetailTextureEnabled && this._isEnabled ? ((0, Pc.$)(this._texture, cB, "DETAIL"), cB.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : cB.DETAIL = !1)
          } else cB.DETAIL = !1
        }
        bindForSubMesh(cB, Bc) {
          if (!this._isEnabled) return;
          const nc = this._material.isFrozen;
          cB.useUbo && nc && cB.isSync || this._texture && uc.c.DetailTextureEnabled && (cB.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, Pc.B)(this._texture, cB, "detail")), Bc.texturesEnabled && this._texture && uc.c.DetailTextureEnabled && cB.setTexture("detailSampler", this._texture)
        }
        hasTexture(cB) {
          return this._texture === cB
        }
        getActiveTextures(cB) {
          this._texture && cB.push(this._texture)
        }
        getAnimatables(cB) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && cB.push(this._texture)
        }
        dispose(cB) {
          cB && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(cB) {
          cB.push("detailSampler")
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
      }, Bc = new WeakMap, nc = new WeakMap, sc = new WeakMap, (() => {
        const Bc = "function" === typeof Symbol && Symbol.metadata ? Object.create(Sc[Symbol.metadata] ?? null) : void 0;
        Oc = [(0, rB.F)("detailTexture"), (0, rB.d)("_markAllSubMeshesAsTexturesDirty")], Tc = [(0, rB.M)()], fc = [(0, rB.M)()], mB = [(0, rB.M)()], ec = [(0, rB.M)(), (0, rB.d)("_markAllSubMeshesAsTexturesDirty")], tB = [(0, rB.M)(), (0, rB.d)("_markAllSubMeshesAsTexturesDirty")], (0, Vc.g)(cB, null, Oc, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: cB => "texture" in cB,
            get: cB => cB.texture,
            set: (cB, Bc) => {
              cB.texture = Bc
            }
          },
          metadata: Bc
        }, yB, zB), (0, Vc.g)(cB, null, ec, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: cB => "normalBlendMethod" in cB,
            get: cB => cB.normalBlendMethod,
            set: (cB, Bc) => {
              cB.normalBlendMethod = Bc
            }
          },
          metadata: Bc
        }, gB, Uc), (0, Vc.g)(cB, null, tB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: cB => "isEnabled" in cB,
            get: cB => cB.isEnabled,
            set: (cB, Bc) => {
              cB.isEnabled = Bc
            }
          },
          metadata: Bc
        }, bB, Zc), (0, Vc.g)(null, null, Tc, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: cB => "diffuseBlendLevel" in cB,
            get: cB => cB.diffuseBlendLevel,
            set: (cB, Bc) => {
              cB.diffuseBlendLevel = Bc
            }
          },
          metadata: Bc
        }, pc, hc), (0, Vc.g)(null, null, fc, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: cB => "roughnessBlendLevel" in cB,
            get: cB => cB.roughnessBlendLevel,
            set: (cB, Bc) => {
              cB.roughnessBlendLevel = Bc
            }
          },
          metadata: Bc
        }, aB, lc), (0, Vc.g)(null, null, mB, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: cB => "bumpLevel" in cB,
            get: cB => cB.bumpLevel,
            set: (cB, Bc) => {
              cB.bumpLevel = Bc
            }
          },
          metadata: Bc
        }, Yc, Lc), Bc && Object.defineProperty(cB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Bc
        })
      })(), cB
    })()
  },
  38317: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc
    });
    class Vc {
      constructor(cB) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = cB, cB)
          for (const Bc in cB) Object.prototype.hasOwnProperty.call(cB, Bc) && this._setDefaultValue(Bc)
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
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || cB, this._isDirty = !0
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
        for (const cB of Object.keys(this)) "_" !== cB[0] && this._keys.push(cB);
        if (this._externalProperties)
          for (const cB in this._externalProperties) - 1 === this._keys.indexOf(cB) && this._keys.push(cB)
      }
      isEqual(cB) {
        if (this._keys.length !== cB._keys.length) return !1;
        for (let Bc = 0; Bc < this._keys.length; Bc++) {
          const nc = this._keys[Bc];
          if (this[nc] !== cB[nc]) return !1
        }
        return !0
      }
      cloneTo(cB) {
        this._keys.length !== cB._keys.length && (cB._keys = this._keys.slice(0));
        for (let Bc = 0; Bc < this._keys.length; Bc++) {
          const nc = this._keys[Bc];
          cB[nc] = this[nc]
        }
      }
      reset() {
        for (const cB of this._keys) this._setDefaultValue(cB)
      }
      _setDefaultValue(cB) {
        const Bc = this._externalProperties?.[cB]?.type ?? typeof this[cB],
          nc = this._externalProperties?.[cB]?.default;
        switch (Bc) {
          case "number":
            this[cB] = nc ?? 0;
            break;
          case "string":
            this[cB] = nc ?? "";
            break;
          default:
            this[cB] = nc ?? !1
        }
      }
      toString() {
        let cB = "";
        for (let Bc = 0; Bc < this._keys.length; Bc++) {
          const nc = this._keys[Bc],
            Vc = this[nc];
          switch (typeof Vc) {
            case "number":
            case "string":
              cB += "#define " + nc + " " + Vc + "\n";
              break;
            default:
              Vc && (cB += "#define " + nc + "\n")
          }
        }
        return cB
      }
    }
  },
  38400: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => sc,
      f: () => uc,
      h: () => rB
    });
    var Vc, Ic = nc(35756);

    function rB(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const Vc = Bc(cB);
      if (!Number.isInteger(Vc) || Vc < 0 || Vc > nc) throw new Error(`Invalid geometry object ID ${Vc} for mesh "${cB.name}". Object IDs must be integers between 0 and 0x${nc.toString(16).toUpperCase()}.`);
      return Vc
    }

    function uc(cB, Bc) {
      const nc = Bc(cB);
      if (!Number.isInteger(nc) || nc < 0 || nc > 255 || 0 !== nc && 0 === (63 & nc)) throw new Error(`Invalid geometry mesh-blending tag ${nc} for mesh "${cB.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return nc
    }! function(cB) {
      cB[cB.Zero = 0] = "Zero", cB[cB.One = 1] = "One", cB[cB.MaxViewZ = 2] = "MaxViewZ", cB[cB.NoClear = 3] = "NoClear"
    }(Vc || (Vc = {}));
    class sc {
      static CreateConfiguration(cB) {
        return sc._Configurations[cB] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: Ic.d.Zero(),
          currentViewProjection: Ic.d.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, sc._Configurations[cB]
      }
      static DeleteConfiguration(cB) {
        delete sc._Configurations[cB]
      }
      static GetConfiguration(cB) {
        return sc._Configurations[cB]
      }
      static _PrepareConfiguration(cB, Bc, nc) {
        const Vc = sc._Configurations[cB];
        Vc._attachments = Bc, Vc._colorAttachments = nc, Vc._mrtCount = Bc.length;
        let Ic = "#define PREPASS\n";
        for (const rB of sc.GeometryTextureDescriptions) {
          const cB = Vc.defines[rB.defineIndex];
          void 0 !== cB && (Ic += `#define ${rB.define}\n#define ${rB.defineIndex} ${cB}\n`)
        }
        Vc.objectIdIsRedFormat && (Ic += "#define PREPASS_OBJECT_ID_R8\n"), Vc._defines = Ic + `#define SCENE_MRT_COUNT ${Bc.length}\n`
      }
      static _PrepareStringDefines(cB, Bc) {
        const nc = sc._Configurations[cB];
        return !!nc?._defines && (Bc.push(nc._defines), !0)
      }
      static _BindAttachmentsForEffect(cB, Bc) {
        const nc = sc._Configurations[cB.currentRenderPassId];
        return !nc?._attachments || (cB.bindAttachments(Bc._multiTarget ? nc._attachments : nc._colorAttachments), Bc._multiTarget || void 0 !== nc.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(cB) {
        const Bc = sc._Configurations[cB.currentRenderPassId];
        Bc?._colorAttachments && cB.bindAttachments(Bc._colorAttachments)
      }
      static _BindColorAttachments(cB) {
        const Bc = sc._Configurations[cB.currentRenderPassId];
        return !Bc?._colorAttachments || (cB.bindAttachments(Bc._colorAttachments), void 0 !== Bc.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(cB) {
        const Bc = sc._Configurations[cB.currentRenderPassId];
        return !Bc?._colorAttachments || void 0 !== Bc.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(cB, Bc) {
        const nc = sc._Configurations[cB.currentRenderPassId];
        if (!nc) return;
        const Vc = cB.getAlphaMode(),
          Ic = void 0 === nc.defines.PREPASS_COLOR_INDEX || 2 === Vc || 1 === Vc || 17 === Vc;
        Bc.setFloat("geometryZeroAlphaDiscard", Ic ? 1 : 0)
      }
      static AddUniformsAndSamplers(cB, Bc) {
        cB.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(cB, Bc) {
        for (const nc of Bc)
          if (nc.rD)
            for (const Bc of nc.rD) Bc._removeDrawWrapper(cB)
      }
      static PrepareDefines(cB, Bc, nc) {
        if (!nc._arePrePassDirty) return;
        const Vc = sc._Configurations[cB];
        if (!Vc) return;
        nc.PREPASS = !0;
        let Ic = 0;
        for (let rB = 0; rB < sc.GeometryTextureDescriptions.length; rB++) {
          const cB = sc.GeometryTextureDescriptions[rB],
            Bc = cB.define,
            uc = cB.defineIndex,
            Mc = Vc.defines[uc];
          void 0 !== Mc ? (nc[Bc] = !0, nc[uc] = Mc, Ic++) : (nc[Bc] = !1, delete nc[uc])
        }
        nc.PREPASS_OBJECT_ID_R8 = Vc.objectIdIsRedFormat, nc.SCENE_MRT_COUNT = Vc._mrtCount ?? Ic, nc.BONES_VELOCITY_ENABLED = Bc.useBones && Bc.computeBonesUsingShaders && Bc.skeleton && !Bc.skeleton.isUsingTextureForMatrices && -1 === Vc.excludedSkinnedMesh.indexOf(Bc)
      }
      static Bind(cB, Bc, nc, Vc, Ic) {
        const Mc = sc._Configurations[cB];
        if (!Mc) return;
        const Pc = nc.knc(),
          qB = Pc.RV();
        if (Mc.reverseCulling && qB.setStateCullFaceType(Pc._mirroredCameraPosition ? Ic.cullBackFaces : !Ic.cullBackFaces), void 0 !== Mc.defines.PREPASS_OBJECT_ID_INDEX) {
          const cB = Mc.objectIdIsRedFormat ? 255 : 16777215;
          let Vc = nc.uniqueId;
          if (Mc.objectIdProvider) Vc = rB(nc, Mc.objectIdProvider, cB);
          else if (Vc > cB) throw new Error(`Invalid geometry object ID ${Vc} for mesh "${nc.name}". Object IDs must be integers between 0 and 0x${cB.toString(16).toUpperCase()}.`);
          Bc.setFloat("objectId", Vc)
        }
        if (void 0 !== Mc.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const cB = Mc.meshBlendTagProvider ? uc(nc, Mc.meshBlendTagProvider) : nc.meshBlendingTag;
          Bc.setInt("meshBlendTag", cB)
        }
        if (void 0 !== Mc.defines.PREPASS_VELOCITY_INDEX || void 0 !== Mc.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const cB = Mc._currentWorldMatrices ?? (Mc._currentWorldMatrices = {}),
            Ic = Mc._worldMatrixFrameIds ?? (Mc._worldMatrixFrameIds = {});
          if (cB[nc.uniqueId] || (cB[nc.uniqueId] = Vc.clone(), Mc.previousWorldMatrices[nc.uniqueId] = Vc.clone()), Ic[nc.uniqueId] !== qB.frameId && (Mc.previousWorldMatrices[nc.uniqueId].qqc(cB[nc.uniqueId]), Ic[nc.uniqueId] = qB.frameId), cB[nc.uniqueId].qqc(Vc), -1 === Mc.lastUpdateFrameId ? (Mc.lastUpdateFrameId = qB.frameId, Mc.previousViewProjection.qqc(Pc.getTransformMatrix()), Mc.currentViewProjection.qqc(Pc.getTransformMatrix())) : Mc.currentViewProjection.updateFlag !== Pc.getTransformMatrix().updateFlag ? (Mc.lastUpdateFrameId = qB.frameId, Mc.previousViewProjection.qqc(Mc.currentViewProjection), Mc.currentViewProjection.qqc(Pc.getTransformMatrix())) : Mc.lastUpdateFrameId !== qB.frameId && (Mc.lastUpdateFrameId = qB.frameId, Mc.previousViewProjection.qqc(Mc.currentViewProjection)), Bc.setMatrix("previousWorld", Mc.previousWorldMatrices[nc.uniqueId]), Bc.setMatrix("previousViewProjection", Mc.previousViewProjection), nc.useBones && nc.computeBonesUsingShaders && nc.skeleton) {
            const cB = nc.skeleton;
            if (!cB.isUsingTextureForMatrices || -1 === Bc.getUniformIndex("boneTextureInfo")) {
              const Vc = cB.getTransformMatrices(nc);
              Vc && (Mc.previousBones[nc.uniqueId] || (Mc.previousBones[nc.uniqueId] = Vc.slice()), Bc.setMatrices("mPreviousBones", Mc.previousBones[nc.uniqueId]), Mc.previousBones[nc.uniqueId].set(Vc))
            }
          }
        }
      }
    }
    sc.GeometryTextureDescriptions = [{
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
    }], sc._Configurations = {}
  },
  38379: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Tc,
      d: () => mB
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(37959),
      uc = nc(37923);
    const sc = new RegExp("^([gimus]+)!");
    class Mc {
      constructor(cB) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = cB, this._scene = cB.knc(), this._engine = this._scene.RV()
      }
      _addPlugin(cB) {
        for (let Vc = 0; Vc < this._plugins.length; ++Vc)
          if (this._plugins[Vc].name === cB.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !cB.isCompatible(this._material.shaderLanguage)) throw `The plugin "${cB.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const Bc = cB.getClassName();
        Mc._MaterialPluginClassToMainDefine[Bc] || (Mc._MaterialPluginClassToMainDefine[Bc] = "MATERIALPLUGIN_" + ++Mc._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (cB, Bc) => this._handlePluginEvent(cB, Bc), this._plugins.push(cB), this._plugins.sort(((cB, Bc) => cB.priority - Bc.priority)), this._codeInjectionPoints = {};
        const nc = {};
        nc[Mc._MaterialPluginClassToMainDefine[Bc]] = {
          type: "boolean",
          default: !0
        };
        for (const Vc of this._plugins) Vc.collectDefines(nc), this._collectPointNames("vertex", Vc.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Vc.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = nc, !0
      }
      _activatePlugin(cB) {
        -1 === this._activePlugins.indexOf(cB) && (this._activePlugins.push(cB), this._activePlugins.sort(((cB, Bc) => cB.priority - Bc.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), cB.registerForExtraEvents && (this._activePluginsForExtraEvents.push(cB), this._activePluginsForExtraEvents.sort(((cB, Bc) => cB.priority - Bc.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(cB) {
        for (let Bc = 0; Bc < this._plugins.length; ++Bc)
          if (this._plugins[Bc].name === cB) return this._plugins[Bc];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(cB) {
        let Bc = !0;
        for (const nc of this._activePlugins) Bc = Bc && nc.isReadyForSubMesh(cB.defines, this._scene, this._engine, cB.subMesh);
        cB.isReadyForSubMesh = Bc
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(cB) {
        for (const Bc of this._activePlugins) Bc.prepareDefinesBeforeAttributes(cB.defines, this._scene, cB.mesh)
      }
      _handlePluginEventPrepareDefines(cB) {
        for (const Bc of this._activePlugins) Bc.prepareDefines(cB.defines, this._scene, cB.mesh)
      }
      _handlePluginEventHardBindForSubMesh(cB) {
        for (const Bc of this._activePluginsForExtraEvents) Bc.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, cB.subMesh)
      }
      _handlePluginEventBindForSubMesh(cB) {
        for (const Bc of this._activePlugins) Bc.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, cB.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(cB) {
        let Bc = !1;
        for (const nc of this._activePluginsForExtraEvents)
          if (Bc = nc.hasRenderTargetTextures(), Bc) break;
        cB.hasRenderTargetTextures = Bc
      }
      _handlePluginEventFillRenderTargetTextures(cB) {
        for (const Bc of this._activePluginsForExtraEvents) Bc.fillRenderTargetTextures(cB.renderTargets)
      }
      _handlePluginEvent(cB, Bc) {
        switch (cB) {
          case 512: {
            const cB = Bc;
            for (const Bc of this._activePlugins) Bc.getActiveTextures(cB.activeTextures);
            break
          }
          case 256: {
            const cB = Bc;
            for (const Bc of this._activePlugins) Bc.getAnimatables(cB.animatables);
            break
          }
          case 1024: {
            const cB = Bc;
            let nc = !1;
            for (const Bc of this._activePlugins)
              if (nc = Bc.hasTexture(cB.texture), nc) break;
            cB.hasTexture = nc;
            break
          }
          case 2: {
            const cB = Bc;
            for (const Bc of this._plugins) Bc.dispose(cB.forceDisposeTextures);
            break
          }
          case 4:
            Bc.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const cB = Bc;
            for (const Bc of this._activePlugins) cB.fallbackRank = Bc.addFallbacks(cB.defines, cB.fallbacks, cB.fallbackRank), Bc.getAttributes(cB.attributes, this._scene, cB.mesh);
            this._uniformList.length > 0 && cB.uniforms.push(...this._uniformList), this._samplerList.length > 0 && cB.samplers.push(...this._samplerList), this._uboList.length > 0 && cB.uniformBuffersNames.push(...this._uboList), cB.customCode = this._injectCustomCode(cB, cB.customCode);
            break
          }
          case 8: {
            const cB = Bc;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const nc = 1 === this._material.shaderLanguage;
            for (const Bc of this._plugins) {
              const Vc = Bc.getUniforms(this._material.shaderLanguage);
              if (Vc) {
                if (Vc.ubo)
                  for (const Bc of Vc.ubo) {
                    if (Bc.size && Bc.type) {
                      const Vc = Bc.arraySize ?? 0;
                      if (cB.ubo.addUniform(Bc.name, Bc.size, Vc), nc) {
                        let cB;
                        switch (Bc.type) {
                          case "mat4":
                            cB = "mat4x4f";
                            break;
                          case "float":
                            cB = "f32";
                            break;
                          default:
                            cB = `${Bc.type}f`
                        }
                        this._uboDeclaration += Vc > 0 ? `uniform ${Bc.name}: array<${cB}, ${Vc}>;\n` : `uniform ${Bc.name}: ${cB};\n`
                      } else this._uboDeclaration += `${Bc.type} ${Bc.name}${Vc>0?`[${Vc}]`:""};\n`
                    }
                    this._uniformList.push(Bc.name)
                  }
                Vc.vertex && (this._vertexDeclaration += Vc.vertex + "\n"), Vc.fragment && (this._fragmentDeclaration += Vc.fragment + "\n"), Vc.externalUniforms && this._uniformList.push(...Vc.externalUniforms)
              }
              Bc.getSamplers(this._samplerList), Bc.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(cB, Bc) {
        if (Bc)
          for (const nc in Bc) this._codeInjectionPoints[cB] || (this._codeInjectionPoints[cB] = {}), this._codeInjectionPoints[cB][nc] = !0
      }
      _injectCustomCode(cB, Bc) {
        return (nc, Vc) => {
          Bc && (Vc = Bc(nc, Vc)), this._uboDeclaration && (Vc = Vc.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Vc = Vc.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (Vc = Vc.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const Ic = this._codeInjectionPoints?.[nc];
          if (!Ic) return Vc;
          let Mc = null;
          for (let Bc in Ic) {
            let Ic = "";
            for (const Vc of this._activePlugins) {
              const sc = this._material.shaderLanguage;
              let Pc = Vc.getCustomCode(nc, sc)?.[Bc];
              Pc && (Vc.resolveIncludes && (null === Mc && (Mc = {
                defines: [],
                indexParameters: cB.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: uc.b.GetShadersRepository(sc),
                includesShadersStore: uc.b.GetIncludesShadersStore(sc),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                HPc: this._engine.HPc,
                processCodeAfterIncludes: void 0
              }), Mc.isFragment = "fragment" === nc, (0, rB.f)(Pc, Mc, (cB => Pc = cB))), Ic += Pc + "\n")
            }
            if (Ic.length > 0)
              if ("!" === Bc.charAt(0)) {
                Bc = Bc.substring(1);
                let cB = "g";
                if ("!" === Bc.charAt(0)) cB = "", Bc = Bc.substring(1);
                else {
                  const nc = sc.exec(Bc);
                  nc && nc.length >= 2 && (cB = nc[1], Bc = Bc.substring(cB.length + 1))
                }
                cB.indexOf("g") < 0 && (cB += "g");
                const nc = new RegExp(Bc, cB);
                let rB = nc.exec(Vc);
                for (; null !== rB;) {
                  const {
                    index: cB
                  } = rB, Bc = Pc(Ic, rB);
                  Vc = Vc.substring(0, cB) + Bc + Vc.substring(cB + rB[0].length), nc.lastIndex = cB + Bc.length, rB = nc.exec(Vc)
                }
              } else {
                const cB = "#define " + Bc;
                Vc = Vc.replace(cB, "\n" + Ic + "\n" + cB)
              }
          }
          return Vc
        }
      }
    }
    Mc._MaterialPluginClassToMainDefine = {}, Mc._MaterialPluginCounter = 0;

    function Pc(cB, Bc) {
      return cB.replace(/\$(\d+)/g, ((cB, nc) => {
        const Vc = Number(nc);
        return Vc < Bc.length ? Bc[Vc] : ""
      }))
    }
    var qB = nc(38068),
      Oc = nc(35799);
    let Tc = (() => {
        var cB;
        let Bc, nc, rB, uc, sc = [],
          Pc = [],
          Oc = [],
          Tc = [],
          fc = [],
          mB = [],
          ec = [],
          tB = [];
        return cB = class {
          isCompatible(cB) {
            return 0 === cB
          }
          _enable(cB) {
            cB && this._pluginManager._activatePlugin(this)
          }
          constructor(cB, Bc, nc, Ic) {
            let rB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              uc = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              qB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, Vc.k)(this, sc, void 0), this.priority = ((0, Vc.k)(this, Pc), (0, Vc.k)(this, Oc, 500)), this.resolveIncludes = ((0, Vc.k)(this, Tc), (0, Vc.k)(this, fc, !1)), this.registerForExtraEvents = ((0, Vc.k)(this, mB), (0, Vc.k)(this, ec, !1)), this.doNotSerialize = ((0, Vc.k)(this, tB), !1), this._material = cB, this.name = Bc, this.priority = nc, this.resolveIncludes = qB, cB.pluginManager || (cB.pluginManager = new Mc(cB), cB.XBc.add((() => {
              cB.pluginManager = void 0
            }))), this._pluginDefineNames = Ic, this._pluginManager = cB.pluginManager, rB && this._pluginManager._addPlugin(this), uc && this._enable(!0), this.markAllDefinesAsDirty = cB._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(cB, Bc, nc, Vc) {
            return !0
          }
          hardBindForSubMesh(cB, Bc, nc, Vc) {}
          bindForSubMesh(cB, Bc, nc, Vc) {}
          dispose(cB) {}
          getCustomCode(cB) {
            return null
          }
          collectDefines(cB) {
            if (this._pluginDefineNames)
              for (const Bc of Object.keys(this._pluginDefineNames)) {
                if ("_" === Bc[0]) continue;
                const nc = typeof this._pluginDefineNames[Bc];
                cB[Bc] = {
                  type: "number" === nc ? "number" : "string" === nc ? "string" : "boolean" === nc ? "boolean" : "object",
                  default: this._pluginDefineNames[Bc]
                }
              }
          }
          prepareDefinesBeforeAttributes(cB, Bc, nc) {}
          prepareDefines(cB, Bc, nc) {}
          hasTexture(cB) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(cB) {}
          getActiveTextures(cB) {}
          getAnimatables(cB) {}
          addFallbacks(cB, Bc, nc) {
            return nc
          }
          getSamplers(cB) {}
          getAttributes(cB, Bc, nc) {}
          getUniformBuffersNames(cB) {}
          getUniforms() {
            return {}
          }
          copyTo(cB) {
            qB.e.Clone((() => cB), this)
          }
          serialize() {
            return qB.e.Serialize(this)
          }
          parse(cB, Bc, nc) {
            qB.e.Parse((() => this), cB, Bc, nc)
          }
        }, (() => {
          const Mc = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Bc = [(0, Ic.M)()], nc = [(0, Ic.M)()], rB = [(0, Ic.M)()], uc = [(0, Ic.M)()], (0, Vc.g)(null, null, Bc, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: cB => "name" in cB,
              get: cB => cB.name,
              set: (cB, Bc) => {
                cB.name = Bc
              }
            },
            metadata: Mc
          }, sc, Pc), (0, Vc.g)(null, null, nc, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: cB => "priority" in cB,
              get: cB => cB.priority,
              set: (cB, Bc) => {
                cB.priority = Bc
              }
            },
            metadata: Mc
          }, Oc, Tc), (0, Vc.g)(null, null, rB, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: cB => "resolveIncludes" in cB,
              get: cB => cB.resolveIncludes,
              set: (cB, Bc) => {
                cB.resolveIncludes = Bc
              }
            },
            metadata: Mc
          }, fc, mB), (0, Vc.g)(null, null, uc, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: cB => "registerForExtraEvents" in cB,
              get: cB => cB.registerForExtraEvents,
              set: (cB, Bc) => {
                cB.registerForExtraEvents = Bc
              }
            },
            metadata: Mc
          }, ec, tB), Mc && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Mc
          })
        })(), cB
      })(),
      fc = !1;

    function mB() {
      fc || (fc = !0, (0, Oc.d)("BABYLON.MaterialPluginBase", Tc))
    }
  },
  38306: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc
    });
    class Vc {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(cB) {
        cB.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(cB) {}
      bindForSubMesh(cB, Bc, nc, Vc, Ic) {
        if (Bc.prePassRenderer && Bc.prePassRenderer.enabled && Bc.prePassRenderer.currentRTisSceneRT && (-1 !== Bc.prePassRenderer.getIndex(2) || -1 !== Bc.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[nc.uniqueId] || (this.previousWorldMatrices[nc.uniqueId] = Vc.clone()), this.previousViewProjection || (this.previousViewProjection = Bc.getTransformMatrix().clone(), this.currentViewProjection = Bc.getTransformMatrix().clone());
          const Ic = Bc.RV();
          this.currentViewProjection.updateFlag !== Bc.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = Ic.frameId, this.previousViewProjection.qqc(this.currentViewProjection), this.currentViewProjection.qqc(Bc.getTransformMatrix())) : this._lastUpdateFrameId !== Ic.frameId && (this._lastUpdateFrameId = Ic.frameId, this.previousViewProjection.qqc(this.currentViewProjection)), cB.setMatrix("previousWorld", this.previousWorldMatrices[nc.uniqueId]), cB.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[nc.uniqueId] = Vc.clone()
        }
      }
    }
  },
  38406: (cB, Bc, nc) => {
    function Vc(cB) {
      return class extends cB {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    nc.d(Bc, {
      d: () => Vc
    })
  },
  38294: (cB, Bc, nc) => {
    nc.d(Bc, {
      StandardMaterial: () => Vc.f
    });
    var Vc = nc(38302);
    (0, Vc.c)()
  },
  38302: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ec,
      f: () => Dc
    });
    var Vc = nc(38035),
      Ic = nc(38043),
      rB = nc(38158),
      uc = nc(38141),
      sc = nc(35815),
      Mc = nc(38194),
      Pc = nc(38306),
      qB = nc(38310),
      Oc = nc(38162),
      Tc = nc(38326),
      fc = nc(38317),
      mB = nc(38370),
      ec = nc(38364),
      tB = nc(38374),
      Sc = nc(38377),
      yB = nc(38362),
      zB = nc(38383),
      pc = nc(38358),
      hc = nc(38068),
      aB = nc(38391),
      lc = nc(38400),
      Yc = nc(38402),
      Lc = nc(38406),
      gB = nc(38410),
      Uc = nc(35799),
      bB = nc(37953);
    const Zc = {
      effect: null,
      subMesh: null
    };
    class Qc extends((0, Lc.d)((0, Yc.d)(fc.e))) {}
    class Cc extends((0, qB.g)(Qc)) {
      constructor(cB) {
        super(cB), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class vB extends((0, gB.e)(mB.c)) {}
    let Dc = (() => {
        var cB, Bc, qB, fc, Yc, Lc, gB, Uc, bB, Qc, Dc, Nc, Ec, oc, Wc, wc, kB, Xc, Hc, Fc, Jc, jB, Rc, iB, Kc, xB, dc, Ac, Gc, cn, BB, nB, VB;
        let IB, rn, uB, sB, MB, PB, qn, OB, TB, fB, mn, eB, tn, SB, yn, zn, pB, hB, an, lB, YB, LB, gn, UB, bn, ZB, QB, CB, vn, DB, NB, EB, oB, WB, wB, kn, XB, HB, FB, JB, jn, RB, KB, xn, dB, AB, GB, cV, Bn, nn, Vn, In, rV, un, sn, Mn, Pn, qV, On, Tn, fn, mV, en, tV, Sn, yV, zV, pn, hn, aV, lnc, Yn, Ln, gV = vB,
          Un = [],
          bV = [],
          Zn = [],
          Qn = [],
          Cn = [],
          vV = [],
          Dn = [],
          Nn = [],
          En = [],
          onc = [],
          Wn = [],
          wn = [],
          kV = [],
          Xn = [],
          Hn = [],
          Fn = [],
          Jn = [],
          jV = [],
          Rn = [],
          iV = [],
          Kn = [],
          xV = [],
          dn = [],
          An = [],
          Gn = [],
          cI = [],
          BV = [],
          nV = [],
          VV = [],
          IV = [],
          rI = [],
          uV = [],
          sV = [],
          MV = [],
          PV = [],
          qI = [],
          OV = [],
          TV = [],
          fV = [],
          mI = [],
          eV = [],
          tI = [],
          SV = [],
          yI = [],
          zI = [],
          pV = [],
          hV = [],
          aI = [],
          lV = [],
          YV = [],
          LV = [],
          gI = [],
          UV = [],
          bI = [],
          ZV = [],
          QV = [],
          CV = [],
          vI = [],
          DV = [],
          NV = [],
          EV = [],
          oV = [],
          WV = [],
          wV = [],
          kI = [],
          XV = [],
          HV = [],
          FV = [],
          JV = [],
          jI = [],
          RV = [],
          iI = [],
          KV = [],
          xI = [],
          dV = [],
          AV = [],
          GV = [],
          cr = [],
          BI = [],
          nI = [],
          VI = [],
          II = [],
          rr = [],
          uI = [],
          sI = [],
          MI = [],
          PI = [],
          qr = [],
          OI = [],
          TI = [],
          fI = [],
          mr = [],
          eI = [],
          tr = [],
          SI = [],
          yr = [],
          zr = [],
          pI = [],
          hI = [],
          ar = [],
          lI = [],
          YI = [],
          LI = [],
          gr = [],
          UI = [],
          br = [],
          ZI = [],
          QI = [],
          CI = [],
          vr = [],
          DI = [],
          NI = [],
          EI = [],
          oI = [],
          WI = [],
          wI = [],
          kr = [],
          XI = [],
          HI = [],
          FI = [],
          JI = [],
          jr = [],
          RI = [],
          ir = [],
          KI = [],
          xr = [],
          dI = [],
          AI = [],
          GI = [],
          cu = [],
          Br = [],
          nr = [],
          Vr = [],
          Ir = [],
          ru = [],
          ur = [],
          sr = [],
          Mr = [],
          Pr = [],
          qu = [],
          Or = [],
          Tr = [],
          fr = [],
          mu = [],
          er = [],
          tu = [];
        return cB = class extends gV {
          get diffuseTexture() {
            return (0, Vc.c)(this, Bc, "f")
          }
          set diffuseTexture(cB) {
            (0, Vc.f)(this, Bc, cB, "f")
          }
          get ambientTexture() {
            return (0, Vc.c)(this, qB, "f")
          }
          set ambientTexture(cB) {
            (0, Vc.f)(this, qB, cB, "f")
          }
          get opacityTexture() {
            return (0, Vc.c)(this, fc, "f")
          }
          set opacityTexture(cB) {
            (0, Vc.f)(this, fc, cB, "f")
          }
          get reflectionTexture() {
            return (0, Vc.c)(this, Yc, "f")
          }
          set reflectionTexture(cB) {
            (0, Vc.f)(this, Yc, cB, "f")
          }
          get emissiveTexture() {
            return (0, Vc.c)(this, Lc, "f")
          }
          set emissiveTexture(cB) {
            (0, Vc.f)(this, Lc, cB, "f")
          }
          get specularTexture() {
            return (0, Vc.c)(this, gB, "f")
          }
          set specularTexture(cB) {
            (0, Vc.f)(this, gB, cB, "f")
          }
          get bumpTexture() {
            return (0, Vc.c)(this, Uc, "f")
          }
          set bumpTexture(cB) {
            (0, Vc.f)(this, Uc, cB, "f")
          }
          get lightmapTexture() {
            return (0, Vc.c)(this, bB, "f")
          }
          set lightmapTexture(cB) {
            (0, Vc.f)(this, bB, cB, "f")
          }
          get refractionTexture() {
            return (0, Vc.c)(this, Qc, "f")
          }
          set refractionTexture(cB) {
            (0, Vc.f)(this, Qc, cB, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, Vc.c)(this, Dc, "f")
          }
          set useAlphaFromDiffuseTexture(cB) {
            (0, Vc.f)(this, Dc, cB, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, Vc.c)(this, Nc, "f")
          }
          set useEmissiveAsIllumination(cB) {
            (0, Vc.f)(this, Nc, cB, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, Vc.c)(this, Ec, "f")
          }
          set linkEmissiveWithDiffuse(cB) {
            (0, Vc.f)(this, Ec, cB, "f")
          }
          get useSpecularOverAlpha() {
            return (0, Vc.c)(this, oc, "f")
          }
          set useSpecularOverAlpha(cB) {
            (0, Vc.f)(this, oc, cB, "f")
          }
          get useReflectionOverAlpha() {
            return (0, Vc.c)(this, Wc, "f")
          }
          set useReflectionOverAlpha(cB) {
            (0, Vc.f)(this, Wc, cB, "f")
          }
          get disableLighting() {
            return (0, Vc.c)(this, wc, "f")
          }
          set disableLighting(cB) {
            (0, Vc.f)(this, wc, cB, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, Vc.c)(this, kB, "f")
          }
          set useObjectSpaceNormalMap(cB) {
            (0, Vc.f)(this, kB, cB, "f")
          }
          get useParallax() {
            return (0, Vc.c)(this, Xc, "f")
          }
          set useParallax(cB) {
            (0, Vc.f)(this, Xc, cB, "f")
          }
          get useParallaxOcclusion() {
            return (0, Vc.c)(this, Hc, "f")
          }
          set useParallaxOcclusion(cB) {
            (0, Vc.f)(this, Hc, cB, "f")
          }
          get roughness() {
            return (0, Vc.c)(this, Fc, "f")
          }
          set roughness(cB) {
            (0, Vc.f)(this, Fc, cB, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, Vc.c)(this, Jc, "f")
          }
          set useLightmapAsShadowmap(cB) {
            (0, Vc.f)(this, Jc, cB, "f")
          }
          get diffuseFresnelParameters() {
            return (0, Vc.c)(this, jB, "f")
          }
          set diffuseFresnelParameters(cB) {
            (0, Vc.f)(this, jB, cB, "f")
          }
          get opacityFresnelParameters() {
            return (0, Vc.c)(this, Rc, "f")
          }
          set opacityFresnelParameters(cB) {
            (0, Vc.f)(this, Rc, cB, "f")
          }
          get reflectionFresnelParameters() {
            return (0, Vc.c)(this, iB, "f")
          }
          set reflectionFresnelParameters(cB) {
            (0, Vc.f)(this, iB, cB, "f")
          }
          get refractionFresnelParameters() {
            return (0, Vc.c)(this, Kc, "f")
          }
          set refractionFresnelParameters(cB) {
            (0, Vc.f)(this, Kc, cB, "f")
          }
          get emissiveFresnelParameters() {
            return (0, Vc.c)(this, xB, "f")
          }
          set emissiveFresnelParameters(cB) {
            (0, Vc.f)(this, xB, cB, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, Vc.c)(this, dc, "f")
          }
          set useReflectionFresnelFromSpecular(cB) {
            (0, Vc.f)(this, dc, cB, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, Vc.c)(this, Ac, "f")
          }
          set useGlossinessFromSpecularMapAlpha(cB) {
            (0, Vc.f)(this, Ac, cB, "f")
          }
          get maxSimultaneousLights() {
            return (0, Vc.c)(this, Gc, "f")
          }
          set maxSimultaneousLights(cB) {
            (0, Vc.f)(this, Gc, cB, "f")
          }
          get invertNormalMapX() {
            return (0, Vc.c)(this, cn, "f")
          }
          set invertNormalMapX(cB) {
            (0, Vc.f)(this, cn, cB, "f")
          }
          get invertNormalMapY() {
            return (0, Vc.c)(this, BB, "f")
          }
          set invertNormalMapY(cB) {
            (0, Vc.f)(this, BB, cB, "f")
          }
          get twoSidedLighting() {
            return (0, Vc.c)(this, nB, "f")
          }
          set twoSidedLighting(cB) {
            (0, Vc.f)(this, nB, cB, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Vc.c)(this, VB, "f")
          }
          set applyDecalMapAfterDetailMap(cB) {
            (0, Vc.f)(this, VB, cB, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(nc, Ic) {
            super(nc, Ic, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || cB.ForceGLSL), this._diffuseTexture = (0, Vc.k)(this, Un, null), Bc.set(this, ((0, Vc.k)(this, bV), (0, Vc.k)(this, Zn, void 0))), this._ambientTexture = ((0, Vc.k)(this, Qn), (0, Vc.k)(this, Cn, null)), qB.set(this, ((0, Vc.k)(this, vV), (0, Vc.k)(this, Dn, void 0))), this._opacityTexture = ((0, Vc.k)(this, Nn), (0, Vc.k)(this, En, null)), fc.set(this, ((0, Vc.k)(this, onc), (0, Vc.k)(this, Wn, void 0))), this._reflectionTexture = ((0, Vc.k)(this, wn), (0, Vc.k)(this, kV, null)), Yc.set(this, ((0, Vc.k)(this, Xn), (0, Vc.k)(this, Hn, void 0))), this._emissiveTexture = ((0, Vc.k)(this, Fn), (0, Vc.k)(this, Jn, null)), Lc.set(this, ((0, Vc.k)(this, jV), (0, Vc.k)(this, Rn, void 0))), this._specularTexture = ((0, Vc.k)(this, iV), (0, Vc.k)(this, Kn, null)), gB.set(this, ((0, Vc.k)(this, xV), (0, Vc.k)(this, dn, void 0))), this._bumpTexture = ((0, Vc.k)(this, An), (0, Vc.k)(this, Gn, null)), Uc.set(this, ((0, Vc.k)(this, cI), (0, Vc.k)(this, BV, void 0))), this._lightmapTexture = ((0, Vc.k)(this, nV), (0, Vc.k)(this, VV, null)), bB.set(this, ((0, Vc.k)(this, IV), (0, Vc.k)(this, rI, void 0))), this._refractionTexture = ((0, Vc.k)(this, uV), (0, Vc.k)(this, sV, null)), Qc.set(this, ((0, Vc.k)(this, MV), (0, Vc.k)(this, PV, void 0))), this.ambientColor = ((0, Vc.k)(this, qI), (0, Vc.k)(this, OV, new sc.e(0, 0, 0))), this.diffuseColor = ((0, Vc.k)(this, TV), (0, Vc.k)(this, fV, new sc.e(1, 1, 1))), this.specularColor = ((0, Vc.k)(this, mI), (0, Vc.k)(this, eV, new sc.e(1, 1, 1))), this.emissiveColor = ((0, Vc.k)(this, tI), (0, Vc.k)(this, SV, new sc.e(0, 0, 0))), this.specularPower = ((0, Vc.k)(this, yI), (0, Vc.k)(this, zI, 64)), this._useAlphaFromDiffuseTexture = ((0, Vc.k)(this, pV), (0, Vc.k)(this, hV, !1)), Dc.set(this, ((0, Vc.k)(this, aI), (0, Vc.k)(this, lV, void 0))), this._useEmissiveAsIllumination = ((0, Vc.k)(this, YV), (0, Vc.k)(this, LV, !1)), Nc.set(this, ((0, Vc.k)(this, gI), (0, Vc.k)(this, UV, void 0))), this._linkEmissiveWithDiffuse = ((0, Vc.k)(this, bI), (0, Vc.k)(this, ZV, !1)), Ec.set(this, ((0, Vc.k)(this, QV), (0, Vc.k)(this, CV, void 0))), this._useSpecularOverAlpha = ((0, Vc.k)(this, vI), (0, Vc.k)(this, DV, !1)), oc.set(this, ((0, Vc.k)(this, NV), (0, Vc.k)(this, EV, void 0))), this._useReflectionOverAlpha = ((0, Vc.k)(this, oV), (0, Vc.k)(this, WV, !1)), Wc.set(this, ((0, Vc.k)(this, wV), (0, Vc.k)(this, kI, void 0))), this._disableLighting = ((0, Vc.k)(this, XV), (0, Vc.k)(this, HV, !1)), wc.set(this, ((0, Vc.k)(this, FV), (0, Vc.k)(this, JV, void 0))), this._useObjectSpaceNormalMap = ((0, Vc.k)(this, jI), (0, Vc.k)(this, RV, !1)), kB.set(this, ((0, Vc.k)(this, iI), (0, Vc.k)(this, KV, void 0))), this._useParallax = ((0, Vc.k)(this, xI), (0, Vc.k)(this, dV, !1)), Xc.set(this, ((0, Vc.k)(this, AV), (0, Vc.k)(this, GV, void 0))), this._useParallaxOcclusion = ((0, Vc.k)(this, cr), (0, Vc.k)(this, BI, !1)), Hc.set(this, ((0, Vc.k)(this, nI), (0, Vc.k)(this, VI, void 0))), this.parallaxScaleBias = ((0, Vc.k)(this, II), (0, Vc.k)(this, rr, .05)), this._roughness = ((0, Vc.k)(this, uI), (0, Vc.k)(this, sI, 0)), Fc.set(this, ((0, Vc.k)(this, MI), (0, Vc.k)(this, PI, void 0))), this.indexOfRefraction = ((0, Vc.k)(this, qr), (0, Vc.k)(this, OI, .98)), this.invertRefractionY = ((0, Vc.k)(this, TI), (0, Vc.k)(this, fI, !0)), this.alphaCutOff = ((0, Vc.k)(this, mr), (0, Vc.k)(this, eI, .4)), this._useLightmapAsShadowmap = ((0, Vc.k)(this, tr), (0, Vc.k)(this, SI, !1)), Jc.set(this, ((0, Vc.k)(this, yr), (0, Vc.k)(this, zr, void 0))), this._diffuseFresnelParameters = ((0, Vc.k)(this, pI), (0, Vc.k)(this, hI, void 0)), jB.set(this, ((0, Vc.k)(this, ar), (0, Vc.k)(this, lI, void 0))), this._opacityFresnelParameters = ((0, Vc.k)(this, YI), (0, Vc.k)(this, LI, void 0)), Rc.set(this, ((0, Vc.k)(this, gr), (0, Vc.k)(this, UI, void 0))), this._reflectionFresnelParameters = ((0, Vc.k)(this, br), (0, Vc.k)(this, ZI, void 0)), iB.set(this, ((0, Vc.k)(this, QI), (0, Vc.k)(this, CI, void 0))), this._refractionFresnelParameters = ((0, Vc.k)(this, vr), (0, Vc.k)(this, DI, void 0)), Kc.set(this, ((0, Vc.k)(this, NI), (0, Vc.k)(this, EI, void 0))), this._emissiveFresnelParameters = ((0, Vc.k)(this, oI), (0, Vc.k)(this, WI, void 0)), xB.set(this, ((0, Vc.k)(this, wI), (0, Vc.k)(this, kr, void 0))), this._useReflectionFresnelFromSpecular = ((0, Vc.k)(this, XI), (0, Vc.k)(this, HI, !1)), dc.set(this, ((0, Vc.k)(this, FI), (0, Vc.k)(this, JI, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, Vc.k)(this, jr), (0, Vc.k)(this, RI, !1)), Ac.set(this, ((0, Vc.k)(this, ir), (0, Vc.k)(this, KI, void 0))), this._maxSimultaneousLights = ((0, Vc.k)(this, xr), (0, Vc.k)(this, dI, 4)), Gc.set(this, ((0, Vc.k)(this, AI), (0, Vc.k)(this, GI, void 0))), this._invertNormalMapX = ((0, Vc.k)(this, cu), (0, Vc.k)(this, Br, !1)), cn.set(this, ((0, Vc.k)(this, nr), (0, Vc.k)(this, Vr, void 0))), this._invertNormalMapY = ((0, Vc.k)(this, Ir), (0, Vc.k)(this, ru, !1)), BB.set(this, ((0, Vc.k)(this, ur), (0, Vc.k)(this, sr, void 0))), this._twoSidedLighting = ((0, Vc.k)(this, Mr), (0, Vc.k)(this, Pr, !1)), nB.set(this, ((0, Vc.k)(this, qu), (0, Vc.k)(this, Or, void 0))), this._applyDecalMapAfterDetailMap = ((0, Vc.k)(this, Tr), (0, Vc.k)(this, fr, !1)), VB.set(this, ((0, Vc.k)(this, mu), (0, Vc.k)(this, er, void 0))), this._vertexPullingMetadata = ((0, Vc.k)(this, tu), null), this._renderTargets = new rB.e(16), this._globalAmbientColor = new sc.e(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new Sc.b(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new Pc.e, this.getRenderTargetTextures = () => (this._renderTargets.reset(), cB.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), cB.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(cB.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(cB.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === Tc.c.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== Tc.c.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(Bc, nc) {
            let Vc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const Ic = nc._drawWrapper;
            if (Ic.effect && this.isFrozen && Ic._wasPreviouslyReady && Ic._wasPreviouslyUsingInstances === Vc) return !0;
            nc.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), nc.materialDefines = new Cc(this._eventInfo.defineNames));
            const rB = this.knc(),
              uc = nc.materialDefines;
            if (this._isReadyForSubMesh(nc)) return !0;
            const sc = rB.RV();
            if (uc._needNormals = (0, pc.Z)(rB, Bc, uc, !0, this._maxSimultaneousLights, this._disableLighting), !(0, pc.e)(rB, Bc, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, pc.gb)(rB, uc);
            const qB = this.needAlphaBlendingForMesh(Bc) && this.knc().useOrderIndependentTransparency;
            if ((0, pc.lb)(rB, uc, this.canRenderToMRT && !qB), (0, pc.kb)(rB, uc, qB), lc.b.PrepareDefines(sc.currentRenderPassId, Bc, uc), uc._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, uc._needUVs = !1;
              for (let cB = 1; cB <= 6; ++cB) uc["MAINUV" + cB] = !1;
              if (rB.texturesEnabled) {
                if (uc.DIFFUSEDIRECTUV = 0, uc.BUMPDIRECTUV = 0, uc.AMBIENTDIRECTUV = 0, uc.OPACITYDIRECTUV = 0, uc.EMISSIVEDIRECTUV = 0, uc.SPECULARDIRECTUV = 0, uc.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && cB.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, pc.$)(this._diffuseTexture, uc, "DIFFUSE")
                } else uc.DIFFUSE = !1;
                if (this._ambientTexture && cB.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, pc.$)(this._ambientTexture, uc, "AMBIENT")
                } else uc.AMBIENT = !1;
                if (this._opacityTexture && cB.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, pc.$)(this._opacityTexture, uc, "OPACITY"), uc.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else uc.OPACITY = !1;
                if (this._reflectionTexture && cB.ReflectionTextureEnabled ? (uc.ROUGHNESS = this._roughness > 0, uc.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (uc.ROUGHNESS = !1, uc.REFLECTIONOVERALPHA = !1), !(0, pc.Y)(rB, this._reflectionTexture, uc)) return !1;
                if (this._emissiveTexture && cB.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, pc.$)(this._emissiveTexture, uc, "EMISSIVE")
                } else uc.EMISSIVE = !1;
                if (this._lightmapTexture && cB.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, pc.$)(this._lightmapTexture, uc, "LIGHTMAP"), uc.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, uc.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else uc.LIGHTMAP = !1;
                if (this._specularTexture && cB.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, pc.$)(this._specularTexture, uc, "SPECULAR"), uc.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else uc.SPECULAR = !1;
                if (rB.RV().getCaps().standardDerivatives && this._bumpTexture && cB.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, pc.$)(this._bumpTexture, uc, "BUMP"), uc.PARALLAX = this._useParallax, uc.PARALLAX_RHS = rB.useRightHandedSystem, uc.PARALLAXOCCLUSION = this._useParallaxOcclusion, uc.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else uc.BUMP = !1, uc.PARALLAX = !1, uc.PARALLAX_RHS = !1, uc.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && cB.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  uc._needUVs = !0, uc.REFRACTION = !0, uc.REFRACTIONMAP_3D = this._refractionTexture.isCube, uc.RGBDREFRACTION = this._refractionTexture.isRGBD, uc.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else uc.REFRACTION = !1;
                uc.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else uc.DIFFUSE = !1, uc.AMBIENT = !1, uc.OPACITY = !1, uc.REFLECTION = !1, uc.EMISSIVE = !1, uc.LIGHTMAP = !1, uc.BUMP = !1, uc.REFRACTION = !1;
              uc.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), uc.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, uc.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, uc.SPECULAROVERALPHA = this._useSpecularOverAlpha, uc.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, uc.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, uc.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(Bc), uc.TEXTURE_REPETITION_MODE = sc.version > 1 || sc.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = uc, this._eventInfo.subMesh = nc, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (uc._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(uc), uc.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, uc.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (uc._areFresnelDirty && (cB.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (uc.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, uc.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, uc.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, uc.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, uc.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, uc.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, uc._needNormals = !0, uc.FRESNEL = !0) : uc.FRESNEL = !1), uc.AREALIGHTUSED || uc.CLUSTLIGHT_BATCH)
              for (let cB = 0; cB < Bc.lightSources.length; cB++)
                if (!Bc.lightSources[cB]._isReady()) return !1;
            (0, pc.cb)(Bc, rB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Bc), uc, this._applyDecalMapAfterDetailMap, this._useVertexPulling, nc.getRenderingMesh(), this._isVertexOutputInvariant), (0, pc.X)(rB, sc, this, uc, Vc, null, nc.getRenderingMesh().hasThinInstances), this._eventInfo.defines = uc, this._eventInfo.mesh = Bc, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, pc.W)(Bc, uc, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let Tc = !1;
            if (uc.isDirty) {
              const Vc = uc._areLightsDisposed;
              uc.markAsProcessed();
              const Ic = new tB.e;
              uc.REFLECTION && Ic.addFallback(0, "REFLECTION"), uc.SPECULAR && Ic.addFallback(0, "SPECULAR"), uc.BUMP && Ic.addFallback(0, "BUMP"), uc.PARALLAX && Ic.addFallback(1, "PARALLAX"), uc.PARALLAX_RHS && Ic.addFallback(1, "PARALLAX_RHS"), uc.PARALLAXOCCLUSION && Ic.addFallback(0, "PARALLAXOCCLUSION"), uc.SPECULAROVERALPHA && Ic.addFallback(0, "SPECULAROVERALPHA"), uc.FOG && Ic.addFallback(1, "FOG"), uc.POINTSIZE && Ic.addFallback(0, "POINTSIZE"), uc.LOGARITHMICDEPTH && Ic.addFallback(0, "LOGARITHMICDEPTH"), (0, pc.F)(uc, Ic, this._maxSimultaneousLights), uc.SPECULARTERM && Ic.addFallback(0, "SPECULARTERM"), uc.DIFFUSEFRESNEL && Ic.addFallback(1, "DIFFUSEFRESNEL"), uc.OPACITYFRESNEL && Ic.addFallback(2, "OPACITYFRESNEL"), uc.REFLECTIONFRESNEL && Ic.addFallback(3, "REFLECTIONFRESNEL"), uc.EMISSIVEFRESNEL && Ic.addFallback(4, "EMISSIVEFRESNEL"), uc.FRESNEL && Ic.addFallback(4, "FRESNEL"), uc.MULTIVIEW && Ic.addFallback(0, "MULTIVIEW");
              const qB = [Mc.i.PositionKind];
              uc.NORMAL && qB.push(Mc.i.NormalKind), uc.TANGENT && qB.push(Mc.i.TangentKind);
              for (let cB = 1; cB <= 6; ++cB) uc["UV" + cB] && qB.push(`uv${1===cB?"":cB}`);
              uc.VERTEXCOLOR && qB.push(Mc.i.ColorKind), (0, pc.K)(qB, Bc, uc, Ic), (0, pc.M)(qB, uc), (0, pc.O)(qB, Bc, uc), (0, pc.G)(qB, Bc, uc);
              let fc = "default";
              const mB = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                ec = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, pc.ob)(mB, ec, !1);
              const Sc = ["Material", "Scene", "Mesh"],
                hc = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: uc.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = Ic, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = uc, this._eventInfo.uniforms = mB, this._eventInfo.attributes = qB, this._eventInfo.samplers = ec, this._eventInfo.uniformBuffersNames = Sc, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Bc, this._eventInfo.indexParameters = hc, this._callbackPluginEventGeneric(128, this._eventInfo), lc.b.AddUniformsAndSamplers(mB, ec), Pc.e.AddUniforms(mB), Pc.e.AddSamplers(ec), Oc.c && (Oc.c.PrepareUniforms(mB, uc), Oc.c.PrepareSamplers(ec, uc)), (0, pc.rb)({
                  uniformsNames: mB,
                  uniformBuffersNames: Sc,
                  samplers: ec,
                  defines: uc,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, yB.b)(mB), this._useVertexPulling) {
                const cB = nc.getRenderingMesh(),
                  Bc = cB?.geometry;
                Bc && (this._vertexPullingMetadata = (0, zB.h)(Bc), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((cB, Bc) => {
                  mB.push(`vp_${Bc}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const aB = {};
              this.customShaderNameResolve && (fc = this.customShaderNameResolve(fc, mB, Sc, ec, uc, qB, aB));
              const Yc = uc.toString(),
                Lc = nc.effect,
                gB = rB.RV().createEffect(fc, {
                  attributes: qB,
                  uniformsNames: mB,
                  uniformBuffersNames: Sc,
                  samplers: ec,
                  defines: Yc,
                  fallbacks: Ic,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: hc,
                  processFinalCode: aB.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: uc.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: cB._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, sc);
              if (this._eventInfo.customCode = void 0, gB)
                if (this._onEffectCreatedObservable && (Zc.effect = gB, Zc.subMesh = nc, this._onEffectCreatedObservable.notifyObservers(Zc)), this.allowShaderHotSwapping && Lc && !gB.isReady()) {
                  if (uc.markAsUnprocessed(), Tc = this.isFrozen, Vc) return uc._areLightsDisposed = !0, !1
                } else rB.resetCachedMaterial(), nc.setEffect(gB, uc, this._materialContext)
            }
            return !(!nc.effect || !nc.effect.isReady()) && (uc._renderId = rB.getRenderId(), Ic._wasPreviouslyReady = !Tc, Ic._wasPreviouslyUsingInstances = Vc, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const cB = this._uniformBuffer;
            cB.addUniform("diffuseLeftColor", 4), cB.addUniform("diffuseRightColor", 4), cB.addUniform("opacityParts", 4), cB.addUniform("reflectionLeftColor", 4), cB.addUniform("reflectionRightColor", 4), cB.addUniform("refractionLeftColor", 4), cB.addUniform("refractionRightColor", 4), cB.addUniform("emissiveLeftColor", 4), cB.addUniform("emissiveRightColor", 4), cB.addUniform("vDiffuseInfos", 2), cB.addUniform("vAmbientInfos", 2), cB.addUniform("vOpacityInfos", 2), cB.addUniform("vEmissiveInfos", 2), cB.addUniform("vLightmapInfos", 2), cB.addUniform("vSpecularInfos", 2), cB.addUniform("vBumpInfos", 3), cB.addUniform("diffuseMatrix", 16), cB.addUniform("ambientMatrix", 16), cB.addUniform("opacityMatrix", 16), cB.addUniform("emissiveMatrix", 16), cB.addUniform("lightmapMatrix", 16), cB.addUniform("specularMatrix", 16), cB.addUniform("bumpMatrix", 16), cB.addUniform("vTangentSpaceParams", 2), cB.addUniform("pointSize", 1), cB.addUniform("alphaCutOff", 1), cB.addUniform("refractionMatrix", 16), cB.addUniform("vRefractionInfos", 4), cB.addUniform("vRefractionPosition", 3), cB.addUniform("vRefractionSize", 3), cB.addUniform("vSpecularColor", 4), cB.addUniform("vEmissiveColor", 3), cB.addUniform("vDiffuseColor", 4), cB.addUniform("vAmbientColor", 3), cB.addUniform("cameraInfo", 4), cB.addUniform("vTextureRepetitionHexTilingParams", 4), (0, pc.mb)(cB, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(Bc, nc, Vc) {
            const Ic = this.knc(),
              rB = Vc.materialDefines;
            if (!rB) return;
            const Mc = Vc.effect;
            if (!Mc) return;
            this._activeEffect = Mc, nc.getMeshUniformBuffer().bindToEffect(Mc, "Mesh"), nc.transferToEffect(Bc), this._uniformBuffer.bindToEffect(Mc, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, Ic, nc, Bc, this.isFrozen), lc.b.Bind(Ic.RV().currentRenderPassId, this._activeEffect, nc, Bc, this);
            const Pc = Ic.activeCamera;
            Pc ? this._uniformBuffer.updateFloat4("cameraInfo", Pc.minZ, Pc.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const qB = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", qB[0], qB[1], qB[2], qB[3]), this._eventInfo.subMesh = Vc, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), rB.OBJECTSPACE_NORMALMAP && (Bc.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Oc = this._mustRebind(Ic, Mc, Vc, nc.visibility),
              Tc = Ic.RV()._features.needToAlwaysBindUniformBuffers;
            (0, pc.i)(nc, Mc), this._vertexPullingMetadata && (0, zB.e)(Mc, this._vertexPullingMetadata);
            const fc = this._uniformBuffer;
            if (Oc) {
              if (this.bindViewProjection(Mc), !fc.useUbo || !this.isFrozen || !fc.isSync || Vc._drawWrapper._forceRebindOnNextCall) {
                if (cB.FresnelEnabled && rB.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (fc.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), fc.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const cB = sc.m.Color3[0];
                    cB.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), fc.updateColor4("opacityParts", cB, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (fc.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), fc.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (fc.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), fc.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (fc.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), fc.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (rB.ALPHATEST && fc.updateFloat("alphaCutOff", this.alphaCutOff), Ic.texturesEnabled && (this._diffuseTexture && cB.DiffuseTextureEnabled && (fc.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, pc.B)(this._diffuseTexture, fc, "diffuse")), this._ambientTexture && cB.AmbientTextureEnabled && (fc.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, pc.B)(this._ambientTexture, fc, "ambient")), this._opacityTexture && cB.OpacityTextureEnabled && (fc.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, pc.B)(this._opacityTexture, fc, "opacity")), (0, pc.n)(Ic, rB, fc, sc.e.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && cB.ReflectionTextureEnabled || fc.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && cB.EmissiveTextureEnabled && (fc.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, pc.B)(this._emissiveTexture, fc, "emissive")), this._lightmapTexture && cB.LightmapTextureEnabled && (fc.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, pc.B)(this._lightmapTexture, fc, "lightmap")), this._specularTexture && cB.SpecularTextureEnabled && (fc.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, pc.B)(this._specularTexture, fc, "specular")), this._bumpTexture && Ic.RV().getCaps().standardDerivatives && cB.BumpTextureEnabled && (fc.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, pc.B)(this._bumpTexture, fc, "bump"), Ic._mirroredCameraPosition ? fc.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : fc.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && cB.RefractionTextureEnabled)) {
                  let cB = 1;
                  if (this._refractionTexture.isCube || (fc.Buc("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (cB = this._refractionTexture.depth)), fc.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, cB, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const cB = this._refractionTexture;
                    fc.updateVector3("vRefractionPosition", cB.boundingBoxPosition), fc.updateVector3("vRefractionSize", cB.boundingBoxSize)
                  }
                }
                this.pointsCloud && fc.updateFloat("pointSize", this.pointSize), fc.updateColor4("vSpecularColor", this.specularColor, this.specularPower), fc.updateColor3("vEmissiveColor", cB.EmissiveTextureEnabled ? this.emissiveColor : sc.e.BlackReadOnly), fc.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), Ic.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), fc.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              Ic.texturesEnabled && (this._diffuseTexture && cB.DiffuseTextureEnabled && Mc.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && cB.AmbientTextureEnabled && Mc.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && cB.OpacityTextureEnabled && Mc.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && cB.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? Mc.setTexture("reflectionCubeSampler", this._reflectionTexture) : Mc.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && cB.EmissiveTextureEnabled && Mc.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && cB.LightmapTextureEnabled && Mc.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && cB.SpecularTextureEnabled && Mc.setTexture("specularSampler", this._specularTexture), this._bumpTexture && Ic.RV().getCaps().standardDerivatives && cB.BumpTextureEnabled && Mc.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && cB.RefractionTextureEnabled && (this._refractionTexture.isCube ? Mc.setTexture("refractionCubeSampler", this._refractionTexture) : Mc.setTexture("refraction2DSampler", this._refractionTexture))), this.knc().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(nc) && this.knc().depthPeelingRenderer.bind(Mc), this._eventInfo.subMesh = Vc, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, yB.d)(Mc, this, Ic), this.bindEyePosition(Mc)
            } else Tc && (this._needToBindSceneUbo = !0);
            !Oc && this.isFrozen && !Tc || !Ic.lightsEnabled || this._disableLighting || (0, pc.r)(Ic, nc, Mc, rB, this._maxSimultaneousLights), !Oc && this.isFrozen || ((Ic.fogEnabled && nc.applyFog && Ic.fogMode !== uc.h.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || nc.receiveShadows || rB.PREPASS || rB.CLUSTLIGHT_BATCH) && this.bindView(Mc), (0, pc.j)(Ic, nc, Mc), rB.NUM_MORPH_INFLUENCERS && (0, pc.w)(nc, Mc), rB.BAKED_VERTEX_ANIMATION_TEXTURE && nc.bakedVertexAnimationManager?.bind(Mc, rB.INSTANCES), this.useLogarithmicDepth && (0, pc.s)(rB, Mc, Ic), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(nc, this._activeEffect, Vc), fc.update()
          }
          _canBindRunFollower(Bc, nc, Vc, Ic, rB) {
            const uc = Bc.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === cB.prototype.isReadyForSubMesh && this.bindForSubMesh === cB.prototype.bindForSubMesh && this._mustRebind === mB.c.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !nc._features.needToAlwaysBindUniformBuffers && !(uc && uc.enabled && uc.currentRTisSceneRT) && !lc.b._Configurations[nc.currentRenderPassId] && !Ic.materialDefines?.OBJECTSPACE_NORMALMAP && !Vc.skeleton && !rB._bonesComputationForcedToCPU
          }
          _bindRunFollower(cB, Bc, nc, Vc) {
            this._activeEffect = Vc, Bc.getMeshUniformBuffer().bindToEffect(Vc, "Mesh"), Bc.transferToEffect(cB);
            const Ic = this._uniformBuffer;
            Ic.bindToEffect(Vc, "Material");
            const rB = this._scene.activeCamera;
            rB ? Ic.updateFloat4("cameraInfo", rB.minZ, rB.maxZ, 0, 0) : Ic.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const uc = this.textureRepetitionHexTilingParams;
            Ic.updateFloat4("vTextureRepetitionHexTilingParams", uc[0], uc[1], uc[2], uc[3]), this._afterBind(Bc, Vc, nc), Ic.update()
          }
          getAnimatables() {
            const cB = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && cB.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && cB.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && cB.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && cB.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && cB.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && cB.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && cB.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && cB.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && cB.push(this._refractionTexture), cB
          }
          getActiveTextures() {
            const cB = super.getActiveTextures();
            return this._diffuseTexture && cB.push(this._diffuseTexture), this._ambientTexture && cB.push(this._ambientTexture), this._opacityTexture && cB.push(this._opacityTexture), this._reflectionTexture && cB.push(this._reflectionTexture), this._emissiveTexture && cB.push(this._emissiveTexture), this._specularTexture && cB.push(this._specularTexture), this._bumpTexture && cB.push(this._bumpTexture), this._lightmapTexture && cB.push(this._lightmapTexture), this._refractionTexture && cB.push(this._refractionTexture), cB
          }
          hasTexture(cB) {
            return !!super.hasTexture(cB) || (this._diffuseTexture === cB || (this._ambientTexture === cB || (this._opacityTexture === cB || (this._reflectionTexture === cB || (this._emissiveTexture === cB || (this._specularTexture === cB || (this._bumpTexture === cB || (this._lightmapTexture === cB || this._refractionTexture === cB))))))))
          }
          dispose(cB, Bc) {
            Bc && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(cB, Bc)
          }
          clone(Bc) {
            let nc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Vc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const Ic = hc.e.Clone((() => new cB(Bc, this.knc())), this, {
              cloneTexturesOnlyOnce: nc
            });
            return Ic.name = Bc, Ic.id = Bc, this.stencil.copyTo(Ic.stencil), this._clonePlugins(Ic, Vc), Ic
          }
          static Parse(Bc, nc, Vc) {
            const Ic = hc.e.Parse((() => new cB(Bc.name, nc)), Bc, nc, Vc);
            return Bc.stencil && Ic.stencil.parse(Bc.stencil, nc, Vc), Tc.c._ParsePlugins(Bc, Ic, nc, Vc), Ic
          }
          static get DiffuseTextureEnabled() {
            return ec.c.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(cB) {
            ec.c.DiffuseTextureEnabled = cB
          }
          static get DetailTextureEnabled() {
            return ec.c.DetailTextureEnabled
          }
          static set DetailTextureEnabled(cB) {
            ec.c.DetailTextureEnabled = cB
          }
          static get AmbientTextureEnabled() {
            return ec.c.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(cB) {
            ec.c.AmbientTextureEnabled = cB
          }
          static get OpacityTextureEnabled() {
            return ec.c.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(cB) {
            ec.c.OpacityTextureEnabled = cB
          }
          static get ReflectionTextureEnabled() {
            return ec.c.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(cB) {
            ec.c.ReflectionTextureEnabled = cB
          }
          static get EmissiveTextureEnabled() {
            return ec.c.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(cB) {
            ec.c.EmissiveTextureEnabled = cB
          }
          static get SpecularTextureEnabled() {
            return ec.c.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(cB) {
            ec.c.SpecularTextureEnabled = cB
          }
          static get BumpTextureEnabled() {
            return ec.c.BumpTextureEnabled
          }
          static set BumpTextureEnabled(cB) {
            ec.c.BumpTextureEnabled = cB
          }
          static get LightmapTextureEnabled() {
            return ec.c.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(cB) {
            ec.c.LightmapTextureEnabled = cB
          }
          static get RefractionTextureEnabled() {
            return ec.c.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(cB) {
            ec.c.RefractionTextureEnabled = cB
          }
          static get ColorGradingTextureEnabled() {
            return ec.c.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(cB) {
            ec.c.ColorGradingTextureEnabled = cB
          }
          static get FresnelEnabled() {
            return ec.c.FresnelEnabled
          }
          static set FresnelEnabled(cB) {
            ec.c.FresnelEnabled = cB
          }
        }, Bc = new WeakMap, qB = new WeakMap, fc = new WeakMap, Yc = new WeakMap, Lc = new WeakMap, gB = new WeakMap, Uc = new WeakMap, bB = new WeakMap, Qc = new WeakMap, Dc = new WeakMap, Nc = new WeakMap, Ec = new WeakMap, oc = new WeakMap, Wc = new WeakMap, wc = new WeakMap, kB = new WeakMap, Xc = new WeakMap, Hc = new WeakMap, Fc = new WeakMap, Jc = new WeakMap, jB = new WeakMap, Rc = new WeakMap, iB = new WeakMap, Kc = new WeakMap, xB = new WeakMap, dc = new WeakMap, Ac = new WeakMap, Gc = new WeakMap, cn = new WeakMap, BB = new WeakMap, nB = new WeakMap, VB = new WeakMap, (() => {
          const Bc = "function" === typeof Symbol && Symbol.metadata ? Object.create(gV[Symbol.metadata] ?? null) : void 0;
          IB = [(0, Ic.F)("diffuseTexture")], rn = [(0, Ic.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], uB = [(0, Ic.F)("ambientTexture")], sB = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], MB = [(0, Ic.F)("opacityTexture")], PB = [(0, Ic.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], qn = [(0, Ic.F)("reflectionTexture")], OB = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], TB = [(0, Ic.F)("emissiveTexture")], fB = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], mn = [(0, Ic.F)("specularTexture")], eB = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], tn = [(0, Ic.F)("bumpTexture")], SB = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], yn = [(0, Ic.F)("lightmapTexture")], zn = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], pB = [(0, Ic.F)("refractionTexture")], hB = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], an = [(0, Ic.o)("ambient")], lB = [(0, Ic.o)("diffuse")], YB = [(0, Ic.o)("specular")], LB = [(0, Ic.o)("emissive")], gn = [(0, Ic.M)()], UB = [(0, Ic.M)("useAlphaFromDiffuseTexture")], bn = [() => ({
            init(cB) {
              return void 0 === cB && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = cB), cB
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(cB) {
              this._useAlphaFromDiffuseTexture = cB
            }
          })], ZB = [(0, Ic.M)("useEmissiveAsIllumination")], QB = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], CB = [(0, Ic.M)("linkEmissiveWithDiffuse")], vn = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], DB = [(0, Ic.M)("useSpecularOverAlpha")], NB = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], EB = [(0, Ic.M)("useReflectionOverAlpha")], oB = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], WB = [(0, Ic.M)("disableLighting")], wB = [(0, Ic.d)("_markAllSubMeshesAsLightsDirty")], kn = [(0, Ic.M)("useObjectSpaceNormalMap")], XB = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], HB = [(0, Ic.M)("useParallax")], FB = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], JB = [(0, Ic.M)("useParallaxOcclusion")], jn = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], RB = [(0, Ic.M)()], KB = [(0, Ic.M)("roughness")], xn = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], dB = [(0, Ic.M)()], AB = [(0, Ic.M)()], GB = [(0, Ic.M)()], cV = [(0, Ic.M)("useLightmapAsShadowmap")], Bn = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], nn = [(0, Ic.s)("diffuseFresnelParameters")], Vn = [(0, Ic.d)("_markAllSubMeshesAsFresnelDirty")], In = [(0, Ic.s)("opacityFresnelParameters")], rV = [(0, Ic.d)("_markAllSubMeshesAsFresnelAndMiscDirty")], un = [(0, Ic.s)("reflectionFresnelParameters")], sn = [(0, Ic.d)("_markAllSubMeshesAsFresnelDirty")], Mn = [(0, Ic.s)("refractionFresnelParameters")], Pn = [(0, Ic.d)("_markAllSubMeshesAsFresnelDirty")], qV = [(0, Ic.s)("emissiveFresnelParameters")], On = [(0, Ic.d)("_markAllSubMeshesAsFresnelDirty")], Tn = [(0, Ic.M)("useReflectionFresnelFromSpecular")], fn = [(0, Ic.d)("_markAllSubMeshesAsFresnelDirty")], mV = [(0, Ic.M)("useGlossinessFromSpecularMapAlpha")], en = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], tV = [(0, Ic.M)("maxSimultaneousLights")], Sn = [(0, Ic.d)("_markAllSubMeshesAsLightsDirty")], yV = [(0, Ic.M)("invertNormalMapX")], zV = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], pn = [(0, Ic.M)("invertNormalMapY")], hn = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], aV = [(0, Ic.M)("twoSidedLighting")], lnc = [(0, Ic.d)("_markAllSubMeshesAsTexturesDirty")], Yn = [(0, Ic.M)("applyDecalMapAfterDetailMap")], Ln = [(0, Ic.d)("_markAllSubMeshesAsMiscDirty")], (0, Vc.g)(cB, null, rn, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "diffuseTexture" in cB,
              get: cB => cB.diffuseTexture,
              set: (cB, Bc) => {
                cB.diffuseTexture = Bc
              }
            },
            metadata: Bc
          }, Zn, Qn), (0, Vc.g)(cB, null, sB, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "ambientTexture" in cB,
              get: cB => cB.ambientTexture,
              set: (cB, Bc) => {
                cB.ambientTexture = Bc
              }
            },
            metadata: Bc
          }, Dn, Nn), (0, Vc.g)(cB, null, PB, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "opacityTexture" in cB,
              get: cB => cB.opacityTexture,
              set: (cB, Bc) => {
                cB.opacityTexture = Bc
              }
            },
            metadata: Bc
          }, Wn, wn), (0, Vc.g)(cB, null, OB, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "reflectionTexture" in cB,
              get: cB => cB.reflectionTexture,
              set: (cB, Bc) => {
                cB.reflectionTexture = Bc
              }
            },
            metadata: Bc
          }, Hn, Fn), (0, Vc.g)(cB, null, fB, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "emissiveTexture" in cB,
              get: cB => cB.emissiveTexture,
              set: (cB, Bc) => {
                cB.emissiveTexture = Bc
              }
            },
            metadata: Bc
          }, Rn, iV), (0, Vc.g)(cB, null, eB, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "specularTexture" in cB,
              get: cB => cB.specularTexture,
              set: (cB, Bc) => {
                cB.specularTexture = Bc
              }
            },
            metadata: Bc
          }, dn, An), (0, Vc.g)(cB, null, SB, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "bumpTexture" in cB,
              get: cB => cB.bumpTexture,
              set: (cB, Bc) => {
                cB.bumpTexture = Bc
              }
            },
            metadata: Bc
          }, BV, nV), (0, Vc.g)(cB, null, zn, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "lightmapTexture" in cB,
              get: cB => cB.lightmapTexture,
              set: (cB, Bc) => {
                cB.lightmapTexture = Bc
              }
            },
            metadata: Bc
          }, rI, uV), (0, Vc.g)(cB, null, hB, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "refractionTexture" in cB,
              get: cB => cB.refractionTexture,
              set: (cB, Bc) => {
                cB.refractionTexture = Bc
              }
            },
            metadata: Bc
          }, PV, qI), (0, Vc.g)(cB, null, bn, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "useAlphaFromDiffuseTexture" in cB,
              get: cB => cB.useAlphaFromDiffuseTexture,
              set: (cB, Bc) => {
                cB.useAlphaFromDiffuseTexture = Bc
              }
            },
            metadata: Bc
          }, lV, YV), (0, Vc.g)(cB, null, QB, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: cB => "useEmissiveAsIllumination" in cB,
              get: cB => cB.useEmissiveAsIllumination,
              set: (cB, Bc) => {
                cB.useEmissiveAsIllumination = Bc
              }
            },
            metadata: Bc
          }, UV, bI), (0, Vc.g)(cB, null, vn, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: cB => "linkEmissiveWithDiffuse" in cB,
              get: cB => cB.linkEmissiveWithDiffuse,
              set: (cB, Bc) => {
                cB.linkEmissiveWithDiffuse = Bc
              }
            },
            metadata: Bc
          }, CV, vI), (0, Vc.g)(cB, null, NB, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: cB => "useSpecularOverAlpha" in cB,
              get: cB => cB.useSpecularOverAlpha,
              set: (cB, Bc) => {
                cB.useSpecularOverAlpha = Bc
              }
            },
            metadata: Bc
          }, EV, oV), (0, Vc.g)(cB, null, oB, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: cB => "useReflectionOverAlpha" in cB,
              get: cB => cB.useReflectionOverAlpha,
              set: (cB, Bc) => {
                cB.useReflectionOverAlpha = Bc
              }
            },
            metadata: Bc
          }, kI, XV), (0, Vc.g)(cB, null, wB, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: cB => "disableLighting" in cB,
              get: cB => cB.disableLighting,
              set: (cB, Bc) => {
                cB.disableLighting = Bc
              }
            },
            metadata: Bc
          }, JV, jI), (0, Vc.g)(cB, null, XB, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: cB => "useObjectSpaceNormalMap" in cB,
              get: cB => cB.useObjectSpaceNormalMap,
              set: (cB, Bc) => {
                cB.useObjectSpaceNormalMap = Bc
              }
            },
            metadata: Bc
          }, KV, xI), (0, Vc.g)(cB, null, FB, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: cB => "useParallax" in cB,
              get: cB => cB.useParallax,
              set: (cB, Bc) => {
                cB.useParallax = Bc
              }
            },
            metadata: Bc
          }, GV, cr), (0, Vc.g)(cB, null, jn, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: cB => "useParallaxOcclusion" in cB,
              get: cB => cB.useParallaxOcclusion,
              set: (cB, Bc) => {
                cB.useParallaxOcclusion = Bc
              }
            },
            metadata: Bc
          }, VI, II), (0, Vc.g)(cB, null, xn, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: cB => "roughness" in cB,
              get: cB => cB.roughness,
              set: (cB, Bc) => {
                cB.roughness = Bc
              }
            },
            metadata: Bc
          }, PI, qr), (0, Vc.g)(cB, null, Bn, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: cB => "useLightmapAsShadowmap" in cB,
              get: cB => cB.useLightmapAsShadowmap,
              set: (cB, Bc) => {
                cB.useLightmapAsShadowmap = Bc
              }
            },
            metadata: Bc
          }, zr, pI), (0, Vc.g)(cB, null, Vn, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: cB => "diffuseFresnelParameters" in cB,
              get: cB => cB.diffuseFresnelParameters,
              set: (cB, Bc) => {
                cB.diffuseFresnelParameters = Bc
              }
            },
            metadata: Bc
          }, lI, YI), (0, Vc.g)(cB, null, rV, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: cB => "opacityFresnelParameters" in cB,
              get: cB => cB.opacityFresnelParameters,
              set: (cB, Bc) => {
                cB.opacityFresnelParameters = Bc
              }
            },
            metadata: Bc
          }, UI, br), (0, Vc.g)(cB, null, sn, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: cB => "reflectionFresnelParameters" in cB,
              get: cB => cB.reflectionFresnelParameters,
              set: (cB, Bc) => {
                cB.reflectionFresnelParameters = Bc
              }
            },
            metadata: Bc
          }, CI, vr), (0, Vc.g)(cB, null, Pn, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: cB => "refractionFresnelParameters" in cB,
              get: cB => cB.refractionFresnelParameters,
              set: (cB, Bc) => {
                cB.refractionFresnelParameters = Bc
              }
            },
            metadata: Bc
          }, EI, oI), (0, Vc.g)(cB, null, On, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: cB => "emissiveFresnelParameters" in cB,
              get: cB => cB.emissiveFresnelParameters,
              set: (cB, Bc) => {
                cB.emissiveFresnelParameters = Bc
              }
            },
            metadata: Bc
          }, kr, XI), (0, Vc.g)(cB, null, fn, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: cB => "useReflectionFresnelFromSpecular" in cB,
              get: cB => cB.useReflectionFresnelFromSpecular,
              set: (cB, Bc) => {
                cB.useReflectionFresnelFromSpecular = Bc
              }
            },
            metadata: Bc
          }, JI, jr), (0, Vc.g)(cB, null, en, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: cB => "useGlossinessFromSpecularMapAlpha" in cB,
              get: cB => cB.useGlossinessFromSpecularMapAlpha,
              set: (cB, Bc) => {
                cB.useGlossinessFromSpecularMapAlpha = Bc
              }
            },
            metadata: Bc
          }, KI, xr), (0, Vc.g)(cB, null, Sn, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: cB => "maxSimultaneousLights" in cB,
              get: cB => cB.maxSimultaneousLights,
              set: (cB, Bc) => {
                cB.maxSimultaneousLights = Bc
              }
            },
            metadata: Bc
          }, GI, cu), (0, Vc.g)(cB, null, zV, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: cB => "invertNormalMapX" in cB,
              get: cB => cB.invertNormalMapX,
              set: (cB, Bc) => {
                cB.invertNormalMapX = Bc
              }
            },
            metadata: Bc
          }, Vr, Ir), (0, Vc.g)(cB, null, hn, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: cB => "invertNormalMapY" in cB,
              get: cB => cB.invertNormalMapY,
              set: (cB, Bc) => {
                cB.invertNormalMapY = Bc
              }
            },
            metadata: Bc
          }, sr, Mr), (0, Vc.g)(cB, null, lnc, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: cB => "twoSidedLighting" in cB,
              get: cB => cB.twoSidedLighting,
              set: (cB, Bc) => {
                cB.twoSidedLighting = Bc
              }
            },
            metadata: Bc
          }, Or, Tr), (0, Vc.g)(cB, null, Ln, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: cB => "applyDecalMapAfterDetailMap" in cB,
              get: cB => cB.applyDecalMapAfterDetailMap,
              set: (cB, Bc) => {
                cB.applyDecalMapAfterDetailMap = Bc
              }
            },
            metadata: Bc
          }, er, tu), (0, Vc.g)(null, null, IB, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "_diffuseTexture" in cB,
              get: cB => cB._diffuseTexture,
              set: (cB, Bc) => {
                cB._diffuseTexture = Bc
              }
            },
            metadata: Bc
          }, Un, bV), (0, Vc.g)(null, null, uB, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "_ambientTexture" in cB,
              get: cB => cB._ambientTexture,
              set: (cB, Bc) => {
                cB._ambientTexture = Bc
              }
            },
            metadata: Bc
          }, Cn, vV), (0, Vc.g)(null, null, MB, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "_opacityTexture" in cB,
              get: cB => cB._opacityTexture,
              set: (cB, Bc) => {
                cB._opacityTexture = Bc
              }
            },
            metadata: Bc
          }, En, onc), (0, Vc.g)(null, null, qn, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "_reflectionTexture" in cB,
              get: cB => cB._reflectionTexture,
              set: (cB, Bc) => {
                cB._reflectionTexture = Bc
              }
            },
            metadata: Bc
          }, kV, Xn), (0, Vc.g)(null, null, TB, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "_emissiveTexture" in cB,
              get: cB => cB._emissiveTexture,
              set: (cB, Bc) => {
                cB._emissiveTexture = Bc
              }
            },
            metadata: Bc
          }, Jn, jV), (0, Vc.g)(null, null, mn, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "_specularTexture" in cB,
              get: cB => cB._specularTexture,
              set: (cB, Bc) => {
                cB._specularTexture = Bc
              }
            },
            metadata: Bc
          }, Kn, xV), (0, Vc.g)(null, null, tn, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "_bumpTexture" in cB,
              get: cB => cB._bumpTexture,
              set: (cB, Bc) => {
                cB._bumpTexture = Bc
              }
            },
            metadata: Bc
          }, Gn, cI), (0, Vc.g)(null, null, yn, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "_lightmapTexture" in cB,
              get: cB => cB._lightmapTexture,
              set: (cB, Bc) => {
                cB._lightmapTexture = Bc
              }
            },
            metadata: Bc
          }, VV, IV), (0, Vc.g)(null, null, pB, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "_refractionTexture" in cB,
              get: cB => cB._refractionTexture,
              set: (cB, Bc) => {
                cB._refractionTexture = Bc
              }
            },
            metadata: Bc
          }, sV, MV), (0, Vc.g)(null, null, an, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: cB => "ambientColor" in cB,
              get: cB => cB.ambientColor,
              set: (cB, Bc) => {
                cB.ambientColor = Bc
              }
            },
            metadata: Bc
          }, OV, TV), (0, Vc.g)(null, null, lB, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: cB => "diffuseColor" in cB,
              get: cB => cB.diffuseColor,
              set: (cB, Bc) => {
                cB.diffuseColor = Bc
              }
            },
            metadata: Bc
          }, fV, mI), (0, Vc.g)(null, null, YB, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: cB => "specularColor" in cB,
              get: cB => cB.specularColor,
              set: (cB, Bc) => {
                cB.specularColor = Bc
              }
            },
            metadata: Bc
          }, eV, tI), (0, Vc.g)(null, null, LB, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: cB => "emissiveColor" in cB,
              get: cB => cB.emissiveColor,
              set: (cB, Bc) => {
                cB.emissiveColor = Bc
              }
            },
            metadata: Bc
          }, SV, yI), (0, Vc.g)(null, null, gn, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: cB => "specularPower" in cB,
              get: cB => cB.specularPower,
              set: (cB, Bc) => {
                cB.specularPower = Bc
              }
            },
            metadata: Bc
          }, zI, pV), (0, Vc.g)(null, null, UB, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: cB => "_useAlphaFromDiffuseTexture" in cB,
              get: cB => cB._useAlphaFromDiffuseTexture,
              set: (cB, Bc) => {
                cB._useAlphaFromDiffuseTexture = Bc
              }
            },
            metadata: Bc
          }, hV, aI), (0, Vc.g)(null, null, ZB, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: cB => "_useEmissiveAsIllumination" in cB,
              get: cB => cB._useEmissiveAsIllumination,
              set: (cB, Bc) => {
                cB._useEmissiveAsIllumination = Bc
              }
            },
            metadata: Bc
          }, LV, gI), (0, Vc.g)(null, null, CB, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: cB => "_linkEmissiveWithDiffuse" in cB,
              get: cB => cB._linkEmissiveWithDiffuse,
              set: (cB, Bc) => {
                cB._linkEmissiveWithDiffuse = Bc
              }
            },
            metadata: Bc
          }, ZV, QV), (0, Vc.g)(null, null, DB, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: cB => "_useSpecularOverAlpha" in cB,
              get: cB => cB._useSpecularOverAlpha,
              set: (cB, Bc) => {
                cB._useSpecularOverAlpha = Bc
              }
            },
            metadata: Bc
          }, DV, NV), (0, Vc.g)(null, null, EB, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: cB => "_useReflectionOverAlpha" in cB,
              get: cB => cB._useReflectionOverAlpha,
              set: (cB, Bc) => {
                cB._useReflectionOverAlpha = Bc
              }
            },
            metadata: Bc
          }, WV, wV), (0, Vc.g)(null, null, WB, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: cB => "_disableLighting" in cB,
              get: cB => cB._disableLighting,
              set: (cB, Bc) => {
                cB._disableLighting = Bc
              }
            },
            metadata: Bc
          }, HV, FV), (0, Vc.g)(null, null, kn, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: cB => "_useObjectSpaceNormalMap" in cB,
              get: cB => cB._useObjectSpaceNormalMap,
              set: (cB, Bc) => {
                cB._useObjectSpaceNormalMap = Bc
              }
            },
            metadata: Bc
          }, RV, iI), (0, Vc.g)(null, null, HB, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: cB => "_useParallax" in cB,
              get: cB => cB._useParallax,
              set: (cB, Bc) => {
                cB._useParallax = Bc
              }
            },
            metadata: Bc
          }, dV, AV), (0, Vc.g)(null, null, JB, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: cB => "_useParallaxOcclusion" in cB,
              get: cB => cB._useParallaxOcclusion,
              set: (cB, Bc) => {
                cB._useParallaxOcclusion = Bc
              }
            },
            metadata: Bc
          }, BI, nI), (0, Vc.g)(null, null, RB, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: cB => "parallaxScaleBias" in cB,
              get: cB => cB.parallaxScaleBias,
              set: (cB, Bc) => {
                cB.parallaxScaleBias = Bc
              }
            },
            metadata: Bc
          }, rr, uI), (0, Vc.g)(null, null, KB, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: cB => "_roughness" in cB,
              get: cB => cB._roughness,
              set: (cB, Bc) => {
                cB._roughness = Bc
              }
            },
            metadata: Bc
          }, sI, MI), (0, Vc.g)(null, null, dB, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: cB => "indexOfRefraction" in cB,
              get: cB => cB.indexOfRefraction,
              set: (cB, Bc) => {
                cB.indexOfRefraction = Bc
              }
            },
            metadata: Bc
          }, OI, TI), (0, Vc.g)(null, null, AB, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: cB => "invertRefractionY" in cB,
              get: cB => cB.invertRefractionY,
              set: (cB, Bc) => {
                cB.invertRefractionY = Bc
              }
            },
            metadata: Bc
          }, fI, mr), (0, Vc.g)(null, null, GB, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: cB => "alphaCutOff" in cB,
              get: cB => cB.alphaCutOff,
              set: (cB, Bc) => {
                cB.alphaCutOff = Bc
              }
            },
            metadata: Bc
          }, eI, tr), (0, Vc.g)(null, null, cV, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: cB => "_useLightmapAsShadowmap" in cB,
              get: cB => cB._useLightmapAsShadowmap,
              set: (cB, Bc) => {
                cB._useLightmapAsShadowmap = Bc
              }
            },
            metadata: Bc
          }, SI, yr), (0, Vc.g)(null, null, nn, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: cB => "_diffuseFresnelParameters" in cB,
              get: cB => cB._diffuseFresnelParameters,
              set: (cB, Bc) => {
                cB._diffuseFresnelParameters = Bc
              }
            },
            metadata: Bc
          }, hI, ar), (0, Vc.g)(null, null, In, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: cB => "_opacityFresnelParameters" in cB,
              get: cB => cB._opacityFresnelParameters,
              set: (cB, Bc) => {
                cB._opacityFresnelParameters = Bc
              }
            },
            metadata: Bc
          }, LI, gr), (0, Vc.g)(null, null, un, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: cB => "_reflectionFresnelParameters" in cB,
              get: cB => cB._reflectionFresnelParameters,
              set: (cB, Bc) => {
                cB._reflectionFresnelParameters = Bc
              }
            },
            metadata: Bc
          }, ZI, QI), (0, Vc.g)(null, null, Mn, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: cB => "_refractionFresnelParameters" in cB,
              get: cB => cB._refractionFresnelParameters,
              set: (cB, Bc) => {
                cB._refractionFresnelParameters = Bc
              }
            },
            metadata: Bc
          }, DI, NI), (0, Vc.g)(null, null, qV, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: cB => "_emissiveFresnelParameters" in cB,
              get: cB => cB._emissiveFresnelParameters,
              set: (cB, Bc) => {
                cB._emissiveFresnelParameters = Bc
              }
            },
            metadata: Bc
          }, WI, wI), (0, Vc.g)(null, null, Tn, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: cB => "_useReflectionFresnelFromSpecular" in cB,
              get: cB => cB._useReflectionFresnelFromSpecular,
              set: (cB, Bc) => {
                cB._useReflectionFresnelFromSpecular = Bc
              }
            },
            metadata: Bc
          }, HI, FI), (0, Vc.g)(null, null, mV, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: cB => "_useGlossinessFromSpecularMapAlpha" in cB,
              get: cB => cB._useGlossinessFromSpecularMapAlpha,
              set: (cB, Bc) => {
                cB._useGlossinessFromSpecularMapAlpha = Bc
              }
            },
            metadata: Bc
          }, RI, ir), (0, Vc.g)(null, null, tV, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: cB => "_maxSimultaneousLights" in cB,
              get: cB => cB._maxSimultaneousLights,
              set: (cB, Bc) => {
                cB._maxSimultaneousLights = Bc
              }
            },
            metadata: Bc
          }, dI, AI), (0, Vc.g)(null, null, yV, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: cB => "_invertNormalMapX" in cB,
              get: cB => cB._invertNormalMapX,
              set: (cB, Bc) => {
                cB._invertNormalMapX = Bc
              }
            },
            metadata: Bc
          }, Br, nr), (0, Vc.g)(null, null, pn, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: cB => "_invertNormalMapY" in cB,
              get: cB => cB._invertNormalMapY,
              set: (cB, Bc) => {
                cB._invertNormalMapY = Bc
              }
            },
            metadata: Bc
          }, ru, ur), (0, Vc.g)(null, null, aV, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: cB => "_twoSidedLighting" in cB,
              get: cB => cB._twoSidedLighting,
              set: (cB, Bc) => {
                cB._twoSidedLighting = Bc
              }
            },
            metadata: Bc
          }, Pr, qu), (0, Vc.g)(null, null, Yn, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: cB => "_applyDecalMapAfterDetailMap" in cB,
              get: cB => cB._applyDecalMapAfterDetailMap,
              set: (cB, Bc) => {
                cB._applyDecalMapAfterDetailMap = Bc
              }
            },
            metadata: Bc
          }, fr, mu), Bc && Object.defineProperty(cB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Bc
          })
        })(), cB.ForceGLSL = !1, cB._ShaderLoader = new aB.e((() => [Promise.all([nc.e(292), nc.e(291)]).then((() => nc(39799))), Promise.all([nc.e(297), nc.e(293), nc.e(306), nc.e(296)]).then((() => nc(39979)))]), (() => [Promise.all([nc.e(313), nc.e(308)]).then((() => nc(40166))), Promise.all([nc.e(314), nc.e(324), nc.e(310)]).then((() => nc(40359)))])), cB
      })(),
      Nc = !1;

    function Ec() {
      Nc || (Nc = !0, (0, Oc.d)(), (0, Uc.d)("BABYLON.StandardMaterial", Dc), uc.h.DefaultMaterialFactory = cB => new Dc("default material", cB))
    }
    Object.getOwnPropertyDescriptor(Dc.prototype, "decalMap") || Object.defineProperty(Dc.prototype, "decalMap", (0, bB.e)("StandardMaterial", "decalMap"))
  },
  38402: (cB, Bc, nc) => {
    function Vc(cB) {
      return class extends cB {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    nc.d(Bc, {
      d: () => Vc
    })
  },
  38391: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc
    });
    class Vc {
      constructor(cB, Bc) {
        this._webGL = {
          load: cB,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: Bc,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(cB) {
        const Bc = 1 === cB ? this._webGPU : this._webGL;
        return Bc.loaded ? void 0 : async () => {
          await this._loadAsync(Bc)
        }
      }
      async _loadAsync(cB) {
        if (cB.loaded) return;
        let Bc = cB.loadPromise;
        const nc = null === Bc;
        nc && (Bc = Promise.all(cB.load()), cB.loadPromise = Bc);
        let Vc = !1;
        try {
          await Bc, Vc = !0
        } finally {
          nc && this._completeLoad(cB, Vc)
        }
      }
      _completeLoad(cB, Bc) {
        cB.loaded = Bc, cB.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);