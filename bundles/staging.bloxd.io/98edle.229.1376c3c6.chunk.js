export const id = 229;
export const ids = [229];
export const modules = {
  37836: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => tR
    });
    var wW = MW(37587),
      CW = MW(37593),
      zR = MW(35324),
      AW = MW(35376),
      bR = MW(37800),
      yR = MW(37712),
      NW = MW(35361),
      eW = MW(37774),
      BW = MW(37615);
    let tR = (() => {
      var WW, RW;
      let MW, tR, TW, gR, iR, YW, JW, PW, IW, oW, lW, FW, fW, QW = bR.b,
        rR = [],
        cR = [],
        XW = [],
        jR = [],
        kR = [],
        aR = [],
        sW = [],
        dW = [],
        pW = [],
        hW = [],
        UW = [],
        EW = [],
        VW = [],
        mR = [],
        xR = [],
        vR = [],
        KW = [],
        uW = [],
        OW = [],
        nW = [],
        GW = [];
      return WW = class extends QW {
        get range() {
          return this._range
        }
        set range(WW) {
          this._range = WW, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(WW) {
          this._intensityMode = WW, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(WW) {
          this._radius = WW, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, wW.c)(this, RW, "f")
        }
        set renderPriority(WW) {
          (0, wW.d)(this, RW, WW, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(WW) {
          this._shadowEnabled !== WW && (this._shadowEnabled = WW, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(WW) {
          this._includedOnlyMeshes = WW, this._hookArrayForIncludedOnly(WW)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(WW) {
          this._excludedMeshes = WW, this._hookArrayForExcluded(WW)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(WW) {
          this._excludeWithLayerMask = WW, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(WW) {
          this._includeOnlyWithLayerMask = WW, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(WW) {
          this._lightmapMode !== WW && (this._lightmapMode = WW, this._markMeshesAsLightDirty())
        }
        getViewMatrix(WW) {
          return null
        }
        getProjectionMatrix(WW, RW) {
          return null
        }
        constructor(MW, CW, zR) {
          super(MW, CW, !1), this.diffuse = ((0, wW.i)(this, rR), (0, wW.i)(this, cR, new AW.d(1, 1, 1))), this.specular = ((0, wW.i)(this, XW), (0, wW.i)(this, jR, new AW.d(1, 1, 1))), this.falloffType = ((0, wW.i)(this, kR), (0, wW.i)(this, aR, WW.FALLOFF_DEFAULT)), this.intensity = ((0, wW.i)(this, sW), (0, wW.i)(this, dW, 1)), this._range = ((0, wW.i)(this, pW), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = WW.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, wW.i)(this, hW, void 0), RW.set(this, ((0, wW.i)(this, UW), (0, wW.i)(this, EW, 0))), this._shadowEnabled = ((0, wW.i)(this, VW), (0, wW.i)(this, mR, !0)), this._includedOnlyMeshes = (0, wW.i)(this, xR), this._excludeWithLayerMask = (0, wW.i)(this, vR, 0), this._includeOnlyWithLayerMask = ((0, wW.i)(this, KW), (0, wW.i)(this, uW, 0)), this._lightmapMode = ((0, wW.i)(this, OW), (0, wW.i)(this, nW, 0)), this._shadowGenerators = ((0, wW.i)(this, GW), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, zR || this.QRW().addLight(this), this._uniformBuffer = new yR.b(this.QRW().mC(), void 0, void 0, MW), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], zR || this._resyncMeshes()
        }
        transferTexturesToEffect(WW, RW) {
          return this
        }
        _bindLight(WW, RW, MW, wW) {
          let CW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const zR = WW.toString();
          let bR = !1;
          if (this._uniformBuffer.bindToEffect(MW, "Light" + zR), this._renderId !== RW.getRenderId() || this._lastUseSpecular !== wW || !this._uniformBuffer.useUbo) {
            this._renderId = RW.getRenderId(), this._lastUseSpecular = wW;
            const WW = this.getScaledIntensity();
            this.transferToEffect(MW, zR), this.diffuse.scaleToRef(WW, AW.n.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", AW.n.Color3[0], this.range, zR), wW && (this.specular.scaleToRef(WW, AW.n.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", AW.n.Color3[1], this.radius, zR)), bR = !0
          }
          if (this.transferTexturesToEffect(MW, zR), RW.shadowsEnabled && this.shadowEnabled && CW) {
            const WW = this.getShadowGenerator(RW.activeCamera) ?? this.getShadowGenerator();
            WW && (WW.bindShadowLight(zR, MW), bR = !0)
          }
          bR ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(WW) {
          let RW = "Name: " + this.name;
          if (RW += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let MW = 0; MW < this.animations.length; MW++) RW += ", animation[0]: " + this.animations[MW].toString(WW);
          return RW
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.cNW() || this._resyncMeshes()
        }
        kMW(WW) {
          super.kMW(WW), this._resyncMeshes()
        }
        getShadowGenerator() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(WW) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return zR.q.Zero()
        }
        canAffectMesh(WW) {
          return !WW || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(WW)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(WW)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & WW.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & WW.layerMask)))
        }
        dispose(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const WW = this._shadowGenerators.values();
            for (let RW = WW.next(); !0 !== RW.done; RW = WW.next()) {
              RW.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.QRW().stopAnimation(this), this._parentContainer) {
            const WW = this._parentContainer.lights.indexOf(this);
            WW > -1 && this._parentContainer.lights.splice(WW, 1), this._parentContainer = null
          }
          for (const MW of this.QRW().meshes) MW._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.QRW().removeLight(this), super.dispose(WW, RW)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(RW) {
          let MW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const wW = WW.GetConstructorFromName(this.getTypeID(), RW, this.QRW());
          if (!wW) return null;
          const CW = BW.d.Clone(wW, this);
          return RW && (CW.name = RW), MW && (CW.parent = MW), CW.kMW(this.isEnabled()), this.onClonedObservable.notifyObservers(CW), CW
        }
        serialize() {
          const WW = BW.d.Serialize(this);
          if (WW.uniqueId = this.uniqueId, WW.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(WW), this.excludedMeshes.length > 0) {
            WW.excludedMeshesIds = [];
            for (const RW of this.excludedMeshes) WW.excludedMeshesIds.push(RW.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            WW.includedOnlyMeshesIds = [];
            for (const RW of this.includedOnlyMeshes) WW.includedOnlyMeshesIds.push(RW.id)
          }
          return BW.d.AppendSerializedAnimations(this, WW), WW.WA = this.serializeAnimationRanges(), WW.isEnabled = this.isEnabled(), WW
        }
        static GetConstructorFromName(WW, RW, MW) {
          const wW = bR.b.Construct("Light_Type_" + WW, RW, MW);
          return wW || null
        }
        static Parse(RW, MW) {
          let wW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const CW = WW.GetConstructorFromName(RW.type, RW.name, MW);
          if (!CW) return null;
          const zR = BW.d.Parse(CW, RW, MW, wW);
          if (RW.excludedMeshesIds && (zR._excludedMeshesIds = RW.excludedMeshesIds), RW.includedOnlyMeshesIds && (zR._includedOnlyMeshesIds = RW.includedOnlyMeshesIds), void 0 !== RW.parentId && (zR._waitingParentId = RW.parentId), void 0 !== RW.parentInstanceIndex && (zR._waitingParentInstanceIndex = RW.parentInstanceIndex), void 0 !== RW.falloffType && (zR.falloffType = RW.falloffType), void 0 !== RW.lightmapMode && (zR.lightmapMode = RW.lightmapMode), RW.animations) {
            for (let WW = 0; WW < RW.animations.length; WW++) {
              const MW = RW.animations[WW],
                wW = (0, NW.c)("BABYLON.Animation");
              wW && zR.animations.push(wW.Parse(MW))
            }
            bR.b.ParseAnimationRanges(zR, RW, MW)
          }
          return RW.autoAnimate && MW.beginAnimation(zR, RW.autoAnimateFrom, RW.autoAnimateTo, RW.autoAnimateLoop, RW.autoAnimateSpeed || 1), void 0 !== RW.isEnabled && zR.kMW(RW.isEnabled), zR._onParsed(RW, MW, wW), zR
        }
        _onParsed(WW, RW) {}
        _hookArrayForExcluded(WW) {
          var RW = this;
          const MW = WW.push;
          WW.push = function() {
            for (var wW = arguments.length, CW = new Array(wW), zR = 0; zR < wW; zR++) CW[zR] = arguments[zR];
            const AW = MW.apply(WW, CW);
            if (RW._clusteredContainer) return AW;
            for (const WW of CW) WW._resyncLightSource(RW);
            return AW
          };
          const wW = WW.splice;
          WW.splice = (RW, MW) => {
            const CW = wW.call(WW, RW, MW ?? WW.length);
            if (this._clusteredContainer) return CW;
            for (const WW of CW) WW._resyncLightSource(this);
            return CW
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(WW) {
          var RW = this;
          const MW = WW.push;
          WW.push = function() {
            for (var wW = arguments.length, CW = new Array(wW), zR = 0; zR < wW; zR++) CW[zR] = arguments[zR];
            const AW = MW.apply(WW, CW);
            return RW._resyncMeshes(), AW
          };
          const wW = WW.splice;
          WW.splice = (RW, MW) => {
            const CW = wW.call(WW, RW, MW ?? WW.length);
            return this._resyncMeshes(), CW
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const WW of this.QRW().meshes) WW._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const WW of this.QRW().meshes) - 1 !== WW.lightSources.indexOf(this) && WW._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.QRW().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let RW = 0;
          const MW = this.getTypeID();
          let wW = this.intensityMode;
          switch (wW === WW.INTENSITYMODE_AUTOMATIC && (wW = MW === WW.LIGHTTYPEID_DIRECTIONALLIGHT ? WW.INTENSITYMODE_ILLUMINANCE : WW.INTENSITYMODE_LUMINOUSINTENSITY), MW) {
            case WW.LIGHTTYPEID_POINTLIGHT:
            case WW.LIGHTTYPEID_SPOTLIGHT:
              switch (wW) {
                case WW.INTENSITYMODE_LUMINOUSPOWER:
                  RW = 1 / (4 * Math.PI);
                  break;
                case WW.INTENSITYMODE_LUMINOUSINTENSITY:
                  RW = 1;
                  break;
                case WW.INTENSITYMODE_LUMINANCE:
                  RW = this.radius * this.radius
              }
              break;
            case WW.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (wW) {
                case WW.INTENSITYMODE_ILLUMINANCE:
                  RW = 1;
                  break;
                case WW.INTENSITYMODE_LUMINANCE: {
                  let WW = this.radius;
                  WW = Math.max(WW, .001);
                  RW = 2 * Math.PI * (1 - Math.cos(WW));
                  break
                }
              }
              break;
            case WW.LIGHTTYPEID_HEMISPHERICLIGHT:
            case WW.LIGHTTYPEID_RECT_AREALIGHT:
              RW = 1
          }
          return RW
        }
        _reorderLightsInScene() {
          const WW = this.QRW();
          0 != this._renderPriority && (WW.requireLightSorting = !0), this.QRW().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, RW = new WeakMap, (() => {
        const RW = "function" === typeof Symbol && Symbol.metadata ? Object.create(QW[Symbol.metadata] ?? null) : void 0;
        MW = [(0, CW.m)()], tR = [(0, CW.m)()], TW = [(0, CW.D)()], gR = [(0, CW.D)()], iR = [(0, CW.D)()], YW = [(0, CW.D)()], JW = [(0, CW.D)()], PW = [(0, CW.D)()], IW = [(0, CW.h)("_reorderLightsInScene")], oW = [(0, CW.D)("shadowEnabled")], lW = [(0, CW.D)("excludeWithLayerMask")], FW = [(0, CW.D)("includeOnlyWithLayerMask")], fW = [(0, CW.D)("lightmapMode")], (0, wW.e)(WW, null, iR, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: WW => "range" in WW,
            get: WW => WW.range
          },
          metadata: RW
        }, null, rR), (0, wW.e)(WW, null, YW, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "intensityMode" in WW,
            get: WW => WW.intensityMode
          },
          metadata: RW
        }, null, rR), (0, wW.e)(WW, null, JW, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: WW => "radius" in WW,
            get: WW => WW.radius
          },
          metadata: RW
        }, null, rR), (0, wW.e)(WW, null, IW, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: WW => "renderPriority" in WW,
            get: WW => WW.renderPriority,
            set: (WW, RW) => {
              WW.renderPriority = RW
            }
          },
          metadata: RW
        }, EW, VW), (0, wW.e)(null, null, MW, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: WW => "diffuse" in WW,
            get: WW => WW.diffuse,
            set: (WW, RW) => {
              WW.diffuse = RW
            }
          },
          metadata: RW
        }, cR, XW), (0, wW.e)(null, null, tR, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: WW => "specular" in WW,
            get: WW => WW.specular,
            set: (WW, RW) => {
              WW.specular = RW
            }
          },
          metadata: RW
        }, jR, kR), (0, wW.e)(null, null, TW, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: WW => "falloffType" in WW,
            get: WW => WW.falloffType,
            set: (WW, RW) => {
              WW.falloffType = RW
            }
          },
          metadata: RW
        }, aR, sW), (0, wW.e)(null, null, gR, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "intensity" in WW,
            get: WW => WW.intensity,
            set: (WW, RW) => {
              WW.intensity = RW
            }
          },
          metadata: RW
        }, dW, pW), (0, wW.e)(null, null, PW, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: WW => "_renderPriority" in WW,
            get: WW => WW._renderPriority,
            set: (WW, RW) => {
              WW._renderPriority = RW
            }
          },
          metadata: RW
        }, hW, UW), (0, wW.e)(null, null, oW, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "_shadowEnabled" in WW,
            get: WW => WW._shadowEnabled,
            set: (WW, RW) => {
              WW._shadowEnabled = RW
            }
          },
          metadata: RW
        }, mR, xR), (0, wW.e)(null, null, lW, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: WW => "_excludeWithLayerMask" in WW,
            get: WW => WW._excludeWithLayerMask,
            set: (WW, RW) => {
              WW._excludeWithLayerMask = RW
            }
          },
          metadata: RW
        }, vR, KW), (0, wW.e)(null, null, FW, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: WW => "_includeOnlyWithLayerMask" in WW,
            get: WW => WW._includeOnlyWithLayerMask,
            set: (WW, RW) => {
              WW._includeOnlyWithLayerMask = RW
            }
          },
          metadata: RW
        }, uW, OW), (0, wW.e)(null, null, fW, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "_lightmapMode" in WW,
            get: WW => WW._lightmapMode,
            set: (WW, RW) => {
              WW._lightmapMode = RW
            }
          },
          metadata: RW
        }, nW, GW), RW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: RW
        })
      })(), WW.FALLOFF_DEFAULT = eW.c.FALLOFF_DEFAULT, WW.FALLOFF_PHYSICAL = eW.c.FALLOFF_PHYSICAL, WW.FALLOFF_GLTF = eW.c.FALLOFF_GLTF, WW.FALLOFF_STANDARD = eW.c.FALLOFF_STANDARD, WW.LIGHTMAP_DEFAULT = eW.c.LIGHTMAP_DEFAULT, WW.LIGHTMAP_SPECULAR = eW.c.LIGHTMAP_SPECULAR, WW.LIGHTMAP_SHADOWSONLY = eW.c.LIGHTMAP_SHADOWSONLY, WW.INTENSITYMODE_AUTOMATIC = eW.c.INTENSITYMODE_AUTOMATIC, WW.INTENSITYMODE_LUMINOUSPOWER = eW.c.INTENSITYMODE_LUMINOUSPOWER, WW.INTENSITYMODE_LUMINOUSINTENSITY = eW.c.INTENSITYMODE_LUMINOUSINTENSITY, WW.INTENSITYMODE_ILLUMINANCE = eW.c.INTENSITYMODE_ILLUMINANCE, WW.INTENSITYMODE_LUMINANCE = eW.c.INTENSITYMODE_LUMINANCE, WW.LIGHTTYPEID_POINTLIGHT = eW.c.LIGHTTYPEID_POINTLIGHT, WW.LIGHTTYPEID_DIRECTIONALLIGHT = eW.c.LIGHTTYPEID_DIRECTIONALLIGHT, WW.LIGHTTYPEID_SPOTLIGHT = eW.c.LIGHTTYPEID_SPOTLIGHT, WW.LIGHTTYPEID_HEMISPHERICLIGHT = eW.c.LIGHTTYPEID_HEMISPHERICLIGHT, WW.LIGHTTYPEID_RECT_AREALIGHT = eW.c.LIGHTTYPEID_RECT_AREALIGHT, WW
    })()
  },
  37800: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => BW
    });
    var wW = MW(37587),
      CW = MW(35324),
      zR = MW(37593),
      AW = MW(35346),
      bR = MW(35344),
      yR = MW(37470),
      NW = MW(37615);
    class eW {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new AW.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new AW.c, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let BW = (() => {
      var WW;
      let RW, MW, BW, tR, TW, gR = [],
        iR = [],
        YW = [],
        JW = [],
        PW = [],
        IW = [],
        oW = [],
        lW = [],
        FW = [],
        fW = [];
      return WW = class {
        static AddNodeConstructor(WW, RW) {
          this._NodeConstructors[WW] = RW
        }
        static Construct(WW, RW, MW, wW) {
          const CW = this._NodeConstructors[WW];
          return CW ? CW(RW, MW, wW) : null
        }
        set accessibilityTag(WW) {
          this._accessibilityTag = WW, this.onAccessibilityTagChangedObservable.notifyObservers(WW)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(WW) {
          this._nodeDataStorage._doNotSerialize = WW
        }
        cNW() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(WW) {
          if (this._parentNode === WW) return;
          const RW = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const RW = this._parentNode._children.indexOf(this); - 1 !== RW && this._parentNode._children.splice(RW, 1), WW || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = WW, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), RW || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(WW) {
          this._nodeDataStorage._inheritVisibility = WW
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(WW) {
          this._nodeDataStorage._isVisible = WW
        }
        _serializeAsParent(WW) {
          WW.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const WW = this._scene.rootNodes,
              RW = WW.length - 1;
            WW[this._nodeDataStorage._sceneRootNodesIndex] = WW[RW], WW[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(WW) {
          this._animationPropertiesOverride = WW
        }
        getClassName() {
          return "Node"
        }
        set onDispose(WW) {
          this._onDisposeObserver && this.rMW.remove(this._onDisposeObserver), this._onDisposeObserver = this.rMW.add(WW)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var WW;
          return (WW = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (WW._onEffectiveEnabledStateChangedObservable = new AW.c)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            MW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new eW, this.name = (0, wW.i)(this, gR, void 0), this.id = ((0, wW.i)(this, iR), (0, wW.i)(this, YW, void 0)), this.uniqueId = ((0, wW.i)(this, JW), (0, wW.i)(this, PW, void 0)), this.state = ((0, wW.i)(this, IW), (0, wW.i)(this, oW, "")), this.metadata = ((0, wW.i)(this, lW), (0, wW.i)(this, FW, null)), this._internalMetadata = (0, wW.i)(this, fW), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new AW.c, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = CW.d.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.rMW = new AW.c, this._onDisposeObserver = null, this._behaviors = new Array, this.name = WW, this.id = WW, this._scene = RW || bR.d.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), MW && this._addToSceneRootNodes()
        }
        QRW() {
          return this._scene
        }
        mC() {
          return this._scene.mC()
        }
        addBehavior(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(WW) || (WW.init(), this._scene.isLoading && !RW ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(WW) && WW.attach(this)
          })) : WW.attach(this), this._behaviors.push(WW)), this
        }
        removeBehavior(WW) {
          const RW = this._behaviors.indexOf(WW);
          return -1 === RW || (this._behaviors.splice(RW, 1), WW.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(WW) {
          for (const RW of this._behaviors)
            if (RW.name === WW) return RW;
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
        updateCache(WW) {
          !WW && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(WW) {
          return this.parent ? this.parent._getActionManagerForTrigger(WW, !1) : null
        }
        _updateCache(WW) {}
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
        KbW(WW) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const WW = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!WW && WW.hasObservers()
        }
        _syncParentEnabledState() {
          const WW = this._hasEffectiveEnabledStateObservers(),
            RW = WW ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const MW of this._children) MW._syncParentEnabledState();
          if (WW) {
            const WW = this.isEnabled();
            WW !== RW && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(WW)
          }
        }
        kMW(WW) {
          if (this._nodeDataStorage._isEnabled === WW) return;
          const RW = this._hasEffectiveEnabledStateObservers(),
            MW = RW ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = WW, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(WW), RW) {
            const WW = this.isEnabled();
            WW !== MW && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(WW)
          }
        }
        isDescendantOf(WW) {
          return !!this.parent && (this.parent === WW || this.parent.isDescendantOf(WW))
        }
        _getDescendants(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            MW = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let wW = 0; wW < this._children.length; wW++) {
              const CW = this._children[wW];
              MW && !MW(CW) || WW.push(CW), RW || CW._getDescendants(WW, !1, MW)
            }
        }
        getDescendants(WW, RW) {
          const MW = [];
          return this._getDescendants(MW, WW, RW), MW
        }
        getChildMeshes(WW, RW) {
          const MW = [];
          return this._getDescendants(MW, WW, (WW => (!RW || RW(WW)) && void 0 !== WW.cullingStrategy)), MW
        }
        getChildren(WW) {
          let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(RW, WW)
        }
        _setReady(WW) {
          WW !== this._nodeDataStorage._isReady && (WW ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(WW) {
          for (let RW = 0; RW < this.animations.length; RW++) {
            const MW = this.animations[RW];
            if (MW.name === WW) return MW
          }
          return null
        }
        createAnimationRange(RW, MW, wW) {
          if (!this._ranges[RW]) {
            this._ranges[RW] = WW._AnimationRangeFactory(RW, MW, wW);
            for (let WW = 0, CW = this.animations.length; WW < CW; WW++) this.animations[WW] && this.animations[WW].createRange(RW, MW, wW)
          }
        }
        deleteAnimationRange(WW) {
          let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let MW = 0, wW = this.animations.length; MW < wW; MW++) this.animations[MW] && this.animations[MW].deleteRange(WW, RW);
          this._ranges[WW] = null
        }
        getAnimationRange(WW) {
          return this._ranges[WW] || null
        }
        clone(RW, MW, wW) {
          const CW = NW.d.Clone((() => new WW(RW, this.QRW())), this);
          if (MW && (CW.parent = MW), !wW) {
            const WW = this.getDescendants(!0);
            for (let MW = 0; MW < WW.length; MW++) {
              const wW = WW[MW];
              wW.clone(RW + "." + wW.name, CW)
            }
          }
          return CW
        }
        getAnimationRanges() {
          const WW = [];
          let RW;
          for (RW in this._ranges) WW.push(this._ranges[RW]);
          return WW
        }
        beginAnimation(WW, RW, MW, wW) {
          const CW = this.getAnimationRange(WW);
          return CW ? this._scene.beginAnimation(this, CW.from, CW.to, RW, MW, wW) : null
        }
        serializeAnimationRanges() {
          const WW = [];
          for (const RW in this._ranges) {
            const MW = this._ranges[RW];
            if (!MW) continue;
            const wW = {};
            wW.name = RW, wW.from = MW.from, wW.to = MW.to, WW.push(wW)
          }
          return WW
        }
        computeWorldMatrix(WW) {
          return this._worldMatrix || (this._worldMatrix = CW.d.Identity()), this._worldMatrix
        }
        dispose(WW) {
          let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !WW) {
            const MW = this.getDescendants(!0);
            for (const wW of MW) wW.dispose(WW, RW)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.rMW.notifyObservers(this), this.rMW.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const MW of this._behaviors) MW.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(WW, RW, MW) {
          if (RW.WA)
            for (let wW = 0; wW < RW.WA.length; wW++) {
              const MW = RW.WA[wW];
              WW.createAnimationRange(MW.name, MW.from, MW.to)
            }
        }
        getHierarchyBoundingVectors() {
          let WW, RW, MW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            wW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.QRW().incrementRenderId(), this.computeWorldMatrix(!0);
          const zR = this;
          if (zR.LRW && zR.Qs) {
            const MW = zR.LRW();
            WW = MW.boundingBox.minimumWorld.clone(), RW = MW.boundingBox.maximumWorld.clone()
          } else WW = new CW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), RW = new CW.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (MW) {
            const MW = this.getDescendants(!1);
            for (const zR of MW) {
              const MW = zR;
              if (MW.computeWorldMatrix(!0), wW && !wW(MW)) continue;
              if (!MW.LRW || 0 === MW.getTotalVertices()) continue;
              const AW = MW.LRW().boundingBox,
                bR = AW.minimumWorld,
                yR = AW.maximumWorld;
              CW.q.CheckExtends(bR, WW, RW), CW.q.CheckExtends(yR, WW, RW)
            }
          }
          return {
            min: WW,
            max: RW
          }
        }
      }, (() => {
        const CW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RW = [(0, zR.D)()], MW = [(0, zR.D)()], BW = [(0, zR.D)()], tR = [(0, zR.D)()], TW = [(0, zR.D)()], (0, wW.e)(null, null, RW, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: WW => "name" in WW,
            get: WW => WW.name,
            set: (WW, RW) => {
              WW.name = RW
            }
          },
          metadata: CW
        }, gR, iR), (0, wW.e)(null, null, MW, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: WW => "id" in WW,
            get: WW => WW.id,
            set: (WW, RW) => {
              WW.id = RW
            }
          },
          metadata: CW
        }, YW, JW), (0, wW.e)(null, null, BW, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: WW => "uniqueId" in WW,
            get: WW => WW.uniqueId,
            set: (WW, RW) => {
              WW.uniqueId = RW
            }
          },
          metadata: CW
        }, PW, IW), (0, wW.e)(null, null, tR, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: WW => "state" in WW,
            get: WW => WW.state,
            set: (WW, RW) => {
              WW.state = RW
            }
          },
          metadata: CW
        }, oW, lW), (0, wW.e)(null, null, TW, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: WW => "metadata" in WW,
            get: WW => WW.metadata,
            set: (WW, RW) => {
              WW.metadata = RW
            }
          },
          metadata: CW
        }, FW, fW), CW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: CW
        })
      })(), WW._AnimationRangeFactory = (WW, RW, MW) => {
        throw (0, yR.g)("AnimationRange")
      }, WW._NodeConstructors = {}, WW
    })()
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);