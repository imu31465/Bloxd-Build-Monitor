export const id = 249;
export const ids = [249];
export const modules = {
  39359: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Pb
    });
    var Ab = Ub(39104),
      Mb = Ub(39110),
      Tb = Ub(36401),
      Eb = Ub(36593),
      Yb = Ub(39314),
      Bb = Ub(39231),
      eb = Ub(36447),
      vb = Ub(39294),
      Lb = Ub(39124);
    let Pb = (() => {
      var bb, ab;
      let Ub, Pb, Xb, jb, Rb, kb, yb, Zb, Db, zb, xb, ib, fb, mb = Yb.c,
        pb = [],
        Nb = [],
        Wb = [],
        Hb = [],
        Ib = [],
        db = [],
        Fb = [],
        hb = [],
        Gb = [],
        Qb = [],
        qb = [],
        ub = [],
        rb = [],
        Kb = [],
        ob = [],
        lb = [],
        tb = [],
        wb = [],
        sb = [],
        gb = [],
        Cb = [];
      return bb = class extends mb {
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
          return (0, Ab.c)(this, ab, "f")
        }
        set renderPriority(bb) {
          (0, Ab.e)(this, ab, bb, "f")
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
        getProjectionMatrix(bb, ab) {
          return null
        }
        constructor(Ub, Mb, Tb) {
          super(Ub, Mb, !1), this.diffuse = ((0, Ab.k)(this, pb), (0, Ab.k)(this, Nb, new Eb.c(1, 1, 1))), this.specular = ((0, Ab.k)(this, Wb), (0, Ab.k)(this, Hb, new Eb.c(1, 1, 1))), this.falloffType = ((0, Ab.k)(this, Ib), (0, Ab.k)(this, db, bb.FALLOFF_DEFAULT)), this.intensity = ((0, Ab.k)(this, Fb), (0, Ab.k)(this, hb, 1)), this._range = ((0, Ab.k)(this, Gb), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = bb.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, Ab.k)(this, Qb, void 0), ab.set(this, ((0, Ab.k)(this, qb), (0, Ab.k)(this, ub, 0))), this._shadowEnabled = ((0, Ab.k)(this, rb), (0, Ab.k)(this, Kb, !0)), this._includedOnlyMeshes = (0, Ab.k)(this, ob), this._excludeWithLayerMask = (0, Ab.k)(this, lb, 0), this._includeOnlyWithLayerMask = ((0, Ab.k)(this, tb), (0, Ab.k)(this, wb, 0)), this._lightmapMode = ((0, Ab.k)(this, sb), (0, Ab.k)(this, gb, 0)), this._shadowGenerators = ((0, Ab.k)(this, Cb), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, Tb || this.oN().addLight(this), this._uniformBuffer = new Bb.b(this.oN().vj(), void 0, void 0, Ub), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], Tb || this._resyncMeshes()
        }
        transferTexturesToEffect(bb, ab) {
          return this
        }
        _bindLight(bb, ab, Ub, Ab) {
          let Mb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Tb = bb.toString();
          let Yb = !1;
          if (this._uniformBuffer.bindToEffect(Ub, "Light" + Tb), this._renderId !== ab.getRenderId() || this._lastUseSpecular !== Ab || !this._uniformBuffer.useUbo) {
            this._renderId = ab.getRenderId(), this._lastUseSpecular = Ab;
            const bb = this.getScaledIntensity();
            this.transferToEffect(Ub, Tb), this.diffuse.scaleToRef(bb, Eb.m.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", Eb.m.Color3[0], this.range, Tb), Ab && (this.specular.scaleToRef(bb, Eb.m.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", Eb.m.Color3[1], this.radius, Tb)), Yb = !0
          }
          if (this.transferTexturesToEffect(Ub, Tb), ab.shadowsEnabled && this.shadowEnabled && Mb) {
            const bb = this.getShadowGenerator(ab.activeCamera) ?? this.getShadowGenerator();
            bb && (bb.bindShadowLight(Tb, Ub), Yb = !0)
          }
          Yb ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(bb) {
          let ab = "Name: " + this.name;
          if (ab += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let Ub = 0; Ub < this.animations.length; Ub++) ab += ", animation[0]: " + this.animations[Ub].toString(bb);
          return ab
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.Jab() || this._resyncMeshes()
        }
        Yz(bb) {
          super.Yz(bb), this._resyncMeshes()
        }
        getShadowGenerator() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(bb) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return Tb.m.Zero()
        }
        canAffectMesh(bb) {
          return !bb || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(bb)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(bb)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & bb.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & bb.layerMask)))
        }
        dispose(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const bb = this._shadowGenerators.values();
            for (let ab = bb.next(); !0 !== ab.done; ab = bb.next()) {
              ab.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.oN().stopAnimation(this), this._parentContainer) {
            const bb = this._parentContainer.lights.indexOf(this);
            bb > -1 && this._parentContainer.lights.splice(bb, 1), this._parentContainer = null
          }
          for (const Ub of this.oN().meshes) Ub._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.oN().removeLight(this), super.dispose(bb, ab)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(ab) {
          let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Ab = bb.GetConstructorFromName(this.getTypeID(), ab, this.oN());
          if (!Ab) return null;
          const Mb = Lb.b.Clone(Ab, this);
          return ab && (Mb.name = ab), Ub && (Mb.parent = Ub), Mb.Yz(this.isEnabled()), this.onClonedObservable.notifyObservers(Mb), Mb
        }
        serialize() {
          const bb = Lb.b.Serialize(this);
          if (bb.uniqueId = this.uniqueId, bb.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(bb), this.excludedMeshes.length > 0) {
            bb.excludedMeshesIds = [];
            for (const ab of this.excludedMeshes) bb.excludedMeshesIds.push(ab.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            bb.includedOnlyMeshesIds = [];
            for (const ab of this.includedOnlyMeshes) bb.includedOnlyMeshesIds.push(ab.id)
          }
          return Lb.b.AppendSerializedAnimations(this, bb), bb.cj = this.serializeAnimationRanges(), bb.isEnabled = this.isEnabled(), bb
        }
        static GetConstructorFromName(bb, ab, Ub) {
          const Ab = Yb.c.Construct("Light_Type_" + bb, ab, Ub);
          return Ab || null
        }
        static Parse(ab, Ub) {
          let Ab = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Mb = bb.GetConstructorFromName(ab.type, ab.name, Ub);
          if (!Mb) return null;
          const Tb = Lb.b.Parse(Mb, ab, Ub, Ab);
          if (ab.excludedMeshesIds && (Tb._excludedMeshesIds = ab.excludedMeshesIds), ab.includedOnlyMeshesIds && (Tb._includedOnlyMeshesIds = ab.includedOnlyMeshesIds), void 0 !== ab.parentId && (Tb._waitingParentId = ab.parentId), void 0 !== ab.parentInstanceIndex && (Tb._waitingParentInstanceIndex = ab.parentInstanceIndex), void 0 !== ab.falloffType && (Tb.falloffType = ab.falloffType), void 0 !== ab.lightmapMode && (Tb.lightmapMode = ab.lightmapMode), ab.animations) {
            for (let bb = 0; bb < ab.animations.length; bb++) {
              const Ub = ab.animations[bb],
                Ab = (0, eb.b)("BABYLON.Animation");
              Ab && Tb.animations.push(Ab.Parse(Ub))
            }
            Yb.c.ParseAnimationRanges(Tb, ab, Ub)
          }
          return ab.autoAnimate && Ub.beginAnimation(Tb, ab.autoAnimateFrom, ab.autoAnimateTo, ab.autoAnimateLoop, ab.autoAnimateSpeed || 1), void 0 !== ab.isEnabled && Tb.Yz(ab.isEnabled), Tb._onParsed(ab, Ub, Ab), Tb
        }
        _onParsed(bb, ab) {}
        _hookArrayForExcluded(bb) {
          var ab = this;
          const Ub = bb.push;
          bb.push = function() {
            for (var Ab = arguments.length, Mb = new Array(Ab), Tb = 0; Tb < Ab; Tb++) Mb[Tb] = arguments[Tb];
            const Eb = Ub.apply(bb, Mb);
            if (ab._clusteredContainer) return Eb;
            for (const bb of Mb) bb._resyncLightSource(ab);
            return Eb
          };
          const Ab = bb.splice;
          bb.splice = (ab, Ub) => {
            const Mb = Ab.call(bb, ab, Ub ?? bb.length);
            if (this._clusteredContainer) return Mb;
            for (const bb of Mb) bb._resyncLightSource(this);
            return Mb
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(bb) {
          var ab = this;
          const Ub = bb.push;
          bb.push = function() {
            for (var Ab = arguments.length, Mb = new Array(Ab), Tb = 0; Tb < Ab; Tb++) Mb[Tb] = arguments[Tb];
            const Eb = Ub.apply(bb, Mb);
            return ab._resyncMeshes(), Eb
          };
          const Ab = bb.splice;
          bb.splice = (ab, Ub) => {
            const Mb = Ab.call(bb, ab, Ub ?? bb.length);
            return this._resyncMeshes(), Mb
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const bb of this.oN().meshes) bb._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const bb of this.oN().meshes) - 1 !== bb.lightSources.indexOf(this) && bb._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.oN().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let ab = 0;
          const Ub = this.getTypeID();
          let Ab = this.intensityMode;
          switch (Ab === bb.INTENSITYMODE_AUTOMATIC && (Ab = Ub === bb.LIGHTTYPEID_DIRECTIONALLIGHT ? bb.INTENSITYMODE_ILLUMINANCE : bb.INTENSITYMODE_LUMINOUSINTENSITY), Ub) {
            case bb.LIGHTTYPEID_POINTLIGHT:
            case bb.LIGHTTYPEID_SPOTLIGHT:
              switch (Ab) {
                case bb.INTENSITYMODE_LUMINOUSPOWER:
                  ab = 1 / (4 * Math.PI);
                  break;
                case bb.INTENSITYMODE_LUMINOUSINTENSITY:
                  ab = 1;
                  break;
                case bb.INTENSITYMODE_LUMINANCE:
                  ab = this.radius * this.radius
              }
              break;
            case bb.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (Ab) {
                case bb.INTENSITYMODE_ILLUMINANCE:
                  ab = 1;
                  break;
                case bb.INTENSITYMODE_LUMINANCE: {
                  let bb = this.radius;
                  bb = Math.max(bb, .001);
                  ab = 2 * Math.PI * (1 - Math.cos(bb));
                  break
                }
              }
              break;
            case bb.LIGHTTYPEID_HEMISPHERICLIGHT:
            case bb.LIGHTTYPEID_RECT_AREALIGHT:
              ab = 1
          }
          return ab
        }
        _reorderLightsInScene() {
          const bb = this.oN();
          0 != this._renderPriority && (bb.requireLightSorting = !0), this.oN().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, ab = new WeakMap, (() => {
        const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(mb[Symbol.metadata] ?? null) : void 0;
        Ub = [(0, Mb.k)()], Pb = [(0, Mb.k)()], Xb = [(0, Mb.K)()], jb = [(0, Mb.K)()], Rb = [(0, Mb.K)()], kb = [(0, Mb.K)()], yb = [(0, Mb.K)()], Zb = [(0, Mb.K)()], Db = [(0, Mb.e)("_reorderLightsInScene")], zb = [(0, Mb.K)("shadowEnabled")], xb = [(0, Mb.K)("excludeWithLayerMask")], ib = [(0, Mb.K)("includeOnlyWithLayerMask")], fb = [(0, Mb.K)("lightmapMode")], (0, Ab.h)(bb, null, Rb, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: bb => "range" in bb,
            get: bb => bb.range
          },
          metadata: ab
        }, null, pb), (0, Ab.h)(bb, null, kb, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensityMode" in bb,
            get: bb => bb.intensityMode
          },
          metadata: ab
        }, null, pb), (0, Ab.h)(bb, null, yb, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: bb => "radius" in bb,
            get: bb => bb.radius
          },
          metadata: ab
        }, null, pb), (0, Ab.h)(bb, null, Db, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: bb => "renderPriority" in bb,
            get: bb => bb.renderPriority,
            set: (bb, ab) => {
              bb.renderPriority = ab
            }
          },
          metadata: ab
        }, ub, rb), (0, Ab.h)(null, null, Ub, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: bb => "diffuse" in bb,
            get: bb => bb.diffuse,
            set: (bb, ab) => {
              bb.diffuse = ab
            }
          },
          metadata: ab
        }, Nb, Wb), (0, Ab.h)(null, null, Pb, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: bb => "specular" in bb,
            get: bb => bb.specular,
            set: (bb, ab) => {
              bb.specular = ab
            }
          },
          metadata: ab
        }, Hb, Ib), (0, Ab.h)(null, null, Xb, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: bb => "falloffType" in bb,
            get: bb => bb.falloffType,
            set: (bb, ab) => {
              bb.falloffType = ab
            }
          },
          metadata: ab
        }, db, Fb), (0, Ab.h)(null, null, jb, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, ab) => {
              bb.intensity = ab
            }
          },
          metadata: ab
        }, hb, Gb), (0, Ab.h)(null, null, Zb, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: bb => "_renderPriority" in bb,
            get: bb => bb._renderPriority,
            set: (bb, ab) => {
              bb._renderPriority = ab
            }
          },
          metadata: ab
        }, Qb, qb), (0, Ab.h)(null, null, zb, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "_shadowEnabled" in bb,
            get: bb => bb._shadowEnabled,
            set: (bb, ab) => {
              bb._shadowEnabled = ab
            }
          },
          metadata: ab
        }, Kb, ob), (0, Ab.h)(null, null, xb, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: bb => "_excludeWithLayerMask" in bb,
            get: bb => bb._excludeWithLayerMask,
            set: (bb, ab) => {
              bb._excludeWithLayerMask = ab
            }
          },
          metadata: ab
        }, lb, tb), (0, Ab.h)(null, null, ib, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: bb => "_includeOnlyWithLayerMask" in bb,
            get: bb => bb._includeOnlyWithLayerMask,
            set: (bb, ab) => {
              bb._includeOnlyWithLayerMask = ab
            }
          },
          metadata: ab
        }, wb, sb), (0, Ab.h)(null, null, fb, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_lightmapMode" in bb,
            get: bb => bb._lightmapMode,
            set: (bb, ab) => {
              bb._lightmapMode = ab
            }
          },
          metadata: ab
        }, gb, Cb), ab && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ab
        })
      })(), bb.FALLOFF_DEFAULT = vb.d.FALLOFF_DEFAULT, bb.FALLOFF_PHYSICAL = vb.d.FALLOFF_PHYSICAL, bb.FALLOFF_GLTF = vb.d.FALLOFF_GLTF, bb.FALLOFF_STANDARD = vb.d.FALLOFF_STANDARD, bb.LIGHTMAP_DEFAULT = vb.d.LIGHTMAP_DEFAULT, bb.LIGHTMAP_SPECULAR = vb.d.LIGHTMAP_SPECULAR, bb.LIGHTMAP_SHADOWSONLY = vb.d.LIGHTMAP_SHADOWSONLY, bb.INTENSITYMODE_AUTOMATIC = vb.d.INTENSITYMODE_AUTOMATIC, bb.INTENSITYMODE_LUMINOUSPOWER = vb.d.INTENSITYMODE_LUMINOUSPOWER, bb.INTENSITYMODE_LUMINOUSINTENSITY = vb.d.INTENSITYMODE_LUMINOUSINTENSITY, bb.INTENSITYMODE_ILLUMINANCE = vb.d.INTENSITYMODE_ILLUMINANCE, bb.INTENSITYMODE_LUMINANCE = vb.d.INTENSITYMODE_LUMINANCE, bb.LIGHTTYPEID_POINTLIGHT = vb.d.LIGHTTYPEID_POINTLIGHT, bb.LIGHTTYPEID_DIRECTIONALLIGHT = vb.d.LIGHTTYPEID_DIRECTIONALLIGHT, bb.LIGHTTYPEID_SPOTLIGHT = vb.d.LIGHTTYPEID_SPOTLIGHT, bb.LIGHTTYPEID_HEMISPHERICLIGHT = vb.d.LIGHTTYPEID_HEMISPHERICLIGHT, bb.LIGHTTYPEID_RECT_AREALIGHT = vb.d.LIGHTTYPEID_RECT_AREALIGHT, bb
    })()
  },
  39314: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Lb
    });
    var Ab = Ub(39104),
      Mb = Ub(36401),
      Tb = Ub(39110),
      Eb = Ub(36431),
      Yb = Ub(36425),
      Bb = Ub(38982),
      eb = Ub(39124);
    class vb {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new Eb.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new Eb.b, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let Lb = (() => {
      var bb;
      let ab, Ub, Lb, Pb, Xb, jb = [],
        Rb = [],
        kb = [],
        yb = [],
        Zb = [],
        Db = [],
        zb = [],
        xb = [],
        ib = [],
        fb = [];
      return bb = class {
        static AddNodeConstructor(bb, ab) {
          this._NodeConstructors[bb] = ab
        }
        static Construct(bb, ab, Ub, Ab) {
          const Mb = this._NodeConstructors[bb];
          return Mb ? Mb(ab, Ub, Ab) : null
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
        Jab() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(bb) {
          if (this._parentNode === bb) return;
          const ab = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const ab = this._parentNode._children.indexOf(this); - 1 !== ab && this._parentNode._children.splice(ab, 1), bb || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = bb, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), ab || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
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
              ab = bb.length - 1;
            bb[this._nodeDataStorage._sceneRootNodesIndex] = bb[ab], bb[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
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
          this._onDisposeObserver && this.UW.remove(this._onDisposeObserver), this._onDisposeObserver = this.UW.add(bb)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var bb;
          return (bb = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (bb._onEffectiveEnabledStateChangedObservable = new Eb.b)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new vb, this.name = (0, Ab.k)(this, jb, void 0), this.id = ((0, Ab.k)(this, Rb), (0, Ab.k)(this, kb, void 0)), this.uniqueId = ((0, Ab.k)(this, yb), (0, Ab.k)(this, Zb, void 0)), this.state = ((0, Ab.k)(this, Db), (0, Ab.k)(this, zb, "")), this.metadata = ((0, Ab.k)(this, xb), (0, Ab.k)(this, ib, null)), this._internalMetadata = (0, Ab.k)(this, fb), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new Eb.b, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = Mb.b.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.UW = new Eb.b, this._onDisposeObserver = null, this._behaviors = new Array, this.name = bb, this.id = bb, this._scene = ab || Yb.d.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), Ub && this._addToSceneRootNodes()
        }
        oN() {
          return this._scene
        }
        vj() {
          return this._scene.vj()
        }
        addBehavior(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(bb) || (bb.init(), this._scene.isLoading && !ab ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(bb) && bb.attach(this)
          })) : bb.attach(this), this._behaviors.push(bb)), this
        }
        removeBehavior(bb) {
          const ab = this._behaviors.indexOf(bb);
          return -1 === ab || (this._behaviors.splice(ab, 1), bb.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(bb) {
          for (const ab of this._behaviors)
            if (ab.name === bb) return ab;
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
        Aab(bb) {
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
            ab = bb ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const Ub of this._children) Ub._syncParentEnabledState();
          if (bb) {
            const bb = this.isEnabled();
            bb !== ab && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(bb)
          }
        }
        Yz(bb) {
          if (this._nodeDataStorage._isEnabled === bb) return;
          const ab = this._hasEffectiveEnabledStateObservers(),
            Ub = ab ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = bb, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(bb), ab) {
            const bb = this.isEnabled();
            bb !== Ub && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(bb)
          }
        }
        isDescendantOf(bb) {
          return !!this.parent && (this.parent === bb || this.parent.isDescendantOf(bb))
        }
        _getDescendants(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Ub = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let Ab = 0; Ab < this._children.length; Ab++) {
              const Mb = this._children[Ab];
              Ub && !Ub(Mb) || bb.push(Mb), ab || Mb._getDescendants(bb, !1, Ub)
            }
        }
        getDescendants(bb, ab) {
          const Ub = [];
          return this._getDescendants(Ub, bb, ab), Ub
        }
        getChildMeshes(bb, ab) {
          const Ub = [];
          return this._getDescendants(Ub, bb, (bb => (!ab || ab(bb)) && void 0 !== bb.cullingStrategy)), Ub
        }
        getChildren(bb) {
          let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(ab, bb)
        }
        _setReady(bb) {
          bb !== this._nodeDataStorage._isReady && (bb ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(bb) {
          for (let ab = 0; ab < this.animations.length; ab++) {
            const Ub = this.animations[ab];
            if (Ub.name === bb) return Ub
          }
          return null
        }
        createAnimationRange(ab, Ub, Ab) {
          if (!this._ranges[ab]) {
            this._ranges[ab] = bb._AnimationRangeFactory(ab, Ub, Ab);
            for (let bb = 0, Mb = this.animations.length; bb < Mb; bb++) this.animations[bb] && this.animations[bb].createRange(ab, Ub, Ab)
          }
        }
        deleteAnimationRange(bb) {
          let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let Ub = 0, Ab = this.animations.length; Ub < Ab; Ub++) this.animations[Ub] && this.animations[Ub].deleteRange(bb, ab);
          this._ranges[bb] = null
        }
        getAnimationRange(bb) {
          return this._ranges[bb] || null
        }
        clone(ab, Ub, Ab) {
          const Mb = eb.b.Clone((() => new bb(ab, this.oN())), this);
          if (Ub && (Mb.parent = Ub), !Ab) {
            const bb = this.getDescendants(!0);
            for (let Ub = 0; Ub < bb.length; Ub++) {
              const Ab = bb[Ub];
              Ab.clone(ab + "." + Ab.name, Mb)
            }
          }
          return Mb
        }
        getAnimationRanges() {
          const bb = [];
          let ab;
          for (ab in this._ranges) bb.push(this._ranges[ab]);
          return bb
        }
        beginAnimation(bb, ab, Ub, Ab) {
          const Mb = this.getAnimationRange(bb);
          return Mb ? this._scene.beginAnimation(this, Mb.from, Mb.to, ab, Ub, Ab) : null
        }
        serializeAnimationRanges() {
          const bb = [];
          for (const ab in this._ranges) {
            const Ub = this._ranges[ab];
            if (!Ub) continue;
            const Ab = {};
            Ab.name = ab, Ab.from = Ub.from, Ab.to = Ub.to, bb.push(Ab)
          }
          return bb
        }
        computeWorldMatrix(bb) {
          return this._worldMatrix || (this._worldMatrix = Mb.b.Identity()), this._worldMatrix
        }
        dispose(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !bb) {
            const Ub = this.getDescendants(!0);
            for (const Ab of Ub) Ab.dispose(bb, ab)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.UW.notifyObservers(this), this.UW.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const Ub of this._behaviors) Ub.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(bb, ab, Ub) {
          if (ab.cj)
            for (let Ab = 0; Ab < ab.cj.length; Ab++) {
              const Ub = ab.cj[Ab];
              bb.createAnimationRange(Ub.name, Ub.from, Ub.to)
            }
        }
        getHierarchyBoundingVectors() {
          let bb, ab, Ub = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.oN().incrementRenderId(), this.computeWorldMatrix(!0);
          const Tb = this;
          if (Tb.DH && Tb.mD) {
            const Ub = Tb.DH();
            bb = Ub.boundingBox.minimumWorld.clone(), ab = Ub.boundingBox.maximumWorld.clone()
          } else bb = new Mb.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), ab = new Mb.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (Ub) {
            const Ub = this.getDescendants(!1);
            for (const Tb of Ub) {
              const Ub = Tb;
              if (Ub.computeWorldMatrix(!0), Ab && !Ab(Ub)) continue;
              if (!Ub.DH || 0 === Ub.getTotalVertices()) continue;
              const Eb = Ub.DH().boundingBox,
                Yb = Eb.minimumWorld,
                Bb = Eb.maximumWorld;
              Mb.m.CheckExtends(Yb, bb, ab), Mb.m.CheckExtends(Bb, bb, ab)
            }
          }
          return {
            min: bb,
            max: ab
          }
        }
      }, (() => {
        const Mb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ab = [(0, Tb.K)()], Ub = [(0, Tb.K)()], Lb = [(0, Tb.K)()], Pb = [(0, Tb.K)()], Xb = [(0, Tb.K)()], (0, Ab.h)(null, null, ab, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: bb => "name" in bb,
            get: bb => bb.name,
            set: (bb, ab) => {
              bb.name = ab
            }
          },
          metadata: Mb
        }, jb, Rb), (0, Ab.h)(null, null, Ub, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: bb => "id" in bb,
            get: bb => bb.id,
            set: (bb, ab) => {
              bb.id = ab
            }
          },
          metadata: Mb
        }, kb, yb), (0, Ab.h)(null, null, Lb, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: bb => "uniqueId" in bb,
            get: bb => bb.uniqueId,
            set: (bb, ab) => {
              bb.uniqueId = ab
            }
          },
          metadata: Mb
        }, Zb, Db), (0, Ab.h)(null, null, Pb, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: bb => "state" in bb,
            get: bb => bb.state,
            set: (bb, ab) => {
              bb.state = ab
            }
          },
          metadata: Mb
        }, zb, xb), (0, Ab.h)(null, null, Xb, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: bb => "metadata" in bb,
            get: bb => bb.metadata,
            set: (bb, ab) => {
              bb.metadata = ab
            }
          },
          metadata: Mb
        }, ib, fb), Mb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Mb
        })
      })(), bb._AnimationRangeFactory = (bb, ab, Ub) => {
        throw (0, Bb.l)("AnimationRange")
      }, bb._NodeConstructors = {}, bb
    })()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);