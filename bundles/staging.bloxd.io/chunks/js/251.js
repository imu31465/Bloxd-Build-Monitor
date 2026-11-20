export const id = 251;
export const ids = [251];
export const modules = {
  39700: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => wb
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(36727),
      Ub = hb(36893),
      Lb = hb(39670),
      Yb = hb(39598),
      Sb = hb(36762),
      ab = hb(39659),
      Hb = hb(39488);
    let wb = (() => {
      var bb, ub;
      let hb, wb, Zb, Xb, pb, ob, Ab, lb, Kb, Wb, Cb, db, rb, jb = Lb.b,
        nb = [],
        Db = [],
        xb = [],
        zb = [],
        gb = [],
        ib = [],
        vb = [],
        tb = [],
        Jb = [],
        eb = [],
        Nb = [],
        sb = [],
        Mb = [],
        mb = [],
        Ib = [],
        Pb = [],
        qb = [],
        Eb = [],
        yb = [],
        Vb = [],
        Fb = [];
      return bb = class extends jb {
        get range() {
          return this._range
        }
        set range(bb) {
          this._range = bb, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(bb) {
          this._intensityMode = bb, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(bb) {
          this._radius = bb, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, Bb.b)(this, ub, "f")
        }
        set renderPriority(bb) {
          (0, Bb.f)(this, ub, bb, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(bb) {
          this._shadowEnabled !== bb && (this._shadowEnabled = bb, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(bb) {
          this._includedOnlyMeshes = bb, this._hookArrayForIncludedOnly(bb)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(bb) {
          this._excludedMeshes = bb, this._hookArrayForExcluded(bb)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(bb) {
          this._excludeWithLayerMask = bb, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(bb) {
          this._includeOnlyWithLayerMask = bb, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(bb) {
          this._lightmapMode !== bb && (this._lightmapMode = bb, this._markMeshesAsLightDirty())
        }
        getViewMatrix(bb) {
          return null
        }
        getProjectionMatrix(bb, ub) {
          return null
        }
        constructor(hb, Ob, Gb) {
          super(hb, Ob, !1), this.diffuse = ((0, Bb.k)(this, nb), (0, Bb.k)(this, Db, new Ub.b(1, 1, 1))), this.specular = ((0, Bb.k)(this, xb), (0, Bb.k)(this, zb, new Ub.b(1, 1, 1))), this.falloffType = ((0, Bb.k)(this, gb), (0, Bb.k)(this, ib, bb.FALLOFF_DEFAULT)), this.intensity = ((0, Bb.k)(this, vb), (0, Bb.k)(this, tb, 1)), this._range = ((0, Bb.k)(this, Jb), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = bb.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, Bb.k)(this, eb, void 0), ub.set(this, ((0, Bb.k)(this, Nb), (0, Bb.k)(this, sb, 0))), this._shadowEnabled = ((0, Bb.k)(this, Mb), (0, Bb.k)(this, mb, !0)), this._includedOnlyMeshes = (0, Bb.k)(this, Ib), this._excludeWithLayerMask = (0, Bb.k)(this, Pb, 0), this._includeOnlyWithLayerMask = ((0, Bb.k)(this, qb), (0, Bb.k)(this, Eb, 0)), this._lightmapMode = ((0, Bb.k)(this, yb), (0, Bb.k)(this, Vb, 0)), this._shadowGenerators = ((0, Bb.k)(this, Fb), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, Gb || this.ZN().addLight(this), this._uniformBuffer = new Yb.c(this.ZN().UX(), void 0, void 0, hb), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], Gb || this._resyncMeshes()
        }
        transferTexturesToEffect(bb, ub) {
          return this
        }
        _bindLight(bb, ub, hb, Bb) {
          let Ob = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Gb = bb.toString();
          let Lb = !1;
          if (this._uniformBuffer.bindToEffect(hb, "Light" + Gb), this._renderId !== ub.getRenderId() || this._lastUseSpecular !== Bb || !this._uniformBuffer.useUbo) {
            this._renderId = ub.getRenderId(), this._lastUseSpecular = Bb;
            const bb = this.getScaledIntensity();
            this.transferToEffect(hb, Gb), this.diffuse.scaleToRef(bb, Ub.k.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", Ub.k.Color3[0], this.range, Gb), Bb && (this.specular.scaleToRef(bb, Ub.k.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", Ub.k.Color3[1], this.radius, Gb)), Lb = !0
          }
          if (this.transferTexturesToEffect(hb, Gb), ub.shadowsEnabled && this.shadowEnabled && Ob) {
            const bb = this.getShadowGenerator(ub.activeCamera) ?? this.getShadowGenerator();
            bb && (bb.bindShadowLight(Gb, hb), Lb = !0)
          }
          Lb ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(bb) {
          let ub = "Name: " + this.name;
          if (ub += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let hb = 0; hb < this.animations.length; hb++) ub += ", animation[0]: " + this.animations[hb].toString(bb);
          return ub
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.tC() || this._resyncMeshes()
        }
        Zx(bb) {
          super.Zx(bb), this._resyncMeshes()
        }
        getShadowGenerator() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(bb) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return Gb.q.Zero()
        }
        canAffectMesh(bb) {
          return !bb || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(bb)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(bb)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & bb.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & bb.layerMask)))
        }
        dispose(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const bb = this._shadowGenerators.values();
            for (let ub = bb.next(); !0 !== ub.done; ub = bb.next()) {
              ub.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.ZN().stopAnimation(this), this._parentContainer) {
            const bb = this._parentContainer.lights.indexOf(this);
            bb > -1 && this._parentContainer.lights.splice(bb, 1), this._parentContainer = null
          }
          for (const hb of this.ZN().meshes) hb._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.ZN().removeLight(this), super.dispose(bb, ub)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(ub) {
          let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Bb = bb.GetConstructorFromName(this.getTypeID(), ub, this.ZN());
          if (!Bb) return null;
          const Ob = Hb.c.Clone(Bb, this);
          return ub && (Ob.name = ub), hb && (Ob.parent = hb), Ob.Zx(this.isEnabled()), this.onClonedObservable.notifyObservers(Ob), Ob
        }
        serialize() {
          const bb = Hb.c.Serialize(this);
          if (bb.uniqueId = this.uniqueId, bb.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(bb), this.excludedMeshes.length > 0) {
            bb.excludedMeshesIds = [];
            for (const ub of this.excludedMeshes) bb.excludedMeshesIds.push(ub.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            bb.includedOnlyMeshesIds = [];
            for (const ub of this.includedOnlyMeshes) bb.includedOnlyMeshesIds.push(ub.id)
          }
          return Hb.c.AppendSerializedAnimations(this, bb), bb.tp = this.serializeAnimationRanges(), bb.isEnabled = this.isEnabled(), bb
        }
        static GetConstructorFromName(bb, ub, hb) {
          const Bb = Lb.b.Construct("Light_Type_" + bb, ub, hb);
          return Bb || null
        }
        static Parse(ub, hb) {
          let Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Ob = bb.GetConstructorFromName(ub.type, ub.name, hb);
          if (!Ob) return null;
          const Gb = Hb.c.Parse(Ob, ub, hb, Bb);
          if (ub.excludedMeshesIds && (Gb._excludedMeshesIds = ub.excludedMeshesIds), ub.includedOnlyMeshesIds && (Gb._includedOnlyMeshesIds = ub.includedOnlyMeshesIds), void 0 !== ub.parentId && (Gb._waitingParentId = ub.parentId), void 0 !== ub.parentInstanceIndex && (Gb._waitingParentInstanceIndex = ub.parentInstanceIndex), void 0 !== ub.falloffType && (Gb.falloffType = ub.falloffType), void 0 !== ub.lightmapMode && (Gb.lightmapMode = ub.lightmapMode), ub.animations) {
            for (let bb = 0; bb < ub.animations.length; bb++) {
              const hb = ub.animations[bb],
                Bb = (0, Sb.d)("BABYLON.Animation");
              Bb && Gb.animations.push(Bb.Parse(hb))
            }
            Lb.b.ParseAnimationRanges(Gb, ub, hb)
          }
          return ub.autoAnimate && hb.beginAnimation(Gb, ub.autoAnimateFrom, ub.autoAnimateTo, ub.autoAnimateLoop, ub.autoAnimateSpeed || 1), void 0 !== ub.isEnabled && Gb.Zx(ub.isEnabled), Gb._onParsed(ub, hb, Bb), Gb
        }
        _onParsed(bb, ub) {}
        _hookArrayForExcluded(bb) {
          var ub = this;
          const hb = bb.push;
          bb.push = function() {
            for (var Bb = arguments.length, Ob = new Array(Bb), Gb = 0; Gb < Bb; Gb++) Ob[Gb] = arguments[Gb];
            const Ub = hb.apply(bb, Ob);
            if (ub._clusteredContainer) return Ub;
            for (const bb of Ob) bb._resyncLightSource(ub);
            return Ub
          };
          const Bb = bb.splice;
          bb.splice = (ub, hb) => {
            const Ob = Bb.call(bb, ub, hb ?? bb.length);
            if (this._clusteredContainer) return Ob;
            for (const bb of Ob) bb._resyncLightSource(this);
            return Ob
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(bb) {
          var ub = this;
          const hb = bb.push;
          bb.push = function() {
            for (var Bb = arguments.length, Ob = new Array(Bb), Gb = 0; Gb < Bb; Gb++) Ob[Gb] = arguments[Gb];
            const Ub = hb.apply(bb, Ob);
            return ub._resyncMeshes(), Ub
          };
          const Bb = bb.splice;
          bb.splice = (ub, hb) => {
            const Ob = Bb.call(bb, ub, hb ?? bb.length);
            return this._resyncMeshes(), Ob
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const bb of this.ZN().meshes) bb._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const bb of this.ZN().meshes) - 1 !== bb.lightSources.indexOf(this) && bb._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.ZN().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let ub = 0;
          const hb = this.getTypeID();
          let Bb = this.intensityMode;
          switch (Bb === bb.INTENSITYMODE_AUTOMATIC && (Bb = hb === bb.LIGHTTYPEID_DIRECTIONALLIGHT ? bb.INTENSITYMODE_ILLUMINANCE : bb.INTENSITYMODE_LUMINOUSINTENSITY), hb) {
            case bb.LIGHTTYPEID_POINTLIGHT:
            case bb.LIGHTTYPEID_SPOTLIGHT:
              switch (Bb) {
                case bb.INTENSITYMODE_LUMINOUSPOWER:
                  ub = 1 / (4 * Math.PI);
                  break;
                case bb.INTENSITYMODE_LUMINOUSINTENSITY:
                  ub = 1;
                  break;
                case bb.INTENSITYMODE_LUMINANCE:
                  ub = this.radius * this.radius
              }
              break;
            case bb.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (Bb) {
                case bb.INTENSITYMODE_ILLUMINANCE:
                  ub = 1;
                  break;
                case bb.INTENSITYMODE_LUMINANCE: {
                  let bb = this.radius;
                  bb = Math.max(bb, .001);
                  ub = 2 * Math.PI * (1 - Math.cos(bb));
                  break
                }
              }
              break;
            case bb.LIGHTTYPEID_HEMISPHERICLIGHT:
            case bb.LIGHTTYPEID_RECT_AREALIGHT:
              ub = 1
          }
          return ub
        }
        _reorderLightsInScene() {
          const bb = this.ZN();
          0 != this._renderPriority && (bb.requireLightSorting = !0), this.ZN().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, ub = new WeakMap, (() => {
        const ub = "function" === typeof Symbol && Symbol.metadata ? Object.create(jb[Symbol.metadata] ?? null) : void 0;
        hb = [(0, Ob.p)()], wb = [(0, Ob.p)()], Zb = [(0, Ob.K)()], Xb = [(0, Ob.K)()], pb = [(0, Ob.K)()], ob = [(0, Ob.K)()], Ab = [(0, Ob.K)()], lb = [(0, Ob.K)()], Kb = [(0, Ob.i)("_reorderLightsInScene")], Wb = [(0, Ob.K)("shadowEnabled")], Cb = [(0, Ob.K)("excludeWithLayerMask")], db = [(0, Ob.K)("includeOnlyWithLayerMask")], rb = [(0, Ob.K)("lightmapMode")], (0, Bb.h)(bb, null, pb, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: bb => "range" in bb,
            get: bb => bb.range
          },
          metadata: ub
        }, null, nb), (0, Bb.h)(bb, null, ob, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensityMode" in bb,
            get: bb => bb.intensityMode
          },
          metadata: ub
        }, null, nb), (0, Bb.h)(bb, null, Ab, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: bb => "radius" in bb,
            get: bb => bb.radius
          },
          metadata: ub
        }, null, nb), (0, Bb.h)(bb, null, Kb, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: bb => "renderPriority" in bb,
            get: bb => bb.renderPriority,
            set: (bb, ub) => {
              bb.renderPriority = ub
            }
          },
          metadata: ub
        }, sb, Mb), (0, Bb.h)(null, null, hb, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: bb => "diffuse" in bb,
            get: bb => bb.diffuse,
            set: (bb, ub) => {
              bb.diffuse = ub
            }
          },
          metadata: ub
        }, Db, xb), (0, Bb.h)(null, null, wb, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: bb => "specular" in bb,
            get: bb => bb.specular,
            set: (bb, ub) => {
              bb.specular = ub
            }
          },
          metadata: ub
        }, zb, gb), (0, Bb.h)(null, null, Zb, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: bb => "falloffType" in bb,
            get: bb => bb.falloffType,
            set: (bb, ub) => {
              bb.falloffType = ub
            }
          },
          metadata: ub
        }, ib, vb), (0, Bb.h)(null, null, Xb, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, ub) => {
              bb.intensity = ub
            }
          },
          metadata: ub
        }, tb, Jb), (0, Bb.h)(null, null, lb, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: bb => "_renderPriority" in bb,
            get: bb => bb._renderPriority,
            set: (bb, ub) => {
              bb._renderPriority = ub
            }
          },
          metadata: ub
        }, eb, Nb), (0, Bb.h)(null, null, Wb, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "_shadowEnabled" in bb,
            get: bb => bb._shadowEnabled,
            set: (bb, ub) => {
              bb._shadowEnabled = ub
            }
          },
          metadata: ub
        }, mb, Ib), (0, Bb.h)(null, null, Cb, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: bb => "_excludeWithLayerMask" in bb,
            get: bb => bb._excludeWithLayerMask,
            set: (bb, ub) => {
              bb._excludeWithLayerMask = ub
            }
          },
          metadata: ub
        }, Pb, qb), (0, Bb.h)(null, null, db, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: bb => "_includeOnlyWithLayerMask" in bb,
            get: bb => bb._includeOnlyWithLayerMask,
            set: (bb, ub) => {
              bb._includeOnlyWithLayerMask = ub
            }
          },
          metadata: ub
        }, Eb, yb), (0, Bb.h)(null, null, rb, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_lightmapMode" in bb,
            get: bb => bb._lightmapMode,
            set: (bb, ub) => {
              bb._lightmapMode = ub
            }
          },
          metadata: ub
        }, Vb, Fb), ub && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ub
        })
      })(), bb.FALLOFF_DEFAULT = ab.d.FALLOFF_DEFAULT, bb.FALLOFF_PHYSICAL = ab.d.FALLOFF_PHYSICAL, bb.FALLOFF_GLTF = ab.d.FALLOFF_GLTF, bb.FALLOFF_STANDARD = ab.d.FALLOFF_STANDARD, bb.LIGHTMAP_DEFAULT = ab.d.LIGHTMAP_DEFAULT, bb.LIGHTMAP_SPECULAR = ab.d.LIGHTMAP_SPECULAR, bb.LIGHTMAP_SHADOWSONLY = ab.d.LIGHTMAP_SHADOWSONLY, bb.INTENSITYMODE_AUTOMATIC = ab.d.INTENSITYMODE_AUTOMATIC, bb.INTENSITYMODE_LUMINOUSPOWER = ab.d.INTENSITYMODE_LUMINOUSPOWER, bb.INTENSITYMODE_LUMINOUSINTENSITY = ab.d.INTENSITYMODE_LUMINOUSINTENSITY, bb.INTENSITYMODE_ILLUMINANCE = ab.d.INTENSITYMODE_ILLUMINANCE, bb.INTENSITYMODE_LUMINANCE = ab.d.INTENSITYMODE_LUMINANCE, bb.LIGHTTYPEID_POINTLIGHT = ab.d.LIGHTTYPEID_POINTLIGHT, bb.LIGHTTYPEID_DIRECTIONALLIGHT = ab.d.LIGHTTYPEID_DIRECTIONALLIGHT, bb.LIGHTTYPEID_SPOTLIGHT = ab.d.LIGHTTYPEID_SPOTLIGHT, bb.LIGHTTYPEID_HEMISPHERICLIGHT = ab.d.LIGHTTYPEID_HEMISPHERICLIGHT, bb.LIGHTTYPEID_RECT_AREALIGHT = ab.d.LIGHTTYPEID_RECT_AREALIGHT, bb
    })()
  },
  39670: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Hb
    });
    var Bb = hb(39463),
      Ob = hb(36727),
      Gb = hb(39467),
      Ub = hb(36753),
      Lb = hb(36748),
      Yb = hb(39333),
      Sb = hb(39488);
    class ab {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new Ub.e, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new Ub.e, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let Hb = (() => {
      var bb;
      let ub, hb, Hb, wb, Zb, Xb = [],
        pb = [],
        ob = [],
        Ab = [],
        lb = [],
        Kb = [],
        Wb = [],
        Cb = [],
        db = [],
        rb = [];
      return bb = class {
        static AddNodeConstructor(bb, ub) {
          this._NodeConstructors[bb] = ub
        }
        static Construct(bb, ub, hb, Bb) {
          const Ob = this._NodeConstructors[bb];
          return Ob ? Ob(ub, hb, Bb) : null
        }
        set accessibilityTag(bb) {
          this._accessibilityTag = bb, this.onAccessibilityTagChangedObservable.notifyObservers(bb)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(bb) {
          this._nodeDataStorage._doNotSerialize = bb
        }
        tC() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(bb) {
          if (this._parentNode === bb) return;
          const ub = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const ub = this._parentNode._children.indexOf(this); - 1 !== ub && this._parentNode._children.splice(ub, 1), bb || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = bb, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), ub || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(bb) {
          this._nodeDataStorage._inheritVisibility = bb
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(bb) {
          this._nodeDataStorage._isVisible = bb
        }
        _serializeAsParent(bb) {
          bb.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const bb = this._scene.rootNodes,
              ub = bb.length - 1;
            bb[this._nodeDataStorage._sceneRootNodesIndex] = bb[ub], bb[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(bb) {
          this._animationPropertiesOverride = bb
        }
        getClassName() {
          return "Node"
        }
        set onDispose(bb) {
          this._onDisposeObserver && this.XN.remove(this._onDisposeObserver), this._onDisposeObserver = this.XN.add(bb)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var bb;
          return (bb = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (bb._onEffectiveEnabledStateChangedObservable = new Ub.e)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new ab, this.name = (0, Bb.k)(this, Xb, void 0), this.id = ((0, Bb.k)(this, pb), (0, Bb.k)(this, ob, void 0)), this.uniqueId = ((0, Bb.k)(this, Ab), (0, Bb.k)(this, lb, void 0)), this.state = ((0, Bb.k)(this, Kb), (0, Bb.k)(this, Wb, "")), this.metadata = ((0, Bb.k)(this, Cb), (0, Bb.k)(this, db, null)), this._internalMetadata = (0, Bb.k)(this, rb), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new Ub.e, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = Ob.d.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.XN = new Ub.e, this._onDisposeObserver = null, this._behaviors = new Array, this.name = bb, this.id = bb, this._scene = ub || Lb.b.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), hb && this._addToSceneRootNodes()
        }
        ZN() {
          return this._scene
        }
        UX() {
          return this._scene.UX()
        }
        addBehavior(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(bb) || (bb.init(), this._scene.isLoading && !ub ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(bb) && bb.attach(this)
          })) : bb.attach(this), this._behaviors.push(bb)), this
        }
        removeBehavior(bb) {
          const ub = this._behaviors.indexOf(bb);
          return -1 === ub || (this._behaviors.splice(ub, 1), bb.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(bb) {
          for (const ub of this._behaviors)
            if (ub.name === bb) return ub;
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
        updateCache(bb) {
          !bb && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(bb) {
          return this.parent ? this.parent._getActionManagerForTrigger(bb, !1) : null
        }
        _updateCache(bb) {}
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
        yub(bb) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const bb = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!bb && bb.hasObservers()
        }
        _syncParentEnabledState() {
          const bb = this._hasEffectiveEnabledStateObservers(),
            ub = bb ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const hb of this._children) hb._syncParentEnabledState();
          if (bb) {
            const bb = this.isEnabled();
            bb !== ub && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(bb)
          }
        }
        Zx(bb) {
          if (this._nodeDataStorage._isEnabled === bb) return;
          const ub = this._hasEffectiveEnabledStateObservers(),
            hb = ub ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = bb, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(bb), ub) {
            const bb = this.isEnabled();
            bb !== hb && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(bb)
          }
        }
        isDescendantOf(bb) {
          return !!this.parent && (this.parent === bb || this.parent.isDescendantOf(bb))
        }
        _getDescendants(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            hb = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let Bb = 0; Bb < this._children.length; Bb++) {
              const Ob = this._children[Bb];
              hb && !hb(Ob) || bb.push(Ob), ub || Ob._getDescendants(bb, !1, hb)
            }
        }
        getDescendants(bb, ub) {
          const hb = [];
          return this._getDescendants(hb, bb, ub), hb
        }
        getChildMeshes(bb, ub) {
          const hb = [];
          return this._getDescendants(hb, bb, (bb => (!ub || ub(bb)) && void 0 !== bb.cullingStrategy)), hb
        }
        getChildren(bb) {
          let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(ub, bb)
        }
        _setReady(bb) {
          bb !== this._nodeDataStorage._isReady && (bb ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(bb) {
          for (let ub = 0; ub < this.animations.length; ub++) {
            const hb = this.animations[ub];
            if (hb.name === bb) return hb
          }
          return null
        }
        createAnimationRange(ub, hb, Bb) {
          if (!this._ranges[ub]) {
            this._ranges[ub] = bb._AnimationRangeFactory(ub, hb, Bb);
            for (let bb = 0, Ob = this.animations.length; bb < Ob; bb++) this.animations[bb] && this.animations[bb].createRange(ub, hb, Bb)
          }
        }
        deleteAnimationRange(bb) {
          let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let hb = 0, Bb = this.animations.length; hb < Bb; hb++) this.animations[hb] && this.animations[hb].deleteRange(bb, ub);
          this._ranges[bb] = null
        }
        getAnimationRange(bb) {
          return this._ranges[bb] || null
        }
        clone(ub, hb, Bb) {
          const Ob = Sb.c.Clone((() => new bb(ub, this.ZN())), this);
          if (hb && (Ob.parent = hb), !Bb) {
            const bb = this.getDescendants(!0);
            for (let hb = 0; hb < bb.length; hb++) {
              const Bb = bb[hb];
              Bb.clone(ub + "." + Bb.name, Ob)
            }
          }
          return Ob
        }
        getAnimationRanges() {
          const bb = [];
          let ub;
          for (ub in this._ranges) bb.push(this._ranges[ub]);
          return bb
        }
        beginAnimation(bb, ub, hb, Bb) {
          const Ob = this.getAnimationRange(bb);
          return Ob ? this._scene.beginAnimation(this, Ob.from, Ob.to, ub, hb, Bb) : null
        }
        serializeAnimationRanges() {
          const bb = [];
          for (const ub in this._ranges) {
            const hb = this._ranges[ub];
            if (!hb) continue;
            const Bb = {};
            Bb.name = ub, Bb.from = hb.from, Bb.to = hb.to, bb.push(Bb)
          }
          return bb
        }
        computeWorldMatrix(bb) {
          return this._worldMatrix || (this._worldMatrix = Ob.d.Identity()), this._worldMatrix
        }
        dispose(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !bb) {
            const hb = this.getDescendants(!0);
            for (const Bb of hb) Bb.dispose(bb, ub)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.XN.notifyObservers(this), this.XN.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const hb of this._behaviors) hb.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(bb, ub, hb) {
          if (ub.tp)
            for (let Bb = 0; Bb < ub.tp.length; Bb++) {
              const hb = ub.tp[Bb];
              bb.createAnimationRange(hb.name, hb.from, hb.to)
            }
        }
        getHierarchyBoundingVectors() {
          let bb, ub, hb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.ZN().incrementRenderId(), this.computeWorldMatrix(!0);
          const Gb = this;
          if (Gb.XM && Gb.FW) {
            const hb = Gb.XM();
            bb = hb.boundingBox.minimumWorld.clone(), ub = hb.boundingBox.maximumWorld.clone()
          } else bb = new Ob.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), ub = new Ob.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (hb) {
            const hb = this.getDescendants(!1);
            for (const Gb of hb) {
              const hb = Gb;
              if (hb.computeWorldMatrix(!0), Bb && !Bb(hb)) continue;
              if (!hb.XM || 0 === hb.getTotalVertices()) continue;
              const Ub = hb.XM().boundingBox,
                Lb = Ub.minimumWorld,
                Yb = Ub.maximumWorld;
              Ob.q.CheckExtends(Lb, bb, ub), Ob.q.CheckExtends(Yb, bb, ub)
            }
          }
          return {
            min: bb,
            max: ub
          }
        }
      }, (() => {
        const Ob = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ub = [(0, Gb.K)()], hb = [(0, Gb.K)()], Hb = [(0, Gb.K)()], wb = [(0, Gb.K)()], Zb = [(0, Gb.K)()], (0, Bb.h)(null, null, ub, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: bb => "name" in bb,
            get: bb => bb.name,
            set: (bb, ub) => {
              bb.name = ub
            }
          },
          metadata: Ob
        }, Xb, pb), (0, Bb.h)(null, null, hb, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: bb => "id" in bb,
            get: bb => bb.id,
            set: (bb, ub) => {
              bb.id = ub
            }
          },
          metadata: Ob
        }, ob, Ab), (0, Bb.h)(null, null, Hb, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: bb => "uniqueId" in bb,
            get: bb => bb.uniqueId,
            set: (bb, ub) => {
              bb.uniqueId = ub
            }
          },
          metadata: Ob
        }, lb, Kb), (0, Bb.h)(null, null, wb, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: bb => "state" in bb,
            get: bb => bb.state,
            set: (bb, ub) => {
              bb.state = ub
            }
          },
          metadata: Ob
        }, Wb, Cb), (0, Bb.h)(null, null, Zb, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: bb => "metadata" in bb,
            get: bb => bb.metadata,
            set: (bb, ub) => {
              bb.metadata = ub
            }
          },
          metadata: Ob
        }, db, rb), Ob && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ob
        })
      })(), bb._AnimationRangeFactory = (bb, ub, hb) => {
        throw (0, Yb.m)("AnimationRange")
      }, bb._NodeConstructors = {}, bb
    })()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);