export const id = 248;
export const ids = [248];
export const modules = {
  39031: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => LT
    });
    var iT = IT(38764),
      zT = IT(38773),
      kT = IT(36118),
      WT = IT(36177),
      XT = IT(38994),
      BT = IT(38911),
      FT = IT(36166),
      ST = IT(38976),
      DT = IT(38799);
    let LT = (() => {
      var TT, oT;
      let IT, LT, xT, cT, KT, MT, rT, AT, gT, hT, wT, mT, eT, RT = XT.c,
        uT = [],
        vT = [],
        ET = [],
        fT = [],
        CT = [],
        jT = [],
        JT = [],
        UT = [],
        aT = [],
        YT = [],
        QT = [],
        OT = [],
        HT = [],
        nT = [],
        qT = [],
        ZT = [],
        lT = [],
        sT = [],
        tT = [],
        GT = [],
        pT = [];
      return TT = class extends RT {
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
          return (0, iT.b)(this, oT, "f")
        }
        set renderPriority(TT) {
          (0, iT.e)(this, oT, TT, "f")
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
        getProjectionMatrix(TT, oT) {
          return null
        }
        constructor(IT, zT, kT) {
          super(IT, zT, !1), this.diffuse = ((0, iT.j)(this, uT), (0, iT.j)(this, vT, new WT.e(1, 1, 1))), this.specular = ((0, iT.j)(this, ET), (0, iT.j)(this, fT, new WT.e(1, 1, 1))), this.falloffType = ((0, iT.j)(this, CT), (0, iT.j)(this, jT, TT.FALLOFF_DEFAULT)), this.intensity = ((0, iT.j)(this, JT), (0, iT.j)(this, UT, 1)), this._range = ((0, iT.j)(this, aT), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = TT.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, iT.j)(this, YT, void 0), oT.set(this, ((0, iT.j)(this, QT), (0, iT.j)(this, OT, 0))), this._shadowEnabled = ((0, iT.j)(this, HT), (0, iT.j)(this, nT, !0)), this._includedOnlyMeshes = (0, iT.j)(this, qT), this._excludeWithLayerMask = (0, iT.j)(this, ZT, 0), this._includeOnlyWithLayerMask = ((0, iT.j)(this, lT), (0, iT.j)(this, sT, 0)), this._lightmapMode = ((0, iT.j)(this, tT), (0, iT.j)(this, GT, 0)), this._shadowGenerators = ((0, iT.j)(this, pT), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, kT || this.pC().addLight(this), this._uniformBuffer = new BT.e(this.pC().Zc(), void 0, void 0, IT), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], kT || this._resyncMeshes()
        }
        transferTexturesToEffect(TT, oT) {
          return this
        }
        _bindLight(TT, oT, IT, iT) {
          let zT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const kT = TT.toString();
          let XT = !1;
          if (this._uniformBuffer.bindToEffect(IT, "Light" + kT), this._renderId !== oT.getRenderId() || this._lastUseSpecular !== iT || !this._uniformBuffer.useUbo) {
            this._renderId = oT.getRenderId(), this._lastUseSpecular = iT;
            const TT = this.getScaledIntensity();
            this.transferToEffect(IT, kT), this.diffuse.scaleToRef(TT, WT.m.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", WT.m.Color3[0], this.range, kT), iT && (this.specular.scaleToRef(TT, WT.m.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", WT.m.Color3[1], this.radius, kT)), XT = !0
          }
          if (this.transferTexturesToEffect(IT, kT), oT.shadowsEnabled && this.shadowEnabled && zT) {
            const TT = this.getShadowGenerator(oT.activeCamera) ?? this.getShadowGenerator();
            TT && (TT.bindShadowLight(kT, IT), XT = !0)
          }
          XT ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(TT) {
          let oT = "Name: " + this.name;
          if (oT += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let IT = 0; IT < this.animations.length; IT++) oT += ", animation[0]: " + this.animations[IT].toString(TT);
          return oT
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.IIT() || this._resyncMeshes()
        }
        Fv(TT) {
          super.Fv(TT), this._resyncMeshes()
        }
        getShadowGenerator() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(TT) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return kT.m.Zero()
        }
        canAffectMesh(TT) {
          return !TT || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(TT)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(TT)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & TT.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & TT.layerMask)))
        }
        dispose(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const TT = this._shadowGenerators.values();
            for (let oT = TT.next(); !0 !== oT.done; oT = TT.next()) {
              oT.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.pC().stopAnimation(this), this._parentContainer) {
            const TT = this._parentContainer.lights.indexOf(this);
            TT > -1 && this._parentContainer.lights.splice(TT, 1), this._parentContainer = null
          }
          for (const IT of this.pC().meshes) IT._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.pC().removeLight(this), super.dispose(TT, oT)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(oT) {
          let IT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const iT = TT.GetConstructorFromName(this.getTypeID(), oT, this.pC());
          if (!iT) return null;
          const zT = DT.c.Clone(iT, this);
          return oT && (zT.name = oT), IT && (zT.parent = IT), zT.Fv(this.isEnabled()), this.onClonedObservable.notifyObservers(zT), zT
        }
        serialize() {
          const TT = DT.c.Serialize(this);
          if (TT.uniqueId = this.uniqueId, TT.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(TT), this.excludedMeshes.length > 0) {
            TT.excludedMeshesIds = [];
            for (const oT of this.excludedMeshes) TT.excludedMeshesIds.push(oT.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            TT.includedOnlyMeshesIds = [];
            for (const oT of this.includedOnlyMeshes) TT.includedOnlyMeshesIds.push(oT.id)
          }
          return DT.c.AppendSerializedAnimations(this, TT), TT.ec = this.serializeAnimationRanges(), TT.isEnabled = this.isEnabled(), TT
        }
        static GetConstructorFromName(TT, oT, IT) {
          const iT = XT.c.Construct("Light_Type_" + TT, oT, IT);
          return iT || null
        }
        static Parse(oT, IT) {
          let iT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const zT = TT.GetConstructorFromName(oT.type, oT.name, IT);
          if (!zT) return null;
          const kT = DT.c.Parse(zT, oT, IT, iT);
          if (oT.excludedMeshesIds && (kT._excludedMeshesIds = oT.excludedMeshesIds), oT.includedOnlyMeshesIds && (kT._includedOnlyMeshesIds = oT.includedOnlyMeshesIds), void 0 !== oT.parentId && (kT._waitingParentId = oT.parentId), void 0 !== oT.parentInstanceIndex && (kT._waitingParentInstanceIndex = oT.parentInstanceIndex), void 0 !== oT.falloffType && (kT.falloffType = oT.falloffType), void 0 !== oT.lightmapMode && (kT.lightmapMode = oT.lightmapMode), oT.animations) {
            for (let TT = 0; TT < oT.animations.length; TT++) {
              const IT = oT.animations[TT],
                iT = (0, FT.d)("BABYLON.Animation");
              iT && kT.animations.push(iT.Parse(IT))
            }
            XT.c.ParseAnimationRanges(kT, oT, IT)
          }
          return oT.autoAnimate && IT.beginAnimation(kT, oT.autoAnimateFrom, oT.autoAnimateTo, oT.autoAnimateLoop, oT.autoAnimateSpeed || 1), void 0 !== oT.isEnabled && kT.Fv(oT.isEnabled), kT._onParsed(oT, IT, iT), kT
        }
        _onParsed(TT, oT) {}
        _hookArrayForExcluded(TT) {
          var oT = this;
          const IT = TT.push;
          TT.push = function() {
            for (var iT = arguments.length, zT = new Array(iT), kT = 0; kT < iT; kT++) zT[kT] = arguments[kT];
            const WT = IT.apply(TT, zT);
            if (oT._clusteredContainer) return WT;
            for (const TT of zT) TT._resyncLightSource(oT);
            return WT
          };
          const iT = TT.splice;
          TT.splice = (oT, IT) => {
            const zT = iT.call(TT, oT, IT ?? TT.length);
            if (this._clusteredContainer) return zT;
            for (const TT of zT) TT._resyncLightSource(this);
            return zT
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(TT) {
          var oT = this;
          const IT = TT.push;
          TT.push = function() {
            for (var iT = arguments.length, zT = new Array(iT), kT = 0; kT < iT; kT++) zT[kT] = arguments[kT];
            const WT = IT.apply(TT, zT);
            return oT._resyncMeshes(), WT
          };
          const iT = TT.splice;
          TT.splice = (oT, IT) => {
            const zT = iT.call(TT, oT, IT ?? TT.length);
            return this._resyncMeshes(), zT
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const TT of this.pC().meshes) TT._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const TT of this.pC().meshes) - 1 !== TT.lightSources.indexOf(this) && TT._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.pC().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let oT = 0;
          const IT = this.getTypeID();
          let iT = this.intensityMode;
          switch (iT === TT.INTENSITYMODE_AUTOMATIC && (iT = IT === TT.LIGHTTYPEID_DIRECTIONALLIGHT ? TT.INTENSITYMODE_ILLUMINANCE : TT.INTENSITYMODE_LUMINOUSINTENSITY), IT) {
            case TT.LIGHTTYPEID_POINTLIGHT:
            case TT.LIGHTTYPEID_SPOTLIGHT:
              switch (iT) {
                case TT.INTENSITYMODE_LUMINOUSPOWER:
                  oT = 1 / (4 * Math.PI);
                  break;
                case TT.INTENSITYMODE_LUMINOUSINTENSITY:
                  oT = 1;
                  break;
                case TT.INTENSITYMODE_LUMINANCE:
                  oT = this.radius * this.radius
              }
              break;
            case TT.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (iT) {
                case TT.INTENSITYMODE_ILLUMINANCE:
                  oT = 1;
                  break;
                case TT.INTENSITYMODE_LUMINANCE: {
                  let TT = this.radius;
                  TT = Math.max(TT, .001);
                  oT = 2 * Math.PI * (1 - Math.cos(TT));
                  break
                }
              }
              break;
            case TT.LIGHTTYPEID_HEMISPHERICLIGHT:
            case TT.LIGHTTYPEID_RECT_AREALIGHT:
              oT = 1
          }
          return oT
        }
        _reorderLightsInScene() {
          const TT = this.pC();
          0 != this._renderPriority && (TT.requireLightSorting = !0), this.pC().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, oT = new WeakMap, (() => {
        const oT = "function" === typeof Symbol && Symbol.metadata ? Object.create(RT[Symbol.metadata] ?? null) : void 0;
        IT = [(0, zT.q)()], LT = [(0, zT.q)()], xT = [(0, zT.P)()], cT = [(0, zT.P)()], KT = [(0, zT.P)()], MT = [(0, zT.P)()], rT = [(0, zT.P)()], AT = [(0, zT.P)()], gT = [(0, zT.h)("_reorderLightsInScene")], hT = [(0, zT.P)("shadowEnabled")], wT = [(0, zT.P)("excludeWithLayerMask")], mT = [(0, zT.P)("includeOnlyWithLayerMask")], eT = [(0, zT.P)("lightmapMode")], (0, iT.h)(TT, null, KT, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: TT => "range" in TT,
            get: TT => TT.range
          },
          metadata: oT
        }, null, uT), (0, iT.h)(TT, null, MT, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensityMode" in TT,
            get: TT => TT.intensityMode
          },
          metadata: oT
        }, null, uT), (0, iT.h)(TT, null, rT, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: TT => "radius" in TT,
            get: TT => TT.radius
          },
          metadata: oT
        }, null, uT), (0, iT.h)(TT, null, gT, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: TT => "renderPriority" in TT,
            get: TT => TT.renderPriority,
            set: (TT, oT) => {
              TT.renderPriority = oT
            }
          },
          metadata: oT
        }, OT, HT), (0, iT.h)(null, null, IT, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: TT => "diffuse" in TT,
            get: TT => TT.diffuse,
            set: (TT, oT) => {
              TT.diffuse = oT
            }
          },
          metadata: oT
        }, vT, ET), (0, iT.h)(null, null, LT, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: TT => "specular" in TT,
            get: TT => TT.specular,
            set: (TT, oT) => {
              TT.specular = oT
            }
          },
          metadata: oT
        }, fT, CT), (0, iT.h)(null, null, xT, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: TT => "falloffType" in TT,
            get: TT => TT.falloffType,
            set: (TT, oT) => {
              TT.falloffType = oT
            }
          },
          metadata: oT
        }, jT, JT), (0, iT.h)(null, null, cT, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensity" in TT,
            get: TT => TT.intensity,
            set: (TT, oT) => {
              TT.intensity = oT
            }
          },
          metadata: oT
        }, UT, aT), (0, iT.h)(null, null, AT, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: TT => "_renderPriority" in TT,
            get: TT => TT._renderPriority,
            set: (TT, oT) => {
              TT._renderPriority = oT
            }
          },
          metadata: oT
        }, YT, QT), (0, iT.h)(null, null, hT, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "_shadowEnabled" in TT,
            get: TT => TT._shadowEnabled,
            set: (TT, oT) => {
              TT._shadowEnabled = oT
            }
          },
          metadata: oT
        }, nT, qT), (0, iT.h)(null, null, wT, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: TT => "_excludeWithLayerMask" in TT,
            get: TT => TT._excludeWithLayerMask,
            set: (TT, oT) => {
              TT._excludeWithLayerMask = oT
            }
          },
          metadata: oT
        }, ZT, lT), (0, iT.h)(null, null, mT, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: TT => "_includeOnlyWithLayerMask" in TT,
            get: TT => TT._includeOnlyWithLayerMask,
            set: (TT, oT) => {
              TT._includeOnlyWithLayerMask = oT
            }
          },
          metadata: oT
        }, sT, tT), (0, iT.h)(null, null, eT, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "_lightmapMode" in TT,
            get: TT => TT._lightmapMode,
            set: (TT, oT) => {
              TT._lightmapMode = oT
            }
          },
          metadata: oT
        }, GT, pT), oT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oT
        })
      })(), TT.FALLOFF_DEFAULT = ST.c.FALLOFF_DEFAULT, TT.FALLOFF_PHYSICAL = ST.c.FALLOFF_PHYSICAL, TT.FALLOFF_GLTF = ST.c.FALLOFF_GLTF, TT.FALLOFF_STANDARD = ST.c.FALLOFF_STANDARD, TT.LIGHTMAP_DEFAULT = ST.c.LIGHTMAP_DEFAULT, TT.LIGHTMAP_SPECULAR = ST.c.LIGHTMAP_SPECULAR, TT.LIGHTMAP_SHADOWSONLY = ST.c.LIGHTMAP_SHADOWSONLY, TT.INTENSITYMODE_AUTOMATIC = ST.c.INTENSITYMODE_AUTOMATIC, TT.INTENSITYMODE_LUMINOUSPOWER = ST.c.INTENSITYMODE_LUMINOUSPOWER, TT.INTENSITYMODE_LUMINOUSINTENSITY = ST.c.INTENSITYMODE_LUMINOUSINTENSITY, TT.INTENSITYMODE_ILLUMINANCE = ST.c.INTENSITYMODE_ILLUMINANCE, TT.INTENSITYMODE_LUMINANCE = ST.c.INTENSITYMODE_LUMINANCE, TT.LIGHTTYPEID_POINTLIGHT = ST.c.LIGHTTYPEID_POINTLIGHT, TT.LIGHTTYPEID_DIRECTIONALLIGHT = ST.c.LIGHTTYPEID_DIRECTIONALLIGHT, TT.LIGHTTYPEID_SPOTLIGHT = ST.c.LIGHTTYPEID_SPOTLIGHT, TT.LIGHTTYPEID_HEMISPHERICLIGHT = ST.c.LIGHTTYPEID_HEMISPHERICLIGHT, TT.LIGHTTYPEID_RECT_AREALIGHT = ST.c.LIGHTTYPEID_RECT_AREALIGHT, TT
    })()
  },
  38994: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => DT
    });
    var iT = IT(38764),
      zT = IT(36118),
      kT = IT(38773),
      WT = IT(36149),
      XT = IT(36146),
      BT = IT(38643),
      FT = IT(38799);
    class ST {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new WT.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new WT.d, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let DT = (() => {
      var TT;
      let oT, IT, DT, LT, xT, cT = [],
        KT = [],
        MT = [],
        rT = [],
        AT = [],
        gT = [],
        hT = [],
        wT = [],
        mT = [],
        eT = [];
      return TT = class {
        static AddNodeConstructor(TT, oT) {
          this._NodeConstructors[TT] = oT
        }
        static Construct(TT, oT, IT, iT) {
          const zT = this._NodeConstructors[TT];
          return zT ? zT(oT, IT, iT) : null
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
        IIT() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(TT) {
          if (this._parentNode === TT) return;
          const oT = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const oT = this._parentNode._children.indexOf(this); - 1 !== oT && this._parentNode._children.splice(oT, 1), TT || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = TT, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), oT || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
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
              oT = TT.length - 1;
            TT[this._nodeDataStorage._sceneRootNodesIndex] = TT[oT], TT[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
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
          this._onDisposeObserver && this.bC.remove(this._onDisposeObserver), this._onDisposeObserver = this.bC.add(TT)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var TT;
          return (TT = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (TT._onEffectiveEnabledStateChangedObservable = new WT.d)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            IT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new ST, this.name = (0, iT.j)(this, cT, void 0), this.id = ((0, iT.j)(this, KT), (0, iT.j)(this, MT, void 0)), this.uniqueId = ((0, iT.j)(this, rT), (0, iT.j)(this, AT, void 0)), this.state = ((0, iT.j)(this, gT), (0, iT.j)(this, hT, "")), this.metadata = ((0, iT.j)(this, wT), (0, iT.j)(this, mT, null)), this._internalMetadata = (0, iT.j)(this, eT), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new WT.d, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = zT.b.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.bC = new WT.d, this._onDisposeObserver = null, this._behaviors = new Array, this.name = TT, this.id = TT, this._scene = oT || XT.d.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), IT && this._addToSceneRootNodes()
        }
        pC() {
          return this._scene
        }
        Zc() {
          return this._scene.Zc()
        }
        addBehavior(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(TT) || (TT.init(), this._scene.isLoading && !oT ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(TT) && TT.attach(this)
          })) : TT.attach(this), this._behaviors.push(TT)), this
        }
        removeBehavior(TT) {
          const oT = this._behaviors.indexOf(TT);
          return -1 === oT || (this._behaviors.splice(oT, 1), TT.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(TT) {
          for (const oT of this._behaviors)
            if (oT.name === TT) return oT;
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
        roT(TT) {
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
            oT = TT ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const IT of this._children) IT._syncParentEnabledState();
          if (TT) {
            const TT = this.isEnabled();
            TT !== oT && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(TT)
          }
        }
        Fv(TT) {
          if (this._nodeDataStorage._isEnabled === TT) return;
          const oT = this._hasEffectiveEnabledStateObservers(),
            IT = oT ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = TT, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(TT), oT) {
            const TT = this.isEnabled();
            TT !== IT && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(TT)
          }
        }
        isDescendantOf(TT) {
          return !!this.parent && (this.parent === TT || this.parent.isDescendantOf(TT))
        }
        _getDescendants(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            IT = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let iT = 0; iT < this._children.length; iT++) {
              const zT = this._children[iT];
              IT && !IT(zT) || TT.push(zT), oT || zT._getDescendants(TT, !1, IT)
            }
        }
        getDescendants(TT, oT) {
          const IT = [];
          return this._getDescendants(IT, TT, oT), IT
        }
        getChildMeshes(TT, oT) {
          const IT = [];
          return this._getDescendants(IT, TT, (TT => (!oT || oT(TT)) && void 0 !== TT.cullingStrategy)), IT
        }
        getChildren(TT) {
          let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(oT, TT)
        }
        _setReady(TT) {
          TT !== this._nodeDataStorage._isReady && (TT ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(TT) {
          for (let oT = 0; oT < this.animations.length; oT++) {
            const IT = this.animations[oT];
            if (IT.name === TT) return IT
          }
          return null
        }
        createAnimationRange(oT, IT, iT) {
          if (!this._ranges[oT]) {
            this._ranges[oT] = TT._AnimationRangeFactory(oT, IT, iT);
            for (let TT = 0, zT = this.animations.length; TT < zT; TT++) this.animations[TT] && this.animations[TT].createRange(oT, IT, iT)
          }
        }
        deleteAnimationRange(TT) {
          let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let IT = 0, iT = this.animations.length; IT < iT; IT++) this.animations[IT] && this.animations[IT].deleteRange(TT, oT);
          this._ranges[TT] = null
        }
        getAnimationRange(TT) {
          return this._ranges[TT] || null
        }
        clone(oT, IT, iT) {
          const zT = FT.c.Clone((() => new TT(oT, this.pC())), this);
          if (IT && (zT.parent = IT), !iT) {
            const TT = this.getDescendants(!0);
            for (let IT = 0; IT < TT.length; IT++) {
              const iT = TT[IT];
              iT.clone(oT + "." + iT.name, zT)
            }
          }
          return zT
        }
        getAnimationRanges() {
          const TT = [];
          let oT;
          for (oT in this._ranges) TT.push(this._ranges[oT]);
          return TT
        }
        beginAnimation(TT, oT, IT, iT) {
          const zT = this.getAnimationRange(TT);
          return zT ? this._scene.beginAnimation(this, zT.from, zT.to, oT, IT, iT) : null
        }
        serializeAnimationRanges() {
          const TT = [];
          for (const oT in this._ranges) {
            const IT = this._ranges[oT];
            if (!IT) continue;
            const iT = {};
            iT.name = oT, iT.from = IT.from, iT.to = IT.to, TT.push(iT)
          }
          return TT
        }
        computeWorldMatrix(TT) {
          return this._worldMatrix || (this._worldMatrix = zT.b.Identity()), this._worldMatrix
        }
        dispose(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !TT) {
            const IT = this.getDescendants(!0);
            for (const iT of IT) iT.dispose(TT, oT)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.bC.notifyObservers(this), this.bC.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const IT of this._behaviors) IT.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(TT, oT, IT) {
          if (oT.ec)
            for (let iT = 0; iT < oT.ec.length; iT++) {
              const IT = oT.ec[iT];
              TT.createAnimationRange(IT.name, IT.from, IT.to)
            }
        }
        getHierarchyBoundingVectors() {
          let TT, oT, IT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            iT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.pC().incrementRenderId(), this.computeWorldMatrix(!0);
          const kT = this;
          if (kT.GJ && kT.pR) {
            const IT = kT.GJ();
            TT = IT.boundingBox.minimumWorld.clone(), oT = IT.boundingBox.maximumWorld.clone()
          } else TT = new zT.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), oT = new zT.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (IT) {
            const IT = this.getDescendants(!1);
            for (const kT of IT) {
              const IT = kT;
              if (IT.computeWorldMatrix(!0), iT && !iT(IT)) continue;
              if (!IT.GJ || 0 === IT.getTotalVertices()) continue;
              const WT = IT.GJ().boundingBox,
                XT = WT.minimumWorld,
                BT = WT.maximumWorld;
              zT.m.CheckExtends(XT, TT, oT), zT.m.CheckExtends(BT, TT, oT)
            }
          }
          return {
            min: TT,
            max: oT
          }
        }
      }, (() => {
        const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        oT = [(0, kT.P)()], IT = [(0, kT.P)()], DT = [(0, kT.P)()], LT = [(0, kT.P)()], xT = [(0, kT.P)()], (0, iT.h)(null, null, oT, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: TT => "name" in TT,
            get: TT => TT.name,
            set: (TT, oT) => {
              TT.name = oT
            }
          },
          metadata: zT
        }, cT, KT), (0, iT.h)(null, null, IT, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: TT => "id" in TT,
            get: TT => TT.id,
            set: (TT, oT) => {
              TT.id = oT
            }
          },
          metadata: zT
        }, MT, rT), (0, iT.h)(null, null, DT, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: TT => "uniqueId" in TT,
            get: TT => TT.uniqueId,
            set: (TT, oT) => {
              TT.uniqueId = oT
            }
          },
          metadata: zT
        }, AT, gT), (0, iT.h)(null, null, LT, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: TT => "state" in TT,
            get: TT => TT.state,
            set: (TT, oT) => {
              TT.state = oT
            }
          },
          metadata: zT
        }, hT, wT), (0, iT.h)(null, null, xT, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: TT => "metadata" in TT,
            get: TT => TT.metadata,
            set: (TT, oT) => {
              TT.metadata = oT
            }
          },
          metadata: zT
        }, mT, eT), zT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zT
        })
      })(), TT._AnimationRangeFactory = (TT, oT, IT) => {
        throw (0, BT.k)("AnimationRange")
      }, TT._NodeConstructors = {}, TT
    })()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);