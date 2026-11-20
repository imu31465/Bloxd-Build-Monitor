export const id = 253;
export const ids = [253];
export const modules = {
  40150: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq
    });
    var Yq = gq(39768);

    function lq(qq) {
      return class extends qq {
        constructor() {
          super(...arguments);
          const qq = new.target;
          if (!qq[Symbol.metadata]) {
            const Eq = Object.getPrototypeOf(qq)?.[Symbol.metadata];
            qq[Symbol.metadata] = Eq ? Object.create(Eq) : {}
          }
          const Eq = (0, Yq.e)(qq[Symbol.metadata]);
          Eq._imageProcessingConfiguration || (Eq._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(qq) {
          this._attachImageProcessingConfiguration(qq), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(qq) {
          qq !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !qq && this.ZJ ? this._imageProcessingConfiguration = this.ZJ().imageProcessingConfiguration : qq && (this._imageProcessingConfiguration = qq), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(qq) {
          this.imageProcessingConfiguration.colorCurvesEnabled = qq
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(qq) {
          this.imageProcessingConfiguration.colorGradingEnabled = qq
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(qq) {
          this._imageProcessingConfiguration.toneMappingEnabled = qq
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(qq) {
          this._imageProcessingConfiguration.exposure = qq
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(qq) {
          this._imageProcessingConfiguration.contrast = qq
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(qq) {
          this._imageProcessingConfiguration.colorGradingTexture = qq
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(qq) {
          this._imageProcessingConfiguration.colorCurves = qq
        }
      }
    }
  },
  40028: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Oq,
      e: () => lq
    });
    var Yq = gq(40033);

    function lq(qq) {
      return class extends qq {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class Oq extends Yq.c {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  40111: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Bq
    });
    var Yq = gq(39757),
      lq = gq(40037),
      Oq = gq(39759),
      mq = gq(40092),
      xq = gq(40033),
      Aq = gq(40113),
      cq = gq(40079);
    class uq extends xq.c {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let Bq = (() => {
      var qq, Eq, gq, xq;
      let Bq, Wq, Nq, aq, Vq, dq, jq = Aq.c,
        Hq = [],
        oq = [],
        Pq = [],
        Qq = [],
        yq = [],
        tq = [],
        rq = [],
        vq = [],
        hq = [],
        nq = [],
        bq = [],
        iq = [];
      return qq = class extends jq {
        get texture() {
          return (0, Yq.b)(this, Eq, "f")
        }
        set texture(qq) {
          (0, Yq.e)(this, Eq, qq, "f")
        }
        get normalBlendMethod() {
          return (0, Yq.b)(this, gq, "f")
        }
        set normalBlendMethod(qq) {
          (0, Yq.e)(this, gq, qq, "f")
        }
        get isEnabled() {
          return (0, Yq.b)(this, xq, "f")
        }
        set isEnabled(qq) {
          (0, Yq.e)(this, xq, qq, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(qq) {
          let Oq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(qq, "DetailMap", 140, new uq, Oq), this._texture = null, Eq.set(this, (0, Yq.i)(this, Hq, void 0)), this.diffuseBlendLevel = ((0, Yq.i)(this, oq), (0, Yq.i)(this, Pq, 1)), this.roughnessBlendLevel = ((0, Yq.i)(this, Qq), (0, Yq.i)(this, yq, 1)), this.bumpLevel = ((0, Yq.i)(this, tq), (0, Yq.i)(this, rq, 1)), this._normalBlendMethod = ((0, Yq.i)(this, vq), lq.e.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), gq.set(this, (0, Yq.i)(this, hq, void 0)), this._isEnabled = ((0, Yq.i)(this, nq), !1), xq.set(this, (0, Yq.i)(this, bq, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Yq.i)(this, iq), this._internalMarkAllSubMeshesAsTexturesDirty = qq._dirtyCallbacks[1]
        }
        isReadyForSubMesh(qq, Eq, gq) {
          return !this._isEnabled || !(qq._areTexturesDirty && Eq.texturesEnabled && gq.getCaps().standardDerivatives && this._texture && mq.c.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(qq, Eq) {
          if (this._isEnabled) {
            qq.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const gq = Eq.Ba();
            qq._areTexturesDirty && (gq.getCaps().standardDerivatives && this._texture && mq.c.DetailTextureEnabled && this._isEnabled ? ((0, cq.bb)(this._texture, qq, "DETAIL"), qq.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : qq.DETAIL = !1)
          } else qq.DETAIL = !1
        }
        bindForSubMesh(qq, Eq) {
          if (!this._isEnabled) return;
          const gq = this._material.isFrozen;
          qq.useUbo && gq && qq.isSync || this._texture && mq.c.DetailTextureEnabled && (qq.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, cq.w)(this._texture, qq, "detail")), Eq.texturesEnabled && this._texture && mq.c.DetailTextureEnabled && qq.setTexture("detailSampler", this._texture)
        }
        hasTexture(qq) {
          return this._texture === qq
        }
        getActiveTextures(qq) {
          this._texture && qq.push(this._texture)
        }
        getAnimatables(qq) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && qq.push(this._texture)
        }
        dispose(qq) {
          qq && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(qq) {
          qq.push("detailSampler")
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
      }, Eq = new WeakMap, gq = new WeakMap, xq = new WeakMap, (() => {
        const Eq = "function" === typeof Symbol && Symbol.metadata ? Object.create(jq[Symbol.metadata] ?? null) : void 0;
        Bq = [(0, Oq.E)("detailTexture"), (0, Oq.f)("_markAllSubMeshesAsTexturesDirty")], Wq = [(0, Oq.M)()], Nq = [(0, Oq.M)()], aq = [(0, Oq.M)()], Vq = [(0, Oq.M)(), (0, Oq.f)("_markAllSubMeshesAsTexturesDirty")], dq = [(0, Oq.M)(), (0, Oq.f)("_markAllSubMeshesAsTexturesDirty")], (0, Yq.f)(qq, null, Bq, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: qq => "texture" in qq,
            get: qq => qq.texture,
            set: (qq, Eq) => {
              qq.texture = Eq
            }
          },
          metadata: Eq
        }, Hq, oq), (0, Yq.f)(qq, null, Vq, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: qq => "normalBlendMethod" in qq,
            get: qq => qq.normalBlendMethod,
            set: (qq, Eq) => {
              qq.normalBlendMethod = Eq
            }
          },
          metadata: Eq
        }, hq, nq), (0, Yq.f)(qq, null, dq, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: qq => "isEnabled" in qq,
            get: qq => qq.isEnabled,
            set: (qq, Eq) => {
              qq.isEnabled = Eq
            }
          },
          metadata: Eq
        }, bq, iq), (0, Yq.f)(null, null, Wq, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: qq => "diffuseBlendLevel" in qq,
            get: qq => qq.diffuseBlendLevel,
            set: (qq, Eq) => {
              qq.diffuseBlendLevel = Eq
            }
          },
          metadata: Eq
        }, Pq, Qq), (0, Yq.f)(null, null, Nq, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: qq => "roughnessBlendLevel" in qq,
            get: qq => qq.roughnessBlendLevel,
            set: (qq, Eq) => {
              qq.roughnessBlendLevel = Eq
            }
          },
          metadata: Eq
        }, yq, tq), (0, Yq.f)(null, null, aq, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: qq => "bumpLevel" in qq,
            get: qq => qq.bumpLevel,
            set: (qq, Eq) => {
              qq.bumpLevel = Eq
            }
          },
          metadata: Eq
        }, rq, vq), Eq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eq
        })
      })(), qq
    })()
  },
  40033: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq
    });
    class Yq {
      constructor(qq) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = qq, qq)
          for (const Eq in qq) Object.prototype.hasOwnProperty.call(qq, Eq) && this._setDefaultValue(Eq)
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
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || qq, this._isDirty = !0
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
        for (const qq of Object.keys(this)) "_" !== qq[0] && this._keys.push(qq);
        if (this._externalProperties)
          for (const qq in this._externalProperties) - 1 === this._keys.indexOf(qq) && this._keys.push(qq)
      }
      isEqual(qq) {
        if (this._keys.length !== qq._keys.length) return !1;
        for (let Eq = 0; Eq < this._keys.length; Eq++) {
          const gq = this._keys[Eq];
          if (this[gq] !== qq[gq]) return !1
        }
        return !0
      }
      cloneTo(qq) {
        this._keys.length !== qq._keys.length && (qq._keys = this._keys.slice(0));
        for (let Eq = 0; Eq < this._keys.length; Eq++) {
          const gq = this._keys[Eq];
          qq[gq] = this[gq]
        }
      }
      reset() {
        for (const qq of this._keys) this._setDefaultValue(qq)
      }
      _setDefaultValue(qq) {
        const Eq = this._externalProperties?.[qq]?.type ?? typeof this[qq],
          gq = this._externalProperties?.[qq]?.default;
        switch (Eq) {
          case "number":
            this[qq] = gq ?? 0;
            break;
          case "string":
            this[qq] = gq ?? "";
            break;
          default:
            this[qq] = gq ?? !1
        }
      }
      toString() {
        let qq = "";
        for (let Eq = 0; Eq < this._keys.length; Eq++) {
          const gq = this._keys[Eq],
            Yq = this[gq];
          switch (typeof Yq) {
            case "number":
            case "string":
              qq += "#define " + gq + " " + Yq + "\n";
              break;
            default:
              Yq && (qq += "#define " + gq + "\n")
          }
        }
        return qq
      }
    }
  },
  40127: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => xq,
      f: () => mq,
      i: () => Oq
    });
    var Yq, lq = gq(37139);

    function Oq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const Yq = Eq(qq);
      if (!Number.isInteger(Yq) || Yq < 0 || Yq > gq) throw new Error(`Invalid geometry object ID ${Yq} for mesh "${qq.name}". Object IDs must be integers between 0 and 0x${gq.toString(16).toUpperCase()}.`);
      return Yq
    }

    function mq(qq, Eq) {
      const gq = Eq(qq);
      if (!Number.isInteger(gq) || gq < 0 || gq > 255 || 0 !== gq && 0 === (63 & gq)) throw new Error(`Invalid geometry mesh-blending tag ${gq} for mesh "${qq.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return gq
    }! function(qq) {
      qq[qq.Zero = 0] = "Zero", qq[qq.One = 1] = "One", qq[qq.MaxViewZ = 2] = "MaxViewZ", qq[qq.NoClear = 3] = "NoClear"
    }(Yq || (Yq = {}));
    class xq {
      static CreateConfiguration(qq) {
        return xq._Configurations[qq] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: lq.e.Zero(),
          currentViewProjection: lq.e.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, xq._Configurations[qq]
      }
      static DeleteConfiguration(qq) {
        delete xq._Configurations[qq]
      }
      static GetConfiguration(qq) {
        return xq._Configurations[qq]
      }
      static _PrepareConfiguration(qq, Eq, gq) {
        const Yq = xq._Configurations[qq];
        Yq._attachments = Eq, Yq._colorAttachments = gq, Yq._mrtCount = Eq.length;
        let lq = "#define PREPASS\n";
        for (const Oq of xq.GeometryTextureDescriptions) {
          const qq = Yq.defines[Oq.defineIndex];
          void 0 !== qq && (lq += `#define ${Oq.define}\n#define ${Oq.defineIndex} ${qq}\n`)
        }
        Yq.objectIdIsRedFormat && (lq += "#define PREPASS_OBJECT_ID_R8\n"), Yq._defines = lq + `#define SCENE_MRT_COUNT ${Eq.length}\n`
      }
      static _PrepareStringDefines(qq, Eq) {
        const gq = xq._Configurations[qq];
        return !!gq?._defines && (Eq.push(gq._defines), !0)
      }
      static _BindAttachmentsForEffect(qq, Eq) {
        const gq = xq._Configurations[qq.currentRenderPassId];
        return !gq?._attachments || (qq.bindAttachments(Eq._multiTarget ? gq._attachments : gq._colorAttachments), Eq._multiTarget || void 0 !== gq.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(qq) {
        const Eq = xq._Configurations[qq.currentRenderPassId];
        Eq?._colorAttachments && qq.bindAttachments(Eq._colorAttachments)
      }
      static _BindColorAttachments(qq) {
        const Eq = xq._Configurations[qq.currentRenderPassId];
        return !Eq?._colorAttachments || (qq.bindAttachments(Eq._colorAttachments), void 0 !== Eq.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(qq) {
        const Eq = xq._Configurations[qq.currentRenderPassId];
        return !Eq?._colorAttachments || void 0 !== Eq.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(qq, Eq) {
        const gq = xq._Configurations[qq.currentRenderPassId];
        if (!gq) return;
        const Yq = qq.getAlphaMode(),
          lq = void 0 === gq.defines.PREPASS_COLOR_INDEX || 2 === Yq || 1 === Yq || 17 === Yq;
        Eq.setFloat("geometryZeroAlphaDiscard", lq ? 1 : 0)
      }
      static AddUniformsAndSamplers(qq, Eq) {
        qq.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(qq, Eq) {
        for (const gq of Eq)
          if (gq.fn)
            for (const Eq of gq.fn) Eq._removeDrawWrapper(qq)
      }
      static PrepareDefines(qq, Eq, gq) {
        if (!gq._arePrePassDirty) return;
        const Yq = xq._Configurations[qq];
        if (!Yq) return;
        gq.PREPASS = !0;
        let lq = 0;
        for (let Oq = 0; Oq < xq.GeometryTextureDescriptions.length; Oq++) {
          const qq = xq.GeometryTextureDescriptions[Oq],
            Eq = qq.define,
            mq = qq.defineIndex,
            Aq = Yq.defines[mq];
          void 0 !== Aq ? (gq[Eq] = !0, gq[mq] = Aq, lq++) : (gq[Eq] = !1, delete gq[mq])
        }
        gq.PREPASS_OBJECT_ID_R8 = Yq.objectIdIsRedFormat, gq.SCENE_MRT_COUNT = Yq._mrtCount ?? lq, gq.BONES_VELOCITY_ENABLED = Eq.useBones && Eq.computeBonesUsingShaders && Eq.skeleton && !Eq.skeleton.isUsingTextureForMatrices && -1 === Yq.excludedSkinnedMesh.indexOf(Eq)
      }
      static Bind(qq, Eq, gq, Yq, lq) {
        const Aq = xq._Configurations[qq];
        if (!Aq) return;
        const cq = gq.ZJ(),
          uq = cq.Ba();
        if (Aq.reverseCulling && uq.setStateCullFaceType(cq._mirroredCameraPosition ? lq.cullBackFaces : !lq.cullBackFaces), void 0 !== Aq.defines.PREPASS_OBJECT_ID_INDEX) {
          const qq = Aq.objectIdIsRedFormat ? 255 : 16777215;
          let Yq = gq.uniqueId;
          if (Aq.objectIdProvider) Yq = Oq(gq, Aq.objectIdProvider, qq);
          else if (Yq > qq) throw new Error(`Invalid geometry object ID ${Yq} for mesh "${gq.name}". Object IDs must be integers between 0 and 0x${qq.toString(16).toUpperCase()}.`);
          Eq.setFloat("objectId", Yq)
        }
        if (void 0 !== Aq.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const qq = Aq.meshBlendTagProvider ? mq(gq, Aq.meshBlendTagProvider) : gq.meshBlendingTag;
          Eq.setInt("meshBlendTag", qq)
        }
        if (void 0 !== Aq.defines.PREPASS_VELOCITY_INDEX || void 0 !== Aq.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const qq = Aq._currentWorldMatrices ?? (Aq._currentWorldMatrices = {}),
            lq = Aq._worldMatrixFrameIds ?? (Aq._worldMatrixFrameIds = {});
          if (qq[gq.uniqueId] || (qq[gq.uniqueId] = Yq.clone(), Aq.previousWorldMatrices[gq.uniqueId] = Yq.clone()), lq[gq.uniqueId] !== uq.frameId && (Aq.previousWorldMatrices[gq.uniqueId].WG(qq[gq.uniqueId]), lq[gq.uniqueId] = uq.frameId), qq[gq.uniqueId].WG(Yq), -1 === Aq.lastUpdateFrameId ? (Aq.lastUpdateFrameId = uq.frameId, Aq.previousViewProjection.WG(cq.getTransformMatrix()), Aq.currentViewProjection.WG(cq.getTransformMatrix())) : Aq.currentViewProjection.updateFlag !== cq.getTransformMatrix().updateFlag ? (Aq.lastUpdateFrameId = uq.frameId, Aq.previousViewProjection.WG(Aq.currentViewProjection), Aq.currentViewProjection.WG(cq.getTransformMatrix())) : Aq.lastUpdateFrameId !== uq.frameId && (Aq.lastUpdateFrameId = uq.frameId, Aq.previousViewProjection.WG(Aq.currentViewProjection)), Eq.setMatrix("previousWorld", Aq.previousWorldMatrices[gq.uniqueId]), Eq.setMatrix("previousViewProjection", Aq.previousViewProjection), gq.useBones && gq.computeBonesUsingShaders && gq.skeleton) {
            const qq = gq.skeleton;
            if (!qq.isUsingTextureForMatrices || -1 === Eq.getUniformIndex("boneTextureInfo")) {
              const Yq = qq.getTransformMatrices(gq);
              Yq && (Aq.previousBones[gq.uniqueId] || (Aq.previousBones[gq.uniqueId] = Yq.slice()), Eq.setMatrices("mPreviousBones", Aq.previousBones[gq.uniqueId]), Aq.previousBones[gq.uniqueId].set(Yq))
            }
          }
        }
      }
    }
    xq.GeometryTextureDescriptions = [{
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
    }], xq._Configurations = {}
  },
  40113: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Wq,
      d: () => aq
    });
    var Yq = gq(39757),
      lq = gq(39759),
      Oq = gq(39640),
      mq = gq(39617);
    const xq = new RegExp("^([gimus]+)!");
    class Aq {
      constructor(qq) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = qq, this._scene = qq.ZJ(), this._engine = this._scene.Ba()
      }
      _addPlugin(qq) {
        for (let Yq = 0; Yq < this._plugins.length; ++Yq)
          if (this._plugins[Yq].name === qq.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !qq.isCompatible(this._material.shaderLanguage)) throw `The plugin "${qq.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const Eq = qq.getClassName();
        Aq._MaterialPluginClassToMainDefine[Eq] || (Aq._MaterialPluginClassToMainDefine[Eq] = "MATERIALPLUGIN_" + ++Aq._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (qq, Eq) => this._handlePluginEvent(qq, Eq), this._plugins.push(qq), this._plugins.sort(((qq, Eq) => qq.priority - Eq.priority)), this._codeInjectionPoints = {};
        const gq = {};
        gq[Aq._MaterialPluginClassToMainDefine[Eq]] = {
          type: "boolean",
          default: !0
        };
        for (const Yq of this._plugins) Yq.collectDefines(gq), this._collectPointNames("vertex", Yq.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Yq.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = gq, !0
      }
      _activatePlugin(qq) {
        -1 === this._activePlugins.indexOf(qq) && (this._activePlugins.push(qq), this._activePlugins.sort(((qq, Eq) => qq.priority - Eq.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), qq.registerForExtraEvents && (this._activePluginsForExtraEvents.push(qq), this._activePluginsForExtraEvents.sort(((qq, Eq) => qq.priority - Eq.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(qq) {
        for (let Eq = 0; Eq < this._plugins.length; ++Eq)
          if (this._plugins[Eq].name === qq) return this._plugins[Eq];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(qq) {
        let Eq = !0;
        for (const gq of this._activePlugins) Eq = Eq && gq.isReadyForSubMesh(qq.defines, this._scene, this._engine, qq.subMesh);
        qq.isReadyForSubMesh = Eq
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(qq) {
        for (const Eq of this._activePlugins) Eq.prepareDefinesBeforeAttributes(qq.defines, this._scene, qq.mesh)
      }
      _handlePluginEventPrepareDefines(qq) {
        for (const Eq of this._activePlugins) Eq.prepareDefines(qq.defines, this._scene, qq.mesh)
      }
      _handlePluginEventHardBindForSubMesh(qq) {
        for (const Eq of this._activePluginsForExtraEvents) Eq.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, qq.subMesh)
      }
      _handlePluginEventBindForSubMesh(qq) {
        for (const Eq of this._activePlugins) Eq.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, qq.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(qq) {
        let Eq = !1;
        for (const gq of this._activePluginsForExtraEvents)
          if (Eq = gq.hasRenderTargetTextures(), Eq) break;
        qq.hasRenderTargetTextures = Eq
      }
      _handlePluginEventFillRenderTargetTextures(qq) {
        for (const Eq of this._activePluginsForExtraEvents) Eq.fillRenderTargetTextures(qq.renderTargets)
      }
      _handlePluginEvent(qq, Eq) {
        switch (qq) {
          case 512: {
            const qq = Eq;
            for (const Eq of this._activePlugins) Eq.getActiveTextures(qq.activeTextures);
            break
          }
          case 256: {
            const qq = Eq;
            for (const Eq of this._activePlugins) Eq.getAnimatables(qq.animatables);
            break
          }
          case 1024: {
            const qq = Eq;
            let gq = !1;
            for (const Eq of this._activePlugins)
              if (gq = Eq.hasTexture(qq.texture), gq) break;
            qq.hasTexture = gq;
            break
          }
          case 2: {
            const qq = Eq;
            for (const Eq of this._plugins) Eq.dispose(qq.forceDisposeTextures);
            break
          }
          case 4:
            Eq.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const qq = Eq;
            for (const Eq of this._activePlugins) qq.fallbackRank = Eq.addFallbacks(qq.defines, qq.fallbacks, qq.fallbackRank), Eq.getAttributes(qq.attributes, this._scene, qq.mesh);
            this._uniformList.length > 0 && qq.uniforms.push(...this._uniformList), this._samplerList.length > 0 && qq.samplers.push(...this._samplerList), this._uboList.length > 0 && qq.uniformBuffersNames.push(...this._uboList), qq.customCode = this._injectCustomCode(qq, qq.customCode);
            break
          }
          case 8: {
            const qq = Eq;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const gq = 1 === this._material.shaderLanguage;
            for (const Eq of this._plugins) {
              const Yq = Eq.getUniforms(this._material.shaderLanguage);
              if (Yq) {
                if (Yq.ubo)
                  for (const Eq of Yq.ubo) {
                    if (Eq.size && Eq.type) {
                      const Yq = Eq.arraySize ?? 0;
                      if (qq.ubo.addUniform(Eq.name, Eq.size, Yq), gq) {
                        let qq;
                        switch (Eq.type) {
                          case "mat4":
                            qq = "mat4x4f";
                            break;
                          case "float":
                            qq = "f32";
                            break;
                          default:
                            qq = `${Eq.type}f`
                        }
                        this._uboDeclaration += Yq > 0 ? `uniform ${Eq.name}: array<${qq}, ${Yq}>;\n` : `uniform ${Eq.name}: ${qq};\n`
                      } else this._uboDeclaration += `${Eq.type} ${Eq.name}${Yq>0?`[${Yq}]`:""};\n`
                    }
                    this._uniformList.push(Eq.name)
                  }
                Yq.vertex && (this._vertexDeclaration += Yq.vertex + "\n"), Yq.fragment && (this._fragmentDeclaration += Yq.fragment + "\n"), Yq.externalUniforms && this._uniformList.push(...Yq.externalUniforms)
              }
              Eq.getSamplers(this._samplerList), Eq.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(qq, Eq) {
        if (Eq)
          for (const gq in Eq) this._codeInjectionPoints[qq] || (this._codeInjectionPoints[qq] = {}), this._codeInjectionPoints[qq][gq] = !0
      }
      _injectCustomCode(qq, Eq) {
        return (gq, Yq) => {
          Eq && (Yq = Eq(gq, Yq)), this._uboDeclaration && (Yq = Yq.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Yq = Yq.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (Yq = Yq.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const lq = this._codeInjectionPoints?.[gq];
          if (!lq) return Yq;
          let Aq = null;
          for (let Eq in lq) {
            let lq = "";
            for (const Yq of this._activePlugins) {
              const xq = this._material.shaderLanguage;
              let cq = Yq.getCustomCode(gq, xq)?.[Eq];
              cq && (Yq.resolveIncludes && (null === Aq && (Aq = {
                defines: [],
                indexParameters: qq.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: mq.d.GetShadersRepository(xq),
                includesShadersStore: mq.d.GetIncludesShadersStore(xq),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                vYq: this._engine.vYq,
                processCodeAfterIncludes: void 0
              }), Aq.isFragment = "fragment" === gq, (0, Oq.g)(cq, Aq, (qq => cq = qq))), lq += cq + "\n")
            }
            if (lq.length > 0)
              if ("!" === Eq.charAt(0)) {
                Eq = Eq.substring(1);
                let qq = "g";
                if ("!" === Eq.charAt(0)) qq = "", Eq = Eq.substring(1);
                else {
                  const gq = xq.exec(Eq);
                  gq && gq.length >= 2 && (qq = gq[1], Eq = Eq.substring(qq.length + 1))
                }
                qq.indexOf("g") < 0 && (qq += "g");
                const gq = new RegExp(Eq, qq);
                let Oq = gq.exec(Yq);
                for (; null !== Oq;) {
                  const {
                    index: qq
                  } = Oq, Eq = cq(lq, Oq);
                  Yq = Yq.substring(0, qq) + Eq + Yq.substring(qq + Oq[0].length), gq.lastIndex = qq + Eq.length, Oq = gq.exec(Yq)
                }
              } else {
                const qq = "#define " + Eq;
                Yq = Yq.replace(qq, "\n" + lq + "\n" + qq)
              }
          }
          return Yq
        }
      }
    }
    Aq._MaterialPluginClassToMainDefine = {}, Aq._MaterialPluginCounter = 0;

    function cq(qq, Eq) {
      return qq.replace(/\$(\d+)/g, ((qq, gq) => {
        const Yq = Number(gq);
        return Yq < Eq.length ? Eq[Yq] : ""
      }))
    }
    var uq = gq(39779),
      Bq = gq(37171);
    let Wq = (() => {
        var qq;
        let Eq, gq, Oq, mq, xq = [],
          cq = [],
          Bq = [],
          Wq = [],
          Nq = [],
          aq = [],
          Vq = [],
          dq = [];
        return qq = class {
          isCompatible(qq) {
            return 0 === qq
          }
          _enable(qq) {
            qq && this._pluginManager._activatePlugin(this)
          }
          constructor(qq, Eq, gq, lq) {
            let Oq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              mq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              uq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, Yq.i)(this, xq, void 0), this.priority = ((0, Yq.i)(this, cq), (0, Yq.i)(this, Bq, 500)), this.resolveIncludes = ((0, Yq.i)(this, Wq), (0, Yq.i)(this, Nq, !1)), this.registerForExtraEvents = ((0, Yq.i)(this, aq), (0, Yq.i)(this, Vq, !1)), this.doNotSerialize = ((0, Yq.i)(this, dq), !1), this._material = qq, this.name = Eq, this.priority = gq, this.resolveIncludes = uq, qq.pluginManager || (qq.pluginManager = new Aq(qq), qq.MJ.add((() => {
              qq.pluginManager = void 0
            }))), this._pluginDefineNames = lq, this._pluginManager = qq.pluginManager, Oq && this._pluginManager._addPlugin(this), mq && this._enable(!0), this.markAllDefinesAsDirty = qq._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(qq, Eq, gq, Yq) {
            return !0
          }
          hardBindForSubMesh(qq, Eq, gq, Yq) {}
          bindForSubMesh(qq, Eq, gq, Yq) {}
          dispose(qq) {}
          getCustomCode(qq) {
            return null
          }
          collectDefines(qq) {
            if (this._pluginDefineNames)
              for (const Eq of Object.keys(this._pluginDefineNames)) {
                if ("_" === Eq[0]) continue;
                const gq = typeof this._pluginDefineNames[Eq];
                qq[Eq] = {
                  type: "number" === gq ? "number" : "string" === gq ? "string" : "boolean" === gq ? "boolean" : "object",
                  default: this._pluginDefineNames[Eq]
                }
              }
          }
          prepareDefinesBeforeAttributes(qq, Eq, gq) {}
          prepareDefines(qq, Eq, gq) {}
          hasTexture(qq) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(qq) {}
          getActiveTextures(qq) {}
          getAnimatables(qq) {}
          addFallbacks(qq, Eq, gq) {
            return gq
          }
          getSamplers(qq) {}
          getAttributes(qq, Eq, gq) {}
          getUniformBuffersNames(qq) {}
          getUniforms() {
            return {}
          }
          copyTo(qq) {
            uq.d.Clone((() => qq), this)
          }
          serialize() {
            return uq.d.Serialize(this)
          }
          parse(qq, Eq, gq) {
            uq.d.Parse((() => this), qq, Eq, gq)
          }
        }, (() => {
          const Aq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          Eq = [(0, lq.M)()], gq = [(0, lq.M)()], Oq = [(0, lq.M)()], mq = [(0, lq.M)()], (0, Yq.f)(null, null, Eq, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: qq => "name" in qq,
              get: qq => qq.name,
              set: (qq, Eq) => {
                qq.name = Eq
              }
            },
            metadata: Aq
          }, xq, cq), (0, Yq.f)(null, null, gq, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: qq => "priority" in qq,
              get: qq => qq.priority,
              set: (qq, Eq) => {
                qq.priority = Eq
              }
            },
            metadata: Aq
          }, Bq, Wq), (0, Yq.f)(null, null, Oq, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: qq => "resolveIncludes" in qq,
              get: qq => qq.resolveIncludes,
              set: (qq, Eq) => {
                qq.resolveIncludes = Eq
              }
            },
            metadata: Aq
          }, Nq, aq), (0, Yq.f)(null, null, mq, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: qq => "registerForExtraEvents" in qq,
              get: qq => qq.registerForExtraEvents,
              set: (qq, Eq) => {
                qq.registerForExtraEvents = Eq
              }
            },
            metadata: Aq
          }, Vq, dq), Aq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Aq
          })
        })(), qq
      })(),
      Nq = !1;

    function aq() {
      Nq || (Nq = !0, (0, Bq.g)("BABYLON.MaterialPluginBase", Wq))
    }
  },
  40019: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Yq
    });
    class Yq {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(qq) {
        qq.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(qq) {}
      bindForSubMesh(qq, Eq, gq, Yq, lq) {
        if (Eq.prePassRenderer && Eq.prePassRenderer.enabled && Eq.prePassRenderer.currentRTisSceneRT && (-1 !== Eq.prePassRenderer.getIndex(2) || -1 !== Eq.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[gq.uniqueId] || (this.previousWorldMatrices[gq.uniqueId] = Yq.clone()), this.previousViewProjection || (this.previousViewProjection = Eq.getTransformMatrix().clone(), this.currentViewProjection = Eq.getTransformMatrix().clone());
          const lq = Eq.Ba();
          this.currentViewProjection.updateFlag !== Eq.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = lq.frameId, this.previousViewProjection.WG(this.currentViewProjection), this.currentViewProjection.WG(Eq.getTransformMatrix())) : this._lastUpdateFrameId !== lq.frameId && (this._lastUpdateFrameId = lq.frameId, this.previousViewProjection.WG(this.currentViewProjection)), qq.setMatrix("previousWorld", this.previousWorldMatrices[gq.uniqueId]), qq.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[gq.uniqueId] = Yq.clone()
        }
      }
    }
  },
  40145: (qq, Eq, gq) => {
    function Yq(qq) {
      return class extends qq {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    gq.d(Eq, {
      d: () => Yq
    })
  },
  40003: (qq, Eq, gq) => {
    gq.d(Eq, {
      StandardMaterial: () => Yq.g
    });
    var Yq = gq(40010);
    (0, Yq.e)()
  },
  40010: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Sq,
      g: () => Tq
    });
    var Yq = gq(39757),
      lq = gq(39759),
      Oq = gq(39858),
      mq = gq(39838),
      xq = gq(37289),
      Aq = gq(39879),
      cq = gq(40019),
      uq = gq(40028),
      Bq = gq(39860),
      Wq = gq(40037),
      Nq = gq(40033),
      aq = gq(40096),
      Vq = gq(40092),
      dq = gq(40104),
      jq = gq(40111),
      Hq = gq(40083),
      oq = gq(40115),
      Pq = gq(40079),
      Qq = gq(39779),
      yq = gq(40123),
      tq = gq(40127),
      rq = gq(40136),
      vq = gq(40145),
      hq = gq(40150),
      nq = gq(37171),
      bq = gq(39636);
    const iq = {
      effect: null,
      subMesh: null
    };
    class Zq extends((0, vq.d)((0, rq.b)(Nq.c))) {}
    class fq extends((0, uq.e)(Zq)) {
      constructor(qq) {
        super(qq), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class Mq extends((0, hq.c)(aq.b)) {}
    let Tq = (() => {
        var qq, Eq, uq, Nq, rq, vq, hq, nq, bq, Zq, Tq, zq, Sq, pq, Gq, Lq, Jq, kq, Rq, Uq, Fq, sq, Xq, wq, Kq, Cq, Iq, eq, Dq, qE, EE, gE, YE;
        let lE, OE, mE, xE, AE, cE, uE, BE, WE, NE, aE, VE, dE, jE, HE, oE, PE, QE, yE, tE, rE, vE, hE, nE, bE, iE, ZE, fE, ME, TE, zE, SE, pE, GE, LE, JE, kE, RE, UE, FE, sE, XE, wE, KE, CE, IE, eE, DE, qg, Eg, gg, Yg, lg, Og, mg, xg, Ag, cg, ug, Bg, Wg, Ng, ag, Vg, dg, jg, Hg, og, Pg, Qg, yg, tg, rg, vg = Mq,
          hg = [],
          ng = [],
          bg = [],
          ig = [],
          Zg = [],
          fg = [],
          Mg = [],
          Tg = [],
          zg = [],
          Sg = [],
          pg = [],
          Gg = [],
          Lg = [],
          Jg = [],
          kg = [],
          Rg = [],
          Ug = [],
          Fg = [],
          sg = [],
          Xg = [],
          wg = [],
          Kg = [],
          Cg = [],
          Ig = [],
          eg = [],
          Dg = [],
          qY = [],
          EY = [],
          gY = [],
          YY = [],
          lY = [],
          OY = [],
          mY = [],
          xY = [],
          AY = [],
          cY = [],
          uY = [],
          BY = [],
          WY = [],
          NY = [],
          aY = [],
          VY = [],
          dY = [],
          jY = [],
          HY = [],
          oY = [],
          PY = [],
          QY = [],
          yY = [],
          tY = [],
          rY = [],
          vY = [],
          hY = [],
          nY = [],
          bY = [],
          iY = [],
          ZY = [],
          fY = [],
          MY = [],
          TY = [],
          zY = [],
          SY = [],
          pY = [],
          GY = [],
          LY = [],
          JY = [],
          kY = [],
          RY = [],
          UY = [],
          FY = [],
          sY = [],
          XY = [],
          wY = [],
          KY = [],
          CY = [],
          IY = [],
          eY = [],
          DY = [],
          ql = [],
          El = [],
          gl = [],
          Yl = [],
          ll = [],
          Ol = [],
          ml = [],
          xl = [],
          Al = [],
          cl = [],
          ul = [],
          Bl = [],
          Wl = [],
          Nl = [],
          al = [],
          Vl = [],
          dl = [],
          jl = [],
          Hl = [],
          ol = [],
          Pl = [],
          Ql = [],
          yl = [],
          tl = [],
          rl = [],
          vl = [],
          hl = [],
          nl = [],
          bl = [],
          il = [],
          Zl = [],
          fl = [],
          Ml = [],
          Tl = [],
          zl = [],
          Sl = [],
          pl = [],
          Gl = [],
          Ll = [],
          Jl = [],
          kl = [],
          Rl = [],
          Ul = [],
          Fl = [],
          sl = [],
          Xl = [],
          wl = [],
          Kl = [],
          Cl = [],
          Il = [],
          el = [],
          Dl = [],
          qO = [],
          EO = [],
          gO = [],
          YO = [],
          lO = [],
          OO = [],
          mO = [],
          xO = [],
          AO = [],
          cO = [],
          uO = [],
          BO = [],
          WO = [],
          NO = [],
          aO = [],
          VO = [];
        return qq = class extends vg {
          get diffuseTexture() {
            return (0, Yq.b)(this, Eq, "f")
          }
          set diffuseTexture(qq) {
            (0, Yq.e)(this, Eq, qq, "f")
          }
          get ambientTexture() {
            return (0, Yq.b)(this, uq, "f")
          }
          set ambientTexture(qq) {
            (0, Yq.e)(this, uq, qq, "f")
          }
          get opacityTexture() {
            return (0, Yq.b)(this, Nq, "f")
          }
          set opacityTexture(qq) {
            (0, Yq.e)(this, Nq, qq, "f")
          }
          get reflectionTexture() {
            return (0, Yq.b)(this, rq, "f")
          }
          set reflectionTexture(qq) {
            (0, Yq.e)(this, rq, qq, "f")
          }
          get emissiveTexture() {
            return (0, Yq.b)(this, vq, "f")
          }
          set emissiveTexture(qq) {
            (0, Yq.e)(this, vq, qq, "f")
          }
          get specularTexture() {
            return (0, Yq.b)(this, hq, "f")
          }
          set specularTexture(qq) {
            (0, Yq.e)(this, hq, qq, "f")
          }
          get bumpTexture() {
            return (0, Yq.b)(this, nq, "f")
          }
          set bumpTexture(qq) {
            (0, Yq.e)(this, nq, qq, "f")
          }
          get lightmapTexture() {
            return (0, Yq.b)(this, bq, "f")
          }
          set lightmapTexture(qq) {
            (0, Yq.e)(this, bq, qq, "f")
          }
          get refractionTexture() {
            return (0, Yq.b)(this, Zq, "f")
          }
          set refractionTexture(qq) {
            (0, Yq.e)(this, Zq, qq, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, Yq.b)(this, Tq, "f")
          }
          set useAlphaFromDiffuseTexture(qq) {
            (0, Yq.e)(this, Tq, qq, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, Yq.b)(this, zq, "f")
          }
          set useEmissiveAsIllumination(qq) {
            (0, Yq.e)(this, zq, qq, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, Yq.b)(this, Sq, "f")
          }
          set linkEmissiveWithDiffuse(qq) {
            (0, Yq.e)(this, Sq, qq, "f")
          }
          get useSpecularOverAlpha() {
            return (0, Yq.b)(this, pq, "f")
          }
          set useSpecularOverAlpha(qq) {
            (0, Yq.e)(this, pq, qq, "f")
          }
          get useReflectionOverAlpha() {
            return (0, Yq.b)(this, Gq, "f")
          }
          set useReflectionOverAlpha(qq) {
            (0, Yq.e)(this, Gq, qq, "f")
          }
          get disableLighting() {
            return (0, Yq.b)(this, Lq, "f")
          }
          set disableLighting(qq) {
            (0, Yq.e)(this, Lq, qq, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, Yq.b)(this, Jq, "f")
          }
          set useObjectSpaceNormalMap(qq) {
            (0, Yq.e)(this, Jq, qq, "f")
          }
          get useParallax() {
            return (0, Yq.b)(this, kq, "f")
          }
          set useParallax(qq) {
            (0, Yq.e)(this, kq, qq, "f")
          }
          get useParallaxOcclusion() {
            return (0, Yq.b)(this, Rq, "f")
          }
          set useParallaxOcclusion(qq) {
            (0, Yq.e)(this, Rq, qq, "f")
          }
          get roughness() {
            return (0, Yq.b)(this, Uq, "f")
          }
          set roughness(qq) {
            (0, Yq.e)(this, Uq, qq, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, Yq.b)(this, Fq, "f")
          }
          set useLightmapAsShadowmap(qq) {
            (0, Yq.e)(this, Fq, qq, "f")
          }
          get diffuseFresnelParameters() {
            return (0, Yq.b)(this, sq, "f")
          }
          set diffuseFresnelParameters(qq) {
            (0, Yq.e)(this, sq, qq, "f")
          }
          get opacityFresnelParameters() {
            return (0, Yq.b)(this, Xq, "f")
          }
          set opacityFresnelParameters(qq) {
            (0, Yq.e)(this, Xq, qq, "f")
          }
          get reflectionFresnelParameters() {
            return (0, Yq.b)(this, wq, "f")
          }
          set reflectionFresnelParameters(qq) {
            (0, Yq.e)(this, wq, qq, "f")
          }
          get refractionFresnelParameters() {
            return (0, Yq.b)(this, Kq, "f")
          }
          set refractionFresnelParameters(qq) {
            (0, Yq.e)(this, Kq, qq, "f")
          }
          get emissiveFresnelParameters() {
            return (0, Yq.b)(this, Cq, "f")
          }
          set emissiveFresnelParameters(qq) {
            (0, Yq.e)(this, Cq, qq, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, Yq.b)(this, Iq, "f")
          }
          set useReflectionFresnelFromSpecular(qq) {
            (0, Yq.e)(this, Iq, qq, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, Yq.b)(this, eq, "f")
          }
          set useGlossinessFromSpecularMapAlpha(qq) {
            (0, Yq.e)(this, eq, qq, "f")
          }
          get maxSimultaneousLights() {
            return (0, Yq.b)(this, Dq, "f")
          }
          set maxSimultaneousLights(qq) {
            (0, Yq.e)(this, Dq, qq, "f")
          }
          get invertNormalMapX() {
            return (0, Yq.b)(this, qE, "f")
          }
          set invertNormalMapX(qq) {
            (0, Yq.e)(this, qE, qq, "f")
          }
          get invertNormalMapY() {
            return (0, Yq.b)(this, EE, "f")
          }
          set invertNormalMapY(qq) {
            (0, Yq.e)(this, EE, qq, "f")
          }
          get twoSidedLighting() {
            return (0, Yq.b)(this, gE, "f")
          }
          set twoSidedLighting(qq) {
            (0, Yq.e)(this, gE, qq, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Yq.b)(this, YE, "f")
          }
          set applyDecalMapAfterDetailMap(qq) {
            (0, Yq.e)(this, YE, qq, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(gq, lq) {
            super(gq, lq, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || qq.ForceGLSL), this._diffuseTexture = (0, Yq.i)(this, hg, null), Eq.set(this, ((0, Yq.i)(this, ng), (0, Yq.i)(this, bg, void 0))), this._ambientTexture = ((0, Yq.i)(this, ig), (0, Yq.i)(this, Zg, null)), uq.set(this, ((0, Yq.i)(this, fg), (0, Yq.i)(this, Mg, void 0))), this._opacityTexture = ((0, Yq.i)(this, Tg), (0, Yq.i)(this, zg, null)), Nq.set(this, ((0, Yq.i)(this, Sg), (0, Yq.i)(this, pg, void 0))), this._reflectionTexture = ((0, Yq.i)(this, Gg), (0, Yq.i)(this, Lg, null)), rq.set(this, ((0, Yq.i)(this, Jg), (0, Yq.i)(this, kg, void 0))), this._emissiveTexture = ((0, Yq.i)(this, Rg), (0, Yq.i)(this, Ug, null)), vq.set(this, ((0, Yq.i)(this, Fg), (0, Yq.i)(this, sg, void 0))), this._specularTexture = ((0, Yq.i)(this, Xg), (0, Yq.i)(this, wg, null)), hq.set(this, ((0, Yq.i)(this, Kg), (0, Yq.i)(this, Cg, void 0))), this._bumpTexture = ((0, Yq.i)(this, Ig), (0, Yq.i)(this, eg, null)), nq.set(this, ((0, Yq.i)(this, Dg), (0, Yq.i)(this, qY, void 0))), this._lightmapTexture = ((0, Yq.i)(this, EY), (0, Yq.i)(this, gY, null)), bq.set(this, ((0, Yq.i)(this, YY), (0, Yq.i)(this, lY, void 0))), this._refractionTexture = ((0, Yq.i)(this, OY), (0, Yq.i)(this, mY, null)), Zq.set(this, ((0, Yq.i)(this, xY), (0, Yq.i)(this, AY, void 0))), this.ambientColor = ((0, Yq.i)(this, cY), (0, Yq.i)(this, uY, new xq.d(0, 0, 0))), this.diffuseColor = ((0, Yq.i)(this, BY), (0, Yq.i)(this, WY, new xq.d(1, 1, 1))), this.specularColor = ((0, Yq.i)(this, NY), (0, Yq.i)(this, aY, new xq.d(1, 1, 1))), this.emissiveColor = ((0, Yq.i)(this, VY), (0, Yq.i)(this, dY, new xq.d(0, 0, 0))), this.specularPower = ((0, Yq.i)(this, jY), (0, Yq.i)(this, HY, 64)), this._useAlphaFromDiffuseTexture = ((0, Yq.i)(this, oY), (0, Yq.i)(this, PY, !1)), Tq.set(this, ((0, Yq.i)(this, QY), (0, Yq.i)(this, yY, void 0))), this._useEmissiveAsIllumination = ((0, Yq.i)(this, tY), (0, Yq.i)(this, rY, !1)), zq.set(this, ((0, Yq.i)(this, vY), (0, Yq.i)(this, hY, void 0))), this._linkEmissiveWithDiffuse = ((0, Yq.i)(this, nY), (0, Yq.i)(this, bY, !1)), Sq.set(this, ((0, Yq.i)(this, iY), (0, Yq.i)(this, ZY, void 0))), this._useSpecularOverAlpha = ((0, Yq.i)(this, fY), (0, Yq.i)(this, MY, !1)), pq.set(this, ((0, Yq.i)(this, TY), (0, Yq.i)(this, zY, void 0))), this._useReflectionOverAlpha = ((0, Yq.i)(this, SY), (0, Yq.i)(this, pY, !1)), Gq.set(this, ((0, Yq.i)(this, GY), (0, Yq.i)(this, LY, void 0))), this._disableLighting = ((0, Yq.i)(this, JY), (0, Yq.i)(this, kY, !1)), Lq.set(this, ((0, Yq.i)(this, RY), (0, Yq.i)(this, UY, void 0))), this._useObjectSpaceNormalMap = ((0, Yq.i)(this, FY), (0, Yq.i)(this, sY, !1)), Jq.set(this, ((0, Yq.i)(this, XY), (0, Yq.i)(this, wY, void 0))), this._useParallax = ((0, Yq.i)(this, KY), (0, Yq.i)(this, CY, !1)), kq.set(this, ((0, Yq.i)(this, IY), (0, Yq.i)(this, eY, void 0))), this._useParallaxOcclusion = ((0, Yq.i)(this, DY), (0, Yq.i)(this, ql, !1)), Rq.set(this, ((0, Yq.i)(this, El), (0, Yq.i)(this, gl, void 0))), this.parallaxScaleBias = ((0, Yq.i)(this, Yl), (0, Yq.i)(this, ll, .05)), this._roughness = ((0, Yq.i)(this, Ol), (0, Yq.i)(this, ml, 0)), Uq.set(this, ((0, Yq.i)(this, xl), (0, Yq.i)(this, Al, void 0))), this.indexOfRefraction = ((0, Yq.i)(this, cl), (0, Yq.i)(this, ul, .98)), this.invertRefractionY = ((0, Yq.i)(this, Bl), (0, Yq.i)(this, Wl, !0)), this.alphaCutOff = ((0, Yq.i)(this, Nl), (0, Yq.i)(this, al, .4)), this._useLightmapAsShadowmap = ((0, Yq.i)(this, Vl), (0, Yq.i)(this, dl, !1)), Fq.set(this, ((0, Yq.i)(this, jl), (0, Yq.i)(this, Hl, void 0))), this._diffuseFresnelParameters = ((0, Yq.i)(this, ol), (0, Yq.i)(this, Pl, void 0)), sq.set(this, ((0, Yq.i)(this, Ql), (0, Yq.i)(this, yl, void 0))), this._opacityFresnelParameters = ((0, Yq.i)(this, tl), (0, Yq.i)(this, rl, void 0)), Xq.set(this, ((0, Yq.i)(this, vl), (0, Yq.i)(this, hl, void 0))), this._reflectionFresnelParameters = ((0, Yq.i)(this, nl), (0, Yq.i)(this, bl, void 0)), wq.set(this, ((0, Yq.i)(this, il), (0, Yq.i)(this, Zl, void 0))), this._refractionFresnelParameters = ((0, Yq.i)(this, fl), (0, Yq.i)(this, Ml, void 0)), Kq.set(this, ((0, Yq.i)(this, Tl), (0, Yq.i)(this, zl, void 0))), this._emissiveFresnelParameters = ((0, Yq.i)(this, Sl), (0, Yq.i)(this, pl, void 0)), Cq.set(this, ((0, Yq.i)(this, Gl), (0, Yq.i)(this, Ll, void 0))), this._useReflectionFresnelFromSpecular = ((0, Yq.i)(this, Jl), (0, Yq.i)(this, kl, !1)), Iq.set(this, ((0, Yq.i)(this, Rl), (0, Yq.i)(this, Ul, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, Yq.i)(this, Fl), (0, Yq.i)(this, sl, !1)), eq.set(this, ((0, Yq.i)(this, Xl), (0, Yq.i)(this, wl, void 0))), this._maxSimultaneousLights = ((0, Yq.i)(this, Kl), (0, Yq.i)(this, Cl, 4)), Dq.set(this, ((0, Yq.i)(this, Il), (0, Yq.i)(this, el, void 0))), this._invertNormalMapX = ((0, Yq.i)(this, Dl), (0, Yq.i)(this, qO, !1)), qE.set(this, ((0, Yq.i)(this, EO), (0, Yq.i)(this, gO, void 0))), this._invertNormalMapY = ((0, Yq.i)(this, YO), (0, Yq.i)(this, lO, !1)), EE.set(this, ((0, Yq.i)(this, OO), (0, Yq.i)(this, mO, void 0))), this._twoSidedLighting = ((0, Yq.i)(this, xO), (0, Yq.i)(this, AO, !1)), gE.set(this, ((0, Yq.i)(this, cO), (0, Yq.i)(this, uO, void 0))), this._applyDecalMapAfterDetailMap = ((0, Yq.i)(this, BO), (0, Yq.i)(this, WO, !1)), YE.set(this, ((0, Yq.i)(this, NO), (0, Yq.i)(this, aO, void 0))), this._vertexPullingMetadata = ((0, Yq.i)(this, VO), null), this._renderTargets = new Oq.c(16), this._globalAmbientColor = new xq.d(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new jq.d(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new cq.e, this.getRenderTargetTextures = () => (this._renderTargets.reset(), qq.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), qq.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(qq.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(qq.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === Wq.e.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== Wq.e.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(Eq, gq) {
            let Yq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const lq = gq._drawWrapper;
            if (lq.effect && this.isFrozen && lq._wasPreviouslyReady && lq._wasPreviouslyUsingInstances === Yq) return !0;
            gq.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), gq.materialDefines = new fq(this._eventInfo.defineNames));
            const Oq = this.ZJ(),
              mq = gq.materialDefines;
            if (this._isReadyForSubMesh(gq)) return !0;
            const xq = Oq.Ba();
            if (mq._needNormals = (0, Pq._)(Oq, Eq, mq, !0, this._maxSimultaneousLights, this._disableLighting), !(0, Pq.b)(Oq, Eq, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, Pq.hb)(Oq, mq);
            const uq = this.needAlphaBlendingForMesh(Eq) && this.ZJ().useOrderIndependentTransparency;
            if ((0, Pq.nb)(Oq, mq, this.canRenderToMRT && !uq), (0, Pq.jb)(Oq, mq, uq), tq.e.PrepareDefines(xq.currentRenderPassId, Eq, mq), mq._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, mq._needUVs = !1;
              for (let qq = 1; qq <= 6; ++qq) mq["MAINUV" + qq] = !1;
              if (Oq.texturesEnabled) {
                if (mq.DIFFUSEDIRECTUV = 0, mq.BUMPDIRECTUV = 0, mq.AMBIENTDIRECTUV = 0, mq.OPACITYDIRECTUV = 0, mq.EMISSIVEDIRECTUV = 0, mq.SPECULARDIRECTUV = 0, mq.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && qq.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, Pq.bb)(this._diffuseTexture, mq, "DIFFUSE")
                } else mq.DIFFUSE = !1;
                if (this._ambientTexture && qq.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, Pq.bb)(this._ambientTexture, mq, "AMBIENT")
                } else mq.AMBIENT = !1;
                if (this._opacityTexture && qq.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, Pq.bb)(this._opacityTexture, mq, "OPACITY"), mq.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else mq.OPACITY = !1;
                if (this._reflectionTexture && qq.ReflectionTextureEnabled ? (mq.ROUGHNESS = this._roughness > 0, mq.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (mq.ROUGHNESS = !1, mq.REFLECTIONOVERALPHA = !1), !(0, Pq.W)(Oq, this._reflectionTexture, mq)) return !1;
                if (this._emissiveTexture && qq.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, Pq.bb)(this._emissiveTexture, mq, "EMISSIVE")
                } else mq.EMISSIVE = !1;
                if (this._lightmapTexture && qq.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, Pq.bb)(this._lightmapTexture, mq, "LIGHTMAP"), mq.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, mq.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else mq.LIGHTMAP = !1;
                if (this._specularTexture && qq.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, Pq.bb)(this._specularTexture, mq, "SPECULAR"), mq.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else mq.SPECULAR = !1;
                if (Oq.Ba().getCaps().standardDerivatives && this._bumpTexture && qq.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, Pq.bb)(this._bumpTexture, mq, "BUMP"), mq.PARALLAX = this._useParallax, mq.PARALLAX_RHS = Oq.useRightHandedSystem, mq.PARALLAXOCCLUSION = this._useParallaxOcclusion, mq.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else mq.BUMP = !1, mq.PARALLAX = !1, mq.PARALLAX_RHS = !1, mq.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && qq.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  mq._needUVs = !0, mq.REFRACTION = !0, mq.REFRACTIONMAP_3D = this._refractionTexture.isCube, mq.RGBDREFRACTION = this._refractionTexture.isRGBD, mq.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else mq.REFRACTION = !1;
                mq.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else mq.DIFFUSE = !1, mq.AMBIENT = !1, mq.OPACITY = !1, mq.REFLECTION = !1, mq.EMISSIVE = !1, mq.LIGHTMAP = !1, mq.BUMP = !1, mq.REFRACTION = !1;
              mq.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), mq.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, mq.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, mq.SPECULAROVERALPHA = this._useSpecularOverAlpha, mq.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, mq.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, mq.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(Eq), mq.TEXTURE_REPETITION_MODE = xq.version > 1 || xq.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = mq, this._eventInfo.subMesh = gq, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (mq._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(mq), mq.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, mq.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (mq._areFresnelDirty && (qq.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (mq.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, mq.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, mq.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, mq.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, mq.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, mq.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, mq._needNormals = !0, mq.FRESNEL = !0) : mq.FRESNEL = !1), mq.AREALIGHTUSED || mq.CLUSTLIGHT_BATCH)
              for (let qq = 0; qq < Eq.lightSources.length; qq++)
                if (!Eq.lightSources[qq]._isReady()) return !1;
            (0, Pq.fb)(Eq, Oq, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(Eq), mq, this._applyDecalMapAfterDetailMap, this._useVertexPulling, gq.getRenderingMesh(), this._isVertexOutputInvariant), (0, Pq.V)(Oq, xq, this, mq, Yq, null, gq.getRenderingMesh().hasThinInstances), this._eventInfo.defines = mq, this._eventInfo.mesh = Eq, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, Pq.R)(Eq, mq, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let Wq = !1;
            if (mq.isDirty) {
              const Yq = mq._areLightsDisposed;
              mq.markAsProcessed();
              const lq = new dq.c;
              mq.REFLECTION && lq.addFallback(0, "REFLECTION"), mq.SPECULAR && lq.addFallback(0, "SPECULAR"), mq.BUMP && lq.addFallback(0, "BUMP"), mq.PARALLAX && lq.addFallback(1, "PARALLAX"), mq.PARALLAX_RHS && lq.addFallback(1, "PARALLAX_RHS"), mq.PARALLAXOCCLUSION && lq.addFallback(0, "PARALLAXOCCLUSION"), mq.SPECULAROVERALPHA && lq.addFallback(0, "SPECULAROVERALPHA"), mq.FOG && lq.addFallback(1, "FOG"), mq.POINTSIZE && lq.addFallback(0, "POINTSIZE"), mq.LOGARITHMICDEPTH && lq.addFallback(0, "LOGARITHMICDEPTH"), (0, Pq.z)(mq, lq, this._maxSimultaneousLights), mq.SPECULARTERM && lq.addFallback(0, "SPECULARTERM"), mq.DIFFUSEFRESNEL && lq.addFallback(1, "DIFFUSEFRESNEL"), mq.OPACITYFRESNEL && lq.addFallback(2, "OPACITYFRESNEL"), mq.REFLECTIONFRESNEL && lq.addFallback(3, "REFLECTIONFRESNEL"), mq.EMISSIVEFRESNEL && lq.addFallback(4, "EMISSIVEFRESNEL"), mq.FRESNEL && lq.addFallback(4, "FRESNEL"), mq.MULTIVIEW && lq.addFallback(0, "MULTIVIEW");
              const uq = [Aq.g.PositionKind];
              mq.NORMAL && uq.push(Aq.g.NormalKind), mq.TANGENT && uq.push(Aq.g.TangentKind);
              for (let qq = 1; qq <= 6; ++qq) mq["UV" + qq] && uq.push(`uv${1===qq?"":qq}`);
              mq.VERTEXCOLOR && uq.push(Aq.g.ColorKind), (0, Pq.G)(uq, Eq, mq, lq), (0, Pq.J)(uq, mq), (0, Pq.M)(uq, Eq, mq), (0, Pq.D)(uq, Eq, mq);
              let Nq = "default";
              const aq = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                Vq = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, Pq.rb)(aq, Vq, !1);
              const jq = ["Material", "Scene", "Mesh"],
                Qq = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: mq.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = lq, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = mq, this._eventInfo.uniforms = aq, this._eventInfo.attributes = uq, this._eventInfo.samplers = Vq, this._eventInfo.uniformBuffersNames = jq, this._eventInfo.customCode = void 0, this._eventInfo.mesh = Eq, this._eventInfo.indexParameters = Qq, this._callbackPluginEventGeneric(128, this._eventInfo), tq.e.AddUniformsAndSamplers(aq, Vq), cq.e.AddUniforms(aq), cq.e.AddSamplers(Vq), Bq.e && (Bq.e.PrepareUniforms(aq, mq), Bq.e.PrepareSamplers(Vq, mq)), (0, Pq.vb)({
                  uniformsNames: aq,
                  uniformBuffersNames: jq,
                  samplers: Vq,
                  defines: mq,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, Hq.e)(aq), this._useVertexPulling) {
                const qq = gq.getRenderingMesh(),
                  Eq = qq?.geometry;
                Eq && (this._vertexPullingMetadata = (0, oq.f)(Eq), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((qq, Eq) => {
                  aq.push(`vp_${Eq}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const yq = {};
              this.customShaderNameResolve && (Nq = this.customShaderNameResolve(Nq, aq, jq, Vq, mq, uq, yq));
              const rq = mq.toString(),
                vq = gq.effect,
                hq = Oq.Ba().createEffect(Nq, {
                  attributes: uq,
                  uniformsNames: aq,
                  uniformBuffersNames: jq,
                  samplers: Vq,
                  defines: rq,
                  fallbacks: lq,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: Qq,
                  processFinalCode: yq.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: mq.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: qq._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, xq);
              if (this._eventInfo.customCode = void 0, hq)
                if (this._onEffectCreatedObservable && (iq.effect = hq, iq.subMesh = gq, this._onEffectCreatedObservable.notifyObservers(iq)), this.allowShaderHotSwapping && vq && !hq.isReady()) {
                  if (mq.markAsUnprocessed(), Wq = this.isFrozen, Yq) return mq._areLightsDisposed = !0, !1
                } else Oq.resetCachedMaterial(), gq.setEffect(hq, mq, this._materialContext)
            }
            return !(!gq.effect || !gq.effect.isReady()) && (mq._renderId = Oq.getRenderId(), lq._wasPreviouslyReady = !Wq, lq._wasPreviouslyUsingInstances = Yq, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const qq = this._uniformBuffer;
            qq.addUniform("diffuseLeftColor", 4), qq.addUniform("diffuseRightColor", 4), qq.addUniform("opacityParts", 4), qq.addUniform("reflectionLeftColor", 4), qq.addUniform("reflectionRightColor", 4), qq.addUniform("refractionLeftColor", 4), qq.addUniform("refractionRightColor", 4), qq.addUniform("emissiveLeftColor", 4), qq.addUniform("emissiveRightColor", 4), qq.addUniform("vDiffuseInfos", 2), qq.addUniform("vAmbientInfos", 2), qq.addUniform("vOpacityInfos", 2), qq.addUniform("vEmissiveInfos", 2), qq.addUniform("vLightmapInfos", 2), qq.addUniform("vSpecularInfos", 2), qq.addUniform("vBumpInfos", 3), qq.addUniform("diffuseMatrix", 16), qq.addUniform("ambientMatrix", 16), qq.addUniform("opacityMatrix", 16), qq.addUniform("emissiveMatrix", 16), qq.addUniform("lightmapMatrix", 16), qq.addUniform("specularMatrix", 16), qq.addUniform("bumpMatrix", 16), qq.addUniform("vTangentSpaceParams", 2), qq.addUniform("pointSize", 1), qq.addUniform("alphaCutOff", 1), qq.addUniform("refractionMatrix", 16), qq.addUniform("vRefractionInfos", 4), qq.addUniform("vRefractionPosition", 3), qq.addUniform("vRefractionSize", 3), qq.addUniform("vSpecularColor", 4), qq.addUniform("vEmissiveColor", 3), qq.addUniform("vDiffuseColor", 4), qq.addUniform("vAmbientColor", 3), qq.addUniform("cameraInfo", 4), qq.addUniform("vTextureRepetitionHexTilingParams", 4), (0, Pq.pb)(qq, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(Eq, gq, Yq) {
            const lq = this.ZJ(),
              Oq = Yq.materialDefines;
            if (!Oq) return;
            const Aq = Yq.effect;
            if (!Aq) return;
            this._activeEffect = Aq, gq.getMeshUniformBuffer().bindToEffect(Aq, "Mesh"), gq.transferToEffect(Eq), this._uniformBuffer.bindToEffect(Aq, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, lq, gq, Eq, this.isFrozen), tq.e.Bind(lq.Ba().currentRenderPassId, this._activeEffect, gq, Eq, this);
            const cq = lq.activeCamera;
            cq ? this._uniformBuffer.updateFloat4("cameraInfo", cq.minZ, cq.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const uq = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", uq[0], uq[1], uq[2], uq[3]), this._eventInfo.subMesh = Yq, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Oq.OBJECTSPACE_NORMALMAP && (Eq.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Bq = this._mustRebind(lq, Aq, Yq, gq.visibility),
              Wq = lq.Ba()._features.needToAlwaysBindUniformBuffers;
            (0, Pq.c)(gq, Aq), this._vertexPullingMetadata && (0, oq.e)(Aq, this._vertexPullingMetadata);
            const Nq = this._uniformBuffer;
            if (Bq) {
              if (this.bindViewProjection(Aq), !Nq.useUbo || !this.isFrozen || !Nq.isSync || Yq._drawWrapper._forceRebindOnNextCall) {
                if (qq.FresnelEnabled && Oq.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (Nq.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), Nq.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const qq = xq.k.Color3[0];
                    qq.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), Nq.updateColor4("opacityParts", qq, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (Nq.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), Nq.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (Nq.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), Nq.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (Nq.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), Nq.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (Oq.ALPHATEST && Nq.updateFloat("alphaCutOff", this.alphaCutOff), lq.texturesEnabled && (this._diffuseTexture && qq.DiffuseTextureEnabled && (Nq.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, Pq.w)(this._diffuseTexture, Nq, "diffuse")), this._ambientTexture && qq.AmbientTextureEnabled && (Nq.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, Pq.w)(this._ambientTexture, Nq, "ambient")), this._opacityTexture && qq.OpacityTextureEnabled && (Nq.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, Pq.w)(this._opacityTexture, Nq, "opacity")), (0, Pq.i)(lq, Oq, Nq, xq.d.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && qq.ReflectionTextureEnabled || Nq.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && qq.EmissiveTextureEnabled && (Nq.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, Pq.w)(this._emissiveTexture, Nq, "emissive")), this._lightmapTexture && qq.LightmapTextureEnabled && (Nq.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, Pq.w)(this._lightmapTexture, Nq, "lightmap")), this._specularTexture && qq.SpecularTextureEnabled && (Nq.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, Pq.w)(this._specularTexture, Nq, "specular")), this._bumpTexture && lq.Ba().getCaps().standardDerivatives && qq.BumpTextureEnabled && (Nq.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, Pq.w)(this._bumpTexture, Nq, "bump"), lq._mirroredCameraPosition ? Nq.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Nq.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && qq.RefractionTextureEnabled)) {
                  let qq = 1;
                  if (this._refractionTexture.isCube || (Nq.Eqq("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (qq = this._refractionTexture.depth)), Nq.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, qq, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const qq = this._refractionTexture;
                    Nq.updateVector3("vRefractionPosition", qq.boundingBoxPosition), Nq.updateVector3("vRefractionSize", qq.boundingBoxSize)
                  }
                }
                this.pointsCloud && Nq.updateFloat("pointSize", this.pointSize), Nq.updateColor4("vSpecularColor", this.specularColor, this.specularPower), Nq.updateColor3("vEmissiveColor", qq.EmissiveTextureEnabled ? this.emissiveColor : xq.d.BlackReadOnly), Nq.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), lq.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), Nq.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              lq.texturesEnabled && (this._diffuseTexture && qq.DiffuseTextureEnabled && Aq.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && qq.AmbientTextureEnabled && Aq.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && qq.OpacityTextureEnabled && Aq.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && qq.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? Aq.setTexture("reflectionCubeSampler", this._reflectionTexture) : Aq.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && qq.EmissiveTextureEnabled && Aq.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && qq.LightmapTextureEnabled && Aq.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && qq.SpecularTextureEnabled && Aq.setTexture("specularSampler", this._specularTexture), this._bumpTexture && lq.Ba().getCaps().standardDerivatives && qq.BumpTextureEnabled && Aq.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && qq.RefractionTextureEnabled && (this._refractionTexture.isCube ? Aq.setTexture("refractionCubeSampler", this._refractionTexture) : Aq.setTexture("refraction2DSampler", this._refractionTexture))), this.ZJ().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(gq) && this.ZJ().depthPeelingRenderer.bind(Aq), this._eventInfo.subMesh = Yq, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, Hq.i)(Aq, this, lq), this.bindEyePosition(Aq)
            } else Wq && (this._needToBindSceneUbo = !0);
            !Bq && this.isFrozen && !Wq || !lq.lightsEnabled || this._disableLighting || (0, Pq.n)(lq, gq, Aq, Oq, this._maxSimultaneousLights), !Bq && this.isFrozen || ((lq.fogEnabled && gq.applyFog && lq.fogMode !== mq.i.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || gq.receiveShadows || Oq.PREPASS || Oq.CLUSTLIGHT_BATCH) && this.bindView(Aq), (0, Pq.f)(lq, gq, Aq), Oq.NUM_MORPH_INFLUENCERS && (0, Pq.p)(gq, Aq), Oq.BAKED_VERTEX_ANIMATION_TEXTURE && gq.bakedVertexAnimationManager?.bind(Aq, Oq.INSTANCES), this.useLogarithmicDepth && (0, Pq.o)(Oq, Aq, lq), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(gq, this._activeEffect, Yq), Nq.update()
          }
          _canBindRunFollower(Eq, gq, Yq, lq, Oq) {
            const mq = Eq.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === qq.prototype.isReadyForSubMesh && this.bindForSubMesh === qq.prototype.bindForSubMesh && this._mustRebind === aq.b.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !gq._features.needToAlwaysBindUniformBuffers && !(mq && mq.enabled && mq.currentRTisSceneRT) && !tq.e._Configurations[gq.currentRenderPassId] && !lq.materialDefines?.OBJECTSPACE_NORMALMAP && !Yq.skeleton && !Oq._bonesComputationForcedToCPU
          }
          _bindRunFollower(qq, Eq, gq, Yq) {
            this._activeEffect = Yq, Eq.getMeshUniformBuffer().bindToEffect(Yq, "Mesh"), Eq.transferToEffect(qq);
            const lq = this._uniformBuffer;
            lq.bindToEffect(Yq, "Material");
            const Oq = this._scene.activeCamera;
            Oq ? lq.updateFloat4("cameraInfo", Oq.minZ, Oq.maxZ, 0, 0) : lq.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const mq = this.textureRepetitionHexTilingParams;
            lq.updateFloat4("vTextureRepetitionHexTilingParams", mq[0], mq[1], mq[2], mq[3]), this._afterBind(Eq, Yq, gq), lq.update()
          }
          getAnimatables() {
            const qq = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && qq.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && qq.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && qq.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && qq.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && qq.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && qq.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && qq.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && qq.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && qq.push(this._refractionTexture), qq
          }
          getActiveTextures() {
            const qq = super.getActiveTextures();
            return this._diffuseTexture && qq.push(this._diffuseTexture), this._ambientTexture && qq.push(this._ambientTexture), this._opacityTexture && qq.push(this._opacityTexture), this._reflectionTexture && qq.push(this._reflectionTexture), this._emissiveTexture && qq.push(this._emissiveTexture), this._specularTexture && qq.push(this._specularTexture), this._bumpTexture && qq.push(this._bumpTexture), this._lightmapTexture && qq.push(this._lightmapTexture), this._refractionTexture && qq.push(this._refractionTexture), qq
          }
          hasTexture(qq) {
            return !!super.hasTexture(qq) || (this._diffuseTexture === qq || (this._ambientTexture === qq || (this._opacityTexture === qq || (this._reflectionTexture === qq || (this._emissiveTexture === qq || (this._specularTexture === qq || (this._bumpTexture === qq || (this._lightmapTexture === qq || this._refractionTexture === qq))))))))
          }
          dispose(qq, Eq) {
            Eq && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(qq, Eq)
          }
          clone(Eq) {
            let gq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const lq = Qq.d.Clone((() => new qq(Eq, this.ZJ())), this, {
              cloneTexturesOnlyOnce: gq
            });
            return lq.name = Eq, lq.id = Eq, this.stencil.copyTo(lq.stencil), this._clonePlugins(lq, Yq), lq
          }
          static Parse(Eq, gq, Yq) {
            const lq = Qq.d.Parse((() => new qq(Eq.name, gq)), Eq, gq, Yq);
            return Eq.stencil && lq.stencil.parse(Eq.stencil, gq, Yq), Wq.e._ParsePlugins(Eq, lq, gq, Yq), lq
          }
          static get DiffuseTextureEnabled() {
            return Vq.c.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(qq) {
            Vq.c.DiffuseTextureEnabled = qq
          }
          static get DetailTextureEnabled() {
            return Vq.c.DetailTextureEnabled
          }
          static set DetailTextureEnabled(qq) {
            Vq.c.DetailTextureEnabled = qq
          }
          static get AmbientTextureEnabled() {
            return Vq.c.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(qq) {
            Vq.c.AmbientTextureEnabled = qq
          }
          static get OpacityTextureEnabled() {
            return Vq.c.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(qq) {
            Vq.c.OpacityTextureEnabled = qq
          }
          static get ReflectionTextureEnabled() {
            return Vq.c.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(qq) {
            Vq.c.ReflectionTextureEnabled = qq
          }
          static get EmissiveTextureEnabled() {
            return Vq.c.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(qq) {
            Vq.c.EmissiveTextureEnabled = qq
          }
          static get SpecularTextureEnabled() {
            return Vq.c.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(qq) {
            Vq.c.SpecularTextureEnabled = qq
          }
          static get BumpTextureEnabled() {
            return Vq.c.BumpTextureEnabled
          }
          static set BumpTextureEnabled(qq) {
            Vq.c.BumpTextureEnabled = qq
          }
          static get LightmapTextureEnabled() {
            return Vq.c.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(qq) {
            Vq.c.LightmapTextureEnabled = qq
          }
          static get RefractionTextureEnabled() {
            return Vq.c.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(qq) {
            Vq.c.RefractionTextureEnabled = qq
          }
          static get ColorGradingTextureEnabled() {
            return Vq.c.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(qq) {
            Vq.c.ColorGradingTextureEnabled = qq
          }
          static get FresnelEnabled() {
            return Vq.c.FresnelEnabled
          }
          static set FresnelEnabled(qq) {
            Vq.c.FresnelEnabled = qq
          }
        }, Eq = new WeakMap, uq = new WeakMap, Nq = new WeakMap, rq = new WeakMap, vq = new WeakMap, hq = new WeakMap, nq = new WeakMap, bq = new WeakMap, Zq = new WeakMap, Tq = new WeakMap, zq = new WeakMap, Sq = new WeakMap, pq = new WeakMap, Gq = new WeakMap, Lq = new WeakMap, Jq = new WeakMap, kq = new WeakMap, Rq = new WeakMap, Uq = new WeakMap, Fq = new WeakMap, sq = new WeakMap, Xq = new WeakMap, wq = new WeakMap, Kq = new WeakMap, Cq = new WeakMap, Iq = new WeakMap, eq = new WeakMap, Dq = new WeakMap, qE = new WeakMap, EE = new WeakMap, gE = new WeakMap, YE = new WeakMap, (() => {
          const Eq = "function" === typeof Symbol && Symbol.metadata ? Object.create(vg[Symbol.metadata] ?? null) : void 0;
          lE = [(0, lq.E)("diffuseTexture")], OE = [(0, lq.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], mE = [(0, lq.E)("ambientTexture")], xE = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], AE = [(0, lq.E)("opacityTexture")], cE = [(0, lq.f)("_markAllSubMeshesAsTexturesAndMiscDirty")], uE = [(0, lq.E)("reflectionTexture")], BE = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], WE = [(0, lq.E)("emissiveTexture")], NE = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], aE = [(0, lq.E)("specularTexture")], VE = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], dE = [(0, lq.E)("bumpTexture")], jE = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], HE = [(0, lq.E)("lightmapTexture")], oE = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], PE = [(0, lq.E)("refractionTexture")], QE = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], yE = [(0, lq.o)("ambient")], tE = [(0, lq.o)("diffuse")], rE = [(0, lq.o)("specular")], vE = [(0, lq.o)("emissive")], hE = [(0, lq.M)()], nE = [(0, lq.M)("useAlphaFromDiffuseTexture")], bE = [() => ({
            init(qq) {
              return void 0 === qq && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = qq), qq
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(qq) {
              this._useAlphaFromDiffuseTexture = qq
            }
          })], iE = [(0, lq.M)("useEmissiveAsIllumination")], ZE = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], fE = [(0, lq.M)("linkEmissiveWithDiffuse")], ME = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], TE = [(0, lq.M)("useSpecularOverAlpha")], zE = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], SE = [(0, lq.M)("useReflectionOverAlpha")], pE = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], GE = [(0, lq.M)("disableLighting")], LE = [(0, lq.f)("_markAllSubMeshesAsLightsDirty")], JE = [(0, lq.M)("useObjectSpaceNormalMap")], kE = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], RE = [(0, lq.M)("useParallax")], UE = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], FE = [(0, lq.M)("useParallaxOcclusion")], sE = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], XE = [(0, lq.M)()], wE = [(0, lq.M)("roughness")], KE = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], CE = [(0, lq.M)()], IE = [(0, lq.M)()], eE = [(0, lq.M)()], DE = [(0, lq.M)("useLightmapAsShadowmap")], qg = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], Eg = [(0, lq.u)("diffuseFresnelParameters")], gg = [(0, lq.f)("_markAllSubMeshesAsFresnelDirty")], Yg = [(0, lq.u)("opacityFresnelParameters")], lg = [(0, lq.f)("_markAllSubMeshesAsFresnelAndMiscDirty")], Og = [(0, lq.u)("reflectionFresnelParameters")], mg = [(0, lq.f)("_markAllSubMeshesAsFresnelDirty")], xg = [(0, lq.u)("refractionFresnelParameters")], Ag = [(0, lq.f)("_markAllSubMeshesAsFresnelDirty")], cg = [(0, lq.u)("emissiveFresnelParameters")], ug = [(0, lq.f)("_markAllSubMeshesAsFresnelDirty")], Bg = [(0, lq.M)("useReflectionFresnelFromSpecular")], Wg = [(0, lq.f)("_markAllSubMeshesAsFresnelDirty")], Ng = [(0, lq.M)("useGlossinessFromSpecularMapAlpha")], ag = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], Vg = [(0, lq.M)("maxSimultaneousLights")], dg = [(0, lq.f)("_markAllSubMeshesAsLightsDirty")], jg = [(0, lq.M)("invertNormalMapX")], Hg = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], og = [(0, lq.M)("invertNormalMapY")], Pg = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], Qg = [(0, lq.M)("twoSidedLighting")], yg = [(0, lq.f)("_markAllSubMeshesAsTexturesDirty")], tg = [(0, lq.M)("applyDecalMapAfterDetailMap")], rg = [(0, lq.f)("_markAllSubMeshesAsMiscDirty")], (0, Yq.f)(qq, null, OE, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "diffuseTexture" in qq,
              get: qq => qq.diffuseTexture,
              set: (qq, Eq) => {
                qq.diffuseTexture = Eq
              }
            },
            metadata: Eq
          }, bg, ig), (0, Yq.f)(qq, null, xE, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "ambientTexture" in qq,
              get: qq => qq.ambientTexture,
              set: (qq, Eq) => {
                qq.ambientTexture = Eq
              }
            },
            metadata: Eq
          }, Mg, Tg), (0, Yq.f)(qq, null, cE, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "opacityTexture" in qq,
              get: qq => qq.opacityTexture,
              set: (qq, Eq) => {
                qq.opacityTexture = Eq
              }
            },
            metadata: Eq
          }, pg, Gg), (0, Yq.f)(qq, null, BE, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "reflectionTexture" in qq,
              get: qq => qq.reflectionTexture,
              set: (qq, Eq) => {
                qq.reflectionTexture = Eq
              }
            },
            metadata: Eq
          }, kg, Rg), (0, Yq.f)(qq, null, NE, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "emissiveTexture" in qq,
              get: qq => qq.emissiveTexture,
              set: (qq, Eq) => {
                qq.emissiveTexture = Eq
              }
            },
            metadata: Eq
          }, sg, Xg), (0, Yq.f)(qq, null, VE, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "specularTexture" in qq,
              get: qq => qq.specularTexture,
              set: (qq, Eq) => {
                qq.specularTexture = Eq
              }
            },
            metadata: Eq
          }, Cg, Ig), (0, Yq.f)(qq, null, jE, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "bumpTexture" in qq,
              get: qq => qq.bumpTexture,
              set: (qq, Eq) => {
                qq.bumpTexture = Eq
              }
            },
            metadata: Eq
          }, qY, EY), (0, Yq.f)(qq, null, oE, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "lightmapTexture" in qq,
              get: qq => qq.lightmapTexture,
              set: (qq, Eq) => {
                qq.lightmapTexture = Eq
              }
            },
            metadata: Eq
          }, lY, OY), (0, Yq.f)(qq, null, QE, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "refractionTexture" in qq,
              get: qq => qq.refractionTexture,
              set: (qq, Eq) => {
                qq.refractionTexture = Eq
              }
            },
            metadata: Eq
          }, AY, cY), (0, Yq.f)(qq, null, bE, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "useAlphaFromDiffuseTexture" in qq,
              get: qq => qq.useAlphaFromDiffuseTexture,
              set: (qq, Eq) => {
                qq.useAlphaFromDiffuseTexture = Eq
              }
            },
            metadata: Eq
          }, yY, tY), (0, Yq.f)(qq, null, ZE, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: qq => "useEmissiveAsIllumination" in qq,
              get: qq => qq.useEmissiveAsIllumination,
              set: (qq, Eq) => {
                qq.useEmissiveAsIllumination = Eq
              }
            },
            metadata: Eq
          }, hY, nY), (0, Yq.f)(qq, null, ME, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: qq => "linkEmissiveWithDiffuse" in qq,
              get: qq => qq.linkEmissiveWithDiffuse,
              set: (qq, Eq) => {
                qq.linkEmissiveWithDiffuse = Eq
              }
            },
            metadata: Eq
          }, ZY, fY), (0, Yq.f)(qq, null, zE, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: qq => "useSpecularOverAlpha" in qq,
              get: qq => qq.useSpecularOverAlpha,
              set: (qq, Eq) => {
                qq.useSpecularOverAlpha = Eq
              }
            },
            metadata: Eq
          }, zY, SY), (0, Yq.f)(qq, null, pE, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: qq => "useReflectionOverAlpha" in qq,
              get: qq => qq.useReflectionOverAlpha,
              set: (qq, Eq) => {
                qq.useReflectionOverAlpha = Eq
              }
            },
            metadata: Eq
          }, LY, JY), (0, Yq.f)(qq, null, LE, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: qq => "disableLighting" in qq,
              get: qq => qq.disableLighting,
              set: (qq, Eq) => {
                qq.disableLighting = Eq
              }
            },
            metadata: Eq
          }, UY, FY), (0, Yq.f)(qq, null, kE, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: qq => "useObjectSpaceNormalMap" in qq,
              get: qq => qq.useObjectSpaceNormalMap,
              set: (qq, Eq) => {
                qq.useObjectSpaceNormalMap = Eq
              }
            },
            metadata: Eq
          }, wY, KY), (0, Yq.f)(qq, null, UE, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: qq => "useParallax" in qq,
              get: qq => qq.useParallax,
              set: (qq, Eq) => {
                qq.useParallax = Eq
              }
            },
            metadata: Eq
          }, eY, DY), (0, Yq.f)(qq, null, sE, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: qq => "useParallaxOcclusion" in qq,
              get: qq => qq.useParallaxOcclusion,
              set: (qq, Eq) => {
                qq.useParallaxOcclusion = Eq
              }
            },
            metadata: Eq
          }, gl, Yl), (0, Yq.f)(qq, null, KE, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: qq => "roughness" in qq,
              get: qq => qq.roughness,
              set: (qq, Eq) => {
                qq.roughness = Eq
              }
            },
            metadata: Eq
          }, Al, cl), (0, Yq.f)(qq, null, qg, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: qq => "useLightmapAsShadowmap" in qq,
              get: qq => qq.useLightmapAsShadowmap,
              set: (qq, Eq) => {
                qq.useLightmapAsShadowmap = Eq
              }
            },
            metadata: Eq
          }, Hl, ol), (0, Yq.f)(qq, null, gg, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: qq => "diffuseFresnelParameters" in qq,
              get: qq => qq.diffuseFresnelParameters,
              set: (qq, Eq) => {
                qq.diffuseFresnelParameters = Eq
              }
            },
            metadata: Eq
          }, yl, tl), (0, Yq.f)(qq, null, lg, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: qq => "opacityFresnelParameters" in qq,
              get: qq => qq.opacityFresnelParameters,
              set: (qq, Eq) => {
                qq.opacityFresnelParameters = Eq
              }
            },
            metadata: Eq
          }, hl, nl), (0, Yq.f)(qq, null, mg, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: qq => "reflectionFresnelParameters" in qq,
              get: qq => qq.reflectionFresnelParameters,
              set: (qq, Eq) => {
                qq.reflectionFresnelParameters = Eq
              }
            },
            metadata: Eq
          }, Zl, fl), (0, Yq.f)(qq, null, Ag, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: qq => "refractionFresnelParameters" in qq,
              get: qq => qq.refractionFresnelParameters,
              set: (qq, Eq) => {
                qq.refractionFresnelParameters = Eq
              }
            },
            metadata: Eq
          }, zl, Sl), (0, Yq.f)(qq, null, ug, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: qq => "emissiveFresnelParameters" in qq,
              get: qq => qq.emissiveFresnelParameters,
              set: (qq, Eq) => {
                qq.emissiveFresnelParameters = Eq
              }
            },
            metadata: Eq
          }, Ll, Jl), (0, Yq.f)(qq, null, Wg, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: qq => "useReflectionFresnelFromSpecular" in qq,
              get: qq => qq.useReflectionFresnelFromSpecular,
              set: (qq, Eq) => {
                qq.useReflectionFresnelFromSpecular = Eq
              }
            },
            metadata: Eq
          }, Ul, Fl), (0, Yq.f)(qq, null, ag, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: qq => "useGlossinessFromSpecularMapAlpha" in qq,
              get: qq => qq.useGlossinessFromSpecularMapAlpha,
              set: (qq, Eq) => {
                qq.useGlossinessFromSpecularMapAlpha = Eq
              }
            },
            metadata: Eq
          }, wl, Kl), (0, Yq.f)(qq, null, dg, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: qq => "maxSimultaneousLights" in qq,
              get: qq => qq.maxSimultaneousLights,
              set: (qq, Eq) => {
                qq.maxSimultaneousLights = Eq
              }
            },
            metadata: Eq
          }, el, Dl), (0, Yq.f)(qq, null, Hg, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: qq => "invertNormalMapX" in qq,
              get: qq => qq.invertNormalMapX,
              set: (qq, Eq) => {
                qq.invertNormalMapX = Eq
              }
            },
            metadata: Eq
          }, gO, YO), (0, Yq.f)(qq, null, Pg, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: qq => "invertNormalMapY" in qq,
              get: qq => qq.invertNormalMapY,
              set: (qq, Eq) => {
                qq.invertNormalMapY = Eq
              }
            },
            metadata: Eq
          }, mO, xO), (0, Yq.f)(qq, null, yg, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: qq => "twoSidedLighting" in qq,
              get: qq => qq.twoSidedLighting,
              set: (qq, Eq) => {
                qq.twoSidedLighting = Eq
              }
            },
            metadata: Eq
          }, uO, BO), (0, Yq.f)(qq, null, rg, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: qq => "applyDecalMapAfterDetailMap" in qq,
              get: qq => qq.applyDecalMapAfterDetailMap,
              set: (qq, Eq) => {
                qq.applyDecalMapAfterDetailMap = Eq
              }
            },
            metadata: Eq
          }, aO, VO), (0, Yq.f)(null, null, lE, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "_diffuseTexture" in qq,
              get: qq => qq._diffuseTexture,
              set: (qq, Eq) => {
                qq._diffuseTexture = Eq
              }
            },
            metadata: Eq
          }, hg, ng), (0, Yq.f)(null, null, mE, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "_ambientTexture" in qq,
              get: qq => qq._ambientTexture,
              set: (qq, Eq) => {
                qq._ambientTexture = Eq
              }
            },
            metadata: Eq
          }, Zg, fg), (0, Yq.f)(null, null, AE, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "_opacityTexture" in qq,
              get: qq => qq._opacityTexture,
              set: (qq, Eq) => {
                qq._opacityTexture = Eq
              }
            },
            metadata: Eq
          }, zg, Sg), (0, Yq.f)(null, null, uE, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "_reflectionTexture" in qq,
              get: qq => qq._reflectionTexture,
              set: (qq, Eq) => {
                qq._reflectionTexture = Eq
              }
            },
            metadata: Eq
          }, Lg, Jg), (0, Yq.f)(null, null, WE, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "_emissiveTexture" in qq,
              get: qq => qq._emissiveTexture,
              set: (qq, Eq) => {
                qq._emissiveTexture = Eq
              }
            },
            metadata: Eq
          }, Ug, Fg), (0, Yq.f)(null, null, aE, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "_specularTexture" in qq,
              get: qq => qq._specularTexture,
              set: (qq, Eq) => {
                qq._specularTexture = Eq
              }
            },
            metadata: Eq
          }, wg, Kg), (0, Yq.f)(null, null, dE, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "_bumpTexture" in qq,
              get: qq => qq._bumpTexture,
              set: (qq, Eq) => {
                qq._bumpTexture = Eq
              }
            },
            metadata: Eq
          }, eg, Dg), (0, Yq.f)(null, null, HE, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "_lightmapTexture" in qq,
              get: qq => qq._lightmapTexture,
              set: (qq, Eq) => {
                qq._lightmapTexture = Eq
              }
            },
            metadata: Eq
          }, gY, YY), (0, Yq.f)(null, null, PE, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "_refractionTexture" in qq,
              get: qq => qq._refractionTexture,
              set: (qq, Eq) => {
                qq._refractionTexture = Eq
              }
            },
            metadata: Eq
          }, mY, xY), (0, Yq.f)(null, null, yE, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: qq => "ambientColor" in qq,
              get: qq => qq.ambientColor,
              set: (qq, Eq) => {
                qq.ambientColor = Eq
              }
            },
            metadata: Eq
          }, uY, BY), (0, Yq.f)(null, null, tE, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: qq => "diffuseColor" in qq,
              get: qq => qq.diffuseColor,
              set: (qq, Eq) => {
                qq.diffuseColor = Eq
              }
            },
            metadata: Eq
          }, WY, NY), (0, Yq.f)(null, null, rE, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: qq => "specularColor" in qq,
              get: qq => qq.specularColor,
              set: (qq, Eq) => {
                qq.specularColor = Eq
              }
            },
            metadata: Eq
          }, aY, VY), (0, Yq.f)(null, null, vE, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: qq => "emissiveColor" in qq,
              get: qq => qq.emissiveColor,
              set: (qq, Eq) => {
                qq.emissiveColor = Eq
              }
            },
            metadata: Eq
          }, dY, jY), (0, Yq.f)(null, null, hE, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: qq => "specularPower" in qq,
              get: qq => qq.specularPower,
              set: (qq, Eq) => {
                qq.specularPower = Eq
              }
            },
            metadata: Eq
          }, HY, oY), (0, Yq.f)(null, null, nE, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: qq => "_useAlphaFromDiffuseTexture" in qq,
              get: qq => qq._useAlphaFromDiffuseTexture,
              set: (qq, Eq) => {
                qq._useAlphaFromDiffuseTexture = Eq
              }
            },
            metadata: Eq
          }, PY, QY), (0, Yq.f)(null, null, iE, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: qq => "_useEmissiveAsIllumination" in qq,
              get: qq => qq._useEmissiveAsIllumination,
              set: (qq, Eq) => {
                qq._useEmissiveAsIllumination = Eq
              }
            },
            metadata: Eq
          }, rY, vY), (0, Yq.f)(null, null, fE, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: qq => "_linkEmissiveWithDiffuse" in qq,
              get: qq => qq._linkEmissiveWithDiffuse,
              set: (qq, Eq) => {
                qq._linkEmissiveWithDiffuse = Eq
              }
            },
            metadata: Eq
          }, bY, iY), (0, Yq.f)(null, null, TE, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: qq => "_useSpecularOverAlpha" in qq,
              get: qq => qq._useSpecularOverAlpha,
              set: (qq, Eq) => {
                qq._useSpecularOverAlpha = Eq
              }
            },
            metadata: Eq
          }, MY, TY), (0, Yq.f)(null, null, SE, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: qq => "_useReflectionOverAlpha" in qq,
              get: qq => qq._useReflectionOverAlpha,
              set: (qq, Eq) => {
                qq._useReflectionOverAlpha = Eq
              }
            },
            metadata: Eq
          }, pY, GY), (0, Yq.f)(null, null, GE, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: qq => "_disableLighting" in qq,
              get: qq => qq._disableLighting,
              set: (qq, Eq) => {
                qq._disableLighting = Eq
              }
            },
            metadata: Eq
          }, kY, RY), (0, Yq.f)(null, null, JE, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: qq => "_useObjectSpaceNormalMap" in qq,
              get: qq => qq._useObjectSpaceNormalMap,
              set: (qq, Eq) => {
                qq._useObjectSpaceNormalMap = Eq
              }
            },
            metadata: Eq
          }, sY, XY), (0, Yq.f)(null, null, RE, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: qq => "_useParallax" in qq,
              get: qq => qq._useParallax,
              set: (qq, Eq) => {
                qq._useParallax = Eq
              }
            },
            metadata: Eq
          }, CY, IY), (0, Yq.f)(null, null, FE, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: qq => "_useParallaxOcclusion" in qq,
              get: qq => qq._useParallaxOcclusion,
              set: (qq, Eq) => {
                qq._useParallaxOcclusion = Eq
              }
            },
            metadata: Eq
          }, ql, El), (0, Yq.f)(null, null, XE, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: qq => "parallaxScaleBias" in qq,
              get: qq => qq.parallaxScaleBias,
              set: (qq, Eq) => {
                qq.parallaxScaleBias = Eq
              }
            },
            metadata: Eq
          }, ll, Ol), (0, Yq.f)(null, null, wE, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: qq => "_roughness" in qq,
              get: qq => qq._roughness,
              set: (qq, Eq) => {
                qq._roughness = Eq
              }
            },
            metadata: Eq
          }, ml, xl), (0, Yq.f)(null, null, CE, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: qq => "indexOfRefraction" in qq,
              get: qq => qq.indexOfRefraction,
              set: (qq, Eq) => {
                qq.indexOfRefraction = Eq
              }
            },
            metadata: Eq
          }, ul, Bl), (0, Yq.f)(null, null, IE, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: qq => "invertRefractionY" in qq,
              get: qq => qq.invertRefractionY,
              set: (qq, Eq) => {
                qq.invertRefractionY = Eq
              }
            },
            metadata: Eq
          }, Wl, Nl), (0, Yq.f)(null, null, eE, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: qq => "alphaCutOff" in qq,
              get: qq => qq.alphaCutOff,
              set: (qq, Eq) => {
                qq.alphaCutOff = Eq
              }
            },
            metadata: Eq
          }, al, Vl), (0, Yq.f)(null, null, DE, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: qq => "_useLightmapAsShadowmap" in qq,
              get: qq => qq._useLightmapAsShadowmap,
              set: (qq, Eq) => {
                qq._useLightmapAsShadowmap = Eq
              }
            },
            metadata: Eq
          }, dl, jl), (0, Yq.f)(null, null, Eg, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: qq => "_diffuseFresnelParameters" in qq,
              get: qq => qq._diffuseFresnelParameters,
              set: (qq, Eq) => {
                qq._diffuseFresnelParameters = Eq
              }
            },
            metadata: Eq
          }, Pl, Ql), (0, Yq.f)(null, null, Yg, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: qq => "_opacityFresnelParameters" in qq,
              get: qq => qq._opacityFresnelParameters,
              set: (qq, Eq) => {
                qq._opacityFresnelParameters = Eq
              }
            },
            metadata: Eq
          }, rl, vl), (0, Yq.f)(null, null, Og, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: qq => "_reflectionFresnelParameters" in qq,
              get: qq => qq._reflectionFresnelParameters,
              set: (qq, Eq) => {
                qq._reflectionFresnelParameters = Eq
              }
            },
            metadata: Eq
          }, bl, il), (0, Yq.f)(null, null, xg, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: qq => "_refractionFresnelParameters" in qq,
              get: qq => qq._refractionFresnelParameters,
              set: (qq, Eq) => {
                qq._refractionFresnelParameters = Eq
              }
            },
            metadata: Eq
          }, Ml, Tl), (0, Yq.f)(null, null, cg, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: qq => "_emissiveFresnelParameters" in qq,
              get: qq => qq._emissiveFresnelParameters,
              set: (qq, Eq) => {
                qq._emissiveFresnelParameters = Eq
              }
            },
            metadata: Eq
          }, pl, Gl), (0, Yq.f)(null, null, Bg, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: qq => "_useReflectionFresnelFromSpecular" in qq,
              get: qq => qq._useReflectionFresnelFromSpecular,
              set: (qq, Eq) => {
                qq._useReflectionFresnelFromSpecular = Eq
              }
            },
            metadata: Eq
          }, kl, Rl), (0, Yq.f)(null, null, Ng, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: qq => "_useGlossinessFromSpecularMapAlpha" in qq,
              get: qq => qq._useGlossinessFromSpecularMapAlpha,
              set: (qq, Eq) => {
                qq._useGlossinessFromSpecularMapAlpha = Eq
              }
            },
            metadata: Eq
          }, sl, Xl), (0, Yq.f)(null, null, Vg, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: qq => "_maxSimultaneousLights" in qq,
              get: qq => qq._maxSimultaneousLights,
              set: (qq, Eq) => {
                qq._maxSimultaneousLights = Eq
              }
            },
            metadata: Eq
          }, Cl, Il), (0, Yq.f)(null, null, jg, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: qq => "_invertNormalMapX" in qq,
              get: qq => qq._invertNormalMapX,
              set: (qq, Eq) => {
                qq._invertNormalMapX = Eq
              }
            },
            metadata: Eq
          }, qO, EO), (0, Yq.f)(null, null, og, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: qq => "_invertNormalMapY" in qq,
              get: qq => qq._invertNormalMapY,
              set: (qq, Eq) => {
                qq._invertNormalMapY = Eq
              }
            },
            metadata: Eq
          }, lO, OO), (0, Yq.f)(null, null, Qg, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: qq => "_twoSidedLighting" in qq,
              get: qq => qq._twoSidedLighting,
              set: (qq, Eq) => {
                qq._twoSidedLighting = Eq
              }
            },
            metadata: Eq
          }, AO, cO), (0, Yq.f)(null, null, tg, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: qq => "_applyDecalMapAfterDetailMap" in qq,
              get: qq => qq._applyDecalMapAfterDetailMap,
              set: (qq, Eq) => {
                qq._applyDecalMapAfterDetailMap = Eq
              }
            },
            metadata: Eq
          }, WO, NO), Eq && Object.defineProperty(qq, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Eq
          })
        })(), qq.ForceGLSL = !1, qq._ShaderLoader = new yq.c((() => [Promise.all([gq.e(308), gq.e(307)]).then((() => gq(41625))), Promise.all([gq.e(313), gq.e(309), gq.e(322), gq.e(312)]).then((() => gq(41813)))]), (() => [Promise.all([gq.e(329), gq.e(324)]).then((() => gq(41968))), Promise.all([gq.e(330), gq.e(340), gq.e(326)]).then((() => gq(42163)))])), qq
      })(),
      zq = !1;

    function Sq() {
      zq || (zq = !0, (0, Bq.f)(), (0, nq.g)("BABYLON.StandardMaterial", Tq), mq.i.DefaultMaterialFactory = qq => new Tq("default material", qq))
    }
    Object.getOwnPropertyDescriptor(Tq.prototype, "decalMap") || Object.defineProperty(Tq.prototype, "decalMap", (0, bq.e)("StandardMaterial", "decalMap"))
  },
  40136: (qq, Eq, gq) => {
    function Yq(qq) {
      return class extends qq {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    gq.d(Eq, {
      b: () => Yq
    })
  },
  40123: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq
    });
    class Yq {
      constructor(qq, Eq) {
        this._webGL = {
          load: qq,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: Eq,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(qq) {
        const Eq = 1 === qq ? this._webGPU : this._webGL;
        return Eq.loaded ? void 0 : async () => {
          await this._loadAsync(Eq)
        }
      }
      async _loadAsync(qq) {
        if (qq.loaded) return;
        let Eq = qq.loadPromise;
        const gq = null === Eq;
        gq && (Eq = Promise.all(qq.load()), qq.loadPromise = Eq);
        let Yq = !1;
        try {
          await Eq, Yq = !0
        } finally {
          gq && this._completeLoad(qq, Yq)
        }
      }
      _completeLoad(qq, Eq) {
        qq.loaded = Eq, qq.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);