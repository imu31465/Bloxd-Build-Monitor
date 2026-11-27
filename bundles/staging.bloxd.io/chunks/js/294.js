export const id = 294;
export const ids = [294];
export const modules = {
  41773: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => xW
    });
    var mW = OW(41516),
      EW = OW(41519),
      NW = OW(38241),
      PW = OW(38372),
      LW = OW(41732),
      cW = OW(41649),
      wW = OW(38299),
      tW = OW(41710),
      ZW = OW(41538);
    let xW = (() => {
      var WW, iW;
      let OW, xW, lW, AW, bW, jW, UW, kW, sW, MW, KW, SW, YW, yW = LW.d,
        TW = [],
        JW = [],
        hW = [],
        HW = [],
        nW = [],
        uW = [],
        oW = [],
        dW = [],
        eW = [],
        vW = [],
        gW = [],
        DW = [],
        VW = [],
        pW = [],
        fW = [],
        CW = [],
        XW = [],
        BW = [],
        qW = [],
        RW = [],
        GW = [];
      return WW = class extends yW {
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
          return (0, mW.b)(this, iW, "f")
        }
        set renderPriority(WW) {
          (0, mW.d)(this, iW, WW, "f")
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
        getProjectionMatrix(WW, iW) {
          return null
        }
        constructor(OW, EW, NW) {
          super(OW, EW, !1), this.diffuse = ((0, mW.g)(this, TW), (0, mW.g)(this, JW, new PW.b(1, 1, 1))), this.specular = ((0, mW.g)(this, hW), (0, mW.g)(this, HW, new PW.b(1, 1, 1))), this.falloffType = ((0, mW.g)(this, nW), (0, mW.g)(this, uW, WW.FALLOFF_DEFAULT)), this.intensity = ((0, mW.g)(this, oW), (0, mW.g)(this, dW, 1)), this._range = ((0, mW.g)(this, eW), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = WW.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, mW.g)(this, vW, void 0), iW.set(this, ((0, mW.g)(this, gW), (0, mW.g)(this, DW, 0))), this._shadowEnabled = ((0, mW.g)(this, VW), (0, mW.g)(this, pW, !0)), this._includedOnlyMeshes = (0, mW.g)(this, fW), this._excludeWithLayerMask = (0, mW.g)(this, CW, 0), this._includeOnlyWithLayerMask = ((0, mW.g)(this, XW), (0, mW.g)(this, BW, 0)), this._lightmapMode = ((0, mW.g)(this, qW), (0, mW.g)(this, RW, 0)), this._shadowGenerators = ((0, mW.g)(this, GW), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, NW || this.bD().addLight(this), this._uniformBuffer = new cW.c(this.bD().VA(), void 0, void 0, OW), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], NW || this._resyncMeshes()
        }
        transferTexturesToEffect(WW, iW) {
          return this
        }
        _bindLight(WW, iW, OW, mW) {
          let EW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const NW = WW.toString();
          let LW = !1;
          if (this._uniformBuffer.bindToEffect(OW, "Light" + NW), this._renderId !== iW.getRenderId() || this._lastUseSpecular !== mW || !this._uniformBuffer.useUbo) {
            this._renderId = iW.getRenderId(), this._lastUseSpecular = mW;
            const WW = this.getScaledIntensity();
            this.transferToEffect(OW, NW), this.diffuse.scaleToRef(WW, PW.j.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", PW.j.Color3[0], this.range, NW), mW && (this.specular.scaleToRef(WW, PW.j.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", PW.j.Color3[1], this.radius, NW)), LW = !0
          }
          if (this.transferTexturesToEffect(OW, NW), iW.shadowsEnabled && this.shadowEnabled && EW) {
            const WW = this.getShadowGenerator(iW.activeCamera) ?? this.getShadowGenerator();
            WW && (WW.bindShadowLight(NW, OW), LW = !0)
          }
          LW ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(WW) {
          let iW = "Name: " + this.name;
          if (iW += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let OW = 0; OW < this.animations.length; OW++) iW += ", animation[0]: " + this.animations[OW].toString(WW);
          return iW
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.Ay() || this._resyncMeshes()
        }
        WK(WW) {
          super.WK(WW), this._resyncMeshes()
        }
        getShadowGenerator() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(WW) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return NW.q.Zero()
        }
        canAffectMesh(WW) {
          return !WW || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(WW)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(WW)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & WW.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & WW.layerMask)))
        }
        dispose(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const WW = this._shadowGenerators.values();
            for (let iW = WW.next(); !0 !== iW.done; iW = WW.next()) {
              iW.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.bD().stopAnimation(this), this._parentContainer) {
            const WW = this._parentContainer.lights.indexOf(this);
            WW > -1 && this._parentContainer.lights.splice(WW, 1), this._parentContainer = null
          }
          for (const OW of this.bD().meshes) OW._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.bD().removeLight(this), super.dispose(WW, iW)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(iW) {
          let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const mW = WW.GetConstructorFromName(this.getTypeID(), iW, this.bD());
          if (!mW) return null;
          const EW = ZW.d.Clone(mW, this);
          return iW && (EW.name = iW), OW && (EW.parent = OW), EW.WK(this.isEnabled()), this.onClonedObservable.notifyObservers(EW), EW
        }
        serialize() {
          const WW = ZW.d.Serialize(this);
          if (WW.uniqueId = this.uniqueId, WW.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(WW), this.excludedMeshes.length > 0) {
            WW.excludedMeshesIds = [];
            for (const iW of this.excludedMeshes) WW.excludedMeshesIds.push(iW.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            WW.includedOnlyMeshesIds = [];
            for (const iW of this.includedOnlyMeshes) WW.includedOnlyMeshesIds.push(iW.id)
          }
          return ZW.d.AppendSerializedAnimations(this, WW), WW.kj = this.serializeAnimationRanges(), WW.isEnabled = this.isEnabled(), WW
        }
        static GetConstructorFromName(WW, iW, OW) {
          const mW = LW.d.Construct("Light_Type_" + WW, iW, OW);
          return mW || null
        }
        static Parse(iW, OW) {
          let mW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const EW = WW.GetConstructorFromName(iW.type, iW.name, OW);
          if (!EW) return null;
          const NW = ZW.d.Parse(EW, iW, OW, mW);
          if (iW.excludedMeshesIds && (NW._excludedMeshesIds = iW.excludedMeshesIds), iW.includedOnlyMeshesIds && (NW._includedOnlyMeshesIds = iW.includedOnlyMeshesIds), void 0 !== iW.parentId && (NW._waitingParentId = iW.parentId), void 0 !== iW.parentInstanceIndex && (NW._waitingParentInstanceIndex = iW.parentInstanceIndex), void 0 !== iW.falloffType && (NW.falloffType = iW.falloffType), void 0 !== iW.lightmapMode && (NW.lightmapMode = iW.lightmapMode), iW.animations) {
            for (let WW = 0; WW < iW.animations.length; WW++) {
              const OW = iW.animations[WW],
                mW = (0, wW.d)("BABYLON.Animation");
              mW && NW.animations.push(mW.Parse(OW))
            }
            LW.d.ParseAnimationRanges(NW, iW, OW)
          }
          return iW.autoAnimate && OW.beginAnimation(NW, iW.autoAnimateFrom, iW.autoAnimateTo, iW.autoAnimateLoop, iW.autoAnimateSpeed || 1), void 0 !== iW.isEnabled && NW.WK(iW.isEnabled), NW._onParsed(iW, OW, mW), NW
        }
        _onParsed(WW, iW) {}
        _hookArrayForExcluded(WW) {
          var iW = this;
          const OW = WW.push;
          WW.push = function() {
            for (var mW = arguments.length, EW = new Array(mW), NW = 0; NW < mW; NW++) EW[NW] = arguments[NW];
            const PW = OW.apply(WW, EW);
            if (iW._clusteredContainer) return PW;
            for (const WW of EW) WW._resyncLightSource(iW);
            return PW
          };
          const mW = WW.splice;
          WW.splice = (iW, OW) => {
            const EW = mW.call(WW, iW, OW ?? WW.length);
            if (this._clusteredContainer) return EW;
            for (const WW of EW) WW._resyncLightSource(this);
            return EW
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(WW) {
          var iW = this;
          const OW = WW.push;
          WW.push = function() {
            for (var mW = arguments.length, EW = new Array(mW), NW = 0; NW < mW; NW++) EW[NW] = arguments[NW];
            const PW = OW.apply(WW, EW);
            return iW._resyncMeshes(), PW
          };
          const mW = WW.splice;
          WW.splice = (iW, OW) => {
            const EW = mW.call(WW, iW, OW ?? WW.length);
            return this._resyncMeshes(), EW
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const WW of this.bD().meshes) WW._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const WW of this.bD().meshes) - 1 !== WW.lightSources.indexOf(this) && WW._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.bD().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let iW = 0;
          const OW = this.getTypeID();
          let mW = this.intensityMode;
          switch (mW === WW.INTENSITYMODE_AUTOMATIC && (mW = OW === WW.LIGHTTYPEID_DIRECTIONALLIGHT ? WW.INTENSITYMODE_ILLUMINANCE : WW.INTENSITYMODE_LUMINOUSINTENSITY), OW) {
            case WW.LIGHTTYPEID_POINTLIGHT:
            case WW.LIGHTTYPEID_SPOTLIGHT:
              switch (mW) {
                case WW.INTENSITYMODE_LUMINOUSPOWER:
                  iW = 1 / (4 * Math.PI);
                  break;
                case WW.INTENSITYMODE_LUMINOUSINTENSITY:
                  iW = 1;
                  break;
                case WW.INTENSITYMODE_LUMINANCE:
                  iW = this.radius * this.radius
              }
              break;
            case WW.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (mW) {
                case WW.INTENSITYMODE_ILLUMINANCE:
                  iW = 1;
                  break;
                case WW.INTENSITYMODE_LUMINANCE: {
                  let WW = this.radius;
                  WW = Math.max(WW, .001);
                  iW = 2 * Math.PI * (1 - Math.cos(WW));
                  break
                }
              }
              break;
            case WW.LIGHTTYPEID_HEMISPHERICLIGHT:
            case WW.LIGHTTYPEID_RECT_AREALIGHT:
              iW = 1
          }
          return iW
        }
        _reorderLightsInScene() {
          const WW = this.bD();
          0 != this._renderPriority && (WW.requireLightSorting = !0), this.bD().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, iW = new WeakMap, (() => {
        const iW = "function" === typeof Symbol && Symbol.metadata ? Object.create(yW[Symbol.metadata] ?? null) : void 0;
        OW = [(0, EW.n)()], xW = [(0, EW.n)()], lW = [(0, EW.M)()], AW = [(0, EW.M)()], bW = [(0, EW.M)()], jW = [(0, EW.M)()], UW = [(0, EW.M)()], kW = [(0, EW.M)()], sW = [(0, EW.h)("_reorderLightsInScene")], MW = [(0, EW.M)("shadowEnabled")], KW = [(0, EW.M)("excludeWithLayerMask")], SW = [(0, EW.M)("includeOnlyWithLayerMask")], YW = [(0, EW.M)("lightmapMode")], (0, mW.e)(WW, null, bW, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: WW => "range" in WW,
            get: WW => WW.range
          },
          metadata: iW
        }, null, TW), (0, mW.e)(WW, null, jW, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "intensityMode" in WW,
            get: WW => WW.intensityMode
          },
          metadata: iW
        }, null, TW), (0, mW.e)(WW, null, UW, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: WW => "radius" in WW,
            get: WW => WW.radius
          },
          metadata: iW
        }, null, TW), (0, mW.e)(WW, null, sW, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: WW => "renderPriority" in WW,
            get: WW => WW.renderPriority,
            set: (WW, iW) => {
              WW.renderPriority = iW
            }
          },
          metadata: iW
        }, DW, VW), (0, mW.e)(null, null, OW, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: WW => "diffuse" in WW,
            get: WW => WW.diffuse,
            set: (WW, iW) => {
              WW.diffuse = iW
            }
          },
          metadata: iW
        }, JW, hW), (0, mW.e)(null, null, xW, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: WW => "specular" in WW,
            get: WW => WW.specular,
            set: (WW, iW) => {
              WW.specular = iW
            }
          },
          metadata: iW
        }, HW, nW), (0, mW.e)(null, null, lW, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: WW => "falloffType" in WW,
            get: WW => WW.falloffType,
            set: (WW, iW) => {
              WW.falloffType = iW
            }
          },
          metadata: iW
        }, uW, oW), (0, mW.e)(null, null, AW, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: WW => "intensity" in WW,
            get: WW => WW.intensity,
            set: (WW, iW) => {
              WW.intensity = iW
            }
          },
          metadata: iW
        }, dW, eW), (0, mW.e)(null, null, kW, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: WW => "_renderPriority" in WW,
            get: WW => WW._renderPriority,
            set: (WW, iW) => {
              WW._renderPriority = iW
            }
          },
          metadata: iW
        }, vW, gW), (0, mW.e)(null, null, MW, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: WW => "_shadowEnabled" in WW,
            get: WW => WW._shadowEnabled,
            set: (WW, iW) => {
              WW._shadowEnabled = iW
            }
          },
          metadata: iW
        }, pW, fW), (0, mW.e)(null, null, KW, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: WW => "_excludeWithLayerMask" in WW,
            get: WW => WW._excludeWithLayerMask,
            set: (WW, iW) => {
              WW._excludeWithLayerMask = iW
            }
          },
          metadata: iW
        }, CW, XW), (0, mW.e)(null, null, SW, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: WW => "_includeOnlyWithLayerMask" in WW,
            get: WW => WW._includeOnlyWithLayerMask,
            set: (WW, iW) => {
              WW._includeOnlyWithLayerMask = iW
            }
          },
          metadata: iW
        }, BW, qW), (0, mW.e)(null, null, YW, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: WW => "_lightmapMode" in WW,
            get: WW => WW._lightmapMode,
            set: (WW, iW) => {
              WW._lightmapMode = iW
            }
          },
          metadata: iW
        }, RW, GW), iW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: iW
        })
      })(), WW.FALLOFF_DEFAULT = tW.e.FALLOFF_DEFAULT, WW.FALLOFF_PHYSICAL = tW.e.FALLOFF_PHYSICAL, WW.FALLOFF_GLTF = tW.e.FALLOFF_GLTF, WW.FALLOFF_STANDARD = tW.e.FALLOFF_STANDARD, WW.LIGHTMAP_DEFAULT = tW.e.LIGHTMAP_DEFAULT, WW.LIGHTMAP_SPECULAR = tW.e.LIGHTMAP_SPECULAR, WW.LIGHTMAP_SHADOWSONLY = tW.e.LIGHTMAP_SHADOWSONLY, WW.INTENSITYMODE_AUTOMATIC = tW.e.INTENSITYMODE_AUTOMATIC, WW.INTENSITYMODE_LUMINOUSPOWER = tW.e.INTENSITYMODE_LUMINOUSPOWER, WW.INTENSITYMODE_LUMINOUSINTENSITY = tW.e.INTENSITYMODE_LUMINOUSINTENSITY, WW.INTENSITYMODE_ILLUMINANCE = tW.e.INTENSITYMODE_ILLUMINANCE, WW.INTENSITYMODE_LUMINANCE = tW.e.INTENSITYMODE_LUMINANCE, WW.LIGHTTYPEID_POINTLIGHT = tW.e.LIGHTTYPEID_POINTLIGHT, WW.LIGHTTYPEID_DIRECTIONALLIGHT = tW.e.LIGHTTYPEID_DIRECTIONALLIGHT, WW.LIGHTTYPEID_SPOTLIGHT = tW.e.LIGHTTYPEID_SPOTLIGHT, WW.LIGHTTYPEID_HEMISPHERICLIGHT = tW.e.LIGHTTYPEID_HEMISPHERICLIGHT, WW.LIGHTTYPEID_RECT_AREALIGHT = tW.e.LIGHTTYPEID_RECT_AREALIGHT, WW
    })()
  },
  41732: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => ZW
    });
    var mW = OW(41516),
      EW = OW(38241),
      NW = OW(41519),
      PW = OW(38276),
      LW = OW(38270),
      cW = OW(41415),
      wW = OW(41538);
    class tW {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new PW.e, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new PW.e, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let ZW = (() => {
      var WW;
      let iW, OW, ZW, xW, lW, AW = [],
        bW = [],
        jW = [],
        UW = [],
        kW = [],
        sW = [],
        MW = [],
        KW = [],
        SW = [],
        YW = [];
      return WW = class {
        static AddNodeConstructor(WW, iW) {
          this._NodeConstructors[WW] = iW
        }
        static Construct(WW, iW, OW, mW) {
          const EW = this._NodeConstructors[WW];
          return EW ? EW(iW, OW, mW) : null
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
        Ay() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(WW) {
          if (this._parentNode === WW) return;
          const iW = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const iW = this._parentNode._children.indexOf(this); - 1 !== iW && this._parentNode._children.splice(iW, 1), WW || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = WW, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), iW || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
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
              iW = WW.length - 1;
            WW[this._nodeDataStorage._sceneRootNodesIndex] = WW[iW], WW[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
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
          this._onDisposeObserver && this.jD.remove(this._onDisposeObserver), this._onDisposeObserver = this.jD.add(WW)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var WW;
          return (WW = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (WW._onEffectiveEnabledStateChangedObservable = new PW.e)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            OW = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new tW, this.name = (0, mW.g)(this, AW, void 0), this.id = ((0, mW.g)(this, bW), (0, mW.g)(this, jW, void 0)), this.uniqueId = ((0, mW.g)(this, UW), (0, mW.g)(this, kW, void 0)), this.state = ((0, mW.g)(this, sW), (0, mW.g)(this, MW, "")), this.metadata = ((0, mW.g)(this, KW), (0, mW.g)(this, SW, null)), this._internalMetadata = (0, mW.g)(this, YW), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new PW.e, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = EW.d.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.jD = new PW.e, this._onDisposeObserver = null, this._behaviors = new Array, this.name = WW, this.id = WW, this._scene = iW || LW.d.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), OW && this._addToSceneRootNodes()
        }
        bD() {
          return this._scene
        }
        VA() {
          return this._scene.VA()
        }
        addBehavior(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(WW) || (WW.init(), this._scene.isLoading && !iW ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(WW) && WW.attach(this)
          })) : WW.attach(this), this._behaviors.push(WW)), this
        }
        removeBehavior(WW) {
          const iW = this._behaviors.indexOf(WW);
          return -1 === iW || (this._behaviors.splice(iW, 1), WW.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(WW) {
          for (const iW of this._behaviors)
            if (iW.name === WW) return iW;
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
        xOW(WW) {
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
            iW = WW ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const OW of this._children) OW._syncParentEnabledState();
          if (WW) {
            const WW = this.isEnabled();
            WW !== iW && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(WW)
          }
        }
        WK(WW) {
          if (this._nodeDataStorage._isEnabled === WW) return;
          const iW = this._hasEffectiveEnabledStateObservers(),
            OW = iW ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = WW, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(WW), iW) {
            const WW = this.isEnabled();
            WW !== OW && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(WW)
          }
        }
        isDescendantOf(WW) {
          return !!this.parent && (this.parent === WW || this.parent.isDescendantOf(WW))
        }
        _getDescendants(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            OW = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let mW = 0; mW < this._children.length; mW++) {
              const EW = this._children[mW];
              OW && !OW(EW) || WW.push(EW), iW || EW._getDescendants(WW, !1, OW)
            }
        }
        getDescendants(WW, iW) {
          const OW = [];
          return this._getDescendants(OW, WW, iW), OW
        }
        getChildMeshes(WW, iW) {
          const OW = [];
          return this._getDescendants(OW, WW, (WW => (!iW || iW(WW)) && void 0 !== WW.cullingStrategy)), OW
        }
        getChildren(WW) {
          let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(iW, WW)
        }
        _setReady(WW) {
          WW !== this._nodeDataStorage._isReady && (WW ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(WW) {
          for (let iW = 0; iW < this.animations.length; iW++) {
            const OW = this.animations[iW];
            if (OW.name === WW) return OW
          }
          return null
        }
        createAnimationRange(iW, OW, mW) {
          if (!this._ranges[iW]) {
            this._ranges[iW] = WW._AnimationRangeFactory(iW, OW, mW);
            for (let WW = 0, EW = this.animations.length; WW < EW; WW++) this.animations[WW] && this.animations[WW].createRange(iW, OW, mW)
          }
        }
        deleteAnimationRange(WW) {
          let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let OW = 0, mW = this.animations.length; OW < mW; OW++) this.animations[OW] && this.animations[OW].deleteRange(WW, iW);
          this._ranges[WW] = null
        }
        getAnimationRange(WW) {
          return this._ranges[WW] || null
        }
        clone(iW, OW, mW) {
          const EW = wW.d.Clone((() => new WW(iW, this.bD())), this);
          if (OW && (EW.parent = OW), !mW) {
            const WW = this.getDescendants(!0);
            for (let OW = 0; OW < WW.length; OW++) {
              const mW = WW[OW];
              mW.clone(iW + "." + mW.name, EW)
            }
          }
          return EW
        }
        getAnimationRanges() {
          const WW = [];
          let iW;
          for (iW in this._ranges) WW.push(this._ranges[iW]);
          return WW
        }
        beginAnimation(WW, iW, OW, mW) {
          const EW = this.getAnimationRange(WW);
          return EW ? this._scene.beginAnimation(this, EW.from, EW.to, iW, OW, mW) : null
        }
        serializeAnimationRanges() {
          const WW = [];
          for (const iW in this._ranges) {
            const OW = this._ranges[iW];
            if (!OW) continue;
            const mW = {};
            mW.name = iW, mW.from = OW.from, mW.to = OW.to, WW.push(mW)
          }
          return WW
        }
        computeWorldMatrix(WW) {
          return this._worldMatrix || (this._worldMatrix = EW.d.Identity()), this._worldMatrix
        }
        dispose(WW) {
          let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !WW) {
            const OW = this.getDescendants(!0);
            for (const mW of OW) mW.dispose(WW, iW)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.jD.notifyObservers(this), this.jD.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const OW of this._behaviors) OW.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(WW, iW, OW) {
          if (iW.kj)
            for (let mW = 0; mW < iW.kj.length; mW++) {
              const OW = iW.kj[mW];
              WW.createAnimationRange(OW.name, OW.from, OW.to)
            }
        }
        getHierarchyBoundingVectors() {
          let WW, iW, OW = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.bD().incrementRenderId(), this.computeWorldMatrix(!0);
          const NW = this;
          if (NW.KV && NW.hY) {
            const OW = NW.KV();
            WW = OW.boundingBox.minimumWorld.clone(), iW = OW.boundingBox.maximumWorld.clone()
          } else WW = new EW.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), iW = new EW.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (OW) {
            const OW = this.getDescendants(!1);
            for (const NW of OW) {
              const OW = NW;
              if (OW.computeWorldMatrix(!0), mW && !mW(OW)) continue;
              if (!OW.KV || 0 === OW.getTotalVertices()) continue;
              const PW = OW.KV().boundingBox,
                LW = PW.minimumWorld,
                cW = PW.maximumWorld;
              EW.q.CheckExtends(LW, WW, iW), EW.q.CheckExtends(cW, WW, iW)
            }
          }
          return {
            min: WW,
            max: iW
          }
        }
      }, (() => {
        const EW = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        iW = [(0, NW.M)()], OW = [(0, NW.M)()], ZW = [(0, NW.M)()], xW = [(0, NW.M)()], lW = [(0, NW.M)()], (0, mW.e)(null, null, iW, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: WW => "name" in WW,
            get: WW => WW.name,
            set: (WW, iW) => {
              WW.name = iW
            }
          },
          metadata: EW
        }, AW, bW), (0, mW.e)(null, null, OW, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: WW => "id" in WW,
            get: WW => WW.id,
            set: (WW, iW) => {
              WW.id = iW
            }
          },
          metadata: EW
        }, jW, UW), (0, mW.e)(null, null, ZW, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: WW => "uniqueId" in WW,
            get: WW => WW.uniqueId,
            set: (WW, iW) => {
              WW.uniqueId = iW
            }
          },
          metadata: EW
        }, kW, sW), (0, mW.e)(null, null, xW, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: WW => "state" in WW,
            get: WW => WW.state,
            set: (WW, iW) => {
              WW.state = iW
            }
          },
          metadata: EW
        }, MW, KW), (0, mW.e)(null, null, lW, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: WW => "metadata" in WW,
            get: WW => WW.metadata,
            set: (WW, iW) => {
              WW.metadata = iW
            }
          },
          metadata: EW
        }, SW, YW), EW && Object.defineProperty(WW, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: EW
        })
      })(), WW._AnimationRangeFactory = (WW, iW, OW) => {
        throw (0, cW.o)("AnimationRange")
      }, WW._NodeConstructors = {}, WW
    })()
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);