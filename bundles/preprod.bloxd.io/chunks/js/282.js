export const id = 282;
export const ids = [282];
export const modules = {
  41346: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => NU
    });
    var cU = zU(41113),
      yU = zU(41121),
      QU = zU(37819),
      AU = zU(37923),
      FU = zU(41314),
      oU = zU(41228),
      DU = zU(37863),
      EU = zU(41293),
      YU = zU(41134);
    let NU = (() => {
      var UU, XU;
      let zU, NU, IU, pU, aU, tU, gU, kU, GU, BU, ZU, RU, PU, WU = FU.e,
        dU = [],
        LU = [],
        eU = [],
        CU = [],
        wU = [],
        qU = [],
        OU = [],
        SU = [],
        rU = [],
        uU = [],
        fU = [],
        iU = [],
        HU = [],
        MU = [],
        vU = [],
        VU = [],
        sU = [],
        nU = [],
        mU = [],
        lU = [],
        xU = [];
      return UU = class extends WU {
        get range() {
          return this._range
        }
        set range(UU) {
          this._range = UU, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(UU) {
          this._intensityMode = UU, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(UU) {
          this._radius = UU, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, cU.e)(this, XU, "f")
        }
        set renderPriority(UU) {
          (0, cU.f)(this, XU, UU, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(UU) {
          this._shadowEnabled !== UU && (this._shadowEnabled = UU, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(UU) {
          this._includedOnlyMeshes = UU, this._hookArrayForIncludedOnly(UU)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(UU) {
          this._excludedMeshes = UU, this._hookArrayForExcluded(UU)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(UU) {
          this._excludeWithLayerMask = UU, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(UU) {
          this._includeOnlyWithLayerMask = UU, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(UU) {
          this._lightmapMode !== UU && (this._lightmapMode = UU, this._markMeshesAsLightDirty())
        }
        getViewMatrix(UU) {
          return null
        }
        getProjectionMatrix(UU, XU) {
          return null
        }
        constructor(zU, yU, QU) {
          super(zU, yU, !1), this.diffuse = ((0, cU.n)(this, dU), (0, cU.n)(this, LU, new AU.b(1, 1, 1))), this.specular = ((0, cU.n)(this, eU), (0, cU.n)(this, CU, new AU.b(1, 1, 1))), this.falloffType = ((0, cU.n)(this, wU), (0, cU.n)(this, qU, UU.FALLOFF_DEFAULT)), this.intensity = ((0, cU.n)(this, OU), (0, cU.n)(this, SU, 1)), this._range = ((0, cU.n)(this, rU), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = UU.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, cU.n)(this, uU, void 0), XU.set(this, ((0, cU.n)(this, fU), (0, cU.n)(this, iU, 0))), this._shadowEnabled = ((0, cU.n)(this, HU), (0, cU.n)(this, MU, !0)), this._includedOnlyMeshes = (0, cU.n)(this, vU), this._excludeWithLayerMask = (0, cU.n)(this, VU, 0), this._includeOnlyWithLayerMask = ((0, cU.n)(this, sU), (0, cU.n)(this, nU, 0)), this._lightmapMode = ((0, cU.n)(this, mU), (0, cU.n)(this, lU, 0)), this._shadowGenerators = ((0, cU.n)(this, xU), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, QU || this.nS().addLight(this), this._uniformBuffer = new oU.b(this.nS().qp(), void 0, void 0, zU), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], QU || this._resyncMeshes()
        }
        transferTexturesToEffect(UU, XU) {
          return this
        }
        _bindLight(UU, XU, zU, cU) {
          let yU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const QU = UU.toString();
          let FU = !1;
          if (this._uniformBuffer.bindToEffect(zU, "Light" + QU), this._renderId !== XU.getRenderId() || this._lastUseSpecular !== cU || !this._uniformBuffer.useUbo) {
            this._renderId = XU.getRenderId(), this._lastUseSpecular = cU;
            const UU = this.getScaledIntensity();
            this.transferToEffect(zU, QU), this.diffuse.scaleToRef(UU, AU.i.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", AU.i.Color3[0], this.range, QU), cU && (this.specular.scaleToRef(UU, AU.i.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", AU.i.Color3[1], this.radius, QU)), FU = !0
          }
          if (this.transferTexturesToEffect(zU, QU), XU.shadowsEnabled && this.shadowEnabled && yU) {
            const UU = this.getShadowGenerator(XU.activeCamera) ?? this.getShadowGenerator();
            UU && (UU.bindShadowLight(QU, zU), FU = !0)
          }
          FU ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(UU) {
          let XU = "Name: " + this.name;
          if (XU += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let zU = 0; zU < this.animations.length; zU++) XU += ", animation[0]: " + this.animations[zU].toString(UU);
          return XU
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.oR() || this._resyncMeshes()
        }
        YC(UU) {
          super.YC(UU), this._resyncMeshes()
        }
        getShadowGenerator() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(UU) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return QU.q.Zero()
        }
        canAffectMesh(UU) {
          return !UU || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(UU)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(UU)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & UU.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & UU.layerMask)))
        }
        dispose(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const UU = this._shadowGenerators.values();
            for (let XU = UU.next(); !0 !== XU.done; XU = UU.next()) {
              XU.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.nS().stopAnimation(this), this._parentContainer) {
            const UU = this._parentContainer.lights.indexOf(this);
            UU > -1 && this._parentContainer.lights.splice(UU, 1), this._parentContainer = null
          }
          for (const zU of this.nS().meshes) zU._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.nS().removeLight(this), super.dispose(UU, XU)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(XU) {
          let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const cU = UU.GetConstructorFromName(this.getTypeID(), XU, this.nS());
          if (!cU) return null;
          const yU = YU.b.Clone(cU, this);
          return XU && (yU.name = XU), zU && (yU.parent = zU), yU.YC(this.isEnabled()), this.onClonedObservable.notifyObservers(yU), yU
        }
        serialize() {
          const UU = YU.b.Serialize(this);
          if (UU.uniqueId = this.uniqueId, UU.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(UU), this.excludedMeshes.length > 0) {
            UU.excludedMeshesIds = [];
            for (const XU of this.excludedMeshes) UU.excludedMeshesIds.push(XU.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            UU.includedOnlyMeshesIds = [];
            for (const XU of this.includedOnlyMeshes) UU.includedOnlyMeshesIds.push(XU.id)
          }
          return YU.b.AppendSerializedAnimations(this, UU), UU.Qt = this.serializeAnimationRanges(), UU.isEnabled = this.isEnabled(), UU
        }
        static GetConstructorFromName(UU, XU, zU) {
          const cU = FU.e.Construct("Light_Type_" + UU, XU, zU);
          return cU || null
        }
        static Parse(XU, zU) {
          let cU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const yU = UU.GetConstructorFromName(XU.type, XU.name, zU);
          if (!yU) return null;
          const QU = YU.b.Parse(yU, XU, zU, cU);
          if (XU.excludedMeshesIds && (QU._excludedMeshesIds = XU.excludedMeshesIds), XU.includedOnlyMeshesIds && (QU._includedOnlyMeshesIds = XU.includedOnlyMeshesIds), void 0 !== XU.parentId && (QU._waitingParentId = XU.parentId), void 0 !== XU.parentInstanceIndex && (QU._waitingParentInstanceIndex = XU.parentInstanceIndex), void 0 !== XU.falloffType && (QU.falloffType = XU.falloffType), void 0 !== XU.lightmapMode && (QU.lightmapMode = XU.lightmapMode), XU.animations) {
            for (let UU = 0; UU < XU.animations.length; UU++) {
              const zU = XU.animations[UU],
                cU = (0, DU.e)("BABYLON.Animation");
              cU && QU.animations.push(cU.Parse(zU))
            }
            FU.e.ParseAnimationRanges(QU, XU, zU)
          }
          return XU.autoAnimate && zU.beginAnimation(QU, XU.autoAnimateFrom, XU.autoAnimateTo, XU.autoAnimateLoop, XU.autoAnimateSpeed || 1), void 0 !== XU.isEnabled && QU.YC(XU.isEnabled), QU._onParsed(XU, zU, cU), QU
        }
        _onParsed(UU, XU) {}
        _hookArrayForExcluded(UU) {
          var XU = this;
          const zU = UU.push;
          UU.push = function() {
            for (var cU = arguments.length, yU = new Array(cU), QU = 0; QU < cU; QU++) yU[QU] = arguments[QU];
            const AU = zU.apply(UU, yU);
            if (XU._clusteredContainer) return AU;
            for (const UU of yU) UU._resyncLightSource(XU);
            return AU
          };
          const cU = UU.splice;
          UU.splice = (XU, zU) => {
            const yU = cU.call(UU, XU, zU ?? UU.length);
            if (this._clusteredContainer) return yU;
            for (const UU of yU) UU._resyncLightSource(this);
            return yU
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(UU) {
          var XU = this;
          const zU = UU.push;
          UU.push = function() {
            for (var cU = arguments.length, yU = new Array(cU), QU = 0; QU < cU; QU++) yU[QU] = arguments[QU];
            const AU = zU.apply(UU, yU);
            return XU._resyncMeshes(), AU
          };
          const cU = UU.splice;
          UU.splice = (XU, zU) => {
            const yU = cU.call(UU, XU, zU ?? UU.length);
            return this._resyncMeshes(), yU
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const UU of this.nS().meshes) UU._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const UU of this.nS().meshes) - 1 !== UU.lightSources.indexOf(this) && UU._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.nS().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let XU = 0;
          const zU = this.getTypeID();
          let cU = this.intensityMode;
          switch (cU === UU.INTENSITYMODE_AUTOMATIC && (cU = zU === UU.LIGHTTYPEID_DIRECTIONALLIGHT ? UU.INTENSITYMODE_ILLUMINANCE : UU.INTENSITYMODE_LUMINOUSINTENSITY), zU) {
            case UU.LIGHTTYPEID_POINTLIGHT:
            case UU.LIGHTTYPEID_SPOTLIGHT:
              switch (cU) {
                case UU.INTENSITYMODE_LUMINOUSPOWER:
                  XU = 1 / (4 * Math.PI);
                  break;
                case UU.INTENSITYMODE_LUMINOUSINTENSITY:
                  XU = 1;
                  break;
                case UU.INTENSITYMODE_LUMINANCE:
                  XU = this.radius * this.radius
              }
              break;
            case UU.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (cU) {
                case UU.INTENSITYMODE_ILLUMINANCE:
                  XU = 1;
                  break;
                case UU.INTENSITYMODE_LUMINANCE: {
                  let UU = this.radius;
                  UU = Math.max(UU, .001);
                  XU = 2 * Math.PI * (1 - Math.cos(UU));
                  break
                }
              }
              break;
            case UU.LIGHTTYPEID_HEMISPHERICLIGHT:
            case UU.LIGHTTYPEID_RECT_AREALIGHT:
              XU = 1
          }
          return XU
        }
        _reorderLightsInScene() {
          const UU = this.nS();
          0 != this._renderPriority && (UU.requireLightSorting = !0), this.nS().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, XU = new WeakMap, (() => {
        const XU = "function" === typeof Symbol && Symbol.metadata ? Object.create(WU[Symbol.metadata] ?? null) : void 0;
        zU = [(0, yU.m)()], NU = [(0, yU.m)()], IU = [(0, yU.I)()], pU = [(0, yU.I)()], aU = [(0, yU.I)()], tU = [(0, yU.I)()], gU = [(0, yU.I)()], kU = [(0, yU.I)()], GU = [(0, yU.c)("_reorderLightsInScene")], BU = [(0, yU.I)("shadowEnabled")], ZU = [(0, yU.I)("excludeWithLayerMask")], RU = [(0, yU.I)("includeOnlyWithLayerMask")], PU = [(0, yU.I)("lightmapMode")], (0, cU.j)(UU, null, aU, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: UU => "range" in UU,
            get: UU => UU.range
          },
          metadata: XU
        }, null, dU), (0, cU.j)(UU, null, tU, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "intensityMode" in UU,
            get: UU => UU.intensityMode
          },
          metadata: XU
        }, null, dU), (0, cU.j)(UU, null, gU, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: UU => "radius" in UU,
            get: UU => UU.radius
          },
          metadata: XU
        }, null, dU), (0, cU.j)(UU, null, GU, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: UU => "renderPriority" in UU,
            get: UU => UU.renderPriority,
            set: (UU, XU) => {
              UU.renderPriority = XU
            }
          },
          metadata: XU
        }, iU, HU), (0, cU.j)(null, null, zU, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: UU => "diffuse" in UU,
            get: UU => UU.diffuse,
            set: (UU, XU) => {
              UU.diffuse = XU
            }
          },
          metadata: XU
        }, LU, eU), (0, cU.j)(null, null, NU, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: UU => "specular" in UU,
            get: UU => UU.specular,
            set: (UU, XU) => {
              UU.specular = XU
            }
          },
          metadata: XU
        }, CU, wU), (0, cU.j)(null, null, IU, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: UU => "falloffType" in UU,
            get: UU => UU.falloffType,
            set: (UU, XU) => {
              UU.falloffType = XU
            }
          },
          metadata: XU
        }, qU, OU), (0, cU.j)(null, null, pU, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "intensity" in UU,
            get: UU => UU.intensity,
            set: (UU, XU) => {
              UU.intensity = XU
            }
          },
          metadata: XU
        }, SU, rU), (0, cU.j)(null, null, kU, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: UU => "_renderPriority" in UU,
            get: UU => UU._renderPriority,
            set: (UU, XU) => {
              UU._renderPriority = XU
            }
          },
          metadata: XU
        }, uU, fU), (0, cU.j)(null, null, BU, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: UU => "_shadowEnabled" in UU,
            get: UU => UU._shadowEnabled,
            set: (UU, XU) => {
              UU._shadowEnabled = XU
            }
          },
          metadata: XU
        }, MU, vU), (0, cU.j)(null, null, ZU, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: UU => "_excludeWithLayerMask" in UU,
            get: UU => UU._excludeWithLayerMask,
            set: (UU, XU) => {
              UU._excludeWithLayerMask = XU
            }
          },
          metadata: XU
        }, VU, sU), (0, cU.j)(null, null, RU, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: UU => "_includeOnlyWithLayerMask" in UU,
            get: UU => UU._includeOnlyWithLayerMask,
            set: (UU, XU) => {
              UU._includeOnlyWithLayerMask = XU
            }
          },
          metadata: XU
        }, nU, mU), (0, cU.j)(null, null, PU, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: UU => "_lightmapMode" in UU,
            get: UU => UU._lightmapMode,
            set: (UU, XU) => {
              UU._lightmapMode = XU
            }
          },
          metadata: XU
        }, lU, xU), XU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: XU
        })
      })(), UU.FALLOFF_DEFAULT = EU.e.FALLOFF_DEFAULT, UU.FALLOFF_PHYSICAL = EU.e.FALLOFF_PHYSICAL, UU.FALLOFF_GLTF = EU.e.FALLOFF_GLTF, UU.FALLOFF_STANDARD = EU.e.FALLOFF_STANDARD, UU.LIGHTMAP_DEFAULT = EU.e.LIGHTMAP_DEFAULT, UU.LIGHTMAP_SPECULAR = EU.e.LIGHTMAP_SPECULAR, UU.LIGHTMAP_SHADOWSONLY = EU.e.LIGHTMAP_SHADOWSONLY, UU.INTENSITYMODE_AUTOMATIC = EU.e.INTENSITYMODE_AUTOMATIC, UU.INTENSITYMODE_LUMINOUSPOWER = EU.e.INTENSITYMODE_LUMINOUSPOWER, UU.INTENSITYMODE_LUMINOUSINTENSITY = EU.e.INTENSITYMODE_LUMINOUSINTENSITY, UU.INTENSITYMODE_ILLUMINANCE = EU.e.INTENSITYMODE_ILLUMINANCE, UU.INTENSITYMODE_LUMINANCE = EU.e.INTENSITYMODE_LUMINANCE, UU.LIGHTTYPEID_POINTLIGHT = EU.e.LIGHTTYPEID_POINTLIGHT, UU.LIGHTTYPEID_DIRECTIONALLIGHT = EU.e.LIGHTTYPEID_DIRECTIONALLIGHT, UU.LIGHTTYPEID_SPOTLIGHT = EU.e.LIGHTTYPEID_SPOTLIGHT, UU.LIGHTTYPEID_HEMISPHERICLIGHT = EU.e.LIGHTTYPEID_HEMISPHERICLIGHT, UU.LIGHTTYPEID_RECT_AREALIGHT = EU.e.LIGHTTYPEID_RECT_AREALIGHT, UU
    })()
  },
  41314: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => YU
    });
    var cU = zU(41113),
      yU = zU(37819),
      QU = zU(41121),
      AU = zU(37846),
      FU = zU(37841),
      oU = zU(40989),
      DU = zU(41134);
    class EU {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new AU.e, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new AU.e, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let YU = (() => {
      var UU;
      let XU, zU, YU, NU, IU, pU = [],
        aU = [],
        tU = [],
        gU = [],
        kU = [],
        GU = [],
        BU = [],
        ZU = [],
        RU = [],
        PU = [];
      return UU = class {
        static AddNodeConstructor(UU, XU) {
          this._NodeConstructors[UU] = XU
        }
        static Construct(UU, XU, zU, cU) {
          const yU = this._NodeConstructors[UU];
          return yU ? yU(XU, zU, cU) : null
        }
        set accessibilityTag(UU) {
          this._accessibilityTag = UU, this.onAccessibilityTagChangedObservable.notifyObservers(UU)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(UU) {
          this._nodeDataStorage._doNotSerialize = UU
        }
        oR() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(UU) {
          if (this._parentNode === UU) return;
          const XU = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const XU = this._parentNode._children.indexOf(this); - 1 !== XU && this._parentNode._children.splice(XU, 1), UU || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = UU, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), XU || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(UU) {
          this._nodeDataStorage._inheritVisibility = UU
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(UU) {
          this._nodeDataStorage._isVisible = UU
        }
        _serializeAsParent(UU) {
          UU.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const UU = this._scene.rootNodes,
              XU = UU.length - 1;
            UU[this._nodeDataStorage._sceneRootNodesIndex] = UU[XU], UU[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(UU) {
          this._animationPropertiesOverride = UU
        }
        getClassName() {
          return "Node"
        }
        set onDispose(UU) {
          this._onDisposeObserver && this.bS.remove(this._onDisposeObserver), this._onDisposeObserver = this.bS.add(UU)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var UU;
          return (UU = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (UU._onEffectiveEnabledStateChangedObservable = new AU.e)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            zU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new EU, this.name = (0, cU.n)(this, pU, void 0), this.id = ((0, cU.n)(this, aU), (0, cU.n)(this, tU, void 0)), this.uniqueId = ((0, cU.n)(this, gU), (0, cU.n)(this, kU, void 0)), this.state = ((0, cU.n)(this, GU), (0, cU.n)(this, BU, "")), this.metadata = ((0, cU.n)(this, ZU), (0, cU.n)(this, RU, null)), this._internalMetadata = (0, cU.n)(this, PU), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new AU.e, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = yU.e.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.bS = new AU.e, this._onDisposeObserver = null, this._behaviors = new Array, this.name = UU, this.id = UU, this._scene = XU || FU.b.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), zU && this._addToSceneRootNodes()
        }
        nS() {
          return this._scene
        }
        qp() {
          return this._scene.qp()
        }
        addBehavior(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(UU) || (UU.init(), this._scene.isLoading && !XU ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(UU) && UU.attach(this)
          })) : UU.attach(this), this._behaviors.push(UU)), this
        }
        removeBehavior(UU) {
          const XU = this._behaviors.indexOf(UU);
          return -1 === XU || (this._behaviors.splice(XU, 1), UU.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(UU) {
          for (const XU of this._behaviors)
            if (XU.name === UU) return XU;
          return null
        }
        getWorldMatrix() {
          return this._currentRenderId !== this._scene.getRenderId() && this.computeWorldMatrix(), this._worldMatrix
        }
        _getWorldMatrixDeterminant() {
          return this._worldMatrixDeterminantIsDirty && (this._worldMatrixDeterminantIsDirty = !1, this._worldMatrixDeterminant = this._worldMatrix.determinant()), this._worldMatrixDeterminant
        }
        get worldMatrixFromCache() {
          return this._worldMatrix
        }
        _initCache() {
          this._cache = {}
        }
        updateCache(UU) {
          !UU && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(UU) {
          return this.parent ? this.parent._getActionManagerForTrigger(UU, !1) : null
        }
        _updateCache(UU) {}
        _isSynchronized() {
          return !0
        }
        _markSyncedWithParent() {
          this._parentNode && (this._parentUpdateId = this._parentNode._childUpdateId)
        }
        isSynchronizedWithParent() {
          return !this._parentNode || !this._parentNode._isDirty && this._parentUpdateId === this._parentNode._childUpdateId && this._parentNode.isSynchronized()
        }
        isSynchronized() {
          return !(this._parentNode && !this.isSynchronizedWithParent()) && this._isSynchronized()
        }
        isReady() {
          return this._nodeDataStorage._isReady
        }
        OzU(UU) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const UU = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!UU && UU.hasObservers()
        }
        _syncParentEnabledState() {
          const UU = this._hasEffectiveEnabledStateObservers(),
            XU = UU ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const zU of this._children) zU._syncParentEnabledState();
          if (UU) {
            const UU = this.isEnabled();
            UU !== XU && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(UU)
          }
        }
        YC(UU) {
          if (this._nodeDataStorage._isEnabled === UU) return;
          const XU = this._hasEffectiveEnabledStateObservers(),
            zU = XU ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = UU, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(UU), XU) {
            const UU = this.isEnabled();
            UU !== zU && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(UU)
          }
        }
        isDescendantOf(UU) {
          return !!this.parent && (this.parent === UU || this.parent.isDescendantOf(UU))
        }
        _getDescendants(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            zU = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let cU = 0; cU < this._children.length; cU++) {
              const yU = this._children[cU];
              zU && !zU(yU) || UU.push(yU), XU || yU._getDescendants(UU, !1, zU)
            }
        }
        getDescendants(UU, XU) {
          const zU = [];
          return this._getDescendants(zU, UU, XU), zU
        }
        getChildMeshes(UU, XU) {
          const zU = [];
          return this._getDescendants(zU, UU, (UU => (!XU || XU(UU)) && void 0 !== UU.cullingStrategy)), zU
        }
        getChildren(UU) {
          let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(XU, UU)
        }
        _setReady(UU) {
          UU !== this._nodeDataStorage._isReady && (UU ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(UU) {
          for (let XU = 0; XU < this.animations.length; XU++) {
            const zU = this.animations[XU];
            if (zU.name === UU) return zU
          }
          return null
        }
        createAnimationRange(XU, zU, cU) {
          if (!this._ranges[XU]) {
            this._ranges[XU] = UU._AnimationRangeFactory(XU, zU, cU);
            for (let UU = 0, yU = this.animations.length; UU < yU; UU++) this.animations[UU] && this.animations[UU].createRange(XU, zU, cU)
          }
        }
        deleteAnimationRange(UU) {
          let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let zU = 0, cU = this.animations.length; zU < cU; zU++) this.animations[zU] && this.animations[zU].deleteRange(UU, XU);
          this._ranges[UU] = null
        }
        getAnimationRange(UU) {
          return this._ranges[UU] || null
        }
        clone(XU, zU, cU) {
          const yU = DU.b.Clone((() => new UU(XU, this.nS())), this);
          if (zU && (yU.parent = zU), !cU) {
            const UU = this.getDescendants(!0);
            for (let zU = 0; zU < UU.length; zU++) {
              const cU = UU[zU];
              cU.clone(XU + "." + cU.name, yU)
            }
          }
          return yU
        }
        getAnimationRanges() {
          const UU = [];
          let XU;
          for (XU in this._ranges) UU.push(this._ranges[XU]);
          return UU
        }
        beginAnimation(UU, XU, zU, cU) {
          const yU = this.getAnimationRange(UU);
          return yU ? this._scene.beginAnimation(this, yU.from, yU.to, XU, zU, cU) : null
        }
        serializeAnimationRanges() {
          const UU = [];
          for (const XU in this._ranges) {
            const zU = this._ranges[XU];
            if (!zU) continue;
            const cU = {};
            cU.name = XU, cU.from = zU.from, cU.to = zU.to, UU.push(cU)
          }
          return UU
        }
        computeWorldMatrix(UU) {
          return this._worldMatrix || (this._worldMatrix = yU.e.Identity()), this._worldMatrix
        }
        dispose(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !UU) {
            const zU = this.getDescendants(!0);
            for (const cU of zU) cU.dispose(UU, XU)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.bS.notifyObservers(this), this.bS.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const zU of this._behaviors) zU.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(UU, XU, zU) {
          if (XU.Qt)
            for (let cU = 0; cU < XU.Qt.length; cU++) {
              const zU = XU.Qt[cU];
              UU.createAnimationRange(zU.name, zU.from, zU.to)
            }
        }
        getHierarchyBoundingVectors() {
          let UU, XU, zU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            cU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.nS().incrementRenderId(), this.computeWorldMatrix(!0);
          const QU = this;
          if (QU.gM && QU.uB) {
            const zU = QU.gM();
            UU = zU.boundingBox.minimumWorld.clone(), XU = zU.boundingBox.maximumWorld.clone()
          } else UU = new yU.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), XU = new yU.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (zU) {
            const zU = this.getDescendants(!1);
            for (const QU of zU) {
              const zU = QU;
              if (zU.computeWorldMatrix(!0), cU && !cU(zU)) continue;
              if (!zU.gM || 0 === zU.getTotalVertices()) continue;
              const AU = zU.gM().boundingBox,
                FU = AU.minimumWorld,
                oU = AU.maximumWorld;
              yU.q.CheckExtends(FU, UU, XU), yU.q.CheckExtends(oU, UU, XU)
            }
          }
          return {
            min: UU,
            max: XU
          }
        }
      }, (() => {
        const yU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        XU = [(0, QU.I)()], zU = [(0, QU.I)()], YU = [(0, QU.I)()], NU = [(0, QU.I)()], IU = [(0, QU.I)()], (0, cU.j)(null, null, XU, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: UU => "name" in UU,
            get: UU => UU.name,
            set: (UU, XU) => {
              UU.name = XU
            }
          },
          metadata: yU
        }, pU, aU), (0, cU.j)(null, null, zU, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: UU => "id" in UU,
            get: UU => UU.id,
            set: (UU, XU) => {
              UU.id = XU
            }
          },
          metadata: yU
        }, tU, gU), (0, cU.j)(null, null, YU, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: UU => "uniqueId" in UU,
            get: UU => UU.uniqueId,
            set: (UU, XU) => {
              UU.uniqueId = XU
            }
          },
          metadata: yU
        }, kU, GU), (0, cU.j)(null, null, NU, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: UU => "state" in UU,
            get: UU => UU.state,
            set: (UU, XU) => {
              UU.state = XU
            }
          },
          metadata: yU
        }, BU, ZU), (0, cU.j)(null, null, IU, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: UU => "metadata" in UU,
            get: UU => UU.metadata,
            set: (UU, XU) => {
              UU.metadata = XU
            }
          },
          metadata: yU
        }, RU, PU), yU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: yU
        })
      })(), UU._AnimationRangeFactory = (UU, XU, zU) => {
        throw (0, oU.m)("AnimationRange")
      }, UU._NodeConstructors = {}, UU
    })()
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);