export const id = 251;
export const ids = [251];
export const modules = {
  39995: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Wq
    });
    var Yq = gq(39757),
      lq = gq(39759),
      Oq = gq(37139),
      mq = gq(37289),
      xq = gq(39960),
      Aq = gq(39870),
      cq = gq(37171),
      uq = gq(39938),
      Bq = gq(39779);
    let Wq = (() => {
      var qq, Eq;
      let gq, Wq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq = xq.c,
        vq = [],
        hq = [],
        nq = [],
        bq = [],
        iq = [],
        Zq = [],
        fq = [],
        Mq = [],
        Tq = [],
        zq = [],
        Sq = [],
        pq = [],
        Gq = [],
        Lq = [],
        Jq = [],
        kq = [],
        Rq = [],
        Uq = [],
        Fq = [],
        sq = [],
        Xq = [];
      return qq = class extends rq {
        get range() {
          return this._range
        }
        set range(qq) {
          this._range = qq, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(qq) {
          this._intensityMode = qq, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(qq) {
          this._radius = qq, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, Yq.b)(this, Eq, "f")
        }
        set renderPriority(qq) {
          (0, Yq.e)(this, Eq, qq, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(qq) {
          this._shadowEnabled !== qq && (this._shadowEnabled = qq, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(qq) {
          this._includedOnlyMeshes = qq, this._hookArrayForIncludedOnly(qq)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(qq) {
          this._excludedMeshes = qq, this._hookArrayForExcluded(qq)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(qq) {
          this._excludeWithLayerMask = qq, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(qq) {
          this._includeOnlyWithLayerMask = qq, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(qq) {
          this._lightmapMode !== qq && (this._lightmapMode = qq, this._markMeshesAsLightDirty())
        }
        getViewMatrix(qq) {
          return null
        }
        getProjectionMatrix(qq, Eq) {
          return null
        }
        constructor(gq, lq, Oq) {
          super(gq, lq, !1), this.diffuse = ((0, Yq.i)(this, vq), (0, Yq.i)(this, hq, new mq.d(1, 1, 1))), this.specular = ((0, Yq.i)(this, nq), (0, Yq.i)(this, bq, new mq.d(1, 1, 1))), this.falloffType = ((0, Yq.i)(this, iq), (0, Yq.i)(this, Zq, qq.FALLOFF_DEFAULT)), this.intensity = ((0, Yq.i)(this, fq), (0, Yq.i)(this, Mq, 1)), this._range = ((0, Yq.i)(this, Tq), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = qq.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, Yq.i)(this, zq, void 0), Eq.set(this, ((0, Yq.i)(this, Sq), (0, Yq.i)(this, pq, 0))), this._shadowEnabled = ((0, Yq.i)(this, Gq), (0, Yq.i)(this, Lq, !0)), this._includedOnlyMeshes = (0, Yq.i)(this, Jq), this._excludeWithLayerMask = (0, Yq.i)(this, kq, 0), this._includeOnlyWithLayerMask = ((0, Yq.i)(this, Rq), (0, Yq.i)(this, Uq, 0)), this._lightmapMode = ((0, Yq.i)(this, Fq), (0, Yq.i)(this, sq, 0)), this._shadowGenerators = ((0, Yq.i)(this, Xq), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, Oq || this.ZJ().addLight(this), this._uniformBuffer = new Aq.b(this.ZJ().Ba(), void 0, void 0, gq), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], Oq || this._resyncMeshes()
        }
        transferTexturesToEffect(qq, Eq) {
          return this
        }
        _bindLight(qq, Eq, gq, Yq) {
          let lq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Oq = qq.toString();
          let xq = !1;
          if (this._uniformBuffer.bindToEffect(gq, "Light" + Oq), this._renderId !== Eq.getRenderId() || this._lastUseSpecular !== Yq || !this._uniformBuffer.useUbo) {
            this._renderId = Eq.getRenderId(), this._lastUseSpecular = Yq;
            const qq = this.getScaledIntensity();
            this.transferToEffect(gq, Oq), this.diffuse.scaleToRef(qq, mq.k.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", mq.k.Color3[0], this.range, Oq), Yq && (this.specular.scaleToRef(qq, mq.k.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", mq.k.Color3[1], this.radius, Oq)), xq = !0
          }
          if (this.transferTexturesToEffect(gq, Oq), Eq.shadowsEnabled && this.shadowEnabled && lq) {
            const qq = this.getShadowGenerator(Eq.activeCamera) ?? this.getShadowGenerator();
            qq && (qq.bindShadowLight(Oq, gq), xq = !0)
          }
          xq ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(qq) {
          let Eq = "Name: " + this.name;
          if (Eq += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let gq = 0; gq < this.animations.length; gq++) Eq += ", animation[0]: " + this.animations[gq].toString(qq);
          return Eq
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.bM() || this._resyncMeshes()
        }
        hG(qq) {
          super.hG(qq), this._resyncMeshes()
        }
        getShadowGenerator() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(qq) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return Oq.q.Zero()
        }
        canAffectMesh(qq) {
          return !qq || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(qq)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(qq)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & qq.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & qq.layerMask)))
        }
        dispose(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const qq = this._shadowGenerators.values();
            for (let Eq = qq.next(); !0 !== Eq.done; Eq = qq.next()) {
              Eq.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.ZJ().stopAnimation(this), this._parentContainer) {
            const qq = this._parentContainer.lights.indexOf(this);
            qq > -1 && this._parentContainer.lights.splice(qq, 1), this._parentContainer = null
          }
          for (const gq of this.ZJ().meshes) gq._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.ZJ().removeLight(this), super.dispose(qq, Eq)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(Eq) {
          let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Yq = qq.GetConstructorFromName(this.getTypeID(), Eq, this.ZJ());
          if (!Yq) return null;
          const lq = Bq.d.Clone(Yq, this);
          return Eq && (lq.name = Eq), gq && (lq.parent = gq), lq.hG(this.isEnabled()), this.onClonedObservable.notifyObservers(lq), lq
        }
        serialize() {
          const qq = Bq.d.Serialize(this);
          if (qq.uniqueId = this.uniqueId, qq.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(qq), this.excludedMeshes.length > 0) {
            qq.excludedMeshesIds = [];
            for (const Eq of this.excludedMeshes) qq.excludedMeshesIds.push(Eq.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            qq.includedOnlyMeshesIds = [];
            for (const Eq of this.includedOnlyMeshes) qq.includedOnlyMeshesIds.push(Eq.id)
          }
          return Bq.d.AppendSerializedAnimations(this, qq), qq.zV = this.serializeAnimationRanges(), qq.isEnabled = this.isEnabled(), qq
        }
        static GetConstructorFromName(qq, Eq, gq) {
          const Yq = xq.c.Construct("Light_Type_" + qq, Eq, gq);
          return Yq || null
        }
        static Parse(Eq, gq) {
          let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const lq = qq.GetConstructorFromName(Eq.type, Eq.name, gq);
          if (!lq) return null;
          const Oq = Bq.d.Parse(lq, Eq, gq, Yq);
          if (Eq.excludedMeshesIds && (Oq._excludedMeshesIds = Eq.excludedMeshesIds), Eq.includedOnlyMeshesIds && (Oq._includedOnlyMeshesIds = Eq.includedOnlyMeshesIds), void 0 !== Eq.parentId && (Oq._waitingParentId = Eq.parentId), void 0 !== Eq.parentInstanceIndex && (Oq._waitingParentInstanceIndex = Eq.parentInstanceIndex), void 0 !== Eq.falloffType && (Oq.falloffType = Eq.falloffType), void 0 !== Eq.lightmapMode && (Oq.lightmapMode = Eq.lightmapMode), Eq.animations) {
            for (let qq = 0; qq < Eq.animations.length; qq++) {
              const gq = Eq.animations[qq],
                Yq = (0, cq.e)("BABYLON.Animation");
              Yq && Oq.animations.push(Yq.Parse(gq))
            }
            xq.c.ParseAnimationRanges(Oq, Eq, gq)
          }
          return Eq.autoAnimate && gq.beginAnimation(Oq, Eq.autoAnimateFrom, Eq.autoAnimateTo, Eq.autoAnimateLoop, Eq.autoAnimateSpeed || 1), void 0 !== Eq.isEnabled && Oq.hG(Eq.isEnabled), Oq._onParsed(Eq, gq, Yq), Oq
        }
        _onParsed(qq, Eq) {}
        _hookArrayForExcluded(qq) {
          var Eq = this;
          const gq = qq.push;
          qq.push = function() {
            for (var Yq = arguments.length, lq = new Array(Yq), Oq = 0; Oq < Yq; Oq++) lq[Oq] = arguments[Oq];
            const mq = gq.apply(qq, lq);
            if (Eq._clusteredContainer) return mq;
            for (const qq of lq) qq._resyncLightSource(Eq);
            return mq
          };
          const Yq = qq.splice;
          qq.splice = (Eq, gq) => {
            const lq = Yq.call(qq, Eq, gq ?? qq.length);
            if (this._clusteredContainer) return lq;
            for (const qq of lq) qq._resyncLightSource(this);
            return lq
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(qq) {
          var Eq = this;
          const gq = qq.push;
          qq.push = function() {
            for (var Yq = arguments.length, lq = new Array(Yq), Oq = 0; Oq < Yq; Oq++) lq[Oq] = arguments[Oq];
            const mq = gq.apply(qq, lq);
            return Eq._resyncMeshes(), mq
          };
          const Yq = qq.splice;
          qq.splice = (Eq, gq) => {
            const lq = Yq.call(qq, Eq, gq ?? qq.length);
            return this._resyncMeshes(), lq
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const qq of this.ZJ().meshes) qq._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const qq of this.ZJ().meshes) - 1 !== qq.lightSources.indexOf(this) && qq._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.ZJ().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let Eq = 0;
          const gq = this.getTypeID();
          let Yq = this.intensityMode;
          switch (Yq === qq.INTENSITYMODE_AUTOMATIC && (Yq = gq === qq.LIGHTTYPEID_DIRECTIONALLIGHT ? qq.INTENSITYMODE_ILLUMINANCE : qq.INTENSITYMODE_LUMINOUSINTENSITY), gq) {
            case qq.LIGHTTYPEID_POINTLIGHT:
            case qq.LIGHTTYPEID_SPOTLIGHT:
              switch (Yq) {
                case qq.INTENSITYMODE_LUMINOUSPOWER:
                  Eq = 1 / (4 * Math.PI);
                  break;
                case qq.INTENSITYMODE_LUMINOUSINTENSITY:
                  Eq = 1;
                  break;
                case qq.INTENSITYMODE_LUMINANCE:
                  Eq = this.radius * this.radius
              }
              break;
            case qq.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (Yq) {
                case qq.INTENSITYMODE_ILLUMINANCE:
                  Eq = 1;
                  break;
                case qq.INTENSITYMODE_LUMINANCE: {
                  let qq = this.radius;
                  qq = Math.max(qq, .001);
                  Eq = 2 * Math.PI * (1 - Math.cos(qq));
                  break
                }
              }
              break;
            case qq.LIGHTTYPEID_HEMISPHERICLIGHT:
            case qq.LIGHTTYPEID_RECT_AREALIGHT:
              Eq = 1
          }
          return Eq
        }
        _reorderLightsInScene() {
          const qq = this.ZJ();
          0 != this._renderPriority && (qq.requireLightSorting = !0), this.ZJ().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, Eq = new WeakMap, (() => {
        const Eq = "function" === typeof Symbol && Symbol.metadata ? Object.create(rq[Symbol.metadata] ?? null) : void 0;
        gq = [(0, lq.o)()], Wq = [(0, lq.o)()], Nq = [(0, lq.M)()], aq = [(0, lq.M)()], Vq = [(0, lq.M)()], dq = [(0, lq.M)()], jq = [(0, lq.M)()], Hq = [(0, lq.M)()], oq = [(0, lq.f)("_reorderLightsInScene")], Pq = [(0, lq.M)("shadowEnabled")], Qq = [(0, lq.M)("excludeWithLayerMask")], yq = [(0, lq.M)("includeOnlyWithLayerMask")], tq = [(0, lq.M)("lightmapMode")], (0, Yq.f)(qq, null, Vq, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: qq => "range" in qq,
            get: qq => qq.range
          },
          metadata: Eq
        }, null, vq), (0, Yq.f)(qq, null, dq, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: qq => "intensityMode" in qq,
            get: qq => qq.intensityMode
          },
          metadata: Eq
        }, null, vq), (0, Yq.f)(qq, null, jq, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: qq => "radius" in qq,
            get: qq => qq.radius
          },
          metadata: Eq
        }, null, vq), (0, Yq.f)(qq, null, oq, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: qq => "renderPriority" in qq,
            get: qq => qq.renderPriority,
            set: (qq, Eq) => {
              qq.renderPriority = Eq
            }
          },
          metadata: Eq
        }, pq, Gq), (0, Yq.f)(null, null, gq, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: qq => "diffuse" in qq,
            get: qq => qq.diffuse,
            set: (qq, Eq) => {
              qq.diffuse = Eq
            }
          },
          metadata: Eq
        }, hq, nq), (0, Yq.f)(null, null, Wq, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: qq => "specular" in qq,
            get: qq => qq.specular,
            set: (qq, Eq) => {
              qq.specular = Eq
            }
          },
          metadata: Eq
        }, bq, iq), (0, Yq.f)(null, null, Nq, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: qq => "falloffType" in qq,
            get: qq => qq.falloffType,
            set: (qq, Eq) => {
              qq.falloffType = Eq
            }
          },
          metadata: Eq
        }, Zq, fq), (0, Yq.f)(null, null, aq, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: qq => "intensity" in qq,
            get: qq => qq.intensity,
            set: (qq, Eq) => {
              qq.intensity = Eq
            }
          },
          metadata: Eq
        }, Mq, Tq), (0, Yq.f)(null, null, Hq, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: qq => "_renderPriority" in qq,
            get: qq => qq._renderPriority,
            set: (qq, Eq) => {
              qq._renderPriority = Eq
            }
          },
          metadata: Eq
        }, zq, Sq), (0, Yq.f)(null, null, Pq, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: qq => "_shadowEnabled" in qq,
            get: qq => qq._shadowEnabled,
            set: (qq, Eq) => {
              qq._shadowEnabled = Eq
            }
          },
          metadata: Eq
        }, Lq, Jq), (0, Yq.f)(null, null, Qq, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: qq => "_excludeWithLayerMask" in qq,
            get: qq => qq._excludeWithLayerMask,
            set: (qq, Eq) => {
              qq._excludeWithLayerMask = Eq
            }
          },
          metadata: Eq
        }, kq, Rq), (0, Yq.f)(null, null, yq, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: qq => "_includeOnlyWithLayerMask" in qq,
            get: qq => qq._includeOnlyWithLayerMask,
            set: (qq, Eq) => {
              qq._includeOnlyWithLayerMask = Eq
            }
          },
          metadata: Eq
        }, Uq, Fq), (0, Yq.f)(null, null, tq, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: qq => "_lightmapMode" in qq,
            get: qq => qq._lightmapMode,
            set: (qq, Eq) => {
              qq._lightmapMode = Eq
            }
          },
          metadata: Eq
        }, sq, Xq), Eq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Eq
        })
      })(), qq.FALLOFF_DEFAULT = uq.c.FALLOFF_DEFAULT, qq.FALLOFF_PHYSICAL = uq.c.FALLOFF_PHYSICAL, qq.FALLOFF_GLTF = uq.c.FALLOFF_GLTF, qq.FALLOFF_STANDARD = uq.c.FALLOFF_STANDARD, qq.LIGHTMAP_DEFAULT = uq.c.LIGHTMAP_DEFAULT, qq.LIGHTMAP_SPECULAR = uq.c.LIGHTMAP_SPECULAR, qq.LIGHTMAP_SHADOWSONLY = uq.c.LIGHTMAP_SHADOWSONLY, qq.INTENSITYMODE_AUTOMATIC = uq.c.INTENSITYMODE_AUTOMATIC, qq.INTENSITYMODE_LUMINOUSPOWER = uq.c.INTENSITYMODE_LUMINOUSPOWER, qq.INTENSITYMODE_LUMINOUSINTENSITY = uq.c.INTENSITYMODE_LUMINOUSINTENSITY, qq.INTENSITYMODE_ILLUMINANCE = uq.c.INTENSITYMODE_ILLUMINANCE, qq.INTENSITYMODE_LUMINANCE = uq.c.INTENSITYMODE_LUMINANCE, qq.LIGHTTYPEID_POINTLIGHT = uq.c.LIGHTTYPEID_POINTLIGHT, qq.LIGHTTYPEID_DIRECTIONALLIGHT = uq.c.LIGHTTYPEID_DIRECTIONALLIGHT, qq.LIGHTTYPEID_SPOTLIGHT = uq.c.LIGHTTYPEID_SPOTLIGHT, qq.LIGHTTYPEID_HEMISPHERICLIGHT = uq.c.LIGHTTYPEID_HEMISPHERICLIGHT, qq.LIGHTTYPEID_RECT_AREALIGHT = uq.c.LIGHTTYPEID_RECT_AREALIGHT, qq
    })()
  },
  39960: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Bq
    });
    var Yq = gq(39757),
      lq = gq(37139),
      Oq = gq(39759),
      mq = gq(37156),
      xq = gq(37153),
      Aq = gq(39636),
      cq = gq(39779);
    class uq {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new mq.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new mq.d, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let Bq = (() => {
      var qq;
      let Eq, gq, Bq, Wq, Nq, aq = [],
        Vq = [],
        dq = [],
        jq = [],
        Hq = [],
        oq = [],
        Pq = [],
        Qq = [],
        yq = [],
        tq = [];
      return qq = class {
        static AddNodeConstructor(qq, Eq) {
          this._NodeConstructors[qq] = Eq
        }
        static Construct(qq, Eq, gq, Yq) {
          const lq = this._NodeConstructors[qq];
          return lq ? lq(Eq, gq, Yq) : null
        }
        set accessibilityTag(qq) {
          this._accessibilityTag = qq, this.onAccessibilityTagChangedObservable.notifyObservers(qq)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(qq) {
          this._nodeDataStorage._doNotSerialize = qq
        }
        bM() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(qq) {
          if (this._parentNode === qq) return;
          const Eq = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const Eq = this._parentNode._children.indexOf(this); - 1 !== Eq && this._parentNode._children.splice(Eq, 1), qq || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = qq, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), Eq || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(qq) {
          this._nodeDataStorage._inheritVisibility = qq
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(qq) {
          this._nodeDataStorage._isVisible = qq
        }
        _serializeAsParent(qq) {
          qq.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const qq = this._scene.rootNodes,
              Eq = qq.length - 1;
            qq[this._nodeDataStorage._sceneRootNodesIndex] = qq[Eq], qq[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(qq) {
          this._animationPropertiesOverride = qq
        }
        getClassName() {
          return "Node"
        }
        set onDispose(qq) {
          this._onDisposeObserver && this.MJ.remove(this._onDisposeObserver), this._onDisposeObserver = this.MJ.add(qq)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var qq;
          return (qq = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (qq._onEffectiveEnabledStateChangedObservable = new mq.d)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            gq = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new uq, this.name = (0, Yq.i)(this, aq, void 0), this.id = ((0, Yq.i)(this, Vq), (0, Yq.i)(this, dq, void 0)), this.uniqueId = ((0, Yq.i)(this, jq), (0, Yq.i)(this, Hq, void 0)), this.state = ((0, Yq.i)(this, oq), (0, Yq.i)(this, Pq, "")), this.metadata = ((0, Yq.i)(this, Qq), (0, Yq.i)(this, yq, null)), this._internalMetadata = (0, Yq.i)(this, tq), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new mq.d, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = lq.e.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.MJ = new mq.d, this._onDisposeObserver = null, this._behaviors = new Array, this.name = qq, this.id = qq, this._scene = Eq || xq.b.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), gq && this._addToSceneRootNodes()
        }
        ZJ() {
          return this._scene
        }
        Ba() {
          return this._scene.Ba()
        }
        addBehavior(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(qq) || (qq.init(), this._scene.isLoading && !Eq ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(qq) && qq.attach(this)
          })) : qq.attach(this), this._behaviors.push(qq)), this
        }
        removeBehavior(qq) {
          const Eq = this._behaviors.indexOf(qq);
          return -1 === Eq || (this._behaviors.splice(Eq, 1), qq.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(qq) {
          for (const Eq of this._behaviors)
            if (Eq.name === qq) return Eq;
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
        updateCache(qq) {
          !qq && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(qq) {
          return this.parent ? this.parent._getActionManagerForTrigger(qq, !1) : null
        }
        _updateCache(qq) {}
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
        xgq(qq) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const qq = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!qq && qq.hasObservers()
        }
        _syncParentEnabledState() {
          const qq = this._hasEffectiveEnabledStateObservers(),
            Eq = qq ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const gq of this._children) gq._syncParentEnabledState();
          if (qq) {
            const qq = this.isEnabled();
            qq !== Eq && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(qq)
          }
        }
        hG(qq) {
          if (this._nodeDataStorage._isEnabled === qq) return;
          const Eq = this._hasEffectiveEnabledStateObservers(),
            gq = Eq ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = qq, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(qq), Eq) {
            const qq = this.isEnabled();
            qq !== gq && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(qq)
          }
        }
        isDescendantOf(qq) {
          return !!this.parent && (this.parent === qq || this.parent.isDescendantOf(qq))
        }
        _getDescendants(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            gq = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let Yq = 0; Yq < this._children.length; Yq++) {
              const lq = this._children[Yq];
              gq && !gq(lq) || qq.push(lq), Eq || lq._getDescendants(qq, !1, gq)
            }
        }
        getDescendants(qq, Eq) {
          const gq = [];
          return this._getDescendants(gq, qq, Eq), gq
        }
        getChildMeshes(qq, Eq) {
          const gq = [];
          return this._getDescendants(gq, qq, (qq => (!Eq || Eq(qq)) && void 0 !== qq.cullingStrategy)), gq
        }
        getChildren(qq) {
          let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(Eq, qq)
        }
        _setReady(qq) {
          qq !== this._nodeDataStorage._isReady && (qq ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(qq) {
          for (let Eq = 0; Eq < this.animations.length; Eq++) {
            const gq = this.animations[Eq];
            if (gq.name === qq) return gq
          }
          return null
        }
        createAnimationRange(Eq, gq, Yq) {
          if (!this._ranges[Eq]) {
            this._ranges[Eq] = qq._AnimationRangeFactory(Eq, gq, Yq);
            for (let qq = 0, lq = this.animations.length; qq < lq; qq++) this.animations[qq] && this.animations[qq].createRange(Eq, gq, Yq)
          }
        }
        deleteAnimationRange(qq) {
          let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let gq = 0, Yq = this.animations.length; gq < Yq; gq++) this.animations[gq] && this.animations[gq].deleteRange(qq, Eq);
          this._ranges[qq] = null
        }
        getAnimationRange(qq) {
          return this._ranges[qq] || null
        }
        clone(Eq, gq, Yq) {
          const lq = cq.d.Clone((() => new qq(Eq, this.ZJ())), this);
          if (gq && (lq.parent = gq), !Yq) {
            const qq = this.getDescendants(!0);
            for (let gq = 0; gq < qq.length; gq++) {
              const Yq = qq[gq];
              Yq.clone(Eq + "." + Yq.name, lq)
            }
          }
          return lq
        }
        getAnimationRanges() {
          const qq = [];
          let Eq;
          for (Eq in this._ranges) qq.push(this._ranges[Eq]);
          return qq
        }
        beginAnimation(qq, Eq, gq, Yq) {
          const lq = this.getAnimationRange(qq);
          return lq ? this._scene.beginAnimation(this, lq.from, lq.to, Eq, gq, Yq) : null
        }
        serializeAnimationRanges() {
          const qq = [];
          for (const Eq in this._ranges) {
            const gq = this._ranges[Eq];
            if (!gq) continue;
            const Yq = {};
            Yq.name = Eq, Yq.from = gq.from, Yq.to = gq.to, qq.push(Yq)
          }
          return qq
        }
        computeWorldMatrix(qq) {
          return this._worldMatrix || (this._worldMatrix = lq.e.Identity()), this._worldMatrix
        }
        dispose(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !qq) {
            const gq = this.getDescendants(!0);
            for (const Yq of gq) Yq.dispose(qq, Eq)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.MJ.notifyObservers(this), this.MJ.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const gq of this._behaviors) gq.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(qq, Eq, gq) {
          if (Eq.zV)
            for (let Yq = 0; Yq < Eq.zV.length; Yq++) {
              const gq = Eq.zV[Yq];
              qq.createAnimationRange(gq.name, gq.from, gq.to)
            }
        }
        getHierarchyBoundingVectors() {
          let qq, Eq, gq = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Yq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.ZJ().incrementRenderId(), this.computeWorldMatrix(!0);
          const Oq = this;
          if (Oq.yR && Oq.fn) {
            const gq = Oq.yR();
            qq = gq.boundingBox.minimumWorld.clone(), Eq = gq.boundingBox.maximumWorld.clone()
          } else qq = new lq.q(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), Eq = new lq.q(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (gq) {
            const gq = this.getDescendants(!1);
            for (const Oq of gq) {
              const gq = Oq;
              if (gq.computeWorldMatrix(!0), Yq && !Yq(gq)) continue;
              if (!gq.yR || 0 === gq.getTotalVertices()) continue;
              const mq = gq.yR().boundingBox,
                xq = mq.minimumWorld,
                Aq = mq.maximumWorld;
              lq.q.CheckExtends(xq, qq, Eq), lq.q.CheckExtends(Aq, qq, Eq)
            }
          }
          return {
            min: qq,
            max: Eq
          }
        }
      }, (() => {
        const lq = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Eq = [(0, Oq.M)()], gq = [(0, Oq.M)()], Bq = [(0, Oq.M)()], Wq = [(0, Oq.M)()], Nq = [(0, Oq.M)()], (0, Yq.f)(null, null, Eq, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: qq => "name" in qq,
            get: qq => qq.name,
            set: (qq, Eq) => {
              qq.name = Eq
            }
          },
          metadata: lq
        }, aq, Vq), (0, Yq.f)(null, null, gq, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: qq => "id" in qq,
            get: qq => qq.id,
            set: (qq, Eq) => {
              qq.id = Eq
            }
          },
          metadata: lq
        }, dq, jq), (0, Yq.f)(null, null, Bq, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: qq => "uniqueId" in qq,
            get: qq => qq.uniqueId,
            set: (qq, Eq) => {
              qq.uniqueId = Eq
            }
          },
          metadata: lq
        }, Hq, oq), (0, Yq.f)(null, null, Wq, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: qq => "state" in qq,
            get: qq => qq.state,
            set: (qq, Eq) => {
              qq.state = Eq
            }
          },
          metadata: lq
        }, Pq, Qq), (0, Yq.f)(null, null, Nq, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: qq => "metadata" in qq,
            get: qq => qq.metadata,
            set: (qq, Eq) => {
              qq.metadata = Eq
            }
          },
          metadata: lq
        }, yq, tq), lq && Object.defineProperty(qq, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: lq
        })
      })(), qq._AnimationRangeFactory = (qq, Eq, gq) => {
        throw (0, Aq.m)("AnimationRange")
      }, qq._NodeConstructors = {}, qq
    })()
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);