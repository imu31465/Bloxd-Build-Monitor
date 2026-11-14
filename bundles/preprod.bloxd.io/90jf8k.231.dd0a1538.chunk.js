export const id = 231;
export const ids = [231];
export const modules = {
  38378: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF
    });
    var CF = SF(37983);

    function AF(FF) {
      return class extends FF {
        constructor() {
          super(...arguments);
          const FF = new.target;
          if (!FF[Symbol.metadata]) {
            const WF = Object.getPrototypeOf(FF)?.[Symbol.metadata];
            FF[Symbol.metadata] = WF ? Object.create(WF) : {}
          }
          const WF = (0, CF.d)(FF[Symbol.metadata]);
          WF._imageProcessingConfiguration || (WF._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(FF) {
          this._attachImageProcessingConfiguration(FF), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(FF) {
          FF !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !FF && this.OWF ? this._imageProcessingConfiguration = this.OWF().imageProcessingConfiguration : FF && (this._imageProcessingConfiguration = FF), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(FF) {
          this.imageProcessingConfiguration.colorCurvesEnabled = FF
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(FF) {
          this.imageProcessingConfiguration.colorGradingEnabled = FF
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(FF) {
          this._imageProcessingConfiguration.toneMappingEnabled = FF
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(FF) {
          this._imageProcessingConfiguration.exposure = FF
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(FF) {
          this._imageProcessingConfiguration.contrast = FF
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(FF) {
          this._imageProcessingConfiguration.colorGradingTexture = FF
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(FF) {
          this._imageProcessingConfiguration.colorCurves = FF
        }
      }
    }
  },
  38249: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF,
      g: () => AF
    });
    var CF = SF(38258);

    function AF(FF) {
      return class extends FF {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class uF extends CF.e {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  38327: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => iW
    });
    var CF = SF(37972),
      AF = SF(38267),
      uF = SF(37974),
      hF = SF(38317),
      bW = SF(38258),
      dF = SF(38333),
      PF = SF(38303);
    class RF extends bW.e {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let iW = (() => {
      var FF, WF, SF, bW;
      let iW, eF, EF, QF, rW, gW, tW = dF.e,
        TF = [],
        aW = [],
        kW = [],
        qW = [],
        VF = [],
        NF = [],
        DF = [],
        LF = [],
        mW = [],
        OF = [],
        xW = [],
        ZF = [];
      return FF = class extends tW {
        get texture() {
          return (0, CF.d)(this, WF, "f")
        }
        set texture(FF) {
          (0, CF.h)(this, WF, FF, "f")
        }
        get normalBlendMethod() {
          return (0, CF.d)(this, SF, "f")
        }
        set normalBlendMethod(FF) {
          (0, CF.h)(this, SF, FF, "f")
        }
        get isEnabled() {
          return (0, CF.d)(this, bW, "f")
        }
        set isEnabled(FF) {
          (0, CF.h)(this, bW, FF, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(FF) {
          let uF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(FF, "DetailMap", 140, new RF, uF), this._texture = null, WF.set(this, (0, CF.k)(this, TF, void 0)), this.diffuseBlendLevel = ((0, CF.k)(this, aW), (0, CF.k)(this, kW, 1)), this.roughnessBlendLevel = ((0, CF.k)(this, qW), (0, CF.k)(this, VF, 1)), this.bumpLevel = ((0, CF.k)(this, NF), (0, CF.k)(this, DF, 1)), this._normalBlendMethod = ((0, CF.k)(this, LF), AF.c.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), SF.set(this, (0, CF.k)(this, mW, void 0)), this._isEnabled = ((0, CF.k)(this, OF), !1), bW.set(this, (0, CF.k)(this, xW, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, CF.k)(this, ZF), this._internalMarkAllSubMeshesAsTexturesDirty = FF._dirtyCallbacks[1]
        }
        isReadyForSubMesh(FF, WF, SF) {
          return !this._isEnabled || !(FF._areTexturesDirty && WF.texturesEnabled && SF.getCaps().standardDerivatives && this._texture && hF.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(FF, WF) {
          if (this._isEnabled) {
            FF.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const SF = WF.sC();
            FF._areTexturesDirty && (SF.getCaps().standardDerivatives && this._texture && hF.e.DetailTextureEnabled && this._isEnabled ? ((0, PF.eb)(this._texture, FF, "DETAIL"), FF.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : FF.DETAIL = !1)
          } else FF.DETAIL = !1
        }
        bindForSubMesh(FF, WF) {
          if (!this._isEnabled) return;
          const SF = this._material.isFrozen;
          FF.useUbo && SF && FF.isSync || this._texture && hF.e.DetailTextureEnabled && (FF.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, PF.A)(this._texture, FF, "detail")), WF.texturesEnabled && this._texture && hF.e.DetailTextureEnabled && FF.setTexture("detailSampler", this._texture)
        }
        hasTexture(FF) {
          return this._texture === FF
        }
        getActiveTextures(FF) {
          this._texture && FF.push(this._texture)
        }
        getAnimatables(FF) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && FF.push(this._texture)
        }
        dispose(FF) {
          FF && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(FF) {
          FF.push("detailSampler")
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
      }, WF = new WeakMap, SF = new WeakMap, bW = new WeakMap, (() => {
        const WF = "function" === typeof Symbol && Symbol.metadata ? Object.create(tW[Symbol.metadata] ?? null) : void 0;
        iW = [(0, uF.C)("detailTexture"), (0, uF.i)("_markAllSubMeshesAsTexturesDirty")], eF = [(0, uF.H)()], EF = [(0, uF.H)()], QF = [(0, uF.H)()], rW = [(0, uF.H)(), (0, uF.i)("_markAllSubMeshesAsTexturesDirty")], gW = [(0, uF.H)(), (0, uF.i)("_markAllSubMeshesAsTexturesDirty")], (0, CF.j)(FF, null, iW, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: FF => "texture" in FF,
            get: FF => FF.texture,
            set: (FF, WF) => {
              FF.texture = WF
            }
          },
          metadata: WF
        }, TF, aW), (0, CF.j)(FF, null, rW, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: FF => "normalBlendMethod" in FF,
            get: FF => FF.normalBlendMethod,
            set: (FF, WF) => {
              FF.normalBlendMethod = WF
            }
          },
          metadata: WF
        }, mW, OF), (0, CF.j)(FF, null, gW, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: FF => "isEnabled" in FF,
            get: FF => FF.isEnabled,
            set: (FF, WF) => {
              FF.isEnabled = WF
            }
          },
          metadata: WF
        }, xW, ZF), (0, CF.j)(null, null, eF, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: FF => "diffuseBlendLevel" in FF,
            get: FF => FF.diffuseBlendLevel,
            set: (FF, WF) => {
              FF.diffuseBlendLevel = WF
            }
          },
          metadata: WF
        }, kW, qW), (0, CF.j)(null, null, EF, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: FF => "roughnessBlendLevel" in FF,
            get: FF => FF.roughnessBlendLevel,
            set: (FF, WF) => {
              FF.roughnessBlendLevel = WF
            }
          },
          metadata: WF
        }, VF, NF), (0, CF.j)(null, null, QF, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: FF => "bumpLevel" in FF,
            get: FF => FF.bumpLevel,
            set: (FF, WF) => {
              FF.bumpLevel = WF
            }
          },
          metadata: WF
        }, DF, LF), WF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WF
        })
      })(), FF
    })()
  },
  38258: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF
    });
    class CF {
      constructor(FF) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = FF, FF)
          for (const WF in FF) Object.prototype.hasOwnProperty.call(FF, WF) && this._setDefaultValue(WF)
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
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || FF, this._isDirty = !0
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
        for (const FF of Object.keys(this)) "_" !== FF[0] && this._keys.push(FF);
        if (this._externalProperties)
          for (const FF in this._externalProperties) - 1 === this._keys.indexOf(FF) && this._keys.push(FF)
      }
      isEqual(FF) {
        if (this._keys.length !== FF._keys.length) return !1;
        for (let WF = 0; WF < this._keys.length; WF++) {
          const SF = this._keys[WF];
          if (this[SF] !== FF[SF]) return !1
        }
        return !0
      }
      cloneTo(FF) {
        this._keys.length !== FF._keys.length && (FF._keys = this._keys.slice(0));
        for (let WF = 0; WF < this._keys.length; WF++) {
          const SF = this._keys[WF];
          FF[SF] = this[SF]
        }
      }
      reset() {
        for (const FF of this._keys) this._setDefaultValue(FF)
      }
      _setDefaultValue(FF) {
        const WF = this._externalProperties?.[FF]?.type ?? typeof this[FF],
          SF = this._externalProperties?.[FF]?.default;
        switch (WF) {
          case "number":
            this[FF] = SF ?? 0;
            break;
          case "string":
            this[FF] = SF ?? "";
            break;
          default:
            this[FF] = SF ?? !1
        }
      }
      toString() {
        let FF = "";
        for (let WF = 0; WF < this._keys.length; WF++) {
          const SF = this._keys[WF],
            CF = this[SF];
          switch (typeof CF) {
            case "number":
            case "string":
              FF += "#define " + SF + " " + CF + "\n";
              break;
            default:
              CF && (FF += "#define " + SF + "\n")
          }
        }
        return FF
      }
    }
  },
  38354: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => bW,
      f: () => hF,
      i: () => uF
    });
    var CF, AF = SF(35623);

    function uF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const CF = WF(FF);
      if (!Number.isInteger(CF) || CF < 0 || CF > SF) throw new Error(`Invalid geometry object ID ${CF} for mesh "${FF.name}". Object IDs must be integers between 0 and 0x${SF.toString(16).toUpperCase()}.`);
      return CF
    }

    function hF(FF, WF) {
      const SF = WF(FF);
      if (!Number.isInteger(SF) || SF < 0 || SF > 255 || 0 !== SF && 0 === (63 & SF)) throw new Error(`Invalid geometry mesh-blending tag ${SF} for mesh "${FF.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return SF
    }! function(FF) {
      FF[FF.Zero = 0] = "Zero", FF[FF.One = 1] = "One", FF[FF.MaxViewZ = 2] = "MaxViewZ", FF[FF.NoClear = 3] = "NoClear"
    }(CF || (CF = {}));
    class bW {
      static CreateConfiguration(FF) {
        return bW._Configurations[FF] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: AF.b.Zero(),
          currentViewProjection: AF.b.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, bW._Configurations[FF]
      }
      static DeleteConfiguration(FF) {
        delete bW._Configurations[FF]
      }
      static GetConfiguration(FF) {
        return bW._Configurations[FF]
      }
      static _PrepareConfiguration(FF, WF, SF) {
        const CF = bW._Configurations[FF];
        CF._attachments = WF, CF._colorAttachments = SF, CF._mrtCount = WF.length;
        let AF = "#define PREPASS\n";
        for (const uF of bW.GeometryTextureDescriptions) {
          const FF = CF.defines[uF.defineIndex];
          void 0 !== FF && (AF += `#define ${uF.define}\n#define ${uF.defineIndex} ${FF}\n`)
        }
        CF.objectIdIsRedFormat && (AF += "#define PREPASS_OBJECT_ID_R8\n"), CF._defines = AF + `#define SCENE_MRT_COUNT ${WF.length}\n`
      }
      static _PrepareStringDefines(FF, WF) {
        const SF = bW._Configurations[FF];
        return !!SF?._defines && (WF.push(SF._defines), !0)
      }
      static _BindAttachmentsForEffect(FF, WF) {
        const SF = bW._Configurations[FF.currentRenderPassId];
        return !SF?._attachments || (FF.bindAttachments(WF._multiTarget ? SF._attachments : SF._colorAttachments), WF._multiTarget || void 0 !== SF.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(FF) {
        const WF = bW._Configurations[FF.currentRenderPassId];
        WF?._colorAttachments && FF.bindAttachments(WF._colorAttachments)
      }
      static _BindColorAttachments(FF) {
        const WF = bW._Configurations[FF.currentRenderPassId];
        return !WF?._colorAttachments || (FF.bindAttachments(WF._colorAttachments), void 0 !== WF.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(FF) {
        const WF = bW._Configurations[FF.currentRenderPassId];
        return !WF?._colorAttachments || void 0 !== WF.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(FF, WF) {
        const SF = bW._Configurations[FF.currentRenderPassId];
        if (!SF) return;
        const CF = FF.getAlphaMode(),
          AF = void 0 === SF.defines.PREPASS_COLOR_INDEX || 2 === CF || 1 === CF || 17 === CF;
        WF.setFloat("geometryZeroAlphaDiscard", AF ? 1 : 0)
      }
      static AddUniformsAndSamplers(FF, WF) {
        FF.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(FF, WF) {
        for (const SF of WF)
          if (SF.Om)
            for (const WF of SF.Om) WF._removeDrawWrapper(FF)
      }
      static PrepareDefines(FF, WF, SF) {
        if (!SF._arePrePassDirty) return;
        const CF = bW._Configurations[FF];
        if (!CF) return;
        SF.PREPASS = !0;
        let AF = 0;
        for (let uF = 0; uF < bW.GeometryTextureDescriptions.length; uF++) {
          const FF = bW.GeometryTextureDescriptions[uF],
            WF = FF.define,
            hF = FF.defineIndex,
            dF = CF.defines[hF];
          void 0 !== dF ? (SF[WF] = !0, SF[hF] = dF, AF++) : (SF[WF] = !1, delete SF[hF])
        }
        SF.PREPASS_OBJECT_ID_R8 = CF.objectIdIsRedFormat, SF.SCENE_MRT_COUNT = CF._mrtCount ?? AF, SF.BONES_VELOCITY_ENABLED = WF.useBones && WF.computeBonesUsingShaders && WF.skeleton && !WF.skeleton.isUsingTextureForMatrices && -1 === CF.excludedSkinnedMesh.indexOf(WF)
      }
      static Bind(FF, WF, SF, CF, AF) {
        const dF = bW._Configurations[FF];
        if (!dF) return;
        const PF = SF.OWF(),
          RF = PF.sC();
        if (dF.reverseCulling && RF.setStateCullFaceType(PF._mirroredCameraPosition ? AF.cullBackFaces : !AF.cullBackFaces), void 0 !== dF.defines.PREPASS_OBJECT_ID_INDEX) {
          const FF = dF.objectIdIsRedFormat ? 255 : 16777215;
          let CF = SF.uniqueId;
          if (dF.objectIdProvider) CF = uF(SF, dF.objectIdProvider, FF);
          else if (CF > FF) throw new Error(`Invalid geometry object ID ${CF} for mesh "${SF.name}". Object IDs must be integers between 0 and 0x${FF.toString(16).toUpperCase()}.`);
          WF.setFloat("objectId", CF)
        }
        if (void 0 !== dF.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const FF = dF.meshBlendTagProvider ? hF(SF, dF.meshBlendTagProvider) : SF.meshBlendingTag;
          WF.setInt("meshBlendTag", FF)
        }
        if (void 0 !== dF.defines.PREPASS_VELOCITY_INDEX || void 0 !== dF.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const FF = dF._currentWorldMatrices ?? (dF._currentWorldMatrices = {}),
            AF = dF._worldMatrixFrameIds ?? (dF._worldMatrixFrameIds = {});
          if (FF[SF.uniqueId] || (FF[SF.uniqueId] = CF.clone(), dF.previousWorldMatrices[SF.uniqueId] = CF.clone()), AF[SF.uniqueId] !== RF.frameId && (dF.previousWorldMatrices[SF.uniqueId].fdF(FF[SF.uniqueId]), AF[SF.uniqueId] = RF.frameId), FF[SF.uniqueId].fdF(CF), -1 === dF.lastUpdateFrameId ? (dF.lastUpdateFrameId = RF.frameId, dF.previousViewProjection.fdF(PF.getTransformMatrix()), dF.currentViewProjection.fdF(PF.getTransformMatrix())) : dF.currentViewProjection.updateFlag !== PF.getTransformMatrix().updateFlag ? (dF.lastUpdateFrameId = RF.frameId, dF.previousViewProjection.fdF(dF.currentViewProjection), dF.currentViewProjection.fdF(PF.getTransformMatrix())) : dF.lastUpdateFrameId !== RF.frameId && (dF.lastUpdateFrameId = RF.frameId, dF.previousViewProjection.fdF(dF.currentViewProjection)), WF.setMatrix("previousWorld", dF.previousWorldMatrices[SF.uniqueId]), WF.setMatrix("previousViewProjection", dF.previousViewProjection), SF.useBones && SF.computeBonesUsingShaders && SF.skeleton) {
            const FF = SF.skeleton;
            if (!FF.isUsingTextureForMatrices || -1 === WF.getUniformIndex("boneTextureInfo")) {
              const CF = FF.getTransformMatrices(SF);
              CF && (dF.previousBones[SF.uniqueId] || (dF.previousBones[SF.uniqueId] = CF.slice()), WF.setMatrices("mPreviousBones", dF.previousBones[SF.uniqueId]), dF.previousBones[SF.uniqueId].set(CF))
            }
          }
        }
      }
    }
    bW.GeometryTextureDescriptions = [{
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
    }], bW._Configurations = {}
  },
  38333: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => eF,
      i: () => QF
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(37858),
      hF = SF(37824);
    const bW = new RegExp("^([gimus]+)!");
    class dF {
      constructor(FF) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = FF, this._scene = FF.OWF(), this._engine = this._scene.sC()
      }
      _addPlugin(FF) {
        for (let CF = 0; CF < this._plugins.length; ++CF)
          if (this._plugins[CF].name === FF.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !FF.isCompatible(this._material.shaderLanguage)) throw `The plugin "${FF.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const WF = FF.getClassName();
        dF._MaterialPluginClassToMainDefine[WF] || (dF._MaterialPluginClassToMainDefine[WF] = "MATERIALPLUGIN_" + ++dF._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (FF, WF) => this._handlePluginEvent(FF, WF), this._plugins.push(FF), this._plugins.sort(((FF, WF) => FF.priority - WF.priority)), this._codeInjectionPoints = {};
        const SF = {};
        SF[dF._MaterialPluginClassToMainDefine[WF]] = {
          type: "boolean",
          default: !0
        };
        for (const CF of this._plugins) CF.collectDefines(SF), this._collectPointNames("vertex", CF.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", CF.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = SF, !0
      }
      _activatePlugin(FF) {
        -1 === this._activePlugins.indexOf(FF) && (this._activePlugins.push(FF), this._activePlugins.sort(((FF, WF) => FF.priority - WF.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), FF.registerForExtraEvents && (this._activePluginsForExtraEvents.push(FF), this._activePluginsForExtraEvents.sort(((FF, WF) => FF.priority - WF.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(FF) {
        for (let WF = 0; WF < this._plugins.length; ++WF)
          if (this._plugins[WF].name === FF) return this._plugins[WF];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(FF) {
        let WF = !0;
        for (const SF of this._activePlugins) WF = WF && SF.isReadyForSubMesh(FF.defines, this._scene, this._engine, FF.subMesh);
        FF.isReadyForSubMesh = WF
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(FF) {
        for (const WF of this._activePlugins) WF.prepareDefinesBeforeAttributes(FF.defines, this._scene, FF.mesh)
      }
      _handlePluginEventPrepareDefines(FF) {
        for (const WF of this._activePlugins) WF.prepareDefines(FF.defines, this._scene, FF.mesh)
      }
      _handlePluginEventHardBindForSubMesh(FF) {
        for (const WF of this._activePluginsForExtraEvents) WF.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, FF.subMesh)
      }
      _handlePluginEventBindForSubMesh(FF) {
        for (const WF of this._activePlugins) WF.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, FF.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(FF) {
        let WF = !1;
        for (const SF of this._activePluginsForExtraEvents)
          if (WF = SF.hasRenderTargetTextures(), WF) break;
        FF.hasRenderTargetTextures = WF
      }
      _handlePluginEventFillRenderTargetTextures(FF) {
        for (const WF of this._activePluginsForExtraEvents) WF.fillRenderTargetTextures(FF.renderTargets)
      }
      _handlePluginEvent(FF, WF) {
        switch (FF) {
          case 512: {
            const FF = WF;
            for (const WF of this._activePlugins) WF.getActiveTextures(FF.activeTextures);
            break
          }
          case 256: {
            const FF = WF;
            for (const WF of this._activePlugins) WF.getAnimatables(FF.animatables);
            break
          }
          case 1024: {
            const FF = WF;
            let SF = !1;
            for (const WF of this._activePlugins)
              if (SF = WF.hasTexture(FF.texture), SF) break;
            FF.hasTexture = SF;
            break
          }
          case 2: {
            const FF = WF;
            for (const WF of this._plugins) WF.dispose(FF.forceDisposeTextures);
            break
          }
          case 4:
            WF.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const FF = WF;
            for (const WF of this._activePlugins) FF.fallbackRank = WF.addFallbacks(FF.defines, FF.fallbacks, FF.fallbackRank), WF.getAttributes(FF.attributes, this._scene, FF.mesh);
            this._uniformList.length > 0 && FF.uniforms.push(...this._uniformList), this._samplerList.length > 0 && FF.samplers.push(...this._samplerList), this._uboList.length > 0 && FF.uniformBuffersNames.push(...this._uboList), FF.customCode = this._injectCustomCode(FF, FF.customCode);
            break
          }
          case 8: {
            const FF = WF;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const SF = 1 === this._material.shaderLanguage;
            for (const WF of this._plugins) {
              const CF = WF.getUniforms(this._material.shaderLanguage);
              if (CF) {
                if (CF.ubo)
                  for (const WF of CF.ubo) {
                    if (WF.size && WF.type) {
                      const CF = WF.arraySize ?? 0;
                      if (FF.ubo.addUniform(WF.name, WF.size, CF), SF) {
                        let FF;
                        switch (WF.type) {
                          case "mat4":
                            FF = "mat4x4f";
                            break;
                          case "float":
                            FF = "f32";
                            break;
                          default:
                            FF = `${WF.type}f`
                        }
                        this._uboDeclaration += CF > 0 ? `uniform ${WF.name}: array<${FF}, ${CF}>;\n` : `uniform ${WF.name}: ${FF};\n`
                      } else this._uboDeclaration += `${WF.type} ${WF.name}${CF>0?`[${CF}]`:""};\n`
                    }
                    this._uniformList.push(WF.name)
                  }
                CF.vertex && (this._vertexDeclaration += CF.vertex + "\n"), CF.fragment && (this._fragmentDeclaration += CF.fragment + "\n"), CF.externalUniforms && this._uniformList.push(...CF.externalUniforms)
              }
              WF.getSamplers(this._samplerList), WF.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(FF, WF) {
        if (WF)
          for (const SF in WF) this._codeInjectionPoints[FF] || (this._codeInjectionPoints[FF] = {}), this._codeInjectionPoints[FF][SF] = !0
      }
      _injectCustomCode(FF, WF) {
        return (SF, CF) => {
          WF && (CF = WF(SF, CF)), this._uboDeclaration && (CF = CF.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (CF = CF.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (CF = CF.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const AF = this._codeInjectionPoints?.[SF];
          if (!AF) return CF;
          let dF = null;
          for (let WF in AF) {
            let AF = "";
            for (const CF of this._activePlugins) {
              const bW = this._material.shaderLanguage;
              let PF = CF.getCustomCode(SF, bW)?.[WF];
              PF && (CF.resolveIncludes && (null === dF && (dF = {
                defines: [],
                indexParameters: FF.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: hF.c.GetShadersRepository(bW),
                includesShadersStore: hF.c.GetIncludesShadersStore(bW),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                QPF: this._engine.QPF,
                processCodeAfterIncludes: void 0
              }), dF.isFragment = "fragment" === SF, (0, uF.i)(PF, dF, (FF => PF = FF))), AF += PF + "\n")
            }
            if (AF.length > 0)
              if ("!" === WF.charAt(0)) {
                WF = WF.substring(1);
                let FF = "g";
                if ("!" === WF.charAt(0)) FF = "", WF = WF.substring(1);
                else {
                  const SF = bW.exec(WF);
                  SF && SF.length >= 2 && (FF = SF[1], WF = WF.substring(FF.length + 1))
                }
                FF.indexOf("g") < 0 && (FF += "g");
                const SF = new RegExp(WF, FF);
                let uF = SF.exec(CF);
                for (; null !== uF;) {
                  const {
                    index: FF
                  } = uF, WF = PF(AF, uF);
                  CF = CF.substring(0, FF) + WF + CF.substring(FF + uF[0].length), SF.lastIndex = FF + WF.length, uF = SF.exec(CF)
                }
              } else {
                const FF = "#define " + WF;
                CF = CF.replace(FF, "\n" + AF + "\n" + FF)
              }
          }
          return CF
        }
      }
    }
    dF._MaterialPluginClassToMainDefine = {}, dF._MaterialPluginCounter = 0;

    function PF(FF, WF) {
      return FF.replace(/\$(\d+)/g, ((FF, SF) => {
        const CF = Number(SF);
        return CF < WF.length ? WF[CF] : ""
      }))
    }
    var RF = SF(37994),
      iW = SF(35660);
    let eF = (() => {
        var FF;
        let WF, SF, uF, hF, bW = [],
          PF = [],
          iW = [],
          eF = [],
          EF = [],
          QF = [],
          rW = [],
          gW = [];
        return FF = class {
          isCompatible(FF) {
            return 0 === FF
          }
          _enable(FF) {
            FF && this._pluginManager._activatePlugin(this)
          }
          constructor(FF, WF, SF, AF) {
            let uF = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              hF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              RF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, CF.k)(this, bW, void 0), this.priority = ((0, CF.k)(this, PF), (0, CF.k)(this, iW, 500)), this.resolveIncludes = ((0, CF.k)(this, eF), (0, CF.k)(this, EF, !1)), this.registerForExtraEvents = ((0, CF.k)(this, QF), (0, CF.k)(this, rW, !1)), this.doNotSerialize = ((0, CF.k)(this, gW), !1), this._material = FF, this.name = WF, this.priority = SF, this.resolveIncludes = RF, FF.pluginManager || (FF.pluginManager = new dF(FF), FF.xSF.add((() => {
              FF.pluginManager = void 0
            }))), this._pluginDefineNames = AF, this._pluginManager = FF.pluginManager, uF && this._pluginManager._addPlugin(this), hF && this._enable(!0), this.markAllDefinesAsDirty = FF._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(FF, WF, SF, CF) {
            return !0
          }
          hardBindForSubMesh(FF, WF, SF, CF) {}
          bindForSubMesh(FF, WF, SF, CF) {}
          dispose(FF) {}
          getCustomCode(FF) {
            return null
          }
          collectDefines(FF) {
            if (this._pluginDefineNames)
              for (const WF of Object.keys(this._pluginDefineNames)) {
                if ("_" === WF[0]) continue;
                const SF = typeof this._pluginDefineNames[WF];
                FF[WF] = {
                  type: "number" === SF ? "number" : "string" === SF ? "string" : "boolean" === SF ? "boolean" : "object",
                  default: this._pluginDefineNames[WF]
                }
              }
          }
          prepareDefinesBeforeAttributes(FF, WF, SF) {}
          prepareDefines(FF, WF, SF) {}
          hasTexture(FF) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(FF) {}
          getActiveTextures(FF) {}
          getAnimatables(FF) {}
          addFallbacks(FF, WF, SF) {
            return SF
          }
          getSamplers(FF) {}
          getAttributes(FF, WF, SF) {}
          getUniformBuffersNames(FF) {}
          getUniforms() {
            return {}
          }
          copyTo(FF) {
            RF.e.Clone((() => FF), this)
          }
          serialize() {
            return RF.e.Serialize(this)
          }
          parse(FF, WF, SF) {
            RF.e.Parse((() => this), FF, WF, SF)
          }
        }, (() => {
          const dF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          WF = [(0, AF.H)()], SF = [(0, AF.H)()], uF = [(0, AF.H)()], hF = [(0, AF.H)()], (0, CF.j)(null, null, WF, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: FF => "name" in FF,
              get: FF => FF.name,
              set: (FF, WF) => {
                FF.name = WF
              }
            },
            metadata: dF
          }, bW, PF), (0, CF.j)(null, null, SF, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: FF => "priority" in FF,
              get: FF => FF.priority,
              set: (FF, WF) => {
                FF.priority = WF
              }
            },
            metadata: dF
          }, iW, eF), (0, CF.j)(null, null, uF, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: FF => "resolveIncludes" in FF,
              get: FF => FF.resolveIncludes,
              set: (FF, WF) => {
                FF.resolveIncludes = WF
              }
            },
            metadata: dF
          }, EF, QF), (0, CF.j)(null, null, hF, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: FF => "registerForExtraEvents" in FF,
              get: FF => FF.registerForExtraEvents,
              set: (FF, WF) => {
                FF.registerForExtraEvents = WF
              }
            },
            metadata: dF
          }, rW, gW), dF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: dF
          })
        })(), FF
      })(),
      EF = !1;

    function QF() {
      EF || (EF = !0, (0, iW.f)("BABYLON.MaterialPluginBase", eF))
    }
  },
  38242: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF
    });
    class CF {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(FF) {
        FF.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(FF) {}
      bindForSubMesh(FF, WF, SF, CF, AF) {
        if (WF.prePassRenderer && WF.prePassRenderer.enabled && WF.prePassRenderer.currentRTisSceneRT && (-1 !== WF.prePassRenderer.getIndex(2) || -1 !== WF.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[SF.uniqueId] || (this.previousWorldMatrices[SF.uniqueId] = CF.clone()), this.previousViewProjection || (this.previousViewProjection = WF.getTransformMatrix().clone(), this.currentViewProjection = WF.getTransformMatrix().clone());
          const AF = WF.sC();
          this.currentViewProjection.updateFlag !== WF.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = AF.frameId, this.previousViewProjection.fdF(this.currentViewProjection), this.currentViewProjection.fdF(WF.getTransformMatrix())) : this._lastUpdateFrameId !== AF.frameId && (this._lastUpdateFrameId = AF.frameId, this.previousViewProjection.fdF(this.currentViewProjection)), FF.setMatrix("previousWorld", this.previousWorldMatrices[SF.uniqueId]), FF.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[SF.uniqueId] = CF.clone()
        }
      }
    }
  },
  38369: (FF, WF, SF) => {
    function CF(FF) {
      return class extends FF {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    SF.d(WF, {
      b: () => CF
    })
  },
  38233: (FF, WF, SF) => {
    SF.d(WF, {
      StandardMaterial: () => CF.h
    });
    var CF = SF(38236);
    (0, CF.d)()
  },
  38236: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => zW,
      h: () => cW
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(38081),
      hF = SF(38057),
      bW = SF(35678),
      dF = SF(38109),
      PF = SF(38242),
      RF = SF(38249),
      iW = SF(38088),
      eF = SF(38267),
      EF = SF(38258),
      QF = SF(38320),
      rW = SF(38317),
      gW = SF(38323),
      tW = SF(38327),
      TF = SF(38312),
      aW = SF(38341),
      kW = SF(38303),
      qW = SF(37994),
      VF = SF(38350),
      NF = SF(38354),
      DF = SF(38363),
      LF = SF(38369),
      mW = SF(38378),
      OF = SF(35660),
      xW = SF(37855);
    const ZF = {
      effect: null,
      subMesh: null
    };
    class oF extends((0, LF.b)((0, DF.c)(EF.e))) {}
    class YF extends((0, RF.g)(oF)) {
      constructor(FF) {
        super(FF), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class MF extends((0, mW.d)(QF.e)) {}
    let cW = (() => {
        var FF, WF, RF, EF, DF, LF, mW, OF, xW, oF, cW, GF, zW, IF, fF, yW, sF, nF, HF, KF, wF, XF, UF, BF, jW, vW, JF, pF, lF, FW, WW, SW, CW;
        let AW, uW, hW, bS, dW, PW, RW, iS, eW, EW, QW, rS, gS, tS, TW, aS, kS, qS, VW, NW, DW, LW, mS, OW, xS, ZW, oW, YW, MW, cS, GW, zS, IW, fW, yS, sW, nW, HW, KW, wW, XW, UW, BW, jS, vS, JW, pW, lW, FS, WS, SS, CS, AS, uS, hS, bC, dS, PS, RS, iC, eS, ES, QS, rC, gC, tC, TS, aC, kC, qC, VS, NS, DS, LS = MF,
          mC = [],
          OS = [],
          xC = [],
          ZS = [],
          oS = [],
          YS = [],
          MS = [],
          cC = [],
          GS = [],
          zC = [],
          IS = [],
          fS = [],
          yC = [],
          sS = [],
          nS = [],
          HS = [],
          KS = [],
          wS = [],
          XS = [],
          US = [],
          BS = [],
          jC = [],
          vC = [],
          JS = [],
          pS = [],
          lS = [],
          FC = [],
          WC = [],
          SC = [],
          CC = [],
          AC = [],
          uC = [],
          hC = [],
          bA = [],
          dC = [],
          PC = [],
          RC = [],
          iA = [],
          eC = [],
          EC = [],
          QC = [],
          rA = [],
          gA = [],
          tA = [],
          TC = [],
          aA = [],
          kA = [],
          qA = [],
          VC = [],
          NC = [],
          DC = [],
          LC = [],
          mA = [],
          OC = [],
          xA = [],
          ZC = [],
          oC = [],
          YC = [],
          MC = [],
          cA = [],
          GC = [],
          zA = [],
          IC = [],
          fC = [],
          yA = [],
          sC = [],
          nC = [],
          HC = [],
          KC = [],
          wC = [],
          XC = [],
          UC = [],
          BC = [],
          jA = [],
          vA = [],
          JC = [],
          pC = [],
          lC = [],
          FA = [],
          WA = [],
          SA = [],
          CA = [],
          AA = [],
          uA = [],
          hA = [],
          bu = [],
          dA = [],
          PA = [],
          RA = [],
          iu = [],
          eA = [],
          EA = [],
          QA = [],
          ru = [],
          gu = [],
          tu = [],
          TA = [],
          au = [],
          ku = [],
          qu = [],
          VA = [],
          NA = [],
          DA = [],
          LA = [],
          mu = [],
          OA = [],
          xu = [],
          ZA = [],
          oA = [],
          YA = [],
          MA = [],
          cu = [],
          GA = [],
          zu = [],
          IA = [],
          fA = [],
          yu = [],
          sA = [],
          nA = [],
          HA = [],
          KA = [],
          wA = [],
          XA = [],
          UA = [],
          BA = [],
          ju = [],
          vu = [],
          JA = [],
          pA = [],
          lA = [],
          Fu = [],
          Wu = [],
          Su = [],
          Cu = [],
          Au = [],
          uu = [],
          hu = [],
          bh = [],
          du = [],
          Pu = [],
          Ru = [],
          ih = [],
          eu = [],
          Eu = [],
          Qu = [],
          rh = [];
        return FF = class extends LS {
          get diffuseTexture() {
            return (0, CF.d)(this, WF, "f")
          }
          set diffuseTexture(FF) {
            (0, CF.h)(this, WF, FF, "f")
          }
          get ambientTexture() {
            return (0, CF.d)(this, RF, "f")
          }
          set ambientTexture(FF) {
            (0, CF.h)(this, RF, FF, "f")
          }
          get opacityTexture() {
            return (0, CF.d)(this, EF, "f")
          }
          set opacityTexture(FF) {
            (0, CF.h)(this, EF, FF, "f")
          }
          get reflectionTexture() {
            return (0, CF.d)(this, DF, "f")
          }
          set reflectionTexture(FF) {
            (0, CF.h)(this, DF, FF, "f")
          }
          get emissiveTexture() {
            return (0, CF.d)(this, LF, "f")
          }
          set emissiveTexture(FF) {
            (0, CF.h)(this, LF, FF, "f")
          }
          get specularTexture() {
            return (0, CF.d)(this, mW, "f")
          }
          set specularTexture(FF) {
            (0, CF.h)(this, mW, FF, "f")
          }
          get bumpTexture() {
            return (0, CF.d)(this, OF, "f")
          }
          set bumpTexture(FF) {
            (0, CF.h)(this, OF, FF, "f")
          }
          get lightmapTexture() {
            return (0, CF.d)(this, xW, "f")
          }
          set lightmapTexture(FF) {
            (0, CF.h)(this, xW, FF, "f")
          }
          get refractionTexture() {
            return (0, CF.d)(this, oF, "f")
          }
          set refractionTexture(FF) {
            (0, CF.h)(this, oF, FF, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, CF.d)(this, cW, "f")
          }
          set useAlphaFromDiffuseTexture(FF) {
            (0, CF.h)(this, cW, FF, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, CF.d)(this, GF, "f")
          }
          set useEmissiveAsIllumination(FF) {
            (0, CF.h)(this, GF, FF, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, CF.d)(this, zW, "f")
          }
          set linkEmissiveWithDiffuse(FF) {
            (0, CF.h)(this, zW, FF, "f")
          }
          get useSpecularOverAlpha() {
            return (0, CF.d)(this, IF, "f")
          }
          set useSpecularOverAlpha(FF) {
            (0, CF.h)(this, IF, FF, "f")
          }
          get useReflectionOverAlpha() {
            return (0, CF.d)(this, fF, "f")
          }
          set useReflectionOverAlpha(FF) {
            (0, CF.h)(this, fF, FF, "f")
          }
          get disableLighting() {
            return (0, CF.d)(this, yW, "f")
          }
          set disableLighting(FF) {
            (0, CF.h)(this, yW, FF, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, CF.d)(this, sF, "f")
          }
          set useObjectSpaceNormalMap(FF) {
            (0, CF.h)(this, sF, FF, "f")
          }
          get useParallax() {
            return (0, CF.d)(this, nF, "f")
          }
          set useParallax(FF) {
            (0, CF.h)(this, nF, FF, "f")
          }
          get useParallaxOcclusion() {
            return (0, CF.d)(this, HF, "f")
          }
          set useParallaxOcclusion(FF) {
            (0, CF.h)(this, HF, FF, "f")
          }
          get roughness() {
            return (0, CF.d)(this, KF, "f")
          }
          set roughness(FF) {
            (0, CF.h)(this, KF, FF, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, CF.d)(this, wF, "f")
          }
          set useLightmapAsShadowmap(FF) {
            (0, CF.h)(this, wF, FF, "f")
          }
          get diffuseFresnelParameters() {
            return (0, CF.d)(this, XF, "f")
          }
          set diffuseFresnelParameters(FF) {
            (0, CF.h)(this, XF, FF, "f")
          }
          get opacityFresnelParameters() {
            return (0, CF.d)(this, UF, "f")
          }
          set opacityFresnelParameters(FF) {
            (0, CF.h)(this, UF, FF, "f")
          }
          get reflectionFresnelParameters() {
            return (0, CF.d)(this, BF, "f")
          }
          set reflectionFresnelParameters(FF) {
            (0, CF.h)(this, BF, FF, "f")
          }
          get refractionFresnelParameters() {
            return (0, CF.d)(this, jW, "f")
          }
          set refractionFresnelParameters(FF) {
            (0, CF.h)(this, jW, FF, "f")
          }
          get emissiveFresnelParameters() {
            return (0, CF.d)(this, vW, "f")
          }
          set emissiveFresnelParameters(FF) {
            (0, CF.h)(this, vW, FF, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, CF.d)(this, JF, "f")
          }
          set useReflectionFresnelFromSpecular(FF) {
            (0, CF.h)(this, JF, FF, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, CF.d)(this, pF, "f")
          }
          set useGlossinessFromSpecularMapAlpha(FF) {
            (0, CF.h)(this, pF, FF, "f")
          }
          get maxSimultaneousLights() {
            return (0, CF.d)(this, lF, "f")
          }
          set maxSimultaneousLights(FF) {
            (0, CF.h)(this, lF, FF, "f")
          }
          get invertNormalMapX() {
            return (0, CF.d)(this, FW, "f")
          }
          set invertNormalMapX(FF) {
            (0, CF.h)(this, FW, FF, "f")
          }
          get invertNormalMapY() {
            return (0, CF.d)(this, WW, "f")
          }
          set invertNormalMapY(FF) {
            (0, CF.h)(this, WW, FF, "f")
          }
          get twoSidedLighting() {
            return (0, CF.d)(this, SW, "f")
          }
          set twoSidedLighting(FF) {
            (0, CF.h)(this, SW, FF, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, CF.d)(this, CW, "f")
          }
          set applyDecalMapAfterDetailMap(FF) {
            (0, CF.h)(this, CW, FF, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(SF, AF) {
            super(SF, AF, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || FF.ForceGLSL), this._diffuseTexture = (0, CF.k)(this, mC, null), WF.set(this, ((0, CF.k)(this, OS), (0, CF.k)(this, xC, void 0))), this._ambientTexture = ((0, CF.k)(this, ZS), (0, CF.k)(this, oS, null)), RF.set(this, ((0, CF.k)(this, YS), (0, CF.k)(this, MS, void 0))), this._opacityTexture = ((0, CF.k)(this, cC), (0, CF.k)(this, GS, null)), EF.set(this, ((0, CF.k)(this, zC), (0, CF.k)(this, IS, void 0))), this._reflectionTexture = ((0, CF.k)(this, fS), (0, CF.k)(this, yC, null)), DF.set(this, ((0, CF.k)(this, sS), (0, CF.k)(this, nS, void 0))), this._emissiveTexture = ((0, CF.k)(this, HS), (0, CF.k)(this, KS, null)), LF.set(this, ((0, CF.k)(this, wS), (0, CF.k)(this, XS, void 0))), this._specularTexture = ((0, CF.k)(this, US), (0, CF.k)(this, BS, null)), mW.set(this, ((0, CF.k)(this, jC), (0, CF.k)(this, vC, void 0))), this._bumpTexture = ((0, CF.k)(this, JS), (0, CF.k)(this, pS, null)), OF.set(this, ((0, CF.k)(this, lS), (0, CF.k)(this, FC, void 0))), this._lightmapTexture = ((0, CF.k)(this, WC), (0, CF.k)(this, SC, null)), xW.set(this, ((0, CF.k)(this, CC), (0, CF.k)(this, AC, void 0))), this._refractionTexture = ((0, CF.k)(this, uC), (0, CF.k)(this, hC, null)), oF.set(this, ((0, CF.k)(this, bA), (0, CF.k)(this, dC, void 0))), this.ambientColor = ((0, CF.k)(this, PC), (0, CF.k)(this, RC, new bW.e(0, 0, 0))), this.diffuseColor = ((0, CF.k)(this, iA), (0, CF.k)(this, eC, new bW.e(1, 1, 1))), this.specularColor = ((0, CF.k)(this, EC), (0, CF.k)(this, QC, new bW.e(1, 1, 1))), this.emissiveColor = ((0, CF.k)(this, rA), (0, CF.k)(this, gA, new bW.e(0, 0, 0))), this.specularPower = ((0, CF.k)(this, tA), (0, CF.k)(this, TC, 64)), this._useAlphaFromDiffuseTexture = ((0, CF.k)(this, aA), (0, CF.k)(this, kA, !1)), cW.set(this, ((0, CF.k)(this, qA), (0, CF.k)(this, VC, void 0))), this._useEmissiveAsIllumination = ((0, CF.k)(this, NC), (0, CF.k)(this, DC, !1)), GF.set(this, ((0, CF.k)(this, LC), (0, CF.k)(this, mA, void 0))), this._linkEmissiveWithDiffuse = ((0, CF.k)(this, OC), (0, CF.k)(this, xA, !1)), zW.set(this, ((0, CF.k)(this, ZC), (0, CF.k)(this, oC, void 0))), this._useSpecularOverAlpha = ((0, CF.k)(this, YC), (0, CF.k)(this, MC, !1)), IF.set(this, ((0, CF.k)(this, cA), (0, CF.k)(this, GC, void 0))), this._useReflectionOverAlpha = ((0, CF.k)(this, zA), (0, CF.k)(this, IC, !1)), fF.set(this, ((0, CF.k)(this, fC), (0, CF.k)(this, yA, void 0))), this._disableLighting = ((0, CF.k)(this, sC), (0, CF.k)(this, nC, !1)), yW.set(this, ((0, CF.k)(this, HC), (0, CF.k)(this, KC, void 0))), this._useObjectSpaceNormalMap = ((0, CF.k)(this, wC), (0, CF.k)(this, XC, !1)), sF.set(this, ((0, CF.k)(this, UC), (0, CF.k)(this, BC, void 0))), this._useParallax = ((0, CF.k)(this, jA), (0, CF.k)(this, vA, !1)), nF.set(this, ((0, CF.k)(this, JC), (0, CF.k)(this, pC, void 0))), this._useParallaxOcclusion = ((0, CF.k)(this, lC), (0, CF.k)(this, FA, !1)), HF.set(this, ((0, CF.k)(this, WA), (0, CF.k)(this, SA, void 0))), this.parallaxScaleBias = ((0, CF.k)(this, CA), (0, CF.k)(this, AA, .05)), this._roughness = ((0, CF.k)(this, uA), (0, CF.k)(this, hA, 0)), KF.set(this, ((0, CF.k)(this, bu), (0, CF.k)(this, dA, void 0))), this.indexOfRefraction = ((0, CF.k)(this, PA), (0, CF.k)(this, RA, .98)), this.invertRefractionY = ((0, CF.k)(this, iu), (0, CF.k)(this, eA, !0)), this.alphaCutOff = ((0, CF.k)(this, EA), (0, CF.k)(this, QA, .4)), this._useLightmapAsShadowmap = ((0, CF.k)(this, ru), (0, CF.k)(this, gu, !1)), wF.set(this, ((0, CF.k)(this, tu), (0, CF.k)(this, TA, void 0))), this._diffuseFresnelParameters = ((0, CF.k)(this, au), (0, CF.k)(this, ku, void 0)), XF.set(this, ((0, CF.k)(this, qu), (0, CF.k)(this, VA, void 0))), this._opacityFresnelParameters = ((0, CF.k)(this, NA), (0, CF.k)(this, DA, void 0)), UF.set(this, ((0, CF.k)(this, LA), (0, CF.k)(this, mu, void 0))), this._reflectionFresnelParameters = ((0, CF.k)(this, OA), (0, CF.k)(this, xu, void 0)), BF.set(this, ((0, CF.k)(this, ZA), (0, CF.k)(this, oA, void 0))), this._refractionFresnelParameters = ((0, CF.k)(this, YA), (0, CF.k)(this, MA, void 0)), jW.set(this, ((0, CF.k)(this, cu), (0, CF.k)(this, GA, void 0))), this._emissiveFresnelParameters = ((0, CF.k)(this, zu), (0, CF.k)(this, IA, void 0)), vW.set(this, ((0, CF.k)(this, fA), (0, CF.k)(this, yu, void 0))), this._useReflectionFresnelFromSpecular = ((0, CF.k)(this, sA), (0, CF.k)(this, nA, !1)), JF.set(this, ((0, CF.k)(this, HA), (0, CF.k)(this, KA, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, CF.k)(this, wA), (0, CF.k)(this, XA, !1)), pF.set(this, ((0, CF.k)(this, UA), (0, CF.k)(this, BA, void 0))), this._maxSimultaneousLights = ((0, CF.k)(this, ju), (0, CF.k)(this, vu, 4)), lF.set(this, ((0, CF.k)(this, JA), (0, CF.k)(this, pA, void 0))), this._invertNormalMapX = ((0, CF.k)(this, lA), (0, CF.k)(this, Fu, !1)), FW.set(this, ((0, CF.k)(this, Wu), (0, CF.k)(this, Su, void 0))), this._invertNormalMapY = ((0, CF.k)(this, Cu), (0, CF.k)(this, Au, !1)), WW.set(this, ((0, CF.k)(this, uu), (0, CF.k)(this, hu, void 0))), this._twoSidedLighting = ((0, CF.k)(this, bh), (0, CF.k)(this, du, !1)), SW.set(this, ((0, CF.k)(this, Pu), (0, CF.k)(this, Ru, void 0))), this._applyDecalMapAfterDetailMap = ((0, CF.k)(this, ih), (0, CF.k)(this, eu, !1)), CW.set(this, ((0, CF.k)(this, Eu), (0, CF.k)(this, Qu, void 0))), this._vertexPullingMetadata = ((0, CF.k)(this, rh), null), this._renderTargets = new uF.f(16), this._globalAmbientColor = new bW.e(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new tW.c(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new PF.b, this.getRenderTargetTextures = () => (this._renderTargets.reset(), FF.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), FF.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(FF.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(FF.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === eF.c.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== eF.c.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(WF, SF) {
            let CF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const AF = SF._drawWrapper;
            if (AF.effect && this.isFrozen && AF._wasPreviouslyReady && AF._wasPreviouslyUsingInstances === CF) return !0;
            SF.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), SF.materialDefines = new YF(this._eventInfo.defineNames));
            const uF = this.OWF(),
              hF = SF.materialDefines;
            if (this._isReadyForSubMesh(SF)) return !0;
            const bW = uF.sC();
            if (hF._needNormals = (0, kW.cb)(uF, WF, hF, !0, this._maxSimultaneousLights, this._disableLighting), !(0, kW.e)(uF, WF, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, kW.hb)(uF, hF);
            const RF = this.needAlphaBlendingForMesh(WF) && this.OWF().useOrderIndependentTransparency;
            if ((0, kW.kb)(uF, hF, this.canRenderToMRT && !RF), (0, kW.ib)(uF, hF, RF), NF.e.PrepareDefines(bW.currentRenderPassId, WF, hF), hF._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, hF._needUVs = !1;
              for (let FF = 1; FF <= 6; ++FF) hF["MAINUV" + FF] = !1;
              if (uF.texturesEnabled) {
                if (hF.DIFFUSEDIRECTUV = 0, hF.BUMPDIRECTUV = 0, hF.AMBIENTDIRECTUV = 0, hF.OPACITYDIRECTUV = 0, hF.EMISSIVEDIRECTUV = 0, hF.SPECULARDIRECTUV = 0, hF.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && FF.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, kW.eb)(this._diffuseTexture, hF, "DIFFUSE")
                } else hF.DIFFUSE = !1;
                if (this._ambientTexture && FF.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, kW.eb)(this._ambientTexture, hF, "AMBIENT")
                } else hF.AMBIENT = !1;
                if (this._opacityTexture && FF.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, kW.eb)(this._opacityTexture, hF, "OPACITY"), hF.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else hF.OPACITY = !1;
                if (this._reflectionTexture && FF.ReflectionTextureEnabled ? (hF.ROUGHNESS = this._roughness > 0, hF.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (hF.ROUGHNESS = !1, hF.REFLECTIONOVERALPHA = !1), !(0, kW._)(uF, this._reflectionTexture, hF)) return !1;
                if (this._emissiveTexture && FF.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, kW.eb)(this._emissiveTexture, hF, "EMISSIVE")
                } else hF.EMISSIVE = !1;
                if (this._lightmapTexture && FF.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, kW.eb)(this._lightmapTexture, hF, "LIGHTMAP"), hF.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, hF.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else hF.LIGHTMAP = !1;
                if (this._specularTexture && FF.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, kW.eb)(this._specularTexture, hF, "SPECULAR"), hF.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else hF.SPECULAR = !1;
                if (uF.sC().getCaps().standardDerivatives && this._bumpTexture && FF.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, kW.eb)(this._bumpTexture, hF, "BUMP"), hF.PARALLAX = this._useParallax, hF.PARALLAX_RHS = uF.useRightHandedSystem, hF.PARALLAXOCCLUSION = this._useParallaxOcclusion, hF.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else hF.BUMP = !1, hF.PARALLAX = !1, hF.PARALLAX_RHS = !1, hF.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && FF.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  hF._needUVs = !0, hF.REFRACTION = !0, hF.REFRACTIONMAP_3D = this._refractionTexture.isCube, hF.RGBDREFRACTION = this._refractionTexture.isRGBD, hF.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else hF.REFRACTION = !1;
                hF.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else hF.DIFFUSE = !1, hF.AMBIENT = !1, hF.OPACITY = !1, hF.REFLECTION = !1, hF.EMISSIVE = !1, hF.LIGHTMAP = !1, hF.BUMP = !1, hF.REFRACTION = !1;
              hF.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), hF.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, hF.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, hF.SPECULAROVERALPHA = this._useSpecularOverAlpha, hF.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, hF.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, hF.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(WF), hF.TEXTURE_REPETITION_MODE = bW.version > 1 || bW.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = hF, this._eventInfo.subMesh = SF, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (hF._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(hF), hF.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, hF.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (hF._areFresnelDirty && (FF.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (hF.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, hF.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, hF.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, hF.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, hF.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, hF.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, hF._needNormals = !0, hF.FRESNEL = !0) : hF.FRESNEL = !1), hF.AREALIGHTUSED || hF.CLUSTLIGHT_BATCH)
              for (let FF = 0; FF < WF.lightSources.length; FF++)
                if (!WF.lightSources[FF]._isReady()) return !1;
            (0, kW.fb)(WF, uF, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(WF), hF, this._applyDecalMapAfterDetailMap, this._useVertexPulling, SF.getRenderingMesh(), this._isVertexOutputInvariant), (0, kW.X)(uF, bW, this, hF, CF, null, SF.getRenderingMesh().hasThinInstances), this._eventInfo.defines = hF, this._eventInfo.mesh = WF, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, kW.W)(WF, hF, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let eF = !1;
            if (hF.isDirty) {
              const CF = hF._areLightsDisposed;
              hF.markAsProcessed();
              const AF = new gW.b;
              hF.REFLECTION && AF.addFallback(0, "REFLECTION"), hF.SPECULAR && AF.addFallback(0, "SPECULAR"), hF.BUMP && AF.addFallback(0, "BUMP"), hF.PARALLAX && AF.addFallback(1, "PARALLAX"), hF.PARALLAX_RHS && AF.addFallback(1, "PARALLAX_RHS"), hF.PARALLAXOCCLUSION && AF.addFallback(0, "PARALLAXOCCLUSION"), hF.SPECULAROVERALPHA && AF.addFallback(0, "SPECULAROVERALPHA"), hF.FOG && AF.addFallback(1, "FOG"), hF.POINTSIZE && AF.addFallback(0, "POINTSIZE"), hF.LOGARITHMICDEPTH && AF.addFallback(0, "LOGARITHMICDEPTH"), (0, kW.E)(hF, AF, this._maxSimultaneousLights), hF.SPECULARTERM && AF.addFallback(0, "SPECULARTERM"), hF.DIFFUSEFRESNEL && AF.addFallback(1, "DIFFUSEFRESNEL"), hF.OPACITYFRESNEL && AF.addFallback(2, "OPACITYFRESNEL"), hF.REFLECTIONFRESNEL && AF.addFallback(3, "REFLECTIONFRESNEL"), hF.EMISSIVEFRESNEL && AF.addFallback(4, "EMISSIVEFRESNEL"), hF.FRESNEL && AF.addFallback(4, "FRESNEL"), hF.MULTIVIEW && AF.addFallback(0, "MULTIVIEW");
              const RF = [dF.k.PositionKind];
              hF.NORMAL && RF.push(dF.k.NormalKind), hF.TANGENT && RF.push(dF.k.TangentKind);
              for (let FF = 1; FF <= 6; ++FF) hF["UV" + FF] && RF.push(`uv${1===FF?"":FF}`);
              hF.VERTEXCOLOR && RF.push(dF.k.ColorKind), (0, kW.J)(RF, WF, hF, AF), (0, kW.L)(RF, hF), (0, kW.P)(RF, WF, hF), (0, kW.G)(RF, WF, hF);
              let EF = "default";
              const QF = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                rW = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, kW.qb)(QF, rW, !1);
              const tW = ["Material", "Scene", "Mesh"],
                qW = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: hF.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = AF, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = hF, this._eventInfo.uniforms = QF, this._eventInfo.attributes = RF, this._eventInfo.samplers = rW, this._eventInfo.uniformBuffersNames = tW, this._eventInfo.customCode = void 0, this._eventInfo.mesh = WF, this._eventInfo.indexParameters = qW, this._callbackPluginEventGeneric(128, this._eventInfo), NF.e.AddUniformsAndSamplers(QF, rW), PF.b.AddUniforms(QF), PF.b.AddSamplers(rW), iW.d && (iW.d.PrepareUniforms(QF, hF), iW.d.PrepareSamplers(rW, hF)), (0, kW.rb)({
                  uniformsNames: QF,
                  uniformBuffersNames: tW,
                  samplers: rW,
                  defines: hF,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, TF.e)(QF), this._useVertexPulling) {
                const FF = SF.getRenderingMesh(),
                  WF = FF?.geometry;
                WF && (this._vertexPullingMetadata = (0, aW.f)(WF), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((FF, WF) => {
                  QF.push(`vp_${WF}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const VF = {};
              this.customShaderNameResolve && (EF = this.customShaderNameResolve(EF, QF, tW, rW, hF, RF, VF));
              const DF = hF.toString(),
                LF = SF.effect,
                mW = uF.sC().createEffect(EF, {
                  attributes: RF,
                  uniformsNames: QF,
                  uniformBuffersNames: tW,
                  samplers: rW,
                  defines: DF,
                  fallbacks: AF,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: qW,
                  processFinalCode: VF.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: hF.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: FF._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, bW);
              if (this._eventInfo.customCode = void 0, mW)
                if (this._onEffectCreatedObservable && (ZF.effect = mW, ZF.subMesh = SF, this._onEffectCreatedObservable.notifyObservers(ZF)), this.allowShaderHotSwapping && LF && !mW.isReady()) {
                  if (hF.markAsUnprocessed(), eF = this.isFrozen, CF) return hF._areLightsDisposed = !0, !1
                } else uF.resetCachedMaterial(), SF.setEffect(mW, hF, this._materialContext)
            }
            return !(!SF.effect || !SF.effect.isReady()) && (hF._renderId = uF.getRenderId(), AF._wasPreviouslyReady = !eF, AF._wasPreviouslyUsingInstances = CF, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const FF = this._uniformBuffer;
            FF.addUniform("diffuseLeftColor", 4), FF.addUniform("diffuseRightColor", 4), FF.addUniform("opacityParts", 4), FF.addUniform("reflectionLeftColor", 4), FF.addUniform("reflectionRightColor", 4), FF.addUniform("refractionLeftColor", 4), FF.addUniform("refractionRightColor", 4), FF.addUniform("emissiveLeftColor", 4), FF.addUniform("emissiveRightColor", 4), FF.addUniform("vDiffuseInfos", 2), FF.addUniform("vAmbientInfos", 2), FF.addUniform("vOpacityInfos", 2), FF.addUniform("vEmissiveInfos", 2), FF.addUniform("vLightmapInfos", 2), FF.addUniform("vSpecularInfos", 2), FF.addUniform("vBumpInfos", 3), FF.addUniform("diffuseMatrix", 16), FF.addUniform("ambientMatrix", 16), FF.addUniform("opacityMatrix", 16), FF.addUniform("emissiveMatrix", 16), FF.addUniform("lightmapMatrix", 16), FF.addUniform("specularMatrix", 16), FF.addUniform("bumpMatrix", 16), FF.addUniform("vTangentSpaceParams", 2), FF.addUniform("pointSize", 1), FF.addUniform("alphaCutOff", 1), FF.addUniform("refractionMatrix", 16), FF.addUniform("vRefractionInfos", 4), FF.addUniform("vRefractionPosition", 3), FF.addUniform("vRefractionSize", 3), FF.addUniform("vSpecularColor", 4), FF.addUniform("vEmissiveColor", 3), FF.addUniform("vDiffuseColor", 4), FF.addUniform("vAmbientColor", 3), FF.addUniform("cameraInfo", 4), FF.addUniform("vTextureRepetitionHexTilingParams", 4), (0, kW.mb)(FF, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(WF, SF, CF) {
            const AF = this.OWF(),
              uF = CF.materialDefines;
            if (!uF) return;
            const dF = CF.effect;
            if (!dF) return;
            this._activeEffect = dF, SF.getMeshUniformBuffer().bindToEffect(dF, "Mesh"), SF.transferToEffect(WF), this._uniformBuffer.bindToEffect(dF, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, AF, SF, WF, this.isFrozen), NF.e.Bind(AF.sC().currentRenderPassId, this._activeEffect, SF, WF, this);
            const PF = AF.activeCamera;
            PF ? this._uniformBuffer.updateFloat4("cameraInfo", PF.minZ, PF.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const RF = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", RF[0], RF[1], RF[2], RF[3]), this._eventInfo.subMesh = CF, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), uF.OBJECTSPACE_NORMALMAP && (WF.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const iW = this._mustRebind(AF, dF, CF, SF.visibility),
              eF = AF.sC()._features.needToAlwaysBindUniformBuffers;
            (0, kW.f)(SF, dF), this._vertexPullingMetadata && (0, aW.c)(dF, this._vertexPullingMetadata);
            const EF = this._uniformBuffer;
            if (iW) {
              if (this.bindViewProjection(dF), !EF.useUbo || !this.isFrozen || !EF.isSync || CF._drawWrapper._forceRebindOnNextCall) {
                if (FF.FresnelEnabled && uF.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (EF.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), EF.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const FF = bW.l.Color3[0];
                    FF.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), EF.updateColor4("opacityParts", FF, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (EF.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), EF.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (EF.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), EF.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (EF.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), EF.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (uF.ALPHATEST && EF.updateFloat("alphaCutOff", this.alphaCutOff), AF.texturesEnabled && (this._diffuseTexture && FF.DiffuseTextureEnabled && (EF.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, kW.A)(this._diffuseTexture, EF, "diffuse")), this._ambientTexture && FF.AmbientTextureEnabled && (EF.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, kW.A)(this._ambientTexture, EF, "ambient")), this._opacityTexture && FF.OpacityTextureEnabled && (EF.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, kW.A)(this._opacityTexture, EF, "opacity")), (0, kW.m)(AF, uF, EF, bW.e.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && FF.ReflectionTextureEnabled || EF.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && FF.EmissiveTextureEnabled && (EF.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, kW.A)(this._emissiveTexture, EF, "emissive")), this._lightmapTexture && FF.LightmapTextureEnabled && (EF.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, kW.A)(this._lightmapTexture, EF, "lightmap")), this._specularTexture && FF.SpecularTextureEnabled && (EF.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, kW.A)(this._specularTexture, EF, "specular")), this._bumpTexture && AF.sC().getCaps().standardDerivatives && FF.BumpTextureEnabled && (EF.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, kW.A)(this._bumpTexture, EF, "bump"), AF._mirroredCameraPosition ? EF.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : EF.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && FF.RefractionTextureEnabled)) {
                  let FF = 1;
                  if (this._refractionTexture.isCube || (EF.yhF("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (FF = this._refractionTexture.depth)), EF.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, FF, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const FF = this._refractionTexture;
                    EF.updateVector3("vRefractionPosition", FF.boundingBoxPosition), EF.updateVector3("vRefractionSize", FF.boundingBoxSize)
                  }
                }
                this.pointsCloud && EF.updateFloat("pointSize", this.pointSize), EF.updateColor4("vSpecularColor", this.specularColor, this.specularPower), EF.updateColor3("vEmissiveColor", FF.EmissiveTextureEnabled ? this.emissiveColor : bW.e.BlackReadOnly), EF.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), AF.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), EF.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              AF.texturesEnabled && (this._diffuseTexture && FF.DiffuseTextureEnabled && dF.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && FF.AmbientTextureEnabled && dF.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && FF.OpacityTextureEnabled && dF.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && FF.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? dF.setTexture("reflectionCubeSampler", this._reflectionTexture) : dF.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && FF.EmissiveTextureEnabled && dF.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && FF.LightmapTextureEnabled && dF.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && FF.SpecularTextureEnabled && dF.setTexture("specularSampler", this._specularTexture), this._bumpTexture && AF.sC().getCaps().standardDerivatives && FF.BumpTextureEnabled && dF.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && FF.RefractionTextureEnabled && (this._refractionTexture.isCube ? dF.setTexture("refractionCubeSampler", this._refractionTexture) : dF.setTexture("refraction2DSampler", this._refractionTexture))), this.OWF().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(SF) && this.OWF().depthPeelingRenderer.bind(dF), this._eventInfo.subMesh = CF, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, TF.h)(dF, this, AF), this.bindEyePosition(dF)
            } else eF && (this._needToBindSceneUbo = !0);
            !iW && this.isFrozen && !eF || !AF.lightsEnabled || this._disableLighting || (0, kW.q)(AF, SF, dF, uF, this._maxSimultaneousLights), !iW && this.isFrozen || ((AF.fogEnabled && SF.applyFog && AF.fogMode !== hF.f.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || SF.receiveShadows || uF.PREPASS || uF.CLUSTLIGHT_BATCH) && this.bindView(dF), (0, kW.i)(AF, SF, dF), uF.NUM_MORPH_INFLUENCERS && (0, kW.t)(SF, dF), uF.BAKED_VERTEX_ANIMATION_TEXTURE && SF.bakedVertexAnimationManager?.bind(dF, uF.INSTANCES), this.useLogarithmicDepth && (0, kW.r)(uF, dF, AF), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(SF, this._activeEffect, CF), EF.update()
          }
          _canBindRunFollower(WF, SF, CF, AF, uF) {
            const hF = WF.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === FF.prototype.isReadyForSubMesh && this.bindForSubMesh === FF.prototype.bindForSubMesh && this._mustRebind === QF.e.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !SF._features.needToAlwaysBindUniformBuffers && !(hF && hF.enabled && hF.currentRTisSceneRT) && !NF.e._Configurations[SF.currentRenderPassId] && !AF.materialDefines?.OBJECTSPACE_NORMALMAP && !CF.skeleton && !uF._bonesComputationForcedToCPU
          }
          _bindRunFollower(FF, WF, SF, CF) {
            this._activeEffect = CF, WF.getMeshUniformBuffer().bindToEffect(CF, "Mesh"), WF.transferToEffect(FF);
            const AF = this._uniformBuffer;
            AF.bindToEffect(CF, "Material");
            const uF = this._scene.activeCamera;
            uF ? AF.updateFloat4("cameraInfo", uF.minZ, uF.maxZ, 0, 0) : AF.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const hF = this.textureRepetitionHexTilingParams;
            AF.updateFloat4("vTextureRepetitionHexTilingParams", hF[0], hF[1], hF[2], hF[3]), this._afterBind(WF, CF, SF), AF.update()
          }
          getAnimatables() {
            const FF = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && FF.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && FF.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && FF.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && FF.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && FF.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && FF.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && FF.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && FF.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && FF.push(this._refractionTexture), FF
          }
          getActiveTextures() {
            const FF = super.getActiveTextures();
            return this._diffuseTexture && FF.push(this._diffuseTexture), this._ambientTexture && FF.push(this._ambientTexture), this._opacityTexture && FF.push(this._opacityTexture), this._reflectionTexture && FF.push(this._reflectionTexture), this._emissiveTexture && FF.push(this._emissiveTexture), this._specularTexture && FF.push(this._specularTexture), this._bumpTexture && FF.push(this._bumpTexture), this._lightmapTexture && FF.push(this._lightmapTexture), this._refractionTexture && FF.push(this._refractionTexture), FF
          }
          hasTexture(FF) {
            return !!super.hasTexture(FF) || (this._diffuseTexture === FF || (this._ambientTexture === FF || (this._opacityTexture === FF || (this._reflectionTexture === FF || (this._emissiveTexture === FF || (this._specularTexture === FF || (this._bumpTexture === FF || (this._lightmapTexture === FF || this._refractionTexture === FF))))))))
          }
          dispose(FF, WF) {
            WF && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(FF, WF)
          }
          clone(WF) {
            let SF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const AF = qW.e.Clone((() => new FF(WF, this.OWF())), this, {
              cloneTexturesOnlyOnce: SF
            });
            return AF.name = WF, AF.id = WF, this.stencil.copyTo(AF.stencil), this._clonePlugins(AF, CF), AF
          }
          static Parse(WF, SF, CF) {
            const AF = qW.e.Parse((() => new FF(WF.name, SF)), WF, SF, CF);
            return WF.stencil && AF.stencil.parse(WF.stencil, SF, CF), eF.c._ParsePlugins(WF, AF, SF, CF), AF
          }
          static get DiffuseTextureEnabled() {
            return rW.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(FF) {
            rW.e.DiffuseTextureEnabled = FF
          }
          static get DetailTextureEnabled() {
            return rW.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(FF) {
            rW.e.DetailTextureEnabled = FF
          }
          static get AmbientTextureEnabled() {
            return rW.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(FF) {
            rW.e.AmbientTextureEnabled = FF
          }
          static get OpacityTextureEnabled() {
            return rW.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(FF) {
            rW.e.OpacityTextureEnabled = FF
          }
          static get ReflectionTextureEnabled() {
            return rW.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(FF) {
            rW.e.ReflectionTextureEnabled = FF
          }
          static get EmissiveTextureEnabled() {
            return rW.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(FF) {
            rW.e.EmissiveTextureEnabled = FF
          }
          static get SpecularTextureEnabled() {
            return rW.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(FF) {
            rW.e.SpecularTextureEnabled = FF
          }
          static get BumpTextureEnabled() {
            return rW.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(FF) {
            rW.e.BumpTextureEnabled = FF
          }
          static get LightmapTextureEnabled() {
            return rW.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(FF) {
            rW.e.LightmapTextureEnabled = FF
          }
          static get RefractionTextureEnabled() {
            return rW.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(FF) {
            rW.e.RefractionTextureEnabled = FF
          }
          static get ColorGradingTextureEnabled() {
            return rW.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(FF) {
            rW.e.ColorGradingTextureEnabled = FF
          }
          static get FresnelEnabled() {
            return rW.e.FresnelEnabled
          }
          static set FresnelEnabled(FF) {
            rW.e.FresnelEnabled = FF
          }
        }, WF = new WeakMap, RF = new WeakMap, EF = new WeakMap, DF = new WeakMap, LF = new WeakMap, mW = new WeakMap, OF = new WeakMap, xW = new WeakMap, oF = new WeakMap, cW = new WeakMap, GF = new WeakMap, zW = new WeakMap, IF = new WeakMap, fF = new WeakMap, yW = new WeakMap, sF = new WeakMap, nF = new WeakMap, HF = new WeakMap, KF = new WeakMap, wF = new WeakMap, XF = new WeakMap, UF = new WeakMap, BF = new WeakMap, jW = new WeakMap, vW = new WeakMap, JF = new WeakMap, pF = new WeakMap, lF = new WeakMap, FW = new WeakMap, WW = new WeakMap, SW = new WeakMap, CW = new WeakMap, (() => {
          const WF = "function" === typeof Symbol && Symbol.metadata ? Object.create(LS[Symbol.metadata] ?? null) : void 0;
          AW = [(0, AF.C)("diffuseTexture")], uW = [(0, AF.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], hW = [(0, AF.C)("ambientTexture")], bS = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], dW = [(0, AF.C)("opacityTexture")], PW = [(0, AF.i)("_markAllSubMeshesAsTexturesAndMiscDirty")], RW = [(0, AF.C)("reflectionTexture")], iS = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], eW = [(0, AF.C)("emissiveTexture")], EW = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], QW = [(0, AF.C)("specularTexture")], rS = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], gS = [(0, AF.C)("bumpTexture")], tS = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], TW = [(0, AF.C)("lightmapTexture")], aS = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], kS = [(0, AF.C)("refractionTexture")], qS = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], VW = [(0, AF.o)("ambient")], NW = [(0, AF.o)("diffuse")], DW = [(0, AF.o)("specular")], LW = [(0, AF.o)("emissive")], mS = [(0, AF.H)()], OW = [(0, AF.H)("useAlphaFromDiffuseTexture")], xS = [() => ({
            init(FF) {
              return void 0 === FF && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = FF), FF
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(FF) {
              this._useAlphaFromDiffuseTexture = FF
            }
          })], ZW = [(0, AF.H)("useEmissiveAsIllumination")], oW = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], YW = [(0, AF.H)("linkEmissiveWithDiffuse")], MW = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], cS = [(0, AF.H)("useSpecularOverAlpha")], GW = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], zS = [(0, AF.H)("useReflectionOverAlpha")], IW = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], fW = [(0, AF.H)("disableLighting")], yS = [(0, AF.i)("_markAllSubMeshesAsLightsDirty")], sW = [(0, AF.H)("useObjectSpaceNormalMap")], nW = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], HW = [(0, AF.H)("useParallax")], KW = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], wW = [(0, AF.H)("useParallaxOcclusion")], XW = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], UW = [(0, AF.H)()], BW = [(0, AF.H)("roughness")], jS = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], vS = [(0, AF.H)()], JW = [(0, AF.H)()], pW = [(0, AF.H)()], lW = [(0, AF.H)("useLightmapAsShadowmap")], FS = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], WS = [(0, AF.u)("diffuseFresnelParameters")], SS = [(0, AF.i)("_markAllSubMeshesAsFresnelDirty")], CS = [(0, AF.u)("opacityFresnelParameters")], AS = [(0, AF.i)("_markAllSubMeshesAsFresnelAndMiscDirty")], uS = [(0, AF.u)("reflectionFresnelParameters")], hS = [(0, AF.i)("_markAllSubMeshesAsFresnelDirty")], bC = [(0, AF.u)("refractionFresnelParameters")], dS = [(0, AF.i)("_markAllSubMeshesAsFresnelDirty")], PS = [(0, AF.u)("emissiveFresnelParameters")], RS = [(0, AF.i)("_markAllSubMeshesAsFresnelDirty")], iC = [(0, AF.H)("useReflectionFresnelFromSpecular")], eS = [(0, AF.i)("_markAllSubMeshesAsFresnelDirty")], ES = [(0, AF.H)("useGlossinessFromSpecularMapAlpha")], QS = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], rC = [(0, AF.H)("maxSimultaneousLights")], gC = [(0, AF.i)("_markAllSubMeshesAsLightsDirty")], tC = [(0, AF.H)("invertNormalMapX")], TS = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], aC = [(0, AF.H)("invertNormalMapY")], kC = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], qC = [(0, AF.H)("twoSidedLighting")], VS = [(0, AF.i)("_markAllSubMeshesAsTexturesDirty")], NS = [(0, AF.H)("applyDecalMapAfterDetailMap")], DS = [(0, AF.i)("_markAllSubMeshesAsMiscDirty")], (0, CF.j)(FF, null, uW, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "diffuseTexture" in FF,
              get: FF => FF.diffuseTexture,
              set: (FF, WF) => {
                FF.diffuseTexture = WF
              }
            },
            metadata: WF
          }, xC, ZS), (0, CF.j)(FF, null, bS, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "ambientTexture" in FF,
              get: FF => FF.ambientTexture,
              set: (FF, WF) => {
                FF.ambientTexture = WF
              }
            },
            metadata: WF
          }, MS, cC), (0, CF.j)(FF, null, PW, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "opacityTexture" in FF,
              get: FF => FF.opacityTexture,
              set: (FF, WF) => {
                FF.opacityTexture = WF
              }
            },
            metadata: WF
          }, IS, fS), (0, CF.j)(FF, null, iS, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "reflectionTexture" in FF,
              get: FF => FF.reflectionTexture,
              set: (FF, WF) => {
                FF.reflectionTexture = WF
              }
            },
            metadata: WF
          }, nS, HS), (0, CF.j)(FF, null, EW, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "emissiveTexture" in FF,
              get: FF => FF.emissiveTexture,
              set: (FF, WF) => {
                FF.emissiveTexture = WF
              }
            },
            metadata: WF
          }, XS, US), (0, CF.j)(FF, null, rS, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "specularTexture" in FF,
              get: FF => FF.specularTexture,
              set: (FF, WF) => {
                FF.specularTexture = WF
              }
            },
            metadata: WF
          }, vC, JS), (0, CF.j)(FF, null, tS, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "bumpTexture" in FF,
              get: FF => FF.bumpTexture,
              set: (FF, WF) => {
                FF.bumpTexture = WF
              }
            },
            metadata: WF
          }, FC, WC), (0, CF.j)(FF, null, aS, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "lightmapTexture" in FF,
              get: FF => FF.lightmapTexture,
              set: (FF, WF) => {
                FF.lightmapTexture = WF
              }
            },
            metadata: WF
          }, AC, uC), (0, CF.j)(FF, null, qS, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "refractionTexture" in FF,
              get: FF => FF.refractionTexture,
              set: (FF, WF) => {
                FF.refractionTexture = WF
              }
            },
            metadata: WF
          }, dC, PC), (0, CF.j)(FF, null, xS, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "useAlphaFromDiffuseTexture" in FF,
              get: FF => FF.useAlphaFromDiffuseTexture,
              set: (FF, WF) => {
                FF.useAlphaFromDiffuseTexture = WF
              }
            },
            metadata: WF
          }, VC, NC), (0, CF.j)(FF, null, oW, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: FF => "useEmissiveAsIllumination" in FF,
              get: FF => FF.useEmissiveAsIllumination,
              set: (FF, WF) => {
                FF.useEmissiveAsIllumination = WF
              }
            },
            metadata: WF
          }, mA, OC), (0, CF.j)(FF, null, MW, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: FF => "linkEmissiveWithDiffuse" in FF,
              get: FF => FF.linkEmissiveWithDiffuse,
              set: (FF, WF) => {
                FF.linkEmissiveWithDiffuse = WF
              }
            },
            metadata: WF
          }, oC, YC), (0, CF.j)(FF, null, GW, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: FF => "useSpecularOverAlpha" in FF,
              get: FF => FF.useSpecularOverAlpha,
              set: (FF, WF) => {
                FF.useSpecularOverAlpha = WF
              }
            },
            metadata: WF
          }, GC, zA), (0, CF.j)(FF, null, IW, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: FF => "useReflectionOverAlpha" in FF,
              get: FF => FF.useReflectionOverAlpha,
              set: (FF, WF) => {
                FF.useReflectionOverAlpha = WF
              }
            },
            metadata: WF
          }, yA, sC), (0, CF.j)(FF, null, yS, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: FF => "disableLighting" in FF,
              get: FF => FF.disableLighting,
              set: (FF, WF) => {
                FF.disableLighting = WF
              }
            },
            metadata: WF
          }, KC, wC), (0, CF.j)(FF, null, nW, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: FF => "useObjectSpaceNormalMap" in FF,
              get: FF => FF.useObjectSpaceNormalMap,
              set: (FF, WF) => {
                FF.useObjectSpaceNormalMap = WF
              }
            },
            metadata: WF
          }, BC, jA), (0, CF.j)(FF, null, KW, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: FF => "useParallax" in FF,
              get: FF => FF.useParallax,
              set: (FF, WF) => {
                FF.useParallax = WF
              }
            },
            metadata: WF
          }, pC, lC), (0, CF.j)(FF, null, XW, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: FF => "useParallaxOcclusion" in FF,
              get: FF => FF.useParallaxOcclusion,
              set: (FF, WF) => {
                FF.useParallaxOcclusion = WF
              }
            },
            metadata: WF
          }, SA, CA), (0, CF.j)(FF, null, jS, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: FF => "roughness" in FF,
              get: FF => FF.roughness,
              set: (FF, WF) => {
                FF.roughness = WF
              }
            },
            metadata: WF
          }, dA, PA), (0, CF.j)(FF, null, FS, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: FF => "useLightmapAsShadowmap" in FF,
              get: FF => FF.useLightmapAsShadowmap,
              set: (FF, WF) => {
                FF.useLightmapAsShadowmap = WF
              }
            },
            metadata: WF
          }, TA, au), (0, CF.j)(FF, null, SS, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: FF => "diffuseFresnelParameters" in FF,
              get: FF => FF.diffuseFresnelParameters,
              set: (FF, WF) => {
                FF.diffuseFresnelParameters = WF
              }
            },
            metadata: WF
          }, VA, NA), (0, CF.j)(FF, null, AS, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: FF => "opacityFresnelParameters" in FF,
              get: FF => FF.opacityFresnelParameters,
              set: (FF, WF) => {
                FF.opacityFresnelParameters = WF
              }
            },
            metadata: WF
          }, mu, OA), (0, CF.j)(FF, null, hS, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: FF => "reflectionFresnelParameters" in FF,
              get: FF => FF.reflectionFresnelParameters,
              set: (FF, WF) => {
                FF.reflectionFresnelParameters = WF
              }
            },
            metadata: WF
          }, oA, YA), (0, CF.j)(FF, null, dS, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: FF => "refractionFresnelParameters" in FF,
              get: FF => FF.refractionFresnelParameters,
              set: (FF, WF) => {
                FF.refractionFresnelParameters = WF
              }
            },
            metadata: WF
          }, GA, zu), (0, CF.j)(FF, null, RS, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: FF => "emissiveFresnelParameters" in FF,
              get: FF => FF.emissiveFresnelParameters,
              set: (FF, WF) => {
                FF.emissiveFresnelParameters = WF
              }
            },
            metadata: WF
          }, yu, sA), (0, CF.j)(FF, null, eS, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: FF => "useReflectionFresnelFromSpecular" in FF,
              get: FF => FF.useReflectionFresnelFromSpecular,
              set: (FF, WF) => {
                FF.useReflectionFresnelFromSpecular = WF
              }
            },
            metadata: WF
          }, KA, wA), (0, CF.j)(FF, null, QS, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: FF => "useGlossinessFromSpecularMapAlpha" in FF,
              get: FF => FF.useGlossinessFromSpecularMapAlpha,
              set: (FF, WF) => {
                FF.useGlossinessFromSpecularMapAlpha = WF
              }
            },
            metadata: WF
          }, BA, ju), (0, CF.j)(FF, null, gC, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: FF => "maxSimultaneousLights" in FF,
              get: FF => FF.maxSimultaneousLights,
              set: (FF, WF) => {
                FF.maxSimultaneousLights = WF
              }
            },
            metadata: WF
          }, pA, lA), (0, CF.j)(FF, null, TS, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: FF => "invertNormalMapX" in FF,
              get: FF => FF.invertNormalMapX,
              set: (FF, WF) => {
                FF.invertNormalMapX = WF
              }
            },
            metadata: WF
          }, Su, Cu), (0, CF.j)(FF, null, kC, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: FF => "invertNormalMapY" in FF,
              get: FF => FF.invertNormalMapY,
              set: (FF, WF) => {
                FF.invertNormalMapY = WF
              }
            },
            metadata: WF
          }, hu, bh), (0, CF.j)(FF, null, VS, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: FF => "twoSidedLighting" in FF,
              get: FF => FF.twoSidedLighting,
              set: (FF, WF) => {
                FF.twoSidedLighting = WF
              }
            },
            metadata: WF
          }, Ru, ih), (0, CF.j)(FF, null, DS, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: FF => "applyDecalMapAfterDetailMap" in FF,
              get: FF => FF.applyDecalMapAfterDetailMap,
              set: (FF, WF) => {
                FF.applyDecalMapAfterDetailMap = WF
              }
            },
            metadata: WF
          }, Qu, rh), (0, CF.j)(null, null, AW, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "_diffuseTexture" in FF,
              get: FF => FF._diffuseTexture,
              set: (FF, WF) => {
                FF._diffuseTexture = WF
              }
            },
            metadata: WF
          }, mC, OS), (0, CF.j)(null, null, hW, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "_ambientTexture" in FF,
              get: FF => FF._ambientTexture,
              set: (FF, WF) => {
                FF._ambientTexture = WF
              }
            },
            metadata: WF
          }, oS, YS), (0, CF.j)(null, null, dW, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "_opacityTexture" in FF,
              get: FF => FF._opacityTexture,
              set: (FF, WF) => {
                FF._opacityTexture = WF
              }
            },
            metadata: WF
          }, GS, zC), (0, CF.j)(null, null, RW, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "_reflectionTexture" in FF,
              get: FF => FF._reflectionTexture,
              set: (FF, WF) => {
                FF._reflectionTexture = WF
              }
            },
            metadata: WF
          }, yC, sS), (0, CF.j)(null, null, eW, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "_emissiveTexture" in FF,
              get: FF => FF._emissiveTexture,
              set: (FF, WF) => {
                FF._emissiveTexture = WF
              }
            },
            metadata: WF
          }, KS, wS), (0, CF.j)(null, null, QW, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "_specularTexture" in FF,
              get: FF => FF._specularTexture,
              set: (FF, WF) => {
                FF._specularTexture = WF
              }
            },
            metadata: WF
          }, BS, jC), (0, CF.j)(null, null, gS, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "_bumpTexture" in FF,
              get: FF => FF._bumpTexture,
              set: (FF, WF) => {
                FF._bumpTexture = WF
              }
            },
            metadata: WF
          }, pS, lS), (0, CF.j)(null, null, TW, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "_lightmapTexture" in FF,
              get: FF => FF._lightmapTexture,
              set: (FF, WF) => {
                FF._lightmapTexture = WF
              }
            },
            metadata: WF
          }, SC, CC), (0, CF.j)(null, null, kS, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "_refractionTexture" in FF,
              get: FF => FF._refractionTexture,
              set: (FF, WF) => {
                FF._refractionTexture = WF
              }
            },
            metadata: WF
          }, hC, bA), (0, CF.j)(null, null, VW, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: FF => "ambientColor" in FF,
              get: FF => FF.ambientColor,
              set: (FF, WF) => {
                FF.ambientColor = WF
              }
            },
            metadata: WF
          }, RC, iA), (0, CF.j)(null, null, NW, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: FF => "diffuseColor" in FF,
              get: FF => FF.diffuseColor,
              set: (FF, WF) => {
                FF.diffuseColor = WF
              }
            },
            metadata: WF
          }, eC, EC), (0, CF.j)(null, null, DW, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: FF => "specularColor" in FF,
              get: FF => FF.specularColor,
              set: (FF, WF) => {
                FF.specularColor = WF
              }
            },
            metadata: WF
          }, QC, rA), (0, CF.j)(null, null, LW, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: FF => "emissiveColor" in FF,
              get: FF => FF.emissiveColor,
              set: (FF, WF) => {
                FF.emissiveColor = WF
              }
            },
            metadata: WF
          }, gA, tA), (0, CF.j)(null, null, mS, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: FF => "specularPower" in FF,
              get: FF => FF.specularPower,
              set: (FF, WF) => {
                FF.specularPower = WF
              }
            },
            metadata: WF
          }, TC, aA), (0, CF.j)(null, null, OW, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "_useAlphaFromDiffuseTexture" in FF,
              get: FF => FF._useAlphaFromDiffuseTexture,
              set: (FF, WF) => {
                FF._useAlphaFromDiffuseTexture = WF
              }
            },
            metadata: WF
          }, kA, qA), (0, CF.j)(null, null, ZW, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: FF => "_useEmissiveAsIllumination" in FF,
              get: FF => FF._useEmissiveAsIllumination,
              set: (FF, WF) => {
                FF._useEmissiveAsIllumination = WF
              }
            },
            metadata: WF
          }, DC, LC), (0, CF.j)(null, null, YW, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: FF => "_linkEmissiveWithDiffuse" in FF,
              get: FF => FF._linkEmissiveWithDiffuse,
              set: (FF, WF) => {
                FF._linkEmissiveWithDiffuse = WF
              }
            },
            metadata: WF
          }, xA, ZC), (0, CF.j)(null, null, cS, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: FF => "_useSpecularOverAlpha" in FF,
              get: FF => FF._useSpecularOverAlpha,
              set: (FF, WF) => {
                FF._useSpecularOverAlpha = WF
              }
            },
            metadata: WF
          }, MC, cA), (0, CF.j)(null, null, zS, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: FF => "_useReflectionOverAlpha" in FF,
              get: FF => FF._useReflectionOverAlpha,
              set: (FF, WF) => {
                FF._useReflectionOverAlpha = WF
              }
            },
            metadata: WF
          }, IC, fC), (0, CF.j)(null, null, fW, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: FF => "_disableLighting" in FF,
              get: FF => FF._disableLighting,
              set: (FF, WF) => {
                FF._disableLighting = WF
              }
            },
            metadata: WF
          }, nC, HC), (0, CF.j)(null, null, sW, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: FF => "_useObjectSpaceNormalMap" in FF,
              get: FF => FF._useObjectSpaceNormalMap,
              set: (FF, WF) => {
                FF._useObjectSpaceNormalMap = WF
              }
            },
            metadata: WF
          }, XC, UC), (0, CF.j)(null, null, HW, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: FF => "_useParallax" in FF,
              get: FF => FF._useParallax,
              set: (FF, WF) => {
                FF._useParallax = WF
              }
            },
            metadata: WF
          }, vA, JC), (0, CF.j)(null, null, wW, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: FF => "_useParallaxOcclusion" in FF,
              get: FF => FF._useParallaxOcclusion,
              set: (FF, WF) => {
                FF._useParallaxOcclusion = WF
              }
            },
            metadata: WF
          }, FA, WA), (0, CF.j)(null, null, UW, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: FF => "parallaxScaleBias" in FF,
              get: FF => FF.parallaxScaleBias,
              set: (FF, WF) => {
                FF.parallaxScaleBias = WF
              }
            },
            metadata: WF
          }, AA, uA), (0, CF.j)(null, null, BW, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: FF => "_roughness" in FF,
              get: FF => FF._roughness,
              set: (FF, WF) => {
                FF._roughness = WF
              }
            },
            metadata: WF
          }, hA, bu), (0, CF.j)(null, null, vS, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: FF => "indexOfRefraction" in FF,
              get: FF => FF.indexOfRefraction,
              set: (FF, WF) => {
                FF.indexOfRefraction = WF
              }
            },
            metadata: WF
          }, RA, iu), (0, CF.j)(null, null, JW, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: FF => "invertRefractionY" in FF,
              get: FF => FF.invertRefractionY,
              set: (FF, WF) => {
                FF.invertRefractionY = WF
              }
            },
            metadata: WF
          }, eA, EA), (0, CF.j)(null, null, pW, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: FF => "alphaCutOff" in FF,
              get: FF => FF.alphaCutOff,
              set: (FF, WF) => {
                FF.alphaCutOff = WF
              }
            },
            metadata: WF
          }, QA, ru), (0, CF.j)(null, null, lW, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: FF => "_useLightmapAsShadowmap" in FF,
              get: FF => FF._useLightmapAsShadowmap,
              set: (FF, WF) => {
                FF._useLightmapAsShadowmap = WF
              }
            },
            metadata: WF
          }, gu, tu), (0, CF.j)(null, null, WS, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: FF => "_diffuseFresnelParameters" in FF,
              get: FF => FF._diffuseFresnelParameters,
              set: (FF, WF) => {
                FF._diffuseFresnelParameters = WF
              }
            },
            metadata: WF
          }, ku, qu), (0, CF.j)(null, null, CS, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: FF => "_opacityFresnelParameters" in FF,
              get: FF => FF._opacityFresnelParameters,
              set: (FF, WF) => {
                FF._opacityFresnelParameters = WF
              }
            },
            metadata: WF
          }, DA, LA), (0, CF.j)(null, null, uS, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: FF => "_reflectionFresnelParameters" in FF,
              get: FF => FF._reflectionFresnelParameters,
              set: (FF, WF) => {
                FF._reflectionFresnelParameters = WF
              }
            },
            metadata: WF
          }, xu, ZA), (0, CF.j)(null, null, bC, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: FF => "_refractionFresnelParameters" in FF,
              get: FF => FF._refractionFresnelParameters,
              set: (FF, WF) => {
                FF._refractionFresnelParameters = WF
              }
            },
            metadata: WF
          }, MA, cu), (0, CF.j)(null, null, PS, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: FF => "_emissiveFresnelParameters" in FF,
              get: FF => FF._emissiveFresnelParameters,
              set: (FF, WF) => {
                FF._emissiveFresnelParameters = WF
              }
            },
            metadata: WF
          }, IA, fA), (0, CF.j)(null, null, iC, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: FF => "_useReflectionFresnelFromSpecular" in FF,
              get: FF => FF._useReflectionFresnelFromSpecular,
              set: (FF, WF) => {
                FF._useReflectionFresnelFromSpecular = WF
              }
            },
            metadata: WF
          }, nA, HA), (0, CF.j)(null, null, ES, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: FF => "_useGlossinessFromSpecularMapAlpha" in FF,
              get: FF => FF._useGlossinessFromSpecularMapAlpha,
              set: (FF, WF) => {
                FF._useGlossinessFromSpecularMapAlpha = WF
              }
            },
            metadata: WF
          }, XA, UA), (0, CF.j)(null, null, rC, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: FF => "_maxSimultaneousLights" in FF,
              get: FF => FF._maxSimultaneousLights,
              set: (FF, WF) => {
                FF._maxSimultaneousLights = WF
              }
            },
            metadata: WF
          }, vu, JA), (0, CF.j)(null, null, tC, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: FF => "_invertNormalMapX" in FF,
              get: FF => FF._invertNormalMapX,
              set: (FF, WF) => {
                FF._invertNormalMapX = WF
              }
            },
            metadata: WF
          }, Fu, Wu), (0, CF.j)(null, null, aC, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: FF => "_invertNormalMapY" in FF,
              get: FF => FF._invertNormalMapY,
              set: (FF, WF) => {
                FF._invertNormalMapY = WF
              }
            },
            metadata: WF
          }, Au, uu), (0, CF.j)(null, null, qC, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: FF => "_twoSidedLighting" in FF,
              get: FF => FF._twoSidedLighting,
              set: (FF, WF) => {
                FF._twoSidedLighting = WF
              }
            },
            metadata: WF
          }, du, Pu), (0, CF.j)(null, null, NS, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: FF => "_applyDecalMapAfterDetailMap" in FF,
              get: FF => FF._applyDecalMapAfterDetailMap,
              set: (FF, WF) => {
                FF._applyDecalMapAfterDetailMap = WF
              }
            },
            metadata: WF
          }, eu, Eu), WF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: WF
          })
        })(), FF.ForceGLSL = !1, FF._ShaderLoader = new VF.b((() => [Promise.all([SF.e(287), SF.e(286)]).then((() => SF(39715))), Promise.all([SF.e(292), SF.e(288), SF.e(301), SF.e(291)]).then((() => SF(39901)))]), (() => [Promise.all([SF.e(308), SF.e(303)]).then((() => SF(40049))), Promise.all([SF.e(309), SF.e(319), SF.e(305)]).then((() => SF(40258)))])), FF
      })(),
      GF = !1;

    function zW() {
      GF || (GF = !0, (0, iW.h)(), (0, OF.f)("BABYLON.StandardMaterial", cW), hF.f.DefaultMaterialFactory = FF => new cW("default material", FF))
    }
    Object.getOwnPropertyDescriptor(cW.prototype, "decalMap") || Object.defineProperty(cW.prototype, "decalMap", (0, xW.f)("StandardMaterial", "decalMap"))
  },
  38363: (FF, WF, SF) => {
    function CF(FF) {
      return class extends FF {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    SF.d(WF, {
      c: () => CF
    })
  },
  38350: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF
    });
    class CF {
      constructor(FF, WF) {
        this._webGL = {
          load: FF,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: WF,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(FF) {
        const WF = 1 === FF ? this._webGPU : this._webGL;
        return WF.loaded ? void 0 : async () => {
          await this._loadAsync(WF)
        }
      }
      async _loadAsync(FF) {
        if (FF.loaded) return;
        let WF = FF.loadPromise;
        const SF = null === WF;
        SF && (WF = Promise.all(FF.load()), FF.loadPromise = WF);
        let CF = !1;
        try {
          await WF, CF = !0
        } finally {
          SF && this._completeLoad(FF, CF)
        }
      }
      _completeLoad(FF, WF) {
        FF.loaded = WF, FF.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);