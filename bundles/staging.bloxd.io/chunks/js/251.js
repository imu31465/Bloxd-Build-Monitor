export const id = 251;
export const ids = [251];
export const modules = {
  39883: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => CT
    });
    var lT = cT(39620),
      MT = cT(39624),
      KT = cT(36892),
      OT = cT(37093),
      yT = cT(39846),
      fT = cT(39770),
      xT = cT(36949),
      IT = cT(39829),
      AT = cT(39645);
    let CT = (() => {
      var TT, kT;
      let cT, CT, jT, vT, tT, hT, NT, QT, ST, DT, aT, FT, rT, PT = yT.b,
        wT = [],
        mT = [],
        bT = [],
        zT = [],
        JT = [],
        oT = [],
        HT = [],
        eT = [],
        GT = [],
        VT = [],
        ET = [],
        ZT = [],
        uT = [],
        XT = [],
        dT = [],
        LT = [],
        RT = [],
        gT = [],
        UT = [],
        YT = [],
        BT = [];
      return TT = class extends PT {
        get range() {
          return this._range
        }
        set range(TT) {
          this._range = TT, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(TT) {
          this._intensityMode = TT, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(TT) {
          this._radius = TT, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, lT.b)(this, kT, "f")
        }
        set renderPriority(TT) {
          (0, lT.d)(this, kT, TT, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(TT) {
          this._shadowEnabled !== TT && (this._shadowEnabled = TT, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(TT) {
          this._includedOnlyMeshes = TT, this._hookArrayForIncludedOnly(TT)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(TT) {
          this._excludedMeshes = TT, this._hookArrayForExcluded(TT)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(TT) {
          this._excludeWithLayerMask = TT, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(TT) {
          this._includeOnlyWithLayerMask = TT, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(TT) {
          this._lightmapMode !== TT && (this._lightmapMode = TT, this._markMeshesAsLightDirty())
        }
        getViewMatrix(TT) {
          return null
        }
        getProjectionMatrix(TT, kT) {
          return null
        }
        constructor(cT, MT, KT) {
          super(cT, MT, !1), this.diffuse = ((0, lT.h)(this, wT), (0, lT.h)(this, mT, new OT.c(1, 1, 1))), this.specular = ((0, lT.h)(this, bT), (0, lT.h)(this, zT, new OT.c(1, 1, 1))), this.falloffType = ((0, lT.h)(this, JT), (0, lT.h)(this, oT, TT.FALLOFF_DEFAULT)), this.intensity = ((0, lT.h)(this, HT), (0, lT.h)(this, eT, 1)), this._range = ((0, lT.h)(this, GT), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = TT.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, lT.h)(this, VT, void 0), kT.set(this, ((0, lT.h)(this, ET), (0, lT.h)(this, ZT, 0))), this._shadowEnabled = ((0, lT.h)(this, uT), (0, lT.h)(this, XT, !0)), this._includedOnlyMeshes = (0, lT.h)(this, dT), this._excludeWithLayerMask = (0, lT.h)(this, LT, 0), this._includeOnlyWithLayerMask = ((0, lT.h)(this, RT), (0, lT.h)(this, gT, 0)), this._lightmapMode = ((0, lT.h)(this, UT), (0, lT.h)(this, YT, 0)), this._shadowGenerators = ((0, lT.h)(this, BT), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, KT || this.NJ().addLight(this), this._uniformBuffer = new fT.b(this.NJ().Dv(), void 0, void 0, cT), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], KT || this._resyncMeshes()
        }
        transferTexturesToEffect(TT, kT) {
          return this
        }
        _bindLight(TT, kT, cT, lT) {
          let MT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const KT = TT.toString();
          let yT = !1;
          if (this._uniformBuffer.bindToEffect(cT, "Light" + KT), this._renderId !== kT.getRenderId() || this._lastUseSpecular !== lT || !this._uniformBuffer.useUbo) {
            this._renderId = kT.getRenderId(), this._lastUseSpecular = lT;
            const TT = this.getScaledIntensity();
            this.transferToEffect(cT, KT), this.diffuse.scaleToRef(TT, OT.k.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", OT.k.Color3[0], this.range, KT), lT && (this.specular.scaleToRef(TT, OT.k.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", OT.k.Color3[1], this.radius, KT)), yT = !0
          }
          if (this.transferTexturesToEffect(cT, KT), kT.shadowsEnabled && this.shadowEnabled && MT) {
            const TT = this.getShadowGenerator(kT.activeCamera) ?? this.getShadowGenerator();
            TT && (TT.bindShadowLight(KT, cT), yT = !0)
          }
          yT ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(TT) {
          let kT = "Name: " + this.name;
          if (kT += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let cT = 0; cT < this.animations.length; cT++) kT += ", animation[0]: " + this.animations[cT].toString(TT);
          return kT
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.VkT() || this._resyncMeshes()
        }
        PD(TT) {
          super.PD(TT), this._resyncMeshes()
        }
        getShadowGenerator() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(TT) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return KT.m.Zero()
        }
        canAffectMesh(TT) {
          return !TT || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(TT)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(TT)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & TT.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & TT.layerMask)))
        }
        dispose(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const TT = this._shadowGenerators.values();
            for (let kT = TT.next(); !0 !== kT.done; kT = TT.next()) {
              kT.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.NJ().stopAnimation(this), this._parentContainer) {
            const TT = this._parentContainer.lights.indexOf(this);
            TT > -1 && this._parentContainer.lights.splice(TT, 1), this._parentContainer = null
          }
          for (const cT of this.NJ().meshes) cT._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.NJ().removeLight(this), super.dispose(TT, kT)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(kT) {
          let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const lT = TT.GetConstructorFromName(this.getTypeID(), kT, this.NJ());
          if (!lT) return null;
          const MT = AT.d.Clone(lT, this);
          return kT && (MT.name = kT), cT && (MT.parent = cT), MT.PD(this.isEnabled()), this.onClonedObservable.notifyObservers(MT), MT
        }
        serialize() {
          const TT = AT.d.Serialize(this);
          if (TT.uniqueId = this.uniqueId, TT.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(TT), this.excludedMeshes.length > 0) {
            TT.excludedMeshesIds = [];
            for (const kT of this.excludedMeshes) TT.excludedMeshesIds.push(kT.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            TT.includedOnlyMeshesIds = [];
            for (const kT of this.includedOnlyMeshes) TT.includedOnlyMeshesIds.push(kT.id)
          }
          return AT.d.AppendSerializedAnimations(this, TT), TT.qt = this.serializeAnimationRanges(), TT.isEnabled = this.isEnabled(), TT
        }
        static GetConstructorFromName(TT, kT, cT) {
          const lT = yT.b.Construct("Light_Type_" + TT, kT, cT);
          return lT || null
        }
        static Parse(kT, cT) {
          let lT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const MT = TT.GetConstructorFromName(kT.type, kT.name, cT);
          if (!MT) return null;
          const KT = AT.d.Parse(MT, kT, cT, lT);
          if (kT.excludedMeshesIds && (KT._excludedMeshesIds = kT.excludedMeshesIds), kT.includedOnlyMeshesIds && (KT._includedOnlyMeshesIds = kT.includedOnlyMeshesIds), void 0 !== kT.parentId && (KT._waitingParentId = kT.parentId), void 0 !== kT.parentInstanceIndex && (KT._waitingParentInstanceIndex = kT.parentInstanceIndex), void 0 !== kT.falloffType && (KT.falloffType = kT.falloffType), void 0 !== kT.lightmapMode && (KT.lightmapMode = kT.lightmapMode), kT.animations) {
            for (let TT = 0; TT < kT.animations.length; TT++) {
              const cT = kT.animations[TT],
                lT = (0, xT.e)("BABYLON.Animation");
              lT && KT.animations.push(lT.Parse(cT))
            }
            yT.b.ParseAnimationRanges(KT, kT, cT)
          }
          return kT.autoAnimate && cT.beginAnimation(KT, kT.autoAnimateFrom, kT.autoAnimateTo, kT.autoAnimateLoop, kT.autoAnimateSpeed || 1), void 0 !== kT.isEnabled && KT.PD(kT.isEnabled), KT._onParsed(kT, cT, lT), KT
        }
        _onParsed(TT, kT) {}
        _hookArrayForExcluded(TT) {
          var kT = this;
          const cT = TT.push;
          TT.push = function() {
            for (var lT = arguments.length, MT = new Array(lT), KT = 0; KT < lT; KT++) MT[KT] = arguments[KT];
            const OT = cT.apply(TT, MT);
            if (kT._clusteredContainer) return OT;
            for (const TT of MT) TT._resyncLightSource(kT);
            return OT
          };
          const lT = TT.splice;
          TT.splice = (kT, cT) => {
            const MT = lT.call(TT, kT, cT ?? TT.length);
            if (this._clusteredContainer) return MT;
            for (const TT of MT) TT._resyncLightSource(this);
            return MT
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(TT) {
          var kT = this;
          const cT = TT.push;
          TT.push = function() {
            for (var lT = arguments.length, MT = new Array(lT), KT = 0; KT < lT; KT++) MT[KT] = arguments[KT];
            const OT = cT.apply(TT, MT);
            return kT._resyncMeshes(), OT
          };
          const lT = TT.splice;
          TT.splice = (kT, cT) => {
            const MT = lT.call(TT, kT, cT ?? TT.length);
            return this._resyncMeshes(), MT
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const TT of this.NJ().meshes) TT._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const TT of this.NJ().meshes) - 1 !== TT.lightSources.indexOf(this) && TT._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.NJ().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let kT = 0;
          const cT = this.getTypeID();
          let lT = this.intensityMode;
          switch (lT === TT.INTENSITYMODE_AUTOMATIC && (lT = cT === TT.LIGHTTYPEID_DIRECTIONALLIGHT ? TT.INTENSITYMODE_ILLUMINANCE : TT.INTENSITYMODE_LUMINOUSINTENSITY), cT) {
            case TT.LIGHTTYPEID_POINTLIGHT:
            case TT.LIGHTTYPEID_SPOTLIGHT:
              switch (lT) {
                case TT.INTENSITYMODE_LUMINOUSPOWER:
                  kT = 1 / (4 * Math.PI);
                  break;
                case TT.INTENSITYMODE_LUMINOUSINTENSITY:
                  kT = 1;
                  break;
                case TT.INTENSITYMODE_LUMINANCE:
                  kT = this.radius * this.radius
              }
              break;
            case TT.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (lT) {
                case TT.INTENSITYMODE_ILLUMINANCE:
                  kT = 1;
                  break;
                case TT.INTENSITYMODE_LUMINANCE: {
                  let TT = this.radius;
                  TT = Math.max(TT, .001);
                  kT = 2 * Math.PI * (1 - Math.cos(TT));
                  break
                }
              }
              break;
            case TT.LIGHTTYPEID_HEMISPHERICLIGHT:
            case TT.LIGHTTYPEID_RECT_AREALIGHT:
              kT = 1
          }
          return kT
        }
        _reorderLightsInScene() {
          const TT = this.NJ();
          0 != this._renderPriority && (TT.requireLightSorting = !0), this.NJ().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, kT = new WeakMap, (() => {
        const kT = "function" === typeof Symbol && Symbol.metadata ? Object.create(PT[Symbol.metadata] ?? null) : void 0;
        cT = [(0, MT.m)()], CT = [(0, MT.m)()], jT = [(0, MT.J)()], vT = [(0, MT.J)()], tT = [(0, MT.J)()], hT = [(0, MT.J)()], NT = [(0, MT.J)()], QT = [(0, MT.J)()], ST = [(0, MT.c)("_reorderLightsInScene")], DT = [(0, MT.J)("shadowEnabled")], aT = [(0, MT.J)("excludeWithLayerMask")], FT = [(0, MT.J)("includeOnlyWithLayerMask")], rT = [(0, MT.J)("lightmapMode")], (0, lT.e)(TT, null, tT, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: TT => "range" in TT,
            get: TT => TT.range
          },
          metadata: kT
        }, null, wT), (0, lT.e)(TT, null, hT, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensityMode" in TT,
            get: TT => TT.intensityMode
          },
          metadata: kT
        }, null, wT), (0, lT.e)(TT, null, NT, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: TT => "radius" in TT,
            get: TT => TT.radius
          },
          metadata: kT
        }, null, wT), (0, lT.e)(TT, null, ST, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: TT => "renderPriority" in TT,
            get: TT => TT.renderPriority,
            set: (TT, kT) => {
              TT.renderPriority = kT
            }
          },
          metadata: kT
        }, ZT, uT), (0, lT.e)(null, null, cT, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: TT => "diffuse" in TT,
            get: TT => TT.diffuse,
            set: (TT, kT) => {
              TT.diffuse = kT
            }
          },
          metadata: kT
        }, mT, bT), (0, lT.e)(null, null, CT, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: TT => "specular" in TT,
            get: TT => TT.specular,
            set: (TT, kT) => {
              TT.specular = kT
            }
          },
          metadata: kT
        }, zT, JT), (0, lT.e)(null, null, jT, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: TT => "falloffType" in TT,
            get: TT => TT.falloffType,
            set: (TT, kT) => {
              TT.falloffType = kT
            }
          },
          metadata: kT
        }, oT, HT), (0, lT.e)(null, null, vT, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensity" in TT,
            get: TT => TT.intensity,
            set: (TT, kT) => {
              TT.intensity = kT
            }
          },
          metadata: kT
        }, eT, GT), (0, lT.e)(null, null, QT, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: TT => "_renderPriority" in TT,
            get: TT => TT._renderPriority,
            set: (TT, kT) => {
              TT._renderPriority = kT
            }
          },
          metadata: kT
        }, VT, ET), (0, lT.e)(null, null, DT, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "_shadowEnabled" in TT,
            get: TT => TT._shadowEnabled,
            set: (TT, kT) => {
              TT._shadowEnabled = kT
            }
          },
          metadata: kT
        }, XT, dT), (0, lT.e)(null, null, aT, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: TT => "_excludeWithLayerMask" in TT,
            get: TT => TT._excludeWithLayerMask,
            set: (TT, kT) => {
              TT._excludeWithLayerMask = kT
            }
          },
          metadata: kT
        }, LT, RT), (0, lT.e)(null, null, FT, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: TT => "_includeOnlyWithLayerMask" in TT,
            get: TT => TT._includeOnlyWithLayerMask,
            set: (TT, kT) => {
              TT._includeOnlyWithLayerMask = kT
            }
          },
          metadata: kT
        }, gT, UT), (0, lT.e)(null, null, rT, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "_lightmapMode" in TT,
            get: TT => TT._lightmapMode,
            set: (TT, kT) => {
              TT._lightmapMode = kT
            }
          },
          metadata: kT
        }, YT, BT), kT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: kT
        })
      })(), TT.FALLOFF_DEFAULT = IT.b.FALLOFF_DEFAULT, TT.FALLOFF_PHYSICAL = IT.b.FALLOFF_PHYSICAL, TT.FALLOFF_GLTF = IT.b.FALLOFF_GLTF, TT.FALLOFF_STANDARD = IT.b.FALLOFF_STANDARD, TT.LIGHTMAP_DEFAULT = IT.b.LIGHTMAP_DEFAULT, TT.LIGHTMAP_SPECULAR = IT.b.LIGHTMAP_SPECULAR, TT.LIGHTMAP_SHADOWSONLY = IT.b.LIGHTMAP_SHADOWSONLY, TT.INTENSITYMODE_AUTOMATIC = IT.b.INTENSITYMODE_AUTOMATIC, TT.INTENSITYMODE_LUMINOUSPOWER = IT.b.INTENSITYMODE_LUMINOUSPOWER, TT.INTENSITYMODE_LUMINOUSINTENSITY = IT.b.INTENSITYMODE_LUMINOUSINTENSITY, TT.INTENSITYMODE_ILLUMINANCE = IT.b.INTENSITYMODE_ILLUMINANCE, TT.INTENSITYMODE_LUMINANCE = IT.b.INTENSITYMODE_LUMINANCE, TT.LIGHTTYPEID_POINTLIGHT = IT.b.LIGHTTYPEID_POINTLIGHT, TT.LIGHTTYPEID_DIRECTIONALLIGHT = IT.b.LIGHTTYPEID_DIRECTIONALLIGHT, TT.LIGHTTYPEID_SPOTLIGHT = IT.b.LIGHTTYPEID_SPOTLIGHT, TT.LIGHTTYPEID_HEMISPHERICLIGHT = IT.b.LIGHTTYPEID_HEMISPHERICLIGHT, TT.LIGHTTYPEID_RECT_AREALIGHT = IT.b.LIGHTTYPEID_RECT_AREALIGHT, TT
    })()
  },
  39846: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => AT
    });
    var lT = cT(39620),
      MT = cT(36892),
      KT = cT(39624),
      OT = cT(36932),
      yT = cT(36925),
      fT = cT(39500),
      xT = cT(39645);
    class IT {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new OT.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new OT.b, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let AT = (() => {
      var TT;
      let kT, cT, AT, CT, jT, vT = [],
        tT = [],
        hT = [],
        NT = [],
        QT = [],
        ST = [],
        DT = [],
        aT = [],
        FT = [],
        rT = [];
      return TT = class {
        static AddNodeConstructor(TT, kT) {
          this._NodeConstructors[TT] = kT
        }
        static Construct(TT, kT, cT, lT) {
          const MT = this._NodeConstructors[TT];
          return MT ? MT(kT, cT, lT) : null
        }
        set accessibilityTag(TT) {
          this._accessibilityTag = TT, this.onAccessibilityTagChangedObservable.notifyObservers(TT)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(TT) {
          this._nodeDataStorage._doNotSerialize = TT
        }
        VkT() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(TT) {
          if (this._parentNode === TT) return;
          const kT = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const kT = this._parentNode._children.indexOf(this); - 1 !== kT && this._parentNode._children.splice(kT, 1), TT || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = TT, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), kT || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(TT) {
          this._nodeDataStorage._inheritVisibility = TT
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(TT) {
          this._nodeDataStorage._isVisible = TT
        }
        _serializeAsParent(TT) {
          TT.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const TT = this._scene.rootNodes,
              kT = TT.length - 1;
            TT[this._nodeDataStorage._sceneRootNodesIndex] = TT[kT], TT[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(TT) {
          this._animationPropertiesOverride = TT
        }
        getClassName() {
          return "Node"
        }
        set onDispose(TT) {
          this._onDisposeObserver && this.QJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.QJ.add(TT)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var TT;
          return (TT = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (TT._onEffectiveEnabledStateChangedObservable = new OT.b)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            cT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new IT, this.name = (0, lT.h)(this, vT, void 0), this.id = ((0, lT.h)(this, tT), (0, lT.h)(this, hT, void 0)), this.uniqueId = ((0, lT.h)(this, NT), (0, lT.h)(this, QT, void 0)), this.state = ((0, lT.h)(this, ST), (0, lT.h)(this, DT, "")), this.metadata = ((0, lT.h)(this, aT), (0, lT.h)(this, FT, null)), this._internalMetadata = (0, lT.h)(this, rT), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new OT.b, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = MT.d.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.QJ = new OT.b, this._onDisposeObserver = null, this._behaviors = new Array, this.name = TT, this.id = TT, this._scene = kT || yT.d.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), cT && this._addToSceneRootNodes()
        }
        NJ() {
          return this._scene
        }
        Dv() {
          return this._scene.Dv()
        }
        addBehavior(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(TT) || (TT.init(), this._scene.isLoading && !kT ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(TT) && TT.attach(this)
          })) : TT.attach(this), this._behaviors.push(TT)), this
        }
        removeBehavior(TT) {
          const kT = this._behaviors.indexOf(TT);
          return -1 === kT || (this._behaviors.splice(kT, 1), TT.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(TT) {
          for (const kT of this._behaviors)
            if (kT.name === TT) return kT;
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
        updateCache(TT) {
          !TT && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(TT) {
          return this.parent ? this.parent._getActionManagerForTrigger(TT, !1) : null
        }
        _updateCache(TT) {}
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
        pTT(TT) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const TT = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!TT && TT.hasObservers()
        }
        _syncParentEnabledState() {
          const TT = this._hasEffectiveEnabledStateObservers(),
            kT = TT ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const cT of this._children) cT._syncParentEnabledState();
          if (TT) {
            const TT = this.isEnabled();
            TT !== kT && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(TT)
          }
        }
        PD(TT) {
          if (this._nodeDataStorage._isEnabled === TT) return;
          const kT = this._hasEffectiveEnabledStateObservers(),
            cT = kT ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = TT, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(TT), kT) {
            const TT = this.isEnabled();
            TT !== cT && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(TT)
          }
        }
        isDescendantOf(TT) {
          return !!this.parent && (this.parent === TT || this.parent.isDescendantOf(TT))
        }
        _getDescendants(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            cT = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let lT = 0; lT < this._children.length; lT++) {
              const MT = this._children[lT];
              cT && !cT(MT) || TT.push(MT), kT || MT._getDescendants(TT, !1, cT)
            }
        }
        getDescendants(TT, kT) {
          const cT = [];
          return this._getDescendants(cT, TT, kT), cT
        }
        getChildMeshes(TT, kT) {
          const cT = [];
          return this._getDescendants(cT, TT, (TT => (!kT || kT(TT)) && void 0 !== TT.cullingStrategy)), cT
        }
        getChildren(TT) {
          let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(kT, TT)
        }
        _setReady(TT) {
          TT !== this._nodeDataStorage._isReady && (TT ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(TT) {
          for (let kT = 0; kT < this.animations.length; kT++) {
            const cT = this.animations[kT];
            if (cT.name === TT) return cT
          }
          return null
        }
        createAnimationRange(kT, cT, lT) {
          if (!this._ranges[kT]) {
            this._ranges[kT] = TT._AnimationRangeFactory(kT, cT, lT);
            for (let TT = 0, MT = this.animations.length; TT < MT; TT++) this.animations[TT] && this.animations[TT].createRange(kT, cT, lT)
          }
        }
        deleteAnimationRange(TT) {
          let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let cT = 0, lT = this.animations.length; cT < lT; cT++) this.animations[cT] && this.animations[cT].deleteRange(TT, kT);
          this._ranges[TT] = null
        }
        getAnimationRange(TT) {
          return this._ranges[TT] || null
        }
        clone(kT, cT, lT) {
          const MT = xT.d.Clone((() => new TT(kT, this.NJ())), this);
          if (cT && (MT.parent = cT), !lT) {
            const TT = this.getDescendants(!0);
            for (let cT = 0; cT < TT.length; cT++) {
              const lT = TT[cT];
              lT.clone(kT + "." + lT.name, MT)
            }
          }
          return MT
        }
        getAnimationRanges() {
          const TT = [];
          let kT;
          for (kT in this._ranges) TT.push(this._ranges[kT]);
          return TT
        }
        beginAnimation(TT, kT, cT, lT) {
          const MT = this.getAnimationRange(TT);
          return MT ? this._scene.beginAnimation(this, MT.from, MT.to, kT, cT, lT) : null
        }
        serializeAnimationRanges() {
          const TT = [];
          for (const kT in this._ranges) {
            const cT = this._ranges[kT];
            if (!cT) continue;
            const lT = {};
            lT.name = kT, lT.from = cT.from, lT.to = cT.to, TT.push(lT)
          }
          return TT
        }
        computeWorldMatrix(TT) {
          return this._worldMatrix || (this._worldMatrix = MT.d.Identity()), this._worldMatrix
        }
        dispose(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !TT) {
            const cT = this.getDescendants(!0);
            for (const lT of cT) lT.dispose(TT, kT)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.QJ.notifyObservers(this), this.QJ.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const cT of this._behaviors) cT.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(TT, kT, cT) {
          if (kT.qt)
            for (let lT = 0; lT < kT.qt.length; lT++) {
              const cT = kT.qt[lT];
              TT.createAnimationRange(cT.name, cT.from, cT.to)
            }
        }
        getHierarchyBoundingVectors() {
          let TT, kT, cT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            lT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.NJ().incrementRenderId(), this.computeWorldMatrix(!0);
          const KT = this;
          if (KT.DH && KT.kF) {
            const cT = KT.DH();
            TT = cT.boundingBox.minimumWorld.clone(), kT = cT.boundingBox.maximumWorld.clone()
          } else TT = new MT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), kT = new MT.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (cT) {
            const cT = this.getDescendants(!1);
            for (const KT of cT) {
              const cT = KT;
              if (cT.computeWorldMatrix(!0), lT && !lT(cT)) continue;
              if (!cT.DH || 0 === cT.getTotalVertices()) continue;
              const OT = cT.DH().boundingBox,
                yT = OT.minimumWorld,
                fT = OT.maximumWorld;
              MT.m.CheckExtends(yT, TT, kT), MT.m.CheckExtends(fT, TT, kT)
            }
          }
          return {
            min: TT,
            max: kT
          }
        }
      }, (() => {
        const MT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        kT = [(0, KT.J)()], cT = [(0, KT.J)()], AT = [(0, KT.J)()], CT = [(0, KT.J)()], jT = [(0, KT.J)()], (0, lT.e)(null, null, kT, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: TT => "name" in TT,
            get: TT => TT.name,
            set: (TT, kT) => {
              TT.name = kT
            }
          },
          metadata: MT
        }, vT, tT), (0, lT.e)(null, null, cT, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: TT => "id" in TT,
            get: TT => TT.id,
            set: (TT, kT) => {
              TT.id = kT
            }
          },
          metadata: MT
        }, hT, NT), (0, lT.e)(null, null, AT, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: TT => "uniqueId" in TT,
            get: TT => TT.uniqueId,
            set: (TT, kT) => {
              TT.uniqueId = kT
            }
          },
          metadata: MT
        }, QT, ST), (0, lT.e)(null, null, CT, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: TT => "state" in TT,
            get: TT => TT.state,
            set: (TT, kT) => {
              TT.state = kT
            }
          },
          metadata: MT
        }, DT, aT), (0, lT.e)(null, null, jT, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: TT => "metadata" in TT,
            get: TT => TT.metadata,
            set: (TT, kT) => {
              TT.metadata = kT
            }
          },
          metadata: MT
        }, FT, rT), MT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: MT
        })
      })(), TT._AnimationRangeFactory = (TT, kT, cT) => {
        throw (0, fT.i)("AnimationRange")
      }, TT._NodeConstructors = {}, TT
    })()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);