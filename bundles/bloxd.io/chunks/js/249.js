export const id = 249;
export const ids = [249];
export const modules = {
  39706: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Xb
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(36656),
      Tb = sb(36830),
      Ub = sb(39667),
      Ib = sb(39563),
      Hb = sb(36698),
      fb = sb(39647),
      Mb = sb(39441);
    let Xb = (() => {
      var bb, cb;
      let sb, Xb, nb, mb, lb, Qb, eb, Cb, Nb, Vb, Lb, ub, Yb, hb = Ub.c,
        Jb = [],
        gb = [],
        Bb = [],
        tb = [],
        yb = [],
        Pb = [],
        Db = [],
        Eb = [],
        ib = [],
        Ob = [],
        Gb = [],
        Kb = [],
        Zb = [],
        zb = [],
        qb = [],
        db = [],
        Ab = [],
        wb = [],
        rb = [],
        ob = [],
        Sb = [];
      return bb = class extends hb {
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
          return (0, kb.d)(this, cb, "f")
        }
        set renderPriority(bb) {
          (0, kb.h)(this, cb, bb, "f")
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
        getProjectionMatrix(bb, cb) {
          return null
        }
        constructor(sb, Wb, ab) {
          super(sb, Wb, !1), this.diffuse = ((0, kb.m)(this, Jb), (0, kb.m)(this, gb, new Tb.e(1, 1, 1))), this.specular = ((0, kb.m)(this, Bb), (0, kb.m)(this, tb, new Tb.e(1, 1, 1))), this.falloffType = ((0, kb.m)(this, yb), (0, kb.m)(this, Pb, bb.FALLOFF_DEFAULT)), this.intensity = ((0, kb.m)(this, Db), (0, kb.m)(this, Eb, 1)), this._range = ((0, kb.m)(this, ib), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = bb.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, kb.m)(this, Ob, void 0), cb.set(this, ((0, kb.m)(this, Gb), (0, kb.m)(this, Kb, 0))), this._shadowEnabled = ((0, kb.m)(this, Zb), (0, kb.m)(this, zb, !0)), this._includedOnlyMeshes = (0, kb.m)(this, qb), this._excludeWithLayerMask = (0, kb.m)(this, db, 0), this._includeOnlyWithLayerMask = ((0, kb.m)(this, Ab), (0, kb.m)(this, wb, 0)), this._lightmapMode = ((0, kb.m)(this, rb), (0, kb.m)(this, ob, 0)), this._shadowGenerators = ((0, kb.m)(this, Sb), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, ab || this.EY().addLight(this), this._uniformBuffer = new Ib.d(this.EY().Sm(), void 0, void 0, sb), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], ab || this._resyncMeshes()
        }
        transferTexturesToEffect(bb, cb) {
          return this
        }
        _bindLight(bb, cb, sb, kb) {
          let Wb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const ab = bb.toString();
          let Ub = !1;
          if (this._uniformBuffer.bindToEffect(sb, "Light" + ab), this._renderId !== cb.getRenderId() || this._lastUseSpecular !== kb || !this._uniformBuffer.useUbo) {
            this._renderId = cb.getRenderId(), this._lastUseSpecular = kb;
            const bb = this.getScaledIntensity();
            this.transferToEffect(sb, ab), this.diffuse.scaleToRef(bb, Tb.m.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", Tb.m.Color3[0], this.range, ab), kb && (this.specular.scaleToRef(bb, Tb.m.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", Tb.m.Color3[1], this.radius, ab)), Ub = !0
          }
          if (this.transferTexturesToEffect(sb, ab), cb.shadowsEnabled && this.shadowEnabled && Wb) {
            const bb = this.getShadowGenerator(cb.activeCamera) ?? this.getShadowGenerator();
            bb && (bb.bindShadowLight(ab, sb), Ub = !0)
          }
          Ub ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(bb) {
          let cb = "Name: " + this.name;
          if (cb += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let sb = 0; sb < this.animations.length; sb++) cb += ", animation[0]: " + this.animations[sb].toString(bb);
          return cb
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.Scb() || this._resyncMeshes()
        }
        GV(bb) {
          super.GV(bb), this._resyncMeshes()
        }
        getShadowGenerator() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(bb) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return ab.p.Zero()
        }
        canAffectMesh(bb) {
          return !bb || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(bb)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(bb)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & bb.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & bb.layerMask)))
        }
        dispose(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const bb = this._shadowGenerators.values();
            for (let cb = bb.next(); !0 !== cb.done; cb = bb.next()) {
              cb.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.EY().stopAnimation(this), this._parentContainer) {
            const bb = this._parentContainer.lights.indexOf(this);
            bb > -1 && this._parentContainer.lights.splice(bb, 1), this._parentContainer = null
          }
          for (const sb of this.EY().meshes) sb._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.EY().removeLight(this), super.dispose(bb, cb)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(cb) {
          let sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const kb = bb.GetConstructorFromName(this.getTypeID(), cb, this.EY());
          if (!kb) return null;
          const Wb = Mb.d.Clone(kb, this);
          return cb && (Wb.name = cb), sb && (Wb.parent = sb), Wb.GV(this.isEnabled()), this.onClonedObservable.notifyObservers(Wb), Wb
        }
        serialize() {
          const bb = Mb.d.Serialize(this);
          if (bb.uniqueId = this.uniqueId, bb.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(bb), this.excludedMeshes.length > 0) {
            bb.excludedMeshesIds = [];
            for (const cb of this.excludedMeshes) bb.excludedMeshesIds.push(cb.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            bb.includedOnlyMeshesIds = [];
            for (const cb of this.includedOnlyMeshes) bb.includedOnlyMeshesIds.push(cb.id)
          }
          return Mb.d.AppendSerializedAnimations(this, bb), bb.uQ = this.serializeAnimationRanges(), bb.isEnabled = this.isEnabled(), bb
        }
        static GetConstructorFromName(bb, cb, sb) {
          const kb = Ub.c.Construct("Light_Type_" + bb, cb, sb);
          return kb || null
        }
        static Parse(cb, sb) {
          let kb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Wb = bb.GetConstructorFromName(cb.type, cb.name, sb);
          if (!Wb) return null;
          const ab = Mb.d.Parse(Wb, cb, sb, kb);
          if (cb.excludedMeshesIds && (ab._excludedMeshesIds = cb.excludedMeshesIds), cb.includedOnlyMeshesIds && (ab._includedOnlyMeshesIds = cb.includedOnlyMeshesIds), void 0 !== cb.parentId && (ab._waitingParentId = cb.parentId), void 0 !== cb.parentInstanceIndex && (ab._waitingParentInstanceIndex = cb.parentInstanceIndex), void 0 !== cb.falloffType && (ab.falloffType = cb.falloffType), void 0 !== cb.lightmapMode && (ab.lightmapMode = cb.lightmapMode), cb.animations) {
            for (let bb = 0; bb < cb.animations.length; bb++) {
              const sb = cb.animations[bb],
                kb = (0, Hb.e)("BABYLON.Animation");
              kb && ab.animations.push(kb.Parse(sb))
            }
            Ub.c.ParseAnimationRanges(ab, cb, sb)
          }
          return cb.autoAnimate && sb.beginAnimation(ab, cb.autoAnimateFrom, cb.autoAnimateTo, cb.autoAnimateLoop, cb.autoAnimateSpeed || 1), void 0 !== cb.isEnabled && ab.GV(cb.isEnabled), ab._onParsed(cb, sb, kb), ab
        }
        _onParsed(bb, cb) {}
        _hookArrayForExcluded(bb) {
          var cb = this;
          const sb = bb.push;
          bb.push = function() {
            for (var kb = arguments.length, Wb = new Array(kb), ab = 0; ab < kb; ab++) Wb[ab] = arguments[ab];
            const Tb = sb.apply(bb, Wb);
            if (cb._clusteredContainer) return Tb;
            for (const bb of Wb) bb._resyncLightSource(cb);
            return Tb
          };
          const kb = bb.splice;
          bb.splice = (cb, sb) => {
            const Wb = kb.call(bb, cb, sb ?? bb.length);
            if (this._clusteredContainer) return Wb;
            for (const bb of Wb) bb._resyncLightSource(this);
            return Wb
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(bb) {
          var cb = this;
          const sb = bb.push;
          bb.push = function() {
            for (var kb = arguments.length, Wb = new Array(kb), ab = 0; ab < kb; ab++) Wb[ab] = arguments[ab];
            const Tb = sb.apply(bb, Wb);
            return cb._resyncMeshes(), Tb
          };
          const kb = bb.splice;
          bb.splice = (cb, sb) => {
            const Wb = kb.call(bb, cb, sb ?? bb.length);
            return this._resyncMeshes(), Wb
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const bb of this.EY().meshes) bb._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const bb of this.EY().meshes) - 1 !== bb.lightSources.indexOf(this) && bb._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.EY().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let cb = 0;
          const sb = this.getTypeID();
          let kb = this.intensityMode;
          switch (kb === bb.INTENSITYMODE_AUTOMATIC && (kb = sb === bb.LIGHTTYPEID_DIRECTIONALLIGHT ? bb.INTENSITYMODE_ILLUMINANCE : bb.INTENSITYMODE_LUMINOUSINTENSITY), sb) {
            case bb.LIGHTTYPEID_POINTLIGHT:
            case bb.LIGHTTYPEID_SPOTLIGHT:
              switch (kb) {
                case bb.INTENSITYMODE_LUMINOUSPOWER:
                  cb = 1 / (4 * Math.PI);
                  break;
                case bb.INTENSITYMODE_LUMINOUSINTENSITY:
                  cb = 1;
                  break;
                case bb.INTENSITYMODE_LUMINANCE:
                  cb = this.radius * this.radius
              }
              break;
            case bb.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (kb) {
                case bb.INTENSITYMODE_ILLUMINANCE:
                  cb = 1;
                  break;
                case bb.INTENSITYMODE_LUMINANCE: {
                  let bb = this.radius;
                  bb = Math.max(bb, .001);
                  cb = 2 * Math.PI * (1 - Math.cos(bb));
                  break
                }
              }
              break;
            case bb.LIGHTTYPEID_HEMISPHERICLIGHT:
            case bb.LIGHTTYPEID_RECT_AREALIGHT:
              cb = 1
          }
          return cb
        }
        _reorderLightsInScene() {
          const bb = this.EY();
          0 != this._renderPriority && (bb.requireLightSorting = !0), this.EY().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, cb = new WeakMap, (() => {
        const cb = "function" === typeof Symbol && Symbol.metadata ? Object.create(hb[Symbol.metadata] ?? null) : void 0;
        sb = [(0, Wb.o)()], Xb = [(0, Wb.o)()], nb = [(0, Wb.E)()], mb = [(0, Wb.E)()], lb = [(0, Wb.E)()], Qb = [(0, Wb.E)()], eb = [(0, Wb.E)()], Cb = [(0, Wb.E)()], Nb = [(0, Wb.f)("_reorderLightsInScene")], Vb = [(0, Wb.E)("shadowEnabled")], Lb = [(0, Wb.E)("excludeWithLayerMask")], ub = [(0, Wb.E)("includeOnlyWithLayerMask")], Yb = [(0, Wb.E)("lightmapMode")], (0, kb.j)(bb, null, lb, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: bb => "range" in bb,
            get: bb => bb.range
          },
          metadata: cb
        }, null, Jb), (0, kb.j)(bb, null, Qb, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensityMode" in bb,
            get: bb => bb.intensityMode
          },
          metadata: cb
        }, null, Jb), (0, kb.j)(bb, null, eb, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: bb => "radius" in bb,
            get: bb => bb.radius
          },
          metadata: cb
        }, null, Jb), (0, kb.j)(bb, null, Nb, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: bb => "renderPriority" in bb,
            get: bb => bb.renderPriority,
            set: (bb, cb) => {
              bb.renderPriority = cb
            }
          },
          metadata: cb
        }, Kb, Zb), (0, kb.j)(null, null, sb, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: bb => "diffuse" in bb,
            get: bb => bb.diffuse,
            set: (bb, cb) => {
              bb.diffuse = cb
            }
          },
          metadata: cb
        }, gb, Bb), (0, kb.j)(null, null, Xb, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: bb => "specular" in bb,
            get: bb => bb.specular,
            set: (bb, cb) => {
              bb.specular = cb
            }
          },
          metadata: cb
        }, tb, yb), (0, kb.j)(null, null, nb, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: bb => "falloffType" in bb,
            get: bb => bb.falloffType,
            set: (bb, cb) => {
              bb.falloffType = cb
            }
          },
          metadata: cb
        }, Pb, Db), (0, kb.j)(null, null, mb, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, cb) => {
              bb.intensity = cb
            }
          },
          metadata: cb
        }, Eb, ib), (0, kb.j)(null, null, Cb, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: bb => "_renderPriority" in bb,
            get: bb => bb._renderPriority,
            set: (bb, cb) => {
              bb._renderPriority = cb
            }
          },
          metadata: cb
        }, Ob, Gb), (0, kb.j)(null, null, Vb, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "_shadowEnabled" in bb,
            get: bb => bb._shadowEnabled,
            set: (bb, cb) => {
              bb._shadowEnabled = cb
            }
          },
          metadata: cb
        }, zb, qb), (0, kb.j)(null, null, Lb, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: bb => "_excludeWithLayerMask" in bb,
            get: bb => bb._excludeWithLayerMask,
            set: (bb, cb) => {
              bb._excludeWithLayerMask = cb
            }
          },
          metadata: cb
        }, db, Ab), (0, kb.j)(null, null, ub, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: bb => "_includeOnlyWithLayerMask" in bb,
            get: bb => bb._includeOnlyWithLayerMask,
            set: (bb, cb) => {
              bb._includeOnlyWithLayerMask = cb
            }
          },
          metadata: cb
        }, wb, rb), (0, kb.j)(null, null, Yb, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_lightmapMode" in bb,
            get: bb => bb._lightmapMode,
            set: (bb, cb) => {
              bb._lightmapMode = cb
            }
          },
          metadata: cb
        }, ob, Sb), cb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cb
        })
      })(), bb.FALLOFF_DEFAULT = fb.b.FALLOFF_DEFAULT, bb.FALLOFF_PHYSICAL = fb.b.FALLOFF_PHYSICAL, bb.FALLOFF_GLTF = fb.b.FALLOFF_GLTF, bb.FALLOFF_STANDARD = fb.b.FALLOFF_STANDARD, bb.LIGHTMAP_DEFAULT = fb.b.LIGHTMAP_DEFAULT, bb.LIGHTMAP_SPECULAR = fb.b.LIGHTMAP_SPECULAR, bb.LIGHTMAP_SHADOWSONLY = fb.b.LIGHTMAP_SHADOWSONLY, bb.INTENSITYMODE_AUTOMATIC = fb.b.INTENSITYMODE_AUTOMATIC, bb.INTENSITYMODE_LUMINOUSPOWER = fb.b.INTENSITYMODE_LUMINOUSPOWER, bb.INTENSITYMODE_LUMINOUSINTENSITY = fb.b.INTENSITYMODE_LUMINOUSINTENSITY, bb.INTENSITYMODE_ILLUMINANCE = fb.b.INTENSITYMODE_ILLUMINANCE, bb.INTENSITYMODE_LUMINANCE = fb.b.INTENSITYMODE_LUMINANCE, bb.LIGHTTYPEID_POINTLIGHT = fb.b.LIGHTTYPEID_POINTLIGHT, bb.LIGHTTYPEID_DIRECTIONALLIGHT = fb.b.LIGHTTYPEID_DIRECTIONALLIGHT, bb.LIGHTTYPEID_SPOTLIGHT = fb.b.LIGHTTYPEID_SPOTLIGHT, bb.LIGHTTYPEID_HEMISPHERICLIGHT = fb.b.LIGHTTYPEID_HEMISPHERICLIGHT, bb.LIGHTTYPEID_RECT_AREALIGHT = fb.b.LIGHTTYPEID_RECT_AREALIGHT, bb
    })()
  },
  39667: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Mb
    });
    var kb = sb(39414),
      Wb = sb(36656),
      ab = sb(39418),
      Tb = sb(36683),
      Ub = sb(36677),
      Ib = sb(39296),
      Hb = sb(39441);
    class fb {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new Tb.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new Tb.c, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let Mb = (() => {
      var bb;
      let cb, sb, Mb, Xb, nb, mb = [],
        lb = [],
        Qb = [],
        eb = [],
        Cb = [],
        Nb = [],
        Vb = [],
        Lb = [],
        ub = [],
        Yb = [];
      return bb = class {
        static AddNodeConstructor(bb, cb) {
          this._NodeConstructors[bb] = cb
        }
        static Construct(bb, cb, sb, kb) {
          const Wb = this._NodeConstructors[bb];
          return Wb ? Wb(cb, sb, kb) : null
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
        Scb() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(bb) {
          if (this._parentNode === bb) return;
          const cb = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const cb = this._parentNode._children.indexOf(this); - 1 !== cb && this._parentNode._children.splice(cb, 1), bb || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = bb, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), cb || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
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
              cb = bb.length - 1;
            bb[this._nodeDataStorage._sceneRootNodesIndex] = bb[cb], bb[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
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
          this._onDisposeObserver && this.ZY.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZY.add(bb)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var bb;
          return (bb = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (bb._onEffectiveEnabledStateChangedObservable = new Tb.c)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new fb, this.name = (0, kb.m)(this, mb, void 0), this.id = ((0, kb.m)(this, lb), (0, kb.m)(this, Qb, void 0)), this.uniqueId = ((0, kb.m)(this, eb), (0, kb.m)(this, Cb, void 0)), this.state = ((0, kb.m)(this, Nb), (0, kb.m)(this, Vb, "")), this.metadata = ((0, kb.m)(this, Lb), (0, kb.m)(this, ub, null)), this._internalMetadata = (0, kb.m)(this, Yb), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new Tb.c, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = Wb.e.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.ZY = new Tb.c, this._onDisposeObserver = null, this._behaviors = new Array, this.name = bb, this.id = bb, this._scene = cb || Ub.d.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), sb && this._addToSceneRootNodes()
        }
        EY() {
          return this._scene
        }
        Sm() {
          return this._scene.Sm()
        }
        addBehavior(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(bb) || (bb.init(), this._scene.isLoading && !cb ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(bb) && bb.attach(this)
          })) : bb.attach(this), this._behaviors.push(bb)), this
        }
        removeBehavior(bb) {
          const cb = this._behaviors.indexOf(bb);
          return -1 === cb || (this._behaviors.splice(cb, 1), bb.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(bb) {
          for (const cb of this._behaviors)
            if (cb.name === bb) return cb;
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
        Tcb(bb) {
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
            cb = bb ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const sb of this._children) sb._syncParentEnabledState();
          if (bb) {
            const bb = this.isEnabled();
            bb !== cb && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(bb)
          }
        }
        GV(bb) {
          if (this._nodeDataStorage._isEnabled === bb) return;
          const cb = this._hasEffectiveEnabledStateObservers(),
            sb = cb ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = bb, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(bb), cb) {
            const bb = this.isEnabled();
            bb !== sb && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(bb)
          }
        }
        isDescendantOf(bb) {
          return !!this.parent && (this.parent === bb || this.parent.isDescendantOf(bb))
        }
        _getDescendants(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            sb = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let kb = 0; kb < this._children.length; kb++) {
              const Wb = this._children[kb];
              sb && !sb(Wb) || bb.push(Wb), cb || Wb._getDescendants(bb, !1, sb)
            }
        }
        getDescendants(bb, cb) {
          const sb = [];
          return this._getDescendants(sb, bb, cb), sb
        }
        getChildMeshes(bb, cb) {
          const sb = [];
          return this._getDescendants(sb, bb, (bb => (!cb || cb(bb)) && void 0 !== bb.cullingStrategy)), sb
        }
        getChildren(bb) {
          let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(cb, bb)
        }
        _setReady(bb) {
          bb !== this._nodeDataStorage._isReady && (bb ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(bb) {
          for (let cb = 0; cb < this.animations.length; cb++) {
            const sb = this.animations[cb];
            if (sb.name === bb) return sb
          }
          return null
        }
        createAnimationRange(cb, sb, kb) {
          if (!this._ranges[cb]) {
            this._ranges[cb] = bb._AnimationRangeFactory(cb, sb, kb);
            for (let bb = 0, Wb = this.animations.length; bb < Wb; bb++) this.animations[bb] && this.animations[bb].createRange(cb, sb, kb)
          }
        }
        deleteAnimationRange(bb) {
          let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let sb = 0, kb = this.animations.length; sb < kb; sb++) this.animations[sb] && this.animations[sb].deleteRange(bb, cb);
          this._ranges[bb] = null
        }
        getAnimationRange(bb) {
          return this._ranges[bb] || null
        }
        clone(cb, sb, kb) {
          const Wb = Hb.d.Clone((() => new bb(cb, this.EY())), this);
          if (sb && (Wb.parent = sb), !kb) {
            const bb = this.getDescendants(!0);
            for (let sb = 0; sb < bb.length; sb++) {
              const kb = bb[sb];
              kb.clone(cb + "." + kb.name, Wb)
            }
          }
          return Wb
        }
        getAnimationRanges() {
          const bb = [];
          let cb;
          for (cb in this._ranges) bb.push(this._ranges[cb]);
          return bb
        }
        beginAnimation(bb, cb, sb, kb) {
          const Wb = this.getAnimationRange(bb);
          return Wb ? this._scene.beginAnimation(this, Wb.from, Wb.to, cb, sb, kb) : null
        }
        serializeAnimationRanges() {
          const bb = [];
          for (const cb in this._ranges) {
            const sb = this._ranges[cb];
            if (!sb) continue;
            const kb = {};
            kb.name = cb, kb.from = sb.from, kb.to = sb.to, bb.push(kb)
          }
          return bb
        }
        computeWorldMatrix(bb) {
          return this._worldMatrix || (this._worldMatrix = Wb.e.Identity()), this._worldMatrix
        }
        dispose(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !bb) {
            const sb = this.getDescendants(!0);
            for (const kb of sb) kb.dispose(bb, cb)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.ZY.notifyObservers(this), this.ZY.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const sb of this._behaviors) sb.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(bb, cb, sb) {
          if (cb.uQ)
            for (let kb = 0; kb < cb.uQ.length; kb++) {
              const sb = cb.uQ[kb];
              bb.createAnimationRange(sb.name, sb.from, sb.to)
            }
        }
        getHierarchyBoundingVectors() {
          let bb, cb, sb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            kb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.EY().incrementRenderId(), this.computeWorldMatrix(!0);
          const ab = this;
          if (ab.PJ && ab.XV) {
            const sb = ab.PJ();
            bb = sb.boundingBox.minimumWorld.clone(), cb = sb.boundingBox.maximumWorld.clone()
          } else bb = new Wb.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), cb = new Wb.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (sb) {
            const sb = this.getDescendants(!1);
            for (const ab of sb) {
              const sb = ab;
              if (sb.computeWorldMatrix(!0), kb && !kb(sb)) continue;
              if (!sb.PJ || 0 === sb.getTotalVertices()) continue;
              const Tb = sb.PJ().boundingBox,
                Ub = Tb.minimumWorld,
                Ib = Tb.maximumWorld;
              Wb.p.CheckExtends(Ub, bb, cb), Wb.p.CheckExtends(Ib, bb, cb)
            }
          }
          return {
            min: bb,
            max: cb
          }
        }
      }, (() => {
        const Wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        cb = [(0, ab.E)()], sb = [(0, ab.E)()], Mb = [(0, ab.E)()], Xb = [(0, ab.E)()], nb = [(0, ab.E)()], (0, kb.j)(null, null, cb, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: bb => "name" in bb,
            get: bb => bb.name,
            set: (bb, cb) => {
              bb.name = cb
            }
          },
          metadata: Wb
        }, mb, lb), (0, kb.j)(null, null, sb, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: bb => "id" in bb,
            get: bb => bb.id,
            set: (bb, cb) => {
              bb.id = cb
            }
          },
          metadata: Wb
        }, Qb, eb), (0, kb.j)(null, null, Mb, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: bb => "uniqueId" in bb,
            get: bb => bb.uniqueId,
            set: (bb, cb) => {
              bb.uniqueId = cb
            }
          },
          metadata: Wb
        }, Cb, Nb), (0, kb.j)(null, null, Xb, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: bb => "state" in bb,
            get: bb => bb.state,
            set: (bb, cb) => {
              bb.state = cb
            }
          },
          metadata: Wb
        }, Vb, Lb), (0, kb.j)(null, null, nb, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: bb => "metadata" in bb,
            get: bb => bb.metadata,
            set: (bb, cb) => {
              bb.metadata = cb
            }
          },
          metadata: Wb
        }, ub, Yb), Wb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Wb
        })
      })(), bb._AnimationRangeFactory = (bb, cb, sb) => {
        throw (0, Ib.i)("AnimationRange")
      }, bb._NodeConstructors = {}, bb
    })()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);