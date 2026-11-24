export const id = 263;
export const ids = [263];
export const modules = {
  40373: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => LT
    });
    var WT = mT(40095),
      zT = mT(40102),
      MT = mT(37188),
      gT = mT(37367),
      nT = mT(40335),
      HT = mT(40242),
      kT = mT(37239),
      jT = mT(40310),
      lT = mT(40122);
    let LT = (() => {
      var TT, UT;
      let mT, LT, pT, BT, ZT, cT, vT, fT, qT, iT, bT, OT, eT, YT = nT.d,
        JT = [],
        xT = [],
        dT = [],
        wT = [],
        tT = [],
        aT = [],
        yT = [],
        XT = [],
        IT = [],
        QT = [],
        sT = [],
        FT = [],
        PT = [],
        VT = [],
        uT = [],
        CT = [],
        rT = [],
        KT = [],
        ST = [],
        GT = [],
        NT = [];
      return TT = class extends YT {
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
          return (0, WT.d)(this, UT, "f")
        }
        set renderPriority(TT) {
          (0, WT.e)(this, UT, TT, "f")
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
        getProjectionMatrix(TT, UT) {
          return null
        }
        constructor(mT, zT, MT) {
          super(mT, zT, !1), this.diffuse = ((0, WT.k)(this, JT), (0, WT.k)(this, xT, new gT.d(1, 1, 1))), this.specular = ((0, WT.k)(this, dT), (0, WT.k)(this, wT, new gT.d(1, 1, 1))), this.falloffType = ((0, WT.k)(this, tT), (0, WT.k)(this, aT, TT.FALLOFF_DEFAULT)), this.intensity = ((0, WT.k)(this, yT), (0, WT.k)(this, XT, 1)), this._range = ((0, WT.k)(this, IT), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = TT.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, WT.k)(this, QT, void 0), UT.set(this, ((0, WT.k)(this, sT), (0, WT.k)(this, FT, 0))), this._shadowEnabled = ((0, WT.k)(this, PT), (0, WT.k)(this, VT, !0)), this._includedOnlyMeshes = (0, WT.k)(this, uT), this._excludeWithLayerMask = (0, WT.k)(this, CT, 0), this._includeOnlyWithLayerMask = ((0, WT.k)(this, rT), (0, WT.k)(this, KT, 0)), this._lightmapMode = ((0, WT.k)(this, ST), (0, WT.k)(this, GT, 0)), this._shadowGenerators = ((0, WT.k)(this, NT), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, MT || this.KF().addLight(this), this._uniformBuffer = new HT.c(this.KF().eB(), void 0, void 0, mT), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], MT || this._resyncMeshes()
        }
        transferTexturesToEffect(TT, UT) {
          return this
        }
        _bindLight(TT, UT, mT, WT) {
          let zT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const MT = TT.toString();
          let nT = !1;
          if (this._uniformBuffer.bindToEffect(mT, "Light" + MT), this._renderId !== UT.getRenderId() || this._lastUseSpecular !== WT || !this._uniformBuffer.useUbo) {
            this._renderId = UT.getRenderId(), this._lastUseSpecular = WT;
            const TT = this.getScaledIntensity();
            this.transferToEffect(mT, MT), this.diffuse.scaleToRef(TT, gT.m.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", gT.m.Color3[0], this.range, MT), WT && (this.specular.scaleToRef(TT, gT.m.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", gT.m.Color3[1], this.radius, MT)), nT = !0
          }
          if (this.transferTexturesToEffect(mT, MT), UT.shadowsEnabled && this.shadowEnabled && zT) {
            const TT = this.getShadowGenerator(UT.activeCamera) ?? this.getShadowGenerator();
            TT && (TT.bindShadowLight(MT, mT), nT = !0)
          }
          nT ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(TT) {
          let UT = "Name: " + this.name;
          if (UT += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let mT = 0; mT < this.animations.length; mT++) UT += ", animation[0]: " + this.animations[mT].toString(TT);
          return UT
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.bJ() || this._resyncMeshes()
        }
        Qy(TT) {
          super.Qy(TT), this._resyncMeshes()
        }
        getShadowGenerator() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(TT) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return MT.p.Zero()
        }
        canAffectMesh(TT) {
          return !TT || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(TT)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(TT)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & TT.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & TT.layerMask)))
        }
        dispose(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const TT = this._shadowGenerators.values();
            for (let UT = TT.next(); !0 !== UT.done; UT = TT.next()) {
              UT.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.KF().stopAnimation(this), this._parentContainer) {
            const TT = this._parentContainer.lights.indexOf(this);
            TT > -1 && this._parentContainer.lights.splice(TT, 1), this._parentContainer = null
          }
          for (const mT of this.KF().meshes) mT._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.KF().removeLight(this), super.dispose(TT, UT)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(UT) {
          let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const WT = TT.GetConstructorFromName(this.getTypeID(), UT, this.KF());
          if (!WT) return null;
          const zT = lT.e.Clone(WT, this);
          return UT && (zT.name = UT), mT && (zT.parent = mT), zT.Qy(this.isEnabled()), this.onClonedObservable.notifyObservers(zT), zT
        }
        serialize() {
          const TT = lT.e.Serialize(this);
          if (TT.uniqueId = this.uniqueId, TT.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(TT), this.excludedMeshes.length > 0) {
            TT.excludedMeshesIds = [];
            for (const UT of this.excludedMeshes) TT.excludedMeshesIds.push(UT.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            TT.includedOnlyMeshesIds = [];
            for (const UT of this.includedOnlyMeshes) TT.includedOnlyMeshesIds.push(UT.id)
          }
          return lT.e.AppendSerializedAnimations(this, TT), TT.hZ = this.serializeAnimationRanges(), TT.isEnabled = this.isEnabled(), TT
        }
        static GetConstructorFromName(TT, UT, mT) {
          const WT = nT.d.Construct("Light_Type_" + TT, UT, mT);
          return WT || null
        }
        static Parse(UT, mT) {
          let WT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const zT = TT.GetConstructorFromName(UT.type, UT.name, mT);
          if (!zT) return null;
          const MT = lT.e.Parse(zT, UT, mT, WT);
          if (UT.excludedMeshesIds && (MT._excludedMeshesIds = UT.excludedMeshesIds), UT.includedOnlyMeshesIds && (MT._includedOnlyMeshesIds = UT.includedOnlyMeshesIds), void 0 !== UT.parentId && (MT._waitingParentId = UT.parentId), void 0 !== UT.parentInstanceIndex && (MT._waitingParentInstanceIndex = UT.parentInstanceIndex), void 0 !== UT.falloffType && (MT.falloffType = UT.falloffType), void 0 !== UT.lightmapMode && (MT.lightmapMode = UT.lightmapMode), UT.animations) {
            for (let TT = 0; TT < UT.animations.length; TT++) {
              const mT = UT.animations[TT],
                WT = (0, kT.d)("BABYLON.Animation");
              WT && MT.animations.push(WT.Parse(mT))
            }
            nT.d.ParseAnimationRanges(MT, UT, mT)
          }
          return UT.autoAnimate && mT.beginAnimation(MT, UT.autoAnimateFrom, UT.autoAnimateTo, UT.autoAnimateLoop, UT.autoAnimateSpeed || 1), void 0 !== UT.isEnabled && MT.Qy(UT.isEnabled), MT._onParsed(UT, mT, WT), MT
        }
        _onParsed(TT, UT) {}
        _hookArrayForExcluded(TT) {
          var UT = this;
          const mT = TT.push;
          TT.push = function() {
            for (var WT = arguments.length, zT = new Array(WT), MT = 0; MT < WT; MT++) zT[MT] = arguments[MT];
            const gT = mT.apply(TT, zT);
            if (UT._clusteredContainer) return gT;
            for (const TT of zT) TT._resyncLightSource(UT);
            return gT
          };
          const WT = TT.splice;
          TT.splice = (UT, mT) => {
            const zT = WT.call(TT, UT, mT ?? TT.length);
            if (this._clusteredContainer) return zT;
            for (const TT of zT) TT._resyncLightSource(this);
            return zT
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(TT) {
          var UT = this;
          const mT = TT.push;
          TT.push = function() {
            for (var WT = arguments.length, zT = new Array(WT), MT = 0; MT < WT; MT++) zT[MT] = arguments[MT];
            const gT = mT.apply(TT, zT);
            return UT._resyncMeshes(), gT
          };
          const WT = TT.splice;
          TT.splice = (UT, mT) => {
            const zT = WT.call(TT, UT, mT ?? TT.length);
            return this._resyncMeshes(), zT
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const TT of this.KF().meshes) TT._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const TT of this.KF().meshes) - 1 !== TT.lightSources.indexOf(this) && TT._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.KF().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let UT = 0;
          const mT = this.getTypeID();
          let WT = this.intensityMode;
          switch (WT === TT.INTENSITYMODE_AUTOMATIC && (WT = mT === TT.LIGHTTYPEID_DIRECTIONALLIGHT ? TT.INTENSITYMODE_ILLUMINANCE : TT.INTENSITYMODE_LUMINOUSINTENSITY), mT) {
            case TT.LIGHTTYPEID_POINTLIGHT:
            case TT.LIGHTTYPEID_SPOTLIGHT:
              switch (WT) {
                case TT.INTENSITYMODE_LUMINOUSPOWER:
                  UT = 1 / (4 * Math.PI);
                  break;
                case TT.INTENSITYMODE_LUMINOUSINTENSITY:
                  UT = 1;
                  break;
                case TT.INTENSITYMODE_LUMINANCE:
                  UT = this.radius * this.radius
              }
              break;
            case TT.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (WT) {
                case TT.INTENSITYMODE_ILLUMINANCE:
                  UT = 1;
                  break;
                case TT.INTENSITYMODE_LUMINANCE: {
                  let TT = this.radius;
                  TT = Math.max(TT, .001);
                  UT = 2 * Math.PI * (1 - Math.cos(TT));
                  break
                }
              }
              break;
            case TT.LIGHTTYPEID_HEMISPHERICLIGHT:
            case TT.LIGHTTYPEID_RECT_AREALIGHT:
              UT = 1
          }
          return UT
        }
        _reorderLightsInScene() {
          const TT = this.KF();
          0 != this._renderPriority && (TT.requireLightSorting = !0), this.KF().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, UT = new WeakMap, (() => {
        const UT = "function" === typeof Symbol && Symbol.metadata ? Object.create(YT[Symbol.metadata] ?? null) : void 0;
        mT = [(0, zT.l)()], LT = [(0, zT.l)()], pT = [(0, zT.L)()], BT = [(0, zT.L)()], ZT = [(0, zT.L)()], cT = [(0, zT.L)()], vT = [(0, zT.L)()], fT = [(0, zT.L)()], qT = [(0, zT.g)("_reorderLightsInScene")], iT = [(0, zT.L)("shadowEnabled")], bT = [(0, zT.L)("excludeWithLayerMask")], OT = [(0, zT.L)("includeOnlyWithLayerMask")], eT = [(0, zT.L)("lightmapMode")], (0, WT.h)(TT, null, ZT, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: TT => "range" in TT,
            get: TT => TT.range
          },
          metadata: UT
        }, null, JT), (0, WT.h)(TT, null, cT, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensityMode" in TT,
            get: TT => TT.intensityMode
          },
          metadata: UT
        }, null, JT), (0, WT.h)(TT, null, vT, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: TT => "radius" in TT,
            get: TT => TT.radius
          },
          metadata: UT
        }, null, JT), (0, WT.h)(TT, null, qT, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: TT => "renderPriority" in TT,
            get: TT => TT.renderPriority,
            set: (TT, UT) => {
              TT.renderPriority = UT
            }
          },
          metadata: UT
        }, FT, PT), (0, WT.h)(null, null, mT, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: TT => "diffuse" in TT,
            get: TT => TT.diffuse,
            set: (TT, UT) => {
              TT.diffuse = UT
            }
          },
          metadata: UT
        }, xT, dT), (0, WT.h)(null, null, LT, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: TT => "specular" in TT,
            get: TT => TT.specular,
            set: (TT, UT) => {
              TT.specular = UT
            }
          },
          metadata: UT
        }, wT, tT), (0, WT.h)(null, null, pT, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: TT => "falloffType" in TT,
            get: TT => TT.falloffType,
            set: (TT, UT) => {
              TT.falloffType = UT
            }
          },
          metadata: UT
        }, aT, yT), (0, WT.h)(null, null, BT, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: TT => "intensity" in TT,
            get: TT => TT.intensity,
            set: (TT, UT) => {
              TT.intensity = UT
            }
          },
          metadata: UT
        }, XT, IT), (0, WT.h)(null, null, fT, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: TT => "_renderPriority" in TT,
            get: TT => TT._renderPriority,
            set: (TT, UT) => {
              TT._renderPriority = UT
            }
          },
          metadata: UT
        }, QT, sT), (0, WT.h)(null, null, iT, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: TT => "_shadowEnabled" in TT,
            get: TT => TT._shadowEnabled,
            set: (TT, UT) => {
              TT._shadowEnabled = UT
            }
          },
          metadata: UT
        }, VT, uT), (0, WT.h)(null, null, bT, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: TT => "_excludeWithLayerMask" in TT,
            get: TT => TT._excludeWithLayerMask,
            set: (TT, UT) => {
              TT._excludeWithLayerMask = UT
            }
          },
          metadata: UT
        }, CT, rT), (0, WT.h)(null, null, OT, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: TT => "_includeOnlyWithLayerMask" in TT,
            get: TT => TT._includeOnlyWithLayerMask,
            set: (TT, UT) => {
              TT._includeOnlyWithLayerMask = UT
            }
          },
          metadata: UT
        }, KT, ST), (0, WT.h)(null, null, eT, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: TT => "_lightmapMode" in TT,
            get: TT => TT._lightmapMode,
            set: (TT, UT) => {
              TT._lightmapMode = UT
            }
          },
          metadata: UT
        }, GT, NT), UT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UT
        })
      })(), TT.FALLOFF_DEFAULT = jT.b.FALLOFF_DEFAULT, TT.FALLOFF_PHYSICAL = jT.b.FALLOFF_PHYSICAL, TT.FALLOFF_GLTF = jT.b.FALLOFF_GLTF, TT.FALLOFF_STANDARD = jT.b.FALLOFF_STANDARD, TT.LIGHTMAP_DEFAULT = jT.b.LIGHTMAP_DEFAULT, TT.LIGHTMAP_SPECULAR = jT.b.LIGHTMAP_SPECULAR, TT.LIGHTMAP_SHADOWSONLY = jT.b.LIGHTMAP_SHADOWSONLY, TT.INTENSITYMODE_AUTOMATIC = jT.b.INTENSITYMODE_AUTOMATIC, TT.INTENSITYMODE_LUMINOUSPOWER = jT.b.INTENSITYMODE_LUMINOUSPOWER, TT.INTENSITYMODE_LUMINOUSINTENSITY = jT.b.INTENSITYMODE_LUMINOUSINTENSITY, TT.INTENSITYMODE_ILLUMINANCE = jT.b.INTENSITYMODE_ILLUMINANCE, TT.INTENSITYMODE_LUMINANCE = jT.b.INTENSITYMODE_LUMINANCE, TT.LIGHTTYPEID_POINTLIGHT = jT.b.LIGHTTYPEID_POINTLIGHT, TT.LIGHTTYPEID_DIRECTIONALLIGHT = jT.b.LIGHTTYPEID_DIRECTIONALLIGHT, TT.LIGHTTYPEID_SPOTLIGHT = jT.b.LIGHTTYPEID_SPOTLIGHT, TT.LIGHTTYPEID_HEMISPHERICLIGHT = jT.b.LIGHTTYPEID_HEMISPHERICLIGHT, TT.LIGHTTYPEID_RECT_AREALIGHT = jT.b.LIGHTTYPEID_RECT_AREALIGHT, TT
    })()
  },
  40335: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => lT
    });
    var WT = mT(40095),
      zT = mT(37188),
      MT = mT(40102),
      gT = mT(37219),
      nT = mT(37216),
      HT = mT(39965),
      kT = mT(40122);
    class jT {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new gT.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new gT.d, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let lT = (() => {
      var TT;
      let UT, mT, lT, LT, pT, BT = [],
        ZT = [],
        cT = [],
        vT = [],
        fT = [],
        qT = [],
        iT = [],
        bT = [],
        OT = [],
        eT = [];
      return TT = class {
        static AddNodeConstructor(TT, UT) {
          this._NodeConstructors[TT] = UT
        }
        static Construct(TT, UT, mT, WT) {
          const zT = this._NodeConstructors[TT];
          return zT ? zT(UT, mT, WT) : null
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
        bJ() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(TT) {
          if (this._parentNode === TT) return;
          const UT = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const UT = this._parentNode._children.indexOf(this); - 1 !== UT && this._parentNode._children.splice(UT, 1), TT || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = TT, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), UT || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
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
              UT = TT.length - 1;
            TT[this._nodeDataStorage._sceneRootNodesIndex] = TT[UT], TT[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
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
          this._onDisposeObserver && this.SF.remove(this._onDisposeObserver), this._onDisposeObserver = this.SF.add(TT)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var TT;
          return (TT = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (TT._onEffectiveEnabledStateChangedObservable = new gT.d)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            mT = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new jT, this.name = (0, WT.k)(this, BT, void 0), this.id = ((0, WT.k)(this, ZT), (0, WT.k)(this, cT, void 0)), this.uniqueId = ((0, WT.k)(this, vT), (0, WT.k)(this, fT, void 0)), this.state = ((0, WT.k)(this, qT), (0, WT.k)(this, iT, "")), this.metadata = ((0, WT.k)(this, bT), (0, WT.k)(this, OT, null)), this._internalMetadata = (0, WT.k)(this, eT), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new gT.d, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = zT.e.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.SF = new gT.d, this._onDisposeObserver = null, this._behaviors = new Array, this.name = TT, this.id = TT, this._scene = UT || nT.c.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), mT && this._addToSceneRootNodes()
        }
        KF() {
          return this._scene
        }
        eB() {
          return this._scene.eB()
        }
        addBehavior(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(TT) || (TT.init(), this._scene.isLoading && !UT ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(TT) && TT.attach(this)
          })) : TT.attach(this), this._behaviors.push(TT)), this
        }
        removeBehavior(TT) {
          const UT = this._behaviors.indexOf(TT);
          return -1 === UT || (this._behaviors.splice(UT, 1), TT.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(TT) {
          for (const UT of this._behaviors)
            if (UT.name === TT) return UT;
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
        NUT(TT) {
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
            UT = TT ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const mT of this._children) mT._syncParentEnabledState();
          if (TT) {
            const TT = this.isEnabled();
            TT !== UT && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(TT)
          }
        }
        Qy(TT) {
          if (this._nodeDataStorage._isEnabled === TT) return;
          const UT = this._hasEffectiveEnabledStateObservers(),
            mT = UT ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = TT, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(TT), UT) {
            const TT = this.isEnabled();
            TT !== mT && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(TT)
          }
        }
        isDescendantOf(TT) {
          return !!this.parent && (this.parent === TT || this.parent.isDescendantOf(TT))
        }
        _getDescendants(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            mT = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let WT = 0; WT < this._children.length; WT++) {
              const zT = this._children[WT];
              mT && !mT(zT) || TT.push(zT), UT || zT._getDescendants(TT, !1, mT)
            }
        }
        getDescendants(TT, UT) {
          const mT = [];
          return this._getDescendants(mT, TT, UT), mT
        }
        getChildMeshes(TT, UT) {
          const mT = [];
          return this._getDescendants(mT, TT, (TT => (!UT || UT(TT)) && void 0 !== TT.cullingStrategy)), mT
        }
        getChildren(TT) {
          let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(UT, TT)
        }
        _setReady(TT) {
          TT !== this._nodeDataStorage._isReady && (TT ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(TT) {
          for (let UT = 0; UT < this.animations.length; UT++) {
            const mT = this.animations[UT];
            if (mT.name === TT) return mT
          }
          return null
        }
        createAnimationRange(UT, mT, WT) {
          if (!this._ranges[UT]) {
            this._ranges[UT] = TT._AnimationRangeFactory(UT, mT, WT);
            for (let TT = 0, zT = this.animations.length; TT < zT; TT++) this.animations[TT] && this.animations[TT].createRange(UT, mT, WT)
          }
        }
        deleteAnimationRange(TT) {
          let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let mT = 0, WT = this.animations.length; mT < WT; mT++) this.animations[mT] && this.animations[mT].deleteRange(TT, UT);
          this._ranges[TT] = null
        }
        getAnimationRange(TT) {
          return this._ranges[TT] || null
        }
        clone(UT, mT, WT) {
          const zT = kT.e.Clone((() => new TT(UT, this.KF())), this);
          if (mT && (zT.parent = mT), !WT) {
            const TT = this.getDescendants(!0);
            for (let mT = 0; mT < TT.length; mT++) {
              const WT = TT[mT];
              WT.clone(UT + "." + WT.name, zT)
            }
          }
          return zT
        }
        getAnimationRanges() {
          const TT = [];
          let UT;
          for (UT in this._ranges) TT.push(this._ranges[UT]);
          return TT
        }
        beginAnimation(TT, UT, mT, WT) {
          const zT = this.getAnimationRange(TT);
          return zT ? this._scene.beginAnimation(this, zT.from, zT.to, UT, mT, WT) : null
        }
        serializeAnimationRanges() {
          const TT = [];
          for (const UT in this._ranges) {
            const mT = this._ranges[UT];
            if (!mT) continue;
            const WT = {};
            WT.name = UT, WT.from = mT.from, WT.to = mT.to, TT.push(WT)
          }
          return TT
        }
        computeWorldMatrix(TT) {
          return this._worldMatrix || (this._worldMatrix = zT.e.Identity()), this._worldMatrix
        }
        dispose(TT) {
          let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !TT) {
            const mT = this.getDescendants(!0);
            for (const WT of mT) WT.dispose(TT, UT)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.SF.notifyObservers(this), this.SF.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const mT of this._behaviors) mT.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(TT, UT, mT) {
          if (UT.hZ)
            for (let WT = 0; WT < UT.hZ.length; WT++) {
              const mT = UT.hZ[WT];
              TT.createAnimationRange(mT.name, mT.from, mT.to)
            }
        }
        getHierarchyBoundingVectors() {
          let TT, UT, mT = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            WT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.KF().incrementRenderId(), this.computeWorldMatrix(!0);
          const MT = this;
          if (MT.rV && MT.rY) {
            const mT = MT.rV();
            TT = mT.boundingBox.minimumWorld.clone(), UT = mT.boundingBox.maximumWorld.clone()
          } else TT = new zT.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), UT = new zT.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (mT) {
            const mT = this.getDescendants(!1);
            for (const MT of mT) {
              const mT = MT;
              if (mT.computeWorldMatrix(!0), WT && !WT(mT)) continue;
              if (!mT.rV || 0 === mT.getTotalVertices()) continue;
              const gT = mT.rV().boundingBox,
                nT = gT.minimumWorld,
                HT = gT.maximumWorld;
              zT.p.CheckExtends(nT, TT, UT), zT.p.CheckExtends(HT, TT, UT)
            }
          }
          return {
            min: TT,
            max: UT
          }
        }
      }, (() => {
        const zT = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        UT = [(0, MT.L)()], mT = [(0, MT.L)()], lT = [(0, MT.L)()], LT = [(0, MT.L)()], pT = [(0, MT.L)()], (0, WT.h)(null, null, UT, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: TT => "name" in TT,
            get: TT => TT.name,
            set: (TT, UT) => {
              TT.name = UT
            }
          },
          metadata: zT
        }, BT, ZT), (0, WT.h)(null, null, mT, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: TT => "id" in TT,
            get: TT => TT.id,
            set: (TT, UT) => {
              TT.id = UT
            }
          },
          metadata: zT
        }, cT, vT), (0, WT.h)(null, null, lT, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: TT => "uniqueId" in TT,
            get: TT => TT.uniqueId,
            set: (TT, UT) => {
              TT.uniqueId = UT
            }
          },
          metadata: zT
        }, fT, qT), (0, WT.h)(null, null, LT, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: TT => "state" in TT,
            get: TT => TT.state,
            set: (TT, UT) => {
              TT.state = UT
            }
          },
          metadata: zT
        }, iT, bT), (0, WT.h)(null, null, pT, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: TT => "metadata" in TT,
            get: TT => TT.metadata,
            set: (TT, UT) => {
              TT.metadata = UT
            }
          },
          metadata: zT
        }, OT, eT), zT && Object.defineProperty(TT, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zT
        })
      })(), TT._AnimationRangeFactory = (TT, UT, mT) => {
        throw (0, HT.k)("AnimationRange")
      }, TT._NodeConstructors = {}, TT
    })()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);