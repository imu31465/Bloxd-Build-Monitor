export const id = 261;
export const ids = [261];
export const modules = {
  40428: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => bS
    });
    var tS = gS(40056);

    function bS(SS) {
      return class extends SS {
        constructor() {
          super(...arguments);
          const SS = new.target;
          if (!SS[Symbol.metadata]) {
            const HS = Object.getPrototypeOf(SS)?.[Symbol.metadata];
            SS[Symbol.metadata] = HS ? Object.create(HS) : {}
          }
          const HS = (0, tS.b)(SS[Symbol.metadata]);
          HS._imageProcessingConfiguration || (HS._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(SS) {
          this._attachImageProcessingConfiguration(SS), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(SS) {
          SS !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !SS && this.lL ? this._imageProcessingConfiguration = this.lL().imageProcessingConfiguration : SS && (this._imageProcessingConfiguration = SS), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(SS) {
          this.imageProcessingConfiguration.colorCurvesEnabled = SS
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(SS) {
          this.imageProcessingConfiguration.colorGradingEnabled = SS
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(SS) {
          this._imageProcessingConfiguration.toneMappingEnabled = SS
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(SS) {
          this._imageProcessingConfiguration.exposure = SS
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(SS) {
          this._imageProcessingConfiguration.contrast = SS
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(SS) {
          this._imageProcessingConfiguration.colorGradingTexture = SS
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(SS) {
          this._imageProcessingConfiguration.colorCurves = SS
        }
      }
    }
  },
  40320: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => XS,
      e: () => bS
    });
    var tS = gS(40324);

    function bS(SS) {
      return class extends SS {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class XS extends tS.c {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  40396: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => fS
    });
    var tS = gS(40041),
      bS = gS(40331),
      XS = gS(40048),
      xS = gS(40378),
      NS = gS(40324),
      qS = gS(40400),
      uS = gS(40367);
    class IS extends NS.c {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let fS = (() => {
      var SS, HS, gS, NS;
      let fS, kS, aS, KS, jS, GS, CS = qS.e,
        nS = [],
        PS = [],
        QS = [],
        DS = [],
        wS = [],
        hS = [],
        ZS = [],
        JS = [],
        OS = [],
        dS = [],
        cS = [],
        vS = [];
      return SS = class extends CS {
        get texture() {
          return (0, tS.e)(this, HS, "f")
        }
        set texture(SS) {
          (0, tS.h)(this, HS, SS, "f")
        }
        get normalBlendMethod() {
          return (0, tS.e)(this, gS, "f")
        }
        set normalBlendMethod(SS) {
          (0, tS.h)(this, gS, SS, "f")
        }
        get isEnabled() {
          return (0, tS.e)(this, NS, "f")
        }
        set isEnabled(SS) {
          (0, tS.h)(this, NS, SS, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(SS) {
          let XS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(SS, "DetailMap", 140, new IS, XS), this._texture = null, HS.set(this, (0, tS.k)(this, nS, void 0)), this.diffuseBlendLevel = ((0, tS.k)(this, PS), (0, tS.k)(this, QS, 1)), this.roughnessBlendLevel = ((0, tS.k)(this, DS), (0, tS.k)(this, wS, 1)), this.bumpLevel = ((0, tS.k)(this, hS), (0, tS.k)(this, ZS, 1)), this._normalBlendMethod = ((0, tS.k)(this, JS), bS.d.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), gS.set(this, (0, tS.k)(this, OS, void 0)), this._isEnabled = ((0, tS.k)(this, dS), !1), NS.set(this, (0, tS.k)(this, cS, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, tS.k)(this, vS), this._internalMarkAllSubMeshesAsTexturesDirty = SS._dirtyCallbacks[1]
        }
        isReadyForSubMesh(SS, HS, gS) {
          return !this._isEnabled || !(SS._areTexturesDirty && HS.texturesEnabled && gS.getCaps().standardDerivatives && this._texture && xS.e.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(SS, HS) {
          if (this._isEnabled) {
            SS.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const gS = HS.AK();
            SS._areTexturesDirty && (gS.getCaps().standardDerivatives && this._texture && xS.e.DetailTextureEnabled && this._isEnabled ? ((0, uS.X)(this._texture, SS, "DETAIL"), SS.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : SS.DETAIL = !1)
          } else SS.DETAIL = !1
        }
        bindForSubMesh(SS, HS) {
          if (!this._isEnabled) return;
          const gS = this._material.isFrozen;
          SS.useUbo && gS && SS.isSync || this._texture && xS.e.DetailTextureEnabled && (SS.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, uS.y)(this._texture, SS, "detail")), HS.texturesEnabled && this._texture && xS.e.DetailTextureEnabled && SS.setTexture("detailSampler", this._texture)
        }
        hasTexture(SS) {
          return this._texture === SS
        }
        getActiveTextures(SS) {
          this._texture && SS.push(this._texture)
        }
        getAnimatables(SS) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && SS.push(this._texture)
        }
        dispose(SS) {
          SS && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(SS) {
          SS.push("detailSampler")
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
      }, HS = new WeakMap, gS = new WeakMap, NS = new WeakMap, (() => {
        const HS = "function" === typeof Symbol && Symbol.metadata ? Object.create(CS[Symbol.metadata] ?? null) : void 0;
        fS = [(0, XS.B)("detailTexture"), (0, XS.d)("_markAllSubMeshesAsTexturesDirty")], kS = [(0, XS.M)()], aS = [(0, XS.M)()], KS = [(0, XS.M)()], jS = [(0, XS.M)(), (0, XS.d)("_markAllSubMeshesAsTexturesDirty")], GS = [(0, XS.M)(), (0, XS.d)("_markAllSubMeshesAsTexturesDirty")], (0, tS.j)(SS, null, fS, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: SS => "texture" in SS,
            get: SS => SS.texture,
            set: (SS, HS) => {
              SS.texture = HS
            }
          },
          metadata: HS
        }, nS, PS), (0, tS.j)(SS, null, jS, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: SS => "normalBlendMethod" in SS,
            get: SS => SS.normalBlendMethod,
            set: (SS, HS) => {
              SS.normalBlendMethod = HS
            }
          },
          metadata: HS
        }, OS, dS), (0, tS.j)(SS, null, GS, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: SS => "isEnabled" in SS,
            get: SS => SS.isEnabled,
            set: (SS, HS) => {
              SS.isEnabled = HS
            }
          },
          metadata: HS
        }, cS, vS), (0, tS.j)(null, null, kS, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: SS => "diffuseBlendLevel" in SS,
            get: SS => SS.diffuseBlendLevel,
            set: (SS, HS) => {
              SS.diffuseBlendLevel = HS
            }
          },
          metadata: HS
        }, QS, DS), (0, tS.j)(null, null, aS, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: SS => "roughnessBlendLevel" in SS,
            get: SS => SS.roughnessBlendLevel,
            set: (SS, HS) => {
              SS.roughnessBlendLevel = HS
            }
          },
          metadata: HS
        }, wS, hS), (0, tS.j)(null, null, KS, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: SS => "bumpLevel" in SS,
            get: SS => SS.bumpLevel,
            set: (SS, HS) => {
              SS.bumpLevel = HS
            }
          },
          metadata: HS
        }, ZS, JS), HS && Object.defineProperty(SS, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: HS
        })
      })(), SS
    })()
  },
  40324: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    class tS {
      constructor(SS) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = SS, SS)
          for (const HS in SS) Object.prototype.hasOwnProperty.call(SS, HS) && this._setDefaultValue(HS)
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
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || SS, this._isDirty = !0
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
        for (const SS of Object.keys(this)) "_" !== SS[0] && this._keys.push(SS);
        if (this._externalProperties)
          for (const SS in this._externalProperties) - 1 === this._keys.indexOf(SS) && this._keys.push(SS)
      }
      isEqual(SS) {
        if (this._keys.length !== SS._keys.length) return !1;
        for (let HS = 0; HS < this._keys.length; HS++) {
          const gS = this._keys[HS];
          if (this[gS] !== SS[gS]) return !1
        }
        return !0
      }
      cloneTo(SS) {
        this._keys.length !== SS._keys.length && (SS._keys = this._keys.slice(0));
        for (let HS = 0; HS < this._keys.length; HS++) {
          const gS = this._keys[HS];
          SS[gS] = this[gS]
        }
      }
      reset() {
        for (const SS of this._keys) this._setDefaultValue(SS)
      }
      _setDefaultValue(SS) {
        const HS = this._externalProperties?.[SS]?.type ?? typeof this[SS],
          gS = this._externalProperties?.[SS]?.default;
        switch (HS) {
          case "number":
            this[SS] = gS ?? 0;
            break;
          case "string":
            this[SS] = gS ?? "";
            break;
          default:
            this[SS] = gS ?? !1
        }
      }
      toString() {
        let SS = "";
        for (let HS = 0; HS < this._keys.length; HS++) {
          const gS = this._keys[HS],
            tS = this[gS];
          switch (typeof tS) {
            case "number":
            case "string":
              SS += "#define " + gS + " " + tS + "\n";
              break;
            default:
              tS && (SS += "#define " + gS + "\n")
          }
        }
        return SS
      }
    }
  },
  40414: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => NS,
      e: () => xS,
      i: () => XS
    });
    var tS, bS = gS(37117);

    function XS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const tS = HS(SS);
      if (!Number.isInteger(tS) || tS < 0 || tS > gS) throw new Error(`Invalid geometry object ID ${tS} for mesh "${SS.name}". Object IDs must be integers between 0 and 0x${gS.toString(16).toUpperCase()}.`);
      return tS
    }

    function xS(SS, HS) {
      const gS = HS(SS);
      if (!Number.isInteger(gS) || gS < 0 || gS > 255 || 0 !== gS && 0 === (63 & gS)) throw new Error(`Invalid geometry mesh-blending tag ${gS} for mesh "${SS.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return gS
    }! function(SS) {
      SS[SS.Zero = 0] = "Zero", SS[SS.One = 1] = "One", SS[SS.MaxViewZ = 2] = "MaxViewZ", SS[SS.NoClear = 3] = "NoClear"
    }(tS || (tS = {}));
    class NS {
      static CreateConfiguration(SS) {
        return NS._Configurations[SS] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: bS.e.Zero(),
          currentViewProjection: bS.e.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, NS._Configurations[SS]
      }
      static DeleteConfiguration(SS) {
        delete NS._Configurations[SS]
      }
      static GetConfiguration(SS) {
        return NS._Configurations[SS]
      }
      static _PrepareConfiguration(SS, HS, gS) {
        const tS = NS._Configurations[SS];
        tS._attachments = HS, tS._colorAttachments = gS, tS._mrtCount = HS.length;
        let bS = "#define PREPASS\n";
        for (const XS of NS.GeometryTextureDescriptions) {
          const SS = tS.defines[XS.defineIndex];
          void 0 !== SS && (bS += `#define ${XS.define}\n#define ${XS.defineIndex} ${SS}\n`)
        }
        tS.objectIdIsRedFormat && (bS += "#define PREPASS_OBJECT_ID_R8\n"), tS._defines = bS + `#define SCENE_MRT_COUNT ${HS.length}\n`
      }
      static _PrepareStringDefines(SS, HS) {
        const gS = NS._Configurations[SS];
        return !!gS?._defines && (HS.push(gS._defines), !0)
      }
      static _BindAttachmentsForEffect(SS, HS) {
        const gS = NS._Configurations[SS.currentRenderPassId];
        return !gS?._attachments || (SS.bindAttachments(HS._multiTarget ? gS._attachments : gS._colorAttachments), HS._multiTarget || void 0 !== gS.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(SS) {
        const HS = NS._Configurations[SS.currentRenderPassId];
        HS?._colorAttachments && SS.bindAttachments(HS._colorAttachments)
      }
      static _BindColorAttachments(SS) {
        const HS = NS._Configurations[SS.currentRenderPassId];
        return !HS?._colorAttachments || (SS.bindAttachments(HS._colorAttachments), void 0 !== HS.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(SS) {
        const HS = NS._Configurations[SS.currentRenderPassId];
        return !HS?._colorAttachments || void 0 !== HS.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(SS, HS) {
        const gS = NS._Configurations[SS.currentRenderPassId];
        if (!gS) return;
        const tS = SS.getAlphaMode(),
          bS = void 0 === gS.defines.PREPASS_COLOR_INDEX || 2 === tS || 1 === tS || 17 === tS;
        HS.setFloat("geometryZeroAlphaDiscard", bS ? 1 : 0)
      }
      static AddUniformsAndSamplers(SS, HS) {
        SS.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(SS, HS) {
        for (const gS of HS)
          if (gS.dD)
            for (const HS of gS.dD) HS._removeDrawWrapper(SS)
      }
      static PrepareDefines(SS, HS, gS) {
        if (!gS._arePrePassDirty) return;
        const tS = NS._Configurations[SS];
        if (!tS) return;
        gS.PREPASS = !0;
        let bS = 0;
        for (let XS = 0; XS < NS.GeometryTextureDescriptions.length; XS++) {
          const SS = NS.GeometryTextureDescriptions[XS],
            HS = SS.define,
            xS = SS.defineIndex,
            qS = tS.defines[xS];
          void 0 !== qS ? (gS[HS] = !0, gS[xS] = qS, bS++) : (gS[HS] = !1, delete gS[xS])
        }
        gS.PREPASS_OBJECT_ID_R8 = tS.objectIdIsRedFormat, gS.SCENE_MRT_COUNT = tS._mrtCount ?? bS, gS.BONES_VELOCITY_ENABLED = HS.useBones && HS.computeBonesUsingShaders && HS.skeleton && !HS.skeleton.isUsingTextureForMatrices && -1 === tS.excludedSkinnedMesh.indexOf(HS)
      }
      static Bind(SS, HS, gS, tS, bS) {
        const qS = NS._Configurations[SS];
        if (!qS) return;
        const uS = gS.lL(),
          IS = uS.AK();
        if (qS.reverseCulling && IS.setStateCullFaceType(uS._mirroredCameraPosition ? bS.cullBackFaces : !bS.cullBackFaces), void 0 !== qS.defines.PREPASS_OBJECT_ID_INDEX) {
          const SS = qS.objectIdIsRedFormat ? 255 : 16777215;
          let tS = gS.uniqueId;
          if (qS.objectIdProvider) tS = XS(gS, qS.objectIdProvider, SS);
          else if (tS > SS) throw new Error(`Invalid geometry object ID ${tS} for mesh "${gS.name}". Object IDs must be integers between 0 and 0x${SS.toString(16).toUpperCase()}.`);
          HS.setFloat("objectId", tS)
        }
        if (void 0 !== qS.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const SS = qS.meshBlendTagProvider ? xS(gS, qS.meshBlendTagProvider) : gS.meshBlendingTag;
          HS.setInt("meshBlendTag", SS)
        }
        if (void 0 !== qS.defines.PREPASS_VELOCITY_INDEX || void 0 !== qS.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const SS = qS._currentWorldMatrices ?? (qS._currentWorldMatrices = {}),
            bS = qS._worldMatrixFrameIds ?? (qS._worldMatrixFrameIds = {});
          if (SS[gS.uniqueId] || (SS[gS.uniqueId] = tS.clone(), qS.previousWorldMatrices[gS.uniqueId] = tS.clone()), bS[gS.uniqueId] !== IS.frameId && (qS.previousWorldMatrices[gS.uniqueId].dJ(SS[gS.uniqueId]), bS[gS.uniqueId] = IS.frameId), SS[gS.uniqueId].dJ(tS), -1 === qS.lastUpdateFrameId ? (qS.lastUpdateFrameId = IS.frameId, qS.previousViewProjection.dJ(uS.getTransformMatrix()), qS.currentViewProjection.dJ(uS.getTransformMatrix())) : qS.currentViewProjection.updateFlag !== uS.getTransformMatrix().updateFlag ? (qS.lastUpdateFrameId = IS.frameId, qS.previousViewProjection.dJ(qS.currentViewProjection), qS.currentViewProjection.dJ(uS.getTransformMatrix())) : qS.lastUpdateFrameId !== IS.frameId && (qS.lastUpdateFrameId = IS.frameId, qS.previousViewProjection.dJ(qS.currentViewProjection)), HS.setMatrix("previousWorld", qS.previousWorldMatrices[gS.uniqueId]), HS.setMatrix("previousViewProjection", qS.previousViewProjection), gS.useBones && gS.computeBonesUsingShaders && gS.skeleton) {
            const SS = gS.skeleton;
            if (!SS.isUsingTextureForMatrices || -1 === HS.getUniformIndex("boneTextureInfo")) {
              const tS = SS.getTransformMatrices(gS);
              tS && (qS.previousBones[gS.uniqueId] || (qS.previousBones[gS.uniqueId] = tS.slice()), HS.setMatrices("mPreviousBones", qS.previousBones[gS.uniqueId]), qS.previousBones[gS.uniqueId].set(tS))
            }
          }
        }
      }
    }
    NS.GeometryTextureDescriptions = [{
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
    }], NS._Configurations = {}
  },
  40400: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => kS,
      i: () => KS
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(39930),
      xS = gS(39899);
    const NS = new RegExp("^([gimus]+)!");
    class qS {
      constructor(SS) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = SS, this._scene = SS.lL(), this._engine = this._scene.AK()
      }
      _addPlugin(SS) {
        for (let tS = 0; tS < this._plugins.length; ++tS)
          if (this._plugins[tS].name === SS.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !SS.isCompatible(this._material.shaderLanguage)) throw `The plugin "${SS.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const HS = SS.getClassName();
        qS._MaterialPluginClassToMainDefine[HS] || (qS._MaterialPluginClassToMainDefine[HS] = "MATERIALPLUGIN_" + ++qS._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (SS, HS) => this._handlePluginEvent(SS, HS), this._plugins.push(SS), this._plugins.sort(((SS, HS) => SS.priority - HS.priority)), this._codeInjectionPoints = {};
        const gS = {};
        gS[qS._MaterialPluginClassToMainDefine[HS]] = {
          type: "boolean",
          default: !0
        };
        for (const tS of this._plugins) tS.collectDefines(gS), this._collectPointNames("vertex", tS.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", tS.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = gS, !0
      }
      _activatePlugin(SS) {
        -1 === this._activePlugins.indexOf(SS) && (this._activePlugins.push(SS), this._activePlugins.sort(((SS, HS) => SS.priority - HS.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), SS.registerForExtraEvents && (this._activePluginsForExtraEvents.push(SS), this._activePluginsForExtraEvents.sort(((SS, HS) => SS.priority - HS.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(SS) {
        for (let HS = 0; HS < this._plugins.length; ++HS)
          if (this._plugins[HS].name === SS) return this._plugins[HS];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(SS) {
        let HS = !0;
        for (const gS of this._activePlugins) HS = HS && gS.isReadyForSubMesh(SS.defines, this._scene, this._engine, SS.subMesh);
        SS.isReadyForSubMesh = HS
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(SS) {
        for (const HS of this._activePlugins) HS.prepareDefinesBeforeAttributes(SS.defines, this._scene, SS.mesh)
      }
      _handlePluginEventPrepareDefines(SS) {
        for (const HS of this._activePlugins) HS.prepareDefines(SS.defines, this._scene, SS.mesh)
      }
      _handlePluginEventHardBindForSubMesh(SS) {
        for (const HS of this._activePluginsForExtraEvents) HS.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, SS.subMesh)
      }
      _handlePluginEventBindForSubMesh(SS) {
        for (const HS of this._activePlugins) HS.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, SS.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(SS) {
        let HS = !1;
        for (const gS of this._activePluginsForExtraEvents)
          if (HS = gS.hasRenderTargetTextures(), HS) break;
        SS.hasRenderTargetTextures = HS
      }
      _handlePluginEventFillRenderTargetTextures(SS) {
        for (const HS of this._activePluginsForExtraEvents) HS.fillRenderTargetTextures(SS.renderTargets)
      }
      _handlePluginEvent(SS, HS) {
        switch (SS) {
          case 512: {
            const SS = HS;
            for (const HS of this._activePlugins) HS.getActiveTextures(SS.activeTextures);
            break
          }
          case 256: {
            const SS = HS;
            for (const HS of this._activePlugins) HS.getAnimatables(SS.animatables);
            break
          }
          case 1024: {
            const SS = HS;
            let gS = !1;
            for (const HS of this._activePlugins)
              if (gS = HS.hasTexture(SS.texture), gS) break;
            SS.hasTexture = gS;
            break
          }
          case 2: {
            const SS = HS;
            for (const HS of this._plugins) HS.dispose(SS.forceDisposeTextures);
            break
          }
          case 4:
            HS.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const SS = HS;
            for (const HS of this._activePlugins) SS.fallbackRank = HS.addFallbacks(SS.defines, SS.fallbacks, SS.fallbackRank), HS.getAttributes(SS.attributes, this._scene, SS.mesh);
            this._uniformList.length > 0 && SS.uniforms.push(...this._uniformList), this._samplerList.length > 0 && SS.samplers.push(...this._samplerList), this._uboList.length > 0 && SS.uniformBuffersNames.push(...this._uboList), SS.customCode = this._injectCustomCode(SS, SS.customCode);
            break
          }
          case 8: {
            const SS = HS;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const gS = 1 === this._material.shaderLanguage;
            for (const HS of this._plugins) {
              const tS = HS.getUniforms(this._material.shaderLanguage);
              if (tS) {
                if (tS.ubo)
                  for (const HS of tS.ubo) {
                    if (HS.size && HS.type) {
                      const tS = HS.arraySize ?? 0;
                      if (SS.ubo.addUniform(HS.name, HS.size, tS), gS) {
                        let SS;
                        switch (HS.type) {
                          case "mat4":
                            SS = "mat4x4f";
                            break;
                          case "float":
                            SS = "f32";
                            break;
                          default:
                            SS = `${HS.type}f`
                        }
                        this._uboDeclaration += tS > 0 ? `uniform ${HS.name}: array<${SS}, ${tS}>;\n` : `uniform ${HS.name}: ${SS};\n`
                      } else this._uboDeclaration += `${HS.type} ${HS.name}${tS>0?`[${tS}]`:""};\n`
                    }
                    this._uniformList.push(HS.name)
                  }
                tS.vertex && (this._vertexDeclaration += tS.vertex + "\n"), tS.fragment && (this._fragmentDeclaration += tS.fragment + "\n"), tS.externalUniforms && this._uniformList.push(...tS.externalUniforms)
              }
              HS.getSamplers(this._samplerList), HS.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(SS, HS) {
        if (HS)
          for (const gS in HS) this._codeInjectionPoints[SS] || (this._codeInjectionPoints[SS] = {}), this._codeInjectionPoints[SS][gS] = !0
      }
      _injectCustomCode(SS, HS) {
        return (gS, tS) => {
          HS && (tS = HS(gS, tS)), this._uboDeclaration && (tS = tS.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (tS = tS.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (tS = tS.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const bS = this._codeInjectionPoints?.[gS];
          if (!bS) return tS;
          let qS = null;
          for (let HS in bS) {
            let bS = "";
            for (const tS of this._activePlugins) {
              const NS = this._material.shaderLanguage;
              let uS = tS.getCustomCode(gS, NS)?.[HS];
              uS && (tS.resolveIncludes && (null === qS && (qS = {
                defines: [],
                indexParameters: SS.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: xS.c.GetShadersRepository(NS),
                includesShadersStore: xS.c.GetIncludesShadersStore(NS),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                RgS: this._engine.RgS,
                processCodeAfterIncludes: void 0
              }), qS.isFragment = "fragment" === gS, (0, XS.i)(uS, qS, (SS => uS = SS))), bS += uS + "\n")
            }
            if (bS.length > 0)
              if ("!" === HS.charAt(0)) {
                HS = HS.substring(1);
                let SS = "g";
                if ("!" === HS.charAt(0)) SS = "", HS = HS.substring(1);
                else {
                  const gS = NS.exec(HS);
                  gS && gS.length >= 2 && (SS = gS[1], HS = HS.substring(SS.length + 1))
                }
                SS.indexOf("g") < 0 && (SS += "g");
                const gS = new RegExp(HS, SS);
                let XS = gS.exec(tS);
                for (; null !== XS;) {
                  const {
                    index: SS
                  } = XS, HS = uS(bS, XS);
                  tS = tS.substring(0, SS) + HS + tS.substring(SS + XS[0].length), gS.lastIndex = SS + HS.length, XS = gS.exec(tS)
                }
              } else {
                const SS = "#define " + HS;
                tS = tS.replace(SS, "\n" + bS + "\n" + SS)
              }
          }
          return tS
        }
      }
    }
    qS._MaterialPluginClassToMainDefine = {}, qS._MaterialPluginCounter = 0;

    function uS(SS, HS) {
      return SS.replace(/\$(\d+)/g, ((SS, gS) => {
        const tS = Number(gS);
        return tS < HS.length ? HS[tS] : ""
      }))
    }
    var IS = gS(40068),
      fS = gS(37164);
    let kS = (() => {
        var SS;
        let HS, gS, XS, xS, NS = [],
          uS = [],
          fS = [],
          kS = [],
          aS = [],
          KS = [],
          jS = [],
          GS = [];
        return SS = class {
          isCompatible(SS) {
            return 0 === SS
          }
          _enable(SS) {
            SS && this._pluginManager._activatePlugin(this)
          }
          constructor(SS, HS, gS, bS) {
            let XS = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              xS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              IS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, tS.k)(this, NS, void 0), this.priority = ((0, tS.k)(this, uS), (0, tS.k)(this, fS, 500)), this.resolveIncludes = ((0, tS.k)(this, kS), (0, tS.k)(this, aS, !1)), this.registerForExtraEvents = ((0, tS.k)(this, KS), (0, tS.k)(this, jS, !1)), this.doNotSerialize = ((0, tS.k)(this, GS), !1), this._material = SS, this.name = HS, this.priority = gS, this.resolveIncludes = IS, SS.pluginManager || (SS.pluginManager = new qS(SS), SS.bY.add((() => {
              SS.pluginManager = void 0
            }))), this._pluginDefineNames = bS, this._pluginManager = SS.pluginManager, XS && this._pluginManager._addPlugin(this), xS && this._enable(!0), this.markAllDefinesAsDirty = SS._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(SS, HS, gS, tS) {
            return !0
          }
          hardBindForSubMesh(SS, HS, gS, tS) {}
          bindForSubMesh(SS, HS, gS, tS) {}
          dispose(SS) {}
          getCustomCode(SS) {
            return null
          }
          collectDefines(SS) {
            if (this._pluginDefineNames)
              for (const HS of Object.keys(this._pluginDefineNames)) {
                if ("_" === HS[0]) continue;
                const gS = typeof this._pluginDefineNames[HS];
                SS[HS] = {
                  type: "number" === gS ? "number" : "string" === gS ? "string" : "boolean" === gS ? "boolean" : "object",
                  default: this._pluginDefineNames[HS]
                }
              }
          }
          prepareDefinesBeforeAttributes(SS, HS, gS) {}
          prepareDefines(SS, HS, gS) {}
          hasTexture(SS) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(SS) {}
          getActiveTextures(SS) {}
          getAnimatables(SS) {}
          addFallbacks(SS, HS, gS) {
            return gS
          }
          getSamplers(SS) {}
          getAttributes(SS, HS, gS) {}
          getUniformBuffersNames(SS) {}
          getUniforms() {
            return {}
          }
          copyTo(SS) {
            IS.b.Clone((() => SS), this)
          }
          serialize() {
            return IS.b.Serialize(this)
          }
          parse(SS, HS, gS) {
            IS.b.Parse((() => this), SS, HS, gS)
          }
        }, (() => {
          const qS = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          HS = [(0, bS.M)()], gS = [(0, bS.M)()], XS = [(0, bS.M)()], xS = [(0, bS.M)()], (0, tS.j)(null, null, HS, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: SS => "name" in SS,
              get: SS => SS.name,
              set: (SS, HS) => {
                SS.name = HS
              }
            },
            metadata: qS
          }, NS, uS), (0, tS.j)(null, null, gS, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: SS => "priority" in SS,
              get: SS => SS.priority,
              set: (SS, HS) => {
                SS.priority = HS
              }
            },
            metadata: qS
          }, fS, kS), (0, tS.j)(null, null, XS, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: SS => "resolveIncludes" in SS,
              get: SS => SS.resolveIncludes,
              set: (SS, HS) => {
                SS.resolveIncludes = HS
              }
            },
            metadata: qS
          }, aS, KS), (0, tS.j)(null, null, xS, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: SS => "registerForExtraEvents" in SS,
              get: SS => SS.registerForExtraEvents,
              set: (SS, HS) => {
                SS.registerForExtraEvents = HS
              }
            },
            metadata: qS
          }, jS, GS), qS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: qS
          })
        })(), SS
      })(),
      aS = !1;

    function KS() {
      aS || (aS = !0, (0, fS.f)("BABYLON.MaterialPluginBase", kS))
    }
  },
  40313: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS
    });
    class tS {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(SS) {
        SS.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(SS) {}
      bindForSubMesh(SS, HS, gS, tS, bS) {
        if (HS.prePassRenderer && HS.prePassRenderer.enabled && HS.prePassRenderer.currentRTisSceneRT && (-1 !== HS.prePassRenderer.getIndex(2) || -1 !== HS.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[gS.uniqueId] || (this.previousWorldMatrices[gS.uniqueId] = tS.clone()), this.previousViewProjection || (this.previousViewProjection = HS.getTransformMatrix().clone(), this.currentViewProjection = HS.getTransformMatrix().clone());
          const bS = HS.AK();
          this.currentViewProjection.updateFlag !== HS.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = bS.frameId, this.previousViewProjection.dJ(this.currentViewProjection), this.currentViewProjection.dJ(HS.getTransformMatrix())) : this._lastUpdateFrameId !== bS.frameId && (this._lastUpdateFrameId = bS.frameId, this.previousViewProjection.dJ(this.currentViewProjection)), SS.setMatrix("previousWorld", this.previousWorldMatrices[gS.uniqueId]), SS.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[gS.uniqueId] = tS.clone()
        }
      }
    }
  },
  40421: (SS, HS, gS) => {
    function tS(SS) {
      return class extends SS {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    gS.d(HS, {
      c: () => tS
    })
  },
  40306: (SS, HS, gS) => {
    gS.d(HS, {
      StandardMaterial: () => tS.i
    });
    var tS = gS(40310);
    (0, tS.e)()
  },
  40310: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => VS,
      i: () => AS
    });
    var tS = gS(40041),
      bS = gS(40048),
      XS = gS(40144),
      xS = gS(40131),
      NS = gS(37300),
      qS = gS(40183),
      uS = gS(40313),
      IS = gS(40320),
      fS = gS(40152),
      kS = gS(40331),
      aS = gS(40324),
      KS = gS(40386),
      jS = gS(40378),
      GS = gS(40392),
      CS = gS(40396),
      nS = gS(40375),
      PS = gS(40405),
      QS = gS(40367),
      DS = gS(40068),
      wS = gS(40412),
      hS = gS(40414),
      ZS = gS(40418),
      JS = gS(40421),
      OS = gS(40428),
      dS = gS(37164),
      cS = gS(39926);
    const vS = {
      effect: null,
      subMesh: null
    };
    class ES extends((0, JS.c)((0, ZS.c)(aS.c))) {}
    class LS extends((0, IS.e)(ES)) {
      constructor(SS) {
        super(SS), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class YS extends((0, OS.b)(KS.d)) {}
    let AS = (() => {
        var SS, HS, IS, aS, ZS, JS, OS, dS, cS, ES, AS, yS, VS, iS, WS, zS, US, pS, sS, BS, MS, FS, RS, TS, oS, lS, mS, eS, rS, SH, HH, gH, tH;
        let bH, XH, xH, NH, qH, uH, IH, fH, kH, aH, KH, jH, GH, CH, nH, PH, QH, DH, wH, hH, ZH, JH, OH, dH, cH, vH, EH, LH, YH, AH, yH, VH, iH, WH, zH, UH, pH, sH, BH, MH, FH, RH, TH, oH, lH, mH, eH, rH, Sg, Hg, gg, tg, bg, Xg, xg, Ng, qg, ug, Ig, fg, kg, ag, Kg, jg, Gg, Cg, ng, Pg, Qg, Dg, wg, hg, Zg, Jg = YS,
          Og = [],
          dg = [],
          cg = [],
          vg = [],
          Eg = [],
          Lg = [],
          Yg = [],
          Ag = [],
          yg = [],
          Vg = [],
          ig = [],
          Wg = [],
          zg = [],
          Ug = [],
          pg = [],
          sg = [],
          Bg = [],
          Mg = [],
          Fg = [],
          Rg = [],
          Tg = [],
          og = [],
          lg = [],
          mg = [],
          eg = [],
          rg = [],
          St = [],
          Ht = [],
          gt = [],
          tt = [],
          bt = [],
          Xt = [],
          xt = [],
          Nt = [],
          qt = [],
          ut = [],
          It = [],
          ft = [],
          kt = [],
          Kt = [],
          jt = [],
          Gt = [],
          Ct = [],
          nt = [],
          Pt = [],
          Qt = [],
          Dt = [],
          wt = [],
          ht = [],
          Zt = [],
          Jt = [],
          Ot = [],
          dt = [],
          ct = [],
          vt = [],
          Et = [],
          Lt = [],
          Yt = [],
          At = [],
          yt = [],
          Vt = [],
          it = [],
          Wt = [],
          zt = [],
          Ut = [],
          pt = [],
          st = [],
          Bt = [],
          Mt = [],
          Ft = [],
          Rt = [],
          Tt = [],
          ot = [],
          lt = [],
          mt = [],
          et = [],
          rt = [],
          Sb = [],
          Hb = [],
          gb = [],
          tb = [],
          bb = [],
          Xb = [],
          xb = [],
          Nb = [],
          qb = [],
          ub = [],
          Ib = [],
          fb = [],
          kb = [],
          ab = [],
          Kb = [],
          jb = [],
          Gb = [],
          Cb = [],
          nb = [],
          Pb = [],
          Qb = [],
          Db = [],
          wb = [],
          hb = [],
          Zb = [],
          Jb = [],
          Ob = [],
          db = [],
          cb = [],
          vb = [],
          Eb = [],
          Lb = [],
          Yb = [],
          Ab = [],
          yb = [],
          Vb = [],
          ib = [],
          Wb = [],
          zb = [],
          Ub = [],
          pb = [],
          sb = [],
          Bb = [],
          Mb = [],
          Fb = [],
          Rb = [],
          Tb = [],
          ob = [],
          lb = [],
          mb = [],
          eb = [],
          rb = [],
          SX = [],
          HX = [],
          gX = [],
          tX = [],
          bX = [],
          XX = [],
          xX = [],
          NX = [],
          qX = [],
          uX = [],
          IX = [],
          fX = [],
          kX = [],
          aX = [],
          KX = [],
          jX = [],
          GX = [];
        return SS = class extends Jg {
          get diffuseTexture() {
            return (0, tS.e)(this, HS, "f")
          }
          set diffuseTexture(SS) {
            (0, tS.h)(this, HS, SS, "f")
          }
          get ambientTexture() {
            return (0, tS.e)(this, IS, "f")
          }
          set ambientTexture(SS) {
            (0, tS.h)(this, IS, SS, "f")
          }
          get opacityTexture() {
            return (0, tS.e)(this, aS, "f")
          }
          set opacityTexture(SS) {
            (0, tS.h)(this, aS, SS, "f")
          }
          get reflectionTexture() {
            return (0, tS.e)(this, ZS, "f")
          }
          set reflectionTexture(SS) {
            (0, tS.h)(this, ZS, SS, "f")
          }
          get emissiveTexture() {
            return (0, tS.e)(this, JS, "f")
          }
          set emissiveTexture(SS) {
            (0, tS.h)(this, JS, SS, "f")
          }
          get specularTexture() {
            return (0, tS.e)(this, OS, "f")
          }
          set specularTexture(SS) {
            (0, tS.h)(this, OS, SS, "f")
          }
          get bumpTexture() {
            return (0, tS.e)(this, dS, "f")
          }
          set bumpTexture(SS) {
            (0, tS.h)(this, dS, SS, "f")
          }
          get lightmapTexture() {
            return (0, tS.e)(this, cS, "f")
          }
          set lightmapTexture(SS) {
            (0, tS.h)(this, cS, SS, "f")
          }
          get refractionTexture() {
            return (0, tS.e)(this, ES, "f")
          }
          set refractionTexture(SS) {
            (0, tS.h)(this, ES, SS, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, tS.e)(this, AS, "f")
          }
          set useAlphaFromDiffuseTexture(SS) {
            (0, tS.h)(this, AS, SS, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, tS.e)(this, yS, "f")
          }
          set useEmissiveAsIllumination(SS) {
            (0, tS.h)(this, yS, SS, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, tS.e)(this, VS, "f")
          }
          set linkEmissiveWithDiffuse(SS) {
            (0, tS.h)(this, VS, SS, "f")
          }
          get useSpecularOverAlpha() {
            return (0, tS.e)(this, iS, "f")
          }
          set useSpecularOverAlpha(SS) {
            (0, tS.h)(this, iS, SS, "f")
          }
          get useReflectionOverAlpha() {
            return (0, tS.e)(this, WS, "f")
          }
          set useReflectionOverAlpha(SS) {
            (0, tS.h)(this, WS, SS, "f")
          }
          get disableLighting() {
            return (0, tS.e)(this, zS, "f")
          }
          set disableLighting(SS) {
            (0, tS.h)(this, zS, SS, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, tS.e)(this, US, "f")
          }
          set useObjectSpaceNormalMap(SS) {
            (0, tS.h)(this, US, SS, "f")
          }
          get useParallax() {
            return (0, tS.e)(this, pS, "f")
          }
          set useParallax(SS) {
            (0, tS.h)(this, pS, SS, "f")
          }
          get useParallaxOcclusion() {
            return (0, tS.e)(this, sS, "f")
          }
          set useParallaxOcclusion(SS) {
            (0, tS.h)(this, sS, SS, "f")
          }
          get roughness() {
            return (0, tS.e)(this, BS, "f")
          }
          set roughness(SS) {
            (0, tS.h)(this, BS, SS, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, tS.e)(this, MS, "f")
          }
          set useLightmapAsShadowmap(SS) {
            (0, tS.h)(this, MS, SS, "f")
          }
          get diffuseFresnelParameters() {
            return (0, tS.e)(this, FS, "f")
          }
          set diffuseFresnelParameters(SS) {
            (0, tS.h)(this, FS, SS, "f")
          }
          get opacityFresnelParameters() {
            return (0, tS.e)(this, RS, "f")
          }
          set opacityFresnelParameters(SS) {
            (0, tS.h)(this, RS, SS, "f")
          }
          get reflectionFresnelParameters() {
            return (0, tS.e)(this, TS, "f")
          }
          set reflectionFresnelParameters(SS) {
            (0, tS.h)(this, TS, SS, "f")
          }
          get refractionFresnelParameters() {
            return (0, tS.e)(this, oS, "f")
          }
          set refractionFresnelParameters(SS) {
            (0, tS.h)(this, oS, SS, "f")
          }
          get emissiveFresnelParameters() {
            return (0, tS.e)(this, lS, "f")
          }
          set emissiveFresnelParameters(SS) {
            (0, tS.h)(this, lS, SS, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, tS.e)(this, mS, "f")
          }
          set useReflectionFresnelFromSpecular(SS) {
            (0, tS.h)(this, mS, SS, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, tS.e)(this, eS, "f")
          }
          set useGlossinessFromSpecularMapAlpha(SS) {
            (0, tS.h)(this, eS, SS, "f")
          }
          get maxSimultaneousLights() {
            return (0, tS.e)(this, rS, "f")
          }
          set maxSimultaneousLights(SS) {
            (0, tS.h)(this, rS, SS, "f")
          }
          get invertNormalMapX() {
            return (0, tS.e)(this, SH, "f")
          }
          set invertNormalMapX(SS) {
            (0, tS.h)(this, SH, SS, "f")
          }
          get invertNormalMapY() {
            return (0, tS.e)(this, HH, "f")
          }
          set invertNormalMapY(SS) {
            (0, tS.h)(this, HH, SS, "f")
          }
          get twoSidedLighting() {
            return (0, tS.e)(this, gH, "f")
          }
          set twoSidedLighting(SS) {
            (0, tS.h)(this, gH, SS, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, tS.e)(this, tH, "f")
          }
          set applyDecalMapAfterDetailMap(SS) {
            (0, tS.h)(this, tH, SS, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(gS, bS) {
            super(gS, bS, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || SS.ForceGLSL), this._diffuseTexture = (0, tS.k)(this, Og, null), HS.set(this, ((0, tS.k)(this, dg), (0, tS.k)(this, cg, void 0))), this._ambientTexture = ((0, tS.k)(this, vg), (0, tS.k)(this, Eg, null)), IS.set(this, ((0, tS.k)(this, Lg), (0, tS.k)(this, Yg, void 0))), this._opacityTexture = ((0, tS.k)(this, Ag), (0, tS.k)(this, yg, null)), aS.set(this, ((0, tS.k)(this, Vg), (0, tS.k)(this, ig, void 0))), this._reflectionTexture = ((0, tS.k)(this, Wg), (0, tS.k)(this, zg, null)), ZS.set(this, ((0, tS.k)(this, Ug), (0, tS.k)(this, pg, void 0))), this._emissiveTexture = ((0, tS.k)(this, sg), (0, tS.k)(this, Bg, null)), JS.set(this, ((0, tS.k)(this, Mg), (0, tS.k)(this, Fg, void 0))), this._specularTexture = ((0, tS.k)(this, Rg), (0, tS.k)(this, Tg, null)), OS.set(this, ((0, tS.k)(this, og), (0, tS.k)(this, lg, void 0))), this._bumpTexture = ((0, tS.k)(this, mg), (0, tS.k)(this, eg, null)), dS.set(this, ((0, tS.k)(this, rg), (0, tS.k)(this, St, void 0))), this._lightmapTexture = ((0, tS.k)(this, Ht), (0, tS.k)(this, gt, null)), cS.set(this, ((0, tS.k)(this, tt), (0, tS.k)(this, bt, void 0))), this._refractionTexture = ((0, tS.k)(this, Xt), (0, tS.k)(this, xt, null)), ES.set(this, ((0, tS.k)(this, Nt), (0, tS.k)(this, qt, void 0))), this.ambientColor = ((0, tS.k)(this, ut), (0, tS.k)(this, It, new NS.b(0, 0, 0))), this.diffuseColor = ((0, tS.k)(this, ft), (0, tS.k)(this, kt, new NS.b(1, 1, 1))), this.specularColor = ((0, tS.k)(this, Kt), (0, tS.k)(this, jt, new NS.b(1, 1, 1))), this.emissiveColor = ((0, tS.k)(this, Gt), (0, tS.k)(this, Ct, new NS.b(0, 0, 0))), this.specularPower = ((0, tS.k)(this, nt), (0, tS.k)(this, Pt, 64)), this._useAlphaFromDiffuseTexture = ((0, tS.k)(this, Qt), (0, tS.k)(this, Dt, !1)), AS.set(this, ((0, tS.k)(this, wt), (0, tS.k)(this, ht, void 0))), this._useEmissiveAsIllumination = ((0, tS.k)(this, Zt), (0, tS.k)(this, Jt, !1)), yS.set(this, ((0, tS.k)(this, Ot), (0, tS.k)(this, dt, void 0))), this._linkEmissiveWithDiffuse = ((0, tS.k)(this, ct), (0, tS.k)(this, vt, !1)), VS.set(this, ((0, tS.k)(this, Et), (0, tS.k)(this, Lt, void 0))), this._useSpecularOverAlpha = ((0, tS.k)(this, Yt), (0, tS.k)(this, At, !1)), iS.set(this, ((0, tS.k)(this, yt), (0, tS.k)(this, Vt, void 0))), this._useReflectionOverAlpha = ((0, tS.k)(this, it), (0, tS.k)(this, Wt, !1)), WS.set(this, ((0, tS.k)(this, zt), (0, tS.k)(this, Ut, void 0))), this._disableLighting = ((0, tS.k)(this, pt), (0, tS.k)(this, st, !1)), zS.set(this, ((0, tS.k)(this, Bt), (0, tS.k)(this, Mt, void 0))), this._useObjectSpaceNormalMap = ((0, tS.k)(this, Ft), (0, tS.k)(this, Rt, !1)), US.set(this, ((0, tS.k)(this, Tt), (0, tS.k)(this, ot, void 0))), this._useParallax = ((0, tS.k)(this, lt), (0, tS.k)(this, mt, !1)), pS.set(this, ((0, tS.k)(this, et), (0, tS.k)(this, rt, void 0))), this._useParallaxOcclusion = ((0, tS.k)(this, Sb), (0, tS.k)(this, Hb, !1)), sS.set(this, ((0, tS.k)(this, gb), (0, tS.k)(this, tb, void 0))), this.parallaxScaleBias = ((0, tS.k)(this, bb), (0, tS.k)(this, Xb, .05)), this._roughness = ((0, tS.k)(this, xb), (0, tS.k)(this, Nb, 0)), BS.set(this, ((0, tS.k)(this, qb), (0, tS.k)(this, ub, void 0))), this.indexOfRefraction = ((0, tS.k)(this, Ib), (0, tS.k)(this, fb, .98)), this.invertRefractionY = ((0, tS.k)(this, kb), (0, tS.k)(this, ab, !0)), this.alphaCutOff = ((0, tS.k)(this, Kb), (0, tS.k)(this, jb, .4)), this._useLightmapAsShadowmap = ((0, tS.k)(this, Gb), (0, tS.k)(this, Cb, !1)), MS.set(this, ((0, tS.k)(this, nb), (0, tS.k)(this, Pb, void 0))), this._diffuseFresnelParameters = ((0, tS.k)(this, Qb), (0, tS.k)(this, Db, void 0)), FS.set(this, ((0, tS.k)(this, wb), (0, tS.k)(this, hb, void 0))), this._opacityFresnelParameters = ((0, tS.k)(this, Zb), (0, tS.k)(this, Jb, void 0)), RS.set(this, ((0, tS.k)(this, Ob), (0, tS.k)(this, db, void 0))), this._reflectionFresnelParameters = ((0, tS.k)(this, cb), (0, tS.k)(this, vb, void 0)), TS.set(this, ((0, tS.k)(this, Eb), (0, tS.k)(this, Lb, void 0))), this._refractionFresnelParameters = ((0, tS.k)(this, Yb), (0, tS.k)(this, Ab, void 0)), oS.set(this, ((0, tS.k)(this, yb), (0, tS.k)(this, Vb, void 0))), this._emissiveFresnelParameters = ((0, tS.k)(this, ib), (0, tS.k)(this, Wb, void 0)), lS.set(this, ((0, tS.k)(this, zb), (0, tS.k)(this, Ub, void 0))), this._useReflectionFresnelFromSpecular = ((0, tS.k)(this, pb), (0, tS.k)(this, sb, !1)), mS.set(this, ((0, tS.k)(this, Bb), (0, tS.k)(this, Mb, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, tS.k)(this, Fb), (0, tS.k)(this, Rb, !1)), eS.set(this, ((0, tS.k)(this, Tb), (0, tS.k)(this, ob, void 0))), this._maxSimultaneousLights = ((0, tS.k)(this, lb), (0, tS.k)(this, mb, 4)), rS.set(this, ((0, tS.k)(this, eb), (0, tS.k)(this, rb, void 0))), this._invertNormalMapX = ((0, tS.k)(this, SX), (0, tS.k)(this, HX, !1)), SH.set(this, ((0, tS.k)(this, gX), (0, tS.k)(this, tX, void 0))), this._invertNormalMapY = ((0, tS.k)(this, bX), (0, tS.k)(this, XX, !1)), HH.set(this, ((0, tS.k)(this, xX), (0, tS.k)(this, NX, void 0))), this._twoSidedLighting = ((0, tS.k)(this, qX), (0, tS.k)(this, uX, !1)), gH.set(this, ((0, tS.k)(this, IX), (0, tS.k)(this, fX, void 0))), this._applyDecalMapAfterDetailMap = ((0, tS.k)(this, kX), (0, tS.k)(this, aX, !1)), tH.set(this, ((0, tS.k)(this, KX), (0, tS.k)(this, jX, void 0))), this._vertexPullingMetadata = ((0, tS.k)(this, GX), null), this._renderTargets = new XS.f(16), this._globalAmbientColor = new NS.b(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new CS.e(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new uS.d, this.getRenderTargetTextures = () => (this._renderTargets.reset(), SS.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), SS.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(SS.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(SS.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === kS.d.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== kS.d.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(HS, gS) {
            let tS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const bS = gS._drawWrapper;
            if (bS.effect && this.isFrozen && bS._wasPreviouslyReady && bS._wasPreviouslyUsingInstances === tS) return !0;
            gS.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), gS.materialDefines = new LS(this._eventInfo.defineNames));
            const XS = this.lL(),
              xS = gS.materialDefines;
            if (this._isReadyForSubMesh(gS)) return !0;
            const NS = XS.AK();
            if (xS._needNormals = (0, QS.T)(XS, HS, xS, !0, this._maxSimultaneousLights, this._disableLighting), !(0, QS.c)(XS, HS, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, QS.bb)(XS, xS);
            const IS = this.needAlphaBlendingForMesh(HS) && this.lL().useOrderIndependentTransparency;
            if ((0, QS.eb)(XS, xS, this.canRenderToMRT && !IS), (0, QS.db)(XS, xS, IS), hS.d.PrepareDefines(NS.currentRenderPassId, HS, xS), xS._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, xS._needUVs = !1;
              for (let SS = 1; SS <= 6; ++SS) xS["MAINUV" + SS] = !1;
              if (XS.texturesEnabled) {
                if (xS.DIFFUSEDIRECTUV = 0, xS.BUMPDIRECTUV = 0, xS.AMBIENTDIRECTUV = 0, xS.OPACITYDIRECTUV = 0, xS.EMISSIVEDIRECTUV = 0, xS.SPECULARDIRECTUV = 0, xS.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && SS.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, QS.X)(this._diffuseTexture, xS, "DIFFUSE")
                } else xS.DIFFUSE = !1;
                if (this._ambientTexture && SS.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, QS.X)(this._ambientTexture, xS, "AMBIENT")
                } else xS.AMBIENT = !1;
                if (this._opacityTexture && SS.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, QS.X)(this._opacityTexture, xS, "OPACITY"), xS.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else xS.OPACITY = !1;
                if (this._reflectionTexture && SS.ReflectionTextureEnabled ? (xS.ROUGHNESS = this._roughness > 0, xS.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (xS.ROUGHNESS = !1, xS.REFLECTIONOVERALPHA = !1), !(0, QS.S)(XS, this._reflectionTexture, xS)) return !1;
                if (this._emissiveTexture && SS.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, QS.X)(this._emissiveTexture, xS, "EMISSIVE")
                } else xS.EMISSIVE = !1;
                if (this._lightmapTexture && SS.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, QS.X)(this._lightmapTexture, xS, "LIGHTMAP"), xS.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, xS.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else xS.LIGHTMAP = !1;
                if (this._specularTexture && SS.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, QS.X)(this._specularTexture, xS, "SPECULAR"), xS.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else xS.SPECULAR = !1;
                if (XS.AK().getCaps().standardDerivatives && this._bumpTexture && SS.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, QS.X)(this._bumpTexture, xS, "BUMP"), xS.PARALLAX = this._useParallax, xS.PARALLAX_RHS = XS.useRightHandedSystem, xS.PARALLAXOCCLUSION = this._useParallaxOcclusion, xS.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else xS.BUMP = !1, xS.PARALLAX = !1, xS.PARALLAX_RHS = !1, xS.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && SS.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  xS._needUVs = !0, xS.REFRACTION = !0, xS.REFRACTIONMAP_3D = this._refractionTexture.isCube, xS.RGBDREFRACTION = this._refractionTexture.isRGBD, xS.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else xS.REFRACTION = !1;
                xS.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else xS.DIFFUSE = !1, xS.AMBIENT = !1, xS.OPACITY = !1, xS.REFLECTION = !1, xS.EMISSIVE = !1, xS.LIGHTMAP = !1, xS.BUMP = !1, xS.REFRACTION = !1;
              xS.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), xS.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, xS.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, xS.SPECULAROVERALPHA = this._useSpecularOverAlpha, xS.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, xS.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, xS.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(HS), xS.TEXTURE_REPETITION_MODE = NS.version > 1 || NS.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = xS, this._eventInfo.subMesh = gS, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (xS._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(xS), xS.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, xS.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (xS._areFresnelDirty && (SS.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (xS.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, xS.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, xS.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, xS.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, xS.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, xS.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, xS._needNormals = !0, xS.FRESNEL = !0) : xS.FRESNEL = !1), xS.AREALIGHTUSED || xS.CLUSTLIGHT_BATCH)
              for (let SS = 0; SS < HS.lightSources.length; SS++)
                if (!HS.lightSources[SS]._isReady()) return !1;
            (0, QS.Z)(HS, XS, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(HS), xS, this._applyDecalMapAfterDetailMap, this._useVertexPulling, gS.getRenderingMesh(), this._isVertexOutputInvariant), (0, QS.R)(XS, NS, this, xS, tS, null, gS.getRenderingMesh().hasThinInstances), this._eventInfo.defines = xS, this._eventInfo.mesh = HS, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, QS.O)(HS, xS, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let kS = !1;
            if (xS.isDirty) {
              const tS = xS._areLightsDisposed;
              xS.markAsProcessed();
              const bS = new GS.c;
              xS.REFLECTION && bS.addFallback(0, "REFLECTION"), xS.SPECULAR && bS.addFallback(0, "SPECULAR"), xS.BUMP && bS.addFallback(0, "BUMP"), xS.PARALLAX && bS.addFallback(1, "PARALLAX"), xS.PARALLAX_RHS && bS.addFallback(1, "PARALLAX_RHS"), xS.PARALLAXOCCLUSION && bS.addFallback(0, "PARALLAXOCCLUSION"), xS.SPECULAROVERALPHA && bS.addFallback(0, "SPECULAROVERALPHA"), xS.FOG && bS.addFallback(1, "FOG"), xS.POINTSIZE && bS.addFallback(0, "POINTSIZE"), xS.LOGARITHMICDEPTH && bS.addFallback(0, "LOGARITHMICDEPTH"), (0, QS.z)(xS, bS, this._maxSimultaneousLights), xS.SPECULARTERM && bS.addFallback(0, "SPECULARTERM"), xS.DIFFUSEFRESNEL && bS.addFallback(1, "DIFFUSEFRESNEL"), xS.OPACITYFRESNEL && bS.addFallback(2, "OPACITYFRESNEL"), xS.REFLECTIONFRESNEL && bS.addFallback(3, "REFLECTIONFRESNEL"), xS.EMISSIVEFRESNEL && bS.addFallback(4, "EMISSIVEFRESNEL"), xS.FRESNEL && bS.addFallback(4, "FRESNEL"), xS.MULTIVIEW && bS.addFallback(0, "MULTIVIEW");
              const IS = [qS.h.PositionKind];
              xS.NORMAL && IS.push(qS.h.NormalKind), xS.TANGENT && IS.push(qS.h.TangentKind);
              for (let SS = 1; SS <= 6; ++SS) xS["UV" + SS] && IS.push(`uv${1===SS?"":SS}`);
              xS.VERTEXCOLOR && IS.push(qS.h.ColorKind), (0, QS.F)(IS, HS, xS, bS), (0, QS.H)(IS, xS), (0, QS.K)(IS, HS, xS), (0, QS.D)(IS, HS, xS);
              let aS = "default";
              const KS = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                jS = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, QS.lb)(KS, jS, !1);
              const CS = ["Material", "Scene", "Mesh"],
                DS = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: xS.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = bS, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = xS, this._eventInfo.uniforms = KS, this._eventInfo.attributes = IS, this._eventInfo.samplers = jS, this._eventInfo.uniformBuffersNames = CS, this._eventInfo.customCode = void 0, this._eventInfo.mesh = HS, this._eventInfo.indexParameters = DS, this._callbackPluginEventGeneric(128, this._eventInfo), hS.d.AddUniformsAndSamplers(KS, jS), uS.d.AddUniforms(KS), uS.d.AddSamplers(jS), fS.d && (fS.d.PrepareUniforms(KS, xS), fS.d.PrepareSamplers(jS, xS)), (0, QS.ob)({
                  uniformsNames: KS,
                  uniformBuffersNames: CS,
                  samplers: jS,
                  defines: xS,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, nS.e)(KS), this._useVertexPulling) {
                const SS = gS.getRenderingMesh(),
                  HS = SS?.geometry;
                HS && (this._vertexPullingMetadata = (0, PS.e)(HS), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((SS, HS) => {
                  KS.push(`vp_${HS}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const wS = {};
              this.customShaderNameResolve && (aS = this.customShaderNameResolve(aS, KS, CS, jS, xS, IS, wS));
              const ZS = xS.toString(),
                JS = gS.effect,
                OS = XS.AK().createEffect(aS, {
                  attributes: IS,
                  uniformsNames: KS,
                  uniformBuffersNames: CS,
                  samplers: jS,
                  defines: ZS,
                  fallbacks: bS,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: DS,
                  processFinalCode: wS.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: xS.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: SS._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, NS);
              if (this._eventInfo.customCode = void 0, OS)
                if (this._onEffectCreatedObservable && (vS.effect = OS, vS.subMesh = gS, this._onEffectCreatedObservable.notifyObservers(vS)), this.allowShaderHotSwapping && JS && !OS.isReady()) {
                  if (xS.markAsUnprocessed(), kS = this.isFrozen, tS) return xS._areLightsDisposed = !0, !1
                } else XS.resetCachedMaterial(), gS.setEffect(OS, xS, this._materialContext)
            }
            return !(!gS.effect || !gS.effect.isReady()) && (xS._renderId = XS.getRenderId(), bS._wasPreviouslyReady = !kS, bS._wasPreviouslyUsingInstances = tS, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const SS = this._uniformBuffer;
            SS.addUniform("diffuseLeftColor", 4), SS.addUniform("diffuseRightColor", 4), SS.addUniform("opacityParts", 4), SS.addUniform("reflectionLeftColor", 4), SS.addUniform("reflectionRightColor", 4), SS.addUniform("refractionLeftColor", 4), SS.addUniform("refractionRightColor", 4), SS.addUniform("emissiveLeftColor", 4), SS.addUniform("emissiveRightColor", 4), SS.addUniform("vDiffuseInfos", 2), SS.addUniform("vAmbientInfos", 2), SS.addUniform("vOpacityInfos", 2), SS.addUniform("vEmissiveInfos", 2), SS.addUniform("vLightmapInfos", 2), SS.addUniform("vSpecularInfos", 2), SS.addUniform("vBumpInfos", 3), SS.addUniform("diffuseMatrix", 16), SS.addUniform("ambientMatrix", 16), SS.addUniform("opacityMatrix", 16), SS.addUniform("emissiveMatrix", 16), SS.addUniform("lightmapMatrix", 16), SS.addUniform("specularMatrix", 16), SS.addUniform("bumpMatrix", 16), SS.addUniform("vTangentSpaceParams", 2), SS.addUniform("pointSize", 1), SS.addUniform("alphaCutOff", 1), SS.addUniform("refractionMatrix", 16), SS.addUniform("vRefractionInfos", 4), SS.addUniform("vRefractionPosition", 3), SS.addUniform("vRefractionSize", 3), SS.addUniform("vSpecularColor", 4), SS.addUniform("vEmissiveColor", 3), SS.addUniform("vDiffuseColor", 4), SS.addUniform("vAmbientColor", 3), SS.addUniform("cameraInfo", 4), SS.addUniform("vTextureRepetitionHexTilingParams", 4), (0, QS.ib)(SS, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(HS, gS, tS) {
            const bS = this.lL(),
              XS = tS.materialDefines;
            if (!XS) return;
            const qS = tS.effect;
            if (!qS) return;
            this._activeEffect = qS, gS.getMeshUniformBuffer().bindToEffect(qS, "Mesh"), gS.transferToEffect(HS), this._uniformBuffer.bindToEffect(qS, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, bS, gS, HS, this.isFrozen), hS.d.Bind(bS.AK().currentRenderPassId, this._activeEffect, gS, HS, this);
            const uS = bS.activeCamera;
            uS ? this._uniformBuffer.updateFloat4("cameraInfo", uS.minZ, uS.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const IS = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", IS[0], IS[1], IS[2], IS[3]), this._eventInfo.subMesh = tS, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), XS.OBJECTSPACE_NORMALMAP && (HS.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const fS = this._mustRebind(bS, qS, tS, gS.visibility),
              kS = bS.AK()._features.needToAlwaysBindUniformBuffers;
            (0, QS.f)(gS, qS), this._vertexPullingMetadata && (0, PS.b)(qS, this._vertexPullingMetadata);
            const aS = this._uniformBuffer;
            if (fS) {
              if (this.bindViewProjection(qS), !aS.useUbo || !this.isFrozen || !aS.isSync || tS._drawWrapper._forceRebindOnNextCall) {
                if (SS.FresnelEnabled && XS.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (aS.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), aS.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const SS = NS.i.Color3[0];
                    SS.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), aS.updateColor4("opacityParts", SS, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (aS.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), aS.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (aS.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), aS.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (aS.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), aS.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (XS.ALPHATEST && aS.updateFloat("alphaCutOff", this.alphaCutOff), bS.texturesEnabled && (this._diffuseTexture && SS.DiffuseTextureEnabled && (aS.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, QS.y)(this._diffuseTexture, aS, "diffuse")), this._ambientTexture && SS.AmbientTextureEnabled && (aS.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, QS.y)(this._ambientTexture, aS, "ambient")), this._opacityTexture && SS.OpacityTextureEnabled && (aS.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, QS.y)(this._opacityTexture, aS, "opacity")), (0, QS.k)(bS, XS, aS, NS.b.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && SS.ReflectionTextureEnabled || aS.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && SS.EmissiveTextureEnabled && (aS.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, QS.y)(this._emissiveTexture, aS, "emissive")), this._lightmapTexture && SS.LightmapTextureEnabled && (aS.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, QS.y)(this._lightmapTexture, aS, "lightmap")), this._specularTexture && SS.SpecularTextureEnabled && (aS.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, QS.y)(this._specularTexture, aS, "specular")), this._bumpTexture && bS.AK().getCaps().standardDerivatives && SS.BumpTextureEnabled && (aS.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, QS.y)(this._bumpTexture, aS, "bump"), bS._mirroredCameraPosition ? aS.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : aS.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && SS.RefractionTextureEnabled)) {
                  let SS = 1;
                  if (this._refractionTexture.isCube || (aS.J7("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (SS = this._refractionTexture.depth)), aS.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, SS, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const SS = this._refractionTexture;
                    aS.updateVector3("vRefractionPosition", SS.boundingBoxPosition), aS.updateVector3("vRefractionSize", SS.boundingBoxSize)
                  }
                }
                this.pointsCloud && aS.updateFloat("pointSize", this.pointSize), aS.updateColor4("vSpecularColor", this.specularColor, this.specularPower), aS.updateColor3("vEmissiveColor", SS.EmissiveTextureEnabled ? this.emissiveColor : NS.b.BlackReadOnly), aS.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), bS.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), aS.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              bS.texturesEnabled && (this._diffuseTexture && SS.DiffuseTextureEnabled && qS.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && SS.AmbientTextureEnabled && qS.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && SS.OpacityTextureEnabled && qS.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && SS.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? qS.setTexture("reflectionCubeSampler", this._reflectionTexture) : qS.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && SS.EmissiveTextureEnabled && qS.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && SS.LightmapTextureEnabled && qS.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && SS.SpecularTextureEnabled && qS.setTexture("specularSampler", this._specularTexture), this._bumpTexture && bS.AK().getCaps().standardDerivatives && SS.BumpTextureEnabled && qS.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && SS.RefractionTextureEnabled && (this._refractionTexture.isCube ? qS.setTexture("refractionCubeSampler", this._refractionTexture) : qS.setTexture("refraction2DSampler", this._refractionTexture))), this.lL().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(gS) && this.lL().depthPeelingRenderer.bind(qS), this._eventInfo.subMesh = tS, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, nS.f)(qS, this, bS), this.bindEyePosition(qS)
            } else kS && (this._needToBindSceneUbo = !0);
            !fS && this.isFrozen && !kS || !bS.lightsEnabled || this._disableLighting || (0, QS.n)(bS, gS, qS, XS, this._maxSimultaneousLights), !fS && this.isFrozen || ((bS.fogEnabled && gS.applyFog && bS.fogMode !== xS.i.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || gS.receiveShadows || XS.PREPASS || XS.CLUSTLIGHT_BATCH) && this.bindView(qS), (0, QS.i)(bS, gS, qS), XS.NUM_MORPH_INFLUENCERS && (0, QS.t)(gS, qS), XS.BAKED_VERTEX_ANIMATION_TEXTURE && gS.bakedVertexAnimationManager?.bind(qS, XS.INSTANCES), this.useLogarithmicDepth && (0, QS.q)(XS, qS, bS), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(gS, this._activeEffect, tS), aS.update()
          }
          _canBindRunFollower(HS, gS, tS, bS, XS) {
            const xS = HS.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === SS.prototype.isReadyForSubMesh && this.bindForSubMesh === SS.prototype.bindForSubMesh && this._mustRebind === KS.d.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !gS._features.needToAlwaysBindUniformBuffers && !(xS && xS.enabled && xS.currentRTisSceneRT) && !hS.d._Configurations[gS.currentRenderPassId] && !bS.materialDefines?.OBJECTSPACE_NORMALMAP && !tS.skeleton && !XS._bonesComputationForcedToCPU
          }
          _bindRunFollower(SS, HS, gS, tS) {
            this._activeEffect = tS, HS.getMeshUniformBuffer().bindToEffect(tS, "Mesh"), HS.transferToEffect(SS);
            const bS = this._uniformBuffer;
            bS.bindToEffect(tS, "Material");
            const XS = this._scene.activeCamera;
            XS ? bS.updateFloat4("cameraInfo", XS.minZ, XS.maxZ, 0, 0) : bS.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const xS = this.textureRepetitionHexTilingParams;
            bS.updateFloat4("vTextureRepetitionHexTilingParams", xS[0], xS[1], xS[2], xS[3]), this._afterBind(HS, tS, gS), bS.update()
          }
          getAnimatables() {
            const SS = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && SS.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && SS.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && SS.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && SS.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && SS.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && SS.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && SS.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && SS.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && SS.push(this._refractionTexture), SS
          }
          getActiveTextures() {
            const SS = super.getActiveTextures();
            return this._diffuseTexture && SS.push(this._diffuseTexture), this._ambientTexture && SS.push(this._ambientTexture), this._opacityTexture && SS.push(this._opacityTexture), this._reflectionTexture && SS.push(this._reflectionTexture), this._emissiveTexture && SS.push(this._emissiveTexture), this._specularTexture && SS.push(this._specularTexture), this._bumpTexture && SS.push(this._bumpTexture), this._lightmapTexture && SS.push(this._lightmapTexture), this._refractionTexture && SS.push(this._refractionTexture), SS
          }
          hasTexture(SS) {
            return !!super.hasTexture(SS) || (this._diffuseTexture === SS || (this._ambientTexture === SS || (this._opacityTexture === SS || (this._reflectionTexture === SS || (this._emissiveTexture === SS || (this._specularTexture === SS || (this._bumpTexture === SS || (this._lightmapTexture === SS || this._refractionTexture === SS))))))))
          }
          dispose(SS, HS) {
            HS && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(SS, HS)
          }
          clone(HS) {
            let gS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              tS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const bS = DS.b.Clone((() => new SS(HS, this.lL())), this, {
              cloneTexturesOnlyOnce: gS
            });
            return bS.name = HS, bS.id = HS, this.stencil.copyTo(bS.stencil), this._clonePlugins(bS, tS), bS
          }
          static Parse(HS, gS, tS) {
            const bS = DS.b.Parse((() => new SS(HS.name, gS)), HS, gS, tS);
            return HS.stencil && bS.stencil.parse(HS.stencil, gS, tS), kS.d._ParsePlugins(HS, bS, gS, tS), bS
          }
          static get DiffuseTextureEnabled() {
            return jS.e.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(SS) {
            jS.e.DiffuseTextureEnabled = SS
          }
          static get DetailTextureEnabled() {
            return jS.e.DetailTextureEnabled
          }
          static set DetailTextureEnabled(SS) {
            jS.e.DetailTextureEnabled = SS
          }
          static get AmbientTextureEnabled() {
            return jS.e.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(SS) {
            jS.e.AmbientTextureEnabled = SS
          }
          static get OpacityTextureEnabled() {
            return jS.e.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(SS) {
            jS.e.OpacityTextureEnabled = SS
          }
          static get ReflectionTextureEnabled() {
            return jS.e.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(SS) {
            jS.e.ReflectionTextureEnabled = SS
          }
          static get EmissiveTextureEnabled() {
            return jS.e.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(SS) {
            jS.e.EmissiveTextureEnabled = SS
          }
          static get SpecularTextureEnabled() {
            return jS.e.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(SS) {
            jS.e.SpecularTextureEnabled = SS
          }
          static get BumpTextureEnabled() {
            return jS.e.BumpTextureEnabled
          }
          static set BumpTextureEnabled(SS) {
            jS.e.BumpTextureEnabled = SS
          }
          static get LightmapTextureEnabled() {
            return jS.e.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(SS) {
            jS.e.LightmapTextureEnabled = SS
          }
          static get RefractionTextureEnabled() {
            return jS.e.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(SS) {
            jS.e.RefractionTextureEnabled = SS
          }
          static get ColorGradingTextureEnabled() {
            return jS.e.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(SS) {
            jS.e.ColorGradingTextureEnabled = SS
          }
          static get FresnelEnabled() {
            return jS.e.FresnelEnabled
          }
          static set FresnelEnabled(SS) {
            jS.e.FresnelEnabled = SS
          }
        }, HS = new WeakMap, IS = new WeakMap, aS = new WeakMap, ZS = new WeakMap, JS = new WeakMap, OS = new WeakMap, dS = new WeakMap, cS = new WeakMap, ES = new WeakMap, AS = new WeakMap, yS = new WeakMap, VS = new WeakMap, iS = new WeakMap, WS = new WeakMap, zS = new WeakMap, US = new WeakMap, pS = new WeakMap, sS = new WeakMap, BS = new WeakMap, MS = new WeakMap, FS = new WeakMap, RS = new WeakMap, TS = new WeakMap, oS = new WeakMap, lS = new WeakMap, mS = new WeakMap, eS = new WeakMap, rS = new WeakMap, SH = new WeakMap, HH = new WeakMap, gH = new WeakMap, tH = new WeakMap, (() => {
          const HS = "function" === typeof Symbol && Symbol.metadata ? Object.create(Jg[Symbol.metadata] ?? null) : void 0;
          bH = [(0, bS.B)("diffuseTexture")], XH = [(0, bS.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], xH = [(0, bS.B)("ambientTexture")], NH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], qH = [(0, bS.B)("opacityTexture")], uH = [(0, bS.d)("_markAllSubMeshesAsTexturesAndMiscDirty")], IH = [(0, bS.B)("reflectionTexture")], fH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], kH = [(0, bS.B)("emissiveTexture")], aH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], KH = [(0, bS.B)("specularTexture")], jH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], GH = [(0, bS.B)("bumpTexture")], CH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], nH = [(0, bS.B)("lightmapTexture")], PH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], QH = [(0, bS.B)("refractionTexture")], DH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], wH = [(0, bS.k)("ambient")], hH = [(0, bS.k)("diffuse")], ZH = [(0, bS.k)("specular")], JH = [(0, bS.k)("emissive")], OH = [(0, bS.M)()], dH = [(0, bS.M)("useAlphaFromDiffuseTexture")], cH = [() => ({
            init(SS) {
              return void 0 === SS && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = SS), SS
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(SS) {
              this._useAlphaFromDiffuseTexture = SS
            }
          })], vH = [(0, bS.M)("useEmissiveAsIllumination")], EH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], LH = [(0, bS.M)("linkEmissiveWithDiffuse")], YH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], AH = [(0, bS.M)("useSpecularOverAlpha")], yH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], VH = [(0, bS.M)("useReflectionOverAlpha")], iH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], WH = [(0, bS.M)("disableLighting")], zH = [(0, bS.d)("_markAllSubMeshesAsLightsDirty")], UH = [(0, bS.M)("useObjectSpaceNormalMap")], pH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], sH = [(0, bS.M)("useParallax")], BH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], MH = [(0, bS.M)("useParallaxOcclusion")], FH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], RH = [(0, bS.M)()], TH = [(0, bS.M)("roughness")], oH = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], lH = [(0, bS.M)()], mH = [(0, bS.M)()], eH = [(0, bS.M)()], rH = [(0, bS.M)("useLightmapAsShadowmap")], Sg = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], Hg = [(0, bS.p)("diffuseFresnelParameters")], gg = [(0, bS.d)("_markAllSubMeshesAsFresnelDirty")], tg = [(0, bS.p)("opacityFresnelParameters")], bg = [(0, bS.d)("_markAllSubMeshesAsFresnelAndMiscDirty")], Xg = [(0, bS.p)("reflectionFresnelParameters")], xg = [(0, bS.d)("_markAllSubMeshesAsFresnelDirty")], Ng = [(0, bS.p)("refractionFresnelParameters")], qg = [(0, bS.d)("_markAllSubMeshesAsFresnelDirty")], ug = [(0, bS.p)("emissiveFresnelParameters")], Ig = [(0, bS.d)("_markAllSubMeshesAsFresnelDirty")], fg = [(0, bS.M)("useReflectionFresnelFromSpecular")], kg = [(0, bS.d)("_markAllSubMeshesAsFresnelDirty")], ag = [(0, bS.M)("useGlossinessFromSpecularMapAlpha")], Kg = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], jg = [(0, bS.M)("maxSimultaneousLights")], Gg = [(0, bS.d)("_markAllSubMeshesAsLightsDirty")], Cg = [(0, bS.M)("invertNormalMapX")], ng = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], Pg = [(0, bS.M)("invertNormalMapY")], Qg = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], Dg = [(0, bS.M)("twoSidedLighting")], wg = [(0, bS.d)("_markAllSubMeshesAsTexturesDirty")], hg = [(0, bS.M)("applyDecalMapAfterDetailMap")], Zg = [(0, bS.d)("_markAllSubMeshesAsMiscDirty")], (0, tS.j)(SS, null, XH, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "diffuseTexture" in SS,
              get: SS => SS.diffuseTexture,
              set: (SS, HS) => {
                SS.diffuseTexture = HS
              }
            },
            metadata: HS
          }, cg, vg), (0, tS.j)(SS, null, NH, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "ambientTexture" in SS,
              get: SS => SS.ambientTexture,
              set: (SS, HS) => {
                SS.ambientTexture = HS
              }
            },
            metadata: HS
          }, Yg, Ag), (0, tS.j)(SS, null, uH, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "opacityTexture" in SS,
              get: SS => SS.opacityTexture,
              set: (SS, HS) => {
                SS.opacityTexture = HS
              }
            },
            metadata: HS
          }, ig, Wg), (0, tS.j)(SS, null, fH, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "reflectionTexture" in SS,
              get: SS => SS.reflectionTexture,
              set: (SS, HS) => {
                SS.reflectionTexture = HS
              }
            },
            metadata: HS
          }, pg, sg), (0, tS.j)(SS, null, aH, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "emissiveTexture" in SS,
              get: SS => SS.emissiveTexture,
              set: (SS, HS) => {
                SS.emissiveTexture = HS
              }
            },
            metadata: HS
          }, Fg, Rg), (0, tS.j)(SS, null, jH, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "specularTexture" in SS,
              get: SS => SS.specularTexture,
              set: (SS, HS) => {
                SS.specularTexture = HS
              }
            },
            metadata: HS
          }, lg, mg), (0, tS.j)(SS, null, CH, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "bumpTexture" in SS,
              get: SS => SS.bumpTexture,
              set: (SS, HS) => {
                SS.bumpTexture = HS
              }
            },
            metadata: HS
          }, St, Ht), (0, tS.j)(SS, null, PH, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "lightmapTexture" in SS,
              get: SS => SS.lightmapTexture,
              set: (SS, HS) => {
                SS.lightmapTexture = HS
              }
            },
            metadata: HS
          }, bt, Xt), (0, tS.j)(SS, null, DH, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "refractionTexture" in SS,
              get: SS => SS.refractionTexture,
              set: (SS, HS) => {
                SS.refractionTexture = HS
              }
            },
            metadata: HS
          }, qt, ut), (0, tS.j)(SS, null, cH, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "useAlphaFromDiffuseTexture" in SS,
              get: SS => SS.useAlphaFromDiffuseTexture,
              set: (SS, HS) => {
                SS.useAlphaFromDiffuseTexture = HS
              }
            },
            metadata: HS
          }, ht, Zt), (0, tS.j)(SS, null, EH, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: SS => "useEmissiveAsIllumination" in SS,
              get: SS => SS.useEmissiveAsIllumination,
              set: (SS, HS) => {
                SS.useEmissiveAsIllumination = HS
              }
            },
            metadata: HS
          }, dt, ct), (0, tS.j)(SS, null, YH, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: SS => "linkEmissiveWithDiffuse" in SS,
              get: SS => SS.linkEmissiveWithDiffuse,
              set: (SS, HS) => {
                SS.linkEmissiveWithDiffuse = HS
              }
            },
            metadata: HS
          }, Lt, Yt), (0, tS.j)(SS, null, yH, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: SS => "useSpecularOverAlpha" in SS,
              get: SS => SS.useSpecularOverAlpha,
              set: (SS, HS) => {
                SS.useSpecularOverAlpha = HS
              }
            },
            metadata: HS
          }, Vt, it), (0, tS.j)(SS, null, iH, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: SS => "useReflectionOverAlpha" in SS,
              get: SS => SS.useReflectionOverAlpha,
              set: (SS, HS) => {
                SS.useReflectionOverAlpha = HS
              }
            },
            metadata: HS
          }, Ut, pt), (0, tS.j)(SS, null, zH, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: SS => "disableLighting" in SS,
              get: SS => SS.disableLighting,
              set: (SS, HS) => {
                SS.disableLighting = HS
              }
            },
            metadata: HS
          }, Mt, Ft), (0, tS.j)(SS, null, pH, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: SS => "useObjectSpaceNormalMap" in SS,
              get: SS => SS.useObjectSpaceNormalMap,
              set: (SS, HS) => {
                SS.useObjectSpaceNormalMap = HS
              }
            },
            metadata: HS
          }, ot, lt), (0, tS.j)(SS, null, BH, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: SS => "useParallax" in SS,
              get: SS => SS.useParallax,
              set: (SS, HS) => {
                SS.useParallax = HS
              }
            },
            metadata: HS
          }, rt, Sb), (0, tS.j)(SS, null, FH, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: SS => "useParallaxOcclusion" in SS,
              get: SS => SS.useParallaxOcclusion,
              set: (SS, HS) => {
                SS.useParallaxOcclusion = HS
              }
            },
            metadata: HS
          }, tb, bb), (0, tS.j)(SS, null, oH, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: SS => "roughness" in SS,
              get: SS => SS.roughness,
              set: (SS, HS) => {
                SS.roughness = HS
              }
            },
            metadata: HS
          }, ub, Ib), (0, tS.j)(SS, null, Sg, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: SS => "useLightmapAsShadowmap" in SS,
              get: SS => SS.useLightmapAsShadowmap,
              set: (SS, HS) => {
                SS.useLightmapAsShadowmap = HS
              }
            },
            metadata: HS
          }, Pb, Qb), (0, tS.j)(SS, null, gg, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: SS => "diffuseFresnelParameters" in SS,
              get: SS => SS.diffuseFresnelParameters,
              set: (SS, HS) => {
                SS.diffuseFresnelParameters = HS
              }
            },
            metadata: HS
          }, hb, Zb), (0, tS.j)(SS, null, bg, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: SS => "opacityFresnelParameters" in SS,
              get: SS => SS.opacityFresnelParameters,
              set: (SS, HS) => {
                SS.opacityFresnelParameters = HS
              }
            },
            metadata: HS
          }, db, cb), (0, tS.j)(SS, null, xg, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: SS => "reflectionFresnelParameters" in SS,
              get: SS => SS.reflectionFresnelParameters,
              set: (SS, HS) => {
                SS.reflectionFresnelParameters = HS
              }
            },
            metadata: HS
          }, Lb, Yb), (0, tS.j)(SS, null, qg, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: SS => "refractionFresnelParameters" in SS,
              get: SS => SS.refractionFresnelParameters,
              set: (SS, HS) => {
                SS.refractionFresnelParameters = HS
              }
            },
            metadata: HS
          }, Vb, ib), (0, tS.j)(SS, null, Ig, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: SS => "emissiveFresnelParameters" in SS,
              get: SS => SS.emissiveFresnelParameters,
              set: (SS, HS) => {
                SS.emissiveFresnelParameters = HS
              }
            },
            metadata: HS
          }, Ub, pb), (0, tS.j)(SS, null, kg, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: SS => "useReflectionFresnelFromSpecular" in SS,
              get: SS => SS.useReflectionFresnelFromSpecular,
              set: (SS, HS) => {
                SS.useReflectionFresnelFromSpecular = HS
              }
            },
            metadata: HS
          }, Mb, Fb), (0, tS.j)(SS, null, Kg, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: SS => "useGlossinessFromSpecularMapAlpha" in SS,
              get: SS => SS.useGlossinessFromSpecularMapAlpha,
              set: (SS, HS) => {
                SS.useGlossinessFromSpecularMapAlpha = HS
              }
            },
            metadata: HS
          }, ob, lb), (0, tS.j)(SS, null, Gg, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: SS => "maxSimultaneousLights" in SS,
              get: SS => SS.maxSimultaneousLights,
              set: (SS, HS) => {
                SS.maxSimultaneousLights = HS
              }
            },
            metadata: HS
          }, rb, SX), (0, tS.j)(SS, null, ng, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: SS => "invertNormalMapX" in SS,
              get: SS => SS.invertNormalMapX,
              set: (SS, HS) => {
                SS.invertNormalMapX = HS
              }
            },
            metadata: HS
          }, tX, bX), (0, tS.j)(SS, null, Qg, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: SS => "invertNormalMapY" in SS,
              get: SS => SS.invertNormalMapY,
              set: (SS, HS) => {
                SS.invertNormalMapY = HS
              }
            },
            metadata: HS
          }, NX, qX), (0, tS.j)(SS, null, wg, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: SS => "twoSidedLighting" in SS,
              get: SS => SS.twoSidedLighting,
              set: (SS, HS) => {
                SS.twoSidedLighting = HS
              }
            },
            metadata: HS
          }, fX, kX), (0, tS.j)(SS, null, Zg, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: SS => "applyDecalMapAfterDetailMap" in SS,
              get: SS => SS.applyDecalMapAfterDetailMap,
              set: (SS, HS) => {
                SS.applyDecalMapAfterDetailMap = HS
              }
            },
            metadata: HS
          }, jX, GX), (0, tS.j)(null, null, bH, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "_diffuseTexture" in SS,
              get: SS => SS._diffuseTexture,
              set: (SS, HS) => {
                SS._diffuseTexture = HS
              }
            },
            metadata: HS
          }, Og, dg), (0, tS.j)(null, null, xH, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "_ambientTexture" in SS,
              get: SS => SS._ambientTexture,
              set: (SS, HS) => {
                SS._ambientTexture = HS
              }
            },
            metadata: HS
          }, Eg, Lg), (0, tS.j)(null, null, qH, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "_opacityTexture" in SS,
              get: SS => SS._opacityTexture,
              set: (SS, HS) => {
                SS._opacityTexture = HS
              }
            },
            metadata: HS
          }, yg, Vg), (0, tS.j)(null, null, IH, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "_reflectionTexture" in SS,
              get: SS => SS._reflectionTexture,
              set: (SS, HS) => {
                SS._reflectionTexture = HS
              }
            },
            metadata: HS
          }, zg, Ug), (0, tS.j)(null, null, kH, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "_emissiveTexture" in SS,
              get: SS => SS._emissiveTexture,
              set: (SS, HS) => {
                SS._emissiveTexture = HS
              }
            },
            metadata: HS
          }, Bg, Mg), (0, tS.j)(null, null, KH, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "_specularTexture" in SS,
              get: SS => SS._specularTexture,
              set: (SS, HS) => {
                SS._specularTexture = HS
              }
            },
            metadata: HS
          }, Tg, og), (0, tS.j)(null, null, GH, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "_bumpTexture" in SS,
              get: SS => SS._bumpTexture,
              set: (SS, HS) => {
                SS._bumpTexture = HS
              }
            },
            metadata: HS
          }, eg, rg), (0, tS.j)(null, null, nH, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "_lightmapTexture" in SS,
              get: SS => SS._lightmapTexture,
              set: (SS, HS) => {
                SS._lightmapTexture = HS
              }
            },
            metadata: HS
          }, gt, tt), (0, tS.j)(null, null, QH, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "_refractionTexture" in SS,
              get: SS => SS._refractionTexture,
              set: (SS, HS) => {
                SS._refractionTexture = HS
              }
            },
            metadata: HS
          }, xt, Nt), (0, tS.j)(null, null, wH, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: SS => "ambientColor" in SS,
              get: SS => SS.ambientColor,
              set: (SS, HS) => {
                SS.ambientColor = HS
              }
            },
            metadata: HS
          }, It, ft), (0, tS.j)(null, null, hH, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: SS => "diffuseColor" in SS,
              get: SS => SS.diffuseColor,
              set: (SS, HS) => {
                SS.diffuseColor = HS
              }
            },
            metadata: HS
          }, kt, Kt), (0, tS.j)(null, null, ZH, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: SS => "specularColor" in SS,
              get: SS => SS.specularColor,
              set: (SS, HS) => {
                SS.specularColor = HS
              }
            },
            metadata: HS
          }, jt, Gt), (0, tS.j)(null, null, JH, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: SS => "emissiveColor" in SS,
              get: SS => SS.emissiveColor,
              set: (SS, HS) => {
                SS.emissiveColor = HS
              }
            },
            metadata: HS
          }, Ct, nt), (0, tS.j)(null, null, OH, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: SS => "specularPower" in SS,
              get: SS => SS.specularPower,
              set: (SS, HS) => {
                SS.specularPower = HS
              }
            },
            metadata: HS
          }, Pt, Qt), (0, tS.j)(null, null, dH, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: SS => "_useAlphaFromDiffuseTexture" in SS,
              get: SS => SS._useAlphaFromDiffuseTexture,
              set: (SS, HS) => {
                SS._useAlphaFromDiffuseTexture = HS
              }
            },
            metadata: HS
          }, Dt, wt), (0, tS.j)(null, null, vH, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: SS => "_useEmissiveAsIllumination" in SS,
              get: SS => SS._useEmissiveAsIllumination,
              set: (SS, HS) => {
                SS._useEmissiveAsIllumination = HS
              }
            },
            metadata: HS
          }, Jt, Ot), (0, tS.j)(null, null, LH, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: SS => "_linkEmissiveWithDiffuse" in SS,
              get: SS => SS._linkEmissiveWithDiffuse,
              set: (SS, HS) => {
                SS._linkEmissiveWithDiffuse = HS
              }
            },
            metadata: HS
          }, vt, Et), (0, tS.j)(null, null, AH, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: SS => "_useSpecularOverAlpha" in SS,
              get: SS => SS._useSpecularOverAlpha,
              set: (SS, HS) => {
                SS._useSpecularOverAlpha = HS
              }
            },
            metadata: HS
          }, At, yt), (0, tS.j)(null, null, VH, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: SS => "_useReflectionOverAlpha" in SS,
              get: SS => SS._useReflectionOverAlpha,
              set: (SS, HS) => {
                SS._useReflectionOverAlpha = HS
              }
            },
            metadata: HS
          }, Wt, zt), (0, tS.j)(null, null, WH, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: SS => "_disableLighting" in SS,
              get: SS => SS._disableLighting,
              set: (SS, HS) => {
                SS._disableLighting = HS
              }
            },
            metadata: HS
          }, st, Bt), (0, tS.j)(null, null, UH, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: SS => "_useObjectSpaceNormalMap" in SS,
              get: SS => SS._useObjectSpaceNormalMap,
              set: (SS, HS) => {
                SS._useObjectSpaceNormalMap = HS
              }
            },
            metadata: HS
          }, Rt, Tt), (0, tS.j)(null, null, sH, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: SS => "_useParallax" in SS,
              get: SS => SS._useParallax,
              set: (SS, HS) => {
                SS._useParallax = HS
              }
            },
            metadata: HS
          }, mt, et), (0, tS.j)(null, null, MH, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: SS => "_useParallaxOcclusion" in SS,
              get: SS => SS._useParallaxOcclusion,
              set: (SS, HS) => {
                SS._useParallaxOcclusion = HS
              }
            },
            metadata: HS
          }, Hb, gb), (0, tS.j)(null, null, RH, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: SS => "parallaxScaleBias" in SS,
              get: SS => SS.parallaxScaleBias,
              set: (SS, HS) => {
                SS.parallaxScaleBias = HS
              }
            },
            metadata: HS
          }, Xb, xb), (0, tS.j)(null, null, TH, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: SS => "_roughness" in SS,
              get: SS => SS._roughness,
              set: (SS, HS) => {
                SS._roughness = HS
              }
            },
            metadata: HS
          }, Nb, qb), (0, tS.j)(null, null, lH, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: SS => "indexOfRefraction" in SS,
              get: SS => SS.indexOfRefraction,
              set: (SS, HS) => {
                SS.indexOfRefraction = HS
              }
            },
            metadata: HS
          }, fb, kb), (0, tS.j)(null, null, mH, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: SS => "invertRefractionY" in SS,
              get: SS => SS.invertRefractionY,
              set: (SS, HS) => {
                SS.invertRefractionY = HS
              }
            },
            metadata: HS
          }, ab, Kb), (0, tS.j)(null, null, eH, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: SS => "alphaCutOff" in SS,
              get: SS => SS.alphaCutOff,
              set: (SS, HS) => {
                SS.alphaCutOff = HS
              }
            },
            metadata: HS
          }, jb, Gb), (0, tS.j)(null, null, rH, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: SS => "_useLightmapAsShadowmap" in SS,
              get: SS => SS._useLightmapAsShadowmap,
              set: (SS, HS) => {
                SS._useLightmapAsShadowmap = HS
              }
            },
            metadata: HS
          }, Cb, nb), (0, tS.j)(null, null, Hg, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: SS => "_diffuseFresnelParameters" in SS,
              get: SS => SS._diffuseFresnelParameters,
              set: (SS, HS) => {
                SS._diffuseFresnelParameters = HS
              }
            },
            metadata: HS
          }, Db, wb), (0, tS.j)(null, null, tg, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: SS => "_opacityFresnelParameters" in SS,
              get: SS => SS._opacityFresnelParameters,
              set: (SS, HS) => {
                SS._opacityFresnelParameters = HS
              }
            },
            metadata: HS
          }, Jb, Ob), (0, tS.j)(null, null, Xg, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: SS => "_reflectionFresnelParameters" in SS,
              get: SS => SS._reflectionFresnelParameters,
              set: (SS, HS) => {
                SS._reflectionFresnelParameters = HS
              }
            },
            metadata: HS
          }, vb, Eb), (0, tS.j)(null, null, Ng, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: SS => "_refractionFresnelParameters" in SS,
              get: SS => SS._refractionFresnelParameters,
              set: (SS, HS) => {
                SS._refractionFresnelParameters = HS
              }
            },
            metadata: HS
          }, Ab, yb), (0, tS.j)(null, null, ug, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: SS => "_emissiveFresnelParameters" in SS,
              get: SS => SS._emissiveFresnelParameters,
              set: (SS, HS) => {
                SS._emissiveFresnelParameters = HS
              }
            },
            metadata: HS
          }, Wb, zb), (0, tS.j)(null, null, fg, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: SS => "_useReflectionFresnelFromSpecular" in SS,
              get: SS => SS._useReflectionFresnelFromSpecular,
              set: (SS, HS) => {
                SS._useReflectionFresnelFromSpecular = HS
              }
            },
            metadata: HS
          }, sb, Bb), (0, tS.j)(null, null, ag, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: SS => "_useGlossinessFromSpecularMapAlpha" in SS,
              get: SS => SS._useGlossinessFromSpecularMapAlpha,
              set: (SS, HS) => {
                SS._useGlossinessFromSpecularMapAlpha = HS
              }
            },
            metadata: HS
          }, Rb, Tb), (0, tS.j)(null, null, jg, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: SS => "_maxSimultaneousLights" in SS,
              get: SS => SS._maxSimultaneousLights,
              set: (SS, HS) => {
                SS._maxSimultaneousLights = HS
              }
            },
            metadata: HS
          }, mb, eb), (0, tS.j)(null, null, Cg, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: SS => "_invertNormalMapX" in SS,
              get: SS => SS._invertNormalMapX,
              set: (SS, HS) => {
                SS._invertNormalMapX = HS
              }
            },
            metadata: HS
          }, HX, gX), (0, tS.j)(null, null, Pg, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: SS => "_invertNormalMapY" in SS,
              get: SS => SS._invertNormalMapY,
              set: (SS, HS) => {
                SS._invertNormalMapY = HS
              }
            },
            metadata: HS
          }, XX, xX), (0, tS.j)(null, null, Dg, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: SS => "_twoSidedLighting" in SS,
              get: SS => SS._twoSidedLighting,
              set: (SS, HS) => {
                SS._twoSidedLighting = HS
              }
            },
            metadata: HS
          }, uX, IX), (0, tS.j)(null, null, hg, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: SS => "_applyDecalMapAfterDetailMap" in SS,
              get: SS => SS._applyDecalMapAfterDetailMap,
              set: (SS, HS) => {
                SS._applyDecalMapAfterDetailMap = HS
              }
            },
            metadata: HS
          }, aX, KX), HS && Object.defineProperty(SS, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: HS
          })
        })(), SS.ForceGLSL = !1, SS._ShaderLoader = new wS.e((() => [Promise.all([gS.e(317), gS.e(316)]).then((() => gS(41905))), Promise.all([gS.e(322), gS.e(318), gS.e(331), gS.e(321)]).then((() => gS(42080)))]), (() => [Promise.all([gS.e(338), gS.e(333)]).then((() => gS(42228))), Promise.all([gS.e(339), gS.e(349), gS.e(335)]).then((() => gS(42412)))])), SS
      })(),
      yS = !1;

    function VS() {
      yS || (yS = !0, (0, fS.h)(), (0, dS.f)("BABYLON.StandardMaterial", AS), xS.i.DefaultMaterialFactory = SS => new AS("default material", SS))
    }
    Object.getOwnPropertyDescriptor(AS.prototype, "decalMap") || Object.defineProperty(AS.prototype, "decalMap", (0, cS.f)("StandardMaterial", "decalMap"))
  },
  40418: (SS, HS, gS) => {
    function tS(SS) {
      return class extends SS {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    gS.d(HS, {
      c: () => tS
    })
  },
  40412: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS
    });
    class tS {
      constructor(SS, HS) {
        this._webGL = {
          load: SS,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: HS,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(SS) {
        const HS = 1 === SS ? this._webGPU : this._webGL;
        return HS.loaded ? void 0 : async () => {
          await this._loadAsync(HS)
        }
      }
      async _loadAsync(SS) {
        if (SS.loaded) return;
        let HS = SS.loadPromise;
        const gS = null === HS;
        gS && (HS = Promise.all(SS.load()), SS.loadPromise = HS);
        let tS = !1;
        try {
          await HS, tS = !0
        } finally {
          gS && this._completeLoad(SS, tS)
        }
      }
      _completeLoad(SS, HS) {
        SS.loaded = HS, SS.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);