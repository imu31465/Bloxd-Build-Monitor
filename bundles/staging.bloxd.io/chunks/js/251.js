export const id = 251;
export const ids = [251];
export const modules = {
  40243: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => ld
    });
    var pd = kd(39964),
      Nd = kd(39966),
      Wd = kd(37251),
      Pd = kd(37443),
      Zd = kd(40205),
      gd = kd(40101),
      Cd = kd(37303),
      Kd = kd(40186),
      od = kd(39983);
    let ld = (() => {
      var dd, Jd;
      let kd, ld, Qd, Ld, Od, ed, Rd, Id, Gd, vd, xd, qd, Bd, sd = Zd.c,
        ad = [],
        Md = [],
        Fd = [],
        Yd = [],
        md = [],
        bd = [],
        Sd = [],
        jd = [],
        Xd = [],
        fd = [],
        nd = [],
        Ud = [],
        yd = [],
        Dd = [],
        Td = [],
        Ed = [],
        cd = [],
        hd = [],
        rd = [],
        ud = [],
        td = [];
      return dd = class extends sd {
        get range() {
          return this._range
        }
        set range(dd) {
          this._range = dd, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(dd) {
          this._intensityMode = dd, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(dd) {
          this._radius = dd, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, pd.d)(this, Jd, "f")
        }
        set renderPriority(dd) {
          (0, pd.e)(this, Jd, dd, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(dd) {
          this._shadowEnabled !== dd && (this._shadowEnabled = dd, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(dd) {
          this._includedOnlyMeshes = dd, this._hookArrayForIncludedOnly(dd)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(dd) {
          this._excludedMeshes = dd, this._hookArrayForExcluded(dd)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(dd) {
          this._excludeWithLayerMask = dd, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(dd) {
          this._includeOnlyWithLayerMask = dd, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(dd) {
          this._lightmapMode !== dd && (this._lightmapMode = dd, this._markMeshesAsLightDirty())
        }
        getViewMatrix(dd) {
          return null
        }
        getProjectionMatrix(dd, Jd) {
          return null
        }
        constructor(kd, Nd, Wd) {
          super(kd, Nd, !1), this.diffuse = ((0, pd.i)(this, ad), (0, pd.i)(this, Md, new Pd.c(1, 1, 1))), this.specular = ((0, pd.i)(this, Fd), (0, pd.i)(this, Yd, new Pd.c(1, 1, 1))), this.falloffType = ((0, pd.i)(this, md), (0, pd.i)(this, bd, dd.FALLOFF_DEFAULT)), this.intensity = ((0, pd.i)(this, Sd), (0, pd.i)(this, jd, 1)), this._range = ((0, pd.i)(this, Xd), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = dd.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, pd.i)(this, fd, void 0), Jd.set(this, ((0, pd.i)(this, nd), (0, pd.i)(this, Ud, 0))), this._shadowEnabled = ((0, pd.i)(this, yd), (0, pd.i)(this, Dd, !0)), this._includedOnlyMeshes = (0, pd.i)(this, Td), this._excludeWithLayerMask = (0, pd.i)(this, Ed, 0), this._includeOnlyWithLayerMask = ((0, pd.i)(this, cd), (0, pd.i)(this, hd, 0)), this._lightmapMode = ((0, pd.i)(this, rd), (0, pd.i)(this, ud, 0)), this._shadowGenerators = ((0, pd.i)(this, td), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, Wd || this.Wm().addLight(this), this._uniformBuffer = new gd.e(this.Wm().eL(), void 0, void 0, kd), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], Wd || this._resyncMeshes()
        }
        transferTexturesToEffect(dd, Jd) {
          return this
        }
        _bindLight(dd, Jd, kd, pd) {
          let Nd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Wd = dd.toString();
          let Zd = !1;
          if (this._uniformBuffer.bindToEffect(kd, "Light" + Wd), this._renderId !== Jd.getRenderId() || this._lastUseSpecular !== pd || !this._uniformBuffer.useUbo) {
            this._renderId = Jd.getRenderId(), this._lastUseSpecular = pd;
            const dd = this.getScaledIntensity();
            this.transferToEffect(kd, Wd), this.diffuse.scaleToRef(dd, Pd.m.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", Pd.m.Color3[0], this.range, Wd), pd && (this.specular.scaleToRef(dd, Pd.m.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", Pd.m.Color3[1], this.radius, Wd)), Zd = !0
          }
          if (this.transferTexturesToEffect(kd, Wd), Jd.shadowsEnabled && this.shadowEnabled && Nd) {
            const dd = this.getShadowGenerator(Jd.activeCamera) ?? this.getShadowGenerator();
            dd && (dd.bindShadowLight(Wd, kd), Zd = !0)
          }
          Zd ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(dd) {
          let Jd = "Name: " + this.name;
          if (Jd += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let kd = 0; kd < this.animations.length; kd++) Jd += ", animation[0]: " + this.animations[kd].toString(dd);
          return Jd
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.lq() || this._resyncMeshes()
        }
        XM(dd) {
          super.XM(dd), this._resyncMeshes()
        }
        getShadowGenerator() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(dd) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return Wd.n.Zero()
        }
        canAffectMesh(dd) {
          return !dd || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(dd)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(dd)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & dd.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & dd.layerMask)))
        }
        dispose(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const dd = this._shadowGenerators.values();
            for (let Jd = dd.next(); !0 !== Jd.done; Jd = dd.next()) {
              Jd.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.Wm().stopAnimation(this), this._parentContainer) {
            const dd = this._parentContainer.lights.indexOf(this);
            dd > -1 && this._parentContainer.lights.splice(dd, 1), this._parentContainer = null
          }
          for (const kd of this.Wm().meshes) kd._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.Wm().removeLight(this), super.dispose(dd, Jd)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(Jd) {
          let kd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const pd = dd.GetConstructorFromName(this.getTypeID(), Jd, this.Wm());
          if (!pd) return null;
          const Nd = od.c.Clone(pd, this);
          return Jd && (Nd.name = Jd), kd && (Nd.parent = kd), Nd.XM(this.isEnabled()), this.onClonedObservable.notifyObservers(Nd), Nd
        }
        serialize() {
          const dd = od.c.Serialize(this);
          if (dd.uniqueId = this.uniqueId, dd.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(dd), this.excludedMeshes.length > 0) {
            dd.excludedMeshesIds = [];
            for (const Jd of this.excludedMeshes) dd.excludedMeshesIds.push(Jd.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            dd.includedOnlyMeshesIds = [];
            for (const Jd of this.includedOnlyMeshes) dd.includedOnlyMeshesIds.push(Jd.id)
          }
          return od.c.AppendSerializedAnimations(this, dd), dd.UO = this.serializeAnimationRanges(), dd.isEnabled = this.isEnabled(), dd
        }
        static GetConstructorFromName(dd, Jd, kd) {
          const pd = Zd.c.Construct("Light_Type_" + dd, Jd, kd);
          return pd || null
        }
        static Parse(Jd, kd) {
          let pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Nd = dd.GetConstructorFromName(Jd.type, Jd.name, kd);
          if (!Nd) return null;
          const Wd = od.c.Parse(Nd, Jd, kd, pd);
          if (Jd.excludedMeshesIds && (Wd._excludedMeshesIds = Jd.excludedMeshesIds), Jd.includedOnlyMeshesIds && (Wd._includedOnlyMeshesIds = Jd.includedOnlyMeshesIds), void 0 !== Jd.parentId && (Wd._waitingParentId = Jd.parentId), void 0 !== Jd.parentInstanceIndex && (Wd._waitingParentInstanceIndex = Jd.parentInstanceIndex), void 0 !== Jd.falloffType && (Wd.falloffType = Jd.falloffType), void 0 !== Jd.lightmapMode && (Wd.lightmapMode = Jd.lightmapMode), Jd.animations) {
            for (let dd = 0; dd < Jd.animations.length; dd++) {
              const kd = Jd.animations[dd],
                pd = (0, Cd.e)("BABYLON.Animation");
              pd && Wd.animations.push(pd.Parse(kd))
            }
            Zd.c.ParseAnimationRanges(Wd, Jd, kd)
          }
          return Jd.autoAnimate && kd.beginAnimation(Wd, Jd.autoAnimateFrom, Jd.autoAnimateTo, Jd.autoAnimateLoop, Jd.autoAnimateSpeed || 1), void 0 !== Jd.isEnabled && Wd.XM(Jd.isEnabled), Wd._onParsed(Jd, kd, pd), Wd
        }
        _onParsed(dd, Jd) {}
        _hookArrayForExcluded(dd) {
          var Jd = this;
          const kd = dd.push;
          dd.push = function() {
            for (var pd = arguments.length, Nd = new Array(pd), Wd = 0; Wd < pd; Wd++) Nd[Wd] = arguments[Wd];
            const Pd = kd.apply(dd, Nd);
            if (Jd._clusteredContainer) return Pd;
            for (const dd of Nd) dd._resyncLightSource(Jd);
            return Pd
          };
          const pd = dd.splice;
          dd.splice = (Jd, kd) => {
            const Nd = pd.call(dd, Jd, kd ?? dd.length);
            if (this._clusteredContainer) return Nd;
            for (const dd of Nd) dd._resyncLightSource(this);
            return Nd
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(dd) {
          var Jd = this;
          const kd = dd.push;
          dd.push = function() {
            for (var pd = arguments.length, Nd = new Array(pd), Wd = 0; Wd < pd; Wd++) Nd[Wd] = arguments[Wd];
            const Pd = kd.apply(dd, Nd);
            return Jd._resyncMeshes(), Pd
          };
          const pd = dd.splice;
          dd.splice = (Jd, kd) => {
            const Nd = pd.call(dd, Jd, kd ?? dd.length);
            return this._resyncMeshes(), Nd
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const dd of this.Wm().meshes) dd._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const dd of this.Wm().meshes) - 1 !== dd.lightSources.indexOf(this) && dd._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.Wm().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let Jd = 0;
          const kd = this.getTypeID();
          let pd = this.intensityMode;
          switch (pd === dd.INTENSITYMODE_AUTOMATIC && (pd = kd === dd.LIGHTTYPEID_DIRECTIONALLIGHT ? dd.INTENSITYMODE_ILLUMINANCE : dd.INTENSITYMODE_LUMINOUSINTENSITY), kd) {
            case dd.LIGHTTYPEID_POINTLIGHT:
            case dd.LIGHTTYPEID_SPOTLIGHT:
              switch (pd) {
                case dd.INTENSITYMODE_LUMINOUSPOWER:
                  Jd = 1 / (4 * Math.PI);
                  break;
                case dd.INTENSITYMODE_LUMINOUSINTENSITY:
                  Jd = 1;
                  break;
                case dd.INTENSITYMODE_LUMINANCE:
                  Jd = this.radius * this.radius
              }
              break;
            case dd.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (pd) {
                case dd.INTENSITYMODE_ILLUMINANCE:
                  Jd = 1;
                  break;
                case dd.INTENSITYMODE_LUMINANCE: {
                  let dd = this.radius;
                  dd = Math.max(dd, .001);
                  Jd = 2 * Math.PI * (1 - Math.cos(dd));
                  break
                }
              }
              break;
            case dd.LIGHTTYPEID_HEMISPHERICLIGHT:
            case dd.LIGHTTYPEID_RECT_AREALIGHT:
              Jd = 1
          }
          return Jd
        }
        _reorderLightsInScene() {
          const dd = this.Wm();
          0 != this._renderPriority && (dd.requireLightSorting = !0), this.Wm().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, Jd = new WeakMap, (() => {
        const Jd = "function" === typeof Symbol && Symbol.metadata ? Object.create(sd[Symbol.metadata] ?? null) : void 0;
        kd = [(0, Nd.n)()], ld = [(0, Nd.n)()], Qd = [(0, Nd.H)()], Ld = [(0, Nd.H)()], Od = [(0, Nd.H)()], ed = [(0, Nd.H)()], Rd = [(0, Nd.H)()], Id = [(0, Nd.H)()], Gd = [(0, Nd.f)("_reorderLightsInScene")], vd = [(0, Nd.H)("shadowEnabled")], xd = [(0, Nd.H)("excludeWithLayerMask")], qd = [(0, Nd.H)("includeOnlyWithLayerMask")], Bd = [(0, Nd.H)("lightmapMode")], (0, pd.h)(dd, null, Od, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: dd => "range" in dd,
            get: dd => dd.range
          },
          metadata: Jd
        }, null, ad), (0, pd.h)(dd, null, ed, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "intensityMode" in dd,
            get: dd => dd.intensityMode
          },
          metadata: Jd
        }, null, ad), (0, pd.h)(dd, null, Rd, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: dd => "radius" in dd,
            get: dd => dd.radius
          },
          metadata: Jd
        }, null, ad), (0, pd.h)(dd, null, Gd, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: dd => "renderPriority" in dd,
            get: dd => dd.renderPriority,
            set: (dd, Jd) => {
              dd.renderPriority = Jd
            }
          },
          metadata: Jd
        }, Ud, yd), (0, pd.h)(null, null, kd, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: dd => "diffuse" in dd,
            get: dd => dd.diffuse,
            set: (dd, Jd) => {
              dd.diffuse = Jd
            }
          },
          metadata: Jd
        }, Md, Fd), (0, pd.h)(null, null, ld, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: dd => "specular" in dd,
            get: dd => dd.specular,
            set: (dd, Jd) => {
              dd.specular = Jd
            }
          },
          metadata: Jd
        }, Yd, md), (0, pd.h)(null, null, Qd, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: dd => "falloffType" in dd,
            get: dd => dd.falloffType,
            set: (dd, Jd) => {
              dd.falloffType = Jd
            }
          },
          metadata: Jd
        }, bd, Sd), (0, pd.h)(null, null, Ld, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "intensity" in dd,
            get: dd => dd.intensity,
            set: (dd, Jd) => {
              dd.intensity = Jd
            }
          },
          metadata: Jd
        }, jd, Xd), (0, pd.h)(null, null, Id, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: dd => "_renderPriority" in dd,
            get: dd => dd._renderPriority,
            set: (dd, Jd) => {
              dd._renderPriority = Jd
            }
          },
          metadata: Jd
        }, fd, nd), (0, pd.h)(null, null, vd, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "_shadowEnabled" in dd,
            get: dd => dd._shadowEnabled,
            set: (dd, Jd) => {
              dd._shadowEnabled = Jd
            }
          },
          metadata: Jd
        }, Dd, Td), (0, pd.h)(null, null, xd, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: dd => "_excludeWithLayerMask" in dd,
            get: dd => dd._excludeWithLayerMask,
            set: (dd, Jd) => {
              dd._excludeWithLayerMask = Jd
            }
          },
          metadata: Jd
        }, Ed, cd), (0, pd.h)(null, null, qd, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: dd => "_includeOnlyWithLayerMask" in dd,
            get: dd => dd._includeOnlyWithLayerMask,
            set: (dd, Jd) => {
              dd._includeOnlyWithLayerMask = Jd
            }
          },
          metadata: Jd
        }, hd, rd), (0, pd.h)(null, null, Bd, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "_lightmapMode" in dd,
            get: dd => dd._lightmapMode,
            set: (dd, Jd) => {
              dd._lightmapMode = Jd
            }
          },
          metadata: Jd
        }, ud, td), Jd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Jd
        })
      })(), dd.FALLOFF_DEFAULT = Kd.d.FALLOFF_DEFAULT, dd.FALLOFF_PHYSICAL = Kd.d.FALLOFF_PHYSICAL, dd.FALLOFF_GLTF = Kd.d.FALLOFF_GLTF, dd.FALLOFF_STANDARD = Kd.d.FALLOFF_STANDARD, dd.LIGHTMAP_DEFAULT = Kd.d.LIGHTMAP_DEFAULT, dd.LIGHTMAP_SPECULAR = Kd.d.LIGHTMAP_SPECULAR, dd.LIGHTMAP_SHADOWSONLY = Kd.d.LIGHTMAP_SHADOWSONLY, dd.INTENSITYMODE_AUTOMATIC = Kd.d.INTENSITYMODE_AUTOMATIC, dd.INTENSITYMODE_LUMINOUSPOWER = Kd.d.INTENSITYMODE_LUMINOUSPOWER, dd.INTENSITYMODE_LUMINOUSINTENSITY = Kd.d.INTENSITYMODE_LUMINOUSINTENSITY, dd.INTENSITYMODE_ILLUMINANCE = Kd.d.INTENSITYMODE_ILLUMINANCE, dd.INTENSITYMODE_LUMINANCE = Kd.d.INTENSITYMODE_LUMINANCE, dd.LIGHTTYPEID_POINTLIGHT = Kd.d.LIGHTTYPEID_POINTLIGHT, dd.LIGHTTYPEID_DIRECTIONALLIGHT = Kd.d.LIGHTTYPEID_DIRECTIONALLIGHT, dd.LIGHTTYPEID_SPOTLIGHT = Kd.d.LIGHTTYPEID_SPOTLIGHT, dd.LIGHTTYPEID_HEMISPHERICLIGHT = Kd.d.LIGHTTYPEID_HEMISPHERICLIGHT, dd.LIGHTTYPEID_RECT_AREALIGHT = Kd.d.LIGHTTYPEID_RECT_AREALIGHT, dd
    })()
  },
  40205: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => od
    });
    var pd = kd(39964),
      Nd = kd(37251),
      Wd = kd(39966),
      Pd = kd(37280),
      Zd = kd(37277),
      gd = kd(39860),
      Cd = kd(39983);
    class Kd {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new Pd.e, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new Pd.e, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let od = (() => {
      var dd;
      let Jd, kd, od, ld, Qd, Ld = [],
        Od = [],
        ed = [],
        Rd = [],
        Id = [],
        Gd = [],
        vd = [],
        xd = [],
        qd = [],
        Bd = [];
      return dd = class {
        static AddNodeConstructor(dd, Jd) {
          this._NodeConstructors[dd] = Jd
        }
        static Construct(dd, Jd, kd, pd) {
          const Nd = this._NodeConstructors[dd];
          return Nd ? Nd(Jd, kd, pd) : null
        }
        set accessibilityTag(dd) {
          this._accessibilityTag = dd, this.onAccessibilityTagChangedObservable.notifyObservers(dd)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(dd) {
          this._nodeDataStorage._doNotSerialize = dd
        }
        lq() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(dd) {
          if (this._parentNode === dd) return;
          const Jd = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const Jd = this._parentNode._children.indexOf(this); - 1 !== Jd && this._parentNode._children.splice(Jd, 1), dd || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = dd, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), Jd || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(dd) {
          this._nodeDataStorage._inheritVisibility = dd
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(dd) {
          this._nodeDataStorage._isVisible = dd
        }
        _serializeAsParent(dd) {
          dd.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const dd = this._scene.rootNodes,
              Jd = dd.length - 1;
            dd[this._nodeDataStorage._sceneRootNodesIndex] = dd[Jd], dd[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(dd) {
          this._animationPropertiesOverride = dd
        }
        getClassName() {
          return "Node"
        }
        set onDispose(dd) {
          this._onDisposeObserver && this.Zm.remove(this._onDisposeObserver), this._onDisposeObserver = this.Zm.add(dd)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var dd;
          return (dd = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (dd._onEffectiveEnabledStateChangedObservable = new Pd.e)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new Kd, this.name = (0, pd.i)(this, Ld, void 0), this.id = ((0, pd.i)(this, Od), (0, pd.i)(this, ed, void 0)), this.uniqueId = ((0, pd.i)(this, Rd), (0, pd.i)(this, Id, void 0)), this.state = ((0, pd.i)(this, Gd), (0, pd.i)(this, vd, "")), this.metadata = ((0, pd.i)(this, xd), (0, pd.i)(this, qd, null)), this._internalMetadata = (0, pd.i)(this, Bd), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new Pd.e, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = Nd.b.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.Zm = new Pd.e, this._onDisposeObserver = null, this._behaviors = new Array, this.name = dd, this.id = dd, this._scene = Jd || Zd.d.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), kd && this._addToSceneRootNodes()
        }
        Wm() {
          return this._scene
        }
        eL() {
          return this._scene.eL()
        }
        addBehavior(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(dd) || (dd.init(), this._scene.isLoading && !Jd ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(dd) && dd.attach(this)
          })) : dd.attach(this), this._behaviors.push(dd)), this
        }
        removeBehavior(dd) {
          const Jd = this._behaviors.indexOf(dd);
          return -1 === Jd || (this._behaviors.splice(Jd, 1), dd.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(dd) {
          for (const Jd of this._behaviors)
            if (Jd.name === dd) return Jd;
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
        updateCache(dd) {
          !dd && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(dd) {
          return this.parent ? this.parent._getActionManagerForTrigger(dd, !1) : null
        }
        _updateCache(dd) {}
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
        dkd(dd) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const dd = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!dd && dd.hasObservers()
        }
        _syncParentEnabledState() {
          const dd = this._hasEffectiveEnabledStateObservers(),
            Jd = dd ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const kd of this._children) kd._syncParentEnabledState();
          if (dd) {
            const dd = this.isEnabled();
            dd !== Jd && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(dd)
          }
        }
        XM(dd) {
          if (this._nodeDataStorage._isEnabled === dd) return;
          const Jd = this._hasEffectiveEnabledStateObservers(),
            kd = Jd ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = dd, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(dd), Jd) {
            const dd = this.isEnabled();
            dd !== kd && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(dd)
          }
        }
        isDescendantOf(dd) {
          return !!this.parent && (this.parent === dd || this.parent.isDescendantOf(dd))
        }
        _getDescendants(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            kd = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let pd = 0; pd < this._children.length; pd++) {
              const Nd = this._children[pd];
              kd && !kd(Nd) || dd.push(Nd), Jd || Nd._getDescendants(dd, !1, kd)
            }
        }
        getDescendants(dd, Jd) {
          const kd = [];
          return this._getDescendants(kd, dd, Jd), kd
        }
        getChildMeshes(dd, Jd) {
          const kd = [];
          return this._getDescendants(kd, dd, (dd => (!Jd || Jd(dd)) && void 0 !== dd.cullingStrategy)), kd
        }
        getChildren(dd) {
          let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(Jd, dd)
        }
        _setReady(dd) {
          dd !== this._nodeDataStorage._isReady && (dd ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(dd) {
          for (let Jd = 0; Jd < this.animations.length; Jd++) {
            const kd = this.animations[Jd];
            if (kd.name === dd) return kd
          }
          return null
        }
        createAnimationRange(Jd, kd, pd) {
          if (!this._ranges[Jd]) {
            this._ranges[Jd] = dd._AnimationRangeFactory(Jd, kd, pd);
            for (let dd = 0, Nd = this.animations.length; dd < Nd; dd++) this.animations[dd] && this.animations[dd].createRange(Jd, kd, pd)
          }
        }
        deleteAnimationRange(dd) {
          let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let kd = 0, pd = this.animations.length; kd < pd; kd++) this.animations[kd] && this.animations[kd].deleteRange(dd, Jd);
          this._ranges[dd] = null
        }
        getAnimationRange(dd) {
          return this._ranges[dd] || null
        }
        clone(Jd, kd, pd) {
          const Nd = Cd.c.Clone((() => new dd(Jd, this.Wm())), this);
          if (kd && (Nd.parent = kd), !pd) {
            const dd = this.getDescendants(!0);
            for (let kd = 0; kd < dd.length; kd++) {
              const pd = dd[kd];
              pd.clone(Jd + "." + pd.name, Nd)
            }
          }
          return Nd
        }
        getAnimationRanges() {
          const dd = [];
          let Jd;
          for (Jd in this._ranges) dd.push(this._ranges[Jd]);
          return dd
        }
        beginAnimation(dd, Jd, kd, pd) {
          const Nd = this.getAnimationRange(dd);
          return Nd ? this._scene.beginAnimation(this, Nd.from, Nd.to, Jd, kd, pd) : null
        }
        serializeAnimationRanges() {
          const dd = [];
          for (const Jd in this._ranges) {
            const kd = this._ranges[Jd];
            if (!kd) continue;
            const pd = {};
            pd.name = Jd, pd.from = kd.from, pd.to = kd.to, dd.push(pd)
          }
          return dd
        }
        computeWorldMatrix(dd) {
          return this._worldMatrix || (this._worldMatrix = Nd.b.Identity()), this._worldMatrix
        }
        dispose(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !dd) {
            const kd = this.getDescendants(!0);
            for (const pd of kd) pd.dispose(dd, Jd)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.Zm.notifyObservers(this), this.Zm.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const kd of this._behaviors) kd.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(dd, Jd, kd) {
          if (Jd.UO)
            for (let pd = 0; pd < Jd.UO.length; pd++) {
              const kd = Jd.UO[pd];
              dd.createAnimationRange(kd.name, kd.from, kd.to)
            }
        }
        getHierarchyBoundingVectors() {
          let dd, Jd, kd = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            pd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.Wm().incrementRenderId(), this.computeWorldMatrix(!0);
          const Wd = this;
          if (Wd.pU && Wd.rG) {
            const kd = Wd.pU();
            dd = kd.boundingBox.minimumWorld.clone(), Jd = kd.boundingBox.maximumWorld.clone()
          } else dd = new Nd.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), Jd = new Nd.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (kd) {
            const kd = this.getDescendants(!1);
            for (const Wd of kd) {
              const kd = Wd;
              if (kd.computeWorldMatrix(!0), pd && !pd(kd)) continue;
              if (!kd.pU || 0 === kd.getTotalVertices()) continue;
              const Pd = kd.pU().boundingBox,
                Zd = Pd.minimumWorld,
                gd = Pd.maximumWorld;
              Nd.n.CheckExtends(Zd, dd, Jd), Nd.n.CheckExtends(gd, dd, Jd)
            }
          }
          return {
            min: dd,
            max: Jd
          }
        }
      }, (() => {
        const Nd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Jd = [(0, Wd.H)()], kd = [(0, Wd.H)()], od = [(0, Wd.H)()], ld = [(0, Wd.H)()], Qd = [(0, Wd.H)()], (0, pd.h)(null, null, Jd, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: dd => "name" in dd,
            get: dd => dd.name,
            set: (dd, Jd) => {
              dd.name = Jd
            }
          },
          metadata: Nd
        }, Ld, Od), (0, pd.h)(null, null, kd, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: dd => "id" in dd,
            get: dd => dd.id,
            set: (dd, Jd) => {
              dd.id = Jd
            }
          },
          metadata: Nd
        }, ed, Rd), (0, pd.h)(null, null, od, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: dd => "uniqueId" in dd,
            get: dd => dd.uniqueId,
            set: (dd, Jd) => {
              dd.uniqueId = Jd
            }
          },
          metadata: Nd
        }, Id, Gd), (0, pd.h)(null, null, ld, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: dd => "state" in dd,
            get: dd => dd.state,
            set: (dd, Jd) => {
              dd.state = Jd
            }
          },
          metadata: Nd
        }, vd, xd), (0, pd.h)(null, null, Qd, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: dd => "metadata" in dd,
            get: dd => dd.metadata,
            set: (dd, Jd) => {
              dd.metadata = Jd
            }
          },
          metadata: Nd
        }, qd, Bd), Nd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Nd
        })
      })(), dd._AnimationRangeFactory = (dd, Jd, kd) => {
        throw (0, gd.n)("AnimationRange")
      }, dd._NodeConstructors = {}, dd
    })()
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);