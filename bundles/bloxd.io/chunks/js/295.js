export const id = 295;
export const ids = [295];
export const modules = {
  42172: (dd, Od, md) => {
    md.d(Od, {
      c: () => od
    });
    var Wd = md(41922),
      Fd = md(41931),
      Rd = md(38636),
      Xd = md(38741),
      Kd = md(42132),
      hd = md(42065),
      vd = md(38669),
      Qd = md(42118),
      td = md(41948);
    let od = (() => {
      var dd, Od;
      let md, od, Nd, qd, Hd, yd, bd, Td, pd, Yd, gd, wd, Ed, Jd = Kd.b,
        Ud = [],
        xd = [],
        Bd = [],
        Sd = [],
        sd = [],
        ud = [],
        Vd = [],
        Ad = [],
        rd = [],
        Gd = [],
        nd = [],
        Ld = [],
        Pd = [],
        zd = [],
        cd = [],
        jd = [],
        Dd = [],
        ed = [],
        Id = [],
        ld = [],
        Cd = [];
      return dd = class extends Jd {
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
          return (0, Wd.c)(this, Od, "f")
        }
        set renderPriority(dd) {
          (0, Wd.e)(this, Od, dd, "f")
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
        getProjectionMatrix(dd, Od) {
          return null
        }
        constructor(md, Fd, Rd) {
          super(md, Fd, !1), this.diffuse = ((0, Wd.k)(this, Ud), (0, Wd.k)(this, xd, new Xd.d(1, 1, 1))), this.specular = ((0, Wd.k)(this, Bd), (0, Wd.k)(this, Sd, new Xd.d(1, 1, 1))), this.falloffType = ((0, Wd.k)(this, sd), (0, Wd.k)(this, ud, dd.FALLOFF_DEFAULT)), this.intensity = ((0, Wd.k)(this, Vd), (0, Wd.k)(this, Ad, 1)), this._range = ((0, Wd.k)(this, rd), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = dd.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, Wd.k)(this, Gd, void 0), Od.set(this, ((0, Wd.k)(this, nd), (0, Wd.k)(this, Ld, 0))), this._shadowEnabled = ((0, Wd.k)(this, Pd), (0, Wd.k)(this, zd, !0)), this._includedOnlyMeshes = (0, Wd.k)(this, cd), this._excludeWithLayerMask = (0, Wd.k)(this, jd, 0), this._includeOnlyWithLayerMask = ((0, Wd.k)(this, Dd), (0, Wd.k)(this, ed, 0)), this._lightmapMode = ((0, Wd.k)(this, Id), (0, Wd.k)(this, ld, 0)), this._shadowGenerators = ((0, Wd.k)(this, Cd), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, Rd || this.zV().addLight(this), this._uniformBuffer = new hd.c(this.zV().Iq(), void 0, void 0, md), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], Rd || this._resyncMeshes()
        }
        transferTexturesToEffect(dd, Od) {
          return this
        }
        _bindLight(dd, Od, md, Wd) {
          let Fd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Rd = dd.toString();
          let Kd = !1;
          if (this._uniformBuffer.bindToEffect(md, "Light" + Rd), this._renderId !== Od.getRenderId() || this._lastUseSpecular !== Wd || !this._uniformBuffer.useUbo) {
            this._renderId = Od.getRenderId(), this._lastUseSpecular = Wd;
            const dd = this.getScaledIntensity();
            this.transferToEffect(md, Rd), this.diffuse.scaleToRef(dd, Xd.j.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", Xd.j.Color3[0], this.range, Rd), Wd && (this.specular.scaleToRef(dd, Xd.j.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", Xd.j.Color3[1], this.radius, Rd)), Kd = !0
          }
          if (this.transferTexturesToEffect(md, Rd), Od.shadowsEnabled && this.shadowEnabled && Fd) {
            const dd = this.getShadowGenerator(Od.activeCamera) ?? this.getShadowGenerator();
            dd && (dd.bindShadowLight(Rd, md), Kd = !0)
          }
          Kd ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(dd) {
          let Od = "Name: " + this.name;
          if (Od += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let md = 0; md < this.animations.length; md++) Od += ", animation[0]: " + this.animations[md].toString(dd);
          return Od
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.yJ() || this._resyncMeshes()
        }
        rY(dd) {
          super.rY(dd), this._resyncMeshes()
        }
        getShadowGenerator() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(dd) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return Rd.j.Zero()
        }
        canAffectMesh(dd) {
          return !dd || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(dd)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(dd)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & dd.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & dd.layerMask)))
        }
        dispose(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const dd = this._shadowGenerators.values();
            for (let Od = dd.next(); !0 !== Od.done; Od = dd.next()) {
              Od.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.zV().stopAnimation(this), this._parentContainer) {
            const dd = this._parentContainer.lights.indexOf(this);
            dd > -1 && this._parentContainer.lights.splice(dd, 1), this._parentContainer = null
          }
          for (const md of this.zV().meshes) md._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.zV().removeLight(this), super.dispose(dd, Od)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(Od) {
          let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Wd = dd.GetConstructorFromName(this.getTypeID(), Od, this.zV());
          if (!Wd) return null;
          const Fd = td.b.Clone(Wd, this);
          return Od && (Fd.name = Od), md && (Fd.parent = md), Fd.rY(this.isEnabled()), this.onClonedObservable.notifyObservers(Fd), Fd
        }
        serialize() {
          const dd = td.b.Serialize(this);
          if (dd.uniqueId = this.uniqueId, dd.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(dd), this.excludedMeshes.length > 0) {
            dd.excludedMeshesIds = [];
            for (const Od of this.excludedMeshes) dd.excludedMeshesIds.push(Od.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            dd.includedOnlyMeshesIds = [];
            for (const Od of this.includedOnlyMeshes) dd.includedOnlyMeshesIds.push(Od.id)
          }
          return td.b.AppendSerializedAnimations(this, dd), dd.By = this.serializeAnimationRanges(), dd.isEnabled = this.isEnabled(), dd
        }
        static GetConstructorFromName(dd, Od, md) {
          const Wd = Kd.b.Construct("Light_Type_" + dd, Od, md);
          return Wd || null
        }
        static Parse(Od, md) {
          let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Fd = dd.GetConstructorFromName(Od.type, Od.name, md);
          if (!Fd) return null;
          const Rd = td.b.Parse(Fd, Od, md, Wd);
          if (Od.excludedMeshesIds && (Rd._excludedMeshesIds = Od.excludedMeshesIds), Od.includedOnlyMeshesIds && (Rd._includedOnlyMeshesIds = Od.includedOnlyMeshesIds), void 0 !== Od.parentId && (Rd._waitingParentId = Od.parentId), void 0 !== Od.parentInstanceIndex && (Rd._waitingParentInstanceIndex = Od.parentInstanceIndex), void 0 !== Od.falloffType && (Rd.falloffType = Od.falloffType), void 0 !== Od.lightmapMode && (Rd.lightmapMode = Od.lightmapMode), Od.animations) {
            for (let dd = 0; dd < Od.animations.length; dd++) {
              const md = Od.animations[dd],
                Wd = (0, vd.c)("BABYLON.Animation");
              Wd && Rd.animations.push(Wd.Parse(md))
            }
            Kd.b.ParseAnimationRanges(Rd, Od, md)
          }
          return Od.autoAnimate && md.beginAnimation(Rd, Od.autoAnimateFrom, Od.autoAnimateTo, Od.autoAnimateLoop, Od.autoAnimateSpeed || 1), void 0 !== Od.isEnabled && Rd.rY(Od.isEnabled), Rd._onParsed(Od, md, Wd), Rd
        }
        _onParsed(dd, Od) {}
        _hookArrayForExcluded(dd) {
          var Od = this;
          const md = dd.push;
          dd.push = function() {
            for (var Wd = arguments.length, Fd = new Array(Wd), Rd = 0; Rd < Wd; Rd++) Fd[Rd] = arguments[Rd];
            const Xd = md.apply(dd, Fd);
            if (Od._clusteredContainer) return Xd;
            for (const dd of Fd) dd._resyncLightSource(Od);
            return Xd
          };
          const Wd = dd.splice;
          dd.splice = (Od, md) => {
            const Fd = Wd.call(dd, Od, md ?? dd.length);
            if (this._clusteredContainer) return Fd;
            for (const dd of Fd) dd._resyncLightSource(this);
            return Fd
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(dd) {
          var Od = this;
          const md = dd.push;
          dd.push = function() {
            for (var Wd = arguments.length, Fd = new Array(Wd), Rd = 0; Rd < Wd; Rd++) Fd[Rd] = arguments[Rd];
            const Xd = md.apply(dd, Fd);
            return Od._resyncMeshes(), Xd
          };
          const Wd = dd.splice;
          dd.splice = (Od, md) => {
            const Fd = Wd.call(dd, Od, md ?? dd.length);
            return this._resyncMeshes(), Fd
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const dd of this.zV().meshes) dd._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const dd of this.zV().meshes) - 1 !== dd.lightSources.indexOf(this) && dd._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.zV().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let Od = 0;
          const md = this.getTypeID();
          let Wd = this.intensityMode;
          switch (Wd === dd.INTENSITYMODE_AUTOMATIC && (Wd = md === dd.LIGHTTYPEID_DIRECTIONALLIGHT ? dd.INTENSITYMODE_ILLUMINANCE : dd.INTENSITYMODE_LUMINOUSINTENSITY), md) {
            case dd.LIGHTTYPEID_POINTLIGHT:
            case dd.LIGHTTYPEID_SPOTLIGHT:
              switch (Wd) {
                case dd.INTENSITYMODE_LUMINOUSPOWER:
                  Od = 1 / (4 * Math.PI);
                  break;
                case dd.INTENSITYMODE_LUMINOUSINTENSITY:
                  Od = 1;
                  break;
                case dd.INTENSITYMODE_LUMINANCE:
                  Od = this.radius * this.radius
              }
              break;
            case dd.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (Wd) {
                case dd.INTENSITYMODE_ILLUMINANCE:
                  Od = 1;
                  break;
                case dd.INTENSITYMODE_LUMINANCE: {
                  let dd = this.radius;
                  dd = Math.max(dd, .001);
                  Od = 2 * Math.PI * (1 - Math.cos(dd));
                  break
                }
              }
              break;
            case dd.LIGHTTYPEID_HEMISPHERICLIGHT:
            case dd.LIGHTTYPEID_RECT_AREALIGHT:
              Od = 1
          }
          return Od
        }
        _reorderLightsInScene() {
          const dd = this.zV();
          0 != this._renderPriority && (dd.requireLightSorting = !0), this.zV().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, Od = new WeakMap, (() => {
        const Od = "function" === typeof Symbol && Symbol.metadata ? Object.create(Jd[Symbol.metadata] ?? null) : void 0;
        md = [(0, Fd.m)()], od = [(0, Fd.m)()], Nd = [(0, Fd.E)()], qd = [(0, Fd.E)()], Hd = [(0, Fd.E)()], yd = [(0, Fd.E)()], bd = [(0, Fd.E)()], Td = [(0, Fd.E)()], pd = [(0, Fd.g)("_reorderLightsInScene")], Yd = [(0, Fd.E)("shadowEnabled")], gd = [(0, Fd.E)("excludeWithLayerMask")], wd = [(0, Fd.E)("includeOnlyWithLayerMask")], Ed = [(0, Fd.E)("lightmapMode")], (0, Wd.h)(dd, null, Hd, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: dd => "range" in dd,
            get: dd => dd.range
          },
          metadata: Od
        }, null, Ud), (0, Wd.h)(dd, null, yd, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "intensityMode" in dd,
            get: dd => dd.intensityMode
          },
          metadata: Od
        }, null, Ud), (0, Wd.h)(dd, null, bd, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: dd => "radius" in dd,
            get: dd => dd.radius
          },
          metadata: Od
        }, null, Ud), (0, Wd.h)(dd, null, pd, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: dd => "renderPriority" in dd,
            get: dd => dd.renderPriority,
            set: (dd, Od) => {
              dd.renderPriority = Od
            }
          },
          metadata: Od
        }, Ld, Pd), (0, Wd.h)(null, null, md, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: dd => "diffuse" in dd,
            get: dd => dd.diffuse,
            set: (dd, Od) => {
              dd.diffuse = Od
            }
          },
          metadata: Od
        }, xd, Bd), (0, Wd.h)(null, null, od, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: dd => "specular" in dd,
            get: dd => dd.specular,
            set: (dd, Od) => {
              dd.specular = Od
            }
          },
          metadata: Od
        }, Sd, sd), (0, Wd.h)(null, null, Nd, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: dd => "falloffType" in dd,
            get: dd => dd.falloffType,
            set: (dd, Od) => {
              dd.falloffType = Od
            }
          },
          metadata: Od
        }, ud, Vd), (0, Wd.h)(null, null, qd, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: dd => "intensity" in dd,
            get: dd => dd.intensity,
            set: (dd, Od) => {
              dd.intensity = Od
            }
          },
          metadata: Od
        }, Ad, rd), (0, Wd.h)(null, null, Td, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: dd => "_renderPriority" in dd,
            get: dd => dd._renderPriority,
            set: (dd, Od) => {
              dd._renderPriority = Od
            }
          },
          metadata: Od
        }, Gd, nd), (0, Wd.h)(null, null, Yd, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: dd => "_shadowEnabled" in dd,
            get: dd => dd._shadowEnabled,
            set: (dd, Od) => {
              dd._shadowEnabled = Od
            }
          },
          metadata: Od
        }, zd, cd), (0, Wd.h)(null, null, gd, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: dd => "_excludeWithLayerMask" in dd,
            get: dd => dd._excludeWithLayerMask,
            set: (dd, Od) => {
              dd._excludeWithLayerMask = Od
            }
          },
          metadata: Od
        }, jd, Dd), (0, Wd.h)(null, null, wd, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: dd => "_includeOnlyWithLayerMask" in dd,
            get: dd => dd._includeOnlyWithLayerMask,
            set: (dd, Od) => {
              dd._includeOnlyWithLayerMask = Od
            }
          },
          metadata: Od
        }, ed, Id), (0, Wd.h)(null, null, Ed, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: dd => "_lightmapMode" in dd,
            get: dd => dd._lightmapMode,
            set: (dd, Od) => {
              dd._lightmapMode = Od
            }
          },
          metadata: Od
        }, ld, Cd), Od && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Od
        })
      })(), dd.FALLOFF_DEFAULT = Qd.c.FALLOFF_DEFAULT, dd.FALLOFF_PHYSICAL = Qd.c.FALLOFF_PHYSICAL, dd.FALLOFF_GLTF = Qd.c.FALLOFF_GLTF, dd.FALLOFF_STANDARD = Qd.c.FALLOFF_STANDARD, dd.LIGHTMAP_DEFAULT = Qd.c.LIGHTMAP_DEFAULT, dd.LIGHTMAP_SPECULAR = Qd.c.LIGHTMAP_SPECULAR, dd.LIGHTMAP_SHADOWSONLY = Qd.c.LIGHTMAP_SHADOWSONLY, dd.INTENSITYMODE_AUTOMATIC = Qd.c.INTENSITYMODE_AUTOMATIC, dd.INTENSITYMODE_LUMINOUSPOWER = Qd.c.INTENSITYMODE_LUMINOUSPOWER, dd.INTENSITYMODE_LUMINOUSINTENSITY = Qd.c.INTENSITYMODE_LUMINOUSINTENSITY, dd.INTENSITYMODE_ILLUMINANCE = Qd.c.INTENSITYMODE_ILLUMINANCE, dd.INTENSITYMODE_LUMINANCE = Qd.c.INTENSITYMODE_LUMINANCE, dd.LIGHTTYPEID_POINTLIGHT = Qd.c.LIGHTTYPEID_POINTLIGHT, dd.LIGHTTYPEID_DIRECTIONALLIGHT = Qd.c.LIGHTTYPEID_DIRECTIONALLIGHT, dd.LIGHTTYPEID_SPOTLIGHT = Qd.c.LIGHTTYPEID_SPOTLIGHT, dd.LIGHTTYPEID_HEMISPHERICLIGHT = Qd.c.LIGHTTYPEID_HEMISPHERICLIGHT, dd.LIGHTTYPEID_RECT_AREALIGHT = Qd.c.LIGHTTYPEID_RECT_AREALIGHT, dd
    })()
  },
  42132: (dd, Od, md) => {
    md.d(Od, {
      b: () => td
    });
    var Wd = md(41922),
      Fd = md(38636),
      Rd = md(41931),
      Xd = md(38660),
      Kd = md(38651),
      hd = md(41817),
      vd = md(41948);
    class Qd {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new Xd.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new Xd.c, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let td = (() => {
      var dd;
      let Od, md, td, od, Nd, qd = [],
        Hd = [],
        yd = [],
        bd = [],
        Td = [],
        pd = [],
        Yd = [],
        gd = [],
        wd = [],
        Ed = [];
      return dd = class {
        static AddNodeConstructor(dd, Od) {
          this._NodeConstructors[dd] = Od
        }
        static Construct(dd, Od, md, Wd) {
          const Fd = this._NodeConstructors[dd];
          return Fd ? Fd(Od, md, Wd) : null
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
        yJ() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(dd) {
          if (this._parentNode === dd) return;
          const Od = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const Od = this._parentNode._children.indexOf(this); - 1 !== Od && this._parentNode._children.splice(Od, 1), dd || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = dd, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), Od || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
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
              Od = dd.length - 1;
            dd[this._nodeDataStorage._sceneRootNodesIndex] = dd[Od], dd[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
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
          this._onDisposeObserver && this.cV.remove(this._onDisposeObserver), this._onDisposeObserver = this.cV.add(dd)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var dd;
          return (dd = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (dd._onEffectiveEnabledStateChangedObservable = new Xd.c)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new Qd, this.name = (0, Wd.k)(this, qd, void 0), this.id = ((0, Wd.k)(this, Hd), (0, Wd.k)(this, yd, void 0)), this.uniqueId = ((0, Wd.k)(this, bd), (0, Wd.k)(this, Td, void 0)), this.state = ((0, Wd.k)(this, pd), (0, Wd.k)(this, Yd, "")), this.metadata = ((0, Wd.k)(this, gd), (0, Wd.k)(this, wd, null)), this._internalMetadata = (0, Wd.k)(this, Ed), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new Xd.c, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = Fd.d.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.cV = new Xd.c, this._onDisposeObserver = null, this._behaviors = new Array, this.name = dd, this.id = dd, this._scene = Od || Kd.e.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), md && this._addToSceneRootNodes()
        }
        zV() {
          return this._scene
        }
        Iq() {
          return this._scene.Iq()
        }
        addBehavior(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(dd) || (dd.init(), this._scene.isLoading && !Od ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(dd) && dd.attach(this)
          })) : dd.attach(this), this._behaviors.push(dd)), this
        }
        removeBehavior(dd) {
          const Od = this._behaviors.indexOf(dd);
          return -1 === Od || (this._behaviors.splice(Od, 1), dd.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(dd) {
          for (const Od of this._behaviors)
            if (Od.name === dd) return Od;
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
        KWd(dd) {
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
            Od = dd ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const md of this._children) md._syncParentEnabledState();
          if (dd) {
            const dd = this.isEnabled();
            dd !== Od && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(dd)
          }
        }
        rY(dd) {
          if (this._nodeDataStorage._isEnabled === dd) return;
          const Od = this._hasEffectiveEnabledStateObservers(),
            md = Od ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = dd, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(dd), Od) {
            const dd = this.isEnabled();
            dd !== md && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(dd)
          }
        }
        isDescendantOf(dd) {
          return !!this.parent && (this.parent === dd || this.parent.isDescendantOf(dd))
        }
        _getDescendants(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            md = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let Wd = 0; Wd < this._children.length; Wd++) {
              const Fd = this._children[Wd];
              md && !md(Fd) || dd.push(Fd), Od || Fd._getDescendants(dd, !1, md)
            }
        }
        getDescendants(dd, Od) {
          const md = [];
          return this._getDescendants(md, dd, Od), md
        }
        getChildMeshes(dd, Od) {
          const md = [];
          return this._getDescendants(md, dd, (dd => (!Od || Od(dd)) && void 0 !== dd.cullingStrategy)), md
        }
        getChildren(dd) {
          let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(Od, dd)
        }
        _setReady(dd) {
          dd !== this._nodeDataStorage._isReady && (dd ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(dd) {
          for (let Od = 0; Od < this.animations.length; Od++) {
            const md = this.animations[Od];
            if (md.name === dd) return md
          }
          return null
        }
        createAnimationRange(Od, md, Wd) {
          if (!this._ranges[Od]) {
            this._ranges[Od] = dd._AnimationRangeFactory(Od, md, Wd);
            for (let dd = 0, Fd = this.animations.length; dd < Fd; dd++) this.animations[dd] && this.animations[dd].createRange(Od, md, Wd)
          }
        }
        deleteAnimationRange(dd) {
          let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let md = 0, Wd = this.animations.length; md < Wd; md++) this.animations[md] && this.animations[md].deleteRange(dd, Od);
          this._ranges[dd] = null
        }
        getAnimationRange(dd) {
          return this._ranges[dd] || null
        }
        clone(Od, md, Wd) {
          const Fd = vd.b.Clone((() => new dd(Od, this.zV())), this);
          if (md && (Fd.parent = md), !Wd) {
            const dd = this.getDescendants(!0);
            for (let md = 0; md < dd.length; md++) {
              const Wd = dd[md];
              Wd.clone(Od + "." + Wd.name, Fd)
            }
          }
          return Fd
        }
        getAnimationRanges() {
          const dd = [];
          let Od;
          for (Od in this._ranges) dd.push(this._ranges[Od]);
          return dd
        }
        beginAnimation(dd, Od, md, Wd) {
          const Fd = this.getAnimationRange(dd);
          return Fd ? this._scene.beginAnimation(this, Fd.from, Fd.to, Od, md, Wd) : null
        }
        serializeAnimationRanges() {
          const dd = [];
          for (const Od in this._ranges) {
            const md = this._ranges[Od];
            if (!md) continue;
            const Wd = {};
            Wd.name = Od, Wd.from = md.from, Wd.to = md.to, dd.push(Wd)
          }
          return dd
        }
        computeWorldMatrix(dd) {
          return this._worldMatrix || (this._worldMatrix = Fd.d.Identity()), this._worldMatrix
        }
        dispose(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !dd) {
            const md = this.getDescendants(!0);
            for (const Wd of md) Wd.dispose(dd, Od)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.cV.notifyObservers(this), this.cV.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const md of this._behaviors) md.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(dd, Od, md) {
          if (Od.By)
            for (let Wd = 0; Wd < Od.By.length; Wd++) {
              const md = Od.By[Wd];
              dd.createAnimationRange(md.name, md.from, md.to)
            }
        }
        getHierarchyBoundingVectors() {
          let dd, Od, md = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Wd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.zV().incrementRenderId(), this.computeWorldMatrix(!0);
          const Rd = this;
          if (Rd.iG && Rd.ZE) {
            const md = Rd.iG();
            dd = md.boundingBox.minimumWorld.clone(), Od = md.boundingBox.maximumWorld.clone()
          } else dd = new Fd.j(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), Od = new Fd.j(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (md) {
            const md = this.getDescendants(!1);
            for (const Rd of md) {
              const md = Rd;
              if (md.computeWorldMatrix(!0), Wd && !Wd(md)) continue;
              if (!md.iG || 0 === md.getTotalVertices()) continue;
              const Xd = md.iG().boundingBox,
                Kd = Xd.minimumWorld,
                hd = Xd.maximumWorld;
              Fd.j.CheckExtends(Kd, dd, Od), Fd.j.CheckExtends(hd, dd, Od)
            }
          }
          return {
            min: dd,
            max: Od
          }
        }
      }, (() => {
        const Fd = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Od = [(0, Rd.E)()], md = [(0, Rd.E)()], td = [(0, Rd.E)()], od = [(0, Rd.E)()], Nd = [(0, Rd.E)()], (0, Wd.h)(null, null, Od, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: dd => "name" in dd,
            get: dd => dd.name,
            set: (dd, Od) => {
              dd.name = Od
            }
          },
          metadata: Fd
        }, qd, Hd), (0, Wd.h)(null, null, md, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: dd => "id" in dd,
            get: dd => dd.id,
            set: (dd, Od) => {
              dd.id = Od
            }
          },
          metadata: Fd
        }, yd, bd), (0, Wd.h)(null, null, td, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: dd => "uniqueId" in dd,
            get: dd => dd.uniqueId,
            set: (dd, Od) => {
              dd.uniqueId = Od
            }
          },
          metadata: Fd
        }, Td, pd), (0, Wd.h)(null, null, od, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: dd => "state" in dd,
            get: dd => dd.state,
            set: (dd, Od) => {
              dd.state = Od
            }
          },
          metadata: Fd
        }, Yd, gd), (0, Wd.h)(null, null, Nd, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: dd => "metadata" in dd,
            get: dd => dd.metadata,
            set: (dd, Od) => {
              dd.metadata = Od
            }
          },
          metadata: Fd
        }, wd, Ed), Fd && Object.defineProperty(dd, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fd
        })
      })(), dd._AnimationRangeFactory = (dd, Od, md) => {
        throw (0, hd.m)("AnimationRange")
      }, dd._NodeConstructors = {}, dd
    })()
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);