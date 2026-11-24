export const id = 263;
export const ids = [263];
export const modules = {
  40445: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => lt
    });
    var Ot = Vt(40211),
      qt = Vt(40213),
      Dt = Vt(37336),
      mt = Vt(37513),
      dt = Vt(40415),
      jt = Vt(40337),
      Ht = Vt(37390),
      Xt = Vt(40395),
      Qt = Vt(40230);
    let lt = (() => {
      var tt, et;
      let Vt, lt, Et, ft, wt, yt, Nt, Mt, bt, Jt, Ct, ut, Kt, ht = dt.d,
        vt = [],
        Wt = [],
        St = [],
        ct = [],
        Rt = [],
        It = [],
        Pt = [],
        Zt = [],
        Lt = [],
        Ft = [],
        kt = [],
        Gt = [],
        zt = [],
        ot = [],
        rt = [],
        Ut = [],
        At = [],
        it = [],
        Yt = [],
        Bt = [],
        pt = [];
      return tt = class extends ht {
        get range() {
          return this._range
        }
        set range(tt) {
          this._range = tt, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(tt) {
          this._intensityMode = tt, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(tt) {
          this._radius = tt, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, Ot.e)(this, et, "f")
        }
        set renderPriority(tt) {
          (0, Ot.i)(this, et, tt, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(tt) {
          this._shadowEnabled !== tt && (this._shadowEnabled = tt, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(tt) {
          this._includedOnlyMeshes = tt, this._hookArrayForIncludedOnly(tt)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(tt) {
          this._excludedMeshes = tt, this._hookArrayForExcluded(tt)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(tt) {
          this._excludeWithLayerMask = tt, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(tt) {
          this._includeOnlyWithLayerMask = tt, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(tt) {
          this._lightmapMode !== tt && (this._lightmapMode = tt, this._markMeshesAsLightDirty())
        }
        getViewMatrix(tt) {
          return null
        }
        getProjectionMatrix(tt, et) {
          return null
        }
        constructor(Vt, qt, Dt) {
          super(Vt, qt, !1), this.diffuse = ((0, Ot.m)(this, vt), (0, Ot.m)(this, Wt, new mt.b(1, 1, 1))), this.specular = ((0, Ot.m)(this, St), (0, Ot.m)(this, ct, new mt.b(1, 1, 1))), this.falloffType = ((0, Ot.m)(this, Rt), (0, Ot.m)(this, It, tt.FALLOFF_DEFAULT)), this.intensity = ((0, Ot.m)(this, Pt), (0, Ot.m)(this, Zt, 1)), this._range = ((0, Ot.m)(this, Lt), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = tt.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, Ot.m)(this, Ft, void 0), et.set(this, ((0, Ot.m)(this, kt), (0, Ot.m)(this, Gt, 0))), this._shadowEnabled = ((0, Ot.m)(this, zt), (0, Ot.m)(this, ot, !0)), this._includedOnlyMeshes = (0, Ot.m)(this, rt), this._excludeWithLayerMask = (0, Ot.m)(this, Ut, 0), this._includeOnlyWithLayerMask = ((0, Ot.m)(this, At), (0, Ot.m)(this, it, 0)), this._lightmapMode = ((0, Ot.m)(this, Yt), (0, Ot.m)(this, Bt, 0)), this._shadowGenerators = ((0, Ot.m)(this, pt), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, Dt || this.vI().addLight(this), this._uniformBuffer = new jt.c(this.vI().Jf(), void 0, void 0, Vt), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], Dt || this._resyncMeshes()
        }
        transferTexturesToEffect(tt, et) {
          return this
        }
        _bindLight(tt, et, Vt, Ot) {
          let qt = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Dt = tt.toString();
          let dt = !1;
          if (this._uniformBuffer.bindToEffect(Vt, "Light" + Dt), this._renderId !== et.getRenderId() || this._lastUseSpecular !== Ot || !this._uniformBuffer.useUbo) {
            this._renderId = et.getRenderId(), this._lastUseSpecular = Ot;
            const tt = this.getScaledIntensity();
            this.transferToEffect(Vt, Dt), this.diffuse.scaleToRef(tt, mt.f.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", mt.f.Color3[0], this.range, Dt), Ot && (this.specular.scaleToRef(tt, mt.f.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", mt.f.Color3[1], this.radius, Dt)), dt = !0
          }
          if (this.transferTexturesToEffect(Vt, Dt), et.shadowsEnabled && this.shadowEnabled && qt) {
            const tt = this.getShadowGenerator(et.activeCamera) ?? this.getShadowGenerator();
            tt && (tt.bindShadowLight(Dt, Vt), dt = !0)
          }
          dt ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(tt) {
          let et = "Name: " + this.name;
          if (et += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let Vt = 0; Vt < this.animations.length; Vt++) et += ", animation[0]: " + this.animations[Vt].toString(tt);
          return et
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.bC() || this._resyncMeshes()
        }
        Av(tt) {
          super.Av(tt), this._resyncMeshes()
        }
        getShadowGenerator() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(tt) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return Dt.n.Zero()
        }
        canAffectMesh(tt) {
          return !tt || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(tt)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(tt)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & tt.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & tt.layerMask)))
        }
        dispose(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const tt = this._shadowGenerators.values();
            for (let et = tt.next(); !0 !== et.done; et = tt.next()) {
              et.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.vI().stopAnimation(this), this._parentContainer) {
            const tt = this._parentContainer.lights.indexOf(this);
            tt > -1 && this._parentContainer.lights.splice(tt, 1), this._parentContainer = null
          }
          for (const Vt of this.vI().meshes) Vt._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.vI().removeLight(this), super.dispose(tt, et)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(et) {
          let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Ot = tt.GetConstructorFromName(this.getTypeID(), et, this.vI());
          if (!Ot) return null;
          const qt = Qt.d.Clone(Ot, this);
          return et && (qt.name = et), Vt && (qt.parent = Vt), qt.Av(this.isEnabled()), this.onClonedObservable.notifyObservers(qt), qt
        }
        serialize() {
          const tt = Qt.d.Serialize(this);
          if (tt.uniqueId = this.uniqueId, tt.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(tt), this.excludedMeshes.length > 0) {
            tt.excludedMeshesIds = [];
            for (const et of this.excludedMeshes) tt.excludedMeshesIds.push(et.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            tt.includedOnlyMeshesIds = [];
            for (const et of this.includedOnlyMeshes) tt.includedOnlyMeshesIds.push(et.id)
          }
          return Qt.d.AppendSerializedAnimations(this, tt), tt.nw = this.serializeAnimationRanges(), tt.isEnabled = this.isEnabled(), tt
        }
        static GetConstructorFromName(tt, et, Vt) {
          const Ot = dt.d.Construct("Light_Type_" + tt, et, Vt);
          return Ot || null
        }
        static Parse(et, Vt) {
          let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const qt = tt.GetConstructorFromName(et.type, et.name, Vt);
          if (!qt) return null;
          const Dt = Qt.d.Parse(qt, et, Vt, Ot);
          if (et.excludedMeshesIds && (Dt._excludedMeshesIds = et.excludedMeshesIds), et.includedOnlyMeshesIds && (Dt._includedOnlyMeshesIds = et.includedOnlyMeshesIds), void 0 !== et.parentId && (Dt._waitingParentId = et.parentId), void 0 !== et.parentInstanceIndex && (Dt._waitingParentInstanceIndex = et.parentInstanceIndex), void 0 !== et.falloffType && (Dt.falloffType = et.falloffType), void 0 !== et.lightmapMode && (Dt.lightmapMode = et.lightmapMode), et.animations) {
            for (let tt = 0; tt < et.animations.length; tt++) {
              const Vt = et.animations[tt],
                Ot = (0, Ht.e)("BABYLON.Animation");
              Ot && Dt.animations.push(Ot.Parse(Vt))
            }
            dt.d.ParseAnimationRanges(Dt, et, Vt)
          }
          return et.autoAnimate && Vt.beginAnimation(Dt, et.autoAnimateFrom, et.autoAnimateTo, et.autoAnimateLoop, et.autoAnimateSpeed || 1), void 0 !== et.isEnabled && Dt.Av(et.isEnabled), Dt._onParsed(et, Vt, Ot), Dt
        }
        _onParsed(tt, et) {}
        _hookArrayForExcluded(tt) {
          var et = this;
          const Vt = tt.push;
          tt.push = function() {
            for (var Ot = arguments.length, qt = new Array(Ot), Dt = 0; Dt < Ot; Dt++) qt[Dt] = arguments[Dt];
            const mt = Vt.apply(tt, qt);
            if (et._clusteredContainer) return mt;
            for (const tt of qt) tt._resyncLightSource(et);
            return mt
          };
          const Ot = tt.splice;
          tt.splice = (et, Vt) => {
            const qt = Ot.call(tt, et, Vt ?? tt.length);
            if (this._clusteredContainer) return qt;
            for (const tt of qt) tt._resyncLightSource(this);
            return qt
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(tt) {
          var et = this;
          const Vt = tt.push;
          tt.push = function() {
            for (var Ot = arguments.length, qt = new Array(Ot), Dt = 0; Dt < Ot; Dt++) qt[Dt] = arguments[Dt];
            const mt = Vt.apply(tt, qt);
            return et._resyncMeshes(), mt
          };
          const Ot = tt.splice;
          tt.splice = (et, Vt) => {
            const qt = Ot.call(tt, et, Vt ?? tt.length);
            return this._resyncMeshes(), qt
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const tt of this.vI().meshes) tt._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const tt of this.vI().meshes) - 1 !== tt.lightSources.indexOf(this) && tt._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.vI().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let et = 0;
          const Vt = this.getTypeID();
          let Ot = this.intensityMode;
          switch (Ot === tt.INTENSITYMODE_AUTOMATIC && (Ot = Vt === tt.LIGHTTYPEID_DIRECTIONALLIGHT ? tt.INTENSITYMODE_ILLUMINANCE : tt.INTENSITYMODE_LUMINOUSINTENSITY), Vt) {
            case tt.LIGHTTYPEID_POINTLIGHT:
            case tt.LIGHTTYPEID_SPOTLIGHT:
              switch (Ot) {
                case tt.INTENSITYMODE_LUMINOUSPOWER:
                  et = 1 / (4 * Math.PI);
                  break;
                case tt.INTENSITYMODE_LUMINOUSINTENSITY:
                  et = 1;
                  break;
                case tt.INTENSITYMODE_LUMINANCE:
                  et = this.radius * this.radius
              }
              break;
            case tt.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (Ot) {
                case tt.INTENSITYMODE_ILLUMINANCE:
                  et = 1;
                  break;
                case tt.INTENSITYMODE_LUMINANCE: {
                  let tt = this.radius;
                  tt = Math.max(tt, .001);
                  et = 2 * Math.PI * (1 - Math.cos(tt));
                  break
                }
              }
              break;
            case tt.LIGHTTYPEID_HEMISPHERICLIGHT:
            case tt.LIGHTTYPEID_RECT_AREALIGHT:
              et = 1
          }
          return et
        }
        _reorderLightsInScene() {
          const tt = this.vI();
          0 != this._renderPriority && (tt.requireLightSorting = !0), this.vI().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, et = new WeakMap, (() => {
        const et = "function" === typeof Symbol && Symbol.metadata ? Object.create(ht[Symbol.metadata] ?? null) : void 0;
        Vt = [(0, qt.t)()], lt = [(0, qt.t)()], Et = [(0, qt.P)()], ft = [(0, qt.P)()], wt = [(0, qt.P)()], yt = [(0, qt.P)()], Nt = [(0, qt.P)()], Mt = [(0, qt.P)()], bt = [(0, qt.i)("_reorderLightsInScene")], Jt = [(0, qt.P)("shadowEnabled")], Ct = [(0, qt.P)("excludeWithLayerMask")], ut = [(0, qt.P)("includeOnlyWithLayerMask")], Kt = [(0, qt.P)("lightmapMode")], (0, Ot.l)(tt, null, wt, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: tt => "range" in tt,
            get: tt => tt.range
          },
          metadata: et
        }, null, vt), (0, Ot.l)(tt, null, yt, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: tt => "intensityMode" in tt,
            get: tt => tt.intensityMode
          },
          metadata: et
        }, null, vt), (0, Ot.l)(tt, null, Nt, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: tt => "radius" in tt,
            get: tt => tt.radius
          },
          metadata: et
        }, null, vt), (0, Ot.l)(tt, null, bt, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: tt => "renderPriority" in tt,
            get: tt => tt.renderPriority,
            set: (tt, et) => {
              tt.renderPriority = et
            }
          },
          metadata: et
        }, Gt, zt), (0, Ot.l)(null, null, Vt, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: tt => "diffuse" in tt,
            get: tt => tt.diffuse,
            set: (tt, et) => {
              tt.diffuse = et
            }
          },
          metadata: et
        }, Wt, St), (0, Ot.l)(null, null, lt, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: tt => "specular" in tt,
            get: tt => tt.specular,
            set: (tt, et) => {
              tt.specular = et
            }
          },
          metadata: et
        }, ct, Rt), (0, Ot.l)(null, null, Et, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: tt => "falloffType" in tt,
            get: tt => tt.falloffType,
            set: (tt, et) => {
              tt.falloffType = et
            }
          },
          metadata: et
        }, It, Pt), (0, Ot.l)(null, null, ft, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: tt => "intensity" in tt,
            get: tt => tt.intensity,
            set: (tt, et) => {
              tt.intensity = et
            }
          },
          metadata: et
        }, Zt, Lt), (0, Ot.l)(null, null, Mt, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: tt => "_renderPriority" in tt,
            get: tt => tt._renderPriority,
            set: (tt, et) => {
              tt._renderPriority = et
            }
          },
          metadata: et
        }, Ft, kt), (0, Ot.l)(null, null, Jt, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: tt => "_shadowEnabled" in tt,
            get: tt => tt._shadowEnabled,
            set: (tt, et) => {
              tt._shadowEnabled = et
            }
          },
          metadata: et
        }, ot, rt), (0, Ot.l)(null, null, Ct, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: tt => "_excludeWithLayerMask" in tt,
            get: tt => tt._excludeWithLayerMask,
            set: (tt, et) => {
              tt._excludeWithLayerMask = et
            }
          },
          metadata: et
        }, Ut, At), (0, Ot.l)(null, null, ut, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: tt => "_includeOnlyWithLayerMask" in tt,
            get: tt => tt._includeOnlyWithLayerMask,
            set: (tt, et) => {
              tt._includeOnlyWithLayerMask = et
            }
          },
          metadata: et
        }, it, Yt), (0, Ot.l)(null, null, Kt, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: tt => "_lightmapMode" in tt,
            get: tt => tt._lightmapMode,
            set: (tt, et) => {
              tt._lightmapMode = et
            }
          },
          metadata: et
        }, Bt, pt), et && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: et
        })
      })(), tt.FALLOFF_DEFAULT = Xt.d.FALLOFF_DEFAULT, tt.FALLOFF_PHYSICAL = Xt.d.FALLOFF_PHYSICAL, tt.FALLOFF_GLTF = Xt.d.FALLOFF_GLTF, tt.FALLOFF_STANDARD = Xt.d.FALLOFF_STANDARD, tt.LIGHTMAP_DEFAULT = Xt.d.LIGHTMAP_DEFAULT, tt.LIGHTMAP_SPECULAR = Xt.d.LIGHTMAP_SPECULAR, tt.LIGHTMAP_SHADOWSONLY = Xt.d.LIGHTMAP_SHADOWSONLY, tt.INTENSITYMODE_AUTOMATIC = Xt.d.INTENSITYMODE_AUTOMATIC, tt.INTENSITYMODE_LUMINOUSPOWER = Xt.d.INTENSITYMODE_LUMINOUSPOWER, tt.INTENSITYMODE_LUMINOUSINTENSITY = Xt.d.INTENSITYMODE_LUMINOUSINTENSITY, tt.INTENSITYMODE_ILLUMINANCE = Xt.d.INTENSITYMODE_ILLUMINANCE, tt.INTENSITYMODE_LUMINANCE = Xt.d.INTENSITYMODE_LUMINANCE, tt.LIGHTTYPEID_POINTLIGHT = Xt.d.LIGHTTYPEID_POINTLIGHT, tt.LIGHTTYPEID_DIRECTIONALLIGHT = Xt.d.LIGHTTYPEID_DIRECTIONALLIGHT, tt.LIGHTTYPEID_SPOTLIGHT = Xt.d.LIGHTTYPEID_SPOTLIGHT, tt.LIGHTTYPEID_HEMISPHERICLIGHT = Xt.d.LIGHTTYPEID_HEMISPHERICLIGHT, tt.LIGHTTYPEID_RECT_AREALIGHT = Xt.d.LIGHTTYPEID_RECT_AREALIGHT, tt
    })()
  },
  40415: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Qt
    });
    var Ot = Vt(40211),
      qt = Vt(37336),
      Dt = Vt(40213),
      mt = Vt(37367),
      dt = Vt(37359),
      jt = Vt(40080),
      Ht = Vt(40230);
    class Xt {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new mt.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new mt.c, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let Qt = (() => {
      var tt;
      let et, Vt, Qt, lt, Et, ft = [],
        wt = [],
        yt = [],
        Nt = [],
        Mt = [],
        bt = [],
        Jt = [],
        Ct = [],
        ut = [],
        Kt = [];
      return tt = class {
        static AddNodeConstructor(tt, et) {
          this._NodeConstructors[tt] = et
        }
        static Construct(tt, et, Vt, Ot) {
          const qt = this._NodeConstructors[tt];
          return qt ? qt(et, Vt, Ot) : null
        }
        set accessibilityTag(tt) {
          this._accessibilityTag = tt, this.onAccessibilityTagChangedObservable.notifyObservers(tt)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(tt) {
          this._nodeDataStorage._doNotSerialize = tt
        }
        bC() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(tt) {
          if (this._parentNode === tt) return;
          const et = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const et = this._parentNode._children.indexOf(this); - 1 !== et && this._parentNode._children.splice(et, 1), tt || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = tt, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), et || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(tt) {
          this._nodeDataStorage._inheritVisibility = tt
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(tt) {
          this._nodeDataStorage._isVisible = tt
        }
        _serializeAsParent(tt) {
          tt.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const tt = this._scene.rootNodes,
              et = tt.length - 1;
            tt[this._nodeDataStorage._sceneRootNodesIndex] = tt[et], tt[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(tt) {
          this._animationPropertiesOverride = tt
        }
        getClassName() {
          return "Node"
        }
        set onDispose(tt) {
          this._onDisposeObserver && this.ZI.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZI.add(tt)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var tt;
          return (tt = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (tt._onEffectiveEnabledStateChangedObservable = new mt.c)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            Vt = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new Xt, this.name = (0, Ot.m)(this, ft, void 0), this.id = ((0, Ot.m)(this, wt), (0, Ot.m)(this, yt, void 0)), this.uniqueId = ((0, Ot.m)(this, Nt), (0, Ot.m)(this, Mt, void 0)), this.state = ((0, Ot.m)(this, bt), (0, Ot.m)(this, Jt, "")), this.metadata = ((0, Ot.m)(this, Ct), (0, Ot.m)(this, ut, null)), this._internalMetadata = (0, Ot.m)(this, Kt), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new mt.c, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = qt.c.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.ZI = new mt.c, this._onDisposeObserver = null, this._behaviors = new Array, this.name = tt, this.id = tt, this._scene = et || dt.d.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), Vt && this._addToSceneRootNodes()
        }
        vI() {
          return this._scene
        }
        Jf() {
          return this._scene.Jf()
        }
        addBehavior(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(tt) || (tt.init(), this._scene.isLoading && !et ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(tt) && tt.attach(this)
          })) : tt.attach(this), this._behaviors.push(tt)), this
        }
        removeBehavior(tt) {
          const et = this._behaviors.indexOf(tt);
          return -1 === et || (this._behaviors.splice(et, 1), tt.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(tt) {
          for (const et of this._behaviors)
            if (et.name === tt) return et;
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
        updateCache(tt) {
          !tt && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(tt) {
          return this.parent ? this.parent._getActionManagerForTrigger(tt, !1) : null
        }
        _updateCache(tt) {}
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
        fVt(tt) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const tt = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!tt && tt.hasObservers()
        }
        _syncParentEnabledState() {
          const tt = this._hasEffectiveEnabledStateObservers(),
            et = tt ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const Vt of this._children) Vt._syncParentEnabledState();
          if (tt) {
            const tt = this.isEnabled();
            tt !== et && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(tt)
          }
        }
        Av(tt) {
          if (this._nodeDataStorage._isEnabled === tt) return;
          const et = this._hasEffectiveEnabledStateObservers(),
            Vt = et ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = tt, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(tt), et) {
            const tt = this.isEnabled();
            tt !== Vt && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(tt)
          }
        }
        isDescendantOf(tt) {
          return !!this.parent && (this.parent === tt || this.parent.isDescendantOf(tt))
        }
        _getDescendants(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Vt = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let Ot = 0; Ot < this._children.length; Ot++) {
              const qt = this._children[Ot];
              Vt && !Vt(qt) || tt.push(qt), et || qt._getDescendants(tt, !1, Vt)
            }
        }
        getDescendants(tt, et) {
          const Vt = [];
          return this._getDescendants(Vt, tt, et), Vt
        }
        getChildMeshes(tt, et) {
          const Vt = [];
          return this._getDescendants(Vt, tt, (tt => (!et || et(tt)) && void 0 !== tt.cullingStrategy)), Vt
        }
        getChildren(tt) {
          let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(et, tt)
        }
        _setReady(tt) {
          tt !== this._nodeDataStorage._isReady && (tt ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(tt) {
          for (let et = 0; et < this.animations.length; et++) {
            const Vt = this.animations[et];
            if (Vt.name === tt) return Vt
          }
          return null
        }
        createAnimationRange(et, Vt, Ot) {
          if (!this._ranges[et]) {
            this._ranges[et] = tt._AnimationRangeFactory(et, Vt, Ot);
            for (let tt = 0, qt = this.animations.length; tt < qt; tt++) this.animations[tt] && this.animations[tt].createRange(et, Vt, Ot)
          }
        }
        deleteAnimationRange(tt) {
          let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let Vt = 0, Ot = this.animations.length; Vt < Ot; Vt++) this.animations[Vt] && this.animations[Vt].deleteRange(tt, et);
          this._ranges[tt] = null
        }
        getAnimationRange(tt) {
          return this._ranges[tt] || null
        }
        clone(et, Vt, Ot) {
          const qt = Ht.d.Clone((() => new tt(et, this.vI())), this);
          if (Vt && (qt.parent = Vt), !Ot) {
            const tt = this.getDescendants(!0);
            for (let Vt = 0; Vt < tt.length; Vt++) {
              const Ot = tt[Vt];
              Ot.clone(et + "." + Ot.name, qt)
            }
          }
          return qt
        }
        getAnimationRanges() {
          const tt = [];
          let et;
          for (et in this._ranges) tt.push(this._ranges[et]);
          return tt
        }
        beginAnimation(tt, et, Vt, Ot) {
          const qt = this.getAnimationRange(tt);
          return qt ? this._scene.beginAnimation(this, qt.from, qt.to, et, Vt, Ot) : null
        }
        serializeAnimationRanges() {
          const tt = [];
          for (const et in this._ranges) {
            const Vt = this._ranges[et];
            if (!Vt) continue;
            const Ot = {};
            Ot.name = et, Ot.from = Vt.from, Ot.to = Vt.to, tt.push(Ot)
          }
          return tt
        }
        computeWorldMatrix(tt) {
          return this._worldMatrix || (this._worldMatrix = qt.c.Identity()), this._worldMatrix
        }
        dispose(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !tt) {
            const Vt = this.getDescendants(!0);
            for (const Ot of Vt) Ot.dispose(tt, et)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.ZI.notifyObservers(this), this.ZI.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const Vt of this._behaviors) Vt.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(tt, et, Vt) {
          if (et.nw)
            for (let Ot = 0; Ot < et.nw.length; Ot++) {
              const Vt = et.nw[Ot];
              tt.createAnimationRange(Vt.name, Vt.from, Vt.to)
            }
        }
        getHierarchyBoundingVectors() {
          let tt, et, Vt = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Ot = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.vI().incrementRenderId(), this.computeWorldMatrix(!0);
          const Dt = this;
          if (Dt.fL && Dt.vJ) {
            const Vt = Dt.fL();
            tt = Vt.boundingBox.minimumWorld.clone(), et = Vt.boundingBox.maximumWorld.clone()
          } else tt = new qt.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), et = new qt.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (Vt) {
            const Vt = this.getDescendants(!1);
            for (const Dt of Vt) {
              const Vt = Dt;
              if (Vt.computeWorldMatrix(!0), Ot && !Ot(Vt)) continue;
              if (!Vt.fL || 0 === Vt.getTotalVertices()) continue;
              const mt = Vt.fL().boundingBox,
                dt = mt.minimumWorld,
                jt = mt.maximumWorld;
              qt.n.CheckExtends(dt, tt, et), qt.n.CheckExtends(jt, tt, et)
            }
          }
          return {
            min: tt,
            max: et
          }
        }
      }, (() => {
        const qt = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        et = [(0, Dt.P)()], Vt = [(0, Dt.P)()], Qt = [(0, Dt.P)()], lt = [(0, Dt.P)()], Et = [(0, Dt.P)()], (0, Ot.l)(null, null, et, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: tt => "name" in tt,
            get: tt => tt.name,
            set: (tt, et) => {
              tt.name = et
            }
          },
          metadata: qt
        }, ft, wt), (0, Ot.l)(null, null, Vt, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: tt => "id" in tt,
            get: tt => tt.id,
            set: (tt, et) => {
              tt.id = et
            }
          },
          metadata: qt
        }, yt, Nt), (0, Ot.l)(null, null, Qt, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: tt => "uniqueId" in tt,
            get: tt => tt.uniqueId,
            set: (tt, et) => {
              tt.uniqueId = et
            }
          },
          metadata: qt
        }, Mt, bt), (0, Ot.l)(null, null, lt, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: tt => "state" in tt,
            get: tt => tt.state,
            set: (tt, et) => {
              tt.state = et
            }
          },
          metadata: qt
        }, Jt, Ct), (0, Ot.l)(null, null, Et, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: tt => "metadata" in tt,
            get: tt => tt.metadata,
            set: (tt, et) => {
              tt.metadata = et
            }
          },
          metadata: qt
        }, ut, Kt), qt && Object.defineProperty(tt, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qt
        })
      })(), tt._AnimationRangeFactory = (tt, et, Vt) => {
        throw (0, jt.e)("AnimationRange")
      }, tt._NodeConstructors = {}, tt
    })()
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);