export const id = 259;
export const ids = [259];
export const modules = {
  40265: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Zk
    });
    var Xk = Ik(40003),
      Tk = Ik(40011),
      ik = Ik(37153),
      yk = Ik(37331),
      lk = Ik(40218),
      ak = Ik(40134),
      qk = Ik(37201),
      Lk = Ik(40195),
      tk = Ik(40021);
    let Zk = (() => {
      var kk, Fk;
      let Ik, Zk, jk, ek, wk, Hk, Jk, xk, Pk, Kk, Qk, sk, Vk, zk = lk.b,
        Sk = [],
        vk = [],
        Ek = [],
        Ok = [],
        nk = [],
        Gk = [],
        pk = [],
        uk = [],
        bk = [],
        Rk = [],
        Uk = [],
        Ck = [],
        Nk = [],
        ck = [],
        Wk = [],
        fk = [],
        Bk = [],
        dk = [],
        Yk = [],
        Ak = [],
        gk = [];
      return kk = class extends zk {
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
          return (0, Xk.e)(this, Fk, "f")
        }
        set renderPriority(kk) {
          (0, Xk.f)(this, Fk, kk, "f")
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
        getProjectionMatrix(kk, Fk) {
          return null
        }
        constructor(Ik, Tk, ik) {
          super(Ik, Tk, !1), this.diffuse = ((0, Xk.n)(this, Sk), (0, Xk.n)(this, vk, new yk.e(1, 1, 1))), this.specular = ((0, Xk.n)(this, Ek), (0, Xk.n)(this, Ok, new yk.e(1, 1, 1))), this.falloffType = ((0, Xk.n)(this, nk), (0, Xk.n)(this, Gk, kk.FALLOFF_DEFAULT)), this.intensity = ((0, Xk.n)(this, pk), (0, Xk.n)(this, uk, 1)), this._range = ((0, Xk.n)(this, bk), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = kk.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, Xk.n)(this, Rk, void 0), Fk.set(this, ((0, Xk.n)(this, Uk), (0, Xk.n)(this, Ck, 0))), this._shadowEnabled = ((0, Xk.n)(this, Nk), (0, Xk.n)(this, ck, !0)), this._includedOnlyMeshes = (0, Xk.n)(this, Wk), this._excludeWithLayerMask = (0, Xk.n)(this, fk, 0), this._includeOnlyWithLayerMask = ((0, Xk.n)(this, Bk), (0, Xk.n)(this, dk, 0)), this._lightmapMode = ((0, Xk.n)(this, Yk), (0, Xk.n)(this, Ak, 0)), this._shadowGenerators = ((0, Xk.n)(this, gk), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, ik || this.mG().addLight(this), this._uniformBuffer = new ak.c(this.mG().Oe(), void 0, void 0, Ik), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], ik || this._resyncMeshes()
        }
        transferTexturesToEffect(kk, Fk) {
          return this
        }
        _bindLight(kk, Fk, Ik, Xk) {
          let Tk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const ik = kk.toString();
          let lk = !1;
          if (this._uniformBuffer.bindToEffect(Ik, "Light" + ik), this._renderId !== Fk.getRenderId() || this._lastUseSpecular !== Xk || !this._uniformBuffer.useUbo) {
            this._renderId = Fk.getRenderId(), this._lastUseSpecular = Xk;
            const kk = this.getScaledIntensity();
            this.transferToEffect(Ik, ik), this.diffuse.scaleToRef(kk, yk.k.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", yk.k.Color3[0], this.range, ik), Xk && (this.specular.scaleToRef(kk, yk.k.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", yk.k.Color3[1], this.radius, ik)), lk = !0
          }
          if (this.transferTexturesToEffect(Ik, ik), Fk.shadowsEnabled && this.shadowEnabled && Tk) {
            const kk = this.getShadowGenerator(Fk.activeCamera) ?? this.getShadowGenerator();
            kk && (kk.bindShadowLight(ik, Ik), lk = !0)
          }
          lk ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(kk) {
          let Fk = "Name: " + this.name;
          if (Fk += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let Ik = 0; Ik < this.animations.length; Ik++) Fk += ", animation[0]: " + this.animations[Ik].toString(kk);
          return Fk
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.Hs() || this._resyncMeshes()
        }
        Av(kk) {
          super.Av(kk), this._resyncMeshes()
        }
        getShadowGenerator() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(kk) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return ik.t.Zero()
        }
        canAffectMesh(kk) {
          return !kk || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(kk)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(kk)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & kk.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & kk.layerMask)))
        }
        dispose(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const kk = this._shadowGenerators.values();
            for (let Fk = kk.next(); !0 !== Fk.done; Fk = kk.next()) {
              Fk.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.mG().stopAnimation(this), this._parentContainer) {
            const kk = this._parentContainer.lights.indexOf(this);
            kk > -1 && this._parentContainer.lights.splice(kk, 1), this._parentContainer = null
          }
          for (const Ik of this.mG().meshes) Ik._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.mG().removeLight(this), super.dispose(kk, Fk)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(Fk) {
          let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Xk = kk.GetConstructorFromName(this.getTypeID(), Fk, this.mG());
          if (!Xk) return null;
          const Tk = tk.b.Clone(Xk, this);
          return Fk && (Tk.name = Fk), Ik && (Tk.parent = Ik), Tk.Av(this.isEnabled()), this.onClonedObservable.notifyObservers(Tk), Tk
        }
        serialize() {
          const kk = tk.b.Serialize(this);
          if (kk.uniqueId = this.uniqueId, kk.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(kk), this.excludedMeshes.length > 0) {
            kk.excludedMeshesIds = [];
            for (const Fk of this.excludedMeshes) kk.excludedMeshesIds.push(Fk.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            kk.includedOnlyMeshesIds = [];
            for (const Fk of this.includedOnlyMeshes) kk.includedOnlyMeshesIds.push(Fk.id)
          }
          return tk.b.AppendSerializedAnimations(this, kk), kk.nZ = this.serializeAnimationRanges(), kk.isEnabled = this.isEnabled(), kk
        }
        static GetConstructorFromName(kk, Fk, Ik) {
          const Xk = lk.b.Construct("Light_Type_" + kk, Fk, Ik);
          return Xk || null
        }
        static Parse(Fk, Ik) {
          let Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const Tk = kk.GetConstructorFromName(Fk.type, Fk.name, Ik);
          if (!Tk) return null;
          const ik = tk.b.Parse(Tk, Fk, Ik, Xk);
          if (Fk.excludedMeshesIds && (ik._excludedMeshesIds = Fk.excludedMeshesIds), Fk.includedOnlyMeshesIds && (ik._includedOnlyMeshesIds = Fk.includedOnlyMeshesIds), void 0 !== Fk.parentId && (ik._waitingParentId = Fk.parentId), void 0 !== Fk.parentInstanceIndex && (ik._waitingParentInstanceIndex = Fk.parentInstanceIndex), void 0 !== Fk.falloffType && (ik.falloffType = Fk.falloffType), void 0 !== Fk.lightmapMode && (ik.lightmapMode = Fk.lightmapMode), Fk.animations) {
            for (let kk = 0; kk < Fk.animations.length; kk++) {
              const Ik = Fk.animations[kk],
                Xk = (0, qk.b)("BABYLON.Animation");
              Xk && ik.animations.push(Xk.Parse(Ik))
            }
            lk.b.ParseAnimationRanges(ik, Fk, Ik)
          }
          return Fk.autoAnimate && Ik.beginAnimation(ik, Fk.autoAnimateFrom, Fk.autoAnimateTo, Fk.autoAnimateLoop, Fk.autoAnimateSpeed || 1), void 0 !== Fk.isEnabled && ik.Av(Fk.isEnabled), ik._onParsed(Fk, Ik, Xk), ik
        }
        _onParsed(kk, Fk) {}
        _hookArrayForExcluded(kk) {
          var Fk = this;
          const Ik = kk.push;
          kk.push = function() {
            for (var Xk = arguments.length, Tk = new Array(Xk), ik = 0; ik < Xk; ik++) Tk[ik] = arguments[ik];
            const yk = Ik.apply(kk, Tk);
            if (Fk._clusteredContainer) return yk;
            for (const kk of Tk) kk._resyncLightSource(Fk);
            return yk
          };
          const Xk = kk.splice;
          kk.splice = (Fk, Ik) => {
            const Tk = Xk.call(kk, Fk, Ik ?? kk.length);
            if (this._clusteredContainer) return Tk;
            for (const kk of Tk) kk._resyncLightSource(this);
            return Tk
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(kk) {
          var Fk = this;
          const Ik = kk.push;
          kk.push = function() {
            for (var Xk = arguments.length, Tk = new Array(Xk), ik = 0; ik < Xk; ik++) Tk[ik] = arguments[ik];
            const yk = Ik.apply(kk, Tk);
            return Fk._resyncMeshes(), yk
          };
          const Xk = kk.splice;
          kk.splice = (Fk, Ik) => {
            const Tk = Xk.call(kk, Fk, Ik ?? kk.length);
            return this._resyncMeshes(), Tk
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const kk of this.mG().meshes) kk._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const kk of this.mG().meshes) - 1 !== kk.lightSources.indexOf(this) && kk._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.mG().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let Fk = 0;
          const Ik = this.getTypeID();
          let Xk = this.intensityMode;
          switch (Xk === kk.INTENSITYMODE_AUTOMATIC && (Xk = Ik === kk.LIGHTTYPEID_DIRECTIONALLIGHT ? kk.INTENSITYMODE_ILLUMINANCE : kk.INTENSITYMODE_LUMINOUSINTENSITY), Ik) {
            case kk.LIGHTTYPEID_POINTLIGHT:
            case kk.LIGHTTYPEID_SPOTLIGHT:
              switch (Xk) {
                case kk.INTENSITYMODE_LUMINOUSPOWER:
                  Fk = 1 / (4 * Math.PI);
                  break;
                case kk.INTENSITYMODE_LUMINOUSINTENSITY:
                  Fk = 1;
                  break;
                case kk.INTENSITYMODE_LUMINANCE:
                  Fk = this.radius * this.radius
              }
              break;
            case kk.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (Xk) {
                case kk.INTENSITYMODE_ILLUMINANCE:
                  Fk = 1;
                  break;
                case kk.INTENSITYMODE_LUMINANCE: {
                  let kk = this.radius;
                  kk = Math.max(kk, .001);
                  Fk = 2 * Math.PI * (1 - Math.cos(kk));
                  break
                }
              }
              break;
            case kk.LIGHTTYPEID_HEMISPHERICLIGHT:
            case kk.LIGHTTYPEID_RECT_AREALIGHT:
              Fk = 1
          }
          return Fk
        }
        _reorderLightsInScene() {
          const kk = this.mG();
          0 != this._renderPriority && (kk.requireLightSorting = !0), this.mG().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, Fk = new WeakMap, (() => {
        const Fk = "function" === typeof Symbol && Symbol.metadata ? Object.create(zk[Symbol.metadata] ?? null) : void 0;
        Ik = [(0, Tk.n)()], Zk = [(0, Tk.n)()], jk = [(0, Tk.J)()], ek = [(0, Tk.J)()], wk = [(0, Tk.J)()], Hk = [(0, Tk.J)()], Jk = [(0, Tk.J)()], xk = [(0, Tk.J)()], Pk = [(0, Tk.e)("_reorderLightsInScene")], Kk = [(0, Tk.J)("shadowEnabled")], Qk = [(0, Tk.J)("excludeWithLayerMask")], sk = [(0, Tk.J)("includeOnlyWithLayerMask")], Vk = [(0, Tk.J)("lightmapMode")], (0, Xk.j)(kk, null, wk, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: kk => "range" in kk,
            get: kk => kk.range
          },
          metadata: Fk
        }, null, Sk), (0, Xk.j)(kk, null, Hk, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "intensityMode" in kk,
            get: kk => kk.intensityMode
          },
          metadata: Fk
        }, null, Sk), (0, Xk.j)(kk, null, Jk, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: kk => "radius" in kk,
            get: kk => kk.radius
          },
          metadata: Fk
        }, null, Sk), (0, Xk.j)(kk, null, Pk, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: kk => "renderPriority" in kk,
            get: kk => kk.renderPriority,
            set: (kk, Fk) => {
              kk.renderPriority = Fk
            }
          },
          metadata: Fk
        }, Ck, Nk), (0, Xk.j)(null, null, Ik, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: kk => "diffuse" in kk,
            get: kk => kk.diffuse,
            set: (kk, Fk) => {
              kk.diffuse = Fk
            }
          },
          metadata: Fk
        }, vk, Ek), (0, Xk.j)(null, null, Zk, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: kk => "specular" in kk,
            get: kk => kk.specular,
            set: (kk, Fk) => {
              kk.specular = Fk
            }
          },
          metadata: Fk
        }, Ok, nk), (0, Xk.j)(null, null, jk, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: kk => "falloffType" in kk,
            get: kk => kk.falloffType,
            set: (kk, Fk) => {
              kk.falloffType = Fk
            }
          },
          metadata: Fk
        }, Gk, pk), (0, Xk.j)(null, null, ek, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: kk => "intensity" in kk,
            get: kk => kk.intensity,
            set: (kk, Fk) => {
              kk.intensity = Fk
            }
          },
          metadata: Fk
        }, uk, bk), (0, Xk.j)(null, null, xk, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: kk => "_renderPriority" in kk,
            get: kk => kk._renderPriority,
            set: (kk, Fk) => {
              kk._renderPriority = Fk
            }
          },
          metadata: Fk
        }, Rk, Uk), (0, Xk.j)(null, null, Kk, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: kk => "_shadowEnabled" in kk,
            get: kk => kk._shadowEnabled,
            set: (kk, Fk) => {
              kk._shadowEnabled = Fk
            }
          },
          metadata: Fk
        }, ck, Wk), (0, Xk.j)(null, null, Qk, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: kk => "_excludeWithLayerMask" in kk,
            get: kk => kk._excludeWithLayerMask,
            set: (kk, Fk) => {
              kk._excludeWithLayerMask = Fk
            }
          },
          metadata: Fk
        }, fk, Bk), (0, Xk.j)(null, null, sk, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: kk => "_includeOnlyWithLayerMask" in kk,
            get: kk => kk._includeOnlyWithLayerMask,
            set: (kk, Fk) => {
              kk._includeOnlyWithLayerMask = Fk
            }
          },
          metadata: Fk
        }, dk, Yk), (0, Xk.j)(null, null, Vk, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: kk => "_lightmapMode" in kk,
            get: kk => kk._lightmapMode,
            set: (kk, Fk) => {
              kk._lightmapMode = Fk
            }
          },
          metadata: Fk
        }, Ak, gk), Fk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Fk
        })
      })(), kk.FALLOFF_DEFAULT = Lk.b.FALLOFF_DEFAULT, kk.FALLOFF_PHYSICAL = Lk.b.FALLOFF_PHYSICAL, kk.FALLOFF_GLTF = Lk.b.FALLOFF_GLTF, kk.FALLOFF_STANDARD = Lk.b.FALLOFF_STANDARD, kk.LIGHTMAP_DEFAULT = Lk.b.LIGHTMAP_DEFAULT, kk.LIGHTMAP_SPECULAR = Lk.b.LIGHTMAP_SPECULAR, kk.LIGHTMAP_SHADOWSONLY = Lk.b.LIGHTMAP_SHADOWSONLY, kk.INTENSITYMODE_AUTOMATIC = Lk.b.INTENSITYMODE_AUTOMATIC, kk.INTENSITYMODE_LUMINOUSPOWER = Lk.b.INTENSITYMODE_LUMINOUSPOWER, kk.INTENSITYMODE_LUMINOUSINTENSITY = Lk.b.INTENSITYMODE_LUMINOUSINTENSITY, kk.INTENSITYMODE_ILLUMINANCE = Lk.b.INTENSITYMODE_ILLUMINANCE, kk.INTENSITYMODE_LUMINANCE = Lk.b.INTENSITYMODE_LUMINANCE, kk.LIGHTTYPEID_POINTLIGHT = Lk.b.LIGHTTYPEID_POINTLIGHT, kk.LIGHTTYPEID_DIRECTIONALLIGHT = Lk.b.LIGHTTYPEID_DIRECTIONALLIGHT, kk.LIGHTTYPEID_SPOTLIGHT = Lk.b.LIGHTTYPEID_SPOTLIGHT, kk.LIGHTTYPEID_HEMISPHERICLIGHT = Lk.b.LIGHTTYPEID_HEMISPHERICLIGHT, kk.LIGHTTYPEID_RECT_AREALIGHT = Lk.b.LIGHTTYPEID_RECT_AREALIGHT, kk
    })()
  },
  40218: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => tk
    });
    var Xk = Ik(40003),
      Tk = Ik(37153),
      ik = Ik(40011),
      yk = Ik(37187),
      lk = Ik(37178),
      ak = Ik(39863),
      qk = Ik(40021);
    class Lk {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new yk.e, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new yk.e, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let tk = (() => {
      var kk;
      let Fk, Ik, tk, Zk, jk, ek = [],
        wk = [],
        Hk = [],
        Jk = [],
        xk = [],
        Pk = [],
        Kk = [],
        Qk = [],
        sk = [],
        Vk = [];
      return kk = class {
        static AddNodeConstructor(kk, Fk) {
          this._NodeConstructors[kk] = Fk
        }
        static Construct(kk, Fk, Ik, Xk) {
          const Tk = this._NodeConstructors[kk];
          return Tk ? Tk(Fk, Ik, Xk) : null
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
        Hs() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(kk) {
          if (this._parentNode === kk) return;
          const Fk = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const Fk = this._parentNode._children.indexOf(this); - 1 !== Fk && this._parentNode._children.splice(Fk, 1), kk || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = kk, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), Fk || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
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
              Fk = kk.length - 1;
            kk[this._nodeDataStorage._sceneRootNodesIndex] = kk[Fk], kk[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
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
          this._onDisposeObserver && this.hG.remove(this._onDisposeObserver), this._onDisposeObserver = this.hG.add(kk)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var kk;
          return (kk = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (kk._onEffectiveEnabledStateChangedObservable = new yk.e)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new Lk, this.name = (0, Xk.n)(this, ek, void 0), this.id = ((0, Xk.n)(this, wk), (0, Xk.n)(this, Hk, void 0)), this.uniqueId = ((0, Xk.n)(this, Jk), (0, Xk.n)(this, xk, void 0)), this.state = ((0, Xk.n)(this, Pk), (0, Xk.n)(this, Kk, "")), this.metadata = ((0, Xk.n)(this, Qk), (0, Xk.n)(this, sk, null)), this._internalMetadata = (0, Xk.n)(this, Vk), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new yk.e, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = Tk.c.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.hG = new yk.e, this._onDisposeObserver = null, this._behaviors = new Array, this.name = kk, this.id = kk, this._scene = Fk || lk.e.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), Ik && this._addToSceneRootNodes()
        }
        mG() {
          return this._scene
        }
        Oe() {
          return this._scene.Oe()
        }
        addBehavior(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(kk) || (kk.init(), this._scene.isLoading && !Fk ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(kk) && kk.attach(this)
          })) : kk.attach(this), this._behaviors.push(kk)), this
        }
        removeBehavior(kk) {
          const Fk = this._behaviors.indexOf(kk);
          return -1 === Fk || (this._behaviors.splice(Fk, 1), kk.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(kk) {
          for (const Fk of this._behaviors)
            if (Fk.name === kk) return Fk;
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
        UFk(kk) {
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
            Fk = kk ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const Ik of this._children) Ik._syncParentEnabledState();
          if (kk) {
            const kk = this.isEnabled();
            kk !== Fk && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(kk)
          }
        }
        Av(kk) {
          if (this._nodeDataStorage._isEnabled === kk) return;
          const Fk = this._hasEffectiveEnabledStateObservers(),
            Ik = Fk ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = kk, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(kk), Fk) {
            const kk = this.isEnabled();
            kk !== Ik && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(kk)
          }
        }
        isDescendantOf(kk) {
          return !!this.parent && (this.parent === kk || this.parent.isDescendantOf(kk))
        }
        _getDescendants(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            Ik = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let Xk = 0; Xk < this._children.length; Xk++) {
              const Tk = this._children[Xk];
              Ik && !Ik(Tk) || kk.push(Tk), Fk || Tk._getDescendants(kk, !1, Ik)
            }
        }
        getDescendants(kk, Fk) {
          const Ik = [];
          return this._getDescendants(Ik, kk, Fk), Ik
        }
        getChildMeshes(kk, Fk) {
          const Ik = [];
          return this._getDescendants(Ik, kk, (kk => (!Fk || Fk(kk)) && void 0 !== kk.cullingStrategy)), Ik
        }
        getChildren(kk) {
          let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(Fk, kk)
        }
        _setReady(kk) {
          kk !== this._nodeDataStorage._isReady && (kk ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(kk) {
          for (let Fk = 0; Fk < this.animations.length; Fk++) {
            const Ik = this.animations[Fk];
            if (Ik.name === kk) return Ik
          }
          return null
        }
        createAnimationRange(Fk, Ik, Xk) {
          if (!this._ranges[Fk]) {
            this._ranges[Fk] = kk._AnimationRangeFactory(Fk, Ik, Xk);
            for (let kk = 0, Tk = this.animations.length; kk < Tk; kk++) this.animations[kk] && this.animations[kk].createRange(Fk, Ik, Xk)
          }
        }
        deleteAnimationRange(kk) {
          let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let Ik = 0, Xk = this.animations.length; Ik < Xk; Ik++) this.animations[Ik] && this.animations[Ik].deleteRange(kk, Fk);
          this._ranges[kk] = null
        }
        getAnimationRange(kk) {
          return this._ranges[kk] || null
        }
        clone(Fk, Ik, Xk) {
          const Tk = qk.b.Clone((() => new kk(Fk, this.mG())), this);
          if (Ik && (Tk.parent = Ik), !Xk) {
            const kk = this.getDescendants(!0);
            for (let Ik = 0; Ik < kk.length; Ik++) {
              const Xk = kk[Ik];
              Xk.clone(Fk + "." + Xk.name, Tk)
            }
          }
          return Tk
        }
        getAnimationRanges() {
          const kk = [];
          let Fk;
          for (Fk in this._ranges) kk.push(this._ranges[Fk]);
          return kk
        }
        beginAnimation(kk, Fk, Ik, Xk) {
          const Tk = this.getAnimationRange(kk);
          return Tk ? this._scene.beginAnimation(this, Tk.from, Tk.to, Fk, Ik, Xk) : null
        }
        serializeAnimationRanges() {
          const kk = [];
          for (const Fk in this._ranges) {
            const Ik = this._ranges[Fk];
            if (!Ik) continue;
            const Xk = {};
            Xk.name = Fk, Xk.from = Ik.from, Xk.to = Ik.to, kk.push(Xk)
          }
          return kk
        }
        computeWorldMatrix(kk) {
          return this._worldMatrix || (this._worldMatrix = Tk.c.Identity()), this._worldMatrix
        }
        dispose(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !kk) {
            const Ik = this.getDescendants(!0);
            for (const Xk of Ik) Xk.dispose(kk, Fk)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.hG.notifyObservers(this), this.hG.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const Ik of this._behaviors) Ik.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(kk, Fk, Ik) {
          if (Fk.nZ)
            for (let Xk = 0; Xk < Fk.nZ.length; Xk++) {
              const Ik = Fk.nZ[Xk];
              kk.createAnimationRange(Ik.name, Ik.from, Ik.to)
            }
        }
        getHierarchyBoundingVectors() {
          let kk, Fk, Ik = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Xk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.mG().incrementRenderId(), this.computeWorldMatrix(!0);
          const ik = this;
          if (ik.vR && ik.lK) {
            const Ik = ik.vR();
            kk = Ik.boundingBox.minimumWorld.clone(), Fk = Ik.boundingBox.maximumWorld.clone()
          } else kk = new Tk.t(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), Fk = new Tk.t(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (Ik) {
            const Ik = this.getDescendants(!1);
            for (const ik of Ik) {
              const Ik = ik;
              if (Ik.computeWorldMatrix(!0), Xk && !Xk(Ik)) continue;
              if (!Ik.vR || 0 === Ik.getTotalVertices()) continue;
              const yk = Ik.vR().boundingBox,
                lk = yk.minimumWorld,
                ak = yk.maximumWorld;
              Tk.t.CheckExtends(lk, kk, Fk), Tk.t.CheckExtends(ak, kk, Fk)
            }
          }
          return {
            min: kk,
            max: Fk
          }
        }
      }, (() => {
        const Tk = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        Fk = [(0, ik.J)()], Ik = [(0, ik.J)()], tk = [(0, ik.J)()], Zk = [(0, ik.J)()], jk = [(0, ik.J)()], (0, Xk.j)(null, null, Fk, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: kk => "name" in kk,
            get: kk => kk.name,
            set: (kk, Fk) => {
              kk.name = Fk
            }
          },
          metadata: Tk
        }, ek, wk), (0, Xk.j)(null, null, Ik, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: kk => "id" in kk,
            get: kk => kk.id,
            set: (kk, Fk) => {
              kk.id = Fk
            }
          },
          metadata: Tk
        }, Hk, Jk), (0, Xk.j)(null, null, tk, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: kk => "uniqueId" in kk,
            get: kk => kk.uniqueId,
            set: (kk, Fk) => {
              kk.uniqueId = Fk
            }
          },
          metadata: Tk
        }, xk, Pk), (0, Xk.j)(null, null, Zk, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: kk => "state" in kk,
            get: kk => kk.state,
            set: (kk, Fk) => {
              kk.state = Fk
            }
          },
          metadata: Tk
        }, Kk, Qk), (0, Xk.j)(null, null, jk, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: kk => "metadata" in kk,
            get: kk => kk.metadata,
            set: (kk, Fk) => {
              kk.metadata = Fk
            }
          },
          metadata: Tk
        }, sk, Vk), Tk && Object.defineProperty(kk, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Tk
        })
      })(), kk._AnimationRangeFactory = (kk, Fk, Ik) => {
        throw (0, ak.j)("AnimationRange")
      }, kk._NodeConstructors = {}, kk
    })()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);