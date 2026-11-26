export const id = 288;
export const ids = [288];
export const modules = {
  41535: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => GH
    });
    var AH = LH(41290),
      rH = LH(41297),
      SH = LH(37963),
      hH = LH(38074),
      tH = LH(41498),
      zH = LH(41416),
      CH = LH(38012),
      EH = LH(41472),
      XH = LH(41319);
    let GH = (() => {
      var HH, BH;
      let LH, GH, YH, uH, QH, WH, MH, xH, vH, PH, TH, UH, VH, OH = tH.b,
        bH = [],
        kH = [],
        mH = [],
        oH = [],
        IH = [],
        fH = [],
        lH = [],
        KH = [],
        cH = [],
        eH = [],
        qH = [],
        gH = [],
        NH = [],
        RH = [],
        jH = [],
        nH = [],
        FH = [],
        DH = [],
        wH = [],
        ZH = [],
        dH = [];
      return HH = class extends OH {
        get range() {
          return this._range
        }
        set range(HH) {
          this._range = HH, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(HH) {
          this._intensityMode = HH, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(HH) {
          this._radius = HH, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, AH.e)(this, BH, "f")
        }
        set renderPriority(HH) {
          (0, AH.f)(this, BH, HH, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(HH) {
          this._shadowEnabled !== HH && (this._shadowEnabled = HH, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(HH) {
          this._includedOnlyMeshes = HH, this._hookArrayForIncludedOnly(HH)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(HH) {
          this._excludedMeshes = HH, this._hookArrayForExcluded(HH)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(HH) {
          this._excludeWithLayerMask = HH, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(HH) {
          this._includeOnlyWithLayerMask = HH, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(HH) {
          this._lightmapMode !== HH && (this._lightmapMode = HH, this._markMeshesAsLightDirty())
        }
        getViewMatrix(HH) {
          return null
        }
        getProjectionMatrix(HH, BH) {
          return null
        }
        constructor(LH, rH, SH) {
          super(LH, rH, !1), this.diffuse = ((0, AH.k)(this, bH), (0, AH.k)(this, kH, new hH.c(1, 1, 1))), this.specular = ((0, AH.k)(this, mH), (0, AH.k)(this, oH, new hH.c(1, 1, 1))), this.falloffType = ((0, AH.k)(this, IH), (0, AH.k)(this, fH, HH.FALLOFF_DEFAULT)), this.intensity = ((0, AH.k)(this, lH), (0, AH.k)(this, KH, 1)), this._range = ((0, AH.k)(this, cH), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = HH.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, AH.k)(this, eH, void 0), BH.set(this, ((0, AH.k)(this, qH), (0, AH.k)(this, gH, 0))), this._shadowEnabled = ((0, AH.k)(this, NH), (0, AH.k)(this, RH, !0)), this._includedOnlyMeshes = (0, AH.k)(this, jH), this._excludeWithLayerMask = (0, AH.k)(this, nH, 0), this._includeOnlyWithLayerMask = ((0, AH.k)(this, FH), (0, AH.k)(this, DH, 0)), this._lightmapMode = ((0, AH.k)(this, wH), (0, AH.k)(this, ZH, 0)), this._shadowGenerators = ((0, AH.k)(this, dH), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, SH || this.yN().addLight(this), this._uniformBuffer = new zH.c(this.yN().Iu(), void 0, void 0, LH), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], SH || this._resyncMeshes()
        }
        transferTexturesToEffect(HH, BH) {
          return this
        }
        _bindLight(HH, BH, LH, AH) {
          let rH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const SH = HH.toString();
          let tH = !1;
          if (this._uniformBuffer.bindToEffect(LH, "Light" + SH), this._renderId !== BH.getRenderId() || this._lastUseSpecular !== AH || !this._uniformBuffer.useUbo) {
            this._renderId = BH.getRenderId(), this._lastUseSpecular = AH;
            const HH = this.getScaledIntensity();
            this.transferToEffect(LH, SH), this.diffuse.scaleToRef(HH, hH.m.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", hH.m.Color3[0], this.range, SH), AH && (this.specular.scaleToRef(HH, hH.m.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", hH.m.Color3[1], this.radius, SH)), tH = !0
          }
          if (this.transferTexturesToEffect(LH, SH), BH.shadowsEnabled && this.shadowEnabled && rH) {
            const HH = this.getShadowGenerator(BH.activeCamera) ?? this.getShadowGenerator();
            HH && (HH.bindShadowLight(SH, LH), tH = !0)
          }
          tH ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(HH) {
          let BH = "Name: " + this.name;
          if (BH += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let LH = 0; LH < this.animations.length; LH++) BH += ", animation[0]: " + this.animations[LH].toString(HH);
          return BH
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.mV() || this._resyncMeshes()
        }
        vI(HH) {
          super.vI(HH), this._resyncMeshes()
        }
        getShadowGenerator() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(HH) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return SH.o.Zero()
        }
        canAffectMesh(HH) {
          return !HH || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(HH)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(HH)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & HH.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & HH.layerMask)))
        }
        dispose(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const HH = this._shadowGenerators.values();
            for (let BH = HH.next(); !0 !== BH.done; BH = HH.next()) {
              BH.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.yN().stopAnimation(this), this._parentContainer) {
            const HH = this._parentContainer.lights.indexOf(this);
            HH > -1 && this._parentContainer.lights.splice(HH, 1), this._parentContainer = null
          }
          for (const LH of this.yN().meshes) LH._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.yN().removeLight(this), super.dispose(HH, BH)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(BH) {
          let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const AH = HH.GetConstructorFromName(this.getTypeID(), BH, this.yN());
          if (!AH) return null;
          const rH = XH.c.Clone(AH, this);
          return BH && (rH.name = BH), LH && (rH.parent = LH), rH.vI(this.isEnabled()), this.onClonedObservable.notifyObservers(rH), rH
        }
        serialize() {
          const HH = XH.c.Serialize(this);
          if (HH.uniqueId = this.uniqueId, HH.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(HH), this.excludedMeshes.length > 0) {
            HH.excludedMeshesIds = [];
            for (const BH of this.excludedMeshes) HH.excludedMeshesIds.push(BH.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            HH.includedOnlyMeshesIds = [];
            for (const BH of this.includedOnlyMeshes) HH.includedOnlyMeshesIds.push(BH.id)
          }
          return XH.c.AppendSerializedAnimations(this, HH), HH.rW = this.serializeAnimationRanges(), HH.isEnabled = this.isEnabled(), HH
        }
        static GetConstructorFromName(HH, BH, LH) {
          const AH = tH.b.Construct("Light_Type_" + HH, BH, LH);
          return AH || null
        }
        static Parse(BH, LH) {
          let AH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const rH = HH.GetConstructorFromName(BH.type, BH.name, LH);
          if (!rH) return null;
          const SH = XH.c.Parse(rH, BH, LH, AH);
          if (BH.excludedMeshesIds && (SH._excludedMeshesIds = BH.excludedMeshesIds), BH.includedOnlyMeshesIds && (SH._includedOnlyMeshesIds = BH.includedOnlyMeshesIds), void 0 !== BH.parentId && (SH._waitingParentId = BH.parentId), void 0 !== BH.parentInstanceIndex && (SH._waitingParentInstanceIndex = BH.parentInstanceIndex), void 0 !== BH.falloffType && (SH.falloffType = BH.falloffType), void 0 !== BH.lightmapMode && (SH.lightmapMode = BH.lightmapMode), BH.animations) {
            for (let HH = 0; HH < BH.animations.length; HH++) {
              const LH = BH.animations[HH],
                AH = (0, CH.b)("BABYLON.Animation");
              AH && SH.animations.push(AH.Parse(LH))
            }
            tH.b.ParseAnimationRanges(SH, BH, LH)
          }
          return BH.autoAnimate && LH.beginAnimation(SH, BH.autoAnimateFrom, BH.autoAnimateTo, BH.autoAnimateLoop, BH.autoAnimateSpeed || 1), void 0 !== BH.isEnabled && SH.vI(BH.isEnabled), SH._onParsed(BH, LH, AH), SH
        }
        _onParsed(HH, BH) {}
        _hookArrayForExcluded(HH) {
          var BH = this;
          const LH = HH.push;
          HH.push = function() {
            for (var AH = arguments.length, rH = new Array(AH), SH = 0; SH < AH; SH++) rH[SH] = arguments[SH];
            const hH = LH.apply(HH, rH);
            if (BH._clusteredContainer) return hH;
            for (const HH of rH) HH._resyncLightSource(BH);
            return hH
          };
          const AH = HH.splice;
          HH.splice = (BH, LH) => {
            const rH = AH.call(HH, BH, LH ?? HH.length);
            if (this._clusteredContainer) return rH;
            for (const HH of rH) HH._resyncLightSource(this);
            return rH
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(HH) {
          var BH = this;
          const LH = HH.push;
          HH.push = function() {
            for (var AH = arguments.length, rH = new Array(AH), SH = 0; SH < AH; SH++) rH[SH] = arguments[SH];
            const hH = LH.apply(HH, rH);
            return BH._resyncMeshes(), hH
          };
          const AH = HH.splice;
          HH.splice = (BH, LH) => {
            const rH = AH.call(HH, BH, LH ?? HH.length);
            return this._resyncMeshes(), rH
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const HH of this.yN().meshes) HH._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const HH of this.yN().meshes) - 1 !== HH.lightSources.indexOf(this) && HH._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.yN().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let BH = 0;
          const LH = this.getTypeID();
          let AH = this.intensityMode;
          switch (AH === HH.INTENSITYMODE_AUTOMATIC && (AH = LH === HH.LIGHTTYPEID_DIRECTIONALLIGHT ? HH.INTENSITYMODE_ILLUMINANCE : HH.INTENSITYMODE_LUMINOUSINTENSITY), LH) {
            case HH.LIGHTTYPEID_POINTLIGHT:
            case HH.LIGHTTYPEID_SPOTLIGHT:
              switch (AH) {
                case HH.INTENSITYMODE_LUMINOUSPOWER:
                  BH = 1 / (4 * Math.PI);
                  break;
                case HH.INTENSITYMODE_LUMINOUSINTENSITY:
                  BH = 1;
                  break;
                case HH.INTENSITYMODE_LUMINANCE:
                  BH = this.radius * this.radius
              }
              break;
            case HH.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (AH) {
                case HH.INTENSITYMODE_ILLUMINANCE:
                  BH = 1;
                  break;
                case HH.INTENSITYMODE_LUMINANCE: {
                  let HH = this.radius;
                  HH = Math.max(HH, .001);
                  BH = 2 * Math.PI * (1 - Math.cos(HH));
                  break
                }
              }
              break;
            case HH.LIGHTTYPEID_HEMISPHERICLIGHT:
            case HH.LIGHTTYPEID_RECT_AREALIGHT:
              BH = 1
          }
          return BH
        }
        _reorderLightsInScene() {
          const HH = this.yN();
          0 != this._renderPriority && (HH.requireLightSorting = !0), this.yN().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, BH = new WeakMap, (() => {
        const BH = "function" === typeof Symbol && Symbol.metadata ? Object.create(OH[Symbol.metadata] ?? null) : void 0;
        LH = [(0, rH.l)()], GH = [(0, rH.l)()], YH = [(0, rH.H)()], uH = [(0, rH.H)()], QH = [(0, rH.H)()], WH = [(0, rH.H)()], MH = [(0, rH.H)()], xH = [(0, rH.H)()], vH = [(0, rH.e)("_reorderLightsInScene")], PH = [(0, rH.H)("shadowEnabled")], TH = [(0, rH.H)("excludeWithLayerMask")], UH = [(0, rH.H)("includeOnlyWithLayerMask")], VH = [(0, rH.H)("lightmapMode")], (0, AH.g)(HH, null, QH, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: HH => "range" in HH,
            get: HH => HH.range
          },
          metadata: BH
        }, null, bH), (0, AH.g)(HH, null, WH, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "intensityMode" in HH,
            get: HH => HH.intensityMode
          },
          metadata: BH
        }, null, bH), (0, AH.g)(HH, null, MH, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: HH => "radius" in HH,
            get: HH => HH.radius
          },
          metadata: BH
        }, null, bH), (0, AH.g)(HH, null, vH, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: HH => "renderPriority" in HH,
            get: HH => HH.renderPriority,
            set: (HH, BH) => {
              HH.renderPriority = BH
            }
          },
          metadata: BH
        }, gH, NH), (0, AH.g)(null, null, LH, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: HH => "diffuse" in HH,
            get: HH => HH.diffuse,
            set: (HH, BH) => {
              HH.diffuse = BH
            }
          },
          metadata: BH
        }, kH, mH), (0, AH.g)(null, null, GH, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: HH => "specular" in HH,
            get: HH => HH.specular,
            set: (HH, BH) => {
              HH.specular = BH
            }
          },
          metadata: BH
        }, oH, IH), (0, AH.g)(null, null, YH, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: HH => "falloffType" in HH,
            get: HH => HH.falloffType,
            set: (HH, BH) => {
              HH.falloffType = BH
            }
          },
          metadata: BH
        }, fH, lH), (0, AH.g)(null, null, uH, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: HH => "intensity" in HH,
            get: HH => HH.intensity,
            set: (HH, BH) => {
              HH.intensity = BH
            }
          },
          metadata: BH
        }, KH, cH), (0, AH.g)(null, null, xH, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: HH => "_renderPriority" in HH,
            get: HH => HH._renderPriority,
            set: (HH, BH) => {
              HH._renderPriority = BH
            }
          },
          metadata: BH
        }, eH, qH), (0, AH.g)(null, null, PH, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: HH => "_shadowEnabled" in HH,
            get: HH => HH._shadowEnabled,
            set: (HH, BH) => {
              HH._shadowEnabled = BH
            }
          },
          metadata: BH
        }, RH, jH), (0, AH.g)(null, null, TH, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: HH => "_excludeWithLayerMask" in HH,
            get: HH => HH._excludeWithLayerMask,
            set: (HH, BH) => {
              HH._excludeWithLayerMask = BH
            }
          },
          metadata: BH
        }, nH, FH), (0, AH.g)(null, null, UH, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: HH => "_includeOnlyWithLayerMask" in HH,
            get: HH => HH._includeOnlyWithLayerMask,
            set: (HH, BH) => {
              HH._includeOnlyWithLayerMask = BH
            }
          },
          metadata: BH
        }, DH, wH), (0, AH.g)(null, null, VH, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: HH => "_lightmapMode" in HH,
            get: HH => HH._lightmapMode,
            set: (HH, BH) => {
              HH._lightmapMode = BH
            }
          },
          metadata: BH
        }, ZH, dH), BH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: BH
        })
      })(), HH.FALLOFF_DEFAULT = EH.e.FALLOFF_DEFAULT, HH.FALLOFF_PHYSICAL = EH.e.FALLOFF_PHYSICAL, HH.FALLOFF_GLTF = EH.e.FALLOFF_GLTF, HH.FALLOFF_STANDARD = EH.e.FALLOFF_STANDARD, HH.LIGHTMAP_DEFAULT = EH.e.LIGHTMAP_DEFAULT, HH.LIGHTMAP_SPECULAR = EH.e.LIGHTMAP_SPECULAR, HH.LIGHTMAP_SHADOWSONLY = EH.e.LIGHTMAP_SHADOWSONLY, HH.INTENSITYMODE_AUTOMATIC = EH.e.INTENSITYMODE_AUTOMATIC, HH.INTENSITYMODE_LUMINOUSPOWER = EH.e.INTENSITYMODE_LUMINOUSPOWER, HH.INTENSITYMODE_LUMINOUSINTENSITY = EH.e.INTENSITYMODE_LUMINOUSINTENSITY, HH.INTENSITYMODE_ILLUMINANCE = EH.e.INTENSITYMODE_ILLUMINANCE, HH.INTENSITYMODE_LUMINANCE = EH.e.INTENSITYMODE_LUMINANCE, HH.LIGHTTYPEID_POINTLIGHT = EH.e.LIGHTTYPEID_POINTLIGHT, HH.LIGHTTYPEID_DIRECTIONALLIGHT = EH.e.LIGHTTYPEID_DIRECTIONALLIGHT, HH.LIGHTTYPEID_SPOTLIGHT = EH.e.LIGHTTYPEID_SPOTLIGHT, HH.LIGHTTYPEID_HEMISPHERICLIGHT = EH.e.LIGHTTYPEID_HEMISPHERICLIGHT, HH.LIGHTTYPEID_RECT_AREALIGHT = EH.e.LIGHTTYPEID_RECT_AREALIGHT, HH
    })()
  },
  41498: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => XH
    });
    var AH = LH(41290),
      rH = LH(37963),
      SH = LH(41297),
      hH = LH(37997),
      tH = LH(37989),
      zH = LH(41169),
      CH = LH(41319);
    class EH {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new hH.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new hH.d, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let XH = (() => {
      var HH;
      let BH, LH, XH, GH, YH, uH = [],
        QH = [],
        WH = [],
        MH = [],
        xH = [],
        vH = [],
        PH = [],
        TH = [],
        UH = [],
        VH = [];
      return HH = class {
        static AddNodeConstructor(HH, BH) {
          this._NodeConstructors[HH] = BH
        }
        static Construct(HH, BH, LH, AH) {
          const rH = this._NodeConstructors[HH];
          return rH ? rH(BH, LH, AH) : null
        }
        set accessibilityTag(HH) {
          this._accessibilityTag = HH, this.onAccessibilityTagChangedObservable.notifyObservers(HH)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(HH) {
          this._nodeDataStorage._doNotSerialize = HH
        }
        mV() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(HH) {
          if (this._parentNode === HH) return;
          const BH = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const BH = this._parentNode._children.indexOf(this); - 1 !== BH && this._parentNode._children.splice(BH, 1), HH || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = HH, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), BH || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(HH) {
          this._nodeDataStorage._inheritVisibility = HH
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(HH) {
          this._nodeDataStorage._isVisible = HH
        }
        _serializeAsParent(HH) {
          HH.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const HH = this._scene.rootNodes,
              BH = HH.length - 1;
            HH[this._nodeDataStorage._sceneRootNodesIndex] = HH[BH], HH[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(HH) {
          this._animationPropertiesOverride = HH
        }
        getClassName() {
          return "Node"
        }
        set onDispose(HH) {
          this._onDisposeObserver && this.uR.remove(this._onDisposeObserver), this._onDisposeObserver = this.uR.add(HH)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var HH;
          return (HH = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (HH._onEffectiveEnabledStateChangedObservable = new hH.d)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            LH = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new EH, this.name = (0, AH.k)(this, uH, void 0), this.id = ((0, AH.k)(this, QH), (0, AH.k)(this, WH, void 0)), this.uniqueId = ((0, AH.k)(this, MH), (0, AH.k)(this, xH, void 0)), this.state = ((0, AH.k)(this, vH), (0, AH.k)(this, PH, "")), this.metadata = ((0, AH.k)(this, TH), (0, AH.k)(this, UH, null)), this._internalMetadata = (0, AH.k)(this, VH), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new hH.d, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = rH.e.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.uR = new hH.d, this._onDisposeObserver = null, this._behaviors = new Array, this.name = HH, this.id = HH, this._scene = BH || tH.d.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), LH && this._addToSceneRootNodes()
        }
        yN() {
          return this._scene
        }
        Iu() {
          return this._scene.Iu()
        }
        addBehavior(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(HH) || (HH.init(), this._scene.isLoading && !BH ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(HH) && HH.attach(this)
          })) : HH.attach(this), this._behaviors.push(HH)), this
        }
        removeBehavior(HH) {
          const BH = this._behaviors.indexOf(HH);
          return -1 === BH || (this._behaviors.splice(BH, 1), HH.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(HH) {
          for (const BH of this._behaviors)
            if (BH.name === HH) return BH;
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
        updateCache(HH) {
          !HH && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(HH) {
          return this.parent ? this.parent._getActionManagerForTrigger(HH, !1) : null
        }
        _updateCache(HH) {}
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
        dLH(HH) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const HH = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!HH && HH.hasObservers()
        }
        _syncParentEnabledState() {
          const HH = this._hasEffectiveEnabledStateObservers(),
            BH = HH ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const LH of this._children) LH._syncParentEnabledState();
          if (HH) {
            const HH = this.isEnabled();
            HH !== BH && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(HH)
          }
        }
        vI(HH) {
          if (this._nodeDataStorage._isEnabled === HH) return;
          const BH = this._hasEffectiveEnabledStateObservers(),
            LH = BH ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = HH, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(HH), BH) {
            const HH = this.isEnabled();
            HH !== LH && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(HH)
          }
        }
        isDescendantOf(HH) {
          return !!this.parent && (this.parent === HH || this.parent.isDescendantOf(HH))
        }
        _getDescendants(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            LH = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let AH = 0; AH < this._children.length; AH++) {
              const rH = this._children[AH];
              LH && !LH(rH) || HH.push(rH), BH || rH._getDescendants(HH, !1, LH)
            }
        }
        getDescendants(HH, BH) {
          const LH = [];
          return this._getDescendants(LH, HH, BH), LH
        }
        getChildMeshes(HH, BH) {
          const LH = [];
          return this._getDescendants(LH, HH, (HH => (!BH || BH(HH)) && void 0 !== HH.cullingStrategy)), LH
        }
        getChildren(HH) {
          let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(BH, HH)
        }
        _setReady(HH) {
          HH !== this._nodeDataStorage._isReady && (HH ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(HH) {
          for (let BH = 0; BH < this.animations.length; BH++) {
            const LH = this.animations[BH];
            if (LH.name === HH) return LH
          }
          return null
        }
        createAnimationRange(BH, LH, AH) {
          if (!this._ranges[BH]) {
            this._ranges[BH] = HH._AnimationRangeFactory(BH, LH, AH);
            for (let HH = 0, rH = this.animations.length; HH < rH; HH++) this.animations[HH] && this.animations[HH].createRange(BH, LH, AH)
          }
        }
        deleteAnimationRange(HH) {
          let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let LH = 0, AH = this.animations.length; LH < AH; LH++) this.animations[LH] && this.animations[LH].deleteRange(HH, BH);
          this._ranges[HH] = null
        }
        getAnimationRange(HH) {
          return this._ranges[HH] || null
        }
        clone(BH, LH, AH) {
          const rH = CH.c.Clone((() => new HH(BH, this.yN())), this);
          if (LH && (rH.parent = LH), !AH) {
            const HH = this.getDescendants(!0);
            for (let LH = 0; LH < HH.length; LH++) {
              const AH = HH[LH];
              AH.clone(BH + "." + AH.name, rH)
            }
          }
          return rH
        }
        getAnimationRanges() {
          const HH = [];
          let BH;
          for (BH in this._ranges) HH.push(this._ranges[BH]);
          return HH
        }
        beginAnimation(HH, BH, LH, AH) {
          const rH = this.getAnimationRange(HH);
          return rH ? this._scene.beginAnimation(this, rH.from, rH.to, BH, LH, AH) : null
        }
        serializeAnimationRanges() {
          const HH = [];
          for (const BH in this._ranges) {
            const LH = this._ranges[BH];
            if (!LH) continue;
            const AH = {};
            AH.name = BH, AH.from = LH.from, AH.to = LH.to, HH.push(AH)
          }
          return HH
        }
        computeWorldMatrix(HH) {
          return this._worldMatrix || (this._worldMatrix = rH.e.Identity()), this._worldMatrix
        }
        dispose(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !HH) {
            const LH = this.getDescendants(!0);
            for (const AH of LH) AH.dispose(HH, BH)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.uR.notifyObservers(this), this.uR.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const LH of this._behaviors) LH.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(HH, BH, LH) {
          if (BH.rW)
            for (let AH = 0; AH < BH.rW.length; AH++) {
              const LH = BH.rW[AH];
              HH.createAnimationRange(LH.name, LH.from, LH.to)
            }
        }
        getHierarchyBoundingVectors() {
          let HH, BH, LH = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.yN().incrementRenderId(), this.computeWorldMatrix(!0);
          const SH = this;
          if (SH.jF && SH.jU) {
            const LH = SH.jF();
            HH = LH.boundingBox.minimumWorld.clone(), BH = LH.boundingBox.maximumWorld.clone()
          } else HH = new rH.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), BH = new rH.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (LH) {
            const LH = this.getDescendants(!1);
            for (const SH of LH) {
              const LH = SH;
              if (LH.computeWorldMatrix(!0), AH && !AH(LH)) continue;
              if (!LH.jF || 0 === LH.getTotalVertices()) continue;
              const hH = LH.jF().boundingBox,
                tH = hH.minimumWorld,
                zH = hH.maximumWorld;
              rH.o.CheckExtends(tH, HH, BH), rH.o.CheckExtends(zH, HH, BH)
            }
          }
          return {
            min: HH,
            max: BH
          }
        }
      }, (() => {
        const rH = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        BH = [(0, SH.H)()], LH = [(0, SH.H)()], XH = [(0, SH.H)()], GH = [(0, SH.H)()], YH = [(0, SH.H)()], (0, AH.g)(null, null, BH, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: HH => "name" in HH,
            get: HH => HH.name,
            set: (HH, BH) => {
              HH.name = BH
            }
          },
          metadata: rH
        }, uH, QH), (0, AH.g)(null, null, LH, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: HH => "id" in HH,
            get: HH => HH.id,
            set: (HH, BH) => {
              HH.id = BH
            }
          },
          metadata: rH
        }, WH, MH), (0, AH.g)(null, null, XH, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: HH => "uniqueId" in HH,
            get: HH => HH.uniqueId,
            set: (HH, BH) => {
              HH.uniqueId = BH
            }
          },
          metadata: rH
        }, xH, vH), (0, AH.g)(null, null, GH, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: HH => "state" in HH,
            get: HH => HH.state,
            set: (HH, BH) => {
              HH.state = BH
            }
          },
          metadata: rH
        }, PH, TH), (0, AH.g)(null, null, YH, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: HH => "metadata" in HH,
            get: HH => HH.metadata,
            set: (HH, BH) => {
              HH.metadata = BH
            }
          },
          metadata: rH
        }, UH, VH), rH && Object.defineProperty(HH, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rH
        })
      })(), HH._AnimationRangeFactory = (HH, BH, LH) => {
        throw (0, zH.i)("AnimationRange")
      }, HH._NodeConstructors = {}, HH
    })()
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);