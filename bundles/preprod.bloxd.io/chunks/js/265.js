export const id = 265;
export const ids = [265];
export const modules = {
  40562: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op
    });
    var Op = cp(40217);

    function op(pp) {
      return class extends pp {
        constructor() {
          super(...arguments);
          const pp = new.target;
          if (!pp[Symbol.metadata]) {
            const ip = Object.getPrototypeOf(pp)?.[Symbol.metadata];
            pp[Symbol.metadata] = ip ? Object.create(ip) : {}
          }
          const ip = (0, Op.c)(pp[Symbol.metadata]);
          ip._imageProcessingConfiguration || (ip._imageProcessingConfiguration = {
            type: 9,
            sourceName: void 0
          })
        }
        get imageProcessingConfiguration() {
          return this._imageProcessingConfiguration
        }
        set imageProcessingConfiguration(pp) {
          this._attachImageProcessingConfiguration(pp), this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
        }
        _attachImageProcessingConfiguration(pp) {
          pp !== this._imageProcessingConfiguration && (this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), !pp && this.Gl ? this._imageProcessingConfiguration = this.Gl().imageProcessingConfiguration : pp && (this._imageProcessingConfiguration = pp), this._imageProcessingConfiguration && (this._imageProcessingObserver = this._imageProcessingConfiguration.onUpdateParameters.add((() => {
            this._markAllSubMeshesAsImageProcessingDirty && this._markAllSubMeshesAsImageProcessingDirty()
          }))))
        }
        get cameraColorCurvesEnabled() {
          return this.imageProcessingConfiguration.colorCurvesEnabled
        }
        set cameraColorCurvesEnabled(pp) {
          this.imageProcessingConfiguration.colorCurvesEnabled = pp
        }
        get cameraColorGradingEnabled() {
          return this.imageProcessingConfiguration.colorGradingEnabled
        }
        set cameraColorGradingEnabled(pp) {
          this.imageProcessingConfiguration.colorGradingEnabled = pp
        }
        get cameraToneMappingEnabled() {
          return this._imageProcessingConfiguration.toneMappingEnabled
        }
        set cameraToneMappingEnabled(pp) {
          this._imageProcessingConfiguration.toneMappingEnabled = pp
        }
        get cameraExposure() {
          return this._imageProcessingConfiguration.exposure
        }
        set cameraExposure(pp) {
          this._imageProcessingConfiguration.exposure = pp
        }
        get cameraContrast() {
          return this._imageProcessingConfiguration.contrast
        }
        set cameraContrast(pp) {
          this._imageProcessingConfiguration.contrast = pp
        }
        get cameraColorGradingTexture() {
          return this._imageProcessingConfiguration.colorGradingTexture
        }
        set cameraColorGradingTexture(pp) {
          this._imageProcessingConfiguration.colorGradingTexture = pp
        }
        get cameraColorCurves() {
          return this._imageProcessingConfiguration.colorCurves
        }
        set cameraColorCurves(pp) {
          this._imageProcessingConfiguration.colorCurves = pp
        }
      }
    }
  },
  40467: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip,
      h: () => op
    });
    var Op = cp(40472);

    function op(pp) {
      return class extends pp {
        constructor() {
          super(...arguments), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.SKIPFINALCOLORCLAMP = !1, this.EXPOSURE = !1
        }
      }
    }
    class Ip extends Op.c {
      constructor() {
        super(), this.IMAGEPROCESSING = !1, this.WHITEBALANCE = !1, this.VIGNETTE = !1, this.VIGNETTEBLENDMODEMULTIPLY = !1, this.VIGNETTEBLENDMODEOPAQUE = !1, this.TONEMAPPING = 0, this.CONTRAST = !1, this.COLORCURVES = !1, this.COLORGRADING = !1, this.COLORGRADING3D = !1, this.SAMPLER3DGREENDEPTH = !1, this.SAMPLER3DBGRMAP = !1, this.DITHER = !1, this.IMAGEPROCESSINGPOSTPROCESS = !1, this.EXPOSURE = !1, this.SKIPFINALCOLORCLAMP = !1, this.rebuild()
      }
    }
  },
  40533: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Ap
    });
    var Op = cp(40203),
      op = cp(40476),
      Ip = cp(40210),
      Sp = cp(40519),
      xp = cp(40472),
      Lp = cp(40538),
      Yp = cp(40512);
    class Dp extends xp.c {
      constructor() {
        super(...arguments), this.DETAIL = !1, this.DETAILDIRECTUV = 0, this.DETAIL_NORMALBLENDMETHOD = 0
      }
    }
    let Ap = (() => {
      var pp, ip, cp, xp;
      let Ap, Pp, Wp, yp, Up, wp, vp = Lp.b,
        tp = [],
        Hp = [],
        dp = [],
        ep = [],
        jp = [],
        kp = [],
        mp = [],
        Rp = [],
        qp = [],
        Mp = [],
        Cp = [],
        Ep = [];
      return pp = class extends vp {
        get texture() {
          return (0, Op.e)(this, ip, "f")
        }
        set texture(pp) {
          (0, Op.f)(this, ip, pp, "f")
        }
        get normalBlendMethod() {
          return (0, Op.e)(this, cp, "f")
        }
        set normalBlendMethod(pp) {
          (0, Op.f)(this, cp, pp, "f")
        }
        get isEnabled() {
          return (0, Op.e)(this, xp, "f")
        }
        set isEnabled(pp) {
          (0, Op.f)(this, xp, pp, "f")
        }
        _markAllSubMeshesAsTexturesDirty() {
          this._enable(this._isEnabled), this._internalMarkAllSubMeshesAsTexturesDirty()
        }
        isCompatible() {
          return !0
        }
        constructor(pp) {
          let Ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          super(pp, "DetailMap", 140, new Dp, Ip), this._texture = null, ip.set(this, (0, Op.l)(this, tp, void 0)), this.diffuseBlendLevel = ((0, Op.l)(this, Hp), (0, Op.l)(this, dp, 1)), this.roughnessBlendLevel = ((0, Op.l)(this, ep), (0, Op.l)(this, jp, 1)), this.bumpLevel = ((0, Op.l)(this, kp), (0, Op.l)(this, mp, 1)), this._normalBlendMethod = ((0, Op.l)(this, Rp), op.b.MATERIAL_NORMALBLENDMETHOD_WHITEOUT), cp.set(this, (0, Op.l)(this, qp, void 0)), this._isEnabled = ((0, Op.l)(this, Mp), !1), xp.set(this, (0, Op.l)(this, Cp, !1)), this._internalMarkAllSubMeshesAsTexturesDirty = (0, Op.l)(this, Ep), this._internalMarkAllSubMeshesAsTexturesDirty = pp._dirtyCallbacks[1]
        }
        isReadyForSubMesh(pp, ip, cp) {
          return !this._isEnabled || !(pp._areTexturesDirty && ip.texturesEnabled && cp.getCaps().standardDerivatives && this._texture && Sp.c.DetailTextureEnabled && !this._texture.isReady())
        }
        prepareDefines(pp, ip) {
          if (this._isEnabled) {
            pp.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod;
            const cp = ip.gy();
            pp._areTexturesDirty && (cp.getCaps().standardDerivatives && this._texture && Sp.c.DetailTextureEnabled && this._isEnabled ? ((0, Yp.eb)(this._texture, pp, "DETAIL"), pp.DETAIL_NORMALBLENDMETHOD = this._normalBlendMethod) : pp.DETAIL = !1)
          } else pp.DETAIL = !1
        }
        bindForSubMesh(pp, ip) {
          if (!this._isEnabled) return;
          const cp = this._material.isFrozen;
          pp.useUbo && cp && pp.isSync || this._texture && Sp.c.DetailTextureEnabled && (pp.updateFloat4("vDetailInfos", this._texture.coordinatesIndex, this.diffuseBlendLevel, this.bumpLevel, this.roughnessBlendLevel), (0, Yp.A)(this._texture, pp, "detail")), ip.texturesEnabled && this._texture && Sp.c.DetailTextureEnabled && pp.setTexture("detailSampler", this._texture)
        }
        hasTexture(pp) {
          return this._texture === pp
        }
        getActiveTextures(pp) {
          this._texture && pp.push(this._texture)
        }
        getAnimatables(pp) {
          this._texture && this._texture.animations && this._texture.animations.length > 0 && pp.push(this._texture)
        }
        dispose(pp) {
          pp && this._texture?.dispose()
        }
        getClassName() {
          return "DetailMapConfiguration"
        }
        getSamplers(pp) {
          pp.push("detailSampler")
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
      }, ip = new WeakMap, cp = new WeakMap, xp = new WeakMap, (() => {
        const ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(vp[Symbol.metadata] ?? null) : void 0;
        Ap = [(0, Ip.C)("detailTexture"), (0, Ip.e)("_markAllSubMeshesAsTexturesDirty")], Pp = [(0, Ip.K)()], Wp = [(0, Ip.K)()], yp = [(0, Ip.K)()], Up = [(0, Ip.K)(), (0, Ip.e)("_markAllSubMeshesAsTexturesDirty")], wp = [(0, Ip.K)(), (0, Ip.e)("_markAllSubMeshesAsTexturesDirty")], (0, Op.j)(pp, null, Ap, {
          kind: "accessor",
          name: "texture",
          static: !1,
          private: !1,
          access: {
            has: pp => "texture" in pp,
            get: pp => pp.texture,
            set: (pp, ip) => {
              pp.texture = ip
            }
          },
          metadata: ip
        }, tp, Hp), (0, Op.j)(pp, null, Up, {
          kind: "accessor",
          name: "normalBlendMethod",
          static: !1,
          private: !1,
          access: {
            has: pp => "normalBlendMethod" in pp,
            get: pp => pp.normalBlendMethod,
            set: (pp, ip) => {
              pp.normalBlendMethod = ip
            }
          },
          metadata: ip
        }, qp, Mp), (0, Op.j)(pp, null, wp, {
          kind: "accessor",
          name: "isEnabled",
          static: !1,
          private: !1,
          access: {
            has: pp => "isEnabled" in pp,
            get: pp => pp.isEnabled,
            set: (pp, ip) => {
              pp.isEnabled = ip
            }
          },
          metadata: ip
        }, Cp, Ep), (0, Op.j)(null, null, Pp, {
          kind: "field",
          name: "diffuseBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: pp => "diffuseBlendLevel" in pp,
            get: pp => pp.diffuseBlendLevel,
            set: (pp, ip) => {
              pp.diffuseBlendLevel = ip
            }
          },
          metadata: ip
        }, dp, ep), (0, Op.j)(null, null, Wp, {
          kind: "field",
          name: "roughnessBlendLevel",
          static: !1,
          private: !1,
          access: {
            has: pp => "roughnessBlendLevel" in pp,
            get: pp => pp.roughnessBlendLevel,
            set: (pp, ip) => {
              pp.roughnessBlendLevel = ip
            }
          },
          metadata: ip
        }, jp, kp), (0, Op.j)(null, null, yp, {
          kind: "field",
          name: "bumpLevel",
          static: !1,
          private: !1,
          access: {
            has: pp => "bumpLevel" in pp,
            get: pp => pp.bumpLevel,
            set: (pp, ip) => {
              pp.bumpLevel = ip
            }
          },
          metadata: ip
        }, mp, Rp), ip && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ip
        })
      })(), pp
    })()
  },
  40472: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    class Op {
      constructor(pp) {
        if (this.VERTEXOUTPUT_INVARIANT = !1, this._keys = [], this._isDirty = !0, this._areLightsDirty = !0, this._areLightsDisposed = !1, this._areAttributesDirty = !0, this._areTexturesDirty = !0, this._areFresnelDirty = !0, this._areMiscDirty = !0, this._arePrePassDirty = !0, this._areImageProcessingDirty = !0, this._normals = !1, this._uvs = !1, this._needNormals = !1, this._needUVs = !1, this._externalProperties = pp, pp)
          for (const ip in pp) Object.prototype.hasOwnProperty.call(pp, ip) && this._setDefaultValue(ip)
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
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._areLightsDirty = !0, this._areLightsDisposed = this._areLightsDisposed || pp, this._isDirty = !0
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
        for (const pp of Object.keys(this)) "_" !== pp[0] && this._keys.push(pp);
        if (this._externalProperties)
          for (const pp in this._externalProperties) - 1 === this._keys.indexOf(pp) && this._keys.push(pp)
      }
      isEqual(pp) {
        if (this._keys.length !== pp._keys.length) return !1;
        for (let ip = 0; ip < this._keys.length; ip++) {
          const cp = this._keys[ip];
          if (this[cp] !== pp[cp]) return !1
        }
        return !0
      }
      cloneTo(pp) {
        this._keys.length !== pp._keys.length && (pp._keys = this._keys.slice(0));
        for (let ip = 0; ip < this._keys.length; ip++) {
          const cp = this._keys[ip];
          pp[cp] = this[cp]
        }
      }
      reset() {
        for (const pp of this._keys) this._setDefaultValue(pp)
      }
      _setDefaultValue(pp) {
        const ip = this._externalProperties?.[pp]?.type ?? typeof this[pp],
          cp = this._externalProperties?.[pp]?.default;
        switch (ip) {
          case "number":
            this[pp] = cp ?? 0;
            break;
          case "string":
            this[pp] = cp ?? "";
            break;
          default:
            this[pp] = cp ?? !1
        }
      }
      toString() {
        let pp = "";
        for (let ip = 0; ip < this._keys.length; ip++) {
          const cp = this._keys[ip],
            Op = this[cp];
          switch (typeof Op) {
            case "number":
            case "string":
              pp += "#define " + cp + " " + Op + "\n";
              break;
            default:
              Op && (pp += "#define " + cp + "\n")
          }
        }
        return pp
      }
    }
  },
  40550: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => xp,
      g: () => Sp,
      h: () => Ip
    });
    var Op, op = cp(37320);

    function Ip(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16777215;
      const Op = ip(pp);
      if (!Number.isInteger(Op) || Op < 0 || Op > cp) throw new Error(`Invalid geometry object ID ${Op} for mesh "${pp.name}". Object IDs must be integers between 0 and 0x${cp.toString(16).toUpperCase()}.`);
      return Op
    }

    function Sp(pp, ip) {
      const cp = ip(pp);
      if (!Number.isInteger(cp) || cp < 0 || cp > 255 || 0 !== cp && 0 === (63 & cp)) throw new Error(`Invalid geometry mesh-blending tag ${cp} for mesh "${pp.name}". Tags must be 0 or contain a group ID between 1 and 63.`);
      return cp
    }! function(pp) {
      pp[pp.Zero = 0] = "Zero", pp[pp.One = 1] = "One", pp[pp.MaxViewZ = 2] = "MaxViewZ", pp[pp.NoClear = 3] = "NoClear"
    }(Op || (Op = {}));
    class xp {
      static CreateConfiguration(pp) {
        return xp._Configurations[pp] = {
          defines: {},
          previousWorldMatrices: {},
          previousViewProjection: op.b.Zero(),
          currentViewProjection: op.b.Zero(),
          previousBones: {},
          lastUpdateFrameId: -1,
          excludedSkinnedMesh: [],
          reverseCulling: !1,
          objectIdIsRedFormat: !1
        }, xp._Configurations[pp]
      }
      static DeleteConfiguration(pp) {
        delete xp._Configurations[pp]
      }
      static GetConfiguration(pp) {
        return xp._Configurations[pp]
      }
      static _PrepareConfiguration(pp, ip, cp) {
        const Op = xp._Configurations[pp];
        Op._attachments = ip, Op._colorAttachments = cp, Op._mrtCount = ip.length;
        let op = "#define PREPASS\n";
        for (const Ip of xp.GeometryTextureDescriptions) {
          const pp = Op.defines[Ip.defineIndex];
          void 0 !== pp && (op += `#define ${Ip.define}\n#define ${Ip.defineIndex} ${pp}\n`)
        }
        Op.objectIdIsRedFormat && (op += "#define PREPASS_OBJECT_ID_R8\n"), Op._defines = op + `#define SCENE_MRT_COUNT ${ip.length}\n`
      }
      static _PrepareStringDefines(pp, ip) {
        const cp = xp._Configurations[pp];
        return !!cp?._defines && (ip.push(cp._defines), !0)
      }
      static _BindAttachmentsForEffect(pp, ip) {
        const cp = xp._Configurations[pp.currentRenderPassId];
        return !cp?._attachments || (pp.bindAttachments(ip._multiTarget ? cp._attachments : cp._colorAttachments), ip._multiTarget || void 0 !== cp.defines.PREPASS_COLOR_INDEX)
      }
      static _RestoreAttachments(pp) {
        const ip = xp._Configurations[pp.currentRenderPassId];
        ip?._colorAttachments && pp.bindAttachments(ip._colorAttachments)
      }
      static _BindColorAttachments(pp) {
        const ip = xp._Configurations[pp.currentRenderPassId];
        return !ip?._colorAttachments || (pp.bindAttachments(ip._colorAttachments), void 0 !== ip.defines.PREPASS_COLOR_INDEX)
      }
      static _IsColorAttachmentEnabled(pp) {
        const ip = xp._Configurations[pp.currentRenderPassId];
        return !ip?._colorAttachments || void 0 !== ip.defines.PREPASS_COLOR_INDEX
      }
      static _BindZeroAlphaDiscard(pp, ip) {
        const cp = xp._Configurations[pp.currentRenderPassId];
        if (!cp) return;
        const Op = pp.getAlphaMode(),
          op = void 0 === cp.defines.PREPASS_COLOR_INDEX || 2 === Op || 1 === Op || 17 === Op;
        ip.setFloat("geometryZeroAlphaDiscard", op ? 1 : 0)
      }
      static AddUniformsAndSamplers(pp, ip) {
        pp.push("previousWorld", "previousViewProjection", "mPreviousBones", "objectId", "meshBlendTag")
      }
      static MarkAsDirty(pp, ip) {
        for (const cp of ip)
          if (cp.Am)
            for (const ip of cp.Am) ip._removeDrawWrapper(pp)
      }
      static PrepareDefines(pp, ip, cp) {
        if (!cp._arePrePassDirty) return;
        const Op = xp._Configurations[pp];
        if (!Op) return;
        cp.PREPASS = !0;
        let op = 0;
        for (let Ip = 0; Ip < xp.GeometryTextureDescriptions.length; Ip++) {
          const pp = xp.GeometryTextureDescriptions[Ip],
            ip = pp.define,
            Sp = pp.defineIndex,
            Lp = Op.defines[Sp];
          void 0 !== Lp ? (cp[ip] = !0, cp[Sp] = Lp, op++) : (cp[ip] = !1, delete cp[Sp])
        }
        cp.PREPASS_OBJECT_ID_R8 = Op.objectIdIsRedFormat, cp.SCENE_MRT_COUNT = Op._mrtCount ?? op, cp.BONES_VELOCITY_ENABLED = ip.useBones && ip.computeBonesUsingShaders && ip.skeleton && !ip.skeleton.isUsingTextureForMatrices && -1 === Op.excludedSkinnedMesh.indexOf(ip)
      }
      static Bind(pp, ip, cp, Op, op) {
        const Lp = xp._Configurations[pp];
        if (!Lp) return;
        const Yp = cp.Gl(),
          Dp = Yp.gy();
        if (Lp.reverseCulling && Dp.setStateCullFaceType(Yp._mirroredCameraPosition ? op.cullBackFaces : !op.cullBackFaces), void 0 !== Lp.defines.PREPASS_OBJECT_ID_INDEX) {
          const pp = Lp.objectIdIsRedFormat ? 255 : 16777215;
          let Op = cp.uniqueId;
          if (Lp.objectIdProvider) Op = Ip(cp, Lp.objectIdProvider, pp);
          else if (Op > pp) throw new Error(`Invalid geometry object ID ${Op} for mesh "${cp.name}". Object IDs must be integers between 0 and 0x${pp.toString(16).toUpperCase()}.`);
          ip.setFloat("objectId", Op)
        }
        if (void 0 !== Lp.defines.PREPASS_MESH_BLEND_TAG_INDEX) {
          const pp = Lp.meshBlendTagProvider ? Sp(cp, Lp.meshBlendTagProvider) : cp.meshBlendingTag;
          ip.setInt("meshBlendTag", pp)
        }
        if (void 0 !== Lp.defines.PREPASS_VELOCITY_INDEX || void 0 !== Lp.defines.PREPASS_VELOCITY_LINEAR_INDEX) {
          const pp = Lp._currentWorldMatrices ?? (Lp._currentWorldMatrices = {}),
            op = Lp._worldMatrixFrameIds ?? (Lp._worldMatrixFrameIds = {});
          if (pp[cp.uniqueId] || (pp[cp.uniqueId] = Op.clone(), Lp.previousWorldMatrices[cp.uniqueId] = Op.clone()), op[cp.uniqueId] !== Dp.frameId && (Lp.previousWorldMatrices[cp.uniqueId].rM(pp[cp.uniqueId]), op[cp.uniqueId] = Dp.frameId), pp[cp.uniqueId].rM(Op), -1 === Lp.lastUpdateFrameId ? (Lp.lastUpdateFrameId = Dp.frameId, Lp.previousViewProjection.rM(Yp.getTransformMatrix()), Lp.currentViewProjection.rM(Yp.getTransformMatrix())) : Lp.currentViewProjection.updateFlag !== Yp.getTransformMatrix().updateFlag ? (Lp.lastUpdateFrameId = Dp.frameId, Lp.previousViewProjection.rM(Lp.currentViewProjection), Lp.currentViewProjection.rM(Yp.getTransformMatrix())) : Lp.lastUpdateFrameId !== Dp.frameId && (Lp.lastUpdateFrameId = Dp.frameId, Lp.previousViewProjection.rM(Lp.currentViewProjection)), ip.setMatrix("previousWorld", Lp.previousWorldMatrices[cp.uniqueId]), ip.setMatrix("previousViewProjection", Lp.previousViewProjection), cp.useBones && cp.computeBonesUsingShaders && cp.skeleton) {
            const pp = cp.skeleton;
            if (!pp.isUsingTextureForMatrices || -1 === ip.getUniformIndex("boneTextureInfo")) {
              const Op = pp.getTransformMatrices(cp);
              Op && (Lp.previousBones[cp.uniqueId] || (Lp.previousBones[cp.uniqueId] = Op.slice()), ip.setMatrices("mPreviousBones", Lp.previousBones[cp.uniqueId]), Lp.previousBones[cp.uniqueId].set(Op))
            }
          }
        }
      }
    }
    xp.GeometryTextureDescriptions = [{
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
    }], xp._Configurations = {}
  },
  40538: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Pp,
      e: () => yp
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(40103),
      Sp = cp(40062);
    const xp = new RegExp("^([gimus]+)!");
    class Lp {
      constructor(pp) {
        this._plugins = [], this._activePlugins = [], this._activePluginsForExtraEvents = [], this._material = pp, this._scene = pp.Gl(), this._engine = this._scene.gy()
      }
      _addPlugin(pp) {
        for (let Op = 0; Op < this._plugins.length; ++Op)
          if (this._plugins[Op].name === pp.name) return !1;
        if (this._material._uniformBufferLayoutBuilt && (this._material.resetDrawCache(), this._material._createUniformBuffer()), !pp.isCompatible(this._material.shaderLanguage)) throw `The plugin "${pp.name}" can't be added to the material "${this._material.name}" because the plugin is not compatible with the shader language of the material.`;
        const ip = pp.getClassName();
        Lp._MaterialPluginClassToMainDefine[ip] || (Lp._MaterialPluginClassToMainDefine[ip] = "MATERIALPLUGIN_" + ++Lp._MaterialPluginCounter), this._material._callbackPluginEventGeneric = (pp, ip) => this._handlePluginEvent(pp, ip), this._plugins.push(pp), this._plugins.sort(((pp, ip) => pp.priority - ip.priority)), this._codeInjectionPoints = {};
        const cp = {};
        cp[Lp._MaterialPluginClassToMainDefine[ip]] = {
          type: "boolean",
          default: !0
        };
        for (const Op of this._plugins) Op.collectDefines(cp), this._collectPointNames("vertex", Op.getCustomCode("vertex", this._material.shaderLanguage)), this._collectPointNames("fragment", Op.getCustomCode("fragment", this._material.shaderLanguage));
        return this._defineNamesFromPlugins = cp, !0
      }
      _activatePlugin(pp) {
        -1 === this._activePlugins.indexOf(pp) && (this._activePlugins.push(pp), this._activePlugins.sort(((pp, ip) => pp.priority - ip.priority)), this._material._callbackPluginEventIsReadyForSubMesh = this._handlePluginEventIsReadyForSubMesh.bind(this), this._material._callbackPluginEventPrepareDefinesBeforeAttributes = this._handlePluginEventPrepareDefinesBeforeAttributes.bind(this), this._material._callbackPluginEventPrepareDefines = this._handlePluginEventPrepareDefines.bind(this), this._material._callbackPluginEventBindForSubMesh = this._handlePluginEventBindForSubMesh.bind(this), pp.registerForExtraEvents && (this._activePluginsForExtraEvents.push(pp), this._activePluginsForExtraEvents.sort(((pp, ip) => pp.priority - ip.priority)), this._material._callbackPluginEventHasRenderTargetTextures = this._handlePluginEventHasRenderTargetTextures.bind(this), this._material._callbackPluginEventFillRenderTargetTextures = this._handlePluginEventFillRenderTargetTextures.bind(this), this._material._callbackPluginEventHardBindForSubMesh = this._handlePluginEventHardBindForSubMesh.bind(this)))
      }
      getPlugin(pp) {
        for (let ip = 0; ip < this._plugins.length; ++ip)
          if (this._plugins[ip].name === pp) return this._plugins[ip];
        return null
      }
      _handlePluginEventIsReadyForSubMesh(pp) {
        let ip = !0;
        for (const cp of this._activePlugins) ip = ip && cp.isReadyForSubMesh(pp.defines, this._scene, this._engine, pp.subMesh);
        pp.isReadyForSubMesh = ip
      }
      _handlePluginEventPrepareDefinesBeforeAttributes(pp) {
        for (const ip of this._activePlugins) ip.prepareDefinesBeforeAttributes(pp.defines, this._scene, pp.mesh)
      }
      _handlePluginEventPrepareDefines(pp) {
        for (const ip of this._activePlugins) ip.prepareDefines(pp.defines, this._scene, pp.mesh)
      }
      _handlePluginEventHardBindForSubMesh(pp) {
        for (const ip of this._activePluginsForExtraEvents) ip.hardBindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, pp.subMesh)
      }
      _handlePluginEventBindForSubMesh(pp) {
        for (const ip of this._activePlugins) ip.bindForSubMesh(this._material._uniformBuffer, this._scene, this._engine, pp.subMesh)
      }
      _handlePluginEventHasRenderTargetTextures(pp) {
        let ip = !1;
        for (const cp of this._activePluginsForExtraEvents)
          if (ip = cp.hasRenderTargetTextures(), ip) break;
        pp.hasRenderTargetTextures = ip
      }
      _handlePluginEventFillRenderTargetTextures(pp) {
        for (const ip of this._activePluginsForExtraEvents) ip.fillRenderTargetTextures(pp.renderTargets)
      }
      _handlePluginEvent(pp, ip) {
        switch (pp) {
          case 512: {
            const pp = ip;
            for (const ip of this._activePlugins) ip.getActiveTextures(pp.activeTextures);
            break
          }
          case 256: {
            const pp = ip;
            for (const ip of this._activePlugins) ip.getAnimatables(pp.animatables);
            break
          }
          case 1024: {
            const pp = ip;
            let cp = !1;
            for (const ip of this._activePlugins)
              if (cp = ip.hasTexture(pp.texture), cp) break;
            pp.hasTexture = cp;
            break
          }
          case 2: {
            const pp = ip;
            for (const ip of this._plugins) ip.dispose(pp.forceDisposeTextures);
            break
          }
          case 4:
            ip.defineNames = this._defineNamesFromPlugins;
            break;
          case 128: {
            const pp = ip;
            for (const ip of this._activePlugins) pp.fallbackRank = ip.addFallbacks(pp.defines, pp.fallbacks, pp.fallbackRank), ip.getAttributes(pp.attributes, this._scene, pp.mesh);
            this._uniformList.length > 0 && pp.uniforms.push(...this._uniformList), this._samplerList.length > 0 && pp.samplers.push(...this._samplerList), this._uboList.length > 0 && pp.uniformBuffersNames.push(...this._uboList), pp.customCode = this._injectCustomCode(pp, pp.customCode);
            break
          }
          case 8: {
            const pp = ip;
            this._uboDeclaration = "", this._vertexDeclaration = "", this._fragmentDeclaration = "", this._uniformList = [], this._samplerList = [], this._uboList = [];
            const cp = 1 === this._material.shaderLanguage;
            for (const ip of this._plugins) {
              const Op = ip.getUniforms(this._material.shaderLanguage);
              if (Op) {
                if (Op.ubo)
                  for (const ip of Op.ubo) {
                    if (ip.size && ip.type) {
                      const Op = ip.arraySize ?? 0;
                      if (pp.ubo.addUniform(ip.name, ip.size, Op), cp) {
                        let pp;
                        switch (ip.type) {
                          case "mat4":
                            pp = "mat4x4f";
                            break;
                          case "float":
                            pp = "f32";
                            break;
                          default:
                            pp = `${ip.type}f`
                        }
                        this._uboDeclaration += Op > 0 ? `uniform ${ip.name}: array<${pp}, ${Op}>;\n` : `uniform ${ip.name}: ${pp};\n`
                      } else this._uboDeclaration += `${ip.type} ${ip.name}${Op>0?`[${Op}]`:""};\n`
                    }
                    this._uniformList.push(ip.name)
                  }
                Op.vertex && (this._vertexDeclaration += Op.vertex + "\n"), Op.fragment && (this._fragmentDeclaration += Op.fragment + "\n"), Op.externalUniforms && this._uniformList.push(...Op.externalUniforms)
              }
              ip.getSamplers(this._samplerList), ip.getUniformBuffersNames(this._uboList)
            }
            break
          }
        }
      }
      _collectPointNames(pp, ip) {
        if (ip)
          for (const cp in ip) this._codeInjectionPoints[pp] || (this._codeInjectionPoints[pp] = {}), this._codeInjectionPoints[pp][cp] = !0
      }
      _injectCustomCode(pp, ip) {
        return (cp, Op) => {
          ip && (Op = ip(cp, Op)), this._uboDeclaration && (Op = Op.replace("#define ADDITIONAL_UBO_DECLARATION", this._uboDeclaration)), this._vertexDeclaration && (Op = Op.replace("#define ADDITIONAL_VERTEX_DECLARATION", this._vertexDeclaration)), this._fragmentDeclaration && (Op = Op.replace("#define ADDITIONAL_FRAGMENT_DECLARATION", this._fragmentDeclaration));
          const op = this._codeInjectionPoints?.[cp];
          if (!op) return Op;
          let Lp = null;
          for (let ip in op) {
            let op = "";
            for (const Op of this._activePlugins) {
              const xp = this._material.shaderLanguage;
              let Yp = Op.getCustomCode(cp, xp)?.[ip];
              Yp && (Op.resolveIncludes && (null === Lp && (Lp = {
                defines: [],
                indexParameters: pp.indexParameters,
                isFragment: !1,
                shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
                processor: void 0,
                supportsUniformBuffers: this._engine.supportsUniformBuffers,
                shadersRepository: Sp.b.GetShadersRepository(xp),
                includesShadersStore: Sp.b.GetIncludesShadersStore(xp),
                version: void 0,
                platformName: this._engine.shaderPlatformName,
                processingContext: void 0,
                isNDCHalfZRange: this._engine.isNDCHalfZRange,
                lOp: this._engine.lOp,
                processCodeAfterIncludes: void 0
              }), Lp.isFragment = "fragment" === cp, (0, Ip.g)(Yp, Lp, (pp => Yp = pp))), op += Yp + "\n")
            }
            if (op.length > 0)
              if ("!" === ip.charAt(0)) {
                ip = ip.substring(1);
                let pp = "g";
                if ("!" === ip.charAt(0)) pp = "", ip = ip.substring(1);
                else {
                  const cp = xp.exec(ip);
                  cp && cp.length >= 2 && (pp = cp[1], ip = ip.substring(pp.length + 1))
                }
                pp.indexOf("g") < 0 && (pp += "g");
                const cp = new RegExp(ip, pp);
                let Ip = cp.exec(Op);
                for (; null !== Ip;) {
                  const {
                    index: pp
                  } = Ip, ip = Yp(op, Ip);
                  Op = Op.substring(0, pp) + ip + Op.substring(pp + Ip[0].length), cp.lastIndex = pp + ip.length, Ip = cp.exec(Op)
                }
              } else {
                const pp = "#define " + ip;
                Op = Op.replace(pp, "\n" + op + "\n" + pp)
              }
          }
          return Op
        }
      }
    }
    Lp._MaterialPluginClassToMainDefine = {}, Lp._MaterialPluginCounter = 0;

    function Yp(pp, ip) {
      return pp.replace(/\$(\d+)/g, ((pp, cp) => {
        const Op = Number(cp);
        return Op < ip.length ? ip[Op] : ""
      }))
    }
    var Dp = cp(40233),
      Ap = cp(37368);
    let Pp = (() => {
        var pp;
        let ip, cp, Ip, Sp, xp = [],
          Yp = [],
          Ap = [],
          Pp = [],
          Wp = [],
          yp = [],
          Up = [],
          wp = [];
        return pp = class {
          isCompatible(pp) {
            return 0 === pp
          }
          _enable(pp) {
            pp && this._pluginManager._activatePlugin(this)
          }
          constructor(pp, ip, cp, op) {
            let Ip = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
              Sp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              Dp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            this.name = (0, Op.l)(this, xp, void 0), this.priority = ((0, Op.l)(this, Yp), (0, Op.l)(this, Ap, 500)), this.resolveIncludes = ((0, Op.l)(this, Pp), (0, Op.l)(this, Wp, !1)), this.registerForExtraEvents = ((0, Op.l)(this, yp), (0, Op.l)(this, Up, !1)), this.doNotSerialize = ((0, Op.l)(this, wp), !1), this._material = pp, this.name = ip, this.priority = cp, this.resolveIncludes = Dp, pp.pluginManager || (pp.pluginManager = new Lp(pp), pp.Kl.add((() => {
              pp.pluginManager = void 0
            }))), this._pluginDefineNames = op, this._pluginManager = pp.pluginManager, Ip && this._pluginManager._addPlugin(this), Sp && this._enable(!0), this.markAllDefinesAsDirty = pp._dirtyCallbacks[127]
          }
          getClassName() {
            return "MaterialPluginBase"
          }
          isReadyForSubMesh(pp, ip, cp, Op) {
            return !0
          }
          hardBindForSubMesh(pp, ip, cp, Op) {}
          bindForSubMesh(pp, ip, cp, Op) {}
          dispose(pp) {}
          getCustomCode(pp) {
            return null
          }
          collectDefines(pp) {
            if (this._pluginDefineNames)
              for (const ip of Object.keys(this._pluginDefineNames)) {
                if ("_" === ip[0]) continue;
                const cp = typeof this._pluginDefineNames[ip];
                pp[ip] = {
                  type: "number" === cp ? "number" : "string" === cp ? "string" : "boolean" === cp ? "boolean" : "object",
                  default: this._pluginDefineNames[ip]
                }
              }
          }
          prepareDefinesBeforeAttributes(pp, ip, cp) {}
          prepareDefines(pp, ip, cp) {}
          hasTexture(pp) {
            return !1
          }
          hasRenderTargetTextures() {
            return !1
          }
          fillRenderTargetTextures(pp) {}
          getActiveTextures(pp) {}
          getAnimatables(pp) {}
          addFallbacks(pp, ip, cp) {
            return cp
          }
          getSamplers(pp) {}
          getAttributes(pp, ip, cp) {}
          getUniformBuffersNames(pp) {}
          getUniforms() {
            return {}
          }
          copyTo(pp) {
            Dp.c.Clone((() => pp), this)
          }
          serialize() {
            return Dp.c.Serialize(this)
          }
          parse(pp, ip, cp) {
            Dp.c.Parse((() => this), pp, ip, cp)
          }
        }, (() => {
          const Lp = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          ip = [(0, op.K)()], cp = [(0, op.K)()], Ip = [(0, op.K)()], Sp = [(0, op.K)()], (0, Op.j)(null, null, ip, {
            kind: "field",
            name: "name",
            static: !1,
            private: !1,
            access: {
              has: pp => "name" in pp,
              get: pp => pp.name,
              set: (pp, ip) => {
                pp.name = ip
              }
            },
            metadata: Lp
          }, xp, Yp), (0, Op.j)(null, null, cp, {
            kind: "field",
            name: "priority",
            static: !1,
            private: !1,
            access: {
              has: pp => "priority" in pp,
              get: pp => pp.priority,
              set: (pp, ip) => {
                pp.priority = ip
              }
            },
            metadata: Lp
          }, Ap, Pp), (0, Op.j)(null, null, Ip, {
            kind: "field",
            name: "resolveIncludes",
            static: !1,
            private: !1,
            access: {
              has: pp => "resolveIncludes" in pp,
              get: pp => pp.resolveIncludes,
              set: (pp, ip) => {
                pp.resolveIncludes = ip
              }
            },
            metadata: Lp
          }, Wp, yp), (0, Op.j)(null, null, Sp, {
            kind: "field",
            name: "registerForExtraEvents",
            static: !1,
            private: !1,
            access: {
              has: pp => "registerForExtraEvents" in pp,
              get: pp => pp.registerForExtraEvents,
              set: (pp, ip) => {
                pp.registerForExtraEvents = ip
              }
            },
            metadata: Lp
          }, Up, wp), Lp && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Lp
          })
        })(), pp
      })(),
      Wp = !1;

    function yp() {
      Wp || (Wp = !0, (0, Ap.g)("BABYLON.MaterialPluginBase", Pp))
    }
  },
  40465: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    class Op {
      constructor() {
        this.previousWorldMatrices = {}, this.previousBones = {}
      }
      static AddUniforms(pp) {
        pp.push("previousWorld", "previousViewProjection", "mPreviousBones")
      }
      static AddSamplers(pp) {}
      bindForSubMesh(pp, ip, cp, Op, op) {
        if (ip.prePassRenderer && ip.prePassRenderer.enabled && ip.prePassRenderer.currentRTisSceneRT && (-1 !== ip.prePassRenderer.getIndex(2) || -1 !== ip.prePassRenderer.getIndex(11))) {
          this.previousWorldMatrices[cp.uniqueId] || (this.previousWorldMatrices[cp.uniqueId] = Op.clone()), this.previousViewProjection || (this.previousViewProjection = ip.getTransformMatrix().clone(), this.currentViewProjection = ip.getTransformMatrix().clone());
          const op = ip.gy();
          this.currentViewProjection.updateFlag !== ip.getTransformMatrix().updateFlag ? (this._lastUpdateFrameId = op.frameId, this.previousViewProjection.rM(this.currentViewProjection), this.currentViewProjection.rM(ip.getTransformMatrix())) : this._lastUpdateFrameId !== op.frameId && (this._lastUpdateFrameId = op.frameId, this.previousViewProjection.rM(this.currentViewProjection)), pp.setMatrix("previousWorld", this.previousWorldMatrices[cp.uniqueId]), pp.setMatrix("previousViewProjection", this.previousViewProjection), this.previousWorldMatrices[cp.uniqueId] = Op.clone()
        }
      }
    }
  },
  40556: (pp, ip, cp) => {
    function Op(pp) {
      return class extends pp {
        constructor() {
          super(...arguments), this.PREPASS = !1, this.PREPASS_COLOR = !1, this.PREPASS_COLOR_INDEX = -1, this.PREPASS_IRRADIANCE_LEGACY = !1, this.PREPASS_IRRADIANCE_LEGACY_INDEX = -1, this.PREPASS_IRRADIANCE = !1, this.PREPASS_IRRADIANCE_INDEX = -1, this.PREPASS_ALBEDO = !1, this.PREPASS_ALBEDO_INDEX = -1, this.PREPASS_ALBEDO_SQRT = !1, this.PREPASS_ALBEDO_SQRT_INDEX = -1, this.PREPASS_DEPTH = !1, this.PREPASS_DEPTH_INDEX = -1, this.PREPASS_SCREENSPACE_DEPTH = !1, this.PREPASS_SCREENSPACE_DEPTH_INDEX = -1, this.PREPASS_NORMALIZED_VIEW_DEPTH = !1, this.PREPASS_NORMALIZED_VIEW_DEPTH_INDEX = -1, this.PREPASS_NORMAL = !1, this.PREPASS_NORMAL_INDEX = -1, this.PREPASS_NORMAL_WORLDSPACE = !1, this.PREPASS_WORLD_NORMAL = !1, this.PREPASS_WORLD_NORMAL_INDEX = -1, this.PREPASS_POSITION = !1, this.PREPASS_POSITION_INDEX = -1, this.PREPASS_LOCAL_POSITION = !1, this.PREPASS_LOCAL_POSITION_INDEX = -1, this.PREPASS_VELOCITY = !1, this.PREPASS_VELOCITY_INDEX = -1, this.PREPASS_VELOCITY_LINEAR = !1, this.PREPASS_VELOCITY_LINEAR_INDEX = -1, this.PREPASS_REFLECTIVITY = !1, this.PREPASS_REFLECTIVITY_INDEX = -1, this.PREPASS_OBJECT_ID = !1, this.PREPASS_OBJECT_ID_INDEX = -1, this.PREPASS_OBJECT_ID_R8 = !1, this.PREPASS_MESH_BLEND_TAG = !1, this.PREPASS_MESH_BLEND_TAG_INDEX = -1, this.SCENE_MRT_COUNT = 0
        }
      }
    }
    cp.d(ip, {
      c: () => Op
    })
  },
  40459: (pp, ip, cp) => {
    cp.d(ip, {
      StandardMaterial: () => Op.f
    });
    var Op = cp(40463);
    (0, Op.e)()
  },
  40463: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Np,
      f: () => Jp
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(40314),
      Sp = cp(40296),
      xp = cp(37487),
      Lp = cp(40342),
      Yp = cp(40465),
      Dp = cp(40467),
      Ap = cp(40318),
      Pp = cp(40476),
      Wp = cp(40472),
      yp = cp(40523),
      Up = cp(40519),
      wp = cp(40530),
      vp = cp(40533),
      tp = cp(40516),
      Hp = cp(40544),
      dp = cp(40512),
      ep = cp(40233),
      jp = cp(40546),
      kp = cp(40550),
      mp = cp(40554),
      Rp = cp(40556),
      qp = cp(40562),
      Mp = cp(37368),
      Cp = cp(40096);
    const Ep = {
      effect: null,
      subMesh: null
    };
    class Xp extends((0, Rp.c)((0, mp.c)(Wp.c))) {}
    class lp extends((0, Dp.h)(Xp)) {
      constructor(pp) {
        super(pp), this.DIFFUSE = !1, this.DIFFUSEDIRECTUV = 0, this.BAKED_VERTEX_ANIMATION_TEXTURE = !1, this.AMBIENT = !1, this.AMBIENTDIRECTUV = 0, this.OPACITY = !1, this.OPACITYDIRECTUV = 0, this.OPACITYRGB = !1, this.REFLECTION = !1, this.EMISSIVE = !1, this.EMISSIVEDIRECTUV = 0, this.SPECULAR = !1, this.SPECULARDIRECTUV = 0, this.BUMP = !1, this.BUMPDIRECTUV = 0, this.PARALLAX = !1, this.PARALLAX_RHS = !1, this.PARALLAXOCCLUSION = !1, this.SPECULAROVERALPHA = !1, this.CLIPPLANE = !1, this.CLIPPLANE2 = !1, this.CLIPPLANE3 = !1, this.CLIPPLANE4 = !1, this.CLIPPLANE5 = !1, this.CLIPPLANE6 = !1, this.ALPHATEST = !1, this.DEPTHPREPASS = !1, this.ALPHAFROMDIFFUSE = !1, this.POINTSIZE = !1, this.FOG = !1, this.SPECULARTERM = !1, this.DIFFUSEFRESNEL = !1, this.OPACITYFRESNEL = !1, this.REFLECTIONFRESNEL = !1, this.REFRACTIONFRESNEL = !1, this.EMISSIVEFRESNEL = !1, this.FRESNEL = !1, this.NORMAL = !1, this.TANGENT = !1, this.VERTEXCOLOR = !1, this.VERTEXALPHA = !1, this.NUM_BONE_INFLUENCERS = 0, this.BonesPerMesh = 0, this.BONETEXTURE = !1, this.BONES_VELOCITY_ENABLED = !1, this.INSTANCES = !1, this.THIN_INSTANCES = !1, this.INSTANCESCOLOR = !1, this.GLOSSINESS = !1, this.ROUGHNESS = !1, this.EMISSIVEASILLUMINATION = !1, this.LINKEMISSIVEWITHDIFFUSE = !1, this.REFLECTIONFRESNELFROMSPECULAR = !1, this.LIGHTMAP = !1, this.LIGHTMAPDIRECTUV = 0, this.OBJECTSPACE_NORMALMAP = !1, this.USELIGHTMAPASSHADOWMAP = !1, this.REFLECTIONMAP_3D = !1, this.REFLECTIONMAP_SPHERICAL = !1, this.REFLECTIONMAP_PLANAR = !1, this.REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFLECTIONMAP_CUBIC = !1, this.USE_LOCAL_REFRACTIONMAP_CUBIC = !1, this.REFLECTIONMAP_PROJECTION = !1, this.REFLECTIONMAP_SKYBOX = !1, this.REFLECTIONMAP_EXPLICIT = !1, this.REFLECTIONMAP_EQUIRECTANGULAR = !1, this.REFLECTIONMAP_EQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_MIRROREDEQUIRECTANGULAR_FIXED = !1, this.REFLECTIONMAP_OPPOSITEZ = !1, this.INVERTCUBICMAP = !1, this.LOGARITHMICDEPTH = !1, this.REFRACTION = !1, this.REFRACTIONMAP_3D = !1, this.REFLECTIONOVERALPHA = !1, this.TWOSIDEDLIGHTING = !1, this.SHADOWFLOAT = !1, this.MORPHTARGETS = !1, this.MORPHTARGETS_POSITION = !1, this.MORPHTARGETS_NORMAL = !1, this.MORPHTARGETS_TANGENT = !1, this.MORPHTARGETS_UV = !1, this.MORPHTARGETS_UV2 = !1, this.MORPHTARGETS_COLOR = !1, this.MORPHTARGETTEXTURE_HASPOSITIONS = !1, this.MORPHTARGETTEXTURE_HASNORMALS = !1, this.MORPHTARGETTEXTURE_HASTANGENTS = !1, this.MORPHTARGETTEXTURE_HASUVS = !1, this.MORPHTARGETTEXTURE_HASUV2S = !1, this.MORPHTARGETTEXTURE_HASCOLORS = !1, this.NUM_MORPH_INFLUENCERS = 0, this.MORPHTARGETS_TEXTURE = !1, this.NONUNIFORMSCALING = !1, this.PREMULTIPLYALPHA = !1, this.ALPHATEST_AFTERALLALPHACOMPUTATIONS = !1, this.ALPHABLEND = !0, this.RGBDLIGHTMAP = !1, this.RGBDREFLECTION = !1, this.RGBDREFRACTION = !1, this.MULTIVIEW = !1, this.ORDER_INDEPENDENT_TRANSPARENCY = !1, this.ORDER_INDEPENDENT_TRANSPARENCY_16BITS = !1, this.CAMERA_ORTHOGRAPHIC = !1, this.CAMERA_PERSPECTIVE = !1, this.AREALIGHTSUPPORTED = !0, this.USE_VERTEX_PULLING = !1, this.VERTEX_PULLING_USE_INDEX_BUFFER = !1, this.VERTEX_PULLING_INDEX_BUFFER_32BITS = !1, this.RIGHT_HANDED = !1, this.CLUSTLIGHT_SLICES = 0, this.CLUSTLIGHT_BATCH = 0, this.IS_REFLECTION_LINEAR = !1, this.IS_REFRACTION_LINEAR = !1, this.DECAL_AFTER_DETAIL = !1, this.TEXTURE_REPETITION_MODE = 0, this.rebuild()
      }
    }
    class Qp extends((0, qp.b)(yp.e)) {}
    let Jp = (() => {
        var pp, ip, Dp, Wp, mp, Rp, qp, Mp, Cp, Xp, Jp, Bp, Np, Tp, fp, bp, hp, ap, np, Fp, gp, Gp, rp, Zp, zp, sp, Kp, Vp, ii, ci, Oi, oi, Ii;
        let Si, xi, Li, Yi, Di, Ai, Pi, Wi, yi, Ui, wi, vi, ti, Hi, di, ei, ui, ji, ki, mi, Ri, qi, Mi, Ci, Ei, Xi, li, Qi, Ji, Bi, Ni, Ti, fi, bi, ai, ni, Fi, gi, Gi, ri, Zi, zi, si, Ki, Vi, pc, ic, cc, Oc, oc, Ic, Sc, xc, Lc, Yc, Dc, Ac, Pc, Wc, yc, Uc, wc, vc, tc, Hc, dc, ec, uc, jc, kc, mc, Rc, qc, Mc = Qp,
          Cc = [],
          Ec = [],
          Xc = [],
          lc = [],
          Qc = [],
          Jc = [],
          Bc = [],
          Nc = [],
          Tc = [],
          fc = [],
          bc = [],
          hc = [],
          ac = [],
          nc = [],
          Fc = [],
          gc = [],
          Gc = [],
          rc = [],
          Zc = [],
          zc = [],
          sc = [],
          Kc = [],
          Vc = [],
          pO = [],
          iO = [],
          cO = [],
          OO = [],
          oO = [],
          IO = [],
          SO = [],
          xO = [],
          LO = [],
          YO = [],
          DO = [],
          AO = [],
          PO = [],
          WO = [],
          yO = [],
          UO = [],
          wO = [],
          vO = [],
          tO = [],
          HO = [],
          dO = [],
          eO = [],
          uO = [],
          jO = [],
          kO = [],
          mO = [],
          RO = [],
          qO = [],
          MO = [],
          CO = [],
          EO = [],
          XO = [],
          lO = [],
          QO = [],
          JO = [],
          BO = [],
          NO = [],
          TO = [],
          fO = [],
          bO = [],
          hO = [],
          aO = [],
          nO = [],
          FO = [],
          gO = [],
          GO = [],
          rO = [],
          ZO = [],
          zO = [],
          sO = [],
          KO = [],
          VO = [],
          po = [],
          io = [],
          co = [],
          Oo = [],
          oo = [],
          Io = [],
          So = [],
          xo = [],
          Lo = [],
          Yo = [],
          Do = [],
          Ao = [],
          Po = [],
          Wo = [],
          yo = [],
          Uo = [],
          wo = [],
          vo = [],
          to = [],
          Ho = [],
          eo = [],
          uo = [],
          jo = [],
          ko = [],
          mo = [],
          Ro = [],
          qo = [],
          Mo = [],
          Co = [],
          Eo = [],
          Xo = [],
          Qo = [],
          Jo = [],
          Bo = [],
          No = [],
          To = [],
          fo = [],
          bo = [],
          ho = [],
          ao = [],
          no = [],
          Fo = [],
          go = [],
          Go = [],
          ro = [],
          Zo = [],
          zo = [],
          so = [],
          Ko = [],
          Vo = [],
          pI = [],
          iI = [],
          cI = [],
          OI = [],
          oI = [],
          II = [],
          SI = [],
          xI = [],
          LI = [],
          YI = [],
          DI = [],
          AI = [],
          PI = [],
          WI = [],
          yI = [],
          UI = [],
          wI = [],
          vI = [],
          tI = [],
          HI = [],
          dI = [];
        return pp = class extends Mc {
          get diffuseTexture() {
            return (0, Op.e)(this, ip, "f")
          }
          set diffuseTexture(pp) {
            (0, Op.f)(this, ip, pp, "f")
          }
          get ambientTexture() {
            return (0, Op.e)(this, Dp, "f")
          }
          set ambientTexture(pp) {
            (0, Op.f)(this, Dp, pp, "f")
          }
          get opacityTexture() {
            return (0, Op.e)(this, Wp, "f")
          }
          set opacityTexture(pp) {
            (0, Op.f)(this, Wp, pp, "f")
          }
          get reflectionTexture() {
            return (0, Op.e)(this, mp, "f")
          }
          set reflectionTexture(pp) {
            (0, Op.f)(this, mp, pp, "f")
          }
          get emissiveTexture() {
            return (0, Op.e)(this, Rp, "f")
          }
          set emissiveTexture(pp) {
            (0, Op.f)(this, Rp, pp, "f")
          }
          get specularTexture() {
            return (0, Op.e)(this, qp, "f")
          }
          set specularTexture(pp) {
            (0, Op.f)(this, qp, pp, "f")
          }
          get bumpTexture() {
            return (0, Op.e)(this, Mp, "f")
          }
          set bumpTexture(pp) {
            (0, Op.f)(this, Mp, pp, "f")
          }
          get lightmapTexture() {
            return (0, Op.e)(this, Cp, "f")
          }
          set lightmapTexture(pp) {
            (0, Op.f)(this, Cp, pp, "f")
          }
          get refractionTexture() {
            return (0, Op.e)(this, Xp, "f")
          }
          set refractionTexture(pp) {
            (0, Op.f)(this, Xp, pp, "f")
          }
          get useAlphaFromDiffuseTexture() {
            return (0, Op.e)(this, Jp, "f")
          }
          set useAlphaFromDiffuseTexture(pp) {
            (0, Op.f)(this, Jp, pp, "f")
          }
          get useEmissiveAsIllumination() {
            return (0, Op.e)(this, Bp, "f")
          }
          set useEmissiveAsIllumination(pp) {
            (0, Op.f)(this, Bp, pp, "f")
          }
          get linkEmissiveWithDiffuse() {
            return (0, Op.e)(this, Np, "f")
          }
          set linkEmissiveWithDiffuse(pp) {
            (0, Op.f)(this, Np, pp, "f")
          }
          get useSpecularOverAlpha() {
            return (0, Op.e)(this, Tp, "f")
          }
          set useSpecularOverAlpha(pp) {
            (0, Op.f)(this, Tp, pp, "f")
          }
          get useReflectionOverAlpha() {
            return (0, Op.e)(this, fp, "f")
          }
          set useReflectionOverAlpha(pp) {
            (0, Op.f)(this, fp, pp, "f")
          }
          get disableLighting() {
            return (0, Op.e)(this, bp, "f")
          }
          set disableLighting(pp) {
            (0, Op.f)(this, bp, pp, "f")
          }
          get useObjectSpaceNormalMap() {
            return (0, Op.e)(this, hp, "f")
          }
          set useObjectSpaceNormalMap(pp) {
            (0, Op.f)(this, hp, pp, "f")
          }
          get useParallax() {
            return (0, Op.e)(this, ap, "f")
          }
          set useParallax(pp) {
            (0, Op.f)(this, ap, pp, "f")
          }
          get useParallaxOcclusion() {
            return (0, Op.e)(this, np, "f")
          }
          set useParallaxOcclusion(pp) {
            (0, Op.f)(this, np, pp, "f")
          }
          get roughness() {
            return (0, Op.e)(this, Fp, "f")
          }
          set roughness(pp) {
            (0, Op.f)(this, Fp, pp, "f")
          }
          get useLightmapAsShadowmap() {
            return (0, Op.e)(this, gp, "f")
          }
          set useLightmapAsShadowmap(pp) {
            (0, Op.f)(this, gp, pp, "f")
          }
          get diffuseFresnelParameters() {
            return (0, Op.e)(this, Gp, "f")
          }
          set diffuseFresnelParameters(pp) {
            (0, Op.f)(this, Gp, pp, "f")
          }
          get opacityFresnelParameters() {
            return (0, Op.e)(this, rp, "f")
          }
          set opacityFresnelParameters(pp) {
            (0, Op.f)(this, rp, pp, "f")
          }
          get reflectionFresnelParameters() {
            return (0, Op.e)(this, Zp, "f")
          }
          set reflectionFresnelParameters(pp) {
            (0, Op.f)(this, Zp, pp, "f")
          }
          get refractionFresnelParameters() {
            return (0, Op.e)(this, zp, "f")
          }
          set refractionFresnelParameters(pp) {
            (0, Op.f)(this, zp, pp, "f")
          }
          get emissiveFresnelParameters() {
            return (0, Op.e)(this, sp, "f")
          }
          set emissiveFresnelParameters(pp) {
            (0, Op.f)(this, sp, pp, "f")
          }
          get useReflectionFresnelFromSpecular() {
            return (0, Op.e)(this, Kp, "f")
          }
          set useReflectionFresnelFromSpecular(pp) {
            (0, Op.f)(this, Kp, pp, "f")
          }
          get useGlossinessFromSpecularMapAlpha() {
            return (0, Op.e)(this, Vp, "f")
          }
          set useGlossinessFromSpecularMapAlpha(pp) {
            (0, Op.f)(this, Vp, pp, "f")
          }
          get maxSimultaneousLights() {
            return (0, Op.e)(this, ii, "f")
          }
          set maxSimultaneousLights(pp) {
            (0, Op.f)(this, ii, pp, "f")
          }
          get invertNormalMapX() {
            return (0, Op.e)(this, ci, "f")
          }
          set invertNormalMapX(pp) {
            (0, Op.f)(this, ci, pp, "f")
          }
          get invertNormalMapY() {
            return (0, Op.e)(this, Oi, "f")
          }
          set invertNormalMapY(pp) {
            (0, Op.f)(this, Oi, pp, "f")
          }
          get twoSidedLighting() {
            return (0, Op.e)(this, oi, "f")
          }
          set twoSidedLighting(pp) {
            (0, Op.f)(this, oi, pp, "f")
          }
          get applyDecalMapAfterDetailMap() {
            return (0, Op.e)(this, Ii, "f")
          }
          set applyDecalMapAfterDetailMap(pp) {
            (0, Op.f)(this, Ii, pp, "f")
          }
          get isPrePassCapable() {
            return !this.disableDepthWrite
          }
          get canRenderToMRT() {
            return !0
          }
          constructor(cp, op) {
            super(cp, op, void 0, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || pp.ForceGLSL), this._diffuseTexture = (0, Op.l)(this, Cc, null), ip.set(this, ((0, Op.l)(this, Ec), (0, Op.l)(this, Xc, void 0))), this._ambientTexture = ((0, Op.l)(this, lc), (0, Op.l)(this, Qc, null)), Dp.set(this, ((0, Op.l)(this, Jc), (0, Op.l)(this, Bc, void 0))), this._opacityTexture = ((0, Op.l)(this, Nc), (0, Op.l)(this, Tc, null)), Wp.set(this, ((0, Op.l)(this, fc), (0, Op.l)(this, bc, void 0))), this._reflectionTexture = ((0, Op.l)(this, hc), (0, Op.l)(this, ac, null)), mp.set(this, ((0, Op.l)(this, nc), (0, Op.l)(this, Fc, void 0))), this._emissiveTexture = ((0, Op.l)(this, gc), (0, Op.l)(this, Gc, null)), Rp.set(this, ((0, Op.l)(this, rc), (0, Op.l)(this, Zc, void 0))), this._specularTexture = ((0, Op.l)(this, zc), (0, Op.l)(this, sc, null)), qp.set(this, ((0, Op.l)(this, Kc), (0, Op.l)(this, Vc, void 0))), this._bumpTexture = ((0, Op.l)(this, pO), (0, Op.l)(this, iO, null)), Mp.set(this, ((0, Op.l)(this, cO), (0, Op.l)(this, OO, void 0))), this._lightmapTexture = ((0, Op.l)(this, oO), (0, Op.l)(this, IO, null)), Cp.set(this, ((0, Op.l)(this, SO), (0, Op.l)(this, xO, void 0))), this._refractionTexture = ((0, Op.l)(this, LO), (0, Op.l)(this, YO, null)), Xp.set(this, ((0, Op.l)(this, DO), (0, Op.l)(this, AO, void 0))), this.ambientColor = ((0, Op.l)(this, PO), (0, Op.l)(this, WO, new xp.d(0, 0, 0))), this.diffuseColor = ((0, Op.l)(this, yO), (0, Op.l)(this, UO, new xp.d(1, 1, 1))), this.specularColor = ((0, Op.l)(this, wO), (0, Op.l)(this, vO, new xp.d(1, 1, 1))), this.emissiveColor = ((0, Op.l)(this, tO), (0, Op.l)(this, HO, new xp.d(0, 0, 0))), this.specularPower = ((0, Op.l)(this, dO), (0, Op.l)(this, eO, 64)), this._useAlphaFromDiffuseTexture = ((0, Op.l)(this, uO), (0, Op.l)(this, jO, !1)), Jp.set(this, ((0, Op.l)(this, kO), (0, Op.l)(this, mO, void 0))), this._useEmissiveAsIllumination = ((0, Op.l)(this, RO), (0, Op.l)(this, qO, !1)), Bp.set(this, ((0, Op.l)(this, MO), (0, Op.l)(this, CO, void 0))), this._linkEmissiveWithDiffuse = ((0, Op.l)(this, EO), (0, Op.l)(this, XO, !1)), Np.set(this, ((0, Op.l)(this, lO), (0, Op.l)(this, QO, void 0))), this._useSpecularOverAlpha = ((0, Op.l)(this, JO), (0, Op.l)(this, BO, !1)), Tp.set(this, ((0, Op.l)(this, NO), (0, Op.l)(this, TO, void 0))), this._useReflectionOverAlpha = ((0, Op.l)(this, fO), (0, Op.l)(this, bO, !1)), fp.set(this, ((0, Op.l)(this, hO), (0, Op.l)(this, aO, void 0))), this._disableLighting = ((0, Op.l)(this, nO), (0, Op.l)(this, FO, !1)), bp.set(this, ((0, Op.l)(this, gO), (0, Op.l)(this, GO, void 0))), this._useObjectSpaceNormalMap = ((0, Op.l)(this, rO), (0, Op.l)(this, ZO, !1)), hp.set(this, ((0, Op.l)(this, zO), (0, Op.l)(this, sO, void 0))), this._useParallax = ((0, Op.l)(this, KO), (0, Op.l)(this, VO, !1)), ap.set(this, ((0, Op.l)(this, po), (0, Op.l)(this, io, void 0))), this._useParallaxOcclusion = ((0, Op.l)(this, co), (0, Op.l)(this, Oo, !1)), np.set(this, ((0, Op.l)(this, oo), (0, Op.l)(this, Io, void 0))), this.parallaxScaleBias = ((0, Op.l)(this, So), (0, Op.l)(this, xo, .05)), this._roughness = ((0, Op.l)(this, Lo), (0, Op.l)(this, Yo, 0)), Fp.set(this, ((0, Op.l)(this, Do), (0, Op.l)(this, Ao, void 0))), this.indexOfRefraction = ((0, Op.l)(this, Po), (0, Op.l)(this, Wo, .98)), this.invertRefractionY = ((0, Op.l)(this, yo), (0, Op.l)(this, Uo, !0)), this.alphaCutOff = ((0, Op.l)(this, wo), (0, Op.l)(this, vo, .4)), this._useLightmapAsShadowmap = ((0, Op.l)(this, to), (0, Op.l)(this, Ho, !1)), gp.set(this, ((0, Op.l)(this, eo), (0, Op.l)(this, uo, void 0))), this._diffuseFresnelParameters = ((0, Op.l)(this, jo), (0, Op.l)(this, ko, void 0)), Gp.set(this, ((0, Op.l)(this, mo), (0, Op.l)(this, Ro, void 0))), this._opacityFresnelParameters = ((0, Op.l)(this, qo), (0, Op.l)(this, Mo, void 0)), rp.set(this, ((0, Op.l)(this, Co), (0, Op.l)(this, Eo, void 0))), this._reflectionFresnelParameters = ((0, Op.l)(this, Xo), (0, Op.l)(this, Qo, void 0)), Zp.set(this, ((0, Op.l)(this, Jo), (0, Op.l)(this, Bo, void 0))), this._refractionFresnelParameters = ((0, Op.l)(this, No), (0, Op.l)(this, To, void 0)), zp.set(this, ((0, Op.l)(this, fo), (0, Op.l)(this, bo, void 0))), this._emissiveFresnelParameters = ((0, Op.l)(this, ho), (0, Op.l)(this, ao, void 0)), sp.set(this, ((0, Op.l)(this, no), (0, Op.l)(this, Fo, void 0))), this._useReflectionFresnelFromSpecular = ((0, Op.l)(this, go), (0, Op.l)(this, Go, !1)), Kp.set(this, ((0, Op.l)(this, ro), (0, Op.l)(this, Zo, void 0))), this._useGlossinessFromSpecularMapAlpha = ((0, Op.l)(this, zo), (0, Op.l)(this, so, !1)), Vp.set(this, ((0, Op.l)(this, Ko), (0, Op.l)(this, Vo, void 0))), this._maxSimultaneousLights = ((0, Op.l)(this, pI), (0, Op.l)(this, iI, 4)), ii.set(this, ((0, Op.l)(this, cI), (0, Op.l)(this, OI, void 0))), this._invertNormalMapX = ((0, Op.l)(this, oI), (0, Op.l)(this, II, !1)), ci.set(this, ((0, Op.l)(this, SI), (0, Op.l)(this, xI, void 0))), this._invertNormalMapY = ((0, Op.l)(this, LI), (0, Op.l)(this, YI, !1)), Oi.set(this, ((0, Op.l)(this, DI), (0, Op.l)(this, AI, void 0))), this._twoSidedLighting = ((0, Op.l)(this, PI), (0, Op.l)(this, WI, !1)), oi.set(this, ((0, Op.l)(this, yI), (0, Op.l)(this, UI, void 0))), this._applyDecalMapAfterDetailMap = ((0, Op.l)(this, wI), (0, Op.l)(this, vI, !1)), Ii.set(this, ((0, Op.l)(this, tI), (0, Op.l)(this, HI, void 0))), this._vertexPullingMetadata = ((0, Op.l)(this, dI), null), this._renderTargets = new Ip.g(16), this._globalAmbientColor = new xp.d(0, 0, 0), this._cacheHasRenderTargetTextures = !1, this.detailMap = new vp.c(this), this._attachImageProcessingConfiguration(null), this.prePassConfiguration = new Yp.c, this.getRenderTargetTextures = () => (this._renderTargets.reset(), pp.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget && this._renderTargets.push(this._reflectionTexture), pp.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget && this._renderTargets.push(this._refractionTexture), this._eventInfo.renderTargets = this._renderTargets, this._callbackPluginEventFillRenderTargetTextures(this._eventInfo), this._renderTargets)
          }
          get hasRenderTargetTextures() {
            return !!(pp.ReflectionTextureEnabled && this._reflectionTexture && this._reflectionTexture.isRenderTarget) || (!!(pp.RefractionTextureEnabled && this._refractionTexture && this._refractionTexture.isRenderTarget) || this._cacheHasRenderTargetTextures)
          }
          getClassName() {
            return "StandardMaterial"
          }
          needAlphaBlending() {
            return this._hasTransparencyMode ? this._transparencyModeIsBlend : !this._disableAlphaBlending && (this.alpha < 1 || null != this._opacityTexture || this._shouldUseAlphaFromDiffuseTexture() || this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled)
          }
          needAlphaTesting() {
            return this._hasTransparencyMode ? this._transparencyModeIsTest : this._hasAlphaChannel() && (null == this._transparencyMode || this._transparencyMode === Pp.b.MATERIAL_ALPHATEST)
          }
          _shouldUseAlphaFromDiffuseTexture() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha && this._useAlphaFromDiffuseTexture && this._transparencyMode !== Pp.b.MATERIAL_OPAQUE
          }
          _hasAlphaChannel() {
            return null != this._diffuseTexture && this._diffuseTexture.hasAlpha || null != this._opacityTexture
          }
          getAlphaTestTexture() {
            return this._diffuseTexture
          }
          isReadyForSubMesh(ip, cp) {
            let Op = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._uniformBufferLayoutBuilt || this.buildUniformLayout();
            const op = cp._drawWrapper;
            if (op.effect && this.isFrozen && op._wasPreviouslyReady && op._wasPreviouslyUsingInstances === Op) return !0;
            cp.materialDefines || (this._callbackPluginEventGeneric(4, this._eventInfo), cp.materialDefines = new lp(this._eventInfo.defineNames));
            const Ip = this.Gl(),
              Sp = cp.materialDefines;
            if (this._isReadyForSubMesh(cp)) return !0;
            const xp = Ip.gy();
            if (Sp._needNormals = (0, dp.ab)(Ip, ip, Sp, !0, this._maxSimultaneousLights, this._disableLighting), !(0, dp.c)(Ip, ip, this._maxSimultaneousLights, this._disableLighting)) return !1;
            (0, dp.ib)(Ip, Sp);
            const Dp = this.needAlphaBlendingForMesh(ip) && this.Gl().useOrderIndependentTransparency;
            if ((0, dp.nb)(Ip, Sp, this.canRenderToMRT && !Dp), (0, dp.lb)(Ip, Sp, Dp), kp.e.PrepareDefines(xp.currentRenderPassId, ip, Sp), Sp._areTexturesDirty) {
              this._eventInfo.hasRenderTargetTextures = !1, this._callbackPluginEventHasRenderTargetTextures(this._eventInfo), this._cacheHasRenderTargetTextures = this._eventInfo.hasRenderTargetTextures, Sp._needUVs = !1;
              for (let pp = 1; pp <= 6; ++pp) Sp["MAINUV" + pp] = !1;
              if (Ip.texturesEnabled) {
                if (Sp.DIFFUSEDIRECTUV = 0, Sp.BUMPDIRECTUV = 0, Sp.AMBIENTDIRECTUV = 0, Sp.OPACITYDIRECTUV = 0, Sp.EMISSIVEDIRECTUV = 0, Sp.SPECULARDIRECTUV = 0, Sp.LIGHTMAPDIRECTUV = 0, this._diffuseTexture && pp.DiffuseTextureEnabled) {
                  if (!this._diffuseTexture.isReadyOrNotBlocking()) return !1;
                  (0, dp.eb)(this._diffuseTexture, Sp, "DIFFUSE")
                } else Sp.DIFFUSE = !1;
                if (this._ambientTexture && pp.AmbientTextureEnabled) {
                  if (!this._ambientTexture.isReadyOrNotBlocking()) return !1;
                  (0, dp.eb)(this._ambientTexture, Sp, "AMBIENT")
                } else Sp.AMBIENT = !1;
                if (this._opacityTexture && pp.OpacityTextureEnabled) {
                  if (!this._opacityTexture.isReadyOrNotBlocking()) return !1;
                  (0, dp.eb)(this._opacityTexture, Sp, "OPACITY"), Sp.OPACITYRGB = this._opacityTexture.getAlphaFromRGB
                } else Sp.OPACITY = !1;
                if (this._reflectionTexture && pp.ReflectionTextureEnabled ? (Sp.ROUGHNESS = this._roughness > 0, Sp.REFLECTIONOVERALPHA = this._useReflectionOverAlpha) : (Sp.ROUGHNESS = !1, Sp.REFLECTIONOVERALPHA = !1), !(0, dp.Y)(Ip, this._reflectionTexture, Sp)) return !1;
                if (this._emissiveTexture && pp.EmissiveTextureEnabled) {
                  if (!this._emissiveTexture.isReadyOrNotBlocking()) return !1;
                  (0, dp.eb)(this._emissiveTexture, Sp, "EMISSIVE")
                } else Sp.EMISSIVE = !1;
                if (this._lightmapTexture && pp.LightmapTextureEnabled) {
                  if (!this._lightmapTexture.isReadyOrNotBlocking()) return !1;
                  (0, dp.eb)(this._lightmapTexture, Sp, "LIGHTMAP"), Sp.USELIGHTMAPASSHADOWMAP = this._useLightmapAsShadowmap, Sp.RGBDLIGHTMAP = this._lightmapTexture.isRGBD
                } else Sp.LIGHTMAP = !1;
                if (this._specularTexture && pp.SpecularTextureEnabled) {
                  if (!this._specularTexture.isReadyOrNotBlocking()) return !1;
                  (0, dp.eb)(this._specularTexture, Sp, "SPECULAR"), Sp.GLOSSINESS = this._useGlossinessFromSpecularMapAlpha
                } else Sp.SPECULAR = !1;
                if (Ip.gy().getCaps().standardDerivatives && this._bumpTexture && pp.BumpTextureEnabled) {
                  if (!this._bumpTexture.isReady()) return !1;
                  (0, dp.eb)(this._bumpTexture, Sp, "BUMP"), Sp.PARALLAX = this._useParallax, Sp.PARALLAX_RHS = Ip.useRightHandedSystem, Sp.PARALLAXOCCLUSION = this._useParallaxOcclusion, Sp.OBJECTSPACE_NORMALMAP = this._useObjectSpaceNormalMap
                } else Sp.BUMP = !1, Sp.PARALLAX = !1, Sp.PARALLAX_RHS = !1, Sp.PARALLAXOCCLUSION = !1;
                if (this._refractionTexture && pp.RefractionTextureEnabled) {
                  if (!this._refractionTexture.isReadyOrNotBlocking()) return !1;
                  Sp._needUVs = !0, Sp.REFRACTION = !0, Sp.REFRACTIONMAP_3D = this._refractionTexture.isCube, Sp.RGBDREFRACTION = this._refractionTexture.isRGBD, Sp.USE_LOCAL_REFRACTIONMAP_CUBIC = !!this._refractionTexture.boundingBoxSize
                } else Sp.REFRACTION = !1;
                Sp.TWOSIDEDLIGHTING = !this._backFaceCulling && this._twoSidedLighting
              } else Sp.DIFFUSE = !1, Sp.AMBIENT = !1, Sp.OPACITY = !1, Sp.REFLECTION = !1, Sp.EMISSIVE = !1, Sp.LIGHTMAP = !1, Sp.BUMP = !1, Sp.REFRACTION = !1;
              Sp.ALPHAFROMDIFFUSE = this._shouldUseAlphaFromDiffuseTexture(), Sp.EMISSIVEASILLUMINATION = this._useEmissiveAsIllumination, Sp.LINKEMISSIVEWITHDIFFUSE = this._linkEmissiveWithDiffuse, Sp.SPECULAROVERALPHA = this._useSpecularOverAlpha, Sp.PREMULTIPLYALPHA = 7 === this.alphaMode || 8 === this.alphaMode, Sp.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== this.transparencyMode, Sp.ALPHABLEND = null === this.transparencyMode || this.needAlphaBlendingForMesh(ip), Sp.TEXTURE_REPETITION_MODE = xp.version > 1 || xp.isWebGPU ? this.textureRepetitionMode : 0
            }
            if (this._eventInfo.isReadyForSubMesh = !0, this._eventInfo.defines = Sp, this._eventInfo.subMesh = cp, this._callbackPluginEventIsReadyForSubMesh(this._eventInfo), !this._eventInfo.isReadyForSubMesh) return !1;
            if (Sp._areImageProcessingDirty && this._imageProcessingConfiguration) {
              if (!this._imageProcessingConfiguration.isReady()) return !1;
              this._imageProcessingConfiguration.prepareDefines(Sp), Sp.IS_REFLECTION_LINEAR = null != this.reflectionTexture && !this.reflectionTexture.gammaSpace, Sp.IS_REFRACTION_LINEAR = null != this.refractionTexture && !this.refractionTexture.gammaSpace
            }
            if (Sp._areFresnelDirty && (pp.FresnelEnabled ? (this._diffuseFresnelParameters || this._opacityFresnelParameters || this._emissiveFresnelParameters || this._refractionFresnelParameters || this._reflectionFresnelParameters) && (Sp.DIFFUSEFRESNEL = this._diffuseFresnelParameters && this._diffuseFresnelParameters.isEnabled, Sp.OPACITYFRESNEL = this._opacityFresnelParameters && this._opacityFresnelParameters.isEnabled, Sp.REFLECTIONFRESNEL = this._reflectionFresnelParameters && this._reflectionFresnelParameters.isEnabled, Sp.REFLECTIONFRESNELFROMSPECULAR = this._useReflectionFresnelFromSpecular, Sp.REFRACTIONFRESNEL = this._refractionFresnelParameters && this._refractionFresnelParameters.isEnabled, Sp.EMISSIVEFRESNEL = this._emissiveFresnelParameters && this._emissiveFresnelParameters.isEnabled, Sp._needNormals = !0, Sp.FRESNEL = !0) : Sp.FRESNEL = !1), Sp.AREALIGHTUSED || Sp.CLUSTLIGHT_BATCH)
              for (let pp = 0; pp < ip.lightSources.length; pp++)
                if (!ip.lightSources[pp]._isReady()) return !1;
            (0, dp.hb)(ip, Ip, this._useLogarithmicDepth, this.pointsCloud, this.fogEnabled, this.needAlphaTestingForMesh(ip), Sp, this._applyDecalMapAfterDetailMap, this._useVertexPulling, cp.getRenderingMesh(), this._isVertexOutputInvariant), (0, dp.X)(Ip, xp, this, Sp, Op, null, cp.getRenderingMesh().hasThinInstances), this._eventInfo.defines = Sp, this._eventInfo.mesh = ip, this._callbackPluginEventPrepareDefinesBeforeAttributes(this._eventInfo), (0, dp.T)(ip, Sp, !0, !0, !0), this._callbackPluginEventPrepareDefines(this._eventInfo);
            let Pp = !1;
            if (Sp.isDirty) {
              const Op = Sp._areLightsDisposed;
              Sp.markAsProcessed();
              const op = new wp.c;
              Sp.REFLECTION && op.addFallback(0, "REFLECTION"), Sp.SPECULAR && op.addFallback(0, "SPECULAR"), Sp.BUMP && op.addFallback(0, "BUMP"), Sp.PARALLAX && op.addFallback(1, "PARALLAX"), Sp.PARALLAX_RHS && op.addFallback(1, "PARALLAX_RHS"), Sp.PARALLAXOCCLUSION && op.addFallback(0, "PARALLAXOCCLUSION"), Sp.SPECULAROVERALPHA && op.addFallback(0, "SPECULAROVERALPHA"), Sp.FOG && op.addFallback(1, "FOG"), Sp.POINTSIZE && op.addFallback(0, "POINTSIZE"), Sp.LOGARITHMICDEPTH && op.addFallback(0, "LOGARITHMICDEPTH"), (0, dp.E)(Sp, op, this._maxSimultaneousLights), Sp.SPECULARTERM && op.addFallback(0, "SPECULARTERM"), Sp.DIFFUSEFRESNEL && op.addFallback(1, "DIFFUSEFRESNEL"), Sp.OPACITYFRESNEL && op.addFallback(2, "OPACITYFRESNEL"), Sp.REFLECTIONFRESNEL && op.addFallback(3, "REFLECTIONFRESNEL"), Sp.EMISSIVEFRESNEL && op.addFallback(4, "EMISSIVEFRESNEL"), Sp.FRESNEL && op.addFallback(4, "FRESNEL"), Sp.MULTIVIEW && op.addFallback(0, "MULTIVIEW");
              const Dp = [Lp.j.PositionKind];
              Sp.NORMAL && Dp.push(Lp.j.NormalKind), Sp.TANGENT && Dp.push(Lp.j.TangentKind);
              for (let pp = 1; pp <= 6; ++pp) Sp["UV" + pp] && Dp.push(`uv${1===pp?"":pp}`);
              Sp.VERTEXCOLOR && Dp.push(Lp.j.ColorKind), (0, dp.K)(Dp, ip, Sp, op), (0, dp.L)(Dp, Sp), (0, dp.P)(Dp, ip, Sp), (0, dp.G)(Dp, ip, Sp);
              let Wp = "default";
              const yp = ["world", "view", "viewProjection", "vEyePosition", "vLightsType", "vAmbientColor", "vDiffuseColor", "vSpecularColor", "vEmissiveColor", "visibility", "vFogInfos", "vFogColor", "pointSize", "vDiffuseInfos", "vAmbientInfos", "vOpacityInfos", "vEmissiveInfos", "vSpecularInfos", "vBumpInfos", "vLightmapInfos", "vRefractionInfos", "mBones", "diffuseMatrix", "ambientMatrix", "opacityMatrix", "emissiveMatrix", "specularMatrix", "bumpMatrix", "normalMatrix", "lightmapMatrix", "refractionMatrix", "diffuseLeftColor", "diffuseRightColor", "opacityParts", "reflectionLeftColor", "reflectionRightColor", "emissiveLeftColor", "emissiveRightColor", "refractionLeftColor", "refractionRightColor", "vRefractionPosition", "vRefractionSize", "logarithmicDepthConstant", "vTangentSpaceParams", "alphaCutOff", "boneTextureInfo", "morphTargetTextureInfo", "morphTargetTextureIndices", "cameraInfo", "vTextureRepetitionHexTilingParams"],
                Up = ["diffuseSampler", "ambientSampler", "opacitySampler", "reflectionCubeSampler", "reflection2DSampler", "emissiveSampler", "specularSampler", "bumpSampler", "lightmapSampler", "refractionCubeSampler", "refraction2DSampler", "boneSampler", "morphTargets", "oitDepthSampler", "oitFrontColorSampler", "areaLightsLTC1Sampler", "areaLightsLTC2Sampler"];
              (0, dp.ub)(yp, Up, !1);
              const vp = ["Material", "Scene", "Mesh"],
                ep = {
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  maxSimultaneousMorphTargets: Sp.NUM_MORPH_INFLUENCERS
                };
              if (this._eventInfo.fallbacks = op, this._eventInfo.fallbackRank = 0, this._eventInfo.defines = Sp, this._eventInfo.uniforms = yp, this._eventInfo.attributes = Dp, this._eventInfo.samplers = Up, this._eventInfo.uniformBuffersNames = vp, this._eventInfo.customCode = void 0, this._eventInfo.mesh = ip, this._eventInfo.indexParameters = ep, this._callbackPluginEventGeneric(128, this._eventInfo), kp.e.AddUniformsAndSamplers(yp, Up), Yp.c.AddUniforms(yp), Yp.c.AddSamplers(Up), Ap.c && (Ap.c.PrepareUniforms(yp, Sp), Ap.c.PrepareSamplers(Up, Sp)), (0, dp.xb)({
                  uniformsNames: yp,
                  uniformBuffersNames: vp,
                  samplers: Up,
                  defines: Sp,
                  maxSimultaneousLights: this._maxSimultaneousLights,
                  shaderLanguage: this._shaderLanguage
                }), (0, tp.c)(yp), this._useVertexPulling) {
                const pp = cp.getRenderingMesh(),
                  ip = pp?.geometry;
                ip && (this._vertexPullingMetadata = (0, Hp.i)(ip), this._vertexPullingMetadata && this._vertexPullingMetadata.forEach(((pp, ip) => {
                  yp.push(`vp_${ip}_info`)
                })))
              } else this._vertexPullingMetadata = null;
              const jp = {};
              this.customShaderNameResolve && (Wp = this.customShaderNameResolve(Wp, yp, vp, Up, Sp, Dp, jp));
              const mp = Sp.toString(),
                Rp = cp.effect,
                qp = Ip.gy().createEffect(Wp, {
                  attributes: Dp,
                  uniformsNames: yp,
                  uniformBuffersNames: vp,
                  samplers: Up,
                  defines: mp,
                  fallbacks: op,
                  onCompiled: this.onCompiled,
                  onError: this.onError,
                  indexParameters: ep,
                  processFinalCode: jp.processFinalCode,
                  processCodeAfterIncludes: this._eventInfo.customCode,
                  multiTarget: Sp.PREPASS,
                  shaderLanguage: this._shaderLanguage,
                  extraInitializationsAsync: pp._ShaderLoader.getLoadCallback(this._shaderLanguage)
                }, xp);
              if (this._eventInfo.customCode = void 0, qp)
                if (this._onEffectCreatedObservable && (Ep.effect = qp, Ep.subMesh = cp, this._onEffectCreatedObservable.notifyObservers(Ep)), this.allowShaderHotSwapping && Rp && !qp.isReady()) {
                  if (Sp.markAsUnprocessed(), Pp = this.isFrozen, Op) return Sp._areLightsDisposed = !0, !1
                } else Ip.resetCachedMaterial(), cp.setEffect(qp, Sp, this._materialContext)
            }
            return !(!cp.effect || !cp.effect.isReady()) && (Sp._renderId = Ip.getRenderId(), op._wasPreviouslyReady = !Pp, op._wasPreviouslyUsingInstances = Op, this._checkScenePerformancePriority(), !0)
          }
          buildUniformLayout() {
            const pp = this._uniformBuffer;
            pp.addUniform("diffuseLeftColor", 4), pp.addUniform("diffuseRightColor", 4), pp.addUniform("opacityParts", 4), pp.addUniform("reflectionLeftColor", 4), pp.addUniform("reflectionRightColor", 4), pp.addUniform("refractionLeftColor", 4), pp.addUniform("refractionRightColor", 4), pp.addUniform("emissiveLeftColor", 4), pp.addUniform("emissiveRightColor", 4), pp.addUniform("vDiffuseInfos", 2), pp.addUniform("vAmbientInfos", 2), pp.addUniform("vOpacityInfos", 2), pp.addUniform("vEmissiveInfos", 2), pp.addUniform("vLightmapInfos", 2), pp.addUniform("vSpecularInfos", 2), pp.addUniform("vBumpInfos", 3), pp.addUniform("diffuseMatrix", 16), pp.addUniform("ambientMatrix", 16), pp.addUniform("opacityMatrix", 16), pp.addUniform("emissiveMatrix", 16), pp.addUniform("lightmapMatrix", 16), pp.addUniform("specularMatrix", 16), pp.addUniform("bumpMatrix", 16), pp.addUniform("vTangentSpaceParams", 2), pp.addUniform("pointSize", 1), pp.addUniform("alphaCutOff", 1), pp.addUniform("refractionMatrix", 16), pp.addUniform("vRefractionInfos", 4), pp.addUniform("vRefractionPosition", 3), pp.addUniform("vRefractionSize", 3), pp.addUniform("vSpecularColor", 4), pp.addUniform("vEmissiveColor", 3), pp.addUniform("vDiffuseColor", 4), pp.addUniform("vAmbientColor", 3), pp.addUniform("cameraInfo", 4), pp.addUniform("vTextureRepetitionHexTilingParams", 4), (0, dp.qb)(pp, !1, !0), super.buildUniformLayout()
          }
          bindForSubMesh(ip, cp, Op) {
            const op = this.Gl(),
              Ip = Op.materialDefines;
            if (!Ip) return;
            const Lp = Op.effect;
            if (!Lp) return;
            this._activeEffect = Lp, cp.getMeshUniformBuffer().bindToEffect(Lp, "Mesh"), cp.transferToEffect(ip), this._uniformBuffer.bindToEffect(Lp, "Material"), this.prePassConfiguration.bindForSubMesh(this._activeEffect, op, cp, ip, this.isFrozen), kp.e.Bind(op.gy().currentRenderPassId, this._activeEffect, cp, ip, this);
            const Yp = op.activeCamera;
            Yp ? this._uniformBuffer.updateFloat4("cameraInfo", Yp.minZ, Yp.maxZ, 0, 0) : this._uniformBuffer.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Dp = this.textureRepetitionHexTilingParams;
            this._uniformBuffer.updateFloat4("vTextureRepetitionHexTilingParams", Dp[0], Dp[1], Dp[2], Dp[3]), this._eventInfo.subMesh = Op, this._callbackPluginEventHardBindForSubMesh(this._eventInfo), Ip.OBJECTSPACE_NORMALMAP && (ip.toNormalMatrix(this._normalMatrix), this.bindOnlyNormalMatrix(this._normalMatrix));
            const Ap = this._mustRebind(op, Lp, Op, cp.visibility),
              Pp = op.gy()._features.needToAlwaysBindUniformBuffers;
            (0, dp.g)(cp, Lp), this._vertexPullingMetadata && (0, Hp.e)(Lp, this._vertexPullingMetadata);
            const Wp = this._uniformBuffer;
            if (Ap) {
              if (this.bindViewProjection(Lp), !Wp.useUbo || !this.isFrozen || !Wp.isSync || Op._drawWrapper._forceRebindOnNextCall) {
                if (pp.FresnelEnabled && Ip.FRESNEL) {
                  if (this.diffuseFresnelParameters && this.diffuseFresnelParameters.isEnabled && (Wp.updateColor4("diffuseLeftColor", this.diffuseFresnelParameters.leftColor, this.diffuseFresnelParameters.power), Wp.updateColor4("diffuseRightColor", this.diffuseFresnelParameters.rightColor, this.diffuseFresnelParameters.bias)), this.opacityFresnelParameters && this.opacityFresnelParameters.isEnabled) {
                    const pp = xp.j.Color3[0];
                    pp.set(this.opacityFresnelParameters.leftColor.toLuminance(), this.opacityFresnelParameters.rightColor.toLuminance(), this.opacityFresnelParameters.bias), Wp.updateColor4("opacityParts", pp, this.opacityFresnelParameters.power)
                  }
                  this.reflectionFresnelParameters && this.reflectionFresnelParameters.isEnabled && (Wp.updateColor4("reflectionLeftColor", this.reflectionFresnelParameters.leftColor, this.reflectionFresnelParameters.power), Wp.updateColor4("reflectionRightColor", this.reflectionFresnelParameters.rightColor, this.reflectionFresnelParameters.bias)), this.refractionFresnelParameters && this.refractionFresnelParameters.isEnabled && (Wp.updateColor4("refractionLeftColor", this.refractionFresnelParameters.leftColor, this.refractionFresnelParameters.power), Wp.updateColor4("refractionRightColor", this.refractionFresnelParameters.rightColor, this.refractionFresnelParameters.bias)), this.emissiveFresnelParameters && this.emissiveFresnelParameters.isEnabled && (Wp.updateColor4("emissiveLeftColor", this.emissiveFresnelParameters.leftColor, this.emissiveFresnelParameters.power), Wp.updateColor4("emissiveRightColor", this.emissiveFresnelParameters.rightColor, this.emissiveFresnelParameters.bias))
                }
                if (Ip.ALPHATEST && Wp.updateFloat("alphaCutOff", this.alphaCutOff), op.texturesEnabled && (this._diffuseTexture && pp.DiffuseTextureEnabled && (Wp.updateFloat2("vDiffuseInfos", this._diffuseTexture.coordinatesIndex, this._diffuseTexture.level), (0, dp.A)(this._diffuseTexture, Wp, "diffuse")), this._ambientTexture && pp.AmbientTextureEnabled && (Wp.updateFloat2("vAmbientInfos", this._ambientTexture.coordinatesIndex, this._ambientTexture.level), (0, dp.A)(this._ambientTexture, Wp, "ambient")), this._opacityTexture && pp.OpacityTextureEnabled && (Wp.updateFloat2("vOpacityInfos", this._opacityTexture.coordinatesIndex, this._opacityTexture.level), (0, dp.A)(this._opacityTexture, Wp, "opacity")), (0, dp.k)(op, Ip, Wp, xp.d.White(), this._reflectionTexture, !1, !1, !0, !1, !1, !1, this.roughness), this._reflectionTexture && pp.ReflectionTextureEnabled || Wp.updateFloat2("vReflectionInfos", 0, this.roughness), this._emissiveTexture && pp.EmissiveTextureEnabled && (Wp.updateFloat2("vEmissiveInfos", this._emissiveTexture.coordinatesIndex, this._emissiveTexture.level), (0, dp.A)(this._emissiveTexture, Wp, "emissive")), this._lightmapTexture && pp.LightmapTextureEnabled && (Wp.updateFloat2("vLightmapInfos", this._lightmapTexture.coordinatesIndex, this._lightmapTexture.level), (0, dp.A)(this._lightmapTexture, Wp, "lightmap")), this._specularTexture && pp.SpecularTextureEnabled && (Wp.updateFloat2("vSpecularInfos", this._specularTexture.coordinatesIndex, this._specularTexture.level), (0, dp.A)(this._specularTexture, Wp, "specular")), this._bumpTexture && op.gy().getCaps().standardDerivatives && pp.BumpTextureEnabled && (Wp.updateFloat3("vBumpInfos", this._bumpTexture.coordinatesIndex, 1 / this._bumpTexture.level, this.parallaxScaleBias), (0, dp.A)(this._bumpTexture, Wp, "bump"), op._mirroredCameraPosition ? Wp.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? 1 : -1, this._invertNormalMapY ? 1 : -1) : Wp.updateFloat2("vTangentSpaceParams", this._invertNormalMapX ? -1 : 1, this._invertNormalMapY ? -1 : 1)), this._refractionTexture && pp.RefractionTextureEnabled)) {
                  let pp = 1;
                  if (this._refractionTexture.isCube || (Wp.I3("refractionMatrix", this._refractionTexture.getReflectionTextureMatrix()), this._refractionTexture.depth && (pp = this._refractionTexture.depth)), Wp.updateFloat4("vRefractionInfos", this._refractionTexture.level, this.indexOfRefraction, pp, this.invertRefractionY ? -1 : 1), this._refractionTexture.boundingBoxSize) {
                    const pp = this._refractionTexture;
                    Wp.updateVector3("vRefractionPosition", pp.boundingBoxPosition), Wp.updateVector3("vRefractionSize", pp.boundingBoxSize)
                  }
                }
                this.pointsCloud && Wp.updateFloat("pointSize", this.pointSize), Wp.updateColor4("vSpecularColor", this.specularColor, this.specularPower), Wp.updateColor3("vEmissiveColor", pp.EmissiveTextureEnabled ? this.emissiveColor : xp.d.BlackReadOnly), Wp.updateColor4("vDiffuseColor", this.diffuseColor, this.alpha), op.ambientColor.multiplyToRef(this.ambientColor, this._globalAmbientColor), Wp.updateColor3("vAmbientColor", this._globalAmbientColor)
              }
              op.texturesEnabled && (this._diffuseTexture && pp.DiffuseTextureEnabled && Lp.setTexture("diffuseSampler", this._diffuseTexture), this._ambientTexture && pp.AmbientTextureEnabled && Lp.setTexture("ambientSampler", this._ambientTexture), this._opacityTexture && pp.OpacityTextureEnabled && Lp.setTexture("opacitySampler", this._opacityTexture), this._reflectionTexture && pp.ReflectionTextureEnabled && (this._reflectionTexture.isCube ? Lp.setTexture("reflectionCubeSampler", this._reflectionTexture) : Lp.setTexture("reflection2DSampler", this._reflectionTexture)), this._emissiveTexture && pp.EmissiveTextureEnabled && Lp.setTexture("emissiveSampler", this._emissiveTexture), this._lightmapTexture && pp.LightmapTextureEnabled && Lp.setTexture("lightmapSampler", this._lightmapTexture), this._specularTexture && pp.SpecularTextureEnabled && Lp.setTexture("specularSampler", this._specularTexture), this._bumpTexture && op.gy().getCaps().standardDerivatives && pp.BumpTextureEnabled && Lp.setTexture("bumpSampler", this._bumpTexture), this._refractionTexture && pp.RefractionTextureEnabled && (this._refractionTexture.isCube ? Lp.setTexture("refractionCubeSampler", this._refractionTexture) : Lp.setTexture("refraction2DSampler", this._refractionTexture))), this.Gl().useOrderIndependentTransparency && this.needAlphaBlendingForMesh(cp) && this.Gl().depthPeelingRenderer.bind(Lp), this._eventInfo.subMesh = Op, this._callbackPluginEventBindForSubMesh(this._eventInfo), (0, tp.g)(Lp, this, op), this.bindEyePosition(Lp)
            } else Pp && (this._needToBindSceneUbo = !0);
            !Ap && this.isFrozen && !Pp || !op.lightsEnabled || this._disableLighting || (0, dp.p)(op, cp, Lp, Ip, this._maxSimultaneousLights), !Ap && this.isFrozen || ((op.fogEnabled && cp.applyFog && op.fogMode !== Sp.f.FOGMODE_NONE || this._reflectionTexture || this._refractionTexture || cp.receiveShadows || Ip.PREPASS || Ip.CLUSTLIGHT_BATCH) && this.bindView(Lp), (0, dp.i)(op, cp, Lp), Ip.NUM_MORPH_INFLUENCERS && (0, dp.v)(cp, Lp), Ip.BAKED_VERTEX_ANIMATION_TEXTURE && cp.bakedVertexAnimationManager?.bind(Lp, Ip.INSTANCES), this.useLogarithmicDepth && (0, dp.r)(Ip, Lp, op), this._imageProcessingConfiguration && !this._imageProcessingConfiguration.applyByPostProcess && this._imageProcessingConfiguration.bind(this._activeEffect)), this._afterBind(cp, this._activeEffect, Op), Wp.update()
          }
          _canBindRunFollower(ip, cp, Op, op, Ip) {
            const Sp = ip.prePassRenderer;
            return this.isFrozen && this._storeEffectOnSubMeshes && this._uniformBufferLayoutBuilt && !this._needToBindSceneUbo && this.isReadyForSubMesh === pp.prototype.isReadyForSubMesh && this.bindForSubMesh === pp.prototype.bindForSubMesh && this._mustRebind === yp.e.prototype._mustRebind && !(!this.backFaceCulling && this.separateCullingPass) && !(this.pluginManager && 0 !== this.pluginManager._activePluginsForExtraEvents.length) && !this._vertexPullingMetadata && !cp._features.needToAlwaysBindUniformBuffers && !(Sp && Sp.enabled && Sp.currentRTisSceneRT) && !kp.e._Configurations[cp.currentRenderPassId] && !op.materialDefines?.OBJECTSPACE_NORMALMAP && !Op.skeleton && !Ip._bonesComputationForcedToCPU
          }
          _bindRunFollower(pp, ip, cp, Op) {
            this._activeEffect = Op, ip.getMeshUniformBuffer().bindToEffect(Op, "Mesh"), ip.transferToEffect(pp);
            const op = this._uniformBuffer;
            op.bindToEffect(Op, "Material");
            const Ip = this._scene.activeCamera;
            Ip ? op.updateFloat4("cameraInfo", Ip.minZ, Ip.maxZ, 0, 0) : op.updateFloat4("cameraInfo", 0, 0, 0, 0);
            const Sp = this.textureRepetitionHexTilingParams;
            op.updateFloat4("vTextureRepetitionHexTilingParams", Sp[0], Sp[1], Sp[2], Sp[3]), this._afterBind(ip, Op, cp), op.update()
          }
          getAnimatables() {
            const pp = super.getAnimatables();
            return this._diffuseTexture && this._diffuseTexture.animations && this._diffuseTexture.animations.length > 0 && pp.push(this._diffuseTexture), this._ambientTexture && this._ambientTexture.animations && this._ambientTexture.animations.length > 0 && pp.push(this._ambientTexture), this._opacityTexture && this._opacityTexture.animations && this._opacityTexture.animations.length > 0 && pp.push(this._opacityTexture), this._reflectionTexture && this._reflectionTexture.animations && this._reflectionTexture.animations.length > 0 && pp.push(this._reflectionTexture), this._emissiveTexture && this._emissiveTexture.animations && this._emissiveTexture.animations.length > 0 && pp.push(this._emissiveTexture), this._specularTexture && this._specularTexture.animations && this._specularTexture.animations.length > 0 && pp.push(this._specularTexture), this._bumpTexture && this._bumpTexture.animations && this._bumpTexture.animations.length > 0 && pp.push(this._bumpTexture), this._lightmapTexture && this._lightmapTexture.animations && this._lightmapTexture.animations.length > 0 && pp.push(this._lightmapTexture), this._refractionTexture && this._refractionTexture.animations && this._refractionTexture.animations.length > 0 && pp.push(this._refractionTexture), pp
          }
          getActiveTextures() {
            const pp = super.getActiveTextures();
            return this._diffuseTexture && pp.push(this._diffuseTexture), this._ambientTexture && pp.push(this._ambientTexture), this._opacityTexture && pp.push(this._opacityTexture), this._reflectionTexture && pp.push(this._reflectionTexture), this._emissiveTexture && pp.push(this._emissiveTexture), this._specularTexture && pp.push(this._specularTexture), this._bumpTexture && pp.push(this._bumpTexture), this._lightmapTexture && pp.push(this._lightmapTexture), this._refractionTexture && pp.push(this._refractionTexture), pp
          }
          hasTexture(pp) {
            return !!super.hasTexture(pp) || (this._diffuseTexture === pp || (this._ambientTexture === pp || (this._opacityTexture === pp || (this._reflectionTexture === pp || (this._emissiveTexture === pp || (this._specularTexture === pp || (this._bumpTexture === pp || (this._lightmapTexture === pp || this._refractionTexture === pp))))))))
          }
          dispose(pp, ip) {
            ip && (this._diffuseTexture?.dispose(), this._ambientTexture?.dispose(), this._opacityTexture?.dispose(), this._reflectionTexture?.dispose(), this._emissiveTexture?.dispose(), this._specularTexture?.dispose(), this._bumpTexture?.dispose(), this._lightmapTexture?.dispose(), this._refractionTexture?.dispose()), this._imageProcessingConfiguration && this._imageProcessingObserver && this._imageProcessingConfiguration.onUpdateParameters.remove(this._imageProcessingObserver), super.dispose(pp, ip)
          }
          clone(ip) {
            let cp = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            const op = ep.c.Clone((() => new pp(ip, this.Gl())), this, {
              cloneTexturesOnlyOnce: cp
            });
            return op.name = ip, op.id = ip, this.stencil.copyTo(op.stencil), this._clonePlugins(op, Op), op
          }
          static Parse(ip, cp, Op) {
            const op = ep.c.Parse((() => new pp(ip.name, cp)), ip, cp, Op);
            return ip.stencil && op.stencil.parse(ip.stencil, cp, Op), Pp.b._ParsePlugins(ip, op, cp, Op), op
          }
          static get DiffuseTextureEnabled() {
            return Up.c.DiffuseTextureEnabled
          }
          static set DiffuseTextureEnabled(pp) {
            Up.c.DiffuseTextureEnabled = pp
          }
          static get DetailTextureEnabled() {
            return Up.c.DetailTextureEnabled
          }
          static set DetailTextureEnabled(pp) {
            Up.c.DetailTextureEnabled = pp
          }
          static get AmbientTextureEnabled() {
            return Up.c.AmbientTextureEnabled
          }
          static set AmbientTextureEnabled(pp) {
            Up.c.AmbientTextureEnabled = pp
          }
          static get OpacityTextureEnabled() {
            return Up.c.OpacityTextureEnabled
          }
          static set OpacityTextureEnabled(pp) {
            Up.c.OpacityTextureEnabled = pp
          }
          static get ReflectionTextureEnabled() {
            return Up.c.ReflectionTextureEnabled
          }
          static set ReflectionTextureEnabled(pp) {
            Up.c.ReflectionTextureEnabled = pp
          }
          static get EmissiveTextureEnabled() {
            return Up.c.EmissiveTextureEnabled
          }
          static set EmissiveTextureEnabled(pp) {
            Up.c.EmissiveTextureEnabled = pp
          }
          static get SpecularTextureEnabled() {
            return Up.c.SpecularTextureEnabled
          }
          static set SpecularTextureEnabled(pp) {
            Up.c.SpecularTextureEnabled = pp
          }
          static get BumpTextureEnabled() {
            return Up.c.BumpTextureEnabled
          }
          static set BumpTextureEnabled(pp) {
            Up.c.BumpTextureEnabled = pp
          }
          static get LightmapTextureEnabled() {
            return Up.c.LightmapTextureEnabled
          }
          static set LightmapTextureEnabled(pp) {
            Up.c.LightmapTextureEnabled = pp
          }
          static get RefractionTextureEnabled() {
            return Up.c.RefractionTextureEnabled
          }
          static set RefractionTextureEnabled(pp) {
            Up.c.RefractionTextureEnabled = pp
          }
          static get ColorGradingTextureEnabled() {
            return Up.c.ColorGradingTextureEnabled
          }
          static set ColorGradingTextureEnabled(pp) {
            Up.c.ColorGradingTextureEnabled = pp
          }
          static get FresnelEnabled() {
            return Up.c.FresnelEnabled
          }
          static set FresnelEnabled(pp) {
            Up.c.FresnelEnabled = pp
          }
        }, ip = new WeakMap, Dp = new WeakMap, Wp = new WeakMap, mp = new WeakMap, Rp = new WeakMap, qp = new WeakMap, Mp = new WeakMap, Cp = new WeakMap, Xp = new WeakMap, Jp = new WeakMap, Bp = new WeakMap, Np = new WeakMap, Tp = new WeakMap, fp = new WeakMap, bp = new WeakMap, hp = new WeakMap, ap = new WeakMap, np = new WeakMap, Fp = new WeakMap, gp = new WeakMap, Gp = new WeakMap, rp = new WeakMap, Zp = new WeakMap, zp = new WeakMap, sp = new WeakMap, Kp = new WeakMap, Vp = new WeakMap, ii = new WeakMap, ci = new WeakMap, Oi = new WeakMap, oi = new WeakMap, Ii = new WeakMap, (() => {
          const ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Mc[Symbol.metadata] ?? null) : void 0;
          Si = [(0, op.C)("diffuseTexture")], xi = [(0, op.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Li = [(0, op.C)("ambientTexture")], Yi = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], Di = [(0, op.C)("opacityTexture")], Ai = [(0, op.e)("_markAllSubMeshesAsTexturesAndMiscDirty")], Pi = [(0, op.C)("reflectionTexture")], Wi = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], yi = [(0, op.C)("emissiveTexture")], Ui = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], wi = [(0, op.C)("specularTexture")], vi = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], ti = [(0, op.C)("bumpTexture")], Hi = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], di = [(0, op.C)("lightmapTexture")], ei = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], ui = [(0, op.C)("refractionTexture")], ji = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], ki = [(0, op.n)("ambient")], mi = [(0, op.n)("diffuse")], Ri = [(0, op.n)("specular")], qi = [(0, op.n)("emissive")], Mi = [(0, op.K)()], Ci = [(0, op.K)("useAlphaFromDiffuseTexture")], Ei = [() => ({
            init(pp) {
              return void 0 === pp && "_useAlphaFromDiffuseTexture" in this || (this._useAlphaFromDiffuseTexture = pp), pp
            },
            get() {
              return this._useAlphaFromDiffuseTexture
            },
            set(pp) {
              this._useAlphaFromDiffuseTexture = pp
            }
          })], Xi = [(0, op.K)("useEmissiveAsIllumination")], li = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], Qi = [(0, op.K)("linkEmissiveWithDiffuse")], Ji = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], Bi = [(0, op.K)("useSpecularOverAlpha")], Ni = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], Ti = [(0, op.K)("useReflectionOverAlpha")], fi = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], bi = [(0, op.K)("disableLighting")], ai = [(0, op.e)("_markAllSubMeshesAsLightsDirty")], ni = [(0, op.K)("useObjectSpaceNormalMap")], Fi = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], gi = [(0, op.K)("useParallax")], Gi = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], ri = [(0, op.K)("useParallaxOcclusion")], Zi = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], zi = [(0, op.K)()], si = [(0, op.K)("roughness")], Ki = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], Vi = [(0, op.K)()], pc = [(0, op.K)()], ic = [(0, op.K)()], cc = [(0, op.K)("useLightmapAsShadowmap")], Oc = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], oc = [(0, op.r)("diffuseFresnelParameters")], Ic = [(0, op.e)("_markAllSubMeshesAsFresnelDirty")], Sc = [(0, op.r)("opacityFresnelParameters")], xc = [(0, op.e)("_markAllSubMeshesAsFresnelAndMiscDirty")], Lc = [(0, op.r)("reflectionFresnelParameters")], Yc = [(0, op.e)("_markAllSubMeshesAsFresnelDirty")], Dc = [(0, op.r)("refractionFresnelParameters")], Ac = [(0, op.e)("_markAllSubMeshesAsFresnelDirty")], Pc = [(0, op.r)("emissiveFresnelParameters")], Wc = [(0, op.e)("_markAllSubMeshesAsFresnelDirty")], yc = [(0, op.K)("useReflectionFresnelFromSpecular")], Uc = [(0, op.e)("_markAllSubMeshesAsFresnelDirty")], wc = [(0, op.K)("useGlossinessFromSpecularMapAlpha")], vc = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], tc = [(0, op.K)("maxSimultaneousLights")], Hc = [(0, op.e)("_markAllSubMeshesAsLightsDirty")], dc = [(0, op.K)("invertNormalMapX")], ec = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], uc = [(0, op.K)("invertNormalMapY")], jc = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], kc = [(0, op.K)("twoSidedLighting")], mc = [(0, op.e)("_markAllSubMeshesAsTexturesDirty")], Rc = [(0, op.K)("applyDecalMapAfterDetailMap")], qc = [(0, op.e)("_markAllSubMeshesAsMiscDirty")], (0, Op.j)(pp, null, xi, {
            kind: "accessor",
            name: "diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "diffuseTexture" in pp,
              get: pp => pp.diffuseTexture,
              set: (pp, ip) => {
                pp.diffuseTexture = ip
              }
            },
            metadata: ip
          }, Xc, lc), (0, Op.j)(pp, null, Yi, {
            kind: "accessor",
            name: "ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "ambientTexture" in pp,
              get: pp => pp.ambientTexture,
              set: (pp, ip) => {
                pp.ambientTexture = ip
              }
            },
            metadata: ip
          }, Bc, Nc), (0, Op.j)(pp, null, Ai, {
            kind: "accessor",
            name: "opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "opacityTexture" in pp,
              get: pp => pp.opacityTexture,
              set: (pp, ip) => {
                pp.opacityTexture = ip
              }
            },
            metadata: ip
          }, bc, hc), (0, Op.j)(pp, null, Wi, {
            kind: "accessor",
            name: "reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "reflectionTexture" in pp,
              get: pp => pp.reflectionTexture,
              set: (pp, ip) => {
                pp.reflectionTexture = ip
              }
            },
            metadata: ip
          }, Fc, gc), (0, Op.j)(pp, null, Ui, {
            kind: "accessor",
            name: "emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "emissiveTexture" in pp,
              get: pp => pp.emissiveTexture,
              set: (pp, ip) => {
                pp.emissiveTexture = ip
              }
            },
            metadata: ip
          }, Zc, zc), (0, Op.j)(pp, null, vi, {
            kind: "accessor",
            name: "specularTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "specularTexture" in pp,
              get: pp => pp.specularTexture,
              set: (pp, ip) => {
                pp.specularTexture = ip
              }
            },
            metadata: ip
          }, Vc, pO), (0, Op.j)(pp, null, Hi, {
            kind: "accessor",
            name: "bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "bumpTexture" in pp,
              get: pp => pp.bumpTexture,
              set: (pp, ip) => {
                pp.bumpTexture = ip
              }
            },
            metadata: ip
          }, OO, oO), (0, Op.j)(pp, null, ei, {
            kind: "accessor",
            name: "lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "lightmapTexture" in pp,
              get: pp => pp.lightmapTexture,
              set: (pp, ip) => {
                pp.lightmapTexture = ip
              }
            },
            metadata: ip
          }, xO, LO), (0, Op.j)(pp, null, ji, {
            kind: "accessor",
            name: "refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "refractionTexture" in pp,
              get: pp => pp.refractionTexture,
              set: (pp, ip) => {
                pp.refractionTexture = ip
              }
            },
            metadata: ip
          }, AO, PO), (0, Op.j)(pp, null, Ei, {
            kind: "accessor",
            name: "useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "useAlphaFromDiffuseTexture" in pp,
              get: pp => pp.useAlphaFromDiffuseTexture,
              set: (pp, ip) => {
                pp.useAlphaFromDiffuseTexture = ip
              }
            },
            metadata: ip
          }, mO, RO), (0, Op.j)(pp, null, li, {
            kind: "accessor",
            name: "useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: pp => "useEmissiveAsIllumination" in pp,
              get: pp => pp.useEmissiveAsIllumination,
              set: (pp, ip) => {
                pp.useEmissiveAsIllumination = ip
              }
            },
            metadata: ip
          }, CO, EO), (0, Op.j)(pp, null, Ji, {
            kind: "accessor",
            name: "linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: pp => "linkEmissiveWithDiffuse" in pp,
              get: pp => pp.linkEmissiveWithDiffuse,
              set: (pp, ip) => {
                pp.linkEmissiveWithDiffuse = ip
              }
            },
            metadata: ip
          }, QO, JO), (0, Op.j)(pp, null, Ni, {
            kind: "accessor",
            name: "useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: pp => "useSpecularOverAlpha" in pp,
              get: pp => pp.useSpecularOverAlpha,
              set: (pp, ip) => {
                pp.useSpecularOverAlpha = ip
              }
            },
            metadata: ip
          }, TO, fO), (0, Op.j)(pp, null, fi, {
            kind: "accessor",
            name: "useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: pp => "useReflectionOverAlpha" in pp,
              get: pp => pp.useReflectionOverAlpha,
              set: (pp, ip) => {
                pp.useReflectionOverAlpha = ip
              }
            },
            metadata: ip
          }, aO, nO), (0, Op.j)(pp, null, ai, {
            kind: "accessor",
            name: "disableLighting",
            static: !1,
            private: !1,
            access: {
              has: pp => "disableLighting" in pp,
              get: pp => pp.disableLighting,
              set: (pp, ip) => {
                pp.disableLighting = ip
              }
            },
            metadata: ip
          }, GO, rO), (0, Op.j)(pp, null, Fi, {
            kind: "accessor",
            name: "useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: pp => "useObjectSpaceNormalMap" in pp,
              get: pp => pp.useObjectSpaceNormalMap,
              set: (pp, ip) => {
                pp.useObjectSpaceNormalMap = ip
              }
            },
            metadata: ip
          }, sO, KO), (0, Op.j)(pp, null, Gi, {
            kind: "accessor",
            name: "useParallax",
            static: !1,
            private: !1,
            access: {
              has: pp => "useParallax" in pp,
              get: pp => pp.useParallax,
              set: (pp, ip) => {
                pp.useParallax = ip
              }
            },
            metadata: ip
          }, io, co), (0, Op.j)(pp, null, Zi, {
            kind: "accessor",
            name: "useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: pp => "useParallaxOcclusion" in pp,
              get: pp => pp.useParallaxOcclusion,
              set: (pp, ip) => {
                pp.useParallaxOcclusion = ip
              }
            },
            metadata: ip
          }, Io, So), (0, Op.j)(pp, null, Ki, {
            kind: "accessor",
            name: "roughness",
            static: !1,
            private: !1,
            access: {
              has: pp => "roughness" in pp,
              get: pp => pp.roughness,
              set: (pp, ip) => {
                pp.roughness = ip
              }
            },
            metadata: ip
          }, Ao, Po), (0, Op.j)(pp, null, Oc, {
            kind: "accessor",
            name: "useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: pp => "useLightmapAsShadowmap" in pp,
              get: pp => pp.useLightmapAsShadowmap,
              set: (pp, ip) => {
                pp.useLightmapAsShadowmap = ip
              }
            },
            metadata: ip
          }, uo, jo), (0, Op.j)(pp, null, Ic, {
            kind: "accessor",
            name: "diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: pp => "diffuseFresnelParameters" in pp,
              get: pp => pp.diffuseFresnelParameters,
              set: (pp, ip) => {
                pp.diffuseFresnelParameters = ip
              }
            },
            metadata: ip
          }, Ro, qo), (0, Op.j)(pp, null, xc, {
            kind: "accessor",
            name: "opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: pp => "opacityFresnelParameters" in pp,
              get: pp => pp.opacityFresnelParameters,
              set: (pp, ip) => {
                pp.opacityFresnelParameters = ip
              }
            },
            metadata: ip
          }, Eo, Xo), (0, Op.j)(pp, null, Yc, {
            kind: "accessor",
            name: "reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: pp => "reflectionFresnelParameters" in pp,
              get: pp => pp.reflectionFresnelParameters,
              set: (pp, ip) => {
                pp.reflectionFresnelParameters = ip
              }
            },
            metadata: ip
          }, Bo, No), (0, Op.j)(pp, null, Ac, {
            kind: "accessor",
            name: "refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: pp => "refractionFresnelParameters" in pp,
              get: pp => pp.refractionFresnelParameters,
              set: (pp, ip) => {
                pp.refractionFresnelParameters = ip
              }
            },
            metadata: ip
          }, bo, ho), (0, Op.j)(pp, null, Wc, {
            kind: "accessor",
            name: "emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: pp => "emissiveFresnelParameters" in pp,
              get: pp => pp.emissiveFresnelParameters,
              set: (pp, ip) => {
                pp.emissiveFresnelParameters = ip
              }
            },
            metadata: ip
          }, Fo, go), (0, Op.j)(pp, null, Uc, {
            kind: "accessor",
            name: "useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: pp => "useReflectionFresnelFromSpecular" in pp,
              get: pp => pp.useReflectionFresnelFromSpecular,
              set: (pp, ip) => {
                pp.useReflectionFresnelFromSpecular = ip
              }
            },
            metadata: ip
          }, Zo, zo), (0, Op.j)(pp, null, vc, {
            kind: "accessor",
            name: "useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: pp => "useGlossinessFromSpecularMapAlpha" in pp,
              get: pp => pp.useGlossinessFromSpecularMapAlpha,
              set: (pp, ip) => {
                pp.useGlossinessFromSpecularMapAlpha = ip
              }
            },
            metadata: ip
          }, Vo, pI), (0, Op.j)(pp, null, Hc, {
            kind: "accessor",
            name: "maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: pp => "maxSimultaneousLights" in pp,
              get: pp => pp.maxSimultaneousLights,
              set: (pp, ip) => {
                pp.maxSimultaneousLights = ip
              }
            },
            metadata: ip
          }, OI, oI), (0, Op.j)(pp, null, ec, {
            kind: "accessor",
            name: "invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: pp => "invertNormalMapX" in pp,
              get: pp => pp.invertNormalMapX,
              set: (pp, ip) => {
                pp.invertNormalMapX = ip
              }
            },
            metadata: ip
          }, xI, LI), (0, Op.j)(pp, null, jc, {
            kind: "accessor",
            name: "invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: pp => "invertNormalMapY" in pp,
              get: pp => pp.invertNormalMapY,
              set: (pp, ip) => {
                pp.invertNormalMapY = ip
              }
            },
            metadata: ip
          }, AI, PI), (0, Op.j)(pp, null, mc, {
            kind: "accessor",
            name: "twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: pp => "twoSidedLighting" in pp,
              get: pp => pp.twoSidedLighting,
              set: (pp, ip) => {
                pp.twoSidedLighting = ip
              }
            },
            metadata: ip
          }, UI, wI), (0, Op.j)(pp, null, qc, {
            kind: "accessor",
            name: "applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: pp => "applyDecalMapAfterDetailMap" in pp,
              get: pp => pp.applyDecalMapAfterDetailMap,
              set: (pp, ip) => {
                pp.applyDecalMapAfterDetailMap = ip
              }
            },
            metadata: ip
          }, HI, dI), (0, Op.j)(null, null, Si, {
            kind: "field",
            name: "_diffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "_diffuseTexture" in pp,
              get: pp => pp._diffuseTexture,
              set: (pp, ip) => {
                pp._diffuseTexture = ip
              }
            },
            metadata: ip
          }, Cc, Ec), (0, Op.j)(null, null, Li, {
            kind: "field",
            name: "_ambientTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "_ambientTexture" in pp,
              get: pp => pp._ambientTexture,
              set: (pp, ip) => {
                pp._ambientTexture = ip
              }
            },
            metadata: ip
          }, Qc, Jc), (0, Op.j)(null, null, Di, {
            kind: "field",
            name: "_opacityTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "_opacityTexture" in pp,
              get: pp => pp._opacityTexture,
              set: (pp, ip) => {
                pp._opacityTexture = ip
              }
            },
            metadata: ip
          }, Tc, fc), (0, Op.j)(null, null, Pi, {
            kind: "field",
            name: "_reflectionTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "_reflectionTexture" in pp,
              get: pp => pp._reflectionTexture,
              set: (pp, ip) => {
                pp._reflectionTexture = ip
              }
            },
            metadata: ip
          }, ac, nc), (0, Op.j)(null, null, yi, {
            kind: "field",
            name: "_emissiveTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "_emissiveTexture" in pp,
              get: pp => pp._emissiveTexture,
              set: (pp, ip) => {
                pp._emissiveTexture = ip
              }
            },
            metadata: ip
          }, Gc, rc), (0, Op.j)(null, null, wi, {
            kind: "field",
            name: "_specularTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "_specularTexture" in pp,
              get: pp => pp._specularTexture,
              set: (pp, ip) => {
                pp._specularTexture = ip
              }
            },
            metadata: ip
          }, sc, Kc), (0, Op.j)(null, null, ti, {
            kind: "field",
            name: "_bumpTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "_bumpTexture" in pp,
              get: pp => pp._bumpTexture,
              set: (pp, ip) => {
                pp._bumpTexture = ip
              }
            },
            metadata: ip
          }, iO, cO), (0, Op.j)(null, null, di, {
            kind: "field",
            name: "_lightmapTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "_lightmapTexture" in pp,
              get: pp => pp._lightmapTexture,
              set: (pp, ip) => {
                pp._lightmapTexture = ip
              }
            },
            metadata: ip
          }, IO, SO), (0, Op.j)(null, null, ui, {
            kind: "field",
            name: "_refractionTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "_refractionTexture" in pp,
              get: pp => pp._refractionTexture,
              set: (pp, ip) => {
                pp._refractionTexture = ip
              }
            },
            metadata: ip
          }, YO, DO), (0, Op.j)(null, null, ki, {
            kind: "field",
            name: "ambientColor",
            static: !1,
            private: !1,
            access: {
              has: pp => "ambientColor" in pp,
              get: pp => pp.ambientColor,
              set: (pp, ip) => {
                pp.ambientColor = ip
              }
            },
            metadata: ip
          }, WO, yO), (0, Op.j)(null, null, mi, {
            kind: "field",
            name: "diffuseColor",
            static: !1,
            private: !1,
            access: {
              has: pp => "diffuseColor" in pp,
              get: pp => pp.diffuseColor,
              set: (pp, ip) => {
                pp.diffuseColor = ip
              }
            },
            metadata: ip
          }, UO, wO), (0, Op.j)(null, null, Ri, {
            kind: "field",
            name: "specularColor",
            static: !1,
            private: !1,
            access: {
              has: pp => "specularColor" in pp,
              get: pp => pp.specularColor,
              set: (pp, ip) => {
                pp.specularColor = ip
              }
            },
            metadata: ip
          }, vO, tO), (0, Op.j)(null, null, qi, {
            kind: "field",
            name: "emissiveColor",
            static: !1,
            private: !1,
            access: {
              has: pp => "emissiveColor" in pp,
              get: pp => pp.emissiveColor,
              set: (pp, ip) => {
                pp.emissiveColor = ip
              }
            },
            metadata: ip
          }, HO, dO), (0, Op.j)(null, null, Mi, {
            kind: "field",
            name: "specularPower",
            static: !1,
            private: !1,
            access: {
              has: pp => "specularPower" in pp,
              get: pp => pp.specularPower,
              set: (pp, ip) => {
                pp.specularPower = ip
              }
            },
            metadata: ip
          }, eO, uO), (0, Op.j)(null, null, Ci, {
            kind: "field",
            name: "_useAlphaFromDiffuseTexture",
            static: !1,
            private: !1,
            access: {
              has: pp => "_useAlphaFromDiffuseTexture" in pp,
              get: pp => pp._useAlphaFromDiffuseTexture,
              set: (pp, ip) => {
                pp._useAlphaFromDiffuseTexture = ip
              }
            },
            metadata: ip
          }, jO, kO), (0, Op.j)(null, null, Xi, {
            kind: "field",
            name: "_useEmissiveAsIllumination",
            static: !1,
            private: !1,
            access: {
              has: pp => "_useEmissiveAsIllumination" in pp,
              get: pp => pp._useEmissiveAsIllumination,
              set: (pp, ip) => {
                pp._useEmissiveAsIllumination = ip
              }
            },
            metadata: ip
          }, qO, MO), (0, Op.j)(null, null, Qi, {
            kind: "field",
            name: "_linkEmissiveWithDiffuse",
            static: !1,
            private: !1,
            access: {
              has: pp => "_linkEmissiveWithDiffuse" in pp,
              get: pp => pp._linkEmissiveWithDiffuse,
              set: (pp, ip) => {
                pp._linkEmissiveWithDiffuse = ip
              }
            },
            metadata: ip
          }, XO, lO), (0, Op.j)(null, null, Bi, {
            kind: "field",
            name: "_useSpecularOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: pp => "_useSpecularOverAlpha" in pp,
              get: pp => pp._useSpecularOverAlpha,
              set: (pp, ip) => {
                pp._useSpecularOverAlpha = ip
              }
            },
            metadata: ip
          }, BO, NO), (0, Op.j)(null, null, Ti, {
            kind: "field",
            name: "_useReflectionOverAlpha",
            static: !1,
            private: !1,
            access: {
              has: pp => "_useReflectionOverAlpha" in pp,
              get: pp => pp._useReflectionOverAlpha,
              set: (pp, ip) => {
                pp._useReflectionOverAlpha = ip
              }
            },
            metadata: ip
          }, bO, hO), (0, Op.j)(null, null, bi, {
            kind: "field",
            name: "_disableLighting",
            static: !1,
            private: !1,
            access: {
              has: pp => "_disableLighting" in pp,
              get: pp => pp._disableLighting,
              set: (pp, ip) => {
                pp._disableLighting = ip
              }
            },
            metadata: ip
          }, FO, gO), (0, Op.j)(null, null, ni, {
            kind: "field",
            name: "_useObjectSpaceNormalMap",
            static: !1,
            private: !1,
            access: {
              has: pp => "_useObjectSpaceNormalMap" in pp,
              get: pp => pp._useObjectSpaceNormalMap,
              set: (pp, ip) => {
                pp._useObjectSpaceNormalMap = ip
              }
            },
            metadata: ip
          }, ZO, zO), (0, Op.j)(null, null, gi, {
            kind: "field",
            name: "_useParallax",
            static: !1,
            private: !1,
            access: {
              has: pp => "_useParallax" in pp,
              get: pp => pp._useParallax,
              set: (pp, ip) => {
                pp._useParallax = ip
              }
            },
            metadata: ip
          }, VO, po), (0, Op.j)(null, null, ri, {
            kind: "field",
            name: "_useParallaxOcclusion",
            static: !1,
            private: !1,
            access: {
              has: pp => "_useParallaxOcclusion" in pp,
              get: pp => pp._useParallaxOcclusion,
              set: (pp, ip) => {
                pp._useParallaxOcclusion = ip
              }
            },
            metadata: ip
          }, Oo, oo), (0, Op.j)(null, null, zi, {
            kind: "field",
            name: "parallaxScaleBias",
            static: !1,
            private: !1,
            access: {
              has: pp => "parallaxScaleBias" in pp,
              get: pp => pp.parallaxScaleBias,
              set: (pp, ip) => {
                pp.parallaxScaleBias = ip
              }
            },
            metadata: ip
          }, xo, Lo), (0, Op.j)(null, null, si, {
            kind: "field",
            name: "_roughness",
            static: !1,
            private: !1,
            access: {
              has: pp => "_roughness" in pp,
              get: pp => pp._roughness,
              set: (pp, ip) => {
                pp._roughness = ip
              }
            },
            metadata: ip
          }, Yo, Do), (0, Op.j)(null, null, Vi, {
            kind: "field",
            name: "indexOfRefraction",
            static: !1,
            private: !1,
            access: {
              has: pp => "indexOfRefraction" in pp,
              get: pp => pp.indexOfRefraction,
              set: (pp, ip) => {
                pp.indexOfRefraction = ip
              }
            },
            metadata: ip
          }, Wo, yo), (0, Op.j)(null, null, pc, {
            kind: "field",
            name: "invertRefractionY",
            static: !1,
            private: !1,
            access: {
              has: pp => "invertRefractionY" in pp,
              get: pp => pp.invertRefractionY,
              set: (pp, ip) => {
                pp.invertRefractionY = ip
              }
            },
            metadata: ip
          }, Uo, wo), (0, Op.j)(null, null, ic, {
            kind: "field",
            name: "alphaCutOff",
            static: !1,
            private: !1,
            access: {
              has: pp => "alphaCutOff" in pp,
              get: pp => pp.alphaCutOff,
              set: (pp, ip) => {
                pp.alphaCutOff = ip
              }
            },
            metadata: ip
          }, vo, to), (0, Op.j)(null, null, cc, {
            kind: "field",
            name: "_useLightmapAsShadowmap",
            static: !1,
            private: !1,
            access: {
              has: pp => "_useLightmapAsShadowmap" in pp,
              get: pp => pp._useLightmapAsShadowmap,
              set: (pp, ip) => {
                pp._useLightmapAsShadowmap = ip
              }
            },
            metadata: ip
          }, Ho, eo), (0, Op.j)(null, null, oc, {
            kind: "field",
            name: "_diffuseFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: pp => "_diffuseFresnelParameters" in pp,
              get: pp => pp._diffuseFresnelParameters,
              set: (pp, ip) => {
                pp._diffuseFresnelParameters = ip
              }
            },
            metadata: ip
          }, ko, mo), (0, Op.j)(null, null, Sc, {
            kind: "field",
            name: "_opacityFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: pp => "_opacityFresnelParameters" in pp,
              get: pp => pp._opacityFresnelParameters,
              set: (pp, ip) => {
                pp._opacityFresnelParameters = ip
              }
            },
            metadata: ip
          }, Mo, Co), (0, Op.j)(null, null, Lc, {
            kind: "field",
            name: "_reflectionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: pp => "_reflectionFresnelParameters" in pp,
              get: pp => pp._reflectionFresnelParameters,
              set: (pp, ip) => {
                pp._reflectionFresnelParameters = ip
              }
            },
            metadata: ip
          }, Qo, Jo), (0, Op.j)(null, null, Dc, {
            kind: "field",
            name: "_refractionFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: pp => "_refractionFresnelParameters" in pp,
              get: pp => pp._refractionFresnelParameters,
              set: (pp, ip) => {
                pp._refractionFresnelParameters = ip
              }
            },
            metadata: ip
          }, To, fo), (0, Op.j)(null, null, Pc, {
            kind: "field",
            name: "_emissiveFresnelParameters",
            static: !1,
            private: !1,
            access: {
              has: pp => "_emissiveFresnelParameters" in pp,
              get: pp => pp._emissiveFresnelParameters,
              set: (pp, ip) => {
                pp._emissiveFresnelParameters = ip
              }
            },
            metadata: ip
          }, ao, no), (0, Op.j)(null, null, yc, {
            kind: "field",
            name: "_useReflectionFresnelFromSpecular",
            static: !1,
            private: !1,
            access: {
              has: pp => "_useReflectionFresnelFromSpecular" in pp,
              get: pp => pp._useReflectionFresnelFromSpecular,
              set: (pp, ip) => {
                pp._useReflectionFresnelFromSpecular = ip
              }
            },
            metadata: ip
          }, Go, ro), (0, Op.j)(null, null, wc, {
            kind: "field",
            name: "_useGlossinessFromSpecularMapAlpha",
            static: !1,
            private: !1,
            access: {
              has: pp => "_useGlossinessFromSpecularMapAlpha" in pp,
              get: pp => pp._useGlossinessFromSpecularMapAlpha,
              set: (pp, ip) => {
                pp._useGlossinessFromSpecularMapAlpha = ip
              }
            },
            metadata: ip
          }, so, Ko), (0, Op.j)(null, null, tc, {
            kind: "field",
            name: "_maxSimultaneousLights",
            static: !1,
            private: !1,
            access: {
              has: pp => "_maxSimultaneousLights" in pp,
              get: pp => pp._maxSimultaneousLights,
              set: (pp, ip) => {
                pp._maxSimultaneousLights = ip
              }
            },
            metadata: ip
          }, iI, cI), (0, Op.j)(null, null, dc, {
            kind: "field",
            name: "_invertNormalMapX",
            static: !1,
            private: !1,
            access: {
              has: pp => "_invertNormalMapX" in pp,
              get: pp => pp._invertNormalMapX,
              set: (pp, ip) => {
                pp._invertNormalMapX = ip
              }
            },
            metadata: ip
          }, II, SI), (0, Op.j)(null, null, uc, {
            kind: "field",
            name: "_invertNormalMapY",
            static: !1,
            private: !1,
            access: {
              has: pp => "_invertNormalMapY" in pp,
              get: pp => pp._invertNormalMapY,
              set: (pp, ip) => {
                pp._invertNormalMapY = ip
              }
            },
            metadata: ip
          }, YI, DI), (0, Op.j)(null, null, kc, {
            kind: "field",
            name: "_twoSidedLighting",
            static: !1,
            private: !1,
            access: {
              has: pp => "_twoSidedLighting" in pp,
              get: pp => pp._twoSidedLighting,
              set: (pp, ip) => {
                pp._twoSidedLighting = ip
              }
            },
            metadata: ip
          }, WI, yI), (0, Op.j)(null, null, Rc, {
            kind: "field",
            name: "_applyDecalMapAfterDetailMap",
            static: !1,
            private: !1,
            access: {
              has: pp => "_applyDecalMapAfterDetailMap" in pp,
              get: pp => pp._applyDecalMapAfterDetailMap,
              set: (pp, ip) => {
                pp._applyDecalMapAfterDetailMap = ip
              }
            },
            metadata: ip
          }, vI, tI), ip && Object.defineProperty(pp, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ip
          })
        })(), pp.ForceGLSL = !1, pp._ShaderLoader = new jp.c((() => [Promise.all([cp.e(322), cp.e(321)]).then((() => cp(42143))), Promise.all([cp.e(327), cp.e(323), cp.e(336), cp.e(326)]).then((() => cp(42350)))]), (() => [Promise.all([cp.e(343), cp.e(338)]).then((() => cp(42492))), Promise.all([cp.e(344), cp.e(354), cp.e(340)]).then((() => cp(42706)))])), pp
      })(),
      Bp = !1;

    function Np() {
      Bp || (Bp = !0, (0, Ap.g)(), (0, Mp.g)("BABYLON.StandardMaterial", Jp), Sp.f.DefaultMaterialFactory = pp => new Jp("default material", pp))
    }
    Object.getOwnPropertyDescriptor(Jp.prototype, "decalMap") || Object.defineProperty(Jp.prototype, "decalMap", (0, Cp.h)("StandardMaterial", "decalMap"))
  },
  40554: (pp, ip, cp) => {
    function Op(pp) {
      return class extends pp {
        constructor() {
          super(...arguments), this.MAINUV1 = !1, this.MAINUV2 = !1, this.MAINUV3 = !1, this.MAINUV4 = !1, this.MAINUV5 = !1, this.MAINUV6 = !1, this.UV1 = !1, this.UV2 = !1, this.UV3 = !1, this.UV4 = !1, this.UV5 = !1, this.UV6 = !1
        }
      }
    }
    cp.d(ip, {
      c: () => Op
    })
  },
  40546: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    class Op {
      constructor(pp, ip) {
        this._webGL = {
          load: pp,
          loaded: !1,
          loadPromise: null
        }, this._webGPU = {
          load: ip,
          loaded: !1,
          loadPromise: null
        }
      }
      getLoadCallback(pp) {
        const ip = 1 === pp ? this._webGPU : this._webGL;
        return ip.loaded ? void 0 : async () => {
          await this._loadAsync(ip)
        }
      }
      async _loadAsync(pp) {
        if (pp.loaded) return;
        let ip = pp.loadPromise;
        const cp = null === ip;
        cp && (ip = Promise.all(pp.load()), pp.loadPromise = ip);
        let Op = !1;
        try {
          await ip, Op = !0
        } finally {
          cp && this._completeLoad(pp, Op)
        }
      }
      _completeLoad(pp, ip) {
        pp.loaded = ip, pp.loadPromise = null
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);