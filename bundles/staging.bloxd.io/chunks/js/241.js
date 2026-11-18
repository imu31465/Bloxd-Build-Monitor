export const id = 241;
export const ids = [241];
export const modules = {
  39130: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB
    });
    var VB = dB(38759);

    function yB(BB) {
      return class extends BB {
        constructor() {
          super(...arguments);
          const BB = new.target;
          if (!BB[Symbol.metadata]) {
            const TB = Object.getPrototypeOf(BB)?.[Symbol.metadata];
            BB[Symbol.metadata] = TB ? Object.create(TB) : {}
          }
          const TB = (0, VB.c)(BB[Symbol.metadata]);
          TB._imageProcessingConfiguration || (TB._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(BB) {
          this._attachImageProcessingConfiguration(BB), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(BB) {
          BB !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !BB && this.jU ? this._imageProcessingConfiguration = this.jU().imageProcessingConfiguration : BB && (this._imageProcessingConfiguration = BB), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(BB) {
          this.imageProcessingConfiguration.colorCurvesEnabled = BB
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(BB) {
          this.imageProcessingConfiguration.colorGradingEnabled = BB
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(BB) {
          this._imageProcessingConfiguration.toneMappingEnabled = BB
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(BB) {
          this._imageProcessingConfiguration.exposure = BB
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(BB) {
          this._imageProcessingConfiguration.contrast = BB
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(BB) {
          this._imageProcessingConfiguration.colorGradingTexture = BB
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(BB) {
          this._imageProcessingConfiguration.colorCurves = BB
        }
      }
    }
  },
  39030: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB,
      h: () => yB
    });
    var VB = dB(39034);

    function yB(BB) {
      return class extends BB {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class pB extends VB.d {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  39090: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => kB
    });
    var VB = dB(38745),
      yB = dB(39040),
      pB = dB(38750),
      lB = dB(39078),
      JB = dB(39034),
      YB = dB(39099),
      gB = dB(39073);
    class oB extends JB.d {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let kB = (() => {
      var BB, TB, dB, JB;
      let kB, LB, OB, DB, uB, HB, EB = YB.b,
        vB = [],
        mB = [],
        iB = [],
        NB = [],
        tB = [],
        fB = [],
        sB = [],
        MB = [],
        zB = [],
        wB = [],
        UB = [],
        FB = [];
      return BB = class extends EB {
        get texture() {
          return (0, VB.b)(this, TB, "f")
        }
        set texture(BB) {
          (0, VB.f)(this, TB, BB, "f")
        }
        get normalBlendMethod() {
          return (0, VB.b)(this, dB, "f")
        }
        set normalBlendMethod(BB) {
          (0, VB.f)(this, dB, BB, "f")
        }
        get isEnabled() {
          return (0, VB.b)(this, JB, "f")
        }
        set isEnabled(BB) {
          (0, VB.f)(this, JB, BB, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(BB) {
          let pB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(BB, "DetailMap", 140, new oB, pB), this._texture = null, TB.set(this, (0, VB.h)(this, vB, void 0)), this.diffuseBlendLevel = ((0, VB.h)(this, mB), (0, VB.h)(this, iB, 1)), this.roughnessBlendLevel = ((0, VB.h)(this, NB), (0, VB.h)(this, tB, 1)), this.bumpLevel = ((0, VB.h)(this, fB), (0, VB.h)(this, sB, 1)), this._normalBlendMethod = ((0, VB.h)(this, MB), yB.b.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), dB.set(this, (0, VB.h)(this, zB, void 0)), this._isEnabled = ((0, VB.h)(this, wB), !1), JB.set(this, (0, VB.h)(this, UB, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, VB.h)(this, FB), this._internalMarkAllSubMeshesAsTexturesDirty = BB._dirtyCallbacks[1]
        }
        isReadyForSubMesh(BB, TB, dB) {
          return !this._isEnabled || !(BB._areTexturesDirty && TB.texturesEnabled && dB.getCaps().standardDerivatives && this._texture && lB.d.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(BB, TB) {
          if (this._isEnabled) {
            BB.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const dB = TB.PD();
            BB._areTexturesDirty && (dB.getCaps().standardDerivatives && this._texture && lB.d.DetailTextureEnabled && this._isEnabled ? ((0, gB.S)(this._texture, BB, "DETAIL"), BB.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : BB.DETAIL = !1)
          } else BB.DETAIL = !1
        }
        bindForSubMesh(BB, TB) {
          if (!this._isEnabled) return;
          const dB = this._material.isFrozen;
          BB.useUbo && dB && BB.isSync || this._texture && lB.d.DetailTextureEnabled && (BB.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, gB.u)(this._texture, BB, "detail")), TB.texturesEnabled && this._texture && lB.d.DetailTextureEnabled && BB.setTexture("detailSampler", this._texture)
        }
        hasTexture(BB) {
          return this._texture === BB
        }
        getActiveTextures(BB) {
          this._texture && BB.push(this._texture)
        }
        getAnimatables(BB) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && BB.push(this._texture)
        }
        dispose(BB) {
          BB && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(BB) {
          BB.push("detailSampler")
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
      }, TB = new WeakMap, dB = new WeakMap, JB = new WeakMap, (() => {
        const TB = "function" === typeof Symbol && Symbol.metadata ? Object.create(EB[Symbol.metadata] ?? null) : void 0;
        kB = [(0, pB.M)("detailTexture"), (0, pB.i)("_markAllSubMeshesAsTexturesDirty")], LB = [(0, pB.W)()], OB = [(0, pB.W)()], DB = [(0, pB.W)()], uB = [(0, pB.W)(), (0, pB.i)("_markAllSubMeshesAsTexturesDirty")], HB = [(0, pB.W)(), (0, pB.i)("_markAllSubMeshesAsTexturesDirty")], (0, VB.g)(BB, null, kB, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: BB => "texture" in BB,
            get: BB => BB.texture,
            set: (BB, TB) => {
              BB.texture = TB
            }
          },
          metadata: TB
        }, vB, mB), (0, VB.g)(BB, null, uB, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: BB => "normalBlendMethod" in BB,
            get: BB => BB.normalBlendMethod,
            set: (BB, TB) => {
              BB.normalBlendMethod = TB
            }
          },
          metadata: TB
        }, zB, wB), (0, VB.g)(BB, null, HB, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: BB => "isEnabled" in BB,
            get: BB => BB.isEnabled,
            set: (BB, TB) => {
              BB.isEnabled = TB
            }
          },
          metadata: TB
        }, UB, FB), (0, VB.g)(null, null, LB, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: BB => "diffuseBlendLevel" in BB,
            get: BB => BB.diffuseBlendLevel,
            set: (BB, TB) => {
              BB.diffuseBlendLevel = TB
            }
          },
          metadata: TB
        }, iB, NB), (0, VB.g)(null, null, OB, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: BB => "roughnessBlendLevel" in BB,
            get: BB => BB.roughnessBlendLevel,
            set: (BB, TB) => {
              BB.roughnessBlendLevel = TB
            }
          },
          metadata: TB
        }, tB, fB), (0, VB.g)(null, null, DB, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: BB => "bumpLevel" in BB,
            get: BB => BB.bumpLevel,
            set: (BB, TB) => {
              BB.bumpLevel = TB
            }
          },
          metadata: TB
        }, sB, MB), TB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: TB
        })
      })(), BB
    })()
  },
  39034: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => VB
    });
    class VB {
      constructor(BB) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = BB, BB)
          for (const TB in BB) Object.prototype.hasOwnProperty.call(BB, TB) && this._setDefaultValue(TB)
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
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || BB, this._isDirty = !0
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
        for (const BB of Object.keys(this)) "_" !== BB[0] && this._keys.push(BB);
        if (this._externalProperties)
          for (const BB in this._externalProperties) - 1 === this._keys.indexOf(BB) && this._keys.push(BB)
      }
      isEqual(BB) {
        if (this._keys.length !== BB._keys.length) return !1;
        for (let TB = 0; TB < this._keys.length; TB++) {
          const dB = this._keys[TB];
          if (this[dB] !== BB[dB]) return !1
        }
        return !0
      }
      cloneTo(BB) {
        this._keys.length !== BB._keys.length && (BB._keys = this._keys.slice(0));
        for (let TB = 0; TB < this._keys.length; TB++) {
          const dB = this._keys[TB];
          BB[dB] = this[dB]
        }
      }
      reset() {
        for (const BB of this._keys) this._setDefaultValue(BB)
      }
      _setDefaultValue(BB) {
        const TB = this._externalProperties?.[BB]?.type ?? typeof this[BB],
          dB = this._externalProperties?.[BB]?.default;
        switch (TB) {
          case "number":
            this[BB] = dB ?? 0;
            break;
          case "string":
            this[BB] = dB ?? "";
            break;
          default:
            this[BB] = dB ?? !1
        }
      }
      toString() {
        let BB = "";
        for (let TB = 0; TB < this._keys.length; TB++) {
          const dB = this._keys[TB],
            VB = this[dB];
          switch (typeof VB) {
            case "number":
            case "string":
              BB += "#define " + dB + " " + VB + "\n";
              break;
            default:
              VB && (BB += "#define " + dB + "\n")
          }
        }
        return BB
      }
    }
  },
  39117: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => JB,
      g: () => lB,
      j: () => pB
    });
    var VB, yB = dB(36126);

    function pB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const VB = TB(BB);
      if (!Number.isInteger(VB) || VB < 0 || VB > dB) throw new Error(`Invalid geometry object ID ${VB} for mesh "${BB.name}". Object IDs must be integers between 0 and 0x${dB.toString(16).toUpperCase()}.`);
      return VB
    }

    function lB(BB, TB) {
      const dB = TB(BB);
      if (!Number.isInteger(dB) || dB < 0 || dB > 255 || 0 !== dB && 0 === (63 & dB)) throw new Error(`Invalid geometry mesh-blending tag ${dB} for mesh "${BB.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return dB
    }! function(BB) {
      BB[BB.Zero = 0] = "Zero", BB[BB.One = 1] = "One", BB[BB.MaxViewZ = 2] = "MaxViewZ", BB[BB.NoClear = 3] = "NoClear"
    }(VB || (VB = {}));
    class JB {
      static CreateConfiguration(BB) {
        return JB._Configurations[BB] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: yB.b.Zero(),
          currentViewProjection: yB.b.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, JB._Configurations[BB]
      }
      static DeleteConfiguration(BB) {
        delete JB._Configurations[BB]
      }
      static GetConfiguration(BB) {
        return JB._Configurations[BB]
      }
      static _PrepareConfiguration(BB, TB, dB) {
        const VB = JB._Configurations[BB];
        VB._attachments = TB, VB._colorAttachments = dB, VB._mrtCount = TB.length;
        let yB = "#define PREPASS\n";
        for (const pB of JB.GeometryTextureDescriptions) {
          const BB = VB.defines[pB.defineIndex];
          void 0 !== BB && (yB += `#define ${pB.define}\n#define ${pB.defineIndex} ${BB}\n`)
        }
        VB.objectIdIsRedFormat && (yB += "#define PREPASS_OBJECT_ID_R8\n"), VB._defines = yB + `#define SCENE_MRT_COUNT ${TB.length}\n`
      }
      static _PrepareStringDefines(BB, TB) {
        const dB = JB._Configurations[BB];
        return !!dB?._defines && (TB.push(dB._defines), !0)
      }
      static _BindAttachmentsForEffect(BB, TB) {
        const dB = JB._Configurations[BB.currentRenderPassId];
        return !dB?._attachments || (BB.bindAttachments(TB._multiTarget ? dB._attachments : dB._colorAttachments), TB._multiTarget || void 0 !== dB.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(BB) {
        const TB = JB._Configurations[BB.currentRenderPassId];
        TB?._colorAttachments && BB.bindAttachments(TB._colorAttachments)
      }
      static _BindColorAttachments(BB) {
        const TB = JB._Configurations[BB.currentRenderPassId];
        return !TB?._colorAttachments || (BB.bindAttachments(TB._colorAttachments), void 0 !== TB.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(BB) {
        const TB = JB._Configurations[BB.currentRenderPassId];
        return !TB?._colorAttachments || void 0 !== TB.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(BB, TB) {
        const dB = JB._Configurations[BB.currentRenderPassId];
        if (!dB) return;
        const VB = BB.getAlphaMode(),
          yB = void 0 === dB.defines.PREPASS_COLOR_INDEX || 2 === VB || 1 === VB || 17 === VB;
        TB.setFloat("geometryZeroAlphaDiscard", yB ? 1 : 0)
      }
      static AddUniformsAndSamplers(BB, TB) {
        BB.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(BB, TB) {
        for (const dB of TB)
          if (dB.oN)
            for (const TB of dB.oN) TB._removeDrawWrapper(BB)
      }
      static PrepareDefines(BB, TB, dB) {
        if (!dB._arePrePassDirty) return;
        const VB = JB._Configurations[BB];
        if (!VB) return;
        dB.PREPASS = !0;
        let yB = 0;
        for (let pB = 0; pB < JB.GeometryTextureDescriptions.length; pB++) {
          const BB = JB.GeometryTextureDescriptions[pB],
            TB = BB.define,
            lB = BB.defineIndex,
            YB = VB.defines[lB];
          void 0 !== YB ? (dB[TB] = !0, dB[lB] = YB, yB++) : (dB[TB] = !1, delete dB[lB])
        }
        dB.PREPASS_OBJECT_ID_R8 = VB.objectIdIsRedFormat, dB.SCENE_MRT_COUNT = VB._mrtCount ?? yB, dB.BONES_VELOCITY_ENABLED = TB.useBones && TB.computeBonesUsingShaders && TB.skeleton && !TB.skeleton.isUsingTextureForMatrices && -1 === VB.excludedSkinnedMesh.indexOf(TB)
      }
      static Bind(BB, TB, dB, VB, yB) {
        const YB = JB._Configurations[BB];
        if (!YB) return;
        const gB = dB.jU(),
          oB = gB.PD();
        if (YB.reverseCulling && oB.setStateCullFaceType(gB._mirroredCameraPosition ? yB.cullBackFaces : !yB.cullBackFaces), void 0 !== YB.defines.PREPASS_OBJECT_ID_INDEX) {
          const BB = YB.objectIdIsRedFormat ? 255 : 16777215;
          let VB = dB.uniqueId;
          if (YB.objectIdProvider) VB = pB(dB, YB.objectIdProvider, BB);
          else if (VB > BB) throw new Error(`Invalid geometry object ID ${VB} for mesh "${dB.name}". Object IDs must be integers between 0 and 0x${BB.toString(16).toUpperCase()}.`);
          TB.setFloat("objectId", VB)
        }
        if (void 0 !== YB.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const BB = YB.meshBlendTagProvider ? lB(dB, YB.meshBlendTagProvider) : dB.meshBlendingTag;
          TB.setInt("meshBlendTag", BB)
        }
        if (void 0 !== YB.defines.PREPASS_VELOCITY_INDEX || void 0 !== YB.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const BB = YB._currentWorldMatrices ?? (YB._currentWorldMatrices = {}),
            yB = YB._worldMatrixFrameIds ?? (YB._worldMatrixFrameIds = {});
          if (BB[dB.uniqueId] || (BB[dB.uniqueId] = VB.clone(), YB.previousWorldMatrices[dB.uniqueId] = VB.clone()), yB[dB.uniqueId] !== oB.frameId && (YB.previousWorldMatrices[dB.uniqueId].bdB(BB[dB.uniqueId]), yB[dB.uniqueId] = oB.frameId), BB[dB.uniqueId].bdB(VB), -1 === YB.lastUpdateFrameId ? (YB.lastUpdateFrameId = oB.frameId, YB.previousViewProjection.bdB(gB.getTransformMatrix()), YB.currentViewProjection.bdB(gB.getTransformMatrix())) : YB.currentViewProjection.updateFlag !== gB.getTransformMatrix().updateFlag ? (YB.lastUpdateFrameId = oB.frameId, YB.previousViewProjection.bdB(YB.currentViewProjection), YB.currentViewProjection.bdB(gB.getTransformMatrix())) : YB.lastUpdateFrameId !== oB.frameId && (YB.lastUpdateFrameId = oB.frameId, YB.previousViewProjection.bdB(YB.currentViewProjection)), TB.setMatrix("previousWorld", YB.previousWorldMatrices[dB.uniqueId]), TB.setMatrix("previousViewProjection", YB.previousViewProjection), dB.useBones && dB.computeBonesUsingShaders && dB.skeleton) {
            const BB = dB.skeleton;
            if (!BB.isUsingTextureForMatrices || -1 === TB.getUniformIndex("boneTextureInfo")) {
              const VB = BB.getTransformMatrices(dB);
              VB && (YB.previousBones[dB.uniqueId] || (YB.previousBones[dB.uniqueId] = VB.slice()), TB.setMatrices("mPreviousBones", YB.previousBones[dB.uniqueId]), YB.previousBones[dB.uniqueId].set(VB))
            }
          }
        }
      }
    }
    JB.GeometryTextureDescriptions = [{
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
    }], JB._Configurations = {}
  },
  39099: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => LB,
      d: () => DB
    });
    var VB = dB(38745),
      yB = dB(38750),
      pB = dB(38638),
      lB = dB(38595);
    const JB = new RegExp("^([gimus]+)!");
    class YB {
      constructor(BB) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = BB, this._scene = BB.jU(), this._engine = this._scene.PD()
      }
      _addPlugin(BB) {
        for (let VB = 0; VB < this._plugins.length; ++VB)
          if (this._plugins[VB].name === BB.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !BB.isCompatible(this._material.shaderLanguage)) throw `The plugin "${BB.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const TB = BB.getClassName();
        YB._MaterialPluginClassToMainDefine[TB] || (YB._MaterialPluginClassToMainDefine[TB] = "MATERIALPLUGIN_" + ++YB._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (BB, TB) => this._handlePluginEvent(BB, TB), this._plugins.push(BB), this._plugins.sort(((BB, TB) => BB.priority - TB.priority)), this._codeInjectionPoints = {};
        const dB = {};
        dB[YB._MaterialPluginClassToMainDefine[TB]] = {
          type: "boolean",
          default: !0
        };
        for (const VB of this._plugins) VB.collectDefines(dB), this._collectPointNames("vertex", VB.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", VB.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = dB, !0
      }
      _activatePlugin(BB) {
        -1 === this._activePlugins.indexOf(BB) && (this._activePlugins.push(BB), this._activePlugins.sort(((BB, TB) => BB.priority - TB.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), BB.registerForExtraEvents && (this._activePluginsForExtraEvents.push(BB), this._activePluginsForExtraEvents.sort(((BB, TB) => BB.priority - TB.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(BB) {
        for (let TB = 0; TB < this._plugins.length; ++TB)
          if (this._plugins[TB].name === BB) return this._plugins[TB];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(BB) {
        let TB = !0;
        for (const dB of this._activePlugins) TB = TB && dB.isReadyForSubMesh(BB.defines, this._scene, this._engine, BB.subMesh);
        BB.isReadyForSubMesh = TB
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(BB) {
        for (const TB of this._activePlugins) TB.prepareDefinesBeforeAttributes(BB.defines, this._scene, BB.mesh)
      }
      _handlePluginEventPrepareDefines(BB) {
        for (const TB of this._activePlugins) TB.prepareDefines(BB.defines, this._scene, BB.mesh)
      }
      _handlePluginEventHardBindForSubMesh(BB) {
        for (const TB of this._activePluginsForExtraEvents) TB.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, BB.subMesh)
      }
      _handlePluginEventBindForSubMesh(BB) {
        for (const TB of this._activePlugins) TB.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, BB.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(BB) {
        let TB = !1;
        for (const dB of this._activePluginsForExtraEvents)
          if (TB = dB.hasRenderTargetTextures(), TB) break;
        BB.hasRenderTargetTextures = TB
      }
      _handlePluginEventFillRenderTargetTextures(BB) {
        for (const TB of this._activePluginsForExtraEvents) TB.fillRenderTargetTextures(BB.renderTargets)
      }
      _handlePluginEvent(BB, TB) {
        switch (BB) {
          case 512: {
            const BB = TB;
            for (const TB of this._activePlugins) TB.getActiveTextures(BB.activeTextures);
            break
          }
          case 256: {
            const BB = TB;
            for (const TB of this._activePlugins) TB.getAnimatables(BB.animatables);
            break
          }
          case 1024: {
            const BB = TB;
            let dB = !1;
            for (const TB of this._activePlugins)
              if (dB = TB.hasTexture(BB.texture), dB) break;
            BB.hasTexture = dB;
            break
          }
          case 2: {
            const BB = TB;
            for (const TB of this._plugins) TB.dispose(BB.forceDisposeTextures);
            break
          }
          case 4:
            TB.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const BB = TB;
            for (const TB of this._activePlugins) BB.fallbackRank = TB.addFallbacks(BB.defines, BB.fallbacks, BB.fallbackRank), TB.getAttributes(BB.attributes, this._scene, BB.mesh);
            this._uniformList.length > 0 && BB.uniforms.push(...this._uniformList), this._samplerList.length > 0 && BB.samplers.push(...this._samplerList), this._uboList.length > 0 && BB.uniformBuffersNames.push(...this._uboList), BB.customCode = this._injectCustomCode(BB, BB.customCode);
            break
          }
          case 8: {
            const BB = TB;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const dB = 1 === this._material.shaderLanguage;
            for (const TB of this._plugins) {
              const VB = TB.getUniforms(this._material.shaderLanguage);
              if (VB) {
                if (VB.ubo)
                  for (const TB of VB.ubo) {
                    if (TB.size && TB.type) {
                      const VB = TB.arraySize ?? 0;
                      if (BB.ubo.addUniform(TB.name, TB.size, VB), dB) {
                        let BB;
                        switch (TB.type) {
                          case "mat4":
                            BB = "mat4x4f";
                            break;
                          case "float":
                            BB = "f32";
                            break;
                          default:
                            BB = `${TB.type}f`
                        }
                        this._uboDeclaration += VB > 0 ? `uniform ${TB.name}: array<${BB}, ${VB}>;\n` : `uniform ${TB.name}: ${BB};\n`
                      } else this._uboDeclaration += `${TB.type} ${TB.name}${VB>0?`[${VB}]`:""};\n`
                    }
                    this._uniformList.push(TB.name)
                  }
                VB.vertex && (this._vertexDeclaration += VB.vertex + "\n"), VB.fragment && (this._fragmentDeclaration += VB.fragment + "\n"), VB.externalUniforms && this._uniformList.push(...VB.externalUniforms)
              }
              TB.getSamplers(this._samplerList), TB.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(BB, TB) {
        if (TB)
          for (const dB in TB) this._codeInjectionPoints[BB] || (this._codeInjectionPoints[BB] = {}), this._codeInjectionPoints[BB][dB] = !0
      }
      _injectCustomCode(BB, TB) {
        return (dB, VB) => {
          TB && (VB = TB(dB, VB)), this._uboDeclaration && (VB = VB.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (VB = VB.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (VB = VB.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const yB = this._codeInjectionPoints?.[dB];
          if (!yB) return VB;
          let YB = null;
          for (let TB in yB) {
            let yB = "";
            for (const VB of this._activePlugins) {
              const JB = this._material.shaderLanguage;
              let gB = VB.getCustomCode(dB, JB)?.[TB];
              gB && (VB.resolveIncludes && (null === YB && (YB = {
                defines: [],
                indexParameters: BB.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: lB.e.GetShadersRepository(JB),
                includesShadersStore: lB.e.GetIncludesShadersStore(JB),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                fVB: this._engine.fVB,
                processCodeAfterIncludes: void 0
              }), YB.isFragment = "fragment" === dB, (0, pB.f)(gB, YB, (BB => gB = BB))), yB += gB + "\n")
            }
            if (yB.length > 0)
              if ("!" === TB.charAt(0)) {
                TB = TB.substring(1);
                let BB = "g";
                if ("!" === TB.charAt(0)) BB = "", TB = TB.substring(1);
                else {
                  const dB = JB.exec(TB);
                  dB && dB.length >= 2 && (BB = dB[1], TB = TB.substring(BB.length + 1))
                }
                BB.indexOf("g") < 0 && (BB += "g");
                const dB = new RegExp(TB, BB);
                let pB = dB.exec(VB);
                for (; null !== pB;) {
                  const {
                    index: BB
                  } = pB, TB = gB(yB, pB);
                  VB = VB.substring(0, BB) + TB + VB.substring(BB + pB[0].length), dB.lastIndex = BB + TB.length, pB = dB.exec(VB)
                }
              } else {
                const BB = "#define " + TB;
                VB = VB.replace(BB, "\n" + yB + "\n" + BB)
              }
          }
          return VB
        }
      }
    }
    YB._MaterialPluginClassToMainDefine = {}, YB._MaterialPluginCounter = 0;

    function gB(BB, TB) {
      return BB.replace(/\$(\d+)/g, ((BB, dB) => {
        const VB = Number(dB);
        return VB < TB.length ? TB[VB] : ""
      }))
    }
    var oB = dB(38772),
      kB = dB(36166);
    let LB = (() => {
        var BB;
        let TB, dB, pB, lB, JB = [],
          gB = [],
          kB = [],
          LB = [],
          OB = [],
          DB = [],
          uB = [],
          HB = [];
        return BB = class {
          isCompatible(BB) {
            return 0 === BB
          }
          _enable(BB) {
            BB && this._pluginManager._activatePlugin(this)
          }
          constructor(BB, TB, dB, yB) {
            let pB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              lB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, VB.h)(this, JB, void 0), this.priority = ((0, VB.h)(this, gB), (0, VB.h)(this, kB, 500)), this.resolveIncludes = ((0, VB.h)(this, LB), (0, VB.h)(this, OB, !1)), this.registerForExtraEvents = ((0, VB.h)(this, DB), (0, VB.h)(this, uB, !1)), this.doNotSerialize = ((0, VB.h)(this, HB), !1), this._material = BB, this.name = TB, this.priority = dB, this.resolveIncludes = oB, BB.pluginManager || (BB.pluginManager = new YB(BB), BB.lF.add((() => {
              BB.pluginManager = void 0
            }))), this._pluginDefineNames = yB, this._pluginManager = BB.pluginManager, pB && this._pluginManager._addPlugin(this), lB && this._enable(!0), this.markAllDefinesAsDirty = BB._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(BB, TB, dB, VB) {
            return !0
          }
          hardBindForSubMesh(BB, TB, dB, VB) {}
          bindForSubMesh(BB, TB, dB, VB) {}
          dispose(BB) {}
          getCustomCode(BB) {
            return null
          }
          collectDefines(BB) {
            if (this._pluginDefineNames)
              for (const TB of Object.keys(this._pluginDefineNames)) {
                if ("_" === TB[0]) continue;
                const dB = typeof this._pluginDefineNames[TB];
                BB[TB] = {
                  type: "number" === dB ? "number" : "string" === dB ? "string" : "boolean" === dB ? "boolean" : "object",
                  default: this._pluginDefineNames[TB]
                }
              }
          }
          prepareDefinesBeforeAttributes(BB, TB, dB) {}
          prepareDefines(BB, TB, dB) {}
          hasTexture(BB) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(BB) {}
          getActiveTextures(BB) {}
          getAnimatables(BB) {}
          addFallbacks(BB, TB, dB) {
            return dB
          }
          getSamplers(BB) {}
          getAttributes(BB, TB, dB) {}
          getUniformBuffersNames(BB) {}
          getUniforms() {
            return {}
          }
          copyTo(BB) {
            oB.c.Clone((() => BB), this)
          }
          serialize() {
            return oB.c.Serialize(this)
          }
          parse(BB, TB, dB) {
            oB.c.Parse((() => this), BB, TB, dB)
          }
        }, (() => {
          const YB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          TB = [(0, yB.W)()], dB = [(0, yB.W)()], pB = [(0, yB.W)()], lB = [(0, yB.W)()], (0, VB.g)(null, null, TB, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: BB => "name" in BB,
              get: BB => BB.name,
              set: (BB, TB) => {
                BB.name = TB
              }
            },
            metadata: YB
          }, JB, gB), (0, VB.g)(null, null, dB, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: BB => "priority" in BB,
              get: BB => BB.priority,
              set: (BB, TB) => {
                BB.priority = TB
              }
            },
            metadata: YB
          }, kB, LB), (0, VB.g)(null, null, pB, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: BB => "resolveIncludes" in BB,
              get: BB => BB.resolveIncludes,
              set: (BB, TB) => {
                BB.resolveIncludes = TB
              }
            },
            metadata: YB
          }, OB, DB), (0, VB.g)(null, null, lB, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: BB => "registerForExtraEvents" in BB,
              get: BB => BB.registerForExtraEvents,
              set: (BB, TB) => {
                BB.registerForExtraEvents = TB
              }
            },
            metadata: YB
          }, uB, HB), YB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: YB
          })
        })(), BB
      })(),
      OB = !1;

    function DB() {
      OB || (OB = !0, (0, kB.g)("BABYLON.MaterialPluginBase", LB))
    }
  },
  39028: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    class VB {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(BB) {
        BB.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(BB) {}
      bindForSubMesh(BB, TB, dB, VB, yB) {
        if (TB.prePassRenderer && TB.prePassRenderer.enabled && TB.prePassRenderer.currentRTisSceneRT && (-1 !== TB.prePassRenderer.getIndex(2) || -1 !== TB.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[dB.uniqueId] || (this.previousWorldMatrices[dB.uniqueId] = VB.clone()), this.previousViewProjection || (this.previousViewProjection = TB.getTransformMatrix().clone(), this.currentViewProjection = TB.getTransformMatrix().clone());
          const yB = TB.PD();
          this.currentViewProjection.updateFlag !== TB.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = yB.frameId, this.previousViewProjection.bdB(this.currentViewProjection), this.currentViewProjection.bdB(TB.getTransformMatrix())) : this._lastUpdateFrameId !== yB.frameId && (this._lastUpdateFrameId = yB.frameId, this.previousViewProjection.bdB(this.currentViewProjection)), BB.setMatrix("previousWorld", this.previousWorldMatrices[dB.uniqueId]), BB.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[dB.uniqueId] = VB.clone()
        }
      }
    }
  },
  39126: (BB, TB, dB) => {
    function VB(BB) {
      return class extends BB {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    dB.d(TB, {
      c: () => VB
    })
  },
  39019: (BB, TB, dB) => {
    dB.d(TB, {
      StandardMaterial: () => VB.e
    });
    var VB = dB(39024);
    (0, VB.c)()
  },
  39024: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => PB,
      e: () => cB
    });
    var VB = dB(38745),
      yB = dB(38750),
      pB = dB(38861),
      lB = dB(38843),
      JB = dB(36183),
      YB = dB(38897),
      gB = dB(39028),
      oB = dB(39030),
      kB = dB(38863),
      LB = dB(39040),
      OB = dB(39034),
      DB = dB(39080),
      uB = dB(39078),
      HB = dB(39088),
      EB = dB(39090),
      vB = dB(39075),
      mB = dB(39101),
      iB = dB(39073),
      NB = dB(38772),
      tB = dB(39108),
      fB = dB(39117),
      sB = dB(39119),
      MB = dB(39126),
      zB = dB(39130),
      wB = dB(36166),
      UB = dB(38629);
    const FB = {
      effect: null,
      subMesh: null
    };
    class KB extends((0, MB.c)((0, sB.b)(OB.d))) {}
    class rB extends((0, oB.h)(KB)) {
      constructor(BB) {
        super(BB), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class IB extends((0, zB.c)(DB.c)) {}
    let cB = (() => {
        var BB, TB, oB, OB, sB, MB, zB, wB, UB, KB, cB, SB, PB, QB, RB, aB, ZB, XB, WB, hB, CB, GB, qB, xB, jB, AB, bB, nB, eB, BT, TT, dT, VT;
        let yT, pT, lT, JT, YT, gT, oT, kT, LT, OT, DT, uT, HT, ET, vT, mT, iT, NT, tT, fT, sT, MT, zT, wT, UT, FT, KT, rT, IT, cT, ST, PT, QT, RT, aT, ZT, XT, WT, hT, CT, GT, qT, xT, jT, AT, bT, nT, eT, Bd, Td, dd, Vd, yd, pd, ld, Jd, Yd, gd, od, kd, Ld, Od, Dd, ud, Hd, Ed, vd, md, Nd, td, fd, sd, Md, zd = IB,
          wd = [],
          Ud = [],
          Fd = [],
          Kd = [],
          rd = [],
          Id = [],
          cd = [],
          Sd = [],
          Pd = [],
          Qd = [],
          Rd = [],
          ad = [],
          Zd = [],
          Xd = [],
          Wd = [],
          hd = [],
          Cd = [],
          Gd = [],
          qd = [],
          xd = [],
          jd = [],
          Ad = [],
          bd = [],
          nd = [],
          ed = [],
          BV = [],
          TV = [],
          dV = [],
          VV = [],
          yV = [],
          pV = [],
          lV = [],
          JV = [],
          YV = [],
          gV = [],
          oV = [],
          kV = [],
          LV = [],
          OV = [],
          DV = [],
          uV = [],
          HV = [],
          EV = [],
          vV = [],
          mV = [],
          iV = [],
          NV = [],
          tV = [],
          fV = [],
          sV = [],
          MV = [],
          zV = [],
          wV = [],
          UV = [],
          FV = [],
          KV = [],
          rV = [],
          IV = [],
          cV = [],
          SV = [],
          PV = [],
          QV = [],
          RV = [],
          aV = [],
          ZV = [],
          XV = [],
          WV = [],
          hV = [],
          CV = [],
          GV = [],
          qV = [],
          xV = [],
          jV = [],
          AV = [],
          bV = [],
          nV = [],
          eV = [],
          By = [],
          Ty = [],
          dy = [],
          Vy = [],
          yy = [],
          py = [],
          ly = [],
          Jy = [],
          Yy = [],
          gy = [],
          oy = [],
          ky = [],
          Ly = [],
          Oy = [],
          Dy = [],
          uy = [],
          Hy = [],
          Ey = [],
          vy = [],
          my = [],
          iy = [],
          Ny = [],
          ty = [],
          fy = [],
          sy = [],
          My = [],
          zy = [],
          wy = [],
          Uy = [],
          Fy = [],
          Ky = [],
          ry = [],
          Iy = [],
          cy = [],
          Sy = [],
          Py = [],
          Qy = [],
          Ry = [],
          ay = [],
          Zy = [],
          Xy = [],
          Wy = [],
          hy = [],
          Cy = [],
          Gy = [],
          qy = [],
          xy = [],
          jy = [],
          Ay = [],
          by = [],
          ny = [],
          ey = [],
          Bp = [],
          Tp = [],
          dp = [],
          Vp = [],
          yp = [],
          pp = [],
          lp = [],
          Jp = [],
          Yp = [],
          gp = [],
          op = [],
          kp = [],
          Lp = [],
          Op = [],
          Dp = [],
          Hp = [],
          Ep = [];
        return BB = class extends zd {
          get diffuseTexture() {
            return (0, VB.b)(this, TB, "f")
          }
          set diffuseTexture(BB) {
            (0, VB.f)(this, TB, BB, "f")
          }
          get ambientTexture() {
            return (0, VB.b)(this, oB, "f")
          }
          set ambientTexture(BB) {
            (0, VB.f)(this, oB, BB, "f")
          }
          get opacityTexture() {
            return (0, VB.b)(this, OB, "f")
          }
          set opacityTexture(BB) {
            (0, VB.f)(this, OB, BB, "f")
          }
          get reflectionTexture() {
            return (0, VB.b)(this, sB, "f")
          }
          set reflectionTexture(BB) {
            (0, VB.f)(this, sB, BB, "f")
          }
          get emissiveTexture() {
            return (0, VB.b)(this, MB, "f")
          }
          set emissiveTexture(BB) {
            (0, VB.f)(this, MB, BB, "f")
          }
          get specularTexture() {
            return (0, VB.b)(this, zB, "f")
          }
          set specularTexture(BB) {
            (0, VB.f)(this, zB, BB, "f")
          }
          get bumpTexture() {
            return (0, VB.b)(this, wB, "f")
          }
          set bumpTexture(BB) {
            (0, VB.f)(this, wB, BB, "f")
          }
          get lightmapTexture() {
            return (0, VB.b)(this, UB, "f")
          }
          set lightmapTexture(BB) {
            (0, VB.f)(this, UB, BB, "f")
          }
          get refractionTexture() {
            return (0, VB.b)(this, KB, "f")
          }
          set refractionTexture(BB) {
            (0, VB.f)(this, KB, BB, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, VB.b)(this, cB, "f")
          }
          set useAlphaFromDiffuseTexture(BB) {
            (0, VB.f)(this, cB, BB, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, VB.b)(this, SB, "f")
          }
          set useEmissiveAsIllumination(BB) {
            (0, VB.f)(this, SB, BB, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, VB.b)(this, PB, "f")
          }
          set linkEmissiveWithDiffuse(BB) {
            (0, VB.f)(this, PB, BB, "f")
          }
          get useSpecularOverAlpha() {
            return (0, VB.b)(this, QB, "f")
          }
          set useSpecularOverAlpha(BB) {
            (0, VB.f)(this, QB, BB, "f")
          }
          get useReflectionOverAlpha() {
            return (0, VB.b)(this, RB, "f")
          }
          set useReflectionOverAlpha(BB) {
            (0, VB.f)(this, RB, BB, "f")
          }
          get disableLighting() {
            return (0, VB.b)(this, aB, "f")
          }
          set disableLighting(BB) {
            (0, VB.f)(this, aB, BB, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, VB.b)(this, ZB, "f")
          }
          set useObjectSpaceNormalMap(BB) {
            (0, VB.f)(this, ZB, BB, "f")
          }
          get useParallax() {
            return (0, VB.b)(this, XB, "f")
          }
          set useParallax(BB) {
            (0, VB.f)(this, XB, BB, "f")
          }
          get useParallaxOcclusion() {
            return (0, VB.b)(this, WB, "f")
          }
          set useParallaxOcclusion(BB) {
            (0, VB.f)(this, WB, BB, "f")
          }
          get roughness() {
            return (0, VB.b)(this, hB, "f")
          }
          set roughness(BB) {
            (0, VB.f)(this, hB, BB, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, VB.b)(this, CB, "f")
          }
          set useLightmapAsShadowmap(BB) {
            (0, VB.f)(this, CB, BB, "f")
          }
          get diffuseFresnelParameters() {
            return (0, VB.b)(this, GB, "f")
          }
          set diffuseFresnelParameters(BB) {
            (0, VB.f)(this, GB, BB, "f")
          }
          get opacityFresnelParameters() {
            return (0, VB.b)(this, qB, "f")
          }
          set opacityFresnelParameters(BB) {
            (0, VB.f)(this, qB, BB, "f")
          }
          get reflectionFresnelParameters() {
            return (0, VB.b)(this, xB, "f")
          }
          set reflectionFresnelParameters(BB) {
            (0, VB.f)(this, xB, BB, "f")
          }
          get refractionFresnelParameters() {
            return (0, VB.b)(this, jB, "f")
          }
          set refractionFresnelParameters(BB) {
            (0, VB.f)(this, jB, BB, "f")
          }
          get emissiveFresnelParameters() {
            return (0, VB.b)(this, AB, "f")
          }
          set emissiveFresnelParameters(BB) {
            (0, VB.f)(this, AB, BB, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, VB.b)(this, bB, "f")
          }
          set useReflectionFresnelFromSpecular(BB) {
            (0, VB.f)(this, bB, BB, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, VB.b)(this, nB, "f")
          }
          set useGlossinessFromSpecularMapAlpha(BB) {
            (0, VB.f)(this, nB, BB, "f")
          }
          get maxSimultaneousLights() {
            return (0, VB.b)(this, eB, "f")
          }
          set maxSimultaneousLights(BB) {
            (0, VB.f)(this, eB, BB, "f")
          }
          get invertNormalMapX() {
            return (0, VB.b)(this, BT, "f")
          }
          set invertNormalMapX(BB) {
            (0, VB.f)(this, BT, BB, "f")
          }
          get invertNormalMapY() {
            return (0, VB.b)(this, TT, "f")
          }
          set invertNormalMapY(BB) {
            (0, VB.f)(this, TT, BB, "f")
          }
          get twoSidedLighting() {
            return (0, VB.b)(this, dT, "f")
          }
          set twoSidedLighting(BB) {
            (0, VB.f)(this, dT, BB, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, VB.b)(this, VT, "f")
          }
          set applyDecalMapAfterDetailMap(BB) {
            (0, VB.f)(this, VT, BB, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(dB, yB) {
            super(dB, yB, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || BB.ForceGLSL), this._diffuseTexture = (0, VB.h)(this, wd, null), TB.set(this, ((0, VB.h)(this, Ud), (0, VB.h)(this, Fd, void 0))), this._ambientTexture = ((0, VB.h)(this, Kd), (0, VB.h)(this, rd, null)), oB.set(this, ((0, VB.h)(this, Id), (0, VB.h)(this, cd, void 0))), this._opacityTexture = ((0, VB.h)(this, Sd), (0, VB.h)(this, Pd, null)), OB.set(this, ((0, VB.h)(this, Qd), (0, VB.h)(this, Rd, void 0))), this._reflectionTexture = ((0, VB.h)(this, ad), (0, VB.h)(this, Zd, null)), sB.set(this, ((0, VB.h)(this, Xd), (0, VB.h)(this, Wd, void 0))), this._emissiveTexture = ((0, VB.h)(this, hd), (0, VB.h)(this, Cd, null)), MB.set(this, ((0, VB.h)(this, Gd), (0, VB.h)(this, qd, void 0))), this._specularTexture = ((0, VB.h)(this, xd), (0, VB.h)(this, jd, null)), zB.set(this, ((0, VB.h)(this, Ad), (0, VB.h)(this, bd, void 0))), this._bumpTexture = ((0, VB.h)(this, nd), (0, VB.h)(this, ed, null)), wB.set(this, ((0, VB.h)(this, BV), (0, VB.h)(this, TV, void 0))), this._lightmapTexture = ((0, VB.h)(this, dV), (0, VB.h)(this, VV, null)), UB.set(this, ((0, VB.h)(this, yV), (0, VB.h)(this, pV, void 0))), this._refractionTexture = ((0, VB.h)(this, lV), (0, VB.h)(this, JV, null)), KB.set(this, ((0, VB.h)(this, YV), (0, VB.h)(this, gV, void 0))), this.ambientColor = ((0, VB.h)(this, oV), (0, VB.h)(this, kV, new JB.c(0, 0, 0))), this.diffuseColor = ((0, VB.h)(this, LV), (0, VB.h)(this, OV, new JB.c(1, 1, 1))), this.specularColor = ((0, VB.h)(this, DV), (0, VB.h)(this, uV, new JB.c(1, 1, 1))), this.emissiveColor = ((0, VB.h)(this, HV), (0, VB.h)(this, EV, new JB.c(0, 0, 0))), this.specularPower = ((0, VB.h)(this, vV), (0, VB.h)(this, mV, 64)), this._useAlphaFromDiffuseTexture = ((0, VB.h)(this, iV), (0, VB.h)(this, NV, !1)), cB.set(this, ((0, VB.h)(this, tV), (0, VB.h)(this, fV, void 0))), this._useEmissiveAsIllumination = ((0, VB.h)(this, sV), (0, VB.h)(this, MV, !1)), SB.set(this, ((0, VB.h)(this, zV), (0, VB.h)(this, wV, void 0))), this._linkEmissiveWithDiffuse = ((0, VB.h)(this, UV), (0, VB.h)(this, FV, !1)), PB.set(this, ((0, VB.h)(this, KV), (0, VB.h)(this, rV, void 0))), this._useSpecularOverAlpha = ((0, VB.h)(this, IV), (0, VB.h)(this, cV, !1)), QB.set(this, ((0, VB.h)(this, SV), (0, VB.h)(this, PV, void 0))), this._useReflectionOverAlpha = ((0, VB.h)(this, QV), (0, VB.h)(this, RV, !1)), RB.set(this, ((0, VB.h)(this, aV), (0, VB.h)(this, ZV, void 0))), this._disableLighting = ((0, VB.h)(this, XV), (0, VB.h)(this, WV, !1)), aB.set(this, ((0, VB.h)(this, hV), (0, VB.h)(this, CV, void 0))), this._useObjectSpaceNormalMap = ((0, VB.h)(this, GV), (0, VB.h)(this, qV, !1)), ZB.set(this, ((0, VB.h)(this, xV), (0, VB.h)(this, jV, void 0))), this._useParallax = ((0, VB.h)(this, AV), (0, VB.h)(this, bV, !1)), XB.set(this, ((0, VB.h)(this, nV), (0, VB.h)(this, eV, void 0))), this._useParallaxOcclusion = ((0, VB.h)(this, By), (0, VB.h)(this, Ty, !1)), WB.set(this, ((0, VB.h)(this, dy), (0, VB.h)(this, Vy, void 0))), this.parallaxScaleBias = ((0, VB.h)(this, yy), (0, VB.h)(this, py, .05)), this._roughness = ((0, VB.h)(this, ly), (0, VB.h)(this, Jy, 0)), hB.set(this, ((0, VB.h)(this, Yy), (0, VB.h)(this, gy, void 0))), this.indexOfRefraction = ((0, VB.h)(this, oy), (0, VB.h)(this, ky, .98)), this.invertRefractionY = ((0, VB.h)(this, Ly), (0, VB.h)(this, Oy, !0)), this.alphaCutOff = ((0, VB.h)(this, Dy), (0, VB.h)(this, uy, .4)), this._useLightmapAsShadowmap = ((0, VB.h)(this, Hy), (0, VB.h)(this, Ey, !1)), CB.set(this, ((0, VB.h)(this, vy), (0, VB.h)(this, my, void 0))), this._diffuseFresnelParameters = ((0, VB.h)(this, iy), (0, VB.h)(this, Ny, void 0)), GB.set(this, ((0, VB.h)(this, ty), (0, VB.h)(this, fy, void 0))), this._opacityFresnelParameters = ((0, VB.h)(this, sy), (0, VB.h)(this, My, void 0)), qB.set(this, ((0, VB.h)(this, zy), (0, VB.h)(this, wy, void 0))), this._reflectionFresnelParameters = ((0, VB.h)(this, Uy), (0, VB.h)(this, Fy, void 0)), xB.set(this, ((0, VB.h)(this, Ky), (0, VB.h)(this, ry, void 0))), this._refractionFresnelParameters = ((0, VB.h)(this, Iy), (0, VB.h)(this, cy, void 0)), jB.set(this, ((0, VB.h)(this, Sy), (0, VB.h)(this, Py, void 0))), this._emissiveFresnelParameters = ((0, VB.h)(this, Qy), (0, VB.h)(this, Ry, void 0)), AB.set(this, ((0, VB.h)(this, ay), (0, VB.h)(this, Zy, void 0))), this._useReflectionFresnelFromSpecular = ((0, VB.h)(this, Xy), (0, VB.h)(this, Wy, !1)), bB.set(this, ((0, VB.h)(this, hy), (0, VB.h)(this, Cy, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, VB.h)(this, Gy), (0, VB.h)(this, qy, !1)), nB.set(this, ((0, VB.h)(this, xy), (0, VB.h)(this, jy, void 0))), this._maxSimultaneousLights = ((0, VB.h)(this, Ay), (0, VB.h)(this, by, 4)), eB.set(this, ((0, VB.h)(this, ny), (0, VB.h)(this, ey, void 0))), this._invertNormalMapX = ((0, VB.h)(this, Bp), (0, VB.h)(this, Tp, !1)), BT.set(this, ((0, VB.h)(this, dp), (0, VB.h)(this, Vp, void 0))), this._invertNormalMapY = ((0, VB.h)(this, yp), (0, VB.h)(this, pp, !1)), TT.set(this, ((0, VB.h)(this, lp), (0, VB.h)(this, Jp, void 0))), this._twoSidedLighting = ((0, VB.h)(this, Yp), (0, VB.h)(this, gp, !1)), dT.set(this, ((0, VB.h)(this, op), (0, VB.h)(this, kp, void 0))), this._applyDecalMapAfterDetailMap = ((0, VB.h)(this, Lp), (0, VB.h)(this, Op, !1)), VT.set(this, ((0, VB.h)(this, Dp), (0, VB.h)(this, Hp, void 0))), this._vertexPullingMetadata = ((0, VB.h)(this, Ep), null), this._renderTargets = new pB.g(16), this._globalAmbientColor = new JB.c(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new EB.b(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new gB.e, this.getRenderTargetTextures = () => (this._renderTargets.reset(), BB.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), BB.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(BB.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(BB.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === LB.b.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== LB.b.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(TB, dB) {
            let VB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const yB = dB._drawWrapper;
            if (yB.effect && this.isFrozen && yB._wasPreviouslyReady && yB._wasPreviouslyUsingInstances === VB) return !0;
            dB.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), dB.materialDefines = new rB(this._eventInfo.defineNames));
            const pB = this.jU(),
              lB = dB.materialDefines;
            if (this._isReadyForSubMesh(dB)) return !0;
            const JB = pB.PD();
            if (lB._needNormals = (0, iB.Q)(pB, TB, lB, !0, this._maxSimultaneousLights, this._disableLighting), !(0, iB.d)(pB, TB, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, iB.Z)(pB, lB);
            const oB = this.needAlphaBlendingForMesh(TB) && this.jU().useOrderIndependentTransparency;
            if ((0, iB.bb)(pB, lB, this.canRenderToMRT && !oB), (0, iB._)(pB, lB, oB), fB.e.PrepareDefines(JB.currentRenderPassId, TB, lB), lB._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, lB._needUVs = !1;
              for (let BB = 1; BB <= 6; ++BB) lB["MAINUV" + BB] = !1;
              if (pB.texturesEnabled) {
                if (lB.DIFFUSEDIRECTUV = 0, lB.BUMPDIRECTUV = 0, lB.AMBIENTDIRECTUV = 0, lB.OPACITYDIRECTUV = 0, lB.EMISSIVEDIRECTUV = 0, lB.SPECULARDIRECTUV = 0, lB.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && BB.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, iB.S)(this._diffuseTexture, lB, "DIFFUSE")
                } else lB.DIFFUSE = !1;
                if (this._ambientTexture && BB.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, iB.S)(this._ambientTexture, lB, "AMBIENT")
                } else lB.AMBIENT = !1;
                if (this._opacityTexture && BB.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, iB.S)(this._opacityTexture, lB, "OPACITY"), lB.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else lB.OPACITY = !1;
                if (this._reflectionTexture && BB.ReflectionTextureEnabled ? (lB.ROUGHNESS = this._roughness > 0, lB.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (lB.ROUGHNESS = !1, lB.REFLECTIONOVERALPHA = !1), !(0, iB.P)(pB, this._reflectionTexture, lB)) return !1;
                if (this._emissiveTexture && BB.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, iB.S)(this._emissiveTexture, lB, "EMISSIVE")
                } else lB.EMISSIVE = !1;
                if (this._lightmapTexture && BB.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, iB.S)(this._lightmapTexture, lB, "LIGHTMAP"), lB.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, lB.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else lB.LIGHTMAP = !1;
                if (this._specularTexture && BB.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, iB.S)(this._specularTexture, lB, "SPECULAR"), lB.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else lB.SPECULAR = !1;
                if (pB.PD().getCaps().standardDerivatives && this._bumpTexture && BB.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, iB.S)(this._bumpTexture, lB, "BUMP"), lB.PARALLAX = this._useParallax, lB.PARALLAX_RHS = pB.useRightHandedSystem, lB.PARALLAXOCCLUSION = this._useParallaxOcclusion, lB.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else lB.BUMP = !1, lB.PARALLAX = !1, lB.PARALLAX_RHS = !1, lB.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && BB.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  lB._needUVs = !0, lB.REFRACTION = !0, lB.REFRACTIONMAP_3D = this._refractionTexture.isCube, lB.RGBDREFRACTION = this._refractionTexture.isRGBD, lB.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else lB.REFRACTION = !1;
                lB.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else lB.DIFFUSE = !1, lB.AMBIENT = !1, lB.OPACITY = !1, lB.REFLECTION = !1, lB.EMISSIVE = !1, lB.LIGHTMAP = !1, lB.BUMP = !1, lB.REFRACTION = !1;
              lB.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), lB.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, lB.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, lB.SPECULAROVERALPHA = this._useSpecularOverAlpha, lB.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, lB.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, lB.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(TB), lB.TEXTURE_REPETITION_MODE = JB.version > 1 || JB.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = lB, this._eventInfo.subMesh = dB, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (lB._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(lB), lB.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, lB.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (lB._areFresnelDirty && (BB.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (lB.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, lB.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, lB.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, lB.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, lB.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, lB.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, lB._needNormals = !0, lB.FRESNEL = !0) : lB.FRESNEL = !1), lB.AREALIGHTUSED || lB.CLUSTLIGHT_BATCH)
              for (let BB = 0; BB < TB.lightSources.length; BB++)
                if (!TB.lightSources[BB]._isReady()) return !1;
            (0, iB.W)(TB, pB, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(TB), lB, this._applyDecalMapAfterDetailMap, this._useVertexPulling, dB.getRenderingMesh(), this._isVertexOutputInvariant), (0, iB.L)(pB, JB, this, lB, VB, null, dB.getRenderingMesh().hasThinInstances), this._eventInfo.defines = lB, this._eventInfo.mesh = TB, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, iB.I)(TB, lB, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let LB = !1;
            if (lB.isDirty) {
              const VB = lB._areLightsDisposed;
              lB.markAsProcessed();
              const yB = new HB.d;
              lB.REFLECTION && yB.addFallback(0, "REFLECTION"), lB.SPECULAR && yB.addFallback(0, "SPECULAR"), lB.BUMP && yB.addFallback(0, "BUMP"), lB.PARALLAX && yB.addFallback(1, "PARALLAX"), lB.PARALLAX_RHS && yB.addFallback(1, "PARALLAX_RHS"), lB.PARALLAXOCCLUSION && yB.addFallback(0, "PARALLAXOCCLUSION"), lB.SPECULAROVERALPHA && yB.addFallback(0, "SPECULAROVERALPHA"), lB.FOG && yB.addFallback(1, "FOG"), lB.POINTSIZE && yB.addFallback(0, "POINTSIZE"), lB.LOGARITHMICDEPTH && yB.addFallback(0, "LOGARITHMICDEPTH"), (0, iB.x)(lB, yB, this._maxSimultaneousLights), lB.SPECULARTERM && yB.addFallback(0, "SPECULARTERM"), lB.DIFFUSEFRESNEL && yB.addFallback(1, "DIFFUSEFRESNEL"), lB.OPACITYFRESNEL && yB.addFallback(2, "OPACITYFRESNEL"), lB.REFLECTIONFRESNEL && yB.addFallback(3, "REFLECTIONFRESNEL"), lB.EMISSIVEFRESNEL && yB.addFallback(4, "EMISSIVEFRESNEL"), lB.FRESNEL && yB.addFallback(4, "FRESNEL"), lB.MULTIVIEW && yB.addFallback(0, "MULTIVIEW");
              const oB = [YB.m.PositionKind];
              lB.NORMAL && oB.push(YB.m.NormalKind), lB.TANGENT && oB.push(YB.m.TangentKind);
              for (let BB = 1; BB <= 6; ++BB) lB["UV" + BB] && oB.push(`uv${1===BB?"":BB}`);
              lB.VERTEXCOLOR && oB.push(YB.m.ColorKind), (0, iB.D)(oB, TB, lB, yB), (0, iB.F)(oB, lB), (0, iB.G)(oB, TB, lB), (0, iB.A)(oB, TB, lB);
              let OB = "default";
              const DB = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                uB = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, iB.jb)(DB, uB, !1);
              const EB = ["Material", "Scene", "Mesh"],
                NB = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: lB.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = yB, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = lB, this._eventInfo.uniforms = DB, this._eventInfo.attributes = oB, this._eventInfo.samplers = uB, this._eventInfo.uniformBuffersNames = EB, this._eventInfo.customCode = void 0, this._eventInfo.mesh = TB, this._eventInfo.indexParameters = NB, this._callbackPluginEventGeneric(128, this._eventInfo), fB.e.AddUniformsAndSamplers(DB, uB), gB.e.AddUniforms(DB), gB.e.AddSamplers(uB), kB.b && (kB.b.PrepareUniforms(DB, lB), kB.b.PrepareSamplers(uB, lB)), (0, iB.nb)({
                  uniformsNames: DB,
                  uniformBuffersNames: EB,
                  samplers: uB,
                  defines: lB,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, vB.c)(DB), this._useVertexPulling) {
                const BB = dB.getRenderingMesh(),
                  TB = BB?.geometry;
                TB && (this._vertexPullingMetadata = (0, mB.e)(TB), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((BB, TB) => {
                  DB.push(`vp_${TB}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const tB = {};
              this.customShaderNameResolve && (OB = this.customShaderNameResolve(OB, DB, EB, uB, lB, oB, tB));
              const sB = lB.toString(),
                MB = dB.effect,
                zB = pB.PD().createEffect(OB, {
                  attributes: oB,
                  uniformsNames: DB,
                  uniformBuffersNames: EB,
                  samplers: uB,
                  defines: sB,
                  fallbacks: yB,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: NB,
                  processFinalCode: tB.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: lB.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: BB._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, JB);
              if (this._eventInfo.customCode = void 0, zB)
                if (this._onEffectCreatedObservable && (FB.effect = zB, FB.subMesh = dB, this._onEffectCreatedObservable.notifyObservers(FB)), this.allowShaderHotSwapping && MB && !zB.isReady()) {
                  if (lB.markAsUnprocessed(), LB = this.isFrozen, VB) return lB._areLightsDisposed = !0, !1
                } else pB.resetCachedMaterial(), dB.setEffect(zB, lB, this._materialContext)
            }
            return !(!dB.effect || !dB.effect.isReady()) && (lB._renderId = pB.getRenderId(), yB._wasPreviouslyReady = !LB, yB._wasPreviouslyUsingInstances = VB, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const BB = this._uniformBuffer;
            BB.addUniform("diffuseLeftColor", 4), BB.addUniform("diffuseRightColor", 4), BB.addUniform("opacityParts", 4), BB.addUniform("reflectionLeftColor", 4), BB.addUniform("reflectionRightColor", 4), BB.addUniform("refractionLeftColor", 4), BB.addUniform("refractionRightColor", 4), BB.addUniform("emissiveLeftColor", 4), BB.addUniform("emissiveRightColor", 4), BB.addUniform("vDiffuseInfos", 2), BB.addUniform("vAmbientInfos", 2), BB.addUniform("vOpacityInfos", 2), BB.addUniform("vEmissiveInfos", 2), BB.addUniform("vLightmapInfos", 2), BB.addUniform("vSpecularInfos", 2), BB.addUniform("vBumpInfos", 3), BB.addUniform("diffuseMatrix", 16), BB.addUniform("ambientMatrix", 16), BB.addUniform("opacityMatrix", 16), BB.addUniform("emissiveMatrix", 16), BB.addUniform("lightmapMatrix", 16), BB.addUniform("specularMatrix", 16), BB.addUniform("bumpMatrix", 16), BB.addUniform("vTangentSpaceParams", 2), BB.addUniform("pointSize", 1), BB.addUniform("alphaCutOff", 1), BB.addUniform("refractionMatrix", 16), BB.addUniform("vRefractionInfos", 4), BB.addUniform("vRefractionPosition", 3), BB.addUniform("vRefractionSize", 3), BB.addUniform("vSpecularColor", 4), BB.addUniform("vEmissiveColor", 3), BB.addUniform("vDiffuseColor", 4), BB.addUniform("vAmbientColor", 3), BB.addUniform("cameraInfo", 4), BB.addUniform("vTextureRepetitionHexTilingParams", 4), (0, iB.fb)(BB, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(TB, dB, VB) {
            const yB = this.jU(),
              pB = VB.materialDefines;
            if (!pB) return;
            const YB = VB.effect;
            if (!YB) return;
            this._activeEffect = YB, dB.getMeshUniformBuffer().bindToEffect(YB, "Mesh"), dB.transferToEffect(TB), this._uniformBuffer.bindToEffect(YB, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, yB, dB, TB, this.isFrozen), fB.e.Bind(yB.PD().currentRenderPassId, this._activeEffect, dB, TB, this);
            const gB = yB.activeCamera;
            gB ? this._uniformBuffer.updateFloat4("cameraInfo", gB.minZ, gB.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const oB = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", oB[0], oB[1], oB[2], oB[3]), this._eventInfo.subMesh = VB, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), pB.OBJECTSPACE_NORMALMAP && (TB.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const kB = this._mustRebind(yB, YB, VB, dB.visibility),
              LB = yB.PD()._features.needToAlwaysBindUniformBuffers;
            (0, iB.f)(dB, YB), this._vertexPullingMetadata && (0, mB.b)(YB, this._vertexPullingMetadata);
            const OB = this._uniformBuffer;
            if (kB) {
              if (this.bindViewProjection(YB), !OB.useUbo || !this.isFrozen || !OB.isSync || VB._drawWrapper._forceRebindOnNextCall) {
                if (BB.FresnelEnabled && pB.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (OB.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), OB.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const BB = JB.h.Color3[0];
                    BB.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), OB.updateColor4("opacityParts", BB, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (OB.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), OB.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (OB.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), OB.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (OB.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), OB.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (pB.ALPHATEST && OB.updateFloat("alphaCutOff", this.alphaCutOff), yB.texturesEnabled && (this._diffuseTexture && BB.DiffuseTextureEnabled && (OB.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, iB.u)(this._diffuseTexture, OB, "diffuse")), this._ambientTexture && BB.AmbientTextureEnabled && (OB.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, iB.u)(this._ambientTexture, OB, "ambient")), this._opacityTexture && BB.OpacityTextureEnabled && (OB.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, iB.u)(this._opacityTexture, OB, "opacity")), (0, iB.j)(yB, pB, OB, JB.c.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && BB.ReflectionTextureEnabled || OB.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && BB.EmissiveTextureEnabled && (OB.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, iB.u)(this._emissiveTexture, OB, "emissive")), this._lightmapTexture && BB.LightmapTextureEnabled && (OB.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, iB.u)(this._lightmapTexture, OB, "lightmap")), this._specularTexture && BB.SpecularTextureEnabled && (OB.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, iB.u)(this._specularTexture, OB, "specular")), this._bumpTexture && yB.PD().getCaps().standardDerivatives && BB.BumpTextureEnabled && (OB.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, iB.u)(this._bumpTexture, OB, "bump"), yB._mirroredCameraPosition ? OB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : OB.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && BB.RefractionTextureEnabled)) {
                  let BB = 1;
                  if (this._refractionTexture.isCube || (OB.i6("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (BB = this._refractionTexture.depth)), OB.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, BB, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const BB = this._refractionTexture;
                    OB.updateVector3("vRefractionPosition", BB.boundingBoxPosition), OB.updateVector3("vRefractionSize", BB.boundingBoxSize)
                  }
                }
                this.pointsCloud && OB.updateFloat("pointSize", this.pointSize), OB.updateColor4("vSpecularColor", this.specularColor, this.specularPower), OB.updateColor3("vEmissiveColor", BB.EmissiveTextureEnabled ? this.emissiveColor : JB.c.BlackReadOnly), OB.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), yB.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), OB.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              yB.texturesEnabled && (this._diffuseTexture && BB.DiffuseTextureEnabled && YB.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && BB.AmbientTextureEnabled && YB.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && BB.OpacityTextureEnabled && YB.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && BB.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? YB.setTexture("reflectionCubeSampler", this._reflectionTexture) : YB.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && BB.EmissiveTextureEnabled && YB.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && BB.LightmapTextureEnabled && YB.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && BB.SpecularTextureEnabled && YB.setTexture("specularSampler", this._specularTexture), this._bumpTexture && yB.PD().getCaps().standardDerivatives && BB.BumpTextureEnabled && YB.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && BB.RefractionTextureEnabled && (this._refractionTexture.isCube ? YB.setTexture("refractionCubeSampler", this._refractionTexture) : YB.setTexture("refraction2DSampler", this._refractionTexture))), this.jU().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(dB) && this.jU().depthPeelingRenderer.bind(YB), this._eventInfo.subMesh = VB, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, vB.d)(YB, this, yB), this.bindEyePosition(YB)
            } else LB && (this._needToBindSceneUbo = !0);
            !kB && this.isFrozen && !LB || !yB.lightsEnabled || this._disableLighting || (0, iB.n)(yB, dB, YB, pB, this._maxSimultaneousLights), !kB && this.isFrozen || ((yB.fogEnabled && dB.applyFog && yB.fogMode !== lB.g.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || dB.receiveShadows || pB.PREPASS || pB.CLUSTLIGHT_BATCH) && this.bindView(YB), (0, iB.h)(yB, dB, YB), pB.NUM_MORPH_INFLUENCERS && (0, iB.q)(dB, YB), pB.BAKED_VERTEX_ANIMATION_TEXTURE && dB.bakedVertexAnimationManager?.bind(YB, pB.INSTANCES), this.useLogarithmicDepth && (0, iB.p)(pB, YB, yB), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(dB, this._activeEffect, VB), OB.update()
          }
          _canBindRunFollower(TB, dB, VB, yB, pB) {
            const lB = TB.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === BB.prototype.isReadyForSubMesh && this.bindForSubMesh === BB.prototype.bindForSubMesh && this._mustRebind === DB.c.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !dB._features.needToAlwaysBindUniformBuffers && !(lB && lB.enabled && lB.currentRTisSceneRT) && !fB.e._Configurations[dB.currentRenderPassId] && !yB.materialDefines?.OBJECTSPACE_NORMALMAP && !VB.skeleton && !pB._bonesComputationForcedToCPU
          }
          _bindRunFollower(BB, TB, dB, VB) {
            this._activeEffect = VB, TB.getMeshUniformBuffer().bindToEffect(VB, "Mesh"), TB.transferToEffect(BB);
            const yB = this._uniformBuffer;
            yB.bindToEffect(VB, "Material");
            const pB = this._scene.activeCamera;
            pB ? yB.updateFloat4("cameraInfo", pB.minZ, pB.maxZ, 0, 0) : yB.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const lB = this.textureRepetitionHexTilingParams;
            yB.updateFloat4("vTextureRepetitionHexTilingParams", lB[0], lB[1], lB[2], lB[3]), this._afterBind(TB, VB, dB), yB.update()
          }
          getAnimatables() {
            const BB = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && BB.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && BB.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && BB.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && BB.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && BB.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && BB.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && BB.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && BB.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && BB.push(this._refractionTexture), BB
          }
          getActiveTextures() {
            const BB = super.getActiveTextures();
            return this._diffuseTexture && BB.push(this._diffuseTexture), this._ambientTexture && BB.push(this._ambientTexture), this._opacityTexture && BB.push(this._opacityTexture), this._reflectionTexture && BB.push(this._reflectionTexture), this._emissiveTexture && BB.push(this._emissiveTexture), this._specularTexture && BB.push(this._specularTexture), this._bumpTexture && BB.push(this._bumpTexture), this._lightmapTexture && BB.push(this._lightmapTexture), this._refractionTexture && BB.push(this._refractionTexture), BB
          }
          hasTexture(BB) {
            return !!super.hasTexture(BB) || (this._diffuseTexture === BB || (this._ambientTexture === BB || (this._opacityTexture === BB || (this._reflectionTexture === BB || (this._emissiveTexture === BB || (this._specularTexture === BB || (this._bumpTexture === BB || (this._lightmapTexture === BB || this._refractionTexture === BB))))))))
          }
          dispose(BB, TB) {
            TB && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(BB, TB)
          }
          clone(TB) {
            let dB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              VB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const yB = NB.c.Clone((() => new BB(TB, this.jU())), this, {
              cloneTexturesOnlyOnce: dB
            });
            return yB.name = TB, yB.id = TB, this.stencil.copyTo(yB.stencil), this._clonePlugins(yB, VB), yB
          }
          static Parse(TB, dB, VB) {
            const yB = NB.c.Parse((() => new BB(TB.name, dB)), TB, dB, VB);
            return TB.stencil && yB.stencil.parse(TB.stencil, dB, VB), LB.b._ParsePlugins(TB, yB, dB, VB), yB
          }
          static get DiffuseTextureEnabled() {
            return uB.d.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(BB) {
            uB.d.DiffuseTextureEnabled = BB
          }
          static get DetailTextureEnabled() {
            return uB.d.DetailTextureEnabled
          }
          static set DetailTextureEnabled(BB) {
            uB.d.DetailTextureEnabled = BB
          }
          static get AmbientTextureEnabled() {
            return uB.d.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(BB) {
            uB.d.AmbientTextureEnabled = BB
          }
          static get OpacityTextureEnabled() {
            return uB.d.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(BB) {
            uB.d.OpacityTextureEnabled = BB
          }
          static get ReflectionTextureEnabled() {
            return uB.d.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(BB) {
            uB.d.ReflectionTextureEnabled = BB
          }
          static get EmissiveTextureEnabled() {
            return uB.d.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(BB) {
            uB.d.EmissiveTextureEnabled = BB
          }
          static get SpecularTextureEnabled() {
            return uB.d.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(BB) {
            uB.d.SpecularTextureEnabled = BB
          }
          static get BumpTextureEnabled() {
            return uB.d.BumpTextureEnabled
          }
          static set BumpTextureEnabled(BB) {
            uB.d.BumpTextureEnabled = BB
          }
          static get LightmapTextureEnabled() {
            return uB.d.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(BB) {
            uB.d.LightmapTextureEnabled = BB
          }
          static get RefractionTextureEnabled() {
            return uB.d.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(BB) {
            uB.d.RefractionTextureEnabled = BB
          }
          static get ColorGradingTextureEnabled() {
            return uB.d.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(BB) {
            uB.d.ColorGradingTextureEnabled = BB
          }
          static get FresnelEnabled() {
            return uB.d.FresnelEnabled
          }
          static set FresnelEnabled(BB) {
            uB.d.FresnelEnabled = BB
          }
        }, TB = new WeakMap, oB = new WeakMap, OB = new WeakMap, sB = new WeakMap, MB = new WeakMap, zB = new WeakMap, wB = new WeakMap, UB = new WeakMap, KB = new WeakMap, cB = new WeakMap, SB = new WeakMap, PB = new WeakMap, QB = new WeakMap, RB = new WeakMap, aB = new WeakMap, ZB = new WeakMap, XB = new WeakMap, WB = new WeakMap, hB = new WeakMap, CB = new WeakMap, GB = new WeakMap, qB = new WeakMap, xB = new WeakMap, jB = new WeakMap, AB = new WeakMap, bB = new WeakMap, nB = new WeakMap, eB = new WeakMap, BT = new WeakMap, TT = new WeakMap, dT = new WeakMap, VT = new WeakMap, (() => {
          const TB = "function" === typeof Symbol && Symbol.metadata ? Object.create(zd[Symbol.metadata] ?? null) : void 0;
          yT = [(0, yB.M)("diffuseTexture")], pT = [(0, yB.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], lT = [(0, yB.M)("ambientTexture")], JT = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], YT = [(0, yB.M)("opacityTexture")], gT = [(0, yB.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], oT = [(0, yB.M)("reflectionTexture")], kT = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], LT = [(0, yB.M)("emissiveTexture")], OT = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], DT = [(0, yB.M)("specularTexture")], uT = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], HT = [(0, yB.M)("bumpTexture")], ET = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], vT = [(0, yB.M)("lightmapTexture")], mT = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], iT = [(0, yB.M)("refractionTexture")], NT = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], tT = [(0, yB.s)("ambient")], fT = [(0, yB.s)("diffuse")], sT = [(0, yB.s)("specular")], MT = [(0, yB.s)("emissive")], zT = [(0, yB.W)()], wT = [(0, yB.W)("useAlphaFromDiffuseTexture")], UT = [() => ({
            init(BB) {
              return void 0 === BB && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = BB), BB
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(BB) {
              this._useAlphaFromDiffuseTexture = BB
            }
          })], FT = [(0, yB.W)("useEmissiveAsIllumination")], KT = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], rT = [(0, yB.W)("linkEmissiveWithDiffuse")], IT = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], cT = [(0, yB.W)("useSpecularOverAlpha")], ST = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], PT = [(0, yB.W)("useReflectionOverAlpha")], QT = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], RT = [(0, yB.W)("disableLighting")], aT = [(0, yB.i)("_markAllSubMeshesAsLightsDirty")], ZT = [(0, yB.W)("useObjectSpaceNormalMap")], XT = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], WT = [(0, yB.W)("useParallax")], hT = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], CT = [(0, yB.W)("useParallaxOcclusion")], GT = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], qT = [(0, yB.W)()], xT = [(0, yB.W)("roughness")], jT = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], AT = [(0, yB.W)()], bT = [(0, yB.W)()], nT = [(0, yB.W)()], eT = [(0, yB.W)("useLightmapAsShadowmap")], Bd = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], Td = [(0, yB.z)("diffuseFresnelParameters")], dd = [(0, yB.i)("_markAllSubMeshesAsFresnelDirty")], Vd = [(0, yB.z)("opacityFresnelParameters")], yd = [(0, yB.i)("_markAllSubMeshesAsFresnelAndMiscDirty")], pd = [(0, yB.z)("reflectionFresnelParameters")], ld = [(0, yB.i)("_markAllSubMeshesAsFresnelDirty")], Jd = [(0, yB.z)("refractionFresnelParameters")], Yd = [(0, yB.i)("_markAllSubMeshesAsFresnelDirty")], gd = [(0, yB.z)("emissiveFresnelParameters")], od = [(0, yB.i)("_markAllSubMeshesAsFresnelDirty")], kd = [(0, yB.W)("useReflectionFresnelFromSpecular")], Ld = [(0, yB.i)("_markAllSubMeshesAsFresnelDirty")], Od = [(0, yB.W)("useGlossinessFromSpecularMapAlpha")], Dd = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], ud = [(0, yB.W)("maxSimultaneousLights")], Hd = [(0, yB.i)("_markAllSubMeshesAsLightsDirty")], Ed = [(0, yB.W)("invertNormalMapX")], vd = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], md = [(0, yB.W)("invertNormalMapY")], Nd = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], td = [(0, yB.W)("twoSidedLighting")], fd = [(0, yB.i)("_markAllSubMeshesAsTexturesDirty")], sd = [(0, yB.W)("applyDecalMapAfterDetailMap")], Md = [(0, yB.i)("_markAllSubMeshesAsMiscDirty")], (0, VB.g)(BB, null, pT, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "diffuseTexture" in BB,
              get: BB => BB.diffuseTexture,
              set: (BB, TB) => {
                BB.diffuseTexture = TB
              }
            },
            metadata: TB
          }, Fd, Kd), (0, VB.g)(BB, null, JT, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "ambientTexture" in BB,
              get: BB => BB.ambientTexture,
              set: (BB, TB) => {
                BB.ambientTexture = TB
              }
            },
            metadata: TB
          }, cd, Sd), (0, VB.g)(BB, null, gT, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "opacityTexture" in BB,
              get: BB => BB.opacityTexture,
              set: (BB, TB) => {
                BB.opacityTexture = TB
              }
            },
            metadata: TB
          }, Rd, ad), (0, VB.g)(BB, null, kT, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "reflectionTexture" in BB,
              get: BB => BB.reflectionTexture,
              set: (BB, TB) => {
                BB.reflectionTexture = TB
              }
            },
            metadata: TB
          }, Wd, hd), (0, VB.g)(BB, null, OT, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissiveTexture" in BB,
              get: BB => BB.emissiveTexture,
              set: (BB, TB) => {
                BB.emissiveTexture = TB
              }
            },
            metadata: TB
          }, qd, xd), (0, VB.g)(BB, null, uT, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularTexture" in BB,
              get: BB => BB.specularTexture,
              set: (BB, TB) => {
                BB.specularTexture = TB
              }
            },
            metadata: TB
          }, bd, nd), (0, VB.g)(BB, null, ET, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "bumpTexture" in BB,
              get: BB => BB.bumpTexture,
              set: (BB, TB) => {
                BB.bumpTexture = TB
              }
            },
            metadata: TB
          }, TV, dV), (0, VB.g)(BB, null, mT, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "lightmapTexture" in BB,
              get: BB => BB.lightmapTexture,
              set: (BB, TB) => {
                BB.lightmapTexture = TB
              }
            },
            metadata: TB
          }, pV, lV), (0, VB.g)(BB, null, NT, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "refractionTexture" in BB,
              get: BB => BB.refractionTexture,
              set: (BB, TB) => {
                BB.refractionTexture = TB
              }
            },
            metadata: TB
          }, gV, oV), (0, VB.g)(BB, null, UT, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "useAlphaFromDiffuseTexture" in BB,
              get: BB => BB.useAlphaFromDiffuseTexture,
              set: (BB, TB) => {
                BB.useAlphaFromDiffuseTexture = TB
              }
            },
            metadata: TB
          }, fV, sV), (0, VB.g)(BB, null, KT, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: BB => "useEmissiveAsIllumination" in BB,
              get: BB => BB.useEmissiveAsIllumination,
              set: (BB, TB) => {
                BB.useEmissiveAsIllumination = TB
              }
            },
            metadata: TB
          }, wV, UV), (0, VB.g)(BB, null, IT, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: BB => "linkEmissiveWithDiffuse" in BB,
              get: BB => BB.linkEmissiveWithDiffuse,
              set: (BB, TB) => {
                BB.linkEmissiveWithDiffuse = TB
              }
            },
            metadata: TB
          }, rV, IV), (0, VB.g)(BB, null, ST, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "useSpecularOverAlpha" in BB,
              get: BB => BB.useSpecularOverAlpha,
              set: (BB, TB) => {
                BB.useSpecularOverAlpha = TB
              }
            },
            metadata: TB
          }, PV, QV), (0, VB.g)(BB, null, QT, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "useReflectionOverAlpha" in BB,
              get: BB => BB.useReflectionOverAlpha,
              set: (BB, TB) => {
                BB.useReflectionOverAlpha = TB
              }
            },
            metadata: TB
          }, ZV, XV), (0, VB.g)(BB, null, aT, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "disableLighting" in BB,
              get: BB => BB.disableLighting,
              set: (BB, TB) => {
                BB.disableLighting = TB
              }
            },
            metadata: TB
          }, CV, GV), (0, VB.g)(BB, null, XT, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "useObjectSpaceNormalMap" in BB,
              get: BB => BB.useObjectSpaceNormalMap,
              set: (BB, TB) => {
                BB.useObjectSpaceNormalMap = TB
              }
            },
            metadata: TB
          }, jV, AV), (0, VB.g)(BB, null, hT, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: BB => "useParallax" in BB,
              get: BB => BB.useParallax,
              set: (BB, TB) => {
                BB.useParallax = TB
              }
            },
            metadata: TB
          }, eV, By), (0, VB.g)(BB, null, GT, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "useParallaxOcclusion" in BB,
              get: BB => BB.useParallaxOcclusion,
              set: (BB, TB) => {
                BB.useParallaxOcclusion = TB
              }
            },
            metadata: TB
          }, Vy, yy), (0, VB.g)(BB, null, jT, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "roughness" in BB,
              get: BB => BB.roughness,
              set: (BB, TB) => {
                BB.roughness = TB
              }
            },
            metadata: TB
          }, gy, oy), (0, VB.g)(BB, null, Bd, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: BB => "useLightmapAsShadowmap" in BB,
              get: BB => BB.useLightmapAsShadowmap,
              set: (BB, TB) => {
                BB.useLightmapAsShadowmap = TB
              }
            },
            metadata: TB
          }, my, iy), (0, VB.g)(BB, null, dd, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "diffuseFresnelParameters" in BB,
              get: BB => BB.diffuseFresnelParameters,
              set: (BB, TB) => {
                BB.diffuseFresnelParameters = TB
              }
            },
            metadata: TB
          }, fy, sy), (0, VB.g)(BB, null, yd, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "opacityFresnelParameters" in BB,
              get: BB => BB.opacityFresnelParameters,
              set: (BB, TB) => {
                BB.opacityFresnelParameters = TB
              }
            },
            metadata: TB
          }, wy, Uy), (0, VB.g)(BB, null, ld, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "reflectionFresnelParameters" in BB,
              get: BB => BB.reflectionFresnelParameters,
              set: (BB, TB) => {
                BB.reflectionFresnelParameters = TB
              }
            },
            metadata: TB
          }, ry, Iy), (0, VB.g)(BB, null, Yd, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "refractionFresnelParameters" in BB,
              get: BB => BB.refractionFresnelParameters,
              set: (BB, TB) => {
                BB.refractionFresnelParameters = TB
              }
            },
            metadata: TB
          }, Py, Qy), (0, VB.g)(BB, null, od, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissiveFresnelParameters" in BB,
              get: BB => BB.emissiveFresnelParameters,
              set: (BB, TB) => {
                BB.emissiveFresnelParameters = TB
              }
            },
            metadata: TB
          }, Zy, Xy), (0, VB.g)(BB, null, Ld, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: BB => "useReflectionFresnelFromSpecular" in BB,
              get: BB => BB.useReflectionFresnelFromSpecular,
              set: (BB, TB) => {
                BB.useReflectionFresnelFromSpecular = TB
              }
            },
            metadata: TB
          }, Cy, Gy), (0, VB.g)(BB, null, Dd, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "useGlossinessFromSpecularMapAlpha" in BB,
              get: BB => BB.useGlossinessFromSpecularMapAlpha,
              set: (BB, TB) => {
                BB.useGlossinessFromSpecularMapAlpha = TB
              }
            },
            metadata: TB
          }, jy, Ay), (0, VB.g)(BB, null, Hd, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: BB => "maxSimultaneousLights" in BB,
              get: BB => BB.maxSimultaneousLights,
              set: (BB, TB) => {
                BB.maxSimultaneousLights = TB
              }
            },
            metadata: TB
          }, ey, Bp), (0, VB.g)(BB, null, vd, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertNormalMapX" in BB,
              get: BB => BB.invertNormalMapX,
              set: (BB, TB) => {
                BB.invertNormalMapX = TB
              }
            },
            metadata: TB
          }, Vp, yp), (0, VB.g)(BB, null, Nd, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertNormalMapY" in BB,
              get: BB => BB.invertNormalMapY,
              set: (BB, TB) => {
                BB.invertNormalMapY = TB
              }
            },
            metadata: TB
          }, Jp, Yp), (0, VB.g)(BB, null, fd, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "twoSidedLighting" in BB,
              get: BB => BB.twoSidedLighting,
              set: (BB, TB) => {
                BB.twoSidedLighting = TB
              }
            },
            metadata: TB
          }, kp, Lp), (0, VB.g)(BB, null, Md, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "applyDecalMapAfterDetailMap" in BB,
              get: BB => BB.applyDecalMapAfterDetailMap,
              set: (BB, TB) => {
                BB.applyDecalMapAfterDetailMap = TB
              }
            },
            metadata: TB
          }, Hp, Ep), (0, VB.g)(null, null, yT, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_diffuseTexture" in BB,
              get: BB => BB._diffuseTexture,
              set: (BB, TB) => {
                BB._diffuseTexture = TB
              }
            },
            metadata: TB
          }, wd, Ud), (0, VB.g)(null, null, lT, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_ambientTexture" in BB,
              get: BB => BB._ambientTexture,
              set: (BB, TB) => {
                BB._ambientTexture = TB
              }
            },
            metadata: TB
          }, rd, Id), (0, VB.g)(null, null, YT, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_opacityTexture" in BB,
              get: BB => BB._opacityTexture,
              set: (BB, TB) => {
                BB._opacityTexture = TB
              }
            },
            metadata: TB
          }, Pd, Qd), (0, VB.g)(null, null, oT, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_reflectionTexture" in BB,
              get: BB => BB._reflectionTexture,
              set: (BB, TB) => {
                BB._reflectionTexture = TB
              }
            },
            metadata: TB
          }, Zd, Xd), (0, VB.g)(null, null, LT, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_emissiveTexture" in BB,
              get: BB => BB._emissiveTexture,
              set: (BB, TB) => {
                BB._emissiveTexture = TB
              }
            },
            metadata: TB
          }, Cd, Gd), (0, VB.g)(null, null, DT, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_specularTexture" in BB,
              get: BB => BB._specularTexture,
              set: (BB, TB) => {
                BB._specularTexture = TB
              }
            },
            metadata: TB
          }, jd, Ad), (0, VB.g)(null, null, HT, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_bumpTexture" in BB,
              get: BB => BB._bumpTexture,
              set: (BB, TB) => {
                BB._bumpTexture = TB
              }
            },
            metadata: TB
          }, ed, BV), (0, VB.g)(null, null, vT, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_lightmapTexture" in BB,
              get: BB => BB._lightmapTexture,
              set: (BB, TB) => {
                BB._lightmapTexture = TB
              }
            },
            metadata: TB
          }, VV, yV), (0, VB.g)(null, null, iT, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_refractionTexture" in BB,
              get: BB => BB._refractionTexture,
              set: (BB, TB) => {
                BB._refractionTexture = TB
              }
            },
            metadata: TB
          }, JV, YV), (0, VB.g)(null, null, tT, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "ambientColor" in BB,
              get: BB => BB.ambientColor,
              set: (BB, TB) => {
                BB.ambientColor = TB
              }
            },
            metadata: TB
          }, kV, LV), (0, VB.g)(null, null, fT, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "diffuseColor" in BB,
              get: BB => BB.diffuseColor,
              set: (BB, TB) => {
                BB.diffuseColor = TB
              }
            },
            metadata: TB
          }, OV, DV), (0, VB.g)(null, null, sT, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularColor" in BB,
              get: BB => BB.specularColor,
              set: (BB, TB) => {
                BB.specularColor = TB
              }
            },
            metadata: TB
          }, uV, HV), (0, VB.g)(null, null, MT, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "emissiveColor" in BB,
              get: BB => BB.emissiveColor,
              set: (BB, TB) => {
                BB.emissiveColor = TB
              }
            },
            metadata: TB
          }, EV, vV), (0, VB.g)(null, null, zT, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: BB => "specularPower" in BB,
              get: BB => BB.specularPower,
              set: (BB, TB) => {
                BB.specularPower = TB
              }
            },
            metadata: TB
          }, mV, iV), (0, VB.g)(null, null, wT, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useAlphaFromDiffuseTexture" in BB,
              get: BB => BB._useAlphaFromDiffuseTexture,
              set: (BB, TB) => {
                BB._useAlphaFromDiffuseTexture = TB
              }
            },
            metadata: TB
          }, NV, tV), (0, VB.g)(null, null, FT, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useEmissiveAsIllumination" in BB,
              get: BB => BB._useEmissiveAsIllumination,
              set: (BB, TB) => {
                BB._useEmissiveAsIllumination = TB
              }
            },
            metadata: TB
          }, MV, zV), (0, VB.g)(null, null, rT, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: BB => "_linkEmissiveWithDiffuse" in BB,
              get: BB => BB._linkEmissiveWithDiffuse,
              set: (BB, TB) => {
                BB._linkEmissiveWithDiffuse = TB
              }
            },
            metadata: TB
          }, FV, KV), (0, VB.g)(null, null, cT, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useSpecularOverAlpha" in BB,
              get: BB => BB._useSpecularOverAlpha,
              set: (BB, TB) => {
                BB._useSpecularOverAlpha = TB
              }
            },
            metadata: TB
          }, cV, SV), (0, VB.g)(null, null, PT, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useReflectionOverAlpha" in BB,
              get: BB => BB._useReflectionOverAlpha,
              set: (BB, TB) => {
                BB._useReflectionOverAlpha = TB
              }
            },
            metadata: TB
          }, RV, aV), (0, VB.g)(null, null, RT, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "_disableLighting" in BB,
              get: BB => BB._disableLighting,
              set: (BB, TB) => {
                BB._disableLighting = TB
              }
            },
            metadata: TB
          }, WV, hV), (0, VB.g)(null, null, ZT, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useObjectSpaceNormalMap" in BB,
              get: BB => BB._useObjectSpaceNormalMap,
              set: (BB, TB) => {
                BB._useObjectSpaceNormalMap = TB
              }
            },
            metadata: TB
          }, qV, xV), (0, VB.g)(null, null, WT, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useParallax" in BB,
              get: BB => BB._useParallax,
              set: (BB, TB) => {
                BB._useParallax = TB
              }
            },
            metadata: TB
          }, bV, nV), (0, VB.g)(null, null, CT, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useParallaxOcclusion" in BB,
              get: BB => BB._useParallaxOcclusion,
              set: (BB, TB) => {
                BB._useParallaxOcclusion = TB
              }
            },
            metadata: TB
          }, Ty, dy), (0, VB.g)(null, null, qT, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: BB => "parallaxScaleBias" in BB,
              get: BB => BB.parallaxScaleBias,
              set: (BB, TB) => {
                BB.parallaxScaleBias = TB
              }
            },
            metadata: TB
          }, py, ly), (0, VB.g)(null, null, xT, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: BB => "_roughness" in BB,
              get: BB => BB._roughness,
              set: (BB, TB) => {
                BB._roughness = TB
              }
            },
            metadata: TB
          }, Jy, Yy), (0, VB.g)(null, null, AT, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: BB => "indexOfRefraction" in BB,
              get: BB => BB.indexOfRefraction,
              set: (BB, TB) => {
                BB.indexOfRefraction = TB
              }
            },
            metadata: TB
          }, ky, Ly), (0, VB.g)(null, null, bT, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: BB => "invertRefractionY" in BB,
              get: BB => BB.invertRefractionY,
              set: (BB, TB) => {
                BB.invertRefractionY = TB
              }
            },
            metadata: TB
          }, Oy, Dy), (0, VB.g)(null, null, nT, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: BB => "alphaCutOff" in BB,
              get: BB => BB.alphaCutOff,
              set: (BB, TB) => {
                BB.alphaCutOff = TB
              }
            },
            metadata: TB
          }, uy, Hy), (0, VB.g)(null, null, eT, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useLightmapAsShadowmap" in BB,
              get: BB => BB._useLightmapAsShadowmap,
              set: (BB, TB) => {
                BB._useLightmapAsShadowmap = TB
              }
            },
            metadata: TB
          }, Ey, vy), (0, VB.g)(null, null, Td, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_diffuseFresnelParameters" in BB,
              get: BB => BB._diffuseFresnelParameters,
              set: (BB, TB) => {
                BB._diffuseFresnelParameters = TB
              }
            },
            metadata: TB
          }, Ny, ty), (0, VB.g)(null, null, Vd, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_opacityFresnelParameters" in BB,
              get: BB => BB._opacityFresnelParameters,
              set: (BB, TB) => {
                BB._opacityFresnelParameters = TB
              }
            },
            metadata: TB
          }, My, zy), (0, VB.g)(null, null, pd, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_reflectionFresnelParameters" in BB,
              get: BB => BB._reflectionFresnelParameters,
              set: (BB, TB) => {
                BB._reflectionFresnelParameters = TB
              }
            },
            metadata: TB
          }, Fy, Ky), (0, VB.g)(null, null, Jd, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_refractionFresnelParameters" in BB,
              get: BB => BB._refractionFresnelParameters,
              set: (BB, TB) => {
                BB._refractionFresnelParameters = TB
              }
            },
            metadata: TB
          }, cy, Sy), (0, VB.g)(null, null, gd, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: BB => "_emissiveFresnelParameters" in BB,
              get: BB => BB._emissiveFresnelParameters,
              set: (BB, TB) => {
                BB._emissiveFresnelParameters = TB
              }
            },
            metadata: TB
          }, Ry, ay), (0, VB.g)(null, null, kd, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useReflectionFresnelFromSpecular" in BB,
              get: BB => BB._useReflectionFresnelFromSpecular,
              set: (BB, TB) => {
                BB._useReflectionFresnelFromSpecular = TB
              }
            },
            metadata: TB
          }, Wy, hy), (0, VB.g)(null, null, Od, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: BB => "_useGlossinessFromSpecularMapAlpha" in BB,
              get: BB => BB._useGlossinessFromSpecularMapAlpha,
              set: (BB, TB) => {
                BB._useGlossinessFromSpecularMapAlpha = TB
              }
            },
            metadata: TB
          }, qy, xy), (0, VB.g)(null, null, ud, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: BB => "_maxSimultaneousLights" in BB,
              get: BB => BB._maxSimultaneousLights,
              set: (BB, TB) => {
                BB._maxSimultaneousLights = TB
              }
            },
            metadata: TB
          }, by, ny), (0, VB.g)(null, null, Ed, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: BB => "_invertNormalMapX" in BB,
              get: BB => BB._invertNormalMapX,
              set: (BB, TB) => {
                BB._invertNormalMapX = TB
              }
            },
            metadata: TB
          }, Tp, dp), (0, VB.g)(null, null, md, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: BB => "_invertNormalMapY" in BB,
              get: BB => BB._invertNormalMapY,
              set: (BB, TB) => {
                BB._invertNormalMapY = TB
              }
            },
            metadata: TB
          }, pp, lp), (0, VB.g)(null, null, td, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: BB => "_twoSidedLighting" in BB,
              get: BB => BB._twoSidedLighting,
              set: (BB, TB) => {
                BB._twoSidedLighting = TB
              }
            },
            metadata: TB
          }, gp, op), (0, VB.g)(null, null, sd, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: BB => "_applyDecalMapAfterDetailMap" in BB,
              get: BB => BB._applyDecalMapAfterDetailMap,
              set: (BB, TB) => {
                BB._applyDecalMapAfterDetailMap = TB
              }
            },
            metadata: TB
          }, Op, Dp), TB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TB
          })
        })(), BB.ForceGLSL = !1, BB._ShaderLoader = new tB.b((() => [Promise.all([dB.e(297), dB.e(296)]).then((() => dB(40563))), Promise.all([dB.e(302), dB.e(298), dB.e(311), dB.e(301)]).then((() => dB(40759)))]), (() => [Promise.all([dB.e(318), dB.e(313)]).then((() => dB(40924))), Promise.all([dB.e(319), dB.e(329), dB.e(315)]).then((() => dB(41103)))])), BB
      })(),
      SB = !1;

    function PB() {
      SB || (SB = !0, (0, kB.f)(), (0, wB.g)("BABYLON.StandardMaterial", cB), lB.g.DefaultMaterialFactory = BB => new cB("default material", BB))
    }
    Object.getOwnPropertyDescriptor(cB.prototype, "decalMap") || Object.defineProperty(cB.prototype, "decalMap", (0, UB.d)("StandardMaterial", "decalMap"))
  },
  39119: (BB, TB, dB) => {
    function VB(BB) {
      return class extends BB {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    dB.d(TB, {
      b: () => VB
    })
  },
  39108: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    class VB {
      constructor(BB, TB) {
        this._webGL = {
          load: BB,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: TB,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(BB) {
        const TB = 1 === BB ? this._webGPU : this._webGL;
        return TB.loaded ? void 0 : async () => {
          await this._loadAsync(TB)
        }
      }
      async _loadAsync(BB) {
        if (BB.loaded) return;
        let TB = BB.loadPromise;
        const dB = null === TB;
        dB && (TB = Promise.all(BB.load()), BB.loadPromise = TB);
        let VB = !1;
        try {
          await TB, VB = !0
        } finally {
          dB && this._completeLoad(BB, VB)
        }
      }
      _completeLoad(BB, TB) {
        BB.loaded = TB, BB.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);