export const id = 248;
export const ids = [248];
export const modules = {
  39387: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => sY
    });
    var FY = DY(39127),
      AY = DY(39131),
      IY = DY(36524),
      RY = DY(36588),
      OY = DY(39347),
      gY = DY(39255),
      aY = DY(36569),
      vY = DY(39319),
      uY = DY(39144);
    let sY = (() => {
      var YY, rY;
      let DY, sY, iY, yY, QY, oY, WY, EY, mY, VY, SY, lY, TY, eY = OY.b,
        NY = [],
        BY = [],
        cY = [],
        KY = [],
        HY = [],
        zY = [],
        ZY = [],
        CY = [],
        fY = [],
        jY = [],
        hY = [],
        dY = [],
        JY = [],
        MY = [],
        wY = [],
        bY = [],
        XY = [],
        qY = [],
        pY = [],
        kY = [],
        GY = [];
      return YY = class extends eY {
        get range() {
          return this._range
        }
        set range(YY) {
          this._range = YY, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(YY) {
          this._intensityMode = YY, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(YY) {
          this._radius = YY, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, FY.d)(this, rY, "f")
        }
        set renderPriority(YY) {
          (0, FY.g)(this, rY, YY, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(YY) {
          this._shadowEnabled !== YY && (this._shadowEnabled = YY, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(YY) {
          this._includedOnlyMeshes = YY, this._hookArrayForIncludedOnly(YY)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(YY) {
          this._excludedMeshes = YY, this._hookArrayForExcluded(YY)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(YY) {
          this._excludeWithLayerMask = YY, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(YY) {
          this._includeOnlyWithLayerMask = YY, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(YY) {
          this._lightmapMode !== YY && (this._lightmapMode = YY, this._markMeshesAsLightDirty())
        }
        getViewMatrix(YY) {
          return null
        }
        getProjectionMatrix(YY, rY) {
          return null
        }
        constructor(DY, AY, IY) {
          super(DY, AY, !1), this.diffuse = ((0, FY.j)(this, NY), (0, FY.j)(this, BY, new RY.c(1, 1, 1))), this.specular = ((0, FY.j)(this, cY), (0, FY.j)(this, KY, new RY.c(1, 1, 1))), this.falloffType = ((0, FY.j)(this, HY), (0, FY.j)(this, zY, YY.FALLOFF_DEFAULT)), this.intensity = ((0, FY.j)(this, ZY), (0, FY.j)(this, CY, 1)), this._range = ((0, FY.j)(this, fY), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = YY.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, FY.j)(this, jY, void 0), rY.set(this, ((0, FY.j)(this, hY), (0, FY.j)(this, dY, 0))), this._shadowEnabled = ((0, FY.j)(this, JY), (0, FY.j)(this, MY, !0)), this._includedOnlyMeshes = (0, FY.j)(this, wY), this._excludeWithLayerMask = (0, FY.j)(this, bY, 0), this._includeOnlyWithLayerMask = ((0, FY.j)(this, XY), (0, FY.j)(this, qY, 0)), this._lightmapMode = ((0, FY.j)(this, pY), (0, FY.j)(this, kY, 0)), this._shadowGenerators = ((0, FY.j)(this, GY), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, IY || this.hT().addLight(this), this._uniformBuffer = new gY.b(this.hT().ky(), void 0, void 0, DY), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], IY || this._resyncMeshes()
        }
        transferTexturesToEffect(YY, rY) {
          return this
        }
        _bindLight(YY, rY, DY, FY) {
          let AY = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const IY = YY.toString();
          let OY = !1;
          if (this._uniformBuffer.bindToEffect(DY, "Light" + IY), this._renderId !== rY.getRenderId() || this._lastUseSpecular !== FY || !this._uniformBuffer.useUbo) {
            this._renderId = rY.getRenderId(), this._lastUseSpecular = FY;
            const YY = this.getScaledIntensity();
            this.transferToEffect(DY, IY), this.diffuse.scaleToRef(YY, RY.i.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", RY.i.Color3[0], this.range, IY), FY && (this.specular.scaleToRef(YY, RY.i.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", RY.i.Color3[1], this.radius, IY)), OY = !0
          }
          if (this.transferTexturesToEffect(DY, IY), rY.shadowsEnabled && this.shadowEnabled && AY) {
            const YY = this.getShadowGenerator(rY.activeCamera) ?? this.getShadowGenerator();
            YY && (YY.bindShadowLight(IY, DY), OY = !0)
          }
          OY ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(YY) {
          let rY = "Name: " + this.name;
          if (rY += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let DY = 0; DY < this.animations.length; DY++) rY += ", animation[0]: " + this.animations[DY].toString(YY);
          return rY
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.CrY() || this._resyncMeshes()
        }
        mV(YY) {
          super.mV(YY), this._resyncMeshes()
        }
        getShadowGenerator() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(YY) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return IY.r.Zero()
        }
        canAffectMesh(YY) {
          return !YY || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(YY)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(YY)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & YY.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & YY.layerMask)))
        }
        dispose(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const YY = this._shadowGenerators.values();
            for (let rY = YY.next(); !0 !== rY.done; rY = YY.next()) {
              rY.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.hT().stopAnimation(this), this._parentContainer) {
            const YY = this._parentContainer.lights.indexOf(this);
            YY > -1 && this._parentContainer.lights.splice(YY, 1), this._parentContainer = null
          }
          for (const DY of this.hT().meshes) DY._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.hT().removeLight(this), super.dispose(YY, rY)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(rY) {
          let DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const FY = YY.GetConstructorFromName(this.getTypeID(), rY, this.hT());
          if (!FY) return null;
          const AY = uY.b.Clone(FY, this);
          return rY && (AY.name = rY), DY && (AY.parent = DY), AY.mV(this.isEnabled()), this.onClonedObservable.notifyObservers(AY), AY
        }
        serialize() {
          const YY = uY.b.Serialize(this);
          if (YY.uniqueId = this.uniqueId, YY.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(YY), this.excludedMeshes.length > 0) {
            YY.excludedMeshesIds = [];
            for (const rY of this.excludedMeshes) YY.excludedMeshesIds.push(rY.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            YY.includedOnlyMeshesIds = [];
            for (const rY of this.includedOnlyMeshes) YY.includedOnlyMeshesIds.push(rY.id)
          }
          return uY.b.AppendSerializedAnimations(this, YY), YY.ws = this.serializeAnimationRanges(), YY.isEnabled = this.isEnabled(), YY
        }
        static GetConstructorFromName(YY, rY, DY) {
          const FY = OY.b.Construct("Light_Type_" + YY, rY, DY);
          return FY || null
        }
        static Parse(rY, DY) {
          let FY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const AY = YY.GetConstructorFromName(rY.type, rY.name, DY);
          if (!AY) return null;
          const IY = uY.b.Parse(AY, rY, DY, FY);
          if (rY.excludedMeshesIds && (IY._excludedMeshesIds = rY.excludedMeshesIds), rY.includedOnlyMeshesIds && (IY._includedOnlyMeshesIds = rY.includedOnlyMeshesIds), void 0 !== rY.parentId && (IY._waitingParentId = rY.parentId), void 0 !== rY.parentInstanceIndex && (IY._waitingParentInstanceIndex = rY.parentInstanceIndex), void 0 !== rY.falloffType && (IY.falloffType = rY.falloffType), void 0 !== rY.lightmapMode && (IY.lightmapMode = rY.lightmapMode), rY.animations) {
            for (let YY = 0; YY < rY.animations.length; YY++) {
              const DY = rY.animations[YY],
                FY = (0, aY.e)("BABYLON.Animation");
              FY && IY.animations.push(FY.Parse(DY))
            }
            OY.b.ParseAnimationRanges(IY, rY, DY)
          }
          return rY.autoAnimate && DY.beginAnimation(IY, rY.autoAnimateFrom, rY.autoAnimateTo, rY.autoAnimateLoop, rY.autoAnimateSpeed || 1), void 0 !== rY.isEnabled && IY.mV(rY.isEnabled), IY._onParsed(rY, DY, FY), IY
        }
        _onParsed(YY, rY) {}
        _hookArrayForExcluded(YY) {
          var rY = this;
          const DY = YY.push;
          YY.push = function() {
            for (var FY = arguments.length, AY = new Array(FY), IY = 0; IY < FY; IY++) AY[IY] = arguments[IY];
            const RY = DY.apply(YY, AY);
            if (rY._clusteredContainer) return RY;
            for (const YY of AY) YY._resyncLightSource(rY);
            return RY
          };
          const FY = YY.splice;
          YY.splice = (rY, DY) => {
            const AY = FY.call(YY, rY, DY ?? YY.length);
            if (this._clusteredContainer) return AY;
            for (const YY of AY) YY._resyncLightSource(this);
            return AY
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(YY) {
          var rY = this;
          const DY = YY.push;
          YY.push = function() {
            for (var FY = arguments.length, AY = new Array(FY), IY = 0; IY < FY; IY++) AY[IY] = arguments[IY];
            const RY = DY.apply(YY, AY);
            return rY._resyncMeshes(), RY
          };
          const FY = YY.splice;
          YY.splice = (rY, DY) => {
            const AY = FY.call(YY, rY, DY ?? YY.length);
            return this._resyncMeshes(), AY
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const YY of this.hT().meshes) YY._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const YY of this.hT().meshes) - 1 !== YY.lightSources.indexOf(this) && YY._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.hT().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let rY = 0;
          const DY = this.getTypeID();
          let FY = this.intensityMode;
          switch (FY === YY.INTENSITYMODE_AUTOMATIC && (FY = DY === YY.LIGHTTYPEID_DIRECTIONALLIGHT ? YY.INTENSITYMODE_ILLUMINANCE : YY.INTENSITYMODE_LUMINOUSINTENSITY), DY) {
            case YY.LIGHTTYPEID_POINTLIGHT:
            case YY.LIGHTTYPEID_SPOTLIGHT:
              switch (FY) {
                case YY.INTENSITYMODE_LUMINOUSPOWER:
                  rY = 1 / (4 * Math.PI);
                  break;
                case YY.INTENSITYMODE_LUMINOUSINTENSITY:
                  rY = 1;
                  break;
                case YY.INTENSITYMODE_LUMINANCE:
                  rY = this.radius * this.radius
              }
              break;
            case YY.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (FY) {
                case YY.INTENSITYMODE_ILLUMINANCE:
                  rY = 1;
                  break;
                case YY.INTENSITYMODE_LUMINANCE: {
                  let YY = this.radius;
                  YY = Math.max(YY, .001);
                  rY = 2 * Math.PI * (1 - Math.cos(YY));
                  break
                }
              }
              break;
            case YY.LIGHTTYPEID_HEMISPHERICLIGHT:
            case YY.LIGHTTYPEID_RECT_AREALIGHT:
              rY = 1
          }
          return rY
        }
        _reorderLightsInScene() {
          const YY = this.hT();
          0 != this._renderPriority && (YY.requireLightSorting = !0), this.hT().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, rY = new WeakMap, (() => {
        const rY = "function" === typeof Symbol && Symbol.metadata ? Object.create(eY[Symbol.metadata] ?? null) : void 0;
        DY = [(0, AY.o)()], sY = [(0, AY.o)()], iY = [(0, AY.M)()], yY = [(0, AY.M)()], QY = [(0, AY.M)()], oY = [(0, AY.M)()], WY = [(0, AY.M)()], EY = [(0, AY.M)()], mY = [(0, AY.f)("_reorderLightsInScene")], VY = [(0, AY.M)("shadowEnabled")], SY = [(0, AY.M)("excludeWithLayerMask")], lY = [(0, AY.M)("includeOnlyWithLayerMask")], TY = [(0, AY.M)("lightmapMode")], (0, FY.i)(YY, null, QY, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: YY => "range" in YY,
            get: YY => YY.range
          },
          metadata: rY
        }, null, NY), (0, FY.i)(YY, null, oY, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: YY => "intensityMode" in YY,
            get: YY => YY.intensityMode
          },
          metadata: rY
        }, null, NY), (0, FY.i)(YY, null, WY, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: YY => "radius" in YY,
            get: YY => YY.radius
          },
          metadata: rY
        }, null, NY), (0, FY.i)(YY, null, mY, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: YY => "renderPriority" in YY,
            get: YY => YY.renderPriority,
            set: (YY, rY) => {
              YY.renderPriority = rY
            }
          },
          metadata: rY
        }, dY, JY), (0, FY.i)(null, null, DY, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: YY => "diffuse" in YY,
            get: YY => YY.diffuse,
            set: (YY, rY) => {
              YY.diffuse = rY
            }
          },
          metadata: rY
        }, BY, cY), (0, FY.i)(null, null, sY, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: YY => "specular" in YY,
            get: YY => YY.specular,
            set: (YY, rY) => {
              YY.specular = rY
            }
          },
          metadata: rY
        }, KY, HY), (0, FY.i)(null, null, iY, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: YY => "falloffType" in YY,
            get: YY => YY.falloffType,
            set: (YY, rY) => {
              YY.falloffType = rY
            }
          },
          metadata: rY
        }, zY, ZY), (0, FY.i)(null, null, yY, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: YY => "intensity" in YY,
            get: YY => YY.intensity,
            set: (YY, rY) => {
              YY.intensity = rY
            }
          },
          metadata: rY
        }, CY, fY), (0, FY.i)(null, null, EY, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: YY => "_renderPriority" in YY,
            get: YY => YY._renderPriority,
            set: (YY, rY) => {
              YY._renderPriority = rY
            }
          },
          metadata: rY
        }, jY, hY), (0, FY.i)(null, null, VY, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: YY => "_shadowEnabled" in YY,
            get: YY => YY._shadowEnabled,
            set: (YY, rY) => {
              YY._shadowEnabled = rY
            }
          },
          metadata: rY
        }, MY, wY), (0, FY.i)(null, null, SY, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: YY => "_excludeWithLayerMask" in YY,
            get: YY => YY._excludeWithLayerMask,
            set: (YY, rY) => {
              YY._excludeWithLayerMask = rY
            }
          },
          metadata: rY
        }, bY, XY), (0, FY.i)(null, null, lY, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: YY => "_includeOnlyWithLayerMask" in YY,
            get: YY => YY._includeOnlyWithLayerMask,
            set: (YY, rY) => {
              YY._includeOnlyWithLayerMask = rY
            }
          },
          metadata: rY
        }, qY, pY), (0, FY.i)(null, null, TY, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: YY => "_lightmapMode" in YY,
            get: YY => YY._lightmapMode,
            set: (YY, rY) => {
              YY._lightmapMode = rY
            }
          },
          metadata: rY
        }, kY, GY), rY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: rY
        })
      })(), YY.FALLOFF_DEFAULT = vY.e.FALLOFF_DEFAULT, YY.FALLOFF_PHYSICAL = vY.e.FALLOFF_PHYSICAL, YY.FALLOFF_GLTF = vY.e.FALLOFF_GLTF, YY.FALLOFF_STANDARD = vY.e.FALLOFF_STANDARD, YY.LIGHTMAP_DEFAULT = vY.e.LIGHTMAP_DEFAULT, YY.LIGHTMAP_SPECULAR = vY.e.LIGHTMAP_SPECULAR, YY.LIGHTMAP_SHADOWSONLY = vY.e.LIGHTMAP_SHADOWSONLY, YY.INTENSITYMODE_AUTOMATIC = vY.e.INTENSITYMODE_AUTOMATIC, YY.INTENSITYMODE_LUMINOUSPOWER = vY.e.INTENSITYMODE_LUMINOUSPOWER, YY.INTENSITYMODE_LUMINOUSINTENSITY = vY.e.INTENSITYMODE_LUMINOUSINTENSITY, YY.INTENSITYMODE_ILLUMINANCE = vY.e.INTENSITYMODE_ILLUMINANCE, YY.INTENSITYMODE_LUMINANCE = vY.e.INTENSITYMODE_LUMINANCE, YY.LIGHTTYPEID_POINTLIGHT = vY.e.LIGHTTYPEID_POINTLIGHT, YY.LIGHTTYPEID_DIRECTIONALLIGHT = vY.e.LIGHTTYPEID_DIRECTIONALLIGHT, YY.LIGHTTYPEID_SPOTLIGHT = vY.e.LIGHTTYPEID_SPOTLIGHT, YY.LIGHTTYPEID_HEMISPHERICLIGHT = vY.e.LIGHTTYPEID_HEMISPHERICLIGHT, YY.LIGHTTYPEID_RECT_AREALIGHT = vY.e.LIGHTTYPEID_RECT_AREALIGHT, YY
    })()
  },
  39347: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => uY
    });
    var FY = DY(39127),
      AY = DY(36524),
      IY = DY(39131),
      RY = DY(36552),
      OY = DY(36546),
      gY = DY(39029),
      aY = DY(39144);
    class vY {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new RY.e, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new RY.e, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let uY = (() => {
      var YY;
      let rY, DY, uY, sY, iY, yY = [],
        QY = [],
        oY = [],
        WY = [],
        EY = [],
        mY = [],
        VY = [],
        SY = [],
        lY = [],
        TY = [];
      return YY = class {
        static AddNodeConstructor(YY, rY) {
          this._NodeConstructors[YY] = rY
        }
        static Construct(YY, rY, DY, FY) {
          const AY = this._NodeConstructors[YY];
          return AY ? AY(rY, DY, FY) : null
        }
        set accessibilityTag(YY) {
          this._accessibilityTag = YY, this.onAccessibilityTagChangedObservable.notifyObservers(YY)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(YY) {
          this._nodeDataStorage._doNotSerialize = YY
        }
        CrY() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(YY) {
          if (this._parentNode === YY) return;
          const rY = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const rY = this._parentNode._children.indexOf(this); - 1 !== rY && this._parentNode._children.splice(rY, 1), YY || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = YY, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), rY || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(YY) {
          this._nodeDataStorage._inheritVisibility = YY
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(YY) {
          this._nodeDataStorage._isVisible = YY
        }
        _serializeAsParent(YY) {
          YY.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const YY = this._scene.rootNodes,
              rY = YY.length - 1;
            YY[this._nodeDataStorage._sceneRootNodesIndex] = YY[rY], YY[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(YY) {
          this._animationPropertiesOverride = YY
        }
        getClassName() {
          return "Node"
        }
        set onDispose(YY) {
          this._onDisposeObserver && this.wT.remove(this._onDisposeObserver), this._onDisposeObserver = this.wT.add(YY)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var YY;
          return (YY = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (YY._onEffectiveEnabledStateChangedObservable = new RY.e)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            DY = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new vY, this.name = (0, FY.j)(this, yY, void 0), this.id = ((0, FY.j)(this, QY), (0, FY.j)(this, oY, void 0)), this.uniqueId = ((0, FY.j)(this, WY), (0, FY.j)(this, EY, void 0)), this.state = ((0, FY.j)(this, mY), (0, FY.j)(this, VY, "")), this.metadata = ((0, FY.j)(this, SY), (0, FY.j)(this, lY, null)), this._internalMetadata = (0, FY.j)(this, TY), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new RY.e, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = AY.e.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.wT = new RY.e, this._onDisposeObserver = null, this._behaviors = new Array, this.name = YY, this.id = YY, this._scene = rY || OY.d.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), DY && this._addToSceneRootNodes()
        }
        hT() {
          return this._scene
        }
        ky() {
          return this._scene.ky()
        }
        addBehavior(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(YY) || (YY.init(), this._scene.isLoading && !rY ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(YY) && YY.attach(this)
          })) : YY.attach(this), this._behaviors.push(YY)), this
        }
        removeBehavior(YY) {
          const rY = this._behaviors.indexOf(YY);
          return -1 === rY || (this._behaviors.splice(rY, 1), YY.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(YY) {
          for (const rY of this._behaviors)
            if (rY.name === YY) return rY;
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
        updateCache(YY) {
          !YY && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(YY) {
          return this.parent ? this.parent._getActionManagerForTrigger(YY, !1) : null
        }
        _updateCache(YY) {}
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
        nYY(YY) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const YY = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!YY && YY.hasObservers()
        }
        _syncParentEnabledState() {
          const YY = this._hasEffectiveEnabledStateObservers(),
            rY = YY ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const DY of this._children) DY._syncParentEnabledState();
          if (YY) {
            const YY = this.isEnabled();
            YY !== rY && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(YY)
          }
        }
        mV(YY) {
          if (this._nodeDataStorage._isEnabled === YY) return;
          const rY = this._hasEffectiveEnabledStateObservers(),
            DY = rY ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = YY, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(YY), rY) {
            const YY = this.isEnabled();
            YY !== DY && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(YY)
          }
        }
        isDescendantOf(YY) {
          return !!this.parent && (this.parent === YY || this.parent.isDescendantOf(YY))
        }
        _getDescendants(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            DY = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let FY = 0; FY < this._children.length; FY++) {
              const AY = this._children[FY];
              DY && !DY(AY) || YY.push(AY), rY || AY._getDescendants(YY, !1, DY)
            }
        }
        getDescendants(YY, rY) {
          const DY = [];
          return this._getDescendants(DY, YY, rY), DY
        }
        getChildMeshes(YY, rY) {
          const DY = [];
          return this._getDescendants(DY, YY, (YY => (!rY || rY(YY)) && void 0 !== YY.cullingStrategy)), DY
        }
        getChildren(YY) {
          let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(rY, YY)
        }
        _setReady(YY) {
          YY !== this._nodeDataStorage._isReady && (YY ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(YY) {
          for (let rY = 0; rY < this.animations.length; rY++) {
            const DY = this.animations[rY];
            if (DY.name === YY) return DY
          }
          return null
        }
        createAnimationRange(rY, DY, FY) {
          if (!this._ranges[rY]) {
            this._ranges[rY] = YY._AnimationRangeFactory(rY, DY, FY);
            for (let YY = 0, AY = this.animations.length; YY < AY; YY++) this.animations[YY] && this.animations[YY].createRange(rY, DY, FY)
          }
        }
        deleteAnimationRange(YY) {
          let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let DY = 0, FY = this.animations.length; DY < FY; DY++) this.animations[DY] && this.animations[DY].deleteRange(YY, rY);
          this._ranges[YY] = null
        }
        getAnimationRange(YY) {
          return this._ranges[YY] || null
        }
        clone(rY, DY, FY) {
          const AY = aY.b.Clone((() => new YY(rY, this.hT())), this);
          if (DY && (AY.parent = DY), !FY) {
            const YY = this.getDescendants(!0);
            for (let DY = 0; DY < YY.length; DY++) {
              const FY = YY[DY];
              FY.clone(rY + "." + FY.name, AY)
            }
          }
          return AY
        }
        getAnimationRanges() {
          const YY = [];
          let rY;
          for (rY in this._ranges) YY.push(this._ranges[rY]);
          return YY
        }
        beginAnimation(YY, rY, DY, FY) {
          const AY = this.getAnimationRange(YY);
          return AY ? this._scene.beginAnimation(this, AY.from, AY.to, rY, DY, FY) : null
        }
        serializeAnimationRanges() {
          const YY = [];
          for (const rY in this._ranges) {
            const DY = this._ranges[rY];
            if (!DY) continue;
            const FY = {};
            FY.name = rY, FY.from = DY.from, FY.to = DY.to, YY.push(FY)
          }
          return YY
        }
        computeWorldMatrix(YY) {
          return this._worldMatrix || (this._worldMatrix = AY.e.Identity()), this._worldMatrix
        }
        dispose(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !YY) {
            const DY = this.getDescendants(!0);
            for (const FY of DY) FY.dispose(YY, rY)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.wT.notifyObservers(this), this.wT.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const DY of this._behaviors) DY.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(YY, rY, DY) {
          if (rY.ws)
            for (let FY = 0; FY < rY.ws.length; FY++) {
              const DY = rY.ws[FY];
              YY.createAnimationRange(DY.name, DY.from, DY.to)
            }
        }
        getHierarchyBoundingVectors() {
          let YY, rY, DY = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            FY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.hT().incrementRenderId(), this.computeWorldMatrix(!0);
          const IY = this;
          if (IY.oB && IY.qm) {
            const DY = IY.oB();
            YY = DY.boundingBox.minimumWorld.clone(), rY = DY.boundingBox.maximumWorld.clone()
          } else YY = new AY.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), rY = new AY.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (DY) {
            const DY = this.getDescendants(!1);
            for (const IY of DY) {
              const DY = IY;
              if (DY.computeWorldMatrix(!0), FY && !FY(DY)) continue;
              if (!DY.oB || 0 === DY.getTotalVertices()) continue;
              const RY = DY.oB().boundingBox,
                OY = RY.minimumWorld,
                gY = RY.maximumWorld;
              AY.r.CheckExtends(OY, YY, rY), AY.r.CheckExtends(gY, YY, rY)
            }
          }
          return {
            min: YY,
            max: rY
          }
        }
      }, (() => {
        const AY = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        rY = [(0, IY.M)()], DY = [(0, IY.M)()], uY = [(0, IY.M)()], sY = [(0, IY.M)()], iY = [(0, IY.M)()], (0, FY.i)(null, null, rY, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: YY => "name" in YY,
            get: YY => YY.name,
            set: (YY, rY) => {
              YY.name = rY
            }
          },
          metadata: AY
        }, yY, QY), (0, FY.i)(null, null, DY, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: YY => "id" in YY,
            get: YY => YY.id,
            set: (YY, rY) => {
              YY.id = rY
            }
          },
          metadata: AY
        }, oY, WY), (0, FY.i)(null, null, uY, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: YY => "uniqueId" in YY,
            get: YY => YY.uniqueId,
            set: (YY, rY) => {
              YY.uniqueId = rY
            }
          },
          metadata: AY
        }, EY, mY), (0, FY.i)(null, null, sY, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: YY => "state" in YY,
            get: YY => YY.state,
            set: (YY, rY) => {
              YY.state = rY
            }
          },
          metadata: AY
        }, VY, SY), (0, FY.i)(null, null, iY, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: YY => "metadata" in YY,
            get: YY => YY.metadata,
            set: (YY, rY) => {
              YY.metadata = rY
            }
          },
          metadata: AY
        }, lY, TY), AY && Object.defineProperty(YY, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: AY
        })
      })(), YY._AnimationRangeFactory = (YY, rY, DY) => {
        throw (0, gY.i)("AnimationRange")
      }, YY._NodeConstructors = {}, YY
    })()
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);