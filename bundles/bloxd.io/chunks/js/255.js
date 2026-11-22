export const id = 255;
export const ids = [255];
export const modules = {
  39822: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => xk
    });
    var Dk = ik(39566),
      fk = ik(39570),
      Sk = ik(36698),
      bk = ik(36874),
      rk = ik(39787),
      Pk = ik(39696),
      mk = ik(36734),
      Mk = ik(39769),
      Kk = ik(39585);
    let xk = (() => {
      var kk, ek;
      let ik, xk, nk, Uk, Hk, wk, lk, pk, yk, Yk, Lk, Ck, Ak, jk = rk.b,
        sk = [],
        dk = [],
        Vk = [],
        Fk = [],
        uk = [],
        qk = [],
        Ik = [],
        zk = [],
        Qk = [],
        vk = [],
        Ek = [],
        hk = [],
        ak = [],
        Wk = [],
        tk = [],
        Xk = [],
        Bk = [],
        ck = [],
        Tk = [],
        Zk = [],
        Ok = [];
      return kk = class extends jk {
        get range() {
          return this._range
        }
        set range(kk) {
          this._range = kk, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(kk) {
          this._intensityMode = kk, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(kk) {
          this._radius = kk, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, Dk.b)(this, ek, "f")
        }
        set renderPriority(kk) {
          (0, Dk.c)(this, ek, kk, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(kk) {
          this._shadowEnabled !== kk && (this._shadowEnabled = kk, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(kk) {
          this._includedOnlyMeshes = kk, this._hookArrayForIncludedOnly(kk)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(kk) {
          this._excludedMeshes = kk, this._hookArrayForExcluded(kk)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(kk) {
          this._excludeWithLayerMask = kk, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(kk) {
          this._includeOnlyWithLayerMask = kk, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(kk) {
          this._lightmapMode !== kk && (this._lightmapMode = kk, this._markMeshesAsLightDirty())
        }
        getViewMatrix(kk) {
          return null
        }
        getProjectionMatrix(kk, ek) {
          return null
        }
        constructor(ik, fk, Sk) {
          super(ik, fk, !1), this.diffuse = ((0, Dk.e)(this, sk), (0, Dk.e)(this, dk, new bk.e(1, 1, 1))), this.specular = ((0, Dk.e)(this, Vk), (0, Dk.e)(this, Fk, new bk.e(1, 1, 1))), this.falloffType = ((0, Dk.e)(this, uk), (0, Dk.e)(this, qk, kk.FALLOFF_DEFAULT)), this.intensity = ((0, Dk.e)(this, Ik), (0, Dk.e)(this, zk, 1)), this._range = ((0, Dk.e)(this, Qk), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = kk.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, Dk.e)(this, vk, void 0), ek.set(this, ((0, Dk.e)(this, Ek), (0, Dk.e)(this, hk, 0))), this._shadowEnabled = ((0, Dk.e)(this, ak), (0, Dk.e)(this, Wk, !0)), this._includedOnlyMeshes = (0, Dk.e)(this, tk), this._excludeWithLayerMask = (0, Dk.e)(this, Xk, 0), this._includeOnlyWithLayerMask = ((0, Dk.e)(this, Bk), (0, Dk.e)(this, ck, 0)), this._lightmapMode = ((0, Dk.e)(this, Tk), (0, Dk.e)(this, Zk, 0)), this._shadowGenerators = ((0, Dk.e)(this, Ok), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, Sk || this.XF().addLight(this), this._uniformBuffer = new Pk.d(this.XF().JU(), void 0, void 0, ik), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], Sk || this._resyncMeshes()
        }
        transferTexturesToEffect(kk, ek) {
          return this
        }
        _bindLight(kk, ek, ik, Dk) {
          let fk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Sk = kk.toString();
          let rk = !1;
          if (this._uniformBuffer.bindToEffect(ik, "Light" + Sk), this._renderId !== ek.getRenderId() || this._lastUseSpecular !== Dk || !this._uniformBuffer.useUbo) {
            this._renderId = ek.getRenderId(), this._lastUseSpecular = Dk;
            const kk = this.getScaledIntensity();
            this.transferToEffect(ik, Sk), this.diffuse.scaleToRef(kk, bk.k.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", bk.k.Color3[0], this.range, Sk), Dk && (this.specular.scaleToRef(kk, bk.k.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", bk.k.Color3[1], this.radius, Sk)), rk = !0
          }
          if (this.transferTexturesToEffect(ik, Sk), ek.shadowsEnabled && this.shadowEnabled && fk) {
            const kk = this.getShadowGenerator(ek.activeCamera) ?? this.getShadowGenerator();
            kk && (kk.bindShadowLight(Sk, ik), rk = !0)
          }
          rk ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(kk) {
          let ek = "Name: " + this.name;
          if (ek += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let ik = 0; ik < this.animations.length; ik++) ek += ", animation[0]: " + this.animations[ik].toString(kk);
          return ek
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.RL() || this._resyncMeshes()
        }
        bV(kk) {
          super.bV(kk), this._resyncMeshes()
        }
        getShadowGenerator() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(kk) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return Sk.o.Zero()
        }
        canAffectMesh(kk) {
          return !kk || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(kk)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(kk)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & kk.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & kk.layerMask)))
        }
        dispose(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const kk = this._shadowGenerators.values();
            for (let ek = kk.next(); !0 !== ek.done; ek = kk.next()) {
              ek.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.XF().stopAnimation(this), this._parentContainer) {
            const kk = this._parentContainer.lights.indexOf(this);
            kk > -1 && this._parentContainer.lights.splice(kk, 1), this._parentContainer = null
          }
          for (const ik of this.XF().meshes) ik._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.XF().removeLight(this), super.dispose(kk, ek)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(ek) {
          let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Dk = kk.GetConstructorFromName(this.getTypeID(), ek, this.XF());
          if (!Dk) return null;
          const fk = Kk.b.Clone(Dk, this);
          return ek && (fk.name = ek), ik && (fk.parent = ik), fk.bV(this.isEnabled()), this.onClonedObservable.notifyObservers(fk), fk
        }
        serialize() {
          const kk = Kk.b.Serialize(this);
          if (kk.uniqueId = this.uniqueId, kk.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(kk), this.excludedMeshes.length > 0) {
            kk.excludedMeshesIds = [];
            for (const ek of this.excludedMeshes) kk.excludedMeshesIds.push(ek.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            kk.includedOnlyMeshesIds = [];
            for (const ek of this.includedOnlyMeshes) kk.includedOnlyMeshesIds.push(ek.id)
          }
          return Kk.b.AppendSerializedAnimations(this, kk), kk.lw = this.serializeAnimationRanges(), kk.isEnabled = this.isEnabled(), kk
        }
        static GetConstructorFromName(kk, ek, ik) {
          const Dk = rk.b.Construct("Light_Type_" + kk, ek, ik);
          return Dk || null
        }
        static Parse(ek, ik) {
          let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const fk = kk.GetConstructorFromName(ek.type, ek.name, ik);
          if (!fk) return null;
          const Sk = Kk.b.Parse(fk, ek, ik, Dk);
          if (ek.excludedMeshesIds && (Sk._excludedMeshesIds = ek.excludedMeshesIds), ek.includedOnlyMeshesIds && (Sk._includedOnlyMeshesIds = ek.includedOnlyMeshesIds), void 0 !== ek.parentId && (Sk._waitingParentId = ek.parentId), void 0 !== ek.parentInstanceIndex && (Sk._waitingParentInstanceIndex = ek.parentInstanceIndex), void 0 !== ek.falloffType && (Sk.falloffType = ek.falloffType), void 0 !== ek.lightmapMode && (Sk.lightmapMode = ek.lightmapMode), ek.animations) {
            for (let kk = 0; kk < ek.animations.length; kk++) {
              const ik = ek.animations[kk],
                Dk = (0, mk.d)("BABYLON.Animation");
              Dk && Sk.animations.push(Dk.Parse(ik))
            }
            rk.b.ParseAnimationRanges(Sk, ek, ik)
          }
          return ek.autoAnimate && ik.beginAnimation(Sk, ek.autoAnimateFrom, ek.autoAnimateTo, ek.autoAnimateLoop, ek.autoAnimateSpeed || 1), void 0 !== ek.isEnabled && Sk.bV(ek.isEnabled), Sk._onParsed(ek, ik, Dk), Sk
        }
        _onParsed(kk, ek) {}
        _hookArrayForExcluded(kk) {
          var ek = this;
          const ik = kk.push;
          kk.push = function() {
            for (var Dk = arguments.length, fk = new Array(Dk), Sk = 0; Sk < Dk; Sk++) fk[Sk] = arguments[Sk];
            const bk = ik.apply(kk, fk);
            if (ek._clusteredContainer) return bk;
            for (const kk of fk) kk._resyncLightSource(ek);
            return bk
          };
          const Dk = kk.splice;
          kk.splice = (ek, ik) => {
            const fk = Dk.call(kk, ek, ik ?? kk.length);
            if (this._clusteredContainer) return fk;
            for (const kk of fk) kk._resyncLightSource(this);
            return fk
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(kk) {
          var ek = this;
          const ik = kk.push;
          kk.push = function() {
            for (var Dk = arguments.length, fk = new Array(Dk), Sk = 0; Sk < Dk; Sk++) fk[Sk] = arguments[Sk];
            const bk = ik.apply(kk, fk);
            return ek._resyncMeshes(), bk
          };
          const Dk = kk.splice;
          kk.splice = (ek, ik) => {
            const fk = Dk.call(kk, ek, ik ?? kk.length);
            return this._resyncMeshes(), fk
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const kk of this.XF().meshes) kk._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const kk of this.XF().meshes) - 1 !== kk.lightSources.indexOf(this) && kk._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.XF().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let ek = 0;
          const ik = this.getTypeID();
          let Dk = this.intensityMode;
          switch (Dk === kk.INTENSITYMODE_AUTOMATIC && (Dk = ik === kk.LIGHTTYPEID_DIRECTIONALLIGHT ? kk.INTENSITYMODE_ILLUMINANCE : kk.INTENSITYMODE_LUMINOUSINTENSITY), ik) {
            case kk.LIGHTTYPEID_POINTLIGHT:
            case kk.LIGHTTYPEID_SPOTLIGHT:
              switch (Dk) {
                case kk.INTENSITYMODE_LUMINOUSPOWER:
                  ek = 1 / (4 * Math.PI);
                  break;
                case kk.INTENSITYMODE_LUMINOUSINTENSITY:
                  ek = 1;
                  break;
                case kk.INTENSITYMODE_LUMINANCE:
                  ek = this.radius * this.radius
              }
              break;
            case kk.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (Dk) {
                case kk.INTENSITYMODE_ILLUMINANCE:
                  ek = 1;
                  break;
                case kk.INTENSITYMODE_LUMINANCE: {
                  let kk = this.radius;
                  kk = Math.max(kk, .001);
                  ek = 2 * Math.PI * (1 - Math.cos(kk));
                  break
                }
              }
              break;
            case kk.LIGHTTYPEID_HEMISPHERICLIGHT:
            case kk.LIGHTTYPEID_RECT_AREALIGHT:
              ek = 1
          }
          return ek
        }
        _reorderLightsInScene() {
          const kk = this.XF();
          0 != this._renderPriority && (kk.requireLightSorting = !0), this.XF().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, ek = new WeakMap, (() => {
        const ek = "function" === typeof Symbol && Symbol.metadata ? Object.create(jk[Symbol.metadata] ?? null) : void 0;
        ik = [(0, fk.k)()], xk = [(0, fk.k)()], nk = [(0, fk.I)()], Uk = [(0, fk.I)()], Hk = [(0, fk.I)()], wk = [(0, fk.I)()], lk = [(0, fk.I)()], pk = [(0, fk.I)()], yk = [(0, fk.e)("_reorderLightsInScene")], Yk = [(0, fk.I)("shadowEnabled")], Lk = [(0, fk.I)("excludeWithLayerMask")], Ck = [(0, fk.I)("includeOnlyWithLayerMask")], Ak = [(0, fk.I)("lightmapMode")], (0, Dk.d)(kk, null, Hk, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: kk => "range" in kk,
            get: kk => kk.range
          },
          metadata: ek
        }, null, sk), (0, Dk.d)(kk, null, wk, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "intensityMode" in kk,
            get: kk => kk.intensityMode
          },
          metadata: ek
        }, null, sk), (0, Dk.d)(kk, null, lk, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: kk => "radius" in kk,
            get: kk => kk.radius
          },
          metadata: ek
        }, null, sk), (0, Dk.d)(kk, null, yk, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: kk => "renderPriority" in kk,
            get: kk => kk.renderPriority,
            set: (kk, ek) => {
              kk.renderPriority = ek
            }
          },
          metadata: ek
        }, hk, ak), (0, Dk.d)(null, null, ik, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: kk => "diffuse" in kk,
            get: kk => kk.diffuse,
            set: (kk, ek) => {
              kk.diffuse = ek
            }
          },
          metadata: ek
        }, dk, Vk), (0, Dk.d)(null, null, xk, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: kk => "specular" in kk,
            get: kk => kk.specular,
            set: (kk, ek) => {
              kk.specular = ek
            }
          },
          metadata: ek
        }, Fk, uk), (0, Dk.d)(null, null, nk, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: kk => "falloffType" in kk,
            get: kk => kk.falloffType,
            set: (kk, ek) => {
              kk.falloffType = ek
            }
          },
          metadata: ek
        }, qk, Ik), (0, Dk.d)(null, null, Uk, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "intensity" in kk,
            get: kk => kk.intensity,
            set: (kk, ek) => {
              kk.intensity = ek
            }
          },
          metadata: ek
        }, zk, Qk), (0, Dk.d)(null, null, pk, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: kk => "_renderPriority" in kk,
            get: kk => kk._renderPriority,
            set: (kk, ek) => {
              kk._renderPriority = ek
            }
          },
          metadata: ek
        }, vk, Ek), (0, Dk.d)(null, null, Yk, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "_shadowEnabled" in kk,
            get: kk => kk._shadowEnabled,
            set: (kk, ek) => {
              kk._shadowEnabled = ek
            }
          },
          metadata: ek
        }, Wk, tk), (0, Dk.d)(null, null, Lk, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: kk => "_excludeWithLayerMask" in kk,
            get: kk => kk._excludeWithLayerMask,
            set: (kk, ek) => {
              kk._excludeWithLayerMask = ek
            }
          },
          metadata: ek
        }, Xk, Bk), (0, Dk.d)(null, null, Ck, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: kk => "_includeOnlyWithLayerMask" in kk,
            get: kk => kk._includeOnlyWithLayerMask,
            set: (kk, ek) => {
              kk._includeOnlyWithLayerMask = ek
            }
          },
          metadata: ek
        }, ck, Tk), (0, Dk.d)(null, null, Ak, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "_lightmapMode" in kk,
            get: kk => kk._lightmapMode,
            set: (kk, ek) => {
              kk._lightmapMode = ek
            }
          },
          metadata: ek
        }, Zk, Ok), ek && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ek
        })
      })(), kk.FALLOFF_DEFAULT = Mk.d.FALLOFF_DEFAULT, kk.FALLOFF_PHYSICAL = Mk.d.FALLOFF_PHYSICAL, kk.FALLOFF_GLTF = Mk.d.FALLOFF_GLTF, kk.FALLOFF_STANDARD = Mk.d.FALLOFF_STANDARD, kk.LIGHTMAP_DEFAULT = Mk.d.LIGHTMAP_DEFAULT, kk.LIGHTMAP_SPECULAR = Mk.d.LIGHTMAP_SPECULAR, kk.LIGHTMAP_SHADOWSONLY = Mk.d.LIGHTMAP_SHADOWSONLY, kk.INTENSITYMODE_AUTOMATIC = Mk.d.INTENSITYMODE_AUTOMATIC, kk.INTENSITYMODE_LUMINOUSPOWER = Mk.d.INTENSITYMODE_LUMINOUSPOWER, kk.INTENSITYMODE_LUMINOUSINTENSITY = Mk.d.INTENSITYMODE_LUMINOUSINTENSITY, kk.INTENSITYMODE_ILLUMINANCE = Mk.d.INTENSITYMODE_ILLUMINANCE, kk.INTENSITYMODE_LUMINANCE = Mk.d.INTENSITYMODE_LUMINANCE, kk.LIGHTTYPEID_POINTLIGHT = Mk.d.LIGHTTYPEID_POINTLIGHT, kk.LIGHTTYPEID_DIRECTIONALLIGHT = Mk.d.LIGHTTYPEID_DIRECTIONALLIGHT, kk.LIGHTTYPEID_SPOTLIGHT = Mk.d.LIGHTTYPEID_SPOTLIGHT, kk.LIGHTTYPEID_HEMISPHERICLIGHT = Mk.d.LIGHTTYPEID_HEMISPHERICLIGHT, kk.LIGHTTYPEID_RECT_AREALIGHT = Mk.d.LIGHTTYPEID_RECT_AREALIGHT, kk
    })()
  },
  39787: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Kk
    });
    var Dk = ik(39566),
      fk = ik(36698),
      Sk = ik(39570),
      bk = ik(36726),
      rk = ik(36722),
      Pk = ik(39447),
      mk = ik(39585);
    class Mk {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new bk.c, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new bk.c, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let Kk = (() => {
      var kk;
      let ek, ik, Kk, xk, nk, Uk = [],
        Hk = [],
        wk = [],
        lk = [],
        pk = [],
        yk = [],
        Yk = [],
        Lk = [],
        Ck = [],
        Ak = [];
      return kk = class {
        static AddNodeConstructor(kk, ek) {
          this._NodeConstructors[kk] = ek
        }
        static Construct(kk, ek, ik, Dk) {
          const fk = this._NodeConstructors[kk];
          return fk ? fk(ek, ik, Dk) : null
        }
        set accessibilityTag(kk) {
          this._accessibilityTag = kk, this.onAccessibilityTagChangedObservable.notifyObservers(kk)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(kk) {
          this._nodeDataStorage._doNotSerialize = kk
        }
        RL() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(kk) {
          if (this._parentNode === kk) return;
          const ek = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const ek = this._parentNode._children.indexOf(this); - 1 !== ek && this._parentNode._children.splice(ek, 1), kk || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = kk, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), ek || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(kk) {
          this._nodeDataStorage._inheritVisibility = kk
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(kk) {
          this._nodeDataStorage._isVisible = kk
        }
        _serializeAsParent(kk) {
          kk.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const kk = this._scene.rootNodes,
              ek = kk.length - 1;
            kk[this._nodeDataStorage._sceneRootNodesIndex] = kk[ek], kk[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(kk) {
          this._animationPropertiesOverride = kk
        }
        getClassName() {
          return "Node"
        }
        set onDispose(kk) {
          this._onDisposeObserver && this.ZF.remove(this._onDisposeObserver), this._onDisposeObserver = this.ZF.add(kk)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var kk;
          return (kk = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (kk._onEffectiveEnabledStateChangedObservable = new bk.c)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new Mk, this.name = (0, Dk.e)(this, Uk, void 0), this.id = ((0, Dk.e)(this, Hk), (0, Dk.e)(this, wk, void 0)), this.uniqueId = ((0, Dk.e)(this, lk), (0, Dk.e)(this, pk, void 0)), this.state = ((0, Dk.e)(this, yk), (0, Dk.e)(this, Yk, "")), this.metadata = ((0, Dk.e)(this, Lk), (0, Dk.e)(this, Ck, null)), this._internalMetadata = (0, Dk.e)(this, Ak), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new bk.c, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = fk.b.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.ZF = new bk.c, this._onDisposeObserver = null, this._behaviors = new Array, this.name = kk, this.id = kk, this._scene = ek || rk.e.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), ik && this._addToSceneRootNodes()
        }
        XF() {
          return this._scene
        }
        JU() {
          return this._scene.JU()
        }
        addBehavior(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(kk) || (kk.init(), this._scene.isLoading && !ek ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(kk) && kk.attach(this)
          })) : kk.attach(this), this._behaviors.push(kk)), this
        }
        removeBehavior(kk) {
          const ek = this._behaviors.indexOf(kk);
          return -1 === ek || (this._behaviors.splice(ek, 1), kk.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(kk) {
          for (const ek of this._behaviors)
            if (ek.name === kk) return ek;
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
        updateCache(kk) {
          !kk && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(kk) {
          return this.parent ? this.parent._getActionManagerForTrigger(kk, !1) : null
        }
        _updateCache(kk) {}
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
        pek(kk) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const kk = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!kk && kk.hasObservers()
        }
        _syncParentEnabledState() {
          const kk = this._hasEffectiveEnabledStateObservers(),
            ek = kk ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const ik of this._children) ik._syncParentEnabledState();
          if (kk) {
            const kk = this.isEnabled();
            kk !== ek && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(kk)
          }
        }
        bV(kk) {
          if (this._nodeDataStorage._isEnabled === kk) return;
          const ek = this._hasEffectiveEnabledStateObservers(),
            ik = ek ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = kk, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(kk), ek) {
            const kk = this.isEnabled();
            kk !== ik && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(kk)
          }
        }
        isDescendantOf(kk) {
          return !!this.parent && (this.parent === kk || this.parent.isDescendantOf(kk))
        }
        _getDescendants(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ik = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let Dk = 0; Dk < this._children.length; Dk++) {
              const fk = this._children[Dk];
              ik && !ik(fk) || kk.push(fk), ek || fk._getDescendants(kk, !1, ik)
            }
        }
        getDescendants(kk, ek) {
          const ik = [];
          return this._getDescendants(ik, kk, ek), ik
        }
        getChildMeshes(kk, ek) {
          const ik = [];
          return this._getDescendants(ik, kk, (kk => (!ek || ek(kk)) && void 0 !== kk.cullingStrategy)), ik
        }
        getChildren(kk) {
          let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(ek, kk)
        }
        _setReady(kk) {
          kk !== this._nodeDataStorage._isReady && (kk ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(kk) {
          for (let ek = 0; ek < this.animations.length; ek++) {
            const ik = this.animations[ek];
            if (ik.name === kk) return ik
          }
          return null
        }
        createAnimationRange(ek, ik, Dk) {
          if (!this._ranges[ek]) {
            this._ranges[ek] = kk._AnimationRangeFactory(ek, ik, Dk);
            for (let kk = 0, fk = this.animations.length; kk < fk; kk++) this.animations[kk] && this.animations[kk].createRange(ek, ik, Dk)
          }
        }
        deleteAnimationRange(kk) {
          let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let ik = 0, Dk = this.animations.length; ik < Dk; ik++) this.animations[ik] && this.animations[ik].deleteRange(kk, ek);
          this._ranges[kk] = null
        }
        getAnimationRange(kk) {
          return this._ranges[kk] || null
        }
        clone(ek, ik, Dk) {
          const fk = mk.b.Clone((() => new kk(ek, this.XF())), this);
          if (ik && (fk.parent = ik), !Dk) {
            const kk = this.getDescendants(!0);
            for (let ik = 0; ik < kk.length; ik++) {
              const Dk = kk[ik];
              Dk.clone(ek + "." + Dk.name, fk)
            }
          }
          return fk
        }
        getAnimationRanges() {
          const kk = [];
          let ek;
          for (ek in this._ranges) kk.push(this._ranges[ek]);
          return kk
        }
        beginAnimation(kk, ek, ik, Dk) {
          const fk = this.getAnimationRange(kk);
          return fk ? this._scene.beginAnimation(this, fk.from, fk.to, ek, ik, Dk) : null
        }
        serializeAnimationRanges() {
          const kk = [];
          for (const ek in this._ranges) {
            const ik = this._ranges[ek];
            if (!ik) continue;
            const Dk = {};
            Dk.name = ek, Dk.from = ik.from, Dk.to = ik.to, kk.push(Dk)
          }
          return kk
        }
        computeWorldMatrix(kk) {
          return this._worldMatrix || (this._worldMatrix = fk.b.Identity()), this._worldMatrix
        }
        dispose(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !kk) {
            const ik = this.getDescendants(!0);
            for (const Dk of ik) Dk.dispose(kk, ek)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.ZF.notifyObservers(this), this.ZF.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const ik of this._behaviors) ik.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(kk, ek, ik) {
          if (ek.lw)
            for (let Dk = 0; Dk < ek.lw.length; Dk++) {
              const ik = ek.lw[Dk];
              kk.createAnimationRange(ik.name, ik.from, ik.to)
            }
        }
        getHierarchyBoundingVectors() {
          let kk, ek, ik = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Dk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.XF().incrementRenderId(), this.computeWorldMatrix(!0);
          const Sk = this;
          if (Sk.hq && Sk.TY) {
            const ik = Sk.hq();
            kk = ik.boundingBox.minimumWorld.clone(), ek = ik.boundingBox.maximumWorld.clone()
          } else kk = new fk.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), ek = new fk.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (ik) {
            const ik = this.getDescendants(!1);
            for (const Sk of ik) {
              const ik = Sk;
              if (ik.computeWorldMatrix(!0), Dk && !Dk(ik)) continue;
              if (!ik.hq || 0 === ik.getTotalVertices()) continue;
              const bk = ik.hq().boundingBox,
                rk = bk.minimumWorld,
                Pk = bk.maximumWorld;
              fk.o.CheckExtends(rk, kk, ek), fk.o.CheckExtends(Pk, kk, ek)
            }
          }
          return {
            min: kk,
            max: ek
          }
        }
      }, (() => {
        const fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ek = [(0, Sk.I)()], ik = [(0, Sk.I)()], Kk = [(0, Sk.I)()], xk = [(0, Sk.I)()], nk = [(0, Sk.I)()], (0, Dk.d)(null, null, ek, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: kk => "name" in kk,
            get: kk => kk.name,
            set: (kk, ek) => {
              kk.name = ek
            }
          },
          metadata: fk
        }, Uk, Hk), (0, Dk.d)(null, null, ik, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: kk => "id" in kk,
            get: kk => kk.id,
            set: (kk, ek) => {
              kk.id = ek
            }
          },
          metadata: fk
        }, wk, lk), (0, Dk.d)(null, null, Kk, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: kk => "uniqueId" in kk,
            get: kk => kk.uniqueId,
            set: (kk, ek) => {
              kk.uniqueId = ek
            }
          },
          metadata: fk
        }, pk, yk), (0, Dk.d)(null, null, xk, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: kk => "state" in kk,
            get: kk => kk.state,
            set: (kk, ek) => {
              kk.state = ek
            }
          },
          metadata: fk
        }, Yk, Lk), (0, Dk.d)(null, null, nk, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: kk => "metadata" in kk,
            get: kk => kk.metadata,
            set: (kk, ek) => {
              kk.metadata = ek
            }
          },
          metadata: fk
        }, Ck, Ak), fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fk
        })
      })(), kk._AnimationRangeFactory = (kk, ek, ik) => {
        throw (0, Pk.k)("AnimationRange")
      }, kk._NodeConstructors = {}, kk
    })()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);