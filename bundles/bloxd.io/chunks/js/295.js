export const id = 295;
export const ids = [295];
export const modules = {
  41931: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ub
    });
    var eb = Mb(41675),
      Hb = Mb(41679),
      pb = Mb(38285),
      Vb = Mb(38406),
      gb = Mb(41886),
      lb = Mb(41806),
      Lb = Mb(38333),
      Ib = Mb(41858),
      Ob = Mb(41697);
    let Ub = (() => {
      var bb, wb;
      let Mb, Ub, tb, Cb, Eb, Fb, Bb, sb, mb, hb, zb, Xb, xb, jb = gb.d,
        Kb = [],
        rb = [],
        Rb = [],
        Db = [],
        cb = [],
        Yb = [],
        Zb = [],
        fb = [],
        Ab = [],
        Wb = [],
        Jb = [],
        Sb = [],
        Nb = [],
        vb = [],
        Qb = [],
        Gb = [],
        qb = [],
        ab = [],
        ib = [],
        ub = [],
        db = [];
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
          return (0, eb.b)(this, wb, "f")
        }
        set renderPriority(bb) {
          (0, eb.f)(this, wb, bb, "f")
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
        getProjectionMatrix(bb, wb) {
          return null
        }
        constructor(Mb, Hb, pb) {
          super(Mb, Hb, !1), this.diffuse = ((0, eb.m)(this, Kb), (0, eb.m)(this, rb, new Vb.e(1, 1, 1))), this.specular = ((0, eb.m)(this, Rb), (0, eb.m)(this, Db, new Vb.e(1, 1, 1))), this.falloffType = ((0, eb.m)(this, cb), (0, eb.m)(this, Yb, bb.FALLOFF_DEFAULT)), this.intensity = ((0, eb.m)(this, Zb), (0, eb.m)(this, fb, 1)), this._range = ((0, eb.m)(this, Ab), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = bb.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, eb.m)(this, Wb, void 0), wb.set(this, ((0, eb.m)(this, Jb), (0, eb.m)(this, Sb, 0))), this._shadowEnabled = ((0, eb.m)(this, Nb), (0, eb.m)(this, vb, !0)), this._includedOnlyMeshes = (0, eb.m)(this, Qb), this._excludeWithLayerMask = (0, eb.m)(this, Gb, 0), this._includeOnlyWithLayerMask = ((0, eb.m)(this, qb), (0, eb.m)(this, ab, 0)), this._lightmapMode = ((0, eb.m)(this, ib), (0, eb.m)(this, ub, 0)), this._shadowGenerators = ((0, eb.m)(this, db), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, pb || this.RJ().addLight(this), this._uniformBuffer = new lb.c(this.RJ().DC(), void 0, void 0, Mb), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], pb || this._resyncMeshes()
        }
        transferTexturesToEffect(bb, wb) {
          return this
        }
        _bindLight(bb, wb, Mb, eb) {
          let Hb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const pb = bb.toString();
          let gb = !1;
          if (this._uniformBuffer.bindToEffect(Mb, "Light" + pb), this._renderId !== wb.getRenderId() || this._lastUseSpecular !== eb || !this._uniformBuffer.useUbo) {
            this._renderId = wb.getRenderId(), this._lastUseSpecular = eb;
            const bb = this.getScaledIntensity();
            this.transferToEffect(Mb, pb), this.diffuse.scaleToRef(bb, Vb.k.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", Vb.k.Color3[0], this.range, pb), eb && (this.specular.scaleToRef(bb, Vb.k.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", Vb.k.Color3[1], this.radius, pb)), gb = !0
          }
          if (this.transferTexturesToEffect(Mb, pb), wb.shadowsEnabled && this.shadowEnabled && Hb) {
            const bb = this.getShadowGenerator(wb.activeCamera) ?? this.getShadowGenerator();
            bb && (bb.bindShadowLight(pb, Mb), gb = !0)
          }
          gb ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(bb) {
          let wb = "Name: " + this.name;
          if (wb += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let Mb = 0; Mb < this.animations.length; Mb++) wb += ", animation[0]: " + this.animations[Mb].toString(bb);
          return wb
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.RD() || this._resyncMeshes()
        }
        Bx(bb) {
          super.Bx(bb), this._resyncMeshes()
        }
        getShadowGenerator() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(bb) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return pb.o.Zero()
        }
        canAffectMesh(bb) {
          return !bb || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(bb)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(bb)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & bb.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & bb.layerMask)))
        }
        dispose(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const bb = this._shadowGenerators.values();
            for (let wb = bb.next(); !0 !== wb.done; wb = bb.next()) {
              wb.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.RJ().stopAnimation(this), this._parentContainer) {
            const bb = this._parentContainer.lights.indexOf(this);
            bb > -1 && this._parentContainer.lights.splice(bb, 1), this._parentContainer = null
          }
          for (const Mb of this.RJ().meshes) Mb._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.RJ().removeLight(this), super.dispose(bb, wb)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(wb) {
          let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const eb = bb.GetConstructorFromName(this.getTypeID(), wb, this.RJ());
          if (!eb) return null;
          const Hb = Ob.d.Clone(eb, this);
          return wb && (Hb.name = wb), Mb && (Hb.parent = Mb), Hb.Bx(this.isEnabled()), this.onClonedObservable.notifyObservers(Hb), Hb
        }
        serialize() {
          const bb = Ob.d.Serialize(this);
          if (bb.uniqueId = this.uniqueId, bb.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(bb), this.excludedMeshes.length > 0) {
            bb.excludedMeshesIds = [];
            for (const wb of this.excludedMeshes) bb.excludedMeshesIds.push(wb.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            bb.includedOnlyMeshesIds = [];
            for (const wb of this.includedOnlyMeshes) bb.includedOnlyMeshesIds.push(wb.id)
          }
          return Ob.d.AppendSerializedAnimations(this, bb), bb.gF = this.serializeAnimationRanges(), bb.isEnabled = this.isEnabled(), bb
        }
        static GetConstructorFromName(bb, wb, Mb) {
          const eb = gb.d.Construct("Light_Type_" + bb, wb, Mb);
          return eb || null
        }
        static Parse(wb, Mb) {
          let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Hb = bb.GetConstructorFromName(wb.type, wb.name, Mb);
          if (!Hb) return null;
          const pb = Ob.d.Parse(Hb, wb, Mb, eb);
          if (wb.excludedMeshesIds && (pb._excludedMeshesIds = wb.excludedMeshesIds), wb.includedOnlyMeshesIds && (pb._includedOnlyMeshesIds = wb.includedOnlyMeshesIds), void 0 !== wb.parentId && (pb._waitingParentId = wb.parentId), void 0 !== wb.parentInstanceIndex && (pb._waitingParentInstanceIndex = wb.parentInstanceIndex), void 0 !== wb.falloffType && (pb.falloffType = wb.falloffType), void 0 !== wb.lightmapMode && (pb.lightmapMode = wb.lightmapMode), wb.animations) {
            for (let bb = 0; bb < wb.animations.length; bb++) {
              const Mb = wb.animations[bb],
                eb = (0, Lb.c)("BABYLON.Animation");
              eb && pb.animations.push(eb.Parse(Mb))
            }
            gb.d.ParseAnimationRanges(pb, wb, Mb)
          }
          return wb.autoAnimate && Mb.beginAnimation(pb, wb.autoAnimateFrom, wb.autoAnimateTo, wb.autoAnimateLoop, wb.autoAnimateSpeed || 1), void 0 !== wb.isEnabled && pb.Bx(wb.isEnabled), pb._onParsed(wb, Mb, eb), pb
        }
        _onParsed(bb, wb) {}
        _hookArrayForExcluded(bb) {
          var wb = this;
          const Mb = bb.push;
          bb.push = function() {
            for (var eb = arguments.length, Hb = new Array(eb), pb = 0; pb < eb; pb++) Hb[pb] = arguments[pb];
            const Vb = Mb.apply(bb, Hb);
            if (wb._clusteredContainer) return Vb;
            for (const bb of Hb) bb._resyncLightSource(wb);
            return Vb
          };
          const eb = bb.splice;
          bb.splice = (wb, Mb) => {
            const Hb = eb.call(bb, wb, Mb ?? bb.length);
            if (this._clusteredContainer) return Hb;
            for (const bb of Hb) bb._resyncLightSource(this);
            return Hb
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(bb) {
          var wb = this;
          const Mb = bb.push;
          bb.push = function() {
            for (var eb = arguments.length, Hb = new Array(eb), pb = 0; pb < eb; pb++) Hb[pb] = arguments[pb];
            const Vb = Mb.apply(bb, Hb);
            return wb._resyncMeshes(), Vb
          };
          const eb = bb.splice;
          bb.splice = (wb, Mb) => {
            const Hb = eb.call(bb, wb, Mb ?? bb.length);
            return this._resyncMeshes(), Hb
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const bb of this.RJ().meshes) bb._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const bb of this.RJ().meshes) - 1 !== bb.lightSources.indexOf(this) && bb._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.RJ().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let wb = 0;
          const Mb = this.getTypeID();
          let eb = this.intensityMode;
          switch (eb === bb.INTENSITYMODE_AUTOMATIC && (eb = Mb === bb.LIGHTTYPEID_DIRECTIONALLIGHT ? bb.INTENSITYMODE_ILLUMINANCE : bb.INTENSITYMODE_LUMINOUSINTENSITY), Mb) {
            case bb.LIGHTTYPEID_POINTLIGHT:
            case bb.LIGHTTYPEID_SPOTLIGHT:
              switch (eb) {
                case bb.INTENSITYMODE_LUMINOUSPOWER:
                  wb = 1 / (4 * Math.PI);
                  break;
                case bb.INTENSITYMODE_LUMINOUSINTENSITY:
                  wb = 1;
                  break;
                case bb.INTENSITYMODE_LUMINANCE:
                  wb = this.radius * this.radius
              }
              break;
            case bb.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (eb) {
                case bb.INTENSITYMODE_ILLUMINANCE:
                  wb = 1;
                  break;
                case bb.INTENSITYMODE_LUMINANCE: {
                  let bb = this.radius;
                  bb = Math.max(bb, .001);
                  wb = 2 * Math.PI * (1 - Math.cos(bb));
                  break
                }
              }
              break;
            case bb.LIGHTTYPEID_HEMISPHERICLIGHT:
            case bb.LIGHTTYPEID_RECT_AREALIGHT:
              wb = 1
          }
          return wb
        }
        _reorderLightsInScene() {
          const bb = this.RJ();
          0 != this._renderPriority && (bb.requireLightSorting = !0), this.RJ().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, wb = new WeakMap, (() => {
        const wb = "function" === typeof Symbol && Symbol.metadata ? Object.create(jb[Symbol.metadata] ?? null) : void 0;
        Mb = [(0, Hb.i)()], Ub = [(0, Hb.i)()], tb = [(0, Hb.E)()], Cb = [(0, Hb.E)()], Eb = [(0, Hb.E)()], Fb = [(0, Hb.E)()], Bb = [(0, Hb.E)()], sb = [(0, Hb.E)()], mb = [(0, Hb.d)("_reorderLightsInScene")], hb = [(0, Hb.E)("shadowEnabled")], zb = [(0, Hb.E)("excludeWithLayerMask")], Xb = [(0, Hb.E)("includeOnlyWithLayerMask")], xb = [(0, Hb.E)("lightmapMode")], (0, eb.i)(bb, null, Eb, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: bb => "range" in bb,
            get: bb => bb.range
          },
          metadata: wb
        }, null, Kb), (0, eb.i)(bb, null, Fb, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensityMode" in bb,
            get: bb => bb.intensityMode
          },
          metadata: wb
        }, null, Kb), (0, eb.i)(bb, null, Bb, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: bb => "radius" in bb,
            get: bb => bb.radius
          },
          metadata: wb
        }, null, Kb), (0, eb.i)(bb, null, mb, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: bb => "renderPriority" in bb,
            get: bb => bb.renderPriority,
            set: (bb, wb) => {
              bb.renderPriority = wb
            }
          },
          metadata: wb
        }, Sb, Nb), (0, eb.i)(null, null, Mb, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: bb => "diffuse" in bb,
            get: bb => bb.diffuse,
            set: (bb, wb) => {
              bb.diffuse = wb
            }
          },
          metadata: wb
        }, rb, Rb), (0, eb.i)(null, null, Ub, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: bb => "specular" in bb,
            get: bb => bb.specular,
            set: (bb, wb) => {
              bb.specular = wb
            }
          },
          metadata: wb
        }, Db, cb), (0, eb.i)(null, null, tb, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: bb => "falloffType" in bb,
            get: bb => bb.falloffType,
            set: (bb, wb) => {
              bb.falloffType = wb
            }
          },
          metadata: wb
        }, Yb, Zb), (0, eb.i)(null, null, Cb, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: bb => "intensity" in bb,
            get: bb => bb.intensity,
            set: (bb, wb) => {
              bb.intensity = wb
            }
          },
          metadata: wb
        }, fb, Ab), (0, eb.i)(null, null, sb, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: bb => "_renderPriority" in bb,
            get: bb => bb._renderPriority,
            set: (bb, wb) => {
              bb._renderPriority = wb
            }
          },
          metadata: wb
        }, Wb, Jb), (0, eb.i)(null, null, hb, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: bb => "_shadowEnabled" in bb,
            get: bb => bb._shadowEnabled,
            set: (bb, wb) => {
              bb._shadowEnabled = wb
            }
          },
          metadata: wb
        }, vb, Qb), (0, eb.i)(null, null, zb, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: bb => "_excludeWithLayerMask" in bb,
            get: bb => bb._excludeWithLayerMask,
            set: (bb, wb) => {
              bb._excludeWithLayerMask = wb
            }
          },
          metadata: wb
        }, Gb, qb), (0, eb.i)(null, null, Xb, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: bb => "_includeOnlyWithLayerMask" in bb,
            get: bb => bb._includeOnlyWithLayerMask,
            set: (bb, wb) => {
              bb._includeOnlyWithLayerMask = wb
            }
          },
          metadata: wb
        }, ab, ib), (0, eb.i)(null, null, xb, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: bb => "_lightmapMode" in bb,
            get: bb => bb._lightmapMode,
            set: (bb, wb) => {
              bb._lightmapMode = wb
            }
          },
          metadata: wb
        }, ub, db), wb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: wb
        })
      })(), bb.FALLOFF_DEFAULT = Ib.c.FALLOFF_DEFAULT, bb.FALLOFF_PHYSICAL = Ib.c.FALLOFF_PHYSICAL, bb.FALLOFF_GLTF = Ib.c.FALLOFF_GLTF, bb.FALLOFF_STANDARD = Ib.c.FALLOFF_STANDARD, bb.LIGHTMAP_DEFAULT = Ib.c.LIGHTMAP_DEFAULT, bb.LIGHTMAP_SPECULAR = Ib.c.LIGHTMAP_SPECULAR, bb.LIGHTMAP_SHADOWSONLY = Ib.c.LIGHTMAP_SHADOWSONLY, bb.INTENSITYMODE_AUTOMATIC = Ib.c.INTENSITYMODE_AUTOMATIC, bb.INTENSITYMODE_LUMINOUSPOWER = Ib.c.INTENSITYMODE_LUMINOUSPOWER, bb.INTENSITYMODE_LUMINOUSINTENSITY = Ib.c.INTENSITYMODE_LUMINOUSINTENSITY, bb.INTENSITYMODE_ILLUMINANCE = Ib.c.INTENSITYMODE_ILLUMINANCE, bb.INTENSITYMODE_LUMINANCE = Ib.c.INTENSITYMODE_LUMINANCE, bb.LIGHTTYPEID_POINTLIGHT = Ib.c.LIGHTTYPEID_POINTLIGHT, bb.LIGHTTYPEID_DIRECTIONALLIGHT = Ib.c.LIGHTTYPEID_DIRECTIONALLIGHT, bb.LIGHTTYPEID_SPOTLIGHT = Ib.c.LIGHTTYPEID_SPOTLIGHT, bb.LIGHTTYPEID_HEMISPHERICLIGHT = Ib.c.LIGHTTYPEID_HEMISPHERICLIGHT, bb.LIGHTTYPEID_RECT_AREALIGHT = Ib.c.LIGHTTYPEID_RECT_AREALIGHT, bb
    })()
  },
  41886: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ob
    });
    var eb = Mb(41675),
      Hb = Mb(38285),
      pb = Mb(41679),
      Vb = Mb(38318),
      gb = Mb(38313),
      lb = Mb(41554),
      Lb = Mb(41697);
    class Ib {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new Vb.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new Vb.b, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let Ob = (() => {
      var bb;
      let wb, Mb, Ob, Ub, tb, Cb = [],
        Eb = [],
        Fb = [],
        Bb = [],
        sb = [],
        mb = [],
        hb = [],
        zb = [],
        Xb = [],
        xb = [];
      return bb = class {
        static AddNodeConstructor(bb, wb) {
          this._NodeConstructors[bb] = wb
        }
        static Construct(bb, wb, Mb, eb) {
          const Hb = this._NodeConstructors[bb];
          return Hb ? Hb(wb, Mb, eb) : null
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
        RD() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(bb) {
          if (this._parentNode === bb) return;
          const wb = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const wb = this._parentNode._children.indexOf(this); - 1 !== wb && this._parentNode._children.splice(wb, 1), bb || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = bb, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), wb || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
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
              wb = bb.length - 1;
            bb[this._nodeDataStorage._sceneRootNodesIndex] = bb[wb], bb[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
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
          this._onDisposeObserver && this.vJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.vJ.add(bb)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var bb;
          return (bb = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (bb._onEffectiveEnabledStateChangedObservable = new Vb.b)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new Ib, this.name = (0, eb.m)(this, Cb, void 0), this.id = ((0, eb.m)(this, Eb), (0, eb.m)(this, Fb, void 0)), this.uniqueId = ((0, eb.m)(this, Bb), (0, eb.m)(this, sb, void 0)), this.state = ((0, eb.m)(this, mb), (0, eb.m)(this, hb, "")), this.metadata = ((0, eb.m)(this, zb), (0, eb.m)(this, Xb, null)), this._internalMetadata = (0, eb.m)(this, xb), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new Vb.b, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = Hb.b.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.vJ = new Vb.b, this._onDisposeObserver = null, this._behaviors = new Array, this.name = bb, this.id = bb, this._scene = wb || gb.e.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), Mb && this._addToSceneRootNodes()
        }
        RJ() {
          return this._scene
        }
        DC() {
          return this._scene.DC()
        }
        addBehavior(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(bb) || (bb.init(), this._scene.isLoading && !wb ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(bb) && bb.attach(this)
          })) : bb.attach(this), this._behaviors.push(bb)), this
        }
        removeBehavior(bb) {
          const wb = this._behaviors.indexOf(bb);
          return -1 === wb || (this._behaviors.splice(wb, 1), bb.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(bb) {
          for (const wb of this._behaviors)
            if (wb.name === bb) return wb;
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
        eeb(bb) {
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
            wb = bb ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const Mb of this._children) Mb._syncParentEnabledState();
          if (bb) {
            const bb = this.isEnabled();
            bb !== wb && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(bb)
          }
        }
        Bx(bb) {
          if (this._nodeDataStorage._isEnabled === bb) return;
          const wb = this._hasEffectiveEnabledStateObservers(),
            Mb = wb ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = bb, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(bb), wb) {
            const bb = this.isEnabled();
            bb !== Mb && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(bb)
          }
        }
        isDescendantOf(bb) {
          return !!this.parent && (this.parent === bb || this.parent.isDescendantOf(bb))
        }
        _getDescendants(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Mb = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let eb = 0; eb < this._children.length; eb++) {
              const Hb = this._children[eb];
              Mb && !Mb(Hb) || bb.push(Hb), wb || Hb._getDescendants(bb, !1, Mb)
            }
        }
        getDescendants(bb, wb) {
          const Mb = [];
          return this._getDescendants(Mb, bb, wb), Mb
        }
        getChildMeshes(bb, wb) {
          const Mb = [];
          return this._getDescendants(Mb, bb, (bb => (!wb || wb(bb)) && void 0 !== bb.cullingStrategy)), Mb
        }
        getChildren(bb) {
          let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(wb, bb)
        }
        _setReady(bb) {
          bb !== this._nodeDataStorage._isReady && (bb ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(bb) {
          for (let wb = 0; wb < this.animations.length; wb++) {
            const Mb = this.animations[wb];
            if (Mb.name === bb) return Mb
          }
          return null
        }
        createAnimationRange(wb, Mb, eb) {
          if (!this._ranges[wb]) {
            this._ranges[wb] = bb._AnimationRangeFactory(wb, Mb, eb);
            for (let bb = 0, Hb = this.animations.length; bb < Hb; bb++) this.animations[bb] && this.animations[bb].createRange(wb, Mb, eb)
          }
        }
        deleteAnimationRange(bb) {
          let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let Mb = 0, eb = this.animations.length; Mb < eb; Mb++) this.animations[Mb] && this.animations[Mb].deleteRange(bb, wb);
          this._ranges[bb] = null
        }
        getAnimationRange(bb) {
          return this._ranges[bb] || null
        }
        clone(wb, Mb, eb) {
          const Hb = Lb.d.Clone((() => new bb(wb, this.RJ())), this);
          if (Mb && (Hb.parent = Mb), !eb) {
            const bb = this.getDescendants(!0);
            for (let Mb = 0; Mb < bb.length; Mb++) {
              const eb = bb[Mb];
              eb.clone(wb + "." + eb.name, Hb)
            }
          }
          return Hb
        }
        getAnimationRanges() {
          const bb = [];
          let wb;
          for (wb in this._ranges) bb.push(this._ranges[wb]);
          return bb
        }
        beginAnimation(bb, wb, Mb, eb) {
          const Hb = this.getAnimationRange(bb);
          return Hb ? this._scene.beginAnimation(this, Hb.from, Hb.to, wb, Mb, eb) : null
        }
        serializeAnimationRanges() {
          const bb = [];
          for (const wb in this._ranges) {
            const Mb = this._ranges[wb];
            if (!Mb) continue;
            const eb = {};
            eb.name = wb, eb.from = Mb.from, eb.to = Mb.to, bb.push(eb)
          }
          return bb
        }
        computeWorldMatrix(bb) {
          return this._worldMatrix || (this._worldMatrix = Hb.b.Identity()), this._worldMatrix
        }
        dispose(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !bb) {
            const Mb = this.getDescendants(!0);
            for (const eb of Mb) eb.dispose(bb, wb)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.vJ.notifyObservers(this), this.vJ.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const Mb of this._behaviors) Mb.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(bb, wb, Mb) {
          if (wb.gF)
            for (let eb = 0; eb < wb.gF.length; eb++) {
              const Mb = wb.gF[eb];
              bb.createAnimationRange(Mb.name, Mb.from, Mb.to)
            }
        }
        getHierarchyBoundingVectors() {
          let bb, wb, Mb = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            eb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.RJ().incrementRenderId(), this.computeWorldMatrix(!0);
          const pb = this;
          if (pb.XN && pb.oR) {
            const Mb = pb.XN();
            bb = Mb.boundingBox.minimumWorld.clone(), wb = Mb.boundingBox.maximumWorld.clone()
          } else bb = new Hb.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), wb = new Hb.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (Mb) {
            const Mb = this.getDescendants(!1);
            for (const pb of Mb) {
              const Mb = pb;
              if (Mb.computeWorldMatrix(!0), eb && !eb(Mb)) continue;
              if (!Mb.XN || 0 === Mb.getTotalVertices()) continue;
              const Vb = Mb.XN().boundingBox,
                gb = Vb.minimumWorld,
                lb = Vb.maximumWorld;
              Hb.o.CheckExtends(gb, bb, wb), Hb.o.CheckExtends(lb, bb, wb)
            }
          }
          return {
            min: bb,
            max: wb
          }
        }
      }, (() => {
        const Hb = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        wb = [(0, pb.E)()], Mb = [(0, pb.E)()], Ob = [(0, pb.E)()], Ub = [(0, pb.E)()], tb = [(0, pb.E)()], (0, eb.i)(null, null, wb, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: bb => "name" in bb,
            get: bb => bb.name,
            set: (bb, wb) => {
              bb.name = wb
            }
          },
          metadata: Hb
        }, Cb, Eb), (0, eb.i)(null, null, Mb, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: bb => "id" in bb,
            get: bb => bb.id,
            set: (bb, wb) => {
              bb.id = wb
            }
          },
          metadata: Hb
        }, Fb, Bb), (0, eb.i)(null, null, Ob, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: bb => "uniqueId" in bb,
            get: bb => bb.uniqueId,
            set: (bb, wb) => {
              bb.uniqueId = wb
            }
          },
          metadata: Hb
        }, sb, mb), (0, eb.i)(null, null, Ub, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: bb => "state" in bb,
            get: bb => bb.state,
            set: (bb, wb) => {
              bb.state = wb
            }
          },
          metadata: Hb
        }, hb, zb), (0, eb.i)(null, null, tb, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: bb => "metadata" in bb,
            get: bb => bb.metadata,
            set: (bb, wb) => {
              bb.metadata = wb
            }
          },
          metadata: Hb
        }, Xb, xb), Hb && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Hb
        })
      })(), bb._AnimationRangeFactory = (bb, wb, Mb) => {
        throw (0, lb.k)("AnimationRange")
      }, bb._NodeConstructors = {}, bb
    })()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);